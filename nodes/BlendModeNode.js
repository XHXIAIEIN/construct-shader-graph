import { NodeType } from "./NodeType.js";
import { PORT_TYPES } from "./PortTypes.js";

export const BlendModeNode = new NodeType(
  "Blend Mode",
  [
    { name: "Base", type: "vec3" },
    { name: "Blend", type: "vec3" },
  ],
  [{ name: "Result", type: "vec3" }],
  PORT_TYPES.vec3.color,
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const mode = node.operation || "normal";
        const base = inputs[0];
        const blend = inputs[1];

        switch (mode) {
          case "normal":
            return `    vec3 ${outputs[0]} = ${blend};`;

          case "multiply":
            return `    vec3 ${outputs[0]} = ${base} * ${blend};`;

          case "screen":
            return `    vec3 ${outputs[0]} = vec3(1.0) - (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend});`;

          case "overlay":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend}, vec3(1.0) - 2.0 * (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend}), step(0.5, ${base}));`;

          case "add":
            return `    vec3 ${outputs[0]} = min(${base} + ${blend}, vec3(1.0));`;

          case "subtract":
            return `    vec3 ${outputs[0]} = max(${base} - ${blend}, vec3(0.0));`;

          case "difference":
            return `    vec3 ${outputs[0]} = abs(${base} - ${blend});`;

          case "darken":
            return `    vec3 ${outputs[0]} = min(${base}, ${blend});`;

          case "lighten":
            return `    vec3 ${outputs[0]} = max(${base}, ${blend});`;

          case "colorDodge":
            return `    vec3 ${outputs[0]} = ${base} / (vec3(1.0) - ${blend} + 0.000001);`;

          case "colorBurn":
            return `    vec3 ${outputs[0]} = vec3(1.0) - (vec3(1.0) - ${base}) / (${blend} + 0.000001);`;

          case "hardLight":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend}, vec3(1.0) - 2.0 * (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "softLight":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend} + ${base} * ${base} * (vec3(1.0) - 2.0 * ${blend}), sqrt(${base}) * (2.0 * ${blend} - vec3(1.0)) + 2.0 * ${base} * (vec3(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "linearDodge":
            return `    vec3 ${outputs[0]} = min(${base} + ${blend}, vec3(1.0));`;

          case "linearBurn":
            return `    vec3 ${outputs[0]} = max(${base} + ${blend} - vec3(1.0), vec3(0.0));`;

          case "exclusion":
            return `    vec3 ${outputs[0]} = ${base} + ${blend} - 2.0 * ${base} * ${blend};`;

          case "divide":
            return `    vec3 ${outputs[0]} = ${base} / (${blend} + 0.000001);`;

          default:
            return `    vec3 ${outputs[0]} = ${blend};`;
        }
      },
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const mode = node.operation || "normal";
        const base = inputs[0];
        const blend = inputs[1];

        switch (mode) {
          case "normal":
            return `    vec3 ${outputs[0]} = ${blend};`;

          case "multiply":
            return `    vec3 ${outputs[0]} = ${base} * ${blend};`;

          case "screen":
            return `    vec3 ${outputs[0]} = vec3(1.0) - (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend});`;

          case "overlay":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend}, vec3(1.0) - 2.0 * (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend}), step(0.5, ${base}));`;

          case "add":
            return `    vec3 ${outputs[0]} = min(${base} + ${blend}, vec3(1.0));`;

          case "subtract":
            return `    vec3 ${outputs[0]} = max(${base} - ${blend}, vec3(0.0));`;

          case "difference":
            return `    vec3 ${outputs[0]} = abs(${base} - ${blend});`;

          case "darken":
            return `    vec3 ${outputs[0]} = min(${base}, ${blend});`;

          case "lighten":
            return `    vec3 ${outputs[0]} = max(${base}, ${blend});`;

          case "colorDodge":
            return `    vec3 ${outputs[0]} = ${base} / (vec3(1.0) - ${blend} + 0.000001);`;

          case "colorBurn":
            return `    vec3 ${outputs[0]} = vec3(1.0) - (vec3(1.0) - ${base}) / (${blend} + 0.000001);`;

          case "hardLight":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend}, vec3(1.0) - 2.0 * (vec3(1.0) - ${base}) * (vec3(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "softLight":
            return `    vec3 ${outputs[0]} = mix(2.0 * ${base} * ${blend} + ${base} * ${base} * (vec3(1.0) - 2.0 * ${blend}), sqrt(${base}) * (2.0 * ${blend} - vec3(1.0)) + 2.0 * ${base} * (vec3(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "linearDodge":
            return `    vec3 ${outputs[0]} = min(${base} + ${blend}, vec3(1.0));`;

          case "linearBurn":
            return `    vec3 ${outputs[0]} = max(${base} + ${blend} - vec3(1.0), vec3(0.0));`;

          case "exclusion":
            return `    vec3 ${outputs[0]} = ${base} + ${blend} - 2.0 * ${base} * ${blend};`;

          case "divide":
            return `    vec3 ${outputs[0]} = ${base} / (${blend} + 0.000001);`;

          default:
            return `    vec3 ${outputs[0]} = ${blend};`;
        }
      },
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs, node) => {
        const mode = node.operation || "normal";
        const base = inputs[0];
        const blend = inputs[1];

        switch (mode) {
          case "normal":
            return `    var ${outputs[0]}: vec3<f32> = ${blend};`;

          case "multiply":
            return `    var ${outputs[0]}: vec3<f32> = ${base} * ${blend};`;

          case "screen":
            return `    var ${outputs[0]}: vec3<f32> = vec3<f32>(1.0) - (vec3<f32>(1.0) - ${base}) * (vec3<f32>(1.0) - ${blend});`;

          case "overlay":
            return `    var ${outputs[0]}: vec3<f32> = mix(2.0 * ${base} * ${blend}, vec3<f32>(1.0) - 2.0 * (vec3<f32>(1.0) - ${base}) * (vec3<f32>(1.0) - ${blend}), step(0.5, ${base}));`;

          case "add":
            return `    var ${outputs[0]}: vec3<f32> = min(${base} + ${blend}, vec3<f32>(1.0));`;

          case "subtract":
            return `    var ${outputs[0]}: vec3<f32> = max(${base} - ${blend}, vec3<f32>(0.0));`;

          case "difference":
            return `    var ${outputs[0]}: vec3<f32> = abs(${base} - ${blend});`;

          case "darken":
            return `    var ${outputs[0]}: vec3<f32> = min(${base}, ${blend});`;

          case "lighten":
            return `    var ${outputs[0]}: vec3<f32> = max(${base}, ${blend});`;

          case "colorDodge":
            return `    var ${outputs[0]}: vec3<f32> = ${base} / (vec3<f32>(1.0) - ${blend} + 0.000001);`;

          case "colorBurn":
            return `    var ${outputs[0]}: vec3<f32> = vec3<f32>(1.0) - (vec3<f32>(1.0) - ${base}) / (${blend} + 0.000001);`;

          case "hardLight":
            return `    var ${outputs[0]}: vec3<f32> = mix(2.0 * ${base} * ${blend}, vec3<f32>(1.0) - 2.0 * (vec3<f32>(1.0) - ${base}) * (vec3<f32>(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "softLight":
            return `    var ${outputs[0]}: vec3<f32> = mix(2.0 * ${base} * ${blend} + ${base} * ${base} * (vec3<f32>(1.0) - 2.0 * ${blend}), sqrt(${base}) * (2.0 * ${blend} - vec3<f32>(1.0)) + 2.0 * ${base} * (vec3<f32>(1.0) - ${blend}), step(0.5, ${blend}));`;

          case "linearDodge":
            return `    var ${outputs[0]}: vec3<f32> = min(${base} + ${blend}, vec3<f32>(1.0));`;

          case "linearBurn":
            return `    var ${outputs[0]}: vec3<f32> = max(${base} + ${blend} - vec3<f32>(1.0), vec3<f32>(0.0));`;

          case "exclusion":
            return `    var ${outputs[0]}: vec3<f32> = ${base} + ${blend} - 2.0 * ${base} * ${blend};`;

          case "divide":
            return `    var ${outputs[0]}: vec3<f32> = ${base} / (${blend} + 0.000001);`;

          default:
            return `    var ${outputs[0]}: vec3<f32> = ${blend};`;
        }
      },
    },
  },
  "Color",
  [
    "blend",
    "mode",
    "composite",
    "multiply",
    "screen",
    "overlay",
    "add",
    "subtract",
    "darken",
    "lighten",
    "color",
    "colorDodge",
    "colorBurn",
    "hardLight",
    "softLight",
    "linearDodge",
    "linearBurn",
    "exclusion",
    "divide",
  ]
);

// Add operation options to the node type
BlendModeNode.hasOperation = true;
BlendModeNode.operationOptions = [
  { value: "normal", label: "Normal" },
  { value: "multiply", label: "Multiply" },
  { value: "screen", label: "Screen" },
  { value: "overlay", label: "Overlay" },
  { value: "add", label: "Add" },
  { value: "subtract", label: "Subtract" },
  { value: "difference", label: "Difference" },
  { value: "darken", label: "Darken" },
  { value: "lighten", label: "Lighten" },
  { value: "colorDodge", label: "Color Dodge" },
  { value: "colorBurn", label: "Color Burn" },
  { value: "hardLight", label: "Hard Light" },
  { value: "softLight", label: "Soft Light" },
  { value: "linearDodge", label: "Linear Dodge" },
  { value: "linearBurn", label: "Linear Burn" },
  { value: "exclusion", label: "Exclusion" },
  { value: "divide", label: "Divide" },
];
