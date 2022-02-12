function preload() {}

function setup() {
  canvas = createCanvas(640, 500);
  canvas.position(50, 120);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  circle(50, 50, 80);
  stroke(150, 0, 0);
  fill(150, 0, 0);

  rect(90, 35, 460, 30);
  fill(0, 0, 150);
  stroke(0, 0, 150);

  stroke(150, 0, 0);
  fill(150, 0, 0);
  circle(590, 50, 80);

  rect(90, 430, 460, 30);
  fill(0, 0, 150);
  stroke(0, 0, 150);

  rect(575, 90, 30, 370);
  fill(0, 0, 150);
  stroke(0, 0, 150);

  image(video,180,150,250,250);

  rect(35, 90, 30, 370);
  fill(0, 0, 150);
  stroke(0, 0, 150);

  rect(575, 90, 30, 370);
  fill(0, 0, 150);
  stroke(0, 0, 150);

  circle(590, 450, 80);
  stroke(150, 0, 0);
  fill(150, 0, 0);

  circle(50, 450, 80);
  stroke(150, 0, 0);
  fill(150, 0, 0);
}

function take_snapshot(){
  save('selfie.png');
}
