"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyBlenderModel from "../components/MyBlenderModel";

const MyParentComponent: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* Blender Model */}
        <MyBlenderModel position={[0, 0, 0]} scale={1} />

        {/* Orbit Controls */}
        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default MyParentComponent;
