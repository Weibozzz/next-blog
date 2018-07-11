module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/hljs");

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(37);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// EXTERNAL MODULE: external "react-lowlight"
var external__react_lowlight_ = __webpack_require__(78);
var external__react_lowlight__default = /*#__PURE__*/__webpack_require__.n(external__react_lowlight_);

// EXTERNAL MODULE: external "react-addons-shallow-compare"
var external__react_addons_shallow_compare_ = __webpack_require__(79);
var external__react_addons_shallow_compare__default = /*#__PURE__*/__webpack_require__.n(external__react_addons_shallow_compare_);

// EXTERNAL MODULE: external "highlight.js/lib/languages/javascript"
var javascript_ = __webpack_require__(80);
var javascript__default = /*#__PURE__*/__webpack_require__.n(javascript_);

// CONCATENATED MODULE: ./components/TestComponent/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





external__react_lowlight__default.a.registerLanguage('js', javascript__default.a);

var TestComponent_CodeBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(CodeBlock, _Component);

  function CodeBlock(props) {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).call(this, props));
  }

  _createClass(CodeBlock, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return external__react_addons_shallow_compare__default()(this, nextProps, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__react_lowlight__default.a, {
        language: this.props.language || 'js',
        value: this.props.literal,
        inline: this.props.inline
      });
    }
  }]);

  return CodeBlock;
}(external__react_["Component"]);
/*const CodeBlock = React.createClass({
  displayName: 'CodeBlock',

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  },

  render: function() {
    return (
      <Lowlight
        language={this.props.language || 'js'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    );
  }
});*/


/* harmony default export */ var TestComponent = (TestComponent_CodeBlock);
// EXTERNAL MODULE: external "react-syntax-highlighter/styles/hljs"
var hljs_ = __webpack_require__(38);
var hljs__default = /*#__PURE__*/__webpack_require__.n(hljs_);

// EXTERNAL MODULE: external "react-syntax-highlighter/prism"
var prism_ = __webpack_require__(81);
var prism__default = /*#__PURE__*/__webpack_require__.n(prism_);

// EXTERNAL MODULE: external "react-syntax-highlighter/styles/prism"
var styles_prism_ = __webpack_require__(82);
var styles_prism__default = /*#__PURE__*/__webpack_require__.n(styles_prism_);

// CONCATENATED MODULE: ./pages/Test2/index.js
function Test2__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Test2__typeof = function _typeof(obj) { return typeof obj; }; } else { Test2__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Test2__typeof(obj); }

function Test2__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Test2__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Test2__createClass(Constructor, protoProps, staticProps) { if (protoProps) Test2__defineProperties(Constructor.prototype, protoProps); if (staticProps) Test2__defineProperties(Constructor, staticProps); return Constructor; }

function Test2__possibleConstructorReturn(self, call) { if (call && (Test2__typeof(call) === "object" || typeof call === "function")) { return call; } return Test2__assertThisInitialized(self); }

function Test2__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Test2__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // import SyntaxHighlighter from 'react-syntax-highlighter';




var input = "\n# h1\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n\nReact.render(\n  <Markdown source=\"# Your markdown here\" />,\n  document.getElementById('content')\n);\n```\n\n";

var Test2_Test2 =
/*#__PURE__*/
function (_Component) {
  Test2__inherits(Test2, _Component);

  function Test2() {
    Test2__classCallCheck(this, Test2);

    return Test2__possibleConstructorReturn(this, (Test2.__proto__ || Object.getPrototypeOf(Test2)).call(this));
  }

  Test2__createClass(Test2, [{
    key: "render",
    value: function render() {
      var codeString = '(num) => num + 1';
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(prism__default.a, {
        language: "javascript",
        style: styles_prism_["dark"]
      }, input), ";");
    }
  }]);

  return Test2;
}(external__react_["Component"]);

/* harmony default export */ var pages_Test2 = __webpack_exports__["default"] = (Test2_Test2);

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("react-lowlight");

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/prism");

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/prism");

/***/ })

/******/ });