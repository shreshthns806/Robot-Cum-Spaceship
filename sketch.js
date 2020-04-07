var head, neck,body,circle1,circle2
function setup() {
  createCanvas(400, 400);
  head=createSprite(mouseX,80,45,45);
  neck=createSprite(mouseX,120,5,40);
  body=createSprite(mouseX,160,50,80);

}

function draw() {
  background(220);
    circle1=ellipse(mouseX,200,30);
  cirrcle2=ellipse(mouseX,28,10);
  if(mouseWentDown(LEFT)){
head.velocityY=0.5;
}
if(head.isTouching(body)){
   head.velocityY=-1;
  neck.velocityY=-1;
  body.velocityY=-1;
   head.lifetime=120;
  neck.lifetime=120;
  body.ifetime=120;
}
head.collide(body);
  head.x=mouseX;
   neck.x=mouseX;
   body.x=mouseX;

text("ROBOT CUM SPACESHIP",150,360);
  text("Press Left mouse Button to convert robot into spaceship",70,330)
drawSprites();
}
