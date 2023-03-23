import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GameLogic from './GameLogic';
import SpawnLogic from './SpawnLogic';
import Routes from '../../types/types';

interface CanvasProps {
  handleGameModal: Routes['handleGameModal'];
  gameModal: Routes['gameModal'];
}

function Canvas({ handleGameModal, gameModal }: CanvasProps) {
  const canvasRef = useRef<any>(null);

  // useEffect(() => {
  //   const scene = createScene();
  //   if (gameModal) {
  //     const camera = createCamera();
  //     const renderer = createRenderer(canvasRef);
  //     const light = createLight();
  //     scene.add(light);

  //     SpawnLogic(scene);

  //     animate(renderer, scene, camera);
  //   } else {
  //     let obj;
  //     for (var i = scene.children.length - 1; i >= 0; i--) {
  //       obj = scene.children[i];
  //       console.log('here deleting');
  //       scene.remove(obj);
  //     }
  //   }
  // }, []);

  const handleRefClick = (e: any) => {
    if (e.target !== canvasRef.current) {
      handleGameModal(e);
    }
  };

  return (
    <div
      onClick={handleRefClick}
      className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30"
    >
      <div
        ref={canvasRef}
        className="flex h-1/4 w-1/4 items-center justify-center bg-customGreen text-center"
      >
        <h1>DEMO COMING SOON</h1>
      </div>
      {/* <canvas ></canvas> */}
    </div>
  );
}

function createScene() {
  return new THREE.Scene();
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.z = 5;
  return camera;
}

function createRenderer(canvasRef: any) {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.current,
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
  return renderer;
}

function createLight() {
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  return light;
}

function animate(renderer: any, scene: any, camera: any) {
  const loop = () => {
    requestAnimationFrame(loop);
    renderer.render(scene, camera);
  };

  loop();
}

export default Canvas;
