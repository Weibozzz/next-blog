webpackHotUpdate(5,{

/***/ "./config/constantsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DEV_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ABOUT_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INDEX_TITLE; });
var DEV_DOMAIN = 'http://localhost:7654';
var pageNum = 10; //分页数

var TITLE = 'title';
var ALL = 'all'; //导航路由

var INDEX = '/';
var INDEX_TXT = '网站首页';
var BLOG = '/Blog';
var BLOG_TXT = '文章列表';
var ADMIN = '/Admin';
var ADMIN_TXT = '后台管理';
var LIFE = '/Life';
var LIFE_TXT = '生活记录';
var ABOUT = '/About';
var ABOUT_TXT = '关于作者';
var POST_ARTICLE = '/PostArticle';
var POST_ARTICLE_TXT = '发布文章'; //seo

var COMMON_TITLE = '>>刘伟波-天天向上';
var INDEX_TITLE = '刘伟波的个人主页';

/***/ }),

/***/ "./config/env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDomain;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constantsData__ = __webpack_require__("./config/constantsData.js");

function getDomain() {
  return __WEBPACK_IMPORTED_MODULE_0__constantsData__["i" /* DEV_DOMAIN */] + '/';
}

/***/ }),

/***/ "./pages/Blog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_whatwg_fetch__ = __webpack_require__("./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ListTitle__ = __webpack_require__("./components/ListTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_constantsData__ = __webpack_require__("./config/constantsData.js");




var _jsxFileName = "F:\\myself\\ctrl\\next-blog3\\next-blog\\pages\\Blog\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var Search = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.Search;

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
          type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["q" /* TITLE */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["r" /* pageNum */],
          wd: val
        };
        queryTotalString = {
          type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["q" /* TITLE */],
          wd: val
        };
      } else {
        queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["e" /* ALL */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["r" /* pageNum */]
        };
        queryTotalString = {
          type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["e" /* ALL */]
        };
      }

      Object(__WEBPACK_IMPORTED_MODULE_9__store_actions__["a" /* getSearchList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* getBlogUrl */])(queryStringObj));
      Object(__WEBPACK_IMPORTED_MODULE_9__store_actions__["c" /* getSearchTotal */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_11__config__["b" /* getTotalUrl */])(queryTotalString));
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
          type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["q" /* TITLE */],
          num: page,
          pageNum: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["r" /* pageNum */],
          wd: wd
        };
        Object(__WEBPACK_IMPORTED_MODULE_9__store_actions__["b" /* getSearchPageList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* getBlogUrl */])(queryStringObj));
      }
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, "Previous");
      } else if (type === 'next') {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, "Next");
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_link___default.a, {
        as: "/Blog/".concat(current),
        href: "/Blog?id=".concat(current),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
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

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: "Blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["k" /* INDEX_TITLE */], __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["h" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_ListTitle__["a" /* default */], {
        dataSource: {
          listData: listData
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default.a, {
        total: total,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })))));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

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
              type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["e" /* ALL */],
              num: id,
              pageNum: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["r" /* pageNum */]
            };
            queryTotalString = {
              type: __WEBPACK_IMPORTED_MODULE_12__config_constantsData__["e" /* ALL */]
            };
            _context.next = 6;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* getBlogUrl */])(queryStringObj));

          case 6:
            pageBlog = _context.sent;
            _context.next = 9;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_11__config__["b" /* getTotalUrl */])(queryTotalString));

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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps)(Blog));
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
//# sourceMappingURL=5.4fe8678bf06560d6d8ba.hot-update.js.map