import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RGBELoader } from 'three/examples/jsm/Addons.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/* Debug */
const gui = new GUI()

/* Environment map
 */
const rgbeLoader = new RGBELoader()
rgbeLoader.load('/textures/environmentMap/2k.hdr', (environmentMap) => 
{
    console.log(environmentMap)

    environmentMap.mapping = THREE.EquirectangularRefractionMapping

    scene.background = environmentMap
    scene.environment = environmentMap
})

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

/* Lights */
// Ambient light
// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

// const pointLight = new THREE.PointLight(0xffffff, 30)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

/* Textures */
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
//const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
doorColorTexture.colorSpace = THREE.SRGBColorSpace
matcapTexture.colorSpace = THREE.SRGBColorSpace
/*Meshes*/
//const material = new THREE.MeshBasicMaterial();
// material.map = doorColorTexture
// material.color = new THREE.Color('#ff0000')
// material.color = new THREE.Color('#f00')
// material.color = new THREE.Color('red')
// material.color = new THREE.Color('rgb(255, 0, 0)')
// material.color = new THREE.Color(0xff0000)
// //material.wireframe = true
// // material.transparent = true
// // //material.opacity = 0.2
// // material.alphaMap = doorAlphaTexture

// mesh normal material
// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true // flattens faces
// material.side = THREE.DoubleSide

// mesh matcap material
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

// mesh Depth Material
// const material = new THREE.MeshDepthMaterial() // becomes white when camera near surface

// Mesh Lambert Material
//const material = new THREE.MeshLambertMaterial() // requires lights to be seen

// Mesh Phong Material
// const material =  new THREE.MeshPhongMaterial() 
// material.shininess = 100
// material.specular = new THREE.Color('grey')

// Mesh Toon Material
// const material = new THREE.MeshToonMaterial() // two color gradients by default, one for shadow one for light
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter // use mipmapping to control how GPU handles such textures
// gradientTexture.generateMipmaps = false
// material.gradientMap = gradientTexture // adds more steps to coloration

// Mesh Standard Material
// const material = new THREE.MeshStandardMaterial() // uses PBR
// material.metalness = 1
// material.roughness = 0.6
// gui.add(material, 'metalness').min(0).max(1).step(0.0001)
// gui.add(material, 'roughness').min(0).max(1).step(0.0001)

// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = doorHeightTexture

// material.displacementScale = 0.1

// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.normalScale.set(0.5, 0.5)

// material.transparent = true
// material.alphaMap = doorAlphaTexture

// MeshPhysicalMaterial
const material = new THREE.MeshPhysicalMaterial() // uses PBR
material.metalness = 1
material.roughness = 0.6
gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

material.map = doorColorTexture
material.aoMap = doorAmbientOcclusionTexture
material.aoMapIntensity = 1
material.displacementMap = doorHeightTexture

material.displacementScale = 0.1

material.metalnessMap = doorMetalnessTexture
material.roughnessMap = doorRoughnessTexture
material.normalScale.set(0.5, 0.5)

// clearcoat // additional feature of physical material
material.clearcoat = 1
material.clearcoatRoughness = 0

gui.add(material, 'clearcoat').min(0).max(1).step(0.0001)
gui.add(material, 'clearcoatRoughness').min(0).max(1).step(0.0001)

// sheen
material.sheen  = 1
material.sheenRoughness = 0.25
material.sheenColor.set(1,1,1)

gui.add(material, 'sheen').min(0).max(1).step(0.0001)
gui.add(material, 'sheenRoughness').min(0).max(1).step(0.0001)

// iridiscence
material.iridescence = 1
material.iridescenceIOR = 1
material.iridescenceThicknessRange = [100, 800]

gui.add(material, 'iridescence').min(0).max(1).step(0.0001)
gui.add(material, 'iridescenceIOR').min(0).max(2.33).step(0.0001)
gui.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1)
gui.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1)

// Transmission
material.transmission = 1
material.ior = 1.5
material.thickness = 0.5

gui.add(material, 'transmission').min(0).max(1).step(0.0001)
gui.add(material, 'ior').min(1).max(10).step(0.0001)
gui.add(material, 'thickness').min(0).max(1).step(0.0001)

// SHAPES
const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 128, 128), material)
sphere.position.x = -1.5

const plane = new THREE.Mesh(new THREE.PlaneGeometry(2,2, 100, 100),material)
plane.rotation.x = -Math.PI / 2
plane.position.y = -0.5

const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 128, 256),material)
torus.position.x = 1.5

scene.add(sphere, plane, torus)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // update objects rotation
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = -0.15 * elapsedTime
    plane.rotation.x = -0.15 * elapsedTime
    torus.rotation.x = -0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()