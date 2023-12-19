import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Cylinder, PerspectiveCamera, MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";

import HexGrid from "../HexGrid/HexGrid";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

function Water(props: {size: number, waterHeight: number, color: THREE.Color}) {
  const {size, waterHeight, color} = props;
  return(
    <mesh>
      <Cylinder args={[size + 1, size + 1, waterHeight, 100, 1, false]} position={[0, waterHeight*0.5, 0]}>
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
        color={color} />
    </Cylinder>
    </mesh>
  )
}

export default function MapGenerator() {
  const config = useControls({
    size: {value: 30, min: 1, max: 100, step: 1},
    waterHeight: {value: 5, min: 1, max: 10, step: 1},
    heightScale: {value: 0.5, min: 0.1, max: 1, step: 0.1},
    hexColor: '#adadad',
    waterColor: '#0cc48d',
    ambienLightColor: '#f0cd00',
  })

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-config.size-3, config.size+3, config.size+3]} />
      <Environment files={sunsetURL} />
      <ambientLight color={new THREE.Color(config.ambienLightColor)}/>
      <pointLight position={[40, 40, 20]} intensity={1} color={new THREE.Color(config.ambienLightColor)}/>
      <HexGrid size={config.size} waterHeight={config.waterHeight} heightScale={config.heightScale} color={new THREE.Color(config.hexColor)}/>
      <Water size={config.size} waterHeight={config.waterHeight} color={new THREE.Color(config.waterColor)}/>
      <OrbitControls />
    </Canvas>
  );
}
