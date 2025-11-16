import { NodeType } from "./NodeType.js";

export const ModNode = new NodeType(
  "Mod",
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
        const op = node.operation || "floor";
        if (op === "truncate") {
          return `    ${outputs[0]} = ${inputs[0]} - ${inputs[1]} * trunc(${inputs[0]} / ${inputs[1]});`;
        }
        return `    ${outputs[0]} = mod(${inputs[0]}, ${inputs[1]});`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const op = node.operation || "floor";
        if (op === "truncate") {
          return `    ${outputs[0]} = ${inputs[0]} - ${inputs[1]} * trunc(${inputs[0]} / ${inputs[1]});`;
        }
        return `    ${outputs[0]} = mod(${inputs[0]}, ${inputs[1]});`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const op = node.operation || "floor";
        if (op === "truncate") {
          return `    var ${outputs[0]} = ${inputs[0]} % ${inputs[1]};`;
        }
        return `    var ${outputs[0]} = ${inputs[0]} - ${inputs[1]} * floor(${inputs[0]} / ${inputs[1]});`;
      },
    },
  },
  "Math",
  ["modulo", "remainder", "%", "wrap", "fmod", "modf", "modulus"]
);

ModNode.hasOperation = true;
ModNode.operationOptions = [
  { value: "floor", label: "Floor" },
  { value: "truncate", label: "Truncate" },
];
