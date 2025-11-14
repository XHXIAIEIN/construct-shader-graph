import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BooleanVariableNode = new NodeType(
  "Boolean Variable",
  [],
  [{ name: "Value", type: "boolean" }],
  PORT_TYPES.boolean.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.outputPorts[0].value || false;
        return `    bool ${outputs[0]} = ${value ? "true" : "false"};`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.outputPorts[0].value || false;
        return `    bool ${outputs[0]} = ${value ? "true" : "false"};`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const value = node.outputPorts[0].value || false;
        return `    var ${outputs[0]}: bool = ${value ? "true" : "false"};`;
      },
    },
  }
);
