"use client";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import MyBlenderModel from "@/components/MyBlenderModel";
import { CameraControls, OrbitControls } from "@react-three/drei";
import Box from "@/components/Cube";
import MovingCamera from "@/components/CameraController";
import { XR, createXRStore } from "@react-three/xr";
const store = createXRStore();
// import { PointLightHelper } from '@react-three/drei';
const ScalingBox = () => {
  const [hovered, setHovered] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  // console.log()
  // React Spring animation for scaling

  return (
    <>
    <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas
        camera={{
          position: [20, 20, 20], // [x, y, z]
          fov: 75, // Field of View
          near: 0.1, // Near clipping plane
          far: 1000, // Far clipping plane
        }}
        style={{ height: "100vh", background: "" }}
      >
        <pointLight
          position={[-3, 13, 17.3]}
          intensity={isLightOn ? 170 : 50}
          color="#FFEFA0"
          castShadow
        />
        {/* <ambientLight /> */}
        <OrbitControls />
        {/* <Box position={[0 , -5  ,0]} /> */}
        {/* <Box position={[5 ,0 ,0]} /> */}
        <MovingCamera />
        <XR store={store}>
          <MyBlenderModel isLightOn={isLightOn} setIsLightOn={setIsLightOn} position={[0 , -10, -10]}/>
        </XR>
      </Canvas>
    </>
  );
};

export default ScalingBox;
