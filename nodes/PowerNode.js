import { NodeType } from "./NodeType.js";
import { toWGSLType } from "./PortTypes.js";

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
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = pow(${inputs[0]}, ${inputs[1]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = pow(${inputs[0]}, ${inputs[1]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = pow(${inputs[0]}, ${inputs[1]});`;
      },
    },
  },
  "Math",
  ["pow", "exponent", "exponential"]
);
