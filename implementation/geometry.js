import * as THREE from "three";
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const stats = Stats();
document.body.appendChild(stats.dom);

// create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50);

// setup camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.x = -3;
camera.position.z = 8;
camera.position.y = 2;

// setup the renderer and attach to canvas
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

// add lights
scene.add(new THREE.AmbientLight(0x666666));
const dirLight = new THREE.DirectionalLight(0xaaaaaa);
dirLight.position.set(5, 12, 8);
dirLight.castShadow = true;
scene.add(dirLight);
//shadow properties

// create a cube and torus knot and add them to the scene
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -1;
cube.castShadow = true;
scene.add(cube);

const torusKnotGeometry = new THREE.TorusKnotBufferGeometry(0.5, 0.2, 100, 100);
const torusKnotMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff88,
  roughness: 0.1,
});
const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
torusKnotMesh.castShadow = true;
torusKnotMesh.position.x = 2;
scene.add(torusKnotMesh);

// create a very large ground plane
const groundGeometry = new THREE.PlaneBufferGeometry(10000, 10000);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial); 
groundMesh.position.set(0, -2, 0);
groundMesh.rotation.set(Math.PI / -2, 0, 0);
groundMesh.receiveShadow = true;
scene.add(groundMesh);

//animate
function animate() {
    requestAnimationFrame(animate);
    stats.update();
    renderer.render(scene, camera);
}
animate();
// add orbitcontrols to pan around the scene using the


// add statistics to monitor the framerate
 
// render the scene
//renderer.render(scene, camera);