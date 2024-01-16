(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":1}],4:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],5:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],6:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],7:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":24}],8:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":24}],9:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":19}],11:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],12:[function(require,module,exports){
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],13:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],14:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],15:[function(require,module,exports){
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./objectWithoutPropertiesLoose.js":16}],16:[function(require,module,exports){
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":4,"./typeof.js":25}],18:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":25}],19:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],20:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":12,"./nonIterableRest.js":13,"./unsupportedIterableToArray.js":26}],21:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":2,"./iterableToArray.js":11,"./nonIterableRest.js":13,"./unsupportedIterableToArray.js":26}],22:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":3,"./iterableToArray.js":11,"./nonIterableSpread.js":14,"./unsupportedIterableToArray.js":26}],23:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":25}],24:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":23,"./typeof.js":25}],25:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],26:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":1}],27:[function(require,module,exports){
// TODO(Babel 8): Remove this file.

var runtime = require("../helpers/regeneratorRuntime")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{"../helpers/regeneratorRuntime":18}],28:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./resolver"));

},{"./resolver":29}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createResolver(selector) {
    if (selector === void 0) { selector = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args;
    }; }
    var counter = 0;
    var map = new WeakMap();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return selector.apply(void 0, args).map(function (arg) {
            if (arg && /^(function|object)$/.test(typeof arg)) {
                var key = map.get(arg);
                if (!key) {
                    key = "@" + ++counter;
                    map.set(arg, key);
                }
                return key;
            }
            return JSON.stringify(arg);
        }).join(",");
    };
}
exports.createResolver = createResolver;

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSubscriber = void 0;
const rxjs_1 = require("rxjs");
const defaultComplete = rxjs_1.Subscriber.prototype._complete;
const defaultError = rxjs_1.Subscriber.prototype._error;
const defaultNext = rxjs_1.Subscriber.prototype._next;
class OperatorSubscriber extends rxjs_1.Subscriber {
    constructor(destination, handlers) {
        super(destination);
        const { complete, error, next } = handlers;
        this._complete = complete
            ? () => {
                try {
                    complete();
                }
                catch (caught) {
                    destination.error(caught);
                }
                this.unsubscribe();
            }
            : defaultComplete;
        this._error = error
            ? (received) => {
                try {
                    error(received);
                }
                catch (caught) {
                    destination.error(caught);
                }
                this.unsubscribe();
            }
            : defaultError;
        this._next = next
            ? (value) => {
                try {
                    next(value);
                }
                catch (caught) {
                    destination.error(caught);
                }
            }
            : defaultNext;
    }
}
exports.OperatorSubscriber = OperatorSubscriber;

},{"rxjs":126}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericOperator = void 0;
function genericOperator(operator) {
    return operator;
}
exports.genericOperator = genericOperator;

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.genericPipe = void 0;
const rxjs_1 = require("rxjs");
function genericPipe(...operators) {
    return rxjs_1.pipe.apply(undefined, operators);
}
exports.genericPipe = genericPipe;
exports.pipe = genericPipe;

},{"rxjs":126}],33:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.operators = void 0;
__exportStar(require("./observable"), exports);
__exportStar(require("./genericOperator"), exports);
__exportStar(require("./genericPipe"), exports);
__exportStar(require("./kinds"), exports);
__exportStar(require("./piped"), exports);
__exportStar(require("./scheduler"), exports);
__exportStar(require("./util"), exports);
const _operators = require("./operators");
exports.operators = _operators;

},{"./genericOperator":31,"./genericPipe":32,"./kinds":34,"./observable":46,"./operators":80,"./piped":114,"./scheduler":118,"./util":120}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationQueue = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class NotificationQueue extends rxjs_1.Observable {
    constructor(notifier) {
        super((observer) => {
            const index = this._count++;
            const subscription = this._notifications
                .pipe(operators_1.first((value) => value === index))
                .subscribe(observer);
            this._indices.next(index);
            return subscription;
        });
        this._count = 0;
        this._indices = new rxjs_1.Subject();
        this._notifications = rxjs_1.zip(notifier, this._indices).pipe(operators_1.map(([, index]) => index), operators_1.publish());
    }
    connect() {
        return this._notifications.connect();
    }
}
exports.NotificationQueue = NotificationQueue;

},{"rxjs":126,"rxjs/operators":351}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestArray = void 0;
const rxjs_1 = require("rxjs");
function combineLatestArray(...args) {
    let observables = args[0];
    let project = args[1];
    if (observables.length === 0) {
        return rxjs_1.of(project ? project([]) : []);
    }
    const applyArgs = observables.slice();
    if (project) {
        applyArgs.push((...values) => project(values));
    }
    return rxjs_1.combineLatest.apply(null, applyArgs);
}
exports.combineLatestArray = combineLatestArray;

},{"rxjs":126}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestHigherOrder = exports.combineLatestHigherOrderArray = void 0;
const rxjs_1 = require("rxjs");
function combine(sources, observer) {
    if (sources.every(({ nexted }) => nexted)) {
        observer.next(sources.map(({ value }) => value));
    }
}
function combineLatestHigherOrderArray() {
    return (higherOrder) => new rxjs_1.Observable((observer) => {
        let lasts = [];
        let nexts = [];
        let higherOrderCompleted = false;
        const higherOrderSubscription = new rxjs_1.Subscription();
        higherOrderSubscription.add(higherOrder.subscribe((observables) => {
            const subscribes = [];
            nexts = observables.map((observable) => {
                const index = lasts.findIndex((last) => last.observable === observable);
                if (index !== -1) {
                    const next = lasts[index];
                    lasts.splice(index, 1);
                    return next;
                }
                const next = {
                    completed: false,
                    nexted: false,
                    observable,
                };
                subscribes.push(() => {
                    if (higherOrderSubscription.closed) {
                        return;
                    }
                    next.subscription = next.observable.subscribe((value) => {
                        next.nexted = true;
                        next.value = value;
                        combine(nexts, observer);
                    }, (error) => observer.error(error), () => {
                        next.completed = true;
                        if (higherOrderCompleted &&
                            nexts.every(({ completed }) => completed)) {
                            observer.complete();
                        }
                    });
                    higherOrderSubscription.add(next.subscription);
                });
                return next;
            });
            lasts.forEach(({ subscription }) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
            lasts = nexts;
            combine(nexts, observer);
            subscribes.forEach((subscribe) => subscribe());
        }, (error) => observer.error(error), () => {
            if (lasts.every(({ completed }) => completed)) {
                observer.complete();
            }
            higherOrderCompleted = true;
        }));
        return higherOrderSubscription;
    });
}
exports.combineLatestHigherOrderArray = combineLatestHigherOrderArray;
exports.combineLatestHigherOrder = combineLatestHigherOrderArray;

},{"rxjs":126}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestHigherOrderObject = void 0;
const rxjs_1 = require("rxjs");
function combine(sources, observer) {
    if (sources.every(({ nexted }) => nexted)) {
        observer.next(sources.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {}));
    }
}
function combineLatestHigherOrderObject() {
    return (higherOrder) => new rxjs_1.Observable((observer) => {
        let lasts = [];
        let nexts = [];
        let higherOrderCompleted = false;
        const higherOrderSubscription = new rxjs_1.Subscription();
        higherOrderSubscription.add(higherOrder.subscribe((observables) => {
            const subscribes = [];
            nexts = Object.keys(observables).map((key) => {
                const observable = observables[key];
                const index = lasts.findIndex((last) => last.observable === observable && last.key === key);
                if (index !== -1) {
                    const next = lasts[index];
                    lasts.splice(index, 1);
                    return next;
                }
                const next = {
                    completed: false,
                    key,
                    nexted: false,
                    observable,
                };
                subscribes.push(() => {
                    if (higherOrderSubscription.closed) {
                        return;
                    }
                    next.subscription = next.observable.subscribe((value) => {
                        next.nexted = true;
                        next.value = value;
                        combine(nexts, observer);
                    }, (error) => observer.error(error), () => {
                        next.completed = true;
                        if (higherOrderCompleted &&
                            nexts.every(({ completed }) => completed)) {
                            observer.complete();
                        }
                    });
                    higherOrderSubscription.add(next.subscription);
                });
                return next;
            });
            lasts.forEach(({ subscription }) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
            lasts = nexts;
            combine(nexts, observer);
            subscribes.forEach((subscribe) => subscribe());
        }, (error) => observer.error(error), () => {
            if (lasts.every(({ completed }) => completed)) {
                observer.complete();
            }
            higherOrderCompleted = true;
        }));
        return higherOrderSubscription;
    });
}
exports.combineLatestHigherOrderObject = combineLatestHigherOrderObject;

},{"rxjs":126}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestObject = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const util_1 = require("../util");
const combineLatestArray_1 = require("./combineLatestArray");
function combineLatestObject(instance) {
    const entries = Object.entries(instance);
    const observables = entries.map(([, value]) => util_1.isObservable(value) ? value : rxjs_1.of(value));
    return combineLatestArray_1.combineLatestArray(observables).pipe(operators_1.map((values) => values.reduce((acc, value, index) => {
        acc[entries[index][0]] = value;
        return acc;
    }, {})));
}
exports.combineLatestObject = combineLatestObject;

},{"../util":120,"./combineLatestArray":36,"rxjs":126,"rxjs/operators":351}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatArray = void 0;
const rxjs_1 = require("rxjs");
function concatArray(observables) {
    if (observables.length === 0) {
        return rxjs_1.EMPTY;
    }
    return rxjs_1.concat.apply(null, observables);
}
exports.concatArray = concatArray;

},{"rxjs":126}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoinArray = void 0;
const rxjs_1 = require("rxjs");
function forkJoinArray(...args) {
    let observables = args[0];
    let project = args[1];
    if (observables.length === 0) {
        return rxjs_1.of(project ? project([]) : []);
    }
    const applyArgs = observables.slice();
    if (project) {
        applyArgs.push((...values) => project(values));
    }
    return rxjs_1.forkJoin.apply(null, applyArgs);
}
exports.forkJoinArray = forkJoinArray;

},{"rxjs":126}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoinConcurrent = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function forkJoinConcurrent(observables, concurrent) {
    return rxjs_1.from(observables).pipe(operators_1.mergeMap((observable, index) => observable.pipe(operators_1.last(), operators_1.map((value) => ({ index, value }))), concurrent), operators_1.toArray(), operators_1.map((pairs) => pairs.sort((l, r) => l.index - r.index).map((pair) => pair.value)));
}
exports.forkJoinConcurrent = forkJoinConcurrent;

},{"rxjs":126,"rxjs/operators":351}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoinObject = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const util_1 = require("../util");
const forkJoinArray_1 = require("./forkJoinArray");
function forkJoinObject(instance) {
    const entries = Object.entries(instance);
    const observables = entries.map(([, value]) => util_1.isObservable(value) ? value : rxjs_1.of(value));
    return forkJoinArray_1.forkJoinArray(observables).pipe(operators_1.map((values) => values.reduce((acc, value, index) => {
        acc[entries[index][0]] = value;
        return acc;
    }, {})));
}
exports.forkJoinObject = forkJoinObject;

},{"../util":120,"./forkJoinArray":41,"rxjs":126,"rxjs/operators":351}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromIterable = void 0;
const rxjs_1 = require("rxjs");
function fromIterable(iterable) {
    return rxjs_1.from(iterable);
}
exports.fromIterable = fromIterable;

},{"rxjs":126}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const rxjs_1 = require("rxjs");
function handler(operator) {
    const subject = new rxjs_1.Subject();
    const source = operator ? subject.pipe(operator) : subject;
    const next = (arg) => subject.next(arg);
    next[rxjs_1.observable] = () => source;
    return next;
}
exports.handler = handler;

},{"rxjs":126}],46:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./combineLatestArray"), exports);
__exportStar(require("./combineLatestHigherOrderArray"), exports);
__exportStar(require("./combineLatestHigherOrderObject"), exports);
__exportStar(require("./combineLatestObject"), exports);
__exportStar(require("./concatArray"), exports);
__exportStar(require("./forkJoinArray"), exports);
__exportStar(require("./forkJoinConcurrent"), exports);
__exportStar(require("./forkJoinObject"), exports);
__exportStar(require("./fromIterable"), exports);
__exportStar(require("./handler"), exports);
__exportStar(require("./memo"), exports);
__exportStar(require("./mergeArray"), exports);
__exportStar(require("./mergeHigherOrderArray"), exports);
__exportStar(require("./NotificationQueue"), exports);
__exportStar(require("./progress"), exports);
__exportStar(require("./queue"), exports);
__exportStar(require("./resettable"), exports);
__exportStar(require("./separate"), exports);
__exportStar(require("./toggle"), exports);
__exportStar(require("./traverse"), exports);
__exportStar(require("./zipArray"), exports);
__exportStar(require("./zipObject"), exports);
__exportStar(require("./zipPadded"), exports);

},{"./NotificationQueue":35,"./combineLatestArray":36,"./combineLatestHigherOrderArray":37,"./combineLatestHigherOrderObject":38,"./combineLatestObject":39,"./concatArray":40,"./forkJoinArray":41,"./forkJoinConcurrent":42,"./forkJoinObject":43,"./fromIterable":44,"./handler":45,"./memo":47,"./mergeArray":48,"./mergeHigherOrderArray":49,"./progress":50,"./queue":51,"./resettable":52,"./separate":53,"./toggle":54,"./traverse":55,"./zipArray":56,"./zipObject":57,"./zipPadded":58}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memo = void 0;
const memoize_resolver_1 = require("memoize-resolver");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function memo(func, memoize) {
    const resolver = memoize_resolver_1.createResolver();
    return (memoize || defaultMemoize)((...args) => func(...args).pipe(operators_1.multicast(new rxjs_1.ReplaySubject(Infinity)), operators_1.refCount()), resolver);
}
exports.memo = memo;
function defaultMemoize(func, resolver) {
    const map = new Map();
    return (...args) => {
        const key = resolver(...args);
        if (map.has(key)) {
            return map.get(key);
        }
        const result = func(...args);
        map.set(key, result);
        return result;
    };
}

},{"memoize-resolver":28,"rxjs":126,"rxjs/operators":351}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArray = void 0;
const rxjs_1 = require("rxjs");
function mergeArray(observables, concurrent) {
    if (observables.length === 0) {
        return rxjs_1.EMPTY;
    }
    const applyArgs = [...observables];
    if (concurrent) {
        applyArgs.push(concurrent);
    }
    return rxjs_1.merge.apply(null, applyArgs);
}
exports.mergeArray = mergeArray;

},{"rxjs":126}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeHigherOrderArray = void 0;
const rxjs_1 = require("rxjs");
function mergeHigherOrderArray() {
    return (higherOrder) => new rxjs_1.Observable((observer) => {
        let lasts = [];
        let nexts = [];
        let higherOrderCompleted = false;
        const higherOrderSubscription = new rxjs_1.Subscription();
        higherOrderSubscription.add(higherOrder.subscribe((observables) => {
            const subscribes = [];
            nexts = observables.map((observable) => {
                const index = lasts.findIndex((last) => last.observable === observable);
                if (index !== -1) {
                    const next = lasts[index];
                    lasts.splice(index, 1);
                    return next;
                }
                const next = { completed: false, observable };
                subscribes.push(() => {
                    if (higherOrderSubscription.closed) {
                        return;
                    }
                    next.subscription = next.observable.subscribe((value) => observer.next(value), (error) => observer.error(error), () => {
                        next.completed = true;
                        if (higherOrderCompleted &&
                            nexts.every(({ completed }) => completed)) {
                            observer.complete();
                        }
                    });
                    higherOrderSubscription.add(next.subscription);
                });
                return next;
            });
            lasts.forEach(({ subscription }) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
            lasts = nexts;
            subscribes.forEach((subscribe) => subscribe());
        }, (error) => observer.error(error), () => {
            if (lasts.every(({ completed }) => completed)) {
                observer.complete();
            }
            higherOrderCompleted = true;
        }));
        return higherOrderSubscription;
    });
}
exports.mergeHigherOrderArray = mergeHigherOrderArray;

},{"rxjs":126}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progress = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function progress(observables, resultSelector, sourceSelector) {
    return new rxjs_1.Observable((subscriber) => {
        let finalized = 0;
        let nexted = 0;
        const total = observables.length;
        const state = new rxjs_1.Subject();
        const shared = new rxjs_1.Subject();
        const source = (sourceSelector || rxjs_1.forkJoin)(observables.map((o) => o.pipe(operators_1.tap(() => state.next({
            finalized,
            nexted: ++nexted,
            total,
        })), operators_1.finalize(() => {
            state.next({
                finalized: ++finalized,
                nexted,
                total,
            });
            if (finalized === total) {
                state.complete();
            }
        }))));
        const result = resultSelector(state, shared);
        const subscription = result.subscribe(subscriber);
        subscription.add(source.subscribe(shared));
        return subscription;
    });
}
exports.progress = progress;

},{"rxjs":126,"rxjs/operators":351}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queue = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function queue(...sources) {
    return sources.map((source) => source.pipe(operators_1.observeOn(rxjs_1.queueScheduler)));
}
exports.queue = queue;

},{"rxjs":126,"rxjs/operators":351}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resettable = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function resettable(factory, ...args) {
    const resetter = new rxjs_1.Subject();
    const source = new rxjs_1.Subject();
    let destination = factory(...args);
    let subscription = source.subscribe(destination);
    return {
        reset(...args) {
            subscription.unsubscribe();
            destination = factory(...args);
            subscription = source.subscribe(destination);
            resetter.next();
        },
        unsubscribe() {
            subscription.unsubscribe();
            source.unsubscribe();
        },
        get closed() {
            return subscription.closed;
        },
        get observable() {
            return resetter.asObservable().pipe(operators_1.startWith(null), operators_1.switchMap(() => destination));
        },
        get subject() {
            return source;
        },
    };
}
exports.resettable = resettable;

},{"rxjs":126,"rxjs/operators":351}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separate = void 0;
const operators_1 = require("rxjs/operators");
function not(...predicates) {
    return (value) => predicates.every((predicate) => !predicate(value));
}
function separate(source, ...predicates) {
    const shared = source.pipe(operators_1.share());
    return [
        ...predicates.map((predicate) => shared.pipe(operators_1.filter(predicate))),
        shared.pipe(operators_1.filter(not(...predicates))),
    ];
}
exports.separate = separate;

},{"rxjs/operators":351}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggle = void 0;
const operators_1 = require("rxjs/operators");
function toggle(source, states = 2) {
    const result = [];
    const indexed = source.pipe(operators_1.map((value, index) => [index, value]), operators_1.share());
    for (let state = 0; state < states; ++state) {
        result.push(indexed.pipe(operators_1.filter(([index]) => index % states === state), operators_1.map(([, value]) => value)));
    }
    return result;
}
exports.toggle = toggle;

},{"rxjs/operators":351}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const OperatorSubscriber_1 = require("../OperatorSubscriber");
const NotificationQueue_1 = require("./NotificationQueue");
function traverse({ concurrency = 1, factory, operator = rxjs_1.identity, notifier, }) {
    return new rxjs_1.Observable((subscriber) => {
        let queue;
        let queueOperator;
        if (notifier) {
            queue = new NotificationQueue_1.NotificationQueue(notifier);
            queueOperator = rxjs_1.identity;
        }
        else {
            const subject = new rxjs_1.Subject();
            queue = new NotificationQueue_1.NotificationQueue(subject);
            queueOperator = (markers) => {
                subject.next();
                return markers;
            };
        }
        const destination = new rxjs_1.Subject();
        destination.subscribe(subscriber);
        subscriber.add(queue.connect());
        rxjs_1.of(undefined)
            .pipe(operators_1.expand((marker) => queue.pipe(operators_1.mergeMap((index) => factory(marker, index).pipe(operators_1.mergeMap(({ markers, values }) => rxjs_1.concat(rxjs_1.from(values).pipe(operator, operators_1.tap((value) => destination.next(value)), operators_1.ignoreElements()), rxjs_1.from(markers))))), queueOperator), concurrency))
            .subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, {
            complete: () => destination.complete(),
            error: (error) => destination.error(error),
            next: rxjs_1.noop,
        }));
    });
}
exports.traverse = traverse;

},{"../OperatorSubscriber":30,"./NotificationQueue":35,"rxjs":126,"rxjs/operators":351}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipArray = void 0;
const rxjs_1 = require("rxjs");
function zipArray(...args) {
    let observables = args[0];
    let project = args[1];
    if (observables.length === 0) {
        return rxjs_1.of(project ? project([]) : []);
    }
    const applyArgs = observables.slice();
    if (project) {
        applyArgs.push((...values) => project(values));
    }
    return rxjs_1.zip.apply(null, applyArgs);
}
exports.zipArray = zipArray;

},{"rxjs":126}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipObject = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const util_1 = require("../util");
const zipArray_1 = require("./zipArray");
function zipObject(instance) {
    const entries = Object.entries(instance);
    const observables = entries.map(([, value]) => util_1.isObservable(value) ? value : rxjs_1.of(value));
    return zipArray_1.zipArray(observables).pipe(operators_1.map((values) => values.reduce((acc, value, index) => {
        acc[entries[index][0]] = value;
        return acc;
    }, {})));
}
exports.zipObject = zipObject;

},{"../util":120,"./zipArray":56,"rxjs":126,"rxjs/operators":351}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipPadded = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function zipPadded(sources, padValue) {
    return new rxjs_1.Observable((observer) => {
        const publishedSources = sources.map((source) => source.pipe(operators_1.publish()));
        const indices = rxjs_1.merge(...publishedSources.map((source) => source.pipe(operators_1.map((unused, index) => index)))).pipe(operators_1.scan((max, index) => Math.max(max, index), 0), operators_1.distinctUntilChanged(), operators_1.publish());
        const subscription = rxjs_1.zip(...publishedSources.map((source) => rxjs_1.concat(source, indices.pipe(operators_1.mapTo(padValue))))).subscribe(observer);
        subscription.add(indices.connect());
        publishedSources.forEach((source) => subscription.add(source.connect()));
        return subscription;
    });
}
exports.zipPadded = zipPadded;

},{"rxjs":126,"rxjs/operators":351}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditMap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function auditMap(project) {
    return (source) => {
        let pending = false;
        let queued = undefined;
        return source.pipe(operators_1.mergeMap((value, index) => {
            if (pending) {
                queued = [value, index];
                return rxjs_1.EMPTY;
            }
            pending = true;
            return rxjs_1.from(project(value, index)).pipe(operators_1.concat(rxjs_1.defer(() => {
                if (!queued) {
                    return rxjs_1.EMPTY;
                }
                const projected = project(...queued);
                queued = undefined;
                return rxjs_1.from(projected);
            })), operators_1.last(), operators_1.tap({
                complete: () => (pending = false),
            }));
        }));
    };
}
exports.auditMap = auditMap;

},{"rxjs":126,"rxjs/operators":351}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketBy = void 0;
const rxjs_1 = require("rxjs");
function bucketBy(count, hashSelector, subjectSelector = () => new rxjs_1.Subject()) {
    return (source) => source.lift(new BucketByOperator(count, hashSelector, subjectSelector));
}
exports.bucketBy = bucketBy;
class BucketByOperator {
    constructor(count, hashSelector, subjectSelector) {
        this.count = count;
        this.hashSelector = hashSelector;
        this.subjectSelector = subjectSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new BucketBySubscriber(subscriber, this.count, this.hashSelector, this.subjectSelector));
    }
}
class BucketBySubscriber extends rxjs_1.Subscriber {
    constructor(destination, count, hashSelector, subjectSelector) {
        super(destination);
        this.count = count;
        this.hashSelector = hashSelector;
        this.subjectSelector = subjectSelector;
        this.index = 0;
        const buckets = (this.buckets = new Array(count));
        for (let i = 0; i < count; ++i) {
            buckets[i] = subjectSelector();
        }
        destination.next(buckets.map((subject) => subject.asObservable()));
    }
    _next(value) {
        const { buckets, closed, count, hashSelector } = this;
        if (closed) {
            return;
        }
        let index;
        try {
            const hash = hashSelector(value, this.index++);
            index = Math.abs(Math.floor(hash)) % count;
        }
        catch (error) {
            this.error(error);
            return;
        }
        buckets[index].next(value);
    }
    _error(error) {
        const { buckets, closed, destination } = this;
        if (closed) {
            return;
        }
        buckets.forEach((bucket) => bucket.error(error));
        destination.error(error);
    }
    _complete() {
        const { buckets, closed, destination } = this;
        if (closed) {
            return;
        }
        buckets.forEach((bucket) => bucket.complete());
        destination.complete();
    }
}

},{"rxjs":126}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferRecent = void 0;
const operators_1 = require("rxjs/operators");
function bufferRecent(count) {
    if (count < 1) {
        return (source) => source.pipe(operators_1.mapTo([]));
    }
    if (count === 1) {
        return (source) => source.pipe(operators_1.map((value) => [value]));
    }
    return (source) => source.pipe(operators_1.scan((acc, value) => [...acc.slice(1 - count), value], []));
}
exports.bufferRecent = bufferRecent;

},{"rxjs/operators":351}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatIfEmpty = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function concatIfEmpty(observable) {
    return (source) => source.pipe(operators_1.publish((sharedSource) => rxjs_1.merge(sharedSource, sharedSource.pipe(operators_1.isEmpty(), operators_1.mergeMap((empty) => (empty ? observable : rxjs_1.EMPTY))))));
}
exports.concatIfEmpty = concatIfEmpty;

},{"rxjs":126,"rxjs/operators":351}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMapEager = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function concatMapEager(project, concurrency) {
    return (source) => rxjs_1.defer(() => {
        let activeIndex = 0;
        const innersByIndex = new Map();
        function flush() {
            const values = [];
            let activeInner = innersByIndex.get(activeIndex);
            while (activeInner) {
                values.push(...activeInner.values);
                activeInner.values.length = 0;
                if (activeInner.complete) {
                    innersByIndex.delete(activeIndex);
                    activeInner = innersByIndex.get(++activeIndex);
                }
                else {
                    break;
                }
            }
            return values;
        }
        return source.pipe(operators_1.mergeMap((value, index) => rxjs_1.from(project(value, index)).pipe(operators_1.materialize(), operators_1.map((notification) => ({
            index,
            notification,
        }))), concurrency), operators_1.mergeMap(({ index, notification }) => {
            let inner = innersByIndex.get(index);
            if (!inner) {
                inner = { complete: false, index, values: [] };
                innersByIndex.set(index, inner);
            }
            switch (notification.kind) {
                case "N":
                    inner.values.push(notification.value);
                    break;
                case "C":
                    inner.complete = true;
                    break;
                case "E":
                    return notification.toObservable();
                default:
                    break;
            }
            if (inner.index !== activeIndex) {
                return rxjs_1.EMPTY;
            }
            return flush();
        }));
    });
}
exports.concatMapEager = concatMapEager;

},{"rxjs":126,"rxjs/operators":351}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatTap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const endWith_1 = require("./endWith");
function concatTap(next) {
    return (source) => source.pipe(operators_1.concatMap((value) => rxjs_1.from(next(value)).pipe(operators_1.ignoreElements(), endWith_1.endWith(value))));
}
exports.concatTap = concatTap;

},{"./endWith":72,"rxjs":126,"rxjs/operators":351}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceAfter = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function debounceAfter(notifier, duration, scheduler) {
    return (source) => source.pipe(operators_1.publish((sharedSource) => notifier.pipe(operators_1.switchMap(() => rxjs_1.concat(rxjs_1.of(true), rxjs_1.of(false).pipe(operators_1.delay(duration, scheduler)))), operators_1.startWith(false), operators_1.distinctUntilChanged(), operators_1.publish((sharedSignal) => sharedSignal.pipe(operators_1.concatMap((signalled) => signalled
        ? sharedSource.pipe(operators_1.takeUntil(sharedSignal.pipe(operators_1.filter((signalled) => !signalled))), operators_1.takeLast(1))
        : sharedSource.pipe(operators_1.takeUntil(sharedSignal.pipe(operators_1.filter((signalled) => signalled))))))))));
}
exports.debounceAfter = debounceAfter;

},{"rxjs":126,"rxjs/operators":351}],66:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceSync = void 0;
const rxjs_1 = require("rxjs");
const OperatorSubscriber_1 = require("../OperatorSubscriber");
function debounceSync() {
    return (source) => new rxjs_1.Observable((subscriber) => {
        let actionSubscription;
        let actionValue;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, {
            complete: () => {
                if (actionSubscription) {
                    subscriber.next(actionValue);
                }
                subscriber.complete();
            },
            error: (error) => subscriber.error(error),
            next: (value) => {
                actionValue = value;
                if (!actionSubscription) {
                    actionSubscription = rxjs_1.asapScheduler.schedule(() => {
                        subscriber.next(actionValue);
                        actionSubscription = undefined;
                    });
                    subscriber.add(actionSubscription);
                }
            },
        }));
    });
}
exports.debounceSync = debounceSync;

},{"../OperatorSubscriber":30,"rxjs":126}],67:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceTimeSubsequent = void 0;
const operators_1 = require("rxjs/operators");
const subsequent_1 = require("./subsequent");
function debounceTimeSubsequent(duration, countOrScheduler, scheduler) {
    let count;
    if (typeof countOrScheduler === "number") {
        count = countOrScheduler;
    }
    else {
        count = 1;
        scheduler = countOrScheduler;
    }
    return subsequent_1.subsequent(count, operators_1.debounceTime(duration, scheduler));
}
exports.debounceTimeSubsequent = debounceTimeSubsequent;

},{"./subsequent":104,"rxjs/operators":351}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchIfEmpty = exports.defaultObservableIfEmpty = void 0;
const concatIfEmpty_1 = require("./concatIfEmpty");
exports.defaultObservableIfEmpty = concatIfEmpty_1.concatIfEmpty;
exports.switchIfEmpty = concatIfEmpty_1.concatIfEmpty;

},{"./concatIfEmpty":62}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deferFinalize = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function deferFinalize(callback) {
    return (source) => source.lift(new DeferFinalizeOperator(callback));
}
exports.deferFinalize = deferFinalize;
class DeferFinalizeOperator {
    constructor(callback) {
        this.callback = callback;
    }
    call(subscriber, source) {
        return source.subscribe(new DeferFinalizeSubscriber(subscriber, this.callback));
    }
}
class DeferFinalizeSubscriber extends rxjs_1.Subscriber {
    constructor(destination, callback) {
        super(destination);
        this.callback = callback;
        this.kind = "U";
        this.subscription = undefined;
    }
    complete() {
        this.kind = "C";
        this.defer(() => super.complete());
    }
    error(error) {
        this.kind = "E";
        this.defer(() => super.error(error));
    }
    unsubscribe() {
        this.defer(() => super.unsubscribe());
    }
    defer(func) {
        if (this.subscription) {
            this.subscription.add(func);
            return;
        }
        const subscription = new rxjs_1.Subscription();
        this.subscription = subscription;
        subscription.add(func);
        const result = this.callback(this.kind);
        rxjs_1.from(result)
            .pipe(operators_1.finalize(() => subscription.unsubscribe()))
            .subscribe();
    }
}

},{"rxjs":126,"rxjs/operators":351}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayUntil = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function delayUntil(notifier) {
    return (source) => source.pipe(operators_1.publish((published) => {
        const delayed = new rxjs_1.Observable((subscriber) => {
            let buffering = true;
            const buffer = [];
            const subscription = new rxjs_1.Subscription();
            subscription.add(notifier.subscribe(() => {
                buffer.forEach((value) => subscriber.next(value));
                subscriber.complete();
            }, (error) => subscriber.error(error), () => {
                buffering = false;
                buffer.length = 0;
            }));
            subscription.add(() => {
                buffer.length = 0;
            });
            subscription.add(published.subscribe((value) => buffering && buffer.push(value), (error) => subscriber.error(error)));
            return subscription;
        });
        return rxjs_1.concat(delayed, published);
    }));
}
exports.delayUntil = delayUntil;

},{"rxjs":126,"rxjs/operators":351}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = void 0;
function dispose(callback) {
    return (source) => source.lift(new DisposeOperator(callback));
}
exports.dispose = dispose;
class DisposeOperator {
    constructor(callback) {
        this.callback = callback;
    }
    call(subscriber, source) {
        const subscription = source.subscribe(subscriber);
        subscription.add(this.callback);
        return subscription;
    }
}

},{}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endWith = void 0;
const rxjs_1 = require("rxjs");
const util_1 = require("../util");
function endWith(...args) {
    let scheduler = args[args.length - 1];
    if (util_1.isScheduler(scheduler)) {
        args.pop();
    }
    else {
        scheduler = null;
    }
    return (source) => rxjs_1.concat(source, rxjs_1.from(args, scheduler));
}
exports.endWith = endWith;

},{"../util":120,"rxjs":126}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
const operators_1 = require("rxjs/operators");
function equals(predicate) {
    return (source) => source.pipe(operators_1.filter((value) => predicate === value));
}
exports.equals = equals;

},{"rxjs/operators":351}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustTap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const endWith_1 = require("./endWith");
function exhaustTap(next) {
    return (source) => source.pipe(operators_1.publishReplay(1, undefined, (published) => published.pipe(operators_1.exhaustMap((value) => rxjs_1.concat(published, rxjs_1.NEVER).pipe(operators_1.takeUntil(rxjs_1.from(next(value)).pipe(operators_1.ignoreElements(), endWith_1.endWith(null))), operators_1.toArray(), operators_1.mergeAll())))));
}
exports.exhaustTap = exhaustTap;

},{"./endWith":72,"rxjs":126,"rxjs/operators":351}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalizeWithKind = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function finalizeWithKind(callback) {
    return (source) => rxjs_1.defer(() => {
        let kind = "U";
        return source.pipe(operators_1.tap({
            complete: () => (kind = "C"),
            error: () => (kind = "E"),
        }), operators_1.finalize(() => callback(kind)));
    });
}
exports.finalizeWithKind = finalizeWithKind;

},{"rxjs":126,"rxjs/operators":351}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard = void 0;
const operators_1 = require("rxjs/operators");
function guard(guard, message) {
    return (source) => source.pipe(operators_1.map((value) => {
        if (guard(value)) {
            return value;
        }
        const error = new Error(message || "Guard rejection.");
        error["value"] = value;
        throw error;
    }));
}
exports.guard = guard;

},{"rxjs/operators":351}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hold = void 0;
const operators_1 = require("rxjs/operators");
function hold(releaseNotifier) {
    return (source) => source.pipe(operators_1.buffer(releaseNotifier), operators_1.concatAll());
}
exports.hold = hold;

},{"rxjs/operators":351}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holdToggle = void 0;
const operators_1 = require("rxjs/operators");
function holdToggle(captures, releaseSelector) {
    return (source) => source.pipe(operators_1.bufferToggle(captures, releaseSelector), operators_1.concatAll());
}
exports.holdToggle = holdToggle;

},{"rxjs/operators":351}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.holdWhen = void 0;
const operators_1 = require("rxjs/operators");
function holdWhen(releaseSelector) {
    return (source) => source.pipe(operators_1.bufferWhen(releaseSelector), operators_1.concatAll());
}
exports.holdWhen = holdWhen;

},{"rxjs/operators":351}],80:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./auditMap"), exports);
__exportStar(require("./bucketBy"), exports);
__exportStar(require("./bufferRecent"), exports);
__exportStar(require("./concatIfEmpty"), exports);
__exportStar(require("./concatTap"), exports);
__exportStar(require("./concatMapEager"), exports);
__exportStar(require("./debounceAfter"), exports);
__exportStar(require("./debounceSync"), exports);
__exportStar(require("./debounceTimeSubsequent"), exports);
__exportStar(require("./defaultObservableIfEmpty"), exports);
__exportStar(require("./deferFinalize"), exports);
__exportStar(require("./delayUntil"), exports);
__exportStar(require("./dispose"), exports);
__exportStar(require("./endWith"), exports);
__exportStar(require("./equals"), exports);
__exportStar(require("./exhaustTap"), exports);
__exportStar(require("./finalizeWithKind"), exports);
__exportStar(require("./guard"), exports);
__exportStar(require("./hold"), exports);
__exportStar(require("./holdToggle"), exports);
__exportStar(require("./holdWhen"), exports);
__exportStar(require("./indexElements"), exports);
__exportStar(require("./inexorably"), exports);
__exportStar(require("./initial"), exports);
__exportStar(require("./instanceOf"), exports);
__exportStar(require("./materializeTap"), exports);
__exportStar(require("./materializeTo"), exports);
__exportStar(require("./mergeTap"), exports);
__exportStar(require("./multicastWithKind"), exports);
__exportStar(require("./pairwiseStartWith"), exports);
__exportStar(require("./pause"), exports);
__exportStar(require("./percolate"), exports);
__exportStar(require("./pluck"), exports);
__exportStar(require("./prioritize"), exports);
__exportStar(require("./rateLimit"), exports);
__exportStar(require("./refCountDelay"), exports);
__exportStar(require("./refCountForever"), exports);
__exportStar(require("./refCountOn"), exports);
__exportStar(require("./reschedule"), exports);
__exportStar(require("./skipSync"), exports);
__exportStar(require("./splitBy"), exports);
__exportStar(require("./spread"), exports);
__exportStar(require("./startWithDeferred"), exports);
__exportStar(require("./startWithTimeout"), exports);
__exportStar(require("./subsequent"), exports);
__exportStar(require("./switchMapUntil"), exports);
__exportStar(require("./switchTap"), exports);
__exportStar(require("./takeSync"), exports);
__exportStar(require("./takeWhileInclusive"), exports);
__exportStar(require("./tapSubscribe"), exports);
__exportStar(require("./tapWithIndex"), exports);
__exportStar(require("./throttleAfter"), exports);
__exportStar(require("./withLatestFromWhen"), exports);
__exportStar(require("./unsubscribeOn"), exports);

},{"./auditMap":59,"./bucketBy":60,"./bufferRecent":61,"./concatIfEmpty":62,"./concatMapEager":63,"./concatTap":64,"./debounceAfter":65,"./debounceSync":66,"./debounceTimeSubsequent":67,"./defaultObservableIfEmpty":68,"./deferFinalize":69,"./delayUntil":70,"./dispose":71,"./endWith":72,"./equals":73,"./exhaustTap":74,"./finalizeWithKind":75,"./guard":76,"./hold":77,"./holdToggle":78,"./holdWhen":79,"./indexElements":81,"./inexorably":82,"./initial":83,"./instanceOf":84,"./materializeTap":85,"./materializeTo":86,"./mergeTap":87,"./multicastWithKind":88,"./pairwiseStartWith":89,"./pause":90,"./percolate":91,"./pluck":92,"./prioritize":93,"./rateLimit":94,"./refCountDelay":95,"./refCountForever":96,"./refCountOn":97,"./reschedule":98,"./skipSync":99,"./splitBy":100,"./spread":101,"./startWithDeferred":102,"./startWithTimeout":103,"./subsequent":104,"./switchMapUntil":105,"./switchTap":106,"./takeSync":107,"./takeWhileInclusive":108,"./tapSubscribe":109,"./tapWithIndex":110,"./throttleAfter":111,"./unsubscribeOn":112,"./withLatestFromWhen":113}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexElements = void 0;
const operators_1 = require("rxjs/operators");
function indexElements(project = (value, index) => index) {
    return operators_1.map(project);
}
exports.indexElements = indexElements;

},{"rxjs/operators":351}],82:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalize = exports.inexorably = void 0;
const rxjs_1 = require("rxjs");
function inexorably(callback) {
    return (source) => source.lift(new InexorablyOperator(callback));
}
exports.inexorably = inexorably;
exports.finalize = inexorably;
class InexorablyOperator {
    constructor(callback) {
        this.callback = callback;
    }
    call(subscriber, source) {
        return source.subscribe(new InexorablySubscriber(subscriber, this.callback));
    }
}
class InexorablySubscriber extends rxjs_1.Subscriber {
    constructor(destination, callback) {
        super(destination);
        this.add(new rxjs_1.Subscription(() => callback(this.notification)));
    }
    complete() {
        this.notification = new rxjs_1.Notification("C");
        super.complete();
    }
    error(error) {
        this.notification = new rxjs_1.Notification("E", undefined, error);
        super.error(error);
    }
}

},{"rxjs":126}],83:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function initial(countOrOperator, operator) {
    let count;
    if (typeof countOrOperator === "number") {
        count = countOrOperator;
    }
    else {
        count = 1;
        operator = countOrOperator;
    }
    return (source) => source.pipe(operators_1.publish((published) => rxjs_1.merge(published.pipe(operators_1.take(count), operator), published.pipe(operators_1.skip(count)))));
}
exports.initial = initial;

},{"rxjs":126,"rxjs/operators":351}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOf = void 0;
const operators_1 = require("rxjs/operators");
function instanceOf(arg) {
    return typeof arg === "function"
        ? operators_1.filter((value) => value instanceof arg)
        : operators_1.filter((value) => Object.keys(arg).some((key) => value instanceof arg[key]));
}
exports.instanceOf = instanceOf;

},{"rxjs/operators":351}],85:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materializeTap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function materializeTap(next) {
    return (source) => source.pipe(operators_1.tap({
        complete: () => next(new rxjs_1.Notification("C")),
        error: (error) => next(new rxjs_1.Notification("E", undefined, error)),
        next: (value) => next(new rxjs_1.Notification("N", value)),
    }));
}
exports.materializeTap = materializeTap;

},{"rxjs":126,"rxjs/operators":351}],86:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materializeTo = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function materializeTo(innerObservable) {
    return (source) => source.pipe(operators_1.mergeMapTo(rxjs_1.from(innerObservable).pipe(operators_1.materialize())), operators_1.dematerialize());
}
exports.materializeTo = materializeTo;

},{"rxjs":126,"rxjs/operators":351}],87:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const endWith_1 = require("./endWith");
function mergeTap(next) {
    return (source) => source.pipe(operators_1.mergeMap((value) => rxjs_1.from(next(value)).pipe(operators_1.ignoreElements(), endWith_1.endWith(value))));
}
exports.mergeTap = mergeTap;

},{"./endWith":72,"rxjs":126,"rxjs/operators":351}],88:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multicastWithKind = void 0;
const operators_1 = require("rxjs/operators");
const finalizeWithKind_1 = require("./finalizeWithKind");
function multicastWithKind(factory, selector) {
    return (source) => {
        let kind = undefined;
        let subject = undefined;
        return source.pipe(finalizeWithKind_1.finalizeWithKind((k) => (kind = k)), operators_1.multicast(() => {
            subject = factory(kind, subject);
            kind = undefined;
            return subject;
        }, selector));
    };
}
exports.multicastWithKind = multicastWithKind;

},{"./finalizeWithKind":75,"rxjs/operators":351}],89:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairwiseStartWith = void 0;
const operators_1 = require("rxjs/operators");
function pairwiseStartWith(value) {
    return (source) => source.pipe(operators_1.startWith(value), operators_1.pairwise());
}
exports.pairwiseStartWith = pairwiseStartWith;

},{"rxjs/operators":351}],90:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pause = void 0;
const operators_1 = require("rxjs/operators");
function pause(notifier, initialState = "resumed") {
    return (source) => notifier.pipe(operators_1.startWith(initialState), operators_1.publishReplay(1, undefined, (published) => source.pipe(operators_1.mergeMap((value) => published.pipe(operators_1.filter((state) => state === "resumed"), operators_1.first(), operators_1.map(() => value))))));
}
exports.pause = pause;

},{"rxjs/operators":351}],91:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percolate = void 0;
const rxjs_1 = require("rxjs");
function percolate(...sources) {
    const [first, ...remainder] = sources;
    if (sources.length === 1 && Array.isArray(first)) {
        return percolate(...first);
    }
    return new rxjs_1.Observable((subscriber) => {
        const subNext = (err) => {
            if (remainder.length === 0) {
                subscriber.error(err);
            }
            else {
                subscriber.add(percolate(...remainder).subscribe(subscriber));
            }
        };
        return rxjs_1.from(first).subscribe({
            complete: () => {
                subscriber.complete();
            },
            next(value) {
                subscriber.next(value);
            },
            error: subNext,
        });
    });
}
exports.percolate = percolate;

},{"rxjs":126}],92:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = void 0;
const operators_1 = require("rxjs/operators");
function pluck(...keys) {
    return (source) => operators_1.pluck(...keys)(source);
}
exports.pluck = pluck;

},{"rxjs/operators":351}],93:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prioritize = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function prioritize(selector) {
    return (source) => new rxjs_1.Observable((observer) => {
        const published = operators_1.publish()(source);
        const subjects = [];
        const subscription = new rxjs_1.Subscription();
        const length = Math.max(selector.length, 2);
        for (let i = 0; i < length; ++i) {
            const subject = new rxjs_1.Subject();
            subjects.push(subject);
            subscription.add(published.subscribe(subject));
        }
        const [first, second, ...rest] = subjects;
        subscription.add(selector(first, second, ...rest).subscribe(observer));
        subscription.add(published.connect());
        return subscription;
    });
}
exports.prioritize = prioritize;

},{"rxjs":126,"rxjs/operators":351}],94:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimit = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function rateLimit(period, ...args) {
    let count = 1;
    let scheduler = rxjs_1.asapScheduler;
    if (args.length === 1) {
        if (typeof args[0] === "number") {
            count = args[0];
        }
        else {
            scheduler = args[0];
        }
    }
    else if (args.length === 2) {
        count = args[0];
        scheduler = args[1];
    }
    const definedCount = count || 1;
    return (source) => source.pipe(operators_1.scan((emissions, value) => {
        const now = scheduler.now();
        const since = now - period;
        emissions = emissions.filter((emission) => emission.until > since);
        if (emissions.length >= definedCount) {
            const leastRecentEmission = emissions[0];
            const mostRecentEmission = emissions[emissions.length - 1];
            const until = leastRecentEmission.until +
                period * Math.floor(emissions.length / definedCount);
            emissions.push({
                delay: mostRecentEmission.until < now
                    ? until - now
                    : until - mostRecentEmission.until,
                until,
                value,
            });
        }
        else {
            emissions.push({
                delay: 0,
                until: now,
                value,
            });
        }
        return emissions;
    }, []), operators_1.map((emissions) => emissions[emissions.length - 1]), operators_1.concatMap((emission) => {
        const observable = rxjs_1.of(emission.value);
        return emission.delay
            ? observable.pipe(operators_1.delay(emission.delay, scheduler))
            : observable;
    }));
}
exports.rateLimit = rateLimit;

},{"rxjs":126,"rxjs/operators":351}],95:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refCountAuditTime = exports.refCountDelay = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function refCountDelay(duration, scheduler = rxjs_1.asapScheduler) {
    return (source) => {
        const connectable = source;
        let connectableSubscription = null;
        let connectorSubscription = null;
        const notifier = new rxjs_1.Subject();
        const connector = notifier.pipe(operators_1.scan((count, step) => count + step, 0), operators_1.switchMap((count) => {
            if (count === 0) {
                return rxjs_1.timer(duration, scheduler).pipe(operators_1.tap(() => {
                    if (connectableSubscription) {
                        connectableSubscription.unsubscribe();
                        connectableSubscription = null;
                    }
                    if (connectorSubscription) {
                        connectorSubscription.unsubscribe();
                        connectorSubscription = null;
                    }
                }));
            }
            if (!connectableSubscription && count > 0) {
                return rxjs_1.timer(0, scheduler).pipe(operators_1.tap(() => {
                    if (!connectableSubscription) {
                        connectableSubscription = connectable.connect();
                    }
                }));
            }
            return rxjs_1.NEVER;
        }));
        return rxjs_1.using(() => {
            if (!connectorSubscription) {
                connectorSubscription = connector.subscribe();
            }
            notifier.next(1);
            return { unsubscribe: () => notifier.next(-1) };
        }, () => source);
    };
}
exports.refCountDelay = refCountDelay;
exports.refCountAuditTime = refCountDelay;

},{"rxjs":126,"rxjs/operators":351}],96:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refCountForever = void 0;
const rxjs_1 = require("rxjs");
function refCountForever() {
    return (source) => {
        const connectable = source;
        let subscription = null;
        return rxjs_1.using(() => {
            if (!subscription) {
                subscription = connectable.connect();
            }
            return {
                unsubscribe: () => { },
            };
        }, () => source);
    };
}
exports.refCountForever = refCountForever;

},{"rxjs":126}],97:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refCountOn = void 0;
const rxjs_1 = require("rxjs");
function refCountOn(scheduler) {
    return (source) => {
        const connectable = source;
        let count = 0;
        let subscription = null;
        return rxjs_1.using(() => {
            ++count;
            scheduler.schedule(() => {
                if (!subscription && count > 0) {
                    subscription = connectable.connect();
                }
            });
            return {
                unsubscribe: () => {
                    --count;
                    scheduler.schedule(() => {
                        if (subscription && count === 0) {
                            subscription.unsubscribe();
                            subscription = null;
                        }
                    });
                },
            };
        }, () => source);
    };
}
exports.refCountOn = refCountOn;

},{"rxjs":126}],98:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reschedule = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function reschedule(scheduler = rxjs_1.asapScheduler) {
    return operators_1.concatMap((value) => rxjs_1.of(value, scheduler));
}
exports.reschedule = reschedule;

},{"rxjs":126,"rxjs/operators":351}],99:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipSync = void 0;
const rxjs_1 = require("rxjs");
function skipSync() {
    return (source) => new rxjs_1.Observable((subscriber) => {
        let subscribed = false;
        const subscription = source.subscribe((value) => subscribed && subscriber.next(value), subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
        subscribed = true;
        return subscription;
    });
}
exports.skipSync = skipSync;

},{"rxjs":126}],100:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitBy = void 0;
const rxjs_1 = require("rxjs");
const bucketBy_1 = require("./bucketBy");
function splitBy(predicate, subjectSelector = () => new rxjs_1.Subject()) {
    return bucketBy_1.bucketBy(2, (value, index) => (predicate(value, index) ? 0 : 1), subjectSelector);
}
exports.splitBy = splitBy;

},{"./bucketBy":60,"rxjs":126}],101:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spread = void 0;
function spread(...operations) {
    return (source) => operations.reduce((acc, operator) => acc.pipe(operator), source);
}
exports.spread = spread;

},{}],102:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWithDeferred = void 0;
const rxjs_1 = require("rxjs");
function startWithDeferred(factory, scheduler) {
    return (source) => rxjs_1.concat(rxjs_1.defer(() => {
        const value = factory();
        return scheduler ? rxjs_1.of(value, scheduler) : rxjs_1.of(value);
    }), source);
}
exports.startWithDeferred = startWithDeferred;

},{"rxjs":126}],103:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWithTimeout = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function startWithTimeout(value, duration, scheduler) {
    if (duration === 0 && !scheduler) {
        return (source) => new rxjs_1.Observable((subscriber) => {
            let nexted = false;
            const subscription = source.subscribe((value) => {
                nexted = true;
                subscriber.next(value);
            }, subscriber.error.bind(subscriber), subscriber.complete.bind(subscriber));
            if (!nexted) {
                subscriber.next(value);
            }
            return subscription;
        });
    }
    return (source) => source.pipe(operators_1.publish((published) => rxjs_1.race(published, rxjs_1.concat(rxjs_1.timer(duration, scheduler).pipe(operators_1.mapTo(value)), published))));
}
exports.startWithTimeout = startWithTimeout;

},{"rxjs":126,"rxjs/operators":351}],104:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subsequent = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function subsequent(countOrOperator, operator) {
    let count;
    if (typeof countOrOperator === "number") {
        count = countOrOperator;
    }
    else {
        count = 1;
        operator = countOrOperator;
    }
    return (source) => source.pipe(operators_1.publish((published) => rxjs_1.concat(published.pipe(operators_1.take(count)), published.pipe(operator))));
}
exports.subsequent = subsequent;

},{"rxjs":126,"rxjs/operators":351}],105:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchMapUntil = void 0;
const operators_1 = require("rxjs/operators");
function switchMapUntil(prelude, project) {
    return (source) => source.pipe(operators_1.publish((shared) => shared.pipe(prelude, operators_1.switchMap((value, index) => project(value, index).pipe(operators_1.takeUntil(shared))))));
}
exports.switchMapUntil = switchMapUntil;

},{"rxjs/operators":351}],106:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTap = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function switchTap(next) {
    return (source) => source.pipe(operators_1.publish((published) => published.pipe(operators_1.concatMap((value) => rxjs_1.concat(rxjs_1.from(next(value)).pipe(operators_1.ignoreElements(), operators_1.takeUntil(published)), rxjs_1.of(value))))));
}
exports.switchTap = switchTap;

},{"rxjs":126,"rxjs/operators":351}],107:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeSync = void 0;
const rxjs_1 = require("rxjs");
function takeSync() {
    return (source) => new rxjs_1.Observable((subscriber) => {
        const subscription = source.subscribe(subscriber);
        subscriber.complete();
        return subscription;
    });
}
exports.takeSync = takeSync;

},{"rxjs":126}],108:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhileInclusive = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function takeWhileInclusive(predicate) {
    return (source) => source.pipe(operators_1.multicast(() => new rxjs_1.ReplaySubject(1), (sharedSource) => rxjs_1.concat(sharedSource.pipe(operators_1.takeWhile(predicate)), sharedSource.pipe(operators_1.take(1), operators_1.filter((value) => !predicate(value))))));
}
exports.takeWhileInclusive = takeWhileInclusive;

},{"rxjs":126,"rxjs/operators":351}],109:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapSubscribe = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function tapSubscribe(configOrSubscribe) {
    const { ignore = {}, subscribe = rxjs_1.noop, unsubscribe = rxjs_1.noop } = typeof configOrSubscribe === "function"
        ? { subscribe: configOrSubscribe }
        : configOrSubscribe;
    return (source) => rxjs_1.defer(() => {
        let completed = false;
        let errored = false;
        subscribe();
        return source.pipe(operators_1.tap({
            complete: () => (completed = true),
            error: () => (errored = true),
        }), operators_1.finalize(() => {
            if (completed && ignore.complete) {
                return;
            }
            if (errored && ignore.error) {
                return;
            }
            unsubscribe();
        }));
    });
}
exports.tapSubscribe = tapSubscribe;

},{"rxjs":126,"rxjs/operators":351}],110:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tapWithIndex = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function tapWithIndex(nextOrObserver, error, complete) {
    return (source) => rxjs_1.defer(() => {
        let index = -1;
        let context;
        let handleNext;
        let handleError;
        let handleComplete;
        if (nextOrObserver && typeof nextOrObserver !== "function") {
            context = nextOrObserver;
            handleNext = nextOrObserver.next || rxjs_1.noop;
            handleError = nextOrObserver.error || rxjs_1.noop;
            handleComplete = nextOrObserver.complete || rxjs_1.noop;
        }
        else {
            context = undefined;
            handleNext = nextOrObserver || rxjs_1.noop;
            handleError = error || rxjs_1.noop;
            handleComplete = complete || rxjs_1.noop;
        }
        return source.pipe(operators_1.tap((value) => handleNext.call(context, [value, ++index]), (error) => handleError.call(context, error), () => handleComplete.call(context)));
    });
}
exports.tapWithIndex = tapWithIndex;

},{"rxjs":126,"rxjs/operators":351}],111:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttleAfter = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function throttleAfter(notifier, duration, scheduler) {
    return (source) => source.pipe(operators_1.publish((sharedSource) => notifier.pipe(operators_1.switchMap(() => rxjs_1.concat(rxjs_1.of(true), operators_1.delay(duration, scheduler)(rxjs_1.of(false)))), operators_1.startWith(false), operators_1.distinctUntilChanged(), operators_1.publish((sharedSignal) => sharedSignal.pipe(operators_1.concatMap((signalled) => signalled
        ? sharedSource.pipe(operators_1.take(1), operators_1.takeUntil(sharedSignal.pipe(operators_1.filter((signalled) => !signalled))))
        : sharedSource.pipe(operators_1.takeUntil(sharedSignal.pipe(operators_1.filter((signalled) => signalled))))))))));
}
exports.throttleAfter = throttleAfter;

},{"rxjs":126,"rxjs/operators":351}],112:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsubscribeOn = void 0;
const rxjs_1 = require("rxjs");
function unsubscribeOn(scheduler, delay = 0) {
    return (source) => source.lift(new UnsubscribeOnOperator(scheduler, delay));
}
exports.unsubscribeOn = unsubscribeOn;
class UnsubscribeOnOperator {
    constructor(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return source.subscribe(new UnsubscribeOnSubscriber(subscriber, this.scheduler, this.delay));
    }
}
class UnsubscribeOnSubscriber extends rxjs_1.Subscriber {
    constructor(destination, scheduler, delay) {
        super(destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    unsubscribe() {
        const { delay, scheduler } = this;
        scheduler.schedule(() => super.unsubscribe(), delay);
    }
}

},{"rxjs":126}],113:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLatestFromWhen = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function withLatestFromWhen(...args) {
    const flushSelector = args.pop();
    const observables = args;
    return (source) => new rxjs_1.Observable((subscriber) => {
        const publishedSource = operators_1.publish()(source);
        const publishedObservables = observables.map((o) => rxjs_1.from(o).pipe(operators_1.publish()));
        const subscription = new rxjs_1.Subscription();
        subscription.add(flushSelector()
            .pipe(operators_1.startWith(undefined), operators_1.switchMap(() => publishedSource.pipe(operators_1.withLatestFrom(...publishedObservables))))
            .subscribe(subscriber));
        publishedObservables.forEach((p) => subscription.add(p.connect()));
        subscription.add(publishedSource.connect());
        return subscription;
    });
}
exports.withLatestFromWhen = withLatestFromWhen;

},{"rxjs":126,"rxjs/operators":351}],114:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],115:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterZoneScheduler = void 0;
class EnterZoneScheduler {
    constructor(zone, scheduler) {
        this.zone = zone;
        this.scheduler = scheduler;
    }
    schedule(...args) {
        return this.zone.run(() => this.scheduler.schedule.apply(this.scheduler, args));
    }
}
exports.EnterZoneScheduler = EnterZoneScheduler;

},{}],116:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveZoneScheduler = void 0;
class LeaveZoneScheduler {
    constructor(zone, scheduler) {
        this.zone = zone;
        this.scheduler = scheduler;
    }
    schedule(...args) {
        return this.zone.runOutsideAngular(() => this.scheduler.schedule.apply(this.scheduler, args));
    }
}
exports.LeaveZoneScheduler = LeaveZoneScheduler;

},{}],117:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enterZone = void 0;
const rxjs_1 = require("rxjs");
const EnterZoneScheduler_1 = require("./EnterZoneScheduler");
function enterZone(zone, scheduler = rxjs_1.queueScheduler) {
    return new EnterZoneScheduler_1.EnterZoneScheduler(zone, scheduler);
}
exports.enterZone = enterZone;

},{"./EnterZoneScheduler":115,"rxjs":126}],118:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./enterZone"), exports);
__exportStar(require("./EnterZoneScheduler"), exports);
__exportStar(require("./leaveZone"), exports);
__exportStar(require("./LeaveZoneScheduler"), exports);

},{"./EnterZoneScheduler":115,"./LeaveZoneScheduler":116,"./enterZone":117,"./leaveZone":119}],119:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveZone = void 0;
const rxjs_1 = require("rxjs");
const LeaveZoneScheduler_1 = require("./LeaveZoneScheduler");
function leaveZone(zone, scheduler = rxjs_1.queueScheduler) {
    return new LeaveZoneScheduler_1.LeaveZoneScheduler(zone, scheduler);
}
exports.leaveZone = leaveZone;

},{"./LeaveZoneScheduler":116,"rxjs":126}],120:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScheduler = exports.isObservable = exports.isNullish = exports.isNulled = exports.isNotNullish = exports.isNonNulled = void 0;
function isNonNulled(value) {
    return value != null;
}
exports.isNonNulled = isNonNulled;
exports.isNotNullish = isNonNulled;
function isNulled(value) {
    return value == null;
}
exports.isNulled = isNulled;
exports.isNullish = isNulled;
function isObservable(value) {
    return Boolean(value &&
        typeof value === "object" &&
        typeof value["subscribe"] === "function");
}
exports.isObservable = isObservable;
function isScheduler(value) {
    return Boolean(value && typeof value["schedule"] === "function");
}
exports.isScheduler = isScheduler;

},{}],121:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./patch"), exports);
__exportStar(require("./symbols"), exports);
__exportStar(require("./to-observer"), exports);
__exportStar(require("./types"), exports);

},{"./patch":122,"./symbols":123,"./to-observer":124,"./types":125}],122:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = void 0;
const symbols_1 = require("./symbols");
function patch(arg) {
    if (!Symbol.observable) {
        if (typeof arg === "function" &&
            arg.prototype &&
            arg.prototype[Symbol.observable]) {
            arg.prototype[symbols_1.observable] = arg.prototype[Symbol.observable];
            delete arg.prototype[Symbol.observable];
        }
        else {
            arg[symbols_1.observable] = arg[Symbol.observable];
            delete arg[Symbol.observable];
        }
    }
    return arg;
}
exports.patch = patch;

},{"./symbols":123}],123:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = void 0;
exports.observable = Symbol.observable || "@@observable";

},{}],124:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toObserver = void 0;
const noop = () => { };
const rethrow = (error) => {
    throw error;
};
function toObserver(observer) {
    if (observer) {
        if (observer.next && observer.error && observer.complete) {
            return observer;
        }
        return {
            complete: (observer.complete ?? noop).bind(observer),
            error: (observer.error ?? rethrow).bind(observer),
            next: (observer.next ?? noop).bind(observer),
        };
    }
    return {
        complete: noop,
        error: rethrow,
        next: noop,
    };
}
exports.toObserver = toObserver;

},{}],125:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],126:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
var Observable_1 = require("./internal/Observable");
Object.defineProperty(exports, "Observable", { enumerable: true, get: function () { return Observable_1.Observable; } });
var ConnectableObservable_1 = require("./internal/observable/ConnectableObservable");
Object.defineProperty(exports, "ConnectableObservable", { enumerable: true, get: function () { return ConnectableObservable_1.ConnectableObservable; } });
var observable_1 = require("./internal/symbol/observable");
Object.defineProperty(exports, "observable", { enumerable: true, get: function () { return observable_1.observable; } });
var animationFrames_1 = require("./internal/observable/dom/animationFrames");
Object.defineProperty(exports, "animationFrames", { enumerable: true, get: function () { return animationFrames_1.animationFrames; } });
var Subject_1 = require("./internal/Subject");
Object.defineProperty(exports, "Subject", { enumerable: true, get: function () { return Subject_1.Subject; } });
var BehaviorSubject_1 = require("./internal/BehaviorSubject");
Object.defineProperty(exports, "BehaviorSubject", { enumerable: true, get: function () { return BehaviorSubject_1.BehaviorSubject; } });
var ReplaySubject_1 = require("./internal/ReplaySubject");
Object.defineProperty(exports, "ReplaySubject", { enumerable: true, get: function () { return ReplaySubject_1.ReplaySubject; } });
var AsyncSubject_1 = require("./internal/AsyncSubject");
Object.defineProperty(exports, "AsyncSubject", { enumerable: true, get: function () { return AsyncSubject_1.AsyncSubject; } });
var asap_1 = require("./internal/scheduler/asap");
Object.defineProperty(exports, "asap", { enumerable: true, get: function () { return asap_1.asap; } });
Object.defineProperty(exports, "asapScheduler", { enumerable: true, get: function () { return asap_1.asapScheduler; } });
var async_1 = require("./internal/scheduler/async");
Object.defineProperty(exports, "async", { enumerable: true, get: function () { return async_1.async; } });
Object.defineProperty(exports, "asyncScheduler", { enumerable: true, get: function () { return async_1.asyncScheduler; } });
var queue_1 = require("./internal/scheduler/queue");
Object.defineProperty(exports, "queue", { enumerable: true, get: function () { return queue_1.queue; } });
Object.defineProperty(exports, "queueScheduler", { enumerable: true, get: function () { return queue_1.queueScheduler; } });
var animationFrame_1 = require("./internal/scheduler/animationFrame");
Object.defineProperty(exports, "animationFrame", { enumerable: true, get: function () { return animationFrame_1.animationFrame; } });
Object.defineProperty(exports, "animationFrameScheduler", { enumerable: true, get: function () { return animationFrame_1.animationFrameScheduler; } });
var VirtualTimeScheduler_1 = require("./internal/scheduler/VirtualTimeScheduler");
Object.defineProperty(exports, "VirtualTimeScheduler", { enumerable: true, get: function () { return VirtualTimeScheduler_1.VirtualTimeScheduler; } });
Object.defineProperty(exports, "VirtualAction", { enumerable: true, get: function () { return VirtualTimeScheduler_1.VirtualAction; } });
var Scheduler_1 = require("./internal/Scheduler");
Object.defineProperty(exports, "Scheduler", { enumerable: true, get: function () { return Scheduler_1.Scheduler; } });
var Subscription_1 = require("./internal/Subscription");
Object.defineProperty(exports, "Subscription", { enumerable: true, get: function () { return Subscription_1.Subscription; } });
var Subscriber_1 = require("./internal/Subscriber");
Object.defineProperty(exports, "Subscriber", { enumerable: true, get: function () { return Subscriber_1.Subscriber; } });
var Notification_1 = require("./internal/Notification");
Object.defineProperty(exports, "Notification", { enumerable: true, get: function () { return Notification_1.Notification; } });
Object.defineProperty(exports, "NotificationKind", { enumerable: true, get: function () { return Notification_1.NotificationKind; } });
var pipe_1 = require("./internal/util/pipe");
Object.defineProperty(exports, "pipe", { enumerable: true, get: function () { return pipe_1.pipe; } });
var noop_1 = require("./internal/util/noop");
Object.defineProperty(exports, "noop", { enumerable: true, get: function () { return noop_1.noop; } });
var identity_1 = require("./internal/util/identity");
Object.defineProperty(exports, "identity", { enumerable: true, get: function () { return identity_1.identity; } });
var isObservable_1 = require("./internal/util/isObservable");
Object.defineProperty(exports, "isObservable", { enumerable: true, get: function () { return isObservable_1.isObservable; } });
var lastValueFrom_1 = require("./internal/lastValueFrom");
Object.defineProperty(exports, "lastValueFrom", { enumerable: true, get: function () { return lastValueFrom_1.lastValueFrom; } });
var firstValueFrom_1 = require("./internal/firstValueFrom");
Object.defineProperty(exports, "firstValueFrom", { enumerable: true, get: function () { return firstValueFrom_1.firstValueFrom; } });
var ArgumentOutOfRangeError_1 = require("./internal/util/ArgumentOutOfRangeError");
Object.defineProperty(exports, "ArgumentOutOfRangeError", { enumerable: true, get: function () { return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError; } });
var EmptyError_1 = require("./internal/util/EmptyError");
Object.defineProperty(exports, "EmptyError", { enumerable: true, get: function () { return EmptyError_1.EmptyError; } });
var NotFoundError_1 = require("./internal/util/NotFoundError");
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return NotFoundError_1.NotFoundError; } });
var ObjectUnsubscribedError_1 = require("./internal/util/ObjectUnsubscribedError");
Object.defineProperty(exports, "ObjectUnsubscribedError", { enumerable: true, get: function () { return ObjectUnsubscribedError_1.ObjectUnsubscribedError; } });
var SequenceError_1 = require("./internal/util/SequenceError");
Object.defineProperty(exports, "SequenceError", { enumerable: true, get: function () { return SequenceError_1.SequenceError; } });
var timeout_1 = require("./internal/operators/timeout");
Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function () { return timeout_1.TimeoutError; } });
var UnsubscriptionError_1 = require("./internal/util/UnsubscriptionError");
Object.defineProperty(exports, "UnsubscriptionError", { enumerable: true, get: function () { return UnsubscriptionError_1.UnsubscriptionError; } });
var bindCallback_1 = require("./internal/observable/bindCallback");
Object.defineProperty(exports, "bindCallback", { enumerable: true, get: function () { return bindCallback_1.bindCallback; } });
var bindNodeCallback_1 = require("./internal/observable/bindNodeCallback");
Object.defineProperty(exports, "bindNodeCallback", { enumerable: true, get: function () { return bindNodeCallback_1.bindNodeCallback; } });
var combineLatest_1 = require("./internal/observable/combineLatest");
Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function () { return combineLatest_1.combineLatest; } });
var concat_1 = require("./internal/observable/concat");
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return concat_1.concat; } });
var connectable_1 = require("./internal/observable/connectable");
Object.defineProperty(exports, "connectable", { enumerable: true, get: function () { return connectable_1.connectable; } });
var defer_1 = require("./internal/observable/defer");
Object.defineProperty(exports, "defer", { enumerable: true, get: function () { return defer_1.defer; } });
var empty_1 = require("./internal/observable/empty");
Object.defineProperty(exports, "empty", { enumerable: true, get: function () { return empty_1.empty; } });
var forkJoin_1 = require("./internal/observable/forkJoin");
Object.defineProperty(exports, "forkJoin", { enumerable: true, get: function () { return forkJoin_1.forkJoin; } });
var from_1 = require("./internal/observable/from");
Object.defineProperty(exports, "from", { enumerable: true, get: function () { return from_1.from; } });
var fromEvent_1 = require("./internal/observable/fromEvent");
Object.defineProperty(exports, "fromEvent", { enumerable: true, get: function () { return fromEvent_1.fromEvent; } });
var fromEventPattern_1 = require("./internal/observable/fromEventPattern");
Object.defineProperty(exports, "fromEventPattern", { enumerable: true, get: function () { return fromEventPattern_1.fromEventPattern; } });
var generate_1 = require("./internal/observable/generate");
Object.defineProperty(exports, "generate", { enumerable: true, get: function () { return generate_1.generate; } });
var iif_1 = require("./internal/observable/iif");
Object.defineProperty(exports, "iif", { enumerable: true, get: function () { return iif_1.iif; } });
var interval_1 = require("./internal/observable/interval");
Object.defineProperty(exports, "interval", { enumerable: true, get: function () { return interval_1.interval; } });
var merge_1 = require("./internal/observable/merge");
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return merge_1.merge; } });
var never_1 = require("./internal/observable/never");
Object.defineProperty(exports, "never", { enumerable: true, get: function () { return never_1.never; } });
var of_1 = require("./internal/observable/of");
Object.defineProperty(exports, "of", { enumerable: true, get: function () { return of_1.of; } });
var onErrorResumeNext_1 = require("./internal/observable/onErrorResumeNext");
Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function () { return onErrorResumeNext_1.onErrorResumeNext; } });
var pairs_1 = require("./internal/observable/pairs");
Object.defineProperty(exports, "pairs", { enumerable: true, get: function () { return pairs_1.pairs; } });
var partition_1 = require("./internal/observable/partition");
Object.defineProperty(exports, "partition", { enumerable: true, get: function () { return partition_1.partition; } });
var race_1 = require("./internal/observable/race");
Object.defineProperty(exports, "race", { enumerable: true, get: function () { return race_1.race; } });
var range_1 = require("./internal/observable/range");
Object.defineProperty(exports, "range", { enumerable: true, get: function () { return range_1.range; } });
var throwError_1 = require("./internal/observable/throwError");
Object.defineProperty(exports, "throwError", { enumerable: true, get: function () { return throwError_1.throwError; } });
var timer_1 = require("./internal/observable/timer");
Object.defineProperty(exports, "timer", { enumerable: true, get: function () { return timer_1.timer; } });
var using_1 = require("./internal/observable/using");
Object.defineProperty(exports, "using", { enumerable: true, get: function () { return using_1.using; } });
var zip_1 = require("./internal/observable/zip");
Object.defineProperty(exports, "zip", { enumerable: true, get: function () { return zip_1.zip; } });
var scheduled_1 = require("./internal/scheduled/scheduled");
Object.defineProperty(exports, "scheduled", { enumerable: true, get: function () { return scheduled_1.scheduled; } });
var empty_2 = require("./internal/observable/empty");
Object.defineProperty(exports, "EMPTY", { enumerable: true, get: function () { return empty_2.EMPTY; } });
var never_2 = require("./internal/observable/never");
Object.defineProperty(exports, "NEVER", { enumerable: true, get: function () { return never_2.NEVER; } });
__exportStar(require("./internal/types"), exports);
var config_1 = require("./internal/config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_1.config; } });
var audit_1 = require("./internal/operators/audit");
Object.defineProperty(exports, "audit", { enumerable: true, get: function () { return audit_1.audit; } });
var auditTime_1 = require("./internal/operators/auditTime");
Object.defineProperty(exports, "auditTime", { enumerable: true, get: function () { return auditTime_1.auditTime; } });
var buffer_1 = require("./internal/operators/buffer");
Object.defineProperty(exports, "buffer", { enumerable: true, get: function () { return buffer_1.buffer; } });
var bufferCount_1 = require("./internal/operators/bufferCount");
Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function () { return bufferCount_1.bufferCount; } });
var bufferTime_1 = require("./internal/operators/bufferTime");
Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function () { return bufferTime_1.bufferTime; } });
var bufferToggle_1 = require("./internal/operators/bufferToggle");
Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function () { return bufferToggle_1.bufferToggle; } });
var bufferWhen_1 = require("./internal/operators/bufferWhen");
Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function () { return bufferWhen_1.bufferWhen; } });
var catchError_1 = require("./internal/operators/catchError");
Object.defineProperty(exports, "catchError", { enumerable: true, get: function () { return catchError_1.catchError; } });
var combineAll_1 = require("./internal/operators/combineAll");
Object.defineProperty(exports, "combineAll", { enumerable: true, get: function () { return combineAll_1.combineAll; } });
var combineLatestAll_1 = require("./internal/operators/combineLatestAll");
Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function () { return combineLatestAll_1.combineLatestAll; } });
var combineLatestWith_1 = require("./internal/operators/combineLatestWith");
Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function () { return combineLatestWith_1.combineLatestWith; } });
var concatAll_1 = require("./internal/operators/concatAll");
Object.defineProperty(exports, "concatAll", { enumerable: true, get: function () { return concatAll_1.concatAll; } });
var concatMap_1 = require("./internal/operators/concatMap");
Object.defineProperty(exports, "concatMap", { enumerable: true, get: function () { return concatMap_1.concatMap; } });
var concatMapTo_1 = require("./internal/operators/concatMapTo");
Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function () { return concatMapTo_1.concatMapTo; } });
var concatWith_1 = require("./internal/operators/concatWith");
Object.defineProperty(exports, "concatWith", { enumerable: true, get: function () { return concatWith_1.concatWith; } });
var connect_1 = require("./internal/operators/connect");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return connect_1.connect; } });
var count_1 = require("./internal/operators/count");
Object.defineProperty(exports, "count", { enumerable: true, get: function () { return count_1.count; } });
var debounce_1 = require("./internal/operators/debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return debounce_1.debounce; } });
var debounceTime_1 = require("./internal/operators/debounceTime");
Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function () { return debounceTime_1.debounceTime; } });
var defaultIfEmpty_1 = require("./internal/operators/defaultIfEmpty");
Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function () { return defaultIfEmpty_1.defaultIfEmpty; } });
var delay_1 = require("./internal/operators/delay");
Object.defineProperty(exports, "delay", { enumerable: true, get: function () { return delay_1.delay; } });
var delayWhen_1 = require("./internal/operators/delayWhen");
Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function () { return delayWhen_1.delayWhen; } });
var dematerialize_1 = require("./internal/operators/dematerialize");
Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function () { return dematerialize_1.dematerialize; } });
var distinct_1 = require("./internal/operators/distinct");
Object.defineProperty(exports, "distinct", { enumerable: true, get: function () { return distinct_1.distinct; } });
var distinctUntilChanged_1 = require("./internal/operators/distinctUntilChanged");
Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function () { return distinctUntilChanged_1.distinctUntilChanged; } });
var distinctUntilKeyChanged_1 = require("./internal/operators/distinctUntilKeyChanged");
Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function () { return distinctUntilKeyChanged_1.distinctUntilKeyChanged; } });
var elementAt_1 = require("./internal/operators/elementAt");
Object.defineProperty(exports, "elementAt", { enumerable: true, get: function () { return elementAt_1.elementAt; } });
var endWith_1 = require("./internal/operators/endWith");
Object.defineProperty(exports, "endWith", { enumerable: true, get: function () { return endWith_1.endWith; } });
var every_1 = require("./internal/operators/every");
Object.defineProperty(exports, "every", { enumerable: true, get: function () { return every_1.every; } });
var exhaust_1 = require("./internal/operators/exhaust");
Object.defineProperty(exports, "exhaust", { enumerable: true, get: function () { return exhaust_1.exhaust; } });
var exhaustAll_1 = require("./internal/operators/exhaustAll");
Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function () { return exhaustAll_1.exhaustAll; } });
var exhaustMap_1 = require("./internal/operators/exhaustMap");
Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function () { return exhaustMap_1.exhaustMap; } });
var expand_1 = require("./internal/operators/expand");
Object.defineProperty(exports, "expand", { enumerable: true, get: function () { return expand_1.expand; } });
var filter_1 = require("./internal/operators/filter");
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return filter_1.filter; } });
var finalize_1 = require("./internal/operators/finalize");
Object.defineProperty(exports, "finalize", { enumerable: true, get: function () { return finalize_1.finalize; } });
var find_1 = require("./internal/operators/find");
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_1.find; } });
var findIndex_1 = require("./internal/operators/findIndex");
Object.defineProperty(exports, "findIndex", { enumerable: true, get: function () { return findIndex_1.findIndex; } });
var first_1 = require("./internal/operators/first");
Object.defineProperty(exports, "first", { enumerable: true, get: function () { return first_1.first; } });
var groupBy_1 = require("./internal/operators/groupBy");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return groupBy_1.groupBy; } });
var ignoreElements_1 = require("./internal/operators/ignoreElements");
Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function () { return ignoreElements_1.ignoreElements; } });
var isEmpty_1 = require("./internal/operators/isEmpty");
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return isEmpty_1.isEmpty; } });
var last_1 = require("./internal/operators/last");
Object.defineProperty(exports, "last", { enumerable: true, get: function () { return last_1.last; } });
var map_1 = require("./internal/operators/map");
Object.defineProperty(exports, "map", { enumerable: true, get: function () { return map_1.map; } });
var mapTo_1 = require("./internal/operators/mapTo");
Object.defineProperty(exports, "mapTo", { enumerable: true, get: function () { return mapTo_1.mapTo; } });
var materialize_1 = require("./internal/operators/materialize");
Object.defineProperty(exports, "materialize", { enumerable: true, get: function () { return materialize_1.materialize; } });
var max_1 = require("./internal/operators/max");
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.max; } });
var mergeAll_1 = require("./internal/operators/mergeAll");
Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function () { return mergeAll_1.mergeAll; } });
var flatMap_1 = require("./internal/operators/flatMap");
Object.defineProperty(exports, "flatMap", { enumerable: true, get: function () { return flatMap_1.flatMap; } });
var mergeMap_1 = require("./internal/operators/mergeMap");
Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function () { return mergeMap_1.mergeMap; } });
var mergeMapTo_1 = require("./internal/operators/mergeMapTo");
Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function () { return mergeMapTo_1.mergeMapTo; } });
var mergeScan_1 = require("./internal/operators/mergeScan");
Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function () { return mergeScan_1.mergeScan; } });
var mergeWith_1 = require("./internal/operators/mergeWith");
Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function () { return mergeWith_1.mergeWith; } });
var min_1 = require("./internal/operators/min");
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.min; } });
var multicast_1 = require("./internal/operators/multicast");
Object.defineProperty(exports, "multicast", { enumerable: true, get: function () { return multicast_1.multicast; } });
var observeOn_1 = require("./internal/operators/observeOn");
Object.defineProperty(exports, "observeOn", { enumerable: true, get: function () { return observeOn_1.observeOn; } });
var onErrorResumeNextWith_1 = require("./internal/operators/onErrorResumeNextWith");
Object.defineProperty(exports, "onErrorResumeNextWith", { enumerable: true, get: function () { return onErrorResumeNextWith_1.onErrorResumeNextWith; } });
var pairwise_1 = require("./internal/operators/pairwise");
Object.defineProperty(exports, "pairwise", { enumerable: true, get: function () { return pairwise_1.pairwise; } });
var pluck_1 = require("./internal/operators/pluck");
Object.defineProperty(exports, "pluck", { enumerable: true, get: function () { return pluck_1.pluck; } });
var publish_1 = require("./internal/operators/publish");
Object.defineProperty(exports, "publish", { enumerable: true, get: function () { return publish_1.publish; } });
var publishBehavior_1 = require("./internal/operators/publishBehavior");
Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function () { return publishBehavior_1.publishBehavior; } });
var publishLast_1 = require("./internal/operators/publishLast");
Object.defineProperty(exports, "publishLast", { enumerable: true, get: function () { return publishLast_1.publishLast; } });
var publishReplay_1 = require("./internal/operators/publishReplay");
Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function () { return publishReplay_1.publishReplay; } });
var raceWith_1 = require("./internal/operators/raceWith");
Object.defineProperty(exports, "raceWith", { enumerable: true, get: function () { return raceWith_1.raceWith; } });
var reduce_1 = require("./internal/operators/reduce");
Object.defineProperty(exports, "reduce", { enumerable: true, get: function () { return reduce_1.reduce; } });
var repeat_1 = require("./internal/operators/repeat");
Object.defineProperty(exports, "repeat", { enumerable: true, get: function () { return repeat_1.repeat; } });
var repeatWhen_1 = require("./internal/operators/repeatWhen");
Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function () { return repeatWhen_1.repeatWhen; } });
var retry_1 = require("./internal/operators/retry");
Object.defineProperty(exports, "retry", { enumerable: true, get: function () { return retry_1.retry; } });
var retryWhen_1 = require("./internal/operators/retryWhen");
Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function () { return retryWhen_1.retryWhen; } });
var refCount_1 = require("./internal/operators/refCount");
Object.defineProperty(exports, "refCount", { enumerable: true, get: function () { return refCount_1.refCount; } });
var sample_1 = require("./internal/operators/sample");
Object.defineProperty(exports, "sample", { enumerable: true, get: function () { return sample_1.sample; } });
var sampleTime_1 = require("./internal/operators/sampleTime");
Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function () { return sampleTime_1.sampleTime; } });
var scan_1 = require("./internal/operators/scan");
Object.defineProperty(exports, "scan", { enumerable: true, get: function () { return scan_1.scan; } });
var sequenceEqual_1 = require("./internal/operators/sequenceEqual");
Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function () { return sequenceEqual_1.sequenceEqual; } });
var share_1 = require("./internal/operators/share");
Object.defineProperty(exports, "share", { enumerable: true, get: function () { return share_1.share; } });
var shareReplay_1 = require("./internal/operators/shareReplay");
Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function () { return shareReplay_1.shareReplay; } });
var single_1 = require("./internal/operators/single");
Object.defineProperty(exports, "single", { enumerable: true, get: function () { return single_1.single; } });
var skip_1 = require("./internal/operators/skip");
Object.defineProperty(exports, "skip", { enumerable: true, get: function () { return skip_1.skip; } });
var skipLast_1 = require("./internal/operators/skipLast");
Object.defineProperty(exports, "skipLast", { enumerable: true, get: function () { return skipLast_1.skipLast; } });
var skipUntil_1 = require("./internal/operators/skipUntil");
Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function () { return skipUntil_1.skipUntil; } });
var skipWhile_1 = require("./internal/operators/skipWhile");
Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function () { return skipWhile_1.skipWhile; } });
var startWith_1 = require("./internal/operators/startWith");
Object.defineProperty(exports, "startWith", { enumerable: true, get: function () { return startWith_1.startWith; } });
var subscribeOn_1 = require("./internal/operators/subscribeOn");
Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function () { return subscribeOn_1.subscribeOn; } });
var switchAll_1 = require("./internal/operators/switchAll");
Object.defineProperty(exports, "switchAll", { enumerable: true, get: function () { return switchAll_1.switchAll; } });
var switchMap_1 = require("./internal/operators/switchMap");
Object.defineProperty(exports, "switchMap", { enumerable: true, get: function () { return switchMap_1.switchMap; } });
var switchMapTo_1 = require("./internal/operators/switchMapTo");
Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function () { return switchMapTo_1.switchMapTo; } });
var switchScan_1 = require("./internal/operators/switchScan");
Object.defineProperty(exports, "switchScan", { enumerable: true, get: function () { return switchScan_1.switchScan; } });
var take_1 = require("./internal/operators/take");
Object.defineProperty(exports, "take", { enumerable: true, get: function () { return take_1.take; } });
var takeLast_1 = require("./internal/operators/takeLast");
Object.defineProperty(exports, "takeLast", { enumerable: true, get: function () { return takeLast_1.takeLast; } });
var takeUntil_1 = require("./internal/operators/takeUntil");
Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function () { return takeUntil_1.takeUntil; } });
var takeWhile_1 = require("./internal/operators/takeWhile");
Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function () { return takeWhile_1.takeWhile; } });
var tap_1 = require("./internal/operators/tap");
Object.defineProperty(exports, "tap", { enumerable: true, get: function () { return tap_1.tap; } });
var throttle_1 = require("./internal/operators/throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return throttle_1.throttle; } });
var throttleTime_1 = require("./internal/operators/throttleTime");
Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function () { return throttleTime_1.throttleTime; } });
var throwIfEmpty_1 = require("./internal/operators/throwIfEmpty");
Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function () { return throwIfEmpty_1.throwIfEmpty; } });
var timeInterval_1 = require("./internal/operators/timeInterval");
Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function () { return timeInterval_1.timeInterval; } });
var timeout_2 = require("./internal/operators/timeout");
Object.defineProperty(exports, "timeout", { enumerable: true, get: function () { return timeout_2.timeout; } });
var timeoutWith_1 = require("./internal/operators/timeoutWith");
Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function () { return timeoutWith_1.timeoutWith; } });
var timestamp_1 = require("./internal/operators/timestamp");
Object.defineProperty(exports, "timestamp", { enumerable: true, get: function () { return timestamp_1.timestamp; } });
var toArray_1 = require("./internal/operators/toArray");
Object.defineProperty(exports, "toArray", { enumerable: true, get: function () { return toArray_1.toArray; } });
var window_1 = require("./internal/operators/window");
Object.defineProperty(exports, "window", { enumerable: true, get: function () { return window_1.window; } });
var windowCount_1 = require("./internal/operators/windowCount");
Object.defineProperty(exports, "windowCount", { enumerable: true, get: function () { return windowCount_1.windowCount; } });
var windowTime_1 = require("./internal/operators/windowTime");
Object.defineProperty(exports, "windowTime", { enumerable: true, get: function () { return windowTime_1.windowTime; } });
var windowToggle_1 = require("./internal/operators/windowToggle");
Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function () { return windowToggle_1.windowToggle; } });
var windowWhen_1 = require("./internal/operators/windowWhen");
Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function () { return windowWhen_1.windowWhen; } });
var withLatestFrom_1 = require("./internal/operators/withLatestFrom");
Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function () { return withLatestFrom_1.withLatestFrom; } });
var zipAll_1 = require("./internal/operators/zipAll");
Object.defineProperty(exports, "zipAll", { enumerable: true, get: function () { return zipAll_1.zipAll; } });
var zipWith_1 = require("./internal/operators/zipWith");
Object.defineProperty(exports, "zipWith", { enumerable: true, get: function () { return zipWith_1.zipWith; } });

},{"./internal/AsyncSubject":127,"./internal/BehaviorSubject":128,"./internal/Notification":129,"./internal/Observable":131,"./internal/ReplaySubject":132,"./internal/Scheduler":133,"./internal/Subject":134,"./internal/Subscriber":135,"./internal/Subscription":136,"./internal/config":137,"./internal/firstValueFrom":138,"./internal/lastValueFrom":139,"./internal/observable/ConnectableObservable":140,"./internal/observable/bindCallback":141,"./internal/observable/bindNodeCallback":143,"./internal/observable/combineLatest":144,"./internal/observable/concat":145,"./internal/observable/connectable":146,"./internal/observable/defer":147,"./internal/observable/dom/animationFrames":148,"./internal/observable/empty":149,"./internal/observable/forkJoin":150,"./internal/observable/from":151,"./internal/observable/fromEvent":152,"./internal/observable/fromEventPattern":153,"./internal/observable/generate":155,"./internal/observable/iif":156,"./internal/observable/interval":158,"./internal/observable/merge":159,"./internal/observable/never":160,"./internal/observable/of":161,"./internal/observable/onErrorResumeNext":162,"./internal/observable/pairs":163,"./internal/observable/partition":164,"./internal/observable/race":165,"./internal/observable/range":166,"./internal/observable/throwError":167,"./internal/observable/timer":168,"./internal/observable/using":169,"./internal/observable/zip":170,"./internal/operators/audit":172,"./internal/operators/auditTime":173,"./internal/operators/buffer":174,"./internal/operators/bufferCount":175,"./internal/operators/bufferTime":176,"./internal/operators/bufferToggle":177,"./internal/operators/bufferWhen":178,"./internal/operators/catchError":179,"./internal/operators/combineAll":180,"./internal/operators/combineLatestAll":182,"./internal/operators/combineLatestWith":183,"./internal/operators/concatAll":185,"./internal/operators/concatMap":186,"./internal/operators/concatMapTo":187,"./internal/operators/concatWith":188,"./internal/operators/connect":189,"./internal/operators/count":190,"./internal/operators/debounce":191,"./internal/operators/debounceTime":192,"./internal/operators/defaultIfEmpty":193,"./internal/operators/delay":194,"./internal/operators/delayWhen":195,"./internal/operators/dematerialize":196,"./internal/operators/distinct":197,"./internal/operators/distinctUntilChanged":198,"./internal/operators/distinctUntilKeyChanged":199,"./internal/operators/elementAt":200,"./internal/operators/endWith":201,"./internal/operators/every":202,"./internal/operators/exhaust":203,"./internal/operators/exhaustAll":204,"./internal/operators/exhaustMap":205,"./internal/operators/expand":206,"./internal/operators/filter":207,"./internal/operators/finalize":208,"./internal/operators/find":209,"./internal/operators/findIndex":210,"./internal/operators/first":211,"./internal/operators/flatMap":212,"./internal/operators/groupBy":213,"./internal/operators/ignoreElements":214,"./internal/operators/isEmpty":215,"./internal/operators/last":217,"./internal/operators/map":218,"./internal/operators/mapTo":219,"./internal/operators/materialize":220,"./internal/operators/max":221,"./internal/operators/mergeAll":223,"./internal/operators/mergeMap":225,"./internal/operators/mergeMapTo":226,"./internal/operators/mergeScan":227,"./internal/operators/mergeWith":228,"./internal/operators/min":229,"./internal/operators/multicast":230,"./internal/operators/observeOn":231,"./internal/operators/onErrorResumeNextWith":232,"./internal/operators/pairwise":233,"./internal/operators/pluck":235,"./internal/operators/publish":236,"./internal/operators/publishBehavior":237,"./internal/operators/publishLast":238,"./internal/operators/publishReplay":239,"./internal/operators/raceWith":241,"./internal/operators/reduce":242,"./internal/operators/refCount":243,"./internal/operators/repeat":244,"./internal/operators/repeatWhen":245,"./internal/operators/retry":246,"./internal/operators/retryWhen":247,"./internal/operators/sample":248,"./internal/operators/sampleTime":249,"./internal/operators/scan":250,"./internal/operators/sequenceEqual":252,"./internal/operators/share":253,"./internal/operators/shareReplay":254,"./internal/operators/single":255,"./internal/operators/skip":256,"./internal/operators/skipLast":257,"./internal/operators/skipUntil":258,"./internal/operators/skipWhile":259,"./internal/operators/startWith":260,"./internal/operators/subscribeOn":261,"./internal/operators/switchAll":262,"./internal/operators/switchMap":263,"./internal/operators/switchMapTo":264,"./internal/operators/switchScan":265,"./internal/operators/take":266,"./internal/operators/takeLast":267,"./internal/operators/takeUntil":268,"./internal/operators/takeWhile":269,"./internal/operators/tap":270,"./internal/operators/throttle":271,"./internal/operators/throttleTime":272,"./internal/operators/throwIfEmpty":273,"./internal/operators/timeInterval":274,"./internal/operators/timeout":275,"./internal/operators/timeoutWith":276,"./internal/operators/timestamp":277,"./internal/operators/toArray":278,"./internal/operators/window":279,"./internal/operators/windowCount":280,"./internal/operators/windowTime":281,"./internal/operators/windowToggle":282,"./internal/operators/windowWhen":283,"./internal/operators/withLatestFrom":284,"./internal/operators/zipAll":286,"./internal/operators/zipWith":287,"./internal/scheduled/scheduled":294,"./internal/scheduler/VirtualTimeScheduler":304,"./internal/scheduler/animationFrame":305,"./internal/scheduler/asap":307,"./internal/scheduler/async":308,"./internal/scheduler/queue":313,"./internal/symbol/observable":316,"./internal/types":317,"./internal/util/ArgumentOutOfRangeError":318,"./internal/util/EmptyError":319,"./internal/util/NotFoundError":321,"./internal/util/ObjectUnsubscribedError":322,"./internal/util/SequenceError":323,"./internal/util/UnsubscriptionError":324,"./internal/util/identity":333,"./internal/util/isObservable":340,"./internal/util/noop":346,"./internal/util/pipe":348}],127:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncSubject = void 0;
var Subject_1 = require("./Subject");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped || _isComplete) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject.prototype.complete = function () {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;

},{"./Subject":134}],128:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorSubject = void 0;
var Subject_1 = require("./Subject");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;

},{"./Subject":134}],129:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = require("./observable/empty");
var of_1 = require("./observable/of");
var throwError_1 = require("./observable/throwError");
var isFunction_1 = require("./util/isFunction");
var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        return observeNotification(this, observer);
    };
    Notification.prototype.do = function (nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next)
            ? this.observe(nextOrObserver)
            : this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function () {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N'
            ?
                of_1.of(value)
            :
                kind === 'E'
                    ?
                        throwError_1.throwError(function () { return error; })
                    :
                        kind === 'C'
                            ?
                                empty_1.EMPTY
                            :
                                0;
        if (!result) {
            throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
    };
    Notification.createNext = function (value) {
        return new Notification('N', value);
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    return Notification;
}());
exports.Notification = Notification;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') {
        throw new TypeError('Invalid notification, missing "kind"');
    }
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}
exports.observeNotification = observeNotification;

},{"./observable/empty":149,"./observable/of":161,"./observable/throwError":167,"./util/isFunction":337}],130:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
exports.createNotification = createNotification;

},{}],131:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
var Subscriber_1 = require("./Subscriber");
var Subscription_1 = require("./Subscription");
var observable_1 = require("./symbol/observable");
var pipe_1 = require("./util/pipe");
var config_1 = require("./config");
var isFunction_1 = require("./util/isFunction");
var errorContext_1 = require("./util/errorContext");
var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new Subscriber_1.SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber_1.Subscriber) || (isObserver(value) && Subscription_1.isSubscription(value));
}

},{"./Subscriber":135,"./Subscription":136,"./config":137,"./symbol/observable":316,"./util/errorContext":331,"./util/isFunction":337,"./util/pipe":348}],132:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaySubject = void 0;
var Subject_1 = require("./Subject");
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) { _bufferSize = Infinity; }
        if (_windowTime === void 0) { _windowTime = Infinity; }
        if (_timestampProvider === void 0) { _timestampProvider = dateTimestampProvider_1.dateTimestampProvider; }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject.prototype.next = function (value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
            subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject.prototype._trimBuffer = function () {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                last = i;
            }
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;

},{"./Subject":134,"./scheduler/dateTimestampProvider":309}],133:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler;
}());
exports.Scheduler = Scheduler;

},{"./scheduler/dateTimestampProvider":309}],134:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = require("./Observable");
var Subscription_1 = require("./Subscription");
var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");
var arrRemove_1 = require("./util/arrRemove");
var errorContext_1 = require("./util/errorContext");
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext_1.errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext_1.errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext_1.errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function () {
            _this.currentObservers = null;
            arrRemove_1.arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;

},{"./Observable":131,"./Subscription":136,"./util/ObjectUnsubscribedError":322,"./util/arrRemove":328,"./util/errorContext":331}],135:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = require("./util/isFunction");
var Subscription_1 = require("./Subscription");
var config_1 = require("./config");
var reportUnhandledError_1 = require("./util/reportUnhandledError");
var noop_1 = require("./util/noop");
var NotificationFactories_1 = require("./NotificationFactories");
var timeoutProvider_1 = require("./scheduler/timeoutProvider");
var errorContext_1 = require("./util/errorContext");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
function handleUnhandledError(error) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
    }
    else {
        reportUnhandledError_1.reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop,
};

},{"./NotificationFactories":130,"./Subscription":136,"./config":137,"./scheduler/timeoutProvider":314,"./util/errorContext":331,"./util/isFunction":337,"./util/noop":346,"./util/reportUnhandledError":349}],136:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = require("./util/isFunction");
var UnsubscriptionError_1 = require("./util/UnsubscriptionError");
var arrRemove_1 = require("./util/arrRemove");
var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_1.isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError_1.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove_1.arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe)));
}
exports.isSubscription = isSubscription;
function execFinalizer(finalizer) {
    if (isFunction_1.isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

},{"./util/UnsubscriptionError":324,"./util/arrRemove":328,"./util/isFunction":337}],137:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

},{}],138:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
var Subscriber_1 = require("./Subscriber");
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError_1.EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom;

},{"./Subscriber":135,"./util/EmptyError":319}],139:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function (value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function () {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError_1.EmptyError());
                }
            },
        });
    });
}
exports.lastValueFrom = lastValueFrom;

},{"./util/EmptyError":319}],140:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectableObservable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
var refCount_1 = require("../operators/refCount");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var lift_1 = require("../util/lift");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
            _this.lift = source.lift;
        }
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype._teardown = function () {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
    };
    ConnectableObservable.prototype.connect = function () {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function () {
                _this._teardown();
                subject_1.complete();
            }, function (err) {
                _this._teardown();
                subject_1.error(err);
            }, function () { return _this._teardown(); })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;

},{"../Observable":131,"../Subscription":136,"../operators/OperatorSubscriber":171,"../operators/refCount":243,"../util/lift":344}],141:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback;

},{"./bindCallbackInternals":142}],142:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindCallbackInternals = void 0;
var isScheduler_1 = require("../util/isScheduler");
var Observable_1 = require("../Observable");
var subscribeOn_1 = require("../operators/subscribeOn");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var observeOn_1 = require("../operators/observeOn");
var AsyncSubject_1 = require("../AsyncSubject");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler)
                    .apply(this, args)
                    .pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc)
                .apply(this, args)
                .pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
    }
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function (subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function () {
                        var results = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            results[_i] = arguments[_i];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    },
                ]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals;

},{"../AsyncSubject":127,"../Observable":131,"../operators/observeOn":231,"../operators/subscribeOn":261,"../util/isScheduler":343,"../util/mapOneOrManyArgs":345}],143:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback;

},{"./bindCallbackInternals":142}],144:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var from_1 = require("./from");
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var args_1 = require("../util/args");
var createObject_1 = require("../util/createObject");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var executeSchedule_1 = require("../util/executeSchedule");
function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) {
        return from_1.from([], scheduler);
    }
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys
        ?
            function (values) { return createObject_1.createObject(keys, values); }
        :
            identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) { valueTransform = identity_1.identity; }
    return function (subscriber) {
        maybeSchedule(scheduler, function () {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function (i) {
                maybeSchedule(scheduler, function () {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) {
                            subscriber.next(valueTransform(values.slice()));
                        }
                    }, function () {
                        if (!--active) {
                            subscriber.complete();
                        }
                    }));
                }, subscriber);
            };
            for (var i = 0; i < length; i++) {
                _loop_1(i);
            }
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
    }
    else {
        execute();
    }
}

},{"../Observable":131,"../operators/OperatorSubscriber":171,"../util/args":325,"../util/argsArgArrayOrObject":326,"../util/createObject":330,"../util/executeSchedule":332,"../util/identity":333,"../util/mapOneOrManyArgs":345,"./from":151}],145:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var concatAll_1 = require("../operators/concatAll");
var args_1 = require("../util/args");
var from_1 = require("./from");
function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
}
exports.concat = concat;

},{"../operators/concatAll":185,"../util/args":325,"./from":151}],146:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectable = void 0;
var Subject_1 = require("../Subject");
var Observable_1 = require("../Observable");
var defer_1 = require("./defer");
var DEFAULT_CONFIG = {
    connector: function () { return new Subject_1.Subject(); },
    resetOnDisconnect: true,
};
function connectable(source, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function (subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function () {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function () { return source; }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function () { return (subject = connector()); });
            }
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable;

},{"../Observable":131,"../Subject":134,"./defer":147}],147:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defer = void 0;
var Observable_1 = require("../Observable");
var innerFrom_1 = require("./innerFrom");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer;

},{"../Observable":131,"./innerFrom":157}],148:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationFrames = void 0;
var Observable_1 = require("../../Observable");
var performanceTimestampProvider_1 = require("../../scheduler/performanceTimestampProvider");
var animationFrameProvider_1 = require("../../scheduler/animationFrameProvider");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    return new Observable_1.Observable(function (subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function () {
            if (!subscriber.closed) {
                id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function (timestamp) {
                    id = 0;
                    var now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp,
                        elapsed: now - start,
                    });
                    run();
                });
            }
        };
        run();
        return function () {
            if (id) {
                animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

},{"../../Observable":131,"../../scheduler/animationFrameProvider":306,"../../scheduler/performanceTimestampProvider":312}],149:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = exports.EMPTY = void 0;
var Observable_1 = require("../Observable");
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}

},{"../Observable":131}],150:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forkJoin = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var innerFrom_1 = require("./innerFrom");
var args_1 = require("../util/args");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var createObject_1 = require("../util/createObject");
function forkJoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function (subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function (sourceIndex) {
            var hasValue = false;
            innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function () { return remainingCompletions--; }, undefined, function () {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin;

},{"../Observable":131,"../operators/OperatorSubscriber":171,"../util/args":325,"../util/argsArgArrayOrObject":326,"../util/createObject":330,"../util/mapOneOrManyArgs":345,"./innerFrom":157}],151:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.from = void 0;
var scheduled_1 = require("../scheduled/scheduled");
var innerFrom_1 = require("./innerFrom");
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
}
exports.from = from;

},{"../scheduled/scheduled":294,"./innerFrom":157}],152:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEvent = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var Observable_1 = require("../Observable");
var mergeMap_1 = require("../operators/mergeMap");
var isArrayLike_1 = require("../util/isArrayLike");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
            return mergeMap_1.mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom_1.innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
}

},{"../Observable":131,"../observable/innerFrom":157,"../operators/mergeMap":225,"../util/isArrayLike":334,"../util/isFunction":337,"../util/mapOneOrManyArgs":345}],153:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEventPattern = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function () { return removeHandler(handler, retValue); } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern;

},{"../Observable":131,"../util/isFunction":337,"../util/mapOneOrManyArgs":345}],154:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSubscribable = void 0;
var Observable_1 = require("../Observable");
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function (subscriber) { return subscribable.subscribe(subscriber); });
}
exports.fromSubscribable = fromSubscribable;

},{"../Observable":131}],155:[function(require,module,exports){
"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var identity_1 = require("../util/identity");
var isScheduler_1 = require("../util/isScheduler");
var defer_1 = require("./defer");
var scheduleIterable_1 = require("../scheduled/scheduleIterable");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        (_a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler);
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    state = initialState;
                    _a.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [3, 4];
                    return [4, resultSelector(state)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    state = iterate(state);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    return defer_1.defer((scheduler
        ?
            function () { return scheduleIterable_1.scheduleIterable(gen(), scheduler); }
        :
            gen));
}
exports.generate = generate;

},{"../scheduled/scheduleIterable":290,"../util/identity":333,"../util/isScheduler":343,"./defer":147}],156:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iif = void 0;
var defer_1 = require("./defer");
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function () { return (condition() ? trueResult : falseResult); });
}
exports.iif = iif;

},{"./defer":147}],157:[function(require,module,exports){
(function (process){(function (){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
var isArrayLike_1 = require("../util/isArrayLike");
var isPromise_1 = require("../util/isPromise");
var Observable_1 = require("../Observable");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isIterable_1 = require("../util/isIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
var isFunction_1 = require("../util/isFunction");
var reportUnhandledError_1 = require("../util/reportUnhandledError");
var observable_1 = require("../symbol/observable");
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function (subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
exports.fromInteropObservable = fromInteropObservable;
function fromArrayLike(array) {
    return new Observable_1.Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
exports.fromPromise = fromPromise;
function fromIterable(iterable) {
    return new Observable_1.Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
exports.fromIterable = fromIterable;
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
exports.fromAsyncIterable = fromAsyncIterable;
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
exports.fromReadableStreamLike = fromReadableStreamLike;
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}

}).call(this)}).call(this,require('_process'))
},{"../Observable":131,"../symbol/observable":316,"../util/isArrayLike":334,"../util/isAsyncIterable":335,"../util/isFunction":337,"../util/isInteropObservable":338,"../util/isIterable":339,"../util/isPromise":341,"../util/isReadableStreamLike":342,"../util/reportUnhandledError":349,"../util/throwUnobservableError":350,"_process":356}],158:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
var async_1 = require("../scheduler/async");
var timer_1 = require("./timer");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    if (period < 0) {
        period = 0;
    }
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval;

},{"../scheduler/async":308,"./timer":168}],159:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
var mergeAll_1 = require("../operators/mergeAll");
var innerFrom_1 = require("./innerFrom");
var empty_1 = require("./empty");
var args_1 = require("../util/args");
var from_1 = require("./from");
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            empty_1.EMPTY
        : sources.length === 1
            ?
                innerFrom_1.innerFrom(sources[0])
            :
                mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
}
exports.merge = merge;

},{"../operators/mergeAll":223,"../util/args":325,"./empty":149,"./from":151,"./innerFrom":157}],160:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.never = exports.NEVER = void 0;
var Observable_1 = require("../Observable");
var noop_1 = require("../util/noop");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;

},{"../Observable":131,"../util/noop":346}],161:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = void 0;
var args_1 = require("../util/args");
var from_1 = require("./from");
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return from_1.from(args, scheduler);
}
exports.of = of;

},{"../util/args":325,"./from":151}],162:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onErrorResumeNext = void 0;
var Observable_1 = require("../Observable");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var noop_1 = require("../util/noop");
var innerFrom_1 = require("./innerFrom");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return new Observable_1.Observable(function (subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function () {
            if (sourceIndex < nextSources.length) {
                var nextSource = void 0;
                try {
                    nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
                }
                catch (err) {
                    subscribeNext();
                    return;
                }
                var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                nextSource.subscribe(innerSubscriber);
                innerSubscriber.add(subscribeNext);
            }
            else {
                subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"../Observable":131,"../operators/OperatorSubscriber":171,"../util/argsOrArgArray":327,"../util/noop":346,"./innerFrom":157}],163:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairs = void 0;
var from_1 = require("./from");
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs;

},{"./from":151}],164:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = void 0;
var not_1 = require("../util/not");
var filter_1 = require("../operators/filter");
var innerFrom_1 = require("./innerFrom");
function partition(source, predicate, thisArg) {
    return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
}
exports.partition = partition;

},{"../operators/filter":207,"../util/not":347,"./innerFrom":157}],165:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceInit = exports.race = void 0;
var Observable_1 = require("../Observable");
var innerFrom_1 = require("./innerFrom");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
function race() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function (subscriber) {
        var subscriptions = [];
        var _loop_1 = function (i) {
            subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (subscriptions) {
                    for (var s = 0; s < subscriptions.length; s++) {
                        s !== i && subscriptions[s].unsubscribe();
                    }
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
            _loop_1(i);
        }
    };
}
exports.raceInit = raceInit;

},{"../Observable":131,"../operators/OperatorSubscriber":171,"../util/argsOrArgArray":327,"./innerFrom":157}],166:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var Observable_1 = require("../Observable");
var empty_1 = require("./empty");
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) {
        return empty_1.EMPTY;
    }
    var end = count + start;
    return new Observable_1.Observable(scheduler
        ?
            function (subscriber) {
                var n = start;
                return scheduler.schedule(function () {
                    if (n < end) {
                        subscriber.next(n++);
                        this.schedule();
                    }
                    else {
                        subscriber.complete();
                    }
                });
            }
        :
            function (subscriber) {
                var n = start;
                while (n < end && !subscriber.closed) {
                    subscriber.next(n++);
                }
                subscriber.complete();
            });
}
exports.range = range;

},{"../Observable":131,"./empty":149}],167:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function () { return errorOrErrorFactory; };
    var init = function (subscriber) { return subscriber.error(errorFactory()); };
    return new Observable_1.Observable(scheduler ? function (subscriber) { return scheduler.schedule(init, 0, subscriber); } : init);
}
exports.throwError = throwError;

},{"../Observable":131,"../util/isFunction":337}],168:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timer = void 0;
var Observable_1 = require("../Observable");
var async_1 = require("../scheduler/async");
var isScheduler_1 = require("../util/isScheduler");
var isDate_1 = require("../util/isDate");
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
exports.timer = timer;

},{"../Observable":131,"../scheduler/async":308,"../util/isDate":336,"../util/isScheduler":343}],169:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.using = void 0;
var Observable_1 = require("../Observable");
var innerFrom_1 = require("./innerFrom");
var empty_1 = require("./empty");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function () {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;

},{"../Observable":131,"./empty":149,"./innerFrom":157}],170:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = void 0;
var Observable_1 = require("../Observable");
var innerFrom_1 = require("./innerFrom");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var empty_1 = require("./empty");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var args_1 = require("../util/args");
function zip() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length
        ? new Observable_1.Observable(function (subscriber) {
            var buffers = sources.map(function () { return []; });
            var completed = sources.map(function () { return false; });
            subscriber.add(function () {
                buffers = completed = null;
            });
            var _loop_1 = function (sourceIndex) {
                innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                    buffers[sourceIndex].push(value);
                    if (buffers.every(function (buffer) { return buffer.length; })) {
                        var result = buffers.map(function (buffer) { return buffer.shift(); });
                        subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                        if (buffers.some(function (buffer, i) { return !buffer.length && completed[i]; })) {
                            subscriber.complete();
                        }
                    }
                }, function () {
                    completed[sourceIndex] = true;
                    !buffers[sourceIndex].length && subscriber.complete();
                }));
            };
            for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
                _loop_1(sourceIndex);
            }
            return function () {
                buffers = completed = null;
            };
        })
        : empty_1.EMPTY;
}
exports.zip = zip;

},{"../Observable":131,"../operators/OperatorSubscriber":171,"../util/args":325,"../util/argsOrArgArray":327,"./empty":149,"./innerFrom":157}],171:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
var Subscriber_1 = require("../Subscriber");
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
exports.createOperatorSubscriber = createOperatorSubscriber;
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber_1.Subscriber));
exports.OperatorSubscriber = OperatorSubscriber;

},{"../Subscriber":135}],172:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audit = void 0;
var lift_1 = require("../util/lift");
var innerFrom_1 = require("../observable/innerFrom");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function audit(durationSelector) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function () {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) {
                innerFrom_1.innerFrom(durationSelector(value)).subscribe((durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration)));
            }
        }, function () {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit;

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],173:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditTime = void 0;
var async_1 = require("../scheduler/async");
var audit_1 = require("./audit");
var timer_1 = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return audit_1.audit(function () { return timer_1.timer(duration, scheduler); });
}
exports.auditTime = auditTime;

},{"../observable/timer":168,"../scheduler/async":308,"./audit":172}],174:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buffer = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function buffer(closingNotifier) {
    return lift_1.operate(function (source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return currentBuffer.push(value); }, function () {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function () {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],175:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function (source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if (count++ % startBufferEvery === 0) {
                buffers.push([]);
            }
            try {
                for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (toEmit) {
                try {
                    for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                        var buffer = toEmit_1_1.value;
                        arrRemove_1.arrRemove(buffers, buffer);
                        subscriber.next(buffer);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }, function () {
            var e_3, _a;
            try {
                for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            subscriber.complete();
        }, undefined, function () {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount;

},{"../util/arrRemove":328,"../util/lift":344,"./OperatorSubscriber":171}],176:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferTime = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var async_1 = require("../scheduler/async");
var args_1 = require("../util/args");
var executeSchedule_1 = require("../util/executeSchedule");
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function (source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function (record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function () {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs,
                };
                bufferRecords.push(record_1);
                executeSchedule_1.executeSchedule(subs, scheduler, function () { return emit(record_1); }, bufferTimeSpan);
            }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        }
        else {
            restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            var recordsCopy = bufferRecords.slice();
            try {
                for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1.return)) _a.call(recordsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
                subscriber.next(bufferRecords.shift().buffer);
            }
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function () { return (bufferRecords = null); });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime;

},{"../Subscription":136,"../scheduler/async":308,"../util/args":325,"../util/arrRemove":328,"../util/executeSchedule":332,"../util/lift":344,"./OperatorSubscriber":171}],177:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToggle = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var innerFrom_1 = require("../observable/innerFrom");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function () {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            try {
                for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (buffers.length > 0) {
                subscriber.next(buffers.shift());
            }
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle;

},{"../Subscription":136,"../observable/innerFrom":157,"../util/arrRemove":328,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],178:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferWhen = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function bufferWhen(closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            innerFrom_1.innerFrom(closingSelector()).subscribe((closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop)));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return buffer === null || buffer === void 0 ? void 0 : buffer.push(value); }, function () {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function () { return (buffer = closingSubscriber = null); }));
    });
}
exports.bufferWhen = bufferWhen;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],179:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var lift_1 = require("../util/lift");
function catchError(selector) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
            handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError;

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],180:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineAll = void 0;
var combineLatestAll_1 = require("./combineLatestAll");
exports.combineAll = combineLatestAll_1.combineLatestAll;

},{"./combineLatestAll":182}],181:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatest = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var args_1 = require("../util/args");
function combineLatest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector
        ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector))
        : lift_1.operate(function (source, subscriber) {
            combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
        });
}
exports.combineLatest = combineLatest;

},{"../observable/combineLatest":144,"../util/args":325,"../util/argsOrArgArray":327,"../util/lift":344,"../util/mapOneOrManyArgs":345,"../util/pipe":348}],182:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestAll = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var joinAllInternals_1 = require("./joinAllInternals");
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll;

},{"../observable/combineLatest":144,"./joinAllInternals":216}],183:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineLatestWith = void 0;
var combineLatest_1 = require("./combineLatest");
function combineLatestWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith;

},{"./combineLatest":181}],184:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var lift_1 = require("../util/lift");
var concatAll_1 = require("./concatAll");
var args_1 = require("../util/args");
var from_1 = require("../observable/from");
function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function (source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat;

},{"../observable/from":151,"../util/args":325,"../util/lift":344,"./concatAll":185}],185:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatAll = void 0;
var mergeAll_1 = require("./mergeAll");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;

},{"./mergeAll":223}],186:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMap = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap;

},{"../util/isFunction":337,"./mergeMap":225}],187:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatMapTo = void 0;
var concatMap_1 = require("./concatMap");
var isFunction_1 = require("../util/isFunction");
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function () { return innerObservable; }, resultSelector) : concatMap_1.concatMap(function () { return innerObservable; });
}
exports.concatMapTo = concatMapTo;

},{"../util/isFunction":337,"./concatMap":186}],188:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatWith = void 0;
var concat_1 = require("./concat");
function concatWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith;

},{"./concat":184}],189:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var Subject_1 = require("../Subject");
var innerFrom_1 = require("../observable/innerFrom");
var lift_1 = require("../util/lift");
var fromSubscribable_1 = require("../observable/fromSubscribable");
var DEFAULT_CONFIG = {
    connector: function () { return new Subject_1.Subject(); },
};
function connect(selector, config) {
    if (config === void 0) { config = DEFAULT_CONFIG; }
    var connector = config.connector;
    return lift_1.operate(function (source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect;

},{"../Subject":134,"../observable/fromSubscribable":154,"../observable/innerFrom":157,"../util/lift":344}],190:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
var reduce_1 = require("./reduce");
function count(predicate) {
    return reduce_1.reduce(function (total, value, i) { return (!predicate || predicate(value, i) ? total + 1 : total); }, 0);
}
exports.count = count;

},{"./reduce":242}],191:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function debounce(durationSelector) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function () {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],192:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceTime = void 0;
var async_1 = require("../scheduler/async");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return lift_1.operate(function (source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function () {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                subscriber.add(activeTask);
                return;
            }
            emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) {
                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                subscriber.add(activeTask);
            }
        }, function () {
            emit();
            subscriber.complete();
        }, undefined, function () {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime;

},{"../scheduler/async":308,"../util/lift":344,"./OperatorSubscriber":171}],193:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIfEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () {
            if (!hasValue) {
                subscriber.next(defaultValue);
            }
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty;

},{"../util/lift":344,"./OperatorSubscriber":171}],194:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
var async_1 = require("../scheduler/async");
var delayWhen_1 = require("./delayWhen");
var timer_1 = require("../observable/timer");
function delay(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function () { return duration; });
}
exports.delay = delay;

},{"../observable/timer":168,"../scheduler/async":308,"./delayWhen":195}],195:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayWhen = void 0;
var concat_1 = require("../observable/concat");
var take_1 = require("./take");
var ignoreElements_1 = require("./ignoreElements");
var mapTo_1 = require("./mapTo");
var mergeMap_1 = require("./mergeMap");
var innerFrom_1 = require("../observable/innerFrom");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return mergeMap_1.mergeMap(function (value, index) { return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value)); });
}
exports.delayWhen = delayWhen;

},{"../observable/concat":145,"../observable/innerFrom":157,"./ignoreElements":214,"./mapTo":219,"./mergeMap":225,"./take":266}],196:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dematerialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function dematerialize() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (notification) { return Notification_1.observeNotification(notification, subscriber); }));
    });
}
exports.dematerialize = dematerialize;

},{"../Notification":129,"../util/lift":344,"./OperatorSubscriber":171}],197:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinct = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var innerFrom_1 = require("../observable/innerFrom");
function distinct(keySelector, flushes) {
    return lift_1.operate(function (source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () { return distinctKeys.clear(); }, noop_1.noop));
    });
}
exports.distinct = distinct;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],198:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctUntilChanged = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) { keySelector = identity_1.identity; }
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
}

},{"../util/identity":333,"../util/lift":344,"./OperatorSubscriber":171}],199:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

},{"./distinctUntilChanged":198}],200:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");
var filter_1 = require("./filter");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var take_1 = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(filter_1.filter(function (v, i) { return i === index; }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError(); }));
    };
}
exports.elementAt = elementAt;

},{"../util/ArgumentOutOfRangeError":318,"./defaultIfEmpty":193,"./filter":207,"./take":266,"./throwIfEmpty":273}],201:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.endWith = void 0;
var concat_1 = require("../observable/concat");
var of_1 = require("../observable/of");
function endWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return function (source) { return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values)))); };
}
exports.endWith = endWith;

},{"../observable/concat":145,"../observable/of":161}],202:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function every(predicate, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every;

},{"../util/lift":344,"./OperatorSubscriber":171}],203:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaust = void 0;
var exhaustAll_1 = require("./exhaustAll");
exports.exhaust = exhaustAll_1.exhaustAll;

},{"./exhaustAll":204}],204:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustAll = void 0;
var exhaustMap_1 = require("./exhaustMap");
var identity_1 = require("../util/identity");
function exhaustAll() {
    return exhaustMap_1.exhaustMap(identity_1.identity);
}
exports.exhaustAll = exhaustAll;

},{"../util/identity":333,"./exhaustMap":205}],205:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhaustMap = void 0;
var map_1 = require("./map");
var innerFrom_1 = require("../observable/innerFrom");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function exhaustMap(project, resultSelector) {
    if (resultSelector) {
        return function (source) {
            return source.pipe(exhaustMap(function (a, i) { return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }));
        };
    }
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (outerValue) {
            if (!innerSub) {
                innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function () {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap;

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171,"./map":218}],206:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expand = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Infinity; }
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function (source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand;

},{"../util/lift":344,"./mergeInternals":224}],207:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function filter(predicate, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
exports.filter = filter;

},{"../util/lift":344,"./OperatorSubscriber":171}],208:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalize = void 0;
var lift_1 = require("../util/lift");
function finalize(callback) {
    return lift_1.operate(function (source, subscriber) {
        try {
            source.subscribe(subscriber);
        }
        finally {
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize;

},{"../util/lift":344}],209:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFind = exports.find = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, 'value'));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function () {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind;

},{"../util/lift":344,"./OperatorSubscriber":171}],210:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIndex = void 0;
var lift_1 = require("../util/lift");
var find_1 = require("./find");
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, 'index'));
}
exports.findIndex = findIndex;

},{"../util/lift":344,"./find":209}],211:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.first = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var take_1 = require("./take");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var throwIfEmpty_1 = require("./throwIfEmpty");
var identity_1 = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); }));
    };
}
exports.first = first;

},{"../util/EmptyError":319,"../util/identity":333,"./defaultIfEmpty":193,"./filter":207,"./take":266,"./throwIfEmpty":273}],212:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = void 0;
var mergeMap_1 = require("./mergeMap");
exports.flatMap = mergeMap_1.mergeMap;

},{"./mergeMap":225}],213:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
var Observable_1 = require("../Observable");
var innerFrom_1 = require("../observable/innerFrom");
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function (source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') {
            element = elementOrOptions;
        }
        else {
            (duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector);
        }
        var groups = new Map();
        var notify = function (cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function (err) { return notify(function (consumer) { return consumer.error(err); }); };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function (value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, (group_1 = connector ? connector() : new Subject_1.Subject()));
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function () {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function () { return groups.delete(key_1); });
                        groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            }
            catch (err) {
                handleError(err);
            }
        }, function () { return notify(function (consumer) { return consumer.complete(); }); }, handleError, function () { return groups.clear(); }, function () {
            teardownAttempted = true;
            return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function (groupSubscriber) {
                activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function () {
                    innerSub.unsubscribe();
                    --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy;

},{"../Observable":131,"../Subject":134,"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],214:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreElements = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function ignoreElements() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements;

},{"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],215:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function isEmpty() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            subscriber.next(false);
            subscriber.complete();
        }, function () {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty;

},{"../util/lift":344,"./OperatorSubscriber":171}],216:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinAllInternals = void 0;
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var mergeMap_1 = require("./mergeMap");
var toArray_1 = require("./toArray");
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function (sources) { return joinFn(sources); }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals;

},{"../util/identity":333,"../util/mapOneOrManyArgs":345,"../util/pipe":348,"./mergeMap":225,"./toArray":278}],217:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var takeLast_1 = require("./takeLast");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var identity_1 = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); }));
    };
}
exports.last = last;

},{"../util/EmptyError":319,"../util/identity":333,"./defaultIfEmpty":193,"./filter":207,"./takeLast":267,"./throwIfEmpty":273}],218:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function map(project, thisArg) {
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map;

},{"../util/lift":344,"./OperatorSubscriber":171}],219:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTo = void 0;
var map_1 = require("./map");
function mapTo(value) {
    return map_1.map(function () { return value; });
}
exports.mapTo = mapTo;

},{"./map":218}],220:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function materialize() {
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function () {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function (err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize;

},{"../Notification":129,"../util/lift":344,"./OperatorSubscriber":171}],221:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) { return (comparer(x, y) > 0 ? x : y); } : function (x, y) { return (x > y ? x : y); });
}
exports.max = max;

},{"../util/isFunction":337,"./reduce":242}],222:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var mergeAll_1 = require("./mergeAll");
var args_1 = require("../util/args");
var from_1 = require("../observable/from");
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function (source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge;

},{"../observable/from":151,"../util/args":325,"../util/argsOrArgArray":327,"../util/lift":344,"./mergeAll":223}],223:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = void 0;
var mergeMap_1 = require("./mergeMap");
var identity_1 = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;

},{"../util/identity":333,"./mergeMap":225}],224:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeInternals = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var executeSchedule_1 = require("../util/executeSchedule");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
exports.mergeInternals = mergeInternals;

},{"../observable/innerFrom":157,"../util/executeSchedule":332,"./OperatorSubscriber":171}],225:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMap = void 0;
var map_1 = require("./map");
var innerFrom_1 = require("../observable/innerFrom");
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
var isFunction_1 = require("../util/isFunction");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom_1.innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return lift_1.operate(function (source, subscriber) { return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent); });
}
exports.mergeMap = mergeMap;

},{"../observable/innerFrom":157,"../util/isFunction":337,"../util/lift":344,"./map":218,"./mergeInternals":224}],226:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMapTo = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function () { return innerObservable; }, resultSelector, concurrent);
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return mergeMap_1.mergeMap(function () { return innerObservable; }, concurrent);
}
exports.mergeMapTo = mergeMapTo;

},{"../util/isFunction":337,"./mergeMap":225}],227:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeScan = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return lift_1.operate(function (source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function (value, index) { return accumulator(state, value, index); }, concurrent, function (value) {
            state = value;
        }, false, undefined, function () { return (state = null); });
    });
}
exports.mergeScan = mergeScan;

},{"../util/lift":344,"./mergeInternals":224}],228:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeWith = void 0;
var merge_1 = require("./merge");
function mergeWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith;

},{"./merge":222}],229:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) { return (comparer(x, y) < 0 ? x : y); } : function (x, y) { return (x < y ? x : y); });
}
exports.min = min;

},{"../util/isFunction":337,"./reduce":242}],230:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multicast = void 0;
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
var isFunction_1 = require("../util/isFunction");
var connect_1 = require("./connect");
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function () { return subjectOrSubjectFactory; };
    if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
            connector: subjectFactory,
        });
    }
    return function (source) { return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory); };
}
exports.multicast = multicast;

},{"../observable/ConnectableObservable":140,"../util/isFunction":337,"./connect":189}],231:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeOn = void 0;
var executeSchedule_1 = require("../util/executeSchedule");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return lift_1.operate(function (source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule_1.executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
exports.observeOn = observeOn;

},{"../util/executeSchedule":332,"../util/lift":344,"./OperatorSubscriber":171}],232:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var onErrorResumeNext_1 = require("../observable/onErrorResumeNext");
function onErrorResumeNextWith() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return function (source) { return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources))); };
}
exports.onErrorResumeNextWith = onErrorResumeNextWith;
exports.onErrorResumeNext = onErrorResumeNextWith;

},{"../observable/onErrorResumeNext":162,"../util/argsOrArgArray":327}],233:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pairwise = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function pairwise() {
    return lift_1.operate(function (source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise;

},{"../util/lift":344,"./OperatorSubscriber":171}],234:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partition = void 0;
var not_1 = require("../util/not");
var filter_1 = require("./filter");
function partition(predicate, thisArg) {
    return function (source) {
        return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
    };
}
exports.partition = partition;

},{"../util/not":347,"./filter":207}],235:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = void 0;
var map_1 = require("./map");
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return map_1.map(function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    });
}
exports.pluck = pluck;

},{"./map":218}],236:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = void 0;
var Subject_1 = require("../Subject");
var multicast_1 = require("./multicast");
var connect_1 = require("./connect");
function publish(selector) {
    return selector ? function (source) { return connect_1.connect(selector)(source); } : function (source) { return multicast_1.multicast(new Subject_1.Subject())(source); };
}
exports.publish = publish;

},{"../Subject":134,"./connect":189,"./multicast":230}],237:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishBehavior = void 0;
var BehaviorSubject_1 = require("../BehaviorSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishBehavior(initialValue) {
    return function (source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function () { return subject; });
    };
}
exports.publishBehavior = publishBehavior;

},{"../BehaviorSubject":128,"../observable/ConnectableObservable":140}],238:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishLast = void 0;
var AsyncSubject_1 = require("../AsyncSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishLast() {
    return function (source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function () { return subject; });
    };
}
exports.publishLast = publishLast;

},{"../AsyncSubject":127,"../observable/ConnectableObservable":140}],239:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var multicast_1 = require("./multicast");
var isFunction_1 = require("../util/isFunction");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
    }
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function (source) { return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source); };
}
exports.publishReplay = publishReplay;

},{"../ReplaySubject":132,"../util/isFunction":337,"./multicast":230}],240:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.race = void 0;
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var raceWith_1 = require("./raceWith");
function race() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
}
exports.race = race;

},{"../util/argsOrArgArray":327,"./raceWith":241}],241:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceWith = void 0;
var race_1 = require("../observable/race");
var lift_1 = require("../util/lift");
var identity_1 = require("../util/identity");
function raceWith() {
    var otherSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
    }
    return !otherSources.length
        ? identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
        });
}
exports.raceWith = raceWith;

},{"../observable/race":165,"../util/identity":333,"../util/lift":344}],242:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
var scanInternals_1 = require("./scanInternals");
var lift_1 = require("../util/lift");
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce;

},{"../util/lift":344,"./scanInternals":251}],243:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function refCount() {
    return lift_1.operate(function (source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function () {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) {
                sharedConnection.unsubscribe();
            }
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
            connection = source.connect();
        }
    });
}
exports.refCount = refCount;

},{"../util/lift":344,"./OperatorSubscriber":171}],244:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
var timer_1 = require("../observable/timer");
function repeat(countOrConfig) {
    var _a;
    var count = Infinity;
    var delay;
    if (countOrConfig != null) {
        if (typeof countOrConfig === 'object') {
            (_a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay);
        }
        else {
            count = countOrConfig;
        }
    }
    return count <= 0
        ? function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var soFar = 0;
            var sourceSub;
            var resubscribe = function () {
                sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
                sourceSub = null;
                if (delay != null) {
                    var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
                    var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                        notifierSubscriber_1.unsubscribe();
                        subscribeToSource();
                    });
                    notifier.subscribe(notifierSubscriber_1);
                }
                else {
                    subscribeToSource();
                }
            };
            var subscribeToSource = function () {
                var syncUnsub = false;
                sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                    if (++soFar < count) {
                        if (sourceSub) {
                            resubscribe();
                        }
                        else {
                            syncUnsub = true;
                        }
                    }
                    else {
                        subscriber.complete();
                    }
                }));
                if (syncUnsub) {
                    resubscribe();
                }
            };
            subscribeToSource();
        });
}
exports.repeat = repeat;

},{"../observable/empty":149,"../observable/innerFrom":157,"../observable/timer":168,"../util/lift":344,"./OperatorSubscriber":171}],245:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatWhen = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function repeatWhen(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function () { return isMainComplete && isNotifierComplete && (subscriber.complete(), true); };
        var getCompletionSubject = function () {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                    if (innerSub) {
                        subscribeForRepeatWhen();
                    }
                    else {
                        syncResub = true;
                    }
                }, function () {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function () {
            isMainComplete = false;
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen;

},{"../Subject":134,"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],246:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retry = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
var timer_1 = require("../observable/timer");
var innerFrom_1 = require("../observable/innerFrom");
function retry(configOrCount) {
    if (configOrCount === void 0) { configOrCount = Infinity; }
    var config;
    if (configOrCount && typeof configOrCount === 'object') {
        config = configOrCount;
    }
    else {
        config = {
            count: configOrCount,
        };
    }
    var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
    return count <= 0
        ? identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            var soFar = 0;
            var innerSub;
            var subscribeForRetry = function () {
                var syncUnsub = false;
                innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                    if (resetOnSuccess) {
                        soFar = 0;
                    }
                    subscriber.next(value);
                }, undefined, function (err) {
                    if (soFar++ < count) {
                        var resub_1 = function () {
                            if (innerSub) {
                                innerSub.unsubscribe();
                                innerSub = null;
                                subscribeForRetry();
                            }
                            else {
                                syncUnsub = true;
                            }
                        };
                        if (delay != null) {
                            var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                                notifierSubscriber_1.unsubscribe();
                                resub_1();
                            }, function () {
                                subscriber.complete();
                            });
                            notifier.subscribe(notifierSubscriber_1);
                        }
                        else {
                            resub_1();
                        }
                    }
                    else {
                        subscriber.error(err);
                    }
                }));
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    subscribeForRetry();
                }
            };
            subscribeForRetry();
        });
}
exports.retry = retry;

},{"../observable/innerFrom":157,"../observable/timer":168,"../util/identity":333,"../util/lift":344,"./OperatorSubscriber":171}],247:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryWhen = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function retryWhen(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function () {
            innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
                        return innerSub ? subscribeForRetryWhen() : (syncResub = true);
                    }));
                }
                if (errors$) {
                    errors$.next(err);
                }
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen;

},{"../Subject":134,"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],248:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function sample(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        }, noop_1.noop));
    });
}
exports.sample = sample;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],249:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleTime = void 0;
var async_1 = require("../scheduler/async");
var sample_1 = require("./sample");
var interval_1 = require("../observable/interval");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime;

},{"../observable/interval":158,"../scheduler/async":308,"./sample":248}],250:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scan = void 0;
var lift_1 = require("../util/lift");
var scanInternals_1 = require("./scanInternals");
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan;

},{"../util/lift":344,"./scanInternals":251}],251:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanInternals = void 0;
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
exports.scanInternals = scanInternals;

},{"./OperatorSubscriber":171}],252:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceEqual = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    return lift_1.operate(function (source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function (isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function (selfState, otherState) {
            var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) {
                    complete ? emit(false) : selfState.buffer.push(a);
                }
                else {
                    !comparator(a, buffer.shift()) && emit(false);
                }
            }, function () {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false,
    };
}

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],253:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.share = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var Subject_1 = require("../Subject");
var Subscriber_1 = require("../Subscriber");
var lift_1 = require("../util/lift");
function share(options) {
    if (options === void 0) { options = {}; }
    var _a = options.connector, connector = _a === void 0 ? function () { return new Subject_1.Subject(); } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function (wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function () {
            resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
            resetConnection = undefined;
        };
        var reset = function () {
            cancelReset();
            connection = subject = undefined;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function () {
            var conn = connection;
            reset();
            conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function (source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) {
                cancelReset();
            }
            var dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
            subscriber.add(function () {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) {
                    resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                }
            });
            dest.subscribe(subscriber);
            if (!connection &&
                refCount > 0) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function (value) { return dest.next(value); },
                    error: function (err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function () {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    },
                });
                innerFrom_1.innerFrom(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (on === true) {
        reset();
        return;
    }
    if (on === false) {
        return;
    }
    var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function () {
            onSubscriber.unsubscribe();
            reset();
        },
    });
    return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}

},{"../Subject":134,"../Subscriber":135,"../observable/innerFrom":157,"../util/lift":344}],254:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var share_1 = require("./share");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b, _c;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        (_a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler);
    }
    else {
        bufferSize = (configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity);
    }
    return share_1.share({
        connector: function () { return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler); },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount,
    });
}
exports.shareReplay = shareReplay;

},{"../ReplaySubject":132,"./share":253}],255:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.single = void 0;
var EmptyError_1 = require("../util/EmptyError");
var SequenceError_1 = require("../util/SequenceError");
var NotFoundError_1 = require("../util/NotFoundError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function single(predicate) {
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function () {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            }
            else {
                subscriber.error(seenValue ? new NotFoundError_1.NotFoundError('No matching values') : new EmptyError_1.EmptyError());
            }
        }));
    });
}
exports.single = single;

},{"../util/EmptyError":319,"../util/NotFoundError":321,"../util/SequenceError":323,"../util/lift":344,"./OperatorSubscriber":171}],256:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip = void 0;
var filter_1 = require("./filter");
function skip(count) {
    return filter_1.filter(function (_, index) { return count <= index; });
}
exports.skip = skip;

},{"./filter":207}],257:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipLast = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipLast(skipCount) {
    return skipCount <= 0
        ?
            identity_1.identity
        : lift_1.operate(function (source, subscriber) {
            var ring = new Array(skipCount);
            var seen = 0;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                var valueIndex = seen++;
                if (valueIndex < skipCount) {
                    ring[valueIndex] = value;
                }
                else {
                    var index = valueIndex % skipCount;
                    var oldValue = ring[index];
                    ring[index] = value;
                    subscriber.next(oldValue);
                }
            }));
            return function () {
                ring = null;
            };
        });
}
exports.skipLast = skipLast;

},{"../util/identity":333,"../util/lift":344,"./OperatorSubscriber":171}],258:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
var noop_1 = require("../util/noop");
function skipUntil(notifier) {
    return lift_1.operate(function (source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return taking && subscriber.next(value); }));
    });
}
exports.skipUntil = skipUntil;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],259:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipWhile(predicate) {
    return lift_1.operate(function (source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return (taking || (taking = !predicate(value, index++))) && subscriber.next(value); }));
    });
}
exports.skipWhile = skipWhile;

},{"../util/lift":344,"./OperatorSubscriber":171}],260:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startWith = void 0;
var concat_1 = require("../observable/concat");
var args_1 = require("../util/args");
var lift_1 = require("../util/lift");
function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function (source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith;

},{"../observable/concat":145,"../util/args":325,"../util/lift":344}],261:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeOn = void 0;
var lift_1 = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return lift_1.operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
exports.subscribeOn = subscribeOn;

},{"../util/lift":344}],262:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchAll = void 0;
var switchMap_1 = require("./switchMap");
var identity_1 = require("../util/identity");
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;

},{"../util/identity":333,"./switchMap":263}],263:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchMap = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function switchMap(project, resultSelector) {
    return lift_1.operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom_1.innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap;

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],264:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchMapTo = void 0;
var switchMap_1 = require("./switchMap");
var isFunction_1 = require("../util/isFunction");
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function () { return innerObservable; }, resultSelector) : switchMap_1.switchMap(function () { return innerObservable; });
}
exports.switchMapTo = switchMapTo;

},{"../util/isFunction":337,"./switchMap":263}],265:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchScan = void 0;
var switchMap_1 = require("./switchMap");
var lift_1 = require("../util/lift");
function switchScan(accumulator, seed) {
    return lift_1.operate(function (source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function (value, index) { return accumulator(state, value, index); }, function (_, innerValue) { return ((state = innerValue), innerValue); })(source).subscribe(subscriber);
        return function () {
            state = null;
        };
    });
}
exports.switchScan = switchScan;

},{"../util/lift":344,"./switchMap":263}],266:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function take(count) {
    return count <= 0
        ?
            function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
exports.take = take;

},{"../observable/empty":149,"../util/lift":344,"./OperatorSubscriber":171}],267:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeLast = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeLast(count) {
    return count <= 0
        ? function () { return empty_1.EMPTY; }
        : lift_1.operate(function (source, subscriber) {
            var buffer = [];
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                buffer.push(value);
                count < buffer.length && buffer.shift();
            }, function () {
                var e_1, _a;
                try {
                    for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
                        var value = buffer_1_1.value;
                        subscriber.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                subscriber.complete();
            }, undefined, function () {
                buffer = null;
            }));
        });
}
exports.takeLast = takeLast;

},{"../observable/empty":149,"../util/lift":344,"./OperatorSubscriber":171}],268:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
var noop_1 = require("../util/noop");
function takeUntil(notifier) {
    return lift_1.operate(function (source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () { return subscriber.complete(); }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil;

},{"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],269:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) { inclusive = false; }
    return lift_1.operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile;

},{"../util/lift":344,"./OperatorSubscriber":171}],270:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tap = void 0;
var isFunction_1 = require("../util/isFunction");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error: error, complete: complete }
        : observerOrNext;
    return tapObserver
        ? lift_1.operate(function (source, subscriber) {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            var isUnsub = true;
            source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, function () {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, function (err) {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, function () {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            identity_1.identity;
}
exports.tap = tap;

},{"../util/identity":333,"../util/isFunction":337,"../util/lift":344,"./OperatorSubscriber":171}],271:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function throttle(durationSelector, config) {
    return lift_1.operate(function (source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle;

},{"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],272:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttleTime = void 0;
var async_1 = require("../scheduler/async");
var throttle_1 = require("./throttle");
var timer_1 = require("../observable/timer");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function () { return duration$; }, config);
}
exports.throttleTime = throttleTime;

},{"../observable/timer":168,"../scheduler/async":308,"./throttle":271}],273:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwIfEmpty = void 0;
var EmptyError_1 = require("../util/EmptyError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) { errorFactory = defaultErrorFactory; }
    return lift_1.operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            subscriber.next(value);
        }, function () { return (hasValue ? subscriber.complete() : subscriber.error(errorFactory())); }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
}

},{"../util/EmptyError":319,"../util/lift":344,"./OperatorSubscriber":171}],274:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = require("../scheduler/async");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.asyncScheduler; }
    return lift_1.operate(function (source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var now = scheduler.now();
            var interval = now - last;
            last = now;
            subscriber.next(new TimeInterval(value, interval));
        }));
    });
}
exports.timeInterval = timeInterval;
var TimeInterval = (function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
exports.TimeInterval = TimeInterval;

},{"../scheduler/async":308,"../util/lift":344,"./OperatorSubscriber":171}],275:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.TimeoutError = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var lift_1 = require("../util/lift");
var innerFrom_1 = require("../observable/innerFrom");
var createErrorClass_1 = require("../util/createErrorClass");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var executeSchedule_1 = require("../util/executeSchedule");
exports.TimeoutError = createErrorClass_1.createErrorClass(function (_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) { info = null; }
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = (isDate_1.isValidDate(config) ? { first: config } : typeof config === 'number' ? { each: config } : config), first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return lift_1.operate(function (source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function (delay) {
            timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                try {
                    originalSourceSubscription.unsubscribe();
                    innerFrom_1.innerFrom(_with({
                        meta: meta,
                        lastValue: lastValue,
                        seen: seen,
                    })).subscribe(subscriber);
                }
                catch (err) {
                    subscriber.error(err);
                }
            }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            seen++;
            subscriber.next((lastValue = value));
            each > 0 && startTimer(each);
        }, undefined, undefined, function () {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
                timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
            }
            lastValue = null;
        }));
        !seen && startTimer(first != null ? (typeof first === 'number' ? first : +first - scheduler.now()) : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
}

},{"../observable/innerFrom":157,"../scheduler/async":308,"../util/createErrorClass":329,"../util/executeSchedule":332,"../util/isDate":336,"../util/lift":344,"./OperatorSubscriber":171}],276:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutWith = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var timeout_1 = require("./timeout");
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) {
        first = due;
    }
    else if (typeof due === 'number') {
        each = due;
    }
    if (withObservable) {
        _with = function () { return withObservable; };
    }
    else {
        throw new TypeError('No observable provided to switch to');
    }
    if (first == null && each == null) {
        throw new TypeError('No timeout provided.');
    }
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with,
    });
}
exports.timeoutWith = timeoutWith;

},{"../scheduler/async":308,"../util/isDate":336,"./timeout":275}],277:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = void 0;
var dateTimestampProvider_1 = require("../scheduler/dateTimestampProvider");
var map_1 = require("./map");
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = dateTimestampProvider_1.dateTimestampProvider; }
    return map_1.map(function (value) { return ({ value: value, timestamp: timestampProvider.now() }); });
}
exports.timestamp = timestamp;

},{"../scheduler/dateTimestampProvider":309,"./map":218}],278:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
var reduce_1 = require("./reduce");
var lift_1 = require("../util/lift");
var arrReducer = function (arr, value) { return (arr.push(value), arr); };
function toArray() {
    return lift_1.operate(function (source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray;

},{"../util/lift":344,"./reduce":242}],279:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.window = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var innerFrom_1 = require("../observable/innerFrom");
function window(windowBoundaries) {
    return lift_1.operate(function (source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function (err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value); }, function () {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            windowSubject.complete();
            subscriber.next((windowSubject = new Subject_1.Subject()));
        }, noop_1.noop, errorHandler));
        return function () {
            windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window;

},{"../Subject":134,"../observable/innerFrom":157,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],280:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowCount = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function (source, subscriber) {
        var windows = [new Subject_1.Subject()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            try {
                for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) {
                windows.shift().complete();
            }
            if (++count % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function () {
            while (windows.length > 0) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, function (err) {
            while (windows.length > 0) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        }, function () {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount;

},{"../Subject":134,"../util/lift":344,"./OperatorSubscriber":171}],281:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowTime = void 0;
var Subject_1 = require("../Subject");
var async_1 = require("../scheduler/async");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var args_1 = require("../util/args");
var executeSchedule_1 = require("../util/executeSchedule");
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function (source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function (record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function () {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0,
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                executeSchedule_1.executeSchedule(subs, scheduler, function () { return closeWindow(record_1); }, windowTimeSpan);
            }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        }
        else {
            restartOnClose = true;
        }
        startWindow();
        var loop = function (cb) { return windowRecords.slice().forEach(cb); };
        var terminate = function (cb) {
            loop(function (_a) {
                var window = _a.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            loop(function (record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function () { return terminate(function (consumer) { return consumer.complete(); }); }, function (err) { return terminate(function (consumer) { return consumer.error(err); }); }));
        return function () {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime;

},{"../Subject":134,"../Subscription":136,"../scheduler/async":308,"../util/args":325,"../util/arrRemove":328,"../util/executeSchedule":332,"../util/lift":344,"./OperatorSubscriber":171}],282:[function(require,module,exports){
"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowToggle = void 0;
var Subject_1 = require("../Subject");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var innerFrom_1 = require("../observable/innerFrom");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var windows = [];
        var handleError = function (err) {
            while (0 < windows.length) {
                windows.shift().error(err);
            }
            subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function () {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
            }
            catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }, function () {
            while (0 < windows.length) {
                windows.shift().complete();
            }
            subscriber.complete();
        }, handleError, function () {
            while (0 < windows.length) {
                windows.shift().unsubscribe();
            }
        }));
    });
}
exports.windowToggle = windowToggle;

},{"../Subject":134,"../Subscription":136,"../observable/innerFrom":157,"../util/arrRemove":328,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],283:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
function windowWhen(closingSelector) {
    return lift_1.operate(function (source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function (err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window === null || window === void 0 ? void 0 : window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = innerFrom_1.innerFrom(closingSelector());
            }
            catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe((closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError)));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) { return window.next(value); }, function () {
            window.complete();
            subscriber.complete();
        }, handleError, function () {
            closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen;

},{"../Subject":134,"../observable/innerFrom":157,"../util/lift":344,"./OperatorSubscriber":171}],284:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLatestFrom = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var innerFrom_1 = require("../observable/innerFrom");
var identity_1 = require("../util/identity");
var noop_1 = require("../util/noop");
var args_1 = require("../util/args");
function withLatestFrom() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function (source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function () { return false; });
        var ready = false;
        var _loop_1 = function (i) {
            innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            if (ready) {
                var values = __spreadArray([value], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom;

},{"../observable/innerFrom":157,"../util/args":325,"../util/identity":333,"../util/lift":344,"../util/noop":346,"./OperatorSubscriber":171}],285:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zip = void 0;
var zip_1 = require("../observable/zip");
var lift_1 = require("../util/lift");
function zip() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return lift_1.operate(function (source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip;

},{"../observable/zip":170,"../util/lift":344}],286:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipAll = void 0;
var zip_1 = require("../observable/zip");
var joinAllInternals_1 = require("./joinAllInternals");
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll;

},{"../observable/zip":170,"./joinAllInternals":216}],287:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipWith = void 0;
var zip_1 = require("./zip");
function zipWith() {
    var otherInputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith;

},{"./zip":285}],288:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleArray = void 0;
var Observable_1 = require("../Observable");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
exports.scheduleArray = scheduleArray;

},{"../Observable":131}],289:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleAsyncIterable = void 0;
var Observable_1 = require("../Observable");
var executeSchedule_1 = require("../util/executeSchedule");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_1.Observable(function (subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable;

},{"../Observable":131,"../util/executeSchedule":332}],290:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleIterable = void 0;
var Observable_1 = require("../Observable");
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("../util/isFunction");
var executeSchedule_1 = require("../util/executeSchedule");
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function (subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_1.iterator]();
            executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
exports.scheduleIterable = scheduleIterable;

},{"../Observable":131,"../symbol/iterator":315,"../util/executeSchedule":332,"../util/isFunction":337}],291:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleObservable = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var observeOn_1 = require("../operators/observeOn");
var subscribeOn_1 = require("../operators/subscribeOn");
function scheduleObservable(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.scheduleObservable = scheduleObservable;

},{"../observable/innerFrom":157,"../operators/observeOn":231,"../operators/subscribeOn":261}],292:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulePromise = void 0;
var innerFrom_1 = require("../observable/innerFrom");
var observeOn_1 = require("../operators/observeOn");
var subscribeOn_1 = require("../operators/subscribeOn");
function schedulePromise(input, scheduler) {
    return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}
exports.schedulePromise = schedulePromise;

},{"../observable/innerFrom":157,"../operators/observeOn":231,"../operators/subscribeOn":261}],293:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike;

},{"../util/isReadableStreamLike":342,"./scheduleAsyncIterable":289}],294:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduled = void 0;
var scheduleObservable_1 = require("./scheduleObservable");
var schedulePromise_1 = require("./schedulePromise");
var scheduleArray_1 = require("./scheduleArray");
var scheduleIterable_1 = require("./scheduleIterable");
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isPromise_1 = require("../util/isPromise");
var isArrayLike_1 = require("../util/isArrayLike");
var isIterable_1 = require("../util/isIterable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
var scheduleReadableStreamLike_1 = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
            return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
            return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled;

},{"../util/isArrayLike":334,"../util/isAsyncIterable":335,"../util/isInteropObservable":338,"../util/isIterable":339,"../util/isPromise":341,"../util/isReadableStreamLike":342,"../util/throwUnobservableError":350,"./scheduleArray":288,"./scheduleAsyncIterable":289,"./scheduleIterable":290,"./scheduleObservable":291,"./schedulePromise":292,"./scheduleReadableStreamLike":293}],295:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Subscription_1 = require("../Subscription");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;

},{"../Subscription":136}],296:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var animationFrameProvider_1 = require("./animationFrameProvider");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function () { return scheduler.flush(undefined); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;

},{"./AsyncAction":300,"./animationFrameProvider":306}],297:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;

},{"./AsyncScheduler":301}],298:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsapAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var immediateProvider_1 = require("./immediateProvider");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = undefined;
            }
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;

},{"./AsyncAction":300,"./immediateProvider":310}],299:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;

},{"./AsyncScheduler":301}],300:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncAction = void 0;
var Action_1 = require("./Action");
var intervalProvider_1 = require("./intervalProvider");
var arrRemove_1 = require("../util/arrRemove");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;

},{"../util/arrRemove":328,"./Action":295,"./intervalProvider":311}],301:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncScheduler = void 0;
var Scheduler_1 = require("../Scheduler");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;

},{"../Scheduler":133}],302:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;

},{"./AsyncAction":300}],303:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;

},{"./AsyncScheduler":301}],304:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var Subscription_1 = require("../Subscription");
var AsyncScheduler_1 = require("./AsyncScheduler");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) { schedulerActionCtor = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Infinity; }
        var _this = _super.call(this, schedulerActionCtor, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        }
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = (scheduler.index += 1); }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (Number.isFinite(delay)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay);
            }
            this.active = false;
            var action = new VirtualAction(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return 1;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;

},{"../Subscription":136,"./AsyncAction":300,"./AsyncScheduler":301}],305:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = require("./AnimationFrameAction");
var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;

},{"./AnimationFrameAction":296,"./AnimationFrameScheduler":297}],306:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationFrameProvider = void 0;
var Subscription_1 = require("../Subscription");
exports.animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function (timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function () { return cancel === null || cancel === void 0 ? void 0 : cancel(handle); });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined,
};

},{"../Subscription":136}],307:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = require("./AsapAction");
var AsapScheduler_1 = require("./AsapScheduler");
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;

},{"./AsapAction":298,"./AsapScheduler":299}],308:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var AsyncScheduler_1 = require("./AsyncScheduler");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;

},{"./AsyncAction":300,"./AsyncScheduler":301}],309:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function () {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};

},{}],310:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.immediateProvider = void 0;
var Immediate_1 = require("../util/Immediate");
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function (handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined,
};

},{"../util/Immediate":320}],311:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};

},{}],312:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function () {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined,
};

},{}],313:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = require("./QueueAction");
var QueueScheduler_1 = require("./QueueScheduler");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;

},{"./QueueAction":302,"./QueueScheduler":303}],314:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

},{}],315:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();

},{}],316:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = void 0;
exports.observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

},{}],317:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],318:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function (_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});

},{"./createErrorClass":329}],319:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.EmptyError = createErrorClass_1.createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });

},{"./createErrorClass":329}],320:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () { return findAndClearHandle(handle) && cb(); });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    },
};
exports.TestTools = {
    pending: function () {
        return Object.keys(activeHandles).length;
    }
};

},{}],321:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.NotFoundError = createErrorClass_1.createErrorClass(function (_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});

},{"./createErrorClass":329}],322:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

},{"./createErrorClass":329}],323:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.SequenceError = createErrorClass_1.createErrorClass(function (_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});

},{"./createErrorClass":329}],324:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

},{"./createErrorClass":329}],325:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = require("./isFunction");
var isScheduler_1 = require("./isScheduler");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
exports.popNumber = popNumber;

},{"./isFunction":337,"./isScheduler":343}],326:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
            return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function (key) { return first_1[key]; }),
                keys: keys,
            };
        }
    }
    return { args: args, keys: null };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

},{}],327:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray;

},{}],328:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove;

},{}],329:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass;

},{}],330:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function (result, key, i) { return ((result[key] = values[i]), result); }, {});
}
exports.createObject = createObject;

},{}],331:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captureError = exports.errorContext = void 0;
var config_1 = require("../config");
var context = null;
function errorContext(cb) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
exports.errorContext = errorContext;
function captureError(err) {
    if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
exports.captureError = captureError;

},{"../config":137}],332:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSchedule = void 0;
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
exports.executeSchedule = executeSchedule;

},{}],333:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity;

},{}],334:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = void 0;
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

},{}],335:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncIterable = void 0;
var isFunction_1 = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable;

},{"./isFunction":337}],336:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate;

},{}],337:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;

},{}],338:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteropObservable = void 0;
var observable_1 = require("../symbol/observable");
var isFunction_1 = require("./isFunction");
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":316,"./isFunction":337}],339:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIterable = void 0;
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("./isFunction");
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable;

},{"../symbol/iterator":315,"./isFunction":337}],340:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObservable = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("./isFunction");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe)));
}
exports.isObservable = isObservable;

},{"../Observable":131,"./isFunction":337}],341:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = void 0;
var isFunction_1 = require("./isFunction");
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise;

},{"./isFunction":337}],342:[function(require,module,exports){
"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (!true) return [3, 8];
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike;

},{"./isFunction":337}],343:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScheduler = void 0;
var isFunction_1 = require("./isFunction");
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler;

},{"./isFunction":337}],344:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operate = exports.hasLift = void 0;
var isFunction_1 = require("./isFunction");
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
exports.operate = operate;

},{"./isFunction":337}],345:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOneOrManyArgs = void 0;
var map_1 = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function (args) { return callOrApply(fn, args); });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs;

},{"../operators/map":218}],346:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = void 0;
function noop() { }
exports.noop = noop;

},{}],347:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not = void 0;
function not(pred, thisArg) {
    return function (value, index) { return !pred.call(thisArg, value, index); };
}
exports.not = not;

},{}],348:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = require("./identity");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity_1.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;

},{"./identity":333}],349:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportUnhandledError = void 0;
var config_1 = require("../config");
var timeoutProvider_1 = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function () {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
exports.reportUnhandledError = reportUnhandledError;

},{"../config":137,"../scheduler/timeoutProvider":314}],350:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError;

},{}],351:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
var audit_1 = require("../internal/operators/audit");
Object.defineProperty(exports, "audit", { enumerable: true, get: function () { return audit_1.audit; } });
var auditTime_1 = require("../internal/operators/auditTime");
Object.defineProperty(exports, "auditTime", { enumerable: true, get: function () { return auditTime_1.auditTime; } });
var buffer_1 = require("../internal/operators/buffer");
Object.defineProperty(exports, "buffer", { enumerable: true, get: function () { return buffer_1.buffer; } });
var bufferCount_1 = require("../internal/operators/bufferCount");
Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function () { return bufferCount_1.bufferCount; } });
var bufferTime_1 = require("../internal/operators/bufferTime");
Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function () { return bufferTime_1.bufferTime; } });
var bufferToggle_1 = require("../internal/operators/bufferToggle");
Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function () { return bufferToggle_1.bufferToggle; } });
var bufferWhen_1 = require("../internal/operators/bufferWhen");
Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function () { return bufferWhen_1.bufferWhen; } });
var catchError_1 = require("../internal/operators/catchError");
Object.defineProperty(exports, "catchError", { enumerable: true, get: function () { return catchError_1.catchError; } });
var combineAll_1 = require("../internal/operators/combineAll");
Object.defineProperty(exports, "combineAll", { enumerable: true, get: function () { return combineAll_1.combineAll; } });
var combineLatestAll_1 = require("../internal/operators/combineLatestAll");
Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function () { return combineLatestAll_1.combineLatestAll; } });
var combineLatest_1 = require("../internal/operators/combineLatest");
Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function () { return combineLatest_1.combineLatest; } });
var combineLatestWith_1 = require("../internal/operators/combineLatestWith");
Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function () { return combineLatestWith_1.combineLatestWith; } });
var concat_1 = require("../internal/operators/concat");
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return concat_1.concat; } });
var concatAll_1 = require("../internal/operators/concatAll");
Object.defineProperty(exports, "concatAll", { enumerable: true, get: function () { return concatAll_1.concatAll; } });
var concatMap_1 = require("../internal/operators/concatMap");
Object.defineProperty(exports, "concatMap", { enumerable: true, get: function () { return concatMap_1.concatMap; } });
var concatMapTo_1 = require("../internal/operators/concatMapTo");
Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function () { return concatMapTo_1.concatMapTo; } });
var concatWith_1 = require("../internal/operators/concatWith");
Object.defineProperty(exports, "concatWith", { enumerable: true, get: function () { return concatWith_1.concatWith; } });
var connect_1 = require("../internal/operators/connect");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return connect_1.connect; } });
var count_1 = require("../internal/operators/count");
Object.defineProperty(exports, "count", { enumerable: true, get: function () { return count_1.count; } });
var debounce_1 = require("../internal/operators/debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return debounce_1.debounce; } });
var debounceTime_1 = require("../internal/operators/debounceTime");
Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function () { return debounceTime_1.debounceTime; } });
var defaultIfEmpty_1 = require("../internal/operators/defaultIfEmpty");
Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function () { return defaultIfEmpty_1.defaultIfEmpty; } });
var delay_1 = require("../internal/operators/delay");
Object.defineProperty(exports, "delay", { enumerable: true, get: function () { return delay_1.delay; } });
var delayWhen_1 = require("../internal/operators/delayWhen");
Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function () { return delayWhen_1.delayWhen; } });
var dematerialize_1 = require("../internal/operators/dematerialize");
Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function () { return dematerialize_1.dematerialize; } });
var distinct_1 = require("../internal/operators/distinct");
Object.defineProperty(exports, "distinct", { enumerable: true, get: function () { return distinct_1.distinct; } });
var distinctUntilChanged_1 = require("../internal/operators/distinctUntilChanged");
Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function () { return distinctUntilChanged_1.distinctUntilChanged; } });
var distinctUntilKeyChanged_1 = require("../internal/operators/distinctUntilKeyChanged");
Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function () { return distinctUntilKeyChanged_1.distinctUntilKeyChanged; } });
var elementAt_1 = require("../internal/operators/elementAt");
Object.defineProperty(exports, "elementAt", { enumerable: true, get: function () { return elementAt_1.elementAt; } });
var endWith_1 = require("../internal/operators/endWith");
Object.defineProperty(exports, "endWith", { enumerable: true, get: function () { return endWith_1.endWith; } });
var every_1 = require("../internal/operators/every");
Object.defineProperty(exports, "every", { enumerable: true, get: function () { return every_1.every; } });
var exhaust_1 = require("../internal/operators/exhaust");
Object.defineProperty(exports, "exhaust", { enumerable: true, get: function () { return exhaust_1.exhaust; } });
var exhaustAll_1 = require("../internal/operators/exhaustAll");
Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function () { return exhaustAll_1.exhaustAll; } });
var exhaustMap_1 = require("../internal/operators/exhaustMap");
Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function () { return exhaustMap_1.exhaustMap; } });
var expand_1 = require("../internal/operators/expand");
Object.defineProperty(exports, "expand", { enumerable: true, get: function () { return expand_1.expand; } });
var filter_1 = require("../internal/operators/filter");
Object.defineProperty(exports, "filter", { enumerable: true, get: function () { return filter_1.filter; } });
var finalize_1 = require("../internal/operators/finalize");
Object.defineProperty(exports, "finalize", { enumerable: true, get: function () { return finalize_1.finalize; } });
var find_1 = require("../internal/operators/find");
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return find_1.find; } });
var findIndex_1 = require("../internal/operators/findIndex");
Object.defineProperty(exports, "findIndex", { enumerable: true, get: function () { return findIndex_1.findIndex; } });
var first_1 = require("../internal/operators/first");
Object.defineProperty(exports, "first", { enumerable: true, get: function () { return first_1.first; } });
var groupBy_1 = require("../internal/operators/groupBy");
Object.defineProperty(exports, "groupBy", { enumerable: true, get: function () { return groupBy_1.groupBy; } });
var ignoreElements_1 = require("../internal/operators/ignoreElements");
Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function () { return ignoreElements_1.ignoreElements; } });
var isEmpty_1 = require("../internal/operators/isEmpty");
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return isEmpty_1.isEmpty; } });
var last_1 = require("../internal/operators/last");
Object.defineProperty(exports, "last", { enumerable: true, get: function () { return last_1.last; } });
var map_1 = require("../internal/operators/map");
Object.defineProperty(exports, "map", { enumerable: true, get: function () { return map_1.map; } });
var mapTo_1 = require("../internal/operators/mapTo");
Object.defineProperty(exports, "mapTo", { enumerable: true, get: function () { return mapTo_1.mapTo; } });
var materialize_1 = require("../internal/operators/materialize");
Object.defineProperty(exports, "materialize", { enumerable: true, get: function () { return materialize_1.materialize; } });
var max_1 = require("../internal/operators/max");
Object.defineProperty(exports, "max", { enumerable: true, get: function () { return max_1.max; } });
var merge_1 = require("../internal/operators/merge");
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return merge_1.merge; } });
var mergeAll_1 = require("../internal/operators/mergeAll");
Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function () { return mergeAll_1.mergeAll; } });
var flatMap_1 = require("../internal/operators/flatMap");
Object.defineProperty(exports, "flatMap", { enumerable: true, get: function () { return flatMap_1.flatMap; } });
var mergeMap_1 = require("../internal/operators/mergeMap");
Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function () { return mergeMap_1.mergeMap; } });
var mergeMapTo_1 = require("../internal/operators/mergeMapTo");
Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function () { return mergeMapTo_1.mergeMapTo; } });
var mergeScan_1 = require("../internal/operators/mergeScan");
Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function () { return mergeScan_1.mergeScan; } });
var mergeWith_1 = require("../internal/operators/mergeWith");
Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function () { return mergeWith_1.mergeWith; } });
var min_1 = require("../internal/operators/min");
Object.defineProperty(exports, "min", { enumerable: true, get: function () { return min_1.min; } });
var multicast_1 = require("../internal/operators/multicast");
Object.defineProperty(exports, "multicast", { enumerable: true, get: function () { return multicast_1.multicast; } });
var observeOn_1 = require("../internal/operators/observeOn");
Object.defineProperty(exports, "observeOn", { enumerable: true, get: function () { return observeOn_1.observeOn; } });
var onErrorResumeNextWith_1 = require("../internal/operators/onErrorResumeNextWith");
Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function () { return onErrorResumeNextWith_1.onErrorResumeNext; } });
var pairwise_1 = require("../internal/operators/pairwise");
Object.defineProperty(exports, "pairwise", { enumerable: true, get: function () { return pairwise_1.pairwise; } });
var partition_1 = require("../internal/operators/partition");
Object.defineProperty(exports, "partition", { enumerable: true, get: function () { return partition_1.partition; } });
var pluck_1 = require("../internal/operators/pluck");
Object.defineProperty(exports, "pluck", { enumerable: true, get: function () { return pluck_1.pluck; } });
var publish_1 = require("../internal/operators/publish");
Object.defineProperty(exports, "publish", { enumerable: true, get: function () { return publish_1.publish; } });
var publishBehavior_1 = require("../internal/operators/publishBehavior");
Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function () { return publishBehavior_1.publishBehavior; } });
var publishLast_1 = require("../internal/operators/publishLast");
Object.defineProperty(exports, "publishLast", { enumerable: true, get: function () { return publishLast_1.publishLast; } });
var publishReplay_1 = require("../internal/operators/publishReplay");
Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function () { return publishReplay_1.publishReplay; } });
var race_1 = require("../internal/operators/race");
Object.defineProperty(exports, "race", { enumerable: true, get: function () { return race_1.race; } });
var raceWith_1 = require("../internal/operators/raceWith");
Object.defineProperty(exports, "raceWith", { enumerable: true, get: function () { return raceWith_1.raceWith; } });
var reduce_1 = require("../internal/operators/reduce");
Object.defineProperty(exports, "reduce", { enumerable: true, get: function () { return reduce_1.reduce; } });
var repeat_1 = require("../internal/operators/repeat");
Object.defineProperty(exports, "repeat", { enumerable: true, get: function () { return repeat_1.repeat; } });
var repeatWhen_1 = require("../internal/operators/repeatWhen");
Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function () { return repeatWhen_1.repeatWhen; } });
var retry_1 = require("../internal/operators/retry");
Object.defineProperty(exports, "retry", { enumerable: true, get: function () { return retry_1.retry; } });
var retryWhen_1 = require("../internal/operators/retryWhen");
Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function () { return retryWhen_1.retryWhen; } });
var refCount_1 = require("../internal/operators/refCount");
Object.defineProperty(exports, "refCount", { enumerable: true, get: function () { return refCount_1.refCount; } });
var sample_1 = require("../internal/operators/sample");
Object.defineProperty(exports, "sample", { enumerable: true, get: function () { return sample_1.sample; } });
var sampleTime_1 = require("../internal/operators/sampleTime");
Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function () { return sampleTime_1.sampleTime; } });
var scan_1 = require("../internal/operators/scan");
Object.defineProperty(exports, "scan", { enumerable: true, get: function () { return scan_1.scan; } });
var sequenceEqual_1 = require("../internal/operators/sequenceEqual");
Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function () { return sequenceEqual_1.sequenceEqual; } });
var share_1 = require("../internal/operators/share");
Object.defineProperty(exports, "share", { enumerable: true, get: function () { return share_1.share; } });
var shareReplay_1 = require("../internal/operators/shareReplay");
Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function () { return shareReplay_1.shareReplay; } });
var single_1 = require("../internal/operators/single");
Object.defineProperty(exports, "single", { enumerable: true, get: function () { return single_1.single; } });
var skip_1 = require("../internal/operators/skip");
Object.defineProperty(exports, "skip", { enumerable: true, get: function () { return skip_1.skip; } });
var skipLast_1 = require("../internal/operators/skipLast");
Object.defineProperty(exports, "skipLast", { enumerable: true, get: function () { return skipLast_1.skipLast; } });
var skipUntil_1 = require("../internal/operators/skipUntil");
Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function () { return skipUntil_1.skipUntil; } });
var skipWhile_1 = require("../internal/operators/skipWhile");
Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function () { return skipWhile_1.skipWhile; } });
var startWith_1 = require("../internal/operators/startWith");
Object.defineProperty(exports, "startWith", { enumerable: true, get: function () { return startWith_1.startWith; } });
var subscribeOn_1 = require("../internal/operators/subscribeOn");
Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function () { return subscribeOn_1.subscribeOn; } });
var switchAll_1 = require("../internal/operators/switchAll");
Object.defineProperty(exports, "switchAll", { enumerable: true, get: function () { return switchAll_1.switchAll; } });
var switchMap_1 = require("../internal/operators/switchMap");
Object.defineProperty(exports, "switchMap", { enumerable: true, get: function () { return switchMap_1.switchMap; } });
var switchMapTo_1 = require("../internal/operators/switchMapTo");
Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function () { return switchMapTo_1.switchMapTo; } });
var switchScan_1 = require("../internal/operators/switchScan");
Object.defineProperty(exports, "switchScan", { enumerable: true, get: function () { return switchScan_1.switchScan; } });
var take_1 = require("../internal/operators/take");
Object.defineProperty(exports, "take", { enumerable: true, get: function () { return take_1.take; } });
var takeLast_1 = require("../internal/operators/takeLast");
Object.defineProperty(exports, "takeLast", { enumerable: true, get: function () { return takeLast_1.takeLast; } });
var takeUntil_1 = require("../internal/operators/takeUntil");
Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function () { return takeUntil_1.takeUntil; } });
var takeWhile_1 = require("../internal/operators/takeWhile");
Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function () { return takeWhile_1.takeWhile; } });
var tap_1 = require("../internal/operators/tap");
Object.defineProperty(exports, "tap", { enumerable: true, get: function () { return tap_1.tap; } });
var throttle_1 = require("../internal/operators/throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return throttle_1.throttle; } });
var throttleTime_1 = require("../internal/operators/throttleTime");
Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function () { return throttleTime_1.throttleTime; } });
var throwIfEmpty_1 = require("../internal/operators/throwIfEmpty");
Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function () { return throwIfEmpty_1.throwIfEmpty; } });
var timeInterval_1 = require("../internal/operators/timeInterval");
Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function () { return timeInterval_1.timeInterval; } });
var timeout_1 = require("../internal/operators/timeout");
Object.defineProperty(exports, "timeout", { enumerable: true, get: function () { return timeout_1.timeout; } });
var timeoutWith_1 = require("../internal/operators/timeoutWith");
Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function () { return timeoutWith_1.timeoutWith; } });
var timestamp_1 = require("../internal/operators/timestamp");
Object.defineProperty(exports, "timestamp", { enumerable: true, get: function () { return timestamp_1.timestamp; } });
var toArray_1 = require("../internal/operators/toArray");
Object.defineProperty(exports, "toArray", { enumerable: true, get: function () { return toArray_1.toArray; } });
var window_1 = require("../internal/operators/window");
Object.defineProperty(exports, "window", { enumerable: true, get: function () { return window_1.window; } });
var windowCount_1 = require("../internal/operators/windowCount");
Object.defineProperty(exports, "windowCount", { enumerable: true, get: function () { return windowCount_1.windowCount; } });
var windowTime_1 = require("../internal/operators/windowTime");
Object.defineProperty(exports, "windowTime", { enumerable: true, get: function () { return windowTime_1.windowTime; } });
var windowToggle_1 = require("../internal/operators/windowToggle");
Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function () { return windowToggle_1.windowToggle; } });
var windowWhen_1 = require("../internal/operators/windowWhen");
Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function () { return windowWhen_1.windowWhen; } });
var withLatestFrom_1 = require("../internal/operators/withLatestFrom");
Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function () { return withLatestFrom_1.withLatestFrom; } });
var zip_1 = require("../internal/operators/zip");
Object.defineProperty(exports, "zip", { enumerable: true, get: function () { return zip_1.zip; } });
var zipAll_1 = require("../internal/operators/zipAll");
Object.defineProperty(exports, "zipAll", { enumerable: true, get: function () { return zipAll_1.zipAll; } });
var zipWith_1 = require("../internal/operators/zipWith");
Object.defineProperty(exports, "zipWith", { enumerable: true, get: function () { return zipWith_1.zipWith; } });

},{"../internal/operators/audit":172,"../internal/operators/auditTime":173,"../internal/operators/buffer":174,"../internal/operators/bufferCount":175,"../internal/operators/bufferTime":176,"../internal/operators/bufferToggle":177,"../internal/operators/bufferWhen":178,"../internal/operators/catchError":179,"../internal/operators/combineAll":180,"../internal/operators/combineLatest":181,"../internal/operators/combineLatestAll":182,"../internal/operators/combineLatestWith":183,"../internal/operators/concat":184,"../internal/operators/concatAll":185,"../internal/operators/concatMap":186,"../internal/operators/concatMapTo":187,"../internal/operators/concatWith":188,"../internal/operators/connect":189,"../internal/operators/count":190,"../internal/operators/debounce":191,"../internal/operators/debounceTime":192,"../internal/operators/defaultIfEmpty":193,"../internal/operators/delay":194,"../internal/operators/delayWhen":195,"../internal/operators/dematerialize":196,"../internal/operators/distinct":197,"../internal/operators/distinctUntilChanged":198,"../internal/operators/distinctUntilKeyChanged":199,"../internal/operators/elementAt":200,"../internal/operators/endWith":201,"../internal/operators/every":202,"../internal/operators/exhaust":203,"../internal/operators/exhaustAll":204,"../internal/operators/exhaustMap":205,"../internal/operators/expand":206,"../internal/operators/filter":207,"../internal/operators/finalize":208,"../internal/operators/find":209,"../internal/operators/findIndex":210,"../internal/operators/first":211,"../internal/operators/flatMap":212,"../internal/operators/groupBy":213,"../internal/operators/ignoreElements":214,"../internal/operators/isEmpty":215,"../internal/operators/last":217,"../internal/operators/map":218,"../internal/operators/mapTo":219,"../internal/operators/materialize":220,"../internal/operators/max":221,"../internal/operators/merge":222,"../internal/operators/mergeAll":223,"../internal/operators/mergeMap":225,"../internal/operators/mergeMapTo":226,"../internal/operators/mergeScan":227,"../internal/operators/mergeWith":228,"../internal/operators/min":229,"../internal/operators/multicast":230,"../internal/operators/observeOn":231,"../internal/operators/onErrorResumeNextWith":232,"../internal/operators/pairwise":233,"../internal/operators/partition":234,"../internal/operators/pluck":235,"../internal/operators/publish":236,"../internal/operators/publishBehavior":237,"../internal/operators/publishLast":238,"../internal/operators/publishReplay":239,"../internal/operators/race":240,"../internal/operators/raceWith":241,"../internal/operators/reduce":242,"../internal/operators/refCount":243,"../internal/operators/repeat":244,"../internal/operators/repeatWhen":245,"../internal/operators/retry":246,"../internal/operators/retryWhen":247,"../internal/operators/sample":248,"../internal/operators/sampleTime":249,"../internal/operators/scan":250,"../internal/operators/sequenceEqual":252,"../internal/operators/share":253,"../internal/operators/shareReplay":254,"../internal/operators/single":255,"../internal/operators/skip":256,"../internal/operators/skipLast":257,"../internal/operators/skipUntil":258,"../internal/operators/skipWhile":259,"../internal/operators/startWith":260,"../internal/operators/subscribeOn":261,"../internal/operators/switchAll":262,"../internal/operators/switchMap":263,"../internal/operators/switchMapTo":264,"../internal/operators/switchScan":265,"../internal/operators/take":266,"../internal/operators/takeLast":267,"../internal/operators/takeUntil":268,"../internal/operators/takeWhile":269,"../internal/operators/tap":270,"../internal/operators/throttle":271,"../internal/operators/throttleTime":272,"../internal/operators/throwIfEmpty":273,"../internal/operators/timeInterval":274,"../internal/operators/timeout":275,"../internal/operators/timeoutWith":276,"../internal/operators/timestamp":277,"../internal/operators/toArray":278,"../internal/operators/window":279,"../internal/operators/windowCount":280,"../internal/operators/windowTime":281,"../internal/operators/windowToggle":282,"../internal/operators/windowWhen":283,"../internal/operators/withLatestFrom":284,"../internal/operators/zip":285,"../internal/operators/zipAll":286,"../internal/operators/zipWith":287}],352:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs-interop'), require('@babel/runtime/helpers/defineProperty')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs-interop', '@babel/runtime/helpers/defineProperty'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.subscribableThings = {}, global.rxjsInterop, global._defineProperty));
})(this, (function (exports, rxjsInterop, _defineProperty) { 'use strict';

    var createAnimationFrame = function createAnimationFrame(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function () {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.cancelAnimationFrame === undefined || window.requestAnimationFrame === undefined) {
            return emitNotSupportedError(observer);
          }
          var animationFrameHandle = window.requestAnimationFrame(function animationFrameCallback(timestamp) {
            animationFrameHandle = window.requestAnimationFrame(animationFrameCallback);
            observer.next(timestamp);
          });
          return function () {
            return window.cancelAnimationFrame(animationFrameHandle);
          };
        });
      };
    };

    var createAttribute = function createAttribute(mapSubscribableThing, mutations, prependSubscribableThing) {
      return function (htmlElement, name) {
        var getAttribute = function getAttribute() {
          return htmlElement.getAttribute(name);
        };
        return prependSubscribableThing(mapSubscribableThing(mutations(htmlElement, {
          attributeFilter: [name],
          childList: false,
          subtree: false
        }), function () {
          return getAttribute();
        }), getAttribute());
      };
    };

    var createGeolocation = function createGeolocation(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.navigator === undefined || window.navigator.geolocation === undefined || window.navigator.geolocation.clearWatch === undefined || window.navigator.geolocation.watchPosition === undefined) {
            return emitNotSupportedError(observer);
          }
          var watchId = window.navigator.geolocation.watchPosition(function (position) {
            return observer.next(position);
          }, function (err) {
            return observer.error(err);
          }, options);
          return function () {
            return window.navigator.geolocation.clearWatch(watchId);
          };
        });
      };
    };

    var createIntersections = function createIntersections(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (htmlElement, options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.IntersectionObserver === undefined) {
            return emitNotSupportedError(observer);
          }
          var intersectionObserverObserver = new window.IntersectionObserver(function (entries) {
            return observer.next(entries);
          }, options);
          try {
            intersectionObserverObserver.observe(htmlElement);
          } catch (err) {
            observer.error(err);
          }
          return function () {
            return intersectionObserverObserver.disconnect();
          };
        });
      };
    };

    function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    var createMapSubscribableThing = function createMapSubscribableThing(wrapSubscribeFunction) {
      return function (subscribableThing, map) {
        return wrapSubscribeFunction(function (observer) {
          return subscribableThing(_objectSpread$1(_objectSpread$1({}, observer), {}, {
            next: function next(value) {
              return observer.next(map(value));
            }
          }));
        });
      };
    };

    var createMediaDevices = function createMediaDevices(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function () {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.navigator === undefined || window.navigator.mediaDevices === undefined || window.navigator.mediaDevices.enumerateDevices === undefined) {
            return emitNotSupportedError(observer);
          }
          var isActive = true;
          var enumerateDevices = function enumerateDevices() {
            window.navigator.mediaDevices.enumerateDevices().then(function (mediaDevices) {
              if (isActive) {
                observer.next(mediaDevices);
              }
            }, function (err) {
              if (isActive) {
                unsubscribe();
                observer.error(err);
              }
            });
          };
          var unsubscribe = function unsubscribe() {
            isActive = false;
            window.navigator.mediaDevices.removeEventListener('devicechange', enumerateDevices);
          };
          enumerateDevices();
          window.navigator.mediaDevices.addEventListener('devicechange', enumerateDevices);
          return unsubscribe;
        });
      };
    };

    var createMediaQueryMatch = function createMediaQueryMatch(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (mediaQueryString) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.matchMedia === undefined) {
            return emitNotSupportedError(observer);
          }
          var mediaQueryList = window.matchMedia(mediaQueryString);
          observer.next(mediaQueryList.matches);
          mediaQueryList.onchange = function () {
            return observer.next(mediaQueryList.matches);
          };
          return function () {
            mediaQueryList.onchange = null;
          };
        });
      };
    };

    var createMetrics = function createMetrics(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.PerformanceObserver === undefined) {
            return emitNotSupportedError(observer);
          }
          var performanceObserver = new window.PerformanceObserver(function (entryList) {
            return observer.next(entryList.getEntries());
          });
          try {
            performanceObserver.observe(options);
          } catch (err) {
            observer.error(err);
          }
          return function () {
            return performanceObserver.disconnect();
          };
        });
      };
    };

    var createMidiInputs = function createMidiInputs(wrapSubscribeFunction) {
      return function (midiAccess) {
        return wrapSubscribeFunction(function (observer) {
          var midiInputs = Array.from(midiAccess.inputs.values());
          var emitMidiInputs = function emitMidiInputs() {
            var midiAccessInputs = midiAccess.inputs;
            if (midiInputs.length !== midiAccessInputs.size || midiInputs.some(function (_ref) {
              var id = _ref.id;
              return !midiAccessInputs.has(id);
            })) {
              midiInputs = Array.from(midiAccessInputs.values());
              observer.next(midiInputs);
            }
          };
          observer.next(midiInputs);
          midiAccess.addEventListener('statechange', emitMidiInputs);
          return function () {
            return midiAccess.removeEventListener('statechange', emitMidiInputs);
          };
        });
      };
    };

    var createMidiOutputs = function createMidiOutputs(wrapSubscribeFunction) {
      return function (midiAccess) {
        return wrapSubscribeFunction(function (observer) {
          var midiOutputs = Array.from(midiAccess.outputs.values());
          var emitMidiOutputs = function emitMidiOutputs() {
            var midiAccessOutputs = midiAccess.outputs;
            if (midiOutputs.length !== midiAccessOutputs.size || midiOutputs.some(function (_ref) {
              var id = _ref.id;
              return !midiAccessOutputs.has(id);
            })) {
              midiOutputs = Array.from(midiAccessOutputs.values());
              observer.next(midiOutputs);
            }
          };
          observer.next(midiOutputs);
          midiAccess.addEventListener('statechange', emitMidiOutputs);
          return function () {
            return midiAccess.removeEventListener('statechange', emitMidiOutputs);
          };
        });
      };
    };

    var createMutations = function createMutations(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (htmlElement, options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.MutationObserver === undefined) {
            return emitNotSupportedError(observer);
          }
          var mutationObserver = new window.MutationObserver(function (records) {
            return observer.next(records);
          });
          try {
            mutationObserver.observe(htmlElement, options);
          } catch (err) {
            observer.error(err);
          }
          return function () {
            return mutationObserver.disconnect();
          };
        });
      };
    };

    var createOn = function createOn(wrapSubscribeFunction) {
      return function (target, type, options) {
        return wrapSubscribeFunction(function (observer) {
          var listener = function listener(event) {
            return observer.next(event);
          };
          target.addEventListener(type, listener, options);
          return function () {
            return target.removeEventListener(type, listener, options);
          };
        });
      };
    };

    var createOnline = function createOnline(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function () {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.navigator === undefined || window.navigator.onLine === undefined) {
            return emitNotSupportedError(observer);
          }
          var emitFalse = function emitFalse() {
            return observer.next(false);
          };
          var emitTrue = function emitTrue() {
            return observer.next(true);
          };
          window.addEventListener('offline', emitFalse);
          window.addEventListener('online', emitTrue);
          observer.next(window.navigator.onLine);
          return function () {
            window.removeEventListener('offline', emitFalse);
            window.removeEventListener('online', emitTrue);
          };
        });
      };
    };

    var createPermissionState = function createPermissionState(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (permissionDescriptor) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.navigator === undefined || window.navigator.permissions === undefined || window.navigator.permissions.query === undefined) {
            return emitNotSupportedError(observer);
          }
          var isActive = true;
          var unsubscribe = function unsubscribe() {
            isActive = false;
          };
          window.navigator.permissions.query(permissionDescriptor).then(function (permissionStatus) {
            if (isActive) {
              observer.next(permissionStatus.state);
            }
            if (isActive) {
              permissionStatus.onchange = function () {
                return observer.next(permissionStatus.state);
              };
              unsubscribe = function unsubscribe() {
                permissionStatus.onchange = null;
              };
            }
          }, function (err) {
            if (isActive) {
              observer.error(err);
            }
          });
          return function () {
            return unsubscribe();
          };
        });
      };
    };

    var createPrependSubscribableThing = function createPrependSubscribableThing(wrapSubscribeFunction) {
      return function (subscribableThing, prependedValue) {
        return wrapSubscribeFunction(function (observer) {
          observer.next(prependedValue);
          return subscribableThing(observer);
        });
      };
    };

    var createReports = function createReports(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.ReportingObserver === undefined) {
            return emitNotSupportedError(observer);
          }
          var reportingObserver = new window.ReportingObserver(function (reportList) {
            return observer.next(reportList);
          }, options);
          reportingObserver.observe();
          return function () {
            return reportingObserver.disconnect();
          };
        });
      };
    };

    var createResizes = function createResizes(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (htmlElement, options) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.ResizeObserver === undefined) {
            return emitNotSupportedError(observer);
          }
          var resizeObserver = new window.ResizeObserver(function (entries) {
            return observer.next(entries);
          });
          try {
            resizeObserver.observe(htmlElement, options);
          } catch (err) {
            observer.error(err);
          }
          return function () {
            return resizeObserver.disconnect();
          };
        });
      };
    };

    var createUnhandledRejection = function createUnhandledRejection(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (coolingOffPeriod) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.clearInterval === undefined || window.setInterval === undefined) {
            return emitNotSupportedError(observer);
          }
          var possiblyUnhandledRejections = new Map();
          var intervalId = null;
          var deletePossiblyUnhandledRejection = function deletePossiblyUnhandledRejection(_ref) {
            var promise = _ref.promise;
            return possiblyUnhandledRejections["delete"](promise);
          };
          var emitUnhandledRejection = function emitUnhandledRejection() {
            var latestTimestampToEmit = Date.now() - coolingOffPeriod;
            possiblyUnhandledRejections.forEach(function (_ref2, promise) {
              var reason = _ref2.reason,
                timestamp = _ref2.timestamp;
              if (timestamp > latestTimestampToEmit) {
                return;
              }
              possiblyUnhandledRejections["delete"](promise);
              observer.next(reason);
            });
            if (intervalId !== null && possiblyUnhandledRejections.size === 0) {
              window.clearInterval(intervalId);
              intervalId = null;
            }
          };
          var registerPossiblyUnhandledRejection = function registerPossiblyUnhandledRejection(event) {
            event.preventDefault();
            possiblyUnhandledRejections.set(event.promise, {
              reason: event.reason,
              timestamp: Date.now()
            });
            if (intervalId === null) {
              intervalId = window.setInterval(emitUnhandledRejection, coolingOffPeriod / 2);
            }
          };
          window.addEventListener('rejectionhandled', deletePossiblyUnhandledRejection);
          window.addEventListener('unhandledrejection', registerPossiblyUnhandledRejection);
          return function () {
            if (intervalId !== null) {
              window.clearInterval(intervalId);
            }
            window.removeEventListener('rejectionhandled', deletePossiblyUnhandledRejection);
            window.removeEventListener('unhandledrejection', registerPossiblyUnhandledRejection);
          };
        });
      };
    };

    function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    var createVideoFrame = function createVideoFrame(emitNotSupportedError, wrapSubscribeFunction) {
      return function (videoElement) {
        return wrapSubscribeFunction(function (observer) {
          if (videoElement.cancelVideoFrameCallback === undefined || videoElement.requestVideoFrameCallback === undefined) {
            return emitNotSupportedError(observer);
          }
          var videoFrameHandle = videoElement.requestVideoFrameCallback(function videoFrameCallback(now, metadata) {
            videoFrameHandle = videoElement.requestVideoFrameCallback(videoFrameCallback);
            observer.next(_objectSpread(_objectSpread({}, metadata), {}, {
              now: now
            }));
          });
          return function () {
            return videoElement.cancelVideoFrameCallback(videoFrameHandle);
          };
        });
      };
    };

    var createWakeLock = function createWakeLock(emitNotSupportedError, window, wrapSubscribeFunction) {
      return function (type) {
        return wrapSubscribeFunction(function (observer) {
          if (window === null || window.navigator === undefined || window.navigator.wakeLock === undefined) {
            return emitNotSupportedError(observer);
          }
          var releaseWakeLock = function releaseWakeLock(wakeLockSentinel) {
            return wakeLockSentinel.release()["catch"](function () {
              // Ignore errors.
            });
          };
          var removeReleaseEventListener = function removeReleaseEventListener(wakeLockSentinel) {
            wakeLockSentinel.onrelease = null;
          };
          var isActive = true;
          var unsubscribeWhileRequesting = function unsubscribeWhileRequesting() {
            isActive = false;
          };
          var unsubscribe = unsubscribeWhileRequesting;
          var requestWakeLock = function requestWakeLock() {
            return window.navigator.wakeLock.request(type).then(function (wakeLockSentinel) {
              if (isActive) {
                observer.next(true);
              }
              if (isActive) {
                wakeLockSentinel.onrelease = function () {
                  observer.next(false);
                  unsubscribe = unsubscribeWhileRequesting;
                  removeReleaseEventListener(wakeLockSentinel);
                  requestWakeLock();
                };
                unsubscribe = function unsubscribe() {
                  removeReleaseEventListener(wakeLockSentinel);
                  releaseWakeLock(wakeLockSentinel);
                };
              } else {
                releaseWakeLock(wakeLockSentinel);
              }
            }, function (err) {
              if (isActive) {
                observer.error(err);
              }
            });
          };
          requestWakeLock();
          return function () {
            return unsubscribe();
          };
        });
      };
    };

    // @todo TypeScript does not include type definitions for the Reporting API yet.
    var createWindow = function createWindow() {
      return typeof window === 'undefined' ? null : window;
    };

    var createWrapSubscribeFunction = function createWrapSubscribeFunction(patch, toObserver) {
      var emptyFunction = function emptyFunction() {}; // tslint:disable-line:no-empty
      var isNextFunction = function isNextFunction(args) {
        return typeof args[0] === 'function';
      };
      return function (innerSubscribe) {
        var _subscribe = function subscribe() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var unsubscribe = innerSubscribe(isNextFunction(args) ? toObserver({
            next: args[0]
          }) : toObserver.apply(void 0, args));
          if (unsubscribe !== undefined) {
            return unsubscribe;
          }
          return emptyFunction;
        };
        _subscribe[Symbol.observable] = function () {
          return {
            subscribe: function subscribe() {
              return {
                unsubscribe: _subscribe.apply(void 0, arguments)
              };
            }
          };
        };
        return patch(_subscribe);
      };
    };

    var emitNotSupportedError = function emitNotSupportedError(observer) {
      observer.error(new Error('The required browser API seems to be not supported.'));
      return function () {}; // tslint:disable-line:no-empty
    };

    var window$1 = createWindow();
    var wrapSubscribeFunction = createWrapSubscribeFunction(rxjsInterop.patch, rxjsInterop.toObserver);
    var animationFrame = createAnimationFrame(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var mutations = createMutations(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var mapSubscribableThing = createMapSubscribableThing(wrapSubscribeFunction);
    var prependSubscribableThing = createPrependSubscribableThing(wrapSubscribeFunction);
    var attribute = createAttribute(mapSubscribableThing, mutations, prependSubscribableThing);
    var geolocation = createGeolocation(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var intersections = createIntersections(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var mediaDevices = createMediaDevices(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var mediaQueryMatch = createMediaQueryMatch(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var metrics = createMetrics(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var midiInputs = createMidiInputs(wrapSubscribeFunction);
    var midiOutputs = createMidiOutputs(wrapSubscribeFunction);
    var on = createOn(wrapSubscribeFunction);
    var online = createOnline(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var permissionState = createPermissionState(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var reports = createReports(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var resizes = createResizes(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var unhandledRejection = createUnhandledRejection(emitNotSupportedError, window$1, wrapSubscribeFunction);
    var videoFrame = createVideoFrame(emitNotSupportedError, wrapSubscribeFunction);
    var wakeLock = createWakeLock(emitNotSupportedError, window$1, wrapSubscribeFunction);

    exports.animationFrame = animationFrame;
    exports.attribute = attribute;
    exports.geolocation = geolocation;
    exports.intersections = intersections;
    exports.mediaDevices = mediaDevices;
    exports.mediaQueryMatch = mediaQueryMatch;
    exports.metrics = metrics;
    exports.midiInputs = midiInputs;
    exports.midiOutputs = midiOutputs;
    exports.mutations = mutations;
    exports.on = on;
    exports.online = online;
    exports.permissionState = permissionState;
    exports.reports = reports;
    exports.resizes = resizes;
    exports.unhandledRejection = unhandledRejection;
    exports.videoFrame = videoFrame;
    exports.wakeLock = wakeLock;

}));

},{"@babel/runtime/helpers/defineProperty":8,"rxjs-interop":121}],353:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/inherits'), require('@babel/runtime/helpers/possibleConstructorReturn'), require('@babel/runtime/helpers/getPrototypeOf')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/inherits', '@babel/runtime/helpers/possibleConstructorReturn', '@babel/runtime/helpers/getPrototypeOf'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.timingObject = {}, global._classCallCheck, global._createClass, global._defineProperty, global._inherits, global._possibleConstructorReturn, global._getPrototypeOf));
})(this, (function (exports, _classCallCheck, _createClass, _defineProperty, _inherits, _possibleConstructorReturn, _getPrototypeOf) { 'use strict';

    var createCalculateDelta = function createCalculateDelta(calculatePositiveRealSolution) {
      return function (vector, startPosition, endPosition) {
        var deltaToStartPosition = calculatePositiveRealSolution(vector, startPosition);
        var deltaToEndPosition = calculatePositiveRealSolution(vector, endPosition);
        // @todo Is it theoretically possible to have both deltas?
        if (deltaToStartPosition !== null && deltaToEndPosition !== null) {
          if (deltaToStartPosition < deltaToEndPosition) {
            return deltaToStartPosition;
          }
          return deltaToEndPosition;
        }
        if (deltaToStartPosition !== null) {
          return deltaToStartPosition;
        }
        if (deltaToEndPosition !== null) {
          return deltaToEndPosition;
        }
        return null;
      };
    };

    var createCalculatePositiveRealSolution = function createCalculatePositiveRealSolution(calculateRealSolutions) {
      return function (_ref, x) {
        var acceleration = _ref.acceleration,
          position = _ref.position,
          velocity = _ref.velocity;
        var results = calculateRealSolutions(position, velocity, acceleration, x);
        if (results.length === 0) {
          return null;
        }
        if (results.length === 1) {
          if (results[0] > 0) {
            return results[0];
          }
          return null;
        }
        if (results.length === 2) {
          if (results[1] < 0) {
            return null;
          }
          if (results[0] > 0) {
            return results[0];
          }
          if (results[1] > 0) {
            return results[1];
          }
        }
        return null;
      };
    };

    var createCalculateTimeoutDelay = function createCalculateTimeoutDelay(calculateDelta) {
      return function (vector, startPosition, endPosition) {
        var delta = calculateDelta(vector, startPosition, endPosition);
        if (delta === null || delta === Number.POSITIVE_INFINITY) {
          return null;
        }
        return delta;
      };
    };

    var createEventTargetConstructor = function createEventTargetConstructor(createEventTarget, wrapEventListener) {
      return /*#__PURE__*/function () {
        function EventTarget() {
          _classCallCheck(this, EventTarget);
          this._listeners = new WeakMap();
          this._nativeEventTarget = createEventTarget();
        }
        _createClass(EventTarget, [{
          key: "addEventListener",
          value: function addEventListener(type, listener, options) {
            if (listener !== null) {
              var wrappedEventListener = this._listeners.get(listener);
              if (wrappedEventListener === undefined) {
                wrappedEventListener = wrapEventListener(this, listener);
                if (typeof listener === 'function') {
                  this._listeners.set(listener, wrappedEventListener);
                }
              }
              this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            return this._nativeEventTarget.dispatchEvent(event);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(type, listener, options) {
            var wrappedEventListener = listener === null ? undefined : this._listeners.get(listener);
            this._nativeEventTarget.removeEventListener(type, wrappedEventListener === undefined ? null : wrappedEventListener, options);
          }
        }]);
        return EventTarget;
      }();
    };

    var createEventTargetFactory = function createEventTargetFactory(window) {
      return function () {
        if (window === null) {
          throw new Error('A native EventTarget could not be created.');
        }
        return window.document.createElement('p');
      };
    };

    var createIllegalValueError = function createIllegalValueError() {
      try {
        return new DOMException('', 'IllegalValueError');
      } catch (err) {
        // @todo err.code;
        err.name = 'IllegalValueError';
        return err;
      }
    };

    var createInvalidStateError = function createInvalidStateError() {
      try {
        return new DOMException('', 'InvalidStateError');
      } catch (err) {
        err.code = 11;
        err.name = 'InvalidStateError';
        return err;
      }
    };

    function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    var createTimingObjectConstructor = function createTimingObjectConstructor(calculateTimeoutDelay, createIllegalValueError, createInvalidStateError, eventTargetConstructor, filterTimingStateVectorUpdate, performance, setTimeout, translateTimingStateVector) {
      return /*#__PURE__*/function (_eventTargetConstruct) {
        _inherits(_class, _eventTargetConstruct);
        var _super = _createSuper(_class);
        function _class() {
          var _this;
          var timingProviderSourceOrVector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NEGATIVE_INFINITY;
          var endPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
          _classCallCheck(this, _class);
          _this = _super.call(this);
          var _ref = timingProviderSourceOrVector.update === undefined ? {
              timingProviderSource: null,
              vector: timingProviderSourceOrVector
            } : {
              timingProviderSource: timingProviderSourceOrVector,
              vector: {}
            },
            timingProviderSource = _ref.timingProviderSource,
            vector = _ref.vector;
          _this._endPosition = timingProviderSource === null ? endPosition : timingProviderSource.endPosition;
          _this._onchange = null;
          _this._onerror = null;
          _this._onreadystatechange = null;
          _this._readyState = timingProviderSource === null ? 'open' : timingProviderSource.readyState;
          _this._skew = timingProviderSource === null ? 0 : timingProviderSource.skew;
          _this._startPosition = timingProviderSource === null ? startPosition : timingProviderSource.startPosition;
          _this._timingProviderSource = timingProviderSource;
          _this._timeoutId = null;
          _this._vector = timingProviderSource === null ? _objectSpread$1(_objectSpread$1({
            acceleration: 0,
            position: 0,
            velocity: 0
          }, filterTimingStateVectorUpdate(vector)), {}, {
            timestamp: performance.now() / 1000
          }) : timingProviderSource.vector;
          // @todo The spec doesn't require to check if the endPosition is actually greater than the startPosition.
          if (endPosition < _this._vector.position) {
            _this._vector = _objectSpread$1(_objectSpread$1({}, _this._vector), {}, {
              acceleration: 0,
              position: endPosition,
              velocity: 0
            });
          }
          if (startPosition > _this._vector.position) {
            _this._vector = _objectSpread$1(_objectSpread$1({}, _this._vector), {}, {
              acceleration: 0,
              position: startPosition,
              velocity: 0
            });
          }
          /*
           * @todo Check if the vector would leave the range immediately.
           * @todo The specification requires to run this._setInternalTimeout() only if the vector had to be modified above but it
           * probably should run in either case.
           * https://webtiming.github.io/timingobject/#x5-1-create-a-new-timing-object
           */
          _this._setInternalTimeout();
          if (timingProviderSource === null) {
            setTimeout(function () {
              return _this.dispatchEvent(new Event('readystatechange'));
            });
          } else {
            var onAdjust = function onAdjust() {
              _this._skew = timingProviderSource.skew;
              /*
               * @todo Process skew change with newSkew as parameter.
               * https://webtiming.github.io/timingobject/#x5-7-process-skew-change
               * https://webtiming.github.io/timingobject/#x5-10-calculate-skew-adjustment
               */
            };
            var onChange = function onChange() {
              return _this._setInternalVector(timingProviderSource.vector);
            };
            var onReadyStateChange = function onReadyStateChange() {
              if (_this._isAllowedTransition(timingProviderSource.readyState)) {
                _this._readyState = timingProviderSource.readyState;
              } else {
                _this._readyState = 'closed';
                timingProviderSource.removeEventListener('adjust', onAdjust);
                timingProviderSource.removeEventListener('change', onChange);
                timingProviderSource.removeEventListener('readystatechange', onReadyStateChange);
              }
              if (timingProviderSource.error !== null) {
                setTimeout(function () {
                  return _this.dispatchEvent(new ErrorEvent('error', {
                    error: timingProviderSource.error
                  }));
                });
              }
              setTimeout(function () {
                return _this.dispatchEvent(new Event('readystatechange'));
              });
            };
            timingProviderSource.addEventListener('adjust', onAdjust);
            timingProviderSource.addEventListener('change', onChange);
            timingProviderSource.addEventListener('readystatechange', onReadyStateChange);
          }
          return _this;
        }
        _createClass(_class, [{
          key: "endPosition",
          get: function get() {
            return this._endPosition;
          }
        }, {
          key: "onchange",
          get: function get() {
            return this._onchange === null ? this._onchange : this._onchange[0];
          },
          set: function set(value) {
            if (this._onchange !== null) {
              this.removeEventListener('change', this._onchange[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('change', boundListener);
              this._onchange = [value, boundListener];
            } else {
              this._onchange = null;
            }
          }
        }, {
          key: "onerror",
          get: function get() {
            return this._onerror === null ? this._onerror : this._onerror[0];
          },
          set: function set(value) {
            if (this._onerror !== null) {
              this.removeEventListener('error', this._onerror[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('error', boundListener);
              this._onerror = [value, boundListener];
            } else {
              this._onerror = null;
            }
          }
        }, {
          key: "onreadystatechange",
          get: function get() {
            return this._onreadystatechange === null ? this._onreadystatechange : this._onreadystatechange[0];
          },
          set: function set(value) {
            if (this._onreadystatechange !== null) {
              this.removeEventListener('readystatechange', this._onreadystatechange[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('readystatechange', boundListener);
              this._onreadystatechange = [value, boundListener];
            } else {
              this._onreadystatechange = null;
            }
          }
        }, {
          key: "readyState",
          get: function get() {
            return this._readyState;
          }
        }, {
          key: "startPosition",
          get: function get() {
            return this._startPosition;
          }
        }, {
          key: "timingProviderSource",
          get: function get() {
            return this._timingProviderSource;
          }
        }, {
          key: "query",
          value: function query() {
            if (this._readyState !== 'open') {
              throw createInvalidStateError();
            }
            var timestamp = performance.now() / 1000;
            // @todo Compute the delta by gradually applying the skew.
            var delta = this._timingProviderSource === null ? timestamp - this._vector.timestamp : timestamp + this._skew - this._vector.timestamp;
            var vector = translateTimingStateVector(this._vector, delta);
            if (this._endPosition < vector.position || this._startPosition > vector.position) {
              this._setInternalVector(_objectSpread$1(_objectSpread$1({}, vector), {}, {
                acceleration: 0,
                position: this._endPosition < vector.position ? this._endPosition : this._startPosition,
                velocity: 0
              }));
              return this.query();
            }
            return vector;
          }
        }, {
          key: "update",
          value: function update(newVector) {
            if (this._readyState !== 'open') {
              return Promise.reject(createInvalidStateError());
            }
            if (this._timingProviderSource !== null) {
              var promise = this._timingProviderSource.update(newVector);
              if (promise instanceof Promise) {
                return promise;
              }
              return Promise.reject(new TypeError('The timingProviderSource failed to return a promise.'));
            }
            var filteredVector = filterTimingStateVectorUpdate(newVector);
            // Return immediately if there is nothing to update.
            if (Object.keys(filteredVector).length === 0) {
              return Promise.resolve();
            }
            var normalizedNewVector = _objectSpread$1(_objectSpread$1({}, this.query()), filteredVector);
            var position = normalizedNewVector.position,
              velocity = normalizedNewVector.velocity,
              acceleration = normalizedNewVector.acceleration;
            if (position < this._startPosition || position > this._endPosition || position === this._startPosition && (velocity < 0 || velocity === 0 && acceleration < 0) || position === this._endPosition && (velocity > 0 || velocity === 0 && acceleration > 0)) {
              return Promise.reject(createIllegalValueError());
            }
            this._setInternalVector(normalizedNewVector);
            return Promise.resolve();
          }
        }, {
          key: "_isAllowedTransition",
          value: function _isAllowedTransition(readyState) {
            return this._readyState === 'closing' && readyState === 'closed' || this._readyState === 'connecting' || this._readyState === 'open' && (readyState === 'closed' || readyState === 'closing');
          }
        }, {
          key: "_setInternalTimeout",
          value: function _setInternalTimeout() {
            var _this2 = this;
            if (this._timeoutId !== null) {
              clearTimeout(this._timeoutId);
              this._timeoutId = null;
            }
            if (this._endPosition === Number.POSITIVE_INFINITY && this._startPosition === Number.NEGATIVE_INFINITY || this._vector.acceleration === 0 && this._vector.velocity === 0) {
              return;
            }
            var delay = calculateTimeoutDelay(this._vector, this._startPosition, this._endPosition);
            if (delay === null) {
              return;
            }
            this._timeoutId = setTimeout(function () {
              return _this2.query();
            }, delay);
          }
        }, {
          key: "_setInternalVector",
          value: function _setInternalVector(vector) {
            var _this3 = this;
            this._vector = vector;
            this._setInternalTimeout();
            setTimeout(function () {
              return _this3.dispatchEvent(new Event('change'));
            });
          }
        }]);
        return _class;
      }(eventTargetConstructor);
    };

    var createWindow = function createWindow() {
      return typeof window === 'undefined' ? null : window;
    };

    var calculateRealSolutions = function calculateRealSolutions(position, velocity, acceleration, x) {
      // The position is constant.
      if (acceleration === 0 && velocity === 0) {
        if (position !== x) {
          return [];
        }
        return [0];
      }
      // The velocity is constant and not equal to zero.
      if (acceleration === 0) {
        return [(x - position) / velocity];
      }
      // The velocity is accelerated.
      // This equals p/2 of the pq-formula.
      var firstSummand = velocity / acceleration;
      // This equals sqrt((p/2 ** 2) - q) of the pq-formula.
      var secondSummand = Math.sqrt(Math.pow(firstSummand, 2) - 2 / acceleration * (position - x));
      return [secondSummand - firstSummand, -(secondSummand + firstSummand)].filter(function (solution) {
        return !isNaN(solution);
      }).sort();
    };

    function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    var filterTimingStateVectorUpdate = function filterTimingStateVectorUpdate(vector) {
      if (vector === undefined) {
        return {};
      }
      var filteredVector = vector.acceleration !== null && vector.acceleration !== undefined ? {
        acceleration: vector.acceleration
      } : {};
      if (vector.position !== null && vector.position !== undefined) {
        filteredVector = _objectSpread(_objectSpread({}, filteredVector), {}, {
          position: vector.position
        });
      }
      if (vector.velocity !== null && vector.velocity !== undefined) {
        return _objectSpread(_objectSpread({}, filteredVector), {}, {
          velocity: vector.velocity
        });
      }
      return filteredVector;
    };

    var translateTimingStateVector = function translateTimingStateVector(vector, delta) {
      var acceleration = vector.acceleration,
        position = vector.position,
        timestamp = vector.timestamp,
        velocity = vector.velocity;
      return {
        acceleration: acceleration,
        position: position + velocity * delta + 0.5 * acceleration * Math.pow(delta, 2),
        timestamp: timestamp + delta,
        velocity: velocity + acceleration * delta
      };
    };

    var wrapEventListener = function wrapEventListener(target, eventListener) {
      return function (event) {
        var descriptor = {
          value: target
        };
        Object.defineProperties(event, {
          currentTarget: descriptor,
          target: descriptor
        });
        if (typeof eventListener === 'function') {
          return eventListener.call(target, event);
        }
        return eventListener.handleEvent.call(target, event);
      };
    };

    var timingObjectConstructor = createTimingObjectConstructor(createCalculateTimeoutDelay(createCalculateDelta(createCalculatePositiveRealSolution(calculateRealSolutions))), createIllegalValueError, createInvalidStateError, createEventTargetConstructor(createEventTargetFactory(createWindow()), wrapEventListener), filterTimingStateVectorUpdate, performance, setTimeout, translateTimingStateVector);
    // @todo Expose an isSupported flag which checks for performance.now() support.

    exports.TimingObject = timingObjectConstructor;
    exports.filterTimingStateVectorUpdate = filterTimingStateVectorUpdate;
    exports.translateTimingStateVector = translateTimingStateVector;

}));

},{"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/possibleConstructorReturn":17}],354:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/toConsumableArray'), require('rxjs'), require('subscribable-things'), require('@babel/runtime/helpers/objectWithoutProperties'), require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/inherits'), require('@babel/runtime/helpers/possibleConstructorReturn'), require('@babel/runtime/helpers/getPrototypeOf'), require('rxjs-etc/operators'), require('timing-object'), require('@babel/runtime/helpers/typeof'), require('@babel/runtime/helpers/toArray'), require('rxjs-etc'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/regenerator')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/toConsumableArray', 'rxjs', 'subscribable-things', '@babel/runtime/helpers/objectWithoutProperties', '@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/inherits', '@babel/runtime/helpers/possibleConstructorReturn', '@babel/runtime/helpers/getPrototypeOf', 'rxjs-etc/operators', 'timing-object', '@babel/runtime/helpers/typeof', '@babel/runtime/helpers/toArray', 'rxjs-etc', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/regenerator'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.timingProvider = {}, global._slicedToArray, global._classCallCheck, global._createClass, global._toConsumableArray, global.rxjs, global.subscribableThings, global._objectWithoutProperties, global._defineProperty, global._inherits, global._possibleConstructorReturn, global._getPrototypeOf, global.operators, global.timingObject, global._typeof, global._toArray, global.rxjsEtc, global._asyncToGenerator, global._regeneratorRuntime));
})(this, (function (exports, _slicedToArray, _classCallCheck, _createClass, _toConsumableArray, rxjs, subscribableThings, _objectWithoutProperties, _defineProperty, _inherits, _possibleConstructorReturn, _getPrototypeOf, operators, timingObject, _typeof, _toArray, rxjsEtc, _asyncToGenerator, _regeneratorRuntime) { 'use strict';

    var createEventTargetConstructor = function createEventTargetConstructor(createEventTarget, wrapEventListener) {
      return /*#__PURE__*/function () {
        function EventTarget() {
          _classCallCheck(this, EventTarget);
          this._listeners = new WeakMap();
          this._nativeEventTarget = createEventTarget();
        }
        _createClass(EventTarget, [{
          key: "addEventListener",
          value: function addEventListener(type, listener, options) {
            if (listener !== null) {
              var wrappedEventListener = this._listeners.get(listener);
              if (wrappedEventListener === undefined) {
                wrappedEventListener = wrapEventListener(this, listener);
                if (typeof listener === 'function') {
                  this._listeners.set(listener, wrappedEventListener);
                }
              }
              this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            return this._nativeEventTarget.dispatchEvent(event);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(type, listener, options) {
            var wrappedEventListener = listener === null ? undefined : this._listeners.get(listener);
            this._nativeEventTarget.removeEventListener(type, wrappedEventListener === undefined ? null : wrappedEventListener, options);
          }
        }]);
        return EventTarget;
      }();
    };

    var createEventTargetFactory = function createEventTargetFactory(window) {
      return function () {
        if (window === null) {
          throw new Error('A native EventTarget could not be created.');
        }
        return window.document.createElement('p');
      };
    };

    var createRTCPeerConnectionFactory = function createRTCPeerConnectionFactory(window) {
      return function () {
        if (window === null) {
          throw new Error('A native EventTarget could not be created.');
        }
        return new window.RTCPeerConnection({
          iceCandidatePoolSize: 1,
          iceServers: [{
            urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302']
          }]
        });
      };
    };

    var createSignalingFactory = function createSignalingFactory(createWebSocket) {
      return function (url) {
        var errorSubject = new rxjs.Subject();
        var webSocket = createWebSocket(url);
        var signalingEvent$ = rxjs.merge(subscribableThings.on(webSocket, 'message'), rxjs.merge(rxjs.merge.apply(void 0, _toConsumableArray(['close', 'error'].map(function (type) {
          return subscribableThings.on(webSocket, type);
        }))).pipe(rxjs.map(function (_ref) {
          var type = _ref.type;
          return new Error("WebSocket fired unexpected event of type \"".concat(type, "\"."));
        })), errorSubject
        // tslint:disable-next-line:rxjs-throw-error
        ).pipe(rxjs.mergeMap(function (err) {
          return rxjs.throwError(function () {
            return err;
          });
        }))).pipe(rxjs.finalize(function () {
          return webSocket.close();
        }), rxjs.map(function (event) {
          return JSON.parse(event.data);
        }));
        var sendSignalingEvent = function sendSignalingEvent(event) {
          try {
            webSocket.send(JSON.stringify(event));
          } catch (err) {
            errorSubject.next(err);
          }
        };
        return [signalingEvent$, sendSignalingEvent];
      };
    };

    var createSortByHopsAndRoundTripTime = function createSortByHopsAndRoundTripTime(compareHops, getHops, getRoundTripTime) {
      return function (array) {
        array.sort(function (a, b) {
          var result = compareHops(getHops(a), getHops(b));
          if (result === 0) {
            return getRoundTripTime(a) - getRoundTripTime(b);
          }
          return result;
        });
      };
    };

    var findSendPeerToPeerMessageFunction = function findSendPeerToPeerMessageFunction(key, sendPeerToPeerMessageTuples) {
      var sendPeerToPeerMessageTuple = sendPeerToPeerMessageTuples.find(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          clientId = _ref2[0];
        return clientId === key;
      });
      if (sendPeerToPeerMessageTuple === undefined) {
        throw new Error('There is no tuple with the given key.');
      }
      return sendPeerToPeerMessageTuple[1];
    };

    var isBooleanTuple = function isBooleanTuple(tuple) {
      return typeof tuple[1] === 'boolean';
    };

    var isFalseTuple = function isFalseTuple(tuple) {
      return tuple[1] === false;
    };

    var isNotBooleanTuple = function isNotBooleanTuple(tuple) {
      return typeof tuple[1] !== 'boolean';
    };

    var isPeerToPeerMessageTuple = function isPeerToPeerMessageTuple(tuple) {
      return tuple[1] !== null && _typeof(tuple[1]) === 'object';
    };

    var isSendPeerToPeerMessageTuple = function isSendPeerToPeerMessageTuple(tuple) {
      return typeof tuple[1] === 'function';
    };

    var isTrueTuple = function isTrueTuple(tuple) {
      return tuple[1] === true;
    };

    var combineAsTuple = function combineAsTuple(initialValue) {
      return function (source) {
        return source.pipe(rxjs.scan(function (lastValue, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            index = _ref2[0],
            value = _ref2[1];
          if (index === 0) {
            return [value, lastValue[1]];
          }
          return [lastValue[0], value];
        }, initialValue));
      };
    };

    /*
     * This will compute the offset with the formula `remoteTime - localTime`. That means a positive offset indicates that `remoteTime` is
     * larger than `localTime` and viceversa.
     */
    var computeOffsetAndRoundTripTime = function computeOffsetAndRoundTripTime() {
      return rxjs.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 4),
          localSentTime = _ref2[0],
          remoteReceivedTime = _ref2[1],
          remoteSentTime = _ref2[2],
          localReceivedTime = _ref2[3];
        return [(remoteReceivedTime + remoteSentTime - localSentTime - localReceivedTime) / 2, localReceivedTime - localSentTime + remoteReceivedTime - remoteSentTime];
      });
    };

    var ultimately = function ultimately(callback) {
      return function (source) {
        return new rxjs.Observable(function (observer) {
          var subscription = source.subscribe({
            complete: function complete() {
              callback();
              observer.complete();
            },
            error: function error(err) {
              callback();
              observer.error(err);
            },
            next: function next(value) {
              return observer.next(value);
            }
          });
          return function () {
            callback();
            subscription.unsubscribe();
          };
        });
      };
    };

    var demultiplexMessages = function demultiplexMessages(getClientId, timer) {
      return function (source) {
        return new rxjs.Observable(function (observer) {
          var subjects = new Map();
          var completeAll = function completeAll() {
            subjects.forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                subject = _ref2[0],
                subscription = _ref2[1];
              if (subject === null) {
                subscription.unsubscribe();
              } else {
                subject.complete();
              }
            });
          };
          var isActive = function isActive(remoteClientId) {
            return getClientId() < remoteClientId;
          };
          return source.pipe(ultimately(function () {
            return completeAll();
          })).subscribe({
            complete: function complete() {
              observer.complete();
            },
            error: function error(err) {
              observer.error(err);
            },
            next: function next(event) {
              var _a;
              var remoteClientId = event.client.id;
              var _ref3 = (_a = subjects.get(remoteClientId)) !== null && _a !== void 0 ? _a : [null, null],
                _ref4 = _slicedToArray(_ref3, 2),
                subject = _ref4[0],
                subscription = _ref4[1];
              if (event.type === 'termination') {
                if (subscription !== null) {
                  subscription.unsubscribe();
                }
                if (subject !== null) {
                  subject.complete();
                }
                subjects.set(remoteClientId, [null, timer.pipe(rxjs.skip(isActive(remoteClientId) ? 1 : 0), rxjs.take(1)).subscribe(function () {
                  return subjects["delete"](remoteClientId);
                }) // tslint:disable-line:rxjs-no-nested-subscribe
                ]);
              } else if (subject === null && subscription === null) {
                var newSubject = new rxjs.Subject();
                subjects.set(remoteClientId, [newSubject, null]);
                observer.next([remoteClientId, isActive(remoteClientId), newSubject.asObservable()]);
                newSubject.next(event);
              } else if (subscription === null) {
                subject.next(event);
              }
            }
          });
        });
      };
    };

    var enforceOrder = function enforceOrder(isFirstValue) {
      return function (source) {
        return source.pipe(rxjs.scan(function (_ref, value) {
          var _ref2 = _slicedToArray(_ref, 2),
            values = _ref2[0],
            bufferedValues = _ref2[1];
          if (isFirstValue(value)) {
            if (bufferedValues === null) {
              throw new Error('Another value has been identified as the first value already.');
            }
            return [[value].concat(_toConsumableArray(bufferedValues)), null];
          }
          if (bufferedValues === null) {
            return [[value], bufferedValues];
          }
          return [values, [].concat(_toConsumableArray(bufferedValues), [value])];
        }, [[], []]), rxjs.concatMap(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
            values = _ref4[0];
          return rxjs.from(values);
        }));
      };
    };

    var groupByProperty = function groupByProperty(property) {
      return rxjs.groupBy(function (value) {
        return value[property];
      });
    };

    var matchPongWithPing = function matchPongWithPing(localSentTimesSubject) {
      return function (source) {
        return source.pipe(rxjs.withLatestFrom(localSentTimesSubject), rxjs.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            _ref2$ = _ref2[0],
            index = _ref2$.index,
            remoteReceivedTime = _ref2$.remoteReceivedTime,
            remoteSentTime = _ref2$.remoteSentTime,
            timestamp = _ref2$.timestamp,
            _ref2$2 = _slicedToArray(_ref2[1], 2),
            startIndex = _ref2$2[0],
            localSentTimes = _ref2$2[1];
          if (index < startIndex) {
            return null;
          }
          var numberOfMissingPings = index - startIndex;
          var _localSentTimes$slice = localSentTimes.slice(numberOfMissingPings),
            _localSentTimes$slice2 = _toArray(_localSentTimes$slice),
            localSentTime = _localSentTimes$slice2[0],
            unansweredPings = _localSentTimes$slice2.slice(1);
          localSentTimesSubject.next([startIndex + numberOfMissingPings + 1, unansweredPings]);
          return [localSentTime, remoteReceivedTime, remoteSentTime, timestamp];
        }), rxjs.filter(rxjsEtc.isNotNullish));
      };
    };

    var createBackoff = function createBackoff(base) {
      return [function () {
        return Math.pow(base, 2);
      }, function () {
        // tslint:disable-next-line:no-parameter-reassignment
        base += 1;
      }];
    };

    var echo = function echo(callback, predicate, timer) {
      return function (source) {
        return source.pipe(rxjs.materialize(), rxjs.startWith(null), rxjs.switchMap(function (notification) {
          return rxjs.concat(rxjs.of(notification), notification === null || notification.kind === 'N' ? timer.pipe(rxjs.takeWhile(predicate), rxjs.tap(callback), rxjs.ignoreElements()) : rxjs.EMPTY);
        }), rxjs.filter(rxjsEtc.isNotNullish), rxjs.dematerialize());
      };
    };

    var ignoreLateResult = function ignoreLateResult(promise) {
      return new rxjs.Observable(function (observer) {
        var isActive = true;
        promise.then(function (value) {
          if (isActive) {
            observer.next(value);
            observer.complete();
          }
        }, function (err) {
          if (isActive) {
            observer.error(err);
          }
        });
        return function () {
          return isActive = false;
        };
      });
    };

    function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    var negotiateDataChannels = function negotiateDataChannels(createPeerConnection, sendSignalingEvent) {
      return function (source) {
        return source.pipe(rxjs.mergeMap(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
            clientId = _ref2[0],
            isActive = _ref2[1],
            observable = _ref2[2];
          return new rxjs.Observable(function (observer) {
            var errorEvents = [];
            var errorSubject = new rxjs.Subject();
            var receivedCandidates = [];
            var resetSubject = new rxjs.Subject();
            var createAndSendOffer = function createAndSendOffer() {
              isFresh = false;
              return ignoreLateResult(peerConnection.setLocalDescription()).pipe(rxjs.tap(function () {
                var _peerConnection = peerConnection,
                  localDescription = _peerConnection.localDescription;
                if (localDescription === null) {
                  throw new Error('The local description is not set.');
                }
                sendSignalingEvent(_objectSpread$1(_objectSpread$1({}, jsonifyDescription(localDescription)), {}, {
                  client: {
                    id: clientId
                  },
                  version: version
                }));
              }));
            };
            var subscribeToCandidates = function subscribeToCandidates() {
              return subscribableThings.on(peerConnection, 'icecandidate')(function (_ref3) {
                var candidate = _ref3.candidate;
                if (candidate === null) {
                  sendSignalingEvent({
                    client: {
                      id: clientId
                    },
                    numberOfGatheredCandidates: numberOfGatheredCandidates,
                    type: 'summary',
                    version: version
                  });
                } else if (candidate.port !== 9 && candidate.protocol !== 'tcp') {
                  sendSignalingEvent(_objectSpread$1(_objectSpread$1({}, candidate.toJSON()), {}, {
                    client: {
                      id: clientId
                    },
                    type: 'candidate',
                    version: version
                  }));
                  numberOfGatheredCandidates += 1;
                }
              });
            };
            var subscribeToDataChannels = function subscribeToDataChannels() {
              var subscriptions = [rxjs.zip([subscribableThings.on(reliableDataChannel, 'open'), subscribableThings.on(unreliableDataChannel, 'open')]).pipe(rxjs.take(1)).subscribe(function () {
                send = function send(event) {
                  var dataChannel = event.type === 'update' ? reliableDataChannel : unreliableDataChannel;
                  try {
                    dataChannel.send(JSON.stringify(event));
                  } catch (err) {
                    errorSubject.next(err);
                    return false;
                  }
                  return true;
                };
                observer.next([clientId, send]);
              }), rxjs.merge.apply(void 0, _toConsumableArray([reliableDataChannel, unreliableDataChannel].map(function (dataChannel) {
                return ['close', 'closing', 'error'].map(function (type) {
                  return subscribableThings.on(dataChannel, type);
                });
              }).flat())).subscribe(function (_ref4) {
                var type = _ref4.type;
                return errorSubject.next(new Error("RTCDataChannel fired unexpected event of type \"".concat(type, "\".")));
              })];
              var unsubscribeFunctions = [function () {
                return subscriptions.forEach(function (subscription) {
                  return subscription.unsubscribe();
                });
              }, subscribableThings.on(reliableDataChannel, 'message')(function (_ref5) {
                var data = _ref5.data;
                var event = JSON.parse(data);
                observer.next([clientId, event]);
              }), subscribableThings.on(unreliableDataChannel, 'message')(function (_ref6) {
                var data = _ref6.data,
                  timeStamp = _ref6.timeStamp;
                var event = _objectSpread$1(_objectSpread$1({}, JSON.parse(data)), {}, {
                  timestamp: timeStamp !== null && timeStamp !== void 0 ? timeStamp : performance.now()
                });
                observer.next([clientId, event]);
              })];
              return function () {
                return unsubscribeFunctions.forEach(function (unsubscribeFunction) {
                  return unsubscribeFunction();
                });
              };
            };
            var _createBackoff = createBackoff(1),
              _createBackoff2 = _slicedToArray(_createBackoff, 2),
              getBackoff = _createBackoff2[0],
              incrementBackoff = _createBackoff2[1];
            var subscribeToPeerConnection = function subscribeToPeerConnection() {
              var subscription = rxjs.merge(subscribableThings.on(peerConnection, 'icecandidate'), subscribableThings.on(peerConnection, 'icegatheringstatechange')).pipe(rxjs.switchMap(function () {
                return rxjs.iif(function () {
                  return peerConnection.iceGatheringState === 'gathering';
                }, rxjs.defer(function () {
                  return rxjs.timer(10000 * getBackoff());
                }), rxjs.EMPTY);
              })).subscribe(function () {
                incrementBackoff();
                errorSubject.next(new Error('RTCPeerConnection seems to be stuck at iceGatheringState "gathering".'));
              });
              var unsubscribeFunctions = [function () {
                return subscription.unsubscribe();
              }, subscribableThings.on(peerConnection, 'connectionstatechange')(function () {
                var connectionState = peerConnection.connectionState;
                if (['closed', 'disconnected', 'failed'].includes(connectionState)) {
                  errorSubject.next(new Error("RTCPeerConnection transitioned to unexpected connectionState \"".concat(connectionState, "\".")));
                }
              }), subscribableThings.on(peerConnection, 'icecandidateerror')(function () {
                return errorSubject.next(new Error('RTCPeerConnection fired unexpected event of type "icecandidateerror".'));
              }), subscribableThings.on(peerConnection, 'iceconnectionstatechange')(function () {
                var iceConnectionState = peerConnection.iceConnectionState;
                if (['closed', 'disconnected', 'failed'].includes(iceConnectionState)) {
                  errorSubject.next(new Error("RTCPeerConnection transitioned to unexpected iceConnectionState \"".concat(iceConnectionState, "\".")));
                }
              }), subscribableThings.on(peerConnection, 'signalingstatechange')(function () {
                if (peerConnection.signalingState === 'closed') {
                  errorSubject.next(new Error("RTCPeerConnection transitioned to unexpected signalingState \"closed\"."));
                }
              })];
              return function () {
                return unsubscribeFunctions.forEach(function (unsubscribeFunction) {
                  return unsubscribeFunction();
                });
              };
            };
            var resetState = function resetState(newVersion) {
              resetSubject.next(null);
              unsubscribeFromCandidates();
              unsubscribeFromDataChannels();
              unsubscribeFromPeerConnection();
              reliableDataChannel.close();
              unreliableDataChannel.close();
              peerConnection.close();
              if (send !== null) {
                observer.next([clientId, true]);
              }
              isFresh = true;
              numberOfAppliedCandidates = 0;
              numberOfExpectedCandidates = version === newVersion ? numberOfExpectedCandidates : Infinity;
              numberOfGatheredCandidates = 0;
              peerConnection = createPeerConnection();
              receivedCandidates.length = version === newVersion ? receivedCandidates.length : 0;
              reliableDataChannel = peerConnection.createDataChannel('', {
                id: 0,
                negotiated: true,
                ordered: true
              });
              send = null;
              unreliableDataChannel = peerConnection.createDataChannel('', {
                id: 1,
                maxRetransmits: 0,
                negotiated: true,
                ordered: false
              });
              unsubscribeFromCandidates = subscribeToCandidates();
              unsubscribeFromDataChannels = subscribeToDataChannels();
              unsubscribeFromPeerConnection = subscribeToPeerConnection();
              version = newVersion;
            };
            var isFresh = true;
            var numberOfAppliedCandidates = 0;
            var numberOfExpectedCandidates = Infinity;
            var numberOfGatheredCandidates = 0;
            var peerConnection = createPeerConnection();
            var reliableDataChannel = peerConnection.createDataChannel('', {
              id: 0,
              negotiated: true,
              ordered: true
            });
            var send = null;
            var unrecoverableError = null;
            var unreliableDataChannel = peerConnection.createDataChannel('', {
              id: 1,
              maxRetransmits: 0,
              negotiated: true,
              ordered: false
            });
            var unsubscribeFromCandidates = subscribeToCandidates();
            var unsubscribeFromDataChannels = subscribeToDataChannels();
            var unsubscribeFromPeerConnection = subscribeToPeerConnection();
            var version = 0;
            var addFinalCandidate = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(numberOfNewlyAppliedCandidates) {
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      numberOfAppliedCandidates += numberOfNewlyAppliedCandidates;
                      if (!(numberOfAppliedCandidates === numberOfExpectedCandidates)) {
                        _context.next = 4;
                        break;
                      }
                      _context.next = 4;
                      return peerConnection.addIceCandidate();
                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function addFinalCandidate(_x) {
                return _ref7.apply(this, arguments);
              };
            }();
            var jsonifyDescription = function jsonifyDescription(description) {
              return description instanceof RTCSessionDescription ? description.toJSON() : description;
            };
            var processEvent = function processEvent(event) {
              var type = event.type;
              if (type === 'answer' && isActive) {
                if (version > event.version) {
                  return rxjs.EMPTY;
                }
                if (version === event.version && !isFresh) {
                  return ignoreLateResult(peerConnection.setRemoteDescription(event)).pipe(rxjs.mergeMap(function () {
                    return rxjs.from(receivedCandidates);
                  }), rxjs.mergeMap(function (receivedCandidate) {
                    return ignoreLateResult(peerConnection.addIceCandidate(receivedCandidate));
                  }), rxjs.count(), rxjs.mergeMap(function (numberOfNewlyAppliedCandidates) {
                    return ignoreLateResult(addFinalCandidate(numberOfNewlyAppliedCandidates));
                  }));
                }
              }
              if (type === 'candidate') {
                if (version > event.version) {
                  return rxjs.EMPTY;
                }
                if (version < event.version && !isActive) {
                  resetState(event.version);
                }
                if (version === event.version) {
                  if (peerConnection.remoteDescription === null) {
                    receivedCandidates.push(event);
                    return rxjs.EMPTY;
                  }
                  return ignoreLateResult(peerConnection.addIceCandidate(event)).pipe(rxjs.mergeMap(function () {
                    return ignoreLateResult(addFinalCandidate(1));
                  }));
                }
              }
              if (type === 'error' && isActive) {
                if (version > event.version) {
                  return rxjs.EMPTY;
                }
                resetState(event.version + 1);
                return createAndSendOffer();
              }
              if (type === 'notice' && !isActive) {
                return rxjs.EMPTY;
              }
              if (type === 'offer' && !isActive) {
                if (version > event.version) {
                  return rxjs.EMPTY;
                }
                if (version < event.version) {
                  resetState(event.version);
                }
                isFresh = false;
                return ignoreLateResult(peerConnection.setRemoteDescription(event)).pipe(rxjs.mergeMap(function () {
                  return rxjs.merge(ignoreLateResult(peerConnection.setLocalDescription()).pipe(rxjs.tap(function () {
                    var _peerConnection2 = peerConnection,
                      localDescription = _peerConnection2.localDescription;
                    if (localDescription === null) {
                      throw new Error('The local description is not set.');
                    }
                    sendSignalingEvent(_objectSpread$1(_objectSpread$1({}, jsonifyDescription(localDescription)), {}, {
                      client: {
                        id: clientId
                      },
                      version: version
                    }));
                  })), rxjs.from(receivedCandidates).pipe(rxjs.mergeMap(function (receivedCandidate) {
                    return ignoreLateResult(peerConnection.addIceCandidate(receivedCandidate));
                  }), rxjs.count(), rxjs.mergeMap(function (numberOfNewlyAppliedCandidates) {
                    return ignoreLateResult(addFinalCandidate(numberOfNewlyAppliedCandidates));
                  })));
                }));
              }
              if (type === 'request' && isActive) {
                if (version === 0 && isFresh) {
                  return createAndSendOffer();
                }
                return rxjs.EMPTY;
              }
              if (type === 'summary') {
                if (version > event.version) {
                  return rxjs.EMPTY;
                }
                if (version < event.version && !isActive) {
                  resetState(event.version);
                }
                if (version === event.version) {
                  numberOfExpectedCandidates = event.numberOfGatheredCandidates;
                  return ignoreLateResult(addFinalCandidate(0));
                }
              }
              unrecoverableError = new Error("The current event of type \"".concat(type, "\" can't be processed."));
              // tslint:disable-next-line:rxjs-throw-error
              return rxjs.throwError(function () {
                return unrecoverableError;
              });
            };
            observer.next([clientId, true]);
            return rxjs.merge(rxjs.defer(function () {
              return rxjs.from(errorEvents);
            }),
            // tslint:disable-next-line:rxjs-throw-error
            errorSubject.pipe(rxjs.mergeMap(function (err) {
              return rxjs.throwError(function () {
                return err;
              });
            })), observable.pipe(echo(function () {
              return sendSignalingEvent({
                client: {
                  id: clientId
                },
                type: 'check'
              });
            }, function () {
              return reliableDataChannel.readyState !== 'open' || unreliableDataChannel.readyState !== 'open';
            }, rxjs.interval(5000)), operators.inexorably(function (notification) {
              if (notification !== undefined) {
                errorSubject.complete();
              }
            }))).pipe(rxjs.mergeMap(function (event) {
              return processEvent(event).pipe(rxjs.takeUntil(resetSubject));
            }), rxjs.retry({
              delay: function delay(err) {
                if (err === unrecoverableError) {
                  // tslint:disable-next-line:rxjs-throw-error
                  return rxjs.throwError(function () {
                    return err;
                  });
                }
                errorEvents.length = 0;
                if (isFresh) {
                  resetState(version);
                } else {
                  var errorEvent = {
                    client: {
                      id: clientId
                    },
                    type: 'error',
                    version: version
                  };
                  if (isActive) {
                    errorEvents.push(errorEvent);
                  } else {
                    resetState(version + 1);
                    sendSignalingEvent(errorEvent);
                  }
                }
                return rxjs.of(null);
              }
            }), rxjs.takeUntil(rxjs.concat(observable.pipe(rxjs.ignoreElements()), rxjs.of(null))), rxjs.finalize(function () {
              unsubscribeFromCandidates();
              unsubscribeFromDataChannels();
              unsubscribeFromPeerConnection();
              reliableDataChannel.close();
              unreliableDataChannel.close();
              peerConnection.close();
            })).subscribe({
              complete: function complete() {
                observer.next([clientId, false]);
                observer.complete();
              },
              error: function error(err) {
                return observer.error(err);
              }
            });
          });
        }));
      };
    };

    var retryBackoff = function retryBackoff() {
      return function (source) {
        return rxjs.defer(function () {
          var attempts = 4;
          var interval = 1000;
          var index = 0;
          return source.pipe(rxjs.retry({
            delay: function delay(error) {
              index += 1;
              return rxjs.iif(function () {
                return index < attempts;
              }, rxjs.timer(interval * Math.pow(index, 2)), rxjs.throwError(function () {
                return error;
              }) // tslint:disable-line:rxjs-throw-error
              );
            }
          }), rxjs.tap(function () {
            return index = 0;
          }));
        });
      };
    };

    var selectMostLikelyOffset = function selectMostLikelyOffset() {
      return function (source) {
        return source.pipe(rxjs.scan(function (tuples, tuple) {
          return [].concat(_toConsumableArray(tuples.slice(-59)), [tuple]);
        }, []), rxjs.map(function (tuples) {
          return tuples.slice(1).reduce(function (tupleWithSmallestRoundTripTime, tuple) {
            return tupleWithSmallestRoundTripTime[1] < tuple[1] ? tupleWithSmallestRoundTripTime : tuple;
          }, tuples[0]);
        }));
      };
    };

    var sendPeriodicPings = function sendPeriodicPings(localSentTimesSubject, now) {
      return function (source) {
        return source.pipe(rxjs.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            send = _ref2[1];
          return rxjs.interval(1000).pipe(rxjs.startWith(0), rxjs.map(function (_, index) {
            send({
              index: index,
              type: 'ping'
            });
            return now();
          }), rxjs.withLatestFrom(localSentTimesSubject), rxjs.tap(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              localSentTime = _ref4[0],
              _ref4$ = _slicedToArray(_ref4[1], 2),
              startIndex = _ref4$[0],
              localSentTimes = _ref4$[1];
            return localSentTimesSubject.next([startIndex, [].concat(_toConsumableArray(localSentTimes), [localSentTime])]);
          }), rxjs.ignoreElements());
        }), rxjs.endWith(rxjs.EMPTY), rxjs.switchAll());
      };
    };

    var takeUntilFatalValue = function takeUntilFatalValue(isFatalValue, handleFatalValue) {
      return rxjs.connect(function (values$) {
        var _partition = rxjs.partition(values$, isFatalValue),
          _partition2 = _slicedToArray(_partition, 2),
          fatalEvent$ = _partition2[0],
          otherEvent$ = _partition2[1];
        return otherEvent$.pipe(rxjs.takeUntil(fatalEvent$.pipe(rxjs.tap(handleFatalValue))));
      });
    };

    var _excluded = ["hops", "version"];
    function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
    function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
    function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
    var SUENC_URL = 'wss://matchmaker.suenc.io';
    var PROVIDER_ID_REGEX = /^[\dA-Za-z]{20}$/;
    var createTimingProviderConstructor = function createTimingProviderConstructor(createRTCPeerConnection, createSignaling, eventTargetConstructor, performance, setTimeout, sortByHopsAndRoundTripTime) {
      return /*#__PURE__*/function (_eventTargetConstruct) {
        _inherits(TimingProvider, _eventTargetConstruct);
        var _super = _createSuper(TimingProvider);
        function TimingProvider(providerIdOrUrl) {
          var _this;
          _classCallCheck(this, TimingProvider);
          _this = _super.call(this);
          var timestamp = performance.now() / 1000;
          _this._clientId = '';
          _this._endPosition = Number.POSITIVE_INFINITY;
          _this._error = null;
          _this._hops = [];
          _this._onadjust = null;
          _this._onchange = null;
          _this._onreadystatechange = null;
          _this._origin = Number.MAX_SAFE_INTEGER;
          _this._providerIdOrUrl = providerIdOrUrl;
          _this._readyState = 'connecting';
          _this._skew = 0;
          _this._startPosition = Number.NEGATIVE_INFINITY;
          _this._subscription = null;
          _this._updateRequestsSubject = new rxjs.Subject();
          _this._vector = {
            acceleration: 0,
            position: 0,
            timestamp: timestamp,
            velocity: 0
          };
          _this._version = 0;
          _this._createClient();
          return _this;
        }
        _createClass(TimingProvider, [{
          key: "endPosition",
          get: function get() {
            return this._endPosition;
          }
        }, {
          key: "error",
          get: function get() {
            return this._error;
          }
        }, {
          key: "onadjust",
          get: function get() {
            return this._onadjust === null ? this._onadjust : this._onadjust[0];
          },
          set: function set(value) {
            if (this._onadjust !== null) {
              this.removeEventListener('adjust', this._onadjust[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('adjust', boundListener);
              this._onadjust = [value, boundListener];
            } else {
              this._onadjust = null;
            }
          }
        }, {
          key: "onchange",
          get: function get() {
            return this._onchange === null ? this._onchange : this._onchange[0];
          },
          set: function set(value) {
            if (this._onchange !== null) {
              this.removeEventListener('change', this._onchange[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('change', boundListener);
              this._onchange = [value, boundListener];
            } else {
              this._onchange = null;
            }
          }
        }, {
          key: "onreadystatechange",
          get: function get() {
            return this._onreadystatechange === null ? this._onreadystatechange : this._onreadystatechange[0];
          },
          set: function set(value) {
            if (this._onreadystatechange !== null) {
              this.removeEventListener('readystatechange', this._onreadystatechange[1]);
            }
            if (typeof value === 'function') {
              var boundListener = value.bind(this);
              this.addEventListener('readystatechange', boundListener);
              this._onreadystatechange = [value, boundListener];
            } else {
              this._onreadystatechange = null;
            }
          }
        }, {
          key: "readyState",
          get: function get() {
            return this._readyState;
          }
        }, {
          key: "skew",
          get: function get() {
            return this._skew;
          }
        }, {
          key: "startPosition",
          get: function get() {
            return this._startPosition;
          }
        }, {
          key: "vector",
          get: function get() {
            return this._vector;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var _this2 = this;
            if (this._subscription === null) {
              throw new Error('The timingProvider is already destroyed.');
            }
            this._readyState = 'closed';
            this._subscription.unsubscribe();
            this._subscription = null;
            this._updateRequestsSubject.complete();
            setTimeout(function () {
              return _this2.dispatchEvent(new Event('readystatechange'));
            });
          }
        }, {
          key: "update",
          value: function update(newVector) {
            if (this._subscription === null) {
              return Promise.reject(new Error("The timingProvider is destroyed and can't be updated."));
            }
            this._updateRequestsSubject.next([_objectSpread(_objectSpread(_objectSpread({}, timingObject.translateTimingStateVector(this._vector, performance.now() / 1000 - this._vector.timestamp)), timingObject.filterTimingStateVectorUpdate(newVector)), {}, {
              hops: [],
              version: this._version + 1
            }), null]);
            return Promise.resolve();
          }
        }, {
          key: "_createClient",
          value: function _createClient() {
            var _this3 = this;
            var url = PROVIDER_ID_REGEX.test(this._providerIdOrUrl) ? "".concat(SUENC_URL, "?providerId=").concat(this._providerIdOrUrl) : this._providerIdOrUrl;
            this._subscription = rxjs.merge(rxjs.concat(rxjs.from(subscribableThings.online()).pipe(operators.equals(true), rxjs.first(), rxjs.ignoreElements()), rxjs.defer(function () {
              var _createSignaling = createSignaling(url),
                _createSignaling2 = _slicedToArray(_createSignaling, 2),
                signalingEvent$ = _createSignaling2[0],
                sendSignalingEvent = _createSignaling2[1];
              return signalingEvent$.pipe(takeUntilFatalValue(function (event) {
                return event.type === 'closure';
              }, function () {
                var err = new Error('Your plan has exceeded its quota.');
                _this3._error = err;
                _this3._readyState = 'closed';
                _this3.dispatchEvent(new Event('readystatechange'));
              }), enforceOrder(function (event) {
                return event.type === 'init';
              }), rxjs.concatMap(function (event) {
                if (event.type === 'array') {
                  return rxjs.from(event.events);
                }
                if (event.type === 'init') {
                  var clientId = event.client.id,
                    events = event.events,
                    origin = event.origin;
                  _this3._clientId = clientId;
                  _this3._origin = origin;
                  if (events.length === 0 && _this3._readyState === 'connecting') {
                    _this3._readyState = 'open';
                    _this3.dispatchEvent(new Event('readystatechange'));
                  }
                  return rxjs.from(events);
                }
                return rxjs.of(event);
              }), demultiplexMessages(function () {
                return _this3._clientId;
              }, rxjs.timer(10000)), negotiateDataChannels(createRTCPeerConnection, sendSignalingEvent));
            })).pipe(retryBackoff(), rxjs.catchError(function (err) {
              _this3._error = err;
              _this3._readyState = 'closed';
              _this3.dispatchEvent(new Event('readystatechange'));
              return rxjs.EMPTY;
            }), rxjs.tap(function (dataChannelTuple) {
              if (isSendPeerToPeerMessageTuple(dataChannelTuple) && _this3._readyState === 'connecting') {
                _this3._readyState = 'open';
                _this3.dispatchEvent(new Event('readystatechange'));
              }
            }), rxjs.scan(function (_ref, dataChannelTuple) {
              var _ref2 = _slicedToArray(_ref, 2),
                dataChannelTuples = _ref2[1];
              var index = dataChannelTuples.findIndex(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 1),
                  clientId = _ref4[0];
                return clientId === dataChannelTuple[0];
              });
              if (index === -1) {
                if (isTrueTuple(dataChannelTuple) || isSendPeerToPeerMessageTuple(dataChannelTuple)) {
                  dataChannelTuples.push(dataChannelTuple);
                }
              } else if (isFalseTuple(dataChannelTuple)) {
                dataChannelTuples.splice(index, 1);
              } else if (isTrueTuple(dataChannelTuple) || isSendPeerToPeerMessageTuple(dataChannelTuple)) {
                dataChannelTuples[index] = dataChannelTuple;
              }
              return [dataChannelTuple, dataChannelTuples];
            }, [, []] // tslint:disable-line:no-sparse-arrays
            ), rxjs.tap(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                dataChannelTuples = _ref6[1];
              if (dataChannelTuples.length === 0 && _this3._readyState === 'connecting') {
                _this3._readyState = 'open';
                _this3.dispatchEvent(new Event('readystatechange'));
              }
            }), rxjs.filter(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 1),
                dataChannelTuple = _ref8[0];
              if (isSendPeerToPeerMessageTuple(dataChannelTuple)) {
                if (!dataChannelTuple[1]({
                  message: _this3._createExtendedVector([].concat(_toConsumableArray(_this3._hops), [_this3._origin])),
                  type: 'update'
                })) {
                  return false;
                }
              }
              return true;
            }), rxjs.connect(function (dataChannelTuple$) {
              var dataChannelTuplesSubject = new rxjs.ReplaySubject(1);
              return dataChannelTuple$.pipe(rxjs.tap(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 2),
                  dataChannelTuples = _ref10[1];
                return dataChannelTuplesSubject.next(dataChannelTuples);
              }), rxjs.map(function (_ref11) {
                var _ref12 = _slicedToArray(_ref11, 2),
                  dataChannelTuple = _ref12[0],
                  dataChannelTuples = _ref12[1];
                if (isPeerToPeerMessageTuple(dataChannelTuple)) {
                  var _dataChannelTuple = _slicedToArray(dataChannelTuple, 2),
                    clientId = _dataChannelTuple[0],
                    event = _dataChannelTuple[1];
                  if (event.type === 'ping') {
                    return [clientId, _objectSpread(_objectSpread({}, event), {}, {
                      reply: findSendPeerToPeerMessageFunction(clientId, dataChannelTuples.filter(isSendPeerToPeerMessageTuple))
                    })];
                  }
                }
                return dataChannelTuple;
              }), rxjs.filter(isNotBooleanTuple), rxjs.groupBy(function (_ref13) {
                var _ref14 = _slicedToArray(_ref13, 1),
                  clientId = _ref14[0];
                return clientId;
              }, {
                duration: function duration(group$) {
                  return dataChannelTuple$.pipe(rxjs.map(function (_ref15) {
                    var _ref16 = _slicedToArray(_ref15, 1),
                      dataChannelTuple = _ref16[0];
                    return dataChannelTuple;
                  }), rxjs.filter(isBooleanTuple), rxjs.filter(function (_ref17) {
                    var _ref18 = _slicedToArray(_ref17, 1),
                      clientId = _ref18[0];
                    return clientId === group$.key;
                  }));
                }
              }), rxjs.mergeMap(function (messageOrFunctionTuple$) {
                var localSentTimesSubject = new rxjs.BehaviorSubject([0, []]);
                return messageOrFunctionTuple$.pipe(rxjs.connect(function (observable$) {
                  return rxjs.merge(observable$.pipe(rxjs.filter(isSendPeerToPeerMessageTuple), sendPeriodicPings(localSentTimesSubject, function () {
                    return performance.now();
                  })), observable$.pipe(rxjs.filter(isPeerToPeerMessageTuple), rxjs.map(function (_ref19) {
                    var _ref20 = _slicedToArray(_ref19, 2),
                      event = _ref20[1];
                    return event;
                  }), groupByProperty('type'), rxjs.mergeMap(function (group$) {
                    if (group$.key === 'ping') {
                      return group$.pipe(rxjs.tap(function (_ref21) {
                        var index = _ref21.index,
                          timestamp = _ref21.timestamp,
                          reply = _ref21.reply;
                        return reply({
                          index: index,
                          remoteReceivedTime: timestamp,
                          remoteSentTime: performance.now(),
                          type: 'pong'
                        });
                      }), rxjs.ignoreElements());
                    }
                    if (group$.key === 'pong') {
                      return group$.pipe(matchPongWithPing(localSentTimesSubject), computeOffsetAndRoundTripTime(), selectMostLikelyOffset(), rxjs.map(function (offset) {
                        return [1, offset];
                      }));
                    }
                    return group$.pipe(rxjs.map(function (_ref22) {
                      var message = _ref22.message;
                      return message;
                    }), rxjs.map(function (extendedVector) {
                      if (_this3._version > extendedVector.version) {
                        return null;
                      }
                      if (_this3._version === extendedVector.version) {
                        var origin = _this3._hops.length === 0 ? _this3._origin : _this3._hops[0];
                        if (origin < extendedVector.hops[0] || extendedVector.hops.includes(_this3._origin)) {
                          return null;
                        }
                      }
                      return extendedVector;
                    }), rxjs.map(function (extendedVector) {
                      return [0, extendedVector];
                    }));
                  }), combineAsTuple([null, [0, 0]]), rxjs.distinctUntilChanged(function (_ref23, _ref24) {
                    var _ref25 = _slicedToArray(_ref23, 2),
                      vectorA = _ref25[0],
                      _ref25$ = _slicedToArray(_ref25[1], 2),
                      offsetA = _ref25$[0],
                      roundTripTimeA = _ref25$[1];
                    var _ref26 = _slicedToArray(_ref24, 2),
                      vectorB = _ref26[0],
                      _ref26$ = _slicedToArray(_ref26[1], 2),
                      offsetB = _ref26$[0],
                      roundTripTimeB = _ref26$[1];
                    return vectorA === vectorB && offsetA === offsetB && roundTripTimeA === roundTripTimeB;
                  }), rxjs.map(function (_ref27) {
                    var _ref28 = _slicedToArray(_ref27, 2),
                      vector = _ref28[0],
                      _ref28$ = _slicedToArray(_ref28[1], 2),
                      offset = _ref28$[0],
                      roundTripTime = _ref28$[1];
                    return [messageOrFunctionTuple$.key, vector === null ? null : _objectSpread(_objectSpread({}, vector), {}, {
                      timestamp: vector.timestamp - offset / 1000
                    }), roundTripTime];
                  }), rxjs.endWith([messageOrFunctionTuple$.key, null, null])));
                }));
              }), rxjs.scan(function (_ref29, tuple) {
                var _ref30 = _slicedToArray(_ref29, 2),
                  tuples = _ref30[1];
                var index = tuples.findIndex(function (_ref31) {
                  var _ref32 = _slicedToArray(_ref31, 1),
                    clientId = _ref32[0];
                  return tuple[0] === clientId;
                });
                if (tuple[2] === null) {
                  if (index > -1) {
                    tuples.splice(index, 1);
                  }
                } else {
                  if (index > -1) {
                    tuples[index] = tuple;
                  } else {
                    tuples.push(tuple);
                    tuples.sort(function (_ref33, _ref34) {
                      var _ref35 = _slicedToArray(_ref33, 1),
                        clientIdA = _ref35[0];
                      var _ref36 = _slicedToArray(_ref34, 1),
                        clientIdB = _ref36[0];
                      return clientIdA < clientIdB ? -1 : clientIdA > clientIdB ? 1 : 0;
                    });
                  }
                }
                return [tuple, tuples];
              }, [, []] // tslint:disable-line:no-sparse-arrays
              ), rxjs.mergeMap(function (tupleAndTuples) {
                return dataChannelTuplesSubject.pipe(rxjs.take(1), rxjs.map(function (dataChannelTuples) {
                  return [tupleAndTuples, dataChannelTuples];
                }));
              }), rxjs.map(function (_ref37) {
                var _ref38 = _slicedToArray(_ref37, 2),
                  _ref38$ = _slicedToArray(_ref38[0], 1),
                  tuple = _ref38$[0],
                  dataChannelTuples = _ref38[1];
                return [].concat(_toConsumableArray(tuple), [dataChannelTuples]);
              }));
            })), this._updateRequestsSubject.pipe(rxjs.map(function (_ref39) {
              var _ref40 = _slicedToArray(_ref39, 1),
                vector = _ref40[0];
              return [null, vector, 0, null];
            }))).pipe(rxjs.scan(function () {
              var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[[null, _this3._createExtendedVector(_this3._hops), 0]], []],
                _ref42 = _slicedToArray(_ref41, 2),
                tuples = _ref42[0],
                previousDataChannelTuples = _ref42[1];
              var _ref43 = arguments.length > 1 ? arguments[1] : undefined,
                _ref44 = _slicedToArray(_ref43, 4),
                clientId = _ref44[0],
                extendedVector = _ref44[1],
                roundTripTime = _ref44[2],
                currentDataChannelTuples = _ref44[3];
              var dataChannelTuples = currentDataChannelTuples !== null && currentDataChannelTuples !== void 0 ? currentDataChannelTuples : previousDataChannelTuples;
              var index = tuples.findIndex(function (tuple) {
                return tuple[0] === clientId;
              });
              if (extendedVector !== null) {
                if (_this3._version < extendedVector.version) {
                  tuples.length = 0;
                  tuples.push([clientId, extendedVector, roundTripTime]);
                  return [tuples, dataChannelTuples];
                }
                if (_this3._version === extendedVector.version) {
                  var origin = _this3._hops.length === 0 ? _this3._origin : _this3._hops[0];
                  if (origin > extendedVector.hops[0]) {
                    if (!extendedVector.hops.includes(_this3._origin)) {
                      tuples.length = 0;
                      tuples.push([clientId, extendedVector, roundTripTime]);
                      return [tuples, dataChannelTuples];
                    }
                  }
                  if (origin === extendedVector.hops[0] && !extendedVector.hops.includes(_this3._origin) && _this3._hops.length > 0) {
                    if (index > -1) {
                      tuples[index] = [clientId, extendedVector, roundTripTime];
                    } else {
                      tuples.push([clientId, extendedVector, roundTripTime]);
                    }
                    sortByHopsAndRoundTripTime(tuples);
                    return [tuples, dataChannelTuples];
                  }
                }
              }
              if (index > -1) {
                if (tuples.length === 1) {
                  tuples[0] = [null, _objectSpread(_objectSpread({}, tuples[0][1]), {}, {
                    hops: [tuples[0][1].hops[0]].concat(_toConsumableArray(tuples[0][1].hops.map(function () {
                      return _this3._origin;
                    })))
                  }), 0];
                } else {
                  tuples.splice(index, 1);
                }
              }
              return [tuples, dataChannelTuples];
            }, undefined), rxjs.distinctUntilChanged(function (extendedVectorA, extendedVectorB) {
              return extendedVectorA === extendedVectorB;
            }, function (_ref45) {
              var _ref46 = _slicedToArray(_ref45, 1),
                _ref46$ = _slicedToArray(_ref46[0], 1),
                _ref46$$ = _slicedToArray(_ref46$[0], 2),
                extendedVector = _ref46$$[1];
              return extendedVector;
            })).subscribe(function (_ref47) {
              var _ref48 = _slicedToArray(_ref47, 2),
                _ref48$ = _slicedToArray(_ref48[0], 1),
                _ref48$$ = _slicedToArray(_ref48$[0], 2),
                clientId = _ref48$$[0],
                extendedVector = _ref48$$[1],
                dataChannelTuples = _ref48[1];
              var externalVector = _objectSpread(_objectSpread({}, extendedVector), {}, {
                hops: [].concat(_toConsumableArray(extendedVector.hops), [_this3._origin])
              });
              var _iterator = _createForOfIteratorHelper(dataChannelTuples.filter(isSendPeerToPeerMessageTuple)),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _step$value = _slicedToArray(_step.value, 2),
                    remoteClientId = _step$value[0],
                    send = _step$value[1];
                  if (!send({
                    message: externalVector,
                    type: 'update'
                  }) && clientId === remoteClientId) {
                    return;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _this3._setInternalVector(extendedVector);
            });
          }
        }, {
          key: "_createExtendedVector",
          value: function _createExtendedVector(hops) {
            return _objectSpread(_objectSpread({}, this._vector), {}, {
              hops: hops,
              version: this._version
            });
          }
        }, {
          key: "_setInternalVector",
          value: function _setInternalVector(_ref49) {
            var hops = _ref49.hops,
              version = _ref49.version,
              vector = _objectWithoutProperties(_ref49, _excluded);
            this._hops = hops;
            this._vector = vector;
            this._version = version;
            this.dispatchEvent(new CustomEvent('change', {
              detail: vector
            }));
          }
        }]);
        return TimingProvider;
      }(eventTargetConstructor);
    };

    var createWindow = function createWindow() {
      return typeof window === 'undefined' ? null : window;
    };

    var compareHops = function compareHops(_ref, _ref2) {
      var _ref3 = _toArray(_ref),
        originA = _ref3[0],
        hopsA = _ref3.slice(1);
      var _ref4 = _toArray(_ref2),
        originB = _ref4[0],
        hopsB = _ref4.slice(1);
      if (originA === undefined || originB === undefined) {
        throw new Error('Every vector should have an origin.');
      }
      if (originA === originB) {
        var duplicatedHopsA = hopsA.filter(function (hop) {
          return hop === hopsA[0];
        }).length;
        var duplicatedHopsB = hopsB.filter(function (hop) {
          return hop === hopsB[0];
        }).length;
        if (duplicatedHopsA === duplicatedHopsB) {
          if (duplicatedHopsA === 0) {
            throw new Error('At least one vector should have a hop if they have the same origin.');
          }
          if (duplicatedHopsA === 1 || hopsA[0] === hopsB[0]) {
            if (hopsA.length === hopsB.length) {
              if (hopsA.every(function (hop, index) {
                return hop === hopsB[index];
              })) {
                throw new Error('Every vector should be unique.');
              }
              return 0;
            }
            return hopsA.length - hopsB.length;
          }
          return hopsA[0] - hopsB[0];
        }
        return duplicatedHopsA - duplicatedHopsB;
      }
      return originA - originB;
    };

    var wrapEventListener = function wrapEventListener(target, eventListener) {
      return function (event) {
        var descriptor = {
          value: target
        };
        Object.defineProperties(event, {
          currentTarget: descriptor,
          target: descriptor
        });
        if (typeof eventListener === 'function') {
          return eventListener.call(target, event);
        }
        return eventListener.handleEvent.call(target, event);
      };
    };

    var window$1 = createWindow();
    var timingProviderConstructor = createTimingProviderConstructor(createRTCPeerConnectionFactory(window$1), createSignalingFactory(function (url) {
      return new WebSocket(url);
    }), createEventTargetConstructor(createEventTargetFactory(window$1), wrapEventListener), performance, setTimeout, createSortByHopsAndRoundTripTime(compareHops, function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        hops = _ref2[1].hops;
      return hops;
    }, function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
        roundTripTime = _ref4[2];
      return roundTripTime;
    }));
    // @todo Expose an isSupported flag which checks for fetch and performance.now() support.

    exports.TimingProvider = timingProviderConstructor;

}));

},{"@babel/runtime/helpers/asyncToGenerator":5,"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/objectWithoutProperties":15,"@babel/runtime/helpers/possibleConstructorReturn":17,"@babel/runtime/helpers/slicedToArray":20,"@babel/runtime/helpers/toArray":21,"@babel/runtime/helpers/toConsumableArray":22,"@babel/runtime/helpers/typeof":25,"@babel/runtime/regenerator":27,"rxjs":126,"rxjs-etc":33,"rxjs-etc/operators":80,"subscribable-things":352,"timing-object":353}],355:[function(require,module,exports){
(function (global){(function (){
"use strict";

var _timingProvider = require("timing-provider");
global.window.TimingProvider = _timingProvider.TimingProvider;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"timing-provider":354}],356:[function(require,module,exports){
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

},{}]},{},[355]);
