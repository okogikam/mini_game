const dino = document.querySelector("#dino");
const caktus = document.querySelector("#caktus");
let skorNow = document.querySelector(".skor");
let skor = 0;
let lastRenderTime = 0;
let timeScore = 0;
const timeDisplay = document.querySelector(".time");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}
function main(currentTime) {
  skorNow.innerText = skor;
  // get Y dino position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  //get x caktus position
  let caktusLeft = parseInt(
    window.getComputedStyle(caktus).getPropertyValue("left")
  );

  window.requestAnimationFrame(main);
  const secondTime = (currentTime - lastRenderTime) / 1000;
  if (secondTime < 1 / 2) return;

  if (caktusLeft < 50 && caktusLeft > 0 && dinoTop > 140) {
    caktus.classList.remove("block");
    if (confirm("You are death, klik OK for restart game")) {
      window.location = "./";
    }
    document.addEventListener("click", stopProp, { capture: true });
    document.addEventListener("keydown", stopProp, { capture: true });
    return;
  }
}
function score() {
  let caktusLeft = parseInt(
    window.getComputedStyle(caktus).getPropertyValue("left")
  );
  setTimeout(() => {
    if (caktusLeft < 200) {
      skor += 1;
      console.log(caktusLeft);
    }
  }, 300);
  console.log(caktusLeft);
}

window.requestAnimationFrame(main);
// let caktusLeft = parseInt(
//   window.getComputedStyle(caktus).getPropertyValue("left")
// );
// console.log(caktusLeft);

document.addEventListener("click", () => {
  if (caktus.classList != "block") {
    caktus.classList.add("block");
    time();
  }
  jump();
  score();
});
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (caktus.classList != "block") {
        caktus.classList.add("block");
        time();
      }
      jump();
      score();
      break;
  }
});
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
