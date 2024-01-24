import { MeshReflectorMaterial } from '@react-three/drei'

const ReflectorPlane = ( ) => {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.5,0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[2000, 2000]}
          resolution={2048}
          mixBlur={1}
          mixStrength={100}
          roughness={"#ffffff"}
          depthScale={1.1}
          minDepthThreshold={0.7}
          maxDepthThreshold={1.25}
          color="#333333"
          metalness={0.2}
        />
      </mesh>
    )
}

export default ReflectorPlane