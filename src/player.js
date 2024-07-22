let playCorArr = []
let compCorArr = []
let playSqArr = []
let compSqArr = []
let playXCor
let playYCor
let compXCor
let compYCor

const playerBoard = document.querySelector('#playerboard')
const computerBoard = document.querySelector('#computerboard')

function display () {
  return {
    playXCor: playXCor,
    playYCor: playYCor,
    compXCor: compXCor,
    compYCor: compYCor,
    assignPCor: function () {
    let x = 0
    let y = 1
    for (let i = 1; i < 101; i++) {
      if ((i - 1) % 10 === 0 && i !== 1) {
        x = 1
        y++
        playCorArr.push({ playXCor: x, playYCor: y })
      } else {
        x++
        playCorArr.push({ playXCor: x, playYCor: y })
      }
    }
    return playSqArr
    },
      assignCCor: function () {
      let x = 0
      let y = 1
      for (let i = 1; i < 101; i++) {
        if ((i - 1) % 10 === 0 && i !== 1) {
          x = 1
          y++
          compCorArr.push({ compXCor: x, compYCor: y })
        } else {
        x++
        compCorArr.push({ compXCor: x, compYCor: y })
        }
      }
      return compSqArr
    },
      createPlayerSquares: function () {
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'playersq')
        square.playCoor = playCorArr[i]
        playSqArr.push(square)
        playerBoard.appendChild(square)
      }
      return playerBoard
    },
      createComputerSquares: function () {
      for(let i = 0; i < 100; i++) {
        let square = document.createElement('div')
        square.setAttribute('class', 'computersq')
        square.compCoor = compCorArr[i]
        compSqArr.push(square)
        computerBoard.appendChild(square)
      }
      return computerBoard
    },
      playColorCoordinates: function (coorX, coorY, color) {
      for(let i = 0; i < 100; i++) {
        if (coorX === playSqArr[i].playCoor.playXCor && coorY === playSqArr[i].playCoor.playYCor) {
          playSqArr[i].style.backgroundColor = color
        }
      }
    },
      compColorCoordinates: function (coorX, coorY, color) {
      for(let i = 0; i < 100; i++) {
        if (coorX === compSqArr[i].compCoor.compXCor && coorY === compSqArr[i].compCoor.compYCor) {
          compSqArr[i].style.backgroundColor = color
          return
        }
      }
    },
    
  }
}

let gameDisplay = display()

gameDisplay.assignCCor()
gameDisplay.assignPCor()
gameDisplay.createPlayerSquares()
gameDisplay.createComputerSquares()


module.exports = {
  gameDisplay: gameDisplay,
  playCorArr: playCorArr,
}
