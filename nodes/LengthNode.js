import { NodeType } from "./NodeType.js";

export const LengthNode = new NodeType(
  "Length",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "float" }],
  "#3a4a5a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = length(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = length(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = length(${inputs[0]});`,
    },
  },
  "Vector",
  ["magnitude", "distance"]
);
