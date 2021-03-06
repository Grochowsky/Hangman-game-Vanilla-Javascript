const APIurl = "https://random-word-api.herokuapp.com/word";

let password;
const container = document.querySelector(".container");

async function loadPassword() {
  const response = await fetch(APIurl);
  fetch(APIurl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      const p = document.querySelectorAll("p");
      const haslo = data[0].toUpperCase();
      let ukryte;
      const hasloContainer = document.querySelector(".haslo1");
      let newOne = [];
      ukryte = haslo.split("");

      const podest = document.querySelector(".podest");
      const pion = document.querySelector(".pion");
      const poziom = document.querySelector(".poziom");
      const lina = document.querySelector(".lina");
      const glowa = document.querySelector(".glowa");
      const tulow = document.querySelector(".tulow");
      const preka = document.querySelector(".preka");
      const lreka = document.querySelector(".lreka");
      const pnoga = document.querySelector(".pnoga");
      const lngoa = document.querySelector(".lnoga");

      function invisiblePassword() {
        for (let x = 0; x < ukryte.length; x++) {
          newOne[x] = " _ ";
        }
        console.log(newOne);
        hasloContainer.innerHTML = newOne.join("");
      }
      invisiblePassword();

      console.log(ukryte);

      let badClickCount = 0;

      p.forEach((element) => {
        element.addEventListener("click", () => {
          let checkTheLetter = 0;
          for (let i = 0; i <= haslo.length; i++) {
            if (element.innerHTML == haslo[i]) {
              newOne[i] = element.innerHTML;
              hasloContainer.innerHTML = newOne.join("");
              element.style.backgroundColor = "green";
              checkTheLetter = 1;
              console.log(newOne);
              console.log(ukryte);
            }
          }
          if (checkTheLetter == 0) {
            if (element.style.backgroundColor === "red") {
              console.log(element);
            } else {
              element.style.backgroundColor = "red";
              badClickCount++;
              console.log(`${badClickCount}`);
            }
          }
          switch (badClickCount) {
            case 1:
              podest.style.display = "block";
              break;
            case 2:
              pion.style.display = "block";
              break;
            case 3:
              poziom.style.display = "block";
              break;
            case 4:
              lina.style.display = "block";
              break;
            case 5:
              glowa.style.display = "block";
              break;
            case 6:
              tulow.style.display = "block";
              break;
            case 7:
              preka.style.display = "block";
              break;
            case 8:
              lreka.style.display = "block";
              break;
            case 9:
              pnoga.style.display = "block";
              break;
            case 10:
              lngoa.style.display = "block";
              break;
          }
          if (badClickCount == 10) {
            console.log("end");
            const endGame = () => {
              const endGameDiv = document.createElement("div");
              endGameDiv.innerHTML = ` 
                       <div class="dark"></div>
                        <div class="endGameContainer">
                        <h1>YOU LOSE</h1>
                        <button class="restartGame">RESTART GAME</button>
                        </div>
                       `;
              container.appendChild(endGameDiv);
              const restartGame = document.querySelector(".restartGame");
              restartGame.addEventListener("click", () => {
                location.reload();
              });
            };
            endGame();
          }
          if (newOne.toString() === ukryte.toString()) {
            const winGame = document.createElement("div");
            winGame.innerHTML = ` <div class="dark"></div>
                   <div class="endGameContainer">
                   <h1>YOU WIN</h1>
                   <button class="restartGame">RESTART GAME</button>
                   </div>`;
            container.appendChild(winGame);
            const restartGame = document.querySelector(".restartGame");
            restartGame.addEventListener("click", () => {
              location.reload();
            });
          }
        });
      });
    });
}

loadPassword();
