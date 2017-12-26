var Mover = function (){
    this.position = createVector(width/2,height/2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 5;

  this.update = function () {
    // Compute a vector that points from position to mouse
    var mouse = createVector(mouseX,mouseY);
    var dir = p5.Vector.sub(mouse,this.position);
    // this.acceleration = p5.Vector.sub(mouse,this.position);
    dir.normalize();

    dir.mult(0.7);

    // Set magnitude of acceleration
    //this.acceleration.setMag(0.01);

    this.acceleration =  dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  };

  this.checkEdges =  function (){
    if(this.position.x > 630 || mover.position.y > 360 ){
        this.position.x -= 10;
        this.position.y -= 10;
    }else if(this.position.x < 0 || this.position.y < 0){
        this.position.x += 10;
        this.position.y += 10;
    }
  }

  this.checkDistance = function (){
     var distance = dist(mouseX, mouseY, this.position.x, this.position.y);

     if(distance < 3){
         console.log("almost in");
         //this.position.x = 0 ;
     }

  }

  this.display = function () {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  };
};