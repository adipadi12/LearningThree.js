import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')


// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(
    75, sizes.width / sizes.height, 1, 1000
);

camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) =>
    {
        cursor.x = - (event.clientX / sizes.width - 0.5)
        cursor.y = event.clientY / sizes.height - 0.5

        console.log(event.clientX, event.clientY);
    })
// Animate
const clock = new THREE.Clock()

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // enable damping which does accelerations and friction formulas

const tick = () =>
{

    // Render
    renderer.render(scene, camera)

    // Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
    // camera.position.y = cursor.y * 3
    // camera.lookAt(mesh.position)
    // ou shii
    // Update controls
    controls.update();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()