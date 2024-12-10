import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate along X-axis
      meshRef.current.rotation.y += 0.01; // Rotate along Y-axis
    }
  });

  return (
    <mesh position={[2, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" roughness={0.5} />
    </mesh>
  );
};

export default RotatingCube
