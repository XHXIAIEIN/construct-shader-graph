import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const GetBitNode = new NodeType(
  "Get Bit",
  [
    { name: "Value", type: "int" },
    { name: "Index", type: "int" },
  ],
  [{ name: "Bit", type: "bool" }],
  PORT_TYPES.bool.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    bool ${outputs[0]} = ((${inputs[0]} >> ${inputs[1]}) & 1) == 1;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    bool ${outputs[0]} = ((${inputs[0]} >> ${inputs[1]}) & 1) == 1;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    let ${outputs[0]}: bool = ((${inputs[0]} >> ${inputs[1]}) & 1) == 1;`,
    },
  },
  {
    category: "Bitwise",
    searchTerms: ["bit", "get", "mask", "bitwise", "index", "flag", "test"],
  }
);
