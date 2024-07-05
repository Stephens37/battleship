require("./styles.css")
const gameboardRequire = require("./gameboard.js")
const playerRequire = require("./player.js")
const gameboard = gameboardRequire.gameboard()
const playShipArr = gameboardRequire.playShipArr

let squares = document.querySelectorAll('.playersq')
let compSquares = document.querySelectorAll('.computersq')
function handleClick(event) {
    let square = event.target
    let result = gameboard.placement(square.coordinates)
    if(result === 'stop'){
        console.log('hey')
        squares.forEach(function(square) {
            square.removeEventListener('click', handleClick)
        })
        compSquares.forEach(function(square) {
            square.addEventListener('click', function() {
                gameboard.receivePlayAttack(square.coordinates)
            })
        })
    }
}
squares.forEach(function(square) {
    square.addEventListener('click', handleClick)
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

