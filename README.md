# Construct Shader Graph

A visual node-based shader graph editor that generates shaders for WebGL 1, WebGL 2, and WebGPU.

## Features

- 🎨 Visual node-based shader editing
- 🔗 Drag-and-drop wire connections
- 🎯 Multi-target shader export (WebGL 1, WebGL 2, WebGPU)
- 📦 ZIP export with all shader versions
- 🔍 Smart search menu with type filtering
- 🎛️ Editable input values for float/int ports
- 🖱️ Pan and zoom canvas
- 📋 Multiple node selection and manipulation
- 🔄 Reroute nodes for wire path adjustment

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start Vite's development server and open the application in your browser at `http://localhost:3000`.

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Creating Nodes

- **Right-click** on the canvas to open the search menu
- Type to filter node types
- Click a node type or press Enter to create it

### Connecting Nodes

- **Drag** from an output port to an input port
- **Drag** from an input port to pick up existing connections
- Compatible port types are highlighted during dragging

### Editing Values

- Click on editable input values (float/int) to edit them directly
- Values are only editable when no wire is connected

### Selection & Manipulation

- **Click** a node to select it
- **Cmd/Ctrl + Click** to multi-select
- **Click and drag** on empty space for box selection
- **Delete/Backspace** to delete selected nodes
- Drag any selected node to move all selected nodes together

### Camera Controls

- **Scroll** to pan the canvas
- **Cmd/Ctrl + Scroll** or **Pinch** to zoom
- **Middle-click + Drag** to pan

### Reroute Nodes

- **Double-click** on a wire to create a reroute node
- **Right-click** a reroute node to delete it

### Exporting Shaders

1. Click the **Export GLSL** button
2. A ZIP file will download containing:
   - `shader-webgl1.frag` - WebGL 1.0 GLSL ES 100
   - `shader-webgl2.frag` - WebGL 2.0 GLSL ES 300
   - `shader-webgpu.wgsl` - WebGPU WGSL

## Project Structure

```
construct-shader-graph/
├── nodes/               # Node type definitions
│   ├── NodeType.js     # Base node type class
│   ├── PortTypes.js    # Port type definitions
│   ├── MathNode.js     # Math operation node
│   ├── VectorNode.js   # Vector construction node
│   ├── ColorNode.js    # Color construction node
│   ├── TextureNode.js  # Texture sampling node
│   ├── OutputNode.js   # Output node
│   ├── *VariableNode.js # Variable nodes
│   └── index.js        # Node type registry
├── shaders/            # Shader boilerplate files
│   ├── boilerplate-webgl1.glsl
│   ├── boilerplate-webgl2.glsl
│   └── boilerplate-webgpu.wgsl
├── index.html          # Main HTML file
├── script.js           # Main application logic
├── style.css           # Styles
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Adding Custom Nodes

To add a new node type:

1. Create a new file in `nodes/` (e.g., `MyNode.js`)
2. Define the node with shader code for all three targets:

```javascript
import { NodeType } from "./NodeType.js";

export const MyNode = new NodeType(
  "My Node",
  [{ name: "Input", type: "float" }],
  [{ name: "Output", type: "float" }],
  "#3a3a3a",
  {
    webgl1: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = ${inputs[0]} * 2.0;`,
    },
    webgl2: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    float ${outputs[0]} = ${inputs[0]} * 2.0;`,
    },
    webgpu: {
      dependency: "",
      execution: (inputs, outputs) =>
        `    var ${outputs[0]}: f32 = ${inputs[0]} * 2.0;`,
    },
  }
);
```

3. Export it in `nodes/index.js`:

```javascript
export { MyNode } from "./MyNode.js";

export const NODE_TYPES = {
  // ... existing nodes
  myNode: MyNode,
};
```

## Technologies

- **Vite** - Build tool and dev server
- **JSZip** - ZIP file generation
- **HTML5 Canvas** - Rendering
- **Vanilla JavaScript** - No framework dependencies

## License

MIT
