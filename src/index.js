require("./styles.css")
const gameboardRequire = require("./gameboard.js")
const playerRequire = require("./player.js")
const gameboard = gameboardRequire.gameboard()
const playShipArr = gameboardRequire.playShipArr

let squares = document.querySelectorAll('.playersq')
let compSquares = document.querySelectorAll('.computersq')
function handleShipPlacement(event) {
    let square = event.target
    let result = gameboard.placement(square.playCoor)
    if(result === 'stop'){
        console.log('hey')
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

compSquares.forEach(function(compSquare) {
    compSquare.addEventListener('click', handlePlayClick)
})

/*
- reason square.coordinates is undefined is because square.addEventListener simply represents a single click of the "squares" variable
- the "squares" variable encapsulates the whole "playersq" class
- meaning that there is no specific set of coordinates cooresponding to the "squares" variable
*/

/*
- is there a way to detect the attributes of an object simply based on it's click?
*/

/*
- detect that shipType is carrier
- detect that the playShipArr is equal to carrier
*/

