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

/*

*/
const ship = require('./ship')
const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))

let sunkArr = []
const gameOver = 'Game Over'

let carrier = ship(5, 0, false)
let battleship = ship(4, 0, false)
let cruiser = ship(3, 0, false)
let submarine = ship(3, 0, false)
let destroyer = ship(2, 0, false)
let missed = []

function gameboard (shipType, coordinates, xCor, yCor, corArr) {
  coordinates = { xCor, yCor }
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
      if (xCor + ship.length > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.');
      }
      try {
        corArr.push(coordinates)
      } catch (e) {
        console.error(e)
      }

      for (let i = 1; i < shipType.shipLength; i++) {
        coordinates = { xCor: xCor + i, yCor }
        corArr = []
        corArr.push()
      }
      return corArr
    },
    receiveAttack: function () {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      for (let i = 0; i < corArr.length; i++) {
        if (corArr[i] === coordinates) {
          shipType.hit()
        } else if (shipType.timesHit === shipType.length) {
          shipType.sunk()
          sunkArr.push(shipType)
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
