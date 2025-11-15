import { NodeType } from "./NodeType.js";

export const TextureDepthNode = new NodeType(
  "Depth Texture",
  [{ name: "UV", type: "vec2" }],
  [{ name: "Depth", type: "float" }],
  "#3a4a4a",
  {
    webgl1: {
      dependency: "uniform lowp sampler2D samplerDepth;",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = texture2D(samplerDepth, ${inputs[0]}.xy).r;`,
    },
    webgl2: {
      dependency: "uniform lowp sampler2D samplerDepth;",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = texture(samplerDepth, ${inputs[0]}.xy).r;`,
    },
    webgpu: {
      dependency: `%%SAMPLERDEPTH_BINDING%% var samplerDepth : sampler;
%%TEXTUREDEPTH_BINDING%% var textureDepth : texture_depth_2d;`,
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = textureSample(textureDepth, samplerDepth, ${inputs[0]}.xy);`,
    },
  }
);
