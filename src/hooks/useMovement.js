import {useEffect, useState} from "react"

export const useMovement = () => {

    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false
    })

    const [moved, setMoved] = useState(false)

    useEffect(() => {
        if (moved) return
        if (Object.values(movement).includes(true)) setMoved(true)
    }, [ movement, moved ])


    return [ movement, setMovement, moved ]
}