import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

function Water() {
  const waterRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={waterRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial roughness={0} metalness={1} />
    </mesh>
  )
}

export default function MapGenerator() {
  return (
    <Canvas>
      <Environment files={sunsetURL} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Water />
      <OrbitControls />
    </Canvas>
  );
}
