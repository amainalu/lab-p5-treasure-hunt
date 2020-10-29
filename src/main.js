const game = new Game();

function preload(){
  console.log("we are live");
}

function setup() {
  createCanvas (WIDTH, HEIGHT);
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}
function draw() {
  clear();
  background("cyan");
  game.drawGrid();
}
