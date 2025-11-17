import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const GoldenRatioNode = new NodeType(
  "Golden Ratio",
  [],
  [{ name: "Value", type: "float" }],
  PORT_TYPES.float.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = 1.61803398875;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = 1.61803398875;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = 1.61803398875;`,
    },
  },
  "Constants",
  ["golden", "ratio", "phi", "constant", "math"]
);
