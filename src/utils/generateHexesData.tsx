import { Vector2 } from "three"; // Vector2 class from the 'three' library
import { createNoise2D } from 'simplex-noise'; // 2D noise function from 'simplex-noise'

// Function to convert tile coordinates to 2D positions
function convertTileToPosition(tileX: number, tileY: number) {
    return new Vector2((tileX+(tileY % 2) * 0.5) * 1.77, tileY * 1.535);
  }
  
  // Create a 2D noise function
  const createNoise = createNoise2D();
  
  // Function to generate hexes data based on configuration settings
  export default function generateHexesData(config: {size: number, noiseScale: number, heightScale: number}) {
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