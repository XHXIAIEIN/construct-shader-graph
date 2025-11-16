import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const SamplerFrontNode = new NodeType(
  "samplerFront",
  [],
  [{ name: "Sampler", type: "texture" }],
  PORT_TYPES.texture.color,
  {
    webgl1: {
      dependency: "",
      execution: () => "", // No execution code needed, just provides the sampler reference
    },
    webgl2: {
      dependency: "",
      execution: () => "",
    },
    webgpu: {
      dependency: "",
      execution: () => "",
    },
  },
  "Texture",
  ["sampler", "front", "texture", "layer"]
);

// Metadata about this texture sampler
SamplerFrontNode.textureMetadata = {
  outputType: "vec4", // Shared output type for all shader languages
  webgl1: {
    samplerName: "samplerFront",
  },
  webgl2: {
    samplerName: "samplerFront",
  },
  webgpu: {
    textureName: "textureFront",
    samplerName: "samplerFront",
  },
};
