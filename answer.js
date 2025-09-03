

function setup() {
  new Canvas(600,400);
  world.gravity.y = 10;
}

function draw() {
    background(220);
   if(mouse.presses("left")) {
    let clone = new Sprite (mouseX, mouseY, 30, 'dynamic');
    noStroke();
   }
}