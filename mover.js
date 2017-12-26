var Mover = function () {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;
    this.radiusParticle = 50;
    this.centerParticle = createVector(width / 2, height / 2);

    this.update = function () {
        // Compute a vector that points from position to mouse
        var mouse = createVector(mouseX, mouseY);
        mouse.normalize();
        var angle = atan2(mouseY - height / 2, mouseX - width / 2);

        var px = this.radiusParticle * cos(angle) + width / 2;
        var py = this.radiusParticle * sin(angle) + height / 2;

        this.position.x = px;
        this.position.y = py;

        /*
    
        var dir = p5.Vector.sub(mouse,this.position);
       
        // this.acceleration = p5.Vector.sub(mouse,this.position);
        dir.normalize();
    
        dir.mult(0.5);
    
        // Set magnitude of acceleration
        //this.acceleration.setMag(0.01);
        
        this.acceleration =  dir;
    
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
        */
    };

    this.checkEdges = function () {
        if (this.position.x > width || mover.position.y > height) {
            console.log("out of edges");
            this.position.x = 0;
            this.position.y = 0;
        } else if (this.position.x < 0 || this.position.y < 0) {
            console.log("out of edges");
            this.position.x = 0;
            this.position.y = 0;
        }
    }

    this.checkParticleBoundary = function () {
        var mouse = createVector(mouseX, mouseY);
        mouse.normalize();
        var angle = atan2(mouseY - height / 2, mouseX - width / 2);

        var px = this.radiusParticle * cos(angle) + width / 2;
        var py = this.radiusParticle * sin(angle) + height / 2;

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