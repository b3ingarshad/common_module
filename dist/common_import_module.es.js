import re from "react";
import fr from "react-dom";
var Q = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function cr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var f = re, E = Symbol.for("react.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), b = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, xe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = te && e[te] || e[xe];
      return typeof r == "function" ? r : null;
    }
    var w = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, $e = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === S || $e || e === C || e === P || e === p || Ie || e === W || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === k || e.$$typeof === b || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case g:
          return "Portal";
        case S:
          return "Profiler";
        case C:
          return "StrictMode";
        case P:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return ae(r) + ".Consumer";
          case k:
            var t = e;
            return ae(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return m(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, oe, ie, ue, se, le, fe, ce;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (D === 0) {
          oe = console.log, ie = console.info, ue = console.warn, se = console.error, le = console.group, fe = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Le() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ie
            }),
            warn: O({}, e, {
              value: ue
            }),
            error: O({}, e, {
              value: se
            }),
            group: O({}, e, {
              value: le
            }),
            groupCollapsed: O({}, e, {
              value: fe
            }),
            groupEnd: O({}, e, {
              value: ce
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = w.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, L;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ve();
    }
    function ve(e, r) {
      if (!e || G)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var R = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, R), R;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = u, Le(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", Se = j ? Y(j) : "";
      return typeof e == "function" && L.set(e, Se), Se;
    }
    function Me(e, r, t) {
      return ve(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case P:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case _:
            return V(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, pe = {}, Ee = w.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var u = Function.call.bind(M);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (U(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in pe) && (pe[a.message] = !0, U(i), d("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var qe = Array.isArray;
    function z(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ge(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var F = w.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, he, K;
    K = {};
    function Ke(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = m(F.current.type);
        K[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(F.current.type), e.ref), K[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          me || (me = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (_e(t), a = "" + t), He(r) && (_e(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Xe(r, i));
        for (u in r)
          M.call(r, u) && !ze.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), v && Qe(o, l);
        }
        return er(e, a, v, i, n, F.current, o);
      }
    }
    var H = w.ReactCurrentOwner, ge = w.ReactDebugCurrentFrame;
    function x(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function ye() {
      {
        if (H.current) {
          var e = m(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + m(e._owner.type) + "."), x(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Te(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && Te(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = m(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            x(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
            break;
          }
        }
        e.ref !== null && (x(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
      }
    }
    function Ce(e, r, t, n, i, u) {
      {
        var o = Ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = tr(i);
          v ? a += v : a += ye();
          var s;
          e === null ? s = "null" : z(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (z(R)) {
                for (var j = 0; j < R.length; j++)
                  Oe(R[j], e);
                Object.freeze && Object.freeze(R);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(R, e);
        }
        return e === y ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    A.Fragment = y, A.jsx = sr, A.jsxs = lr;
  }()), A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dr() {
  if (we)
    return I;
  we = 1;
  var f = re, E = Symbol.for("react.element"), g = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, C = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(b, c, P) {
    var p, _ = {}, T = null, W = null;
    P !== void 0 && (T = "" + P), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (p in c)
      y.call(c, p) && !S.hasOwnProperty(p) && (_[p] = c[p]);
    if (b && b.defaultProps)
      for (p in c = b.defaultProps, c)
        _[p] === void 0 && (_[p] = c[p]);
    return { $$typeof: E, type: b, key: T, ref: W, props: _, _owner: C.current };
  }
  return I.Fragment = g, I.jsx = k, I.jsxs = k, I;
}
process.env.NODE_ENV === "production" ? Q.exports = dr() : Q.exports = cr();
var ee = Q.exports, N = {}, $ = fr;
if (process.env.NODE_ENV === "production")
  N.createRoot = $.createRoot, N.hydrateRoot = $.hydrateRoot;
else {
  var B = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  N.createRoot = function(f, E) {
    B.usingClientEntryPoint = !0;
    try {
      return $.createRoot(f, E);
    } finally {
      B.usingClientEntryPoint = !1;
    }
  }, N.hydrateRoot = function(f, E, g) {
    B.usingClientEntryPoint = !0;
    try {
      return $.hydrateRoot(f, E, g);
    } finally {
      B.usingClientEntryPoint = !1;
    }
  };
}
const vr = (f) => {
  f && f instanceof Function && import("./web-vitals-civX0870.mjs").then(({ getCLS: E, getFID: g, getFCP: y, getLCP: C, getTTFB: S }) => {
    E(f), g(f), y(f), C(f), S(f);
  });
}, pr = ({
  portletNamespace: f,
  contextPath: E,
  portletElementId: g
}) => /* @__PURE__ */ ee.jsx("div", {}), Er = N.createRoot(
  document.getElementById("root")
);
Er.render(
  /* @__PURE__ */ ee.jsx(re.StrictMode, { children: /* @__PURE__ */ ee.jsx(
    pr,
    {
      portletNamespace: "yourPortletNamespace",
      contextPath: "yourContextPath",
      portletElementId: "yourPortletElementId"
    }
  ) })
);
vr();
