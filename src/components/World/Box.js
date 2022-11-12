import { memo } from 'react';

const Box = ({ data }) => {

  return (
    Object.keys(data).map((i) => {
      let marker = data[i]
      return (
        <mesh
          key={i}
          position={[marker.x, 0, marker.z]}
          scale={1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color='orange' />
        </mesh>
      )
    })
  )
}

export default memo(Box);