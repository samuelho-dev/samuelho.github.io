import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

function SpawnLogic(scene: any) {
  loadGLTFModel().then((object) => {
    const animatedObj = Position(object);
    animatedObj.customRotationX = Math.PI * Math.random();
    animatedObj.customRotationY = Math.PI * Math.random();
    animatedObj.customRotationZ = Math.PI * Math.random();
    scene.add(animatedObj);
    AnimateFall(animatedObj);

    const randomInterval = Math.random() * 4;
    setTimeout(() => SpawnLogic(scene), randomInterval * 100);
  });
}

export default SpawnLogic;

function loadGLTFModel() {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '/DogeCoin.gltf',
      (gltf) => {
        const object = gltf.scene;
        resolve(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error occurred while loading the glTF model:', error);
        reject(error);
      },
    );
  });
}

function Position(object: any) {
  const scale = 0.05;
  object.position.x = Math.random() * 10;
  object.position.y = 10;
  object.scale.set(scale, scale, scale);
  return object;
}

function AnimateFall(object: any) {
  gsap.to(object.position, {
    duration: 5,
    y: -10,
    ease: 'power1.in',
    onComplete: () => {
      object.dispose();
    },
  });

  animateRotation(object.rotation, 'x', object.customRotationX);
  animateRotation(object.rotation, 'y', object.customRotationY);
  animateRotation(object.rotation, 'z', object.customRotationZ);
}

function animateRotation(rotation: any, axis: any, customRotation: any) {
  const initialRotation = rotation[axis];
  gsap.to(rotation, {
    duration: 0.3,
    [axis]: initialRotation + customRotation,
    repeat: -1,
    ease: 'power1',
  });
}
