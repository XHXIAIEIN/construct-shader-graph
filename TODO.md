# Shader Node Ideas from Construct Documentation

## WebGPU Helper Functions (from c3_helpers.wgsl)

- [x] **c3_srcOriginToNorm Node** - ✅ IMPLEMENTED as `SrcOriginToNormNode`

  - WebGPU: `c3_srcOriginToNorm(input.fragUV)` ✅
  - WebGL: `(vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart)` ✅

- [x] **c3_getLayoutPos Node** - ✅ IMPLEMENTED as `GetLayoutPosNode`

  - WebGPU: `c3_getLayoutPos(input.fragUV)` ✅
  - WebGL: `mix(layoutStart, layoutEnd, normalizedCoords)` ✅

- [x] **c3_unpremultiply Node** - ✅ IMPLEMENTED as `UnpremultiplyNode`

  - WebGPU: `c3_unpremultiply(color)` ✅
  - WebGL: `if (a != 0.0) color.rgb /= a;` ✅

- [x] **c3_premultiply Node** - ✅ IMPLEMENTED as `PremultiplyNode`

  - WebGPU: `c3_premultiply(color)` ✅
  - WebGL: `color.rgb *= a;` ✅

- [x] **c3_getPixelSize Node** - ✅ IMPLEMENTED as `PixelSizeNode`

  - WebGPU: `c3_getPixelSize(textureFront)` ✅
  - WebGL: `pixelSize` uniform ✅

- [x] **c3_getBackUV Node** - ✅ IMPLEMENTED as `BackUVNode` (FIXED)

  - WebGPU: `c3_getBackUV(input.fragPos.xy, textureBack)` ✅
  - WebGL: `(vTex - srcStart) / (srcEnd - srcStart)` ✅

- [x] **c3_getDepthUV Node** - ✅ IMPLEMENTED as `DepthUVNode` (FIXED)

  - WebGPU: `c3_getDepthUV(input.fragPos.xy, textureDepth)` ✅
  - WebGL: `(vTex - srcStart) / (srcEnd - srcStart)` ✅

- [x] **c3_linearizeDepth Node** - ✅ IMPLEMENTED as `LinearizeDepthNode`

  - WebGPU: `c3_linearizeDepth(depthSample)` ✅
  - WebGL: `(2.0 * zNear * zFar) / (zFar + zNear - depth * (zFar - zNear))` ✅
