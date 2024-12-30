"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

type ModelProps = {
  position?: [number, number, number];
  scale?: number | [number, number, number];
};

const MyBlenderModel: React.FC<ModelProps> = ({
  position = [0, 0, 0],
  scale = 1,
}) => {
  const suzanneRef = useRef();
  const router = useRouter();
  const modelUrl = new URL("./test.glb", import.meta.url).href;
  const { scene } = useGLTF(modelUrl);
  // const handleClick = () => {
  //   router.push("/mammad"); // Replace with your desired route
  // };

  scene.traverse((child) => {
    if (child.isMesh) {
      console.log("if it is mesh" , child.isMesh)
      console.log(`Mesh: ${child.name}`);
      console.log(`Material Color:`, child.material?.color);
      
    }
    if (child.isMesh && child.name === "Suzanne") {
      suzanneRef.current = child;
    }
  });

  const changeColor = (newColor) => {
    if (suzanneRef.current) {
      // Update the color of Suzanne's material
      suzanneRef.current.material.color.set(newColor);
    }
  };


  const handleMeshClick = (meshName: string) => {
    router.push(`/${meshName.toLowerCase()}`); // Redirect to the route
  };
  return (
    //   <Link href='/mammad'>
    //   </Link>
    
    // onClick={handleClick}

     <primitive
          object={scene}
          onClick={(e: any) => {
            
              handleMeshClick(e.object.name); // Handle clicks only for Suzanne and Cube
            
          }}
        />
       
  );
};

// Preload the model
useGLTF.preload(new URL("./test.glb", import.meta.url).href);

export default MyBlenderModel;
