"use client"
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MyBlenderModel from '../components/MyBlenderModel';

const MyParentComponent: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* Blender Model */}
        <MyBlenderModel position={[0, 0, 0]} scale={1} />

        {/* Orbit Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MyParentComponent;
