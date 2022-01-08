// logic or snake js
import { getInputDrection } from "./input.js";
export const SNAKE_SPEED = 5;

const snakeBody = [{ x: 11, y: 11 }];
const skorDisplay = document.querySelector(".skor");
let newSegment = 0;

export function update() {
  addSegment();

  const derection = getInputDrection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += derection.x;
  snakeBody[0].y += derection.y;
  skor();
}
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.append(snakeElement);
  });
}
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPosition(segment, position);
  });
}
export function expandSnake(amount) {
  newSegment += amount;
}
export function getSnakeHead() {
  return snakeBody[0];
}
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
function addSegment() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    console.log(snakeBody.length);
  }

  newSegment = 0;
}
function skor() {
  let skor = snakeBody.length - 1;
  skorDisplay.innerText = skor;
  // console.log(skor);
}
