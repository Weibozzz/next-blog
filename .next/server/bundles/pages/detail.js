module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ArticleTitle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider__ = __webpack_require__("antd/lib/divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__until__ = __webpack_require__("./until/index.js");

var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/ArticleTitle/index.js";




var ArticleTitle = function ArticleTitle(_ref) {
  var _ref$detailArticle = _ref.detailArticle,
      detailArticle = _ref$detailArticle === void 0 ? {} : _ref$detailArticle;
  var title = detailArticle.title,
      createTime = detailArticle.createTime,
      user = detailArticle.user,
      visitor = detailArticle.visitor,
      lastModify = detailArticle.lastModify,
      modifyCount = detailArticle.modifyCount;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3877631247"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3877631247"
  }, title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3877631247" + " " + "clearfix detail-info"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3877631247" + " " + "fl"
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", Object(__WEBPACK_IMPORTED_MODULE_3__until__["b" /* formatTime */])(createTime)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3877631247" + " " + "fl"
  }, "\u4F5C\u8005\uFF1A", user), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3877631247" + " " + "fl"
  }, "\u6D4F\u89C8\u6B21\u6570\uFF1A", visitor), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3877631247" + " " + "fl"
  }, "\u6700\u540E\u4FEE\u6539\uFF1A", Object(__WEBPACK_IMPORTED_MODULE_3__until__["b" /* formatTime */])(lastModify)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-3877631247" + " " + "fl"
  }, "\u4FEE\u6539\u6B21\u6570\uFF1A", modifyCount)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_divider___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "3877631247",
    css: ".detail-info.jsx-3877631247 li.jsx-3877631247{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZVRpdGxlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHNkIsa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvQXJ0aWNsZVRpdGxlL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXV3ZWliby9hbGkvbmV4dC1ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpc3QsIEF2YXRhciwgSWNvbiAsRGl2aWRlcn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge2Zvcm1hdFRpbWUsZ2V0QXJ0aWNsZUluZm99IGZyb20gJy4uLy4uL3VudGlsJztcblxuY29uc3QgQXJ0aWNsZVRpdGxlID0gKHtkZXRhaWxBcnRpY2xlPXt9fSk9PntcbiAgY29uc3Qge3RpdGxlLGNyZWF0ZVRpbWUsdXNlcix2aXNpdG9yLGxhc3RNb2RpZnksbW9kaWZ5Q291bnR9ID0gZGV0YWlsQXJ0aWNsZVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2xlYXJmaXggZGV0YWlsLWluZm9cIiA+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPuWPkeW4g+aXtumXtO+8mntmb3JtYXRUaW1lKGNyZWF0ZVRpbWUpfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPuS9nOiAhe+8mnt1c2VyfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPua1j+iniOasoeaVsO+8mnt2aXNpdG9yfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPuacgOWQjuS/ruaUue+8mntmb3JtYXRUaW1lKGxhc3RNb2RpZnkpfTwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPuS/ruaUueasoeaVsO+8mnttb2RpZnlDb3VudH08L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxEaXZpZGVyLz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZGV0YWlsLWluZm8gbGl7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGB9XG5cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVUaXRsZSJdfQ== */\n/*@ sourceURL=components/ArticleTitle/index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ArticleTitle);

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_TopTips__ = __webpack_require__("./components/TopTips/index.js");




var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/Header/index.js";




var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;

var TopNav = function TopNav(props) {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Header, {
    style: {
      position: 'fixed',
      height: '64px',
      width: '100%',
      padding: 0,
      zIndex: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 17,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "\u7F51\u7AD9\u9996\u9875"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "\u6587\u7AE0\u5217\u8868"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/Admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\u524D\u7AEF\u6280\u672F"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/Life",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, " \u751F\u6D3B\u4E0E\u521B\u4F5C"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/Test",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, "\u5EFA\u8BAE\u4E0E\u53CD\u9988"))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
    key: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: "/PostArticle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "\u53D1\u5E03\u6587\u7AE0"))))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
    style: {
      padding: '0 50px',
      marginTop: 64
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_TopTips__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopNav);

/***/ }),

/***/ "./components/TopTips/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb__ = __webpack_require__("antd/lib/breadcrumb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_alert__ = __webpack_require__("antd/lib/alert");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);



var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/TopTips/index.js";


var TopTips = function TopTips(props) {
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_alert___default.a, {
    message: "\u535A\u5BA2\u6B63\u5728\u91CD\u6784\u548C\u5F00\u53D1\u4E2D......",
    type: "warning",
    closable: true,
    banner: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    href: "https://github.com/Weibozzz/react-blog",
    icon: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Github")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a, {
    style: {
      margin: '16px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\u7F51\u7AD9\u9996\u9875"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "\u524D\u7AEF\u6280\u672F"), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "171")));
};

/* harmony default export */ __webpack_exports__["a"] = (TopTips);

/***/ }),

/***/ "./config/env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDomain;
var DevDomain = 'http://localhost:7654';
function getDomain() {
  return DevDomain + '/';
}

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

/***/ "./pages/detail/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config/index.js");


var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/detail/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Content = __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default.a.Content;

var Post = function Post(props) {
  console.log(props);
  var _props$blogData = props.blogData,
      blogData = _props$blogData === void 0 ? [] : _props$blogData;

  var _ref = blogData[0] || {},
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$createTime = _ref.createTime,
      createTime = _ref$createTime === void 0 ? '' : _ref$createTime;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    className: "detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Content, {
    style: {
      padding: '0 50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      background: '#fff',
      padding: 24,
      minHeight: 380
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ArticleTitle__["a" /* default */], {
    detailArticle: blogData[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: createTime > __WEBPACK_IMPORTED_MODULE_6__until__["a" /* OldTime */] ? marked(Object(__WEBPACK_IMPORTED_MODULE_6__until__["c" /* getHtml */])(decodeURIComponent(content), createTime), {
        breaks: true
      }) : Object(__WEBPACK_IMPORTED_MODULE_6__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, blogData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(Object(__WEBPACK_IMPORTED_MODULE_9__config__["b" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return blog.json();

          case 7:
            blogData = _context.sent;
            return _context.abrupt("return", {
              blogData: blogData
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

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

var format = __webpack_require__("date-format");

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

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/detail/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/alert":
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),

/***/ "antd/lib/breadcrumb":
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "date-format":
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map