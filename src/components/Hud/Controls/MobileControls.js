import { Joystick } from 'react-joystick-component';
import "./MobileControls.css"

const MobileControls = ({ setMovement }) => {

  const handleMove = (e) => {
    setMovement((state) => ({...state, ...{
      moveForward: e.y > 10, 
      moveBackward: e.y < -10, 
      moveLeft: e.x < -10,
       moveRight: e.x > 10
      }}))

  }

  const handleStop = (e) => {
    setMovement((state) => ({...state, ...{moveForward: false, moveBackward: false, moveLeft: false, moveRight: false}}))
  }
  
  return (
    <div className="MobileControls">
      <Joystick size={60} throttle={100} baseColor="black" stickColor="white" move={handleMove} stop={handleStop}/>
    </div>
  );
}

export default MobileControls