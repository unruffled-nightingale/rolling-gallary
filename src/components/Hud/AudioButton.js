import './AudioButton.css'
import { useEffect, useState, useRef } from 'react';

const AudioButton = () => {

  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) audioRef.current.pause()
    if (isPlaying) audioRef.current.play()
  }, [isPlaying])


  return (
    <>
    <input className={"AudioButton"} 
    alt="audio"
    type="image" 
      src={isPlaying ? "/assets/speaker_on.png" : "/assets/speaker_off.png"}
       onClick={() => setIsPlaying(!isPlaying)} />
       <audio ref={audioRef} src={"/sound.mp3"} autoPlay/>
       </>
  );
}

export default AudioButton;
