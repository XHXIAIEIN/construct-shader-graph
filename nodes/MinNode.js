import { NodeType } from "./NodeType.js";

export const MinNode = new NodeType(
  "Min",
  [
    { name: "A", type: "T" },
    { name: "B", type: "T" },
  ],
  [{ name: "Result", type: "T" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = min(${inputs[0]}, ${inputs[1]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = min(${inputs[0]}, ${inputs[1]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = min(${inputs[0]}, ${inputs[1]});`,
    },
  }
);
