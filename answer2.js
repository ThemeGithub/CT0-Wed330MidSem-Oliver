let ball;
let floor;
function setup() {
  new Canvas(600,400);
  world.gravity.y = 10;
  floor = new Sprite(300, 385, 600, 30, 'static')
}

function draw() {
    background(220);
   if(mouse.presses("left")) {
    let ball = new Sprite (mouseX, mouseY, 30, 'dynamic');
    noStroke();
   }
}