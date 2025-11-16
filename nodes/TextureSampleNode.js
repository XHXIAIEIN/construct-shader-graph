import { NodeType } from "./NodeType.js";

export const TextureSampleNode = new NodeType(
  "Texture Sample",
  [
    { name: "Sampler", type: "texture" },
    { name: "UV", type: "vec2" },
  ],
  [{ name: "Color", type: "custom" }],
  "#90e24a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const samplerName = getSamplerName(node, "webgl1");
        const outputType = getOutputType(node, "webgl1");
        return `    ${outputType} ${outputs[0]} = texture2D(${samplerName}, ${inputs[1]});`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const samplerName = getSamplerName(node, "webgl2");
        const outputType = getOutputType(node, "webgl2");
        return `    ${outputType} ${outputs[0]} = texture(${samplerName}, ${inputs[1]});`;
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

        return `    var ${outputs[0]}: ${outputType} = textureSample(${textureName}, ${samplerName}, ${inputs[1]});`;
      },
    },
  },
  "Texture",
  ["texture", "sample", "sampler", "read"]
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
TextureSampleNode.getCustomType = (node, port) => {
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
