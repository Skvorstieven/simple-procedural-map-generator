import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";


function Water() {
  const waterRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (!waterRef.current) {
      return;
    }

    waterRef.current.rotation.x += 0.01;
    waterRef.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={waterRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial />
    </mesh>
  )
}

export default function MapGenerator() {
  return (
    <Canvas>
      <Environment preset="dawn" />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Water />
    </Canvas>
  );
}
