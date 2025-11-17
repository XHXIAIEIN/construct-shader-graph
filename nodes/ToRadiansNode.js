import { NodeType } from "./NodeType.js";
import { PORT_TYPES, toWGSLType } from "./PortTypes.js";

export const ToRadiansNode = new NodeType(
  "To Radians",
  [{ name: "Degrees", type: "genType" }],
  [{ name: "Radians", type: "genType" }],
  PORT_TYPES.T.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = radians(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = radians(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = radians(${inputs[0]});`;
      },
    },
  },
  "Trigonometry",
  ["radians", "degrees", "convert", "conversion", "angle"]
);
