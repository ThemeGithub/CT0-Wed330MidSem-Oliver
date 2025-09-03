function setup() {
  new Canvas(600,400);
  background(150);
  world.gravity.y = 10;
}

function draw() {
   if(mouse.presses("left")) {
    let clone = new Sprite (mouseX, mouseY);
    clone.collider = "dynamic";
   }
}