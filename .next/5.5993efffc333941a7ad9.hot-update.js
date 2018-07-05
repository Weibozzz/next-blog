webpackHotUpdate(5,{

/***/ "./node_modules/_antd@3.6.5@antd/lib/_util/getScroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = getScroll;
function getScroll(target, top) {
    if (typeof window === 'undefined') {
        return 0;
    }
    var prop = top ? 'pageYOffset' : 'pageXOffset';
    var method = top ? 'scrollTop' : 'scrollLeft';
    var isWindow = target === window;
    var ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }
    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/_antd@3.6.5@antd/lib/back-top/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");

var React = _interopRequireWildcard(_react);

var _rcAnimate = __webpack_require__("./node_modules/_rc-animate@2.4.4@rc-animate/es/Animate.js");

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _addEventListener = __webpack_require__("./node_modules/_rc-util@4.5.1@rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__("./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("./node_modules/_omit.js@1.0.0@omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/_util/getScroll.js");

var _getScroll2 = _interopRequireDefault(_getScroll);

var _raf = __webpack_require__("./node_modules/_raf@3.4.0@raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    } else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
};
function noop() {}
function getDefaultTarget() {
    return window;
}

var BackTop = function (_React$Component) {
    (0, _inherits3['default'])(BackTop, _React$Component);

    function BackTop(props) {
        (0, _classCallCheck3['default'])(this, BackTop);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BackTop.__proto__ || Object.getPrototypeOf(BackTop)).call(this, props));

        _this.getCurrentScrollTop = function () {
            var getTarget = _this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            }
            return targetNode.scrollTop;
        };
        _this.scrollToTop = function (e) {
            var scrollTop = _this.getCurrentScrollTop();
            var startTime = Date.now();
            var frameFunc = function frameFunc() {
                var timestamp = Date.now();
                var time = timestamp - startTime;
                _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                if (time < 450) {
                    (0, _raf2['default'])(frameFunc);
                }
            };
            (0, _raf2['default'])(frameFunc);
            (_this.props.onClick || noop)(e);
        };
        _this.handleScroll = function () {
            var _this$props = _this.props,
                visibilityHeight = _this$props.visibilityHeight,
                _this$props$target = _this$props.target,
                target = _this$props$target === undefined ? getDefaultTarget : _this$props$target;

            var scrollTop = (0, _getScroll2['default'])(target(), true);
            _this.setState({
                visible: scrollTop > visibilityHeight
            });
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    (0, _createClass3['default'])(BackTop, [{
        key: 'setScrollTop',
        value: function setScrollTop(value) {
            var getTarget = this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                document.body.scrollTop = value;
                document.documentElement.scrollTop = value;
            } else {
                targetNode.scrollTop = value;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getTarget = this.props.target || getDefaultTarget;
            this.scrollEvent = (0, _addEventListener2['default'])(getTarget(), 'scroll', this.handleScroll);
            this.handleScroll();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollEvent) {
                this.scrollEvent.remove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$prefixCls = _props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-back-top' : _props$prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                children = _props.children;

            var classString = (0, _classnames2['default'])(prefixCls, className);
            var defaultElement = React.createElement(
                'div',
                { className: prefixCls + '-content' },
                React.createElement('div', { className: prefixCls + '-icon' })
            );
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2['default'])(this.props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target']);
            var backTopBtn = this.state.visible ? React.createElement(
                'div',
                (0, _extends3['default'])({}, divProps, { className: classString, onClick: this.scrollToTop }),
                children || defaultElement
            ) : null;
            return React.createElement(
                _rcAnimate2['default'],
                { component: '', transitionName: 'fade' },
                backTopBtn
            );
        }
    }]);
    return BackTop;
}(React.Component);

exports['default'] = BackTop;

BackTop.defaultProps = {
    visibilityHeight: 400
};
module.exports = exports['default'];

/***/ }),

/***/ "./pages/Blog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/back-top/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__ = __webpack_require__("./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ListTitle__ = __webpack_require__("./components/ListTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config_constantsData__ = __webpack_require__("./config/constantsData.js");





var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\Blog\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Content = __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Content;
var Search = __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a.Search;

var Blog =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this));
    _this.state = {
      currentPage: 1,
      keyWard: ''
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "onSearch",
    value: function onSearch(val) {
      var dispatch = this.props.dispatch;
      var queryStringObj, queryTotalString;
      this.setState({
        keyWard: val
      });

      if (val) {
        queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["q" /* TITLE */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["r" /* pageNum */],
          wd: val
        };
        queryTotalString = {
          type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["q" /* TITLE */],
          wd: val
        };
      } else {
        queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["c" /* ALL */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["r" /* pageNum */]
        };
        queryTotalString = {
          type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["c" /* ALL */]
        };
      }

      Object(__WEBPACK_IMPORTED_MODULE_10__store_actions__["a" /* getSearchList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_14__config__["a" /* getBlogUrl */])(queryStringObj));
      Object(__WEBPACK_IMPORTED_MODULE_10__store_actions__["c" /* getSearchTotal */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_14__config__["f" /* getTotalUrl */])(queryTotalString));
    }
  }, {
    key: "onChange",
    value: function onChange(page, pageSize) {
      var dispatch = this.props.dispatch;
      var wd = this.state.keyWard;
      this.setState({
        currentPage: page
      });
      var _props$searchTotalDat = this.props.searchTotalData,
          searchTotalData = _props$searchTotalDat === void 0 ? [] : _props$searchTotalDat;

      if (searchTotalData.length) {
        var queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["q" /* TITLE */],
          num: page,
          pageNum: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["r" /* pageNum */],
          wd: wd
        };
        Object(__WEBPACK_IMPORTED_MODULE_10__store_actions__["b" /* getSearchPageList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_14__config__["a" /* getBlogUrl */])(queryStringObj));
      }
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "Previous");
      } else if (type === 'next') {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, "Next");
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
        as: "/Blog/".concat(current),
        href: "/Blog?id=".concat(current),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, current));
    }
  }, {
    key: "render",
    value: function render() {
      var total, listData;
      var _props = this.props,
          _props$pageBlogData = _props.pageBlogData,
          pageBlogData = _props$pageBlogData === void 0 ? [] : _props$pageBlogData,
          _props$totalPageData = _props.totalPageData,
          totalPageData = _props$totalPageData === void 0 ? [] : _props$totalPageData,
          _props$searchData = _props.searchData,
          searchData = _props$searchData === void 0 ? [] : _props$searchData,
          _props$searchTotalDat2 = _props.searchTotalData,
          searchTotalData = _props$searchTotalDat2 === void 0 ? [] : _props$searchTotalDat2; //如果用户进行搜索，就用搜索的数据，这里为了用户体验，并没有服务端渲染

      if (searchData.length) {
        pageBlogData = searchData;
      }

      listData = pageBlogData;

      if (searchTotalData.length) {
        var _ref = searchTotalData[0] || {};

        total = _ref.total;
      } else {
        var _ref2 = totalPageData[0] || {};

        total = _ref2.total;
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "Blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["i" /* INDEX_TITLE */], __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_ListTitle__["a" /* default */], {
        dataSource: {
          listData: listData
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination___default.a, {
        total: total,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Blog.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var _context$query$id, id, queryStringObj, queryTotalString, pageBlog, totalPage, pageBlogData, totalPageData;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context$query$id = context.query.id, id = _context$query$id === void 0 ? 1 : _context$query$id;
            console.log(context.query);
            queryStringObj = {
              type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["c" /* ALL */],
              num: id,
              pageNum: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["r" /* pageNum */]
            };
            queryTotalString = {
              type: __WEBPACK_IMPORTED_MODULE_15__config_constantsData__["c" /* ALL */]
            };
            _context.next = 6;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_14__config__["a" /* getBlogUrl */])(queryStringObj));

          case 6:
            pageBlog = _context.sent;
            _context.next = 9;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_14__config__["f" /* getTotalUrl */])(queryTotalString));

          case 9:
            totalPage = _context.sent;
            _context.next = 12;
            return pageBlog.json();

          case 12:
            pageBlogData = _context.sent;
            _context.next = 15;
            return totalPage.json();

          case 15:
            totalPageData = _context.sent;
            return _context.abrupt("return", {
              pageBlogData: pageBlogData,
              totalPageData: totalPageData
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}(); //这里根据需要传入redux


var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var res = state.res,
      searchData = state.searchData,
      searchTotalData = state.searchTotalData;
  return {
    res: res,
    searchData: searchData,
    searchTotalData: searchTotalData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps)(Blog));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Blog\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5993efffc333941a7ad9.hot-update.js.map