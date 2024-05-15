/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nvar playSqArr = [];\nvar compSqArr = [];\nvar playerBoard = document.querySelector('#playerboard');\nvar computerBoard = document.querySelector('#computerboard');\nvar display = {\n  assignPCor: function assignPCor() {\n    var x = 0;\n    var y = 1;\n    for (var i = 0; i < 100; i++) {\n      if ((i - 1) % 10 === 0) {\n        y++;\n        x = 1;\n      }\n      x++;\n      playSqArr.push({\n        xCor: x,\n        yCor: y\n      });\n    }\n    return playSqArr;\n  },\n  assignCCor: function assignCCor() {\n    var x = 0;\n    var y = 1;\n    for (var i = 0; i < 100; i++) {\n      if ((i - 1) % 10 === 0) {\n        y++;\n        x = 1;\n      }\n      x++;\n      compSqArr.push({\n        xCor: x,\n        yCor: y\n      });\n    }\n    return compSqArr;\n  },\n  createPlayerSquares: function createPlayerSquares() {\n    for (var i = 0; i < 100; i++) {\n      var square = document.createElement('div');\n      square.setAttribute('class', 'playersq');\n      playerBoard.appendChild(square);\n    }\n  },\n  createComputerSquares: function createComputerSquares() {\n    for (var i = 0; i < 100; i++) {\n      var square = document.createElement('div');\n      square.setAttribute('class', 'computersq');\n      square.coordinates = gameboard.coordinates[i];\n      computerBoard.appendChild(square);\n    }\n  }\n};\nmodule.exports = {\n  display: display\n};\n\n/*\n  create an array of coordinates without assigning them to a variable\n  loop through this array and assign each objects xCor and yCor as grid column/row values\n*/\n\n/* the only question i have about not assigning a variable\nis how I will be able to assign colours, etc. to the squares\n\nperhaps later, i then find a match with the x and y coordinates,\nex: if (grid-column: xCor && grid-row: yCor) then that grid-column and row is red\n*/\n\n/*\n  square is clicked\n  grid-column = xCor\n  grid-row = yCor\n  run the ship hit function\n  if ship is hit colour the square red using this function\n  otherwise colour the square gray\n  either way make the square unclickable\n*/\n\n/*\n  how to create the grid display itself\n  to create this I need to assign each square to a div\n  I don't want 100 html elements so I want to create these in a loop\n*/\n\n/*\n  need to be able to retrieve a square based on its x and y coordinates\n  to do this I will create a 10x10 grid\n  when a square is clicked check which spot in array has the xCor with the same number as grid-column\n  and yCor with the same number as grid-row\n*/\n\n/* function playerSquares () {\n  for (let i = 0; i < 100; i++) {\n    instead of\n    playSqArr.playerSquare${`i`}.style.gridColumn = playSqArr.playerSquare${`i`}.xCor\n    do\n    \"gameboard\".style.gridColumn = playSqArr[i].xCor\n    \n    \n    playerBoard.appendChild(playSqArr[i])\n    playSqArr[i].style.gridColumn = playSqArr[i].xCor\n    playSqArr[i].style.gridRow = playSqArr[i].yCor\n  }\n}\n\nplayerSquares()\n\nfunction compSquares () {\n  for (let i = 0; i < 100; i++) {\n    computerBoard.appendChild(compSqArr[i])\n    compSqArr[i].style.gridColumn = compSqArr[i].xCor\n    compSqArr[i].style.gridRow = compSqArr[i].yCor\n  }\n}\n\ncompSquares()\n*/\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* ships are placed by clicking a square\nif a square is clicked and the ship won't fit inside the following squares an error is called\notherwise the ship will appear in its placement on the gameboard\n\nthis will be a function within the gameboard function\n1 ship takes up 2 vertexes, 2 ships take up 3, 1 four, and another five\n*/\n\n/*\nreceive attack will check if a ship was placed on the clicked coordinates\nif ship present, ship.hit() is called,\n\nregardless of whether a ship was hit or not\nthat square changes color\nand is not able to be clicked\n*/\n\n/*\nwhen a ship is sunken\nship.sunk() is called\nthat ship is displayed in the sunk category\n*/\n\nvar _require = __webpack_require__(/*! ./ship */ \"./src/ship.js\"),\n  timesHit = _require.timesHit,\n  sunk = _require.sunk,\n  shipLength = _require.shipLength;\n\n// const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))\n\nvar sunkArr = [];\nvar gameOver = 'Game Over';\nvar destroyer = {\n  shipLength: 2,\n  timesHit: 0,\n  sunk: false\n};\nvar submarine = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar cruiser = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar battleship = {\n  shipLength: 4,\n  timesHit: 0,\n  sunk: false\n};\nvar carrier = {\n  shipLength: 5,\n  timesHit: 0,\n  sunk: false\n};\nvar missed = [];\nfunction gameboard(shipType, xCor, yCor) {\n  var coordinates = {\n    xCor: xCor,\n    yCor: yCor\n  };\n  var corArr = [];\n  var usedSquares = [];\n  return {\n    shipType: shipType,\n    coordinates: coordinates,\n    xCor: xCor,\n    yCor: yCor,\n    corArr: corArr,\n    usedSquares: usedSquares,\n    placement: function placement(coordinates) {\n      /*\n      if the x coordinate + ship.length is greater than 10\n      throw error\n      else return\n      */\n\n      if (coordinates.xCor + carrier.shipLength > 10) {\n        throw new Error('Error: ship will not fit where you wish to place it.');\n      } else {\n        for (var i = 0; i < carrier.shipLength; i++) {\n          corArr.push({\n            xCor: coordinates.xCor + i,\n            yCor: coordinates.yCor\n          });\n        }\n        return corArr;\n      }\n    },\n    receiveAttack: function receiveAttack(coordinates) {\n      /*\n      if the coordinates hit were the same coordinates as a ship\n      that ship will be hit\n      else the coordinates will be returned as missed\n      */\n      for (var i = 0; i < corArr.length; i++) {\n        if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates, shipType.timesHit, shipType.sunk)) {\n          shipType.timesHit = shipType.timesHit + 1;\n          if (shipType.timesHit === shipType.shipLength) {\n            sunkArr.push(shipType);\n            if (sunkArr.length === 5) {\n              return gameOver;\n            }\n            usedSquares.push(coordinates);\n            shipType.sunk = true;\n            return shipType.sunk;\n          }\n          usedSquares.push(coordinates);\n          return shipType.timesHit;\n        }\n      }\n      usedSquares.push(coordinates);\n      missed.push(coordinates);\n      return {\n        missed: missed\n      };\n    }\n  };\n}\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var display = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function ship(shipLength, timesHit, sunk) {\n  return {\n    shipLength: shipLength,\n    timesHit: timesHit,\n    sunk: sunk,\n    hit: function hit() {\n      timesHit += 1;\n      return timesHit;\n    },\n    isSunk: function isSunk() {\n      if (shipLength === timesHit) {\n        sunk = true;\n        return sunk;\n      }\n    }\n  };\n}\nmodule.exports = ship(5, 4, false);\n\n/*\n\n*/\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;