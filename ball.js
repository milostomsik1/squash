class Ball {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.r = 10;

    this.minYSpeed = 3;
    this.maxYSpeed = 10;

    this.speedX = 15;
    this.speedY = Math.round(Math.random() * (this.maxYSpeed  - this.minYSpeed) + this.minYSpeed);
  }

  draw() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  hitsScreenBottom() { return this.y >= window.innerHeight - this.r; }
  hitsScreenTop() { return this.y <= this.r; }
  hitsScreenRight() { return this.x >= windowWidth - this.r; }

  move() {
    if (this.hitsScreenBottom() || this.hitsScreenTop()) {
      this.speedY = this.speedY * -1;
    }
    if (this.hitsScreenRight()) {
      this.speedX = this.speedX * -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  hitsPaddle(paddle) {
    const isLeftOfPaddle = () => this.x <= paddle.x;

    if (isLeftOfPaddle()) {
      if (this.y > paddle.y && this.y < paddle.y + paddle.height) {
        this.speedX = this.speedX * -1;
        return true;
      }
    }
    return false;
  }

  hitsRedWallOfDoom(redWallOfDoom) {
    if (this.x < redWallOfDoom.x) {
      return true
    }
    return false;
  }
}