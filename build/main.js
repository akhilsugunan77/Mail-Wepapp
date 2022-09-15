/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ (() => {

var filters = document.getElementById("filter-btn");
var mailList = document.getElementById("mail-list");
var allMails;
fetch("./json/maildata.json").then(function (response) {
  return response.json();
}).then(function (data) {
  allMails = data;
  allMails ? addList(allMails) : skeleton(7);
  ;
});
filters.addEventListener("click", function (e) {
  var btnId = e.target.id;

  switch (btnId) {
    case "personal":
      filter("personal");
      e.target.focus();
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

    case "archive":
      filter("archive");
      break;
  }
});

function addList(items) {
  items.map(function (i) {
    var a = "\n        <li>\n            <div class=\"row\">\n                <h2 class=\"heading col\">".concat(i.title, "</h2><span class=\"col time\">").concat(i.time ? i.time : i.date, "</span>\n            </div>\n            <div class=\"row\">\n                <span class=\"title col\">").concat(i.name, "</span>\n                <div class=\"mail-info\">\n                    ").concat(i.reply ? "<span><i class=\"fa-solid fa-paperclip\"></i></span>" : "", "\n                    ").concat(i.attachment ? "<span><i class=\"fa-solid fa-share\"></i></span>" : "", "\n                    <span class=\"filter-icon ").concat(i.filter, "\"></span>\n                </div>   \n            </div>\n        </li>\n    ");
    mailList.insertAdjacentHTML("beforeend", a);
  });
}

function filter(filter) {
  mailList.innerHTML = "";
  addList(allMails.filter(function (i) {
    return i.filter == filter;
  }));
} // function notification(arr){
//     return arr.filter(item=>item.number?item:"").length
// }


function skeleton(num) {
  var a = "<li class=\"skeleton\"></li>";

  for (var i = 0; i < num; i++) {
    mailList.insertAdjacentHTML("beforeend", a);
  }
}

/***/ }),

/***/ "./src/js/mail-list.js":
/*!*****************************!*\
  !*** ./src/js/mail-list.js ***!
  \*****************************/
/***/ (() => {



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
/* harmony import */ var _mail_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-list */ "./src/js/mail-list.js");
/* harmony import */ var _mail_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mail_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_filter__WEBPACK_IMPORTED_MODULE_4__);

 // import "./input";




})();

/******/ })()
;
//# sourceMappingURL=main.js.map