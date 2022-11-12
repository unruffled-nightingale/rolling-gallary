import { Suspense } from 'react'
import Ball from './Ball.js';
import Box from './Box.js';
import Plane from './Plane.js';
import Wall from './Wall.js';
import { Canvas } from '@react-three/fiber'
import { RecoilRoot } from "recoil";
import { Physics } from '@react-three/cannon'
import {memo} from 'react';

const SHOW_MARKERS = false

function World({data, setHudKey, movement, setLoaded}) {
  const cameraPosition = [-40, 105, 0]
  
  return (
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: cameraPosition }}>
        <Physics
          gravity={[0, -9.81, 0]}
          defaultContactMaterial={{
            friction: 9,
            restitution: 0.7,
            contactEquationStiffness: 1e9,
            contactEquationRelaxation: 4,
            frictionEquationStiffness: 1e9,
            frictionEquationRelaxation: 4,
          }}>
          <RecoilRoot>
            <Suspense fallback={null}>
              <Wall rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[200, 1, 1]} position={[-100, 0, 0]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, -100]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, 100]}/>
              <Wall rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[200, 1, 1]} position={[100, 0, 0]}/>
              <Ball setHudKey={setHudKey} data={data} movement={movement} />
              {SHOW_MARKERS && <Box data={data} />}
              <Plane setLoaded={setLoaded}/>
            </Suspense>
          </RecoilRoot>
        </Physics>
      </Canvas>
  );
}

export default memo(World);
