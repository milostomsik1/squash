const framerate =  60;
const redWallOfDoom = new RedWallOfDoom();
const paddle = new Paddle();
const score = new Score();
const ball = new Ball(score);

const RED_WALL_TO_PADDLE_DISTANCE = 75;

// Key Bindings
const KEY_W = 87;
const KEY_S = 83;
const KEY_SPACE = 32;

function resetGame() {
  redWallOfDoom.reset();
  score.reset();
  paddle.reset();
  ball.reset();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(framerate);
}

function draw() {
  // fixes mac window height problem
  window.scrollTo(0,0);
  background(42);

  // Red Wall Of Doom
  redWallOfDoom.draw(framerate);

  // Score
  score.draw();

  // Paddle
  paddle.x = redWallOfDoom.x + RED_WALL_TO_PADDLE_DISTANCE;
  paddle.move();
  paddle.draw();

  // Ball
  ball.move(paddle);
  ball.draw();
  ball.bounceOffWalls();
  if (ball.hitsPaddle(paddle)) score.addPoint();
  if (ball.missedPaddle(paddle, redWallOfDoom)) resetGame();
}

function keyPressed() {
  if (keyCode === KEY_W) paddle.changeDirection('up');
  else if (keyCode === KEY_S) paddle.changeDirection('down');
}

function keyReleased() {
  if (keyCode === KEY_W) paddle.changeDirection('none');
  else if (keyCode === KEY_S) paddle.changeDirection('none');
}