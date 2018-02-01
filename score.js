class Score {
  constructor() {
    this.points = 0;
    this.y = window.innerHeight / 10 + 20;
    this.x = window.innerWidth / 2 - 100;
  }

  draw() {
    fill(255);
    textSize(42);
    text(`SCORE: ${this.points}`, this.x, this.y);
  }

  reset() {
    this.points = 0;
  }

  addPoint() {
    this.points++;
  }
}