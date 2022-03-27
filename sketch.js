var backgroundImage;
var snow,snowImage;
var kid,kidImage;
var superHero,superHeroImage;

function preload(){
  backgroundImage=loadImage("snow1.jpg");
  snowImage=loadImage("snow5.webp");
  kidImage=loadImage("cartoon-kid.png");
  superHeroImage=loadImage("superhero.png");
}


function setup() {
  createCanvas(800,400);
  kid=createSprite(375,200,50,50);
  kid.addImage(kidImage);
  kid.scale=0.09;
  


  superHero=createSprite(550,200,50,50);
  superHero.addImage(superHeroImage);
  superHero.scale=0.15
  
}

function draw() {
  background(0);
  image(backgroundImage,0,0,800,400)

  snowfall();
  drawSprites();
}






function snowfall(){
if(frameCount % 20 == 0){

  snow=createSprite(random(0,width),-10,20,20)
  snow.addImage(snowImage);
  snow.scale=0.045;
snow.velocityY=5;
snow.velocityX=random([2,-2,5,-5,4,-4]);
}

}