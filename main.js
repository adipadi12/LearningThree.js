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
cube.position.set(0, 2, 0);
scene.add(cube);

//4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(0, 10, 1);
scene.add(light);

//add heart 
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0.5);
heartShape.bezierCurveTo(0.5, 1.5, 2, 1, 0, -1.5);
heartShape.bezierCurveTo(-2, 1, -0.5, 1.5, 0, 0.5);
const heartGeometry = new THREE.ShapeGeometry(heartShape);
const heartMaterial = new THREE.MeshLambertMaterial({ color: '#ff0000', emissive: '#ffc0cb' });
const heart = new THREE.Mesh(heartGeometry, heartMaterial);
heart.position.set(0, -1, 0);
heart.scale.set(1.5, 1.5, 1);
scene.add(heart);
const heart2 = new THREE.Mesh(heartGeometry, heartMaterial);
heart2.position.set(-3, 0, 0);
heart2.scale.set(1, 1, 1);
scene.add(heart2);
const heart3 = new THREE.Mesh(heartGeometry, heartMaterial);
heart3.position.set(3, 0, 0);
heart3.scale.set(1, 1, 1);
scene.add(heart3);

for (let i = 0; i < 500; i++) {
    const smallHeart = new THREE.Mesh(heartGeometry, heartMaterial);
    smallHeart.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
    );
    smallHeart.scale.set(0.2, 0.2, 0.2);
    scene.add(smallHeart);
}

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


