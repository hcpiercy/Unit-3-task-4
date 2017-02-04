// function setup(){
//   createCanvas(1000, 1000, WEBGL);
// }

// change to draw once you have finished editing, drawShapes if you want to edit
function draw(){
  background(250);
  rotateY(frameCount * 0.010);
  rotateX(frameCount * 0.09);
  fill(0);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.04 + j) * 100, sin(frameCount * 0.04 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.004);
      push();
      ellipse(0, 0, 10);
      
      triangle(50, 5, 50);
      triangle(-50, -5, -50);
      // triangle(14, , 10);
      // ellipse(9, 9, 9);
      // triangle(5, 5, 5);
      pop();
    }
    pop();
  }
}
// delete this after editing
// function draw() {
//   if(frameCount === 10) {
//     drawShapes();
//   }
// }

function setup() {
  createCanvas(1000, 1000, WEBGL);
  // colorMode(RGB, 30, 100, 50);  
  noStroke();
  background(50, 40, 40, 50);
  
var flock;


function setup() {
  createCanvas(1000,1000);
  createP("Drag the mouse to generate new boids.");
  
  flock = new Flock();
  // Add an initial set of boids into the system
  for (var i = 0; i < 100; i++) {
    var b = new Boid(width/10,height/10);
    flock.addBoid(b);
    function draw() {
  background(51);
  flock.run();
}
    
    function mouseClicked() {
  flock.addBoid(new Boid(mouseX,mouseY));
}
  }
}  
}

// function Boid(x,y) {
//   this.acceleration = createVector(0,0);
//   this.velocity = createVector(random(-1,1),random(-1,1));
//   this.position = createVector(x,y);
//   this.r = 3.0;
//   this.maxspeed = 3;    // Maximum speed
//   this.maxforce = 0.05; // Maximum steering force
// }

// Boid.prototype.run = function(boids) {
//   this.flock(boids);
//   this.update();
//   this.borders();
//   this.render();
// }

