exports.ids = [19];
exports.modules = {

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _config_githubApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // import Link from 'next/link';




 // import {getDetailUrl} from "../../config";


var routerUrl;

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function (url) {
  routerUrl = url;
};

var ButtonGroup = antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a.Group;

var TopTips =
/*#__PURE__*/
function (_Component) {
  _inherits(TopTips, _Component);

  function TopTips(props) {
    var _this;

    _classCallCheck(this, TopTips);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TopTips).call(this, props));
    _this.state = {
      stargazers_count: 0
    };
    return _this;
  }

  _createClass(TopTips, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var blog, _ref, _ref$stargazers_count, stargazers_count;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(_config_githubApi__WEBPACK_IMPORTED_MODULE_8__[/* githubApiStar */ "c"]);

              case 2:
                blog = _context.sent;
                _context.next = 5;
                return blog.json();

              case 5:
                _ref = _context.sent;
                _ref$stargazers_count = _ref.stargazers_count;
                stargazers_count = _ref$stargazers_count === void 0 ? 0 : _ref$stargazers_count;
                this.setState({
                  stargazers_count: stargazers_count
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var stargazers_count = this.state.stargazers_count;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
        message: _config_constantsData__WEBPACK_IMPORTED_MODULE_7__[/* TOP_TIPS */ "L"],
        type: "success",
        closable: true,
        iconType: "smile",
        banner: true
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ButtonGroup, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: _config_constantsData__WEBPACK_IMPORTED_MODULE_7__[/* GITHUB_ADDRESS */ "r"],
        className: "github-style bm-no-border ",
        icon: "github"
      }, "Github"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
        placement: "right",
        title: "Star"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "bm-no-border"
      }, stargazers_count)))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("style", null, "\n          .github-style {\n  background-color: #eff3f6;\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n}\n.bm-no-border{\n  border-bottom: none;\n}\n\n        "));
    }
  }]);

  return TopTips;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]); // https://api.github.com/repos/Weibozzz/next-blog   stargazers_count


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(TopTips));

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return githubApiStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return githubApiCommits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_COMMITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return githubApiUser; });
var githubApiStar = 'https://api.github.com/repos/Weibozzz/next-blog';
var githubApiCommits = 'https://api.github.com/repos/Weibozzz/next-blog/commits';
var ALL_COMMITS = 'https://github.com/Weibozzz/next-blog/commits?author=Weibozzz';
var githubApiUser = 'https://api.github.com/users/Weibozzz';

/***/ })

};;