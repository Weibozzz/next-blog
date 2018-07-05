webpackHotUpdate(4,{

/***/ "./components/Comments/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/card/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_form__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__("./config/index.js");









var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/Comments/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var FormItem = __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete___default.a.Option;

var Comments =
/*#__PURE__*/
function (_Component) {
  _inherits(Comments, _Component);

  function Comments(props) {
    var _this;

    _classCallCheck(this, Comments);

    _this = _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).call(this, props));
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
        var _this$props = _this.props,
            dispatch = _this$props.dispatch,
            id = _this$props.articleID;

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
            Object(__WEBPACK_IMPORTED_MODULE_13__store_actions__["d" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_14__config__["g" /* postCommentUrl */])(), queryStringComment);
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

  _createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.props);
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
      var _props$dataSource = this.props.dataSource,
          dataSource = _props$dataSource === void 0 ? {} : _props$dataSource;
      var _dataSource$commentsD = dataSource.commentsData,
          commentsData = _dataSource$commentsD === void 0 ? [] : _dataSource$commentsD; //表单

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
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(AutoCompleteOption, {
          key: website,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "\u53D1\u8868\u8BC4\u8BBA\uFF1A"), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Nickname\xA0", __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip___default.a, {
          title: "What do you want others to call you?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "question-circle-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: true,
          message: 'Please input your nickname!',
          whitespace: true
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: false,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), getFieldDecorator('website', {
        rules: [{
          required: false,
          message: 'Please input website!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete___default.a, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(TextArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "\u63D0\u4EA4\u8BC4\u8BBA"))))), commentsData.map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
          bodyStyle: {
            background: "#f8f8f8"
          },
          key: i,
          title: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            }
          }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
            style: {
              color: '#34538b',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            }
          }, v.user), "\u8BF4\u9053\uFF1A"),
          extra: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
            href: "javascript:;",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_12__until__["b" /* formatTime */])(v.createTime)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, v.msg));
      }));
    }
  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a.create()(Comments);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["b" /* connect */])()(WrappedRegistrationForm));

/***/ }),

/***/ "./pages/detail/index.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_PrevNextPage__ = __webpack_require__("./components/PrevNextPage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Comments__ = __webpack_require__("./components/Comments/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config_constantsData__ = __webpack_require__("./config/constantsData.js");





var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/detail/index.js";

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var Content = __WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a.Content;
var FormItem = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_1_antd_lib_auto_complete___default.a.Option;

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
            Object(__WEBPACK_IMPORTED_MODULE_16__store_actions__["d" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_15__config__["g" /* postCommentUrl */])(), queryStringComment);
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
          getCommentsData = _props$getCommentsDat === void 0 ? [] : _props$getCommentsDat,
          _props$lastIdData = _props.lastIdData,
          lastIdData = _props$lastIdData === void 0 ? [] : _props$lastIdData,
          _props$nextIdData = _props.nextIdData,
          nextIdData = _props$nextIdData === void 0 ? [] : _props$nextIdData;
      var articleID = this.state.articleID;

      var _ref2 = blogData[0] || {},
          _ref2$content = _ref2.content,
          content = _ref2$content === void 0 ? '' : _ref2$content,
          _ref2$createTime = _ref2.createTime,
          createTime = _ref2$createTime === void 0 ? '' : _ref2$createTime,
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? '' : _ref2$title,
          _ref2$url = _ref2.url,
          url = _ref2$url === void 0 ? '' : _ref2$url;

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
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(AutoCompleteOption, {
          key: website,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        className: "detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, title, __WEBPACK_IMPORTED_MODULE_17__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_ArticleTitle__["a" /* default */], {
        detailArticle: blogData[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: createTime > __WEBPACK_IMPORTED_MODULE_10__until__["a" /* OldTime */] ? marked(Object(__WEBPACK_IMPORTED_MODULE_10__until__["c" /* getHtml */])(decodeURIComponent(content), createTime), {
            breaks: true
          }) : Object(__WEBPACK_IMPORTED_MODULE_10__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_PrevNextPage__["a" /* default */], {
        dataSource: {
          url: url,
          lastIdData: lastIdData,
          nextIdData: nextIdData
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Comments__["a" /* default */], {
        dataSource: {
          commentsData: commentsData,
          articleID: articleID
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }))));
    }
  }]);

  return Detail;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, comments, lastId, nextId, blogData, commentsData, lastIdData, nextIdData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_15__config__["c" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_15__config__["b" /* getCommentsUrl */])(queryStrObj));

          case 7:
            comments = _context.sent;
            _context.next = 10;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_15__config__["d" /* getLastIdUrl */])(queryStrObj));

          case 10:
            lastId = _context.sent;
            _context.next = 13;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_15__config__["e" /* getNextIdUrl */])(queryStrObj));

          case 13:
            nextId = _context.sent;
            _context.next = 16;
            return blog.json();

          case 16:
            blogData = _context.sent;
            _context.next = 19;
            return comments.json();

          case 19:
            commentsData = _context.sent;
            _context.prev = 20;
            _context.next = 23;
            return lastId.json();

          case 23:
            lastIdData = _context.sent;
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](20);
            lastIdData = [];

          case 29:
            _context.prev = 29;
            _context.next = 32;
            return nextId.json();

          case 32:
            nextIdData = _context.sent;
            _context.next = 38;
            break;

          case 35:
            _context.prev = 35;
            _context.t1 = _context["catch"](29);
            nextIdData = [];

          case 38:
            return _context.abrupt("return", {
              blogData: blogData,
              commentsData: commentsData,
              lastIdData: lastIdData,
              nextIdData: nextIdData
            });

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[20, 26], [29, 35]]);
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

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_3_antd_lib_form___default.a.create()(Detail);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])(mapStateToProps)(WrappedRegistrationForm));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/detail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.968ee970998f0c0fb33c.hot-update.js.map