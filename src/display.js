const gameboard = require('./gameboard.js')

let playSqArr = []
let compSqArr = []

const playerBoard = document.querySelector('#playerboard')
const computerBoard = document.querySelector('#computerboard')

const display = {
  assignPCor: function () {
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
},
  assignCCor: function () {
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
},
  createPlayerSquares: function () {
  for(let i = 0; i < 100; i++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'playersq')
    playerBoard.appendChild(square)
  }
},
  createComputerSquares: function () {
  for(let i = 0; i < 100; i++) {
    let square = document.createElement('div')
    square.setAttribute('class', 'computersq')
    square.coordinates = gameboard.coordinates[i]
    computerBoard.appendChild(square)
  }
  }
}

module.exports = {
  display: display
}













/*
  create an array of coordinates without assigning them to a variable
  loop through this array and assign each objects xCor and yCor as grid column/row values
*/

/* the only question i have about not assigning a variable
is how I will be able to assign colours, etc. to the squares

perhaps later, i then find a match with the x and y coordinates,
ex: if (grid-column: xCor && grid-row: yCor) then that grid-column and row is red
*/

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
