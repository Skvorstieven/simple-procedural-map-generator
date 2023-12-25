import * as THREE from 'three';

import createInstancedMesh from './createInstancedMesh';

export default function prepareInstancedHexes(hexesData: { position: { x: number; y: number }; height: number }[], waterHeight: number, color: string) {
  // Create a buffer geometry for the hexagons
  const hexagonGeometry = new THREE.CylinderGeometry(1, 1, 1, 6, 1, false);
  
  // Create a material for the hexagons
  const hexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color: new THREE.Color(color) });
  
  // Create an instanced mesh for the hexagons
  const hexagonMesh = createInstancedMesh(hexagonGeometry, hexagonMaterial, hexesData.length, hexesData, waterHeight);

  return hexagonMesh;
}