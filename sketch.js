var abc = "hey";

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");

  // background(255, 255, 254);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  clear();
}

function mousePressed() {}

function draw() {
  var p = createP(abc);
  p.position(mouseX, mouseY);
  // background(255, 254, 254);
  if (mouseIsPressed) {
    strokeWeight(5);
    line(
      pmouseX - map(sin(radians(frameCount)), -1, 1, -10, 10),
      pmouseY - 10,
      mouseX,
      mouseY
    );
  }
}
