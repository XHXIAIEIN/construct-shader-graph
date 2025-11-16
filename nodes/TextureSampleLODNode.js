import { NodeType } from "./NodeType.js";

export const TextureSampleLODNode = new NodeType(
  "Texture Sample LOD",
  [
    { name: "Sampler", type: "texture" },
    { name: "UV", type: "vec2" },
    { name: "LOD", type: "float" },
  ],
  [{ name: "Color", type: "custom" }],
  "#90e24a",
  {
    webgl1: {
      dependency: `#extension GL_EXT_shader_texture_lod : enable`,
      execution: (inputs, outputs, node) => {
        const samplerName = getSamplerName(node, "webgl1");
        const outputType = getOutputType(node, "webgl1");
        return `    ${outputType} ${outputs[0]} = texture2DLodEXT(${samplerName}, ${inputs[1]}, ${inputs[2]});`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const samplerName = getSamplerName(node, "webgl2");
        const outputType = getOutputType(node, "webgl2");
        return `    ${outputType} ${outputs[0]} = textureLod(${samplerName}, ${inputs[1]}, ${inputs[2]});`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const samplerPort = node.inputPorts[0];
        let textureName = "textureFront";
        let samplerName = "samplerFront";
        let outputType = "vec4<f32>";

        if (samplerPort && samplerPort.connections.length > 0) {
          const wire = samplerPort.connections[0];
          const sourceNode = wire.startPort.node;
          if (
            sourceNode.nodeType.textureMetadata &&
            sourceNode.nodeType.textureMetadata.webgpu
          ) {
            const metadata = sourceNode.nodeType.textureMetadata.webgpu;
            textureName = metadata.textureName;
            samplerName = metadata.samplerName;
            // Get the output type and convert to WGSL format
            const baseType = sourceNode.nodeType.textureMetadata.outputType;
            outputType = baseType === "float" ? "f32" : `${baseType}<f32>`;
          }
        }

        return `    var ${outputs[0]}: ${outputType} = textureSampleLevel(${textureName}, ${samplerName}, ${inputs[1]}, ${inputs[2]});`;
      },
    },
  },
  "Texture",
  ["texture", "sample", "lod", "mipmap", "level", "detail"]
);

// Helper function to get sampler name from connected texture node
function getSamplerName(node, shaderTarget) {
  const samplerPort = node.inputPorts[0]; // Sampler input
  if (samplerPort && samplerPort.connections.length > 0) {
    const wire = samplerPort.connections[0];
    const sourceNode = wire.startPort.node;
    if (
      sourceNode.nodeType.textureMetadata &&
      sourceNode.nodeType.textureMetadata[shaderTarget]
    ) {
      return sourceNode.nodeType.textureMetadata[shaderTarget].samplerName;
    }
  }
  return "samplerFront"; // Default fallback
}

// Helper function to get output type from connected texture node
function getOutputType(node, shaderTarget) {
  const samplerPort = node.inputPorts[0]; // Sampler input
  if (samplerPort && samplerPort.connections.length > 0) {
    const wire = samplerPort.connections[0];
    const sourceNode = wire.startPort.node;
    if (sourceNode.nodeType.textureMetadata) {
      return sourceNode.nodeType.textureMetadata.outputType;
    }
  }
  return "vec4"; // Default fallback
}

// Custom type resolution for output
TextureSampleLODNode.getCustomType = (node, port) => {
  if (port.type === "output") {
    // Get the connected sampler node
    const samplerPort = node.inputPorts[0];
    if (samplerPort && samplerPort.connections.length > 0) {
      const wire = samplerPort.connections[0];
      const sourceNode = wire.startPort.node;
      if (sourceNode.nodeType.textureMetadata) {
        // Use shared output type
        return sourceNode.nodeType.textureMetadata.outputType;
      }
    }
    // Default to T (generic type) if no sampler connected
    return "T";
  }
  return port.portType;
};
