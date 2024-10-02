import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import {
    initializeZipModule,
    applyMaterialChangeZip,
    setCurrentColor,
    updateSelectedZips,
    setupZipButtons,
    setupZipControl,
    frontZip,
    rearZip,
    leftZip,
    rightZip,
    setSelectedSize
} from './zip.js';


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-js-container');
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio( container.devicePixelRatio );
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    container.appendChild(renderer.domElement);

    const environment = new RoomEnvironment();
	const pmremGenerator = new THREE.PMREMGenerator( renderer );

	scene.background = new THREE.Color( 0xbbbbbb );
 
	scene.environment = pmremGenerator.fromScene( environment ).texture;
    environment.receiveShadow = true;
    environment.castShadow = true;
    


    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    

    const floorGeometry = new THREE.PlaneGeometry(100, 50);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: 0xF9F6EE, // Gray floor color
        roughness: 0.8, // High roughness for a less reflective surface
        metalness: 0, // No metalness for the floor
    });

    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to lie flat
    floor.position.y = -2; // Lower the floor slightly below the cube
    floor.receiveShadow = true; // Enable shadows to be cast on the floor
    scene.add(floor);

    // Improved Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    ambientLight.intensity = 0.7;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);

    directionalLight.position.set(5, 10, 7.5);
    directionalLight.intensity = 2.9
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    //Set up shadow properties for the light
    directionalLight.shadow.mapSize.width = 2048; // Increase shadow map resolution
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;  // Adjust the shadow frustum size
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.bias = -0.002;
    directionalLight.shadow.intensity = 2.5
    camera.position.set(0, -0.2, 3);
    controls.update();

    let object;
    let frontGlass = null, rearGlass = null, leftGlass = null, rightGlass = null;
    let glassAnimationParts = []
    let glassAnimationPartsBySide = {
        front: [],
        rear: [],
        left: [],
        right: []
    };
    let currentColor = 'black'
    
    
    let selectedSize = "14'x20'"; // Initial default size
    setSelectedSize(selectedSize)

    // Flags to track which side glasses are selected
    let selectedGlasses = {
        front: false,
        rear: false,
        left: false,
        right: false
    };
  
    let ledPart = null;
    let ledOriginalMaterial = null;
    let ledLight = null; // Reset the light reference

    const modelFiles = {
        "10'x10'": "10' x 10'.glb",
        "10'x14'": "10' x 14'.glb",
        "14'x14'": "14' x 14'.glb",
        "14'x20'": "14' x 20'.glb"
    };
    let rotatingParts = []; // Store parts to rotate


    const gltfLoader = new GLTFLoader();

    function updateButtonLabels(size) {
        const sideButtons = document.querySelectorAll('.side-btn');
        const zipButtons = document.querySelectorAll('.zip-btn');
    
        // Update the side buttons based on the selected size
        sideButtons.forEach((btn) => {
            const side = btn.getAttribute('data-side');
            let dimension = '';
            if (side === 'front' || side === 'rear') {
                dimension = size.split('x')[1]; // Get the second part (e.g., 14 or 20)
            } else if (side === 'left' || side === 'right') {
                dimension = size.split('x')[0]; // Get the first part (e.g., 10 or 14)
            }
            btn.textContent = `${dimension}' ${side.charAt(0).toUpperCase() + side.slice(1)}`;
        });
    
        // Update the zip buttons based on the selected size
        zipButtons.forEach((btn) => {
            const zip = btn.getAttribute('data-zip');
            let dimension = '';
            if (zip === 'front' || zip === 'rear') {
                dimension = size.split('x')[1]; // Get the second part (e.g., 14 or 20)
            } else if (zip === 'left' || zip === 'right') {
                dimension = size.split('x')[0]; // Get the first part (e.g., 10 or 14)
            }
            btn.textContent = `${dimension}' ${zip.charAt(0).toUpperCase() + zip.slice(1)}`;
        });
    }
    

    function loadModel(size) {
        if (object) {
            scene.remove(object);
            object = null;
        }
        ledPart = null;
        ledOriginalMaterial = null;
        ledLight = null; // Reset the light reference

        document.querySelectorAll('.side-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.zip-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.addon-control-btn').forEach((btn) => {            
            btn.setAttribute('data-state', 'check');
            btn.classList.remove('addon-check', 'addon-add', 'addon-close');
            btn.classList.add('addon-check');
        });

        
        const modelPath = modelFiles[size];

        gltfLoader.load(
            modelPath,
            (gltf) => {
                object = gltf.scene;
                object.position.set(0, -2, 0);
                object.scale.set(1, 1, 1);
                scene.add(object);
                // Traverse and find parts to rotate
                object.traverse((child) => {
                    if (child.isMesh) {
                        child.receiveShadow = true;
                        child.castShadow = true;
                        
                        // Identify parts for rotation based on name pattern
                        if (child.name && child.name.match(/^3DGeom-3/) && size == "14'x20'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-3/) && size == "14'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "10'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-3/) && size == "10'x10'") {
                            rotatingParts.push(child);
                        }
                        if (child.name && child.name.match(/^3DGeom-120/) && size == "14'x20'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-84/) && size == "14'x14'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-84/) && size == "10'x14'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-60/) && size == "10'x10'") {
                            ledPart=child;
                        }
                    }
                });

                // Update sliding glass for the selected panels
                setDefaultBlackMaterial(object);
                toggleRotation();
                updateSelectedGlasses();
                updateSliderParts(object);
                updateSelectedZips(selectedSize);
                updateButtonLabels(size);

            },
            (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
            (error) => console.error('An error occurred while loading the model:', error)
        );
    }
  
    const zipControl = document.getElementById('zipControl');
    loadModel(selectedSize); // Load default model
    initializeZipModule(scene, gltfLoader); // Initialize zip module
    setupZipButtons(); // Set up zip buttons once
    setupZipControl(zipControl)
    

    

    const rotationControl = document.getElementById('rotationControl');
    const rotationValueDisplay = document.getElementById('rotationValue');

    // Listen for changes in the slider's value
    rotationControl.addEventListener('input', (event) => {
        const rotationValue = event.target.value;
        rotationValueDisplay.textContent = `${rotationValue}°`; // Update the displayed value

        // Convert the slider value from degrees to radians and apply it to all rotating parts
        const angle = THREE.MathUtils.degToRad(rotationValue); // Convert degree to radians
        rotatingParts.forEach((part) => {
            part.rotation.z = angle; // Rotate around the Z-axis based on the slider value
        });
    });
    // Listen for size button clicks
    document.querySelectorAll('.size-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            document.querySelectorAll('.size-btn').forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.textContent.trim();
            setSelectedSize(selectedSize)
            loadModel(selectedSize);
            setupZipControl(zipControl, selectedSize); // Set up zip slider control
            updateButtonLabels(selectedSize); 
        });
    });
    

    // Update the color button event listener
    document.querySelectorAll('.color-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (object) {

                const selectedColor = event.target.classList.contains('black')
                    ? 'black'
                    : event.target.classList.contains('white')
                    ? 'white'
                    : 'black';

                currentColor = selectedColor;
                setCurrentColor(currentColor);

                // Define new material based on the selected color
                let newMaterial;
                if (selectedColor === 'black' || selectedColor === 'white') {
                    newMaterial = new THREE.MeshStandardMaterial({
                        color: selectedColor === 'black' ? 0x2B2B2B : 0xffffff,
                        metalness: 0.9,
                        roughness: 0.5,
                        // flatShading: true,
                    });
                }

                // Function to apply the material change to a specific object
                function applyMaterialChange(targetObject) {
                    targetObject.traverse((child) => {
                        if (child.isMesh) {
                            if (selectedColor != 'default') {
                                child.material = newMaterial; // Apply new material
                            }
                        }
                    });
                }
                function applyMaterialChangeGlass(targetObject) {
                    targetObject.traverse((child) => {
                        if (child.isMesh) {
                            // Apply new material or revert to original, excluding '3DGeom-25'
                            if (selectedColor != 'default' && child.name.includes('c8c8c8')) {
                                child.material = newMaterial; // Apply new material
                            }
                        }
                    });
                }

                

                // Traverse the main object and apply the material
                applyMaterialChange(object);


                if (frontGlass) applyMaterialChangeGlass(frontGlass);
                if (rearGlass) applyMaterialChangeGlass(rearGlass);
                if (leftGlass) applyMaterialChangeGlass(leftGlass);
                if (rightGlass) applyMaterialChangeGlass(rightGlass);

                if (frontZip) applyMaterialChangeZip(frontZip,selectedColor);
                if (rearZip) applyMaterialChangeZip(rearZip,selectedColor);
                if (leftZip) applyMaterialChangeZip(leftZip,selectedColor);
                if (rightZip) applyMaterialChangeZip(rightZip,selectedColor);
                
            }
        });
    });
    function setDefaultBlackMaterial(object) {
        if (object) {
            let defaultMaterial = new THREE.MeshStandardMaterial({
                color: currentColor === 'black' ? 0x2B2B2B : 0xffffff,
                metalness: 0.9,
                roughness: 0.5,
            });

    
            // Apply default black material to all mesh children
            object.traverse((child) => {
                if (child.isMesh) {
                    child.material = defaultMaterial; // Apply default black material
                }
            });
        }
    }
    function setDefaultBlackMaterialGlass(object) {
        if (object) {
            let defaultMaterial = new THREE.MeshStandardMaterial({
                color: currentColor === 'black' ? 0x2B2B2B : 0xffffff,
                metalness: 0.9,
                roughness: 0.5,
            });
    
            // Apply default black material to all mesh children
            object.traverse((child) => {
                if (child.isMesh && child.name.includes('c8c8c8')) {
                    child.material = defaultMaterial; // Apply default black material
                }
            });
        }
    }

    
    function animateRotation(part, fromAngle, toAngle, duration, callback) {
        const start = Date.now();
        const from = THREE.MathUtils.degToRad(fromAngle);
        const to = THREE.MathUtils.degToRad(toAngle);
    
        function animate() {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
    
            // Interpolate rotation between from and to
            part.rotation.z = from + (to - from) * progress;
    
            // If the animation is not finished, request the next frame
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else if (callback) {
                // If a callback is provided, call it after animation completes
                callback();
            }
        }
    
        // Start animation
        animate();
    }
    
    function toggleRotation() {
        rotatingParts.forEach((part) => {
            // Check current rotation in degrees
            const currentRotation = THREE.MathUtils.radToDeg(part.rotation.z);
           
    
            // Animate to 90 degrees and back to 0 degrees
            if (Math.abs(currentRotation - 90) < 1) {
                // Rotate back to 0 degrees over 2.5 seconds
                animateRotation(part, 90, 0, 2500);
            } else {
                // Rotate to 90 degrees over 2.5 seconds, then rotate back to 0
                animateRotation(part, 0, 90, 2500, () => {
                    // After reaching 90 degrees, rotate back to 0
                    animateRotation(part, 90, 0, 2500);
                });
            }
        });
    }
    
   

   // Raycasting for selecting parts
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const originalMaterials = {}; // To store original materials for each part
    let selectedPart = null; // Keep track of the selected part
    let selectableParts = {}; // To hold the selectable parts

    // Update mouse coordinates for raycasting
    function onMouseClick(event) {
        // Correct mouse coordinates relative to the container size
        const rect = container.getBoundingClientRect(); // Get canvas boundaries
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Perform raycasting
        raycaster.setFromCamera(mouse, camera);

        // Check for intersections with selectable parts (object children)
        const intersects = raycaster.intersectObjects(Object.values(selectableParts), true); // Recursive check

        // Reset the previously selected part
        if (selectedPart) {
            selectedPart.material.copy(originalMaterials[selectedPart.uuid]); // Correct material restoration
            selectedPart = null; // Clear the selected part
        }

        if (intersects.length > 0) {
            const clickedPart = intersects[0].object; // Get the first intersected object
            container.style.cursor = 'pointer'

            // Store the original material if it's not already stored
            if (!originalMaterials[clickedPart.uuid]) {
                originalMaterials[clickedPart.uuid] = clickedPart.material.clone();
            }

            // Apply the highlight material (yellow)
            clickedPart.material = new THREE.MeshStandardMaterial({
                color: 0xffff00, // Yellow for click highlight
                emissive: 0xffff00,
                emissiveIntensity: 1.0,
                metalness: 0.6,
                roughness: 0.4,
            });

            // Update the display with the part name
            const partName = clickedPart.name || 'Unnamed Part';
            const nameDisplayBox = document.getElementById('name-display'); // Your HTML display element
            nameDisplayBox.textContent = `Selected: ${partName}`;

            // Set the currently selected part
            selectedPart = clickedPart;
        } else {
            // Clear the name display box if no part is clicked
            const nameDisplayBox = document.getElementById('name-display');
            nameDisplayBox.textContent = '';
        }
    }

    // Add event listener for clicks on the canvas
    container.addEventListener('click', onMouseClick);

    function updateSliderParts(glassModel) {
        selectableParts = {}; // Clear previous selectable parts
        glassModel.traverse((child) => {
            child.receiveShadow = true;
            child.castShadow = true;
            if (child.isMesh && child.material && child.material.color) {
                selectableParts[child.uuid] = child; // Store each part as selectable
            }
        });
    }

    function toggleSlidingGlass(side, filePath) {
        let glassModel;
        let glassParts = [];

        if (side === 'front') {
            glassModel = frontGlass;
        } else if (side === 'rear') {
            glassModel = rearGlass;
        } else if (side === 'left') {
            glassModel = leftGlass;
        } else if (side === 'right') {
            glassModel = rightGlass;
        }
      
      
        if (!glassModel) {
            gltfLoader.load(filePath, (gltf) => {
                const newGlass = gltf.scene;
                newGlass.scale.set(1, 1, 1);
                positionGlass(newGlass, side);
                scene.add(newGlass);
                glassAnimationPartsBySide[side] = [];
                newGlass.traverse((child) => {
                    if (child.isMesh && child.material) {
                                        
                                        child.userData.initialY = child.position.y; // Store initial Z position for animation
                                        child.userData.initialX = child.position.x;
                                        child.userData.initialZ = child.position.z;
                                        glassParts.push(child); // Collect all zip parts
                    }
                });
                let sortedglassParts = glassParts.slice(); // Clone array to avoid mutating original
                sortedglassParts.sort((a, b) => {
                    return a.userData.worldY - b.userData.worldY; // Sort based on worldY
                });
    
                // Assign names based on the sorted order
                sortedglassParts.forEach((child, index) => {
                    let materialName = "UnknownMaterial";
    
                    // Name based on material color or type
                    if (child.material.color) {
                        const color = child.material.color.getHexString();
                        materialName = `${color}`;
                    } else if (child.material.type) {
                        materialName = `MaterialType-${child.material.type}`;
                    } 
    
                    const parentName = child.parent ? child.parent.name || 'UnnamedParent' : 'NoParent';

                    // Assign a name using material name, parent/group name, and part index
                    child.name = `${parentName}-${materialName}`;
                    child.userData.index = index + 1; // index + 1 to start from 1
                    
                    if (!child.name.includes('Kenar_Profil')) {
                        glassAnimationParts.push(child);
                        glassAnimationPartsBySide[side].push(child);
                    }
                });
                
                // Update glass model reference
                if (side === 'front') frontGlass = newGlass;
                if (side === 'rear') rearGlass = newGlass;
                if (side === 'left') leftGlass = newGlass;
                if (side === 'right') rightGlass = newGlass;

                // Mark the side as selected
                selectedGlasses[side] = true;
                updateSliderParts(newGlass);
                animateGlassSliding(side);
                setDefaultBlackMaterialGlass(newGlass);

            });
        } else {
            if (glassAnimationPartsBySide[side]) {
                glassAnimationPartsBySide[side].forEach(part => {
                    const index = glassAnimationParts.indexOf(part);
                    if (index > -1) {
                        glassAnimationParts.splice(index, 1);
                    }
                });
                glassAnimationPartsBySide[side] = [];
            }
    
            scene.remove(glassModel);
            if (side === 'front') frontGlass = null;
            if (side === 'rear') rearGlass = null;
            if (side === 'left') leftGlass = null;
            if (side === 'right') rightGlass = null;

            // Mark the side as deselected
            selectedGlasses[side] = false;
        }
    }

    function positionGlass(glass, side) {
        // Update positions of sliding glass based on selected size
        if (selectedSize === "14'x20'") {
            if (side === 'front') glass.position.set(0, -2, 0);
            if (side === 'rear') glass.position.set(0, -2, -4.11);
            if (side === 'left') {
                glass.position.set(-2.85, -2, -2.18);
                glass.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(2.85, -2, -2.18);
                glass.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "14'x14'") {
            if (side === 'front') glass.position.set(0, -2, 0);
            if (side === 'rear') glass.position.set(0, -2, -4.11);
            if (side === 'left') {
                glass.position.set(-1.95, -2, -2.18);
                glass.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(1.95, -2, -2.18);
                glass.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "10'x14'") {
            if (side === 'front') glass.position.set(0, -2, 0);
            if (side === 'rear') glass.position.set(0, -2, -2.82);
            if (side === 'left') {
                glass.position.set(-1.95, -2, -1.55);
                glass.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(1.95, -2, -1.55);
                glass.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "10'x10'") {
            if (side === 'front') glass.position.set(0, -2, 0);
            if (side === 'rear') glass.position.set(0, -2, -2.82);
            if (side === 'left') {
                glass.position.set(-1.32, -2, -1.55);
                glass.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(1.32, -2, -1.55);
                glass.rotation.y = -Math.PI / 2;
            }
        }
    }

    // Update only the selected sliding glass panels
    function updateSelectedGlasses() {
        Object.keys(selectedGlasses).forEach((side) => {
            if (selectedGlasses[side]) {
                let modelMap;

                if (selectedSize === "14'x20'") {
                    modelMap = {
                        'front': 'Sliding Glass (6).glb',
                        'rear': 'Sliding Glass (6).glb',
                        'left': 'Sliding Glass (4).glb',
                        'right': 'Sliding Glass (4).glb'
                    };
                } else if (selectedSize === "14'x14'") {
                    modelMap = {
                        'front': 'Sliding Glass (4).glb',
                        'rear': 'Sliding Glass (4).glb',
                        'left': 'Sliding Glass (4).glb',
                        'right': 'Sliding Glass (4).glb'
                    };
                } else if (selectedSize === "10'x14'") {
                    modelMap = {
                        'front': 'Sliding Glass (4).glb',
                        'rear': 'Sliding Glass (4).glb',
                        'left': 'Sliding Glass (3).glb',
                        'right': 'Sliding Glass (3).glb'
                    };
                } else if (selectedSize === "10'x10'") {
                    modelMap = {
                        'front': 'Sliding Glass (3).glb',
                        'rear': 'Sliding Glass (3).glb',
                        'left': 'Sliding Glass (3).glb',
                        'right': 'Sliding Glass (3).glb'
                    };
                }
                

                if (modelMap[side]) {
                    toggleSlidingGlass(side, modelMap[side]);
                }
            }
        });
    }

    // Add event listeners to the add-on buttons for each side
    document.querySelectorAll('.side-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const side = event.target.getAttribute('data-side');
            btn.classList.toggle('active');
            let modelMap;

            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front': 'Sliding Glass (6).glb',
                    'rear': 'Sliding Glass (6).glb',
                    'left': 'Sliding Glass (4).glb',
                    'right': 'Sliding Glass (4).glb'
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': 'Sliding Glass (4).glb',
                    'rear': 'Sliding Glass (4).glb',
                    'left': 'Sliding Glass (4).glb',
                    'right': 'Sliding Glass (4).glb'
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': 'Sliding Glass (4).glb',
                    'rear': 'Sliding Glass (4).glb',
                    'left': 'Sliding Glass (3).glb',
                    'right': 'Sliding Glass (3).glb'
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': 'Sliding Glass (3).glb',
                    'rear': 'Sliding Glass (3).glb',
                    'left': 'Sliding Glass (3).glb',
                    'right': 'Sliding Glass (3).glb'
                };
            }

            if (modelMap[side]) {
                toggleSlidingGlass(side, modelMap[side]);
            }
        });
    });
    function getMaxMovementValues(selectedSize, side) {
        let maxMovementX = 0, maxMovementY = 0, maxMovementY_1 = 0;
    
        if (selectedSize === "14'x20'") {
            if (side==='front' || side==='rear') {
                maxMovementX = 75;
                maxMovementY = 35;
                maxMovementY_1 = 35;
            } else if (side==='left' || side==='right') {
                maxMovementX = 115;
                maxMovementY = -35;
                maxMovementY_1 = -70;
            }
        } else if (selectedSize === "14'x14'") {
            maxMovementX = 115;
            maxMovementY = -35;
            maxMovementY_1 = -70;
        } else if (selectedSize === "10'x14'") {
            if (side==='front' || side==='rear') {
                maxMovementX = 115;
                maxMovementY = -35;
                maxMovementY_1 = -70;
            } else if (side==='left' || side==='right') {
                maxMovementX = 70;
                maxMovementY = -35;
                maxMovementY_1 = 0; // Not set in original code
            }
        } else if (selectedSize === "10'x10'") {
            maxMovementX = 70;
            maxMovementY = -35;
            maxMovementY_1 = 0; // Not set in original code
        }
        return { maxMovementX, maxMovementY, maxMovementY_1 };
    }
    
    function getSlideParameters(partType, selectedSize, side) {
        let startSlideAmount, slideMultiplier;
    
        if (partType === 'normalParts') {
            if (selectedSize === "14'x20'") {
                if (side==='front' || side==='rear') {
                    startSlideAmount = 0.5;
                    slideMultiplier = 2;
                } else {
                    // Left or Right
                    startSlideAmount = 0.66;
                    slideMultiplier = 3;
                }
            } else if (selectedSize === "14'x14'") {
                startSlideAmount = 0.66;
                slideMultiplier = 3;
            } else if (selectedSize === "10'x14'") {
                if (side==='front' || side==='rear') {
                    startSlideAmount = 0.66;
                    slideMultiplier = 3;
                } else {
                    // Left or Right
                    startSlideAmount = 0.5;
                    slideMultiplier = 2;
                }
            } else if (selectedSize === "10'x10'") {
                startSlideAmount = 0.5;
                slideMultiplier = 2;
            }
        } else if (partType === 'normalParts_1') {
            if (selectedSize === "14'x20'") {
                if (side==='front' || side==='rear') {
                    startSlideAmount = 0.5;
                    slideMultiplier = 2;
                } else {
                    // Left or Right
                    startSlideAmount = 0.33;
                    slideMultiplier = 1.5;
                }
            } else {
                startSlideAmount = 0.33;
                slideMultiplier = 1.5;
            }
        }
        return { startSlideAmount, slideMultiplier };
    }
    
    const glassControl = document.getElementById('glassControl');
    glassControl.addEventListener('input', (event) => {
        const glassValueDisplay = document.getElementById('glassValue');
        const glassValue = event.target.value;
        glassValueDisplay.textContent = `${glassValue}%`; // Update the displayed value in percentage

        // Convert the slider value (0-100) into a range from 0 to 1
        const slideAmount = THREE.MathUtils.mapLinear(glassValue, 0, 100, 0, 1);

        // Loop over each side that has glass installed
        Object.keys(selectedGlasses).forEach((side) => {
            if (selectedGlasses[side]) {
                // Get the glass parts for this side
                const parts = glassAnimationPartsBySide[side];
                if (!parts || parts.length === 0) return;

                // Get movement values based on selected size and side
                const { maxMovementX, maxMovementY, maxMovementY_1 } = getMaxMovementValues(selectedSize, side);

                // Reset all parts to their initial positions before translation
                parts.forEach((part) => {
                    part.position.set(
                        part.userData.initialX,
                        part.userData.initialY,
                        part.userData.initialZ
                    );
                });

                // Get all normal parts and door_2 parts
                const normalParts = parts.filter(part =>
                    part.name.includes('Sliding_Normal') && !part.name.includes('Sliding_Normal_1')
                );
                const normalParts_1 = parts.filter(part =>
                    part.name.includes('Sliding_Normal_1')
                );
                const door2Parts = parts.filter(part =>
                    part.name.includes('Sliding_Lock_Door_2')
                );

                // Function to slide parts towards a target position along specified axis
                function slideParts(parts, targetPosition, axis, partType) {
                    const { startSlideAmount, slideMultiplier } = getSlideParameters(partType, selectedSize, side);
                    if (slideAmount >= startSlideAmount) {
                        parts.forEach((part) => {
                            const translateDistance = (slideAmount - startSlideAmount) * targetPosition * slideMultiplier;
                            part.position[axis] = part.userData[`initial${axis.toUpperCase()}`] - translateDistance;
                        });
                    }
                }

                // Slide Door_2 Parts (Sliding_Lock_Door_2) along X-axis
                door2Parts.forEach((part) => {
                    const translateDistanceX = slideAmount * maxMovementX;
                    part.position.x = part.userData.initialX - translateDistanceX;
                });

                // Slide Normal Parts (Sliding_Normal) along Y-axis
                slideParts(normalParts, maxMovementY, 'y', 'normalParts');
                slideParts(normalParts_1, maxMovementY_1, 'y', 'normalParts_1');
            }
        });
    });

    

    function animateGlassSliding(side) {
        const parts = glassAnimationPartsBySide[side];
        if (!parts || parts.length === 0) return;
    
        const { maxMovementX, maxMovementY, maxMovementY_1 } = getMaxMovementValues(selectedSize, side);
    
        // Separate parts
        const normalParts = parts.filter(part =>
            part.name.includes('Sliding_Normal') && !part.name.includes('Sliding_Normal_1')
        );
        const normalParts_1 = parts.filter(part =>
            part.name.includes('Sliding_Normal_1')
        );
        const door2Parts = parts.filter(part =>
            part.name.includes('Sliding_Lock_Door_2')
        );
    
        // Reset positions to initial
        [...normalParts, ...normalParts_1, ...door2Parts].forEach(part => {
            part.position.set(
                part.userData.initialX,
                part.userData.initialY,
                part.userData.initialZ
            );
        });
    
        const totalDuration = 2000; // Total animation duration in milliseconds
    
        // Animate Door_2 parts first, then reverse
        animateParts(door2Parts, 'x', maxMovementX, totalDuration, 'door2Parts', side, () => {
            animateParts(door2Parts, 'x', maxMovementX, totalDuration, 'door2Parts', side, null, true); // Reverse
        });
    
        // Animate Normal Parts, then reverse
        animateParts(normalParts, 'y', maxMovementY, totalDuration, 'normalParts', side, () => {
            animateParts(normalParts, 'y', maxMovementY, totalDuration, 'normalParts', side, null, true); // Reverse
        });
    
        // Animate Normal Parts 1, then reverse
        animateParts(normalParts_1, 'y', maxMovementY_1, totalDuration, 'normalParts_1', side, () => {
            animateParts(normalParts_1, 'y', maxMovementY_1, totalDuration, 'normalParts_1', side, null, true); // Reverse
        });
    }
    function animateParts(parts, axis, maxMovement, duration, partType,side, onComplete, reverse = false) {
        const startTime = performance.now();
    
        const { startSlideAmount, slideMultiplier } = getSlideParameters(partType, selectedSize, side);
    
        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1); // Clamp between 0 and 1
    
            // Simulate slideAmount from 0 to 1 over the duration
            const slideAmount = reverse ? 1 - progress : progress; // Reverse if required
    
            parts.forEach((part) => {
                const initialPosition = part.userData[`initial${axis.toUpperCase()}`];
    
                if (partType === 'door2Parts') {
                    // Door 2 Parts slide immediately
                    const translateDistance = slideAmount * maxMovement;
                    part.position[axis] = initialPosition - translateDistance;
                } else {
                    // Normal Parts start sliding after startSlideAmount
                    if (slideAmount >= startSlideAmount) {
                        // Adjust slideAmount for the part's sliding phase
                        const adjustedSlideAmount = (slideAmount - startSlideAmount) * slideMultiplier;
                        part.position[axis] = initialPosition - adjustedSlideAmount * maxMovement;
                    } else {
                        // Keep at initial position until sliding starts
                        part.position[axis] = initialPosition;
                    }
                }
            });
    
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else if (onComplete) {
                onComplete();
            }
        }
    
        requestAnimationFrame(animate);
    }
    
    
    function addAddon(addonName) {
        if (addonName === 'lighting') {
            if (ledPart) {
                if (!ledOriginalMaterial) {
                    ledOriginalMaterial = ledPart.material.clone();
                }
                ledPart.material = new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                    emissive: new THREE.Color(0xffffff),
                    emissiveIntensity: 9.0,
                    metalness: 0.5,
                    roughness: 0.5,
                });
    
                // if (!ledLight) {
                //     ledLight = new THREE.PointLight(0xffffff, 2, 50);
                //     ledLight.position.copy(ledPart.getWorldPosition(new THREE.Vector3()));
                //     ledLight.castShadow = true;
                //     scene.add(ledLight);
                // }
            } else {
                console.warn('LED part 3DGeom-120 not found in the model.');
            }
        }
        // Handle other add-ons if necessary
    }

    function removeAddon(addonName) {
        if (addonName === 'lighting') {
            if (ledPart && ledOriginalMaterial) {
                ledPart.material = ledOriginalMaterial;
                ledOriginalMaterial = null;
            }
            if (ledLight) {
                scene.remove(ledLight);
                ledLight = null;
            }
        }
        // Handle other add-ons if necessary
    }
    // Add event listeners to the addon control buttons
    document.querySelectorAll('.addon-control-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const button = event.currentTarget;
            const addon = button.getAttribute('data-addon');

            // Get the current state from the data-state attribute
            let currentState = button.getAttribute('data-state') || 'check';

            // Determine the next state
            let nextState;
            if (currentState === 'check') {
                nextState = 'add';
            } else if (currentState === 'add') {
                nextState = 'close';
            } else if (currentState === 'close') {
                nextState = 'check';
            }


            // Update the button's data-state attribute
            button.setAttribute('data-state', nextState);
            

            // Update the button's class to reflect the new state
            button.classList.remove('addon-check', 'addon-add', 'addon-close');
            button.classList.add('addon-' + nextState);

            if (nextState === 'add') {
                console.log('Adding', addon);
                addAddon(addon);
            } else if (nextState === 'close') {
                console.log('Removing', addon);
                removeAddon(addon);
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
