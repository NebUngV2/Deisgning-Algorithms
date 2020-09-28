var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(200,200,50,80);
  rect1.shapeColor = 'green';
  rect2 = createSprite(400,200,80,30)
  rect2.shapeColor = 'blue';
}

function draw() {
  background(0);  
  
  rect1.x = mouseX;
  rect1.y = mouseY;
  if(rect1.x-rect2.x < rect1.width/2+ rect2.width/2 &&
    rect2.x-rect1.x < rect1.width/2+ rect2.width/2 &&
    rect1.y-rect2.y < rect1.width/2+ rect2.width/2 &&
    rect2.y-rect1.y < rect2.width/2+ rect1.width/2) {
    rect1.shapeColor = 'yellow';
    rect2.shapeColor = 'yellow';
  } else {
    rect1.shapeColor = 'green';
    rect2.shapeColor = 'blue';
  }
  

  drawSprites();
}