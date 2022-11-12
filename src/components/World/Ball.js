import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { useSphere } from '@react-three/cannon'
import { useRef } from 'react';


function Ball({ data, setHudKey, movement }) {

  const counter = useRef(0);
  const cameraOffset = { x: 3, y: 30, z: -1 }
  const ballPosRef = useRef([-50, 1, -35])
  let x;
  let z;
  const colorMap = useTexture('assets/ball.png');
  const { moveForward, moveBackward, moveLeft, moveRight } = movement;

  const [ref, api] = useSphere(() => ({
    args: [1, 64],
    mass: 3,
    position: [ballPosRef.current[0], ballPosRef.current[1], ballPosRef.current[2]],
    angularDamping: 0.5,
    rotation: [3.2, 1.5, 0]
  }))

  useFrame((state, delta) => {
    counter.current++
    api.applyImpulse([(moveForward - moveBackward), 0, (moveRight - moveLeft)], [0, 0, 0])
    api.position.subscribe(p => ballPosRef.current = p)
    x = ballPosRef.current[0]
    z = ballPosRef.current[2]
    state.camera.position.set(x - cameraOffset.x, cameraOffset.y, z - cameraOffset.z);

    if (counter.current % 10 === 0) {
      let nearest = data.filter(i => Math.abs(i.x - x) < 5 && Math.abs(i.z - z) < 5)
      if (nearest.length > 0) {
        setHudKey(nearest[0])
      } else {
        setHudKey(undefined)
      }
    }
  })

  return (
    <>
      <mesh
        castShadow
        ref={ref}
        scale={1.5}>
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