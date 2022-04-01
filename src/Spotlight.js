import { SpotLight } from 'three';
import { useMemo } from 'react';


export const Spotlight = ({posX, posY, posZ}) => {
  const light = useMemo(() => new SpotLight(0xffffff), [])

  return (  
    <>
     <primitive object={light} castShadow penumbra={0.2} position={[posX, posY+10, posZ]} />
     <primitive object={light.target} position={[posX, posY, posZ]} />
    </>
  )
}