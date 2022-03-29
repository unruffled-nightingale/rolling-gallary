import {useEffect, useState} from "react"

export const useIsNear = (target, position, distance) => {

    const [isNear, setIsNear] = useState(false)

    useEffect(() => {
        let x = target.x - position.x
        let z = target.z - position.z
        Math.pow(x,2) + Math.pow(z,2) < Math.pow(distance,2) ? setIsNear(true) : setIsNear(false);
    }, [target])

    return isNear
}