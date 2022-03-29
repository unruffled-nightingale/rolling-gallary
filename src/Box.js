import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useIsNear } from './isNear'
import { useRecoilValue } from "recoil";
import { ballPositionState } from './gameState';

const Box = ({position, setHudKey, hudKey}) => {
  const ref = useRef()
  const ballPosition = useRecoilValue(ballPositionState)
  const isNear = useIsNear(ballPosition, {x:0,y:0,z:0}, 5);
  useFrame((state, delta) => isNear ? setHudKey(hudKey) : setHudKey(undefined))
  return (
    <mesh
      {...position}
      ref={ref}
      scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

export default Box;