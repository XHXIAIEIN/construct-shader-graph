import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BoolInputNode = new NodeType(
  "Bool Input",
  [], // No inputs
  [{ name: "Value", type: "bool" }],
  PORT_TYPES.bool.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.operation || "false";
        return `    bool ${outputs[0]} = ${value};`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.operation || "false";
        return `    bool ${outputs[0]} = ${value};`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.operation || "false";
        return `    let ${outputs[0]}: bool = ${value};`;
      },
    },
  },
  {
    category: "Input",
    searchTerms: [
      "bool",
      "boolean",
      "true",
      "false",
      "constant",
      "value",
      "input",
    ],
  }
);

// Add operation options for true/false selection
BoolInputNode.hasOperation = true;
BoolInputNode.operationOptions = [
  { value: "false", label: "False" },
  { value: "true", label: "True" },
];
