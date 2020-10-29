class Game {
  constructor(){
    this.player = new this.player()
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
   
    for (let i=0; i<11; i++){
      let side = SQUARE_SIDE*i;
      line(0, side, WIDTH, side);
      line(side, 0, side, WIDTH);
    };
  }
}
