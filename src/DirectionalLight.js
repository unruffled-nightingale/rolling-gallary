import { DirectionalLight } from 'three';
import { useMemo } from 'react';

export const Directionallight = () => {
  const light = useMemo(() => new DirectionalLight(0xffffff), [1, 100])
  light.shadow.mapSize.width = 5000
  light.shadow.mapSize.height = 5000
  light.shadow.camera.near = 0.1
  light.shadow.camera.far = 500
  light.shadow.camera.top = 100
  light.shadow.camera.right = 100
  light.shadow.camera.left = - 100
  light.shadow.camera.bottom = - 100

  return (
    <primitive object={light} position={[10, 10, 10]} />
  )
}
