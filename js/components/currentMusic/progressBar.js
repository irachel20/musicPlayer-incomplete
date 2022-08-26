const musicProgressBar = document.querySelector(".bar");
const audio = document.querySelector("#track");

export function progressChanges(e) {
  audio.currentTime = e.target.value;
  const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
  musicProgressBar.style.width = musicProgressBarWidth + "%";
}
