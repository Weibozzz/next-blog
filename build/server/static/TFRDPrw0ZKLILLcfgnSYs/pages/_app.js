module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"19":"11dd5e00709c753138cd"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
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
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 16 */,
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_constantsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




var MyHead = function MyHead() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge, chrome=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "renderer",
    content: "webkit"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "description",
    content: "\u5218\u4F1F\u6CE2-\u5929\u5929\u5411\u4E0A"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Keywords",
    content: _config_constantsData__WEBPACK_IMPORTED_MODULE_2__[/* KEYWORDS */ "w"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: _config_constantsData__WEBPACK_IMPORTED_MODULE_2__[/* Description */ "q"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: "\u5218\u4F1F\u6CE2,liuweibo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/css/iconfont/iconfont.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/nprogress.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "http://pv.sohu.com/cityjson?ie=utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, _config_constantsData__WEBPACK_IMPORTED_MODULE_2__[/* INDEX_TITLE */ "u"], " \xBB ", _config_constantsData__WEBPACK_IMPORTED_MODULE_2__[/* COMMON_TITLE */ "n"]));
};

/* harmony default export */ __webpack_exports__["a"] = (MyHead);

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top");

/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),
/* 85 */
/***/ (function(module, exports) {



/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, exports) {



/***/ }),
/* 89 */
/***/ (function(module, exports) {



/***/ }),
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
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
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
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(32);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(68);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(26);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(69);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(74);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(75);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./store/action-types.js
var action_types = __webpack_require__(2);

// CONCATENATED MODULE: ./store/reducers.js

var exampleInitialState = {};
var reducers_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    //前台
    case action_types["a" /* actionTypes */].SEARCH_DATA:
      //第一次搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      });

    case action_types["a" /* actionTypes */].HOT_ARTICLE_DATA:
      //获得热门文章
      return Object.assign({}, state, {
        hotArticleData: action.hotArticleData
      });

    case action_types["a" /* actionTypes */].MODIFY_ARTICLE_DATA:
      //获得修改文章
      return Object.assign({}, state, {
        modifyArticleData: action.modifyArticleData
      });

    case action_types["a" /* actionTypes */].HOT_RECOMMEND_DATA:
      //获得不同type热门文章
      return Object.assign({}, state, {
        hotRecommendData: action.hotRecommendData
      });

    case action_types["a" /* actionTypes */].SEARCH_PAGE_DATA:
      //点击搜索分页搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      });

    case action_types["a" /* actionTypes */].GET_SEARCH_TOTAL_DATA:
      //搜索的所有页数
      return Object.assign({}, state, {
        searchTotalData: action.searchTotalData
      });

    case action_types["a" /* actionTypes */].ADD_ZAN:
      //搜索的所有页数
      return Object.assign({}, state, {
        addZanData: action.addZanData
      });

    case action_types["a" /* actionTypes */].GET_LIFE:
      //生活板块
      return Object.assign({}, state, {
        lifeData: action.lifeData
      });

    case action_types["a" /* actionTypes */].GET_CREATE_TIME:
      //生活板块
      return Object.assign({}, state, {
        createTimeListData: action.createTimeListData
      });

    case action_types["a" /* actionTypes */].SET_COMMENT_INDEX:
      //设置评论回复index
      return Object.assign({}, state, {
        commentIndex: action.commentIndex
      });

    case action_types["a" /* actionTypes */].SET_ANSWER_ID:
      //设置回复评论answerid
      return Object.assign({}, state, {
        answerId: action.answerId
      });

    case action_types["a" /* actionTypes */].IS_COLLECT_ARTICLE:
      //设置是否展示收藏文章列表
      return Object.assign({}, state, {
        isCollectArticle: action.isCollectArticle
      });

    case action_types["a" /* actionTypes */].GET_QINIU_TOKEN:
      //获得七牛云存储的token
      return Object.assign({}, state, {
        qiniuToken: action.qiniuToken
      });

    case action_types["a" /* actionTypes */].POST_COMMENTS:
      //发布评论,然后获得更新后的评论
      return Object.assign({}, state, {
        getCommentsData: action.getCommentsData
      });

    case action_types["a" /* actionTypes */].POST_USER_COMMENTS:
      //发布留言,然后获得更新后的评论
      return Object.assign({}, state, {
        getUserCommentsData: action.getUserCommentsData
      });

    case action_types["a" /* actionTypes */].POST_ARTICLE:
      //发布文章后的返回
      return Object.assign({}, state, {
        postArticleData: action.postArticleData
      });

    case action_types["a" /* actionTypes */].SAVE_IP:
      //存取ip地址返回
      return Object.assign({}, state, {
        geSaveIpData: action.geSaveIpData
      });

    case action_types["a" /* actionTypes */].GET_IP:
      //得到ip地址返回
      return Object.assign({}, state, {
        ipListData: action.ipListData
      });

    case action_types["a" /* actionTypes */].GET_VIEW:
      //得到view数量返回
      return Object.assign({}, state, {
        viewListData: action.viewListData
      });
    //后台

    case action_types["a" /* actionTypes */].GET_COMMENTS:
      //获得博客用户评论数据
      return Object.assign({}, state, {
        getAdminCommentsData: action.getAdminCommentsData
      });

    case action_types["a" /* actionTypes */].GET_COMMENTS_USER:
      //获得博客用户留言数据
      return Object.assign({}, state, {
        getCommentsUserData: action.getCommentsUserData
      });

    case action_types["a" /* actionTypes */].GET_ADMIN_DATA:
      //获得博客数据
      return Object.assign({}, state, {
        adminBlogData: action.adminBlogData
      });

    case action_types["a" /* actionTypes */].POST_ADMIN_DETAIL:
      //发布文章
      return Object.assign({}, state, {
        postAdminDetailData: action.postAdminDetailData
      });

    case action_types["a" /* actionTypes */].POST_ADMIN_PASSWORD:
      //检查密码是否正确为管理员
      return Object.assign({}, state, {
        postAdminPasswordData: action.postAdminPasswordData
      });

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./store/store.js




var store_exampleInitialState = {
  commentIndex: -1,
  answerId: '',
  isCollectArticle: false
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store_exampleInitialState;
  return Object(external_redux_["createStore"])(reducers_reducer, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}
// CONCATENATED MODULE: ./lib/with-redux-store.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_store = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(external_react_default.a.Component)
  );
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(11);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(9);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(70);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(6);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(13);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(76);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./config/constantsData.js
var constantsData = __webpack_require__(3);

// EXTERNAL MODULE: ./config/index.js + 1 modules
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./store/actions.js
var actions = __webpack_require__(8);

// EXTERNAL MODULE: ./components/MyHead/index.js
var MyHead = __webpack_require__(39);

// EXTERNAL MODULE: ./components/Header/index.less
var Header = __webpack_require__(85);

// CONCATENATED MODULE: ./components/Header/index.js






function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }



 // prefetch预加载








 //toptis不需要seo

var DynasicTopTipsNoSsr = dynamic_default()(function () {
  return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, 129));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(129)];
    },
    modules: ['../../components/TopTips']
  }
});
var Header_Header = layout_default.a.Header,
    Content = layout_default.a.Content;
var routes = [{
  href: constantsData["s" /* INDEX */],
  txt: constantsData["v" /* INDEX_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["h" /* BLOG */],
  txt: constantsData["i" /* BLOG_TXT */],
  isSuperAdmin: false,
  isArticleList: true
}, {
  href: constantsData["x" /* LIFE */],
  txt: constantsData["y" /* LIFE_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["E" /* ONLINE_GITBOOK */],
  txt: constantsData["p" /* DOCS_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["a" /* ABOUT */],
  txt: constantsData["b" /* ABOUT_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["h" /* BLOG */],
  txt: '我的收藏',
  isSuperAdmin: false,
  isMyCollcet: true
}, {
  href: constantsData["N" /* VERSIONS */],
  txt: constantsData["O" /* VERSIONS_TXT */],
  isSuperAdmin: false
}, {
  href: constantsData["c" /* ADMIN */],
  txt: constantsData["d" /* ADMIN_TXT */],
  isSuperAdmin: true
}, {
  href: constantsData["F" /* POST_ARTICLE */],
  txt: constantsData["H" /* POST_ARTICLE_TXT */],
  isSuperAdmin: true
}, {
  href: 'javascript:;',
  txt: '退出',
  isSuperAdmin: true,
  exit: true
}];

var Header_TopNav =
/*#__PURE__*/
function (_Component) {
  Header_inherits(TopNav, _Component);

  function TopNav(props) {
    var _this;

    Header_classCallCheck(this, TopNav);

    _this = Header_possibleConstructorReturn(this, Header_getPrototypeOf(TopNav).call(this, props));
    _this.state = {
      isLogin: false,
      isAll: false,
      defaultSelectedKeys: '/'
    };
    return _this;
  }

  Header_createClass(TopNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _location = location,
          _location$pathname = _location.pathname,
          pathname = _location$pathname === void 0 ? '/' : _location$pathname;
      var dispatch = this.props.dispatch;
      var _sessionStorage = sessionStorage,
          _sessionStorage$passw = _sessionStorage.password,
          password = _sessionStorage$passw === void 0 ? '' : _sessionStorage$passw;
      this.setState({
        selectedKeys: constantsData["A" /* MENU_RULE */][pathname] || constantsData["A" /* MENU_RULE */]['/']
      });

      if (!password) {
        return;
      }

      Object(actions["p" /* postAdminPassword */])(dispatch, Object(config["o" /* postAdminPasswordUrl */])(), {
        password: password
      }).then(function (res) {
        var _res$postAdminPasswor = res.postAdminPasswordData,
            postAdminPasswordData = _res$postAdminPasswor === void 0 ? [] : _res$postAdminPasswor;

        if (postAdminPasswordData.length) {
          _this2.setState({
            isLogin: true
          });
        }
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(_ref) {
      var keyPath = _ref.keyPath,
          key = _ref.key;
      this.setState({
        selectedKeys: keyPath
      });
    }
  }, {
    key: "onExit",
    value: function onExit() {
      //退出清除sessionStorage
      sessionStorage.removeItem('password');
      this.setState({
        isLogin: false
      });
    }
  }, {
    key: "onMyCollect",
    value: function onMyCollect(articleList) {
      var isAll = this.state.isAll;
      var bool = articleList === 'articleList';
      var dispatch = this.props.dispatch;
      !bool && this.setState({
        isAll: !isAll
      });
      var collectArrStr = localStorage.getItem('collectArrStr');
      var collectArr;

      try {
        collectArr = JSON.parse(collectArrStr);
      } catch (err) {
        collectArr = [];
      }

      if (!Array.isArray(collectArr) || !collectArr.length) {
        message_default.a.warning("\u8FD8\u6CA1\u6709\u6536\u85CF\u8FC7\u6587\u7AE0\uFF0C\u70B9\u51FB\u5168\u90E8\u6587\u7AE0\uFF0C\u7136\u540E\u70B9\u51FB\u5C0F\u661F\u661F\u8FDB\u884C\u672C\u5730\u6536\u85CF\uFF01");

        return;
      }

      if (this.state.isAll || bool) {
        var queryStringObj = {
          type: 'all',
          num: 1,
          pageNum: constantsData["R" /* pageNum */],
          wd: ''
        };
        var queryTotalString = {
          type: 'all',
          wd: ''
        };
        Object(actions["l" /* getSearchList */])(dispatch, Object(config["c" /* getBlogUrl */])(queryStringObj));
        Object(actions["n" /* getSearchTotal */])(dispatch, Object(config["l" /* getTotalUrl */])(queryTotalString));

        if (bool) {
          Object(actions["b" /* collectArticleList */])(dispatch, false);
          return;
        }
      } else {
        Object(actions["l" /* getSearchList */])(dispatch, 'myCollect', collectArr);
      }

      Object(actions["b" /* collectArticleList */])(dispatch, !this.state.isAll);
    }
  }, {
    key: "onMyFn",
    value: function onMyFn(item) {
      var isCollectArticle = this.props.isCollectArticle;

      var fn = function fn() {};

      if (item.exit) {
        fn = this.onExit.bind(this);
      } else if (item.isMyCollcet) {
        fn = this.onMyCollect.bind(this);
      } else if (item.isArticleList && isCollectArticle) {
        fn = this.onMyCollect.bind(this, 'articleList');
      }

      return external_react_default.a.createElement(menu_default.a.Item, {
        key: item.txt
      }, external_react_default.a.createElement(link_default.a, {
        prefetch: true,
        href: item.href
      }, external_react_default.a.createElement("a", {
        onClick: fn
      }, item.txt)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          isLogin = _this$state.isLogin,
          _this$state$selectedK = _this$state.selectedKeys,
          selectedKeys = _this$state$selectedK === void 0 ? ['/'] : _this$state$selectedK;
      var _this$props$userAgent = this.props.userAgent,
          userAgent = _this$props$userAgent === void 0 ? 'pc' : _this$props$userAgent;

      if (Object.prototype.toString.call(selectedKeys) === '[object String]') {
        selectedKeys = ['/'];
      }

      var regSelectKey = /\/blog[\/]?[0-9]?/;

      if (selectedKeys[0] && regSelectKey.test(selectedKeys[0])) {
        selectedKeys = ['/blog'];
      }

      var newRoutes;

      if (isLogin) {
        newRoutes = routes;
      } else {
        newRoutes = routes.filter(function (v) {
          return !v.isSuperAdmin;
        });
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(MyHead["a" /* default */], null), external_react_default.a.createElement(layout_default.a, null, external_react_default.a.createElement(Header_Header, {
        style: {
          position: userAgent === 'pc' ? 'fixed' : 'static',
          height: '64px',
          width: '100%',
          padding: 0,
          zIndex: 10
        }
      }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
        span: 2
      }), external_react_default.a.createElement(col_default.a, {
        sm: {
          span: 24
        },
        xs: {
          span: 24
        },
        lg: {
          span: 17
        }
      }, external_react_default.a.createElement(menu_default.a, {
        theme: "dark",
        mode: "horizontal",
        onClick: this.onSelect.bind(this),
        defaultSelectedKeys: ['/'],
        selectedKeys: selectedKeys,
        style: {
          lineHeight: '64px'
        }
      }, newRoutes.map(function (item, index) {
        return _this3.onMyFn(item);
      }))))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
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
      }, external_react_default.a.createElement(Content, {
        style: {
          marginTop: userAgent === 'pc' ? 64 : 0
        }
      }, external_react_default.a.createElement(DynasicTopTipsNoSsr, null))))));
    }
  }]);

  return TopNav;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var postAdminPasswordData = state.postAdminPasswordData,
      isCollectArticle = state.isCollectArticle;
  return {
    postAdminPasswordData: postAdminPasswordData,
    isCollectArticle: isCollectArticle
  };
};

/* harmony default export */ var components_Header = (Object(external_react_redux_["connect"])(mapStateToProps)(Header_TopNav));
// EXTERNAL MODULE: external "antd/lib/back-top"
var back_top_ = __webpack_require__(77);
var back_top_default = /*#__PURE__*/__webpack_require__.n(back_top_);

// CONCATENATED MODULE: ./components/Footer/index.js



function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }




var Footer = layout_default.a.Footer;

var Footer_blogFooter =
/*#__PURE__*/
function (_Component) {
  Footer_inherits(blogFooter, _Component);

  function blogFooter() {
    Footer_classCallCheck(this, blogFooter);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(blogFooter).call(this));
  }

  Footer_createClass(blogFooter, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Footer, {
        className: "footer-content"
      }, external_react_default.a.createElement("p", null, " Power & Designed by", external_react_default.a.createElement(link_default.a, {
        href: constantsData["z" /* LINK_ABOUT_ME */]
      }, external_react_default.a.createElement("a", null, " liuweibo"))), external_react_default.a.createElement("p", {
        className: "copy"
      }, "\xA9 2017", external_react_default.a.createElement(link_default.a, {
        href: constantsData["B" /* MIIT_BEIAN */]
      }, external_react_default.a.createElement("a", null, " \u9655ICP\u590717015350\u53F7"))), external_react_default.a.createElement(back_top_default.a, null), external_react_default.a.createElement("style", null, "\n            .footer-content{\n              text-align:center;\n\n            }\n            .copy a{\n              color:rgba(0, 0, 0, 0.65);;\n            }\n          "));
    }
  }]);

  return blogFooter;
}(external_react_["Component"]);

/* harmony default export */ var components_Footer = (Footer_blogFooter);
// EXTERNAL MODULE: external "babel-polyfill"
var external_babel_polyfill_ = __webpack_require__(86);

// EXTERNAL MODULE: ./asserts/styles.less
var styles = __webpack_require__(87);

// EXTERNAL MODULE: ./pages/index.less
var pages = __webpack_require__(88);

// EXTERNAL MODULE: ./pages/markdown.less
var markdown = __webpack_require__(89);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(60);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// CONCATENATED MODULE: ./pages/_app.js


function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }















var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    var _this;

    _app_classCallCheck(this, MyApp);

    _this = _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).call(this));
    _this.state = {
      userAgent: {
        userAgent: 'pc'
      }
    };
    return _this;
  }

  _app_createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ua = navigator.userAgent;
      var userAgent;

      if (ua.indexOf("Android") > 0 || ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0) {
        //移动端
        userAgent = 'mobile';
      } else {
        userAgent = 'pc';
      }

      this.setState({
        userAgent: {
          userAgent: userAgent
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      router_default.a.onRouteChangeStart = function (url) {
        external_nprogress_default.a.start();
      };

      router_default.a.onRouteChangeComplete = function () {
        return external_nprogress_default.a.done();
      };

      router_default.a.onRouteChangeError = function () {
        return external_nprogress_default.a.done();
      };

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore,
          pathname = _this$props.router.pathname;
      var userAgent = this.state.userAgent;

      var myPageProps = _app_objectSpread({}, pageProps, userAgent);

      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: reduxStore
      }, external_react_default.a.createElement("div", {
        className: "jsx-3656560046" + " " + "container"
      }, pathname === '/' || pathname === '/gallery' ? '' : external_react_default.a.createElement(components_Header, userAgent), external_react_default.a.createElement(Component, _app_extends({}, myPageProps, {
        className: "jsx-3656560046" + " " + (myPageProps.className != null && myPageProps.className || "")
      })), pathname === '/' || pathname === '/gallery' ? '' : external_react_default.a.createElement(components_Footer, null))), external_react_default.a.createElement(style_default.a, {
        styleId: "3656560046",
        css: [".fl{float:left;}", ".fr{float:right;}", ".clearfix:after{content:'';clear:both;display:block;}", "ul{margin:0;padding:0;}", "li{list-style:none;}", "#__next,.container{height:100%;}", ".container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f0f2f5;}", ".container>div:nth-child(2){-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"]
      }));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(Object(router_["withRouter"])(_app_MyApp)));

/***/ })
/******/ ]);