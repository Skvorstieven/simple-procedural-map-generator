import { Box, MeshTransmissionMaterial } from "@react-three/drei";

export default function Water(props: {size: number, waterHeight: number, color: THREE.Color}) {
  const {size, waterHeight, color} = props;
  return(
    <mesh>
      <Box args={[(size + 1) * 2 * 1.77, waterHeight, (size + 1) * 2 * 1.535]} position={[0, waterHeight*0.5-0.1, 0]}>
      <MeshTransmissionMaterial
        backside={false}
        samples={10}
        resolution={1024}
        transmission={1}
        roughness={0.3}
        thickness={0.5}
        ior={1.1}
        chromaticAberration={0.06}
        anisotropy={0.1}
        distortion={1}
        distortionScale={0.4}
        temporalDistortion={0.5}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor={0xffffff}
        color={color} />
    </Box>
    </mesh>
  )
}
