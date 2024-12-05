// zip.js
import * as THREE from 'three';


let currentColor = 'black';
export let zipAnimationPartsBySide = {};
export let frontZip = null, rearZip = null, leftZip = null, rightZip = null; // To store zip models for each side
export const zipFilePaths = {
    front: null,
    rear: null,
    left: null,
    right: null
};
export let selectedZips = {
    front: false,
    rear: false,
    left: false,
    right: false
};
export let zipAnimationParts = []; // Store parts to animate
// Add this function to zip.js
export function setCurrentColor(color) {
    currentColor = color;
}


let scene, gltfLoader,exportRoot,glassModel,isShadeAvailable;
let selectedSize; 
let zipButtonsInitialized = false;

export function removeAllZips() {
    if (frontZip) {
        scene.remove(frontZip);
        exportRoot.remove(frontZip);
        frontZip = null;
    }
    if (rearZip) {
        scene.remove(rearZip);
        exportRoot.remove(rearZip);
        rearZip = null;
    }
    if (leftZip) {
        scene.remove(leftZip);
        exportRoot.remove(leftZip);
        leftZip = null;
    }
    if (rightZip) {
        scene.remove(rightZip);
        exportRoot.remove(rightZip);
        rightZip = null;
    }
    selectedZips = {
        front: false,
        rear: false,
        left: false,
        right: false
    };
    zipAnimationParts = [];
}

export function initializeZipModule(_scene, _gltfLoader,_exportRoot,_glassModel) {
    scene = _scene;
    gltfLoader = _gltfLoader;
    exportRoot = _exportRoot;
    glassModel = _glassModel;
}
export function setSelectedSize(size) {
    selectedSize = size;
}

export function applyMaterialChangeZip(targetObject, selectedColor) {
    targetObject.traverse((child) => {
        if (child.isMesh) {
            if (child.name.includes('fad2a5')) {
                let newMaterial = new THREE.MeshPhysicalMaterial({
                    color: selectedColor === 'black' ? 0x4a4a4a : 0xF1F0EA,
                    metalness: 0.9,
                    roughness: 0.5,
                    side: THREE.DoubleSide 
                });
                child.material = newMaterial; // Apply new material
            } else {
                let transparentMaterial = new THREE.MeshPhysicalMaterial({
                    color: 0xFAF9F6,
                    transparent: true,
                    opacity: 0.85,
                    side: THREE.DoubleSide 
                });
                child.material = transparentMaterial;
            }
        }
    });
}

function setDefaultBlackMaterialZip(object) {
    if (object) {
        let defaultMaterial = new THREE.MeshPhysicalMaterial({
            color: currentColor === 'black' ? 0x4a4a4a : 0xF1F0EA,
            metalness: 0.9,
            roughness: 0.5,
            side: THREE.DoubleSide 
        });
        let transparentMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xFAF9F6,
            transparent: true,
            opacity: 0.85,
            side: THREE.DoubleSide 
        });

        // Apply default black material to all mesh children
        object.traverse((child) => {
            if (child.isMesh && child.name.includes('fad2a5')) {
                child.material = defaultMaterial; // Apply default black material-
            } else {
                child.material = transparentMaterial
                
            }
        });
    }
}

export function updateZipParts(zipModel) {
        let selectableParts = {}; // Clear previous selectable parts
        zipModel.traverse((child) => {
            
            if (child.isMesh && child.material && child.material.color) {
                selectableParts[child.uuid] = child; // Store each part as selectable
            }
        });
}

export function toggleZip(side, filePath, selectedSize) {
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
            if(glassModel) {
                positionZip(newZip, side, selectedSize);
            } else {
                positionZip2(newZip, side, selectedSize);
            }
            
            scene.add(newZip);
            exportRoot.add(newZip);

            // Initialize arrays
            let zipParts = [];
            zipAnimationPartsBySide[side] = [];

            newZip.traverse((child) => {
                child.receiveShadow = true;
                child.castShadow = true;

                if (child.isMesh && child.material) {
                    const worldPosition = new THREE.Vector3();
                    child.getWorldPosition(worldPosition);
                    child.userData.worldY = worldPosition.y;
                    child.userData.initialZ = child.position.z;
                    child.userData.initialX = child.position.x;
                    child.userData.initialY = child.position.y;

                    zipParts.push(child);
                }
            });

            let sortedZipParts = zipParts.slice().sort((a, b) => a.userData.worldY - b.userData.worldY);

            sortedZipParts.forEach((child, index) => {
                let materialName = "UnknownMaterial";

                if (child.material.color) {
                    const color = child.material.color.getHexString();
                    materialName = `Color-${color}`;
                } else if (child.material.type) {
                    materialName = `MaterialType-${child.material.type}`;
                }

                child.name = `${materialName}-zip-${index}`;
                child.userData.index = index + 1;

                // Add all parts to animation arrays
                if (child.name.includes('efe4d4') || child.name.includes('zip-0')) {
                    zipAnimationParts.push(child);
                    zipAnimationPartsBySide[side].push(child);
                }
                
            });

            setDefaultBlackMaterialZip(newZip);

            // Update zip model reference
            if (side === 'front') frontZip = newZip;
            if (side === 'rear') rearZip = newZip;
            if (side === 'left') leftZip = newZip;
            if (side === 'right') rightZip = newZip;

            updateZipParts(newZip);

            // Start the open animation (from closed to open), then close it
            animateZipSliding(zipAnimationPartsBySide[side], true, () => {
                animateZipSliding(zipAnimationPartsBySide[side], false);
            });
        });
    } else {
        // Remove zip model and its parts
        // Remove zip parts from zipAnimationParts and zipAnimationPartsBySide
        zipAnimationParts = zipAnimationParts.filter(part => part.parent !== zipModel);
        delete zipAnimationPartsBySide[side];

        scene.remove(zipModel);
        exportRoot.remove(zipModel);

        // Remove the zip model reference
        if (side === 'front') frontZip = null;
        if (side === 'rear') rearZip = null;
        if (side === 'left') leftZip = null;
        if (side === 'right') rightZip = null;
        const zipIcon = document.getElementById('zipIcon');
        zipIcon.classList.add('disabled');
    }
}


function positionZip(zip, side,selectedSize) {
    // Use the same positions as the sliding glass
    if (selectedSize === "14'x20'") {
        if (side === 'front') zip.position.set(0, -2, 0.08);
        if (side === 'rear'){
            zip.position.set(0, -2, -4.45);
            zip.rotation.y = -Math.PI;

        } 
        if (side === 'left') {
            zip.position.set(-3.2, -2, -2.18);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(3.2, -2, -2.161);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "14'x14'") {
        if (side === 'front') zip.position.set(0, -2, 0.08);
        if (side === 'rear'){
            zip.position.set(0, -2, -4.45);
            zip.rotation.y = -Math.PI;

        } 
        if (side === 'left') {
            zip.position.set(-2.24, -2, -2.18);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(2.24, -2, -2.161);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "10'x14'") {
        if (side === 'front') zip.position.set(0, -2, 0.08);
        if (side === 'rear') {
            zip.position.set(0, -2, -3.20);
            zip.rotation.y = -Math.PI; 
        }
        if (side === 'left') {
            zip.position.set(-2.24, -2, -1.58);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(2.24, -2, -1.55);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "10'x10'") {
        if (side === 'front') zip.position.set(0, -2, 0.08);
        if (side === 'rear') {
            zip.position.set(0, -2, -3.20);
            zip.rotation.y = -Math.PI; 
        }
        if (side === 'left') {
            zip.position.set(-1.63, -2, -1.58);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(1.63, -2, -1.55);
            zip.rotation.y = Math.PI / 2;
        }
    }
}
function positionZip2(zip, side) {
    // Update positions of sliding zip based on selected size
    zip.scale.set(1.01,1,1)
    if (selectedSize === "14'x20'") {
        if (side === 'front'){
            zip.scale.set(1.01,1,1)
            zip.position.set(0, -2, -0.03);
        }
        if (side === 'rear') {
            zip.position.set(0, -2, -4.31) ;
            zip.rotation.y = -Math.PI;
        }
        if (side === 'left') {
            zip.position.set(-3.1, -2, -2.18);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(3.1, -2, -2.18);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "14'x14'") {
        if (side === 'front') zip.position.set(0, -2, -0.03);
        if (side === 'rear'){
            zip.position.set(0, -2, -4.31);
            zip.rotation.y = -Math.PI;
        }
        if (side === 'left') {
            zip.position.set(-2.13, -2, -2.18);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(2.13, -2, -2.18);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "10'x14'") {
        if (side === 'front') zip.position.set(0, -2, -0.03);
        if (side === 'rear') {
            zip.position.set(0, -2, -3.09);
            zip.rotation.y = -Math.PI; 
        }
        if (side === 'left') {
            zip.position.set(-2.2, -2, -1.55);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(2.2, -2, -1.55);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "10'x10'") {
        if (side === 'front') zip.position.set(0, -2, -0.03);
        if (side === 'rear') {
            zip.position.set(0, -2, -3.09);
            zip.rotation.y = -Math.PI; 
        }
        if (side === 'left') {
            zip.position.set(-1.52, -2, -1.55);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(1.52, -2, -1.55);
            zip.rotation.y = Math.PI / 2;
        }
    }
}
export function updateSelectedZips(selectedSize) {

    Object.keys(selectedZips).forEach((side) => {
        if (selectedZips[side]) {
            let modelMap; 

            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/1df6540415fd99c6/Zip_20_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/1df6540415fd99c6/Zip_20_.glb",
                    'left': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'right': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb"
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'left': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'right': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb"
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'left': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'right': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb"
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb" ,
                    'left': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'right': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb" 
                };
            }
    

            if (modelMap[side]) {
                toggleZip(side, modelMap[side], selectedSize);
                selectedZips[side] = zipModel ? false : true;
                updateTotalPrice();
            }
        }
    });
}

// Event listener setup for zip buttons
export function setupZipButtons() {
    if (zipButtonsInitialized) return; // Prevent adding multiple listeners
    zipButtonsInitialized = true;
    document.querySelectorAll('.zip-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const side = event.target.getAttribute('data-zip');
            let modelMap;
            btn.classList.toggle('active');
    
            // Update modelMap to include Zips (Zip 6.glb, Zip 4.glb, Zip 3.glb)
            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/1df6540415fd99c6/Zip_20_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/1df6540415fd99c6/Zip_20_.glb",
                    'left': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'right': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb"
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'left': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'right': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb"
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/8ff65871bb1267e8/Zip_14_.glb",
                    'left': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'right': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb"
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'left': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'right': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb"
                };
            }
    
            if (modelMap[side]) {
                toggleZip(side, modelMap[side], selectedSize);
                selectedZips[side] = zipModel ? false : true;
                updateTotalPrice();
            }
        });
    });
}

// Function to set up zip control event listener
export function setupZipControl(zipControlElement, selectedSize) {
    zipControlElement.addEventListener('input', (event) => {
        const zipValueDisplay = document.getElementById('zipValue');
        const zipValue = event.target.value;
        // zipValueDisplay.textContent = `${zipValue}%`; // Update the displayed value in percentage

        // Convert the slider value (0-100) into a range from 0 to 1
        const slideAmount = THREE.MathUtils.mapLinear(zipValue, 0, 100, 0, 1);

        let initialMaxMovement = 100; // Reset maxMovement to 100 each time
        let maxMovement = initialMaxMovement; // Store max movement for consistent decrease

        // Sort parts based on their index to ensure proper stacking order (from small to large)
        const sortedParts = zipAnimationParts.slice().sort((a, b) => a.userData.index - b.userData.index);

        // Apply movement logic to sorted parts
        // Apply movement logic to sorted parts
        sortedParts.forEach((part) => {            
            // Check if the part name includes 'efe4d4'
            if (part.name.includes('efe4d4')) {                               
                part.scale.z = 1 - slideAmount; // Gradually shrink to 0 as slideAmount goes from 0 to 1    
                // Ensure it shrinks from bottom to top
                if (!part.geometry.boundingBox) {
                    part.geometry.computeBoundingBox();
                }

                const height = part.geometry.boundingBox.max.z - part.geometry.boundingBox.min.z;
                const deltaZ = (height * (1 - part.scale.z)); // Adjust factor based on pivot

                // Adjust the position.z to keep the bottom fixed during scaling
                part.position.z = part.userData.initialZ + deltaZ;           

            } else {
                // Calculate the movement limit based on the current slideAmount
                const movementLimit = slideAmount * maxMovement;

                // Move the part along the Z-axis uniformly
                part.position.z = part.userData.initialZ + movementLimit;
            }
        });
    });
}

function animateZipSliding(parts, isOpening = true, onComplete) {
    if (!parts || parts.length === 0) {
        if (onComplete) onComplete();
        return;
    }


    const initialMaxMovement = 100;
    const maxMovement = initialMaxMovement;

    let startTime = performance.now();
    let duration = 3000; // Animation duration in milliseconds

    function animate(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);


        // Calculate slideAmount based on whether it's opening or closing
        let slideAmount = isOpening ? progress : 1 - progress; // From 0 to 1 or 1 to 0

        // Apply movement logic to the provided parts
        parts.forEach((part, index) => {
            if (!part.geometry.boundingBox) {
                part.geometry.computeBoundingBox(); // Ensure bounding box is up to date
            }

            if (part.name.includes('efe4d4')) {
                // Animate scale for specific parts
                part.scale.z = 1 - slideAmount;

                const height = part.geometry.boundingBox.max.z - part.geometry.boundingBox.min.z;
                const deltaZ = height * (1 - part.scale.z);
                part.position.z = part.userData.initialZ + deltaZ;

            } else {
                // Uniform movement for other parts
                const movementLimit = slideAmount * maxMovement;
                part.position.z = part.userData.initialZ + movementLimit;

            }
        });

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            console.log("Animation complete."); // Log when animation completes
            if (onComplete) onComplete();
        }
    }

    requestAnimationFrame(animate);
}
