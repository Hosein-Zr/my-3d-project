import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Cube = ({ onFaceClick }) => {
  const cubeRef = useRef();

  const handlePointerDown = (e) => {
    const faceIndex = e.faceIndex; // Get the face index.
    onFaceClick(faceIndex); // Call parent function with faceIndex.
  };

  return (
    <mesh ref={cubeRef} onPointerDown={handlePointerDown}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Cube;
