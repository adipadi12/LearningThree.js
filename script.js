import * as THREE from 'three'; //THREE variable imported

const canvas = document.querySelector('canvas.webgl'); //canvas object created

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

const sizes = {
    width: 900,
    height: 800
};
renderer.setSize(sizes.width, sizes.height);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

const scene = new THREE.Scene(); //scene object created

const axesHelper = new THREE.AxesHelper(2);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry,material);
mesh.position.x = -1.1
mesh.position.y = - 0.6
mesh.position.z = 1
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

const group = new THREE.Group();
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)

group.add(cube1);
group.add(mesh);

scene.add(camera);
scene.add(axesHelper);
renderer.render(scene, camera);


console.log("Javascript is working");
console.log(THREE);
mesh.position.set(0.7, -0.6, 1)

const tick = () =>
{
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);

    console.log('tick');
    window.requestAnimationFrame(tick)
}

tick();