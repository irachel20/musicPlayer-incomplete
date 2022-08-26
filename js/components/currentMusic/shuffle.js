import { updateCurrentMusicUI } from "./updateCurrentMusicUI.js";
import musics from "../../../data/musics.js";

export function shuffleMusic(){
    const randomMusic = Math.floor(Math.random()*musics().length);
    updateCurrentMusicUI(musics()[randomMusic]);
  };