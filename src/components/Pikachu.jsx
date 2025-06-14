import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const Pikachu = () => {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 35 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <Model scale={2.5} position={[0, -1.2, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default Pikachu;
