import { RoundedBox, GradientTexture } from '@react-three/drei'

const RoundBox = ({...props }) => {
    return (
        <mesh>
            <RoundedBox args={props.size} position={props.position} radius={props.radius}>
                <meshStandardMaterial 
                transparent 
                opacity={props.opacity} 
                metalness={props.metalness}
                roughness={"ffffff"}
                emissive={"#000000"} 
                >
                    <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={props.colors} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                    />
                </meshStandardMaterial>
            </RoundedBox>
        </mesh>
    )
  }

export default RoundBox