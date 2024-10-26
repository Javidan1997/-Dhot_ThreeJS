import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js'; 
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';



import {
    initializeZipModule,
    applyMaterialChangeZip,
    setCurrentColor,
    updateSelectedZips,
    setupZipButtons,
    removeAllZips,
    setupZipControl,
    frontZip,
    rearZip,
    leftZip,
    rightZip,
    setSelectedSize,
    toggleZip,
    selectedZips 
} from '../src/zip.js';

const params = {
    height: 15,   // Adjust as needed
    radius: 100,  // Adjust as needed
    enabled: true,
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('three-js-container');
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 2000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio( container.devicePixelRatio );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    
    container.appendChild(renderer.domElement);
    let currentSkybox = null;

    // Functions to load environments
    function loadRoomEnvironment() {
        if (currentSkybox) {
            scene.remove(currentSkybox);
            currentSkybox = null;
        }
        if (scene.environment) {
            scene.environment.dispose && scene.environment.dispose();
            scene.environment = null;
        }

        const environment = new RoomEnvironment();
        const pmremGenerator = new THREE.PMREMGenerator(renderer);

        scene.background = new THREE.Color(0xB9B9D2);
        scene.environment = pmremGenerator.fromScene(environment).texture;

        pmremGenerator.dispose();
    }

    function loadHDREnvironment() {
        // Clean up existing environment
        if (currentSkybox) {
            scene.remove(currentSkybox);
            currentSkybox = null;
        }
        if (scene.environment) {
            scene.environment.dispose && scene.environment.dispose();
            scene.environment = null;
        }
    
        const rgbeLoader = new RGBELoader();
        const lightProbe = new THREE.LightProbe();
        scene.add(lightProbe);
    
        rgbeLoader.load('https://drive.google.com/file/d/1xcHuNoh_eVx1Z0hK6-M3wtl6eqNQZsPh/view?usp=sharing', (hdrTexture) => {
            hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
            hdrTexture.encoding = THREE.LinearEncoding;
    
            // Set up GroundedSkybox with optimized parameters
            const skyboxRadius = params.radius * 2; // Increase the radius to make the environment feel larger
            const skybox = new GroundedSkybox(hdrTexture, params.height, skyboxRadius);
            skybox.position.y = params.height - 2;
    
            // No scaling of the skybox to avoid distortion
            scene.add(skybox);
            currentSkybox = skybox;
    
            // Tone mapping setup for better exposure
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.5; // Increase exposure for better lighting
    
            // Generate PMREM environment map
            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            pmremGenerator.compileEquirectangularShader();
    
            const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
            scene.environment = envMap;
    
            // Apply light probe for ambient lighting
            lightProbe.copy(THREE.LightProbeGenerator.fromCubeTexture(envMap));
    
            // Clean up textures to avoid memory leaks
            hdrTexture.dispose();
            pmremGenerator.dispose();
        });
    

    }
    

    // Call the function to set the initial environment
    loadRoomEnvironment();

    // Add event listeners to the placement buttons
    const placementButtons = document.querySelectorAll('.button-grid-section .grid-btn');

    placementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            placementButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the text content to determine which environment to load
            const placement = button.textContent.trim();

            if (placement === 'Over deck') {
                loadHDREnvironment();
            } else if (placement === 'Rooftop') {
                loadRoomEnvironment();
            }
            // Add additional conditions for other placements if needed
        });
    });

    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    // controls.dampingFactor = 0.15;
    controls.enableZoom = true;
    controls.minPolarAngle = 0.9; // Limit upward rotation
    controls.maxPolarAngle = 1.7; // Limit downward rotation
    controls.maxDistance = 17

    const floorGeometry = new THREE.PlaneGeometry(400, 400);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xb9b9d2), // Gray floor color
        roughness: 0.8, // High roughness for a less reflective surface
        metalness: 0, // No metalness for the floor
    });

    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to lie flat
    floor.position.y = -2.3; // Lower the floor slightly below the cube
    floor.receiveShadow = true; // Enable shadows to be cast on the floor
    scene.add(floor);
    const gltfLoader = new GLTFLoader();

    gltfLoader.load( 'floor.glb' , (gltf) => {
        const ground = gltf.scene;
        ground.scale.set(1.2, 31, 1.1);
        ground.position.set(0, -2.3, -5.3);  // Adjust position as needed
        ground.rotation.x = -Math.PI / 2; // Rotate to lay flat
        ground.receiveShadow = true;
        ground.castShadow = true;
    
        ground.traverse((child) => {
            if (child.isMesh) {
                // Create a new material or modify the existing one
                child.material = new THREE.MeshStandardMaterial({
                    color: 0xbe89c9,  // Apply the specified color
                    roughness: 0.3,   // Set roughness for a less reflective surface
                    metalness: 0,     // No metalness for a more matte look
                });
                child.receiveShadow = true;
                child.castShadow = true;
            }
        });
    
        scene.add(ground);
    }, undefined, (error) => {
        console.error('An error occurred while loading the ground model:', error);
    });
    


    // Load the textures
    // const textureLoader = new THREE.TextureLoader();

    // const diffuseTexture = textureLoader.load('wood_planks_2k/textures/wood_planks_diff_2k.jpg');
    // const normalTexture = textureLoader.load('wood_planks_2k/textures/wood_planks_nor_gl_2k.jpg');
    // const roughnessTexture = textureLoader.load('wood_planks_2k/textures/wood_planks_rough_2k.jpg');
    // const aoTexture = textureLoader.load('wood_planks_2k/textures/wood_planks_ao_2k.jpg');
    // const displacementTexture = textureLoader.load('wood_planks_2k/textures/wood_planks_disp_2k.jpg');

    // // Set texture wrapping and repeat for tiling the texture appropriately
    // diffuseTexture.wrapS = diffuseTexture.wrapT = THREE.RepeatWrapping;
    // normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
    // roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
    // aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;
    // displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;

    // // Adjust the repeat for proper scaling (this will depend on how much you want to tile the texture)
    // const repeatX = 2;  // Adjust these numbers based on the visual result you want
    // const repeatY = 2;
    // diffuseTexture.repeat.set(repeatX, repeatY);
    // normalTexture.repeat.set(repeatX, repeatY);
    // roughnessTexture.repeat.set(repeatX, repeatY);
    // aoTexture.repeat.set(repeatX, repeatY);
    // displacementTexture.repeat.set(repeatX, repeatY);

    // // Create the floor material using the loaded textures
    // const floorMaterial = new THREE.MeshStandardMaterial({
    //     map: diffuseTexture,
    //     normalMap: normalTexture,
    //     roughnessMap: roughnessTexture,
    //     aoMap: aoTexture,
    //     displacementMap: displacementTexture,
    //     displacementScale: 0.01,  // Adjust for appropriate displacement depth
    //     roughness: 0.7,  // Increase roughness for a more realistic wood look
    //     metalness: 0.2,  // No metalness since it's wood
    //     color: new THREE.Color(0xB58868),
    //     roughness: 0.8,
	// 	bumpScale: 1,
    // });

    // // Create the floor geometry (16 feet x 24 feet -> 4.88m x 7.32m)
    // const floorGeometry = new THREE.PlaneGeometry(8, 6);

    // // Create the floor mesh
    // const floor = new THREE.Mesh(floorGeometry, floorMaterial);

    // Position and rotate the floor to lay flat
    // floor.rotation.x = -Math.PI / 2; // Lay the floor flat
    // floor.position.y = -2; // Place it at ground level
    // floor.position.z = -2.5; // Place it at ground level
    // floor.receiveShadow = true; // Allow it to receive shadows
    // floor.castShadow = true    // Add the floor to the scene
    // scene.add(floor);
    function createTextLabel(text, position) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 256;
    
        // Set font properties
        context.font = '36px Arial';
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 128, 128);
    
        // Create a texture from the canvas
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
    
        // Create sprite material with the canvas texture
        const material = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(material);
    
        // Set the position of the label
        sprite.position.set(position.x, position.y, position.z);
        sprite.scale.set(2, 2, 1); // Adjust the scale as needed
    
        return sprite;
    }


    const westLabel = createTextLabel('W', new THREE.Vector3(-4, -1.9, -2.5));  // West is along the negative X-axis
    const eastLabel = createTextLabel('E', new THREE.Vector3(4, -1.9, -2.5));   // East is along the positive X-axis
    const northLabel = createTextLabel('N', new THREE.Vector3(0, -1.9, -5.5)); // North is along the negative Z-axis
    const southLabel = createTextLabel('S', new THREE.Vector3(0, -1.9, 0.5));  // South is along the positive Z-axis

    // Add labels to the scene
    scene.add(westLabel);
    scene.add(eastLabel);
    scene.add(northLabel);
    scene.add(southLabel);




    // Improved Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    ambientLight.intensity = 0.7;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);

    directionalLight.position.set(5, 15, 7.5);
    directionalLight.intensity = 0.8
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
    directionalLight.shadow.intensity = 3.5
    camera.position.set(0, -0.4, 12);
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

    let fanModel = null;
    const fanModelFiles = {
        "10'x10'": "Zonix Fan  (10').glb",
        "10'x14'": "Zonix Fan  (10').glb",
        "14'x14'":  "Zonix Fan  (14').glb",
        "14'x20'":  "Zonix Fan  (14').glb"
    };

    // Add this code after your updateTotalPrice function

    // Event listener for the Add to Cart button
    // Variant IDs mapping based on options
    // Variant IDs mapping based on options and sizes
    // Base Prices (example prices, modify accordingly)
    // Configuration prices (used in the calculator)
    const variantMaps = {
        sizes: {
            "10'x10'": '49275090338078',
            "10'x14'": '49282184937758',
            "14'x14'": '49282190868766',
            "14'x20'": '49282193883422'
        },
        slides: {
            "10'x10'": {
                front: '49283736699166',
                rear: '49283736699166',
                left: '49283736699166',
                right: '49283736699166'
            },
            "10'x14'": {
                front: '49283734733086',
                rear: '49283734733086',
                left: '49283736699166',
                right: '49283736699166'
            },
            "14'x14'": {
                front: '49283734733086',
                rear: '49283734733086',
                left: '49283734733086',
                right: '49283734733086'
            },
            "14'x20'": {
                front: '49283731816734',
                rear: '49283731816734',
                left: '49283734733086',
                right: '49283734733086'
            }
            
        },
        zips: {
            "10'x10'": {
                front: '49283742499102', // Replace with actual variant ID
                rear: '49283742499102',
                left: '49283742499102',
                right: '49283742499102'
            },
            "10'x14'": {
                front: '49283748921630',
                rear: '49283748921630',
                left: '49283742499102',
                right: '49283742499102'
            },
            "14'x14'": {
                front: '49283748921630',
                rear: '49283748921630',
                left: '49283748921630',
                right: '49283748921630'
            },
            "14'x20'": {
                front: '49283741974814',
                rear: '49283741974814',
                left: '49283748921630',
                right: '49283748921630'
            }
        },
        addons: {
            "10'x10'": {
                lighting: '49283749347614',
                fan: '49283739156766',
                heater: '49283737616670'
            },
            "10'x14'": {
                lighting: '49283749347614',
                fan: '49283739156766',
                heater: '49283737616670'
            },
            "14'x14'": {
                lighting: '49283749347614',
                fan: '49283741122846',
                heater: '49283737616670'
            },
            "14'x20'": {
                lighting: '49283749347614',
                fan: '49283741122846',
                heater: '49283737616670'
            }
        },
        configuration:49284245750046
    };

    const pergolaPrices_config = {
        "10'x10'": 440,
        "10'x14'": 500,
        "14'x14'": 650,
        "14'x20'": 700
    };

    const slidePrices_config = {
        "10'x10'": 150,
        "10'x14'": 200,
        "14'x14'": 200,
        "14'x20'": 300
    };

    const zipPrices_config = {
        "10'x10'": 100,
        "10'x14'": 150,
        "14'x14'": 200,
        "14'x20'": 200
    };

    // Accessory prices for configuration
    const addonPrices_config = {
        lighting: 250,
        fan: 50,
        heater: 50
    };

    // Actual product prices (used for total price and cart)
    const pergolaPrices = {
        "10'x10'": 4400,
        "10'x14'": 5000,
        "14'x14'": 6500,
        "14'x20'": 7000
    };

    const slidePrices = {
        "10'x10'": 1500,
        "10'x14'": 2000,
        "14'x14'": 2000,
        "14'x20'": 3000
    };

    const zipPrices = {
        "10'x10'": 1000,
        "10'x14'": 1500,
        "14'x14'": 2000,
        "14'x20'": 2000
    };

    // Accessory prices
    const addonPrices = {
        lighting: 2500,
        fan: 500,
        heater: 500
    };

    // Selected configuration (initialize with no selection)
    let selectedSlides = { front: false, rear: false, left: false, right: false };
    let selectedAddons = { lighting: false, fan: false, heater: false };
    let calculatorContent;
    let toggleButton;
    let isExpanded = false;
    let isConfigIncluded = false;



    // Function to calculate and display the configuration price (only for configuration)
    function calculateConfigurationPrice() {
        let configPrice = pergolaPrices_config[selectedSize];
    
        // Add slide config prices
        Object.keys(selectedSlides).forEach((side) => {
            if (selectedSlides[side]) {
                configPrice += slidePrices_config[selectedSize];
            }
        });
    
        // Add zip config prices
        Object.keys(selectedZips).forEach((side) => {
            if (selectedZips[side]) {
                configPrice += zipPrices_config[selectedSize];
            }
        });
    
        // Add selected add-ons config prices
        Object.keys(selectedAddons).forEach((addon) => {
            if (selectedAddons[addon]) {
                configPrice += addonPrices_config[addon];
            }
        });
    
        return configPrice;
    }
    const calculatorAddButton = document.getElementById('calculator-add-btn');
    toggleButton = document.getElementById('calculator-toggle-btn');

    calculatorAddButton.addEventListener('click', () => {
        // Toggle the data-state attribute
        const currentState = calculatorAddButton.getAttribute('data-state');
        if (currentState === 'add') {
            calculatorAddButton.setAttribute('data-state', 'check');
            isConfigIncluded = false;
        } else {
            calculatorAddButton.setAttribute('data-state', 'add');
            isConfigIncluded = true;
        }
        updateTotalPrice()
    });

    toggleButton.addEventListener('click', () => {
        isExpanded = !isExpanded;

        if (isExpanded) {
            calculatorContent.classList.add('expanded');
            toggleButton.textContent = 'Hide installation price details';
        } else {
            calculatorContent.classList.remove('expanded');
            toggleButton.textContent = 'Show installation price details';
        }
        updateTotalPrice()
    });
    
    // Function to calculate and display the total price (base product + configuration)
    function updateTotalPrice() {
        let basePrice = pergolaPrices[selectedSize];
    
        // Add slide prices to basePrice
        Object.keys(selectedSlides).forEach((side) => {
            if (selectedSlides[side]) {
                basePrice += slidePrices[selectedSize];
            }
        });
    
        // Add zip prices to basePrice
        Object.keys(selectedZips).forEach((side) => {
            if (selectedZips[side]) {
                basePrice += zipPrices[selectedSize];
            }
        });
    
        // Add addon prices to basePrice
        Object.keys(selectedAddons).forEach((addon) => {
            if (selectedAddons[addon]) {
                basePrice += addonPrices[addon];
            }
        });
        

        // Configuration price (for calculator display)
        const configPrice = calculateConfigurationPrice();
    
        // Total price is the basePrice (since basePrice already includes all components)
        let totalPrice = basePrice;
    
        // Update the calculator's displayed price in the header
        const calculatorPriceElement = document.getElementById('calculator-price');
        if (calculatorPriceElement) {
            calculatorPriceElement.textContent = `$${configPrice}*`;
        }

        
        if (isConfigIncluded) {
            totalPrice += configPrice;
        }
    
        // Update Add to Cart button to show total price
        document.querySelector('.add-to-cart-btn').textContent = `Add To Cart $${totalPrice}`;
    
        // Preserve the 'expanded' class on 'calculatorContent'
        let isCalculatorExpanded = calculatorContent && calculatorContent.classList.contains('expanded');
        
        calculatorContent = document.getElementById('calculator-content');

    
        // Update the calculator content dynamically to show only configuration prices
        if (calculatorContent) {
            calculatorContent.innerHTML = `
                <div class="header-icon">
                    <div>
                        <p><strong>Pergolade Tilt Pro</strong><br>${selectedSize} &nbsp;&nbsp;$${pergolaPrices_config[selectedSize]}</p>
                    </div>
                    <div>
                        <img src="calc.png" alt="icon">
                    </div>
                </div>
                <p><strong>Slider:</strong></p>
                <ul>
                    ${Object.keys(selectedSlides).map(side => 
                        selectedSlides[side] ? `<li>${side.charAt(0).toUpperCase() + side.slice(1)} &nbsp;&nbsp; $${slidePrices_config[selectedSize]}</li>` : '').join('')}
                </ul>
                <p><strong>Screen:</strong></p>
                <ul>
                    ${Object.keys(selectedZips).map(side => 
                        selectedZips[side] ? `<li>${side.charAt(0).toUpperCase() + side.slice(1)} &nbsp;&nbsp; $${zipPrices_config[selectedSize]}</li>` : '').join('')}
                </ul>
                <p><strong>Accessories:</strong></p>
                <ul>
                    ${Object.keys(selectedAddons).map(addon => 
                        selectedAddons[addon] ? `<li>${addon.charAt(0).toUpperCase() + addon.slice(1)} &nbsp;&nbsp; $${addonPrices_config[addon]}</li>` : '').join('')}
                </ul>
            `;
    
            // Restore the 'expanded' class if it was previously added
            if (isCalculatorExpanded) {
                calculatorContent.classList.add('expanded');
            } else {
                calculatorContent.classList.remove('expanded');
            }
        }
    }
    
    // Event listener for the Add to Cart button
    document.querySelector('.add-to-cart-btn').addEventListener('click', function(event) {
        event.preventDefault();

        // Base price (includes all selected components)
        let basePrice = pergolaPrices[selectedSize];

        // Add slide prices to basePrice
        Object.keys(selectedSlides).forEach((side) => {
            if (selectedSlides[side]) {
                basePrice += slidePrices[selectedSize];
            }
        });

        // Add zip prices to basePrice
        Object.keys(selectedZips).forEach((side) => {
            if (selectedZips[side]) {
                basePrice += zipPrices[selectedSize];
            }
        });

        // Add addon prices to basePrice
        Object.keys(selectedAddons).forEach((addon) => {
            if (selectedAddons[addon]) {
                basePrice += addonPrices[addon];
            }
        });

        // Configuration price (for reference)
        const configPrice = calculateConfigurationPrice();

        // Total price is the basePrice (since basePrice includes all)
        const totalPrice = basePrice;

        // Prepare items array for Shopify
        const items = [];

        // Base product
        const baseVariantId = variantMaps.sizes[selectedSize];
        if (!baseVariantId) {
            alert('Unable to add to cart: variant not found for the selected size.');
            return;
        }

        // Collect properties for the base product
        const baseProperties = {
            'Size': selectedSize,
            'Total Price': `$${totalPrice}`,
            'Configuration Price': `$${configPrice}`
        };

        // Add base product to items array
        items.push({
            id: baseVariantId,
            quantity: 1,
            properties: baseProperties
        });

        // Add configuration options (slides, zips, addons)
        Object.keys(selectedSlides).forEach(side => {
            if (selectedSlides[side]) {
                const variantId = variantMaps.slides[selectedSize][side];
                if (variantId) {
                    items.push({
                        id: variantId,
                        quantity: 1,
                        properties: { 'Side': side.charAt(0).toUpperCase() + side.slice(1) }
                    });
                }
            }
        });

        Object.keys(selectedZips).forEach(side => {
            if (selectedZips[side]) {
                const variantId = variantMaps.zips[selectedSize][side];
                if (variantId) {
                    items.push({
                        id: variantId,
                        quantity: 1,
                        properties: { 'Side': side.charAt(0).toUpperCase() + side.slice(1) }
                    });
                }
            }
        });

        Object.keys(selectedAddons).forEach(addon => {
            if (selectedAddons[addon]) {
                const variantId = variantMaps.addons[selectedSize][addon];
                if (variantId) {
                    items.push({
                        id: variantId,
                        quantity: 1,
                        properties: { 'Addon': addon.charAt(0).toUpperCase() + addon.slice(1) }
                    });
                }
            }
        });
        const configVariantId = variantMaps.configuration; // Configuration Price variant ID
        if (configVariantId) {
            items.push({
                id: configVariantId,
                quantity: 1,
                properties: {
                    'Custom Price': `$${configPrice}`
                },
                selling_plan: null,
                custom_price: configPrice * 100 // Price in cents
            });
        }

        // Capture screenshot and upload
        captureAndUploadScreenshot().then(imageUrl => {
            if (imageUrl) {
                // Add image URL to the base product properties
                items[0].properties['Configuration Image'] = imageUrl;
            }

            // Prepare data to send to Shopify
            const data = {
                items: items
            };

            // Send AJAX request to Shopify cart
            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            })
            .then(item => {
                console.log('Items added to cart:', item);
                window.location.href = '/cart';
            })
            .catch(error => {
                console.error('Error adding items to cart:', error);
                alert('An error occurred while adding the items to your cart. Please try again.');
            });
        }).catch(error => {
            console.error('Error capturing screenshot:', error);
            alert('An error occurred while capturing the configuration image. Please try again.');
        });
    });

    function captureAndUploadScreenshot() {
        return new Promise((resolve, reject) => {
            try {
                // Capture the canvas
                const canvas = renderer.domElement;
                canvas.toBlob(function(blob) {
                    // Prepare FormData
                    const formData = new FormData();
                    formData.append('file', blob, 'configuration.png');

                    // Upload the image to your server
                    fetch('/upload-image', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(err => { throw err; });
                        }
                        return response.json();
                    })
                    .then(data => {
                        // The server should return the image URL
                        const imageUrl = data.imageUrl;
                        resolve(imageUrl);
                    })
                    .catch(error => {
                        console.error('Error uploading image:', error);
                        resolve(null); // Proceed without image
                    });
                }, 'image/png');
            } catch (error) {
                console.error('Error capturing screenshot:', error);
                resolve(null); // Proceed without image
            }
        });
    }




    function updateButtonLabels(size) {
        const sideButtons = document.querySelectorAll('.side-btn');
        const zipButtons = document.querySelectorAll('.zip-btn');
    
        // Define pricing based on size for sliders and zips
        const sliderPrices = {
            "20'": 3000,
            "14'": 2000,
            "10'": 1500
        };
        const zipPrices = {
            "20'": 2000,
            "14'": 1500,
            "10'": 1000
        };
    
        // Update the side buttons based on the selected size
        sideButtons.forEach((btn) => {
            const side = btn.getAttribute('data-side');
            let dimension = '';
            let price = 0;
    
            if (side === 'front' || side === 'rear') {
                dimension = size.split('x')[1]; // Get the second part (e.g., 14 or 20)
            } else if (side === 'left' || side === 'right') {
                dimension = size.split('x')[0]; // Get the first part (e.g., 10 or 14)
            }
    
            // Get the price for the corresponding dimension
            price = sliderPrices[dimension] || 0;
    
            // Update button text to include dimension and price
            btn.innerHTML = `<span>${dimension}' ${side.charAt(0).toUpperCase() + side.slice(1)}</span> <span class="price">$${price}</span>`;
        });
    
        // Update the zip buttons based on the selected size
        zipButtons.forEach((btn) => {
            const zip = btn.getAttribute('data-zip');
            let dimension = '';
            let price = 0;
    
            if (zip === 'front' || zip === 'rear') {
                dimension = size.split('x')[1]; // Get the second part (e.g., 14 or 20)
            } else if (zip === 'left' || zip === 'right') {
                dimension = size.split('x')[0]; // Get the first part (e.g., 10 or 14)
            }
    
            // Get the price for the corresponding dimension
            price = zipPrices[dimension] || 0;
    
            // Update button text to include dimension and price
            btn.innerHTML = `<span>${dimension}' ${zip.charAt(0).toUpperCase() + zip.slice(1)}</span> <span class="price">$${price}</span>`;
        });
    }
    
    

    function loadModel(size) {
        if (object) {
            scene.remove(object);
            object = null;
        }
        
        if (fanModel) {
            scene.remove(fanModel);
            fanModel = null;
        }
       
        ledPart = null;
        ledOriginalMaterial = null;
        ledLight = null; // Reset the light reference
        removeAllZips()

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
                        if (child.name && child.name.match(/^3DGeom-1/) && size == "14'x20'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "14'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-3/) && size == "10'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "10'x10'") {
                            rotatingParts.push(child);
                        }
                        if (child.name && child.name.match(/^3DGeom-90/) && size == "14'x20'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-64/) && size == "14'x14'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-46/) && size == "10'x14'") {
                            ledPart=child;
                        } else if (child.name && child.name.match(/^3DGeom-32/) && size == "10'x10'") {
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
    updateTotalPrice();

    initializeZipModule(scene, gltfLoader); // Initialize zip module
    setupZipControl(zipControl)
    

    

    const rotationControl = document.getElementById('rotationControl');

    // Listen for changes in the slider's value
    rotationControl.addEventListener('input', (event) => {
        const rotationValue = event.target.value;

        // Convert the slider value from degrees to radians and apply it to all rotating parts
        const angle = THREE.MathUtils.degToRad(rotationValue); // Convert degrees to radians
        rotatingParts.forEach((part) => {
            part.rotation.z = angle; // Rotate around the Z-axis based on the slider value
        });
    });
    // Listen for size button clicks
    document.querySelectorAll('.size-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            // Remove active class from all containers
            document.querySelectorAll('.size-container').forEach(button => button.classList.remove('active'));
            container.classList.add('active');
    
            const btn = container.querySelector('.size-btn');
            selectedSize = btn.textContent.trim();
            setSelectedSize(selectedSize);
            loadModel(selectedSize);
            updateTotalPrice();
            setupZipControl(zipControl, selectedSize); // Set up zip slider control
            updateButtonLabels(selectedSize);
        });
    });
    function applyMaterialChange(targetObject, newMaterial) {
        targetObject.traverse((child) => {
            if (child.isMesh) {
                child.material = newMaterial;
            }
        });
    }
    function applyMaterialChangeGlass(targetObject, selectedColor) {
        const newMaterial = new THREE.MeshStandardMaterial({
            color: selectedColor === 'black' ? 0x2B2B2B : 0xffffff,
            roughness:0.7,
            metalness:1
            // flatShading: true,
        });
        targetObject.traverse((child) => {
            if (child.isMesh  && child.name.includes('c8c8c8')) {
                    child.material = newMaterial; // Apply new material
            }
            
        });
    }

    // Update the color button event listener
    document.querySelectorAll('.main-color-selector .color-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (object) {

                const selectedColor = event.target.classList.contains('black')
                ? 'black'
                : 'white';

                currentColor = selectedColor;
                setCurrentColor(currentColor);

                // Define new material based on the selected color
                let newMaterial;
                if (selectedColor === 'black' || selectedColor === 'white') {
                    newMaterial = new THREE.MeshStandardMaterial({
                        color: selectedColor === 'black' ? 0x2B2B2B : 0xffffff,
                        roughness:0.45,
                        metalness:1
                        // flatShading: true,
                    });
                }
                // Traverse the main object and apply the material
                applyMaterialChange(object,newMaterial);
                applyMaterialChange(fanModel,newMaterial);

                if (frontGlass) applyMaterialChangeGlass(frontGlass,selectedColor);
                if (rearGlass) applyMaterialChangeGlass(rearGlass,selectedColor);
                if (leftGlass) applyMaterialChangeGlass(leftGlass,selectedColor);
                if (rightGlass) applyMaterialChangeGlass(rightGlass,selectedColor);

                if (frontZip) applyMaterialChangeZip(frontZip,selectedColor);
                if (rearZip) applyMaterialChangeZip(rearZip,selectedColor);
                if (leftZip) applyMaterialChangeZip(leftZip,selectedColor);
                if (rightZip) applyMaterialChangeZip(rightZip,selectedColor);
                
            }
        });
    });

    // Event listener for fan color change
    document.querySelectorAll('.fan-color-selector .color-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (fanModel) {

                const selectedColor = event.target.classList.contains('black')
                ? 'black'
                : 'white';

                // Define new material for the fan based on the selected color
                let fanMaterial = new THREE.MeshStandardMaterial({
                    color: selectedColor === 'black' ? 0x2B2B2B : 0xffffff,
                    roughness: 0.4,
                    metalness: 1
                });

                // Apply the material change to the fan model
                function applyFanMaterialChange(targetObject) {
                    targetObject.traverse((child) => {
                        if (child.isMesh) {
                            child.material = fanMaterial;
                        }
                    });
                }

                applyFanMaterialChange(fanModel);
            }
        });
    });
    function setDefaultBlackMaterial(object) {
        if (object) {
            const defaultMaterial = new THREE.MeshStandardMaterial({
                color: currentColor === 'black' ? 0x2B2B2B : 0xffffff,
                roughness:0.45,
                metalness:1
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
            const defaultMaterial = new THREE.MeshStandardMaterial({
                color: currentColor === 'black' ? 0x2B2B2B : 0xffffff,
                roughness:0.7,
                metalness:1
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
    // function onMouseClick(event) {
    //     // Correct mouse coordinates relative to the container size
    //     const rect = container.getBoundingClientRect(); // Get canvas boundaries
    //     mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    //     mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    //     // Perform raycasting
    //     raycaster.setFromCamera(mouse, camera);

    //     // Check for intersections with selectable parts (object children)
    //     const intersects = raycaster.intersectObjects(Object.values(selectableParts), true); // Recursive check

    //     // Reset the previously selected part
    //     if (selectedPart) {
    //         selectedPart.material.copy(originalMaterials[selectedPart.uuid]); // Correct material restoration
    //         selectedPart = null; // Clear the selected part
    //     }

    //     if (intersects.length > 0) {
    //         const clickedPart = intersects[0].object; // Get the first intersected object
    //         container.style.cursor = 'pointer'

    //         // Store the original material if it's not already stored
    //         if (!originalMaterials[clickedPart.uuid]) {
    //             originalMaterials[clickedPart.uuid] = clickedPart.material.clone();
    //         }

    //         // Apply the highlight material (yellow)
    //         clickedPart.material = new THREE.MeshStandardMaterial({
    //             color: 0xffff00, // Yellow for click highlight
    //             emissive: 0xffff00,
    //             emissiveIntensity: 1.0,
    //             metalness: 0.6,
    //             roughness: 0.4,
    //         });

    //         // Update the display with the part name
    //         const partName = clickedPart.name || 'Unnamed Part';
    //         const nameDisplayBox = document.getElementById('name-display'); // Your HTML display element
    //         nameDisplayBox.textContent = `Selected: ${partName}`;

    //         // Set the currently selected part
    //         selectedPart = clickedPart;
    //     } else {
    //         // Clear the name display box if no part is clicked
    //         const nameDisplayBox = document.getElementById('name-display');
    //         nameDisplayBox.textContent = '';
    //     }
    // }

    // // Add event listener for clicks on the canvas
    // container.addEventListener('click', onMouseClick);

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
                setDefaultBlackMaterialGlass(newGlass);
                updateSliderParts(newGlass);
                animateGlassSliding(side);

              

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
            if (side === 'front') glass.position.set(0, -2, -0.03);
            if (side === 'rear') {
                glass.position.set(0, -2, -4.31) ;
                glass.rotation.y = -Math.PI;
            }
            if (side === 'left') {
                glass.position.set(-3.08, -2, -2.18);
                glass.rotation.y = -Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(3.08, -2, -2.18);
                glass.rotation.y = Math.PI / 2;
            }
        } else if (selectedSize === "14'x14'") {
            if (side === 'front') glass.position.set(0, -2, -0.03);
            if (side === 'rear'){
                glass.position.set(0, -2, -4.31);
                glass.rotation.y = -Math.PI;
            }
            if (side === 'left') {
                glass.position.set(-2.13, -2, -2.18);
                glass.rotation.y = -Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(2.13, -2, -2.18);
                glass.rotation.y = Math.PI / 2;
            }
        } else if (selectedSize === "10'x14'") {
            if (side === 'front') glass.position.set(0, -2, -0.03);
            if (side === 'rear') {
                glass.position.set(0, -2, -3.09);
                glass.rotation.y = -Math.PI; 
            }
            if (side === 'left') {
                glass.position.set(-2.13, -2, -1.55);
                glass.rotation.y = -Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(2.13, -2, -1.55);
                glass.rotation.y = Math.PI / 2;
            }
        } else if (selectedSize === "10'x10'") {
            if (side === 'front') glass.position.set(0, -2, -0.03);
            if (side === 'rear') {
                glass.position.set(0, -2, -3.09);
                glass.rotation.y = -Math.PI; 
            }
            if (side === 'left') {
                glass.position.set(-1.52, -2, -1.55);
                glass.rotation.y = -Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(1.52, -2, -1.55);
                glass.rotation.y = Math.PI / 2;
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
                        'front':  'Sliding Glass (6).glb',
                        'rear':  'Sliding Glass (6).glb',
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
                        'left':  'Sliding Glass (3).glb',
                        'right':  'Sliding Glass (3).glb'
                    };
                } else if (selectedSize === "10'x10'") {
                    modelMap = {
                        'front':  'Sliding Glass (3).glb',
                        'rear':  'Sliding Glass (3).glb',
                        'left':  'Sliding Glass (3).glb',
                        'right':  'Sliding Glass (3).glb'
                    };
                }
                

                if (modelMap[side]) {
                    toggleSlidingGlass(side, modelMap[side]);
                    updateTotalPrice();

                }
            }
        });
    }

    // Add event listeners to the add-on buttons for each side
    document.querySelectorAll('.side-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const side = btn.getAttribute('data-side');
            btn.classList.toggle('active');
            let modelMap;

            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front':  'Sliding Glass (6).glb',
                    'rear':  'Sliding Glass (6).glb',
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
                    'left':  'Sliding Glass (3).glb',
                    'right':  'Sliding Glass (3).glb'
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front':  'Sliding Glass (3).glb',
                    'rear':  'Sliding Glass (3).glb',
                    'left':  'Sliding Glass (3).glb',
                    'right':  'Sliding Glass (3).glb'
                };
            }

            if (modelMap[side]) {
                toggleSlidingGlass(side, modelMap[side]);
                updateTotalPrice();

            }
        });
    });

    document.querySelectorAll('.zip-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const side = btn.getAttribute('data-zip');
            btn.classList.toggle('active');
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
                toggleZip(side, modelMap[side], selectedSize);
                selectedZips[side] = !selectedZips[side];
                updateTotalPrice();
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
                selectedAddons[addon] = nextState === 'add';
                updateTotalPrice();
            } else if (nextState === 'close') {
                console.log('Removing', addon);
                removeAddon(addon);
                selectedAddons[addon] = nextState === 'add';
                updateTotalPrice();
            }
        });
    });

    // Function to add or remove the fan model based on user action
    function addOrRemoveFan(addFan) {
        if (addFan) {
            const fanModelPath = fanModelFiles[selectedSize];
            if (fanModel) {
                scene.remove(fanModel);
            }

            gltfLoader.load(
                fanModelPath,
                (gltf) => {
                    fanModel = gltf.scene;
                    fanModel.scale.set(1, 1, 1);
                    fanModel.position.set(0, -2, 0); // Position the fan in the middle
                    scene.add(fanModel);
                    console.log('Fan added to the scene');
                    setDefaultBlackMaterial(fanModel); 

                },
                (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
                (error) => console.error('An error occurred while loading the fan model:', error)
            );

        } else {
            if (fanModel) {
                scene.remove(fanModel);
                fanModel = null;
                console.log('Fan removed from the scene');
            }
        }
    }

    // Add logic to add or remove fan when the "addon-control-btn" is clicked
    document.querySelectorAll('.addon-control-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const button = event.currentTarget;
            const addon = button.getAttribute('data-addon');

            if (addon === 'fan') {
                // Check the next state to determine if we should add or remove the fan
                let nextState = button.getAttribute('data-state');
                if (nextState === 'add') {
                    addOrRemoveFan(true); // Add fan
                } else if (nextState === 'close') {
                    addOrRemoveFan(false); // Remove fan
                }
            }
        });
    });

    
            

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    renderer.setAnimationLoop(() => {
        controls.update();
        renderer.render(scene, camera);
    });

    
    renderer.xr.addEventListener('sessionstart', () => {
        controls.enabled = false; // Disable OrbitControls in AR
    });
    
    renderer.xr.addEventListener('sessionend', () => {
        controls.enabled = true;  // Re-enable OrbitControls when exiting AR
    });

});
