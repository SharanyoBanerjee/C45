var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var hero,bullet,robot1,robot2,robot3,robot4,herofly,door,fillingBox;
var fb1,fb2,fb3;
var hc1 = false;
var hc2 = false;
var hc3 = false;
var hc4 = false;
var bgSound,dtSound,flSound;
var heroImg,flameImg,robotImg,doorImg,heroflyImg,fillingBoxImg;
var health = 100;
var fuel = 150;
function preload()
{
 heroImg = loadImage("images/heroNor.png");
 heroFlyImg = loadImage("images/herofly.png");
 robotImg = loadImage("images/bot.png");
 doorImg = loadImage("images/door.png");
 fillingBoxImg = loadImage("images/fuelbox.png");
 flameImg = loadImage("images/bullet_left.png");
 //bgSound = loadSound("sounds/Backgroundmusic.mp3");
 dtSound = loadSound("sounds/deathsound.mp3");
 flSound = loadSound("sounds/deathsound.mp3");
}


function setup() {
  createCanvas(1400,700);
  
  block1 = createSprite(10,430,30,850);
  block1.shapeColor = "lightblue";
  block2 = createSprite(700,690,1400,30);
  block2.shapeColor = "lightblue";
  block3 = createSprite(265,500,500,30);
  block4 = createSprite(500,340,30,300);
  block5 = createSprite(800,440,30,500);
  block6 = createSprite(700,10,1400,30);
  block7 = createSprite(1390,430,30,850);
  block8 = createSprite(935,200,300,30);
  block9 = createSprite(1400,500,300,30);
  block10 = createSprite(100,100,200,30);
  block3.shapeColor = "lightblue";
  block4.shapeColor = "lightblue";
  block5.shapeColor = "lightblue";
  block6.shapeColor = "lightblue";
  block7.shapeColor = "lightblue";
  block8.shapeColor = "lightblue";
  block9.shapeColor = "lightblue";
  block10.shapeColor = "lightblue";

  bulletGroup = new Group();

  //blockGroup = new Group();

  door = createSprite(1305,600,50,05);
  door.addImage(doorImg);
  door.scale = 0.45


  hero = createSprite(80,640,100,180);
  hero.addImage(heroImg);
  hero.scale = 0.5;
  
  
  
  
  fb1 = createSprite(200,460,200,200);
  fb1.addImage(fillingBoxImg);
  fb1.scale = 0.2;

  fb2 = createSprite(510,650,200,200);
  fb2.addImage(fillingBoxImg);
  fb2.scale = 0.2;

  fb3 = createSprite(900,650,200,200);
  fb3.addImage(fillingBoxImg);
  fb3.scale = 0.2;
  
   
  robo1();
  robo2();
  robo3();
  robo4();
    
  
  //fuel2();
}

function draw() {
 background("black")
 fill("white");
 text(mouseX+","+mouseY,mouseX,mouseY);
 //bgSound.play();

 textSize(20);
 text("Fuel:"+fuel,160,50);

 text("Health:"+health,40,50);

  //bullet.collide(blockGroup);
  

 robot1.bounceOff(block2);
 robot1.bounceOff(block6);
 robot2.bounceOff(block1);
 robot2.bounceOff(block4);
 robot4.bounceOff(block5);
 robot4.bounceOff(block7);
 robot3.bounceOff(block9);
 robot3.bounceOff(block6);

 hero.bounceOff(block1);
 hero.bounceOff(block2);
 hero.bounceOff(block3);
 hero.bounceOff(block4);
 hero.bounceOff(block5);
 hero.bounceOff(block6);
 hero.bounceOff(block7);
 hero.bounceOff(block8);
 hero.bounceOff(block9);
 hero.bounceOff(block10);
 
 if(keyWentDown("space")){
  bullet1();
 }
 
 //hero.depth = fb3.depth;

if(keyDown(UP_ARROW)&& fuel > 0){
  hero.y  = hero.y-10;
  fuel = fuel-1;
 }

if(keyWentUp(UP_ARROW)){
  hero.addImage(heroImg);

}
hero.y  = hero.y+3;

if(keyWentDown(UP_ARROW)){
  hero.addImage(heroFlyImg);
}

 if(fuel === 0 ){
  hero.y = hero.y+5;
  
 }

if(keyDown(LEFT_ARROW)){
  hero.x = hero.x-4;
}
if(keyDown(RIGHT_ARROW)){
  hero.x = hero.x+4;
}
if(keyDown(DOWN_ARROW)){
  hero.y = hero.y+4;
   
}
if(hero.isTouching(fb2)){
  fuel = 150;
  fb2.visible = false;
}
if(hero.isTouching(fb1)){
  fuel = 150;
  fb1.destroy();
}
if(hero.isTouching(fb3)){
  fuel = 150;
  fb3.destroy();
}
if(hero.isTouching(robot1)){
  health = 0;
}
if(hero.isTouching(robot2)){
  health = 0;
}
if(hero.isTouching(robot3)){
  health = 0;
}
if(hero.isTouching(robot4)){
  health = 0;
}

if(health === 0){
  hero.destroy();
  text("DEATH",100,570);
    
}
if((hero.x > 636 || hero.x < 644) && hc1 === false){
  robo1();
  console.log(hc1);
  console.log(hero.x);
 hc1 = true;
}
if(hero.y === 120 && hc2 === false){
  robo2();
 hc2 = true;
}
if(hero.y === 200 && hc3 === false){
  robo3();
 hc3 = true;
}
if(hero.x === 1300 && hc4 === false){
  robo4();
 hc4 = true;
}
 destr();
 bulletdes();

  drawSprites();
}
function robo1 (){
  robot1 = createSprite(650,500,50,50);
  robot1.addImage(robotImg);
  robot1.scale = 0.4;
  robot1.velocityY  =5;
  console.log("1")
  
  console.log("2")
}
function robo2 (){
  robot2 = createSprite(240,300,50,50);
  robot2.addImage(robotImg);
  robot2.scale = 0.4;
  robot2.velocityX = 5;
}
function robo3 (){
  robot3 = createSprite(1300,165,50,50);
  robot3.addImage(robotImg);
  robot3.velocityY = 5;
  robot3.scale = 0.4;
}
function robo4 (){
  robot4 = createSprite(1000,620,50,50);
  robot4.addImage(robotImg);
  robot4.scale = 0.4;
  robot4.velocityX = 5;
}
function bullet1(){
 bullet = createSprite(hero.x+40,hero.y-5,20,20);
 bullet.addImage(flameImg);
 bullet.velocityX = 70;
 bullet.scale =0.3;
 bulletGroup.add(bullet);  
  
 //bgSound.play();
 
}

function destr(){
  if(robot2.isTouching(bulletGroup)){
    robot2.destroy();
    bulletGroup.destroyEach();
    //robo2();
   
  }
  
  if(robot1.isTouching(bulletGroup)){
    robot1.destroy();
    bulletGroup.destroyEach();
    //robo1();
      
  }
  
  if(robot3.isTouching(bulletGroup)){
    robot3.destroy();
    bulletGroup.destroyEach();
    //robo3();
    
  }
  
    if(robot4.isTouching(bulletGroup)){
    robot4.destroy();
    bulletGroup.destroyEach();
    //robo4();
    
  }
   
}
function bulletdes(){
  if(bulletGroup.isTouching(block1)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block2)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block3)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block4)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block5)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block6)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block7)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block8)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block9)){
    bulletGroup.destroyEach();
  }
  if(bulletGroup.isTouching(block10)){
    bulletGroup.destroyEach();
  }
}