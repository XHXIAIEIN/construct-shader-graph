import { NodeType } from "./NodeType.js";

export const TwirlNode = new NodeType(
  "Twirl",
  [
    { name: "UV", type: "vec2" },
    { name: "Center", type: "vec2" },
    { name: "Strength", type: "float" },
    { name: "Radius", type: "float" },
  ],
  [{ name: "Result", type: "vec2" }],
  "#4a3a5a",
  {
    webgl1: {
      dependency: `vec2 twirl(vec2 uv, vec2 center, float strength, float radius) {
    vec2 delta = uv - center;
    float dist = length(delta);
    if (dist < radius) {
        float percent = (radius - dist) / radius;
        float theta = percent * percent * strength;
        float s = sin(theta);
        float c = cos(theta);
        delta = vec2(
            delta.x * c - delta.y * s,
            delta.x * s + delta.y * c
        );
    }
    return center + delta;
}`,
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = twirl(${inputs[0]}, ${inputs[1]}, ${inputs[2]}, ${inputs[3]});`,
    },
    webgl2: {
      dependency: `vec2 twirl(vec2 uv, vec2 center, float strength, float radius) {
    vec2 delta = uv - center;
    float dist = length(delta);
    if (dist < radius) {
        float percent = (radius - dist) / radius;
        float theta = percent * percent * strength;
        float s = sin(theta);
        float c = cos(theta);
        delta = vec2(
            delta.x * c - delta.y * s,
            delta.x * s + delta.y * c
        );
    }
    return center + delta;
}`,
      execution: (inputs, outputs) =>
        `    vec2 ${outputs[0]} = twirl(${inputs[0]}, ${inputs[1]}, ${inputs[2]}, ${inputs[3]});`,
    },
    webgpu: {
      dependency: `fn twirl(uv: vec2<f32>, center: vec2<f32>, strength: f32, radius: f32) -> vec2<f32> {
    var delta = uv - center;
    let dist = length(delta);
    if (dist < radius) {
        let percent = (radius - dist) / radius;
        let theta = percent * percent * strength;
        let s = sin(theta);
        let c = cos(theta);
        delta = vec2<f32>(
            delta.x * c - delta.y * s,
            delta.x * s + delta.y * c
        );
    }
    return center + delta;
}`,
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: vec2<f32> = twirl(${inputs[0]}, ${inputs[1]}, ${inputs[2]}, ${inputs[3]});`,
    },
  },
  "UV",
  ["twirl", "swirl", "rotate", "distortion", "uv", "effect"]
);
