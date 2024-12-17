import * as THREE from 'three'

//1. creating a scene
const scene:THREE.scene = new THREE.scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);