var ship;
var boxPosX = 1155
var boxPosY = 650


function setup() {
    createCanvas(1230, 700);
    ship = new MoonSever();
}

function draw() {
    background("black");
    //FullScreen Box
    fill(200, 160)
    rect(boxPosX, boxPosY, 41, 41, 10)
    //Player's ship
    ship.show();
    if (keyIsDown(DOWN_ARROW)) {
        y -= 5;
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        ship.move(-3);
    } else if (keyCode === DOWN_ARROW) {
        ship.move(3);

    }

}

function mousePressed() {
    if (mouseX >= boxPosX && mouseY >= boxPosY) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
