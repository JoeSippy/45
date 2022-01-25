var mario;
var ground;




function preload() {
mario_running = loadAnimation("1.png","2.png","3.png","5.png","4.png","7.png")
mario_jumping = loadAnimation("11.png","22.png","33.png","44.png","55.png","66.png","77.png")

}

function setup() {
    createCanvas(800, 300);
    mario = createSprite(100, 240, 60, 60);
    mario.scale = 0.33
    mario.addAnimation("running",mario_running);
    mario.addAnimation("jumping",mario_jumping);
    ground = createSprite(400, 290, 800, 20)
}
function draw() {
    background(50, 50, 50);
     
    if (keyDown("space")) {
        mario.velocityY = -15;
        mario.changeAnimation("jumping",mario_jumping);
    }
    mario.velocityY = mario.velocityY + 0.6;



    mario.collide(ground)
    drawSprites();
}