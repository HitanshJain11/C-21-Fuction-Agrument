var fixedRect, movingRect;
var gameObj1 , gameObj2 , gameObj3 , gameObj4 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObj1 = createSprite(100,100,50,50);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(200,100,50,50);
  gameObj2.shapeColor = "brown";

  gameObj3 = createSprite(300,100,50,50);
  gameObj3.shapeColor = "red";

  gameObj4 = createSprite(400,100,50,50);
  gameObj4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  gameObj1.x = World.mouseX;
  gameObj1.y= World.mouseY;

  if (isTouching(gameObj1, gameObj4)) {
    gameObj1.shapeColor = "purple";
    gameObj4.shapeColor = "purple";
  } 
  else {
    gameObj1.shapeColor = "green";
    gameObj4.shapeColor = "green";
  }

  
  drawSprites();
}

