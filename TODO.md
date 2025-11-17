# Shader Node Ideas from Construct Documentation

## WebGPU Helper Functions (from c3_helpers.wgsl)

- [ ] **c3_srcOriginToNorm Node** - Converts source origin coordinates to normalized (0-1) coordinates

  - WebGPU: `c3_srcOriginToNorm(input.fragUV)`
  - WebGL: `(vTex - srcOriginStart) / (srcOriginEnd - srcOriginStart)`

- [ ] **c3_getLayoutPos Node** - Gets the current layout position being rendered

  - WebGPU: `c3_getLayoutPos(input.fragUV)`
  - WebGL: `mix(layoutStart, layoutEnd, normalizedCoords)`

- [ ] **c3_unpremultiply Node** - Converts premultiplied alpha to unpremultiplied

  - WebGPU: `c3_unpremultiply(color)`
  - WebGL: `if (a != 0.0) color.rgb /= a;`

- [ ] **c3_premultiply Node** - Converts unpremultiplied to premultiplied alpha

  - WebGPU: `c3_premultiply(color)`
  - WebGL: `color.rgb *= a;`

- [ ] **c3_getPixelSize Node** - Gets pixel size in texture coordinates (already implemented as PixelSizeNode)

  - WebGPU: `c3_getPixelSize(texture)`
  - WebGL: `pixelSize` uniform

- [ ] **c3_getBackUV Node** - Gets UV coordinates for sampling background texture

  - WebGPU: `c3_getBackUV(input.fragPos.xy, textureBack)`
  - WebGL: `(vTex - srcStart) / (srcEnd - srcStart)`

- [ ] **c3_getDepthUV Node** - Gets UV coordinates for sampling depth buffer

  - WebGPU: `c3_getDepthUV(input.fragPos.xy, textureDepth)`
  - WebGL: `(vTex - srcStart) / (srcEnd - srcStart)`

- [ ] **c3_linearizeDepth Node** - Converts depth buffer value to linear depth
  - WebGPU: `c3_linearizeDepth(depthSample)`
  - WebGL: Manual calculation using zNear/zFar
