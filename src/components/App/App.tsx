// Import necessary modules and dependencies
import { useControls } from "leva"; // UI controls library

// Import custom MapGenerator component
import MapGenerator from "../MapGenerator/MapGenerator"

import generateHexesData from "../../utils/generateHexesData";

// Define the main App component
export default function App() {

  // Use Leva controls to manage configuration settings
  const config = useControls({
    size: {value: 100, min: 1, max: 300, step: 1}, // Size of the map
    waterHeight: {value: 5, min: 0, max: 30, step: 1}, // Height of the water surface
    heightScale: {value: 1, min: 0.1, max: 2, step: 0.05}, // Scale for terrain height
    noiseScale: {value: 10, min: 1, max: 100, step: 1}, // Scale for the noise function
    waterColor: 'dodgerblue',
    sandColor: 'sandybrown',
    plainColor: 'forestgreen',
    forestColor: 'darkgreen',
    stoneColor: 'gray',
    snowColor: 'white',
    ambienLightColor: '#ffffff',
    autoRotate: false, // Whether to enable auto-rotation
    sky: false
  });

  const colors = {
    waterColor: config.waterColor,
    sandColor: config.sandColor,
    plainColor: config.plainColor,
    forestColor: config.forestColor,
    stoneColor: config.stoneColor,
    snowColor: config.snowColor,
    ambienLightColor: config.ambienLightColor
  }

  return (
    <>
      <MapGenerator 
        size = {config.size}
        waterHeight = {config.waterHeight}
        hexesData = {generateHexesData(config)} 
        autoRotate = {config.autoRotate}
        showSky = {config.sky}
        colors = {colors}
      />
    </>
  )
}
