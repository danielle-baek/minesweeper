document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var cellNumber = 4;

function startGame () {  
  generateBoard(cellNumber)
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

  }
  
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine) {
      if (!board.cells[i].isMarked) {
         return;                                      
      }
   }
    if (!board.cells[i].isMine && board.cells[i].hidden){
      return;
    }
  }  
  
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!');
  return;
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++;
    }
  }
  return count;
}

function generateBoard (cellNumber) {
  var board = {cells:[]}
  for (var i = 0; i < cellNumber; i++) {

  }
  var board = {cells:[
    {row:0, col:0, isMine:"", hidden:true}, 
    {row:0, col:1, isMine:true, hidden:true},
    // {row:0, col:2, isMine:true, hidden:true},
    // {row:0, col:3, isMine:"", hidden:true}, 
    {row:1, col:0, isMine:"", hidden:true}, 
    {row:1, col:1, isMine:"", hidden:true}
    // {row:1, col:2, isMine:"", hidden:true},
    // {row:1, col:3, isMine:"", hidden:true},
    // {row:2, col:0, isMine:"", hidden:true}, 
    // {row:2, col:1, isMine:"", hidden:true},
    // {row:2, col:2, isMine:"", hidden:true},
    // {row:2, col:3, isMine:"", hidden:true},
    // {row:3, col:0, isMine:"", hidden:true}, 
    // {row:3, col:1, isMine:"", hidden:true},
    // {row:3, col:2, isMine:"", hidden:true},
    // {row:3, col:3, isMine:"", hidden:true},
    ]};
}

