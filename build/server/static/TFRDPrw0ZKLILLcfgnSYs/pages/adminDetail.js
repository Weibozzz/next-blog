module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
var actionTypes = {
  //前台
  SEARCH_DATA: 'SEARCH_DATA',
  HOT_ARTICLE_DATA: 'HOT_ARTICLE_DATA',
  HOT_RECOMMEND_DATA: 'HOT_RECOMMEND_DATA',
  MODIFY_ARTICLE_DATA: 'MODIFY_ARTICLE_DATA',
  GET_SEARCH_TOTAL_DATA: 'GET_SEARCH_TOTAL_DATA',
  SEARCH_PAGE_DATA: 'SEARCH_PAGE_DATA',
  GET_LIFE: 'GET_LIFE',
  GET_USER_COMMENT: 'GET_USER_COMMENT',
  GET_COMMENTS: 'GET_COMMENTS',
  GET_COMMENTS_USER: 'GET_COMMENTS_USER',
  ADD_ZAN: 'ADD_ZAN',
  SAVE_IP: 'SAVE_IP',
  GET_IP: 'GET_IP',
  GET_VIEW: 'GET_VIEW',
  GET_CREATE_TIME: 'GET_CREATE_TIME',
  SET_COMMENT_INDEX: 'SET_COMMENT_INDEX',
  SET_ANSWER_ID: 'SET_ANSWER_ID',
  GET_QINIU_TOKEN: 'GET_QINIU_TOKEN',
  POST_COMMENTS: 'POST_COMMENTS',
  POST_USER_COMMENTS: 'POST_USER_COMMENTS',
  POST_ARTICLE: 'POST_ARTICLE',
  IS_COLLECT_ARTICLE: 'IS_COLLECT_ARTICLE',
  //后台
  GET_ADMIN_DATA: 'GET_ADMIN_DATA',
  POST_ADMIN_DETAIL: 'POST_ADMIN_DETAIL',
  POST_ADMIN_PASSWORD: 'POST_ADMIN_PASSWORD'
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return MIIT_BEIAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DEV_DOMAIN; });
/* unused harmony export DEV_DOMAIN_4324 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return MY_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ONLINE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ONLINE_GITBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LINK_ABOUT_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UPLOAD_MAX_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GITHUB_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return TOP_TIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LIFE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ABOUT_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return VERSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return VERSIONS_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DOCS_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return MENU_RULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return INDEX_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return INDEX_ENGLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return BG_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return defaultTimer; });
/* unused harmony export ARTICLE_TYPE_ICON */
/* unused harmony export LIFE_IMAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return POST_ARTICLE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return COMMENT_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COLORS_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return POST_ARTICLE_COPY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return POST_READING_STATEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return COMMENT_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return commentPlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return COMMENT_TIPS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _MENU_RULE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var dev = "production" !== 'production'; //备案地址

var MIIT_BEIAN = 'http://www.miitbeian.gov.cn'; //請求地址

var DEV_DOMAIN = 'http://localhost:7654/';
var DEV_DOMAIN_4324 = 'http://localhost:4324';
var MY_BLOG = dev ? DEV_DOMAIN_4324 : 'http://www.liuweibo.cn';
var ONLINE_DOMAIN = MY_BLOG + ':7654';
var ONLINE_GITBOOK = MY_BLOG + ':4321';
var LINK_ABOUT_ME = MY_BLOG + 'p/146'; // 图片大于这个数会先压缩在上传到七牛云，单位M

var UPLOAD_MAX_SIZE = 1; //github地址

var GITHUB_ADDRESS = 'https://github.com/Weibozzz/next-blog';
var TOP_TIPS = '欢迎来到刘伟波个人网站，喜欢可以收藏哦!'; //分页数

var pageNum = 10;
var TITLE = 'title';
var ARTICLE = 'article';
var ALL = 'all'; //导航路由

var INDEX = '/';
var INDEX_TXT = '网站首页';
var BLOG = '/blog';
var BLOG_TXT = '文章列表';
var ADMIN = '/admin';
var ADMIN_TXT = '后台管理';
var LIFE = '/life';
var LIFE_TXT = '生活记录';
var ABOUT = '/about';
var ABOUT_TXT = '关于我';
var POST_ARTICLE = '/postArticle';
var POST_ARTICLE_TXT = '发布文章';
var VERSIONS = '/versions';
var VERSIONS_TXT = '更新日志';
var DOCS_TXT = '文档中心';
var MENU_RULE = (_MENU_RULE = {
  '/': [BLOG_TXT]
}, _defineProperty(_MENU_RULE, BLOG, [BLOG_TXT]), _defineProperty(_MENU_RULE, '我的收藏', [BLOG_TXT]), _defineProperty(_MENU_RULE, LIFE, [LIFE_TXT]), _defineProperty(_MENU_RULE, ABOUT, [ABOUT_TXT]), _defineProperty(_MENU_RULE, POST_ARTICLE, [POST_ARTICLE_TXT]), _defineProperty(_MENU_RULE, ADMIN, [ADMIN_TXT]), _defineProperty(_MENU_RULE, VERSIONS, [VERSIONS_TXT]), _MENU_RULE); //seo

var COMMON_TITLE = '刘伟波-天天向上';
var INDEX_TITLE = '刘伟波的个人网站';
var INDEX_ENGLISH = 'Liu WeiBo\'s Personal Website';
var KEYWORDS = '刘伟波, 个人网站,个人博客,  web前端';
var Description = '刘伟波的个人网站，刘伟波的技术作品，刘伟波的生活成长'; //首页背景
// http://images.static.liuweibo.cn
// http://pbw4yrlys.bkt.clouddn.com

var BG_INDEX = [{
  key: '西安钟楼',
  value: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
}, {
  key: '上海东方明珠',
  value: 'http://images.static.liuweibo.cn/image/index/dongfangmingzhu.jpg'
}, {
  key: '华山',
  value: 'http://images.static.liuweibo.cn/image/index/huashan.jpg'
}, {
  key: '明德楼',
  value: 'http://images.static.liuweibo.cn/image/index/mindelou.jpg'
}, {
  key: '韩城古城',
  value: 'http://images.static.liuweibo.cn/image/index/hanchegngucheng.jpg'
}, {
  key: '韩城司马迁',
  value: 'http://images.static.liuweibo.cn/image/index/simaqina.jpg'
}, {
  key: '韩城美食',
  value: 'http://images.static.liuweibo.cn/image/index/hanchegnmeishi.jpg'
}]; //首页切换时间

var defaultTimer = 10000; //文章分类图片icon

var ARTICLE_TYPE_ICON = {
  vue: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898804960&di=bb204eb57425de2ad3ea2cb6d1358df2&imgtype=0&src=http%3A%2F%2Fimage.evget.com%2Fimages%2Farticle%2F2016%2FJavascriptky-3.png',
  js: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899278471&di=cf1e2753bbc588c0bc464c78a4d212fd&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4610b912c8fcc3ced0c353279a45d688d43f20a6.jpg',
  node: 'http://p3.so.qhmsg.com/bdr/200_200_/t016cf3f2122f3fea98.png',
  react: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4217379483,208217009&fm=27&gp=0.jpg',
  h5: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899317728&di=ce75860f4ce734fdbaa75ac46ac9541c&imgtype=0&src=http%3A%2F%2Fimg2.donews.com%2F2014%2F1117%2F75136433.jpg',
  css: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899340281&di=1da2d46a754250dd998cc350d712721e&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F004kTKjwzy6WlEAPznv25%26690',
  angular: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899186529&di=2ab6317937e397e54a573f149afbded5&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2015%2F07%2F10%2Fcf3703b1280a5680e9c833ed191d5638.jpg',
  php: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899359741&di=20e63930f8dc3a384e377846173d65e1&imgtype=0&src=http%3A%2F%2Fpx.thea.cn%2FPublic%2FUpload%2F2893678%2FIntro%2F1473304881.jpg',
  mysql: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494114&di=d7a904bf9cca31fc01ee38465c59a85a&imgtype=jpg&er=1&src=http%3A%2F%2Fs3.sinaimg.cn%2Flarge%2F002CwWVCzy6MMjHltCi62',
  server: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899560408&di=10405259462a1bc63c257f9183fd85a1&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk2%2FM02%2F5D%2FD6%2FwKhQxVfI4gSEHICVAAAAADw6QqA997.jpg',
  interesting: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899490315&di=cde9b22f2ac8bda254f6838419cfe61c&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_14_1%2Fa2t5fm9607718748992.jpg',
  fight: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899419656&di=9fd12f388d86e990014516f101ab28c7&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft253%2F89%2F336734149%2F67826%2Fbc5eeb58%2F53e9ced2N8472b3d1.jpg%2521q70.jpg',
  others: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899523703&di=1b6438eb70ce2ae0a8e1df64774c4bce&imgtype=0&src=http%3A%2F%2Fwww.cidianwang.com%2Ffile%2F2017412%2F201741285824464.jpg' //生活部分图片

};
var LIFE_IMAGE = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063149&di=53e2bb1c3edc9d5a9646b9a97cc2ff94&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1706%2F25-1F605093625.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=527129ef93dc3d55a68b603bb98e16a9&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F96-1FF1151Q0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=b199a98890734ffc50b64f7efaaa3d33&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-1609301I647.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063162&di=32d77d92542052e1fcec437153d62204&imgtype=0&src=http%3A%2F%2Fwww.zgnhzx.com%2FUploadFiles%2Ftalent%2F2016%2F12%2F201612190924565895.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900237921&di=d645ba5b24d0e1f00d3f80368190d06e&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-16092Q25947-50.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494978&di=641a9b9604ba88e1963f18f89ae882bb&imgtype=jpg&er=1&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F001OQ1Ugty6Nlz6m70y4e%26amp%3B690', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900281046&di=d69ee49f0ea3c15c7f0483f98e489b4e&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F8ee3e0acxb0171b491f27%26690', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532495027&di=4d3f70886405dd11d3740539b656ba26&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.baizhan.net%2Fuploads%2Fallimg%2F171106%2F47_171106115211_1.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900324719&di=bbda13a0a0245f13c561d32cad6717da&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161013%2Fe4be947df7304b77bf96c7b60aeb06c4_th.jpg', 'http://youimg1.c-ctrip.com/target/tg/726/811/170/9f4eedef3f664f798ea0846041b4fad8.jpg', 'http://pic18.nipic.com/20111213/3752183_140830948000_2.jpg', 'http://img8.zol.com.cn/bbs/upload/23566/23565123.jpg', 'http://p1.so.qhmsg.com/t0101bc5934a0f24496.jpg', 'http://p5.so.qhimgs1.com/sdr/200_200_/t010042e1ab48b0e8bb.jpg', 'http://img15.3lian.com/2015/h1/308/d/130.jpg', 'http://pic1.win4000.com/wallpaper/8/59360eb9ec476.jpg', 'http://img.mp.sohu.com/upload/20170808/544c7191626b42ce8b76c157edb6d725_th.png', 'http://pic22.nipic.com/20120725/8333799_081850001333_2.jpg']; //发布文章分类

var POST_ARTICLE_TYPE = [{
  key: "h5",
  value: " html"
}, {
  key: "css",
  value: " css"
}, {
  key: "js",
  value: " javascript"
}, {
  key: "vue",
  value: " vue"
}, {
  key: "react",
  value: " react"
}, {
  key: "angular",
  value: " angular"
}, {
  key: "node",
  value: " node"
}, {
  key: "php",
  value: " php"
}, {
  key: "java",
  value: " java"
}, {
  key: "mysql",
  value: " mysql"
}, {
  key: "server",
  value: " 服务器之类"
}, {
  key: "interesting",
  value: " 生活喜好"
}, {
  key: "fight",
  value: " 激励向上"
}, {
  key: "markdown",
  value: " markdown"
}, {
  key: "设计模式",
  value: " 设计模式"
}, {
  key: "阅读书籍",
  value: " 阅读书籍"
}, {
  key: "算法",
  value: " 算法"
}, {
  key: "工具",
  value: " 工具"
}, {
  key: "正则",
  value: " 正则"
}, {
  key: "技巧",
  value: " 技巧"
}, {
  key: "others",
  value: " 其他"
}]; //评论icon

var COMMENT_IMAGES = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532749734&di=fbfe0c2328cc8115b40f23945818cc58&imgtype=jpg&er=1&src=http%3A%2F%2Fen.pimg.jp%2F012%2F462%2F665%2F1%2F12462665.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532155572971&di=b2ae74aa22311f807cc768c088ab71c6&imgtype=0&src=http%3A%2F%2Fis2.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2Fb1%2Fb1%2F2c%2Fb1b12c2a-3a8f-420d-d988-b09c2455188e%2Fmzl.gzrdswmf.png%2F0x0ss-85.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532751108&di=333a1fefafd1ec1b1838f5305acfa215&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F39%2F99%2F02K58PIC4t7_1024.png']; //色系

var COLORS_ARR = ['#FF5F57', '#FFBD2E', '#28CA42', '#941966', '#1c2c36', '#2982ff', '#e0f0d8', '#0098c8', '#ba2d2a', '#de3803']; //发布文章版权

var POST_ARTICLE_COPY = function POST_ARTICLE_COPY(id) {
  return "\n\n\n--\n\u4F5C\u8005\uFF1A\u5218\u4F1F\u6CE2\n\n\u94FE\u63A5\uFF1A[".concat(MY_BLOG, "/p/").concat(id + 1, "](").concat(MY_BLOG, "/p/").concat(id + 1, ")\n\n\u6765\u6E90\uFF1A[\u5218\u4F1F\u6CE2\u535A\u5BA2](http://www.liuweibo.cn)\n\n\u672C\u6587\u539F\u521B\u7248\u6743\u5C5E\u4E8E\u5218\u4F1F\u6CE2 \uFF0C\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\uFF0C\u8C22\u8C22\u5408\u4F5C\n      ");
}; // 发布阅读书籍声明

var POST_READING_STATEMENT = function POST_READING_STATEMENT() {
  return "\n  > \u5173\u4E8E\u9605\u8BFB\u4E66\u7C4D\u90E8\u5206\uFF0C\u662F\u4E2A\u4EBA\u5728\u672C\u4E66\u7C4D\u4E2D\u6536\u96C6\u7684\u7CBE\u534E\u90E8\u5206\u548C\u5B9E\u6218\u90E8\u5206\uFF0C\u4E3A\u4E86\u540E\u7EED\u518D\u6B21\u9605\u8BFB\u8282\u7701\u65F6\u95F4\n  \u548C\u65B9\u4FBF\u5728\u5DE5\u4F5C\u4E2D\u7684\u5E94\u7528\uFF0C\u540E\u7EED\u4F1A\u5206\u4EAB\u672C\u4E66\u7C4D\u7684\u7535\u5B50\u7248pdf\u5728\u7EBF\u4E0B\u8F7D\u3002\u4E0D\u8FC7\u6211\u8FD8\u662F\u5EFA\u8BAE\u8BFB\u7740\u53BB\u9605\u8BFB\u539F\u8457\u3002\n  \n  --\n  \n  ";
};
var COMMENT_LIMIT = {
  key: '评论内容不能超过500字符',
  value: 500
}; //关于我

var commentPlaceHolder = "\u6B22\u8FCE\u63D0\u51FA\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898\u6216\u5B9D\u8D35\u5EFA\u8BAE\uFF08".concat(COMMENT_LIMIT.key, "\u5B57\u4EE5\u5185\uFF09\uFF0C\u611F\u8C22\u60A8\u5BF9\u535A\u4E3B\u7684\u652F\u6301\u3002(\u5FC5\u586B)");
var COMMENT_TIPS = function COMMENT_TIPS() {
  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sf';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u8BC4\u8BBA\u652F\u6301markdown\uFF0C", COMMENT_LIMIT.key, ",\u5982\u679C\u5185\u5BB9\u8FC7\u591A\u6216\u8005\u8981\u53CA\u65F6\u56DE\u590D,\u5EFA\u8BAE\u53BB ", param, " \u5E73\u53F0,\u4E00\u822C\u4E00\u5929\u4E4B\u5185\u5C31\u4F1A\u56DE\u590D\u3002");
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateHtml */
/* unused harmony export spaceAdd */
/* unused harmony export getPathName */
/* unused harmony export NbspToSpace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldTime; });
/* unused harmony export NewCdnTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeCdnUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return toQueryStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getYearAndMounth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cancelRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return regUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getRandomArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getImageName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeSameArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return reg_rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fnTextPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return real_ip; });
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var real_ip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var real_ip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(real_ip__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var format = __webpack_require__(24);

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
var formatTime = function formatTime(time, type) {
  var zh = ["日", "一", "二", "三", "四", "五", "六"];
  var date = new Date(time * 1000);
  var oneWeekTime = 7 * 24 * 60 * 60 * 1000;
  var result = type === 'mm-dd' ? format.asString('MM-dd', date) : format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()];
  return Date.now() - date >= oneWeekTime ? result : timeago_js__WEBPACK_IMPORTED_MODULE_0___default()().format(date);
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

var NewCdnTime = 1545723881; // 2018-12-25 15:44:41 星期二 切換了cdn域名

/**
 * 七牛云cdn测试域名到期，切换新的域名
 */

var changeCdnUrl = function changeCdnUrl(createTime, code) {
  var newCont = code.replace(/(pbw4yrlys\.bkt\.clouddn\.com)/gim, 'images.static.liuweibo.cn').replace(/(pd96wjt4m\.bkt\.clouddn\.com)/gim, 'images.liuweibo.cn'); // return createTime > NewCdnTime ? code : newCont;

  return newCont;
};
var getHtml = function getHtml(str, newTime) {
  return str ? str.replace(/@quot;|@apos;/g, function (str) {
    if (str === '@quot;') {
      return '"';
    } else if (str === "@apos;") {
      return "'";
    }
  }) : '';
};
function toQueryStr(obj) {
  return "?" + JSON.stringify(obj).replace(/{|}|\"|\'/g, "").replace(/,/g, "&").replace(/:/g, "=");
} //对所有文章创建时间进行处理

function getYearAndMounth(time) {
  if (!time) return '';
  var tt = new Date(Number(time) * 1000);
  return tt.getFullYear() + '年' + String(+tt.getMonth() + 1).padStart(2, 0) + '月';
} //数组去重并且记住每个重复的个数

function cancelRepeat(arr) {
  var newArr = [];
  var obj = {};

  for (var i in arr) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    } else {
      obj[arr[i]]++;
    }
  }

  return obj;
}
var regUrl = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
/**
 * 取出指定数组长度的随机数组
 * @param arr
 * @param len
 * @returns {Array}
 */

var getRandomArr = function getRandomArr(arr, len) {
  var result = [];
  var resultArr = [];

  while (1) {
    var random = Math.random() * arr.length | 0;

    if (result.indexOf(random) === -1) {
      result.push(random);
    }

    if (result.length === Math.min(10, len)) {
      resultArr = resultArr.concat(result);
      result = [];
    }

    if (resultArr.length >= len) {
      break;
    }
  }

  return resultArr.slice(0, len);
};
/**
 * 获得图片前缀name
 * @param imageName
 * @returns {string}
 */

var getImageName = function getImageName(imageName) {
  var index = imageName.lastIndexOf('.');
  return {
    font: index < 0 ? imageName : imageName.substring(0, index),
    back: index < 0 ? '.png' : imageName.substring(index)
  };
}; //节流函数

var throttle = function throttle(fn, interval) {
  var timer;
  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(function () {
      clearTimeout(timer);
      fn();
      timer = null;
    }, interval || 500);
  };
};
/**
 * 对象数组去重
 * @param arr
 * @param key
 * @returns {*}
 */

var removeSameArray = function removeSameArray(arr, key) {
  var obj = {};
  return arr.reduce(function (total, item) {
    var val = item[key];

    if (!obj[val]) {
      total.push(item);
      obj[val] = val;
    }

    return total;
  }, []);
};
var reg_rule = {
  life: /^image\/life/,
  fight: /^image\/fight/,
  my: /^image\/my/,
  scenery: /^image\/scenery/
};
var fnTextPopup = function fnTextPopup(arr, options) {
  // arr参数是必须的
  var len = _config_constantsData__WEBPACK_IMPORTED_MODULE_1__[/* COLORS_ARR */ "j"].length;

  if (!arr || !arr.length) {
    return;
  } // 主逻辑


  var index = 0;

  var fn = function fn(event) {
    var color1 = _config_constantsData__WEBPACK_IMPORTED_MODULE_1__[/* COLORS_ARR */ "j"][Math.random() * len | 0];
    var color2 = _config_constantsData__WEBPACK_IMPORTED_MODULE_1__[/* COLORS_ARR */ "j"][Math.random() * len | 0];
    var x = event.pageX,
        y = event.pageY;
    var eleText = document.createElement('span');
    eleText.className = 'text-popup';
    eleText.style.backgroundImage = "linear-gradient(to right, ".concat(color1, ", ").concat(color2, ", ").concat(color1, ")");
    this.appendChild(eleText);

    if (arr[index]) {
      eleText.innerHTML = arr[index];
    } else {
      index = 0;
      eleText.innerHTML = arr[0];
    } // 动画结束后删除自己


    eleText.addEventListener('animationend', function () {
      eleText.parentNode.removeChild(eleText);
    }); // 位置

    eleText.style.left = x - eleText.clientWidth / 2 + 'px';
    eleText.style.top = y - eleText.clientHeight + 'px'; // index递增

    index++;
  };

  document.documentElement.addEventListener('click', fn);
  return fn;
};
var real_ip = function real_ip() {
  return new Promise(function (resolve, reject) {
    Object(real_ip__WEBPACK_IMPORTED_MODULE_2__["getIPs"])(function (ip) {
      resolve(ip);
    });
    setInterval(function () {
      reject('时间过长');
    }, 2000);
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// CONCATENATED MODULE: ./config/env.js

var dev = "production" !== 'production';
var isShow = false; //是否只是演示

function getDomain() {
  if (isShow) {
    return 'http://www.liuweibo.cn:7654/';
  }

  return dev ? constantsData["o" /* DEV_DOMAIN */] : constantsData["D" /* ONLINE_DOMAIN */] + '/';
}
// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// CONCATENATED MODULE: ./config/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return config_getBlogUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config_addZanUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return config_getDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return config_getTotalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return config_getLastIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return config_getNextIdUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return config_getIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return config_postSaveIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return config_getCreateTimeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return config_getCommentsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return config_postCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return config_postUserCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return config_getUserCommentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return config_getQiniuTokenUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return config_postArticleUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return config_getLifeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return config_getViewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config_getAdminBlogUrl; });
/* unused harmony export postAdminDetailUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return config_postAdminPasswordUrl; });

 //前台

var config_getBlogUrl = function getBlogUrl(obj) {
  return getDomain() + 'api/getBlog' + Object(until["p" /* toQueryStr */])(obj);
};
var config_addZanUrl = function addZanUrl(obj) {
  return getDomain() + 'api/zan' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getDetailUrl = function getDetailUrl(obj) {
  return getDomain() + 'api/detail' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getTotalUrl = function getTotalUrl(obj) {
  return getDomain() + 'api/total' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getLastIdUrl = function getLastIdUrl(obj) {
  return getDomain() + 'api/lastId' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getNextIdUrl = function getNextIdUrl(obj) {
  return getDomain() + 'api/nextId' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getIpUrl = function getIpUrl(obj) {
  return getDomain() + 'api/getIp' + Object(until["p" /* toQueryStr */])(obj);
};
var config_postSaveIpUrl = function postSaveIpUrl() {
  return getDomain() + 'api/saveIp';
};
var config_getCreateTimeUrl = function getCreateTimeUrl() {
  return getDomain() + 'api/getCreateTime';
}; //评论

var config_getCommentsUrl = function getCommentsUrl(obj) {
  return getDomain() + 'api/comments' + Object(until["p" /* toQueryStr */])(obj);
};
var config_postCommentUrl = function postCommentUrl() {
  return getDomain() + 'api/postComment';
}; //留言

var config_postUserCommentUrl = function postUserCommentUrl() {
  return getDomain() + 'api/postUserComment';
};
var config_getUserCommentUrl = function getUserCommentUrl(obj) {
  //获得用户留言
  return getDomain() + 'api/getUserComment' + Object(until["p" /* toQueryStr */])(obj);
};
var config_getQiniuTokenUrl = function getQiniuTokenUrl(obj) {
  //获得七牛云存储的token
  return getDomain() + 'api/getQiniuToken' + Object(until["p" /* toQueryStr */])(obj);
};
/*export const getAdminCommentUrl = () => {
  //获得用户评论
  return getDomain() + 'api/getAdminComment';
}*/

var config_postArticleUrl = function postArticleUrl() {
  //发表文章
  return getDomain() + 'api/postArticle';
};
var config_getLifeUrl = function getLifeUrl() {
  //生活板块
  return getDomain() + 'api/life';
};
var config_getViewUrl = function getViewUrl() {
  //生活板块
  return getDomain() + 'api/getView';
}; //后台

var config_getAdminBlogUrl = function getAdminBlogUrl(obj) {
  return getDomain() + 'api/getAdminBlog' + Object(until["p" /* toQueryStr */])(obj);
};
var config_postAdminDetailUrl = function postAdminDetailUrl() {
  return getDomain() + 'api/postAdminDetail';
};
var config_postAdminPasswordUrl = function postAdminPasswordUrl() {
  return getDomain() + 'api/postAdminPassword';
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSearchPageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSearchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getHotArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getModifyArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getHotRecommendList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getSearchTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addZan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getLifeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getQiniuToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return setCommentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return setAnswerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return collectArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getIpList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getViewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCreateTimeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return postComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return postSaveIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return postUserComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return postArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAdminBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCommentsUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return postAdminPassword; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 //前台

var getSearchPageList =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jsonData = _context.sent;
            return _context.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SEARCH_PAGE_DATA,
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
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, url, myCollect) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(url === 'myCollect')) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SEARCH_DATA,
              searchData: myCollect
            }));

          case 2:
            _context2.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return res.json();

          case 7:
            jsonData = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SEARCH_DATA,
              searchData: jsonData
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getSearchList(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var getHotArticleList =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            jsonData = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].HOT_ARTICLE_DATA,
              hotArticleData: jsonData
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getHotArticleList(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var getModifyArticleList =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context4.sent;
            _context4.next = 5;
            return res.json();

          case 5:
            jsonData = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].MODIFY_ARTICLE_DATA,
              modifyArticleData: jsonData
            }));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getModifyArticleList(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
var getHotRecommendList =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context5.sent;
            _context5.next = 5;
            return res.json();

          case 5:
            jsonData = _context5.sent;
            return _context5.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].HOT_RECOMMEND_DATA,
              hotRecommendData: jsonData
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getHotRecommendList(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
var getSearchTotal =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context6.sent;
            _context6.next = 5;
            return res.json();

          case 5:
            jsonData = _context6.sent;
            return _context6.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_SEARCH_TOTAL_DATA,
              searchTotalData: jsonData
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getSearchTotal(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();
var addZan =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context7.sent;
            _context7.next = 5;
            return res.json();

          case 5:
            jsonData = _context7.sent;
            return _context7.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].ADD_ZAN,
              addZanData: jsonData
            }));

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function addZan(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();
var getLifeList =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context8.sent;
            _context8.next = 5;
            return res.json();

          case 5:
            jsonData = _context8.sent;
            return _context8.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_LIFE,
              lifeData: jsonData
            }));

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getLifeList(_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();
var getQiniuToken =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context9.sent;
            _context9.next = 5;
            return res.json();

          case 5:
            jsonData = _context9.sent;
            return _context9.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_QINIU_TOKEN,
              qiniuToken: jsonData
            }));

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function getQiniuToken(_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}();
var setCommentIndex = function setCommentIndex(dispatch, commentIndex) {
  //设置评论回复index
  return dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SET_COMMENT_INDEX,
    commentIndex: commentIndex
  });
};
var setAnswerId = function setAnswerId(dispatch, answerId) {
  //设置回复评论answerid
  return dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SET_ANSWER_ID,
    answerId: answerId
  });
};
var collectArticleList = function collectArticleList(dispatch, isCollectArticle) {
  //设置是否展示收藏文章列表
  return dispatch({
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].IS_COLLECT_ARTICLE,
    isCollectArticle: isCollectArticle
  });
};
var getIpList =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context10.sent;
            _context10.next = 5;
            return res.json();

          case 5:
            jsonData = _context10.sent;
            return _context10.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_IP,
              ipListData: jsonData
            }));

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function getIpList(_x20, _x21) {
    return _ref10.apply(this, arguments);
  };
}();
var getViewList =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context11.sent;
            _context11.next = 5;
            return res.json();

          case 5:
            jsonData = _context11.sent;
            return _context11.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_VIEW,
              viewListData: jsonData
            }));

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function getViewList(_x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();
var getCreateTimeList =
/*#__PURE__*/
function () {
  var _ref12 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context12.sent;
            _context12.next = 5;
            return res.json();

          case 5:
            jsonData = _context12.sent;
            return _context12.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_CREATE_TIME,
              createTimeListData: jsonData
            }));

          case 7:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function getCreateTimeList(_x24, _x25) {
    return _ref12.apply(this, arguments);
  };
}();
var postComments =
/*#__PURE__*/
function () {
  var _ref13 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(dispatch, url, body) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context13.sent;
            _context13.next = 5;
            return res.json();

          case 5:
            jsonData = _context13.sent;
            return _context13.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].POST_COMMENTS,
              getCommentsData: jsonData
            }));

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function postComments(_x26, _x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}();
var postSaveIp =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(dispatch, url, body) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context14.sent;
            _context14.next = 5;
            return res.json();

          case 5:
            jsonData = _context14.sent;
            return _context14.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].SAVE_IP,
              geSaveIpData: jsonData
            }));

          case 7:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function postSaveIp(_x29, _x30, _x31) {
    return _ref14.apply(this, arguments);
  };
}();
var postUserComments =
/*#__PURE__*/
function () {
  var _ref15 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(dispatch, url, body) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context15.sent;
            _context15.next = 5;
            return res.json();

          case 5:
            jsonData = _context15.sent;
            return _context15.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].POST_USER_COMMENTS,
              getUserCommentsData: jsonData
            }));

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));

  return function postUserComments(_x32, _x33, _x34) {
    return _ref15.apply(this, arguments);
  };
}();
var postArticle =
/*#__PURE__*/
function () {
  var _ref16 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(dispatch, url, body) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context16.sent;
            _context16.next = 5;
            return res.json();

          case 5:
            jsonData = _context16.sent;
            return _context16.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].POST_ARTICLE,
              postArticleData: jsonData
            }));

          case 7:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, this);
  }));

  return function postArticle(_x35, _x36, _x37) {
    return _ref16.apply(this, arguments);
  };
}(); //后台

var getAdminBlogList =
/*#__PURE__*/
function () {
  var _ref17 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context17.sent;
            _context17.next = 5;
            return res.json();

          case 5:
            jsonData = _context17.sent;
            return _context17.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_ADMIN_DATA,
              adminBlogData: jsonData
            }));

          case 7:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, this);
  }));

  return function getAdminBlogList(_x38, _x39) {
    return _ref17.apply(this, arguments);
  };
}();
var getCommentsUserList =
/*#__PURE__*/
function () {
  var _ref18 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(dispatch, url) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url);

          case 2:
            res = _context18.sent;
            _context18.next = 5;
            return res.json();

          case 5:
            jsonData = _context18.sent;
            return _context18.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].GET_COMMENTS_USER,
              getCommentsUserData: jsonData
            }));

          case 7:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, this);
  }));

  return function getCommentsUserList(_x40, _x41) {
    return _ref18.apply(this, arguments);
  };
}();
/*export const getCommentsList = async (dispatch, url) => {
  //得到所有用户评论
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_COMMENTS, getAdminCommentsData: jsonData})
}*/
// export const postAdminDetail = async (dispatch, url) => {
//   //修改文章
//   const res = await fetch(url)
//   const jsonData = await res.json()
//   return dispatch({type: actionTypes.POST_ADMIN_DETAIL, postAdminDetailData: jsonData})
// }

var postAdminPassword =
/*#__PURE__*/
function () {
  var _ref19 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(dispatch, url, body) {
    var res, jsonData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
              method: 'POST',
              body: JSON.stringify(body)
            });

          case 2:
            res = _context19.sent;
            _context19.next = 5;
            return res.json();

          case 5:
            jsonData = _context19.sent;
            return _context19.abrupt("return", dispatch({
              type: _action_types__WEBPACK_IMPORTED_MODULE_1__[/* actionTypes */ "a"].POST_ADMIN_PASSWORD,
              postAdminPasswordData: jsonData
            }));

          case 7:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, this);
  }));

  return function postAdminPassword(_x42, _x43, _x44) {
    return _ref19.apply(this, arguments);
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("timeago.js");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("real-ip");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRandomMarginTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRandomMarginLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getRandomTxt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_TAG_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POPUP_TIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return default_comment; });
var STEP = 20;
var MARGIN_TOPS = 2;
var MARGIN_LEFTS = 5;
var MAX_LENGTH_TXT = 6;
var getRandomMarginTop = function getRandomMarginTop() {
  return Math.floor(Math.random() * MARGIN_TOPS) * STEP;
};
var getRandomMarginLeft = function getRandomMarginLeft() {
  return Math.ceil(Math.random() * MARGIN_LEFTS) * STEP;
};
var getRandomTxt = function getRandomTxt(text) {
  var len = text.length;
  var random = Math.random() * len; //最少截取4个字符

  var result = Math.max(Math.ceil(random), 4);

  if (len > MAX_LENGTH_TXT) {
    return text.slice(0, result);
  }

  return text;
};
var DEFAULT_TAG_ARR = [{
  website: 'http://www.liuweibo.cn',
  user: '刘伟波网站'
}, {
  website: 'https://segmentfault.com/u/weibozzz',
  user: 'sf'
}, {
  website: 'https://segmentfault.com/n/1330000016909563',
  user: 'segmentfault'
}, {
  website: 'https://github.com/Weibozzz',
  user: 'github'
}, {
  website: 'http://www.liuweibo.cn:4321/',
  user: '文档中心'
}, {
  website: 'https://github.com/Weibozzz/next-blog',
  user: '本网站源码'
}];
var POPUP_TIPS = ['人生可以没有名利，金钱，但必须拥有美好心情', '岁月会让你的大脑变得轻松，也会让你的脚步变得沉重', '你的努力不是为了给谁看，而是让人生有更多的选择', '有实力才会有面子,面子是要实力来支撑', '生活对我们每个人都是公平的，只是心态的不同造就了人生的不同', '滚石不生苔，转业不聚财 -- 智哥', '有时候你以为天就要塌下来了 其实是自己站歪了', '时间能把你想要的东西都能慢慢给你，但也会把你舍不得的都慢慢带走', '衣带渐宽终不悔，为伊消得人憔悴', '做事不需人人都理解，只需尽心尽力', '真正的大师永远都怀着一颗学徒的心 ——易', '敢想，敢说，敢做是我们成功的首要前提', '当你拥有一切的时候你就失去了一切', '时间就像海绵里的水，只要你去挤，他总会有的', '再冷的石头，坐上三年也会暖', '金钱损失了还能挽回，一旦失去信誉就很难挽回', '人之所以能，是相信能'];
var default_comment = [{
  "id": -1,
  "a_id": -1,
  "user": "刘伟波",
  "website": "http://www.liuweibo.cn",
  "msg": "关于技术问题或者有啥不懂的都可以留言，我会定期回复答疑，感謝支持！",
  "createTime": +new Date() / 1000,
  "answerId": null
}];

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var MyLayout = function MyLayout(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "article-content-wrapper",
    sm: {
      span: 24,
      offset: 0
    },
    xs: {
      span: 24,
      offset: 0
    },
    lg: {
      span: 20,
      offset: 2
    }
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("style", null, "\n      .article-content-wrapper{\n      background-color: #fff;\n      }\n\n      "));
};

/* harmony default export */ __webpack_exports__["a"] = (MyLayout);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return markdownConfig; });
/** markdownConfig
 * 文档 https://marked.js.org/#/USING_ADVANCED.md
 * @type {{options: {gfm: boolean, tables: boolean, breaks: boolean, pedantic: boolean, smartLists: boolean, xhtml: boolean, smartypants: boolean, sanitize: (function(*): boolean)}, config: {tabReplace: string, classPrefix: string, languages: string[]}}}
 */
var markdownConfig = {
  options: {
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    xhtml: true,
    // If true, use "smart" typographic punctuation for things like quotes and dashes.
    smartypants: false,
    // If true, sanitize the HTML passed into markdownString with the sanitizer function.
    sanitize: true
  },
  config: {
    tabReplace: '  ',
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("whatwg-fetch");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(30);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/upload"
var upload_ = __webpack_require__(51);
var upload_default = /*#__PURE__*/__webpack_require__.n(upload_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(20);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(11);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(14);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(6);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__(38);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(36);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(16);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(26);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(47);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(32);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(21);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(28);
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// EXTERNAL MODULE: ./config/markdown.js
var markdown = __webpack_require__(29);

// CONCATENATED MODULE: ./components/Edit/index.js





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import './index.less';

var TextArea = input_default.a.TextArea;
var options = markdown["a" /* markdownConfig */].options,
    Edit_config = markdown["a" /* markdownConfig */].config;
external_highlight_js_default.a.configure(Edit_config);
external_marked_default.a.setOptions(_objectSpread({
  highlight: function highlight(code) {
    return external_highlight_js_default.a.highlightAuto(code).value;
  }
}, options));

var Edit_Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));
    _this.state = {
      previewContent: '',
      aceBoxH: null,
      originContent: '',
      inputValue: ''
    };

    _this.cacheValue();

    _this.containerScroll = _this.containerScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onContentChange = _this.onContentChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Edit, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          _this$props$editCont = _this$props.editCont,
          editCont = _this$props$editCont === void 0 ? '' : _this$props$editCont,
          _this$props$createTim = _this$props.createTime,
          createTime = _this$props$createTim === void 0 ? '' : _this$props$createTim;
      var decodeOrigin;

      try {
        decodeOrigin = Object(until["g" /* getHtml */])(decodeURIComponent(editCont));
      } catch (err) {
        decodeOrigin = editCont;
      }

      var markedContent = external_marked_default()(decodeOrigin);
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
      innerText = innerText.replace(/script>/img, 'script\\>');
      var markCont = external_marked_default()(innerText);
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
    key: "onPaste",
    value: function onPaste(e) {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          aceBoxH = _this$state.aceBoxH,
          previewContent = _this$state.previewContent,
          originContent = _this$state.originContent;
      var _this$props2 = this.props,
          _this$props2$createTi = _this$props2.createTime,
          createTime = _this$props2$createTi === void 0 ? '' : _this$props2$createTi,
          _this$props2$id = _this$props2.id,
          id = _this$props2$id === void 0 ? '' : _this$props2$id;
      return external_react_default.a.createElement("div", {
        className: "jsx-2251385474"
      }, external_react_default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        key: "main",
        className: "jsx-2251385474" + " " + "editor-main-a"
      }, external_react_default.a.createElement(row_default.a, null, createTime > until["a" /* OldTime */] || createTime === '' || id === 1 ? external_react_default.a.createElement("div", {
        className: "jsx-2251385474"
      }, external_react_default.a.createElement(col_default.a, {
        span: 12
      }, external_react_default.a.createElement("div", {
        style: {
          height: aceBoxH
        },
        className: "jsx-2251385474"
      }, external_react_default.a.createElement("div", {
        onMouseOver: this.setCurrentIndex.bind(this, 1),
        onScroll: this.containerScroll,
        ref: function ref(node) {
          return _this2.editContainer = node;
        },
        className: "jsx-2251385474" + " " + "  content-edit"
      }, external_react_default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onContentChange,
        onPaste: this.onPaste,
        ref: function ref(node) {
          return _this2.editWrap = node;
        },
        className: "jsx-2251385474" + " " + "common-wrapper "
      }, originContent)))), external_react_default.a.createElement(col_default.a, {
        span: 12
      }, external_react_default.a.createElement("div", {
        className: "jsx-2251385474"
      }, external_react_default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewContainer = node;
        },
        onMouseOver: this.setCurrentIndex.bind(this, 2),
        onScroll: this.containerScroll,
        className: "jsx-2251385474" + " " + "markdown-style  content-edit"
      }, external_react_default.a.createElement("div", {
        ref: function ref(node) {
          return _this2.previewWrap = node;
        },
        dangerouslySetInnerHTML: {
          __html: previewContent
        },
        className: "jsx-2251385474" + " " + " common-wrapper"
      }))))) : external_react_default.a.createElement("div", {
        className: "jsx-2251385474"
      }, external_react_default.a.createElement(col_default.a, {
        span: 24
      }, external_react_default.a.createElement("div", {
        className: "jsx-2251385474" + " " + "  content-edit"
      }, external_react_default.a.createElement("div", {
        contentEditable: "plaintext-only",
        onInput: this.onOldArticleContentChange.bind(this),
        dangerouslySetInnerHTML: {
          __html: originContent
        },
        className: "jsx-2251385474" + " " + " common-wrapper"
      })))))), external_react_default.a.createElement(style_default.a, {
        styleId: "2251385474",
        css: [".content-edit.jsx-2251385474{max-height:600px;height:600px;overflow-y:auto;border:1px solid #ddd;border-top:none;background-color:#fff;}", ".editor-main-a.jsx-2251385474 .common-wrapper.jsx-2251385474{padding:20px;min-height:100%;outline:none;}"]
      }));
    }
  }]);

  return Edit;
}(external_react_["Component"]);

/* harmony default export */ var components_Edit = (Object(external_react_redux_["connect"])()(Edit_Edit));
// EXTERNAL MODULE: ./config/index.js + 1 modules
var config_0 = __webpack_require__(7);

// CONCATENATED MODULE: ./config/qiniu_config.js
var bucket_domin = {
  article: 'http://images.liuweibo.cn/',
  static: 'http://images.static.liuweibo.cn'
};
// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(8);

// CONCATENATED MODULE: ./until/upload-file.js
/**
 * 将图片转化为base64
 */
var imgBase64 = function imgBase64(file, callback) {
  // 看支持不支持FileReader
  if (!file || !window.FileReader) return; // 创建一个 Image 对象

  var image = new Image(); // 绑定 load 事件处理器，加载完成后执行

  image.onload = function () {
    // 创建 canvas DOM 对象
    var canvas = document.createElement('canvas'); // 返回一个用于在画布上绘图的环境, '2d' 指定了您想要在画布上绘制的类型

    var ctx = canvas.getContext('2d'); // 如果高度超标 // 参数，最大高度

    var MAX_HEIGHT = 3000;

    if (image.height > MAX_HEIGHT) {
      // 宽度等比例缩放 *=
      image.width *= MAX_HEIGHT / image.height;
      image.height = MAX_HEIGHT;
    } // 获取 canvas的 2d 环境对象,
    // 可以理解Context是管理员，canvas是房子


    ctx.clearRect(0, 0, canvas.width, canvas.height); // 重置canvas宽高

    canvas.width = image.width;
    canvas.height = image.height; // 将图像绘制到canvas上

    ctx.drawImage(image, 0, 0, image.width, image.height);
    callback(image, canvas);
  };

  if (/^image/.test(file.type)) {
    // 创建一个reader
    var reader = new FileReader(); // 读取成功后的回调

    reader.onload = function () {
      // 设置src属性，浏览器会自动加载。
      // 记住必须先绑定事件，才能设置src属性，否则会出同步问题。
      image.src = this.result;
    }; // 将图片将转成 base64 格式


    reader.readAsDataURL(file);
  }
};
/**
 * 把Base64转换成file文件
 */

var convertBase64UrlToFile = function convertBase64UrlToFile(dataurl, filename) {
  var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mime
  });
};
/**
 * 检查并压缩图片大小
 */

var checkAndHandleCompression = function checkAndHandleCompression(file) {
  var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return new Promise(function (resolve, reject) {
    imgBase64(file, function (image, canvas) {
      maxSize = maxSize * 1024; // 1M (单位KB)

      var fileSize = file.size / 1024; // 、图片大小 (单位KB)

      var uploadSrc, uploadFile; // 如果图片大小大于maxSize，进行压缩

      console.log({
        fileSize: fileSize,
        maxSize: maxSize
      });

      if (fileSize > maxSize) {
        uploadSrc = canvas.toDataURL(file.type, maxSize / fileSize); // 转换成DataURL

        uploadFile = convertBase64UrlToFile(uploadSrc, file.name); // 转成file文件
      } else {
        uploadSrc = image.src;
        uploadFile = file;
      }

      var compressedSize = uploadFile.size / 1024; // 压缩后图片大小 (单位KB)

      console.log('压缩后图片大小kb', compressedSize); // 判断图片大小是否小于maxSize，如果大于则继续压缩至小于为止

      if (compressedSize.toFixed(2) > maxSize) {
        checkAndHandleCompression(uploadFile);
      } else {
        var fileOptions = {
          uploadSrc: uploadSrc,
          uploadFile: uploadFile
        };
        resolve(fileOptions);
      }
    });
  });
};
// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./components/EditArticle/index.less
var components_EditArticle = __webpack_require__(64);

// CONCATENATED MODULE: ./components/EditArticle/index.js












function EditArticle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditArticle_typeof = function _typeof(obj) { return typeof obj; }; } else { EditArticle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditArticle_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function EditArticle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditArticle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditArticle_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditArticle_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditArticle_defineProperties(Constructor, staticProps); return Constructor; }

function EditArticle_possibleConstructorReturn(self, call) { if (call && (EditArticle_typeof(call) === "object" || typeof call === "function")) { return call; } return EditArticle_assertThisInitialized(self); }

function EditArticle_getPrototypeOf(o) { EditArticle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditArticle_getPrototypeOf(o); }

function EditArticle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditArticle_setPrototypeOf(subClass, superClass); }

function EditArticle_setPrototypeOf(o, p) { EditArticle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditArticle_setPrototypeOf(o, p); }

function EditArticle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditArticle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var copy = __webpack_require__(65);

var qiniu = __webpack_require__(66);

var EditArticle_TextArea = input_default.a.TextArea;
var Option = select_default.a.Option;
var RadioGroup = radio_default.a.Group;
var InputGroup = input_default.a.Group;

var EditArticle_EditArticle =
/*#__PURE__*/
function (_Component) {
  EditArticle_inherits(EditArticle, _Component);

  function EditArticle(props) {
    var _this;

    EditArticle_classCallCheck(this, EditArticle);

    _this = EditArticle_possibleConstructorReturn(this, EditArticle_getPrototypeOf(EditArticle).call(this, props));

    EditArticle_defineProperty(EditArticle_assertThisInitialized(EditArticle_assertThisInitialized(_this)), "handleCancel", function () {
      return _this.setState({
        previewVisible: false
      });
    });

    EditArticle_defineProperty(EditArticle_assertThisInitialized(EditArticle_assertThisInitialized(_this)), "handlePreview", function (file) {
      _this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    EditArticle_defineProperty(EditArticle_assertThisInitialized(EditArticle_assertThisInitialized(_this)), "handleChange", function (_ref) {
      var fileList = _ref.fileList;

      _this.setState({
        fileList: fileList
      });
    });

    EditArticle_defineProperty(EditArticle_assertThisInitialized(EditArticle_assertThisInitialized(_this)), "onChangeRadio", function (e) {
      _this.setState({
        radioValue: e.target.value
      });
    });

    _this.state = {
      selectVal: 'js',
      titleVal: '',
      shortVal: '',
      urlVal: '',
      editCont: '',
      isEdit: '',
      //空值默认不为修改文章
      notEditArticle: false,
      //默认不修改文章
      timer: null,
      inter: null,
      markdownUploadLink: [],
      radioValue: 1,
      previewVisible: false,
      bucket: '',
      imageTwo: '',
      //图片二级目录 image/common/xxx.jpg
      previewImage: '',
      loadPercent: 0,
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    };
    return _this;
  }

  EditArticle_createClass(EditArticle, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$dataSourc = this.props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? {} : _this$props$dataSourc;
      var title = dataSource.title,
          short = dataSource.short,
          type = dataSource.type,
          url = dataSource.url,
          content = dataSource.content,
          _dataSource$articleID = dataSource.articleID,
          articleID = _dataSource$articleID === void 0 ? '' : _dataSource$articleID,
          createTime = dataSource.createTime;
      this.setState({
        selectVal: type,
        titleVal: title,
        shortVal: short,
        urlVal: url,
        editCont: Object(until["g" /* getHtml */])(content, createTime),
        isEdit: articleID,
        saveStatus: '',
        queryId: ''
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _Router$query = router_default.a.query,
          query = _Router$query === void 0 ? {} : _Router$query;
      var _query$id = query.id,
          id = _query$id === void 0 ? '' : _query$id;
      this.setState({
        queryId: id
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state = this.state,
          inter = _this$state.inter,
          timer = _this$state.timer;
      this.setState({
        inter: null,
        timer: null
      });
      clearInterval(inter);
      clearTimeout(timer);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(a, b) {
      var fileList = b.fileList,
          editCont = b.editCont;
      var _this$state2 = this.state,
          stateFileList = _this$state2.fileList,
          stateEditCont = _this$state2.editCont;
      return fileList.length !== stateFileList.length || editCont === stateEditCont;
    }
  }, {
    key: "handleChangeSelect",
    value: function handleChangeSelect(value) {
      this.setState({
        selectVal: value.join()
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
      var _this2 = this;

      var time = 15;
      var _this$state3 = this.state,
          inter = _this$state3.inter,
          timer = _this$state3.timer;

      if (inter) {
        clearInterval(inter);
        this.setState({
          inter: null
        });
      }

      inter = setInterval(function () {
        _this2.setState({
          saveStatus: "\u6B63\u5728\u4FDD\u5B58(".concat(--time, ")\u2026\u2026")
        });

        if (time === 0) {
          clearInterval(inter);
        }
      }, 1000);
      this.setState({
        editCont: txt,
        inter: inter,
        saveStatus: "\u6B63\u5728\u4FDD\u5B58(".concat(time, ")\u2026\u2026"),
        notEditArticle: true //正在修改文章

      });

      if (timer) {
        clearTimeout(timer);
        this.setState({
          timer: null,
          saveStatus: "\u6B63\u5728\u4FDD\u5B58(".concat(time, ")\u2026\u2026")
        });
      }

      timer = setTimeout(function () {
        _this2.onSubmit();

        _this2.setState({
          saveStatus: '已提交'
        });
      }, time * 1000);
      this.setState({
        timer: timer
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this3 = this;

      var _this$props = this.props,
          dispatch = _this$props.dispatch,
          _this$props$sourceDat = _this$props.sourceData,
          sourceData = _this$props$sourceDat === void 0 ? [] : _this$props$sourceDat;

      var _ref2 = sourceData[0] || '',
          maxArticleId = _ref2.id;

      var _sessionStorage = sessionStorage,
          password = _sessionStorage.password;
      var _this$state4 = this.state,
          isEdit = _this$state4.isEdit,
          notEditArticle = _this$state4.notEditArticle;
      var _this$state5 = this.state,
          _this$state5$selectVa = _this$state5.selectVal,
          selectVal = _this$state5$selectVa === void 0 ? '' : _this$state5$selectVa,
          _this$state5$titleVal = _this$state5.titleVal,
          titleVal = _this$state5$titleVal === void 0 ? '' : _this$state5$titleVal,
          _this$state5$shortVal = _this$state5.shortVal,
          shortVal = _this$state5$shortVal === void 0 ? '' : _this$state5$shortVal,
          _this$state5$urlVal = _this$state5.urlVal,
          urlVal = _this$state5$urlVal === void 0 ? '' : _this$state5$urlVal,
          _this$state5$editCont = _this$state5.editCont,
          editCont = _this$state5$editCont === void 0 ? '' : _this$state5$editCont,
          id = _this$state5.isEdit;

      if (titleVal === '' || selectVal === '' || editCont === '') {
        message_default.a.error('必填项不能为空');

        return;
      }

      if (urlVal !== '' && !until["l" /* regUrl */].test(urlVal)) {
        message_default.a.warning('url不正确');

        return;
      }

      var _this$state6 = this.state,
          inter = _this$state6.inter,
          timer = _this$state6.timer;

      if (inter) {
        this.setState({
          inter: null,
          timer: null,
          saveStatus: '已提交'
        });
        clearInterval(inter);
        clearTimeout(timer);
      }

      var bool = isEdit !== '';

      if (!bool) {
        //如果是发布文章，带上版权信息
        editCont += Object(constantsData["G" /* POST_ARTICLE_COPY */])(maxArticleId);
      }

      var queryParamsObj = {
        title: titleVal.trim(),
        url: urlVal.trim(),
        content: !notEditArticle ? decodeURIComponent(editCont) : encodeURIComponent(editCont),
        user: '刘伟波',
        type: selectVal,
        short: shortVal.trim(),
        img: 'js.png',
        token: password
      };

      if (bool) {
        //修改文章 isEdit为文章id
        queryParamsObj = Object.assign({}, queryParamsObj, {
          id: id
        });
      }

      Object(actions["q" /* postArticle */])(dispatch, Object(config_0["p" /* postArticleUrl */])(), queryParamsObj).then(function (res) {
        var _res$postArticleData = res.postArticleData,
            postArticleData = _res$postArticleData === void 0 ? [] : _res$postArticleData;

        if (Array.isArray(postArticleData) && !postArticleData.length) {
          message_default.a.warning('您可能没权限,或者文章已存在');

          return;
        }

        if (res) {
          var newMaxArticleId = ++maxArticleId;

          message_default.a.success(bool ? _this3.editTipsDom() : _this3.postTipsDom(newMaxArticleId));

          if (!bool) {
            router_default.a.push("/adminDetail/".concat(newMaxArticleId));
          }
        }
      });
    }
  }, {
    key: "postTipsDom",
    value: function postTipsDom(maxArticleId) {
      return external_react_default.a.createElement("span", null, "\u53D1\u5E03\u6587\u7AE0\u6210\u529F\uFF0C\u70B9\u51FB", external_react_default.a.createElement(link_default.a, {
        href: "/adminDetail/".concat(maxArticleId)
      }, external_react_default.a.createElement("a", null, "\u4FEE\u6539")), "\u6216\u8005", external_react_default.a.createElement(link_default.a, {
        href: "/p/".concat(maxArticleId)
      }, external_react_default.a.createElement("a", null, "\u67E5\u770B")), "\u6587\u7AE0");
    }
  }, {
    key: "editTipsDom",
    value: function editTipsDom() {
      var _Router$query2 = router_default.a.query,
          query = _Router$query2 === void 0 ? {} : _Router$query2;
      var _query$id2 = query.id,
          id = _query$id2 === void 0 ? '' : _query$id2;
      return external_react_default.a.createElement("span", null, "\u4FEE\u6539\u6587\u7AE0\u6210\u529F\uFF0C\u70B9\u51FB", external_react_default.a.createElement(link_default.a, {
        href: "/p/".concat(id)
      }, external_react_default.a.createElement("a", null, "\u67E5\u770B")), "\u6587\u7AE0");
    } //上传

  }, {
    key: "beforeUpload",
    value: function () {
      var _beforeUpload = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(file, fileList) {
        var _sessionStorage2, password, _this$state7, bucket, imageTwo, markdownUploadLink, radioValue, self, dispatch, paramsObj, qiniuData, _qiniuData, qiniuTokenData, _ref3, qiniuToken, observer, name, lastModified, size, _getImageName, font, _getImageName$back, back, _ref4, uploadSrc, uploadFile, _ref5, newFileName, config, putExtra, observable, subscription, qiniu_upload_link;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _sessionStorage2 = sessionStorage, password = _sessionStorage2.password;
                _this$state7 = this.state, bucket = _this$state7.bucket, imageTwo = _this$state7.imageTwo, markdownUploadLink = _this$state7.markdownUploadLink, radioValue = _this$state7.radioValue;
                bucket = bucket || 'article';
                self = this;
                dispatch = this.props.dispatch;
                paramsObj = {
                  bucket: bucket,
                  token: password
                };
                _context.prev = 6;
                _context.next = 9;
                return Object(actions["k" /* getQiniuToken */])(dispatch, Object(config_0["k" /* getQiniuTokenUrl */])(paramsObj));

              case 9:
                qiniuData = _context.sent;
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](6);

                message_default.a.error('七牛获取token错误' + JSON.stringify(_context.t0));

                return _context.abrupt("return");

              case 16:
                _qiniuData = qiniuData, qiniuTokenData = _qiniuData.qiniuToken;
                _ref3 = qiniuTokenData[0] || {}, qiniuToken = _ref3.qiniuToken;
                observer = {
                  next: function next(res) {
                    var total = res.total;
                    var percent = total.percent;
                    self.setState({
                      loadPercent: percent
                    });

                    if (percent === 100) {
                      message_default.a.success('上传成功');
                    }
                  },
                  error: function error(err) {
                    console.log(err); // ...

                    message_default.a.error('err:' + JSON.stringify(err));
                  },
                  complete: function complete(res) {// ...
                  }
                };
                name = file.name, lastModified = file.lastModified, size = file.size;
                _getImageName = Object(until["h" /* getImageName */])(name), font = _getImageName.font, _getImageName$back = _getImageName.back, back = _getImageName$back === void 0 ? '.png' : _getImageName$back;
                _ref4 = {}, uploadSrc = _ref4.uploadSrc, uploadFile = _ref4.uploadFile;

                if (!(size / 1024 / 1024 > constantsData["M" /* UPLOAD_MAX_SIZE */] && radioValue === 1 && back !== '.gif')) {
                  _context.next = 30;
                  break;
                }

                _context.next = 25;
                return checkAndHandleCompression(file, constantsData["M" /* UPLOAD_MAX_SIZE */]);

              case 25:
                _ref5 = _context.sent;
                uploadSrc = _ref5.uploadSrc;
                uploadFile = _ref5.uploadFile;
                _context.next = 31;
                break;

              case 30:
                uploadFile = file;

              case 31:
                newFileName = "image/".concat(imageTwo ? imageTwo : 'common', "/").concat(font, "_").concat(lastModified, "_").concat(size, "_").concat(+new Date()).concat(back);
                config = {
                  useCdnDomain: true,
                  region: null
                };
                putExtra = {
                  fname: '',
                  params: {},
                  mimeType: [] || null
                }; // return ;

                observable = qiniu.upload(uploadFile, newFileName, qiniuToken, putExtra, config);
                subscription = observable.subscribe(observer); // 上传开始

                qiniu_upload_link = bucket_domin[bucket] + newFileName;
                this.setState({
                  markdownUploadLink: [].concat(_toConsumableArray(markdownUploadLink), [qiniu_upload_link])
                });
                return _context.abrupt("return", true);

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 12]]);
      }));

      function beforeUpload(_x, _x2) {
        return _beforeUpload.apply(this, arguments);
      }

      return beforeUpload;
    }()
  }, {
    key: "handleChangeBucket",
    value: function handleChangeBucket(e) {
      var arr = e.target.value.split(',');
      var bucket = arr[0];
      var imageTwo = arr[1];
      this.setState({
        bucket: bucket,
        imageTwo: imageTwo
      });
    }
  }, {
    key: "onCopyLink",
    value: function onCopyLink(v) {
      var link = "![".concat(v, "](").concat(v, ")");
      copy(link);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state8 = this.state,
          _this$state8$editCont = _this$state8.editCont,
          editCont = _this$state8$editCont === void 0 ? '' : _this$state8$editCont,
          _this$state8$selectVa = _this$state8.selectVal,
          selectVal = _this$state8$selectVa === void 0 ? '' : _this$state8$selectVa,
          _this$state8$titleVal = _this$state8.titleVal,
          titleVal = _this$state8$titleVal === void 0 ? '' : _this$state8$titleVal,
          _this$state8$shortVal = _this$state8.shortVal,
          shortVal = _this$state8$shortVal === void 0 ? '' : _this$state8$shortVal,
          _this$state8$urlVal = _this$state8.urlVal,
          urlVal = _this$state8$urlVal === void 0 ? '' : _this$state8$urlVal,
          saveStatus = _this$state8.saveStatus,
          bucket = _this$state8.bucket,
          loadPercent = _this$state8.loadPercent,
          markdownUploadLink = _this$state8.markdownUploadLink,
          queryId = _this$state8.queryId;
      var resultSelectVal = selectVal ? selectVal.split(',') : [];
      var _this$props$dataSourc2 = this.props.dataSource,
          dataSource = _this$props$dataSourc2 === void 0 ? {} : _this$props$dataSourc2;
      var createTime = dataSource.createTime,
          id = dataSource.id; //上传

      var _this$state9 = this.state,
          previewVisible = _this$state9.previewVisible,
          previewImage = _this$state9.previewImage,
          fileList = _this$state9.fileList,
          radioValue = _this$state9.radioValue;
      var uploadButton = external_react_default.a.createElement("div", null, external_react_default.a.createElement(icon_default.a, {
        type: "plus"
      }), external_react_default.a.createElement("div", {
        className: "ant-upload-text"
      }, "Upload"));
      return external_react_default.a.createElement("div", null, queryId && external_react_default.a.createElement("p", null, external_react_default.a.createElement(link_default.a, {
        href: "/p/".concat(queryId)
      }, external_react_default.a.createElement("a", null, "\u67E5\u770B\u5F53\u524D\u6587\u7AE0"))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        span: 24
      }, external_react_default.a.createElement(InputGroup, {
        compact: true
      }, external_react_default.a.createElement(input_default.a, {
        style: {
          width: '50%'
        },
        onChange: this.handleChangeTitle.bind(this),
        placeholder: "\u6587\u7AE0\u6807\u9898",
        title: "\u6587\u7AE0\u6807\u9898",
        defaultValue: titleVal
      }), external_react_default.a.createElement(select_default.a, {
        style: {
          width: '50%'
        },
        mode: "tags",
        placeholder: "\u8BF7\u9009\u62E9\u6587\u7AE0\u7C7B\u578B",
        onChange: this.handleChangeSelect.bind(this),
        defaultValue: resultSelectVal
      }, constantsData["I" /* POST_ARTICLE_TYPE */].map(function (v) {
        return external_react_default.a.createElement(Option, {
          value: v.key
        }, v.value);
      }))))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        span: 24
      }, external_react_default.a.createElement(EditArticle_TextArea, {
        onChange: this.handleChangeShort.bind(this),
        placeholder: "\u7B80\u77ED\u4ECB\u7ECD",
        title: "\u7B80\u77ED\u4ECB\u7ECD",
        defaultValue: shortVal,
        rows: 2
      }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        span: 24
      }, external_react_default.a.createElement(input_default.a, {
        defaultValue: urlVal,
        onChange: this.handleChangeUrl.bind(this),
        title: "\u53C2\u8003\u7684URL\u94FE\u63A5\u5730\u5740",
        placeholder: "\u53C2\u8003\u7684URL\u94FE\u63A5\u5730\u5740"
      }))), external_react_default.a.createElement(components_Edit, {
        editCont: editCont,
        id: id,
        createTime: createTime,
        handleChangeMarkEdit: this.handleChangeMarkEdit.bind(this)
      }), external_react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.onSubmit.bind(this)
      }, "\u63D0\u4EA4"), external_react_default.a.createElement("div", {
        className: "save-status"
      }, saveStatus), markdownUploadLink.length ? markdownUploadLink.map(function (v, i) {
        return external_react_default.a.createElement(button_default.a, {
          className: "markdown-image-link",
          onClick: _this4.onCopyLink.bind(_this4, v),
          type: "danger",
          size: "small"
        }, "\u7B2C", i + 2, "\u5F20");
      }) : '', external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        span: 20
      }, external_react_default.a.createElement("div", {
        className: "upload-wrapper",
        style: {
          border: "1px solid ".concat(loadPercent === 100 ? 'green' : 'orange')
        }
      }, external_react_default.a.createElement(upload_default.a, {
        action: "",
        listType: "picture-card",
        fileList: fileList,
        beforeUpload: this.beforeUpload.bind(this),
        onPreview: this.handlePreview,
        onChange: this.handleChange
      }, uploadButton)), external_react_default.a.createElement(modal_default.a, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, external_react_default.a.createElement("img", {
        alt: "example",
        style: {
          width: '100%'
        },
        src: previewImage
      }))), external_react_default.a.createElement(col_default.a, {
        span: 4
      }, external_react_default.a.createElement(input_default.a, {
        defaultValue: bucket,
        onChange: this.handleChangeBucket.bind(this),
        title: "\u4E0A\u4F20\u7684bucket,\u9ED8\u8BA4\u4E3Aarticle\uFF0C\u6587\u4EF6\u540D\u4E8C\u7EA7\u76EE\u5F55\u4EE5\u9017\u53F7\u5206\u9694\uFF0C\u5982common\uFF0C\u4F8B\u5982\uFF1Aarticle,common",
        placeholder: "\u9F20\u6807\u79FB\u4E0A\u9762\u770B\u5982\u4F55\u4F20\u53C2"
      }), loadPercent === 0 || loadPercent === 100 ? '' : external_react_default.a.createElement("span", null, loadPercent, "%"), external_react_default.a.createElement("div", {
        title: "\u8FD9\u91CC\u9ED8\u8BA4\u5927\u4E8E".concat(constantsData["M" /* UPLOAD_MAX_SIZE */], "M\u4F1A\u81EA\u52A8\u538B\u7F29\u56FE\u7247")
      }, external_react_default.a.createElement(RadioGroup, {
        onChange: this.onChangeRadio,
        value: radioValue
      }, external_react_default.a.createElement(radio_default.a, {
        value: 1
      }, "\u538B\u7F29\u6587\u4EF6"), external_react_default.a.createElement(radio_default.a, {
        value: 2
      }, "\u4E0D\u538B\u7F29\u6587\u4EF6"))))));
    }
  }]);

  return EditArticle;
}(external_react_["Component"]);

/* harmony default export */ var components_EditArticle_0 = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])()(EditArticle_EditArticle));

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(11);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(37);
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(14);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(32);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./config/constantTag.js
var constantTag = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(15);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// CONCATENATED MODULE: ./components/Ad/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Ad_Ad =
/*#__PURE__*/
function (_Component) {
  _inherits(Ad, _Component);

  function Ad(props) {
    var _this;

    _classCallCheck(this, Ad);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ad).call(this, props));
    _this.state = {
      dataSource: []
    };
    return _this;
  }

  _createClass(Ad, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var dataSource = this.props.dataSource;
      this.setState({
        dataSource: dataSource
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {
      var dataSource = this.props.dataSource;
      this.setState({
        dataSource: dataSource
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var dataSource = _ref.dataSource;
      var hasUrlComment = this.props.dataSource;
      return dataSource.length !== hasUrlComment.length;
    }
  }, {
    key: "render",
    value: function render() {
      var hasUrlComment = this.props.dataSource;
      return external_react_default.a.createElement("div", {
        className: "ad-wrapper "
      }, external_react_default.a.createElement("div", {
        className: "content"
      }, hasUrlComment.map(function (v, index) {
        var ran = Math.random() * constantsData["j" /* COLORS_ARR */].length | 0;
        var color = constantsData["j" /* COLORS_ARR */][ran];
        return external_react_default.a.createElement(tooltip_default.a, {
          key: index,
          placement: "right",
          title: v.user
        }, external_react_default.a.createElement("a", {
          className: "link-friends-a",
          style: {
            marginLeft: Object(constantTag["d" /* getRandomMarginLeft */])(),
            marginTop: Object(constantTag["e" /* getRandomMarginTop */])()
          },
          href: v.website,
          target: "_blank"
        }, external_react_default.a.createElement("span", {
          style: {
            backgroundColor: color
          }
        }, Object(constantTag["f" /* getRandomTxt */])(v.user))));
      })), external_react_default.a.createElement("div", {
        className: "remark"
      }, external_react_default.a.createElement(tooltip_default.a, {
        placement: "bottomLeft",
        title: "\u60F3\u5C55\u793A\u4F60\u7684\u53CB\u60C5\u94FE\u63A5\uFF1F\u8D76\u5FEB\u8BC4\u8BBA\u5427\uFF0C\u8FD9\u91CC\u4F1A\u52A0\u4E0A\u4F60\u7684\u53CB\u94FE\u3002"
      }, external_react_default.a.createElement("a", {
        className: "my-link",
        href: "#comment"
      }, "\u60F3\u5C55\u793A\u4F60\u7684\u53CB\u60C5\u94FE\u63A5\uFF1F"))));
    }
  }]);

  return Ad;
}(external_react_["Component"]);

/* harmony default export */ var components_Ad = (Ad_Ad);
// EXTERNAL MODULE: ./components/ArticleTitle/index.less
var components_ArticleTitle = __webpack_require__(63);

// CONCATENATED MODULE: ./components/ArticleTitle/index.js






function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }









var ArticleTitle_ArticleTitle = function ArticleTitle() {
  var _ref = arguments.length <= 0 ? undefined : arguments[0],
      _ref$detailArticle = _ref.detailArticle,
      detailArticle = _ref$detailArticle === void 0 ? {} : _ref$detailArticle,
      _ref$commentsData = _ref.commentsData,
      commentsData = _ref$commentsData === void 0 ? [] : _ref$commentsData,
      _ref$htmlStr = _ref.htmlStr,
      htmlStr = _ref$htmlStr === void 0 ? '' : _ref$htmlStr;

  var READING_TIME = Math.ceil(htmlStr.length / 20677 * 29);
  var hasUrlComment = commentsData.filter(function (v) {
    return until["l" /* regUrl */].test(v.website);
  }).slice(0, 10);

  if (hasUrlComment.length < 10) {
    hasUrlComment = [].concat(_toConsumableArray(hasUrlComment), _toConsumableArray(constantTag["a" /* DEFAULT_TAG_ARR */])).slice(0, 10);
  }

  var title = detailArticle.title,
      createTime = detailArticle.createTime,
      user = detailArticle.user,
      visitor = detailArticle.visitor,
      lastModify = detailArticle.lastModify,
      modifyCount = detailArticle.modifyCount,
      _detailArticle$type = detailArticle.type,
      type = _detailArticle$type === void 0 ? ['js'] : _detailArticle$type,
      _detailArticle$url = detailArticle.url,
      url = _detailArticle$url === void 0 ? '' : _detailArticle$url,
      _detailArticle$like = detailArticle.like,
      like = _detailArticle$like === void 0 ? 0 : _detailArticle$like;

  if (lastModify === 0) {
    lastModify = createTime;
  }

  return external_react_default.a.createElement("div", {
    className: "jsx-3877631247" + " " + "article-title-component "
  }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    sm: {
      span: 24
    },
    xs: {
      span: 24
    },
    lg: {
      span: 15
    }
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3877631247"
  }, title), external_react_default.a.createElement("p", {
    className: "jsx-3877631247" + " " + "tag-wrapper"
  }, url === '' ? external_react_default.a.createElement("span", {
    className: "jsx-3877631247" + " " + "origin-article"
  }, "\u539F") : '', type.split(',').map(function (v) {
    return external_react_default.a.createElement("span", {
      key: v,
      className: "jsx-3877631247" + " " + "tag"
    }, v);
  }), external_react_default.a.createElement("span", {
    className: "jsx-3877631247" + " " + "read-time"
  }, "\u8BFB\u5B8C\u5927\u6982\u9700\u8981", READING_TIME, "\u5206\u949F")), external_react_default.a.createElement("ul", {
    className: "jsx-3877631247" + " " + "clearfix detail-info"
  }, external_react_default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, "\u53D1\u5E03\u65F6\u95F4\uFF1A", Object(until["e" /* formatTime */])(createTime)), external_react_default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, external_react_default.a.createElement(icon_default.a, {
    type: "user"
  }), " ", user), external_react_default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, external_react_default.a.createElement(icon_default.a, {
    type: "eye"
  }), " ", visitor), external_react_default.a.createElement("li", {
    className: "jsx-3877631247" + " " + "fl"
  }, " \u66F4\u65B0\u4E8E", external_react_default.a.createElement(icon_default.a, {
    type: "edit"
  }), "\uFF1A ", Object(until["e" /* formatTime */])(lastModify))), external_react_default.a.createElement(divider_default.a, null)), external_react_default.a.createElement(col_default.a, {
    sm: {
      span: 0
    },
    xs: {
      span: 0
    },
    lg: {
      span: 8
    },
    className: "advertisement-wrapper"
  }, external_react_default.a.createElement(components_Ad, {
    dataSource: hasUrlComment
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "3877631247",
    css: [".detail-info.jsx-3877631247 li.jsx-3877631247{margin-right:20px;}"]
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  var getCommentsData = state.getCommentsData;
  return {
    getCommentsData: getCommentsData
  };
};

/* harmony default export */ var components_ArticleTitle_0 = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps)(ArticleTitle_ArticleTitle));

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports) {



/***/ }),
/* 64 */
/***/ (function(module, exports) {



/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("copy-text-to-clipboard");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("qiniu-js");

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ArticleTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var _components_EditArticle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2___default.a.Content;

var AdminDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminDetail, _Component);

  function AdminDetail(props) {
    var _this;

    _classCallCheck(this, AdminDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminDetail).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWebsiteChange", function (value) {
      var autoCompleteResult;

      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
          return "".concat(value).concat(domain);
        });
      }

      _this.setState({
        autoCompleteResult: autoCompleteResult
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var dispatch = _this.props.dispatch;
      var id = _this.state.articleID;

      if (!id) {
        return;
      }

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var comment = values.comment,
              email = values.email,
              nickname = values.nickname,
              website = values.website;
        }
      });
    });

    _this.state = {
      autoCompleteResult: [1, 2],
      articleID: ''
    };
    return _this;
  }

  _createClass(AdminDetail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$adminBlog = this.props.adminBlogDetailData,
          adminBlogDetailData = _this$props$adminBlog === void 0 ? [] : _this$props$adminBlog;

      var _ref = adminBlogDetailData[0] || {},
          articleID = _ref.id;

      this.setState({
        articleID: articleID
      });
    }
  }, {
    key: "render",
    value: function render() {
      //接口
      var _this$props$adminBlog2 = this.props.adminBlogDetailData,
          adminBlogDetailData = _this$props$adminBlog2 === void 0 ? [] : _this$props$adminBlog2;
      var _this$state$articleID = this.state.articleID,
          articleID = _this$state$articleID === void 0 ? '' : _this$state$articleID;
      var objArticleInfo = Object(_until__WEBPACK_IMPORTED_MODULE_11__[/* getArticleInfo */ "f"])(adminBlogDetailData);
      var _objArticleInfo$title = objArticleInfo.title,
          title = _objArticleInfo$title === void 0 ? '' : _objArticleInfo$title,
          _objArticleInfo$url = objArticleInfo.url,
          url = _objArticleInfo$url === void 0 ? '' : _objArticleInfo$url,
          _objArticleInfo$short = objArticleInfo.short,
          short = _objArticleInfo$short === void 0 ? '' : _objArticleInfo$short,
          _objArticleInfo$type = objArticleInfo.type,
          type = _objArticleInfo$type === void 0 ? '' : _objArticleInfo$type;
      adminBlogDetailData = adminBlogDetailData[0] || {};
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, title, "\xBB", _config_constantsData__WEBPACK_IMPORTED_MODULE_9__[/* COMMON_TITLE */ "n"])), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: 24,
          minHeight: 380
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ArticleTitle__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        detailArticle: adminBlogDetailData
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_EditArticle__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        dataSource: Object.assign({}, adminBlogDetailData, {
          articleID: articleID
        })
      })))));
    }
  }]);

  return AdminDetail;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

AdminDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(context) {
    var id, queryStrObj, adminBlogDetail, adminBlogDetailData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(_config__WEBPACK_IMPORTED_MODULE_10__[/* getDetailUrl */ "f"])(queryStrObj));

          case 4:
            adminBlogDetail = _context.sent;
            _context.next = 7;
            return adminBlogDetail.json();

          case 7:
            adminBlogDetailData = _context.sent;
            return _context.abrupt("return", {
              adminBlogDetailData: adminBlogDetailData
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

var WrappedRegistrationForm = antd_lib_form__WEBPACK_IMPORTED_MODULE_0___default.a.create()(AdminDetail);

/* harmony default export */ __webpack_exports__["default"] = (WrappedRegistrationForm);

/***/ })
/******/ ]);