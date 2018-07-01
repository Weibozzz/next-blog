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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(13);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/clock.js


/* harmony default export */ var clock = (function (_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return external__react__default.a.createElement("div", {
    className: "jsx-3148902309" + " " + ((light ? 'light' : '') || "")
  }, format(new Date(lastUpdate)), external__react__default.a.createElement(style__default.a, {
    styleId: "3148902309",
    css: ["div.jsx-3148902309{padding:15px;display:inline-block;color:#82FA58;font:50px menlo,monaco,monospace;background-color:#000;}", ".light.jsx-3148902309{background-color:#999;}"]
  }));
});

var format = function format(t) {
  return "".concat(pad(t.getUTCHours()), ":").concat(pad(t.getUTCMinutes()), ":").concat(pad(t.getUTCSeconds()));
};

var pad = function pad(n) {
  return n < 10 ? "0".concat(n) : n;
};
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./pages/index/index.js
var index = __webpack_require__(22);

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(12);

// CONCATENATED MODULE: ./components/counter.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var counter_Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "increment", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        console.log(_this.props); // dispatch(incrementCount('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10'))

        Object(store["c" /* incrementCount */])(dispatch, 'http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "decrement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        dispatch(Object(store["a" /* decrementCount */])());
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "reset", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var dispatch = _this.props.dispatch;
        dispatch(Object(store["e" /* resetCount */])());
      }
    }), _temp));
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch; // this.timer = startClock(dispatch)
      //console.log(asyncTest(dispatch))
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          count = _props.count,
          _props$res = _props.res,
          res = _props$res === void 0 ? [] : _props$res;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("h1", null, "Count: ", external__react__default.a.createElement("span", null, count)), external__react__default.a.createElement("button", {
        onClick: this.increment
      }, "+1"), external__react__default.a.createElement("button", {
        onClick: this.decrement
      }, "-1"), external__react__default.a.createElement("button", {
        onClick: this.reset
      }, "Reset"), external__react__default.a.createElement("ul", null, res.map(function (v) {
        return external__react__default.a.createElement("li", {
          key: v.id
        }, external__react__default.a.createElement(link__default.a, {
          as: "/p/".concat(v.id),
          href: "/post?id=".concat(v.id)
        }, external__react__default.a.createElement("a", null, v.title)));
      }), external__react__default.a.createElement("li", null, "2232")));
    }
  }]);

  return Counter;
}(external__react__default.a.Component);

function mapStateToProps(state) {
  var count = state.count,
      res = state.res,
      light = state.light;
  return {
    count: count,
    res: res,
    light: light
  };
}

/* harmony default export */ var counter = (Object(external__react_redux_["connect"])(mapStateToProps)(counter_Counter));
// CONCATENATED MODULE: ./components/examples.js





function Examples(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(clock, {
    lastUpdate: lastUpdate,
    light: light
  }), external__react__default.a.createElement(counter, null));
}

function examples_mapStateToProps(state) {
  var lastUpdate = state.lastUpdate,
      light = state.light;
  return {
    lastUpdate: lastUpdate,
    light: light
  };
}

/* harmony default export */ var examples = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(examples_mapStateToProps)(Examples));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_switch__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_examples__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Header__ = __webpack_require__(6);




function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      this.timer = Object(__WEBPACK_IMPORTED_MODULE_6__store_store__["h" /* startClock */])(dispatch);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("title", null, "\u5218\u4F1F\u6CE2\u535A\u5BA2")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Header__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_examples__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_button___default.a, {
        type: "primary"
      }, "Primary"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_switch___default.a, {
        defaultChecked: true,
        name: "switch"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var reduxStore, req, isServer, blogData, blogDataJson;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = _ref.reduxStore, req = _ref.req;
                isServer = !!req;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10');

              case 4:
                blogData = _context.sent;
                _context.next = 7;
                return blogData.json();

              case 7:
                blogDataJson = _context.sent;
                reduxStore.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__store_store__["f" /* serverRenderClock */])(isServer));
                reduxStore.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__store_store__["g" /* serverRenderIncrementCount */])(isServer, blogDataJson));
                return _context.abrupt("return", {});

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])()(Index));

/***/ }),
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ })
/******/ ]);