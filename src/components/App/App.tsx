// Import necessary modules and dependencies
import { Vector2 } from "three"; // Vector2 class from the 'three' library
import { createNoise2D } from 'simplex-noise'; // 2D noise function from 'simplex-noise'
import { useControls } from "leva"; // UI controls library

// Import custom MapGenerator component
import MapGenerator from "../MapGenerator/MapGenerator"

// Define the main App component
export default function App() {

  // Use Leva controls to manage configuration settings
  const config = useControls({
    size: {value: 100, min: 1, max: 500, step: 1}, // Size of the map
    waterHeight: {value: 5, min: 0, max: 10, step: 1}, // Height of the water surface
    heightScale: {value: 1, min: 0.1, max: 2, step: 0.05}, // Scale for terrain height
    noiseScale: {value: 6, min: 1, max: 100, step: 1}, // Scale for the noise function
    hexColor: '#adadad',
    waterColor: '#0cc48d',
    ambienLightColor: '#f0cd00',
    autoRotate: false // Whether to enable auto-rotation
  })

  // Function to convert tile coordinates to 2D positions
  function convertTileToPosition(tileX: number, tileY: number) {
    return new Vector2((tileX+(tileY % 2) * 0.5) * 1.77, tileY * 1.535);
  }
  
  // Create a 2D noise function
  const createNoise = createNoise2D();
  
  // Function to generate hexes data based on configuration settings
  function generateHexesData() {
    const data = [];
    for(let x = -config.size; x <= config.size; x++) {
      for(let y = -config.size; y <= config.size; y++) {
        const position = convertTileToPosition(x, y);
  
        // Skip hexes outside the specified size to create a circle
        if(position.length() > config.size-2) continue;
        
        // Scale and modify noise to calculate hex height
        const noiseScale = config.noiseScale/500;
        const noise = (createNoise(x*noiseScale, y*noiseScale) + 1)*config.heightScale;
        const height = Math.pow(noise, 1.5)*10;
  
        // Store hex position and height in data array
        data.push({position, height});
      }
    }
    return data;
  }

  return (
    <>
      <MapGenerator 
        size ={config.size}
        ambienLightColor={config.ambienLightColor}
        waterHeight={config.waterHeight}
        waterColor={config.waterColor}
        hexColor={config.hexColor}
        hexesData={generateHexesData()} 
        autoRotate={config.autoRotate}
      />
    </>
  )
}
