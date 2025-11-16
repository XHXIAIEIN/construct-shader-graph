import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinLayoutStartNode = new NodeType(
  "layoutStart",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "uniform mediump vec2 layoutStart;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = layoutStart;`,
    },
    webgl2: {
      dependency: "uniform mediump vec2 layoutStart;",
      execution: (inputs, outputs) => `    vec2 ${outputs[0]} = layoutStart;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3Params.layoutStart;`,
    },
  },
  "Builtin",
  ["layout", "start", "position"]
);
