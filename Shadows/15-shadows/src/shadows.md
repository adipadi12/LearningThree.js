Different types of algorithms can be applied to shadow maps:

THREE.BasicShadowMap: Very performant but lousy quality
THREE.PCFShadowMap: Less performant but smoother edges
THREE.PCFSoftShadowMap: Less performant but even softer edges
THREE.VSMShadowMap: Less performant, more constraints, can have unexpected results
To change it, update the renderer.shadowMap.type property. The default is THREE.PCFShadowMap but you can use THREE.PCFSoftShadowMap for better quality.