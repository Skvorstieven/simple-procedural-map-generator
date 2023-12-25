
import * as THREE from 'three';

// Function for height correction near water surface to avoid visual glitch
function heightCorrection(height: number, waterHeight: number) {
    if(height <= waterHeight+0.2 && height >= waterHeight) {
      return height + 0.12;
    }
    else if(height >= waterHeight-0.2 && height < waterHeight) {
      return height - 0.12;
    }
    else {
      return height;
    }
  }

export default function createInstancedMesh(
    geometry: THREE.BufferGeometry, 
    material: THREE.Material, 
    count: number, 
    meshesData: { position: { x: number; y: number }; 
    height: number }[], 
    waterHeight: number) {

    const mesh = new THREE.InstancedMesh(geometry, material, count);
    
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    meshesData.forEach(({ position, height }, index) => {
        const meshHeight = heightCorrection(height, waterHeight);
        
        // Create a matrix for each instance
        const matrix = new THREE.Matrix4()
          .compose(
            new THREE.Vector3(position.x, meshHeight * 0.5, position.y), // Set position
            new THREE.Quaternion(),
            new THREE.Vector3(1, 1, 1)
          )
          .scale(new THREE.Vector3(1, meshHeight, 1)); // Scale based on hexagonHeight
    
        mesh.setMatrixAt(index, matrix);
      })

    return mesh;
}