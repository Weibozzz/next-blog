webpackHotUpdate(4,{

/***/ "./components/Edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__ = __webpack_require__("./node_modules/_styled-jsx@2.2.6@styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_marked__ = __webpack_require__("./node_modules/_marked@0.4.0@marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js__ = __webpack_require__("./node_modules/_highlight.js@9.12.0@highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_less__ = __webpack_require__("./components/Edit/test.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__test_less__);


var _jsxFileName = "/Users/liuweibo/ali/next-blog/components/Edit/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







__WEBPACK_IMPORTED_MODULE_6_highlight_js___default.a.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});
__WEBPACK_IMPORTED_MODULE_5_marked___default.a.setOptions({
  highlight: function highlight(code) {
    return __WEBPACK_IMPORTED_MODULE_6_highlight_js___default.a.highlightAuto(code).value;
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
      originContent: ''
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
      var markedContent = __WEBPACK_IMPORTED_MODULE_5_marked___default()(decodeOrigin);
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
      var innerText = e.target.innerText;
      var markCont = __WEBPACK_IMPORTED_MODULE_5_marked___default()(innerText);
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
      handleChangeMarkEdit(e.target.innerHTML, 'edit');
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
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-1779008199"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        key: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-1779008199" + " " + "editor-main-a"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, createTime > __WEBPACK_IMPORTED_MODULE_7__until__["a" /* OldTime */] ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-1779008199"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-1779008199"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        onMouseOver: this.setCurrentIndex.bind(this, 1),
        onScroll: this.containerScroll,
        ref: function ref(node) {
          return _this2.editContainer = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-1779008199" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onContentChange,
        ref: function ref(node) {
          return _this2.editWrap = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-1779008199" + " " + "common-wrapper "
      }, originContent)))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-1779008199"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewContainer = node;
        },
        onMouseOver: this.setCurrentIndex.bind(this, 2),
        onScroll: this.containerScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-1779008199" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewWrap = node;
        },
        dangerouslySetInnerHTML: {
          __html: previewContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-1779008199" + " " + " common-wrapper"
      }))))) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-1779008199" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onOldArticleContentChange.bind(this),
        dangerouslySetInnerHTML: {
          __html: originContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-1779008199" + " " + " common-wrapper"
      }))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "1779008199",
        css: ".content-edit.jsx-1779008199{max-height:600px;height:600px;overflow-y:scroll;border:1px solid #ddd;border-top:none;}.editor-main-a.jsx-1779008199 .common-wrapper.jsx-1779008199{padding:20px;min-height:100%;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSm9CLEFBRzJCLEFBT1gsYUFDRyxJQVBJLFlBUVAsQ0FQWSxZQVEzQixNQVBnQyxzQkFDUCxnQkFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9FZGl0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXV3ZWliby9hbGkvbmV4dC1ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcblxuXG5pbXBvcnQge2dldEh0bWwsIE9sZFRpbWV9IGZyb20gJy4uLy4uL3VudGlsJztcbmltcG9ydCAnLi90ZXN0Lmxlc3MnO1xuXG5obGpzLmNvbmZpZ3VyZSh7XG4gIHRhYlJlcGxhY2U6ICcgICcsXG4gIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICBsYW5ndWFnZXM6IFsnQ1NTJywgJ0hUTUwsIFhNTCcsICdKYXZhU2NyaXB0JywgJ1BIUCcsICdQeXRob24nLCAnU3R5bHVzJywgJ1R5cGVTY3JpcHQnLCAnTWFya2Rvd24nXVxufSlcbm1hcmtlZC5zZXRPcHRpb25zKHtcbiAgaGlnaGxpZ2h0OiAoY29kZSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlLFxuICBnZm06IHRydWUsXG4gIHRhYmxlczogdHJ1ZSxcbiAgYnJlYWtzOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc21hcnRMaXN0czogdHJ1ZSxcbiAgc21hcnR5cGFudHM6IGZhbHNlXG59KTtcblxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByZXZpZXdDb250ZW50OiAnJyxcbiAgICAgIGFjZUJveEg6IG51bGwsXG4gICAgICBvcmlnaW5Db250ZW50OiAnJ1xuXG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZVZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lclNjcm9sbCA9IHRoaXMuY29udGFpbmVyU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udGVudENoYW5nZSA9IHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7ZWRpdENvbnQgPSAnJywgY3JlYXRlVGltZSA9ICcnfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGRlY29kZU9yaWdpbiA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0Q29udClcbiAgICBsZXQgbWFya2VkQ29udGVudD1tYXJrZWQoZGVjb2RlT3JpZ2luKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpZXdDb250ZW50OiBtYXJrZWRDb250ZW50LFxuICAgICAgb3JpZ2luQ29udGVudDogZGVjb2RlT3JpZ2luLFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjZUJveEg6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLW1haW4tYScpLm9mZnNldEhlaWdodCArICdweCdcbiAgICB9KVxuICB9XG5cbiAgY2FjaGVWYWx1ZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IDFcbiAgICB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkID0gZmFsc2VcbiAgICB0aGlzLnNjYWxlID0gMVxuICB9XG5cbiAgc2V0Q3VycmVudEluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5jdXJyZW50VGFiSW5kZXggPSBpbmRleFxuICB9XG5cbiAgY29udGFpbmVyU2Nyb2xsKGUpIHtcbiAgICB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkICYmIHRoaXMuc2V0U2Nyb2xsVmFsdWUoKVxuICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCA9PT0gMSkge1xuICAgICAgdGhpcy5wcmV2aWV3Q29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMuZWRpdENvbnRhaW5lci5zY3JvbGxUb3AgKiB0aGlzLnNjYWxlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdENvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLnByZXZpZXdDb250YWluZXIuc2Nyb2xsVG9wIC8gdGhpcy5zY2FsZVxuICAgIH1cbiAgfVxuXG4gIG9uQ29udGVudENoYW5nZShlKSB7XG4gICAgbGV0IGlubmVyVGV4dCA9IGUudGFyZ2V0LmlubmVyVGV4dFxuICAgIGxldCBtYXJrQ29udCA9IG1hcmtlZChpbm5lclRleHQpXG4gICAgY29uc3Qge2hhbmRsZUNoYW5nZU1hcmtFZGl0fSA9IHRoaXMucHJvcHM7XG4gICAgaGFuZGxlQ2hhbmdlTWFya0VkaXQoaW5uZXJUZXh0KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlld0NvbnRlbnQ6IG1hcmtDb250XG4gICAgfSlcbiAgICAhdGhpcy5oYXNDb250ZW50Q2hhbmdlZCAmJiAodGhpcy5oYXNDb250ZW50Q2hhbmdlZCA9IHRydWUpXG4gIH1cbiAgb25PbGRBcnRpY2xlQ29udGVudENoYW5nZShlKXtcbiAgICBjb25zdCB7aGFuZGxlQ2hhbmdlTWFya0VkaXR9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVDaGFuZ2VNYXJrRWRpdChlLnRhcmdldC5pbm5lckhUTUwsJ2VkaXQnKVxuICB9XG5cbiAgc2V0U2Nyb2xsVmFsdWUoKSB7XG4gICAgLy8g6K6+572u5YC877yM5pa55L6/IHNjcm9sbEJ5IOaTjeS9nFxuICAgIHRoaXMuc2NhbGUgPSAodGhpcy5wcmV2aWV3V3JhcC5vZmZzZXRIZWlnaHQgLSB0aGlzLnByZXZpZXdDb250YWluZXIub2Zmc2V0SGVpZ2h0KSAvICh0aGlzLmVkaXRXcmFwLm9mZnNldEhlaWdodCAtIHRoaXMuZWRpdENvbnRhaW5lci5vZmZzZXRIZWlnaHQpXG4gICAgdGhpcy5oYXNDb250ZW50Q2hhbmdlZCA9IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQge2FjZUJveEgsIHByZXZpZXdDb250ZW50LCBvcmlnaW5Db250ZW50fSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2NyZWF0ZVRpbWUgPSAnJ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluLWFcIiBzdHlsZT17e2hlaWdodDogYWNlQm94SH19XG4gICAgICAgICAgICAga2V5PSdtYWluJz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjcmVhdGVUaW1lID4gT2xkVGltZSA/XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBhY2VCb3hIfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGNvbnRlbnQtZWRpdFwiIG9uTW91c2VPdmVyPXt0aGlzLnNldEN1cnJlbnRJbmRleC5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuY29udGFpbmVyU2Nyb2xsfSByZWY9e25vZGUgPT4gdGhpcy5lZGl0Q29udGFpbmVyID0gbm9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNvbnRlbnRFZGl0YWJsZT1cInBsYWludGV4dC1vbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbW9uLXdyYXBwZXIgXCIgb25JbnB1dD17dGhpcy5vbkNvbnRlbnRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB0aGlzLmVkaXRXcmFwID0gbm9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtvcmlnaW5Db250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgY29udGVudC1lZGl0XCIgcmVmPXtub2RlID0+IHRoaXMucHJldmlld0NvbnRhaW5lciA9IG5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5zZXRDdXJyZW50SW5kZXguYmluZCh0aGlzLCAyKX0gb25TY3JvbGw9e3RoaXMuY29udGFpbmVyU2Nyb2xsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbW1vbi13cmFwcGVyXCIgcmVmPXtub2RlID0+IHRoaXMucHJldmlld1dyYXAgPSBub2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJldmlld0NvbnRlbnR9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgY29udGVudC1lZGl0XCIgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb21tb24td3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPVwicGxhaW50ZXh0LW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMub25PbGRBcnRpY2xlQ29udGVudENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOm9yaWdpbkNvbnRlbnR9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250ZW50LWVkaXR7XG4gICAgICAgICAgbWF4LWhlaWdodDo2MDBweDtcbiAgICAgICAgICBoZWlnaHQ6NjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBib3JkZXItdG9wOm5vbmU7XG4gICAgICAgIH1cbi5lZGl0b3ItbWFpbi1hICAuY29tbW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEVkaXQpOyJdfQ== */\n/*@ sourceURL=components/Edit/index.js */"
      }));
    }
  }]);

  return Edit;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])()(Edit));

/***/ }),

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
      editCont: '',
      isEdit: false //默认不为修改文章

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
    value: function handleChangeMarkEdit(txt, edit) {
      this.setState({
        editCont: txt,
        isEdit: edit === 'edit'
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var dispatch = this.props.dispatch;
      var isEdit = this.state.isEdit;
      console.log(isEdit);
      return;
      var _state = this.state,
          selectVal = _state.selectVal,
          titleVal = _state.titleVal,
          shortVal = _state.shortVal,
          urlVal = _state.urlVal,
          editCont = _state.editCont;
      Object(__WEBPACK_IMPORTED_MODULE_9__store_actions__["c" /* postArticle */])(dispatch, Object(__WEBPACK_IMPORTED_MODULE_8__config__["e" /* postArticleUrl */])(), {
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
      var _props$dataSource2 = this.props.dataSource,
          dataSource = _props$dataSource2 === void 0 ? {} : _props$dataSource2;
      var createTime = dataSource.createTime;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: titleVal,
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_select___default.a, {
        defaultValue: selectVal === '' ? '文章类型' : selectVal,
        style: {
          width: '100%'
        },
        onChange: this.handleChangeSelect.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "html"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "css"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "javascript"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "vue"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "react"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "angular"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "node",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "node"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "php",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "php"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "mysql"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "\u670D\u52A1\u5668\u4E4B\u7C7B"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "interesting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "\u751F\u6D3B\u559C\u597D"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "fight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "\u6FC0\u52B1\u5411\u4E0A"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "\u5176\u4ED6")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: urlVal,
        onChange: this.handleChangeUrl.bind(this),
        placeholder: "\u539F\u6587\u7684URL\u94FE\u63A5\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        defaultValue: shortVal,
        rows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Edit__["a" /* default */], {
        editCont: editCont,
        createTime: createTime,
        handleChangeMarkEdit: this.handleChangeMarkEdit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TEST_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMMON_TITLE; });
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
  return __WEBPACK_IMPORTED_MODULE_0__constantsData__["g" /* DEV_DOMAIN */] + '/';
}

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBlogUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTotalUrl; });
/* unused harmony export getLastIdUrl */
/* unused harmony export getNextIdUrl */
/* unused harmony export getCommentsUrl */
/* unused harmony export postCommentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return postArticleUrl; });
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

/***/ "./node_modules/_antd@3.6.4@antd/lib/input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _Group = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/Group.js");

var _Group2 = _interopRequireDefault(_Group);

var _Search = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _TextArea = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/TextArea.js");

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Input2['default'].Group = _Group2['default'];
_Input2['default'].Search = _Search2['default'];
_Input2['default'].TextArea = _TextArea2['default'];
exports['default'] = _Input2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/_dom-scroll-into-view@1.2.1@dom-scroll-into-view/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/_dom-scroll-into-view@1.2.1@dom-scroll-into-view/lib/dom-scroll-into-view.js");

/***/ }),

/***/ "./node_modules/_rc-menu@7.1.0@rc-menu/es/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/_react-dom@16.4.1@react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/_prop-types@15.6.0@prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__ = __webpack_require__("./node_modules/_rc-util@4.5.1@rc-util/es/KeyCode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("./node_modules/_classnames@2.2.6@classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/_dom-scroll-into-view@1.2.1@dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store__ = __webpack_require__("./node_modules/_mini-store@1.1.0@mini-store/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__("./node_modules/_rc-menu@7.1.0@rc-menu/es/util.js");













/* eslint react/no-is-mounted:0 */

var MenuItem = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(MenuItem, _React$Component);

  function MenuItem(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MenuItem);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      if (keyCode === __WEBPACK_IMPORTED_MODULE_7_rc_util_es_KeyCode__["a" /* default */].ENTER) {
        _this.onClick(e);
        return true;
      }
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;

      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;

      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: _this,
        domEvent: e
      };
      onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    return _this;
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.active) {
      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this), __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }
    this.callRef();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  };

  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  };

  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  };

  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  };

  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  };

  MenuItem.prototype.callRef = function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _classNames;

    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    var className = __WEBPACK_IMPORTED_MODULE_8_classnames___default()(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
    var attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.attribute, {
      title: props.title,
      className: className,
      // set to menuitem by default
      role: props.role || 'menuitem',
      'aria-disabled': props.disabled
    });

    if (props.role === 'option') {
      // overwrite to option
      attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null || props.role === 'none') {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      // in this case the role on <li/> should be "none" to
      // remove the implied listitem role.
      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
      attrs.role = 'none';
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    };
    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    __WEBPACK_IMPORTED_MODULE_11__util__["e" /* menuAllProps */].forEach(function (key) {
      return delete props[key];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, attrs, mouseEvent, {
        style: style
      }),
      props.children
    );
  };

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MenuItem.propTypes = {
  attribute: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  rootPrefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  selectedKeys: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onItemHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onDeselect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  parentMenu: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  onDestroy: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  isSelected: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  manualRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
MenuItem.defaultProps = {
  onSelect: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */],
  manualRef: __WEBPACK_IMPORTED_MODULE_11__util__["f" /* noop */]
};
MenuItem.isMenuItem = true;

var connected = Object(__WEBPACK_IMPORTED_MODULE_10_mini_store__["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

/* harmony default export */ __webpack_exports__["a"] = (connected);

/***/ }),

/***/ "./node_modules/_rc-select@8.0.14@rc-select/es/DropdownMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("./node_modules/_react-dom@16.4.1@react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/_prop-types@15.6.0@prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__ = __webpack_require__("./node_modules/_rc-util@4.5.1@rc-util/es/Children/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rc_menu__ = __webpack_require__("./node_modules/_rc-menu@7.1.0@rc-menu/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__ = __webpack_require__("./node_modules/_dom-scroll-into-view@1.2.1@dom-scroll-into-view/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__("./node_modules/_rc-select@8.0.14@rc-select/es/util.js");












var DropdownMenu = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DropdownMenu);

    var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = Object(__WEBPACK_IMPORTED_MODULE_10__util__["q" /* saveRef */])(_this, 'menuRef');
    return _this;
  }

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        backfillValue = props.backfillValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = Object(__WEBPACK_IMPORTED_MODULE_10__util__["i" /* getSelectKeys */])(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
            foundFirst = true;
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = Object(__WEBPACK_IMPORTED_MODULE_7_rc_util_es_Children_toArray__["a" /* default */])(item.props.children).map(clone);
            return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(item, {}, children);
          }
          return clone(item);
        });
      } else {
        // Clear firstActiveItem when dropdown menu items was empty
        // Avoid `Unable to find node on an unmounted component`
        // https://github.com/ant-design/ant-design/issues/10774
        this.firstActiveItem = null;
      }

      // clear activeKey when inputValue change
      var lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_rc_menu__["c" /* default */],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          ref: this.saveMenuRef,
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption,
          role: 'listbox'
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: __WEBPACK_IMPORTED_MODULE_10__util__["p" /* preventDefaultEvent */],
        onScroll: this.props.onPopupScroll
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

DropdownMenu.propTypes = {
  defaultActiveFirstOption: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  dropdownMenuStyle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  multiple: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onPopupFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onPopupScroll: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuDeSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onMenuSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  prefixCls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  menuItems: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  inputValue: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  visible: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.scrollActiveItemToView = function () {
    // scroll into view
    var itemComponent = Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.firstActiveItem);
    var props = _this3.props;

    if (itemComponent) {
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!props.value || props.value.length === 0) && props.firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }

      __WEBPACK_IMPORTED_MODULE_9_dom_scroll_into_view___default()(itemComponent, Object(__WEBPACK_IMPORTED_MODULE_5_react_dom__["findDOMNode"])(_this3.menuRef), scrollIntoViewOpts);
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (DropdownMenu);


DropdownMenu.displayName = 'DropdownMenu';

/***/ }),

/***/ "./pages/PostArticle/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_select__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
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

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])()(PostArticle));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/PostArticle")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./until/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldTime; });
/* unused harmony export getHtml */
/* harmony export (immutable) */ __webpack_exports__["d"] = toQueryStr;
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

/***/ })

})
//# sourceMappingURL=4.c5e4947e700bc0dc87b6.hot-update.js.map