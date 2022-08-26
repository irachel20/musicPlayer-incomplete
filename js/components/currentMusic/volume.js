const audio = document.querySelector("#track");
const volumeInput = document.getElementById("volume");


export function volumeChange() {
  audio.volume  = volumeInput.value / 10;
  localStorage.setItem('volume' ,JSON.stringify(audio.volume));
};


