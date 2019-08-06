var ship;
var enemies = [];
var boxPosX = 1155
var boxPosY = 650
var x = 100
var y = 350


function setup() {
    createCanvas(1230, 700);
    
    ship = new MoonSever();
    
    for (let i = 0; i < 50; i++) {
        enemies[i]= new Invader(random(height), 150);  
    }
}

function draw() {
    background("black");
    //FullScreen Box
    fill(200, 160)
    rect(boxPosX, boxPosY, 41, 41, 10)
    //Player's ship
    ship.show();
    //Enemy
    for (let i = 0; i < 50; i++) {
        enemies[i].show();
    }
}

 function keyPressed() { 
     if (keyCode === LEFT_ARROW) {
         ship.move(-3)

     } else if (keyCode === RIGHT_ARROW) { 
                ship.move(3)
            }

     

 }

function mousePressed() {
    if (mouseX >= boxPosX && mouseY >= boxPosY) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
