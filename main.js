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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: quicksand;\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nhtml, body {\r\n  font-family: quicksand, sans-serif;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader,\r\n.main-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  background-color: white;\r\n  flex: 1;\r\n}\r\n\r\n.main-container {\r\n  flex: 10;\r\n  background-color: grey;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#black, #white {\r\n  font-size: 1rem;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n#white {\r\n  color: white;\r\n}\r\n\r\n#opponent {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.info-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 1rem;\r\n  background-color: rgb(107, 107, 107);\r\n  border-radius: 20px;\r\n  padding: 4px;\r\n}\r\n\r\n.tiles-container {\r\n  display: grid;\r\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n  height: min(50vw, 50vh);\r\n  width: min(50vw, 50vh);\r\n  gap: 0.3rem;\r\n  margin-top: 20px;\r\n  background-color: rgb(107, 107, 107);\r\n  border-radius: 20px;;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(212, 212, 212);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.tile:nth-child(2n) {\r\n  background-color: rgb(54, 54, 54);\r\n}\r\n\r\n.tile.possible-moves {\r\n  background-color: rgb(42, 144, 165);\r\n}\r\n\r\n.tile:hover {\r\n  background-color: rgb(125, 213, 248);\r\n}\r\n\r\n.tile.selected {\r\n  background-color: rgba(0, 255, 255, 0.689);\r\n}\r\n\r\n#buttons {\r\n  background-color: grey;\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 24px;\r\n}\r\n\r\n#buttons > img {\r\n  border-radius: 100%;\r\n}\r\n\r\n#buttons > img:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  flex: 0.5;\r\n}\r\n\r\nfooter,\r\n.links {\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.links {\r\n  background-color: rgb(54, 54, 54);\r\n  display: flex;\r\n  justify-content: end;\r\n  height: 100%;\r\n}\r\n\r\n.links > div,\r\na {\r\n  margin-right: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na:link {\r\n  color: white;\r\n}\r\n\r\na:visited {\r\n  color: rgba(223, 223, 223, 0.74);\r\n}\r\n\r\na:hover, a:active {\r\n  color: rgba(24, 201, 255, 0.863);\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n@media (min-width:801px) {\r\n  .animation {\r\n    animation: fadeIn 1s;\r\n  }\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAAmD;AACrD;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,SAAS;EACT,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,QAAQ;EACR,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,uBAAuB;EACvB,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,oBAAoB;EACpB,YAAY;AACd;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE;IACE,oBAAoB;EACtB;AACF","sourcesContent":["@font-face {\r\n  font-family: quicksand;\r\n  src: url(Quicksand/Quicksand-VariableFont_wght.ttf);\r\n}\r\n\r\nhtml, body {\r\n  font-family: quicksand, sans-serif;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader,\r\n.main-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nheader {\r\n  background-color: white;\r\n  flex: 1;\r\n}\r\n\r\n.main-container {\r\n  flex: 10;\r\n  background-color: grey;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#black, #white {\r\n  font-size: 1rem;\r\n  padding: 48px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n}\r\n\r\n#white {\r\n  color: white;\r\n}\r\n\r\n#opponent {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.info-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 1rem;\r\n  background-color: rgb(107, 107, 107);\r\n  border-radius: 20px;\r\n  padding: 4px;\r\n}\r\n\r\n.tiles-container {\r\n  display: grid;\r\n  grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n  height: min(50vw, 50vh);\r\n  width: min(50vw, 50vh);\r\n  gap: 0.3rem;\r\n  margin-top: 20px;\r\n  background-color: rgb(107, 107, 107);\r\n  border-radius: 20px;;\r\n  padding: 0.3rem;\r\n}\r\n\r\n.tile {\r\n  background-color: rgb(212, 212, 212);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.tile:nth-child(2n) {\r\n  background-color: rgb(54, 54, 54);\r\n}\r\n\r\n.tile.possible-moves {\r\n  background-color: rgb(42, 144, 165);\r\n}\r\n\r\n.tile:hover {\r\n  background-color: rgb(125, 213, 248);\r\n}\r\n\r\n.tile.selected {\r\n  background-color: rgba(0, 255, 255, 0.689);\r\n}\r\n\r\n#buttons {\r\n  background-color: grey;\r\n  flex: 0.5;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 24px;\r\n}\r\n\r\n#buttons > img {\r\n  border-radius: 100%;\r\n}\r\n\r\n#buttons > img:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  flex: 0.5;\r\n}\r\n\r\nfooter,\r\n.links {\r\n  color: white;\r\n  width: 100%;\r\n}\r\n\r\n.links {\r\n  background-color: rgb(54, 54, 54);\r\n  display: flex;\r\n  justify-content: end;\r\n  height: 100%;\r\n}\r\n\r\n.links > div,\r\na {\r\n  margin-right: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na:link {\r\n  color: white;\r\n}\r\n\r\na:visited {\r\n  color: rgba(223, 223, 223, 0.74);\r\n}\r\n\r\na:hover, a:active {\r\n  color: rgba(24, 201, 255, 0.863);\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n@media (min-width:801px) {\r\n  .animation {\r\n    animation: fadeIn 1s;\r\n  }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");
/* harmony import */ var _pawns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pawns */ "./src/modules/pawns.js");
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameFlow */ "./src/modules/gameFlow.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/modules/display.js");
/* harmony import */ var _computerMoves__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./computerMoves */ "./src/modules/computerMoves.js");






// depends on domElements, pawn, gameFlow
const gameBoard = (() => {
  const tilesArr = Array
  .from(_domElements__WEBPACK_IMPORTED_MODULE_0__.tilesNodes);

  const clearIndicator = () => {
    tilesArr.forEach((tile) => {
      tile.classList.remove('selected');
    })
  }

  const clearPossibleMoves = () => {
    tilesArr.forEach((tiles) => {
      tiles.classList.remove('possible-moves');
    })
  }

  const clearPawns = () => {
    tilesArr.forEach((tile) => {
      while (tile.firstChild) {
        tile.removeChild(tile.lastChild);
      }
    })
  }

  const displayPawns = () => {
    const pawnList = _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList();
    for (const pawn in _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList()) {

      const pawnTilePosition = `[data-row='${pawnList[pawn]
        .getRow()}'][data-column='${pawnList[pawn]
        .getColumn()}']`;

      document
      .querySelector(pawnTilePosition)
      .appendChild(pawnList[pawn].pawnImg);
    }
  }

  const checkWin = () => {
    const colour = _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour();
    const allPossibleMoves = [];
    
    for (const pawn in _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList()) {
      const currPawn = _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList()[pawn];

      /**
       * logic for checking if pawn
       * is on other side of the board
       */
      if (currPawn.getColor()[0] === colour[0]) {
        if (
        currPawn.getRow() === '3'
        && currPawn.getColor() === 'white'
        ) {
          _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeGameState();
          return 1;
        } else if (
          currPawn.getRow() === '1'
          && currPawn.getColor() === 'black'
        ) {
          _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeGameState();
          return 1;
        }

      /** logic for checking
       * if other color can move
       */
      } else if (currPawn.getColor()[0] !== colour[0]) {
          currPawn.calculateLegalMoves()
            .forEach(i => allPossibleMoves.push(i))
      }
    }

    if (allPossibleMoves.length === 0) {
      _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeGameState();
      return 1;
    }
  }

  const endOfTurnProcesses = () => {
    clearPawns();
    displayPawns();
    _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeTargetPawn('');
    clearIndicator();
    clearPossibleMoves();
    if (checkWin()) {
      (0,_display__WEBPACK_IMPORTED_MODULE_3__.changeInfo)(`${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()} has won!`);
      _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.updateScore(_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour());
      (0,_display__WEBPACK_IMPORTED_MODULE_3__.changeScore)(_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour());
    } else {
      _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeColour();
      (0,_display__WEBPACK_IMPORTED_MODULE_3__.changeInfo)(`${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()} to move`);
    }
  }

  for (const tile of tilesArr) {
    tile.addEventListener('click', () => {
      _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeTargetTile(
        tile.getAttribute('data-row'),
        tile.getAttribute('data-column'));
      
      clearIndicator();

      const previousPawn = _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList()[_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetPawn()];
      const clickedPawn = tile.querySelector('img');
      
      if (_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkGameState()) {
        if (clickedPawn) {
          if (previousPawn) {
            clearPossibleMoves();
          }
          
          tile.classList.add('selected');
          const clickedPawnName = clickedPawn.getAttribute('data-name');
  
          const currentPawn = _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.getList()[`${clickedPawnName}`];
          
          // display pawn possible moves
          if (currentPawn.getColor()
          === _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()) {
            currentPawn.calculateLegalMoves()
              .forEach(i => {
                document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.add('possible-moves');
              })
          }
          
          // pawn eats enemy pawn
          if (_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetPawn() !== ''
          &&
          previousPawn
            .calculateLegalMoves()
            .includes(
            _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile()
            )
          && _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetPawn()[0] !== clickedPawnName[0]
          && previousPawn.getColor() === _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()
          ) {
              _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.removePawn(clickedPawnName);
              previousPawn
              .pawnMove(`${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile()[0]}`,
                        `${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile()[1]}`);
              endOfTurnProcesses();
          } else {
              _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.changeTargetPawn(clickedPawn.getAttribute('data-name'));
          }
        }
  
        // pawn moves to empty tile
        else if (
          clickedPawn === null 
          && _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetPawn() !== ''
          && previousPawn
              .calculateLegalMoves()
              .includes(
                _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile() 
              )
          && previousPawn.getColor() === _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()
          ) {
          clearPossibleMoves();
          previousPawn
               .pawnMove(`${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile()[0]}`,
                      `${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetTile()[1]}`);
          endOfTurnProcesses();
         }
      }

      // for computer movements
      if (_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour() === 'black' 
      && _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.getTargetPawn()[0] !== 'b'
      && _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkGameState()) {
        (0,_computerMoves__WEBPACK_IMPORTED_MODULE_4__.basicComputerMove)();
      }
    })
  }

  const boardReset = () => {
    _gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.resetFlow();
    _pawns__WEBPACK_IMPORTED_MODULE_1__.pawns.resetPawns();
    clearPawns();
    displayPawns();
    (0,_display__WEBPACK_IMPORTED_MODULE_3__.changeInfo)(`${_gameFlow__WEBPACK_IMPORTED_MODULE_2__.gameFlow.checkCurrentColour()} to move`);
    [...document.querySelectorAll('.tile > img')]
  .forEach((el) => {
    el.classList.add('animation');
    setTimeout(() => {
      el.classList.remove('animation');
    }, 1000);
  })
  }

  _domElements__WEBPACK_IMPORTED_MODULE_0__.resetButton.addEventListener('click', boardReset);
  
  return { displayPawns,
           tilesArr,
           clearPawns,
           boardReset }
})();

/***/ }),

/***/ "./src/modules/computerMoves.js":
/*!**************************************!*\
  !*** ./src/modules/computerMoves.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basicComputerMove": () => (/* binding */ basicComputerMove),
/* harmony export */   "getMoveablePawns": () => (/* binding */ getMoveablePawns),
/* harmony export */   "getRandomIndex": () => (/* binding */ getRandomIndex)
/* harmony export */ });
/* harmony import */ var _pawns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pawns */ "./src/modules/pawns.js");


const compColor = 'b';

const filterColoredPawns = (pawn) => {
  if (pawn.getAttribute('data-name')[0] === compColor) return true;
  return false;
}

const getMoveablePawns = () => [...document.querySelectorAll('.tile > img')].filter(filterColoredPawns);


const getRandomIndex = () => Math.floor(Math.random() * getMoveablePawns.length);


const basicComputerMove = () => {
  let computerMoveableTiles = [];
  let computerPawn;
  let index = Math.floor(Math.random() * getMoveablePawns().length);

  while (computerMoveableTiles.length === 0) {
    computerMoveableTiles = [];
    computerPawn = getMoveablePawns()[index]
    .getAttribute('data-name');
    _pawns__WEBPACK_IMPORTED_MODULE_0__.pawns.getList()[computerPawn]
      .calculateLegalMoves()
      .forEach((i) => {
        computerMoveableTiles
        .push(
        document
          .querySelector(
            `[data-row='${i[0]}'][data-column='${i[1]}']`
          )
        )
    });

    index = (index + 1) % getMoveablePawns().length;
  }

  const computerPawnImg = document.querySelector(`[data-name='${computerPawn}']`);

        setTimeout(() => {
          computerPawnImg.click();
          const moveIndex = Math.floor(Math.random() * computerMoveableTiles.length);
          computerMoveableTiles[moveIndex].click();
        }
        , 1000)
}
        




/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeInfo": () => (/* binding */ changeInfo),
/* harmony export */   "changeScore": () => (/* binding */ changeScore)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/modules/domElements.js");
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameFlow */ "./src/modules/gameFlow.js");



const changeInfo = (text) => {
  _domElements__WEBPACK_IMPORTED_MODULE_0__.infoDisplay.textContent = text;
}

const changeScore = (color) => {
  if (color === 'black') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.blackScore.textContent = 
    _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getBlackScore();
  } else if (color === 'white') {
    _domElements__WEBPACK_IMPORTED_MODULE_0__.whiteScore.textContent = 
    _gameFlow__WEBPACK_IMPORTED_MODULE_1__.gameFlow.getWhiteScore();
  }
}



/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blackScore": () => (/* binding */ blackScore),
/* harmony export */   "infoDisplay": () => (/* binding */ infoDisplay),
/* harmony export */   "resetButton": () => (/* binding */ resetButton),
/* harmony export */   "tilesNodes": () => (/* binding */ tilesNodes),
/* harmony export */   "whiteScore": () => (/* binding */ whiteScore)
/* harmony export */ });
const infoDisplay = document
            .querySelector('.info-display');

const tilesNodes = document
            .querySelectorAll('div.tile');

const resetButton = document
            .querySelector('#reset-button');

const blackScore = document
            .querySelector('#black-score');

const whiteScore = document
            .querySelector('#white-score');

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
const gameFlow = (() => {
  let targetRow = '';
  let targetColumn = '';
  let targetPawn = '';
  let isGameRunning = true;
  let currentColour = 'white';
  let currBlackScore = 0;
  let currWhiteScore = 0;

  const getTargetTile = () => `${targetRow}${targetColumn}`;
  
  const changeTargetTile = (row, column) => {
    targetRow = row;
    targetColumn = column;
  }

  const getTargetPawn = () => targetPawn;

  const getPawnImg = (row, column) => {
    const tile = document.querySelector(`[data-row='${row}'][data-column='${column}']`);
    return tile.querySelector('img') ?
    tile
      .querySelector('img')
      .getAttribute('data-name') : 'no';
  }

  const changeTargetPawn = (pawn) => {
    targetPawn = pawn;
    return 0;
  }

  const checkGameState = () => isGameRunning;

  const changeGameState = () => {
    if (isGameRunning === true) {
      isGameRunning = false;
    } else if (isGameRunning === false) {
      isGameRunning = true;
    }
  }

  const checkCurrentColour = () => currentColour;

  const changeColour = () => {
    if (currentColour === 'white') {
      currentColour = 'black';
    } else if (currentColour === 'black') {
      currentColour = 'white';
    }
  }

  const resetFlow = () => {
    targetRow = '';
    targetColumn = '';
    targetPawn = '';
    isGameRunning = true;
    currentColour = 'white';
  }

  const updateScore = (colour) => {
    if (colour === 'black') {
      currBlackScore++;
    } else if (colour === 'white') {
      currWhiteScore++;
    }
  }

  const getBlackScore = () => currBlackScore;

  const getWhiteScore = () => currWhiteScore;

  return { getTargetTile,
           changeTargetTile,
           getTargetPawn,
           getPawnImg,
           changeTargetPawn,
           checkGameState,
           changeGameState,
           checkCurrentColour,
           changeColour,
           resetFlow,
           updateScore,
           getBlackScore,
           getWhiteScore};
})();

/***/ }),

/***/ "./src/modules/pawns.js":
/*!******************************!*\
  !*** ./src/modules/pawns.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pawn": () => (/* binding */ pawn),
/* harmony export */   "pawns": () => (/* binding */ pawns)
/* harmony export */ });
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlow */ "./src/modules/gameFlow.js");


const pawn = (name, color, row, column) => {
  const pawnName = name;
  const pawnColor = color;
  const pawnImg = document.createElement('img');
  let pawnRow = row;
  let pawnColumn = column;

  const getName = () => pawnName;
  const getColor = () => pawnColor;
  const getRow = () => pawnRow;
  const getColumn = () => pawnColumn;

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
    pawnImg.classList.add('animation');
    setTimeout(() => {
      pawnImg.classList.remove('animation');
    }, 1000);
  };

  const calculateLegalMoves = () => {
    const pawnRowInt = parseInt(pawnRow, 10);
    let forwardRow = '';

    if (
      (getColor() === 'black' && pawnRow === '1')
      || (getColor() === 'white' && pawnRow === '3')) {
      return [];
    }

    if (getColor() === 'black' && pawnRow !== '1') {
      forwardRow = pawnRowInt - 1;
    } else if (getColor() === 'white' && pawnRow !== '3') {
      forwardRow = pawnRowInt + 1;
    }

    const calculateForwardMove = () => {
      const forwardColumn = [];
      if (_gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow.getPawnImg(forwardRow, getColumn(), getColor())
        === 'no') {
        forwardColumn.push(`${forwardRow.toString()}${pawnColumn}`);
      }
      return forwardColumn;
    };

    const calculateDiagonalMove = () => {
      let diagonalColumn = [];
      if (
        pawnColumn === 'a' || pawnColumn === 'c'
      ) {
        if (
          _gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow.getPawnImg(forwardRow, 'b', getColor())
        !== 'no'
        && _gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow.getPawnImg(forwardRow, 'b', getColor())[0]
        !== getColor()[0]) {
          diagonalColumn = ['b'];
        }
      } else if (pawnColumn === 'b') {
        const validColumn = ['a', 'c'];
        validColumn.forEach((col) => {
          if (
            _gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow.getPawnImg(forwardRow, col, getColor())
            !== 'no'
            && _gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow.getPawnImg(forwardRow, col, getColor())[0]
            !== getColor()[0]) {
            diagonalColumn.push(col);
          }
        });
      }

      const moveableTile = [];
      diagonalColumn.forEach((i) => {
        moveableTile.push(`${forwardRow.toString()}${i}`);
      });
      return moveableTile;
    };

    return calculateForwardMove()
      .concat(calculateDiagonalMove());
  };

  return {
    getName,
    getColor,
    getRow,
    getColumn,
    pawnImg,
    pawnMove,
    calculateLegalMoves,
  };
};

const pawns = (() => {
  const abc = ['a', 'b', 'c'];
  const list = {};

  for (let i = 1; i < 4; i++) {
    list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black', '3', abc[i - 1]);
    list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white', '1', abc[i - 1]);
  }

  const getList = () => list;

  const removePawn = (pawnName) => {
    delete list[pawnName];
  };

  const resetPawns = () => {
    for (let i = 1; i < 4; i++) {
      list[`bpawn${i}`] = pawn(`bpawn${i}`, 'black', '3', abc[i - 1]);
      list[`wpawn${i}`] = pawn(`wpawn${i}`, 'white', '1', abc[i - 1]);
    }
  };

  return { getList, removePawn, resetPawns };
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
/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/board */ "./src/modules/board.js");



_modules_board__WEBPACK_IMPORTED_MODULE_1__.gameBoard.displayPawns();
[...document.querySelectorAll('.tile > img')]
  .forEach((el) => {
    el.classList.add('animation');
    setTimeout(() => {
      el.classList.remove('animation');
    }, 1000);
  })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaElEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNzQjtBQUM1QztBQUNBLGtFQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2JvYXJkLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL21vZHVsZXMvY29tcHV0ZXJNb3Zlcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2dhbWVGbG93LmpzIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL21vZHVsZXMvcGF3bnMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiUXVpY2tzYW5kL1F1aWNrc2FuZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jYmxhY2ssICN3aGl0ZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNvcHBvbmVudCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGhlaWdodDogbWluKDUwdncsIDUwdmgpO1xcclxcbiAgd2lkdGg6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6bnRoLWNoaWxkKDJuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnBvc3NpYmxlLW1vdmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTQ0LCAxNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAyMTMsIDI0OCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNjg5KTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGZsZXg6IDAuNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9ucyA+IGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9ucyA+IGltZzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLFxcclxcbi5saW5rcyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzID4gZGl2LFxcclxcbmEge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYTpsaW5rIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuNzQpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNCwgMjAxLCAyNTUsIDAuODYzKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDo4MDFweCkge1xcclxcbiAgLmFuaW1hdGlvbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBbUQ7QUFDckQ7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZDtcXHJcXG4gIHNyYzogdXJsKFF1aWNrc2FuZC9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogcXVpY2tzYW5kLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlcixcXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDEwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbiNibGFjaywgI3doaXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDQ4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3doaXRlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI29wcG9uZW50IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgaGVpZ2h0OiBtaW4oNTB2dywgNTB2aCk7XFxyXFxuICB3aWR0aDogbWluKDUwdncsIDUwdmgpO1xcclxcbiAgZ2FwOiAwLjNyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDs7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi50aWxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpudGgtY2hpbGQoMm4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUucG9zc2libGUtbW92ZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNDQsIDE2NSk7XFxyXFxufVxcclxcblxcclxcbi50aWxlOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjUsIDIxMywgMjQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUuc2VsZWN0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC42ODkpO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9ucyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgZmxleDogMC41O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25zID4gaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25zID4gaW1nOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZmxleDogMC41O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIsXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MgPiBkaXYsXFxyXFxuYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmxpbmsge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IHJnYmEoMjIzLCAyMjMsIDIyMywgMC43NCk7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIsIGE6YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI0LCAyMDEsIDI1NSwgMC44NjMpO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXHJcXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOjgwMXB4KSB7XFxyXFxuICAuYW5pbWF0aW9uIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlc2V0QnV0dG9uLCB0aWxlc05vZGVzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IHBhd25zIH0gZnJvbSAnLi9wYXducyc7XHJcbmltcG9ydCB7IGdhbWVGbG93IH0gZnJvbSAnLi9nYW1lRmxvdyc7XHJcbmltcG9ydCB7IGNoYW5nZUluZm8sIGNoYW5nZVNjb3JlIH0gZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IHsgYmFzaWNDb21wdXRlck1vdmUgfSBmcm9tICcuL2NvbXB1dGVyTW92ZXMnO1xyXG5cclxuLy8gZGVwZW5kcyBvbiBkb21FbGVtZW50cywgcGF3biwgZ2FtZUZsb3dcclxuZXhwb3J0IGNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgdGlsZXNBcnIgPSBBcnJheVxyXG4gIC5mcm9tKHRpbGVzTm9kZXMpO1xyXG5cclxuICBjb25zdCBjbGVhckluZGljYXRvciA9ICgpID0+IHtcclxuICAgIHRpbGVzQXJyLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsZWFyUG9zc2libGVNb3ZlcyA9ICgpID0+IHtcclxuICAgIHRpbGVzQXJyLmZvckVhY2goKHRpbGVzKSA9PiB7XHJcbiAgICAgIHRpbGVzLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc3NpYmxlLW1vdmVzJyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJQYXducyA9ICgpID0+IHtcclxuICAgIHRpbGVzQXJyLmZvckVhY2goKHRpbGUpID0+IHtcclxuICAgICAgd2hpbGUgKHRpbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHRpbGUucmVtb3ZlQ2hpbGQodGlsZS5sYXN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlzcGxheVBhd25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGF3bkxpc3QgPSBwYXducy5nZXRMaXN0KCk7XHJcbiAgICBmb3IgKGNvbnN0IHBhd24gaW4gcGF3bnMuZ2V0TGlzdCgpKSB7XHJcblxyXG4gICAgICBjb25zdCBwYXduVGlsZVBvc2l0aW9uID0gYFtkYXRhLXJvdz0nJHtwYXduTGlzdFtwYXduXVxyXG4gICAgICAgIC5nZXRSb3coKX0nXVtkYXRhLWNvbHVtbj0nJHtwYXduTGlzdFtwYXduXVxyXG4gICAgICAgIC5nZXRDb2x1bW4oKX0nXWA7XHJcblxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihwYXduVGlsZVBvc2l0aW9uKVxyXG4gICAgICAuYXBwZW5kQ2hpbGQocGF3bkxpc3RbcGF3bl0ucGF3bkltZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja1dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbG91ciA9IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpO1xyXG4gICAgY29uc3QgYWxsUG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgXHJcbiAgICBmb3IgKGNvbnN0IHBhd24gaW4gcGF3bnMuZ2V0TGlzdCgpKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJQYXduID0gcGF3bnMuZ2V0TGlzdCgpW3Bhd25dO1xyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIGxvZ2ljIGZvciBjaGVja2luZyBpZiBwYXduXHJcbiAgICAgICAqIGlzIG9uIG90aGVyIHNpZGUgb2YgdGhlIGJvYXJkXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAoY3VyclBhd24uZ2V0Q29sb3IoKVswXSA9PT0gY29sb3VyWzBdKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgIGN1cnJQYXduLmdldFJvdygpID09PSAnMydcclxuICAgICAgICAmJiBjdXJyUGF3bi5nZXRDb2xvcigpID09PSAnd2hpdGUnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VHYW1lU3RhdGUoKTtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICBjdXJyUGF3bi5nZXRSb3coKSA9PT0gJzEnXHJcbiAgICAgICAgICAmJiBjdXJyUGF3bi5nZXRDb2xvcigpID09PSAnYmxhY2snXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VHYW1lU3RhdGUoKTtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8qKiBsb2dpYyBmb3IgY2hlY2tpbmdcclxuICAgICAgICogaWYgb3RoZXIgY29sb3IgY2FuIG1vdmVcclxuICAgICAgICovXHJcbiAgICAgIH0gZWxzZSBpZiAoY3VyclBhd24uZ2V0Q29sb3IoKVswXSAhPT0gY29sb3VyWzBdKSB7XHJcbiAgICAgICAgICBjdXJyUGF3bi5jYWxjdWxhdGVMZWdhbE1vdmVzKClcclxuICAgICAgICAgICAgLmZvckVhY2goaSA9PiBhbGxQb3NzaWJsZU1vdmVzLnB1c2goaSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWxsUG9zc2libGVNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgZ2FtZUZsb3cuY2hhbmdlR2FtZVN0YXRlKCk7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZW5kT2ZUdXJuUHJvY2Vzc2VzID0gKCkgPT4ge1xyXG4gICAgY2xlYXJQYXducygpO1xyXG4gICAgZGlzcGxheVBhd25zKCk7XHJcbiAgICBnYW1lRmxvdy5jaGFuZ2VUYXJnZXRQYXduKCcnKTtcclxuICAgIGNsZWFySW5kaWNhdG9yKCk7XHJcbiAgICBjbGVhclBvc3NpYmxlTW92ZXMoKTtcclxuICAgIGlmIChjaGVja1dpbigpKSB7XHJcbiAgICAgIGNoYW5nZUluZm8oYCR7Z2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCl9IGhhcyB3b24hYCk7XHJcbiAgICAgIGdhbWVGbG93LnVwZGF0ZVNjb3JlKGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpKTtcclxuICAgICAgY2hhbmdlU2NvcmUoZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2FtZUZsb3cuY2hhbmdlQ29sb3VyKCk7XHJcbiAgICAgIGNoYW5nZUluZm8oYCR7Z2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCl9IHRvIG1vdmVgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlc0Fycikge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZ2FtZUZsb3dcclxuICAgICAgLmNoYW5nZVRhcmdldFRpbGUoXHJcbiAgICAgICAgdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksXHJcbiAgICAgICAgdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJykpO1xyXG4gICAgICBcclxuICAgICAgY2xlYXJJbmRpY2F0b3IoKTtcclxuXHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF3biA9IHBhd25zXHJcbiAgICAgICAgLmdldExpc3QoKVtnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCldO1xyXG4gICAgICBjb25zdCBjbGlja2VkUGF3biA9IHRpbGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZUZsb3cuY2hlY2tHYW1lU3RhdGUoKSkge1xyXG4gICAgICAgIGlmIChjbGlja2VkUGF3bikge1xyXG4gICAgICAgICAgaWYgKHByZXZpb3VzUGF3bikge1xyXG4gICAgICAgICAgICBjbGVhclBvc3NpYmxlTW92ZXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgY29uc3QgY2xpY2tlZFBhd25OYW1lID0gY2xpY2tlZFBhd24uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXduID0gcGF3bnNcclxuICAgICAgICAgICAgICAuZ2V0TGlzdCgpW2Ake2NsaWNrZWRQYXduTmFtZX1gXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gZGlzcGxheSBwYXduIHBvc3NpYmxlIG1vdmVzXHJcbiAgICAgICAgICBpZiAoY3VycmVudFBhd24uZ2V0Q29sb3IoKVxyXG4gICAgICAgICAgPT09IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXduLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKVxyXG4gICAgICAgICAgICAgIC5mb3JFYWNoKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7aVswXX0nXVtkYXRhLWNvbHVtbj0nJHtpWzFdfSddYClcclxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKCdwb3NzaWJsZS1tb3ZlcycpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIHBhd24gZWF0cyBlbmVteSBwYXduXHJcbiAgICAgICAgICBpZiAoZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpICE9PSAnJ1xyXG4gICAgICAgICAgJiZcclxuICAgICAgICAgIHByZXZpb3VzUGF3blxyXG4gICAgICAgICAgICAuY2FsY3VsYXRlTGVnYWxNb3ZlcygpXHJcbiAgICAgICAgICAgIC5pbmNsdWRlcyhcclxuICAgICAgICAgICAgZ2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICYmIGdhbWVGbG93LmdldFRhcmdldFBhd24oKVswXSAhPT0gY2xpY2tlZFBhd25OYW1lWzBdXHJcbiAgICAgICAgICAmJiBwcmV2aW91c1Bhd24uZ2V0Q29sb3IoKSA9PT0gZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHBhd25zLnJlbW92ZVBhd24oY2xpY2tlZFBhd25OYW1lKTtcclxuICAgICAgICAgICAgICBwcmV2aW91c1Bhd25cclxuICAgICAgICAgICAgICAucGF3bk1vdmUoYCR7Z2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpWzBdfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVsxXX1gKTtcclxuICAgICAgICAgICAgICBlbmRPZlR1cm5Qcm9jZXNzZXMoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZ2FtZUZsb3cuY2hhbmdlVGFyZ2V0UGF3bihjbGlja2VkUGF3bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gcGF3biBtb3ZlcyB0byBlbXB0eSB0aWxlXHJcbiAgICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgICBjbGlja2VkUGF3biA9PT0gbnVsbCBcclxuICAgICAgICAgICYmIGdhbWVGbG93LmdldFRhcmdldFBhd24oKSAhPT0gJydcclxuICAgICAgICAgICYmIHByZXZpb3VzUGF3blxyXG4gICAgICAgICAgICAgIC5jYWxjdWxhdGVMZWdhbE1vdmVzKClcclxuICAgICAgICAgICAgICAuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICBnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKCkgXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgJiYgcHJldmlvdXNQYXduLmdldENvbG9yKCkgPT09IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgIGNsZWFyUG9zc2libGVNb3ZlcygpO1xyXG4gICAgICAgICAgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgIC5wYXduTW92ZShgJHtnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClbMF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgIGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVsxXX1gKTtcclxuICAgICAgICAgIGVuZE9mVHVyblByb2Nlc3NlcygpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZvciBjb21wdXRlciBtb3ZlbWVudHNcclxuICAgICAgaWYgKGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpID09PSAnYmxhY2snIFxyXG4gICAgICAmJiBnYW1lRmxvdy5nZXRUYXJnZXRQYXduKClbMF0gIT09ICdiJ1xyXG4gICAgICAmJiBnYW1lRmxvdy5jaGVja0dhbWVTdGF0ZSgpKSB7XHJcbiAgICAgICAgYmFzaWNDb21wdXRlck1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGJvYXJkUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBnYW1lRmxvdy5yZXNldEZsb3coKTtcclxuICAgIHBhd25zLnJlc2V0UGF3bnMoKTtcclxuICAgIGNsZWFyUGF3bnMoKTtcclxuICAgIGRpc3BsYXlQYXducygpO1xyXG4gICAgY2hhbmdlSW5mbyhgJHtnYW1lRmxvdy5jaGVja0N1cnJlbnRDb2xvdXIoKX0gdG8gbW92ZWApO1xyXG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlID4gaW1nJyldXHJcbiAgLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pXHJcbiAgfVxyXG5cclxuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvYXJkUmVzZXQpO1xyXG4gIFxyXG4gIHJldHVybiB7IGRpc3BsYXlQYXducyxcclxuICAgICAgICAgICB0aWxlc0FycixcclxuICAgICAgICAgICBjbGVhclBhd25zLFxyXG4gICAgICAgICAgIGJvYXJkUmVzZXQgfVxyXG59KSgpOyIsImltcG9ydCB7IHBhd25zIH0gZnJvbSAnLi9wYXducyc7XHJcblxyXG5jb25zdCBjb21wQ29sb3IgPSAnYic7XHJcblxyXG5jb25zdCBmaWx0ZXJDb2xvcmVkUGF3bnMgPSAocGF3bikgPT4ge1xyXG4gIGlmIChwYXduLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylbMF0gPT09IGNvbXBDb2xvcikgcmV0dXJuIHRydWU7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92ZWFibGVQYXducyA9ICgpID0+IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZSA+IGltZycpXS5maWx0ZXIoZmlsdGVyQ29sb3JlZFBhd25zKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tSW5kZXggPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnZXRNb3ZlYWJsZVBhd25zLmxlbmd0aCk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2ljQ29tcHV0ZXJNb3ZlID0gKCkgPT4ge1xyXG4gIGxldCBjb21wdXRlck1vdmVhYmxlVGlsZXMgPSBbXTtcclxuICBsZXQgY29tcHV0ZXJQYXduO1xyXG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE1vdmVhYmxlUGF3bnMoKS5sZW5ndGgpO1xyXG5cclxuICB3aGlsZSAoY29tcHV0ZXJNb3ZlYWJsZVRpbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29tcHV0ZXJNb3ZlYWJsZVRpbGVzID0gW107XHJcbiAgICBjb21wdXRlclBhd24gPSBnZXRNb3ZlYWJsZVBhd25zKClbaW5kZXhdXHJcbiAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgIHBhd25zXHJcbiAgICAgIC5nZXRMaXN0KClbY29tcHV0ZXJQYXduXVxyXG4gICAgICAuY2FsY3VsYXRlTGVnYWxNb3ZlcygpXHJcbiAgICAgIC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgY29tcHV0ZXJNb3ZlYWJsZVRpbGVzXHJcbiAgICAgICAgLnB1c2goXHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgW2RhdGEtcm93PScke2lbMF19J11bZGF0YS1jb2x1bW49JyR7aVsxXX0nXWBcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICB9KTtcclxuXHJcbiAgICBpbmRleCA9IChpbmRleCArIDEpICUgZ2V0TW92ZWFibGVQYXducygpLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVyUGF3bkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9JyR7Y29tcHV0ZXJQYXdufSddYCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29tcHV0ZXJQYXduSW1nLmNsaWNrKCk7XHJcbiAgICAgICAgICBjb25zdCBtb3ZlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlck1vdmVhYmxlVGlsZXMubGVuZ3RoKTtcclxuICAgICAgICAgIGNvbXB1dGVyTW92ZWFibGVUaWxlc1ttb3ZlSW5kZXhdLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTAwMClcclxufVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiIsImltcG9ydCB7IGluZm9EaXNwbGF5LCBibGFja1Njb3JlLCB3aGl0ZVNjb3JlIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IGdhbWVGbG93IH0gZnJvbSAnLi9nYW1lRmxvdyc7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlSW5mbyA9ICh0ZXh0KSA9PiB7XHJcbiAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlU2NvcmUgPSAoY29sb3IpID0+IHtcclxuICBpZiAoY29sb3IgPT09ICdibGFjaycpIHtcclxuICAgIGJsYWNrU2NvcmUudGV4dENvbnRlbnQgPSBcclxuICAgIGdhbWVGbG93LmdldEJsYWNrU2NvcmUoKTtcclxuICB9IGVsc2UgaWYgKGNvbG9yID09PSAnd2hpdGUnKSB7XHJcbiAgICB3aGl0ZVNjb3JlLnRleHRDb250ZW50ID0gXHJcbiAgICBnYW1lRmxvdy5nZXRXaGl0ZVNjb3JlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgY29uc3QgaW5mb0Rpc3BsYXkgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmluZm8tZGlzcGxheScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpbGVzTm9kZXMgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnZGl2LnRpbGUnKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnV0dG9uJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYmxhY2tTY29yZSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjYmxhY2stc2NvcmUnKTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aGl0ZVNjb3JlID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyN3aGl0ZS1zY29yZScpOyIsImV4cG9ydCBjb25zdCBnYW1lRmxvdyA9ICgoKSA9PiB7XHJcbiAgbGV0IHRhcmdldFJvdyA9ICcnO1xyXG4gIGxldCB0YXJnZXRDb2x1bW4gPSAnJztcclxuICBsZXQgdGFyZ2V0UGF3biA9ICcnO1xyXG4gIGxldCBpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcclxuICBsZXQgY3VycmVudENvbG91ciA9ICd3aGl0ZSc7XHJcbiAgbGV0IGN1cnJCbGFja1Njb3JlID0gMDtcclxuICBsZXQgY3VycldoaXRlU2NvcmUgPSAwO1xyXG5cclxuICBjb25zdCBnZXRUYXJnZXRUaWxlID0gKCkgPT4gYCR7dGFyZ2V0Um93fSR7dGFyZ2V0Q29sdW1ufWA7XHJcbiAgXHJcbiAgY29uc3QgY2hhbmdlVGFyZ2V0VGlsZSA9IChyb3csIGNvbHVtbikgPT4ge1xyXG4gICAgdGFyZ2V0Um93ID0gcm93O1xyXG4gICAgdGFyZ2V0Q29sdW1uID0gY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0VGFyZ2V0UGF3biA9ICgpID0+IHRhcmdldFBhd247XHJcblxyXG4gIGNvbnN0IGdldFBhd25JbWcgPSAocm93LCBjb2x1bW4pID0+IHtcclxuICAgIGNvbnN0IHRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9JyR7cm93fSddW2RhdGEtY29sdW1uPScke2NvbHVtbn0nXWApO1xyXG4gICAgcmV0dXJuIHRpbGUucXVlcnlTZWxlY3RvcignaW1nJykgP1xyXG4gICAgdGlsZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcignaW1nJylcclxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykgOiAnbm8nO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlVGFyZ2V0UGF3biA9IChwYXduKSA9PiB7XHJcbiAgICB0YXJnZXRQYXduID0gcGF3bjtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tHYW1lU3RhdGUgPSAoKSA9PiBpc0dhbWVSdW5uaW5nO1xyXG5cclxuICBjb25zdCBjaGFuZ2VHYW1lU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNHYW1lUnVubmluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICBpc0dhbWVSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGlzR2FtZVJ1bm5pbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlzR2FtZVJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tDdXJyZW50Q29sb3VyID0gKCkgPT4gY3VycmVudENvbG91cjtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29sb3VyID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRDb2xvdXIgPT09ICd3aGl0ZScpIHtcclxuICAgICAgY3VycmVudENvbG91ciA9ICdibGFjayc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb2xvdXIgPT09ICdibGFjaycpIHtcclxuICAgICAgY3VycmVudENvbG91ciA9ICd3aGl0ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXNldEZsb3cgPSAoKSA9PiB7XHJcbiAgICB0YXJnZXRSb3cgPSAnJztcclxuICAgIHRhcmdldENvbHVtbiA9ICcnO1xyXG4gICAgdGFyZ2V0UGF3biA9ICcnO1xyXG4gICAgaXNHYW1lUnVubmluZyA9IHRydWU7XHJcbiAgICBjdXJyZW50Q29sb3VyID0gJ3doaXRlJztcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVNjb3JlID0gKGNvbG91cikgPT4ge1xyXG4gICAgaWYgKGNvbG91ciA9PT0gJ2JsYWNrJykge1xyXG4gICAgICBjdXJyQmxhY2tTY29yZSsrO1xyXG4gICAgfSBlbHNlIGlmIChjb2xvdXIgPT09ICd3aGl0ZScpIHtcclxuICAgICAgY3VycldoaXRlU2NvcmUrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEJsYWNrU2NvcmUgPSAoKSA9PiBjdXJyQmxhY2tTY29yZTtcclxuXHJcbiAgY29uc3QgZ2V0V2hpdGVTY29yZSA9ICgpID0+IGN1cnJXaGl0ZVNjb3JlO1xyXG5cclxuICByZXR1cm4geyBnZXRUYXJnZXRUaWxlLFxyXG4gICAgICAgICAgIGNoYW5nZVRhcmdldFRpbGUsXHJcbiAgICAgICAgICAgZ2V0VGFyZ2V0UGF3bixcclxuICAgICAgICAgICBnZXRQYXduSW1nLFxyXG4gICAgICAgICAgIGNoYW5nZVRhcmdldFBhd24sXHJcbiAgICAgICAgICAgY2hlY2tHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgY2hhbmdlR2FtZVN0YXRlLFxyXG4gICAgICAgICAgIGNoZWNrQ3VycmVudENvbG91cixcclxuICAgICAgICAgICBjaGFuZ2VDb2xvdXIsXHJcbiAgICAgICAgICAgcmVzZXRGbG93LFxyXG4gICAgICAgICAgIHVwZGF0ZVNjb3JlLFxyXG4gICAgICAgICAgIGdldEJsYWNrU2NvcmUsXHJcbiAgICAgICAgICAgZ2V0V2hpdGVTY29yZX07XHJcbn0pKCk7IiwiaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcclxuXHJcbmV4cG9ydCBjb25zdCBwYXduID0gKG5hbWUsIGNvbG9yLCByb3csIGNvbHVtbikgPT4ge1xyXG4gIGNvbnN0IHBhd25OYW1lID0gbmFtZTtcclxuICBjb25zdCBwYXduQ29sb3IgPSBjb2xvcjtcclxuICBjb25zdCBwYXduSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbGV0IHBhd25Sb3cgPSByb3c7XHJcbiAgbGV0IHBhd25Db2x1bW4gPSBjb2x1bW47XHJcblxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBwYXduTmFtZTtcclxuICBjb25zdCBnZXRDb2xvciA9ICgpID0+IHBhd25Db2xvcjtcclxuICBjb25zdCBnZXRSb3cgPSAoKSA9PiBwYXduUm93O1xyXG4gIGNvbnN0IGdldENvbHVtbiA9ICgpID0+IHBhd25Db2x1bW47XHJcblxyXG4gIGlmIChjb2xvciA9PT0gJ2JsYWNrJykge1xyXG4gICAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdzdmcvYnBhd24uc3ZnJyk7XHJcbiAgfSBlbHNlIGlmIChjb2xvciA9PT0gJ3doaXRlJykge1xyXG4gICAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdzdmcvcGF3bi5zdmcnKTtcclxuICB9XHJcblxyXG4gIHBhd25JbWcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnNTAnKTtcclxuICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNTAnKTtcclxuICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJywgbmFtZSk7XHJcblxyXG4gIGNvbnN0IHBhd25Nb3ZlID0gKG5ld1JvdywgbmV3Q29sdW1uKSA9PiB7XHJcbiAgICBwYXduUm93ID0gbmV3Um93O1xyXG4gICAgcGF3bkNvbHVtbiA9IG5ld0NvbHVtbjtcclxuICAgIHBhd25JbWcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcGF3bkltZy5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbGN1bGF0ZUxlZ2FsTW92ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYXduUm93SW50ID0gcGFyc2VJbnQocGF3blJvdywgMTApO1xyXG4gICAgbGV0IGZvcndhcmRSb3cgPSAnJztcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChnZXRDb2xvcigpID09PSAnYmxhY2snICYmIHBhd25Sb3cgPT09ICcxJylcclxuICAgICAgfHwgKGdldENvbG9yKCkgPT09ICd3aGl0ZScgJiYgcGF3blJvdyA9PT0gJzMnKSkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldENvbG9yKCkgPT09ICdibGFjaycgJiYgcGF3blJvdyAhPT0gJzEnKSB7XHJcbiAgICAgIGZvcndhcmRSb3cgPSBwYXduUm93SW50IC0gMTtcclxuICAgIH0gZWxzZSBpZiAoZ2V0Q29sb3IoKSA9PT0gJ3doaXRlJyAmJiBwYXduUm93ICE9PSAnMycpIHtcclxuICAgICAgZm9yd2FyZFJvdyA9IHBhd25Sb3dJbnQgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUZvcndhcmRNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBmb3J3YXJkQ29sdW1uID0gW107XHJcbiAgICAgIGlmIChnYW1lRmxvdy5nZXRQYXduSW1nKGZvcndhcmRSb3csIGdldENvbHVtbigpLCBnZXRDb2xvcigpKVxyXG4gICAgICAgID09PSAnbm8nKSB7XHJcbiAgICAgICAgZm9yd2FyZENvbHVtbi5wdXNoKGAke2ZvcndhcmRSb3cudG9TdHJpbmcoKX0ke3Bhd25Db2x1bW59YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZvcndhcmRDb2x1bW47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZURpYWdvbmFsTW92ZSA9ICgpID0+IHtcclxuICAgICAgbGV0IGRpYWdvbmFsQ29sdW1uID0gW107XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwYXduQ29sdW1uID09PSAnYScgfHwgcGF3bkNvbHVtbiA9PT0gJ2MnXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGdhbWVGbG93LmdldFBhd25JbWcoZm9yd2FyZFJvdywgJ2InLCBnZXRDb2xvcigpKVxyXG4gICAgICAgICE9PSAnbm8nXHJcbiAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0UGF3bkltZyhmb3J3YXJkUm93LCAnYicsIGdldENvbG9yKCkpWzBdXHJcbiAgICAgICAgIT09IGdldENvbG9yKClbMF0pIHtcclxuICAgICAgICAgIGRpYWdvbmFsQ29sdW1uID0gWydiJ107XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHBhd25Db2x1bW4gPT09ICdiJykge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkQ29sdW1uID0gWydhJywgJ2MnXTtcclxuICAgICAgICB2YWxpZENvbHVtbi5mb3JFYWNoKChjb2wpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZ2FtZUZsb3cuZ2V0UGF3bkltZyhmb3J3YXJkUm93LCBjb2wsIGdldENvbG9yKCkpXHJcbiAgICAgICAgICAgICE9PSAnbm8nXHJcbiAgICAgICAgICAgICYmIGdhbWVGbG93LmdldFBhd25JbWcoZm9yd2FyZFJvdywgY29sLCBnZXRDb2xvcigpKVswXVxyXG4gICAgICAgICAgICAhPT0gZ2V0Q29sb3IoKVswXSkge1xyXG4gICAgICAgICAgICBkaWFnb25hbENvbHVtbi5wdXNoKGNvbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1vdmVhYmxlVGlsZSA9IFtdO1xyXG4gICAgICBkaWFnb25hbENvbHVtbi5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgbW92ZWFibGVUaWxlLnB1c2goYCR7Zm9yd2FyZFJvdy50b1N0cmluZygpfSR7aX1gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBtb3ZlYWJsZVRpbGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGVGb3J3YXJkTW92ZSgpXHJcbiAgICAgIC5jb25jYXQoY2FsY3VsYXRlRGlhZ29uYWxNb3ZlKCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZXROYW1lLFxyXG4gICAgZ2V0Q29sb3IsXHJcbiAgICBnZXRSb3csXHJcbiAgICBnZXRDb2x1bW4sXHJcbiAgICBwYXduSW1nLFxyXG4gICAgcGF3bk1vdmUsXHJcbiAgICBjYWxjdWxhdGVMZWdhbE1vdmVzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGF3bnMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGFiYyA9IFsnYScsICdiJywgJ2MnXTtcclxuICBjb25zdCBsaXN0ID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBsaXN0W2BicGF3biR7aX1gXSA9IHBhd24oYGJwYXduJHtpfWAsICdibGFjaycsICczJywgYWJjW2kgLSAxXSk7XHJcbiAgICBsaXN0W2B3cGF3biR7aX1gXSA9IHBhd24oYHdwYXduJHtpfWAsICd3aGl0ZScsICcxJywgYWJjW2kgLSAxXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gbGlzdDtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUGF3biA9IChwYXduTmFtZSkgPT4ge1xyXG4gICAgZGVsZXRlIGxpc3RbcGF3bk5hbWVdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0UGF3bnMgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xyXG4gICAgICBsaXN0W2BicGF3biR7aX1gXSA9IHBhd24oYGJwYXduJHtpfWAsICdibGFjaycsICczJywgYWJjW2kgLSAxXSk7XHJcbiAgICAgIGxpc3RbYHdwYXduJHtpfWBdID0gcGF3bihgd3Bhd24ke2l9YCwgJ3doaXRlJywgJzEnLCBhYmNbaSAtIDFdKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBnZXRMaXN0LCByZW1vdmVQYXduLCByZXNldFBhd25zIH07XHJcbn0pKCk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gJy4vbW9kdWxlcy9ib2FyZCc7XHJcblxyXG5nYW1lQm9hcmQuZGlzcGxheVBhd25zKCk7XHJcblsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGlsZSA+IGltZycpXVxyXG4gIC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=