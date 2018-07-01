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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(9);
var menu__default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(3);
var layout__default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__(10);
var breadcrumb__default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(4);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/alert"
var alert_ = __webpack_require__(11);
var alert__default = /*#__PURE__*/__webpack_require__.n(alert_);

// CONCATENATED MODULE: ./components/TopTips/index.js





var TopTips_TopTips = function TopTips(props) {
  return external__react__default.a.createElement("div", {
    className: "Blog"
  }, external__react__default.a.createElement(alert__default.a, {
    message: "\u535A\u5BA2\u6B63\u5728\u91CD\u6784\u548C\u5F00\u53D1\u4E2D......",
    type: "warning",
    closable: true,
    banner: true
  }), external__react__default.a.createElement("div", null, external__react__default.a.createElement(button__default.a, {
    href: "https://github.com/Weibozzz/react-blog",
    icon: "github"
  }, "Github")), external__react__default.a.createElement(breadcrumb__default.a, {
    style: {
      margin: '16px 0'
    }
  }, external__react__default.a.createElement(breadcrumb__default.a.Item, null, "\u7F51\u7AD9\u9996\u9875"), external__react__default.a.createElement(breadcrumb__default.a.Item, null, "\u524D\u7AEF\u6280\u672F"), external__react__default.a.createElement(breadcrumb__default.a.Item, null, "171")));
};

/* harmony default export */ var components_TopTips = (TopTips_TopTips);
// CONCATENATED MODULE: ./components/Header/index.js








var Header = layout__default.a.Header,
    Content = layout__default.a.Content;

var Header_TopNav = function TopNav(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("meta", {
    charSet: "utf-8"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css"
  })), external__react__default.a.createElement(layout__default.a, null, external__react__default.a.createElement(Header, {
    style: {
      position: 'fixed',
      height: '64px',
      width: '100%',
      padding: 0,
      zIndex: 10
    }
  }, external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(col__default.a, {
    span: 2
  }), external__react__default.a.createElement(col__default.a, {
    span: 17
  }, external__react__default.a.createElement(menu__default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    }
  }, external__react__default.a.createElement(menu__default.a.Item, {
    key: "1"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", null, "\u7F51\u7AD9\u9996\u9875"))), external__react__default.a.createElement(menu__default.a.Item, {
    key: "2"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/Blog"
  }, external__react__default.a.createElement("a", null, "\u6587\u7AE0\u5217\u8868"))), external__react__default.a.createElement(menu__default.a.Item, {
    key: "3"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/Admin"
  }, external__react__default.a.createElement("a", null, "\u524D\u7AEF\u6280\u672F"))), external__react__default.a.createElement(menu__default.a.Item, {
    key: "4"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/Life"
  }, external__react__default.a.createElement("a", null, " \u751F\u6D3B\u4E0E\u521B\u4F5C"))), external__react__default.a.createElement(menu__default.a.Item, {
    key: "5"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/Test"
  }, external__react__default.a.createElement("a", null, "\u5EFA\u8BAE\u4E0E\u53CD\u9988"))), external__react__default.a.createElement(menu__default.a.Item, {
    key: "6"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/PostArticle"
  }, external__react__default.a.createElement("a", null, "\u53D1\u5E03\u6587\u7AE0"))))))), external__react__default.a.createElement(Content, {
    style: {
      padding: '0 50px',
      marginTop: 64
    }
  }, external__react__default.a.createElement(components_TopTips, null))));
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_TopNav);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(13);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__(6);

// CONCATENATED MODULE: ./components/MyLayout.js


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var MyLayout_Layout = function Layout(props) {
  console.log(props);
  return external__react__default.a.createElement("div", {
    style: layoutStyle
  }, external__react__default.a.createElement(Header["a" /* default */], null), props.children);
};

/* harmony default export */ var MyLayout = (MyLayout_Layout);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(42);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(43);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// CONCATENATED MODULE: ./pages/markdown.js





/* harmony default export */ var markdown = __webpack_exports__["default"] = (Object(router_["withRouter"])(function (props) {
  return external__react__default.a.createElement(MyLayout, null, external__react__default.a.createElement("h1", {
    className: "jsx-3267370368"
  }, props.router.query.title), external__react__default.a.createElement("div", {
    className: "jsx-3267370368" + " " + "markdown"
  }, external__react__default.a.createElement(external__react_markdown__default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\n# git\u547D\u4EE4\n## \u521D\u59CB\u5316\n\u8BBE\u7F6E\u7528\u6237\u540D\uFF0C\u90AE\u7BB1\n```bash\ngit config --global user.name \"Author Name\"\ngit config --global user.email \"Author Email\"\n```\n\u67E5\u770B\u90AE\u7BB1\u7528\u6237\u540D\u7B49\u9009\u9879\n```bash\ngitc onfig --list\n```\n\n\u521D\u59CB\u5316\u4E00\u4E2AGit\u4ED3\u5E93\uFF0C\u4F7F\u7528`git init`\u547D\u4EE4\u3002\n\u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git add .`,\u6DFB\u52A0\u5168\u90E8 \uFF0C\u6CE8\u610F\uFF0C\u53EF\u53CD\u590D\u591A\u6B21\u4F7F\u7528\uFF0C\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\uFF1B\n\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git commit -m \"\u63D0\u4EA4\u7684\u6CE8\u91CA\"`\uFF0C\u5B8C\u6210\u3002\n\n\nAnd here's the content.\n     "
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "3267370368",
    css: [".markdown{font-family:'Arial';}", ".markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}", ".markdown a:hover{opacity:0.6;}", ".markdown h3{margin:0;padding:0;text-transform:uppercase;}"]
  }));
}));

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ })
/******/ ]);