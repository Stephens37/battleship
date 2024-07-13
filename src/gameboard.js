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
const gameOver = 'Game Over'

let destroyer = { shipLength: 2, timesHit: 0, sunk: false }
let submarine = { shipLength: 3, timesHit: 0, sunk: false }
let cruiser = { shipLength: 3, timesHit: 0, sunk: false }
let battleship = { shipLength: 4, timesHit: 0, sunk: false }
let carrier = { shipLength: 5, timesHit: 0, sunk: false }

let playShipArr = [destroyer, submarine, cruiser, battleship, carrier]
let compShipArr = [destroyer, submarine, cruiser, battleship, carrier]

let compMissed = []
let playMissed = []

let compSqUsed = []
let playSqUsed = []

let compSunkArr = []
let playSunkArr = []

let compCorArr = []

let playXCor = player.playXCor
let playYCor = player.playYCor
let compXCor = player.compXCor
let compYCor = player.compYCor


function gameboard () {
  let coordinates = { xCor, yCor }
  let usedSquares = []
  let t = 0
  let s = 0
  let playShipType
  let compShipType
  return {
    playShipType: playShipType,
    compShipType: compShipType,
    coordinates: coordinates,
    xCor: xCor,
    yCor: yCor,
    usedSquares: usedSquares,
    computerPlacement: function () {
      for(let i = 0; i < 5; i++) {
      compShipType = compShipArr[i]
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      xCor = getRandomInt(11)
      yCor = getRandomInt(11)
      if (xCor + compShipType.shipLength > 10 || xCor === 0 || yCor === 0) {
        xCor = getRandomInt(11)
        yCor = getRandomInt(11)
      } else {
        for(let i = 0; i < compCorArr.length; i++) {
          if (JSON.stringify({xCor, yCor}) === JSON.stringify(compCorArr[i])) {
            return this.computerPlacement()
          }
        }
          compShipType.corArr = []
        for (let i = 0; i < compShipType.shipLength; i++) {
          compShipType.corArr.push({ xCor: xCor + i, yCor: yCor })
          compCorArr.push({ xCor: xCor + i, yCor: yCor })
          }
        }
        console.log(compShipType.corArr)
        s++
        }
        document.querySelector('footer').textContent = 'Let the games begin'
        
      },
      placement: function (coordinates) {
        playShipType = playShipArr[s]
        if(playShipArr[s] === undefined) {
          let stop = 'stop'
          return stop
        }
      if (coordinates.xCor + playShipType.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        playShipType.corArr = []
        for (let i = 0; i < playShipType.shipLength; i++) {
          playShipType.corArr.push({ xCor: coordinates.xCor + i, yCor: coordinates.yCor })
          let sqColor = { xCor: coordinates.xCor + i, yCor: coordinates.yCor }
          //SET COLOR ON COORDINATES BY MATCHING THEM WITH THE DIV THAT HAS THE SAME COORDINATES
          /*for (let i = 0; i < 100; i++) {
            if (sqColor.xCor == playSqArr[i].coordinates.xCor) {
              playSqArr[i].style.color = 'green'
            }*/
          gameDisplay.playColorCoordinates(sqColor.xCor, sqColor.yCor, 'green')
          }
          console.log(playShipArr[s].corArr)
        }
        s++
        if(s === 5) {
          this.computerPlacement()
          let stop = 'stop'
          return stop
        } 
      },
      /*
      - issue is that I want to return the current shipType at the end of a loop however I don't want
      to cut the loop short by adding a return statement at the end
      - 
      */
      receiveCompAttack: function (coordinates) {
        /*
        if the coordinates hit were the same coordinates as a ship
        that ship will be hit
        else the coordinates will be returned as missed
        */
       console.log(coordinates)
       console.log(playMissed)
        for(let i = 0; i < playShipArr.length; i++) {
          let playShipType = playShipArr[i]
          let corArr = playShipType.corArr
          console.log(playShipType.corArr)
          for (let i = 0; i < corArr.length; i++) {
            if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates)) {
              playShipType.timesHit = playShipType.timesHit + 1
              console.log(playShipType.shipLength)
              console.log(playShipType.corArr)
              console.log('hello')
              if (playShipType.timesHit === playShipType.shipLength) {
                playSunkArr.push(playShipType)
                if (playSunkArr.length === 5) {
                  gameDisplay.playColorCoordinates(coordinates.xCor, coordinates.yCor, 'red')
                  document.querySelector('footer').textContent = 'Computer Wins'
                  return gameOver
                }
                playSqUsed.push(coordinates)
                playShipType.sunk = true
                document.querySelector('header').innerText = `Player's ${playShipType} sunk!`
                gameDisplay.playColorCoordinates(coordinates.xCor, coordinates.yCor, 'red')
                return compShipType.sunk
              }
              playSqUsed.push(coordinates)
              gameDisplay.playColorCoordinates(coordinates.xCor, coordinates.yCor, 'red')
              return compShipType.timesHit
            }
          }
        }
        playSqUsed.push(coordinates)
        playMissed.push(coordinates)
        gameDisplay.playColorCoordinates(coordinates.xCor, coordinates.yCor, 'grey')
        return { playMissed, playSqUsed }
      },
      computerChoice: function () {
        console.log('f')
        function randomChoice (choice) {
          return Math.floor(Math.random() * choice)
        }
        function checkCompCor () {
          let xCor = randomChoice(11)
          let yCor = randomChoice(11)
          console.log(xCor)
          console.log(yCor)
          for(let i = 0; i < playSqUsed.length; i++) {
            if (JSON.stringify({ xCor, yCor }) === JSON.stringify(playSqUsed[i]) || xCor === 0 || yCor === 0 ) {
              console.log('f')
              return checkCompCor()
            }
          }
          let coordinates = {xCor, yCor}
          return {coordinates}
        }
        let coordinates = checkCompCor()
        this.receiveCompAttack(coordinates.coordinates)
      },
      receivePlayAttack: function (coordinates) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      console.log(coordinates.xCor)
      console.log(coordinates.yCor)
      for (let i = 0; i < compSqUsed.length; i++) {
        if (JSON.stringify(coordinates) === JSON.stringify(compSqUsed[i])) {
          console.log('d')
          document.querySelector('footer').style.innerText = 'Choose Again'
          return
        }
      }
      for(let i = 0; i < compShipArr.length; i++) {
        let compShipType = compShipArr[i]
        let corArr = compShipType.corArr
        for (let i = 0; i < corArr.length; i++) {
          if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates)) {
            compShipType.timesHit = compShipType.timesHit + 1
            if (compShipType.timesHit === compShipType.shipLength) {
              console.log(compShipType)
              console.log(compShipType.timesHit)
              compSunkArr.push(compShipType)
              if (compSunkArr.length === 5) {
                document.querySelector('footer').innerText = 'Player Wins'
                return gameOver
              }
              compSqUsed.push(coordinates)
              compShipType.sunk = true
              document.querySelector('header').innerText = `Computer's ${compShipType} sunk!`
              console.log('h')
              gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'red')
              this.computerChoice()
              return compShipType.sunk
            }
            compSqUsed.push(coordinates)
            gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'red')
            this.computerChoice()
            return compShipType.timesHit
          }
        }
      }
      compSqUsed.push(coordinates)
      compMissed.push(coordinates)
      gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'grey')
      this.computerChoice()
      return { compMissed }
    }
    /* squareChosen: function (xCor, yCor) {
      let coordinates = { xCor, yCor }
      for (let i = 0; i < missed.length; i++) {
        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(usedSquares[i])) {
          return chooseAgain
        }
      }
      return receiveAttack(coordinates)
    }, */
  }
}

module.exports = { gameboard, playShipArr }

/*
computerchoice is now choosing 0 sometimes for its coordinate selection
win text is triggering when last ship is hit, not sunk
*/
