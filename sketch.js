//Create variables here
var banana,bananaImg;
var raymond,raymondImg;
var jungle,jungleImg;
var ground,bananaGroup;
var score = 0;
function preload()
{
  //load images here
  bananaImg = loadImage("images/banana.png");
raymondImg = loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png","images/Monkey_06.png","images/Monkey_07.png","images/Monkey_08.png","images/Monkey_09.png","images/Monkey_10.png");
jungleImg = loadImage("images/jungle.jpg");

}

function setup() {
	createCanvas(8000, 700);

  
jungle = createSprite(400,350,8,700);
jungle.addImage(jungleImg);
jungle.velocityX = -4

raymond = createSprite(200,600,20,20);
raymond.addAnimation("raymond1",raymondImg);
raymond.scale = 0.2;

ground = createSprite(200,650,10,20)




bananaGroup = new Group();

}


function draw() {  
  




if(jungle.x<390){

jungle.x = jungle.width/2;
}
if(frameCount %80 === 0){
  var banana = createSprite(600,250,40,10);
  banana.y = random(600,200);    
  banana.addImage(bananaImg);
  banana.scale = 0.09;
  banana.velocityX = -5;
   //assign lifetime to the variable
  banana.lifetime = 200;
  raymond.depth = banana.depth + 1;
  bananaGroup.add(banana);
}

if(keyWentDown("space") && raymond.y>=310){
  raymond.velocityY = -18;
  
  }
  if(raymond.isTouching(bananaGroup)){

bananaGroup.destroyEach();
score = score+1;
  }
    raymond.velocityY = raymond.velocityY+0.8;
    raymond.collide(ground);

  drawSprites();
  
  fill(19);
  textSize(30)
   text("Score: " + score,180,300);
 
}



