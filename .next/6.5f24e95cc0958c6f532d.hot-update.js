webpackHotUpdate(6,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_message__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/message/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__config__ = __webpack_require__("./config/index.js");










var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/Comments/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






 //表单定义

var FormItem = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default.a.Option;
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
          autoCompleteResult = ['.com', '.cn', '.org', '.net'].map(function (domain) {
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
            _this$props$dataSourc = _this$props.dataSource,
            dataSource = _this$props$dataSourc === void 0 ? {} : _this$props$dataSourc;
        var id = dataSource.articleID;

        if (!id) {
          return;
        }

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            var comment = values.comment,
                email = values.email,
                nickname = values.nickname,
                website = values.website;

            if (website !== '' && !__WEBPACK_IMPORTED_MODULE_13__until__["d" /* regUrl */].test(website)) {
              __WEBPACK_IMPORTED_MODULE_6_antd_lib_message___default.a.warning('url不正确,示例："http://www.xxx.com"');

              return;
            }

            var queryStringComment = {
              id: id,
              comment: comment,
              email: email,
              nickname: nickname,
              website: website
            };
            Object(__WEBPACK_IMPORTED_MODULE_14__store_actions__["d" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_15__config__["g" /* postCommentUrl */])(), queryStringComment).then(function (res) {
              if (res) {
                __WEBPACK_IMPORTED_MODULE_6_antd_lib_message___default.a.success("\u8BC4\u8BBA\u53D1\u8868\u6210\u529F");
              }
            });
          }
        });
      }
    });
    _this.state = {
      autoCompleteResult: [],
      articleID: ''
    };
    return _this;
  }

  _createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props$blogData = this.props.blogData,
          blogData = _props$blogData === void 0 ? [] : _props$blogData;
      console.log('components comments', this.props);

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
      var websiteOptions = autoCompleteResult.map(function (website) {
        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(AutoCompleteOption, {
          key: website,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, "\u53D1\u8868\u8BC4\u8BBA\uFF1A"), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, "Nickname\xA0", __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip___default.a, {
          title: "What do you want others to call you?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
          type: "question-circle-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), getFieldDecorator('nickname', {
        rules: [{
          required: true,
          message: 'Please input your nickname!',
          whitespace: true
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        title: "\u7528\u6237\u540D",
        placeholder: "\u7528\u6237\u540D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: false,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        title: "\u4E0D\u4F1A\u88AB\u516C\u5F00",
        placeholder: "\u4E0D\u4F1A\u88AB\u516C\u5F00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), getFieldDecorator('website', {
        rules: [{
          required: false,
          message: 'Please input website!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_auto_complete___default.a, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "SEO\u63A8\u5E7F \u793A\u4F8B\uFF1A\"http://xxx.com\"",
        title: "SEO\u63A8\u5E7F \u793A\u4F8B\uFF1A\"http://xxx.com\"",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your comment!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(TextArea, {
        title: "\u6765\u5410\u69FD",
        placeholder: "\u6765\u5410\u69FD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
              lineNumber: 192
            }
          }, v.website ? __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
            href: v.website,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            }
          }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
            style: {
              color: '#34538b',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            }
          }, v.user)) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("span", {
            style: {
              color: '#000',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            }
          }, v.user), "\u8BF4\u9053\uFF1A"),
          extra: __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
            href: "javascript:;",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_13__until__["b" /* formatTime */])(v.createTime)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, v.msg));
      }));
    }
  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_9_antd_lib_form___default.a.create()(Comments);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["b" /* connect */])()(WrappedRegistrationForm));

/***/ })

})
//# sourceMappingURL=6.5f24e95cc0958c6f532d.hot-update.js.map