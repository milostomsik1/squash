class GamePaused {
  draw() {
    noStroke();
    fill(200, 50, 50);
    textSize(64);
    text(`GAME PAUSED`, window.innerWidth / 2 - 250, window.innerHeight / 2 + 25);
  }
}