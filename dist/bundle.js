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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\nheader {\n  grid-row: 1;\n  grid-column: 1 / spread 2;\n  text-align: center;\n  font-size: 20px;\n}\n\n#player {\n  grid-row: 2;\n  grid-column: 1;\n}\n\n#computer {\n  grid-row: 2;\n  grid-column: 2;\n  \n}\n\n#playerboard {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border-width: 3px;\n  border-color: black;\n  border-style: solid;\n  justify-content: center;\n}\n\n#computerboard {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border-width: 3px;\n  border-color: black;\n  border-style: solid;\n}\n\n.playersq {\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\n.computersq {\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\nfooter { \n  grid-row: 3;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var gameboard = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nvar coordinates = [gameboard.xCor, gameboard.yCor];\nvar playSqArr = [];\nvar compSqArr = [];\nvar xCor;\nvar yCor;\nvar playerBoard = document.querySelector('#playerboard');\nvar computerBoard = document.querySelector('#computerboard');\nfunction display() {\n  return {\n    xCor: xCor,\n    yCor: yCor,\n    assignPCor: function assignPCor() {\n      var x = 0;\n      var y = 1;\n      for (var i = 0; i < 100; i++) {\n        if ((i - 1) % 10 === 0) {\n          y++;\n          x = 1;\n        }\n        x++;\n        playSqArr.push({\n          xCor: x,\n          yCor: y\n        });\n      }\n      return playSqArr;\n    },\n    assignCCor: function assignCCor() {\n      var x = 0;\n      var y = 1;\n      for (var i = 0; i < 100; i++) {\n        if ((i - 1) % 10 === 0) {\n          y++;\n          x = 1;\n        }\n        x++;\n        compSqArr.push({\n          xCor: x,\n          yCor: y\n        });\n      }\n      return compSqArr;\n    },\n    createPlayerSquares: function createPlayerSquares() {\n      for (var i = 0; i < 100; i++) {\n        var square = document.createElement('div');\n        square.setAttribute('class', 'playersq');\n        square.coordinates = playSqArr[i];\n        playerBoard.appendChild(square);\n      }\n      console.log('player');\n      return playerBoard;\n    },\n    createComputerSquares: function createComputerSquares() {\n      for (var i = 0; i < 100; i++) {\n        var square = document.createElement('div');\n        square.setAttribute('class', 'computersq');\n        square.coordinates = compSqArr[i];\n        computerBoard.appendChild(square);\n      }\n      console.log('computer');\n      return computerBoard;\n    }\n  };\n}\nvar gameDisplay = display();\ngameDisplay.createPlayerSquares();\ngameDisplay.createComputerSquares();\nmodule.exports = {\n  display: display\n};\n\n/*\n  create x and y coordinates within the display file\n  import the display object over to gameboard\n  gameboard x and y coordinates equal the display x and y coordinates\n  interaction happens in gameboard, uses functions from the display file\n\n  essentially, gameboard provides the interactions, display, displays them\n\n  gameboard should be relying on the display file to show interactions\n  display should not be relying on the gameboard file to interact with the display\n*/\n\n/*\n  create player coordinates\n  create squares for player, assign coordinates\n  do the same for computer\n*/\n\n/*\n  create an array of coordinates without assigning them to a variable\n  loop through this array and assign each objects xCor and yCor as grid column/row values\n*/\n\n/* the only question i have about not assigning a variable\nis how I will be able to assign colours, etc. to the squares\n\nperhaps later, i then find a match with the x and y coordinates,\nex: if (grid-column: xCor && grid-row: yCor) then that grid-column and row is red\n*/\n\n/*\n  square is clicked\n  grid-column = xCor\n  grid-row = yCor\n  run the ship hit function\n  if ship is hit colour the square red using this function\n  otherwise colour the square gray\n  either way make the square unclickable\n*/\n\n/*\n  how to create the grid display itself\n  to create this I need to assign each square to a div\n  I don't want 100 html elements so I want to create these in a loop\n*/\n\n/*\n  need to be able to retrieve a square based on its x and y coordinates\n  to do this I will create a 10x10 grid\n  when a square is clicked check which spot in array has the xCor with the same number as grid-column\n  and yCor with the same number as grid-row\n*/\n\n/* function playerSquares () {\n  for (let i = 0; i < 100; i++) {\n    instead of\n    playSqArr.playerSquare${`i`}.style.gridColumn = playSqArr.playerSquare${`i`}.xCor\n    do\n    \"gameboard\".style.gridColumn = playSqArr[i].xCor\n    \n    \n    playerBoard.appendChild(playSqArr[i])\n    playSqArr[i].style.gridColumn = playSqArr[i].xCor\n    playSqArr[i].style.gridRow = playSqArr[i].yCor\n  }\n}\n\nplayerSquares()\n\nfunction compSquares () {\n  for (let i = 0; i < 100; i++) {\n    computerBoard.appendChild(compSqArr[i])\n    compSqArr[i].style.gridColumn = compSqArr[i].xCor\n    compSqArr[i].style.gridRow = compSqArr[i].yCor\n  }\n}\n\ncompSquares()\n*/\n\n//# sourceURL=webpack://battleship/./src/display.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* ships are placed by clicking a square\nif a square is clicked and the ship won't fit inside the following squares an error is called\notherwise the ship will appear in its placement on the gameboard\n\nthis will be a function within the gameboard function\n1 ship takes up 2 vertexes, 2 ships take up 3, 1 four, and another five\n*/\n\n/*\nreceive attack will check if a ship was placed on the clicked coordinates\nif ship present, ship.hit() is called,\n\nregardless of whether a ship was hit or not\nthat square changes color\nand is not able to be clicked\n*/\n\n/*\nwhen a ship is sunken\nship.sunk() is called\nthat ship is displayed in the sunk category\n*/\n\nvar _require = __webpack_require__(/*! ./ship */ \"./src/ship.js\"),\n  timesHit = _require.timesHit,\n  sunk = _require.sunk,\n  shipLength = _require.shipLength;\nvar display = __webpack_require__(/*! ./display.js */ \"./src/display.js\");\nvar xCor = display.xCor;\nvar yCor = display.yCor;\n\n// const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))\n\nvar sunkArr = [];\nvar gameOver = 'Game Over';\nvar destroyer = {\n  shipLength: 2,\n  timesHit: 0,\n  sunk: false\n};\nvar submarine = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar cruiser = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar battleship = {\n  shipLength: 4,\n  timesHit: 0,\n  sunk: false\n};\nvar carrier = {\n  shipLength: 5,\n  timesHit: 0,\n  sunk: false\n};\nvar missed = [];\nfunction gameboard(shipType, xCor, yCor) {\n  var coordinates = {\n    xCor: xCor,\n    yCor: yCor\n  };\n  var corArr = [];\n  var usedSquares = [];\n  return {\n    shipType: shipType,\n    coordinates: coordinates,\n    xCor: xCor,\n    yCor: yCor,\n    corArr: corArr,\n    usedSquares: usedSquares,\n    placement: function placement(coordinates) {\n      /*\n      if the x coordinate + ship.length is greater than 10\n      throw error\n      else return\n      */\n\n      if (coordinates.xCor + carrier.shipLength > 10) {\n        throw new Error('Error: ship will not fit where you wish to place it.');\n      } else {\n        for (var i = 0; i < carrier.shipLength; i++) {\n          corArr.push({\n            xCor: coordinates.xCor + i,\n            yCor: coordinates.yCor\n          });\n        }\n        return corArr;\n      }\n    },\n    receiveAttack: function receiveAttack(coordinates) {\n      /*\n      if the coordinates hit were the same coordinates as a ship\n      that ship will be hit\n      else the coordinates will be returned as missed\n      */\n      for (var i = 0; i < corArr.length; i++) {\n        if (JSON.stringify(corArr[i]) === JSON.stringify(coordinates, shipType.timesHit, shipType.sunk)) {\n          shipType.timesHit = shipType.timesHit + 1;\n          if (shipType.timesHit === shipType.shipLength) {\n            sunkArr.push(shipType);\n            if (sunkArr.length === 5) {\n              return gameOver;\n            }\n            usedSquares.push(coordinates);\n            shipType.sunk = true;\n            return shipType.sunk;\n          }\n          usedSquares.push(coordinates);\n          return shipType.timesHit;\n        }\n      }\n      usedSquares.push(coordinates);\n      missed.push(coordinates);\n      return {\n        missed: missed\n      };\n    }\n  };\n}\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n__webpack_require__(/*! ./display.js */ \"./src/display.js\");\n__webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n__webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n- player takes turn to hit a computer's spot\n- computer then chooses a randomized position to hit\n*/\n\n/* player clicks on a square\ngameboard.receiveAttack is then called and plays out\n*/\n\n/* computer uses Math.random to choose a random coordinate\nif coordinate is in the missed array then reroll\nelse call gameboard.receiveAttack\n*/\n\n/*\n  function player (shipType, xCor, yCor) {\n    const chooseAgain = 'Choose again'\n\n    function squareChosen (xCor, yCor) {\n      let coordinates = {xCor, yCor}\n      for(let i = 0; i < missed.length; i++) {\n        if (JSON.stringify({xCor, yCor} === JSON.stringify(missed[i]))) {\n          return chooseAgain\n        } else {\n          gameboard.receiveAttack(shipType, coordinates)\n        }\n      }\n    }\n\n    function computerChoice () {\n      function randomChoice (choice) {\n        return Math.floor(Math.random * choice)\n      }\n      let xCor = randomChoice(11)\n      let yCor = randomChoice(11)\n      squareChosen(xCor, yCor)\n    }\n  }\n*/\n\n/*\nthe gameboard.placement function is already being called in the gameboard tests\ntherefore there is no need to have to create a mock gameboard function here\ni will still have to input mock x and y coordinates for the attack\n*/\n\nvar gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nvar shipType;\nvar playerBoard = gameboard(shipType, 1, 1);\nvar squareArr = playerBoard.usedSquares;\nvar chooseAgain = 'Choose again';\n\n/* let corArr = gameboard.placement(coordinates) */\n\nfunction player(shipType, xCor, yCor) {\n  return {\n    shipType: shipType,\n    xCor: xCor,\n    yCor: yCor,\n    test: function test() {\n      return squareArr;\n    },\n    squareChosen: function squareChosen(xCor, yCor) {\n      var coordinates = {\n        xCor: 1,\n        yCor: 1\n      };\n      for (var i = 0; i < playerBoard.missed.length; i++) {\n        if (JSON.stringify({\n          xCor: xCor,\n          yCor: yCor\n        }) === JSON.stringify(squareArr[i])) {\n          return chooseAgain;\n        }\n      }\n      return playerBoard.receiveAttack(coordinates);\n    },\n    computerChoice: function computerChoice() {\n      function randomChoice(choice) {\n        return Math.floor(Math.random * choice);\n      }\n      var xCor = randomChoice(11);\n      var yCor = randomChoice(11);\n      var coordinates = {\n        xCor: xCor,\n        yCor: yCor\n      };\n      for (var i = 0; i < 1; i++) {\n        if (JSON.stringify({\n          xCor: xCor,\n          yCor: yCor\n        }) === JSON.stringify(squareArr[i])) {\n          randomChoice();\n        }\n      }\n      return true;\n    }\n  };\n}\nmodule.exports = player;\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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