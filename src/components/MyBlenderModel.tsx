'use client'
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE from 'three' package

type ModelProps = {
  position?: [number, number, number];
  scale?: number | [number, number, number];
};

const MyBlenderModel: React.FC<ModelProps> = ({ position = [0, 0, 0], scale = 1 }) => {
  const modelUrl = new URL('./project.glb', import.meta.url).href;
  const { scene } = useGLTF(modelUrl);

  // Log the types and names of all objects in the model
  useEffect(() => {
    const logObjectTypes = (node: THREE.Object3D) => {
      // Log the type and name of each object
      console.log(`Object Name: ${node.name}, Type: ${node.type}`);

      // Recursively log all child objects (whether groups, meshes, or other objects)
      node.children.forEach(logObjectTypes); 
    };

    // Start traversing from the root of the scene
    scene.traverse(logObjectTypes); // This goes through all children recursively
  }, [scene]);

  return (
    <mesh>
      <primitive object={scene} position={position} scale={scale} />
    </mesh>
  );
};

// Preload the model
useGLTF.preload(new URL('./project.glb', import.meta.url).href);

export default MyBlenderModel;
