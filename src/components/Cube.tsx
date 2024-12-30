// import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { Html } from '@react-three/drei';

const HoverBox = () => {
  const [hovered, setHovered] = useState(false);

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
      {hovered && (
        <Html position={[0, 1.5, 0]} center>
          <div style={{ background: 'white', padding: '10px', borderRadius: '8px' }}>
            <p>Click the button below:</p>
            <button
              style={{
                padding: '8px 12px',
                background: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => alert('Button clicked!')}
            >
              Click Me
            </button>
          </div>
        </Html>
      )}
    </>
  );
};


export default HoverBox;
