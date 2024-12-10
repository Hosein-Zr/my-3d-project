"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraShake,
  Environment,
  Html,
  OrbitControls,
  OrthographicCamera,
  Reflector,
  Sky,
  Text,
  TransformControls,
} from "@react-three/drei";
import MyBlenderModel from "../components/MyBlenderModel";
// import Cube from "../components/Cube";
import RotatingCube from "../components/Cube";
import HoverBox from "../components/Cube";

const MyParentComponent: React.FC = () => {
  return (
    <div className=" h-screen w-screen bg-green-100">
      <Canvas shadows camera={{ position: [30, 20, 0], fov: 60 }} dpr={[1, 2]}>
        {/* <CameraShake yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.2} />; */}
        <OrthographicCamera />
        <OrbitControls
          minDistance={5}
          maxDistance={35}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
        />
        {/* <Sky sunPosition={[0, 2, -10]} inclination={0.5} azimuth={0.2} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <HoverBox />
      </Canvas>
    </div>
  );
};

export default MyParentComponent;
