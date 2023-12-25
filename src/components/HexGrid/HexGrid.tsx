import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import createInstancedMesh from '../../utils/createInstancedMesh';

// Extend the mesh class with the instanced mesh class
extend({ InstancedMesh: THREE.InstancedMesh });

export default function HexGrid(props: { hexesData: { position: { x: number; y: number }; height: number }[]; waterHeight: number; color: THREE.Color }) {
  const { hexesData, waterHeight, /* color */ } = props;

  const sandHexes = hexesData.filter(({ height }) => height < waterHeight+1);
  const plainHexes = hexesData.filter(({ height }) => height >= waterHeight+1 && height < waterHeight+5);
  const forestHexes = hexesData.filter(({ height }) => height >= waterHeight+5 && height < waterHeight+15);
  const stoneHexes = hexesData.filter(({ height }) => height >= waterHeight+15 && height < waterHeight+20);
  const snowHexes = hexesData.filter(({ height }) => height >= waterHeight+20);

  // Create a buffer geometry for the hexagon
  const hexagonGeometry = new THREE.CylinderGeometry(1, 1, 1, 6, 1, false);

  // Create a material for the instanced mesh
  /* const hexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color }); */
  const sandHexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color('sandybrown') });
  const plainHexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color('green') });
  const forestHexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color('darkgreen') });
  const stoneHexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color('gray') });
  const snowHexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color('white') });

  // Create an instanced mesh
  const sandHexagons = createInstancedMesh(hexagonGeometry, sandHexagonMaterial, hexesData.length, sandHexes, waterHeight);
  const plainHexagons = createInstancedMesh(hexagonGeometry, plainHexagonMaterial, hexesData.length, plainHexes, waterHeight);
  const forestHexagons = createInstancedMesh(hexagonGeometry, forestHexagonMaterial, hexesData.length, forestHexes, waterHeight);
  const stoneHexagons = createInstancedMesh(hexagonGeometry, stoneHexagonMaterial, hexesData.length, stoneHexes, waterHeight);
  const snowHexagons = createInstancedMesh(hexagonGeometry, snowHexagonMaterial, hexesData.length, snowHexes, waterHeight);

  // Tell Three.js to update the instance matrices
  sandHexagons.instanceMatrix.needsUpdate = true;
  plainHexagons.instanceMatrix.needsUpdate = true;
  forestHexagons.instanceMatrix.needsUpdate = true;
  stoneHexagons.instanceMatrix.needsUpdate = true;
  snowHexagons.instanceMatrix.needsUpdate = true;

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