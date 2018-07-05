webpackHotUpdate(4,{

/***/ "./components/ListTitle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/list/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/avatar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__until__ = __webpack_require__("./until/index.js");



var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\components\\ListTitle\\index.js";





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

var ListTitle = function ListTitle(_ref2) {
  var _ref2$dataSource = _ref2.dataSource,
      dataSource = _ref2$dataSource === void 0 ? {} : _ref2$dataSource;
  console.log(dataSource);
  var _dataSource$listData = dataSource.listData,
      listData = _dataSource$listData === void 0 ? [] : _dataSource$listData,
      _dataSource$pathname = dataSource.pathname,
      pathname = _dataSource$pathname === void 0 ? '' : _dataSource$pathname;
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a, {
    itemLayout: "vertical",
    size: "large",
    dataSource: listData,
    footer: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item, {
        key: item.title,
        actions: [Object(__WEBPACK_IMPORTED_MODULE_6__until__["a" /* formatTime */])(item.createTime), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "star-o",
          text: "156",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "like-o",
          text: item.like,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "message",
          text: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(IconText, {
          type: "eye-o",
          text: item.visitor,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })],
        extra: pathname === '' ? '' : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_list___default.a.Item.Meta, {
        avatar: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_avatar___default.a, {
          src: item.avatar,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }),
        title: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
          as: "/p/".concat(item.id),
          href: "/detail?id=".concat(item.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, item.title)),
        description: pathname === '' ? '' : item.short,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), pathname === '' ? '' : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        as: "/p/".concat(item.id),
        href: "/detail?id=".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, " \u9605\u8BFB\u5168\u6587......")));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ListTitle);

/***/ })

})
//# sourceMappingURL=4.893a6b4ab6bca9ac4d5e.hot-update.js.map