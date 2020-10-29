
// a col property, to indicate the column
// a row property, to indicate the row the player is in.
// a moveUp() method, to move the player up one row
// a moveDown() method, to move the player down one row
// a moveLeft() method
// a moveRight() method
// const player = new Player(0,0) // (0,0) = Initial position (col, row)
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2

class Plater{
    constructor(column, row){
        this.position =(column, row);
        
    }

    
    moveLeft(steps){
        if (this.position.column <= 0){
          return;  
        }
        this.position.column -= steps;
    }

    moveRight(steps){
        if ( this.position.column >= 10){
            return;
        }
        this.position.column += steps;
    }

    moveUp (steps){
        if (this.position.row <=0){
            return;
        }
        this.position.row -=steps;
    }

    moveDown (steps){
    if(this.position.row >=SQUARE_SIDE){
        return;
    }
    this.position.row +=steps;
    }

    randomizePosition() {
        const randomX = Math.floor(Math.random() * SQUARE_SIDE - this.position.column);
        const randomY = Math.floor(Math.random() * SQUARE_SIDE - this.position.row);
        this.position.column = randomX;
        this.position.row = randomY;
    }  
}
