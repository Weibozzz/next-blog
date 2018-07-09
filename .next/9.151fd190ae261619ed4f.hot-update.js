webpackHotUpdate(9,{

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
      console.log(createTime);
      this.setState({
        previewContent: __WEBPACK_IMPORTED_MODULE_5_marked___default()(decodeOrigin),
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
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-1779008199"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        key: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-1779008199" + " " + "editor-main-a"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
          lineNumber: 107
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
          lineNumber: 109
        },
        className: "jsx-1779008199" + " " + "common-wrapper "
      }, originContent)))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_col___default.a, {
        span: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
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
          lineNumber: 117
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
          lineNumber: 119
        },
        className: "jsx-1779008199" + " " + " common-wrapper"
      })))))), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_style___default.a, {
        styleId: "1779008199",
        css: ".content-edit.jsx-1779008199{max-height:600px;height:600px;overflow-y:scroll;border:1px solid #ddd;border-top:none;}.editor-main-a.jsx-1779008199 .common-wrapper.jsx-1779008199{padding:20px;min-height:100%;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SG9CLEFBRzJCLEFBT1gsYUFDRyxJQVBJLFlBUVAsQ0FQWSxZQVEzQixNQVBnQyxzQkFDUCxnQkFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9FZGl0L2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9saXV3ZWliby9hbGkvbmV4dC1ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0IGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzJztcblxuXG5pbXBvcnQge2dldEh0bWwsIE9sZFRpbWV9IGZyb20gJy4uLy4uL3VudGlsJztcbmltcG9ydCAnLi90ZXN0Lmxlc3MnO1xuXG5obGpzLmNvbmZpZ3VyZSh7XG4gIHRhYlJlcGxhY2U6ICcgICcsXG4gIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICBsYW5ndWFnZXM6IFsnQ1NTJywgJ0hUTUwsIFhNTCcsICdKYXZhU2NyaXB0JywgJ1BIUCcsICdQeXRob24nLCAnU3R5bHVzJywgJ1R5cGVTY3JpcHQnLCAnTWFya2Rvd24nXVxufSlcbm1hcmtlZC5zZXRPcHRpb25zKHtcbiAgaGlnaGxpZ2h0OiAoY29kZSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUpLnZhbHVlLFxuICBnZm06IHRydWUsXG4gIHRhYmxlczogdHJ1ZSxcbiAgYnJlYWtzOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc21hcnRMaXN0czogdHJ1ZSxcbiAgc21hcnR5cGFudHM6IGZhbHNlXG59KTtcblxuY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByZXZpZXdDb250ZW50OiAnJyxcbiAgICAgIGFjZUJveEg6IG51bGwsXG4gICAgICBvcmlnaW5Db250ZW50OiAnJ1xuXG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZVZhbHVlKClcbiAgICB0aGlzLmNvbnRhaW5lclNjcm9sbCA9IHRoaXMuY29udGFpbmVyU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLm9uQ29udGVudENoYW5nZSA9IHRoaXMub25Db250ZW50Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7ZWRpdENvbnQgPSAnJyxjcmVhdGVUaW1lPScnfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGRlY29kZU9yaWdpbiA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0Q29udClcblxuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVRpbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aWV3Q29udGVudDogbWFya2VkKGRlY29kZU9yaWdpbiksXG4gICAgICBvcmlnaW5Db250ZW50OiBkZWNvZGVPcmlnaW4sXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWNlQm94SDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3ItbWFpbi1hJykub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgIH0pXG4gIH1cblxuICBjYWNoZVZhbHVlKCkge1xuICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gMVxuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgPSBmYWxzZVxuICAgIHRoaXMuc2NhbGUgPSAxXG4gIH1cblxuICBzZXRDdXJyZW50SW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IGluZGV4XG4gIH1cblxuICBjb250YWluZXJTY3JvbGwoZSkge1xuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgJiYgdGhpcy5zZXRTY3JvbGxWYWx1ZSgpXG4gICAgaWYgKHRoaXMuY3VycmVudFRhYkluZGV4ID09PSAxKSB7XG4gICAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5lZGl0Q29udGFpbmVyLnNjcm9sbFRvcCAqIHRoaXMuc2NhbGVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0Q29udGFpbmVyLnNjcm9sbFRvcCA9IHRoaXMucHJldmlld0NvbnRhaW5lci5zY3JvbGxUb3AgLyB0aGlzLnNjYWxlXG4gICAgfVxuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlKGUpIHtcbiAgICBsZXQgaW5uZXJUZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgbGV0IG1hcmtDb250ID0gbWFya2VkKGlubmVyVGV4dClcbiAgICBjb25zdCB7aGFuZGxlQ2hhbmdlTWFya0VkaXR9ID0gdGhpcy5wcm9wcztcbiAgICBoYW5kbGVDaGFuZ2VNYXJrRWRpdChpbm5lclRleHQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aWV3Q29udGVudDogbWFya0NvbnRcbiAgICB9KVxuICAgICF0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkICYmICh0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkID0gdHJ1ZSlcbiAgfVxuXG4gIHNldFNjcm9sbFZhbHVlKCkge1xuICAgIC8vIOiuvue9ruWAvO+8jOaWueS+vyBzY3JvbGxCeSDmk43kvZxcbiAgICB0aGlzLnNjYWxlID0gKHRoaXMucHJldmlld1dyYXAub2Zmc2V0SGVpZ2h0IC0gdGhpcy5wcmV2aWV3Q29udGFpbmVyLm9mZnNldEhlaWdodCkgLyAodGhpcy5lZGl0V3JhcC5vZmZzZXRIZWlnaHQgLSB0aGlzLmVkaXRDb250YWluZXIub2Zmc2V0SGVpZ2h0KVxuICAgIHRoaXMuaGFzQ29udGVudENoYW5nZWQgPSBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHthY2VCb3hILCBwcmV2aWV3Q29udGVudCwgb3JpZ2luQ29udGVudH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvci1tYWluLWFcIiBzdHlsZT17e2hlaWdodDogYWNlQm94SH19XG4gICAgICAgICAgICAga2V5PSdtYWluJz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IGFjZUJveEh9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiAgY29udGVudC1lZGl0XCIgb25Nb3VzZU92ZXI9e3RoaXMuc2V0Q3VycmVudEluZGV4LmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17dGhpcy5jb250YWluZXJTY3JvbGx9IHJlZj17bm9kZSA9PiB0aGlzLmVkaXRDb250YWluZXIgPSBub2RlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY29udGVudEVkaXRhYmxlPVwicGxhaW50ZXh0LW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21tb24td3JhcHBlciBcIiBvbklucHV0PXt0aGlzLm9uQ29udGVudENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHRoaXMuZWRpdFdyYXAgPSBub2RlfT57b3JpZ2luQ29udGVudH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBjb250ZW50LWVkaXRcIiByZWY9e25vZGUgPT4gdGhpcy5wcmV2aWV3Q29udGFpbmVyID0gbm9kZX1cbiAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnNldEN1cnJlbnRJbmRleC5iaW5kKHRoaXMsIDIpfSBvblNjcm9sbD17dGhpcy5jb250YWluZXJTY3JvbGx9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29tbW9uLXdyYXBwZXJcIiByZWY9e25vZGUgPT4gdGhpcy5wcmV2aWV3V3JhcCA9IG5vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcmV2aWV3Q29udGVudH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250ZW50LWVkaXR7XG4gICAgICAgICAgbWF4LWhlaWdodDo2MDBweDtcbiAgICAgICAgICBoZWlnaHQ6NjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBib3JkZXItdG9wOm5vbmU7XG4gICAgICAgIH1cbi5lZGl0b3ItbWFpbi1hICAuY29tbW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKEVkaXQpOyJdfQ== */\n/*@ sourceURL=components/Edit/index.js */"
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
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: titleVal,
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_select___default.a, {
        defaultValue: selectVal === '' ? '文章类型' : selectVal,
        style: {
          width: '100%'
        },
        onChange: this.handleChangeSelect.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "html"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "css"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "javascript"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "vue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "vue"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "react",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "react"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "angular",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "angular"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "node",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "node"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "php",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "php"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "mysql",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "mysql"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "\u670D\u52A1\u5668\u4E4B\u7C7B"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "interesting",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "\u751F\u6D3B\u559C\u597D"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "fight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "\u6FC0\u52B1\u5411\u4E0A"), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Option, {
        value: "others",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "\u5176\u4ED6")))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd_lib_input___default.a, {
        defaultValue: urlVal,
        onChange: this.handleChangeUrl.bind(this),
        placeholder: "\u539F\u6587\u7684URL\u94FE\u63A5\u5730\u5740",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
        span: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        defaultValue: shortVal,
        rows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }))), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Edit__["a" /* default */], {
        editCont: editCont,
        createTime: createTime,
        handleChangeMarkEdit: this.handleChangeMarkEdit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button___default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "\u63D0\u4EA4"));
    }
  }]);

  return EditArticle;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["b" /* connect */])()(EditArticle));

/***/ })

})
//# sourceMappingURL=9.151fd190ae261619ed4f.hot-update.js.map