webpackHotUpdate(5,{

/***/ "./components/Edit/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/col/index.js");
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


var _jsxFileName = "F:\\myself\\ctrl\\next-blog3\\next-blog\\components\\Edit\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




 // import WangEdit from '../../components/WangEdit';



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
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-1350234216"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        key: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-1350234216" + " " + "editor-main-a"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, createTime > __WEBPACK_IMPORTED_MODULE_7__until__["a" /* OldTime */] || createTime === '' ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-1350234216"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-1350234216"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        onMouseOver: this.setCurrentIndex.bind(this, 1),
        onScroll: this.containerScroll,
        ref: function ref(node) {
          return _this2.editContainer = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-1350234216" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onContentChange,
        ref: function ref(node) {
          return _this2.editWrap = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-1350234216" + " " + "common-wrapper "
      }, originContent)))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-1350234216"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewContainer = node;
        },
        onMouseOver: this.setCurrentIndex.bind(this, 2),
        onScroll: this.containerScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-1350234216" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewWrap = node;
        },
        dangerouslySetInnerHTML: {
          __html: previewContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-1350234216" + " " + " common-wrapper"
      }))))) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-1350234216" + " " + "  content-edit"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onOldArticleContentChange.bind(this),
        dangerouslySetInnerHTML: {
          __html: originContent
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-1350234216" + " " + " common-wrapper"
      }))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "1350234216",
        css: ".content-edit.jsx-1350234216{max-height:600px;height:600px;overflow-y:scroll;border:1px solid #ddd;border-top:none;background-color:#fff;}.editor-main-a.jsx-1350234216 .common-wrapper.jsx-1350234216{padding:20px;min-height:100%;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVkaXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Kb0IsQUFHMkIsQUFRWCxhQUNHLElBUkksWUFTUCxDQVJZLFlBUzNCLE1BUmdDLHNCQUNQLGdCQUNPLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzXFxFZGl0XFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJGOlxcbXlzZWxmXFxjdHJsXFxuZXh0LWJsb2czXFxuZXh0LWJsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xyXG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xyXG5cclxuLy8gaW1wb3J0IFdhbmdFZGl0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2FuZ0VkaXQnO1xyXG5pbXBvcnQge2dldEh0bWwsIE9sZFRpbWV9IGZyb20gJy4uLy4uL3VudGlsJztcclxuaW1wb3J0ICcuL3Rlc3QubGVzcyc7XHJcblxyXG5obGpzLmNvbmZpZ3VyZSh7XHJcbiAgdGFiUmVwbGFjZTogJyAgJyxcclxuICBjbGFzc1ByZWZpeDogJ2hsanMtJyxcclxuICBsYW5ndWFnZXM6IFsnQ1NTJywgJ0hUTUwsIFhNTCcsICdKYXZhU2NyaXB0JywgJ1BIUCcsICdQeXRob24nLCAnU3R5bHVzJywgJ1R5cGVTY3JpcHQnLCAnTWFya2Rvd24nXVxyXG59KVxyXG5tYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgaGlnaGxpZ2h0OiAoY29kZSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlLFxyXG4gIGdmbTogdHJ1ZSxcclxuICB0YWJsZXM6IHRydWUsXHJcbiAgYnJlYWtzOiBmYWxzZSxcclxuICBwZWRhbnRpYzogZmFsc2UsXHJcbiAgc2FuaXRpemU6IHRydWUsXHJcbiAgc21hcnRMaXN0czogdHJ1ZSxcclxuICBzbWFydHlwYW50czogZmFsc2VcclxufSk7XHJcblxyXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwcmV2aWV3Q29udGVudDogJycsXHJcbiAgICAgIGFjZUJveEg6IG51bGwsXHJcbiAgICAgIG9yaWdpbkNvbnRlbnQ6ICcnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVWYWx1ZSgpXHJcbiAgICB0aGlzLmNvbnRhaW5lclNjcm9sbCA9IHRoaXMuY29udGFpbmVyU2Nyb2xsLmJpbmQodGhpcylcclxuICAgIHRoaXMub25Db250ZW50Q2hhbmdlID0gdGhpcy5vbkNvbnRlbnRDaGFuZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc3Qge2VkaXRDb250ID0gJycsIGNyZWF0ZVRpbWUgPSAnJ30gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGRlY29kZU9yaWdpbiA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0Q29udClcclxuICAgIGxldCBtYXJrZWRDb250ZW50ID0gbWFya2VkKGRlY29kZU9yaWdpbik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlld0NvbnRlbnQ6IG1hcmtlZENvbnRlbnQsXHJcbiAgICAgIG9yaWdpbkNvbnRlbnQ6IGRlY29kZU9yaWdpbixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhY2VCb3hIOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvci1tYWluLWEnKS5vZmZzZXRIZWlnaHQgKyAncHgnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2FjaGVWYWx1ZSgpIHtcclxuICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gMVxyXG4gICAgdGhpcy5oYXNDb250ZW50Q2hhbmdlZCA9IGZhbHNlXHJcbiAgICB0aGlzLnNjYWxlID0gMVxyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudEluZGV4KGluZGV4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IGluZGV4XHJcbiAgfVxyXG5cclxuICBjb250YWluZXJTY3JvbGwoZSkge1xyXG4gICAgdGhpcy5oYXNDb250ZW50Q2hhbmdlZCAmJiB0aGlzLnNldFNjcm9sbFZhbHVlKClcclxuICAgIGlmICh0aGlzLmN1cnJlbnRUYWJJbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5lZGl0Q29udGFpbmVyLnNjcm9sbFRvcCAqIHRoaXMuc2NhbGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWRpdENvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLnByZXZpZXdDb250YWluZXIuc2Nyb2xsVG9wIC8gdGhpcy5zY2FsZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Db250ZW50Q2hhbmdlKGUpIHtcclxuICAgIGxldCBpbm5lclRleHQgPSBlLnRhcmdldC5pbm5lclRleHRcclxuICAgIGxldCBtYXJrQ29udCA9IG1hcmtlZChpbm5lclRleHQpXHJcbiAgICBjb25zdCB7aGFuZGxlQ2hhbmdlTWFya0VkaXR9ID0gdGhpcy5wcm9wcztcclxuICAgIGhhbmRsZUNoYW5nZU1hcmtFZGl0KGlubmVyVGV4dClcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aWV3Q29udGVudDogbWFya0NvbnRcclxuICAgIH0pXHJcbiAgICAhdGhpcy5oYXNDb250ZW50Q2hhbmdlZCAmJiAodGhpcy5oYXNDb250ZW50Q2hhbmdlZCA9IHRydWUpXHJcbiAgfVxyXG5cclxuICBvbk9sZEFydGljbGVDb250ZW50Q2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHtoYW5kbGVDaGFuZ2VNYXJrRWRpdH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaGFuZGxlQ2hhbmdlTWFya0VkaXQoZS50YXJnZXQuaW5uZXJIVE1MKVxyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsVmFsdWUoKSB7XHJcbiAgICAvLyDorr7nva7lgLzvvIzmlrnkvr8gc2Nyb2xsQnkg5pON5L2cXHJcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMucHJldmlld1dyYXAub2Zmc2V0SGVpZ2h0IC0gdGhpcy5wcmV2aWV3Q29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAodGhpcy5lZGl0V3JhcC5vZmZzZXRIZWlnaHQgLSB0aGlzLmVkaXRDb250YWluZXIub2Zmc2V0SGVpZ2h0KVxyXG4gICAgdGhpcy5oYXNDb250ZW50Q2hhbmdlZCA9IGZhbHNlXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgbGV0IHthY2VCb3hILCBwcmV2aWV3Q29udGVudCwgb3JpZ2luQ29udGVudH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3Qge2NyZWF0ZVRpbWUgPSAnJ30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluLWFcIiBzdHlsZT17e2hlaWdodDogYWNlQm94SH19XHJcbiAgICAgICAgICAgICBrZXk9J21haW4nPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNyZWF0ZVRpbWUgPiBPbGRUaW1lIHx8IGNyZWF0ZVRpbWUgPT09ICcnID9cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IGFjZUJveEh9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBjb250ZW50LWVkaXRcIiBvbk1vdXNlT3Zlcj17dGhpcy5zZXRDdXJyZW50SW5kZXguYmluZCh0aGlzLCAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMuY29udGFpbmVyU2Nyb2xsfSByZWY9e25vZGUgPT4gdGhpcy5lZGl0Q29udGFpbmVyID0gbm9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY29udGVudEVkaXRhYmxlPVwicGxhaW50ZXh0LW9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbW1vbi13cmFwcGVyIFwiIG9uSW5wdXQ9e3RoaXMub25Db250ZW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB0aGlzLmVkaXRXcmFwID0gbm9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge29yaWdpbkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGNvbnRlbnQtZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB0aGlzLnByZXZpZXdDb250YWluZXIgPSBub2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5zZXRDdXJyZW50SW5kZXguYmluZCh0aGlzLCAyKX0gb25TY3JvbGw9e3RoaXMuY29udGFpbmVyU2Nyb2xsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29tbW9uLXdyYXBwZXJcIiByZWY9e25vZGUgPT4gdGhpcy5wcmV2aWV3V3JhcCA9IG5vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByZXZpZXdDb250ZW50fX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgY29udGVudC1lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29tbW9uLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPVwicGxhaW50ZXh0LW9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5vbk9sZEFydGljbGVDb250ZW50Q2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogb3JpZ2luQ29udGVudH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250ZW50LWVkaXR7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OjYwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OjYwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDpub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbi5lZGl0b3ItbWFpbi1hICAuY29tbW9uLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEVkaXQpOyJdfQ== */\n/*@ sourceURL=components\\Edit\\index.js */"
      }));
    }
  }]);

  return Edit;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])()(Edit));

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return postCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return postArticleUrl; });
/* unused harmony export getLifeUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdminBlogUrl; });
/* unused harmony export postAdminDetailUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__("./config/env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__until__ = __webpack_require__("./until/index.js");

 //前台

var getBlogUrl = function getBlogUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var getDetailUrl = function getDetailUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/detail' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var getTotalUrl = function getTotalUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/total' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var getLastIdUrl = function getLastIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/lastId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var getNextIdUrl = function getNextIdUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/nextId' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var getCommentsUrl = function getCommentsUrl(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/comments' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
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
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/getAdminBlog' + Object(__WEBPACK_IMPORTED_MODULE_1__until__["e" /* toQueryStr */])(obj);
};
var postAdminDetailUrl = function postAdminDetailUrl() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__env__["a" /* getDomain */])() + 'api/postAdminDetail';
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getHtml; });
/* harmony export (immutable) */ __webpack_exports__["e"] = toQueryStr;
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
//# sourceMappingURL=5.792bac03d899c425f1a8.hot-update.js.map