import { NodeType } from "./NodeType.js";
import { toWGSLType } from "./PortTypes.js";

export const Exp10Node = new NodeType(
  "Exp10",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = pow(10.0, ${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = pow(10.0, ${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = pow(10.0, ${inputs[0]});`;
      },
    },
  },
  "Math",
  ["exponential", "power of 10", "10^x", "decimal"]
);
