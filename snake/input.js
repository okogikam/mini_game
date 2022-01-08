// import { time } from "./script.js";
// input user js
let inputDerection = { x: 0, y: 0 };
let lastInputDerection = { x: 0, y: 0 };
// let timeScore = 0;
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDerection.y !== 0) break;
      inputDerection = { x: 0, y: -1 };

      break;
    case "ArrowDown":
      if (lastInputDerection.y !== 0) break;
      inputDerection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDerection.x !== 0) break;
      inputDerection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDerection.x !== 0) break;
      inputDerection = { x: 1, y: 0 };
      break;
  }
  //   console.log(inputDerection);
});
export function getInputDrection() {
  lastInputDerection = inputDerection;
  return inputDerection;
}
