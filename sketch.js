
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score1 = 0;
var survivalTime = 0;
var gameState = "play";
var backgroundImage;

function preload(){
  
  backgroundImage = loadImage("jungle.jpg");
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkeyImage = loadImage("sprite_0.png");
 
}



function setup() {
 
  createCanvas(600,600);
  background = createSprite(0,0,700,450);
  background.addImage(backgroundImage);
  background.scale = 1.5;
  
  
  
  monkey = createSprite(100,500,10,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1777;
  
  ground = createSprite(400,555,1500,10);
  ground.velocityX = -8;
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = false;
  
  
  

  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
 
  
  

  
}


function draw() {
  background.velocityX = -3;
  
  if(background.x<0){
    background.x = background.width/2;  
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.2;
  }
  
  if(gameState == "play"){
    if(ground.x < 0){
  ground.x = 300
  }
    if(monkey.y>450){
  if(keyDown("space")){
    monkey.velocityY = -20;
  }
}
     monkey.velocityY = monkey.velocityY+1
      spawnFood();
  spawnObstacles();
    if(obstacleGroup.isTouching(monkey)){
    gameState = "end";
    
    
  }
    
  }
  else if(gameState == "end"){
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    ground.velocityX = 0;
    monkey.velocityY = 0;
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
    monkey.destroy();
    ground.destroy();
    textSize(50);
    text("GAME OVER", 200,200);
    background.velocityX = 0;
    
  }
   monkey.collide(ground);
  
  textSize(20);
  text("SCORE :"+ score1, 500, 20)
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score1 = score1+1;
  }
  
  switch(score1){
    case 10 : monkey.scale = 0.22;
      break;
      case 20 : monkey.scale = 0.24;
      break;
      case 30 : money.scale = 0.26;
      break;
      case 40 : monkey.scale = 0.28;
      break;
  }
  textSize(20);
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime : "+survivalTime, 300, 20)

     
  
  
 

  drawSprites();

}

function spawnFood(){
  if(World.frameCount%80 == 0){
    banana = createSprite(600,500,10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -8;
    banana.scale = 0.1;
    banana.y = Math.round(random(320,400));
    banana.lifetime = 150;
    foodGroup.add(banana);
    
    
    
  
     
     }
}
function spawnObstacles(){
  if(World.frameCount%300 == 0){
    obstacle = createSprite(600,500,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -8;
    obstacle.lifetime = 160;
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
  }
}






