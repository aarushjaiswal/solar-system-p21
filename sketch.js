var sun, planet1, planet2, planet3

function preload(){
  sunImage = loadImage("./images/PikPng.com_planet-png_589745.png");
  planet2Img = loadImage("./images/PikPng.com_planet-png_588853.png");
  planet1Img = loadImage("./images/PikPng.com_pluto-planet-png_2751913.png");
  planet3Img = loadImage("./images/PikPng.com_planet-png_590267.png");
}

function setup() {
  createCanvas(800,800);
  sun = createSprite(400, 400, 80, 80);
  planet1 = createSprite(400, 300, 20, 20);
  planet2 = createSprite(200, 400, 50, 50);
  planet3 = createSprite(650, 350, 70, 70);

  planet1.addImage(planet1Img);
  planet2.addImage(planet2Img);
  planet3.addImage(planet3Img);
  sun.addImage(sunImage);

  sun.scale=0.1;
  planet1.scale=0.02;
  planet2.scale=0.05;
  planet3.scale=0.07;
  
}

function draw() {
  background(0);
  if(frameCount % 3 === 0){
    sun.scale=sun.scale+0.005;
  }  
  if (sun.isTouching(planet1)){
    planet1.destroy();
  }

  if (sun.isTouching(planet3)){
    planet3.destroy();
  }
  
  if (sun.isTouching(planet2)){
    planet2.destroy();
  }
  drawSprites();
}