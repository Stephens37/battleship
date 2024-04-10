const { timesHit, sunk, shipLength } = require("../ship")

const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))

let sunkArr = ['s', 'u', 'n']
const gameOver = 'Game Over'

let carrier = { shipLength: 5, timesHit: 3, sunk: false }

function gameboard (shipType, xCor, yCor) {
  let coordinates = { xCor, yCor }
  let corArr = []
  let missed = [{ xCor: 2, yCor: 2 }]
  return {
    missed: missed,
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

      if (coordinates.xCor + carrier.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        for (let i = 0; i < carrier.shipLength; i++) {
          corArr.push({ xCor: coordinates.xCor + i, yCor: coordinates.yCor })
        }
        return corArr
      }
    },
    receiveAttack: function (coordinates) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      for (let i = 0; i < corArr.length; i++) {
        if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates, carrier.timesHit, carrier.sunk)) {
          carrier.timesHit = carrier.timesHit + 1
          if (carrier.timesHit === carrier.shipLength) {
            sunkArr.push(carrier)
            if (sunkArr.length === 5) {
              return gameOver
            }
            carrier.sunk = true
            return carrier.sunk
          }
          return carrier.timesHit
        }
      }

      missed.push(coordinates)
      return { missed }
    }
  }
}

module.exports = gameboard
