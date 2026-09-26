1. Which one of the following materials performs best: MeshLambertMaterial 
MeshPhongMaterial 
MeshStandardMaterial 

2. Which one of the following colors will produce red: 
#00ffff 
rgb(255, 0, 0) 
#0000ff 
#00ff00 

3. Which one of the following materials doesn’t support lights: 
MeshPhongMaterial 
MeshBasicMaterial 
MeshStandardMaterial 

4. Which one of the following properties isn’t part of MeshStandardMaterial: 
wireframe 
roughness 
metalness 
brightness


MeshLambertMaterial — it has the simplest lighting model (diffuse-only, no specular), making it the cheapest to render of the three. 
rgb(255, 0, 0) — red channel at max, green and blue at zero.  The others are cyan, blue, and green respectively.
MeshBasicMaterial — it is not affected by lights; it renders a flat color regardless of scene lighting. 
brightness — MeshStandardMaterial has wireframe, roughness, and metalness, but no brightness property.