"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE from 'three' package

type ModelProps = {
  position?: [number, number, number];
  scale?: number | [number, number, number];
  isLightOn?: boolean;
  setIsLightOn?: (isLightOn: boolean) => void;
};

const MyBlenderModel: React.FC<ModelProps> = ({
  position = [0, 0, 0],
  scale = 1,
  isLightOn,
  setIsLightOn,
}) => {
  const node = useRef();
  const computers = node?.current?.children;
  if (computers) console.log(computers[88]);

  const modelUrl = new URL("./project.glb", import.meta.url).href;
  const { scene } = useGLTF(modelUrl);
  // Log the types and names of all objects in the model
  useEffect(() => {
    const logObjectTypes = (node: THREE.Object3D) => {
      // Log the type and name of each object
      if (node.type === "Group" && node.name === "computer")
        // console.log(`Object Name: ${node.name}, Type: ${node.type}`);

      // Recursively log all child objects (whether groups, meshes, or other objects)
      node.children.forEach(logObjectTypes);
    };

    // Start traversing from the root of the scene
    scene.traverse(logObjectTypes); // This goes through all children recursively
  }, [scene]);
  const handleClick = (event) => {
    let currentObject = event.object; // Start with the clicked object
  // console.log(" this is it",currentObject)
    // Traverse up the parent hierarchy until a group with a name is found
    while (currentObject.parent) {
      if (currentObject.parent.name) {
        // console.log(`You clicked on the group: ${currentObject.parent.name}`);
        if(currentObject.parent.name === "lightLamp"){
          setIsLightOn(!isLightOn)
          // Fallback: if no named group is found, log the object's name
        }
        return; // Exit once the group name is logged
      }
      currentObject = currentObject.parent; // Move to the parent object
    }
  
    // console.log(`You clicked on: ${event.object.name}`);
  };
  return (
    <mesh

    // onClick={() =>setIsLightOn(!isLightOn)}
    >
      <primitive
        ref={node}
        object={scene}
        position={position}
        scale={scale}
        onClick={handleClick}
      />
    </mesh>
  );
};

// Preload the model
useGLTF.preload(new URL("./project.glb", import.meta.url).href);

export default MyBlenderModel;
