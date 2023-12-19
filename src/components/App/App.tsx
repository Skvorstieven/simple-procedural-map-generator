import { Vector2 } from "three";
import { createNoise2D } from 'simplex-noise';
import { useControls } from "leva";


import MapGenerator from "../MapGenerator/MapGenerator"

export default function App() {

  const config = useControls({
    size: {value: 100, min: 1, max: 500, step: 1},
    waterHeight: {value: 5, min: 1, max: 10, step: 1},
    heightScale: {value: 0.5, min: 0.1, max: 1, step: 0.1},
    noiseScale: {value: 6, min: 1, max: 100, step: 1},
    hexColor: '#adadad',
    waterColor: '#0cc48d',
    ambienLightColor: '#f0cd00',
    autoRotate: false
  })

  function convertTileToPosition(tileX: number, tileY: number) {
    return new Vector2((tileX+(tileY % 2) * 0.5) * 1.77, tileY * 1.535);
  }
  
  const createNoise = createNoise2D();
  
  function generateHexesData() {
    const data = [];
    for(let x = -config.size; x <= config.size; x++) {
      for(let y = -config.size; y <= config.size; y++) {
        const position = convertTileToPosition(x, y);
  
        if(position.length() > config.size-2) continue;
        const noiseScale = config.noiseScale/500;
        const noise = (createNoise(x*noiseScale, y*noiseScale) + 1)*config.heightScale;
        const height = Math.pow(noise, 1.5)*10;
  
        data.push({position, height});
      }
    }
    console.log(data);
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
      autoRotate={config.autoRotate}/>
    </>
  )
}
