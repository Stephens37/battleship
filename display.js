/*
take the matrix created in gameboard
use that to make a 10x10 grid of squares

const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))
for each part of this array
make a square

need to connect the creation of this array with a grid created in css grid

make the grid in css grid
create loop that assigns square i , with i being the number, x and y coordinates
assign each square a position a grid column and row position based upon their x and y coordinates
make these squares children of the board class

let playSqArr = []
let compSqArr = []

function assignPCor() {
  let i = 0
  let playerSquare${`i`} = {xCor: x, yCor: y}
  let x = 0
  let y = 1
  for (i = 0; i < boardArr.length; i++) {
    if(i = (i % 10 = 0) + 1) {
      y++
      x = 1
    }
    x++
    playSqArr.push(playerSquare${`i`})
  }
}
assignPCor()

function assignCCor() {
  let i = 0
  let compSquare${`i`} = {xCor: x, yCor: y}
  let x = 0
  let y = 1
  for (i = 0; i < boardArr.length; i++) {
    if(i = (i % 10 = 0) + 1) {
      y++
      x = 1
    }
    x++
    compSqArr.push(compSquare${`i`})
  }
}
assignCCor()

let playerBoard = document.querySelector('#playerboard')
let computerBoard = document.querySelector('#computerboard')

function playerSquares() {
  for(let i = 0; i < 100; i++) {
    playSqArr.playerSquare${`i`}.style.gridColumn = playSqArr.playerSquare${`i`}.xCor
    playSqArr.playerSquare${`i`}.style.gridRow = playSqArr.playerSquare${`i`}.yCor
    playerBoard.appendChild(playSqArr.playerSquare${`i`})
  }
}

playerSquares()

function compSquares() {
  for(let i = 0; i < 100; i++) {
    compSqArr.compSquare${`i`}.style.gridColumn = compSqArr.compSquare${`i`}.xCor
    compSqArr.compSquare${`i`}.style.gridRow = compSqArr.compSquare${`i`}.yCor
    playerBoard.appendChild(compSqArr.compSquare${`i`})
  }
}

compSquares()

*/
