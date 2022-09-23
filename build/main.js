/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dropdownBtn = document.getElementById("dropdown-btn");
var dropdownText = document.getElementById("dropdown-text");
var dropdownList = document.getElementById("dropdown-list");
var dropdownIcon = document.getElementById("dropdown-arrow");
var allMails;
fetch("./json/maildata.json").then(function (response) {
  return response.json();
}).then(function (data) {
  allMails = data;
  allMails.slice(0, 5).map(function (i) {
    var dropdownHtml = "<li><a href=\"javascript:void(0)\">".concat(i.name, "</a></li>");
    dropdownList.insertAdjacentHTML("beforeend", dropdownHtml);
  });
  dropdownText.textContent = dropdownList.children[0].textContent;
})["catch"](function (err) {
  return console.log(err);
});
dropdownBtn.addEventListener("click", function (e) {
  dropdownList.classList.toggle("hidden");

  var _iterator = _createForOfIteratorHelper(dropdownList.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      i = _step.value;

      if (i.textContent == dropdownText.textContent) {
        i.classList.add("active");
      } else {
        i.classList.remove("active");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
dropdownList.addEventListener("click", function (e) {
  var btn = e.target;
  dropdownText.innerText = btn.innerText;
  dropdownList.classList.add("hidden");
  btn.classList.add("active");
});
window.addEventListener("click", function (e) {
  if (e.target != dropdownBtn && e.target != dropdownText && e.target != dropdownIcon) {
    dropdownList.classList.add("hidden");
  }
});

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var category = document.getElementById("category");
var filters = document.getElementById("filter-btn");
var mailList = document.getElementById("mail-list");
var allMails;
fetch("./json/maildata.json").then(function (response) {
  return response.json();
}).then(function (data) {
  allMails = data;
  allMails ? addList(allMails) : skeleton(3);
  ;
})["catch"](function (error) {
  return console.log(error);
});
category.addEventListener("click", function (e) {
  var btnId = e.target;
  console.log(btnId);
});
filters.addEventListener("click", function (e) {
  var btnId = e.target.id;

  switch (btnId) {
    case "personal":
      filter("personal");
      break;

    case "clients":
      filter("clients");
      break;

    case "family":
      filter("family");
      break;

    case "friends":
      filter("friends");
      break;

    case "archives":
      filter("archives");
      break;
  }

  e.target.classList.add("active");
});

function addList(items) {
  items.map(function (i) {
    var date = new Date(i.time);
    var mailDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var mailTime = date.getHours() + ":" + date.getMinutes();
    var a = "\n        <li>\n            <div class=\"row\">\n                <h2 class=\"heading col\">".concat(i.title, "</h2><span class=\"col time\">").concat(mailTime, "</span>\n            </div>\n            <div class=\"row\">\n                <span class=\"title col\">").concat(i.name, "</span>\n                <div class=\"mail-info\">\n                    ").concat(i.reply ? "<span><i class=\"fa-solid fa-paperclip\"></i></span>" : "", "\n                    ").concat(i.attachment ? "<span><i class=\"fa-solid fa-share\"></i></span>" : "", "\n                    <span class=\"filter-icon ").concat(i.filter, "\"></span>\n                </div>   \n            </div>\n        </li>\n    ");
    mailList.insertAdjacentHTML("beforeend", a);
  });
}

function filter(filter) {
  mailList.innerHTML = "";
  addList(allMails.filter(function (i) {
    return i.filter == filter;
  }));
  var linkBtn = filters.children;

  var _iterator = _createForOfIteratorHelper(filters.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      i = _step.value;
      linkBtn[i].children[0].classList.remove("active");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // function notification(arr){
//     return arr.filter(item=>item.number?item:"").length
// }


function skeleton(num) {
  var a = "<li class=\"skeleton\"> \n                <div></div><div></div>\n            </li>";

  for (var _i = 0; _i < num; _i++) {
    mailList.insertAdjacentHTML("beforeend", a);
  }
}

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/***/ (() => {

var searchInput = document.getElementById("search");
var searchList = document.getElementById("data-list");
searchInput.addEventListener("click", function (e) {
  if (searchList.classList.contains("hidden")) {
    searchList.classList.remove("hidden");
    searchInput.classList.add("active");
  } else {
    searchList.classList.add("hidden");
    searchInput.classList.remove("active");
  }
});
searchInput.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    searchList.classList.add("hidden");
    searchInput.classList.remove("active");
  }
});
searchInput.addEventListener("focus", function (e) {
  searchList.classList.remove("hidden");
  searchInput.classList.add("active");
});
searchList.addEventListener("click", function (e) {
  searchInput.value = e.target.innerText;
  searchList.classList.add("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target != searchInput && e.target != searchList) {
    searchInput.classList.remove("active");
    searchList.classList.add("hidden");
  }
});

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/random.jpg":
/*!*******************************!*\
  !*** ./src/images/random.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/random.jpg";

/***/ }),

/***/ "./src/js/json/maildata.json":
/*!***********************************!*\
  !*** ./src/js/json/maildata.json ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "json/maildata.json";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _images_random_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/random.jpg */ "./src/images/random.jpg");
/* harmony import */ var _json_maildata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/maildata.json */ "./src/js/json/maildata.json");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ "./src/js/dropdown.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ "./src/js/search.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;
//# sourceMappingURL=main.js.map