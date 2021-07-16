let player;

let bgimage;
let playerimg;
let obstacleimage;
let obstacles = [];

let wordClassifier;

function preload() {
  bgimage = loadImage("background.jpg");
  playerimg = loadImage("mario.png");
  obstacleimage = loadImage("obstacle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  player = new Player();
  wordClassifier.classify(hearWord);
}

function hearWord(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key == " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    obstacles.push(new obstacle());
  }
  background(bgimage);
  player.show();
  player.move();
  for (obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collied(obs) == true) {
      textSize(72);
      text("GAME OVER!", width / 3, height / 3);
      fill(255, 0, 0);
      noLoop();
    }
  }
}
