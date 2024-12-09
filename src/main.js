import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  RoomEnvironment,
} from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import {
  EffectComposer,
} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {
  UnrealBloomPass,
} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

import {
  applyMaterialChangeZip,
  frontZip,
  initializeZipModule,
  leftZip,
  rearZip,
  removeAllZips,
  rightZip,
  selectedZips,
  setCurrentColor,
  setSelectedSize,
  setupZipControl,
  toggleZip,
  updateSelectedZips,
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
    let pool, rooftop, ground;


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
        renderer.toneMappingExposure = 1;

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
        if (sunbed) {
            scene.remove(sunbed);
        }

        if (ground) {
            scene.remove(ground);
        }

        if (patio) {
            scene.remove(patio);
        }
        if (poolwall) {
            scene.remove(poolwall);
        }
    
        const rgbeLoader = new RGBELoader();
        const gltfLoader = new GLTFLoader();
    
        rgbeLoader.load(
            'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/autumn_field_puresky_4k.hdr?v=1732880715',
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
                renderer.toneMappingExposure = 1; // Adjust for improved brightness and contrast

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
                sphere.scale.set(0.5, 0.5, 0.5); // Slight stretch for better perspective alignment
                sphere.rotation.y = Math.PI;

                scene.add(sphere);

                console.log('HDRI environment set up with enhanced quality and positioning.');
    
                // Load the Rooftop.glb and position it below the model
                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/366bf1d7bdd5b480/Rooftop_Model.glb',
                    (gltf) => {
                        rooftop = gltf.scene;
                        rooftop.position.set(0, -2, 2); // Adjust position as needed
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
    let sunbed,patio;

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
        if (attachwall) {
            scene.remove(attachwall);
        }

        if (poolwall) {
            scene.remove(poolwall);
        }
        if (sunbed) {
            scene.remove(sunbed);
        }

        if (ground) {
            scene.remove(ground);
        }

        if (patio) {
            scene.remove(patio);
        }
        const rgbeLoader = new RGBELoader();
        const gltfLoader = new GLTFLoader();
    
        rgbeLoader.load(
            'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/autumn_field_puresky_4k.hdr?v=1732880715',
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
                renderer.toneMappingExposure = 1; // Adjust for improved brightness and contrast

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
                sphere.scale.set(0.5, 0.5, 0.5); // Slight stretch for better perspective alignment
                sphere.rotation.y = Math.PI;

                scene.add(sphere);

                console.log('HDRI environment set up with enhanced quality and positioning.');
                // const frontLight = new THREE.DirectionalLight(0xffffff, 1.2); // Bright white light
                // frontLight.position.set(0, 5, 10); // Positioned in front of the model
                // frontLight.target.position.set(0, 0, 0); // Pointing towards the model's center
                // frontLight.castShadow = true; // Enable shadows

                // // Configure shadow properties
                // frontLight.shadow.mapSize.width = 1024; // High-resolution shadow
                // frontLight.shadow.mapSize.height = 1024;
                // frontLight.shadow.camera.near = 1;
                // frontLight.shadow.camera.far = 50;

                // scene.add(frontLight);
                // scene.add(frontLight.target); 
    
                // Load the Rooftop.glb and position it below the model
                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/8a06f7301696f147/Pool_new.glb',
                    (gltf) => {
                        pool = gltf.scene;
                        pool.position.set(0, -2, 1.5); // Adjust position as needed
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

                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/393e38c3981870a5/Sunbed.glb',
                    (gltf) => {
                        sunbed = gltf.scene;
                        sunbed.position.set(0, -2, 0.5); // Adjust position as needed
                        sunbed.rotation.y = Math.PI / 2 // Place sunbed slightly below the main model
                        sunbed.scale.set(1,1,1);
    
                        sunbed.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                                if (child.material) {
                                    child.material.needsUpdate = true;
                                }
                            }
                        });
    
                        scene.add(sunbed);
                        console.log('sunbed model loaded and positioned below the main model.');
                    },
                    undefined,
                    (error) => {
                        console.error('Error loading sunbed model:', error);
                    }
                );
            },
            undefined,
            (error) => {
                console.error('Error loading HDR texture:', error);
            }
        );
    }
    
    
    
    function loadPatioEnvironment() {
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
        if (attachwall) {
            scene.remove(attachwall);
        }

        if (poolwall) {
            scene.remove(poolwall);
        }
        if (sunbed) {
            scene.remove(sunbed);
        }

        if (ground) {
            scene.remove(ground);
        }

        if (pool) {
            scene.remove(pool);
        }
        const rgbeLoader = new RGBELoader();
        const gltfLoader = new GLTFLoader();
    
        rgbeLoader.load(
            'https://cdn.shopify.com/s/files/1/0733/1410/7678/files/autumn_field_puresky_4k.hdr?v=1732880715',
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
                renderer.toneMappingExposure = 1; // Adjust for improved brightness and contrast

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
                sphere.scale.set(0.5, 0.5, 0.5); // Slight stretch for better perspective alignment
                sphere.rotation.y = Math.PI;

                scene.add(sphere);

                console.log('HDRI environment set up with enhanced quality and positioning.');
    
                

                gltfLoader.load(
                    'https://cdn.shopify.com/3d/models/88272aff2371a381/Patio_New_1_.glb',
                    (gltf) => {
                        patio = gltf.scene;
                        patio.position.set(0, -2, -1.03); // Adjust position as needed
                        patio.rotation.y = (3 * Math.PI) / 2 // Place patio slightly below the main model
                        patio.scale.set(0.85,0.85,0.85);
    
                        patio.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                
                                if (child.material) {
                                    // Ensure the material updates for proper rendering
                                    child.material.needsUpdate = true;
                        
                                    // Set the material to render both sides (fixes issues with thin geometry)
                                    child.material.side = THREE.DoubleSide;
                        
                                    // Ensure textures have the correct encoding for proper color rendering
                                    if (child.material.map) {
                                        child.material.map.encoding = THREE.sRGBEncoding; // Use sRGB encoding for color maps
                                        child.material.map.needsUpdate = true;
                                    }
                        
                                    // Update normal maps, roughness maps, or any other texture maps
                                    if (child.material.normalMap) {
                                        child.material.normalMap.needsUpdate = true;
                                    }
                                    if (child.material.roughnessMap) {
                                        child.material.roughnessMap.needsUpdate = true;
                                    }
                                    if (child.material.metalnessMap) {
                                        child.material.metalnessMap.needsUpdate = true;
                                    }
                        
                                    // Adjust material properties for better appearance
                                    if ('roughness' in child.material) {
                                        child.material.roughness = 0.5; // Adjust roughness for balanced PBR rendering
                                    }
                                    if ('metalness' in child.material) {
                                        child.material.metalness = 0.5; // Adjust metalness as needed
                                    }
                        
                                    // Ensure emissive textures and colors render correctly
                                    if (child.material.emissiveMap) {
                                        child.material.emissiveMap.needsUpdate = true;
                                    }
                                    if ('emissive' in child.material) {
                                        child.material.emissive = new THREE.Color(0x000000); // Set emissive to black if not defined
                                    }
                        
                                    // Fix for grass or transparent materials by enabling alpha blending
                                    if ('transparent' in child.material && child.material.transparent) {
                                        child.material.opacity = Math.max(child.material.opacity, 0.8); // Ensure opacity is sufficient
                                        child.material.alphaTest = 0.5; // Discard pixels below this alpha threshold
                                    }
                                }
                            }
                        });
    
                        scene.add(patio);
                        console.log('patio model loaded and positioned below the main model.');
                    },
                    undefined,
                    (error) => {
                        console.error('Error loading patio model:', error);
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
    let placement;
    // Add event listeners to the placement buttons
    const placementButtons = document.querySelectorAll('.button-grid-section .grid-btn');

    placementButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            placementButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the text content to determine which environment to load
            placement = button.textContent.trim();

            if (placement === 'Deck') {
                loadRoomEnvironment();
            } else if (placement === 'Rooftop') {
                loadHDREnvironment();
            } else if (placement === 'Pool') {
                loadPoolEnvironment();
            } else if (placement === 'Patio') {
                loadPatioEnvironment();
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
    floor.position.y = -2.1; // Lower the floor slightly below the cube
    floor.receiveShadow = true; // Enable shadows to be cast on the floor
    scene.add(floor);
    const gltfLoader = new GLTFLoader();

    gltfLoader.load( "https://cdn.shopify.com/3d/models/44f73190fc222ce5/floor.glb" , (gltf) => {
        ground = gltf.scene;
        ground.scale.set(1.2, 31, 1.1);
        ground.position.set(0, -2.3, -5.3);  // Adjust position as needed
        ground.rotation.x = -Math.PI / 2; // Rotate to lay flat
        ground.receiveShadow = true;
        ground.castShadow = true;
    
        ground.traverse((child) => {
            if (child.isMesh) {
                // Create a new material or modify the existing one
                child.material = new THREE.MeshPhysicalMaterial({
                    color: 0x98a7ac,  // Apply the specified color
                    roughness: 1,   // Set roughness for a less reflective surface
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
    ambientLight.position.set(5, 10, 10);
    // ambientLight.intensity = 0.7;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);

    directionalLight.position.set(5, 10, 10);
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
        turbidity: 5,
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
    let glassModel;
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
    let defaultLedMaterial=null;
    let ledOriginalMaterial = null;
    let ledLight = null; // Reset the light reference

    const modelFilesAttached = {
        "10'x10'":
          "https://cdn.shopify.com/3d/models/146c486a88fb8a98/10_-_10_Attach.glb",
        "10'x14'":
          "https://cdn.shopify.com/3d/models/66fdd67165deb55a/10_-_14_Attach.glb",
        "14'x14'":
          "https://cdn.shopify.com/3d/models/419ca087b22d59de/14_-_14_Attach.glb",
        "14'x20'":
          "https://cdn.shopify.com/3d/models/2aba7c55a911db14/14_-_20_Attach.glb",
    };
    let modelFiles = {
          "10'x10'":
            "https://cdn.shopify.com/3d/models/5373fa94cc09519a/10_-_10_.glb",
          "10'x14'":
            "https://cdn.shopify.com/3d/models/44bda31434e21ad2/10_-_14_.glb",
          "14'x14'":
            "https://cdn.shopify.com/3d/models/d89a75c304de77ba/14_-_14_.glb",
          "14'x20'":
            "https://cdn.shopify.com/3d/models/180cdc389476c95b/14_-_20_.glb",
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

        let selectedSurfaceOption = null;
        // Update the calculator content dynamically to show only configuration prices
        if (calculatorContent) {
            if (calculatorContent) {
                calculatorContent.innerHTML = `
                    
                    <span >Blade Pro:</span >
                    <ul>                        
                        <li class="item-row">
                            <span class="item-name">${selectedSize}</span>
                            <span class="item-price">$${pergolaPrices_config[selectedSize]}</span>
                        </li> 

                        ${Object.values(selectedSlides).some(slide => slide) ? `
                            <span >Slide:</span >
                            <ul>
                                ${Object.keys(selectedSlides).map(side =>
                                    selectedSlides[side] ? `
                                    <li class="item-row">
                                        <span class="item-name">${side.charAt(0).toUpperCase() + side.slice(1)}</span>
                                        <span class="item-price">$${slidePrices_config[selectedSize]}</span>
                                    </li>` : ''
                                ).join('')}
                            </ul>` : ''}
                    
                            ${Object.values(selectedZips).some(zip => zip) ? `
                            <span >Shade:</span >
                            <ul>
                                ${Object.keys(selectedZips).map(side =>
                                    selectedZips[side] ? `
                                    <li class="item-row">
                                        <span class="item-name">${side.charAt(0).toUpperCase() + side.slice(1)}</span>
                                        <span class="item-price">$${zipPrices_config[selectedSize]}</span>
                                    </li>` : ''
                                ).join('')}
                            </ul>` : ''}

                            ${Object.values(selectedAddons).some(addon => addon) ? `
                            <span >Accessories:</span >
                            <ul>
                                ${Object.keys(selectedAddons).map(addon =>
                                    selectedAddons[addon] ? `
                                    <li class="item-row">
                                        <span class="item-name">${addon.charAt(0).toUpperCase() + addon.slice(1)}</span>
                                        <span class="item-price">$${addonPrices_config[addon]}</span>
                                    </li>` : ''
                                ).join('')}
                            </ul>` : ''}
                    <div>
                        <span >Surface</span> <br>
                        <div class="gray-text">What type of ground will it be installed on? </div>
                    </div>
                    <div class="button-grid-section">
                        <button class="grid-btn" data-value="Concrete Slab">Concrete Slab</button>
                        <button class="grid-btn" data-value="Composite wood deck">Composite wood deck</button>
                        <button class="grid-btn" data-value="Stone pavers">Stone pavers</button>
                        <button class="grid-btn" data-value="Footings required">Footings required</button>
                    </div>
                `;
            }
            
    
            // Restore the 'expanded' class if it was previously added
            if (isCalculatorExpanded) {
                calculatorContent.classList.add('expanded');
                
            } else {
                calculatorContent.classList.remove('expanded');
            }

            const gridButtons = calculatorContent.querySelectorAll('.button-grid-section .grid-btn');

            gridButtons.forEach(button => {
                // If this button's value matches the selected option, add 'active' class
                if (button.getAttribute('data-value') === selectedSurfaceOption) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }

                button.addEventListener('click', (event) => {
                    // Update selectedSurfaceOption
                    selectedSurfaceOption = button.getAttribute('data-value');

                    // Remove 'active' class from all buttons
                    gridButtons.forEach(btn => btn.classList.remove('active'));

                    // Add 'active' class to the clicked button
                    button.classList.add('active');

                    // You can perform additional actions here, e.g., updating calculations
                });
            });                   
            
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
    let attachwall,poolwall;
    let selection;
    // Add event listeners to the "Freestanding" and "Wall-Wall-mounted" buttons
    document.querySelectorAll('.adjacent-btn').forEach((button) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all adjacent-btn buttons
            document.querySelectorAll('.adjacent-btn').forEach((btn) => {
                btn.classList.remove('active');
            });
            // Add 'active' class to the clicked button
            button.classList.add('active');

            selection = button.textContent.trim();

            if (selection === 'Wall-mounted') {
                document.querySelectorAll('.side-container').forEach((container) => {
                    const btn = container.querySelector('.side-btn');
                    if (btn && btn.getAttribute('data-side') === 'rear') {
                        console.warn("Rear glass cannot be selected in Wall-mounted mode.");
                        btn.disabled = true; // Disable the button
                        container.classList.add('disabled'); // Add a class for styling
                    } else {
                        btn.disabled = false; // Re-enable other buttons
                        container.classList.remove('disabled');
                    }
                });
                document.querySelectorAll('.zip-container').forEach((container) => {
                    const btn = container.querySelector('.zip-btn');
                    if (btn && btn.getAttribute('data-zip') === 'rear') {
                        console.warn("Rear zip cannot be selected in Wall-mounted mode.");
                        btn.disabled = true; // Disable the button
                        container.classList.add('disabled'); // Add a class for styling
                    } else if (btn) {
                        btn.disabled = false; // Enable other buttons
                        container.classList.remove('disabled');
                    }
                });
                if (attachwall) {
                    scene.remove(attachwall);
                }

                if (poolwall) {
                    scene.remove(poolwall);
                }
                rotatingParts = [];
                ashgrayParts = [];
                // Replace modelFiles with modelFilesAttached
                modelFiles = modelFilesAttached;
                if (placement != 'Pool' && placement != 'Patio') {
                    gltfLoader.load(
                        'https://cdn.shopify.com/3d/models/1fc3f235d6f8ec83/Rooftop_attach_wall.glb',
                        (gltf) => {
                            attachwall = gltf.scene;
                            attachwall.position.set(0, -1.9, 0.67); // Adjust position as needed
                            attachwall.rotation.y = Math.PI / 2 // Place attachwall slightly below the main model
                            attachwall.scale.set(1, 1, 1);
        
                            attachwall.traverse((child) => {
                                if (child.isMesh) {
                                    child.castShadow = true;
                                    child.receiveShadow = true;
                                    if (child.material) {
                                        child.material.needsUpdate = true;
                                    }
                                }
                            });
        
                            scene.add(attachwall);
                            console.log('attachwall model loaded and positioned below the main model.');
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading attachwall model:', error);
                        }
                    );
                } else if (placement === 'Pool') {
                    gltfLoader.load(
                        'https://cdn.shopify.com/3d/models/4829cc9da827db8c/Pool_House_-_Attach_wall.glb',
                        (gltf) => {
                            poolwall = gltf.scene;
                            poolwall.position.set(0, -2, 1.5); // Adjust position as needed
                    
                            poolwall.rotation.y = Math.PI / 2 // Place poolwall slightly below the main model
                            poolwall.scale.set(1, 1, 1);
        
                            poolwall.traverse((child) => {
                                if (child.isMesh) {
                                    child.castShadow = true;
                                    child.receiveShadow = true;
                                    if (child.material) {
                                        child.material.needsUpdate = true;
                                    }
                                }
                            });
        
                            scene.add(poolwall);
                            console.log('poolwall model loaded and positioned below the main model.');
                        },
                        undefined,
                        (error) => {
                            console.error('Error loading poolwall model:', error);
                        }
                    );
                }
                
            } else if (selection === 'Freestanding') {
                // Set modelFiles back to the freestanding models
                document.querySelectorAll('.side-container').forEach((container) => {
                    const btn = container.querySelector('.side-btn');
                    if (btn) {
                        btn.disabled = false; // Enable the button
                        container.classList.remove('disabled');
                    }
                });
                document.querySelectorAll('.zip-container').forEach((container) => {
                    const btn = container.querySelector('.zip-btn');
                    if (btn) {
                        btn.disabled = false; // Enable the button
                        container.classList.remove('disabled');
                    }
                });
                if (attachwall) {
                    scene.remove(attachwall);
                }
                if (poolwall) {
                    scene.remove(poolwall);
                }
                modelFiles = {
                    "10'x10'":
                      "https://cdn.shopify.com/3d/models/5373fa94cc09519a/10_-_10_.glb",
                    "10'x14'":
                      "https://cdn.shopify.com/3d/models/44bda31434e21ad2/10_-_14_.glb",
                    "14'x14'":
                      "https://cdn.shopify.com/3d/models/d89a75c304de77ba/14_-_14_.glb",
                    "14'x20'":
                      "https://cdn.shopify.com/3d/models/180cdc389476c95b/14_-_20_.glb",
              };
            }

            loadModel(selectedSize);
        });
    });


    let ashgrayParts = [];
    function loadModel(size) {
        const loadingScreen = document.getElementById("loading-screen-MainModel");
        loadingScreen.style.display = "flex";
    
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
        ledLight = null;
        ashgrayParts = [];
    
        removeAllZips();
    
        document.querySelectorAll(".side-container").forEach(btn => {
            btn.classList.remove("active");
        });
    
        document.querySelectorAll(".zip-container").forEach(btn => {
            btn.classList.remove("active");
        });
    
        document.querySelectorAll(".addon-control-btn").forEach(btn => {
            btn.setAttribute("data-state", "check");
            btn.classList.remove("addon-check", "addon-add", "addon-close");
            btn.classList.add("addon-check");
        });
    
        const modelPath = modelFiles[size];
        gltfLoader.load(
            modelPath,
            gltf => {
                object = gltf.scene;
    
                if (selection === "Wall-mounted" && selectedSize != "14'x20'" && selectedSize != "14'x14'") {
                    object.position.set(0, -2, -1.22);
                } else {
                    object.position.set(0, -2, 0);
                }
    
                object.scale.set(1, 1, 1);
                scene.add(object);
                exportRoot.add(object);
    
                object.traverse(child => {
                    if (!child.isMesh) return;
    
                    child.receiveShadow = true;
                    child.castShadow = true;
    
                    if (selection != "Wall-mounted") {
                        // For non-wall-mounted
                        if (
                            (child.name && child.name.match("3DGeom-2") && 
                                !child.name.match("3DGeom-11") && 
                                !child.name.match("3DGeom-12") && size == "14'x20'") ||
                            (child.name && child.name.match(/^3DGeom-3/) && size == "14'x14'") ||
                            (child.name && child.name.match(/^3DGeom-1/) && size == "10'x14'") ||
                            (child.name && child.name.match(/^3DGeom-1/) && size == "10'x10'")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (
                            child.name && 
                            child.name.match("3DGeom-5") && 
                            !child.name.match("3DGeom-57") && 
                            !child.name.match("3DGeom-59") && 
                            !child.name.match("3DGeom-58")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (child.name && child.name.match("3DGeom-3")) rotatingParts.push(child);
                        if (child.name && child.name.match("3DGeom-4")) rotatingParts.push(child);
    
                        if (
                            child.name && 
                            child.name.match("3DGeom-6") && 
                            !child.name.match("3DGeom-61") && 
                            !child.name.match("3DGeom-62") && 
                            !child.name.match("3DGeom-60")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (
                            ((child.name.match("3DGeom-5") || child.name.match("3DGeom-119") || child.name.match("3DGeom-122")) && size === "14'x20'") ||
                            ((child.name.match(/^3DGeom-6/) || child.name.match("3DGeom-84") || child.name.match("3DGeom-86") || child.name.match("3DGeom-87")) && size === "14'x14'") ||
                            ((child.name.match(/^3DGeom-82/) || child.name.match("3DGeom-4") || child.name.match("3DGeom-84") || child.name.match("3DGeom-85")) && size === "10'x14'") ||
                            ((child.name.match("3DGeom-62") || child.name.match("3DGeom-4") || child.name.match("3DGeom-60") || child.name.match("3DGeom-58")) &&
                                !child.name.match("3DGeom-57") && !child.name.match("3DGeom-59") && size === "10'x10'") ||
                            (child.name.match(/^3DGeom-123/) && !child.name.match("3DGeom-61"))
                        ) {
                            ashgrayParts.push(child);
                        }
                    } else {
                        // For wall-mounted
                        if (
                            (child.name && child.name.match("3DGeom-3") && 
                                !child.name.match("3DGeom-11") && 
                                !child.name.match("3DGeom-12") && size == "14'x20'") ||
                            (child.name && child.name.match(/^3DGeom-3/) && size == "14'x14'") ||
                            (child.name && child.name.match(/^3DGeom-1/) && size == "10'x14'") ||
                            (child.name && child.name.match(/^3DGeom-1/) && size == "10'x10'")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (
                            child.name && 
                            child.name.match("3DGeom-5") && 
                            !child.name.match("3DGeom-58") && 
                            !child.name.match("3DGeom-57") && 
                            !child.name.match("3DGeom-59")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (child.name && child.name.match("3DGeom-3")) rotatingParts.push(child);
                        if (child.name && child.name.match("3DGeom-4")) rotatingParts.push(child);
    
                        if (
                            child.name && 
                            child.name.match("3DGeom-6") && 
                            !child.name.match("3DGeom-60") && 
                            !child.name.match("3DGeom-64") && 
                            !child.name.match("3DGeom-61") && 
                            !child.name.match("3DGeom-62")
                        ) {
                            rotatingParts.push(child);
                        }
    
                        if (
                            ((child.name.match("3DGeom-124") || child.name.match("3DGeom-120")) && size === "14'x20'") ||
                            ((child.name.match(/^3DGeom-88/) || child.name.match("3DGeom-84") || child.name.match("3DGeom-87") || child.name.match("3DGeom-86")) && size === "14'x14'") ||
                            ((child.name.match(/^3DGeom-86/) || child.name.match("3DGeom-82") || child.name.match("3DGeom-84") || child.name.match("3DGeom-4")) && size === "10'x14'") ||
                            ((child.name.match(/^3DGeom-64/) || child.name.match("3DGeom-83") || child.name.match("3DGeom-4") || child.name.match("3DGeom-61") || child.name.match("3DGeom-58")) && size === "10'x10'") ||
                            (child.name.match(/^3DGeom-6/) && !child.name.match(/^3DGeom-62/))
                        ) {
                            ashgrayParts.push(child);
                        }
                    }
    
                    if (
                        (child.name && child.name.match(/^3DGeom-120/) && size == "14'x20'") ||
                        (child.name && child.name.match(/^3DGeom-85/) && size == "14'x14'") ||
                        (child.name && child.name.match(/^3DGeom-83/) && size == "10'x14'") ||
                        (child.name && child.name.match(/^3DGeom-59/) && size == "10'x10'")
                    ) {
                        ledPart = child;
                    }
                });
    
                setDefaultBlackMaterial(object);
                toggleRotation();
                updateSelectedGlasses();
                updateSliderParts(object);
                updateSelectedZips(selectedSize);
                updateButtonLabels(size);
                updateAllLabels();
                updateSlideLabels();
                updateZipLabels();
    
                loadingScreen.style.display = "none";
            },
            xhr => {
                if (xhr.lengthComputable) {
                    const percentComplete = (xhr.loaded / xhr.total) * 100;
                    console.log(`Model ${percentComplete.toFixed(2)}% loaded`);
                    const progressBar = document.getElementById("progress-bar-MainModel");
                    if (progressBar) {
                        progressBar.style.width = `${percentComplete}%`;
                    }
                }
            },
            error => {
                console.error("An error occurred while loading the model:", error);
                loadingScreen.style.display = "none";
            }
        );
    }
    

    const zipControl = document.getElementById('zipControl');
    loadModel(selectedSize); // Load default model
    updateTotalPrice();

    initializeZipModule(scene, gltfLoader,exportRoot,glassModel); // Initialize zip module
    setupZipControl(zipControl)

    // DOM Elements
    const modelIcon = document.getElementById('modelIcon');
    const sliderIcon = document.getElementById('sliderIcon');
    const zipIcon = document.getElementById('zipIcon');
    const ledIcon = document.getElementById('ledIcon');

    let isSlideAvailable = false;
    let isShadeAvailable = false;
    let isLightAvailable = false;
    function updateIconStates() {
        // Slide Icon
        if (!isSlideAvailable) {
            sliderIcon.classList.add('disabled');
            sliderIcon.disabled = true;
        } else {
            sliderIcon.classList.remove('disabled');
            sliderIcon.disabled = false;
        }
    
        // Shade Icon (Zip)
        if (!isShadeAvailable) {
            zipIcon.classList.add('disabled');
            zipIcon.disabled = true;
        } else {
            zipIcon.classList.remove('disabled');
            zipIcon.disabled = false;
        }
    
        // Light Icon (LED)
        if (!isLightAvailable) {
            ledIcon.classList.add('disabled');
            ledIcon.disabled = true;
        } else {
            ledIcon.classList.remove('disabled');
            ledIcon.disabled = false;
        }
    }
    
    // CALL the function to initialize icon states
    updateIconStates();

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

    // Variables
    let selectedLedOption = 'Warm White'; // Default LED option
    let ledLights = [];
    const maxLedIntensity = 50;

    // Object to store popup timeout IDs
    const popupTimeouts = {};

    // Function to hide a popup with fade-out animation
    function hidePopup(popupElement) {
        // Remove 'show' class if present
        popupElement.classList.remove('show');
        // Add 'hide' class
        popupElement.classList.add('hide');

        // Clear any existing timeout
        if (popupTimeouts[popupElement.id]) {
            clearTimeout(popupTimeouts[popupElement.id]);
            delete popupTimeouts[popupElement.id];
        }

        // Wait for fade-out animation to complete before setting display to 'none'
        setTimeout(() => {
            popupElement.style.display = 'none';
        }, 15500); // Match this duration with the fadeOut animation time
    }

    // Function to show a popup with fade-in animation and hide after 10 seconds
    function showPopupWithTimeout(popupElement) {
        // Hide all other popups
        hideAllPopups();

        // Remove 'hide' class if present
        popupElement.classList.remove('hide');
        // Add 'show' class
        popupElement.classList.add('show');
        popupElement.style.display = 'grid'; // Or 'block', depending on your layout

        // If there's an existing timeout for this popup, clear it
        if (popupTimeouts[popupElement.id]) {
            clearTimeout(popupTimeouts[popupElement.id]);
        }

        // Automatically hide after 10 seconds
        popupTimeouts[popupElement.id] = setTimeout(() => {
            hidePopup(popupElement);
            delete popupTimeouts[popupElement.id];
        }, 10000);
    }

    // Function to hide all popups
    function hideAllPopups() {
        const popups = [rotationSliderPopup, glassSliderPopup, zipSliderPopup, ledIntensityPopup, ledRgbPopup];
        popups.forEach(popup => {
            hidePopup(popup);
        });
    }

    // Event listeners for icons
    modelIcon.addEventListener('click', () => {
        showPopupWithTimeout(rotationSliderPopup);
    });

    sliderIcon.addEventListener('click', () => {

        showPopupWithTimeout(glassSliderPopup);
    });

    zipIcon.addEventListener('click', () => {
   
        showPopupWithTimeout(zipSliderPopup);
    });

    ledIcon.addEventListener('click', () => {
        
        if (selectedAddons['lighting']) {
            if (selectedLedOption === 'Warm White') {
                showPopupWithTimeout(ledIntensityPopup);
            } else if (selectedLedOption === 'RGB') {
                showPopupWithTimeout(ledRgbPopup);
            }
        } else {
            isLightAvailable = false;
        }
    });

    // // Close popups when clicking outside
    // document.querySelector('.three-js-container').addEventListener('click', function (event) {
    //     // Check if the clicked element is NOT inside the icon-container
    //     if (!event.target.closest('.icon-container')) {
    //         hideAllPopups();
    //     }
    // });

    // Event listeners for close buttons
    closeRotationSlider.addEventListener('click', () => hidePopup(rotationSliderPopup));
    closeGlassSlider.addEventListener('click', () => hidePopup(glassSliderPopup));
    closeZipSlider.addEventListener('click', () => hidePopup(zipSliderPopup));
    closeLedIntensityPopup.addEventListener('click', () => hidePopup(ledIntensityPopup));
    closeLedRgbPopup.addEventListener('click', () => hidePopup(ledRgbPopup));

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
            setLEDColor(`hsl(${ledRgbRangePicker.value}, 100%, 20%)`);
        }
    });

    // LED Intensity Control
    ledIntensityControl.addEventListener('input', (event) => {
        const intensityValue = event.target.value;
        const intensity = THREE.MathUtils.mapLinear(intensityValue, 0, 50, 0, maxLedIntensity);
        updateLedIntensity(intensity);
    });

    function updateLedIntensity(intensity) {
        if (ledLights.length > 0) {
            ledLights.forEach(light => {
                light.intensity = 50 - intensity;
            });
        }
    }

    const ledRgbRangePicker = document.getElementById('ledRgbRangePicker');

    // Event listener for the RGB LED slider
    ledRgbRangePicker.addEventListener('input', () => {
        const hue = ledRgbRangePicker.value;
        const rgbColor = `hsl(${hue}, 100%, 20%)`; // Convert hue to an HSL color
        console.log(rgbColor);
        setLEDColor(rgbColor);
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

            const ledIntensity = THREE.MathUtils.mapLinear(ledIntensityControl.value || 50, 0, 50, 0, maxLedIntensity);
            const ledDistance = 10; // Softer light with greater distance
            const spotLightAngle = Math.PI / 4; // Wider beam for warm LED effect

            // Positions for lights
            const boundingBox = new THREE.Box3().setFromObject(ledPart);
            const center = new THREE.Vector3();
            boundingBox.getCenter(center);

            // Adjust positions relative to the center
            const offset = -2.05; // Distance from the center
            const position1 = center.clone().add(new THREE.Vector3(-offset, 0, -offset)); // Left-back offset
            const position2 = center.clone().add(new THREE.Vector3(offset, 0, -offset));  // Right-back offset


            // Add spotlights
            ledLights.push(createWarmSpotLight(0xFFD8A8, ledIntensity, ledDistance, position1, spotLightAngle)); // Warm white light color
            ledLights.push(createWarmSpotLight(0xFFD8A8, ledIntensity, ledDistance, position2, spotLightAngle));
                // Optional debugging helper for spotlights
            // const helper1 = new THREE.SpotLightHelper(ledLights[0]);
            // const helper2 = new THREE.SpotLightHelper(ledLights[1]);
            // scene.add(helper1, helper2);
        } else {
            console.warn('LED part not found in the model.');
        }
    }

    function createWarmSpotLight(color, intensity, distance, position, angle) {
        // Create a SpotLight with reduced intensity and wider penumbra for soft edges
        const spotLight = new THREE.SpotLight(color, intensity * 0.8, distance, angle, 0.8, 1); 
        spotLight.position.copy(position);
        spotLight.target.position.set(position.x, position.y - 1, position.z - 2); // Target slightly downward
        spotLight.castShadow = true;
    
        // Adjust shadow properties for natural soft shadows
        spotLight.shadow.bias = -0.002; // Reduced shadow bias
        spotLight.shadow.mapSize.width = 1024; // Balanced shadow resolution
        spotLight.shadow.mapSize.height = 1024;
        spotLight.shadow.camera.near = 0.1; // Avoid too close shadows
        spotLight.shadow.camera.far = distance; // Restrict shadow distance
        spotLight.shadow.camera.fov = angle * (180 / Math.PI); // Match the light cone
    
        // Add a subtle ambient light for a warm glow around the spotlight
        const ambientLight = new THREE.PointLight(color, intensity * 0.1, distance / 3);
        ambientLight.position.copy(position);
        ambientLight.position.y -= 0.2; // Slight offset for ambient light
    
        // Add lights to the scene
        scene.add(ambientLight);
        scene.add(spotLight);
        scene.add(spotLight.target); // Important to add the target for proper aiming
    
        return spotLight;
    }
    
    


    // Function to add the lighting addon
    function addAddon(addonName) {
        if (addonName === 'lighting') {
            isLightAvailable = true;
            updateIconStates();
            selectedAddons['lighting'] = true;
            if (selectedLedOption === 'Warm White') {
                setLEDColor(0xffe6b8);
                updateLedIntensity(ledIntensityControl.value || 100);
            } else if (selectedLedOption === 'RGB') {
                setLEDColor(`hsl(${ledRgbRangePicker.value}, 100%, 20%)`);
            }
        }
    }

    // Function to remove the lighting addon
    function removeAddon(addonName) {
        if (addonName === 'lighting') {
            isLightAvailable = false;
            updateIconStates();
            selectedAddons['lighting'] = false;
            if (ledLights.length > 0) {
                ledLights.forEach(light => scene.remove(light));
                ledLights = [];
            }
            if (ledPart && defaultLedMaterial) {
                ledPart.material = defaultLedMaterial.clone();
            } else {
                console.warn('LED part or default material not available.');
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


    // Fetch product data dynamically using Shopify's AJAX API
    const productHandle = 'blade'; // Replace with the actual handle of your product

    let productData = null; // Store product data globally for easy access

    const fetchProductData = fetch('/products/blade.js')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch product data.");
            }
            return response.json();
        })
        .then(data => {
            productData = data;
            console.log("Product data loaded:", productData);
        })
        .catch(error => console.error("Error fetching product data:", error));

    const fetchSlideData = fetch('/products/slide.js')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch slide product data.");
            }
            return response.json();
        })
        .then(data => {
            productDataSlide = data;
            console.log("Slide product data loaded:", productDataSlide);
        })
        .catch(error => console.error("Error fetching slide product data:", error));

    const fetchZipData = fetch('/products/shade.js')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch zip product data.");
            }
            return response.json();
        })
        .then(data => {
            productDataZip = data;
            console.log("Zip product data loaded:", productDataZip);
        })
        .catch(error => console.error("Error fetching zip product data:", error));


    Promise.all([fetchProductData, fetchSlideData, fetchZipData])
        .then(() => {
            if (productData && productDataSlide && productDataZip) {
                updateAllLabels();
                updateSlideLabels();
                updateZipLabels();
            } else {
                console.error("One or more product data objects are still missing.");
            }
        })
        .catch(error => console.error("Error loading all product data:", error));
    
    // Function to update all labels based on product data
    function updateAllLabels() {
        if (!productData) {
            console.error("Product data not loaded yet.");
            return;
        }

        const variants = productData.variants;

        // Iterate through all size containers
        document.querySelectorAll('.size-container').forEach(container => {
            const btn = container.querySelector('.size-btn');
            const variantId = btn.getAttribute('data-variant-id');
            const variant = variants.find(v => v.id == variantId);

            if (variant) {
            // Update availability
            const availabilityElement = container.querySelector('.options-l.availability');
            availabilityElement.textContent = variant.available ? 'Available to ship' : 'Out of stock';

            // Update shipping time (use dummy or metafield-like data if available)
            const shippingTimeElement = container.querySelector('.options-l.shipping-time');
            shippingTimeElement.textContent = variant.metafields?.shipping_time || 'Unavailable'; // Adjust metafields access if needed

            // Update price and discount price
            const discountPriceElement = container.querySelector('.disc-price.discount-price');
            const originalPriceElement = container.querySelector('.options-r.original-price');

            if (variant.compare_at_price && variant.compare_at_price > variant.price) {
                discountPriceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;
                originalPriceElement.textContent = `$${(variant.compare_at_price / 100).toFixed(0)}`;
            } else {
                discountPriceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;
                originalPriceElement.textContent = '';
            }

            // Update pay-over
            const payOverElement = container.querySelector('.options-r.pay-over');
            const monthlyPayment = (variant.price / 100) / 24; // Assuming a 24-month payment plan
            payOverElement.textContent = `or from $${monthlyPayment.toFixed(2)}/month`;
            } else {
            console.warn(`Variant with ID ${variantId} not found.`);
            }
        });
    }

    // Function to update variant details for the active container
    function updateVariantDetails(variantId) {
        if (!productData) {
            console.error("Product data not loaded yet.");
            return;
        }

        const variant = productData.variants.find(v => v.id == variantId);

        if (variant) {
            // Update availability
            const availabilityElement = document.querySelector('.size-container.active .options-l.availability');
            availabilityElement.textContent = variant.available ? 'Available to ship' : 'Out of stock';

            // Update shipping time
            const shippingTimeElement = document.querySelector('.size-container.active .options-l.shipping-time');
            shippingTimeElement.textContent = variant.metafields?.shipping_time || 'Available';

            // Update price and discount price
            const discountPriceElement = document.querySelector('.size-container.active .disc-price.discount-price');
            const originalPriceElement = document.querySelector('.size-container.active .options-r.original-price');

            if (variant.compare_at_price && variant.compare_at_price > variant.price) {
            discountPriceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;
            originalPriceElement.textContent = `$${(variant.compare_at_price / 100).toFixed(0)}`;
            } else {
            discountPriceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;
            originalPriceElement.textContent = '';
            }

        // Update pay-over
        const payOverElement = document.querySelector('.size-container.active .options-r.pay-over');
        const monthlyPayment = (variant.price / 100) / 24; // Assuming a 24-month payment plan
        payOverElement.textContent = `or from $${monthlyPayment.toFixed(2)}/month`;
    } else {
        console.error(`Variant with ID ${variantId} not found.`);
    }
    }

    // Listen for size button clicks
    document.querySelectorAll('.size-container').forEach(container => {
        container.addEventListener('click', () => {
            // Remove active class from all containers
            document.querySelectorAll('.size-container').forEach(button => button.classList.remove('active'));
            container.classList.add('active');

            // Get the variant ID from the button's data attribute
            const btn = container.querySelector('.size-btn');
            const variantId = btn.getAttribute('data-variant-id');

            // Update variant details for the active container
            updateVariantDetails(variantId);

            // Existing functions (if any)
            selectedSize = btn.textContent.trim();
            setSelectedSize(selectedSize);
            loadModel(selectedSize);
            updateTotalPrice();
            setupZipControl(zipControl, selectedSize);
            updateButtonLabels(selectedSize);
            updateSlideLabels();
            updateZipLabels();
        });
    });



    
    function applyMaterialChange(targetObject, newMaterial) {
        const testMaterial2 = new THREE.MeshPhysicalMaterial({
            color:0xB2BEB5,
            roughness:0.8,
            metalness:1,
            side: THREE.DoubleSide 
        });
        // Apply default black material to all mesh children
        targetObject.traverse((child) => {
            if (ashgrayParts.includes(child)) {
            // Apply ashgray material to ashgrayParts
            child.material = testMaterial2;
        } else {
            // Apply default black material to all other meshes
            child.material = newMaterial;
        }
        });
    }
    function applyMaterialChangeGlass(targetObject, selectedColor) {
        const newMaterial = new THREE.MeshPhysicalMaterial({
            color: selectedColor === 'black' ? 0x4a4a4a : 0xffffff,
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
                
                // Update active class on color containers
                document.querySelectorAll('.color-container').forEach((container) => {
                    container.classList.remove('active');
                });

                const activeContainer = selectedColor === 'black'
                    ? document.querySelector('.color-container .black').parentElement
                    : document.querySelector('.color-container .white').parentElement;
                if (activeContainer) {
                    activeContainer.classList.add('active');
                }
                // Define new material based on the selected color
                let newMaterial;
                if (selectedColor === 'black' || selectedColor === 'white') {
                    newMaterial = new THREE.MeshPhysicalMaterial({
                        color: selectedColor === 'black' ? 0x4a4a4a : 0xffffff,
                        roughness:0.58,
                        metalness:1,
                        side: THREE.DoubleSide 
                        // flatShading: true,
                    });
                }
                defaultLedMaterial = newMaterial.clone()
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

                document.querySelectorAll('.fan-color-selector .color-container').forEach((container) => {
                    container.classList.remove('active');
                });
                event.target.closest('.color-container').classList.add('active');


                // Define new material for the fan based on the selected color
                let fanMaterial = new THREE.MeshPhysicalMaterial({
                    color: selectedColor === 'black' ? 0x4a4a4a : 0xffffff,
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
            // Default black or white material based on the current color
            const defaultMaterial = new THREE.MeshPhysicalMaterial({
                color: currentColor === 'black' ? 0x4a4a4a : 0xffffff, // Black or white
                roughness: 0.58,
                metalness: 1,
                side: THREE.DoubleSide,
            });
    
            // Ash gray material
            const testMaterial = new THREE.MeshPhysicalMaterial({
                color: 0xB2BEB5, // Ash gray
                roughness: 0.8,
                metalness: 1,
                side: THREE.DoubleSide,
            });
    
            // Store the default LED material for later use
            defaultLedMaterial = defaultMaterial.clone();
    
            // Traverse through the object's children
            object.traverse((child) => {
                if (child.isMesh) {
                    if (ashgrayParts.includes(child)) {
                        // Apply ashgray material to ashgrayParts
                        child.material = testMaterial;
                    } else {
                        // Apply default black (or white) material to all other meshes
                        child.material = defaultMaterial;
                    }
                }
            });
        }
    }
    
    function setDefaultBlackMaterialGlass(object) {
        if (object) {
            const defaultMaterial = new THREE.MeshPhysicalMaterial({
                color: currentColor === 'black' ? 0x4a4a4a : 0xffffff,
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
    //         selectedPart.material.copy(originalMaterials[selectedPart.uuid]); // Restore the original material
    //         selectedPart = null; // Clear the selected part
    //     }
    
    //     // If there is an intersection, process the clicked object
    //     if (intersects.length > 0) {
    //         const clickedPart = intersects[0].object; // Get the first intersected object
    //         container.style.cursor = 'pointer';
    
    //         // Store the original material if it's not already stored
    //         if (!originalMaterials[clickedPart.uuid]) {
    //             originalMaterials[clickedPart.uuid] = clickedPart.material.clone();
    //         }
    
    //         // Apply a highlight material (yellow)
    //         clickedPart.material = new THREE.MeshPhysicalMaterial({
    //             color: 0xffff00, // Yellow for click highlight
    //             emissive: 0xffff00,
    //             emissiveIntensity: 1.0,
    //             metalness: 0.6,
    //             roughness: 0.4,
    //         });
    
    //         // Traverse up the hierarchy to collect group-related data
    //         let groupInfo = [];
    //         let currentObject = clickedPart;
    //         while (currentObject) {
    //             const groupName = currentObject.userData.name || currentObject.name || 'Unnamed Group';
    //             groupInfo.push({
    //                 groupName: groupName,
    //                 objectID: currentObject.id,
    //                 objectUUID: currentObject.uuid,
    //                 parentName: currentObject.parent ? currentObject.parent.name || 'Unnamed Parent' : 'No Parent',
    //             });
    //             currentObject = currentObject.parent; // Move up the hierarchy
    //         }
    
    //         // Display the collected information
    //         const nameDisplayBox = document.getElementById('name-display'); // Your HTML display element
    //         nameDisplayBox.innerHTML = `<b>Selected Part Information:</b><br>${groupInfo
    //             .map((info, index) => {
    //                 return `
    //                 <b>Group ${index + 1}:</b>
    //                 <ul>
    //                     <li><b>Name:</b> ${info.groupName}</li>
    //                     <li><b>ID:</b> ${info.objectID}</li>
    //                     <li><b>UUID:</b> ${info.objectUUID}</li>
    //                     <li><b>Parent Name:</b> ${info.parentName}</li>
    //                 </ul>`;
    //             })
    //             .join('')}`;
    
    //         // Set the currently selected part
    //         selectedPart = clickedPart;
    //     } else {
    //         // Clear the name display box if no part is clicked
    //         const nameDisplayBox = document.getElementById('name-display');
    //         nameDisplayBox.textContent = 'No object selected.';
    //         container.style.cursor = 'default';
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
                initializeZipModule(scene, gltfLoader,exportRoot,newGlass);

              

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
            initializeZipModule(scene, gltfLoader,exportRoot,false);
            if (side === 'front') frontGlass = null;
            if (side === 'rear') rearGlass = null;
            if (side === 'left') leftGlass = null;
            if (side === 'right') rightGlass = null;
            isSlideAvailable = false;
            updateIconStates();

            // Mark the side as deselected
            selectedGlasses[side] = false;
        }
    }

    function positionGlass(glass, side) {
        glass.scale.set(1.01,1,1)
        // Update positions of sliding glass based on selected size
        if (selectedSize === "14'x20'") {
            if (side === 'front'){
                glass.scale.set(1.01,1,1)
                glass.position.set(0, -2, -0.03);
            }
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
    const productHandleSlide = 'slide'; // The product handle for slide
    let productDataSlide = null; // Global variable to store slide product data

    // Fetch the product data
    

    // Update slide labels only if productDataSlide is loaded
    function updateSlideLabels() {
        if (!productDataSlide) {
            console.error("Slide product data not loaded yet.");
            return;
        }

        const { width, depth } = parseSize(selectedSize); // Parse size into width and depth

        document.querySelectorAll('.side-container').forEach(container => {
            
            const btn = container.querySelector('.side-btn');
            if (!btn) {
                console.warn("Side button not found in container:", container);
                return;
            }

            const side = btn.getAttribute('data-side'); // e.g., 'front', 'rear', 'left', 'right'

            // Update the button label to reflect the side and size
            let sideLength = '';
            if (side === 'front' || side === 'rear') {
                sideLength = `${depth}'`;
            } else if (side === 'left' || side === 'right') {
                sideLength = `${width}'`;
            }
            btn.textContent = `${sideLength} ${capitalizeFirstLetter(side)}`;

            // Retrieve the variant ID from variantMaps
            const color = 'black'; // Assuming you have a function to get the selected color
            const productType = "slides";
            let variantId = getVariantId(selectedSize, side, color, productType);

            if (!variantId) {
                console.warn(`Variant ID not found for size: ${selectedSize}, side: ${side}, color: ${color}`);
                return;
            }

            btn.setAttribute('data-variant-id', variantId); // Update button with the variant ID

            // Find the corresponding variant in product data
            let variant = productDataSlide.variants.find(v => v.id == variantId);

            if (!variant) {
                console.warn(`Variant with ID ${variantId} not found in product data.`);
                return;
            }

            // Update availability
            let availabilityElement = container.querySelector('.options-l.availability');
            availabilityElement.textContent = variant.available ? 'Available to ship' : 'Out of stock';

            // Update shipping time
            let shippingTimeElement = container.querySelector('.options-l.shipping-time');
            shippingTimeElement.textContent = variant.metafields?.product?.shipping_time || 'Unavailable';

            // Update price and discount price
            let priceElement = container.querySelector('.disc-price.size-discount-price');
            let originalPriceElement = container.querySelector('.options-r.original-price');

            priceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;

            
            if (variant.compare_at_price && variant.compare_at_price > variant.price) {
                    originalPriceElement.textContent = `$${(variant.compare_at_price / 100).toFixed(0)}`;
            } else {
                    originalPriceElement.textContent = '';
            }
            

            // Update pay-over
            let payOverElement = container.querySelector('.options-r.pay-over');
            let monthlyPayment = (variant.price / 100) / 24; // Assuming a 24-month payment plan
            payOverElement.textContent = `or from $${monthlyPayment.toFixed(2)}/month`;
        });
    }



      
    function getVariantId(selectedSize, side, color, productType) {
        // Check if all keys exist in the variantMaps for the given parameters
        if (
            variantMaps[productType] &&
            variantMaps[productType][selectedSize] &&
            variantMaps[productType][selectedSize][side] &&
            variantMaps[productType][selectedSize][side][color]
        ) {
            return variantMaps[productType][selectedSize][side][color];
        } else {
            console.warn(
                `Variant ID not found for size: ${selectedSize}, side: ${side}, color: ${color}, productType: ${productType}`
            );
            return null; // Return null if any key is missing
        }
    }
    
    
      
      // Helper function to parse size string into width and depth
    function parseSize(sizeStr) {
        const dimensions = sizeStr.split('x');
        if (dimensions.length === 2) {
          const width = dimensions[0].replace(/'|"/g, '').trim();
          const depth = dimensions[1].replace(/'|"/g, '').trim();
          return { width, depth };
        } else {
          return { width: null, depth: null };
        }
    }
      
      // Helper function to capitalize the first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      

    // Add event listeners to the add-on buttons for each side
    document.querySelectorAll('.side-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            isSlideAvailable = true;
            updateIconStates();
            // Find the button within the container
            const btn = container.querySelector('.side-btn');
            if (!btn) return; // Ensure the button exists within the container
            showPopupWithTimeout(glassSliderPopup);
            updateSlideLabels();
    
            const side = btn.getAttribute('data-side'); // Extract the side attribute
            container.classList.toggle('active'); // Toggle the active class on the container
            if (selection === 'Wall-mounted' && side === 'rear') {
                console.warn("Rear glass cannot be selected in Wall-mounted mode.");
                btn.disabled = true; // Disable the button
                container.classList.add('disabled'); // Optionally add a class to style the disabled state
                return; // Prevent further actions
            }
    
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
    const productHandleZip = 'shade'; // Replace with the actual handle of your zip product
    let productDataZip = null; // Global variable to store zip product data

    
    function updateZipLabels() {
        if (!productDataZip) {
          console.error("Zip product data not loaded yet.");
          return;
        }
      
        const { width, depth } = parseSize(selectedSize); // Parse size into width and depth
      
        // Iterate through all zip containers
        document.querySelectorAll('.zip-container').forEach(container => {
          const btn = container.querySelector('.zip-btn');
          if (!btn) {
            console.warn("Zip button not found in container:", container);
            return;
          }
      
          const side = btn.getAttribute('data-zip'); // e.g., 'front', 'rear', 'left', 'right'
      
          // Update the button label to reflect the side and size
          let sideLength = '';
          if (side === 'front' || side === 'rear') {
            sideLength = `${depth}'`;
          } else if (side === 'left' || side === 'right') {
            sideLength = `${width}'`;
          }
          btn.textContent = `${sideLength} ${capitalizeFirstLetter(side)}`;
      
          // Retrieve the variant ID from variantMaps
          const color = 'black'; // Assuming you have a function to get the selected color
          const productType = "zips";
          let variantId = getVariantId(selectedSize, side, color, productType);
      
          if (!variantId) {
            console.warn(`Variant ID not found for size: ${selectedSize}, side: ${side}, color: ${color}`);
            return;
          }
      
          btn.setAttribute('data-variant-id', variantId); // Update button with the variant ID
      
          // Find the corresponding variant in product data
          let variant = productDataZip.variants.find(v => v.id == variantId);
      
          if (!variant) {
            console.warn(`Variant with ID ${variantId} not found in product data.`);
            return;
          }
      
          // Update availability
          let availabilityElement = container.querySelector('.options-l.availability');
          availabilityElement.textContent = variant.available ? 'Available to ship' : 'Out of stock';
      
          // Update shipping time
          let shippingTimeElement = container.querySelector('.options-l.shipping-time');
          shippingTimeElement.textContent = variant.metafields?.product?.shipping_time || 'Unavailable';
      
          // Update price and discount price
          let priceElement = container.querySelector('.disc-price.zip-discount-price');
          let originalPriceElement = container.querySelector('.options-r.original-price');
      
          priceElement.textContent = `$${(variant.price / 100).toFixed(0)}`;
      
          if (variant.compare_at_price && variant.compare_at_price > variant.price) {
              originalPriceElement.textContent = `$${(variant.compare_at_price / 100).toFixed(0)}`;
          } else {
              originalPriceElement.textContent = '';
          }
          
      
          // Update pay-over
          let payOverElement = container.querySelector('.options-r.pay-over');
          const monthlyPayment = (variant.price / 100) / 24; // Assuming a 24-month payment plan
          payOverElement.textContent = `or from $${monthlyPayment.toFixed(2)}/month`;
        });
    }
      
    document.querySelectorAll('.zip-container').forEach((container) => {
        container.addEventListener('click', (event) => {
            isShadeAvailable = true;
            updateIconStates();
            // Find the zip button within the container
            const btn = container.querySelector('.zip-btn');
            if (!btn) return; // Ensure the button exists within the container
    
            const side = btn.getAttribute('data-zip'); // Extract the side attribute
            container.classList.toggle('active'); // Toggle active class on the container
            if (selection === 'Wall-mounted' && side === 'rear') {
                console.warn("Rear zip cannot be selected in Wall-mounted mode.");
                btn.disabled = true; // Disable the button
                container.classList.add('disabled'); // Add a class for styling
                return; // Prevent further actions
            } else {
                // Enable the button if not Wall-mounted or not rear
                btn.disabled = false;
                container.classList.remove('disabled');
            }
            showPopupWithTimeout(zipSliderPopup);
    
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
