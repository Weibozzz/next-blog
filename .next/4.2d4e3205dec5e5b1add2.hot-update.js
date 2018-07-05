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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config__ = __webpack_require__("./config/index.js");









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
            Object(__WEBPACK_IMPORTED_MODULE_12__store_actions__["d" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_13__config__["g" /* postCommentUrl */])(), queryStringComment);
          }
        });
      }
    });
    _this.state = {
      autoCompleteResult: [1, 2]
    };
    return _this;
  }

  _createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      //表单
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
            lineNumber: 89
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "\u53D1\u8868\u8BC4\u8BBA\uFF1A"), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, "Nickname\xA0", __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip___default.a, {
          title: "What do you want others to call you?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "question-circle-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
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
          lineNumber: 111
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
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
          lineNumber: 125
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(TextArea, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
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
              lineNumber: 168
            }
          }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
            style: {
              color: '#34538b',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }, v.user), "\u8BF4\u9053\uFF1A"),
          extra: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
            href: "javascript:;",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_11__until__["b" /* formatTime */])(v.createTime)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, v.msg));
      }));
    }
  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a.create()(Comments);

/* harmony default export */ __webpack_exports__["a"] = (WrappedRegistrationForm);

/***/ })

})
//# sourceMappingURL=4.2d4e3205dec5e5b1add2.hot-update.js.map