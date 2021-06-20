
//first teacher activity

//adding();
function draw()
{
  adding();
}

function adding()
{
  var a=10;
  var b=30;
  var c= a+b;
  console.log("The result is :"+c);
}


//second teacher activity

//adding();
function draw()
{
  adding(23,45);
}

function adding(a,b)
{
  var c= a+b;
  console.log("The result is :"+c);
}

//third teacher activity
var ball= createSprite(200,200,10,10);
ball.setAnimation("basketball_1");
ball.scale=0.1;
ball.velocityX=3;
ball.velocityY=5;
function draw()
{
  background("white");
  createEdgeSprites();
  ball.bounceOff(edges);
  drawSprites();
}

function mousePressed(){
  ball.velocityX=4;
  ball.velocityY=0;
}
