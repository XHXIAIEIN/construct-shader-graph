import { NodeType } from "./NodeType.js";
import { toWGSLType } from "./PortTypes.js";

export const LengthNode = new NodeType(
  "Length",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "float" }],
  "#3a4a5a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = length(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = length(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = length(${inputs[0]});`;
      },
    },
  },
  "Vector",
  ["magnitude", "distance"]
);
