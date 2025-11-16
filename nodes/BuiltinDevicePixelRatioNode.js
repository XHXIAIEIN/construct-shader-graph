import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinDevicePixelRatioNode = new NodeType(
  "devicePixelRatio",
  [],
  [{ name: "Value", type: "float" }],
  PORT_TYPES.float.color,
  {
    webgl1: {
      dependency: "uniform mediump float devicePixelRatio;",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = devicePixelRatio;`,
    },
    webgl2: {
      dependency: "uniform mediump float devicePixelRatio;",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = devicePixelRatio;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = c3Params.devicePixelRatio;`,
    },
  },
  "Builtin",
  ["device", "pixel", "ratio", "dpr", "resolution"]
);
