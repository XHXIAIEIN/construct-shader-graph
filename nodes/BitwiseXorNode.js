import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BitwiseXorNode = new NodeType(
  "Bitwise XOR",
  [
    { name: "A", type: "int" },
    { name: "B", type: "int" },
  ],
  [{ name: "Result", type: "int" }],
  PORT_TYPES.int.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    int ${outputs[0]} = ${inputs[0]} ^ ${inputs[1]};`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    int ${outputs[0]} = ${inputs[0]} ^ ${inputs[1]};`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    let ${outputs[0]}: i32 = ${inputs[0]} ^ ${inputs[1]};`,
    },
  },
  {
    category: "Bitwise",
    searchTerms: ["bitwise", "xor", "^", "bit", "exclusive or"],
  }
);
