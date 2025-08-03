import * as THREE from 'three';
import { initializeInput, checkInputs } from './input.js'

const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 5, 1);
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xFA8072 });
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function init() {
	renderer.setAnimationLoop(game_loop);
}

function game_loop(): void {
	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
	update()
	renderer.render(scene, camera);
}

function update() {
	var v = checkInputs()
	cube.position.x += v.x
	cube.position.y += v.y
};

initializeInput()
init();