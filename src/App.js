import World from './components/World/World.js';
import {Loader} from './components/Loader/Loader.js';
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
    }, 2000);
  }, [])

  return (
    <div className="App">
      <Hud picture={hudKey} invisible={moved} setMovement={setMovement} loaded={loaded}/>      
      <Loader loaded={loaded}/>
      <World data={data} setHudKey={setHudKey} movement={movement} setLoaded={setLoaded}/>
    </div>
  );
}

export default App;
