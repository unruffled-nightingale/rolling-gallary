import { useEffect } from "react"

const CONTROLS = {
  KeyW: 'moveForward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight'
}


const DesktopControls = ({ setMovement }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (CONTROLS[e.code]) setMovement((state) => ({...state, [CONTROLS[e.code]]: true}))
    }
    const handleKeyUp = (e) => {
        if (CONTROLS[e.code]) {
            setMovement((state) => ({...state, [CONTROLS[e.code]]: false}))
        }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
    }
}, [ setMovement ])
  
  return (
    <></>
  );
}

export default DesktopControls