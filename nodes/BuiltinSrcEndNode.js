import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinSrcEndNode = new NodeType(
  "srcEnd",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcEnd;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcEnd;`,
    },
    webgpu: {
      dependency: "",
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3Params.srcEnd;`,
    },
  },
  "Builtin",
  ["source", "end", "position"]
);
