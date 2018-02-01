class Ball {
  constructor(score) {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.r = 10;

    this.maxXSpeed = 50;
    this.minYSpeed = 3;
    this.maxYSpeed = 15;

    this.xBaseSpeed = 15;
    this.xSpeed = this.xBaseSpeed;
    this.ySpeed = Math.round(Math.random() * (this.maxYSpeed  - this.minYSpeed) + this.minYSpeed);
    this.ySpeed = Math.random() < 0.5 ? this.ySpeed : -this.ySpeed;
    this.missed = false;
  }

  draw() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move(paddle) {
    if (this.xSpeed < 0) this.xSpeed = -score.points / 5 - this.xBaseSpeed;
    if (this.xSpeed > 0) this.xSpeed = score.points / 5 + this.xBaseSpeed;
    if (this.xSpeed < -this.maxXSpeed) this.xSpeed = -this.maxXSpeed;
    if (this.xSpeed > this.maxXSpeed) this.xSpeed = this.maxXSpeed;

    this.x += this.xSpeed;

    const passedThruPaddle = () => this.x - this.r <= paddle.x + paddle.width;
    const isBetweenPaddleTopAndBottom = () => this.y >= paddle.y && this.y <= paddle.y + paddle.height;
    const paddleEdge = paddle.x + paddle.width + this.r;

    if (passedThruPaddle() &&
        isBetweenPaddleTopAndBottom() &&
        this.missed === false) {
      this.x = paddleEdge;
    }

    this.y += this.ySpeed;
  }

  bounceOffWalls() {
    const hitsWindowBottom = () => this.y >= window.innerHeight - this.r;
    const hitsWindowTop = () => this.y <= this.r;
    const hitsWindowRight = () => this.x >= windowWidth - this.r;

    if (hitsWindowBottom() || hitsWindowTop()) {
      this.ySpeed = this.ySpeed * -1;
    }
    if (hitsWindowRight()) {
      this.xSpeed = this.xSpeed * -1;
    }
  }

  hitsPaddle(paddle) {
    const isMovingTowardsPaddle = () => this.xSpeed < 0;
    const isBetweenPaddleTopAndBottom = () => this.y >= paddle.y && this.y <= paddle.y + paddle.height;
    const isOnPaddleEdge = () => this.x - this.r === paddle.x + paddle.width

    if (isOnPaddleEdge() &&
        isBetweenPaddleTopAndBottom() &&
        isMovingTowardsPaddle()) {
      this.xSpeed = this.xSpeed * -1;
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

    this.xBaseSpeed = 15;
    this.xSpeed = this.xBaseSpeed;
    this.ySpeed = Math.round(Math.random() * (this.maxYSpeed  - this.minYSpeed) + this.minYSpeed);
    this.missed = false;
  }
}