/*
the gameboard.placement function is already being called in the gameboard tests
therefore there is no need to have to create a mock gameboard function here
i will still have to input mock x and y coordinates for the attack
*/

const gameboard = require('./gameboard')
let carrier = { shipLength: 5, timesHit: 3, sunk: false }
let playerBoard = gameboard(carrier, 1, 1)
let squareArr = playerBoard.usedSquares

const chooseAgain = 'Choose again'

/* let corArr = gameboard.placement(coordinates) */

function player (shipType, xCor, yCor) {
  return {
    shipType: shipType,
    xCor: xCor,
    yCor: yCor,
    test: function () {
      return squareArr
    },
    squareChosen: function (xCor, yCor) {
      let coordinates = { xCor: 1, yCor: 1 }
      for (let i = 0; i < playerBoard.missed.length; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(squareArr[i])) {
          return chooseAgain
        }
      }
      return playerBoard.receiveAttack(coordinates)
    },
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

module.exports = player
