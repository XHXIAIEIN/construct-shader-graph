import { NodeType } from "./NodeType.js";

export const DDXNode = new NodeType(
  "DDX",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: `#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif`,
      execution: (inputs, outputs) => `    ${outputs[0]} = dFdx(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) => `    ${outputs[0]} = dFdx(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = dpdx(${inputs[0]});`,
    },
  },
  "Math",
  ["derivative", "ddx", "dfdx", "gradient", "screen-space", "partial"]
);
