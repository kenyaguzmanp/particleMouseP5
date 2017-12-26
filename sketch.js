var mover;
var mover2;

function setup() {
    cnv = createCanvas(640, 360);
    mover = new Mover(width / 2, height / 2);
    mover2 = new Mover(100, 100);

}

function draw() {
    background(51);
    mover.update();
    mover.display();
    mover.checkEdges();
    //mover.checkParticleBoundary();

    mover2.update();
    mover2.display();
    mover2.checkEdges();

}

function mousePressed() {
    var mouse = createVector(mouseX, mouseY);
    var angle = atan(mouse.y / mouse.x);
    var angle2 = atan2(mouseY - height / 2, mouseX - width / 2);
    console.log("mover position: ", mover.position);
    console.log("mouse position: ", mouse);
    console.log("angle: " + angle);
    console.log("angle2: " + angle2);
}