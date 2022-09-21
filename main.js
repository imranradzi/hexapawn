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
          for (const i of currPawn.calculateLegalMoves()) {
            allPossibleMoves.push(i);
          }
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
            for (const i of currentPawn.calculateLegalMoves()) {
              document
                .querySelector(`[data-row='${i[0]}'][data-column='${i[1]}']`)
                .classList.add('possible-moves');
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hJRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDc0I7QUFDNUM7QUFDQSxrRUFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hleGFwYXduLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyTW92ZXMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2hleGFwYXduLy4vc3JjL21vZHVsZXMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvbW9kdWxlcy9nYW1lRmxvdy5qcyIsIndlYnBhY2s6Ly9oZXhhcGF3bi8uL3NyYy9tb2R1bGVzL3Bhd25zLmpzIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hleGFwYXduL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oZXhhcGF3bi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaGV4YXBhd24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIlF1aWNrc2FuZC9RdWlja3NhbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogcXVpY2tzYW5kO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLFxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZmxleDogMTA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuI2JsYWNrLCAjd2hpdGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogNDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jd2hpdGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jb3Bwb25lbnQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBoZWlnaHQ6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIHdpZHRoOiBtaW4oNTB2dywgNTB2aCk7XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4OztcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50aWxlOm50aC1jaGlsZCgybikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS5wb3NzaWJsZS1tb3ZlcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE0NCwgMTY1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNSwgMjEzLCAyNDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZS5zZWxlY3RlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjY4OSk7XFxyXFxufVxcclxcblxcclxcbiNidXR0b25zIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBmbGV4OiAwLjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbnMgPiBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbnMgPiBpbWc6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBmbGV4OiAwLjU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlcixcXHJcXG4ubGlua3Mge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyA+IGRpdixcXHJcXG5hIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6bGluayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogcmdiYSgyMjMsIDIyMywgMjIzLCAwLjc0KTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciwgYTphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYmEoMjQsIDIwMSwgMjU1LCAwLjg2Myk7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxcclxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ODAxcHgpIHtcXHJcXG4gIC5hbmltYXRpb24ge1xcclxcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE9BQU8sVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBxdWlja3NhbmQ7XFxyXFxuICBzcmM6IHVybChRdWlja3NhbmQvUXVpY2tzYW5kLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHF1aWNrc2FuZCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIsXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jYmxhY2ssICN3aGl0ZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN3aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNvcHBvbmVudCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGVzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGhlaWdodDogbWluKDUwdncsIDUwdmgpO1xcclxcbiAgd2lkdGg6IG1pbig1MHZ3LCA1MHZoKTtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7O1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbGU6bnRoLWNoaWxkKDJuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnBvc3NpYmxlLW1vdmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTQ0LCAxNjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGlsZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI1LCAyMTMsIDI0OCk7XFxyXFxufVxcclxcblxcclxcbi50aWxlLnNlbGVjdGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNjg5KTtcXHJcXG59XFxyXFxuXFxyXFxuI2J1dHRvbnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gIGZsZXg6IDAuNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9ucyA+IGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnV0dG9ucyA+IGltZzpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyLFxcclxcbi5saW5rcyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzID4gZGl2LFxcclxcbmEge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYTpsaW5rIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDIyMywgMjIzLCAyMjMsIDAuNzQpO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiYSgyNCwgMjAxLCAyNTUsIDAuODYzKTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDo4MDFweCkge1xcclxcbiAgLmFuaW1hdGlvbiB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXNldEJ1dHRvbiwgdGlsZXNOb2RlcyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBwYXducyB9IGZyb20gJy4vcGF3bnMnO1xyXG5pbXBvcnQgeyBnYW1lRmxvdyB9IGZyb20gJy4vZ2FtZUZsb3cnO1xyXG5pbXBvcnQgeyBjaGFuZ2VJbmZvLCBjaGFuZ2VTY29yZSB9IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCB7IGJhc2ljQ29tcHV0ZXJNb3ZlIH0gZnJvbSAnLi9jb21wdXRlck1vdmVzJztcclxuXHJcbi8vIGRlcGVuZHMgb24gZG9tRWxlbWVudHMsIHBhd24sIGdhbWVGbG93XHJcbmV4cG9ydCBjb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHRpbGVzQXJyID0gQXJyYXlcclxuICAuZnJvbSh0aWxlc05vZGVzKTtcclxuXHJcbiAgY29uc3QgY2xlYXJJbmRpY2F0b3IgPSAoKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHRpbGUgb2YgdGlsZXNBcnIpIHtcclxuICAgICAgdGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJQb3NzaWJsZU1vdmVzID0gKCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCB0aWxlcyBvZiB0aWxlc0Fycikge1xyXG4gICAgICB0aWxlcy5jbGFzc0xpc3QucmVtb3ZlKCdwb3NzaWJsZS1tb3ZlcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xlYXJQYXducyA9ICgpID0+IHtcclxuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlc0Fycikge1xyXG4gICAgICB3aGlsZSAodGlsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgdGlsZS5yZW1vdmVDaGlsZCh0aWxlLmxhc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlQYXducyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhd25MaXN0ID0gcGF3bnMuZ2V0TGlzdCgpO1xyXG4gICAgZm9yIChjb25zdCBwYXduIGluIHBhd25zLmdldExpc3QoKSkge1xyXG5cclxuICAgICAgY29uc3QgcGF3blRpbGVQb3NpdGlvbiA9IGBbZGF0YS1yb3c9JyR7cGF3bkxpc3RbcGF3bl1cclxuICAgICAgICAuZ2V0Um93KCl9J11bZGF0YS1jb2x1bW49JyR7cGF3bkxpc3RbcGF3bl1cclxuICAgICAgICAuZ2V0Q29sdW1uKCl9J11gO1xyXG5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IocGF3blRpbGVQb3NpdGlvbilcclxuICAgICAgLmFwcGVuZENoaWxkKHBhd25MaXN0W3Bhd25dLnBhd25JbWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tXaW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvdXIgPSBnYW1lRmxvdy5jaGVja0N1cnJlbnRDb2xvdXIoKTtcclxuICAgIGNvbnN0IGFsbFBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgIFxyXG4gICAgZm9yIChjb25zdCBwYXduIGluIHBhd25zLmdldExpc3QoKSkge1xyXG4gICAgICBjb25zdCBjdXJyUGF3biA9IHBhd25zLmdldExpc3QoKVtwYXduXTtcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBsb2dpYyBmb3IgY2hlY2tpbmcgaWYgcGF3blxyXG4gICAgICAgKiBpcyBvbiBvdGhlciBzaWRlIG9mIHRoZSBib2FyZFxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKGN1cnJQYXduLmdldENvbG9yKClbMF0gPT09IGNvbG91clswXSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICBjdXJyUGF3bi5nZXRSb3coKSA9PT0gJzMnXHJcbiAgICAgICAgJiYgY3VyclBhd24uZ2V0Q29sb3IoKSA9PT0gJ3doaXRlJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZ2FtZUZsb3cuY2hhbmdlR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgY3VyclBhd24uZ2V0Um93KCkgPT09ICcxJ1xyXG4gICAgICAgICAgJiYgY3VyclBhd24uZ2V0Q29sb3IoKSA9PT0gJ2JsYWNrJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZ2FtZUZsb3cuY2hhbmdlR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvKiogbG9naWMgZm9yIGNoZWNraW5nXHJcbiAgICAgICAqIGlmIG90aGVyIGNvbG9yIGNhbiBtb3ZlXHJcbiAgICAgICAqL1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJQYXduLmdldENvbG9yKClbMF0gIT09IGNvbG91clswXSkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBpIG9mIGN1cnJQYXduLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKSkge1xyXG4gICAgICAgICAgICBhbGxQb3NzaWJsZU1vdmVzLnB1c2goaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWxsUG9zc2libGVNb3Zlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgZ2FtZUZsb3cuY2hhbmdlR2FtZVN0YXRlKCk7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZW5kT2ZUdXJuUHJvY2Vzc2VzID0gKCkgPT4ge1xyXG4gICAgY2xlYXJQYXducygpO1xyXG4gICAgZGlzcGxheVBhd25zKCk7XHJcbiAgICBnYW1lRmxvdy5jaGFuZ2VUYXJnZXRQYXduKCcnKTtcclxuICAgIGNsZWFySW5kaWNhdG9yKCk7XHJcbiAgICBjbGVhclBvc3NpYmxlTW92ZXMoKTtcclxuICAgIGlmIChjaGVja1dpbigpKSB7XHJcbiAgICAgIGNoYW5nZUluZm8oYCR7Z2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCl9IGhhcyB3b24hYCk7XHJcbiAgICAgIGdhbWVGbG93LnVwZGF0ZVNjb3JlKGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpKTtcclxuICAgICAgY2hhbmdlU2NvcmUoZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2FtZUZsb3cuY2hhbmdlQ29sb3VyKCk7XHJcbiAgICAgIGNoYW5nZUluZm8oYCR7Z2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCl9IHRvIG1vdmVgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlc0Fycikge1xyXG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZ2FtZUZsb3dcclxuICAgICAgLmNoYW5nZVRhcmdldFRpbGUoXHJcbiAgICAgICAgdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksXHJcbiAgICAgICAgdGlsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJykpO1xyXG4gICAgICBcclxuICAgICAgY2xlYXJJbmRpY2F0b3IoKTtcclxuXHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF3biA9IHBhd25zXHJcbiAgICAgICAgLmdldExpc3QoKVtnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCldO1xyXG4gICAgICBjb25zdCBjbGlja2VkUGF3biA9IHRpbGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2FtZUZsb3cuY2hlY2tHYW1lU3RhdGUoKSkge1xyXG4gICAgICAgIGlmIChjbGlja2VkUGF3bikge1xyXG4gICAgICAgICAgaWYgKHByZXZpb3VzUGF3bikge1xyXG4gICAgICAgICAgICBjbGVhclBvc3NpYmxlTW92ZXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgY29uc3QgY2xpY2tlZFBhd25OYW1lID0gY2xpY2tlZFBhd24uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICBcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXduID0gcGF3bnNcclxuICAgICAgICAgICAgICAuZ2V0TGlzdCgpW2Ake2NsaWNrZWRQYXduTmFtZX1gXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gZGlzcGxheSBwYXduIHBvc3NpYmxlIG1vdmVzXHJcbiAgICAgICAgICBpZiAoY3VycmVudFBhd24uZ2V0Q29sb3IoKVxyXG4gICAgICAgICAgPT09IGdhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjdXJyZW50UGF3bi5jYWxjdWxhdGVMZWdhbE1vdmVzKCkpIHtcclxuICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtpWzBdfSddW2RhdGEtY29sdW1uPScke2lbMV19J11gKVxyXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoJ3Bvc3NpYmxlLW1vdmVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gcGF3biBlYXRzIGVuZW15IHBhd25cclxuICAgICAgICAgIGlmIChnYW1lRmxvdy5nZXRUYXJnZXRQYXduKCkgIT09ICcnXHJcbiAgICAgICAgICAmJlxyXG4gICAgICAgICAgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgIC5jYWxjdWxhdGVMZWdhbE1vdmVzKClcclxuICAgICAgICAgICAgLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICBnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpWzBdICE9PSBjbGlja2VkUGF3bk5hbWVbMF1cclxuICAgICAgICAgICYmIHByZXZpb3VzUGF3bi5nZXRDb2xvcigpID09PSBnYW1lRmxvdy5jaGVja0N1cnJlbnRDb2xvdXIoKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcGF3bnMucmVtb3ZlUGF3bihjbGlja2VkUGF3bk5hbWUpO1xyXG4gICAgICAgICAgICAgIHByZXZpb3VzUGF3blxyXG4gICAgICAgICAgICAgIC5wYXduTW92ZShgJHtnYW1lRmxvdy5nZXRUYXJnZXRUaWxlKClbMF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7Z2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpWzFdfWApO1xyXG4gICAgICAgICAgICAgIGVuZE9mVHVyblByb2Nlc3NlcygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBnYW1lRmxvdy5jaGFuZ2VUYXJnZXRQYXduKGNsaWNrZWRQYXduLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyBwYXduIG1vdmVzIHRvIGVtcHR5IHRpbGVcclxuICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgIGNsaWNrZWRQYXduID09PSBudWxsIFxyXG4gICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0VGFyZ2V0UGF3bigpICE9PSAnJ1xyXG4gICAgICAgICAgJiYgcHJldmlvdXNQYXduXHJcbiAgICAgICAgICAgICAgLmNhbGN1bGF0ZUxlZ2FsTW92ZXMoKVxyXG4gICAgICAgICAgICAgIC5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgIGdhbWVGbG93LmdldFRhcmdldFRpbGUoKSBcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAmJiBwcmV2aW91c1Bhd24uZ2V0Q29sb3IoKSA9PT0gZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgY2xlYXJQb3NzaWJsZU1vdmVzKCk7XHJcbiAgICAgICAgICBwcmV2aW91c1Bhd25cclxuICAgICAgICAgICAgICAgLnBhd25Nb3ZlKGAke2dhbWVGbG93LmdldFRhcmdldFRpbGUoKVswXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYCR7Z2FtZUZsb3cuZ2V0VGFyZ2V0VGlsZSgpWzFdfWApO1xyXG4gICAgICAgICAgZW5kT2ZUdXJuUHJvY2Vzc2VzKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZm9yIGNvbXB1dGVyIG1vdmVtZW50c1xyXG4gICAgICBpZiAoZ2FtZUZsb3cuY2hlY2tDdXJyZW50Q29sb3VyKCkgPT09ICdibGFjaycgXHJcbiAgICAgICYmIGdhbWVGbG93LmdldFRhcmdldFBhd24oKVswXSAhPT0gJ2InXHJcbiAgICAgICYmIGdhbWVGbG93LmNoZWNrR2FtZVN0YXRlKCkpIHtcclxuICAgICAgICBiYXNpY0NvbXB1dGVyTW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYm9hcmRSZXNldCA9ICgpID0+IHtcclxuICAgIGdhbWVGbG93LnJlc2V0RmxvdygpO1xyXG4gICAgcGF3bnMucmVzZXRQYXducygpO1xyXG4gICAgY2xlYXJQYXducygpO1xyXG4gICAgZGlzcGxheVBhd25zKCk7XHJcbiAgICBjaGFuZ2VJbmZvKGAke2dhbWVGbG93LmNoZWNrQ3VycmVudENvbG91cigpfSB0byBtb3ZlYCk7XHJcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbGUgPiBpbWcnKV1cclxuICAuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSlcclxuICB9XHJcblxyXG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9hcmRSZXNldCk7XHJcbiAgXHJcbiAgcmV0dXJuIHsgZGlzcGxheVBhd25zLFxyXG4gICAgICAgICAgIHRpbGVzQXJyLFxyXG4gICAgICAgICAgIGNsZWFyUGF3bnMsXHJcbiAgICAgICAgICAgYm9hcmRSZXNldCB9XHJcbn0pKCk7IiwiaW1wb3J0IHsgcGF3bnMgfSBmcm9tICcuL3Bhd25zJztcclxuXHJcbmNvbnN0IGNvbXBDb2xvciA9ICdiJztcclxuXHJcbmNvbnN0IGZpbHRlckNvbG9yZWRQYXducyA9IChwYXduKSA9PiB7XHJcbiAgaWYgKHBhd24uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVswXSA9PT0gY29tcENvbG9yKSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZlYWJsZVBhd25zID0gKCkgPT4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlID4gaW1nJyldLmZpbHRlcihmaWx0ZXJDb2xvcmVkUGF3bnMpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21JbmRleCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldE1vdmVhYmxlUGF3bnMubGVuZ3RoKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYmFzaWNDb21wdXRlck1vdmUgPSAoKSA9PiB7XHJcbiAgbGV0IGNvbXB1dGVyTW92ZWFibGVUaWxlcyA9IFtdO1xyXG4gIGxldCBjb21wdXRlclBhd247XHJcbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0TW92ZWFibGVQYXducygpLmxlbmd0aCk7XHJcblxyXG4gIHdoaWxlIChjb21wdXRlck1vdmVhYmxlVGlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb21wdXRlck1vdmVhYmxlVGlsZXMgPSBbXTtcclxuICAgIGNvbXB1dGVyUGF3biA9IGdldE1vdmVhYmxlUGF3bnMoKVtpbmRleF1cclxuICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgcGF3bnNcclxuICAgICAgLmdldExpc3QoKVtjb21wdXRlclBhd25dXHJcbiAgICAgIC5jYWxjdWxhdGVMZWdhbE1vdmVzKClcclxuICAgICAgLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBjb21wdXRlck1vdmVhYmxlVGlsZXNcclxuICAgICAgICAucHVzaChcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGBbZGF0YS1yb3c9JyR7aVswXX0nXVtkYXRhLWNvbHVtbj0nJHtpWzFdfSddYFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH0pO1xyXG5cclxuICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSBnZXRNb3ZlYWJsZVBhd25zKCkubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcHV0ZXJQYXduSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmFtZT0nJHtjb21wdXRlclBhd259J11gKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb21wdXRlclBhd25JbWcuY2xpY2soKTtcclxuICAgICAgICAgIGNvbnN0IG1vdmVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyTW92ZWFibGVUaWxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgY29tcHV0ZXJNb3ZlYWJsZVRpbGVzW21vdmVJbmRleF0uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLCAxMDAwKVxyXG59XHJcbiAgICAgICAgXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgaW5mb0Rpc3BsYXksIGJsYWNrU2NvcmUsIHdoaXRlU2NvcmUgfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcclxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VJbmZvID0gKHRleHQpID0+IHtcclxuICBpbmZvRGlzcGxheS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VTY29yZSA9IChjb2xvcikgPT4ge1xyXG4gIGlmIChjb2xvciA9PT0gJ2JsYWNrJykge1xyXG4gICAgYmxhY2tTY29yZS50ZXh0Q29udGVudCA9IFxyXG4gICAgZ2FtZUZsb3cuZ2V0QmxhY2tTY29yZSgpO1xyXG4gIH0gZWxzZSBpZiAoY29sb3IgPT09ICd3aGl0ZScpIHtcclxuICAgIHdoaXRlU2NvcmUudGV4dENvbnRlbnQgPSBcclxuICAgIGdhbWVGbG93LmdldFdoaXRlU2NvcmUoKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kaXNwbGF5Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgdGlsZXNOb2RlcyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGlsZScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBibGFja1Njb3JlID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNibGFjay1zY29yZScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdoaXRlU2NvcmUgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3doaXRlLXNjb3JlJyk7IiwiZXhwb3J0IGNvbnN0IGdhbWVGbG93ID0gKCgpID0+IHtcclxuICBsZXQgdGFyZ2V0Um93ID0gJyc7XHJcbiAgbGV0IHRhcmdldENvbHVtbiA9ICcnO1xyXG4gIGxldCB0YXJnZXRQYXduID0gJyc7XHJcbiAgbGV0IGlzR2FtZVJ1bm5pbmcgPSB0cnVlO1xyXG4gIGxldCBjdXJyZW50Q29sb3VyID0gJ3doaXRlJztcclxuICBsZXQgY3VyckJsYWNrU2NvcmUgPSAwO1xyXG4gIGxldCBjdXJyV2hpdGVTY29yZSA9IDA7XHJcblxyXG4gIGNvbnN0IGdldFRhcmdldFRpbGUgPSAoKSA9PiBgJHt0YXJnZXRSb3d9JHt0YXJnZXRDb2x1bW59YDtcclxuICBcclxuICBjb25zdCBjaGFuZ2VUYXJnZXRUaWxlID0gKHJvdywgY29sdW1uKSA9PiB7XHJcbiAgICB0YXJnZXRSb3cgPSByb3c7XHJcbiAgICB0YXJnZXRDb2x1bW4gPSBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRUYXJnZXRQYXduID0gKCkgPT4gdGFyZ2V0UGF3bjtcclxuXHJcbiAgY29uc3QgZ2V0UGF3bkltZyA9IChyb3csIGNvbHVtbikgPT4ge1xyXG4gICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz0nJHtyb3d9J11bZGF0YS1jb2x1bW49JyR7Y29sdW1ufSddYCk7XHJcbiAgICByZXR1cm4gdGlsZS5xdWVyeVNlbGVjdG9yKCdpbWcnKSA/XHJcbiAgICB0aWxlXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSA6ICdubyc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VUYXJnZXRQYXduID0gKHBhd24pID0+IHtcclxuICAgIHRhcmdldFBhd24gPSBwYXduO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0dhbWVTdGF0ZSA9ICgpID0+IGlzR2FtZVJ1bm5pbmc7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUdhbWVTdGF0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpc0dhbWVSdW5uaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIGlzR2FtZVJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoaXNHYW1lUnVubmluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgaXNHYW1lUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0N1cnJlbnRDb2xvdXIgPSAoKSA9PiBjdXJyZW50Q29sb3VyO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xvdXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudENvbG91ciA9PT0gJ3doaXRlJykge1xyXG4gICAgICBjdXJyZW50Q29sb3VyID0gJ2JsYWNrJztcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudENvbG91ciA9PT0gJ2JsYWNrJykge1xyXG4gICAgICBjdXJyZW50Q29sb3VyID0gJ3doaXRlJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0RmxvdyA9ICgpID0+IHtcclxuICAgIHRhcmdldFJvdyA9ICcnO1xyXG4gICAgdGFyZ2V0Q29sdW1uID0gJyc7XHJcbiAgICB0YXJnZXRQYXduID0gJyc7XHJcbiAgICBpc0dhbWVSdW5uaW5nID0gdHJ1ZTtcclxuICAgIGN1cnJlbnRDb2xvdXIgPSAnd2hpdGUnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlU2NvcmUgPSAoY29sb3VyKSA9PiB7XHJcbiAgICBpZiAoY29sb3VyID09PSAnYmxhY2snKSB7XHJcbiAgICAgIGN1cnJCbGFja1Njb3JlKys7XHJcbiAgICB9IGVsc2UgaWYgKGNvbG91ciA9PT0gJ3doaXRlJykge1xyXG4gICAgICBjdXJyV2hpdGVTY29yZSsrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0QmxhY2tTY29yZSA9ICgpID0+IGN1cnJCbGFja1Njb3JlO1xyXG5cclxuICBjb25zdCBnZXRXaGl0ZVNjb3JlID0gKCkgPT4gY3VycldoaXRlU2NvcmU7XHJcblxyXG4gIHJldHVybiB7IGdldFRhcmdldFRpbGUsXHJcbiAgICAgICAgICAgY2hhbmdlVGFyZ2V0VGlsZSxcclxuICAgICAgICAgICBnZXRUYXJnZXRQYXduLFxyXG4gICAgICAgICAgIGdldFBhd25JbWcsXHJcbiAgICAgICAgICAgY2hhbmdlVGFyZ2V0UGF3bixcclxuICAgICAgICAgICBjaGVja0dhbWVTdGF0ZSxcclxuICAgICAgICAgICBjaGFuZ2VHYW1lU3RhdGUsXHJcbiAgICAgICAgICAgY2hlY2tDdXJyZW50Q29sb3VyLFxyXG4gICAgICAgICAgIGNoYW5nZUNvbG91cixcclxuICAgICAgICAgICByZXNldEZsb3csXHJcbiAgICAgICAgICAgdXBkYXRlU2NvcmUsXHJcbiAgICAgICAgICAgZ2V0QmxhY2tTY29yZSxcclxuICAgICAgICAgICBnZXRXaGl0ZVNjb3JlfTtcclxufSkoKTsiLCJpbXBvcnQgeyBnYW1lRmxvdyB9IGZyb20gJy4vZ2FtZUZsb3cnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhd24gPSAobmFtZSwgY29sb3IsIHJvdywgY29sdW1uKSA9PiB7XHJcbiAgY29uc3QgcGF3bk5hbWUgPSBuYW1lO1xyXG4gIGNvbnN0IHBhd25Db2xvciA9IGNvbG9yO1xyXG4gIGNvbnN0IHBhd25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsZXQgcGF3blJvdyA9IHJvdztcclxuICBsZXQgcGF3bkNvbHVtbiA9IGNvbHVtbjtcclxuXHJcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHBhd25OYW1lO1xyXG4gIGNvbnN0IGdldENvbG9yID0gKCkgPT4gcGF3bkNvbG9yO1xyXG4gIGNvbnN0IGdldFJvdyA9ICgpID0+IHBhd25Sb3c7XHJcbiAgY29uc3QgZ2V0Q29sdW1uID0gKCkgPT4gcGF3bkNvbHVtbjtcclxuXHJcbiAgaWYgKGNvbG9yID09PSAnYmxhY2snKSB7XHJcbiAgICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3N2Zy9icGF3bi5zdmcnKTtcclxuICB9IGVsc2UgaWYgKGNvbG9yID09PSAnd2hpdGUnKSB7XHJcbiAgICBwYXduSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ3N2Zy9wYXduLnN2ZycpO1xyXG4gIH1cclxuXHJcbiAgcGF3bkltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc1MCcpO1xyXG4gIHBhd25JbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MCcpO1xyXG4gIHBhd25JbWcuc2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnLCBuYW1lKTtcclxuXHJcbiAgY29uc3QgcGF3bk1vdmUgPSAobmV3Um93LCBuZXdDb2x1bW4pID0+IHtcclxuICAgIHBhd25Sb3cgPSBuZXdSb3c7XHJcbiAgICBwYXduQ29sdW1uID0gbmV3Q29sdW1uO1xyXG4gICAgcGF3bkltZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwYXduSW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsY3VsYXRlTGVnYWxNb3ZlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhd25Sb3dJbnQgPSBwYXJzZUludChwYXduUm93LCAxMCk7XHJcbiAgICBsZXQgZm9yd2FyZFJvdyA9ICcnO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKGdldENvbG9yKCkgPT09ICdibGFjaycgJiYgcGF3blJvdyA9PT0gJzEnKVxyXG4gICAgICB8fCAoZ2V0Q29sb3IoKSA9PT0gJ3doaXRlJyAmJiBwYXduUm93ID09PSAnMycpKSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0Q29sb3IoKSA9PT0gJ2JsYWNrJyAmJiBwYXduUm93ICE9PSAnMScpIHtcclxuICAgICAgZm9yd2FyZFJvdyA9IHBhd25Sb3dJbnQgLSAxO1xyXG4gICAgfSBlbHNlIGlmIChnZXRDb2xvcigpID09PSAnd2hpdGUnICYmIHBhd25Sb3cgIT09ICczJykge1xyXG4gICAgICBmb3J3YXJkUm93ID0gcGF3blJvd0ludCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlRm9yd2FyZE1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvcndhcmRDb2x1bW4gPSBbXTtcclxuICAgICAgaWYgKGdhbWVGbG93LmdldFBhd25JbWcoZm9yd2FyZFJvdywgZ2V0Q29sdW1uKCksIGdldENvbG9yKCkpXHJcbiAgICAgICAgPT09ICdubycpIHtcclxuICAgICAgICBmb3J3YXJkQ29sdW1uLnB1c2goYCR7Zm9yd2FyZFJvdy50b1N0cmluZygpfSR7cGF3bkNvbHVtbn1gKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9yd2FyZENvbHVtbjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlRGlhZ29uYWxNb3ZlID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZGlhZ29uYWxDb2x1bW4gPSBbXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBhd25Db2x1bW4gPT09ICdhJyB8fCBwYXduQ29sdW1uID09PSAnYydcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZ2FtZUZsb3cuZ2V0UGF3bkltZyhmb3J3YXJkUm93LCAnYicsIGdldENvbG9yKCkpXHJcbiAgICAgICAgIT09ICdubydcclxuICAgICAgICAmJiBnYW1lRmxvdy5nZXRQYXduSW1nKGZvcndhcmRSb3csICdiJywgZ2V0Q29sb3IoKSlbMF1cclxuICAgICAgICAhPT0gZ2V0Q29sb3IoKVswXSkge1xyXG4gICAgICAgICAgZGlhZ29uYWxDb2x1bW4gPSBbJ2InXTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocGF3bkNvbHVtbiA9PT0gJ2InKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRDb2x1bW4gPSBbJ2EnLCAnYyddO1xyXG4gICAgICAgIHZhbGlkQ29sdW1uLmZvckVhY2goKGNvbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBnYW1lRmxvdy5nZXRQYXduSW1nKGZvcndhcmRSb3csIGNvbCwgZ2V0Q29sb3IoKSlcclxuICAgICAgICAgICAgIT09ICdubydcclxuICAgICAgICAgICAgJiYgZ2FtZUZsb3cuZ2V0UGF3bkltZyhmb3J3YXJkUm93LCBjb2wsIGdldENvbG9yKCkpWzBdXHJcbiAgICAgICAgICAgICE9PSBnZXRDb2xvcigpWzBdKSB7XHJcbiAgICAgICAgICAgIGRpYWdvbmFsQ29sdW1uLnB1c2goY29sKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbW92ZWFibGVUaWxlID0gW107XHJcbiAgICAgIGRpYWdvbmFsQ29sdW1uLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBtb3ZlYWJsZVRpbGUucHVzaChgJHtmb3J3YXJkUm93LnRvU3RyaW5nKCl9JHtpfWApO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1vdmVhYmxlVGlsZTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNhbGN1bGF0ZUZvcndhcmRNb3ZlKClcclxuICAgICAgLmNvbmNhdChjYWxjdWxhdGVEaWFnb25hbE1vdmUoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldE5hbWUsXHJcbiAgICBnZXRDb2xvcixcclxuICAgIGdldFJvdyxcclxuICAgIGdldENvbHVtbixcclxuICAgIHBhd25JbWcsXHJcbiAgICBwYXduTW92ZSxcclxuICAgIGNhbGN1bGF0ZUxlZ2FsTW92ZXMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXducyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYWJjID0gWydhJywgJ2InLCAnYyddO1xyXG4gIGNvbnN0IGxpc3QgPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpKyspIHtcclxuICAgIGxpc3RbYGJwYXduJHtpfWBdID0gcGF3bihgYnBhd24ke2l9YCwgJ2JsYWNrJywgJzMnLCBhYmNbaSAtIDFdKTtcclxuICAgIGxpc3RbYHdwYXduJHtpfWBdID0gcGF3bihgd3Bhd24ke2l9YCwgJ3doaXRlJywgJzEnLCBhYmNbaSAtIDFdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiBsaXN0O1xyXG5cclxuICBjb25zdCByZW1vdmVQYXduID0gKHBhd25OYW1lKSA9PiB7XHJcbiAgICBkZWxldGUgbGlzdFtwYXduTmFtZV07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRQYXducyA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGxpc3RbYGJwYXduJHtpfWBdID0gcGF3bihgYnBhd24ke2l9YCwgJ2JsYWNrJywgJzMnLCBhYmNbaSAtIDFdKTtcclxuICAgICAgbGlzdFtgd3Bhd24ke2l9YF0gPSBwYXduKGB3cGF3biR7aX1gLCAnd2hpdGUnLCAnMScsIGFiY1tpIC0gMV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGdldExpc3QsIHJlbW92ZVBhd24sIHJlc2V0UGF3bnMgfTtcclxufSkoKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSAnLi9tb2R1bGVzL2JvYXJkJztcclxuXHJcbmdhbWVCb2FyZC5kaXNwbGF5UGF3bnMoKTtcclxuWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aWxlID4gaW1nJyldXHJcbiAgLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==