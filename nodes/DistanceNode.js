import { NodeType } from "./NodeType.js";

export const DistanceNode = new NodeType(
  "Distance",
  [
    { name: "A", type: "genType" },
    { name: "B", type: "genType" },
  ],
  [{ name: "Result", type: "float" }],
  "#3a4a5a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = distance(${inputs[0]}, ${inputs[1]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = distance(${inputs[0]}, ${inputs[1]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = distance(${inputs[0]}, ${inputs[1]});`,
    },
  },
  "Vector",
  ["length", "magnitude", "separation"]
);
