class Score {
  constructor() {
    this.points = 0;
    this.y = 100;
    this.x = window.innerWidth / 2 - 100;
  }

  draw() {
    textSize(48);
    text(`Score: ${this.points}`, this.x, this.y);
  }

  reset() {
    this.points = 0;
  }

  addPoint() {
    this.points++;
  }
}