webpackHotUpdate(4,{

/***/ "./components/ListTitle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__until__ = __webpack_require__("./until/index.js");

var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\components\\ListTitle\\index.js";





var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, {
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

var ListTitle = function ListTitle(data) {
  console.log(data);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "123");
};

/* harmony default export */ __webpack_exports__["a"] = (ListTitle);

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBlogUrl; });
/* unused harmony export getDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTotalUrl; });
/* unused harmony export getLastIdUrl */
/* unused harmony export getNextIdUrl */
/* unused harmony export getCommentsUrl */
/* unused harmony export postCommentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLifeUrl; });
/* unused harmony export getAdminBlogUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__until__ = __webpack_require__("./until/index.js");

 //前台

var getBlogUrl = function getBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var getDetailUrl = function getDetailUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/detail' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var getTotalUrl = function getTotalUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/total' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var getLastIdUrl = function getLastIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/lastId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var getNextIdUrl = function getNextIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/nextId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var getCommentsUrl = function getCommentsUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/comments' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
};
var postCommentUrl = function postCommentUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postComment';
};
var getLifeUrl = function getLifeUrl() {
  //生活板块
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/life';
}; //后台

var getAdminBlogUrl = function getAdminBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getAdminBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["a" /* toQueryStr */])(obj);
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

/***/ "./node_modules/_antd@3.6.5@antd/lib/avatar/index.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/calendar/locale/en_US.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/date-picker/locale/en_US.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/list/Item.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/list/index.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/locale-provider/LocaleReceiver.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/locale-provider/default.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/pagination/MiniSelect.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/pagination/Pagination.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/pagination/index.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/select/index.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/spin/index.js":
false,

/***/ "./node_modules/_antd@3.6.5@antd/lib/time-picker/locale/en_US.js":
false,

/***/ "./node_modules/_rc-calendar@9.6.2@rc-calendar/lib/locale/en_US.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/DOMWrap.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/Divider.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/Menu.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/MenuItem.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/MenuItemGroup.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/SubMenu.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/SubPopupMenu.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/index.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/placements.js":
false,

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/util.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/KeyCode.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/Options.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/Pager.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/Pagination.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/index.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/es/locale/zh_CN.js":
false,

/***/ "./node_modules/_rc-pagination@1.16.4@rc-pagination/lib/locale/en_US.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/DropdownMenu.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/OptGroup.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/Option.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/PropTypes.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/Select.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/SelectTrigger.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/index.js":
false,

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/util.js":
false,

/***/ "./node_modules/_rc-util@4.5.1@rc-util/es/Children/toArray.js":
false,

/***/ "./node_modules/_warning@3.0.0@warning/browser.js":
false,

/***/ "./pages/Life/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_whatwg_fetch__ = __webpack_require__("./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ListTitle__ = __webpack_require__("./components/ListTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_constantsData__ = __webpack_require__("./config/constantsData.js");

var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\Life\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Content = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a.Content;

var Life =
/*#__PURE__*/
function (_Component) {
  _inherits(Life, _Component);

  function Life() {
    var _this;

    _classCallCheck(this, Life);

    _this = _possibleConstructorReturn(this, (Life.__proto__ || Object.getPrototypeOf(Life)).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(Life, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('pages life ', this.props);
      var dispatch = this.props.dispatch;
      Object(__WEBPACK_IMPORTED_MODULE_6__store_actions__["a" /* getLifeList */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_10__config__["b" /* getLifeUrl */])());
    }
  }, {
    key: "render",
    value: function render() {
      var lifeData = this.props.lifeData;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "life",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_11__config_constantsData__["i" /* INDEX_TITLE */], __WEBPACK_IMPORTED_MODULE_11__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListTitle__["a" /* default */], {
        listData: {
          lifeData: lifeData,
          pathName: 'Life'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "235")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }));
    }
  }]);

  return Life;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //这里根据需要传入redux


var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  var lifeData = state.lifeData;
  return {
    lifeData: lifeData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Life));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Life\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./until/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* unused harmony export formatTime */
/* unused harmony export getArticleInfo */
/* unused harmony export OldTime */
/* unused harmony export getHtml */
/* harmony export (immutable) */ __webpack_exports__["a"] = toQueryStr;
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
//# sourceMappingURL=4.3124eec1b472f95157a6.hot-update.js.map