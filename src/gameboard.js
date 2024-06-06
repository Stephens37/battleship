/* ships are placed by clicking a square
if a square is clicked and the ship won't fit inside the following squares an error is called
otherwise the ship will appear in its placement on the gameboard

this will be a function within the gameboard function
1 ship takes up 2 vertexes, 2 ships take up 3, 1 four, and another five
*/

/*
receive attack will check if a ship was placed on the clicked coordinates
if ship present, ship.hit() is called,

regardless of whether a ship was hit or not
that square changes color
and is not able to be clicked
*/

/*
when a ship is sunken
ship.sunk() is called
that ship is displayed in the sunk category
*/

const { timesHit, sunk, shipLength } = require("./ship")
// const player = require('./player.js')
// let xCor = player.xCor
// let yCor = player.yCor

// const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))

let sunkArr = []
const gameOver = 'Game Over'

let destroyer = { shipLength: 2, timesHit: 0, sunk: false }
let submarine = { shipLength: 3, timesHit: 0, sunk: false }
let cruiser = { shipLength: 3, timesHit: 0, sunk: false }
let battleship = { shipLength: 4, timesHit: 0, sunk: false }
let carrier = { shipLength: 5, timesHit: 0, sunk: false }

const shipArr = [destroyer, submarine, cruiser, battleship, carrier]

let missed = []

function gameboard (xCor, yCor, shipType) {
  let coordinates = { xCor, yCor }
  let corArr = []
  let usedSquares = []
  let t = 0
  return {
    shipType: shipType,
    coordinates: coordinates,
    xCor: xCor,
    yCor: yCor,
    corArr: corArr,
    usedSquares: usedSquares,
    placement: function (coordinates) {
      /*
      if the x coordinate + ship.length is greater than 10
      throw error
      else return
      */
        for(let i = 0; i < 4; i++) {
          shipType = shipArr[i]
        if (coordinates.xCor + shipType.shipLength > 10) {
          throw new Error('Error: ship will not fit where you wish to place it.')
        } else {
          for (let i = 0; i < carrier.shipLength; i++) {
            corArr.push({ xCor: coordinates.xCor + i, yCor: coordinates.yCor })
          }
          return corArr
        }
      }
      return corArr
    },
    receiveAttack: function (coordinates) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      for (let i = 0; i < missed.length; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(usedSquares[i])) {
          return chooseAgain
        }
      }
      for (let i = 0; i < corArr.length; i++) {
        if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates)) {
          shipType.timesHit = shipType.timesHit + 1
          if (shipType.timesHit === shipType.shipLength) {
            sunkArr.push(shipType)
            if (sunkArr.length === 5) {
              return gameOver
            }
            usedSquares.push(coordinates)
            shipType.sunk = true
            return shipType.sunk
          }
          usedSquares.push(coordinates)
          return shipType.timesHit
        }
      }
      usedSquares.push(coordinates)
      missed.push(coordinates)
      return { missed }
    },
    /* squareChosen: function (xCor, yCor) {
      let coordinates = { xCor, yCor }
      for (let i = 0; i < missed.length; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(usedSquares[i])) {
          return chooseAgain
        }
      }
      return receiveAttack(coordinates)
    }, */
    computerChoice: function () {
      function randomChoice (choice) {
        return Math.floor(Math.random * choice)
      }
      let xCor = randomChoice(11)
      let yCor = randomChoice(11)

      let coordinates = { xCor, yCor }
      for (let i = 0; i < 1; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(squareArr[i])) {
          randomChoice()
        }
      }
      return true
    }
  }
}

module.exports = gameboard
