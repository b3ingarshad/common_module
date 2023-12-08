(function(P,I){typeof exports=="object"&&typeof module<"u"?I(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["react","react-dom"],I):(P=typeof globalThis<"u"?globalThis:P||self,I(P.React,P.ReactDOM))})(this,function(P,I){"use strict";var ne={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function Xe(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var n=P,a=Symbol.for("react.element"),u=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),Ce=Symbol.iterator,sr="@@iterator";function cr(e){if(e===null||typeof e!="object")return null;var r=Ce&&e[Ce]||e[sr];return typeof r=="function"?r:null}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];fr("error",e,t)}}function fr(e,r,t){{var o=D.ReactDebugCurrentFrame,v=o.getStackAddendum();v!==""&&(r+="%s",t=t.concat([v]));var m=t.map(function(f){return String(f)});m.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,m)}}var lr=!1,dr=!1,vr=!1,pr=!1,mr=!1,Oe;Oe=Symbol.for("react.module.reference");function hr(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===p||mr||e===i||e===g||e===b||pr||e===X||lr||dr||vr||typeof e=="object"&&e!==null&&(e.$$typeof===F||e.$$typeof===S||e.$$typeof===c||e.$$typeof===h||e.$$typeof===d||e.$$typeof===Oe||e.getModuleId!==void 0))}function gr(e,r,t){var o=e.displayName;if(o)return o;var v=r.displayName||r.name||"";return v!==""?t+"("+v+")":t}function Pe(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case u:return"Portal";case p:return"Profiler";case i:return"StrictMode";case g:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h:var r=e;return Pe(r)+".Consumer";case c:var t=e;return Pe(t._context)+".Provider";case d:return gr(e,e.render,"ForwardRef");case S:var o=e.displayName||null;return o!==null?o:C(e.type)||"Memo";case F:{var v=e,m=v._payload,f=v._init;try{return C(f(m))}catch{return null}}}return null}var k=Object.assign,q=0,xe,je,Fe,ke,De,Le,Ae;function Ie(){}Ie.__reactDisabledLog=!0;function yr(){{if(q===0){xe=console.log,je=console.info,Fe=console.warn,ke=console.error,De=console.group,Le=console.groupCollapsed,Ae=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function Er(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:xe}),info:k({},e,{value:je}),warn:k({},e,{value:Fe}),error:k({},e,{value:ke}),group:k({},e,{value:De}),groupCollapsed:k({},e,{value:Le}),groupEnd:k({},e,{value:Ae})})}q<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var se=D.ReactCurrentDispatcher,ce;function Z(e,r,t){{if(ce===void 0)try{throw Error()}catch(v){var o=v.stack.trim().match(/\n( *(at )?)/);ce=o&&o[1]||""}return`
`+ce+e}}var fe=!1,Q;{var br=typeof WeakMap=="function"?WeakMap:Map;Q=new br}function Ne(e,r){if(!e||fe)return"";{var t=Q.get(e);if(t!==void 0)return t}var o;fe=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var m;m=se.current,se.current=null,yr();try{if(r){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(O){o=O}Reflect.construct(e,[],f)}else{try{f.call()}catch(O){o=O}e.call(f.prototype)}}else{try{throw Error()}catch(O){o=O}e()}}catch(O){if(O&&o&&typeof O.stack=="string"){for(var s=O.stack.split(`
`),_=o.stack.split(`
`),y=s.length-1,E=_.length-1;y>=1&&E>=0&&s[y]!==_[E];)E--;for(;y>=1&&E>=0;y--,E--)if(s[y]!==_[E]){if(y!==1||E!==1)do if(y--,E--,E<0||s[y]!==_[E]){var T=`
`+s[y].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&Q.set(e,T),T}while(y>=1&&E>=0);break}}}finally{fe=!1,se.current=m,Er(),Error.prepareStackTrace=v}var A=e?e.displayName||e.name:"",Ke=A?Z(A):"";return typeof e=="function"&&Q.set(e,Ke),Ke}function Rr(e,r,t){return Ne(e,!1)}function _r(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ee(e,r,t){if(e==null)return"";if(typeof e=="function")return Ne(e,_r(e));if(typeof e=="string")return Z(e);switch(e){case g:return Z("Suspense");case b:return Z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Rr(e.render);case S:return ee(e.type,r,t);case F:{var o=e,v=o._payload,m=o._init;try{return ee(m(v),r,t)}catch{}}}return""}var re=Object.prototype.hasOwnProperty,We={},Ye=D.ReactDebugCurrentFrame;function te(e){if(e){var r=e._owner,t=ee(e.type,e._source,r?r.type:null);Ye.setExtraStackFrame(t)}else Ye.setExtraStackFrame(null)}function Tr(e,r,t,o,v){{var m=Function.call.bind(re);for(var f in e)if(m(e,f)){var s=void 0;try{if(typeof e[f]!="function"){var _=Error((o||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw _.name="Invariant Violation",_}s=e[f](r,f,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){s=y}s&&!(s instanceof Error)&&(te(v),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,f,typeof s),te(null)),s instanceof Error&&!(s.message in We)&&(We[s.message]=!0,te(v),R("Failed %s type: %s",t,s.message),te(null))}}}var Sr=Array.isArray;function le(e){return Sr(e)}function wr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Cr(e){try{return Me(e),!1}catch{return!0}}function Me(e){return""+e}function Ve(e){if(Cr(e))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",wr(e)),Me(e)}var J=D.ReactCurrentOwner,Or={key:!0,ref:!0,__self:!0,__source:!0},Ue,$e,de;de={};function Pr(e){if(re.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function xr(e){if(re.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function jr(e,r){if(typeof e.ref=="string"&&J.current&&r&&J.current.stateNode!==r){var t=C(J.current.type);de[t]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(J.current.type),e.ref),de[t]=!0)}}function Fr(e,r){{var t=function(){Ue||(Ue=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function kr(e,r){{var t=function(){$e||($e=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Dr=function(e,r,t,o,v,m,f){var s={$$typeof:a,type:e,key:r,ref:t,props:f,_owner:m};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function Lr(e,r,t,o,v){{var m,f={},s=null,_=null;t!==void 0&&(Ve(t),s=""+t),xr(r)&&(Ve(r.key),s=""+r.key),Pr(r)&&(_=r.ref,jr(r,v));for(m in r)re.call(r,m)&&!Or.hasOwnProperty(m)&&(f[m]=r[m]);if(e&&e.defaultProps){var y=e.defaultProps;for(m in y)f[m]===void 0&&(f[m]=y[m])}if(s||_){var E=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&Fr(f,E),_&&kr(f,E)}return Dr(e,s,_,v,o,J.current,f)}}var ve=D.ReactCurrentOwner,Be=D.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,t=ee(e.type,e._source,r?r.type:null);Be.setExtraStackFrame(t)}else Be.setExtraStackFrame(null)}var pe;pe=!1;function me(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function qe(){{if(ve.current){var e=C(ve.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ar(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Je={};function Ir(e){{var r=qe();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function He(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Ir(r);if(Je[t])return;Je[t]=!0;var o="";e&&e._owner&&e._owner!==ve.current&&(o=" It was passed a child from "+C(e._owner.type)+"."),L(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),L(null)}}function ze(e,r){{if(typeof e!="object")return;if(le(e))for(var t=0;t<e.length;t++){var o=e[t];me(o)&&He(o,r)}else if(me(e))e._store&&(e._store.validated=!0);else if(e){var v=cr(e);if(typeof v=="function"&&v!==e.entries)for(var m=v.call(e),f;!(f=m.next()).done;)me(f.value)&&He(f.value,r)}}}function Nr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===S))t=r.propTypes;else return;if(t){var o=C(r);Tr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!pe){pe=!0;var v=C(r);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Wr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){L(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),L(null);break}}e.ref!==null&&(L(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function Ge(e,r,t,o,v,m){{var f=hr(e);if(!f){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var _=Ar(v);_?s+=_:s+=qe();var y;e===null?y="null":le(e)?y="array":e!==void 0&&e.$$typeof===a?(y="<"+(C(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,s)}var E=Lr(e,r,t,v,m);if(E==null)return E;if(f){var T=r.children;if(T!==void 0)if(o)if(le(T)){for(var A=0;A<T.length;A++)ze(T[A],e);Object.freeze&&Object.freeze(T)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ze(T,e)}return e===l?Wr(E):Nr(E),E}}function Yr(e,r,t){return Ge(e,r,t,!0)}function Mr(e,r,t){return Ge(e,r,t,!1)}var Vr=Mr,Ur=Yr;N.Fragment=l,N.jsx=Vr,N.jsxs=Ur}()),N}var W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function Ze(){if(ge)return W;ge=1;var n=P,a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(h,d,g){var b,S={},F=null,X=null;g!==void 0&&(F=""+g),d.key!==void 0&&(F=""+d.key),d.ref!==void 0&&(X=d.ref);for(b in d)l.call(d,b)&&!p.hasOwnProperty(b)&&(S[b]=d[b]);if(h&&h.defaultProps)for(b in d=h.defaultProps,d)S[b]===void 0&&(S[b]=d[b]);return{$$typeof:a,type:h,key:F,ref:X,props:S,_owner:i.current}}return W.Fragment=u,W.jsx=c,W.jsxs=c,W}process.env.NODE_ENV==="production"?ne.exports=Ze():ne.exports=Xe();var ae=ne.exports,Y={},M=I;if(process.env.NODE_ENV==="production")Y.createRoot=M.createRoot,Y.hydrateRoot=M.hydrateRoot;else{var H=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Y.createRoot=function(n,a){H.usingClientEntryPoint=!0;try{return M.createRoot(n,a)}finally{H.usingClientEntryPoint=!1}},Y.hydrateRoot=function(n,a,u){H.usingClientEntryPoint=!0;try{return M.hydrateRoot(n,a,u)}finally{H.usingClientEntryPoint=!1}}}const Qe=n=>{n&&n instanceof Function&&Promise.resolve().then(()=>ur).then(({getCLS:a,getFID:u,getFCP:l,getLCP:i,getTTFB:p})=>{a(n),u(n),l(n),i(n),p(n)})},er=({portletNamespace:n,contextPath:a,portletElementId:u})=>ae.jsx("div",{});Y.createRoot(document.getElementById("root")).render(ae.jsx(P.StrictMode,{children:ae.jsx(er,{portletNamespace:"yourPortletNamespace",contextPath:"yourContextPath",portletElementId:"yourPortletElementId"})})),Qe();var x,V,ye,z,w=function(n,a){return{name:n,value:a===void 0?-1:a,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},G=function(n,a){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){if(n==="first-input"&&!("PerformanceEventTiming"in self))return;var u=new PerformanceObserver(function(l){return l.getEntries().map(a)});return u.observe({type:n,buffered:!0}),u}}catch{}},K=function(n,a){var u=function l(i){i.type!=="pagehide"&&document.visibilityState!=="hidden"||(n(i),a&&(removeEventListener("visibilitychange",l,!0),removeEventListener("pagehide",l,!0)))};addEventListener("visibilitychange",u,!0),addEventListener("pagehide",u,!0)},U=function(n){addEventListener("pageshow",function(a){a.persisted&&n(a)},!0)},j=function(n,a,u){var l;return function(i){a.value>=0&&(i||u)&&(a.delta=a.value-(l||0),(a.delta||l===void 0)&&(l=a.value,n(a)))}},$=-1,Ee=function(){return document.visibilityState==="hidden"?0:1/0},be=function(){K(function(n){var a=n.timeStamp;$=a},!0)},ie=function(){return $<0&&($=Ee(),be(),U(function(){setTimeout(function(){$=Ee(),be()},0)})),{get firstHiddenTime(){return $}}},Re=function(n,a){var u,l=ie(),i=w("FCP"),p=function(d){d.name==="first-contentful-paint"&&(h&&h.disconnect(),d.startTime<l.firstHiddenTime&&(i.value=d.startTime,i.entries.push(d),u(!0)))},c=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],h=c?null:G("paint",p);(c||h)&&(u=j(n,i,a),c&&p(c),U(function(d){i=w("FCP"),u=j(n,i,a),requestAnimationFrame(function(){requestAnimationFrame(function(){i.value=performance.now()-d.timeStamp,u(!0)})})}))},_e=!1,oe=-1,rr=function(n,a){_e||(Re(function(g){oe=g.value}),_e=!0);var u,l=function(g){oe>-1&&n(g)},i=w("CLS",0),p=0,c=[],h=function(g){if(!g.hadRecentInput){var b=c[0],S=c[c.length-1];p&&g.startTime-S.startTime<1e3&&g.startTime-b.startTime<5e3?(p+=g.value,c.push(g)):(p=g.value,c=[g]),p>i.value&&(i.value=p,i.entries=c,u())}},d=G("layout-shift",h);d&&(u=j(l,i,a),K(function(){d.takeRecords().map(h),u(!0)}),U(function(){p=0,oe=-1,i=w("CLS",0),u=j(l,i,a)}))},B={passive:!0,capture:!0},tr=new Date,Te=function(n,a){x||(x=a,V=n,ye=new Date,we(removeEventListener),Se())},Se=function(){if(V>=0&&V<ye-tr){var n={entryType:"first-input",name:x.type,target:x.target,cancelable:x.cancelable,startTime:x.timeStamp,processingStart:x.timeStamp+V};z.forEach(function(a){a(n)}),z=[]}},nr=function(n){if(n.cancelable){var a=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;n.type=="pointerdown"?function(u,l){var i=function(){Te(u,l),c()},p=function(){c()},c=function(){removeEventListener("pointerup",i,B),removeEventListener("pointercancel",p,B)};addEventListener("pointerup",i,B),addEventListener("pointercancel",p,B)}(a,n):Te(a,n)}},we=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach(function(a){return n(a,nr,B)})},ar=function(n,a){var u,l=ie(),i=w("FID"),p=function(h){h.startTime<l.firstHiddenTime&&(i.value=h.processingStart-h.startTime,i.entries.push(h),u(!0))},c=G("first-input",p);u=j(n,i,a),c&&K(function(){c.takeRecords().map(p),c.disconnect()},!0),c&&U(function(){var h;i=w("FID"),u=j(n,i,a),z=[],V=-1,x=null,we(addEventListener),h=p,z.push(h),Se()})},ue={},ir=function(n,a){var u,l=ie(),i=w("LCP"),p=function(d){var g=d.startTime;g<l.firstHiddenTime&&(i.value=g,i.entries.push(d),u())},c=G("largest-contentful-paint",p);if(c){u=j(n,i,a);var h=function(){ue[i.id]||(c.takeRecords().map(p),c.disconnect(),ue[i.id]=!0,u(!0))};["keydown","click"].forEach(function(d){addEventListener(d,h,{once:!0,capture:!0})}),K(h,!0),U(function(d){i=w("LCP"),u=j(n,i,a),requestAnimationFrame(function(){requestAnimationFrame(function(){i.value=performance.now()-d.timeStamp,ue[i.id]=!0,u(!0)})})})}},or=function(n){var a,u=w("TTFB");a=function(){try{var l=performance.getEntriesByType("navigation")[0]||function(){var i=performance.timing,p={entryType:"navigation",startTime:0};for(var c in i)c!=="navigationStart"&&c!=="toJSON"&&(p[c]=Math.max(i[c]-i.navigationStart,0));return p}();if(u.value=u.delta=l.responseStart,u.value<0||u.value>performance.now())return;u.entries=[l],n(u)}catch{}},document.readyState==="complete"?setTimeout(a,0):addEventListener("load",function(){return setTimeout(a,0)})};const ur=Object.freeze(Object.defineProperty({__proto__:null,getCLS:rr,getFCP:Re,getFID:ar,getLCP:ir,getTTFB:or},Symbol.toStringTag,{value:"Module"}))});
