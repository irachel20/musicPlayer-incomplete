const musicProgressBar = document.querySelector(".bar");
const currentTime = document.querySelector(".current-time");
const audio = document.querySelector("#track");

import { cleanTime } from "./cleanTime.js";

export function intervalOfCurrentSong() {
  setInterval(() => {
    currentTime.innerHTML = cleanTime(audio.currentTime);
    const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
    musicProgressBar.style.width = musicProgressBarWidth + "%";
  }, 1000);
};
