import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Cylinder, } from "@react-three/drei";

//@ts-expect-error asset import
import sunsetURL from "../../assets/envmaps/belfast_sunset.hdr";

function convertTileToPosition(tileX: number, tileY: number) {
  return [(tileX+(tileY % 2) * 0.5) * 1.77, tileY * 1.535];
}

function getHexesData() {
  const data = [];
  for(let x = -10; x < 10; x++) {
    for(let y = -10; y < 10; y++) {
      data.push(convertTileToPosition(x, y));
    }
  }
  return data;
}

function Hexagon(props: { x: number, y: number, height: number }) {
  const { x, y, height } = props;
  return (
    <mesh>
      <Cylinder args={[1, 1, height, 6, 1, false]} position={[x, height*0.5, y]}>
        <meshStandardMaterial flatShading />
      </Cylinder>
    </mesh>
  )
}

function HexGrid() {
  const hexesData = getHexesData();
  return (
    <mesh>
        {hexesData.map(([x, y]) => <Hexagon x={x} y={y} height={Math.random() * 10} />)}
    </mesh>
  )
}



export default function MapGenerator() {
  return (
    <Canvas>
      <Environment files={sunsetURL} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <HexGrid />
      <OrbitControls />
    </Canvas>
  );
}
