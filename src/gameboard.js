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
const { gameDisplay, compCorArr, playCorArr } = require('./player.js')
const { timesHit, shipLength, sunk } = require("./ship")
// const player = require('./player.js')
// let xCor = player.xCor
// let yCor = player.yCor

// const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))
const gameOver = 'Game Over'

let compDestroyer = { shipLength: 2, timesHit: 0, sunk: false }
let compSubmarine = { shipLength: 3, timesHit: 0, sunk: false }
let compCruiser = { shipLength: 3, timesHit: 0, sunk: false }
let compBattleship = { shipLength: 4, timesHit: 0, sunk: false }
let compCarrier = { shipLength: 5, timesHit: 0, sunk: false }

let playDestroyer = { shipLength: 2, timesHit: 0, sunk: false }
let playSubmarine = { shipLength: 3, timesHit: 0, sunk: false }
let playCruiser = { shipLength: 3, timesHit: 0, sunk: false }
let playBattleship = { shipLength: 4, timesHit: 0, sunk: false }
let playCarrier = { shipLength: 5, timesHit: 0, sunk: false }

let compShipArr = [compDestroyer, compSubmarine, compCruiser, compBattleship, compCarrier]
let playShipArr = [playDestroyer, playSubmarine, playCruiser, playBattleship, playCarrier]

let compMissed = []
let playMissed = []

let compSqUsed = []
let playSqUsed = []

let compSunkArr = []
let playSunkArr = []

let compXCor = player.compXCor
let compYCor = player.compYCor
let playXCor = player.playXCor
let playYCor = player.playYCor


function gameboard () {
  let compCoor = { compXCor, compYCor }
  let playCoor = { playXCor, playYCor }
  let usedSquares = []
  let t = 0
  let s = 0
  let playShipType
  let compShipType
  return {
    playShipType: playShipType,
    compShipType: compShipType,
    compCoor: compCoor,
    playCoor: playCoor,
    compXCor: compXCor,
    compYCor: compYCor,
    playXCor: playXCor,
    playYCor: playYCor,
    usedSquares: usedSquares,
    computerPlacement: function () {
      for(let i = 0; i < 5; i++) {
      compShipType = compShipArr[i]
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      compXCor = getRandomInt(11)
      compYCor = getRandomInt(11)
      if (compXCor + compShipType.shipLength > 10 || compXCor === 0 || compYCor === 0) {
        compXCor = getRandomInt(11)
        compYCor = getRandomInt(11)
      } else {
        for(let i = 0; i < compCorArr.length; i++) {
          if (JSON.stringify({compXCor, compYCor}) === JSON.stringify(compCorArr[i])) {
            console.log('w')
            return this.computerPlacement()
          }
        }
        console.log('f')
          compShipType.cShipCorArr = []
        for (let i = 0; i < compShipType.shipLength; i++) {
          compShipType.cShipCorArr.push({ compXCor: compXCor + i, compYCor: compYCor })
          console.log(compShipType.cShipCorArr)
          }
        }
        }
        document.querySelector('footer').textContent = 'Let the games begin'
      },
      placement: function (playCoor) {
        playShipType = playShipArr[s]
        if(playShipArr[s] === undefined) {
          let stop = 'stop'
          return stop
        }
      if (playCorArr.playXCor + playShipType.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        playShipType.pShipCorArr = []
        for (let i = 0; i < playShipType.shipLength; i++) {
          playShipType.pShipCorArr.push({ playXCor: playCoor.playXCor + i, playYCor: playCoor.playYCor })
          let sqColor = { playXCor: playCoor.playXCor + i, playYCor: playCoor.playYCor }
          //SET COLOR ON COORDINATES BY MATCHING THEM WITH THE DIV THAT HAS THE SAME COORDINATES
          /*for (let i = 0; i < 100; i++) {
            if (sqColor.xCor == playSqArr[i].coordinates.xCor) {
              playSqArr[i].style.color = 'green'
            }*/
          gameDisplay.playColorCoordinates(sqColor.playXCor, sqColor.playYCor, 'green')
          }
          console.log(playShipArr[s].pShipCorArr)
        }
        s++
        console.log(s)
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
      receiveCompAttack: function (playCoor) {
        /*
        if the coordinates hit were the same coordinates as a ship
        that ship will be hit
        else the coordinates will be returned as missed
        */
       console.log(playCoor)
       console.log(playMissed)
        for(let i = 0; i < playShipArr.length; i++) {
          let playShipType = playShipArr[i]
          console.log(playShipType)
          console.log(playShipType.pShipCorArr)
          let pShipCorArr = playShipType.pShipCorArr
          console.log(playShipType.pShipCorArr)
          for (let i = 0; i < pShipCorArr.length; i++) {
            if (JSON.stringify(pShipCorArr[i]) === JSON.stringify(playCoor)) {
              console.log(JSON.stringify(pShipCorArr[i]))
              playShipType.timesHit = playShipType.timesHit + 1
              console.log(playShipType.shipLength)
              console.log(playShipType.pShipCorArr)
              console.log('hello')
              if (playShipType.timesHit === playShipType.shipLength) {
                playSunkArr.push(playShipType)
                if (playSunkArr.length === 5) {
                  gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
                  document.querySelector('footer').textContent = 'Computer Wins'
                  return gameOver
                }
                playSqUsed.push(playCoor)
                playShipType.sunk = true
                document.querySelector('footer').innerText = `Player's ${JSON.stringify(playShipType)} sunk!`
                gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
                return compShipType.sunk
              }
              playSqUsed.push(playCoor)
              gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
              return compShipType.timesHit
            }
          }
        }
        playSqUsed.push(playCoor)
        playMissed.push(playCoor)
        gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'grey')
        return { playMissed, playSqUsed }
      },
      computerChoice: function () {
        console.log('f')
        function randomChoice (choice) {
          return Math.floor(Math.random() * choice)
        }
        function checkCompCor () {
          let playXCor = randomChoice(11)
          let playYCor = randomChoice(11)
          console.log(playXCor)
          console.log(playYCor)
          for(let i = 0; i < playSqUsed.length; i++) {
            if (JSON.stringify({ playXCor, playYCor }) === JSON.stringify(playSqUsed[i]) || playXCor === 0 || playYCor === 0 ) {
              console.log('f')
              return checkCompCor()
            }
          }
          let playCoor = {playXCor, playYCor}
          return {playCoor}
        }
        let playCoor = checkCompCor()
        this.receiveCompAttack(playCoor.playCoor)
      },
      receivePlayAttack: function (compCoor) {
      /*
      if the coordinates hit were the same coordinates as a ship
      that ship will be hit
      else the coordinates will be returned as missed
      */
      console.log(compCoor.compXCor)
      console.log(compCoor.compYCor)
      for (let i = 0; i < compSqUsed.length; i++) {
        if (JSON.stringify(compCoor) === JSON.stringify(compSqUsed[i])) {
          console.log('d')
          document.querySelector('footer').style.innerText = 'Choose Again'
          return
        }
      }
      for(let i = 0; i < compShipArr.length; i++) {
        let compShipType = compShipArr[i]
        console.log(compShipType)
        let cShipCorArr = compShipType.cShipCorArr
        for (let i = 0; i < cShipCorArr.length; i++) {
          if (JSON.stringify(cShipCorArr[i]) === JSON.stringify(compCoor)) {
            compShipType.timesHit = compShipType.timesHit + 1
            if (compShipType.timesHit === compShipType.shipLength) {
              console.log(compShipType)
              console.log(compShipType.timesHit)
              compSunkArr.push(compShipType)
              if (compSunkArr.length === 5) {
                document.querySelector('footer').innerText = 'Player Wins'
                return gameOver
              }
              compSqUsed.push(compCoor)
              compShipType.sunk = true
              document.querySelector('footer').innerText = `Computer's ${JSON.stringify(compShipType)} sunk!`
              console.log('h')
              gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'red')
              this.computerChoice()
              return compShipType.sunk
            }
            compSqUsed.push(compCoor)
            gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'red')
            this.computerChoice()
            return compShipType.timesHit
          }
        }
      }
      compSqUsed.push(compCoor)
      compMissed.push(compCoor)
      gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'grey')
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
