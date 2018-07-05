webpackHotUpdate(8,{

/***/ "./pages/PostArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_select__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Footer__ = __webpack_require__("./components/Footer/index.js");





var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\PostArticle\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Content = __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Content;
var TextArea = __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a.TextArea;
var Option = __WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default.a.Option;

var PostArticle =
/*#__PURE__*/
function (_Component) {
  _inherits(PostArticle, _Component);

  function PostArticle() {
    var _this;

    _classCallCheck(this, PostArticle);

    _this = _possibleConstructorReturn(this, (PostArticle.__proto__ || Object.getPrototypeOf(PostArticle)).call(this));
    _this.state = {
      selectVal: '',
      titleVal: '',
      shortVal: '',
      urlVal: ''
    };
    return _this;
  }

  _createClass(PostArticle, [{
    key: "handleChangeSelect",
    value: function handleChangeSelect(value) {
      this.setState({
        selectVal: value
      });
    }
  }, {
    key: "handleChangeTitle",
    value: function handleChangeTitle(e) {
      this.setState({
        titleVal: e.target.value
      });
    }
  }, {
    key: "handleChangeUrl",
    value: function handleChangeUrl(e) {
      this.setState({
        urlVal: e.target.value
      });
    }
  }, {
    key: "handleChangeShort",
    value: function handleChangeShort(e) {
      this.setState({
        shortVal: e.target.value
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "\u53D1\u5E03\u6587\u7AE0")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "post-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_select___default.a, {
        defaultValue: "\u6587\u7AE0\u7C7B\u578B",
        style: {
          width: '100%'
        },
        onChange: this.handleChangeSelect.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "html"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "css"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "javascript"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "vue"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "react"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "angular"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "node",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "node"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "php",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "php"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "mysql"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "\u670D\u52A1\u5668\u4E4B\u7C7B"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "interesting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "\u751F\u6D3B\u559C\u597D"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "fight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "\u6FC0\u52B1\u5411\u4E0A"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "\u5176\u4ED6")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a, {
        onChange: this.handleChangeUrl.bind(this),
        placeholder: "\u539F\u6587\u7684URL\u94FE\u63A5\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        rows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }));
    }
  }]);

  return PostArticle;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])()(PostArticle));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/PostArticle\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.25299284c629f3d4ae2f.hot-update.js.map