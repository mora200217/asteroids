let ship;
function setup(){
    createCanvas(screen.width, screen.height); 
    ship = new Ship();
}

function draw(){
    background(0,0,0); 
    fill(255);
    noStroke();
    ellipse(20, 20, 20, 20); 
    ship.draw(); 
}


class Ship{
    
    constructor(){
        this.pos = createVector(200, 200); 
        this.RAD = 20; 
    }

    draw = function(){
        this.pos.x = mouseX;
        fill(255)
        stroke(255); 
    beginShape(); 
        vertex(this.pos.x, this.pos.y + this.RAD); 
        vertex(this.pos.x - 0.25 * this.RAD, this.pos.y - 0.5 * this.RAD); 

    endShape(CLOSE); 
    }

    update = function(){

    }
    
}