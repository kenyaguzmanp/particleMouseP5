var Mover = function (posx, posy, name, size, context) {
    this.position = createVector(posx, posy);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
    this.radiusParticle = 50;
    this.centerParticle = createVector(posx, posy);
    this.theta = 0;
    this.name = name;
    this.color = [127, 127, 127];
    this.sizeParticle = size;
    this.orbit = random(0,1);
    this.amplitude = random(1,2);
    this.showBar = false;
    this.ctx = context;
   
    this.update = function () {
        this.theta +=0.03;
        this.display(this.ctx);
        this.checkEdges();
    };

    this.checkEdges = function () {
        var mouse = createVector(mouseX, mouseY);
        if (mouse.x < width && mouse.y < height) {
            //console.log("inside canvas");
            //this.rotateByMouse();
           this.checkNearParticles();
        } else  {
            //console.log("outside canvas");
            this.rotateOwn();
        }
    };

    this.checkNearParticles = function (){
        //console.log("checking near particles");
        var mouse = createVector(mouseX, mouseY);
        var d = dist(mouseX, mouseY, this.position.x, this.position.y);
        //this.radiusParticle*3
        if(d<100){
            //this.color = [244, 66, 203];
            this.rotateByMouse();
        }else{
            this.rotateOwn();
           // this.color = [127, 127, 127];
        }
    };

    this.rotateByMouse = function () {
        var mouse = createVector(mouseX, mouseY);
        mouse.normalize();
        var angle = atan2(mouseY - height / 2, mouseX - width / 2);
        var px = this.radiusParticle * cos(angle) + this.centerParticle.x;
        var py = this.radiusParticle * sin(angle) + this.centerParticle.y;
        this.position.x = px;
        this.position.y = py;
    };

    this.rotateOwn = function (){
        var orbit=this.orbit;
        var amplitude = this.amplitude;
        var px = orbit*(this.radiusParticle/2) * cos(this.theta*amplitude) + this.centerParticle.x;
        var py = orbit*(this.radiusParticle/2) * sin(this.theta*amplitude)*0.1 + this.centerParticle.y;
        this.position.x = px;
        this.position.y = py;
    };

    this.handleHover = function(mx, my) { 
        var d = dist(mx, my, this.position.x, this.position.y);
        if (d < this.sizeParticle/2) {
          //console.log("hover: " + this.name);
          this.color = [244, 66, 203];
          this.showBar = true;         
        } else {
            this.color = [127, 127, 127];
            this.showBar = false;
        }
    };

    this.display = function (ctx) {
        if(this.showBar){
            cursor(HAND);
            //princiapl particle
            stroke(0);
            strokeWeight(2);
            //fill(this.color[0], this.color[1], this.color[2]);
            fill(0, 168, 143);
            ellipse(this.position.x, this.position.y, size, size);

            //create the diagonal bar
            stroke(50, 66, 203);
            translate(this.position.x, this.position.y);
            rotate(PI/4);
            rect(0, 0, this.sizeParticle, 2); 

            //create intersection point
            fill(255, 255, 255);
            ellipse(0, 0, 10, 10);

            //create the big Voice Particle
            fill(10, 49, 84);
            ellipse(this.sizeParticle+50, 0, 1.5*size, 1.5*size);

            //create intersection point
            fill(255, 255, 255);
            ellipse(this.sizeParticle, 0, 10, 10);
        }else{
            stroke(0);
            strokeWeight(2);
            fill(this.color[0], this.color[1], this.color[2]);
            ellipse(this.position.x, this.position.y, size, size);
        }       
    };

};