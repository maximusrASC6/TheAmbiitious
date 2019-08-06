
 
 class MoonSever {
     constructor() {
         this.x = width/2
         this.y = 400
        
         this.show = function() {
            fill(225) 
            rect(this.x, this.y, 40, 40);
          
         this.move = function(dir) {
             this.x += dir*5;
    
            }
         
        
        }
    }
}

class Invader {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.show = function() {
            fill(127,0,0)
            circle(this.x, this.y, 40)
        }
    }
}