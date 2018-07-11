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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHtml; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toQueryStr;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return regUrl; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var format = __webpack_require__(10);

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
var OldTime = 1531094400; // 2018-07-09 00:00:00 星期一

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
var regUrl = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DEV_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ONLINE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return TITLE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INDEX_TITLE; });
//請求地址
var DEV_DOMAIN = 'http://localhost:7654';
var ONLINE_DOMAIN = 'http://www.liuweibo.cn:7654';
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
var ABOUT_TXT = '关于我';
var POST_ARTICLE = '/PostArticle';
var POST_ARTICLE_TXT = '发布文章'; //seo

var COMMON_TITLE = '>>刘伟波-天天向上';
var INDEX_TITLE = '刘伟波的个人主页';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// CONCATENATED MODULE: ./config/env.js

var dev = "production" !== 'production';
function getDomain() {
  return dev ? constantsData["i" /* DEV_DOMAIN */] : constantsData["o" /* ONLINE_DOMAIN */] + '/';
}
// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(1);

// CONCATENATED MODULE: ./config/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config_getBlogUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return config_getDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return config_getTotalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return config_getLastIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return config_getNextIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return config_getCommentsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return config_postCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return config_postArticleUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return config_getLifeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config_getAdminBlogUrl; });
/* unused harmony export postAdminDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return config_postAdminPasswordUrl; });

 //前台

var config_getBlogUrl = function getBlogUrl(obj) {
  return getDomain() + 'api/getBlog' + Object(until["f" /* toQueryStr */])(obj);
};
var config_getDetailUrl = function getDetailUrl(obj) {
  return getDomain() + 'api/detail' + Object(until["f" /* toQueryStr */])(obj);
};
var config_getTotalUrl = function getTotalUrl(obj) {
  return getDomain() + 'api/total' + Object(until["f" /* toQueryStr */])(obj);
};
var config_getLastIdUrl = function getLastIdUrl(obj) {
  return getDomain() + 'api/lastId' + Object(until["f" /* toQueryStr */])(obj);
};
var config_getNextIdUrl = function getNextIdUrl(obj) {
  return getDomain() + 'api/nextId' + Object(until["f" /* toQueryStr */])(obj);
};
var config_getCommentsUrl = function getCommentsUrl(obj) {
  return getDomain() + 'api/comments' + Object(until["f" /* toQueryStr */])(obj);
};
var config_postCommentUrl = function postCommentUrl() {
  return getDomain() + 'api/postComment';
};
var config_postArticleUrl = function postArticleUrl() {
  //发表文章
  return getDomain() + 'api/postArticle';
};
var config_getLifeUrl = function getLifeUrl() {
  //生活板块
  return getDomain() + 'api/life';
}; //后台

var config_getAdminBlogUrl = function getAdminBlogUrl(obj) {
  return getDomain() + 'api/getAdminBlog' + Object(until["f" /* toQueryStr */])(obj);
};
var config_postAdminDetailUrl = function postAdminDetailUrl() {
  return getDomain() + 'api/postAdminDetail';
};
var config_postAdminPasswordUrl = function postAdminPasswordUrl() {
  return getDomain() + 'api/postAdminPassword';
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
var actionTypes = {
  //前台
  SEARCH_DATA: 'SEARCH_DATA',
  GET_SEARCH_TOTAL_DATA: 'GET_SEARCH_TOTAL_DATA',
  SEARCH_PAGE_DATA: 'SEARCH_PAGE_DATA',
  GET_LIFE: 'GET_LIFE',
  POST_COMMENTS: 'POST_COMMENTS',
  POST_ARTICLE: 'POST_ARTICLE',
  //后台
  GET_ADMIN_DATA: 'GET_ADMIN_DATA',
  POST_ADMIN_DETAIL: 'POST_ADMIN_DETAIL',
  POST_ADMIN_PASSWORD: 'POST_ADMIN_PASSWORD'
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSearchTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLifeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return postArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return postAdminPassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__(12);
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
}();
var getLifeList =
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
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_LIFE,
              lifeData: jsonData
            }));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getLifeList(_x7, _x8) {
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
var postArticle =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context6.sent;
            _context6.next = 5;
            return res.json();

          case 5:
            jsonData = _context6.sent;
            return _context6.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_ARTICLE,
              postArticleData: jsonData
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function postArticle(_x12, _x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}(); //后台

var getAdminBlogList =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(dispatch, url) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url);

          case 2:
            res = _context7.sent;
            _context7.next = 5;
            return res.json();

          case 5:
            jsonData = _context7.sent;
            return _context7.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].GET_ADMIN_DATA,
              adminBlogData: jsonData
            }));

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getAdminBlogList(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}(); // export const postAdminDetail = async (dispatch, url) => {
//   //修改文章
//   const res = await fetch(url)
//   const jsonData = await res.json()
//   return dispatch({type: actionTypes.POST_ADMIN_DETAIL, postAdminDetailData: jsonData})
// }

var postAdminPassword =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context8.sent;
            _context8.next = 5;
            return res.json();

          case 5:
            jsonData = _context8.sent;
            return _context8.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_ADMIN_PASSWORD,
              postAdminPasswordData: jsonData
            }));

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function postAdminPassword(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(14);
var row__default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(26);
var menu__default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(15);
var col__default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(5);
var layout__default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(9);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd/lib/breadcrumb"
var breadcrumb_ = __webpack_require__(27);
var breadcrumb__default = /*#__PURE__*/__webpack_require__.n(breadcrumb_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(16);
var button__default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/alert"
var alert_ = __webpack_require__(28);
var alert__default = /*#__PURE__*/__webpack_require__.n(alert_);

// CONCATENATED MODULE: ./components/TopTips/index.js






var TopTips_TopTips = function TopTips(props) {
  // console.log(props,this,window)

  /*onst pathnameArr = location.pathname.split('/').slice(1);
  const pathBreancrumbList = [
    {
      key:'',
      value:['网站首页']
    },
    {
      key:'Blog',
      value:['文章列表']
    },
    {
      key:'Admin',
      value:['后台管理']
    },
    {
      key:'Life',
      value:['生活记录']
    },
    {
      key:'PostArticle',
      value:['发布文章']
    },
  ]
  const fn = (arr,pathBreancrumbList)=>{
    if(arr.length===1){
      let valueIndex = pathBreancrumbList.findIndex(s=>s.key===arr.join(' '));
      return pathBreancrumbList[valueIndex].value;
    }
    return ['文章列表',arr[1]]
  }*/
  var BreadcrumbItemList = ['']; // const BreadcrumbItemList = fn(pathnameArr,pathBreancrumbList)
  // console.log(BreadcrumbItemList)

  return external__react__default.a.createElement("div", {
    className: "Blog"
  }, external__react__default.a.createElement(alert__default.a, {
    message: "\u535A\u5BA2\u6B63\u5728\u91CD\u6784\u548C\u5F00\u53D1\u4E2D......",
    type: "warning",
    closable: true,
    banner: true
  }), external__react__default.a.createElement("div", null, external__react__default.a.createElement(button__default.a, {
    href: "https://github.com/Weibozzz/react-blog",
    icon: "github"
  }, "Github")), external__react__default.a.createElement(breadcrumb__default.a, {
    style: {
      margin: '16px 0'
    }
  }, BreadcrumbItemList.map(function (v, index) {
    return external__react__default.a.createElement(breadcrumb__default.a.Item, {
      key: index
    }, "\u7F51\u7AD9\u9996\u9875");
  })));
};

/* harmony default export */ var components_TopTips = (TopTips_TopTips);
// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./config/index.js + 1 modules
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Header/index.js





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Header = layout__default.a.Header,
    Content = layout__default.a.Content;
var routes = [{
  href: constantsData["j" /* INDEX */],
  txt: constantsData["l" /* INDEX_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["f" /* BLOG */],
  txt: constantsData["g" /* BLOG_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["m" /* LIFE */],
  txt: constantsData["n" /* LIFE_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["a" /* ABOUT */],
  txt: constantsData["b" /* ABOUT_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["c" /* ADMIN */],
  txt: constantsData["d" /* ADMIN_TXT */],
  isSuperAdmin: true
}, {
  href: constantsData["p" /* POST_ARTICLE */],
  txt: constantsData["q" /* POST_ARTICLE_TXT */],
  isSuperAdmin: true
}, {
  href: 'javascript:;',
  txt: '退出',
  isSuperAdmin: true,
  exit: true
}];

var Header_TopNav =
/*#__PURE__*/
function (_Component) {
  _inherits(TopNav, _Component);

  function TopNav(props) {
    var _this;

    _classCallCheck(this, TopNav);

    _this = _possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).call(this, props));
    _this.state = {
      isLogin: false
    };
    return _this;
  }

  _createClass(TopNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var dispatch = this.props.dispatch;
      var _localStorage = localStorage,
          _localStorage$passwor = _localStorage.password,
          password = _localStorage$passwor === void 0 ? '' : _localStorage$passwor;

      if (!password) {
        return;
      }

      Object(actions["f" /* postAdminPassword */])(dispatch, Object(config["i" /* postAdminPasswordUrl */])(), {
        password: password
      }).then(function (res) {
        var _res$postAdminPasswor = res.postAdminPasswordData,
            postAdminPasswordData = _res$postAdminPasswor === void 0 ? [] : _res$postAdminPasswor;

        if (postAdminPasswordData.length) {
          _this2.setState({
            isLogin: true
          });
        }
      });
    }
  }, {
    key: "onExit",
    value: function onExit() {
      console.log(3333);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var isLogin = this.state.isLogin;
      var newRoutes;

      if (isLogin) {
        newRoutes = routes;
      } else {
        newRoutes = routes.filter(function (v) {
          return !v.isSuperAdmin;
        });
      }

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external__react__default.a.createElement("meta", {
        charSet: "utf-8"
      }), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      })), external__react__default.a.createElement(layout__default.a, null, external__react__default.a.createElement(Header, {
        style: {
          position: 'fixed',
          height: '64px',
          width: '100%',
          padding: 0,
          zIndex: 10
        }
      }, external__react__default.a.createElement(row__default.a, null, external__react__default.a.createElement(col__default.a, {
        span: 2
      }), external__react__default.a.createElement(col__default.a, {
        span: 17
      }, external__react__default.a.createElement(menu__default.a, {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ['/'],
        style: {
          lineHeight: '64px'
        }
      }, newRoutes.map(function (item, index) {
        return item.exit ? external__react__default.a.createElement(menu__default.a.Item, {
          key: item.href
        }, external__react__default.a.createElement(link__default.a, {
          href: item.href
        }, external__react__default.a.createElement("a", {
          onClick: _this3.onExit.bind(_this3)
        }, item.txt))) : external__react__default.a.createElement(menu__default.a.Item, {
          key: item.href
        }, external__react__default.a.createElement(link__default.a, {
          href: item.href
        }, external__react__default.a.createElement("a", null, item.txt)));
      }))))), external__react__default.a.createElement(Content, {
        style: {
          padding: '0 50px',
          marginTop: 64
        }
      }, external__react__default.a.createElement(components_TopTips, null))));
    }
  }]);

  return TopNav;
}(external__react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var postAdminPasswordData = state.postAdminPasswordData;
  return {
    postAdminPasswordData: postAdminPasswordData
  };
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(mapStateToProps)(Header_TopNav));

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(17);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__(25);

// CONCATENATED MODULE: ./components/MyLayout.js


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var MyLayout_Layout = function Layout(props) {
  console.log(props);
  return external__react__default.a.createElement("div", {
    style: layoutStyle
  }, external__react__default.a.createElement(Header["a" /* default */], null), props.children);
};

/* harmony default export */ var MyLayout = (MyLayout_Layout);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(70);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(37);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// CONCATENATED MODULE: ./pages/markdown.js





/* harmony default export */ var markdown = __webpack_exports__["default"] = (Object(router_["withRouter"])(function (props) {
  return external__react__default.a.createElement(MyLayout, null, external__react__default.a.createElement("h1", {
    className: "jsx-3267370368"
  }, props.router.query.title), external__react__default.a.createElement("div", {
    className: "jsx-3267370368" + " " + "markdown"
  }, external__react__default.a.createElement(external__react_markdown__default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\n# git\u547D\u4EE4\n## \u521D\u59CB\u5316\n\u8BBE\u7F6E\u7528\u6237\u540D\uFF0C\u90AE\u7BB1\n```bash\ngit config --global user.name \"Author Name\"\ngit config --global user.email \"Author Email\"\n```\n\u67E5\u770B\u90AE\u7BB1\u7528\u6237\u540D\u7B49\u9009\u9879\n```bash\ngitc onfig --list\n```\n\n\u521D\u59CB\u5316\u4E00\u4E2AGit\u4ED3\u5E93\uFF0C\u4F7F\u7528`git init`\u547D\u4EE4\u3002\n\u7B2C\u4E00\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git add .`,\u6DFB\u52A0\u5168\u90E8 \uFF0C\u6CE8\u610F\uFF0C\u53EF\u53CD\u590D\u591A\u6B21\u4F7F\u7528\uFF0C\u6DFB\u52A0\u591A\u4E2A\u6587\u4EF6\uFF1B\n\u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u547D\u4EE4`git commit -m \"\u63D0\u4EA4\u7684\u6CE8\u91CA\"`\uFF0C\u5B8C\u6210\u3002\n\n\nAnd here's the content.\n     "
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "3267370368",
    css: [".markdown{font-family:'Arial';}", ".markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}", ".markdown a:hover{opacity:0.6;}", ".markdown h3{margin:0;padding:0;text-transform:uppercase;}"]
  }));
}));

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })
/******/ ]);