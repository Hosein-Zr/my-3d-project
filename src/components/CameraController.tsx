import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { useRef } from 'react';

const CameraController = ({ targetPosition, targetLookAt }) => {
  const cameraRef = useRef();

  const { position } = useSpring({
    position: targetPosition,
    config: { mass: 1, tension: 120, friction: 30 },
  });

  useFrame(({ camera }) => {
    if (cameraRef.current) {
      camera.position.lerp(position, 0.1); // Smoothly move camera.
      camera.lookAt(...targetLookAt); // Ensure the camera looks at the cube.
    }
  });

  return null;
};
export default CameraController