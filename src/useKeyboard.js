import {useEffect, useState} from "react"

const CONTROLS = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight'
}

export const useKeyboard = () => {

    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false
    })

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
    }, [])

    return movement
}