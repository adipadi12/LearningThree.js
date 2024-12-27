import * as THREE from 'three'

//1. creating a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. Create and add cube object
const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshLambertMaterial({color: '#ffc0cb', emissive: '#ffc0cb'})

const cube = new THREE.Mesh(geometry, material); //contains t2 things which can be passed as the thins we created above
scene.add(cube);

//4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(0, 10, 1);
scene.add(light);

//5. set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the scene
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();