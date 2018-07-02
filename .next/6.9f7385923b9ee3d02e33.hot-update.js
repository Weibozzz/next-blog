webpackHotUpdate(6,{

/***/ "./pages/detail/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.4@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/_react-redux@5.0.7@react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/_isomorphic-unfetch@2.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__until__ = __webpack_require__("./until/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ArticleTitle__ = __webpack_require__("./components/ArticleTitle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config/index.js");


var _jsxFileName = "/Users/liuweibo/ali/next-blog/pages/detail/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Content = __WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default.a.Content;

var Post = function Post(props) {
  console.log(props);
  var _props$blogData = props.blogData,
      blogData = _props$blogData === void 0 ? [] : _props$blogData;

  var _ref = blogData[0] || {},
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? '' : _ref$content,
      _ref$createTime = _ref.createTime,
      createTime = _ref$createTime === void 0 ? '' : _ref$createTime;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    className: "detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "blog")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Content, {
    style: {
      padding: '0 50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: {
      background: '#fff',
      padding: 24,
      minHeight: 380
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ArticleTitle__["a" /* default */], {
    detailArticle: blogData[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: createTime > __WEBPACK_IMPORTED_MODULE_6__until__["a" /* OldTime */] ? marked(Object(__WEBPACK_IMPORTED_MODULE_6__until__["c" /* getHtml */])(decodeURIComponent(content), createTime), {
        breaks: true
      }) : Object(__WEBPACK_IMPORTED_MODULE_6__until__["c" /* getHtml */])(decodeURIComponent(content), createTime)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, blogData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()(Object(__WEBPACK_IMPORTED_MODULE_9__config__["b" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return blog.json();

          case 7:
            blogData = _context.sent;
            return _context.abrupt("return", {
              blogData: blogData
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);
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
//# sourceMappingURL=6.9f7385923b9ee3d02e33.hot-update.js.map