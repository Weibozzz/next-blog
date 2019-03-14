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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQ_ACTION", function() { return REQ_ACTION; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var confirm = antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.confirm;
var REQ_ACTION = {
  //搜索文章
  onSearch: function onSearch(_this, val) {
    _this.setState({
      inputVal: val,
      currentPage: 1
    });

    var dispatch = _this.props.dispatch;
    var queryStringObj;

    _this.setState({
      keyWard: val
    });

    if (val) {
      queryStringObj = {
        type: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* TITLE */ "K"],
        num: 1,
        pageNum: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* pageNum */ "R"],
        wd: val
      };
    } else {
      queryStringObj = {
        type: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* ALL */ "e"],
        num: 1,
        pageNum: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* pageNum */ "R"]
      };
    }

    Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* getSearchList */ "l"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* getBlogUrl */ "c"])(queryStringObj));
  },
  //分页变化查询
  onChange: function onChange(_this, page, pageSize) {
    console.log(arguments);
    var dispatch = _this.props.dispatch;
    var _sessionStorage = sessionStorage,
        password = _sessionStorage.password;
    var queryStringObj = {
      type: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* ALL */ "e"],
      num: page,
      pageNum: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* pageNum */ "R"],
      token: password
    };
    Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* getAdminBlogList */ "c"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* getAdminBlogUrl */ "b"])(queryStringObj));
  },
  //删除文章
  handleDelArticle: function handleDelArticle(_this, id) {
    var dispatch = _this.props.dispatch;
    var defaultConfirmObj = _this.state.defaultConfirmObj;
    var confirmObj = {
      title: 'Are you sure delete this article?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No'
    };
    var _sessionStorage2 = sessionStorage,
        password = _sessionStorage2.password;
    var queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm(_objectSpread({}, confirmObj, defaultConfirmObj, {
      onOk: function onOk() {
        Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* getAdminBlogList */ "c"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* getAdminBlogUrl */ "b"])(queryStringObj)).then(function (res) {
          var _res$adminBlogData = res.adminBlogData,
              adminBlogData = _res$adminBlogData === void 0 ? [] : _res$adminBlogData;

          if (!adminBlogData.length) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warning('您可能没权限');

            return;
          }

          if (res) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success("id\u4E3A".concat(id, "\u7684\u6587\u7AE0\u5220\u9664\u6210\u529F"));
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('删除失败');
          }
        });
      },
      onCancel: function onCancel() {}
    }));
  },
  //删除留言
  handleDelUserComment: function handleDelUserComment(_this, id) {
    var dispatch = _this.props.dispatch;
    var defaultConfirmObj = _this.state.defaultConfirmObj;
    var _sessionStorage3 = sessionStorage,
        password = _sessionStorage3.password;
    var queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm(_objectSpread({}, defaultConfirmObj, {
      onOk: function onOk() {
        Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* postUserComments */ "t"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* postUserCommentUrl */ "s"])(), queryStringObj).then(function (res) {
          var getUserCommentsData = res.getUserCommentsData;

          if (!getUserCommentsData.length) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warning('您可能没权限');

            return;
          }

          if (res) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success("id\u4E3A".concat(id, "\u7684\u7528\u6237\u7559\u8A00\u5220\u9664\u6210\u529F"));
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('删除失败');
          }
        });
      },
      onCancel: function onCancel() {}
    }));
  },
  //删除评论
  handleDelAdminComment: function handleDelAdminComment(_this, id) {
    var dispatch = _this.props.dispatch;
    var defaultConfirmObj = _this.state.defaultConfirmObj;
    var _sessionStorage4 = sessionStorage,
        password = _sessionStorage4.password;
    var queryStringObj = {
      type: 'del',
      delNum: id,
      token: password
    };
    confirm(_objectSpread({}, defaultConfirmObj, {
      onOk: function onOk() {
        Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* postComments */ "r"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* postCommentUrl */ "q"])(), queryStringObj).then(function (res) {
          var getCommentsData = res.getCommentsData;

          if (!getCommentsData.length) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.warning('您可能没权限');

            return;
          }

          if (res) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success("id\u4E3A".concat(id, "\u7684\u7528\u6237\u8BC4\u8BBA\u5220\u9664\u6210\u529F"));
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('删除失败');
          }
        });
      },
      onCancel: function onCancel() {}
    }));
  },
  //上拉加载数据
  scrollBTMLoading: function scrollBTMLoading(_this) {
    var dispatch = _this.props.dispatch;
    var _this$state = _this.state,
        num = _this$state.pageSize,
        tabKey = _this$state.tabKey;
    var _sessionStorage5 = sessionStorage,
        password = _sessionStorage5.password;
    var queryStringObj = {
      type: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* ALL */ "e"],
      num: num,
      pageNum: _config_constantsData__WEBPACK_IMPORTED_MODULE_4__[/* pageNum */ "R"],
      token: password
    };
    var footerDom = document.getElementsByClassName('footer-content')[0];
    var _window = window,
        windowHeight = _window.innerHeight;

    var _footerDom$getBoundin = footerDom.getBoundingClientRect(),
        bottom = _footerDom$getBoundin.bottom;

    if (bottom - windowHeight < 1 && tabKey !== '1') {
      console.log('该请求数据了');
      var newNum = ++num;

      _this.setState({
        isLoading: true,
        pageSize: newNum
      });

      var newQueryStringObj = _objectSpread({}, queryStringObj, {
        num: newNum
      });

      if (tabKey === '4') {
        //浏览记录分页
        Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* getIpList */ "h"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* getIpUrl */ "g"])(newQueryStringObj)).then(function (res) {
          if (res) {
            _this.setState({
              isLoading: false
            });
          }
        });
      } else if (tabKey === '3') {
        //评论管理
        Object(_store_actions__WEBPACK_IMPORTED_MODULE_2__[/* postComments */ "r"])(dispatch, Object(_config__WEBPACK_IMPORTED_MODULE_3__[/* postCommentUrl */ "q"])(), newQueryStringObj).then(function (res) {
          if (res) {
            _this.setState({
              isLoading: false
            });
          }
        });
      }
    }
  }
};

/***/ }),
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export requ_url */
/* unused harmony export qiniuyun_cdn */
/* unused harmony export qiniuyun_cdn_1 */
/* unused harmony export qiniuyun_cdn_2 */
/* unused harmony export qiniuyun_cdn_fight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return qiniuyun_cdn_icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return qiniuyun_cdn_icon_i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qiniuyun_cdn_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qiniuyun_cdn_all_type; });
/* harmony import */ var _until__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var requ_url = 'https://portal.qiniu.com/api/kodo/bucket/files?bucket=static&delimiter=&limit=50&marker=';
var qiniuyun_cdn = [{
  "key": "image/life/IMG_20140601_124220.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20140601_124220.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20140601_124220.jpg",
  "hash": "Fl7OMtLYjqQBrsD994C7fwU1eZpQ",
  "file_size": 161689,
  "put_time": "2018-07-18T23:30:38.7780152+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20140610_214934.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20140610_214934.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20140610_214934.jpg",
  "hash": "FmSRm3bL8G8JwUiOCMVXOsOAraSf",
  "file_size": 56897,
  "put_time": "2018-07-18T23:30:36.9446801+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20140712_184132.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20140712_184132.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20140712_184132.jpg",
  "hash": "FnflTaoS0FXEo94zZH74khRGqFo9",
  "file_size": 95762,
  "put_time": "2018-07-18T23:30:37.0748368+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20140712_190028.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20140712_190028.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20140712_190028.jpg",
  "hash": "FjLYHNwnzrSW1N6LibZ-GKhuphH2",
  "file_size": 50391,
  "put_time": "2018-07-18T23:30:36.8894864+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20150425_144959.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20150425_144959.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20150425_144959.jpg",
  "hash": "FpFdysedWon_bM91iTxu8qgHgwaa",
  "file_size": 175230,
  "put_time": "2018-07-18T23:30:37.156914+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20150516_095533.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20150516_095533.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20150516_095533.jpg",
  "hash": "FudzdFugt_-Y3QiMAfgpLB-qz9oM",
  "file_size": 58395,
  "put_time": "2018-07-18T23:30:37.0766038+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20150526_195927.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20150526_195927.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20150526_195927.jpg",
  "hash": "FlLkTLkLwpIPjpaEg3FVN-5Ei5UL",
  "file_size": 37943,
  "put_time": "2018-07-18T23:30:38.1192506+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160312_145558.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160312_145558.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160312_145558.jpg",
  "hash": "Fi2WDd6behdr-ixHHfjW4WSWe5KC",
  "file_size": 143333,
  "put_time": "2018-07-18T23:30:38.4071027+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160518_220350.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160518_220350.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160518_220350.jpg",
  "hash": "FhrCJNwy_dis2ypk5oBMWXwlYr96",
  "file_size": 53726,
  "put_time": "2018-07-18T23:30:38.5896842+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160522_170512.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160522_170512.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160522_170512.jpg",
  "hash": "FnRhNI96s9Njp3EKEiJrfiMXo7uF",
  "file_size": 140219,
  "put_time": "2018-07-18T23:30:37.0833952+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160604_143625.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160604_143625.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160604_143625.jpg",
  "hash": "Fj7GdiPGF4YyR0xN3016ydqsvt94",
  "file_size": 43180,
  "put_time": "2018-07-18T23:30:37.0641757+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160609_112351_HDR.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160609_112351_HDR.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160609_112351_HDR.jpg",
  "hash": "FoHIGTvn23JIIUByaEjY4F4APBgQ",
  "file_size": 76688,
  "put_time": "2018-07-18T23:30:38.4861283+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160622_212925_HDR.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160622_212925_HDR.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160622_212925_HDR.jpg",
  "hash": "Ft0ukqJeARu44CawYHEjh_KBESfq",
  "file_size": 59053,
  "put_time": "2018-07-18T23:30:37.7252776+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160701_104733_HDR.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160701_104733_HDR.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160701_104733_HDR.jpg",
  "hash": "Fv5ZC4hYu-XiWXipdcaJUU_AJ8Py",
  "file_size": 94056,
  "put_time": "2018-07-18T23:30:38.4694004+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160713_212037.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160713_212037.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160713_212037.jpg",
  "hash": "Fvz_nB5CZH0UKzYzbSApWaLrLMhb",
  "file_size": 111865,
  "put_time": "2018-07-18T23:30:38.62691+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20160904_133357.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20160904_133357.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20160904_133357.jpg",
  "hash": "Fqe3ruuXR8C6zICrlJqguc1xaFPD",
  "file_size": 61456,
  "put_time": "2018-07-18T23:30:38.2640931+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20161119_154258.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20161119_154258.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20161119_154258.jpg",
  "hash": "FmC_lig6ixcYfj7jLQLUdRh1NvuY",
  "file_size": 127270,
  "put_time": "2018-07-18T23:30:38.6605992+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/IMG_20171202_192919.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20171202_192919.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20171202_192919.jpg",
  "hash": "FhPu8UPp4KPnilpl-6wmQi2GRxDM",
  "file_size": 64925,
  "put_time": "2018-07-18T23:30:38.4593058+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/microMsg.1474901029140.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/microMsg.1474901029140.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/microMsg.1474901029140.jpg",
  "hash": "FjSdfhVsPKLSFQj0cq72VGCx0NQF",
  "file_size": 127384,
  "put_time": "2018-07-18T23:30:38.6894347+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/mmexport1509537704037.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/mmexport1509537704037.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/mmexport1509537704037.jpg",
  "hash": "FiAX7k8OplBULJELlGYjKkJm2H_E",
  "file_size": 80196,
  "put_time": "2018-07-18T23:30:38.662604+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/1514617969516.jpeg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/1514617969516.jpeg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/1514617969516.jpeg",
  "hash": "Fmxj0CgUqFAH-YwfLagU_WoOckvx",
  "file_size": 83580,
  "put_time": "2018-07-18T23:31:53.476572+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20141203_132920.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20141203_132920.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20141203_132920.jpg",
  "hash": "Fp9T4osA9rt3NCalOnu2O0tA9-ac",
  "file_size": 113065,
  "put_time": "2018-07-18T23:31:53.6164629+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20150420_121553.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20150420_121553.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20150420_121553.jpg",
  "hash": "Fjj63aNJC4JnhHqzA0_PQJQkwzKn",
  "file_size": 120122,
  "put_time": "2018-07-18T23:31:53.6184989+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20151023_210233.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20151023_210233.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20151023_210233.jpg",
  "hash": "FrFF4e5ZwpD6og62cWN5xfnzQ9Q8",
  "file_size": 96823,
  "put_time": "2018-07-18T23:31:53.6379263+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160326_174534.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160326_174534.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160326_174534.jpg",
  "hash": "FgV841FTnJQnnMO8qUHMmIx-FC6D",
  "file_size": 117916,
  "put_time": "2018-07-18T23:31:53.7115469+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160402_153331.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160402_153331.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160402_153331.jpg",
  "hash": "FlPaeqkP1y9QNX34U-1J8h7LQeMS",
  "file_size": 128280,
  "put_time": "2018-07-18T23:31:54.3145925+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160408_224056.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160408_224056.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160408_224056.jpg",
  "hash": "Fngkh4qVvkGOeXKY6YIzzHqt0j_9",
  "file_size": 112217,
  "put_time": "2018-07-18T23:31:54.3041609+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160415_214209.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160415_214209.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160415_214209.jpg",
  "hash": "FhUqsoKqQYQF3H6rECiivMJbMXF5",
  "file_size": 109290,
  "put_time": "2018-07-18T23:31:54.53947+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160422_213203.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160422_213203.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160422_213203.jpg",
  "hash": "Fj9DhNUvi6xaRZ7vjIuW5u7uhNei",
  "file_size": 109006,
  "put_time": "2018-07-18T23:31:54.4295996+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160517_152851.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160517_152851.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160517_152851.jpg",
  "hash": "FipvdE3VYlmXapcMJyD4v60iMMj0",
  "file_size": 92058,
  "put_time": "2018-07-18T23:31:54.4001017+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}];
var qiniuyun_cdn_1 = [{
  "key": "image/life/IMG_20171202_192919.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/IMG_20171202_192919.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/IMG_20171202_192919.jpg",
  "hash": "FhPu8UPp4KPnilpl-6wmQi2GRxDM",
  "file_size": 64925,
  "put_time": "2018-07-18T23:30:38.4593058+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/microMsg.1474901029140.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/microMsg.1474901029140.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/microMsg.1474901029140.jpg",
  "hash": "FjSdfhVsPKLSFQj0cq72VGCx0NQF",
  "file_size": 127384,
  "put_time": "2018-07-18T23:30:38.6894347+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/life/mmexport1509537704037.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/life/mmexport1509537704037.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/life/mmexport1509537704037.jpg",
  "hash": "FiAX7k8OplBULJELlGYjKkJm2H_E",
  "file_size": 80196,
  "put_time": "2018-07-18T23:30:38.662604+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/1514617969516.jpeg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/1514617969516.jpeg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/1514617969516.jpeg",
  "hash": "Fmxj0CgUqFAH-YwfLagU_WoOckvx",
  "file_size": 83580,
  "put_time": "2018-07-18T23:31:53.476572+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20141203_132920.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20141203_132920.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20141203_132920.jpg",
  "hash": "Fp9T4osA9rt3NCalOnu2O0tA9-ac",
  "file_size": 113065,
  "put_time": "2018-07-18T23:31:53.6164629+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20150420_121553.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20150420_121553.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20150420_121553.jpg",
  "hash": "Fjj63aNJC4JnhHqzA0_PQJQkwzKn",
  "file_size": 120122,
  "put_time": "2018-07-18T23:31:53.6184989+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20151023_210233.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20151023_210233.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20151023_210233.jpg",
  "hash": "FrFF4e5ZwpD6og62cWN5xfnzQ9Q8",
  "file_size": 96823,
  "put_time": "2018-07-18T23:31:53.6379263+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160326_174534.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160326_174534.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160326_174534.jpg",
  "hash": "FgV841FTnJQnnMO8qUHMmIx-FC6D",
  "file_size": 117916,
  "put_time": "2018-07-18T23:31:53.7115469+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160402_153331.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160402_153331.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160402_153331.jpg",
  "hash": "FlPaeqkP1y9QNX34U-1J8h7LQeMS",
  "file_size": 128280,
  "put_time": "2018-07-18T23:31:54.3145925+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160408_224056.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160408_224056.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160408_224056.jpg",
  "hash": "Fngkh4qVvkGOeXKY6YIzzHqt0j_9",
  "file_size": 112217,
  "put_time": "2018-07-18T23:31:54.3041609+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160415_214209.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160415_214209.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160415_214209.jpg",
  "hash": "FhUqsoKqQYQF3H6rECiivMJbMXF5",
  "file_size": 109290,
  "put_time": "2018-07-18T23:31:54.53947+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160422_213203.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160422_213203.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160422_213203.jpg",
  "hash": "Fj9DhNUvi6xaRZ7vjIuW5u7uhNei",
  "file_size": 109006,
  "put_time": "2018-07-18T23:31:54.4295996+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160517_152851.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160517_152851.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160517_152851.jpg",
  "hash": "FipvdE3VYlmXapcMJyD4v60iMMj0",
  "file_size": 92058,
  "put_time": "2018-07-18T23:31:54.4001017+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160604_143931.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160604_143931.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160604_143931.jpg",
  "hash": "FkmXJopB7AIdNcr9iNCN8mQ8IQCS",
  "file_size": 48479,
  "put_time": "2018-07-18T23:31:54.4103158+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160624_143253.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160624_143253.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160624_143253.jpg",
  "hash": "FujVMHVe7AbMm-2VkyVD9JdVHt04",
  "file_size": 96825,
  "put_time": "2018-07-18T23:31:54.5939513+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160628_182845.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160628_182845.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160628_182845.jpg",
  "hash": "Fuo0pinAun7dHz5gP-evqWRFWemw",
  "file_size": 101293,
  "put_time": "2018-07-18T23:31:54.5268208+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160719_131505.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160719_131505.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160719_131505.jpg",
  "hash": "FnnT23uLxWvUatpdzYgWcNTsBHM4",
  "file_size": 118425,
  "put_time": "2018-07-18T23:31:54.4793705+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160828_204410.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160828_204410.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160828_204410.jpg",
  "hash": "FhRKfc7sidwV3VBxwkadoNG5RCLf",
  "file_size": 99754,
  "put_time": "2018-07-18T23:31:54.3539696+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20160915_141424.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20160915_141424.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20160915_141424.jpg",
  "hash": "Fj5VTB8j42bjaTsD6GFbBN7wLZXm",
  "file_size": 51803,
  "put_time": "2018-07-18T23:31:54.4760898+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20161103_210243.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20161103_210243.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20161103_210243.jpg",
  "hash": "FkPBJ7o-DusNcGuVK2dSnunMdr_o",
  "file_size": 101815,
  "put_time": "2018-07-18T23:31:54.9401658+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20170603_120230.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20170603_120230.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20170603_120230.jpg",
  "hash": "FqjuND8hF2QOmYF0YL4peCdJpQZN",
  "file_size": 66144,
  "put_time": "2018-07-18T23:31:54.5545809+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20180615_141130.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20180615_141130.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20180615_141130.jpg",
  "hash": "FkrdtYSJ5VP7dKtdPKC_MWQQ4hWT",
  "file_size": 101256,
  "put_time": "2018-07-18T23:31:54.5439688+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/my/IMG_20180623_133205.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/my/IMG_20180623_133205.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/my/IMG_20180623_133205.jpg",
  "hash": "Fjo0G_6GtVex2YnCVaCKgO5w4uT5",
  "file_size": 139359,
  "put_time": "2018-07-18T23:31:54.4862851+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20140405_125938.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140405_125938.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140405_125938.jpg",
  "hash": "FiGJYXENLUunzvyyc4D4S01VYXJO",
  "file_size": 33654,
  "put_time": "2018-07-18T23:32:51.8542999+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20140614_051306.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140614_051306.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140614_051306.jpg",
  "hash": "Fj8DFG6aWKA2cf4JbM0cDQgRH5cx",
  "file_size": 141958,
  "put_time": "2018-07-18T23:32:51.9009313+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20140823_121708.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140823_121708.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140823_121708.jpg",
  "hash": "FhWA8YOWgrjuo9VLE47L7LrD6il5",
  "file_size": 47797,
  "put_time": "2018-07-18T23:32:51.9287773+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20140825_151347.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140825_151347.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20140825_151347.jpg",
  "hash": "Fu-RGOS8nscXPDgdy8BRu_BGVaEb",
  "file_size": 35506,
  "put_time": "2018-07-18T23:32:51.7618389+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20150927_165432.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20150927_165432.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20150927_165432.jpg",
  "hash": "FlHXW4T8Roz6Uy89SW40rxrJyuib",
  "file_size": 142734,
  "put_time": "2018-07-18T23:32:53.8271622+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20150929_085948.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20150929_085948.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20150929_085948.jpg",
  "hash": "FvVPhur8N1Yom_RAo4NRZq4ATSCh",
  "file_size": 169444,
  "put_time": "2018-07-18T23:32:52.5247837+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151023_214440.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151023_214440.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151023_214440.jpg",
  "hash": "FnwFWoGcmNa3AzKqlrXoXSSeJBpz",
  "file_size": 113376,
  "put_time": "2018-07-18T23:32:53.2340101+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151024_105635.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151024_105635.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151024_105635.jpg",
  "hash": "FuLSkBQruljLQa7cXPIzwgj73j6P",
  "file_size": 106222,
  "put_time": "2018-07-18T23:32:53.9668713+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151024_110708.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151024_110708.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151024_110708.jpg",
  "hash": "Fmk3Njfx77bFjgTZC2SZe8HJP2p5",
  "file_size": 105094,
  "put_time": "2018-07-18T23:32:52.8091523+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151104_193902.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151104_193902.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151104_193902.jpg",
  "hash": "FqH10lQhfFJuwXkKpPb139vh0vio",
  "file_size": 63948,
  "put_time": "2018-07-18T23:32:52.5351649+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151104_193909.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151104_193909.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151104_193909.jpg",
  "hash": "Fmh1-6tZ-zDk2AcbASUuRhDH2z24",
  "file_size": 50954,
  "put_time": "2018-07-18T23:32:52.1354659+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151108_180006.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151108_180006.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151108_180006.jpg",
  "hash": "Fle09uzZYNmSL-KqVDZ2ioMBSfNH",
  "file_size": 101478,
  "put_time": "2018-07-18T23:32:54.1142811+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20151113_094235.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151113_094235.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20151113_094235.jpg",
  "hash": "FipAWwdRE0920En6CheQ8eFZ8DCN",
  "file_size": 168363,
  "put_time": "2018-07-18T23:32:52.6605937+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160306_132844.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160306_132844.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160306_132844.jpg",
  "hash": "FkmN4xGS7nlsIBExF3BYCA2mYDZZ",
  "file_size": 125822,
  "put_time": "2018-07-18T23:32:54.3813821+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160312_143232.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160312_143232.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160312_143232.jpg",
  "hash": "Fj-V_yRP-HA1AD4RJ0A3f8_rmzYR",
  "file_size": 133424,
  "put_time": "2018-07-18T23:32:52.9476019+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160331_100819.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_100819.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_100819.jpg",
  "hash": "FnWP7J5FSfSgJwH6Enjm6PRFswqc",
  "file_size": 67841,
  "put_time": "2018-07-18T23:32:54.2300192+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160331_101257.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_101257.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_101257.jpg",
  "hash": "Furx2ZkwdbtJXX-nBpcfYa5swPre",
  "file_size": 173628,
  "put_time": "2018-07-18T23:32:53.9894556+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160331_101350.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_101350.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_101350.jpg",
  "hash": "FqKxyfwIhbUT52Nvd57WvcU4ToHX",
  "file_size": 80864,
  "put_time": "2018-07-18T23:32:54.2409855+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160331_102528.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_102528.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_102528.jpg",
  "hash": "Fr1I98rvI3JY3glTZbgEgyFmcknz",
  "file_size": 92415,
  "put_time": "2018-07-18T23:32:53.3425257+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160331_103148.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_103148.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160331_103148.jpg",
  "hash": "Fj6UWJ__g7juOwBD9nYbzeoeyGOA",
  "file_size": 215111,
  "put_time": "2018-07-18T23:32:54.5528667+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160402_130705.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160402_130705.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160402_130705.jpg",
  "hash": "FueR-ESTW-cAbtKPvgYt9-owQJS_",
  "file_size": 75554,
  "put_time": "2018-07-18T23:32:54.2255354+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160510_142841.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160510_142841.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160510_142841.jpg",
  "hash": "FoXcOGs601YGm5_JWBDGINZOrbbp",
  "file_size": 194479,
  "put_time": "2018-07-18T23:32:54.4733317+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160609_050928.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_050928.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_050928.jpg",
  "hash": "FopN6v_nSpCVktoy1wO9feOkxwf6",
  "file_size": 145951,
  "put_time": "2018-07-18T23:32:53.9632507+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160609_053055_HDR.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_053055_HDR.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_053055_HDR.jpg",
  "hash": "Ftu301-StbqOWiKnlNrhUrij-Ubq",
  "file_size": 42417,
  "put_time": "2018-07-18T23:32:52.9667448+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160609_095013_HDR.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_095013_HDR.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160609_095013_HDR.jpg",
  "hash": "Fg_ve7UttQ_LAD3D6uO4l3FbQ7Lm",
  "file_size": 134839,
  "put_time": "2018-07-18T23:32:54.2370404+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20160904_140930.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160904_140930.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20160904_140930.jpg",
  "hash": "Fpze2dzUatQgef8oMmHOT_0uCQxr",
  "file_size": 43400,
  "put_time": "2018-07-18T23:32:53.7128461+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20161002_105723.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161002_105723.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161002_105723.jpg",
  "hash": "FhGgGKNpDhbvLqECngB5ot1PMAFc",
  "file_size": 191796,
  "put_time": "2018-07-18T23:32:54.5058155+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}];
var qiniuyun_cdn_2 = [{
  "key": "image/scenery/IMG_20161103_210116.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161103_210116.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161103_210116.jpg",
  "hash": "FhlDQbn_qkv74bZHsgWD0mhZsF0Q",
  "file_size": 47628,
  "put_time": "2018-07-18T23:32:53.3739078+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20161119_151526.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_151526.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_151526.jpg",
  "hash": "FmPNx8AmtqzOQaqpW6gxGC_PIxv3",
  "file_size": 177387,
  "put_time": "2018-07-18T23:32:54.5200077+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20161119_155923.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_155923.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_155923.jpg",
  "hash": "FrKAgaw5fbf_Ruu4Oa_KMd5kmJoZ",
  "file_size": 107592,
  "put_time": "2018-07-18T23:32:54.1915289+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20161119_161421.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_161421.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20161119_161421.jpg",
  "hash": "FtaQLX02RxH181ezedSryvw06v99",
  "file_size": 77252,
  "put_time": "2018-07-18T23:32:54.2334247+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20170307_202645_HHT.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170307_202645_HHT.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170307_202645_HHT.jpg",
  "hash": "FgYAxnPCpba02ctuVuq3PD7S_qaz",
  "file_size": 121221,
  "put_time": "2018-07-18T23:32:54.4736996+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20170529_193651.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170529_193651.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170529_193651.jpg",
  "hash": "FrAjzQDR-BAVM7i2K_tabZB8FD70",
  "file_size": 51567,
  "put_time": "2018-07-18T23:32:53.5129363+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20170819_200458.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170819_200458.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20170819_200458.jpg",
  "hash": "FvFG9IqEWpkd24np7noHncyXu95W",
  "file_size": 136332,
  "put_time": "2018-07-18T23:32:54.3291033+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180210_142905.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180210_142905.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180210_142905.jpg",
  "hash": "Fk93PapgiwIeWOXgT-C06bpHZGwu",
  "file_size": 42601,
  "put_time": "2018-07-18T23:32:52.710176+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180527_152232.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180527_152232.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180527_152232.jpg",
  "hash": "FmJpN1M10Z_aFcz2GNA1IyNacm11",
  "file_size": 43279,
  "put_time": "2018-07-18T23:32:53.8575599+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180527_153601.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180527_153601.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180527_153601.jpg",
  "hash": "FoGLhTJzs6_xqvm3VLWp4AFjDNj-",
  "file_size": 41220,
  "put_time": "2018-07-18T23:32:53.7159173+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180615_202832.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180615_202832.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180615_202832.jpg",
  "hash": "Fu6sg2zFciB7HxOUnt23v6JyN-To",
  "file_size": 87403,
  "put_time": "2018-07-18T23:32:54.2469598+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180616_185147.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_185147.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_185147.jpg",
  "hash": "FkSnNMN65HL4644xbnTQn0_dzbha",
  "file_size": 81305,
  "put_time": "2018-07-18T23:32:54.3013436+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180616_200906.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_200906.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_200906.jpg",
  "hash": "Fg061wGDYekgn1aRwhfmxYpp30v9",
  "file_size": 72036,
  "put_time": "2018-07-18T23:32:54.2103199+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/scenery/IMG_20180616_200919.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_200919.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/scenery/IMG_20180616_200919.jpg",
  "hash": "FqvuMRGrkcnryhwTK8WHG0lZXLuM",
  "file_size": 77196,
  "put_time": "2018-07-18T23:32:54.1807024+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}];
var qiniuyun_cdn_fight = [{
  "key": "image/fight/1514618529349.jpeg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/1514618529349.jpeg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/1514618529349.jpeg",
  "hash": "FiofZszfdcByFZVHij9ieYD0KdB0",
  "file_size": 101929,
  "put_time": "2018-07-28T11:08:22.0470059+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20140327_070157.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140327_070157.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140327_070157.jpg",
  "hash": "FrsDJjneOJVvSzbqe6lFcjbHo-cO",
  "file_size": 109067,
  "put_time": "2018-07-28T11:08:21.7035899+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20140329_011105.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140329_011105.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140329_011105.jpg",
  "hash": "FiBV5_olWEUnPkKbG081N7j6lOG7",
  "file_size": 145339,
  "put_time": "2018-07-28T11:08:22.1914902+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20140422_203834.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140422_203834.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140422_203834.jpg",
  "hash": "Fgwh8FWdtScPo0GMk_HQ9Kee-aGd",
  "file_size": 164573,
  "put_time": "2018-07-28T11:08:23.1335862+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20140610_170936.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140610_170936.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140610_170936.jpg",
  "hash": "FjeOafUwpTxCXR4hSbXZRHiPPNjf",
  "file_size": 96425,
  "put_time": "2018-07-28T11:08:23.2502808+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20140801_094145.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140801_094145.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20140801_094145.jpg",
  "hash": "FubjHIl1po9Z0Nh4cpkcQj_RMc8z",
  "file_size": 164325,
  "put_time": "2018-07-28T11:08:23.3621684+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20150302_080431.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150302_080431.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150302_080431.jpg",
  "hash": "FoQ4QW4gAlcBoubbWPoGLRz4aFHD",
  "file_size": 97155,
  "put_time": "2018-07-28T11:08:23.5778767+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20150305_162845.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150305_162845.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150305_162845.jpg",
  "hash": "Ftg035tR1kxTeRIeComsBKYcsa9z",
  "file_size": 95857,
  "put_time": "2018-07-28T11:08:23.5125743+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20150306_180108.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150306_180108.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150306_180108.jpg",
  "hash": "FpdOdtcP3B7o-RTlMMSYKOqnL-Tp",
  "file_size": 131817,
  "put_time": "2018-07-28T11:08:23.4192194+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20150626_100216.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150626_100216.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150626_100216.jpg",
  "hash": "FmtvGQtKgTKUH3-e1A9P-ksNzmKA",
  "file_size": 117396,
  "put_time": "2018-07-28T11:08:23.3285289+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20150710_184258.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150710_184258.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20150710_184258.jpg",
  "hash": "Fr8uyIh_LIo38IqBh5ZrhVRlSeB-",
  "file_size": 124647,
  "put_time": "2018-07-28T11:08:23.708504+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160120_203926.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160120_203926.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160120_203926.jpg",
  "hash": "Fi41rpQE_F6Wcxwb4K8mYa0PwV1I",
  "file_size": 115934,
  "put_time": "2018-07-28T11:08:23.6698231+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160312_144208.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160312_144208.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160312_144208.jpg",
  "hash": "FnuY_r4sITwBukTwM15fCxpWnWBu",
  "file_size": 142931,
  "put_time": "2018-07-28T11:08:23.7481316+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160329_162023.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160329_162023.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160329_162023.jpg",
  "hash": "Fk22HchC2S9JvmmWziKbOmaEOC3Y",
  "file_size": 134137,
  "put_time": "2018-07-28T11:08:23.7315969+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160331_103546.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160331_103546.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160331_103546.jpg",
  "hash": "FkyuLWjdqJmhSFd_fl8Zc4jKTjmc",
  "file_size": 119490,
  "put_time": "2018-07-28T11:08:23.3329468+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160403_122006.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_122006.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_122006.jpg",
  "hash": "FvBDYUHKf3VwfRJjPOgBzDLCNDjh",
  "file_size": 122821,
  "put_time": "2018-07-28T11:08:23.6991808+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160403_122037.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_122037.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_122037.jpg",
  "hash": "FiMpw_Tbi0RL5epVFY2sP_4azwTN",
  "file_size": 138895,
  "put_time": "2018-07-28T11:08:23.8486868+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160403_123130.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_123130.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_123130.jpg",
  "hash": "FkAuG-UMZFAFoI32iBecbagj79v5",
  "file_size": 113071,
  "put_time": "2018-07-28T11:08:23.7227195+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160403_123158.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_123158.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160403_123158.jpg",
  "hash": "Fgtzv-lBP_GGUlBnKp6tKU5jmfvc",
  "file_size": 185769,
  "put_time": "2018-07-28T11:08:23.7268906+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160412_175813.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160412_175813.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160412_175813.jpg",
  "hash": "FnsvZ8Y-1rlAauHNInqhYbWYvCCl",
  "file_size": 124080,
  "put_time": "2018-07-28T11:08:23.7108515+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160502_035732.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160502_035732.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160502_035732.jpg",
  "hash": "FuqDCdT9-zxhEGQ0RwWLSONzm5Vz",
  "file_size": 170248,
  "put_time": "2018-07-28T11:08:23.8269977+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160510_143430.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160510_143430.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160510_143430.jpg",
  "hash": "Fm9GWbmyiHLGN1jAI43iuGK3ziYf",
  "file_size": 105652,
  "put_time": "2018-07-28T11:08:23.7980135+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160512_173910.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_173910.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_173910.jpg",
  "hash": "FqlFlkeIVilG7rLSeHdTKogbeMPm",
  "file_size": 115107,
  "put_time": "2018-07-28T11:08:23.7116537+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160512_185455.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_185455.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_185455.jpg",
  "hash": "FrC-5_J5JO4pJG2slU7zHb40-FW6",
  "file_size": 144907,
  "put_time": "2018-07-28T11:08:23.892561+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160512_211847.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_211847.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160512_211847.jpg",
  "hash": "FlElXM0FqvRQAOSW7XgwzvL4pGxt",
  "file_size": 73477,
  "put_time": "2018-07-28T11:08:23.6455551+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20160909_114656.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160909_114656.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20160909_114656.jpg",
  "hash": "FnIuqjLiCV22JbpLGDaUn0Kf4H-f",
  "file_size": 64816,
  "put_time": "2018-07-28T11:08:23.2821739+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}, {
  "key": "image/fight/IMG_20170604_205917.jpg",
  "dl_url": "http://images.static.liuweibo.cn/image/fight/IMG_20170604_205917.jpg?attname=",
  "dl_remove_attname_url": "http://images.static.liuweibo.cn/image/fight/IMG_20170604_205917.jpg",
  "hash": "Fs0B9zZTEzSexN10q5fzA2UitEYq",
  "file_size": 37306,
  "put_time": "2018-07-28T11:08:23.1835094+08:00",
  "mime_type": "image/jpeg",
  "end_user": "",
  "ftype": 0
}];
var qiniuyun_cdn_icon = {
  "angular": "http://images.static.liuweibo.cn/image/icon/angular.jpg",
  "css": "http://images.static.liuweibo.cn/image/icon/css.jpg",
  "fight": "http://images.static.liuweibo.cn/image/icon/fight.jpg",
  "h5": "http://images.static.liuweibo.cn/image/icon/h5.jpg",
  "interesting": "http://images.static.liuweibo.cn/image/icon/interesting.jpg",
  "js": "http://images.static.liuweibo.cn/image/icon/js.jpg",
  "mysql": "http://images.static.liuweibo.cn/image/icon/mysql.jpg",
  "node": "http://images.static.liuweibo.cn/image/icon/node.png",
  "others": "http://images.static.liuweibo.cn/image/icon/others.jpg",
  "php": "http://images.static.liuweibo.cn/image/icon/php.jpg",
  "react": "http://images.static.liuweibo.cn/image/icon/react.jpg",
  "server": "http://images.static.liuweibo.cn/image/icon/server.jpg",
  "vue": "http://images.static.liuweibo.cn/image/icon/vue.jpg"
};
var qiniuyun_cdn_icon_i = {
  'i': 'http://images.static.liuweibo.cn/image/i/IMG_20160604_143931.jpg' //去重后的所有图片

};
var qiniuyun_cdn_all = Object(_until__WEBPACK_IMPORTED_MODULE_0__[/* removeSameArray */ "n"])([].concat(qiniuyun_cdn, qiniuyun_cdn_1, qiniuyun_cdn_2, qiniuyun_cdn_fight), 'dl_remove_attname_url');
var qiniuyun_cdn_all_type = {
  lifeImages: qiniuyun_cdn_all.filter(function (v) {
    return _until__WEBPACK_IMPORTED_MODULE_0__[/* reg_rule */ "m"]['life'].test(v.key);
  }),
  fightImages: qiniuyun_cdn_all.filter(function (v) {
    return _until__WEBPACK_IMPORTED_MODULE_0__[/* reg_rule */ "m"]['fight'].test(v.key);
  }),
  myImages: qiniuyun_cdn_all.filter(function (v) {
    return _until__WEBPACK_IMPORTED_MODULE_0__[/* reg_rule */ "m"]['my'].test(v.key);
  }),
  sceneryImages: qiniuyun_cdn_all.filter(function (v) {
    return _until__WEBPACK_IMPORTED_MODULE_0__[/* reg_rule */ "m"]['scenery'].test(v.key);
  })
};

/***/ }),
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
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilMaxWidthOrHeight", function() { return untilMaxWidthOrHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickCopyCode", function() { return clickCopyCode; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 设置图片宽高 最大宽或者高 为300px
 * @param len
 */
function untilMaxWidthOrHeight() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var imgList = document.querySelectorAll('.detail img');

  for (var i = 0; i < imgList.length; i++) {
    if (imgList[i].width > imgList[i].height) {
      imgList[i].style.height = len + 'px';
      imgList[i].style.width = 'auto';
    } else {
      imgList[i].style.width = len + 'px';
      imgList[i].style.height = 'auto';
    }
  }
}
/**
 * 点击复制代码到剪贴板
 */

function clickCopyCode() {
  var btn = document.createElement('button');
  btn.className = 'copy-code';
  btn.title = '点击复制代码';
  btn.innerText = '';
  var preList = document.getElementsByTagName('pre');

  for (var i = 0; i < preList.length; i++) {
    var codeDom = preList[i];
    codeDom.appendChild(btn.cloneNode(true));
    codeDom.addEventListener('click', f1, false);
  }
}

function f1(e) {
  if (e.target.className === 'copy-code') {
    var emailLink = e.target.parentNode.firstElementChild; // 文字

    var range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';

      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success('Copy code ' + msg);
    } catch (err) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Oops, unable to copy');
    } // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported


    window.getSelection().removeAllRanges();
  }
}

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(27);
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(11);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./config/constantTag.js
var constantTag = __webpack_require__(22);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__(40);
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(21);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(28);
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(8);

// EXTERNAL MODULE: ./config/qiniuyun_cdn.js
var qiniuyun_cdn = __webpack_require__(31);

// EXTERNAL MODULE: ./components/MyCard/index.less
var components_MyCard = __webpack_require__(61);

// EXTERNAL MODULE: ./config/markdown.js
var markdown = __webpack_require__(29);

// CONCATENATED MODULE: ./components/MyCard/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var options = markdown["a" /* markdownConfig */].options,
    config = markdown["a" /* markdownConfig */].config;
external_highlight_js_default.a.configure(config);
external_marked_default.a.setOptions(_objectSpread({
  highlight: function highlight(code) {
    return external_highlight_js_default.a.highlightAuto(code).value;
  }
}, options));

var MyCard_MyCard =
/*#__PURE__*/
function (_Component) {
  _inherits(MyCard, _Component);

  function MyCard(props) {
    var _this;

    _classCallCheck(this, MyCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyCard).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(MyCard, [{
    key: "onFormActive",
    value: function onFormActive(index, answerId) {
      var dispatch = this.props.dispatch;
      Object(actions["v" /* setCommentIndex */])(dispatch, index);
      Object(actions["u" /* setAnswerId */])(dispatch, answerId);
    }
  }, {
    key: "getUserReactDom",
    value: function getUserReactDom(v) {
      return v.website && until["l" /* regUrl */].test(v.website) ? external_react_default.a.createElement(link_default.a, {
        href: v.website
      }, external_react_default.a.createElement("a", {
        className: "link-comment-user",
        style: {
          color: '#017E66',
          fontWeight: 'bold'
        }
      }, v.user || v.name)) : external_react_default.a.createElement("span", {
        style: {
          color: '#000',
          fontWeight: 'bold'
        }
      }, v.user || v.name);
    }
  }, {
    key: "isAuth",
    value: function isAuth(v) {
      return (v.user || v.name) === '刘伟波' ? external_react_default.a.createElement("span", {
        style: {
          marginLeft: 5,
          marginRight: 10
        },
        className: "author-comment"
      }, "\u4F5C\u8005") : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? {} : _this$props$dataSourc,
          _this$props$children = _this$props.children,
          children = _this$props$children === void 0 ? {} : _this$props$children,
          _this$props$commentIn = _this$props.commentIndex,
          commentIndex = _this$props$commentIn === void 0 ? -1 : _this$props$commentIn;
      var index = dataSource.index,
          v = dataSource.v,
          i = dataSource.i;
      var markHtml = external_marked_default()(Object(until["g" /* getHtml */])(v.msg, v.createTime));
      return external_react_default.a.createElement(card_default.a, {
        className: "css-move-top",
        bodyStyle: {
          background: "#f8f8f8"
        },
        key: i,
        title: external_react_default.a.createElement("span", null, this.getUserReactDom(v), this.isAuth(v), "\u8BF4\u9053\uFF1A"),
        extra: external_react_default.a.createElement("a", {
          href: "javascript:;"
        }, Object(until["e" /* formatTime */])(v.createTime))
      }, external_react_default.a.createElement("div", {
        style: {
          position: 'relative'
        }
      }, external_react_default.a.createElement("div", {
        className: "msg-p"
      }, external_react_default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: markHtml
        }
      })), external_react_default.a.createElement("div", {
        className: "icon-comment"
      }, external_react_default.a.createElement("div", {
        className: "icon-posi"
      }, external_react_default.a.createElement("img", {
        src: (v.user || v.name) === '刘伟波' ? qiniuyun_cdn["d" /* qiniuyun_cdn_icon_i */].i : constantsData["k" /* COMMENT_IMAGES */][index],
        alt: ""
      }))), v.id !== -1 ? external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
        onClick: this.onFormActive.bind(this, i, v.id),
        href: "javascript:;"
      }, "\u56DE\u590D")) : ''), external_react_default.a.createElement("div", {
        className: "form-active"
      }, v.answerArr ? external_react_default.a.createElement("ul", {
        className: "answer-wrapper-ul"
      }, v.answerArr.map(function (s, k) {
        return external_react_default.a.createElement("li", {
          key: k
        }, external_react_default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: external_marked_default()(Object(until["g" /* getHtml */])(s.msg))
          }
        }), "\u2014 ", _this2.getUserReactDom(s), _this2.isAuth(s), external_react_default.a.createElement("span", {
          className: "time"
        }, Object(until["e" /* formatTime */])(s.createTime)));
      })) : '', commentIndex === i ? children : ''));
    }
  }]);

  return MyCard;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var commentIndex = state.commentIndex;
  return {
    commentIndex: commentIndex
  };
};

/* harmony default export */ var components_MyCard_0 = (Object(external_react_redux_["connect"])(mapStateToProps)(MyCard_MyCard));
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(20);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(15);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(14);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/alert"
var alert_ = __webpack_require__(46);
var alert_default = /*#__PURE__*/__webpack_require__.n(alert_);

// EXTERNAL MODULE: external "antd/lib/tag"
var tag_ = __webpack_require__(48);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(6);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "antd/lib/auto-complete"
var auto_complete_ = __webpack_require__(42);
var auto_complete_default = /*#__PURE__*/__webpack_require__.n(auto_complete_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(16);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: ./config/index.js + 1 modules
var config_0 = __webpack_require__(7);

// CONCATENATED MODULE: ./components/FormComment/constants.js
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    },
    lg: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    },
    lg: {
      span: 16
    }
  }
};
var tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 24,
      offset: 0
    },
    lg: {
      span: 16,
      offset: 8
    }
  }
};
var tailCommentsTip = {
  xs: {
    span: 24,
    offset: 0
  },
  sm: {
    span: 24,
    offset: 0
  },
  lg: {
    span: 16,
    offset: 8
  }
};
// CONCATENATED MODULE: ./components/FormComment/index.js













function FormComment_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FormComment_typeof = function _typeof(obj) { return typeof obj; }; } else { FormComment_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FormComment_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function FormComment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { FormComment_defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function FormComment_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormComment_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormComment_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormComment_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormComment_defineProperties(Constructor, staticProps); return Constructor; }

function FormComment_possibleConstructorReturn(self, call) { if (call && (FormComment_typeof(call) === "object" || typeof call === "function")) { return call; } return FormComment_assertThisInitialized(self); }

function FormComment_getPrototypeOf(o) { FormComment_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return FormComment_getPrototypeOf(o); }

function FormComment_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) FormComment_setPrototypeOf(subClass, superClass); }

function FormComment_setPrototypeOf(o, p) { FormComment_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return FormComment_setPrototypeOf(o, p); }

function FormComment_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FormComment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var FormItem = form_default.a.Item;
var TextArea = input_default.a.TextArea;
var AutoCompleteOption = auto_complete_default.a.Option;

var FormComment_FormComment =
/*#__PURE__*/
function (_Component) {
  FormComment_inherits(FormComment, _Component);

  function FormComment(props) {
    var _this;

    FormComment_classCallCheck(this, FormComment);

    _this = FormComment_possibleConstructorReturn(this, FormComment_getPrototypeOf(FormComment).call(this, props));

    FormComment_defineProperty(FormComment_assertThisInitialized(FormComment_assertThisInitialized(_this)), "handleWebsiteChange", function (value) {
      var autoCompleteResult;

      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.cn', '.org', '.net'].map(function (domain) {
          return "".concat(value).concat(domain);
        });
      }

      _this.setState({
        autoCompleteResult: autoCompleteResult
      });
    });

    FormComment_defineProperty(FormComment_assertThisInitialized(FormComment_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? {} : _this$props$dataSourc,
          answerId = _this$props.answerId;
      var _sessionStorage = sessionStorage,
          password = _sessionStorage.password;
      var _dataSource$commentsD = dataSource.commentsData,
          commentsDataOrigin = _dataSource$commentsD === void 0 ? [] : _dataSource$commentsD,
          id = dataSource.articleID,
          _dataSource$isUserSub = dataSource.isUserSubmit,
          isUserSubmit = _dataSource$isUserSub === void 0 ? false : _dataSource$isUserSub;

      if (!id && !isUserSubmit) {
        return;
      }

      _this.props.form.validateFieldsAndScroll(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regenerator_default.a.mark(function _callee(err, values) {
          var _values$comment, comment, _values$email, email, _values$nickname, nickname, _values$website, website, realIp, queryParamsObj, isExist, queryStringComment;

          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (err) {
                    _context.next = 30;
                    break;
                  }

                  _values$comment = values.comment, comment = _values$comment === void 0 ? '' : _values$comment, _values$email = values.email, email = _values$email === void 0 ? '' : _values$email, _values$nickname = values.nickname, nickname = _values$nickname === void 0 ? '' : _values$nickname, _values$website = values.website, website = _values$website === void 0 ? '' : _values$website;

                  if (!(website !== '' && !until["l" /* regUrl */].test(website))) {
                    _context.next = 5;
                    break;
                  }

                  message_default.a.warning('url不正确,示例："http://www.xxx.com"');

                  return _context.abrupt("return");

                case 5:
                  if (!(nickname.length < 2 || comment.length < 2)) {
                    _context.next = 8;
                    break;
                  }

                  message_default.a.warning('用户名或者评论内容过少');

                  return _context.abrupt("return");

                case 8:
                  if (!(comment.length > constantsData["l" /* COMMENT_LIMIT */].value)) {
                    _context.next = 11;
                    break;
                  }

                  message_default.a.warning(constantsData["l" /* COMMENT_LIMIT */].key);

                  return _context.abrupt("return");

                case 11:
                  realIp = '';
                  _context.prev = 12;
                  _context.next = 15;
                  return Object(until["k" /* real_ip */])();

                case 15:
                  realIp = _context.sent;
                  _context.next = 20;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](12);

                case 20:
                  queryParamsObj = {};

                  try {
                    queryParamsObj = {
                      real_ip: realIp,
                      ip: returnCitySN['cip'],
                      address: returnCitySN['cname']
                    };
                  } catch (err) {}

                  isExist = commentsDataOrigin.findIndex(function (v) {
                    var user = v.user,
                        name = v.name;
                    return (user || name) === nickname && (user || name) !== '刘伟波';
                  }) !== -1;

                  if (!(isExist && !answerId)) {
                    _context.next = 26;
                    break;
                  }

                  message_default.a.warning('用户名已存在');

                  return _context.abrupt("return");

                case 26:
                  queryStringComment = FormComment_objectSpread({
                    id: id,
                    comment: comment.trim(),
                    email: email.trim(),
                    nickname: nickname.trim(),
                    website: website.trim(),
                    name: nickname.trim(),
                    token: password,
                    answerId: answerId
                  }, queryParamsObj); //如果是详情页提交它，如果是关于我，则不用关心id

                  isUserSubmit ? Object(actions["t" /* postUserComments */])(dispatch, Object(config_0["s" /* postUserCommentUrl */])(), queryStringComment).then(function (res) {
                    var getUserCommentsData = res.getUserCommentsData;

                    if (getUserCommentsData.length) {
                      message_default.a.success("\u7559\u8A00\u53D1\u8868\u6210\u529F\uFF0C\u611F\u8C22\u652F\u6301\uFF01");
                    } else {
                      message_default.a.warning('您可能没权限');
                    }
                  }) : Object(actions["r" /* postComments */])(dispatch, Object(config_0["q" /* postCommentUrl */])(), queryStringComment).then(function (res) {
                    if (res.getCommentsData.length) {
                      message_default.a.success("\u8BC4\u8BBA\u53D1\u8868\u6210\u529F\uFF0C\u611F\u8C22\u652F\u6301\uFF01");
                    } else {
                      message_default.a.warning('您可能没权限');
                    }
                  });
                  Object(actions["v" /* setCommentIndex */])(dispatch, -1);
                  Object(actions["u" /* setAnswerId */])(dispatch, '');

                case 30:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[12, 18]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    });

    _this.state = {
      autoCompleteResult: []
    };
    return _this;
  }

  FormComment_createClass(FormComment, [{
    key: "render",
    value: function render() {
      var _this$props$dataSourc2 = this.props.dataSource,
          dataSource = _this$props$dataSourc2 === void 0 ? {} : _this$props$dataSourc2;
      var _dataSource$commentBt = dataSource.commentBtnMsg,
          commentBtnMsg = _dataSource$commentBt === void 0 ? '提交评论' : _dataSource$commentBt;
      var autoCompleteResult = this.state.autoCompleteResult;
      var websiteOptions = autoCompleteResult.map(function (website) {
        return external_react_default.a.createElement(AutoCompleteOption, {
          key: website
        }, website);
      });
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var sf = constantTag["a" /* DEFAULT_TAG_ARR */].find(function (v) {
        return v.user === 'segmentfault';
      });
      var user = sf.user,
          website = sf.website;
      var tipsRender = external_react_default.a.createElement("span", null, Object(constantsData["m" /* COMMENT_TIPS */])(external_react_default.a.createElement(tag_default.a, {
        color: "#017e66"
      }, external_react_default.a.createElement("a", {
        href: website,
        title: user
      }, user))));
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, tailCommentsTip, external_react_default.a.createElement(alert_default.a, {
        message: tipsRender,
        type: "info",
        showIcon: true
      }))), external_react_default.a.createElement(form_default.a, {
        onSubmit: this.handleSubmit
      }, external_react_default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: external_react_default.a.createElement("span", null, "Nickname\xA0", external_react_default.a.createElement(tooltip_default.a, {
          title: "What do you want others to call you?"
        }, external_react_default.a.createElement(icon_default.a, {
          type: "question-circle-o"
        })))
      }), getFieldDecorator('nickname', {
        rules: [{
          required: true,
          message: 'Please input your nickname!',
          whitespace: true
        }]
      })(external_react_default.a.createElement(input_default.a, {
        title: "\u7528\u6237\u540D",
        placeholder: "\u7528\u6237\u540D"
      }))), external_react_default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "E-mail"
      }), getFieldDecorator('email', {
        rules: [{
          type: 'email',
          message: 'The input is not valid E-mail!'
        }, {
          required: false,
          message: 'Please input your E-mail!'
        }]
      })(external_react_default.a.createElement(input_default.a, {
        title: "\u4E0D\u4F1A\u88AB\u516C\u5F00",
        placeholder: "\u4E0D\u4F1A\u88AB\u516C\u5F00"
      }))), external_react_default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "Website"
      }), getFieldDecorator('website', {
        rules: [{
          required: false,
          message: 'Please input website!'
        }]
      })(external_react_default.a.createElement(auto_complete_default.a, {
        dataSource: websiteOptions,
        onChange: this.handleWebsiteChange,
        placeholder: "SEO\u63A8\u5E7F \u793A\u4F8B\uFF1A\"http://xxx.com\""
      }, external_react_default.a.createElement(input_default.a, {
        title: "SEO\u63A8\u5E7F \u793A\u4F8B\uFF1A\"http://xxx.com\""
      })))), external_react_default.a.createElement(FormItem, _extends({}, formItemLayout, {
        label: "comment"
      }), getFieldDecorator('comment', {
        rules: [{
          required: true,
          message: 'Please input your comment!'
        }]
      })(external_react_default.a.createElement(TextArea, {
        rows: 6,
        title: constantsData["P" /* commentPlaceHolder */],
        placeholder: constantsData["P" /* commentPlaceHolder */]
      }))), external_react_default.a.createElement(FormItem, tailFormItemLayout, external_react_default.a.createElement(button_default.a, {
        type: "primary",
        htmlType: "submit"
      }, commentBtnMsg))));
    }
  }]);

  return FormComment;
}(external_react_["Component"]);

var FormComment_mapStateToProps = function mapStateToProps(state) {
  var answerId = state.answerId;
  return {
    answerId: answerId
  };
};

var WrappedRegistrationForm = form_default.a.create()(FormComment_FormComment);

/* harmony default export */ var components_FormComment = (Object(external_react_redux_["connect"])(FormComment_mapStateToProps)(WrappedRegistrationForm));
// CONCATENATED MODULE: ./components/Comments/mockData.js
var mockCommentsData = [{
  "id": 52,
  "a_id": 205,
  "user": "测试 grade 0",
  "remark": "",
  "website": null,
  "msg": "测试 grade 0",
  "createTime": "1533272366",
  grade: 0
}, {
  "id": 53,
  "a_id": 205,
  "user": "测试 grade 1",
  "remark": "测试 grade 0",
  "website": null,
  "msg": "测试 grade 1",
  "createTime": '1533272368',
  grade: 1
}, {
  "id": 54,
  "a_id": 205,
  "user": "测试 grade 2",
  "remark": "测试 grade 0",
  "website": null,
  "msg": "测试 grade 2",
  "createTime": '1533272369',
  grade: 2
}, {
  "id": 55,
  "a_id": 205,
  "user": "测试1 grade 0",
  "remark": "",
  "website": null,
  "msg": "测试1 grade 0",
  "createTime": '1533272379',
  grade: 0
}];
var resultMockCommentsData = {
  0: [{
    "id": 52,
    "a_id": 205,
    "user": "测试 grade 0",
    "remark": "",
    "website": null,
    "msg": "测试 grade 0",
    "createTime": "1533272366",
    grade: 0
  }, {
    "id": 54,
    "a_id": 205,
    "user": "测试1 grade 0",
    "remark": "",
    "website": null,
    "msg": "测试1 grade 0",
    "createTime": '1533272379',
    grade: 0
  }]
};
// CONCATENATED MODULE: ./components/Comments/until.js
var getMyCommenData = function getMyCommenData(COMMENT_MOCK_DATA_ORIGIN) {
  var mapping = {
    answerId: []
  };
  var grande_one = COMMENT_MOCK_DATA_ORIGIN.filter(function (v) {
    var _v$answerId = v.answerId,
        answerId = _v$answerId === void 0 ? '' : _v$answerId;

    if (answerId) {
      mapping[answerId] = [];
    }

    return answerId === '' || answerId == null || answerId === 0;
  });
  COMMENT_MOCK_DATA_ORIGIN.forEach(function (v) {
    var _v$answerId2 = v.answerId,
        answerId = _v$answerId2 === void 0 ? '' : _v$answerId2;

    if (answerId in mapping) {
      mapping[answerId].push(v);
    }
  });
  return grande_one.map(function (v) {
    var id = v.id;

    if (id in mapping) {
      v.answerArr = mapping[id];
    }

    return v;
  });
};
// EXTERNAL MODULE: ./components/Comments/index.less
var components_Comments = __webpack_require__(62);

// CONCATENATED MODULE: ./components/Comments/index.js




function Comments_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Comments_typeof = function _typeof(obj) { return typeof obj; }; } else { Comments_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Comments_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Comments_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Comments_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Comments_createClass(Constructor, protoProps, staticProps) { if (protoProps) Comments_defineProperties(Constructor.prototype, protoProps); if (staticProps) Comments_defineProperties(Constructor, staticProps); return Constructor; }

function Comments_possibleConstructorReturn(self, call) { if (call && (Comments_typeof(call) === "object" || typeof call === "function")) { return call; } return Comments_assertThisInitialized(self); }

function Comments_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Comments_getPrototypeOf(o) { Comments_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Comments_getPrototypeOf(o); }

function Comments_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Comments_setPrototypeOf(subClass, superClass); }

function Comments_setPrototypeOf(o, p) { Comments_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Comments_setPrototypeOf(o, p); }











var Comments_Comments =
/*#__PURE__*/
function (_Component) {
  Comments_inherits(Comments, _Component);

  function Comments(props) {
    var _this;

    Comments_classCallCheck(this, Comments);

    _this = Comments_possibleConstructorReturn(this, Comments_getPrototypeOf(Comments).call(this, props));
    _this.state = {
      autoCompleteResult: [],
      articleID: ''
    };
    return _this;
  }

  Comments_createClass(Comments, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props$blogData = this.props.blogData,
          blogData = _this$props$blogData === void 0 ? [] : _this$props$blogData;

      var _ref = blogData[0] || {},
          articleID = _ref.id;

      this.setState({
        articleID: articleID
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? {} : _this$props$dataSourc,
          _this$props$commentIn = _this$props.commentIndex,
          commentIndex = _this$props$commentIn === void 0 ? -1 : _this$props$commentIn;
      var _dataSource$commentsD = dataSource.commentsData,
          commentsData = _dataSource$commentsD === void 0 ? [] : _dataSource$commentsD,
          _dataSource$commentTi = dataSource.commentTitle,
          commentTitle = _dataSource$commentTi === void 0 ? '发表评论' : _dataSource$commentTi,
          _dataSource$commentRo = dataSource.commentRow,
          commentRow = _dataSource$commentRo === void 0 ? 8 : _dataSource$commentRo;
      commentsData = [].concat(_toConsumableArray(constantTag["c" /* default_comment */]), _toConsumableArray(getMyCommenData(commentsData)));
      return external_react_default.a.createElement("div", {
        className: "comment-wrapper",
        id: "comment"
      }, external_react_default.a.createElement("h2", null, commentTitle, "\uFF1A"), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        sm: {
          span: 22,
          offset: 1
        },
        xs: {
          span: 22,
          offset: 1
        },
        lg: {
          span: 22,
          offset: 0
        }
      }, commentIndex === -1 ? external_react_default.a.createElement(components_FormComment, this.props) : '')), commentsData.map(function (v, i) {
        var index = i % constantsData["k" /* COMMENT_IMAGES */].length;
        return external_react_default.a.createElement(components_MyCard_0, {
          key: i,
          dataSource: {
            index: index,
            v: v,
            i: i
          }
        }, external_react_default.a.createElement(components_FormComment, _this2.props));
      }));
    }
  }]);

  return Comments;
}(external_react_["Component"]);

var Comments_mapStateToProps = function mapStateToProps(state) {
  var commentIndex = state.commentIndex;
  return {
    commentIndex: commentIndex
  };
};

var Comments_WrappedRegistrationForm = form_default.a.create()(Comments_Comments);

/* harmony default export */ var components_Comments_0 = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Comments_mapStateToProps)(Comments_WrappedRegistrationForm));

/***/ }),
/* 56 */,
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
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports) {



/***/ }),
/* 63 */
/***/ (function(module, exports) {



/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
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
/* 79 */
/***/ (function(module, exports) {

module.exports = require("viewerjs");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("markdown-navbar");

/***/ }),
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
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),
/* 107 */
/***/ (function(module, exports) {



/***/ }),
/* 108 */
/***/ (function(module, exports) {



/***/ }),
/* 109 */
/***/ (function(module, exports) {



/***/ }),
/* 110 */
/***/ (function(module, exports) {



/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__(27);
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(37);
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(11);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(15);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(20);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(14);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(13);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: external "viewerjs"
var external_viewerjs_ = __webpack_require__(79);
var external_viewerjs_default = /*#__PURE__*/__webpack_require__.n(external_viewerjs_);

// EXTERNAL MODULE: external "whatwg-fetch"
var external_whatwg_fetch_ = __webpack_require__(35);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(19);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(26);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(21);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(28);
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: external "markdown-navbar"
var external_markdown_navbar_ = __webpack_require__(80);
var external_markdown_navbar_default = /*#__PURE__*/__webpack_require__.n(external_markdown_navbar_);

// EXTERNAL MODULE: ./pages/detail/markdown-navbar.less
var markdown_navbar = __webpack_require__(107);

// EXTERNAL MODULE: ./components/ArticleTitle/index.js + 1 modules
var ArticleTitle = __webpack_require__(57);

// EXTERNAL MODULE: ./pages/detail/util.js
var util = __webpack_require__(53);

// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PrevNextPage/index.js




var PrevNextPage_PrevNextPage = function PrevNextPage(_ref) {
  var _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? {} : _ref$dataSource;
  var _dataSource$url = dataSource.url,
      url = _dataSource$url === void 0 ? '' : _dataSource$url,
      _dataSource$lastIdDat = dataSource.lastIdData,
      lastIdData = _dataSource$lastIdDat === void 0 ? [] : _dataSource$lastIdDat,
      _dataSource$nextIdDat = dataSource.nextIdData,
      nextIdData = _dataSource$nextIdDat === void 0 ? [] : _dataSource$nextIdDat;
  return external_react_default.a.createElement("div", null, url && until["l" /* regUrl */].test(url) && external_react_default.a.createElement(link_default.a, {
    href: url
  }, external_react_default.a.createElement("a", null, "\u53C2\u8003url\uFF1A", url)), lastIdData.map(function (v) {
    return external_react_default.a.createElement("div", {
      key: v.id
    }, external_react_default.a.createElement(link_default.a, {
      as: "/p/".concat(v.id),
      href: "/p?id=".concat(v.id)
    }, external_react_default.a.createElement("a", null, "\u4E0A\u4E00\u7BC7\uFF1A", v.title)));
  }), nextIdData.map(function (v) {
    return external_react_default.a.createElement("div", {
      key: v.id
    }, external_react_default.a.createElement(link_default.a, {
      as: "/p/".concat(v.id),
      href: "/p?id=".concat(v.id)
    }, external_react_default.a.createElement("a", null, "\u4E0B\u4E00\u7BC7\uFF1A", v.title)));
  }));
};

/* harmony default export */ var components_PrevNextPage = (PrevNextPage_PrevNextPage);
// EXTERNAL MODULE: ./components/Comments/index.js + 5 modules
var Comments = __webpack_require__(55);

// EXTERNAL MODULE: ./components/MyLayout/index.js
var MyLayout = __webpack_require__(25);

// EXTERNAL MODULE: ./config/index.js + 1 modules
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./config/markdown.js
var markdown = __webpack_require__(29);

// EXTERNAL MODULE: ./pages/detail/index.less
var detail = __webpack_require__(108);

// EXTERNAL MODULE: ./pages/detail/pop-tips.less
var pop_tips = __webpack_require__(109);

// EXTERNAL MODULE: ./pages/detail/viewer.min.less
var viewer_min = __webpack_require__(110);

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(8);

// EXTERNAL MODULE: ./pages/admin/req-action.js
var req_action = __webpack_require__(23);

// CONCATENATED MODULE: ./pages/detail/index.js










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 //组件





 //其他









 //定义

var Content = layout_default.a.Content;
var timer;
var options = markdown["a" /* markdownConfig */].options,
    detail_config = markdown["a" /* markdownConfig */].config;
external_highlight_js_default.a.configure(detail_config);
external_marked_default.a.setOptions(_objectSpread({
  highlight: function highlight(code) {
    return external_highlight_js_default.a.highlightAuto(code).value;
  }
}, options));

var detail_Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail(props) {
    var _this;

    _classCallCheck(this, Detail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Detail).call(this, props));
    _this.state = {
      articleID: '',
      articleLike: 0,
      fn: null,
      isShowEditIcon: false,
      topWidth: 0
    };
    return _this;
  }

  _createClass(Detail, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          _this$props$blogData = _this$props.blogData,
          blogData = _this$props$blogData === void 0 ? [] : _this$props$blogData,
          dispatch = _this$props.dispatch;

      var _ref = blogData[0] || {},
          _ref$type = _ref.type,
          type = _ref$type === void 0 ? '' : _ref$type;

      type = type.split(',').join('.');
      var queryTotalString = {
        type: 'hot|' + type
      };
      Object(actions["g" /* getHotRecommendList */])(dispatch, Object(config["c" /* getBlogUrl */])(queryTotalString));

      var _ref2 = blogData[0] || {},
          articleID = _ref2.id;

      this.setState({
        articleID: articleID
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var life = ['interesting', 'fight'];
      var _this$props$blogData2 = this.props.blogData,
          blogData = _this$props$blogData2 === void 0 ? [] : _this$props$blogData2;

      var _ref3 = blogData[0] || '',
          _ref3$type = _ref3.type,
          type = _ref3$type === void 0 ? '' : _ref3$type;

      if (life.indexOf(type) !== -1) {
        // 设置非生活图片图片宽高 最大宽或者高 为300px
        Object(util["untilMaxWidthOrHeight"])();
      }

      window.onscroll = Object(until["o" /* throttle */])(function () {
        _this2.getRateWidth();
      });
      window.onresize = Object(until["o" /* throttle */])(function () {
        _this2.getRateWidth();
      });
      var _sessionStorage = sessionStorage,
          password = _sessionStorage.password;
      var _Router$query = router_default.a.query,
          query = _Router$query === void 0 ? {} : _Router$query;
      var _query$id = query.id,
          id = _query$id === void 0 ? '' : _query$id;
      this.setState({
        isShowEditIcon: password ? id : ''
      });
      this.setImgErrorDefaultImage();
      Object(util["clickCopyCode"])();
      new external_viewerjs_default.a(document.getElementById('detail-article'), {
        toolbar: false,
        navbar: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.onscroll = null;
      window.onresize = null;
    }
    /**
     * 设置图片找不见加载错误的默认图片
     */

  }, {
    key: "setImgErrorDefaultImage",
    value: function setImgErrorDefaultImage() {
      var imgs = document.getElementsByTagName('img');
      var defaultImages = ['http://images.static.liuweibo.cn/image/scenery/IMG_20160331_101350.jpg', 'http://images.static.liuweibo.cn/image/scenery/IMG_20180527_152232.jpg', 'http://images.static.liuweibo.cn/image/scenery/IMG_20151104_193902.jpg'];

      for (var i = 0; i < imgs.length; i++) {
        imgs[i].onerror = function (e) {
          this.src = defaultImages[Math.random() * defaultImages.length | 0];
        };
      }
    }
  }, {
    key: "getRateWidth",
    value: function getRateWidth() {
      var scrollHeight = document.body.scrollHeight;
      var _window = window,
          innerHeight = _window.innerHeight,
          innerWidth = _window.innerWidth;
      var _window2 = window,
          scrollY = _window2.scrollY; //这里的rate会大于1，原因是toptips组件ssr为false,导致高度有错误

      var rate = Math.min(scrollY / (scrollHeight - innerHeight), 1);
      var topWidth = rate * innerWidth;
      this.setState({
        topWidth: topWidth
      });
    }
  }, {
    key: "onAddZan",
    value: function onAddZan() {
      var _this3 = this;

      var articleID = this.state.articleID;
      var dispatch = this.props.dispatch;
      var queryStringObj = {
        id: articleID
      };

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        Object(actions["a" /* addZan */])(dispatch, Object(config["a" /* addZanUrl */])(queryStringObj)).then(function (res) {
          var _res$addZanData = res.addZanData,
              addZanData = _res$addZanData === void 0 ? [] : _res$addZanData;
          var _addZanData$0$like = addZanData[0].like,
              like = _addZanData$0$like === void 0 ? 0 : _addZanData$0$like;

          _this3.setState({
            articleLike: like
          });
        });
      }, 500);
    }
  }, {
    key: "getHtmlRender",
    value: function getHtmlRender(type, createTime, articleID, content, isShowReadingStatement, bool) {
      var decode_html;

      try {
        decode_html = decodeURIComponent(content);
      } catch (err) {
        decode_html = content;
      }

      var myBlog = 'http://www.liuweibo.cn/';
      var myOldGithub = 'https://15691808595.github.io';
      var myNewGithub = 'https://Weibozzz.github.io';
      var regExp = /(http:\/\/www\.liuweibo\.cn\/(jianli|img|liuweibo_FrontEnd_CV\.doc))|(https:\/\/15691808595\.github\.io)/gim;
      var markdedHtml = "".concat(isShowReadingStatement ? Object(constantsData["J" /* POST_READING_STATEMENT */])() : '').concat(Object(until["g" /* getHtml */])(decode_html, createTime));

      var _html_content = bool ? external_marked_default()(markdedHtml) : type === 'interesting' || type === 'fight' && id >= 146 && id <= 178 ? Object(until["g" /* getHtml */])(decode_html.replace(regExp, function (res) {
        switch (res) {
          case myBlog + 'jianli':
            return myBlog + 'static/jianli';

          case myBlog + 'img':
            return myBlog + 'static';

          case myBlog + 'liuweibo_FrontEnd_CV.doc':
            return myBlog + 'static/cv/liuweibo_FrontEnd_CV.doc';

          case myOldGithub:
            return myNewGithub;
        }
      }), createTime) : Object(until["g" /* getHtml */])(decode_html, createTime);

      return {
        code: _html_content,
        decode_html: decode_html
      };
    }
  }, {
    key: "render",
    value: function render() {
      //接口
      var _this$props2 = this.props,
          _this$props2$blogData = _this$props2.blogData,
          blogData = _this$props2$blogData === void 0 ? [] : _this$props2$blogData,
          _this$props2$comments = _this$props2.commentsData,
          commentsData = _this$props2$comments === void 0 ? [] : _this$props2$comments,
          _this$props2$getComme = _this$props2.getCommentsData,
          getCommentsData = _this$props2$getComme === void 0 ? [] : _this$props2$getComme,
          _this$props2$lastIdDa = _this$props2.lastIdData,
          lastIdData = _this$props2$lastIdDa === void 0 ? [] : _this$props2$lastIdDa,
          _this$props2$nextIdDa = _this$props2.nextIdData,
          nextIdData = _this$props2$nextIdDa === void 0 ? [] : _this$props2$nextIdDa,
          _this$props2$userAgen = _this$props2.userAgent,
          userAgent = _this$props2$userAgen === void 0 ? 'pc' : _this$props2$userAgen,
          _this$props2$hotRecom = _this$props2.hotRecommendData,
          hotRecommendData = _this$props2$hotRecom === void 0 ? [] : _this$props2$hotRecom;
      var _this$state = this.state,
          articleID = _this$state.articleID,
          articleLike = _this$state.articleLike,
          isShowEditIcon = _this$state.isShowEditIcon,
          topWidth = _this$state.topWidth;

      var _ref4 = blogData[0] || {},
          _ref4$content = _ref4.content,
          content = _ref4$content === void 0 ? '' : _ref4$content,
          _ref4$createTime = _ref4.createTime,
          createTime = _ref4$createTime === void 0 ? '' : _ref4$createTime,
          _ref4$title = _ref4.title,
          title = _ref4$title === void 0 ? '' : _ref4$title,
          _ref4$url = _ref4.url,
          url = _ref4$url === void 0 ? '' : _ref4$url,
          id = _ref4.id,
          _ref4$type = _ref4.type,
          type = _ref4$type === void 0 ? '' : _ref4$type,
          _ref4$like = _ref4.like,
          like = _ref4$like === void 0 ? 0 : _ref4$like;

      var isShowReadingStatement = /阅读书籍/g.test(type);
      var resultLike = Math.max(articleLike, like);
      var bool = createTime > until["a" /* OldTime */] || articleID === 1;
      commentsData = commentsData.length > getCommentsData.length ? commentsData : getCommentsData.sort(function (a, b) {
        return b.createTime - a.createTime;
      });

      var _this$getHtmlRender = this.getHtmlRender(type, createTime, articleID, content, isShowReadingStatement, bool),
          code = _this$getHtmlRender.code,
          decode_html = _this$getHtmlRender.decode_html;

      var _html_content = Object(until["c" /* changeCdnUrl */])(createTime, code);

      return external_react_default.a.createElement("div", {
        className: "detail"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title, constantsData["n" /* COMMON_TITLE */])), external_react_default.a.createElement("div", {
        id: "read-nprogress",
        style: {
          width: topWidth
        }
      }), external_react_default.a.createElement(MyLayout["a" /* default */], null, external_react_default.a.createElement(col_default.a, {
        className: "left-icon-wrapper",
        sm: {
          span: 0
        },
        xs: {
          span: 0
        },
        lg: {
          span: 2
        }
      }, external_react_default.a.createElement("div", {
        className: "remark-num"
      }, resultLike), external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u8D5E\u4E00\u4E2A\u5427\uFF01"
      }, external_react_default.a.createElement(button_default.a, {
        onClick: this.onAddZan.bind(this),
        className: "my-button-icon"
      }, external_react_default.a.createElement(icon_default.a, {
        type: "like"
      }))), external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u6682\u672A\u5F00\u901A"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "weibo"
      })), external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u6682\u672A\u5F00\u901A"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "twitter"
      })), external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u6682\u672A\u5F00\u901A"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "wechat"
      })), isShowEditIcon ? external_react_default.a.createElement("a", {
        href: "/adminDetail/".concat(isShowEditIcon)
      }, external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u4FEE\u6539\u6587\u7AE0"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "edit"
      }))) : '', isShowEditIcon ? external_react_default.a.createElement("a", {
        href: "javascript:;",
        onClick: req_action["REQ_ACTION"].handleDelArticle.bind(this, this, isShowEditIcon)
      }, external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u5220\u9664\u6587\u7AE0"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "delete"
      }))) : '', external_react_default.a.createElement("a", {
        href: "#comment"
      }, external_react_default.a.createElement(tooltip_default.a, {
        placement: "right",
        title: "\u6765\u8BC4\u8BBA\u5427"
      }, external_react_default.a.createElement(icon_default.a, {
        className: "icon",
        type: "message"
      })))), external_react_default.a.createElement(col_default.a, {
        sm: {
          span: 24
        },
        xs: {
          span: 24
        },
        lg: {
          span: 22
        }
      }, external_react_default.a.createElement(ArticleTitle["a" /* default */], {
        commentsData: commentsData,
        detailArticle: blogData[0],
        htmlStr: _html_content
      }), external_react_default.a.createElement("div", {
        style: {
          background: '#fff',
          padding: '0 24px 24px 24px'
        }
      }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        sm: {
          span: 24
        },
        xs: {
          span: 24
        },
        lg: {
          span: bool ? 15 : 24
        }
      }, external_react_default.a.createElement("div", {
        id: "detail-article",
        className: bool ? 'new-detail markdown-style' : 'old-detail',
        dangerouslySetInnerHTML: {
          __html: _html_content
        }
      })), bool ? external_react_default.a.createElement(col_default.a, {
        className: "sticky-nav",
        sm: {
          span: 0
        },
        xs: {
          span: 0
        },
        lg: {
          span: 8
        }
      }, external_react_default.a.createElement(external_markdown_navbar_default.a, {
        className: "article-menu",
        source: decode_html,
        headingTopOffset: 0
      })) : ''), external_react_default.a.createElement(components_PrevNextPage, {
        dataSource: {
          url: url,
          lastIdData: lastIdData,
          nextIdData: nextIdData
        }
      }), external_react_default.a.createElement(row_default.a, {
        className: "zan-wrapper"
      }, external_react_default.a.createElement(col_default.a, {
        span: 4,
        offset: 10
      }, external_react_default.a.createElement(tooltip_default.a, {
        placement: "bottom",
        title: "\u8D5E\u4E00\u4E2A\u5427\uFF01"
      }, external_react_default.a.createElement(button_default.a, {
        onClick: this.onAddZan.bind(this),
        type: "primary",
        size: "large"
      }, "\u8D5E", external_react_default.a.createElement("span", {
        className: "split-line"
      }, "|"), resultLike)))), external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement("div", {
        className: "recommend-post"
      }, external_react_default.a.createElement("h3", null, "\u4F60\u53EF\u80FD\u611F\u5174\u8DA3\u7684\u6587\u7AE0"), external_react_default.a.createElement("ul", {
        className: "recommend-post-ul"
      }, hotRecommendData.map(function (v) {
        return external_react_default.a.createElement("li", {
          key: v.id
        }, external_react_default.a.createElement(link_default.a, {
          as: "/p/".concat(v.id),
          href: "/detail?id=".concat(v.id)
        }, external_react_default.a.createElement(tooltip_default.a, {
          placement: "top",
          title: v.title
        }, external_react_default.a.createElement("a", null, v.title))), v.type.split(',').map(function (v, index) {
          return external_react_default.a.createElement("span", {
            style: {
              marginLeft: index === 0 ? 10 : 0
            },
            key: v,
            className: "tag"
          }, v, " ");
        }), external_react_default.a.createElement("span", {
          style: {
            color: '#666'
          }
        }, external_react_default.a.createElement(icon_default.a, {
          type: "eye"
        }), " ", v.visitor));
      }))), external_react_default.a.createElement(Comments["a" /* default */], {
        dataSource: {
          commentsData: commentsData,
          articleID: articleID
        }
      })))), external_react_default.a.createElement("style", null, "\n        .a-img{\n          margin-bottom:20px;\n          text-align:center;\n        }\n.old-detail pre{\n    border:1px solid #ccc;\n    background-color:#f5f5f5;\n}\n\n\n.new-detail h1,.new-detail h2{\n    border-bottom: 1px solid #eee;\n    padding-bottom: 10px;\n}\n.ant-divider{\n    background:#3246da\n}\n.comment-wrapper h2{\n  margin-left:20px;\n}\n.sticky-nav{\n  position: sticky;\n  top: 128px;\n}\n\n\n"));
    }
  }]);

  return Detail;
}(external_react_["Component"]);

detail_Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(context) {
    var id, queryStrObj, blog, comments, lastId, nextId, blogData, commentsData, lastIdData, nextIdData;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            queryStrObj = {
              id: id
            };
            _context.next = 4;
            return fetch(Object(config["f" /* getDetailUrl */])(queryStrObj));

          case 4:
            blog = _context.sent;
            _context.next = 7;
            return fetch(Object(config["d" /* getCommentsUrl */])(queryStrObj));

          case 7:
            comments = _context.sent;
            _context.next = 10;
            return fetch(Object(config["h" /* getLastIdUrl */])(queryStrObj));

          case 10:
            lastId = _context.sent;
            _context.next = 13;
            return fetch(Object(config["j" /* getNextIdUrl */])(queryStrObj));

          case 13:
            nextId = _context.sent;
            _context.next = 16;
            return blog.json();

          case 16:
            blogData = _context.sent;
            _context.next = 19;
            return comments.json();

          case 19:
            commentsData = _context.sent;
            _context.prev = 20;
            _context.next = 23;
            return lastId.json();

          case 23:
            lastIdData = _context.sent;
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](20);
            lastIdData = [];

          case 29:
            _context.prev = 29;
            _context.next = 32;
            return nextId.json();

          case 32:
            nextIdData = _context.sent;
            _context.next = 38;
            break;

          case 35:
            _context.prev = 35;
            _context.t1 = _context["catch"](29);
            nextIdData = [];

          case 38:
            return _context.abrupt("return", {
              blogData: blogData,
              commentsData: commentsData,
              lastIdData: lastIdData,
              nextIdData: nextIdData
            });

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[20, 26], [29, 35]]);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

var mapStateToProps = function mapStateToProps(state) {
  var getCommentsData = state.getCommentsData,
      hotRecommendData = state.hotRecommendData;
  return {
    getCommentsData: getCommentsData,
    hotRecommendData: hotRecommendData
  };
};

var WrappedRegistrationForm = form_default.a.create()(detail_Detail);

/* harmony default export */ var pages_detail = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(WrappedRegistrationForm));

/***/ })
/******/ ]);