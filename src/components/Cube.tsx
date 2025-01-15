import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { useSpring, a } from '@react-spring/three';
import { Text } from '@react-three/drei';

const HoverBox = () => {
  const [hovered, setHovered] = useState(false);

  // Animation for the text
  const springProps = useSpring({
    scale: hovered ? [1, 1, 1] : [0, 0, 0],
    opacity: hovered ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'orange' : 'blue'} />
      </mesh>
      <a.group position={[0, 1.5, 0]} scale={springProps.scale}>
        <Text color="white" fontSize={0.5}>
          Hovered!
        </Text>
      </a.group>
    </>
  );
};


export default HoverBox;
