webpackHotUpdate(5,{

/***/ "./components/ListTitle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__until__ = __webpack_require__("./until/index.js");



var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/ListTitle/index.js";





var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default.a, {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), text);
};

var pathname = '';

var ListTitle = function ListTitle(_ref2) {
  var listData = _ref2.listData;
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a, {
    itemLayout: "vertical",
    size: "large",
    dataSource: listData,
    footer: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item, {
        key: item.title,
        actions: [Object(__WEBPACK_IMPORTED_MODULE_6__until__["b" /* formatTime */])(item.createTime), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "star-o",
          text: "156",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "like-o",
          text: item.like,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "message",
          text: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "eye-o",
          text: item.visitor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })],
        extra: pathname === '' ? '' : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item.Meta, {
        avatar: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a, {
          src: item.avatar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }),
        title: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
          as: "/p/".concat(item.id),
          href: "/detail?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, item.title)),
        description: pathname === '' ? '' : item.short,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), pathname === '' ? '' : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        as: "/p/".concat(item.id),
        href: "/detail?id=".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " \u9605\u8BFB\u5168\u6587......")));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ListTitle);

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBlogUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTotalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pageNum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__until__ = __webpack_require__("./until/index.js");


var getBlogUrl = function getBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getDetailUrl = function getDetailUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/detail' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getTotalUrl = function getTotalUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/total' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
}; // export const getBlogUrl = domain+'/api/getBlog'
// export const getTotalUrl = domain+'/api/total'
// export const getLifeUrl = domain+'/api/life'
// export const getDetailUrl = domain+'/api/detail'
// export const getLastIdUrl = domain+'/api/lastId'
// export const getNextIdUrl = domain+'/api/nextId'
// export const getCommentsUrl = domain+'/api/comments'
// export const postArticleUrl = domain+'/api/postArticle'
// export const postCommentUrl = domain+'/api/postComment'

var pageNum = 10; //分页数

/***/ }),

/***/ "./pages/Blog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("./node_modules/_isomorphic-unfetch@2.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ListTitle__ = __webpack_require__("./components/ListTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__config__ = __webpack_require__("./config/index.js");







var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/Blog/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Content = __WEBPACK_IMPORTED_MODULE_6_antd_lib_layout___default.a.Content;
var Search = __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a.Search;

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
          type: 'title',
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_16__config__["d" /* pageNum */],
          wd: val
        };
        queryTotalString = {
          type: 'title',
          wd: val
        };
      } else {
        queryStringObj = {
          type: 'all',
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_16__config__["d" /* pageNum */]
        };
        queryTotalString = {
          type: 'all'
        };
      }

      Object(__WEBPACK_IMPORTED_MODULE_11__store_actions__["a" /* getSearchList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_16__config__["a" /* getBlogUrl */])(queryStringObj));
      Object(__WEBPACK_IMPORTED_MODULE_11__store_actions__["c" /* getSearchTotal */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_16__config__["c" /* getTotalUrl */])(queryTotalString));
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
          type: 'title',
          num: page,
          pageNum: __WEBPACK_IMPORTED_MODULE_16__config__["d" /* pageNum */],
          wd: wd
        };
        Object(__WEBPACK_IMPORTED_MODULE_11__store_actions__["b" /* getSearchPageList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_16__config__["a" /* getBlogUrl */])(queryStringObj));
      }
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, "Previous");
      } else if (type === 'next') {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, "Next");
      }

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_next_link___default.a, {
        as: "/Blog/".concat(current),
        href: "/Blog?id=".concat(current),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, current));
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      var total;
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

      if (searchTotalData.length) {
        var _ref = searchTotalData[0] || {};

        total = _ref.total;
      } else {
        var _ref2 = totalPageData[0] || {};

        total = _ref2.total;
      }

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        className: "Blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "blog")), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        style: {
          padding: 24
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
        className: "gutter-row",
        span: 22,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_col___default.a, {
        className: "gutter-row",
        span: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_next_link___default.a, {
        href: "/PostArticle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        size: "large",
        type: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "\u53D1\u5E03\u6587\u7AE0")))))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_ListTitle__["a" /* default */], {
        listData: pageBlogData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default.a, {
        total: total,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })))), __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }));
    }
  }]);

  return Blog;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

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
              type: 'all',
              num: id,
              pageNum: __WEBPACK_IMPORTED_MODULE_16__config__["d" /* pageNum */]
            };
            queryTotalString = {
              type: 'all'
            };
            _context.next = 6;
            return __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()(Object(__WEBPACK_IMPORTED_MODULE_16__config__["a" /* getBlogUrl */])(queryStringObj));

          case 6:
            pageBlog = _context.sent;
            _context.next = 9;
            return __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()(Object(__WEBPACK_IMPORTED_MODULE_16__config__["c" /* getTotalUrl */])(queryTotalString));

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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["b" /* connect */])(mapStateToProps)(Blog)); //export default Blog

/*Blog.getInitialProps = async function ({ reduxStore, req}) {
  const isServer = !!req
  const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
  const blogDataJson = await blogData.json()
  reduxStore.dispatch(serverRenderIncrementCount(isServer,blogDataJson))
  return {}
}
const mapStateToProps = state=>{
  console.log(state)
  const {res} = state
  return {res};
}
export default connect(mapStateToProps)(Blog)*/
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Blog")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./until/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* unused harmony export getArticleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHtml; });
/* harmony export (immutable) */ __webpack_exports__["d"] = toQueryStr;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var format = __webpack_require__("./node_modules/_date-format@1.2.0@date-format/lib/index.js");

var updateHtml = function updateHtml(str) {
  return str.replace(/'|"|:|\.|\[|\]|\\/g, function (str) {
    if (str === '"') {
      return '@quot;';
    } else if (str === "'") {
      return '@apos;';
    } else if (str === ':') {
      return '&#58;';
    } else if (str === '[') {
      return '&#91;';
    } else if (str === '[') {
      return '&#93;';
    } else if (str === '\\') {
      //自定义的 找不到
      return '&#43;';
    } else {
      return '&#183;';
    }
  });
};
var spaceAdd = function spaceAdd(str) {
  return str && str.replace(/\+/g, '&nbsp;');
};
var getPathName = function getPathName(props) {
  return props.location && props.location.pathname && props.location.pathname.substring(1);
};
var NbspToSpace = function NbspToSpace(str) {
  return str && str.replace(/&nbsp;/g, '　');
};
var formatTime = function formatTime(time) {
  var zh = ["日", "一", "二", "三", "四", "五", "六"];
  var date = new Date(time * 1000);
  return format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()];
};
var getArticleInfo = function getArticleInfo(detailArr) {
  var _ref = detailArr && detailArr[0] ? detailArr[0] : {},
      rest = _extends({}, _ref);
  /*{
      content,
          createTime,
          id,
          img,
          lastModify,
          like,
          modifyCount,
          recommend,
          short,
          title,
          type,
          url,
          user,
          visitor,
          week
  }*/


  return rest;
};
var OldTime = 1526625828; // 2018-05-18 14:43 星期五

var getHtml = function getHtml(str, newTime) {
  if (OldTime > newTime) {
    //这是曾经的文章
    return str ? str : null;
  } else {
    return str ? str.replace(/@quot;|@apos;/g, function (str) {
      if (str === '@quot;') {
        return '"';
      } else if (str === "@apos;") {
        return "'";
      }
    }) : null;
  }
};
function toQueryStr(obj) {
  return "?" + JSON.stringify(obj).replace(/{|}|\"|\'/g, "").replace(/,/g, "&").replace(/:/g, "=");
}

/***/ })

})
//# sourceMappingURL=5.c19b9414d7c53fa44e11.hot-update.js.map