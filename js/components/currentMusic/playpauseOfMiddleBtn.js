const middlePause = document.getElementById("middle-pause");
const audio = document.querySelector("#track");

import { plyPus } from "./playPause.js";

export function plyPusOfMiddleBtn() {
  plyPus();
  if (audio.paused) {
    middlePause.setAttribute("class", "fa fa-play");
    middlePause.style.fontSize = "2.2rem";
  } else {
    middlePause.setAttribute("class", "fa fa-pause");
    middlePause.style.fontSize = "2rem";
  }
}

