import * as THREE from 'three';
import { extend } from '@react-three/fiber';

import prepareInstancedHexes from '../../utils/prepareInstancedHexes';

// Extend the mesh class with the instanced mesh class
extend({ InstancedMesh: THREE.InstancedMesh });

export default function HexGrid(props: { hexesData: { position: { x: number; y: number }; height: number }[]; waterHeight: number; colors: { sandColor: string; plainColor: string; forestColor: string; stoneColor: string; snowColor: string } }) {

  // Destructure props
  const { hexesData, waterHeight, colors } = props;

  // Filter the hexes based on height
  const sandHexes = hexesData.filter(({ height }) => height < waterHeight+1);
  const plainHexes = hexesData.filter(({ height }) => height >= waterHeight+1 && height < waterHeight+5);
  const forestHexes = hexesData.filter(({ height }) => height >= waterHeight+5 && height < waterHeight+15);
  const stoneHexes = hexesData.filter(({ height }) => height >= waterHeight+15 && height < waterHeight+20);
  const snowHexes = hexesData.filter(({ height }) => height >= waterHeight+20);

  // Create instanced meshes
  const sandHexagons = prepareInstancedHexes(sandHexes, waterHeight, colors.sandColor);
  const plainHexagons = prepareInstancedHexes(plainHexes, waterHeight, colors.plainColor);
  const forestHexagons = prepareInstancedHexes(forestHexes, waterHeight, colors.forestColor);
  const stoneHexagons = prepareInstancedHexes(stoneHexes, waterHeight, colors.stoneColor);
  const snowHexagons = prepareInstancedHexes(snowHexes, waterHeight, colors.snowColor);

  return (
    <>
      <primitive object={sandHexagons} />
      <primitive object={plainHexagons} />
      <primitive object={forestHexagons} />
      <primitive object={stoneHexagons} />
      <primitive object={snowHexagons} />
    </>
  );
}