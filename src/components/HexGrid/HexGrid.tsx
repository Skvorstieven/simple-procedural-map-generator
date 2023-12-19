import { Vector2 } from "three";
import { createNoise2D } from 'simplex-noise';
import { Cylinder, } from "@react-three/drei";

export default function HexGrid() {

  function Hexagon(props: { x: number, y: number, height: number }) {
    const { x, y, height } = props;
    return (
      <mesh castShadow receiveShadow>
        <Cylinder args={[1, 1, height, 6, 1, false]} position={[x, height*0.5, y]}>
          <meshStandardMaterial flatShading />
        </Cylinder>
      </mesh>
    )
  }

  function convertTileToPosition(tileX: number, tileY: number) {
    return new Vector2((tileX+(tileY % 2) * 0.5) * 1.77, tileY * 1.535);
  }

  const createNoise = createNoise2D();

  function getHexesData() {
    const data = [];
    for(let x = -20; x <= 20; x++) {
      for(let y = -20; y <= 20; y++) {
        const position = convertTileToPosition(x, y);
  
        if(position.length() > 18) continue;
  
        const noise = (createNoise(x*0.1, y*0.1) + 1)*0.5;
        const height = Math.pow(noise, 1.5)*10;
  
        data.push({position, height});
      }
    }
    return data;
  }

  const hexesData = getHexesData();
  return (
    <group>
        {hexesData.map(({position, height}) => <Hexagon x={position.x} y={position.y} height={height} />)}
    </group>
  )
}