document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells:[]};
var numOfRowCol = 4;

function startGame () {  
  generateBoard(numOfRowCol)
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

function generateBoard (numOfRowCol) {
  for (var i = 0; i < numOfRowCol; i++) {
    for (var j = 0; j < numOfRowCol; j++ ) {
      var aCell = {}
      aCell.row = i;
      aCell.col = j;
      aCell.hidden = true;
      aCell.isMine = false;
      aCell.isMarked = false;

      board.cells.push(aCell)
    }
  } 
  //getting random number
  for (var i = 0; i < numOfRowCol; i++) {
    var rand = Math.floor(Math.random()*numOfRowCol*numOfRowCol);
    board.cells[rand].isMine = true;
  }
}

