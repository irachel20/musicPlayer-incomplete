const playPause = document.querySelector("#plyPause");
const audio = document.querySelector("#track");

export function plyPus() {
  if (audio.paused) {
    audio.play();
    playPause.src = "./images/pause.svg";
    playPause.style.marginRight = "2.8rem";
  } else {
    audio.pause();
    playPause.src = "./images/plyply.svg";
    playPause.style.marginRight = "0rem";
  }
}
