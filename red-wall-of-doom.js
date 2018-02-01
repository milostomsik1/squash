class RedWallOfDoom {
  constructor() {
    this.x = 0;
    this.speed = 2;
  }

  draw(timer, fps) {
    this.x = timer / fps * this.speed;
    if (this.x > window.innerWidth / 2) this.x = window.innerWidth / 2;
    noStroke();
    fill(200, 50, 50);
    rect(0, 0, this.x, window.innerHeight);
  }

  reset() {
    this.x = 0;
  }
}