var car, wall;
var speed, weight;

function setup(){
    createCanvas(400,400);
    speed = random(55,90);
    weight = random(400,1500);

    car = createSprite(50, 200, 30, 30);
    wall = createSprite(350, 200, 60, 200);
    wall.shapeColor = color(80,80,80);
}

function draw(){
    background(255,0,0);
    
    car.velocityX = speed;

    if(car.x - wall.x <= car.width/2 + wall.width/2 && wall.x - car.x <= car.width/2 + wall.width/2 && car.y - wall.y <= car.height/2 + wall.height/2 && wall.y - car.y <= car.height/2 + wall.height/2){
    var deformation = 0.5 * weight * speed * speed/22500;
    car.velocityX = 0;
    
    if(deformation<100){
        car.shapeColor = color(0,255,0);
    }

    if(deformation<180 && deformation>100){
        car.shapeColor = color(230,230,0);
    }

    if(deformation>180){
        car.shapeColor = color(255,0,0);
    }
  }

    drawSprites();

}