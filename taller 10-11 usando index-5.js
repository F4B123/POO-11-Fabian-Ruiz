(function(){

const bricksPerRow = 8;
const numRows = 3;
const gap = 5;

let brickWidth = (window.innerWidth - (bricksPerRow - 1) * gap) / bricksPerRow;
let brickHeight = brickWidth / 4;

//const bricks = [];                como esta originalmente en el codigo
const bricks = Array( numRows).fill(Array(bricksPerRow ).fill(0));

console.table(bricks);

})();

