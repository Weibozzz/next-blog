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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
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
/* 15 */,
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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(13);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(29);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(14);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(12);

// CONCATENATED MODULE: ./lib/with-redux-store.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(store["d" /* initializeStore */])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(store["d" /* initializeStore */])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_store = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
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

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, (AppWithRedux.__proto__ || Object.getPrototypeOf(AppWithRedux)).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return external__react__default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(external__react__default.a.Component)
  );
});
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(1);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: ./asserts/styles.less
var styles = __webpack_require__(30);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./pages/_app.js


function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app__inherits(MyApp, _App);

  function MyApp() {
    _app__classCallCheck(this, MyApp);

    return _app__possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _app__createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          reduxStore = _props.reduxStore;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: reduxStore
      }, external__react__default.a.createElement(Component, pageProps)), external__react__default.a.createElement(style__default.a, {
        styleId: "1424464926",
        css: ["pre{background-color:#f5f5f5;border:1px solid #ccc;}", ".fl{float:left;}", ".fr{float:right;}", ".clearfix:after{content:'';clear:both;display:block;}", "ul{margin:0;padding:0;}", "li{list-style:none;}", "#root,.container{height:100%;min-height:100%;}", ".container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f0f2f5;}", ".mid-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"]
      }));
    }
  }]);

  return MyApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(_app_MyApp));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 30 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);