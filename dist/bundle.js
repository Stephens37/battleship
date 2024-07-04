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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  height: 100%;\n}\n\n.bakbak-one-regular {\n  font-family: \"Bakbak One\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 8fr 1fr;\n  grid-template-columns: repeat(2, 1fr);\n}\n\nheader {\n  grid-row: 1;\n  grid-column: 1 / spread 2;\n}\n\n#title {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n  font-family: \"Bakbak One\", sans-serif;;\n  text-align: center;\n}\n\n#player {\n  grid-row: 2;\n  grid-column: 1;\n}\n\n#playergrid {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n#computer {\n  grid-row: 2;\n  grid-column: 2;\n}\n\n#computergrid {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n#playerboard {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border-width: 3px;\n  border-color: black;\n  border-style: solid;\n}\n\n#computerboard {\n  display: grid;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border-width: 3px;\n  border-color: black;\n  border-style: solid;\n}\n\n.playersq {\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\n.computersq {\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\nfooter { \n  grid-row: 3;\n  grid-column: 1 / span 2;\n  text-align: center;\n  font-size: 20px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* ships are placed by clicking a square\nif a square is clicked and the ship won't fit inside the following squares an error is called\notherwise the ship will appear in its placement on the gameboard\n\nthis will be a function within the gameboard function\n1 ship takes up 2 vertexes, 2 ships take up 3, 1 four, and another five\n*/\n\n/*\nreceive attack will check if a ship was placed on the clicked coordinates\nif ship present, ship.hit() is called,\n\nregardless of whether a ship was hit or not\nthat square changes color\nand is not able to be clicked\n*/\n\n/*\nwhen a ship is sunken\nship.sunk() is called\nthat ship is displayed in the sunk category\n*/\nvar _require = __webpack_require__(/*! ./player.js */ \"./src/player.js\"),\n  gameDisplay = _require.gameDisplay,\n  playSqArr = _require.playSqArr;\nvar _require2 = __webpack_require__(/*! ./ship */ \"./src/ship.js\"),\n  timesHit = _require2.timesHit,\n  shipLength = _require2.shipLength,\n  sunk = _require2.sunk;\n// const player = require('./player.js')\n// let xCor = player.xCor\n// let yCor = player.yCor\n\n// const boardArr = Array.from({ length: 10 }, () => Array(10).fill(0))\nvar gameOver = 'Game Over';\nvar destroyer = {\n  shipLength: 2,\n  timesHit: 0,\n  sunk: false\n};\nvar submarine = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar cruiser = {\n  shipLength: 3,\n  timesHit: 0,\n  sunk: false\n};\nvar battleship = {\n  shipLength: 4,\n  timesHit: 0,\n  sunk: false\n};\nvar carrier = {\n  shipLength: 5,\n  timesHit: 0,\n  sunk: false\n};\nvar playShipArr = [destroyer, submarine, cruiser, battleship, carrier];\nvar compShipArr = [destroyer, submarine, cruiser, battleship, carrier];\nvar compMissed = [];\nvar playMissed = [];\nvar compSunkArr = [];\nvar playSunkArr = [];\nvar compCorArr = [];\nvar xCor = player.xCor;\nvar yCor = player.yCor;\nfunction gameboard() {\n  var coordinates = {\n    xCor: xCor,\n    yCor: yCor\n  };\n  var usedSquares = [];\n  var t = 0;\n  var s = 0;\n  var shipType;\n  return {\n    shipType: shipType,\n    coordinates: coordinates,\n    xCor: xCor,\n    yCor: yCor,\n    usedSquares: usedSquares,\n    computerPlacement: function computerPlacement() {\n      var _this = this;\n      var _loop = function _loop() {\n          shipType = compShipArr[i];\n          function getRandomInt(max) {\n            return Math.floor(Math.random() * max);\n          }\n          xCor = getRandomInt(11);\n          yCor = getRandomInt(11);\n          if (xCor + shipType.shipLength > 10 || xCor === 0 || yCor === 0) {\n            xCor = getRandomInt(11);\n            yCor = getRandomInt(11);\n          } else {\n            for (var _i = 0; _i < compCorArr.length; _i++) {\n              if (JSON.stringify({\n                xCor: xCor,\n                yCor: yCor\n              }) === JSON.stringify(compCorArr[_i])) {\n                return {\n                  v: _this.computerPlacement()\n                };\n              }\n            }\n            shipType.corArr = [];\n            for (var _i2 = 0; _i2 < shipType.shipLength; _i2++) {\n              shipType.corArr.push({\n                xCor: xCor + _i2,\n                yCor: yCor\n              });\n              compCorArr.push({\n                xCor: xCor + _i2,\n                yCor: yCor\n              });\n            }\n          }\n          console.log(shipType.corArr);\n          s++;\n        },\n        _ret;\n      for (var i = 0; i < 5; i++) {\n        _ret = _loop();\n        if (_ret) return _ret.v;\n      }\n      document.querySelector('footer').textContent = 'Let the games begin';\n    },\n    placement: function placement(coordinates) {\n      shipType = playShipArr[s];\n      if (playShipArr[s] === undefined) {\n        var stop = 'stop';\n        return stop;\n      }\n      if (coordinates.xCor + shipType.shipLength > 10) {\n        throw new Error('Error: ship will not fit where you wish to place it.');\n      } else {\n        shipType.corArr = [];\n        for (var i = 0; i < shipType.shipLength; i++) {\n          shipType.corArr.push({\n            xCor: coordinates.xCor + i,\n            yCor: coordinates.yCor\n          });\n          var sqColor = {\n            xCor: coordinates.xCor + i,\n            yCor: coordinates.yCor\n          };\n          //SET COLOR ON COORDINATES BY MATCHING THEM WITH THE DIV THAT HAS THE SAME COORDINATES\n          /*for (let i = 0; i < 100; i++) {\n            if (sqColor.xCor == playSqArr[i].coordinates.xCor) {\n              playSqArr[i].style.color = 'green'\n            }*/\n          gameDisplay.playColorCoordinates(sqColor.xCor, sqColor.yCor, 'green');\n        }\n      }\n      s++;\n      if (s === 5) {\n        this.computerPlacement();\n        var _stop = 'stop';\n        return _stop;\n      }\n    },\n    /*\n    - issue is that I want to return the current shipType at the end of a loop however I don't want\n    to cut the loop short by adding a return statement at the end\n    - \n    */\n    receiveCompAttack: function receiveCompAttack(coordinates) {\n      /*\n      if the coordinates hit were the same coordinates as a ship\n      that ship will be hit\n      else the coordinates will be returned as missed\n      */\n      console.log(coordinates);\n      for (var i = 0; i < playMissed.length; i++) {\n        if (JSON.stringify(coordinates) === JSON.stringify(playMissed[i])) {\n          console.log('s');\n          return 'Choose again';\n        }\n      }\n      for (var _i3 = 0; _i3 < playShipArr.length; _i3++) {\n        var _shipType = playShipArr[_i3];\n        var corArr = _shipType.corArr;\n        console.log(_shipType.corArr);\n        var _xCor = coordinates.xCor;\n        console.log(coordinates.xCor);\n        var _yCor = coordinates.yCor;\n        for (var _i4 = 0; _i4 < corArr.length; _i4++) {\n          if (JSON.stringify(corArr[_i4]) === JSON.stringify(coordinates)) {\n            _shipType.timesHit = _shipType.timesHit + 1;\n            if (_shipType.timesHit === _shipType.shipLength) {\n              playSunkArr.push(_shipType);\n              if (playSunkArr.length === 5) {\n                gameDisplay.playColorCoordinates(_xCor, _yCor, 'red');\n                document.querySelector('footer').textContent = 'Player Wins';\n                return gameOver;\n              }\n              usedSquares.push(coordinates);\n              _shipType.sunk = true;\n              gameDisplay.playColorCoordinates(_xCor, _yCor, 'red');\n              return _shipType.sunk;\n            }\n            usedSquares.push(coordinates);\n            gameDisplay.playColorCoordinates(_xCor, _yCor, 'red');\n            return _shipType.timesHit;\n          }\n        }\n      }\n      usedSquares.push(coordinates);\n      playMissed.push(coordinates);\n      gameDisplay.playColorCoordinates(xCor, yCor, 'grey');\n      return {\n        playMissed: playMissed\n      };\n    },\n    computerChoice: function computerChoice() {\n      console.log('f');\n      function randomChoice(choice) {\n        return Math.floor(Math.random() * choice);\n      }\n      var xCor = randomChoice(11);\n      var yCor = randomChoice(11);\n      console.log(xCor);\n      console.log(yCor);\n      if (xCor + shipType.shipLength > 10 || xCor === 0 || yCor === 0) {\n        xCor = randomChoice(11);\n        yCor = randomChoice(11);\n      } else {\n        for (var i = 0; i < 1; i++) {\n          if (JSON.stringify({\n            xCor: xCor,\n            yCor: yCor\n          }) === JSON.stringify(playMissed[i])) {\n            xCor = randomChoice(11);\n            yCor = randomChoice(11);\n            console.log('hi');\n            coordinates = {\n              xCor: xCor,\n              yCor: yCor\n            };\n            return coordinates;\n          }\n        }\n      }\n      console.log(coordinates);\n      this.receiveCompAttack(coordinates);\n      return true;\n    },\n    receivePlayAttack: function receivePlayAttack(coordinates) {\n      /*\n      if the coordinates hit were the same coordinates as a ship\n      that ship will be hit\n      else the coordinates will be returned as missed\n      */\n      console.log(coordinates.xCor);\n      console.log(coordinates.yCor);\n      for (var i = 0; i < compMissed.length; i++) {\n        if (JSON.stringify(coordinates) === JSON.stringify(compMissed[i])) {\n          return 'Choose again';\n        }\n      }\n      for (var _i5 = 0; _i5 < compShipArr.length; _i5++) {\n        var _shipType2 = compShipArr[_i5];\n        var corArr = _shipType2.corArr;\n        for (var _i6 = 0; _i6 < corArr.length; _i6++) {\n          if (JSON.stringify(corArr[_i6]) === JSON.stringify(coordinates)) {\n            _shipType2.timesHit = _shipType2.timesHit + 1;\n            if (_shipType2.timesHit === _shipType2.shipLength) {\n              compSunkArr.push(_shipType2);\n              if (compSunkArr.length === 5) {\n                document.querySelector('footer').textContent = 'Player Wins';\n                return gameOver;\n              }\n              usedSquares.push(coordinates);\n              _shipType2.sunk = true;\n              console.log('h');\n              gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'red');\n              this.computerChoice();\n              return _shipType2.sunk;\n            }\n            usedSquares.push(coordinates);\n            gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'red');\n            this.computerChoice();\n            return _shipType2.timesHit;\n          }\n        }\n      }\n      usedSquares.push(coordinates);\n      compMissed.push(coordinates);\n      gameDisplay.compColorCoordinates(coordinates.xCor, coordinates.yCor, 'grey');\n      this.computerChoice();\n      return {\n        compMissed: compMissed\n      };\n    }\n    /* squareChosen: function (xCor, yCor) {\n      let coordinates = { xCor, yCor }\n      for (let i = 0; i < missed.length; i++) {\n        if (JSON.stringify({ xCor, yCor }) === JSON.stringify(usedSquares[i])) {\n          return chooseAgain\n        }\n      }\n      return receiveAttack(coordinates)\n    }, */\n  };\n}\nmodule.exports = {\n  gameboard: gameboard,\n  playShipArr: playShipArr\n};\n\n/*\nif \n*/\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nvar gameboardRequire = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nvar playerRequire = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nvar gameboard = gameboardRequire.gameboard();\nvar playShipArr = gameboardRequire.playShipArr;\nconsole.log(playShipArr);\nvar squares = document.querySelectorAll('.playersq');\nvar compSquares = document.querySelectorAll('.computersq');\nfunction handleClick(event) {\n  var square = event.target;\n  var result = gameboard.placement(square.coordinates);\n  if (result === 'stop') {\n    console.log('hey');\n    squares.forEach(function (square) {\n      square.removeEventListener('click', handleClick);\n    });\n    compSquares.forEach(function (square) {\n      square.addEventListener('click', function () {\n        gameboard.receivePlayAttack(square.coordinates);\n      });\n    });\n  }\n}\nsquares.forEach(function (square) {\n  square.addEventListener('click', handleClick);\n});\n\n/*\n- reason square.coordinates is undefined is because square.addEventListener simply represents a single click of the \"squares\" variable\n- the \"squares\" variable encapsulates the whole \"playersq\" class\n- meaning that there is no specific set of coordinates cooresponding to the \"squares\" variable\n*/\n\n/*\n- is there a way to detect the attributes of an object simply based on it's click?\n*/\n\n/*\n- detect that shipType is carrier\n- detect that the playShipArr is equal to carrier\n*/\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("var playCorArr = [];\nvar compCorArr = [];\nvar playSqArr = [];\nvar compSqArr = [];\nvar xCor;\nvar yCor;\nvar playerBoard = document.querySelector('#playerboard');\nvar computerBoard = document.querySelector('#computerboard');\nfunction display() {\n  return {\n    xCor: xCor,\n    yCor: yCor,\n    assignPCor: function assignPCor() {\n      var x = 0;\n      var y = 1;\n      for (var i = 1; i < 101; i++) {\n        if ((i - 1) % 10 === 0 && i !== 1) {\n          x = 1;\n          y++;\n          playCorArr.push({\n            xCor: x,\n            yCor: y\n          });\n        } else {\n          x++;\n          playCorArr.push({\n            xCor: x,\n            yCor: y\n          });\n        }\n      }\n      return playSqArr;\n    },\n    assignCCor: function assignCCor() {\n      var x = 0;\n      var y = 1;\n      for (var i = 0; i < 101; i++) {\n        if ((i - 1) % 10 === 0 && i !== 1) {\n          x = 1;\n          y++;\n          compCorArr.push({\n            xCor: x,\n            yCor: y\n          });\n        } else {\n          x++;\n          compCorArr.push({\n            xCor: x,\n            yCor: y\n          });\n        }\n      }\n      console.log(compSqArr);\n      return compSqArr;\n    },\n    createPlayerSquares: function createPlayerSquares() {\n      var squareDisArr;\n      for (var i = 0; i < 100; i++) {\n        var square = document.createElement('div');\n        square.setAttribute('class', 'playersq');\n        square.coordinates = playCorArr[i];\n        playSqArr.push(square);\n        playerBoard.appendChild(square);\n      }\n      return playerBoard;\n    },\n    createComputerSquares: function createComputerSquares() {\n      for (var i = 0; i < 100; i++) {\n        var square = document.createElement('div');\n        square.setAttribute('class', 'computersq');\n        square.coordinates = compCorArr[i];\n        compSqArr.push(square);\n        computerBoard.appendChild(square);\n      }\n      console.log('computer');\n      return computerBoard;\n    },\n    playColorCoordinates: function playColorCoordinates(coorX, coorY, color) {\n      for (var i = 0; i < 100; i++) {\n        console.log(coorX);\n        console.log(coorY);\n        console.log(playSqArr);\n        console.log(playSqArr[i].coordinates.xCor);\n        console.log(playSqArr[i].coordinates.yCor);\n        if (coorX === playSqArr[i].coordinates.xCor && coorY === playSqArr[i].coordinates.yCor) {\n          console.log(coorX);\n          console.log(coorY);\n          playSqArr[i].style.backgroundColor = color;\n          return;\n        }\n      }\n    },\n    compColorCoordinates: function compColorCoordinates(coorX, coorY, color) {\n      for (var i = 0; i < 100; i++) {\n        if (coorX === compSqArr[i].coordinates.xCor && coorY === compSqArr[i].coordinates.yCor) {\n          console.log(color);\n          console.log(compSqArr[i]);\n          compSqArr[i].style.backgroundColor = color;\n          console.log({\n            coorX: coorX,\n            coorY: coorY\n          });\n          return;\n        }\n      }\n    }\n  };\n}\nvar gameDisplay = display();\ngameDisplay.assignCCor();\ngameDisplay.assignPCor();\ngameDisplay.createPlayerSquares();\ngameDisplay.createComputerSquares();\nmodule.exports = {\n  gameDisplay: gameDisplay,\n  playSqArr: playSqArr\n};\n\n/*\n  create x and y coordinates within the display file\n  import the display object over to gameboard\n  gameboard x and y coordinates equal the display x and y coordinates\n  interaction happens in gameboard, uses functions from the display file\n\n  essentially, gameboard provides the interactions, display, displays them\n\n  gameboard should be relying on the display file to show interactions\n  display should not be relying on the gameboard file to interact with the display\n*/\n\n/*\n  create player coordinates\n  create squares for player, assign coordinates\n  do the same for computer\n*/\n\n/*\n  create an array of coordinates without assigning them to a variable\n  loop through this array and assign each objects xCor and yCor as grid column/row values\n*/\n\n/* the only question i have about not assigning a variable\nis how I will be able to assign colours, etc. to the squares\n\nperhaps later, i then find a match with the x and y coordinates,\nex: if (grid-column: xCor && grid-row: yCor) then that grid-column and row is red\n*/\n\n/*\n  square is clicked\n  grid-column = xCor\n  grid-row = yCor\n  run the ship hit function\n  if ship is hit colour the square red using this function\n  otherwise colour the square gray\n  either way make the square unclickable\n*/\n\n/*\n  how to create the grid display itself\n  to create this I need to assign each square to a div\n  I don't want 100 html elements so I want to create these in a loop\n*/\n\n/*\n  need to be able to retrieve a square based on its x and y coordinates\n  to do this I will create a 10x10 grid\n  when a square is clicked check which spot in array has the xCor with the same number as grid-column\n  and yCor with the same number as grid-row\n*/\n\n/* function playerSquares () {\n  for (let i = 0; i < 100; i++) {\n    instead of\n    playSqArr.playerSquare${`i`}.style.gridColumn = playSqArr.playerSquare${`i`}.xCor\n    do\n    \"gameboard\".style.gridColumn = playSqArr[i].xCor\n    \n    \n    playerBoard.appendChild(playSqArr[i])\n    playSqArr[i].style.gridColumn = playSqArr[i].xCor\n    playSqArr[i].style.gridRow = playSqArr[i].yCor\n  }\n}\n\nplayerSquares()\n\nfunction compSquares () {\n  for (let i = 0; i < 100; i++) {\n    computerBoard.appendChild(compSqArr[i])\n    compSqArr[i].style.gridColumn = compSqArr[i].xCor\n    compSqArr[i].style.gridRow = compSqArr[i].yCor\n  }\n}\n\ncompSquares()\n*/\n\n/*\nthe reason why the computer coordinates are appearing wonky when displayed is because playSqArr has an 11 xCor before switching\nto the next yCor level\n*/\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function ship(shipLength, timesHit, sunk) {\n  return {\n    shipLength: shipLength,\n    timesHit: timesHit,\n    sunk: sunk,\n    corArr: [],\n    hit: function hit() {\n      timesHit += 1;\n      return timesHit;\n    },\n    isSunk: function isSunk() {\n      if (shipLength === timesHit) {\n        sunk = true;\n        return sunk;\n      }\n    }\n  };\n}\nmodule.exports = ship(5, 4, false);\n\n/*\n\n*/\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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