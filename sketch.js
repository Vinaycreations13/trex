var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage
var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var gamestate = 'play';
var obstaclegroup,cloudgroup;
var score = 0 ;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage = loadImage("cloud.png")
  groundImage = loadImage("ground2.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

invisibleGround=createSprite(10,190,200,10)
invisibleGround.visible=false;
obstaclegroup=createGroup()
cloudgroup=createGroup()
}

function draw() {
background(255);
if (gamestate==="play"){
//jump when the space button is pressed
text('SCORE-'+score,500,50)
if (keyDown("space")) {
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}
trex.collide(invisibleGround);
spawncloud();
spawnobstacle();
if(obstaclegroup.isTouching(trex)){
  gamestate="end"
}
}
else if(gamestate==="end"){
  ground.velocityX=0;

}
drawSprites();
}
function spawncloud() {
if(frameCount%60==0){
  var cloud =createSprite(600,100,10,10);
  cloud.addImage(cloudimage);
  cloud.y=Math.round(random(30,90))
  cloud.scale=0.15
  cloud.velocityX=-6
  cloudgroup.add(cloud)
}
}
function spawnobstacle() {
  if(frameCount%100==0){
  var obstacle= createSprite(600,160,40,10);
  obstacle.velocityX=-4
  var r = Math.round(random(1,6))
  switch(r){
  case 1:obstacle.addImage(obstacle1)
  break; 
  case 2:obstacle.addImage(obstacle2)
  break;
  case 3:obstacle.addImage(obstacle3)
  break;
  case 4:obstacle.addImage(obstacle4)
  break;
  case 5:obstacle.addImage(obstacle5)
  break;
  case 6:obstacle.addImage(obstacle6)
  break;
  default:break
  }
obstacle.scale=0.09
obstaclegroup.add(obstacle)
  }
}