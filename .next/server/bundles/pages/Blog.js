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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* unused harmony export testAsync */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return serverRenderIncrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBlogItemList; });
/* unused harmony export asyncTest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decrementCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resetCount; });
/* harmony export (immutable) */ __webpack_exports__["d"] = initializeStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);




var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  res: []
};
var actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  TEST_ASYNC: 'TEST_ASYNC',
  CHANGE_PAGE_BLOG: 'CHANGE_PAGE_BLOG' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.CHANGE_PAGE_BLOG:
      return Object.assign({}, state, {
        BlogItemList: action.BlogItemList
      });

    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        count: state.count + 1,
        res: action.res,
        light: !!action.light
      });

    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });

    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });

    default:
      return state;
  }
};
var testAsync = function testAsync() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TEST_ASYNC:
      return action.data;

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
};
var serverRenderIncrementCount = function serverRenderIncrementCount(isServer, res) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.INCREMENT,
      light: !isServer,
      res: res,
      ts: Date.now()
    });
  };
};
var getBlogItemList = function getBlogItemList(dispatch, url) {
  return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url).then(function (res) {
    dispatch({
      type: actionTypes.INCREMENT,
      res: res.data
    });
  });
};
var asyncTest = function asyncTest(data) {
  return {
    type: actionTypes.TEST_ASYNC,
    data: data
  };
};
var startClock = function startClock(dispatch) {
  return setInterval(function () {
    // Dispatch `TICK` every 1 second
    dispatch({
      type: actionTypes.TICK,
      light: true,
      ts: Date.now()
    });
  }, 1000);
};
var incrementCount = function incrementCount(dispatch, url) {
  /* return setTimeout(() => {
     // Dispatch `TICK` every 1 second
     dispatch({ type: actionTypes.INCREMENT })
   }, 1000)*/
  return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(url).then(function (res) {
    exampleInitialState.res = res.data;
    dispatch({
      type: actionTypes.INCREMENT,
      res: res.data,
      light: true,
      ts: Date.now()
    });
  });
};
var decrementCount = function decrementCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.DECREMENT
    });
  };
};
var resetCount = function resetCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducer, initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
}

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


var Footer = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Footer;

var blogFooter = function blogFooter() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", null, " Power & Designed by liuweibo"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", null, "\xA9 2017   \u9655ICP\u590717015350\u53F7"));
};

/* harmony default export */ __webpack_exports__["a"] = (blogFooter);

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(14);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__(35);
var pagination__default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(4);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(24);
var input__default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(3);
var layout__default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(15);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__(6);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd/lib/list"
var list_ = __webpack_require__(36);
var list__default = /*#__PURE__*/__webpack_require__.n(list_);

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__(37);
var avatar__default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(38);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(23);

// CONCATENATED MODULE: ./components/ListTitle/index.js








var ListTitle_IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return external__react__default.a.createElement("span", null, external__react__default.a.createElement(icon__default.a, {
    type: type,
    style: {
      marginRight: 8
    }
  }), text);
};

var pathname = '';

var ListTitle_ListTitle = function ListTitle(_ref2) {
  var listData = _ref2.listData;
  return external__react__default.a.createElement(list__default.a, {
    itemLayout: "vertical",
    size: "large",
    dataSource: listData,
    footer: external__react__default.a.createElement("div", null, external__react__default.a.createElement("b", null, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return external__react__default.a.createElement(list__default.a.Item, {
        key: item.title,
        actions: [Object(until["b" /* formatTime */])(item.createTime), external__react__default.a.createElement(ListTitle_IconText, {
          type: "star-o",
          text: "156"
        }), external__react__default.a.createElement(ListTitle_IconText, {
          type: "like-o",
          text: item.like
        }), external__react__default.a.createElement(ListTitle_IconText, {
          type: "message",
          text: "2"
        }), external__react__default.a.createElement(ListTitle_IconText, {
          type: "eye-o",
          text: item.visitor
        })],
        extra: pathname === '' ? '' : external__react__default.a.createElement("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        })
      }, external__react__default.a.createElement(list__default.a.Item.Meta, {
        avatar: external__react__default.a.createElement(avatar__default.a, {
          src: item.avatar
        }),
        title: external__react__default.a.createElement(link__default.a, {
          as: "/p/".concat(item.id),
          href: "/post?id=".concat(item.id)
        }, external__react__default.a.createElement("a", null, item.title)),
        description: pathname === '' ? '' : item.short
      }), pathname === '' ? '' : external__react__default.a.createElement(link__default.a, {
        as: "/p/".concat(item.id),
        href: "/post?id=".concat(item.id)
      }, external__react__default.a.createElement("a", null, " \u9605\u8BFB\u5168\u6587......")));
    }
  });
};

/* harmony default export */ var components_ListTitle = (ListTitle_ListTitle);
// EXTERNAL MODULE: ./components/Footer/index.js
var Footer = __webpack_require__(26);

// CONCATENATED MODULE: ./pages/Blog/index.js








function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Content = layout__default.a.Content;
var Search = input__default.a.Search;

var Blog_Blog =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this));
    _this.state = {
      pageNum: 10,
      currentPage: 1
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "onSearch",
    value: function onSearch() {}
  }, {
    key: "onChange",
    value: function onChange(page, pageSize) {
      var dispatch = this.props.dispatch;
      this.setState({
        currentPage: page
      });
      Object(store["b" /* getBlogItemList */])(dispatch, "http://www.liuweibo.cn/getBlog?type=all&num=".concat(page, "&pageNum=10"));
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return external__react__default.a.createElement("a", null, "Previous");
      } else if (type === 'next') {
        return external__react__default.a.createElement("a", null, "Next");
      }

      return originalElement;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      return external__react__default.a.createElement("div", {
        className: "Blog"
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "blog")), external__react__default.a.createElement(Header["a" /* default */], null), external__react__default.a.createElement(layout__default.a, null, external__react__default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        }
      }, external__react__default.a.createElement(row__default.a, {
        gutter: 16
      }, external__react__default.a.createElement(col__default.a, {
        className: "gutter-row",
        span: 22
      }, external__react__default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large"
      })), external__react__default.a.createElement(col__default.a, {
        className: "gutter-row",
        span: 2
      }, external__react__default.a.createElement(link__default.a, {
        href: "/PostArticle"
      }, external__react__default.a.createElement("a", null, external__react__default.a.createElement(button__default.a, {
        size: "large",
        type: "primary"
      }, "\u53D1\u5E03\u6587\u7AE0"))))), external__react__default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        }
      }, external__react__default.a.createElement(components_ListTitle, {
        listData: this.props.res
      }), external__react__default.a.createElement(pagination__default.a, {
        total: 100,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this)
      })))), external__react__default.a.createElement(Footer["a" /* default */], null));
    }
  }]);

  return Blog;
}(external__react_["Component"]);

Blog_Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref) {
    var reduxStore, req, isServer, blogData, blogDataJson;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reduxStore = _ref.reduxStore, req = _ref.req;
            isServer = !!req;
            _context.next = 4;
            return external__isomorphic_unfetch__default()('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10');

          case 4:
            blogData = _context.sent;
            _context.next = 7;
            return blogData.json();

          case 7:
            blogDataJson = _context.sent;
            reduxStore.dispatch(Object(store["g" /* serverRenderIncrementCount */])(isServer, blogDataJson));
            return _context.abrupt("return", {});

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var res = state.res;
  return {
    res: res
  };
};

/* harmony default export */ var pages_Blog = __webpack_exports__["default"] = (Object(external__react_redux_["connect"])(mapStateToProps)(Blog_Blog));

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ })
/******/ ]);