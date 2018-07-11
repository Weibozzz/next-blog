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

/***/ "./components/Edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked__ = __webpack_require__("marked");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js__ = __webpack_require__("highlight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_less__ = __webpack_require__("./components/Edit/test.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__test_less__);



var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/Edit/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var TextArea = __WEBPACK_IMPORTED_MODULE_2_antd_lib_input___default.a.TextArea;
__WEBPACK_IMPORTED_MODULE_7_highlight_js___default.a.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});
__WEBPACK_IMPORTED_MODULE_6_marked___default.a.setOptions({
  highlight: function highlight(code) {
    return __WEBPACK_IMPORTED_MODULE_7_highlight_js___default.a.highlightAuto(code).value;
  },
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));
    _this.state = {
      previewContent: '',
      aceBoxH: null,
      originContent: '',
      inputValue: ''
    };

    _this.cacheValue();

    _this.containerScroll = _this.containerScroll.bind(_assertThisInitialized(_this));
    _this.onContentChange = _this.onContentChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Edit, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          _props$editCont = _props.editCont,
          editCont = _props$editCont === void 0 ? '' : _props$editCont,
          _props$createTime = _props.createTime,
          createTime = _props$createTime === void 0 ? '' : _props$createTime;
      var decodeOrigin = decodeURIComponent(editCont);
      var markedContent = __WEBPACK_IMPORTED_MODULE_6_marked___default()(decodeOrigin);
      this.setState({
        previewContent: markedContent,
        originContent: decodeOrigin
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        aceBoxH: document.documentElement.clientHeight - document.querySelector('.editor-main-a').offsetHeight + 'px'
      });
    }
  }, {
    key: "cacheValue",
    value: function cacheValue() {
      this.currentTabIndex = 1;
      this.hasContentChanged = false;
      this.scale = 1;
    }
  }, {
    key: "setCurrentIndex",
    value: function setCurrentIndex(index) {
      this.currentTabIndex = index;
    }
  }, {
    key: "containerScroll",
    value: function containerScroll(e) {
      this.hasContentChanged && this.setScrollValue();

      if (this.currentTabIndex === 1) {
        this.previewContainer.scrollTop = this.editContainer.scrollTop * this.scale;
      } else {
        this.editContainer.scrollTop = this.previewContainer.scrollTop / this.scale;
      }
    }
  }, {
    key: "onContentChange",
    value: function onContentChange(e) {
      var innerText = e.target.innerText; // let innerText = e.target.value

      var markCont = __WEBPACK_IMPORTED_MODULE_6_marked___default()(innerText);
      var handleChangeMarkEdit = this.props.handleChangeMarkEdit;
      handleChangeMarkEdit(innerText);
      this.setState({
        previewContent: markCont
      });
      !this.hasContentChanged && (this.hasContentChanged = true);
    }
  }, {
    key: "onOldArticleContentChange",
    value: function onOldArticleContentChange(e) {
      var handleChangeMarkEdit = this.props.handleChangeMarkEdit;
      handleChangeMarkEdit(e.target.innerHTML);
    }
  }, {
    key: "setScrollValue",
    value: function setScrollValue() {
      // 设置值，方便 scrollBy 操作
      this.scale = (this.previewWrap.offsetHeight - this.previewContainer.offsetHeight) / (this.editWrap.offsetHeight - this.editContainer.offsetHeight);
      this.hasContentChanged = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          aceBoxH = _state.aceBoxH,
          previewContent = _state.previewContent,
          originContent = _state.originContent;
      var _props$createTime2 = this.props.createTime,
          createTime = _props$createTime2 === void 0 ? '' : _props$createTime2;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-2251385474"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        key: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-2251385474" + " " + "editor-main-a"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, createTime > __WEBPACK_IMPORTED_MODULE_8__until__["a" /* OldTime */] || createTime === '' ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-2251385474"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-2251385474"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        onMouseOver: this.setCurrentIndex.bind(this, 1),
        onScroll: this.containerScroll,
        ref: function ref(node) {
          return _this2.editContainer = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-2251385474" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onContentChange,
        ref: function ref(node) {
          return _this2.editWrap = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-2251385474" + " " + "common-wrapper "
      }, originContent)))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-2251385474"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewContainer = node;
        },
        onMouseOver: this.setCurrentIndex.bind(this, 2),
        onScroll: this.containerScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-2251385474" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewWrap = node;
        },
        dangerouslySetInnerHTML: {
          __html: previewContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-2251385474" + " " + " common-wrapper"
      }))))) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-2251385474"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-2251385474" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onOldArticleContentChange.bind(this),
        dangerouslySetInnerHTML: {
          __html: originContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-2251385474" + " " + " common-wrapper"
      })))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_style___default.a, {
        styleId: "2251385474",
        css: ".content-edit.jsx-2251385474{max-height:600px;height:600px;overflow-y:auto;border:1px solid #ddd;border-top:none;background-color:#fff;}.editor-main-a.jsx-2251385474 .common-wrapper.jsx-2251385474{padding:20px;min-height:100%;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Sm9CLEFBRzJCLEFBUVgsYUFDRyxJQVJJLFlBU1AsQ0FSVSxZQVN6QixJQVJnQyxzQkFDUCxnQkFDTyxzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9FZGl0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXV3ZWliby9hbGkvbmV4dC1ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtSb3csIENvbCxJbnB1dH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcblxuaW1wb3J0IHtnZXRIdG1sLCBPbGRUaW1lfSBmcm9tICcuLi8uLi91bnRpbCc7XG5pbXBvcnQgJy4vdGVzdC5sZXNzJztcblxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XG5cbmhsanMuY29uZmlndXJlKHtcbiAgdGFiUmVwbGFjZTogJyAgJyxcbiAgY2xhc3NQcmVmaXg6ICdobGpzLScsXG4gIGxhbmd1YWdlczogWydDU1MnLCAnSFRNTCwgWE1MJywgJ0phdmFTY3JpcHQnLCAnUEhQJywgJ1B5dGhvbicsICdTdHlsdXMnLCAnVHlwZVNjcmlwdCcsICdNYXJrZG93biddXG59KVxubWFya2VkLnNldE9wdGlvbnMoe1xuICBoaWdobGlnaHQ6IChjb2RlKSA9PiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSkudmFsdWUsXG4gIGdmbTogdHJ1ZSxcbiAgdGFibGVzOiB0cnVlLFxuICBicmVha3M6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzbWFydExpc3RzOiB0cnVlLFxuICBzbWFydHlwYW50czogZmFsc2Vcbn0pO1xuXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJldmlld0NvbnRlbnQ6ICcnLFxuICAgICAgYWNlQm94SDogbnVsbCxcbiAgICAgIG9yaWdpbkNvbnRlbnQ6ICcnLFxuICAgICAgaW5wdXRWYWx1ZTonJ1xuXG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZVZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lclNjcm9sbCA9IHRoaXMuY29udGFpbmVyU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udGVudENoYW5nZSA9IHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7ZWRpdENvbnQgPSAnJywgY3JlYXRlVGltZSA9ICcnfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGRlY29kZU9yaWdpbiA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0Q29udClcbiAgICBsZXQgbWFya2VkQ29udGVudCA9IG1hcmtlZChkZWNvZGVPcmlnaW4pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlld0NvbnRlbnQ6IG1hcmtlZENvbnRlbnQsXG4gICAgICBvcmlnaW5Db250ZW50OiBkZWNvZGVPcmlnaW4sXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWNlQm94SDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3ItbWFpbi1hJykub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgIH0pXG4gIH1cblxuICBjYWNoZVZhbHVlKCkge1xuICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gMVxuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgPSBmYWxzZVxuICAgIHRoaXMuc2NhbGUgPSAxXG4gIH1cblxuICBzZXRDdXJyZW50SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IGluZGV4XG4gIH1cblxuICBjb250YWluZXJTY3JvbGwoZSkge1xuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgJiYgdGhpcy5zZXRTY3JvbGxWYWx1ZSgpXG4gICAgaWYgKHRoaXMuY3VycmVudFRhYkluZGV4ID09PSAxKSB7XG4gICAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5lZGl0Q29udGFpbmVyLnNjcm9sbFRvcCAqIHRoaXMuc2NhbGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0Q29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMucHJldmlld0NvbnRhaW5lci5zY3JvbGxUb3AgLyB0aGlzLnNjYWxlXG4gICAgfVxuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlKGUpIHtcbiAgICBsZXQgaW5uZXJUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgLy8gbGV0IGlubmVyVGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgbGV0IG1hcmtDb250ID0gbWFya2VkKGlubmVyVGV4dClcbiAgICBjb25zdCB7aGFuZGxlQ2hhbmdlTWFya0VkaXR9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVDaGFuZ2VNYXJrRWRpdChpbm5lclRleHQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aWV3Q29udGVudDogbWFya0NvbnRcbiAgICB9KVxuICAgICF0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkICYmICh0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkID0gdHJ1ZSlcbiAgfVxuXG4gIG9uT2xkQXJ0aWNsZUNvbnRlbnRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHtoYW5kbGVDaGFuZ2VNYXJrRWRpdH0gPSB0aGlzLnByb3BzO1xuICAgIGhhbmRsZUNoYW5nZU1hcmtFZGl0KGUudGFyZ2V0LmlubmVySFRNTClcbiAgfVxuXG4gIHNldFNjcm9sbFZhbHVlKCkge1xuICAgIC8vIOiuvue9ruWAvO+8jOaWueS+vyBzY3JvbGxCeSDmk43kvZxcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMucHJldmlld1dyYXAub2Zmc2V0SGVpZ2h0IC0gdGhpcy5wcmV2aWV3Q29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAodGhpcy5lZGl0V3JhcC5vZmZzZXRIZWlnaHQgLSB0aGlzLmVkaXRDb250YWluZXIub2Zmc2V0SGVpZ2h0KVxuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgPSBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHthY2VCb3hILCBwcmV2aWV3Q29udGVudCwgb3JpZ2luQ29udGVudH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtjcmVhdGVUaW1lID0gJyd9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3ItbWFpbi1hXCIgc3R5bGU9e3toZWlnaHQ6IGFjZUJveEh9fVxuICAgICAgICAgICAgIGtleT0nbWFpbic+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3JlYXRlVGltZSA+IE9sZFRpbWUgfHwgY3JlYXRlVGltZSA9PT0gJycgP1xuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogYWNlQm94SH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBjb250ZW50LWVkaXRcIiBvbk1vdXNlT3Zlcj17dGhpcy5zZXRDdXJyZW50SW5kZXguYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmNvbnRhaW5lclNjcm9sbH0gcmVmPXtub2RlID0+IHRoaXMuZWRpdENvbnRhaW5lciA9IG5vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjb250ZW50RWRpdGFibGU9XCJwbGFpbnRleHQtb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbW1vbi13cmFwcGVyIFwiIG9uSW5wdXQ9e3RoaXMub25Db250ZW50Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4gdGhpcy5lZGl0V3JhcCA9IG5vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7b3JpZ2luQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGNvbnRlbnQtZWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4gdGhpcy5wcmV2aWV3Q29udGFpbmVyID0gbm9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnNldEN1cnJlbnRJbmRleC5iaW5kKHRoaXMsIDIpfSBvblNjcm9sbD17dGhpcy5jb250YWluZXJTY3JvbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29tbW9uLXdyYXBwZXJcIiByZWY9e25vZGUgPT4gdGhpcy5wcmV2aWV3V3JhcCA9IG5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcmV2aWV3Q29udGVudH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgY29udGVudC1lZGl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbW1vbi13cmFwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RWRpdGFibGU9XCJwbGFpbnRleHQtb25seVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbk9sZEFydGljbGVDb250ZW50Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG9yaWdpbkNvbnRlbnR9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250ZW50LWVkaXR7XG4gICAgICAgICAgbWF4LWhlaWdodDo2MDBweDtcbiAgICAgICAgICBoZWlnaHQ6NjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTphdXRvO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDpub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbi5lZGl0b3ItbWFpbi1hICAuY29tbW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoRWRpdCk7Il19 */\n/*@ sourceURL=components/Edit/index.js */"
      }));
    }
  }]);

  return Edit;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])()(Edit));

/***/ }),

/***/ "./components/Edit/test.less":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/EditArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select__ = __webpack_require__("antd/lib/select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Edit__ = __webpack_require__("./components/Edit/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_actions__ = __webpack_require__("./store/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__until__ = __webpack_require__("./until/index.js");






var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/EditArticle/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TextArea = __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a.TextArea;
var Option = __WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a.Option;
var InputGroup = __WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a.Group;

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
      editCont: '',
      isEdit: '',
      //空值默认不为修改文章
      notEditArticle: false //默认不修改文章

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
          content = dataSource.content,
          _dataSource$articleID = dataSource.articleID,
          articleID = _dataSource$articleID === void 0 ? '' : _dataSource$articleID;
      this.setState({
        selectVal: type,
        titleVal: title,
        shortVal: short,
        urlVal: url,
        editCont: content,
        isEdit: articleID
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
        editCont: txt,
        notEditArticle: true //正在修改文章

      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var dispatch = this.props.dispatch;
      var _state = this.state,
          isEdit = _state.isEdit,
          notEditArticle = _state.notEditArticle;
      var _state2 = this.state,
          _state2$selectVal = _state2.selectVal,
          selectVal = _state2$selectVal === void 0 ? '' : _state2$selectVal,
          _state2$titleVal = _state2.titleVal,
          titleVal = _state2$titleVal === void 0 ? '' : _state2$titleVal,
          _state2$shortVal = _state2.shortVal,
          shortVal = _state2$shortVal === void 0 ? '' : _state2$shortVal,
          _state2$urlVal = _state2.urlVal,
          urlVal = _state2$urlVal === void 0 ? '' : _state2$urlVal,
          _state2$editCont = _state2.editCont,
          editCont = _state2$editCont === void 0 ? '' : _state2$editCont,
          id = _state2.isEdit;
      var queryParamsObj = {
        title: titleVal,
        url: urlVal,
        content: !notEditArticle ? decodeURIComponent(editCont) : encodeURIComponent(editCont),
        user: '刘伟波',
        type: selectVal,
        short: shortVal,
        img: 'js.png'
      };

      if (urlVal !== '' && !__WEBPACK_IMPORTED_MODULE_11__until__["c" /* regUrl */].test(urlVal)) {
        __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.warning('url不正确');

        return;
      }

      var bool = isEdit !== '';

      if (bool) {
        //修改文章 isEdit为文章id
        queryParamsObj = Object.assign({}, queryParamsObj, {
          id: id
        });
      }

      if (titleVal === '' || selectVal === '' || editCont === '') {
        __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.error('必填项不能为空');

        return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_10__store_actions__["e" /* postArticle */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_9__config__["d" /* postArticleUrl */])(), queryParamsObj).then(function (res) {
        if (res) {
          __WEBPACK_IMPORTED_MODULE_3_antd_lib_message___default.a.success("".concat(bool ? '修改' : '发布', "\u6587\u7AE0\u6210\u529F"));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state3 = this.state,
          _state3$editCont = _state3.editCont,
          editCont = _state3$editCont === void 0 ? '' : _state3$editCont,
          _state3$selectVal = _state3.selectVal,
          selectVal = _state3$selectVal === void 0 ? '' : _state3$selectVal,
          _state3$titleVal = _state3.titleVal,
          titleVal = _state3$titleVal === void 0 ? '' : _state3$titleVal,
          _state3$shortVal = _state3.shortVal,
          shortVal = _state3$shortVal === void 0 ? '' : _state3$shortVal,
          _state3$urlVal = _state3.urlVal,
          urlVal = _state3$urlVal === void 0 ? '' : _state3$urlVal;
      var _props$dataSource2 = this.props.dataSource,
          dataSource = _props$dataSource2 === void 0 ? {} : _props$dataSource2;
      var createTime = dataSource.createTime;
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(InputGroup, {
        compact: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a, {
        style: {
          width: '90%'
        },
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        title: "\u6587\u7AE0\u6807\u9898",
        defaultValue: titleVal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_select___default.a, {
        style: {
          width: '10%'
        },
        onChange: this.handleChangeSelect.bind(this),
        defaultValue: selectVal === '' ? '文章类型' : selectVal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "html"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "css"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "javascript"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "vue"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "react"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "angular"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "node",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "node"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "php",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "php"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "mysql"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "\u670D\u52A1\u5668\u4E4B\u7C7B"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "interesting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, "\u751F\u6D3B\u559C\u597D"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "fight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "\u6FC0\u52B1\u5411\u4E0A"), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, "\u5176\u4ED6"))))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_input___default.a, {
        defaultValue: urlVal,
        onChange: this.handleChangeUrl.bind(this),
        title: "\u53C2\u8003\u7684URL\u94FE\u63A5\u5730\u5740",
        placeholder: "\u53C2\u8003\u7684URL\u94FE\u63A5\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        title: "\u7B80\u77ED\u4ECB\u7ECD",
        defaultValue: shortVal,
        rows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }))), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Edit__["a" /* default */], {
        editCont: editCont,
        createTime: createTime,
        handleChangeMarkEdit: this.handleChangeMarkEdit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "\u63D0\u4EA4"));
    }
  }]);

  return EditArticle;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])()(EditArticle));

/***/ }),

/***/ "./config/constantsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DEV_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return TITLE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INDEX_TITLE; });
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
var ABOUT = '/About';
var ABOUT_TXT = '关于我';
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
  return __WEBPACK_IMPORTED_MODULE_0__constantsData__["i" /* DEV_DOMAIN */] + '/';
}

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBlogUrl; });
/* unused harmony export getDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTotalUrl; });
/* unused harmony export getLastIdUrl */
/* unused harmony export getNextIdUrl */
/* unused harmony export getCommentsUrl */
/* unused harmony export postCommentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postArticleUrl; });
/* unused harmony export getLifeUrl */
/* unused harmony export getAdminBlogUrl */
/* unused harmony export postAdminDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postAdminPasswordUrl; });
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
};
var postAdminDetailUrl = function postAdminDetailUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postAdminDetail';
};
var postAdminPasswordUrl = function postAdminPasswordUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postAdminPassword';
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

/***/ "./pages/PostArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_select__ = __webpack_require__("antd/lib/select");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__("antd/lib/input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("antd/lib/layout");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_EditArticle__ = __webpack_require__("./components/EditArticle/index.js");



var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/PostArticle/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Content = __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a.Content;
var TextArea = __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default.a.TextArea;
var Option = __WEBPACK_IMPORTED_MODULE_0_antd_lib_select___default.a.Option;

var PostArticle =
/*#__PURE__*/
function (_Component) {
  _inherits(PostArticle, _Component);

  function PostArticle() {
    var _this;

    _classCallCheck(this, PostArticle);

    _this = _possibleConstructorReturn(this, (PostArticle.__proto__ || Object.getPrototypeOf(PostArticle)).call(this));
    _this.state = {};
    return _this;
  }

  _createClass(PostArticle, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "\u53D1\u5E03\u6587\u7AE0")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        className: "post-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content, {
        style: {
          padding: '0 50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_EditArticle__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })))));
    }
  }]);

  return PostArticle;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])()(PostArticle));

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
  GET_LIFE: 'GET_LIFE',
  POST_COMMENTS: 'POST_COMMENTS',
  POST_ARTICLE: 'POST_ARTICLE',
  //后台
  GET_ADMIN_DATA: 'GET_ADMIN_DATA',
  POST_ADMIN_DETAIL: 'POST_ADMIN_DETAIL',
  POST_ADMIN_PASSWORD: 'POST_ADMIN_PASSWORD'
};

/***/ }),

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchTotal; });
/* unused harmony export getLifeList */
/* unused harmony export postComments */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postArticle; });
/* unused harmony export getAdminBlogList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postAdminPassword; });
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
/* unused harmony export getHtml */
/* harmony export (immutable) */ __webpack_exports__["d"] = toQueryStr;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return regUrl; });
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/PostArticle/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/input":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/message":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/select":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "date-format":
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),

/***/ "highlight.js":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "marked":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=PostArticle.js.map