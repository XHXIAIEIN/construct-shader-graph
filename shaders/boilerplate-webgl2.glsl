#version 300 es

#ifdef GL_FRAGMENT_PRECISION_HIGH
#define highmedp highp
#else
#define highmedp mediump
#endif

precision lowp float;
uniform mediump vec2 pixelSize;

in mediump vec2 vTex;
out lowp vec4 outColor;
