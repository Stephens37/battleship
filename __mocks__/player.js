const { carrier, missed } = require('./gameboard')

function player (shipType, xCor, yCor) {
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
