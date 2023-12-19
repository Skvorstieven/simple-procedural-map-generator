
export default function HexGrid(props: { hexesData: {position: {x: number, y: number}, height: number}[], waterHeight: number, color: THREE.Color}) {

  const { hexesData, waterHeight, color } = props;

  function Hexagon(props: { x: number, y: number, height: number }) {
    const { x, y, height } = props;
    const cylinderHeight = height === waterHeight ? height-0.1 : height;
    return (
      <mesh castShadow receiveShadow position={[x, height*0.5, y]}>
        <cylinderGeometry args={[1, 1, cylinderHeight, 6, 1, false]} />
        <meshStandardMaterial flatShading color={color} />
      </mesh>
    )
  }

  return (
    <group>
        {hexesData.map(({position, height}) => <Hexagon x={position.x} y={position.y} height={height} />)}
    </group>
  )
}