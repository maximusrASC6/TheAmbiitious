var ship;
var enemies = [];
var boxPosX = 1155
var boxPosY = 650
var x = 100
var y = 350


function setup() {
    createCanvas(1230, 700);
    
    ship = new MoonSever();
    
    for (let i = 0; i < 10; i++) {
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
    for (let i = 0; i < 10; i++) {
        enemies[i].show();
    }
    
    
      if (keyIsDown(DOWN_ARROW)) {
          y += 3;
      }
      if (keyIsDown(UP_ARROW)) {
          y -= 3;
      }
      if (keyIsDown(RIGHT_ARROW)) {
          x += 3;
      }
      if (keyIsDown(LEFT_ARROW)) {
          x -= 3;
      }

      rect(x, y, 40, 40)
       


}

 function keyPressed() { 
     if (keyCode === UP_ARROW) {
         ship.move(-3)

     } else if (keyCode === DOWN_ARROW) { 
                ship.move(3)
            }

     

 }

function mousePressed() {
    if (mouseX >= boxPosX && mouseY >= boxPosY) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
