var fixedRect, movingRect;
var mr1, fr1;
var mr2, fr2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  mr1 = createSprite(400, 100, 50, 80);
  mr1.shapeColor = "green";
  mr1.debug = true;
  fr1 = createSprite(600, 100, 50, 80);
  fr1.shapeColor = "green";
  fr1.debug = true;

  fr2 = createSprite(200, 100, 50, 80);
  fr2.shapeColor = "green";
  fr2.debug = true;
  mr2 = createSprite(200, 300, 50, 80);
  mr2.shapeColor = "green";
  mr2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  mr1.velocityX = 5;
  fr2.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);

  bounceOff(fr1,mr1);

  bounceOff(fr2,mr2);

  drawSprites();
}

