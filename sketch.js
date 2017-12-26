var mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(51);

  mover.update();
  mover.display();
  mover.checkEdges();
  //mover.checkParticleBoundary();
  
}

function mousePressed (){
    var mouse =  createVector(mouseX,mouseY);
    var angle = atan(mouse.y/mouse.x); 
    var angle2 = atan2(mouseY - height / 2, mouseX - width / 2); 
    console.log("mover position: ", mover.position);
    console.log("mouse position: ", mouse);
    console.log("angle: " + angle);
    console.log("angle2: " + angle2);
}