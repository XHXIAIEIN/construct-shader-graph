# TODO: Update Nodes to Use Resolved Types

The following nodes with `genType` (generic types) need to be updated to use the new resolved input/output types parameters in their execution functions.

## Execution Function Signature Change

Change from: `(inputs, outputs, node)` or `(inputs, outputs)`  
Change to: `(inputs, outputs, node, inputTypes, outputTypes)`

## Pattern to Follow

### For WebGL1/WebGL2:

```javascript
execution: (inputs, outputs, node, inputTypes, outputTypes) =>
  `    ${outputTypes[0]} ${outputs[0]} = functionName(${inputs[0]});`;
```

### For WebGPU:

```javascript
execution: (inputs, outputs, node, inputTypes, outputTypes) => {
  const wgslType = toWGSLType(outputTypes[0]);
  return `    var ${outputs[0]}: ${wgslType} = functionName(${inputs[0]});`;
};
```

Don't forget to import `toWGSLType` from `./PortTypes.js` for WebGPU nodes!

---

## Nodes to Update (39 remaining)

### Math Operations (19 nodes)

- [ ] AbsNode.js
- [ ] PowerNode.js
- [ ] RoundNode.js
- [ ] MaxNode.js
- [ ] MinNode.js
- [ ] ClampNode.js
- [ ] SmoothstepNode.js
- [ ] FractNode.js
- [ ] FloorNode.js
- [ ] CeilNode.js
- [ ] ModNode.js
- [ ] SqrtNode.js
- [ ] ExpNode.js
- [ ] LnNode.js
- [ ] Log10Node.js
- [ ] Log2Node.js
- [ ] Exp2Node.js
- [ ] Exp10Node.js
- [ ] SignNode.js

### Trigonometry (8 nodes)

- [ ] CosNode.js
- [ ] SinNode.js
- [ ] TanNode.js
- [ ] AsinNode.js
- [ ] AcosNode.js
- [ ] AtanNode.js
- [ ] Atan2Node.js
- [ ] ToRadiansNode.js
- [ ] ToDegreesNode.js

### Vector Operations (3 nodes)

- [ ] NormalizeNode.js
- [ ] LengthNode.js
- [ ] DotNode.js

### Utility (5 nodes)

- [ ] MathNode.js (has operation dropdown)
- [ ] CompareNode.js
- [ ] DistanceNode.js
- [ ] RemapNode.js
- [ ] ShaderLanguageTestNode.js

### Derivatives (3 nodes)

- [ ] DDXNode.js
- [ ] DDYNode.js
- [ ] FWidthNode.js

---

## Already Completed ✓

- [x] MixNode.js
- [x] StepNode.js
- [x] SwizzleNode.js (custom type)
- [x] TextureSampleGradNode.js (custom type)
- [x] TextureSampleNode.js (custom type)
- [x] TextureSampleLODNode.js (custom type)

---

## Notes

- Most nodes follow a simple pattern and can be updated quickly
- MathNode has an operation dropdown, so it uses `node.operation`
- ShaderLanguageTestNode has a typo in WebGPU (`shad${outputs[0]}` should probably be just `${outputs[0]}`)
- Some nodes may not need type declarations if they're simple assignments, but it's better to be consistent
