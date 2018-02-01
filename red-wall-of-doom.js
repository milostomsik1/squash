class RedWallOfDoom {
  constructor() {
    this.startTime = Date.now();
    this.x = 0;
  }

  draw(framerate) {
    this.x = (Date.now() - this.startTime) / framerate / 10;
    noStroke();
    fill(200, 50, 50);
    rect(0, 0, this.x, window.innerHeight);
  }

  reset() {
    this.startTime = Date.now();
  }
}