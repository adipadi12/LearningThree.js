import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000,
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)


const octgeo = new THREE.OctahedronGeometry(2, 2);
const material1 = new THREE.MeshBasicMaterial({ 
    color: 0xff0101,
    wireframe: true
})
const mesh1 = new THREE.Mesh(octgeo, material1);
mesh1.position.set(2,2,2)
// scene.add(mesh1)
// scene.add(mesh)

// creating own geometry
const geo = new THREE.BufferGeometry();
const positionsArray =  new Float32Array(9); // length stays fixed

// first vertex
positionsArray[0] = 0
positionsArray[1] = 0
positionsArray[2] = 0

// second vertex
positionsArray[3] = 0
positionsArray[4] = 1
positionsArray[5] = 0

// third vertex
positionsArray[6] = 1
positionsArray[7] = 0
positionsArray[8] = 0

const positionsArray1 = new Float32Array([
    0,0,0, // first vertex
    0,1,0, // 2nd vertex
    1,0,0 // 3rd vertex
])

const count  = 50 // 50 triangles, 450 values
const countValues = count * 3 * 3;
const positionsArray2 = new Float32Array(countValues)
for(let i = 0; i < countValues; i++){
    positionsArray2[i] = (Math.random() - 0.5) * 4
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray2, 3) // to read the array divide into 3

/* position name used below because three,js shadres look for it */
geo.setAttribute('position', positionsAttribute);
// idiot did not add the mesh to scene
const customMesh = new THREE.Mesh(geo, material)
scene.add(customMesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

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

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()