import { NodeType } from "./NodeType.js";

export const DDYNode = new NodeType(
  "DDY",
  [{ name: "Value", type: "genType" }],
  [{ name: "Result", type: "genType" }],
  "#3a4a3a",
  {
    webgl1: {
      dependency: `#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif`,
      execution: (inputs, outputs) => `    ${outputs[0]} = dFdy(${inputs[0]});`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) => `    ${outputs[0]} = dFdy(${inputs[0]});`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]} = dpdy(${inputs[0]});`,
    },
  },
  "Math",
  ["derivative", "ddy", "dfdy", "gradient", "screen-space", "partial"]
);
