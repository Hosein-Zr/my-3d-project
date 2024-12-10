"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";
// import { useRouter } from "next/navigation";

type ModelProps = {
  position?: [number, number, number];
  scale?: number | [number, number, number];
};

const MyBlenderModel: React.FC<ModelProps> = ({
  position = [0, 0, 0],
  scale = 1,
}) => {
  // const router = useRouter();
  const modelUrl = new URL("./scene.glb", import.meta.url).href;
  const { scene } = useGLTF(modelUrl);
  // const handleClick = () => {
  //   router.push("/mammad"); // Replace with your desired route
  // };

  return (
    //   <Link href='/mammad'>
    //   </Link>
    <mesh 
    // onClick={handleClick}
    >
      <primitive object={scene} position={position} scale={scale} />
    </mesh>
  );
};

// Preload the model
useGLTF.preload(new URL("./table.glb", import.meta.url).href);

export default MyBlenderModel;
