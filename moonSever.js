
 
 class MoonSever {
     constructor() {
         this.x = 100
         this.y = height/2 
        
         this.show = function() {
            fill(225) 
            rect(this.x, this.y, 40, 40);
          
         this.move = function(dir) {
             this.y += dir*5;
    
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