const framerate =  60;
const redWallOfDoom = new RedWallOfDoom();
const paddle = new Paddle();
const score = new Score();
const ball = new Ball(score);
const gamePaused = new GamePaused();
const gameStart = new GameStart();

let paused = false;
let gameStarted = false;

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
    if (!paused && gameStarted) {
      timer++;
    }
  }, 1000 / framerate);
}

function handleWallActions() {
  redWallOfDoom.draw(timer, framerate);
}

function handleScoreActions() {
  if (gameStarted) score.draw();
}

function handlePaddleActions() {
  if (!paused) paddle.move();
  paddle.x = redWallOfDoom.x + RED_WALL_TO_PADDLE_DISTANCE;
  paddle.draw();
}

function handleBallActions() {
  if (!paused && gameStarted) ball.move(paddle);
  if (gameStarted) ball.draw();
  ball.bounceOffWalls();
  if (ball.hitsPaddle(paddle)) score.addPoint();
  if (ball.missedPaddle(paddle, redWallOfDoom)) resetGame();
}

function handleGamePausedActions() {
  if (paused) gamePaused.draw();
}

function handleGameStartActions() {
  if (!gameStarted) {
    gameStart.draw();
  }
}

function resetGame() {
  timer = 0;
  gameStarted = false;
  redWallOfDoom.reset();
  score.reset();
  paddle.reset();
  ball.reset();
}

function draw() {
  // fixes mac window height problem
  window.scrollTo(0,0);
  background(35);
  textAlign(CENTER);

  handleWallActions();
  handleScoreActions();
  handlePaddleActions();
  handleBallActions();
  handleGamePausedActions();
  handleGameStartActions();
}

function keyPressed() {
  if (keyCode === KEY_W && gameStarted) paddle.changeDirection('up');
  else if (keyCode === KEY_S && gameStarted) paddle.changeDirection('down');
  if (keyCode === KEY_P && gameStarted) paused = !paused;
  if (keyCode === KEY_SPACE && !gameStarted) {
    resetGame();
    gameStarted = true;
  }
}

function keyReleased() {
  if (keyCode === KEY_W) paddle.changeDirection('none');
  else if (keyCode === KEY_S) paddle.changeDirection('none');
}