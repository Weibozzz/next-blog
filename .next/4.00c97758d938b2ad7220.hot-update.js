webpackHotUpdate(4,{

/***/ "./store/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSearchTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postComments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/_@babel_runtime@7.0.0-beta.42@@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action_types__ = __webpack_require__("./store/action-types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/_isomorphic-unfetch@2.0.0@isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



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
var postComments =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(dispatch, url, body) {
    var res, jsonData;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('url', url);
            console.log('body', body); //发布评论,然后获得更新后的评论

            _context4.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()(url, {
              method: 'POST',
              body: JSON.stringify({
                id: 182,
                comment: 'comment',
                email: 'a@c.com',
                nickname: 'nickname',
                website: 'www.liuweibo.cn'
              })
            });

          case 4:
            res = _context4.sent;
            _context4.next = 7;
            return res.json();

          case 7:
            jsonData = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: __WEBPACK_IMPORTED_MODULE_1__action_types__["a" /* actionTypes */].POST_COMMENTS,
              getCommentsData: jsonData
            }));

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function postComments(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=4.00c97758d938b2ad7220.hot-update.js.map