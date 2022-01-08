export const GRID_SUM = 20;

export function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SUM) + 1,
    y: Math.floor(Math.random() * GRID_SUM) + 1,
  };
}
export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SUM ||
    position.y < 1 ||
    position.y > GRID_SUM
  );
  console.log(position);
}
