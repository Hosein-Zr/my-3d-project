'use clienty'
import HoverBox from '@/components/Cube'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function Mammad() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <OrbitControls />
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* Blender Model */}
        <HoverBox />

        {/* Orbit Controls */}
      </Canvas>
    </div>
  )
}

export default Mammad
