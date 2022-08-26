import musics from "../../../data/musics.js";
import { playedAudio } from "./playedAudio.js";
import { updateCurrentMusicUI } from "./updateCurrentMusicUI.js";

const musicCards = document.querySelector(".music-cards");
const currentMusicCover = document.querySelector(".current-music-image");
const currentArtist = document.querySelector(".current-singer-name");
const currentSongName = document.querySelector(".current-song-name");
const audio = document.querySelector("#track");
const repeating = document.getElementById("repeat");

const nextBtn = document.getElementById("right-angle");
const prevBtn = document.getElementById("left-angle");

function setCurrentMusic() {
  [...musicCards.children].forEach((songElement) => {
    songElement.addEventListener("click", () => {
      indexOfCurrentMusic = musics().findIndex(
        (item) => item.id === parseInt(songElement.dataset.id)
      );

      const currentMusic = musics().filter(
        (item) => item.id === parseInt(songElement.dataset.id)
      )[0];

      currentMusic.active = true;

      repeating.addEventListener("click", () => {
        if (currentMusic.active) {
          updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
        }
      });

      currentMusicCover.style.backgroundImage = `url(${currentMusic.cover})`;
      currentArtist.innerHTML = currentMusic.artist;
      currentSongName.innerHTML = currentMusic.name;
      audio.src = currentMusic.audio;

      playedAudio();
    });
  });
}
export default setCurrentMusic;

let indexOfCurrentMusic = 0;
function nextHandeler() {
  if (indexOfCurrentMusic === musics().length - 1) {
    indexOfCurrentMusic = 0;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  } else {
    indexOfCurrentMusic++;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  }
}

nextBtn.addEventListener("click", nextHandeler);
prevBtn.addEventListener("click", () => {
  if (indexOfCurrentMusic === 0) {
    indexOfCurrentMusic = 15;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  } else {
    indexOfCurrentMusic--;
    updateCurrentMusicUI(musics()[indexOfCurrentMusic]);
  }
});
audio.onended = nextHandeler;
