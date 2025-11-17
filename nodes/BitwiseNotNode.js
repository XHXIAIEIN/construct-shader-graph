import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BitwiseNotNode = new NodeType(
  "Bitwise NOT",
  [{ name: "Value", type: "int" }],
  [{ name: "Result", type: "int" }],
  PORT_TYPES.int.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) => `    int ${outputs[0]} = ~${inputs[0]};`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) => `    int ${outputs[0]} = ~${inputs[0]};`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    let ${outputs[0]}: i32 = ~${inputs[0]};`,
    },
  },
  {
    category: "Bitwise",
    searchTerms: ["bitwise", "not", "~", "bit", "invert", "complement"],
  }
);
