webpackHotUpdate(6,{

/***/ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./pages/Test/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown__ = __webpack_require__("./node_modules/_react-markdown@3.3.4@react-markdown/lib/react-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__("./node_modules/_marked@0.4.0@marked/lib/marked.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js__ = __webpack_require__("./node_modules/_highlight.js@9.12.0@highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_less__ = __webpack_require__("./pages/Test/test.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__test_less__);
var _jsxFileName = "F:\\myself\\ctrl\\next-blog-2\\next-blog\\pages\\Test\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




 // import './t.css';


var input = "\n## How about some code?\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n\nReact.render(\n  <Markdown source=\"# Your markdown here\" />,\n  document.getElementById('content')\n);\n```\n## json\n\n\n```json\n{\n  \"name\": \"Learning Guide\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A Vue.js project\",\n  \"author\": \"Brian Lee <cn_brian@163.com>\",\n  \"private\": true\n}\n\n```\n";
__WEBPACK_IMPORTED_MODULE_2_marked___default.a.setOptions({
  highlight: function highlight(code) {
    return __WEBPACK_IMPORTED_MODULE_3_highlight_js___default.a.highlightAuto(code).value;
  }
});
var output = __WEBPACK_IMPORTED_MODULE_2_marked___default()(input);

var Test =
/*#__PURE__*/
function (_Component) {
  _inherits(Test, _Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this));
  }

  _createClass(Test, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: output
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_markdown___default.a, {
        source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n\n```json\n{\n  \"name\": \"Learning Guide\",\n  \"version\": \"1.0.0\",\n  \"description\": \"A Vue.js project\",\n  \"author\": \"Brian Lee <cn_brian@163.com>\",\n  \"private\": true\n}\n\n```\n     ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }));
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Test);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Test\\index")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/_webpack@3.10.0@webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.c44a258aa08caba9978c.hot-update.js.map