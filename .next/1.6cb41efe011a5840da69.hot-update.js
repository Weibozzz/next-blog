webpackHotUpdate(1,{

/***/ "./node_modules/_react-redux@5.0.7@react-redux/es/connect/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/utils/shallowEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/connect/mergeProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/connect/selectorFactory.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ "./node_modules/_react-redux@5.0.7@react-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/components/Provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/components/connectAdvanced.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/connect/connect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* unused harmony reexport createProvider */
/* unused harmony reexport connectAdvanced */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asserts_styles_less__ = __webpack_require__("./asserts/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asserts_styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__asserts_styles_less__);
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
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */], {
        store: reduxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-3387961827"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3387961827",
        css: ".fl{float:left;}.fr{float:right;}.clearfix:after{content:'';clear:both;display:block;}ul{margin:0;padding:0;}li{list-style:none;}#root,.container{height:100%;min-height:100%;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f0f2f5;}.mid-content{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}code[class*=\"language-\"],pre[class*=\"language-\"]{color:black;background:none;text-shadow:0 1px white;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}pre[class*=\"language-\"]::-moz-selection,pre[class*=\"language-\"]::-moz-selection,code[class*=\"language-\"]::-moz-selection,code[class*=\"language-\"]::-moz-selection{text-shadow:none;background:#b3d4fc;}pre[class*=\"language-\"]::selection,pre[class*=\"language-\"]::selection,code[class*=\"language-\"]::selection,code[class*=\"language-\"]::selection{text-shadow:none;background:#b3d4fc;}@media print{code[class*=\"language-\"],pre[class*=\"language-\"]{text-shadow:none;}}pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto;}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#f5f2f0;}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray;}.token.punctuation{color:#999;}.namespace{opacity:.7;}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690;}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#9a6e3a;background:hsla(0,0%,100%,.5);}.token.atrule,.token.attr-value,.token.keyword{color:#07a;}.token.function,.token.class-name{color:#DD4A68;}.token.regex,.token.important,.token.variable{color:#e90;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCMkIsQUFJZ0IsQUFHQyxBQUdELEFBS0YsQUFJTyxBQUdKLEFBSUMsQUFLRCxBQU1GLEFBdUJLLEFBTUEsQUFPRSxBQU1QLEFBT08sQUFLTixBQVNHLEFBSUwsQUFJQSxBQVVBLEFBU0EsQUFRRyxBQU9ILEFBS0csQUFNSCxBQUtNLEFBR0MsQUFJTixTQXJKQSxFQVhkLEFBTWUsQUE4RmYsQUFJQSxBQVVBLEFBU0EsQUFlQSxBQVdBLENBbEpBLEFBZW9CLEFBZUYsQUEwQ0YsQUFzRmhCLENBMUVxQixDQTRDYyxBQVluQyxFQWhJQSxBQWlGQSxDQXhDcUIsQUFNQSxBQU9uQixBQXFGRixDQUdBLENBakpBLEFBc0VBLEdBM0VrQixJQXFFRixFQXpEaEIsQUFlMEIsSUFzREwsSUFoRnJCLEFBaURBLEFBTUEsSUFjQSxJQXVEQSxPQTNDQSxDQXREd0UsbUJBUnhFLEdBTDBCLDRDQWNSLGdCQUNBLGdCQUNJLEVBZk8sa0JBZ0JULE9BZnBCLFdBZ0JtQixpQkFDRCxnQkFFQSxnQkFDRixjQUNILFdBRVUscUJBQ0gsa0JBQ0QsaUJBQ0oscUVBQ2YiLCJmaWxlIjoicGFnZXNcXF9hcHAuanMiLCJzb3VyY2VSb290IjoiRjpcXG15c2VsZlxcY3RybFxcbmV4dC1ibG9nLTJcXG5leHQtYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWIvd2l0aC1yZWR1eC1zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcbmltcG9ydCAnLi4vYXNzZXJ0cy9zdHlsZXMubGVzcydcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtyZWR1eFN0b3JlfT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHJcbi5mbHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mcntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uY2xlYXJmaXg6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jcm9vdCwuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG59XHJcbi5taWQtY29udGVudHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuXHJcbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxyXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG4gIC1tb3otdGFiLXNpemU6IDQ7XHJcbiAgLW8tdGFiLXNpemU6IDQ7XHJcbiAgdGFiLXNpemU6IDQ7XHJcblxyXG4gIC13ZWJraXQtaHlwaGVuczogbm9uZTtcclxuICAtbW96LWh5cGhlbnM6IG5vbmU7XHJcbiAgLW1zLWh5cGhlbnM6IG5vbmU7XHJcbiAgaHlwaGVuczogbm9uZTtcclxufVxyXG5cclxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjotbW96LXNlbGVjdGlvbixcclxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xyXG59XHJcblxyXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjpzZWxlY3Rpb24sXHJcbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uIHtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjYjNkNGZjO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxyXG4gIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG1hcmdpbjogLjVlbSAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcclxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjJmMDtcclxufVxyXG5cclxuLyogSW5saW5lIGNvZGUgKi9cclxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xyXG4gIHBhZGRpbmc6IC4xZW07XHJcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4udG9rZW4uY29tbWVudCxcclxuLnRva2VuLnByb2xvZyxcclxuLnRva2VuLmRvY3R5cGUsXHJcbi50b2tlbi5jZGF0YSB7XHJcbiAgY29sb3I6IHNsYXRlZ3JheTtcclxufVxyXG5cclxuLnRva2VuLnB1bmN0dWF0aW9uIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuLm5hbWVzcGFjZSB7XHJcbiAgb3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi50b2tlbi5wcm9wZXJ0eSxcclxuLnRva2VuLnRhZyxcclxuLnRva2VuLmJvb2xlYW4sXHJcbi50b2tlbi5udW1iZXIsXHJcbi50b2tlbi5jb25zdGFudCxcclxuLnRva2VuLnN5bWJvbCxcclxuLnRva2VuLmRlbGV0ZWQge1xyXG4gIGNvbG9yOiAjOTA1O1xyXG59XHJcblxyXG4udG9rZW4uc2VsZWN0b3IsXHJcbi50b2tlbi5hdHRyLW5hbWUsXHJcbi50b2tlbi5zdHJpbmcsXHJcbi50b2tlbi5jaGFyLFxyXG4udG9rZW4uYnVpbHRpbixcclxuLnRva2VuLmluc2VydGVkIHtcclxuICBjb2xvcjogIzY5MDtcclxufVxyXG5cclxuLnRva2VuLm9wZXJhdG9yLFxyXG4udG9rZW4uZW50aXR5LFxyXG4udG9rZW4udXJsLFxyXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXHJcbi5zdHlsZSAudG9rZW4uc3RyaW5nIHtcclxuICBjb2xvcjogIzlhNmUzYTtcclxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAuNSk7XHJcbn1cclxuXHJcbi50b2tlbi5hdHJ1bGUsXHJcbi50b2tlbi5hdHRyLXZhbHVlLFxyXG4udG9rZW4ua2V5d29yZCB7XHJcbiAgY29sb3I6ICMwN2E7XHJcbn1cclxuXHJcbi50b2tlbi5mdW5jdGlvbixcclxuLnRva2VuLmNsYXNzLW5hbWUge1xyXG4gIGNvbG9yOiAjREQ0QTY4O1xyXG59XHJcblxyXG4udG9rZW4ucmVnZXgsXHJcbi50b2tlbi5pbXBvcnRhbnQsXHJcbi50b2tlbi52YXJpYWJsZSB7XHJcbiAgY29sb3I6ICNlOTA7XHJcbn1cclxuXHJcbi50b2tlbi5pbXBvcnRhbnQsXHJcbi50b2tlbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udG9rZW4uaXRhbGljIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi50b2tlbi5lbnRpdHkge1xyXG4gIGN1cnNvcjogaGVscDtcclxufVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcClcclxuIl19 */\n/*@ sourceURL=pages\\_app.js */"
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
//# sourceMappingURL=1.6cb41efe011a5840da69.hot-update.js.map