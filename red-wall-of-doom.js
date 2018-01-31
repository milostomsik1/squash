class RedWallOfDoom {
  constructor() {
    this.startTime = Date.now();
    this.x = 0;
  }

  draw() {
    this.x = (Date.now() - this.startTime) / 500;
    noStroke();
    fill(255, 25, 25);
    rect(0, 0, this.x, window.innerHeight);
  }

  reset() {
    this.startTime = Date.now();
  }
}