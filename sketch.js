var trex, trex_running, trex_collided, clouds, cloud, Cloudgroup, Obstacles1,Obstacles2,Obstacles3,Obstacles4,Obstacles5,Obstacles6,Cactus,Cactusgroup, Score=0;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running=
    loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  clouds=loadImage("cloud.png");
  
  Obstacles1=loadImage("obstacle1.png");
  Obstacles2=loadImage("obstacle2.png");
  Obstacles3=loadImage("obstacle3.png");
  Obstacles4=loadImage("obstacle4.png");
  Obstacles5=loadImage("obstacle5.png");
  Obstacles6=loadImage("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  Cloudgroup = new Group();
  Cactusgroup = new Group();
}

function draw() {
  background(160);

  Score+=Math.round(getFrameRate()/60);
  text("Score :" + Score, 500,50);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  SpawnClouds();
  SpawnObstacles();
  drawSprites();
}

function SpawnClouds() {
  if (World.frameCount%60===0) {
   var Clouds = createSprite(600,120,40,10);
  Clouds.y=Math.round(random(80,120));
  Clouds.addImage(clouds);
  Clouds.scale=0.5;
  Clouds.velocityX=-4;
  Clouds.lifetime=150;
  Clouds.depth=trex.depth;
  trex.depth++;
  Cloudgroup.add(Clouds);
  
  }
}

function SpawnObstacles() {
   if (World.frameCount%60===0) {
   var Cactus = createSprite(600,165,10,40);
  var rand=Math.round(random(1,6));
  
     switch(rand)
 
     {
       case 1 : Cactus.addImage(Obstacles1);
      break;
      case 2 : Cactus.addImage(Obstacles2);
      break;
      case 3 : Cactus.addImage(Obstacles3);
      break;
      case 4 : Cactus.addImage(Obstacles4);
      break;
      case 5 : Cactus.addImage(Obstacles5);
      break;
      case 6 : Cactus.addImage(Obstacles6);
      break;
      default:
      break;   
      
     }
  Cactus.scale=0.4;
   Cactus.velocityX=-6;
   Cactus.lifetime=150;
  Cactusgroup.add(Cactus);
  
  }
}


