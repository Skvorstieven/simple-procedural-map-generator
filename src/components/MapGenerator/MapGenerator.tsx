import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, } from "@react-three/drei";


import HexGrid from "../HexGrid/HexGrid";
import Water from "../Water/Water";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";




export default function MapGenerator(
  props: {
    size: number, 
    ambienLightColor: string, 
    waterHeight: number, 
    waterColor: string, 
    hexColor: string, 
    hexesData: {position: {x: number, y: number}, 
    height: number}[],
    autoRotate: boolean}) {

  const {size, ambienLightColor, waterHeight, waterColor, hexColor, hexesData, autoRotate} = props;
  
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-size-3, size+3, size+3]} />
      <Environment files={sunsetURL} />
      <ambientLight color={new THREE.Color(ambienLightColor)}/>
      <pointLight position={[40, 40, 20]} intensity={1} color={new THREE.Color(ambienLightColor)}/>
      <HexGrid hexesData={hexesData} waterHeight={waterHeight} color={new THREE.Color(hexColor)}/>
      <Water size={size} waterHeight={waterHeight} color={new THREE.Color(waterColor)}/>
      <OrbitControls autoRotate={autoRotate} autoRotateSpeed={0.5}/>
    </Canvas>
  );
}
