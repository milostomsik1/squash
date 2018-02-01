const framerate =  60;
const redWallOfDoom = new RedWallOfDoom();
const paddle = new Paddle();
const score = new Score();
const ball = new Ball(score);
const gamePaused = new GamePaused();

let paused = false;

const RED_WALL_TO_PADDLE_DISTANCE = 75; //px

// Key Bindings
const KEY_W = 87;
const KEY_S = 83;
const KEY_SPACE = 32;
const KEY_P = 80;

let timer = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(framerate);
  setInterval(() => {
    if (!paused) {
      timer++;
    }
  }, 1000 / framerate);
}

function handleWallActions() {
  redWallOfDoom.draw(timer, framerate);
}

function handleScoreActions() {
  score.draw();
}

function handlePaddleActions() {
  if (!paused) paddle.move();
  paddle.x = redWallOfDoom.x + RED_WALL_TO_PADDLE_DISTANCE;
  paddle.draw();
}

function handleBallActions() {
  if (!paused) ball.move(paddle);
  ball.draw();
  ball.bounceOffWalls();
  if (ball.hitsPaddle(paddle)) score.addPoint();
  if (ball.missedPaddle(paddle, redWallOfDoom)) resetGame();
}

function handleGamePausedActions() {
  if (paused) gamePaused.draw();
}

function resetGame() {
  timer = 0;
  redWallOfDoom.reset();
  score.reset();
  paddle.reset();
  ball.reset();
}

function draw() {
  // fixes mac window height problem
  window.scrollTo(0,0);
  background(35);

  handleWallActions();
  handleScoreActions();
  handlePaddleActions();
  handleBallActions();
  handleGamePausedActions();
}

function keyPressed() {
  if (keyCode === KEY_W) paddle.changeDirection('up');
  else if (keyCode === KEY_S) paddle.changeDirection('down');
  if (keyCode === KEY_P) paused = !paused;
}

function keyReleased() {
  if (keyCode === KEY_W) paddle.changeDirection('none');
  else if (keyCode === KEY_S) paddle.changeDirection('none');
}