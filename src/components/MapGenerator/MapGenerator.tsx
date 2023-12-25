// Import necessary modules and dependencies from Three.js and react-three/fiber
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { Environment, MapControls, PerspectiveCamera } from "@react-three/drei";

// Import custom components for HexGrid and Water
import HexGrid from "../HexGrid/HexGrid";
import Water from "../Water/Water";

// Import the URL for the environment map
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

// Define the MapGenerator component with props
export default function MapGenerator(
  props: {
    size: number,  // Size of the map
    ambienLightColor: string,
    waterHeight: number,  // Height of the water surface
    waterColor: string,
    hexesData: {position: {x: number, y: number}, height: number}[],
    autoRotate: boolean // Whether to enable auto-rotation
  }) {

  // Destructure props for easier access
  const { size, ambienLightColor, waterHeight, waterColor, hexesData, autoRotate } = props;

  // Render the Three.js Canvas with a PerspectiveCamera
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-size-3, size+3, size+3]} />
      <Environment files={sunsetURL} />
      <ambientLight color={new THREE.Color(ambienLightColor)}/>
      <pointLight position={[40, 40, 20]} intensity={1} color={new THREE.Color(ambienLightColor)}/>
      <HexGrid hexesData={hexesData} waterHeight={waterHeight} />
      <Water size={size} waterHeight={waterHeight} color={new THREE.Color(waterColor)}/>
      <MapControls autoRotate={autoRotate} autoRotateSpeed={0.5} />
    </Canvas>
  );
}
