import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinDestSizeNode = new NodeType(
  "destSize",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = destEnd - destStart;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = destEnd - destStart;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3Params.destEnd - c3Params.destStart;`,
    },
  },
  "Builtin",
  ["destination", "size", "dimensions", "width", "height"]
);

