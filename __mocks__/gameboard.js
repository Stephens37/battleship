const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))

let sunkArr = []
const gameOver = 'Game Over'

let carrier = { shipLength: 5, timesHit: 4, sunk: false }
let missed = []

function gameboard (shipType, xCor, yCor) {
  let coordinates = { xCor, yCor }
  let corArr = []
  return {
    shipType: shipType,
    coordinates: coordinates,
    xCor: xCor,
    yCor: yCor,
    corArr: corArr,
    placement: function (coordinates) {
      /*
      if the x coordinate + ship.length is greater than 10
      throw error
      else return
      */
      if (xCor + shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.');
      }
      try {
        corArr.push(coordinates)
      } catch (e) {
        console.error(e)
      }

      for (let i = 1; i < shipLength; i++) {
        coordinates = { xCor: xCor + i, yCor }
        corArr.push(coordinates)
      }
      return corArr
    },
    receiveAttack: function (coordinates) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      for (let i = 0; i < corArr.length; i++) {
        if (corArr[i][0] === xCor && corArr[i][1] === yCor) {
          carrier.timesHit = carrier.timesHit + 1
        } else if (carrier.timesHit === carrier.shipLength) {
          carrier.sunk = true
          sunkArr.push(carrier)
          if (sunkArr.length === 5) {
            return gameOver
          }
        } else {
          missed.push(coordinates)
          return missed
        }
      }
    }
  }
}

module.exports = gameboard(carrier, { xCor: 1, yCor: 1 }, 1, 1, [{ xCor: 1, yCor: 1 }, { xCor: 2, yCor: 1 }, { xCor: 3, yCor: 1 }, { xCor: 4, yCor: 1 }, { xCor: 5, yCor: 1 }])
