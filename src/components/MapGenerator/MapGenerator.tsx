import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Cylinder, PerspectiveCamera, MeshTransmissionMaterial } from "@react-three/drei";


import HexGrid from "../HexGrid/HexGrid";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

function Water(props: {size: number, waterHeight: number, color: THREE.Color}) {
  const {size, waterHeight, color} = props;
  return(
    <mesh>
      <Cylinder args={[size + 1, size + 1, waterHeight, 100, 1, false]} position={[0, waterHeight*0.5-0.1, 0]}>
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
        distortion={1}
        distortionScale={0.4}
        temporalDistortion={0.5}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor={0xffffff}
        color={color} />
    </Cylinder>
    </mesh>
  )
}


export default function MapGenerator(props: {size: number, ambienLightColor: string, waterHeight: number, waterColor: string, hexColor: string, hexesData: {position: {x: number, y: number}, height: number}[]}) {

  const {size, ambienLightColor, waterHeight, waterColor, hexColor, hexesData} = props;
  
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-size-3, size+3, size+3]} />
      <Environment files={sunsetURL} />
      <ambientLight color={new THREE.Color(ambienLightColor)}/>
      <pointLight position={[40, 40, 20]} intensity={1} color={new THREE.Color(ambienLightColor)}/>
      <HexGrid hexesData={hexesData} waterHeight={waterHeight} color={new THREE.Color(hexColor)}/>
      <Water size={size} waterHeight={waterHeight} color={new THREE.Color(waterColor)}/>
      <OrbitControls />
    </Canvas>
  );
}
