const { gameDisplay, playCorArr } = require('./player.js')
const ship = require('./ship.js')

let compDestroyer = ship('Destroyer', 2, 0, false)
let compSubmarine = ship('Submarine', 3, 0, false)
let compCruiser = ship('Cruiser', 3, 0, false)
let compBattleship = ship('Battleship', 4, 0, false)
let compCarrier = ship('Carrier', 5, 0, false)

let playDestroyer = ship('Destroyer', 2, 0, false)
let playSubmarine = ship('Submarine', 3, 0, false)
let playCruiser = ship('Cruiser', 3, 0, false)
let playBattleship = ship('Battleship', 4, 0, false)
let playCarrier = ship('Carrier', 5, 0, false)

let compShipArr = [compDestroyer, compSubmarine, compCruiser, compBattleship, compCarrier]
console.log(compShipArr)
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
              playShipType.timesHit = playShipType.hit()
              if (playShipType.isSunk() === true) {
                playSunkArr.push(playShipType)
                console.log('f')
                if (playSunkArr.length === 5) {
                  document.querySelector('#footertext').innerText = 'Computer Wins'
                  document.querySelector('#footertext').style.color = 'red'
                  return gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
                }
                playSqUsed.push(playCoor)
                document.querySelector('#footertext').innerText = `Player's ${playShipType.shipName} sunk!`
                gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
                return
              }
              playSqUsed.push(playCoor)
              gameDisplay.playColorCoordinates(playCoor.playXCor, playCoor.playYCor, 'red')
              return playShipType.timesHit
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
            compShipType.timesHit = compShipType.hit()
            if (compShipType.isSunk() === true) {
              console.log('s')
              compSunkArr.push(compShipType)
              if (compSunkArr.length === 5) {
                document.querySelector('#footertext').innerText = 'Player Wins'
                document.querySelector('#footertext').style.color = 'green'
                return gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'red')
              }
              compSqUsed.push(compCoor)
              document.querySelector('#footertext').innerText = `Computer's ${compShipType.shipName} sunk!`
              gameDisplay.compColorCoordinates(compCoor.compXCor, compCoor.compYCor, 'red')
              return this.computerChoice()
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
