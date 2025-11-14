import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinSrcOriginEndNode = new NodeType(
  "srcOriginEnd",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "uniform mediump vec2 srcOriginEnd;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcOriginEnd;`,
    },
    webgl2: {
      dependency: "uniform mediump vec2 srcOriginEnd;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = srcOriginEnd;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3Params.srcOriginEnd;`,
    },
  }
);
