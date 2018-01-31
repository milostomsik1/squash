const framerate =  60;
const redWallOfDoom = new RedWallOfDoom();
const paddle = new Paddle();
const score = new Score();
let ball = new Ball();

const RED_WALL_TO_PADDLE = 75;
// Key bindings
const KEY_W = 87;
const KEY_S = 83;

function resetGame() {
  ball = new Ball();
  redWallOfDoom.reset();
  score.reset();
  // paddle.reset();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(framerate);
}

function draw() {
  background(42);

  // Red Wall Of Doom
  redWallOfDoom.draw();

  // Paddle
  paddle.x = redWallOfDoom.x + RED_WALL_TO_PADDLE;
  paddle.draw();
  paddle.move();

  // Score
  score.draw();

  // Ball
  ball.draw();
  ball.move();

  if (ball.hitsPaddle(paddle)) score.addPoint();
  if (ball.hitsRedWallOfDoom(redWallOfDoom)) resetGame();
}

function keyPressed() {
  if (keyCode === KEY_W) paddle.changeDirection('up');
  else if (keyCode === KEY_S) paddle.changeDirection('down');
}

function keyReleased() {
  if (keyCode === KEY_W) paddle.changeDirection('none');
  else if (keyCode === KEY_S) paddle.changeDirection('none');
}