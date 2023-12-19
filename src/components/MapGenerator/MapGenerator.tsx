import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Cylinder, PerspectiveCamera, MeshTransmissionMaterial } from "@react-three/drei";

import HexGrid from "../HexGrid/HexGrid";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

const size = 30;
const waterHeight = 5;
const heightScale = 0.5;

function Water() {
  return(
    <mesh>
      <Cylinder args={[size + 1, size + 1, waterHeight, 100, 1, false]} position={[0, 0, 0]}>
      <MeshTransmissionMaterial
        backside={false}
        samples={10}
        resolution={1024}
        transmission={1}
        roughness={0.3}
        thickness={0.5}
        ior={1.1}
        chromaticAberration={0.06}
        anisotropy={0.1}
        distortion={0}
        distortionScale={0.3}
        temporalDistortion={0.5}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor={0xffffff}
        color={0x55aaff} />
    </Cylinder>
    </mesh>
  )
}

export default function MapGenerator() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-size-3, size+3, size+3]} />
      <Environment files={sunsetURL} />
      <ambientLight color={0xf0cd00}/>
      <pointLight position={[40, 40, 20]} intensity={1}/>
      <HexGrid size={size} waterHeight={waterHeight}  heightScale={heightScale}/>
      <Water />
      <OrbitControls />
    </Canvas>
  );
}
