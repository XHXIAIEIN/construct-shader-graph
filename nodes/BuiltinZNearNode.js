import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinZNearNode = new NodeType(
  "zNear",
  [],
  [{ name: "Value", type: "float" }],
  PORT_TYPES.float.color,
  {
    webgl1: {
      dependency: "uniform mediump float zNear;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = zNear;`,
    },
    webgl2: {
      dependency: "uniform mediump float zNear;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = zNear;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = c3Params.zNear;`,
    },
  },
  "Builtin",
  ["z", "near", "depth", "camera"]
);
