import {PROGRESS} from "../types/common.js";

function getForwardOrStop(): PROGRESS {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber >= 4 ? PROGRESS.FORWARD : PROGRESS.STOP;
}

export default {
    getForwardOrStop,
}
