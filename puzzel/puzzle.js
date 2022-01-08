export function createBoard(BOARD_SIZE) {
  const board = [];
  const Position = imgPosition(BOARD_SIZE);
  let index = 0;
  for (let x = 0; x < BOARD_SIZE; x++) {
    const row = [];
    for (let y = 0; y < BOARD_SIZE; y++) {
      const element = document.createElement("div");
      // element.dataset.status = "blank";
      const tile = {
        element,
        x,
        y,
        imgPosition: Position[index],
      };
      row.push(tile);
      index += 1;
    }
    board.push(row);
  }
  return board;
}
function imgPosition(BOARD_SIZE) {
  const positions = [];

  while (positions.length < BOARD_SIZE * BOARD_SIZE) {
    const position = {
      x: getRandomNumber(BOARD_SIZE),
      y: getRandomNumber(BOARD_SIZE),
    };
    if (!positions.some(cekMatch.bind(null, position))) {
      positions.push(position);
    }
  }
  return positions;
}

function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}
function cekMatch(a, b) {
  return a.x === b.x && a.y === b.y;
}
