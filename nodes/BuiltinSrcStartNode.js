import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinSrcStartNode = new NodeType(
  "srcStart",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "uniform mediump vec2 srcStart;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcStart;`,
    },
    webgl2: {
      dependency: "uniform mediump vec2 srcStart;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcStart;`,
    },
    webgpu: {
      dependency: "",
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3Params.srcStart;`,
    },
  }
);
