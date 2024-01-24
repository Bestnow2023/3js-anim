import { Text, Text3D } from '@react-three/drei'
import { suspend } from 'suspend-react'
import RoundBox from './RoundBox'
import Text3 from './Text3'

const medium = import('@pmndrs/assets/fonts/inter_medium.woff')
const GOLDENRATIO = 1.61803398875

const Frame = ({...props }) => {

    return (
      <group {...props} position={props.position}>
        <Text 
          overflowWrap = 'normal' 
          maxWidth={0.65} 
          textAlign='center' 
          font={suspend(medium).default} 
        //   color="black" 
          outlineWidth={0.003}
          outlineBlur={0}
          outlineColor={"white"}
          fontSize={0.08} 
          anchorX="center" 
          position={[0, 0, 0.0051]} 
          castShadow
          // strokeColor={"white" }
          // strokeWidth={0.002}
          lineHeight={1.8}>
          {props.content}
          <meshStandardMaterial
            color={"black"}
            metalness={0}
            opacity={1}
            roughness={"#ffffff"}
            transparent
            />
        </Text>

        {/* number */}
        <Text3 position = {[-0.3 , 0.3, 0.005]} size = {0.1} color = {'#0080ff'} text = {props.number + "."} />
        {/* title */}
        <Text3 position = {[-0.15, 0.3, 0.005]} size = {0.06} color = {'#0080ff'} text = {props.title} />
        
        <mesh>
          {/* divider : position and the size can be adjusted but I think they are fixed. */}
          <RoundBox size = {[GOLDENRATIO/2 - 0.2, 0.005, 0.005]} position = {[0, -0.4, 0.0055]} metalness = {0.2} roughness = {"#aaaaaa"} radius = {[0]} colors = {['white', 'white']} />
        </mesh>

        {/* main back board */}
        <mesh>
          <RoundBox size = {[GOLDENRATIO/2, 1, 0.01]} radius = {0.005} position = {[0, 0, 0]} metalness = {0.2} colors={['#00ffff', '#049ef4']} />
        </mesh>
      </group>
    )
  }

export default Frame