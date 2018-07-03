webpackHotUpdate(4,{

/***/ "./pages/Admin/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_pagination__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_table__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tabs__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_actions__ = __webpack_require__("./store/actions.js");





var _jsxFileName = "F:\\myself\\ctrl\\next-blog-1\\next-blog\\pages\\Admin\\index.js";

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









var TabPane = __WEBPACK_IMPORTED_MODULE_4_antd_lib_tabs___default.a.TabPane;
var Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var Search = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.Search;

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
      console.log(this.props);
      var dispatch = this.props.dispatch;
      var queryStringObj = {
        type: 'all',
        num: 1,
        pageNum: 10
      };
      Object(__WEBPACK_IMPORTED_MODULE_12__store_actions__["a" /* getAdminBlogList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* getAdminBlogUrl */])(queryStringObj));
    }
  }, {
    key: "itemRender",
    value: function itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, "Previous");
      } else if (type === 'next') {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
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
    value: function onChange(page, pageSize) {}
  }, {
    key: "onSearch",
    value: function onSearch(val) {
      this.setState({
        inputVal: val,
        currentPage: 1
      });
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

      var _props$adminBlogData = this.props.adminBlogData,
          adminBlogData = _props$adminBlogData === void 0 ? [] : _props$adminBlogData;
      var keys = adminBlogData.map(function (v) {
        return _toConsumableArray(Object.keys(v)).concat(['操作']);
      });
      var columns = keys && keys[0] ? keys[0].map(function (v) {
        return v === 'title' ? {
          title: v,
          dataIndex: v,
          render: function render(text, row, index) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
              href: "/AdminDetail/".concat(row.id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            }, text));
          }
        } : v === '操作' ? {
          title: v,
          dataIndex: v,
          render: function render(text, row, index) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("a", {
              href: "javascript:;",
              onClick: _this2.handleDelArticle.bind(_this2, row.id),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
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
          createTime: Object(__WEBPACK_IMPORTED_MODULE_10__until__["b" /* formatTime */])(v.createTime)
        });
      });
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "admin")), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Search, {
        placeholder: "input search text",
        onSearch: this.onSearch.bind(this),
        enterButton: "Search",
        size: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tabs___default.a, {
        defaultActiveKey: "1",
        onChange: callback,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TabPane, {
        tab: "\u6587\u7AE0\u7BA1\u7406",
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_table___default.a, {
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
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_pagination___default.a, {
        defaultCurrent: this.state.currentPage,
        total: 100,
        itemRender: this.itemRender.bind(this),
        onChange: this.onChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TabPane, {
        tab: "\u7559\u8A00\u7BA1\u7406",
        key: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TabPane, {
        tab: "\u6D4F\u89C8\u8BB0\u5F55",
        key: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Content of Tab Pane 3"))))));
    }
  }]);

  return Admin;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var adminBlogData = state.adminBlogData;
  return {
    adminBlogData: adminBlogData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps)(Admin));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Admin\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.037c5845e887f935113b.hot-update.js.map