import { NodeType } from "./NodeType.js";

export const PowerNode = new NodeType(
  "Power",
  [
    { name: "Base", type: "genType" },
    { name: "Exponent", type: "genType" },
  ],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = pow(${inputs[0]}, ${inputs[1]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = pow(${inputs[0]}, ${inputs[1]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = pow(${inputs[0]}, ${inputs[1]});`,
    },
  }
);
