webpackHotUpdate(9,{

/***/ "./components/EditArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_select__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Edit__ = __webpack_require__("./components/Edit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions__ = __webpack_require__("./store/actions.js");





var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/EditArticle/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var TextArea = __WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a.TextArea;
var Option = __WEBPACK_IMPORTED_MODULE_3_antd_lib_select___default.a.Option;

var EditArticle =
/*#__PURE__*/
function (_Component) {
  _inherits(EditArticle, _Component);

  function EditArticle(props) {
    var _this;

    _classCallCheck(this, EditArticle);

    _this = _possibleConstructorReturn(this, (EditArticle.__proto__ || Object.getPrototypeOf(EditArticle)).call(this, props));
    _this.state = {
      selectVal: '',
      titleVal: '',
      shortVal: '',
      urlVal: '',
      editCont: ''
    };
    return _this;
  }

  _createClass(EditArticle, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props$dataSource = this.props.dataSource,
          dataSource = _props$dataSource === void 0 ? {} : _props$dataSource;
      var title = dataSource.title,
          short = dataSource.short,
          type = dataSource.type,
          url = dataSource.url,
          content = dataSource.content;
      this.setState({
        selectVal: type,
        titleVal: title,
        shortVal: short,
        urlVal: url,
        editCont: content
      });
    }
  }, {
    key: "handleChangeSelect",
    value: function handleChangeSelect(value) {
      this.setState({
        selectVal: value
      });
    }
  }, {
    key: "handleChangeTitle",
    value: function handleChangeTitle(e) {
      this.setState({
        titleVal: e.target.value
      });
    }
  }, {
    key: "handleChangeUrl",
    value: function handleChangeUrl(e) {
      this.setState({
        urlVal: e.target.value
      });
    }
  }, {
    key: "handleChangeShort",
    value: function handleChangeShort(e) {
      this.setState({
        shortVal: e.target.value
      });
    } //编辑器内容

  }, {
    key: "handleChangeMarkEdit",
    value: function handleChangeMarkEdit(txt) {
      this.setState({
        editCont: txt
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var dispatch = this.props.dispatch;
      var _state = this.state,
          selectVal = _state.selectVal,
          titleVal = _state.titleVal,
          shortVal = _state.shortVal,
          urlVal = _state.urlVal,
          editCont = _state.editCont;
      Object(__WEBPACK_IMPORTED_MODULE_9__store_actions__["e" /* postArticle */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_8__config__["e" /* postArticleUrl */])(), {
        title: titleVal,
        url: urlVal,
        content: encodeURIComponent(editCont),
        user: '刘伟波',
        type: selectVal,
        short: shortVal,
        img: 'js.png'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state2 = this.state,
          _state2$editCont = _state2.editCont,
          editCont = _state2$editCont === void 0 ? '' : _state2$editCont,
          _state2$selectVal = _state2.selectVal,
          selectVal = _state2$selectVal === void 0 ? '' : _state2$selectVal,
          _state2$titleVal = _state2.titleVal,
          titleVal = _state2$titleVal === void 0 ? '' : _state2$titleVal,
          _state2$shortVal = _state2.shortVal,
          shortVal = _state2$shortVal === void 0 ? '' : _state2$shortVal,
          _state2$urlVal = _state2.urlVal,
          urlVal = _state2$urlVal === void 0 ? '' : _state2$urlVal;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: titleVal,
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_select___default.a, {
        defaultValue: selectVal === '' ? '文章类型' : selectVal,
        style: {
          width: '100%'
        },
        onChange: this.handleChangeSelect.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "html"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "css"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "javascript"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "vue"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "react"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "angular"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "node",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "node"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "php",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "php"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "mysql"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "\u670D\u52A1\u5668\u4E4B\u7C7B"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "interesting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "\u751F\u6D3B\u559C\u597D"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "fight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "\u6FC0\u52B1\u5411\u4E0A"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "\u5176\u4ED6")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: urlVal,
        onChange: this.handleChangeUrl.bind(this),
        placeholder: "\u539F\u6587\u7684URL\u94FE\u63A5\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        defaultValue: shortVal,
        rows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Edit__["a" /* default */], {
        editCont: editCont,
        handleChangeMarkEdit: this.handleChangeMarkEdit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "\u63D0\u4EA4"));
    }
  }]);

  return EditArticle;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])()(EditArticle));

/***/ }),

/***/ "./config/constantsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEV_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TEST_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INDEX_TITLE; });
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
  return __WEBPACK_IMPORTED_MODULE_0__constantsData__["g" /* DEV_DOMAIN */] + '/';
}

/***/ }),

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
      var objArticleInfo = Object(__WEBPACK_IMPORTED_MODULE_13__until__["b" /* getArticleInfo */])(adminBlogDetailData);
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
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_11__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ArticleTitle__["a" /* default */], {
        detailArticle: adminBlogDetailData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_EditArticle__["a" /* default */], {
        dataSource: adminBlogDetailData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSearchTotal; });
/* unused harmony export getLifeList */
/* unused harmony export postComments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__("./store/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/_isomorphic-unfetch@2.0.0@isomorphic-unfetch/browser.js");
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
}();

/***/ })

})
//# sourceMappingURL=9.de7c0a3514e3608d4240.hot-update.js.map