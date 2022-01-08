const btnRestart = document.querySelector(".btn-restart");
const btnPriview = document.querySelector(".btn-priview");
const btnClose = document.querySelector(".btn-close");
const btnStart = document.querySelector(".btn-start");
const priview = document.querySelector("aside");
const start = document.querySelector(".start");
const timeDisplay = document.querySelector("#time");
let timeScore = 0;

btnRestart.addEventListener("click", () => {
  window.location = "./";
});
btnPriview.addEventListener("click", () => {
  priview.classList.add("show");
});
btnClose.addEventListener("click", () => {
  priview.classList.remove("show");
});
btnStart.addEventListener("click", () => {
  start.classList.add("hidden");
  time();
});
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
