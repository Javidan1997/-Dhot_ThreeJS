// zip.js
import * as THREE from 'three';


let currentColor = 'black';

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


let scene, gltfLoader;
let selectedSize; 
let zipButtonsInitialized = false;

export function removeAllZips() {
    if (frontZip) {
        scene.remove(frontZip);
        frontZip = null;
    }
    if (rearZip) {
        scene.remove(rearZip);
        rearZip = null;
    }
    if (leftZip) {
        scene.remove(leftZip);
        leftZip = null;
    }
    if (rightZip) {
        scene.remove(rightZip);
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

export function initializeZipModule(_scene, _gltfLoader) {
    scene = _scene;
    gltfLoader = _gltfLoader;
}
export function setSelectedSize(size) {
    selectedSize = size;
}

export function applyMaterialChangeZip(targetObject, selectedColor) {
    targetObject.traverse((child) => {
        if (child.isMesh) {
            if (selectedColor != 'default' && child.name.includes('7e7e7e')) {
                let newMaterial = new THREE.MeshStandardMaterial({
                    color: currentColor === 'black' ? 0x2B2B2B : 0xF1F0EA,
                    metalness: 0.9,
                    roughness: 0.5,
                });
                child.material = newMaterial; // Apply new material
            }
        }
    });
}

function setDefaultBlackMaterialZip(object) {
    if (object) {
        let defaultMaterial = new THREE.MeshStandardMaterial({
            color: currentColor === 'black' ? 0x2B2B2B : 0xF1F0EA,
            metalness: 0.9,
            roughness: 0.5,
        });

        // Apply default black material to all mesh children
        object.traverse((child) => {
            if (child.isMesh && child.name.includes('7e7e7e')) {
                child.material = defaultMaterial; // Apply default black material-
            }
        });
    }
}

export function updateZipParts(zipModel) {
        selectableParts = {}; // Clear previous selectable parts
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
            positionZip(newZip, side, selectedSize);
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
                child.userData.initialX = child.position.x;
                child.userData.initialY = child.position.y;
                if (child.name.includes('efe4d4') || child.name.includes('7e7e7e-zip-0')) {
                    zipAnimationParts.push(child);
                }
            });
            setDefaultBlackMaterialZip(newZip);

            zipFilePaths[side] = filePath;
            // Update zip model reference
            if (side === 'front') frontZip = newZip;
            if (side === 'rear') rearZip = newZip;
            if (side === 'left') leftZip = newZip;
            if (side === 'right') rightZip = newZip;

            updateZipParts(newZip);
        });
    } else {
        scene.remove(zipModel);
        if (side === 'front') frontZip = null;
        if (side === 'rear') rearZip = null;
        if (side === 'left') leftZip = null;
        if (side === 'right') rightZip = null;
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
            zip.position.set(3.2, -2, -2.18);
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
            zip.position.set(2.24, -2, -2.18);
            zip.rotation.y = Math.PI / 2;
        }
    } else if (selectedSize === "10'x14'") {
        if (side === 'front') zip.position.set(0, -2, 0.08);
        if (side === 'rear') {
            zip.position.set(0, -2, -3.20);
            zip.rotation.y = -Math.PI; 
        }
        if (side === 'left') {
            zip.position.set(-2.24, -2, -1.55);
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
            zip.position.set(-1.63, -2, -1.55);
            zip.rotation.y = -Math.PI / 2;
        }
        if (side === 'right') {
            zip.position.set(1.63, -2, -1.55);
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
                    'front': "https://cdn.shopify.com/3d/models/f797a4040efbc6f2/Zip_6.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/f797a4040efbc6f2/Zip_6.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb'
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
                    'front': "https://cdn.shopify.com/3d/models/f797a4040efbc6f2/Zip_6.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/f797a4040efbc6f2/Zip_6.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/650348451f1c427b/Zip_4.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb'
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'rear': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'left': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb',
                    'right': "https://cdn.shopify.com/3d/models/6538d71a5e0d48ea/Zip_3.glb" || 'Zip 3.glb'
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
