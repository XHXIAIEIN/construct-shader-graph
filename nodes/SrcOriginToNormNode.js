import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const SrcOriginToNormNode = new NodeType(
  "srcOriginToNorm",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = (vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart);`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = (vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart);`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3_srcOriginToNorm(input.fragUV);`,
    },
  },
  "Builtin",
  ["source", "origin", "normalized", "coordinates", "uv"]
);
