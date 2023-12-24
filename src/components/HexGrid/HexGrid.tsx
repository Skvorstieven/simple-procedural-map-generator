import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Extend the mesh class with the instanced mesh class
extend({ InstancedMesh: THREE.InstancedMesh });

// Dunction for height correction near water surface to avoid visual glitch
function heightCorrection(height: number, waterHeight: number) {
  if(height <= waterHeight+0.1 && height >= waterHeight) {
    return height + 0.1;
  }
  else if(height >= waterHeight-0.1 && height <= waterHeight) {
    return height - 0.1;
  }
  else {
    return height;
  }
}

export default function HexGrid(props: { hexesData: { position: { x: number; y: number }; height: number }[]; waterHeight: number; color: THREE.Color }) {
  const { hexesData, waterHeight, color } = props;

  // Create a buffer geometry for the hexagon
  const hexagonGeometry = new THREE.CylinderGeometry(1, 1, 1, 6, 1, false);

  // Create a material for the instanced mesh
  const hexagonMaterial = new THREE.MeshStandardMaterial({ flatShading: true, color });

  // Create an instanced mesh
  const hexagons = new THREE.InstancedMesh(hexagonGeometry, hexagonMaterial, hexesData.length);

  // Set the position and scale for each instance
  hexesData.forEach(({ position, height }, index) => {
    const hexagonHeight = heightCorrection(height, waterHeight);
    
    // Create a matrix for each instance
    const matrix = new THREE.Matrix4()
      .compose(
        new THREE.Vector3(position.x, hexagonHeight * 0.5, position.y), // Set position
        new THREE.Quaternion(),
        new THREE.Vector3(1, 1, 1)
      )
      .scale(new THREE.Vector3(1, hexagonHeight, 1)); // Scale based on hexagonHeight

    hexagons.setMatrixAt(index, matrix);
  });

  // Tell Three.js to update the instance matrices
  hexagons.instanceMatrix.needsUpdate = true;

  return <primitive object={hexagons} />;
}