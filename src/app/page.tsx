"use client";
import { Canvas } from '@react-three/fiber';
import { animated, useSpring } from '@react-spring/three';
import { useState } from 'react';
import MyBlenderModel from '@/components/MyBlenderModel';
import { OrbitControls } from '@react-three/drei';

const ScalingBox = () => {
  const [hovered, setHovered] = useState(false);

  // React Spring animation for scaling

  return (
    <Canvas style={{height: "100vh", }}>
<OrbitControls />
    <ambientLight />
    <MyBlenderModel />
      </Canvas>
  );
};

export default ScalingBox