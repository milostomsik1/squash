const framerate =  60;
const redWallOfDoom = new RedWallOfDoom();
const paddle = new Paddle();
const score = new Score();
let ball = new Ball();

const RED_WALL_TO_PADDLE_DISTANCE = 75;

// Key Bindings
const KEY_W = 87;
const KEY_S = 83;
const KEY_SPACE = 32;

function resetGame() {
  redWallOfDoom.reset();
  score.reset();
  paddle.reset();
  ball = new Ball();
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
  redWallOfDoom.draw();

  // Paddle
  paddle.x = redWallOfDoom.x + RED_WALL_TO_PADDLE_DISTANCE;
  paddle.move();
  paddle.draw();

  // Score
  score.draw();

  // Ball
  ball.move(paddle);
  ball.draw();
  ball.bounceOffWalls();
  if (ball.hitsPaddle(paddle)) score.addPoint();
  if (ball.missedPaddle(paddle, redWallOfDoom)) resetGame();
}

function keyPressed(e) {
  if (keyCode === KEY_W) paddle.changeDirection('up');
  else if (keyCode === KEY_S) paddle.changeDirection('down');
  if (keyCode === KEY_SPACE) console.log('SPACE PRESSED');
}

function keyReleased() {
  if (keyCode === KEY_W) paddle.changeDirection('none');
  else if (keyCode === KEY_S) paddle.changeDirection('none');
}