export const musicCard = (song) => `
<div  data-id='${song.id}' 
class="card box-shadow-3  rounded-both-4 border-0 mb-5" style="width: 30rem " >
            <img
              class=" img-card rounded-top-4" style="width: 30rem " 
              src='${song.cover}'
            ></img>
            
            <div
              class="bg-gray rounded-bottom-4 body-of-card d-flex flex-column align-items-center gap-2"
            >
            <img 
            src="./images/play-btn.png"
              class="ply-btn rounded-circle border-0 translating2-y"
            ></img>
              <div
                class="d-flex justify-content-start align-items-center align-self-start translating2-y ps-4 "
              >
                <i class="fa fa-microphone me-3 fs-4"></i>
                <p class="card-text fs-3 d-flex text-center">
                  ${song.artist}
                </p>
              </div>
              <div
                class="d-flex justify-content-start align-items-center align-self-start translating2-y ps-4"
              >
                <i class="fa fa-music me-3 fs-4"></i>
                <p class="card-text fs-3 d-flex text-center">
                  ${song.name}
                </p>
              </div>
            </div>
            </div>`;
