import * as $ from "react";
import He, { forwardRef as Si, useContext as Ri, Children as Oi, isValidElement as qr, cloneElement as Gr } from "react";
import Ci from "react-dom";
function wi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lt = { exports: {} }, _r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Pi() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = He, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.iterator, m = "@@iterator";
    function v(a) {
      if (a === null || typeof a != "object")
        return null;
      var T = b && a[b] || a[m];
      return typeof T == "function" ? T : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var T = arguments.length, O = new Array(T > 1 ? T - 1 : 0), V = 1; V < T; V++)
          O[V - 1] = arguments[V];
        R("error", a, O);
      }
    }
    function R(a, T, O) {
      {
        var V = S.ReactDebugCurrentFrame, Z = V.getStackAddendum();
        Z !== "" && (T += "%s", O = O.concat([Z]));
        var ue = O.map(function(K) {
          return String(K);
        });
        ue.unshift("Warning: " + T), Function.prototype.apply.call(console[a], console, ue);
      }
    }
    var _ = !1, f = !1, j = !1, k = !1, pe = !1, ce;
    ce = Symbol.for("react.module.reference");
    function A(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || pe || a === o || a === l || a === d || k || a === E || _ || f || j || typeof a == "object" && a !== null && (a.$$typeof === y || a.$$typeof === h || a.$$typeof === s || a.$$typeof === c || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ce || a.getModuleId !== void 0));
    }
    function H(a, T, O) {
      var V = a.displayName;
      if (V)
        return V;
      var Z = T.displayName || T.name || "";
      return Z !== "" ? O + "(" + Z + ")" : O;
    }
    function J(a) {
      return a.displayName || "Context";
    }
    function X(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var T = a;
            return J(T) + ".Consumer";
          case s:
            var O = a;
            return J(O._context) + ".Provider";
          case u:
            return H(a, a.render, "ForwardRef");
          case h:
            var V = a.displayName || null;
            return V !== null ? V : X(a.type) || "Memo";
          case y: {
            var Z = a, ue = Z._payload, K = Z._init;
            try {
              return X(K(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, le = 0, ae, be, fe, Ae, x, C, B;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function N() {
      {
        if (le === 0) {
          ae = console.log, be = console.info, fe = console.warn, Ae = console.error, x = console.group, C = console.groupCollapsed, B = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        le++;
      }
    }
    function Y() {
      {
        if (le--, le === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, a, {
              value: ae
            }),
            info: G({}, a, {
              value: be
            }),
            warn: G({}, a, {
              value: fe
            }),
            error: G({}, a, {
              value: Ae
            }),
            group: G({}, a, {
              value: x
            }),
            groupCollapsed: G({}, a, {
              value: C
            }),
            groupEnd: G({}, a, {
              value: B
            })
          });
        }
        le < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = S.ReactCurrentDispatcher, F;
    function z(a, T, O) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (Z) {
            var V = Z.stack.trim().match(/\n( *(at )?)/);
            F = V && V[1] || "";
          }
        return `
` + F + a;
      }
    }
    var D = !1, U;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      U = new me();
    }
    function g(a, T) {
      if (!a || D)
        return "";
      {
        var O = U.get(a);
        if (O !== void 0)
          return O;
      }
      var V;
      D = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = M.current, M.current = null, N();
      try {
        if (T) {
          var K = function() {
            throw Error();
          };
          if (Object.defineProperty(K.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(K, []);
            } catch (We) {
              V = We;
            }
            Reflect.construct(a, [], K);
          } else {
            try {
              K.call();
            } catch (We) {
              V = We;
            }
            a.call(K.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            V = We;
          }
          a();
        }
      } catch (We) {
        if (We && V && typeof We.stack == "string") {
          for (var q = We.stack.split(`
`), we = V.stack.split(`
`), ve = q.length - 1, xe = we.length - 1; ve >= 1 && xe >= 0 && q[ve] !== we[xe]; )
            xe--;
          for (; ve >= 1 && xe >= 0; ve--, xe--)
            if (q[ve] !== we[xe]) {
              if (ve !== 1 || xe !== 1)
                do
                  if (ve--, xe--, xe < 0 || q[ve] !== we[xe]) {
                    var Me = `
` + q[ve].replace(" at new ", " at ");
                    return a.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", a.displayName)), typeof a == "function" && U.set(a, Me), Me;
                  }
                while (ve >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        D = !1, M.current = ue, Y(), Error.prepareStackTrace = Z;
      }
      var ir = a ? a.displayName || a.name : "", Sn = ir ? z(ir) : "";
      return typeof a == "function" && U.set(a, Sn), Sn;
    }
    function Ee(a, T, O) {
      return g(a, !1);
    }
    function P(a) {
      var T = a.prototype;
      return !!(T && T.isReactComponent);
    }
    function Re(a, T, O) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return g(a, P(a));
      if (typeof a == "string")
        return z(a);
      switch (a) {
        case l:
          return z("Suspense");
        case d:
          return z("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return Ee(a.render);
          case h:
            return Re(a.type, T, O);
          case y: {
            var V = a, Z = V._payload, ue = V._init;
            try {
              return Re(ue(Z), T, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Je = {}, Dr = S.ReactDebugCurrentFrame;
    function tr(a) {
      if (a) {
        var T = a._owner, O = Re(a.type, a._source, T ? T.type : null);
        Dr.setExtraStackFrame(O);
      } else
        Dr.setExtraStackFrame(null);
    }
    function gr(a, T, O, V, Z) {
      {
        var ue = Function.call.bind(Le);
        for (var K in a)
          if (ue(a, K)) {
            var q = void 0;
            try {
              if (typeof a[K] != "function") {
                var we = Error((V || "React class") + ": " + O + " type `" + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[K] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              q = a[K](T, K, V, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              q = ve;
            }
            q && !(q instanceof Error) && (tr(Z), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", O, K, typeof q), tr(null)), q instanceof Error && !(q.message in Je) && (Je[q.message] = !0, tr(Z), w("Failed %s type: %s", O, q.message), tr(null));
          }
      }
    }
    var br = Array.isArray;
    function Er(a) {
      return br(a);
    }
    function St(a) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, O = T && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return O;
      }
    }
    function nr(a) {
      try {
        return Ge(a), !1;
      } catch {
        return !0;
      }
    }
    function Ge(a) {
      return "" + a;
    }
    function Fr(a) {
      if (nr(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(a)), Ge(a);
    }
    var Ke = S.ReactCurrentOwner, Rt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, W, xr, Tr;
    Tr = {};
    function Vr(a) {
      if (Le.call(a, "ref")) {
        var T = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function vn(a) {
      if (Le.call(a, "key")) {
        var T = Object.getOwnPropertyDescriptor(a, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function li(a, T) {
      if (typeof a.ref == "string" && Ke.current && T && Ke.current.stateNode !== T) {
        var O = X(Ke.current.type);
        Tr[O] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Ke.current.type), a.ref), Tr[O] = !0);
      }
    }
    function fi(a, T) {
      {
        var O = function() {
          W || (W = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function di(a, T) {
      {
        var O = function() {
          xr || (xr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        O.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var pi = function(a, T, O, V, Z, ue, K) {
      var q = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: T,
        ref: O,
        props: K,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return q._store = {}, Object.defineProperty(q._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(q, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(q, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(q.props), Object.freeze(q)), q;
    };
    function mi(a, T, O, V, Z) {
      {
        var ue, K = {}, q = null, we = null;
        O !== void 0 && (Fr(O), q = "" + O), vn(T) && (Fr(T.key), q = "" + T.key), Vr(T) && (we = T.ref, li(T, Z));
        for (ue in T)
          Le.call(T, ue) && !Rt.hasOwnProperty(ue) && (K[ue] = T[ue]);
        if (a && a.defaultProps) {
          var ve = a.defaultProps;
          for (ue in ve)
            K[ue] === void 0 && (K[ue] = ve[ue]);
        }
        if (q || we) {
          var xe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          q && fi(K, xe), we && di(K, xe);
        }
        return pi(a, q, we, Z, V, Ke.current, K);
      }
    }
    var Ot = S.ReactCurrentOwner, gn = S.ReactDebugCurrentFrame;
    function or(a) {
      if (a) {
        var T = a._owner, O = Re(a.type, a._source, T ? T.type : null);
        gn.setExtraStackFrame(O);
      } else
        gn.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function wt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function bn() {
      {
        if (Ot.current) {
          var a = X(Ot.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function hi(a) {
      {
        if (a !== void 0) {
          var T = a.fileName.replace(/^.*[\\\/]/, ""), O = a.lineNumber;
          return `

Check your code at ` + T + ":" + O + ".";
        }
        return "";
      }
    }
    var En = {};
    function yi(a) {
      {
        var T = bn();
        if (!T) {
          var O = typeof a == "string" ? a : a.displayName || a.name;
          O && (T = `

Check the top-level render call using <` + O + ">.");
        }
        return T;
      }
    }
    function xn(a, T) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var O = yi(T);
        if (En[O])
          return;
        En[O] = !0;
        var V = "";
        a && a._owner && a._owner !== Ot.current && (V = " It was passed a child from " + X(a._owner.type) + "."), or(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, V), or(null);
      }
    }
    function Tn(a, T) {
      {
        if (typeof a != "object")
          return;
        if (Er(a))
          for (var O = 0; O < a.length; O++) {
            var V = a[O];
            wt(V) && xn(V, T);
          }
        else if (wt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var Z = v(a);
          if (typeof Z == "function" && Z !== a.entries)
            for (var ue = Z.call(a), K; !(K = ue.next()).done; )
              wt(K.value) && xn(K.value, T);
        }
      }
    }
    function gi(a) {
      {
        var T = a.type;
        if (T == null || typeof T == "string")
          return;
        var O;
        if (typeof T == "function")
          O = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          O = T.propTypes;
        else
          return;
        if (O) {
          var V = X(T);
          gr(O, a.props, "prop", V, a);
        } else if (T.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var Z = X(T);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bi(a) {
      {
        for (var T = Object.keys(a.props), O = 0; O < T.length; O++) {
          var V = T[O];
          if (V !== "children" && V !== "key") {
            or(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), or(null);
            break;
          }
        }
        a.ref !== null && (or(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), or(null));
      }
    }
    function _n(a, T, O, V, Z, ue) {
      {
        var K = A(a);
        if (!K) {
          var q = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = hi(Z);
          we ? q += we : q += bn();
          var ve;
          a === null ? ve = "null" : Er(a) ? ve = "array" : a !== void 0 && a.$$typeof === r ? (ve = "<" + (X(a.type) || "Unknown") + " />", q = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, q);
        }
        var xe = mi(a, T, O, Z, ue);
        if (xe == null)
          return xe;
        if (K) {
          var Me = T.children;
          if (Me !== void 0)
            if (V)
              if (Er(Me)) {
                for (var ir = 0; ir < Me.length; ir++)
                  Tn(Me[ir], a);
                Object.freeze && Object.freeze(Me);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Me, a);
        }
        return a === n ? bi(xe) : gi(xe), xe;
      }
    }
    function Ei(a, T, O) {
      return _n(a, T, O, !0);
    }
    function xi(a, T, O) {
      return _n(a, T, O, !1);
    }
    var Ti = xi, _i = Ei;
    _r.Fragment = n, _r.jsx = Ti, _r.jsxs = _i;
  }()), _r;
}
var Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function $i() {
  if (On)
    return Sr;
  On = 1;
  var e = He, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, u, l) {
    var d, h = {}, y = null, E = null;
    l !== void 0 && (y = "" + l), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (d in u)
      n.call(u, d) && !i.hasOwnProperty(d) && (h[d] = u[d]);
    if (c && c.defaultProps)
      for (d in u = c.defaultProps, u)
        h[d] === void 0 && (h[d] = u[d]);
    return { $$typeof: r, type: c, key: y, ref: E, props: h, _owner: o.current };
  }
  return Sr.Fragment = t, Sr.jsx = s, Sr.jsxs = s, Sr;
}
process.env.NODE_ENV === "production" ? Lt.exports = $i() : Lt.exports = Pi();
var Se = Lt.exports, wr = {}, Rr = Ci;
if (process.env.NODE_ENV === "production")
  wr.createRoot = Rr.createRoot, wr.hydrateRoot = Rr.hydrateRoot;
else {
  var Lr = Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  wr.createRoot = function(e, r) {
    Lr.usingClientEntryPoint = !0;
    try {
      return Rr.createRoot(e, r);
    } finally {
      Lr.usingClientEntryPoint = !1;
    }
  }, wr.hydrateRoot = function(e, r, t) {
    Lr.usingClientEntryPoint = !0;
    try {
      return Rr.hydrateRoot(e, r, t);
    } finally {
      Lr.usingClientEntryPoint = !1;
    }
  };
}
var zt = { exports: {} }, Pt, Cn;
function Xt() {
  if (Cn)
    return Pt;
  Cn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pt = e, Pt;
}
var $t, wn;
function Ai() {
  if (wn)
    return $t;
  wn = 1;
  var e = Xt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, $t = function() {
    function n(s, c, u, l, d, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, $t;
}
var zr = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function ki() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === i || g === o || g === h || g === y || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === E || g.$$typeof === s || g.$$typeof === c || g.$$typeof === d || g.$$typeof === v || g.$$typeof === S || g.$$typeof === w || g.$$typeof === m);
    }
    function _(g) {
      if (typeof g == "object" && g !== null) {
        var Ee = g.$$typeof;
        switch (Ee) {
          case r:
            var P = g.type;
            switch (P) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case h:
                return P;
              default:
                var Re = P && P.$$typeof;
                switch (Re) {
                  case c:
                  case d:
                  case b:
                  case E:
                  case s:
                    return Re;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var f = u, j = l, k = c, pe = s, ce = r, A = d, H = n, J = b, X = E, G = t, le = i, ae = o, be = h, fe = !1;
    function Ae(g) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(g) || _(g) === u;
    }
    function x(g) {
      return _(g) === l;
    }
    function C(g) {
      return _(g) === c;
    }
    function B(g) {
      return _(g) === s;
    }
    function L(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function N(g) {
      return _(g) === d;
    }
    function Y(g) {
      return _(g) === n;
    }
    function M(g) {
      return _(g) === b;
    }
    function F(g) {
      return _(g) === E;
    }
    function z(g) {
      return _(g) === t;
    }
    function D(g) {
      return _(g) === i;
    }
    function U(g) {
      return _(g) === o;
    }
    function me(g) {
      return _(g) === h;
    }
    re.AsyncMode = f, re.ConcurrentMode = j, re.ContextConsumer = k, re.ContextProvider = pe, re.Element = ce, re.ForwardRef = A, re.Fragment = H, re.Lazy = J, re.Memo = X, re.Portal = G, re.Profiler = le, re.StrictMode = ae, re.Suspense = be, re.isAsyncMode = Ae, re.isConcurrentMode = x, re.isContextConsumer = C, re.isContextProvider = B, re.isElement = L, re.isForwardRef = N, re.isFragment = Y, re.isLazy = M, re.isMemo = F, re.isPortal = z, re.isProfiler = D, re.isStrictMode = U, re.isSuspense = me, re.isValidElementType = R, re.typeOf = _;
  }()), re;
}
var te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function Ni() {
  if ($n)
    return te;
  $n = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(f) {
    if (typeof f == "object" && f !== null) {
      var j = f.$$typeof;
      switch (j) {
        case r:
          switch (f = f.type, f) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case d:
                case b:
                case E:
                case s:
                  return f;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  function _(f) {
    return R(f) === l;
  }
  return te.AsyncMode = u, te.ConcurrentMode = l, te.ContextConsumer = c, te.ContextProvider = s, te.Element = r, te.ForwardRef = d, te.Fragment = n, te.Lazy = b, te.Memo = E, te.Portal = t, te.Profiler = i, te.StrictMode = o, te.Suspense = h, te.isAsyncMode = function(f) {
    return _(f) || R(f) === u;
  }, te.isConcurrentMode = _, te.isContextConsumer = function(f) {
    return R(f) === c;
  }, te.isContextProvider = function(f) {
    return R(f) === s;
  }, te.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, te.isForwardRef = function(f) {
    return R(f) === d;
  }, te.isFragment = function(f) {
    return R(f) === n;
  }, te.isLazy = function(f) {
    return R(f) === b;
  }, te.isMemo = function(f) {
    return R(f) === E;
  }, te.isPortal = function(f) {
    return R(f) === t;
  }, te.isProfiler = function(f) {
    return R(f) === i;
  }, te.isStrictMode = function(f) {
    return R(f) === o;
  }, te.isSuspense = function(f) {
    return R(f) === h;
  }, te.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === l || f === i || f === o || f === h || f === y || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === E || f.$$typeof === s || f.$$typeof === c || f.$$typeof === d || f.$$typeof === v || f.$$typeof === S || f.$$typeof === w || f.$$typeof === m);
  }, te.typeOf = R, te;
}
var An;
function Co() {
  return An || (An = 1, process.env.NODE_ENV === "production" ? zr.exports = Ni() : zr.exports = ki()), zr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var At, kn;
function ji() {
  if (kn)
    return At;
  kn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return At = o() ? Object.assign : function(i, s) {
    for (var c, u = n(i), l, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        r.call(c, h) && (u[h] = c[h]);
      if (e) {
        l = e(c);
        for (var y = 0; y < l.length; y++)
          t.call(c, l[y]) && (u[l[y]] = c[l[y]]);
      }
    }
    return u;
  }, At;
}
var kt, Nn;
function wo() {
  return Nn || (Nn = 1, kt = Function.call.bind(Object.prototype.hasOwnProperty)), kt;
}
var Nt, jn;
function Ii() {
  if (jn)
    return Nt;
  jn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Xt(), t = {}, n = wo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[d](s, d, u, c, null, r);
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var E = l ? l() : "";
            e(
              "Failed " + c + " type: " + h.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Nt = o, Nt;
}
var jt, In;
function Mi() {
  if (In)
    return jt;
  In = 1;
  var e = Co(), r = ji(), t = Xt(), n = wo(), o = Ii(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return jt = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(x) {
      var C = x && (l && x[l] || x[d]);
      if (typeof C == "function")
        return C;
    }
    var y = "<<anonymous>>", E = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: R,
      element: _(),
      elementType: f(),
      instanceOf: j,
      node: A(),
      objectOf: pe,
      oneOf: k,
      oneOfType: ce,
      shape: J,
      exact: X
    };
    function b(x, C) {
      return x === C ? x !== 0 || 1 / x === 1 / C : x !== x && C !== C;
    }
    function m(x, C) {
      this.message = x, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(x) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, B = 0;
      function L(Y, M, F, z, D, U, me) {
        if (z = z || y, U = U || F, me !== t) {
          if (u) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = z + ":" + F;
            !C[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[Ee] = !0, B++);
          }
        }
        return M[F] == null ? Y ? M[F] === null ? new m("The " + D + " `" + U + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new m("The " + D + " `" + U + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : x(M, F, z, D, U);
      }
      var N = L.bind(null, !1);
      return N.isRequired = L.bind(null, !0), N;
    }
    function S(x) {
      function C(B, L, N, Y, M, F) {
        var z = B[L], D = ae(z);
        if (D !== x) {
          var U = be(z);
          return new m(
            "Invalid " + Y + " `" + M + "` of type " + ("`" + U + "` supplied to `" + N + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return v(C);
    }
    function w() {
      return v(s);
    }
    function R(x) {
      function C(B, L, N, Y, M) {
        if (typeof x != "function")
          return new m("Property `" + M + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var F = B[L];
        if (!Array.isArray(F)) {
          var z = ae(F);
          return new m("Invalid " + Y + " `" + M + "` of type " + ("`" + z + "` supplied to `" + N + "`, expected an array."));
        }
        for (var D = 0; D < F.length; D++) {
          var U = x(F, D, N, Y, M + "[" + D + "]", t);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return v(C);
    }
    function _() {
      function x(C, B, L, N, Y) {
        var M = C[B];
        if (!c(M)) {
          var F = ae(M);
          return new m("Invalid " + N + " `" + Y + "` of type " + ("`" + F + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(x);
    }
    function f() {
      function x(C, B, L, N, Y) {
        var M = C[B];
        if (!e.isValidElementType(M)) {
          var F = ae(M);
          return new m("Invalid " + N + " `" + Y + "` of type " + ("`" + F + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(x);
    }
    function j(x) {
      function C(B, L, N, Y, M) {
        if (!(B[L] instanceof x)) {
          var F = x.name || y, z = Ae(B[L]);
          return new m("Invalid " + Y + " `" + M + "` of type " + ("`" + z + "` supplied to `" + N + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return v(C);
    }
    function k(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function C(B, L, N, Y, M) {
        for (var F = B[L], z = 0; z < x.length; z++)
          if (b(F, x[z]))
            return null;
        var D = JSON.stringify(x, function(me, g) {
          var Ee = be(g);
          return Ee === "symbol" ? String(g) : g;
        });
        return new m("Invalid " + Y + " `" + M + "` of value `" + String(F) + "` " + ("supplied to `" + N + "`, expected one of " + D + "."));
      }
      return v(C);
    }
    function pe(x) {
      function C(B, L, N, Y, M) {
        if (typeof x != "function")
          return new m("Property `" + M + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var F = B[L], z = ae(F);
        if (z !== "object")
          return new m("Invalid " + Y + " `" + M + "` of type " + ("`" + z + "` supplied to `" + N + "`, expected an object."));
        for (var D in F)
          if (n(F, D)) {
            var U = x(F, D, N, Y, M + "." + D, t);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return v(C);
    }
    function ce(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var C = 0; C < x.length; C++) {
        var B = x[C];
        if (typeof B != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(B) + " at index " + C + "."
          ), s;
      }
      function L(N, Y, M, F, z) {
        for (var D = [], U = 0; U < x.length; U++) {
          var me = x[U], g = me(N, Y, M, F, z, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && D.push(g.data.expectedType);
        }
        var Ee = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new m("Invalid " + F + " `" + z + "` supplied to " + ("`" + M + "`" + Ee + "."));
      }
      return v(L);
    }
    function A() {
      function x(C, B, L, N, Y) {
        return G(C[B]) ? null : new m("Invalid " + N + " `" + Y + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return v(x);
    }
    function H(x, C, B, L, N) {
      return new m(
        (x || "React class") + ": " + C + " type `" + B + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function J(x) {
      function C(B, L, N, Y, M) {
        var F = B[L], z = ae(F);
        if (z !== "object")
          return new m("Invalid " + Y + " `" + M + "` of type `" + z + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var D in x) {
          var U = x[D];
          if (typeof U != "function")
            return H(N, Y, M, D, be(U));
          var me = U(F, D, N, Y, M + "." + D, t);
          if (me)
            return me;
        }
        return null;
      }
      return v(C);
    }
    function X(x) {
      function C(B, L, N, Y, M) {
        var F = B[L], z = ae(F);
        if (z !== "object")
          return new m("Invalid " + Y + " `" + M + "` of type `" + z + "` " + ("supplied to `" + N + "`, expected `object`."));
        var D = r({}, B[L], x);
        for (var U in D) {
          var me = x[U];
          if (n(x, U) && typeof me != "function")
            return H(N, Y, M, U, be(me));
          if (!me)
            return new m(
              "Invalid " + Y + " `" + M + "` key `" + U + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(B[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var g = me(F, U, N, Y, M + "." + U, t);
          if (g)
            return g;
        }
        return null;
      }
      return v(C);
    }
    function G(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(G);
          if (x === null || c(x))
            return !0;
          var C = h(x);
          if (C) {
            var B = C.call(x), L;
            if (C !== x.entries) {
              for (; !(L = B.next()).done; )
                if (!G(L.value))
                  return !1;
            } else
              for (; !(L = B.next()).done; ) {
                var N = L.value;
                if (N && !G(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(x, C) {
      return x === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function ae(x) {
      var C = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : le(C, x) ? "symbol" : C;
    }
    function be(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var C = ae(x);
      if (C === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function fe(x) {
      var C = be(x);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function Ae(x) {
      return !x.constructor || !x.constructor.name ? y : x.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, jt;
}
if (process.env.NODE_ENV !== "production") {
  var Di = Co(), Fi = !0;
  zt.exports = Mi()(Di.isElement, Fi);
} else
  zt.exports = Ai()();
var Vi = zt.exports;
const p = /* @__PURE__ */ wi(Vi);
function Li(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, I.apply(this, arguments);
}
function qe(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Po(e) {
  if (!qe(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Po(e[t]);
  }), r;
}
function je(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? I({}, e) : e;
  return qe(e) && qe(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (qe(r[o]) && o in e && qe(e[o]) ? n[o] = je(e[o], r[o], t) : t.clone ? n[o] = qe(r[o]) ? Po(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
function zi(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Bi(e, r, t, n, o) {
  const i = e[r], s = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !zi(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Yi = Li(p.elementType, Bi);
function pr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var Bt = { exports: {} }, ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Ui() {
  return Mn || (Mn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = !1, m = !1, v = !1, S = !1, w = !1, R;
    R = Symbol.for("react.module.reference");
    function _(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === t || P === o || w || P === n || P === l || P === d || S || P === E || b || m || v || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === h || P.$$typeof === i || P.$$typeof === s || P.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === R || P.getModuleId !== void 0));
    }
    function f(P) {
      if (typeof P == "object" && P !== null) {
        var Re = P.$$typeof;
        switch (Re) {
          case e:
            var Le = P.type;
            switch (Le) {
              case t:
              case o:
              case n:
              case l:
              case d:
                return Le;
              default:
                var Je = Le && Le.$$typeof;
                switch (Je) {
                  case c:
                  case s:
                  case u:
                  case y:
                  case h:
                  case i:
                    return Je;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var j = s, k = i, pe = e, ce = u, A = t, H = y, J = h, X = r, G = o, le = n, ae = l, be = d, fe = !1, Ae = !1;
    function x(P) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(P) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(P) {
      return f(P) === s;
    }
    function L(P) {
      return f(P) === i;
    }
    function N(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function Y(P) {
      return f(P) === u;
    }
    function M(P) {
      return f(P) === t;
    }
    function F(P) {
      return f(P) === y;
    }
    function z(P) {
      return f(P) === h;
    }
    function D(P) {
      return f(P) === r;
    }
    function U(P) {
      return f(P) === o;
    }
    function me(P) {
      return f(P) === n;
    }
    function g(P) {
      return f(P) === l;
    }
    function Ee(P) {
      return f(P) === d;
    }
    ne.ContextConsumer = j, ne.ContextProvider = k, ne.Element = pe, ne.ForwardRef = ce, ne.Fragment = A, ne.Lazy = H, ne.Memo = J, ne.Portal = X, ne.Profiler = G, ne.StrictMode = le, ne.Suspense = ae, ne.SuspenseList = be, ne.isAsyncMode = x, ne.isConcurrentMode = C, ne.isContextConsumer = B, ne.isContextProvider = L, ne.isElement = N, ne.isForwardRef = Y, ne.isFragment = M, ne.isLazy = F, ne.isMemo = z, ne.isPortal = D, ne.isProfiler = U, ne.isStrictMode = me, ne.isSuspense = g, ne.isSuspenseList = Ee, ne.isValidElementType = _, ne.typeOf = f;
  }()), ne;
}
var oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Wi() {
  if (Dn)
    return oe;
  Dn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function m(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case e:
          switch (v = v.type, v) {
            case t:
            case o:
            case n:
            case l:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case s:
                case u:
                case y:
                case h:
                case i:
                  return v;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return oe.ContextConsumer = s, oe.ContextProvider = i, oe.Element = e, oe.ForwardRef = u, oe.Fragment = t, oe.Lazy = y, oe.Memo = h, oe.Portal = r, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = l, oe.SuspenseList = d, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(v) {
    return m(v) === s;
  }, oe.isContextProvider = function(v) {
    return m(v) === i;
  }, oe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, oe.isForwardRef = function(v) {
    return m(v) === u;
  }, oe.isFragment = function(v) {
    return m(v) === t;
  }, oe.isLazy = function(v) {
    return m(v) === y;
  }, oe.isMemo = function(v) {
    return m(v) === h;
  }, oe.isPortal = function(v) {
    return m(v) === r;
  }, oe.isProfiler = function(v) {
    return m(v) === o;
  }, oe.isStrictMode = function(v) {
    return m(v) === n;
  }, oe.isSuspense = function(v) {
    return m(v) === l;
  }, oe.isSuspenseList = function(v) {
    return m(v) === d;
  }, oe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === t || v === o || v === n || v === l || v === d || v === E || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === h || v.$$typeof === i || v.$$typeof === s || v.$$typeof === u || v.$$typeof === b || v.getModuleId !== void 0);
  }, oe.typeOf = m, oe;
}
process.env.NODE_ENV === "production" ? Bt.exports = Wi() : Bt.exports = Ui();
var Fn = Bt.exports;
const qi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Gi(e) {
  const r = `${e}`.match(qi);
  return r && r[1] || "";
}
function $o(e, r = "") {
  return e.displayName || e.name || Gi(e) || r;
}
function Vn(e, r, t) {
  const n = $o(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ki(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return $o(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Fn.ForwardRef:
          return Vn(e, e.render, "ForwardRef");
        case Fn.Memo:
          return Vn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Hi = p.oneOfType([p.func, p.object]), Xi = Hi;
function Ce(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ji(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Zi = typeof window < "u" ? $.useLayoutEffect : $.useEffect, Qi = Zi;
function Br(e) {
  const r = $.useRef(e);
  return Qi(() => {
    r.current = e;
  }), $.useRef((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  )).current;
}
function Ln(...e) {
  return $.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Ji(t, r);
    });
  }, e);
}
let ot = !0, Yt = !1, zn;
const es = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function rs(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && es[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ts(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ot = !0);
}
function It() {
  ot = !1;
}
function ns() {
  this.visibilityState === "hidden" && Yt && (ot = !0);
}
function os(e) {
  e.addEventListener("keydown", ts, !0), e.addEventListener("mousedown", It, !0), e.addEventListener("pointerdown", It, !0), e.addEventListener("touchstart", It, !0), e.addEventListener("visibilitychange", ns, !0);
}
function is(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return ot || rs(r);
}
function ss() {
  const e = $.useCallback((o) => {
    o != null && os(o.ownerDocument);
  }, []), r = $.useRef(!1);
  function t() {
    return r.current ? (Yt = !0, window.clearTimeout(zn), zn = window.setTimeout(() => {
      Yt = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(o) {
    return is(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function Jt(e, r) {
  const t = I({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = I({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = I({}, i), Object.keys(o).forEach((s) => {
        t[n][s] = Jt(o[s], i[s]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Zt(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const c = r(s);
          c !== "" && i.push(c), t && t[s] && i.push(t[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Bn = (e) => e, as = () => {
  let e = Bn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Bn;
    }
  };
}, cs = as(), us = cs, ls = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function jr(e, r, t = "Mui") {
  const n = ls[r];
  return n ? `${t}-${n}` : `${us.generate(e)}-${r}`;
}
function Qt(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = jr(e, o, t);
  }), n;
}
function Ao(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var fs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ds = /* @__PURE__ */ Ao(
  function(e) {
    return fs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function ps(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ms(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var hs = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ms(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = ps(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Oe = "-ms-", Qr = "-moz-", Q = "-webkit-", en = "comm", rn = "rule", tn = "decl", ys = "@import", ko = "@keyframes", vs = "@layer", gs = Math.abs, it = String.fromCharCode, bs = Object.assign;
function Es(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function No(e) {
  return e.trim();
}
function xs(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ee(e, r, t) {
  return e.replace(r, t);
}
function Ut(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function $r(e, r, t) {
  return e.slice(r, t);
}
function Ye(e) {
  return e.length;
}
function nn(e) {
  return e.length;
}
function Yr(e, r) {
  return r.push(e), e;
}
function Ts(e, r) {
  return e.map(r).join("");
}
var st = 1, mr = 1, jo = 0, Pe = 0, Te = 0, yr = "";
function at(e, r, t, n, o, i, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: st, column: mr, length: s, return: "" };
}
function Or(e, r) {
  return bs(at("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function _s() {
  return Te;
}
function Ss() {
  return Te = Pe > 0 ? _e(yr, --Pe) : 0, mr--, Te === 10 && (mr = 1, st--), Te;
}
function Ie() {
  return Te = Pe < jo ? _e(yr, Pe++) : 0, mr++, Te === 10 && (mr = 1, st++), Te;
}
function Ue() {
  return _e(yr, Pe);
}
function Kr() {
  return Pe;
}
function Ir(e, r) {
  return $r(yr, e, r);
}
function Ar(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Io(e) {
  return st = mr = 1, jo = Ye(yr = e), Pe = 0, [];
}
function Mo(e) {
  return yr = "", e;
}
function Hr(e) {
  return No(Ir(Pe - 1, Wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rs(e) {
  for (; (Te = Ue()) && Te < 33; )
    Ie();
  return Ar(e) > 2 || Ar(Te) > 3 ? "" : " ";
}
function Os(e, r) {
  for (; --r && Ie() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return Ir(e, Kr() + (r < 6 && Ue() == 32 && Ie() == 32));
}
function Wt(e) {
  for (; Ie(); )
    switch (Te) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wt(Te);
        break;
      case 40:
        e === 41 && Wt(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Pe;
}
function Cs(e, r) {
  for (; Ie() && e + Te !== 57; )
    if (e + Te === 84 && Ue() === 47)
      break;
  return "/*" + Ir(r, Pe - 1) + "*" + it(e === 47 ? e : Ie());
}
function ws(e) {
  for (; !Ar(Ue()); )
    Ie();
  return Ir(e, Pe);
}
function Ps(e) {
  return Mo(Xr("", null, null, null, [""], e = Io(e), 0, [0], e));
}
function Xr(e, r, t, n, o, i, s, c, u) {
  for (var l = 0, d = 0, h = s, y = 0, E = 0, b = 0, m = 1, v = 1, S = 1, w = 0, R = "", _ = o, f = i, j = n, k = R; v; )
    switch (b = w, w = Ie()) {
      case 40:
        if (b != 108 && _e(k, h - 1) == 58) {
          Ut(k += ee(Hr(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Hr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Rs(b);
        break;
      case 92:
        k += Os(Kr() - 1, 7);
        continue;
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            Yr($s(Cs(Ie(), Kr()), r, t), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        c[l++] = Ye(k) * S;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            v = 0;
          case 59 + d:
            S == -1 && (k = ee(k, /\f/g, "")), E > 0 && Ye(k) - h && Yr(E > 32 ? Un(k + ";", n, t, h - 1) : Un(ee(k, " ", "") + ";", n, t, h - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (Yr(j = Yn(k, r, t, l, d, o, c, R, _ = [], f = [], h), i), w === 123)
              if (d === 0)
                Xr(k, r, j, j, _, i, h, c, f);
              else
                switch (y === 99 && _e(k, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xr(e, j, j, n && Yr(Yn(e, j, j, 0, 0, o, c, R, o, _ = [], h), f), o, f, h, c, n ? _ : f);
                    break;
                  default:
                    Xr(k, j, j, j, [""], f, 0, c, f);
                }
        }
        l = d = E = 0, m = S = 1, R = k = "", h = s;
        break;
      case 58:
        h = 1 + Ye(k), E = b;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && Ss() == 125)
            continue;
        }
        switch (k += it(w), w * m) {
          case 38:
            S = d > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            c[l++] = (Ye(k) - 1) * S, S = 1;
            break;
          case 64:
            Ue() === 45 && (k += Hr(Ie())), y = Ue(), d = h = Ye(R = k += ws(Kr())), w++;
            break;
          case 45:
            b === 45 && Ye(k) == 2 && (m = 0);
        }
    }
  return i;
}
function Yn(e, r, t, n, o, i, s, c, u, l, d) {
  for (var h = o - 1, y = o === 0 ? i : [""], E = nn(y), b = 0, m = 0, v = 0; b < n; ++b)
    for (var S = 0, w = $r(e, h + 1, h = gs(m = s[b])), R = e; S < E; ++S)
      (R = No(m > 0 ? y[S] + " " + w : ee(w, /&\f/g, y[S]))) && (u[v++] = R);
  return at(e, r, t, o === 0 ? rn : c, u, l, d);
}
function $s(e, r, t) {
  return at(e, r, t, en, it(_s()), $r(e, 2, -2), 0);
}
function Un(e, r, t, n) {
  return at(e, r, t, tn, $r(e, 0, n), $r(e, n + 1, -1), n);
}
function fr(e, r) {
  for (var t = "", n = nn(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function As(e, r, t, n) {
  switch (e.type) {
    case vs:
      if (e.children.length)
        break;
    case ys:
    case tn:
      return e.return = e.return || e.value;
    case en:
      return "";
    case ko:
      return e.return = e.value + "{" + fr(e.children, n) + "}";
    case rn:
      e.value = e.props.join(",");
  }
  return Ye(t = fr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ks(e) {
  var r = nn(e);
  return function(t, n, o, i) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, o, i) || "";
    return s;
  };
}
function Ns(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var js = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = Ue(), o === 38 && i === 12 && (t[n] = 1), !Ar(i); )
    Ie();
  return Ir(r, Pe);
}, Is = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ar(o)) {
      case 0:
        o === 38 && Ue() === 12 && (t[n] = 1), r[n] += js(Pe - 1, t, n);
        break;
      case 2:
        r[n] += Hr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = Ue() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += it(o);
    }
  while (o = Ie());
  return r;
}, Ms = function(r, t) {
  return Mo(Is(Io(r), t));
}, Wn = /* @__PURE__ */ new WeakMap(), Ds = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Wn.get(n)) && !o) {
      Wn.set(r, !0);
      for (var i = [], s = Ms(t, i), c = n.props, u = 0, l = 0; u < s.length; u++)
        for (var d = 0; d < c.length; d++, l++)
          r.props[l] = i[u] ? s[u].replace(/&\f/g, c[d]) : c[d] + " " + s[u];
    }
  }
}, Fs = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Vs = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ls = function(r) {
  return r.type === "comm" && r.children.indexOf(Vs) > -1;
}, zs = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!t.parent, c = s ? t.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var l = c[u];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (Ls(l))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Do = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Bs = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Do(t[n]))
      return !0;
  return !1;
}, qn = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Ys = function(r, t, n) {
  Do(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), qn(r)) : Bs(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), qn(r)));
};
function Fo(e, r) {
  switch (Es(e, r)) {
    case 5103:
      return Q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Q + e + Qr + e + Oe + e + e;
    case 6828:
    case 4268:
      return Q + e + Oe + e + e;
    case 6165:
      return Q + e + Oe + "flex-" + e + e;
    case 5187:
      return Q + e + ee(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return Q + e + Oe + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Q + e + Oe + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Q + e + Oe + ee(e, "shrink", "negative") + e;
    case 5292:
      return Q + e + Oe + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Q + "box-" + ee(e, "-grow", "") + Q + e + Oe + ee(e, "grow", "positive") + e;
    case 4554:
      return Q + ee(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Q + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ye(e) - 1 - r > 6)
        switch (_e(e, r + 1)) {
          case 109:
            if (_e(e, r + 4) !== 45)
              break;
          case 102:
            return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Q + "$2-$3$1" + Qr + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ut(e, "stretch") ? Fo(ee(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115)
        break;
    case 6444:
      switch (_e(e, Ye(e) - 3 - (~Ut(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Q) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Q + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Q + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return Q + e + Oe + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Q + e + Oe + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Q + e + Oe + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Q + e + Oe + e + e;
  }
  return e;
}
var Us = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case tn:
        r.return = Fo(r.value, r.length);
        break;
      case ko:
        return fr([Or(r, {
          value: ee(r.value, "@", "@" + Q)
        })], o);
      case rn:
        if (r.length)
          return Ts(r.props, function(i) {
            switch (xs(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return fr([Or(r, {
                  props: [ee(i, /:(read-\w+)/, ":" + Qr + "$1")]
                })], o);
              case "::placeholder":
                return fr([Or(r, {
                  props: [ee(i, /:(plac\w+)/, ":" + Q + "input-$1")]
                }), Or(r, {
                  props: [ee(i, /:(plac\w+)/, ":" + Qr + "$1")]
                }), Or(r, {
                  props: [ee(i, /:(plac\w+)/, Oe + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Ws = [Us], qs = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var v = m.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Ws;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var v = m.getAttribute("data-emotion").split(" "), S = 1; S < v.length; S++)
        i[v[S]] = !0;
      c.push(m);
    }
  );
  var u, l = [Ds, Fs];
  process.env.NODE_ENV !== "production" && l.push(zs({
    get compat() {
      return b.compat;
    }
  }), Ys);
  {
    var d, h = [As, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? d.insert(m.return) : m.value && m.type !== en && d.insert(m.value + "{}"));
    } : Ns(function(m) {
      d.insert(m);
    })], y = ks(l.concat(o, h)), E = function(v) {
      return fr(Ps(v), y);
    };
    u = function(v, S, w, R) {
      d = w, process.env.NODE_ENV !== "production" && S.map !== void 0 && (d = {
        insert: function(f) {
          w.insert(f + S.map);
        }
      }), E(v ? v + "{" + S.styles + "}" : S.styles), R && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: t,
    sheet: new hs({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return b.sheet.hydrate(c), b;
}, qt = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Gs() {
  return Gn || (Gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === i || g === o || g === h || g === y || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === E || g.$$typeof === s || g.$$typeof === c || g.$$typeof === d || g.$$typeof === v || g.$$typeof === S || g.$$typeof === w || g.$$typeof === m);
    }
    function _(g) {
      if (typeof g == "object" && g !== null) {
        var Ee = g.$$typeof;
        switch (Ee) {
          case r:
            var P = g.type;
            switch (P) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case h:
                return P;
              default:
                var Re = P && P.$$typeof;
                switch (Re) {
                  case c:
                  case d:
                  case b:
                  case E:
                  case s:
                    return Re;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var f = u, j = l, k = c, pe = s, ce = r, A = d, H = n, J = b, X = E, G = t, le = i, ae = o, be = h, fe = !1;
    function Ae(g) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(g) || _(g) === u;
    }
    function x(g) {
      return _(g) === l;
    }
    function C(g) {
      return _(g) === c;
    }
    function B(g) {
      return _(g) === s;
    }
    function L(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function N(g) {
      return _(g) === d;
    }
    function Y(g) {
      return _(g) === n;
    }
    function M(g) {
      return _(g) === b;
    }
    function F(g) {
      return _(g) === E;
    }
    function z(g) {
      return _(g) === t;
    }
    function D(g) {
      return _(g) === i;
    }
    function U(g) {
      return _(g) === o;
    }
    function me(g) {
      return _(g) === h;
    }
    ie.AsyncMode = f, ie.ConcurrentMode = j, ie.ContextConsumer = k, ie.ContextProvider = pe, ie.Element = ce, ie.ForwardRef = A, ie.Fragment = H, ie.Lazy = J, ie.Memo = X, ie.Portal = G, ie.Profiler = le, ie.StrictMode = ae, ie.Suspense = be, ie.isAsyncMode = Ae, ie.isConcurrentMode = x, ie.isContextConsumer = C, ie.isContextProvider = B, ie.isElement = L, ie.isForwardRef = N, ie.isFragment = Y, ie.isLazy = M, ie.isMemo = F, ie.isPortal = z, ie.isProfiler = D, ie.isStrictMode = U, ie.isSuspense = me, ie.isValidElementType = R, ie.typeOf = _;
  }()), ie;
}
var se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Ks() {
  if (Kn)
    return se;
  Kn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(f) {
    if (typeof f == "object" && f !== null) {
      var j = f.$$typeof;
      switch (j) {
        case r:
          switch (f = f.type, f) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case d:
                case b:
                case E:
                case s:
                  return f;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  function _(f) {
    return R(f) === l;
  }
  return se.AsyncMode = u, se.ConcurrentMode = l, se.ContextConsumer = c, se.ContextProvider = s, se.Element = r, se.ForwardRef = d, se.Fragment = n, se.Lazy = b, se.Memo = E, se.Portal = t, se.Profiler = i, se.StrictMode = o, se.Suspense = h, se.isAsyncMode = function(f) {
    return _(f) || R(f) === u;
  }, se.isConcurrentMode = _, se.isContextConsumer = function(f) {
    return R(f) === c;
  }, se.isContextProvider = function(f) {
    return R(f) === s;
  }, se.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === r;
  }, se.isForwardRef = function(f) {
    return R(f) === d;
  }, se.isFragment = function(f) {
    return R(f) === n;
  }, se.isLazy = function(f) {
    return R(f) === b;
  }, se.isMemo = function(f) {
    return R(f) === E;
  }, se.isPortal = function(f) {
    return R(f) === t;
  }, se.isProfiler = function(f) {
    return R(f) === i;
  }, se.isStrictMode = function(f) {
    return R(f) === o;
  }, se.isSuspense = function(f) {
    return R(f) === h;
  }, se.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === l || f === i || f === o || f === h || f === y || typeof f == "object" && f !== null && (f.$$typeof === b || f.$$typeof === E || f.$$typeof === s || f.$$typeof === c || f.$$typeof === d || f.$$typeof === v || f.$$typeof === S || f.$$typeof === w || f.$$typeof === m);
  }, se.typeOf = R, se;
}
process.env.NODE_ENV === "production" ? qt.exports = Ks() : qt.exports = Gs();
var Hs = qt.exports, Vo = Hs, Xs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Js = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Lo = {};
Lo[Vo.ForwardRef] = Xs;
Lo[Vo.Memo] = Js;
var Zs = !0;
function on(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var ct = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Zs === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, ut = function(r, t, n) {
  ct(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Qs(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var ea = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Hn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ra = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", ta = /[A-Z]|^ms/g, zo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, sn = function(r) {
  return r.charCodeAt(1) === 45;
}, Xn = function(r) {
  return r != null && typeof r != "boolean";
}, Mt = /* @__PURE__ */ Ao(function(e) {
  return sn(e) ? e : e.replace(ta, "-$&").toLowerCase();
}), et = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(zo, function(n, o, i) {
          return ze = {
            name: o,
            styles: i,
            next: ze
          }, o;
        });
  }
  return ea[r] !== 1 && !sn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var na = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, oa = ["normal", "none", "initial", "inherit", "unset"], ia = et, sa = /^-ms-/, aa = /-(.)/g, Jn = {};
  et = function(r, t) {
    if (r === "content" && (typeof t != "string" || oa.indexOf(t) === -1 && !na.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = ia(r, t);
    return n !== "" && !sn(r) && r.indexOf("-") !== -1 && Jn[r] === void 0 && (Jn[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(sa, "ms-").replace(aa, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Bo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function kr(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Bo);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return ze = {
          name: t.name,
          styles: t.styles,
          next: ze
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ze = {
              name: n.name,
              styles: n.styles,
              next: ze
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ca(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = ze, s = t(e);
        return ze = i, kr(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(zo, function(d, h, y) {
          var E = "animation" + c.length;
          return c.push("const " + E + " = keyframes`" + y.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var l = r[t];
  return l !== void 0 ? l : t;
}
function ca(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += kr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Xn(s) && (n += Mt(i) + ":" + et(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Bo);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Xn(s[c]) && (n += Mt(i) + ":" + et(i, s[c]) + ";");
        else {
          var u = kr(e, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Mt(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(ra), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Zn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Yo;
process.env.NODE_ENV !== "production" && (Yo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ze, hr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  ze = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (o = !1, i += kr(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(Hn), i += s[0]);
  for (var c = 1; c < r.length; c++)
    i += kr(n, t, r[c]), o && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(Hn), i += s[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Yo, function(y) {
    return u = y, "";
  })), Zn.lastIndex = 0;
  for (var l = "", d; (d = Zn.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    d[1];
  var h = Qs(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: h,
    styles: i,
    map: u,
    next: ze,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: h,
    styles: i,
    next: ze
  };
}, ua = function(r) {
  return r();
}, Uo = $.useInsertionEffect ? $.useInsertionEffect : !1, an = Uo || ua, Qn = Uo || $.useLayoutEffect, la = {}.hasOwnProperty, cn = /* @__PURE__ */ $.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qs({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (cn.displayName = "EmotionCacheContext");
cn.Provider;
var lt = function(r) {
  return /* @__PURE__ */ Si(function(t, n) {
    var o = Ri(cn);
    return r(t, o, n);
  });
}, vr = /* @__PURE__ */ $.createContext({});
process.env.NODE_ENV !== "production" && (vr.displayName = "EmotionThemeContext");
var eo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ro = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", fa = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ct(t, n, o), an(function() {
    return ut(t, n, o);
  }), null;
}, da = /* @__PURE__ */ lt(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[eo], i = [n], s = "";
  typeof e.className == "string" ? s = on(r.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var c = hr(i, void 0, $.useContext(vr));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[ro];
    u && (c = hr([c, "label:" + u + ";"]));
  }
  s += r.key + "-" + c.name;
  var l = {};
  for (var d in e)
    la.call(e, d) && d !== "css" && d !== eo && (process.env.NODE_ENV === "production" || d !== ro) && (l[d] = e[d]);
  return l.ref = t, l.className = s, /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(fa, {
    cache: r,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ $.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (da.displayName = "EmotionCssPropInternal");
var pa = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, to = !1, ma = /* @__PURE__ */ lt(function(e, r) {
  process.env.NODE_ENV !== "production" && !to && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), to = !0);
  var t = e.styles, n = hr([t], void 0, $.useContext(vr)), o = $.useRef();
  return Qn(function() {
    var i = r.key + "-global", s = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), c = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), u !== null && (c = !0, u.setAttribute("data-emotion", i), s.hydrate([u])), o.current = [s, c], function() {
      s.flush();
    };
  }, [r]), Qn(function() {
    var i = o.current, s = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && ut(r, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    r.insert("", n, s, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ma.displayName = "EmotionGlobal");
function ha() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return hr(r);
}
var un = function() {
  var r = ha.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ya = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var c in i)
              i[c] && c && (s && (s += " "), s += c);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function va(e, r, t) {
  var n = [], o = on(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var ga = function(r) {
  var t = r.cache, n = r.serializedArr;
  return an(function() {
    for (var o = 0; o < n.length; o++)
      ut(t, n[o], !1);
  }), null;
}, ba = /* @__PURE__ */ lt(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, d = new Array(l), h = 0; h < l; h++)
      d[h] = arguments[h];
    var y = hr(d, r.registered);
    return n.push(y), ct(r, y, !1), r.key + "-" + y.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, d = new Array(l), h = 0; h < l; h++)
      d[h] = arguments[h];
    return va(r.registered, o, ya(d));
  }, s = {
    css: o,
    cx: i,
    theme: $.useContext(vr)
  }, c = e.children(s);
  return t = !0, /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(ga, {
    cache: r,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (ba.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var no = !0, Ea = typeof jest < "u" || typeof vi < "u";
  if (no && !Ea) {
    var oo = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : no ? window : global
    ), io = "__EMOTION_REACT_" + pa.version.split(".")[0] + "__";
    oo[io] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), oo[io] = !0;
  }
}
var xa = ds, Ta = function(r) {
  return r !== "theme";
}, so = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? xa : Ta;
}, ao = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, co = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, _a = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ct(t, n, o), an(function() {
    return ut(t, n, o);
  }), null;
}, Sa = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var c = ao(r, t, n), u = c || so(o), l = !u("as");
  return function() {
    var d = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(co), h.push(d[0][0]);
      for (var y = d.length, E = 1; E < y; E++)
        process.env.NODE_ENV !== "production" && d[0][E] === void 0 && console.error(co), h.push(d[E], d[0][E]);
    }
    var b = lt(function(m, v, S) {
      var w = l && m.as || o, R = "", _ = [], f = m;
      if (m.theme == null) {
        f = {};
        for (var j in m)
          f[j] = m[j];
        f.theme = $.useContext(vr);
      }
      typeof m.className == "string" ? R = on(v.registered, _, m.className) : m.className != null && (R = m.className + " ");
      var k = hr(h.concat(_), v.registered, f);
      R += v.key + "-" + k.name, s !== void 0 && (R += " " + s);
      var pe = l && c === void 0 ? so(w) : u, ce = {};
      for (var A in m)
        l && A === "as" || // $FlowFixMe
        pe(A) && (ce[A] = m[A]);
      return ce.className = R, ce.ref = S, /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(_a, {
        cache: v,
        serialized: k,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ $.createElement(w, ce));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = r.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = h, b.__emotion_forwardProp = c, Object.defineProperty(b, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), b.withComponent = function(m, v) {
      return e(m, I({}, t, v, {
        shouldForwardProp: ao(b, v, !0)
      })).apply(void 0, h);
    }, b;
  };
}, Ra = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Gt = Sa.bind();
Ra.forEach(function(e) {
  Gt[e] = Gt(e);
});
/**
 * @mui/styled-engine v5.14.20
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Oa(e, r) {
  const t = Gt(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Ca = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
};
function $e(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
const wa = ["values", "unit", "step"], Pa = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => I({}, t, {
    [n.key]: n.val
  }), {});
};
function $a(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = $e(e, wa), i = Pa(r), s = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof r[y] == "number" ? r[y] : y) - n / 100}${t})`;
  }
  function l(y, E) {
    const b = s.indexOf(E);
    return `@media (min-width:${typeof r[y] == "number" ? r[y] : y}${t}) and (max-width:${(b !== -1 && typeof r[s[b]] == "number" ? r[s[b]] : E) - n / 100}${t})`;
  }
  function d(y) {
    return s.indexOf(y) + 1 < s.length ? l(y, s[s.indexOf(y) + 1]) : c(y);
  }
  function h(y) {
    const E = s.indexOf(y);
    return E === 0 ? c(s[1]) : E === s.length - 1 ? u(s[E]) : l(y, s[s.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return I({
    keys: s,
    values: i,
    up: c,
    down: u,
    between: l,
    only: d,
    not: h,
    unit: t
  }, o);
}
const Aa = {
  borderRadius: 4
}, ka = Aa, Na = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {}, Xe = Na;
function Pr(e, r) {
  return r ? je(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ln = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, uo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ln[e]}px)`
};
function Be(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || uo;
    return r.reduce((s, c, u) => (s[i.up(i.keys[u])] = t(r[u]), s), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || uo;
    return Object.keys(r).reduce((s, c) => {
      if (Object.keys(i.values || ln).indexOf(c) !== -1) {
        const u = i.up(c);
        s[u] = t(r[c], c);
      } else {
        const u = c;
        s[u] = r[u];
      }
      return s;
    }, {});
  }
  return t(r);
}
function Wo(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function qo(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ja(e, ...r) {
  const t = Wo(e), n = [t, ...r].reduce((o, i) => je(o, i), {});
  return qo(Object.keys(t), n);
}
function Ia(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function Dt({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || Ia(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, c, u) => (Array.isArray(e) ? (s[c] = e[u] != null ? e[u] : e[i], i = u) : typeof e == "object" ? (s[c] = e[c] != null ? e[c] : e[i], i = c) : s[c] = e, s), {});
}
function ft(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function rt(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = ft(e, t) || n, r && (o = r(o, n, e)), o;
}
function ge(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[r] == null)
      return null;
    const c = s[r], u = s.theme, l = ft(u, n) || {};
    return Be(s, c, (h) => {
      let y = rt(l, o, h);
      return h === y && typeof h == "string" && (y = rt(l, o, `${r}${h === "default" ? "" : Ce(h)}`, h)), t === !1 ? y : {
        [t]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Xe
  } : {}, i.filterProps = [r], i;
}
function Ma(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const Da = {
  m: "margin",
  p: "padding"
}, Fa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, lo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Va = Ma((e) => {
  if (e.length > 2)
    if (lo[e])
      e = lo[e];
    else
      return [e];
  const [r, t] = e.split(""), n = Da[r], o = Fa[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), dt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], pt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], La = [...dt, ...pt];
function Mr(e, r, t, n) {
  var o;
  const i = (o = ft(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function fn(e) {
  return Mr(e, "spacing", 8, "spacing");
}
function Qe(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function za(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Qe(r, t), n), {});
}
function Ba(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Va(t), i = za(o, n), s = e[t];
  return Be(e, s, i);
}
function Go(e, r) {
  const t = fn(e.theme);
  return Object.keys(e).map((n) => Ba(e, r, n, t)).reduce(Pr, {});
}
function he(e) {
  return Go(e, dt);
}
he.propTypes = process.env.NODE_ENV !== "production" ? dt.reduce((e, r) => (e[r] = Xe, e), {}) : {};
he.filterProps = dt;
function ye(e) {
  return Go(e, pt);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? pt.reduce((e, r) => (e[r] = Xe, e), {}) : {};
ye.filterProps = pt;
process.env.NODE_ENV !== "production" && La.reduce((e, r) => (e[r] = Xe, e), {});
function Ya(e = 8) {
  if (e.mui)
    return e;
  const r = fn({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = r(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function mt(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Pr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, r) {
  return ge({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const Ua = Ve("border", Fe), Wa = Ve("borderTop", Fe), qa = Ve("borderRight", Fe), Ga = Ve("borderBottom", Fe), Ka = Ve("borderLeft", Fe), Ha = Ve("borderColor"), Xa = Ve("borderTopColor"), Ja = Ve("borderRightColor"), Za = Ve("borderBottomColor"), Qa = Ve("borderLeftColor"), ec = Ve("outline", Fe), rc = Ve("outlineColor"), ht = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Mr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Qe(r, n)
    });
    return Be(e, e.borderRadius, t);
  }
  return null;
};
ht.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Xe
} : {};
ht.filterProps = ["borderRadius"];
mt(Ua, Wa, qa, Ga, Ka, Ha, Xa, Ja, Za, Qa, ht, ec, rc);
const yt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Mr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Qe(r, n)
    });
    return Be(e, e.gap, t);
  }
  return null;
};
yt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Xe
} : {};
yt.filterProps = ["gap"];
const vt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Mr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Qe(r, n)
    });
    return Be(e, e.columnGap, t);
  }
  return null;
};
vt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Xe
} : {};
vt.filterProps = ["columnGap"];
const gt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Mr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Qe(r, n)
    });
    return Be(e, e.rowGap, t);
  }
  return null;
};
gt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Xe
} : {};
gt.filterProps = ["rowGap"];
const tc = ge({
  prop: "gridColumn"
}), nc = ge({
  prop: "gridRow"
}), oc = ge({
  prop: "gridAutoFlow"
}), ic = ge({
  prop: "gridAutoColumns"
}), sc = ge({
  prop: "gridAutoRows"
}), ac = ge({
  prop: "gridTemplateColumns"
}), cc = ge({
  prop: "gridTemplateRows"
}), uc = ge({
  prop: "gridTemplateAreas"
}), lc = ge({
  prop: "gridArea"
});
mt(yt, vt, gt, tc, nc, oc, ic, sc, ac, cc, uc, lc);
function dr(e, r) {
  return r === "grey" ? r : e;
}
const fc = ge({
  prop: "color",
  themeKey: "palette",
  transform: dr
}), dc = ge({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: dr
}), pc = ge({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: dr
});
mt(fc, dc, pc);
function Ne(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const mc = ge({
  prop: "width",
  transform: Ne
}), dn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || ln[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ne(t)
      };
    };
    return Be(e, e.maxWidth, r);
  }
  return null;
};
dn.filterProps = ["maxWidth"];
const hc = ge({
  prop: "minWidth",
  transform: Ne
}), yc = ge({
  prop: "height",
  transform: Ne
}), vc = ge({
  prop: "maxHeight",
  transform: Ne
}), gc = ge({
  prop: "minHeight",
  transform: Ne
});
ge({
  prop: "size",
  cssProperty: "width",
  transform: Ne
});
ge({
  prop: "size",
  cssProperty: "height",
  transform: Ne
});
const bc = ge({
  prop: "boxSizing"
});
mt(mc, dn, hc, yc, vc, gc, bc);
const Ec = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ht
  },
  // palette
  color: {
    themeKey: "palette",
    transform: dr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: dr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: dr
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: yt
  },
  rowGap: {
    style: gt
  },
  columnGap: {
    style: vt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ne
  },
  maxWidth: {
    style: dn
  },
  minWidth: {
    transform: Ne
  },
  height: {
    transform: Ne
  },
  maxHeight: {
    transform: Ne
  },
  minHeight: {
    transform: Ne
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, bt = Ec;
function xc(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Tc(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function _c() {
  function e(t, n, o, i) {
    const s = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: l,
      transform: d,
      style: h
    } = c;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const y = ft(o, l) || {};
    return h ? h(s) : Be(s, n, (b) => {
      let m = rt(y, d, b);
      return b === m && typeof b == "string" && (m = rt(y, d, `${t}${b === "default" ? "" : Ce(b)}`, b)), u === !1 ? m : {
        [u]: m
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : bt;
    function c(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const d = Wo(i.breakpoints), h = Object.keys(d);
      let y = d;
      return Object.keys(l).forEach((E) => {
        const b = Tc(l[E], i);
        if (b != null)
          if (typeof b == "object")
            if (s[E])
              y = Pr(y, e(E, b, i, s));
            else {
              const m = Be({
                theme: i
              }, b, (v) => ({
                [E]: v
              }));
              xc(m, b) ? y[E] = r({
                sx: b,
                theme: i
              }) : y = Pr(y, m);
            }
          else
            y = Pr(y, e(E, b, i, s));
      }), qo(h, y);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const Ko = _c();
Ko.filterProps = ["sx"];
const pn = Ko, Sc = ["breakpoints", "palette", "spacing", "shape"];
function Et(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = $e(e, Sc), c = $a(t), u = Ya(o);
  let l = je({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: I({
      mode: "light"
    }, n),
    spacing: u,
    shape: I({}, ka, i)
  }, s);
  return l = r.reduce((d, h) => je(d, h), l), l.unstable_sxConfig = I({}, bt, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(h) {
    return pn({
      sx: h,
      theme: this
    });
  }, l;
}
function Rc(e) {
  return Object.keys(e).length === 0;
}
function Oc(e = null) {
  const r = $.useContext(vr);
  return !r || Rc(r) ? e : r;
}
const Cc = Et();
function wc(e = Cc) {
  return Oc(e);
}
const Pc = ["sx"], $c = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : bt;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Ac(e) {
  const {
    sx: r
  } = e, t = $e(e, Pc), {
    systemProps: n,
    otherProps: o
  } = $c(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...s) => {
    const c = r(...s);
    return qe(c) ? I({}, n, c) : n;
  } : i = I({}, n, r), I({}, o, {
    sx: i
  });
}
function Ho(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Ho(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ke() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Ho(e)) && (n && (n += " "), n += r);
  return n;
}
const kc = ["variant"];
function fo(e) {
  return e.length === 0;
}
function Xo(e) {
  const {
    variant: r
  } = e, t = $e(e, kc);
  let n = r || "";
  return Object.keys(t).sort().forEach((o) => {
    o === "color" ? n += fo(n) ? e[o] : Ce(e[o]) : n += `${fo(n) ? o : Ce(o)}${Ce(e[o].toString())}`;
  }), n;
}
const Nc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function jc(e) {
  return Object.keys(e).length === 0;
}
function Ic(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Mc = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, tt = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = Xo(t.props);
    r[n] = t.style;
  }), r;
}, Dc = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), tt(t);
}, nt = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  return t && t.forEach((i) => {
    let s = !0;
    Object.keys(i.props).forEach((c) => {
      n[c] !== i.props[c] && e[c] !== i.props[c] && (s = !1);
    }), s && o.push(r[Xo(i.props)]);
  }), o;
}, Fc = (e, r, t, n) => {
  var o;
  const i = t == null || (o = t.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return nt(e, r, i);
};
function Jr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vc = Et(), po = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Zr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return jc(r) ? e : r[t] || r;
}
function Lc(e) {
  return e ? (r, t) => t[e] : null;
}
const mo = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const o = e(I({}, r, {
    theme: Zr(I({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = nt(r, tt(i), i);
    return [o, ...s];
  }
  return o;
};
function Jo(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Vc,
    rootShouldForwardProp: n = Jr,
    slotShouldForwardProp: o = Jr
  } = e, i = (s) => pn(I({}, s, {
    theme: Zr(I({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (s, c = {}) => {
    Ca(s, (_) => _.filter((f) => !(f != null && f.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = Lc(po(l))
    } = c, E = $e(c, Nc), b = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), m = h || !1;
    let v;
    process.env.NODE_ENV !== "production" && u && (v = `${u}-${po(l || "Root")}`);
    let S = Jr;
    l === "Root" || l === "root" ? S = n : l ? S = o : Ic(s) && (S = void 0);
    const w = Oa(s, I({
      shouldForwardProp: S,
      label: v
    }, E)), R = (_, ...f) => {
      const j = f ? f.map((A) => {
        if (typeof A == "function" && A.__emotion_real !== A)
          return (H) => mo({
            styledArg: A,
            props: H,
            defaultTheme: t,
            themeId: r
          });
        if (qe(A)) {
          let H = A, J;
          return A && A.variants && (J = A.variants, delete H.variants, H = (X) => {
            let G = A;
            return nt(X, tt(J), J).forEach((ae) => {
              G = je(G, ae);
            }), G;
          }), H;
        }
        return A;
      }) : [];
      let k = _;
      if (qe(_)) {
        let A;
        _ && _.variants && (A = _.variants, delete k.variants, k = (H) => {
          let J = _;
          return nt(H, tt(A), A).forEach((G) => {
            J = je(J, G);
          }), J;
        });
      } else
        typeof _ == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        _.__emotion_real !== _ && (k = (A) => mo({
          styledArg: _,
          props: A,
          defaultTheme: t,
          themeId: r
        }));
      u && y && j.push((A) => {
        const H = Zr(I({}, A, {
          defaultTheme: t,
          themeId: r
        })), J = Mc(u, H);
        if (J) {
          const X = {};
          return Object.entries(J).forEach(([G, le]) => {
            X[G] = typeof le == "function" ? le(I({}, A, {
              theme: H
            })) : le;
          }), y(A, X);
        }
        return null;
      }), u && !b && j.push((A) => {
        const H = Zr(I({}, A, {
          defaultTheme: t,
          themeId: r
        }));
        return Fc(A, Dc(u, H), H, u);
      }), m || j.push(i);
      const pe = j.length - f.length;
      if (Array.isArray(_) && pe > 0) {
        const A = new Array(pe).fill("");
        k = [..._, ...A], k.raw = [..._.raw, ...A];
      }
      const ce = w(k, ...j);
      if (process.env.NODE_ENV !== "production") {
        let A;
        u && (A = `${u}${Ce(l || "")}`), A === void 0 && (A = `Styled(${Ki(s)})`), ce.displayName = A;
      }
      return s.muiName && (ce.muiName = s.muiName), ce;
    };
    return w.withConfig && (R.withConfig = w.withConfig), R;
  };
}
const zc = Jo(), Bc = zc;
function Yc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Jt(r.components[t].defaultProps, n);
}
function Zo({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let o = wc(t);
  return n && (o = o[n] || o), Yc({
    theme: o,
    name: r,
    props: e
  });
}
function mn(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function Uc(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function er(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return er(Uc(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : pr(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : pr(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
function xt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Wc(e) {
  e = er(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), s = (l, d = (l + t / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), xt({
    type: c,
    values: u
  });
}
function ho(e) {
  e = er(e);
  let r = e.type === "hsl" || e.type === "hsla" ? er(Wc(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function yo(e, r) {
  const t = ho(e), n = ho(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Ur(e, r) {
  return e = er(e), r = mn(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, xt(e);
}
function qc(e, r) {
  if (e = er(e), r = mn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return xt(e);
}
function Gc(e, r) {
  if (e = er(e), r = mn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return xt(e);
}
const Kc = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Hc = Et(), Xc = Bc("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, r) => r.root
});
function Jc(e) {
  return Zo({
    props: e,
    name: "MuiStack",
    defaultTheme: Hc
  });
}
function Zc(e, r) {
  const t = $.Children.toArray(e).filter(Boolean);
  return t.reduce((n, o, i) => (n.push(o), i < t.length - 1 && n.push(/* @__PURE__ */ $.cloneElement(r, {
    key: `separator-${i}`
  })), n), []);
}
const Qc = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], eu = ({
  ownerState: e,
  theme: r
}) => {
  let t = I({
    display: "flex",
    flexDirection: "column"
  }, Be({
    theme: r
  }, Dt({
    values: e.direction,
    breakpoints: r.breakpoints.values
  }), (n) => ({
    flexDirection: n
  })));
  if (e.spacing) {
    const n = fn(r), o = Object.keys(r.breakpoints.values).reduce((u, l) => ((typeof e.spacing == "object" && e.spacing[l] != null || typeof e.direction == "object" && e.direction[l] != null) && (u[l] = !0), u), {}), i = Dt({
      values: e.direction,
      base: o
    }), s = Dt({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((u, l, d) => {
      if (!i[u]) {
        const y = l > 0 ? i[d[l - 1]] : "column";
        i[u] = y;
      }
    }), t = je(t, Be({
      theme: r
    }, s, (u, l) => e.useFlexGap ? {
      gap: Qe(n, u)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Qc(l ? i[l] : e.direction)}`]: Qe(n, u)
      }
    }));
  }
  return t = ja(r.breakpoints, t), t;
};
function ru(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = Xc,
    useThemeProps: t = Jc,
    componentName: n = "MuiStack"
  } = e, o = () => Zt({
    root: ["root"]
  }, (u) => jr(n, u), {}), i = r(eu), s = /* @__PURE__ */ $.forwardRef(function(u, l) {
    const d = t(u), h = Ac(d), {
      component: y = "div",
      direction: E = "column",
      spacing: b = 0,
      divider: m,
      children: v,
      className: S,
      useFlexGap: w = !1
    } = h, R = $e(h, Kc), _ = {
      direction: E,
      spacing: b,
      useFlexGap: w
    }, f = o();
    return /* @__PURE__ */ Se.jsx(i, I({
      as: y,
      ownerState: _,
      ref: l,
      className: ke(f.root, S)
    }, R, {
      children: m ? Zc(v, m) : v
    }));
  });
  return process.env.NODE_ENV !== "production" && (s.propTypes = {
    children: p.node,
    direction: p.oneOfType([p.oneOf(["column-reverse", "column", "row-reverse", "row"]), p.arrayOf(p.oneOf(["column-reverse", "column", "row-reverse", "row"])), p.object]),
    divider: p.node,
    spacing: p.oneOfType([p.arrayOf(p.oneOfType([p.number, p.string])), p.number, p.object, p.string]),
    sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object])
  }), s;
}
function tu(e, r) {
  return I({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const nu = {
  black: "#000",
  white: "#fff"
}, Nr = nu, ou = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, iu = ou, su = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, sr = su, au = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ar = au, cu = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Cr = cu, uu = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, cr = uu, lu = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ur = lu, fu = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, lr = fu, du = ["mode", "contrastThreshold", "tonalOffset"], vo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Nr.white,
    default: Nr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ft = {
  text: {
    primary: Nr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Nr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function go(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Gc(e.main, o) : r === "dark" && (e.dark = qc(e.main, i)));
}
function pu(e = "light") {
  return e === "dark" ? {
    main: cr[200],
    light: cr[50],
    dark: cr[400]
  } : {
    main: cr[700],
    light: cr[400],
    dark: cr[800]
  };
}
function mu(e = "light") {
  return e === "dark" ? {
    main: sr[200],
    light: sr[50],
    dark: sr[400]
  } : {
    main: sr[500],
    light: sr[300],
    dark: sr[700]
  };
}
function hu(e = "light") {
  return e === "dark" ? {
    main: ar[500],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[700],
    light: ar[400],
    dark: ar[800]
  };
}
function yu(e = "light") {
  return e === "dark" ? {
    main: ur[400],
    light: ur[300],
    dark: ur[700]
  } : {
    main: ur[700],
    light: ur[500],
    dark: ur[900]
  };
}
function vu(e = "light") {
  return e === "dark" ? {
    main: lr[400],
    light: lr[300],
    dark: lr[700]
  } : {
    main: lr[800],
    light: lr[500],
    dark: lr[900]
  };
}
function gu(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Cr[500],
    dark: Cr[900]
  };
}
function bu(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = $e(e, du), i = e.primary || pu(r), s = e.secondary || mu(r), c = e.error || hu(r), u = e.info || yu(r), l = e.success || vu(r), d = e.warning || gu(r);
  function h(m) {
    const v = yo(m, Ft.text.primary) >= t ? Ft.text.primary : vo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = yo(m, v);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${v} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const y = ({
    color: m,
    name: v,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: R = 700
  }) => {
    if (m = I({}, m), !m.main && m[S] && (m.main = m[S]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : pr(11, v ? ` (${v})` : "", S));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : pr(12, v ? ` (${v})` : "", JSON.stringify(m.main)));
    return go(m, "light", w, n), go(m, "dark", R, n), m.contrastText || (m.contrastText = h(m.main)), m;
  }, E = {
    dark: Ft,
    light: vo
  };
  return process.env.NODE_ENV !== "production" && (E[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), je(I({
    // A collection of common colors.
    common: I({}, Nr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: iu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[r]), o);
}
const Eu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function xu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const bo = {
  textTransform: "uppercase"
}, Eo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Tu(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Eo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = t, y = $e(t, Eu);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, b = h || ((S) => `${S / l * E}rem`), m = (S, w, R, _, f) => I({
    fontFamily: n,
    fontWeight: S,
    fontSize: b(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === Eo ? {
    letterSpacing: `${xu(_ / w)}em`
  } : {}, f, d), v = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(s, 48, 1.167, 0),
    h4: m(s, 34, 1.235, 0.25),
    h5: m(s, 24, 1.334, 0),
    h6: m(c, 20, 1.6, 0.15),
    subtitle1: m(s, 16, 1.75, 0.15),
    subtitle2: m(c, 14, 1.57, 0.1),
    body1: m(s, 16, 1.5, 0.15),
    body2: m(s, 14, 1.43, 0.15),
    button: m(c, 14, 1.75, 0.4, bo),
    caption: m(s, 12, 1.66, 0.4),
    overline: m(s, 12, 2.66, 1, bo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je(I({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: c,
    fontWeightBold: u
  }, v), y, {
    clone: !1
    // No need to clone deep
  });
}
const _u = 0.2, Su = 0.14, Ru = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${_u})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Su})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ru})`].join(",");
}
const Ou = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Cu = Ou, wu = ["duration", "easing", "delay"], Pu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, $u = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function xo(e) {
  return `${Math.round(e)}ms`;
}
function Au(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function ku(e) {
  const r = I({}, Pu, e.easing), t = I({}, $u, e.duration);
  return I({
    getAutoHeightDuration: Au,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0
      } = i, l = $e(i, wu);
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", h = (y) => !isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof s == "string" ? s : xo(s)} ${c} ${typeof u == "string" ? u : xo(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Nu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ju = Nu, Iu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Mu(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = $e(e, Iu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : pr(18));
  const c = bu(n), u = Et(e);
  let l = je(u, {
    mixins: tu(u.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Cu.slice(),
    typography: Tu(c, i),
    transitions: ku(o),
    zIndex: I({}, ju)
  });
  if (l = je(l, s), l = r.reduce((d, h) => je(d, h), l), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (y, E) => {
      let b;
      for (b in y) {
        const m = y[b];
        if (d.indexOf(b) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = jr("", b);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((y) => {
      const E = l.components[y].styleOverrides;
      E && y.indexOf("Mui") === 0 && h(E, y);
    });
  }
  return l.unstable_sxConfig = I({}, bt, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(h) {
    return pn({
      sx: h,
      theme: this
    });
  }, l;
}
const Du = Mu(), Qo = Du, ei = "$$material", ri = (e) => Jr(e) && e !== "classes", Fu = Jo({
  themeId: ei,
  defaultTheme: Qo,
  rootShouldForwardProp: ri
}), rr = Fu;
function Tt({
  props: e,
  name: r
}) {
  return Zo({
    props: e,
    name: r,
    defaultTheme: Qo,
    themeId: ei
  });
}
const ti = ru({
  createStyledComponent: rr("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, r) => r.root
  }),
  useThemeProps: (e) => Tt({
    props: e,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: p.oneOfType([p.oneOf(["column-reverse", "column", "row-reverse", "row"]), p.arrayOf(p.oneOf(["column-reverse", "column", "row-reverse", "row"])), p.object]),
  /**
   * Add an element between each child.
   */
  divider: p.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: p.oneOfType([p.arrayOf(p.oneOfType([p.number, p.string])), p.number, p.object, p.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: p.bool
});
const Vu = ti;
function Kt(e, r) {
  return Kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Kt(e, r);
}
function Lu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Kt(e, r);
}
const To = He.createContext(null);
function zu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hn(e, r) {
  var t = function(i) {
    return r && qr(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Oi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function Bu(e, r) {
  e = e || {}, r = r || {};
  function t(d) {
    return d in r ? r[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, c = {};
  for (var u in r) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var l = n[u][s];
        c[n[u][s]] = t(l);
      }
    c[u] = t(u);
  }
  for (s = 0; s < o.length; s++)
    c[o[s]] = t(o[s]);
  return c;
}
function Ze(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function Yu(e, r) {
  return hn(e.children, function(t) {
    return Gr(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: Ze(t, "appear", e),
      enter: Ze(t, "enter", e),
      exit: Ze(t, "exit", e)
    });
  });
}
function Uu(e, r, t) {
  var n = hn(e.children), o = Bu(r, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (qr(s)) {
      var c = i in r, u = i in n, l = r[i], d = qr(l) && !l.props.in;
      u && (!c || d) ? o[i] = Gr(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }) : !u && c && !d ? o[i] = Gr(s, {
        in: !1
      }) : u && c && qr(l) && (o[i] = Gr(s, {
        onExited: t.bind(null, s),
        in: l.props.in,
        exit: Ze(s, "exit", e),
        enter: Ze(s, "enter", e)
      }));
    }
  }), o;
}
var Wu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, qu = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, yn = /* @__PURE__ */ function(e) {
  Lu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(zu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var s = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? Yu(o, c) : Uu(o, s, c),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var s = hn(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = I({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, c = $e(o, ["component", "childFactory"]), u = this.state.contextValue, l = Wu(this.state.children).map(s);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ He.createElement(To.Provider, {
      value: u
    }, l) : /* @__PURE__ */ He.createElement(To.Provider, {
      value: u
    }, /* @__PURE__ */ He.createElement(i, c, l));
  }, r;
}(He.Component);
yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: p.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: p.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: p.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: p.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: p.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: p.func
} : {};
yn.defaultProps = qu;
const Gu = yn;
function ni(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: c,
    onExited: u,
    timeout: l
  } = e, [d, h] = $.useState(!1), y = ke(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), E = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = ke(t.child, d && t.childLeaving, n && t.childPulsate);
  return !c && !d && h(!0), $.useEffect(() => {
    if (!c && u != null) {
      const m = setTimeout(u, l);
      return () => {
        clearTimeout(m);
      };
    }
  }, [u, c, l]), /* @__PURE__ */ Se.jsx("span", {
    className: y,
    style: E,
    children: /* @__PURE__ */ Se.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (ni.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: p.object.isRequired,
  className: p.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: p.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: p.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: p.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: p.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: p.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: p.number,
  /**
   * exit delay
   */
  timeout: p.number.isRequired
});
const Ku = Qt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), De = Ku, Hu = ["center", "classes", "className"];
let _t = (e) => e, _o, So, Ro, Oo;
const Ht = 550, Xu = 80, Ju = un(_o || (_o = _t`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Zu = un(So || (So = _t`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Qu = un(Ro || (Ro = _t`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), el = rr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), rl = rr(ni, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Oo || (Oo = _t`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), De.rippleVisible, Ju, Ht, ({
  theme: e
}) => e.transitions.easing.easeInOut, De.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, De.child, De.childLeaving, Zu, Ht, ({
  theme: e
}) => e.transitions.easing.easeInOut, De.childPulsate, Qu, ({
  theme: e
}) => e.transitions.easing.easeInOut), oi = /* @__PURE__ */ $.forwardRef(function(r, t) {
  const n = Tt({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, c = $e(n, Hu), [u, l] = $.useState([]), d = $.useRef(0), h = $.useRef(null);
  $.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const y = $.useRef(!1), E = $.useRef(0), b = $.useRef(null), m = $.useRef(null);
  $.useEffect(() => () => {
    E.current && clearTimeout(E.current);
  }, []);
  const v = $.useCallback((_) => {
    const {
      pulsate: f,
      rippleX: j,
      rippleY: k,
      rippleSize: pe,
      cb: ce
    } = _;
    l((A) => [...A, /* @__PURE__ */ Se.jsx(rl, {
      classes: {
        ripple: ke(i.ripple, De.ripple),
        rippleVisible: ke(i.rippleVisible, De.rippleVisible),
        ripplePulsate: ke(i.ripplePulsate, De.ripplePulsate),
        child: ke(i.child, De.child),
        childLeaving: ke(i.childLeaving, De.childLeaving),
        childPulsate: ke(i.childPulsate, De.childPulsate)
      },
      timeout: Ht,
      pulsate: f,
      rippleX: j,
      rippleY: k,
      rippleSize: pe
    }, d.current)]), d.current += 1, h.current = ce;
  }, [i]), S = $.useCallback((_ = {}, f = {}, j = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: pe = o || f.pulsate,
      fakeElement: ce = !1
      // For test purposes
    } = f;
    if ((_ == null ? void 0 : _.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (_ == null ? void 0 : _.type) === "touchstart" && (y.current = !0);
    const A = ce ? null : m.current, H = A ? A.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let J, X, G;
    if (pe || _ === void 0 || _.clientX === 0 && _.clientY === 0 || !_.clientX && !_.touches)
      J = Math.round(H.width / 2), X = Math.round(H.height / 2);
    else {
      const {
        clientX: le,
        clientY: ae
      } = _.touches && _.touches.length > 0 ? _.touches[0] : _;
      J = Math.round(le - H.left), X = Math.round(ae - H.top);
    }
    if (pe)
      G = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3), G % 2 === 0 && (G += 1);
    else {
      const le = Math.max(Math.abs((A ? A.clientWidth : 0) - J), J) * 2 + 2, ae = Math.max(Math.abs((A ? A.clientHeight : 0) - X), X) * 2 + 2;
      G = Math.sqrt(le ** 2 + ae ** 2);
    }
    _ != null && _.touches ? b.current === null && (b.current = () => {
      v({
        pulsate: k,
        rippleX: J,
        rippleY: X,
        rippleSize: G,
        cb: j
      });
    }, E.current = setTimeout(() => {
      b.current && (b.current(), b.current = null);
    }, Xu)) : v({
      pulsate: k,
      rippleX: J,
      rippleY: X,
      rippleSize: G,
      cb: j
    });
  }, [o, v]), w = $.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), R = $.useCallback((_, f) => {
    if (clearTimeout(E.current), (_ == null ? void 0 : _.type) === "touchend" && b.current) {
      b.current(), b.current = null, E.current = setTimeout(() => {
        R(_, f);
      });
      return;
    }
    b.current = null, l((j) => j.length > 0 ? j.slice(1) : j), h.current = f;
  }, []);
  return $.useImperativeHandle(t, () => ({
    pulsate: w,
    start: S,
    stop: R
  }), [w, S, R]), /* @__PURE__ */ Se.jsx(el, I({
    className: ke(De.root, i.root, s),
    ref: m
  }, c, {
    children: /* @__PURE__ */ Se.jsx(Gu, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: p.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string
});
const tl = oi;
function nl(e) {
  return jr("MuiButtonBase", e);
}
const ol = Qt("MuiButtonBase", ["root", "disabled", "focusVisible"]), il = ol, sl = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], al = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Zt({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, nl, o);
  return t && n && (s.root += ` ${n}`), s;
}, cl = rr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${il.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ii = /* @__PURE__ */ $.forwardRef(function(r, t) {
  const n = Tt({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: c,
    component: u = "button",
    disabled: l = !1,
    disableRipple: d = !1,
    disableTouchRipple: h = !1,
    focusRipple: y = !1,
    LinkComponent: E = "a",
    onBlur: b,
    onClick: m,
    onContextMenu: v,
    onDragLeave: S,
    onFocus: w,
    onFocusVisible: R,
    onKeyDown: _,
    onKeyUp: f,
    onMouseDown: j,
    onMouseLeave: k,
    onMouseUp: pe,
    onTouchEnd: ce,
    onTouchMove: A,
    onTouchStart: H,
    tabIndex: J = 0,
    TouchRippleProps: X,
    touchRippleRef: G,
    type: le
  } = n, ae = $e(n, sl), be = $.useRef(null), fe = $.useRef(null), Ae = Ln(fe, G), {
    isFocusVisibleRef: x,
    onFocus: C,
    onBlur: B,
    ref: L
  } = ss(), [N, Y] = $.useState(!1);
  l && N && Y(!1), $.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Y(!0), be.current.focus();
    }
  }), []);
  const [M, F] = $.useState(!1);
  $.useEffect(() => {
    F(!0);
  }, []);
  const z = M && !d && !l;
  $.useEffect(() => {
    N && y && !d && M && fe.current.pulsate();
  }, [d, y, N, M]);
  function D(W, xr, Tr = h) {
    return Br((Vr) => (xr && xr(Vr), !Tr && fe.current && fe.current[W](Vr), !0));
  }
  const U = D("start", j), me = D("stop", v), g = D("stop", S), Ee = D("stop", pe), P = D("stop", (W) => {
    N && W.preventDefault(), k && k(W);
  }), Re = D("start", H), Le = D("stop", ce), Je = D("stop", A), Dr = D("stop", (W) => {
    B(W), x.current === !1 && Y(!1), b && b(W);
  }, !1), tr = Br((W) => {
    be.current || (be.current = W.currentTarget), C(W), x.current === !0 && (Y(!0), R && R(W)), w && w(W);
  }), gr = () => {
    const W = be.current;
    return u && u !== "button" && !(W.tagName === "A" && W.href);
  }, br = $.useRef(!1), Er = Br((W) => {
    y && !br.current && N && fe.current && W.key === " " && (br.current = !0, fe.current.stop(W, () => {
      fe.current.start(W);
    })), W.target === W.currentTarget && gr() && W.key === " " && W.preventDefault(), _ && _(W), W.target === W.currentTarget && gr() && W.key === "Enter" && !l && (W.preventDefault(), m && m(W));
  }), St = Br((W) => {
    y && W.key === " " && fe.current && N && !W.defaultPrevented && (br.current = !1, fe.current.stop(W, () => {
      fe.current.pulsate(W);
    })), f && f(W), m && W.target === W.currentTarget && gr() && W.key === " " && !W.defaultPrevented && m(W);
  });
  let nr = u;
  nr === "button" && (ae.href || ae.to) && (nr = E);
  const Ge = {};
  nr === "button" ? (Ge.type = le === void 0 ? "button" : le, Ge.disabled = l) : (!ae.href && !ae.to && (Ge.role = "button"), l && (Ge["aria-disabled"] = l));
  const Fr = Ln(t, L, be);
  process.env.NODE_ENV !== "production" && $.useEffect(() => {
    z && !fe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [z]);
  const Ke = I({}, n, {
    centerRipple: i,
    component: u,
    disabled: l,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: y,
    tabIndex: J,
    focusVisible: N
  }), Rt = al(Ke);
  return /* @__PURE__ */ Se.jsxs(cl, I({
    as: nr,
    className: ke(Rt.root, c),
    ownerState: Ke,
    onBlur: Dr,
    onClick: m,
    onContextMenu: me,
    onFocus: tr,
    onKeyDown: Er,
    onKeyUp: St,
    onMouseDown: U,
    onMouseLeave: P,
    onMouseUp: Ee,
    onDragLeave: g,
    onTouchEnd: Le,
    onTouchMove: Je,
    onTouchStart: Re,
    ref: Fr,
    tabIndex: l ? -1 : J,
    type: le
  }, Ge, ae, {
    children: [s, z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      Se.jsx(tl, I({
        ref: Ae,
        center: i
      }, X))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Xi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: p.bool,
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Yi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: p.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: p.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: p.string,
  /**
   * @ignore
   */
  href: p.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: p.elementType,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * @ignore
   */
  onContextMenu: p.func,
  /**
   * @ignore
   */
  onDragLeave: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * @ignore
   */
  onMouseDown: p.func,
  /**
   * @ignore
   */
  onMouseLeave: p.func,
  /**
   * @ignore
   */
  onMouseUp: p.func,
  /**
   * @ignore
   */
  onTouchEnd: p.func,
  /**
   * @ignore
   */
  onTouchMove: p.func,
  /**
   * @ignore
   */
  onTouchStart: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @default 0
   */
  tabIndex: p.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: p.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: p.oneOfType([p.func, p.shape({
    current: p.shape({
      pulsate: p.func.isRequired,
      start: p.func.isRequired,
      stop: p.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string])
});
const ul = ii;
function ll(e) {
  return jr("MuiButton", e);
}
const fl = Qt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Wr = fl, si = /* @__PURE__ */ $.createContext({});
process.env.NODE_ENV !== "production" && (si.displayName = "ButtonGroupContext");
const dl = si, ai = /* @__PURE__ */ $.createContext(void 0);
process.env.NODE_ENV !== "production" && (ai.displayName = "ButtonGroupButtonContext");
const pl = ai, ml = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], hl = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, c = {
    root: ["root", i, `${i}${Ce(r)}`, `size${Ce(o)}`, `${i}Size${Ce(o)}`, r === "inherit" && "colorInherit", t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Ce(o)}`],
    endIcon: ["endIcon", `iconSize${Ce(o)}`]
  }, u = Zt(c, ll, s);
  return I({}, s, u);
}, ci = (e) => I({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), yl = rr(ul, {
  shouldForwardProp: (e) => ri(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${Ce(t.color)}`], r[`size${Ce(t.size)}`], r[`${t.variant}Size${Ce(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return I({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": I({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ur(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "text" && r.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ur(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "outlined" && r.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[r.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ur(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, r.variant === "contained" && r.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[r.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[r.color].main
      }
    }),
    "&:active": I({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Wr.focusVisible}`]: I({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Wr.disabled}`]: I({
      color: (e.vars || e).palette.action.disabled
    }, r.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, r.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, r.variant === "text" && {
    padding: "6px 8px"
  }, r.variant === "text" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main
  }, r.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, r.variant === "outlined" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${Ur(e.palette[r.color].main, 0.5)}`
  }, r.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (t = (n = e.palette).getContrastText) == null ? void 0 : t.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, r.variant === "contained" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].contrastText,
    backgroundColor: (e.vars || e).palette[r.color].main
  }, r.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, r.size === "small" && r.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, r.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Wr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Wr.disabled}`]: {
    boxShadow: "none"
  }
}), vl = rr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${Ce(t.size)}`]];
  }
})(({
  ownerState: e
}) => I({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, ci(e))), gl = rr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${Ce(t.size)}`]];
  }
})(({
  ownerState: e
}) => I({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, ci(e))), ui = /* @__PURE__ */ $.forwardRef(function(r, t) {
  const n = $.useContext(dl), o = $.useContext(pl), i = Jt(n, r), s = Tt({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: l = "button",
    className: d,
    disabled: h = !1,
    disableElevation: y = !1,
    disableFocusRipple: E = !1,
    endIcon: b,
    focusVisibleClassName: m,
    fullWidth: v = !1,
    size: S = "medium",
    startIcon: w,
    type: R,
    variant: _ = "text"
  } = s, f = $e(s, ml), j = I({}, s, {
    color: u,
    component: l,
    disabled: h,
    disableElevation: y,
    disableFocusRipple: E,
    fullWidth: v,
    size: S,
    type: R,
    variant: _
  }), k = hl(j), pe = w && /* @__PURE__ */ Se.jsx(vl, {
    className: k.startIcon,
    ownerState: j,
    children: w
  }), ce = b && /* @__PURE__ */ Se.jsx(gl, {
    className: k.endIcon,
    ownerState: j,
    children: b
  }), A = o || "";
  return /* @__PURE__ */ Se.jsxs(yl, I({
    ownerState: j,
    className: ke(n.className, k.root, d, A),
    component: l,
    disabled: h,
    focusRipple: !E,
    focusVisibleClassName: ke(k.focusVisible, m),
    ref: t,
    type: R
  }, f, {
    classes: k,
    children: [pe, c, ce]
  }));
});
process.env.NODE_ENV !== "production" && (ui.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * Element placed after the children.
   */
  endIcon: p.node,
  /**
   * @ignore
   */
  focusVisibleClassName: p.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: p.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: p.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * Element placed before the children.
   */
  startIcon: p.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: p.oneOfType([p.oneOf(["contained", "outlined", "text"]), p.string])
});
const Vt = ui;
function bl() {
  return /* @__PURE__ */ Se.jsxs(Vu, { spacing: 2, direction: "row", children: [
    /* @__PURE__ */ Se.jsx(Vt, { variant: "text", children: "Text" }),
    /* @__PURE__ */ Se.jsx(Vt, { variant: "contained", children: "Contained" }),
    /* @__PURE__ */ Se.jsx(Vt, { variant: "outlined", children: "Outlined" })
  ] });
}
const El = (e) => {
  e && e instanceof Function && import("./web-vitals-civX0870.mjs").then(({ getCLS: r, getFID: t, getFCP: n, getLCP: o, getTTFB: i }) => {
    r(e), t(e), n(e), o(e), i(e);
  });
}, xl = wr.createRoot(
  document.getElementById("root")
);
xl.render(
  /* @__PURE__ */ Se.jsx(He.StrictMode, { children: /* @__PURE__ */ Se.jsx(bl, {}) })
);
El();
