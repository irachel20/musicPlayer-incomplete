const audio = document.querySelector("#track");
const muteAudio = document.getElementById("mute");

import { volumeChange } from "./volume.js";

export function mute() {
  if (audio.muted) {
    audio.muted = false;
    volumeChange();
    muteAudio.setAttribute("class", "fa fa-volume-up fs-2  ms-19 mt-2");
  } else {
    audio.muted = true;
    audio.volume = 0;
    muteAudio.setAttribute("class", "fa fa-volume-off ms-19 fs-2 mt-2 me-3");
  }
};
