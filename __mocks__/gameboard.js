const { timesHit, sunk, shipLength } = require("./ship")

const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))

let sunkArr = ['s', 'u', 'n']
const gameOver = 'Game Over'

let carrier = { shipLength: 5, timesHit: 3, sunk: false }

function gameboard () {
  let coordinates = { xCor, yCor }
  let corArr = [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
  let missed = [{ xCor: 2, yCor: 2 }]
  let usedSquares = [{ xCor: 1, yCor: 1 }]
  return {
    missed: missed,
    usedSquares: usedSquares,
    shipType: shipType,
    coordinates: coordinates,
    xCor: xCor,
    yCor: yCor,
    corArr: corArr,
    placement: jest.fn(function (coordinates) {
      /*
      if the x coordinate + ship.length is greater than 10
      throw error
      else return
      */

      if (coordinates.xCor + carrier.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        for (let i = 0; i < carrier.shipLength; i++) {
          corArr.push({ xCor: coordinates.xCor + i, yCor: coordinates.yCor })
        }
        return corArr
      }
    }),
    receiveAttack: jest.fn((coordinates) => {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      return [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }]
    }),
    squareChosen: jest.fn( (xCor, yCor) => {
      let coordinates = { xCor, yCor }
      for (let i = 0; i < missed.length; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(usedSquares[i])) {
          return chooseAgain
        }
      }
      return receiveAttack(coordinates)
    }),
    computerChoice: jest.fn(() => {
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
    })
  }
}

module.exports = gameboard
