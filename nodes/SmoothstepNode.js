import { NodeType } from "./NodeType.js";
import { PORT_TYPES, toWGSLType } from "./PortTypes.js";

export const SmoothstepNode = new NodeType(
  "Smoothstep",
  [
    { name: "Edge0", type: "genType" },
    { name: "Edge1", type: "genType" },
    { name: "Value", type: "genType" },
  ],
  [{ name: "Result", type: "genType" }],
  PORT_TYPES.T.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = smoothstep(${inputs[0]}, ${inputs[1]}, ${inputs[2]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) =>
        `    ${outputTypes[0]} ${outputs[0]} = smoothstep(${inputs[0]}, ${inputs[1]}, ${inputs[2]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node, inputTypes, outputTypes) => {
        const wgslType = toWGSLType(outputTypes[0]);
        return `    var ${outputs[0]}: ${wgslType} = smoothstep(${inputs[0]}, ${inputs[1]}, ${inputs[2]});`;
      },
    },
  },
  "Math",
  ["smooth", "interpolate", "hermite"]
);
