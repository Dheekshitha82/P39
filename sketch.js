var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2, player3, player4;

var player1_img, player2_img, player3_img, player4_img;

function preload(){
  player1_img = loadImage("../images/Player1.PNG");
  player2_img = loadImage("../images/Player2.PNG");
  player3_img = loadImage("../images/Player3.PNG");
  player4_img = loadImage("../images/Player4.PNG");
  backgroundImage = loadImage("../images/Background.PNG");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    // clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
