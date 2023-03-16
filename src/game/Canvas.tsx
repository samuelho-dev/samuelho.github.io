import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Canvas({ handleGameModal }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return (
    <div className=" absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Canvas;
