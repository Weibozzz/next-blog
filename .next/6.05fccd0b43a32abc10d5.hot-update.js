webpackHotUpdate(6,{

/***/ "./pages/Admin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_table__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_tabs__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_constantsData__ = __webpack_require__("./config/constantsData.js");






var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/Admin/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var TabPane = __WEBPACK_IMPORTED_MODULE_5_antd_lib_tabs___default.a.TabPane;
var Content = __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Content;
var Search = __WEBPACK_IMPORTED_MODULE_3_antd_lib_input___default.a.Search;

var Admin =
/*#__PURE__*/
function (_Component) {
  _inherits(Admin, _Component);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this));
    _this.state = {
      pageNum: 10,
      currentPage: 1,
      inputVal: ''
    };
    return _this;
  }

  _createClass(Admin, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;
      var queryStringObj = {
        type: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["c" /* ALL */],
        num: 1,
        pageNum: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["r" /* pageNum */]
      };
      Object(__WEBPACK_IMPORTED_MODULE_13__store_actions__["a" /* getAdminBlogList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* getAdminBlogUrl */])(queryStringObj));
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, "Previous");
      } else if (type === 'next') {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "Next");
      }

      return originalElement;
    }
  }, {
    key: "onChange",
    value: function onChange(page, pageSize) {
      var dispatch = this.props.dispatch;
      var queryStringObj = {
        type: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["c" /* ALL */],
        num: page,
        pageNum: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["r" /* pageNum */]
      };
      Object(__WEBPACK_IMPORTED_MODULE_13__store_actions__["a" /* getAdminBlogList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* getAdminBlogUrl */])(queryStringObj));
    }
  }, {
    key: "onSearch",
    value: function onSearch(val) {
      this.setState({
        inputVal: val,
        currentPage: 1
      });
      var dispatch = this.props.dispatch;
      var queryStringObj;
      this.setState({
        keyWard: val
      });

      if (val) {
        queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["q" /* TITLE */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["r" /* pageNum */],
          wd: val
        };
      } else {
        queryStringObj = {
          type: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["c" /* ALL */],
          num: 1,
          pageNum: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["r" /* pageNum */]
        };
      }

      Object(__WEBPACK_IMPORTED_MODULE_13__store_actions__["b" /* getSearchList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_12__config__["b" /* getBlogUrl */])(queryStringObj));
    }
  }, {
    key: "handleDelComment",
    value: function handleDelComment(id) {}
  }, {
    key: "handleDelArticle",
    value: function handleDelArticle(id) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      function onChange(pagination, filters, sorter) {
        console.log('params', pagination, filters, sorter);
      }

      function onClick(pagination, filters, sorter) {
        console.log('onClick', pagination, filters, sorter);
      }

      function callback(key) {
        console.log(key);
      }

      var _props = this.props,
          _props$adminBlogData = _props.adminBlogData,
          adminBlogData = _props$adminBlogData === void 0 ? [] : _props$adminBlogData,
          _props$totalPageData = _props.totalPageData,
          totalPageData = _props$totalPageData === void 0 ? [] : _props$totalPageData,
          _props$searchData = _props.searchData,
          searchData = _props$searchData === void 0 ? [] : _props$searchData;

      if (searchData.length) {
        adminBlogData = searchData;
      }

      var keys = adminBlogData.map(function (v) {
        return _toConsumableArray(Object.keys(v)).concat(['操作']);
      });
      var columns = keys && keys[0] ? keys[0].map(function (v) {
        return v === 'title' ? {
          title: v,
          dataIndex: v,
          render: function render(text, row, index) {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
              href: "/AdminDetail/".concat(row.id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            }, text));
          }
        } : v === '操作' ? {
          title: v,
          dataIndex: v,
          render: function render(text, row, index) {
            return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("a", {
              href: "javascript:;",
              onClick: _this2.handleDelArticle.bind(_this2, row.id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              }
            }, "\u5220\u9664");
          }
        } : {
          title: v,
          dataIndex: v
        };
      }) : [];
      var data = adminBlogData.map(function (v, i) {
        return Object.assign({}, v, {
          key: i
        }, {
          createTime: Object(__WEBPACK_IMPORTED_MODULE_11__until__["a" /* formatTime */])(v.createTime)
        });
      });

      var _ref = totalPageData[0] || {},
          total = _ref.total;

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "admin")), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_tabs___default.a, {
        defaultActiveKey: "1",
        onChange: callback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(TabPane, {
        tab: "\u6587\u7AE0\u7BA1\u7406",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_table___default.a, {
        bordered: true,
        columns: columns,
        dataSource: data,
        pagination: false,
        onChange: onChange,
        onRow: function onRow(record) {
          return {
            onClick: function onClick() {
              console.log(record);
            },
            // 点击行
            onMouseEnter: function onMouseEnter() {} // 鼠标移入行

          };
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination___default.a, {
        defaultCurrent: this.state.currentPage,
        total: total,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(TabPane, {
        tab: "\u7559\u8A00\u7BA1\u7406",
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(TabPane, {
        tab: "\u6D4F\u89C8\u8BB0\u5F55",
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Content of Tab Pane 3"))))));
    }
  }]);

  return Admin;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Admin.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var queryTotalString, totalPage, totalPageData;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          queryTotalString = {
            type: __WEBPACK_IMPORTED_MODULE_14__config_constantsData__["c" /* ALL */]
          };
          _context.next = 3;
          return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["c" /* getTotalUrl */])(queryTotalString));

        case 3:
          totalPage = _context.sent;
          _context.next = 6;
          return totalPage.json();

        case 6:
          totalPageData = _context.sent;
          return _context.abrupt("return", {
            totalPageData: totalPageData
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var adminBlogData = state.adminBlogData,
      searchData = state.searchData;
  return {
    adminBlogData: adminBlogData,
    searchData: searchData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["b" /* connect */])(mapStateToProps)(Admin));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Admin")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.05fccd0b43a32abc10d5.hot-update.js.map