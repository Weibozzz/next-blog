webpackHotUpdate(9,{

/***/ "./pages/AdminDetail/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_auto_complete__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__ = __webpack_require__("./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_EditArticle__ = __webpack_require__("./components/EditArticle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_constantsData__ = __webpack_require__("./config/constantsData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__until__ = __webpack_require__("./until/index.js");





var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/AdminDetail/index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Content = __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Content;
var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_1_antd_lib_auto_complete___default.a.Option;

var AdminDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminDetail, _Component);

  function AdminDetail(props) {
    var _this;

    _classCallCheck(this, AdminDetail);

    _this = _possibleConstructorReturn(this, (AdminDetail.__proto__ || Object.getPrototypeOf(AdminDetail)).call(this, props));
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

  _createClass(AdminDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props$adminBlogDetai = this.props.adminBlogDetailData,
          adminBlogDetailData = _props$adminBlogDetai === void 0 ? [] : _props$adminBlogDetai;

      var _ref = adminBlogDetailData[0] || {},
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
      var _props$adminBlogDetai2 = this.props.adminBlogDetailData,
          adminBlogDetailData = _props$adminBlogDetai2 === void 0 ? [] : _props$adminBlogDetai2;
      var _state$articleID = this.state.articleID,
          articleID = _state$articleID === void 0 ? '' : _state$articleID;
      var objArticleInfo = Object(__WEBPACK_IMPORTED_MODULE_13__until__["c" /* getArticleInfo */])(adminBlogDetailData);
      var _objArticleInfo$title = objArticleInfo.title,
          title = _objArticleInfo$title === void 0 ? '' : _objArticleInfo$title,
          _objArticleInfo$url = objArticleInfo.url,
          url = _objArticleInfo$url === void 0 ? '' : _objArticleInfo$url,
          _objArticleInfo$short = objArticleInfo.short,
          short = _objArticleInfo$short === void 0 ? '' : _objArticleInfo$short,
          _objArticleInfo$type = objArticleInfo.type,
          type = _objArticleInfo$type === void 0 ? '' : _objArticleInfo$type;
      adminBlogDetailData = adminBlogDetailData[0] || {};
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_11__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ArticleTitle__["a" /* default */], {
        detailArticle: adminBlogDetailData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_EditArticle__["a" /* default */], {
        dataSource: Object.assign({}, adminBlogDetailData, {
          c: 3
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })))));
    }
  }]);

  return AdminDetail;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

AdminDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, adminBlogDetail, adminBlogDetailData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["c" /* getDetailUrl */])(queryStrObj));

          case 4:
            adminBlogDetail = _context.sent;
            _context.next = 7;
            return adminBlogDetail.json();

          case 7:
            adminBlogDetailData = _context.sent;
            return _context.abrupt("return", {
              adminBlogDetailData: adminBlogDetailData
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

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create()(AdminDetail);

/* harmony default export */ __webpack_exports__["default"] = (WrappedRegistrationForm);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/AdminDetail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.00d64c9399191f8fe1de.hot-update.js.map