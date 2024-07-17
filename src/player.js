let playCorArr = []
let compCorArr = []
let playSqArr = []
let compSqArr = []
let playXCor
let playYCor
let compXCor
let compYCor

const playerBoard = document.querySelector('#playerboard')
const computerBoard = document.querySelector('#computerboard')

function display () {
  return {
    playXCor: playXCor,
    playYCor: playYCor,
    compXCor: compXCor,
    compYCor: compYCor,
    assignPCor: function () {
    let x = 0
    let y = 1
    for (let i = 1; i < 101; i++) {
      if ((i - 1) % 10 === 0 && i !== 1) {
        x = 1
        y++
        playCorArr.push({ playXCor: x, playYCor: y })
      } else {
        x++
        playCorArr.push({ playXCor: x, playYCor: y })
      }
    }
    return playSqArr
    },
      assignCCor: function () {
      let x = 0
      let y = 1
      for (let i = 1; i < 101; i++) {
        if ((i - 1) % 10 === 0 && i !== 1) {
          x = 1
          y++
          compCorArr.push({ compXCor: x, compYCor: y })
        } else {
        x++
        compCorArr.push({ compXCor: x, compYCor: y })
        }
      }
      return compSqArr
    },
      createPlayerSquares: function () {
        let squareDisArr
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'playersq')
        square.playCoor = playCorArr[i]
        playSqArr.push(square)
        playerBoard.appendChild(square)
      }
      return playerBoard
    },
      createComputerSquares: function () {
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'computersq')
        square.compCoor = compCorArr[i]
        compSqArr.push(square)
        computerBoard.appendChild(square)
      }
      return computerBoard
    },
      playColorCoordinates: function (coorX, coorY, color) {
        console.log(coorX)
        console.log(coorY)
      for(let i = 0; i < 100; i++) {
        if (coorX === playSqArr[i].playCoor.playXCor && coorY === playSqArr[i].playCoor.playYCor) {
          console.log(playSqArr[i].playCoor.playXCor)
          console.log(color)
          playSqArr[i].style.backgroundColor = color
          console.log(playSqArr[i].style.backgroundColor)
        }
      }
    },
      compColorCoordinates: function (coorX, coorY, color) {
      for(let i = 0; i < 100; i++) {
        if (coorX === compSqArr[i].compCoor.compXCor && coorY === compSqArr[i].compCoor.compYCor) {
          compSqArr[i].style.backgroundColor = color
          console.log( { coorX, coorY } )
          return
        }
      }
    },
    
  }
}

let gameDisplay = display()

gameDisplay.assignCCor()
gameDisplay.assignPCor()
gameDisplay.createPlayerSquares()
gameDisplay.createComputerSquares()


module.exports = {
  gameDisplay: gameDisplay,
  compCorArr: compCorArr,
  playCorArr: playCorArr,
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

/*
the reason why the computer coordinates are appearing wonky when displayed is because playSqArr has an 11 xCor before switching
to the next yCor level
*/
