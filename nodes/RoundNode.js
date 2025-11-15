import { NodeType } from "./NodeType.js";

export const RoundNode = new NodeType(
  "Round",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = floor(${inputs[0]} + 0.5);`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = round(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = round(${inputs[0]});`,
    },
  }
);
