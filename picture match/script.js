const startGame = document.querySelector("#start");
const card = document.querySelectorAll(".card");
const shuffleCard = shuffle(card);
const visible = document.querySelectorAll(".visible");
const gameBoard = document.querySelector(".game-board");
let flipCount = 0;
const flipDisplay = document.querySelector(".flip");
let timeScore = 0;
const timeDisplay = document.querySelector(".time-remaining");
const imgSrc = [
  "./img/wp10.png",
  "./img/wp12.png",
  "./img/wp14.png",
  "./img/wp2.png",
  "./img/wp4.png",
  "./img/wp7.png",
  "./img/wp16.png",
  "./img/wp17.png",
  "./img/wp10.png",
  "./img/wp12.png",
  "./img/wp14.png",
  "./img/wp2.png",
  "./img/wp4.png",
  "./img/wp7.png",
  "./img/wp16.png",
  "./img/wp17.png",
];
const newImgSrc = shuffle(imgSrc);

function removeVisible(element) {
  element.classList.remove("visible");
}
function addVisible(element) {
  element.classList.add("visible");
}
function addMatch(element) {
  element.classList.add("match");
}
function removeMatch(element) {
  element.classList.remove("match");
}
function cekMatch(element) {
  // if(element.length > 1){
  return element[0] === element[1];
  // }
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
startGame.addEventListener("click", () => {
  removeVisible(startGame);
  time();
});

card.forEach((row) => {
  row.addEventListener("click", () => {
    addVisible(row);
    flip();
    main();
    endGame();
  });
  //   row.childNodes[3].childNodes[1].src = imgSrc[0];
  // console.log(row.childNodes[3].childNodes[1].src);
});
for (let x = 0; x < card.length; x++) {
  card[x].childNodes[3].childNodes[1].src = newImgSrc[x];
}
function main() {
  const visible = document.querySelectorAll(".visible");
  const cardImg = [];
  if (visible.length > 1) {
    visible.forEach((row) => {
      cardImg.push(row.childNodes[3].childNodes[1].src);
    });
  }
  if (cardImg.length > 1) {
    visible.forEach((row) => {
      // console.log(cekMatch(row));
      if (cekMatch(cardImg)) {
        // console.log('match');
        addMatch(row);
        removeVisible(row);
      } else {
        // addMatch(row)
        // addVisible(row)

        setTimeout(() => {
          removeVisible(row);
          console.log("nomatch");
        }, 600);

        // removeMatch(row)
      }
    });
  }
}
function cekWin(cardMatch) {
  if (cardMatch.length > 14) {
    return true;
  }
}
// card.forEach((row) => {
console.log(card.length);

// });
let endGame = () => {
  const cardMatch = document.querySelectorAll(".match");
  //   console.log(cardMatch.length);
  if (cekWin(cardMatch)) {
    setTimeout(() => {
      if (confirm("You Win klik OK for restart")) {
        window.location = "./";
      } else {
        stopProp(e);
      }
    }, 700);
  }

  //   if (cekWin) {
  //     // console.log("You Win");
  //   }
};
function flip() {
  flipCount += 1;
  flipDisplay.innerText = flipCount;
}
function stopProp(e) {
  e.stopImmediatePropagation();
}

function time() {
  setInterval(() => {
    timeScore += 1;
    let timeNow = "";
    let second = 0;
    let menit = 0;
    let jam = 0;
    if (timeScore < 60) {
      second = timeScore;
      timeNow = second + "s";
    }
    if (timeScore >= 60 && timeScore < 3600) {
      second = timeScore % 60;
      menit = Math.floor(timeScore / 60);
      timeNow = menit + "m" + second + "s";
    }
    if (timeScore >= 3600) {
      second = timeScore % 60;
      menit = Math.floor((timeScore % 3600) / 60);
      jam = Math.floor(timeScore / 3600);
      timeNow = jam + "h" + menit + "m" + second + "s";
    }
    timeDisplay.innerText = timeNow;
    // console.log(timeNow);
  }, 1000);
}
// if(visible.length > 1){
//     visible.forEach(row=>{

//         removeVisible(row)
//     })
// }
// console.log(cardImg);
