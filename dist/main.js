/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Quicksand/Quicksand-VariableFont_wght.ttf */ "./src/Quicksand/Quicksand-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: quicksand;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nhtml, body {\r\n  font-family: quicksand, sans-serif;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader,\r\n.main-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  background-color: white;\r\n  height: 120px;\r\n}\r\n\r\n.main-container {\r\n  background-color: grey;\r\n  height: 100%;\r\n}\r\n\r\n.tiles-container {\r\n  display: grid;\r\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n  height: min(50vw, 50vh);\r\n  width: min(50vw, 50vh);\r\n  gap: 8px;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(212, 212, 212);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tile:nth-child(2n) {\r\n  background-color: rgb(54, 54, 54);\r\n}\r\n\r\n.tile.possible-moves {\r\n  background-color: rgb(42, 144, 165);\r\n}\r\n\r\n.tile:hover {\r\n  background-color: rgb(125, 213, 248);\r\n}\r\n\r\n.tile.selected {\r\n  background-color: rgba(0, 255, 255, 0.689);\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAAmD;AACrD;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,SAAS;EACT,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,uBAAuB;EACvB,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":["@font-face {\r\n  font-family: quicksand;\r\n  src: url(Quicksand/Quicksand-VariableFont_wght.ttf);\r\n}\r\n\r\nhtml, body {\r\n  font-family: quicksand, sans-serif;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader,\r\n.main-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  background-color: white;\r\n  height: 120px;\r\n}\r\n\r\n.main-container {\r\n  background-color: grey;\r\n  height: 100%;\r\n}\r\n\r\n.tiles-container {\r\n  display: grid;\r\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n  height: min(50vw, 50vh);\r\n  width: min(50vw, 50vh);\r\n  gap: 8px;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(212, 212, 212);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tile:nth-child(2n) {\r\n  background-color: rgb(54, 54, 54);\r\n}\r\n\r\n.tile.possible-moves {\r\n  background-color: rgb(42, 144, 165);\r\n}\r\n\r\n.tile:hover {\r\n  background-color: rgb(125, 213, 248);\r\n}\r\n\r\n.tile.selected {\r\n  background-color: rgba(0, 255, 255, 0.689);\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/boardPieces.js":
/*!************************************!*\
  !*** ./src/modules/boardPieces.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "pawn": () => (/* binding */ pawn),
/* harmony export */   "pawns": () => (/* binding */ pawns)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFlow */ "./src/modules/gameFlow.js");



const pawn = (name, color, row, column) => {
  const pawnName = name;
  const pawnColor = color;
  let pawnRow = row;
  let pawnColumn = column;

  const getName = () => {
    return pawnName;
  }

  const getColor = () => {
    return pawnColor;
  }

  const getRow = () => {
    return pawnRow;
  }

  const getColumn = () => {
    return pawnColumn;
  }
  
  const pawnImg = document.createElement('img');

  if (color === 'black') {
    pawnImg.setAttribute('src', 'svg/bpawn.svg');
  } else if (color === 'white') {
    pawnImg.setAttribute('src', 'svg/pawn.svg');
  }

  pawnImg.setAttribute('height', '50');
  pawnImg.setAttribute('width', '50');
  pawnImg.setAttribute('data-name', name);

  const pawnMove = (newRow, newColumn) => {
    pawnRow = newRow;
    pawnColumn = newColumn;
  }

  /**
   * returns an array of tiles that 
   * pawn can legally move to
   */ 
  const calculateLegalMoves = () => {
    let pawnRowInt = parseInt(pawnRow);
    let forwardRow = '';

    if (
      getColor() === 'black' && pawnRow === '1'
      || getColor() === 'white' && pawnRow === '3') {
      return [];
    }

    if (getColor() === 'black' & pawnRow !== '1') {
      forwardRow = pawnRowInt - 1;
    } else if (getColor() === 'white' & pawnRow !== '3') {
      forwardRow = pawnRowInt + 1;
    }

    const calculateForwardMove = () => {
      let forwardColumn = [];
      if (gameBoard.getPawn(forwardRow, getColumn(), getColor())
        === 'no') {
          forwardColumn.push(`${forwardRow.toString()}${pawnColumn}`)
        }
      return forwardColumn;
    }

    const calculateDiagonalMove = () => {
      let diagonalColumn = [];
      if (
        pawnColumn === 'a' || pawnColumn === 'c'
      ) {
        if (
        gameBoard.getPawn(forwardRow, 'b', getColor())
        !== 'no'
        && gameBoard.getPawn(forwardRow, 'b', getColor())[0]
        !== getColor()[0]) {
          diagonalColumn = ['b'];
        }
      } else if (pawnColumn === 'b') {
        let validColumn = ['a', 'c'];
        for (const col of validColumn) {
          if (
          gameBoard.getPawn(forwardRow, col, getColor())
          !== 'no'
          && gameBoard.getPawn(forwardRow, col, getColor())[0]
          !== getColor()[0]) {
            diagonalColumn.push(col);
          }
        }
      }

      let moveableTile = [];
      for (let i of diagonalColumn) {
        moveableTile.push(`${forwardRow.toString()}${i}`);
      }
      return moveableTile;
    }
    
    return calculateForwardMove()
            .concat(calculateDiagonalMove());
  }

  return { getName,
           getColor,
           getRow,
           getColumn,
           pawnImg,
           pawnMove,
           calculateLegalMoves };
}

const pawns = (() => {
  const abc = ['a', 'b', 'c'];
  const list = {};
  for (let i = 1; i < 4; i++) {
    list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black',
    '3', abc[i - 1]);
    list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white',
    '1', abc[i - 1]);
  }

  const getList = () => {
    return list;
  }

  const removePawn = (pawnName) => {
    delete list[pawnName];
  }

  return { getList, removePawn }
})();

// depends on domElements, pawn, gameFlow
const gameBoard = (() => {
  const tilesArr = Array
  .from(_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements.tilesNodes);

  const clearIndicator = () => {
    for (const tile of tilesArr) {
      tile.classList.remove('selected');
    }
  }

  const clearPossibleMoves = () => {
    for (const tiles of tilesArr) {
      tiles.classList.remove('possible-moves');
    }
  }

  const clearPawns = () => {
    for (const tile of tilesArr) {
      while (tile.firstChild) {
        tile.removeChild(tile.lastChild);
      }
    }
  }

  const displayPawns = () => {
    let pawnList = pawns.getList();
    for (const pawn in pawns.getList()) {

      let pawnTilePosition = `[data-row='${pawnList[pawn]
        .getRow()}'][data-column='${pawnList[pawn]
        .getColumn()}']`;

      document
      .querySelector(pawnTilePosition)
      .appendChild(pawnList[pawn].pawnImg);
    }
  }

  const checkWin = () => {
    let colour = _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkCurrentColour();
    let allPossibleMoves = [];
    
    for (let pawn in pawns.getList()) {
      let currPawn = pawns.getList()[pawn];
      if (currPawn.getColor()[0] !== colour[0]) {
        console.log(pawn);
        for (const i of currPawn.calculateLegalMoves()) {
          allPossibleMoves.push(i);
        }
      }
    }
    console.log(allPossibleMoves);
    if (allPossibleMoves.length === 0) {
      _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeGameState();
      console.log(_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkGameState());
      return 0;
    }
  }

  const endOfTurnProcesses = () => {
    clearPawns();
    displayPawns();
    _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeTargetPawn('');
    clearIndicator();
    clearPossibleMoves();
    checkWin();
    _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeColour();
  }

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));
      
      clearIndicator();

      let previousPawn = pawns
        .getList()[_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn()];

      // this checks if the tile has a pawnimg contained
      // within it
      let clickedPawn = tile.querySelector('img');
      
      if (_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkGameState() === true) {
        if (!!clickedPawn) {
          if (!!previousPawn) {
            clearPossibleMoves();
          }
          
          tile.classList.add('selected');
          let clickedPawnName = clickedPawn.getAttribute('data-name');
  
          let currentPawn = pawns
              .getList()
              [`${clickedPawnName}`];
          
          for (const i of currentPawn.calculateLegalMoves()) {
            document
              .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
              .classList.add('possible-moves');
          }

          /**
           * if we clicked on a pawn,
           * and we also previously clicked on a pawn,
           * and the selected tile is a valid tile 
           * for the previously clicked pawn,
           * and the two pawns are opposite colours,
           * then the previously clicked pawn
           * eats clicked pawn
           */
          if (_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn() !== ''
          &&
          previousPawn
            .calculateLegalMoves()
            .includes(
            _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile() 
            )
            
          /**
           * checks if the first letter of the two pawns are 
           * the same or not 
           */
          && _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn()[0] !== clickedPawnName[0]
          ) {
              pawns.removePawn(clickedPawnName);
              previousPawn
              .pawnMove(`${_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile()[0]}`,
                        `${_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile()[1]}`);
              endOfTurnProcesses();
          } else {
              _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
          }
        }
  
        /**
         * if clicked tile has no pawn in it, and
         * previously we clicked on a pawn,
         * and if the clicked tile is in the list
         * of valid legal moves for the pawn,
         * then it moves the pawn to the clicked tile
         */
        else if (
          clickedPawn === null 
          && _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn() !== ''
          && previousPawn
              .calculateLegalMoves()
              .includes(
                _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile() 
              )
          ) {
          for (const i of previousPawn.calculateLegalMoves()) {
              document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.remove('possible-moves');
          }
  
          previousPawn
               .pawnMove(`${_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile()[0]}`,
                      `${_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile()[1]}`);
          endOfTurnProcesses();
         }
      }
    })
  }

  const getPawn = (row, column) => {
    let tile = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
    return tile.querySelector('img') ?
    tile
      .querySelector('img')
      .getAttribute('data-name') : 'no';
  }
  
  return { displayPawns,
           tilesArr,
           clearPawns,
           getPawn }
})();

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
const domElements = (() => {
  const tilesNodes = document
            .querySelectorAll('div.tile');

  return { tilesNodes };
})();

/***/ }),

/***/ "./src/modules/gameFlow.js":
/*!*********************************!*\
  !*** ./src/modules/gameFlow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameFlow": () => (/* binding */ gameFlow)
/* harmony export */ });
/* harmony import */ var _boardPieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardPieces */ "./src/modules/boardPieces.js");


const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';
  let isGameRunning = true;
  let currentColour = 'white';

  const getTargetTile = () => {;
    return `${targetRow}${targetColumn}`;
  }
  
  const changeTargetTile = (row, column) => {
    targetRow = row;
    targetColumn = column;
  }

  const getTargetPawn = () => {
    return targetPawn;
  }

  const changeTargetPawn = (pawn) => {
    targetPawn = pawn;
  }

  const checkGameState = () => {
    return isGameRunning;
  }

  const changeGameState = () => {
    if (isGameRunning === true) {
      isGameRunning = false;
    } else if (isGameRunning === false) {
      isGameRunning = true;
    }
  }

  /**
   * TODO: add turn based functionality
   *       i.e., let white move first,
   *       then black, etc.
   */ 

  const startGame = () => {
    isGameRunning = true;
  }

  const endGame = () => {
    isGameRunning = false;
  }

  const checkCurrentColour = () => {
    return currentColour;
  }

  const changeColour = () => {
    if (currentColour === 'white') {
      currentColour = 'black';
    } else if (currentColour === 'black') {
      currentColour = 'white';
    }
  }

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           changeTargetPawn,
           checkGameState,
           startGame,
           endGame,
           changeGameState,
           checkCurrentColour,
           changeColour };
})();

/***/ }),

/***/ "./src/Quicksand/Quicksand-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/Quicksand/Quicksand-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf52df73d8529b4815ed.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_boardPieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/boardPieces */ "./src/modules/boardPieces.js");



const player = (name, color) => {
  const getName = () => {
    return name;
  }
  const getColor = () => {
    return color;
  }
  return { getName, getColor };
};

_modules_boardPieces__WEBPACK_IMPORTED_MODULE_1__.gameBoard.displayPawns();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0Esd0VBQXNCO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9ib2FyZFBpZWNlcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL21vZHVsZXMvZ2FtZUZsb3cuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiBtaW4oNTB2dywgNTB2aCk7XFxyXFxuICB3aWR0aDogbWluKDUwdncsIDUwdmgpO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aWxlOm50aC1jaGlsZCgybikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS5wb3NzaWJsZS1tb3ZlcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE0NCwgMTY1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMjEzLCAyNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjY4OSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXHJcXG4gIHNyYzogdXJsKFF1aWNrc2FuZC9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogcXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlcixcXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aWxlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBoZWlnaHQ6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIHdpZHRoOiBtaW4oNTB2dywgNTB2aCk7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6bnRoLWNoaWxkKDJuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnBvc3NpYmxlLW1vdmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTQ0LCAxNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAyMTMsIDI0OCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNjg5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZG9tRWxlbWVudHMgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcclxuXHJcbmV4cG9ydCBjb25zdCBwYXduID0gKG5hbWUsIGNvbG9yLCByb3csIGNvbHVtbikgPT4ge1xyXG4gIGNvbnN0IHBhd25OYW1lID0gbmFtZTtcclxuICBjb25zdCBwYXduQ29sb3IgPSBjb2xvcjtcclxuICBsZXQgcGF3blJvdyA9IHJvdztcclxuICBsZXQgcGF3bkNvbHVtbiA9IGNvbHVtbjtcclxuXHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBwYXduTmFtZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENvbG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBhd25Db2xvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFJvdyA9ICgpID0+IHtcclxuICAgIHJldHVybiBwYXduUm93O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q29sdW1uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBhd25Db2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHBhd25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgaWYgKGNvbG9yID09PSAnYmxhY2snKSB7XHJcbiAgICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3N2Zy9icGF3bi5zdmcnKTtcclxuICB9IGVsc2UgaWYgKGNvbG9yID09PSAnd2hpdGUnKSB7XHJcbiAgICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3N2Zy9wYXduLnN2ZycpO1xyXG4gIH1cclxuXHJcbiAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc1MCcpO1xyXG4gIHBhd25JbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MCcpO1xyXG4gIHBhd25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuXHJcbiAgY29uc3QgcGF3bk1vdmUgPSAobmV3Um93LCBuZXdDb2x1bW4pID0+IHtcclxuICAgIHBhd25Sb3cgPSBuZXdSb3c7XHJcbiAgICBwYXduQ29sdW1uID0gbmV3Q29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IFxyXG4gICAqIHBhd24gY2FuIGxlZ2FsbHkgbW92ZSB0b1xyXG4gICAqLyBcclxuICBjb25zdCBjYWxjdWxhdGVMZWdhbE1vdmVzID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhd25Sb3dJbnQgPSBwYXJzZUludChwYXduUm93KTtcclxuICAgIGxldCBmb3J3YXJkUm93ID0gJyc7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBnZXRDb2xvcigpID09PSAnYmxhY2snICYmIHBhd25Sb3cgPT09ICcxJ1xyXG4gICAgICB8fCBnZXRDb2xvcigpID09PSAnd2hpdGUnICYmIHBhd25Sb3cgPT09ICczJykge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldENvbG9yKCkgPT09ICdibGFjaycgJiBwYXduUm93ICE9PSAnMScpIHtcclxuICAgICAgZm9yd2FyZFJvdyA9IHBhd25Sb3dJbnQgLSAxO1xyXG4gICAgfSBlbHNlIGlmIChnZXRDb2xvcigpID09PSAnd2hpdGUnICYgcGF3blJvdyAhPT0gJzMnKSB7XHJcbiAgICAgIGZvcndhcmRSb3cgPSBwYXduUm93SW50ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhdGVGb3J3YXJkTW92ZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGZvcndhcmRDb2x1bW4gPSBbXTtcclxuICAgICAgaWYgKGdhbWVCb2FyZC5nZXRQYXduKGZvcndhcmRSb3csIGdldENvbHVtbigpLCBnZXRDb2xvcigpKVxyXG4gICAgICAgID09PSAnbm8nKSB7XHJcbiAgICAgICAgICBmb3J3YXJkQ29sdW1uLnB1c2goYCR7Zm9yd2FyZFJvdy50b1N0cmluZygpfSR7cGF3bkNvbHVtbn1gKVxyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIGZvcndhcmRDb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlRGlhZ29uYWxNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZGlhZ29uYWxDb2x1bW4gPSBbXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBhd25Db2x1bW4gPT09ICdhJyB8fCBwYXduQ29sdW1uID09PSAnYydcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgIGdhbWVCb2FyZC5nZXRQYXduKGZvcndhcmRSb3csICdiJywgZ2V0Q29sb3IoKSlcclxuICAgICAgICAhPT0gJ25vJ1xyXG4gICAgICAgICYmIGdhbWVCb2FyZC5nZXRQYXduKGZvcndhcmRSb3csICdiJywgZ2V0Q29sb3IoKSlbMF1cclxuICAgICAgICAhPT0gZ2V0Q29sb3IoKVswXSkge1xyXG4gICAgICAgICAgZGlhZ29uYWxDb2x1bW4gPSBbJ2InXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocGF3bkNvbHVtbiA9PT0gJ2InKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkQ29sdW1uID0gWydhJywgJ2MnXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB2YWxpZENvbHVtbikge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZ2FtZUJvYXJkLmdldFBhd24oZm9yd2FyZFJvdywgY29sLCBnZXRDb2xvcigpKVxyXG4gICAgICAgICAgIT09ICdubydcclxuICAgICAgICAgICYmIGdhbWVCb2FyZC5nZXRQYXduKGZvcndhcmRSb3csIGNvbCwgZ2V0Q29sb3IoKSlbMF1cclxuICAgICAgICAgICE9PSBnZXRDb2xvcigpWzBdKSB7XHJcbiAgICAgICAgICAgIGRpYWdvbmFsQ29sdW1uLnB1c2goY29sKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtb3ZlYWJsZVRpbGUgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSBvZiBkaWFnb25hbENvbHVtbikge1xyXG4gICAgICAgIG1vdmVhYmxlVGlsZS5wdXNoKGAke2ZvcndhcmRSb3cudG9TdHJpbmcoKX0ke2l9YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1vdmVhYmxlVGlsZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZUZvcndhcmRNb3ZlKClcclxuICAgICAgICAgICAgLmNvbmNhdChjYWxjdWxhdGVEaWFnb25hbE1vdmUoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXROYW1lLFxyXG4gICAgICAgICAgIGdldENvbG9yLFxyXG4gICAgICAgICAgIGdldFJvdyxcclxuICAgICAgICAgICBnZXRDb2x1bW4sXHJcbiAgICAgICAgICAgcGF3bkltZyxcclxuICAgICAgICAgICBwYXduTW92ZSxcclxuICAgICAgICAgICBjYWxjdWxhdGVMZWdhbE1vdmVzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXducyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYWJjID0gWydhJywgJ2InLCAnYyddO1xyXG4gIGNvbnN0IGxpc3QgPSB7fTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgbGlzdFtgYnBhd24ke2l9YF0gPSBwYXduKGBicGF3biR7aX1gLCAnYmxhY2snLFxyXG4gICAgJzMnLCBhYmNbaSAtIDFdKTtcclxuICAgIGxpc3RbYHdwYXduJHtpfWBdID0gcGF3bihgd3Bhd24ke2l9YCwgJ3doaXRlJyxcclxuICAgICcxJywgYWJjW2kgLSAxXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVQYXduID0gKHBhd25OYW1lKSA9PiB7XHJcbiAgICBkZWxldGUgbGlzdFtwYXduTmFtZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRMaXN0LCByZW1vdmVQYXduIH1cclxufSkoKTtcclxuXHJcbi8vIGRlcGVuZHMgb24gZG9tRWxlbWVudHMsIHBhd24sIGdhbWVGbG93XHJcbmV4cG9ydCBjb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHRpbGVzQXJyID0gQXJyYXlcclxuICAuZnJvbShkb21FbGVtZW50cy50aWxlc05vZGVzKTtcclxuXHJcbiAgY29uc3QgY2xlYXJJbmRpY2F0b3IgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGlsZXNBcnIpIHtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJQb3NzaWJsZU1vdmVzID0gKCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCB0aWxlcyBvZiB0aWxlc0Fycikge1xyXG4gICAgICB0aWxlcy5jbGFzc0xpc3QucmVtb3ZlKCdwb3NzaWJsZS1tb3ZlcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJQYXducyA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlc0Fycikge1xyXG4gICAgICB3aGlsZSAodGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZCh0aWxlLmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlQYXducyA9ICgpID0+IHtcclxuICAgIGxldCBwYXduTGlzdCA9IHBhd25zLmdldExpc3QoKTtcclxuICAgIGZvciAoY29uc3QgcGF3biBpbiBwYXducy5nZXRMaXN0KCkpIHtcclxuXHJcbiAgICAgIGxldCBwYXduVGlsZVBvc2l0aW9uID0gYFtkYXRhLXJvdz0nJHtwYXduTGlzdFtwYXduXVxyXG4gICAgICAgIC5nZXRSb3coKX0nXVtkYXRhLWNvbHVtbj0nJHtwYXduTGlzdFtwYXduXVxyXG4gICAgICAgIC5nZXRDb2x1bW4oKX0nXWA7XHJcblxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihwYXduVGlsZVBvc2l0aW9uKVxyXG4gICAgICAuYXBwZW5kQ2hpbGQocGF3bkxpc3RbcGF3bl0ucGF3bkltZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1dpbiA9ICgpID0+IHtcclxuICAgIGxldCBjb2xvdXIgPSBnYW1lRmxvdy5jaGVja0N1cnJlbnRDb2xvdXIoKTtcclxuICAgIGxldCBhbGxQb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICBcclxuICAgIGZvciAobGV0IHBhd24gaW4gcGF3bnMuZ2V0TGlzdCgpKSB7XHJcbiAgICAgIGxldCBjdXJyUGF3biA9IHBhd25zLmdldExpc3QoKVtwYXduXTtcclxuICAgICAgaWYgKGN1cnJQYXduLmdldENvbG9yKClbMF0gIT09IGNvbG91clswXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhd24pO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBjdXJyUGF3bi5jYWxjdWxhdGVMZWdhbE1vdmVzKCkpIHtcclxuICAgICAgICAgIGFsbFBvc3NpYmxlTW92ZXMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGFsbFBvc3NpYmxlTW92ZXMpO1xyXG4gICAgaWYgKGFsbFBvc3NpYmxlTW92ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGdhbWVGbG93LmNoYW5nZUdhbWVTdGF0ZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhnYW1lRmxvdy5jaGVja0dhbWVTdGF0ZSgpKTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmRPZlR1cm5Qcm9jZXNzZXMgPSAoKSA9PiB7XHJcbiAgICBjbGVhclBhd25zKCk7XHJcbiAgICBkaXNwbGF5UGF3bnMoKTtcclxuICAgIGdhbWVGbG93LmNoYW5nZVRhcmdldFBhd24oJycpO1xyXG4gICAgY2xlYXJJbmRpY2F0b3IoKTtcclxuICAgIGNsZWFyUG9zc2libGVNb3ZlcygpO1xyXG4gICAgY2hlY2tXaW4oKTtcclxuICAgIGdhbWVGbG93LmNoYW5nZUNvbG91cigpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzQXJyKSB7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBnYW1lRmxvd1xyXG4gICAgICAuY2hhbmdlVGFyZ2V0VGlsZShcclxuICAgICAgICB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSxcclxuICAgICAgICB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nKSk7XHJcbiAgICAgIFxyXG4gICAgICBjbGVhckluZGljYXRvcigpO1xyXG5cclxuICAgICAgbGV0IHByZXZpb3VzUGF3biA9IHBhd25zXHJcbiAgICAgICAgLmdldExpc3QoKVtnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCldO1xyXG5cclxuICAgICAgLy8gdGhpcyBjaGVja3MgaWYgdGhlIHRpbGUgaGFzIGEgcGF3bmltZyBjb250YWluZWRcclxuICAgICAgLy8gd2l0aGluIGl0XHJcbiAgICAgIGxldCBjbGlja2VkUGF3biA9IHRpbGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZUZsb3cuY2hlY2tHYW1lU3RhdGUoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghIWNsaWNrZWRQYXduKSB7XHJcbiAgICAgICAgICBpZiAoISFwcmV2aW91c1Bhd24pIHtcclxuICAgICAgICAgICAgY2xlYXJQb3NzaWJsZU1vdmVzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIGxldCBjbGlja2VkUGF3bk5hbWUgPSBjbGlja2VkUGF3bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IGN1cnJlbnRQYXduID0gcGF3bnNcclxuICAgICAgICAgICAgICAuZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgW2Ake2NsaWNrZWRQYXduTmFtZX1gXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZm9yIChjb25zdCBpIG9mIGN1cnJlbnRQYXduLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7aVswXX0nXVtkYXRhLWNvbHVtbj0nJHtpWzFdfSddYClcclxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZCgncG9zc2libGUtbW92ZXMnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIGlmIHdlIGNsaWNrZWQgb24gYSBwYXduLFxyXG4gICAgICAgICAgICogYW5kIHdlIGFsc28gcHJldmlvdXNseSBjbGlja2VkIG9uIGEgcGF3bixcclxuICAgICAgICAgICAqIGFuZCB0aGUgc2VsZWN0ZWQgdGlsZSBpcyBhIHZhbGlkIHRpbGUgXHJcbiAgICAgICAgICAgKiBmb3IgdGhlIHByZXZpb3VzbHkgY2xpY2tlZCBwYXduLFxyXG4gICAgICAgICAgICogYW5kIHRoZSB0d28gcGF3bnMgYXJlIG9wcG9zaXRlIGNvbG91cnMsXHJcbiAgICAgICAgICAgKiB0aGVuIHRoZSBwcmV2aW91c2x5IGNsaWNrZWQgcGF3blxyXG4gICAgICAgICAgICogZWF0cyBjbGlja2VkIHBhd25cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgaWYgKGdhbWVGbG93LmdldFRhcmdldFBhd24oKSAhPT0gJydcclxuICAgICAgICAgICYmXHJcbiAgICAgICAgICBwcmV2aW91c1Bhd25cclxuICAgICAgICAgICAgLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKVxyXG4gICAgICAgICAgICAuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgIGdhbWVGbG93LmdldFRhcmdldFRpbGUoKSBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogY2hlY2tzIGlmIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHR3byBwYXducyBhcmUgXHJcbiAgICAgICAgICAgKiB0aGUgc2FtZSBvciBub3QgXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgICYmIGdhbWVGbG93LmdldFRhcmdldFBhd24oKVswXSAhPT0gY2xpY2tlZFBhd25OYW1lWzBdXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBwYXducy5yZW1vdmVQYXduKGNsaWNrZWRQYXduTmFtZSk7XHJcbiAgICAgICAgICAgICAgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgLnBhd25Nb3ZlKGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVswXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClbMV19YCk7XHJcbiAgICAgICAgICAgICAgZW5kT2ZUdXJuUHJvY2Vzc2VzKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGdhbWVGbG93LmNoYW5nZVRhcmdldFBhd24oY2xpY2tlZFBhd24uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGlmIGNsaWNrZWQgdGlsZSBoYXMgbm8gcGF3biBpbiBpdCwgYW5kXHJcbiAgICAgICAgICogcHJldmlvdXNseSB3ZSBjbGlja2VkIG9uIGEgcGF3bixcclxuICAgICAgICAgKiBhbmQgaWYgdGhlIGNsaWNrZWQgdGlsZSBpcyBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAqIG9mIHZhbGlkIGxlZ2FsIG1vdmVzIGZvciB0aGUgcGF3bixcclxuICAgICAgICAgKiB0aGVuIGl0IG1vdmVzIHRoZSBwYXduIHRvIHRoZSBjbGlja2VkIHRpbGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgIGNsaWNrZWRQYXduID09PSBudWxsIFxyXG4gICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpICE9PSAnJ1xyXG4gICAgICAgICAgJiYgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKVxyXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgIGdhbWVGbG93LmdldFRhcmdldFRpbGUoKSBcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBwcmV2aW91c1Bhd24uY2FsY3VsYXRlTGVnYWxNb3ZlcygpKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7aVswXX0nXVtkYXRhLWNvbHVtbj0nJHtpWzFdfSddYClcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKCdwb3NzaWJsZS1tb3ZlcycpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgIC5wYXduTW92ZShgJHtnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClbMF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgIGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVsxXX1gKTtcclxuICAgICAgICAgIGVuZE9mVHVyblByb2Nlc3NlcygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRQYXduID0gKHJvdywgY29sdW1uKSA9PiB7XHJcbiAgICBsZXQgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2x1bW49JyR7Y29sdW1ufSddYCk7XHJcbiAgICByZXR1cm4gdGlsZS5xdWVyeVNlbGVjdG9yKCdpbWcnKSA/XHJcbiAgICB0aWxlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSA6ICdubyc7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7IGRpc3BsYXlQYXducyxcclxuICAgICAgICAgICB0aWxlc0FycixcclxuICAgICAgICAgICBjbGVhclBhd25zLFxyXG4gICAgICAgICAgIGdldFBhd24gfVxyXG59KSgpOyIsImV4cG9ydCBjb25zdCBkb21FbGVtZW50cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgdGlsZXNOb2RlcyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGlsZScpO1xyXG5cclxuICByZXR1cm4geyB0aWxlc05vZGVzIH07XHJcbn0pKCk7IiwiaW1wb3J0IHsgcGF3biwgcGF3bnMgfSBmcm9tICcuL2JvYXJkUGllY2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lRmxvdyA9ICgoKSA9PiB7XHJcbiAgbGV0IHRhcmdldFJvdyA9ICcnO1xyXG4gIGxldCB0YXJnZXRDb2x1bW4gPSAnJztcclxuICBsZXQgdGFyZ2V0UGF3biA9ICcnO1xyXG4gIGxldCBpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcclxuICBsZXQgY3VycmVudENvbG91ciA9ICd3aGl0ZSc7XHJcblxyXG4gIGNvbnN0IGdldFRhcmdldFRpbGUgPSAoKSA9PiB7O1xyXG4gICAgcmV0dXJuIGAke3RhcmdldFJvd30ke3RhcmdldENvbHVtbn1gO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBjaGFuZ2VUYXJnZXRUaWxlID0gKHJvdywgY29sdW1uKSA9PiB7XHJcbiAgICB0YXJnZXRSb3cgPSByb3c7XHJcbiAgICB0YXJnZXRDb2x1bW4gPSBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRUYXJnZXRQYXduID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhcmdldFBhd247XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VUYXJnZXRQYXduID0gKHBhd24pID0+IHtcclxuICAgIHRhcmdldFBhd24gPSBwYXduO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaXNHYW1lUnVubmluZztcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZUdhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc0dhbWVSdW5uaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIGlzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgaXNHYW1lUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUT0RPOiBhZGQgdHVybiBiYXNlZCBmdW5jdGlvbmFsaXR5XHJcbiAgICogICAgICAgaS5lLiwgbGV0IHdoaXRlIG1vdmUgZmlyc3QsXHJcbiAgICogICAgICAgdGhlbiBibGFjaywgZXRjLlxyXG4gICAqLyBcclxuXHJcbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgaXNHYW1lUnVubmluZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmRHYW1lID0gKCkgPT4ge1xyXG4gICAgaXNHYW1lUnVubmluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tDdXJyZW50Q29sb3VyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRDb2xvdXI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xvdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudENvbG91ciA9PT0gJ3doaXRlJykge1xyXG4gICAgICBjdXJyZW50Q29sb3VyID0gJ2JsYWNrJztcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudENvbG91ciA9PT0gJ2JsYWNrJykge1xyXG4gICAgICBjdXJyZW50Q29sb3VyID0gJ3doaXRlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldFRhcmdldFRpbGUsXHJcbiAgICAgICAgICAgY2hhbmdlVGFyZ2V0VGlsZSxcclxuICAgICAgICAgICBnZXRUYXJnZXRQYXduLFxyXG4gICAgICAgICAgIGNoYW5nZVRhcmdldFBhd24sXHJcbiAgICAgICAgICAgY2hlY2tHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgc3RhcnRHYW1lLFxyXG4gICAgICAgICAgIGVuZEdhbWUsXHJcbiAgICAgICAgICAgY2hhbmdlR2FtZVN0YXRlLFxyXG4gICAgICAgICAgIGNoZWNrQ3VycmVudENvbG91cixcclxuICAgICAgICAgICBjaGFuZ2VDb2xvdXIgfTtcclxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tICcuL21vZHVsZXMvYm9hcmRQaWVjZXMnO1xyXG5cclxuY29uc3QgcGxheWVyID0gKG5hbWUsIGNvbG9yKSA9PiB7XHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuYW1lO1xyXG4gIH1cclxuICBjb25zdCBnZXRDb2xvciA9ICgpID0+IHtcclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9XHJcbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0Q29sb3IgfTtcclxufTtcclxuXHJcbmdhbWVCb2FyZC5kaXNwbGF5UGF3bnMoKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==