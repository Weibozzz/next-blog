webpackHotUpdate(1,{

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

/***/ "./store/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_types__ = __webpack_require__("./store/action-types.js");

var exampleInitialState = {};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    //前台
    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].SEARCH_DATA:
      //第一次搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].SEARCH_PAGE_DATA:
      //点击搜索分页搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].GET_SEARCH_TOTAL_DATA:
      //搜索的所有页数
      return Object.assign({}, state, {
        searchTotalData: action.searchTotalData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].GET_LIFE:
      //生活板块
      return Object.assign({}, state, {
        lifeData: action.lifeData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].POST_COMMENTS:
      //发布评论,然后获得更新后的评论
      return Object.assign({}, state, {
        getCommentsData: action.getCommentsData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].POST_ARTICLE:
      //发布文章后的返回
      return Object.assign({}, state, {
        postArticleData: action.postArticleData
      });
    //后台

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].GET_ADMIN_DATA:
      //获得博客数据
      return Object.assign({}, state, {
        adminBlogData: action.adminBlogData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].POST_ADMIN_DETAIL:
      //发布文章
      return Object.assign({}, state, {
        postAdminDetailData: action.postAdminDetailData
      });

    case __WEBPACK_IMPORTED_MODULE_0__action_types__["a" /* actionTypes */].POST_ADMIN_PASSWORD:
      //检查密码是否正确为管理员
      return Object.assign({}, state, {
        postAdminPasswordData: action.postAdminPasswordData
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=1.ab4b5f4f8ea1ce7ce119.hot-update.js.map