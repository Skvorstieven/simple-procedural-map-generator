// Import necessary modules and dependencies from Three.js and react-three/fiber
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { Sky, Environment, MapControls, PerspectiveCamera } from "@react-three/drei";

// Import custom components for HexGrid and Water
import HexGrid from "../HexGrid/HexGrid";
import Water from "../Water/Water";

// Import the URL for the environment map
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

// Define the MapGenerator component with props
export default function MapGenerator(
  props: {
    size: number,  // Size of the map
    waterHeight: number,  // Height of the water surface
    hexesData: {position: {x: number, y: number}, height: number}[],
    autoRotate: boolean // Whether to enable auto-rotation
    showSky: boolean,
    colors: {waterColor: string, sandColor: string, plainColor: string, forestColor: string, stoneColor: string, snowColor: string, ambienLightColor: string}
  }) {

  // Destructure props for easier access
  const { size, waterHeight, hexesData, autoRotate, showSky, colors } = props;

  // Render the Three.js Canvas with a PerspectiveCamera
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-size-100, size+100, size+100]} />
      <Environment files={sunsetURL} />
      <ambientLight color={new THREE.Color(colors.ambienLightColor)}/>
      <pointLight position={[40, 40, 20]} intensity={1} color={new THREE.Color(colors.ambienLightColor)}/>
      {showSky ? <Sky distance={10000} sunPosition={[1, 0.5, 1]}/> : ''}
      <HexGrid hexesData={hexesData} waterHeight={waterHeight} colors={colors}/>
      <Water size={size} waterHeight={waterHeight} color={new THREE.Color(colors.waterColor)}/>
      <MapControls autoRotate={autoRotate} autoRotateSpeed={0.5} />
    </Canvas>
  );
}
