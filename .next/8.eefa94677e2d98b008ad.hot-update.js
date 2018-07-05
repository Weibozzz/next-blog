webpackHotUpdate(8,{

/***/ "./pages/PostArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_select__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_EditArticle__ = __webpack_require__("./components/EditArticle/index.js");




var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\PostArticle\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var TextArea = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.TextArea;
var Option = __WEBPACK_IMPORTED_MODULE_1_antd_lib_select___default.a.Option;

var PostArticle =
/*#__PURE__*/
function (_Component) {
  _inherits(PostArticle, _Component);

  function PostArticle() {
    var _this;

    _classCallCheck(this, PostArticle);

    _this = _possibleConstructorReturn(this, (PostArticle.__proto__ || Object.getPrototypeOf(PostArticle)).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(PostArticle, [{
    key: "onSubmit",
    value: function onSubmit() {
      console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "\u53D1\u5E03\u6587\u7AE0")), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "post-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_EditArticle__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "\u63D0\u4EA4")))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }));
    }
  }]);

  return PostArticle;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])()(PostArticle));
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
//# sourceMappingURL=8.eefa94677e2d98b008ad.hot-update.js.map