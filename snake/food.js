import { onSnake, expandSnake } from "./snake.js";
import { getRandomPosition } from "./grid.js";
// foor js
let foodPosition = getRandomFoodPosition();
const EXPAND_SNAKE = 1;

export function update() {
  if (onSnake(foodPosition)) {
    expandSnake(EXPAND_SNAKE);
    foodPosition = getRandomFoodPosition();
    // console.log(foodPosition);
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = foodPosition.y;
  foodElement.style.gridColumnStart = foodPosition.x;
  foodElement.classList.add("food");
  gameBoard.append(foodElement);
}

function getRandomFoodPosition() {
  let newPosition;
  while (newPosition == null || onSnake(newPosition)) {
    newPosition = getRandomPosition();
  }
  return newPosition;
}
