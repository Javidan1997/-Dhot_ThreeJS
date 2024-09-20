import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';


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
    directionalLight.intensity = 1.9
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

    camera.position.set(0, -0.2, 3);
    controls.update();

    let object;
    let frontGlass = null, rearGlass = null, leftGlass = null, rightGlass = null;
    let frontZip = null, rearZip = null, leftZip = null, rightZip = null; // To store zip models for each side
    let selectedSize = "14'x20'"; // Initial default size
    const zipFilePaths = {
        front: null,
        rear: null,
        left: null,
        right: null
    };

    // Flags to track which side glasses are selected
    let selectedGlasses = {
        front: false,
        rear: false,
        left: false,
        right: false
    };
    let selectedZips = {
        front: false,
        rear: false,
        left: false,
        right: false
    };

    const modelFiles = {
        "10'x10'": "10' x 10'.glb",
        "10'x14'": "10' x 14'.glb",
        "14'x14'": "14' x 14'.glb",
        "14'x20'": "14' x 20'.glb"
    };
    let rotatingParts = []; // Store parts to rotate
    let zipAnimationParts = []; // Store parts to rotate


    const gltfLoader = new GLTFLoader();

    function loadModel(size) {
        if (object) {
            scene.remove(object);
            object = null;
        }
        document.querySelectorAll('.side-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.zip-btn').forEach((btn) => {
            btn.classList.remove('active');
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
                    }
                });

                // Update sliding glass for the selected panels
                toggleRotation() ;
                updateSelectedGlasses();
                updateSliderParts(object); 
                updateSelectedZips();
                updateZipParts(object);
                setDefaultBlackMaterial(object);
            },
            (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
            (error) => console.error('An error occurred while loading the model:', error)
        );
    }

    loadModel(selectedSize); // Load default model

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



    const zipControl = document.getElementById('zipControl');

    zipControl.addEventListener('input', (event) => {
        const zipValueDisplay = document.getElementById('zipValue');
        const zipValue = event.target.value;
        zipValueDisplay.textContent = `${zipValue}%`; // Update the displayed value in percentage
    
        // Convert the slider value (0-100) into a range where 0% is fully extended, and 100% is fully retracted
        const slideAmount = THREE.MathUtils.mapLinear(zipValue, 0, 100, 0, 1); // Convert value from 0 to 1 for simplicity
    
        // Check if any file paths are loaded for the zips
        let activeZipType = null;
        if (zipFilePaths.front) activeZipType = zipFilePaths.front;
        else if (zipFilePaths.rear) activeZipType = zipFilePaths.rear;
        else if (zipFilePaths.left) activeZipType = zipFilePaths.left;
        else if (zipFilePaths.right) activeZipType = zipFilePaths.right;
    
        // Adjust movement limits based on the active zip file path
        let maxMovement = 123; // Default for Zip 6
        if (activeZipType && activeZipType.includes('Zip 4.glb')) {
            maxMovement = 140; // Adjusted movement for Zip 4.glb
        } else if (activeZipType && activeZipType.includes('Zip 3.glb')) {
            maxMovement = 180; // Adjusted movement for Zip 3.glb
        }
    
        // Find the part that includes 'zip-18' in its name to be the maxIndexPart
        const maxIndexPart = zipAnimationParts.find(part => part.name.includes('zip-18'));
    
        // Apply movement logic based on the part's index relative to 'zip-18'
        zipAnimationParts.forEach((part) => {
            if (part !== maxIndexPart) {
                // Calculate the new z-position relative to the 'zip-18' part
                const indexRatio = (maxIndexPart.userData.index - part.userData.index) / maxIndexPart.userData.index;
                const movementLimit = indexRatio * slideAmount * maxMovement; // Movement speeds up for lower indexed parts
                part.position.z = part.userData.initialZ + movementLimit; 
            } else {
                // The 'zip-18' part does not move
                part.position.z = part.userData.initialZ;
            }
        });
    });
    

        
    // Listen for size button clicks
    document.querySelectorAll('.size-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            document.querySelectorAll('.size-btn').forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = btn.textContent.trim();
            loadModel(selectedSize);
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

                function applyMaterialChangeZip(targetObject) {
                    targetObject.traverse((child) => {
                        if (child.isMesh) {
                            // Apply new material or revert to original, excluding '3DGeom-25'
                            if (selectedColor != 'default' && child.name.includes('7e7e7e')) {
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

                if (frontZip) applyMaterialChangeZip(frontZip);
                if (rearZip) applyMaterialChangeZip(rearZip);
                if (leftZip) applyMaterialChangeZip(leftZip);
                if (rightZip) applyMaterialChangeZip(rightZip);
                
            }
        });
    });
    function setDefaultBlackMaterial(object) {
        if (object) {
            let defaultMaterial = new THREE.MeshStandardMaterial({
                color: 0x2B2B2B, // Default black color
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
                color: 0x2B2B2B, // Default black color
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

    function setDefaultBlackMaterialZip(object) {
        if (object) {
            let defaultMaterial = new THREE.MeshStandardMaterial({
                color: 0x2B2B2B, // Default black color
                metalness: 0.9,
                roughness: 0.5,
            });
    
            // Apply default black material to all mesh children
            object.traverse((child) => {
                if (child.isMesh && child.name.includes('7e7e7e')) {
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
                newGlass.traverse((child) => {
                    if (child.isMesh && child.material) {
                                        const worldPosition = new THREE.Vector3();
                                        child.getWorldPosition(worldPosition);
                                        child.userData.worldY = worldPosition.y;
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
                        materialName = `Color-${color}`;
                    } else if (child.material.type) {
                        materialName = `MaterialType-${child.material.type}`;
                    }
    
                    // Assign a name using material name and part order based on y-axis position
                    child.name = `${materialName}-glass-${index}`;
                    child.userData.index = index + 1; // index + 1 to start from 1
                    child.userData.initialZ = child.position.z; // Store initial Z position for animation
                });
                // Update glass model reference
                if (side === 'front') frontGlass = newGlass;
                if (side === 'rear') rearGlass = newGlass;
                if (side === 'left') leftGlass = newGlass;
                if (side === 'right') rightGlass = newGlass;

                // Mark the side as selected
                selectedGlasses[side] = true;
                updateSliderParts(newGlass);
                setDefaultBlackMaterialGlass(newGlass);

            });
        } else {
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

    function updateZipParts(zipModel) {
        selectableParts = {}; // Clear previous selectable parts
        zipModel.traverse((child) => {
            
            if (child.isMesh && child.material && child.material.color) {
                selectableParts[child.uuid] = child; // Store each part as selectable
            }
        });
    }
    function toggleZip(side, filePath) {
        let zipModel;
    
        if (side === 'front') {
            zipModel = frontZip;
        } else if (side === 'rear') {
            zipModel = rearZip;
        } else if (side === 'left') {
            zipModel = leftZip;
        } else if (side === 'right') {
            zipModel = rightZip;
        }
    
        if (!zipModel) {
            gltfLoader.load(filePath, (gltf) => {
                const newZip = gltf.scene;
                newZip.scale.set(1, 1, 1);
                positionZip(newZip, side);
                scene.add(newZip);
    
                // Gather all mesh children for sorting by y-position
                let zipParts = [];
    
                newZip.traverse((child) => {
                    child.receiveShadow = true;
                    child.castShadow = true;
                    
    
                    if (child.isMesh && child.material) {
                        const worldPosition = new THREE.Vector3();
                        child.getWorldPosition(worldPosition);
                        child.userData.worldY = worldPosition.y;
                        zipParts.push(child); // Collect all zip parts
                    }
                });
    
                let sortedZipParts = zipParts.slice(); // Clone array to avoid mutating original
                sortedZipParts.sort((a, b) => {
                    return a.userData.worldY - b.userData.worldY; // Sort based on worldY
                });
    
                // Assign names based on the sorted order
                sortedZipParts.forEach((child, index) => {
                    let materialName = "UnknownMaterial";
    
                    // Name based on material color or type
                    if (child.material.color) {
                        const color = child.material.color.getHexString();
                        materialName = `Color-${color}`;
                    } else if (child.material.type) {
                        materialName = `MaterialType-${child.material.type}`;
                    }
    
                    // Assign a name using material name and part order based on y-axis position
                    child.name = `${materialName}-zip-${index}`;
                    child.userData.index = index + 1; // index + 1 to start from 1
                    child.userData.initialZ = child.position.z; // Store initial Z position for animation
                    if (!child.name.includes('7e7e7e')){
                        zipAnimationParts.push(child);

                    }
                     // Add to animation parts
                });
                zipFilePaths[side] = filePath;
                // Update zip model reference
                if (side === 'front') frontZip = newZip;
                if (side === 'rear') rearZip = newZip;
                if (side === 'left') leftZip = newZip;
                if (side === 'right') rightZip = newZip;
    
                // Apply the same logic to Zip models as sliders
                selectedZips[side] = true;
                updateZipParts(newZip);
                setDefaultBlackMaterialZip(newZip);
            });
        } else {
            scene.remove(zipModel);
            if (side === 'front') frontZip = null;
            if (side === 'rear') rearZip = null;
            if (side === 'left') leftZip = null;
            if (side === 'right') rightZip = null;
            selectedZips[side] = false;
        }
    }
    function positionZip(zip, side) {
        // Use the same positions as the sliding glass
        if (selectedSize === "14'x20'") {
            if (side === 'front') zip.position.set(0, -2, 0);
            if (side === 'rear') zip.position.set(0, -2, -4.11);
            if (side === 'left') {
                zip.position.set(-2.85, -2, -2.18);
                zip.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                zip.position.set(2.85, -2, -2.18);
                zip.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "14'x14'") {
            if (side === 'front') zip.position.set(0, -2, 0);
            if (side === 'rear') zip.position.set(0, -2, -4.11);
            if (side === 'left') {
                zip.position.set(-1.95, -2, -2.18);
                zip.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                zip.position.set(1.95, -2, -2.18);
                zip.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "10'x14'") {
            if (side === 'front') zip.position.set(0, -2, 0);
            if (side === 'rear') zip.position.set(0, -2, -2.82);
            if (side === 'left') {
                zip.position.set(-1.95, -2, -1.55);
                zip.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                zip.position.set(1.95, -2, -1.55);
                zip.rotation.y = -Math.PI / 2;
            }
        } else if (selectedSize === "10'x10'") {
            if (side === 'front') zip.position.set(0, -2, 0);
            if (side === 'rear') zip.position.set(0, -2, -2.82);
            if (side === 'left') {
                zip.position.set(-1.32, -2, -1.55);
                zip.rotation.y = Math.PI / 2;
            }
            if (side === 'right') {
                zip.position.set(1.32, -2, -1.55);
                zip.rotation.y = -Math.PI / 2;
            }
        }
    }
    function updateSelectedZips() {
        Object.keys(selectedZips).forEach((side) => {
            if (selectedZips[side]) {
                let modelMap; 

                if (selectedSize === "14'x20'") {
                    modelMap = {
                        'front': 'Zip 6.glb',
                        'rear': 'Zip 6.glb',
                        'left': 'Zip 4.glb',
                        'right': 'Zip 4.glb'
                    };
                } else if (selectedSize === "14'x14'") {
                    modelMap = {
                        'front': 'Zip 4.glb',
                        'rear': 'Zip 4.glb',
                        'left': 'Zip 4.glb',
                        'right': 'Zip 4.glb'
                    };
                } else if (selectedSize === "10'x14'") {
                    modelMap = {
                        'front': 'Zip 4.glb',
                        'rear': 'Zip 4.glb',
                        'left': 'Zip 3.glb',
                        'right': 'Zip 3.glb'
                    };
                } else if (selectedSize === "10'x10'") {
                    modelMap = {
                        'front': 'Zip 3.glb',
                        'rear': 'Zip 3.glb',
                        'left': 'Zip 3.glb',
                        'right': 'Zip 3.glb'
                    };
                }
        

                if (modelMap[side]) {
                    toggleZip(side, modelMap[side]);
                }
            }
        });
    }


    document.querySelectorAll('.zip-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const side = event.target.getAttribute('data-zip');
            let modelMap;
            btn.classList.toggle('active');
    
            // Update modelMap to include Zips (Zip 6.glb, Zip 4.glb, Zip 3.glb)
            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front': 'Zip 6.glb',
                    'rear': 'Zip 6.glb',
                    'left': 'Zip 4.glb',
                    'right': 'Zip 4.glb'
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': 'Zip 4.glb',
                    'rear': 'Zip 4.glb',
                    'left': 'Zip 4.glb',
                    'right': 'Zip 4.glb'
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': 'Zip 4.glb',
                    'rear': 'Zip 4.glb',
                    'left': 'Zip 3.glb',
                    'right': 'Zip 3.glb'
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': 'Zip 3.glb',
                    'rear': 'Zip 3.glb',
                    'left': 'Zip 3.glb',
                    'right': 'Zip 3.glb'
                };
            }
    
            if (modelMap[side]) {
                toggleZip(side, modelMap[side]);
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
