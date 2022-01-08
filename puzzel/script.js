import { createBoard } from "./puzzle.js";
// import { time } from "./score.js";
const BOARD_SIZE = 4;
const WIDTH = 600;
const HEIGHT = 300;
const sizeX = Math.ceil(WIDTH / BOARD_SIZE);
const sizeY = Math.ceil(HEIGHT / BOARD_SIZE);

const moveDisplay = document.querySelector("#move");
let scoreNow = 0;

const board = createBoard(BOARD_SIZE);
const gameBoard = document.querySelector(".board");
console.log(scoreNow);

board.forEach((row) => {
  row.forEach((tile) => {
    gameBoard.append(tile.element);
    tile.element.addEventListener("click", () => {
      let Blank = cekBlankPosition(board, tile);
      move(Blank, tile);
      removeBlank();
      setImage(tile);
      imgBlank(tile);
      cekEndGame();
    });
    setImage(tile);
    imgBlank(tile);
  });
});
// time();
setInterval(function main() {
  board.forEach((row) => {
    row.forEach((tile) => {
      setImage(tile);
      imgBlank(tile);
    });
  });
}, 10);
// cekEndGame();

// board.forEach((row) => {
//   row.forEach((tile) => {
//     gameBoard.append(tile.element);
//     tile.element.addEventListener("click", () => {
//       let Blank = cekBlankPosition(board, tile);
//       move(Blank, tile);
//       removeBlank();
//       setImage(tile);
//       imgBlank(tile);
//     });
//     setImage(tile);
//     imgBlank(tile);
//   });
// });

gameBoard.style.setProperty("--size", BOARD_SIZE);
gameBoard.style.setProperty("--width", WIDTH + "px");
gameBoard.style.setProperty("--height", HEIGHT + "px");

function setImage(tile) {
  let imgX = tile.imgPosition.x * -sizeY;
  let imgY = tile.imgPosition.y * -sizeX;
  return tile.element.style.setProperty(
    "background-position",
    imgY + "px " + imgX + "px"
  );
}
function imgBlank(tile) {
  if (tile.imgPosition.x == 3 && tile.imgPosition.y == 3) {
    tile.element.classList.add("blank");
  }
}
function removeBlank() {
  const pice = document.querySelector(".blank");
  pice.classList.remove("blank");
}
function cekBlankPosition(board, { x, y }) {
  let hasil = "";
  let X1 = x - 1;
  let X2 = x + 1;
  if (X1 < 0) X1 = 0;
  if (X2 > 3) X2 = 3;

  let Y1 = y - 1;
  let Y2 = y + 1;
  if (Y1 < 0) Y1 = 0;
  if (Y2 > 3) Y2 = 3;

  let tileLeft = board[x][Y1];
  let tileRight = board[x][Y2];
  let tileUp = board[X1][y];
  let tileDown = board[X2][y];

  if (tileLeft.element.className == "blank") {
    hasil = "move Left";
  }
  if (tileRight.element.className == "blank") {
    hasil = "move Right";
  }
  if (tileUp.element.className == "blank") {
    hasil = "move Up";
  }
  if (tileDown.element.className == "blank") {
    hasil = "move Down";
  }
  return hasil;
}
function move(moveTo, { x, y }) {
  let newTile;
  let X1 = x - 1;
  let X2 = x + 1;
  if (X1 < 0) X1 = 0;
  if (X2 > 3) X2 = 3;

  let Y1 = y - 1;
  let Y2 = y + 1;
  if (Y1 < 0) Y1 = 0;
  if (Y2 > 3) Y2 = 3;

  let tileLeft = board[x][Y1].imgPosition;
  let tileRight = board[x][Y2].imgPosition;
  let tileUp = board[X1][y].imgPosition;
  let tileDown = board[X2][y].imgPosition;

  switch (moveTo) {
    case "move Left":
      newTile = board[x][y].imgPosition;
      board[x][Y1].imgPosition = newTile;
      board[x][y].imgPosition = tileLeft;
      score();
      break;
    case "move Right":
      newTile = board[x][y].imgPosition;
      board[x][Y2].imgPosition = newTile;
      board[x][y].imgPosition = tileRight;
      score();
      break;
    case "move Up":
      newTile = board[x][y].imgPosition;
      board[X1][y].imgPosition = newTile;
      board[x][y].imgPosition = tileUp;
      score();
      break;
    case "move Down":
      newTile = board[x][y].imgPosition;
      board[X2][y].imgPosition = newTile;
      board[x][y].imgPosition = tileDown;
      score();
      break;
  }
}
function cekWin() {
  return board.every((row) => {
    return row.every((tile) => {
      return tile.imgPosition.x === tile.x && tile.imgPosition.y === tile.y;
    });
  });
}
function cekEndGame() {
  const win = cekWin();
  if (win) {
    if (confirm("You louse, press OK for restart")) {
      window.location = "./";
    } else {
      stopProp(e);
    }
    // return;
  }
}
function stopProp(e) {
  e.stopImmediatePropagation();
}
function score() {
  scoreNow += 1;
  moveDisplay.innerText = scoreNow;
}

// console.log(timeDisplay);
