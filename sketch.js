var particles = [];
var particlesLen = 13;
var cnv;
function setup() {
    cnv = createCanvas(640, 640);
    for (var i = 0; i < particlesLen; i++) {
        var px = random(100, width - 100);
        var py = random(100, height - 100);
        var name = "particle" + i;
        var size = random(50, 70);
        particles.push(new Mover(px, py, name, size));
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
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var mouse = createVector(mouseX, mouseY);
        var d = dist(mouseX, mouseY, p.position.x, p.position.y);
        if (d < 24) {
            //console.log("particle " + i +"inside");
            p.color = [244, 66, 203];
        } else {
            p.color = [127, 127, 127];
            //console.log("outside");
        }
    }
}

function mouseMoved() {
    for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.handleHover(mouseX, mouseY);
    }
}
