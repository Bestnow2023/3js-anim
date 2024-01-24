import { Text3D } from '@react-three/drei'
import gentills from "three/examples/fonts/gentilis_bold.typeface.json"

const Text3 = (props) => {
    return (
    <Text3D
        font={gentills}
        position={props.position}
        size={props.size}
        height={0.01}
        textAlign='center' 
        curveSegments={50}
        bevelEnabled
        bevelThickness={0.005}
        bevelSize={0.0015}
        bevelOffset={0}
        bevelSegments={50}
        letterSpacing={0.01}
        
      >
        {props.text}
        <meshStandardMaterial
          color={props.color}
          metalness={0.4}
          opacity={1}
          roughness={"ffffff"}
          transparent
          />
      </Text3D>
    )
}

export default Text3