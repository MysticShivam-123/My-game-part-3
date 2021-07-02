var boy1
var ground
var boy1img
var obstacleGroup
var gamestate = 'play'

function preload(){
boy1img = loadAnimation("boy1.png","boy2.png")
ground1img = loadAnimation("ground1.png")
Landmineimg = loadImage("Landmine.png")
spikeballimg = loadImage("Spikeball.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,50)
  boy1 = createSprite(80,windowHeight-110,60,60)
  boy1.addAnimation("boy1",boy1img)
  ground.velocityX = -3
  ground.addAnimation("ground1",ground1img)
  ground.scale = 1.5;
  boy1.scale = 0.9;

  //invisibleGround = createSprite(windowWidth/2,windowHeight-100,windowWidth,50);

  obstacleGroup= new Group();

}

function draw() {
  background(0); 
  boy1.collide(ground); 
  drawSprites();
  if(gamestate === 'play'){
    if(ground.x < 0){
      ground.x = ground.width/2
    }
    spawnObstacles(); 
  
  if (obstacleGroup.isTouching(boy1)){
  gamestate = 'end'
  }
  }

  if (gamestate === 'end'){
    text('gameover',windowWidth/2,windowHeight/2)
  }
}

function spawnObstacles(){
  if(frameCount % 200 === 0){
    var obstacle = createSprite(displayWidth,windowHeight-250,40,40)
    obstacle.velocityX = -3;
    obstacleGroup.add(obstacle)
    var rand = Math.round(random(1,2))
    if (rand === 1){
      obstacle.addImage(Landmineimg)
      obstacle.scale = 0.3
    }
    else if(rand === 2){
      obstacle.addImage(spikeballimg)
      obstacle.scale = 0.1
    }
  }
}
