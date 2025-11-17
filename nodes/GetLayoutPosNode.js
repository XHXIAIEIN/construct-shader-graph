import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const GetLayoutPosNode = new NodeType(
  "getLayoutPos",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) => {
        const normalizedCoords = `((vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart))`;
        return `    vec2 ${outputs[0]} = mix(layoutStart, layoutEnd, ${normalizedCoords});`;
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) => {
        const normalizedCoords = `((vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart))`;
        return `    vec2 ${outputs[0]} = mix(layoutStart, layoutEnd, ${normalizedCoords});`;
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = c3_getLayoutPos(input.fragUV);`,
    },
  },
  "Builtin",
  ["layout", "position", "coordinates"]
);
