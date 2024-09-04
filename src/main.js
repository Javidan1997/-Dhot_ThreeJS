import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-js-container');
    const scene = new THREE.Scene();

    // Set a background image or color
    // const loader = new THREE.TextureLoader();
    const bgColor = new THREE.Color(0xF3F3F3);
    scene.background = bgColor;

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Add a Ground Plane (Floor)

    const floorMaterial = new THREE.MeshStandardMaterial();
    const floorGeometry = new THREE.PlaneGeometry(100, 100);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Improved Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    camera.position.set(0, 1, 5);
    controls.update();

    let object; // Declare the object variable outside the loader to make it accessible later

    const modelFiles = {
        "10'x10'": "10' x 10'.glb",
        "10'x14'": "10' x 14'.glb",
        "14'x14'": "14' x 14'.glb",
        "14'x20'": "14' x 20'.glb"
    };

    const gltfLoader = new GLTFLoader();

    function loadModel(size) {
        // Remove the current model if it exists
        if (object) {
            scene.remove(object);
            object = null; // Clear the object reference
        }

        // Load the new model based on the selected size
        const modelPath = modelFiles[size]; // Get the correct model file path

        gltfLoader.load(
            modelPath,
            (gltf) => {
                object = gltf.scene;
                object.position.set(0, -2, 0);
                object.scale.set(1, 1, 1);
                scene.add(object);
            },
            (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
            (error) => console.error('An error occurred while loading the model:', error)
        );
    }

    // Initially load the default model
    loadModel("14'x20'");

    // Listen for size button clicks
    document.querySelectorAll('.size-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            // Remove 'active' class from all size buttons
            document.querySelectorAll('.size-btn').forEach(button => button.classList.remove('active'));

            // Add 'active' class to the clicked button
            btn.classList.add('active');

            // Load the model based on the button text (size)
            const selectedSize = btn.textContent.trim();
            loadModel(selectedSize);
        });
    });

    // Listen for changes in the color buttons
    document.querySelectorAll('.color-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (object) {
                const selectedColor = event.target.classList.contains('black')
                    ? 'black'
                    : event.target.classList.contains('white')
                    ? 'white'
                    : 'default';

                // Store the original materials when the object is first loaded
                if (!object.userData.originalMaterials) {
                    object.userData.originalMaterials = {};
                    object.traverse((child) => {
                        if (child.isMesh) {
                            object.userData.originalMaterials[child.uuid] = child.material;
                        }
                    });
                }

                // Define materials for different colors
                let newMaterial;
                if (selectedColor === 'black') {
                    newMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
                } else if (selectedColor === 'white') {
                    newMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
                }

                // Traverse through the object and apply the new material or revert to original
                object.traverse((child) => {
                    if (child.isMesh) {
                        if (selectedColor === 'default') {
                            child.material = object.userData.originalMaterials[child.uuid];
                        } else {
                            child.material = newMaterial;
                        }
                    }
                });
            }
        });
    });

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
});
