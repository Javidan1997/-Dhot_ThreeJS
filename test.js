import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows

// Attach renderer to a container in HTML instead of the entire body
document.getElementById('threejs-container').appendChild(renderer.domElement);

const textureLoader = new TextureLoader();
const skyTexture = textureLoader.load('/sky.jpg');
scene.background = skyTexture;

// Add OrbitControls for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Set initial camera position to see the whole model clearly
camera.position.set(10, 10, 15); // Adjusted for better overall visibility
controls.update();

// Improved Lighting Setup
const ambientLight = new THREE.AmbientLight(0x404040, 1.0); // Soft white light
scene.add(ambientLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8); // Ambient lighting from above and below
hemisphereLight.position.set(0, 20, 0);
scene.add(hemisphereLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); // Adjust intensity as needed
directionalLight.position.set(5, 10, 5);
directionalLight.castShadow = true; // Enable shadow casting
directionalLight.shadow.mapSize.width = 2048; // Increase shadow map size for better quality
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -20;
directionalLight.shadow.camera.right = 20;
directionalLight.shadow.camera.top = 20;
directionalLight.shadow.camera.bottom = -20;
scene.add(directionalLight);

// Add a Ground Plane Helper
const floorTexture = textureLoader.load('/floor2.jpg');

// Modify ground material to use the loaded floor texture
const groundMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
const groundGeometry = new THREE.PlaneGeometry(200, 200); // Large ground plane
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotate to lay flat
ground.position.y = -0.1; // Adjust the ground height
ground.receiveShadow = true;
scene.add(ground);

// Grass
const grassTexture = textureLoader.load('grass.jpg');
const bumpMap = textureLoader.load('grass-bump.png'); // Use a bump map texture
const grassGeometry = new THREE.PlaneGeometry(50, 50, 32, 32); // Increase segments for more detail
const grassMaterial = new THREE.MeshStandardMaterial({
  map: grassTexture,
  bumpMap: bumpMap,
  bumpScale: 0.5, // Adjust bump scale for desired depth effect
  side: THREE.DoubleSide, // Render both sides of the plane
});
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.rotation.x = -Math.PI / 2; // Rotate to lay flat
grass.position.y = -0.05; // Adjust height to sit on top of the ground plane
grass.receiveShadow = true; // Make sure it receives shadows
scene.add(grass);

// Add grid helper for visual reference
// const gridHelper = new THREE.GridHelper(200, 50, 0x000000, 0x000000); // Large grid for reference
// gridHelper.position.y = -1; // Align with ground height
// scene.add(gridHelper);

// UI Elements (Name Display Box, LED Checkboxes, etc.)
const nameDisplayBox = document.createElement('div');
nameDisplayBox.style.position = 'absolute';
nameDisplayBox.style.top = '10px';
nameDisplayBox.style.left = '10px';
nameDisplayBox.style.padding = '10px';
nameDisplayBox.style.backgroundColor = '#fff';
nameDisplayBox.style.border = '1px solid #ccc';
nameDisplayBox.style.fontSize = '14px';
document.body.appendChild(nameDisplayBox);

const ledCheckboxes = {};
const ledContainer = document.createElement('div');
ledContainer.style.position = 'absolute';
ledContainer.style.top = '50px';
ledContainer.style.left = '10px';
ledContainer.style.padding = '10px';
ledContainer.style.backgroundColor = '#fff'; // White background for better visibility
ledContainer.style.border = '1px solid #ccc'; // Light border
document.body.appendChild(ledContainer);

const ledParts = ['3DGeom-4_3', '3DGeom-4_2', '3DGeom-4_1', '3DGeom-4'];

// Additional Code for Dropdowns, LED Control, Resizing, Animations, Model Loading, etc.
// (Paste the rest of the Three.js logic here, similar to your original script)

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update the controls for camera
  renderer.render(scene, camera); // Render the scene with camera
}

animate();
