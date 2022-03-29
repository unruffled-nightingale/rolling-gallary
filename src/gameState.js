import { atom } from "recoil";

export const ballPositionState = atom({
    key: "ballPosition", // unique ID (with respect to other atoms/selectors)
    default: { x: -20, z: 20 }, // default value (aka initial value)
});
