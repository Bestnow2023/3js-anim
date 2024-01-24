import React, {
  forwardRef,
} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { geometry } from 'maath'
import Frame from './Components/Frame'
import ReflectorPlane from './Components/ReflectorPlane'

extend(geometry)

const MyScene = forwardRef(({}, _) => {
const light = React.useRef();

useFrame(({ clock}) => {
  const a = clock.getElapsedTime();
  light.current.position.y = Math.sin( a ) / 2.5;
  light.current.position.x = Math.cos( a ) / 2.5;
})
  return (
    <>
      <Frame title = {"Best Tool"} content = {"Easy to use Video Maker and Video Creator"} number = {"1"} />
      <Frame title = {"Nice Work"} content = {"Ideal for small business with tight budgets and schedules"} number = {"2"} position = {[0, 0, -0.1]}/>
      <Frame title = {"Cool Design"} content = {"Customize your video to match your brand"} number = {"3"} position = {[0, 0, -0.15]}/>
      <pointLight ref={light} intensity={0.8} position={[0, 0.1, 0.55]} />
      <ReflectorPlane />
      <CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2} />
    </>
  )
})

export default function App() {
  return (
    <Canvas 
      shadows
      camera={{ position: [0, 0, 8], fov: 30 }} 
      style={{height: '100vh'}} 
      gl={{
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    }}>
    <ambientLight intensity={0.8} color={"#ffffff"}/>
      <color attach="background" args={["#fee"]} />
      <MyScene />
    </Canvas>
  )
}

