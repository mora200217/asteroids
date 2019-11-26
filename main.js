let ship;
function setup(){
    createCanvas(screen.width - 100, screen.height - 200); 
    ship = new Ship();
}

function draw(){
    background(0,0,0); 
    fill(255);
    noStroke();

    ship.draw(); 
}


class Ship{
    
    constructor(){
        this.pos = createVector(200, 200); 
        this.vel = createVector(1,1); 
        this.dir =  createVector(0,1)
        this.RAD = 20; 
    }

    draw = function(){
        
        fill(255)
        
        
        
        beginShape(); 
        vertex(this.pos.x, this.pos.y - this.RAD); 
        vertex(this.pos.x - this.RAD, this.pos.y + this.RAD); 
        vertex(this.pos.x, this.pos.y + 0.5 *  this.RAD); 
        vertex(this.pos.x + this.RAD, this.pos.y + this.RAD); 
        endShape(CLOSE); 
        
    }

    update = function(){
        
            this.pos.add(vel)
        

    }

    rotate = function(){
        
    }
    
}
function keyPressed() {
    ship.update();
    if (keyCode === LEFT_ARROW) {
      ship.update();
    } else if (keyCode === RIGHT_ARROW) {
      ship.rotate(1);
    }
  }