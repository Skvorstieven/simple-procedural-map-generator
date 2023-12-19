import { Vector2 } from "three";
import { createNoise2D } from 'simplex-noise';
import { Cylinder, } from "@react-three/drei";

export default function HexGrid(props: { size: number, waterHeight: number, heightScale: number, color: THREE.Color}) {

  const { size, waterHeight, heightScale, color } = props;

  function Hexagon(props: { x: number, y: number, height: number }) {
    const { x, y, height } = props;
    const cylinderHeight = height === waterHeight ? height-0.1 : height;
    return (
      <mesh castShadow receiveShadow>
        <Cylinder args={[1, 1, cylinderHeight, 6, 1, false]} position={[x, height*0.5, y]}>
          <meshStandardMaterial flatShading color={color}/>
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
    for(let x = -size; x <= size; x++) {
      for(let y = -size; y <= size; y++) {
        const position = convertTileToPosition(x, y);
  
        if(position.length() > size-2) continue;
  
        const noise = (createNoise(x*0.1, y*0.1) + 1)*heightScale;
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