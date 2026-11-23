A varying is the only mechanism for passing per-vertex data from the vertex shader to the fragment shader. The GPU interpolates the values across the primitive between the vertices, so each fragment receives a perspective-corrected value. ⁠

Uniforms are global to the whole draw call — they don't carry per-vertex data. ⁠

Attributes are per-vertex inputs to the vertex shader only; they are not accessible in the fragment shader. ⁠
