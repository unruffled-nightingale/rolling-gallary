import { useFrame, useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useKeyboard } from "./useKeyboard";
import { useRecoilState } from "recoil";
import { ballPositionState } from "./gameState";
import { useSphere } from '@react-three/cannon'
import { useRef } from "react"
import { Shadow } from '@react-three/drei'

function Ball(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const [ref, api] = useSphere(() => ({
    args: [1, 64],
    mass: 1,
    position: [0, 1, 0],
    angularDamping: 0.9,
  }))
  const shadowRef = useRef();
  const pos = useRef([-20, 1, 20])
  const cameraOffset = {x: 15, z: 10, y: 15}
  const camera = useThree((state) => state.camera)
  const colorMap = useLoader(TextureLoader, 'assets/eye.png')
  const shadowMap = useLoader(TextureLoader, 'assets/shadow.png')
  const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboard();
  const [_, setBallPosition] = useRecoilState(ballPositionState);

  useFrame((state, delta) => {
    api.applyImpulse([(moveForward - moveBackward) , 0, (moveRight - moveLeft)], [0,0,0])
    api.position.subscribe(p => pos.current = p)
    camera.position.set(pos.current[0] - cameraOffset.x, cameraOffset.y, pos.current[2] - cameraOffset.z );
    setBallPosition({
        x: pos.current[0],
        z: pos.current[2]
    })
    // shadowRef.current.position.x = pos.current[0] - 0.5
    // shadowRef.current.position.z = pos.current[2] 
  })

  return (  
    <>
    <mesh
      {...props}
      castShadow
      ref={ref}
      scale={1}>
      <sphereGeometry args={[1, 32]} />
      <meshStandardMaterial 
        // map={colorMap}
        color="white"
        shininess={50}
        specular="white"
      />
    </mesh>
    {/* <mesh
      position={[20,0.3,20]}
      rotation={Math.PI * -.5}
      ref={shadowRef}
      // scale={[2, 2, 2]}
      >
      <planeBufferGeometry attach="geometry"  args={[10,  10]} />
      <meshStandardMaterial 
        map={shadowMap} 
        // color="/red"
        // transparent="true"
      />
    </mesh> */}
    {/* <Shadow
      position-y={0.3}
      transparent={true}
      ref={shadowRef}
      scale={[2, 2, 2]} 
      rotation-x={-Math.PI / 2}
      color="black"
      opacity={1}
  /> */}
  </>
  )
}

export default Ball;