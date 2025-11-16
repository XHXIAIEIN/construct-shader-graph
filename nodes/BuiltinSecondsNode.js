import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinSecondsNode = new NodeType(
  "seconds",
  [],
  [{ name: "Value", type: "float" }],
  PORT_TYPES.float.color,
  {
    webgl1: {
      dependency: "uniform highmedp float seconds;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = seconds;`,
    },
    webgl2: {
      dependency: "uniform highmedp float seconds;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = seconds;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = c3Params.seconds;`,
    },
  },
  "Builtin",
  ["time", "elapsed", "duration"]
);
