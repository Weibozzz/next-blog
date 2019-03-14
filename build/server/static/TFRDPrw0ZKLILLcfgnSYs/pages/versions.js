module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rc_queue_anim__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(124);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3);
/* harmony import */ var _config_githubApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54);










function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








 // import {obj, users} from './mockData';


var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_8___default.a.Content;

var Versions =
/*#__PURE__*/
function (_Component) {
  _inherits(Versions, _Component);

  function Versions(props) {
    var _this;

    _classCallCheck(this, Versions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Versions).call(this, props));
    _this.state = {
      versions: [],
      users: {},
      isMobile: false
    };
    return _this;
  }

  _createClass(Versions, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var availWidth, blog, userData, data, users, versions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                availWidth = window.screen.availWidth;
                availWidth < 768 && this.setState({
                  isMobile: true
                });
                _context.next = 4;
                return fetch(_config_githubApi__WEBPACK_IMPORTED_MODULE_17__[/* githubApiCommits */ "b"]);

              case 4:
                blog = _context.sent;
                _context.next = 7;
                return fetch(_config_githubApi__WEBPACK_IMPORTED_MODULE_17__[/* githubApiUser */ "d"]);

              case 7:
                userData = _context.sent;
                _context.next = 10;
                return blog.json();

              case 10:
                data = _context.sent;
                _context.next = 13;
                return userData.json();

              case 13:
                users = _context.sent;
                versions = Array.isArray(data) ? data.map(function (v) {
                  var html_url = v.html_url,
                      commit = v.commit,
                      sha = v.sha,
                      _v$author = v.author,
                      outAuthor = _v$author === void 0 ? {} : _v$author;

                  var _ref = outAuthor || {},
                      _ref$avatar_url = _ref.avatar_url,
                      avatar_url = _ref$avatar_url === void 0 ? '' : _ref$avatar_url,
                      _ref$login = _ref.login,
                      login = _ref$login === void 0 ? '' : _ref$login,
                      github_html_url = _ref.html_url;

                  var message = commit.message,
                      author = commit.author;
                  var date = author.date;
                  return {
                    html_url: html_url,
                    message: message,
                    date: +new Date(date),
                    sha: sha.substring(0, 7),
                    avatar_url: avatar_url,
                    login: login,
                    github_html_url: github_html_url
                  };
                }) : data;
                this.setState({
                  versions: versions,
                  users: users
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "getHoverTips",
    value: function getHoverTips() {
      var users = this.state.users;
      var bio = users.bio,
          company = users.company,
          location = users.location,
          name = users.name,
          login = users.login,
          avatar_url = users.avatar_url;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          width: 350
        },
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "fl"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "large",
        icon: "user",
        src: avatar_url
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "fl",
        style: {
          marginLeft: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, name, " ", login), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, bio), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "environment",
        theme: "outlined"
      }), " ", location, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
        type: "team",
        theme: "filled"
      }), " ", company)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          versions = _this$state.versions,
          isMobile = _this$state.isMobile;
      var mode = isMobile ? 'left' : 'alternate';
      console.log('mode', mode);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", null, _config_constantsData__WEBPACK_IMPORTED_MODULE_16__[/* VERSIONS_TXT */ "O"], "\xBB", _config_constantsData__WEBPACK_IMPORTED_MODULE_16__[/* COMMON_TITLE */ "n"])), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: 30
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "\u672C\u7F51\u7AD9\u66F4\u65B0\u65E5\u5FD7")), Array.isArray(versions) && !versions.length && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: '50%',
          top: '20%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_4___default.a, {
        tip: "Loading..."
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_10___default.a, {
        component: antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a,
        style: {
          width: '80%',
          margin: '30px auto'
        },
        componentProps: {
          mode: mode
        }
      }, Array.isArray(versions) ? versions.map(function (v, index) {
        var html_url = v.html_url,
            message = v.message,
            date = v.date,
            sha = v.sha,
            avatar_url = v.avatar_url;
        var momentDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(date);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: index
        }, "Commits on ", momentDate.format('LLLL'), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: html_url
        }, message)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
          placement: "topLeft",
          content: _this2.getHoverTips(),
          trigger: "hover"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          size: "small",
          icon: "user",
          src: avatar_url
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          style: {
            marginLeft: 8
          }
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: _config_githubApi__WEBPACK_IMPORTED_MODULE_17__[/* ALL_COMMITS */ "a"]
        }, "Weibozzz"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          style: {
            marginLeft: 8
          }
        }, "committed on ", momentDate.fromNow())))));
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, versions.message)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          margin: '10px',
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: _config_githubApi__WEBPACK_IMPORTED_MODULE_17__[/* ALL_COMMITS */ "a"]
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, null, "All Commits"))))));
    }
  }]);

  return Versions;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Versions);

/***/ }),

/***/ 124:
/***/ (function(module, exports) {



/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var MyLayout = function MyLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "article-content-wrapper",
    sm: {
      span: 24,
      offset: 0
    },
    xs: {
      span: 24,
      offset: 0
    },
    lg: {
      span: 20,
      offset: 2
    }
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", null, "\n      .article-content-wrapper{\n      background-color: #fff;\n      }\n\n      "));
};

/* harmony default export */ __webpack_exports__["a"] = (MyLayout);

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return MIIT_BEIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DEV_DOMAIN; });
/* unused harmony export DEV_DOMAIN_4324 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return MY_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ONLINE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ONLINE_GITBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LINK_ABOUT_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UPLOAD_MAX_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GITHUB_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return TOP_TIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ABOUT_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return VERSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return VERSIONS_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DOCS_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return MENU_RULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return INDEX_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return INDEX_ENGLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BG_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return defaultTimer; });
/* unused harmony export ARTICLE_TYPE_ICON */
/* unused harmony export LIFE_IMAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return POST_ARTICLE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COMMENT_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COLORS_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return POST_ARTICLE_COPY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return POST_READING_STATEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return COMMENT_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return commentPlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return COMMENT_TIPS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _MENU_RULE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var dev = "production" !== 'production'; //备案地址

var MIIT_BEIAN = 'http://www.miitbeian.gov.cn'; //請求地址

var DEV_DOMAIN = 'http://localhost:7654/';
var DEV_DOMAIN_4324 = 'http://localhost:4324';
var MY_BLOG = dev ? DEV_DOMAIN_4324 : 'http://www.liuweibo.cn';
var ONLINE_DOMAIN = MY_BLOG + ':7654';
var ONLINE_GITBOOK = MY_BLOG + ':4321';
var LINK_ABOUT_ME = MY_BLOG + 'p/146'; // 图片大于这个数会先压缩在上传到七牛云，单位M

var UPLOAD_MAX_SIZE = 1; //github地址

var GITHUB_ADDRESS = 'https://github.com/Weibozzz/next-blog';
var TOP_TIPS = '欢迎来到刘伟波个人网站，喜欢可以收藏哦!'; //分页数

var pageNum = 10;
var TITLE = 'title';
var ARTICLE = 'article';
var ALL = 'all'; //导航路由

var INDEX = '/';
var INDEX_TXT = '网站首页';
var BLOG = '/blog';
var BLOG_TXT = '文章列表';
var ADMIN = '/admin';
var ADMIN_TXT = '后台管理';
var LIFE = '/life';
var LIFE_TXT = '生活记录';
var ABOUT = '/about';
var ABOUT_TXT = '关于我';
var POST_ARTICLE = '/postArticle';
var POST_ARTICLE_TXT = '发布文章';
var VERSIONS = '/versions';
var VERSIONS_TXT = '更新日志';
var DOCS_TXT = '文档中心';
var MENU_RULE = (_MENU_RULE = {
  '/': [BLOG_TXT]
}, _defineProperty(_MENU_RULE, BLOG, [BLOG_TXT]), _defineProperty(_MENU_RULE, '我的收藏', [BLOG_TXT]), _defineProperty(_MENU_RULE, LIFE, [LIFE_TXT]), _defineProperty(_MENU_RULE, ABOUT, [ABOUT_TXT]), _defineProperty(_MENU_RULE, POST_ARTICLE, [POST_ARTICLE_TXT]), _defineProperty(_MENU_RULE, ADMIN, [ADMIN_TXT]), _defineProperty(_MENU_RULE, VERSIONS, [VERSIONS_TXT]), _MENU_RULE); //seo

var COMMON_TITLE = '刘伟波-天天向上';
var INDEX_TITLE = '刘伟波的个人网站';
var INDEX_ENGLISH = 'Liu WeiBo\'s Personal Website';
var KEYWORDS = '刘伟波, 个人网站,个人博客,  web前端';
var Description = '刘伟波的个人网站，刘伟波的技术作品，刘伟波的生活成长'; //首页背景
// http://images.static.liuweibo.cn
// http://pbw4yrlys.bkt.clouddn.com

var BG_INDEX = [{
  key: '西安钟楼',
  value: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
}, {
  key: '上海东方明珠',
  value: 'http://images.static.liuweibo.cn/image/index/dongfangmingzhu.jpg'
}, {
  key: '华山',
  value: 'http://images.static.liuweibo.cn/image/index/huashan.jpg'
}, {
  key: '明德楼',
  value: 'http://images.static.liuweibo.cn/image/index/mindelou.jpg'
}, {
  key: '韩城古城',
  value: 'http://images.static.liuweibo.cn/image/index/hanchegngucheng.jpg'
}, {
  key: '韩城司马迁',
  value: 'http://images.static.liuweibo.cn/image/index/simaqina.jpg'
}, {
  key: '韩城美食',
  value: 'http://images.static.liuweibo.cn/image/index/hanchegnmeishi.jpg'
}]; //首页切换时间

var defaultTimer = 10000; //文章分类图片icon

var ARTICLE_TYPE_ICON = {
  vue: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898804960&di=bb204eb57425de2ad3ea2cb6d1358df2&imgtype=0&src=http%3A%2F%2Fimage.evget.com%2Fimages%2Farticle%2F2016%2FJavascriptky-3.png',
  js: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899278471&di=cf1e2753bbc588c0bc464c78a4d212fd&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4610b912c8fcc3ced0c353279a45d688d43f20a6.jpg',
  node: 'http://p3.so.qhmsg.com/bdr/200_200_/t016cf3f2122f3fea98.png',
  react: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4217379483,208217009&fm=27&gp=0.jpg',
  h5: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899317728&di=ce75860f4ce734fdbaa75ac46ac9541c&imgtype=0&src=http%3A%2F%2Fimg2.donews.com%2F2014%2F1117%2F75136433.jpg',
  css: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899340281&di=1da2d46a754250dd998cc350d712721e&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F004kTKjwzy6WlEAPznv25%26690',
  angular: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899186529&di=2ab6317937e397e54a573f149afbded5&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2015%2F07%2F10%2Fcf3703b1280a5680e9c833ed191d5638.jpg',
  php: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899359741&di=20e63930f8dc3a384e377846173d65e1&imgtype=0&src=http%3A%2F%2Fpx.thea.cn%2FPublic%2FUpload%2F2893678%2FIntro%2F1473304881.jpg',
  mysql: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494114&di=d7a904bf9cca31fc01ee38465c59a85a&imgtype=jpg&er=1&src=http%3A%2F%2Fs3.sinaimg.cn%2Flarge%2F002CwWVCzy6MMjHltCi62',
  server: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899560408&di=10405259462a1bc63c257f9183fd85a1&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk2%2FM02%2F5D%2FD6%2FwKhQxVfI4gSEHICVAAAAADw6QqA997.jpg',
  interesting: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899490315&di=cde9b22f2ac8bda254f6838419cfe61c&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_14_1%2Fa2t5fm9607718748992.jpg',
  fight: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899419656&di=9fd12f388d86e990014516f101ab28c7&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft253%2F89%2F336734149%2F67826%2Fbc5eeb58%2F53e9ced2N8472b3d1.jpg%2521q70.jpg',
  others: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899523703&di=1b6438eb70ce2ae0a8e1df64774c4bce&imgtype=0&src=http%3A%2F%2Fwww.cidianwang.com%2Ffile%2F2017412%2F201741285824464.jpg' //生活部分图片

};
var LIFE_IMAGE = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063149&di=53e2bb1c3edc9d5a9646b9a97cc2ff94&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1706%2F25-1F605093625.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=527129ef93dc3d55a68b603bb98e16a9&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F96-1FF1151Q0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=b199a98890734ffc50b64f7efaaa3d33&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-1609301I647.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063162&di=32d77d92542052e1fcec437153d62204&imgtype=0&src=http%3A%2F%2Fwww.zgnhzx.com%2FUploadFiles%2Ftalent%2F2016%2F12%2F201612190924565895.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900237921&di=d645ba5b24d0e1f00d3f80368190d06e&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-16092Q25947-50.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494978&di=641a9b9604ba88e1963f18f89ae882bb&imgtype=jpg&er=1&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F001OQ1Ugty6Nlz6m70y4e%26amp%3B690', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900281046&di=d69ee49f0ea3c15c7f0483f98e489b4e&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F8ee3e0acxb0171b491f27%26690', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532495027&di=4d3f70886405dd11d3740539b656ba26&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.baizhan.net%2Fuploads%2Fallimg%2F171106%2F47_171106115211_1.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900324719&di=bbda13a0a0245f13c561d32cad6717da&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161013%2Fe4be947df7304b77bf96c7b60aeb06c4_th.jpg', 'http://youimg1.c-ctrip.com/target/tg/726/811/170/9f4eedef3f664f798ea0846041b4fad8.jpg', 'http://pic18.nipic.com/20111213/3752183_140830948000_2.jpg', 'http://img8.zol.com.cn/bbs/upload/23566/23565123.jpg', 'http://p1.so.qhmsg.com/t0101bc5934a0f24496.jpg', 'http://p5.so.qhimgs1.com/sdr/200_200_/t010042e1ab48b0e8bb.jpg', 'http://img15.3lian.com/2015/h1/308/d/130.jpg', 'http://pic1.win4000.com/wallpaper/8/59360eb9ec476.jpg', 'http://img.mp.sohu.com/upload/20170808/544c7191626b42ce8b76c157edb6d725_th.png', 'http://pic22.nipic.com/20120725/8333799_081850001333_2.jpg']; //发布文章分类

var POST_ARTICLE_TYPE = [{
  key: "h5",
  value: " html"
}, {
  key: "css",
  value: " css"
}, {
  key: "js",
  value: " javascript"
}, {
  key: "vue",
  value: " vue"
}, {
  key: "react",
  value: " react"
}, {
  key: "angular",
  value: " angular"
}, {
  key: "node",
  value: " node"
}, {
  key: "php",
  value: " php"
}, {
  key: "java",
  value: " java"
}, {
  key: "mysql",
  value: " mysql"
}, {
  key: "server",
  value: " 服务器之类"
}, {
  key: "interesting",
  value: " 生活喜好"
}, {
  key: "fight",
  value: " 激励向上"
}, {
  key: "markdown",
  value: " markdown"
}, {
  key: "设计模式",
  value: " 设计模式"
}, {
  key: "阅读书籍",
  value: " 阅读书籍"
}, {
  key: "算法",
  value: " 算法"
}, {
  key: "工具",
  value: " 工具"
}, {
  key: "正则",
  value: " 正则"
}, {
  key: "技巧",
  value: " 技巧"
}, {
  key: "others",
  value: " 其他"
}]; //评论icon

var COMMENT_IMAGES = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532749734&di=fbfe0c2328cc8115b40f23945818cc58&imgtype=jpg&er=1&src=http%3A%2F%2Fen.pimg.jp%2F012%2F462%2F665%2F1%2F12462665.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532155572971&di=b2ae74aa22311f807cc768c088ab71c6&imgtype=0&src=http%3A%2F%2Fis2.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2Fb1%2Fb1%2F2c%2Fb1b12c2a-3a8f-420d-d988-b09c2455188e%2Fmzl.gzrdswmf.png%2F0x0ss-85.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532751108&di=333a1fefafd1ec1b1838f5305acfa215&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F39%2F99%2F02K58PIC4t7_1024.png']; //色系

var COLORS_ARR = ['#FF5F57', '#FFBD2E', '#28CA42', '#941966', '#1c2c36', '#2982ff', '#e0f0d8', '#0098c8', '#ba2d2a', '#de3803']; //发布文章版权

var POST_ARTICLE_COPY = function POST_ARTICLE_COPY(id) {
  return "\n\n\n--\n\u4F5C\u8005\uFF1A\u5218\u4F1F\u6CE2\n\n\u94FE\u63A5\uFF1A[".concat(MY_BLOG, "/p/").concat(id + 1, "](").concat(MY_BLOG, "/p/").concat(id + 1, ")\n\n\u6765\u6E90\uFF1A[\u5218\u4F1F\u6CE2\u535A\u5BA2](http://www.liuweibo.cn)\n\n\u672C\u6587\u539F\u521B\u7248\u6743\u5C5E\u4E8E\u5218\u4F1F\u6CE2 \uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF0C\u8C22\u8C22\u5408\u4F5C\n      ");
}; // 发布阅读书籍声明

var POST_READING_STATEMENT = function POST_READING_STATEMENT() {
  return "\n  > \u5173\u4E8E\u9605\u8BFB\u4E66\u7C4D\u90E8\u5206\uFF0C\u662F\u4E2A\u4EBA\u5728\u672C\u4E66\u7C4D\u4E2D\u6536\u96C6\u7684\u7CBE\u534E\u90E8\u5206\u548C\u5B9E\u6218\u90E8\u5206\uFF0C\u4E3A\u4E86\u540E\u7EED\u518D\u6B21\u9605\u8BFB\u8282\u7701\u65F6\u95F4\n  \u548C\u65B9\u4FBF\u5728\u5DE5\u4F5C\u4E2D\u7684\u5E94\u7528\uFF0C\u540E\u7EED\u4F1A\u5206\u4EAB\u672C\u4E66\u7C4D\u7684\u7535\u5B50\u7248pdf\u5728\u7EBF\u4E0B\u8F7D\u3002\u4E0D\u8FC7\u6211\u8FD8\u662F\u5EFA\u8BAE\u8BFB\u7740\u53BB\u9605\u8BFB\u539F\u8457\u3002\n  \n  --\n  \n  ";
};
var COMMENT_LIMIT = {
  key: '评论内容不能超过500字符',
  value: 500
}; //关于我

var commentPlaceHolder = "\u6B22\u8FCE\u63D0\u51FA\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898\u6216\u5B9D\u8D35\u5EFA\u8BAE\uFF08".concat(COMMENT_LIMIT.key, "\u5B57\u4EE5\u5185\uFF09\uFF0C\u611F\u8C22\u60A8\u5BF9\u535A\u4E3B\u7684\u652F\u6301\u3002(\u5FC5\u586B)");
var COMMENT_TIPS = function COMMENT_TIPS() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sf';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u8BC4\u8BBA\u652F\u6301markdown\uFF0C", COMMENT_LIMIT.key, ",\u5982\u679C\u5185\u5BB9\u8FC7\u591A\u6216\u8005\u8981\u53CA\u65F6\u56DE\u590D,\u5EFA\u8BAE\u53BB ", param, " \u5E73\u53F0,\u4E00\u822C\u4E00\u5929\u4E4B\u5185\u5C31\u4F1A\u56DE\u590D\u3002");
};

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = require("rc-queue-anim");

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return githubApiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return githubApiCommits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_COMMITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return githubApiUser; });
var githubApiStar = 'https://api.github.com/repos/Weibozzz/next-blog';
var githubApiCommits = 'https://api.github.com/repos/Weibozzz/next-blog/commits';
var ALL_COMMITS = 'https://github.com/Weibozzz/next-blog/commits?author=Weibozzz';
var githubApiUser = 'https://api.github.com/users/Weibozzz';

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = require("antd/lib/timeline");

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ })

/******/ });