(function(){

const canvas = document.getElementById( 'lienzo' );

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#eeff00';

const ctx = canvas.getContext( 
    '2d' 
);

const bricksPerRow = 8;
const numRows = 3;
const gap = 5;

let brickWidth = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
let brickHeight = brickWidth / 4;

const bricks = [];

function createWall() {
    for ( let row = 0; row < numRows; row++ ) {
		bricks[row] = new Array(9);                   //creando la matriz
        for ( let col = 0; col < bricksPerRow; col++ ) {
            const brick = {

                c: col,
                r: row,
                w: brickWidth,
                h: brickHeight,
                color: 'orangered',

                // methods
                paint: function() {
                    const x = this.c * (this.w + gap);
                    const y = this.r * (this.h + gap);

                    ctx.fillStyle = this.color;
                    ctx.fillRect( x, y, this.w, this.h );
                }
				
				
            }

			bricks[row][col] = brick ;        //indexando a la matriz
			
		
        }
		
    }
}

console.table(bricks);

function drawBrick( col, row ) {
    //const idx = row * bricksPerRow+ col;
	//brick.paint();
    bricks[row][col].paint();       //pintando en la matriz
    //console.log(1);
}

function drawRow( row ) {
    for ( let x = 0; x < bricksPerRow; x++ ) {
        drawBrick( x, row );
    }
}

function drawWall() {
    for ( let y = 0; y < numRows; y++ ) {
        drawRow( y );
    }
}

function recomputeBrickSize() {
    // resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    brickWidth = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
    brickHeight = brickWidth / 4;    
}

function drawGame() {
    recomputeBrickSize();
    drawWall();
    // drawBall();      // TODO
    // drawPaddle();    // TODO
}

// register drawGame as a callback for resize events
window.onresize = drawGame;

// create brick wall
createWall();

// paint the game when the page is first loaded
drawGame();



})();

