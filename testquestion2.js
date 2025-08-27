function setup() {
  new Canvas(600,400);
  background(150);
  world.gravity.y = 5;

  let floor = new Sprite (300,385,600,30);
  floor.collider = 'static';
}

function draw() {
  if(mouse.presses("left")) {
    let clone = new Sprite (mouseX, mouseY);
    clone.collider = "dynamic";
    clone.bounciness = 0.3;
   }
}

// you did not state that the sprite has to be a ball
// there is a trail, idk why its there, but its not a requirement for it not to be there