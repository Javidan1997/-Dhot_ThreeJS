import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { GroundedSkybox } from 'three/examples/jsm/objects/GroundedSkybox.js'; 
import { LightProbeGenerator } from 'three/examples/jsm/lights/LightProbeGenerator.js';
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';


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
    renderer.setSize(container.clientWidth , container.clientHeight );
    renderer.setPixelRatio( window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.physicallyCorrectLights = true; // Enable physically correct lights
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputEncoding = THREE.sRGBEncoding; // Ensure correct color encoding
        // After creating the scene
    const exportRoot = new THREE.Group();
    scene.add(exportRoot);

    
    container.appendChild(renderer.domElement);
    let currentSkybox = null;
    let pool, rooftop


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

        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 0.7;

        scene.background = new THREE.Color(0xB9B9D2);
        scene.environment = pmremGenerator.fromScene(environment).texture;

        pmremGenerator.dispose();
    }

    function loadHDREnvironment() {
        // Clean up existing environment and background
        if (scene.environment) {
            scene.environment.dispose && scene.environment.dispose();
            scene.environment = null;
        }
        if (scene.background) {
            scene.background.dispose && scene.background.dispose();
            scene.background = null;
        }
        scene.remove(floor);
        if (pool) {
            scene.remove(pool);
        }
    
        const rgbeLoader = new RGBELoader();
        const gltfLoader = new GLTFLoader();
    
        rgbeLoader.load(
            'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/business_district_square_2k.hdr?v=1731750617',
            (hdrTexture) => {
                hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
                hdrTexture.encoding = THREE.sRGBEncoding;

                // Set the HDR texture as the scene's background and environment
                scene.background = hdrTexture;
                const pmremGenerator = new THREE.PMREMGenerator(renderer);
                pmremGenerator.compileEquirectangularShader();

                const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
                scene.environment = envMap;

                // Tone mapping and renderer setup for better exposure and realism
                renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure = 0.65; // Adjust for improved brightness and contrast

                // Dispose PMREMGenerator (keep hdrTexture as background)
                pmremGenerator.dispose();

                // Add spherical world realism (ensure a fully immersive HDR)
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(500, 100, 100), // Higher segments for smoother sphere
                    new THREE.MeshBasicMaterial({
                        map: hdrTexture,
                        side: THREE.BackSide, // Render inside the sphere
                    })
                );

                // Position the HDR sphere for alignment
                sphere.position.set(0, -50, 0); // Adjust Y-axis to position HDRI "floor"
                sphere.scale.set(1.1, 1, 1.1); // Slight stretch for better perspective alignment

                scene.add(sphere);

                console.log('HDRI environment set up with enhanced quality and positioning.');
    
                // Load the Rooftop.glb and position it below the model
                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/95de18392f07d9c9/Rooftop_genish.glb',
                    (gltf) => {
                        rooftop = gltf.scene;
                        rooftop.position.set(0, -1.89, 2); // Adjust position as needed
                        rooftop.rotation.y = Math.PI / 2 // Place rooftop slightly below the main model
                        rooftop.scale.set(1.5, 1.5, 1.5);
    
                        rooftop.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                                if (child.material) {
                                    child.material.needsUpdate = true;
                                }
                            }
                        });
    
                        scene.add(rooftop);
                        console.log('Rooftop model loaded and positioned below the main model.');
                    },
                    undefined,
                    (error) => {
                        console.error('Error loading Rooftop model:', error);
                    }
                );
            },
            undefined,
            (error) => {
                console.error('Error loading HDR texture:', error);
            }
        );
    }


    function loadPoolEnvironment() {
        // Clean up existing environment and background
        if (scene.environment) {
            scene.environment.dispose && scene.environment.dispose();
            scene.environment = null;
        }
        if (scene.background) {
            scene.background.dispose && scene.background.dispose();
            scene.background = null;
        }
        scene.remove(floor);
        if (rooftop) {
            scene.remove(rooftop);
        }
        const rgbeLoader = new RGBELoader();
        const gltfLoader = new GLTFLoader();
    
        rgbeLoader.load(
            'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/belfast_sunset_puresky_4k.hdr?v=1731774455',
            (hdrTexture) => {
                hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
                hdrTexture.encoding = THREE.sRGBEncoding;

                // Set the HDR texture as the scene's background and environment
                scene.background = hdrTexture;
                const pmremGenerator = new THREE.PMREMGenerator(renderer);
                pmremGenerator.compileEquirectangularShader();

                const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
                scene.environment = envMap;

                // Tone mapping and renderer setup for better exposure and realism
                renderer.toneMapping = THREE.ACESFilmicToneMapping;
                renderer.toneMappingExposure = 0.5; // Adjust for improved brightness and contrast

                // Dispose PMREMGenerator (keep hdrTexture as background)
                pmremGenerator.dispose();

                // Add spherical world realism (ensure a fully immersive HDR)
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(500, 100, 100), // Higher segments for smoother sphere
                    new THREE.MeshBasicMaterial({
                        map: hdrTexture,
                        side: THREE.BackSide, // Render inside the sphere
                    })
                );

                // Position the HDR sphere for alignment
                sphere.position.set(0, -50, 0); // Adjust Y-axis to position HDRI "floor"
                sphere.scale.set(1.1, 1, 1.1); // Slight stretch for better perspective alignment

                scene.add(sphere);

                console.log('HDRI environment set up with enhanced quality and positioning.');
    
                // Load the Rooftop.glb and position it below the model
                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/763858be099b9518/Pool.glb',
                    (gltf) => {
                        pool = gltf.scene;
                        pool.position.set(0, -1.92, 1.5); // Adjust position as needed
                        pool.rotation.y = Math.PI / 2 // Place pool slightly below the main model
                        pool.scale.set(0.9, 0.9, 0.9);
    
                        pool.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                                if (child.material) {
                                    child.material.needsUpdate = true;
                                }
                            }
                        });
    
                        scene.add(pool);
                        console.log('pool model loaded and positioned below the main model.');
                    },
                    undefined,
                    (error) => {
                        console.error('Error loading pool model:', error);
                    }
                );
            },
            undefined,
            (error) => {
                console.error('Error loading HDR texture:', error);
            }
        );
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
                loadRoomEnvironment();
            } else if (placement === 'Rooftop') {
                loadHDREnvironment();
            } else if (placement === 'Pool') {
                loadPoolEnvironment();
            }
            // Add additional conditions for other placements if needed
        });
    });

    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    // controls.dampingFactor = 0.15;
    controls.enableZoom = true;
    controls.minPolarAngle = 0.9; // Limit upward rotation
    controls.maxPolarAngle = 1.705; // Limit downward rotation
    controls.maxDistance = 15;
    controls.enablePan = true;


    const floorGeometry = new THREE.PlaneGeometry(400, 400);
    const floorMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xbed1d8), // Gray floor color
        roughness: 0.8, // High roughness for a less reflective surface
        metalness: 0, // No metalness for the floor
    });

    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to lie flat
    floor.position.y = -2.055; // Lower the floor slightly below the cube
    floor.receiveShadow = true; // Enable shadows to be cast on the floor
    scene.add(floor);
    const gltfLoader = new GLTFLoader();

    gltfLoader.load( "https://cdn.shopify.com/3d/models/44f73190fc222ce5/floor.glb" , (gltf) => {
        const ground = gltf.scene;
        ground.scale.set(1.2, 31, 1.1);
        ground.position.set(0, -2.25, -5.3);  // Adjust position as needed
        ground.rotation.x = -Math.PI / 2; // Rotate to lay flat
        ground.receiveShadow = true;
        ground.castShadow = true;
    
        ground.traverse((child) => {
            if (child.isMesh) {
                // Create a new material or modify the existing one
                child.material = new THREE.MeshPhysicalMaterial({
                    color: 0x98a7ac,  // Apply the specified color
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
    // const floorMaterial = new THREE.MeshPhysicalMaterial({
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


    const westLabel = createTextLabel('W', new THREE.Vector3(-4.2, -1.9, -2.5));  // West is along the negative X-axis
    const eastLabel = createTextLabel('E', new THREE.Vector3(4.2, -1.9, -2.5));   // East is along the positive X-axis
    const northLabel = createTextLabel('N', new THREE.Vector3(0, -1.9, -5.5)); // North is along the negative Z-axis
    const southLabel = createTextLabel('S', new THREE.Vector3(0, -1.9, 1.5));  // South is along the positive Z-axis

    // Add labels to the scene
    scene.add(westLabel);
    scene.add(eastLabel);
    scene.add(northLabel);
    scene.add(southLabel);




    // Improved Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // ambientLight.intensity = 0.7;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);

    directionalLight.position.set(5, 15, 7.5);
    directionalLight.intensity = 1.5
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    //Set up shadow properties for the light
    directionalLight.shadow.mapSize.width = 4096; // Increase shadow map resolution
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.bias = -0.0001; 
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;  // Adjust the shadow frustum size
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.intensity = 2
    camera.position.set(0, -0.4, 12);
    controls.update();


    
    // Existing sky setup
    const sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);

    // Sun vector
    const sun = new THREE.Vector3();

    // Initial Day Settings
    const daySettings = {
        turbidity: 18,
        rayleigh: 0.855,
        mieCoefficient: 0,
        mieDirectionalG: 1,
        inclination: 0.35, // Daytime sun position
        azimuth: 0.1,
        exposure: 0.6
    };

    // Sunset Settings
    const sunsetSettings = {
        turbidity: 10,
        rayleigh: 2,
        mieCoefficient: 0.1,
        mieDirectionalG: 0.8,
        inclination: 0.49, // Sun just above the horizon
        azimuth: 0.25,
        exposure: 0.5
    };

    // Sunrise Settings
    const sunriseSettings = {
        turbidity: 10,
        rayleigh: 2,
        mieCoefficient: 0.1,
        mieDirectionalG: 0.8,
        inclination: 0.23 ,
        azimuth: 0.25,
        exposure: 0.5
    };

    // Night Settings
    const nightSettings = {
        turbidity: 0,
        rayleigh: 0.106,
        mieCoefficient: 0,
        mieDirectionalG: 0,
        inclination: 0.5, // Nighttime sun position (below horizon)
        azimuth: 0.48,
        exposure: 0.5
    };

    // Current effect controller (starts with day settings)
    const effectController = { ...daySettings };

    function updateSun() {
        const uniforms = sky.material.uniforms;

        uniforms['turbidity'].value = effectController.turbidity;
        uniforms['rayleigh'].value = effectController.rayleigh;
        uniforms['mieCoefficient'].value = effectController.mieCoefficient;
        uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

        const theta = Math.PI * (effectController.inclination - 0.5);
        const phi = 2 * Math.PI * (effectController.azimuth - 0.5);

        sun.x = Math.cos(phi) * 0.5;
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = Math.sin(phi) * Math.cos(theta);

        uniforms['sunPosition'].value.copy(sun);

        renderer.toneMappingExposure = effectController.exposure;
    }

    updateSun();

    // Stars Setup
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];

    for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);

        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    stars.visible = false; // Hide stars initially (for daytime)
    scene.add(stars);

    // Interpolation function
    function interpolateSettings(startSettings, endSettings, t) {
        return {
            turbidity: THREE.MathUtils.lerp(startSettings.turbidity, endSettings.turbidity, t),
            rayleigh: THREE.MathUtils.lerp(startSettings.rayleigh, endSettings.rayleigh, t),
            mieCoefficient: THREE.MathUtils.lerp(startSettings.mieCoefficient, endSettings.mieCoefficient, t),
            mieDirectionalG: THREE.MathUtils.lerp(startSettings.mieDirectionalG, endSettings.mieDirectionalG, t),
            inclination: THREE.MathUtils.lerp(startSettings.inclination, endSettings.inclination, t),
            azimuth: THREE.MathUtils.lerp(startSettings.azimuth, endSettings.azimuth, t),
            exposure: THREE.MathUtils.lerp(startSettings.exposure, endSettings.exposure, t)
        };
    }

    // Apply settings function
    function applySettings(settings) {
        effectController.turbidity = settings.turbidity;
        effectController.rayleigh = settings.rayleigh;
        effectController.mieCoefficient = settings.mieCoefficient;
        effectController.mieDirectionalG = settings.mieDirectionalG;
        effectController.inclination = settings.inclination;
        effectController.azimuth = settings.azimuth;
        effectController.exposure = settings.exposure;

        updateSun();
    }

    // Function to animate the transition from day to night with sunset
    function animateDayToNight() {
        const duration = 5500; // 4.5 seconds
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1);

            let currentSettings;

            if (t < 0.5) {
                // Transition from daySettings to sunsetSettings
                const tt = t / 0.5; // Normalize t to [0,1] over first half
                currentSettings = interpolateSettings(daySettings, sunsetSettings, tt);
            } else {
                // Transition from sunsetSettings to nightSettings
                const tt = (t - 0.5) / 0.5; // Normalize t to [0,1] over second half
                currentSettings = interpolateSettings(sunsetSettings, nightSettings, tt);
            }

            applySettings(currentSettings);


            // Show stars halfway through the transition
            if (t > 0.5) {
                stars.visible = true;
            }

            if (t < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Function to animate the transition from night to day with sunrise
    function animateNightToDay() {
        const duration = 5500; // 4.5 seconds
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1);

            let currentSettings;

            if (t < 0.5) {
                // Transition from nightSettings to sunriseSettings
                const tt = t / 0.5; // Normalize t to [0,1] over first half
                currentSettings = interpolateSettings(nightSettings, sunriseSettings, tt);
            } else {
                // Transition from sunriseSettings to daySettings
                const tt = (t - 0.5) / 0.5; // Normalize t to [0,1] over second half
                currentSettings = interpolateSettings(sunriseSettings, daySettings, tt);
            }

            applySettings(currentSettings);


            // Hide stars halfway through the transition
            if (t > 0.5) {
                stars.visible = false;
            }

            if (t < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Add event listener to toggle day/night with sunset and sunrise
    const toggleDayNight = document.getElementById('dayNightToggle');
    toggleDayNight.addEventListener('click', () => {
        if (effectController.inclination === daySettings.inclination) {
            animateDayToNight();
            toggleDayNight.src = 'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/sun-icon.png?v=1730462397';
        } else {
            animateNightToDay();
            toggleDayNight.src = 'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/moon-icon.png?v=1730462397';
        }
    });

        // Define variables for inside/outside view
    let isInsideView = false;
    const outsideCameraPosition = new THREE.Vector3(0, -0.4, 12); // Adjust as needed
    const insideCameraPosition = new THREE.Vector3(0, -3, -2); // Adjust as needed

    // Set initial camera position
    camera.position.copy(outsideCameraPosition);
    controls.target.set(0, 0, 0);
    controls.update();

    // Function to toggle inside/outside view
    function toggleInsideOutsideView() {
        if (isInsideView) {
            // Switch to outside view
            camera.position.copy(outsideCameraPosition);
            controls.minDistance = 0.1;
            controls.maxDistance = 17;
            controls.enablePan = true;
            controls.enableRotate = true;
            controls.target.set(0, 0, 0);
            controls.update();

            isInsideView = false;
        } else {
            // Switch to inside view
            camera.position.copy(insideCameraPosition);
            controls.minDistance = 0.1;
            controls.maxDistance = 2;
            controls.enablePan = true;
            controls.enableRotate = true;
            controls.target.set(0, -0.5, -2); // Adjust as needed
            controls.update();

            isInsideView = true;
        }
    }

    // Add event listener to the inside/outside toggle button
    const insideOutsideToggle = document.getElementById('insideOutsideToggle');
    insideOutsideToggle.addEventListener('click', () => {
        toggleInsideOutsideView();

        // Optionally, change the icon based on the view
        if (isInsideView) {
            insideOutsideToggle.src = 'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/outside.png?v=1731355359'; // Update to outside icon
        } else {
            insideOutsideToggle.src = 'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/inside.png?v=1731355359'; // Update to inside icon
        }
    });


    // Add at the beginning of your script, after initializing the scene
    // Variables for lights and sun



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
        "10'x10'": "https://cdn.shopify.com/3d/models/1e8cf4a673da40c5/10_-_10_.glb",
        "10'x14'": "https://cdn.shopify.com/3d/models/d807d160c46f46e6/10_-_14_.glb",
        "14'x14'": "https://cdn.shopify.com/3d/models/f594b0d8f7677337/14_-_14_.glb",
        "14'x20'": "https://cdn.shopify.com/3d/models/b17f6ec3394ea421/14_-_20_.glb"
    };
    let rotatingParts = []; // Store parts to rotate

    let fanModel = null;
    const fanModelFiles = {
        "10'x10'": "https://cdn.shopify.com/3d/models/549f0c309cad22da/Zonix_Fan_10_.glb",
        "10'x14'": "https://cdn.shopify.com/3d/models/549f0c309cad22da/Zonix_Fan_10_.glb",
        "14'x14'": "https://cdn.shopify.com/3d/models/ab7edc05cc5b9b55/Zonix_Fan_14_.glb",
        "14'x20'": "https://cdn.shopify.com/3d/models/ab7edc05cc5b9b55/Zonix_Fan_14_.glb"
    };

    // Add this code after your updateTotalPrice function

    // Configuration prices (used in the calculator)
    const variantMaps = {
        sizes: {
            "10'x10'": {
                black: '49319928955166',
                white: '49319928824094' // Replace with actual white variant ID
            },
            "10'x14'": {
                black: '49319928987934',
                white: '49319928856862' // Replace with actual white variant ID
            },
            "14'x14'": {
                black: '49319929020702',
                white: '49319928889630' // Replace with actual white variant ID
            },
            "14'x20'": {
                black: '49319929053470',
                white: '49319928922398' // Replace with actual white variant ID
            }
        },
        zips: {
            "10'x10'": {
                front: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                },
                left: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                },
                right: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                }
            },
            "10'x14'": {
                front: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                left: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                },
                right: {
                    black: '49319944913182',
                    white: '49319945011486' // Replace with actual white variant ID
                }
            },
            "14'x14'": {
                front: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                left: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                right: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                }
            },
            "14'x20'": {
                front: {
                    black: '49319944978718',
                    white: '49319945077022' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319944978718',
                    white: '49319945077022' // Replace with actual white variant ID
                },
                left: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                },
                right: {
                    black: '49319944945950',
                    white: '49319945044254' // Replace with actual white variant ID
                }
            }
        },
        slides: {
            "10'x10'": {
                front: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                },
                left: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                },
                right: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                }
            },
            "10'x14'": {
                front: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                left: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                },
                right: {
                    black: '49319948255518',
                    white: '49319948353822' // Replace with actual white variant ID
                }
            },
            "14'x14'": {
                front: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                left: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                right: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                }
            },
            "14'x20'": {
                front: {
                    black: '49319948321054',
                    white: '49319948419358' // Replace with actual white variant ID
                },
                rear: {
                    black: '49319948321054',
                    white: '49319948419358' // Replace with actual white variant ID
                },
                left: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                },
                right: {
                    black: '49319948288286',
                    white: '49319948386590' // Replace with actual white variant ID
                }
            }
        },
        addons: {
            "10'x10'": {
                lighting: '49283749347614',
                fan: {
                    black: '49320023785758',
                    white: '49320023851294' // Replace with actual white variant ID
                },
                heater: '49283737616670' // No color variants for heater
            },
            "10'x14'": {
                lighting: '49283749347614',
                fan: {
                    black: '49320023785758',
                    white: '49320023851294' // Replace with actual white variant ID
                },
                heater: '49283737616670' // No color variants for heater
            },
            "14'x14'": {
                lighting: '49283749347614',
                fan: {
                    black: '49320023785758',
                    white: '49320023851294' // Replace with actual white variant ID
                },
                heater: '49283737616670' // No color variants for heater
            },
            "14'x20'": {
                lighting: '49283749347614',
                fan: {
                    black: '49320023785758',
                    white: '49320023851294' // Replace with actual white variant ID
                },
                heater: '49283737616670' // No color variants for heater
            }
        },
        configuration: '49284245750046'
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
        // Add non-breaking spaces for better spacing
        document.querySelector('.add-to-cart-btn').innerHTML = `Add To Cart&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${totalPrice}`;

        // document.querySelector('.price').textContent = `$${totalPrice}`;
        // Preserve the 'expanded' class on 'calculatorContent'
        let isCalculatorExpanded = calculatorContent && calculatorContent.classList.contains('expanded');
         
        calculatorContent = document.getElementById('calculator-content');

    
        // Update the calculator content dynamically to show only configuration prices
        if (calculatorContent) {
            if (calculatorContent) {
                calculatorContent.innerHTML = `
                    
                    <p><strong>Pergolade Tilt Pro:</strong></p>
                    <ul>                        
                        <li class="item-row">
                            <span class="item-name">${selectedSize}</span>
                            <span class="item-price">$${pergolaPrices_config[selectedSize]}</span>
                        </li> 
                    </ul>
                    <p><strong>Slider:</strong></p>
                    <ul>
                        ${Object.keys(selectedSlides).map(side => 
                            selectedSlides[side] ? `
                            <li class="item-row">
                                <span class="item-name">${side.charAt(0).toUpperCase() + side.slice(1)}</span>
                                <span class="item-price">$${slidePrices_config[selectedSize]}</span>
                            </li>` : '').join('')}
                    </ul>
                    <p><strong>Screen:</strong></p>
                    <ul>
                        ${Object.keys(selectedZips).map(side => 
                            selectedZips[side] ? `
                            <li class="item-row">
                                <span class="item-name">${side.charAt(0).toUpperCase() + side.slice(1)}</span>
                                <span class="item-price">$${zipPrices_config[selectedSize]}</span>
                            </li>` : '').join('')}
                    </ul>
                    <p><strong>Accessories:</strong></p>
                    <ul>
                        ${Object.keys(selectedAddons).map(addon => 
                            selectedAddons[addon] ? `
                            <li class="item-row">
                                <span class="item-name">${addon.charAt(0).toUpperCase() + addon.slice(1)}</span>
                                <span class="item-price">$${addonPrices_config[addon]}</span>
                            </li>` : '').join('')}
                    </ul>
                    <h4>
                        <span class="bold-text">Surface</span>
                    </h4>
                    <div class="button-grid-section">
                        <button class="grid-btn">Concrete Slab</button>
                        <button class="grid-btn">Composite wood deck</button>
                        <button class="grid-btn">Stone pavers</button>
                        <button class="grid-btn">Footings required</button>
                    </div>
                `;
            }
            
    
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
    
        // Disable the button to prevent multiple clicks
        const addToCartButton = this;
        addToCartButton.disabled = true; // Disable the button
        addToCartButton.classList.add('loading'); // Add loading class to show loader
    
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
        const baseVariantId = variantMaps.sizes[selectedSize][currentColor];
        if (!baseVariantId) {
            alert('Unable to add to cart: variant not found for the selected size.');
            addToCartButton.disabled = false; // Re-enable the button
            addToCartButton.classList.remove('loading'); // Remove loading class
            return;
        }
    
        // Collect properties for the base product
        const baseProperties = {
            'Size': selectedSize,
            'Total Price': `$${totalPrice}`,
            'Installation Price': `$${configPrice}`
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
                const variantId = variantMaps.slides[selectedSize][side][currentColor];
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
                const variantId = variantMaps.zips[selectedSize][side][currentColor];
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
                const variantId = addon === 'lighting' || addon === 'heater' 
                    ? variantMaps.addons[selectedSize][addon] // Use single variant ID for lighting and heater
                    : variantMaps.addons[selectedSize][addon][currentColor]; // Use color-based variant ID for fan
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
                    'Installation Price': `$${configPrice}`
                },
                selling_plan: null,
                custom_price: configPrice * 100 // Price in cents
            });
        }
    
        // Clear the cart first
        fetch('/cart/clear.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw err; });
            }
            return response.json();
        })
        .then(() => {
            // Capture screenshot and upload
            return captureAndUploadScreenshot();
        })
        .then(imageUrls => {
            if (imageUrls && imageUrls.length === 3) {
                // Add image URLs to the base product properties
                items[0].properties['Configuration Image 1'] = imageUrls[0];
                items[0].properties['Configuration Image 2'] = imageUrls[1];
                items[0].properties['Configuration Image 3'] = imageUrls[2];
            }
    
            // Prepare data to send to Shopify
            const data = { items: items };
    
            // Send AJAX request to Shopify cart
            return fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(err => { throw err; });
            }
            return response.json();
        })
        .then(item => {
            console.log('Items added to cart:', item);
            window.location.href = '/cart'; // Redirect to cart page
        })
        .catch(error => {
            console.error('Error adding items to cart:', error);
            alert('An error occurred while adding the items to your cart. Please try again.');
            addToCartButton.disabled = false; // Re-enable the button
            addToCartButton.classList.remove('loading'); // Remove loading class
        });
    });
    
    // Capture screenshot and upload


    function captureAndUploadScreenshot() {
        return new Promise(async (resolve, reject) => {
            try {
                // Store the original camera position and rotation
                const originalPosition = camera.position.clone();
                const originalRotation = camera.rotation.clone();

                // Store original renderer size and pixel ratio
                const originalSize = renderer.getSize(new THREE.Vector2());
                const originalPixelRatio = renderer.getPixelRatio();

                // Set renderer to a smaller size to speed up rendering and image capture
                const tempWidth = 800; // Adjust as needed
                const tempHeight = 600;
                renderer.setSize(tempWidth, tempHeight);
                renderer.setPixelRatio(1);

                const dataURLs = [];

                // Define the angles in degrees
                const angles = [0, 45, -45]; // Front, 45 degrees left, 45 degrees right

                // Define the radius from the model (move camera further away)
                const radius = 8; // Adjusted to move the camera further away

                // First, capture all images
                for (let i = 0; i < angles.length; i++) {
                    const angle = angles[i];

                    // Convert angle to radians
                    const rad = THREE.MathUtils.degToRad(angle);

                    // Set camera position around the model
                    camera.position.set(
                        radius * Math.sin(rad),
                        originalPosition.y, // Keep the same Y position
                        radius * Math.cos(rad)
                    );
                    camera.lookAt(0, 0, 0); // Look at the center of the scene

                    // Update the camera and render the scene
                    camera.updateProjectionMatrix();
                    renderer.render(scene, camera);

                    // Capture the canvas
                    const dataURL = renderer.domElement.toDataURL('image/png');

                    dataURLs.push(dataURL);
                }

                // Restore the original renderer size and pixel ratio
                renderer.setSize(originalSize.x, originalSize.y);
                renderer.setPixelRatio(originalPixelRatio);

                // Restore the original camera position and rotation
                camera.position.copy(originalPosition);
                camera.rotation.copy(originalRotation);
                camera.updateProjectionMatrix();

                // Upload all images in parallel
                const uploadPromises = dataURLs.map(dataURL => uploadToCloudinary(dataURL));
                const imageUrls = await Promise.all(uploadPromises);

                resolve(imageUrls);

            } catch (error) {
                console.error('Error capturing screenshot:', error);
                resolve(null); // Proceed without image
            }
        });
    }

    // Helper function to upload image to Cloudinary
    function uploadToCloudinary(dataURL) {
        return new Promise((resolve, reject) => {
            const cloudName = 'dztpb5yf1'; // Replace with your Cloudinary cloud name
            const unsignedUploadPreset = 'threejs'; // Replace with your unsigned upload preset

            // Remove the data URL prefix to get just the base64 encoded string
            const base64Data = dataURL.replace(/^data:image\/(png|jpeg);base64,/, '');

            // Prepare form data
            const formData = new FormData();
            formData.append('file', 'data:image/png;base64,' + base64Data);
            formData.append('upload_preset', unsignedUploadPreset);

            fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.secure_url) {
                    resolve(data.secure_url);
                } else {
                    console.error('Error uploading image to Cloudinary:', data);
                    resolve(null);
                }
            })
            .catch(error => {
                console.error('Error uploading image to Cloudinary:', error);
                resolve(null);
            });
        });
    }




    function updateButtonLabels(size) {
        const sideButtons = document.querySelectorAll('.size-discount-price');
        const zipButtons = document.querySelectorAll('.zip-discount-price');
    
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
            btn.innerHTML = `$${price}`;
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
            btn.innerHTML = `$${price}`;
        });
    }
    
    // Initialize the loading manager
    const loadingManager = new THREE.LoadingManager();

    // Show the loading screen when loading starts
    loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
        console.log(`Started loading: ${url}`);
        const loadingScreen = document.getElementById('loading-screen-MainModel');
        loadingScreen.style.display = 'flex';
    };

    // Hide the loading screen when all items are loaded
    loadingManager.onLoad = function () {
        console.log('All items loaded');
        const loadingScreen = document.getElementById('loading-screen-MainModel');
        loadingScreen.style.display = 'none';
    };  

    // Update progress
    loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
        const progressBar = document.getElementById('progress-bar-MainModel');
        const progress = (itemsLoaded / itemsTotal) * 100;
        console.log(`Loading file: ${url}.\nLoaded ${itemsLoaded} of ${itemsTotal} files.`);
        // If you have a progress bar, update its width
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    };

    // Handle errors
    loadingManager.onError = function (url) {
        console.error(`There was an error loading ${url}`);
    };


    function loadModel(size) {

        const loadingScreen = document.getElementById('loading-screen-MainModel');
        loadingScreen.style.display = 'flex';
        if (object) {
            scene.remove(object);
            exportRoot.remove(object);
            object = null;
        }
        
        if (fanModel) {
            scene.remove(fanModel);
            exportRoot.remove(fanModel);
            fanModel = null;
        }
       
        ledPart = null;
        ledOriginalMaterial = null;
        ledLight = null; // Reset the light reference
        removeAllZips()

        document.querySelectorAll('.side-container').forEach((btn) => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.zip-container').forEach((btn) => {
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
                exportRoot.add(object);
                // Traverse and find parts to rotate
                object.traverse((child) => {
                    if (child.isMesh) {
                        child.receiveShadow = true;
                        child.castShadow = true;
                        
                        // Identify parts for rotation based on name pattern
                        if (child.name && child.name.match("3DGeom-1") && !child.name.match("3DGeom-11") && !child.name.match("3DGeom-12") && size == "14'x20'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "14'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "10'x14'") {
                            rotatingParts.push(child);
                        } else if (child.name && child.name.match(/^3DGeom-1/) && size == "10'x10'") {
                            rotatingParts.push(child);
                        }
                        if (child.name && child.name.match("3DGeom-4")) {
                            rotatingParts.push(child);
                        }
                        if (child.name && child.name.match("3DGeom-3")) {
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
                // Hide the loading screen
                loadingScreen.style.display = 'none';

            },
            (xhr) => {
                // onProgress callback
                if (xhr.lengthComputable) {
                    const percentComplete = (xhr.loaded / xhr.total) * 100;
                    console.log(`Model ${percentComplete.toFixed(2)}% loaded`);
                    // If you have a progress bar, you can update it here
                    const progressBar = document.getElementById('progress-bar-MainModel');
                    if (progressBar) {
                        progressBar.style.width = `${percentComplete}%`;
                    }
                }
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
                // Hide the loading screen in case of error
                loadingScreen.style.display = 'none';
            }
        );
    }

    const zipControl = document.getElementById('zipControl');
    loadModel(selectedSize); // Load default model
    updateTotalPrice();

    initializeZipModule(scene, gltfLoader,exportRoot); // Initialize zip module
    setupZipControl(zipControl)

    // DOM Elements
    const modelIcon = document.getElementById('modelIcon');
    const sliderIcon = document.getElementById('sliderIcon');
    const zipIcon = document.getElementById('zipIcon');
    const ledIcon = document.getElementById('ledIcon');

    const rotationSliderPopup = document.getElementById('rotationSliderPopup');
    const glassSliderPopup = document.getElementById('glassSliderPopup');
    const zipSliderPopup = document.getElementById('zipSliderPopup');
    const ledIntensityPopup = document.getElementById('ledIntensityPopup');
    const ledRgbPopup = document.getElementById('ledRgbPopup');

    const closeRotationSlider = document.getElementById('closeRotationSlider');
    const closeGlassSlider = document.getElementById('closeGlassSlider');
    const closeZipSlider = document.getElementById('closeZipSlider');
    const closeLedIntensityPopup = document.getElementById('closeLedIntensityPopup');
    const closeLedRgbPopup = document.getElementById('closeLedRgbPopup');

    const warmLight = document.getElementById('warm-light');
    const rgbLight = document.getElementById('rgb-light');
    const selectedColorElement = document.getElementById('selected-color');
    const ledIntensityControl = document.getElementById('ledIntensityControl');
    const ledRgbColorPicker = document.getElementById('ledRgbColorPicker');

    // Variables
    let selectedLedOption = 'Warm White'; // Default LED option
    let ledLights = [];
    const maxLedIntensity = 7.5;

    // Function to hide all popups
    function hideAllPopups() {
        rotationSliderPopup.style.display = 'none';
        glassSliderPopup.style.display = 'none';
        zipSliderPopup.style.display = 'none';
        ledIntensityPopup.style.display = 'none';
        ledRgbPopup.style.display = 'none';
    }
    // Event listeners for other icons
    modelIcon.addEventListener('click', () => {
        hideAllPopups();
        rotationSliderPopup.style.display = 'grid';
    });

    sliderIcon.addEventListener('click', () => {
        hideAllPopups();
        glassSliderPopup.style.display = 'grid';
    });

    zipIcon.addEventListener('click', () => {
        hideAllPopups();
        zipSliderPopup.style.display = 'grid';
    });
    document.querySelector('.three-js-container').addEventListener('click', function (event) {
        // Check if the clicked element is NOT inside the icon-container
        if (!event.target.closest('.icon-container')) {
            hideAllPopups();
        }
    });

    // Event listeners for close buttons
    closeRotationSlider.addEventListener('click', () => rotationSliderPopup.style.display = 'none');
    closeGlassSlider.addEventListener('click', () => glassSliderPopup.style.display = 'none');
    closeZipSlider.addEventListener('click', () => zipSliderPopup.style.display = 'none');
    closeLedIntensityPopup.addEventListener('click', () => ledIntensityPopup.style.display = 'none');
    closeLedRgbPopup.addEventListener('click', () => ledRgbPopup.style.display = 'none');

    // LED icon click event - displays appropriate LED popup
    ledIcon.addEventListener('click', () => {
        if (selectedAddons['lighting']) {
            hideAllPopups();
            if (selectedLedOption === 'Warm White') {
                ledIntensityPopup.style.display = 'grid';
            } else if (selectedLedOption === 'RGB') {
                ledRgbPopup.style.display = 'grid';
            }
        } else {
            alert('Please add the LED lighting add-on first.');
        }
    });

    // Event listeners for LED options in the add-on container
    warmLight.addEventListener('click', () => {
        selectedLedOption = 'Warm White';
        updateSelectedColor('Warm White');
        warmLight.classList.add('selected');
        rgbLight.classList.remove('selected');
        if (selectedAddons['lighting']) {
            setLEDColor(0xffe6b8);
            updateLedIntensity(ledIntensityControl.value);
        }
    });

    rgbLight.addEventListener('click', () => {
        selectedLedOption = 'RGB';
        updateSelectedColor('RGB');
        rgbLight.classList.add('selected');
        warmLight.classList.remove('selected');
        if (selectedAddons['lighting']) {
            setLEDColor(parseInt(ledRgbColorPicker.value.slice(1), 16));
        }
    });

    // LED Intensity Control
    ledIntensityControl.addEventListener('input', (event) => {
        const intensityValue = event.target.value;
        const intensity = THREE.MathUtils.mapLinear(intensityValue, 0, 100, 0, maxLedIntensity);
        updateLedIntensity(intensity);
    });

    function updateLedIntensity(intensity) {
        if (ledLights.length > 0) {
            ledLights.forEach(light => {
                light.intensity = intensity;
            });
        }
    }

    // LED RGB Color Picker
    ledRgbColorPicker.addEventListener('input', () => {
        const selectedRGBColor = ledRgbColorPicker.value;
        const rgbHexColor = parseInt(selectedRGBColor.slice(1), 16); // Convert to hexadecimal
        setLEDColor(rgbHexColor);
    });

    // Function to update selected color display
    function updateSelectedColor(colorName) {
        selectedColorElement.textContent = colorName;
    }

    // Function to set LED color
    function setLEDColor(hexColor) {
        if (ledPart) {
            ledPart.material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(hexColor),
                emissive: new THREE.Color(hexColor),
                emissiveIntensity: maxLedIntensity,
                metalness: 0.0,
                roughness: 0.2,
                side: THREE.DoubleSide
            });

            // Remove any existing lights to prevent duplicates
            if (ledLights.length > 0) {
                ledLights.forEach(light => scene.remove(light));
                ledLights = [];
            }

            // Create and add new lights
            const ledIntensity = THREE.MathUtils.mapLinear(ledIntensityControl.value || 50, 0, 100, 0, maxLedIntensity);
            const ledDistance = 300;
            const position1 = ledPart.localToWorld(new THREE.Vector3(-2, 0, -2));
            const position2 = ledPart.localToWorld(new THREE.Vector3(2, 0, -2));

            ledLights.push(createPointLight(hexColor, ledIntensity, ledDistance, position1));
            ledLights.push(createPointLight(hexColor, ledIntensity, ledDistance, position2));
        } else {
            console.warn('LED part not found in the model.');
        }
    }

    // Utility to create point light
    function createPointLight(color, intensity, distance, position) {
        const light = new THREE.PointLight(color, intensity, distance);
        light.position.copy(position);
        light.castShadow = true;
        light.shadow.bias = -0.005;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        scene.add(light);
        return light;
    }

    // Function to add the lighting addon
    function addAddon(addonName) {
        if (addonName === 'lighting') {
            selectedAddons['lighting'] = true;
            if (selectedLedOption === 'Warm White') {
                setLEDColor(0xffe6b8);
                updateLedIntensity(ledIntensityControl.value || 50);
            } else if (selectedLedOption === 'RGB') {
                setLEDColor(parseInt(ledRgbColorPicker.value.slice(1), 16));
            }
        }
    }

    // Function to remove the lighting addon
    function removeAddon(addonName) {
        if (addonName === 'lighting') {
            selectedAddons['lighting'] = false;
            if (ledLights.length > 0) {
                ledLights.forEach(light => scene.remove(light));
                ledLights = [];
            }
            hideAllPopups();
        }
    }

    // Add event listeners to the addon control buttons
    document.querySelectorAll('.addon-control-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const button = event.currentTarget;
            const addon = button.getAttribute('data-addon');
            let currentState = button.getAttribute('data-state') || 'check';

            let nextState = currentState === 'check' ? 'add' : currentState === 'add' ? 'close' : 'check';
            button.setAttribute('data-state', nextState);
            button.classList.remove('addon-check', 'addon-add', 'addon-close');
            button.classList.add('addon-' + nextState);

            if (nextState === 'add') {
                addAddon(addon);
                updateTotalPrice();
            } else if (nextState === 'close') {
                removeAddon(addon);
                updateTotalPrice();
            }
        });
    });

    

    

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
            rotationSliderPopup.style.display = 'grid';
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
            if (child.isMesh && (child.name.includes(ledPart.name) || child.name.includes("3DGeom-4"))) {
                child.material != newMaterial;
            } else{
                child.material = newMaterial;
            }
        });
    }
    function applyMaterialChangeGlass(targetObject, selectedColor) {
        const newMaterial = new THREE.MeshPhysicalMaterial({
            color: selectedColor === 'black' ? 0x212121 : 0xffffff,
            roughness:0.7,
            metalness:1,
            side: THREE.DoubleSide 
            // flatShading: true,
        });
        targetObject.traverse((child) => {
            if (child.isMesh  && child.name.includes('c8c8c8')) {
                    child.material = newMaterial; // Apply new material
            }
            
        });
    }

    // Update the color button event listener
    document.querySelectorAll('.mainModel-color-selector .color-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if (object) {

                const selectedColor = event.target.classList.contains('black')
                ? 'black'
                : 'white';

                currentColor = selectedColor;
                setCurrentColor(currentColor);

                const colorTitleElement = document.querySelector('.color-title-main strong');
                if (colorTitleElement) {
                    colorTitleElement.textContent = selectedColor === 'black' ? 'Charcoal black' : 'Traffic white';
                }

                const colorTitleElementFan = document.querySelector('.color-title-fan strong');
                if (colorTitleElementFan) {
                    colorTitleElementFan.textContent = selectedColor === 'black' ? 'Charcoal black' : 'Traffic white';
                }

                // Define new material based on the selected color
                let newMaterial;
                if (selectedColor === 'black' || selectedColor === 'white') {
                    newMaterial = new THREE.MeshPhysicalMaterial({
                        color: selectedColor === 'black' ? 0x212121 : 0xffffff,
                        roughness:0.45,
                        metalness:1,
                        side: THREE.DoubleSide 
                        // flatShading: true,
                    });
                }
                // Traverse the main object and apply the material
                applyMaterialChange(object,newMaterial);

                if (frontGlass) applyMaterialChangeGlass(frontGlass,selectedColor);
                if (rearGlass) applyMaterialChangeGlass(rearGlass,selectedColor);
                if (leftGlass) applyMaterialChangeGlass(leftGlass,selectedColor);
                if (rightGlass) applyMaterialChangeGlass(rightGlass,selectedColor);

                if (frontZip) applyMaterialChangeZip(frontZip,selectedColor);
                if (rearZip) applyMaterialChangeZip(rearZip,selectedColor);
                if (leftZip) applyMaterialChangeZip(leftZip,selectedColor);
                if (rightZip) applyMaterialChangeZip(rightZip,selectedColor);
                applyMaterialChange(fanModel,newMaterial);

                updateTotalPrice()

                
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

                const colorTitleElementFan = document.querySelector('.color-title-fan strong');
                if (colorTitleElementFan) {
                    colorTitleElementFan.textContent = selectedColor === 'black' ? 'Charcoal black' : 'Traffic white';
                }


                // Define new material for the fan based on the selected color
                let fanMaterial = new THREE.MeshPhysicalMaterial({
                    color: selectedColor === 'black' ? 0x212121 : 0xffffff,
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
            const defaultMaterial = new THREE.MeshPhysicalMaterial({
                color: currentColor === 'black' ? 0x212121 : 0xffffff,
                roughness:0.45,
                metalness:1,
                side: THREE.DoubleSide 
            });

            const testMaterial = new THREE.MeshPhysicalMaterial({
                color:0xB2BEB5,
                roughness:0.8,
                metalness:1,
                side: THREE.DoubleSide 
            });


    
            // Apply default black material to all mesh children
            object.traverse((child) => {
                if (child.isMesh && !child.name.includes("3DGeom-4")) {
                    child.material = defaultMaterial; // Apply default black material
                } else {
                    child.material = testMaterial
                }
            });
        }
    }
    function setDefaultBlackMaterialGlass(object) {
        if (object) {
            const defaultMaterial = new THREE.MeshPhysicalMaterial({
                color: currentColor === 'black' ? 0x212121 : 0xffffff,
                roughness:0.7,
                metalness:1,
                side: THREE.DoubleSide 
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
    //         clickedPart.material = new THREE.MeshPhysicalMaterial({
    //             color: 0xffff00, // Yellow for click highlight
    //             emissive: 0xffff00,
    //             emissiveIntensity: 1.0,
    //             metalness: 0.6,
    //             roughness: 0.4,
    //         });

    //         // Update the display with the part name
    //         const partName = clickedPart.userData.name || 'Unnamed Part';
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
                exportRoot.add(newGlass);
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
            exportRoot.remove(glassModel);
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
                glass.position.set(-3, -2, -2.18);
                glass.rotation.y = -Math.PI / 2;
            }
            if (side === 'right') {
                glass.position.set(3, -2, -2.18);
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
                        'front':  "https://cdn.shopify.com/3d/models/0e9d9646a46a0da6/Sliding_Glass_6_.glb",
                        'rear':  "https://cdn.shopify.com/3d/models/0e9d9646a46a0da6/Sliding_Glass_6_.glb",
                        'left': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'right': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb"
                    };
                } else if (selectedSize === "14'x14'") {
                    modelMap = {
                        'front': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'rear': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'left': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'right': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb"
                    };
                } else if (selectedSize === "10'x14'") {
                    modelMap = {
                        'front': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'rear': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                        'left':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                        'right':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb"
                    };
                } else if (selectedSize === "10'x10'") {
                    modelMap = {
                        'front':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                        'rear':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                        'left':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                        'right':  "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb"
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
    document.querySelectorAll('.side-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            // Find the button within the container
            const btn = container.querySelector('.side-btn');
            if (!btn) return; // Ensure the button exists within the container
            glassSliderPopup.style.display = 'grid';
    
            const side = btn.getAttribute('data-side'); // Extract the side attribute
            container.classList.toggle('active'); // Toggle the active class on the container
    
            // Define modelMap based on selectedSize
            let modelMap;
            if (selectedSize === "14'x20'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/0e9d9646a46a0da6/Sliding_Glass_6_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/0e9d9646a46a0da6/Sliding_Glass_6_.glb",
                    'left': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'right': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb"
                };
            } else if (selectedSize === "14'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'left': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'right': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb"
                };
            } else if (selectedSize === "10'x14'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/a2a6e46efaf6094c/Sliding_Glass_4_.glb",
                    'left': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                    'right': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb"
                };
            } else if (selectedSize === "10'x10'") {
                modelMap = {
                    'front': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                    'rear': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                    'left': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb",
                    'right': "https://cdn.shopify.com/3d/models/23c54ac1a966edb4/Sliding_Glass_3_.glb"
                };
            }
    
            // If the model URL exists for the selected side, toggle the sliding glass
            if (modelMap && modelMap[side]) {
                toggleSlidingGlass(side, modelMap[side]); // Call toggleSlidingGlass function
                selectedSlides[side] = !selectedSlides[side]; // Toggle the selection state
                updateTotalPrice(); // Update the total price
            }
        });
    });
    

    document.querySelectorAll('.zip-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            // Find the zip button within the container
            const btn = container.querySelector('.zip-btn');
            if (!btn) return; // Ensure the button exists within the container
    
            const side = btn.getAttribute('data-zip'); // Extract the side attribute
            container.classList.toggle('active'); // Toggle active class on the container
            zipSliderPopup.style.display = 'grid';
    
            // Define modelMap based on selectedSize
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
                    'rear': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'left': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb",
                    'right': "https://cdn.shopify.com/3d/models/047978d510ad23b0/Zip_10_.glb"
                };
            }
    
            // If the model URL exists for the selected side, toggle the zip
            if (modelMap && modelMap[side]) {
                toggleZip(side, modelMap[side], selectedSize); // Call toggleZip function
                selectedZips[side] = !selectedZips[side]; // Toggle the selection state
                updateTotalPrice(); // Update the total price
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
                maxMovementX = 113;
                maxMovementY = -33;
                maxMovementY_1 = -68;
            }
        } else if (selectedSize === "14'x14'") {
            maxMovementX = 113;
            maxMovementY = -33;
            maxMovementY_1 = -68;
        } else if (selectedSize === "10'x14'") {
            if (side==='front' || side==='rear') {
                maxMovementX = 113;
                maxMovementY = -33;
                maxMovementY_1 = -68;
            } else if (side==='left' || side==='right') {
                maxMovementX = 68;
                maxMovementY = -33;
                maxMovementY_1 = 0; // Not set in original code
            }
        } else if (selectedSize === "10'x10'") {
            maxMovementX = 68;
            maxMovementY = -33;
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
    
    
    
        




    // Function to add or remove the fan model based on user action
    function addOrRemoveFan(addFan) {
        if (addFan) {
            const fanModelPath = fanModelFiles[selectedSize];
            if (fanModel) {
                scene.remove(fanModel);
                exportRoot.remove(fanModel);
            }

            gltfLoader.load(
                fanModelPath,
                (gltf) => {
                    fanModel = gltf.scene;
                    fanModel.scale.set(1, 1, 1);
                    fanModel.position.set(0, -2, 0); // Position the fan in the middle
                    scene.add(fanModel);
                    exportRoot.add(fanModel);
                    console.log('Fan added to the scene');
                    setDefaultBlackMaterial(fanModel); 

                },
                (xhr) => console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`),
                (error) => console.error('An error occurred while loading the fan model:', error)
            );

        } else {
            if (fanModel) {
                scene.remove(fanModel);
                exportRoot.remove(fanModel);
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
    function exportGLB() {
        return new Promise((resolve, reject) => {
            const exporter = new GLTFExporter();
            exporter.parse(
                exportRoot,
                (result) => {
                    if (result instanceof ArrayBuffer) {
                        const blob = new Blob([result], { type: 'model/gltf-binary' });
                        const glbUrl = URL.createObjectURL(blob);
                        resolve(glbUrl);
                    } else {
                        reject('Error exporting GLB');
                    }
                },
                (error) => {
                    console.error('GLTF export error:', error);
                    reject(error);
                },
                { binary: true }
            );
        });
    }

    // AR Button click handler
    document.getElementById('ar-button').addEventListener('click', async () => {
        try {
            // Export the model to a GLB URL
            const glbUrl = await exportGLB();
    
            const modelViewer = document.getElementById('ar-model-viewer');
            modelViewer.setAttribute('src', glbUrl);
    
            // Directly activate AR mode after setting the source
            modelViewer.activateAR();
    
            // Handle AR session events
            modelViewer.addEventListener('ar-status', (event) => {
                if (event.detail.status === 'failed') {
                    console.warn('AR failed to launch');
                    URL.revokeObjectURL(glbUrl);
                }
            });
    
            modelViewer.addEventListener('exit-ar', () => {
                URL.revokeObjectURL(glbUrl);
            });
    
        } catch (error) {
            console.error('Error initiating AR:', error);
        }
    });
    

        
    
    // Composer setup
    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.uniforms['resolution'].value.set((container.clientWidth), (container.clientHeight));
    composer.addPass(fxaaPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85);
    composer.addPass(bloomPass);

    // Animation loop
    renderer.setAnimationLoop(() => {
        controls.update();
        composer.render();
        renderer.render(scene, camera);

    });

    // Window resize handler
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        composer.setSize(container.clientWidth, container.clientHeight);
    });        
    

});
