export function score(scoreNow) {
  return (scoreNow += 1);
}
export function time() {
  let timeNow;
  let second = 0;
  let menit = 0;
  let jam = 0;
  setInterval(() => {
    time += 1;
  }, 1000);
  if (time < 60) {
    second = time;
    timeNow = second + "s";
  }
  if (time >= 60 && time < 3600) {
    second = time % 60;
    menit = Math.ceil(time / 60);
    timeNow = menit + "m :" + second + "s";
  }
  if (time >= 3600) {
    second = time % 60;
    menit = time % 3600;
    jam = Math.ceil(time / 3600);
    timeNow = jam + "h :" + menit + "m :" + second + "s";
  }
  return timeNow;
}
