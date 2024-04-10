/*
- player takes turn to hit a computer's spot
- computer then chooses a randomized position to hit
*/

/* player clicks on a square
gameboard.receiveAttack is then called and plays out
*/

/* computer uses Math.random to choose a random coordinate
if coordinate is in the missed array then reroll
else call gameboard.receiveAttack
*/

/*
  function player (shipType, xCor, yCor) {
    const chooseAgain = 'Choose again'

    function squareChosen (xCor, yCor) {
      let coordinates = {xCor, yCor}
      for(let i = 0; i < missed.length; i++) {
        if (JSON.stringify({xCor, yCor} === JSON.stringify(missed[i]))) {
          return chooseAgain
        } else {
          gameboard.receiveAttack(shipType, coordinates)
        }
      }
    }

    function computerChoice () {
      function randomChoice (choice) {
        return Math.floor(Math.random * choice)
      }
      let xCor = randomChoice(11)
      let yCor = randomChoice(11)
      squareChosen(xCor, yCor)
    }
  }
*/

/*
the gameboard.placement function is already being called in the gameboard tests
therefore there is no need to have to create a mock gameboard function here
i will still have to input mock x and y coordinates for the attack
*/

const { carrier, missed, gameboard /* , coordinates */ } = require('./gameboard')

/* let corArr = gameboard.placement(coordinates) */

function player (shipType, xCor, yCor) {
  xCor = 1
  yCor = 1
  shipType = carrier
  const chooseAgain = 'Choose again'

  function squareChosen (xCor, yCor) {
    let coordinates = { xCor, yCor }
    for(let i = 0; i < missed.length; i++) {
      if (JSON.stringify({ xCor, yCor }) === JSON.stringify(missed[i])) {
        return chooseAgain
      }
      gameboard.receiveAttack(shipType, coordinates)
    }
  }

  function computerChoice () {
    function randomChoice (choice) {
      return Math.floor(Math.random * choice)
    }
    let xCor = randomChoice(11)
    let yCor = randomChoice(11)
    squareChosen(xCor, yCor)
    return true
  }
}

module.exports = player
