import { Suspense } from 'react'
import Ball from './Ball.js';
import Box from './Box.js';
import Plane from './Plane.js';
import Wall from './Wall.js';
import Hud from './Hud.js';
import IntroBanner from './IntroBanner.js';
import { useState } from "react"
import { Canvas } from '@react-three/fiber'
import { RecoilRoot } from "recoil";
import { Physics } from '@react-three/cannon'
import './App.css'

function App() {

  const [hudKey, setHudKey] = useState(undefined);
  const [ballMoved, setBallMoved] = useState(false);

  const data = {
    "face": { filename: "face.svg", price: 50, title: "face" }
  }

  return (
    <div className="App">
      <Hud data={data[hudKey]} setHudKey={setHudKey}/>
      <IntroBanner visible={!ballMoved}/>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [-20, 10, 0] }}>
        <Physics
          gravity={[0, -9.81, 0]}
          defaultContactMaterial={{
            friction: 9,
            restitution: 0.7,
            contactEquationStiffness: 1e9,
            contactEquationRelaxation: 4,
            frictionEquationStiffness: 1e9,
            // frictionEquationRelaxation: 4,
          }}
        >
          <RecoilRoot>
            <Suspense fallback={null}>
              <Wall rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[200, 1, 1]} position={[-100, 0, 0]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, -100]}/>
              <Wall rotation={[-Math.PI / 2, 0,0]} scale={[200, 1, 1]} position={[0, 0, 100]}/>
              <Wall rotation={[-Math.PI / 2, 0,-Math.PI / 2]} scale={[200, 1, 1]} position={[100, 0, 0]}/>
              <Ball position={[0, 2, 0]} setBallMoved={setBallMoved} ballMoved={ballMoved}/>
              <Box position={[0, 2, 0]} setHudKey={setHudKey} hudKey={"face"} />
              <Plane />
            </Suspense>
          </RecoilRoot>
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
