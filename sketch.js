//variaveis//

var sea,ship;
var seaImg,shipImg;

//funções//

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                           "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  drawSprites();
  
  //condições//

  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  
}

//Porque o codigo ja está pronto quando eu baixei o arquivo e nem precisei ter modificalo ele? se mandou o codigo errado ou e isso mesmo?