(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-js-grid"] = factory();
	else
		root["vue-js-grid"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);
var isBuffer = __webpack_require__(24);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(27);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sign_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Comments",
  props: {
    baseURL: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    },
    nodeName: {
      type: String,
      required: true
    },
    maxUserNameLength: {
      type: String,
      default: "30"
    },
    maxCommentLength: {
      type: String,
      default: "1000"
    },
    initialMessageLimit: {
      type: String,
      default: "10"
    },
    maxLineLimit: {
      type: String,
      default: "40"
    },
    maxShowingDepth: {
      type: String,
      default: "5"
    },
    background: {
      type: String,
      default: "transparent"
    },
    commentBackgroundColor: {
      teype: String,
      default: "white"
    },
    commentTextColor: {
      teype: String,
      default: "#1d2129"
    },
    userNameColor: {
      teype: String,
      default: "rgb(6, 177, 183)"
    }
  },
  data: function data() {
    return {
      loading: true,
      showSignPanel: false,
      comments: [],
      newComment: "",
      styleShadow: {
        boxShadow: "2px -2px rgba(" + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + ",0.6)"
      },
      limit: parseInt(this.initialMessageLimit),
      alertMessage: "",
      alertClass: "",
      alert: false,
      idToken: null,
      userId: null,
      isAdmin: null,
      userName: "",
      expiresIn: null,
      auth: false,
      wrapperSize: "",
      requestLoading: false,
      logOutTimer: null
    };
  },

  methods: {
    checkAutoLogin: function checkAutoLogin() {
      var token = localStorage.getItem("commentToken");
      if (!token) {
        return;
      }
      var expirationDate = localStorage.getItem("commentExpirationDate");
      var now = new Date();
      var remainingTime = Math.floor((new Date(expirationDate).getTime() - now.getTime()) / 1000);
      if (now >= expirationDate) {
        return;
      }
      var userId = localStorage.getItem("commentUserId");
      var userName = localStorage.getItem("commentUserName");
      if (localStorage.getItem("commentAdmin") != "undefined") {
        var data = [token, userId, userName, remainingTime, true];
        this.signUser(data);
      } else {
        var _data = [token, userId, userName, remainingTime];
        this.signUser(_data);
      }
    },
    signUser: function signUser(data) {
      var _this = this;

      this.idToken = data[0];
      this.userId = data[1];
      this.userName = data[2];
      this.expiresIn = data[3];
      this.logOutTimer = setTimeout(function () {
        _this.clearAuth();
      }, this.expiresIn * 1000);
      this.isAdmin = data[4];
      this.auth = true;
      this.showSignPanel = false;
    },
    clearAuth: function clearAuth() {
      clearTimeout(this.logOutTimer);
      this.idToken = "";
      this.userId = "";
      this.userName = "";
      this.isAdmin = null;
      this.auth = false;
      localStorage.removeItem("commentToken");
      localStorage.removeItem("commentUserId");
      localStorage.removeItem("commentExpirationDate");
      localStorage.removeItem("commentUserName");
      localStorage.removeItem("commentAdmin");
    },
    updateLimit: function updateLimit() {
      this.limit += parseInt(this.initialMessageLimit);
    },
    resize: function resize(event) {
      if (this.newComment == "") {
        this.$refs.addComment.style.height = "auto";
        this.$refs.addComment.style.height = 32 + "px";
      } else {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
      }
    },
    addComment: function addComment() {
      var _this2 = this;

      if (this.auth) {
        if (this.filterNewComment != 0) {
          this.requestLoading = true;
          var commentObj = {
            name: this.filterUserName,
            comment: this.filterNewComment,
            user_id: this.userId,
            timestamp: Date.now().toString(),
            lineCount: this.filterNewCommentLineCount
          };
          __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(this.baseURL + "/commentsGrid/" + this.nodeName + "/comments.json" + "?auth=" + this.idToken, commentObj).then(function (res) {
            commentObj.id = res.data.name;
            var repliedObj = { user_id: _this2.userId };
            __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put(_this2.baseURL + "/commentsGrid/" + _this2.nodeName + "/replys/" + commentObj.id + ".json" + "?auth=" + _this2.idToken, repliedObj).then(function (res) {
              commentObj.depth = "commentsGrid/" + _this2.nodeName + "/comments/" + commentObj.id;
              _this2.comments.splice(0, 0, commentObj);
              _this2.clearAlert();
              _this2.newComment = "";
              _this2.resize();
            }).catch(function (err) {
              return _this2.setAlert("Unauthorized!\n", "fail");
            });
          }).catch(function (err) {
            return _this2.setAlert("İnvalid comment!\n", "fail");
          });
        } else {
          this.setAlert("You can't send empty comment!\n", "fail");
        }
      } else {
        this.showSignPanel = true;
      }
    },
    deleteFromParent: function deleteFromParent(index) {
      this.comments.splice(index, 1);
    },
    setAlert: function setAlert(message, style, type) {
      var _this3 = this;

      type == "append" ? this.alertMessage += message : this.alertMessage = message;
      this.alertClass = style;
      this.alert = true;
      this.requestLoading = false;
      setTimeout(function () {
        _this3.clearAlert();
      }, 5000);
    },
    clearAlert: function clearAlert() {
      this.requestLoading = false;
      this.alertMessage = "";
      this.alertClass = "";
      this.alert = false;
    }
  },
  computed: {
    remainigLetter: function remainigLetter() {
      return +this.maxCommentLength - this.newComment.length;
    },
    filterUserName: function filterUserName() {
      return this.userName.replace(/^ +/g, "").replace(/ +/g, " ").replace(/ +$/g, "");
    },
    filterNewComment: function filterNewComment() {
      return this.newComment.replace(/^\n+/g, "").replace(/(\n{2,})+/g, "\n\n").replace(/\n+$/g, "").replace(/( {30,})+/g, " ").replace(/ +$/g, "");
    },
    filterNewCommentLineCount: function filterNewCommentLineCount() {
      return this.filterNewComment.split("\n").length;
    }
  },
  watch: {
    loading: function loading() {
      var _this4 = this;

      this.$nextTick(function () {
        var a = void 0,
            b = void 0,
            c = void 0,
            d = 0;
        for (var i = 0; i < 10; i++) {
          a = Math.floor(Math.random() * (35 - 10)) + 10;
          b = Math.floor(Math.random() * (35 - 5)) + 5;
          c = Math.floor(Math.random() * (35 - 5)) + 5;
          d = Math.floor(Math.random() * (5 - 0)) + 0;
          _this4.$refs.svgAvatar.innerHTML += "<circle cx=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " cy=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " r='" + Math.round(Math.random() * 15) + "' fill='rgba(" + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.random() + ")'> <animate  attributeName=cx attributeType=XML dur=" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s values='" + a + " ; " + b + " ; " + a + " ; " + c + " ; " + a + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' repeatCount=indefinite></animate><animate attributeName=cy attributeType=XML dur=" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s values='" + c + "; " + a + "; " + b + " ; " + a + " ; " + c + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' repeatCount=indefinite></animate><animate attributeName=r values='" + d + " ; " + Math.random() * 15 + " ; " + Math.random() * 15 + " ; " + Math.random() * 15 + " ; " + d + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' dur='" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s' repeatCount=indefinite></animate></circle>";
        }
        if (_this4.$refs.wrapper != "undefined") {
          _this4.wrapperSize = _this4.$refs.wrapper.offsetWidth;
        }
      });
    }
  },
  components: {
    appWrapper: __WEBPACK_IMPORTED_MODULE_0__Comment_vue__["a" /* default */],
    signWrapper: __WEBPACK_IMPORTED_MODULE_1__Sign_vue__["a" /* default */]
  },
  created: function created() {
    var _this5 = this;

    this.checkAutoLogin();
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(this.baseURL + "/commentsGrid/" + this.nodeName + "/comments.json").then(function (res) {
      var data = res.data;
      for (var key in data) {
        var comment = data[key];
        comment.id = key;
        comment.depth = "commentsGrid/" + _this5.nodeName + "/comments/" + comment.id;
        _this5.comments.unshift(comment);
      }
      _this5.loading = false;
    }).catch(function (err) {
      return console.log(err);
    });
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sign_vue__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app-wrapper",
  props: {
    baseURL: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    },
    nodeName: {
      type: String,
      required: true
    },
    initialMessageLimit: {
      type: String,
      default: "10"
    },
    maxLineLimit: {
      type: String,
      default: "40"
    },
    maxShowingDepth: {
      type: String,
      default: "5"
    },
    maxCommentLength: {
      type: String,
      default: "1000"
    },
    maxUserNameLength: {
      type: String,
      default: "30"
    },
    name: String,
    comment: String,
    replies: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    auth: Boolean,
    id: String,
    timestamp: String,
    lineCount: Number,
    depth: String,
    depthLength: Number,
    idToken: String,
    userId: String,
    isAdmin: {
      type: Boolean,
      default: false
    },
    userName: String,
    nodeUserId: String,
    commentBackgroundColor: {
      teype: String,
      default: "white"
    },
    commentTextColor: {
      teype: String,
      default: "#1d2129"
    },
    userNameColor: {
      teype: String,
      default: "rgb(6, 177, 183)"
    },
    show: {
      type: Boolean,
      default: false
    },
    deleted: {
      type: Boolean,
      default: false
    },
    wrapperSize: String
  },
  data: function data() {
    return {
      showSignPanel: false,
      showReplies: false,
      showProp: this.show,
      showHideBar: false,
      deletedProp: this.deleted,
      replied: false,
      beforeReply: false,
      beforeUpdate: false,
      beforeDelete: false,
      filteredComment: "",
      updateHeight: 0,
      svgAvatarCheck: false,
      date: "",
      replyMessage: "",
      updateMessage: "",
      replys: [],
      mods: [],
      depthFromReplies: "",

      limit: parseInt(this.initialMessageLimit),
      alert: false,
      alertMessage: "",
      alertClass: "",
      hideMessage: false,
      outerWidth: 0,
      requestLoading: false,
      requestDelete: false,
      timeOutHolder: null
    };
  },

  methods: {
    signUser: function signUser(data) {
      this.$emit("sign-user", data);
    },
    closeHideBar: function closeHideBar(bool) {
      this.showHideBar = bool;
    },
    updateLimit: function updateLimit() {
      this.limit += parseInt(this.initialMessageLimit);
    },
    resize: function resize(event, from) {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
      if (from) {
        if (this.updateMessage == "" && this.$refs.addUpdate.style.height != 32) {
          this.$refs.addUpdate.style.height = 32 + "px";
        }
      } else {
        if (this.replyMessage == "" && this.$refs.addReply.style.height != 32) {
          this.$refs.addReply.style.height = 32 + "px";
        }
      }
    },
    handleBeforeReply: function handleBeforeReply() {
      var _this = this;

      this.clearAlert();
      this.beforeReply = !this.beforeReply;
      if (!this.svgAvatarCheck) {
        var a = void 0,
            b = void 0,
            c = void 0,
            d = 0;
        for (var i = 0; i < 10; i++) {
          a = Math.floor(Math.random() * (35 - 10)) + 10;
          b = Math.floor(Math.random() * (35 - 5)) + 5;
          c = Math.floor(Math.random() * (35 - 5)) + 5;
          d = Math.floor(Math.random() * (5 - 0)) + 0;
          this.$refs.svgReplyAvatar.innerHTML += "<circle cx=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " cy=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " r='" + Math.round(Math.random() * 15) + "' fill='rgba(" + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.random() + ")'> <animate  attributeName=cx attributeType=XML dur=" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s values='" + a + " ; " + b + " ; " + a + " ; " + c + " ; " + a + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' repeatCount=indefinite></animate><animate attributeName=cy attributeType=XML dur=" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s values='" + c + "; " + a + "; " + b + " ; " + a + " ; " + c + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' repeatCount=indefinite></animate><animate attributeName=r values='" + d + " ; " + Math.random() * 15 + " ; " + Math.random() * 15 + " ; " + Math.random() * 15 + " ; " + d + "' keyTimes='0 ; 0.25 ; 0.5 ; 0.75 ; 1' dur='" + (Math.floor(Math.random() * (7 - 3)) + 3) + "s' repeatCount=indefinite></animate></circle>";
        }
        this.svgAvatarCheck = true;
      }
      this.$nextTick(function () {
        _this.$refs.addReply.focus();
      });
    },
    reply: function reply() {
      var _this2 = this;

      if (this.auth) {
        if (this.filterNewComment.length != 0) {
          this.requestLoading = true;
          var replyObj = {
            name: this.filterUserName,
            comment: this.filterNewComment,
            user_id: this.userId,
            timestamp: Date.now().toString(),
            lineCount: this.filterNewCommentLineCount
          };
          __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(this.baseURL + "/commentsGrid/" + this.nodeName + "/replys/" + this.id + ".json" + "?auth=" + this.idToken, replyObj).then(function (res) {
            replyObj.id = res.data.name;
            var mods = _this2.mods;
            var key = _this2.nodeUserId;
            var obj = {};
            obj[key] = true;
            for (var i = 0, len = mods.length; i < len; i++) {
              for (var _key in mods[i]) {
                var key2 = _key;
                obj[key2] = true;
              }
            }
            var repliedObj = {
              replied: false,
              user_id: _this2.userId,
              mods: obj
            };
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(_this2.baseURL + "/commentsGrid/" + _this2.nodeName + "/replys/" + replyObj.id + ".json" + "?auth=" + _this2.idToken, repliedObj).then(function (res) {
              replyObj.depth = "commentsGrid/" + _this2.nodeName + "/replys/" + _this2.id + "/" + replyObj.id;
              _this2.replys.splice(0, 0, replyObj);
              _this2.replyMessage = "";
              _this2.$refs.addReply.style.height = 32 + "px";
              _this2.beforeReply = !_this2.beforeReply;
              if (!_this2.replied) {
                _this2.replied = true;
                if (!_this2.showReplies) {
                  _this2.showReplies = !_this2.showReplies;
                }
              }
              _this2.clearAlert();
            }).catch(function (err) {
              return _this2.setAlert("Unauthorized!\n", "fail");
            });
          }).catch(function (err) {
            _this2.setAlert("İnvalid comment or comment deleted!\n", "fail");
            setTimeout(function () {
              _this2.$emit("delete-row");
            }, 5000);
          });
        } else {
          this.setAlert("You can't send empty comment!\n", "fail");
        }
      } else {
        this.showSignPanel = true;
      }
    },
    handleBeforeUpdate: function handleBeforeUpdate() {
      var _this3 = this;

      this.beforeReply = false;
      this.beforeUpdate = true;
      this.updateMessage = this.filteredComment;
      this.$refs.addUpdate.style.height = this.updateHeight + "px";
      this.$nextTick(function () {
        _this3.$refs.addUpdate.focus();
      });
    },
    update: function update() {
      var _this4 = this;

      if (this.auth) {
        this.requestLoading = true;
        if (!this.isAdmin) {
          if (this.filterNewUpdate.length != 0) {
            var replyObj = {
              name: this.filterUserName,
              comment: this.filterNewUpdate,
              user_id: this.userId,
              lineCount: this.filterNewUpdateLineCount
            };
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.patch(this.baseURL + "/" + this.depth + ".json" + "?auth=" + this.idToken, replyObj).then(function (res) {
              _this4.clearAlert();
              _this4.filteredComment = _this4.filterNewUpdate;
              _this4.afterUpdate();
              setTimeout(function () {
                _this4.updateMessage = "";
              }, 3);
              _this4.beforeUpdate = false;
            }).catch(function (err) {
              _this4.setAlert("İnvalid comment or comment deleted!\n", "fail");
              setTimeout(function () {
                _this4.$emit("delete-row");
              }, 5000);
            });
          } else {
            this.setAlert("You can't send empty comment!\n", "fail");
          }
        } else {
          if (this.filterNewUpdate.length != 0) {
            var _replyObj = {
              comment: this.filterNewUpdate,
              lineCount: this.filterNewUpdateLineCount
            };
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.patch(this.baseURL + "/" + this.depth + ".json" + "?auth=" + this.idToken, _replyObj).then(function (res) {
              _this4.clearAlert();
              _this4.filteredComment = _this4.filterNewUpdate;
              _this4.afterUpdate();
              setTimeout(function () {
                _this4.updateMessage = "";
              }, 3);
              _this4.beforeUpdate = false;
            }).catch(function (err) {
              _this4.setAlert("İnvalid comment or comment deleted!\n", "fail");
              setTimeout(function () {
                _this4.$emit("delete-row");
              }, 5000);
            });
          } else {
            this.setAlert("You can't send empty comment!\n", "fail");
          }
        }
      } else {
        this.showSignPanel = true;
      }
    },
    showReply: function showReply() {
      this.replied = false;
      this.showReplies = !this.showReplies;
      this.showProp = !this.showProp;
    },
    handleBeforeDelete: function handleBeforeDelete() {
      var _this5 = this;

      clearTimeout(this.timeOutHolder);
      this.beforeDelete = !this.beforeDelete;
      this.timeOutHolder = setTimeout(function () {
        _this5.beforeDelete = false;
      }, 5000);
    },
    deleteComment: function deleteComment() {
      var _this6 = this;

      this.requestDelete = true;
      this.deletedProp = true;
      var splt = this.depth.split("/");
      var changeDept1 = splt[0] + "/" + splt[1] + "/" + splt[2] + "/" + splt[splt.length - 1];
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(this.baseURL + "/" + changeDept1 + ".json" + "?auth=" + this.idToken).catch(function (err) {
        return console.log(err);
      });
      var changedDepth2 = this.depth.replace("/comments/", "/replys/");
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.baseURL + "/" + changedDepth2 + ".json").then(function (res) {
        var data = res.data;
        for (var key in data) {
          if (key.startsWith("-")) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(_this6.baseURL + "/commentsGrid/" + _this6.nodeName + "/replys/" + key + ".json" + "?auth=" + _this6.idToken).catch(function (err) {
              return console.log(err);
            });
          }
        }
      }).catch(function (err) {
        return console.log(err);
      });
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(this.baseURL + "/" + changedDepth2 + ".json" + "?auth=" + this.idToken).then(function (res) {
        _this6.replys = [];
        _this6.$emit("delete-row");
      }).catch(function (err) {
        return console.log(err);
      });
    },
    deleteFromParent: function deleteFromParent(index) {
      this.replys.splice(index, 1);
    },
    setAlert: function setAlert(message, style, type) {
      var _this7 = this;

      type == "append" ? this.alertMessage += message : this.alertMessage = message;
      this.alertClass = style;
      this.alert = true;
      this.requestLoading = false;
      setTimeout(function () {
        _this7.clearAlert();
      }, 5000);
    },
    clearAlert: function clearAlert() {
      this.requestLoading = false;
      this.alertMessage = "";
      this.alertClass = "";
      this.alert = false;
    },
    afterUpdate: function afterUpdate() {
      if (this.filterNewUpdateLineCount > +this.maxLineLimit) {
        this.filteredComment = "";
        var splt = this.updateMessage.split("\n");
        for (var i = 0; i < splt.length; i++) {
          if (i < +this.maxLineLimit) {
            this.filteredComment += splt[i] + "\n";
          } else {
            this.filteredComment += splt[i] + " ";
          }
        }
      }
    }
  },
  computed: {
    viewWidth: function viewWidth() {
      return this.outerWidth;
    },
    remainigLetter: function remainigLetter() {
      return +this.maxCommentLength - this.replyMessage.length;
    },
    remainigUpdateLetter: function remainigUpdateLetter() {
      return +this.maxCommentLength - this.updateMessage.length;
    },
    getTimeDiff: function getTimeDiff() {
      var date1 = new Date(+this.timestamp);
      var date2 = new Date(Date.now());
      var yearDiff = Math.abs(date2.getFullYear() - date1.getFullYear());
      var monthDiff = Math.abs(date2.getMonth() - date1.getMonth());
      var dayDiff = Math.abs(date2.getDate() - date1.getDate());
      var hourDiff = Math.abs(date2.getHours() - date1.getHours());
      var minuteDiff = Math.abs(date2.getMinutes() - date1.getMinutes());

      return yearDiff != 0 && yearDiff == 1 ? "год назад" : yearDiff > 1 ? yearDiff + " года назад" : monthDiff != 0 && monthDiff == 1 ? "месяц назад" : monthDiff > 1 ? monthDiff + " мес. назад" : dayDiff != 0 && dayDiff == 1 ? "днем ранее" : dayDiff > 1 ? dayDiff + " дн. назад" : hourDiff != 0 && hourDiff == 1 ? "час назад" : hourDiff > 1 ? hourDiff + " час. назад" : minuteDiff != 0 && minuteDiff == 1 ? "минуту назад" : minuteDiff > 1 ? minuteDiff + " мин. назад" : "только что";
    },
    getTime: function getTime() {
      var date = new Date(+this.timestamp);
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      };
      return new Intl.DateTimeFormat("en-Us", options).format(date);
    },
    filterUserName: function filterUserName() {
      return this.userName.replace(/^ +/g, "").replace(/ +/g, " ").replace(/ +$/g, "");
    },
    filterNewComment: function filterNewComment() {
      return this.replyMessage.replace(/^ +/g, "").replace(/^\n+/g, "").replace(/(\n{2,})+/g, "\n\n").replace(/\n+$/g, "").replace(/( {30,})+/g, " ").replace(/ +$/g, "");
    },
    filterNewCommentLineCount: function filterNewCommentLineCount() {
      return this.filterNewComment.split("\n").length;
    },
    filterNewUpdate: function filterNewUpdate() {
      return this.updateMessage.replace(/^ +/g, "").replace(/^\n+/g, "").replace(/(\n{2,})+/g, "\n\n").replace(/\n+$/g, "").replace(/( {30,})+/g, " ").replace(/ +$/g, "");
    },
    filterNewUpdateLineCount: function filterNewUpdateLineCount() {
      return this.updateMessage.split("\n").length;
    }
  },
  watch: {
    show: function show() {
      var updateHeight = this.$refs.comment.clientHeight;
      if (updateHeight != 0) {
        this.updateHeight = updateHeight + 14;
      }
    },
    deleted: function deleted() {
      var _this8 = this;

      this.deletedProp = true;
      var splt = this.depth.split("/");
      var changeDept1 = splt[0] + "/" + splt[1] + "/" + splt[2] + "/" + splt[splt.length - 1];
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.baseURL + "/" + changeDept1 + ".json").then(function (res) {
        var data = res.data;
        for (var key in data) {
          if (key.startsWith("-")) {
            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(_this8.baseURL + "/commentsGrid/" + _this8.nodeName + "/replys/" + key + ".json" + "?auth=" + _this8.idToken).then(function (res) {
              _this8.$emit("delete-row");
              _this8.replys = [];
            }).catch(function (err) {
              return console.log(err);
            });
          }
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },
  components: {
    signWrapper: __WEBPACK_IMPORTED_MODULE_1__Sign_vue__["a" /* default */]
  },
  created: function created() {
    var _this9 = this;

    this.depthFromReplies = this.depth + "/" + this.id + "/reply";
    if (this.depthLength < +this.maxShowingDepth) {
      this.showReplies = true;
    }
    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(this.baseURL + "/commentsGrid/" + this.nodeName + "/replys/" + this.id + ".json").then(function (res) {
      var data = res.data;
      for (var key in data) {
        if (key.startsWith("-")) {
          var reply = data[key];
          reply.id = key;
          reply.depth = "commentsGrid/" + _this9.nodeName + "/replys/" + _this9.id + "/" + reply.id;
          _this9.replys.unshift(reply);
        } else if (key.startsWith("mods")) {
          var mod = data[key];
          _this9.mods.push(mod);
        }
      }
    }).catch(function (err) {
      return console.log(err);
    });
    if (this.lineCount > +this.maxLineLimit || this.lineCount != this.comment.split("\n").length) {
      var splt = this.comment.split("\n");
      for (var i = 0; i < splt.length; i++) {
        if (i < +this.maxLineLimit) {
          this.filteredComment += splt[i] + "\n";
        } else {
          this.filteredComment += splt[i] + " ";
        }
      }
    } else {
      this.filteredComment = this.comment;
    }
  },
  mounted: function mounted() {
    var _this10 = this;

    this.$nextTick(function () {
      for (var i = 0; i < 10; i++) {
        _this10.$refs.svgAvatar.innerHTML += "<circle cx=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " cy=" + (Math.floor(Math.random() * (35 - 5)) + 5) + " r='" + Math.round(Math.random() * 15) + "' fill='rgba(" + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.round(Math.random() * 244) + "," + Math.random() + ")'> </circle>";
      }
      var updateHeight = _this10.$refs.comment.clientHeight;
      if (updateHeight != 0) {
        _this10.updateHeight = updateHeight + 13;
      }
    });
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(28);
var buildURL = __webpack_require__(30);
var parseHeaders = __webpack_require__(31);
var isURLSameOrigin = __webpack_require__(32);
var createError = __webpack_require__(10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(33);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(34);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(29);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sign_vue__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b7c9bac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sign_vue__ = __webpack_require__(44);
function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b7c9bac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sign_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b7c9bac_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sign_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var INSTANCE = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});
/* harmony default export */ __webpack_exports__["a"] = ({
  name: "Sign",
  props: {
    baseURL: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    },
    maxUserNameLength: {
      type: String,
      default: "30"
    }
  },
  data: function data() {
    return {
      idTokenD: null,
      userIdD: null,
      expiresInD: null,
      signInBox: false,
      signUpBox: false,
      userEmail: "",
      userPassword: "",
      newUserName: "",
      newUserEmail: "",
      newUserPassword: "",
      newUserRePassword: "",
      requestLoading: false
    };
  },

  methods: {
    signUp: function signUp(event) {
      var _this = this;

      if (event) event.preventDefault();
      this.alertMessage = "";
      if (this.checkNewUserName != "pass") {
        this.$refs.namePlaceholder.classList.remove("shake");
        setTimeout(function () {
          _this.$refs.namePlaceholder.className += " shake";
        }, 1);
      }
      if (this.checkNewUserEmail != "pass") {
        this.$refs.emailPlaceholder.classList.remove("shake");
        setTimeout(function () {
          _this.$refs.emailPlaceholder.className += " shake";
        }, 1);
      }
      if (this.checkNewUserPassword != "pass") {
        this.$refs.passPlaceholder.classList.remove("shake");
        setTimeout(function () {
          _this.$refs.passPlaceholder.className += " shake";
        }, 1);
      }
      if (this.checkNewUserRePassword != "pass") {
        this.$refs.rePassPlaceholder.classList.remove("shake");
        setTimeout(function () {
          _this.$refs.rePassPlaceholder.className += " shake";
        });
      }
      if (this.checkAllPass) {
        this.alert = false;
        this.requestLoading = true;
        INSTANCE.post("/signupNewUser?key=" + this.apiKey, {
          email: this.newUserEmail,
          password: this.newUserPassword,
          returnSecureToken: true
        }).then(function (res) {
          _this.idTokenD = res.data.idToken;
          _this.userIdD = res.data.localId;
          _this.expiresInD = res.data.expiresIn;
          __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(_this.baseURL + "/commentUsers/" + res.data.localId + ".json?auth=" + res.data.idToken, {
            name: _this.filterNewUserName,
            email: _this.newUserEmail,
            user_id: _this.userIdD
          }).then(function (res) {
            var data = [_this.idTokenD, _this.userIdD, _this.filterNewUserName, _this.expiresInD, null];
            _this.signUser(data);
            _this.setLocalStorageItems(_this.idTokenD, _this.userIdD, _this.expiresInD, _this.filterNewUserName);
            _this.clearAlert();
            _this.clearSignPanel();
          }).catch(function (err) {
            _this.setAlert("Invalid Name or Email!\n", "fail");
          });
        }).catch(function (err) {
          _this.setAlert("Email address has been taken or invalid Password or Email adress!\n", "fail");
        });
      }
    },
    signIn: function signIn(event) {
      var _this2 = this;

      if (event) event.preventDefault();
      this.requestLoading = true;
      INSTANCE.post("/verifyPassword?key=" + this.apiKey, {
        email: this.userEmail,
        password: this.userPassword,
        returnSecureToken: true
      }).then(function (res) {
        _this2.idTokenD = res.data.idToken;
        _this2.userIdD = res.data.localId;
        _this2.expiresInD = res.data.expiresIn;
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(_this2.baseURL + "/commentUsers/" + res.data.localId + ".json" + "?auth=" + res.data.idToken).then(function (res) {
          var data = [_this2.idTokenD, _this2.userIdD, res.data.name, _this2.expiresInD, res.data.admin];
          _this2.signUser(data);
          _this2.setLocalStorageItems(_this2.idTokenD, _this2.userIdD, _this2.expiresInD, res.data.name, res.data.admin);
          _this2.clearAlert();
          _this2.clearSignPanel();
        }).catch(function (err) {
          return _this2.setAlert("Unauthorized!\n", "fail");
        });
      }).catch(function (err) {
        return _this2.setAlert("Wrong password or email!\n", "fail");
      });
    },
    signUser: function signUser(data) {
      this.$emit("sign-user", data);
    },
    setAlert: function setAlert(message, style, type) {
      var _this3 = this;

      type == "append" ? this.alertMessage += message : this.alertMessage = message;
      this.alertClass = style;
      this.alert = true;
      this.requestLoading = false;
      setTimeout(function () {
        _this3.clearAlert();
      }, 5000);
    },
    clearAlert: function clearAlert() {
      this.requestLoading = false;
      this.alertMessage = "";
      this.alertClass = "";
      this.alert = false;
    },
    clearSignPanel: function clearSignPanel() {
      this.showSignPanel = false;
      this.signInBox = false;
      this.signUpBox = false;
      this.userEmail = "";
      this.userPassword = "";
      this.newUserName = "";
      this.newUserEmail = "";
      this.newUserPassword = "";
      this.newUserRePassword = "";
    },
    clearSignBox: function clearSignBox(from) {
      var _this4 = this;

      if (from == "signIn") {
        this.signInBox = false;
        this.signUpBox = true;
        this.$nextTick(function () {
          _this4.$refs.newUserName.focus();
        });
      } else {
        this.signInBox = true;
        this.signUpBox = false;
        this.$nextTick(function () {
          _this4.$refs.email.focus();
        });
      }
      this.clearAlert();
    },
    setLocalStorageItems: function setLocalStorageItems(token, userId, expDate, userName, admin) {
      var now = new Date();
      var expirationDate = new Date(now.getTime() + expDate * 1000);
      localStorage.setItem("commentToken", token);
      localStorage.setItem("commentUserId", userId);
      localStorage.setItem("commentExpirationDate", expirationDate);
      localStorage.setItem("commentUserName", userName);
      localStorage.setItem("commentAdmin", admin);
    }
  },
  computed: {
    filterNewUserName: function filterNewUserName() {
      return this.newUserName.replace(/^ +/g, "").replace(/ +/g, " ").replace(/ +$/g, "");
    },
    checkNewUserName: function checkNewUserName() {
      return this.newUserName.length > 0 ? this.newUserName.length <= 30 ? "pass" : "fail" : "default";
    },
    checkNewUserEmail: function checkNewUserEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.newUserEmail.length > 0 ? re.test(this.newUserEmail) ? "pass" : "fail" : "default";
    },
    checkNewUserPassword: function checkNewUserPassword() {
      return this.newUserPassword.length > 0 ? this.newUserPassword.length >= 8 ? "pass" : "fail" : "default";
    },
    checkNewUserRePassword: function checkNewUserRePassword() {
      return this.newUserRePassword.length > 0 ? this.newUserRePassword == this.newUserPassword ? "pass" : "fail" : "default";
    },
    checkFailedName: function checkFailedName() {
      return this.checkNewUserName == "fail" ? "Invalid name length! (Max: " + this.maxUserNameLength + ")" : "Username";
    },
    checkFailedEmail: function checkFailedEmail() {
      return this.checkNewUserEmail == "fail" ? "Invalid email address!" : "Email";
    },
    checkFailedPassword: function checkFailedPassword() {
      return this.checkNewUserPassword == "fail" ? "Minnimum 8 character!" : "Password";
    },
    checkFailedRePassword: function checkFailedRePassword() {
      return this.checkNewUserRePassword == "fail" ? "Passwords doesn't match!" : "Confirm Password";
    },
    checkAllPass: function checkAllPass() {
      return this.checkNewUserName == "pass" && this.checkNewUserEmail == "pass" && this.checkNewUserPassword == "pass" && this.checkNewUserRePassword == "pass" ? true : false;
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comments_vue__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["default"] = ({
  install (Vue) {
    Vue.component('CommentGrid', __WEBPACK_IMPORTED_MODULE_0__Comments_vue__["a" /* default */])
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comments_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05a57f90_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comments_vue__ = __webpack_require__(46);
function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05a57f90"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comments_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05a57f90_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comments_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("41518780", content, true, {});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".loader[data-v-05a57f90]{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;grid-auto-rows:minmax(150px,auto);padding:5px}#loader[data-v-05a57f90]{justify-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.comments[data-v-05a57f90] .alert{grid-column:1/3;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;grid-gap:5px;border-top-left-radius:40px;border-bottom-right-radius:40px;border-width:3px 0;border-style:solid;color:#fff;font-size:13px;padding-top:15px;padding-bottom:15px;padding-left:15px;white-space:pre-line;text-align:center}.comments[data-v-05a57f90] .alert.alert{border-color:rgba(0,0,0,.12)!important}.comments[data-v-05a57f90] .success{background-color:#4caf50!important}.comments[data-v-05a57f90] .pass{border-color:#4caf50!important}.comments[data-v-05a57f90] .info{background-color:#2196f3!important}.comments[data-v-05a57f90] .default{border-color:#2196f3!important}.comments[data-v-05a57f90] .alert.fail{background-color:#ff5252!important}.comments[data-v-05a57f90] .fail{border-color:#ff5252!important}.comments[data-v-05a57f90] ::-webkit-input-placeholder{color:#92b1b3!important;text-align:left}.comments[data-v-05a57f90] ::-moz-placeholder{color:#92b1b3!important;text-align:center}.comments[data-v-05a57f90] :-ms-input-placeholder{color:#92b1b3!important;text-align:center}.comments[data-v-05a57f90] :-moz-placeholder{color:#92b1b3!important;text-align:center}.comments[data-v-05a57f90]{overflow:hidden;border-radius:4px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.comments[data-v-05a57f90] .comments{overflow-x:auto}.comments>.innerWrapper[data-v-05a57f90]{overflow-x:auto;padding:10px 0}.comments[data-v-05a57f90] .noCommentWrapper{display:-ms-grid;display:grid;padding-top:15px}.comments[data-v-05a57f90] .noCommentText{color:#2a5ebe;cursor:pointer;text-align:center;border:1px solid #2a5ebe;padding:8px 10px;font-weight:700;border-radius:18px;border-top-right-radius:0;border-bottom-left-radius:0;transition:all .1s linear;-moz-transition:linear .1s all;-webkit-transition:all .1s linear}.comments[data-v-05a57f90] .noCommentText:hover{color:#fff;background-color:#2a5ebe}.comments[data-v-05a57f90] .userName{grid-column:1/3;display:-ms-grid;display:grid;-ms-grid-columns:1fr .001fr;grid-template-columns:1fr .001fr;font-size:14px;line-height:14px;margin-top:2px;font-weight:700;color:#06b1b7;word-break:break-word}.comments[data-v-05a57f90] .userName>.logOut{-ms-grid-column:2;grid-column:2;white-space:nowrap;color:#92b1b3;cursor:pointer;margin-right:10px;transition:color .1s linear;-moz-transition:color linear .1s;-webkit-transition:color .1s linear}.comments[data-v-05a57f90] .userName>.logOut:hover{color:#06b1b7}.comments[data-v-05a57f90] .dot{color:#c2c6cc;font-size:13px;white-space:nowrap}.comments[data-v-05a57f90] .avatar>svg{height:44px;width:44px;transition:.3s;-moz-transition:.3s;-webkit-transition:.3s}.comments[data-v-05a57f90] .addComment{display:-ms-grid;display:grid;grid-auto-rows:minmax(0,auto);grid-column-gap:10px;padding-top:2px}.comments[data-v-05a57f90] .commentBox{display:-ms-grid;display:grid;-ms-grid-columns:minmax(200px,auto) .2fr;grid-template-columns:minmax(200px,auto) .2fr;grid-auto-rows:minmax(0,-webkit-max-content);grid-auto-rows:minmax(0,max-content);grid-auto-rows:minmax(0,-moz-max-content);grid-row-gap:10px;overflow:auto}.comments[data-v-05a57f90] .commentBox>textarea{color:#2a2e2e;justify-self:stretch;height:120px;padding:1rem;font-size:16px;line-height:24px;border-radius:8px;border:1px solid rgba(204,212,216,.8);overflow:hidden;resize:none}.comments[data-v-05a57f90] .commentBox>button,.comments[data-v-05a57f90] .commentBox>textarea{box-sizing:border-box;outline:none;transition:all .1s linear;-moz-transition:linear .1s all;-webkit-transition:all .1s linear}.comments[data-v-05a57f90] .commentBox>button{font-family:Roboto,sans-serif;background-color:#2a5ebe;-ms-flex-item-align:end;-ms-grid-row-align:end;align-self:end;color:#fff;max-height:32px;height:32px;padding:8px 10px;font-size:13px;line-height:16px;font-weight:700;border-radius:18px;border:none;cursor:pointer;z-index:100}.comments[data-v-05a57f90] .commentBox>button:hover{background-color:#254b91}.comments[data-v-05a57f90] .remainingLetter{justify-self:end;-ms-grid-row-align:start;align-self:start;box-sizing:border-box;height:32px;display:-ms-grid;display:grid;border-top-left-radius:18px;padding-left:3px;padding-right:22px;margin-top:-42px;margin-right:-22px;z-index:99}.comments[data-v-05a57f90] .remainingLetter>span{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;font-size:11px;line-height:11px;padding:3px;color:#eee}.comments[data-v-05a57f90] .updateLimit{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr}.comments[data-v-05a57f90] .limit{color:#06b1b7;font-weight:700;justify-self:center;font-size:14px;line-height:14px;box-sizing:border-box;border-radius:18px;padding:8px 10px;cursor:pointer;transition:all .1s linear;-moz-transition:linear .1s all;-webkit-transition:all .1s linear}.comments[data-v-05a57f90] .limit:hover{color:#fff;background-color:#2196f3}.comments[data-v-05a57f90] .fade-enter{opacity:0}.comments[data-v-05a57f90] .fade-enter-active,.comments[data-v-05a57f90] .fade-leave-active{transition:opacity .3s;-moz-transition:opacity .3s;-webkit-transition:opacity .3s}.comments[data-v-05a57f90] .fade-leave-active{opacity:0}@media screen and (max-width:480px){.comments[data-v-05a57f90] .avatar>svg{height:20px;width:20px}.comments[data-v-05a57f90] .nameWrapper>.time{overflow:hidden;width:100%;text-overflow:ellipsis}}@media (hover:none){.comments[data-v-05a57f90] ::-webkit-scrollbar{-webkit-appearance:none!important;width:5px!important;height:5px!important;background-color:rgba(204,212,216,.2)!important}.comments[data-v-05a57f90] ::-webkit-scrollbar-thumb{background:rgba(204,212,216,.7)!important}.comments[data-v-05a57f90] .commentBox{overflow:unset}}.comments[data-v-05a57f90] .requestLoading{display:inline-block;border:4px solid transparent;border-left-color:#fff;border-radius:50%;width:10px;height:10px;animation:requestLoading-spin-data-v-05a57f90 .5s linear infinite}@keyframes requestLoading-spin-data-v-05a57f90{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comment_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c71ab2d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comment_vue__ = __webpack_require__(45);
function injectStyle (ssrContext) {
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c71ab2d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c71ab2d6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comment_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("78b071bb", content, true, {});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".comments[data-v-c71ab2d6]{font-family:Roboto,sans-serif;overflow:hidden;border-radius:4px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.comments[data-v-c71ab2d6] .wrapper{display:-ms-grid;display:grid;-ms-grid-columns:.001fr 1fr;grid-template-columns:.001fr 1fr;grid-auto-rows:minmax(0,auto);grid-column-gap:20px;padding-top:15px}.comments[data-v-c71ab2d6] .commentWrapper{display:-ms-grid;display:grid;grid-auto-rows:minmax(0,auto);grid-auto-columns:minmax(-webkit-min-content,-webkit-max-content);grid-auto-columns:minmax(min-content,max-content);grid-auto-columns:minmax(-moz-min-content,-moz-max-content);grid-gap:10px}.comments[data-v-c71ab2d6] .hiddenMessage{color:#999;word-break:break-word;font-size:14px}.comments[data-v-c71ab2d6] .nameWrapper{display:-ms-grid;display:grid;-ms-grid-columns:(.001fr)[4];grid-template-columns:repeat(4,.001fr);grid-auto-columns:minmax(0,auto);grid-column-gap:5px;line-height:13px;white-space:nowrap;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.comments[data-v-c71ab2d6] .nameWrapper>.name{color:#06b1b7;font-size:14px;line-height:14px;font-weight:700;white-space:nowrap}.comments[data-v-c71ab2d6] .nameWrapper>.time{cursor:help;font-size:13px;color:#92b1b3;white-space:nowrap;text-decoration:none}.comments[data-v-c71ab2d6] .nameWrapper>.expand{cursor:pointer;display:-ms-grid;display:grid;width:22px;height:13px;border-radius:3px;color:#ccd4d8;box-shadow:inset 0 0 0 2px #ccd4d8;transition:color .1s linear;-moz-transition:color linear .1s;-webkit-transition:color .1s linear}.comments[data-v-c71ab2d6] .nameWrapper>.expand:hover{color:#2196f3}.comments[data-v-c71ab2d6] .nameWrapper>.expand>span{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;justify-self:center;font-size:20px}.comments[data-v-c71ab2d6] .comment{white-space:pre-wrap;overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;background:#fff;color:#1d2129;font-size:16px;line-height:24px;-webkit-font-kerning:normal;font-kerning:normal;min-width:-webkit-min-content;min-width:min-content;min-width:-moz-min-content;max-width:-webkit-max-content;max-width:max-content;max-width:-moz-max-content}.comments[data-v-c71ab2d6] .reply{display:-ms-grid;display:grid;-ms-grid-columns:(.001fr)[7];grid-template-columns:repeat(7,.001fr);grid-auto-columns:minmax(0,auto);grid-auto-rows:minmax(0,auto);grid-column-gap:5px;font-size:13px;white-space:nowrap;color:#92b1b3;margin-top:-8px;transition:color .1s linear;-moz-transition:color linear .1s;-webkit-transition:color .1s linear;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.comments[data-v-c71ab2d6] .reply>div{cursor:pointer}.comments[data-v-c71ab2d6] .reply>div:hover{color:#2196f3}.comments[data-v-c71ab2d6] .reply>.delete{display:-ms-grid;display:grid;box-sizing:border-box;height:-webkit-min-content;height:-moz-min-content;height:min-content}.comments[data-v-c71ab2d6] .reply>.delete:hover,.comments[data-v-c71ab2d6] .reply>.delete>.deleteText:hover{color:#ff5252}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt{display:-ms-grid;display:grid;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;grid-auto-rows:minmax(0,auto);grid-gap:3px;color:#ff5252;box-sizing:border-box;background-color:#fff;padding:3px 13px;border-radius:4px;height:-webkit-max-content;height:-moz-max-content;height:max-content;border-top-left-radius:18px;border-top-right-radius:18px;border:1px solid rgba(204,212,216,.8);margin-top:-60px;margin-left:-24px;z-index:999}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>label{grid-column:1/3;-ms-grid-row:2;grid-row:2;font-weight:700;margin-left:-7px}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>button{-ms-grid-row:1;grid-row:1;font-size:11px;font-family:Roboto,sans-serif;background-color:#2a5ebe;color:#fff;font-size:12px;line-height:15px;border-radius:18px;border:none;cursor:pointer;outline:none;transition:all .1s linear;-moz-transition:linear .1s all;-webkit-transition:all .1s linear}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>.yesPrompt{border:1px solid rgba(42,94,190,.9);background-color:rgba(42,94,190,.9);color:fff}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>.yesPrompt:hover{border:1px solid #ff5252;background-color:#ff5252;color:#fff}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>.noPrompt{border:1px solid rgba(42,94,190,.9);background-color:#fff;color:rgba(42,94,190,.9)}.comments[data-v-c71ab2d6] .reply>.delete>.deletePrompt>.noPrompt:hover{border:1px solid rgba(42,94,190,.9);background-color:rgba(42,94,190,.9);color:#fff}.comments[data-v-c71ab2d6] .popUp-enter-active{animation:pop-up-data-v-c71ab2d6 .2s ease-out forwards}.comments[data-v-c71ab2d6] .popUp-leave-active{animation:pop-out-data-v-c71ab2d6 .2s ease-out forwards}@keyframes pop-up-data-v-c71ab2d6{0%{margin-top:-45px;opacity:0}to{margin-top:-60px;opacity:1}}@keyframes pop-out-data-v-c71ab2d6{0%{margin-top:-60px;opacity:1}to{opacity:0;margin-top:-45px}}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(25);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(40);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(41);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(35);
var dispatchRequest = __webpack_require__(36);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(37);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(38);
var combineURLs = __webpack_require__(39);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("68f1a730", content, true, {});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".signBox[data-v-2b7c9bac]{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;grid-auto-rows:minmax(0,auto)}.firstSign[data-v-2b7c9bac]{display:-ms-grid;display:grid;-ms-grid-columns:1fr .001fr 1fr;grid-template-columns:1fr .001fr 1fr;grid-auto-rows:minmax(0,auto);white-space:nowrap;grid-gap:5px}.firstSign>button[data-v-2b7c9bac],.signIn>button[data-v-2b7c9bac],.signUp>button[data-v-2b7c9bac]{width:100%;height:100%;font-family:Roboto,sans-serif;background-color:rgba(42,94,190,.9);color:#fff;box-sizing:border-box;padding:8px 10px;font-size:13px;line-height:16px;font-weight:700;border-radius:4px;border:none;cursor:pointer;outline:none;transition:all .1s linear;-moz-transition:linear .1s all;-webkit-transition:all .1s linear}.firstSign>.secondary[data-v-2b7c9bac],.signIn.secondary>button[data-v-2b7c9bac],.signUp.secondary>button[data-v-2b7c9bac]{border:2px solid rgba(42,94,190,.9);background-color:#fff;color:rgba(42,94,190,.9)}.firstSign>button[data-v-2b7c9bac]:hover,.signIn>button[data-v-2b7c9bac]:hover,.signUp>button[data-v-2b7c9bac]:hover{background-color:rgba(37,75,145,.9);color:#fff}.signBoxes>form[data-v-2b7c9bac]{display:-ms-grid;display:grid;-ms-grid-columns:.001fr;grid-template-columns:.001fr;grid-auto-columns:minmax(auto,-webkit-max-content);grid-auto-columns:minmax(auto,-moz-max-content);grid-auto-columns:minmax(auto,max-content);grid-auto-rows:minmax(0,auto);grid-gap:10px;grid-column-gap:5px;margin-bottom:10px;padding-top:10px}.inputBoxes[data-v-2b7c9bac]{-ms-grid-column:1;grid-column:1;display:-ms-grid;display:grid;-ms-grid-columns:.001fr;grid-template-columns:.001fr;grid-auto-rows:minmax(0,auto)}.inputBoxes>input[data-v-2b7c9bac]{font-family:Roboto,sans-serif;box-sizing:border-box;background-color:#fff;border:none;border-bottom:2px solid #333;line-height:12px;outline:none;padding:10px 8px 2px;height:30px;text-overflow:ellipsis;margin-left:1px;margin-top:2px;border-top-left-radius:49px;border-top-right-radius:49px}.placeholder[data-v-2b7c9bac]{-ms-grid-column:1;grid-column:1;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;justify-self:center;font-size:12px;margin-top:-21px;pointer-events:none;transition:all .2s ease;-moz-transition:.2s ease all;-webkit-transition:all .2s ease}.inputBoxes>input:focus~label[data-v-2b7c9bac]{margin-top:-60px}.inputBoxes>.upperHolder[data-v-2b7c9bac],.inputBoxes>input:focus~label[data-v-2b7c9bac]{color:#fff;box-sizing:border-box;font-size:12px;padding:2px 5px;border-radius:18px;background-color:#2a5ebe}.inputBoxes>.upperHolder[data-v-2b7c9bac]{margin-top:-60px!important}.inputBoxes>.placeholder.pass[data-v-2b7c9bac]{background-color:#4caf50!important}.inputBoxes>.placeholder.fail[data-v-2b7c9bac],.inputBoxes>.placeholder.pass[data-v-2b7c9bac]{margin-top:-60px!important;color:#fff;box-sizing:border-box;font-size:12px;padding:2px 5px;border-radius:18px}.inputBoxes>.placeholder.fail[data-v-2b7c9bac]{background-color:#ff5252!important}.bar[data-v-2b7c9bac]{position:relative}.bar[data-v-2b7c9bac]:after,.bar[data-v-2b7c9bac]:before{content:\"\";height:3px;width:0;bottom:0;position:absolute;background:#2a5ebe;transition:all .2s ease;-moz-transition:.2s ease all;-webkit-transition:all .2s ease}.bar[data-v-2b7c9bac]:before{left:50%}.bar[data-v-2b7c9bac]:after{right:50%}.inputBoxes>input:focus~.bar[data-v-2b7c9bac]:before,input:focus~.bar[data-v-2b7c9bac]:after{width:50%}.or[data-v-2b7c9bac]{-ms-grid-column:3;grid-column:3;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;justify-self:center}.signIn[data-v-2b7c9bac]{grid-row:1/3}.signUp[data-v-2b7c9bac]{grid-row:1/5;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;justify-self:stretch}@media (hover:none){.signIn.secondary>button[data-v-2b7c9bac]:hover,.signUp.secondary>button[data-v-2b7c9bac]:hover{background-color:#fff;color:rgba(42,94,190,.9)}}input[data-v-2b7c9bac]:-webkit-autofill{animation-name:autofill-data-v-2b7c9bac;animation-fill-mode:both;-webkit-animation-name:autofill-data-v-2b7c9bac;-webkit-animation-fill-mode:both}@keyframes autofill-data-v-2b7c9bac{to{color:#1d2129;border-top-left-radius:49px;border-top-right-radius:49px;background-color:#fff}}.shake[data-v-2b7c9bac]{animation-name:shakeKeyframe-data-v-2b7c9bac;animation-duration:.8s;animation-iteration-count:1}@keyframes shakeKeyframe-data-v-2b7c9bac{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"signBox"},[_c('div',{staticClass:"firstSign"},[(!_vm.signUpBox && !_vm.signInBox)?_c('button',{on:{"click":function($event){_vm.clearSignBox('signUp')}}},[_vm._v("Log IN")]):_vm._e(),_vm._v(" "),(!_vm.signUpBox && !_vm.signInBox)?_c('span',{staticClass:"dot",staticStyle:{"align-self":"center"}},[_vm._v("•")]):_vm._e(),_vm._v(" "),(!_vm.signInBox && !_vm.signUpBox)?_c('button',{staticClass:"secondary",on:{"click":function($event){_vm.clearSignBox('signIn')}}},[_vm._v("Sign UP")]):_vm._e()]),_vm._v(" "),(_vm.signInBox)?_c('div',{staticClass:"signBoxes"},[_c('form',{attrs:{"method":"post"},on:{"submit":function($event){_vm.signIn($event);}}},[_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userEmail),expression:"userEmail"}],ref:"email",staticClass:"default",attrs:{"type":"email","name":"userEmail","id":"userEmail","spellcheck":"false","required":""},domProps:{"value":(_vm.userEmail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userEmail=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{staticClass:"placeholder",class:_vm.userEmail.length!=0 ? 'upperHolder':''},[_vm._v("Email")])]),_vm._v(" "),_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userPassword),expression:"userPassword"}],staticClass:"default",attrs:{"type":"password","name":"userPassword","id":"userPassword","required":""},domProps:{"value":(_vm.userPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userPassword=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{staticClass:"placeholder",class:_vm.userPassword.length!=0 ? 'upperHolder':''},[_vm._v("Password")])]),_vm._v(" "),_c('div',{staticClass:"signIn",staticStyle:{"grid-column":"2"}},[(_vm.requestLoading)?_c('button',{on:{"click":function($event){$event.preventDefault();if($event.target !== $event.currentTarget){ return null; }}}},[_c('div',{staticClass:"requestLoading"})]):_c('button',[_vm._v("Log IN")])]),_vm._v(" "),_c('span',{staticClass:"dot or",staticStyle:{"grid-row":"1/3"}},[_vm._v("•")]),_vm._v(" "),_c('div',{staticClass:"signIn secondary",staticStyle:{"grid-column":"4"}},[_c('button',{staticClass:"signIn",on:{"click":function($event){$event.preventDefault();_vm.clearSignBox('signIn')}}},[_vm._v("Sign UP")])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.alert)?_c('div',{key:_vm.alertClass,staticClass:"alert",class:_vm.alertClass,staticStyle:{"grid-column":"1/5"}},[_c('div',[_vm._v(_vm._s(_vm.alertMessage))])]):_vm._e()])],1)]):_vm._e(),_vm._v(" "),(_vm.signUpBox)?_c('div',{staticClass:"signBoxes"},[_c('form',{attrs:{"method":"post"},on:{"submit":function($event){_vm.signUp($event);}}},[_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.newUserName),expression:"newUserName",modifiers:{"lazy":true}}],ref:"newUserName",class:_vm.checkNewUserName,attrs:{"type":"text","name":"newUserName","id":"newUserName","required":"","spellcheck":"false"},domProps:{"value":(_vm.newUserName)},on:{"change":function($event){_vm.newUserName=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{ref:"namePlaceholder",staticClass:"placeholder",class:_vm.checkNewUserName},[_vm._v(_vm._s(_vm.checkFailedName))])]),_vm._v(" "),_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.newUserEmail),expression:"newUserEmail",modifiers:{"lazy":true}}],class:_vm.checkNewUserEmail,attrs:{"type":"email","name":"newUserEmail","id":"newUserEmail","required":"","spellcheck":"false"},domProps:{"value":(_vm.newUserEmail)},on:{"change":function($event){_vm.newUserEmail=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{ref:"emailPlaceholder",staticClass:"placeholder",class:_vm.checkNewUserEmail},[_vm._v(_vm._s(_vm.checkFailedEmail))])]),_vm._v(" "),_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.newUserPassword),expression:"newUserPassword",modifiers:{"lazy":true}}],class:_vm.checkNewUserPassword,attrs:{"type":"password","name":"newUserPassword","id":"newUserPassword","required":""},domProps:{"value":(_vm.newUserPassword)},on:{"change":function($event){_vm.newUserPassword=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{ref:"passPlaceholder",staticClass:"placeholder",class:_vm.checkNewUserPassword},[_vm._v(_vm._s(_vm.checkFailedPassword))])]),_vm._v(" "),_c('div',{staticClass:"inputBoxes"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.newUserRePassword),expression:"newUserRePassword",modifiers:{"lazy":true}}],class:_vm.checkNewUserRePassword,attrs:{"type":"password","name":"newUserRePassword","id":"newUserRePassword","required":""},domProps:{"value":(_vm.newUserRePassword)},on:{"change":function($event){_vm.newUserRePassword=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"bar"}),_vm._v(" "),_c('label',{ref:"rePassPlaceholder",staticClass:"placeholder",class:_vm.checkNewUserRePassword},[_vm._v(_vm._s(_vm.checkFailedRePassword))])]),_vm._v(" "),_c('div',{staticClass:"signUp",staticStyle:{"grid-column":"2"}},[(_vm.requestLoading)?_c('button',{on:{"click":function($event){$event.preventDefault();if($event.target !== $event.currentTarget){ return null; }}}},[_c('div',{staticClass:"requestLoading"})]):_c('button',[_vm._v("Sign Up")])]),_vm._v(" "),_c('span',{staticClass:"dot or",staticStyle:{"grid-row":"1/5"}},[_vm._v("•")]),_vm._v(" "),_c('div',{staticClass:"signUp secondary",staticStyle:{"grid-column":"4"}},[_c('button',{on:{"click":function($event){$event.preventDefault();_vm.clearSignBox('signUp')}}},[_vm._v("Log IN")])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.alert)?_c('div',{key:_vm.alertClass,staticClass:"alert",class:_vm.alertClass,staticStyle:{"grid-column":"1/5"}},[_c('div',[_vm._v(_vm._s(_vm.alertMessage))])]):_vm._e()])],1)]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comments"},[_c('div',{staticClass:"wrapper",on:{"mouseenter":function($event){_vm.showHideBar = true; _vm.$emit('close-hide-bar',false);},"mouseleave":function($event){_vm.showHideBar = false; _vm.$emit('close-hide-bar',true);}}},[_vm._m(0),_vm._v(" "),(_vm.hideMessage)?_c('div',{staticClass:"commentWrapper"},[_c('div',{staticClass:"nameWrapper"},[_c('div',{staticClass:"name",style:({color: _vm.userNameColor})},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('span',{staticClass:"dot"},[_vm._v("•")]),_vm._v(" "),_c('a',{staticClass:"time",attrs:{"title":_vm.getTime}},[_vm._v(_vm._s(_vm.getTimeDiff))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHideBar || _vm.wrapperSize < 1024),expression:"showHideBar || wrapperSize < 1024"}],staticClass:"expand",on:{"click":function($event){_vm.hideMessage=false}}},[_c('span',{attrs:{"title":"Show Comment"}},[_vm._v("+")])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showHideBar && ! _vm.wrapperSize < 1024),expression:"!showHideBar && ! wrapperSize < 1024"}],staticStyle:{"width":"22px"}})]),_vm._v(" "),_vm._m(1)]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hideMessage),expression:"!hideMessage"}],staticClass:"commentWrapper"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.beforeUpdate),expression:"!beforeUpdate"}],staticClass:"nameWrapper"},[_c('div',{staticClass:"name",style:({color: _vm.userNameColor})},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('span',{staticClass:"dot"},[_vm._v("•")]),_vm._v(" "),_c('span',{staticClass:"time",attrs:{"title":_vm.getTime}},[_vm._v(_vm._s(_vm.getTimeDiff))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHideBar || _vm.wrapperSize < 1024),expression:"showHideBar || wrapperSize < 1024"}],staticClass:"expand",on:{"click":function($event){_vm.hideMessage=true}}},[_c('span',{attrs:{"title":"Hide Comment"}},[_vm._v("−")])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showHideBar && !_vm.wrapperSize < 1024),expression:"!showHideBar && !wrapperSize < 1024"}],staticStyle:{"width":"22px"}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.beforeUpdate),expression:"!beforeUpdate"}],ref:"comment",staticClass:"comment",style:({background: _vm.commentBackgroundColor, color: _vm.commentTextColor})},[_vm._v(_vm._s(_vm.filteredComment))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.beforeUpdate),expression:"beforeUpdate"}],key:"commentBox",staticClass:"commentBox"},[_c('div',{staticClass:"userName",style:({color: _vm.userNameColor})},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.updateMessage),expression:"updateMessage"}],ref:"addUpdate",staticClass:"addComment",style:({background:_vm.commentBackgroundColor, color: _vm.commentTextColor, height: _vm.updateHeight+'px'}),attrs:{"name":"addUpdate","placeholder":"Update message","spellcheck":"false","aria-label":"Add Comment"},domProps:{"value":(_vm.updateMessage)},on:{"keyup":function($event){_vm.resize($event,true)},"input":function($event){if($event.target.composing){ return; }_vm.updateMessage=$event.target.value}}}),_vm._v(" "),(_vm.requestLoading)?_c('button',{attrs:{"aria-label":"Update"}},[_c('div',{staticClass:"requestLoading"})]):_c('button',{attrs:{"aria-label":"Update"},on:{"click":_vm.update}},[_vm._v("Update")]),_vm._v(" "),_c('div',{staticClass:"remainingLetter",style:({ background: _vm.remainigUpdateLetter<0 ? 'rgba(255, 82, 82,1)' :'rgba(42, 94, 190, 1)'})},[_c('span',[_vm._v(_vm._s(_vm.remainigUpdateLetter))])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.alert)?_c('div',{key:_vm.alertClass,staticClass:"alert",class:_vm.alertClass,staticStyle:{"align-self":"start","margin-top":"-5px","margin-bottom":"7px"}},[_c('div',[_vm._v(_vm._s(_vm.alertMessage))])]):_vm._e()])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.beforeUpdate),expression:"beforeUpdate"}],staticClass:"reply"},[_c('div',{staticStyle:{"margin-top":"-8px"},on:{"click":function($event){_vm.beforeUpdate = false}}},[_vm._v("Newer mind")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.beforeUpdate),expression:"!beforeUpdate"}],staticClass:"reply"},[_c('div',{on:{"click":function($event){_vm.handleBeforeReply()}}},[_vm._v(_vm._s(_vm.beforeReply ? 'Передумал' : 'Ответить '))]),_vm._v(" "),(_vm.replys.length!=0)?_c('span',{staticClass:"dot"},[_vm._v("•")]):_vm._e(),_vm._v(" "),(_vm.replys.length!=0)?_c('div',{on:{"click":_vm.showReply}},[_vm._v(_vm._s(_vm.showReplies ? 'Свернуть ответы' : 'Показать ответы ('+_vm.replys.length+')'))]):_vm._e(),_vm._v(" "),(_vm.userId==_vm.nodeUserId || _vm.isAdmin)?_c('span',{staticClass:"dot"},[_vm._v("•")]):_vm._e(),_vm._v(" "),(_vm.userId==_vm.nodeUserId || _vm.isAdmin)?_c('div',{on:{"click":function($event){_vm.handleBeforeUpdate();}}},[_vm._v("Update")]):_vm._e(),_vm._v(" "),(_vm.userId==_vm.nodeUserId || _vm.isAdmin)?_c('span',{staticClass:"dot"},[_vm._v("•")]):_vm._e(),_vm._v(" "),(_vm.userId==_vm.nodeUserId || _vm.isAdmin)?_c('div',{staticClass:"delete"},[_c('div',{staticClass:"deleteText",on:{"click":function($event){_vm.handleBeforeDelete();}}},[_vm._v("Delete")]),_vm._v(" "),_c('transition',{attrs:{"name":"popUp"}},[(_vm.beforeDelete)?_c('div',{staticClass:"deletePrompt"},[_c('label',[_vm._v("Are you sure?")]),_vm._v(" "),(_vm.requestDelete)?_c('button',{attrs:{"aria-label":"Update"}},[_c('div',{staticClass:"requestLoading"})]):_c('button',{staticClass:"yesPrompt",attrs:{"aria-label":"Yes"},on:{"click":function($event){_vm.deleteComment();}}},[_vm._v("Yes")]),_vm._v(" "),(_vm.requestDelete)?_c('button',{staticClass:"noPrompt",attrs:{"aria-label":"No"}},[_vm._v("No")]):_c('button',{staticClass:"noPrompt",attrs:{"aria-label":"No"},on:{"click":function($event){_vm.beforeDelete=false}}},[_vm._v("No")])]):_vm._e()])],1):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.beforeReply),expression:"beforeReply"}]},[_c('div',{key:"addComment",staticClass:"addComment"},[_c('div',{staticClass:"avatar"}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showSignPanel && !_vm.auth || _vm.auth ),expression:"!showSignPanel && !auth || auth "}],key:"commentBox",staticClass:"commentBox"},[_c('div',{staticClass:"userName",style:({color: _vm.userNameColor})},[_vm._v(_vm._s(_vm.userName))]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.replyMessage),expression:"replyMessage"}],ref:"addReply",staticClass:"addComment",style:({background:_vm.commentBackgroundColor, color: _vm.commentTextColor}),attrs:{"name":"addReply","placeholder":"Add new reply","spellcheck":"false","aria-label":"Add Reply"},domProps:{"value":(_vm.replyMessage)},on:{"keyup":function($event){_vm.resize($event)},"input":function($event){if($event.target.composing){ return; }_vm.replyMessage=$event.target.value}}}),_vm._v(" "),(_vm.requestLoading)?_c('button',{attrs:{"aria-label":"Reply"}},[_c('div',{staticClass:"requestLoading"})]):_c('button',{attrs:{"aria-label":"Reply"},on:{"click":_vm.reply}},[_vm._v("Reply")]),_vm._v(" "),_c('div',{staticClass:"remainingLetter",style:({ background: _vm.remainigLetter<0 ? 'rgba(255, 82, 82,1)' :'rgba(42, 94, 190, 1)'})},[_c('span',[_vm._v(_vm._s(_vm.remainigLetter))])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.alert)?_c('div',{key:_vm.alertClass,staticClass:"alert",class:_vm.alertClass,staticStyle:{"align-self":"start","margin-top":"-5px"}},[_c('div',[_vm._v(_vm._s(_vm.alertMessage))])]):_vm._e()])],1),_vm._v(" "),(_vm.showSignPanel && !_vm.auth)?_c('sign-wrapper',{attrs:{"baseURL":_vm.baseURL,"apiKey":_vm.apiKey,"maxUserNameLength":_vm.maxUserNameLength},on:{"sign-user":_vm.signUser}}):_vm._e()],1)]),_vm._v(" "),_c('transition-group',{attrs:{"appear":"","name":"fade","mode":"out-in"}},_vm._l((_vm.replys),function(reply,index){return (index < _vm.limit)?_c('app-wrapper',{directives:[{name:"show",rawName:"v-show",value:(_vm.showReplies),expression:"showReplies"}],key:reply.id,attrs:{"baseURL":_vm.baseURL,"apiKey":_vm.apiKey,"show":_vm.showProp,"deleted":_vm.deletedProp,"maxUserNameLength":_vm.maxUserNameLength,"maxCommentLength":_vm.maxCommentLength,"maxShowingDepth":_vm.maxShowingDepth,"maxLineLimit":_vm.maxLineLimit,"id":reply.id,"timestamp":reply.timestamp,"lineCount":reply.lineCount,"nodeUserId":reply.user_id,"nodeName":_vm.nodeName,"name":reply.name,"comment":reply.comment,"replies":reply.reply,"depth":reply.depth,"auth":_vm.auth,"userId":_vm.userId,"idToken":_vm.idToken,"isAdmin":_vm.isAdmin,"userName":_vm.userName,"commentBackgroundColor":_vm.commentBackgroundColor,"commentTextColor":_vm.commentTextColor,"userNameColor":_vm.userNameColor,"depthLength":_vm.depthLength+1,"wrapperSize":_vm.wrapperSize},on:{"delete-row":function($event){_vm.deleteFromParent(index)},"sign-user":_vm.signUser,"close-hide-bar":_vm.closeHideBar}}):_vm._e()})),_vm._v(" "),(_vm.limit < _vm.replys.length && _vm.showReplies)?_c('div',{staticClass:"updateLimit",on:{"click":_vm.updateLimit}},[_c('span',{staticClass:"limit"},[_vm._v("Show more reply")])]):_vm._e()],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar"},[_c('img',{attrs:{"src":"https://i.snag.gy/gKOClI.jpg","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hiddenMessage"},[_c('i',[_vm._v("[ Сообщение скрыто ]")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('div',{staticClass:"loader"}):_c('div',{ref:"wrapper",staticClass:"comments",style:({background:_vm.background})},[_c('div',{staticClass:"innerWrapper"},[_c('div',{key:"addComment",staticClass:"addComment"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showSignPanel && !_vm.auth || _vm.auth ),expression:"!showSignPanel && !auth || auth "}],key:"commentBox",staticClass:"commentBox"},[_c('div',{staticClass:"userName",style:({color: _vm.userNameColor})},[_vm._v("\n            "+_vm._s(_vm.userName)+"\n            "),(_vm.auth)?_c('div',{staticClass:"logOut",on:{"click":function($event){_vm.clearAuth()}}},[_vm._v("Log out")]):_vm._e()]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.newComment),expression:"newComment"}],ref:"addComment",staticClass:"addComment",style:({background:_vm.commentBackgroundColor, color: _vm.commentTextColor}),attrs:{"name":"addComment","placeholder":"Вам слово...","spellcheck":"false","aria-label":"Add comment"},domProps:{"value":(_vm.newComment)},on:{"keyup":_vm.resize,"input":function($event){if($event.target.composing){ return; }_vm.newComment=$event.target.value}}}),_vm._v(" "),(_vm.requestLoading)?_c('button',{attrs:{"aria-label":"Send"}},[_c('div',{staticClass:"requestLoading"},[_vm._v("Добавить комментарий")])]):_c('button',{attrs:{"aria-label":"Send"},on:{"click":_vm.addComment}},[_vm._v("Send")]),_vm._v(" "),_c('div',{staticClass:"remainingLetter",style:({ background: _vm.remainigLetter<0 ? 'rgba(255, 82, 82,1)' :'rgba(42, 94, 190, 1)'})},[_c('span',[_vm._v(_vm._s(_vm.remainigLetter))])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.alert)?_c('div',{key:_vm.alertClass,staticClass:"alert",class:_vm.alertClass,staticStyle:{"align-self":"start","margin-top":"-5px"}},[_c('div',[_vm._v(_vm._s(_vm.alertMessage))])]):_vm._e()])],1),_vm._v(" "),(_vm.showSignPanel && !_vm.auth)?_c('sign-wrapper',{attrs:{"baseURL":_vm.baseURL,"apiKey":_vm.apiKey,"maxUserNameLength":_vm.maxUserNameLength},on:{"sign-user":_vm.signUser}}):_vm._e()],1),_vm._v(" "),_c('transition-group',{attrs:{"appear":"","name":"fade","mode":"out-in","tag":"div"}},[_vm._l((_vm.comments),function(item,index){return (index < _vm.limit)?_c('app-wrapper',{key:item.id,attrs:{"baseURL":_vm.baseURL,"apiKey":_vm.apiKey,"id":item.id,"timestamp":item.timestamp,"lineCount":item.lineCount,"maxUserNameLength":_vm.maxUserNameLength,"maxCommentLength":_vm.maxCommentLength,"maxShowingDepth":_vm.maxShowingDepth,"maxLineLimit":_vm.maxLineLimit,"nodeUserId":item.user_id,"nodeName":_vm.nodeName,"name":item.name,"comment":item.comment,"replies":item.reply,"depth":item.depth,"depthLength":1,"initialMessageLimit":_vm.initialMessageLimit,"auth":_vm.auth,"userId":_vm.userId,"idToken":_vm.idToken,"isAdmin":_vm.isAdmin,"userName":_vm.userName,"commentBackgroundColor":_vm.commentBackgroundColor,"commentTextColor":_vm.commentTextColor,"userNameColor":_vm.userNameColor,"wrapperSize":_vm.wrapperSize.toString()},on:{"delete-row":function($event){_vm.deleteFromParent(index)},"sign-user":_vm.signUser}}):_vm._e()}),_vm._v(" "),(_vm.comments.length<1)?_c('div',{key:"noComment",staticClass:"noCommentWrapper",on:{"click":function($event){_vm.$refs.addComment.focus()}}},[_c('span',{staticClass:"noCommentText"},[_vm._v("Be the first to comment.")])]):_vm._e()],2),_vm._v(" "),(_vm.limit < _vm.comments.length)?_c('div',{staticClass:"updateLimit",on:{"click":_vm.updateLimit}},[_c('span',{staticClass:"limit"},[_vm._v("Show more comment")])]):_vm._e()],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map