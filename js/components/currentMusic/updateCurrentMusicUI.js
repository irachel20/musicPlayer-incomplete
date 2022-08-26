import { playedAudio } from "./playedAudio.js";

const currentMusicCover = document.querySelector(".current-music-image");
const currentArtist = document.querySelector(".current-singer-name");
const currentSongName = document.querySelector(".current-song-name");
const audio = document.querySelector("#track");

export function updateCurrentMusicUI(currentMusic){
  
    currentMusicCover.style.backgroundImage = `url(${currentMusic.cover})`;
    currentArtist.innerHTML = currentMusic.artist;
    currentSongName.innerHTML = currentMusic.name;
    audio.src = currentMusic.audio;
  
    playedAudio()
  }