require("./styles.css")
const gameboardRequire = require("./gameboard.js")
const playerRequire = require("./player.js")
const gameboard = gameboardRequire()

document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('.playersq')
    squares.forEach(function(square) {
        square.addEventListener('click', function () {
            if(square.coordinates === undefined) {
                console.log('bye')
                }
            gameboard.placement(square.coordinates)
            if(gameboard.computerPlacement === true) {
                gameboard.placement(square.coordinates)
            }
        })
    })
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
- have the event listener 
*/

