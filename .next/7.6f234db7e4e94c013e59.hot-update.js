webpackHotUpdate(7,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_next_link__);
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






 //表单定义

var FormItem = __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a.Item;
var TextArea = __WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a.TextArea;
var AutoCompleteOption = __WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete___default.a.Option;
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
          autoCompleteResult = ['.com', '.org', '.net', '.cn'].map(function (domain) {
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
            console.log('Received values of form: ', values);
            var queryStringComment = {
              id: id,
              comment: comment,
              email: email,
              nickname: nickname,
              website: website
            };
            Object(__WEBPACK_IMPORTED_MODULE_13__store_actions__["e" /* postComments */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_14__config__["h" /* postCommentUrl */])(), queryStringComment);
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
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(AutoCompleteOption, {
          key: website,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, website);
      });
      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
        className: "comment-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "\u53D1\u8868\u8BC4\u8BBA\uFF1A"), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Nickname\xA0", __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tooltip___default.a, {
          title: "What do you want others to call you?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_icon___default.a, {
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
      })(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        placeholder: "\u7528\u6237\u540D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: false,
          message: 'Please input your E-mail!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        placeholder: "\u4E0D\u4F1A\u88AB\u516C\u5F00",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), getFieldDecorator('website', {
        rules: [{
          required: false,
          message: 'Please input website!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_antd_lib_auto_complete___default.a, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "\u5229\u4E8E\u4F60\u7684\u7F51\u7AD9SEO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_input___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your comment!'
        }]
      })(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(TextArea, {
        placeholder: "\u6765\u5410\u69FD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }))), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(FormItem, _extends({}, tailFormItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_button___default.a, {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, "\u63D0\u4EA4\u8BC4\u8BBA"))))), commentsData.map(function (v, i) {
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_card___default.a, {
          bodyStyle: {
            background: "#f8f8f8"
          },
          key: i,
          title: __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            }
          }, v.website ? __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_next_link___default.a, {
            href: v.website,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("a", {
            style: {
              color: '#34538b',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            }
          }, v.user)) : __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
            style: {
              color: '#000',
              fontWeight: 'bold'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            }
          }, v.user), "\u8BF4\u9053\uFF1A"),
          extra: __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("a", {
            href: "javascript:;",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            }
          }, Object(__WEBPACK_IMPORTED_MODULE_12__until__["b" /* formatTime */])(v.createTime)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, v.msg));
      }));
    }
  }]);

  return Comments;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_8_antd_lib_form___default.a.create()(Comments);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["b" /* connect */])()(WrappedRegistrationForm));

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBlogUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTotalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLastIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getNextIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCommentsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postCommentUrl; });
/* unused harmony export postArticleUrl */
/* unused harmony export getLifeUrl */
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
var getLastIdUrl = function getLastIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/lastId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getNextIdUrl = function getNextIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/nextId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var getCommentsUrl = function getCommentsUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/comments' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["d" /* toQueryStr */])(obj);
};
var postCommentUrl = function postCommentUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postComment';
};
var postArticleUrl = function postArticleUrl() {
  //发表文章
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postArticle';
};
var getLifeUrl = function getLifeUrl() {
  //生活板块
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/life';
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_whatwg_fetch__ = __webpack_require__("./node_modules/_whatwg-fetch@2.0.4@whatwg-fetch/fetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_marked__ = __webpack_require__("./node_modules/_marked@0.4.0@marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highlight_js__ = __webpack_require__("./node_modules/_highlight.js@9.12.0@highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PrevNextPage__ = __webpack_require__("./components/PrevNextPage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Comments__ = __webpack_require__("./components/Comments/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__config_constantsData__ = __webpack_require__("./config/constantsData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__until__ = __webpack_require__("./until/index.js");



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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






 //组件



 //其他



 //定义

var Content = __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;
__WEBPACK_IMPORTED_MODULE_8_highlight_js___default.a.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});
__WEBPACK_IMPORTED_MODULE_7_marked___default.a.setOptions({
  highlight: function highlight(code) {
    return __WEBPACK_IMPORTED_MODULE_8_highlight_js___default.a.highlightAuto(code).value;
  },
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail(props) {
    var _this;

    _classCallCheck(this, Detail);

    _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));
    _this.state = {
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
      });
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, title, __WEBPACK_IMPORTED_MODULE_13__config_constantsData__["f" /* COMMON_TITLE */])), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ArticleTitle__["a" /* default */], {
        detailArticle: blogData[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: createTime > __WEBPACK_IMPORTED_MODULE_14__until__["a" /* OldTime */] ? __WEBPACK_IMPORTED_MODULE_7_marked___default()(Object(__WEBPACK_IMPORTED_MODULE_14__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)) : Object(__WEBPACK_IMPORTED_MODULE_14__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_PrevNextPage__["a" /* default */], {
        dataSource: {
          url: url,
          lastIdData: lastIdData,
          nextIdData: nextIdData
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Comments__["a" /* default */], {
        dataSource: {
          commentsData: commentsData,
          articleID: articleID
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }))));
    }
  }]);

  return Detail;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, comments, lastId, nextId, blogData, commentsData, lastIdData, nextIdData;
    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["d" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["c" /* getCommentsUrl */])(queryStrObj));

          case 7:
            comments = _context.sent;
            _context.next = 10;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["e" /* getLastIdUrl */])(queryStrObj));

          case 10:
            lastId = _context.sent;
            _context.next = 13;
            return fetch(Object(__WEBPACK_IMPORTED_MODULE_12__config__["f" /* getNextIdUrl */])(queryStrObj));

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
  var getCommentsData = state.getCommentsData;
  return {
    getCommentsData: getCommentsData
  };
};

var WrappedRegistrationForm = __WEBPACK_IMPORTED_MODULE_0_antd_lib_form___default.a.create()(Detail);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(WrappedRegistrationForm));
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

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSearchTotal; });
/* unused harmony export getLifeList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postComments; });
/* unused harmony export postArticle */
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
//# sourceMappingURL=7.6f234db7e4e94c013e59.hot-update.js.map