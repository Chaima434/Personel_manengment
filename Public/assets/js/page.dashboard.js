/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./src/js/page.dashboard.js":
/*!**********************************!*\
  !*** ./src/js/page.dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

(function () {
  'use strict';

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window['moment-range'].extendMoment(moment);
  $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
    $(e.target).removeClass('active');
  });
  Charts.init();

  var TotalSales = function TotalSales(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'SALES OVER TIME'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16
        }
      },
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10,
            callback: function callback(item) {
              return "$" + item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "</span>";
          }
        }
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = range.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _moment = _step.value;
        data.push({
          y: getRandomInt(2, 40),
          x: _moment.toDate()
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var data = {
      datasets: [{
        label: "Total Sales",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TotalVisitors = function TotalVisitors(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'VISITORS OVER TIME'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16
        }
      },
      barRoundness: 1.2,
      barThickness: 8,
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return a + "k";
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          offset: true,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = range.by('days')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _moment2 = _step2.value;
        data.push({
          y: getRandomInt(10, 30),
          x: _moment2.toDate()
        });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var data = {
      datasets: [{
        label: "Total Visitors",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var RepeatCustomerRate = function RepeatCustomerRate(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          tension: 0
        }
      },
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'CUSTOMERS'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            autoSkipPadding: 0,
            padding: 4,
            maxTicksLimit: 4,
            callback: function callback(item) {
              return item + "%";
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "%</span>";
          }
        }
      }
    }, options);
    var firstTimeData = [];
    var returningData = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = range.by('days')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _moment3 = _step3.value;
        firstTimeData.push({
          y: getRandomInt(0, 5),
          x: _moment3.toDate()
        });
        returningData.push({
          y: getRandomInt(5, 10),
          x: _moment3.toDate()
        });
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var data = {
      datasets: [{
        label: "First time",
        data: firstTimeData,
        borderWidth: 2,
        borderColor: settings.colors.primary[400],
        backgroundColor: settings.colors.primary[400],
        pointBackgroundColor: settings.colors.primary[400]
      }, {
        label: "Returning",
        data: returningData,
        borderWidth: 2,
        borderColor: settings.colors.success[400],
        backgroundColor: settings.colors.success[400],
        pointBackgroundColor: settings.colors.success[400]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TotalOrders = function TotalOrders(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDERS OVER TIME'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            callback: function callback(item) {
              return item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>";
          }
        }
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = range.by('days')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _moment4 = _step4.value;
        data.push({
          y: getRandomInt(0, 2),
          x: _moment4.toDate()
        });
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    var data = {
      datasets: [{
        label: "Total Orders",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var AverageOrderValue = function AverageOrderValue(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'ORDER VALUE'
      },
      legend: {
        display: true,
        align: 'start',
        labels: {
          usePointStyle: false,
          padding: 16,
          boxWidth: 16
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10,
            callback: function callback(item) {
              return "$" + item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 2,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "</span>";
          }
        }
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = range.by('days')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _moment5 = _step5.value;
        data.push({
          y: getRandomInt(0, 50),
          x: _moment5.toDate()
        });
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    var data = {
      datasets: [{
        label: "Order Value",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var VisitsByDevice = function VisitsByDevice(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function title(a, e) {
            return e.labels[a[0].index];
          },
          label: function label(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + " visits</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{
        data: [267, 184, 0],
        backgroundColor: [settings.colors.success[400], settings.colors.primary[500], settings.colors.gray[300]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    };
    Charts.create(id, type, options, data);
  };

  var EarningsTraffic = function EarningsTraffic(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Traffic",
        data: [10, 2, 5, 15, 10, 12, 15, 25, 22, 30, 25, 40]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Products = function Products(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = arguments.length > 3 ? arguments[3] : undefined;
    options = Chart.helpers.merge({
      elements: {
        line: {
          fill: 'start',
          backgroundColor: settings.charts.colors.area,
          tension: 0,
          borderWidth: 1
        },
        point: {
          pointStyle: 'circle',
          radius: 5,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[700],
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          display: false
        }],
        xAxes: [{
          display: false
        }]
      }
    }, options);
    data = data || {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings",
        data: [400, 200, 450, 460, 220, 380, 800]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Courses = function Courses(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        line: {
          borderColor: settings.colors.success[700],
          backgroundColor: settings.hexToRGB(settings.colors.success[100], 0.5)
        },
        point: {
          borderColor: settings.colors.success[700]
        }
      }
    }, options);
    Products(id, type, options);
  };

  var LocationDoughnut = function LocationDoughnut(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function title(a, e) {
            return e.labels[a[0].index];
          },
          label: function label(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["United States", "United Kingdom", "Germany", "India"],
      datasets: [{
        data: [25, 25, 15, 35],
        backgroundColor: [settings.colors.success[400], settings.colors.danger[400], settings.colors.primary[500], settings.colors.gray[300]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TrafficBar = function TrafficBar(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return a + "k";
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    };
    Charts.create(id, type, options, data);
  };

  $('.stats-chart').each(function (index, element) {
    var ctx = element.getContext('2d');
    var stats_data = [];

    for (var i = 6; i >= 0; i--) {
      stats_data.push(getRandomInt(100, 300));
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
        datasets: [{
          data: stats_data,
          borderWidth: 2,
          borderColor: settings.colors.primary[400],
          backgroundColor: settings.colors.primary[50],
          pointBackgroundColor: settings.colors.primary[400]
        }]
      },
      options: {
        elements: {
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        legend: {
          display: false,
          labels: {
            display: false
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false // zeroLineColor: colors.border_color

            },
            ticks: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false // zeroLineColor: colors.border_color

            },
            ticks: {
              display: false
            }
          }]
        }
      }
    });
  }); ///////////////////
  // Create Charts //
  ///////////////////

  TotalSales('#totalSalesChart');
  TotalVisitors('#totalVisitorsChart');
  RepeatCustomerRate('#repeatCustomerRateChart');
  TotalOrders('#totalOrdersChart');
  AverageOrderValue('#averageOrderValueChart');
  VisitsByDevice('#visitsByDeviceChart');
  TrafficBar('#trafficBarChart');
  EarningsTraffic('#earningsTrafficChart');
  LocationDoughnut('#locationDoughnutChart');
  Products('#productsChart');
  Courses('#coursesChart');
})();

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./src/js/page.dashboard.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demi/Documents/GitHub/flowdash/src/js/page.dashboard.js */"./src/js/page.dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS5kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiTWF0aCIsIm1heCIsIndpbmRvdyIsIiQiLCJlIiwiQ2hhcnRzIiwiVG90YWxTYWxlcyIsInR5cGUiLCJvcHRpb25zIiwidGl0bGUiLCJkaXNwbGF5IiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJwb3NpdGlvbiIsInRleHQiLCJsZWdlbmQiLCJhbGlnbiIsImxhYmVscyIsInVzZVBvaW50U3R5bGUiLCJwYWRkaW5nIiwiYm94V2lkdGgiLCJlbGVtZW50cyIsImxpbmUiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwic2V0dGluZ3MiLCJhcmVhIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsInN0ZXBTaXplIiwiY2FsbGJhY2siLCJ4QXhlcyIsImdyaWRMaW5lcyIsInRpbWUiLCJ1bml0IiwiZGlzcGxheUZvcm1hdHMiLCJkYXkiLCJtYXhUaWNrc0xpbWl0IiwiYXV0b1NraXAiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwidCIsImEiLCJvIiwiciIsImRhdGEiLCJzdGFydCIsIm1vbWVudCIsImVuZCIsInJhbmdlIiwieSIsImdldFJhbmRvbUludCIsIngiLCJkYXRhc2V0cyIsIlRvdGFsVmlzaXRvcnMiLCJiYXJSb3VuZG5lc3MiLCJiYXJUaGlja25lc3MiLCJvZmZzZXQiLCJSZXBlYXRDdXN0b21lclJhdGUiLCJ0ZW5zaW9uIiwiYXV0b1NraXBQYWRkaW5nIiwiaXRlbSIsImZpcnN0VGltZURhdGEiLCJyZXR1cm5pbmdEYXRhIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwiVG90YWxPcmRlcnMiLCJBdmVyYWdlT3JkZXJWYWx1ZSIsIlZpc2l0c0J5RGV2aWNlIiwiaG92ZXJCb3JkZXJDb2xvciIsIndoaXRlIiwiRWFybmluZ3NUcmFmZmljIiwiUHJvZHVjdHMiLCJwb2ludCIsInBvaW50U3R5bGUiLCJyYWRpdXMiLCJob3ZlclJhZGl1cyIsIkNvdXJzZXMiLCJMb2NhdGlvbkRvdWdobnV0IiwiVHJhZmZpY0JhciIsImN0eCIsImVsZW1lbnQiLCJzdGF0c19kYXRhIiwiaSIsImVuYWJsZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4wJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgfVxuXG4gIHdpbmRvd1snbW9tZW50LXJhbmdlJ10uZXh0ZW5kTW9tZW50KG1vbWVudCk7XG4gICAgXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdoaWRlLmJzLnRhYicsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gIH0pXG5cbiAgQ2hhcnRzLmluaXQoKVxuXG4gIHZhciBUb3RhbFNhbGVzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRleHQ6ICdTQUxFUyBPVkVSIFRJTUUnXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICB1c2VQb2ludFN0eWxlOiBmYWxzZSxcbiAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICBib3hXaWR0aDogMTYsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgZmlsbDogJ3N0YXJ0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNoYXJ0cy5jb2xvcnMuYXJlYVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBzdGVwU2l6ZTogMTAsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyBpdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XG4gICAgICAgICAgICAgIGRheTogJ0QvTU0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJyArIG8gKyBcIjwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IFtdXG5cbiAgICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcbiAgICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cbiAgICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcbiAgICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcblxuICAgIC8vIENyZWF0ZSB0aGUgZ3JhcGggZGF0YVxuICAgIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSB2YWx1ZSBmb3IgZWFjaCBkYXlcbiAgICBmb3IgKGxldCBtb21lbnQgb2YgcmFuZ2UuYnkoJ2RheXMnKSkge1xuICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50KDIsIDQwKSxcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIlRvdGFsIFNhbGVzXCIsXG4gICAgICAgIGRhdGFcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBUb3RhbFZpc2l0b3JzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAncm91bmRlZEJhcicsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRleHQ6ICdWSVNJVE9SUyBPVkVSIFRJTUUnXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICB1c2VQb2ludFN0eWxlOiBmYWxzZSxcbiAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICBib3hXaWR0aDogMTYsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYXJSb3VuZG5lc3M6IDEuMixcbiAgICAgIGJhclRoaWNrbmVzczogOCxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKCEoYSAlIDEwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYSArIFwia1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9mZnNldDogdHJ1ZSxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdW5pdDogJ2RheScsXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xuICAgICAgICAgICAgICBkYXk6ICdEL01NJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0ZXBTaXplOiAyLFxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogN1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiazwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IFtdXG5cbiAgICAvLyBDcmVhdGUgYSBkYXRlIHJhbmdlIGZvciB0aGUgbGFzdCA3IGRheXNcbiAgICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cbiAgICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcbiAgICB2YXIgcmFuZ2UgPSBtb21lbnQucmFuZ2Uoc3RhcnQsIGVuZClcblxuICAgIC8vIENyZWF0ZSB0aGUgZ3JhcGggZGF0YVxuICAgIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSB2YWx1ZSBmb3IgZWFjaCBkYXlcbiAgICBmb3IgKGxldCBtb21lbnQgb2YgcmFuZ2UuYnkoJ2RheXMnKSkge1xuICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgeTogZ2V0UmFuZG9tSW50KDEwLCAzMCksXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJUb3RhbCBWaXNpdG9yc1wiLFxuICAgICAgICBkYXRhXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgUmVwZWF0Q3VzdG9tZXJSYXRlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICB0ZW5zaW9uOiAwLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBmb250Q29sb3I6ICdyZ2JhKDU0LCA3NiwgMTAyLCAwLjU0KScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgdGV4dDogJ0NVU1RPTUVSUydcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIHVzZVBvaW50U3R5bGU6IGZhbHNlLFxuICAgICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICAgIGJveFdpZHRoOiAxNixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b1NraXBQYWRkaW5nOiAwLFxuICAgICAgICAgICAgcGFkZGluZzogNCxcbiAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbSArIFwiJVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XG4gICAgICAgICAgICAgIGRheTogJ0QvTU0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiJTwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZmlyc3RUaW1lRGF0YSA9IFtdXG4gICAgdmFyIHJldHVybmluZ0RhdGEgPSBbXVxuXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XG4gICAgZm9yIChsZXQgbW9tZW50IG9mIHJhbmdlLmJ5KCdkYXlzJykpIHtcbiAgICAgIGZpcnN0VGltZURhdGEucHVzaCh7XG4gICAgICAgIHk6IGdldFJhbmRvbUludCgwLCA1KSxcbiAgICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgICB9KVxuXG4gICAgICByZXR1cm5pbmdEYXRhLnB1c2goe1xuICAgICAgICB5OiBnZXRSYW5kb21JbnQoNSwgMTApLFxuICAgICAgICB4OiBtb21lbnQudG9EYXRlKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiRmlyc3QgdGltZVwiLFxuICAgICAgICBkYXRhOiBmaXJzdFRpbWVEYXRhLFxuICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzQwMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNDAwXSxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzQwMF1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiUmV0dXJuaW5nXCIsXG4gICAgICAgIGRhdGE6IHJldHVybmluZ0RhdGEsXG4gICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNDAwXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s0MDBdLFxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNDAwXVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIFRvdGFsT3JkZXJzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRleHQ6ICdPUkRFUlMgT1ZFUiBUSU1FJ1xuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBhbGlnbjogJ3N0YXJ0JyxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgdXNlUG9pbnRTdHlsZTogZmFsc2UsXG4gICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgYm94V2lkdGg6IDE2LFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBzdGVwU2l6ZTogMSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XG4gICAgICAgICAgICAgIGRheTogJ0QvTU0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RlcFNpemU6IDIsXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0gW11cblxuICAgIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xuICAgIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxuICAgIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBkYXRhXG4gICAgLy8gSXRlcmF0ZSB0aGUgZGF0ZSByYW5nZSBhbmQgYXNzaWduIGEgcmFuZG9tIHZhbHVlIGZvciBlYWNoIGRheVxuICAgIGZvciAobGV0IG1vbWVudCBvZiByYW5nZS5ieSgnZGF5cycpKSB7XG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICB5OiBnZXRSYW5kb21JbnQoMCwgMiksXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJUb3RhbCBPcmRlcnNcIixcbiAgICAgICAgZGF0YVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIEF2ZXJhZ2VPcmRlclZhbHVlID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRleHQ6ICdPUkRFUiBWQUxVRSdcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIHVzZVBvaW50U3R5bGU6IGZhbHNlLFxuICAgICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICAgIGJveFdpZHRoOiAxNixcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgc3RlcFNpemU6IDEwLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgdGltZToge1xuICAgICAgICAgICAgdW5pdDogJ2RheScsXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xuICAgICAgICAgICAgICBkYXk6ICdEL01NJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0ZXBTaXplOiAyLFxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogNyxcbiAgICAgICAgICAgIGF1dG9Ta2lwOiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JCcgKyBvICsgXCI8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSBbXVxuXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gICAgdmFyIHN0YXJ0ID0gbW9tZW50KCkuc3VidHJhY3QoNiwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyA3IGRheXMgYWdvXG4gICAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGdyYXBoIGRhdGFcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XG4gICAgZm9yIChsZXQgbW9tZW50IG9mIHJhbmdlLmJ5KCdkYXlzJykpIHtcbiAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgIHk6IGdldFJhbmRvbUludCgwLCA1MCksXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJPcmRlciBWYWx1ZVwiLFxuICAgICAgICBkYXRhXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgVmlzaXRzQnlEZXZpY2UgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdkb3VnaG51dCcsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIHRpdGxlOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5sYWJlbHNbYVswXS5pbmRleF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gdCArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdICsgXCIgdmlzaXRzPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJEZXNrdG9wXCIsIFwiTW9iaWxlXCIsIFwiVGFibGV0XCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFsyNjcsIDE4NCwgMF0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW3NldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzQwMF0sIHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sIHNldHRpbmdzLmNvbG9ycy5ncmF5WzMwMF1dLFxuICAgICAgICBob3ZlckJvcmRlckNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs4MDBdIDogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cbiAgXG4gIHZhciBFYXJuaW5nc1RyYWZmaWMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGZpbGw6ICdzdGFydCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jaGFydHMuY29sb3JzLmFyZWFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKCEoYSAlIDEwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyBhICsgXCJrXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JCcgKyBvICsgXCJrPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiVHJhZmZpY1wiLFxuICAgICAgICBkYXRhOiBbMTAsIDIsIDUsIDE1LCAxMCwgMTIsIDE1LCAyNSwgMjIsIDMwLCAyNSwgNDBdXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgUHJvZHVjdHMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9LCBkYXRhKSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGZpbGw6ICdzdGFydCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jaGFydHMuY29sb3JzLmFyZWEsXG4gICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgICBob3ZlclJhZGl1czogNSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNzAwXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBkYXRhID0gZGF0YSB8fCB7XG4gICAgICBsYWJlbHM6IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJFYXJuaW5nc1wiLFxuICAgICAgICBkYXRhOiBbNDAwLCAyMDAsIDQ1MCwgNDYwLCAyMjAsIDM4MCwgODAwXVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIENvdXJzZXMgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s3MDBdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuaGV4VG9SR0Ioc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbMTAwXSwgMC41KVxuICAgICAgICB9LFxuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s3MDBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgUHJvZHVjdHMoaWQsIHR5cGUsIG9wdGlvbnMpXG4gIH1cblxuICB2YXIgTG9jYXRpb25Eb3VnaG51dCA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2RvdWdobnV0Jywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgdGl0bGU6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmxhYmVsc1thWzBdLmluZGV4XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0ICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBlLmRhdGFzZXRzWzBdLmRhdGFbYS5pbmRleF0gKyBcIiU8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIlVuaXRlZCBTdGF0ZXNcIiwgXCJVbml0ZWQgS2luZ2RvbVwiLCBcIkdlcm1hbnlcIiwgXCJJbmRpYVwiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbMjUsIDI1LCAxNSwgMzVdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtzZXR0aW5ncy5jb2xvcnMuc3VjY2Vzc1s0MDBdLCBzZXR0aW5ncy5jb2xvcnMuZGFuZ2VyWzQwMF0sIHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sIHNldHRpbmdzLmNvbG9ycy5ncmF5WzMwMF1dLFxuICAgICAgICBob3ZlckJvcmRlckNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs4MDBdIDogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgVHJhZmZpY0JhciA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JvdW5kZWRCYXInLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBiYXJSb3VuZG5lc3M6IDEuMixcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgaWYgKCEoYSAlIDEwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gYSArIFwia1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBvICsgXCJrPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6IFwiU2FsZXNcIixcbiAgICAgICAgZGF0YTogWzI1LCAyMCwgMzAsIDIyLCAxNywgMTAsIDE4LCAyNiwgMjgsIDI2LCAyMCwgMzJdXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICAkKCcuc3RhdHMtY2hhcnQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgIGxldCBjdHggPSBlbGVtZW50LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgc3RhdHNfZGF0YSA9IFtdXG5cbiAgICBmb3IgKHZhciBpID0gNjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHN0YXRzX2RhdGEucHVzaChnZXRSYW5kb21JbnQoMTAwLCAzMDApKTtcbiAgICB9XG5cbiAgICBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAnbGluZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczpcbiAgICAgICAgW1xuICAgICAgICBcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsXG4gICAgICAgIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIlxuICAgICAgICBdLFxuICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICBkYXRhOiBzdGF0c19kYXRhLFxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs0MDBdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTBdLFxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs0MDBdXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBlbGVtZW50czogeyBwb2ludDogeyByYWRpdXM6IDAgfSB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsczogeyBkaXNwbGF5OiBmYWxzZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAvLyB6ZXJvTGluZUNvbG9yOiBjb2xvcnMuYm9yZGVyX2NvbG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgLy8gemVyb0xpbmVDb2xvcjogY29sb3JzLmJvcmRlcl9jb2xvclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIENyZWF0ZSBDaGFydHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgVG90YWxTYWxlcygnI3RvdGFsU2FsZXNDaGFydCcpXG4gIFRvdGFsVmlzaXRvcnMoJyN0b3RhbFZpc2l0b3JzQ2hhcnQnKVxuICBSZXBlYXRDdXN0b21lclJhdGUoJyNyZXBlYXRDdXN0b21lclJhdGVDaGFydCcpXG4gIFRvdGFsT3JkZXJzKCcjdG90YWxPcmRlcnNDaGFydCcpXG4gIEF2ZXJhZ2VPcmRlclZhbHVlKCcjYXZlcmFnZU9yZGVyVmFsdWVDaGFydCcpXG4gIFZpc2l0c0J5RGV2aWNlKCcjdmlzaXRzQnlEZXZpY2VDaGFydCcpXG5cbiAgVHJhZmZpY0JhcignI3RyYWZmaWNCYXJDaGFydCcpXG4gIEVhcm5pbmdzVHJhZmZpYygnI2Vhcm5pbmdzVHJhZmZpY0NoYXJ0JylcbiAgTG9jYXRpb25Eb3VnaG51dCgnI2xvY2F0aW9uRG91Z2hudXRDaGFydCcpXG4gIFByb2R1Y3RzKCcjcHJvZHVjdHNDaGFydCcpXG4gIENvdXJzZXMoJyNjb3Vyc2VzQ2hhcnQnKVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==