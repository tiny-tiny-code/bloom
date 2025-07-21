let petalCount;
let petalColor;
let centerColor;
let radius;
let rotation = 0;
let rotationSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  generateFlower();
}

function draw() {
  background(255);

  // Update rotation
  rotation += rotationSpeed;

  translate(width / 2, height / 2);
  rotate(rotation);
  drawFlower();
}

function generateFlower() {
  petalCount = int(random(5, 12));
  petalColor = color(random(100, 255), random(100, 255), random(100, 255), 180);
  centerColor = color(random(120, 255), random(0, 180), 0);
  radius = random(50, 120);
  rotationSpeed = random(-0.5, 0.5); // gentle spin in either direction
}

function drawFlower() {
  noStroke();
  
  // Draw petals
  fill(petalColor);
  for (let i = 0; i < petalCount; i++) {
    let angle = 360 / petalCount * i;
    push();
    rotate(angle);
    ellipse(0, -radius, radius * 0.8, radius * 2);
    pop();
  }

  // Draw center
  fill(centerColor);
  ellipse(0, 0, radius * 1.2, radius * 1.2);
}

function touchStarted() {
  generateFlower(); // Tap to re-bloom
  return false;
}
