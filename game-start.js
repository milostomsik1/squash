class GameStart {
  draw() {
    noStroke();
    fill(255);
    textSize(42);
    text(`W - Paddle Up\nS - Paddle Down\nP - Pause Game\n\nPress SPACE to play...`, window.innerWidth / 2, window.innerHeight / 2 - 130);
  }
}