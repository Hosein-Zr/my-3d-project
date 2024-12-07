'use client'
import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Cube: React.FC = () => {
  // Ref for the mesh to apply animations
  const meshRef = React.useRef<THREE.Mesh>(null);

  // Rotate the cube every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Box Geometry for the Cube */}
      <boxGeometry args={[1, 1, 1]} />
      {/* Mesh Material */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cube;
