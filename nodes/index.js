// Export all node types
export { NodeType } from "./NodeType.js";
export { PORT_TYPES, areTypesCompatible } from "./PortTypes.js";

// Import all node types
import { MathNode } from "./MathNode.js";
import { Vec2Node } from "./Vec2Node.js";
import { VectorNode } from "./VectorNode.js";
import { ColorNode } from "./ColorNode.js";
import { TextureFrontNode } from "./TextureFrontNode.js";
import { TextureBackNode } from "./TextureBackNode.js";
import { TextureDepthNode } from "./TextureDepthNode.js";
import { OutputNode } from "./OutputNode.js";
import { FloatVariableNode } from "./FloatVariableNode.js";
import { IntVariableNode } from "./IntVariableNode.js";
import { BooleanVariableNode } from "./BooleanVariableNode.js";
import { Vec2VariableNode } from "./Vec2VariableNode.js";
import { VectorVariableNode } from "./VectorVariableNode.js";
import { ColorVariableNode } from "./ColorVariableNode.js";

// Export NODE_TYPES object
export const NODE_TYPES = {
  math: MathNode,
  vec2: Vec2Node,
  vector: VectorNode,
  color: ColorNode,
  textureFront: TextureFrontNode,
  textureBack: TextureBackNode,
  textureDepth: TextureDepthNode,
  output: OutputNode,
  varFloat: FloatVariableNode,
  varInt: IntVariableNode,
  varBoolean: BooleanVariableNode,
  varVec2: Vec2VariableNode,
  varVector: VectorVariableNode,
  varColor: ColorVariableNode,
};
