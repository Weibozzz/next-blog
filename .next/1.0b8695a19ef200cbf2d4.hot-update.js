webpackHotUpdate(1,{

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/_styled-jsx@2.2.6@styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app__ = __webpack_require__("./node_modules/_next@6.1.1@next/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_with_redux_store__ = __webpack_require__("./lib/with-redux-store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asserts_styles_less__ = __webpack_require__("./asserts/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asserts_styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__asserts_styles_less__);
var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          reduxStore = _props.reduxStore;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */], {
        store: reduxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4032769775",
        css: "#__next{height:100%;min-height:100%;}pre{background-color:#f5f5f5;border:1px solid #ccc;}.fl{float:left;}.fr{float:right;}.clearfix:after{content:'';clear:both;display:block;}ul{margin:0;padding:0;}li{list-style:none;}#root,.container{height:100%;min-height:100%;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f0f2f5;}.mid-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWUyQixBQUd5QixBQU9LLEFBSWQsQUFHQyxBQUdELEFBS0YsQUFJTyxBQUdKLEFBSUMsQUFLRCxTQWZGLEVBWGQsQUFNZSxDQWpCSyxBQWNwQixBQWVvQixJQUhwQixHQUhBLEdBTGtCLEdBWFEsR0FObEIsQUE2QlIsUUFYQSxXQVhBLHdCQThCQSxHQUwwQiw4RUFDRyx5QkFDN0IiLCJmaWxlIjoicGFnZXNcXF9hcHAuanMiLCJzb3VyY2VSb290IjoiRjpcXG15c2VsZlxcY3RybFxcbmV4dC1ibG9nLTJcXG5leHQtYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWIvd2l0aC1yZWR1eC1zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0ICcuLi9hc3NlcnRzL3N0eWxlcy5sZXNzJ1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmV9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgI19fbmV4dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI19fbmV4dD5kaXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5wcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4uZmx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uZnJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNsZWFyZml4OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVse1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI3Jvb3QsLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcclxufVxyXG4ubWlkLWNvbnRlbnR7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApXHJcbiJdfQ== */\n/*@ sourceURL=pages\\_app.js */"
      }));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_1_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_with_redux_store__["a" /* default */])(MyApp));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=1.0b8695a19ef200cbf2d4.hot-update.js.map