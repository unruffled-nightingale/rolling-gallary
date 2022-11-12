import World from './components/World/World.js';
import { useState } from "react"
import './App.css'
import Hud from './components/Hud/Huds.js';
import {useEffect} from 'react';
import { useMovement } from './hooks/useMovement.js';
import {data} from './data.js';

function App() {

  const [hudKey, setHudKey] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  const [movement, setMovement, moved] = useMovement();
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 100);
  }, [])

  return (
    <div className="App">
      <Hud picture={hudKey} invisible={moved} setMovement={setMovement}/>      
      <div  className={"curtain " + (loaded ? 'fadeOut' : "")} ></div>
      <World data={data} setHudKey={setHudKey} movement={movement} moved={moved}/>

    </div>
  );
}

export default App;
