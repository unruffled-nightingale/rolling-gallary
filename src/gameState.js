import { atom } from "recoil";

export const ballPositionState = atom({
    key: "ballPosition", // unique ID (with respect to other atoms/selectors)
    default: { x: -120, z: -40 }, // [-120, 1, -40]default value (aka initial value)
});
