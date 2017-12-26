var particles = [];

function setup() {
    cnv = createCanvas(640, 360);
    for (var i = 0; i < 5; i++) {
        var px = random(0, width);
        var py = random(0, height);
        var name =  "particle" + i;
       particles.push(new Mover(px, py, name));
    }

}

function draw() {
    background(51);
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.update();
    }
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