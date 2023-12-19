
import { Cylinder, } from "@react-three/drei";

export default function HexGrid(props: { hexesData: {position: {x: number, y: number}, height: number}[], waterHeight: number, color: THREE.Color}) {

  const { hexesData, waterHeight, color } = props;

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

  return (
    <group>
        {hexesData.map(({position, height}) => <Hexagon x={position.x} y={position.y} height={height} />)}
    </group>
  )
}