var Mover = function (posx, posy, name) {
    this.position = createVector(posx, posy);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
    this.radiusParticle = 50;
    this.centerParticle = createVector(posx, posy);
    this.theta = 0;
    this.name = name;
    this.color = [127, 127, 127];
   
    this.update = function () {
        this.theta +=0.03;
        this.display();
        this.checkEdges();
    };

    this.checkEdges = function () {
        var mouse = createVector(mouseX, mouseY);
        if (mouse.x < width && mouse.y < height) {
            //console.log("inside canvas");
            this.rotateByMouse();
            this.checkNearParticles();
        } else  {
            //console.log("outside canvas");
            this.rotateOwn();
        }
    }

    this.checkNearParticles = function (){
        //console.log("checking near particles");
        var mouse = createVector(mouseX, mouseY);
        var d = dist(mouseX, mouseY, this.position.x, this.position.y);
        if(d<this.radiusParticle*2){
            console.log("particle: " + this.name + "is near");
            this.color = [244, 66, 203];
        }else{
            this.color = [127, 127, 127];
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
        fill(this.color[0], this.color[1], this.color[2]);
        ellipse(this.position.x, this.position.y, 48, 48);
    };
};