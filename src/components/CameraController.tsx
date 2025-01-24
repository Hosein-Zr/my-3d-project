"use client"

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const ColorChangingCube = () => {
  const [color, setColor] = useState('red');
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      const time = Date.now() * 0.001;
      const newColor = `hsl(${(time % 360)}, 100%, 50%)`;
      setColor(newColor);
      cubeRef.current.material.color.set(newColor);
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
};
export default ColorChangingCube