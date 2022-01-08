// display js
import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { GRID_SUM, outsideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector("#game-board");
const timeDisplay = document.querySelector(".time");
let timeScore = 0;
gameBoard.style.setProperty("--grid", GRID_SUM);

function main(currentTime) {
  if (gameOver) {
    if (confirm("You louse, press OK for restart")) {
      window.location = "./";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondTime = (currentTime - lastRenderTime) / 1000;
  if (secondTime < 1 / SNAKE_SPEED) return;

  // console.log("render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  //   console.log(getSnakeHead());
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
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (timeScore < 1) {
        time();
      }
      break;
    case "ArrowDown":
      if (timeScore < 1) {
        time();
      }
      break;
    case "ArrowLeft":
      if (timeScore < 1) {
        time();
      }
      break;
    case "ArrowRight":
      if (timeScore < 1) {
        time();
      }
      break;
  }
  //   console.log(inputDerection);
});
