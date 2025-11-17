import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BooleanOrNode = new NodeType(
  "Boolean OR",
  [
    { name: "A", type: "bool" },
    { name: "B", type: "bool" },
  ],
  [{ name: "Result", type: "bool" }],
  PORT_TYPES.bool.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    bool ${outputs[0]} = ${inputs[0]} || ${inputs[1]};`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    bool ${outputs[0]} = ${inputs[0]} || ${inputs[1]};`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    let ${outputs[0]}: bool = ${inputs[0]} || ${inputs[1]};`,
    },
  },
  {
    category: "Boolean",
    searchTerms: ["boolean", "or", "||", "logic", "logical"],
  }
);
