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
    
    // check if other colour can move or not
    for (let pawn in pawns.getList()) {
      let currPawn = pawns.getList()[pawn];
      if (currPawn.getColor()[0] === colour[0]) {
        if (
        currPawn.getRow() === '3'
        && currPawn.getColor() === 'white'
        ) {
          _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeGameState();
          return 0;
        } else if (
          currPawn.getRow() === '1'
          && currPawn.getColor() === 'black'
        ) {
          _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeGameState();
          return 0;
        }
      } else if (currPawn.getColor()[0] !== colour[0]) {
          for (const i of currPawn.calculateLegalMoves()) {
            allPossibleMoves.push(i);
          }
      }
    }
    console.log(allPossibleMoves);
    if (allPossibleMoves.length === 0) {
      _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.changeGameState();
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
          
          // display pawn possible moves
          if (currentPawn.getColor()
          === _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkCurrentColour()) {
            for (const i of currentPawn.calculateLegalMoves()) {
              document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.add('possible-moves');
            }
          }
          
          // pawn eats enemy pawn
          if (_gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn() !== ''
          &&
          previousPawn
            .calculateLegalMoves()
            .includes(
            _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile()
            )
          && _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn()[0] !== clickedPawnName[0]
          && previousPawn.getColor() === _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkCurrentColour()
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
  
        // pawn moves to empty tile
        else if (
          clickedPawn === null 
          && _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetPawn() !== ''
          && previousPawn
              .calculateLegalMoves()
              .includes(
                _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getTargetTile() 
              )
          && previousPawn.getColor() === _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.checkCurrentColour()
          ) {
          clearPossibleMoves();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSx3RUFBc0I7QUFDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2JvYXJkUGllY2VzLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9nYW1lRmxvdy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJRdWlja3NhbmQvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogcXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlcixcXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aWxlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBoZWlnaHQ6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIHdpZHRoOiBtaW4oNTB2dywgNTB2aCk7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6bnRoLWNoaWxkKDJuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnBvc3NpYmxlLW1vdmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTQ0LCAxNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAyMTMsIDI0OCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNjg5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xcclxcbiAgc3JjOiB1cmwoUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGhlaWdodDogbWluKDUwdncsIDUwdmgpO1xcclxcbiAgd2lkdGg6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpudGgtY2hpbGQoMm4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUucG9zc2libGUtbW92ZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNDQsIDE2NSk7XFxyXFxufVxcclxcblxcclxcbi50aWxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDIxMywgMjQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC42ODkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBnYW1lRmxvdyB9IGZyb20gJy4vZ2FtZUZsb3cnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhd24gPSAobmFtZSwgY29sb3IsIHJvdywgY29sdW1uKSA9PiB7XHJcbiAgY29uc3QgcGF3bk5hbWUgPSBuYW1lO1xyXG4gIGNvbnN0IHBhd25Db2xvciA9IGNvbG9yO1xyXG4gIGxldCBwYXduUm93ID0gcm93O1xyXG4gIGxldCBwYXduQ29sdW1uID0gY29sdW1uO1xyXG5cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBhd25OYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q29sb3IgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcGF3bkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Um93ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHBhd25Sb3c7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDb2x1bW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcGF3bkNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgcGF3bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICBpZiAoY29sb3IgPT09ICdibGFjaycpIHtcclxuICAgIHBhd25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnc3ZnL2JwYXduLnN2ZycpO1xyXG4gIH0gZWxzZSBpZiAoY29sb3IgPT09ICd3aGl0ZScpIHtcclxuICAgIHBhd25JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnc3ZnL3Bhd24uc3ZnJyk7XHJcbiAgfVxyXG5cclxuICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzUwJyk7XHJcbiAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwJyk7XHJcbiAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScsIG5hbWUpO1xyXG5cclxuICBjb25zdCBwYXduTW92ZSA9IChuZXdSb3csIG5ld0NvbHVtbikgPT4ge1xyXG4gICAgcGF3blJvdyA9IG5ld1JvdztcclxuICAgIHBhd25Db2x1bW4gPSBuZXdDb2x1bW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIHRpbGVzIHRoYXQgXHJcbiAgICogcGF3biBjYW4gbGVnYWxseSBtb3ZlIHRvXHJcbiAgICovIFxyXG4gIGNvbnN0IGNhbGN1bGF0ZUxlZ2FsTW92ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGF3blJvd0ludCA9IHBhcnNlSW50KHBhd25Sb3cpO1xyXG4gICAgbGV0IGZvcndhcmRSb3cgPSAnJztcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGdldENvbG9yKCkgPT09ICdibGFjaycgJiYgcGF3blJvdyA9PT0gJzEnXHJcbiAgICAgIHx8IGdldENvbG9yKCkgPT09ICd3aGl0ZScgJiYgcGF3blJvdyA9PT0gJzMnKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0Q29sb3IoKSA9PT0gJ2JsYWNrJyAmIHBhd25Sb3cgIT09ICcxJykge1xyXG4gICAgICBmb3J3YXJkUm93ID0gcGF3blJvd0ludCAtIDE7XHJcbiAgICB9IGVsc2UgaWYgKGdldENvbG9yKCkgPT09ICd3aGl0ZScgJiBwYXduUm93ICE9PSAnMycpIHtcclxuICAgICAgZm9yd2FyZFJvdyA9IHBhd25Sb3dJbnQgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUZvcndhcmRNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZm9yd2FyZENvbHVtbiA9IFtdO1xyXG4gICAgICBpZiAoZ2FtZUJvYXJkLmdldFBhd24oZm9yd2FyZFJvdywgZ2V0Q29sdW1uKCksIGdldENvbG9yKCkpXHJcbiAgICAgICAgPT09ICdubycpIHtcclxuICAgICAgICAgIGZvcndhcmRDb2x1bW4ucHVzaChgJHtmb3J3YXJkUm93LnRvU3RyaW5nKCl9JHtwYXduQ29sdW1ufWApXHJcbiAgICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9yd2FyZENvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYWxjdWxhdGVEaWFnb25hbE1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBkaWFnb25hbENvbHVtbiA9IFtdO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcGF3bkNvbHVtbiA9PT0gJ2EnIHx8IHBhd25Db2x1bW4gPT09ICdjJ1xyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgZ2FtZUJvYXJkLmdldFBhd24oZm9yd2FyZFJvdywgJ2InLCBnZXRDb2xvcigpKVxyXG4gICAgICAgICE9PSAnbm8nXHJcbiAgICAgICAgJiYgZ2FtZUJvYXJkLmdldFBhd24oZm9yd2FyZFJvdywgJ2InLCBnZXRDb2xvcigpKVswXVxyXG4gICAgICAgICE9PSBnZXRDb2xvcigpWzBdKSB7XHJcbiAgICAgICAgICBkaWFnb25hbENvbHVtbiA9IFsnYiddO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChwYXduQ29sdW1uID09PSAnYicpIHtcclxuICAgICAgICBsZXQgdmFsaWRDb2x1bW4gPSBbJ2EnLCAnYyddO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHZhbGlkQ29sdW1uKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICBnYW1lQm9hcmQuZ2V0UGF3bihmb3J3YXJkUm93LCBjb2wsIGdldENvbG9yKCkpXHJcbiAgICAgICAgICAhPT0gJ25vJ1xyXG4gICAgICAgICAgJiYgZ2FtZUJvYXJkLmdldFBhd24oZm9yd2FyZFJvdywgY29sLCBnZXRDb2xvcigpKVswXVxyXG4gICAgICAgICAgIT09IGdldENvbG9yKClbMF0pIHtcclxuICAgICAgICAgICAgZGlhZ29uYWxDb2x1bW4ucHVzaChjb2wpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG1vdmVhYmxlVGlsZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpIG9mIGRpYWdvbmFsQ29sdW1uKSB7XHJcbiAgICAgICAgbW92ZWFibGVUaWxlLnB1c2goYCR7Zm9yd2FyZFJvdy50b1N0cmluZygpfSR7aX1gKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbW92ZWFibGVUaWxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FsY3VsYXRlRm9yd2FyZE1vdmUoKVxyXG4gICAgICAgICAgICAuY29uY2F0KGNhbGN1bGF0ZURpYWdvbmFsTW92ZSgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldE5hbWUsXHJcbiAgICAgICAgICAgZ2V0Q29sb3IsXHJcbiAgICAgICAgICAgZ2V0Um93LFxyXG4gICAgICAgICAgIGdldENvbHVtbixcclxuICAgICAgICAgICBwYXduSW1nLFxyXG4gICAgICAgICAgIHBhd25Nb3ZlLFxyXG4gICAgICAgICAgIGNhbGN1bGF0ZUxlZ2FsTW92ZXMgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhd25zID0gKCgpID0+IHtcclxuICBjb25zdCBhYmMgPSBbJ2EnLCAnYicsICdjJ107XHJcbiAgY29uc3QgbGlzdCA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBsaXN0W2BicGF3biR7aX1gXSA9IHBhd24oYGJwYXduJHtpfWAsICdibGFjaycsXHJcbiAgICAnMycsIGFiY1tpIC0gMV0pO1xyXG4gICAgbGlzdFtgd3Bhd24ke2l9YF0gPSBwYXduKGB3cGF3biR7aX1gLCAnd2hpdGUnLFxyXG4gICAgJzEnLCBhYmNbaSAtIDFdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGlzdDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZVBhd24gPSAocGF3bk5hbWUpID0+IHtcclxuICAgIGRlbGV0ZSBsaXN0W3Bhd25OYW1lXTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGdldExpc3QsIHJlbW92ZVBhd24gfVxyXG59KSgpO1xyXG5cclxuLy8gZGVwZW5kcyBvbiBkb21FbGVtZW50cywgcGF3biwgZ2FtZUZsb3dcclxuZXhwb3J0IGNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgdGlsZXNBcnIgPSBBcnJheVxyXG4gIC5mcm9tKGRvbUVsZW1lbnRzLnRpbGVzTm9kZXMpO1xyXG5cclxuICBjb25zdCBjbGVhckluZGljYXRvciA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlc0Fycikge1xyXG4gICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhclBvc3NpYmxlTW92ZXMgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHRpbGVzIG9mIHRpbGVzQXJyKSB7XHJcbiAgICAgIHRpbGVzLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3NpYmxlLW1vdmVzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhclBhd25zID0gKCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzQXJyKSB7XHJcbiAgICAgIHdoaWxlICh0aWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICB0aWxlLnJlbW92ZUNoaWxkKHRpbGUubGFzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheVBhd25zID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhd25MaXN0ID0gcGF3bnMuZ2V0TGlzdCgpO1xyXG4gICAgZm9yIChjb25zdCBwYXduIGluIHBhd25zLmdldExpc3QoKSkge1xyXG5cclxuICAgICAgbGV0IHBhd25UaWxlUG9zaXRpb24gPSBgW2RhdGEtcm93PScke3Bhd25MaXN0W3Bhd25dXHJcbiAgICAgICAgLmdldFJvdygpfSddW2RhdGEtY29sdW1uPScke3Bhd25MaXN0W3Bhd25dXHJcbiAgICAgICAgLmdldENvbHVtbigpfSddYDtcclxuXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHBhd25UaWxlUG9zaXRpb24pXHJcbiAgICAgIC5hcHBlbmRDaGlsZChwYXduTGlzdFtwYXduXS5wYXduSW1nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrV2luID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbG91ciA9IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpO1xyXG4gICAgbGV0IGFsbFBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgIFxyXG4gICAgLy8gY2hlY2sgaWYgb3RoZXIgY29sb3VyIGNhbiBtb3ZlIG9yIG5vdFxyXG4gICAgZm9yIChsZXQgcGF3biBpbiBwYXducy5nZXRMaXN0KCkpIHtcclxuICAgICAgbGV0IGN1cnJQYXduID0gcGF3bnMuZ2V0TGlzdCgpW3Bhd25dO1xyXG4gICAgICBpZiAoY3VyclBhd24uZ2V0Q29sb3IoKVswXSA9PT0gY29sb3VyWzBdKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgIGN1cnJQYXduLmdldFJvdygpID09PSAnMydcclxuICAgICAgICAmJiBjdXJyUGF3bi5nZXRDb2xvcigpID09PSAnd2hpdGUnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VHYW1lU3RhdGUoKTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBjdXJyUGF3bi5nZXRSb3coKSA9PT0gJzEnXHJcbiAgICAgICAgICAmJiBjdXJyUGF3bi5nZXRDb2xvcigpID09PSAnYmxhY2snXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VHYW1lU3RhdGUoKTtcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChjdXJyUGF3bi5nZXRDb2xvcigpWzBdICE9PSBjb2xvdXJbMF0pIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjdXJyUGF3bi5jYWxjdWxhdGVMZWdhbE1vdmVzKCkpIHtcclxuICAgICAgICAgICAgYWxsUG9zc2libGVNb3Zlcy5wdXNoKGkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhhbGxQb3NzaWJsZU1vdmVzKTtcclxuICAgIGlmIChhbGxQb3NzaWJsZU1vdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBnYW1lRmxvdy5jaGFuZ2VHYW1lU3RhdGUoKTtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmRPZlR1cm5Qcm9jZXNzZXMgPSAoKSA9PiB7XHJcbiAgICBjbGVhclBhd25zKCk7XHJcbiAgICBkaXNwbGF5UGF3bnMoKTtcclxuICAgIGdhbWVGbG93LmNoYW5nZVRhcmdldFBhd24oJycpO1xyXG4gICAgY2xlYXJJbmRpY2F0b3IoKTtcclxuICAgIGNsZWFyUG9zc2libGVNb3ZlcygpO1xyXG4gICAgY2hlY2tXaW4oKTtcclxuICAgIGdhbWVGbG93LmNoYW5nZUNvbG91cigpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzQXJyKSB7XHJcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBnYW1lRmxvd1xyXG4gICAgICAuY2hhbmdlVGFyZ2V0VGlsZShcclxuICAgICAgICB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKSxcclxuICAgICAgICB0aWxlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nKSk7XHJcbiAgICAgIFxyXG4gICAgICBjbGVhckluZGljYXRvcigpO1xyXG5cclxuICAgICAgbGV0IHByZXZpb3VzUGF3biA9IHBhd25zXHJcbiAgICAgICAgLmdldExpc3QoKVtnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCldO1xyXG5cclxuICAgICAgLy8gdGhpcyBjaGVja3MgaWYgdGhlIHRpbGUgaGFzIGEgcGF3bmltZyBjb250YWluZWRcclxuICAgICAgLy8gd2l0aGluIGl0XHJcbiAgICAgIGxldCBjbGlja2VkUGF3biA9IHRpbGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZUZsb3cuY2hlY2tHYW1lU3RhdGUoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghIWNsaWNrZWRQYXduKSB7XHJcbiAgICAgICAgICBpZiAoISFwcmV2aW91c1Bhd24pIHtcclxuICAgICAgICAgICAgY2xlYXJQb3NzaWJsZU1vdmVzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgIGxldCBjbGlja2VkUGF3bk5hbWUgPSBjbGlja2VkUGF3bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gIFxyXG4gICAgICAgICAgbGV0IGN1cnJlbnRQYXduID0gcGF3bnNcclxuICAgICAgICAgICAgICAuZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgW2Ake2NsaWNrZWRQYXduTmFtZX1gXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gZGlzcGxheSBwYXduIHBvc3NpYmxlIG1vdmVzXHJcbiAgICAgICAgICBpZiAoY3VycmVudFBhd24uZ2V0Q29sb3IoKVxyXG4gICAgICAgICAgPT09IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjdXJyZW50UGF3bi5jYWxjdWxhdGVMZWdhbE1vdmVzKCkpIHtcclxuICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtpWzBdfSddW2RhdGEtY29sdW1uPScke2lbMV19J11gKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3Bvc3NpYmxlLW1vdmVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gcGF3biBlYXRzIGVuZW15IHBhd25cclxuICAgICAgICAgIGlmIChnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCkgIT09ICcnXHJcbiAgICAgICAgICAmJlxyXG4gICAgICAgICAgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgIC5jYWxjdWxhdGVMZWdhbE1vdmVzKClcclxuICAgICAgICAgICAgLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICBnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpWzBdICE9PSBjbGlja2VkUGF3bk5hbWVbMF1cclxuICAgICAgICAgICYmIHByZXZpb3VzUGF3bi5nZXRDb2xvcigpID09PSBnYW1lRmxvdy5jaGVja0N1cnJlbnRDb2xvdXIoKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcGF3bnMucmVtb3ZlUGF3bihjbGlja2VkUGF3bk5hbWUpO1xyXG4gICAgICAgICAgICAgIHByZXZpb3VzUGF3blxyXG4gICAgICAgICAgICAgIC5wYXduTW92ZShgJHtnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClbMF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Z2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpWzFdfWApO1xyXG4gICAgICAgICAgICAgIGVuZE9mVHVyblByb2Nlc3NlcygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VUYXJnZXRQYXduKGNsaWNrZWRQYXduLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBwYXduIG1vdmVzIHRvIGVtcHR5IHRpbGVcclxuICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgIGNsaWNrZWRQYXduID09PSBudWxsIFxyXG4gICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpICE9PSAnJ1xyXG4gICAgICAgICAgJiYgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKVxyXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgIGdhbWVGbG93LmdldFRhcmdldFRpbGUoKSBcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAmJiBwcmV2aW91c1Bhd24uZ2V0Q29sb3IoKSA9PT0gZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgY2xlYXJQb3NzaWJsZU1vdmVzKCk7XHJcbiAgICAgICAgICBwcmV2aW91c1Bhd25cclxuICAgICAgICAgICAgICAgLnBhd25Nb3ZlKGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVswXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYCR7Z2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpWzFdfWApO1xyXG4gICAgICAgICAgZW5kT2ZUdXJuUHJvY2Vzc2VzKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFBhd24gPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgIGxldCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PScke3Jvd30nXVtkYXRhLWNvbHVtbj0nJHtjb2x1bW59J11gKTtcclxuICAgIHJldHVybiB0aWxlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpID9cclxuICAgIHRpbGVcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpIDogJ25vJztcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHsgZGlzcGxheVBhd25zLFxyXG4gICAgICAgICAgIHRpbGVzQXJyLFxyXG4gICAgICAgICAgIGNsZWFyUGF3bnMsXHJcbiAgICAgICAgICAgZ2V0UGF3biB9XHJcbn0pKCk7IiwiZXhwb3J0IGNvbnN0IGRvbUVsZW1lbnRzID0gKCgpID0+IHtcclxuICBjb25zdCB0aWxlc05vZGVzID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50aWxlJyk7XHJcblxyXG4gIHJldHVybiB7IHRpbGVzTm9kZXMgfTtcclxufSkoKTsiLCJpbXBvcnQgeyBwYXduLCBwYXducyB9IGZyb20gJy4vYm9hcmRQaWVjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWVGbG93ID0gKCgpID0+IHtcclxuICBsZXQgdGFyZ2V0Um93ID0gJyc7XHJcbiAgbGV0IHRhcmdldENvbHVtbiA9ICcnO1xyXG4gIGxldCB0YXJnZXRQYXduID0gJyc7XHJcbiAgbGV0IGlzR2FtZVJ1bm5pbmcgPSB0cnVlO1xyXG4gIGxldCBjdXJyZW50Q29sb3VyID0gJ3doaXRlJztcclxuXHJcbiAgY29uc3QgZ2V0VGFyZ2V0VGlsZSA9ICgpID0+IHs7XHJcbiAgICByZXR1cm4gYCR7dGFyZ2V0Um93fSR7dGFyZ2V0Q29sdW1ufWA7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNoYW5nZVRhcmdldFRpbGUgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgIHRhcmdldFJvdyA9IHJvdztcclxuICAgIHRhcmdldENvbHVtbiA9IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRhcmdldFBhd24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGFyZ2V0UGF3bjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRhcmdldFBhd24gPSAocGF3bikgPT4ge1xyXG4gICAgdGFyZ2V0UGF3biA9IHBhd247XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0dhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBpc0dhbWVSdW5uaW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlR2FtZVN0YXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzR2FtZVJ1bm5pbmcgPT09IHRydWUpIHtcclxuICAgICAgaXNHYW1lUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChpc0dhbWVSdW5uaW5nID09PSBmYWxzZSkge1xyXG4gICAgICBpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRPRE86IGFkZCB0dXJuIGJhc2VkIGZ1bmN0aW9uYWxpdHlcclxuICAgKiAgICAgICBpLmUuLCBsZXQgd2hpdGUgbW92ZSBmaXJzdCxcclxuICAgKiAgICAgICB0aGVuIGJsYWNrLCBldGMuXHJcbiAgICovIFxyXG5cclxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XHJcbiAgICBpc0dhbWVSdW5uaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0N1cnJlbnRDb2xvdXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY3VycmVudENvbG91cjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbG91ciA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50Q29sb3VyID09PSAnd2hpdGUnKSB7XHJcbiAgICAgIGN1cnJlbnRDb2xvdXIgPSAnYmxhY2snO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50Q29sb3VyID09PSAnYmxhY2snKSB7XHJcbiAgICAgIGN1cnJlbnRDb2xvdXIgPSAnd2hpdGUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0VGFyZ2V0VGlsZSxcclxuICAgICAgICAgICBjaGFuZ2VUYXJnZXRUaWxlLFxyXG4gICAgICAgICAgIGdldFRhcmdldFBhd24sXHJcbiAgICAgICAgICAgY2hhbmdlVGFyZ2V0UGF3bixcclxuICAgICAgICAgICBjaGVja0dhbWVTdGF0ZSxcclxuICAgICAgICAgICBzdGFydEdhbWUsXHJcbiAgICAgICAgICAgZW5kR2FtZSxcclxuICAgICAgICAgICBjaGFuZ2VHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgY2hlY2tDdXJyZW50Q29sb3VyLFxyXG4gICAgICAgICAgIGNoYW5nZUNvbG91ciB9O1xyXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gJy4vbW9kdWxlcy9ib2FyZFBpZWNlcyc7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSAobmFtZSwgY29sb3IpID0+IHtcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfVxyXG4gIGNvbnN0IGdldENvbG9yID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH1cclxuICByZXR1cm4geyBnZXROYW1lLCBnZXRDb2xvciB9O1xyXG59O1xyXG5cclxuZ2FtZUJvYXJkLmRpc3BsYXlQYXducygpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9