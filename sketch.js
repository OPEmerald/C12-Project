var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var orange, orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
  //Background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating rabbit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  orangesGroup = new Group();
  applesGroup = new Group();
}


function draw() {
  background(0);

  rabbit.x=World.mouseX

  //sprites colliding with edges and edge creation
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(rabbit.isTouching(applesGroup)){
    applesGroup.destroyEach(apple)
  }

  if(rabbit.isTouching(orangesGroup)){
    orangesGroup.destroyEach(orange)
  }

  createApples();
  createOrange();
  drawSprites();
}

function createApples(){
  if(frameCount % 80 === 0){
    apple = createSprite(random(30, 370), 50)
    apple.addImage(appleImg);
    apple.scale = 0.07
    apple.velocityY = 4
    apple.lifetime=300;
    applesGroup.add(apple);
  }
}

function createOrange(){
  if(frameCount % 80 === 0){
    orange = createSprite(random(30, 370), 80)
    orange.addImage(orangeImg);
    orange.scale = 0.07
    orange.velocityY = 4
    orange.lifetime=300;
    orangesGroup.add(orange);
  }
}