import { NodeType } from "./NodeType.js";
import { PORT_TYPES, toWGSLType } from "./PortTypes.js";

export const AtanNode = new NodeType(
  "Atan",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "genType" }],
  PORT_TYPES.T.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = atan(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = atan(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = atan(${inputs[0]});`;
      },
    },
  },
  "Trigonometry",
  ["arctangent", "inverse tangent", "arctan", "trig"]
);
