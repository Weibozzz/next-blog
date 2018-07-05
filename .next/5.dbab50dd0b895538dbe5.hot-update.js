webpackHotUpdate(5,{

/***/ "./components/Footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/back-top/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);


var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\components\\Footer\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Footer = __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default.a.Footer;

var blogFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(blogFooter, _Component);

  function blogFooter() {
    _classCallCheck(this, blogFooter);

    return _possibleConstructorReturn(this, (blogFooter.__proto__ || Object.getPrototypeOf(blogFooter)).call(this));
  }

  _createClass(blogFooter, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Footer, {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, " Power & Designed by liuweibo"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "\xA9 2017   \u9655ICP\u590717015350\u53F7"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return blogFooter;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (blogFooter);

/***/ }),

/***/ "./node_modules/_add-dom-event-listener@1.0.2@add-dom-event-listener/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__("./node_modules/_add-dom-event-listener@1.0.2@add-dom-event-listener/lib/EventObject.js");

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/_antd@3.6.5@antd/lib/_util/getScroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = getScroll;
function getScroll(target, top) {
    if (typeof window === 'undefined') {
        return 0;
    }
    var prop = top ? 'pageYOffset' : 'pageXOffset';
    var method = top ? 'scrollTop' : 'scrollLeft';
    var isWindow = target === window;
    var ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }
    return ret;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/_antd@3.6.5@antd/lib/back-top/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");

var React = _interopRequireWildcard(_react);

var _rcAnimate = __webpack_require__("./node_modules/_rc-animate@2.4.4@rc-animate/es/Animate.js");

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _addEventListener = __webpack_require__("./node_modules/_rc-util@4.5.1@rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__("./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__("./node_modules/_omit.js@1.0.0@omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/_util/getScroll.js");

var _getScroll2 = _interopRequireDefault(_getScroll);

var _raf = __webpack_require__("./node_modules/_raf@3.4.0@raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    } else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
};
function noop() {}
function getDefaultTarget() {
    return window;
}

var BackTop = function (_React$Component) {
    (0, _inherits3['default'])(BackTop, _React$Component);

    function BackTop(props) {
        (0, _classCallCheck3['default'])(this, BackTop);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BackTop.__proto__ || Object.getPrototypeOf(BackTop)).call(this, props));

        _this.getCurrentScrollTop = function () {
            var getTarget = _this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            }
            return targetNode.scrollTop;
        };
        _this.scrollToTop = function (e) {
            var scrollTop = _this.getCurrentScrollTop();
            var startTime = Date.now();
            var frameFunc = function frameFunc() {
                var timestamp = Date.now();
                var time = timestamp - startTime;
                _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                if (time < 450) {
                    (0, _raf2['default'])(frameFunc);
                }
            };
            (0, _raf2['default'])(frameFunc);
            (_this.props.onClick || noop)(e);
        };
        _this.handleScroll = function () {
            var _this$props = _this.props,
                visibilityHeight = _this$props.visibilityHeight,
                _this$props$target = _this$props.target,
                target = _this$props$target === undefined ? getDefaultTarget : _this$props$target;

            var scrollTop = (0, _getScroll2['default'])(target(), true);
            _this.setState({
                visible: scrollTop > visibilityHeight
            });
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    (0, _createClass3['default'])(BackTop, [{
        key: 'setScrollTop',
        value: function setScrollTop(value) {
            var getTarget = this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                document.body.scrollTop = value;
                document.documentElement.scrollTop = value;
            } else {
                targetNode.scrollTop = value;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var getTarget = this.props.target || getDefaultTarget;
            this.scrollEvent = (0, _addEventListener2['default'])(getTarget(), 'scroll', this.handleScroll);
            this.handleScroll();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollEvent) {
                this.scrollEvent.remove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$prefixCls = _props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-back-top' : _props$prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                children = _props.children;

            var classString = (0, _classnames2['default'])(prefixCls, className);
            var defaultElement = React.createElement(
                'div',
                { className: prefixCls + '-content' },
                React.createElement('div', { className: prefixCls + '-icon' })
            );
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2['default'])(this.props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target']);
            var backTopBtn = this.state.visible ? React.createElement(
                'div',
                (0, _extends3['default'])({}, divProps, { className: classString, onClick: this.scrollToTop }),
                children || defaultElement
            ) : null;
            return React.createElement(
                _rcAnimate2['default'],
                { component: '', transitionName: 'fade' },
                backTopBtn
            );
        }
    }]);
    return BackTop;
}(React.Component);

exports['default'] = BackTop;

BackTop.defaultProps = {
    visibilityHeight: 400
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/_rc-util@4.5.1@rc-util/es/Dom/addEventListener.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEventListenerWrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__ = __webpack_require__("./node_modules/_add-dom-event-listener@1.0.2@add-dom-event-listener/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("./node_modules/_react-dom@16.4.1@react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);



function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates ? function run(e) {
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return __WEBPACK_IMPORTED_MODULE_0_add_dom_event_listener___default()(target, eventType, callback);
}

/***/ }),

/***/ "./node_modules/_rc-util@4.5.1@rc-util/lib/Dom/addEventListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__("./node_modules/_add-dom-event-listener@1.0.2@add-dom-event-listener/lib/index.js");

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__("./node_modules/_react-dom@16.4.1@react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ })

})
//# sourceMappingURL=5.dbab50dd0b895538dbe5.hot-update.js.map