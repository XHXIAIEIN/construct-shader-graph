import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const PixellateNode = new NodeType(
  "Pixellate",
  [
    { name: "UV", type: "vec2" },
    { name: "PixelSize", type: "vec2" },
  ],
  [{ name: "UV", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = floor(${inputs[0]} / ${inputs[1]}) * ${inputs[1]};`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = floor(${inputs[0]} / ${inputs[1]}) * ${inputs[1]};`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = floor(${inputs[0]} / ${inputs[1]}) * ${inputs[1]};`,
    },
  },
  "UV",
  ["pixellate", "pixelate", "mosaic", "uv", "effect", "pixel"]
);
