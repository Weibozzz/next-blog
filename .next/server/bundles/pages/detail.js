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

var _jsxFileName = "F:\\myself\\ctrl\\next-blog-1\\next-blog\\components\\ArticleTitle\\index.js";




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
    css: ".detail-info.jsx-3877631247 li.jsx-3877631247{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFydGljbGVUaXRsZVxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUc2QixrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50c1xcQXJ0aWNsZVRpdGxlXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcbXlzZWxmXFxjdHJsXFxuZXh0LWJsb2ctMVxcbmV4dC1ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCwgQXZhdGFyLCBJY29uICxEaXZpZGVyfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtmb3JtYXRUaW1lLGdldEFydGljbGVJbmZvfSBmcm9tICcuLi8uLi91bnRpbCc7XHJcblxyXG5jb25zdCBBcnRpY2xlVGl0bGUgPSAoe2RldGFpbEFydGljbGU9e319KT0+e1xyXG4gIGNvbnN0IHt0aXRsZSxjcmVhdGVUaW1lLHVzZXIsdmlzaXRvcixsYXN0TW9kaWZ5LG1vZGlmeUNvdW50fSA9IGRldGFpbEFydGljbGVcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2xlYXJmaXggZGV0YWlsLWluZm9cIiA+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsXCI+5Y+R5biD5pe26Ze077yae2Zvcm1hdFRpbWUoY3JlYXRlVGltZSl9PC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxcIj7kvZzogIXvvJp7dXNlcn08L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbFwiPua1j+iniOasoeaVsO+8mnt2aXNpdG9yfTwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsXCI+5pyA5ZCO5L+u5pS577yae2Zvcm1hdFRpbWUobGFzdE1vZGlmeSl9PC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxcIj7kv67mlLnmrKHmlbDvvJp7bW9kaWZ5Q291bnR9PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPERpdmlkZXIvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kZXRhaWwtaW5mbyBsaXtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuXHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVRpdGxlIl19 */\n/*@ sourceURL=components\\ArticleTitle\\index.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_constantsData__ = __webpack_require__("./config/constantsData.js");




var _jsxFileName = "F:\\myself\\ctrl\\next-blog-1\\next-blog\\components\\Header\\index.js";





var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var routes = [{
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["g" /* INDEX */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["h" /* INDEX_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["c" /* BLOG */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["d" /* BLOG_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["a" /* ADMIN */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["b" /* ADMIN_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["i" /* LIFE */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["j" /* LIFE_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["m" /* TEST */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["n" /* TEST_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["k" /* POST_ARTICLE */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["l" /* POST_ARTICLE_TXT */]
}];

var TopNav = function TopNav(props) {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 17,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
      lineNumber: 47
    }
  }, routes.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
      key: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      }
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, item.txt)));
  }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
    style: {
      padding: '0 50px',
      marginTop: 64
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_TopTips__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
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



var _jsxFileName = "F:\\myself\\ctrl\\next-blog-1\\next-blog\\components\\TopTips\\index.js";


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

/***/ "./config/constantsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DEV_DOMAIN; });
/* unused harmony export pageNum */
/* unused harmony export TITLE */
/* unused harmony export ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TEST_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COMMON_TITLE; });
/* unused harmony export INDEX_TITLE */
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
var TEST = '/Test';
var TEST_TXT = '测试';
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
  return __WEBPACK_IMPORTED_MODULE_0__constantsData__["f" /* DEV_DOMAIN */] + '/';
}

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBlogUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDetailUrl; });
/* unused harmony export getTotalUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCommentsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__until__ = __webpack_require__("./until/index.js");

 //前台

var getBlogUrl = function getBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getDetailUrl = function getDetailUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/detail' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getTotalUrl = function getTotalUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/total' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getCommentsUrl = function getCommentsUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/comments' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var postCommentUrl = function postCommentUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postComment';
}; //后台

var getAdminBlogUrl = function getAdminBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getAdminBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
  ;
}; // export const getBlogUrl = domain+'/api/getBlog'
// export const getTotalUrl = domain+'/api/total'
// export const getLifeUrl = domain+'/api/life'
// export const getDetailUrl = domain+'/api/detail'
// export const getLastIdUrl = domain+'/api/lastId'
// export const getNextIdUrl = domain+'/api/nextId'
// export const getCommentsUrl = domain+'/api/comments'
// export const postArticleUrl = domain+'/api/postArticle'
// export const postCommentUrl = domain+'/api/postComment'
// export const getAdminBlogUrl = domain + '/api/getAdminBlog'
// export const getAdminCommentsUrl = domain + '/api/getAdminComments'
// export const postAdminDetailUrl = domain + '/api/postAdminDetail'

/***/ }),

/***/ "./pages/detail/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_tooltip__ = __webpack_require__("antd/lib/tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete__ = __webpack_require__("antd/lib/auto-complete");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form__ = __webpack_require__("antd/lib/form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_whatwg_fetch__ = __webpack_require__("whatwg-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__config_constantsData__ = __webpack_require__("./config/constantsData.js");











var _jsxFileName = "F:\\myself\\ctrl\\next-blog-1\\next-blog\\pages\\detail\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Content = __WEBPACK_IMPORTED_MODULE_10_antd_lib_layout___default.a.Content;
var FormItem = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default.a.Option;

var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail(props) {
    var _this;

    _classCallCheck(this, Detail);

    _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleWebsiteChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        var autoCompleteResult;

        if (!_value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
            return "".concat(_value).concat(domain);
          });
        }

        _this.setState({
          autoCompleteResult: autoCompleteResult
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var dispatch = _this.props.dispatch;
        var id = _this.state.articleID;

        if (!id) {
          return;
        }

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            var comment = values.comment,
                email = values.email,
                nickname = values.nickname,
                website = values.website;
            console.log('Received values of form: ', values);
            console.log({
              id: id,
              comment: comment,
              email: email,
              nickname: nickname,
              website: website
            });
            var articleID = _this.state.articleID;
            var queryStringComment = {
              id: articleID,
              comment: comment,
              email: email,
              nickname: nickname,
              website: website
            };
            Object(__WEBPACK_IMPORTED_MODULE_19__store_actions__["b" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_18__config__["d" /* postCommentUrl */])(), queryStringComment);
          }
        });
      }
    });
    _this.state = {
      autoCompleteResult: [1, 2],
      articleID: ''
    };
    return _this;
  }

  _createClass(Detail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props$blogData = this.props.blogData,
          blogData = _props$blogData === void 0 ? [] : _props$blogData;

      var _ref = blogData[0] || {},
          articleID = _ref.id;

      this.setState({
        articleID: articleID
      });
    }
  }, {
    key: "render",
    value: function render() {
      //接口
      console.log(this.props);
      var _props = this.props,
          _props$blogData2 = _props.blogData,
          blogData = _props$blogData2 === void 0 ? [] : _props$blogData2,
          _props$commentsData = _props.commentsData,
          commentsData = _props$commentsData === void 0 ? [] : _props$commentsData,
          _props$getCommentsDat = _props.getCommentsData,
          getCommentsData = _props$getCommentsDat === void 0 ? [] : _props$getCommentsDat;
      var articleID = this.state.articleID;

      var _ref2 = blogData[0] || {},
          _ref2$content = _ref2.content,
          content = _ref2$content === void 0 ? '' : _ref2$content,
          _ref2$createTime = _ref2.createTime,
          createTime = _ref2$createTime === void 0 ? '' : _ref2$createTime,
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? '' : _ref2$title;

      commentsData = _toConsumableArray(commentsData).concat(_toConsumableArray(getCommentsData)).filter(function (v) {
        return v.a_id === articleID;
      }).sort(function (a, b) {
        return b.createTime - a.createTime;
      }); //表单

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var autoCompleteResult = this.state.autoCompleteResult;
      var formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };
      var tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      };
      var websiteOptions = autoCompleteResult.map(function (website) {
        return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(AutoCompleteOption, {
          key: website,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, title, __WEBPACK_IMPORTED_MODULE_20__config_constantsData__["e" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__components_ArticleTitle__["a" /* default */], {
        detailArticle: blogData[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: createTime > __WEBPACK_IMPORTED_MODULE_15__until__["a" /* OldTime */] ? marked(Object(__WEBPACK_IMPORTED_MODULE_15__until__["c" /* getHtml */])(decodeURIComponent(content), createTime), {
            breaks: true
          }) : Object(__WEBPACK_IMPORTED_MODULE_15__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      })), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "\u53D1\u8868\u8BC4\u8BBA\uFF1A"), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_col___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, "Nickname\xA0", __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_tooltip___default.a, {
          title: "What do you want others to call you?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_icon___default.a, {
          type: "question-circle-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: true,
          message: 'Please input your nickname!',
          whitespace: true
        }]
      })(__WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }))), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: false,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }))), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), getFieldDecorator('website', {
        rules: [{
          required: false,
          message: 'Please input website!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default.a, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      })))), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(TextArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }))), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "\u63D0\u4EA4\u8BC4\u8BBA"))))), commentsData.map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_card___default.a, {
          bodyStyle: {
            background: "#f8f8f8"
          },
          key: i,
          title: __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            }
          }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("span", {
            style: {
              color: '#34538b',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            }
          }, v.user), "\u8BF4\u9053\uFF1A"),
          extra: __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("a", {
            href: "javascript:;",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_15__until__["b" /* formatTime */])(v.createTime)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, v.msg));
      })))));
    }
  }]);

  return Detail;
}(__WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, comments, blogData, commentsData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_18__config__["c" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_18__config__["b" /* getCommentsUrl */])(queryStrObj));

          case 7:
            comments = _context.sent;
            _context.next = 10;
            return blog.json();

          case 10:
            blogData = _context.sent;
            _context.next = 13;
            return comments.json();

          case 13:
            commentsData = _context.sent;
            return _context.abrupt("return", {
              blogData: blogData,
              commentsData: commentsData
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var getCommentsData = state.getCommentsData;
  return {
    getCommentsData: getCommentsData
  };
};

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.create()(Detail);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_12_react_redux__["connect"])(mapStateToProps)(WrappedRegistrationForm));

/***/ }),

/***/ "./store/action-types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
var actionTypes = {
  //前台
  SEARCH_DATA: 'SEARCH_DATA',
  GET_SEARCH_TOTAL_DATA: 'GET_SEARCH_TOTAL_DATA',
  SEARCH_PAGE_DATA: 'SEARCH_PAGE_DATA',
  POST_COMMENTS: 'POST_COMMENTS',
  //后台
  GET_ADMIN_DATA: 'GET_ADMIN_DATA'
};

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSearchPageList */
/* unused harmony export getSearchList */
/* unused harmony export getSearchTotal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postComments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__("./store/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


 //前台

var getSearchPageList =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jsonData = _context.sent;
            return _context.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].SEARCH_PAGE_DATA,
              searchData: jsonData
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSearchPageList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getSearchList =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            jsonData = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].SEARCH_DATA,
              searchData: jsonData
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getSearchList(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getSearchTotal =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            jsonData = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_SEARCH_TOTAL_DATA,
              searchTotalData: jsonData
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getSearchTotal(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //后台

var getAdminBlogList =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return res.json();

          case 5:
            jsonData = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_ADMIN_DATA,
              adminBlogData: jsonData
            }));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getAdminBlogList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var postComments =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context5.sent;
            _context5.next = 5;
            return res.json();

          case 5:
            jsonData = _context5.sent;
            return _context5.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_COMMENTS,
              getCommentsData: jsonData
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function postComments(_x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

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

/***/ "antd/lib/auto-complete":
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "antd/lib/breadcrumb":
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/form":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

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

/***/ "antd/lib/tooltip":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

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

/***/ }),

/***/ "whatwg-fetch":
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map