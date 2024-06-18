require("./styles.css")
const gameboardRequire = require("./gameboard.js")
const playerRequire = require("./player.js")
const gameboard = gameboardRequire()




document.addEventListener('DOMContentLoaded', function() {
    let squares = document.querySelectorAll('.playersq')
    squares.forEach(function(square) {
        square.addEventListener('click', function () {
            gameboard.placement(square.coordinates)
            console.log(square.coordinates)
        })
    })
})


