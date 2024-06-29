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
const { gameDisplay, playSqArr } = require('./player.js')
const { timesHit, shipLength, sunk } = require("./ship")
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

let playShipArr = [destroyer, submarine, cruiser, battleship, carrier]
let compShipArr = [destroyer, submarine, cruiser, battleship, carrier]

let missed = []

let xCor = player.xCor
let yCor = player.yCor


function gameboard () {
  let coordinates = { xCor, yCor }
  let usedSquares = []
  let t = 0
  let s = 0
  let shipType
  return {
    shipType: shipType,
    coordinates: coordinates,
    xCor: xCor,
    yCor: yCor,
    usedSquares: usedSquares,
    computerPlacement: function () {
      for(let i = 0; i < 5; i++) {
      shipType = compShipArr[i]
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      xCor = getRandomInt(11)
      yCor = getRandomInt(11)
      if (xCor + shipType.shipLength > 10 || xCor === 0 || yCor === 0) {
        xCor = getRandomInt(11)
        yCor = getRandomInt(11)
      } else {
          shipType.corArr = []
        for (let i = 0; i < shipType.shipLength; i++) {
          shipType.corArr.push({ xCor: xCor + i, yCor: yCor })
          }
        }
        console.log(shipType.corArr)
        s++
        }
        document.querySelector('footer').textContent = 'Let the games begin'

      },
      placement: function (coordinates) {
        shipType = playShipArr[s]
      if (coordinates.xCor + shipType.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        shipType.corArr = []
        console.log(playSqArr)
        for (let i = 0; i < shipType.shipLength; i++) {
          shipType.corArr.push({ xCor: coordinates.xCor + i, yCor: coordinates.yCor })
          let sqColor = { xCor: coordinates.xCor + i, yCor: coordinates.yCor }
          //SET COLOR ON COORDINATES BY MATCHING THEM WITH THE DIV THAT HAS THE SAME COORDINATES
          /*for (let i = 0; i < 100; i++) {
            if (sqColor.xCor == playSqArr[i].coordinates.xCor) {
              playSqArr[i].style.color = 'green'
            }*/
          gameDisplay.colorCoordinates(sqColor.xCor, sqColor.yCor, 'green')
          }
        }
        s++
        console.log('hi')
        if(s === 5) {
          this.computerPlacement()
        }
      },
      receiveAttack: function (coordinates) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      for (let i = 0; i < missed.length; i++) {
        if (JSON.stringify(coordinates) === JSON.stringify(missed[i])) {
          return 'Choose again'
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
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(missed[i])) {
          randomChoice()
        }
      }
      return true
    }
  }
}

module.exports = { gameboard, carrier }
