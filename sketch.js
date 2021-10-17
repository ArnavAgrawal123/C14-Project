var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup, gameover;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, gameoverImage;

var score =0;

function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  gameoverImage = loadImage("game_over_PNG57.png");
}

function setup() {
  createCanvas(1530, 740);

  //creating background
  scene = createSprite(765,370,765,370);
  scene.addImage(backgroundImage);
  scene.scale = 8;
  
  // creating bow to shoot arrow
  bow = createSprite(1450,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(0);
  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
    
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }


  drawSprites();

  
  if (redB.x > 1530){

    gameover = createSprite(765,370,10,10);
    gameover.addImage(gameoverImage);
  }
  
  text("Score: "+ score, 1400,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 7;
  red.lifetime = 1600;
  red.scale = 0.05;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 1600;
  blue.scale = 0.05;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 10;
  green.lifetime = 1600;
  green.scale = 0.05;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 5;
  pink.lifetime = 1600;
  pink.scale = 1;
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(1400, 1400, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 1400;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 1600;
  arrow.scale = 0.3;

  arrowGroup.add(arrow);
   
}
