function setup() {
  createCanvas(800,400);
 fixedrect =  createSprite(400, 200, 50, 50);
 fixedrect.shapeColor = "blue"
 moverect = createSprite(200,200,50,50);
 moverect.shapeColor = "lightblue"
}

function draw() {
  background("black");  
moverect.y = mouseY
moverect.x = mouseX
if(moverect.x - fixedrect.x <fixedrect.width/2 +moverect.width/2
  && fixedrect.x- moverect.x < fixedrect.width/2 + moverect.width/2
  && moverect.y - fixedrect.y <fixedrect.height/2 +moverect.height/2
  && fixedrect.y- moverect.y < fixedrect.height/2 + moverect.height/2){
  fixedrect.shapeColor = "lightblue";
  moverect.shapeColor = "blue";
}
else{
  fixedrect.shapeColor = "blue";
  moverect.shapeColor = "lightblue";
}
  drawSprites();
}