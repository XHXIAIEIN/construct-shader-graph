import { NodeType } from "./NodeType.js";

export const RemapNode = new NodeType(
  "Remap",
  [
    { name: "Value", type: "genType" },
    { name: "From Min", type: "genType" },
    { name: "From Max", type: "genType" },
    { name: "To Min", type: "genType" },
    { name: "To Max", type: "genType" },
  ],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = ${inputs[3]} + (${inputs[0]} - ${inputs[1]}) * (${inputs[4]} - ${inputs[3]}) / (${inputs[2]} - ${inputs[1]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    ${outputs[0]} = ${inputs[3]} + (${inputs[0]} - ${inputs[1]}) * (${inputs[4]} - ${inputs[3]}) / (${inputs[2]} - ${inputs[1]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = ${inputs[3]} + (${inputs[0]} - ${inputs[1]}) * (${inputs[4]} - ${inputs[3]}) / (${inputs[2]} - ${inputs[1]});`,
    },
  },
  "Math",
  ["remap", "map", "range", "scale", "normalize", "convert"]
);
