var Mover = function (posx, posy) {
    this.position = createVector(posx, posy);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
    this.radiusParticle = 50;
    this.centerParticle = createVector(posx, posy);
    this.theta = 0;

    this.update = function () {
        this.theta +=0.01;
    };

    this.checkEdges = function () {
        var mouse = createVector(mouseX, mouseY);
        if (mouse.x < width && mouse.y < height) {
            console.log("inside canvas");
            this.rotateByMouse();
        } else  {
            console.log("outside canvas");
            this.rotateOwn();
        }
    }

    this.rotateByMouse = function () {
        var mouse = createVector(mouseX, mouseY);
        mouse.normalize();
        var angle = atan2(mouseY - height / 2, mouseX - width / 2);
        var px = this.radiusParticle * cos(angle) + this.centerParticle.x;
        var py = this.radiusParticle * sin(angle) + this.centerParticle.y;
        this.position.x = px;
        this.position.y = py;
    }

    this.rotateOwn = function (){
        var px = (this.radiusParticle/2) * cos(this.theta) + this.centerParticle.x;
        var py = (this.radiusParticle/2) * sin(this.theta) + this.centerParticle.y;
        this.position.x = px;
        this.position.y = py; 
    }

    this.display = function () {
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    };
};