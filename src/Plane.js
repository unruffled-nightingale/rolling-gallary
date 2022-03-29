import { usePlane } from '@react-three/cannon'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

function Plane() {
  usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], mass: 0 }))
  const colorMap = useLoader(TextureLoader, 'assets/background.jpeg')

  return (
    <mesh receiveShadow scale={[200, 0.1, 200]} position={[0,0,0]} opacity={0.0}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        map={colorMap}
        // transparent={true} 
        color="white"
        shininess={10}
        />
    </mesh>
  )
}

export default Plane;