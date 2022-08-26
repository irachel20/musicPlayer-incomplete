import musics from "../../../data/musics.js";
import setCurrentMusic from "../currentMusic/setCurrentMusic.js";
import { musicCard } from "./musicCard.js";
const musicCards = document.querySelector(".music-cards");

function musicsCards() {
  musics().forEach((song) => {
    musicCards.innerHTML += musicCard(song);
    setCurrentMusic();
  });
}

export default musicsCards;
