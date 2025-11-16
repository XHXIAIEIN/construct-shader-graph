import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinLayoutCenterNode = new NodeType(
  "layoutCenter",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = (layoutStart + layoutEnd) * 0.5;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = (layoutStart + layoutEnd) * 0.5;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = (c3Params.layoutStart + c3Params.layoutEnd) * 0.5;`,
    },
  },
  "Builtin",
  ["layout", "center", "position", "midpoint"]
);

