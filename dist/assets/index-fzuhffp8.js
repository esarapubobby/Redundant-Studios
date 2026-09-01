function Wb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Hb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},Gu={},p_={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),qb=Symbol.for("react.portal"),Gb=Symbol.for("react.fragment"),Kb=Symbol.for("react.strict_mode"),Qb=Symbol.for("react.profiler"),Yb=Symbol.for("react.provider"),Xb=Symbol.for("react.context"),Jb=Symbol.for("react.forward_ref"),Zb=Symbol.for("react.suspense"),eS=Symbol.for("react.memo"),tS=Symbol.for("react.lazy"),Yg=Symbol.iterator;function nS(t){return t===null||typeof t!="object"?null:(t=Yg&&t[Yg]||t["@@iterator"],typeof t=="function"?t:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,y_={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||m_}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v_(){}v_.prototype=Ps.prototype;function $h(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||m_}var Bh=$h.prototype=new v_;Bh.constructor=$h;g_(Bh,Ps.prototype);Bh.isPureReactComponent=!0;var Xg=Array.isArray,__=Object.prototype.hasOwnProperty,Wh={current:null},w_={key:!0,ref:!0,__self:!0,__source:!0};function x_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)__.call(e,r)&&!w_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ya,type:t,key:s,ref:o,props:i,_owner:Wh.current}}function rS(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function iS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jg=/\/+/g;function md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iS(""+t.key):e.toString(36)}function Pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case qb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+md(o,0):r,Xg(i)?(n="",t!=null&&(n=t.replace(Jg,"$&/")+"/"),Pl(i,e,n,"",function(c){return c})):i!=null&&(Hh(i)&&(i=rS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xg(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+md(s,a);o+=Pl(s,e,n,u,i)}else if(u=nS(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+md(s,a++),o+=Pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},Nl={transition:null},oS={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:Wh};function E_(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ps;ae.Fragment=Gb;ae.Profiler=Qb;ae.PureComponent=$h;ae.StrictMode=Kb;ae.Suspense=Zb;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;ae.act=E_;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)__.call(e,u)&&!w_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ya,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Xb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yb,_context:t},t.Consumer=t};ae.createElement=x_;ae.createFactory=function(t){var e=x_.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Jb,render:t}};ae.isValidElement=Hh;ae.lazy=function(t){return{$$typeof:tS,_payload:{_status:-1,_result:t},_init:sS}};ae.memo=function(t,e){return{$$typeof:eS,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};ae.unstable_act=E_;ae.useCallback=function(t,e){return bt.current.useCallback(t,e)};ae.useContext=function(t){return bt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return bt.current.useEffect(t,e)};ae.useId=function(){return bt.current.useId()};ae.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return bt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ae.useRef=function(t){return bt.current.useRef(t)};ae.useState=function(t){return bt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return bt.current.useTransition()};ae.version="18.3.1";p_.exports=ae;var M=p_.exports;const va=Hb(M),aS=Wb({__proto__:null,default:va},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=M,uS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),dS=Object.prototype.hasOwnProperty,fS=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hS={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dS.call(e,r)&&!hS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uS,type:t,key:s,ref:o,props:i,_owner:fS.current}}Gu.Fragment=cS;Gu.jsx=T_;Gu.jsxs=T_;h_.exports=Gu;var f=h_.exports,sf={},b_={exports:{}},Bt={},S_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,te){var se=q.length;q.push(te);e:for(;0<se;){var Ae=se-1>>>1,ge=q[Ae];if(0<i(ge,te))q[Ae]=te,q[se]=ge,se=Ae;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var te=q[0],se=q.pop();if(se!==te){q[0]=se;e:for(var Ae=0,ge=q.length,Le=ge>>>1;Ae<Le;){var An=2*(Ae+1)-1,kn=q[An],Cn=An+1,Rn=q[Cn];if(0>i(kn,se))Cn<ge&&0>i(Rn,kn)?(q[Ae]=Rn,q[Cn]=se,Ae=Cn):(q[Ae]=kn,q[An]=se,Ae=An);else if(Cn<ge&&0>i(Rn,se))q[Ae]=Rn,q[Cn]=se,Ae=Cn;else break e}}return te}function i(q,te){var se=q.sortIndex-te.sortIndex;return se!==0?se:q.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,p=null,g=3,_=!1,C=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=q)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function L(q){if(k=!1,S(q),!C)if(n(u)!==null)C=!0,ie(U);else{var te=n(c);te!==null&&pn(L,te.startTime-q)}}function U(q,te){C=!1,k&&(k=!1,E(v),v=-1),_=!0;var se=g;try{for(S(te),p=n(u);p!==null&&(!(p.expirationTime>te)||q&&!P());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,g=p.priorityLevel;var ge=Ae(p.expirationTime<=te);te=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(u)&&r(u),S(te)}else r(u);p=n(u)}if(p!==null)var Le=!0;else{var An=n(c);An!==null&&pn(L,An.startTime-te),Le=!1}return Le}finally{p=null,g=se,_=!1}}var W=!1,b=null,v=-1,T=5,I=-1;function P(){return!(t.unstable_now()-I<T)}function N(){if(b!==null){var q=t.unstable_now();I=q;var te=!0;try{te=b(!0,q)}finally{te?A():(W=!1,b=null)}}else W=!1}var A;if(typeof x=="function")A=function(){x(N)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,hn=It.port2;It.port1.onmessage=N,A=function(){hn.postMessage(null)}}else A=function(){R(N,0)};function ie(q){b=q,W||(W=!0,A())}function pn(q,te){v=R(function(){q(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){C||_||(C=!0,ie(U))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var se=g;g=te;try{return q()}finally{g=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,te){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=g;g=q;try{return te()}finally{g=se}},t.unstable_scheduleCallback=function(q,te,se){var Ae=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Ae+se:Ae):se=Ae,q){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=se+ge,q={id:h++,callback:te,priorityLevel:q,startTime:se,expirationTime:ge,sortIndex:-1},se>Ae?(q.sortIndex=se,e(c,q),n(u)===null&&q===n(c)&&(k?(E(v),v=-1):k=!0,pn(L,se-Ae))):(q.sortIndex=ge,e(u,q),C||_||(C=!0,ie(U))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var te=g;return function(){var se=g;g=te;try{return q.apply(this,arguments)}finally{g=se}}}})(I_);S_.exports=I_;var pS=S_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mS=M,zt=pS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A_=new Set,zo={};function Ii(t,e){hs(t,e),hs(t+"Capture",e)}function hs(t,e){for(zo[t]=e,t=0;t<e.length;t++)A_.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,gS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zg={},ey={};function yS(t){return of.call(ey,t)?!0:of.call(Zg,t)?!1:gS.test(t)?ey[t]=!0:(Zg[t]=!0,!1)}function vS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _S(t,e,n,r){if(e===null||typeof e>"u"||vS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qh,Gh);st[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qh,Gh);st[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qh,Gh);st[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kh(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_S(e,n,i,r)&&(n=null),r||i===null?yS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=mS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),Yh=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),ty=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,gd;function ho(t){if(gd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gd=e&&e[1]||""}return`
`+gd+t}var yd=!1;function vd(t,e){if(!t||yd)return"";yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function wS(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=vd(t.type,!1),t;case 11:return t=vd(t.type.render,!1),t;case 1:return t=vd(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case $i:return"Portal";case af:return"Profiler";case Qh:return"StrictMode";case lf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C_:return(t.displayName||"Context")+".Consumer";case k_:return(t._context.displayName||"Context")+".Provider";case Yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function xS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===Qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ES(t){var e=P_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=ES(t))}function N_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(t,e){e=e.checked,e!=null&&Kh(t,"checked",e,!1)}function ff(t,e){D_(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(po(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function j_(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,L_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TS=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){TS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function F_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var bS=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(bS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _f=null,rs=null,is=null;function oy(t){if(t=xa(t)){if(typeof _f!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Ju(e),_f(t.stateNode,t.type,e))}}function V_(t){rs?is?is.push(t):is=[t]:rs=t}function U_(){if(rs){var t=rs,e=is;if(is=rs=null,oy(t),e)for(t=0;t<e.length;t++)oy(e[t])}}function z_(t,e){return t(e)}function $_(){}var _d=!1;function B_(t,e,n){if(_d)return t(e,n);_d=!0;try{return z_(t,e,n)}finally{_d=!1,(rs!==null||is!==null)&&($_(),U_())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ju(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var wf=!1;if(Wn)try{var io={};Object.defineProperty(io,"passive",{get:function(){wf=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{wf=!1}function SS(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var So=!1,nu=null,ru=!1,xf=null,IS={onError:function(t){So=!0,nu=t}};function AS(t,e,n,r,i,s,o,a,u){So=!1,nu=null,SS.apply(IS,arguments)}function kS(t,e,n,r,i,s,o,a,u){if(AS.apply(this,arguments),So){if(So){var c=nu;So=!1,nu=null}else throw Error(z(198));ru||(ru=!0,xf=c)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ay(t){if(Ai(t)!==t)throw Error(z(188))}function CS(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ay(i),t;if(s===r)return ay(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function H_(t){return t=CS(t),t!==null?q_(t):null}function q_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q_(t);if(e!==null)return e;t=t.sibling}return null}var G_=zt.unstable_scheduleCallback,ly=zt.unstable_cancelCallback,RS=zt.unstable_shouldYield,PS=zt.unstable_requestPaint,Fe=zt.unstable_now,NS=zt.unstable_getCurrentPriorityLevel,Zh=zt.unstable_ImmediatePriority,K_=zt.unstable_UserBlockingPriority,iu=zt.unstable_NormalPriority,DS=zt.unstable_LowPriority,Q_=zt.unstable_IdlePriority,Ku=null,_n=null;function jS(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:MS,OS=Math.log,LS=Math.LN2;function MS(t){return t>>>=0,t===0?32:31-(OS(t)/LS|0)|0}var al=64,ll=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=mo(a):(s&=o,s!==0&&(r=mo(s)))}else o=n&~i,o!==0?r=mo(o):s!==0&&(r=mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function FS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=FS(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y_(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function US(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function X_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,tp,Z_,ew,tw,Tf=!1,ul=[],br=null,Sr=null,Ir=null,Wo=new Map,Ho=new Map,pr=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xa(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $S(t,e,n,r,i){switch(e){case"focusin":return br=so(br,t,e,n,r,i),!0;case"dragenter":return Sr=so(Sr,t,e,n,r,i),!0;case"mouseover":return Ir=so(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,so(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,so(Ho.get(s)||null,t,e,n,r,i)),!0}return!1}function nw(t){var e=oi(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=W_(n),e!==null){t.blockedOn=e,tw(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=xa(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function cy(t,e,n){Dl(t)&&n.delete(e)}function BS(){Tf=!1,br!==null&&Dl(br)&&(br=null),Sr!==null&&Dl(Sr)&&(Sr=null),Ir!==null&&Dl(Ir)&&(Ir=null),Wo.forEach(cy),Ho.forEach(cy)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,BS)))}function qo(t){function e(i){return oo(i,t)}if(0<ul.length){oo(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&oo(br,t),Sr!==null&&oo(Sr,t),Ir!==null&&oo(Ir,t),Wo.forEach(e),Ho.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)nw(n),n.blockedOn===null&&pr.shift()}var ss=nr.ReactCurrentBatchConfig,ou=!0;function WS(t,e,n,r){var i=pe,s=ss.transition;ss.transition=null;try{pe=1,np(t,e,n,r)}finally{pe=i,ss.transition=s}}function HS(t,e,n,r){var i=pe,s=ss.transition;ss.transition=null;try{pe=4,np(t,e,n,r)}finally{pe=i,ss.transition=s}}function np(t,e,n,r){if(ou){var i=bf(t,e,n,r);if(i===null)Rd(t,e,r,au,n),uy(t,r);else if($S(i,t,e,n,r))r.stopPropagation();else if(uy(t,r),e&4&&-1<zS.indexOf(t)){for(;i!==null;){var s=xa(i);if(s!==null&&J_(s),s=bf(t,e,n,r),s===null&&Rd(t,e,r,au,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rd(t,e,r,null,n)}}var au=null;function bf(t,e,n,r){if(au=null,t=Jh(r),t=oi(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case Zh:return 1;case K_:return 4;case iu:case DS:return 16;case Q_:return 536870912;default:return 16}default:return 16}}var wr=null,rp=null,jl=null;function iw(){if(jl)return jl;var t,e=rp,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jl=i.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function dy(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:dy,this.isPropagationStopped=dy,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=Wt(Ns),wa=Re({},Ns,{view:0,detail:0}),qS=Wt(wa),xd,Ed,ao,Qu=Re({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(xd=t.screenX-ao.screenX,Ed=t.screenY-ao.screenY):Ed=xd=0,ao=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Ed}}),fy=Wt(Qu),GS=Re({},Qu,{dataTransfer:0}),KS=Wt(GS),QS=Re({},wa,{relatedTarget:0}),Td=Wt(QS),YS=Re({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Wt(YS),JS=Re({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZS=Wt(JS),eI=Re({},Ns,{data:0}),hy=Wt(eI),tI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rI[t])?!!e[t]:!1}function sp(){return iI}var sI=Re({},wa,{key:function(t){if(t.key){var e=tI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oI=Wt(sI),aI=Re({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),py=Wt(aI),lI=Re({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),uI=Wt(lI),cI=Re({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),dI=Wt(cI),fI=Re({},Qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hI=Wt(fI),pI=[9,13,27,32],op=Wn&&"CompositionEvent"in window,Io=null;Wn&&"documentMode"in document&&(Io=document.documentMode);var mI=Wn&&"TextEvent"in window&&!Io,sw=Wn&&(!op||Io&&8<Io&&11>=Io),my=" ",gy=!1;function ow(t,e){switch(t){case"keyup":return pI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function gI(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(gy=!0,my);case"textInput":return t=e.data,t===my&&gy?null:t;default:return null}}function yI(t,e){if(Wi)return t==="compositionend"||!op&&ow(t,e)?(t=iw(),jl=rp=wr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sw&&e.locale!=="ko"?null:e.data;default:return null}}var vI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vI[t.type]:e==="textarea"}function lw(t,e,n,r){V_(r),e=lu(e,"onChange"),0<e.length&&(n=new ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ao=null,Go=null;function _I(t){_w(t,0)}function Yu(t){var e=Gi(t);if(N_(e))return t}function wI(t,e){if(t==="change")return e}var uw=!1;if(Wn){var bd;if(Wn){var Sd="oninput"in document;if(!Sd){var vy=document.createElement("div");vy.setAttribute("oninput","return;"),Sd=typeof vy.oninput=="function"}bd=Sd}else bd=!1;uw=bd&&(!document.documentMode||9<document.documentMode)}function _y(){Ao&&(Ao.detachEvent("onpropertychange",cw),Go=Ao=null)}function cw(t){if(t.propertyName==="value"&&Yu(Go)){var e=[];lw(e,Go,t,Jh(t)),B_(_I,e)}}function xI(t,e,n){t==="focusin"?(_y(),Ao=e,Go=n,Ao.attachEvent("onpropertychange",cw)):t==="focusout"&&_y()}function EI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(Go)}function TI(t,e){if(t==="click")return Yu(e)}function bI(t,e){if(t==="input"||t==="change")return Yu(e)}function SI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:SI;function Ko(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(e,i)||!un(t[i],e[i]))return!1}return!0}function wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xy(t,e){var n=wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wy(n)}}function dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fw(){for(var t=window,e=tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tu(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function II(t){var e=fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dw(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=xy(n,s);var o=xy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AI=Wn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Sf=null,ko=null,If=!1;function Ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Hi==null||Hi!==tu(r)||(r=Hi,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Ko(ko,r)||(ko=r,r=lu(Sf,"onSelect"),0<r.length&&(e=new ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},Id={},hw={};Wn&&(hw=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Xu(t){if(Id[t])return Id[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hw)return Id[t]=e[n];return t}var pw=Xu("animationend"),mw=Xu("animationiteration"),gw=Xu("animationstart"),yw=Xu("transitionend"),vw=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){vw.set(t,e),Ii(e,[t])}for(var Ad=0;Ad<Ty.length;Ad++){var kd=Ty[Ad],kI=kd.toLowerCase(),CI=kd[0].toUpperCase()+kd.slice(1);qr(kI,"on"+CI)}qr(pw,"onAnimationEnd");qr(mw,"onAnimationIteration");qr(gw,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(yw,"onTransitionEnd");hs("onMouseEnter",["mouseout","mouseover"]);hs("onMouseLeave",["mouseout","mouseover"]);hs("onPointerEnter",["pointerout","pointerover"]);hs("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RI=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function by(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kS(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;by(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;by(i,a,c),s=u}}}if(ru)throw t=xf,ru=!1,xf=null,t}function Ee(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var r=t+"__bubble";n.has(r)||(ww(e,t,2,!1),n.add(r))}function Cd(t,e,n){var r=0;e&&(r|=4),ww(n,t,r,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[fl]){t[fl]=!0,A_.forEach(function(n){n!=="selectionchange"&&(RI.has(n)||Cd(n,!1,t),Cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,Cd("selectionchange",!1,e))}}function ww(t,e,n,r){switch(rw(e)){case 1:var i=WS;break;case 4:i=HS;break;default:i=np}n=i.bind(null,e,n,t),i=void 0,!wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}B_(function(){var c=s,h=Jh(n),p=[];e:{var g=vw.get(t);if(g!==void 0){var _=ip,C=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":_=oI;break;case"focusin":C="focus",_=Td;break;case"focusout":C="blur",_=Td;break;case"beforeblur":case"afterblur":_=Td;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=uI;break;case pw:case mw:case gw:_=XS;break;case yw:_=dI;break;case"scroll":_=qS;break;case"wheel":_=hI;break;case"copy":case"cut":case"paste":_=ZS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=py}var k=(e&4)!==0,R=!k&&t==="scroll",E=k?g!==null?g+"Capture":null:g;k=[];for(var x=c,S;x!==null;){S=x;var L=S.stateNode;if(S.tag===5&&L!==null&&(S=L,E!==null&&(L=Bo(x,E),L!=null&&k.push(Yo(x,L,S)))),R)break;x=x.return}0<k.length&&(g=new _(g,C,null,n,h),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==vf&&(C=n.relatedTarget||n.fromElement)&&(oi(C)||C[Hn]))break e;if((_||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=c,C=C?oi(C):null,C!==null&&(R=Ai(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=c),_!==C)){if(k=fy,L="onMouseLeave",E="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(k=py,L="onPointerLeave",E="onPointerEnter",x="pointer"),R=_==null?g:Gi(_),S=C==null?g:Gi(C),g=new k(L,x+"leave",_,n,h),g.target=R,g.relatedTarget=S,L=null,oi(h)===c&&(k=new k(E,x+"enter",C,n,h),k.target=S,k.relatedTarget=R,L=k),R=L,_&&C)t:{for(k=_,E=C,x=0,S=k;S;S=Li(S))x++;for(S=0,L=E;L;L=Li(L))S++;for(;0<x-S;)k=Li(k),x--;for(;0<S-x;)E=Li(E),S--;for(;x--;){if(k===E||E!==null&&k===E.alternate)break t;k=Li(k),E=Li(E)}k=null}else k=null;_!==null&&Sy(p,g,_,k,!1),C!==null&&R!==null&&Sy(p,R,C,k,!0)}}e:{if(g=c?Gi(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var U=wI;else if(yy(g))if(uw)U=bI;else{U=EI;var W=xI}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=TI);if(U&&(U=U(t,c))){lw(p,U,n,h);break e}W&&W(t,g,c),t==="focusout"&&(W=g._wrapperState)&&W.controlled&&g.type==="number"&&hf(g,"number",g.value)}switch(W=c?Gi(c):window,t){case"focusin":(yy(W)||W.contentEditable==="true")&&(Hi=W,Sf=c,ko=null);break;case"focusout":ko=Sf=Hi=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,Ey(p,n,h);break;case"selectionchange":if(AI)break;case"keydown":case"keyup":Ey(p,n,h)}var b;if(op)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wi?ow(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(sw&&n.locale!=="ko"&&(Wi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Wi&&(b=iw()):(wr=h,rp="value"in wr?wr.value:wr.textContent,Wi=!0)),W=lu(c,v),0<W.length&&(v=new hy(v,t,null,n,h),p.push({event:v,listeners:W}),b?v.data=b:(b=aw(n),b!==null&&(v.data=b)))),(b=mI?gI(t,n):yI(t,n))&&(c=lu(c,"onBeforeInput"),0<c.length&&(h=new hy("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=b))}_w(p,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Yo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Yo(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Bo(n,s),u!=null&&o.unshift(Yo(n,u,a))):i||(u=Bo(n,s),u!=null&&o.push(Yo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PI=/\r\n?/g,NI=/\u0000|\uFFFD/g;function Iy(t){return(typeof t=="string"?t:""+t).replace(PI,`
`).replace(NI,"")}function hl(t,e,n){if(e=Iy(e),Iy(t)!==e&&n)throw Error(z(425))}function uu(){}var Af=null,kf=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,DI=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,jI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(t){return Ay.resolve(null).then(t).catch(OI)}:Rf;function OI(t){setTimeout(function(){throw t})}function Pd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qo(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ky(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),yn="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,Hn="__reactContainer$"+Ds,Pf="__reactEvents$"+Ds,LI="__reactListeners$"+Ds,MI="__reactHandles$"+Ds;function oi(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ky(t);t!==null;){if(n=t[yn])return n;t=ky(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[yn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Ju(t){return t[Xo]||null}var Nf=[],Ki=-1;function Gr(t){return{current:t}}function be(t){0>Ki||(t.current=Nf[Ki],Nf[Ki]=null,Ki--)}function we(t,e){Ki++,Nf[Ki]=t.current,t.current=e}var Vr={},vt=Gr(Vr),Rt=Gr(!1),pi=Vr;function ps(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(t){return t=t.childContextTypes,t!=null}function cu(){be(Rt),be(vt)}function Cy(t,e,n){if(vt.current!==Vr)throw Error(z(168));we(vt,e),we(Rt,n)}function xw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,xS(t)||"Unknown",i));return Re({},n,r)}function du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,pi=vt.current,we(vt,t),we(Rt,Rt.current),!0}function Ry(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=xw(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,be(Rt),be(vt),we(vt,t)):be(Rt),we(Rt,n)}var jn=null,Zu=!1,Nd=!1;function Ew(t){jn===null?jn=[t]:jn.push(t)}function FI(t){Zu=!0,Ew(t)}function Kr(){if(!Nd&&jn!==null){Nd=!0;var t=0,e=pe;try{var n=jn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Zu=!1}catch(i){throw jn!==null&&(jn=jn.slice(t+1)),G_(Zh,Kr),i}finally{pe=e,Nd=!1}}return null}var Qi=[],Yi=0,fu=null,hu=0,qt=[],Gt=0,mi=null,On=1,Ln="";function ri(t,e){Qi[Yi++]=hu,Qi[Yi++]=fu,fu=t,hu=e}function Tw(t,e,n){qt[Gt++]=On,qt[Gt++]=Ln,qt[Gt++]=mi,mi=t;var r=On;t=Ln;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-an(e)+i|n<<i|r,Ln=s+t}else On=1<<s|n<<i|r,Ln=t}function lp(t){t.return!==null&&(ri(t,1),Tw(t,1,0))}function up(t){for(;t===fu;)fu=Qi[--Yi],Qi[Yi]=null,hu=Qi[--Yi],Qi[Yi]=null;for(;t===mi;)mi=qt[--Gt],qt[Gt]=null,Ln=qt[--Gt],qt[Gt]=null,On=qt[--Gt],qt[Gt]=null}var Ut=null,Ft=null,Ie=!1,sn=null;function bw(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Py(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Ft=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jf(t){if(Ie){var e=Ft;if(e){var n=e;if(!Py(t,e)){if(Df(t))throw Error(z(418));e=Ar(n.nextSibling);var r=Ut;e&&Py(t,e)?bw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ut=t)}}else{if(Df(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ie=!1,Ut=t}}}function Ny(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function pl(t){if(t!==Ut)return!1;if(!Ie)return Ny(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=Ft)){if(Df(t))throw Sw(),Error(z(418));for(;e;)bw(t,e),e=Ar(e.nextSibling)}if(Ny(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=Ut?Ar(t.stateNode.nextSibling):null;return!0}function Sw(){for(var t=Ft;t;)t=Ar(t.nextSibling)}function ms(){Ft=Ut=null,Ie=!1}function cp(t){sn===null?sn=[t]:sn.push(t)}var VI=nr.ReactCurrentBatchConfig;function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dy(t){var e=t._init;return e(t._payload)}function Iw(t){function e(E,x){if(t){var S=E.deletions;S===null?(E.deletions=[x],E.flags|=16):S.push(x)}}function n(E,x){if(!t)return null;for(;x!==null;)e(E,x),x=x.sibling;return null}function r(E,x){for(E=new Map;x!==null;)x.key!==null?E.set(x.key,x):E.set(x.index,x),x=x.sibling;return E}function i(E,x){return E=Pr(E,x),E.index=0,E.sibling=null,E}function s(E,x,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<x?(E.flags|=2,x):S):(E.flags|=2,x)):(E.flags|=1048576,x)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,x,S,L){return x===null||x.tag!==6?(x=Vd(S,E.mode,L),x.return=E,x):(x=i(x,S),x.return=E,x)}function u(E,x,S,L){var U=S.type;return U===Bi?h(E,x,S.props.children,L,S.key):x!==null&&(x.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===fr&&Dy(U)===x.type)?(L=i(x,S.props),L.ref=lo(E,x,S),L.return=E,L):(L=$l(S.type,S.key,S.props,null,E.mode,L),L.ref=lo(E,x,S),L.return=E,L)}function c(E,x,S,L){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Ud(S,E.mode,L),x.return=E,x):(x=i(x,S.children||[]),x.return=E,x)}function h(E,x,S,L,U){return x===null||x.tag!==7?(x=fi(S,E.mode,L,U),x.return=E,x):(x=i(x,S),x.return=E,x)}function p(E,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Vd(""+x,E.mode,S),x.return=E,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return S=$l(x.type,x.key,x.props,null,E.mode,S),S.ref=lo(E,null,x),S.return=E,S;case $i:return x=Ud(x,E.mode,S),x.return=E,x;case fr:var L=x._init;return p(E,L(x._payload),S)}if(po(x)||ro(x))return x=fi(x,E.mode,S,null),x.return=E,x;ml(E,x)}return null}function g(E,x,S,L){var U=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:a(E,x,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case il:return S.key===U?u(E,x,S,L):null;case $i:return S.key===U?c(E,x,S,L):null;case fr:return U=S._init,g(E,x,U(S._payload),L)}if(po(S)||ro(S))return U!==null?null:h(E,x,S,L,null);ml(E,S)}return null}function _(E,x,S,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return E=E.get(S)||null,a(x,E,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case il:return E=E.get(L.key===null?S:L.key)||null,u(x,E,L,U);case $i:return E=E.get(L.key===null?S:L.key)||null,c(x,E,L,U);case fr:var W=L._init;return _(E,x,S,W(L._payload),U)}if(po(L)||ro(L))return E=E.get(S)||null,h(x,E,L,U,null);ml(x,L)}return null}function C(E,x,S,L){for(var U=null,W=null,b=x,v=x=0,T=null;b!==null&&v<S.length;v++){b.index>v?(T=b,b=null):T=b.sibling;var I=g(E,b,S[v],L);if(I===null){b===null&&(b=T);break}t&&b&&I.alternate===null&&e(E,b),x=s(I,x,v),W===null?U=I:W.sibling=I,W=I,b=T}if(v===S.length)return n(E,b),Ie&&ri(E,v),U;if(b===null){for(;v<S.length;v++)b=p(E,S[v],L),b!==null&&(x=s(b,x,v),W===null?U=b:W.sibling=b,W=b);return Ie&&ri(E,v),U}for(b=r(E,b);v<S.length;v++)T=_(b,E,v,S[v],L),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?v:T.key),x=s(T,x,v),W===null?U=T:W.sibling=T,W=T);return t&&b.forEach(function(P){return e(E,P)}),Ie&&ri(E,v),U}function k(E,x,S,L){var U=ro(S);if(typeof U!="function")throw Error(z(150));if(S=U.call(S),S==null)throw Error(z(151));for(var W=U=null,b=x,v=x=0,T=null,I=S.next();b!==null&&!I.done;v++,I=S.next()){b.index>v?(T=b,b=null):T=b.sibling;var P=g(E,b,I.value,L);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(E,b),x=s(P,x,v),W===null?U=P:W.sibling=P,W=P,b=T}if(I.done)return n(E,b),Ie&&ri(E,v),U;if(b===null){for(;!I.done;v++,I=S.next())I=p(E,I.value,L),I!==null&&(x=s(I,x,v),W===null?U=I:W.sibling=I,W=I);return Ie&&ri(E,v),U}for(b=r(E,b);!I.done;v++,I=S.next())I=_(b,E,v,I.value,L),I!==null&&(t&&I.alternate!==null&&b.delete(I.key===null?v:I.key),x=s(I,x,v),W===null?U=I:W.sibling=I,W=I);return t&&b.forEach(function(N){return e(E,N)}),Ie&&ri(E,v),U}function R(E,x,S,L){if(typeof S=="object"&&S!==null&&S.type===Bi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case il:e:{for(var U=S.key,W=x;W!==null;){if(W.key===U){if(U=S.type,U===Bi){if(W.tag===7){n(E,W.sibling),x=i(W,S.props.children),x.return=E,E=x;break e}}else if(W.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===fr&&Dy(U)===W.type){n(E,W.sibling),x=i(W,S.props),x.ref=lo(E,W,S),x.return=E,E=x;break e}n(E,W);break}else e(E,W);W=W.sibling}S.type===Bi?(x=fi(S.props.children,E.mode,L,S.key),x.return=E,E=x):(L=$l(S.type,S.key,S.props,null,E.mode,L),L.ref=lo(E,x,S),L.return=E,E=L)}return o(E);case $i:e:{for(W=S.key;x!==null;){if(x.key===W)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(E,x.sibling),x=i(x,S.children||[]),x.return=E,E=x;break e}else{n(E,x);break}else e(E,x);x=x.sibling}x=Ud(S,E.mode,L),x.return=E,E=x}return o(E);case fr:return W=S._init,R(E,x,W(S._payload),L)}if(po(S))return C(E,x,S,L);if(ro(S))return k(E,x,S,L);ml(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(E,x.sibling),x=i(x,S),x.return=E,E=x):(n(E,x),x=Vd(S,E.mode,L),x.return=E,E=x),o(E)):n(E,x)}return R}var gs=Iw(!0),Aw=Iw(!1),pu=Gr(null),mu=null,Xi=null,dp=null;function fp(){dp=Xi=mu=null}function hp(t){var e=pu.current;be(pu),t._currentValue=e}function Of(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){mu=t,dp=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(mu===null)throw Error(z(308));Xi=t,mu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var ai=null;function pp(t){ai===null?ai=[t]:ai.push(t)}function kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gu(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,_=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,k=a;switch(g=e,_=n,k.tag){case 1:if(C=k.payload,typeof C=="function"){p=C.call(_,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=k.payload,g=typeof C=="function"?C.call(_,p,g):C,g==null)break e;p=Re({},p,g);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else _={eventTime:_,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,u=p):h=h.next=_,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=p}}function Oy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ea={},wn=Gr(Ea),Jo=Gr(Ea),Zo=Gr(Ea);function li(t){if(t===Ea)throw Error(z(174));return t}function gp(t,e){switch(we(Zo,e),we(Jo,t),we(wn,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}be(wn),we(wn,e)}function ys(){be(wn),be(Jo),be(Zo)}function Rw(t){li(Zo.current);var e=li(wn.current),n=mf(e,t.type);e!==n&&(we(Jo,t),we(wn,n))}function yp(t){Jo.current===t&&(be(wn),be(Jo))}var ke=Gr(0);function yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dd=[];function vp(){for(var t=0;t<Dd.length;t++)Dd[t]._workInProgressVersionPrimary=null;Dd.length=0}var Ml=nr.ReactCurrentDispatcher,jd=nr.ReactCurrentBatchConfig,gi=0,Ce=null,Be=null,Qe=null,vu=!1,Co=!1,ea=0,UI=0;function dt(){throw Error(z(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,i,s){if(gi=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?WI:HI,t=n(r,i),Co){s=0;do{if(Co=!1,ea=0,25<=s)throw Error(z(301));s+=1,Qe=Be=null,e.updateQueue=null,Ml.current=qI,t=n(r,i)}while(Co)}if(Ml.current=_u,e=Be!==null&&Be.next!==null,gi=0,Qe=Be=Ce=null,vu=!1,e)throw Error(z(300));return t}function xp(){var t=ea!==0;return ea=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ce.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Jt(){if(Be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Qe===null?Ce.memoizedState:Qe.next;if(e!==null)Qe=e,Be=t;else{if(t===null)throw Error(z(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Qe===null?Ce.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ta(t,e){return typeof e=="function"?e(t):e}function Od(t){var e=Jt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((gi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Ce.lanes|=h,yi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,un(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ld(t){var e=Jt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(Ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pw(){}function Nw(t,e){var n=Ce,r=Jt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,Ct=!0),r=r.queue,Ep(Ow.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,na(9,jw.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error(z(349));gi&30||Dw(n,e,i)}return i}function Dw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jw(t,e,n,r){e.value=n,e.getSnapshot=r,Lw(e)&&Mw(t)}function Ow(t,e,n){return n(function(){Lw(e)&&Mw(t)})}function Lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function Mw(t){var e=qn(t,1);e!==null&&ln(e,t,1,-1)}function Ly(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=BI.bind(null,Ce,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fw(){return Jt().memoizedState}function Fl(t,e,n,r){var i=gn();Ce.flags|=t,i.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=Jt();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=na(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=na(1|e,n,s,r)}function My(t,e){return Fl(8390656,8,t,e)}function Ep(t,e){return ec(2048,8,t,e)}function Vw(t,e){return ec(4,2,t,e)}function Uw(t,e){return ec(4,4,t,e)}function zw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $w(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,zw.bind(null,e,t),n)}function Tp(){}function Bw(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ww(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hw(t,e,n){return gi&21?(un(n,e)||(n=Y_(),Ce.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function zI(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{pe=n,jd.transition=r}}function qw(){return Jt().memoizedState}function $I(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gw(t))Kw(e,n);else if(n=kw(t,e,n,r),n!==null){var i=Tt();ln(n,t,r,i),Qw(n,e,r)}}function BI(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gw(t))Kw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var u=e.interleaved;u===null?(i.next=i,pp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=kw(t,e,i,r),n!==null&&(i=Tt(),ln(n,t,r,i),Qw(n,e,r))}}function Gw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function Kw(t,e){Co=vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var _u={readContext:Xt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},WI={readContext:Xt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:My,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,zw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$I.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Ly,useDebugValue:Tp,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Ly(!1),e=t[0];return t=zI.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=gn();if(Ie){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Ye===null)throw Error(z(349));gi&30||Dw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,My(Ow.bind(null,r,s,t),[t]),r.flags|=2048,na(9,jw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Ye.identifierPrefix;if(Ie){var n=Ln,r=On;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=UI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:Xt,useCallback:Bw,useContext:Xt,useEffect:Ep,useImperativeHandle:$w,useInsertionEffect:Vw,useLayoutEffect:Uw,useMemo:Ww,useReducer:Od,useRef:Fw,useState:function(){return Od(ta)},useDebugValue:Tp,useDeferredValue:function(t){var e=Jt();return Hw(e,Be.memoizedState,t)},useTransition:function(){var t=Od(ta)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Pw,useSyncExternalStore:Nw,useId:qw,unstable_isNewReconciler:!1},qI={readContext:Xt,useCallback:Bw,useContext:Xt,useEffect:Ep,useImperativeHandle:$w,useInsertionEffect:Vw,useLayoutEffect:Uw,useMemo:Ww,useReducer:Ld,useRef:Fw,useState:function(){return Ld(ta)},useDebugValue:Tp,useDeferredValue:function(t){var e=Jt();return Be===null?e.memoizedState=t:Hw(e,Be.memoizedState,t)},useTransition:function(){var t=Ld(ta)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Pw,useSyncExternalStore:Nw,useId:qw,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Rr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(ln(e,t,i,r),Ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Rr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(ln(e,t,i,r),Ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Rr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(ln(e,t,r,n),Ll(e,t,r))}};function Fy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,s):!0}function Yw(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xt(s):(i=Pt(e)?pi:vt.current,r=e.contextTypes,s=(r=r!=null)?ps(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Xt(s):(s=Pt(e)?pi:vt.current,i.context=ps(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),gu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=wS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Md(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GI=typeof WeakMap=="function"?WeakMap:Map;function Xw(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,Kf=r),Ff(t,e)},n}function Jw(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aA.bind(null,t,e,n),e.then(t,t))}function zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $y(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var KI=nr.ReactCurrentOwner,Ct=!1;function Et(t,e,n,r){e.child=t===null?Aw(e,null,n,r):gs(e,t.child,n,r)}function By(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=wp(t,e,n,r,s,i),n=xp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ie&&n&&lp(e),e.flags|=1,Et(t,e,r,i),e.child)}function Wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zw(t,e,s,r,i)):(t=$l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ko(s,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Vf(t,e,n,r,i)}function e1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Zi,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Zi,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Zi,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Zi,Mt),Mt|=r;return Et(t,e,i,n),e.child}function t1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,r,i){var s=Pt(n)?pi:vt.current;return s=ps(e,s),os(e,i),n=wp(t,e,n,r,s,i),r=xp(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ie&&r&&lp(e),e.flags|=1,Et(t,e,n,i),e.child)}function Hy(t,e,n,r,i){if(Pt(n)){var s=!0;du(e)}else s=!1;if(os(e,i),e.stateNode===null)Vl(t,e),Yw(e,n,r),Mf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xt(c):(c=Pt(n)?pi:vt.current,c=ps(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Vy(e,o,r,c),hr=!1;var g=e.memoizedState;o.state=g,gu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Rt.current||hr?(typeof h=="function"&&(Lf(e,n,h,r),u=e.memoizedState),(a=hr||Fy(e,n,a,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:nn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xt(u):(u=Pt(n)?pi:vt.current,u=ps(e,u));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==u)&&Vy(e,o,r,u),hr=!1,g=e.memoizedState,o.state=g,gu(e,r,o,i);var C=e.memoizedState;a!==p||g!==C||Rt.current||hr?(typeof _=="function"&&(Lf(e,n,_,r),C=e.memoizedState),(c=hr||Fy(e,n,c,r,g,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Uf(t,e,n,r,s,i)}function Uf(t,e,n,r,i,s){t1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ry(e,n,!1),Gn(t,e,s);r=e.stateNode,KI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gs(e,t.child,null,s),e.child=gs(e,null,a,s)):Et(t,e,a,s),e.memoizedState=r.state,i&&Ry(e,n,!0),e.child}function n1(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),gp(t,e.containerInfo)}function qy(t,e,n,r,i){return ms(),cp(i),e.flags|=256,Et(t,e,n,r),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function $f(t){return{baseLanes:t,cachePool:null,transitions:null}}function r1(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(ke,i&1),t===null)return jf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$f(n),e.memoizedState=zf,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return QI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&cp(r),gs(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Md(Error(z(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ic({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gs(e,t.child,null,o),e.child.memoizedState=$f(o),e.memoizedState=zf,s);if(!(e.mode&1))return gl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Md(s,r,void 0),gl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ct||a){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),ln(r,t,i,-1))}return Rp(),r=Md(Error(z(421))),gl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=Ar(i.nextSibling),Ut=e,Ie=!0,sn=null,t!==null&&(qt[Gt++]=On,qt[Gt++]=Ln,qt[Gt++]=mi,On=t.id,Ln=t.overflow,mi=e),e=bp(e,r.children),e.flags|=4096,e)}function Gy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Of(t.return,e,n)}function Fd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gy(t,n,e);else if(t.tag===19)Gy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fd(e,!0,n,null,s);break;case"together":Fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YI(t,e,n){switch(e.tag){case 3:n1(e),ms();break;case 5:Rw(e);break;case 1:Pt(e.type)&&du(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(pu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?r1(t,e,n):(we(ke,ke.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);we(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,e1(t,e,n)}return Gn(t,e,n)}var s1,Bf,o1,a1;s1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};o1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(wn.current);var s=null;switch(n){case"input":i=df(t,i),r=df(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=pf(t,i),r=pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uu)}gf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ee("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a1=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XI(t,e,n){var r=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Pt(e.type)&&cu(),ft(e),null;case 3:return r=e.stateNode,ys(),be(Rt),be(vt),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(Xf(sn),sn=null))),Bf(t,e),ft(e),null;case 5:yp(e);var i=li(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)o1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ft(e),null}if(t=li(wn.current),pl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<go.length;i++)Ee(go[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":ny(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":iy(r,s),Ee("invalid",r)}gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(r.textContent,a,t),i=["children",""+a]):zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":sl(r),ry(r,s,!0);break;case"textarea":sl(r),sy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Xo]=r,s1(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)Ee(go[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":ny(t,r),i=df(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":iy(t,r),i=pf(t,r),Ee("invalid",t);break;default:i=r}gf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?F_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&L_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$o(t,u):typeof u=="number"&&$o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&Kh(t,s,u,o))}switch(n){case"input":sl(t),ry(t,r,!1);break;case"textarea":sl(t),sy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)a1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=li(Zo.current),li(wn.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ft(e),null;case 13:if(be(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ft!==null&&e.mode&1&&!(e.flags&128))Sw(),ms(),e.flags|=98560,s=!1;else if(s=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[yn]=e}else ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else sn!==null&&(Xf(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?We===0&&(We=3):Rp())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return ys(),Bf(t,e),t===null&&Qo(e.stateNode.containerInfo),ft(e),null;case 10:return hp(e.type._context),ft(e),null;case 17:return Pt(e.type)&&cu(),ft(e),null;case 19:if(be(ke),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>_s&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ft(e),null}else 2*Fe()-s.renderingStartTime>_s&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=ke.current,we(ke,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function JI(t,e){switch(up(e),e.tag){case 1:return Pt(e.type)&&cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),be(Rt),be(vt),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yp(e),null;case 13:if(be(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(ke),null;case 4:return ys(),null;case 10:return hp(e.type._context),null;case 22:case 23:return Cp(),null;case 24:return null;default:return null}}var yl=!1,mt=!1,ZI=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Wf(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Ky=!1;function eA(t,e){if(Af=ou,t=fw(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)g=p,p=_;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(_=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kf={focusedElem:t,selectionRange:n},ou=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var k=C.memoizedProps,R=C.memoizedState,E=e.stateNode,x=E.getSnapshotBeforeUpdate(e.elementType===e.type?k:nn(e.type,k),R);E.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){Oe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return C=Ky,Ky=!1,C}function Ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wf(e,n,s)}i=i.next}while(i!==r)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l1(t){var e=t.alternate;e!==null&&(t.alternate=null,l1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Xo],delete e[Pf],delete e[LI],delete e[MI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u1(t){return t.tag===5||t.tag===3||t.tag===4}function Qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uu));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Je=null,rn=!1;function cr(t,e,n){for(n=n.child;n!==null;)c1(t,e,n),n=n.sibling}function c1(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:mt||Ji(n,e);case 6:var r=Je,i=rn;Je=null,cr(t,e,n),Je=r,rn=i,Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?Pd(t.parentNode,n):t.nodeType===1&&Pd(t,n),qo(t)):Pd(Je,n.stateNode));break;case 4:r=Je,i=rn,Je=n.stateNode.containerInfo,rn=!0,cr(t,e,n),Je=r,rn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(n,e,o),i=i.next}while(i!==r)}cr(t,e,n);break;case 1:if(!mt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,cr(t,e,n),mt=r):cr(t,e,n);break;default:cr(t,e,n)}}function Yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZI),e.forEach(function(r){var i=uA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,rn=!1;break e;case 3:Je=a.stateNode.containerInfo,rn=!0;break e;case 4:Je=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(Je===null)throw Error(z(160));c1(s,o,i),Je=null,rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d1(e,t),e=e.sibling}function d1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),mn(t),r&4){try{Ro(3,t,t.return),nc(3,t)}catch(k){Oe(t,t.return,k)}try{Ro(5,t,t.return)}catch(k){Oe(t,t.return,k)}}break;case 1:en(e,t),mn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(en(e,t),mn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(k){Oe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&D_(i,s),yf(a,o);var c=yf(a,s);for(o=0;o<u.length;o+=2){var h=u[o],p=u[o+1];h==="style"?F_(i,p):h==="dangerouslySetInnerHTML"?L_(i,p):h==="children"?$o(i,p):Kh(i,h,p,c)}switch(a){case"input":ff(i,s);break;case"textarea":j_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?ns(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(k){Oe(t,t.return,k)}}break;case 6:if(en(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Oe(t,t.return,k)}}break;case 3:if(en(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(k){Oe(t,t.return,k)}break;case 4:en(e,t),mn(t);break;case 13:en(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ap=Fe())),r&4&&Yy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||h,en(e,t),mt=c):en(e,t),mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(p=K=h;K!==null;){switch(g=K,_=g.child,g.tag){case 0:case 11:case 14:case 15:Ro(4,g,g.return);break;case 1:Ji(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(k){Oe(r,n,k)}}break;case 5:Ji(g,g.return);break;case 22:if(g.memoizedState!==null){Jy(p);continue}}_!==null?(_.return=g,K=_):Jy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=M_("display",o))}catch(k){Oe(t,t.return,k)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Oe(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),mn(t),r&4&&Yy(t);break;case 21:break;default:en(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=Qy(t);Gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qy(t);qf(t,a,o);break;default:throw Error(z(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tA(t,e,n){K=t,f1(t)}function f1(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||mt;a=yl;var c=mt;if(yl=o,(mt=u)&&!c)for(K=i;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Zy(i):u!==null?(u.return=o,K=u):Zy(i);for(;s!==null;)K=s,f1(s),s=s.sibling;K=i,yl=a,mt=c}Xy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Xy(t)}}function Xy(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}mt||e.flags&512&&Hf(e)}catch(g){Oe(e,e.return,g)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Jy(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Zy(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{Hf(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{Hf(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var nA=Math.ceil,wu=nr.ReactCurrentDispatcher,Sp=nr.ReactCurrentOwner,Qt=nr.ReactCurrentBatchConfig,de=0,Ye=null,ze=null,nt=0,Mt=0,Zi=Gr(0),We=0,ra=null,yi=0,rc=0,Ip=0,Po=null,At=null,Ap=0,_s=1/0,Dn=null,xu=!1,Kf=null,Cr=null,vl=!1,xr=null,Eu=0,No=0,Qf=null,Ul=-1,zl=0;function Tt(){return de&6?Fe():Ul!==-1?Ul:Ul=Fe()}function Rr(t){return t.mode&1?de&2&&nt!==0?nt&-nt:VI.transition!==null?(zl===0&&(zl=Y_()),zl):(t=pe,t!==0||(t=window.event,t=t===void 0?16:rw(t.type)),t):1}function ln(t,e,n,r){if(50<No)throw No=0,Qf=null,Error(z(185));_a(t,n,r),(!(de&2)||t!==Ye)&&(t===Ye&&(!(de&2)&&(rc|=n),We===4&&mr(t,nt)),Nt(t,r),n===1&&de===0&&!(e.mode&1)&&(_s=Fe()+500,Zu&&Kr()))}function Nt(t,e){var n=t.callbackNode;VS(t,e);var r=su(t,t===Ye?nt:0);if(r===0)n!==null&&ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ly(n),e===1)t.tag===0?FI(ev.bind(null,t)):Ew(ev.bind(null,t)),jI(function(){!(de&6)&&Kr()}),n=null;else{switch(X_(r)){case 1:n=Zh;break;case 4:n=K_;break;case 16:n=iu;break;case 536870912:n=Q_;break;default:n=iu}n=w1(n,h1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h1(t,e){if(Ul=-1,zl=0,de&6)throw Error(z(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=su(t,t===Ye?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tu(t,r);else{e=r;var i=de;de|=2;var s=m1();(Ye!==t||nt!==e)&&(Dn=null,_s=Fe()+500,di(t,e));do try{sA();break}catch(a){p1(t,a)}while(!0);fp(),wu.current=s,de=i,ze!==null?e=0:(Ye=null,nt=0,e=We)}if(e!==0){if(e===2&&(i=Ef(t),i!==0&&(r=i,e=Yf(t,i))),e===1)throw n=ra,di(t,0),mr(t,r),Nt(t,Fe()),n;if(e===6)mr(t,r);else{if(i=t.current.alternate,!(r&30)&&!rA(i)&&(e=Tu(t,r),e===2&&(s=Ef(t),s!==0&&(r=s,e=Yf(t,s))),e===1))throw n=ra,di(t,0),mr(t,r),Nt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:ii(t,At,Dn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=Ap+500-Fe(),10<e)){if(su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rf(ii.bind(null,t,At,Dn),e);break}ii(t,At,Dn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nA(r/1960))-r,10<r){t.timeoutHandle=Rf(ii.bind(null,t,At,Dn),r);break}ii(t,At,Dn);break;case 5:ii(t,At,Dn);break;default:throw Error(z(329))}}}return Nt(t,Fe()),t.callbackNode===n?h1.bind(null,t):null}function Yf(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=Tu(t,e),t!==2&&(e=At,At=n,e!==null&&Xf(e)),t}function Xf(t){At===null?At=t:At.push.apply(At,t)}function rA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Ip,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function ev(t){if(de&6)throw Error(z(327));as();var e=su(t,0);if(!(e&1))return Nt(t,Fe()),null;var n=Tu(t,e);if(t.tag!==0&&n===2){var r=Ef(t);r!==0&&(e=r,n=Yf(t,r))}if(n===1)throw n=ra,di(t,0),mr(t,e),Nt(t,Fe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ii(t,At,Dn),Nt(t,Fe()),null}function kp(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(_s=Fe()+500,Zu&&Kr())}}function vi(t){xr!==null&&xr.tag===0&&!(de&6)&&as();var e=de;de|=1;var n=Qt.transition,r=pe;try{if(Qt.transition=null,pe=1,t)return t()}finally{pe=r,Qt.transition=n,de=e,!(de&6)&&Kr()}}function Cp(){Mt=Zi.current,be(Zi)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DI(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(up(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cu();break;case 3:ys(),be(Rt),be(vt),vp();break;case 5:yp(r);break;case 4:ys();break;case 13:be(ke);break;case 19:be(ke);break;case 10:hp(r.type._context);break;case 22:case 23:Cp()}n=n.return}if(Ye=t,ze=t=Pr(t.current,null),nt=Mt=e,We=0,ra=null,Ip=rc=yi=0,At=Po=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function p1(t,e){do{var n=ze;try{if(fp(),Ml.current=_u,vu){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vu=!1}if(gi=0,Qe=Be=Ce=null,Co=!1,ea=0,Sp.current=null,n===null||n.return===null){We=1,ra=e,ze=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=nt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=zy(o);if(_!==null){_.flags&=-257,$y(_,o,a,s,e),_.mode&1&&Uy(s,c,e),e=_,u=c;var C=e.updateQueue;if(C===null){var k=new Set;k.add(u),e.updateQueue=k}else C.add(u);break e}else{if(!(e&1)){Uy(s,c,e),Rp();break e}u=Error(z(426))}}else if(Ie&&a.mode&1){var R=zy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),$y(R,o,a,s,e),cp(vs(u,a));break e}}s=u=vs(u,a),We!==4&&(We=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Xw(s,u,e);jy(s,E);break e;case 1:a=u;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Cr===null||!Cr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Jw(s,a,e);jy(s,L);break e}}s=s.return}while(s!==null)}y1(n)}catch(U){e=U,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function m1(){var t=wu.current;return wu.current=_u,t===null?_u:t}function Rp(){(We===0||We===3||We===2)&&(We=4),Ye===null||!(yi&268435455)&&!(rc&268435455)||mr(Ye,nt)}function Tu(t,e){var n=de;de|=2;var r=m1();(Ye!==t||nt!==e)&&(Dn=null,di(t,e));do try{iA();break}catch(i){p1(t,i)}while(!0);if(fp(),de=n,wu.current=r,ze!==null)throw Error(z(261));return Ye=null,nt=0,We}function iA(){for(;ze!==null;)g1(ze)}function sA(){for(;ze!==null&&!RS();)g1(ze)}function g1(t){var e=_1(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?y1(t):ze=e,Sp.current=null}function y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=JI(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}else if(n=XI(n,e,Mt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);We===0&&(We=5)}function ii(t,e,n){var r=pe,i=Qt.transition;try{Qt.transition=null,pe=1,oA(t,e,n,r)}finally{Qt.transition=i,pe=r}return null}function oA(t,e,n,r){do as();while(xr!==null);if(de&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(US(t,s),t===Ye&&(ze=Ye=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,w1(iu,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=pe;pe=1;var a=de;de|=4,Sp.current=null,eA(t,n),d1(n,t),II(kf),ou=!!Af,kf=Af=null,t.current=n,tA(n),PS(),de=a,pe=o,Qt.transition=s}else t.current=n;if(vl&&(vl=!1,xr=t,Eu=i),s=t.pendingLanes,s===0&&(Cr=null),jS(n.stateNode),Nt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,t=Kf,Kf=null,t;return Eu&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Qf?No++:(No=0,Qf=t):No=0,Kr(),null}function as(){if(xr!==null){var t=X_(Eu),e=Qt.transition,n=pe;try{if(Qt.transition=null,pe=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Eu=0,de&6)throw Error(z(331));var i=de;for(de|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:Ro(8,h,s)}var p=h.child;if(p!==null)p.return=h,K=p;else for(;K!==null;){h=K;var g=h.sibling,_=h.return;if(l1(h),h===c){K=null;break}if(g!==null){g.return=_,K=g;break}K=_}}}var C=s.alternate;if(C!==null){var k=C.child;if(k!==null){C.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,K=E;break e}K=s.return}}var x=t.current;for(K=x;K!==null;){o=K;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,K=S;else e:for(o=x;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(U){Oe(a,a.return,U)}if(a===o){K=null;break e}var L=a.sibling;if(L!==null){L.return=a.return,K=L;break e}K=a.return}}if(de=i,Kr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{pe=n,Qt.transition=e}}return!1}function tv(t,e,n){e=vs(n,e),e=Xw(t,e,1),t=kr(t,e,1),e=Tt(),t!==null&&(_a(t,1,e),Nt(t,e))}function Oe(t,e,n){if(t.tag===3)tv(t,t,n);else for(;e!==null;){if(e.tag===3){tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){t=vs(n,t),t=Jw(e,t,1),e=kr(e,t,1),t=Tt(),e!==null&&(_a(e,1,t),Nt(e,t));break}}e=e.return}}function aA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(nt&n)===n&&(We===4||We===3&&(nt&130023424)===nt&&500>Fe()-Ap?di(t,0):Ip|=n),Nt(t,e)}function v1(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=Tt();t=qn(t,e),t!==null&&(_a(t,e,n),Nt(t,n))}function lA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v1(t,n)}function uA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),v1(t,n)}var _1;_1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,YI(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ie&&e.flags&1048576&&Tw(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vl(t,e),t=e.pendingProps;var i=ps(e,vt.current);os(e,n),i=wp(null,e,r,t,i,n);var s=xp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pt(r)?(s=!0,du(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mp(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,Mf(e,r,t,n),e=Uf(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&lp(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dA(r),t=nn(r,t),i){case 0:e=Vf(null,e,r,t,n);break e;case 1:e=Hy(null,e,r,t,n);break e;case 11:e=By(null,e,r,t,n);break e;case 14:e=Wy(null,e,r,nn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Hy(t,e,r,i,n);case 3:e:{if(n1(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cw(t,e),gu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vs(Error(z(423)),e),e=qy(t,e,r,n,i);break e}else if(r!==i){i=vs(Error(z(424)),e),e=qy(t,e,r,n,i);break e}else for(Ft=Ar(e.stateNode.containerInfo.firstChild),Ut=e,Ie=!0,sn=null,n=Aw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===i){e=Gn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Rw(e),t===null&&jf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cf(r,i)?o=null:s!==null&&Cf(r,s)&&(e.flags|=32),t1(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&jf(e),null;case 13:return r1(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gs(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),By(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(pu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Rt.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Of(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Of(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=Xt(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Wy(t,e,r,i,n);case 15:return Zw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Vl(t,e),e.tag=1,Pt(r)?(t=!0,du(e)):t=!1,os(e,n),Yw(e,r,i),Mf(e,r,i,n),Uf(null,e,r,!0,t,n);case 19:return i1(t,e,n);case 22:return e1(t,e,n)}throw Error(z(156,e.tag))};function w1(t,e){return G_(t,e)}function cA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new cA(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dA(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yh)return 11;if(t===Xh)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return fi(n.children,i,s,e);case Qh:o=8,i|=8;break;case af:return t=Kt(12,n,e,i|2),t.elementType=af,t.lanes=s,t;case lf:return t=Kt(13,n,e,i),t.elementType=lf,t.lanes=s,t;case uf:return t=Kt(19,n,e,i),t.elementType=uf,t.lanes=s,t;case R_:return ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k_:o=10;break e;case C_:o=9;break e;case Yh:o=11;break e;case Xh:o=14;break e;case fr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function ic(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vd(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Ud(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,r,i,s,o,a,u){return t=new fA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function hA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x1(t){if(!t)return Vr;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Pt(n))return xw(t,n,e)}return e}function E1(t,e,n,r,i,s,o,a,u){return t=Np(n,r,!0,t,i,s,o,a,u),t.context=x1(null),n=t.current,r=Tt(),i=Rr(n),s=zn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,_a(t,i,r),Nt(t,r),t}function sc(t,e,n,r){var i=e.current,s=Tt(),o=Rr(i);return n=x1(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(ln(t,i,o,s),Ll(t,i,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){nv(t,e),(t=t.alternate)&&nv(t,e)}function pA(){return null}var T1=typeof reportError=="function"?reportError:function(t){console.error(t)};function jp(t){this._internalRoot=t}oc.prototype.render=jp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));sc(t,e,null,null)};oc.prototype.unmount=jp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){sc(null,t,null,null)}),e[Hn]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&nw(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rv(){}function mA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bu(o);s.call(c)}}var o=E1(e,r,t,0,null,!1,!1,"",rv);return t._reactRootContainer=o,t[Hn]=o.current,Qo(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bu(u);a.call(c)}}var u=Np(t,0,!1,null,null,!1,!1,"",rv);return t._reactRootContainer=u,t[Hn]=u.current,Qo(t.nodeType===8?t.parentNode:t),vi(function(){sc(e,u,n,r)}),u}function lc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=bu(o);a.call(u)}}sc(e,o,t,i)}else o=mA(n,e,t,i,r);return bu(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(ep(e,n|1),Nt(e,Fe()),!(de&6)&&(_s=Fe()+500,Kr()))}break;case 13:vi(function(){var r=qn(t,1);if(r!==null){var i=Tt();ln(r,t,1,i)}}),Dp(t,1)}};tp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=Tt();ln(e,t,134217728,n)}Dp(t,134217728)}};Z_=function(t){if(t.tag===13){var e=Rr(t),n=qn(t,e);if(n!==null){var r=Tt();ln(n,t,e,r)}Dp(t,e)}};ew=function(){return pe};tw=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};_f=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ju(r);if(!i)throw Error(z(90));N_(r),ff(r,i)}}}break;case"textarea":j_(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};z_=kp;$_=vi;var gA={usingClientEntryPoint:!1,Events:[xa,Gi,Ju,V_,U_,kp]},co={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yA={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H_(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||pA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Ku=_l.inject(yA),_n=_l}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gA;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(z(200));return hA(t,e,null,n)};Bt.createRoot=function(t,e){if(!Op(t))throw Error(z(299));var n=!1,r="",i=T1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new jp(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=H_(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return vi(t)};Bt.hydrate=function(t,e,n){if(!ac(e))throw Error(z(200));return lc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E1(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new oc(e)};Bt.render=function(t,e,n){if(!ac(e))throw Error(z(200));return lc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!ac(t))throw Error(z(40));return t._reactRootContainer?(vi(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Bt.unstable_batchedUpdates=kp;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ac(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return lc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function b1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b1)}catch(t){console.error(t)}}b1(),b_.exports=Bt;var vA=b_.exports,iv=vA;sf.createRoot=iv.createRoot,sf.hydrateRoot=iv.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ia.apply(null,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const sv="popstate";function _A(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Jf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Su(i)}return xA(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function S1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wA(){return Math.random().toString(36).substr(2,8)}function ov(t,e){return{usr:t.state,key:t.key,idx:e}}function Jf(t,e,n,r){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?js(e):e,{state:n,key:e&&e.key||r||wA()})}function Su(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Er.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ia({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Er.Pop;let R=h(),E=R==null?null:R-c;c=R,u&&u({action:a,location:k.location,delta:E})}function g(R,E){a=Er.Push;let x=Jf(k.location,R,E);c=h()+1;let S=ov(x,c),L=k.createHref(x);try{o.pushState(S,"",L)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(L)}s&&u&&u({action:a,location:k.location,delta:1})}function _(R,E){a=Er.Replace;let x=Jf(k.location,R,E);c=h();let S=ov(x,c),L=k.createHref(x);o.replaceState(S,"",L),s&&u&&u({action:a,location:k.location,delta:0})}function C(R){let E=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof R=="string"?R:Su(R);return x=x.replace(/ $/,"%20"),Ve(E,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,E)}let k={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(sv,p),u=R,()=>{i.removeEventListener(sv,p),u=null}},createHref(R){return e(i,R)},createURL:C,encodeLocation(R){let E=C(R);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:_,go(R){return o.go(R)}};return k}var av;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(av||(av={}));function EA(t,e,n){return n===void 0&&(n="/"),TA(t,e,n)}function TA(t,e,n,r){let i=typeof e=="string"?js(e):e,s=Lp(i.pathname||"/",n);if(s==null)return null;let o=I1(t);bA(o);let a=null,u=LA(s);for(let c=0;a==null&&c<o.length;++c)a=DA(o[c],u);return a}function I1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),I1(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:PA(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of A1(s.path))i(s,o,u)}),e}function A1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=A1(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function bA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SA=/^:[\w-]+$/,IA=3,AA=2,kA=1,CA=10,RA=-2,lv=t=>t==="*";function PA(t,e){let n=t.split("/"),r=n.length;return n.some(lv)&&(r+=RA),e&&(r+=AA),n.filter(i=>!lv(i)).reduce((i,s)=>i+(SA.test(s)?IA:s===""?kA:CA),r)}function NA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=jA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:VA(Nr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return o}function jA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:_}=h;if(g==="*"){let k=a[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const C=a[p];return _&&!C?c[g]=void 0:c[g]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function OA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),S1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return S1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Lp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?js(t):t,s;return n?(n=k1(n),n.startsWith("/")?s=uv(n.substring(1),"/"):s=uv(n,e)):s=e,{pathname:s,search:UA(r),hash:zA(i)}}function uv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mp(t,e){let n=FA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=js(t):(i=ia({},t),Ve(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let u=MA(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const k1=t=>t.replace(/\/\/+/g,"/"),Nr=t=>k1(t.join("/")),VA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),UA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $A(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const C1=["post","put","patch","delete"];new Set(C1);const BA=["get",...C1];new Set(BA);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(null,arguments)}const Vp=M.createContext(null),WA=M.createContext(null),Qr=M.createContext(null),uc=M.createContext(null),rr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),R1=M.createContext(null);function HA(t,e){let{relative:n}=e===void 0?{}:e;Os()||Ve(!1);let{basename:r,navigator:i}=M.useContext(Qr),{hash:s,pathname:o,search:a}=N1(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Nr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Os(){return M.useContext(uc)!=null}function ki(){return Os()||Ve(!1),M.useContext(uc).location}function P1(t){M.useContext(Qr).static||M.useLayoutEffect(t)}function cc(){let{isDataRoute:t}=M.useContext(rr);return t?ok():qA()}function qA(){Os()||Ve(!1);let t=M.useContext(Vp),{basename:e,future:n,navigator:r}=M.useContext(Qr),{matches:i}=M.useContext(rr),{pathname:s}=ki(),o=JSON.stringify(Mp(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return P1(()=>{a.current=!0}),M.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Fp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Nr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}const GA=M.createContext(null);function KA(t){let e=M.useContext(rr).outlet;return e&&M.createElement(GA.Provider,{value:t},e)}function N1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Qr),{matches:i}=M.useContext(rr),{pathname:s}=ki(),o=JSON.stringify(Mp(i,r.v7_relativeSplatPath));return M.useMemo(()=>Fp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function QA(t,e){return YA(t,e)}function YA(t,e,n,r){Os()||Ve(!1);let{navigator:i}=M.useContext(Qr),{matches:s}=M.useContext(rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ki(),h;if(e){var p;let R=typeof e=="string"?js(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||Ve(!1),h=R}else h=c;let g=h.pathname||"/",_=g;if(u!=="/"){let R=u.replace(/^\//,"").split("/");_="/"+g.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=EA(t,{pathname:_}),k=tk(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Nr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:Nr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&k?M.createElement(uc.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Er.Pop}},k):k}function XA(){let t=sk(),e=$A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const JA=M.createElement(XA,null);class ZA extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(rr.Provider,{value:this.props.routeContext},M.createElement(R1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ek(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(rr.Provider,{value:e},r)}function tk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Ve(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:_}=n,C=p.route.loader&&g[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let _,C=!1,k=null,R=null;n&&(_=a&&p.route.id?a[p.route.id]:void 0,k=p.route.errorElement||JA,u&&(c<0&&g===0?(ak("route-fallback"),C=!0,R=null):c===g&&(C=!0,R=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,g+1)),x=()=>{let S;return _?S=k:C?S=R:p.route.Component?S=M.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=h,M.createElement(ek,{match:p,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?M.createElement(ZA,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:x(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):x()},null)}var D1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D1||{}),j1=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(j1||{});function nk(t){let e=M.useContext(Vp);return e||Ve(!1),e}function rk(t){let e=M.useContext(WA);return e||Ve(!1),e}function ik(t){let e=M.useContext(rr);return e||Ve(!1),e}function O1(t){let e=ik(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function sk(){var t;let e=M.useContext(R1),n=rk(),r=O1();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ok(){let{router:t}=nk(D1.UseNavigateStable),e=O1(j1.UseNavigateStable),n=M.useRef(!1);return P1(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,sa({fromRouteId:e},s)))},[t,e])}const cv={};function ak(t,e,n){cv[t]||(cv[t]=!0)}function lk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function uk(t){let{to:e,replace:n,state:r,relative:i}=t;Os()||Ve(!1);let{future:s,static:o}=M.useContext(Qr),{matches:a}=M.useContext(rr),{pathname:u}=ki(),c=cc(),h=Fp(e,Mp(a,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return M.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function ck(t){return KA(t.context)}function Lt(t){Ve(!1)}function dk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:s,static:o=!1,future:a}=t;Os()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=js(r));let{pathname:h="/",search:p="",hash:g="",state:_=null,key:C="default"}=r,k=M.useMemo(()=>{let R=Lp(h,u);return R==null?null:{location:{pathname:R,search:p,hash:g,state:_,key:C},navigationType:i}},[u,h,p,g,_,C,i]);return k==null?null:M.createElement(Qr.Provider,{value:c},M.createElement(uc.Provider,{children:n,value:k}))}function fk(t){let{children:e,location:n}=t;return QA(Zf(e),n)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Zf(r.props.children,s));return}r.type!==Lt&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eh(){return eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eh.apply(null,arguments)}function hk(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function pk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mk(t,e){return t.button===0&&(!e||e==="_self")&&!pk(t)}const gk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yk="6";try{window.__reactRouterVersion=yk}catch{}const vk="startTransition",dv=aS[vk];function _k(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=_A({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=M.useCallback(p=>{c&&dv?dv(()=>u(p)):u(p)},[u,c]);return M.useLayoutEffect(()=>o.listen(h),[o,h]),M.useEffect(()=>lk(r),[r]),M.createElement(dk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const wk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$n=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:p}=e,g=hk(e,gk),{basename:_}=M.useContext(Qr),C,k=!1;if(typeof c=="string"&&xk.test(c)&&(C=c,wk))try{let S=new URL(window.location.href),L=c.startsWith("//")?new URL(S.protocol+c):new URL(c),U=Lp(L.pathname,_);L.origin===S.origin&&U!=null?c=U+L.search+L.hash:k=!0}catch{}let R=HA(c,{relative:i}),E=Ek(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:p});function x(S){r&&r(S),S.defaultPrevented||E(S)}return M.createElement("a",eh({},g,{href:C||R,onClick:k||s?r:x,ref:n,target:u}))});var fv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fv||(fv={}));var hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function Ek(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=cc(),c=ki(),h=N1(t,{relative:o});return M.useCallback(p=>{if(mk(p,n)){p.preventDefault();let g=r!==void 0?r:Su(c)===Su(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}const Tk=()=>{const t=M.useRef(null);return M.useEffect(()=>{if(typeof window>"u"||window.matchMedia("(hover: none)").matches)return;let e=0,n=0,r=0,i=0,s=null;const o=h=>{r=h.clientX,i=h.clientY},a=()=>{e+=(r-e)*.35,n+=(i-n)*.35,t.current&&(t.current.style.transform=`translate(${e}px, ${n}px) translate(-50%, -50%)`),s=requestAnimationFrame(a)},u=h=>{var _,C;const p=h.target;if(!p)return;const g=(_=p.tagName)==null?void 0:_.toLowerCase();(g==="a"||g==="button"||p.closest("a")||p.closest("button")||p.closest('[role="button"]')||p.closest("input")||p.closest("textarea"))&&((C=t.current)==null||C.classList.add("hovering"))},c=h=>{var _,C;const p=h.target;if(!p)return;const g=(_=p.tagName)==null?void 0:_.toLowerCase();(g==="a"||g==="button"||p.closest("a")||p.closest("button")||p.closest('[role="button"]')||p.closest("input")||p.closest("textarea"))&&((C=t.current)==null||C.classList.remove("hovering"))};return window.addEventListener("mousemove",o,{passive:!0}),document.addEventListener("mouseover",u,{passive:!0}),document.addEventListener("mouseout",c,{passive:!0}),s=requestAnimationFrame(a),()=>{window.removeEventListener("mousemove",o),document.removeEventListener("mouseover",u),document.removeEventListener("mouseout",c),s&&cancelAnimationFrame(s)}},[]),f.jsx("div",{ref:t,className:"cursor-dot"})},bk=()=>{const{pathname:t}=ki();return M.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[t]),null};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L1=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ik={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>M.createElement("svg",{ref:u,...Ik,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:L1("lucide",i),...a},[...o.map(([c,h])=>M.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(Ak,{ref:s,iconNode:e,className:L1(`lucide-${Sk(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=jt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=jt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=jt("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=jt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=jt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=jt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=jt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=jt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=jt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=jt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=jt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=jt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=jt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=jt("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);var mv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},V1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[h],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new Ok;const g=s<<2|a>>4;if(r.push(g),c!==64){const _=a<<4&240|c>>2;if(r.push(_),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lk=function(t){const e=F1(t);return V1.encodeByteArray(e,!0)},Iu=function(t){return Lk(t).replace(/\./g,"")},U1=function(t){try{return V1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=()=>Mk().__FIREBASE_DEFAULTS__,Vk=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U1(t[1]);return e&&JSON.parse(e)},mc=()=>{try{return Fk()||Vk()||Uk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},z1=t=>{var e,n;return(n=(e=mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zk=t=>{const e=z1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$1=()=>{var t;return(t=mc())===null||t===void 0?void 0:t.config},B1=t=>{var e;return(e=mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Hk(){var t;const e=(t=mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qk(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yk(){return!Hk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xk(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zk,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?e2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function e2(t,e){return t.replace(t2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const t2=/\{\$([^}]+)}/g;function n2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Au(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gv(s)&&gv(o)){if(!Au(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function r2(t,e){const n=new i2(t,e);return n.subscribe.bind(n)}class i2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");s2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$d),i.error===void 0&&(i.error=$d),i.complete===void 0&&(i.complete=$d);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function s2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $d(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class _i{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l2(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:a2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a2(t){return t===si?void 0:t}function l2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new o2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const c2={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},d2=ue.INFO,f2={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},h2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=f2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Up=class{constructor(e){this.name=e,this._logLevel=d2,this._logHandler=h2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}};const p2=(t,e)=>e.some(n=>t instanceof n);let yv,vv;function m2(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g2(){return vv||(vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W1=new WeakMap,nh=new WeakMap,H1=new WeakMap,Bd=new WeakMap,zp=new WeakMap;function y2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W1.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function v2(t){if(nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});nh.set(t,e)}let rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||H1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _2(t){rh=t(rh)}function w2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wd(this),e,...n);return H1.set(r,e.sort?e.sort():[e]),Dr(r)}:g2().includes(t)?function(...e){return t.apply(Wd(this),e),Dr(W1.get(this))}:function(...e){return Dr(t.apply(Wd(this),e))}}function x2(t){return typeof t=="function"?w2(t):(t instanceof IDBTransaction&&v2(t),p2(t,m2())?new Proxy(t,rh):t)}function Dr(t){if(t instanceof IDBRequest)return y2(t);if(Bd.has(t))return Bd.get(t);const e=x2(t);return e!==t&&(Bd.set(t,e),zp.set(e,t)),e}const Wd=t=>zp.get(t);function E2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const T2=["get","getKey","getAll","getAllKeys","count"],b2=["put","add","delete","clear"],Hd=new Map;function _v(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hd.get(e))return Hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=b2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||T2.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Hd.set(e,s),s}_2(t=>({...t,get:(e,n,r)=>_v(e,n)||t.get(e,n,r),has:(e,n)=>!!_v(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",wv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Up("@firebase/app"),A2="@firebase/app-compat",k2="@firebase/analytics-compat",C2="@firebase/analytics",R2="@firebase/app-check-compat",P2="@firebase/app-check",N2="@firebase/auth",D2="@firebase/auth-compat",j2="@firebase/database",O2="@firebase/data-connect",L2="@firebase/database-compat",M2="@firebase/functions",F2="@firebase/functions-compat",V2="@firebase/installations",U2="@firebase/installations-compat",z2="@firebase/messaging",$2="@firebase/messaging-compat",B2="@firebase/performance",W2="@firebase/performance-compat",H2="@firebase/remote-config",q2="@firebase/remote-config-compat",G2="@firebase/storage",K2="@firebase/storage-compat",Q2="@firebase/firestore",Y2="@firebase/vertexai-preview",X2="@firebase/firestore-compat",J2="firebase",Z2="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="[DEFAULT]",eC={[ih]:"fire-core",[A2]:"fire-core-compat",[C2]:"fire-analytics",[k2]:"fire-analytics-compat",[P2]:"fire-app-check",[R2]:"fire-app-check-compat",[N2]:"fire-auth",[D2]:"fire-auth-compat",[j2]:"fire-rtdb",[O2]:"fire-data-connect",[L2]:"fire-rtdb-compat",[M2]:"fire-fn",[F2]:"fire-fn-compat",[V2]:"fire-iid",[U2]:"fire-iid-compat",[z2]:"fire-fcm",[$2]:"fire-fcm-compat",[B2]:"fire-perf",[W2]:"fire-perf-compat",[H2]:"fire-rc",[q2]:"fire-rc-compat",[G2]:"fire-gcs",[K2]:"fire-gcs-compat",[Q2]:"fire-fst",[X2]:"fire-fst-compat",[Y2]:"fire-vertex","fire-js":"fire-js",[J2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map,tC=new Map,oh=new Map;function xv(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(oh.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of ku.values())xv(n,t);for(const n of tC.values())xv(n,t);return!0}function $p(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new Ta("app","Firebase",nC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=Z2;function q1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jr.create("bad-app-name",{appName:String(i)});if(n||(n=$1()),!n)throw jr.create("no-options");const s=ku.get(i);if(s){if(Au(n,s.options)&&Au(r,s.config))return s;throw jr.create("duplicate-app",{appName:i})}const o=new u2(i);for(const u of oh.values())o.addComponent(u);const a=new rC(n,r,o);return ku.set(i,a),a}function G1(t=sh){const e=ku.get(t);if(!e&&t===sh&&$1())return q1();if(!e)throw jr.create("no-app",{appName:t});return e}function Or(t,e,n){var r;let i=(r=eC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}ws(new _i(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="firebase-heartbeat-database",sC=1,oa="firebase-heartbeat-store";let qd=null;function K1(){return qd||(qd=E2(iC,sC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),qd}async function oC(t){try{const n=(await K1()).transaction(oa),r=await n.objectStore(oa).get(Q1(t));return await n.done,r}catch(e){if(e instanceof ir)Kn.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Ev(t,e){try{const r=(await K1()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,Q1(t)),await r.done}catch(n){if(n instanceof ir)Kn.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function Q1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1024,lC=30*24*60*60*1e3;class uC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tv(),{heartbeatsToSend:r,unsentEntries:i}=cC(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function Tv(){return new Date().toISOString().substring(0,10)}function cC(t,e=aC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xk()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bv(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){ws(new _i("platform-logger",e=>new S2(e),"PRIVATE")),ws(new _i("heartbeat",e=>new uC(e),"PRIVATE")),Or(ih,wv,t),Or(ih,wv,"esm2017"),Or("fire-js","")}fC("");var hC="firebase",pC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or(hC,pC,"app");var Sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,Y1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function T(){}T.prototype=v.prototype,b.D=v.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(I,P,N){for(var A=Array(arguments.length-2),It=2;It<arguments.length;It++)A[It-2]=arguments[It];return v.prototype[P].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,v,T){T||(T=0);var I=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)I[P]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(P=0;16>P;++P)I[P]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=b.g[0],T=b.g[1],P=b.g[2];var N=b.g[3],A=v+(N^T&(P^N))+I[0]+3614090360&4294967295;v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+I[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+I[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+I[3]+3250441966&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+I[4]+4118548399&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+I[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+I[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+I[7]+4249261313&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+I[8]+1770035416&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+I[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+I[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+I[11]+2304563134&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(N^T&(P^N))+I[12]+1804603682&4294967295,v=T+(A<<7&4294967295|A>>>25),A=N+(P^v&(T^P))+I[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(T^N&(v^T))+I[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=T+(v^P&(N^v))+I[15]+1236535329&4294967295,T=P+(A<<22&4294967295|A>>>10),A=v+(P^N&(T^P))+I[1]+4129170786&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+I[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+I[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+I[0]+3921069994&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+I[5]+3593408605&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+I[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+I[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+I[4]+3889429448&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+I[9]+568446438&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+I[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+I[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+I[8]+1163531501&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(T^P))+I[13]+2850285829&4294967295,v=T+(A<<5&4294967295|A>>>27),A=N+(T^P&(v^T))+I[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^T&(N^v))+I[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=T+(N^v&(P^N))+I[12]+2368359562&4294967295,T=P+(A<<20&4294967295|A>>>12),A=v+(T^P^N)+I[5]+4294588738&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+I[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+I[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+I[14]+4259657740&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+I[1]+2763975236&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+I[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+I[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+I[10]+3200236656&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+I[13]+681279174&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+I[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+I[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+I[6]+76029189&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(T^P^N)+I[9]+3654602809&4294967295,v=T+(A<<4&4294967295|A>>>28),A=N+(v^T^P)+I[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^T)+I[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=T+(P^N^v)+I[2]+3299628645&4294967295,T=P+(A<<23&4294967295|A>>>9),A=v+(P^(T|~N))+I[0]+4096336452&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+I[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+I[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+I[5]+4237533241&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+I[12]+1700485571&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+I[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+I[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+I[1]+2240044497&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+I[8]+1873313359&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+I[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+I[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+I[13]+1309151649&4294967295,T=P+(A<<21&4294967295|A>>>11),A=v+(P^(T|~N))+I[4]+4149444226&4294967295,v=T+(A<<6&4294967295|A>>>26),A=N+(T^(v|~P))+I[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~T))+I[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=T+(N^(P|~v))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+N&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var T=v-this.blockSize,I=this.B,P=this.h,N=0;N<v;){if(P==0)for(;N<=T;)i(this,b,N),N+=this.blockSize;if(typeof b=="string"){for(;N<v;)if(I[P++]=b.charCodeAt(N++),P==this.blockSize){i(this,I),P=0;break}}else for(;N<v;)if(I[P++]=b[N++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var T=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=T&255,T/=256;for(this.u(b),b=Array(16),v=T=0;4>v;++v)for(var I=0;32>I;I+=8)b[T++]=this.g[v]>>>I&255;return b};function s(b,v){var T=a;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=v(b)}function o(b,v){this.h=v;for(var T=[],I=!0,P=b.length-1;0<=P;P--){var N=b[P]|0;I&&N==v||(T[P]=N,I=!1)}this.g=T}var a={};function u(b){return-128<=b&&128>b?s(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function c(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return R(c(-b));for(var v=[],T=1,I=0;b>=T;I++)v[I]=b/T|0,T*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return R(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(v,8)),I=p,P=0;P<b.length;P+=8){var N=Math.min(8,b.length-P),A=parseInt(b.substring(P,P+N),v);8>N?(N=c(Math.pow(v,N)),I=I.j(N).add(c(A))):(I=I.j(T),I=I.add(c(A)))}return I}var p=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var b=0,v=1,T=0;T<this.g.length;T++){var I=this.i(T);b+=(0<=I?I:4294967296+I)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(k(this))return"-"+R(this).toString(b);for(var v=c(Math.pow(b,6)),T=this,I="";;){var P=L(T,v).g;T=E(T,P.j(v));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=P,C(T))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=E(this,b),k(b)?-1:C(b)?0:1};function R(b){for(var v=b.g.length,T=[],I=0;I<v;I++)T[I]=~b.g[I];return new o(T,~b.h).add(g)}t.abs=function(){return k(this)?R(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],I=0,P=0;P<=v;P++){var N=I+(this.i(P)&65535)+(b.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);I=A>>>16,N&=65535,A&=65535,T[P]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(b,v){return b.add(R(v))}t.j=function(b){if(C(this)||C(b))return p;if(k(this))return k(b)?R(this).j(R(b)):R(R(this).j(b));if(k(b))return R(this.j(R(b)));if(0>this.l(_)&&0>b.l(_))return c(this.m()*b.m());for(var v=this.g.length+b.g.length,T=[],I=0;I<2*v;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<b.g.length;P++){var N=this.i(I)>>>16,A=this.i(I)&65535,It=b.i(P)>>>16,hn=b.i(P)&65535;T[2*I+2*P]+=A*hn,x(T,2*I+2*P),T[2*I+2*P+1]+=N*hn,x(T,2*I+2*P+1),T[2*I+2*P+1]+=A*It,x(T,2*I+2*P+1),T[2*I+2*P+2]+=N*It,x(T,2*I+2*P+2)}for(I=0;I<v;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=v;I<2*v;I++)T[I]=0;return new o(T,0)};function x(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function S(b,v){this.g=b,this.h=v}function L(b,v){if(C(v))throw Error("division by zero");if(C(b))return new S(p,p);if(k(b))return v=L(R(b),v),new S(R(v.g),R(v.h));if(k(v))return v=L(b,R(v)),new S(R(v.g),v.h);if(30<b.g.length){if(k(b)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,I=v;0>=I.l(b);)T=U(T),I=U(I);var P=W(T,1),N=W(I,1);for(I=W(I,2),T=W(T,2);!C(I);){var A=N.add(I);0>=A.l(b)&&(P=P.add(T),N=A),I=W(I,1),T=W(T,1)}return v=E(b,P.j(v)),new S(P,v)}for(P=p;0<=b.l(v);){for(T=Math.max(1,Math.floor(b.m()/v.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(T),A=N.j(v);k(A)||0<A.l(b);)T-=I,N=c(T),A=N.j(v);C(N)&&(N=g),P=P.add(N),b=E(b,A)}return new S(P,b)}t.A=function(b){return L(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],I=0;I<v;I++)T[I]=this.i(I)&b.i(I);return new o(T,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],I=0;I<v;I++)T[I]=this.i(I)|b.i(I);return new o(T,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),T=[],I=0;I<v;I++)T[I]=this.i(I)^b.i(I);return new o(T,this.h^b.h)};function U(b){for(var v=b.g.length+1,T=[],I=0;I<v;I++)T[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(T,b.h)}function W(b,v){var T=v>>5;v%=32;for(var I=b.g.length-T,P=[],N=0;N<I;N++)P[N]=0<v?b.i(N+T)>>>v|b.i(N+T+1)<<32-v:b.i(N+T);return new o(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,hi=o}).apply(typeof Sv<"u"?Sv:typeof self<"u"?self:typeof window<"u"?window:{});var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X1,_o,J1,Bl,ah,Z1,ex,tx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof wl=="object"&&wl];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],d=d(y),d!=y&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var O=m++;return{value:d(O,l[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function p(l,d,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function g(l,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function _(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function C(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,O){for(var H=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)H[ye-2]=arguments[ye];return d.prototype[D].apply(y,H)}}function k(l){const d=l.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=l[y];return m}return[]}function R(l,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,O=y.length||0;l.length=D+O;for(let H=0;H<O;H++)l[D+H]=y[H]}else l.push(y)}}class E{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function x(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function W(l,d,m){for(const y in l)d.call(m,l[y],y,l)}function b(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function v(l){const d={};for(const m in l)d[m]=l[m];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(l,d){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let O=0;O<T.length;O++)m=T[O],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function P(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function N(l){a.setTimeout(()=>{throw l},0)}function A(){var l=te;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class It{constructor(){this.h=this.g=null}add(d,m){const y=hn.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var hn=new E(()=>new ie,l=>l.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let pn,q=!1,te=new It,se=()=>{const l=a.Promise.resolve(void 0);pn=()=>{l.then(Ae)}};var Ae=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(m){N(m)}var d=hn;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}q=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var An=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function kn(l,d){if(Le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(U){e:{try{L(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Cn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&kn.aa.h.call(this)}}C(kn,Le);var Cn={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),hb=0;function pb(l,d,m,y,D){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=D,this.key=++hb,this.da=this.fa=!1}function Va(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ua(l){this.src=l,this.g={},this.h=0}Ua.prototype.add=function(l,d,m,y,D){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var H=Gc(l,d,y,D);return-1<H?(d=l[H],m||(d.fa=!1)):(d=new pb(d,this.src,O,!!y,D),d.fa=m,l.push(d)),d};function qc(l,d){var m=d.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,d,void 0),O;(O=0<=D)&&Array.prototype.splice.call(y,D,1),O&&(Va(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Gc(l,d,m,y){for(var D=0;D<l.length;++D){var O=l[D];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==y)return D}return-1}var Kc="closure_lm_"+(1e6*Math.random()|0),Qc={};function Xm(l,d,m,y,D){if(Array.isArray(d)){for(var O=0;O<d.length;O++)Xm(l,d[O],m,y,D);return null}return m=eg(m),l&&l[Rn]?l.K(d,m,c(y)?!!y.capture:!1,D):mb(l,d,m,!1,y,D)}function mb(l,d,m,y,D,O){if(!d)throw Error("Invalid event type");var H=c(D)?!!D.capture:!!D,ye=Xc(l);if(ye||(l[Kc]=ye=new Ua(l)),m=ye.add(d,m,y,H,O),m.proxy)return m;if(y=gb(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)An||(D=H),D===void 0&&(D=!1),l.addEventListener(d.toString(),y,D);else if(l.attachEvent)l.attachEvent(Zm(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function gb(){function l(m){return d.call(l.src,l.listener,m)}const d=yb;return l}function Jm(l,d,m,y,D){if(Array.isArray(d))for(var O=0;O<d.length;O++)Jm(l,d[O],m,y,D);else y=c(y)?!!y.capture:!!y,m=eg(m),l&&l[Rn]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],m=Gc(O,m,y,D),-1<m&&(Va(O[m]),Array.prototype.splice.call(O,m,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Xc(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Gc(d,m,y,D)),(m=-1<l?d[l]:null)&&Yc(m))}function Yc(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Rn])qc(d.i,l);else{var m=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(m,y,l.capture):d.detachEvent?d.detachEvent(Zm(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Xc(d))?(qc(m,l),m.h==0&&(m.src=null,d[Kc]=null)):Va(l)}}}function Zm(l){return l in Qc?Qc[l]:Qc[l]="on"+l}function yb(l,d){if(l.da)l=!0;else{d=new kn(d,this);var m=l.listener,y=l.ha||l.src;l.fa&&Yc(l),l=m.call(y,d)}return l}function Xc(l){return l=l[Kc],l instanceof Ua?l:null}var Jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function eg(l){return typeof l=="function"?l:(l[Jc]||(l[Jc]=function(d){return l.handleEvent(d)}),l[Jc])}function lt(){ge.call(this),this.i=new Ua(this),this.M=this,this.F=null}C(lt,ge),lt.prototype[Rn]=!0,lt.prototype.removeEventListener=function(l,d,m,y){Jm(this,l,d,m,y)};function wt(l,d){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new Le(d,l);else if(d instanceof Le)d.target=d.target||l;else{var D=d;d=new Le(y,l),I(d,D)}if(D=!0,m)for(var O=m.length-1;0<=O;O--){var H=d.g=m[O];D=za(H,y,!0,d)&&D}if(H=d.g=l,D=za(H,y,!0,d)&&D,D=za(H,y,!1,d)&&D,m)for(O=0;O<m.length;O++)H=d.g=m[O],D=za(H,y,!1,d)&&D}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],y=0;y<m.length;y++)Va(m[y]);delete l.g[d],l.h--}}this.F=null},lt.prototype.K=function(l,d,m,y){return this.i.add(String(l),d,!1,m,y)},lt.prototype.L=function(l,d,m,y){return this.i.add(String(l),d,!0,m,y)};function za(l,d,m,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,O=0;O<d.length;++O){var H=d[O];if(H&&!H.da&&H.capture==m){var ye=H.listener,Xe=H.ha||H.src;H.fa&&qc(l.i,H),D=ye.call(Xe,y)!==!1&&D}}return D&&!y.defaultPrevented}function tg(l,d,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ng(l){l.g=tg(()=>{l.g=null,l.i&&(l.i=!1,ng(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class vb extends ge{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ng(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ws(l){ge.call(this),this.h=l,this.g={}}C(Ws,ge);var rg=[];function ig(l){W(l.g,function(d,m){this.g.hasOwnProperty(m)&&Yc(d)},l),l.g={}}Ws.prototype.N=function(){Ws.aa.N.call(this),ig(this)},Ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zc=a.JSON.stringify,_b=a.JSON.parse,wb=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ed(){}ed.prototype.h=null;function sg(l){return l.h||(l.h=l.i())}function og(){}var Hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function td(){Le.call(this,"d")}C(td,Le);function nd(){Le.call(this,"c")}C(nd,Le);var Zr={},ag=null;function $a(){return ag=ag||new lt}Zr.La="serverreachability";function lg(l){Le.call(this,Zr.La,l)}C(lg,Le);function qs(l){const d=$a();wt(d,new lg(d))}Zr.STAT_EVENT="statevent";function ug(l,d){Le.call(this,Zr.STAT_EVENT,l),this.stat=d}C(ug,Le);function xt(l){const d=$a();wt(d,new ug(d,l))}Zr.Ma="timingevent";function cg(l,d){Le.call(this,Zr.Ma,l),this.size=d}C(cg,Le);function Gs(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function xb(l,d,m,y,D,O){l.info(function(){if(l.g)if(O)for(var H="",ye=O.split("&"),Xe=0;Xe<ye.length;Xe++){var fe=ye[Xe].split("=");if(1<fe.length){var ut=fe[0];fe=fe[1];var ct=ut.split("_");H=2<=ct.length&&ct[1]=="type"?H+(ut+"="+fe+"&"):H+(ut+"=redacted&")}}else H=null;else H=O;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+m+`
`+H})}function Eb(l,d,m,y,D,O,H){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+m+`
`+O+" "+H})}function Ni(l,d,m,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+bb(l,m)+(y?" "+y:"")})}function Tb(l,d){l.info(function(){return"TIMEOUT: "+d})}Ks.prototype.info=function(){};function bb(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var H=1;H<D.length;H++)D[H]=""}}}}return Zc(m)}catch{return d}}var Ba={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rd;function Wa(){}C(Wa,ed),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},rd=new Wa;function ar(l,d,m,y){this.j=l,this.i=d,this.l=m,this.R=y||1,this.U=new Ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fg}function fg(){this.i=null,this.g="",this.h=!1}var hg={},id={};function sd(l,d,m){l.L=1,l.v=Ka(Pn(d)),l.m=m,l.P=!0,pg(l,null)}function pg(l,d){l.F=Date.now(),Ha(l),l.A=Pn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),kg(m.i,"t",y),l.C=0,m=l.j.J,l.h=new fg,l.g=qg(l.j,m?d:null,!l.m),0<l.O&&(l.M=new vb(g(l.Y,l,l.g),l.O)),d=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(rg[0]=D.toString()),D=rg);for(var O=0;O<D.length;O++){var H=Xm(m,D[O],y||d.handleEvent,!1,d.h||d);if(!H)break;d.g[H.key]=H}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),qs(),xb(l.i,l.u,l.A,l.l,l.R,l.m)}ar.prototype.ca=function(l){l=l.target;const d=this.M;d&&Nn(l)==3?d.j():this.Y(l)},ar.prototype.Y=function(l){try{if(l==this.g)e:{const ct=Nn(this.g);var d=this.g.Ba();const Oi=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Og(this.g)))){this.J||ct!=4||d==7||(d==8||0>=Oi?qs(3):qs(2)),od(this);var m=this.g.Z();this.X=m;t:if(mg(this)){var y=Og(this.g);l="";var D=y.length,O=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),Qs(this);var H="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(O&&d==D-1)});y.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=m==200,Eb(this.i,this.u,this.A,this.l,this.R,ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Xe=this.g;if((ye=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ye)){var fe=ye;break t}}fe=null}if(m=fe)Ni(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ad(this,m);else{this.o=!1,this.s=3,xt(12),ei(this),Qs(this);break e}}if(this.P){m=!0;let Zt;for(;!this.J&&this.C<H.length;)if(Zt=Sb(this,H),Zt==id){ct==4&&(this.s=4,xt(14),m=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==hg){this.s=4,xt(15),Ni(this.i,this.l,H,"[Invalid Chunk]"),m=!1;break}else Ni(this.i,this.l,Zt,null),ad(this,Zt);if(mg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||H.length!=0||this.h.h||(this.s=1,xt(16),m=!1),this.o=this.o&&m,!m)Ni(this.i,this.l,H,"[Invalid Chunked Response]"),ei(this),Qs(this);else if(0<H.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),hd(ut),ut.M=!0,xt(11))}}else Ni(this.i,this.l,H,null),ad(this,H);ct==4&&ei(this),this.o&&!this.J&&(ct==4?$g(this.j,this):(this.o=!1,Ha(this)))}else $b(this.g),m==400&&0<H.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),ei(this),Qs(this)}}}catch{}finally{}};function mg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Sb(l,d){var m=l.C,y=d.indexOf(`
`,m);return y==-1?id:(m=Number(d.substring(m,y)),isNaN(m)?hg:(y+=1,y+m>d.length?id:(d=d.slice(y,y+m),l.C=y+m,d)))}ar.prototype.cancel=function(){this.J=!0,ei(this)};function Ha(l){l.S=Date.now()+l.I,gg(l,l.I)}function gg(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Gs(g(l.ba,l),d)}function od(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ar.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Tb(this.i,this.A),this.L!=2&&(qs(),xt(17)),ei(this),this.s=2,Qs(this)):gg(this,this.S-l)};function Qs(l){l.j.G==0||l.J||$g(l.j,l)}function ei(l){od(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ig(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function ad(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||ld(m.h,l))){if(!l.K&&ld(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)el(m),Ja(m);else break e;fd(m),xt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Gs(g(m.Za,m),6e3));if(1>=_g(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ni(m,11)}else if((l.K||m.g==l)&&el(m),!x(d))for(D=m.Da.g.parse(d),d=0;d<D.length;d++){let fe=D[d];if(m.T=fe[0],fe=fe[1],m.G==2)if(fe[0]=="c"){m.K=fe[1],m.ia=fe[2];const ut=fe[3];ut!=null&&(m.la=ut,m.j.info("VER="+m.la));const ct=fe[4];ct!=null&&(m.Aa=ct,m.j.info("SVER="+m.Aa));const Oi=fe[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(y=1.5*Oi,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Zt=l.g;if(Zt){const nl=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var O=y.h;O.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ud(O,O.h),O.h=null))}if(y.D){const pd=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;pd&&(y.ya=pd,xe(y.I,y.D,pd))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var H=l;if(y.qa=Hg(y,y.J?y.ia:null,y.W),H.K){wg(y.h,H);var ye=H,Xe=y.L;Xe&&(ye.I=Xe),ye.B&&(od(ye),Ha(ye)),y.g=H}else Ug(y);0<m.i.length&&Za(m)}else fe[0]!="stop"&&fe[0]!="close"||ni(m,7);else m.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ni(m,7):dd(m):fe[0]!="noop"&&m.l&&m.l.ta(fe),m.v=0)}}qs(4)}catch{}}var Ib=class{constructor(l,d){this.g=l,this.map=d}};function yg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function _g(l){return l.h?1:l.g?l.g.size:0}function ld(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function ud(l,d){l.g?l.g.add(d):l.h=d}function wg(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}yg.prototype.cancel=function(){if(this.i=xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function xg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return k(l.i)}function Ab(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],m=l.length,y=0;y<m;y++)d.push(l[y]);return d}d=[],m=0;for(y in l)d[m++]=l[y];return d}function kb(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const y in l)d[m++]=y;return d}}}function Eg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=kb(l),y=Ab(l),D=y.length,O=0;O<D;O++)d.call(void 0,y[O],m&&m[O],l)}var Tg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cb(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var O=l[m].substring(0,y);D=l[m].substring(y+1)}else O=l[m];d(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ti){this.h=l.h,qa(this,l.j),this.o=l.o,this.g=l.g,Ga(this,l.s),this.l=l.l;var d=l.i,m=new Js;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),bg(this,m),this.m=l.m}else l&&(d=String(l).match(Tg))?(this.h=!1,qa(this,d[1]||"",!0),this.o=Ys(d[2]||""),this.g=Ys(d[3]||"",!0),Ga(this,d[4]),this.l=Ys(d[5]||"",!0),bg(this,d[6]||"",!0),this.m=Ys(d[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}ti.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Xs(d,Sg,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Xs(d,Sg,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Xs(m,m.charAt(0)=="/"?Nb:Pb,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Xs(m,jb)),l.join("")};function Pn(l){return new ti(l)}function qa(l,d,m){l.j=m?Ys(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ga(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function bg(l,d,m){d instanceof Js?(l.i=d,Ob(l.i,l.h)):(m||(d=Xs(d,Db)),l.i=new Js(d,l.h))}function xe(l,d,m){l.i.set(d,m)}function Ka(l){return xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ys(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xs(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Rb),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Rb(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Sg=/[#\/\?@]/g,Pb=/[#\?:]/g,Nb=/[#\?]/g,Db=/[#\?@]/g,jb=/#/g;function Js(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function lr(l){l.g||(l.g=new Map,l.h=0,l.i&&Cb(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Js.prototype,t.add=function(l,d){lr(this),this.i=null,l=Di(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function Ig(l,d){lr(l),d=Di(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ag(l,d){return lr(l),d=Di(l,d),l.g.has(d)}t.forEach=function(l,d){lr(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(d,D,y,this)},this)},this)},t.na=function(){lr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const D=l[y];for(let O=0;O<D.length;O++)m.push(d[y])}return m},t.V=function(l){lr(this);let d=[];if(typeof l=="string")Ag(this,l)&&(d=d.concat(this.g.get(Di(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return lr(this),this.i=null,l=Di(this,l),Ag(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function kg(l,d,m){Ig(l,d),0<m.length&&(l.i=null,l.g.set(Di(l,d),k(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const O=encodeURIComponent(String(y)),H=this.V(y);for(y=0;y<H.length;y++){var D=O;H[y]!==""&&(D+="="+encodeURIComponent(String(H[y]))),l.push(D)}}return this.i=l.join("&")};function Di(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Ob(l,d){d&&!l.j&&(lr(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(Ig(this,y),kg(this,D,m))},l)),l.j=d}function Lb(l,d){const m=new Ks;if(a.Image){const y=new Image;y.onload=_(ur,m,"TestLoadImage: loaded",!0,d,y),y.onerror=_(ur,m,"TestLoadImage: error",!1,d,y),y.onabort=_(ur,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(ur,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function Mb(l,d){const m=new Ks,y=new AbortController,D=setTimeout(()=>{y.abort(),ur(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(O=>{clearTimeout(D),O.ok?ur(m,"TestPingServer: ok",!0,d):ur(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),ur(m,"TestPingServer: error",!1,d)})}function ur(l,d,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function Fb(){this.g=new wb}function Vb(l,d,m){const y=m||"";try{Eg(l,function(D,O){let H=D;c(D)&&(H=Zc(D)),d.push(y+O+"="+encodeURIComponent(H))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Qa(l){this.l=l.Ub||null,this.j=l.eb||!1}C(Qa,ed),Qa.prototype.g=function(){return new Ya(this.l,this.j)},Qa.prototype.i=function(l){return function(){return l}}({});function Ya(l,d){lt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ya,lt),t=Ya.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,eo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,eo(this)),this.g&&(this.readyState=3,eo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Zs(this):eo(this),this.readyState==3&&Cg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zs(this))},t.Qa=function(l){this.g&&(this.response=l,Zs(this))},t.ga=function(){this.g&&Zs(this)};function Zs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,eo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function eo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Rg(l){let d="";return W(l,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function cd(l,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Rg(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):xe(l,d,m))}function Ne(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ne,lt);var Ub=/^https?$/i,zb=["POST","PUT"];t=Ne.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rd.g(),this.v=this.o?sg(this.o):sg(rd),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){Pg(this,O);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())m.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zb,d,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,H]of m)this.g.setRequestHeader(O,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jg(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Pg(this,O)}};function Pg(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ng(l),Xa(l)}function Ng(l){l.A||(l.A=!0,wt(l,"complete"),wt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,wt(this,"complete"),wt(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),Ne.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dg(this):this.bb())},t.bb=function(){Dg(this)};function Dg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Nn(l)!=4||l.Z()!=2)){if(l.u&&Nn(l)==4)tg(l.Ea,0,l);else if(wt(l,"readystatechange"),Nn(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=H===0){var D=String(l.D).match(Tg)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!Ub.test(D?D.toLowerCase():"")}m=y}if(m)wt(l,"complete"),wt(l,"success");else{l.m=6;try{var O=2<Nn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",Ng(l)}}finally{Xa(l)}}}}function Xa(l,d){if(l.g){jg(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||wt(l,"ready");try{m.onreadystatechange=y}catch{}}}function jg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Nn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),_b(d)}};function Og(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function $b(l){const d={};l=(l.g&&2<=Nn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(x(l[y]))continue;var m=P(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[D]||[];d[D]=O,O.push(m)}b(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function to(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function Lg(l){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=to("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=to("baseRetryDelayMs",5e3,l),this.cb=to("retryDelaySeedMs",1e4,l),this.Wa=to("forwardChannelMaxRetries",2,l),this.wa=to("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new yg(l&&l.concurrentRequestLimit),this.Da=new Fb,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Lg.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,y){xt(0),this.W=l,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Hg(this,null,this.W),Za(this)};function dd(l){if(Mg(l),l.G==3){var d=l.U++,m=Pn(l.I);if(xe(m,"SID",l.K),xe(m,"RID",d),xe(m,"TYPE","terminate"),no(l,m),d=new ar(l,l.j,d),d.L=2,d.v=Ka(Pn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=qg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ha(d)}Wg(l)}function Ja(l){l.g&&(hd(l),l.g.cancel(),l.g=null)}function Mg(l){Ja(l),l.u&&(a.clearTimeout(l.u),l.u=null),el(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Za(l){if(!vg(l.h)&&!l.s){l.s=!0;var d=l.Ga;pn||se(),q||(pn(),q=!0),te.add(d,l),l.B=0}}function Bb(l,d){return _g(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Gs(g(l.Ga,l,d),Bg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new ar(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=Vg(this,D,d),m=Pn(this.I),xe(m,"RID",l),xe(m,"CVER",22),this.D&&xe(m,"X-HTTP-Session-Id",this.D),no(this,m),O&&(this.O?d="headers="+encodeURIComponent(String(Rg(O)))+"&"+d:this.m&&cd(m,this.m,O)),ud(this.h,D),this.Ua&&xe(m,"TYPE","init"),this.P?(xe(m,"$req",d),xe(m,"SID","null"),D.T=!0,sd(D,m,null)):sd(D,m,d),this.G=2}}else this.G==3&&(l?Fg(this,l):this.i.length==0||vg(this.h)||Fg(this))};function Fg(l,d){var m;d?m=d.l:m=l.U++;const y=Pn(l.I);xe(y,"SID",l.K),xe(y,"RID",m),xe(y,"AID",l.T),no(l,y),l.m&&l.o&&cd(y,l.m,l.o),m=new ar(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Vg(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ud(l.h,m),sd(m,y,d)}function no(l,d){l.H&&W(l.H,function(m,y){xe(d,y,m)}),l.l&&Eg({},function(m,y){xe(d,y,m)})}function Vg(l,d,m){m=Math.min(l.i.length,m);var y=l.l?g(l.l.Na,l.l,l):null;e:{var D=l.i;let O=-1;for(;;){const H=["count="+m];O==-1?0<m?(O=D[0].g,H.push("ofs="+O)):O=0:H.push("ofs="+O);let ye=!0;for(let Xe=0;Xe<m;Xe++){let fe=D[Xe].g;const ut=D[Xe].map;if(fe-=O,0>fe)O=Math.max(0,D[Xe].g-100),ye=!1;else try{Vb(ut,H,"req"+fe+"_")}catch{y&&y(ut)}}if(ye){y=H.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,y}function Ug(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;pn||se(),q||(pn(),q=!0),te.add(d,l),l.v=0}}function fd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Gs(g(l.Fa,l),Bg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,zg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Gs(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Ja(this),zg(this))};function hd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function zg(l){l.g=new ar(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Pn(l.qa);xe(d,"RID","rpc"),xe(d,"SID",l.K),xe(d,"AID",l.T),xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&xe(d,"TO",l.ja),xe(d,"TYPE","xmlhttp"),no(l,d),l.m&&l.o&&cd(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ka(Pn(d)),m.m=null,m.P=!0,pg(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),fd(this),xt(19))};function el(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function $g(l,d){var m=null;if(l.g==d){el(l),hd(l),l.g=null;var y=2}else if(ld(l.h,d))m=d.D,wg(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;y=$a(),wt(y,new cg(y,m)),Za(l)}else Ug(l);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&Bb(l,d)||y==2&&fd(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),D){case 1:ni(l,5);break;case 4:ni(l,10);break;case 3:ni(l,6);break;default:ni(l,2)}}}function Bg(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function ni(l,d){if(l.j.info("Error code "+d),d==2){var m=g(l.fb,l),y=l.Xa;const D=!y;y=new ti(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||qa(y,"https"),Ka(y),D?Lb(y.toString(),m):Mb(y.toString(),m)}else xt(2);l.G=0,l.l&&l.l.sa(d),Wg(l),Mg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Wg(l){if(l.G=0,l.ka=[],l.l){const d=xg(l.h);(d.length!=0||l.i.length!=0)&&(R(l.ka,d),R(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function Hg(l,d,m){var y=m instanceof ti?Pn(m):new ti(m);if(y.g!="")d&&(y.g=d+"."+y.g),Ga(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var O=new ti(null);y&&qa(O,y),d&&(O.g=d),D&&Ga(O,D),m&&(O.l=m),y=O}return m=l.D,d=l.ya,m&&d&&xe(y,m,d),xe(y,"VER",l.la),no(l,y),y}function qg(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ne(new Qa({eb:m})):new Ne(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gg(){}t=Gg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(l,d){return new Ot(l,d)};function Ot(l,d){lt.call(this),this.g=new Lg(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!x(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ji(this)}C(Ot,lt),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){dd(this.g)},Ot.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Zc(l),l=m);d.i.push(new Ib(d.Ya++,l)),d.G==3&&Za(d)},Ot.prototype.N=function(){this.g.l=null,delete this.j,dd(this.g),delete this.g,Ot.aa.N.call(this)};function Kg(l){td.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(Kg,td);function Qg(){nd.call(this),this.status=1}C(Qg,nd);function ji(l){this.g=l}C(ji,Gg),ji.prototype.ua=function(){wt(this.g,"a")},ji.prototype.ta=function(l){wt(this.g,new Kg(l))},ji.prototype.sa=function(l){wt(this.g,new Qg)},ji.prototype.ra=function(){wt(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,tx=function(){return new tl},ex=function(){return $a()},Z1=Zr,ah={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Bl=Ba,dg.COMPLETE="complete",J1=dg,og.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",lt.prototype.listen=lt.prototype.K,_o=og,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,X1=Ne}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});const Iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Up("@firebase/firestore");function fo(){return wi.logLevel}function Q(t,...e){if(wi.logLevel<=ue.DEBUG){const n=e.map(Bp);wi.debug(`Firestore (${Ms}): ${t}`,...n)}}function Qn(t,...e){if(wi.logLevel<=ue.ERROR){const n=e.map(Bp);wi.error(`Firestore (${Ms}): ${t}`,...n)}}function xs(t,...e){if(wi.logLevel<=ue.WARN){const n=e.map(Bp);wi.warn(`Firestore (${Ms}): ${t}`,...n)}}function Bp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function me(t,e){t||ee()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class gC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yC{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new nx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new pt(e)}}class vC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _C{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new wC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=EC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new He(0,0))}static max(){return new ne(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends aa{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const TC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends aa{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return TC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}function bC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Ur(i,X.empty(),e)}function SC(t){return new Ur(t.readTime,t.key,-1)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(ne.min(),X.empty(),-1)}static max(){return new Ur(ne.max(),X.empty(),-1)}}function IC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==AC)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wp.oe=-1;function gc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function RC(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ix(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}}class xl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new rt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sx("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(me(!!t),typeof t=="string"){let e=0;const n=PC.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qp(t){const e=t.mapValue.fields.__previous_value__;return Hp(e)?qp(e):e}function la(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El={mapValue:{}};function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hp(t)?4:jC(t)?9007199254740991:DC(t)?10:11:ee()}function In(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return la(t).isEqual(la(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),a=zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?Cu(o)===Cu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Av(o)!==Av(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!In(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function ca(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Ei(t),r=Ei(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Cv(t.timestampValue,e.timestampValue);case 4:return Cv(la(t),la(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const a=xi(s),u=xi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=he(a[c],u[c]);if(h!==0)return h}return he(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=he(Me(s.latitude),Me(o.latitude));return a!==0?a:he(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const p=s.fields||{},g=o.fields||{},_=(a=p.value)===null||a===void 0?void 0:a.arrayValue,C=(u=g.value)===null||u===void 0?void 0:u.arrayValue,k=he(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:Rv(_,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===El.mapValue&&o===El.mapValue)return 0;if(s===El.mapValue)return 1;if(o===El.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const g=he(u[p],h[p]);if(g!==0)return g;const _=Ts(a[u[p]],c[h[p]]);if(_!==0)return _}return he(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=zr(t),r=zr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Rv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ts(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function bs(t){return lh(t)}function lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=lh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${lh(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function Pv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uh(t){return!!t&&"integerValue"in t}function Gp(t){return!!t&&"arrayValue"in t}function Nv(t){return!!t&&"nullValue"in t}function Dv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wl(t){return!!t&&"mapValue"in t}function DC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Do(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Do(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(Do(this.value))}}function ox(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new et([n]);if(Wl(r)){const s=ox(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,ne.min(),ne.min(),ne.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,ne.min(),ne.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ne.min(),ne.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ov(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function OC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{}class $e extends ax{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new zC(e,r):n==="not-in"?new $C(e,r):n==="array-contains-any"?new BC(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FC(e,r):new VC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends ax{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return lx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lx(t){return t.op==="and"}function ux(t){return LC(t)&&lx(t)}function LC(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function ch(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(ux(t))return t.filters.map(e=>ch(e)).join(",");{const e=t.filters.map(n=>ch(n)).join(",");return`${t.op}(${e})`}}function cx(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&cx(o,i.filters[a]),!0):!1}(t,e):void ee()}function dx(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(dx).join(" ,")+"}"}(t):"Filter"}class MC extends $e{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class FC extends $e{constructor(e,n){super(e,"in",n),this.keys=fx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VC extends $e{constructor(e,n){super(e,"not-in",n),this.keys=fx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function fx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class UC extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&ca(n.arrayValue,this.value)}}class zC extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class $C extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ca(this.value.arrayValue,n)}}class BC extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Lv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WC(t,e,n,r,i,s,o)}function Kp(t){const e=re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ch(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ue=n}return e.ue}function Qp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ov(t.startAt,e.startAt)&&Ov(t.endAt,e.endAt)}function dh(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HC(t,e,n,r,i,s,o,a){return new Fs(t,e,n,r,i,s,o,a)}function yc(t){return new Fs(t)}function Mv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hx(t){return t.collectionGroup!==null}function jo(t){const e=re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new da(s,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new da(et.keyField(),r))}return e.ce}function xn(t){const e=re(t);return e.le||(e.le=qC(e,jo(t))),e.le}function qC(t,e){if(t.limitType==="F")return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new da(i.field,s)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return Lv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fh(t,e){const n=t.filters.concat([e]);return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hh(t,e,n){return new Fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return Qp(xn(t),xn(e))&&t.limitType===e.limitType}function px(t){return`${Kp(xn(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>dx(i)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bs(i)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=jv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,jo(r),i)||r.endAt&&!function(o,a,u){const c=jv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,jo(r),i))}(t,e)}function GC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mx(t){return(e,n)=>{let r=!1;for(const i of jo(t)){const s=KC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ts(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ix(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new Pe(X.comparator);function Yn(){return QC}const gx=new Pe(X.comparator);function wo(...t){let e=gx;for(const n of t)e=e.insert(n.key,n);return e}function yx(t){let e=gx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ui(){return Oo()}function vx(){return Oo()}function Oo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const YC=new Pe(X.comparator),XC=new rt(X.comparator);function le(...t){let e=XC;for(const n of t)e=e.add(n);return e}const JC=new rt(he);function ZC(){return JC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function _x(t){return{integerValue:""+t}}function eR(t,e){return RC(e)?_x(e):Yp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function tR(t,e,n){return t instanceof Pu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hp(s)&&(s=qp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fa?xx(t,e):t instanceof ha?Ex(t,e):function(i,s){const o=wx(i,s),a=Fv(o)+Fv(i.Pe);return uh(o)&&uh(i.Pe)?_x(a):Yp(i.serializer,a)}(t,e)}function nR(t,e,n){return t instanceof fa?xx(t,e):t instanceof ha?Ex(t,e):n}function wx(t,e){return t instanceof Nu?function(r){return uh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pu extends wc{}class fa extends wc{constructor(e){super(),this.elements=e}}function xx(t,e){const n=Tx(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class ha extends wc{constructor(e){super(),this.elements=e}}function Ex(t,e){let n=Tx(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Nu extends wc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Fv(t){return Me(t.integerValue||t.doubleValue)}function Tx(t){return Gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fa&&i instanceof fa||r instanceof ha&&i instanceof ha?Es(r.elements,i.elements,In):r instanceof Nu&&i instanceof Nu?In(r.Pe,i.Pe):r instanceof Pu&&i instanceof Pu}(t.transform,e.transform)}class iR{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function bx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xp(t.key,Yt.none()):new Aa(t.key,t.data,Yt.none());{const n=t.data,r=kt.empty();let i=new rt(et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new Vt(i.toArray()),Yt.none())}}function sR(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),u=Uv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!Hl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Sx(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Lo(t,e,n,r){return t instanceof Aa?function(s,o,a,u){if(!Hl(s.precondition,o))return a;const c=s.value.clone(),h=zv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,a,u){if(!Hl(s.precondition,o))return a;const c=zv(s.fieldTransforms,u,o),h=o.data;return h.setAll(Sx(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Hl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wx(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function Vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Es(r,i,(s,o)=>rR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nR(o,a,n[i]))}return r}function zv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tR(s,o,e))}return r}class Xp extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aR extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=vx();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=bx(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>Vv(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>Vv(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return YC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function dR(t){switch(t){default:return ee();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Ix(t){if(t===void 0)return Qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ue.OK:return F.OK;case Ue.CANCELLED:return F.CANCELLED;case Ue.UNKNOWN:return F.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return F.INTERNAL;case Ue.UNAVAILABLE:return F.UNAVAILABLE;case Ue.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ue.NOT_FOUND:return F.NOT_FOUND;case Ue.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ue.ABORTED:return F.ABORTED;case Ue.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ue.DATA_LOSS:return F.DATA_LOSS;default:return ee()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new hi([4294967295,4294967295],0);function $v(t){const e=fR().encode(t),n=new Y1;return n.update(e),new Uint8Array(n.digest())}function Bv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hi([n,r],0),new hi([i,s],0)]}class Zp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(hi.fromNumber(r)));return i.compare(hR)===1&&(i=new hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$v(e),[r,i]=Bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=$v(e),[r,i]=Bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(ne.min(),i,new Pe(he),Yn(),le())}}class ka{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ka(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Ax{constructor(e,n){this.targetId=e,this.me=n}}class kx{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wv{constructor(){this.fe=0,this.ge=qv(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new ka(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=Hv(),this.Qe=new Pe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(dh(s))if(r===0){const o=new X(s.path);this.Ue(n,o,gt.newNoDocument(o,ne.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=xi(r).toUint8Array()}catch(u){if(u instanceof sx)return xs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Zp(o,i,s)}catch(u){return xs(u instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&dh(a.target)){const u=new X(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,gt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=le();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ec(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=Hv(),this.Qe=new Pe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Wv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Wv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Hv(){return new Pe(X.comparator)}function qv(){return new Pe(X.comparator)}const mR={asc:"ASCENDING",desc:"DESCENDING"},gR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yR={and:"AND",or:"OR"};class vR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ph(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _R(t,e){return Du(t,e.toTimestamp())}function En(t){return me(!!t),ne.fromTimestamp(function(n){const r=zr(n);return new He(r.seconds,r.nanos)}(t))}function em(t,e){return mh(t,e).canonicalString()}function mh(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Rx(t){const e=Te.fromString(t);return me(Ox(e)),e}function gh(t,e){return em(t.databaseId,e.path)}function Gd(t,e){const n=Rx(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Nx(n))}function Px(t,e){return em(t.databaseId,e)}function wR(t){const e=Rx(t);return e.length===4?Te.emptyPath():Nx(e)}function yh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nx(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gv(t,e,n){return{name:gh(t,e),fields:n.value.mapValue.fields}}function xR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string"),ot.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:Ix(c.code);return new G(h,c.message||"")}(o);n=new kx(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):ne.min(),a=new kt({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ql(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gd(t,r.document),s=r.readTime?En(r.readTime):ne.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ql([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gd(t,r.document),s=r.removedTargetIds||[];n=new ql([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cR(i,s),a=r.targetId;n=new Ax(a,o)}}return n}function ER(t,e){let n;if(e instanceof Aa)n={update:Gv(t,e.key,e.value)};else if(e instanceof Xp)n={delete:gh(t,e.key)};else if(e instanceof Yr)n={update:Gv(t,e.key,e.data),updateMask:PR(e.fieldMask)};else{if(!(e instanceof aR))return ee();n={verify:gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Nu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_R(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function TR(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?En(i.updateTime):En(s);return o.isEqual(ne.min())&&(o=En(s)),new iR(o,i.transformResults||[])}(n,e))):[]}function bR(t,e){return{documents:[Px(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Px(t,i);const s=function(c){if(c.length!==0)return jx(cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Ui(g.field),direction:kR(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ph(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function IR(t){let e=wR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=Dx(p);return g instanceof cn&&ux(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new da(zi(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,gc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,_=p.values||[];return new Ru(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,_=p.values||[];return new Ru(_,g)}(n.endAt)),HC(e,i,o,s,a,"F",u,c)}function AR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>Dx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function kR(t){return mR[t]}function CR(t){return gR[t]}function RR(t){return yR[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function zi(t){return et.fromServerFormat(t.fieldPath)}function jx(t){return t instanceof $e?function(n){if(n.op==="=="){if(Dv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(Nv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(Nv(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:CR(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>jx(i));return r.length===1?r[0]:{compositeFilter:{op:RR(n.op),filters:r}}}(t):ee()}function PR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ox(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.ct=e}}function DR(t){const e=IR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.un=new OR}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Ur.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class OR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ss(0)}static kn(){return new Ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Lo(r.mutation,i,Vt.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=Oo(),a=function(){return Oo()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Yr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Lo(h.mutation,c,h.mutation.getFieldMask(),He.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new MR(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new Pe((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Vt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const p=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,p=vx();h.forEach(g=>{if(!s.has(g)){const _=bx(n.get(g),r.get(g));_!==null&&p.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(ui());let a=-1,u=s;return o.next(c=>V.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(h=>({batchId:a,changes:yx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,u=>{const c=function(p,g){return new Fs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,gt.newInvalidDocument(h)))});let a=wo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Lo(h.mutation,c,Vt.empty(),He.now()),_c(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:DR(i.bundledQuery),readTime:En(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new Pe(X.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ui();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=ui(),s=n.length+1,o=new X(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ui(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ui(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uR(n,r));let s=this.Ir.get(n);s===void 0&&(s=le(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(){this.Tr=new rt(Ke.Er),this.dr=new rt(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Te([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Te([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=le();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(Ke.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(he);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new X(s),0);let a=new rt(he);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.Mr=e,this.docs=function(){return new Pe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new X(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IC(SC(h),r)<=0||(i.has(h.key)||_c(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WR(this)}getSize(e){return V.resolve(this.size)}}class WR extends LR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.Nr=new Vs(n=>Kp(n),Qp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tm,this.targetCount=0,this.kr=Ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wp(0),this.Kr=!1,this.Kr=!0,this.$r=new zR,this.referenceDelegate=e(this),this.Ur=new HR(this),this.indexManager=new jR,this.remoteDocumentCache=function(i){return new BR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NR(n),this.Gr=new VR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $R(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new GR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GR extends kC{constructor(e){super(),this.currentSequenceNumber=e}}class nm{constructor(e){this.persistence=e,this.Jr=new tm,this.Yr=null}static Zr(e){return new nm(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=X.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Yk()?8:CC(_t())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KR;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fo()<=ue.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(fo()<=ue.DEBUG&&Q("QueryEngine","Query:",Vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fo()<=ue.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):V.resolve())}Yi(e,n){if(Mv(n))return V.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hh(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,hh(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Mv(n)||i.isEqual(ne.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(fo()<=ue.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vi(n)),this.rs(e,o,n,bC(i,-1)).next(a=>a))})}ts(e,n){let r=new rt(mx(e));return n.forEach((i,s)=>{_c(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fo()<=ue.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ur.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(he),this._s=new Vs(s=>Kp(s),Qp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function XR(t,e,n,r){return new YR(t,e,n,r)}async function Lx(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=le();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function JR(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const p=c.batch,g=p.keys();let _=V.resolve();return g.forEach(C=>{_=_.next(()=>h.getEntry(u,C)).next(k=>{const R=c.docVersions.get(C);me(R!==null),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Mx(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function ZR(t,e){const n=re(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(p,_),function(k,R,E){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let u=Yn(),c=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(eP(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ne.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function eP(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function tP(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nP(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function vh(t,e,n){const r=re(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ia(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Kv(t,e,n){const r=re(t);let i=ne.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const p=re(u),g=p._s.get(h);return g!==void 0?V.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:le())).next(a=>(rP(r,GC(e),a),{documents:a,Ts:s})))}function rP(t,e,n){let r=t.us.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Qv{constructor(){this.activeTargetIds=ZC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iP{constructor(){this.so=new Qv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl=null;function Kd(){return Tl===null?Tl=function(){return 268435456+Math.round(2147483648*Math.random())}():Tl++,"0x"+Tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class lP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Kd(),u=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw xs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=oP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Kd();return new Promise((o,a)=>{const u=new X1;u.setWithCredentials(!0),u.listenOnce(J1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bl.NO_ERROR:const h=u.getResponseJson();Q(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Bl.TIMEOUT:Q(ht,`RPC '${e}' ${s} timed out`),a(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const p=u.getStatus();if(Q(ht,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const C=function(R){const E=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(E)>=0?E:F.UNKNOWN}(_.status);a(new G(C,_.message))}else a(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(F.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Q(ht,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Q(ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Kd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tx(),a=ex(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Q(ht,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=o.createWebChannel(h,u);let g=!1,_=!1;const C=new aP({Io:R=>{_?Q(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(Q(ht,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Q(ht,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},To:()=>p.close()}),k=(R,E,x)=>{R.listen(E,S=>{try{x(S)}catch(L){setTimeout(()=>{throw L},0)}})};return k(p,_o.EventType.OPEN,()=>{_||(Q(ht,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),k(p,_o.EventType.CLOSE,()=>{_||(_=!0,Q(ht,`RPC '${e}' stream ${i} transport closed`),C.So())}),k(p,_o.EventType.ERROR,R=>{_||(_=!0,xs(ht,`RPC '${e}' stream ${i} transport errored:`,R),C.So(new G(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,_o.EventType.MESSAGE,R=>{var E;if(!_){const x=R.data[0];me(!!x);const S=x,L=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(L){Q(ht,`RPC '${e}' stream ${i} received error:`,L);const U=L.status;let W=function(T){const I=Ue[T];if(I!==void 0)return Ix(I)}(U),b=L.message;W===void 0&&(W=F.INTERNAL,b="Unknown error status: "+U+" with message "+L.message),_=!0,C.So(new G(W,b)),p.close()}else Q(ht,`RPC '${e}' stream ${i} received:`,x),C.bo(x)}}),k(a,Z1.STAT_EVENT,R=>{R.stat===ah.PROXY?Q(ht,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===ah.NOPROXY&&Q(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new vR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Fx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uP extends Vx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=xR(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?En(o.readTime):ne.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=yh(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=dh(u)?{documents:bR(s,u)}:{query:SR(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Cx(s,o.resumeToken);const c=ph(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Du(s,o.snapshotVersion.toTimestamp());const c=ph(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=AR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=yh(this.serializer),n.removeTarget=e,this.a_(n)}}class cP extends Vx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=TR(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=yh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ER(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,mh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,mh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qn(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=re(u);c.L_.add(4),await Ca(c),c.q_.set("Unknown"),c.L_.delete(4),await bc(c)}(this))})}),this.q_=new fP(r,i)}}async function bc(t){if(Ri(t))for(const e of t.B_)await e(!0)}async function Ca(t){for(const e of t.B_)await e(!1)}function Ux(t,e){const n=re(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),am(n)?om(n):Us(n).r_()&&sm(n,e))}function im(t,e){const n=re(t),r=Us(n);n.N_.delete(e),r.r_()&&zx(n,e),n.N_.size===0&&(r.r_()?r.o_():Ri(n)&&n.q_.set("Unknown"))}function sm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).A_(e)}function zx(t,e){t.Q_.xe(e),Us(t).R_(e)}function om(t){t.Q_=new pR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.q_.v_()}function am(t){return Ri(t)&&!Us(t).n_()&&t.N_.size>0}function Ri(t){return re(t).L_.size===0}function $x(t){t.Q_=void 0}async function pP(t){t.q_.set("Online")}async function mP(t){t.N_.forEach((e,n)=>{sm(t,e)})}async function gP(t,e){$x(t),am(t)?(t.q_.M_(e),om(t)):t.q_.set("Unknown")}async function yP(t,e,n){if(t.q_.set("Online"),e instanceof kx&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ju(t,r)}else if(e instanceof ql?t.Q_.Ke(e):e instanceof Ax?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ne.min()))try{const r=await Mx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),zx(s,u);const p=new Tr(h.target,u,c,h.sequenceNumber);sm(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await ju(t,r)}}async function ju(t,e,n){if(!Ia(e))throw e;t.L_.add(1),await Ca(t),t.q_.set("Offline"),n||(n=()=>Mx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bc(t)})}function Bx(t,e){return e().catch(n=>ju(t,n,e))}async function Sc(t){const e=re(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vP(e);)try{const i=await tP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,_P(e,i)}catch(i){await ju(e,i)}Wx(e)&&Hx(e)}function vP(t){return Ri(t)&&t.O_.length<10}function _P(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Wx(t){return Ri(t)&&!$r(t).n_()&&t.O_.length>0}function Hx(t){$r(t).start()}async function wP(t){$r(t).p_()}async function xP(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function EP(t,e,n){const r=t.O_.shift(),i=Jp.from(r,e,n);await Bx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sc(t)}async function TP(t,e){e&&$r(t).V_&&await async function(r,i){if(function(o){return dR(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();$r(r).s_(),await Bx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Sc(r)}}(t,e),Wx(t)&&Hx(t)}async function Xv(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n.L_.add(3),await Ca(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bc(n)}async function bP(t,e){const n=re(t);e?(n.L_.delete(2),await bc(n)):e||(n.L_.add(2),await Ca(n),n.q_.set("Unknown"))}function Us(t){return t.K_||(t.K_=function(n,r,i){const s=re(n);return s.w_(),new uP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:pP.bind(null,t),Ro:mP.bind(null,t),mo:gP.bind(null,t),d_:yP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),am(t)?om(t):t.q_.set("Unknown")):(await t.K_.stop(),$x(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,i){const s=re(n);return s.w_(),new cP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:wP.bind(null,t),mo:TP.bind(null,t),f_:xP.bind(null,t),g_:EP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Sc(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function um(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ia(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.W_=new Pe(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class IP{constructor(){this.queries=Zv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=Zv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function Zv(){return new Vs(t=>px(t),vc)}async function cm(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new SP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=um(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&fm(n)}async function dm(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AP(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&fm(n)}function kP(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function fm(t){t.Y_.forEach(e=>{e.next()})}var _h,e0;(e0=_h||(_h={})).ea="default",e0.Cache="cache";class hm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==_h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.key=e}}class Gx{constructor(e){this.key=e}}class CP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=mx(e),this.Ra=new ls(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Jv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),_=_c(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;g&&_?g.data.isEqual(_.data)?C!==k&&(r.track({type:3,doc:_}),R=!0):this.ga(g,_)||(r.track({type:2,doc:_}),R=!0,(u&&this.Aa(_,u)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!g&&_?(r.track({type:0,doc:_}),R=!0):g&&!_&&(r.track({type:1,doc:g}),R=!0,(u||c)&&(a=!0)),R&&(_?(o=o.add(_),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(_,C){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return k(_)-k(C)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Is(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Gx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new qx(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class RP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PP{constructor(e){this.key=e,this.va=!1}}class NP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(a=>px(a),vc),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(X.comparator),this.Na=new Map,this.La=new tm,this.Ba={},this.ka=new Map,this.qa=Ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DP(t,e,n=!0){const r=Zx(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Kx(r,e,n,!0),i}async function jP(t,e){const n=Zx(t);await Kx(n,e,!0,!1)}async function Kx(t,e,n,r){const i=await nP(t.localStore,xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await OP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ux(t.remoteStore,i),a}async function OP(t,e,n,r,i){t.Ka=(p,g,_)=>async function(k,R,E,x){let S=R.view.ma(E);S.ns&&(S=await Kv(k.localStore,R.query,!1).then(({documents:b})=>R.view.ma(b,S)));const L=x&&x.targetChanges.get(R.targetId),U=x&&x.targetMismatches.get(R.targetId)!=null,W=R.view.applyChanges(S,k.isPrimaryClient,L,U);return n0(k,R.targetId,W.wa),W.snapshot}(t,p,g,_);const s=await Kv(t.localStore,e,!0),o=new CP(e,s.Ts),a=o.ma(s.documents),u=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);n0(t,n,c.wa);const h=new RP(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function LP(t,e,n){const r=re(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!vc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&im(r.remoteStore,i.targetId),wh(r,i.targetId)}).catch(Sa)):(wh(r,i.targetId),await vh(r.localStore,i.targetId,!0))}async function MP(t,e){const n=re(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),im(n.remoteStore,r.targetId))}async function FP(t,e,n){const r=HP(t);try{const i=await function(o,a){const u=re(o),c=He.now(),h=a.reduce((_,C)=>_.add(C.key),le());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Yn(),k=le();return u.cs.getEntries(_,h).next(R=>{C=R,C.forEach((E,x)=>{x.isValidDocument()||(k=k.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,C)).next(R=>{p=R;const E=[];for(const x of a){const S=oR(x,p.get(x.key).overlayedDocument);S!=null&&E.push(new Yr(x.key,S,ox(S.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,E,a)}).next(R=>{g=R;const E=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(_,R.batchId,E)})}).then(()=>({batchId:g.batchId,changes:yx(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Pe(he)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await Sc(r.remoteStore)}catch(i){const s=um(i,"Failed to persist write");n.reject(s)}}async function Qx(t,e){const n=re(t);try{const r=await ZR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Ra(n,r,e)}catch(r){await Sa(r)}}function t0(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=re(o);u.onlineState=a;let c=!1;u.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&fm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VP(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(X.comparator);o=o.insert(s,gt.newNoDocument(s,ne.min()));const a=le().add(s),u=new Ec(ne.min(),new Map,new Pe(he),o,a);await Qx(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),pm(r)}else await vh(r.localStore,e,!1).then(()=>wh(r,e,n)).catch(Sa)}async function UP(t,e){const n=re(t),r=e.batch.batchId;try{const i=await JR(n.localStore,e);Xx(n,r,null),Yx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Sa(i)}}async function zP(t,e,n){const r=re(t);try{const i=await function(o,a){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(me(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Xx(r,e,n),Yx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Sa(i)}}function Yx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Xx(t,e,n){const r=re(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function wh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Jx(t,r)})}function Jx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(im(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),pm(t))}function n0(t,e,n){for(const r of n)r instanceof qx?(t.La.addReference(r.key,e),$P(t,r)):r instanceof Gx?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Jx(t,r.key)):ee()}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),pm(t))}function pm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new PP(n)),t.Oa=t.Oa.insert(n,r),Ux(t.remoteStore,new Tr(xn(yc(n.path)),r,"TargetPurposeLimboResolution",Wp.oe))}}async function Ra(t,e,n){const r=re(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=rm.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(c,g=>V.forEach(g.$i,_=>h.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>V.forEach(g.Ui,_=>h.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ia(p))throw p;Q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const _=h.os.get(g),C=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(C);h.os=h.os.insert(g,k)}}}(r.localStore,s))}async function BP(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await Lx(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new G(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.hs)}}function WP(t,e){const n=re(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let i=le();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function Zx(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VP.bind(null,e),e.Ca.d_=AP.bind(null,e.eventManager),e.Ca.$a=kP.bind(null,e.eventManager),e}function HP(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zP.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return XR(this.persistence,new QR,e.initialUser,this.serializer)}Ga(e){return new qR(nm.Zr,this.serializer)}Wa(e){return new iP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>t0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BP.bind(null,this.syncEngine),await bP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IP}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(s){return new lP(s)}(e.databaseInfo);return function(s,o,a,u){return new dP(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new hP(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>t0(this.syncEngine,n,0),function(){return Yv.D()?new Yv:new sP}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const p=new NP(i,s,o,a,u,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);Q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ca(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xh.provider={build:()=>new xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=rx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Lx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function r0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GP(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xv(e.remoteStore,i)),t._onlineComponents=e}async function GP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;xs("Error using user provided cache. Falling back to memory cache: "+n),await Yd(t,new Ou)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Yd(t,new Ou);return t._offlineComponents}async function eE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await r0(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await r0(t,new xh))),t._onlineComponents}function KP(t){return eE(t).then(e=>e.syncEngine)}async function Lu(t){const e=await eE(t),n=e.eventManager;return n.onListen=DP.bind(null,e.syncEngine),n.onUnlisten=LP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MP.bind(null,e.syncEngine),n}function QP(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new mm({next:g=>{h.Za(),o.enqueueAndForget(()=>dm(s,p));const _=g.docs.has(a);!_&&g.fromCache?c.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hm(yc(a.path),h,{includeMetadataChanges:!0,_a:!0});return cm(s,p)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}function YP(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new mm({next:g=>{h.Za(),o.enqueueAndForget(()=>dm(s,p)),g.fromCache&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new hm(a,h,{includeMetadataChanges:!0,_a:!0});return cm(s,p)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XP(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function s0(t){if(!X.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o0(t){if(X.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ic(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mC;switch(r.type){case"firstParty":return new _C(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=i0.get(n);r&&(Q("ComponentProvider","Removing Datastore"),i0.delete(n),r.terminate())}(this),Promise.resolve()}}function JP(t,e,n,r={}){var i;const s=(t=Dt(t,Ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=pt.MOCK_USER;else{a=Bk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new gC(new nx(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Lr extends Xr{constructor(e,n,r){super(e,n,yc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new X(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function Mu(t,e,...n){if(t=qe(t),nE("collection","path",e),t instanceof Ac){const r=Te.fromString(e,...n);return o0(r),new Lr(t,null,r)}{if(!(t instanceof yt||t instanceof Lr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return o0(r),new Lr(t.firestore,null,r)}}function $t(t,e,...n){if(t=qe(t),arguments.length===1&&(e=rx.newId()),nE("doc","path",e),t instanceof Ac){const r=Te.fromString(e,...n);return s0(r),new yt(t,null,new X(r))}{if(!(t instanceof yt||t instanceof Lr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return s0(r),new yt(t.firestore,t instanceof Lr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Fx(this,"async_queue_retry"),this.Vu=()=>{const r=Qd();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ia(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function u0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Xn extends Ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new l0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l0(e),this._firestoreClient=void 0,await e}}}function ZP(t,e){const n=typeof t=="object"?t:G1(),r=typeof t=="string"?t:"(default)",i=$p(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zk("firestore");s&&JP(i,...s)}return i}function kc(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eN(t),t._firestoreClient}function eN(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new NC(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,tE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(ot.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=/^__.*__$/;class nN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class rE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class _m{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new _m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iE(this.Cu)&&tN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Qu(e,n,r,i=!1){return new _m({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rc(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new rN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);wm("Data must be an object, but it was:",o,r);const a=oE(r,o);let u,c;if(s.merge)u=new Vt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=Eh(e,p,n);if(!o.contains(g))throw new G(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lE(h,g)||h.push(g)}u=new Vt(h),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new nN(new kt(a),u,c)}class Pc extends gm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pc}}function iN(t,e,n,r){const i=t.Qu(1,e,n);wm("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();Ci(r,(u,c)=>{const h=xm(e,u,n);c=qe(c);const p=i.Nu(h);if(c instanceof Pc)s.push(h);else{const g=Pa(c,p);g!=null&&(s.push(h),o.set(h,g))}});const a=new Vt(s);return new rE(o,a,i.fieldTransforms)}function sN(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Eh(e,r,n)],u=[i];if(s.length%2!=0)throw new G(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Eh(e,s[g])),u.push(s[g+1]);const c=[],h=kt.empty();for(let g=a.length-1;g>=0;--g)if(!lE(c,a[g])){const _=a[g];let C=u[g];C=qe(C);const k=o.Nu(_);if(C instanceof Pc)c.push(_);else{const R=Pa(C,k);R!=null&&(c.push(_),h.set(_,R))}}const p=new Vt(c);return new rE(h,p,o.fieldTransforms)}function oN(t,e,n,r=!1){return Pa(n,t.Qu(r?4:3,e))}function Pa(t,e){if(aE(t=qe(t)))return wm("Unsupported field value:",e,t),oE(t,e);if(t instanceof gm)return function(r,i){if(!iE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Pa(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof ym)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof As)return{bytesValue:Cx(i.serializer,r._byteString)};if(r instanceof yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:em(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof vm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Yp(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ic(r)}`)}(t,e)}function oE(t,e){const n={};return ix(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=Pa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof ym||t instanceof As||t instanceof yt||t instanceof gm||t instanceof vm)}function wm(t,e,n){if(!aE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ic(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Eh(t,e,n){if((e=qe(e))instanceof Cc)return e._internalPath;if(typeof e=="string")return xm(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const aN=new RegExp("[~\\*/\\[\\]]");function xm(t,e,n){if(e.search(aN)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(F.INVALID_ARGUMENT,a+t+u)}function lE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Em("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lN extends uE{data(){return super.data()}}function Em(t,e){return typeof e=="string"?xm(t,e):e instanceof Cc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tm{}class dE extends Tm{}function fE(t,e,...n){let r=[];e instanceof Tm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sm).length,a=s.filter(u=>u instanceof bm).length;if(o>1||o>0&&a>0)throw new G(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bm extends dE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bm(e,n,r)}_apply(e){const n=this._parse(e);return pE(e._query,n),new Xr(e.firestore,e.converter,fh(e._query,n))}_parse(e){const n=Rc(e.firestore);return function(s,o,a,u,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new G(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){d0(p,h);const _=[];for(const C of p)_.push(c0(u,s,C));g={arrayValue:{values:_}}}else g=c0(u,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||d0(p,h),g=oN(a,o,p,h==="in"||h==="not-in");return $e.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Sm extends Tm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)pE(o,u),o=fh(o,u)}(e._query,n),new Xr(e.firestore,e.converter,fh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Im extends dE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Im(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new da(s,o)}(e._query,this._field,this._direction);return new Xr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hE(t,e="asc"){const n=e,r=Em("orderBy",t);return Im._create(r,n)}function c0(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new G(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hx(e)&&n.indexOf("/")!==-1)throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pv(t,new X(r))}if(n instanceof yt)return Pv(t,n._key);throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ic(n)}.`)}function d0(t,e){if(!Array.isArray(t)||t.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pE(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class uN{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Me(o.doubleValue));return new vm(s)}convertGeoPoint(e){return new ym(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(la(e));default:return null}}convertTimestamp(e){const n=zr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);me(Ox(r));const i=new ua(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gE extends uE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Em("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gl extends gE{data(e={}){return super.data(e)}}class yE{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:cN(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){t=Dt(t,yt);const e=Dt(t.firestore,Xn);return QP(kc(e),t._key).then(n=>wE(e,t,n))}class Am extends uN{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function dN(t){t=Dt(t,Xr);const e=Dt(t.firestore,Xn),n=kc(e),r=new Am(e);return cE(t._query),YP(n,t._query).then(i=>new yE(e,r,t,i))}function fN(t,e,n){t=Dt(t,yt);const r=Dt(t.firestore,Xn),i=mE(t.converter,e);return Dc(r,[sE(Rc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Yt.none())])}function Na(t,e,n,...r){t=Dt(t,yt);const i=Dt(t.firestore,Xn),s=Rc(i);let o;return o=typeof(e=qe(e))=="string"||e instanceof Cc?sN(s,"updateDoc",t._key,e,n,r):iN(s,"updateDoc",t._key,e),Dc(i,[o.toMutation(t._key,Yt.exists(!0))])}function hN(t){return Dc(Dt(t.firestore,Xn),[new Xp(t._key,Yt.none())])}function vE(t,e){const n=Dt(t.firestore,Xn),r=$t(t),i=mE(t.converter,e);return Dc(n,[sE(Rc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yt.exists(!1))]).then(()=>r)}function _E(t,...e){var n,r,i;t=qe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||u0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(u0(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,h;if(t instanceof yt)c=Dt(t.firestore,Xn),h=yc(t._key.path),u={next:p=>{e[o]&&e[o](wE(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Dt(t,Xr);c=Dt(p.firestore,Xn),h=p._query;const g=new Am(c);u={next:_=>{e[o]&&e[o](new yE(c,g,p,_))},error:e[o+1],complete:e[o+2]},cE(t._query)}return function(g,_,C,k){const R=new mm(k),E=new hm(_,R,C);return g.asyncQueue.enqueueAndForget(async()=>cm(await Lu(g),E)),()=>{R.Za(),g.asyncQueue.enqueueAndForget(async()=>dm(await Lu(g),E))}}(kc(c),h,a,u)}function Dc(t,e){return function(r,i){const s=new Bn;return r.asyncQueue.enqueueAndForget(async()=>FP(await KP(r),i,s)),s.promise}(kc(t),e)}function wE(t,e,n){const r=n.docs.get(e._key),i=new Am(t);return new gE(t,i,e._key,r,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ms=i})(Ls),ws(new _i("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xn(new yC(r.getProvider("auth-internal")),new xC(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Or(Iv,"4.7.3",e),Or(Iv,"4.7.3","esm2017")})();function km(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pN=xE,EE=new Ta("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Up("@firebase/auth");function mN(t,...e){Vu.logLevel<=ue.WARN&&Vu.warn(`Auth (${Ls}): ${t}`,...e)}function Kl(t,...e){Vu.logLevel<=ue.ERROR&&Vu.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,...e){throw Cm(t,...e)}function Tn(t,...e){return Cm(t,...e)}function TE(t,e,n){const r=Object.assign(Object.assign({},pN()),{[e]:n});return new Ta("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return TE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function Z(t,e,...n){if(!t)throw Cm(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Kl(e),new Error(e)}function Jn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gN(){return f0()==="http:"||f0()==="https:"}function f0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gN()||Gk()||"connection"in navigator)?navigator.onLine:!0}function vN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wk()||Kk()}get(){return yN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=new Da(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jr(t,e,n,r,i={}){return SE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ba(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return qk()||(c.referrerPolicy="no-referrer"),bE.fetch()(IE(t,t.config.apiHost,n,a),c)})}async function SE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_N),e);try{const i=new EN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TE(t,h,c);dn(t,h)}}catch(i){if(i instanceof ir)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function jc(t,e,n,r,i={}){const s=await Jr(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function IE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}function xN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),wN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}function h0(t){return t!==void 0&&t.enterprise!==void 0}class TN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function bN(t,e){return Jr(t,"GET","/v2/recaptchaConfig",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IN(t,e=!1){const n=qe(t),r=await n.getIdToken(e),i=Pm(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mo(Xd(i.auth_time)),issuedAtTime:Mo(Xd(i.iat)),expirationTime:Mo(Xd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xd(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=U1(n);return i?JSON.parse(i):(Kl("Failed to decode base64 JWT payload"),null)}catch(i){return Kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function p0(t){const e=Pm(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&AN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pa(t,AE(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kE(s.providerUserInfo):[],a=RN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function CN(t){const e=qe(t);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kE(t){return t.map(e=>{var{providerId:n}=e,r=km(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){const n=await SE(t,{},async()=>{const r=ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=IE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NN(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=p0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new us;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=km(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IN(this,e)}reload(){return CN(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await pa(this,SN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:L,isAnonymous:U,providerData:W,stsTokenManager:b}=n;Z(S&&b,e,"internal-error");const v=us.fromJSON(this.name,b);Z(typeof S=="string",e,"internal-error"),dr(p,e.name),dr(g,e.name),Z(typeof L=="boolean",e,"internal-error"),Z(typeof U=="boolean",e,"internal-error"),dr(_,e.name),dr(C,e.name),dr(k,e.name),dr(R,e.name),dr(E,e.name),dr(x,e.name);const T=new Vn({uid:S,auth:e,email:g,emailVerified:L,displayName:p,isAnonymous:U,photoURL:C,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:E,lastLoginAt:x});return W&&Array.isArray(W)&&(T.providerData=W.map(I=>Object.assign({},I))),R&&(T._redirectEventId=R),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new us;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Uu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new us;a.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Map;function Un(t){Jn(t instanceof Function,"Expected a class definition");let e=m0.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CE.type="NONE";const g0=CE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ql(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ql("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Un(g0),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(g0);const o=Ql(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Vn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new cs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(LE(e))return"Webos";if(PE(e))return"Safari";if((e.includes("chrome/")||NE(e))&&!e.includes("edge/"))return"Chrome";if(jE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RE(t=_t()){return/firefox\//i.test(t)}function PE(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NE(t=_t()){return/crios\//i.test(t)}function DE(t=_t()){return/iemobile/i.test(t)}function jE(t=_t()){return/android/i.test(t)}function OE(t=_t()){return/blackberry/i.test(t)}function LE(t=_t()){return/webos/i.test(t)}function Nm(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DN(t=_t()){var e;return Nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jN(){return Qk()&&document.documentMode===10}function ME(t=_t()){return Nm(t)||jE(t)||LE(t)||OE(t)||/windows phone/i.test(t)||DE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e=[]){let n;switch(t){case"Browser":n=y0(_t());break;case"Worker":n=`${y0(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=6;class FN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v0(this),this.idTokenSubscription=new v0(this),this.beforeStateQueue=new ON(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await AE(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Mr(this));const n=e?qe(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LN(this),n=new FN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zs(t){return qe(t)}class v0{constructor(e){this.auth=e,this.observer=null,this.addObserver=r2(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UN(t){Oc=t}function VE(t){return Oc.loadJS(t)}function zN(){return Oc.recaptchaEnterpriseScript}function $N(){return Oc.gapiScript}function BN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WN="recaptcha-enterprise",HN="NO_RECAPTCHA";class qN{constructor(e){this.type=WN,this.auth=zs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new TN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;h0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(HN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&h0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=zN();u.length!==0&&(u+=a),VE(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _0(t,e,n,r=!1){const i=new qN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function w0(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t,e){const n=$p(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Au(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function KN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QN(t,e,n){const r=zs(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=UE(e),{host:o,port:a}=YN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),XN()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YN(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:x0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:x0(o)}}}function x0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function JN(t,e){return Jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e){return jc(t,"POST","/v1/accounts:signInWithPassword",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e){return jc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}async function tD(t,e){return jc(t,"POST","/v1/accounts:signInWithEmailLink",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return w0(e,n,"signInWithPassword",ZN);case"emailLink":return eD(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return w0(e,r,"signUpPassword",JN);case"emailLink":return tD(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return jc(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="http://localhost";class Ti extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=km(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ti(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:nD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ba(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iD(t){const e=yo(vo(t)).link,n=e?yo(vo(e)).deep_link_id:null,r=yo(vo(t)).deep_link_id;return(r?yo(vo(r)).link:null)||r||n||e||t}class jm{constructor(e){var n,r,i,s,o,a;const u=yo(vo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=rD((i=u.mode)!==null&&i!==void 0?i:null);Z(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iD(e);try{return new jm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jm.parseLink(n);return Z(r,"argument-error"),ma._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends zE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends ja{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ti._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ja{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends ja{constructor(){super("twitter.com")}static credential(e,n){return Ti._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=E0(r);return new ks({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=E0(r);return new ks({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function E0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zu(e,n,r,i)}}function $E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(t,s,e,r):s})}async function sD(t,e,n=!1){const r=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(t,e,n=!1){const{auth:r}=t;if(Mn(r.app))return Promise.reject(Mr(r));const i="reauthenticate";try{const s=await pa(t,$E(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Pm(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ks._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){if(Mn(t.app))return Promise.reject(Mr(t));const r="signIn",i=await $E(t,r,e),s=await ks._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aD(t,e){return BE(zs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(t){const e=zs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uD(t,e,n){return Mn(t.app)?Promise.reject(Mr(t)):aD(qe(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lD(t),r})}function cD(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function dD(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function fD(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function hD(t){return qe(t).signOut()}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=1e3,mD=10;class HE extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ME(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const gD=HE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qE.type="SESSION";const GE=qE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await yD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Om("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function _D(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function wD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ED(){return KE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firebaseLocalStorageDb",TD=1,Bu="firebaseLocalStorage",YE="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mc(t,e){return t.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function bD(){const t=indexedDB.deleteDatabase(QE);return new Oa(t).toPromise()}function Sh(){const t=indexedDB.open(QE,TD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bu,{keyPath:YE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await bD(),e(await Sh()))})})}async function T0(t,e,n){const r=Mc(t,!0).put({[YE]:e,value:n});return new Oa(r).toPromise()}async function SD(t,e){const n=Mc(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function b0(t,e){const n=Mc(t,!0).delete(e);return new Oa(n).toPromise()}const ID=800,AD=3;class XE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(ED()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wD(),!this.activeServiceWorker)return;this.sender=new vD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sh();return await T0(e,$u,"1"),await b0(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>b0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mc(i,!1).getAll();return new Oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XE.type="LOCAL";const kD=XE;new Da(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t,e){return e?Un(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RD(t){return BE(t.auth,new Lm(t),t.bypassAuthState)}function PD(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),oD(n,new Lm(t),t.bypassAuthState)}async function ND(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),sD(n,new Lm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RD;case"linkViaPopup":case"linkViaRedirect":return ND;case"reauthViaPopup":case"reauthViaRedirect":return PD;default:dn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=new Da(2e3,1e4);class es extends JE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Om();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DD.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="pendingRedirect",Yl=new Map;class OD extends JE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await LD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LD(t,e){const n=VD(e),r=FD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MD(t,e){Yl.set(t._key(),e)}function FD(t){return Un(t._redirectPersistence)}function VD(t){return Ql(jD,t.config.apiKey,t.name)}async function UD(t,e,n=!1){if(Mn(t.app))return Promise.reject(Mr(t));const r=zs(t),i=CD(r,e),o=await new OD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=10*60*1e3;class $D{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zD&&this.cachedEventUids.clear(),this.cachedEventUids.has(S0(e))}saveEventToCache(e){this.cachedEventUids.add(S0(e)),this.lastProcessedEventTime=Date.now()}}function S0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qD=/^https?/;async function GD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WD(t);for(const n of e)try{if(KD(n))return}catch{}dn(t,"unauthorized-domain")}function KD(t){const e=Th(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qD.test(n))return!1;if(HD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=new Da(3e4,6e4);function I0(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YD(t){return new Promise((e,n)=>{var r,i,s;function o(){I0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{I0(),n(Tn(t,"network-request-failed"))},timeout:QD.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bn().gapi)===null||s===void 0)&&s.load)o();else{const a=BN("iframefcb");return bn()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},VE(`${$N()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Xl=null,e})}let Xl=null;function XD(t){return Xl=Xl||YD(t),Xl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new Da(5e3,15e3),ZD="__/auth/iframe",e4="emulator/auth/iframe",t4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r4(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,e4):`https://${t.config.authDomain}/${ZD}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=n4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ba(r).slice(1)}`}async function i4(t){const e=await XD(t),n=bn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:r4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},JD.get());function u(){bn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o4=500,a4=600,l4="_blank",u4="http://localhost";class A0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c4(t,e,n,r=o4,i=a4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},s4),{width:r.toString(),height:i.toString(),top:s,left:o}),c=_t().toLowerCase();n&&(a=NE(c)?l4:n),RE(c)&&(e=e||u4,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(DN(c)&&a!=="_self")return d4(e||"",a),new A0(null);const p=window.open(e||"",a,h);Z(p,t,"popup-blocked");try{p.focus()}catch{}return new A0(p)}function d4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="__/auth/handler",h4="emulator/auth/handler",p4=encodeURIComponent("fac");async function k0(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof zE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",n2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ja){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${p4}=${encodeURIComponent(u)}`:"";return`${m4(t)}?${ba(a).slice(1)}${c}`}function m4({config:t}){return t.emulator?Rm(t,h4):`https://${t.authDomain}/${f4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class g4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GE,this._completeRedirectFn=UD,this._overrideRedirectResult=MD}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await k0(e,n,r,Th(),i);return c4(e,o,Om())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await k0(e,n,r,Th(),i);return _D(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i4(e),r=new $D(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jd];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ME()||PE()||Nm()}}const y4=g4;var C0="@firebase/auth",R0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w4(t){ws(new _i("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(t)},c=new VN(r,i,s,u);return KN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new _i("auth-internal",e=>{const n=zs(e.getProvider("auth").getImmediate());return(r=>new v4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(C0,R0,_4(t)),Or(C0,R0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=5*60,E4=B1("authIdTokenMaxAge")||x4;let P0=null;const T4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E4)return;const i=n==null?void 0:n.token;P0!==i&&(P0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function b4(t=G1()){const e=$p(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GN(t,{popupRedirectResolver:y4,persistence:[kD,gD,GE]}),r=B1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=T4(s.toString());dD(n,o,()=>o(n.currentUser)),cD(n,a=>o(a))}}const i=z1("auth");return i&&QN(n,`http://${i}`),n}function S4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",S4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w4("Browser");const I4={apiKey:"AIzaSyAbfZvow31gFWWyweGcPNkBC-QHw5cNEmo",authDomain:"redundant-studios.firebaseapp.com",projectId:"redundant-studios",storageBucket:void 0,messagingSenderId:"950338590185",appId:"1:950338590185:web:4fe30eaf1d27ad6a34a778"},eT=q1(I4),tt=ZP(eT),Mm=b4(eT),sr=(t="main")=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0),[s,o]=M.useState(null);return M.useEffect(()=>{if(!tt){o(new Error("Firestore not initialized")),i(!1);return}try{const a=_E($t(tt,"content",t),c=>{c.exists()?n(c.data()):n(null),i(!1)},c=>{console.error("Firestore error:",c),o(c),i(!1)}),u=setTimeout(()=>{i(!1)},3e3);return()=>{a(),clearTimeout(u)}}catch(a){console.error("Firestore setup error:",a),o(a),i(!1)}},[t]),{content:e,loading:r,error:s}},it={studioName:"Redundant Studios",logoUrl:"",navbarLabels:[{name:"Home",path:"/"},{name:"Games",path:"/games"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],hero:{headline:"Crafting Worlds Beyond Imagination",subheadline:"We are Redundant Studios — an indie team building immersive, story-driven games for players who crave something different.",backgroundImageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920",videoBackgroundUrl:""},featuredGame:{title:"Featured Title",description:"An upcoming adventure that redefines the genre.",imageUrl:"https://via.placeholder.com/800x450",playstoreUrl:""},featuredGames:[],previousGames:[],about:{description:"Redundant Studios is an indie game development team passionate about creating unforgettable gaming experiences. We combine innovative gameplay with stunning visuals to deliver games that resonate with players worldwide.",values:[{title:"Innovation",description:"Pushing boundaries with fresh ideas and mechanics."},{title:"Quality",description:"Polished experiences that respect players time."},{title:"Community",description:"Building games with and for our players."}]},contact:{email:"hello@redundantstudios.com",instagramUrl:"",linkedinUrl:"",youtubeUrl:"",playstoreUrl:""},socials:{instagramUrl:"",linkedinUrl:"",youtubeUrl:"",twitterUrl:""},teamImages:{},font:{display:"Barlow Condensed",body:"Rajdhani",displayWeight:700,bodyWeight:500},visibility:{hero:!0,featuredGame:!0,featuredGames:!0,previousGames:!0,founders:!0,socialLinks:!0}},w={bg:"#0a0a0a",bgElevated:"#0f0f10",surface:"#141414",primary:"#e10600",primaryHover:"#ff1a1a",secondary:"#cccccc",white:"#ffffff",muted:"#888888",lightText:"#cccccc",inputBg:"#141414",inputBorder:"#262626",error:"#ff4444"},Zn={primary:"linear-gradient(135deg, #e10600 0%, #8a0303 100%)",primarySoft:"linear-gradient(135deg, rgba(225, 6, 0, 0.15) 0%, rgba(138, 3, 3, 0.05) 100%)"},B={family:"'Rajdhani', sans-serif",display:"'Barlow Condensed', sans-serif",accent:"'Rajdhani', sans-serif",weight:{semibold:600,bold:700}},j={xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2.5rem",xl:"4rem",xxl:"6rem",xxxl:"8rem"},oe={sm:"2px",md:"4px",pill:"50px"},Ih={glow:"0 0 20px rgba(225, 6, 0, 0.4)"},A4={base:"0.5s cubic-bezier(0.4, 0, 0.2, 1)"},Fc={padding:"1rem",backgroundColor:w.primary,color:w.white,border:"none",borderRadius:oe.md,fontWeight:B.weight.bold,textTransform:"uppercase",cursor:"pointer",fontSize:"1.1rem"},ve={width:"100%",padding:j.md,backgroundColor:w.inputBg,border:`1px solid ${w.inputBorder}`,borderRadius:oe.md,color:w.white,fontFamily:B.family,fontSize:"1rem",transition:`border-color ${A4.base}`},_e={display:"block",color:w.secondary,marginBottom:j.xs,fontSize:"0.9rem",fontWeight:B.weight.semibold,textTransform:"uppercase",letterSpacing:"0.5px"},Sl=()=>{const[t,e]=M.useState(!1),{content:n}=sr(),r=ki(),i=n||it,s=(i==null?void 0:i.navbarLabels)||it.navbarLabels;return M.useEffect(()=>{e(!1)},[r.pathname]),f.jsxs("nav",{style:{position:"sticky",top:0,zIndex:1e3,backgroundColor:"#0a0a0a",boxShadow:"0 2px 8px rgba(0,0,0,0.5)",padding:`1.25rem ${j.lg}`,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs($n,{to:"/",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none"},children:[i!=null&&i.logoUrl?f.jsx("img",{src:i.logoUrl,alt:"Logo",style:{width:"36px",height:"36px",objectFit:"contain"}}):f.jsx("div",{style:{fontFamily:B.display,fontSize:"1.6rem",fontWeight:800,color:w.primary,letterSpacing:"1px",lineHeight:1},children:"R"}),f.jsx("span",{style:{fontFamily:B.display,fontSize:"1.1rem",fontWeight:700,color:w.white,textTransform:"uppercase",letterSpacing:"3px",lineHeight:1},children:(i==null?void 0:i.studioName)||"Redundant Studios"})]}),f.jsx("div",{className:"nav-desktop",style:{display:"flex",gap:"2.5rem",alignItems:"center"},children:s.map(o=>{const a=r.pathname===o.path;return f.jsxs($n,{to:o.path,style:{fontFamily:B.body,fontWeight:600,fontSize:"0.95rem",letterSpacing:"2px",textTransform:"uppercase",textDecoration:"none",color:a?w.primary:w.lightText,position:"relative",paddingBottom:"4px",transition:"color 0.2s ease"},onMouseEnter:u=>u.target.style.color=w.white,onMouseLeave:u=>u.target.style.color=a?w.primary:w.lightText,children:[o.name,a&&f.jsx("span",{style:{position:"absolute",left:0,right:0,bottom:0,height:"2px",background:w.primary}})]},o.path)})}),f.jsx("button",{className:"nav-mobile-btn",onClick:()=>e(!t),"aria-label":"Toggle menu",style:{display:"none",background:"transparent",border:"none",color:w.white,cursor:"pointer",padding:"0.25rem"},children:t?f.jsx(pv,{size:24}):f.jsx(Nk,{size:24})}),t&&f.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"#0a0a0a",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"2.5rem",zIndex:999},children:[f.jsx("button",{onClick:()=>e(!1),"aria-label":"Close menu",style:{position:"absolute",top:"1.5rem",right:"1.5rem",background:"transparent",border:"none",color:w.white,padding:"0.25rem"},children:f.jsx(pv,{size:28})}),s.map(o=>f.jsx($n,{to:o.path,onClick:()=>e(!1),style:{fontFamily:B.display,fontSize:"2.5rem",color:w.white,fontWeight:700,textTransform:"uppercase",textDecoration:"none",letterSpacing:"4px"},children:o.name},o.path))]}),f.jsx("style",{children:`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `})]})};/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Ah(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function k4(t){if(Array.isArray(t))return t}function C4(t){if(Array.isArray(t))return Ah(t)}function R4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P4(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,tT(r.key),r)}}function N4(t,e,n){return e&&P4(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Jl(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Fm(t))||e){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return o=u.done,u},e:function(u){a=!0,s=u},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw s}}}}function J(t,e,n){return(e=tT(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function j4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],u=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(h){c=!0,i=h}finally{try{if(!u&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return a}}function O4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N0(Object(n),!0).forEach(function(r){J(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Vc(t,e){return k4(t)||j4(t,e)||Fm(t,e)||O4()}function fn(t){return C4(t)||D4(t)||Fm(t)||L4()}function M4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function tT(t){var e=M4(t,"string");return typeof e=="symbol"?e:e+""}function Wu(t){"@babel/helpers - typeof";return Wu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wu(t)}function Fm(t,e){if(t){if(typeof t=="string")return Ah(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ah(t,e):void 0}}var D0=function(){},Vm={},nT={},rT=null,iT={mark:D0,measure:D0};try{typeof window<"u"&&(Vm=window),typeof document<"u"&&(nT=document),typeof MutationObserver<"u"&&(rT=MutationObserver),typeof performance<"u"&&(iT=performance)}catch{}var F4=Vm.navigator||{},j0=F4.userAgent,O0=j0===void 0?"":j0,Br=Vm,Se=nT,L0=rT,Il=iT;Br.document;var or=!!Se.documentElement&&!!Se.head&&typeof Se.addEventListener=="function"&&typeof Se.createElement=="function",sT=~O0.indexOf("MSIE")||~O0.indexOf("Trident/"),Al,V4=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,U4=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,oT={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},z4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},aT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],at="classic",La="duotone",lT="sharp",uT="sharp-duotone",cT="chisel",dT="etch",fT="graphite",hT="jelly",pT="jelly-duo",mT="jelly-fill",gT="mosaic",yT="notdog",vT="notdog-duo",_T="pixel",wT="slab",xT="slab-duo",ET="slab-press",TT="slab-press-duo",bT="thumbprint",ST="utility",IT="utility-duo",AT="utility-fill",kT="vellum",CT="whiteboard",$4="Classic",B4="Duotone",W4="Sharp",H4="Sharp Duotone",q4="Chisel",G4="Etch",K4="Graphite",Q4="Jelly",Y4="Jelly Duo",X4="Jelly Fill",J4="Mosaic",Z4="Notdog",ej="Notdog Duo",tj="Pixel",nj="Slab",rj="Slab Duo",ij="Slab Press",sj="Slab Press Duo",oj="Thumbprint",aj="Utility",lj="Utility Duo",uj="Utility Fill",cj="Vellum",dj="Whiteboard",RT=[at,La,lT,uT,cT,dT,fT,hT,pT,mT,gT,yT,vT,_T,wT,xT,ET,TT,bT,ST,IT,AT,kT,CT];Al={},J(J(J(J(J(J(J(J(J(J(Al,at,$4),La,B4),lT,W4),uT,H4),cT,q4),dT,G4),fT,K4),hT,Q4),pT,Y4),mT,X4),J(J(J(J(J(J(J(J(J(J(Al,gT,J4),yT,Z4),vT,ej),_T,tj),wT,nj),xT,rj),ET,ij),TT,sj),bT,oj),ST,aj),J(J(J(J(Al,IT,lj),AT,uj),kT,cj),CT,dj);var fj={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},hj={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},pj=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),mj={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},PT=["fak","fa-kit","fakd","fa-kit-duotone"],M0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},gj=["kit"],yj="kit",vj="kit-duotone",_j="Kit",wj="Kit Duotone";J(J({},yj,_j),vj,wj);var xj={kit:{"fa-kit":"fak"}},Ej={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Tj={kit:{fak:"fa-kit"}},F0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},kl,Cl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bj=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Sj="classic",Ij="duotone",Aj="sharp",kj="sharp-duotone",Cj="chisel",Rj="etch",Pj="graphite",Nj="jelly",Dj="jelly-duo",jj="jelly-fill",Oj="mosaic",Lj="notdog",Mj="notdog-duo",Fj="pixel",Vj="slab",Uj="slab-duo",zj="slab-press",$j="slab-press-duo",Bj="thumbprint",Wj="utility",Hj="utility-duo",qj="utility-fill",Gj="vellum",Kj="whiteboard",Qj="Classic",Yj="Duotone",Xj="Sharp",Jj="Sharp Duotone",Zj="Chisel",eO="Etch",tO="Graphite",nO="Jelly",rO="Jelly Duo",iO="Jelly Fill",sO="Mosaic",oO="Notdog",aO="Notdog Duo",lO="Pixel",uO="Slab",cO="Slab Duo",dO="Slab Press",fO="Slab Press Duo",hO="Thumbprint",pO="Utility",mO="Utility Duo",gO="Utility Fill",yO="Vellum",vO="Whiteboard";kl={},J(J(J(J(J(J(J(J(J(J(kl,Sj,Qj),Ij,Yj),Aj,Xj),kj,Jj),Cj,Zj),Rj,eO),Pj,tO),Nj,nO),Dj,rO),jj,iO),J(J(J(J(J(J(J(J(J(J(kl,Oj,sO),Lj,oO),Mj,aO),Fj,lO),Vj,uO),Uj,cO),zj,dO),$j,fO),Bj,hO),Wj,pO),J(J(J(J(kl,Hj,mO),qj,gO),Gj,yO),Kj,vO);var _O="kit",wO="kit-duotone",xO="Kit",EO="Kit Duotone";J(J({},_O,xO),wO,EO);var TO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},bO={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},kh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},SO=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],NT=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(bj,SO),IO=["solid","regular","light","thin","duotone","brands","semibold"],DT=[1,2,3,4,5,6,7,8,9,10],AO=DT.concat([11,12,13,14,15,16,17,18,19,20]),kO=["aw","fw","pull-left","pull-right"],CO=[].concat(fn(Object.keys(bO)),IO,kO,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Cl.GROUP,Cl.SWAP_OPACITY,Cl.PRIMARY,Cl.SECONDARY]).concat(DT.map(function(t){return"".concat(t,"x")})).concat(AO.map(function(t){return"w-".concat(t)})),RO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},er="___FONT_AWESOME___",Ch=16,jT="fa",OT="svg-inline--fa",bi="data-fa-i2svg",Rh="data-fa-pseudo-element",PO="data-fa-pseudo-element-pending",Um="data-prefix",zm="data-icon",V0="fontawesome-i2svg",NO="async",DO=["HTML","HEAD","STYLE","SCRIPT"],LT=["::before","::after",":before",":after"],MT=function(){try{return!0}catch{return!1}}();function Ma(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[at]}})}var FT=$({},oT);FT[at]=$($($($({},{"fa-duotone":"duotone"}),oT[at]),M0.kit),M0["kit-duotone"]);var jO=Ma(FT),Ph=$({},mj);Ph[at]=$($($($({},{duotone:"fad"}),Ph[at]),F0.kit),F0["kit-duotone"]);var U0=Ma(Ph),Nh=$({},kh);Nh[at]=$($({},Nh[at]),Tj.kit);var $m=Ma(Nh),Dh=$({},TO);Dh[at]=$($({},Dh[at]),xj.kit);Ma(Dh);var OO=V4,VT="fa-layers-text",LO=U4,MO=$({},fj);Ma(MO);var FO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Zd=z4,VO=[].concat(fn(gj),fn(CO)),Fo=Br.FontAwesomeConfig||{};function UO(t){var e=Se.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Se&&typeof Se.querySelector=="function"){var $O=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$O.forEach(function(t){var e=Vc(t,2),n=e[0],r=e[1],i=zO(UO(n));i!=null&&(Fo[r]=i)})}var UT={styleDefault:"solid",familyDefault:at,cssPrefix:jT,replacementClass:OT,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fo.familyPrefix&&(Fo.cssPrefix=Fo.familyPrefix);var Cs=$($({},UT),Fo);Cs.autoReplaceSvg||(Cs.observeMutations=!1);var Y={};Object.keys(UT).forEach(function(t){Object.defineProperty(Y,t,{enumerable:!0,set:function(n){Cs[t]=n,Vo.forEach(function(r){return r(Y)})},get:function(){return Cs[t]}})});Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(e){Cs.cssPrefix=e,Vo.forEach(function(n){return n(Y)})},get:function(){return Cs.cssPrefix}});Br.FontAwesomeConfig=Y;var Vo=[];function BO(t){return Vo.push(t),function(){Vo.splice(Vo.indexOf(t),1)}}var Mi=Ch,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WO(t){if(!(!t||!or)){var e=Se.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Se.head.insertBefore(e,r),t}}var HO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z0(){for(var t=12,e="";t-- >0;)e+=HO[Math.random()*62|0];return e}function Bs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Bm(t){return t.classList?Bs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zT(t[n]),'" ')},"").trim()}function Uc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Wm(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function GO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function KO(t){var e=t.transform,n=t.width,r=n===void 0?Ch:n,i=t.height,s=i===void 0?Ch:i,o="";return sT?o+="translate(".concat(e.x/Mi-r/2,"em, ").concat(e.y/Mi-s/2,"em) "):o+="translate(calc(-50% + ".concat(e.x/Mi,"em), calc(-50% + ").concat(e.y/Mi,"em)) "),o+="scale(".concat(e.size/Mi*(e.flipX?-1:1),", ").concat(e.size/Mi*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var QO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function $T(){var t=jT,e=OT,n=Y.cssPrefix,r=Y.replacementClass,i=QO;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var $0=!1;function ef(){Y.autoAddCss&&!$0&&(WO($T()),$0=!0)}var YO={mixout:function(){return{dom:{css:$T,insertCss:ef}}},hooks:function(){return{beforeDOMElementCreation:function(){ef()},beforeI2svg:function(){ef()}}}},tr=Br||{};tr[er]||(tr[er]={});tr[er].styles||(tr[er].styles={});tr[er].hooks||(tr[er].hooks={});tr[er].shims||(tr[er].shims=[]);var on=tr[er],BT=[],WT=function(){Se.removeEventListener("DOMContentLoaded",WT),Hu=1,BT.map(function(e){return e()})},Hu=!1;or&&(Hu=(Se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Se.readyState),Hu||Se.addEventListener("DOMContentLoaded",WT));function XO(t){or&&(Hu?setTimeout(t,0):BT.push(t))}function Fa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?zT(t):"<".concat(e," ").concat(qO(r),">").concat(s.map(Fa).join(""),"</").concat(e,">")}function B0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var tf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,h;for(r===void 0?(u=1,h=e[s[0]]):(u=0,h=r);u<o;u++)c=s[u],h=a(h,e[c],c,e);return h};function HT(t){return fn(t).length!==1?null:t.codePointAt(0).toString(16)}function W0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function jh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=W0(e);typeof on.hooks.addPack=="function"&&!i?on.hooks.addPack(t,W0(e)):on.styles[t]=$($({},on.styles[t]||{}),s),t==="fas"&&jh("fa",e)}var ga=on.styles,JO=on.shims,qT=Object.keys($m),ZO=qT.reduce(function(t,e){return t[e]=Object.keys($m[e]),t},{}),Hm=null,GT={},KT={},QT={},YT={},XT={};function eL(t){return~VO.indexOf(t)}function tL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!eL(i)?i:null}var JT=function(){var e=function(s){return tf(ga,function(o,a,u){return o[u]=tf(a,s,{}),o},{})};GT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),KT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),XT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in ga||Y.autoFetchSvg,r=tf(JO,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});QT=r.names,YT=r.unicodes,Hm=zc(Y.styleDefault,{family:Y.familyDefault})};BO(function(t){Hm=zc(t.styleDefault,{family:Y.familyDefault})});JT();function qm(t,e){return(GT[t]||{})[e]}function nL(t,e){return(KT[t]||{})[e]}function ci(t,e){return(XT[t]||{})[e]}function ZT(t){return QT[t]||{prefix:null,iconName:null}}function rL(t){var e=YT[t],n=qm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return Hm}var eb=function(){return{prefix:null,iconName:null,rest:[]}};function iL(t){var e=at,n=qT.reduce(function(r,i){return r[i]="".concat(Y.cssPrefix,"-").concat(i),r},{});return RT.forEach(function(r){(t.includes(n[r])||t.some(function(i){return ZO[r].includes(i)}))&&(e=r)}),e}function zc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?at:n,i=jO[r][t];if(r===La&&!t)return"fad";var s=U0[r][t]||U0[r][i],o=t in on.styles?t:null,a=s||o||null;return a}function sL(t){var e=[],n=null;return t.forEach(function(r){var i=tL(Y.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function H0(t){return t.sort().filter(function(e,n,r){return r.indexOf(e)===n})}var q0=NT.concat(PT);function $c(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=H0(t.filter(function(_){return q0.includes(_)})),o=H0(t.filter(function(_){return!q0.includes(_)})),a=s.filter(function(_){return i=_,!aT.includes(_)}),u=Vc(a,1),c=u[0],h=c===void 0?null:c,p=iL(s),g=$($({},sL(o)),{},{prefix:zc(h,{family:p})});return $($($({},g),uL({values:t,family:p,styles:ga,config:Y,canonical:g,givenPrefix:i})),oL(r,i,g))}function oL(t,e,n){var r=n.prefix,i=n.iconName;if(t||!r||!i)return{prefix:r,iconName:i};var s=e==="fa"?ZT(i):{},o=ci(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!ga.far&&ga.fas&&!Y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}var aL=RT.filter(function(t){return t!==at||t!==La}),lL=Object.keys(kh).filter(function(t){return t!==at}).map(function(t){return Object.keys(kh[t])}).flat();function uL(t){var e=t.values,n=t.family,r=t.canonical,i=t.givenPrefix,s=i===void 0?"":i,o=t.styles,a=o===void 0?{}:o,u=t.config,c=u===void 0?{}:u,h=n===La,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!h&&(p||g||_)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&aL.includes(n)){var C=Object.keys(a).find(function(R){return lL.includes(R)});if(C||c.autoFetchSvg){var k=pj.get(n).defaultShortPrefixId;r.prefix=k,r.iconName=ci(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Wr()||"fas"),r}var cL=function(){function t(){R4(this,t),this.definitions={}}return N4(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),jh(a,o[a]);var u=$m[at][a];u&&jh(u,o[a]),JT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,h=c[2];n[a]||(n[a]={}),h.length>0&&h.forEach(function(p){typeof p=="string"&&(n[a][p]=c)}),n[a][u]=c}),n}}])}(),G0=[],ts={},fs={},dL=Object.keys(fs);function fL(t,e){var n=e.mixoutsTo;return G0=t,ts={},Object.keys(fs).forEach(function(r){dL.indexOf(r)===-1&&delete fs[r]}),G0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Wu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ts[o]||(ts[o]=[]),ts[o].push(s[o])})}r.provides&&r.provides(fs)}),n}function Oh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ts[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Si(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ts[t]||[];i.forEach(function(s){s.apply(null,n)})}function Hr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return fs[t]?fs[t].apply(null,e):void 0}function Lh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wr();if(e)return e=ci(n,e)||e,B0(tb.definitions,n,e)||B0(on.styles,n,e)}var tb=new cL,hL=function(){Y.autoReplaceSvg=!1,Y.observeMutations=!1,Si("noAuto")},pL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return or?(Si("beforeI2svg",e),Hr("pseudoElements2svg",e),Hr("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,XO(function(){gL({autoReplaceSvgRoot:n}),Si("watch",e)})}},mL={icon:function(e){if(e===null)return null;if(Wu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ci(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=zc(e[0]);return{prefix:r,iconName:ci(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Y.cssPrefix,"-"))>-1||e.match(OO))){var i=$c(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wr(),iconName:ci(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wr();return{prefix:s,iconName:ci(s,e)||e}}}},Ht={noAuto:hL,config:Y,dom:pL,parse:mL,library:tb,findIconDefinition:Lh,toHtml:Fa},gL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Se:n;(Object.keys(on.styles).length>0||Y.autoFetchSvg)&&or&&Y.autoReplaceSvg&&Ht.dom.i2svg({node:r})};function Bc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(or){var r=Se.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function yL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Wm(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=Uc($($({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function vL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(Y.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function _L(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(n){return n in t})}function Gm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.maskId,c=t.extra,h=t.watchable,p=h===void 0?!1:h,g=r.found?r:n,_=g.width,C=g.height,k=[Y.replacementClass,s?"".concat(Y.cssPrefix,"-").concat(s):""].filter(function(U){return c.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(c.classes).join(" "),R={children:[],attributes:$($({},c.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:c.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(C)})};!_L(c.attributes)&&!c.attributes["aria-hidden"]&&(R.attributes["aria-hidden"]="true"),p&&(R.attributes[bi]="");var E=$($({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:$({},c.styles)}),x=r.found&&n.found?Hr("generateAbstractMask",E)||{children:[],attributes:{}}:Hr("generateAbstractIcon",E)||{children:[],attributes:{}},S=x.children,L=x.attributes;return E.children=S,E.attributes=L,a?vL(E):yL(E)}function K0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.extra,o=t.watchable,a=o===void 0?!1:o,u=$($({},s.attributes),{},{class:s.classes.join(" ")});a&&(u[bi]="");var c=$({},s.styles);Wm(i)&&(c.transform=KO({transform:i,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Uc(c);h.length>0&&(u.style=h);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),p}function wL(t){var e=t.content,n=t.extra,r=$($({},n.attributes),{},{class:n.classes.join(" ")}),i=Uc(n.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[e]}),s}var nf=on.styles;function Mh(t){var e=t[0],n=t[1],r=t.slice(4),i=Vc(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Zd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Zd.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Zd.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var xL={found:!1,width:512,height:512};function EL(t,e){!MT&&!Y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fh(t,e){var n=e;return e==="fa"&&Y.styleDefault!==null&&(e=Wr()),new Promise(function(r,i){if(n==="fa"){var s=ZT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&nf[e]&&nf[e][t]){var o=nf[e][t];return r(Mh(o))}EL(t,e),r($($({},xL),{},{icon:Y.showMissingIcons&&t?Hr("missingIconAbstract")||{}:{}}))})}var Q0=function(){},Vh=Y.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:Q0,measure:Q0},To='FA "7.3.1"',TL=function(e){return Vh.mark("".concat(To," ").concat(e," begins")),function(){return nb(e)}},nb=function(e){Vh.mark("".concat(To," ").concat(e," ends")),Vh.measure("".concat(To," ").concat(e),"".concat(To," ").concat(e," begins"),"".concat(To," ").concat(e," ends"))},Km={begin:TL,end:nb},Zl=function(){};function Y0(t){var e=t.getAttribute?t.getAttribute(bi):null;return typeof e=="string"}function bL(t){var e=t.getAttribute?t.getAttribute(Um):null,n=t.getAttribute?t.getAttribute(zm):null;return e&&n}function SL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Y.replacementClass)}function IL(){if(Y.autoReplaceSvg===!0)return eu.replace;var t=eu[Y.autoReplaceSvg];return t||eu.replace}function AL(t){return Se.createElementNS("http://www.w3.org/2000/svg",t)}function kL(t){return Se.createElement(t)}function rb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?AL:kL:n;if(typeof t=="string")return Se.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(rb(o,{ceFn:r}))}),i}function CL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var eu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(rb(i),n)}),n.getAttribute(bi)===null&&Y.keepOriginalSource){var r=Se.createComment(CL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Bm(n).indexOf(Y.replacementClass))return eu.replace(e);var i=new RegExp("".concat(Y.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===Y.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Fa(a)}).join(`
`);n.setAttribute(bi,""),n.innerHTML=o}};function X0(t){t()}function ib(t,e){var n=typeof e=="function"?e:Zl;if(t.length===0)n();else{var r=X0;Y.mutateApproach===NO&&(r=Br.requestAnimationFrame||X0),r(function(){var i=IL(),s=Km.begin("mutate");t.map(i),s(),n()})}}var Qm=!1;function sb(){Qm=!0}function Uh(){Qm=!1}var qu=null;function J0(t){if(L0&&Y.observeMutations){var e=t.treeCallback,n=e===void 0?Zl:e,r=t.nodeCallback,i=r===void 0?Zl:r,s=t.pseudoElementsCallback,o=s===void 0?Zl:s,a=t.observeMutationsRoot,u=a===void 0?Se:a;qu=new L0(function(c){if(!Qm){var h=Wr();Bs(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Y0(p.addedNodes[0])&&(Y.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&Y.searchPseudoElements&&o([p.target],!0),p.type==="attributes"&&Y0(p.target)&&~FO.indexOf(p.attributeName))if(p.attributeName==="class"&&bL(p.target)){var g=$c(Bm(p.target)),_=g.prefix,C=g.iconName;p.target.setAttribute(Um,_||h),C&&p.target.setAttribute(zm,C)}else SL(p.target)&&i(p.target)})}}),or&&qu.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function RL(){qu&&qu.disconnect()}function PL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function NL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=$c(Bm(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nL(i.prefix,t.innerText)||qm(i.prefix,HT(t.innerText))),!i.iconName&&Y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function DL(t){var e=Bs(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{});return e}function jL(){return{iconName:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=NL(t),r=n.iconName,i=n.prefix,s=n.rest,o=DL(t),a=Oh("parseNodeAttributes",{},t),u=e.styleParser?PL(t):[];return $({iconName:r,prefix:i,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var OL=on.styles;function ob(t){var e=Y.autoReplaceSvg==="nest"?Z0(t,{styleParser:!1}):Z0(t);return~e.extra.classes.indexOf(VT)?Hr("generateLayersText",t,e):Hr("generateSvgReplacementMutation",t,e)}function LL(){return[].concat(fn(PT),fn(NT))}function e_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!or)return Promise.resolve();var n=Se.documentElement.classList,r=function(p){return n.add("".concat(V0,"-").concat(p))},i=function(p){return n.remove("".concat(V0,"-").concat(p))},s=Y.autoFetchSvg?LL():aT.concat(Object.keys(OL));s.includes("fa")||s.push("fa");var o=[".".concat(VT,":not([").concat(bi,"])")].concat(s.map(function(h){return".".concat(h,":not([").concat(bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Bs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Km.begin("onTree"),c=a.reduce(function(h,p){try{var g=ob(p);g&&h.push(g)}catch(_){MT||_.name==="MissingIcon"&&console.error(_)}return h},[]);return new Promise(function(h,p){Promise.all(c).then(function(g){ib(g,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),h()})}).catch(function(g){u(),p(g)})})}function ML(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ob(t).then(function(n){n&&ib([n],e)})}function FL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Lh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lh(i||{})),t(r,$($({},n),{},{mask:i}))}}var VL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,h=c===void 0?null:c,p=n.classes,g=p===void 0?[]:p,_=n.attributes,C=_===void 0?{}:_,k=n.styles,R=k===void 0?{}:k;if(e){var E=e.prefix,x=e.iconName,S=e.icon;return Bc($({type:"icon"},e),function(){return Si("beforeDOMElementCreation",{iconDefinition:e,params:n}),Gm({icons:{main:Mh(S),mask:u?Mh(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:x,transform:$($({},vn),i),symbol:o,maskId:h,extra:{attributes:C,styles:R,classes:g}})})}},UL={mixout:function(){return{icon:FL(VL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=e_,n.nodeCallback=ML,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Se:r,s=n.callback,o=s===void 0?function(){}:s;return e_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.prefix,o=r.transform,a=r.symbol,u=r.mask,c=r.maskId,h=r.extra;return new Promise(function(p,g){Promise.all([Fh(i,s),u.iconName?Fh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var C=Vc(_,2),k=C[0],R=C[1];p([n,Gm({icons:{main:k,mask:R},prefix:s,iconName:i,transform:o,symbol:a,maskId:c,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=Uc(a);u.length>0&&(i.style=u);var c;return Wm(o)&&(c=Hr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},zL={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Bc({type:"layer"},function(){Si("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Y.cssPrefix,"-layers")].concat(fn(s)).join(" ")},children:o}]})}}}},$L={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var i=r.classes,s=i===void 0?[]:i,o=r.attributes,a=o===void 0?{}:o,u=r.styles,c=u===void 0?{}:u;return Bc({type:"counter",content:n},function(){return Si("beforeDOMElementCreation",{content:n,params:r}),wL({content:n.toString(),extra:{attributes:a,styles:c,classes:["".concat(Y.cssPrefix,"-layers-counter")].concat(fn(s))}})})}}}},BL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vn:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,h=r.styles,p=h===void 0?{}:h;return Bc({type:"text",content:n},function(){return Si("beforeDOMElementCreation",{content:n,params:r}),K0({content:n,transform:$($({},vn),s),extra:{attributes:c,styles:p,classes:["".concat(Y.cssPrefix,"-layers-text")].concat(fn(a))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.transform,s=r.extra,o=null,a=null;if(sT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/u,a=c.height/u}return Promise.resolve([n,K0({content:n.innerHTML,width:o,height:a,transform:i,extra:s,watchable:!0})])}}},ab=new RegExp('"',"ug"),t_=[1105920,1112319],n_=$($($($({},{FontAwesome:{normal:"fas",400:"fas"}}),hj),RO),Ej),zh=Object.keys(n_).reduce(function(t,e){return t[e.toLowerCase()]=n_[e],t},{}),WL=Object.keys(zh).reduce(function(t,e){var n=zh[e];return t[e]=n[900]||fn(Object.entries(n))[0][1],t},{});function HL(t){var e=t.replace(ab,"");return HT(fn(e)[0]||"")}function qL(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),n=t.getPropertyValue("content"),r=n.replace(ab,""),i=r.codePointAt(0),s=i>=t_[0]&&i<=t_[1],o=r.length===2?r[0]===r[1]:!1;return s||o||e}function GL(t,e){var n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(zh[n]||{})[i]||WL[n]}function r_(t,e){var n="".concat(PO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Bs(t.children),o=s.filter(function(W){return W.getAttribute(Rh)===e})[0],a=Br.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(LO),h=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){var g=a.getPropertyValue("content"),_=GL(u,h),C=HL(g),k=c[0].startsWith("FontAwesome"),R=qL(a),E=qm(_,C),x=E;if(k){var S=rL(C);S.iconName&&S.prefix&&(E=S.iconName,_=S.prefix)}if(E&&!R&&(!o||o.getAttribute(Um)!==_||o.getAttribute(zm)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);var L=jL(),U=L.extra;U.attributes[Rh]=e,Fh(E,_).then(function(W){var b=Gm($($({},L),{},{icons:{main:W,mask:eb()},prefix:_,iconName:x,extra:U,watchable:!0})),v=Se.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(v,t.firstChild):t.appendChild(v),v.outerHTML=b.map(function(T){return Fa(T)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function KL(t){return Promise.all([r_(t,"::before"),r_(t,"::after")])}function QL(t){return t.parentNode!==document.head&&!~DO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var YL=function(e){return!!e&&LT.some(function(n){return e.includes(n)})},XL=function(e){if(!e)return[];var n=new Set,r=e.split(/,(?![^()]*\))/).map(function(u){return u.trim()});r=r.flatMap(function(u){return u.includes("(")?u:u.split(",").map(function(c){return c.trim()})});var i=Jl(r),s;try{for(i.s();!(s=i.n()).done;){var o=s.value;if(YL(o)){var a=LT.reduce(function(u,c){return u.replace(c,"")},o);a!==""&&a!=="*"&&n.add(a)}}}catch(u){i.e(u)}finally{i.f()}return n};function i_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(or){var n;if(e)n=t;else if(Y.searchPseudoElementsFullScan)n=t.querySelectorAll("*");else{var r=new Set,i=Jl(document.styleSheets),s;try{for(i.s();!(s=i.n()).done;){var o=s.value;try{var a=Jl(o.cssRules),u;try{for(a.s();!(u=a.n()).done;){var c=u.value,h=XL(c.selectorText),p=Jl(h),g;try{for(p.s();!(g=p.n()).done;){var _=g.value;r.add(_)}}catch(k){p.e(k)}finally{p.f()}}}catch(k){a.e(k)}finally{a.f()}}catch(k){Y.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(k.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(k){i.e(k)}finally{i.f()}if(!r.size)return;var C=Array.from(r).join(", ");try{n=t.querySelectorAll(C)}catch{}}return new Promise(function(k,R){var E=Bs(n).filter(QL).map(KL),x=Km.begin("searchPseudoElements");sb(),Promise.all(E).then(function(){x(),Uh(),k()}).catch(function(){x(),Uh(),R()})})}}var JL={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=i_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Se:r;Y.searchPseudoElements&&i_(i)}}},s_=!1,ZL={mixout:function(){return{dom:{unwatch:function(){sb(),s_=!0}}}},hooks:function(){return{bootstrap:function(){J0(Oh("mutationObserverCallbacks",{}))},noAuto:function(){RL()},watch:function(n){var r=n.observeMutationsRoot;s_?Uh():J0(Oh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},o_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},eM={mixout:function(){return{parse:{transform:function(n){return o_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=o_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),h="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(u," ").concat(c," ").concat(h)},g={transform:"translate(".concat(o/2*-1," -256)")},_={outer:a,inner:p,path:g};return{tag:"g",attributes:$({},_.outer),children:[{tag:"g",attributes:$({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),_.path)}]}]}}}},rf={x:0,y:0,width:"100%",height:"100%"};function a_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function tM(t){return t.tag==="g"?t.children:[t]}var nM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?$c(i.split(" ").map(function(o){return o.trim()})):eb();return s.prefix||(s.prefix=Wr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,h=s.icon,p=o.width,g=o.icon,_=GO({transform:u,containerWidth:p,iconWidth:c}),C={tag:"rect",attributes:$($({},rf),{},{fill:"white"})},k=h.children?{children:h.children.map(a_)}:{},R={tag:"g",attributes:$({},_.inner),children:[a_($({tag:h.tag,attributes:$($({},h.attributes),_.path)},k))]},E={tag:"g",attributes:$({},_.outer),children:[R]},x="mask-".concat(a||z0()),S="clip-".concat(a||z0()),L={tag:"mask",attributes:$($({},rf),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,E]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:tM(g)},L]};return r.push(U,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(x,")")},rf)}),{children:r,attributes:i}}}},rM={provides:function(e){var n=!1;Br.matchMedia&&(n=Br.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iM={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},sM=[YO,UL,zL,$L,BL,JL,ZL,eM,nM,rM,iM];fL(sM,{mixoutsTo:Ht});Ht.noAuto;var Rs=Ht.config;Ht.library;Ht.dom;var lb=Ht.parse;Ht.findIconDefinition;Ht.toHtml;var oM=Ht.icon;Ht.layer;Ht.text;Ht.counter;function aM(t){return t=t-0,t===t}function ub(t){return aM(t)?t:(t=t.replace(/[_-]+(.)?/g,(e,n)=>n?n.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}var lM=(t,e)=>va.createElement("stop",{key:`${e}-${t.offset}`,offset:t.offset,stopColor:t.color,...t.opacity!==void 0&&{stopOpacity:t.opacity}});function uM(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Fi=new Map,cM=1e3;function dM(t){if(Fi.has(t))return Fi.get(t);const e={};let n=0;const r=t.length;for(;n<r;){const i=t.indexOf(";",n),s=i===-1?r:i,o=t.slice(n,s).trim();if(o){const a=o.indexOf(":");if(a>0){const u=o.slice(0,a).trim(),c=o.slice(a+1).trim();if(u&&c){const h=ub(u);e[h.startsWith("webkit")?uM(h):h]=c}}}n=s+1}if(Fi.size===cM){const i=Fi.keys().next().value;i&&Fi.delete(i)}return Fi.set(t,e),e}function cb(t,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(p=>{let g=p;return("fill"in n||n.gradientFill)&&p.tag==="path"&&"fill"in p.attributes&&(g={...p,attributes:{...p.attributes,fill:void 0}}),cb(t,g)}),i=e.attributes||{},s={};for(const[p,g]of Object.entries(i))switch(!0){case p==="class":{s.className=g;break}case p==="style":{s.style=dM(String(g));break}case p.startsWith("aria-"):case p.startsWith("data-"):{s[p.toLowerCase()]=g;break}default:s[ub(p)]=g}const{style:o,role:a,"aria-label":u,gradientFill:c,...h}=n;if(o&&(s.style=s.style?{...s.style,...o}:o),a&&(s.role=a),u&&(s["aria-label"]=u,s["aria-hidden"]="false"),c){s.fill=`url(#${c.id})`;const{type:p,stops:g=[],..._}=c;r.unshift(t(p==="linear"?"linearGradient":"radialGradient",{..._,id:c.id},g.map(lM)))}return t(e.tag,{...s,...h},...r)}var fM=cb.bind(null,va.createElement),l_=(t,e)=>{const n=M.useId();return t||(e?n:void 0)},hM=class{constructor(t="react-fontawesome"){this.enabled=!1;let e=!1;try{e=typeof process<"u"&&!1}catch{}this.scope=t,this.enabled=e}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},pM="searchPseudoElementsFullScan"in Rs&&typeof Rs.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",mM=Number.parseInt(pM)>=7,gM=()=>mM,Uo="fa",Ge={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},yM={left:"fa-pull-left",right:"fa-pull-right"},vM={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},_M={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},tn={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function wM(t){const e=Rs.cssPrefix||Rs.familyPrefix||Uo;return e===Uo?t:t.replace(new RegExp(String.raw`(?<=^|\s)${Uo}-`,"g"),`${e}-`)}function xM(t){const{beat:e,fade:n,beatFade:r,bounce:i,shake:s,spin:o,spinPulse:a,spinReverse:u,pulse:c,fixedWidth:h,inverse:p,border:g,flip:_,size:C,rotation:k,pull:R,swapOpacity:E,rotateBy:x,widthAuto:S,canvasSquare:L,canvasRoomy:U,flip360:W,buzz:b,float:v,jello:T,spinSnap:I,spinSnap4:P,spinSnap8:N,swing:A,wag:It,className:hn}=t,ie=[];return hn&&ie.push(...hn.split(" ")),e&&ie.push(Ge.beat),n&&ie.push(Ge.fade),r&&ie.push(Ge.beatFade),i&&ie.push(Ge.bounce),s&&ie.push(Ge.shake),o&&ie.push(Ge.spin),u&&ie.push(Ge.spinReverse),a&&ie.push(Ge.spinPulse),c&&ie.push(Ge.pulse),h&&ie.push(tn.fixedWidth),p&&ie.push(tn.inverse),g&&ie.push(tn.border),_===!0&&ie.push(tn.flip),(_==="horizontal"||_==="both")&&ie.push(tn.flipHorizontal),(_==="vertical"||_==="both")&&ie.push(tn.flipVertical),C!=null&&ie.push(_M[C]),k!=null&&k!==0&&ie.push(vM[k]),R!=null&&ie.push(yM[R]),E&&ie.push(tn.swapOpacity),gM()?(x&&ie.push(tn.rotateBy),S&&ie.push(tn.widthAuto),L&&ie.push(tn.canvasSquare),U&&ie.push(tn.canvasRoomy),W&&ie.push(Ge.flip360),b&&ie.push(Ge.buzz),v&&ie.push(Ge.float),T&&ie.push(Ge.jello),I&&ie.push(Ge.spinSnap),P&&ie.push(Ge.spinSnap4),N&&ie.push(Ge.spinSnap8),A&&ie.push(Ge.swing),It&&ie.push(Ge.wag),(Rs.cssPrefix||Rs.familyPrefix||Uo)===Uo?ie:ie.map(wM)):ie}var EM=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function u_(t){if(t)return EM(t)?t:lb.icon(t)}function TM(t){return Object.keys(t)}var c_=new hM("FontAwesomeIcon"),db={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},bM=new Set(Object.keys(db)),fb=va.forwardRef((t,e)=>{const n={...db,...t},{icon:r,mask:i,symbol:s,title:o,titleId:a,maskId:u,transform:c}=n,h=l_(u,!!i),p=l_(a,!!o),g=u_(r);if(!g)return c_.error("Icon lookup is undefined",r),null;const _=xM(n),C=typeof c=="string"?lb.transform(c):c,k=u_(i),R=oM(g,{..._.length>0&&{classes:_},...C&&{transform:C},...k&&{mask:k},symbol:s,title:o,titleId:p,maskId:h});if(!R)return c_.error("Could not find icon",g),null;const{abstract:E}=R,x={ref:e};for(const S of TM(n))bM.has(S)||(x[S]=n[S]);return fM(E[0],x)});fb.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var SM={prefix:"fab",iconName:"discord",icon:[576,512,[],"f392","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]};const Wc=({size:t=16,color:e,className:n,style:r})=>f.jsx(fb,{icon:SM,style:{width:t,height:t,color:e,display:"inline-block",...r},className:n}),Rl=()=>{const{content:t}=sr(),e=t||it,n=(e==null?void 0:e.studioName)||"Redundant Studios",r=(e==null?void 0:e.contact)||it.contact,i=(e==null?void 0:e.logoUrl)||"",s=(e==null?void 0:e.navbarLabels)||it.navbarLabels,o=[{icon:fc,url:r.instagramUrl,label:"Instagram"},{icon:hc,url:r.linkedinUrl,label:"LinkedIn"},{icon:pc,url:r.youtubeUrl,label:"YouTube"},{icon:Wc,url:r.discordUrl,label:"Discord"},{icon:M1,url:r.email?`mailto:${r.email}`:null,label:"Email"}].filter(a=>a.url);return f.jsxs("footer",{style:{backgroundColor:"#050505",borderTop:"1px solid rgba(225, 6, 0, 0.2)",padding:`${j.xxl} ${j.lg} ${j.lg}`,position:"relative",overflow:"hidden"},children:[f.jsx("div",{style:{position:"absolute",bottom:"-30px",left:"50%",transform:"translateX(-50%)",fontFamily:B.display,fontSize:"clamp(4rem, 15vw, 10rem)",fontWeight:900,color:"rgba(225, 6, 0, 0.04)",letterSpacing:"5px",whiteSpace:"nowrap",pointerEvents:"none",userSelect:"none"},children:"REDUNDANT"}),f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",position:"relative"},children:[f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:j.xl,marginBottom:j.xl},children:[f.jsxs("div",{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.md},children:[i?f.jsx("img",{src:i,alt:"Logo",style:{width:"44px",height:"44px",objectFit:"contain",borderRadius:oe.sm}}):f.jsx("div",{style:{width:"44px",height:"44px",background:Zn.primary,borderRadius:oe.sm,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:B.display,fontWeight:900,color:w.white,fontSize:"1.4rem",boxShadow:"0 0 16px rgba(225, 6, 0, 0.4)"},children:"R"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:B.display,fontSize:"1rem",fontWeight:900,color:w.white,letterSpacing:"2px"},children:n.split(" ")[0].toUpperCase()}),f.jsx("div",{style:{fontFamily:B.accent,fontSize:"0.65rem",color:w.primary,letterSpacing:"3px",fontWeight:700},children:n.split(" ").slice(1).join(" ").toUpperCase()||"STUDIOS"})]})]}),f.jsx("p",{style:{color:w.muted,fontSize:"0.9rem",lineHeight:"1.6",marginBottom:j.md},children:"Crafting immersive worlds and unforgettable gaming experiences."}),f.jsx("div",{style:{display:"flex",gap:j.sm,flexWrap:"wrap"},children:o.map((a,u)=>{const c=a.icon;return f.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,style:{width:"38px",height:"38px",background:w.surface,border:`1px solid ${w.inputBorder}`,borderRadius:oe.sm,display:"flex",alignItems:"center",justifyContent:"center",color:w.muted,transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",textDecoration:"none"},onMouseEnter:h=>{h.currentTarget.style.color=w.white,h.currentTarget.style.background="rgba(225, 6, 0, 0.1)"},onMouseLeave:h=>{h.currentTarget.style.color=w.muted,h.currentTarget.style.background=w.surface},children:f.jsx(c,{size:16})},u)})})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:B.accent,color:w.white,fontSize:"0.95rem",letterSpacing:"2px",marginBottom:j.md,textTransform:"uppercase",fontWeight:700},children:"Explore"}),f.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.7rem"},children:s.map(a=>f.jsx("li",{children:f.jsxs($n,{to:a.path,style:{color:w.muted,fontSize:"0.9rem",textDecoration:"none",transition:"color 0.35s ease",display:"inline-flex",alignItems:"center",gap:"0.3rem"},onMouseEnter:u=>u.currentTarget.style.color=w.primary,onMouseLeave:u=>u.currentTarget.style.color=w.muted,children:[f.jsx("span",{style:{color:w.primary,fontSize:"0.7rem"},children:"›"}),a.name]})},a.path))})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:B.accent,color:w.white,fontSize:"0.95rem",letterSpacing:"2px",marginBottom:j.md,textTransform:"uppercase",fontWeight:700},children:"Studio"}),f.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:[f.jsx("li",{style:{color:w.muted,fontSize:"0.9rem"},children:"Indie Game Studio"}),f.jsx("li",{style:{color:w.muted,fontSize:"0.9rem"},children:"Mobile & PC Games"}),f.jsx("li",{style:{color:w.muted,fontSize:"0.9rem"},children:"Unity Engine"})]})]}),f.jsxs("div",{children:[f.jsx("h4",{style:{fontFamily:B.accent,color:w.white,fontSize:"0.95rem",letterSpacing:"2px",marginBottom:j.md,textTransform:"uppercase",fontWeight:700},children:"Get In Touch"}),r.email&&f.jsx("a",{href:`mailto:${r.email}`,style:{color:w.muted,fontSize:"0.9rem",textDecoration:"none",transition:"color 0.35s ease",display:"block",marginBottom:"0.7rem",wordBreak:"break-all"},onMouseEnter:a=>a.currentTarget.style.color=w.primary,onMouseLeave:a=>a.currentTarget.style.color=w.muted,children:r.email}),f.jsx("p",{style:{color:w.muted,fontSize:"0.85rem",lineHeight:1.6,margin:0},children:"For business inquiries and partnerships."})]})]}),f.jsxs("div",{style:{borderTop:`1px solid ${w.inputBorder}`,paddingTop:j.md,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:j.sm},children:[f.jsxs("p",{style:{color:w.muted,fontSize:"0.85rem",fontFamily:B.accent,letterSpacing:"1px",margin:0},children:["© ",new Date().getFullYear()," ",n,". All rights reserved."]}),f.jsxs("p",{style:{color:w.muted,fontSize:"0.85rem",fontFamily:B.accent,letterSpacing:"2px",textTransform:"uppercase",margin:0,display:"flex",alignItems:"center",gap:"0.4rem"},children:["Made with ",f.jsx("span",{style:{color:w.primary},children:"♥"})," by ",n]})]})]})]})},IM=t=>t?/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(t):!1,AM=t=>{if(!t)return null;const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,n=t.match(e);return n&&n[2].length===11?`https://www.youtube.com/embed/${n[2]}?rel=0&autoplay=1&loop=1&mute=1&playlist=${n[2]}`:null},kM=({content:t})=>{const{content:e}=sr(),n=t||e||it,r=(n==null?void 0:n.hero)||it.hero,i=r.videoBackgroundUrl||"",s=IM(i),o=s?null:AM(i);return f.jsxs("section",{style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden"},children:[f.jsxs("div",{style:{position:"absolute",inset:0,zIndex:0},children:[s?f.jsx("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}}):o?f.jsx("iframe",{src:o,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none",objectFit:"cover",pointerEvents:"none"},allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Hero Background"}):r.backgroundImageUrl?f.jsx("img",{src:r.backgroundImageUrl,alt:"",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"}}):null,f.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.78) 45%, rgba(10,10,10,0.55) 100%)",zIndex:1}}),f.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 30% 20%, rgba(225, 6, 0, 0.10) 0%, transparent 55%)",zIndex:2}})]}),f.jsx("div",{className:"grain",style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none"}}),f.jsxs("div",{style:{position:"relative",zIndex:4,maxWidth:"1280px",width:"100%",margin:"0 auto",padding:`${j.xxxl} ${j.lg}`,paddingLeft:"clamp(0px, 4vw, 2rem)"},children:[f.jsxs("div",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",marginBottom:j.lg},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary,verticalAlign:"middle",marginRight:"12px"}}),"Indie Game Studio"]}),f.jsx("h1",{style:{fontFamily:B.display,fontSize:"clamp(3rem, 8vw, 6rem)",color:w.white,marginBottom:j.lg,fontWeight:800,letterSpacing:"2px",lineHeight:"0.95",maxWidth:"900px",textTransform:"uppercase"},children:r.headline}),f.jsx("p",{style:{fontFamily:B.body,fontSize:"clamp(1.05rem, 1.5vw, 1.25rem)",color:w.secondary,marginBottom:j.xl,maxWidth:"580px",lineHeight:1.7,fontWeight:500},children:r.subheadline}),f.jsxs("div",{style:{display:"flex",gap:j.md,flexWrap:"wrap"},children:[f.jsxs($n,{to:"/games",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:w.primary,color:w.white,padding:"1rem 2rem",fontSize:"0.95rem",fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",borderRadius:oe.sm,textDecoration:"none",transition:"background 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease",boxShadow:"0 0 20px rgba(225, 6, 0, 0.3)"},onMouseEnter:a=>{a.currentTarget.style.background=w.primaryHover,a.currentTarget.style.boxShadow="0 0 32px rgba(225, 6, 0, 0.5)"},onMouseLeave:a=>{a.currentTarget.style.background=w.primary,a.currentTarget.style.boxShadow="0 0 20px rgba(225, 6, 0, 0.3)"},children:["Explore Games ",f.jsx(dc,{size:16})]}),f.jsx($n,{to:"/about",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"transparent",color:w.white,padding:"1rem 2rem",fontSize:"0.95rem",fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",borderRadius:oe.sm,border:`1px solid ${w.inputBorder}`,textDecoration:"none",transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"},onMouseEnter:a=>{a.currentTarget.style.borderColor=w.primary,a.currentTarget.style.color=w.primary},onMouseLeave:a=>{a.currentTarget.style.borderColor=w.inputBorder,a.currentTarget.style.color=w.white},children:"About Us"})]})]})]})},CM=[{id:"seed-1",title:"DeadZone",genre:"Top-down Shooter",platform:"Android",description:"A 2D top-down zombie shooter — survive waves of the undead.",status:"Released",thumbnailUrl:"https://via.placeholder.com/400x225",playstoreUrl:"#",order:0},{id:"seed-2",title:"Project Neon",genre:"Cyberpunk Action",platform:"Android",description:"Explore a neon-drenched city in this high-octane action game.",status:"Coming Soon",thumbnailUrl:"https://via.placeholder.com/400x225",playstoreUrl:null,order:1}],Hc=()=>{const[t,e]=M.useState(CM),[n,r]=M.useState(!0),[i,s]=M.useState(null);return M.useEffect(()=>{const o=fE(Mu(tt,"games"),hE("order","asc")),a=_E(o,u=>{if(!u.empty){const c=u.docs.map(h=>({id:h.id,...h.data()}));e(c)}r(!1)},u=>{console.error("Firestore error:",u),s(u),r(!1)});return()=>a()},[]),{games:t,loading:n,error:i}},Ym=t=>{if(!t)return null;const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,n=t.match(e);return n&&n[2].length===11?`https://www.youtube.com/embed/${n[2]}`:null},RM=()=>{const{games:t,loading:e}=Hc();if(e)return null;const n=t.filter(r=>!r.featured).slice(0,1);return n.length===0?null:f.jsxs("section",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg,borderTop:`1px solid ${w.inputBorder}`},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.md},children:[f.jsx("span",{style:{display:"inline-block",width:"8px",height:"8px",background:w.primary,borderRadius:"50%",boxShadow:Ih.glow}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"In Development"})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:j.xl,flexWrap:"wrap",gap:j.md},children:[f.jsx("h2",{style:{fontFamily:B.display,fontSize:"clamp(2rem, 5vw, 3.25rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,lineHeight:"0.95"},children:"Latest Game"}),f.jsxs($n,{to:"/games",style:{color:w.primary,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",fontSize:"0.85rem",textDecoration:"none",letterSpacing:"2px",display:"inline-flex",alignItems:"center",gap:"0.4rem",transition:"opacity 0.35s ease"},onMouseEnter:r=>r.currentTarget.style.opacity="0.7",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:["More Projects ",f.jsx(dc,{size:14})]})]}),n.map(r=>{const i=Ym(r.trailerUrl);return r.modes&&r.modes.split(",").map(s=>{const[o,a]=s.split("|");return{name:o==null?void 0:o.trim(),desc:a==null?void 0:a.trim()}}),r.tags&&r.tags.split(",").map(s=>s.trim()),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"3fr 2fr",gap:0,background:w.surface,borderRadius:oe.md,overflow:"hidden",border:`1px solid ${w.inputBorder}`,transition:"border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},className:"latest-card-grid",onMouseEnter:s=>{s.currentTarget.style.boxShadow="0 0 50px rgba(225, 6, 0, 0.2), 0 0 0 1px rgba(225, 6, 0, 0.15)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow="none"},children:[f.jsx("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",overflow:"hidden",backgroundColor:w.bgElevated,borderRight:`1px solid ${w.inputBorder}`},className:"latest-card-video",children:i?f.jsx("iframe",{src:`${i}?rel=0`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},title:r.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.thumbnailUrl?f.jsx("img",{src:r.thumbnailUrl,alt:r.title,loading:"lazy",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}}):f.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem",color:w.muted},children:[f.jsx(Sn,{size:40,color:w.primary}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.8rem",letterSpacing:"3px",textTransform:"uppercase",fontWeight:600},children:"Trailer Coming Soon"})]})}),f.jsxs("div",{style:{padding:j.xl,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:j.lg},className:"latest-card-content",children:[f.jsxs("div",{children:[f.jsx("div",{style:{display:"inline-block",padding:"0.3rem 0.7rem",background:"rgba(225, 6, 0, 0.1)",color:w.primary,fontFamily:B.body,fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm,marginBottom:j.sm},children:r.status}),f.jsx("h3",{style:{fontFamily:B.display,fontSize:"clamp(1.8rem, 3.5vw, 2.5rem)",color:w.white,margin:0,fontWeight:800,letterSpacing:"2px",lineHeight:"1",textTransform:"uppercase",marginBottom:j.sm},children:r.title}),f.jsxs("div",{style:{fontFamily:B.body,fontSize:"0.75rem",color:w.muted,textTransform:"uppercase",letterSpacing:"2px",fontWeight:600,marginBottom:j.md},children:[r.genre," · ",r.platform]}),r.description&&f.jsx("p",{style:{fontFamily:B.body,fontSize:"0.95rem",color:w.secondary,lineHeight:1.6,margin:0,fontWeight:500},children:r.description})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i&&f.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between",padding:"0.95rem 1.4rem",background:Zn.primary,color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.85rem",borderRadius:oe.sm,textDecoration:"none",transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 0 20px rgba(225, 6, 0, 0.3)"},onMouseEnter:s=>{s.currentTarget.style.boxShadow="0 0 32px rgba(225, 6, 0, 0.5)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow="0 0 20px rgba(225, 6, 0, 0.3)"},children:[f.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.6rem"},children:[f.jsx(Sn,{size:14,fill:w.white}),"Watch Trailer in Youtube"]}),f.jsx(th,{size:14})]}),r.playstoreUrl&&f.jsxs("a",{href:r.playstoreUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"space-between",padding:"0.95rem 1.4rem",background:"transparent",color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.85rem",borderRadius:oe.sm,border:`1px solid ${w.inputBorder}`,textDecoration:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},onMouseEnter:s=>{s.currentTarget.style.borderColor=w.primary,s.currentTarget.style.color=w.primary},onMouseLeave:s=>{s.currentTarget.style.borderColor=w.inputBorder,s.currentTarget.style.color=w.white},children:[f.jsx("span",{children:"Play Store"}),f.jsx(th,{size:14})]})]})]})]},r.id)}),f.jsx("p",{style:{fontFamily:B.body,fontSize:"0.8rem",color:w.muted,margin:j.md+" 0 0",fontWeight:500,letterSpacing:"1px"},children:"More projects coming soon. Follow us for updates."})]}),f.jsx("style",{children:`
        @media (max-width: 900px) {
          .latest-card-grid {
            grid-template-columns: 1fr !important;
          }
          .latest-card-video {
            border-right: none !important;
            border-bottom: 1px solid ${w.inputBorder};
          }
          .latest-card-content {
            padding: ${j.md} !important;
          }
        }
        @media (max-width: 480px) {
          .latest-card-content {
            padding: ${j.sm} !important;
          }
        }
      `})]})},PM=()=>{const{games:t,loading:e}=Hc();if(e)return null;const n=t.find(u=>u.featured);if(!n)return null;const i=(u=>{if(!u)return null;const c=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,h=u.match(c);return h&&h[2].length===11?`https://www.youtube.com/embed/${h[2]}`:null})(n.trailerUrl),s=n.modes?n.modes.split(",").map(u=>{const[c,h]=u.split("|");return{name:c==null?void 0:c.trim(),desc:h==null?void 0:h.trim()}}):[],o=n.tags?n.tags.split(",").map(u=>u.trim()):[],a=s.length>0?`${s.length} ${s.length===1?"MODE":"MODES"}`:null;return f.jsxs("section",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.xl},children:[f.jsx("span",{style:{display:"inline-block",width:"8px",height:"8px",background:w.primary,borderRadius:"50%",boxShadow:Ih.glow}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"In Development"})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"3fr 2fr",gap:j.xl,alignItems:"start"},className:"featured-grid",children:[f.jsx("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",overflow:"hidden",backgroundColor:w.surface,border:`1px solid ${w.inputBorder}`,borderRadius:oe.md},children:i?f.jsx("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},src:i,title:"Featured Game Trailer",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):f.jsxs("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.75rem",background:Zn.primarySoft},children:[f.jsx(Sn,{size:36,color:w.primary}),f.jsx("span",{style:{fontFamily:B.body,letterSpacing:"3px",textTransform:"uppercase",fontSize:"0.8rem",color:w.muted,fontWeight:600},children:"Trailer Coming Soon"})]})}),f.jsxs("div",{children:[f.jsx("h2",{style:{fontFamily:B.display,fontSize:"clamp(2rem, 4.5vw, 3.5rem)",color:w.white,margin:0,textTransform:"uppercase",fontWeight:700,lineHeight:"1",letterSpacing:"2px",marginBottom:j.md},children:n.title}),n.description&&f.jsx("p",{style:{fontFamily:B.body,fontSize:"1rem",color:w.secondary,lineHeight:"1.7",margin:0,marginBottom:j.md,fontWeight:500},children:n.description}),s.length>0&&f.jsxs("p",{style:{fontFamily:B.body,fontSize:"0.95rem",color:w.secondary,margin:0,marginBottom:j.md,fontWeight:600},children:["This game consists of ",s.length," modes:"]}),s.length>0&&f.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.85rem",marginBottom:j.lg},children:s.map((u,c)=>f.jsxs("li",{style:{display:"flex",gap:"0.6rem",alignItems:"flex-start"},children:[f.jsx(Sn,{size:14,color:w.primary,fill:w.primary,style:{marginTop:"4px",flexShrink:0}}),f.jsxs("div",{children:[f.jsx("strong",{style:{color:w.white,fontFamily:B.body,fontSize:"1rem",fontWeight:700,display:"block",marginBottom:"0.2rem"},children:u.name}),u.desc&&f.jsx("span",{style:{color:w.secondary,fontSize:"0.9rem",lineHeight:1.5,fontWeight:500},children:u.desc})]})]},c))}),(o.length>0||n.platform||a)&&f.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:j.lg},children:[o.map((u,c)=>f.jsx("span",{style:{padding:"0.35rem 0.8rem",border:`1px solid ${w.inputBorder}`,color:w.secondary,fontFamily:B.body,fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm},children:u},c)),a&&f.jsx("span",{style:{padding:"0.35rem 0.8rem",border:`1px solid ${w.inputBorder}`,color:w.secondary,fontFamily:B.body,fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm},children:a}),n.platform&&f.jsx("span",{style:{padding:"0.35rem 0.8rem",border:`1px solid ${w.inputBorder}`,color:w.secondary,fontFamily:B.body,fontSize:"0.7rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm},children:n.platform})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem",marginBottom:j.md},children:[i&&f.jsxs("button",{onClick:()=>window.open(i,"_blank"),style:{background:Zn.primary,color:w.white,padding:"0.95rem 1.5rem",fontSize:"0.9rem",fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",border:"none",borderRadius:oe.md,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"space-between",transition:"all 0.2s ease",boxShadow:Ih.glow},onMouseEnter:u=>u.currentTarget.style.transform="translateY(-2px)",onMouseLeave:u=>u.currentTarget.style.transform="translateY(0)",children:[f.jsx("span",{children:"Watch Trailer"}),f.jsx(dc,{size:16})]}),n.playstoreUrl&&f.jsxs("button",{onClick:()=>window.open(n.playstoreUrl,"_blank"),style:{background:"transparent",color:w.white,padding:"0.95rem 1.5rem",fontSize:"0.9rem",fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",border:`1px solid ${w.inputBorder}`,borderRadius:oe.md,cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"space-between",transition:"all 0.2s ease"},onMouseEnter:u=>{u.currentTarget.style.borderColor=w.primary,u.currentTarget.style.color=w.primary},onMouseLeave:u=>{u.currentTarget.style.borderColor=w.inputBorder,u.currentTarget.style.color=w.white},children:[f.jsx("span",{children:"Download Game"}),f.jsx(th,{size:14})]})]}),n.playstoreUrl&&f.jsx("p",{style:{fontFamily:B.body,fontSize:"0.8rem",color:w.muted,margin:0,fontWeight:500},children:"Available on Google Play."})]})]})]}),f.jsx("style",{children:`
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},NM=()=>{const{games:t,loading:e}=Hc();if(e)return null;const n=t.filter(r=>!r.featured).slice(3,6);return n.length===0?null:f.jsxs("section",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg,borderTop:`1px solid ${w.inputBorder}`},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.md},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"Released"})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:j.xl,flexWrap:"wrap",gap:j.md},children:[f.jsx("h2",{style:{fontFamily:B.display,fontSize:"clamp(2rem, 5vw, 3.25rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,lineHeight:"0.95"},children:"Previous Projects"}),f.jsxs($n,{to:"/games",style:{color:w.primary,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",fontSize:"0.85rem",textDecoration:"none",letterSpacing:"2px",display:"inline-flex",alignItems:"center",gap:"0.4rem",transition:"opacity 0.2s ease"},onMouseEnter:r=>r.currentTarget.style.opacity="0.7",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:["View All ",f.jsx(dc,{size:14})]})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:j.lg},className:"previous-grid",children:n.map(r=>{const i=Ym(r.trailerUrl);return f.jsxs("div",{style:{background:w.surface,borderRadius:oe.md,overflow:"hidden",border:`1px solid ${w.inputBorder}`,transition:"box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",flexDirection:"column"},onMouseEnter:s=>{s.currentTarget.style.boxShadow="0 0 50px rgba(225, 6, 0, 0.2), 0 0 0 1px rgba(225, 6, 0, 0.15)"},onMouseLeave:s=>{s.currentTarget.style.boxShadow="none"},children:[f.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",overflow:"hidden",backgroundColor:w.bgElevated},children:[i?f.jsx("iframe",{src:`${i}?rel=0`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},title:r.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):r.thumbnailUrl?f.jsx("img",{src:r.thumbnailUrl,alt:r.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):f.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem",color:w.muted},children:[f.jsx(Sn,{size:32,color:w.primary}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.75rem",letterSpacing:"2px",textTransform:"uppercase",fontWeight:600},children:"Coming Soon"})]}),f.jsx("div",{style:{position:"absolute",top:"0.75rem",left:"0.75rem",padding:"0.3rem 0.7rem",background:"rgba(10,10,10,0.85)",color:w.primary,fontFamily:B.body,fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm},children:r.status})]}),f.jsxs("div",{style:{padding:j.md,display:"flex",flexDirection:"column",flex:1},children:[f.jsx("h3",{style:{fontFamily:B.display,fontSize:"1.3rem",color:w.white,margin:0,fontWeight:700,letterSpacing:"1.5px",marginBottom:"0.4rem",lineHeight:"1.1"},children:r.title}),f.jsxs("div",{style:{fontFamily:B.body,fontSize:"0.8rem",color:w.muted,textTransform:"uppercase",letterSpacing:"2px",fontWeight:600,marginBottom:j.sm},children:[r.genre," · ",r.platform]}),r.description&&f.jsx("p",{style:{fontFamily:B.body,fontSize:"0.9rem",color:w.secondary,lineHeight:1.5,margin:0,marginBottom:j.md,fontWeight:500,flex:1},children:r.description.length>120?r.description.substring(0,120)+"...":r.description}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[i&&f.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.6rem 1rem",background:Zn.primary,color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.7rem",borderRadius:oe.md,textDecoration:"none",transition:"all 0.2s ease",flex:1,justifyContent:"center"},onMouseEnter:s=>s.currentTarget.style.boxShadow="0 0 20px rgba(225, 6, 0, 0.4)",onMouseLeave:s=>s.currentTarget.style.boxShadow="none",children:[f.jsx(Sn,{size:12,fill:w.white}),"Watch Trailer"]}),r.playstoreUrl&&f.jsx("a",{href:r.playstoreUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.6rem 1rem",background:"transparent",color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.7rem",borderRadius:oe.md,border:`1px solid ${w.inputBorder}`,textDecoration:"none",transition:"all 0.2s ease",flex:1},onMouseEnter:s=>{s.currentTarget.style.borderColor=w.primary,s.currentTarget.style.color=w.primary},onMouseLeave:s=>{s.currentTarget.style.borderColor=w.inputBorder,s.currentTarget.style.color=w.white},children:"Play Store"})]})]})]},r.id)})})]}),f.jsx("style",{children:`
        @media (max-width: 900px) {
          .previous-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .previous-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `})]})},DM=()=>{const{content:t}=sr(),e=t||it,n=e==null?void 0:e.founders;return!n||n.length===0?null:f.jsxs("section",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg,borderTop:`1px solid ${w.inputBorder}`},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.md},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"The Team"})]}),f.jsx("h2",{style:{fontFamily:B.display,fontSize:"clamp(2rem, 5vw, 3.25rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,marginBottom:j.xl,lineHeight:"0.95"},children:"Our Founders"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:j.lg},className:"founders-grid",children:n.map((r,i)=>{var s,o,a,u,c;return f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:j.md,padding:j.xl,background:w.surface,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`,transition:"box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",textAlign:"center"},className:"founder-card",onMouseEnter:h=>{h.currentTarget.style.boxShadow="0 0 50px rgba(225, 6, 0, 0.2), 0 0 0 1px rgba(225, 6, 0, 0.15)"},onMouseLeave:h=>{h.currentTarget.style.boxShadow="none"},children:[f.jsx("div",{style:{position:"relative",width:"180px",height:"180px",flexShrink:0,borderRadius:"50%",overflow:"hidden",background:Zn.primary,border:`3px solid ${w.primary}`,boxShadow:"0 0 24px rgba(225, 6, 0, 0.3)"},children:f.jsx("img",{src:r.image||"https://via.placeholder.com/256/141414/cc0000?text="+(((s=r.name)==null?void 0:s[0])||"R"),alt:r.name,loading:"lazy",onError:h=>{var p;h.currentTarget.src="https://via.placeholder.com/256/141414/cc0000?text="+(((p=r.name)==null?void 0:p[0])||"R")},style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),f.jsxs("div",{style:{flex:1,minWidth:0,width:"100%"},children:[f.jsx("h3",{style:{fontFamily:B.display,fontSize:"1.3rem",color:w.white,margin:0,marginBottom:"0.25rem",letterSpacing:"1.5px",fontWeight:700,lineHeight:"1.1",textTransform:"uppercase"},children:r.name}),f.jsx("p",{style:{color:w.primary,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",margin:0,fontSize:"0.75rem",letterSpacing:"2px",marginBottom:j.sm},children:r.role}),r.description&&f.jsx("p",{style:{color:w.muted,lineHeight:1.6,fontSize:"0.85rem",margin:0,fontWeight:500},children:r.description}),f.jsxs("div",{style:{display:"flex",gap:j.sm,marginTop:j.md,justifyContent:"center"},children:[((o=r.socials)==null?void 0:o.youtube)&&f.jsx("a",{href:r.socials.youtube,style:{color:w.muted,transition:"color 0.35s ease"},onMouseEnter:h=>h.currentTarget.style.color=w.primary,onMouseLeave:h=>h.currentTarget.style.color=w.muted,children:f.jsx(pc,{size:16})}),((a=r.socials)==null?void 0:a.linkedin)&&f.jsx("a",{href:r.socials.linkedin,style:{color:w.muted,transition:"color 0.35s ease"},onMouseEnter:h=>h.currentTarget.style.color=w.primary,onMouseLeave:h=>h.currentTarget.style.color=w.muted,children:f.jsx(hc,{size:16})}),((u=r.socials)==null?void 0:u.instagram)&&f.jsx("a",{href:r.socials.instagram,style:{color:w.muted,transition:"color 0.35s ease"},onMouseEnter:h=>h.currentTarget.style.color=w.primary,onMouseLeave:h=>h.currentTarget.style.color=w.muted,children:f.jsx(fc,{size:16})}),((c=r.socials)==null?void 0:c.discord)&&f.jsx("a",{href:r.socials.discord,style:{color:w.muted,transition:"color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",display:"inline-flex"},onMouseEnter:h=>h.currentTarget.style.color=w.primary,onMouseLeave:h=>h.currentTarget.style.color=w.muted,children:f.jsx(Wc,{size:16})})]})]})]},i)})})]}),f.jsx("style",{children:`
        @media (max-width: 900px) {
          .founders-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .founders-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .founder-portrait {
            width: 96px !important;
            height: 96px !important;
          }
          .founder-card {
            padding: ${j.md} !important;
          }
        }
      `})]})},jM=()=>{const{content:t}=sr(),e=t||it,n=(e==null?void 0:e.contact)||it.contact,r=[{name:"Instagram",icon:fc,url:n.instagramUrl},{name:"LinkedIn",icon:hc,url:n.linkedinUrl},{name:"YouTube",icon:pc,url:n.youtubeUrl},{name:"Play Store",icon:Sn,url:n.playstoreUrl},{name:"Discord",icon:Wc,url:n.discordUrl}].filter(i=>i.url);return r.length===0?null:f.jsxs("section",{style:{padding:`${j.xl} ${j.lg}`,backgroundColor:w.bg,borderTop:`1px solid ${w.border}`},children:[f.jsx("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem",flexWrap:"wrap"},className:"social-follow-row",children:[f.jsx("span",{style:{display:"inline-flex",alignItems:"center",fontFamily:B.body,fontSize:"0.85rem",color:w.muted,textTransform:"uppercase",letterSpacing:"3px",fontWeight:600,lineHeight:1},children:"Follow"}),f.jsx("div",{style:{display:"flex",gap:"1.75rem",flexWrap:"wrap",alignItems:"center"},children:r.map((i,s)=>{const o=i.icon;return f.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"social-follow-link",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",color:w.secondary,fontFamily:B.body,fontWeight:600,fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"2px",textDecoration:"none",transition:"color 0.5s cubic-bezier(0.4, 0, 0.2, 1)",lineHeight:1},onMouseEnter:a=>a.currentTarget.style.color=w.primary,onMouseLeave:a=>a.currentTarget.style.color=w.secondary,children:[f.jsx(o,{size:16,style:{display:"block"}}),i.name]},s)})})]})}),f.jsx("style",{children:`
        @media (max-width: 600px) {
          .social-follow-row { gap: 0.75rem !important; }
          .social-follow-link { font-size: 0.8rem !important; }
        }
      `})]})},OM=()=>{const{content:t,loading:e}=sr(),n=t||it;if(e)return f.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:w.bg},children:f.jsx("div",{style:{textAlign:"center",color:w.secondary},children:"Loading..."})});const r=(n==null?void 0:n.visibility)||{};return f.jsxs("div",{style:{overflowX:"hidden",backgroundColor:w.bg},children:[r.hero!==!1&&f.jsx(kM,{content:n}),r.featuredGame!==!1&&f.jsx(PM,{content:n}),r.featuredGames!==!1&&f.jsx(RM,{content:n}),r.previousGames!==!1&&f.jsx(NM,{content:n}),r.founders!==!1&&f.jsx(DM,{content:n}),r.socialLinks!==!1&&f.jsx(jM,{content:n})]})},LM=()=>{const[t,e]=M.useState("All"),{games:n,loading:r,error:i}=Hc();if(r)return f.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:w.bg},children:f.jsx("div",{style:{fontFamily:B.body,color:w.muted,letterSpacing:"4px",textTransform:"uppercase",fontSize:"0.85rem",fontWeight:600},children:"Loading games..."})});if(i)return f.jsx("div",{style:{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",color:w.error},children:"Error loading games."});const s=t==="All"?n:n.filter(o=>o.status===t);return f.jsxs("div",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg,minHeight:"100vh"},children:[f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.md},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"Our Portfolio"})]}),f.jsx("h1",{style:{fontFamily:B.display,fontSize:"clamp(2.5rem, 6vw, 4rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,marginBottom:j.md,lineHeight:"0.95"},children:"Our Games"}),f.jsx("p",{style:{fontFamily:B.body,color:w.secondary,maxWidth:"600px",fontSize:"1.05rem",lineHeight:1.7,margin:0,marginBottom:j.xl,fontWeight:500},children:"Explore our collection of immersive worlds and unforgettable experiences."}),f.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:j.xl,flexWrap:"wrap"},children:["All","Released","Coming Soon"].map(o=>{const a=t===o;return f.jsx("button",{onClick:()=>e(o),style:{padding:"0.65rem 1.5rem",background:a?Zn.primary:"transparent",color:a?w.white:w.muted,border:"none",borderRadius:oe.pill,cursor:"pointer",fontFamily:B.body,fontWeight:700,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"2px",transition:"all 0.2s ease",boxShadow:a?"0 0 16px rgba(225, 6, 0, 0.4)":"none"},onMouseEnter:u=>{a||(u.currentTarget.style.color=w.white,u.currentTarget.style.background="rgba(225, 6, 0, 0.08)")},onMouseLeave:u=>{a||(u.currentTarget.style.color=w.muted,u.currentTarget.style.background="transparent")},children:o},o)})}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:j.lg},className:"games-grid",children:s.map(o=>{const a=Ym(o.trailerUrl);return f.jsxs("div",{style:{background:w.surface,borderRadius:oe.md,overflow:"hidden",border:`1px solid ${w.inputBorder}`,transition:"box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",flexDirection:"column"},onMouseEnter:u=>{u.currentTarget.style.boxShadow="0 0 50px rgba(225, 6, 0, 0.2), 0 0 0 1px rgba(225, 6, 0, 0.15)"},onMouseLeave:u=>{u.currentTarget.style.boxShadow="none"},children:[f.jsxs("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",overflow:"hidden",backgroundColor:w.bgElevated},children:[a?f.jsx("iframe",{src:`${a}?rel=0`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},title:o.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):o.thumbnailUrl?f.jsx("img",{src:o.thumbnailUrl,alt:o.title,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):f.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"0.5rem",color:w.muted},children:[f.jsx(Sn,{size:32,color:w.primary}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.75rem",letterSpacing:"2px",textTransform:"uppercase",fontWeight:600},children:"Coming Soon"})]}),f.jsx("div",{style:{position:"absolute",top:"0.75rem",left:"0.75rem",padding:"0.3rem 0.7rem",background:"rgba(10,10,10,0.85)",color:w.primary,fontFamily:B.body,fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",borderRadius:oe.sm},children:o.status})]}),f.jsxs("div",{style:{padding:j.md,display:"flex",flexDirection:"column",flex:1},children:[f.jsx("h3",{style:{fontFamily:B.display,fontSize:"1.3rem",color:w.white,margin:0,fontWeight:700,letterSpacing:"1.5px",marginBottom:"0.4rem",lineHeight:"1.1"},children:o.title}),f.jsxs("div",{style:{fontFamily:B.body,fontSize:"0.8rem",color:w.muted,textTransform:"uppercase",letterSpacing:"2px",fontWeight:600,marginBottom:j.sm},children:[o.genre," · ",o.platform]}),o.description&&f.jsx("p",{style:{fontFamily:B.body,fontSize:"0.9rem",color:w.secondary,lineHeight:1.5,margin:0,marginBottom:j.md,fontWeight:500,flex:1},children:o.description.length>120?o.description.substring(0,120)+"...":o.description}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[a&&f.jsxs("a",{href:a,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",padding:"0.6rem 1rem",background:Zn.primary,color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.7rem",borderRadius:oe.md,textDecoration:"none",transition:"all 0.2s ease",flex:1,justifyContent:"center"},onMouseEnter:u=>u.currentTarget.style.boxShadow="0 0 20px rgba(225, 6, 0, 0.4)",onMouseLeave:u=>u.currentTarget.style.boxShadow="none",children:[f.jsx(Sn,{size:12,fill:w.white}),"Watch Trailer"]}),o.playstoreUrl&&f.jsx("a",{href:o.playstoreUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.6rem 1rem",background:"transparent",color:w.white,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",letterSpacing:"2px",fontSize:"0.7rem",borderRadius:oe.md,border:`1px solid ${w.inputBorder}`,textDecoration:"none",transition:"all 0.2s ease",flex:1},onMouseEnter:u=>{u.currentTarget.style.borderColor=w.primary,u.currentTarget.style.color=w.primary},onMouseLeave:u=>{u.currentTarget.style.borderColor=w.inputBorder,u.currentTarget.style.color=w.white},children:"Play Store"})]})]})]},o.id)})}),s.length===0&&f.jsx("div",{style:{textAlign:"center",color:w.muted,marginTop:j.xl,fontFamily:B.body,letterSpacing:"2px",textTransform:"uppercase",fontSize:"0.85rem",fontWeight:600},children:"No games found for this category."})]}),f.jsx("style",{children:`
        @media (max-width: 768px) {
          .games-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `})]})},MM=()=>{var i,s,o;const{content:t}=sr(),e=t||it,n=(e==null?void 0:e.about)||it.about,r=e!=null&&e.founders&&e.founders.length>0?e.founders:[{name:"Srinu",role:"Founder & CEO",image:(i=e==null?void 0:e.teamImages)==null?void 0:i.srinu},{name:"Bobby",role:"Co-Founder & Lead Dev",image:(s=e==null?void 0:e.teamImages)==null?void 0:s.bobby},{name:"Badri",role:"Co-Founder & Art Director",image:(o=e==null?void 0:e.teamImages)==null?void 0:o.badri}];return f.jsxs("div",{style:{backgroundColor:w.bg,minHeight:"100vh"},children:[f.jsx("section",{style:{padding:`${j.xxxl} ${j.lg} ${j.xl}`,backgroundColor:w.bg},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.lg},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"Studio"})]}),f.jsx("h1",{style:{fontFamily:B.display,fontSize:"clamp(2.5rem, 7vw, 4.5rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,marginBottom:j.xl,lineHeight:"0.95"},children:"About Us"}),f.jsx("p",{style:{fontFamily:B.body,fontSize:"1.15rem",color:w.secondary,lineHeight:"1.7",margin:0,maxWidth:"780px",textAlign:"left",fontWeight:500},children:n.description})]})}),f.jsx("section",{style:{padding:`${j.xxl} ${j.lg}`,backgroundColor:w.bg,borderTop:`1px solid ${w.inputBorder}`},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.lg},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"The Team"})]}),f.jsx("h2",{style:{fontFamily:B.display,fontSize:"clamp(2rem, 5vw, 3.25rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,marginBottom:j.xl,lineHeight:"0.95"},children:"Our Founders"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:j.lg},className:"about-team-grid",children:r.map((a,u)=>{var p;const c=`https://via.placeholder.com/256/141414/cc0000?text=${encodeURIComponent(((p=a.name)==null?void 0:p[0])||"R")}`,h=a.image&&a.image.trim()?a.image:c;return f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:j.md,padding:j.xl,background:w.surface,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`,transition:"box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)",textAlign:"center"},className:"about-team-card",onMouseEnter:g=>{g.currentTarget.style.boxShadow="0 0 50px rgba(225, 6, 0, 0.2), 0 0 0 1px rgba(225, 6, 0, 0.15)"},onMouseLeave:g=>{g.currentTarget.style.boxShadow="none"},children:[f.jsx("div",{className:"about-portrait",style:{position:"relative",width:"128px",height:"128px",flexShrink:0,borderRadius:"50%",overflow:"hidden",background:Zn.primary,border:`3px solid ${w.primary}`,boxShadow:"0 0 24px rgba(225, 6, 0, 0.3)"},children:f.jsx("img",{src:h,alt:a.name,loading:"lazy",onError:g=>{g.currentTarget.src=c},style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),f.jsxs("div",{style:{flex:1,minWidth:0,width:"100%"},children:[f.jsx("h3",{style:{fontFamily:B.display,fontSize:"1.3rem",color:w.white,margin:0,marginBottom:"0.25rem",letterSpacing:"1.5px",fontWeight:700,lineHeight:"1.1",textTransform:"uppercase"},children:a.name}),f.jsx("p",{style:{color:w.primary,fontFamily:B.body,fontWeight:700,textTransform:"uppercase",margin:0,fontSize:"0.75rem",letterSpacing:"2px"},children:a.role})]})]},u)})})]})}),f.jsx("style",{children:`
        @media (max-width: 900px) {
          .about-team-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .about-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .about-portrait {
            width: 96px !important;
            height: 96px !important;
          }
          .about-team-card {
            padding: ${j.md} !important;
          }
        }
      `})]})},FM=()=>{const{content:t}=sr(),e=t||it,n=(e==null?void 0:e.contact)||it.contact,r=[{name:"Instagram",icon:fc,url:n.instagramUrl},{name:"LinkedIn",icon:hc,url:n.linkedinUrl},{name:"YouTube",icon:pc,url:n.youtubeUrl},{name:"Play Store",icon:Sn,url:n.playstoreUrl},{name:"Discord",icon:Wc,url:n.discordUrl}].filter(i=>i.url);return f.jsx("div",{style:{backgroundColor:w.bg,minHeight:"100vh"},children:f.jsx("section",{style:{padding:`${j.xxxl} ${j.lg}`,backgroundColor:w.bg,minHeight:"80vh"},children:f.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:j.lg},children:[f.jsx("span",{style:{display:"inline-block",width:"40px",height:"2px",background:w.primary}}),f.jsx("span",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.primary,fontWeight:700,letterSpacing:"4px",textTransform:"uppercase"},children:"Contact"})]}),f.jsx("h1",{style:{fontFamily:B.display,fontSize:"clamp(2.5rem, 7vw, 4.5rem)",color:w.white,fontWeight:700,textTransform:"uppercase",letterSpacing:"3px",margin:0,marginBottom:j.lg,lineHeight:"0.95"},children:"Get In Touch"}),f.jsx("p",{style:{fontFamily:B.body,fontSize:"1.1rem",color:w.secondary,lineHeight:"1.7",margin:0,marginBottom:j.xl,maxWidth:"640px",fontWeight:500},children:"Have questions or just want to say hi? Reach out to us through any of the following channels."}),n.email&&f.jsxs("div",{style:{paddingBottom:j.xl,marginBottom:j.xl,borderBottom:`1px solid ${w.border}`},children:[f.jsx("div",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.muted,textTransform:"uppercase",letterSpacing:"3px",fontWeight:600,marginBottom:"0.75rem"},children:"Email"}),f.jsx("a",{href:`mailto:${n.email}`,style:{fontFamily:B.display,fontSize:"clamp(1.75rem, 4vw, 2.5rem)",color:w.white,textDecoration:"none",letterSpacing:"1px",fontWeight:700,transition:"color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",display:"inline-block"},onMouseEnter:i=>i.currentTarget.style.color=w.primary,onMouseLeave:i=>i.currentTarget.style.color=w.white,children:n.email})]}),r.length>0&&f.jsxs("div",{children:[f.jsx("div",{style:{fontFamily:B.body,fontSize:"0.85rem",color:w.muted,textTransform:"uppercase",letterSpacing:"3px",fontWeight:600,marginBottom:j.md},children:"Follow"}),f.jsx("div",{style:{display:"flex",gap:j.xl,flexWrap:"wrap",alignItems:"center"},children:r.map((i,s)=>{const o=i.icon;return f.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",color:w.secondary,textDecoration:"none",fontFamily:B.body,fontSize:"1rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"2px",transition:"color 0.35s cubic-bezier(0.4, 0, 0.2, 1)"},onMouseEnter:a=>a.currentTarget.style.color=w.primary,onMouseLeave:a=>a.currentTarget.style.color=w.secondary,children:[f.jsx(o,{size:20}),i.name]},s)})})]})]})})})},VM=()=>{const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,s]=M.useState(""),o=cc(),a=async u=>{u.preventDefault(),s("");try{await uD(Mm,t,n),o("/admin")}catch{s("Invalid email or password")}};return f.jsx("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#0a0a0a",color:"#fff"},children:f.jsxs("form",{onSubmit:a,style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px",border:"1px solid #333",width:"100%",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"1rem"},children:[f.jsx("h2",{style:{textAlign:"center",textTransform:"uppercase",color:"#fff",marginBottom:"1rem"},children:"Admin Login"}),i&&f.jsx("p",{style:{color:"#ff0000",textAlign:"center"},children:i}),f.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:u=>e(u.target.value),style:{padding:"0.8rem",backgroundColor:"#0a0a0a",border:"1px solid #333",borderRadius:"4px",color:"#fff"},required:!0}),f.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value),style:{padding:"0.8rem",backgroundColor:"#0a0a0a",border:"1px solid #333",borderRadius:"4px",color:"#fff"},required:!0}),f.jsx("button",{type:"submit",style:{padding:"0.8rem",backgroundColor:"#cc0000",color:"#fff",border:"none",borderRadius:"4px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer"},children:"Login"})]})})},UM=()=>{const t=cc(),e=async()=>{await hD(Mm),t("/admin/login")},n=[{name:"Hero Editor",path:"/admin/hero",icon:f.jsx(Rk,{size:20})},{name:"Games Manager",path:"/admin/games",icon:f.jsx(kk,{size:20})},{name:"About Editor",path:"/admin/about",icon:f.jsx(Ck,{size:20})},{name:"Contact Editor",path:"/admin/contact",icon:f.jsx(M1,{size:20})},{name:"Site Settings",path:"/admin/settings",icon:f.jsx(Dk,{size:20})}];return f.jsxs("div",{style:{display:"flex",height:"100vh",backgroundColor:"#0a0a0a",color:"#fff"},children:[f.jsxs("div",{style:{width:"260px",backgroundColor:"#111",borderRight:"1px solid #333",display:"flex",flexDirection:"column",padding:"2rem 0"},children:[f.jsx("div",{style:{padding:"0 2rem",marginBottom:"2rem"},children:f.jsx("h2",{style:{fontSize:"1.2rem",color:"#cc0000",textTransform:"uppercase",fontWeight:"bold"},children:"Admin Panel"})}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0 1rem"},children:n.map(r=>f.jsxs($n,{to:r.path,style:{display:"flex",alignItems:"center",gap:"12px",padding:"0.8rem 1rem",color:"#ccc",textDecoration:"none",borderRadius:"4px",transition:"all 0.3s"},onMouseEnter:i=>i.currentTarget.style.backgroundColor="#222",onMouseLeave:i=>i.currentTarget.style.backgroundColor="transparent",children:[r.icon,f.jsx("span",{children:r.name})]},r.path))}),f.jsx("div",{style:{marginTop:"auto",padding:"0 1rem"},children:f.jsxs("button",{onClick:e,style:{width:"100%",display:"flex",alignItems:"center",gap:"12px",padding:"0.8rem 1rem",backgroundColor:"transparent",color:"#ff4444",border:"1px solid #442222",borderRadius:"4px",cursor:"pointer",fontWeight:"bold",textTransform:"uppercase",transition:"all 0.3s"},onMouseEnter:r=>r.currentTarget.style.backgroundColor="#221111",onMouseLeave:r=>r.currentTarget.style.backgroundColor="transparent",children:[f.jsx(Pk,{size:20}),"Logout"]})})]}),f.jsx("div",{style:{flex:1,overflowY:"auto",padding:"2rem"},children:f.jsx(ck,{})})]})},zM=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);return M.useEffect(()=>{const s=fD(Mm,o=>{n(o),i(!1)});return()=>s()},[]),r?f.jsx("div",{style:{textAlign:"center",padding:"5rem",color:"#fff"},children:"Loading..."}):e?t:f.jsx(uk,{to:"/admin/login"})},$M=()=>{const[t,e]=M.useState({headline:"",subheadline:"",backgroundImageUrl:"",videoBackgroundUrl:""}),[n,r]=M.useState(!0),[i,s]=M.useState(!1);M.useEffect(()=>{(async()=>{const u=$t(tt,"content","main"),c=await Nc(u);c.exists()&&e(c.data().hero||{}),r(!1)})()},[]);const o=async a=>{a.preventDefault(),s(!0);try{const u=$t(tt,"content","main");await Na(u,{hero:t}),alert("Hero section updated successfully!")}catch(u){console.error(u),alert("Error updating hero section")}s(!1)};return n?f.jsx("div",{style:{color:w.white},children:"Loading..."}):f.jsxs("div",{children:[f.jsx("h2",{style:{color:w.white,marginBottom:j.md,textTransform:"uppercase"},children:"Hero Section Editor"}),f.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:j.md,maxWidth:600},children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Hero Headline"}),f.jsx("input",{type:"text",value:t.headline||"",onChange:a=>e({...t,headline:a.target.value}),style:ve,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Hero Subheadline"}),f.jsx("textarea",{value:t.subheadline||"",onChange:a=>e({...t,subheadline:a.target.value}),style:{...ve,minHeight:"100px"},required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Hero Background Image URL"}),f.jsx("input",{type:"text",value:t.backgroundImageUrl||"",onChange:a=>e({...t,backgroundImageUrl:a.target.value}),style:ve}),f.jsx("span",{style:{fontSize:"0.75rem",color:w.muted,marginTop:"0.4rem"},children:"Used if no video is provided"})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Hero Background Video URL (YouTube — optional)"}),f.jsx("input",{type:"text",value:t.videoBackgroundUrl||"",onChange:a=>e({...t,videoBackgroundUrl:a.target.value}),style:ve,placeholder:"https://www.youtube.com/watch?v=..."}),f.jsx("span",{style:{fontSize:"0.75rem",color:w.muted,marginTop:"0.4rem"},children:"Paste a YouTube link. If set, this will be used instead of the image."})]}),f.jsx("button",{type:"submit",disabled:i,style:Fc,children:i?"Saving...":"Save Changes"})]})]})},BM=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,s]=M.useState(null),[o,a]=M.useState({title:"",description:"",genre:"",platform:"",thumbnailUrl:"",trailerUrl:"",playstoreUrl:"",status:"Released",order:0,featured:!1,tags:"",modes:""}),u=async()=>{r(!0);const g=fE(Mu(tt,"games"),hE("order","asc")),C=(await dN(g)).docs.map(k=>({id:k.id,...k.data()}));e(C),r(!1)};M.useEffect(()=>{u()},[]);const c=async g=>{g.preventDefault();try{await vE(Mu(tt,"games"),o),a({title:"",description:"",genre:"",platform:"",thumbnailUrl:"",trailerUrl:"",playstoreUrl:"",status:"Released",order:0,featured:!1,tags:"",modes:""}),await u()}catch{alert("Error adding game")}},h=async g=>{g.preventDefault();try{const _=$t(tt,"games",i.id),{id:C,...k}=i;await Na(_,k),s(null),await u()}catch{alert("Error updating game")}},p=async g=>{if(window.confirm("Are you sure?"))try{await hN($t(tt,"games",g)),await u()}catch{alert("Error deleting game")}};return n?f.jsx("div",{style:{color:"#fff"},children:"Loading..."}):f.jsxs("div",{children:[f.jsx("h2",{style:{color:"#fff",marginBottom:"2rem",textTransform:"uppercase"},children:"Games Manager"}),f.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"1.5rem",borderRadius:"8px",border:"1px solid #333",marginBottom:"3rem"},children:[f.jsx("h3",{style:{color:"#fff",marginBottom:"1.5rem"},children:"Add New Game"}),f.jsxs("form",{onSubmit:c,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem"},children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Game Title"}),f.jsx("input",{placeholder:"Enter title",value:o.title,onChange:g=>a({...o,title:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Genre"}),f.jsx("input",{placeholder:"e.g. Action, RPG",value:o.genre,onChange:g=>a({...o,genre:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Platform"}),f.jsx("input",{placeholder:"e.g. Android, PC",value:o.platform,onChange:g=>a({...o,platform:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Thumbnail URL"}),f.jsx("input",{placeholder:"https://...",value:o.thumbnailUrl,onChange:g=>a({...o,thumbnailUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Trailer URL (YouTube)"}),f.jsx("input",{placeholder:"https://youtube.com/...",value:o.trailerUrl,onChange:g=>a({...o,trailerUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Play Store URL"}),f.jsx("input",{placeholder:"https://play.google.com/...",value:o.playstoreUrl,onChange:g=>a({...o,playstoreUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Display Order"}),f.jsx("input",{type:"number",value:o.order,onChange:g=>a({...o,order:parseInt(g.target.value)}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Status"}),f.jsxs("select",{value:o.status,onChange:g=>a({...o,status:g.target.value}),style:je,children:[f.jsx("option",{value:"Released",children:"Released"}),f.jsx("option",{value:"Coming Soon",children:"Coming Soon"})]})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Tags (comma separated)"}),f.jsx("input",{placeholder:"Unity, 3 Modes, In Development",value:o.tags,onChange:g=>a({...o,tags:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Modes (Format: Name|Desc, Name|Desc)"}),f.jsx("input",{placeholder:"Last Stand|Survive waves, Challenge|Eliminate 50",value:o.modes,onChange:g=>a({...o,modes:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"},children:[f.jsx("input",{type:"checkbox",id:"featured_new",checked:o.featured,onChange:g=>a({...o,featured:g.target.checked}),style:{width:"20px",height:"20px",accentColor:"#cc0000"}}),f.jsx("label",{htmlFor:"featured_new",style:{color:"#fff",fontWeight:"bold",textTransform:"uppercase"},children:"Featured Game"})]}),f.jsxs("div",{style:{gridColumn:"span 2",display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Game Description"}),f.jsx("textarea",{placeholder:"Describe the game...",value:o.description,onChange:g=>a({...o,description:g.target.value}),style:{...je,minHeight:"80px"},required:!0})]}),f.jsx("button",{type:"submit",style:WM,children:"Add Game"})]})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.map(g=>f.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"1rem",borderRadius:"8px",border:"1px solid #333",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[f.jsx("div",{style:{width:"40px",height:"40px",backgroundColor:"#222",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"#ccc",fontWeight:"bold"},children:g.order}),f.jsxs("div",{children:[f.jsx("span",{style:{color:"#fff",fontWeight:"bold",fontSize:"1.1rem"},children:g.title}),g.featured&&f.jsx("span",{style:{marginLeft:"10px",backgroundColor:"#cc0000",color:"#fff",fontSize:"0.7rem",padding:"2px 6px",borderRadius:"4px",textTransform:"uppercase"},children:"Featured"})]})]}),f.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[f.jsx("button",{onClick:()=>s(g),style:{padding:"0.4rem 0.8rem",backgroundColor:"#444",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Edit"}),f.jsx("button",{onClick:()=>p(g.id),style:{padding:"0.4rem 0.8rem",backgroundColor:"#cc0000",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Delete"})]})]},g.id))}),i&&f.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2e3},children:f.jsxs("form",{onSubmit:h,style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px",border:"1px solid #cc0000",width:"90%",maxWidth:"700px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem"},children:[f.jsxs("h3",{style:{color:"#fff",gridColumn:"span 2",textTransform:"uppercase",marginBottom:"1rem"},children:["Edit Game: ",i.title]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Game Title"}),f.jsx("input",{value:i.title,onChange:g=>s({...i,title:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Genre"}),f.jsx("input",{value:i.genre,onChange:g=>s({...i,genre:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Platform"}),f.jsx("input",{value:i.platform,onChange:g=>s({...i,platform:g.target.value}),style:je,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Thumbnail URL"}),f.jsx("input",{value:i.thumbnailUrl,onChange:g=>s({...i,thumbnailUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Trailer URL"}),f.jsx("input",{value:i.trailerUrl,onChange:g=>s({...i,trailerUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Play Store URL"}),f.jsx("input",{value:i.playstoreUrl,onChange:g=>s({...i,playstoreUrl:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Display Order"}),f.jsx("input",{type:"number",value:i.order,onChange:g=>s({...i,order:parseInt(g.target.value)}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Status"}),f.jsxs("select",{value:i.status,onChange:g=>s({...i,status:g.target.value}),style:je,children:[f.jsx("option",{value:"Released",children:"Released"}),f.jsx("option",{value:"Coming Soon",children:"Coming Soon"})]})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Tags (comma separated)"}),f.jsx("input",{value:i.tags,onChange:g=>s({...i,tags:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Modes (Name|Desc, ...)"}),f.jsx("input",{value:i.modes,onChange:g=>s({...i,modes:g.target.value}),style:je})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"},children:[f.jsx("input",{type:"checkbox",id:"featured_edit",checked:i.featured||!1,onChange:g=>s({...i,featured:g.target.checked}),style:{width:"20px",height:"20px",accentColor:"#cc0000"}}),f.jsx("label",{htmlFor:"featured_edit",style:{color:"#fff",fontWeight:"bold",textTransform:"uppercase"},children:"Featured Game"})]}),f.jsxs("div",{style:{gridColumn:"span 2",display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:De,children:"Game Description"}),f.jsx("textarea",{value:i.description,onChange:g=>s({...i,description:g.target.value}),style:{...je,minHeight:"80px"},required:!0})]}),f.jsxs("div",{style:{gridColumn:"span 2",display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[f.jsx("button",{type:"button",onClick:()=>s(null),style:{padding:"0.8rem 1.5rem",backgroundColor:"#444",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Cancel"}),f.jsx("button",{type:"submit",style:{padding:"0.8rem 1.5rem",backgroundColor:"#cc0000",color:"#fff",border:"none",borderRadius:"4px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer"},children:"Save Changes"})]})]})})]})},De={display:"block",color:"#aaa",marginBottom:"0.5rem",fontSize:"0.9rem",fontWeight:"500"},je={padding:"0.8rem",backgroundColor:"#0a0a0a",border:"1px solid #333",borderRadius:"4px",color:"#fff"},WM={padding:"0.8rem",backgroundColor:"#cc0000",color:"#fff",border:"none",borderRadius:"4px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer"},HM=()=>{const[t,e]=M.useState({description:"",values:[]}),[n,r]=M.useState({srinu:"",bobby:"",badri:""}),[i,s]=M.useState([]),[o,a]=M.useState(!0),[u,c]=M.useState(!1);M.useEffect(()=>{(async()=>{const R=$t(tt,"content","main"),E=await Nc(R);if(E.exists()){const x=E.data();e(x.about||{}),r(x.teamImages||{}),s(x.founders||[])}a(!1)})()},[]);const h=async k=>{k.preventDefault(),c(!0);try{const R=$t(tt,"content","main");await Na(R,{about:t,teamImages:n,founders:i}),alert("About section updated successfully!")}catch(R){console.error(R),alert("Error updating about section")}c(!1)},p=()=>{s([...i,{name:"",role:"",description:"",image:"",socials:{youtube:"",linkedin:"",instagram:""}}])},g=(k,R,E)=>{const x=[...i];x[k]={...x[k],[R]:E},s(x)},_=(k,R,E)=>{const x=[...i];x[k].socials={...x[k].socials,[R]:E},s(x)},C=k=>{s(i.filter((R,E)=>E!==k))};return o?f.jsx("div",{style:{color:w.white},children:"Loading..."}):f.jsxs("div",{children:[f.jsx("h2",{style:{color:w.white,marginBottom:j.md,textTransform:"uppercase"},children:"About & Team Editor"}),f.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:j.lg},children:[f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"Studio Description"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Main About Text"}),f.jsx("textarea",{value:t.description||"",onChange:k=>e({...t,description:k.target.value}),style:{...ve,minHeight:"150px"},required:!0})]})]}),f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"Team Member Images"}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:j.sm},children:["srinu","bobby","badri"].map(k=>f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsxs("label",{style:{..._e,textTransform:"capitalize"},children:[k," Profile URL"]}),f.jsx("input",{type:"text",value:n[k]||"",onChange:R=>r({...n,[k]:R.target.value}),style:ve})]},k))})]}),f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:j.sm},children:[f.jsx("h3",{style:{color:w.white},children:"Founders List"}),f.jsx("button",{type:"button",onClick:p,style:{padding:"0.5rem 1rem",backgroundColor:w.primary,color:w.white,border:"none",borderRadius:oe.md,cursor:"pointer"},children:"Add Founder"})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:j.sm},children:i.map((k,R)=>f.jsxs("div",{style:{padding:j.sm,backgroundColor:w.bg,border:`1px solid ${w.inputBorder}`,borderRadius:oe.md,position:"relative"},children:[f.jsx("button",{type:"button",onClick:()=>C(R),style:{position:"absolute",top:j.xs,right:j.sm,background:"none",border:"none",color:w.error,cursor:"pointer"},children:"Remove"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:j.sm},children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Founder Name"}),f.jsx("input",{placeholder:"Name",value:k.name,onChange:E=>g(R,"name",E.target.value),style:ve,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Founder Role"}),f.jsx("input",{placeholder:"Role",value:k.role,onChange:E=>g(R,"role",E.target.value),style:ve,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Image URL"}),f.jsx("input",{placeholder:"URL",value:k.image,onChange:E=>g(R,"image",E.target.value),style:ve})]}),f.jsxs("div",{style:{gridColumn:"span 2",display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Founder Description"}),f.jsx("textarea",{placeholder:"Description",value:k.description,onChange:E=>g(R,"description",E.target.value),style:{...ve,minHeight:"60px"},required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"YouTube URL"}),f.jsx("input",{placeholder:"URL",value:k.socials.youtube,onChange:E=>_(R,"youtube",E.target.value),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"LinkedIn URL"}),f.jsx("input",{placeholder:"URL",value:k.socials.linkedin,onChange:E=>_(R,"linkedin",E.target.value),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Instagram URL"}),f.jsx("input",{placeholder:"URL",value:k.socials.instagram,onChange:E=>_(R,"instagram",E.target.value),style:ve})]})]})]},R))})]}),f.jsx("button",{type:"submit",disabled:u,style:Fc,children:u?"Saving...":"Save All Changes"})]})]})},qM=()=>{const[t,e]=M.useState({email:"",discordUrl:"",instagramUrl:"",linkedinUrl:"",youtubeUrl:"",playstoreUrl:""}),[n,r]=M.useState(!0),[i,s]=M.useState(!1);M.useEffect(()=>{(async()=>{const u=$t(tt,"content","main"),c=await Nc(u);c.exists()&&e(c.data().contact||{}),r(!1)})()},[]);const o=async a=>{a.preventDefault(),s(!0);try{const u=$t(tt,"content","main");await Na(u,{contact:t}),alert("Contact info updated successfully!")}catch(u){console.error(u),alert("Error updating contact info")}s(!1)};return n?f.jsx("div",{style:{color:w.white},children:"Loading..."}):f.jsxs("div",{children:[f.jsx("h2",{style:{color:w.white,marginBottom:j.md,textTransform:"uppercase"},children:"Contact Info Editor"}),f.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:j.md,maxWidth:600},children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Contact Email Address"}),f.jsx("input",{type:"email",value:t.email||"",onChange:a=>e({...t,email:a.target.value}),style:ve,required:!0})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Discord URL"}),f.jsx("input",{type:"text",value:t.discordUrl||"",onChange:a=>e({...t,discordUrl:a.target.value}),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Instagram URL"}),f.jsx("input",{type:"text",value:t.instagramUrl||"",onChange:a=>e({...t,instagramUrl:a.target.value}),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"LinkedIn URL"}),f.jsx("input",{type:"text",value:t.linkedinUrl||"",onChange:a=>e({...t,linkedinUrl:a.target.value}),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"YouTube URL"}),f.jsx("input",{type:"text",value:t.youtubeUrl||"",onChange:a=>e({...t,youtubeUrl:a.target.value}),style:ve})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Play Store URL"}),f.jsx("input",{type:"text",value:t.playstoreUrl||"",onChange:a=>e({...t,playstoreUrl:a.target.value}),style:ve})]}),f.jsx("button",{type:"submit",disabled:i,style:Fc,children:i?"Saving...":"Save Changes"})]})]})},d_={display:"Barlow Condensed",body:"Rajdhani",displayWeight:700,bodyWeight:500},f_={display:["Barlow Condensed","Bebas Neue","Anton","Oswald","Russo One","Teko","Black Ops One","Saira Condensed","Bowlby One","Bungee"],body:["Rajdhani","Inter","Roboto","Open Sans","Montserrat","Poppins","Lato","Nunito","Work Sans","Saira"]},GM=()=>{const[t,e]=M.useState({studioName:"Redundant Studios",logoUrl:"",navbarLabels:[{name:"Home",path:"/"},{name:"Games",path:"/games"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],font:{...d_},visibility:{hero:!0,featuredGames:!0,founders:!0,socialLinks:!0}}),[n,r]=M.useState(!0),[i,s]=M.useState(!1);M.useEffect(()=>{(async()=>{const p=$t(tt,"content","main"),g=await Nc(p);if(g.exists()){const _=g.data();e({studioName:_.studioName||"Redundant Studios",logoUrl:_.logoUrl||"",navbarLabels:_.navbarLabels||[{name:"Home",path:"/"},{name:"Games",path:"/games"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],font:_.font||{...d_},visibility:_.visibility||{hero:!0,featuredGames:!0,founders:!0,socialLinks:!0}})}r(!1)})()},[]);const o=async h=>{h.preventDefault(),s(!0);try{const p=$t(tt,"content","main");await Na(p,t),alert("Site settings updated successfully!")}catch(p){console.error(p),alert("Error updating site settings")}s(!1)},a=(h,p,g)=>{const _=[...t.navbarLabels];_[h]={..._[h],[p]:g},e({...t,navbarLabels:_})},u=(h,p)=>{e({...t,font:{...t.font,[h]:p}})},c=h=>{e({...t,visibility:{...t.visibility,[h]:!t.visibility[h]}})};return n?f.jsx("div",{style:{color:w.white},children:"Loading..."}):f.jsxs("div",{children:[f.jsx("h2",{style:{color:w.white,marginBottom:j.md,textTransform:"uppercase"},children:"Site Settings"}),f.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:j.lg},children:[f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"General Studio Info"}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:j.md},children:[f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Studio Name"}),f.jsx("input",{type:"text",value:t.studioName,onChange:h=>e({...t,studioName:h.target.value}),style:ve,required:!0})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:j.sm},children:[f.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[f.jsx("label",{style:_e,children:"Logo Image URL (used in Navbar, Footer, and Favicon)"}),f.jsx("input",{type:"text",value:t.logoUrl,onChange:h=>e({...t,logoUrl:h.target.value}),style:ve,placeholder:"https://..."})]}),f.jsx("div",{style:{width:"60px",height:"60px",border:`1px solid ${w.inputBorder}`,borderRadius:oe.md,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:w.bg},children:t.logoUrl?f.jsx("img",{src:t.logoUrl,alt:"Preview",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}}):f.jsx("div",{style:{width:"20px",height:"20px",backgroundColor:w.primary}})})]})]})]}),f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"Typography"}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:j.md},children:[f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Display Font (headings)"}),f.jsx("select",{value:t.font.display,onChange:h=>u("display",h.target.value),style:{...ve,cursor:"pointer"},children:f_.display.map(h=>f.jsx("option",{value:h,style:{fontFamily:h},children:h},h))})]}),f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Body Font (paragraphs)"}),f.jsx("select",{value:t.font.body,onChange:h=>u("body",h.target.value),style:{...ve,cursor:"pointer"},children:f_.body.map(h=>f.jsx("option",{value:h,style:{fontFamily:h},children:h},h))})]}),f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Display Weight"}),f.jsx("select",{value:t.font.displayWeight,onChange:h=>u("displayWeight",parseInt(h.target.value)),style:{...ve,cursor:"pointer"},children:[400,500,600,700,800].map(h=>f.jsx("option",{value:h,children:h},h))})]}),f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Body Weight"}),f.jsx("select",{value:t.font.bodyWeight,onChange:h=>u("bodyWeight",parseInt(h.target.value)),style:{...ve,cursor:"pointer"},children:[400,500,600,700].map(h=>f.jsx("option",{value:h,children:h},h))})]})]}),f.jsxs("div",{style:{marginTop:j.md,padding:j.sm,backgroundColor:w.bg,borderRadius:oe.sm,border:`1px solid ${w.inputBorder}`},children:[f.jsx("div",{style:{fontSize:"0.7rem",color:w.muted,textTransform:"uppercase",letterSpacing:"2px",marginBottom:"0.5rem"},children:"Preview"}),f.jsxs("div",{style:{fontFamily:t.font.display,fontWeight:t.font.displayWeight,fontSize:"1.5rem",color:w.white,textTransform:"uppercase",letterSpacing:"2px",marginBottom:"0.4rem"},children:[t.font.display," Heading"]}),f.jsx("div",{style:{fontFamily:t.font.body,fontWeight:t.font.bodyWeight,color:w.secondary,fontSize:"0.95rem"},children:"The quick brown fox jumps over the lazy dog. 1234567890"})]})]}),f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"Navbar Labels"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:j.md},children:t.navbarLabels.map((h,p)=>f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:j.sm,padding:j.md,backgroundColor:w.bg,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Link Label"}),f.jsx("input",{type:"text",value:h.name,onChange:g=>a(p,"name",g.target.value),style:ve,required:!0})]}),f.jsxs("div",{children:[f.jsx("label",{style:_e,children:"Route Path"}),f.jsx("input",{type:"text",value:h.path,onChange:g=>a(p,"path",g.target.value),style:ve,required:!0})]})]},p))})]}),f.jsxs("div",{style:{backgroundColor:w.inputBg,padding:j.md,borderRadius:oe.md,border:`1px solid ${w.inputBorder}`},children:[f.jsx("h3",{style:{color:w.white,marginBottom:j.sm,textTransform:"uppercase"},children:"Section Visibility (Home Page)"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:j.sm},children:Object.keys(t.visibility).map(h=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:j.sm,color:w.secondary,textTransform:"capitalize"},children:[f.jsx("input",{type:"checkbox",checked:t.visibility[h],onChange:()=>c(h),style:{width:"20px",height:"20px",accentColor:w.primary}}),f.jsx("span",{style:{fontSize:"1.1rem"},children:h.replace(/([A-Z])/g," $1")})]},h))})]}),f.jsx("button",{type:"submit",disabled:i,style:Fc,children:i?"Saving...":"Save Settings"})]})]})},KM=async()=>{try{return await fN($t(tt,"content","main"),{studioName:"Redundant Studios",hero:{headline:"Redundant Studios",subheadline:"Crafting immersive experiences and pushing the boundaries of game development.",backgroundImageUrl:"https://via.placeholder.com/1920x1080"},about:{description:"Redundant Studios is a passionate team of developers and artists dedicated to creating high-quality, engaging games. We believe in pushing technical boundaries and delivering unique experiences that resonate with players worldwide.",values:[{title:"Innovation",description:"Constantly exploring new ways to enhance gameplay and graphics."},{title:"Quality",description:"Ensuring every detail is polished to perfection."},{title:"Passion",description:"Creating games that we truly love to play."}]},contact:{email:"contact@redundantstudios.com",discordUrl:"#",instagramUrl:"#",linkedinUrl:"#",youtubeUrl:"#",playstoreUrl:"#"},navbarLabels:[{name:"Home",path:"/"},{name:"Games",path:"/games"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}],visibility:{hero:!0,featuredGames:!0,founders:!0,socialLinks:!0},founders:[{name:"Srinu",role:"Founder & CEO",description:"Visionary leader with a passion for creating cutting-edge gaming experiences.",image:"https://via.placeholder.com/200",socials:{youtube:"#",linkedin:"#",instagram:"#"}},{name:"Bobby",role:"Co-Founder & Lead Dev",description:"Technical wizard driving the engine and gameplay mechanics of our titles.",image:"https://via.placeholder.com/200",socials:{youtube:"#",linkedin:"#",instagram:"#"}},{name:"Badri",role:"Co-Founder & Art Director",description:"Creative force shaping the visual identity and atmosphere of our games.",image:"https://via.placeholder.com/200",socials:{youtube:"#",linkedin:"#",instagram:"#"}}],teamImages:{srinu:"https://via.placeholder.com/150",bobby:"https://via.placeholder.com/150",badri:"https://via.placeholder.com/150"}}),await vE(Mu(tt,"games"),{title:"DeadZone",genre:"Top-down Shooter",platform:"Android",description:"A 2D top-down zombie shooter — survive waves of the undead.",status:"Released",thumbnailUrl:"https://via.placeholder.com/400x225",playstoreUrl:"#",order:0}),{success:!0}}catch(t){return console.error("Seeding error:",t),{success:!1,error:t}}},QM=()=>{const[t,e]=M.useState("idle"),n=async()=>{e("loading"),(await KM()).success?e("success"):e("error")};return f.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#0a0a0a",color:"#fff",textAlign:"center",padding:"20px"},children:[f.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"1rem",textTransform:"uppercase"},children:"Database Seeding"}),f.jsx("p",{style:{color:"#ccc",marginBottom:"2rem",maxWidth:"600px"},children:"This page will populate your Firestore database with the default studio content and the first game (DeadZone)."}),t==="idle"&&f.jsx("button",{onClick:n,style:{padding:"1rem 2rem",backgroundColor:"#cc0000",color:"#fff",border:"none",borderRadius:"4px",fontWeight:"bold",textTransform:"uppercase",cursor:"pointer",fontSize:"1.1rem"},children:"Initialize Site Data"}),t==="loading"&&f.jsx("p",{children:"Seeding data, please wait..."}),t==="success"&&f.jsxs("div",{style:{color:"#00ff00",fontWeight:"bold"},children:[f.jsx("p",{children:"✅ Data seeded successfully!"}),f.jsxs("p",{style:{marginTop:"1rem",color:"#ccc"},children:["You can now go back to the ",f.jsx("a",{href:"/",style:{color:"#fff",textDecoration:"underline"},children:"Home Page"})]})]}),t==="error"&&f.jsxs("div",{style:{color:"#ff4444",fontWeight:"bold"},children:[f.jsx("p",{children:"❌ An error occurred while seeding data."}),f.jsx("p",{style:{marginTop:"1rem",color:"#ccc"},children:"Please check your Firestore rules and try again."})]})]})};function YM(){const{content:t}=sr(),e=(t==null?void 0:t.studioName)||it.studioName||"Redundant Studios",n=(t==null?void 0:t.logoUrl)||"",r=(t==null?void 0:t.font)||it.font;return M.useEffect(()=>{document.title=e;let i=document.querySelector("link[rel='icon']");i||(i=document.createElement("link"),i.rel="icon",document.head.appendChild(i)),i.type=n?"image/png":"image/svg+xml",i.href=n||"/favicon.svg"},[e,n]),M.useEffect(()=>{const i=(r==null?void 0:r.display)||"Barlow Condensed",s=(r==null?void 0:r.body)||"Rajdhani",o=(r==null?void 0:r.displayWeight)||700,a=(r==null?void 0:r.bodyWeight)||500,u=(g,_)=>`family=${g.replace(/ /g,"+")}:wght@${_}`,c="400;500;600;700;800",h=`https://fonts.googleapis.com/css2?${u(i,c)}&${u(s,c)}&display=swap`;let p=document.querySelector("link[data-dynamic-fonts]");p||(p=document.createElement("link"),p.rel="stylesheet",p.setAttribute("data-dynamic-fonts","true"),document.head.appendChild(p)),p.href=h,document.documentElement.style.setProperty("--font-display",`'${i}', sans-serif`),document.documentElement.style.setProperty("--font-body",`'${s}', sans-serif`),document.documentElement.style.setProperty("--font-display-weight",o),document.documentElement.style.setProperty("--font-body-weight",a)},[r==null?void 0:r.display,r==null?void 0:r.body,r==null?void 0:r.displayWeight,r==null?void 0:r.bodyWeight]),f.jsxs(_k,{children:[f.jsx(Tk,{}),f.jsx(bk,{}),f.jsx("div",{style:{backgroundColor:"#0a0a0a",minHeight:"100vh",display:"flex",flexDirection:"column"},children:f.jsxs(fk,{children:[f.jsx(Lt,{path:"/",element:f.jsxs(f.Fragment,{children:[f.jsx(Sl,{}),f.jsx(OM,{}),f.jsx(Rl,{})]})}),f.jsx(Lt,{path:"/games",element:f.jsxs(f.Fragment,{children:[f.jsx(Sl,{}),f.jsx(LM,{}),f.jsx(Rl,{})]})}),f.jsx(Lt,{path:"/about",element:f.jsxs(f.Fragment,{children:[f.jsx(Sl,{}),f.jsx(MM,{}),f.jsx(Rl,{})]})}),f.jsx(Lt,{path:"/contact",element:f.jsxs(f.Fragment,{children:[f.jsx(Sl,{}),f.jsx(FM,{}),f.jsx(Rl,{})]})}),f.jsx(Lt,{path:"/seed",element:f.jsx(QM,{})}),f.jsx(Lt,{path:"/admin/login",element:f.jsx(VM,{})}),f.jsxs(Lt,{path:"/admin",element:f.jsx(zM,{children:f.jsx(UM,{})}),children:[f.jsx(Lt,{path:"hero",element:f.jsx($M,{})}),f.jsx(Lt,{path:"games",element:f.jsx(BM,{})}),f.jsx(Lt,{path:"about",element:f.jsx(HM,{})}),f.jsx(Lt,{path:"contact",element:f.jsx(qM,{})}),f.jsx(Lt,{path:"settings",element:f.jsx(GM,{})})]})]})})]})}sf.createRoot(document.getElementById("root")).render(f.jsx(va.StrictMode,{children:f.jsx(YM,{})}));
