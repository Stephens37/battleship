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

let carrier = ship(5, 0, false)
let battleship = ship(4, 0, false)
let cruiser = ship(3, 0, false)
let submarine = ship(3, 0, false)
let destroyer = ship(2, 0, false)

function gameboard (coordinates, xcor, ycor) {
  return {
    coordinates: coordinates,
    xcor: xcor,
    ycor: ycor,
    placement: function () {
      /*
      if the x coordinate + ship.length is greater than 10
      throw error
      else return
      */
      if (xcor + ship.length > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.');
      }
      try {
        coordinates(xcor, ycor)
      } catch (e) {
        console.error(e)
      }
    },
    receiveAttack: function () {
      /*
      square value is a variable
      this variable will be implemented by ()
      if a square was hit with the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      if(coordinates === ship.)
    }
  }
}
