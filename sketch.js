var mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(51);

    /*
  if(mover.position.x > 630 || mover.position.y > 360){
    console.log("out");
    mover.position.x -= 10;
    mover.position.y -= 10;
  }
*/
  mover.update();
  mover.display();
  mover.checkEdges();
  mover.checkParticleBoundary();
  
}