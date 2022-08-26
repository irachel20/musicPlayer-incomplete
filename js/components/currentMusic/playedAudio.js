import { cleanTime } from "./cleanTime.js";
import { intervalOfCurrentSong } from "./intervalOfcurrentSong.js";

const audio = document.querySelector("#track");
const playPause = document.querySelector("#plyPause");
const fullTime = document.querySelector(".full-time");
const musicRange = document.getElementById("music-range");
const middlePause = document.getElementById("middle-pause");

export function playedAudio() {
  audio.play().then(() => {
    playPause.src = "./images/pause.svg";
    playPause.style.marginRight = "2.8rem";
    middlePause.setAttribute("class", "fa fa-pause");
    middlePause.style.fontSize = "2rem";

    intervalOfCurrentSong();

    fullTime.innerHTML = cleanTime(audio.duration);

    musicRange.max = audio.duration;
  });
}
