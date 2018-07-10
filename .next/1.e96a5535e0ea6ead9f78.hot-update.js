webpackHotUpdate(1,{

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_TopTips__ = __webpack_require__("./components/TopTips/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_constantsData__ = __webpack_require__("./config/constantsData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_actions__ = __webpack_require__("./store/actions.js");




var _jsxFileName = "F:\\myself\\ctrl\\next-blog3\\next-blog\\components\\Header\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var routes = [{
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["j" /* INDEX */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["k" /* INDEX_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["f" /* BLOG */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["g" /* BLOG_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["l" /* LIFE */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["m" /* LIFE_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["a" /* ABOUT */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["b" /* ABOUT_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["c" /* ADMIN */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["d" /* ADMIN_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["n" /* POST_ARTICLE */],
  txt: __WEBPACK_IMPORTED_MODULE_9__config_constantsData__["o" /* POST_ARTICLE_TXT */]
}];

var TopNav =
/*#__PURE__*/
function (_Component) {
  _inherits(TopNav, _Component);

  function TopNav(props) {
    _classCallCheck(this, TopNav);

    return _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, props));
  }

  _createClass(TopNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      var _localStorage = localStorage,
          _localStorage$passwor = _localStorage.password,
          password = _localStorage$passwor === void 0 ? '' : _localStorage$passwor;
      console.log('header', password);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Header, {
        style: {
          position: 'fixed',
          height: '64px',
          width: '100%',
          padding: 0,
          zIndex: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 17,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a, {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ['2'],
        style: {
          lineHeight: '64px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, routes.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
          key: item.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
          href: item.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, item.txt)));
      }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px',
          marginTop: 64
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_TopTips__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }))));
    }
  }]);

  return TopNav;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var postAdminPasswordData = state.postAdminPasswordData;
  return {
    postAdminPasswordData: postAdminPasswordData
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps)(TopNav));

/***/ })

})
//# sourceMappingURL=1.e96a5535e0ea6ead9f78.hot-update.js.map