module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ({

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilMaxWidthOrHeight", function() { return untilMaxWidthOrHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCopyCode", function() { return clickCopyCode; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 设置图片宽高 最大宽或者高 为300px
 * @param len
 */
function untilMaxWidthOrHeight() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var imgList = document.querySelectorAll('.detail img');

  for (var i = 0; i < imgList.length; i++) {
    if (imgList[i].width > imgList[i].height) {
      imgList[i].style.height = len + 'px';
      imgList[i].style.width = 'auto';
    } else {
      imgList[i].style.width = len + 'px';
      imgList[i].style.height = 'auto';
    }
  }
}
/**
 * 点击复制代码到剪贴板
 */

function clickCopyCode() {
  var btn = document.createElement('button');
  btn.className = 'copy-code';
  btn.title = '点击复制代码';
  btn.innerText = '';
  var preList = document.getElementsByTagName('pre');

  for (var i = 0; i < preList.length; i++) {
    var codeDom = preList[i];
    codeDom.appendChild(btn.cloneNode(true));
    codeDom.addEventListener('click', f1, false);
  }
}

function f1(e) {
  if (e.target.className === 'copy-code') {
    var emailLink = e.target.parentNode.firstElementChild; // 文字

    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';

      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success('Copy code ' + msg);
    } catch (err) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Oops, unable to copy');
    } // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported


    window.getSelection().removeAllRanges();
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ })

/******/ });