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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* unused harmony export getArticleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHtml; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var format = __webpack_require__(25);

var updateHtml = function updateHtml(str) {
  return str.replace(/'|"|:|\.|\[|\]|\\/g, function (str) {
    if (str === '"') {
      return '@quot;';
    } else if (str === "'") {
      return '@apos;';
    } else if (str === ':') {
      return '&#58;';
    } else if (str === '[') {
      return '&#91;';
    } else if (str === '[') {
      return '&#93;';
    } else if (str === '\\') {
      //自定义的 找不到
      return '&#43;';
    } else {
      return '&#183;';
    }
  });
};
var spaceAdd = function spaceAdd(str) {
  return str && str.replace(/\+/g, '&nbsp;');
};
var getPathName = function getPathName(props) {
  return props.location && props.location.pathname && props.location.pathname.substring(1);
};
var NbspToSpace = function NbspToSpace(str) {
  return str && str.replace(/&nbsp;/g, '　');
};
var formatTime = function formatTime(time) {
  var zh = ["日", "一", "二", "三", "四", "五", "六"];
  var date = new Date(time * 1000);
  return format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()];
};
var getArticleInfo = function getArticleInfo(detailArr) {
  var _ref = detailArr && detailArr[0] ? detailArr[0] : {},
      rest = _extends({}, _ref);
  /*{
      content,
          createTime,
          id,
          img,
          lastModify,
          like,
          modifyCount,
          recommend,
          short,
          title,
          type,
          url,
          user,
          visitor,
          week
  }*/


  return rest;
};
var OldTime = 1526625828; // 2018-05-18 14:43 星期五

var getHtml = function getHtml(str, newTime) {
  if (OldTime > newTime) {
    //这是曾经的文章
    return str ? str : null;
  } else {
    return str ? str.replace(/@quot;|@apos;/g, function (str) {
      if (str === '@quot;') {
        return '"';
      } else if (str === "@apos;") {
        return "'";
      }
    }) : null;
  }
};

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),
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
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(14);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(3);
var layout__default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(23);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(15);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__(6);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(46);
var divider__default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(13);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/ArticleTitle/index.js





var ArticleTitle_ArticleTitle = function ArticleTitle(_ref) {
  var _ref$detailArticle = _ref.detailArticle,
      detailArticle = _ref$detailArticle === void 0 ? {} : _ref$detailArticle;
  var title = detailArticle.title,
      createTime = detailArticle.createTime,
      user = detailArticle.user,
      visitor = detailArticle.visitor,
      lastModify = detailArticle.lastModify,
      modifyCount = detailArticle.modifyCount;
  return external__react__default.a.createElement("div", {
    className: "jsx-3877631247"
  }, external__react__default.a.createElement("h2", {
    className: "jsx-3877631247"
  }, title), external__react__default.a.createElement("ul", {
    className: "jsx-3877631247" + " " + "clearfix detail-info"
  }, external__react__default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", Object(until["b" /* formatTime */])(createTime)), external__react__default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u4F5C\u8005\uFF1A", user), external__react__default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u6D4F\u89C8\u6B21\u6570\uFF1A", visitor), external__react__default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u6700\u540E\u4FEE\u6539\uFF1A", Object(until["b" /* formatTime */])(lastModify)), external__react__default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u4FEE\u6539\u6B21\u6570\uFF1A", modifyCount)), external__react__default.a.createElement(divider__default.a, null), external__react__default.a.createElement(style__default.a, {
    styleId: "3877631247",
    css: [".detail-info.jsx-3877631247 li.jsx-3877631247{margin-right:20px;}"]
  }));
};

/* harmony default export */ var components_ArticleTitle = (ArticleTitle_ArticleTitle);
// CONCATENATED MODULE: ./pages/post/index.js




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Content = layout__default.a.Content;

var post_Post = function Post(props) {
  console.log(props);
  var blogData = props.blogData;
  var _blogData$ = blogData[0],
      content = _blogData$.content,
      createTime = _blogData$.createTime;
  return external__react__default.a.createElement("div", {
    className: "detail"
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "blog")), external__react__default.a.createElement(Header["a" /* default */], null), external__react__default.a.createElement(layout__default.a, null, external__react__default.a.createElement(Content, {
    style: {
      padding: '0 50px'
    }
  }, external__react__default.a.createElement("div", {
    style: {
      background: '#fff',
      padding: 24,
      minHeight: 380
    }
  }, external__react__default.a.createElement(components_ArticleTitle, {
    detailArticle: blogData[0]
  }), external__react__default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: createTime > until["a" /* OldTime */] ? marked(Object(until["c" /* getHtml */])(decodeURIComponent(content), createTime), {
        breaks: true
      }) : Object(until["c" /* getHtml */])(decodeURIComponent(content), createTime)
    }
  })))));
};

post_Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(context) {
    var id, blog, blogData;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return external__isomorphic_unfetch__default()("http://www.liuweibo.cn/detail?id=".concat(id));

          case 3:
            blog = _context.sent;
            _context.next = 6;
            return blog.json();

          case 6:
            blogData = _context.sent;
            return _context.abrupt("return", {
              blogData: blogData
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var post = __webpack_exports__["default"] = (post_Post);

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ })
/******/ ]);