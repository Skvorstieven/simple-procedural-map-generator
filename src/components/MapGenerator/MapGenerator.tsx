import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, } from "@react-three/drei";

import HexGrid from "../HexGrid/HexGrid";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

export default function MapGenerator() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-17, 31, 33]} />
      <Environment files={sunsetURL} />
      <ambientLight />
      <pointLight position={[40, 40, 20]} intensity={1}/>
      <HexGrid />
      <OrbitControls />
    </Canvas>
  );
}
