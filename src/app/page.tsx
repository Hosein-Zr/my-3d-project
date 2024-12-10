"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyBlenderModel from "../components/MyBlenderModel";
import Cube from "../components/Cube";
import RotatingCube from "../components/Cube";

const MyParentComponent: React.FC = () => {
  return (
    <div className=" h-screen w-screen bg-green-100">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />

       {/* <RotatingCube /> */}
      </Canvas>
    </div>
  );
};

export default MyParentComponent;
