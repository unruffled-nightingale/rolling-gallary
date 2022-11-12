import { usePlane } from '@react-three/cannon'

function Wall({position, scale, rotation}) {
  usePlane(() => ({ rotation: rotation, position: position, scale: scale, mass: 0 }))

  return (  
    <mesh position={position} scale={scale} rotation={rotation}>
      <boxGeometry />
      <meshBasicMaterial 
        color={"white"}
        toneMapped={false}
      />
    </mesh>
  )
}

export default Wall;