//UI/display

import {
  TILE_STATUS,
  createBoard,
  marktile,
  revealtile,
  checkWin,
  cheskLose,
} from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINE = 10;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINE);
const boardElement = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count]");
const messageText = document.querySelector(".subtext");
const btnReset = document.querySelector(".btn-reset");
const btnStart = document.querySelector(".btn-start");
const start = document.querySelector(".start");
const timeDisplay = document.querySelector("[data-time]");
let timeScore = 0;

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
    tile.element.addEventListener("click", () => {
      revealtile(board, tile);
      checkGameEND();
    });
    tile.element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      marktile(tile);
      listMineLeft();
    });
  });
});
btnReset.addEventListener("click", () => {
  window.location = "./";
});
btnStart.addEventListener("click", () => {
  start.classList.remove("show");
  time();
});
boardElement.style.setProperty("--size", BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINE;

function listMineLeft() {
  const marktilecount = board.reduce((count, row) => {
    return (
      count + row.filter((tile) => tile.status === TILE_STATUS.MARKED).length
    );
  }, 0);

  minesLeftText.textContent = NUMBER_OF_MINE - marktilecount;
}

function checkGameEND() {
  const win = checkWin(board);
  const lose = cheskLose(board);

  if (win || lose) {
    boardElement.addEventListener("click", stopProp, { capture: true });
    boardElement.addEventListener("contextmenu", stopProp, { capture: true });
  }

  if (win) {
    messageText.textContent = "You Win";
  }
  if (lose) {
    messageText.textContent = "You Lose";
    board.forEach((row) => {
      row.forEach((tile) => {
        if (tile.status === TILE_STATUS.MARKED) marktile(tile);
        if (tile.mine) revealtile(board, tile);
      });
    });
  }
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
//1. membuat papan permainan
//2. fungsi klik kanan
// a. menampilkan kotak
//3. fungsi klik kanan
// b. menandai kotak
//4. cek menang kalah
