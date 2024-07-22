const { gameDisplay, compCorArr, playCorArr } = require('./player.js')
const { timesHit, shipLength, sunk } = require("./ship")

const gameOver = 'Game Over'

let compDestroyer = { shipName: 'Destroyer', shipLength: 2, timesHit: 0, sunk: false }
let compSubmarine = { shipName: 'Submarine', shipLength: 3, timesHit: 0, sunk: false }
let compCruiser = { shipName: 'Cruiser', shipLength: 3, timesHit: 0, sunk: false }
let compBattleship = { shipName: 'Battleship', shipLength: 4, timesHit: 0, sunk: false }
let compCarrier = {shipName: 'Carrier', shipLength: 5, timesHit: 0, sunk: false }

let playDestroyer = { shipName: 'Destroyer', shipLength: 2, timesHit: 0, sunk: false }
let playSubmarine = { shipName: 'Submarine', shipLength: 3, timesHit: 0, sunk: false }
let playCruiser = { shipName: 'Cruiser', shipLength: 3, timesHit: 0, sunk: false }
let playBattleship = { shipName: 'Battleship', shipLength: 4, timesHit: 0, sunk: false }
let playCarrier = { shipName: 'Carrier', shipLength: 5, timesHit: 0, sunk: false }

let compShipArr = [compDestroyer, compSubmarine, compCruiser, compBattleship, compCarrier]
let playShipArr = [playDestroyer, playSubmarine, playCruiser, playBattleship, playCarrier]

let compMissed = []
let playMissed = []

let compSqUsed = []
let playSqUsed = []

let compCorUsed = []
let playCorUsed = []

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
      let compYArr = []
      for(let i = 0; i < 5; i++) {
      compShipType = compShipArr[i]
      compShipType.cShipCorArr = []
      function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max-min)) + min;
      }
      function randomCor() {
        let compXCor, compYCor
        let unique = false
    
        while (!unique) {
            compXCor = getRandomInt(1, 11 - compShipType.shipLength)
            compYCor = getRandomInt(1, 11 - compShipType.shipLength)
    
            unique = !compYArr.includes(compYCor)
    
            if (unique) {
                compYArr.push(compYCor)
            }
          }
          return { compXCor, compYCor }
        }
        let { compXCor, compYCor } = randomCor()
        for(let i = 0; i < compCorUsed.length; i++) {
          if (JSON.stringify({compXCor, compYCor}) === JSON.stringify(compCorUsed[i])) {
            return this.computerPlacement()
          }
        }
        for (let i = 0; i < compShipType.shipLength; i++) {
          compShipType.cShipCorArr.push({ compXCor: compXCor + i, compYCor: compYCor })
          compCorUsed.push({ compXCor: compXCor + i, compYCor: compYCor })
          }
          if(compShipType.cShipCorArr === undefined) {
            return this.computerPlacement()
          }
        }
        document.querySelector('#footertext').innerText = 'Fight!'
      },
      placement: function (playCoor) {
        playShipType = playShipArr[s]
      if (playCorArr.playXCor + playShipType.shipLength > 10) {
        throw new Error('Error: ship will not fit where you wish to place it.')
      } else {
        playShipType.pShipCorArr = []
        for (let i = 0; i < playShipType.shipLength; i++) {
          playShipType.pShipCorArr.push({ playXCor: playCoor.playXCor + i, playYCor: playCoor.playYCor })
          playCorUsed.push({ playXCor: playCoor.playXCor + i, playYCor: playCoor.playYCor })
          let sqColor = { playXCor: playCoor.playXCor + i, playYCor: playCoor.playYCor }
          gameDisplay.playColorCoordinates(sqColor.playXCor, sqColor.playYCor, 'green')
          }
        }
        s++
        if(s === 5) {
          this.computerPlacement()
          let stop = 'stop'
          return stop
        } 
      },
      receiveCompAttack: function (playCoor) {
        for(let i = 0; i < playShipArr.length; i++) {
          let playShipType = playShipArr[i]
          let pShipCorArr = playShipType.pShipCorArr
          for (let i = 0; i < pShipCorArr.length; i++) {
            if (JSON.stringify(pShipCorArr[i]) === JSON.stringify(playCoor)) {
              playShipType.timesHit = playShipType.timesHit + 1
              if (playShipType.timesHit === playShipType.shipLength) {
                playSunkArr.push(playShipType)
                if (playSunkArr.length === 5) {
                  document.querySelector('#footertext').innerText = 'Computer Wins'
                  document.querySelector('#footertext').style.color = 'red'
                  return gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
                }
                playSqUsed.push(playCoor)
                playShipType.sunk = true
                document.querySelector('#footertext').innerText = `Player's ${playShipType.shipName} sunk!`
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
        function randomChoice (choice) {
          return Math.floor(Math.random() * choice)
        }
        function checkCompCor () {
          let playXCor = randomChoice(11)
          let playYCor = randomChoice(11)
          for(let i = 0; i < playSqUsed.length; i++) {
            if (JSON.stringify({ playXCor, playYCor }) === JSON.stringify(playSqUsed[i]) || playXCor === 0 || playYCor === 0 ) {
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
      for (let i = 0; i < compSqUsed.length; i++) {
        if (JSON.stringify(compCoor) === JSON.stringify(compSqUsed[i])) {
          document.querySelector('#footertext').style.innerText = 'Choose Again'
          return
        }
      }
      for(let i = 0; i < compShipArr.length; i++) {
        let compShipType = compShipArr[i]
        let cShipCorArr = compShipType.cShipCorArr
        for (let i = 0; i < cShipCorArr.length; i++) {
          if (JSON.stringify(cShipCorArr[i]) === JSON.stringify(compCoor)) {
            compShipType.timesHit = compShipType.timesHit + 1
            if (compShipType.timesHit === compShipType.shipLength) {
              compSunkArr.push(compShipType)
              if (compSunkArr.length === 5) {
                document.querySelector('#footertext').innerText = 'Player Wins'
                document.querySelector('#footertext').style.color = 'green'
                return gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'red')
              }
              compSqUsed.push(compCoor)
              compShipType.sunk = true
              document.querySelector('#footertext').innerText = `Computer's ${compShipType.shipName} sunk!`
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
  }
}

module.exports = { gameboard, playShipArr }
