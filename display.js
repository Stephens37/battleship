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
*/

let playSqArr = []
let compSqArr = []

/*
  create an array of coordinates without assigning them to a variable
  loop through this array and assign each objects xCor and yCor as grid column/row values
*/

function assignPCor () {
  let x = 0
  let y = 1
  for (let i = 0; i < 100; i++) {
    if ((i - 1) % 10 === 0) {
      y++
      x = 1
    }
    x++
    playSqArr.push({ xCor: x, yCor: y })
  }
  return playSqArr
}
assignPCor()

function assignCCor () {
  let x = 0
  let y = 1
  for (let i = 0; i < 100; i++) {
    if ((i - 1) % 10 === 0) {
      y++
      x = 1
    }
    x++
    compSqArr.push({ xCor: x, yCor: y })
  }
  return compSqArr
}
assignCCor()

/* the only question i have about not assigning a variable
is how I will be able to assign colours, etc. to the squares

perhaps later, i then find a match with the x and y coordinates,
ex: if (grid-column: xCor && grid-row: yCor) then that grid-column and row is red
*/

const playerBoard = document.querySelector('#playerboard')
const computerBoard = document.querySelector('#computerboard')

/*
  square is clicked
  grid-column = xCor
  grid-row = yCor
  run the ship hit function
  if ship is hit colour the square red using this function
  otherwise colour the square gray
  either way make the square unclickable
*/

/*
  how to create the grid display itself
  to create this I need to assign each square to a div
  I don't want 100 html elements so I want to create these in a loop
*/

function createPlayerSquares() {
  for(let i = 0; i < 100; i++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'playersq')
    playerBoard.appendChild(square)
  }
}
createPlayerSquares()

function createComputerSquares() {
  for(let i = 0; i < 100; i++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'computersq')
    computerBoard.appendChild(square)
  }
}
createComputerSquares()

/*
  need to be able to retrieve a square based on its x and y coordinates
  to do this I will create a 10x10 grid
  when a square is clicked check which spot in array has the xCor with the same number as grid-column
  and yCor with the same number as grid-row
*/


/* function playerSquares () {
  for (let i = 0; i < 100; i++) {
    instead of
    playSqArr.playerSquare${`i`}.style.gridColumn = playSqArr.playerSquare${`i`}.xCor
    do
    "gameboard".style.gridColumn = playSqArr[i].xCor
    
    
    playerBoard.appendChild(playSqArr[i])
    playSqArr[i].style.gridColumn = playSqArr[i].xCor
    playSqArr[i].style.gridRow = playSqArr[i].yCor
  }
}

playerSquares()

function compSquares () {
  for (let i = 0; i < 100; i++) {
    computerBoard.appendChild(compSqArr[i])
    compSqArr[i].style.gridColumn = compSqArr[i].xCor
    compSqArr[i].style.gridRow = compSqArr[i].yCor
  }
}

compSquares()
*/

