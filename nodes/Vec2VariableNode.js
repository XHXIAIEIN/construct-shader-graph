import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const Vec2VariableNode = new NodeType(
  "Vec2 Variable",
  [],
  [{ name: "Value", type: "vec2" }],
  PORT_TYPES.vec2.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = vec2(0.0, 0.0);`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = vec2(0.0, 0.0);`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = vec2<f32>(0.0, 0.0);`,
    },
  }
);
