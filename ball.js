class Ball {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.r = 10;

    this.minYSpeed = 3;
    this.maxYSpeed = 10;

    this.speedX = 10;
    this.speedY = Math.round(Math.random() * (this.maxYSpeed  - this.minYSpeed) + this.minYSpeed);
    this.missed = false;
  }

  draw() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move(paddle) {
    this.x += this.speedX;

    const passedThruPaddle = () => this.x - this.r <= paddle.x + paddle.width;
    const isBetweenPaddleTopAndBottom = () => this.y >= paddle.y && this.y <= paddle.y + paddle.height;
    const paddleEdge = paddle.x + paddle.width + this.r;

    if (passedThruPaddle() &&
        isBetweenPaddleTopAndBottom() &&
        this.missed === false) {
      this.x = paddleEdge;
    }

    this.y += this.speedY;
  }

  bounceOffWalls() {
    const hitsWindowBottom = () => this.y >= window.innerHeight - this.r;
    const hitsWindowTop = () => this.y <= this.r;
    const hitsWindowRight = () => this.x >= windowWidth - this.r;

    if (hitsWindowBottom() || hitsWindowTop()) {
      this.speedY = this.speedY * -1;
    }
    if (hitsWindowRight()) {
      this.speedX = this.speedX * -1;
    }
  }

  hitsPaddle(paddle) {
    const isMovingTowardsPaddle = () => this.speedX < 0;
    const isBetweenPaddleTopAndBottom = () => this.y >= paddle.y && this.y <= paddle.y + paddle.height;
    const isOnPaddleEdge = () => this.x - this.r === paddle.x + paddle.width

    if (isOnPaddleEdge() &&
        isBetweenPaddleTopAndBottom() &&
        isMovingTowardsPaddle()) {
      this.speedX = this.speedX * -1;
      return true;
    }
    return false;
  }

  missedPaddle(paddle, wall) {

    //refactor!
    if (this.x < paddle.x &&
        (this.y < paddle.y ||
        this.y > paddle.y + paddle.height)) {
      this.missed = true;
    }
    if (this.x < wall.x && this.missed) {
      return true;
    } else {
      return false;
    }
  }

  reset() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;

    this.speedX = 10;
    this.speedY = Math.round(Math.random() * (this.maxYSpeed  - this.minYSpeed) + this.minYSpeed);
    this.missed = false;
  }
}