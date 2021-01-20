var hour = hour();
var mn = minute();
var sc = second();
var scAngle = map(sc , 0 , 60, 0, 360)


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  push(); 
  rotation(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0 , 0, 100, 0)
  drawSprites();
}
let h = hour();
text('Current hour:\n' + h, 5, 50);
let m = minute();
text('Current minute: \n' + m, 5, 50);
let s = second();
text('Current second: \n' + s, 5, 50);