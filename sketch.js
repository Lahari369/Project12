
var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var leftboundary, rightboundary
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
   
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.scale = 1.2;


//creating boy running
boy = createSprite(180,340,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
leftboundary = createSprite(0,0,100,800);
leftboundary.visible = false;
rightboundary = createSprite(410,0,100,800);
rightboundary.visible = false;
}

function draw() {

  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftboundary);
  boy.collide(rightboundary);
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}


