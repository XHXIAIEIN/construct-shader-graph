import { NodeType } from "./NodeType.js";

export const MathNode = new NodeType(
  "Math",
  [
    { name: "A", type: "genType" },
    { name: "B", type: "genType" },
  ],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const op = node.operation || "+";
        return `    ${outputs[0]} = ${inputs[0]} ${op} ${inputs[1]};`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const op = node.operation || "+";
        return `    ${outputs[0]} = ${inputs[0]} ${op} ${inputs[1]};`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const op = node.operation || "+";
        return `    var ${outputs[0]} = ${inputs[0]} ${op} ${inputs[1]};`;
      },
    },
  }
);

// Add operation options to the node type
MathNode.hasOperation = true;
MathNode.operationOptions = [
  { value: "+", label: "+" },
  { value: "-", label: "−" },
  { value: "*", label: "×" },
  { value: "/", label: "÷" },
];
