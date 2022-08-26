import musicsCards from "./components/musicCards/musicsCardsCreation.js";
import { plyPus } from "./components/currentMusic/playPause.js";
import { plyPusOfMiddleBtn } from "./components/currentMusic/playpauseOfMiddleBtn.js";
import { progressChanges } from "./components/currentMusic/progressBar.js";
import { playAndPauseMatch } from "./components/currentMusic/playAndPauseMatch.js";
import { shuffleMusic } from "./components/currentMusic/shuffle.js";
import { volumeChange } from "./components/currentMusic/volume.js";
import { mute } from "./components/currentMusic/muteVolume.js";

const playPause = document.querySelector("#plyPause");
const musicRange = document.getElementById("music-range");
const middlePause = document.getElementById("middle-pause");
const shuffle = document.getElementById("shuffle");
const volumeInput = document.getElementById("volume");
const muteAudio = document.getElementById("mute");

playPause.addEventListener("click", plyPus);
playPause.addEventListener("click", playAndPauseMatch);

musicsCards();

middlePause.addEventListener("click", plyPusOfMiddleBtn);
musicRange.addEventListener("change", progressChanges);

shuffle.addEventListener("click", shuffleMusic);

volumeInput.addEventListener("change", volumeChange);

muteAudio.addEventListener("click", mute);

