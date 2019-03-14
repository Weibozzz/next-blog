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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {



/***/ }),

/***/ 114:
/***/ (function(module, exports) {



/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(12);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(20);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(59);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-copy-to-clipboard"
var external_react_copy_to_clipboard_ = __webpack_require__(47);

// CONCATENATED MODULE: ./components/Gallery/ImgFigure.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ImgFigure_ImgFigure =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImgFigure, _React$Component);

  function ImgFigure(props) {
    var _this;

    _classCallCheck(this, ImgFigure);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImgFigure).call(this, props));
    _this.state = {
      copied: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * imgFigure的点击处理函数
   *  判断当前点击的图片是否是中心图片
   *  若是，则执行当前图片的翻转
   *  若否，则将点击图片居中，同时所有图片的位置都会有调整
   */


  _createClass(ImgFigure, [{
    key: "handleClick",
    value: function handleClick(e) {
      if (this.props.arrange.isCenter) {
        this.props.inverse();
      } else {
        this.props.center();
      }

      e.stopPropagation();
      e.preventDefault();
    }
    /**
     * 获取图片的样式，包括
     * 1. 设置position
     * 2. 设置旋转角度transform:rotate
     * 3. 设置z-index
     */

  }, {
    key: "getImgeStyle",
    value: function getImgeStyle() {
      var _this2 = this;

      var styleObj = {};
      /* 如果props属性中指定了这张图片的位置,则使用 */

      if (this.props.arrange.pos) {
        Object.keys(this.props.arrange.pos).forEach(function (key) {
          styleObj[key] = _this2.props.arrange.pos[key];
        });
      }
      /* 添加图片旋转角度样式 */


      if (this.props.arrange.rotate) {
        var prefixArr = ['MozTransform', 'MsTransform', 'WebkitTransform', 'transform'];
        prefixArr.forEach(function (value) {
          styleObj[value] = "rotate(".concat(_this2.props.arrange.rotate, "deg)");
        });
      }
      /* 设置中心图片的z-index,保证中心图片始终在最上层 */


      if (this.props.arrange.isCenter) {
        styleObj.zIndex = 11;
      }

      return styleObj;
    }
  }, {
    key: "onCopyLink",
    value: function onCopyLink(e) {
      console.log(arguments);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var styleObj = this.getImgeStyle();
      var figureClass = external_classnames_default()({
        'img-figure': true,
        'my-img-figure': true,
        'is-inverse': this.props.arrange.isInverse // 反转样式

      });
      var data = this.props.data;
      return external_react_default.a.createElement("figure", {
        className: figureClass,
        style: styleObj,
        onClick: this.handleClick
      }, external_react_default.a.createElement(external_react_copy_to_clipboard_["CopyToClipboard"], {
        text: data.imageUrl,
        onCopy: function onCopy() {
          return _this3.setState({
            copied: true
          });
        }
      }, external_react_default.a.createElement("img", {
        src: data.imageUrl,
        alt: data.title
      })), external_react_default.a.createElement("figcaption", null, external_react_default.a.createElement("h2", {
        className: "img-title"
      }, data.title), external_react_default.a.createElement("div", {
        className: "img-back",
        onClick: this.handleClick
      }, external_react_default.a.createElement("p", null, " ", data.desc, " "))));
    }
  }]);

  return ImgFigure;
}(external_react_default.a.Component);

/* harmony default export */ var Gallery_ImgFigure = (ImgFigure_ImgFigure);
/**
 1. data
 {
   "fileName": "1.jpg",
   "title": "Heaven of time",
   "desc": "Here he comes Here comes Speed Racer."
 }
 2. arrange
 {
    pos:{ left:0, top:0}
    rotate: 0          //旋转角度
    isInverse： false  // 图片是否正反面
    isCenter: false   //图片是否居中
 }


 **/
// CONCATENATED MODULE: ./components/Gallery/ControllerUnit.js
function ControllerUnit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ControllerUnit_typeof = function _typeof(obj) { return typeof obj; }; } else { ControllerUnit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ControllerUnit_typeof(obj); }

function ControllerUnit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ControllerUnit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ControllerUnit_createClass(Constructor, protoProps, staticProps) { if (protoProps) ControllerUnit_defineProperties(Constructor.prototype, protoProps); if (staticProps) ControllerUnit_defineProperties(Constructor, staticProps); return Constructor; }

function ControllerUnit_possibleConstructorReturn(self, call) { if (call && (ControllerUnit_typeof(call) === "object" || typeof call === "function")) { return call; } return ControllerUnit_assertThisInitialized(self); }

function ControllerUnit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ControllerUnit_getPrototypeOf(o) { ControllerUnit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ControllerUnit_getPrototypeOf(o); }

function ControllerUnit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ControllerUnit_setPrototypeOf(subClass, superClass); }

function ControllerUnit_setPrototypeOf(o, p) { ControllerUnit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ControllerUnit_setPrototypeOf(o, p); }



/**
 * 底部控制栏组件
 */

var ControllerUnit_ControllerUnit =
/*#__PURE__*/
function (_React$Component) {
  ControllerUnit_inherits(ControllerUnit, _React$Component);

  function ControllerUnit() {
    ControllerUnit_classCallCheck(this, ControllerUnit);

    return ControllerUnit_possibleConstructorReturn(this, ControllerUnit_getPrototypeOf(ControllerUnit).apply(this, arguments));
  }

  ControllerUnit_createClass(ControllerUnit, [{
    key: "handleClick",

    /**
     * ControllerUnit的点击处理函数
     *  判断当前点击的图片是否是中心图片
     *  若是，则执行当前图片的翻转
     *  若否，则将点击图片居中，同时所有图片的位置都会有调整
     */
    value: function handleClick(e) {
      if (this.props.arrange.isCenter) {
        this.props.inverse();
      } else {
        this.props.center();
      }

      e.stopPropagation();
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var spanClass = external_classnames_default()({
        'controller-unit': true,
        'is-center': this.props.arrange.isCenter,
        // 居中按钮样式
        'is-inverse': this.props.arrange.isInverse // 反转按钮样式

      });
      return external_react_default.a.createElement("span", {
        className: spanClass,
        onClick: this.handleClick.bind(this)
      }, " ");
    }
  }]);

  return ControllerUnit;
}(external_react_default.a.Component);

/* harmony default export */ var Gallery_ControllerUnit = (ControllerUnit_ControllerUnit);
/**
 1. arrange
 {
    pos:{ left:0, top:0}
    rotate: 0          //旋转角度
    isInverse： false  // 图片是否正反面
    isCenter: false   //图片是否居中
 }


 **/
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(71);

// EXTERNAL MODULE: ./components/MyHead/index.js
var MyHead = __webpack_require__(39);

// CONCATENATED MODULE: ./components/Gallery/until.js
/**
 * 获取区间内的一个随机值
 */
var getRangeRandom = function getRangeRandom(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
};
/**
 *  随机生成一个0-30度正负值角度
 */

var get30DegRandom = function get30DegRandom() {
  return Math.floor(Math.random() * 60 - 30);
};
// EXTERNAL MODULE: ./until/index.js
var until = __webpack_require__(4);

// EXTERNAL MODULE: ./config/qiniuyun_cdn.js
var qiniuyun_cdn = __webpack_require__(31);

// EXTERNAL MODULE: ./components/Gallery/index.less
var Gallery = __webpack_require__(113);

// CONCATENATED MODULE: ./components/Gallery/index.js


function Gallery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gallery_typeof = function _typeof(obj) { return typeof obj; }; } else { Gallery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gallery_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Gallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gallery_defineProperties(Constructor, staticProps); return Constructor; }

function Gallery_possibleConstructorReturn(self, call) { if (call && (Gallery_typeof(call) === "object" || typeof call === "function")) { return call; } return Gallery_assertThisInitialized(self); }

function Gallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gallery_getPrototypeOf(o) { Gallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gallery_getPrototypeOf(o); }

function Gallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gallery_setPrototypeOf(subClass, superClass); }

function Gallery_setPrototypeOf(o, p) { Gallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gallery_setPrototypeOf(o, p); }










var Gallery_extendArr = qiniuyun_cdn["a" /* qiniuyun_cdn_all */];
/**
 * 获取图片的输出地址，imageJsonDatas和imageDatas的结构详见最下面
 * 这种图片地址获取方式是通过webpack的loader实现的
 */

var Gallery_GalleryByReactApp =
/*#__PURE__*/
function (_React$Component) {
  Gallery_inherits(GalleryByReactApp, _React$Component);

  function GalleryByReactApp(props) {
    var _this;

    Gallery_classCallCheck(this, GalleryByReactApp);

    _this = Gallery_possibleConstructorReturn(this, Gallery_getPrototypeOf(GalleryByReactApp).call(this, props));
    _this.Constant = {
      centerPos: {
        // 中心图片位置
        left: 0,
        top: 0
      },
      leftSection: {
        // 左扇区，x和y临界值
        x: [0, 0],
        y: [0, 0]
      },
      rightSection: {
        // 右扇区，x和y临界值
        x: [0, 0],
        y: [0, 0]
      },
      topSection: {
        // 上扇区，x和y临界值
        x: [0, 0],
        y: [0, 0]
      }
    };
    /** imgsArrangeArr 存放每张图片的位置信息，旋转角度信息 */

    _this.state = {
      imgsArrangeArr: [
        /* {
             pos:{ left:0, top:0}
             rotate: 0          //旋转角度
             isInverse： false  // 图片是否正反面
             isCenter: false   //图片是否居中
        }  */
      ],
      extendArr: Gallery_extendArr,
      myImage: []
    };
    return _this;
  }
  /**
   *  重新布局所有图片
   *  @param: centerIndex指定居中排布哪个图片
   */


  Gallery_createClass(GalleryByReactApp, [{
    key: "rearrange",
    value: function rearrange(centerIndex) {
      var imgsArrangeArr = this.state.imgsArrangeArr;
      var _this$Constant = this.Constant,
          centerPos = _this$Constant.centerPos,
          leftSection = _this$Constant.leftSection,
          rightSection = _this$Constant.rightSection,
          topSection = _this$Constant.topSection;
      /**
       * 1. 根据传入的索引分离出居中图片
       * 2. 设置居中图片的位置信息
       * 3. 最后需要将分离出的居中图片插回imgsArrangeArr(保证索引和imageDatas中一一对应)
       */

      var center = imgsArrangeArr.splice(centerIndex, 1);
      center[0] = {
        'pos': centerPos,
        'rotate': 0,
        'isCenter': true
      };
      /**
       * 1. 获取需要布局上扇区的图片数量，0个或者1个，50%概率
       * 2. 获取一个布局到上扇区图片的索引值（范围是0-14或者0-15）
       * 3. 从imgsArrangeArr分离出该索引代表的对象，根据topImgNum是否为0, imgsArrangTopArr可能为空
       * 4. 最后也是要插回imgsArrangeArr
       **/

      var top = [];
      var topNum = Math.floor(Math.random() * 2); //取一个或者不取

      var topIndex = Math.floor(Math.random() * imgsArrangeArr.length);
      top = imgsArrangeArr.splice(topIndex, topNum);
      /** 设置布局位于上扇区的图片位置信息 */

      top.forEach(function (value, index) {
        top[index] = {
          pos: {
            top: getRangeRandom(topSection.y[0], topSection.y[1]),
            left: getRangeRandom(topSection.x[0], topSection.x[1])
          },
          rotate: get30DegRandom(),
          isCenter: false
        };
      });
      /** 布局左两扇区的图片 */

      for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
        //前半部分布局左边,右边部分布局右边,y值左右扇区多一样，所以这里取左扇区的值
        var xRang = i < k ? leftSection.x : rightSection.x;
        imgsArrangeArr[i] = {
          pos: {
            top: getRangeRandom(leftSection.y[0], leftSection.y[1]),
            left: getRangeRandom(xRang[0], xRang[1])
          },
          rotate: get30DegRandom(),
          isCenter: false
        };
      }
      /** 如果上扇区有图片，插回imgsArrangeArr */


      if (top && top[0]) {
        imgsArrangeArr.splice(topIndex, 0, top[0]);
      }
      /** 将中心图片插回imgsArrangeArr */


      imgsArrangeArr.splice(centerIndex, 0, center[0]);
      this.setState({
        imgsArrangeArr: imgsArrangeArr
      });
    }
    /**
     * 利用rearrange函数居中对应index的图片
     * @param index 需要被居中的图片的索引值
     * return {function}
     */

  }, {
    key: "center",
    value: function center(index) {
      this.rearrange(index);
    }
    /**
     * 翻转图片
     * @param index 传入当前被执行inverse操作的图片对应的图片信息数组的index值
     */

  }, {
    key: "inverse",
    value: function inverse(index) {
      var imgsArrangeArr = this.state.imgsArrangeArr;
      imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
      this.setState({
        imgsArrangeArr: imgsArrangeArr
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.changeImages();
    }
  }, {
    key: "changeImages",
    value: function changeImages(param) {
      //换一批
      var extendArr = this.state.extendArr;
      var resultArr = [];

      if (Object.prototype.toString.call(param) === '[object String]') {
        if (param === 'all') {
          resultArr = extendArr;
        } else {
          resultArr = qiniuyun_cdn["b" /* qiniuyun_cdn_all_type */][param + 'Images'];
        }
      } else {
        resultArr = extendArr;
      }

      this.setState({
        myImage: Object(until["i" /* getRandomArr */])(resultArr, 20).map(function (v) {
          return {
            "imageUrl": resultArr[v].dl_remove_attname_url,
            "title": "Heaven of time",
            "desc": "Here he comes Here comes Speed Racer."
          };
        })
      });
    }
    /**
     * componentDidMount方法：组件渲染完成后(即已经出现在dom中)执行的操作
     * 操作：为每张图片计算其位置范围
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      /** 拿到舞台的大小，计算一半的值*/
      var stageDOM = Object(external_react_dom_["findDOMNode"])(this.refs['stage']),
          // 拿到舞台dom节点
      stageW = stageDOM.scrollWidth,
          // 舞台宽度
      stageH = stageDOM.scrollHeight,
          // 舞台高度
      halfStageW = Math.ceil(stageW / 2),
          // 舞台一半宽度
      halfStageH = Math.ceil(stageH / 2); // 舞台一半高度

      /** 拿到一个imgFigure的大小，因为所有imgFigure都一样，所以这里去第一个imgFigure0*/

      var imgFigureDOM = Object(external_react_dom_["findDOMNode"])(this.refs['imgFigure0']),
          // 拿到随便一个图片节点
      imgW = imgFigureDOM.scrollWidth,
          // 图片宽度
      imgH = imgFigureDOM.scrollHeight,
          // 图片高度
      halfImgW = Math.ceil(imgW / 2),
          // 图片一半宽度
      halfImgH = Math.ceil(imgH / 2); // 图片一半高度

      /** 计算中心图片的位置点,  this.Constant存放不变的值 */

      this.Constant.centerPos = {
        left: halfStageW - halfImgW,
        // 中心图片left值，需要减去一半图片宽度
        top: halfStageH - halfImgH // 中心图片top值，需要减去一半图片高度

      };
      /** 计算左扇区，x和y的临界值 */

      this.Constant.leftSection.x[0] = -halfImgW; // 左扇区最左值，这里设定最多超多舞台左边界图片宽度的一半

      this.Constant.leftSection.x[1] = halfStageW - halfImgW * 3; // 左扇区最右值，注意这里绝对定位的left是指图片左边距离屏幕左边界的距离，所以这里是1.5倍图片宽度，临界情况是图片右边紧贴中心图片最左边

      this.Constant.leftSection.y[0] = -halfImgH; // 左扇区的最上，这里设定最多超多舞台上边界图片高度的一半

      this.Constant.leftSection.y[1] = stageH - halfImgH; // 左扇区的最下，这里设定高于舞台下边界图片高度的一半

      /** 计算右扇区，x和y的临界值*/

      this.Constant.rightSection.x[0] = halfStageW + halfImgW; // 右扇区最左值，贴到中心图片的右边，距离中心线半个图片宽度

      this.Constant.rightSection.x[1] = stageW - halfImgW; // 右扇区最右值，道理同左扇区最右值

      this.Constant.rightSection.y[0] = this.Constant.leftSection.y[0]; // 同左扇区最上

      this.Constant.rightSection.y[1] = this.Constant.leftSection.y[1]; // 同左扇区最下

      /** 计算上扇，x和y的临界值 */

      this.Constant.topSection.y[0] = -halfImgH; // 上扇区最上，同左右扇区最上

      this.Constant.topSection.y[1] = halfStageH - halfImgH * 3; // 上扇区最下，道理同左扇区最右值

      this.Constant.topSection.x[0] = halfStageW - imgW; // 上扇区最左，中轴线往左一个图片宽度

      this.Constant.topSection.x[1] = halfStageW; // 上扇区最右，中轴线（注意left值是以左边为准）

      this.rearrange(0); //默认指定第一张居中
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cotrollerUnits = [],
          imgFigure = [];
      var imageDatas = this.state.myImage;
      imageDatas.forEach(function (value, index) {
        if (!_this2.state.imgsArrangeArr[index]) {
          _this2.state.imgsArrangeArr[index] = {
            pos: {
              left: 0,
              top: 0
            },
            rotate: 0,
            isInverse: false,
            isCenter: false
          };
        }

        var commonProps = {
          key: index,
          arrange: _this2.state.imgsArrangeArr[index],
          inverse: _this2.inverse.bind(_this2, index),
          center: _this2.center.bind(_this2, index)
        };
        imgFigure.push(external_react_default.a.createElement(Gallery_ImgFigure, _extends({
          data: value,
          ref: 'imgFigure' + index
        }, commonProps)));
        cotrollerUnits.push(external_react_default.a.createElement(Gallery_ControllerUnit, commonProps));
      });
      return external_react_default.a.createElement("div", {
        className: "gallery-component",
        style: {
          height: '100%'
        }
      }, external_react_default.a.createElement(MyHead["a" /* default */], null), external_react_default.a.createElement("section", {
        className: "stage",
        ref: "stage"
      }, external_react_default.a.createElement("section", {
        className: "img-sec"
      }, imgFigure), external_react_default.a.createElement("nav", {
        className: "controller-nav"
      }, cotrollerUnits)), external_react_default.a.createElement("div", {
        className: "btn-group"
      }, external_react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.changeImages.bind(this, 'life')
      }, "\u751F\u6D3B\u7BC7"), external_react_default.a.createElement(button_default.a, {
        type: "danger",
        onClick: this.changeImages.bind(this, 'scenery')
      }, "\u666F\u8272\u7BC7"), external_react_default.a.createElement(button_default.a, {
        type: "dashed",
        onClick: this.changeImages.bind(this, 'my')
      }, "\u81EA\u604B\u7BC7"), external_react_default.a.createElement(button_default.a, {
        type: "primary",
        onClick: this.changeImages.bind(this, 'fight')
      }, "\u6FC0\u52B1\u7BC7"), external_react_default.a.createElement(button_default.a, {
        type: "danger",
        onClick: this.changeImages.bind(this, 'all')
      }, "\u6362\u4E00\u6279")));
    }
  }]);

  return GalleryByReactApp;
}(external_react_default.a.Component);

/* harmony default export */ var components_Gallery = (Gallery_GalleryByReactApp);
/**
 1. imageJsonDatas 的大致结构
 Array[
 {
      desc:"Here he comes Here comes Speed Racer. "
      fileName:"4.jpg"
      title:"Heaven of time"
  }
 ...
 ...
 ]

 ======================================================================================

 2. imageDatas 的大致结构
 Array[
 {
     desc:"Here he comes Here comes Speed Racer. "
     fileName:"4.jpg"
     imageUrl:"/assets/ace3d5b785f01689d46740d26b55d68a.jpg"
     title:"Heaven of time"
 }
 ...
 ...
 ]

 ======================================================================================

 3.  舞台示意图(外部虚线包围的是上扇区，左右扇区以此类推，没有下扇区)

 |-----—-上扇区线-----|
 |         |         |
 |—————舞台线——————|——-——————|—————————|————————————————————|
 |                |<--------|-------->|                    |
 |                |         |         |                    |
 |                |         |         |                    |
 |----------------|----  ___|____ ----|--------------------|
 |                      |        |                         |
 |                      | 中心图片|                         |
 |                      |________|                         |
 |                          |                              |
 |                          |                              |
 |                          |                              |
 |                          |                              |
 |——————————————————————————|—————舞台线————————————————————|
 |
 中轴线
 */
// EXTERNAL MODULE: ./pages/gallery/index.less
var gallery = __webpack_require__(114);

// CONCATENATED MODULE: ./pages/gallery/index.js
function gallery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { gallery_typeof = function _typeof(obj) { return typeof obj; }; } else { gallery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return gallery_typeof(obj); }

function gallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function gallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function gallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) gallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) gallery_defineProperties(Constructor, staticProps); return Constructor; }

function gallery_possibleConstructorReturn(self, call) { if (call && (gallery_typeof(call) === "object" || typeof call === "function")) { return call; } return gallery_assertThisInitialized(self); }

function gallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function gallery_getPrototypeOf(o) { gallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gallery_getPrototypeOf(o); }

function gallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) gallery_setPrototypeOf(subClass, superClass); }

function gallery_setPrototypeOf(o, p) { gallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gallery_setPrototypeOf(o, p); }






var gallery_Gallert =
/*#__PURE__*/
function (_Component) {
  gallery_inherits(Gallert, _Component);

  function Gallert(props) {
    gallery_classCallCheck(this, Gallert);

    return gallery_possibleConstructorReturn(this, gallery_getPrototypeOf(Gallert).call(this, props));
  }

  gallery_createClass(Gallert, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "gallery-wrapper"
      }, external_react_default.a.createElement(components_Gallery, null));
    }
  }]);

  return Gallert;
}(external_react_["Component"]);

/* harmony default export */ var pages_gallery = __webpack_exports__["default"] = (gallery_Gallert);

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("timeago.js");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("real-ip");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("date-format");

/***/ }),

/***/ 3:
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

/***/ 31:
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

/***/ 39:
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

/***/ 4:
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

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });