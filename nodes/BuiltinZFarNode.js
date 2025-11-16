import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BuiltinZFarNode = new NodeType(
  "zFar",
  [],
  [{ name: "Value", type: "float" }],
  PORT_TYPES.float.color,
  {
    webgl1: {
      dependency: "uniform mediump float zFar;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = zFar;`,
    },
    webgl2: {
      dependency: "uniform mediump float zFar;",
      execution: (inputs, outputs) => `    float ${outputs[0]} = zFar;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = c3Params.zFar;`,
    },
  },
  "Builtin",
  ["z", "far", "depth", "camera"]
);
