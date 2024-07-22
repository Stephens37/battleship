require("./styles.css")
const gameboardRequire = require("./gameboard.js")
const playerRequire = require("./player.js")
const gameboard = gameboardRequire.gameboard()

let compSquares = document.querySelectorAll('.computersq')
let squares = document.querySelectorAll('.playersq')
let compSquareArr = []
let playSquareArr = []

compSquares.forEach(function (compSquare) {
    compSquareArr.push(compSquare)
})

squares.forEach(function (square) {
    playSquareArr.push(square)
})

function handleShipPlacement(event) {
    let square = event.target
    let result = gameboard.placement(square.playCoor)
    if(result === 'stop'){
        squares.forEach(function(square) {
            square.removeEventListener('click', handleShipPlacement)
        })
    }
}


squares.forEach(function(square) {
    square.addEventListener('click', handleShipPlacement)
})

function handlePlayClick(event) {
    let compSquare = event.target
    gameboard.receivePlayAttack(compSquare.compCoor)
}

const promiseA = new Promise(async (resolve, reject) => {
    try {
        let allGreenSquaresProcessed = false
        while(!allGreenSquaresProcessed) {
            allGreenSquaresProcessed = true
            for(let i = 0; i < playSquareArr.length; i++) {
            if (playSquareArr[i].style.backgroundColor === 'green') {
                playSquareArr[i].removeEventListener('click', handleShipPlacement)
            } else {
                allGreenSquaresProcessed = false
            }
            }
            if(allGreenSquaresProcessed) {
                resolve(true)
            }
            else {
                await new Promise(r => setTimeout(r, 100))
            }
        }
    }
    catch(err) {
        reject(err)
    }
}).catch((err) => {
    console.error(err)
})

compSquares.forEach(function(compSquare) {
    compSquare.addEventListener('click', handlePlayClick)
    
    const promiseA = new Promise((resolve, reject) => {
        const checkCondition = () => {
            if (document.querySelector('#footertext').innerText === 'Player Wins' || 
                document.querySelector('#footertext').innerText === 'Computer Wins') {
                compSquare.removeEventListener('click', handlePlayClick)
                resolve(true)
            } else {
                setTimeout(checkCondition, 100)
            }
        }
        checkCondition()
    }).catch((err) => {
        console.error(err)
    })
})
