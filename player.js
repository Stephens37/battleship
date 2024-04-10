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

const ship = require('./ship')
const gameboard = require('./gameboard')

/* function player() {

} */
