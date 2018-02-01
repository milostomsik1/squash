class Paddle {
  constructor() {
    this.height = 200;
    this.x = 0;
    this.y = window.innerHeight / 2 - this.height / 2;
    this.width = 5;
    this.direction = 0;
    this.speed = 15;
  }

  draw() {
    noStroke();
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    const canMove = () => this.y >= 0 && this.y + this.height <= window.innerHeight;
    const movesAboveScreenTop = () => this.y - this.speed < 0;
    const movesUnderScreenBottom = () => this.y + this.height + this.speed > window.innerHeight;

    if (canMove()) {
      this.y += this.speed * this.direction;
      if (movesAboveScreenTop()) {
        this.y = 0;
      }
      if (movesUnderScreenBottom()) {
        this.y = window.innerHeight - this.height;
      }
    }
  }

  changeDirection(direction) {
    if (direction === 'up') {
      this.direction = - 1;
    }
    if (direction === 'down') {
      this.direction = 1;
    }
    if (direction === 'none') {
      this.direction = 0;
    }
  }

  reset() {
    this.y = window.innerHeight / 2 - this.height / 2;
  }
}