let playCorArr = []
let compCorArr = []
let playSqArr = []
let compSqArr = []
let xCor
let yCor

const playerBoard = document.querySelector('#playerboard')
const computerBoard = document.querySelector('#computerboard')

function display () {
  return {
    xCor: xCor,
    yCor: yCor,
    assignPCor: function () {
    let x = 0
    let y = 1
    for (let i = 0; i < 101; i++) {
      if ((i - 1) % 10 === 0 && i !== 1) {
        x = 1
        y++
        playCorArr.push({ xCor: x, yCor: y })
      } else {
        x++
        playCorArr.push({ xCor: x, yCor: y })
      }
    }
    return playSqArr
    },
      assignCCor: function () {
      let x = 0
      let y = 1
      for (let i = 0; i < 101; i++) {
        if ((i - 1) % 10 === 0 && i !== 1) {
          x = 1
          y++
          compCorArr.push({ xCor: x, yCor: y })
        } else {
        x++
        compCorArr.push({ xCor: x, yCor: y })
        }
      }
      console.log(compSqArr)
      return compSqArr
    },
      createPlayerSquares: function () {
        let squareDisArr
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'playersq')
        square.coordinates = playCorArr[i]
        console.log(square.coordinates)
        console.log(playCorArr[i])
        playSqArr.push(square)
        playerBoard.appendChild(square)
        console.log(square)
      }
      console.log('player')
      return playerBoard
    },
      createComputerSquares: function () {
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'computersq')
        square.coordinates = compCorArr[i]
        console.log(square)
        computerBoard.appendChild(square)
      }
      console.log('computer')
      return computerBoard
    },
      colorCoordinates: function (coorX, coorY, color) {
        for(let i = 0; i < 100; i++) {
          if (coorX === playSqArr[i].coordinates.xCor && coorY === playSqArr[i].coordinates.yCor) {
            console.log(color)
            console.log(playSqArr[i])
            playSqArr[i].style.backgroundColor = color
            return
          }
        }
      }
  }
}

let gameDisplay = display()

gameDisplay.assignCCor()
gameDisplay.assignPCor()
gameDisplay.createPlayerSquares()
gameDisplay.createComputerSquares()


module.exports = {
  gameDisplay: gameDisplay,
  playSqArr: playSqArr
}

/*
  create x and y coordinates within the display file
  import the display object over to gameboard
  gameboard x and y coordinates equal the display x and y coordinates
  interaction happens in gameboard, uses functions from the display file

  essentially, gameboard provides the interactions, display, displays them

  gameboard should be relying on the display file to show interactions
  display should not be relying on the gameboard file to interact with the display
*/

/*
  create player coordinates
  create squares for player, assign coordinates
  do the same for computer
*/












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
