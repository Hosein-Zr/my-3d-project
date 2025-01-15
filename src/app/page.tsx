"use client";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import MyBlenderModel from "@/components/MyBlenderModel";
import { CameraControls, OrbitControls } from "@react-three/drei";
import Box from "@/components/Cube";
// import { PointLightHelper } from '@react-three/drei';
const ScalingBox = () => {
  const [hovered, setHovered] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false)
  // console.log(isLightOn)

  // React Spring animation for scaling

  return (
    <Canvas
    
     camera={{
        position: [20 , 20 , 20], // [x, y, z]
        fov: 75,              // Field of View
        near: 0.1,            // Near clipping plane
        far: 1000,            // Far clipping plane
      }}
    
    style={{ height: "100vh" , background: "black" }}>
      <pointLight position={[-3, 13, 17.3]} intensity={isLightOn ? 170 : 20} color="#FFEFA0"  castShadow/>
      {/* <ambientLight /> */}
      <OrbitControls />
      {/* <Box position={[0 , -5  ,0]} /> */}
      {/* <Box position={[5 ,0 ,0]} /> */}
      <MyBlenderModel
      isLightOn = {isLightOn}
      setIsLightOn = {setIsLightOn}/>
    </Canvas>
  );
};

export default ScalingBox;
