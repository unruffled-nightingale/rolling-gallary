import { useFrame, useThree } from '@react-three/fiber'
import { useTexture , Shadow} from '@react-three/drei'
import { useKeyboard } from "./useKeyboard";
import { useRecoilState } from "recoil";
import { ballPositionState } from "./gameState";
import { useSphere } from '@react-three/cannon'
import { useRef } from "react"


function Ball(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const initPosition = [-120, 1, -40]
  const cameraOffset = {x: 15,  y: 15, z: 10}

  const [ref, api] = useSphere(() => ({
    args: [1, 64],
    mass: 3,
    position: initPosition,
    angularDamping: 0.5,
    rotation: [2.7,0.4,-0.7]
  }))

  const [ballPos, setBallPosition] = useRecoilState(ballPositionState);
  const pos = useRef(initPosition)

  const camera = useThree((state) => state.camera)

  const colorMap = useTexture('assets/eye2.png');
  const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboard();

  useFrame((state, delta) => {
    api.applyImpulse([(moveForward - moveBackward) , 0, (moveRight - moveLeft)], [0,0,0])
    api.position.subscribe(p => pos.current = p)
    camera.position.set(pos.current[0] - cameraOffset.x, cameraOffset.y, pos.current[2] - cameraOffset.z );
    console.log(camera.position)
    setBallPosition({
        x: Number(pos.current[0]),
        z: Number(pos.current[2])
    })
    pos.current[0] != -120 || pos.current[2] != -40 ? props.setBallMoved(true) : props.setBallMoved(false) 
  })

  return (  
    <>
     {/* <Spotlight posX={ballPos.x} posY={0} posZ={ballPos.z}/> */}
    <mesh
      castShadow
      {...props}
      ref={ref}
      scale={1}>
      <sphereGeometry args={[1, 64]} />
      <meshBasicMaterial 
        map={colorMap}
        toneMapped={false}
      />
    </mesh>
  </>
  )
}

export default Ball;