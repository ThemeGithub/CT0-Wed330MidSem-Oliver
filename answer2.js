function setup() {
  new Canvas(600,400);
  world.gravity.y = 10;
  floor = new Sprite(300, height-30, 600, 30, static)
}

function draw() {
    background(220);
   if(mouse.presses("left")) {
    let clone = new Sprite (mouseX, mouseY, 30, 'dynamic');
    noStroke();
   }
}