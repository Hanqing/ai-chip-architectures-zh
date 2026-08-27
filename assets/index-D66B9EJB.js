function G0(o,r){for(var c=0;c<r.length;c++){const l=r[c];if(typeof l!="string"&&!Array.isArray(l)){for(const d in l)if(d!=="default"&&!(d in o)){const h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(o,d,h.get?h:{enumerable:!0,get:()=>l[d]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function c(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(d){if(d.ep)return;d.ep=!0;const h=c(d);fetch(d.href,h)}})();function mm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vc={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function H0(){if(wp)return Ho;wp=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(l,d,h){var f=null;if(h!==void 0&&(f=""+h),d.key!==void 0&&(f=""+d.key),"key"in d){h={};for(var v in d)v!=="key"&&(h[v]=d[v])}else h=d;return d=h.ref,{$$typeof:o,type:l,key:f,ref:d!==void 0?d:null,props:h}}return Ho.Fragment=r,Ho.jsx=c,Ho.jsxs=c,Ho}var Ap;function F0(){return Ap||(Ap=1,Vc.exports=H0()),Vc.exports}var w=F0(),zc={exports:{}},Fo={},_c={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function V0(){return Tp||(Tp=1,(function(o){function r(C,F){var k=C.length;C.push(F);e:for(;0<k;){var oe=k-1>>>1,le=C[oe];if(0<d(le,F))C[oe]=F,C[k]=le,k=oe;else break e}}function c(C){return C.length===0?null:C[0]}function l(C){if(C.length===0)return null;var F=C[0],k=C.pop();if(k!==F){C[0]=k;e:for(var oe=0,le=C.length,T=le>>>1;oe<T;){var G=2*(oe+1)-1,R=C[G],X=G+1,J=C[X];if(0>d(R,k))X<le&&0>d(J,R)?(C[oe]=J,C[X]=k,oe=X):(C[oe]=R,C[G]=k,oe=G);else if(X<le&&0>d(J,k))C[oe]=J,C[X]=k,oe=X;else break e}}return F}function d(C,F){var k=C.sortIndex-F.sortIndex;return k!==0?k:C.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var f=Date,v=f.now();o.unstable_now=function(){return f.now()-v}}var y=[],m=[],b=1,p=null,x=3,M=!1,D=!1,E=!1,H=!1,_=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function Q(C){for(var F=c(m);F!==null;){if(F.callback===null)l(m);else if(F.startTime<=C)l(m),F.sortIndex=F.expirationTime,r(y,F);else break;F=c(m)}}function $(C){if(E=!1,Q(C),!D)if(c(y)!==null)D=!0,ie||(ie=!0,me());else{var F=c(m);F!==null&&Ae($,F.startTime-C)}}var ie=!1,j=-1,q=5,fe=-1;function Te(){return H?!0:!(o.unstable_now()-fe<q)}function De(){if(H=!1,ie){var C=o.unstable_now();fe=C;var F=!0;try{e:{D=!1,E&&(E=!1,K(j),j=-1),M=!0;var k=x;try{t:{for(Q(C),p=c(y);p!==null&&!(p.expirationTime>C&&Te());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,x=p.priorityLevel;var le=oe(p.expirationTime<=C);if(C=o.unstable_now(),typeof le=="function"){p.callback=le,Q(C),F=!0;break t}p===c(y)&&l(y),Q(C)}else l(y);p=c(y)}if(p!==null)F=!0;else{var T=c(m);T!==null&&Ae($,T.startTime-C),F=!1}}break e}finally{p=null,x=k,M=!1}F=void 0}}finally{F?me():ie=!1}}}var me;if(typeof Y=="function")me=function(){Y(De)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ve=ge.port2;ge.port1.onmessage=De,me=function(){ve.postMessage(null)}}else me=function(){_(De,0)};function Ae(C,F){j=_(function(){C(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(C){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var k=x;x=F;try{return C()}finally{x=k}},o.unstable_requestPaint=function(){H=!0},o.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var k=x;x=C;try{return F()}finally{x=k}},o.unstable_scheduleCallback=function(C,F,k){var oe=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?oe+k:oe):k=oe,C){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=k+le,C={id:b++,callback:F,priorityLevel:C,startTime:k,expirationTime:le,sortIndex:-1},k>oe?(C.sortIndex=k,r(m,C),c(y)===null&&C===c(m)&&(E?(K(j),j=-1):E=!0,Ae($,k-oe))):(C.sortIndex=le,r(y,C),D||M||(D=!0,ie||(ie=!0,me()))),C},o.unstable_shouldYield=Te,o.unstable_wrapCallback=function(C){var F=x;return function(){var k=x;x=F;try{return C.apply(this,arguments)}finally{x=k}}}})(Xc)),Xc}var Sp;function z0(){return Sp||(Sp=1,_c.exports=V0()),_c.exports}var jc={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function _0(){if(Mp)return he;Mp=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.iterator;function M(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,H={};function _(T,G,R){this.props=T,this.context=G,this.refs=H,this.updater=R||D}_.prototype.isReactComponent={},_.prototype.setState=function(T,G){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,G,"setState")},_.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function K(){}K.prototype=_.prototype;function Y(T,G,R){this.props=T,this.context=G,this.refs=H,this.updater=R||D}var Q=Y.prototype=new K;Q.constructor=Y,E(Q,_.prototype),Q.isPureReactComponent=!0;var $=Array.isArray;function ie(){}var j={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function fe(T,G,R){var X=R.ref;return{$$typeof:o,type:T,key:G,ref:X!==void 0?X:null,props:R}}function Te(T,G){return fe(T.type,G,T.props)}function De(T){return typeof T=="object"&&T!==null&&T.$$typeof===o}function me(T){var G={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(R){return G[R]})}var ge=/\/+/g;function ve(T,G){return typeof T=="object"&&T!==null&&T.key!=null?me(""+T.key):G.toString(36)}function Ae(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ie,ie):(T.status="pending",T.then(function(G){T.status==="pending"&&(T.status="fulfilled",T.value=G)},function(G){T.status==="pending"&&(T.status="rejected",T.reason=G)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function C(T,G,R,X,J){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var ne=!1;if(T===null)ne=!0;else switch(se){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(T.$$typeof){case o:case r:ne=!0;break;case b:return ne=T._init,C(ne(T._payload),G,R,X,J)}}if(ne)return J=J(T),ne=X===""?"."+ve(T,0):X,$(J)?(R="",ne!=null&&(R=ne.replace(ge,"$&/")+"/"),C(J,G,R,"",function(ot){return ot})):J!=null&&(De(J)&&(J=Te(J,R+(J.key==null||T&&T.key===J.key?"":(""+J.key).replace(ge,"$&/")+"/")+ne)),G.push(J)),1;ne=0;var ue=X===""?".":X+":";if($(T))for(var xe=0;xe<T.length;xe++)X=T[xe],se=ue+ve(X,xe),ne+=C(X,G,R,se,J);else if(xe=M(T),typeof xe=="function")for(T=xe.call(T),xe=0;!(X=T.next()).done;)X=X.value,se=ue+ve(X,xe++),ne+=C(X,G,R,se,J);else if(se==="object"){if(typeof T.then=="function")return C(Ae(T),G,R,X,J);throw G=String(T),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return ne}function F(T,G,R){if(T==null)return T;var X=[],J=0;return C(T,X,"","",function(se){return G.call(R,se,J++)}),X}function k(T){if(T._status===-1){var G=T._result;G=G(),G.then(function(R){(T._status===0||T._status===-1)&&(T._status=1,T._result=R)},function(R){(T._status===0||T._status===-1)&&(T._status=2,T._result=R)}),T._status===-1&&(T._status=0,T._result=G)}if(T._status===1)return T._result.default;throw T._result}var oe=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},le={map:F,forEach:function(T,G,R){F(T,function(){G.apply(this,arguments)},R)},count:function(T){var G=0;return F(T,function(){G++}),G},toArray:function(T){return F(T,function(G){return G})||[]},only:function(T){if(!De(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return he.Activity=p,he.Children=le,he.Component=_,he.Fragment=c,he.Profiler=d,he.PureComponent=Y,he.StrictMode=l,he.Suspense=y,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,he.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},he.cache=function(T){return function(){return T.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(T,G,R){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=E({},T.props),J=T.key;if(G!=null)for(se in G.key!==void 0&&(J=""+G.key),G)!q.call(G,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&G.ref===void 0||(X[se]=G[se]);var se=arguments.length-2;if(se===1)X.children=R;else if(1<se){for(var ne=Array(se),ue=0;ue<se;ue++)ne[ue]=arguments[ue+2];X.children=ne}return fe(T.type,J,X)},he.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:h,_context:T},T},he.createElement=function(T,G,R){var X,J={},se=null;if(G!=null)for(X in G.key!==void 0&&(se=""+G.key),G)q.call(G,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(J[X]=G[X]);var ne=arguments.length-2;if(ne===1)J.children=R;else if(1<ne){for(var ue=Array(ne),xe=0;xe<ne;xe++)ue[xe]=arguments[xe+2];J.children=ue}if(T&&T.defaultProps)for(X in ne=T.defaultProps,ne)J[X]===void 0&&(J[X]=ne[X]);return fe(T,se,J)},he.createRef=function(){return{current:null}},he.forwardRef=function(T){return{$$typeof:v,render:T}},he.isValidElement=De,he.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:k}},he.memo=function(T,G){return{$$typeof:m,type:T,compare:G===void 0?null:G}},he.startTransition=function(T){var G=j.T,R={};j.T=R;try{var X=T(),J=j.S;J!==null&&J(R,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ie,oe)}catch(se){oe(se)}finally{G!==null&&R.types!==null&&(G.types=R.types),j.T=G}},he.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},he.use=function(T){return j.H.use(T)},he.useActionState=function(T,G,R){return j.H.useActionState(T,G,R)},he.useCallback=function(T,G){return j.H.useCallback(T,G)},he.useContext=function(T){return j.H.useContext(T)},he.useDebugValue=function(){},he.useDeferredValue=function(T,G){return j.H.useDeferredValue(T,G)},he.useEffect=function(T,G){return j.H.useEffect(T,G)},he.useEffectEvent=function(T){return j.H.useEffectEvent(T)},he.useId=function(){return j.H.useId()},he.useImperativeHandle=function(T,G,R){return j.H.useImperativeHandle(T,G,R)},he.useInsertionEffect=function(T,G){return j.H.useInsertionEffect(T,G)},he.useLayoutEffect=function(T,G){return j.H.useLayoutEffect(T,G)},he.useMemo=function(T,G){return j.H.useMemo(T,G)},he.useOptimistic=function(T,G){return j.H.useOptimistic(T,G)},he.useReducer=function(T,G,R){return j.H.useReducer(T,G,R)},he.useRef=function(T){return j.H.useRef(T)},he.useState=function(T){return j.H.useState(T)},he.useSyncExternalStore=function(T,G,R){return j.H.useSyncExternalStore(T,G,R)},he.useTransition=function(){return j.H.useTransition()},he.version="19.2.1",he}var Cp;function vr(){return Cp||(Cp=1,jc.exports=_0()),jc.exports}var qc={exports:{}},pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function X0(){if(Pp)return pt;Pp=1;var o=vr();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var l={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,m,b){var p=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:p==null?null:""+p,children:y,containerInfo:m,implementation:b}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,pt.createPortal=function(y,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return h(y,m,null,b)},pt.flushSync=function(y){var m=f.T,b=l.p;try{if(f.T=null,l.p=2,y)return y()}finally{f.T=m,l.p=b,l.d.f()}},pt.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(y,m))},pt.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},pt.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var b=m.as,p=v(b,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?l.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:p,integrity:x,fetchPriority:M}):b==="script"&&l.d.X(y,{crossOrigin:p,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},pt.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=v(m.as,m.crossOrigin);l.d.M(y,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(y)},pt.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,p=v(b,m.crossOrigin);l.d.L(y,b,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},pt.preloadModule=function(y,m){if(typeof y=="string")if(m){var b=v(m.as,m.crossOrigin);l.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(y)},pt.requestFormReset=function(y){l.d.r(y)},pt.unstable_batchedUpdates=function(y,m){return y(m)},pt.useFormState=function(y,m,b){return f.H.useFormState(y,m,b)},pt.useFormStatus=function(){return f.H.useHostTransitionStatus()},pt.version="19.2.1",pt}var xp;function gm(){if(xp)return qc.exports;xp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),qc.exports=X0(),qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function j0(){if(Ep)return Fo;Ep=1;var o=z0(),r=vr(),c=gm();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return y(i),e;if(s===a)return y(i),t;s=s.sibling}throw Error(l(188))}if(n.return!==a.return)n=i,a=s;else{for(var u=!1,g=i.child;g;){if(g===n){u=!0,n=i,a=s;break}if(g===a){u=!0,a=i,n=s;break}g=g.sibling}if(!u){for(g=s.child;g;){if(g===n){u=!0,n=s,a=i;break}if(g===a){u=!0,a=s,n=i;break}g=g.sibling}if(!u)throw Error(l(189))}}if(n.alternate!==a)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),fe=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=De&&e[De]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Symbol.for("react.client.reference");function ve(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case _:return"Profiler";case H:return"StrictMode";case $:return"Suspense";case ie:return"SuspenseList";case fe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case Y:return e.displayName||"Context";case K:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case j:return t=e.displayName||null,t!==null?t:ve(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}var Ae=Array.isArray,C=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},oe=[],le=-1;function T(e){return{current:e}}function G(e){0>le||(e.current=oe[le],oe[le]=null,le--)}function R(e,t){le++,oe[le]=e.current,e.current=t}var X=T(null),J=T(null),se=T(null),ne=T(null);function ue(e,t){switch(R(se,t),R(J,e),R(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_f(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_f(t),e=Xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(X),R(X,e)}function xe(){G(X),G(J),G(se)}function ot(e){e.memoizedState!==null&&R(ne,e);var t=X.current,n=Xf(t,e.type);t!==n&&(R(J,e),R(X,n))}function mt(e){J.current===e&&(G(X),G(J)),ne.current===e&&(G(ne),Oo._currentValue=k)}var st,bn;function Qt(e){if(st===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);st=t&&t[1]||"",bn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+e+bn}var _i=!1;function Wa(e,t){if(!e||_i)return"";_i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(O){var N=O}Reflect.construct(e,[],z)}else{try{z.call()}catch(O){N=O}e.call(z.prototype)}}else{try{throw Error()}catch(O){N=O}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),u=s[0],g=s[1];if(u&&g){var A=u.split(`
`),B=g.split(`
`);for(i=a=0;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;for(;i<B.length&&!B[i].includes("DetermineComponentFrameRoot");)i++;if(a===A.length||i===B.length)for(a=A.length-1,i=B.length-1;1<=a&&0<=i&&A[a]!==B[i];)i--;for(;1<=a&&0<=i;a--,i--)if(A[a]!==B[i]){if(a!==1||i!==1)do if(a--,i--,0>i||A[a]!==B[i]){var U=`
`+A[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=i);break}}}finally{_i=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qt(n):""}function va(e,t){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==t&&t!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Wa(e.type,!1);case 11:return Wa(e.type.render,!1);case 1:return Wa(e.type,!0);case 31:return Qt("Activity");default:return""}}function Xi(e){try{var t="",n=null;do t+=va(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Bt=Object.prototype.hasOwnProperty,ji=o.unstable_scheduleCallback,qi=o.unstable_cancelCallback,gt=o.unstable_shouldYield,zn=o.unstable_requestPaint,yt=o.unstable_now,Dr=o.unstable_getCurrentPriorityLevel,wa=o.unstable_ImmediatePriority,Wo=o.unstable_UserBlockingPriority,Aa=o.unstable_NormalPriority,Wi=o.unstable_LowPriority,vn=o.unstable_IdlePriority,Yo=o.log,_n=o.unstable_setDisableYieldValue,Ta=null,bt=null;function Zt(e){if(typeof Yo=="function"&&_n(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Ta,e)}catch{}}var ht=Math.clz32?Math.clz32:sn,Lr=Math.log,Yi=Math.LN2;function sn(e){return e>>>=0,e===0?32:31-(Lr(e)/Yi|0)|0}var Ya=256,Ka=262144,Sa=4194304;function rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function de(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~s,a!==0?i=rn(a):(u&=g,u!==0?i=rn(u):n||(n=g&~e,n!==0&&(i=rn(n))))):(g=a&~s,g!==0?i=rn(g):u!==0?i=rn(u):n||(n=a&~e,n!==0&&(i=rn(n)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:i}function ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=Sa;return Sa<<=1,(Sa&62914560)===0&&(Sa=4194304),e}function Xn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,t,n,a,i,s){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,A=e.expirationTimes,B=e.hiddenUpdates;for(n=u&~n;0<n;){var U=31-ht(n),z=1<<U;g[U]=0,A[U]=-1;var N=B[U];if(N!==null)for(B[U]=null,U=0;U<N.length;U++){var O=N[U];O!==null&&(O.lane&=-536870913)}n&=~z}a!==0&&Ma(e,a,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function Ma(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ht(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function At(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ht(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Tt(e,t){var n=t&-t;return n=(n&42)!==0?1:Ja(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $t(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Br(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:fp(e.type))}function Eu(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var jn=Math.random().toString(36).slice(2),rt="__reactFiber$"+jn,St="__reactProps$"+jn,Qa="__reactContainer$"+jn,Ir="__reactEvents$"+jn,xg="__reactListeners$"+jn,Eg="__reactHandles$"+jn,Du="__reactResources$"+jn,Ki="__reactMarker$"+jn;function Nr(e){delete e[rt],delete e[St],delete e[Ir],delete e[xg],delete e[Eg]}function Za(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qa]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[rt])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function $a(e){if(e=e[rt]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ji(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ei(e){var t=e[Du];return t||(t=e[Du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Ki]=!0}var Lu=new Set,Bu={};function Ca(e,t){ti(e,t),ti(e+"Capture",t)}function ti(e,t){for(Bu[e]=t,e=0;e<t.length;e++)Lu.add(t[e])}var Dg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iu={},Nu={};function Lg(e){return Bt.call(Nu,e)?!0:Bt.call(Iu,e)?!1:Dg.test(e)?Nu[e]=!0:(Iu[e]=!0,!1)}function Ko(e,t,n){if(Lg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){if(!e._valueTracker){var t=ku(e)?"checked":"value";e._valueTracker=Bg(e,t,""+e[t])}}function Ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ku(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ig=/[\n"\\]/g;function zt(e){return e.replace(Ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Or(e,t,n,a,i,s,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Ur(e,u,Vt(t)):n!=null?Ur(e,u,Vt(n)):a!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Vt(g):e.removeAttribute("name")}function Uu(e,t,n,a,i,s,u,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){kr(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),kr(e)}function Ur(e,t,n){t==="number"&&Qo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ni(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ru(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Gu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(l(92));if(Ae(a)){if(1<a.length)throw Error(l(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),kr(e)}function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ng=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ng.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Fu(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Hu(e,i,a)}else for(var s in t)t.hasOwnProperty(s)&&Hu(e,s,t[s])}function Rr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return Og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Gr=null;function Hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,oi=null;function Vu(e){var t=$a(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(Or(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[St]||null;if(!i)throw Error(l(90));Or(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ou(a)}break e;case"textarea":Ru(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ni(e,!!n.multiple,t,!1)}}}var Fr=!1;function zu(e,t,n){if(Fr)return e(t,n);Fr=!0;try{var a=e(t);return a}finally{if(Fr=!1,(ii!==null||oi!==null)&&(Hs(),ii&&(t=ii,e=oi,oi=ii=null,Vu(t),e)))for(t=0;t<e.length;t++)Vu(e[t])}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var a=n[St]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vr=!1;if(Tn)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){Vr=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{Vr=!1}var qn=null,zr=null,$o=null;function _u(){if($o)return $o;var e,t=zr,n=t.length,a,i="value"in qn?qn.value:qn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===i[s-a];a++);return $o=i.slice(e,1<a?1-a:void 0)}function es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ts(){return!0}function Xu(){return!1}function Mt(e){function t(n,a,i,s,u){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ts:Xu,this.isPropagationStopped=Xu,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),t}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Mt(Pa),$i=p({},Pa,{view:0,detail:0}),Ug=Mt($i),_r,Xr,eo,as=p({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(_r=e.screenX-eo.screenX,Xr=e.screenY-eo.screenY):Xr=_r=0,eo=e),_r)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),ju=Mt(as),Rg=p({},as,{dataTransfer:0}),Gg=Mt(Rg),Hg=p({},$i,{relatedTarget:0}),jr=Mt(Hg),Fg=p({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Mt(Fg),zg=p({},Pa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_g=Mt(zg),Xg=p({},Pa,{data:0}),qu=Mt(Xg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function qr(){return Yg}var Kg=p({},$i,{key:function(e){if(e.key){var t=jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qr,charCode:function(e){return e.type==="keypress"?es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jg=Mt(Kg),Qg=p({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=Mt(Qg),Zg=p({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qr}),$g=Mt(Zg),ey=p({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Mt(ey),ny=p({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Mt(ny),iy=p({},Pa,{newState:0,oldState:0}),oy=Mt(iy),sy=[9,13,27,32],Wr=Tn&&"CompositionEvent"in window,to=null;Tn&&"documentMode"in document&&(to=document.documentMode);var ry=Tn&&"TextEvent"in window&&!to,Yu=Tn&&(!Wr||to&&8<to&&11>=to),Ku=" ",Ju=!1;function Qu(e,t){switch(e){case"keyup":return sy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var si=!1;function ly(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Ju=!0,Ku);case"textInput":return e=t.data,e===Ku&&Ju?null:e;default:return null}}function cy(e,t){if(si)return e==="compositionend"||!Wr&&Qu(e,t)?(e=_u(),$o=zr=qn=null,si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uy[e.type]:t==="textarea"}function ed(e,t,n,a){ii?oi?oi.push(a):oi=[a]:ii=a,t=qs(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var no=null,ao=null;function dy(e){Rf(e,0)}function is(e){var t=Ji(e);if(Ou(t))return e}function td(e,t){if(e==="change")return t}var nd=!1;if(Tn){var Yr;if(Tn){var Kr="oninput"in document;if(!Kr){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Kr=typeof ad.oninput=="function"}Yr=Kr}else Yr=!1;nd=Yr&&(!document.documentMode||9<document.documentMode)}function id(){no&&(no.detachEvent("onpropertychange",od),ao=no=null)}function od(e){if(e.propertyName==="value"&&is(ao)){var t=[];ed(t,ao,e,Hr(e)),zu(dy,t)}}function hy(e,t,n){e==="focusin"?(id(),no=t,ao=n,no.attachEvent("onpropertychange",od)):e==="focusout"&&id()}function fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(ao)}function py(e,t){if(e==="click")return is(t)}function my(e,t){if(e==="input"||e==="change")return is(t)}function gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:gy;function io(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Bt.call(t,i)||!It(e[i],t[i]))return!1}return!0}function sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=sd(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sd(n)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var yy=Tn&&"documentMode"in document&&11>=document.documentMode,ri=null,Qr=null,oo=null,Zr=!1;function ud(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zr||ri==null||ri!==Qo(a)||(a=ri,"selectionStart"in a&&Jr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),oo&&io(oo,a)||(oo=a,a=qs(Qr,"onSelect"),0<a.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ri)))}function xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var li={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},$r={},dd={};Tn&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Ea(e){if($r[e])return $r[e];if(!li[e])return e;var t=li[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dd)return $r[e]=t[n];return e}var hd=Ea("animationend"),fd=Ea("animationiteration"),pd=Ea("animationstart"),by=Ea("transitionrun"),vy=Ea("transitionstart"),wy=Ea("transitioncancel"),md=Ea("transitionend"),gd=new Map,el="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");el.push("scrollEnd");function en(e,t){gd.set(e,t),Ca(t,[e])}var os=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_t=[],ci=0,tl=0;function ss(){for(var e=ci,t=tl=ci=0;t<e;){var n=_t[t];_t[t++]=null;var a=_t[t];_t[t++]=null;var i=_t[t];_t[t++]=null;var s=_t[t];if(_t[t++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}s!==0&&yd(n,i,s)}}function rs(e,t,n,a){_t[ci++]=e,_t[ci++]=t,_t[ci++]=n,_t[ci++]=a,tl|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function nl(e,t,n,a){return rs(e,t,n,a),ls(e)}function Da(e,t){return rs(e,null,null,t),ls(e)}function yd(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-ht(n),e=s.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),s):null}function ls(e){if(50<Eo)throw Eo=0,dc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function Ay(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,a){return new Ay(e,t,n,a)}function al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cs(e,t,n,a,i,s){var u=0;if(a=e,typeof e=="function")al(e)&&(u=1);else if(typeof e=="string")u=P0(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case fe:return e=Nt(31,n,t,i),e.elementType=fe,e.lanes=s,e;case E:return La(n.children,i,s,t);case H:u=8,i|=24;break;case _:return e=Nt(12,n,t,i|2),e.elementType=_,e.lanes=s,e;case $:return e=Nt(13,n,t,i),e.elementType=$,e.lanes=s,e;case ie:return e=Nt(19,n,t,i),e.elementType=ie,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:u=10;break e;case K:u=9;break e;case Q:u=11;break e;case j:u=14;break e;case q:u=16,a=null;break e}u=29,n=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=Nt(u,n,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function La(e,t,n,a){return e=Nt(7,e,a,t),e.lanes=n,e}function il(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function vd(e){var t=Nt(18,null,null,0);return t.stateNode=e,t}function ol(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wd=new WeakMap;function Xt(e,t){if(typeof e=="object"&&e!==null){var n=wd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xi(t)},wd.set(e,t),t)}return{value:e,source:t,stack:Xi(t)}}var di=[],hi=0,us=null,so=0,jt=[],qt=0,Wn=null,ln=1,cn="";function Mn(e,t){di[hi++]=so,di[hi++]=us,us=e,so=t}function Ad(e,t,n){jt[qt++]=ln,jt[qt++]=cn,jt[qt++]=Wn,Wn=e;var a=ln;e=cn;var i=32-ht(a)-1;a&=~(1<<i),n+=1;var s=32-ht(t)+i;if(30<s){var u=i-i%5;s=(a&(1<<u)-1).toString(32),a>>=u,i-=u,ln=1<<32-ht(t)+i|n<<i|a,cn=s+e}else ln=1<<s|n<<i|a,cn=e}function sl(e){e.return!==null&&(Mn(e,1),Ad(e,1,0))}function rl(e){for(;e===us;)us=di[--hi],di[hi]=null,so=di[--hi],di[hi]=null;for(;e===Wn;)Wn=jt[--qt],jt[qt]=null,cn=jt[--qt],jt[qt]=null,ln=jt[--qt],jt[qt]=null}function Td(e,t){jt[qt++]=ln,jt[qt++]=cn,jt[qt++]=Wn,ln=t.id,cn=t.overflow,Wn=e}var lt=null,Fe=null,Ee=!1,Yn=null,Wt=!1,ll=Error(l(519));function Kn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(Xt(t,e)),ll}function Sd(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[rt]=e,t[St]=a,n){case"dialog":Me("cancel",t),Me("close",t);break;case"iframe":case"object":case"embed":Me("load",t);break;case"video":case"audio":for(n=0;n<Lo.length;n++)Me(Lo[n],t);break;case"source":Me("error",t);break;case"img":case"image":case"link":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"input":Me("invalid",t),Uu(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Me("invalid",t);break;case"textarea":Me("invalid",t),Gu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Vf(t.textContent,n)?(a.popover!=null&&(Me("beforetoggle",t),Me("toggle",t)),a.onScroll!=null&&Me("scroll",t),a.onScrollEnd!=null&&Me("scrollend",t),a.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||Kn(e,!0)}function Md(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:lt=lt.return}}function fi(e){if(e!==lt)return!1;if(!Ee)return Md(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Pc(e.type,e.memoizedProps)),n=!n),n&&Fe&&Kn(e),Md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=Jf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Fe=Jf(e)}else t===27?(t=Fe,ca(e.type)?(e=Bc,Bc=null,Fe=e):Fe=t):Fe=lt?Kt(e.stateNode.nextSibling):null;return!0}function Ba(){Fe=lt=null,Ee=!1}function cl(){var e=Yn;return e!==null&&(Et===null?Et=e:Et.push.apply(Et,e),Yn=null),e}function ro(e){Yn===null?Yn=[e]:Yn.push(e)}var ul=T(null),Ia=null,Cn=null;function Jn(e,t,n){R(ul,t._currentValue),t._currentValue=n}function Pn(e){e._currentValue=ul.current,G(ul)}function dl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function hl(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var u=i.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=i;for(var A=0;A<t.length;A++)if(g.context===t[A]){s.lanes|=n,g=s.alternate,g!==null&&(g.lanes|=n),dl(s.return,n,e),a||(u=null);break e}s=g.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(l(341));u.lanes|=n,s=u.alternate,s!==null&&(s.lanes|=n),dl(u,n,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function pi(e,t,n,a){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(l(387));if(u=u.memoizedProps,u!==null){var g=i.type;It(i.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(i===ne.current){if(u=i.alternate,u===null)throw Error(l(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Oo):e=[Oo])}i=i.return}e!==null&&hl(t,e,n,a),t.flags|=262144}function ds(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Ia=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return Cd(Ia,e)}function hs(e,t){return Ia===null&&Na(e),Cd(e,t)}function Cd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Cn===null){if(e===null)throw Error(l(308));Cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Cn=Cn.next=t;return n}var Ty=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sy=o.unstable_scheduleCallback,My=o.unstable_NormalPriority,Ke={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fl(){return{controller:new Ty,data:new Map,refCount:0}}function lo(e){e.refCount--,e.refCount===0&&Sy(My,function(){e.controller.abort()})}var co=null,pl=0,mi=0,gi=null;function Cy(e,t){if(co===null){var n=co=[];pl=0,mi=yc(),gi={status:"pending",value:void 0,then:function(a){n.push(a)}}}return pl++,t.then(Pd,Pd),t}function Pd(){if(--pl===0&&co!==null){gi!==null&&(gi.status="fulfilled");var e=co;co=null,mi=0,gi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Py(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var xd=C.S;C.S=function(e,t){df=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cy(e,t),xd!==null&&xd(e,t)};var ka=T(null);function ml(){var e=ka.current;return e!==null?e:Ge.pooledCache}function fs(e,t){t===null?R(ka,ka.current):R(ka,t.pool)}function Ed(){var e=ml();return e===null?null:{parent:Ke._currentValue,pool:e}}var yi=Error(l(460)),gl=Error(l(474)),ps=Error(l(542)),ms={then:function(){}};function Dd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ld(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e}throw Ua=t,yi}}function Oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ua=n,yi):n}}var Ua=null;function Bd(){if(Ua===null)throw Error(l(459));var e=Ua;return Ua=null,e}function Id(e){if(e===yi||e===ps)throw Error(l(483))}var bi=null,uo=0;function gs(e){var t=uo;return uo+=1,bi===null&&(bi=[]),Ld(bi,e,t)}function ho(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ys(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nd(e){function t(P,S){if(e){var L=P.deletions;L===null?(P.deletions=[S],P.flags|=16):L.push(S)}}function n(P,S){if(!e)return null;for(;S!==null;)t(P,S),S=S.sibling;return null}function a(P){for(var S=new Map;P!==null;)P.key!==null?S.set(P.key,P):S.set(P.index,P),P=P.sibling;return S}function i(P,S){return P=Sn(P,S),P.index=0,P.sibling=null,P}function s(P,S,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<S?(P.flags|=67108866,S):L):(P.flags|=67108866,S)):(P.flags|=1048576,S)}function u(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function g(P,S,L,V){return S===null||S.tag!==6?(S=il(L,P.mode,V),S.return=P,S):(S=i(S,L),S.return=P,S)}function A(P,S,L,V){var re=L.type;return re===E?U(P,S,L.props.children,V,L.key):S!==null&&(S.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===q&&Oa(re)===S.type)?(S=i(S,L.props),ho(S,L),S.return=P,S):(S=cs(L.type,L.key,L.props,null,P.mode,V),ho(S,L),S.return=P,S)}function B(P,S,L,V){return S===null||S.tag!==4||S.stateNode.containerInfo!==L.containerInfo||S.stateNode.implementation!==L.implementation?(S=ol(L,P.mode,V),S.return=P,S):(S=i(S,L.children||[]),S.return=P,S)}function U(P,S,L,V,re){return S===null||S.tag!==7?(S=La(L,P.mode,V,re),S.return=P,S):(S=i(S,L),S.return=P,S)}function z(P,S,L){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=il(""+S,P.mode,L),S.return=P,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return L=cs(S.type,S.key,S.props,null,P.mode,L),ho(L,S),L.return=P,L;case D:return S=ol(S,P.mode,L),S.return=P,S;case q:return S=Oa(S),z(P,S,L)}if(Ae(S)||me(S))return S=La(S,P.mode,L,null),S.return=P,S;if(typeof S.then=="function")return z(P,gs(S),L);if(S.$$typeof===Y)return z(P,hs(P,S),L);ys(P,S)}return null}function N(P,S,L,V){var re=S!==null?S.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return re!==null?null:g(P,S,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return L.key===re?A(P,S,L,V):null;case D:return L.key===re?B(P,S,L,V):null;case q:return L=Oa(L),N(P,S,L,V)}if(Ae(L)||me(L))return re!==null?null:U(P,S,L,V,null);if(typeof L.then=="function")return N(P,S,gs(L),V);if(L.$$typeof===Y)return N(P,S,hs(P,L),V);ys(P,L)}return null}function O(P,S,L,V,re){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return P=P.get(L)||null,g(S,P,""+V,re);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return P=P.get(V.key===null?L:V.key)||null,A(S,P,V,re);case D:return P=P.get(V.key===null?L:V.key)||null,B(S,P,V,re);case q:return V=Oa(V),O(P,S,L,V,re)}if(Ae(V)||me(V))return P=P.get(L)||null,U(S,P,V,re,null);if(typeof V.then=="function")return O(P,S,L,gs(V),re);if(V.$$typeof===Y)return O(P,S,L,hs(S,V),re);ys(S,V)}return null}function Z(P,S,L,V){for(var re=null,Le=null,ae=S,ye=S=0,Pe=null;ae!==null&&ye<L.length;ye++){ae.index>ye?(Pe=ae,ae=null):Pe=ae.sibling;var Be=N(P,ae,L[ye],V);if(Be===null){ae===null&&(ae=Pe);break}e&&ae&&Be.alternate===null&&t(P,ae),S=s(Be,S,ye),Le===null?re=Be:Le.sibling=Be,Le=Be,ae=Pe}if(ye===L.length)return n(P,ae),Ee&&Mn(P,ye),re;if(ae===null){for(;ye<L.length;ye++)ae=z(P,L[ye],V),ae!==null&&(S=s(ae,S,ye),Le===null?re=ae:Le.sibling=ae,Le=ae);return Ee&&Mn(P,ye),re}for(ae=a(ae);ye<L.length;ye++)Pe=O(ae,P,ye,L[ye],V),Pe!==null&&(e&&Pe.alternate!==null&&ae.delete(Pe.key===null?ye:Pe.key),S=s(Pe,S,ye),Le===null?re=Pe:Le.sibling=Pe,Le=Pe);return e&&ae.forEach(function(pa){return t(P,pa)}),Ee&&Mn(P,ye),re}function ce(P,S,L,V){if(L==null)throw Error(l(151));for(var re=null,Le=null,ae=S,ye=S=0,Pe=null,Be=L.next();ae!==null&&!Be.done;ye++,Be=L.next()){ae.index>ye?(Pe=ae,ae=null):Pe=ae.sibling;var pa=N(P,ae,Be.value,V);if(pa===null){ae===null&&(ae=Pe);break}e&&ae&&pa.alternate===null&&t(P,ae),S=s(pa,S,ye),Le===null?re=pa:Le.sibling=pa,Le=pa,ae=Pe}if(Be.done)return n(P,ae),Ee&&Mn(P,ye),re;if(ae===null){for(;!Be.done;ye++,Be=L.next())Be=z(P,Be.value,V),Be!==null&&(S=s(Be,S,ye),Le===null?re=Be:Le.sibling=Be,Le=Be);return Ee&&Mn(P,ye),re}for(ae=a(ae);!Be.done;ye++,Be=L.next())Be=O(ae,P,ye,Be.value,V),Be!==null&&(e&&Be.alternate!==null&&ae.delete(Be.key===null?ye:Be.key),S=s(Be,S,ye),Le===null?re=Be:Le.sibling=Be,Le=Be);return e&&ae.forEach(function(R0){return t(P,R0)}),Ee&&Mn(P,ye),re}function Re(P,S,L,V){if(typeof L=="object"&&L!==null&&L.type===E&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case M:e:{for(var re=L.key;S!==null;){if(S.key===re){if(re=L.type,re===E){if(S.tag===7){n(P,S.sibling),V=i(S,L.props.children),V.return=P,P=V;break e}}else if(S.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===q&&Oa(re)===S.type){n(P,S.sibling),V=i(S,L.props),ho(V,L),V.return=P,P=V;break e}n(P,S);break}else t(P,S);S=S.sibling}L.type===E?(V=La(L.props.children,P.mode,V,L.key),V.return=P,P=V):(V=cs(L.type,L.key,L.props,null,P.mode,V),ho(V,L),V.return=P,P=V)}return u(P);case D:e:{for(re=L.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===L.containerInfo&&S.stateNode.implementation===L.implementation){n(P,S.sibling),V=i(S,L.children||[]),V.return=P,P=V;break e}else{n(P,S);break}else t(P,S);S=S.sibling}V=ol(L,P.mode,V),V.return=P,P=V}return u(P);case q:return L=Oa(L),Re(P,S,L,V)}if(Ae(L))return Z(P,S,L,V);if(me(L)){if(re=me(L),typeof re!="function")throw Error(l(150));return L=re.call(L),ce(P,S,L,V)}if(typeof L.then=="function")return Re(P,S,gs(L),V);if(L.$$typeof===Y)return Re(P,S,hs(P,L),V);ys(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,S!==null&&S.tag===6?(n(P,S.sibling),V=i(S,L),V.return=P,P=V):(n(P,S),V=il(L,P.mode,V),V.return=P,P=V),u(P)):n(P,S)}return function(P,S,L,V){try{uo=0;var re=Re(P,S,L,V);return bi=null,re}catch(ae){if(ae===yi||ae===ps)throw ae;var Le=Nt(29,ae,null,P.mode);return Le.lanes=V,Le.return=P,Le}finally{}}}var Ra=Nd(!0),kd=Nd(!1),Qn=!1;function yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ie&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=ls(e),yd(e,null,n),t}return rs(e,a,t,n),ls(e)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,At(e,n)}}function vl(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=u:s=s.next=u,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wl=!1;function po(){if(wl){var e=gi;if(e!==null)throw e}}function mo(e,t,n,a){wl=!1;var i=e.updateQueue;Qn=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var A=g,B=A.next;A.next=null,u===null?s=B:u.next=B,u=A;var U=e.alternate;U!==null&&(U=U.updateQueue,g=U.lastBaseUpdate,g!==u&&(g===null?U.firstBaseUpdate=B:g.next=B,U.lastBaseUpdate=A))}if(s!==null){var z=i.baseState;u=0,U=B=A=null,g=s;do{var N=g.lane&-536870913,O=N!==g.lane;if(O?(Ce&N)===N:(a&N)===N){N!==0&&N===mi&&(wl=!0),U!==null&&(U=U.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Z=e,ce=g;N=t;var Re=n;switch(ce.tag){case 1:if(Z=ce.payload,typeof Z=="function"){z=Z.call(Re,z,N);break e}z=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ce.payload,N=typeof Z=="function"?Z.call(Re,z,N):Z,N==null)break e;z=p({},z,N);break e;case 2:Qn=!0}}N=g.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[N]:O.push(N))}else O={lane:N,tag:g.tag,payload:g.payload,callback:g.callback,next:null},U===null?(B=U=O,A=z):U=U.next=O,u|=N;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;O=g,g=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);U===null&&(A=z),i.baseState=A,i.firstBaseUpdate=B,i.lastBaseUpdate=U,s===null&&(i.shared.lanes=0),ia|=u,e.lanes=u,e.memoizedState=z}}function Od(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Ud(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Od(n[e],t)}var vi=T(null),bs=T(0);function Rd(e,t){e=On,R(bs,e),R(vi,t),On=e|t.baseLanes}function Al(){R(bs,On),R(vi,vi.current)}function Tl(){On=bs.current,G(vi),G(bs)}var kt=T(null),Yt=null;function ea(e){var t=e.alternate;R(We,We.current&1),R(kt,e),Yt===null&&(t===null||vi.current!==null||t.memoizedState!==null)&&(Yt=e)}function Sl(e){R(We,We.current),R(kt,e),Yt===null&&(Yt=e)}function Gd(e){e.tag===22?(R(We,We.current),R(kt,e),Yt===null&&(Yt=e)):ta()}function ta(){R(We,We.current),R(kt,kt.current)}function Ot(e){G(kt),Yt===e&&(Yt=null),G(We)}var We=T(0);function vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dc(n)||Lc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xn=0,pe=null,Oe=null,Je=null,ws=!1,wi=!1,Ga=!1,As=0,go=0,Ai=null,xy=0;function je(){throw Error(l(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Cl(e,t,n,a,i,s){return xn=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Ah:Fl,Ga=!1,s=n(a,i),Ga=!1,wi&&(s=Fd(t,n,a,i)),Hd(e),s}function Hd(e){C.H=vo;var t=Oe!==null&&Oe.next!==null;if(xn=0,Je=Oe=pe=null,ws=!1,go=0,Ai=null,t)throw Error(l(300));e===null||Qe||(e=e.dependencies,e!==null&&ds(e)&&(Qe=!0))}function Fd(e,t,n,a){pe=e;var i=0;do{if(wi&&(Ai=null),go=0,wi=!1,25<=i)throw Error(l(301));if(i+=1,Je=Oe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}C.H=Th,s=t(n,a)}while(wi);return s}function Ey(){var e=C.H,t=e.useState()[0];return t=typeof t.then=="function"?yo(t):t,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(pe.flags|=1024),t}function Pl(){var e=As!==0;return As=0,e}function xl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function El(e){if(ws){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ws=!1}xn=0,Je=Oe=pe=null,wi=!1,go=As=0,Ai=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?pe.memoizedState=Je=e:Je=Je.next=e,Je}function Ye(){if(Oe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Je===null?pe.memoizedState:Je.next;if(t!==null)Je=t,Oe=e;else{if(e===null)throw pe.alternate===null?Error(l(467)):Error(l(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Je===null?pe.memoizedState=Je=e:Je=Je.next=e}return Je}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var t=go;return go+=1,Ai===null&&(Ai=[]),e=Ld(Ai,e,t),t=pe,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Ah:Fl),e}function Ss(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===Y)return ct(e)}throw Error(l(438,String(e)))}function Dl(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ts(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Te;return t.index++,n}function En(e,t){return typeof t=="function"?t(e):t}function Ms(e){var t=Ye();return Ll(t,Oe,e)}function Ll(e,t,n){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=n;var i=e.baseQueue,s=a.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}t.baseQueue=i=s,a.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var g=u=null,A=null,B=t,U=!1;do{var z=B.lane&-536870913;if(z!==B.lane?(Ce&z)===z:(xn&z)===z){var N=B.revertLane;if(N===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),z===mi&&(U=!0);else if((xn&N)===N){B=B.next,N===mi&&(U=!0);continue}else z={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(g=A=z,u=s):A=A.next=z,pe.lanes|=N,ia|=N;z=B.action,Ga&&n(s,z),s=B.hasEagerState?B.eagerState:n(s,z)}else N={lane:z,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(g=A=N,u=s):A=A.next=N,pe.lanes|=z,ia|=z;B=B.next}while(B!==null&&B!==t);if(A===null?u=s:A.next=g,!It(s,e.memoizedState)&&(Qe=!0,U&&(n=gi,n!==null)))throw n;e.memoizedState=s,e.baseState=u,e.baseQueue=A,a.lastRenderedState=s}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Bl(e){var t=Ye(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);It(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function Vd(e,t,n){var a=pe,i=Ye(),s=Ee;if(s){if(n===void 0)throw Error(l(407));n=n()}else n=t();var u=!It((Oe||i).memoizedState,n);if(u&&(i.memoizedState=n,Qe=!0),i=i.queue,kl(Xd.bind(null,a,i,e),[e]),i.getSnapshot!==t||u||Je!==null&&Je.memoizedState.tag&1){if(a.flags|=2048,Ti(9,{destroy:void 0},_d.bind(null,a,i,n,t),null),Ge===null)throw Error(l(349));s||(xn&127)!==0||zd(a,t,n)}return n}function zd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Ts(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,a){t.value=n,t.getSnapshot=a,jd(t)&&qd(e)}function Xd(e,t,n){return n(function(){jd(t)&&qd(e)})}function jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function qd(e){var t=Da(e,2);t!==null&&Dt(t,e,2)}function Il(e){var t=vt();if(typeof e=="function"){var n=e;if(e=n(),Ga){Zt(!0);try{n()}finally{Zt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t}function Wd(e,t,n,a){return e.baseState=n,Ll(e,Oe,typeof a=="function"?a:En)}function Dy(e,t,n,a,i){if(xs(e))throw Error(l(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};C.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Yd(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Yd(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var s=C.T,u={};C.T=u;try{var g=n(i,a),A=C.S;A!==null&&A(u,g),Kd(e,t,g)}catch(B){Nl(e,t,B)}finally{s!==null&&u.types!==null&&(s.types=u.types),C.T=s}}else try{s=n(i,a),Kd(e,t,s)}catch(B){Nl(e,t,B)}}function Kd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Jd(e,t,a)},function(a){return Nl(e,t,a)}):Jd(e,t,n)}function Jd(e,t,n){t.status="fulfilled",t.value=n,Qd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yd(e,n)))}function Nl(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Qd(t),t=t.next;while(t!==a)}e.action=null}function Qd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zd(e,t){return t}function $d(e,t){if(Ee){var n=Ge.formState;if(n!==null){e:{var a=pe;if(Ee){if(Fe){t:{for(var i=Fe,s=Wt;i.nodeType!==8;){if(!s){i=null;break t}if(i=Kt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Fe=Kt(i.nextSibling),a=i.data==="F!";break e}}Kn(a)}a=!1}a&&(t=n[0])}}return n=vt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zd,lastRenderedState:t},n.queue=a,n=bh.bind(null,pe,a),a.dispatch=n,a=Il(!1),s=Hl.bind(null,pe,!1,a.queue),a=vt(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Dy.bind(null,pe,i,s,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function eh(e){var t=Ye();return th(t,Oe,e)}function th(e,t,n){if(t=Ll(e,t,Zd)[0],e=Ms(En)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=yo(t)}catch(u){throw u===yi?ps:u}else a=t;t=Ye();var i=t.queue,s=i.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,Ti(9,{destroy:void 0},Ly.bind(null,i,n),null)),[a,s,e]}function Ly(e,t){e.action=t}function nh(e){var t=Ye(),n=Oe;if(n!==null)return th(t,n,e);Ye(),t=t.memoizedState,n=Ye();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ti(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Ts(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ah(){return Ye().memoizedState}function Cs(e,t,n,a){var i=vt();pe.flags|=e,i.memoizedState=Ti(1|t,{destroy:void 0},n,a===void 0?null:a)}function Ps(e,t,n,a){var i=Ye();a=a===void 0?null:a;var s=i.memoizedState.inst;Oe!==null&&a!==null&&Ml(a,Oe.memoizedState.deps)?i.memoizedState=Ti(t,s,n,a):(pe.flags|=e,i.memoizedState=Ti(1|t,s,n,a))}function ih(e,t){Cs(8390656,8,e,t)}function kl(e,t){Ps(2048,8,e,t)}function By(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Ts(),pe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function oh(e){var t=Ye().memoizedState;return By({ref:t,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function sh(e,t){return Ps(4,2,e,t)}function rh(e,t){return Ps(4,4,e,t)}function lh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ch(e,t,n){n=n!=null?n.concat([e]):null,Ps(4,4,lh.bind(null,t,e),n)}function Ol(){}function uh(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ml(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function dh(e,t){var n=Ye();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ml(t,a[1]))return a[0];if(a=e(),Ga){Zt(!0);try{e()}finally{Zt(!1)}}return n.memoizedState=[a,t],a}function Ul(e,t,n){return n===void 0||(xn&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ff(),pe.lanes|=e,ia|=e,n)}function hh(e,t,n,a){return It(n,t)?n:vi.current!==null?(e=Ul(e,n,a),It(e,t)||(Qe=!0),e):(xn&42)===0||(xn&1073741824)!==0&&(Ce&261930)===0?(Qe=!0,e.memoizedState=n):(e=ff(),pe.lanes|=e,ia|=e,t)}function fh(e,t,n,a,i){var s=F.p;F.p=s!==0&&8>s?s:8;var u=C.T,g={};C.T=g,Hl(e,!1,t,n);try{var A=i(),B=C.S;if(B!==null&&B(g,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=Py(A,a);bo(e,t,U,Gt(e))}else bo(e,t,a,Gt(e))}catch(z){bo(e,t,{then:function(){},status:"rejected",reason:z},Gt())}finally{F.p=s,u!==null&&g.types!==null&&(u.types=g.types),C.T=u}}function Iy(){}function Rl(e,t,n,a){if(e.tag!==5)throw Error(l(476));var i=ph(e).queue;fh(e,i,t,k,n===null?Iy:function(){return mh(e),n(a)})}function ph(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:k},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mh(e){var t=ph(e);t.next===null&&(t=e.alternate.memoizedState),bo(e,t.next.queue,{},Gt())}function Gl(){return ct(Oo)}function gh(){return Ye().memoizedState}function yh(){return Ye().memoizedState}function Ny(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Gt();e=Zn(n);var a=$n(t,e,n);a!==null&&(Dt(a,t,n),fo(a,t,n)),t={cache:fl()},e.payload=t;return}t=t.return}}function ky(e,t,n){var a=Gt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xs(e)?vh(t,n):(n=nl(e,t,n,a),n!==null&&(Dt(n,e,a),wh(n,t,a)))}function bh(e,t,n){var a=Gt();bo(e,t,n,a)}function bo(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(xs(e))vh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,g=s(u,n);if(i.hasEagerState=!0,i.eagerState=g,It(g,u))return rs(e,t,i,0),Ge===null&&ss(),!1}catch{}finally{}if(n=nl(e,t,i,a),n!==null)return Dt(n,e,a),wh(n,t,a),!0}return!1}function Hl(e,t,n,a){if(a={lane:2,revertLane:yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xs(e)){if(t)throw Error(l(479))}else t=nl(e,n,a,2),t!==null&&Dt(t,e,2)}function xs(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function vh(e,t){wi=ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,At(e,n)}}var vo={readContext:ct,use:Ss,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};vo.useEffectEvent=je;var Ah={readContext:ct,use:Ss,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:ih,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cs(4194308,4,lh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){Cs(4,2,e,t)},useMemo:function(e,t){var n=vt();t=t===void 0?null:t;var a=e();if(Ga){Zt(!0);try{e()}finally{Zt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=vt();if(n!==void 0){var i=n(t);if(Ga){Zt(!0);try{n(t)}finally{Zt(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=ky.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Il(e);var t=e.queue,n=bh.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ol,useDeferredValue:function(e,t){var n=vt();return Ul(n,e,t)},useTransition:function(){var e=Il(!1);return e=fh.bind(null,pe,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,i=vt();if(Ee){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ge===null)throw Error(l(349));(Ce&127)!==0||zd(a,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ih(Xd.bind(null,a,s,e),[e]),a.flags|=2048,Ti(9,{destroy:void 0},_d.bind(null,a,s,n,t),null),n},useId:function(){var e=vt(),t=Ge.identifierPrefix;if(Ee){var n=cn,a=ln;n=(a&~(1<<32-ht(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=As++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=xy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gl,useFormState:$d,useActionState:$d,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hl.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Dl,useCacheRefresh:function(){return vt().memoizedState=Ny.bind(null,pe)},useEffectEvent:function(e){var t=vt(),n={impl:e};return t.memoizedState=n,function(){if((Ie&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Fl={readContext:ct,use:Ss,useCallback:uh,useContext:ct,useEffect:kl,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:rh,useMemo:dh,useReducer:Ms,useRef:ah,useState:function(){return Ms(En)},useDebugValue:Ol,useDeferredValue:function(e,t){var n=Ye();return hh(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Ms(En)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:yo(e),t]},useSyncExternalStore:Vd,useId:gh,useHostTransitionStatus:Gl,useFormState:eh,useActionState:eh,useOptimistic:function(e,t){var n=Ye();return Wd(n,Oe,e,t)},useMemoCache:Dl,useCacheRefresh:yh};Fl.useEffectEvent=oh;var Th={readContext:ct,use:Ss,useCallback:uh,useContext:ct,useEffect:kl,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:rh,useMemo:dh,useReducer:Bl,useRef:ah,useState:function(){return Bl(En)},useDebugValue:Ol,useDeferredValue:function(e,t){var n=Ye();return Oe===null?Ul(n,e,t):hh(n,Oe.memoizedState,e,t)},useTransition:function(){var e=Bl(En)[0],t=Ye().memoizedState;return[typeof e=="boolean"?e:yo(e),t]},useSyncExternalStore:Vd,useId:gh,useHostTransitionStatus:Gl,useFormState:nh,useActionState:nh,useOptimistic:function(e,t){var n=Ye();return Oe!==null?Wd(n,Oe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Dl,useCacheRefresh:yh};Th.useEffectEvent=oh;function Vl(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zl={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Gt(),i=Zn(a);i.payload=t,n!=null&&(i.callback=n),t=$n(e,i,a),t!==null&&(Dt(t,e,a),fo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Gt(),i=Zn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$n(e,i,a),t!==null&&(Dt(t,e,a),fo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gt(),a=Zn(n);a.tag=2,t!=null&&(a.callback=t),t=$n(e,a,n),t!==null&&(Dt(t,e,n),fo(t,e,n))}};function Sh(e,t,n,a,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,u):t.prototype&&t.prototype.isPureReactComponent?!io(n,a)||!io(i,s):!0}function Mh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&zl.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=p({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Ch(e){os(e)}function Ph(e){console.error(e)}function xh(e){os(e)}function Es(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Eh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function _l(e,t,n){return n=Zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Es(e,t)},n}function Dh(e){return e=Zn(e),e.tag=3,e}function Lh(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;e.payload=function(){return i(s)},e.callback=function(){Eh(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Eh(t,n,a),typeof i!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function Oy(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&pi(t,n,i,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return Yt===null?Fs():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),pc(e,a,i)),!1;case 22:return n.flags|=65536,a===ms?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),pc(e,a,i)),!1}throw Error(l(435,n.tag))}return pc(e,a,i),Fs(),!1}if(Ee)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ll&&(e=Error(l(422),{cause:a}),ro(Xt(e,n)))):(a!==ll&&(t=Error(l(423),{cause:a}),ro(Xt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Xt(a,n),i=_l(e.stateNode,a,i),vl(e,i),qe!==4&&(qe=2)),!1;var s=Error(l(520),{cause:a});if(s=Xt(s,n),xo===null?xo=[s]:xo.push(s),qe!==4&&(qe=2),t===null)return!0;a=Xt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=_l(n.stateNode,a,e),vl(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(oa===null||!oa.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Dh(i),Lh(i,e,n,a),vl(n,i),!1}n=n.return}while(n!==null);return!1}var Xl=Error(l(461)),Qe=!1;function ut(e,t,n,a){t.child=e===null?kd(t,null,n,a):Ra(t,e.child,n,a)}function Bh(e,t,n,a,i){n=n.render;var s=t.ref;if("ref"in a){var u={};for(var g in a)g!=="ref"&&(u[g]=a[g])}else u=a;return Na(t),a=Cl(e,t,n,u,s,i),g=Pl(),e!==null&&!Qe?(xl(e,t,i),Dn(e,t,i)):(Ee&&g&&sl(t),t.flags|=1,ut(e,t,a,i),t.child)}function Ih(e,t,n,a,i){if(e===null){var s=n.type;return typeof s=="function"&&!al(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Nh(e,t,s,a,i)):(e=cs(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Zl(e,i)){var u=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(u,a)&&e.ref===t.ref)return Dn(e,t,i)}return t.flags|=1,e=Sn(s,a),e.ref=t.ref,e.return=t,t.child=e}function Nh(e,t,n,a,i){if(e!==null){var s=e.memoizedProps;if(io(s,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=s,Zl(e,i))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,Dn(e,t,i)}return jl(e,t,n,a,i)}function kh(e,t,n,a){var i=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,t.child=null;return Oh(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fs(t,s!==null?s.cachePool:null),s!==null?Rd(t,s):Al(),Gd(t);else return a=t.lanes=536870912,Oh(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(fs(t,s.cachePool),Rd(t,s),ta(),t.memoizedState=null):(e!==null&&fs(t,null),Al(),ta());return ut(e,t,i,n),t.child}function wo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Oh(e,t,n,a,i){var s=ml();return s=s===null?null:{parent:Ke._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&fs(t,null),Al(),Gd(t),e!==null&&pi(e,t,a,!0),t.childLanes=i,null}function Ds(e,t){return t=Bs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uh(e,t,n){return Ra(t,e.child,null,n),e=Ds(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Uy(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ee){if(a.mode==="hidden")return e=Ds(t,a),t.lanes=536870912,wo(null,e);if(Sl(t),(e=Fe)?(e=Kf(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wn!==null?{id:ln,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},n=vd(e),n.return=t,t.child=n,lt=t,Fe=null)):e=null,e===null)throw Kn(t);return t.lanes=536870912,null}return Ds(t,a)}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(Sl(t),i)if(t.flags&256)t.flags&=-257,t=Uh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Qe||pi(e,t,n,!1),i=(n&e.childLanes)!==0,Qe||i){if(a=Ge,a!==null&&(u=Tt(a,n),u!==0&&u!==s.retryLane))throw s.retryLane=u,Da(e,u),Dt(a,e,u),Xl;Fs(),t=Uh(e,t,n)}else e=s.treeContext,Fe=Kt(u.nextSibling),lt=t,Ee=!0,Yn=null,Wt=!1,e!==null&&Td(t,e),t=Ds(t,a),t.flags|=4096;return t}return e=Sn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ls(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function jl(e,t,n,a,i){return Na(t),n=Cl(e,t,n,a,void 0,i),a=Pl(),e!==null&&!Qe?(xl(e,t,i),Dn(e,t,i)):(Ee&&a&&sl(t),t.flags|=1,ut(e,t,n,i),t.child)}function Rh(e,t,n,a,i,s){return Na(t),t.updateQueue=null,n=Fd(t,a,n,i),Hd(e),a=Pl(),e!==null&&!Qe?(xl(e,t,s),Dn(e,t,s)):(Ee&&a&&sl(t),t.flags|=1,ut(e,t,n,s),t.child)}function Gh(e,t,n,a,i){if(Na(t),t.stateNode===null){var s=ui,u=n.contextType;typeof u=="object"&&u!==null&&(s=ct(u)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},yl(t),u=n.contextType,s.context=typeof u=="object"&&u!==null?ct(u):ui,s.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Vl(t,n,u,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&zl.enqueueReplaceState(s,s.state,null),mo(t,a,s,i),po(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,A=Ha(n,g);s.props=A;var B=s.context,U=n.contextType;u=ui,typeof U=="object"&&U!==null&&(u=ct(U));var z=n.getDerivedStateFromProps;U=typeof z=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||B!==u)&&Mh(t,s,a,u),Qn=!1;var N=t.memoizedState;s.state=N,mo(t,a,s,i),po(),B=t.memoizedState,g||N!==B||Qn?(typeof z=="function"&&(Vl(t,n,z,a),B=t.memoizedState),(A=Qn||Sh(t,n,A,a,N,B,u))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=B),s.props=a,s.state=B,s.context=u,a=A):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,bl(e,t),u=t.memoizedProps,U=Ha(n,u),s.props=U,z=t.pendingProps,N=s.context,B=n.contextType,A=ui,typeof B=="object"&&B!==null&&(A=ct(B)),g=n.getDerivedStateFromProps,(B=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==z||N!==A)&&Mh(t,s,a,A),Qn=!1,N=t.memoizedState,s.state=N,mo(t,a,s,i),po();var O=t.memoizedState;u!==z||N!==O||Qn||e!==null&&e.dependencies!==null&&ds(e.dependencies)?(typeof g=="function"&&(Vl(t,n,g,a),O=t.memoizedState),(U=Qn||Sh(t,n,U,a,N,O,A)||e!==null&&e.dependencies!==null&&ds(e.dependencies))?(B||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,O,A),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,O,A)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=O),s.props=a,s.state=O,s.context=A,a=U):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Ls(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=Ra(t,e.child,null,i),t.child=Ra(t,null,n,i)):ut(e,t,n,i),t.memoizedState=s.state,e=t.child):e=Dn(e,t,i),e}function Hh(e,t,n,a){return Ba(),t.flags|=256,ut(e,t,n,a),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wl(e){return{baseLanes:e,cachePool:Ed()}}function Yl(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function Fh(e,t,n){var a=t.pendingProps,i=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(We.current&2)!==0),u&&(i=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(i?ea(t):ta(),(e=Fe)?(e=Kf(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wn!==null?{id:ln,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},n=vd(e),n.return=t,t.child=n,lt=t,Fe=null)):e=null,e===null)throw Kn(t);return Lc(e)?t.lanes=32:t.lanes=536870912,null}var g=a.children;return a=a.fallback,i?(ta(),i=t.mode,g=Bs({mode:"hidden",children:g},i),a=La(a,i,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,a=t.child,a.memoizedState=Wl(n),a.childLanes=Yl(e,u,n),t.memoizedState=ql,wo(null,a)):(ea(t),Kl(t,g))}var A=e.memoizedState;if(A!==null&&(g=A.dehydrated,g!==null)){if(s)t.flags&256?(ea(t),t.flags&=-257,t=Jl(e,t,n)):t.memoizedState!==null?(ta(),t.child=e.child,t.flags|=128,t=null):(ta(),g=a.fallback,i=t.mode,a=Bs({mode:"visible",children:a.children},i),g=La(g,i,n,null),g.flags|=2,a.return=t,g.return=t,a.sibling=g,t.child=a,Ra(t,e.child,null,n),a=t.child,a.memoizedState=Wl(n),a.childLanes=Yl(e,u,n),t.memoizedState=ql,t=wo(null,a));else if(ea(t),Lc(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var B=u.dgst;u=B,a=Error(l(419)),a.stack="",a.digest=u,ro({value:a,source:null,stack:null}),t=Jl(e,t,n)}else if(Qe||pi(e,t,n,!1),u=(n&e.childLanes)!==0,Qe||u){if(u=Ge,u!==null&&(a=Tt(u,n),a!==0&&a!==A.retryLane))throw A.retryLane=a,Da(e,a),Dt(u,e,a),Xl;Dc(g)||Fs(),t=Jl(e,t,n)}else Dc(g)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Fe=Kt(g.nextSibling),lt=t,Ee=!0,Yn=null,Wt=!1,e!==null&&Td(t,e),t=Kl(t,a.children),t.flags|=4096);return t}return i?(ta(),g=a.fallback,i=t.mode,A=e.child,B=A.sibling,a=Sn(A,{mode:"hidden",children:a.children}),a.subtreeFlags=A.subtreeFlags&65011712,B!==null?g=Sn(B,g):(g=La(g,i,n,null),g.flags|=2),g.return=t,a.return=t,a.sibling=g,t.child=a,wo(null,a),a=t.child,g=e.child.memoizedState,g===null?g=Wl(n):(i=g.cachePool,i!==null?(A=Ke._currentValue,i=i.parent!==A?{parent:A,pool:A}:i):i=Ed(),g={baseLanes:g.baseLanes|n,cachePool:i}),a.memoizedState=g,a.childLanes=Yl(e,u,n),t.memoizedState=ql,wo(e.child,a)):(ea(t),n=e.child,e=n.sibling,n=Sn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function Kl(e,t){return t=Bs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bs(e,t){return e=Nt(22,e,null,t),e.lanes=0,e}function Jl(e,t,n){return Ra(t,e.child,null,n),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),dl(e.return,t,n)}function Ql(e,t,n,a,i,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=i,u.treeForkCount=s)}function zh(e,t,n){var a=t.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var u=We.current,g=(u&2)!==0;if(g?(u=u&1|2,t.flags|=128):u&=1,R(We,u),ut(e,t,a,n),a=Ee?so:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vh(e,n,t);else if(e.tag===19)Vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ql(t,!1,i,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ql(t,!0,n,null,s,a);break;case"together":Ql(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ds(e)))}function Ry(e,t,n){switch(t.tag){case 3:ue(t,t.stateNode.containerInfo),Jn(t,Ke,e.memoizedState.cache),Ba();break;case 27:case 5:ot(t);break;case 4:ue(t,t.stateNode.containerInfo);break;case 10:Jn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sl(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ea(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Fh(e,t,n):(ea(t),e=Dn(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(pi(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return zh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(We,We.current),a)break;return null;case 22:return t.lanes=0,kh(e,t,n,t.pendingProps);case 24:Jn(t,Ke,e.memoizedState.cache)}return Dn(e,t,n)}function _h(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!Zl(e,n)&&(t.flags&128)===0)return Qe=!1,Ry(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,Ee&&(t.flags&1048576)!==0&&Ad(t,so,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Oa(t.elementType),t.type=e,typeof e=="function")al(e)?(a=Ha(e,a),t.tag=1,t=Gh(null,t,e,a,n)):(t.tag=0,t=jl(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===Q){t.tag=11,t=Bh(null,t,e,a,n);break e}else if(i===j){t.tag=14,t=Ih(null,t,e,a,n);break e}}throw t=ve(e)||e,Error(l(306,t,""))}}return t;case 0:return jl(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=Ha(a,t.pendingProps),Gh(e,t,a,i,n);case 3:e:{if(ue(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var s=t.memoizedState;i=s.element,bl(e,t),mo(t,a,null,n);var u=t.memoizedState;if(a=u.cache,Jn(t,Ke,a),a!==s.cache&&hl(t,[Ke],n,!0),po(),a=u.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Hh(e,t,a,n);break e}else if(a!==i){i=Xt(Error(l(424)),t),ro(i),t=Hh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=Kt(e.firstChild),lt=t,Ee=!0,Yn=null,Wt=!0,n=kd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ba(),a===i){t=Dn(e,t,n);break e}ut(e,t,a,n)}t=t.child}return t;case 26:return Ls(e,t),e===null?(n=tp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,a=Ws(se.current).createElement(n),a[rt]=t,a[St]=e,dt(a,n,e),nt(a),t.stateNode=a):t.memoizedState=tp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ot(t),e===null&&Ee&&(a=t.stateNode=Zf(t.type,t.pendingProps,se.current),lt=t,Wt=!0,i=Fe,ca(t.type)?(Bc=i,Fe=Kt(a.firstChild)):Fe=i),ut(e,t,t.pendingProps.children,n),Ls(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((i=a=Fe)&&(a=f0(a,t.type,t.pendingProps,Wt),a!==null?(t.stateNode=a,lt=t,Fe=Kt(a.firstChild),Wt=!1,i=!0):i=!1),i||Kn(t)),ot(t),i=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,a=s.children,Pc(i,s)?a=null:u!==null&&Pc(i,u)&&(t.flags|=32),t.memoizedState!==null&&(i=Cl(e,t,Ey,null,null,n),Oo._currentValue=i),Ls(e,t),ut(e,t,a,n),t.child;case 6:return e===null&&Ee&&((e=n=Fe)&&(n=p0(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,lt=t,Fe=null,e=!0):e=!1),e||Kn(t)),null;case 13:return Fh(e,t,n);case 4:return ue(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ra(t,null,a,n):ut(e,t,a,n),t.child;case 11:return Bh(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Jn(t,t.type,a.value),ut(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Na(t),i=ct(i),a=a(i),t.flags|=1,ut(e,t,a,n),t.child;case 14:return Ih(e,t,t.type,t.pendingProps,n);case 15:return Nh(e,t,t.type,t.pendingProps,n);case 19:return zh(e,t,n);case 31:return Uy(e,t,n);case 22:return kh(e,t,n,t.pendingProps);case 24:return Na(t),a=ct(Ke),e===null?(i=ml(),i===null&&(i=Ge,s=fl(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),t.memoizedState={parent:a,cache:i},yl(t),Jn(t,Ke,i)):((e.lanes&n)!==0&&(bl(e,t),mo(t,null,null,n),po()),i=e.memoizedState,s=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Jn(t,Ke,a)):(a=s.cache,Jn(t,Ke,a),a!==i.cache&&hl(t,[Ke],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Ln(e){e.flags|=4}function $l(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(yf())e.flags|=8192;else throw Ua=ms,gl}else e.flags&=-16777217}function Xh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sp(t))if(yf())e.flags|=8192;else throw Ua=ms,gl}function Is(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ft():536870912,e.lanes|=t,Pi|=t)}function Ao(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Gy(e,t,n){var a=t.pendingProps;switch(rl(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pn(Ke),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fi(t)?Ln(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cl())),Ve(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(Ln(t),s!==null?(Ve(t),Xh(t,s)):(Ve(t),$l(t,i,null,a,n))):s?s!==e.memoizedState?(Ln(t),Ve(t),Xh(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Ln(t),Ve(t),$l(t,i,e,a,n)),null;case 27:if(mt(t),n=se.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=X.current,fi(t)?Sd(t):(e=Zf(i,a,n),t.stateNode=e,Ln(t))}return Ve(t),null;case 5:if(mt(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(s=X.current,fi(t))Sd(t);else{var u=Ws(se.current);switch(s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}s[rt]=t,s[St]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=s;e:switch(dt(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Ln(t)}}return Ve(t),$l(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Ln(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=se.current,fi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=lt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[rt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Vf(e.nodeValue,n)),e||Kn(t,!0)}else e=Ws(e).createTextNode(a),e[rt]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=fi(t),n!==null){if(e===null){if(!a)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[rt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=cl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=fi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[rt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),i=!1}else i=cl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Is(t,t.updateQueue),Ve(t),null);case 4:return xe(),e===null&&Ac(t.stateNode.containerInfo),Ve(t),null;case 10:return Pn(t.type),Ve(t),null;case 19:if(G(We),a=t.memoizedState,a===null)return Ve(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)Ao(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=vs(e),s!==null){for(t.flags|=128,Ao(a,!1),e=s.updateQueue,t.updateQueue=e,Is(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bd(n,e),n=n.sibling;return R(We,We.current&1|2),Ee&&Mn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>Rs&&(t.flags|=128,i=!0,Ao(a,!1),t.lanes=4194304)}else{if(!i)if(e=vs(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Is(t,e),Ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ee)return Ve(t),null}else 2*yt()-a.renderingStartTime>Rs&&n!==536870912&&(t.flags|=128,i=!0,Ao(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,n=We.current,R(We,i?n&1|2:n&1),Ee&&Mn(t,a.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ot(t),Tl(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Is(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&G(ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pn(Ke),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Hy(e,t){switch(rl(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(Ke),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return mt(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(We),null;case 4:return xe(),null;case 10:return Pn(t.type),null;case 22:case 23:return Ot(t),Tl(),e!==null&&G(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pn(Ke),null;case 25:return null;default:return null}}function jh(e,t){switch(rl(t),t.tag){case 3:Pn(Ke),xe();break;case 26:case 27:case 5:mt(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:G(We);break;case 10:Pn(t.type);break;case 22:case 23:Ot(t),Tl(),e!==null&&G(ka);break;case 24:Pn(Ke)}}function To(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var s=n.create,u=n.inst;a=s(),u.destroy=a}n=n.next}while(n!==i)}}catch(g){ke(t,t.return,g)}}function na(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&e)===e){var u=a.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,i=t;var A=n,B=g;try{B()}catch(U){ke(i,A,U)}}}a=a.next}while(a!==s)}}catch(U){ke(t,t.return,U)}}function qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ud(t,n)}catch(a){ke(e,e.return,a)}}}function Wh(e,t,n){n.props=Ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ke(e,t,a)}}function So(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){ke(e,t,i)}}function un(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){ke(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ke(e,t,i)}else n.current=null}function Yh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){ke(e,e.return,i)}}function ec(e,t,n){try{var a=e.stateNode;r0(a,e.type,n,t),a[St]=t}catch(i){ke(e,e.return,i)}}function Kh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ca(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}function Ns(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&ca(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ns(e,t,n),e=e.sibling;e!==null;)Ns(e,t,n),e=e.sibling}function Jh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);dt(t,a,n),t[rt]=e,t[St]=n}catch(s){ke(e,e.return,s)}}var Bn=!1,Ze=!1,ac=!1,Qh=typeof WeakSet=="function"?WeakSet:Set,at=null;function Fy(e,t){if(e=e.containerInfo,Mc=er,e=cd(e),Jr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var u=0,g=-1,A=-1,B=0,U=0,z=e,N=null;t:for(;;){for(var O;z!==n||i!==0&&z.nodeType!==3||(g=u+i),z!==s||a!==0&&z.nodeType!==3||(A=u+a),z.nodeType===3&&(u+=z.nodeValue.length),(O=z.firstChild)!==null;)N=z,z=O;for(;;){if(z===e)break t;if(N===n&&++B===i&&(g=u),N===s&&++U===a&&(A=u),(O=z.nextSibling)!==null)break;z=N,N=z.parentNode}z=O}n=g===-1||A===-1?null:{start:g,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cc={focusedElem:e,selectionRange:n},er=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var Z=Ha(n.type,i);e=a.getSnapshotBeforeUpdate(Z,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(ce){ke(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ec(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ec(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function Zh(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),a&4&&To(5,n);break;case 1:if(Nn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){ke(n,n.return,u)}else{var i=Ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ke(n,n.return,u)}}a&64&&qh(n),a&512&&So(n,n.return);break;case 3:if(Nn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ud(e,t)}catch(u){ke(n,n.return,u)}}break;case 27:t===null&&a&4&&Jh(n);case 26:case 5:Nn(e,n),t===null&&a&4&&Yh(n),a&512&&So(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),a&4&&tf(e,n);break;case 13:Nn(e,n),a&4&&nf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ky.bind(null,n),m0(e,n))));break;case 22:if(a=n.memoizedState!==null||Bn,!a){t=t!==null&&t.memoizedState!==null||Ze,i=Bn;var s=Ze;Bn=a,(Ze=t)&&!s?kn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),Bn=i,Ze=s}break;case 30:break;default:Nn(e,n)}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,Ct=!1;function In(e,t,n){for(n=n.child;n!==null;)ef(e,t,n),n=n.sibling}function ef(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 26:Ze||un(n,t),In(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||un(n,t);var a=_e,i=Ct;ca(n.type)&&(_e=n.stateNode,Ct=!1),In(e,t,n),Io(n.stateNode),_e=a,Ct=i;break;case 5:Ze||un(n,t);case 6:if(a=_e,i=Ct,_e=null,In(e,t,n),_e=a,Ct=i,_e!==null)if(Ct)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(n.stateNode)}catch(s){ke(n,t,s)}else try{_e.removeChild(n.stateNode)}catch(s){ke(n,t,s)}break;case 18:_e!==null&&(Ct?(e=_e,Wf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ki(e)):Wf(_e,n.stateNode));break;case 4:a=_e,i=Ct,_e=n.stateNode.containerInfo,Ct=!0,In(e,t,n),_e=a,Ct=i;break;case 0:case 11:case 14:case 15:na(2,n,t),Ze||na(4,n,t),In(e,t,n);break;case 1:Ze||(un(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Wh(n,t,a)),In(e,t,n);break;case 21:In(e,t,n);break;case 22:Ze=(a=Ze)||n.memoizedState!==null,In(e,t,n),Ze=a;break;default:In(e,t,n)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ki(e)}catch(n){ke(t,t.return,n)}}}function nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ki(e)}catch(n){ke(t,t.return,n)}}function Vy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qh),t;default:throw Error(l(435,e.tag))}}function ks(e,t){var n=Vy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=Jy.bind(null,e,a);a.then(i,i)}})}function Pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=e,u=t,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(ca(g.type)){_e=g.stateNode,Ct=!1;break e}break;case 5:_e=g.stateNode,Ct=!1;break e;case 3:case 4:_e=g.stateNode.containerInfo,Ct=!0;break e}g=g.return}if(_e===null)throw Error(l(160));ef(s,u,i),_e=null,Ct=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,e),t=t.sibling}var tn=null;function af(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pt(t,e),xt(e),a&4&&(na(3,e,e.return),To(3,e),na(5,e,e.return));break;case 1:Pt(t,e),xt(e),a&512&&(Ze||n===null||un(n,n.return)),a&64&&Bn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=tn;if(Pt(t,e),xt(e),a&512&&(Ze||n===null||un(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Ki]||s[rt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),dt(s,a,n),s[rt]=e,nt(s),a=s;break e;case"link":var u=ip("link","href",i).get(a+(n.href||""));if(u){for(var g=0;g<u.length;g++)if(s=u[g],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(g,1);break t}}s=i.createElement(a),dt(s,a,n),i.head.appendChild(s);break;case"meta":if(u=ip("meta","content",i).get(a+(n.content||""))){for(g=0;g<u.length;g++)if(s=u[g],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(g,1);break t}}s=i.createElement(a),dt(s,a,n),i.head.appendChild(s);break;default:throw Error(l(468,a))}s[rt]=e,nt(s),a=s}e.stateNode=a}else op(i,e.type,e.stateNode);else e.stateNode=ap(i,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?op(i,e.type,e.stateNode):ap(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:Pt(t,e),xt(e),a&512&&(Ze||n===null||un(n,n.return)),n!==null&&a&4&&ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Pt(t,e),xt(e),a&512&&(Ze||n===null||un(n,n.return)),e.flags&32){i=e.stateNode;try{ai(i,"")}catch(Z){ke(e,e.return,Z)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ec(e,i,n!==null?n.memoizedProps:i)),a&1024&&(ac=!0);break;case 6:if(Pt(t,e),xt(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Z){ke(e,e.return,Z)}}break;case 3:if(Js=null,i=tn,tn=Ys(t.containerInfo),Pt(t,e),tn=i,xt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(t.containerInfo)}catch(Z){ke(e,e.return,Z)}ac&&(ac=!1,of(e));break;case 4:a=tn,tn=Ys(e.stateNode.containerInfo),Pt(t,e),xt(e),tn=a;break;case 12:Pt(t,e),xt(e);break;case 31:Pt(t,e),xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ks(e,a)));break;case 13:Pt(t,e),xt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Us=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ks(e,a)));break;case 22:i=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,B=Bn,U=Ze;if(Bn=B||i,Ze=U||A,Pt(t,e),Ze=U,Bn=B,xt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||A||Bn||Ze||Fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){A=n=t;try{if(s=A.stateNode,i)u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=A.stateNode;var z=A.memoizedProps.style,N=z!=null&&z.hasOwnProperty("display")?z.display:null;g.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(Z){ke(A,A.return,Z)}}}else if(t.tag===6){if(n===null){A=t;try{A.stateNode.nodeValue=i?"":A.memoizedProps}catch(Z){ke(A,A.return,Z)}}}else if(t.tag===18){if(n===null){A=t;try{var O=A.stateNode;i?Yf(O,!0):Yf(A.stateNode,!1)}catch(Z){ke(A,A.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ks(e,n))));break;case 19:Pt(t,e),xt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,ks(e,a)));break;case 30:break;case 21:break;default:Pt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Kh(a)){n=a;break}a=a.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var i=n.stateNode,s=tc(e);Ns(e,s,i);break;case 5:var u=n.stateNode;n.flags&32&&(ai(u,""),n.flags&=-33);var g=tc(e);Ns(e,g,u);break;case 3:case 4:var A=n.stateNode.containerInfo,B=tc(e);nc(e,B,A);break;default:throw Error(l(161))}}catch(U){ke(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zh(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:na(4,t,t.return),Fa(t);break;case 1:un(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Wh(t,t.return,n),Fa(t);break;case 27:Io(t.stateNode);case 26:case 5:un(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,s=t,u=s.flags;switch(s.tag){case 0:case 11:case 15:kn(i,s,n),To(4,s);break;case 1:if(kn(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(B){ke(a,a.return,B)}if(a=s,i=a.updateQueue,i!==null){var g=a.stateNode;try{var A=i.shared.hiddenCallbacks;if(A!==null)for(i.shared.hiddenCallbacks=null,i=0;i<A.length;i++)Od(A[i],g)}catch(B){ke(a,a.return,B)}}n&&u&64&&qh(s),So(s,s.return);break;case 27:Jh(s);case 26:case 5:kn(i,s,n),n&&a===null&&u&4&&Yh(s),So(s,s.return);break;case 12:kn(i,s,n);break;case 31:kn(i,s,n),n&&u&4&&tf(i,s);break;case 13:kn(i,s,n),n&&u&4&&nf(i,s);break;case 22:s.memoizedState===null&&kn(i,s,n),So(s,s.return);break;case 30:break;default:kn(i,s,n)}t=t.sibling}}function ic(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&lo(n))}function oc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lo(e))}function nn(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sf(e,t,n,a),t=t.sibling}function sf(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:nn(e,t,n,a),i&2048&&To(9,t);break;case 1:nn(e,t,n,a);break;case 3:nn(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lo(e)));break;case 12:if(i&2048){nn(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,u=s.id,g=s.onPostCommit;typeof g=="function"&&g(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){ke(t,t.return,A)}}else nn(e,t,n,a);break;case 31:nn(e,t,n,a);break;case 13:nn(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,u=t.alternate,t.memoizedState!==null?s._visibility&2?nn(e,t,n,a):Mo(e,t):s._visibility&2?nn(e,t,n,a):(s._visibility|=2,Si(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ic(u,t);break;case 24:nn(e,t,n,a),i&2048&&oc(t.alternate,t);break;default:nn(e,t,n,a)}}function Si(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,u=t,g=n,A=a,B=u.flags;switch(u.tag){case 0:case 11:case 15:Si(s,u,g,A,i),To(8,u);break;case 23:break;case 22:var U=u.stateNode;u.memoizedState!==null?U._visibility&2?Si(s,u,g,A,i):Mo(s,u):(U._visibility|=2,Si(s,u,g,A,i)),i&&B&2048&&ic(u.alternate,u);break;case 24:Si(s,u,g,A,i),i&&B&2048&&oc(u.alternate,u);break;default:Si(s,u,g,A,i)}t=t.sibling}}function Mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Mo(n,a),i&2048&&ic(a.alternate,a);break;case 24:Mo(n,a),i&2048&&oc(a.alternate,a);break;default:Mo(n,a)}t=t.sibling}}var Co=8192;function Mi(e,t,n){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)rf(e,t,n),e=e.sibling}function rf(e,t,n){switch(e.tag){case 26:Mi(e,t,n),e.flags&Co&&e.memoizedState!==null&&x0(n,tn,e.memoizedState,e.memoizedProps);break;case 5:Mi(e,t,n);break;case 3:case 4:var a=tn;tn=Ys(e.stateNode.containerInfo),Mi(e,t,n),tn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Co,Co=16777216,Mi(e,t,n),Co=a):Mi(e,t,n));break;default:Mi(e,t,n)}}function lf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,uf(a,e)}lf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cf(e),e=e.sibling}function cf(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&na(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Os(e)):Po(e);break;default:Po(e)}}function Os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];at=a,uf(a,e)}lf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),Os(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Os(t));break;default:Os(t)}e=e.sibling}}function uf(e,t){for(;at!==null;){var n=at;switch(n.tag){case 0:case 11:case 15:na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:lo(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,at=a;else e:for(n=e;at!==null;){a=at;var i=a.sibling,s=a.return;if($h(a),a===n){at=null;break e}if(i!==null){i.return=s,at=i;break e}at=s}}}var zy={getCacheForType:function(e){var t=ct(Ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(Ke).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Ge=null,Se=null,Ce=0,Ne=0,Ut=null,aa=!1,Ci=!1,sc=!1,On=0,qe=0,ia=0,Va=0,rc=0,Rt=0,Pi=0,xo=null,Et=null,lc=!1,Us=0,df=0,Rs=1/0,Gs=null,oa=null,$e=0,sa=null,xi=null,Un=0,cc=0,uc=null,hf=null,Eo=0,dc=null;function Gt(){return(Ie&2)!==0&&Ce!==0?Ce&-Ce:C.T!==null?yc():Br()}function ff(){if(Rt===0)if((Ce&536870912)===0||Ee){var e=Ka;Ka<<=1,(Ka&3932160)===0&&(Ka=262144),Rt=e}else Rt=536870912;return e=kt.current,e!==null&&(e.flags|=32),Rt}function Dt(e,t,n){(e===Ge&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(Ei(e,0),ra(e,Ce,Rt,!1)),Xe(e,n),((Ie&2)===0||e!==Ge)&&(e===Ge&&((Ie&2)===0&&(Va|=n),qe===4&&ra(e,Ce,Rt,!1)),dn(e))}function pf(e,t,n){if((Ie&6)!==0)throw Error(l(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ze(e,t),i=a?qy(e,t):fc(e,t,!0),s=a;do{if(i===0){Ci&&!a&&ra(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Xy(n)){i=fc(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var g=e;i=xo;var A=g.current.memoizedState.isDehydrated;if(A&&(Ei(g,u).flags|=256),u=fc(g,u,!1),u!==2){if(sc&&!A){g.errorRecoveryDisabledLanes|=s,Va|=s,i=4;break e}s=Et,Et=i,s!==null&&(Et===null?Et=s:Et.push.apply(Et,s))}i=u}if(s=!1,i!==2)continue}}if(i===1){Ei(e,0),ra(e,t,0,!0);break}e:{switch(a=e,s=i,s){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:ra(a,t,Rt,!aa);break e;case 2:Et=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(i=Us+300-yt(),10<i)){if(ra(a,t,Rt,!aa),de(a,0,!0)!==0)break e;Un=t,a.timeoutHandle=jf(mf.bind(null,a,n,Et,Gs,lc,t,Rt,Va,Pi,aa,s,"Throttled",-0,0),i);break e}mf(a,n,Et,Gs,lc,t,Rt,Va,Pi,aa,s,null,-0,0)}}break}while(!0);dn(e)}function mf(e,t,n,a,i,s,u,g,A,B,U,z,N,O){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},rf(t,s,z);var Z=(s&62914560)===s?Us-yt():(s&4194048)===s?df-yt():0;if(Z=E0(z,Z),Z!==null){Un=s,e.cancelPendingCommit=Z(Sf.bind(null,e,t,s,n,a,i,u,g,A,U,z,null,N,O)),ra(e,s,u,!B);return}}Sf(e,t,s,n,a,i,u,g,A)}function Xy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t,n,a){t&=~rc,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var s=31-ht(i),u=1<<s;a[s]=-1,i&=~u}n!==0&&Ma(e,n,t)}function Hs(){return(Ie&6)===0?(Do(0),!1):!0}function hc(){if(Se!==null){if(Ne===0)var e=Se.return;else e=Se,Cn=Ia=null,El(e),bi=null,uo=0,e=Se;for(;e!==null;)jh(e.alternate,e),e=e.return;Se=null}}function Ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,u0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Un=0,hc(),Ge=e,Se=n=Sn(e.current,null),Ce=t,Ne=0,Ut=null,aa=!1,Ci=ze(e,t),sc=!1,Pi=Rt=rc=Va=ia=qe=0,Et=xo=null,lc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-ht(a),s=1<<i;t|=e[i],a&=~s}return On=t,ss(),n}function gf(e,t){pe=null,C.H=vo,t===yi||t===ps?(t=Bd(),Ne=3):t===gl?(t=Bd(),Ne=4):Ne=t===Xl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ut=t,Se===null&&(qe=1,Es(e,Xt(t,e.current)))}function yf(){var e=kt.current;return e===null?!0:(Ce&4194048)===Ce?Yt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Yt:!1}function bf(){var e=C.H;return C.H=vo,e===null?vo:e}function vf(){var e=C.A;return C.A=zy,e}function Fs(){qe=4,aa||(Ce&4194048)!==Ce&&kt.current!==null||(Ci=!0),(ia&134217727)===0&&(Va&134217727)===0||Ge===null||ra(Ge,Ce,Rt,!1)}function fc(e,t,n){var a=Ie;Ie|=2;var i=bf(),s=vf();(Ge!==e||Ce!==t)&&(Gs=null,Ei(e,t)),t=!1;var u=qe;e:do try{if(Ne!==0&&Se!==null){var g=Se,A=Ut;switch(Ne){case 8:hc(),u=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var B=Ne;if(Ne=0,Ut=null,Di(e,g,A,B),n&&Ci){u=0;break e}break;default:B=Ne,Ne=0,Ut=null,Di(e,g,A,B)}}jy(),u=qe;break}catch(U){gf(e,U)}while(!0);return t&&e.shellSuspendCounter++,Cn=Ia=null,Ie=a,C.H=i,C.A=s,Se===null&&(Ge=null,Ce=0,ss()),u}function jy(){for(;Se!==null;)wf(Se)}function qy(e,t){var n=Ie;Ie|=2;var a=bf(),i=vf();Ge!==e||Ce!==t?(Gs=null,Rs=yt()+500,Ei(e,t)):Ci=ze(e,t);e:do try{if(Ne!==0&&Se!==null){t=Se;var s=Ut;t:switch(Ne){case 1:Ne=0,Ut=null,Di(e,t,s,1);break;case 2:case 9:if(Dd(s)){Ne=0,Ut=null,Af(t);break}t=function(){Ne!==2&&Ne!==9||Ge!==e||(Ne=7),dn(e)},s.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:Dd(s)?(Ne=0,Ut=null,Af(t)):(Ne=0,Ut=null,Di(e,t,s,7));break;case 5:var u=null;switch(Se.tag){case 26:u=Se.memoizedState;case 5:case 27:var g=Se;if(u?sp(u):g.stateNode.complete){Ne=0,Ut=null;var A=g.sibling;if(A!==null)Se=A;else{var B=g.return;B!==null?(Se=B,Vs(B)):Se=null}break t}}Ne=0,Ut=null,Di(e,t,s,5);break;case 6:Ne=0,Ut=null,Di(e,t,s,6);break;case 8:hc(),qe=6;break e;default:throw Error(l(462))}}Wy();break}catch(U){gf(e,U)}while(!0);return Cn=Ia=null,C.H=a,C.A=i,Ie=n,Se!==null?0:(Ge=null,Ce=0,ss(),qe)}function Wy(){for(;Se!==null&&!gt();)wf(Se)}function wf(e){var t=_h(e.alternate,e,On);e.memoizedProps=e.pendingProps,t===null?Vs(e):Se=t}function Af(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rh(n,t,t.pendingProps,t.type,void 0,Ce);break;case 11:t=Rh(n,t,t.pendingProps,t.type.render,t.ref,Ce);break;case 5:El(t);default:jh(n,t),t=Se=bd(t,On),t=_h(n,t,On)}e.memoizedProps=e.pendingProps,t===null?Vs(e):Se=t}function Di(e,t,n,a){Cn=Ia=null,El(t),bi=null,uo=0;var i=t.return;try{if(Oy(e,i,t,n,Ce)){qe=1,Es(e,Xt(n,e.current)),Se=null;return}}catch(s){if(i!==null)throw Se=i,s;qe=1,Es(e,Xt(n,e.current)),Se=null;return}t.flags&32768?(Ee||a===1?e=!0:Ci||(Ce&536870912)!==0?e=!1:(aa=e=!0,(a===2||a===9||a===3||a===6)&&(a=kt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Tf(t,e)):Vs(t)}function Vs(e){var t=e;do{if((t.flags&32768)!==0){Tf(t,aa);return}e=t.return;var n=Gy(t.alternate,t,On);if(n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);qe===0&&(qe=5)}function Tf(e,t){do{var n=Hy(e.alternate,e);if(n!==null){n.flags&=32767,Se=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Se=e;return}Se=e=n}while(e!==null);qe=6,Se=null}function Sf(e,t,n,a,i,s,u,g,A){e.cancelPendingCommit=null;do zs();while($e!==0);if((Ie&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(s=t.lanes|t.childLanes,s|=tl,wt(e,n,s,u,g,A),e===Ge&&(Se=Ge=null,Ce=0),xi=t,sa=e,Un=n,cc=s,uc=i,hf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qy(Aa,function(){return Ef(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,i=F.p,F.p=2,u=Ie,Ie|=4;try{Fy(e,t,n)}finally{Ie=u,F.p=i,C.T=a}}$e=1,Mf(),Cf(),Pf()}}function Mf(){if($e===1){$e=0;var e=sa,t=xi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=F.p;F.p=2;var i=Ie;Ie|=4;try{af(t,e);var s=Cc,u=cd(e.containerInfo),g=s.focusedElem,A=s.selectionRange;if(u!==g&&g&&g.ownerDocument&&ld(g.ownerDocument.documentElement,g)){if(A!==null&&Jr(g)){var B=A.start,U=A.end;if(U===void 0&&(U=B),"selectionStart"in g)g.selectionStart=B,g.selectionEnd=Math.min(U,g.value.length);else{var z=g.ownerDocument||document,N=z&&z.defaultView||window;if(N.getSelection){var O=N.getSelection(),Z=g.textContent.length,ce=Math.min(A.start,Z),Re=A.end===void 0?ce:Math.min(A.end,Z);!O.extend&&ce>Re&&(u=Re,Re=ce,ce=u);var P=rd(g,ce),S=rd(g,Re);if(P&&S&&(O.rangeCount!==1||O.anchorNode!==P.node||O.anchorOffset!==P.offset||O.focusNode!==S.node||O.focusOffset!==S.offset)){var L=z.createRange();L.setStart(P.node,P.offset),O.removeAllRanges(),ce>Re?(O.addRange(L),O.extend(S.node,S.offset)):(L.setEnd(S.node,S.offset),O.addRange(L))}}}}for(z=[],O=g;O=O.parentNode;)O.nodeType===1&&z.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<z.length;g++){var V=z[g];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}er=!!Mc,Cc=Mc=null}finally{Ie=i,F.p=a,C.T=n}}e.current=t,$e=2}}function Cf(){if($e===2){$e=0;var e=sa,t=xi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=F.p;F.p=2;var i=Ie;Ie|=4;try{Zh(e,t.alternate,t)}finally{Ie=i,F.p=a,C.T=n}}$e=3}}function Pf(){if($e===4||$e===3){$e=0,zn();var e=sa,t=xi,n=Un,a=hf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,xi=sa=null,xf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(oa=null),$t(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ta,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=C.T,i=F.p,F.p=2,C.T=null;try{for(var s=e.onRecoverableError,u=0;u<a.length;u++){var g=a[u];s(g.value,{componentStack:g.stack})}}finally{C.T=t,F.p=i}}(Un&3)!==0&&zs(),dn(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===dc?Eo++:(Eo=0,dc=e):Eo=0,Do(0)}}function xf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,lo(t)))}function zs(){return Mf(),Cf(),Pf(),Ef()}function Ef(){if($e!==5)return!1;var e=sa,t=cc;cc=0;var n=$t(Un),a=C.T,i=F.p;try{F.p=32>n?32:n,C.T=null,n=uc,uc=null;var s=sa,u=Un;if($e=0,xi=sa=null,Un=0,(Ie&6)!==0)throw Error(l(331));var g=Ie;if(Ie|=4,cf(s.current),sf(s,s.current,u,n),Ie=g,Do(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ta,s)}catch{}return!0}finally{F.p=i,C.T=a,xf(e,t)}}function Df(e,t,n){t=Xt(n,t),t=_l(e.stateNode,t,2),e=$n(e,t,2),e!==null&&(Xe(e,2),dn(e))}function ke(e,t,n){if(e.tag===3)Df(e,e,n);else for(;t!==null;){if(t.tag===3){Df(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(oa===null||!oa.has(a))){e=Xt(n,e),n=Dh(2),a=$n(t,n,2),a!==null&&(Lh(n,a,t,e),Xe(a,2),dn(a));break}}t=t.return}}function pc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new _y;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(sc=!0,i.add(n),e=Yy.bind(null,e,t,n),t.then(e,e))}function Yy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ge===e&&(Ce&n)===n&&(qe===4||qe===3&&(Ce&62914560)===Ce&&300>yt()-Us?(Ie&2)===0&&Ei(e,0):rc|=n,Pi===Ce&&(Pi=0)),dn(e)}function Lf(e,t){t===0&&(t=ft()),e=Da(e,t),e!==null&&(Xe(e,t),dn(e))}function Ky(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function Jy(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Lf(e,n)}function Qy(e,t){return ji(e,t)}var _s=null,Li=null,mc=!1,Xs=!1,gc=!1,la=0;function dn(e){e!==Li&&e.next===null&&(Li===null?_s=Li=e:Li=Li.next=e),Xs=!0,mc||(mc=!0,$y())}function Do(e,t){if(!gc&&Xs){gc=!0;do for(var n=!1,a=_s;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var u=a.suspendedLanes,g=a.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=i&~(u&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,kf(a,s))}else s=Ce,s=de(a,a===Ge?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||ze(a,s)||(n=!0,kf(a,s));a=a.next}while(n);gc=!1}}function Zy(){Bf()}function Bf(){Xs=mc=!1;var e=0;la!==0&&c0()&&(e=la);for(var t=yt(),n=null,a=_s;a!==null;){var i=a.next,s=If(a,t);s===0?(a.next=null,n===null?_s=i:n.next=i,i===null&&(Li=n)):(n=a,(e!==0||(s&3)!==0)&&(Xs=!0)),a=i}$e!==0&&$e!==5||Do(e),la!==0&&(la=0)}function If(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-ht(s),g=1<<u,A=i[u];A===-1?((g&n)===0||(g&a)!==0)&&(i[u]=tt(g,t)):A<=t&&(e.expiredLanes|=g),s&=~g}if(t=Ge,n=Ce,n=de(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&qi(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&qi(a),$t(n)){case 2:case 8:n=Wo;break;case 32:n=Aa;break;case 268435456:n=vn;break;default:n=Aa}return a=Nf.bind(null,e),n=ji(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&qi(a),e.callbackPriority=2,e.callbackNode=null,2}function Nf(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zs()&&e.callbackNode!==n)return null;var a=Ce;return a=de(e,e===Ge?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(pf(e,a,t),If(e,yt()),e.callbackNode!=null&&e.callbackNode===n?Nf.bind(null,e):null)}function kf(e,t){if(zs())return null;pf(e,t,!0)}function $y(){d0(function(){(Ie&6)!==0?ji(wa,Zy):Bf()})}function yc(){if(la===0){var e=mi;e===0&&(e=Ya,Ya<<=1,(Ya&261888)===0&&(Ya=256)),la=e}return la}function Of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Uf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function e0(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var s=Of((i[St]||null).action),u=a.submitter;u&&(t=(t=u[St]||null)?Of(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var g=new ns("action","action",null,a,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(la!==0){var A=u?Uf(i,u):new FormData(i);Rl(n,{pending:!0,data:A,method:i.method,action:s},null,A)}}else typeof s=="function"&&(g.preventDefault(),A=u?Uf(i,u):new FormData(i),Rl(n,{pending:!0,data:A,method:i.method,action:s},s,A))},currentTarget:i}]})}}for(var bc=0;bc<el.length;bc++){var vc=el[bc],t0=vc.toLowerCase(),n0=vc[0].toUpperCase()+vc.slice(1);en(t0,"on"+n0)}en(hd,"onAnimationEnd"),en(fd,"onAnimationIteration"),en(pd,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(by,"onTransitionRun"),en(vy,"onTransitionStart"),en(wy,"onTransitionCancel"),en(md,"onTransitionEnd"),ti("onMouseEnter",["mouseout","mouseover"]),ti("onMouseLeave",["mouseout","mouseover"]),ti("onPointerEnter",["pointerout","pointerover"]),ti("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var u=a.length-1;0<=u;u--){var g=a[u],A=g.instance,B=g.currentTarget;if(g=g.listener,A!==s&&i.isPropagationStopped())break e;s=g,i.currentTarget=B;try{s(i)}catch(U){os(U)}i.currentTarget=null,s=A}else for(u=0;u<a.length;u++){if(g=a[u],A=g.instance,B=g.currentTarget,g=g.listener,A!==s&&i.isPropagationStopped())break e;s=g,i.currentTarget=B;try{s(i)}catch(U){os(U)}i.currentTarget=null,s=A}}}}function Me(e,t){var n=t[Ir];n===void 0&&(n=t[Ir]=new Set);var a=e+"__bubble";n.has(a)||(Gf(t,e,2,!1),n.add(a))}function wc(e,t,n){var a=0;t&&(a|=4),Gf(n,e,a,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[js]){e[js]=!0,Lu.forEach(function(n){n!=="selectionchange"&&(a0.has(n)||wc(n,!1,e),wc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,wc("selectionchange",!1,t))}}function Gf(e,t,n,a){switch(fp(t)){case 2:var i=B0;break;case 8:i=I0;break;default:i=Uc}n=i.bind(null,t,n,e),i=void 0,!Vr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Tc(e,t,n,a,i){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var g=a.stateNode.containerInfo;if(g===i)break;if(u===4)for(u=a.return;u!==null;){var A=u.tag;if((A===3||A===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;g!==null;){if(u=Za(g),u===null)return;if(A=u.tag,A===5||A===6||A===26||A===27){a=s=u;continue e}g=g.parentNode}}a=a.return}zu(function(){var B=s,U=Hr(n),z=[];e:{var N=gd.get(e);if(N!==void 0){var O=ns,Z=e;switch(e){case"keypress":if(es(n)===0)break e;case"keydown":case"keyup":O=Jg;break;case"focusin":Z="focus",O=jr;break;case"focusout":Z="blur",O=jr;break;case"beforeblur":case"afterblur":O=jr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=$g;break;case hd:case fd:case pd:O=Vg;break;case md:O=ty;break;case"scroll":case"scrollend":O=Ug;break;case"wheel":O=ay;break;case"copy":case"cut":case"paste":O=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Wu;break;case"toggle":case"beforetoggle":O=oy}var ce=(t&4)!==0,Re=!ce&&(e==="scroll"||e==="scrollend"),P=ce?N!==null?N+"Capture":null:N;ce=[];for(var S=B,L;S!==null;){var V=S;if(L=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||L===null||P===null||(V=Qi(S,P),V!=null&&ce.push(Bo(S,V,L))),Re)break;S=S.return}0<ce.length&&(N=new O(N,Z,null,n,U),z.push({event:N,listeners:ce}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&n!==Gr&&(Z=n.relatedTarget||n.fromElement)&&(Za(Z)||Z[Qa]))break e;if((O||N)&&(N=U.window===U?U:(N=U.ownerDocument)?N.defaultView||N.parentWindow:window,O?(Z=n.relatedTarget||n.toElement,O=B,Z=Z?Za(Z):null,Z!==null&&(Re=h(Z),ce=Z.tag,Z!==Re||ce!==5&&ce!==27&&ce!==6)&&(Z=null)):(O=null,Z=B),O!==Z)){if(ce=ju,V="onMouseLeave",P="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Wu,V="onPointerLeave",P="onPointerEnter",S="pointer"),Re=O==null?N:Ji(O),L=Z==null?N:Ji(Z),N=new ce(V,S+"leave",O,n,U),N.target=Re,N.relatedTarget=L,V=null,Za(U)===B&&(ce=new ce(P,S+"enter",Z,n,U),ce.target=L,ce.relatedTarget=Re,V=ce),Re=V,O&&Z)t:{for(ce=i0,P=O,S=Z,L=0,V=P;V;V=ce(V))L++;V=0;for(var re=S;re;re=ce(re))V++;for(;0<L-V;)P=ce(P),L--;for(;0<V-L;)S=ce(S),V--;for(;L--;){if(P===S||S!==null&&P===S.alternate){ce=P;break t}P=ce(P),S=ce(S)}ce=null}else ce=null;O!==null&&Hf(z,N,O,ce,!1),Z!==null&&Re!==null&&Hf(z,Re,Z,ce,!0)}}e:{if(N=B?Ji(B):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var Le=td;else if($u(N))if(nd)Le=my;else{Le=fy;var ae=hy}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?B&&Rr(B.elementType)&&(Le=td):Le=py;if(Le&&(Le=Le(e,B))){ed(z,Le,n,U);break e}ae&&ae(e,N,B),e==="focusout"&&B&&N.type==="number"&&B.memoizedProps.value!=null&&Ur(N,"number",N.value)}switch(ae=B?Ji(B):window,e){case"focusin":($u(ae)||ae.contentEditable==="true")&&(ri=ae,Qr=B,oo=null);break;case"focusout":oo=Qr=ri=null;break;case"mousedown":Zr=!0;break;case"contextmenu":case"mouseup":case"dragend":Zr=!1,ud(z,n,U);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":ud(z,n,U)}var ye;if(Wr)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else si?Qu(e,n)&&(Pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Pe="onCompositionStart");Pe&&(Yu&&n.locale!=="ko"&&(si||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&si&&(ye=_u()):(qn=U,zr="value"in qn?qn.value:qn.textContent,si=!0)),ae=qs(B,Pe),0<ae.length&&(Pe=new qu(Pe,e,null,n,U),z.push({event:Pe,listeners:ae}),ye?Pe.data=ye:(ye=Zu(n),ye!==null&&(Pe.data=ye)))),(ye=ry?ly(e,n):cy(e,n))&&(Pe=qs(B,"onBeforeInput"),0<Pe.length&&(ae=new qu("onBeforeInput","beforeinput",null,n,U),z.push({event:ae,listeners:Pe}),ae.data=ye)),e0(z,e,B,n,U)}Rf(z,t)})}function Bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qs(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Qi(e,n),i!=null&&a.unshift(Bo(e,i,s)),i=Qi(e,t),i!=null&&a.push(Bo(e,i,s))),e.tag===3)return a;e=e.return}return[]}function i0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hf(e,t,n,a,i){for(var s=t._reactName,u=[];n!==null&&n!==a;){var g=n,A=g.alternate,B=g.stateNode;if(g=g.tag,A!==null&&A===a)break;g!==5&&g!==26&&g!==27||B===null||(A=B,i?(B=Qi(n,s),B!=null&&u.unshift(Bo(n,B,A))):i||(B=Qi(n,s),B!=null&&u.push(Bo(n,B,A)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var o0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function Ff(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(s0,"")}function Vf(e,t){return t=Ff(t),Ff(e)===t}function Ue(e,t,n,a,i,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ai(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ai(e,""+a);break;case"className":Jo(e,"class",a);break;case"tabIndex":Jo(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Jo(e,n,a);break;case"style":Fu(e,a,s);break;case"data":if(t!=="object"){Jo(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Zo(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",i.name,i,null),Ue(e,t,"formEncType",i.formEncType,i,null),Ue(e,t,"formMethod",i.formMethod,i,null),Ue(e,t,"formTarget",i.formTarget,i,null)):(Ue(e,t,"encType",i.encType,i,null),Ue(e,t,"method",i.method,i,null),Ue(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Zo(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=An);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Zo(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Ko(e,"popover",a);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ko(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kg.get(n)||n,Ko(e,n,a))}}function Sc(e,t,n,a,i,s){switch(n){case"style":Fu(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ai(e,a):(typeof a=="number"||typeof a=="bigint")&&ai(e,""+a);break;case"onScroll":a!=null&&Me("scroll",e);break;case"onScrollEnd":a!=null&&Me("scrollend",e);break;case"onClick":a!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),s=e[St]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ko(e,n,a)}}}function dt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var u=n[s];if(u!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,s,u,n,null)}}i&&Ue(e,t,"srcSet",n.srcSet,n,null),a&&Ue(e,t,"src",n.src,n,null);return;case"input":Me("invalid",e);var g=s=u=i=null,A=null,B=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":i=U;break;case"type":u=U;break;case"checked":A=U;break;case"defaultChecked":B=U;break;case"value":s=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:Ue(e,t,a,U,n,null)}}Uu(e,s,g,A,B,u,i,!1);return;case"select":Me("invalid",e),a=u=s=null;for(i in n)if(n.hasOwnProperty(i)&&(g=n[i],g!=null))switch(i){case"value":s=g;break;case"defaultValue":u=g;break;case"multiple":a=g;default:Ue(e,t,i,g,n,null)}t=s,n=u,e.multiple=!!a,t!=null?ni(e,!!a,t,!1):n!=null&&ni(e,!!a,n,!0);return;case"textarea":Me("invalid",e),s=i=a=null;for(u in n)if(n.hasOwnProperty(u)&&(g=n[u],g!=null))switch(u){case"value":a=g;break;case"defaultValue":i=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(l(91));break;default:Ue(e,t,u,g,n,null)}Gu(e,a,i,s);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ue(e,t,A,a,n,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Me(Lo[a],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(a=n[B],a!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,B,a,n,null)}return;default:if(Rr(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Sc(e,t,U,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&Ue(e,t,g,a,n,null))}function r0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,u=null,g=null,A=null,B=null,U=null;for(O in n){var z=n[O];if(n.hasOwnProperty(O)&&z!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":A=z;default:a.hasOwnProperty(O)||Ue(e,t,O,null,a,z)}}for(var N in a){var O=a[N];if(z=n[N],a.hasOwnProperty(N)&&(O!=null||z!=null))switch(N){case"type":s=O;break;case"name":i=O;break;case"checked":B=O;break;case"defaultChecked":U=O;break;case"value":u=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,t));break;default:O!==z&&Ue(e,t,N,O,a,z)}}Or(e,u,g,A,B,U,s,i);return;case"select":O=u=g=N=null;for(s in n)if(A=n[s],n.hasOwnProperty(s)&&A!=null)switch(s){case"value":break;case"multiple":O=A;default:a.hasOwnProperty(s)||Ue(e,t,s,null,a,A)}for(i in a)if(s=a[i],A=n[i],a.hasOwnProperty(i)&&(s!=null||A!=null))switch(i){case"value":N=s;break;case"defaultValue":g=s;break;case"multiple":u=s;default:s!==A&&Ue(e,t,i,s,a,A)}t=g,n=u,a=O,N!=null?ni(e,!!n,N,!1):!!a!=!!n&&(t!=null?ni(e,!!n,t,!0):ni(e,!!n,n?[]:"",!1));return;case"textarea":O=N=null;for(g in n)if(i=n[g],n.hasOwnProperty(g)&&i!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ue(e,t,g,null,a,i)}for(u in a)if(i=a[u],s=n[u],a.hasOwnProperty(u)&&(i!=null||s!=null))switch(u){case"value":N=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(l(91));break;default:i!==s&&Ue(e,t,u,i,a,s)}Ru(e,N,O);return;case"option":for(var Z in n)if(N=n[Z],n.hasOwnProperty(Z)&&N!=null&&!a.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Ue(e,t,Z,null,a,N)}for(A in a)if(N=a[A],O=n[A],a.hasOwnProperty(A)&&N!==O&&(N!=null||O!=null))switch(A){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ue(e,t,A,N,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)N=n[ce],n.hasOwnProperty(ce)&&N!=null&&!a.hasOwnProperty(ce)&&Ue(e,t,ce,null,a,N);for(B in a)if(N=a[B],O=n[B],a.hasOwnProperty(B)&&N!==O&&(N!=null||O!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,t));break;default:Ue(e,t,B,N,a,O)}return;default:if(Rr(t)){for(var Re in n)N=n[Re],n.hasOwnProperty(Re)&&N!==void 0&&!a.hasOwnProperty(Re)&&Sc(e,t,Re,void 0,a,N);for(U in a)N=a[U],O=n[U],!a.hasOwnProperty(U)||N===O||N===void 0&&O===void 0||Sc(e,t,U,N,a,O);return}}for(var P in n)N=n[P],n.hasOwnProperty(P)&&N!=null&&!a.hasOwnProperty(P)&&Ue(e,t,P,null,a,N);for(z in a)N=a[z],O=n[z],!a.hasOwnProperty(z)||N===O||N==null&&O==null||Ue(e,t,z,N,a,O)}function zf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],s=i.transferSize,u=i.initiatorType,g=i.duration;if(s&&g&&zf(u)){for(u=0,g=i.responseEnd,a+=1;a<n.length;a++){var A=n[a],B=A.startTime;if(B>g)break;var U=A.transferSize,z=A.initiatorType;U&&zf(z)&&(A=A.responseEnd,u+=U*(A<g?1:(g-B)/(A-B)))}if(--a,t+=8*(s+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mc=null,Cc=null;function Ws(e){return e.nodeType===9?e:e.ownerDocument}function _f(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=null;function c0(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var jf=typeof setTimeout=="function"?setTimeout:void 0,u0=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,d0=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(h0)}:jf;function h0(e){setTimeout(function(){throw e})}function ca(e){return e==="head"}function Wf(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),ki(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Io(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Io(n);for(var s=n.firstChild;s;){var u=s.nextSibling,g=s.nodeName;s[Ki]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=u}}else n==="body"&&Io(e.ownerDocument.body);n=i}while(n);ki(t)}function Yf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ec(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ec(n),Nr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function f0(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ki])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function p0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function Kf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function Dc(e){return e.data==="$?"||e.data==="$~"}function Lc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function m0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Bc=null;function Jf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Zf(e,t,n){switch(t=Ws(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Io(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nr(e)}var Jt=new Map,$f=new Set;function Ys(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rn=F.d;F.d={f:g0,r:y0,D:b0,C:v0,L:w0,m:A0,X:S0,S:T0,M:M0};function g0(){var e=Rn.f(),t=Hs();return e||t}function y0(e){var t=$a(e);t!==null&&t.tag===5&&t.type==="form"?mh(t):Rn.r(e)}var Bi=typeof document>"u"?null:document;function ep(e,t,n){var a=Bi;if(a&&typeof t=="string"&&t){var i=zt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),$f.has(i)||($f.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),dt(t,"link",e),nt(t),a.head.appendChild(t)))}}function b0(e){Rn.D(e),ep("dns-prefetch",e,null)}function v0(e,t){Rn.C(e,t),ep("preconnect",e,t)}function w0(e,t,n){Rn.L(e,t,n);var a=Bi;if(a&&e&&t){var i='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+zt(n.imageSizes)+'"]')):i+='[href="'+zt(e)+'"]';var s=i;switch(t){case"style":s=Ii(e);break;case"script":s=Ni(e)}Jt.has(s)||(e=p({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Jt.set(s,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(No(s))||t==="script"&&a.querySelector(ko(s))||(t=a.createElement("link"),dt(t,"link",e),nt(t),a.head.appendChild(t)))}}function A0(e,t){Rn.m(e,t);var n=Bi;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+zt(a)+'"][href="'+zt(e)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ni(e)}if(!Jt.has(s)&&(e=p({rel:"modulepreload",href:e},t),Jt.set(s,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ko(s)))return}a=n.createElement("link"),dt(a,"link",e),nt(a),n.head.appendChild(a)}}}function T0(e,t,n){Rn.S(e,t,n);var a=Bi;if(a&&e){var i=ei(a).hoistableStyles,s=Ii(e);t=t||"default";var u=i.get(s);if(!u){var g={loading:0,preload:null};if(u=a.querySelector(No(s)))g.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Jt.get(s))&&Ic(e,n);var A=u=a.createElement("link");nt(A),dt(A,"link",e),A._p=new Promise(function(B,U){A.onload=B,A.onerror=U}),A.addEventListener("load",function(){g.loading|=1}),A.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ks(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:g},i.set(s,u)}}}function S0(e,t){Rn.X(e,t);var n=Bi;if(n&&e){var a=ei(n).hoistableScripts,i=Ni(e),s=a.get(i);s||(s=n.querySelector(ko(i)),s||(e=p({src:e,async:!0},t),(t=Jt.get(i))&&Nc(e,t),s=n.createElement("script"),nt(s),dt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function M0(e,t){Rn.M(e,t);var n=Bi;if(n&&e){var a=ei(n).hoistableScripts,i=Ni(e),s=a.get(i);s||(s=n.querySelector(ko(i)),s||(e=p({src:e,async:!0,type:"module"},t),(t=Jt.get(i))&&Nc(e,t),s=n.createElement("script"),nt(s),dt(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function tp(e,t,n,a){var i=(i=se.current)?Ys(i):null;if(!i)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ii(n.href),n=ei(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ii(n.href);var s=ei(i).hoistableStyles,u=s.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=i.querySelector(No(e)))&&!s._p&&(u.instance=s,u.state.loading=5),Jt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jt.set(e,n),s||C0(i,e,n,u.state))),t&&a===null)throw Error(l(528,""));return u}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ni(n),n=ei(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ii(e){return'href="'+zt(e)+'"'}function No(e){return'link[rel="stylesheet"]['+e+"]"}function np(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function C0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),dt(t,"link",n),nt(t),e.head.appendChild(t))}function Ni(e){return'[src="'+zt(e)+'"]'}function ko(e){return"script[async]"+e}function ap(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(a)return t.instance=a,nt(a),a;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),dt(a,"style",i),Ks(a,n.precedence,e),t.instance=a;case"stylesheet":i=Ii(n.href);var s=e.querySelector(No(i));if(s)return t.state.loading|=4,t.instance=s,nt(s),s;a=np(n),(i=Jt.get(i))&&Ic(a,i),s=(e.ownerDocument||e).createElement("link"),nt(s);var u=s;return u._p=new Promise(function(g,A){u.onload=g,u.onerror=A}),dt(s,"link",a),t.state.loading|=4,Ks(s,n.precedence,e),t.instance=s;case"script":return s=Ni(n.src),(i=e.querySelector(ko(s)))?(t.instance=i,nt(i),i):(a=n,(i=Jt.get(s))&&(a=p({},n),Nc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),nt(i),dt(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ks(a,n.precedence,e));return t.instance}function Ks(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,u=0;u<a.length;u++){var g=a[u];if(g.dataset.precedence===t)s=g;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Js=null;function ip(e,t,n){if(Js===null){var a=new Map,i=Js=new Map;i.set(n,a)}else i=Js,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var s=n[i];if(!(s[Ki]||s[rt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var g=a.get(u);g?g.push(s):a.set(u,[s])}}return a}function op(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function P0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function x0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ii(a.href),s=t.querySelector(No(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qs.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,nt(s);return}s=t.ownerDocument||t,a=np(a),(i=Jt.get(i))&&Ic(a,i),s=s.createElement("link"),nt(s);var u=s;u._p=new Promise(function(g,A){u.onload=g,u.onerror=A}),dt(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Qs.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var kc=0;function E0(e,t){return e.stylesheets&&e.count===0&&$s(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&kc===0&&(kc=62500*l0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$s(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>kc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Qs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zs=null;function $s(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zs=new Map,t.forEach(D0,e),Zs=null,Qs.call(e))}function D0(e,t){if(!(t.state.loading&4)){var n=Zs.get(e);if(n)var a=n.get(null);else{n=new Map,Zs.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var u=i[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}i=t.instance,u=i.getAttribute("data-precedence"),s=n.get(u)||a,s===a&&n.set(null,i),n.set(u,i),this.count++,a=Qs.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Oo={$$typeof:Y,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function L0(e,t,n,a,i,s,u,g,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xn(0),this.hiddenUpdates=Xn(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function rp(e,t,n,a,i,s,u,g,A,B,U,z){return e=new L0(e,t,n,u,A,B,U,z,g),t=1,s===!0&&(t|=24),s=Nt(3,null,null,t),e.current=s,s.stateNode=e,t=fl(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},yl(s),e}function lp(e){return e?(e=ui,e):ui}function cp(e,t,n,a,i,s){i=lp(i),a.context===null?a.context=i:a.pendingContext=i,a=Zn(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=$n(e,a,t),n!==null&&(Dt(n,e,t),fo(n,e,t))}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oc(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function dp(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Dt(t,e,67108864),Oc(e,67108864)}}function hp(e){if(e.tag===13||e.tag===31){var t=Gt();t=Ja(t);var n=Da(e,t);n!==null&&Dt(n,e,t),Oc(e,t)}}var er=!0;function B0(e,t,n,a){var i=C.T;C.T=null;var s=F.p;try{F.p=2,Uc(e,t,n,a)}finally{F.p=s,C.T=i}}function I0(e,t,n,a){var i=C.T;C.T=null;var s=F.p;try{F.p=8,Uc(e,t,n,a)}finally{F.p=s,C.T=i}}function Uc(e,t,n,a){if(er){var i=Rc(a);if(i===null)Tc(e,t,a,tr,n),pp(e,a);else if(k0(i,e,t,n,a))a.stopPropagation();else if(pp(e,a),t&4&&-1<N0.indexOf(e)){for(;i!==null;){var s=$a(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=rn(s.pendingLanes);if(u!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var A=1<<31-ht(u);g.entanglements[1]|=A,u&=~A}dn(s),(Ie&6)===0&&(Rs=yt()+500,Do(0))}}break;case 31:case 13:g=Da(s,2),g!==null&&Dt(g,s,2),Hs(),Oc(s,2)}if(s=Rc(a),s===null&&Tc(e,t,a,tr,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Tc(e,t,a,null,n)}}function Rc(e){return e=Hr(e),Gc(e)}var tr=null;function Gc(e){if(tr=null,e=Za(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return tr=e,null}function fp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dr()){case wa:return 2;case Wo:return 8;case Aa:case Wi:return 32;case vn:return 268435456;default:return 32}default:return 32}}var Hc=!1,ua=null,da=null,ha=null,Uo=new Map,Ro=new Map,fa=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pp(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Uo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Go(e,t,n,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&dp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function k0(e,t,n,a,i){switch(t){case"focusin":return ua=Go(ua,e,t,n,a,i),!0;case"dragenter":return da=Go(da,e,t,n,a,i),!0;case"mouseover":return ha=Go(ha,e,t,n,a,i),!0;case"pointerover":var s=i.pointerId;return Uo.set(s,Go(Uo.get(s)||null,e,t,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Go(Ro.get(s)||null,e,t,n,a,i)),!0}return!1}function mp(e){var t=Za(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){hp(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Gr=a,n.target.dispatchEvent(a),Gr=null}else return t=$a(n),t!==null&&dp(t),e.blockedOn=n,!1;t.shift()}return!0}function gp(e,t,n){nr(e)&&n.delete(t)}function O0(){Hc=!1,ua!==null&&nr(ua)&&(ua=null),da!==null&&nr(da)&&(da=null),ha!==null&&nr(ha)&&(ha=null),Uo.forEach(gp),Ro.forEach(gp)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Hc||(Hc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,O0)))}var ir=null;function yp(e){ir!==e&&(ir=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ir===e&&(ir=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(Gc(a||n)===null)continue;break}var s=$a(n);s!==null&&(e.splice(t,3),t-=3,Rl(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ki(e){function t(A){return ar(A,e)}ua!==null&&ar(ua,e),da!==null&&ar(da,e),ha!==null&&ar(ha,e),Uo.forEach(t),Ro.forEach(t);for(var n=0;n<fa.length;n++){var a=fa[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<fa.length&&(n=fa[0],n.blockedOn===null);)mp(n),n.blockedOn===null&&fa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],u=i[St]||null;if(typeof s=="function")u||yp(n);else if(u){var g=null;if(s&&s.hasAttribute("formAction")){if(i=s,u=s[St]||null)g=u.formAction;else if(Gc(i)!==null)continue}else g=u.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),yp(n)}}}function bp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Fc(e){this._internalRoot=e}or.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,a=Gt();cp(n,a,e,t,null,null)},or.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cp(e.current,2,null,e,null,null),Hs(),t[Qa]=null}};function or(e){this._internalRoot=e}or.prototype.unstable_scheduleHydration=function(e){if(e){var t=Br();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fa.length&&t!==0&&t<fa[n].priority;n++);fa.splice(n,0,e),n===0&&mp(e)}};var vp=r.version;if(vp!=="19.2.1")throw Error(l(527,vp,"19.2.1"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var U0={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sr.isDisabled&&sr.supportsFiber)try{Ta=sr.inject(U0),bt=sr}catch{}}return Fo.createRoot=function(e,t){if(!d(e))throw Error(l(299));var n=!1,a="",i=Ch,s=Ph,u=xh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,a,null,i,s,u,bp),e[Qa]=t.current,Ac(e),new Fc(t)},Fo.hydrateRoot=function(e,t,n){if(!d(e))throw Error(l(299));var a=!1,i="",s=Ch,u=Ph,g=xh,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(A=n.formState)),t=rp(e,1,!0,t,n??null,a,i,A,s,u,g,bp),t.context=lp(null),n=t.current,a=Gt(),a=Ja(a),i=Zn(a),i.callback=null,$n(n,i,a),n=a,t.current.lanes=n,Xe(t,n),dn(t),e[Qa]=t.current,Ac(e),new or(t)},Fo.version="19.2.1",Fo}var Dp;function q0(){if(Dp)return zc.exports;Dp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),zc.exports=j0(),zc.exports}var W0=q0(),I=vr();const W=mm(I),Y0=G0({__proto__:null,default:W},[I]);var K0=(o,r,c,l,d,h,f,v)=>{let y=document.documentElement,m=["light","dark"];function b(M){(Array.isArray(o)?o:[o]).forEach(D=>{let E=D==="class",H=E&&h?d.map(_=>h[_]||_):d;E?(y.classList.remove(...H),y.classList.add(h&&h[M]?h[M]:M)):y.setAttribute(D,M)}),p(M)}function p(M){v&&m.includes(M)&&(y.style.colorScheme=M)}function x(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(l)b(l);else try{let M=localStorage.getItem(r)||c,D=f&&M==="system"?x():M;b(D)}catch{}},J0=I.createContext(void 0),Q0={setTheme:o=>{},themes:[]},Z0=()=>{var o;return(o=I.useContext(J0))!=null?o:Q0};I.memo(({forcedTheme:o,storageKey:r,attribute:c,enableSystem:l,enableColorScheme:d,defaultTheme:h,value:f,themes:v,nonce:y,scriptProps:m})=>{let b=JSON.stringify([c,r,h,o,v,f,l,d]).slice(1,-1);return I.createElement("script",{...m,suppressHydrationWarning:!0,nonce:typeof window>"u"?y:"",dangerouslySetInnerHTML:{__html:`(${K0.toString()})(${b})`}})});var uu=gm();const $0=mm(uu);function eb(o){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",r.appendChild(c),c.styleSheet?c.styleSheet.cssText=o:c.appendChild(document.createTextNode(o))}const tb=o=>{switch(o){case"success":return ib;case"info":return sb;case"warning":return ob;case"error":return rb;default:return null}},nb=Array(12).fill(0),ab=({visible:o,className:r})=>W.createElement("div",{className:["sonner-loading-wrapper",r].filter(Boolean).join(" "),"data-visible":o},W.createElement("div",{className:"sonner-spinner"},nb.map((c,l)=>W.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${l}`})))),ib=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),ob=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),sb=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),rb=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),lb=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),W.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),cb=()=>{const[o,r]=W.useState(document.hidden);return W.useEffect(()=>{const c=()=>{r(document.hidden)};return document.addEventListener("visibilitychange",c),()=>window.removeEventListener("visibilitychange",c)},[]),o};let eu=1;class ub{constructor(){this.subscribe=r=>(this.subscribers.push(r),()=>{const c=this.subscribers.indexOf(r);this.subscribers.splice(c,1)}),this.publish=r=>{this.subscribers.forEach(c=>c(r))},this.addToast=r=>{this.publish(r),this.toasts=[...this.toasts,r]},this.create=r=>{var c;const{message:l,...d}=r,h=typeof r?.id=="number"||((c=r.id)==null?void 0:c.length)>0?r.id:eu++,f=this.toasts.find(y=>y.id===h),v=r.dismissible===void 0?!0:r.dismissible;return this.dismissedToasts.has(h)&&this.dismissedToasts.delete(h),f?this.toasts=this.toasts.map(y=>y.id===h?(this.publish({...y,...r,id:h,title:l}),{...y,...r,id:h,dismissible:v,title:l}):y):this.addToast({title:l,...d,dismissible:v,id:h}),h},this.dismiss=r=>(r?(this.dismissedToasts.add(r),requestAnimationFrame(()=>this.subscribers.forEach(c=>c({id:r,dismiss:!0})))):this.toasts.forEach(c=>{this.subscribers.forEach(l=>l({id:c.id,dismiss:!0}))}),r),this.message=(r,c)=>this.create({...c,message:r}),this.error=(r,c)=>this.create({...c,message:r,type:"error"}),this.success=(r,c)=>this.create({...c,type:"success",message:r}),this.info=(r,c)=>this.create({...c,type:"info",message:r}),this.warning=(r,c)=>this.create({...c,type:"warning",message:r}),this.loading=(r,c)=>this.create({...c,type:"loading",message:r}),this.promise=(r,c)=>{if(!c)return;let l;c.loading!==void 0&&(l=this.create({...c,promise:r,type:"loading",message:c.loading,description:typeof c.description!="function"?c.description:void 0}));const d=Promise.resolve(r instanceof Function?r():r);let h=l!==void 0,f;const v=d.then(async m=>{if(f=["resolve",m],W.isValidElement(m))h=!1,this.create({id:l,type:"default",message:m});else if(hb(m)&&!m.ok){h=!1;const p=typeof c.error=="function"?await c.error(`HTTP error! status: ${m.status}`):c.error,x=typeof c.description=="function"?await c.description(`HTTP error! status: ${m.status}`):c.description,D=typeof p=="object"&&!W.isValidElement(p)?p:{message:p};this.create({id:l,type:"error",description:x,...D})}else if(m instanceof Error){h=!1;const p=typeof c.error=="function"?await c.error(m):c.error,x=typeof c.description=="function"?await c.description(m):c.description,D=typeof p=="object"&&!W.isValidElement(p)?p:{message:p};this.create({id:l,type:"error",description:x,...D})}else if(c.success!==void 0){h=!1;const p=typeof c.success=="function"?await c.success(m):c.success,x=typeof c.description=="function"?await c.description(m):c.description,D=typeof p=="object"&&!W.isValidElement(p)?p:{message:p};this.create({id:l,type:"success",description:x,...D})}}).catch(async m=>{if(f=["reject",m],c.error!==void 0){h=!1;const b=typeof c.error=="function"?await c.error(m):c.error,p=typeof c.description=="function"?await c.description(m):c.description,M=typeof b=="object"&&!W.isValidElement(b)?b:{message:b};this.create({id:l,type:"error",description:p,...M})}}).finally(()=>{h&&(this.dismiss(l),l=void 0),c.finally==null||c.finally.call(c)}),y=()=>new Promise((m,b)=>v.then(()=>f[0]==="reject"?b(f[1]):m(f[1])).catch(b));return typeof l!="string"&&typeof l!="number"?{unwrap:y}:Object.assign(l,{unwrap:y})},this.custom=(r,c)=>{const l=c?.id||eu++;return this.create({jsx:r(l),id:l,...c}),l},this.getActiveToasts=()=>this.toasts.filter(r=>!this.dismissedToasts.has(r.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Lt=new ub,db=(o,r)=>{const c=r?.id||eu++;return Lt.addToast({title:o,...r,id:c}),c},hb=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",fb=db,pb=()=>Lt.toasts,mb=()=>Lt.getActiveToasts();Object.assign(fb,{success:Lt.success,info:Lt.info,warning:Lt.warning,error:Lt.error,custom:Lt.custom,message:Lt.message,promise:Lt.promise,dismiss:Lt.dismiss,loading:Lt.loading},{getHistory:pb,getToasts:mb});eb("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function rr(o){return o.label!==void 0}const gb=3,yb="24px",bb="16px",Lp=4e3,vb=356,wb=14,Ab=45,Tb=200;function hn(...o){return o.filter(Boolean).join(" ")}function Sb(o){const[r,c]=o.split("-"),l=[];return r&&l.push(r),c&&l.push(c),l}const Mb=o=>{var r,c,l,d,h,f,v,y,m;const{invert:b,toast:p,unstyled:x,interacting:M,setHeights:D,visibleToasts:E,heights:H,index:_,toasts:K,expanded:Y,removeToast:Q,defaultRichColors:$,closeButton:ie,style:j,cancelButtonStyle:q,actionButtonStyle:fe,className:Te="",descriptionClassName:De="",duration:me,position:ge,gap:ve,expandByDefault:Ae,classNames:C,icons:F,closeButtonAriaLabel:k="Close toast"}=o,[oe,le]=W.useState(null),[T,G]=W.useState(null),[R,X]=W.useState(!1),[J,se]=W.useState(!1),[ne,ue]=W.useState(!1),[xe,ot]=W.useState(!1),[mt,st]=W.useState(!1),[bn,Qt]=W.useState(0),[_i,Wa]=W.useState(0),va=W.useRef(p.duration||me||Lp),Xi=W.useRef(null),Bt=W.useRef(null),ji=_===0,qi=_+1<=E,gt=p.type,zn=p.dismissible!==!1,yt=p.className||"",Dr=p.descriptionClassName||"",wa=W.useMemo(()=>H.findIndex(de=>de.toastId===p.id)||0,[H,p.id]),Wo=W.useMemo(()=>{var de;return(de=p.closeButton)!=null?de:ie},[p.closeButton,ie]),Aa=W.useMemo(()=>p.duration||me||Lp,[p.duration,me]),Wi=W.useRef(0),vn=W.useRef(0),Yo=W.useRef(0),_n=W.useRef(null),[Ta,bt]=ge.split("-"),Zt=W.useMemo(()=>H.reduce((de,ze,tt)=>tt>=wa?de:de+ze.height,0),[H,wa]),ht=cb(),Lr=p.invert||b,Yi=gt==="loading";vn.current=W.useMemo(()=>wa*ve+Zt,[wa,Zt]),W.useEffect(()=>{va.current=Aa},[Aa]),W.useEffect(()=>{X(!0)},[]),W.useEffect(()=>{const de=Bt.current;if(de){const ze=de.getBoundingClientRect().height;return Wa(ze),D(tt=>[{toastId:p.id,height:ze,position:p.position},...tt]),()=>D(tt=>tt.filter(ft=>ft.toastId!==p.id))}},[D,p.id]),W.useLayoutEffect(()=>{if(!R)return;const de=Bt.current,ze=de.style.height;de.style.height="auto";const tt=de.getBoundingClientRect().height;de.style.height=ze,Wa(tt),D(ft=>ft.find(Xe=>Xe.toastId===p.id)?ft.map(Xe=>Xe.toastId===p.id?{...Xe,height:tt}:Xe):[{toastId:p.id,height:tt,position:p.position},...ft])},[R,p.title,p.description,D,p.id,p.jsx,p.action,p.cancel]);const sn=W.useCallback(()=>{se(!0),Qt(vn.current),D(de=>de.filter(ze=>ze.toastId!==p.id)),setTimeout(()=>{Q(p)},Tb)},[p,Q,D,vn]);W.useEffect(()=>{if(p.promise&&gt==="loading"||p.duration===1/0||p.type==="loading")return;let de;return Y||M||ht?(()=>{if(Yo.current<Wi.current){const ft=new Date().getTime()-Wi.current;va.current=va.current-ft}Yo.current=new Date().getTime()})():(()=>{va.current!==1/0&&(Wi.current=new Date().getTime(),de=setTimeout(()=>{p.onAutoClose==null||p.onAutoClose.call(p,p),sn()},va.current))})(),()=>clearTimeout(de)},[Y,M,p,gt,ht,sn]),W.useEffect(()=>{p.delete&&(sn(),p.onDismiss==null||p.onDismiss.call(p,p))},[sn,p.delete]);function Ya(){var de;if(F?.loading){var ze;return W.createElement("div",{className:hn(C?.loader,p==null||(ze=p.classNames)==null?void 0:ze.loader,"sonner-loader"),"data-visible":gt==="loading"},F.loading)}return W.createElement(ab,{className:hn(C?.loader,p==null||(de=p.classNames)==null?void 0:de.loader),visible:gt==="loading"})}const Ka=p.icon||F?.[gt]||tb(gt);var Sa,rn;return W.createElement("li",{tabIndex:0,ref:Bt,className:hn(Te,yt,C?.toast,p==null||(r=p.classNames)==null?void 0:r.toast,C?.default,C?.[gt],p==null||(c=p.classNames)==null?void 0:c[gt]),"data-sonner-toast":"","data-rich-colors":(Sa=p.richColors)!=null?Sa:$,"data-styled":!(p.jsx||p.unstyled||x),"data-mounted":R,"data-promise":!!p.promise,"data-swiped":mt,"data-removed":J,"data-visible":qi,"data-y-position":Ta,"data-x-position":bt,"data-index":_,"data-front":ji,"data-swiping":ne,"data-dismissible":zn,"data-type":gt,"data-invert":Lr,"data-swipe-out":xe,"data-swipe-direction":T,"data-expanded":!!(Y||Ae&&R),"data-testid":p.testId,style:{"--index":_,"--toasts-before":_,"--z-index":K.length-_,"--offset":`${J?bn:vn.current}px`,"--initial-height":Ae?"auto":`${_i}px`,...j,...p.style},onDragEnd:()=>{ue(!1),le(null),_n.current=null},onPointerDown:de=>{de.button!==2&&(Yi||!zn||(Xi.current=new Date,Qt(vn.current),de.target.setPointerCapture(de.pointerId),de.target.tagName!=="BUTTON"&&(ue(!0),_n.current={x:de.clientX,y:de.clientY})))},onPointerUp:()=>{var de,ze,tt;if(xe||!zn)return;_n.current=null;const ft=Number(((de=Bt.current)==null?void 0:de.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Xn=Number(((ze=Bt.current)==null?void 0:ze.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Xe=new Date().getTime()-((tt=Xi.current)==null?void 0:tt.getTime()),wt=oe==="x"?ft:Xn,Ma=Math.abs(wt)/Xe;if(Math.abs(wt)>=Ab||Ma>.11){Qt(vn.current),p.onDismiss==null||p.onDismiss.call(p,p),G(oe==="x"?ft>0?"right":"left":Xn>0?"down":"up"),sn(),ot(!0);return}else{var At,Tt;(At=Bt.current)==null||At.style.setProperty("--swipe-amount-x","0px"),(Tt=Bt.current)==null||Tt.style.setProperty("--swipe-amount-y","0px")}st(!1),ue(!1),le(null)},onPointerMove:de=>{var ze,tt,ft;if(!_n.current||!zn||((ze=window.getSelection())==null?void 0:ze.toString().length)>0)return;const Xe=de.clientY-_n.current.y,wt=de.clientX-_n.current.x;var Ma;const At=(Ma=o.swipeDirections)!=null?Ma:Sb(ge);!oe&&(Math.abs(wt)>1||Math.abs(Xe)>1)&&le(Math.abs(wt)>Math.abs(Xe)?"x":"y");let Tt={x:0,y:0};const Ja=$t=>1/(1.5+Math.abs($t)/20);if(oe==="y"){if(At.includes("top")||At.includes("bottom"))if(At.includes("top")&&Xe<0||At.includes("bottom")&&Xe>0)Tt.y=Xe;else{const $t=Xe*Ja(Xe);Tt.y=Math.abs($t)<Math.abs(Xe)?$t:Xe}}else if(oe==="x"&&(At.includes("left")||At.includes("right")))if(At.includes("left")&&wt<0||At.includes("right")&&wt>0)Tt.x=wt;else{const $t=wt*Ja(wt);Tt.x=Math.abs($t)<Math.abs(wt)?$t:wt}(Math.abs(Tt.x)>0||Math.abs(Tt.y)>0)&&st(!0),(tt=Bt.current)==null||tt.style.setProperty("--swipe-amount-x",`${Tt.x}px`),(ft=Bt.current)==null||ft.style.setProperty("--swipe-amount-y",`${Tt.y}px`)}},Wo&&!p.jsx&&gt!=="loading"?W.createElement("button",{"aria-label":k,"data-disabled":Yi,"data-close-button":!0,onClick:Yi||!zn?()=>{}:()=>{sn(),p.onDismiss==null||p.onDismiss.call(p,p)},className:hn(C?.closeButton,p==null||(l=p.classNames)==null?void 0:l.closeButton)},(rn=F?.close)!=null?rn:lb):null,(gt||p.icon||p.promise)&&p.icon!==null&&(F?.[gt]!==null||p.icon)?W.createElement("div",{"data-icon":"",className:hn(C?.icon,p==null||(d=p.classNames)==null?void 0:d.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||Ya():null,p.type!=="loading"?Ka:null):null,W.createElement("div",{"data-content":"",className:hn(C?.content,p==null||(h=p.classNames)==null?void 0:h.content)},W.createElement("div",{"data-title":"",className:hn(C?.title,p==null||(f=p.classNames)==null?void 0:f.title)},p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title),p.description?W.createElement("div",{"data-description":"",className:hn(De,Dr,C?.description,p==null||(v=p.classNames)==null?void 0:v.description)},typeof p.description=="function"?p.description():p.description):null),W.isValidElement(p.cancel)?p.cancel:p.cancel&&rr(p.cancel)?W.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||q,onClick:de=>{rr(p.cancel)&&zn&&(p.cancel.onClick==null||p.cancel.onClick.call(p.cancel,de),sn())},className:hn(C?.cancelButton,p==null||(y=p.classNames)==null?void 0:y.cancelButton)},p.cancel.label):null,W.isValidElement(p.action)?p.action:p.action&&rr(p.action)?W.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||fe,onClick:de=>{rr(p.action)&&(p.action.onClick==null||p.action.onClick.call(p.action,de),!de.defaultPrevented&&sn())},className:hn(C?.actionButton,p==null||(m=p.classNames)==null?void 0:m.actionButton)},p.action.label):null)};function Bp(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function Cb(o,r){const c={};return[o,r].forEach((l,d)=>{const h=d===1,f=h?"--mobile-offset":"--offset",v=h?bb:yb;function y(m){["top","right","bottom","left"].forEach(b=>{c[`${f}-${b}`]=typeof m=="number"?`${m}px`:m})}typeof l=="number"||typeof l=="string"?y(l):typeof l=="object"?["top","right","bottom","left"].forEach(m=>{l[m]===void 0?c[`${f}-${m}`]=v:c[`${f}-${m}`]=typeof l[m]=="number"?`${l[m]}px`:l[m]}):y(v)}),c}const Pb=W.forwardRef(function(r,c){const{id:l,invert:d,position:h="bottom-right",hotkey:f=["altKey","KeyT"],expand:v,closeButton:y,className:m,offset:b,mobileOffset:p,theme:x="light",richColors:M,duration:D,style:E,visibleToasts:H=gb,toastOptions:_,dir:K=Bp(),gap:Y=wb,icons:Q,containerAriaLabel:$="Notifications"}=r,[ie,j]=W.useState([]),q=W.useMemo(()=>l?ie.filter(R=>R.toasterId===l):ie.filter(R=>!R.toasterId),[ie,l]),fe=W.useMemo(()=>Array.from(new Set([h].concat(q.filter(R=>R.position).map(R=>R.position)))),[q,h]),[Te,De]=W.useState([]),[me,ge]=W.useState(!1),[ve,Ae]=W.useState(!1),[C,F]=W.useState(x!=="system"?x:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),k=W.useRef(null),oe=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),le=W.useRef(null),T=W.useRef(!1),G=W.useCallback(R=>{j(X=>{var J;return(J=X.find(se=>se.id===R.id))!=null&&J.delete||Lt.dismiss(R.id),X.filter(({id:se})=>se!==R.id)})},[]);return W.useEffect(()=>Lt.subscribe(R=>{if(R.dismiss){requestAnimationFrame(()=>{j(X=>X.map(J=>J.id===R.id?{...J,delete:!0}:J))});return}setTimeout(()=>{$0.flushSync(()=>{j(X=>{const J=X.findIndex(se=>se.id===R.id);return J!==-1?[...X.slice(0,J),{...X[J],...R},...X.slice(J+1)]:[R,...X]})})})}),[ie]),W.useEffect(()=>{if(x!=="system"){F(x);return}if(x==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?F("dark"):F("light")),typeof window>"u")return;const R=window.matchMedia("(prefers-color-scheme: dark)");try{R.addEventListener("change",({matches:X})=>{F(X?"dark":"light")})}catch{R.addListener(({matches:J})=>{try{F(J?"dark":"light")}catch(se){console.error(se)}})}},[x]),W.useEffect(()=>{ie.length<=1&&ge(!1)},[ie]),W.useEffect(()=>{const R=X=>{var J;if(f.every(ue=>X[ue]||X.code===ue)){var ne;ge(!0),(ne=k.current)==null||ne.focus()}X.code==="Escape"&&(document.activeElement===k.current||(J=k.current)!=null&&J.contains(document.activeElement))&&ge(!1)};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[f]),W.useEffect(()=>{if(k.current)return()=>{le.current&&(le.current.focus({preventScroll:!0}),le.current=null,T.current=!1)}},[k.current]),W.createElement("section",{ref:c,"aria-label":`${$} ${oe}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},fe.map((R,X)=>{var J;const[se,ne]=R.split("-");return q.length?W.createElement("ol",{key:R,dir:K==="auto"?Bp():K,tabIndex:-1,ref:k,className:m,"data-sonner-toaster":!0,"data-sonner-theme":C,"data-y-position":se,"data-x-position":ne,style:{"--front-toast-height":`${((J=Te[0])==null?void 0:J.height)||0}px`,"--width":`${vb}px`,"--gap":`${Y}px`,...E,...Cb(b,p)},onBlur:ue=>{T.current&&!ue.currentTarget.contains(ue.relatedTarget)&&(T.current=!1,le.current&&(le.current.focus({preventScroll:!0}),le.current=null))},onFocus:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||T.current||(T.current=!0,le.current=ue.relatedTarget)},onMouseEnter:()=>ge(!0),onMouseMove:()=>ge(!0),onMouseLeave:()=>{ve||ge(!1)},onDragEnd:()=>ge(!1),onPointerDown:ue=>{ue.target instanceof HTMLElement&&ue.target.dataset.dismissible==="false"||Ae(!0)},onPointerUp:()=>Ae(!1)},q.filter(ue=>!ue.position&&X===0||ue.position===R).map((ue,xe)=>{var ot,mt;return W.createElement(Mb,{key:ue.id,icons:Q,index:xe,toast:ue,defaultRichColors:M,duration:(ot=_?.duration)!=null?ot:D,className:_?.className,descriptionClassName:_?.descriptionClassName,invert:d,visibleToasts:H,closeButton:(mt=_?.closeButton)!=null?mt:y,interacting:ve,position:R,style:_?.style,unstyled:_?.unstyled,classNames:_?.classNames,cancelButtonStyle:_?.cancelButtonStyle,actionButtonStyle:_?.actionButtonStyle,closeButtonAriaLabel:_?.closeButtonAriaLabel,removeToast:G,toasts:q.filter(st=>st.position==ue.position),heights:Te.filter(st=>st.position==ue.position),setHeights:De,expandByDefault:v,gap:Y,expanded:me,swipeDirections:r.swipeDirections})})):null}))}),xb=({...o})=>{const{theme:r="system"}=Z0();return w.jsx(Pb,{"data-loc":"client/src/components/ui/sonner.tsx:8",theme:r,className:"toaster group",style:{"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)"},...o})};function Hn(o,r,{checkForDefaultPrevented:c=!0}={}){return function(d){if(o?.(d),c===!1||!d.defaultPrevented)return r?.(d)}}function Ip(o,r){if(typeof o=="function")return o(r);o!=null&&(o.current=r)}function ym(...o){return r=>{let c=!1;const l=o.map(d=>{const h=Ip(d,r);return!c&&typeof h=="function"&&(c=!0),h});if(c)return()=>{for(let d=0;d<l.length;d++){const h=l[d];typeof h=="function"?h():Ip(o[d],null)}}}}function ja(...o){return I.useCallback(ym(...o),o)}function bm(o,r=[]){let c=[];function l(h,f){const v=I.createContext(f),y=c.length;c=[...c,f];const m=p=>{const{scope:x,children:M,...D}=p,E=x?.[o]?.[y]||v,H=I.useMemo(()=>D,Object.values(D));return w.jsx(E.Provider,{value:H,children:M})};m.displayName=h+"Provider";function b(p,x){const M=x?.[o]?.[y]||v,D=I.useContext(M);if(D)return D;if(f!==void 0)return f;throw new Error(`\`${p}\` must be used within \`${h}\``)}return[m,b]}const d=()=>{const h=c.map(f=>I.createContext(f));return function(v){const y=v?.[o]||h;return I.useMemo(()=>({[`__scope${o}`]:{...v,[o]:y}}),[v,y])}};return d.scopeName=o,[l,Eb(d,...r)]}function Eb(...o){const r=o[0];if(o.length===1)return r;const c=()=>{const l=o.map(d=>({useScope:d(),scopeName:d.scopeName}));return function(h){const f=l.reduce((v,{useScope:y,scopeName:m})=>{const p=y(h)[`__scope${m}`];return{...v,...p}},{});return I.useMemo(()=>({[`__scope${r.scopeName}`]:f}),[f])}};return c.scopeName=r.scopeName,c}function vm(o){const r=Lb(o),c=I.forwardRef((l,d)=>{const{children:h,...f}=l,v=I.Children.toArray(h),y=v.find(Ib);if(y){const m=y.props.children,b=v.map(p=>p===y?I.Children.count(m)>1?I.Children.only(null):I.isValidElement(m)?m.props.children:null:p);return w.jsx(r,{...f,ref:d,children:I.isValidElement(m)?I.cloneElement(m,void 0,b):null})}return w.jsx(r,{...f,ref:d,children:h})});return c.displayName=`${o}.Slot`,c}var Db=vm("Slot");function Lb(o){const r=I.forwardRef((c,l)=>{const{children:d,...h}=c;if(I.isValidElement(d)){const f=kb(d),v=Nb(h,d.props);return d.type!==I.Fragment&&(v.ref=l?ym(l,f):f),I.cloneElement(d,v)}return I.Children.count(d)>1?I.Children.only(null):null});return r.displayName=`${o}.SlotClone`,r}var wm=Symbol("radix.slottable");function Bb(o){const r=({children:c})=>w.jsx(w.Fragment,{children:c});return r.displayName=`${o}.Slottable`,r.__radixId=wm,r}function Ib(o){return I.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===wm}function Nb(o,r){const c={...r};for(const l in r){const d=o[l],h=r[l];/^on[A-Z]/.test(l)?d&&h?c[l]=(...v)=>{const y=h(...v);return d(...v),y}:d&&(c[l]=d):l==="style"?c[l]={...d,...h}:l==="className"&&(c[l]=[d,h].filter(Boolean).join(" "))}return{...o,...c}}function kb(o){let r=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning;return c?o.ref:(r=Object.getOwnPropertyDescriptor(o,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning,c?o.props.ref:o.props.ref||o.ref)}var Ob=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],qa=Ob.reduce((o,r)=>{const c=vm(`Primitive.${r}`),l=I.forwardRef((d,h)=>{const{asChild:f,...v}=d,y=f?c:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(y,{...v,ref:h})});return l.displayName=`Primitive.${r}`,{...o,[r]:l}},{});function Ub(o,r){o&&uu.flushSync(()=>o.dispatchEvent(r))}function wr(o){const r=I.useRef(o);return I.useEffect(()=>{r.current=o}),I.useMemo(()=>(...c)=>r.current?.(...c),[])}function Rb(o,r=globalThis?.document){const c=wr(o);I.useEffect(()=>{const l=d=>{d.key==="Escape"&&c(d)};return r.addEventListener("keydown",l,{capture:!0}),()=>r.removeEventListener("keydown",l,{capture:!0})},[c,r])}var Gb="DismissableLayer",tu="dismissableLayer.update",Hb="dismissableLayer.pointerDownOutside",Fb="dismissableLayer.focusOutside",Np,Am=I.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Tm=I.forwardRef((o,r)=>{const{disableOutsidePointerEvents:c=!1,onEscapeKeyDown:l,onPointerDownOutside:d,onFocusOutside:h,onInteractOutside:f,onDismiss:v,...y}=o,m=I.useContext(Am),[b,p]=I.useState(null),x=b?.ownerDocument??globalThis?.document,[,M]=I.useState({}),D=ja(r,j=>p(j)),E=Array.from(m.layers),[H]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),_=E.indexOf(H),K=b?E.indexOf(b):-1,Y=m.layersWithOutsidePointerEventsDisabled.size>0,Q=K>=_,$=_b(j=>{const q=j.target,fe=[...m.branches].some(Te=>Te.contains(q));!Q||fe||(d?.(j),f?.(j),j.defaultPrevented||v?.())},x),ie=Xb(j=>{const q=j.target;[...m.branches].some(Te=>Te.contains(q))||(h?.(j),f?.(j),j.defaultPrevented||v?.())},x);return Rb(j=>{K===m.layers.size-1&&(l?.(j),!j.defaultPrevented&&v&&(j.preventDefault(),v()))},x),I.useEffect(()=>{if(b)return c&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Np=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(b)),m.layers.add(b),kp(),()=>{c&&m.layersWithOutsidePointerEventsDisabled.size===1&&(x.body.style.pointerEvents=Np)}},[b,x,c,m]),I.useEffect(()=>()=>{b&&(m.layers.delete(b),m.layersWithOutsidePointerEventsDisabled.delete(b),kp())},[b,m]),I.useEffect(()=>{const j=()=>M({});return document.addEventListener(tu,j),()=>document.removeEventListener(tu,j)},[]),w.jsx(qa.div,{...y,ref:D,style:{pointerEvents:Y?Q?"auto":"none":void 0,...o.style},onFocusCapture:Hn(o.onFocusCapture,ie.onFocusCapture),onBlurCapture:Hn(o.onBlurCapture,ie.onBlurCapture),onPointerDownCapture:Hn(o.onPointerDownCapture,$.onPointerDownCapture)})});Tm.displayName=Gb;var Vb="DismissableLayerBranch",zb=I.forwardRef((o,r)=>{const c=I.useContext(Am),l=I.useRef(null),d=ja(r,l);return I.useEffect(()=>{const h=l.current;if(h)return c.branches.add(h),()=>{c.branches.delete(h)}},[c.branches]),w.jsx(qa.div,{...o,ref:d})});zb.displayName=Vb;function _b(o,r=globalThis?.document){const c=wr(o),l=I.useRef(!1),d=I.useRef(()=>{});return I.useEffect(()=>{const h=v=>{if(v.target&&!l.current){let y=function(){Sm(Hb,c,m,{discrete:!0})};const m={originalEvent:v};v.pointerType==="touch"?(r.removeEventListener("click",d.current),d.current=y,r.addEventListener("click",d.current,{once:!0})):y()}else r.removeEventListener("click",d.current);l.current=!1},f=window.setTimeout(()=>{r.addEventListener("pointerdown",h)},0);return()=>{window.clearTimeout(f),r.removeEventListener("pointerdown",h),r.removeEventListener("click",d.current)}},[r,c]),{onPointerDownCapture:()=>l.current=!0}}function Xb(o,r=globalThis?.document){const c=wr(o),l=I.useRef(!1);return I.useEffect(()=>{const d=h=>{h.target&&!l.current&&Sm(Fb,c,{originalEvent:h},{discrete:!1})};return r.addEventListener("focusin",d),()=>r.removeEventListener("focusin",d)},[r,c]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function kp(){const o=new CustomEvent(tu);document.dispatchEvent(o)}function Sm(o,r,c,{discrete:l}){const d=c.originalEvent.target,h=new CustomEvent(o,{bubbles:!1,cancelable:!0,detail:c});r&&d.addEventListener(o,r,{once:!0}),l?Ub(d,h):d.dispatchEvent(h)}var zo=globalThis?.document?I.useLayoutEffect:()=>{};const jb=["top","right","bottom","left"],ya=Math.min,Ht=Math.max,fr=Math.round,lr=Math.floor,pn=o=>({x:o,y:o}),qb={left:"right",right:"left",bottom:"top",top:"bottom"},Wb={start:"end",end:"start"};function nu(o,r,c){return Ht(o,ya(r,c))}function Fn(o,r){return typeof o=="function"?o(r):o}function Vn(o){return o.split("-")[0]}function Hi(o){return o.split("-")[1]}function du(o){return o==="x"?"y":"x"}function hu(o){return o==="y"?"height":"width"}const Yb=new Set(["top","bottom"]);function fn(o){return Yb.has(Vn(o))?"y":"x"}function fu(o){return du(fn(o))}function Kb(o,r,c){c===void 0&&(c=!1);const l=Hi(o),d=fu(o),h=hu(d);let f=d==="x"?l===(c?"end":"start")?"right":"left":l==="start"?"bottom":"top";return r.reference[h]>r.floating[h]&&(f=pr(f)),[f,pr(f)]}function Jb(o){const r=pr(o);return[au(o),r,au(r)]}function au(o){return o.replace(/start|end/g,r=>Wb[r])}const Op=["left","right"],Up=["right","left"],Qb=["top","bottom"],Zb=["bottom","top"];function $b(o,r,c){switch(o){case"top":case"bottom":return c?r?Up:Op:r?Op:Up;case"left":case"right":return r?Qb:Zb;default:return[]}}function ev(o,r,c,l){const d=Hi(o);let h=$b(Vn(o),c==="start",l);return d&&(h=h.map(f=>f+"-"+d),r&&(h=h.concat(h.map(au)))),h}function pr(o){return o.replace(/left|right|bottom|top/g,r=>qb[r])}function tv(o){return{top:0,right:0,bottom:0,left:0,...o}}function Mm(o){return typeof o!="number"?tv(o):{top:o,right:o,bottom:o,left:o}}function mr(o){const{x:r,y:c,width:l,height:d}=o;return{width:l,height:d,top:c,left:r,right:r+l,bottom:c+d,x:r,y:c}}function Rp(o,r,c){let{reference:l,floating:d}=o;const h=fn(r),f=fu(r),v=hu(f),y=Vn(r),m=h==="y",b=l.x+l.width/2-d.width/2,p=l.y+l.height/2-d.height/2,x=l[v]/2-d[v]/2;let M;switch(y){case"top":M={x:b,y:l.y-d.height};break;case"bottom":M={x:b,y:l.y+l.height};break;case"right":M={x:l.x+l.width,y:p};break;case"left":M={x:l.x-d.width,y:p};break;default:M={x:l.x,y:l.y}}switch(Hi(r)){case"start":M[f]-=x*(c&&m?-1:1);break;case"end":M[f]+=x*(c&&m?-1:1);break}return M}const nv=async(o,r,c)=>{const{placement:l="bottom",strategy:d="absolute",middleware:h=[],platform:f}=c,v=h.filter(Boolean),y=await(f.isRTL==null?void 0:f.isRTL(r));let m=await f.getElementRects({reference:o,floating:r,strategy:d}),{x:b,y:p}=Rp(m,l,y),x=l,M={},D=0;for(let E=0;E<v.length;E++){const{name:H,fn:_}=v[E],{x:K,y:Y,data:Q,reset:$}=await _({x:b,y:p,initialPlacement:l,placement:x,strategy:d,middlewareData:M,rects:m,platform:f,elements:{reference:o,floating:r}});b=K??b,p=Y??p,M={...M,[H]:{...M[H],...Q}},$&&D<=50&&(D++,typeof $=="object"&&($.placement&&(x=$.placement),$.rects&&(m=$.rects===!0?await f.getElementRects({reference:o,floating:r,strategy:d}):$.rects),{x:b,y:p}=Rp(m,x,y)),E=-1)}return{x:b,y:p,placement:x,strategy:d,middlewareData:M}};async function _o(o,r){var c;r===void 0&&(r={});const{x:l,y:d,platform:h,rects:f,elements:v,strategy:y}=o,{boundary:m="clippingAncestors",rootBoundary:b="viewport",elementContext:p="floating",altBoundary:x=!1,padding:M=0}=Fn(r,o),D=Mm(M),H=v[x?p==="floating"?"reference":"floating":p],_=mr(await h.getClippingRect({element:(c=await(h.isElement==null?void 0:h.isElement(H)))==null||c?H:H.contextElement||await(h.getDocumentElement==null?void 0:h.getDocumentElement(v.floating)),boundary:m,rootBoundary:b,strategy:y})),K=p==="floating"?{x:l,y:d,width:f.floating.width,height:f.floating.height}:f.reference,Y=await(h.getOffsetParent==null?void 0:h.getOffsetParent(v.floating)),Q=await(h.isElement==null?void 0:h.isElement(Y))?await(h.getScale==null?void 0:h.getScale(Y))||{x:1,y:1}:{x:1,y:1},$=mr(h.convertOffsetParentRelativeRectToViewportRelativeRect?await h.convertOffsetParentRelativeRectToViewportRelativeRect({elements:v,rect:K,offsetParent:Y,strategy:y}):K);return{top:(_.top-$.top+D.top)/Q.y,bottom:($.bottom-_.bottom+D.bottom)/Q.y,left:(_.left-$.left+D.left)/Q.x,right:($.right-_.right+D.right)/Q.x}}const av=o=>({name:"arrow",options:o,async fn(r){const{x:c,y:l,placement:d,rects:h,platform:f,elements:v,middlewareData:y}=r,{element:m,padding:b=0}=Fn(o,r)||{};if(m==null)return{};const p=Mm(b),x={x:c,y:l},M=fu(d),D=hu(M),E=await f.getDimensions(m),H=M==="y",_=H?"top":"left",K=H?"bottom":"right",Y=H?"clientHeight":"clientWidth",Q=h.reference[D]+h.reference[M]-x[M]-h.floating[D],$=x[M]-h.reference[M],ie=await(f.getOffsetParent==null?void 0:f.getOffsetParent(m));let j=ie?ie[Y]:0;(!j||!await(f.isElement==null?void 0:f.isElement(ie)))&&(j=v.floating[Y]||h.floating[D]);const q=Q/2-$/2,fe=j/2-E[D]/2-1,Te=ya(p[_],fe),De=ya(p[K],fe),me=Te,ge=j-E[D]-De,ve=j/2-E[D]/2+q,Ae=nu(me,ve,ge),C=!y.arrow&&Hi(d)!=null&&ve!==Ae&&h.reference[D]/2-(ve<me?Te:De)-E[D]/2<0,F=C?ve<me?ve-me:ve-ge:0;return{[M]:x[M]+F,data:{[M]:Ae,centerOffset:ve-Ae-F,...C&&{alignmentOffset:F}},reset:C}}}),iv=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(r){var c,l;const{placement:d,middlewareData:h,rects:f,initialPlacement:v,platform:y,elements:m}=r,{mainAxis:b=!0,crossAxis:p=!0,fallbackPlacements:x,fallbackStrategy:M="bestFit",fallbackAxisSideDirection:D="none",flipAlignment:E=!0,...H}=Fn(o,r);if((c=h.arrow)!=null&&c.alignmentOffset)return{};const _=Vn(d),K=fn(v),Y=Vn(v)===v,Q=await(y.isRTL==null?void 0:y.isRTL(m.floating)),$=x||(Y||!E?[pr(v)]:Jb(v)),ie=D!=="none";!x&&ie&&$.push(...ev(v,E,D,Q));const j=[v,...$],q=await _o(r,H),fe=[];let Te=((l=h.flip)==null?void 0:l.overflows)||[];if(b&&fe.push(q[_]),p){const ve=Kb(d,f,Q);fe.push(q[ve[0]],q[ve[1]])}if(Te=[...Te,{placement:d,overflows:fe}],!fe.every(ve=>ve<=0)){var De,me;const ve=(((De=h.flip)==null?void 0:De.index)||0)+1,Ae=j[ve];if(Ae&&(!(p==="alignment"?K!==fn(Ae):!1)||Te.every(k=>fn(k.placement)===K?k.overflows[0]>0:!0)))return{data:{index:ve,overflows:Te},reset:{placement:Ae}};let C=(me=Te.filter(F=>F.overflows[0]<=0).sort((F,k)=>F.overflows[1]-k.overflows[1])[0])==null?void 0:me.placement;if(!C)switch(M){case"bestFit":{var ge;const F=(ge=Te.filter(k=>{if(ie){const oe=fn(k.placement);return oe===K||oe==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(oe=>oe>0).reduce((oe,le)=>oe+le,0)]).sort((k,oe)=>k[1]-oe[1])[0])==null?void 0:ge[0];F&&(C=F);break}case"initialPlacement":C=v;break}if(d!==C)return{reset:{placement:C}}}return{}}}};function Gp(o,r){return{top:o.top-r.height,right:o.right-r.width,bottom:o.bottom-r.height,left:o.left-r.width}}function Hp(o){return jb.some(r=>o[r]>=0)}const ov=function(o){return o===void 0&&(o={}),{name:"hide",options:o,async fn(r){const{rects:c}=r,{strategy:l="referenceHidden",...d}=Fn(o,r);switch(l){case"referenceHidden":{const h=await _o(r,{...d,elementContext:"reference"}),f=Gp(h,c.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:Hp(f)}}}case"escaped":{const h=await _o(r,{...d,altBoundary:!0}),f=Gp(h,c.floating);return{data:{escapedOffsets:f,escaped:Hp(f)}}}default:return{}}}}},Cm=new Set(["left","top"]);async function sv(o,r){const{placement:c,platform:l,elements:d}=o,h=await(l.isRTL==null?void 0:l.isRTL(d.floating)),f=Vn(c),v=Hi(c),y=fn(c)==="y",m=Cm.has(f)?-1:1,b=h&&y?-1:1,p=Fn(r,o);let{mainAxis:x,crossAxis:M,alignmentAxis:D}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return v&&typeof D=="number"&&(M=v==="end"?D*-1:D),y?{x:M*b,y:x*m}:{x:x*m,y:M*b}}const rv=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(r){var c,l;const{x:d,y:h,placement:f,middlewareData:v}=r,y=await sv(r,o);return f===((c=v.offset)==null?void 0:c.placement)&&(l=v.arrow)!=null&&l.alignmentOffset?{}:{x:d+y.x,y:h+y.y,data:{...y,placement:f}}}}},lv=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(r){const{x:c,y:l,placement:d}=r,{mainAxis:h=!0,crossAxis:f=!1,limiter:v={fn:H=>{let{x:_,y:K}=H;return{x:_,y:K}}},...y}=Fn(o,r),m={x:c,y:l},b=await _o(r,y),p=fn(Vn(d)),x=du(p);let M=m[x],D=m[p];if(h){const H=x==="y"?"top":"left",_=x==="y"?"bottom":"right",K=M+b[H],Y=M-b[_];M=nu(K,M,Y)}if(f){const H=p==="y"?"top":"left",_=p==="y"?"bottom":"right",K=D+b[H],Y=D-b[_];D=nu(K,D,Y)}const E=v.fn({...r,[x]:M,[p]:D});return{...E,data:{x:E.x-c,y:E.y-l,enabled:{[x]:h,[p]:f}}}}}},cv=function(o){return o===void 0&&(o={}),{options:o,fn(r){const{x:c,y:l,placement:d,rects:h,middlewareData:f}=r,{offset:v=0,mainAxis:y=!0,crossAxis:m=!0}=Fn(o,r),b={x:c,y:l},p=fn(d),x=du(p);let M=b[x],D=b[p];const E=Fn(v,r),H=typeof E=="number"?{mainAxis:E,crossAxis:0}:{mainAxis:0,crossAxis:0,...E};if(y){const Y=x==="y"?"height":"width",Q=h.reference[x]-h.floating[Y]+H.mainAxis,$=h.reference[x]+h.reference[Y]-H.mainAxis;M<Q?M=Q:M>$&&(M=$)}if(m){var _,K;const Y=x==="y"?"width":"height",Q=Cm.has(Vn(d)),$=h.reference[p]-h.floating[Y]+(Q&&((_=f.offset)==null?void 0:_[p])||0)+(Q?0:H.crossAxis),ie=h.reference[p]+h.reference[Y]+(Q?0:((K=f.offset)==null?void 0:K[p])||0)-(Q?H.crossAxis:0);D<$?D=$:D>ie&&(D=ie)}return{[x]:M,[p]:D}}}},uv=function(o){return o===void 0&&(o={}),{name:"size",options:o,async fn(r){var c,l;const{placement:d,rects:h,platform:f,elements:v}=r,{apply:y=()=>{},...m}=Fn(o,r),b=await _o(r,m),p=Vn(d),x=Hi(d),M=fn(d)==="y",{width:D,height:E}=h.floating;let H,_;p==="top"||p==="bottom"?(H=p,_=x===(await(f.isRTL==null?void 0:f.isRTL(v.floating))?"start":"end")?"left":"right"):(_=p,H=x==="end"?"top":"bottom");const K=E-b.top-b.bottom,Y=D-b.left-b.right,Q=ya(E-b[H],K),$=ya(D-b[_],Y),ie=!r.middlewareData.shift;let j=Q,q=$;if((c=r.middlewareData.shift)!=null&&c.enabled.x&&(q=Y),(l=r.middlewareData.shift)!=null&&l.enabled.y&&(j=K),ie&&!x){const Te=Ht(b.left,0),De=Ht(b.right,0),me=Ht(b.top,0),ge=Ht(b.bottom,0);M?q=D-2*(Te!==0||De!==0?Te+De:Ht(b.left,b.right)):j=E-2*(me!==0||ge!==0?me+ge:Ht(b.top,b.bottom))}await y({...r,availableWidth:q,availableHeight:j});const fe=await f.getDimensions(v.floating);return D!==fe.width||E!==fe.height?{reset:{rects:!0}}:{}}}};function Ar(){return typeof window<"u"}function Fi(o){return Pm(o)?(o.nodeName||"").toLowerCase():"#document"}function Ft(o){var r;return(o==null||(r=o.ownerDocument)==null?void 0:r.defaultView)||window}function gn(o){var r;return(r=(Pm(o)?o.ownerDocument:o.document)||window.document)==null?void 0:r.documentElement}function Pm(o){return Ar()?o instanceof Node||o instanceof Ft(o).Node:!1}function an(o){return Ar()?o instanceof Element||o instanceof Ft(o).Element:!1}function mn(o){return Ar()?o instanceof HTMLElement||o instanceof Ft(o).HTMLElement:!1}function Fp(o){return!Ar()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof Ft(o).ShadowRoot}const dv=new Set(["inline","contents"]);function jo(o){const{overflow:r,overflowX:c,overflowY:l,display:d}=on(o);return/auto|scroll|overlay|hidden|clip/.test(r+l+c)&&!dv.has(d)}const hv=new Set(["table","td","th"]);function fv(o){return hv.has(Fi(o))}const pv=[":popover-open",":modal"];function Tr(o){return pv.some(r=>{try{return o.matches(r)}catch{return!1}})}const mv=["transform","translate","scale","rotate","perspective"],gv=["transform","translate","scale","rotate","perspective","filter"],yv=["paint","layout","strict","content"];function pu(o){const r=mu(),c=an(o)?on(o):o;return mv.some(l=>c[l]?c[l]!=="none":!1)||(c.containerType?c.containerType!=="normal":!1)||!r&&(c.backdropFilter?c.backdropFilter!=="none":!1)||!r&&(c.filter?c.filter!=="none":!1)||gv.some(l=>(c.willChange||"").includes(l))||yv.some(l=>(c.contain||"").includes(l))}function bv(o){let r=ba(o);for(;mn(r)&&!Ri(r);){if(pu(r))return r;if(Tr(r))return null;r=ba(r)}return null}function mu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const vv=new Set(["html","body","#document"]);function Ri(o){return vv.has(Fi(o))}function on(o){return Ft(o).getComputedStyle(o)}function Sr(o){return an(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function ba(o){if(Fi(o)==="html")return o;const r=o.assignedSlot||o.parentNode||Fp(o)&&o.host||gn(o);return Fp(r)?r.host:r}function xm(o){const r=ba(o);return Ri(r)?o.ownerDocument?o.ownerDocument.body:o.body:mn(r)&&jo(r)?r:xm(r)}function Xo(o,r,c){var l;r===void 0&&(r=[]),c===void 0&&(c=!0);const d=xm(o),h=d===((l=o.ownerDocument)==null?void 0:l.body),f=Ft(d);if(h){const v=iu(f);return r.concat(f,f.visualViewport||[],jo(d)?d:[],v&&c?Xo(v):[])}return r.concat(d,Xo(d,[],c))}function iu(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function Em(o){const r=on(o);let c=parseFloat(r.width)||0,l=parseFloat(r.height)||0;const d=mn(o),h=d?o.offsetWidth:c,f=d?o.offsetHeight:l,v=fr(c)!==h||fr(l)!==f;return v&&(c=h,l=f),{width:c,height:l,$:v}}function gu(o){return an(o)?o:o.contextElement}function Ui(o){const r=gu(o);if(!mn(r))return pn(1);const c=r.getBoundingClientRect(),{width:l,height:d,$:h}=Em(r);let f=(h?fr(c.width):c.width)/l,v=(h?fr(c.height):c.height)/d;return(!f||!Number.isFinite(f))&&(f=1),(!v||!Number.isFinite(v))&&(v=1),{x:f,y:v}}const wv=pn(0);function Dm(o){const r=Ft(o);return!mu()||!r.visualViewport?wv:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Av(o,r,c){return r===void 0&&(r=!1),!c||r&&c!==Ft(o)?!1:r}function Xa(o,r,c,l){r===void 0&&(r=!1),c===void 0&&(c=!1);const d=o.getBoundingClientRect(),h=gu(o);let f=pn(1);r&&(l?an(l)&&(f=Ui(l)):f=Ui(o));const v=Av(h,c,l)?Dm(h):pn(0);let y=(d.left+v.x)/f.x,m=(d.top+v.y)/f.y,b=d.width/f.x,p=d.height/f.y;if(h){const x=Ft(h),M=l&&an(l)?Ft(l):l;let D=x,E=iu(D);for(;E&&l&&M!==D;){const H=Ui(E),_=E.getBoundingClientRect(),K=on(E),Y=_.left+(E.clientLeft+parseFloat(K.paddingLeft))*H.x,Q=_.top+(E.clientTop+parseFloat(K.paddingTop))*H.y;y*=H.x,m*=H.y,b*=H.x,p*=H.y,y+=Y,m+=Q,D=Ft(E),E=iu(D)}}return mr({width:b,height:p,x:y,y:m})}function Mr(o,r){const c=Sr(o).scrollLeft;return r?r.left+c:Xa(gn(o)).left+c}function Lm(o,r){const c=o.getBoundingClientRect(),l=c.left+r.scrollLeft-Mr(o,c),d=c.top+r.scrollTop;return{x:l,y:d}}function Tv(o){let{elements:r,rect:c,offsetParent:l,strategy:d}=o;const h=d==="fixed",f=gn(l),v=r?Tr(r.floating):!1;if(l===f||v&&h)return c;let y={scrollLeft:0,scrollTop:0},m=pn(1);const b=pn(0),p=mn(l);if((p||!p&&!h)&&((Fi(l)!=="body"||jo(f))&&(y=Sr(l)),mn(l))){const M=Xa(l);m=Ui(l),b.x=M.x+l.clientLeft,b.y=M.y+l.clientTop}const x=f&&!p&&!h?Lm(f,y):pn(0);return{width:c.width*m.x,height:c.height*m.y,x:c.x*m.x-y.scrollLeft*m.x+b.x+x.x,y:c.y*m.y-y.scrollTop*m.y+b.y+x.y}}function Sv(o){return Array.from(o.getClientRects())}function Mv(o){const r=gn(o),c=Sr(o),l=o.ownerDocument.body,d=Ht(r.scrollWidth,r.clientWidth,l.scrollWidth,l.clientWidth),h=Ht(r.scrollHeight,r.clientHeight,l.scrollHeight,l.clientHeight);let f=-c.scrollLeft+Mr(o);const v=-c.scrollTop;return on(l).direction==="rtl"&&(f+=Ht(r.clientWidth,l.clientWidth)-d),{width:d,height:h,x:f,y:v}}const Vp=25;function Cv(o,r){const c=Ft(o),l=gn(o),d=c.visualViewport;let h=l.clientWidth,f=l.clientHeight,v=0,y=0;if(d){h=d.width,f=d.height;const b=mu();(!b||b&&r==="fixed")&&(v=d.offsetLeft,y=d.offsetTop)}const m=Mr(l);if(m<=0){const b=l.ownerDocument,p=b.body,x=getComputedStyle(p),M=b.compatMode==="CSS1Compat"&&parseFloat(x.marginLeft)+parseFloat(x.marginRight)||0,D=Math.abs(l.clientWidth-p.clientWidth-M);D<=Vp&&(h-=D)}else m<=Vp&&(h+=m);return{width:h,height:f,x:v,y}}const Pv=new Set(["absolute","fixed"]);function xv(o,r){const c=Xa(o,!0,r==="fixed"),l=c.top+o.clientTop,d=c.left+o.clientLeft,h=mn(o)?Ui(o):pn(1),f=o.clientWidth*h.x,v=o.clientHeight*h.y,y=d*h.x,m=l*h.y;return{width:f,height:v,x:y,y:m}}function zp(o,r,c){let l;if(r==="viewport")l=Cv(o,c);else if(r==="document")l=Mv(gn(o));else if(an(r))l=xv(r,c);else{const d=Dm(o);l={x:r.x-d.x,y:r.y-d.y,width:r.width,height:r.height}}return mr(l)}function Bm(o,r){const c=ba(o);return c===r||!an(c)||Ri(c)?!1:on(c).position==="fixed"||Bm(c,r)}function Ev(o,r){const c=r.get(o);if(c)return c;let l=Xo(o,[],!1).filter(v=>an(v)&&Fi(v)!=="body"),d=null;const h=on(o).position==="fixed";let f=h?ba(o):o;for(;an(f)&&!Ri(f);){const v=on(f),y=pu(f);!y&&v.position==="fixed"&&(d=null),(h?!y&&!d:!y&&v.position==="static"&&!!d&&Pv.has(d.position)||jo(f)&&!y&&Bm(o,f))?l=l.filter(b=>b!==f):d=v,f=ba(f)}return r.set(o,l),l}function Dv(o){let{element:r,boundary:c,rootBoundary:l,strategy:d}=o;const f=[...c==="clippingAncestors"?Tr(r)?[]:Ev(r,this._c):[].concat(c),l],v=f[0],y=f.reduce((m,b)=>{const p=zp(r,b,d);return m.top=Ht(p.top,m.top),m.right=ya(p.right,m.right),m.bottom=ya(p.bottom,m.bottom),m.left=Ht(p.left,m.left),m},zp(r,v,d));return{width:y.right-y.left,height:y.bottom-y.top,x:y.left,y:y.top}}function Lv(o){const{width:r,height:c}=Em(o);return{width:r,height:c}}function Bv(o,r,c){const l=mn(r),d=gn(r),h=c==="fixed",f=Xa(o,!0,h,r);let v={scrollLeft:0,scrollTop:0};const y=pn(0);function m(){y.x=Mr(d)}if(l||!l&&!h)if((Fi(r)!=="body"||jo(d))&&(v=Sr(r)),l){const M=Xa(r,!0,h,r);y.x=M.x+r.clientLeft,y.y=M.y+r.clientTop}else d&&m();h&&!l&&d&&m();const b=d&&!l&&!h?Lm(d,v):pn(0),p=f.left+v.scrollLeft-y.x-b.x,x=f.top+v.scrollTop-y.y-b.y;return{x:p,y:x,width:f.width,height:f.height}}function Wc(o){return on(o).position==="static"}function _p(o,r){if(!mn(o)||on(o).position==="fixed")return null;if(r)return r(o);let c=o.offsetParent;return gn(o)===c&&(c=c.ownerDocument.body),c}function Im(o,r){const c=Ft(o);if(Tr(o))return c;if(!mn(o)){let d=ba(o);for(;d&&!Ri(d);){if(an(d)&&!Wc(d))return d;d=ba(d)}return c}let l=_p(o,r);for(;l&&fv(l)&&Wc(l);)l=_p(l,r);return l&&Ri(l)&&Wc(l)&&!pu(l)?c:l||bv(o)||c}const Iv=async function(o){const r=this.getOffsetParent||Im,c=this.getDimensions,l=await c(o.floating);return{reference:Bv(o.reference,await r(o.floating),o.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function Nv(o){return on(o).direction==="rtl"}const kv={convertOffsetParentRelativeRectToViewportRelativeRect:Tv,getDocumentElement:gn,getClippingRect:Dv,getOffsetParent:Im,getElementRects:Iv,getClientRects:Sv,getDimensions:Lv,getScale:Ui,isElement:an,isRTL:Nv};function Nm(o,r){return o.x===r.x&&o.y===r.y&&o.width===r.width&&o.height===r.height}function Ov(o,r){let c=null,l;const d=gn(o);function h(){var v;clearTimeout(l),(v=c)==null||v.disconnect(),c=null}function f(v,y){v===void 0&&(v=!1),y===void 0&&(y=1),h();const m=o.getBoundingClientRect(),{left:b,top:p,width:x,height:M}=m;if(v||r(),!x||!M)return;const D=lr(p),E=lr(d.clientWidth-(b+x)),H=lr(d.clientHeight-(p+M)),_=lr(b),Y={rootMargin:-D+"px "+-E+"px "+-H+"px "+-_+"px",threshold:Ht(0,ya(1,y))||1};let Q=!0;function $(ie){const j=ie[0].intersectionRatio;if(j!==y){if(!Q)return f();j?f(!1,j):l=setTimeout(()=>{f(!1,1e-7)},1e3)}j===1&&!Nm(m,o.getBoundingClientRect())&&f(),Q=!1}try{c=new IntersectionObserver($,{...Y,root:d.ownerDocument})}catch{c=new IntersectionObserver($,Y)}c.observe(o)}return f(!0),h}function Uv(o,r,c,l){l===void 0&&(l={});const{ancestorScroll:d=!0,ancestorResize:h=!0,elementResize:f=typeof ResizeObserver=="function",layoutShift:v=typeof IntersectionObserver=="function",animationFrame:y=!1}=l,m=gu(o),b=d||h?[...m?Xo(m):[],...Xo(r)]:[];b.forEach(_=>{d&&_.addEventListener("scroll",c,{passive:!0}),h&&_.addEventListener("resize",c)});const p=m&&v?Ov(m,c):null;let x=-1,M=null;f&&(M=new ResizeObserver(_=>{let[K]=_;K&&K.target===m&&M&&(M.unobserve(r),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var Y;(Y=M)==null||Y.observe(r)})),c()}),m&&!y&&M.observe(m),M.observe(r));let D,E=y?Xa(o):null;y&&H();function H(){const _=Xa(o);E&&!Nm(E,_)&&c(),E=_,D=requestAnimationFrame(H)}return c(),()=>{var _;b.forEach(K=>{d&&K.removeEventListener("scroll",c),h&&K.removeEventListener("resize",c)}),p?.(),(_=M)==null||_.disconnect(),M=null,y&&cancelAnimationFrame(D)}}const Rv=rv,Gv=lv,Hv=iv,Fv=uv,Vv=ov,Xp=av,zv=cv,_v=(o,r,c)=>{const l=new Map,d={platform:kv,...c},h={...d.platform,_c:l};return nv(o,r,{...d,platform:h})};var Xv=typeof document<"u",jv=function(){},hr=Xv?I.useLayoutEffect:jv;function gr(o,r){if(o===r)return!0;if(typeof o!=typeof r)return!1;if(typeof o=="function"&&o.toString()===r.toString())return!0;let c,l,d;if(o&&r&&typeof o=="object"){if(Array.isArray(o)){if(c=o.length,c!==r.length)return!1;for(l=c;l--!==0;)if(!gr(o[l],r[l]))return!1;return!0}if(d=Object.keys(o),c=d.length,c!==Object.keys(r).length)return!1;for(l=c;l--!==0;)if(!{}.hasOwnProperty.call(r,d[l]))return!1;for(l=c;l--!==0;){const h=d[l];if(!(h==="_owner"&&o.$$typeof)&&!gr(o[h],r[h]))return!1}return!0}return o!==o&&r!==r}function km(o){return typeof window>"u"?1:(o.ownerDocument.defaultView||window).devicePixelRatio||1}function jp(o,r){const c=km(o);return Math.round(r*c)/c}function Yc(o){const r=I.useRef(o);return hr(()=>{r.current=o}),r}function qv(o){o===void 0&&(o={});const{placement:r="bottom",strategy:c="absolute",middleware:l=[],platform:d,elements:{reference:h,floating:f}={},transform:v=!0,whileElementsMounted:y,open:m}=o,[b,p]=I.useState({x:0,y:0,strategy:c,placement:r,middlewareData:{},isPositioned:!1}),[x,M]=I.useState(l);gr(x,l)||M(l);const[D,E]=I.useState(null),[H,_]=I.useState(null),K=I.useCallback(k=>{k!==ie.current&&(ie.current=k,E(k))},[]),Y=I.useCallback(k=>{k!==j.current&&(j.current=k,_(k))},[]),Q=h||D,$=f||H,ie=I.useRef(null),j=I.useRef(null),q=I.useRef(b),fe=y!=null,Te=Yc(y),De=Yc(d),me=Yc(m),ge=I.useCallback(()=>{if(!ie.current||!j.current)return;const k={placement:r,strategy:c,middleware:x};De.current&&(k.platform=De.current),_v(ie.current,j.current,k).then(oe=>{const le={...oe,isPositioned:me.current!==!1};ve.current&&!gr(q.current,le)&&(q.current=le,uu.flushSync(()=>{p(le)}))})},[x,r,c,De,me]);hr(()=>{m===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,p(k=>({...k,isPositioned:!1})))},[m]);const ve=I.useRef(!1);hr(()=>(ve.current=!0,()=>{ve.current=!1}),[]),hr(()=>{if(Q&&(ie.current=Q),$&&(j.current=$),Q&&$){if(Te.current)return Te.current(Q,$,ge);ge()}},[Q,$,ge,Te,fe]);const Ae=I.useMemo(()=>({reference:ie,floating:j,setReference:K,setFloating:Y}),[K,Y]),C=I.useMemo(()=>({reference:Q,floating:$}),[Q,$]),F=I.useMemo(()=>{const k={position:c,left:0,top:0};if(!C.floating)return k;const oe=jp(C.floating,b.x),le=jp(C.floating,b.y);return v?{...k,transform:"translate("+oe+"px, "+le+"px)",...km(C.floating)>=1.5&&{willChange:"transform"}}:{position:c,left:oe,top:le}},[c,v,C.floating,b.x,b.y]);return I.useMemo(()=>({...b,update:ge,refs:Ae,elements:C,floatingStyles:F}),[b,ge,Ae,C,F])}const Wv=o=>{function r(c){return{}.hasOwnProperty.call(c,"current")}return{name:"arrow",options:o,fn(c){const{element:l,padding:d}=typeof o=="function"?o(c):o;return l&&r(l)?l.current!=null?Xp({element:l.current,padding:d}).fn(c):{}:l?Xp({element:l,padding:d}).fn(c):{}}}},Yv=(o,r)=>({...Rv(o),options:[o,r]}),Kv=(o,r)=>({...Gv(o),options:[o,r]}),Jv=(o,r)=>({...zv(o),options:[o,r]}),Qv=(o,r)=>({...Hv(o),options:[o,r]}),Zv=(o,r)=>({...Fv(o),options:[o,r]}),$v=(o,r)=>({...Vv(o),options:[o,r]}),e2=(o,r)=>({...Wv(o),options:[o,r]});var t2="Arrow",Om=I.forwardRef((o,r)=>{const{children:c,width:l=10,height:d=5,...h}=o;return w.jsx(qa.svg,{...h,ref:r,width:l,height:d,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:o.asChild?c:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});Om.displayName=t2;var n2=Om;function a2(o){const[r,c]=I.useState(void 0);return zo(()=>{if(o){c({width:o.offsetWidth,height:o.offsetHeight});const l=new ResizeObserver(d=>{if(!Array.isArray(d)||!d.length)return;const h=d[0];let f,v;if("borderBoxSize"in h){const y=h.borderBoxSize,m=Array.isArray(y)?y[0]:y;f=m.inlineSize,v=m.blockSize}else f=o.offsetWidth,v=o.offsetHeight;c({width:f,height:v})});return l.observe(o,{box:"border-box"}),()=>l.unobserve(o)}else c(void 0)},[o]),r}var Um="Popper",[Rm,Gm]=bm(Um),[O1,Hm]=Rm(Um),Fm="PopperAnchor",Vm=I.forwardRef((o,r)=>{const{__scopePopper:c,virtualRef:l,...d}=o,h=Hm(Fm,c),f=I.useRef(null),v=ja(r,f),y=I.useRef(null);return I.useEffect(()=>{const m=y.current;y.current=l?.current||f.current,m!==y.current&&h.onAnchorChange(y.current)}),l?null:w.jsx(qa.div,{...d,ref:v})});Vm.displayName=Fm;var yu="PopperContent",[i2,o2]=Rm(yu),zm=I.forwardRef((o,r)=>{const{__scopePopper:c,side:l="bottom",sideOffset:d=0,align:h="center",alignOffset:f=0,arrowPadding:v=0,avoidCollisions:y=!0,collisionBoundary:m=[],collisionPadding:b=0,sticky:p="partial",hideWhenDetached:x=!1,updatePositionStrategy:M="optimized",onPlaced:D,...E}=o,H=Hm(yu,c),[_,K]=I.useState(null),Y=ja(r,ne=>K(ne)),[Q,$]=I.useState(null),ie=a2(Q),j=ie?.width??0,q=ie?.height??0,fe=l+(h!=="center"?"-"+h:""),Te=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},De=Array.isArray(m)?m:[m],me=De.length>0,ge={padding:Te,boundary:De.filter(r2),altBoundary:me},{refs:ve,floatingStyles:Ae,placement:C,isPositioned:F,middlewareData:k}=qv({strategy:"fixed",placement:fe,whileElementsMounted:(...ne)=>Uv(...ne,{animationFrame:M==="always"}),elements:{reference:H.anchor},middleware:[Yv({mainAxis:d+q,alignmentAxis:f}),y&&Kv({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Jv():void 0,...ge}),y&&Qv({...ge}),Zv({...ge,apply:({elements:ne,rects:ue,availableWidth:xe,availableHeight:ot})=>{const{width:mt,height:st}=ue.reference,bn=ne.floating.style;bn.setProperty("--radix-popper-available-width",`${xe}px`),bn.setProperty("--radix-popper-available-height",`${ot}px`),bn.setProperty("--radix-popper-anchor-width",`${mt}px`),bn.setProperty("--radix-popper-anchor-height",`${st}px`)}}),Q&&e2({element:Q,padding:v}),l2({arrowWidth:j,arrowHeight:q}),x&&$v({strategy:"referenceHidden",...ge})]}),[oe,le]=jm(C),T=wr(D);zo(()=>{F&&T?.()},[F,T]);const G=k.arrow?.x,R=k.arrow?.y,X=k.arrow?.centerOffset!==0,[J,se]=I.useState();return zo(()=>{_&&se(window.getComputedStyle(_).zIndex)},[_]),w.jsx("div",{ref:ve.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ae,transform:F?Ae.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:J,"--radix-popper-transform-origin":[k.transformOrigin?.x,k.transformOrigin?.y].join(" "),...k.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:o.dir,children:w.jsx(i2,{scope:c,placedSide:oe,onArrowChange:$,arrowX:G,arrowY:R,shouldHideArrow:X,children:w.jsx(qa.div,{"data-side":oe,"data-align":le,...E,ref:Y,style:{...E.style,animation:F?void 0:"none"}})})})});zm.displayName=yu;var _m="PopperArrow",s2={top:"bottom",right:"left",bottom:"top",left:"right"},Xm=I.forwardRef(function(r,c){const{__scopePopper:l,...d}=r,h=o2(_m,l),f=s2[h.placedSide];return w.jsx("span",{ref:h.onArrowChange,style:{position:"absolute",left:h.arrowX,top:h.arrowY,[f]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[h.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[h.placedSide],visibility:h.shouldHideArrow?"hidden":void 0},children:w.jsx(n2,{...d,ref:c,style:{...d.style,display:"block"}})})});Xm.displayName=_m;function r2(o){return o!==null}var l2=o=>({name:"transformOrigin",options:o,fn(r){const{placement:c,rects:l,middlewareData:d}=r,f=d.arrow?.centerOffset!==0,v=f?0:o.arrowWidth,y=f?0:o.arrowHeight,[m,b]=jm(c),p={start:"0%",center:"50%",end:"100%"}[b],x=(d.arrow?.x??0)+v/2,M=(d.arrow?.y??0)+y/2;let D="",E="";return m==="bottom"?(D=f?p:`${x}px`,E=`${-y}px`):m==="top"?(D=f?p:`${x}px`,E=`${l.floating.height+y}px`):m==="right"?(D=`${-y}px`,E=f?p:`${M}px`):m==="left"&&(D=`${l.floating.width+y}px`,E=f?p:`${M}px`),{data:{x:D,y:E}}}});function jm(o){const[r,c="center"]=o.split("-");return[r,c]}var c2=Vm,u2=zm,d2=Xm;function h2(o,r){return I.useReducer((c,l)=>r[c][l]??c,o)}var qm=o=>{const{present:r,children:c}=o,l=f2(r),d=typeof c=="function"?c({present:l.isPresent}):I.Children.only(c),h=ja(l.ref,p2(d));return typeof c=="function"||l.isPresent?I.cloneElement(d,{ref:h}):null};qm.displayName="Presence";function f2(o){const[r,c]=I.useState(),l=I.useRef(null),d=I.useRef(o),h=I.useRef("none"),f=o?"mounted":"unmounted",[v,y]=h2(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return I.useEffect(()=>{const m=cr(l.current);h.current=v==="mounted"?m:"none"},[v]),zo(()=>{const m=l.current,b=d.current;if(b!==o){const x=h.current,M=cr(m);o?y("MOUNT"):M==="none"||m?.display==="none"?y("UNMOUNT"):y(b&&x!==M?"ANIMATION_OUT":"UNMOUNT"),d.current=o}},[o,y]),zo(()=>{if(r){let m;const b=r.ownerDocument.defaultView??window,p=M=>{const E=cr(l.current).includes(CSS.escape(M.animationName));if(M.target===r&&E&&(y("ANIMATION_END"),!d.current)){const H=r.style.animationFillMode;r.style.animationFillMode="forwards",m=b.setTimeout(()=>{r.style.animationFillMode==="forwards"&&(r.style.animationFillMode=H)})}},x=M=>{M.target===r&&(h.current=cr(l.current))};return r.addEventListener("animationstart",x),r.addEventListener("animationcancel",p),r.addEventListener("animationend",p),()=>{b.clearTimeout(m),r.removeEventListener("animationstart",x),r.removeEventListener("animationcancel",p),r.removeEventListener("animationend",p)}}else y("ANIMATION_END")},[r,y]),{isPresent:["mounted","unmountSuspended"].includes(v),ref:I.useCallback(m=>{l.current=m?getComputedStyle(m):null,c(m)},[])}}function cr(o){return o?.animationName||"none"}function p2(o){let r=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning;return c?o.ref:(r=Object.getOwnPropertyDescriptor(o,"ref")?.get,c=r&&"isReactWarning"in r&&r.isReactWarning,c?o.props.ref:o.props.ref||o.ref)}var m2=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),g2="VisuallyHidden",Wm=I.forwardRef((o,r)=>w.jsx(qa.span,{...o,ref:r,style:{...m2,...o.style}}));Wm.displayName=g2;var y2=Wm,[Cr]=bm("Tooltip",[Gm]),bu=Gm(),Ym="TooltipProvider",b2=700,qp="tooltip.open",[v2,Km]=Cr(Ym),Jm=o=>{const{__scopeTooltip:r,delayDuration:c=b2,skipDelayDuration:l=300,disableHoverableContent:d=!1,children:h}=o,f=I.useRef(!0),v=I.useRef(!1),y=I.useRef(0);return I.useEffect(()=>{const m=y.current;return()=>window.clearTimeout(m)},[]),w.jsx(v2,{scope:r,isOpenDelayedRef:f,delayDuration:c,onOpen:I.useCallback(()=>{window.clearTimeout(y.current),f.current=!1},[]),onClose:I.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>f.current=!0,l)},[l]),isPointerInTransitRef:v,onPointerInTransitChange:I.useCallback(m=>{v.current=m},[]),disableHoverableContent:d,children:h})};Jm.displayName=Ym;var Qm="Tooltip",[U1,Pr]=Cr(Qm),ou="TooltipTrigger",w2=I.forwardRef((o,r)=>{const{__scopeTooltip:c,...l}=o,d=Pr(ou,c),h=Km(ou,c),f=bu(c),v=I.useRef(null),y=ja(r,v,d.onTriggerChange),m=I.useRef(!1),b=I.useRef(!1),p=I.useCallback(()=>m.current=!1,[]);return I.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),w.jsx(c2,{asChild:!0,...f,children:w.jsx(qa.button,{"aria-describedby":d.open?d.contentId:void 0,"data-state":d.stateAttribute,...l,ref:y,onPointerMove:Hn(o.onPointerMove,x=>{x.pointerType!=="touch"&&!b.current&&!h.isPointerInTransitRef.current&&(d.onTriggerEnter(),b.current=!0)}),onPointerLeave:Hn(o.onPointerLeave,()=>{d.onTriggerLeave(),b.current=!1}),onPointerDown:Hn(o.onPointerDown,()=>{d.open&&d.onClose(),m.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:Hn(o.onFocus,()=>{m.current||d.onOpen()}),onBlur:Hn(o.onBlur,d.onClose),onClick:Hn(o.onClick,d.onClose)})})});w2.displayName=ou;var A2="TooltipPortal",[R1,T2]=Cr(A2,{forceMount:void 0}),Gi="TooltipContent",S2=I.forwardRef((o,r)=>{const c=T2(Gi,o.__scopeTooltip),{forceMount:l=c.forceMount,side:d="top",...h}=o,f=Pr(Gi,o.__scopeTooltip);return w.jsx(qm,{present:l||f.open,children:f.disableHoverableContent?w.jsx(Zm,{side:d,...h,ref:r}):w.jsx(M2,{side:d,...h,ref:r})})}),M2=I.forwardRef((o,r)=>{const c=Pr(Gi,o.__scopeTooltip),l=Km(Gi,o.__scopeTooltip),d=I.useRef(null),h=ja(r,d),[f,v]=I.useState(null),{trigger:y,onClose:m}=c,b=d.current,{onPointerInTransitChange:p}=l,x=I.useCallback(()=>{v(null),p(!1)},[p]),M=I.useCallback((D,E)=>{const H=D.currentTarget,_={x:D.clientX,y:D.clientY},K=D2(_,H.getBoundingClientRect()),Y=L2(_,K),Q=B2(E.getBoundingClientRect()),$=N2([...Y,...Q]);v($),p(!0)},[p]);return I.useEffect(()=>()=>x(),[x]),I.useEffect(()=>{if(y&&b){const D=H=>M(H,b),E=H=>M(H,y);return y.addEventListener("pointerleave",D),b.addEventListener("pointerleave",E),()=>{y.removeEventListener("pointerleave",D),b.removeEventListener("pointerleave",E)}}},[y,b,M,x]),I.useEffect(()=>{if(f){const D=E=>{const H=E.target,_={x:E.clientX,y:E.clientY},K=y?.contains(H)||b?.contains(H),Y=!I2(_,f);K?x():Y&&(x(),m())};return document.addEventListener("pointermove",D),()=>document.removeEventListener("pointermove",D)}},[y,b,f,m,x]),w.jsx(Zm,{...o,ref:h})}),[C2,P2]=Cr(Qm,{isInside:!1}),x2=Bb("TooltipContent"),Zm=I.forwardRef((o,r)=>{const{__scopeTooltip:c,children:l,"aria-label":d,onEscapeKeyDown:h,onPointerDownOutside:f,...v}=o,y=Pr(Gi,c),m=bu(c),{onClose:b}=y;return I.useEffect(()=>(document.addEventListener(qp,b),()=>document.removeEventListener(qp,b)),[b]),I.useEffect(()=>{if(y.trigger){const p=x=>{x.target?.contains(y.trigger)&&b()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[y.trigger,b]),w.jsx(Tm,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:h,onPointerDownOutside:f,onFocusOutside:p=>p.preventDefault(),onDismiss:b,children:w.jsxs(u2,{"data-state":y.stateAttribute,...m,...v,ref:r,style:{...v.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(x2,{children:l}),w.jsx(C2,{scope:c,isInside:!0,children:w.jsx(y2,{id:y.contentId,role:"tooltip",children:d||l})})]})})});S2.displayName=Gi;var $m="TooltipArrow",E2=I.forwardRef((o,r)=>{const{__scopeTooltip:c,...l}=o,d=bu(c);return P2($m,c).isInside?null:w.jsx(d2,{...d,...l,ref:r})});E2.displayName=$m;function D2(o,r){const c=Math.abs(r.top-o.y),l=Math.abs(r.bottom-o.y),d=Math.abs(r.right-o.x),h=Math.abs(r.left-o.x);switch(Math.min(c,l,d,h)){case h:return"left";case d:return"right";case c:return"top";case l:return"bottom";default:throw new Error("unreachable")}}function L2(o,r,c=5){const l=[];switch(r){case"top":l.push({x:o.x-c,y:o.y+c},{x:o.x+c,y:o.y+c});break;case"bottom":l.push({x:o.x-c,y:o.y-c},{x:o.x+c,y:o.y-c});break;case"left":l.push({x:o.x+c,y:o.y-c},{x:o.x+c,y:o.y+c});break;case"right":l.push({x:o.x-c,y:o.y-c},{x:o.x-c,y:o.y+c});break}return l}function B2(o){const{top:r,right:c,bottom:l,left:d}=o;return[{x:d,y:r},{x:c,y:r},{x:c,y:l},{x:d,y:l}]}function I2(o,r){const{x:c,y:l}=o;let d=!1;for(let h=0,f=r.length-1;h<r.length;f=h++){const v=r[h],y=r[f],m=v.x,b=v.y,p=y.x,x=y.y;b>l!=x>l&&c<(p-m)*(l-b)/(x-b)+m&&(d=!d)}return d}function N2(o){const r=o.slice();return r.sort((c,l)=>c.x<l.x?-1:c.x>l.x?1:c.y<l.y?-1:c.y>l.y?1:0),k2(r)}function k2(o){if(o.length<=1)return o.slice();const r=[];for(let l=0;l<o.length;l++){const d=o[l];for(;r.length>=2;){const h=r[r.length-1],f=r[r.length-2];if((h.x-f.x)*(d.y-f.y)>=(h.y-f.y)*(d.x-f.x))r.pop();else break}r.push(d)}r.pop();const c=[];for(let l=o.length-1;l>=0;l--){const d=o[l];for(;c.length>=2;){const h=c[c.length-1],f=c[c.length-2];if((h.x-f.x)*(d.y-f.y)>=(h.y-f.y)*(d.x-f.x))c.pop();else break}c.push(d)}return c.pop(),r.length===1&&c.length===1&&r[0].x===c[0].x&&r[0].y===c[0].y?r:r.concat(c)}var O2=Jm;function eg(o){var r,c,l="";if(typeof o=="string"||typeof o=="number")l+=o;else if(typeof o=="object")if(Array.isArray(o)){var d=o.length;for(r=0;r<d;r++)o[r]&&(c=eg(o[r]))&&(l&&(l+=" "),l+=c)}else for(c in o)o[c]&&(l&&(l+=" "),l+=c);return l}function tg(){for(var o,r,c=0,l="",d=arguments.length;c<d;c++)(o=arguments[c])&&(r=eg(o))&&(l&&(l+=" "),l+=r);return l}const vu="-",U2=o=>{const r=G2(o),{conflictingClassGroups:c,conflictingClassGroupModifiers:l}=o;return{getClassGroupId:f=>{const v=f.split(vu);return v[0]===""&&v.length!==1&&v.shift(),ng(v,r)||R2(f)},getConflictingClassGroupIds:(f,v)=>{const y=c[f]||[];return v&&l[f]?[...y,...l[f]]:y}}},ng=(o,r)=>{if(o.length===0)return r.classGroupId;const c=o[0],l=r.nextPart.get(c),d=l?ng(o.slice(1),l):void 0;if(d)return d;if(r.validators.length===0)return;const h=o.join(vu);return r.validators.find(({validator:f})=>f(h))?.classGroupId},Wp=/^\[(.+)\]$/,R2=o=>{if(Wp.test(o)){const r=Wp.exec(o)[1],c=r?.substring(0,r.indexOf(":"));if(c)return"arbitrary.."+c}},G2=o=>{const{theme:r,classGroups:c}=o,l={nextPart:new Map,validators:[]};for(const d in c)su(c[d],l,d,r);return l},su=(o,r,c,l)=>{o.forEach(d=>{if(typeof d=="string"){const h=d===""?r:Yp(r,d);h.classGroupId=c;return}if(typeof d=="function"){if(H2(d)){su(d(l),r,c,l);return}r.validators.push({validator:d,classGroupId:c});return}Object.entries(d).forEach(([h,f])=>{su(f,Yp(r,h),c,l)})})},Yp=(o,r)=>{let c=o;return r.split(vu).forEach(l=>{c.nextPart.has(l)||c.nextPart.set(l,{nextPart:new Map,validators:[]}),c=c.nextPart.get(l)}),c},H2=o=>o.isThemeGetter,F2=o=>{if(o<1)return{get:()=>{},set:()=>{}};let r=0,c=new Map,l=new Map;const d=(h,f)=>{c.set(h,f),r++,r>o&&(r=0,l=c,c=new Map)};return{get(h){let f=c.get(h);if(f!==void 0)return f;if((f=l.get(h))!==void 0)return d(h,f),f},set(h,f){c.has(h)?c.set(h,f):d(h,f)}}},ru="!",lu=":",V2=lu.length,z2=o=>{const{prefix:r,experimentalParseClassName:c}=o;let l=d=>{const h=[];let f=0,v=0,y=0,m;for(let D=0;D<d.length;D++){let E=d[D];if(f===0&&v===0){if(E===lu){h.push(d.slice(y,D)),y=D+V2;continue}if(E==="/"){m=D;continue}}E==="["?f++:E==="]"?f--:E==="("?v++:E===")"&&v--}const b=h.length===0?d:d.substring(y),p=_2(b),x=p!==b,M=m&&m>y?m-y:void 0;return{modifiers:h,hasImportantModifier:x,baseClassName:p,maybePostfixModifierPosition:M}};if(r){const d=r+lu,h=l;l=f=>f.startsWith(d)?h(f.substring(d.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:f,maybePostfixModifierPosition:void 0}}if(c){const d=l;l=h=>c({className:h,parseClassName:d})}return l},_2=o=>o.endsWith(ru)?o.substring(0,o.length-1):o.startsWith(ru)?o.substring(1):o,X2=o=>{const r=Object.fromEntries(o.orderSensitiveModifiers.map(l=>[l,!0]));return l=>{if(l.length<=1)return l;const d=[];let h=[];return l.forEach(f=>{f[0]==="["||r[f]?(d.push(...h.sort(),f),h=[]):h.push(f)}),d.push(...h.sort()),d}},j2=o=>({cache:F2(o.cacheSize),parseClassName:z2(o),sortModifiers:X2(o),...U2(o)}),q2=/\s+/,W2=(o,r)=>{const{parseClassName:c,getClassGroupId:l,getConflictingClassGroupIds:d,sortModifiers:h}=r,f=[],v=o.trim().split(q2);let y="";for(let m=v.length-1;m>=0;m-=1){const b=v[m],{isExternal:p,modifiers:x,hasImportantModifier:M,baseClassName:D,maybePostfixModifierPosition:E}=c(b);if(p){y=b+(y.length>0?" "+y:y);continue}let H=!!E,_=l(H?D.substring(0,E):D);if(!_){if(!H){y=b+(y.length>0?" "+y:y);continue}if(_=l(D),!_){y=b+(y.length>0?" "+y:y);continue}H=!1}const K=h(x).join(":"),Y=M?K+ru:K,Q=Y+_;if(f.includes(Q))continue;f.push(Q);const $=d(_,H);for(let ie=0;ie<$.length;++ie){const j=$[ie];f.push(Y+j)}y=b+(y.length>0?" "+y:y)}return y};function Y2(){let o=0,r,c,l="";for(;o<arguments.length;)(r=arguments[o++])&&(c=ag(r))&&(l&&(l+=" "),l+=c);return l}const ag=o=>{if(typeof o=="string")return o;let r,c="";for(let l=0;l<o.length;l++)o[l]&&(r=ag(o[l]))&&(c&&(c+=" "),c+=r);return c};function K2(o,...r){let c,l,d,h=f;function f(y){const m=r.reduce((b,p)=>p(b),o());return c=j2(m),l=c.cache.get,d=c.cache.set,h=v,v(y)}function v(y){const m=l(y);if(m)return m;const b=W2(y,c);return d(y,b),b}return function(){return h(Y2.apply(null,arguments))}}const et=o=>{const r=c=>c[o]||[];return r.isThemeGetter=!0,r},ig=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,og=/^\((?:(\w[\w-]*):)?(.+)\)$/i,J2=/^\d+\/\d+$/,Q2=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Z2=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$2=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,ew=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Oi=o=>J2.test(o),we=o=>!!o&&!Number.isNaN(Number(o)),ma=o=>!!o&&Number.isInteger(Number(o)),Kc=o=>o.endsWith("%")&&we(o.slice(0,-1)),Gn=o=>Q2.test(o),nw=()=>!0,aw=o=>Z2.test(o)&&!$2.test(o),sg=()=>!1,iw=o=>ew.test(o),ow=o=>tw.test(o),sw=o=>!ee(o)&&!te(o),rw=o=>Vi(o,cg,sg),ee=o=>ig.test(o),za=o=>Vi(o,ug,aw),Jc=o=>Vi(o,hw,we),Kp=o=>Vi(o,rg,sg),lw=o=>Vi(o,lg,ow),ur=o=>Vi(o,dg,iw),te=o=>og.test(o),Vo=o=>zi(o,ug),cw=o=>zi(o,fw),Jp=o=>zi(o,rg),uw=o=>zi(o,cg),dw=o=>zi(o,lg),dr=o=>zi(o,dg,!0),Vi=(o,r,c)=>{const l=ig.exec(o);return l?l[1]?r(l[1]):c(l[2]):!1},zi=(o,r,c=!1)=>{const l=og.exec(o);return l?l[1]?r(l[1]):c:!1},rg=o=>o==="position"||o==="percentage",lg=o=>o==="image"||o==="url",cg=o=>o==="length"||o==="size"||o==="bg-size",ug=o=>o==="length",hw=o=>o==="number",fw=o=>o==="family-name",dg=o=>o==="shadow",pw=()=>{const o=et("color"),r=et("font"),c=et("text"),l=et("font-weight"),d=et("tracking"),h=et("leading"),f=et("breakpoint"),v=et("container"),y=et("spacing"),m=et("radius"),b=et("shadow"),p=et("inset-shadow"),x=et("text-shadow"),M=et("drop-shadow"),D=et("blur"),E=et("perspective"),H=et("aspect"),_=et("ease"),K=et("animate"),Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...Q(),te,ee],ie=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],q=()=>[te,ee,y],fe=()=>[Oi,"full","auto",...q()],Te=()=>[ma,"none","subgrid",te,ee],De=()=>["auto",{span:["full",ma,te,ee]},ma,te,ee],me=()=>[ma,"auto",te,ee],ge=()=>["auto","min","max","fr",te,ee],ve=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ae=()=>["start","end","center","stretch","center-safe","end-safe"],C=()=>["auto",...q()],F=()=>[Oi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...q()],k=()=>[o,te,ee],oe=()=>[...Q(),Jp,Kp,{position:[te,ee]}],le=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",uw,rw,{size:[te,ee]}],G=()=>[Kc,Vo,za],R=()=>["","none","full",m,te,ee],X=()=>["",we,Vo,za],J=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ne=()=>[we,Kc,Jp,Kp],ue=()=>["","none",D,te,ee],xe=()=>["none",we,te,ee],ot=()=>["none",we,te,ee],mt=()=>[we,te,ee],st=()=>[Oi,"full",...q()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Gn],breakpoint:[Gn],color:[nw],container:[Gn],"drop-shadow":[Gn],ease:["in","out","in-out"],font:[sw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Gn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Gn],shadow:[Gn],spacing:["px",we],text:[Gn],"text-shadow":[Gn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Oi,ee,te,H]}],container:["container"],columns:[{columns:[we,ee,te,v]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:fe()}],"inset-x":[{"inset-x":fe()}],"inset-y":[{"inset-y":fe()}],start:[{start:fe()}],end:[{end:fe()}],top:[{top:fe()}],right:[{right:fe()}],bottom:[{bottom:fe()}],left:[{left:fe()}],visibility:["visible","invisible","collapse"],z:[{z:[ma,"auto",te,ee]}],basis:[{basis:[Oi,"full","auto",v,...q()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[we,Oi,"auto","initial","none",ee]}],grow:[{grow:["",we,te,ee]}],shrink:[{shrink:["",we,te,ee]}],order:[{order:[ma,"first","last","none",te,ee]}],"grid-cols":[{"grid-cols":Te()}],"col-start-end":[{col:De()}],"col-start":[{"col-start":me()}],"col-end":[{"col-end":me()}],"grid-rows":[{"grid-rows":Te()}],"row-start-end":[{row:De()}],"row-start":[{"row-start":me()}],"row-end":[{"row-end":me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ge()}],"auto-rows":[{"auto-rows":ge()}],gap:[{gap:q()}],"gap-x":[{"gap-x":q()}],"gap-y":[{"gap-y":q()}],"justify-content":[{justify:[...ve(),"normal"]}],"justify-items":[{"justify-items":[...Ae(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ae()]}],"align-content":[{content:["normal",...ve()]}],"align-items":[{items:[...Ae(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ae(),{baseline:["","last"]}]}],"place-content":[{"place-content":ve()}],"place-items":[{"place-items":[...Ae(),"baseline"]}],"place-self":[{"place-self":["auto",...Ae()]}],p:[{p:q()}],px:[{px:q()}],py:[{py:q()}],ps:[{ps:q()}],pe:[{pe:q()}],pt:[{pt:q()}],pr:[{pr:q()}],pb:[{pb:q()}],pl:[{pl:q()}],m:[{m:C()}],mx:[{mx:C()}],my:[{my:C()}],ms:[{ms:C()}],me:[{me:C()}],mt:[{mt:C()}],mr:[{mr:C()}],mb:[{mb:C()}],ml:[{ml:C()}],"space-x":[{"space-x":q()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":q()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],w:[{w:[v,"screen",...F()]}],"min-w":[{"min-w":[v,"screen","none",...F()]}],"max-w":[{"max-w":[v,"screen","none","prose",{screen:[f]},...F()]}],h:[{h:["screen","lh",...F()]}],"min-h":[{"min-h":["screen","lh","none",...F()]}],"max-h":[{"max-h":["screen","lh",...F()]}],"font-size":[{text:["base",c,Vo,za]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,te,Jc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Kc,ee]}],"font-family":[{font:[cw,ee,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[d,te,ee]}],"line-clamp":[{"line-clamp":[we,"none",te,Jc]}],leading:[{leading:[h,...q()]}],"list-image":[{"list-image":["none",te,ee]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",te,ee]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:[we,"from-font","auto",te,za]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[we,"auto",te,ee]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",te,ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",te,ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:oe()}],"bg-repeat":[{bg:le()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ma,te,ee],radial:["",te,ee],conic:[ma,te,ee]},dw,lw]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:G()}],"gradient-via-pos":[{via:G()}],"gradient-to-pos":[{to:G()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:R()}],"rounded-s":[{"rounded-s":R()}],"rounded-e":[{"rounded-e":R()}],"rounded-t":[{"rounded-t":R()}],"rounded-r":[{"rounded-r":R()}],"rounded-b":[{"rounded-b":R()}],"rounded-l":[{"rounded-l":R()}],"rounded-ss":[{"rounded-ss":R()}],"rounded-se":[{"rounded-se":R()}],"rounded-ee":[{"rounded-ee":R()}],"rounded-es":[{"rounded-es":R()}],"rounded-tl":[{"rounded-tl":R()}],"rounded-tr":[{"rounded-tr":R()}],"rounded-br":[{"rounded-br":R()}],"rounded-bl":[{"rounded-bl":R()}],"border-w":[{border:X()}],"border-w-x":[{"border-x":X()}],"border-w-y":[{"border-y":X()}],"border-w-s":[{"border-s":X()}],"border-w-e":[{"border-e":X()}],"border-w-t":[{"border-t":X()}],"border-w-r":[{"border-r":X()}],"border-w-b":[{"border-b":X()}],"border-w-l":[{"border-l":X()}],"divide-x":[{"divide-x":X()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":X()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...J(),"hidden","none"]}],"divide-style":[{divide:[...J(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...J(),"none","hidden"]}],"outline-offset":[{"outline-offset":[we,te,ee]}],"outline-w":[{outline:["",we,Vo,za]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",b,dr,ur]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",p,dr,ur]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[we,za]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":X()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",x,dr,ur]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[we,te,ee]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[we]}],"mask-image-linear-from-pos":[{"mask-linear-from":ne()}],"mask-image-linear-to-pos":[{"mask-linear-to":ne()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":ne()}],"mask-image-t-to-pos":[{"mask-t-to":ne()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":ne()}],"mask-image-r-to-pos":[{"mask-r-to":ne()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":ne()}],"mask-image-b-to-pos":[{"mask-b-to":ne()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":ne()}],"mask-image-l-to-pos":[{"mask-l-to":ne()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":ne()}],"mask-image-x-to-pos":[{"mask-x-to":ne()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":ne()}],"mask-image-y-to-pos":[{"mask-y-to":ne()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[te,ee]}],"mask-image-radial-from-pos":[{"mask-radial-from":ne()}],"mask-image-radial-to-pos":[{"mask-radial-to":ne()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Q()}],"mask-image-conic-pos":[{"mask-conic":[we]}],"mask-image-conic-from-pos":[{"mask-conic-from":ne()}],"mask-image-conic-to-pos":[{"mask-conic-to":ne()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:oe()}],"mask-repeat":[{mask:le()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",te,ee]}],filter:[{filter:["","none",te,ee]}],blur:[{blur:ue()}],brightness:[{brightness:[we,te,ee]}],contrast:[{contrast:[we,te,ee]}],"drop-shadow":[{"drop-shadow":["","none",M,dr,ur]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",we,te,ee]}],"hue-rotate":[{"hue-rotate":[we,te,ee]}],invert:[{invert:["",we,te,ee]}],saturate:[{saturate:[we,te,ee]}],sepia:[{sepia:["",we,te,ee]}],"backdrop-filter":[{"backdrop-filter":["","none",te,ee]}],"backdrop-blur":[{"backdrop-blur":ue()}],"backdrop-brightness":[{"backdrop-brightness":[we,te,ee]}],"backdrop-contrast":[{"backdrop-contrast":[we,te,ee]}],"backdrop-grayscale":[{"backdrop-grayscale":["",we,te,ee]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[we,te,ee]}],"backdrop-invert":[{"backdrop-invert":["",we,te,ee]}],"backdrop-opacity":[{"backdrop-opacity":[we,te,ee]}],"backdrop-saturate":[{"backdrop-saturate":[we,te,ee]}],"backdrop-sepia":[{"backdrop-sepia":["",we,te,ee]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":q()}],"border-spacing-x":[{"border-spacing-x":q()}],"border-spacing-y":[{"border-spacing-y":q()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",te,ee]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[we,"initial",te,ee]}],ease:[{ease:["linear","initial",_,te,ee]}],delay:[{delay:[we,te,ee]}],animate:[{animate:["none",K,te,ee]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,te,ee]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:xe()}],"rotate-x":[{"rotate-x":xe()}],"rotate-y":[{"rotate-y":xe()}],"rotate-z":[{"rotate-z":xe()}],scale:[{scale:ot()}],"scale-x":[{"scale-x":ot()}],"scale-y":[{"scale-y":ot()}],"scale-z":[{"scale-z":ot()}],"scale-3d":["scale-3d"],skew:[{skew:mt()}],"skew-x":[{"skew-x":mt()}],"skew-y":[{"skew-y":mt()}],transform:[{transform:[te,ee,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:st()}],"translate-x":[{"translate-x":st()}],"translate-y":[{"translate-y":st()}],"translate-z":[{"translate-z":st()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",te,ee]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",te,ee]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[we,Vo,za,Jc]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},mw=K2(pw);function xr(...o){return mw(tg(o))}function gw({delayDuration:o=0,...r}){return w.jsx(O2,{"data-loc":"client/src/components/ui/tooltip.tsx:11","data-slot":"tooltip-provider",delayDuration:o,...r})}const Qp=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,Zp=tg,yw=(o,r)=>c=>{var l;if(r?.variants==null)return Zp(o,c?.class,c?.className);const{variants:d,defaultVariants:h}=r,f=Object.keys(d).map(m=>{const b=c?.[m],p=h?.[m];if(b===null)return null;const x=Qp(b)||Qp(p);return d[m][x]}),v=c&&Object.entries(c).reduce((m,b)=>{let[p,x]=b;return x===void 0||(m[p]=x),m},{}),y=r==null||(l=r.compoundVariants)===null||l===void 0?void 0:l.reduce((m,b)=>{let{class:p,className:x,...M}=b;return Object.entries(M).every(D=>{let[E,H]=D;return Array.isArray(H)?H.includes({...h,...v}[E]):{...h,...v}[E]===H})?[...m,p,x]:m},[]);return Zp(o,f,y,c?.class,c?.className)},bw=yw("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function vw({className:o,variant:r,size:c,asChild:l=!1,...d}){const h=l?Db:"button";return w.jsx(h,{"data-loc":"client/src/components/ui/button.tsx:52","data-slot":"button",className:xr(bw({variant:r,size:c,className:o})),...d})}function ww({className:o,...r}){return w.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:7","data-slot":"card",className:xr("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",o),...r})}function Aw({className:o,...r}){return w.jsx("div",{"data-loc":"client/src/components/ui/card.tsx:66","data-slot":"card-content",className:xr("px-6",o),...r})}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hg=(...o)=>o.filter((r,c,l)=>!!r&&l.indexOf(r)===c).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=I.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:l,className:d="",children:h,iconNode:f,...v},y)=>I.createElement("svg",{ref:y,...Sw,width:r,height:r,stroke:o,strokeWidth:l?Number(c)*24/Number(r):c,className:hg("lucide",d),...v},[...f.map(([m,b])=>I.createElement(m,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=(o,r)=>{const c=I.forwardRef(({className:l,...d},h)=>I.createElement(Mw,{ref:h,iconNode:r,className:hg(`lucide-${Tw(o)}`,l),...d}));return c.displayName=`${o}`,c};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=yn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=yn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=yn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=yn("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=yn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=yn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=yn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=yn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=yn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=yn("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function Dw(o,r){if(o instanceof RegExp)return{keys:!1,pattern:o};var c,l,d,h,f=[],v="",y=o.split("/");for(y[0]||y.shift();d=y.shift();)c=d[0],c==="*"?(f.push(c),v+=d[1]==="?"?"(?:/(.*))?":"/(.*)"):c===":"?(l=d.indexOf("?",1),h=d.indexOf(".",1),f.push(d.substring(1,~l?l:~h?h:d.length)),v+=~l&&!~h?"(?:/([^/]+?))?":"/([^/]+?)",~h&&(v+=(~l?"?":"")+"\\"+d.substring(h))):v+="/"+d;return{keys:f,pattern:new RegExp("^"+v+(r?"(?=$|/)":"/?$"),"i")}}var Qc={exports:{}},Zc={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Lw(){if($p)return Zc;$p=1;var o=vr();function r(p,x){return p===x&&(p!==0||1/p===1/x)||p!==p&&x!==x}var c=typeof Object.is=="function"?Object.is:r,l=o.useState,d=o.useEffect,h=o.useLayoutEffect,f=o.useDebugValue;function v(p,x){var M=x(),D=l({inst:{value:M,getSnapshot:x}}),E=D[0].inst,H=D[1];return h(function(){E.value=M,E.getSnapshot=x,y(E)&&H({inst:E})},[p,M,x]),d(function(){return y(E)&&H({inst:E}),p(function(){y(E)&&H({inst:E})})},[p]),f(M),M}function y(p){var x=p.getSnapshot;p=p.value;try{var M=x();return!c(p,M)}catch{return!0}}function m(p,x){return x()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:v;return Zc.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:b,Zc}var em;function Bw(){return em||(em=1,Qc.exports=Lw()),Qc.exports}var Iw=Bw();const Nw=Y0.useInsertionEffect,kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ow=kw?I.useLayoutEffect:I.useEffect,Uw=Nw||Ow,mg=o=>{const r=I.useRef([o,(...c)=>r[0](...c)]).current;return Uw(()=>{r[0]=o}),r[1]},Rw="popstate",Mu="pushState",Cu="replaceState",Gw="hashchange",tm=[Rw,Mu,Cu,Gw],Hw=o=>{for(const r of tm)addEventListener(r,o);return()=>{for(const r of tm)removeEventListener(r,o)}},gg=(o,r)=>Iw.useSyncExternalStore(Hw,o,r),Fw=()=>location.search,Vw=({ssrSearch:o=""}={})=>gg(Fw,()=>o),nm=()=>location.pathname,zw=({ssrPath:o}={})=>gg(nm,o?()=>o:nm),_w=(o,{replace:r=!1,state:c=null}={})=>history[r?Cu:Mu](c,"",o),Xw=(o={})=>[zw(o),_w],am=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[am]>"u"){for(const o of[Mu,Cu]){const r=history[o];history[o]=function(){const c=r.apply(this,arguments),l=new Event(o);return l.arguments=arguments,dispatchEvent(l),c}}Object.defineProperty(window,am,{value:!0})}const jw=(o,r)=>r.toLowerCase().indexOf(o.toLowerCase())?"~"+r:r.slice(o.length)||"/",yg=(o="")=>o==="/"?"":o,qw=(o,r)=>o[0]==="~"?o.slice(1):yg(r)+o,Ww=(o="",r)=>jw(im(yg(o)),im(r)),im=o=>{try{return decodeURI(o)}catch{return o}},bg={hook:Xw,searchHook:Vw,parser:Dw,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:o=>o},vg=I.createContext(bg),qo=()=>I.useContext(vg),wg={},Ag=I.createContext(wg),Yw=()=>I.useContext(Ag),Er=o=>{const[r,c]=o.hook(o);return[Ww(o.base,r),mg((l,d)=>c(qw(l,o.base),d))]},Pu=()=>Er(qo()),Tg=(o,r,c,l)=>{const{pattern:d,keys:h}=r instanceof RegExp?{keys:!1,pattern:r}:o(r||"*",l),f=d.exec(c)||[],[v,...y]=f;return v!==void 0?[!0,(()=>{const m=h!==!1?Object.fromEntries(h.map((p,x)=>[p,y[x]])):f.groups;let b={...y};return m&&Object.assign(b,m),b})(),...l?[v]:[]]:[!1,null]},Sg=({children:o,...r})=>{const c=qo(),l=r.hook?bg:c;let d=l;const[h,f]=r.ssrPath?.split("?")??[];f&&(r.ssrSearch=f,r.ssrPath=h),r.hrefs=r.hrefs??r.hook?.hrefs;let v=I.useRef({}),y=v.current,m=y;for(let b in l){const p=b==="base"?l[b]+(r[b]||""):r[b]||l[b];y===m&&p!==m[b]&&(v.current=m={...m}),m[b]=p,(p!==l[b]||p!==d[b])&&(d=m)}return I.createElement(vg.Provider,{value:d,children:o})},om=({children:o,component:r},c)=>r?I.createElement(r,{params:c}):typeof o=="function"?o(c):o,Kw=o=>{let r=I.useRef(wg);const c=r.current;return r.current=Object.keys(o).length!==Object.keys(c).length||Object.entries(o).some(([l,d])=>d!==c[l])?o:c},ga=({path:o,nest:r,match:c,...l})=>{const d=qo(),[h]=Er(d),[f,v,y]=c??Tg(d.parser,o,h,r),m=Kw({...Yw(),...v});if(!f)return null;const b=y?I.createElement(Sg,{base:y},om(l,m)):om(l,m);return I.createElement(Ag.Provider,{value:m,children:b})};I.forwardRef((o,r)=>{const c=qo(),[l,d]=Er(c),{to:h="",href:f=h,onClick:v,asChild:y,children:m,className:b,replace:p,state:x,...M}=o,D=mg(H=>{H.ctrlKey||H.metaKey||H.altKey||H.shiftKey||H.button!==0||(v?.(H),H.defaultPrevented||(H.preventDefault(),d(f,o)))}),E=c.hrefs(f[0]==="~"?f.slice(1):c.base+f,c);return y&&I.isValidElement(m)?I.cloneElement(m,{onClick:D,href:E}):I.createElement("a",{...M,onClick:D,href:E,className:b?.call?b(l===f):b,children:m,ref:r})});const cu=o=>Array.isArray(o)?o.flatMap(r=>cu(r&&r.type===I.Fragment?r.props.children:r)):[o],Jw=({children:o,location:r})=>{const c=qo(),[l]=Er(c);typeof window<"u"&&(window.__WOUTER_ROUTES__||(window.__WOUTER_ROUTES__=[]),cu(o).forEach(h=>{if(I.isValidElement(h)&&h.props.path){const f=h.props.path;window.__WOUTER_ROUTES__.includes(f)||window.__WOUTER_ROUTES__.push(f)}}));for(const d of cu(o)){let h=0;if(I.isValidElement(d)&&(h=Tg(c.parser,d.props.path,r||l,d.props.nest))[0])return I.cloneElement(d,{match:h})}return null};function sm(){const[,o]=Pu(),r=()=>{o("/")};return w.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:14",className:"min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",children:w.jsx(ww,{"data-loc":"client/src/pages/NotFound.tsx:15",className:"w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",children:w.jsxs(Aw,{"data-loc":"client/src/pages/NotFound.tsx:16",className:"pt-8 pb-8 text-center",children:[w.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:17",className:"flex justify-center mb-6",children:w.jsxs("div",{"data-loc":"client/src/pages/NotFound.tsx:18",className:"relative",children:[w.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:19",className:"absolute inset-0 bg-red-100 rounded-full animate-pulse"}),w.jsx(Cw,{"data-loc":"client/src/pages/NotFound.tsx:20",className:"relative h-16 w-16 text-red-500"})]})}),w.jsx("h1",{"data-loc":"client/src/pages/NotFound.tsx:24",className:"text-4xl font-bold text-slate-900 mb-2",children:"404"}),w.jsx("h2",{"data-loc":"client/src/pages/NotFound.tsx:26",className:"text-xl font-semibold text-slate-700 mb-4",children:"Page Not Found"}),w.jsxs("p",{"data-loc":"client/src/pages/NotFound.tsx:30",className:"text-slate-600 mb-8 leading-relaxed",children:["Sorry, the page you are looking for doesn't exist.",w.jsx("br",{"data-loc":"client/src/pages/NotFound.tsx:32"}),"It may have been moved or deleted."]}),w.jsx("div",{"data-loc":"client/src/pages/NotFound.tsx:36",className:"flex flex-col sm:flex-row gap-3 justify-center",children:w.jsxs(vw,{"data-loc":"client/src/pages/NotFound.tsx:37",onClick:r,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",children:[w.jsx(Pw,{"data-loc":"client/src/pages/NotFound.tsx:41",className:"w-4 h-4 mr-2"}),"Go Home"]})})]})})})}class Qw extends I.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}render(){return this.state.hasError?w.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:27",className:"flex items-center justify-center min-h-screen p-8 bg-background",children:w.jsxs("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:28",className:"flex flex-col items-center w-full max-w-2xl p-8",children:[w.jsx(Ew,{"data-loc":"client/src/components/ErrorBoundary.tsx:29",size:48,className:"text-destructive mb-6 flex-shrink-0"}),w.jsx("h2",{"data-loc":"client/src/components/ErrorBoundary.tsx:34",className:"text-xl mb-4",children:"An unexpected error occurred."}),w.jsx("div",{"data-loc":"client/src/components/ErrorBoundary.tsx:36",className:"p-4 w-full rounded bg-muted overflow-auto mb-6",children:w.jsx("pre",{"data-loc":"client/src/components/ErrorBoundary.tsx:37",className:"text-sm text-muted-foreground whitespace-break-spaces",children:this.state.error?.stack})}),w.jsxs("button",{"data-loc":"client/src/components/ErrorBoundary.tsx:42",onClick:()=>window.location.reload(),className:xr("flex items-center gap-2 px-4 py-2 rounded-lg","bg-primary text-primary-foreground","hover:opacity-90 cursor-pointer"),children:[w.jsx(xw,{"data-loc":"client/src/components/ErrorBoundary.tsx:50",size:16}),"Reload Page"]})]})}):this.props.children}}const Mg=I.createContext(void 0);function Zw({children:o,defaultTheme:r="light",switchable:c=!1}){const[l,d]=I.useState(()=>c&&localStorage.getItem("theme")||r);I.useEffect(()=>{const f=document.documentElement;l==="dark"?f.classList.add("dark"):f.classList.remove("dark"),c&&localStorage.setItem("theme",l)},[l,c]);const h=c?()=>{d(f=>f==="light"?"dark":"light")}:void 0;return w.jsx(Mg.Provider,{"data-loc":"client/src/contexts/ThemeContext.tsx:52",value:{theme:l,toggleTheme:h,switchable:c},children:o})}function xu(){const o=I.useContext(Mg);if(!o)throw new Error("useTheme must be used within ThemeProvider");return o}const $w=`# Principles of Computer Architecture - Jacob Peake

**URL:** https://www.jacobpeake.com/principles-of-computer-architecture

---

Home
Writing
CONTENTS
The Performance Equations
The Iron Law
Amdahl's Law
Gustafson's Law
Little's Law
The Roofline Model
The Walls
The End of Dennard Scaling
The Power Wall
The Memory Wall
The ILP Wall
Latency Lags Bandwidth
The Speed of Light
Locality and the Memory Hierarchy
The Principle of Locality
AMAT: Average Memory Access Time
The Three C's
Belady's MIN
Pipelining and Out-of-Order
Pipelining Speedup
Optimal Pipeline Depth
Tomasulo's Algorithm
ROB Sizing as Little's Law
Branch Prediction
Coherence and Consistency
MESI
Energy and Data Movement
The Horowitz Energy Table
The Cost of Distance
The Levers
Make the Common Case Fast
Pollack's Rule
Specialisation
Throughput vs Latency
Surface-to-Volume Scaling
The Bandwidth-Delay Product
Reliability at Scale
FIT and MTBF
Synthesis
Reading Any Architecture: The Six Questions
The Deeper Point
Standard Machines

Teaching AI to design advanced chips. Get in touch.

Principles of Computer Architecture

In 1990, John Hennessy and David Patterson published Computer Architecture: A Quantitative Approach. The book replaced design-by-intuition with design-by-formula. Equations a designer could plug numbers into and get a defensible answer. Architecture became quantitative.

The principles haven't changed since. Roofline (2009) is the youngest equation in regular use;
Little's Law (1961) is the oldest. Amdahl's Law was published in 1967, the same year Tomasulo described the out-of-order mechanism every modern CPU still uses. Most of computer architecture is the same handful of equations, applied to different numbers.

The numbers, of course, are doing the heavy lifting. Dennard Scaling ended around 2006.
Moore's Law ended around 2015. The single-threaded performance growth rate dropped from 52%/year (1986–2003) to 3%/year (2015 onward). Every wall the principles describe is now what the field is actively routing around. The explosion of silicon for AI is the field collecting the answer the principles always pointed to: spend energy on what matters, spend silicon where the workload lives, and don't fight physics.

What follows is the computer architecture canon.

The Performance Equations

Four equations carry most of the weight. Every other principle in this post is a corollary, an empirical refinement, or a consequence of one of these.

THE IRON LAW

𝑇
program
=
Instructions
Program
×
Cycles
Instruction
×
Time
Cycle
T
program
	​

=
Program
Instructions
	​

×
Instruction
Cycles
	​

×
Cycle
Time
	​


Time = Instruction Count × Cycles Per Instruction × Cycle Time

IC (instruction count) is set by the algorithm, the ISA, and the compiler. CPI (cycles per instruction) is set by the microarchitecture: pipelining, ILP, caches, out-of-order machinery. CT (cycle time) is set by the process node and the longest combinational path between latches.

Coined by Clark and Emer at DEC in the early 1980s; canonised by H&P in 1990. The point isn't that the equation is hard (it's trivial); it's that every optimisation has to land somewhere. A wider issue width attacks CPI; a vector ISA attacks IC; a deeper pipeline attacks CT (often at the cost of CPI). You cannot speed up a program without changing one of the three terms.

Modern superscalar integer cores sustain 0.25–0.5 CPI on tight loops (IPC 2–4); pointer-chasing code sits at CPI > 5. Apple's M4 and Intel's Lion Cove peak around IPC 8 on hand-tuned kernels. The three-decade story of CPU microarchitecture is the asymptotic battle to push CPI below 0.5 on real code, and it has stalled there.

AMDAHL'S LAW

𝑆
(
𝑁
)
=
1
(
1
−
𝑝
)
+
𝑝
/
𝑁
S(N)=
(1−p)+p/N
1
	​


Where 
𝑝
p is the parallelisable fraction of a program and 
𝑁
N is the processor count. The serial tail dominates as 
𝑁
→
∞
N→∞: maximum speedup is bounded at 
1
/
(
1
−
𝑝
)
1/(1−p) regardless of how many processors you throw at the problem.

The single most quoted equation in the field, and the one that justifies the entire enterprise of making the common case fast, because no amount of effort spent optimising the rare case can overcome the serial fraction it leaves untouched.

If 95% of your code parallelises, the maximum possible speedup is 20×. If 99%, 100×. For frontier-AI training at 100,000+ chips, even a 0.01% serial fraction caps you at 10,000×, far below linear. Real systems are worse than Amdahl predicts, because the formula ignores communication and synchronisation overhead. Amdahl is an upper bound, not a target.

GUSTAFSON'S LAW

𝑆
(
𝑁
)
=
𝑁
−
𝛼
(
𝑁
−
1
)
S(N)=N−α(N−1)

Where 
𝛼
α is the serial fraction of the scaled-up workload.

The counter to Amdahl. Amdahl assumes a fixed problem solved on more processors (strong scaling); Gustafson assumes the problem grows with the processor count (weak scaling). In practice, supercomputers don't shrink wallclocks on yesterday's problem; they tackle bigger problems in the same wallclock. Frontier-model training is weak-scaling: the model size and batch size grow with the cluster, so Amdahl's pessimism over-fires.

LITTLE'S LAW

𝐿
=
𝜆
𝑊
L=λW

Average concurrency = throughput × average latency.
Average number of things in a system = the rate at which they arrive × the average time they stay.

The most general principle in the entire field. Whenever you ask "how much do I need in flight to saturate this thing?", you are asking Little's Law.

It is used to size every buffer in a chip. Any buffer holding in-flight work has to be at least L = λW entries; make it shallower and it fills, back-pressures the producer, and throughput drops below the peak you were aiming for.

ROB Sizes: ROB ≥ IPC × stall latency
MLP: outstanding misses ≥ bandwidth × latency / line size
TCP Windows: window ≥ bandwidth × RTT
GPU Warp Counts: resident warps ≥ memory latency / arithmetic latency + 1

The same equation, over and over, applied at different layers of the stack.

A worked example: 1 TB/s HBM at 80 ns latency with 64-byte cache lines requires ~1,250 outstanding misses to saturate. This is exactly why H100 and B200 push MSHR counts and outstanding-load capacity so hard; without them, the bandwidth on the spec sheet is unreachable.

THE ROOFLINE MODEL

𝑃
attainable
=
min
⁡
(
𝜋
peak
,
  
𝐼
⋅
𝛽
peak
)
P
attainable
	​

=min(π
peak
	​

,I⋅β
peak
	​

)

𝑃
attainable
P
attainable
	​

 = attainable performance (FLOP/s)
𝜋
π = peak compute (FLOP/s)
𝛽
β = peak memory bandwidth (B/s)
𝐼
I = arithmetic intensity (FLOPs per byte loaded)

A kernel runs no faster than the lower of two ceilings: the hardware's peak FLOP rate, or the rate at which memory can feed it operands, with the kernel's arithmetic intensity deciding which one binds.

The ridge point (where the kernel transitions from memory- to compute-bound) is at 
𝐼
∗
=
𝜋
/
𝛽
I
∗
=π/β. Below it, performance scales linearly with bandwidth: 
𝑃
=
𝛽
⋅
𝐼
P=β⋅I.
Above it, performance saturates at peak: 
𝑃
=
𝜋
P=π.

The most useful single diagram in modern accelerator design.

π = 4.5 PF/s
P = β · I
memory-bound
compute-bound
I* ≈ 563
GEMV (I ≈ 2)
GEMM (I ≈ 2,731)
1
10
100
1k
10k
1
10
100
1k
10k
Arithmetic Intensity (FLOP/B, log)
Performance (TFLOP/s, log)

Modern AI rooflines (dense FP8):

H100 SXM5: 1,979 TF/s, 3.35 TB/s. 
𝐼
∗
≈
591
I
∗
≈591 FLOP/B.
B200: 4,500 TF/s, 8 TB/s. 
𝐼
∗
≈
563
I
∗
≈563 FLOP/B.
MI300X: 2,610 TF/s, 5.3 TB/s. 
𝐼
∗
≈
492
I
∗
≈492 FLOP/B.

LLM kernel intensities tell the inference story:

Square GEMM (M = N = K = 4096) FP8: 
𝐼
≈
2
𝐾
/
3
≈
2,731
I≈2K/3≈2,731 FLOP/B, compute-bound.
GEMV (single-token decode step) FP8: 
𝐼
≈
2
I≈2 FLOP/B, memory-bound.

That single ratio is why prefill and training are compute-bound, why decode is bandwidth-bound, and why precision-halving (FP32 → FP16 → FP8 → FP4) helps even when peak FLOPs don't move: halving the bytes per element doubles 
𝐼
I. Each generation of accelerator pushes 
𝜋
π up faster than 
𝛽
β, so the ridge migrates rightward; workloads that were compute-bound on H100 can be bandwidth-bound on Rubin without changing a line of code.

The Walls

The walls are physics-and-economics asymptotes. They aren't theorems; they're empirical limits the field has been bumping against for two decades.

THE END OF DENNARD SCALING

Robert Dennard's 1974 paper made the gift Moore's Law was always meant to deliver. Shrink linear dimensions by 
1
/
𝑘
1/k, and you get: area 
↓
𝑘
2
↓k
2
, voltage 
↓
𝑘
↓k, frequency 
↑
𝑘
↑k, power per transistor 
↓
𝑘
2
↓k
2
, power density: constant. Every node, twice the transistors at the same area, the same power, and a higher clock, for free.

It held until ~2006. Then threshold voltage couldn't drop further without exponential subthreshold leakage; supply voltage stuck ~1V; clock frequency froze around 3–4 GHz.

The multicore turn was forced, not chosen. Without Dennard, the only remaining lever for performance is parallelism, and every architectural development since 2006 (multicore, GPUs, TPUs, chiplets, DSAs) is a consequence.

THE POWER WALL

𝑃
dyn
=
𝛼
⋅
𝐶
⋅
𝑉
𝑑
𝑑
2
⋅
𝑓
P
dyn
	​

=α⋅C⋅V
dd
2
	​

⋅f

𝑃
dyn
P
dyn
	​

 = dynamic power
𝛼
α = activity factor
𝐶
C = total switched capacitance
𝑉
𝑑
𝑑
V
dd
	​

 = supply voltage
𝑓
f = clock frequency

Dynamic (switching) power is quadratic in voltage and linear in frequency. Halving 
𝑉
𝑑
𝑑
V
dd
	​

 drops power by 4×: the entire basis for DVFS. But 
𝑉
V and 
𝑓
f are coupled (faster transistors need higher 
𝑉
V to meet timing), so above a sweet spot, power scales roughly cubically with frequency.

Leakage adds an exponential: 
𝑃
leak
∝
𝑉
𝑑
𝑑
⋅
𝑒
−
𝑉
𝑇
/
𝑛
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
P
leak
	​

∝V
dd
	​

⋅e
−V
T
	​

/nV
therm
	​

 (
𝑉
𝑇
V
T
	​

 = threshold voltage; 
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
V
therm
	​

 ≈ 26 mV at room temp; 
𝑛
n ≈ 1–1.5). Drop the threshold voltage to scale, and leakage explodes. This is what killed Dennard.

The hard ceiling is power density, not power. Around 2004, single-die heat flux saturated near 100–150 W/cm², comparable to a hot plate. Cooling is bounded by die area, not total wattage; push more power through a fixed-area die and cooling cost rises exponentially.

Modern accelerators sit at 700 W (H100) → 1,000 W (B200) → 1,400 W (B300) → ~1,800 W (Rubin Ultra). Air cooling effectively ended with Hopper. Liquid is mandatory above ~1 kW per chip; immersion is on the table for the next generation after that.

THE MEMORY WALL

The framing was simple: CPU performance was growing ~60%/year, DRAM latency only ~7%/year. Two diverging exponentials. Downstream someplace, average memory access time approaches miss penalty regardless of hit rate.

Today: a DRAM miss costs ~200–300 cycles. A modern CPU without caches would stall almost continuously.

For accelerators, the memory wall takes a different shape. HBM bandwidth grows ~30%/year; peak compute ~60–100%/year. The arithmetic intensity required to be compute-bound rises every generation; the roofline ridge migrates right. The chip whose ridge sits in the workload's intensity range wins. That's why HBM capacity and bandwidth are more contested than peak FLOPs in modern AI silicon: peak is cheap, feeding it is expensive.

THE ILP WALL

Even with oracle prediction and infinite resources, achievable ILP plateaus around 7–60 depending on workload, with most SPEC benchmarks well under 10. With realistic predictors, the practical ceiling is ~5.

Why:

Branches. ~20% of instructions, 3–5% mispredict even with state-of-the-art TAGE-SC-L, and ~20-cycle bubble per mispredict.
True data dependencies. Hardware can't eliminate them; renaming only attacks false dependencies (WAW, WAR).
Memory aliasing. Ambiguity forces conservative serialisation.

Real cores reach IPC ~3–4 sustained on integer SPEC despite ROB sizes well over 500. Width above 8-wide has been tried (Power, Itanium) and the marginal returns flatten quickly. The gap between issue width and sustained IPC is the ILP wall, made concrete.

LATENCY LAGS BANDWIDTH

Patterson's rule of thumb: in the time bandwidth doubles, latency improves only 1.2–1.4×. Equivalently, bandwidth improves roughly as the square of latency. Across 25 years of microprocessors, DRAM, networks, and disks, the pattern is uniform: bandwidth scaled 100–1000×, latency 4–40×.

This is the most important practical principle in the post. You can buy bandwidth: more channels, wider buses, more lanes, more chips. You cannot buy latency past physical limits. Every architecture that wins, wins by hiding latency with concurrency rather than reducing it. Warps hide DRAM latency on GPUs. ROBs hide L2/L3 misses on CPUs. TMA hides global-memory latency behind matmul on Hopper. Patterson's law is the reason every one of these tricks exists.

THE SPEED OF LIGHT

In free space, ≈30 cm/ns. In copper PCB trace, ≈15 cm/ns (≈2/3 c). Practical floors:

1 mm on-chip wire: 5 ps physical, ~200 ps actual (RC delay dominates over ToF at sub-mm scales).
1 m cable: 7 ns one-way, 14 ns round-trip.
Rack-to-rack in a datacentre: ~100 ns one-way.
Across a continent: ~50 ms.

You can shorten paths. That's exactly what chiplets (20 mm cross-die → 1 mm hybrid-bonded), HBM (DRAM millimetres from compute, not centimetres), and rack-as-one-GPU domains do. But you cannot beat physics.

This is why NVL72's passive copper backplane has a maximum reach of ~2 m, and why NVL576 needed a redesigned chassis (Kyber) to keep every NVLink path within copper distance. Beyond that, the bits go on glass, and pluggable optics dominate the power budget.

Locality and the Memory Hierarchy
THE PRINCIPLE OF LOCALITY

Empirical, not provable. Programs use a small fraction of memory most of the time.

Two flavours:

Temporal locality. Data referenced now is likely to be referenced soon (loops, working sets).
Spatial locality. Data near just-referenced data is likely to be referenced soon (arrays, sequential access).

90/10 rule: 90% of execution time is spent in 10% of code. Locality is the only reason caches work at all. Without it, a cache would hit at rate (cache size / memory size), essentially zero. With it, hit rates of 95–99% are routine across general-purpose workloads.

Locality is also the principle every domain-specific architecture exploits more aggressively than a CPU does. A systolic array wires temporal reuse into the silicon: each weight is reused 128–256 times across the row without re-fetching. A scratchpad replaces a cache when the access pattern is predictable enough that hardware prediction is wasted silicon. Specialisation is, in part, the art of identifying which locality pattern your workload has and baking it into the topology.

AMAT: AVERAGE MEMORY ACCESS TIME

AMAT
=
𝑡
hit
+
MR
⋅
𝑡
miss
AMAT=t
hit
	​

+MR⋅t
miss
	​


𝑡
hit
t
hit
	​

 = hit latency at this tier
MR = miss rate (fraction of accesses that miss this tier)
𝑡
miss
t
miss
	​

 = miss penalty (time to satisfy the miss from the next tier)

Recursive across levels: 
𝑡
miss
,
𝐿
1
=
𝑡
hit
,
𝐿
2
+
MR
𝐿
2
⋅
𝑡
miss
,
𝐿
2
t
miss,L1
	​

=t
hit,L2
	​

+MR
L2
	​

⋅t
miss,L2
	​

, and so on through L3 and DRAM.

A modern datacentre AI hierarchy (B200 / GB200 NVL72 era), latency-ordered from a GPU's perspective:

Tier	Capacity	Latency	Bandwidth	Energy
Register file	~256 KB / SM	<1 ns	~20 TB/s / SM	~0.03 pJ/B
SRAM (SMEM / L1)	~228 KB / SM	~17 ns	~33 TB/s	~0.3 pJ/B
L2 cache	50–126 MB	~150 ns	~5 TB/s	~2 pJ/B
HBM (local GPU)	80–192 GB	~280 ns	3.4–8 TB/s	~40 pJ/B
HBM via NVLink (NVL72)	~13.8 TB pool	~1 µs	130 TB/s aggregate	~50 pJ/B
Host DRAM (PCIe Gen5)	~1 TB / node	~1–2 µs	~55 GB/s	~100 pJ/B
NVMe SSD (Gen5)	10s TB / node	~100 µs	~14 GB/s	~600 pJ/B
Cross-rack RDMA (XDR)	datacentre-scale	~2 µs	800 Gb/s / NIC	~225 pJ/B

The hierarchy spans ~7 orders of magnitude in capacity and ~5 in latency. Per-byte energy grows with distance even faster than latency does.

THE THREE C'S

Every cache miss is one of three:

Compulsory (cold). First reference. Reduce by larger lines or prefetching.
Capacity. Working set exceeds cache. Reduce by a larger cache.
Conflict. Associativity insufficient. Reduce by higher associativity. (Absent in fully-associative)

A useful fourth, Coherence, for multiprocessor invalidations.

The taxonomy is more useful than it looks. It tells you which lever to pull: compulsory misses don't shrink with a bigger cache, capacity misses don't shrink with prefetching, conflict misses don't shrink with longer lines.

BELADY'S MIN

Theorem: evicting the line whose next reference is furthest in the future minimises total misses. Optimal, but offline-only, since it requires future knowledge.

LRU and its approximations (RRIP, NRU, Hawkeye, Mockingjay) try to predict the future from the past. The empirical gap between LRU and MIN is ~1.5–2× more misses on typical workloads. Hawkeye (Jain & Lin, ISCA 2016) closes ~80% of that gap by learning MIN's decisions on past traces and replaying them as predictions. It is one of the prettier results of modern microarchitecture: the optimal policy is uncomputable, but it can be approximated by training on its own history.

Pipelining and Out-of-Order
PIPELINING SPEEDUP

𝑆
=
𝑁
1
+
(
𝑁
−
1
)
/
𝑘
⋅
1
1
+
CPI
stall
S=
1+(N−1)/k
N
	​

⋅
1+CPI
stall
	​

1
	​


𝑆
S = speedup over the unpipelined version
𝑁
N = pipeline depth (number of stages)
𝑘
k = number of instructions executed
CPI
stall
CPI
stall
	​

 = average stall cycles per instruction (from hazards)

For long programs, 
𝑆
→
𝑁
/
(
1
+
CPI
stall
)
S→N/(1+CPI
stall
	​

). Throughput approaches one instruction per cycle; latency is unchanged. Pipelining is a pure throughput optimisation.

Three classes of hazard stall the pipeline:

Structural: two instructions need the same resource. Fix: replicate or pipeline the resource.
Data: register dependencies between instructions (RAW, WAW, WAR). Fix: forwarding or stalls for RAW; register renaming for the false ones (WAW, WAR).
Control: branches. Fix: predict and pay the penalty on mispredict.
OPTIMAL PIPELINE DEPTH

Performance-optimal depth: ~50 stages, ~18 FO4 per stage. Power-aware optimum: ~7 stages, ~22.5 FO4 per stage. When you optimise BIPS³/W instead of pure throughput, the answer collapses to a much shallower pipeline.

The Pentium 4 went deep (20–31 stages) chasing peak frequency and ran headlong into the power wall. Core 2 onwards retreated to ~14-stage pipelines: the architecturally-justified response. Latch overhead per stage, branch mispredict penalty (proportional to depth), and memory-stall blocking together cap depth long before the silicon does.

TOMASULO'S ALGORITHM

Solves WAW and WAR hazards via register renaming through reservation-station tags. Decouples issue from execution: instructions wait in reservation stations until operands arrive on the common data bus, then execute out of program order. In-order commit via the reorder buffer was added by Smith and Pleszkun in 1985, giving Tomasulo precise exceptions and clean branch-misprediction recovery: instructions execute out of order but retire in program order, so a fault or speculation-squash leaves the architectural state at a consistent point.

The mechanism is sixty years old. Every modern out-of-order CPU is a refinement of it. Wider, deeper, faster, but the same algorithm.

ROB SIZING AS LITTLE'S LAW

ROB
≥
IPC
target
⋅
𝑡
stall
ROB≥IPC
target
	​

⋅t
stall
	​


A ROB has to hold every in-flight instruction. To hide a stall, the ROB must be at least throughput × stall duration: Little's Law applied to the issue queue. A 300-cycle DRAM miss at IPC 4 implies a 1,200-entry ROB to hide completely. No real core has that.

Modern values: Intel Lion Cove (2024): 576. AMD Zen 5: 448. AMD Zen 3: 256.

Real cores are an order of magnitude too small to hide DRAM through OoO alone, so they rely on the cache hierarchy to absorb most stalls and use OoO to hide L1/L2 latencies. The lesson is that the ROB and the cache are two halves of the same latency-hiding budget. Spending more on one without the other is wasted silicon.

BRANCH PREDICTION

Branch CPI penalty:
CPI
branch
=
𝑓
branch
⋅
𝑝
mispredict
⋅
penalty
CPI
branch
	​

=f
branch
	​

⋅p
mispredict
	​

⋅penalty

CPI
branch
CPI
branch
	​

 = extra cycles per instruction due to branch mispredictions
𝑓
branch
f
branch
	​

 = fraction of instructions that are branches
𝑝
mispredict
p
mispredict
	​

 = probability the predictor gets a branch wrong
penalty = pipeline-flush cost per misprediction (cycles, ∝ pipeline depth)

Today: 
𝑓
branch
≈
0.20
f
branch
	​

≈0.20, 
𝑝
mispredict
≈
0.03
p
mispredict
	​

≈0.03, penalty ≈ 20 cycles → ~0.12 CPI added.

Predictor evolution:

Two-level (Yeh & Patt 1991): local + global history.
Perceptron (Jiménez & Lin, HPCA 2001): used in AMD Zen.
TAGE (Seznec & Michaud 2006): geometric history lengths, tagged.
TAGE-SC-L (Seznec, CBP-4 2014): current state of the art, ~3–5 MPKI on SPEC.

The remaining mispredictions on data-dependent branches (branches whose outcome depends on input values rather than control state) are the dominant pipeline overhead in modern OoO cores. They are also the hardest to attack: by definition, the predictor cannot learn them from program state alone.

Coherence and Consistency
MESI

The canonical cache-coherence protocol. Each cached line sits in one of four states:

Modified: dirty here, stale everywhere else; on a remote read from another core, write the line back to memory and downgrade to Shared.
Exclusive: clean, held only by this cache; can transition silently to Modified on a local write.
Shared: clean, may be cached elsewhere; a local write must broadcast an invalidation to the other caches first, then transition to Modified.
Invalid: not present.

Reads hit on M/E/S. Writes need exclusive ownership: M and E already have it (silent write); S must first broadcast an invalidation to upgrade to M. The four-state machine guarantees coherence: every cached copy of an address eventually agrees on its value.

M
Modified
E
Exclusive
S
Shared
I
Invalid

● read hit     ● read miss     ● write hit     ● write miss
solid = local processor action     dotted = snoop (another core's bus traffic)

Consistency is the harder problem (what ordering of memory operations across multiple addresses on multiple processors does the programmer see?), and is the subject of memory models (sequential, TSO, release-consistent, weak), separate from coherence.

Coherence cost scales with 
𝑁
N cores:

Snooping bus: bandwidth 
∝
𝑁
∝N. Breaks down past ~16 cores.
Directory: storage 
∝
log
⁡
𝑁
∝logN, but indirection latency. Used in modern mesh and ring NoCs.

This is why scale-up domains have a ceiling. NVL72 binds 72 GPUs into one coherent fabric. NVL576 scales to 576 dies. Beyond that, the cost of maintaining coherence outpaces the workload's tolerance for it, and the only escape is to drop coherence and switch to message-passing. Most architectures do this at the rack boundary (i.e. RDMA over InfiniBand); Google's TPU goes further, dropping coherence within scale-up itself (ICI is message-passing across the entire 9,216-chip superpod). Every architecture has to choose a coherence boundary, and the choice defines the natural unit of scale-up.

Energy and Data Movement
THE HOROWITZ ENERGY TABLE

Measured at 45 nm CMOS.

Operation	Energy
8-bit int ADD	0.03 pJ
32-bit int ADD	0.1 pJ
16-bit FP ADD	0.4 pJ
32-bit FP ADD	0.9 pJ
8-bit int MUL	0.2 pJ
32-bit FP MUL	3.7 pJ
32-bit register read	~0.1 pJ
8 KB SRAM read	~10 pJ
1 MB SRAM read	~100 pJ
DRAM access (64 b)	~640 pJ

A DRAM access costs ~6,400× a 32-bit add. Memory dominates compute by two to three orders of magnitude. At 7 nm and below, on-chip energy roughly halves; DRAM energy/bit barely moves. The gap widens with each node. HBM gets you to ~5 pJ/bit (HBM3), ~4 pJ/bit (HBM3E), ~2.5 pJ/bit (HBM4 projected), better than DDR5, but still 50× the cost of an on-chip ALU operation.

THE COST OF DISTANCE

Energy per data movement scales with distance. Approximate values at modern nodes:

Movement	Energy
Local register	~0.1 pJ
1 mm on-chip	~6 pJ
20 mm on-chip (cross-die)	~50 pJ
Off-chip (DRAM)	~640 pJ
Cross-rack (optical)	~10 nJ per word

This is the deepest principle in modern AI silicon design. Every architectural choice is a battle against data-movement energy. Bring compute to data, not data to compute.

Particularly:

Systolic arrays (TPU MXU, MI300X Matrix Cores): each weight reused 128–256× without leaving the array. Data reuse is wired into the silicon.
3D-stacked memory (HBM; MI300X's hybrid-bonded SoIC): puts memory < 1 mm from compute, instead of cm.
On-package HBM vs DDR DIMMs: ~5× lower pJ/bit, ~10× higher bandwidth.
Chiplets: shorten cross-die paths from cm-scale package routing to mm-scale interposer.
Wafer-scale (Cerebras): the on-die fabric is "free": same silicon, no package crossing, no PCB trace, no cable.
The Levers
MAKE THE COMMON CASE FAST

The corollary of Amdahl: you cannot speed up the program past 
1
/
(
1
−
𝑝
)
1/(1−p), so you must reduce the part that doesn't benefit from speedup, by optimising what executes most.

The 90/10 rule operationalises it: 10% of static code is 90% of dynamic execution. Profile, optimise the hot path, ignore the rest. It sounds obvious. It is also the most ignored principle in the field: generations of architects have built clever support for cases that almost never execute, paying area and power for unused capability. The principle is a reminder to measure first.

POLLACK'S RULE

Performance
∝
Area
Performance∝
Area
	​


Doubling core area buys ~1.4× performance. Many small cores beat one big core in performance per area. Pollack + Amdahl together predict almost the entire shape of modern heterogeneous chips: a few big cores to handle the serial fraction (Amdahl), many small cores for the parallel fraction (Pollack). ARM big.LITTLE, Apple's E-cores + P-cores, the GPU SM-vs-CPU split: all of them fall out of the same two equations.

SPECIALISATION

In a 64-bit out-of-order core, the actual ALU operation costs ~1% of the energy. The other 99% goes to instruction fetch, decode, rename, schedule, ROB, register file, and the cache hierarchy that feeds them. The general-purpose CPU spends 99% of its energy on overhead.

A domain-specific architecture strips the overhead. Static schedule → no fetch/decode/rename. Predictable access patterns → scratchpad replaces cache. Single-precision target → no mixed-precision pipeline. The Hennessy-Patterson 2018 Turing Lecture pinned it: ~100× efficiency available via specialisation, paid in generality.

THROUGHPUT VS LATENCY

Two distinct goals; almost always a trade-off.

Throughput = ops/second (aggregate). Bought by parallelism, pipelining, batching.
Latency = time per op (single flow). Reduced by caching, speculation, prefetching (when they hit).

CPUs optimise latency: deep OoO, big caches, branch prediction, few threads. GPUs optimise throughput: massive thread parallelism, SIMT, latency hidden by warp swap. The same workload looks completely different on the two.

Inference splits along this axis. Prefill is throughput-bound (batch many tokens through GEMM). Decode is latency-bound (one token at a time, weight-bound). Disaggregated serving (separate prefill and decode pools) wins exactly because the two regimes want different machines.

SURFACE-TO-VOLUME SCALING

For a workload partitioned across 
𝑃
P processors with computation 
∝
𝑉
/
𝑃
∝V/P and communication 
∝
𝑆
/
𝑃
(
𝑑
−
1
)
/
𝑑
∝S/P
(d−1)/d
 in 
𝑑
d dimensions:

Comm
Comp
∝
1
𝐿
where 
𝐿
=
(
𝑉
𝑃
)
1
/
𝑑
Comp
Comm
	​

∝
L
1
	​

where L=(
P
V
	​

)
1/d

𝑃
P = number of processors (the partition count)
𝑉
V = total problem volume (e.g., grid points, matrix elements)
𝑆
S = surface area, aggregate data exchanged between neighbouring sub-domains each step
𝑑
d = dimensionality of the partition (2 for grids, 3 for cubes)
𝐿
L = linear size of one processor's sub-domain

Larger blocks per processor → less relative communication. This is the strong-scaling tax. Folklore in H&P; canonical reference in Foster's Designing and Building Parallel Programs (1995).

THE BANDWIDTH-DELAY PRODUCT

BDP
=
bandwidth
⋅
round-trip-delay
BDP=bandwidth⋅round-trip-delay

Required outstanding bytes to fill a link. Same form as Little's Law; it is Little's Law applied to networks.

A 400 Gbps link with 5 µs RTT requires ~250 KB in flight to saturate. For collectives: ring all-reduce achieves bandwidth-optimal pattern; bisection bandwidth bounds steady-state throughput.

Reliability at Scale
FIT AND MTBF

MTBF
=
10
9
FIT
per device
⋅
𝑁
devices
  
hours
MTBF=
FIT
per device
	​

⋅N
devices
	​

10
9
	​

hours

MTBF = Mean Time Between Failures, average wallclock time between any two failures in a system of 
𝑁
N devices.
FIT = Failures In Time: failures per 
10
9
10
9
 device-hours. Modern SRAM sits at ~100–1,000 FIT/Mbit at sea level (vendor- and node-specific; treat any specific number with skepticism unless backed by a JEDEC JESD89 test report).

At 100,000-GPU scale, the cluster MTBF for any single hardware fault is ~30 minutes. The architecture is partly defined by what you do when things break.

Defences:

ECC (SEC-DED): single-error correct, double-detect. ~12.5% storage overhead.
ChipKill: tolerates a whole DRAM chip failure.
Asynchronous checkpointing: save state every N steps, roll back on fault. Trade compute for resilience. Orbax-style checkpointing is now standard in frontier-AI training stacks.
Redundant computation, replication, hot spares: increasingly relevant at AI cluster scale.

The 100,000-chip training run is the regime where reliability stops being a hardware concern and becomes a system-design concern. Every ExaFLOPS-class deployment (NVL72 SuperPODs, TPU Ironwood pods, Helios racks) ships with the recovery story baked into the software.

Synthesis
READING ANY ARCHITECTURE: THE SIX QUESTIONS
What's the workload? Determines arithmetic intensity (roofline), control complexity, locality.
Where does data live? Memory hierarchy, scratchpad vs cache, capacity, bandwidth.
How does data get to compute? DMA, prefetch, async copy, TMA, systolic dataflow.
What does compute look like? Width, depth, precision, programmability, scalar/vec/matrix.
How do chips compose? Scale-up, scale-out, fabric topology.
Where do the joules go? Almost always: data movement.
THE DEEPER POINT

Every principle here predates 2010. The Iron Law still holds. Amdahl still holds. Little's Law was true in 1961 and will be true in 2061. The walls didn't disappear; the field routed around them with parallelism, caching, specialisation, and chiplets.

What changed is the numbers, and the workload. Dennard scaling ended; the multicore turn was forced. Moore ended; chiplets and 3D stacking emerged. The memory wall got worse, not better; HBM and on-package memory routed around it. The ILP wall held; throughput-oriented architectures (GPUs, TPUs) sidestepped it by giving up serial latency for parallel concurrency. The energy gap between compute and memory grew; the field organised around minimising data movement.

Every architecture is a different parametrisation of the same set of equations.`,e1=`# 计算机体系结构原理

1990年，John Hennessy 和 David Patterson 出版了《计算机体系结构：定量方法 (Computer Architecture: A Quantitative Approach)》。这本书用以公式设计 (design-by-formula) 取代了凭直觉设计 (design-by-intuition)。这些方程使设计师能够把数字代入并得到一个可辩护的答案。体系结构变得定量化。

这些原则自那时起没有改变。 Roofline (2009) 是目前常用方程中最年轻的； Little's Law (1961) 是最古老的。 Amdahl's Law 于 1967 年发表，同年 Tomasulo 描述了每个现代 CPU 仍在使用的乱序（out-of-order）机制。 计算机体系结构的大部分就是同样的几条方程，应用于不同的数值。

当然，数字在承担主要工作。丹纳德缩放（Dennard Scaling）大约在2006年结束。摩尔定律（Moore's Law）大约在2015年结束。单线程性能增长率从 52%/year (1986–2003) 降至 3%/year (2015 onward)。这些原则所描述的每一个瓶颈，现在都成了该领域正在积极规避的问题。面向人工智能 (AI) 的硅的大量涌现，是该领域在收集这些原则一直指向的答案：把能量用在重要之处，把硅资源放到工作负载所在之处，不要与物理规律作对。

以下是计算机体系结构的经典原理。

## 性能方程

四个方程承担了大部分要点。本文中的其他原则都是这些方程的推论、经验性修正或由它们之一导致的结果。

### 铁律

𝑇
program
=
Instructions
Program
×
Cycles
Instruction
×
Time
Cycle
T
program

=
程序
说明

×
指令 (Instruction)
周期 (Cycles)

×
周期
时间
	​


Time = Instruction Count × Cycles Per Instruction × Cycle Time

IC (指令数 (instruction count)) 由算法、ISA (指令集架构 (instruction set architecture)) 和编译器决定。  
CPI (每条指令的周期数 (cycles per instruction)) 由微架构 (microarchitecture) 决定：流水线 (pipelining)、指令级并行 (ILP)、缓存 (caches)、乱序执行机制 (out-of-order machinery)。  
CT (周期时间 (cycle time)) 由工艺节点 (process node) 和锁存器之间最长的组合逻辑路径 (longest combinational path between latches) 决定。

由 Clark 和 Emer 在数字设备公司（DEC）于 1980s 年代早期提出；在 1990 年被 H&P（Hennessy & Patterson）确立。问题不在于这个方程是否难（它很简单）；关键是每次优化都必须在某个方面落地或有所取舍。增大的发射宽度（issue width）旨在降低每条指令平均周期数（CPI）；向量指令集架构（vector ISA）旨在降低指令数（IC）；更深的流水线则针对时钟周期时间（CT）（通常以牺牲每条指令平均周期数（CPI）为代价）。在不改变这三项之一的情况下，你无法加速一个程序。

现代超标量整数核心在紧密循环中能维持 0.25–0.5 每条指令的时钟周期数 (CPI)（对应每周期指令数 (IPC) 2–4）；而指针追踪代码 (pointer-chasing code) 的每条指令的时钟周期数 (CPI) 超过 5。Apple's M4 和 Intel's Lion Cove 在手工调优的内核上每周期指令数 (IPC) 的峰值约为 8。过去三十年 CPU 微架构的发展史就是一场在真实代码上把每条指令的时钟周期数 (CPI) 压低到 0.5 以下的渐近性竞赛，而这一进程已在该点陷入停滞。

### 阿姆达尔定律 (AMDAHL'S LAW)

𝑆
(
𝑁
)
=
1
(
1
−
𝑝
)
+
𝑝
/
𝑁
S(N)=
(1−p)+p/N
1


其中 
𝑝
p 是程序中可并行化的部分，且 
𝑁
N 是处理器数量。串行尾部在 
𝑁
→
∞
N→∞ 时占主导：最大加速比被限制在 
1
/
(
1
−
𝑝
)
1/(1−p) 无论你投入多少处理器来解决该问题。

该领域被引用次数最多的方程，也是为把常见情况（common case）做快这一整项工作提供正当理由的方程，因为再多为优化少见情况（rare case）所付出的努力也无法克服它所留下的串行部分（serial fraction）。

如果 95% 的代码可并行化，最大可能的加速是 20×。如果是 99%，则为 100×。对于在 100,000+ 芯片上进行前沿 AI（frontier-AI）训练，即使 0.01% 的串行部分也会把你限制在 10,000×，远低于线性。实际系统比阿姆达尔（Amdahl）预测的情况更糟，因为该公式忽略了通信和同步开销。阿姆达尔（Amdahl）是一个上界，而不是目标。

### 古斯塔夫森定律 (Gustafson's Law)

𝑆
(
𝑁
)
=
𝑁
−
𝛼
(
𝑁
−
1
)
S(N)=N−α(N−1)

其中
𝛼
α 是扩展工作负载的串行部分。

对阿姆达尔（Amdahl）的反驳。阿姆达尔（Amdahl）假设问题规模固定，在更多处理器上求解（强扩展性（strong scaling））；古斯塔夫森（Gustafson）假设问题规模随处理器数量增长（弱扩展性（weak scaling））。实际上，超级计算机并不会在昨天的问题上缩短实际运行时间（wallclock）；它们在相同的实际运行时间内处理更大的问题。Frontier 模型训练（Frontier-model training）是弱扩展性：模型规模（model size）和批量大小（batch size）随集群（cluster）增长，因此阿姆达尔的悲观预期显得过于夸张。

### 利特尔定律 (Little's Law)

𝐿
=
𝜆
𝑊
L=λW

平均并发数 = 吞吐量 (throughput) × 平均延迟 (average latency).

系统中事物的平均数量 = 到达速率 (the rate at which they arrive) × 平均停留时间 (the average time they stay).

整个领域中最通用的原则。每当你问“我需要多少在途 (in flight) 才能使这个东西饱和？”时，你就是在问利特尔定律 (Little's Law)。

它用于确定芯片中每个缓冲区的大小。任何保存正在传输（in-flight）工作的缓冲区至少要有 L = λW 个条目；把它做得更浅，它就会被填满，对生产者施加背压，并且吞吐量会降到低于你期望的峰值。

重排序缓冲区大小 (ROB Sizes): ROB ≥ IPC × stall latency
内存级并行度 (MLP): outstanding misses ≥ bandwidth × latency / line size
TCP 窗口 (TCP Windows): window ≥ bandwidth × RTT
GPU 线程束数量 (GPU Warp Counts): resident warps ≥ memory latency / arithmetic latency + 1

同一条方程，一再地被应用在技术栈的不同层级。

一个演算示例：1 TB/s 高带宽内存 (HBM) 在 80 ns 延迟并使用 64-byte 缓存行时，需要约 ~1,250 个挂起的未命中请求 (outstanding misses) 才能饱和。正因为如此，H100 和 B200 极力提升未命中状态寄存器 (MSHR) 数量和挂起加载容量 (outstanding-load capacity)；没有这些，规格表上的带宽无法达到。

### 屋顶线模型 (Roofline Model)

𝑃
attainable
=
min
⁡
(
𝜋
peak
,
  
𝐼
⋅
𝛽
peak
)
P
attainable

=min(π
峰值

,I⋅β
峰值

)

𝑃
可达成的
P
可达成的

= 可达到的性能 (attainable performance) (FLOP/s)
𝜋
π = 峰值计算能力 (peak compute) (FLOP/s)
𝛽
β = 峰值内存带宽 (peak memory bandwidth) (B/s)
𝐼
I = 算术强度 (arithmetic intensity) (FLOPs per byte loaded)

一个核（kernel）的运行速度不会超过两个上限中的较低者：硬件的峰值浮点运算速率（FLOP），或者内存向其提供操作数的速率，而核的算术强度（arithmetic intensity）决定哪个成为瓶颈。

脊点（内核（kernel）由受内存限制（memory-bound）转为受计算限制（compute-bound）的地方）位于 
𝐼
∗
=
𝜋
/
𝛽
I
∗
=π/β. 在其下方，性能随带宽线性增长： 
𝑃
=
𝛽
⋅
𝐼
P=β⋅I. 在其上方，性能在峰值处饱和： 
𝑃
=
𝜋
P=π.

这是现代加速器设计中最有用的一张图。

π = 4.5 PF/s
P = β · I
受内存带宽限制 (memory-bound)
受计算能力限制 (compute-bound)
I* ≈ 563
GEMV (I ≈ 2)
GEMM (I ≈ 2,731)
1
10
100
1k
10k
1
10
100
1k
10k
算术强度 (FLOP/B, log)
算术强度 (FLOP/B, log)
性能 (TFLOP/s, log)
性能 (TFLOP/s, log)

现代 AI 屋顶线（稠密 FP8）：

H100 SXM5: 1,979 TF/s, 3.35 TB/s. 
𝐼
∗
≈
591
I
∗
≈591 FLOP/B.
B200: 4,500 TF/s, 8 TB/s. 
𝐼
∗
≈
563
I
∗
≈563 FLOP/B.
MI300X: 2,610 TF/s, 5.3 TB/s. 
𝐼
∗
≈
492
I
∗
≈492 FLOP/B.

LLM 内核的算术强度揭示了推理性能的本质：

方阵矩阵乘法（GEMM） (M = N = K = 4096) FP8: 
𝐼
≈
2
𝐾
/
3
≈
2,731
I≈2K/3≈2,731 FLOP/B, 受计算限制。
矩阵-向量乘法（GEMV）（single-token decode step） FP8: 
𝐼
≈
2
I≈2 FLOP/B, 受内存带宽限制。

单一比率解释了为什么预填充和训练受计算限制，为什么解码受带宽限制，以及为什么精度减半（FP32 → FP16 → FP8 → FP4）即使在峰值 FLOPs 不变时也有帮助：每次将每元素字节数减半会使得 
𝐼
I 翻倍。每一代加速器将 
𝜋
π 推高的速度快于 
𝛽
β，因此屋脊向右迁移；在 H100 上受计算限制的工作负载可能在 Rubin 上成为带宽限制，而不需改动一行代码。

The Walls

这些“墙”是物理与经济学上的渐近线。它们不是定理；而是该领域在过去二十年里反复撞上的经验极限。

THE END OF DENNARD SCALING

Robert Dennard 的 1974 年论文给了摩尔定律本应带来的礼物。将线性尺寸缩小 
1
/
𝑘
1/k，你会得到：面积 
↓
𝑘
2
↓k
2
，电压 
↓
𝑘
↓k，频率 
↑
𝑘
↑k，单晶体管功耗 
↓
𝑘
2
↓k
2
，功率密度：不变。每一代工艺在相同面积内晶体管数量翻倍，功耗不变，频率更高，几乎是白送的。

这一规律一直保持到约 2006 年。随后阈值电压无法继续下降而不会导致亚阈值泄漏呈指数级上升；供电电压卡在约 1V；时钟频率停滞在约 3–4 GHz。

多核转向是被迫的，而非自愿。没有了 Dennard，性能的唯一剩余杠杆就是并行性，自 2006 年以来的每一次架构发展（多核、GPU、TPU、chiplet、DSA）都是其必然结果。

THE POWER WALL

𝑃
dyn
=
𝛼
⋅
𝐶
⋅
𝑉
𝑑
𝑑
2
⋅
𝑓
P
dyn

=α⋅C⋅V
dd
	​

⋅f

𝑃
dyn
P
dyn
	​

= 动态功率
𝛼
α = 活动因子
𝐶
C = 总切换电容
𝑉
𝑑
𝑑
V
dd

= 电源电压
𝑓
f = 时钟频率

动态（切换）功耗关于电压是二次的，关于频率是线性的。将 
𝑉
𝑑
𝑑
V
dd
	​

 对半将使功耗下降 4×：这是 DVFS 的全部基础。但 
𝑉
V 和 
𝑓
f 是耦合的（更快的晶体管需要更高的 
𝑉
V 才能满足时序），因此在甜点点以上，功耗随频率大致呈三次方增长。

泄漏会增加一个指数项： 
𝑃
leak
∝
𝑉
𝑑
𝑑
⋅
𝑒
−
𝑉
𝑇
/
𝑛
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
P
leak
	​

∝V
dd
	​

⋅e
−V
T
	​

/nV
热量单位 (therm)
\\t\\u200b

 (𝑉
𝑇
V
T
	​

 = 阈值电压； 
𝑉
𝑡
ℎ
𝑒
𝑟
𝑚
V
therm
	​

 ≈ 26 mV（室温）； 
𝑛
n ≈ 1–1.5)。为了缩放而降低阈值电压会使得泄漏激增。这正是扼杀 Dennard 的原因。

硬上限不是总功率，而是功率密度。大约在 2004 年，单芯片的热通量在 100–150 W/cm² 附近饱和，可与电热板相提并论。散热受芯片面积限制，而非总瓦数；在固定面积芯片上推动更多功率，冷却成本会呈指数上升。

现代加速器的功耗大致为 700 W (H100) → 1,000 W (B200) → 1,400 W (B300) → ~1,800 W (Rubin Ultra)。空气冷却在 Hopper 世代实际已走到尽头。单芯片功率超过约 1 kW 时液冷成为必需；在那之后的下一代沉浸式冷却也将被考虑。

THE MEMORY WALL

表述很简单：CPU 性能每年增长约 ~60%，DRAM 延迟每年仅约 ~7%。两个指数在分叉。下游某处，平均内存访问时间将接近未命中惩罚，而与命中率无关。

今天：一次 DRAM 未命中花费约 ~200–300 个周期。一个没有缓存的现代 CPU 将几乎持续停顿。

对于加速器，内存墙呈现不同的形态。HBM 带宽每年增长约 ~30%；峰值计算能力每年增长约 ~60–100%。要变为受计算限制所需的算术强度每代都在提高；roofline 的屋脊向右迁移。屋脊位于工作负载强度范围内的芯片赢得性能优势。这就是为什么在现代 AI 硅片中 HBM 容量和带宽比峰值 FLOPs 更受争夺：峰值很便宜，驱动它（供给数据）才昂贵。

THE ILP WALL

即使有神谕级预测和无限资源，可实现的 ILP 也在约 7–60 之间平台化，取决于工作负载，而大多数 SPEC 基准远低于 10。在现实的预测器下，实际天花板约为 ~5。

原因：

分支。约 20% 的指令是分支，即便使用最先进的 TAGE-SC-L，仍有 3–5% 的误预测率，每次误预测带来约 20 周期的气泡。
真实的数据依赖。硬件无法消除；重命名只能处理伪依赖（WAW、WAR）。
内存别名。歧义迫使保守的串行化。

真实核心在整数 SPEC 上的持续 IPC 约为 ~3–4，尽管重排序缓冲（ROB）大小远超 500。宽度超过 8 的尝试（Power、Itanium）已被试验，边际收益迅速变平。指令发射宽度与持续 IPC 之间的差距就是 ILP 墙的具体体现。

LATENCY LAGS BANDWIDTH

Patterson 的经验法则：在带宽翻倍的时间里，延迟仅改善约 1.2–1.4×。等价地，带宽的改善大约是延迟的平方。跨越 25 年的微处理器、DRAM、网络和磁盘，这一模式是一致的：带宽扩展了 100–1000×，而延迟仅改善了 4–40×。

这是本文中最重要的实用原则。你可以“购买”带宽：更多通道、更宽的总线、更多通道、更多芯片。你无法超越物理极限“购买”延迟。每一个获胜的架构，都是通过并发来隐藏延迟而不是减少延迟来取胜。Warp 隐藏 GPU 的 DRAM 延迟。ROB 隐藏 CPU 的 L2/L3 未命中。TMA 在 Hopper 上把全局内存延迟隐藏在矩阵乘法后面。Patterson 定律是所有这些技巧存在的原因。

THE SPEED OF LIGHT

在真空中，≈30 cm/ns。在铜制 PCB 走线中，≈15 cm/ns（≈2/3 c）。实际下限：

1 mm 片上导线：物理传播时间约 5 ps，实际约 200 ps（在亚毫米尺度上 RC 延迟主导，超越传播时延）。
1 m 电缆：单向约 7 ns，往返约 14 ns。
机架到机架（机房内）：单向约 100 ns。
跨越一个大陆：约 50 ms。

你可以缩短路径。这正是 chiplet（20 mm 跨芯片 → 1 mm 混合键合）、HBM（DRAM 毫米级地靠近计算，而非厘米级）、以及将机架视为单个 GPU 域所做的事情。但你无法超越物理定律。

这也是为什么 NVL72 的被动铜背板最大可达约 ~2 m，而 NVL576 需要重新设计机箱（Kyber）以保持每条 NVLink 路径在铜距离内。超出该距离，数据就要上光纤，且可插拔光学器件将主导功耗预算。

局部性与存储层次结构
局部性原理

经验性的，而非可证明的。程序在大部分时间只使用很小一部分内存。

两种形式：

时间局部性。现在被引用的数据很可能很快会再次被引用（循环、工作集）。
空间局部性。紧邻刚被引用的数据很可能很快也会被引用（数组、顺序访问）。

90/10 规则：90% 的执行时间花在 10% 的代码上。局部性是缓存能够起作用的唯一原因。没有它，缓存的命中率将接近 (cache size / memory size)，基本为零。有了局部性，通用工作负载中 95–99% 的命中率是常态。

局部性也是每种领域专用架构比 CPU 更积极利用的原理。波动（systolic）阵列将时间重用直接布线到硅片：每个权重在行上被重复使用 128–256 次而无需重新抓取。当访问模式足够可预测、硬件预测会浪费硅面积时，擦写板（scratchpad）会替代缓存。专用化部分是识别你的工作负载具有哪种局部性模式并将其“烘焙”到拓扑中的艺术。

AMAT: AVERAGE MEMORY ACCESS TIME

AMAT
=
𝑡
hit
+
MR
⋅
𝑡
miss
AMAT=t
hit

+MR⋅t
错过


𝑡
击中
t
击中
	​

= 此层的命中延迟 (hit latency at this tier)
MR = 未命中率 (miss rate)（未命中该层的访问所占比例）
𝑡
miss
t
miss

 = miss penalty (time to satisfy the miss from the next tier)

跨层递归： 
𝑡
miss
,
𝐿
1
=
𝑡
hit
,
𝐿
2
+
MR
𝐿
2
⋅
𝑡
miss
,
𝐿
2
t
miss,L1

=t
hit,L2
	​

+MR
L2
	​

⋅t
未命中（miss）,L2
	​

, and so on through L3 and DRAM.

现代数据中心 AI 层级（B200 / GB200 NVL72 时代），从 GPU 视角按延迟排序：

层级 (Tier)	容量 (Capacity)	延迟 (Latency)	带宽 (Bandwidth)	能耗 (Energy)
寄存器文件 (Register file)	~256 KB / SM	<1 ns	~20 TB/s / SM	~0.03 pJ/B
静态随机存取存储器 (SRAM (SMEM / L1))	~228 KB / SM	~17 ns	~33 TB/s	~0.3 pJ/B
L2 缓存 (L2 cache)	50–126 MB	~150 ns	~5 TB/s	~2 pJ/B
高带宽内存 (HBM (local GPU))	80–192 GB	~280 ns	3.4–8 TB/s	~40 pJ/B
通过 NVLink 的高带宽内存 (HBM via NVLink (NVL72))	~13.8 TB 池 (pool)	~1 µs	130 TB/s 总计 (aggregate)	~50 pJ/B
主机 DRAM (Host DRAM (PCIe Gen5))	~1 TB / node	~1–2 µs	~55 GB/s	~100 pJ/B
NVMe 固态硬盘 (NVMe SSD (Gen5))	10s TB / node	~100 µs	~14 GB/s	~600 pJ/B
跨机架 RDMA (Cross-rack RDMA (XDR))	数据中心级别 (datacentre-scale)	~2 µs	800 Gb/s / NIC	~225 pJ/B

该层级在容量上跨越约 ~7 个数量级，在延迟上跨越约 ~5 个数量级。每字节能耗随距离增长的速度甚至比延迟更快。

三个 C

每一次缓存未命中属于以下三种之一：

Compulsory（冷缺失）。首次引用。通过更大的行或预取（prefetching）来减少。
Capacity（容量）。工作集超过缓存。通过更大的缓存来减少。
Conflict（冲突）。相连性（associativity）不足。通过更高的相连性来减少。（在全相连缓存中不存在）

一个有用的第四类是 Coherence，用于多处理器的失效（invalidations）。

这个分类比看起来更有用。它告诉你该拉哪根杠杆：强制性缺失不会因为更大的缓存而减少，容量性缺失不会因为预取而减少，冲突性缺失不会因为更长的行而减少。

贝拉迪的最优（Belady's MIN）

定理：驱逐下一次引用在未来最远的那一行能最小化总未命中次数。最优，但仅适用于离线，因为它需要未来信息。

LRU 及其近似（RRIP、NRU、Hawkeye、Mockingjay）试图从过去预测未来。经验上 LRU 与 MIN 之间的差距在典型工作负载上约为 ~1.5–2× 的更多未命中。Hawkeye（Jain & Lin, ISCA 2016）通过在过去的轨迹上学习 MIN 的决策并将其作为预测重放，弥合了该差距的大约 80%。这是现代微架构中较为漂亮的结果之一：最优策略不可计算，但可以通过在其自身历史上训练来近似。

流水线（Pipelining）与乱序执行（Out-of-Order）  
流水线加速（Pipelining Speedup）

𝑆
=
𝑁
1
+
(
𝑁
−
1
)
/
𝑘
⋅
1
1
+
CPI
stall
S=
1+(N−1)/k
N

⋅
1+CPI
停顿 (stall)

1
	​


𝑆
S = 相对于非流水线版本的加速比
𝑁
N = 流水线深度（阶段数）
𝑘
k = 执行的指令数
CPI
停顿 (stall)
CPI
停顿 (stall)

 = average stall cycles per instruction (from hazards)

对于长程序， 
𝑆
→
𝑁
/
(
1
+
CPI
stall
)
S→N/(1+CPI
stall

)。吞吐率接近每周期一条指令；延迟不变。流水线是一种纯粹的吞吐量优化。

三类冒险（hazard）会使流水线停顿：

Structural（结构）：两条指令需要相同资源。解决：复制或对资源做流水化。
Data（数据）：指令间的寄存器依赖（RAW、WAW、WAR）。解决：对 RAW 使用转发（forwarding）或停顿；对假依赖（WAW、WAR）使用寄存器重命名（register renaming）。
Control（控制）：分支。解决：预测并在错误预测时支付惩罚。

OPTIMAL PIPELINE DEPTH

性能最优深度：约 50 级，约每级 ~18 FO4。考虑功耗的最优：约 7 级，每级 ~22.5 FO4。当你优化 BIPS³/W 而不是纯吞吐量时，答案就会收敛到更浅的流水线。

Pentium 4 为追求峰值频率而走得很深（20–31 级），并直面功耗墙。从 Core 2 开始退回到约 ~14 级流水线：这是有架构理由的回应。每级的闩锁开销、分支错预测惩罚（与深度成正比）以及内存停顿阻塞，共同在硅片极限之前就限制了深度。

托马苏洛算法 (TOMASULO'S ALGORITHM)

通过通过预留站（reservation-station）标签的寄存器重命名解决 WAW 和 WAR 冒险。它将发射（issue）与执行解耦：指令在预留站中等待，直到操作数在公共数据总线（common data bus）上到达，然后按程序顺序之外执行。Smith 和 Pleszkun 在 1985 年加入了按序提交（in-order commit）通过重排序缓冲区（reorder buffer），赋予 Tomasulo 精确异常（precise exceptions）和干净的分支错预测恢复：指令乱序执行但按程序顺序退役，所以故障或投机回滚会使体系结构状态保持在一致点。

该机制已有六十年历史。每一款现代乱序（out-of-order）CPU 都是它的改进。更宽、更深、更快，但算法相同。

重排序缓冲区 (ROB) 大小 — 按 Little 定律 (Little's Law)

ROB
≥
IPC
target
⋅
𝑡
stall
ROB≥IPC
target

⋅t
停顿 (stall)


ROB 必须容纳所有飞行中的指令。为隐藏一次停顿，ROB 必须至少为 吞吐率 × 停顿时长：将 Little's Law 应用于发射队列。IPC 为 4 时的 300 周期 DRAM 未命中意味着要完全隐藏需要 1,200 条目（entry）的 ROB。没有真实核心有那么大。

现代数值：Intel Lion Cove (2024): 576。AMD Zen 5: 448。AMD Zen 3: 256。

真实核心在规模上小约一个数量级，无法单靠乱序来隐藏 DRAM，因此它们依赖缓存层级来吸收大多数停顿，并用乱序来隐藏 L1/L2 的延迟。教训是 ROB 和缓存是同一延迟隐藏预算的两半。单方面在某一端投入更多而忽视另一端是浪费硅片。

BRANCH PREDICTION

分支 CPI 惩罚：
CPI
branch
=
𝑓
branch
⋅
𝑝
mispredict
⋅
penalty
CPI
branch

=f
分支 (branch)
‌

⋅p
错误预测 (mispredict)

⋅惩罚

每条指令周期 (CPI)
分支 (branch)
每条指令周期 (CPI)
分支 (branch)
	​

= 每条指令因分支预测错误而额外增加的周期数
𝑓
branch
f
branch

= 是分支的指令的比例
𝑝
mispredict
p
mispredict

= 预测器分支预测错误的概率
penalty = 每次错误预测导致的流水线清空代价（周期，∝ 流水线深度）

今天：
𝑓
branch
≈
0.20
f
branch

≈0.20, 
𝑝
错误预测 (mispredict)
≈
0.03
p
错误预测 (mispredict)

≈0.03, 延迟 ≈ 20 cycles → 增加 ~0.12 每条指令周期 (CPI).

预测器演进：

两级 (Two-level) (Yeh & Patt 1991): 局部 + 全局 历史.
感知器 (Perceptron) (Jiménez & Lin, HPCA 2001): 用于 AMD Zen.
TAGE (Seznec & Michaud 2006): 几何历史长度, 带标签.
TAGE-SC-L (Seznec, CBP-4 2014): 当前最先进, ~3–5 MPKI 在 SPEC 上.

剩余那些依赖数据的分支（分支结果依赖于输入值而不是控制状态）的错误预测，是现代乱序（OoO）核心中主导的流水线开销。它们也是最难处理的：按定义，预测器不能仅从程序状态中学习到它们。

Coherence and Consistency

MESI

经典的缓存一致性协议。每个缓存行处于以下四种状态之一：

Modified: 这里是脏的，其他地方都是过时的；当另一个核心远程读取时，写回该行到内存并降级为 Shared。
Exclusive: 干净，仅由此缓存持有；在本地写时可以静默地转换为 Modified。
Shared: 干净，可能被其他缓存共享；本地写必须先广播失效给其他缓存，然后再转换为 Modified。
Invalid: 不存在。

读取命中于 M/E/S。写入需要独占所有权：M 和 E 已经拥有它（静默写入 (silent write)）；S 必须先广播失效（invalidation）来升级为 M。四态机 (four-state machine) 保证一致性 (coherence)：每个地址的所有缓存副本最终会就其值达成一致。

M
已修改（Modified）
E
独占（Exclusive）
S
共享（Shared）
I
无效（Invalid）

● read hit     ● read miss     ● write hit     ● write miss
实线 = 本地处理器动作     虚线 = 监听（另一个核心的总线流量）

一致性（Consistency）才是更难的问题（程序员看到的是跨多个地址、多个处理器的内存操作怎样的排序？），这是内存模型（顺序、一致性事务顺序（TSO）、释放一致性（release-consistent）、弱一致性（weak））的研究对象，和缓存一致性（coherence）是不同的概念。

缓存一致性的成本随着 
𝑁
N 核心扩展：

Snooping bus: 带宽 
∝
𝑁
∝N。超过大约 16 个核心后就会失效。
Directory: 存储 
∝
log
⁡
𝑁
∝logN，但有间接延迟。用于现代的 mesh 和 ring NoC。

这就是为什么向上扩展（scale-up）有上限。NVL72 将 72 个 GPU 绑定为一个一致性结构。NVL576 扩展到 576 个芯片。再往上，维护一致性的成本会超过工作负载的容忍度，唯一的出路是放弃一致性并改用消息传递。大多数架构在机架边界处这样做（即通过 InfiniBand 的 RDMA）；Google 的 TPU 更进一步，在 scale-up 内部就放弃了一致性（ICI 在整个 9,216 片超 pod 中通过消息传递）。每种架构都必须选择一个一致性边界，而这个选择定义了自然的 scale-up 单位。

Energy and Data Movement

THE HOROWITZ ENERGY TABLE

在 45 nm CMOS 工艺下测得。

操作	能量
8 位整数加法 (8-bit int ADD)	0.03 pJ
32 位整数加法 (32-bit int ADD)	0.1 pJ
16 位浮点加法 (16-bit FP ADD)	0.4 pJ
32 位浮点加法 (32-bit FP ADD)	0.9 pJ
8 位整数乘法 (8-bit int MUL)	0.2 pJ
32 位浮点乘法 (32-bit FP MUL)	3.7 pJ
32 位寄存器读取 (32-bit register read)	~0.1 pJ
8 KB SRAM 读取 (8 KB SRAM read)	~10 pJ
1 MB SRAM 读取 (1 MB SRAM read)	~100 pJ
DRAM 访问 (DRAM access (64 b))	~640 pJ

一次 DRAM 访问的代价约为一次 32-bit 加法的 ~6,400 倍。内存在能耗上比计算高出两个到三个数量级。在 7 nm 及以下制程上，芯片内的能耗大致减半；DRAM 的能耗/比特几乎不变。随着制程节点推进，这个差距越拉越大。HBM 可以达到 ~5 pJ/bit（HBM3）、~4 pJ/bit（HBM3E）、~2.5 pJ/bit（HBM4 预测值），优于 DDR5，但仍然是片上 ALU 操作能耗的约 50 倍。

THE COST OF DISTANCE

每次数据移动的能耗随距离增长。现代工艺下的近似数值如下：

移动	能量
本地寄存器	~0.1 pJ
1 mm 片上	~6 pJ
20 mm 片上 (cross-die)	~50 pJ
片外 (DRAM)	~640 pJ
跨机架 (optical)	~10 nJ 每字

这是现代 AI 硅设计中最根本的原则。每一个架构选择都是在与数据移动能耗作战。把计算搬到数据附近，而不是把数据搬到计算那里。

具体来说：

Systolic arrays (TPU MXU, MI300X Matrix Cores): 每个权重在离开阵列之前被重用 128–256×。数据重用被直接布线到硅片中。
3D-stacked memory (HBM; MI300X's hybrid-bonded SoIC): 将内存放到距离计算 < 1 mm，而不是以 cm 为单位。
On-package HBM vs DDR DIMMs: 约低 ~5× pJ/bit，带宽约高 ~10×。
Chiplets: 将跨芯片的路径从 cm 级封装布线缩短到 mm 级互连层（interposer）。
Wafer-scale (Cerebras): 在片上的互连是“免费的”：相同的硅片，无封装穿越、无 PCB 迹线、无电缆。
The Levers

MAKE THE COMMON CASE FAST

这是 Amdahl 的推论的直接 corollary：你无法把程序速度提升超过 
1
/
(
1
−
𝑝
)
1/(1−p)，因此你必须减少那部分不会从加速中受益的代码，通过优化最常执行的部分来实现。

90/10 规则将其操作化：静态代码的 10% 占动态执行的 90%。进行剖析，优化热路径，忽略其余。听起来显而易见，但也是这个领域最被忽视的原则：几代架构师为几乎从不执行的情况构建了巧妙的支持，为未被使用的能力支付了面积和功耗。这个原则提醒我们先度量。

波拉克法则（Pollack's Rule）

性能
∝
面积
性能∝
面积

把核心面积翻倍大约能换来 ~1.4× 的性能。许多小核在每单位面积性能上胜过一个大核。Pollack 加上 Amdahl 几乎可以预测出现代异构芯片的整体现状：少数大核处理串行部分（Amdahl），大量小核处理并行部分（Pollack）。ARM big.LITTLE、苹果的 E-cores + P-cores、GPU 的 SM 与 CPU 的划分：这些都源自同样的两个方程。

SPECIALISATION

在一个 64-bit 乱序核中，实际的 ALU 操作约消耗 ~1% 的能量。剩下的 99% 用在指令取指、译码、重命名、调度、ROB、寄存器文件，以及为它们供能的缓存层次结构。通用 CPU 将 99% 的能量花在了开销上。

领域专用架构剥离了这些开销。静态调度 → 无需取指/译码/重命名。可预测的访问模式 → 由 scratchpad 替代缓存。以单精度为目标 → 无需混合精度流水线。Hennessy-Patterson 在 2018 年的图灵演讲中指出：通过专用化约有 ~100× 的效率可得，代价是通用性的损失。

THROUGHPUT VS LATENCY

两者是不同的目标；几乎总是会有权衡。

Throughput = ops/second（总吞吐量）。通过并行性、流水线、批处理获得。
Latency = time per op（单个请求的时延）。通过缓存、推测、预取来减少（在命中时）。

CPU 优化延迟：深度乱序执行 (OoO)、大缓存、分支预测、线程较少。GPU 优化吞吐：大规模线程并行、SIMT、通过 warp 切换隐藏延迟。相同的工作负载在两者上看起来完全不同。

推理沿着这条轴线分裂。Prefill 是受吞吐限制的（将大量 token 批量通过 GEMM）。Decode 是受延迟限制的（一次一个 token，受权重约束）。分离式服务（分别的 prefill 和 decode 池）之所以胜出，正是因为这两种运行模式需要不同的机器。

SURFACE-TO-VOLUME SCALING

对于在 
𝑃
P 处理器上划分的工作负载，其计算量 
∝
𝑉
/
𝑃
∝V/P 且通信量 
∝
𝑆
/
𝑃
(
𝑑
−
1
)
/
𝑑
∝S/P
(d−1)/d
 在 
𝑑
d 维度中：

通信 (Comm)
计算 (Comp)
∝
1
𝐿
其中
𝐿
=
(
𝑉
𝑃
)
1
/
𝑑
计算 (Comp)
通信 (Comm)

∝
L
1
	​

其中 L=(
P
V
	​

)
1/d

𝑃
P = 处理器数量（划分数）
𝑉
V = 问题总体积（例如网格点、矩阵元素）
𝑆
S = 表面积，每步在相邻子域之间交换的总数据量
𝑑
d = 划分的维度（网格为 2，立方体为 3）
𝐿
L = 每个处理器子域的线性尺寸

每个处理器的块越大 → 相对通信越少。这就是强缩放（strong-scaling）的代价。H&P 的民间经验；规范参考见 Foster 的 Designing and Building Parallel Programs (1995)。

THE BANDWIDTH-DELAY PRODUCT

BDP
=
bandwidth
⋅
round-trip-delay
BDP=bandwidth⋅round-trip-delay

填满链路所需的未决字节数。形式上与 Little's Law 相同；它是 Little's Law 在网络上的应用。

一个 400 Gbps 链路，RTT 为 5 µs，需要约 ~250 KB 的飞行数据才能饱和。对于集合通信（collectives）：ring all-reduce 实现带宽最优模式；bisection bandwidth 约束稳态吞吐。

大规模可靠性
失效率（FIT）和平均无故障时间（MTBF）

MTBF
=
10
9
FIT
per device
⋅
𝑁
devices
  
hours
MTBF=
FIT
per device

⋅N
设备
	​

10
9
	​

hours

MTBF = 平均故障间隔（Mean Time Between Failures），指在含有 
𝑁
N 个设备的系统中任意两次故障之间的平均实时时间。
FIT = Failures In Time：每 
10
9
10
9
 设备小时内的故障数。现代 SRAM 在海平面大约为 ~100–1,000 FIT/Mbit（依供应商和工艺节点而异；除非有 JEDEC JESD89 测试报告支持，否则对任何具体数值都应持怀疑态度）。

在 100,000-GPU 规模下，集群因任一单一硬件故障的 MTBF 大约为 ~30 分钟。架构在某种程度上由发生故障时的应对方式来定义。

防御措施：

- ECC (SEC-DED)：单错误纠正，双错误检测。约 ~12.5% 存储开销。
- ChipKill：容忍整个 DRAM 芯片故障。
- 异步检查点（Asynchronous checkpointing）：每 N 步保存状态，发生故障时回滚。以计算换取可靠性。Orbax-style 的检查点现在已成为前沿 AI 训练栈的标准。
- 冗余计算、复制、热备件：在 AI 集群规模中越来越相关。

100,000 芯片的训练运行是可靠性不再仅仅是硬件问题而成为系统设计问题的规模。每一个 ExaFLOPS 级别的部署（NVL72 SuperPODs、TPU Ironwood pods、Helios racks）都将恢复方案作为软件的一部分随发行包一起交付。

Synthesis
阅读任何体系结构：六个问题
工作的负载是什么？决定算术强度（roofline）、控制复杂度、局部性。
数据在哪里？存储层次、scratchpad vs cache、容量、带宽。
数据如何到达计算单元？DMA、prefetch、async copy、TMA、systolic dataflow。
计算是什么样的？宽度、深度、精度、可编程性、标量/向量/矩阵。
芯片如何组合？scale-up、scale-out、fabric 拓扑。
焦耳（能量）都去哪儿了？几乎总是：数据移动。

THE DEEPER POINT

这里的每一条原则都在 2010 年之前就已存在。Iron Law 仍然成立。Amdahl 的法则仍然成立。Little's Law 在 1961 年是真实的，在 2061 年也将真实。墙并没有消失；这个领域通过并行、缓存、专用化和 chiplets 绕过了它们。

变化的只是数字和工作负载。Dennard 缩放结束；多核转向是被迫的。摩尔定律（Moore）不复往昔；chiplets 和 3D 堆叠出现了。内存墙变糟而非变好；HBM 与封装内存绕过了它。ILP 的天花板依旧；面向吞吐的架构（GPUs、TPUs）通过放弃串行延迟以换取并行并发而规避它。计算与内存之间的能量差距扩大；整个领域围绕最小化数据移动进行组织。

每一种架构都是同一组方程的不同参数化。
`,t1=`# How To Design A Chip, From Scratch - Jacob Peake

**URL:** https://www.jacobpeake.com/how-to-design-a-chip

---

Home
Writing
CONTENTS
The Flow
Architecture
Modelling
Trace-Based vs Execution-Driven
PPA
Microarchitecture
Iteration
The Interactions
RTL
Spatial, Not Sequential
What the Designer Decides, What the Tools Decide
Finite State Machines
An Example
The Synthesis Contract
Design Verification
UVM
Constrained Random + Coverage
Assertions and Formal
The Verification Engineer
Simulation, Emulation, FPGA Prototyping
Performance
The Correlation Loop
Why Correlation Matters
Timing-Driven Performance
Synthesis
Physical Design
Floorplan
Placement
Clock Tree Synthesis
Routing
Timing Closure
Signoff
Foundry & Fabrication
Sand to Silicon Wafer
The Layer Stack
PDK and GDSII
Wafer Fab
Bring-up
Pre-Silicon: Software Against the Model
Post-Silicon: First Boot
Standard Machines

Teaching AI to design advanced chips. Get in touch.

How To Design A Chip, From Scratch

In 1979, Carver Mead and Lynn Conway circulated draft chapters of Introduction to VLSI Systems to universities. Until then, designing a chip had been a craft. Each new VLSI design was custom-laid-out, transistor by transistor, by a small team that knew the process node intimately. Mead and Conway replaced the craft with a methodology: geometric design rules abstracted away the foundry, standard cells abstracted away the transistor, and the design moved up the abstraction stack into something a non-specialist could reason about. Two years later, MOSIS let a graduate student tape out a 10,000-transistor chip as a course project.

A modern SoC carries 50–100 billion transistors on a single reticle-limit die. None of them are placed by a human. The chain from a designer's intent to those transistors crosses ten layers of abstraction. A bug caught in architecture is fixed in an afternoon; the same bug found in silicon costs months of schedule and millions of dollars in mask costs, wafer scrap, and re-characterisation. Most of chip design is the discipline of finding bugs at the cheapest possible stage.

The structure Mead and Conway laid down is the same structure modern chips are designed under. Intent → architecture → microarchitecture → RTL → gates → layout → silicon.
Each stage drops one level of abstraction and ships its output to the next. The flow is linear in spine, parallel in practice: modelling, simulation, and verification thread through every stage from architecture to bring-up, the longest-lived artefacts in the entire project.

What follows is the chip-design flow, end to end.

The Flow

A chip starts as a spec and ends as a die. Between those endpoints sit eight phases, each one a translation from a higher abstraction to a lower one. The translation is sometimes done by a human, sometimes by a tool, but it is always checked against the level above by some form of equivalence proof: simulation against the spec, LEC against the RTL, LVS against the netlist. Every level commits to the level above. A bug that crosses a level uncaught is the exponentially-expensive kind.

Linear phases
Parallel activities
Architecture
intent → spec
Microarchitecture
spec → structure
RTL (Logic Design)
structure → RTL
Synthesis
RTL → gate-level netlist
Physical Design
netlist → geometry (GDSII)
Foundry & Fabrication
GDSII → silicon
Bring-up
silicon → working system
Production
working system → product
Modelling (functional, performance, cycle-accurate)
Simulation (Hz – kHz)
Emulation & FPGA Prototyping (MHz – 10s MHz)
Verification (design, physical, timing)
Performance Correlation (model, RTL, silicon)
Timing Closure (STA, DRC, LVS, IR, SI)
Pre-silicon Software Bring-up
Post-silicon Validation & Characterisation

The phases on the left are the spine of the project. The bands on the right are the weft: activities that begin in one phase and live through several others. The functional model written during Architecture is still running during Bring-up, now as the reference for software validation. The performance model written before RTL is correlated against silicon two years later. The longest-lived artefacts in the project are the ones written first.

This flow ships two contracts: the hardware-software contract (what software is allowed to assume) and the foundry-design contract (the PDK, what the layout is allowed to look like). The first must hold across generations of silicon; the second must hold for one tapeout.

Architecture

The architecture phase decides what the chip does. The starting point is the workloads the chip needs to run well: the inference passes, the training kernels, the database queries, the codec pipelines, the graphics stacks. From those workloads, architects produce three things.

The hardware-software contract: the ISA, the memory model, the privilege architecture, the exception model, the coherence semantics. This is the surface software programs against, and is allowed to depend on across every generation of silicon the chip family ships.

The block-level structure of the chip: which cores it contains, which accelerators sit alongside, where memory lives, how the interconnect carries traffic between blocks, and the logical dataflows that traverse that fabric. Inside any one block, the cycle-by-cycle mechanics (stage count, queue depths, forwarding paths, scheduling policy) are left open for microarchitecture to fill in.

The PPA envelope: performance, power, and area targets each block must meet on those workloads. Architects sweep configurations against fast models until the envelope closes; only then does any block get committed downstream.

The output of the phase is a collection of architecture specs that define what the chip does.

The leverage at this phase is enormous. The discipline is to spend weeks or months with fast models before committing to any expensive detailed design.

MODELLING

Architects work in software, not RTL. They write in conventional programming languages, like C++. They build two complementary models that co-exist for the lifetime of the project: one to determine what a program does on the chip, one to determine how fast the chip can do it.

The functional model is a software interpreter for the ISA, that maintains architectural state (PC, register file, flags), executes each instruction per the spec, and returns correct results. QEMU and Simics are commercial-grade examples; most teams maintain a proprietary equivalent. It has no concept of time: no pipeline stages, no cache latencies, no contention. It answers: what instructions does this program execute, and in what order?

The performance model is cycle-accurate or cycle-approximate. It captures pipeline depth and width, cache hierarchy with realistic latencies, branch predictor algorithms and table sizes, memory bandwidth and contention, functional-unit latencies, issue-queue depths. gem5 is the canonical academic example. It answers the complementary question: given that instruction stream, how fast can this proposed microarchitecture process it?

They are kept separate for a reason. The performance model iterates dozens of configurations per week; if every run required booting an OS through a functional simulator, the iteration loop would collapse. Instead, the functional model produces traces, which the performance model replays. Capture once, replay many times.

TRACE-BASED VS EXECUTION-DRIVEN

Trace-based simulation is fast and reproducible: the same trace fed into different cache configurations isolates the effect of one parameter. The cost is that a trace is a static snapshot of a dynamic process, captured under one microarchitectural assumption and replayed under another. A real out-of-order processor speculatively executes down mispredicted paths, polluting caches; the trace records only the committed path, so the modelled cache looks more effective than the real one. Spin-locks, polling loops, and I/O-dependent code change iteration count with timing; the trace fixes them. Multithreaded interleaving depends on relative execution speeds; the trace captures one interleaving.

Execution-driven simulation closes the gap. The simulator executes the program directly, maintains architectural state, resolves branches in flight, and handles speculative paths. The instruction stream adapts to the modelled microarchitecture in real time. The cost is slower simulation and higher implementation complexity.

For workloads on ISA extensions that don't yet exist in silicon (a new vector instruction, a new matrix multiply, new atomics), traces cannot be captured from existing hardware. The functional model becomes the only source. This is one reason the functional model also acts as a compiler-development platform: the compiler team can target it long before there's existing silicon.

PPA

Performance, power, area. The three are inseparable, and the architecture phase is where their trade-offs are made cheaply.

A wider pipeline buys ILP and costs power-area: more reservation stations, more renaming logic, more bypass network. The ILP wall caps the buy.
A larger cache buys hit rate and costs silicon: caches dominate die area on a modern core.
A specialised unit (matrix engine, video codec, crypto block) accelerates one workload by 10–100× at the cost of generality and the silicon it took to build.

Architects run sweeps. "What if the load queue is 48 entries instead of 32?" is an afternoon in the performance model and a multi-week change across RTL, verification, and timing. Only when something looks like a clear win on perf, perf-per-area, or perf-per-watt does it get committed to a spec. The model is where you think and experiment; RTL is where you commit.

Microarchitecture

The microarchitecture phase decides how to build it. Microarchitects consume the architecture contract block by block and produce a microarchitecture spec per block: a structural blueprint detailed enough that a logic designer can write RTL from it without guessing.

Inside one block, that spec captures the pipeline (stage count, what each stage does, forwarding and bypass paths, stall and flush conditions), the structural resources (queue depths, register-file ports, SRAM ports, functional-unit counts), the control (state machines for arbitration, scheduling, cache coherence, bus protocols, out-of-order machinery with its ROB and reservation stations), and the interfaces to neighbouring blocks (signal lists, valid/ready handshakes, ordering rules, error semantics).

Every signal, every queue depth, every priority rule is named. Anything left ambiguous in the spec becomes a question the logic designer has to answer.

ITERATION

Microarchitecture is iterated in the performance models. Changing a pipeline stage in a programming language takes hours; the RTL equivalent takes days, the verification update takes weeks, the timing impact may take a re-floorplan. The economics force microarchitects to explore in the model and commit only once they have a defensible answer.

What gets iterated:

Pipeline depth and width. Deeper buys frequency but pays in branch mispredict penalty; wider buys IPC but pays in rename, scheduling, and bypass network.
Cache sizes and associativity. Bigger reduces capacity misses; higher associativity reduces conflict misses; both cost area and access latency.
Queue depths. ROB, load queue, store queue, miss queue. Sized by Little's Law: needed entries ≥ throughput × stall duration.
Branch predictor topology. Local history, global history, TAGE table sizes; ~1% accuracy improvement on integer SPEC is a measurable PPA win.
Interconnect topology. Mesh vs ring vs crossbar; bisection bandwidth vs latency vs area.

Each sweep produces numbers the team can defend.

THE INTERACTIONS

Microarchitects sit between architects and logic designers, and the interactions on each side are where the project's hardest conversations happen.

Architect / Microarchitect. The architect specifies a new atomics extension with strict ordering guarantees. The microarchitect determines the implications for the load-store unit, the cache controller, and the coherence protocol, and pushes back: "that ordering guarantee requires draining the pipeline on every atomic; on workload X that's 8% IPC loss." The two iterate until either the spec relaxes, the implementation finds a cheaper path, or the cost is judged acceptable.

Microarchitect / Logic Designer. The microarchitect specifies a 64-entry load queue with single-cycle store-to-load forwarding. The logic designer discovers that single-cycle forwarding from a 32-entry store queue creates a 27-level combinational path that misses the target clock by 200 ps. The two iterate: pipeline the forwarding (one extra cycle), drop a few entries from the store queue, restructure the priority encoder, or change the floorplan to shorten the path. Feedback flows in both directions, and the best designs emerge when the boundary is permeable.

The most common microarchitecture failure mode is ambiguity in the spec. Unspecified corner cases get discovered during implementation, often weeks or months after the spec was signed off.

RTL

Register-transfer level is the abstraction at which computation is described as transfers of data between registers + combinational logic that transforms it. A synchronous digital circuit is two kinds of element: registers (flip-flops, holding state, updating on clock edges) and combinational logic (gates, muxes, adders, comparators: stateless boolean functions of inputs). The clock is the universal time reference: every state change happens at a clock edge, and every combinational path between two registers must settle within one clock period.

The RTL phase translates the microarchitecture into synthesisable Verilog or SystemVerilog.

System / Algorithm
block diagram, SystemC, C++ perf model
Behavioural
untimed function, HLS source
RTL (Register-Transfer Level)
SystemVerilog, cycle-accurate
Gate level
standard-cell netlist
Transistor level
NMOS / PMOS network
Layout
polygons, GDSII
Silicon
fabricated wafer
human ↕
tool ↓
structural decisions
deterministic transforms

RTL is the boundary where the design itself stops being human-written and becomes tool-generated. Below RTL, engineers direct the tools that generate the next representation: synthesis, physical-design, and timing engineers write the constraints (clock period, false paths, floorplan boundaries, power budget) the tools optimise against, and iterate on the output until signoff passes.

SPATIAL, NOT SEQUENTIAL

The hardest mental shift in chip design is that a HDL is not a programming language. A software program describes sequential operations over time; an HDL describes a structure that exists in space. Every always block, every assign, every module instance runs in parallel on every clock cycle. The register file is read at the same time the ALU computes at the same time the cache checks tags at the same time the branch predictor updates, all in one cycle.

Every line of SystemVerilog describes something that physically exists. An assign is a wire. An always_ff is a set of flip-flops. A sub-module instantiation places a copy of that circuit in the design. if (sel) y = a; else y = b; is not a branch; it is a multiplexer that physically exists, whether the condition is true or not. Resource conflicts have to be resolved by the designer: if two operations need a multiplier in the same cycle, you need two multipliers, an arbiter, or a stall.

State explosion is the structural cost. A block with 1,000 flip-flops has 2¹⁰⁰⁰ possible states, more than atoms in the observable universe. Bugs hide in obscure combinations that no exhaustive simulation will visit. The rest of the project (verification, especially) is the discipline of reaching enough of that state space to be confident.

WHAT THE DESIGNER DECIDES, WHAT THE TOOLS DECIDE

Every line of RTL is a structural decision the tools cannot infer. The designer fixes cycle-by-cycle behaviour (the microarchitecture says "the cache returns data with 3-cycle latency"; the RTL says tag-compare in cycle 1, data-array read in cycle 2, alignment and drive in cycle 3), pipeline shape (depth, forwarding, stalls, flushes), exact widths (a 32-bit adder is structurally different from a 64-bit adder), protocol timing (valid/ready handshakes specified cycle by cycle), reset behaviour (what value each register takes on reset), and resource counts (how many adders, SRAM ports, register-file ports the design contains).

What the tools fill in: which standard cells implement each operation (synthesis decides ripple-carry vs carry-lookahead vs carry-select based on the path's timing slack), how big each cell is (drive strength, threshold-voltage flavour), where on the die each cell sits (placement), how wires route between them, and every analogue effect the designer is allowed to treat as ideal (crosstalk, IR drop, electromigration, metastability).

FINITE STATE MACHINES

Nearly every block in a chip is a datapath plus an FSM. The datapath does the computation; the FSM decides what to do. At the physical level an FSM is a state register (flip-flops) plus combinational logic computing the next state and the outputs.

Real chips run FSMs everywhere: cache controllers (MESI / MOESI transitions), bus protocol controllers (AXI's five channels, each with its own VALID/READY handshake, 15–40 states per channel), arbiters (round-robin rotating priority), UART / SPI / I²C, DMA engines (descriptor fetch → source read → dest write → wait completion), DRAM controllers (ACTIVATE → READ/WRITE → PRECHARGE → REFRESH enforcing tRCD / tRP / tRFC), PCIe LTSSM (one of the most complex commercial FSMs, with ~30–50 substates), USB link layers (50–100+ states), DVFS / C-state controllers sequencing voltage and frequency in the correct order.

Textbook FSMs have 4–8 states. Real FSMs have 20–200+ states, conditional transitions on complex boolean expressions, timeouts, error recovery, and corner cases that dwarf the happy path.

AN EXAMPLE

A small piece of real RTL: the integer ALU at the heart of a simple CPU. Combinational, single-cycle: the result and status flags settle in the same cycle the operands are valid. An always_comb mux over the operation select for the result, two assigns for the flag wires.

module alu (
    input  logic [31:0] a,            // rs1 value
    input  logic [31:0] b,            // rs2 value
    input  logic [2:0]  op,           // operation select
    output logic [31:0] y,            // result
    output logic        zero,         // y == 0
    output logic        neg           // y[31] (signed-negative)
);
    localparam logic [2:0]
        OP_ADD = 3'd0,
        OP_SUB = 3'd1,
        OP_AND = 3'd2,
        OP_OR  = 3'd3,
        OP_XOR = 3'd4,
        OP_SLT = 3'd5;              

    always_comb begin
        unique case (op)
            OP_ADD:  y = a + b;
            OP_SUB:  y = a - b;
            OP_AND:  y = a & b;
            OP_OR:   y = a | b;
            OP_XOR:  y = a ^ b;
            OP_SLT:  y = {31'b0, $signed(a) < $signed(b)};
            default: y = '0;
        endcase
    end

    assign zero = (y == 32'b0);
    assign neg  = y[31];
endmodule

~25 lines describing a structure that physically exists: an adder, a subtractor, three bitwise units, a comparator, a 6-to-1 result mux, and two combinational flag wires. From here, synthesis decides ripple-carry vs carry-lookahead vs carry-select for the adder based on the path's slack, picks cell sizes by drive strength, and packs the lot into a few hundred standard cells. Even this twenty-five-line block has 2⁶⁷ possible input combinations; exhaustively simulating it is already infeasible.

THE SYNTHESIS CONTRACT

RTL is the single source of truth for the digital design. Everything downstream derives from it. Simulation runs the RTL cycle by cycle as a software model; verification uses simulation (alongside formal proof) to show the RTL is functionally correct. Synthesis transforms RTL into a gate-level netlist; LEC proves them functionally identical. Physical design takes the netlist and produces layout; LVS proves they match. Emulation and FPGA prototyping map the RTL onto reconfigurable hardware. Pre-silicon software bring-up runs against the RTL itself.

The chain (RTL → synthesis → gates → place-and-route → layout → masks → silicon) is verified at every step. A bug in RTL propagates through every level. A late RTL bug is a re-spin.

Design Verification

Verification consumes 60–70% of the engineering effort on a typical chip project, the largest single line item in the budget. The reason is structural, in three parts. Hardware is massively concurrent: every signal runs every cycle, so bugs arise from interactions no sequential intuition predicts. The state space is unbounded: a 32-bit register has 2³² states; a design with a few hundred flip-flops has more than atoms in the universe. And silicon cannot be patched: every functional escape becomes a metal-layer ECO, a microcode workaround, or a full re-spin (months of delay and millions of dollars).

The problem is not provability; it is coverage. You cannot exhaustively simulate every state, so confidence comes from intelligent coverage of a small, well-chosen slice of the space, anchored to a verification plan written from the spec.

UVM

The dominant testbench methodology is UVM: a SystemVerilog class library standardised by Accellera. UVM codifies the testbench architecture into a small set of reusable base classes, so that engineers move between projects without re-learning the testbench shape.

UVM environment
Sequence
Sequencer
Driver
DUT
(your RTL)
Monitor
Reference Model
Scoreboard
Coverage Collectors (covergroups, assertions)
drive
observe
actual
expected

Sequences define what transactions to send and in what order. The sequencer orchestrates the flow, pulling items from sequences and feeding them to the driver. The driver converts abstract transactions into pin-level signals following the protocol's timing. The monitor passively watches the interface, reconstructs transactions from pin activity, and broadcasts them. The scoreboard receives transactions from both input and output monitors, runs a reference model, and compares expected against actual. Coverage collectors measure how much of the spec was actually exercised.

Around the testbench, agents bundle a driver, monitor, and sequencer for one interface; the environment bundles all agents, scoreboards, and coverage; the test at the top configures the environment and chooses which sequences to run.

CONSTRAINED RANDOM + COVERAGE

Directed tests don't scale. You cannot write one test per scenario in a chip whose state space exceeds the atom count of the universe. Instead, verification engineers describe the space of legal stimulus using constraints and let a solver generate thousands of random-but-valid inputs.

// 1. The sequence-item: the space of legal stimulus
class cpu_instr extends uvm_sequence_item;
    \`uvm_object_utils(cpu_instr)

    typedef enum {ADD, SUB, MUL, LD, ST, BR, JMP} opcode_e;

    rand opcode_e   op;
    rand bit [4:0]  rs1, rs2, rd;     // 5-bit register-file indices
    rand bit [31:0] addr;            

    // Realistic instruction mix
    constraint c_mix  { op dist { ADD := 30, SUB := 15, MUL := 10,
                                  LD  := 20, ST  := 15,
                                  BR  :=  7, JMP :=  3 }; }

    // LD/ST: word-aligned address inside the mapped region
    constraint c_addr { (op inside {LD, ST}) ->
                            addr[1:0] == 2'b00 &&
                            addr inside {[32'h0000_1000:32'h7FFF_FFFC]}; }

    function new(string name = "cpu_instr");
        super.new(name);
    endfunction
endclass

// 2. The sequence: ten thousand legal instructions, handed to the driver
class cpu_seq extends uvm_sequence #(cpu_instr);
    \`uvm_object_utils(cpu_seq)

    function new(string name = "cpu_seq");
        super.new(name);
    endfunction

    task body();
        cpu_instr instr;
        repeat (10_000) begin
            instr = cpu_instr::type_id::create("instr");
            start_item(instr);                 // request a slot on the sequencer
            assert(instr.randomize());         // solver picks op, regs, addr
            finish_item(instr);                // hand off to driver via TLM
        end
    endtask
endclass

The sequence-item declares the random fields and the constraints they must satisfy; the sequence wraps the generation loop. Inside body(), each iteration creates a fresh item via the factory, asks the sequencer for a slot with start_item, calls randomize() (the solver picks legal values for op, rs1, rs2, rd, addr in one shot), then hands the item to the driver with finish_item. The driver, blocked on seq_item_port.get_next_item(), wakes up, converts the item to pin-level activity on the DUT's interface, and signals completion. Layered constraints (a base class for "what is always legal", inline constraints for "what this test narrows to") let one item class serve dozens of scenarios without code duplication.

Coverage answers the only question that matters: have I tested enough?

Code coverage is structural: line, toggle, branch, condition, FSM. Necessary, not sufficient: 100% code coverage with no checks finds zero bugs.
Functional coverage is specification-driven: covergroups that count whether each feature, corner case, and cross-product the verification plan calls out was actually exercised.
Assertion coverage: cover property track whether specific temporal sequences fired.

A functional coverage collector for the cpu_instr stream, written as a uvm_subscriber so the monitor feeds it through an analysis port:

class cpu_cov extends uvm_subscriber #(cpu_instr);
    \`uvm_component_utils(cpu_cov)

    covergroup cg with function sample(cpu_instr instr);

        // 1. Did every opcode actually show up?
        opcodes: coverpoint instr.op; // auto-bin per enum value

        // 2. Did we exercise the register-file corners?
        dest_reg: coverpoint instr.rd {
            bins zero = {0};        
            bins low  = {[1:7]};
            bins mid  = {[8:23]};
            bins high = {[24:31]};
        }

        // 3. Address-region coverage, but only for memory ops
        addr_region: coverpoint instr.addr iff (instr.op inside {LD, ST}) {
            bins page0  = {[32'h0000_1000 : 32'h0000_1FFF]};
            bins low_mb = {[32'h0000_2000 : 32'h000F_FFFF]};
            bins mid_mb = {[32'h0010_0000 : 32'h00FF_FFFF]};
            bins rest   = default;
        }

        // 4. Cross: which opcode x destination-register combinations fired?
        op_x_rd: cross opcodes, dest_reg;
    endgroup

    function new(string name, uvm_component parent);
        super.new(name, parent);
        cg = new(); // covergroups must be constructed
    endfunction

    // Invoked once per instruction the monitor observes on the bus
    function void write(cpu_instr t);
        cg.sample(t);
    endfunction
endclass

The four coverpoints together capture what mattered about the stimulus, not what the stimulus happened to do. After regression, the tool reports a percentage per bin and per cross combination. A hole in opcodes (no JMP was generated all night), an addr_region gap (mid_mb never sampled), or a sparse op_x_rd cell (MUL never wrote r0) is the question the verification engineer reads next: tighten or loosen a constraint, add a directed test, or mark the bin ignore_bins if it's genuinely unreachable by design.

The coverage-driven verification loop: write a vplan from the spec, build a UVM testbench, run regression with thousands of random seeds, merge coverage, analyse the holes, write new constraints or directed tests targeting the gaps, iterate. Coverage holes typically reveal either (a) constraints too tight to ever produce a scenario, (b) missing stimulus, or (c) unreachable code.

ASSERTIONS AND FORMAL

The UVM testbench above drives stimulus and checks end-to-end results. But many bugs are protocol violations that fire on a single clock edge: a VALID dropped one cycle early, a payload field flipped mid-handshake. SystemVerilog Assertions push that check into the design itself, evaluated continuously on every cycle, failing loudly the instant the contract breaks. A small checker for the AXI4 write-address channel:

interface axi_aw_checker (
    input  logic        clk,
    input  logic        rst_n,
    input  logic        awvalid,
    input  logic        awready,
    input  logic [31:0] awaddr,
    input  logic [7:0]  awlen,
    input  logic [2:0]  awsize
);
    default clocking cb @(posedge clk); endclocking
    default disable iff (!rst_n);

    // Valid must never be asserted during reset
    aw_reset_low: assert property (!rst_n |-> !awvalid)
        else $error("AWVALID asserted during reset");

    // Once Valid rises, it must stay high until Ready accepts
    aw_valid_stable: assert property (
        awvalid && !awready |=> awvalid
    ) else $error("AWVALID dropped before handshake");

    // While the handshake is pending, the payload must not change
    aw_payload_stable: assert property (
        awvalid && !awready |=>
            $stable(awaddr) && $stable(awlen) && $stable(awsize)
    ) else $error("AW payload changed mid-handshake @ %h", awaddr);

    // Coverage: did we ever observe a back-to-back accepted burst?
    aw_back_to_back: cover property (
        (awvalid && awready) ##1 (awvalid && awready)
    );
endinterface

The two implication operators (|-> overlapping, |=> non-overlapping) and $stable (true when a signal didn't change between the previous and current cycle) give the small set of temporal idioms most protocol checks need. Each named assert property produces a clean simulator message the instant it fires; the parallel cover property feeds the same coverage pool as covergroups, recording whether the back-to-back scenario was actually exercised. The whole interface gets bound once to the bus, so the same properties run unchanged in simulation, and under a formal tool.

Formal verification replaces simulation with mathematical proof. A formal tool exhaustively explores every reachable state of the block to prove an assertion can never be violated, or to find a counterexample. The power is exhaustive coverage of the proven property; the limitation is state-space explosion. Formal is effective for small, control-heavy blocks: arbiters, FIFO controllers, protocol engines, CDC logic, security paths. It is infeasible for full processor cores.

Used together, the picture is: simulation handles the breadth (thousands of tests, rapid debug, coverage across the full design space); formal handles the depth (proving specific properties exhaustively on tractable blocks); assertions catch protocol violations where they hide.

THE VERIFICATION ENGINEER

A modern regression is tens of thousands of tests running nightly across thousands of CPU cores, with coverage merged across the entire farm. The verification engineer's job is to be paranoid; their failure mode is missing a corner case; their success metric is silence in the bring-up lab.

Simulation, Emulation, FPGA Prototyping

The same RTL gets executed at three very different speeds during the project. Each tier owns a niche the others cannot fill.

Software simulation owns block-level development & design verification. Simulators run thousands of tests, providing complete debug visibility (every signal forward and backward at every cycle). The work that runs on every engineer's desk every day. Industry-standard simulators are Synopsys VCS, Cadence Xcelium, and Siemens Questa, with open-source Verilator the fastest of the lot for cycle-based simulation of synthesisable RTL. Roughly 65% of all design bugs are caught here, and the speed of the simulators is often the limiting factor.

The view that makes that visibility usable is the waveform: every signal in the design plotted against time, navigable forward and backward, with cursors marking the cycle the engineer is inspecting. Synopsys Verdi is the industry-standard viewer; Cadence SimVision and open-source GTKWave are the alternatives. A typical view of a single memory-request transaction:

0
1
2
3
4
5
6
7
8
9
clk
rst_n
req
addr[31:0]
state
0x0000_0100
RESET
IDLE
REQ
BUSY
DONE
IDLE
cursor: cycle 5

Debugging is the discipline of finding the one signal that's wrong on the one cycle that matters. Most of an RTL engineer's time is spent staring at views like this.

Emulation owns system-level workloads: booting Linux, running SPEC traces, ML inference, billions of cycles. The work that needs more wall-clock minutes than software simulation can spare. RTL is mapped onto specialised hardware running at 1–10 MHz: Cadence Palladium uses a massive array of custom boolean processors (Cadence's ISA on 16 nm silicon, with Z3 leveraging NVIDIA BlueField DPUs to handle designs up to 48 billion gates); Synopsys ZeBu uses commercial Xilinx FPGAs; Siemens Veloce uses custom reconfigurable chips designed specifically for emulation. Room-scale, rack-mounted, millions of dollars per rack, shared across teams. Much faster than simulation; but long compile times, and limited debug visibility.

FPGA prototyping owns software bring-up: the firmware team boots an OS on the chip before the chip exists. The work that needs near-native speed and real external hardware. Synopsys HAPS, Cadence Protium, and Siemens Veloce Primo map the design onto commercial FPGA boards running at tens of MHz, fast enough to talk to real memory, networks, and displays. The cost is visibility (limited to external interfaces, like a real chip) and a more manual mapping process; designs may need modifications to fit available FPGAs.

Tool	Speed (Hz of simulated clock)	Capacity	Debug visibility	Capital cost
Software simulation	1 Hz – low tens of Hz full-chip; kHz block-level	any size; runs on CPU server farm	complete: every signal, every cycle, forward and backward	commodity servers
Emulation	1–10 MHz	tens of billions of gates	signals must be pre-selected for tracing	millions of dollars per rack
FPGA prototyping	tens of MHz	limited by FPGA capacity; design may need partitioning	like a real chip; limited to external interfaces	100K – 1M per board

Teams use all three. The progression maps to the project: block-level RTL development in simulation, system-level integration on the emulator, software bring-up on the FPGA prototype.

Performance

Performance work threads through the entire project. It splits along two axes: throughput (how many cycles does a workload take?) and frequency (can the design hit the target clock?). Total performance is frequency × (1/cycles). A design that clocks beautifully but has 30% more stalls than the model is as broken as one that hits IPC but cannot close timing.

THE CORRELATION LOOP

The performance model and the RTL each measure the same workload. Both are instrumented with the same performance counters: l2_miss_demand_load, rob_full_stall_cycles, branch_mispredict_at_retire, queue occupancy, arbitration outcomes. Same names, same definitions, same trigger conditions. Disagreement in cycle count tells you the models disagree; disagreement in counters tells you why. Twice as many L2 misses in RTL points to a prefetcher divergence. Lower IPC with no counter delta points to a stall the perf model abstracts away.

The loop, run continuously:

The performance model predicts cycles and counter values for a workload.
The same workload runs on RTL via simulation or emulation.
Counter values and cycle counts are diffed.
Any gap is debugged. Either the model is missing a real effect (model bug) or the RTL has a stall the architects didn't intend (RTL perf bug). Both get fixed; the question is always which side is wrong.

Teams track per-workload cycle deltas with a target like "within 3% on every key workload". Divergence above threshold is treated as a stop-the-line issue: every downstream experiment based on the model is now suspect.

The same counters often become the silicon hardware performance monitoring counters (Intel's PMC, ARM's PMU, the per-block telemetry on every modern accelerator), closing the loop across C++ model, RTL, and real hardware. Once silicon comes back, the model is correlated against silicon, and any systematic gap informs the next project's modelling methodology.

WHY CORRELATION MATTERS

An uncorrelated performance model is a hypothesis, not a measurement. Every abstraction in the model is a potential lie: maybe the memory controller is modelled as a fixed-latency queue rather than the real scheduler; maybe store-to-load forwarding is assumed perfect; maybe a 3-cycle clock-domain crossing is ignored. The failure mode is subtle: the model will happily produce precise-looking numbers like "feature X gives 4.2% IPC uplift on workload Y", and if the model is systematically wrong about the memory subsystem under contention, that 4.2% might be 0% or -2% in reality.

The slow, accurate ground truth (RTL, emulation, eventually silicon) keeps the fast, approximate model honest. Remove the ground truth and the fast model drifts into fiction. This pattern (fast model for thinking, slow ground truth for calibration) is general across any engineering domain with the same shape.

TIMING-DRIVEN PERFORMANCE

The other half of performance work is frequency. Synthesis and static timing analysis together report critical paths: the slowest combinational paths between two flip-flops, the ones that limit achievable clock. Engineers stare at timing reports showing negative slack on specific endpoints.

For each failing path: trace what's happening, count logic levels, identify the gates, the wire load, the module boundaries, whether it's setup or hold. Synopsys PrimeTime and Cadence Tempus give detailed path breakdowns. Common RTL-level fixes: pipelining (add a stage to break a long path), retiming (move logic across FF boundaries to balance delay), expression restructuring (turn a priority mux into a parallel one, balance adder trees, replace ripple-carry with carry-lookahead), precomputation (compute conditions earlier in the pipeline where there's more slack), logic duplication (cut fanout on critical nets).

Teams track WNS (worst negative slack) and TNS (total negative slack) per block, with daily synthesis runs and dashboards. Owners are assigned per failing module. As tapeout approaches, the focus narrows; the last few weeks before signoff are typically dominated by timing closure on a handful of stubborn paths.

The performance architects, RTL designers, synthesis engineers, and timing engineers all work together. The hardest paths require cross-discipline fixes rather than pure RTL ones: sometimes the right answer is a floorplan change to shorten the route, sometimes it's an architectural retreat (one more pipeline stage at the cost of one cycle of latency).

Synthesis

Synthesis transforms RTL into a gate-level netlist: specific logic cells from the foundry's standard cell library, wired together to implement the same function as the RTL. The dominant tools are Synopsys Design Compiler (the canonical example, brought to market by Aart de Geus in the late 1980s and the engine of the RTL revolution) and Cadence Genus.

The transformation is in several passes. Parsing reads the RTL. Technology-independent optimisation does boolean simplification, constant propagation, dead-code elimination: the same kind of optimisations a software compiler does, but applied to combinational cones rather than instruction streams. Technology mapping binds the optimised boolean logic onto specific standard cells from the foundry library; a assign y = (a & b) | (~a & c) might become four specific NAND / inverter cells wired together, chosen for the right combination of speed, area, and power. Technology-dependent optimisation sizes gates (higher drive strength for fanout-heavy nets), inserts buffers (long wires need amplification), swaps cell variants (low-Vt for speed, high-Vt for leakage), and applies retiming across register boundaries to balance pipeline stages.

A modern SoC gate-level netlist contains hundreds of millions to billions of cell instances. No human reasons about it directly. Equivalence to the RTL is proven mathematically by logic equivalence checking (Synopsys Formality and Cadence Conformal). LEC formally proves the two are functionally identical for every input; if it cannot prove equivalence, the synthesis run is rejected and re-attempted with different constraints.

The synthesis engineer's tools are constraints. The clock period, input/output delays, false paths, multi-cycle paths, maximum fanout, allowed cell types, area budget, leakage budget. Constraints are an entire language (SDC), and most synthesis problems are constraint problems: the wrong constraint either over-optimises one region at the cost of another or fails to flag a path that needs attention.

Designers run synthesis incrementally during RTL development for early feedback on timing, area, and power. If a path takes 2 ns but the clock period is 1 ns, the logic needs restructuring before the bug compounds. Late in the project, a final physical synthesis pass uses real floorplan information for wire-load estimates, narrowing the gap between synthesis-time projections and post-routing reality.

Physical Design

Physical design takes the gate-level netlist and produces layout: the actual geometric arrangement of cells and wires on the die that the foundry will fabricate. The output is GDSII (or its successor OASIS), the layout database the foundry consumes. It is the deepest pipeline in the flow, and the most numerical-optimisation-heavy.

FLOORPLAN

A high-level layout partitioning the die. Which CPU core sits where, where the caches go, where the memory controllers attach, where the I/O pads land, where the interconnect rings. The floorplan is largely manual and critical: it determines proximity, communication locality, thermal distribution, and the clock tree's distributability. A bad floorplan makes downstream timing closure impossible. The floorplan also defines the power grid: wide metal stripes distributing the supply voltage across the die, sized to deliver current without excessive IR drop.

PLACEMENT

Assigns physical locations to all standard cells, potentially hundreds of millions of them. Optimises for total wire length, cell density, and timing-critical proximity. The optimisation problem is massive; runs take hours to days. Timing-driven placement weights cells on the critical path so they end up close enough to meet the clock period.

CLOCK TREE SYNTHESIS

The clock has to arrive at every flip-flop on the die at very close to the same time. Skew (the variation in arrival time across all flip-flops) is held to tens of picoseconds. CTS builds a balanced distribution tree, inserting buffers at carefully chosen points so that the path-length from the source to every endpoint is roughly equal. A modern clock tree contains hundreds of thousands of buffers and consumes significant chip power on its own.

ROUTING

Connects every signal with actual metal wires across ten or more metal layers. Lower layers (M1–M3) carry local connections within and between standard cells; middle layers (M4–M16) carry block-to-block routes; upper layers (M17+) carry global signals and the power distribution buses. Routing must obey the foundry's design rules: minimum width, minimum spacing, layer enclosure, density. The router plans approximate global paths first, then assigns exact tracks and vias in detailed routing.

TIMING CLOSURE

The hardest weeks of the project. Every signal path from one flip-flop through combinational logic to the next must complete within one clock period. Timing depends on parasitics (the resistance and capacitance of every wire), which depend on routing, which depend on placement, which depend on timing optimisation. A circular dependency. Tools iterate: place → estimate delays → optimise → route → extract parasitics → check timing → adjust → re-route → re-check. The loop can take weeks to converge.

Levers: cell swapping (higher drive variant), transistor resizing, buffer insertion, logic restructuring, placement adjustment, and (when nothing else works) RTL pipeline-stage additions and re-verification. The last is the expensive lever. The closer the project is to tapeout, the more painful any RTL change becomes.

SIGNOFF

Before the layout goes to the foundry, a battery of checks fires. DRC (design rule checking) verifies the layout obeys every foundry rule across millions of rules and billions of polygon checks. LVS (layout versus schematic) confirms the layout implements the intended netlist: the topology extracted from the polygons must match the gate-level netlist. ERC (electrical rule check) flags floating gates, shorted supplies, missing well ties, antenna effects. Signoff STA runs static timing analysis with detailed extracted parasitics across multiple PVT corners (process, voltage, temperature). Power analysis checks the budget; IR-drop analysis checks the power grid; signal-integrity analysis checks crosstalk.

DRC, LVS, and ERC are known as physical verification; Signoff STA is timing verification.

When every check passes, the project tapes out. The GDSII goes to the foundry. The team breathes. And then waits months for first silicon.

Foundry & Fabrication

The GDSII arrives at the foundry, and the chemistry takes over. The fabrication pipeline is best understood as an exercise in removing disorder (chemical impurities, crystal grain boundaries, surface roughness) until what remains is as close to a perfect crystal as humans can produce.

SAND TO SILICON WAFER

Silicon is the second-most-abundant element in the Earth's crust. Supply is not the constraint; purity is. Quartzite ore from the mine is 95–99% SiO₂; semiconductor-grade silicon requires 99.999999999% purity: eleven nines, "11N", parts-per-billion impurity levels.

Quartzite
95–99%
Metallurgical
Silicon
98–99%
Trichloro-
silane (TCS)
ppb (gas)
Polysilicon
9N – 11N
CZ Ingot
single crystal
300 mm Wafer
atomically flat
~775 μm
submerged-arc
furnace (carbon)
SiO₂ + 2C → Si + 2CO
HCl reaction +
fractional distillation
Si + 3HCl → SiHCl₃ + H₂
Siemens process
(slim-rod CVD)
SiHCl₃ + H₂ → Si + 3HCl
Czochralski pull
1–2 mm/min
1,414 °C melt
slicing, lapping
etch, CMP
<0.1 nm RMS

Metallurgical-grade silicon. Quartzite is fed into a submerged-arc furnace with carbon (coal, charcoal, wood chips) at 1,800–2,000 °C. Carbon strips the oxygen: SiO₂ + 2C → Si + 2CO. The molten silicon pools at the bottom and is tapped off at 98–99% purity. Still billions of times too dirty for a chip.

Trichlorosilane. Purifying a solid to eleven nines is essentially impossible through solid-state methods; purifying a gas through distillation is something the chemical industry is extremely good at. The metallurgical silicon is ground and reacted with HCl at 300 °C: Si + 3HCl → SiHCl₃ + H₂. The silicon has been converted from an intractable solid into a distillable liquid (TCS boils at 31.8 °C). The metal-chloride impurities (FeCl₃, AlCl₃, BCl₃) have different boiling points, which is the only reason this works. The hardest impurities to separate are boron trichloride (12.6 °C) and phosphorus trichloride (76 °C): boron and phosphorus are the dopants that will go into the silicon later, so even parts-per-billion levels matter, and their boiling points bracket TCS. Many distillation stages are needed to push purity to the ppb level.

Polysilicon. The TCS is fed into a Siemens reactor: a bell-jar chamber containing thin silicon rods heated to 1,100 °C. The reverse reaction runs on the hot surfaces: SiHCl₃ + H₂ → Si + 3HCl. Silicon deposits atom by atom onto the rods, growing them from pencil-thin starters into thick U-shaped rods over days to weeks. The result is polycrystalline silicon at 9N to 11N purity but with random grain orientations. Each grain is a perfect crystal; the boundaries between them are full of defects. This is the feedstock for crystal growth.

The Czochralski ingot. A chip cannot be built on polycrystalline silicon: grain boundaries scatter electrons, create recombination sites, and make electrical behaviour unpredictable. The fix is to grow a single crystal. Polysilicon chunks are loaded into a quartz crucible and melted at 1,414 °C. A small seed crystal of perfect single-crystal silicon (oriented in the (100) plane, chosen because it produces the lowest density of surface states after oxidation) is lowered into the melt, then slowly pulled upward at 1–2 mm per minute while rotating, with the crucible counter-rotating to homogenise. Each atom that freezes out of the melt locks into the orientation dictated by the existing crystal lattice. The pull continues for days; a modern ingot is 300 mm (12 inches) in diameter and 1–2 metres long, weighing over 100 kg. As a bonus, the liquid-solid interface acts as a purification step: most impurities have a segregation coefficient below 1, so they prefer to stay in the liquid rather than incorporate into the solid, and each layer of freezing silicon is purer than the melt it grew from.

Wafer finishing. The ingot is ground to exact diameter on a lathe, the ends cropped, a notch ground in to mark crystal orientation, and the body sliced into thin discs with a diamond-abrasive wire saw, producing hundreds of wafers per ingot, each 800–900 μm thick. Both surfaces of every wafer have saw damage 10–20 μm deep, which is removed by lapping (abrasive slurry), chemical etching (HF / HNO₃ / acetic acid), and CMP (chemical-mechanical planarisation), which presses the wafer face-down against a rotating pad with a colloidal silica slurry, softening the surface chemically and removing it mechanically. The polished surface is atomically flat, below 0.1 nm RMS roughness (sub-angstrom). Only the front side is finished to this standard; the back is left etched. The wafer goes through the RCA clean (organics removal with NH₄OH + H₂O₂, oxide strip with dilute HF, metal removal with HCl + H₂O₂), then often gets an epitaxial layer grown on top: a 2–20 μm layer of silicon deposited from silane gas at 1,000–1,150 °C, extending the wafer's lattice into a defect-free surface region.

What leaves the wafer manufacturer is a 300 mm disc, ~775 μm thick, with a single-crystal lattice unbroken across the surface, sub-angstrom roughness on the polished face, precisely controlled dopant concentration, and essentially zero surface contamination. Packed in nitrogen-atmosphere FOUPs (front-opening unified pods) to prevent native oxide growth, the wafer arrives at the fab ready to begin transistor fabrication.

THE LAYER STACK

A chip is fabricated layer by layer, bottom-up: transistors first, then a metal stack of 10–15 layers.

p-substrate (silicon)
n-well
p-well
PMOS gate
NMOS gate
M1
M2
M3 …
M8
M12
top metal
passivation
bond pad
10+ metal layers above the device plane
transistors built into the silicon surface
S
G
D
source
gate
drain
channel
forms when VGS > VT
gate oxide
(~1–2 nm)
polysilicon gate
n+ source
n+ drain
electron flow: source → drain
p-type substrate (body)
B
body

Transistors are built into the silicon surface. Wells are deep doped regions (n-well, p-well) defining the bulk substrate type for each transistor type. Source and drain are smaller, more heavily doped regions of opposite type, defined by the active/diffusion layer and an implant layer that specifies dopant type and dose. A narrow undoped channel sits between them. Across the channel runs a strip of polysilicon, the gate, separated from the silicon by a very thin gate oxide (a few nm). With no voltage on the gate, no current flows. Apply voltage; the electric field attracts carriers into the channel, creating a conductive path. Remove voltage; the channel turns off.

Metal layers are the wiring. Lower layers (M1–M3) handle local routing: short connections within and between standard cells. Middle layers (M4–M16) handle semi-global routing, connecting functional blocks (where the microarchitecture becomes visible as a floorplan). Upper layers (M17+) handle global routing, the clock tree (which must reach every flip-flop on the die), and the wide power buses that deliver current everywhere. Above the top metal sits a passivation layer (protective overcoat) with openings over the bond pads where wires leave the die.

The mapping. Architecture is implemented in microarchitecture, synthesised into standard cells, placed onto the silicon surface, and routed together through the metal stack. Every wire in the netlist is a polygon in the metal stack.

PDK AND GDSII

The foundry's contract with the designer is the Process Design Kit. It defines:

Design rules: minimum widths, spacings, enclosures, density requirements for every layer (DRC verifies the layout obeys them).
SPICE models for transistors and passives so the designer can simulate analog and timing behaviour.
Layer definitions mapping abstract design layers to physical mask layers (the foundry's mask map).
Standard cell libraries: pre-designed, pre-characterised, design-rule-clean layouts of basic logic gates with known timing and power.
Parameterised cells (pcells): layout generators that produce design-rule-clean polygons for transistors, resistors, capacitors with parameters chosen by the designer.
Antenna rules: limits on how much metal area can connect to a gate during fabrication before being connected to higher layers (excess area accumulates charge during plasma etch, damaging the gate oxide).
ERC and LVS runsets: configuration files that drive electrical-rule checking and layout-vs-schematic checking.

The GDSII file is the deliverable. It contains every polygon in the layout, tagged with a layer/datatype pair that maps onto a foundry mask. The file is a tree of cells: cells contain polygons and references to other cells (with placement transforms), so a standard cell defined once is instantiated thousands of times by reference, not copy. The PDK defines the contract; the GDSII is what must comply. The foundry runs its own DRC and LVS on the submitted GDSII before tapeout is accepted.

WAFER FAB

GDSII becomes a set of photomasks: one (or several, with multi-patterning) per mask layer, each a quartz plate with the layer's polygons patterned in chrome. The wafer cycles through the fab tools repeating, for each mask layer: deposit (a film of oxide, nitride, metal, or poly), pattern (spin photoresist, expose through the mask with deep-UV or EUV lithography, develop), etch (remove the unmasked material), strip resist, implant (where dopants are introduced), anneal, CMP (planarise so the next layer starts flat), clean. Each wafer makes several hundred passes through this loop over weeks. Modern leading-edge nodes use EUV lithography at 13.5 nm wavelength; older nodes use deep-UV at 193 nm with multi-patterning to push effective resolution lower.

After fabrication, every die on the wafer is probed electrically to mark good and bad ones; the wafer is sliced; good dies are packaged; the packaged parts are tested at higher voltages and temperatures to weed out infant-mortality failures. Then they ship.

Yield, the fraction of dies on a wafer that pass, is the foundry's economic axis. A single particulate landing on the wrong layer can kill a die. The whole apparatus exists to keep particles, contamination, and process variation below thresholds that would make manufacturing uneconomic at modern feature sizes.

Bring-up

First silicon comes back. The team gathers in a lab. A board is powered up. A logic analyser is connected. Someone tries to read a register.

This is bring-up: the project's translation from a working RTL design to a working chip. Two halves run in parallel: pre-silicon software bring-up that began months before tapeout, and post-silicon validation that begins the day chips arrive.

PRE-SILICON: SOFTWARE AGAINST THE MODEL

Software cannot wait for silicon. Firmware, drivers, OS, application stacks each represent months of development; if the team starts when chips return, the product slips by a year. The fix is to begin against the functional model as soon as the architecture spec is stable. Because the functional model faithfully implements the ISA, models device registers, and handles memory-mapped I/O, a driver can interact with it as it would with real hardware.

The software stack layers, in the order they bring up:

Firmware: the first code to run after reset. Configures clock PLLs, trains the memory controller, initialises power regulators, sets up interconnect. Bare-metal: no OS underneath. Examples: BIOS/UEFI on x86, custom bootloaders on embedded SoCs, boot ROM on phones.
Bootloader: loads the operating system after firmware. Sets up enough of the system (memory, storage, console) to find and load the kernel. Examples: U-Boot, GRUB.
OS / kernel: virtual memory, scheduling, interrupts, driver framework. For a new chip, board-support packages or platform code describe the hardware's organisation.
Drivers: make individual hardware blocks usable. Each block (GPU, NIC, storage, display, USB, accelerators) needs a driver that understands its specific register interface, programming model, and behaviour. The software most tightly coupled to hardware.

Bring-up against the functional model finds bugs in both directions: software bugs (incorrect register sequences, missing initialisation, misaligned data), and hardware-spec bugs (missing interrupts, underspecified programming sequences, register interfaces that don't work for certain use cases). Finding spec bugs in simulation, when the RTL can still be changed, is vastly cheaper than finding them in silicon. The functional model is a co-development platform, not just a performance tool.

As RTL matures, software moves to emulation and then to FPGA prototypes. By the time silicon returns, firmware should already boot, kernels should already run, drivers should already work, at least on the model. The first silicon bring-up day is the moment that fiction meets reality.

POST-SILICON: FIRST BOOT

First silicon almost never just works. The issues that show up (those that simulation could not have caught) fall into a few buckets.

Analog and electrical effects. Crosstalk, IR drop on heavily loaded power rails, signal-integrity issues on long high-speed serial links, voltage droop under transient loads, thermal hotspots. Simulation models the wires as ideal; silicon doesn't. Some chips need a voltage tweak or a frequency derate. Some need a metal-layer ECO: re-spin just a few of the metal masks (cheaper than a full re-spin, ~1M instead of ~10–50M) and re-fabricate. Some are unfixable in silicon and shipped with a firmware workaround.

Corner cases at scale. Bugs that only surface after billions of cycles of real workload: memory-system pathologies, livelock-adjacent fairness issues, cache-coherence races, security-path interactions. Emulation finds some; silicon finds the rest. This is where the bring-up team earns the project.

Process variation. Different dies on the same wafer behave slightly differently. Some hit the target clock; some don't. The team characterises binning (which die population goes into which SKU) based on measured performance, power, and yield.

Performance-silicon correlation. The performance model gets correlated against measured silicon. Any systematic gap informs the next project's modelling methodology. Hardware performance counters (the same counters that lived in the perf model and in the RTL) light up; the same workload that was tracked across the entire project now gets measured one last time against the real thing.

When everything works, when bringing up a new OS on the chip is the boring part of the day, the team ships. Then they start on the next chip.`,n1=`如何从零开始设计一块芯片

1979 年，Carver Mead 和 Lynn Conway 向大学分发了《超大规模集成系统导论 (Introduction to VLSI Systems)》的草稿章节。直到那时，芯片设计一直是一门手艺。每一个新的超大规模集成 (VLSI) 设计都由一个小团队根据工艺节点 (process node) 的细节，逐个晶体管地定制布局。Mead 和 Conway 用一种方法学取代了这种手艺：几何设计规则将代工厂 (foundry) 抽象掉，标准单元 (standard cells) 将晶体管抽象掉，设计在抽象层次 (abstraction stack) 上升为非专业人士也能理解的东西。两年后，MOSIS 让一名研究生以课程项目的形式流片 (tape out) 了一块包含 10,000 个晶体管的芯片。

一个现代的系统级芯片 (SoC) 在单个光罩极限芯片 (reticle-limit die) 上承载 500 亿至 1,000 亿个晶体管。它们没有一个是由人放置的。从设计师的意图到那些晶体管的链条跨越十层抽象。在架构阶段捕获的错误可以在一个下午修复；而在硅 (silicon) 中发现的相同错误会导致数月的进度延误和数百万美元的掩模成本、晶圆报废以及重新表征。大多数芯片设计的工作就是在尽可能便宜的阶段发现错误。

Mead 和 Conway 奠定的结构就是现代芯片设计所遵循的结构。意图 (Intent) → 架构 (architecture) → 微架构 (microarchitecture) → 寄存器传输级 (RTL) → 门 (gates) → 布局 (layout) → 硅 (silicon).
每个阶段降低一级抽象，并将其输出交付给下一个阶段。流程在主线（脊柱）上是线性的，但在实践中是并行的：建模、仿真和验证贯穿从架构到启动/调试 (bring-up) 的每个阶段，是整个项目中寿命最长的产物。

下文将从端到端完整说明芯片设计流程。

流程

一块芯片从规格（spec）开始，最终成为晶粒（die）。在这两个端点之间有八个阶段，每个阶段都是从更高抽象层到更低抽象层的翻译。这个翻译有时由人完成，有时由工具完成，但总是通过某种等价性证明来与上一级进行校验：对规格进行仿真（simulation against the spec）、对 RTL 进行逻辑等价检查（LEC against the RTL）、对网表进行 LVS 比对（LVS against the netlist）。每个层级都会对上一级做出承诺。跨越层级且未被发现的缺陷，其代价会呈指数级增长。

线性阶段
并行活动
架构 (Architecture)
意图 → 规范
微架构 (Microarchitecture)
规范 → 结构
RTL（逻辑设计）
结构 → RTL
逻辑综合 (Synthesis)
RTL → 门级网表
物理设计 (Physical Design)
网表 → 几何 (GDSII)
代工与制造 (Foundry & Fabrication)
GDSII → 硅
启动与调试 (Bring-up)
硅 → 工作系统
量产 (Production)
工作系统 → 产品
建模（功能、性能、周期精确）
仿真（Hz – kHz）
仿真与 FPGA 原型（MHz – 10s MHz）
验证（设计、物理、时序）
性能关联（模型、RTL、硅）
时序收敛（STA、DRC、LVS、IR、SI）
硅前软件启动与调试 (Pre-silicon Software Bring-up)
硅后验证与表征

左侧的各个阶段是项目的主干。右侧的条带是纬线：这些活动在某个阶段开始并贯穿多个其他阶段。架构 (Architecture) 阶段编写的功能模型 (functional model) 在启动 (Bring-up) 期间仍在运行，现在作为软件验证 (software validation) 的参考。在寄存器传输级 (RTL) 之前编写的性能模型 (performance model) 在两年后与硅 (silicon) 上的实际结果进行关联验证。项目中寿命最长的工件 (artefacts) 是最先编写的那些。

此流程附带两个契约：硬件-软件契约 (hardware-software contract，指软件被允许假设的内容) 和代工厂-设计契约 (foundry-design contract，指工艺设计套件 (PDK)，即版图被允许的样式)。第一个必须在多代硅片 (silicon) 之间成立；第二个必须在一次流片 (tapeout) 中成立。

体系结构

架构阶段（architecture phase）决定芯片（chip）要做什么。起点是芯片需要良好运行的工作负载（workloads）：推理流程（inference passes）、训练内核（training kernels）、数据库查询（database queries）、编解码流水线（codec pipelines）和图形栈（graphics stacks）。基于这些工作负载，架构师（architects）会产出三项内容。

硬件-软件契约（hardware-software contract）：指令集架构（ISA）、内存模型（memory model）、特权架构（privilege architecture）、异常模型（exception model）、一致性语义（coherence semantics）。这是软件程序所面向的表面，并且被允许在该芯片系列发布的每一代硅片上依赖。

芯片的块级结构：包含哪些核心、并列存在哪些加速器、内存位于何处、互连（interconnect）如何在各块之间传输流量，以及在该结构上穿行的逻辑数据流（dataflows）。在任一模块内部，逐周期（cycle-by-cycle）的运作机制（阶段数、队列深度、转发路径、调度策略）留给微体系结构（microarchitecture）来实现。

PPA 包络（PPA envelope）：每个模块在那些工作负载上必须满足的性能（performance）、功耗（power）和面积（area）目标。架构师在快速模型上对配置进行遍历（sweep），直到包络收敛（envelope closes）；只有在那之后，任何模块（block）才会被提交到下游（committed downstream）。

该阶段的输出是一组定义芯片功能的体系结构规格说明。

这一阶段的杠杆作用巨大。应遵守的原则是：在投入任何昂贵的详细设计之前，先用快速模型花费数周或数月的时间。

建模

架构师从事软件工作，而不是寄存器传输级 (RTL). 他们使用像 C++ 这样的常规编程语言编写. 他们构建两种互补的模型，这两种模型在项目的生命周期内共存：一种用于确定程序在芯片上做什么，另一种用于确定芯片能以多快的速度完成这些操作.

功能模型 (functional model) 是针对指令集架构 (ISA) 的软件解释器，维护架构状态（PC、寄存器文件 (register file)、标志 (flags)），按照规范执行每条指令，并返回正确的结果。QEMU 和 Simics 是商用级的示例；大多数团队维护各自的专有等效实现。它没有时间的概念：没有流水线阶段、没有缓存延迟、没有争用。它回答的是：这个程序执行了哪些指令，以及按照什么顺序执行？

性能模型是周期精确（cycle-accurate）或周期近似（cycle-approximate）。它涵盖了流水线的深度和宽度（pipeline depth and width）、具有真实延迟的缓存层次结构（cache hierarchy with realistic latencies）、分支预测算法及表格大小（branch predictor algorithms and table sizes）、内存带宽与争用（memory bandwidth and contention）、功能单元延迟（functional-unit latencies）以及发射队列深度（issue-queue depths）。gem5 是典型的学术示例。它回答了一个互补的问题：在给定那条指令流（instruction stream）的情况下，所提出的该微架构（microarchitecture）能够以多快的速度处理它？

它们被分开是有原因的。性能模型 (performance model) 每周迭代数十个配置；如果每次运行都需要通过功能模拟器 (functional simulator) 启动操作系统，迭代循环就会崩溃。相反，功能模型 (functional model) 会生成轨迹 (traces)，由性能模型 (performance model) 对其重放。一次捕获，多次重放。

基于轨迹与基于执行的模拟

基于轨迹的模拟（trace-based simulation）速度快且可重复：相同的轨迹输入到不同的缓存配置中可以隔离某一参数的影响。代价是轨迹是对动态过程的静态快照，在一种微架构假设下捕获、在另一种假设下重放。真实的乱序处理器会对错误预测的路径进行推测执行，从而污染缓存；轨迹只记录已提交的路径，因此被建模的缓存看起来比真实情况更有效。自旋锁（spin-locks）、轮询循环和依赖 I/O 的代码会随时间改变迭代次数；轨迹将它们固定下来。多线程的交错依赖于相对执行速度；轨迹仅捕获一种交错方式。

基于执行的模拟（execution-driven simulation）弥补了这一差距。模拟器直接执行程序，维护体系结构状态，解析在途分支，并处理推测路径。指令流会根据被建模的微架构实时适配。代价是模拟更慢且实现更复杂。

对于在硅片上尚不存在的 ISA 扩展（新的向量指令、新的矩阵乘法、新的原子操作）上的工作负载，无法从现有硬件捕获轨迹。功能模型（functional model）成为唯一来源。这也是功能模型常作为编译器开发平台的原因之一：编译器团队可以在实际硅片出现之前很久就以其为目标进行开发。

PPA（性能、功耗、面积）

性能、功耗、面积。三者不可分割，而架构阶段是在成本最低时做出权衡的地方。

更宽的流水线换来 ILP，却付出功率-面积的代价：更多的保留站（reservation stations）、更多的重命名逻辑、更复杂的旁路网络。ILP 的墙壁限制了这种增益。
更大的缓存提升命中率，但增加硅片面积：在现代核心上，缓存主导了芯片面积。
专用单元（矩阵引擎、视频编解码器、加密模块）可以以 10–100× 加速某一工作负载，但代价是通用性下降以及构建它所需的硅片面积。

架构师会做参数扫描（sweeps）。“如果 load queue 是 48 条而不是 32 条会怎样？”在性能模型里是一个下午的工作，而在 RTL、验证和时序上会成为数周的改动。只有当在性能、每面积性能（perf-per-area）或每瓦性能（perf-per-watt）上明显获胜时，才会提交到规格。模型是你思考和试验的地方；RTL 是你承诺的地方。

微架构（Microarchitecture）

微架构阶段决定如何去实现它。微架构师逐块地消化架构契约（architecture contract），并为每块生成一个微架构规范：一个结构蓝图，详细到逻辑设计师可以仅凭此编写 RTL 而无需猜测。

在某一模块内部，该规范记录流水线（阶段数、每个阶段的功能、转发与旁路路径、停顿和清洗条件）、结构资源（队列深度、寄存器文件端口、SRAM 端口、功能单元数量）、控制（用于仲裁、调度、缓存一致性、总线协议的状态机，带有 ROB 和保留站的乱序机制）以及与邻近模块的接口（信号清单、valid/ready 握手、顺序规则、错误语义）。

每一条信号、每一个队列深度、每一条优先级规则都有名称。规范中任何未明确之处都会成为逻辑设计师必须回答的问题。

迭代（ITERATION）

微架构在性能模型中进行迭代。在编程语言中改变流水线阶段只需数小时；等价的 RTL 改动需要数日，验证更新需要数周，时序影响可能需要重新布局布线。经济性迫使微架构师在模型中探索，并且只有在有可辩护的答案时才去承诺。

被迭代的内容包括：

- 流水线深度和宽度。更深可以换频率，但在分支预测误判惩罚上付出代价；更宽可以换 IPC，但付出重命名、调度和旁路网络的成本。
- 缓存大小和相连性（associativity）。更大可以减少容量未命中；更高的相连性减少冲突未命中；两者都增加面积和访问延迟。
- 队列深度。ROB、load queue、store queue、miss queue。用利特尔定律确定容量：所需条目数 ≥ 吞吐量 × 停顿持续时间。
- 分支预测器拓扑。局部历史、全局历史、TAGE 表大小；在整数 SPEC 上约 1% 的准确率提升，就是可测量的 PPA 收益。
- 互连拓扑。网格（mesh）与环（ring）与交叉开关（crossbar）；对半切带宽（bisection bandwidth）与延迟与面积的权衡。

每一次扫描都会产出团队可辩护的数值。

交互（THE INTERACTIONS）

微架构师位于架构师与逻辑设计师之间，而与双方的交互是项目中最艰难的讨论所在。

Architect / Microarchitect（架构师 / 微架构师）。架构师在规格中定义了一个带有严格顺序保证的新原子扩展。微架构师确定这对 load-store 单元、缓存控制器和一致性协议的影响，并提出反对：“该顺序保证要求在每次原子操作时清空流水线；在工作负载 X 上这意味着 8% 的 IPC 损失。”双方反复迭代，直到规格放宽、实现找到更便宜的路径，或成本被判定为可接受。

Microarchitect / Logic Designer（微架构师 / 逻辑设计师）。微架构师指定了一个 64 条目的 load queue，并要求单周期的 store-to-load 转发。逻辑设计师发现，从一个 32 条目 store queue 做单周期转发会形成一个 27 级的组合路径，导致目标时钟周期被拖慢 200 ps。双方开始迭代：对转发做流水线化（多一个周期）、从 store queue 中减少少量条目、重构优先编码器，或改变芯片平面布局以缩短路径。反馈在双方流动，当边界是可渗透的时，最好的设计会出现。

最常见的微架构失效模式是规范里的歧义。未指明的角落案例会在实现过程中被发现，通常是在规范签发后数周或数月。

RTL（寄存器传输级）

Register-transfer level 是将计算描述为在寄存器之间传输数据加上转换这些数据的组合逻辑的抽象。同步数字电路由两类元件组成：寄存器（触发器，保存状态，在时钟边沿更新）和组合逻辑（门、复用器、加法器、比较器：输入的无状态布尔函数）。时钟是通用的时间参考：每一次状态变化都发生在时钟边沿，每两个寄存器之间的组合路径必须在一个时钟周期内稳定。

RTL 阶段将微架构翻译为可综合的 Verilog 或 SystemVerilog。

系统 / 算法
框图, SystemC, C++ 性能模型
行为级 (Behavioural)
无时序函数, HLS 源
寄存器传输级 (RTL (Register-Transfer Level))
SystemVerilog, 周期精确
门级
标准单元网表 (standard-cell netlist)
晶体管级
NMOS / PMOS 网络
版图 (Layout)
多边形, GDSII
硅
已制造的晶圆
人 ↕
工具 ↓
结构性决策
确定性变换

寄存器传输级 (RTL) 是设计本身从人工编写转变为由工具生成的分界点。在 RTL 以下，工程师指导生成下一层表示的工具：合成 (synthesis)、物理设计 (physical-design) 和时序 (timing) 工程师编写工具要针对其优化的约束（时钟周期 (clock period)、假路径 (false paths)、平面规划边界 (floorplan boundaries)、功率预算 (power budget)），并对输出反复迭代，直到签核 (signoff) 通过。

空间性，而非顺序性

芯片设计中最难的思维转变是：HDL（硬件描述语言）不是一种编程语言。软件程序描述随时间发生的顺序操作；而 HDL 描述的是存在于空间中的结构。每一个 always block、每一个 assign、每一个 module instance 都在每个时钟周期并行运行。寄存器文件的读出与算术逻辑单元（ALU）的计算并发，缓存的标签检查并发，分支预测器的更新也并发，所有这些都在同一个周期内发生。

SystemVerilog 的每一行都描述了某个物理存在的东西。An assign 是一根线。An always_ff 是一组触发器（flip-flops）。一个子模块实例化会把该电路的一个拷贝放到设计中。\`if (sel) y = a; else y = b;\` 不是程序中的分支；它是物理存在的多路复用器，无论条件是否为真。资源冲突必须由设计者解决：如果两个操作在同一周期都需要乘法器，你就需要两个乘法器、一个仲裁器，或引入停顿（stall）。

状态爆炸是结构上的代价。一个含有 1,000 个触发器的模块有 2¹⁰⁰⁰ 种可能状态，比可观测宇宙中的原子还多。缺陷隐藏在那些穷举仿真无法覆盖的晦涩组合中。项目其余部分（特别是验证）就是如何覆盖足够多的状态空间以达成信心的纪律和实践。

设计者决定的事项，工具决定的事项

RTL 的每一行都是工具无法推断的结构性决策。设计者固定逐周期的行为（微架构可能只会说“缓存以 3-cycle latency 返回数据”；而 RTL 则明确地在第 1 个周期做 tag-compare、第 2 个周期读 data-array、第 3 个周期做对齐和驱动）、流水线形状（深度、转发、停顿、刷新）、精确位宽（32-bit 加法器在结构上不同于 64-bit 加法器）、协议时序（valid/ready 握手逐周期指定）、复位行为（每个寄存器在复位时取何值）以及资源数量（设计中包含多少个加法器、SRAM 端口、寄存器文件端口）。

工具补充的内容包括：哪种标准单元实现每个操作（synthesis 会根据路径的时序裕量决定 ripple-carry vs carry-lookahead vs carry-select）、每个单元的大小（驱动能力、阈电压风格）、每个单元在芯片上的位置（placement）、连线如何在它们之间路由，以及设计者被允许视为理想的所有模拟效应（串扰（crosstalk）、IR drop、电迁移（electromigration）、亚稳态（metastability））。

有限状态机

几乎芯片中的每一个模块都是 datapath 与 FSM 的组合。datapath 做计算；FSM 决定做什么。在物理层面，FSM 是状态寄存器（flip-flops）加上计算下一个状态和输出的组合逻辑。

真实的芯片中到处运行着 FSM：缓存控制器（MESI / MOESI 状态转换）、总线协议控制器（AXI 的五个通道，每个通道都有自己的 VALID/READY 握手，每个通道 15–40 个状态）、仲裁器（循环轮转优先级）、UART / SPI / I²C、DMA 引擎（descriptor fetch → source read → dest write → wait completion）、DRAM 控制器（ACTIVATE → READ/WRITE → PRECHARGE → REFRESH，强制执行 tRCD / tRP / tRFC）、PCIe LTSSM（商业上最复杂的 FSM 之一，大约有 ~30–50 个子状态）、USB 链路层（50–100+ 状态）、DVFS / C-state 控制器按正确顺序对电压和频率排序。

教材中的 FSM 通常有 4–8 个状态。真实的 FSM 有 20–200+ 个状态，条件性转移基于复杂的布尔表达式，有超时、错误恢复和远超“顺利路径”的角落情况。

示例

一小段真实的寄存器传输级 (RTL)：位于简单中央处理器 (CPU) 核心的整数算术逻辑单元 (ALU)。组合逻辑 (combinational)、单周期 (single-cycle)：结果 (result) 和状态标志 (status flags) 在操作数 (operands) 有效的同一周期内稳定。对结果使用一个基于操作选择 (operation select) 的组合始终块 (always_comb) 多路复用器 (mux)，对标志线 (flag wires) 使用两个赋值语句 (assigns)。

module alu (
    input  logic [31:0] a,            // rs1 value
    input  logic [31:0] b,            // rs2 value
    input  logic [2:0]  op,           // operation select
    output logic [31:0] y,            // result
    output logic        zero,         // y == 0
    output logic        neg           // y[31] (signed-negative)
);
    localparam logic [2:0]
        OP_ADD = 3'd0,
        OP_SUB = 3'd1,
        OP_AND = 3'd2,
        OP_OR  = 3'd3,
        OP_XOR = 3'd4,
        OP_SLT = 3'd5;

always_comb begin
        unique case (op)
            OP_ADD:  y = a + b;
            OP_SUB:  y = a - b;
            OP_AND:  y = a & b;
            OP_OR:   y = a | b;
            OP_XOR:  y = a ^ b;
            OP_SLT:  y = {31'b0, $signed(a) < $signed(b)};
            default: y = '0;
        endcase
    end

assign zero = (y == 32'b0);
    assign neg  = y[31];
endmodule

大约 25 行描述着一个物理存在的结构：一个加法器、一个减法器、三个按位单元、一个比较器、一个 6-to-1 的结果多路复用器，以及两条组合逻辑的标志线。从这里开始，synthesis 会根据路径的裕量决定加法器采用 ripple-carry 还是 carry-lookahead 还是 carry-select，选择单元大小以满足驱动能力，并把这些东西打包成几百个标准单元。即便是这个二十五行的模块也有 2⁶⁷ 种可能的输入组合；穷举仿真已经不可行。

综合契约

RTL 是数字设计的单一事实来源。所有下游内容都从它派生。仿真以软件模型的形式逐周期运行 RTL；验证使用仿真（以及形式证明）来证明 RTL 在功能上是正确的。综合将 RTL 转换为门级网表；LEC 证明它们在功能上等价。物理设计采用网表并生成版图；LVS 证明它们相匹配。Emulation 和 FPGA 原型将 RTL 映射到可重构硬件。硅前软件的启动（pre-silicon software bring-up）直接在 RTL 上运行。

该链（寄存器传输级 (RTL) → 综合 (synthesis) → 门级 (gates) → 布局布线 (place-and-route) → 版图 (layout) → 掩模 (masks) → 硅片 (silicon)）在每个步骤都要进行验证。寄存器传输级 (RTL) 中的缺陷会传播到每个层级。一个晚期的寄存器传输级 (RTL) 缺陷就是要重新流片 (re-spin)。

设计验证

验证在典型芯片项目中消耗 60–70% 的工程工作量，是预算中最大的一项。原因是结构性的，分三点。硬件是高度并发的：每个信号每个周期都在运行，因此错误来自于顺序直觉无法预见的交互。状态空间是不可穷尽的：一个 32-bit 寄存器有 2³² 个状态；一个有数百个触发器的设计，其状态数比宇宙中的原子还多。并且硅无法打补丁：每一次功能逃逸都会变成金属层 ECO（一版改动）、微码变通，或者完整的重新流片（数月的延误和数百万美元的成本）。

问题不在于可证明性；而在于覆盖率。你无法穷尽地模拟每一个状态，因此信心来自对空间中一小片经过精心选择的子集的智能覆盖，这个覆盖以从规格书编写的验证计划为锚。

UVM 验证方法学

主流的测试平台方法学是 UVM：由 Accellera 标准化的 SystemVerilog 类库。UVM 将测试平台架构编码成一小套可复用的基类，使得工程师在不同项目间切换时无需重新学习测试平台的结构。

UVM 环境 (UVM environment)
序列 (Sequence)
序列器 (Sequencer)
驱动 (Driver)
被测设备 (DUT)
(你的 RTL)
监视器 (Monitor)
参考模型 (Reference Model)
计分板 (Scoreboard)
覆盖率收集器 (Coverage Collectors, covergroups, assertions)
驱动 (drive)
观察 (observe)
实际 (actual)
期望 (expected)

Sequence 定义了要发送的事务以及发送顺序。Sequencer 协调数据流，从 sequence 中拉取条目并将其提供给 driver。Driver 将抽象事务转换为遵循协议时序的引脚级信号。Monitor 被动地观察接口，从引脚活动重构事务并广播它们。Scoreboard 从输入和输出 monitor 接收事务，运行参考模型，并比较 expected 与 actual。Coverage collectors 测量规格中实际被触及的部分有多少。

在测试平台周围，代理 (agent) 将一个接口的驱动器 (driver)、监视器 (monitor) 和序列器 (sequencer) 捆绑在一起；仿真环境 (environment) 将所有代理 (agent)、计分板 (scoreboard) 和覆盖收集器 (coverage collector) 捆绑在一起；顶层的测试 (test) 配置仿真环境 (environment) 并选择要运行的序列 (sequences)。

CONSTRAINED RANDOM + COVERAGE

定向测试无法扩展。在一个状态空间超过宇宙原子数的芯片中，你不可能为每种场景写一条测试。相反，验证工程师用约束来描述合法输入空间，并让求解器生成数千个随机但合法的输入。

\`\`\`systemverilog
// 1. The sequence-item: the space of legal stimulus
class cpu_instr extends uvm_sequence_item;
    \`uvm_object_utils(cpu_instr)

    typedef enum {ADD, SUB, MUL, LD, ST, BR, JMP} opcode_e;

    rand opcode_e   op;
    rand bit [4:0]  rs1, rs2, rd;     // 5-bit register-file indices
    rand bit [31:0] addr;            

    // Realistic instruction mix
    constraint c_mix  { op dist { ADD := 30, SUB := 15, MUL := 10,
                                  LD  := 20, ST  := 15,
                                  BR  :=  7, JMP :=  3 }; }

    // LD/ST: word-aligned address inside the mapped region
    constraint c_addr { (op inside {LD, ST}) ->
                            addr[1:0] == 2'b00 &&
                            addr inside {[32'h0000_1000:32'h7FFF_FFFC]}; }

    function new(string name = "cpu_instr");
        super.new(name);
    endfunction
endclass

// 2. The sequence: ten thousand legal instructions, handed to the driver
class cpu_seq extends uvm_sequence #(cpu_instr);
    \`uvm_object_utils(cpu_seq)

    function new(string name = "cpu_seq");
        super.new(name);
    endfunction

    task body();
        cpu_instr instr;
        repeat (10_000) begin;
            instr = cpu_instr::type_id::create("instr");
            start_item(instr);                 // request a slot on the sequencer
            assert(instr.randomize());         // solver picks op, regs, addr
            finish_item(instr);                // hand off to driver via TLM
        end
    endtask
endclass
\`\`\`

sequence-item 声明了随机字段以及它们必须满足的约束；sequence 包装了生成循环。在 body() 内，每次迭代通过 factory 创建一个新条目，使用 start_item 向 sequencer 请求一个槽位，调用 randomize()（求解器一次性为 op、rs1、rs2、rd、addr 选取合法值），然后通过 finish_item 将条目移交给 driver。Driver 在被 seq_item_port.get_next_item() 阻塞时会醒来，将条目转换为 DUT 接口上的引脚级活动，并在完成后发出信号。分层约束（用于“始终合法”的基类约束、以及用于“本次测试收窄范围”的内联约束）使得同一个 item 类可以服务于数十种场景而无需代码重复。

覆盖率回答了唯一重要的问题：我测试得够多吗？

代码覆盖是结构化的：行覆盖、切换（toggle）、分支、条件、FSM。必要但不充分：100% 的代码覆盖而没有断言检查是找不出错误的。
功能覆盖是由规格驱动的：covergroups 用来计数验证计划中列出的每个功能、边角情况和组合是否被实际触及。
断言覆盖：cover property 跟踪特定的时序序列是否触发。

用于 cpu_instr 流的功能覆盖收集器，编写为 UVM 订阅者 (uvm_subscriber)，以便监视器通过分析端口 (analysis port) 将其传递：

\`\`\`systemverilog
class cpu_cov extends uvm_subscriber #(cpu_instr);
    \`uvm_component_utils(cpu_cov)

    covergroup cg with function sample(cpu_instr instr);

        // 1. Did every opcode actually show up?
        opcodes: coverpoint instr.op; // auto-bin per enum value
\`\`\`

\`\`\`
// 2. Did we exercise the register-file corners?
dest_reg: coverpoint instr.rd {
    bins zero = {0};        
    bins low  = {[1:7]};
    bins mid  = {[8:23]};
    bins high = {[24:31]};
}

// 3. Address-region coverage, but only for memory ops
addr_region: coverpoint instr.addr iff (instr.op inside {LD, ST}) {
    bins page0  = {[32'h0000_1000 : 32'h0000_1FFF]};
    bins low_mb = {[32'h0000_2000 : 32'h000F_FFFF]};
    bins mid_mb = {[32'h0010_0000 : 32'h00FF_FFFF]};
    bins rest   = default;
}

// 4. Cross: which opcode x destination-register combinations fired?
op_x_rd: cross opcodes, dest_reg;
endgroup

function new(string name, uvm_component parent);
    super.new(name, parent);
    cg = new(); // covergroups must be constructed
endfunction

// Invoked once per instruction the monitor observes on the bus
function void write(cpu_instr t);
    cg.sample(t);
endfunction
endclass
\`\`\`

这四个 coverpoint（覆盖点）一同捕捉了关于激励（stimulus）重要的方面，而不是激励实际做了什么。

回归结束后，工具会按每个 bin 和每个 cross 组合报告覆盖百分比。出现 opcode 的空洞（整晚都没生成任何 JMP）、addr_region 的缺口（从未抽样到 mid_mb），或 op_x_rd 单元稀疏（MUL 从未写入 r0），就是验证工程师接下来要看的问题：收紧或放宽约束、添加定向测试，或者如果某个 bin 确实按设计无法到达就把它标记为 ignore_bins。

覆盖驱动的验证循环：从规范写出 vplan，构建 UVM testbench，使用成千上万的随机种子运行回归，合并覆盖率，分析空洞，针对缺口编写新的约束或定向测试，重复迭代。覆盖空洞通常揭示三类问题：(a) 约束过紧，无法产生场景；(b) 刺激缺失；或 (c) 无法到达的代码。

断言与形式验证

上文的 UVM testbench 驱动激励并检查端到端结果。但许多错误是协议违规，会在单个时钟沿上触发：例如 VALID 提前一个周期下降，或在握手过程中有效载荷字段发生翻转。SystemVerilog Assertions 将这类检查嵌入设计中，在每个周期持续评估，一旦契约被破坏就会立即明显失败。下面是一个针对 AXI4 写地址通道的小型检查器：

\`\`\`verilog
interface axi_aw_checker (
    input  logic        clk,
    input  logic        rst_n,
    input  logic        awvalid,
    input  logic        awready,
    input  logic [31:0] awaddr,
    input  logic [7:0]  awlen,
    input  logic [2:0]  awsize
);
    default clocking cb @(posedge clk); endclocking
    default disable iff (!rst_n);

    // Valid must never be asserted during reset
    aw_reset_low: assert property (!rst_n |-> !awvalid)
        else $error("AWVALID asserted during reset");

    // Once Valid rises, it must stay high until Ready accepts
    aw_valid_stable: assert property (
        awvalid && !awready |=> awvalid
    ) else $error("AWVALID dropped before handshake");

    // While the handshake is pending, the payload must not change
    aw_payload_stable: assert property (
        awvalid && !awready |=>
            $stable(awaddr) && $stable(awlen) && $stable(awsize)
    ) else $error("AW payload changed mid-handshake @ %h", awaddr);

    // Coverage: did we ever observe a back-to-back accepted burst?
    aw_back_to_back: cover property (
        (awvalid && awready) ##1 (awvalid && awready)
    );
endinterface
\`\`\`

两个蕴含操作符（|-> 表示重叠／overlapping，|=> 表示非重叠／non-overlapping）和 \`$stable\`（当信号在前后两个周期间未改变时为真）构成了大多数协议检查所需的少量时序习语。每个命名的 \`assert property\` 在触发时都会产生清晰的模拟器报文；并行的 \`cover property\` 则将覆盖信息送入与 \`covergroups\` 相同的覆盖池，记录背靠背场景是否被实际执行。整个接口只需绑定到总线一次，因此相同的属性既可在仿真中不变地运行，也可在形式工具下运行。

形式验证用数学证明替代仿真。形式工具穷尽地探索模块的每个可达状态，以证明某条断言永不会被违反，或找到反例。其力量在于对被证明属性的穷尽覆盖；局限在于状态空间爆炸。形式验证对小型、以控制为主的模块有效：仲裁器、FIFO 控制器、协议引擎、CDC 逻辑以及安全路径。但对完整的处理器内核来说不可行。

综合使用时，情形是：仿真负责广度（成千上万的测试、快速调试、对整个设计空间的覆盖）；形式验证负责深度（在可处理模块上对特定属性进行穷尽证明）；断言负责捕捉那些隐藏的协议违规。

验证工程师

现代的回归测试是在数千个 CPU 核心上每夜运行数万条测试，并将覆盖率在整个集群中合并。验证工程师的职责是保持偏执式怀疑；他们的失败模式是遗漏一个角落用例；成功衡量标准则是在 bring-up 实验室里毫无报错。

仿真、仿真（Emulation）、FPGA 原型

同一份 RTL 在项目期间会以三种速度被执行。每个层级都有其它层级无法替代的定位。

软件仿真负责模块级开发与设计验证。模拟器运行数千条测试，提供完整的调试可见性（每个信号在每个周期的前向和后向状态）。这是每天每个工程师桌面上运行的工作。行业标准的模拟器有 Synopsys VCS、Cadence Xcelium 和 Siemens Questa，开源的 Verilator 在基于周期的、可综合 RTL 仿真中是最快的选择。大约 65% 的设计缺陷在这里被捕获，而模拟器的速度常常成为限制因素。

使这种可见性可用的视图是波形：设计中每个信号随时间绘出，可向前向后导航，光标标记工程师正在检查的周期。Synopsys Verdi 是行业标准的查看器；Cadence SimVision 和开源 GTKWave 是替代选项。单次内存请求事务的典型视图：

0
1
2
3
4
5
6
7
8
9
clk
rst_n
req
addr[31:0]
state
0x0000_0100
RESET
IDLE
REQ
BUSY
DONE
IDLE
cursor: cycle 5

调试是一门在关键的单个周期内找到唯一错误信号的学问。大多数 RTL 工程师的时间都花在盯着像这样的视图上。

仿真 (Emulation) 负责系统级工作负载：启动 Linux、运行 SPEC 跟踪、进行机器学习推理、数十亿个周期。这些工作需要的墙钟时间超过软件仿真所能提供的。寄存器传输级 (RTL) 被映射到运行在 1–10 MHz 的专用硬件上：Cadence Palladium 使用大量定制布尔处理器 (custom boolean processors) (Cadence's ISA on 16 nm silicon, with Z3 leveraging NVIDIA BlueField DPUs to handle designs up to 48 billion gates)；Synopsys ZeBu 使用商用 Xilinx FPGAs；Siemens Veloce 使用专为仿真设计的定制可重构芯片。规模如机房、机架式部署、每架数百万美元，供跨团队共享。比仿真快得多；但编译时间长，且调试可见性有限。

FPGA 原型负责软件启动（software bring-up）：固件团队在芯片实际存在之前就在芯片上启动操作系统。这类工作需要接近本机速度并与真实外部硬件交互。Synopsys HAPS、Cadence Protium 和 Siemens Veloce Primo 将设计映射到以数十 MHz 运行的商用 FPGA 板上，速度足以与真实内存、网络和显示设备对接。代价是可见性受限（限于外部接口，就像真实芯片一样）以及更手工的映射流程；设计可能需要修改以适应可用的 FPGA。

工具	Speed (Hz of simulated clock)	容量	调试可见性	资本成本
软件仿真	1 Hz – low tens of Hz full-chip; kHz block-level	任何规模；运行在 CPU 服务器集群上	完整：每个信号、每个周期，前向和后向	商用服务器
Emulation	1–10 MHz	数十亿门级	信号必须预先选择以供跟踪	每架数百万美元
FPGA 原型	tens of MHz	受 FPGA 容量限制；设计可能需要分区	像真实芯片；仅限外部接口	每块板 100K – 1M

团队会同时使用这三种方法。这个进程对应到项目上的各个阶段：在仿真中进行模块级 RTL 开发，在仿真器上进行系统级集成，在 FPGA 原型上进行软件启动。

性能

性能工作贯穿整个项目。它沿两条轴分裂：吞吐量（一个工作负载需要多少个周期？）和频率（设计能否达到目标时钟？）。总性能是 frequency × (1/cycles)。一个时钟表现非常好但比模型多 30% 停顿的设计，与一个达到了 IPC 但无法闭合时序的设计同样是有问题的。

关联验证循环

性能模型和 RTL 都对相同的工作负载进行度量。两者都用相同的性能计数器进行了插装：l2_miss_demand_load, rob_full_stall_cycles, branch_mispredict_at_retire, queue occupancy, arbitration outcomes。名字相同、定义相同、触发条件相同。周期计数上的不一致告诉你模型和 RTL 在周期层面不同步；计数器上的不一致告诉你原因。RTL 中两倍的 L2 miss 指向预取器（prefetcher）分歧。IPC 降低但计数器没有变化指向性能模型所抽象掉的一个停顿。

该循环，持续运行：

性能模型预测某个工作负载的周期数和计数器数值。  
同一工作负载通过仿真或仿真器在 RTL 上运行。  
对比计数器数值和周期计数。  
调试任何差距。要么模型遗漏了一个真实效应（模型缺陷），要么 RTL 出现了架构师未预期的停顿（RTL 性能缺陷）。两者都要修正；问题总是“哪一方错了”。

团队会按工作负载跟踪周期差异，目标类似于“在每个关键工作负载上保持在 3% 以内”。高于阈值的偏离被视为停线问题：基于模型的每一个下游实验现在都值得怀疑。

相同的计数器常常成为硅硬件的性能监控计数器（Intel's PMC、ARM's PMU、每个现代加速器上的每块模块遥测），将 C++ 模型、RTL 与真实硬件之间的循环闭合。一旦硅片回来，模型会与硅进行关联，任何系统性差距都会影响下一项目的建模方法论。

为何关联验证重要

一个未关联的性能模型是一个假设，而不是度量。模型中的每一个抽象都有可能是谎言：也许内存控制器被建模为固定延迟队列而非真实的调度器；也许假设 store-to-load forwarding 是完美的；也许忽略了一个 3 周期的时钟域跨越。失败模式是微妙的：模型会乐于生成看起来很精确的数字，例如“特性 X 在工作负载 Y 上带来 4.2% 的 IPC 提升”，但如果模型在争用下对内存子系统系统性地错误，那么那 4.2% 在现实中可能是 0% 或 -2%。

缓慢但准确的真实基线（RTL、仿真器、最终的硅片）使得快速、近似的模型保持诚实。移除真实基线，快速模型就会漂移成虚构。在任何具有相同形态的工程领域中，这一模式（用于思考的快速模型，用于校准的缓慢真实基准）都是通用的。

时序驱动的性能

性能工作的另一半是频率。综合和静态时序分析共同报告临界路径：两个触发器之间最慢的组合逻辑路径，这些路径限制了可达成的时钟频率。工程师盯着时序报告，查看在特定端点上的负时延（negative slack）。

对于每条失败的路径：跟踪发生了什么，计算逻辑层数，识别门、线负载、模块边界，区分是 setup 还是 hold。Synopsys PrimeTime 和 Cadence Tempus 提供详细的路径分解。常见的 RTL 级修复包括：流水线化（增加一个阶段以打断长路径）、重定时（在触发器边界间移动逻辑以平衡延迟）、表达式重构（将优先多路复用改为并行、平衡加法器树、用前缀进位（carry-lookahead）替换串行进位）、预计算（在管线中更早有更多裕量的位置计算条件）、逻辑复制（切断关键网络的扇出）。

团队按模块跟踪 WNS (worst negative slack) and TNS (total negative slack)，每天运行综合并上报仪表盘。每个失败模块都有负责人。随着流片（tapeout）临近，关注点会收窄；签核前的最后几周通常被少数顽固路径的时序闭合工作主导。

性能架构师、寄存器传输级（RTL）设计师、综合工程师和时序工程师共同协作。最困难的路径需要跨学科的修复，而不是纯粹的 RTL 修正：有时正确的答案是修改 floorplan（平面规划）以缩短线路，有时则是架构上的退让（增加一个流水级以牺牲一个周期的延迟）。

综合

Synthesis 将 RTL 转换为门级网表：来自代工厂标准单元库的具体逻辑单元，互相连线以实现与 RTL 相同的功能。主流工具是 Synopsys Design Compiler（典型示例，由 Aart de Geus 在 1980 年代末推向市场，并成为 RTL 革命的引擎）和 Cadence Genus。

该转换分为若干阶段。解析负责读取 RTL。与工艺无关的优化做布尔简化、常量传播、死代码消除：这些是软件编译器所做的相同类型的优化，但应用于组合逻辑锥而不是指令流。工艺映射（technology mapping）将优化后的布尔逻辑绑定到代工库中的具体标准单元；例如 \`assign y = (a & b) | (~a & c)\` 可能被映射为四个特定的 NAND / 反相器单元连在一起，按速度、面积和功耗的综合权衡选择。与工艺相关的优化调整门的大小（对于扇出大的网络使用更高驱动强度）、插入缓冲（长线需要放大）、替换单元变体（低阈值电压用于速度，高阈值电压用于泄漏）并在寄存器边界间应用重计时以平衡流水线级。

一个现代 SoC 的门级网表包含数亿到数十亿个单元实例。没有人会直接对其进行人工推理。等价性由逻辑等价性检查（Synopsys Formality 和 Cadence Conformal）以数学方式证明。LEC 正式证明二者对每个输入在功能上是相同的；如果无法证明等价，则该次综合运行会被拒绝并在不同约束下重新尝试。

综合工程师的工具就是约束。时钟周期、输入/输出延迟、假路径、多周期路径、最大扇出、允许的单元类型、面积预算、泄漏预算。约束构成了一整门语言（SDC），大多数综合问题都是约束问题：错误的约束要么在牺牲其他区域的情况下对某一部分过度优化，要么未能标记需要关注的一条路径。

设计人员在 RTL 开发期间增量运行综合，以便及早获得时序、面积和功耗的反馈。如果某一路径需要 2 ns 而时钟周期是 1 ns，则需要在错误积累之前进行逻辑重构。项目后期，最终的物理综合会使用真实的 floorplan 信息来估算线负载，从而缩小综合时的预测与布线后实际情况之间的差距。

物理设计

物理设计将门级网表转换为版图（layout）：代工厂将要制造的芯片上单元和连线的实际几何排列。输出是 GDSII（或其后继者 OASIS），即代工厂使用的版图数据库。它是流程中最深的流水线，也是最依赖数值优化的部分。

平面规划

对芯片进行高层次的版图划分。哪个 CPU 核放在哪里、缓存放在哪里、内存控制器连接在哪里、I/O 焊盘落在哪里、互连环在哪里。floorplan 大多是手工完成且至关重要：它决定了邻近性、通信局部性、热分布以及时钟树的可分发性。糟糕的 floorplan 会使下游的时序收敛变得不可能。floorplan 还定义电源网络：沿芯片分布供电的宽金属条，其尺寸需保证在不过大的 IR 掉电下提供电流。

布局

为所有标准单元分配物理位置，可能多达数亿个单元。优化目标包括总线长、单元密度和时序关键的邻近性。该优化问题规模巨大；运行需要数小时到数天。时序驱动的布局会对关键路径上的单元加权，使它们最终足够靠近以满足时钟周期。

时钟树综合

时钟必须在芯片上到达每个触发器并且到达时间非常接近。偏差（即所有触发器到达时间的变化）被控制在几十皮秒级别。CTS 构建一个平衡的分发树，在精心选择的节点处插入缓冲，以使从源到每个端点的路径长度大致相等。一个现代的时钟树包含数十万个缓冲器，并自身消耗显著的芯片功耗。

布线

用实际的金属线在十层或更多金属层之间连接每一个信号。较低层（M1–M3）承载单元内部和单元间的本地连接；中间层（M4–M16）承载块到块的连线；上层（M17+）承载全局信号和电源分配总线。路由必须遵守代工厂的设计规则：最小宽度、最小间距、层覆盖、密度。路由器先规划近似的全局路径，然后在详细布线阶段分配精确的轨道和通孔（vias）。

时序收敛

项目中最艰难的几周。每条从一个触发器经组合逻辑到下一个触发器的信号路径都必须在一个时钟周期内完成。时序依赖于寄生参数（每一段线的电阻和电容），寄生参数依赖于路由，路由依赖于布局，布局又依赖于时序优化。这是一个循环依赖。工具会迭代：放置 → 估算延迟 → 优化 → 路由 → 提取寄生参数 → 检查时序 → 调整 → 重新布线 → 重新检查。该循环可能需要数周才能收敛。

可用杠杆有：替换单元（更高驱动强度的变体）、晶体管尺寸调整、插入缓冲、逻辑重构、布局调整，以及（在无他法时）增加 RTL 的流水级并重新验证。后者是昂贵的杠杆。项目越接近流片（tapeout），任何 RTL 变更就越痛苦。

签核

在版图送到代工厂之前，会触发一系列检查。DRC（设计规则检查 (design rule checking)）验证版图在数百万条规则和数十亿次多边形检查下是否遵守每一条代工厂规则。LVS（版图对照原理图 (layout versus schematic)）确认版图实现了预期的网表：从多边形中提取出的拓扑必须与门级网表相匹配。ERC（电气规则检查 (electrical rule check)）会标记浮动栅、短接电源、缺失井连接、天线效应。Signoff STA（签核静态时序分析 (static timing analysis)）在多个 PVT 转角（工艺、供电电压、温度 (process, voltage, temperature)）上，使用详细提取的寄生参数运行静态时序分析。功耗分析检查功耗预算；IR-drop 分析检查电源网；信号完整性分析检查串扰。

DRC、LVS 和 ERC 被称为物理验证；Signoff STA 是时序验证。

当所有检查都通过后，项目就流片（tape-out）。GDSII 文件送到代工厂。团队松一口气。然后又要等待数月，等待首片硅（first silicon）。

晶圆代工与制造

GDSII 到达代工厂后，化学反应接管下一切。制造流水线最容易理解的方式是一个去除无序（化学杂质、晶粒边界、表面粗糙）直到剩下尽可能接近人类能制造出的完美晶体的过程。

从沙到硅晶圆

硅是地壳中第二丰富的元素。供应不是限制；纯度才是。矿山开采的石英岩矿石含有 95–99% SiO₂；半导体级硅 (semiconductor-grade silicon) 需要 99.999999999% 的纯度：十一个“9”，“11N”，十亿分之一级别的杂质。

石英岩
95–99%
冶金级
硅
98–99%
三氯硅烷 (Trichloro-silane, TCS)
ppb (gas)
多晶硅 (Polysilicon)
9N – 11N
晶锭 (CZ Ingot)
单晶
300 mm 晶圆
原子级平整
~775 μm
埋弧
炉（碳）
SiO₂ + 2C → Si + 2CO
HCl 反应 +
分馏
Si + 3HCl → SiHCl₃ + H₂
Siemens 工艺 (Siemens process)
(slim-rod CVD)
SiHCl₃ + H₂ → Si + 3HCl
Czochralski 拔晶 (Czochralski pull)
1–2 mm/min
1,414 °C 熔融
切割、研磨
蚀刻、化学机械抛光 (CMP)
<0.1 nm RMS

冶金级硅。石英岩（quartzite）被送入浸没弧炉，与碳（煤、木炭、木屑）在 1,800–2,000 °C 下反应。碳把氧夺走：SiO₂ + 2C → Si + 2CO。熔融硅在底部汇聚并以 98–99% 的纯度取出。对于芯片来说，这仍然脏了数十亿倍。

三氯硅烷。要把固体纯化到 11 个九几乎不可能通过固态方法完成；而通过蒸馏纯化气体是化工行业的强项。冶金级硅被研磨并在 300 °C 下与 HCl 反应：Si + 3HCl → SiHCl₃ + H₂。硅被从难处理的固体转成可蒸馏的液体（三氯硅烷 TCS 的沸点为 31.8 °C）。金属氯化物杂质（FeCl₃、AlCl₃、BCl₃）具有不同的沸点，这也是此法可行的唯一原因。最难分离的杂质是三氯化硼（12.6 °C）和三氯化磷（76 °C）：硼和磷后来将作为掺杂剂进入硅晶格，所以即使是 ppb 级别也很重要，它们的沸点把 TCS 包夹在中间。需要许多道蒸馏步骤才能把纯度推到 ppb 级别。

多晶硅。TCS 被送入西门子反应器：一个钟罩式腔体，内部放着加热到 1,100 °C 的细硅棒。反应在热表面上反方向进行：SiHCl₃ + H₂ → Si + 3HCl。硅一个原子一个原子地沉积到棒上，使它们从铅笔粗细的起始体长成数天到数周的粗 U 形棒。结果是 9N 到 11N 纯度的多晶硅，但晶粒取向随机。每个晶粒内部是完美晶体；晶界处充满缺陷。这就是晶体生长的原料。

Czochralski 晶锭。芯片不能建造在多晶硅上：晶界会散射电子、产生复合中心，使电学行为不可预测。解决办法是生长单晶。多晶硅块被装入石英坩埚并在 1,414 °C 下熔化。一个完美单晶硅的小种晶（取向为 (100) 面，之所以选择该取向是因为氧化后它产生的表面态密度最低）被放入熔体中，然后以 1–2 mm/min 的速度缓慢向上拉出，同时旋转，坩埚反向旋转以实现均化。每个从熔体中凝固的原子都会锁定到现有晶格决定的取向。拉取过程持续数日；现代晶锭直径为 300 mm（12 英寸），长度 1–2 米，重量超过 100 kg。作为附带好处，液—固界面起到净化的作用：大多数杂质的分配系数低于 1，因此它们更倾向于留在液相而不是固相，每一层凝固的硅都比它生长时的熔体更纯净。

晶圆精整。晶锭在车床上研磨到精确直径，端部切除，磨出一个缺口以标记晶体方向，然后用金刚石磨丝锯切成薄盘，每个晶锭产生数百片晶圆，每片厚 800–900 μm。每片晶圆的两面表面都有 10–20 μm 深的锯切损伤，需要通过粗磨（研磨浆）、化学腐蚀（HF / HNO₃ / 乙酸）和 CMP（化学机械抛光）去除，CMP 是把晶圆面朝下压在旋转抛光垫上并用胶体二氧化硅浆料，在化学软化表面的同时机械去除表面。抛光后表面达到原子级平整，粗糙度低于 0.1 nm RMS（亚埃级）。只有正面按此标准精整；背面保持蚀刻状态。晶圆经过 RCA 清洗（使用 NH₄OH + H₂O₂ 去有机物，用稀 HF 去氧化层，使用 HCl + H₂O₂ 去金属），然后通常在上面生长一层外延层：在 1,000–1,150 °C 下用硅烷气体沉积的 2–20 μm 硅层，将晶圆的晶格延伸到无缺陷的表面区域。

晶圆制造商交出的，是一片 300 mm 的圆盘，厚约 ~775 μm，表面上单晶格横跨整片不间断，抛光面的粗糙度为亚埃级，掺杂浓度精确可控，且基本无表面污染。它被装入氮气环境的 FOUPs（前开式统一容器 (front-opening unified pods)）以防本征氧化层生长，晶圆到达晶圆厂时已准备好开始晶体管制造。

金属层堆栈

芯片自下而上逐层制造：先制造晶体管，然后是由 10–15 层金属构成的金属层栈。

p-衬底（硅）
n型井
p型井
PMOS 栅极
NMOS 栅极
M1
M2
M3 …
M8
M12
顶层金属
钝化层
焊盘
器件平面之上的 10+ 金属层
晶体管构建在硅表面
S
G
D
源
栅
漏
沟道
当 VGS > VT 时形成
栅氧化层 (~1–2 nm)
多晶硅栅
n+ 源
n+ 漏
电子流：源 → 漏
p 型衬底（体）
B
体

晶体管构建在硅表面。井（n 型井、p 型井）是深度掺杂区域，用以为每种晶体管类型定义基体衬底类型。源和漏是更小、更高掺杂的异性区域，由活性/扩散层和指定掺杂类型及剂量的注入层定义。它们之间夹着一条狭窄的未掺杂沟道。沿沟道横跨一条多晶硅条，这就是栅，与硅之间隔着非常薄的栅氧化层（几纳米）。栅上无电压时，不会流动电流。施加电压；电场吸引载流子进入沟道，形成导电通路。移除电压；沟道关闭。

金属层是连线。较低层（M1–M3）处理局部布线：单元内部及单元之间的短连接。中间层（M4–M16）处理半全局布线，连接功能模块（在此处微结构在版图上可见为楼层平面）。上层（M17+）处理全局布线、时钟树（必须到达芯片上每个触发器）以及将电流分配到各处的粗大电源总线。顶层金属之上是钝化层（保护覆盖层），在焊盘上开口，供离开晶粒的线接出。

映射。体系结构在微架构中实现，被综合为标准单元，放置到硅表面，并通过金属叠层一起布线。网表中的每一根线在金属叠层中都是一个多边形。

PDK 与 GDSII

代工厂与设计者的合同是 Process Design Kit（PDK）。它定义了：

设计规则：每一层的最小宽度、间距、包覆、密度要求（DRC 验证版图是否遵守它们）。
SPICE 模型：晶体管和无源器件的模型，以便设计者能仿真模拟和时序行为。
层定义：将抽象设计层映射到物理掩膜层（代工厂的掩膜映射）。
标准单元库：预先设计、预先表征、符合设计规则的基础逻辑门布局，具有已知的时序和功耗。
参数化单元（pcells）：布局生成器，根据设计者选择的参数生成符合设计规则的晶体管、电阻、电容多边形。
天线规则：限制在制造过程中在连接到栅之前可连接到栅的金属面积（在等离子刻蚀过程中过多的面积会积累电荷，损坏栅氧）。
ERC 和 LVS 运行集：驱动电气规则检查（ERC）和版图与原理图比对（LVS）的配置文件。

GDSII 文件是交付物。它包含版图中的每一个多边形，并用映射到代工掩模的层/数据类型对进行标记。该文件是一个单元树：单元包含多边形以及对其他单元的引用（带放置变换），因此一个标准单元定义一次后通过引用（而不是复制）被实例化数千次。PDK 定义了契约；GDSII 是必须遵守该契约的东西。代工厂在接受流片（tapeout）前，会对提交的 GDSII 运行其自己的 DRC 和 LVS。

晶圆制造

GDSII 变为一组光掩模：每个掩模层一个（或多个，使用多重图案化时）掩模，每个掩模是一块石英板，其上用铬刻画该层的多边形。晶圆在制造设备中循环，针对每个掩模层重复如下步骤：沉积（一层氧化物、氮化物、金属或多晶硅薄膜）、图形化（旋涂光刻胶，通过使用深紫外或 EUV 光刻通过掩模曝光，显影）、刻蚀（去除未被掩膜的材料）、去胶、注入（引入掺杂物）、退火、化学机械平坦化（CMP，使下一层开始时平整）、清洗。每片晶圆在数周内在此循环中往返数百次。现代先进工艺节点使用波长为 13.5 nm 的 EUV 光刻；旧节点使用波长为 193 nm 的深紫外并通过多重图案化将有效分辨率推低。

制造后，对晶圆上的每个芯片进行电学探测以标记良品和次品；晶圆被切割；良品芯片被封装；封装后的器件在更高电压和温度下测试以筛除早期失效率故障。然后出货。

良率，即晶圆上通过的芯片比例，是代工厂的经济轴心。单个颗粒落在错误的层上就可能毁掉一片芯片。整个装置的存在就是为了将颗粒、污染和工艺变异维持在使得在现代特征尺寸下制造仍有经济性的阈值之下。

启动与调试

第一批硅片回来。团队聚集在实验室。一块电路板通电。逻辑分析仪接上。有人尝试读取寄存器。

这就是首片调试（bring-up）：项目从可工作的 RTL 设计过渡到可工作的芯片。两方面并行进行：在硅片到来前数月就开始的硅前软件 bring-up，以及芯片到达当天开始的硅后验证。

硅前：软件面向模型开发

软件不能等到硅片。固件、驱动、操作系统、应用栈各自都代表数月开发；如果团队在芯片返回后才开始，产品会推迟一年。解决办法是尽早针对功能模型开始，只要体系结构规范稳定即可。因为功能模型忠实实现了 ISA，模拟设备寄存器，并处理内存映射 I/O，驱动可以像对待真实硬件那样与之交互。

软件堆栈各层，按它们带起系统的顺序：

固件：复位后运行的第一段代码。配置时钟 PLL、训练内存控制器、初始化电源调节器、设置互连。裸机：下面没有操作系统。示例：x86 的 BIOS/UEFI、嵌入式 SoC 的自定义引导加载器、手机上的引导 ROM。
引导加载程序：在固件之后加载操作系统。设置系统的足够部分（内存、存储、控制台）以找到并加载内核。示例：U-Boot、GRUB。
操作系统 / 内核：虚拟内存、调度、中断、驱动框架。对于新芯片，板级支持包或平台代码描述硬件的组织。
驱动程序：使各个硬件模块可用。每个模块（GPU、网卡、存储、显示、USB、加速器）都需要理解其特定寄存器接口、编程模型和行为的驱动程序。软件中与硬件耦合最紧密的部分。

针对功能模型 (functional model) 的 bring-up 会在两个方向发现错误：软件错误（不正确的寄存器序列、缺少初始化、数据未对齐），以及硬件规范错误（缺失中断、编程序列规范不足、在某些用例下无法工作的寄存器接口）。在 RTL 仍然可以修改的仿真阶段发现规范错误，比在硅片上发现要便宜得多。功能模型 (functional model) 是一个协同开发平台，而不只是一个性能工具。

随着 RTL 成熟，软件先迁移到仿真 (emulation)，然后到 FPGA 原型 (FPGA prototypes)。到硅片返回时，固件应该已经可以启动，内核应该已经可以运行，驱动应该已经可以工作，至少在模型上是这样。首片硅的 bring-up 首日（the first silicon bring-up day）是虚构遇上现实的时刻。

硅后（POST-SILICON）：首次启动（FIRST BOOT）

首片硅几乎从不会直接正常工作。出现的问题（那些仿真无法捕捉到的）大致落入几类。

模拟与电气效应。串扰、在重载电源轨上的 IR drop、长距离高速串行链路上的信号完整性问题、瞬态负载下的电压下降、热热点。仿真把线当成理想的；硅片不是。有些芯片只需要调整电压或降低频率。有些需要金属层 ECO (metal-layer ECO)：仅重做几层金属掩模（比完整重做便宜，~1M instead of ~10–50M）并重新制造。有些在硅片上无法修复，只能以固件变通方案出货。

大规模下的角落情况。只有在真实工作负载经过数十亿个周期后才会显现的错误：内存系统的病态、接近活锁的公平性问题 (livelock-adjacent fairness issues)、缓存一致性竞争 (cache-coherence races)、安全路径的相互作用。仿真/仿真平台能发现一部分；硅片会发现剩下的。这正是 bring-up 团队立功之处。

工艺差异。即使在同一晶圆上，不同的芯片（dies）表现也会略有不同。有些能达到目标频率；有些则不能。团队会基于测得的性能、功耗和良率来对芯片进行分档 (binning)，决定哪一批芯片进入哪个 SKU。

性能与硅片的相关性。性能模型会与实际测得的硅片进行相关性比对。任何系统性的差距都会为下一个项目的建模方法提供信息。硬件性能计数器（就是先前存在于 perf model 和 RTL 中的那些计数器）会亮起；整个项目期间跟踪的同一工作负载现在会最后一次在真实器件上测量。

当一切工作正常，当在芯片上启动一个新操作系统成为一天中最乏味的部分时，团队就会发货。然后他们开始下一个芯片的工作。
`,a1=`# How to Learn - Jacob Peake

**URL:** https://www.jacobpeake.com/how-to-learn

---

Home
Writing
How to Learn

Learning is compression of high-dimensional information into lower-dimensional representations which you understand. These representations are captured into your semantic network, connecting with previously learned concepts.

To learn optimally, you must find the right state of mind. For me, this is finding a flow state. I find this flow state consistently by organising one-hour+ blocks of time for narrow focus, with short breaks in between. Listening to consistent repetitive beats helps put my mind into this state.

To retain information, you must revisit it, at consistent spaced intervals (active recall with spaced repetition). This is particularly important for exams where you need fast recall of particular information. Outside exams, consistently reapply learned knowledge to new domains, or projects, to capture it in your mind.

An important, but commonly overlooked, point is using the work of others. There exists a ground truth of information (the high-dimensional representation). Other people who have learned this information have compressed it into their own lower-dimensional representations, to fit it into their underlying world model. People who have studied more refine their world models & representations over time (experts in a domain have a particularly refined representation). It can be easier to query people who already have very refined representations, as you can directly access their compressed representations, which are refined and have more clarity. It can be quicker and easier to represent this yourself, and fit it into your semantic network.

To strengthen the connections of the internal semantic network (mind) it can be helpful to create an external semantic network (knowledge base). Being able to see & visualise the connections in the mind helps reinforce those internal connections. An external semantic network retains information over-time & therefore can hold a larger set of learned information in memory (allowing us to quickly restore information into the internal semantic network).

And finally, practice, practice, practice. Learned knowledge is only useful if you apply it.

Rules for Learning
Find Flow State.
Use Active Recall & Spaced Repetition to retain information.
Use the Work of Others.
Create an External Semantic Network (Knowledge Base).
Practice, Practice, Practice.
Rules for Academics

These lessons can be applied to academics. To perform at a high-level in your exams, do the following:

Review material before lectures (pre-construct your own representation of the information).
Use the lecture as a time to listen & refine your representation + ask questions to the lecturer.
Take advantage of any help that is offered (office hours etc.) & use them to refine your representations (with information from experts).
Take advantage of the hard work of others (notes, summaries, online resources, textbooks) can all help to refine your understanding.
With exams, focus on spaced repetition & active recall from the beginning of the semester. Create flashcards when you have captured & refined the information.
Before the exam, practice applying the knowledge as much as possible. Do every single past exam you can. Use feedback from these to refine your understanding further.`,i1=`如何学习

学习就是将高维信息压缩为你可以理解的低维表示。这些表示被捕获到你的语义网络中，并与先前学到的概念相连接。

要达到最佳学习效果，你必须找到合适的心态。对我来说，这就是进入心流（flow state）。我通过将时间组织为 one-hour+ 的专注块，并在块之间安排短暂休息，来稳定地找到这种心流状态。听有节奏且重复的节拍有助于把我的思维带入这种状态。

为了保留信息，你必须按一致的间隔重新接触它（主动回忆与间隔重复，active recall with spaced repetition）。这对于需要快速记忆特定信息的考试尤为重要。在非考试场景中，应将学到的知识持续应用到新领域或项目中，以便把它固定在你的脑中。

一个重要但常被忽视的点是利用他人的成果。存在信息的客观真相（高维表示）。其他已经学会这些信息的人会将其压缩到他们自己的低维表示中，以便将其纳入他们的基础世界模型。研究得更多的人会随着时间推移不断精炼他们的世界模型与表示（领域内的专家通常有特别精炼的表示）。向那些已经拥有非常精炼表示的人请教可能更容易，因为你可以直接访问他们的压缩表示——这些表示更精炼、更加清晰。这样可以更快也更容易地自己重构该表示，并将其纳入你的语义网络。

为了增强内部语义网络（头脑）中的连接，建立外部语义网络（知识库）可能会有帮助。能够看到并可视化头脑中的连接有助于强化这些内部连接。外部语义网络能够长期保存信息，因此可以在记忆中容纳更多已学信息（从而让我们能够快速将信息恢复到内部语义网络中）。

最后，多练，多练，多练。学到的知识只有在你应用它时才有用。

学习法则

- 找到心流状态。
- 使用主动回忆与间隔重复（active recall with spaced repetition）以保留信息。
- 利用他人的成果。
- 创建外部语义网络（知识库）。
- 练习，练习，练习。

学业法则

这些经验可以应用到学术上。要在考试中取得高水平表现，请做到以下几点：

在课堂前复习材料（事先构建你自己的信息表示）。
把课堂当作倾听与完善你表示的时间，并向讲师提问。
利用任何可用的帮助（答疑时间等），并用它们来完善你的表示（来自专家的信息）。
利用他人的辛勤成果（笔记、摘要、在线资源、教科书）都可以帮助你精炼理解。
对于考试，从学期开始就要专注于间隔重复与主动回忆。在你捕获并精炼信息后制作抽认卡（flashcards）。
在考试前，尽可能多地练习应用这些知识。做你能找到的每一份历年试题。利用这些练习的反馈进一步完善你的理解。
`,Cg=[{term:"矩阵乘法",english:"Matrix multiplication",definition:"将两个矩阵相乘的核心线性代数运算，是 Transformer 训练与推理中的主要计算负载。"},{term:"张量核心",english:"Tensor Core",definition:"面向低精度矩阵乘加优化的专用执行单元，可显著提高 AI 工作负载的吞吐。"},{term:"流式多处理器",english:"Streaming Multiprocessor",definition:"NVIDIA GPU 中重复部署的并行计算单元，包含线程束调度、寄存器与执行管线。"},{term:"线程束",english:"Warp",definition:"NVIDIA GPU 中通常由 32 个线程组成的锁步执行组。"},{term:"系统阵列",english:"Systolic array",definition:"以规则相邻数据流动完成矩阵乘法的计算阵列，常用于 AI 加速器。"},{term:"高带宽内存",english:"HBM",definition:"通过堆叠 DRAM 和宽总线提供极高带宽的封装内存，常直接连接 AI 加速器。"},{term:"缓存",english:"Cache",definition:"靠近计算单元的高速存储层，用于减少对更慢内存的重复访问。"},{term:"暂存器",english:"Scratchpad",definition:"由软件显式管理的片上存储空间，用于可预测地暂存计算所需的数据块。"},{term:"纵向扩展",english:"Scale-up",definition:"在一个紧耦合互连域内增加加速器数量，使其高带宽、低延迟地协作。"},{term:"横向扩展",english:"Scale-out",definition:"通过网络将多个服务器或机架连接成更大的计算集群。"},{term:"互连",english:"Interconnect",definition:"在芯片、封装、服务器或机架之间传输数据的专用连接与交换网络。"},{term:"推理",english:"Inference",definition:"利用训练好的模型对新输入生成预测或输出的过程。"},{term:"预填充",english:"Prefill",definition:"推理中将完整提示词一次送入模型、建立 KV Cache 的阶段，通常以矩阵-矩阵乘法为主。"},{term:"解码",english:"Decode",definition:"自回归推理中逐 token 生成输出的阶段，常受到内存访问带宽限制。"},{term:"KV 缓存",english:"KV Cache",definition:"Transformer 注意力机制保存的键和值状态，用于避免生成新 token 时重复计算历史上下文。"},{term:"稀疏性",english:"Sparsity",definition:"数据或权重中大量数值为零的特性，可用于减少计算和数据传输。"},{term:"DMA",english:"DMA",definition:"直接内存访问引擎，可在无需核心逐指令参与的情况下搬运数据。"},{term:"片上 SRAM",english:"On-chip SRAM",definition:"集成在芯片上的静态随机存取存储器，容量较小但延迟极低、带宽很高。"}];function _a(o){const r="/ai-chip-architectures-zh/".replace(/\/$/,"");return o==="/"?r?`${r}/`:"/":`${r}${o}`}const o1={"The Performance Equations":{zh:"性能方程",en:"The Performance Equations",level:2},"THE IRON LAW":{zh:"性能铁律",en:"THE IRON LAW",level:3},"AMDAHL'S LAW":{zh:"阿姆达尔定律",en:"AMDAHL'S LAW",level:3},"GUSTAFSON'S LAW":{zh:"古斯塔夫森定律",en:"GUSTAFSON'S LAW",level:3},"LITTLE'S LAW":{zh:"利特尔定律",en:"LITTLE'S LAW",level:3},"THE ROOFLINE MODEL":{zh:"屋顶线模型",en:"THE ROOFLINE MODEL",level:3},"The Walls":{zh:"性能之墙",en:"The Walls",level:2},"THE END OF DENNARD SCALING":{zh:"丹纳德缩放的终结",en:"THE END OF DENNARD SCALING",level:3},"THE POWER WALL":{zh:"功耗墙",en:"THE POWER WALL",level:3},"THE MEMORY WALL":{zh:"内存墙",en:"THE MEMORY WALL",level:3},"THE ILP WALL":{zh:"指令级并行墙",en:"THE ILP WALL",level:3},"LATENCY LAGS BANDWIDTH":{zh:"延迟落后于带宽",en:"LATENCY LAGS BANDWIDTH",level:3},"THE SPEED OF LIGHT":{zh:"光速",en:"THE SPEED OF LIGHT",level:3},"Locality and the Memory Hierarchy":{zh:"局部性与存储层次结构",en:"Locality and the Memory Hierarchy",level:2},"THE PRINCIPLE OF LOCALITY":{zh:"局部性原理",en:"THE PRINCIPLE OF LOCALITY",level:3},"AMAT: AVERAGE MEMORY ACCESS TIME":{zh:"AMAT：平均内存访问时间",en:"AMAT: AVERAGE MEMORY ACCESS TIME",level:3},"THE THREE C'S":{zh:"三个 C",en:"THE THREE C'S",level:3},"BELADY'S MIN":{zh:"贝拉迪最优策略",en:"BELADY'S MIN",level:3},"Pipelining and Out-of-Order":{zh:"流水线与乱序执行",en:"Pipelining and Out-of-Order",level:2},"PIPELINING SPEEDUP":{zh:"流水线加速比",en:"PIPELINING SPEEDUP",level:3},"OPTIMAL PIPELINE DEPTH":{zh:"最优流水线深度",en:"OPTIMAL PIPELINE DEPTH",level:3},"TOMASULO'S ALGORITHM":{zh:"托马苏洛算法",en:"TOMASULO'S ALGORITHM",level:3},"ROB SIZING AS LITTLE'S LAW":{zh:"以利特尔定律确定 ROB 容量",en:"ROB SIZING AS LITTLE'S LAW",level:3},"BRANCH PREDICTION":{zh:"分支预测",en:"BRANCH PREDICTION",level:3},"Coherence and Consistency":{zh:"一致性与内存模型",en:"Coherence and Consistency",level:2},MESI:{zh:"MESI 协议",en:"MESI",level:3},"Energy and Data Movement":{zh:"能耗与数据移动",en:"Energy and Data Movement",level:2},"THE HOROWITZ ENERGY TABLE":{zh:"Horowitz 能耗表",en:"THE HOROWITZ ENERGY TABLE",level:3},"THE COST OF DISTANCE":{zh:"距离的成本",en:"THE COST OF DISTANCE",level:3},"The Levers":{zh:"设计杠杆",en:"The Levers",level:2},"MAKE THE COMMON CASE FAST":{zh:"让常见情况更快",en:"MAKE THE COMMON CASE FAST",level:3},"POLLACK'S RULE":{zh:"Pollack 定律",en:"POLLACK'S RULE",level:3},SPECIALISATION:{zh:"专用化",en:"SPECIALISATION",level:3},"THROUGHPUT VS LATENCY":{zh:"吞吐量与延迟",en:"THROUGHPUT VS LATENCY",level:3},"SURFACE-TO-VOLUME SCALING":{zh:"表面积与体积缩放",en:"SURFACE-TO-VOLUME SCALING",level:3},"THE BANDWIDTH-DELAY PRODUCT":{zh:"带宽时延积",en:"THE BANDWIDTH-DELAY PRODUCT",level:3},"Reliability at Scale":{zh:"规模化可靠性",en:"Reliability at Scale",level:2},"FIT AND MTBF":{zh:"FIT 与 MTBF",en:"FIT AND MTBF",level:3},Synthesis:{zh:"综合",en:"Synthesis",level:2},"READING ANY ARCHITECTURE: THE SIX QUESTIONS":{zh:"阅读任何体系结构：六个问题",en:"READING ANY ARCHITECTURE: THE SIX QUESTIONS",level:3},"THE DEEPER POINT":{zh:"更深层的观点",en:"THE DEEPER POINT",level:3},"The Flow":{zh:"流程",en:"The Flow",level:2},Architecture:{zh:"体系结构",en:"Architecture",level:2},MODELLING:{zh:"建模",en:"MODELLING",level:3},"TRACE-BASED VS EXECUTION-DRIVEN":{zh:"基于轨迹与基于执行的模拟",en:"TRACE-BASED VS EXECUTION-DRIVEN",level:3},Microarchitecture:{zh:"微体系结构",en:"Microarchitecture",level:2},ITERATION:{zh:"迭代",en:"ITERATION",level:3},"THE INTERACTIONS":{zh:"协作关系",en:"THE INTERACTIONS",level:3},"ITERATION (Chinese)":{zh:"迭代（ITERATION）",en:"ITERATION",level:3},"INTERACTIONS (Chinese)":{zh:"交互（THE INTERACTIONS）",en:"THE INTERACTIONS",level:3},"Microarchitecture (Chinese)":{zh:"微架构（Microarchitecture）",en:"Microarchitecture",level:2},"RTL (Register-Transfer Level)":{zh:"RTL（寄存器传输级）",en:"RTL (Register-Transfer Level)",level:2},RTL:{zh:"RTL（寄存器传输级）",en:"RTL",level:2},"Spatial, Not Sequential":{zh:"空间，而非顺序",en:"Spatial, Not Sequential",level:3},"Spatial, Not Sequential (Chinese)":{zh:"空间性，而非顺序性",en:"Spatial, Not Sequential",level:3},"What the Designer Decides, What the Tools Decide":{zh:"设计师决定什么，工具决定什么",en:"What the Designer Decides, What the Tools Decide",level:3},"Designer and Tools (Chinese)":{zh:"设计者决定的事项，工具决定的事项",en:"What the Designer Decides, What the Tools Decide",level:3},"Finite State Machines":{zh:"有限状态机",en:"Finite State Machines",level:3},Example:{zh:"示例",en:"Example",level:3},"An Example":{zh:"示例",en:"An Example",level:3},"THE SYNTHESIS CONTRACT":{zh:"综合契约",en:"THE SYNTHESIS CONTRACT",level:3},"The Gate-Level Netlist":{zh:"门级网表",en:"The Gate-Level Netlist",level:3},"Physical Design":{zh:"物理设计",en:"Physical Design",level:2},Floorplanning:{zh:"平面规划",en:"Floorplanning",level:3},Floorplan:{zh:"平面规划",en:"Floorplan",level:3},Placement:{zh:"布局",en:"Placement",level:3},"Clock Tree Synthesis":{zh:"时钟树综合",en:"Clock Tree Synthesis",level:3},Routing:{zh:"布线",en:"Routing",level:3},Signoff:{zh:"签核",en:"Signoff",level:3},"The Verification Engineer":{zh:"验证工程师",en:"The Verification Engineer",level:3},"Foundry & Fabrication":{zh:"代工与制造",en:"Foundry & Fabrication",level:2},"Bring-up":{zh:"启动与调试",en:"Bring-up",level:2},"PRE-SILICON: SOFTWARE AGAINST THE MODEL":{zh:"硅前：软件面向模型开发",en:"PRE-SILICON: SOFTWARE AGAINST THE MODEL",level:3},"POST-SILICON: FIRST BOOT":{zh:"硅后：首次启动",en:"POST-SILICON: FIRST BOOT",level:3},"Design Verification":{zh:"设计验证",en:"Design Verification",level:2},UVM:{zh:"UVM 验证方法学",en:"UVM",level:3},"CONSTRAINED RANDOM + COVERAGE":{zh:"约束随机与覆盖率",en:"CONSTRAINED RANDOM + COVERAGE",level:3},"Assertions and Formal":{zh:"断言与形式验证",en:"Assertions and Formal",level:3},"Verification Engineers":{zh:"验证工程师",en:"Verification Engineers",level:3},"Simulation, Emulation, and FPGA Prototyping":{zh:"仿真、仿真器与 FPGA 原型",en:"Simulation, Emulation, and FPGA Prototyping",level:2},"Simulation, Emulation, FPGA Prototyping":{zh:"仿真、仿真器与 FPGA 原型",en:"Simulation, Emulation, FPGA Prototyping",level:2},"Simulation, Emulation, and FPGA Prototyping (Chinese)":{zh:"仿真、仿真（Emulation）、FPGA 原型",en:"Simulation, Emulation, and FPGA Prototyping",level:2},PPA:{zh:"PPA（性能、功耗、面积）",en:"PPA",level:3},Performance:{zh:"性能",en:"Performance",level:2},"THE CORRELATION LOOP":{zh:"关联验证循环",en:"THE CORRELATION LOOP",level:3},"WHY CORRELATION MATTERS":{zh:"为何关联验证重要",en:"WHY CORRELATION MATTERS",level:3},"TIMING-DRIVEN PERFORMANCE":{zh:"时序驱动的性能",en:"TIMING-DRIVEN PERFORMANCE",level:3},"TIMING CLOSURE":{zh:"时序收敛",en:"TIMING CLOSURE",level:3},"SAND TO SILICON WAFER":{zh:"从沙到硅晶圆",en:"SAND TO SILICON WAFER",level:3},"THE LAYER STACK":{zh:"金属层堆栈",en:"THE LAYER STACK",level:3},"PDK AND GDSII":{zh:"PDK 与 GDSII",en:"PDK AND GDSII",level:3},"WAFER FAB":{zh:"晶圆制造",en:"WAFER FAB",level:3},"Rules for Learning":{zh:"学习法则",en:"Rules for Learning",level:2},"Rules for Academics":{zh:"学业法则",en:"Rules for Academics",level:2}},s1={principles:{path:"/principles-of-computer-architecture",title:{zh:"计算机体系结构原理",en:"Principles of Computer Architecture"},source:{zh:e1,en:$w},hasToc:!0},"chip-design":{path:"/how-to-design-a-chip",title:{zh:"如何从零开始设计一块芯片",en:"How To Design A Chip, From Scratch"},source:{zh:n1,en:t1},hasToc:!0},learning:{path:"/how-to-learn",title:{zh:"如何学习",en:"How to Learn"},source:{zh:i1,en:a1},hasToc:!1}};function r1(o){return o.includes("how-to-design-a-chip")?"chip-design":o.includes("how-to-learn")?"learning":"principles"}function l1(o){return o.replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[r]??r)}function c1(o){const r=[];let c=o;return[...Cg].sort((l,d)=>d.term.length-l.term.length).forEach(l=>{const d=l.term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");c=c.replace(new RegExp(d,"g"),()=>{const h=`@@TERM_${r.length}@@`;return r.push(`<span class="term" tabindex="0"><span class="term-label">${l.term}</span><span class="term-tooltip" role="tooltip"><b>${l.english}</b><span>${l.definition}</span></span></span>`),h})}),c.replace(/@@TERM_(\d+)@@/g,(l,d)=>r[Number(d)]??"")}function yr(o,r){const c=l1(o).replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*\*([^*]+)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/ {2}\n/g,"<br />").replace(/\n/g," ");return r==="zh"?c1(c):c}function rm(o,r){return`${o.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g,"-").replace(/^-|-$/g,"")||"section"}-${r}`}function u1(o){return o.replace(/^[\s\S]*?(?=^(?:Principles of Computer Architecture|How To Design A Chip, From Scratch|How to Learn)\s*$)/m,"").replace(/^Home Writing\s*\n+/,"").replace(/^Contents\n[\s\S]*?(?=^# |^## |^### |^How to Learn$)/m,"").replace(/^# (Principles of Computer Architecture|How To Design A Chip, From Scratch)\s*$/m,"").replace(/^(Principles of Computer Architecture|How To Design A Chip, From Scratch|How to Learn)\s*$/m,"").replace(/\n{3,}/g,`

`)}function d1(o,r){let c=0;return u1(o).trim().split(/\n{2,}/).map(l=>l.trim()).filter(Boolean).map(l=>{const d=l.match(/^(#{1,6})\s+(.+)$/);if(d){const y=d[1].length,m=d[2].trim();return c+=1,{type:"heading",level:y,value:m,id:rm(m,c)}}const h=l.toLocaleLowerCase(),f=Object.values(o1).find(y=>y.en.toLocaleLowerCase()===h||y.zh===l);if(f){c+=1;const y=f[r];return{type:"heading",level:f.level,value:y,id:rm(y,c)}}if(l==="---"||l==="* * *")return{type:"rule",value:l};if(l.startsWith("```"))return{type:"code",value:l.replace(/^```[\w-]*\n?/,"").replace(/\n?```$/,"")};const v=l.split(`
`);return v.length>1&&v[0].includes("|")&&/^\|?\s*:?-{3,}/.test(v[1])?{type:"table",value:l}:v.every(y=>/^\s*(?:[-*]|\d+\.)\s+/.test(y))?{type:"list",value:l}:{type:"paragraph",value:l}})}function h1({markdown:o,language:r}){const c=o.split(`
`).filter(f=>f.includes("|")),l=f=>f.replace(/^\||\|$/g,"").split("|").map(v=>v.trim()),[d,,...h]=c;return d?w.jsx("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",className:"generic-table-wrap",children:w.jsxs("table",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",children:[w.jsx("thead",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",children:w.jsx("tr",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",children:l(d).map((f,v)=>w.jsx("th",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",dangerouslySetInnerHTML:{__html:yr(f,r)}},`${f}-${v}`))})}),w.jsx("tbody",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",children:h.map((f,v)=>w.jsx("tr",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",children:l(f).map((y,m)=>w.jsx("td",{"data-loc":"client/src/pages/AdditionalArticle.tsx:222",dangerouslySetInnerHTML:{__html:yr(y,r)}},`${m}-${y}`))},v))})]})}):null}function f1({language:o}){const r=o==="zh"?["架构","微架构","RTL（逻辑设计）","逻辑综合","物理设计","代工与制造","启动与调试","量产"]:["Architecture","Microarchitecture","RTL","Synthesis","Physical Design","Foundry & Fabrication","Bring-up","Production"],c=o==="zh"?["建模（功能、性能、周期精确）","仿真（Hz – kHz）","仿真与 FPGA 原型（MHz – 10s MHz）","验证（设计、物理、时序）","性能关联（模型、RTL、硅）"]:["Modelling (functional, performance, cycle-accurate)","Simulation (Hz – kHz)","Emulation & FPGA prototyping (MHz – 10s MHz)","Verification (design, physical, timing)","Performance correlation (model, RTL, silicon)"];return w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:228",className:"chip-flow",role:"img","aria-label":o==="zh"?"芯片设计流程图":"Chip design flow",children:[w.jsx("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:228",className:"chip-flow-spine",children:r.map(l=>w.jsx("span",{"data-loc":"client/src/pages/AdditionalArticle.tsx:228",children:l},l))}),w.jsx("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:228",className:"chip-flow-lanes",children:c.map(l=>w.jsx("span",{"data-loc":"client/src/pages/AdditionalArticle.tsx:228",children:l},l))})]})}function lm({entries:o,active:r,onJump:c}){return w.jsx("ul",{"data-loc":"client/src/pages/AdditionalArticle.tsx:232",className:"generic-toc-list",children:o.map(l=>w.jsx("li",{"data-loc":"client/src/pages/AdditionalArticle.tsx:232",className:`toc-level-${l.level}`,children:w.jsx("button",{"data-loc":"client/src/pages/AdditionalArticle.tsx:232",className:r===l.id?"current":"",type:"button",onClick:()=>c(l.id??""),children:l.value})},l.id))})}function cm({language:o}){return w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",className:"post-cta",children:[w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",className:"post-cta-brand",href:"https://standardmachines.com/",target:"_blank",rel:"noreferrer",children:w.jsx("span",{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",children:"Standard Machines"})}),w.jsx("p",{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",className:"post-cta-body",children:o==="zh"?"用 AI 设计先进芯片。":"Teaching AI to design advanced chips."}),w.jsxs("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",className:"post-cta-contact",href:"mailto:founders@standardmachines.com?subject=From%20your%20writing",children:[w.jsx(pg,{"data-loc":"client/src/pages/AdditionalArticle.tsx:236",size:12}),o==="zh"?"联系创始团队":"Get in touch"]})]})}function $c(){const[o,r]=Pu(),c=r1(o),l=s1[c],{theme:d,toggleTheme:h}=xu(),[f,v]=I.useState(()=>window.localStorage.getItem("article-language")==="en"?"en":"zh"),[y,m]=I.useState(""),b=I.useMemo(()=>d1(l.source[f],f).filter(E=>E.value.trim()!==l.title[f]),[l,f]),p=I.useMemo(()=>b.filter(E=>E.type==="heading"&&(E.level===2||E.level===3)),[b]);I.useEffect(()=>{document.title=l.title[f],document.documentElement.lang=f==="zh"?"zh-CN":"en"},[l,f]),I.useEffect(()=>{const E=new IntersectionObserver(H=>{const _=H.filter(K=>K.isIntersecting).sort((K,Y)=>K.boundingClientRect.top-Y.boundingClientRect.top)[0];_&&m(_.target.id)},{rootMargin:"-20% 0px -70% 0px",threshold:[0,.1]});return document.querySelectorAll("[data-generic-heading]").forEach(H=>E.observe(H)),()=>E.disconnect()},[b]);const x=E=>document.getElementById(E)?.scrollIntoView({block:"start"}),M=()=>{const E=window.scrollY,H=f==="zh"?"en":"zh";window.localStorage.setItem("article-language",H),v(H),requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:E})))},D=c==="chip-design";return w.jsx("main",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"page",children:w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"layout",children:[w.jsxs("nav",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar","aria-label":"网站和文章目录",children:[w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-section",children:[w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-link",href:_a("/"),children:"Home"}),w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-link",href:_a("/writing"),onClick:E=>{E.preventDefault(),r("/writing")},children:"Writing"})]}),w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-social","aria-label":"社交链接",children:[w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",href:"https://github.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:w.jsx(wu,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"})}),w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",href:"https://www.linkedin.com/in/jacob-peake/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:w.jsx(Au,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"})}),w.jsx("a",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",href:"https://x.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"X",children:w.jsx("span",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"x-glyph",children:"𝕏"})}),w.jsx("button",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",type:"button","aria-label":"切换暗色模式",onClick:h,children:d==="dark"?w.jsx(Su,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"}):w.jsx(Tu,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"})}),w.jsxs("button",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"language-toggle",type:"button","aria-label":f==="zh"?"切换至英文":"切换至中文",onClick:M,children:[w.jsx(fg,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"}),w.jsx("span",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",children:f==="zh"?"EN":"中"})]})]}),l.hasToc&&w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-toc",children:[w.jsx("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"sidebar-toc-title",children:"Contents"}),w.jsx(lm,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",entries:p,active:y,onJump:x})]}),w.jsx(cm,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",language:f})]}),w.jsxs("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"content",children:[l.hasToc&&w.jsxs("details",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"mobile-toc",children:[w.jsx("summary",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",children:"Contents"}),w.jsx(lm,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",entries:p,active:y,onJump:x})]}),w.jsx("header",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"article-header",children:w.jsx("h1",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"article-title",children:l.title[f]})}),w.jsx("article",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"article-body","aria-label":l.title[f],children:b.map((E,H)=>{if(E.type==="rule")return w.jsx("hr",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260"},H);if(E.type==="heading"){const _=E.level&&E.level<=2?"h3":E.level===3?"h4":"h5";return w.jsx(_,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",id:E.id,"data-generic-heading":!0,children:E.value},E.id)}return E.type==="code"?w.jsx("pre",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",children:w.jsx("code",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",children:E.value})},H):E.type==="table"?w.jsx(h1,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",markdown:E.value,language:f},H):E.type==="list"?w.jsx("ol",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"article-list",children:E.value.split(`
`).map((_,K)=>w.jsx("li",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",dangerouslySetInnerHTML:{__html:yr(_.replace(/^\s*(?:[-*]|\d+\.)\s+/,""),f)}},K))},H):D&&/(线性阶段|Linear stages)/.test(E.value)?w.jsx(f1,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",language:f},H):w.jsx("p",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",dangerouslySetInnerHTML:{__html:yr(E.value,f)}},H)})}),w.jsx("div",{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",className:"post-cta post-cta-end",children:w.jsx(cm,{"data-loc":"client/src/pages/AdditionalArticle.tsx:260",language:f})})]})]})})}const p1={"nvidia-gpu-die":[{x:50,y:3.5,text:"PCIe Gen 6 主机接口",width:25,tone:"dark"},{x:8,y:29,text:"HBM3e",width:10},{x:27,y:18,text:"图形处理集群",width:18},{x:50,y:44,text:"千线程引擎",width:16},{x:50,y:58,text:"L2 缓存",width:11},{x:50,y:96,text:"NV-HBI 桥接",width:15}],"nvidia-sm":[{x:50,y:4,text:"L1 指令缓存",width:15,tone:"dark"},{x:17,y:28,text:"线程束调度器",width:16},{x:35,y:28,text:"发射单元",width:12},{x:66,y:28,text:"张量内存",width:13},{x:50,y:87,text:"L1 数据缓存 / 共享内存",width:28},{x:50,y:96,text:"张量内存加速器",width:20}],"nvidia-scale-up":[{x:50,y:2.5,text:"NVL72 / Oberon 机架",width:25},{x:50,y:15,text:"18 个计算托盘",width:22},{x:50,y:50,text:"NVSwitch 交换托盘",width:24},{x:92,y:52,text:"无源铜背板",width:18},{x:50,y:97,text:"72 GPU / 全互联",width:22}],"nvidia-scale-out":[{x:50,y:4,text:"DGX SuperPOD 横向扩展",width:31},{x:50,y:15,text:"叶脊胖树 / Quantum-X800",width:33},{x:50,y:42,text:"核心层",width:10},{x:50,y:61,text:"叶交换机",width:12},{x:50,y:88,text:"NVL72 机架",width:14}],"google-tpu-chip":[{x:50,y:5,text:"ICI 互连 / 数据中心网卡",width:29},{x:16,y:17,text:"计算芯粒",width:15},{x:35,y:35,text:"稀疏核心",width:13},{x:50,y:56,text:"张量核心",width:13},{x:50,y:82,text:"向量内存 / 累加器队列",width:28},{x:94,y:50,text:"HBM3e",width:10}],"google-tpu-tensorcore":[{x:50,y:5,text:"标量单元（322 位，8 槽 VLIW）",width:35,tone:"dark"},{x:20,y:27,text:"VPU",width:8},{x:25,y:62,text:"XLU",width:8},{x:39,y:62,text:"转置 / 重排",width:15},{x:76,y:28,text:"MXU 256×256",width:17},{x:50,y:86,text:"累加器队列 / VMEM",width:25}],"google-tpu-scale-up":[{x:50,y:4,text:"TPU 8t 超级集群 / 9,600 芯片",width:37},{x:24,y:13,text:"单个立方体：三维环形网络",width:31},{x:76,y:13,text:"150 个立方体，经 Palomar OCS",width:36},{x:50,y:92,text:"每立方体 64 芯片 / 邻居间直连铜缆",width:42},{x:50,y:98,text:"每芯片 ICI：2.4 TB/s 双向",width:34}],"google-tpu-scale-out":[{x:50,y:4,text:"TPU 8t 横向扩展",width:23},{x:50,y:12,text:"Jupiter：南北向，全光网络",width:31},{x:50,y:20,text:"Virgo：东西向，两层无阻塞网络",width:37},{x:50,y:41,text:"Virgo 核心层",width:17},{x:50,y:61,text:"Virgo 叶交换层",width:18},{x:50,y:96,text:"每芯片横向扩展 / 跨 Pod SPMD",width:38}],"amd-gpu-chip":[{x:50,y:3,text:"PCIe Gen 5 主机接口",width:26,tone:"dark"},{x:26,y:15,text:"加速器复合晶粒",width:18},{x:8,y:50,text:"HBM3e",width:10},{x:24,y:73,text:"I/O 晶粒 / 无限缓存",width:23,tone:"dark"},{x:50,y:94,text:"无限互连 AP",width:16}],"amd-cu":[{x:50,y:4,text:"调度器（Wave64 发射，四周期轮询）",width:38,tone:"dark"},{x:50,y:13,text:"标量单元（CU 内共享）",width:26},{x:18,y:25,text:"向量通用寄存器",width:19},{x:80,y:43,text:"矩阵核心（MFMA）",width:19},{x:50,y:82,text:"本地数据共享 / 软件管理暂存器",width:38},{x:50,y:96,text:"L1 向量缓存",width:16}],"amd-scale-up":[{x:50,y:3,text:"Helios / 开放宽机架机箱",width:29},{x:50,y:7,text:"18 个计算托盘 + 9 个 UALink 交换托盘",width:44},{x:50,y:47,text:"UALink 交换机",width:18},{x:91,y:51,text:"UALoE 以太网隧道背板",width:29},{x:50,y:97,text:"72 GPU / 纵向扩展 260 TB/s",width:34}],"amd-scale-out":[{x:50,y:4,text:"AMD 横向扩展 / Ultra Ethernet 叶脊网络",width:46},{x:50,y:12,text:"传输层 / 分散发包 / 重传 / 拥塞控制",width:45},{x:50,y:19,text:"核心层 / 共封装光学",width:27},{x:50,y:31,text:"核心交换机",width:14},{x:50,y:52,text:"叶交换机",width:13},{x:50,y:60,text:"每 GPU：Pensando Vulcano 800 网卡",width:39}],"cerebras-wafer-die":[{x:27,y:93,text:"整片晶圆",width:15},{x:78,y:93,text:"单个 reticle",width:18}],"cerebras-core":[{x:50,y:5,text:"互连路由器 / 5 端口 / 静态路由",width:39,tone:"dark"},{x:50,y:15,text:"数据流任务调度器 / 8 个微线程",width:37},{x:23,y:32,text:"通用寄存器",width:14},{x:76,y:32,text:"张量描述符寄存器",width:21},{x:28,y:58,text:"本地 SRAM / 单周期存储体",width:29},{x:75,y:58,text:"计算引擎",width:14},{x:50,y:86,text:"发送端零值过滤 / 非结构化稀疏性",width:43}],"aws-trainium-chip":[{x:50,y:5,text:"NeuronLink 互连 / PCIe-EFA（Nitro）",width:39},{x:20,y:15,text:"计算晶粒 0",width:16},{x:80,y:15,text:"计算晶粒 1",width:16},{x:50,y:44,text:"张量引擎 128×128",width:20},{x:50,y:93,text:"NeuronLink 环形网络端口",width:29}],"aws-trainium-neuroncore":[{x:50,y:5,text:"NeuronCore-v3",width:18,tone:"dark"},{x:50,y:15,text:"DMA 引擎 / 描述符生成 / 同步引擎",width:41},{x:50,y:27,text:"SBUF 状态缓冲区",width:21},{x:31,y:67,text:"张量引擎",width:15},{x:77,y:53,text:"向量引擎 / 归约",width:19},{x:77,y:81,text:"GPSIMD 引擎 / 自定义 C 运算",width:30},{x:50,y:95,text:"PSUM 部分和缓冲区",width:21}],"aws-trainium-scale-up":[{x:50,y:4,text:"单台服务器 / 通过 NeuronSwitch-v1 全互联",width:45},{x:50,y:18,text:"NeuronSwitch-v1（L1）",width:24},{x:50,y:52,text:"UltraServer / 144 个 Trn3 芯片",width:35},{x:50,y:64,text:"NeuronSwitch-v1（L2）",width:24},{x:50,y:91,text:"服务器：16×Trn3 + L1",width:25}],"aws-trainium-scale-out":[{x:50,y:8,text:"核心层",width:10,tone:"dark"},{x:50,y:36,text:"叶交换层",width:12},{x:50,y:51,text:"EFA（Nitro）",width:14,tone:"dark"},{x:50,y:62,text:"Trn2 UltraServer",width:22}],"groq-chip":[{x:15,y:5,text:"西半区",width:10},{x:85,y:5,text:"东半区",width:10},{x:15,y:49,text:"MXM 矩阵平面",width:16},{x:35,y:49,text:"SXM 交换切片",width:15},{x:50,y:49,text:"VXM 向量切片",width:15},{x:50,y:89,text:"指令控制单元",width:16,tone:"dark"}],"groq-scale":[{x:23,y:6,text:"节点",width:8},{x:77,y:6,text:"机架",width:8},{x:23,y:93,text:"8 个 LPU 全互联",width:19},{x:77,y:88,text:"节点 1–8：各 8 个 LPU",width:27},{x:77,y:96,text:"节点 9：热备",width:16}]};function m1({diagram:o}){const r=p1[o];return r?w.jsx("svg",{"data-loc":"client/src/components/DiagramOverlay.tsx:168",className:"diagram-overlay",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:r.map((c,l)=>{const d=c.width??Math.max(12,c.text.length*1.6),h=c.tone==="dark"?"rgba(33,32,29,.9)":"rgba(255,253,247,.9)",f=c.tone==="dark"?"#fffdf7":"#292824";return w.jsxs("g",{"data-loc":"client/src/components/DiagramOverlay.tsx:173",children:[w.jsx("rect",{"data-loc":"client/src/components/DiagramOverlay.tsx:174",x:c.x-d/2,y:c.y-2.2,width:d,height:"4.4",rx:"0.75",fill:h}),w.jsx("text",{"data-loc":"client/src/components/DiagramOverlay.tsx:175",x:c.x,y:c.y+.75,textAnchor:"middle",fill:f,className:"diagram-overlay-text",children:c.text})]},`${o}-${l}`)})}):null}const g1=`# AI Chip Architectures - Jacob Peake

**URL:** https://www.jacobpeake.com/ai-chip-architectures

---

Home
Writing
CONTENTS
GPU
Architecture
Scaling
Software
TPU
Architecture
Scaling
Software
GPU
Architecture
Scaling
Software
WSE
Architecture
Scaling
Software
Trainium
Architecture
Scaling
Software
LPU
Architecture
Scaling
Software
Comparison
Standard Machines

Teaching AI to design advanced chips. Get in touch.

AI Chip Architectures

At the 2018 International Symposium on Computer Architecture, John Hennessy and David Patterson delivered their Turing Lecture: "A New Golden Age for Computer Architecture".

In the 1980s, when Hennessy and Patterson did their Turing Award-winning research,
single-threaded CPU performance grew 52% a year. By 2018, with the end of Moore's Law and Dennard Scaling, the rate was 3%.

There was a need for domain-specific architectures (DSAs). Their worked example was Google's TPU v1, already in production: 29× the throughput of a CPU on neural-network inference, at 80× better energy efficiency. The closing prediction: "the next decade will see a Cambrian explosion of novel computer architectures."

This prediction came true. Today, we now have dozens of architectures in serious development. GPUs, TPUs, LPUs, NPUs, DPUs, ASICs, wafer-scale engines, reconfigurable dataflow, neuromorphic, photonic, analog. Particularly, these architectures focus on compute for AI.

The architectures that have won real deployment so far: GPUs (NVIDIA, AMD), systolic-array accelerators (TPU, Trainium), the Cerebras Wafer-Scale Engine, and the Groq LPU.

NVIDIA is the clear frontrunner; AMD follows, with 6 GW commitments from both OpenAI and Meta. TPUs train Gemini and will serve Anthropic with up to a million chips; Anthropic also runs Claude on over a million Trainium chips. Cerebras now serves OpenAI inference; the Groq LPU was folded into NVIDIA via a $20B acquihire.

This post aims to survey these varying approaches - their philosophy, architecture, scaling methods (scale-up and scale-out), and software stack (how you program the chip).

The Problem

AI compute is dominated by matrix multiplication. A transformer is a sequence of matmuls: Q/K/V projection, attention, output projection, FFN - interleaved with element-wise ops: normalisation, activation, residual adds. Training a frontier model performs 
10
25
10
25
 multiply-accumulate operations (matmuls are a sequence of multiply-accumulates).

The shape of those matmuls depends on the workload. Training pushes a batch of sequences forward through every layer, backpropagates the loss, and updates the weights, with thousands of tokens flowing through the same weight matrix at once. Prefill is the prompt-ingestion phase of inference: the full input sequence projected through the model in a single pass, before the first output token has been produced. Both training & prefill stack many tokens against the same weight matrix, so each layer's math is a large matrix-matrix multiply (GEMM), with high arithmetic intensity (compute-bound). Decode is autoregressive: the model emits one token at a time, each conditioned on every token before it, and token N+1 cannot begin until token N has been produced. Only one token gets projected per step, so every matmul becomes a matrix-vector product (GEMV). Producing one token requires a full pass over every weight in the model, plus a full read of the KV Cache for attention. Arithmetic intensity drops by orders of magnitude versus prefill.

Inference systems recover some of that intensity by batching tokens to promote those GEMVs back to GEMMs: continuous batching stacks many users' decode steps, speculative decoding stacks K drafted tokens per request and verifies them in one pass, and multi-token prediction folds the same trick inside the model itself. This achieves higher utilisation of the matmul units, and pushes up the Ops/B. For continuous batching, each user's request still reads its own KV Cache, so long-context decode shifts from weight-bandwidth-bound to KV-bandwidth-bound.

The architecture problem here is moving the numbers to where the matmuls happens fast enough. This is known as the memory wall: compute has scaled exponentially, memory bandwidth has not.

Each architecture proposes a different strategy for winning the data-movement game. Understanding a chip reduces to four questions: where does data live, how does it move to the compute units, what do the compute units look like, and how do chips talk to each other at scale.

NVIDIA GPU

The NVIDIA GPU is a massively parallel processor. The philosophy is that a programmable chip with thousands of threads, orchestrated by a host CPU and exposed through CUDA, is the right machine to run parallelisable workloads. Each generation adds acceleration primitives onto programmable Streaming Multiprocessors without changing the programming model. The same chip trains transformers, serves inference, renders graphics, and runs scientific simulation (accelerated computing).

GENEALOGY
2006
TeslaG80
The first CUDA-capable GPU; unified shaders and the SIMT execution model.
2010
FermiGF100
First true compute architecture: unified L1/L2 caches, dual warp schedulers, IEEE-754 FP64.
2012
KeplerK20, K40
SMX, dynamic parallelism, Hyper-Q; the GPU can launch its own work.
2014
MaxwellM40
Redesigned SM with ~2× perf-per-watt over Kepler.
2016
PascalP100
NVLink 1.0, HBM2, native FP16 throughput; the first GPU designed explicitly for deep learning.
2017
VoltaV100
First Tensor Cores; independent thread scheduling.
2018
TuringT4
2nd-gen Tensor Cores with INT8/INT4; first RT Cores.
2020
AmpereA100
3rd-gen Tensor Cores with TF32 and structured sparsity; Multi-Instance GPU partitioning.
2022
HopperH100, H200, GH200
4th-gen Tensor Cores, FP8, Transformer Engine; HBM3, TMA, thread block clusters, async wgmma.
2024
BlackwellB100, B200, GB200
5th-gen Tensor Cores with FP4, Tensor Memory (TMEM), two-die chiplet GPU, NVLink 5.
2025
Blackwell UltraB300, GB300
Mid-cycle refresh: ~1.5× FP4 throughput, 288 GB HBM3e. Tuned for long-context reasoning.
2026
RubinRubin, VR200, Rubin CPX
HBM4, 3rd-gen Transformer Engine, Vera CPU pairing, disaggregated prefill via Rubin CPX.
2027
Rubin UltraRubin Ultra
4-die GPU package, 1 TB HBM4e per package. Deployed in 600 kW NVL576 Kyber racks at 100 PetaFLOPS FP4 per GPU.
ARCHITECTURE

An NVIDIA GPU is a group of throughput-oriented cores, a deep memory hierarchy to keep them fed, + just enough scheduling silicon to keep thousands of threads in flight. The cores are Streaming Multiprocessors, replicated 100+ times per package: 80 on V100, 108 on A100, 132 on H100, 148 on B200, 160 on B300, 224 on Rubin. Inside every SM sits the same recipe: four SM Sub-Partitions, each with its own warp scheduler, dispatch unit, 16k×32-bit register file, scalar CUDA Core lanes, a Special Function Unit for transcendentals, and a private port into the SM's Tensor Cores. The four partitions share an L1/shared-memory block, and the TMA. Threads are grouped into warps of 32 that execute in SIMT lock-step; dozens of resident warps per partition let the scheduler hide memory/arithmetic stalls by switching between them.

Compute

CUDA Cores are the original compute throughput, and for AI they still own everything that isn't a matmul: activations, residual adds, normalization, address arithmetic. But, a transformer block is ~99% matmul FLOPs, so the overwhelming compute throughput comes from the Tensor Cores.

These cores execute fused matrix multiply-accumulate on small matrix tiles, 
𝐷
=
𝐴
⋅
𝐵
+
𝐶
D=A⋅B+C The full matmul is broken into output tiles: to produce one output tile, a kernel walks the shared inner dimension 
𝐾
K, drawing 
𝐴
A from a row-strip of the left input matrix and 
𝐵
B from a column-strip of the right, and folds each partial product into a running accumulator. 
𝐶
C holds the partial sum so far, 
𝐷
D is the updated value carried into the next step. After the inner loop completes, 
𝐷
D is one finished tile of the full output matrix; the whole matmul is built from many of these tile MMAs.

Tile shapes are written M × N × K, 
𝑀
×
𝑁
M×N is the output tile size, and 
𝐾
K is how much of the inner dimension the instruction contracts over in one fire; the rest of the matmul's 
𝐾
K axis is walked by the kernel's inner loop. The accumulator is sticky across that loop: each MMA's output 
𝐷
D becomes the next MMA's input 
𝐶
C, so the equation is really 
𝐶
←
𝐴
⋅
𝐵
+
𝐶
C←A⋅B+C in place: successive instructions fold their partial products into the same storage until the K-axis is fully walked.

V100's first-gen unit (8 per SM) ran a warp-level 16×16×16 FP16 MMA. A100's 3rd-gen unit added TF32, BF16, FP64 matmul, and 2:4 structured sparsity. H100's 4th-gen unit added native FP8 and pulled the abstraction up from a warp to a warp group: 128 cooperating threads firing an asynchronous wgmma at 64×256×16 shape that runs in the background while the issuing warps load the next tile. B200's 5th-gen unit went further still: a two-SM MMA of 256×256×16 with operands split across a pair of SMs, native FP4, and a dedicated 256 KB Tensor Memory (TMEM) scratchpad per SM that holds accumulator tiles instead of bleeding into the register file. Rubin's 6th-gen unit extends FP4 throughput, adds native FP6, and pairs with a 3rd-gen Transformer Engine that does adaptive NVFP4 micro-block scaling in hardware, keeping the per-tile quantization metadata on the Tensor Core path, rather than through the CUDA Cores.

What stays constant across all six generations is that the matmul lives inside the thread/warp hierarchy, but the number of threads it takes to issue one has shrunk, and the issue itself has decoupled from execution. Volta's mma.sync is warp-collective and synchronous: all 32 threads in a warp execute it together, each lane holding register fragments of A, B, and the accumulator D, and the warp blocks until it completes. Hopper's wgmma.mma_async widens the issuer to a warp-group of 128 threads, moves B into a shared-memory descriptor (A becomes optional: either registers or a descriptor, kernel's choice), and returns immediately: the matmul runs in the background while the warp-group queues the next tile, with completion tracked via wgmma.commit_group / wgmma.wait_group.

Blackwell's tcgen05.mma completes the migration: A joins B in shared-memory descriptors (or A comes from TMEM directly), and the accumulator D lands in TMEM rather than the register file. With every operand off the lanes, there is no per-thread state for an issue to coordinate, so a single thread fires the instruction and returns immediately, with completion signalled by an mbarrier the consumer warp waits on. The rest of the warp, and the issuing thread itself, is free for other work in the meantime. A CTA-pair variant scales the same model across two SMs: one thread on each SM in a paired cluster issues coordinated MMAs that share operands across the pair, composing the 256×256×16 two-SM tile under the same async/mbarrier completion, just promoted to a cluster-level barrier so the pair stays in step.

The matmul has grown bigger and lighter on the issuing threads at the same time: an instruction that started as 32 lanes acting in lockstep is now closer to a single descriptor-driven command, dispatched from inside the warp model but no longer executed by it.

That decoupling is what makes transformer attention kernels efficient on a GPU. The warp can run softmax, apply a mask, or pre-load the next tile while the matmul is in flight; the overlap of matmul and the surrounding element-wise work is the structure of every modern attention kernel (FlashAttention-3, FA4), and it depends on the matrix instruction not blocking the warp.

Memory

The on-chip hierarchy is hardware-managed caches at every level, with software hints layered on top. Off-chip is HBM: 32 GB HBM2 on V100, 80 GB HBM3 on H100, 192 GB HBM3e on B200, 288 GB on B300, 288 GB HBM4 on Rubin. A chip-level L2 Cache sits between HBM and the SMs: 6 MB on V100, 40 MB on A100, 50 MB on H100, 60 MB on B200 (split into two 30 MB banks across the two-die package, with locality-aware residency controls so that hot tiles can be pinned to the near die). Inside each SM, 256 KB of unified L1/SMEM is partitioned at kernel launch between hardware-managed L1 and a programmer-controlled scratchpad. The register file is another ~256 KB per SM, sliced four ways across the partitions.

Blackwell adds a fifth tier: TMEM, 256 KB per SM dedicated to MMA accumulators and addressed only by the Tensor Core, pulling the operand-residency pressure out of the general register file.

Movement between tiers has been progressively decoupled from the warp. Pre-Ampere, loading a tile was synchronous: each thread issued its own global load, the warp blocked until every fragment landed in registers, and a second pass copied them to shared memory; every tile burned warp lanes on address arithmetic and on the wait. Ampere introduced cp.async: per-thread async copies HBM → SMEM that bypass registers entirely, with the warp committing groups of in-flight copies and waiting only when the consumer needs the data. Hopper replaced that with the TMA, a dedicated DMA engine: one thread submits a multi-dimensional tile descriptor (base address, leading dimension, swizzle), the engine handles all the address arithmetic and writes into shared memory, and completion is signalled by an mbarrier. The whole warp is freed from load issue and address math; the kernel just queues descriptors. TMA also supports cluster-level multicast: one HBM read fans out to every SM in a thread-block cluster, turning what used to be N separate loads into one. Blackwell extends TMA again: direct loads into TMEM, so accumulator tiles stream in without staging through SMEM. The trajectory is one less thing the warp has to do per tile, generation after generation.

Warp Specialisation

The Hopper-era programming idiom is warp specialisation: inside one block, some warps act as producers that issue back-to-back TMA loads; others act as consumers that fire wgmma on freshly-arrived tiles. Synchronisation between them is no longer the old SM-wide __syncthreads() barrier; it is mbarrier (memory barriers in shared memory) and asynchronous transaction barriers attached to TMA completions, allowing fine-grained producer/consumer handshakes at warp granularity rather than block granularity. The pattern that has become the reference for every modern attention kernel (FlashAttention-3, CUTLASS ping-pong GEMMs, the Blackwell FA4 kernel) is the same recipe: a TMA-driven producer pipeline feeds a wgmma consumer pipeline through shared memory and TMEM, with mbarrier handshakes and thread-block clusters (Hopper+) tying multiple SMs into one cooperative compute unit so that the two-SM MMA of Blackwell composes naturally on top.

Numerics

FP32 was the historical default; Volta brought FP16 with FP32 accumulate and the loss-scaling tricks that made it trainable; Ampere added TF32 (FP32 range, FP16 mantissa, drop-in for FP32 matmul), BF16, and 2:4 structured sparsity that doubles effective throughput on pruned weights. Hopper introduced native FP8 in both E4M3 and E5M2, paired with the Transformer Engine which auto-scales activations layer-by-layer to keep them inside FP8 dynamic range. Blackwell halved precision again with FP4 and shipped microscaling MX formats (block-level shared exponents that recover most of the accuracy lost at FP4), together with a 2nd-gen Transformer Engine that retargets the auto-scaling pipeline to FP4. Rubin's 3rd-gen Transformer Engine adds NVFP4 (NVIDIA's tightened FP4 variant) and native FP6 with more aggressive sparsity. The chip layout itself is now part of the numerics story: B100/B200/B300 are two reticle-limit dies stitched by a ~10 TB/s NV-HBI link and presented to software as one logical GPU, with 8 HBM stacks on the package; Rubin extends the chiplet recipe to dual-die at ~336 B transistors with 8 HBM4 stacks. Every generation buys roughly 2× per-watt throughput by cutting bits in half and restoring accuracy with a finer-grained scaling scheme, and increasingly, by bonding more silicon into the package.

Bets
Bet 1: Programmability. The workload is a moving target (attention variants, novel model architectures), so keep every block programmable and let the developer write CUDA. Even the specialised units are exposed through that model rather than as fixed-function blocks.
Bet 2: Hide Latency with Massive Multithreading. Latency is unpredictable and data-dependent, so hide it not with a static schedule but with massive thread overcommit, up to 64 resident warps per SM, with the hardware warp scheduler picking a ready warp every cycle.
Bet 3: Warp-wrapped Matmul. The matrix unit is the overwhelming compute throughput, but it must live behind the same warp/thread abstraction that everything else uses, so wrap it in mma.sync → wgmma → tcgen05.mma - rather than expose it as a fixed-function pipe. This enables a single kernel to fuse matmul, softmax, and element-wise ops in one pass.
Bet 4: Async Memory Hierarchy. Make the memory hierarchy explicit and programmer-managed rather than implicit and compiler-scheduled. Keep the L2 cache, but expose SMEM and TMEM as named scratchpads, and layer async machinery on top: TMA for bulk copies, TMEM for the matmul accumulator, mbarrier for the producer/consumer handshake. The hierarchy is software-pipelined inside a programmable kernel, not statically scheduled by a compiler against a known-latency scratchpad.
Bet 5: Amortised SIMT Tax. Every transistor spent on a warp scheduler, register-file, or coherent cache is a transistor not spent on a MAC; accept the tax, and pay it down two ways: a Tensor Core now big enough that the SIMT machinery is amortised across a much larger MAC count, and units like TMEM trading away some general-purpose flexibility for MAC density.
SCALING

There are two regimes for scaling: scale-up and scale-out.

Scale-up
Bind several GPUs into one coherent memory domain. Any GPU can load or store any other GPU's HBM directly over NVLink at nanosecond latencies: one address space, no explicit transfers.
Scale-out
Network those domains together at the rack and cluster level. Data crosses via explicit RDMA at microsecond latencies: separate address spaces, but tens of thousands of chips per cluster.

AI infrastructure uses both: bandwidth-hungry collectives (tensor parallelism, MoE expert routing) stay inside the scale-up domain; data parallelism and pipeline parallelism cross the scale-out fabric.

Scale-up

The scale-up stack is NVLink plus NVSwitch. NVLink implements a cache-coherent fabric between GPUs, so a load or store on one GPU can target another GPU's HBM with the hardware handling address translation and coherence. But NVLink by itself is point-to-point: one link connects exactly two chips. NVSwitch is a dedicated crossbar chip that every GPU connects to, routing traffic so every GPU can simultaneously communicate with every other at full NVLink bandwidth, non-blocking and all-to-all.

Together they defined the HGX 8-GPU baseboard, pairing eight H100 SXM modules with x86 hosts (AMD EPYC or Intel Xeon) over PCIe Gen5. Hopper also shipped a Grace-paired form: the GH200 Grace Hopper Superchip bonded one Grace ARM CPU to one H100 over NVLink-C2C at 900 GB/s, eliminating the PCIe host-device hop. Modules scaled up into GH200 NVL2 pairs and rack-level GH200 NVL32. Blackwell makes the pairing the default. The GB200 module fuses one Grace with two B200s over NVLink-C2C, and NVL72 stitches 36 of them into a single liquid-cooled scale-up domain: 72 GPUs, 36 Grace CPUs, 13.5 TB of HBM and 17 TB of LPDDR5X as one flat, coherent address space. Rubin steps this in two. NVL144 ships in 2026 as a Rubin-generation refresh inside the same Oberon-class rack: 72 Rubin packages, badged as 144 GPUs under NVIDIA's new die-counting convention, with HBM4 and NVLink 6 doubling per-package bandwidth. The actual rack-scale jump is Rubin Ultra in 2027: NVL576 packs 144 four-die Rubin Ultra packages into the new Kyber chassis for 576 GPU dies in one coherent domain.

That density is held together by passive copper. NVL72's NVLink fabric runs over 5,184 cables blind-mated through a backplane (~2 miles of cabling per rack, no in-cable retimers, the SerDes living on the GPU and switch ASICs themselves), carrying ~130 TB/s of all-to-all bandwidth across the 72 GPUs. NVIDIA estimates the copper choice saves roughly 20 kW per rack against an optical equivalent that would have needed pluggable transceivers on every link. Copper is what makes rack as one GPU economically practical: at sub-2-metre runs it still wins on power, cost, and signal integrity per dollar; beyond that, the bits have to go on glass.

NVL144 stays inside Oberon and copper continues to work because the package count (72) is unchanged from NVL72; the cabling doesn't have to lengthen, just transmit faster on Gen 6 SerDes. Rubin Ultra's NVL576 holds the same copper line by reshaping the rack: the new Kyber form factor is roughly twice the height of Oberon and packs all 576 GPU dies into one enclosure, sized specifically so every NVLink path stays within passive-copper reach even at 144 four-die packages and tens of thousands of cables.

Scale-out

The scale-out stack comes from their acquisition of Mellanox. Unlike NVLink, scale-out fabrics are not coherent: nodes keep separate address spaces, and data crosses only via explicit RDMA initiated by software, typically wrapped in NCCL collectives like all-reduce or all-to-all. The reference cluster is the DGX SuperPOD: eight NVL72 racks stitched together over Quantum-X800 InfiniBand yield 576 Blackwell GPUs under a single scheduler, and training clusters scale further by tiling SuperPODs. Rubin SuperPODs in 2026 keep the same 8-rack pattern with NVL144 (yielding 1,152 GPUs per SuperPOD instead of 576). Rubin Ultra in 2027 scales the recipe up an order of magnitude: Kyber racks of 576 GPU dies each, stitched together over Quantum-X Photonics CPO, putting thousands of GPUs under one scheduler.

Every GPU has its own ConnectX NIC into that fabric. Blackwell nodes run ConnectX-8 at 800 Gbps per GPU, an order of magnitude less bandwidth than per-GPU NVLink, and latencies climb from nanoseconds to microseconds. Rubin moves to ConnectX-9 at 1.6 Tbps per GPU, doubling the per-GPU scale-out bandwidth as the per-rack scale-up domain grows from 72 to 576 GPUs. Alongside each NIC sits a BlueField DPU, adding ARM cores and accelerators to offload storage, networking, and security from the host CPU. For customers who prefer Ethernet to InfiniBand, Spectrum-X is a lossless-Ethernet alternative tuned for AI traffic.

The crossover from copper to glass happens at the rack boundary. Inside the NVL72 the spine is copper; once a link has to cross racks at 800 Gbps it is optical. Passive copper DAC tops out at roughly 1.5–2 metres at 200 G/lane, well short of cross-rack reach, so today's SuperPOD spine rides over OSFP-RHS pluggable transceivers, each module carrying its own laser, modulator, photodetector, and DSP. A SuperPOD spine fanning out to thousands of GPUs is, in optical terms, tens of thousands of pluggables drawing tens of kilowatts on transceiver lasers alone.

With Rubin, that optical layer collapses into the switch ASIC. Quantum-X Photonics (InfiniBand) and Spectrum-X Photonics (Ethernet) replace the pluggables with co-packaged optics: lasers, modulators, and photodetectors bonded onto the switch package via TSMC COUPE. NVIDIA claims ~4× fewer lasers and ~3.5× lower link power than the OSFP-pluggable equivalent. The chiplet logic that turned the GPU into a two-die package and stacked HBM next to it is now showing up at the network layer: vertical integration of compute, memory, and photonics on one substrate.

NVLink Fusion recently opened the scale-up fabric itself: third-party CPUs and XPUs can now join NVLink domains, letting hyperscalers build semi-custom racks around NVIDIA's interconnect without designing their own coherent fabric from scratch.

SOFTWARE

CUDA is the natural programming model for a massively parallel processor. You write a kernel (one piece of code executed once per thread) and launch it across thousands of threads organised into blocks and warps; the programmer decides what they share, when they synchronise, and which piece of the problem each one handles. That is why the abstraction has barely changed in eighteen years, and why every CUDA kernel written since 2007 would still compile and run on Blackwell.

That continuity is both the moat and the constraint. Each new generation introduces new hardware (Tensor Cores, TMA, TMEM) onto the same kernel-and-warps model, exposed as intrinsics in PTX and SASS: mma.sync, wgmma.mma_async, and so on. NVIDIA cannot radically rethink the SM because too much code depends on it; in return, every investment in CUDA software compounds across generations.

On top of PTX sits a stack constructed over two decades. cuBLAS and cuDNN for math and DNN primitives; CUTLASS, encoding decades of GEMM expertise in templated C++; TensorRT-LLM for paged attention, in-flight batching, and speculative decoding; framework bindings through PyTorch, Triton, and JAX.

FlashAttention, one of the most important algorithmic rewrites in modern AI, tiles attention to avoid materialising the 
𝑂
(
𝑁
2
)
O(N
2
) matrix. Its four generations (FA1 through FA4) have each been hand-optimised for the latest NVIDIA silicon (FA3 for Hopper's async pipelines, FA4 for Blackwell), with ports to other hardware trailing by months or years.

Most of this stack is written by people NVIDIA does not pay. The moat is not CUDA itself; it is two decades of third-party kernels, libraries, and tooling, and the millions of developers who have learned the API along the way.

NVIDIA also ships human expertise alongside the silicon. They embed dozens of their own engineers inside frontier labs and hyperscaler teams, writing kernels for each new model architecture and tuning them to each new silicon generation. Whatever a lab wants to train next month tends to run well on NVIDIA much faster than other platforms. Switching off NVIDIA is therefore not just rewriting the kernels and libraries. It is re-training the mental models of an entire engineering workforce, and losing the NVIDIA engineers who today sit inside the building.

Google TPU

The TPU is a matrix multiplication machine. The philosophy is, rather than a programmable chip that can run any massively-parallel workload, focus on a single primitive (dense matrix-multiplication on a large systolic array) and let the XLA compiler plan every cycle and every byte of memory ahead of time. No hardware scheduler, no cache, no threads/warps. Each generation grows the pod, with thousands of chips wired through the ICI interconnect into one coherent machine. A TPU has no ambition to render graphics or run scientific simulation; it exists to train and serve Google's workloads (search, translation, recommendation, Gemini) more efficiently per watt than any general-purpose alternative.

GENEALOGY
2015
TPU v1v1
First production deep-learning ASIC; INT8 inference only over PCIe.
2017
TPU v2v2
First training-capable TPU; switched the MXU from INT8 to BF16, established dual-TensorCore + HBM
2018
TPU v3v3
First liquid-cooled TPU; doubled MXUs and HBM versus v2; 1,024-chip pods.
2020
TPU v4v4, v4i
First reconfigurable optical circuit switches (Palomar); SparseCores; both BF16 & INT8; 4,096-chip pods.
2023
TPU v5v5e, v5p
v5e for efficiency, v5p for performance; v5p has 3.3× INT8 FLOPs & 2.2× HBM BW of v4, 8,960-chip pods.
2024
Trilliumv6e
First 256×256 MXU; 4.7× v5e peak FLOPS at similar power; trained Gemini 2.0.
2025
Ironwoodv7
Built for inference of reasoning models; adds native FP8; 9,216-chip superpods at 42.5 ExaFLOPS FP8.
2026
TPU v88t, 8i
8t for training, 8i for inference; adds native FP4; 9,600-chip superpods at 121 ExaFLOPS FP4 (8t).
ARCHITECTURE

A TPU chip is a matmul engine wrapped in just enough silicon to keep it fed. The unit of compute is the TensorCore: flagship chips from v2 onward carry two per package; efficiency-tuned chips (v4i, v5e, v6e) carry one. Inside every TensorCore sits the same five-component recipe: one or more MXUs for matrix math, a VPU for element-wise math, a Scalar Unit that runs the show, an XLU for cross-lane reductions, and an attached Transpose/Permute Unit, plus accumulator queues feeding and draining the MXU. From v4 onward each chip also carries dedicated SparseCore dataflow engines outside the TensorCore (4 per chip on v4, v5p, and Ironwood; 2 per chip on Trillium), explicitly carved out to absorb the embedding-lookup workload the systolic array was the wrong shape for. Every block sits on a single VLIW issue plane driven by a Core Sequencer that fills all eight functional slots of a 322-bit bundle every cycle. There is no instruction cache miss, no warp scheduler, no out-of-order engine, no branch predictor: the compiler is the scheduler, and the silicon area saved is spent on more MACs.

TensorCore

The MXU is the systolic array. v1 shipped one 256×256 INT8 inference array; v2 was the first training-capable TPU and introduced 128×128 cells doing BF16 multiply with FP32 accumulate (INT8 came back to the MXU at v4 onwards at equivalent throughput). Cell counts per TensorCore grew from there: 1 MXU on v2 → 2 on v3 → 4 on v4/v5e/v5p. Trillium went back to 256×256 (65,536 multiply-accumulate cells per array per cycle), and Ironwood, 8t, and 8i all kept the 256×256 shape.

To compute 
𝐶
=
𝐴
×
𝐵
C=A×B, matrix B's values are pre-loaded one weight per cell: weight-stationary dataflow, the choice that distinguishes TPUs from output-stationary arrays elsewhere. Activations enter from the left edge, propagate one column per cycle, multiply against the resident weight at every cell, and partial sums flow downward into accumulator queues at the bottom. Once data enters the array no memory access occurs: each weight is reused for every activation that passes through, each activation is reused 128 (or 256) times across the row. Data reuse is wired into the silicon, not arbitrated by a cache. The dominant cost in computing is not the multiplication itself (a few picojoules) but reading and writing memory at 100–1000× more energy per access; the systolic array deletes that cost by construction. The trade-off is underfill: a 128×128 matmul on a 256×256 array wastes 75% of the silicon, so XLA tiles, pads, and schedules dimensions to multiples of 128 (or 256 on v6e+) and the model code is written with those quanta in mind.

The VPU is the second-fiddle compute engine but is in many ways the more interesting microarchitectural object: every TPU is a 2D vector machine, not a 1D SIMD machine. The VPU's register file holds 2D VREGs. On v4/v5p the shape is (8, 128): 128 lanes wide, 8 sublanes deep, 32 (v4) or 64 (v5p) registers per core, with 4 independent floating-point ALUs per (lane, sublane). The lane axis matches the systolic array's input width, so the lane count presumably widened to 256 alongside the MXU on Trillium and Ironwood; Google has not published post-v5p VPU dimensions. The sublane axis lets the VPU stream tiles through the MXU at one matmul per X clocks (where X is the sublane dimension). Most of the speedup in modern TPU programs comes from VPU/MXU overlap: quantisation, layernorm, softmax, activation, and bias-add all run on the VPU in the same cycles the MXU is running the matmul behind them. Cross-lane reductions (the awkward case for any 2D vector ISA) are handled by the XLU: slow, expensive, and a known compiler hot spot. Layout transforms that misalign with the 2D shape are absorbed by the dedicated Transpose/Permute Unit, sparing a round-trip through memory.

The Scalar Unit is the smallest block and arguably the most consequential: a single-threaded, dual-issue integer ALU with 32 32-bit registers and 4 KiB of SMEM for control state, paired with an Imem holding the program. It is the only block that does instruction fetch; every cycle it pulls a 322-bit VLIW bundle, executes its own two scalar slots locally (address arithmetic, loop counters, branches, sync-register checks), and dispatches the remaining six slots to the rest of the chip: 2 vector ALU (VPU), 2 vector load/store (HBM↔VMEM DMA), 2 matrix (push/pop the MXU queue). Synchronisation between blocks is explicit: sync flags track when MXU and VPU pipelines are busy, and the compiler inserts barrier checks rather than the hardware tracking dependencies. The Scalar Unit is what makes the rest of the TensorCore look like fixed-function dataflow: every cycle, one place decides what eight things happen, and there is no dynamic reorder buffer to undo a bad decision.

Memory

The on-chip memory hierarchy is the same idea as the compute side: there are no caches, every level is software-managed. Off-chip is HBM (16 GB on v2/v5e, 32 GB on v3/v4/v6e, 95 GB on v5p, 192 GB on Ironwood, 216–288 GB on the v8 generation), and on-chip is a hand-stacked tier of explicitly-addressable scratchpads. Closest to compute is VMEM, the vector scratchpad feeding both the VPU and the MXU input queues, sized 32 MiB on v4, 128 MiB on v5e, and stretched to 384 MiB on the inference-tuned v8i precisely to hold an entire KV cache on chip. Above it sits CMEM, introduced with v4 at 128 MiB: a slower, larger SRAM staging area between HBM and VMEM that absorbs fused-op intermediates. The Scalar Unit has its own SMEM (~10 MiB for control state on v4) and a tiny scalar register file. Every tensor in the program is pinned to one tier at compile time; XLA's buffer-assignment pass schedules DMAs across tiers so that data arrives just before the cycle that consumes it. The hardware does no prefetching, no eviction, no coherence; when the compiler gets it right, the array never stalls; when it gets it wrong, there is no fallback path.

SparseCore

The block outside the TensorCore that breaks the systolic mould is SparseCore, introduced with v4. Recommender and ranking models live on embedding lookups (billions of indices into vast tables), and the access pattern is the inverse of dense matmul: irregular, indirect, all-to-all. A 256×256 systolic array is exactly the wrong shape. SparseCore is a dataflow processor with 16 compute tiles and dedicated SPMEM scratchpads, sitting alongside the TensorCore and absorbing scatter, gather, and segmented-reduce primitives plus the data-dependent all-to-all traffic that sharded embedding tables generate. This achieves 5–7× speedup on embedding-heavy models for ~5% of die area and power. v4 shipped 4 SparseCores per chip, v5p kept that count, Trillium dropped to 2, and Ironwood went back to 4 (2 per chiplet on its dual-die layout). The v8i (Zebrafish) inference chip removes SparseCore entirely and replaces it with a CAE (Collectives Acceleration Engine) on the I/O chiplet: different problem (collective reductions during autoregressive decode), same idea (carve a small accelerator off the main core to absorb a workload the systolic array is the wrong shape for).

Numerics

TPU v1 was INT8-only inference; v2 switched this for BF16 as the canonical training format: same dynamic range as FP32, half the memory, no loss-scaling tricks. v4 reintroduced native INT8 support. Ironwood then added native FP8 support (both E4M3 and E5M2) for ~2× the throughput of BF16 in the same area. v8 adds native FP4 plus block-scale multiplication inside the MXU itself, which deletes the VPU dequant overhead that Ironwood still paid. Stochastic rounding is hardware-supported on every modern TensorCore: rounding decisions made by the lower mantissa bits acting as a probability, which preserves the expected value of low-precision accumulations across long training runs and is one of the small details that lets BF16/FP8 close the accuracy gap to FP32.

At the chip boundary sit the ICI ports themselves (4 ports on the 2D-torus chips v2/v3/v5e/v6e, 6 on the 3D-torus flagships v4/v5p/v7/8t), and the DCN NIC for scale-out. From a chip-level perspective the ICI ports look like just another set of DMA engines the Core Sequencer can target inside a VLIW bundle: a remote-tensor send is the same instruction class as a VMEM-to-HBM transfer, and the compiler treats collectives as part of the same overall schedule it builds for compute and local memory.

Bets
Bet 1: Systolic array. Matmul dominates the workload, so spend the silicon on a systolic array.
Bet 2: Software scratchpads. Compute is cheap and memory is expensive, so reuse data in the wires of the array and replace caches with software-managed scratchpads.
Bet 3: Compiler scheduling. The workload is statically predictable, so move scheduling into the compiler: VLIW issue, no speculation, no out-of-order, no dynamic scheduler.
Bet 4: MAC-only silicon. Power matters more than peak, so delete every transistor that does not multiply-add: every cache tag, every branch predictor, every reorder buffer.
Bet 5: Dedicated off-array engines. The dense matmul array is the wrong shape for some real workloads (embeddings, collectives), so carve out small dedicated engines (SparseCore, CAE) rather than warp the main core to fit them.
SCALING

The TPU's scale-up story is the inverse of NVIDIA's. Where NVLink + NVSwitch make every other GPU's HBM look like local memory (a hardware-managed coherent address space), Google's ICI is message-passing. There is no remote-load semantics, no cache coherence, no crossbar. Every multi-chip operation is an explicit collective compiled by XLA. The scale-up domain is tied together not by a switch fabric but by a torus (chips wired directly to their neighbours with edge wrap) and stitched at the rack boundary by optical circuit switches.

Scale-up
Wire chips directly to one another in a 2D or 3D torus over ICI. XLA emits SPMD collectives that tightly choreograph thousands of TPUs as one program. No coherence, but huge bisection bandwidth at low latency.
Scale-out
Network pods together over the datacenter fabric: many more chips than fit in one ICI domain, at lower per-chip bandwidth. Today: Virgo handles east-west TPU traffic (v8t+), Jupiter handles north-south. Multislice + Pathways orchestrate SPMD across pods.
Scale-up

ICI links come straight out of the TPU die: high-speed serial lanes, direct-attach copper inside a 64-chip cube (a 4×4×4 arrangement that lives in one liquid-cooled rack), optical between cubes. Per-chip aggregate ICI bandwidth has scaled from ~250 GB/s on v2 to 1.2 TB/s bidirectional on Ironwood, and 2× that on v8t. Topology alternates by generation: 2D torus on the efficiency-tuned chips (v2, v3, v5e, v6e), 3D torus on the flagships (v4, v5p, v7, v8t).

The piece with no NVIDIA analogue is the Palomar OCS: a 3D-MEMS optical circuit switch that sits between cubes. Tiny mirrors physically rotate to map any input fibre to any output. A v4 superpod uses 48 Palomar switches to wire 64 cubes (4,096 chips) into one 3D torus; v5p and Ironwood scale the same scheme up. Reconfiguration is millisecond-class, not nanosecond, but that's fine, because OCS is circuit-switched: pick a topology at job start, run it for a week, then reconfigure for the next workload. Three problems collapse into one component: topology reconfiguration per workload (twisted tori give up to 70% better bisection), sub-pod slicing on demand, and fault tolerance (when a chip dies, the OCS optically swaps in a spare cube and the run continues without losing the ICI domain).

This makes the superpod the unit of scale-up: equivalent in role to NVIDIA's NVL72, two orders of magnitude bigger. v4 was 4,096 chips; v5p, 8,960; Ironwood (TPU v7) is 9,216 chips arranged as 144 cubes of 64, presenting 1.77 PB of HBM (~68 PB/s) and 42.5 ExaFLOPS FP8 as one coherent ICI domain.

TPU 8t (Sunfish) stretches this to 9,600 chips, 2 PB of HBM (~62 PB/s), and 121 ExaFLOPS FP4. TPU 8i (Zebrafish) has 1,024 chips, ~295 TB of HBM (8.8 PB/s), and ~10 ExaFLOPS FP4. 8i replaces torus with a new hierarchical high-radix topology called Boardfly (4-chip ring → 8-board group → up to 36 groups linked by OCS), cutting all-to-all latency in half. This is designed for MoE inference. A 3D torus excels when collectives are nearest-neighbour (ring all-reduce uses every link every cycle), but MoE expert routing is the opposite pattern, all-to-all: every chip ships unique fragments to every other, and round-trip latency is bounded by the longest-hop pair. A 1,024-chip 3D torus has a 16-hop diameter; Boardfly's ring → group → OCS hierarchy compresses that to 7.

Scale-out

Through TPU v7, scale-out ran over a single fabric: Jupiter, all-optical at the spine since 2022 via Apollo OCS, the same 3D-MEMS family as Palomar, scaled across the building. Google uses the same primitive (optical circuit switching) at every layer from rack to datacenter spine; that is the architectural signature nobody else has. Jupiter today carries 13 Pb/s of bisection per building.

With TPU 8t, scale-out split into two fabrics. East-west TPU-to-TPU traffic moved to Virgo, a dedicated accelerator fabric; Jupiter retained the north-south role: storage access, general compute, and inter-site scaling. Virgo is a flat, two-layer, non-blocking topology built on high-radix switches: every TPU is at most two switches from any other. One Virgo cluster links 134,000+ TPU 8ts at 47 Pb/s of bisection (4× the per-chip bandwidth and 40% lower unloaded latency than the prior DCN generation), with multi-planar fault isolation and sub-millisecond telemetry that lets the scheduler kill stragglers before they wreck a step. The architectural payoff is that each layer can now evolve independently: scale-up, east-west scale-out, and front-end can iterate on different cadences without rewiring the others.

Per-chip scale-out bandwidth is on the order of 100 Gbps on Ironwood, and 4× that on v8t, but still two orders of magnitude less than per-chip ICI. This bandwidth gap dictates partitioning: tensor parallelism and MoE expert routing stay inside ICI; data parallelism and pipeline parallelism cross the scale-out fabric.

Google's Multislice framework, plumbed into XLA, lets a single SPMD program span multiple slices in different pods; the compiler emits hierarchical collectives (ring all-reduce inside each slice, higher-level reduce across). The structure is exactly the trick for hiding the ICI/DCN bandwidth gap: as much work as possible stays inside the slice over fast ICI, leaving only the cross-slice residual to pay the slow-fabric cost.

Above this sits Pathways. Where NCCL + Slurm + Megatron-style schedulers drive SPMD from many controllers, Pathways drives the entire job from one client and virtualises multiple "islands" (pods with their own ICI domains) connected over DCN. It does gang scheduling, elastic training (when a slice fails, OCS reshapes the topology and Pathways resumes from the last checkpoint on the new shape), and cross-region orchestration. Gemini Ultra was the first frontier model trained across multiple datacenters; Pathways stitches them into one synchronous SPMD job.

The philosophy: the compiler is the scheduler, the torus is the topology, and the optical switch is the universal reconfigurable substrate, at every layer from rack to datacenter.

SOFTWARE

The TPU stack is compiler-driven where CUDA is kernel-driven. On a GPU, the developer writes the kernel and the framework strings kernels together; the compiler's job is mostly local. On a TPU, the developer writes a numerical program in JAX and XLA is responsible for everything below it: which operations fuse, where each tensor lives, how it is laid out across the 2D vector registers, when DMAs from HBM to VMEM issue, how the 322-bit VLIW bundles are scheduled, how the program shards across thousands of chips. There is no hardware fallback: no warp scheduler, no cache, no out-of-order engine to paper over a bad schedule. The compiler is the system. The trade-off is the central one of the architecture: XLA gets closer to the theoretical ceiling without hand-tuning, but closing the remaining gap is harder.

The compilation path is JAX → JAXpr → StableHLO → HLO → LLO → VLIW bundles. JAX traces a Python function into a typed functional IR (JAXpr) under jit, lowers it to StableHLO (the OpenXLA-standardised, versioned op-set of ~100 statically-shaped primitives that all front-ends now emit), which XLA ingests as HLO and runs through its pass pipeline: operation fusion (collapse pointwise + reduction + matmul into one kernel so intermediates never hit HBM), layout assignment (decide the 2D tiling of every tensor so it streams into the MXU without a transpose: substantially harder than on 1D SIMD machines because both the registers and the systolic inputs are 2D), buffer assignment (every tensor pinned to either VMEM, CMEM, or HBM with overlap windows pre-computed), SPMD partitioning, and finally a VLIW scheduler that fills all eight slots of every bundle. HLO lowers to LLO (Low-Level Optimizer), the TPU-specific IR, and LLO emits the final VLIW stream. A well-compiled program overlaps MXU systolic execution, VPU element-wise math, and HBM↔VMEM DMA in the same bundle every cycle.

Multi-chip execution is SPMD: one program, sharded data, hierarchical collectives, emitted by GSPMD (now being replaced by Shardy, an MLIR-native successor that lands as the default in early 2026). The user expresses sharding declaratively with Mesh + PartitionSpec annotations on a few key tensors; the compiler propagates shardings through the rest of the graph and inserts all-reduces, all-gathers, and reduce-scatters where the layout changes. When the compiler picks a wrong collective, shard_map drops the user into manual SPMD (per-device code with explicit local shapes and explicit collectives), composable inside jit so a single kernel can be hand-partitioned without giving up auto-partitioning everywhere else. This is the inverse of the PyTorch idiom: FSDP and DeepSpeed wrap the model in a runtime that issues collectives at module boundaries; GSPMD/Shardy partitions the whole graph as a compiler problem.

Pallas is the escape hatch: JAX's kernel-writing language, broadly the TPU equivalent of Triton on GPUs. Pallas kernels are written in JAX-flavoured Python, lowered through Mosaic (the MLIR-based TPU backend) to LLO, and embedded back into HLO as a custom op. It exists because XLA cannot always synthesise the optimum for novel attention variants, fused MoE dispatch, or anything that demands manual VMEM tiling and DMA scheduling: a FlashAttention-class optimisation, where the win is in the schedule and not the algebra. Pallas:Mosaic-GPU targets H100/Blackwell with the same front-end, so a kernel author can write once and lower to either substrate. The library tier above this is uniformly JAX-native: Flax NNX for modules, Optax for optimisers, Orbax for asynchronous distributed checkpointing, Grain for input pipelines, Tunix for post-training/RL, Qwix for quantisation. Google's reference training stacks (MaxText for LLMs including DeepSeek-V3-class MoE, and MaxDiffusion for Flux, Wan 2.1) sit at the top, in pure JAX; Pathways sits beneath, exposed to the user as pathwaysutils, so a single Python client can drive a job across thousands of chips and several pod-islands without giving up the JAX programming model.

The PyTorch path is real but second-class. torch_xla uses a LazyTensor mechanism: every PyTorch op records into an HLO graph that compiles on the next barrier, with the compiled artifact cached by graph-shape hash. PyTorch/XLA 2.x added GSPMD-style sharding annotations, torch.compile integration through an XLA backend, a JAX bridge, and (PyTorch/XLA 2.7) C++11-ABI builds with materially faster tracing. The gap to JAX is real (JAX's primitives map more cleanly to StableHLO, and complex parallelism strategies are better-covered), which is why vLLM TPU (powered by the tpu-inference plugin announced at Cloud Next 2025) lowers every model, JAX-defined or PyTorch-defined, through a unified JAX→XLA path. TorchTPU, announced April 2026, is Google's response: a native PyTorch experience with eager mode, torch.distributed, and torch.compile over XLA, on track to replace torch_xla.

Compared to CUDA, the TPU ecosystem is centralised, not sprawling. Almost everything below the framework (XLA, JAX, Flax, Optax, Pallas, MaxText, Pathways, Shardy, Mosaic) is open-sourced by Google itself, evolving in lockstep with the silicon. There are far fewer third-party kernels than CUDA's decades of accumulation; the moat is thinner where the workload looks weird, deeper where the workload looks like Gemini. The recent Ironwood (v7) "codesigned AI stack" language is the explicit framing: chip, ICI fabric, OCS, XLA, Pathways, Pallas, MaxText, vLLM, and Pathways co-released as one product, with v8t/v8i continuing the same model under a single tpu-inference lowering path. Triton and torch.compile narrow the gap on the NVIDIA side (kernel-driven and compiler-driven are converging), but the philosophical poles are still real: on TPU the compiler is the only interface that matters; on GPU the compiler is one of several.

AMD GPU

The AMD Instinct GPUs are built on a different bet from NVIDIA: where NVIDIA each generation expands what each SM can do, AMD has held the Compute Unit conservative since GCN (2012) and reinvested into the package: matched or beat the contemporary NVIDIA flagship on HBM capacity every generation since 2021; the first 3D-stacked datacenter GPU (CDNA 3); the first coherent CPU+GPU APU (MI300A); and an open ecosystem (ROCm, HIP, OCP MX, UALink).

GENEALOGY
2018
Vega 20MI50, MI60
First 7 nm GPU; 1:2 FP64 vector throughput. Last GCN-family Instinct before the CDNA / RDNA.
2020
CDNAMI100
First MFMA matrix cores; graphics fixed-function silicon dropped entirely. Native BF16.
2021
CDNA 2MI210, MI250, MI250X
First MCM Instinct via dual-GCD package; full-rate FP64 matrix
2023
CDNA 3MI300A, MI300X
First 3D-stacked chiplet GPU: XCDs hybrid-bonded onto IODs via TSV; FP8; Infinity Cache; coherent CPU+GPU APU on MI300A; powered El Capitan.
2024
CDNA 3 refreshMI325X
Same compute, HBM3E refresh: 256 GB at 6.0 TB/s.
2025
CDNA 4MI350X, MI355X
Native FP4 / FP6 with OCP MX microscaling; per-CU FP64 cut roughly in half; first generation tilted toward AI density over HPC.
2026
CDNA NextMI430X, MI440X, MI455X
HBM4; the Helios rack (72-GPU MI455X flagship over UALoE at launch, native UALink from 2027): AMD's first answer to NVL72.
ARCHITECTURE
Terminology
AMD	NVIDIA
Compute Unit (CU)	Streaming Multiprocessor (SM)
SIMD	SM Sub-Partition
SIMD Lane	CUDA Core (FP32 ALU)
Wavefront (wave64)	Warp (warp32)
Matrix Core	Tensor Core
MFMA	mma.sync / wgmma / tcgen05.mma
VGPR / SGPR	Register File
LDS (Local Data Share)	SMEM (Shared Memory)
Infinity Fabric	NVLink

Where NVIDIA's architectural ambition lives inside each SM (new tensor primitives, new async machinery, new operand stores each generation), AMD's lives between the CUs, in how many of them can be bonded into a single coherent package. The CU itself is conservative: four 16-lane SIMDs, one shared scalar unit, a 64 KB Local Data Share, an L1 vector cache, a per-SIMD VGPR file with a CU-shared SGPR pool, and (since CDNA 1) a Matrix Core running MFMA. The shape hasn't meaningfully changed since GCN in 2012; what scales is the count (120 CUs on MI100, 220 on MI250X, 304 on MI300X, 256 on MI355X) and the packaging that bonds them. A wavefront of 64 threads streams across the 16 SIMD lanes over 4 cycles, with many wavefronts resident per SIMD that the scheduler switches between to hide stalls. There's nothing exotic in here; what's interesting about CDNA is everything outside the CU.

Compute

Inside the CU, the SIMDs and the Matrix Core run side by side. The four SIMDs handle everything element-wise: activations, normalization, residuals, address arithmetic. The Matrix Core handles the matmul. The split is the same as NVIDIA's CUDA Cores / Tensor Cores split, but the matrix abstraction has evolved on a very different curve.

NVIDIA's Tensor Core climbed the thread hierarchy: a 32-thread warp on Volta, a 128-thread warp-group on Hopper, a single thread plus an optional two-SM cluster on Blackwell. AMD's Matrix Core stayed put. Every generation of MFMA (from MI100 in 2020 through MI355X in 2025) is wavefront-scoped: one wave64 issues a single matrix op (V_MFMA_*), the four SIMDs cooperate to drive it, and operands come from the wavefront's register file: A and B from VGPRs, C and D usually from the dedicated AGPR file. The instruction got faster and the format set widened, but the issuer and the scope did not. The one feeder-side concession came with CDNA 4: a dedicated MFMA transpose-load from LDS that hands operands to the Matrix Core already in the layout it wants, small in spirit to NVIDIA's TMA, but the matrix op itself stayed wave-issued.

The throughput numbers tell the format story directly. CDNA 1 launched in 2020 with FP32 / FP16 / BF16 / INT8 at 256 / 1024 / 512 / 1024 FLOPs per CU per cycle, with native BF16 support alongside A100. CDNA 2 doubled the FP64 path to a full-rate matrix at 256 FLOPs/CU/cycle: uniquely AMD, the bet that put MI250X into Frontier. CDNA 3 reached parity with H100 on FP8 at 4,096 FLOPs (E4M3 + E5M2), added 2:4 structured sparsity, and added a TF32-equivalent path that runs FP32 matmul at the FP64-matrix rate by truncating mantissas. CDNA 4 doubled again to FP4 at 16,384 FLOPs and FP6 with OCP MX block-scaling, and added mixable A/B precision in one MFMA: FP8 × FP4, for example. The same generation halved per-CU FP64 throughput, the first AMD chip to trade HPC density for AI density rather than ship both.

The wavefront-scope decision shows up in two costs.

Divergence. A half-empty wave64 wastes 32 lanes where a half-empty warp32 wastes 16. For workloads with mostly-uniform control flow this is a small price; for irregular workloads it hurts.

Overlap. NVIDIA's asynchronous, descriptor-driven matmul decouples issue from execution: the issuing thread fires the instruction and moves on; the Tensor Core runs in the background; the warp can run softmax, apply a mask, or pre-load the next tile while the previous matmul is still in flight. AMD's wavefront-collective MFMA gives the wave no equivalent: the same wave that issued the matmul can't simultaneously do meaningful vector work while it's pending. Overlap is possible across separate wavefronts, but has to be staged in software with explicit wavefront barriers, which is more fragile and consumes more wave slots and registers.

How much this matters depends on the workload. Pure dense GEMM (DGEMM, the inner loop of large-batch training) has nothing useful to do during the matmul; both engines saturate; async buys little. These are exactly the workloads where AMD has historically led at exascale HPC (Frontier on MI250X, El Capitan on MI300A). Transformer attention (FlashAttention-3, FA4) interleaves matmul with softmax, masking, and KV-cache reads, and the async overlap is the whole structure of those kernels. AMD has to recreate the pipeline by hand, which lags NVIDIA's hardware-level support. MoE dispatch, paged attention, speculative decode sit in the same camp: address-irregular work that wants to run alongside the matmul.

NVIDIA's matrix-instruction abstraction has moved further across generations (warp → warp-group → single-thread async + cluster), and AMD hasn't followed.

Memory

AMD's memory hierarchy has fewer general-purpose tiers than NVIDIA's, with one giant cache that NVIDIA does not have at all. From the CU outward: a 64 KB LDS scratchpad (software-managed, 32-bank, AMD's analog of NVIDIA's SMEM), a vector L1 (16 KB on early CDNA, 32 KB from MI300X onward), a per-XCD L2 of a few MB. The L2 isn't coherent across XCDs, though; coherence happens one tier above L2.

That tier is the Infinity Cache: 256 MB on MI300X, distributed across the four IODs, 16-way set-associative, ~12 TB/s measured, more than twice MI300X's 5.3 TB/s of HBM3. It originated on RDNA gaming GPUs to compensate for narrow GDDR buses; AMD reused the IP for AI on CDNA 3, where attention KV reuse and weight reuse fit a large LLC unusually well. NVIDIA bet on bigger HBM bandwidth instead (8 TB/s on B200, scaling with HBM4 on Rubin), and AMD bet on the cache.

Off-chip, the HBM capacity grows aggressively: 32 → 64 → 128 → 192 → 256 → 288 GB across MI100 / MI210 / MI250X / MI300X / MI325X / MI350X, matching or exceeding the contemporary NVIDIA flagship in every generation from 2021 onward. The bet is that inference workloads are increasingly capacity-bound, and that the chip with more memory wins.

Numerics

The format trajectory tracks the precision-halving pattern that everyone in AI silicon shares: FP32 → FP16 → FP8 → FP4, restoring accuracy each step with finer-grained scaling. The AMD-specific axis is openness. CDNA 4's FP4 and FP6 use OCP MX block-scale multiplication: the same numeric format as Blackwell's MXFP4 and TPU v8's MXU, but specified by an open consortium (AMD, NVIDIA, Intel, Meta, Microsoft, Qualcomm, ARM) that AMD helped found, rather than by any single vendor. The format that ships in MI355X is identical to what ships in B200 and TPU v8.

The CDNA 4 inflection deserves its own line: per-CU FP64 throughput halved. MI300X served training, HPC, and inference together; MI355X is an AI chip first. The full-rate FP64-matrix bet that powered Frontier hasn't been killed, but it's no longer carrying the weight.

Chiplets

The packaging is where CDNA stops looking like NVIDIA and starts being something else.

CDNA 1's MI100 was monolithic 7 nm. CDNA 2's MI250X was AMD's first multi-chip GPU: two Aldebaran GCDs side-by-side on a 2.5D EFB organic substrate, joined by 4 in-package Infinity Fabric links at 400 GB/s aggregate, but presented to software as two separate GPUs.

CDNA 3 is the move that changed everything. Eight XCDs (TSMC N5, ~115 mm² each) are stacked in 3D via TSMC SoIC hybrid bonding (sub-micron-pitch TSVs, no microbumps) onto four I/O dies (TSMC N6) below. The IODs carry the Infinity Cache, the HBM3 PHYs, the Infinity Fabric links, and PCIe Gen 5; each IOD hosts two XCDs above and two HBM stacks beside. The four IODs are stitched by Infinity Fabric AP at 4.8 TB/s bisection, so the 153-billion-transistor package looks like one GPU to the kernel: cache and address space unified at the IOD layer. NVIDIA stayed monolithic through H100 and only went to two reticle-limit dies on B200 via 2.5D CoWoS-L. AMD got to 3D stacking a generation earlier, at smaller per-die area: different bets on the same packaging frontier.

The MI300A APU pushed the bet further. Replace 2 of the 8 XCDs with three Zen 4 CCDs, leave HBM and Infinity Cache and the IODs intact, and let CPU and GPU share one physical address space backed by HBM3 with hardware coherence. There is no host-device copy. There is no pinned memory. There is no PCIe in the path. Zen 4 cores and CDNA 3 XCDs read from the same pages. NVIDIA's Grace-Hopper bridges two packages over NVLink-C2C; MI300A is one. El Capitan (11,039 nodes of 4× MI300A) is the deployment that justified it.

On CDNA 4's MI355X, eight XCDs are still 3D-stacked via SoIC onto base dies below, but the XCDs move to TSMC N3P with 32 active CUs apiece (256 total, vs 304 on MI300X; the per-XCD count dropped to free area for bigger Matrix Cores and a 160 KB LDS). The four MI300X IODs collapse to two, each twice as wide on TSMC N6, hosting four XCDs above and four HBM3E stacks beside. Each IOD now carries its own 128 MB slice of the 256 MB Infinity Cache, half the HBM PHYs, its share of the Infinity Fabric links, and PCIe Gen 5. Infinity Fabric AP between the two IODs runs at 5.5 TB/s bisection (~15% above CDNA 3), and the eight stacks shift to 12-Hi HBM3E for 288 GB at 8 TB/s, 50% more capacity than MI300X on the same pin count. The package totals 185 billion transistors and still presents as one GPU to the kernel.

Bets
Bet 1: HPC then AI. HPC and AI are the same bet until they aren't: ship full-rate FP64 matrix from CDNA 2 through CDNA 3, then bifurcate at CDNA 4 once inference economics decisively favour low precision.
Bet 2: Memory capacity. Match or beat the contemporary NVIDIA flagship on HBM capacity every generation since 2021, and add a 256 MB last-level Infinity Cache that absorbs the reuse H100 must hit HBM for.
Bet 3: Early 3D-stacking. 3D-stack compute on cache and I/O before NVIDIA does: TSMC SoIC hybrid-bonded XCDs on IODs in 2023, while NVIDIA stayed monolithic until 2025.
Bet 4: Coherent CPU+GPU. The MI300A APU is the most chiplet-aggressive product ever shipped, and the El Capitan deployment is the proof.
Bet 5: Open scale-up fabric. UALink and OCP MX over NVLink and proprietary FP4.
SCALING

The memory bet has a scaling consequence: when 8 MI300X chips hold 1.5 TB of HBM and 8 MI350X chips hold 2.3 TB, you can fit a 405B-parameter model in FP8 inside a single 8-GPU box (weights, KV cache, and headroom for longer contexts and bigger batches), where the same model on 8× H100 (640 GB) requires careful sharding. For inference workloads through 2024–2025, AMD's scale-up didn't need to match NVL72 at the rack to be competitive at the box. For training at the frontier, it did, and AMD didn't have an answer until 2026.

Scale-up
Bind GPUs into one coherent memory domain over Infinity Fabric. Through MI355X this stops at the 8-GPU OAM box (896 GB/s mesh per GPU). Helios extends to a 72-GPU rack via UALink, tunnelled over Ethernet at launch (UALoE) and native from 2027.
Scale-out
Network those domains over Ethernet. No InfiniBand. Pensando NICs (Pollara 400, Vulcano 800) implement the Ultra Ethernet Consortium's UET RDMA transport; Broadcom Tomahawk 6 supplies the switch ASIC and CPO.
Scale-up

Through MI355X, AMD's scale-up means an 8-GPU OAM platform over Infinity Fabric. Each MI300X has 7 IF links (one to every peer in the box) at 128 GB/s bidirectional, giving 896 GB/s of per-GPU mesh bandwidth in a fully-connected all-to-all topology. MI350X bumps each link to 153.6 GB/s (~1,075 GB/s per GPU) but keeps the 8-GPU shape. The platform conforms to OCP's UBB 2.0: the same mechanical socket as an NVIDIA HGX baseboard, so server vendors can ship AMD or NVIDIA on the same chassis without redesigning the system.

What AMD didn't ship through MI355X was a rack-scale equivalent of NVL72. Customers running larger models on MI300X clusters scaled across multiple 8-GPU boxes via Ethernet, paying scale-out latency for what NVIDIA users could keep inside scale-up. This was the gap that mattered for training, and the gap that Helios is built to close.

Helios is AMD's first rack-scale scale-up domain, shipping in 2H 2026 alongside MI455X. 72 GPUs per rack, ~31 TB HBM4, 1.4 PB/s aggregate HBM bandwidth, 2.9 ExaFLOPS FP4 / 1.4 ExaFLOPS FP8, 260 TB/s of scale-up bandwidth, 43 TB/s of scale-out. The form factor is Open Rack Wide (ORW) (Meta's 2025 OCP submission, double-wide and liquid-cooled), not an AMD-proprietary chassis. Building on Meta's reference design rather than designing a rack from scratch is a deliberate AMD bet: any hyperscaler standardised on ORW can deploy Helios without bespoke datacenter facilities work.

The fabric is UALink: Ultra Accelerator Link, an open consortium standard AMD helped found alongside Apple, AWS, Cisco, Google, HPE, Intel, Meta, Microsoft, and Synopsys. UALink 200G 1.0 (April 2025) defines a 200 GT/s lane and 800 Gbps per direction, with switched topologies scaling to 1,024 accelerators per pod. The promise is a cache-coherent interconnect comparable to NVLink but unowned: any vendor can build a UALink switch, any accelerator can talk UALink, the standard belongs to the consortium rather than to the strongest seller.

The catch: native UALink switching silicon won't ship in volume until 2027. Astera Labs' Scorpio, plus competing parts from Auradine, Enfabrica, and Xconn, are all targeting late-2026 / 2027 deployment. Helios at launch uses UALoE (Infinity Fabric tunnelled over standard Ethernet) as a stopgap, preserving the programming model while waiting for native UALink fabric. Native UALink switching arrives with MI500 in 2027. At launch, Helios is closer to a fast Ethernet-tunnelled coherent cluster than to NVL72's true cache-coherent NVLink domain: a real concession on the timeline, paid in exchange for hitting 2H 2026 with a competitive product.

Scale-out

AMD does not ship InfiniBand. The whole scale-out stack is Ethernet, anchored on a different open standard: the Ultra Ethernet Consortium (UEC).

UEC 1.0 (released June 2025) defines Ultra Ethernet Transport (UET): a new RDMA transport over standard Ethernet, with packet spraying, SACK-based selective retransmit, and modern congestion control. UET is not RoCEv2 (which encapsulates InfiniBand transport in Ethernet frames); it's a clean redesign of RDMA semantics for scale-out AI fabrics. AMD is a founding member alongside Broadcom, Cisco, Meta, and Microsoft. Same play as UALink: own the standard, not the implementation.

The NIC is Pensando, the networking startup AMD acquired in 2022. Pollara 400 is the current AI NIC: 400 GbE, P4-programmable, UEC-ready, PCIe Gen 5, paired with MI300X / MI355X. Vulcano 800 ships in 2026 alongside MI455X: UEC 1.0 compliant, PCIe Gen 6, native UALink interfaces, 8× the per-GPU scale-out bandwidth of Pollara. Salina 400 is the front-end DPU (16× Arm Neoverse-N1, dual 400 GbE) for storage / SDN / firewall, equivalent to NVIDIA's BlueField, distinct from the AI back-end NIC.

The switch silicon, though, isn't AMD's. Helios's 43 TB/s scale-out fabric runs through Broadcom Tomahawk 6: a 102.4 Tbps Ethernet switch ASIC with co-packaged optics ("Davisson"). AMD has no in-house CPO and no in-house switch ASIC; the optical layer is partner silicon. NVIDIA owns its entire stack: InfiniBand, Spectrum-X Ethernet, ConnectX, BlueField, Quantum-X Photonics CPO, all in-house. AMD owns one tier (NIC + DPU via Pensando) and bets that open standards plus best-of-breed partner silicon will outpace vertical integration.

The industry has moved AMD's way. Dell'Oro reports Ethernet handled more than twice the AI scale-out fabric volume of InfiniBand in 2025; AWS, Microsoft, Meta, Oracle, and xAI have all standardised on Ethernet for their AMD-based AI clusters. The remaining question isn't whether Ethernet can match InfiniBand on RDMA semantics (UEC closes that gap) but whether Helios can close the rack-scale gap with NVL72 fast enough to win frontier training workloads that today default to NVIDIA.

SOFTWARE

ROCm is the open-source counterpoint to CUDA. Where NVIDIA's stack is proprietary and vertically integrated (cuBLAS, cuDNN, TensorRT-LLM ship as binary blobs maintained by NVIDIA alone), ROCm is GitHub-native and bets on open standards (PyTorch, Triton, vLLM, OCP MX) rather than a walled-garden library set. The software gap with NVIDIA is real, but AMD's strategy is to close it through the open community rather than build a parallel CUDA stack from scratch.

The bottom of the stack is HIP, AMD's CUDA-compatible C++ runtime. hipify translates CUDA source to HIP automatically. Bulk HPC code (HACC, Laghos, QMCPack) ports at 80–95% out of the box: the CORAL-2 number. Modern AI kernels port worse: anything that reaches for Hopper- or Blackwell-specific primitives (TMA descriptors, wgmma, tcgen05.mma) has no clean ROCm analog and has to be rewritten by hand.

Above HIP sits a library tier structured to mirror NVIDIA's, one-to-one by name: rocBLAS for cuBLAS; hipBLASLt for cuBLASLt; MIOpen for cuDNN; RCCL for NCCL; Composable Kernel (and its modern ck-tile DSL) for CUTLASS; rocprofv3 / rocprof-sys / rocprof-compute for the Nsight family. There is no first-party analog of TensorRT-LLM, though. AMD's answer is to back vLLM as the open-source serving engine and ship AMD-specific operators (AITER) that plug into it; the dedicated ROCm CI for vLLM took test-pass rate from 37% to 93% across early 2026.

The PyTorch path is first-class. Eager-mode PyTorch has run on ROCm since 2018; torch.compile lowers through Triton, and Triton's ROCm backend (with AOTriton for ahead-of-time math kernels) is upstream. There is no XLA-style intermediate IR; ROCm compiles direct to HIP / Triton / CK. As Triton becomes the default kernel path in PyTorch, much of the porting cost evaporates: a kernel that runs through torch.compile works on both CUDA and ROCm without source change. This is the architectural bet beneath AMD's open strategy: Triton's Python DSL becomes the cross-vendor lingua franca that sidesteps the need for a CUDA-equivalent kernel ecosystem.

FlashAttention is the load-bearing case. FA2 is production on MI300X via Composable Kernel; PyTorch defaults to CK or AOTriton on ROCm. FA3 (Hopper-tuned) is partially supported via AITER + CK, but Dao-AILab's canonical implementation remains CUDA-only. FA4 (Blackwell, March 2026) has no ROCm port at all. HipKittens, Hazy Research's MI355X port of ThunderKittens (November 2025), claims forward-pass parity with hand-tuned AITER in ~500 lines. The pattern: open-source academic kernels close the AMD tail months after NVIDIA's, not years.

Production deployment has validated the strategy. Microsoft Azure's ND MI300X v5 instances went GA in May 2024; OpenAI runs GPT inference on them. Meta ships Llama 3 / Llama 4 inference on MI300X via the Grand Teton platform. Oracle OCI's BM.GPU.MI300X.8 went GA in September 2024, with MI355X following in 2026. These are real serving fleets at hyperscaler scale, not pilots.

The honest gap is still real. Independent benchmarks (Phoronix, March 2026) put ROCm 7.2 at 10–25% slower than equivalent CUDA on standard PyTorch / vLLM / SGLang workloads, at equivalent precision on equivalent silicon. ROCm 7 reached feature parity but not perf parity. The FlashAttention-4 tail (research code that exploits Blackwell's newest primitives) is where NVIDIA's moat remains most durable; it has no clean ROCm analog and waits for a hand-written AITER kernel or HipKittens-class community port. NVIDIA ships engineers inside frontier labs; AMD ships kernels through GitHub. The strategies converge on common workloads (Llama inference, attention, dense transformer training) but the long tail of novel research code still costs MI300X / MI355X deployments engineering time NVIDIA users don't pay.

Cerebras WSE

Cerebras builds the largest chip ever shipped. The philosophy: the memory wall is a consequence of cutting the wafer. A fab prints dozens of dies onto 300 mm of silicon and saws them apart; the industry then spends its most exotic engineering (HBM, NVLink, CoWoS, 5,184 copper cables per rack) wiring the pieces back together at a small fraction of on-die bandwidth. Cerebras skips the saw. The Wafer-Scale Engine is one piece of silicon: 84 reticle fields, 46,225 mm², 900,000 dataflow cores, and every byte of on-chip memory in SRAM one cycle from a compute unit.

GENEALOGY
2019
WSE-1CS-1
First shipped wafer-scale processor: 1.2T transistors, 400,000 cores, 18 GB on-wafer SRAM.
2021
WSE-2CS-2
7 nm: 850,000 cores, 40 GB SRAM. Weight streaming moves weights off-wafer into MemoryX.
2023
Condor GalaxyCG-1
64-system clusters built with G42; trained the Jais Arabic LLM family.
2024
WSE-3CS-3
5 nm: 4T transistors, 900,000 cores, 44 GB SRAM; per-core FP16 SIMD doubled to 8-wide; clusters specified to 2,048 systems.
2024
Inference
Weights parked in SRAM instead of streamed: the fastest independently measured decode in the industry, and the pivot that now defines the company.
ARCHITECTURE

A GPU is a hierarchy: threads inside warps inside SMs, dies inside packages inside racks, each boundary with its own bandwidth, its own latency, its own programming construct; every accelerator built from dies inherits some version of it. The WSE is a flat plane: 900,000 identical cores tiled edge-to-edge in a 2D mesh, with no shared cache, no global memory, and no boundary of any kind between one core and the other 899,999. Each core is tiny, ~38,000 µm² on WSE-2, roughly half SRAM and half logic, peaking at 30 mW: 48 kB of local SRAM, sixteen general-purpose registers, a six-stage pipeline, a 4-wide FP16 FMAC SIMD (8-wide on WSE-3), and a five-port router into the fabric. Execution is dataflow: a core sits idle until a wavelet arrives, control bits in the wavelet select which handler task fires, and eight hardware microthreads switch cycle-by-cycle as tensor operands arrive and drain. No warps, no warp schedulers, no caches to miss, no reorder buffer: the arrival of data is the schedule.

The Wafer

A stepper exposes a wafer one reticle at a time, ~850 mm² per shot, which is why every conventional chip lives under that ceiling (and why B200 became two dies the moment NVIDIA pressed against it). Cerebras prints the same ~550 mm² die 84 times in a 12×7 grid, like any other customer of TSMC, and then, in a process co-developed with TSMC, lays extra high-level metal across the <1 mm scribe lines where the saw would normally run. The mesh crosses each seam on a source-synchronous parallel interface (2,880 GB/s per die on WSE-3), and the entire inter-die layer costs ~97 W. To software the seams do not exist: one uniform mesh, one chip.

Wafer-scale has been tried before and it failed on yield: a single defect in a monolithic wafer-computer kills the whole wafer, which is what buried the idea in the 1980s. Cerebras's answer is granularity. A defect on an H100 disables an entire ~6 mm² SM; the same defect on a WSE disables one 0.05 mm² core. WSE-3 fabricates ~970,000 cores and ships 900,000: the ~7% spare pool, plus redundant fabric links, lets the hardware remap around every defect and restore a full logical mesh.

The Core

The unusual part of the core is not the datapath; it is what an instruction is. Alongside the sixteen general-purpose registers sit 44 data-structure registers (DSRs), each holding a tensor descriptor: base address, extent, and stride, up to four dimensions. Instructions name their operands by DSR, so a single FMAC instruction says multiply the arriving stream against this resident tensor and accumulate into that one, and the hardware streams elements for as long as the tensor lasts. There is no software loop around the multiply and no instruction fetch per element; the loop lives in the descriptor. NVIDIA spent five Tensor Core generations walking the matmul toward a single descriptor-driven command; on a WSE core, a tensor instruction has no other form.

Sequencing is the fabric's job. A color is a statically routed virtual channel with a handler task bound to it at compile time, so sending a wavelet on a color is invoking code on the destination core: the 16 control bits are the call, the 16 data bits the argument. The task scheduler holds the in-flight tensor operations on the core's eight microthreads and switches among them every cycle by operand availability. It is the same stall-hiding job a warp scheduler does with 64 resident warps, done with eight contexts, because the latency being hidden is a busy SRAM bank or a neighbour hop, not an HBM round trip.

The 48 kB of local SRAM is organised for the datapath rather than for locality: eight single-ported 6 kB banks deliver two 64-bit reads and one 64-bit write every cycle, exactly two 4-element FP16 operands in and one result out, the width of the WSE-2 FMAC. A 256-byte software-managed cache (512 B on WSE-3) keeps the hottest values beside the pipeline. This is the machine's thesis in miniature: per core, memory bandwidth and compute are matched exactly, and the wafer inherits that balance 900,000 times over.

Compute

There is no matrix unit on the wafer. NVIDIA, Google, and AMD all concentrate their FLOPs in a dedicated matmul engine (Tensor Core, MXU, Matrix Core) and differ mainly in how that engine is fed; Cerebras assembles matmul out of the fabric. A GEMM runs as a wafer-wide choreography: each arriving weight is broadcast along a row of cores holding activations, every core fires a multiply-accumulate against its resident slice (an AXPY per weight), and partial sums reduce across the mesh. The data reuse a Tensor Core gets from a register tile and an MXU gets from its wiring, the WSE gets from geometry: activations never move, so the only operand in flight is the one being multiplied.

The FLOPs ledger needs care, because the number Cerebras prints is not the number to compare. WSE-3's headline 125 PFLOPS is sparse FP16: it assumes the hardware's roughly 8× zero-skipping payoff on ideally sparse tensors. Dense is roughly 15.8 PFLOPS FP16 (derived: 900,000 cores × 8-wide FMAC × 1.1 GHz; Cerebras publishes no official dense figure). That is real compute, but it is not the point: per watt, dense FLOPs on the wafer lose to every contemporary GPU. The wafer was never a FLOPs machine. It is a bandwidth machine, and the FLOPs exist to keep up with the SRAM.

Zero-skipping is where dataflow earns its keep. Because computation is triggered by arriving data, a zero never triggers anything: zeros are filtered at the sender, and the receiving core never sees them and never spends the cycle. This is unstructured, element-granular sparsity, the general case that NVIDIA's 2:4 structured sparsity only samples. It is also, so far, an unexercised option. Cerebras's own sparse-pretraining results (SPDF: 75% sparsity at 1.3B parameters; a follow-up at 6.7B) are vendor-authored and sub-7B, and no flagship customer model has been disclosed as sparse-trained: Jais 2, the biggest run on the hardware, is dense. The only silicon that can harvest unstructured sparsity has yet to ship a headline model that uses it.

Memory

The hierarchy is one tier: 44 GB of SRAM in 48 kB slices inside the cores, and nothing else on the wafer. No HBM, no L2, no eviction policy; every byte is one cycle from an FMAC. The quoted bandwidth is 21 PB/s, and the number deserves its flag: it is the sum of 900,000 local SRAM ports, an on-wafer aggregate, not a point-to-point link, and not comparable to an HBM figure. The honest comparison is bytes per FLOP: the wafer can feed ~1.3 bytes per dense FP16 FLOP, where a B200 gets ~0.002 from HBM. On that axis every GPU and TPU is starved; the WSE is the only machine in balance. Decode, the phase that is a pure bandwidth problem (one full read of the weights per token), is the phase the wafer turns out to be shaped for.

The other side of the tier is the edge of it. The wafer's connection to everything else is 12×100 GbE: 1.2 Tb/s, barely more than the single ConnectX-8 NIC attached to one Blackwell GPU. Between on-wafer SRAM and off-wafer Ethernet sit five orders of magnitude. NVIDIA's hierarchy descends gradually, each tier a few times slower than the last; the WSE has two tiers with a cliff between them. The wafer is an island, and the island's superpower and its cage are the same fact.

And the island is not growing. SRAM density has effectively stopped scaling on leading nodes: WSE-3 carries just 10% more SRAM than WSE-2 despite a full node shrink and a 54% jump in transistor count. Logic keeps shrinking; the six-transistor SRAM cell does not. The architecture's scarcest resource is the one thing the next process node no longer buys.

Weight Streaming

Training on the wafer inverts the flow everyone else takes for granted: on a GPU or TPU, weights are resident and activations stream through; on a WSE, activations are resident and weights stream through. Master weights live in MemoryX, a DRAM-and-flash appliance beside the cluster. Layer by layer, weights stream across the wafer, trigger multiply-accumulates against the activations pinned in SRAM, and leave; gradients stream back out on the backward pass, and the optimizer step runs inside MemoryX on CPUs (a weight update is O(parameters) of element-wise work with no reuse, so CPU-class compute keeps pace). The wafer never stores weights, "not even temporarily" (Cerebras's phrase). Model size is bounded by MemoryX, not by the 44 GB; the 44 GB bounds activations and batch.

What this buys is the programming model. One wafer holds a full layer's activations, so there is no tensor parallelism, no pipeline parallelism, no FSDP sharding: a 70B model is written as a single-device program, and multi-system scaling is pure data parallelism through SwarmX, a broadcast/reduce tree that fans one weight stream out to N wafers and sums their gradients on the way home. The parallelism-strategy spreadsheet that dominates GPU training simply has no Cerebras page.

What it costs is scale, in the market's own revealed preference. The spec sheet says 2,048 CS-3s; the largest cluster ever disclosed is 64 (Condor Galaxy 3). The largest from-scratch model ever disclosed on the platform is Jais 2 at 70B parameters and 2.6T tokens, trained by anchor customer G42 with Cerebras engineers embedded. Nothing above 70B, from anyone, in the seven years since CS-1. And utilisation (MFU), the number GPU labs publish as a matter of course at 35–45%, has never been disclosed for any Cerebras run.

Numerics

The numerics fit in a sentence: FP16 and BF16 with FP32 accumulate, plus (from WSE-3) a 16-wide 8-bit integer path that the Hot Chips disclosure labels fixed-point. No FP8, no FP4, no microscaling. While every other vendor halves precision each generation and buys the accuracy back with block scaling, Cerebras still computes in 16-bit and markets it as a quality differentiator ("the original 16-bit weights"). The tension is obvious: SRAM capacity is the architecture's scarcest resource, and 8-bit weights would halve the number of wafers a model needs. Whether 16-bit-only is numerical conviction or a datapath roadmap gap is an open question; no primary Cerebras source shows floating-point 8 anywhere on the wafer.

Bets
Bet 1: Don't cut the wafer. The die boundary is the tax the rest of the industry pays: SerDes, interposers, HBM stacks, cables, switches. Stitch 84 reticle fields in metal and the highest-bandwidth boundary in rival systems does not exist at all.
Bet 2: SRAM is the only memory. Trade capacity for bandwidth at the steepest ratio in the industry: 44 GB at an on-wafer aggregate 21 PB/s. Balance the machine instead of hiding imbalance behind a hierarchy.
Bet 3: Dataflow cores, no matrix unit. 900,000 tiny cores triggered by arriving wavelets, with matmul assembled from broadcast, FMAC, and mesh reduction: skipping a zero is free rather than a special mode.
Bet 4: Weights move, activations stay. Weight streaming decouples model size (MemoryX) from wafer memory (44 GB) and collapses cluster scaling to pure data parallelism.
Bet 5: Sell latency, not throughput. The wafer re-reads an entire model per token faster than anything built on HBM; price that speed as a premium product instead of competing on cost per token.
SCALING

Scale-up and scale-out mean something different here. NVIDIA's scale-up problem (make 72 packages behave like one device) is solved on the WSE by lithography: the coherent domain ships from the fab in one piece. What remains is everything past the wafer's edge, and no other machine hits its edge as hard or as early.

Scale-up
The wafer. 900,000 cores on one 2D mesh: 32-bit links, single-cycle hops, statically routed over 24 colors, native broadcast, 214 Pbit/s aggregate fabric bandwidth. Fixed at 46,225 mm² by the size of a 300 mm wafer.
Scale-out
Ethernet, immediately: 12×100 GbE (1.2 Tb/s) per system. Training scales through SwarmX (data-parallel broadcast/reduce over RoCE); inference shards models across systems at layer boundaries, pipeline-parallel.
Scale-up

The wafer's internal fabric has no SerDes, no cables, no transceivers, and no marginal cost per link: routing is compiled, each hop is one cycle, and a broadcast is a native fabric primitive rather than a switch feature. Where NVL72 spends 5,184 copper cables and a tray of NVSwitch ASICs to give 72 GPUs 130 TB/s of all-to-all, the WSE's equivalent domain is a single lithographic object. The catch is that the domain size is a constant. NVIDIA's scale-up domain grows every generation (NVL72 to NVL576 across three years); the wafer has been 46,225 mm² since 2019 and will stay there. 300 mm is the largest wafer the industry runs (the 450 mm transition died a decade ago), so Cerebras's scale-up roadmap is whatever the next node yields in density: there is no more area to be had.

Scale-out

Training scale-out is SwarmX, and it only does one thing: replicate. Broadcast the weight stream to N wafers, reduce their gradients on the return path; batch grows with system count, model size does not. The claimed ceiling of 2,048 systems ("256 exaFLOPS", sparse) has never been built; 64 has.

Inference abandons weight streaming entirely; the arithmetic is fatal. Streaming a 70B model's 140 GB from MemoryX for every decoded token over a ~150 GB/s pipe would cost roughly a second per token. So inference parks the weights in SRAM and shards the model across wafers at layer boundaries: Llama 70B on "as few as four" CS-3s, pipeline-parallel over Ethernet, each additional wafer contributing 44 GB of weight-plus-KV capacity and 23 kW of load.

The speeds are real, and independently verified. Artificial Analysis measured 1,850 tokens/s on Llama 3.1 8B and 446 on 70B at the August 2024 launch, 969 on Llama 405B (240 ms to first token), and 2,522 on Llama 4 Maverick in 2025, ~2.4× the best published Blackwell number of the time. Vendor-quoted peaks run higher (2,100 on 70B with speculative decoding; 3,000 on GPT-OSS-120B, where the live independent measurement sits nearer 2,000). No GPU provider comes close on per-user decode speed.

The economics are the sharp edge. Forty-four GB per wafer means a frontier-scale model consumes fleets: SemiAnalysis estimates ~24 CS-3s for a 1.6T-parameter-class model that fits in a handful of GPU racks, each system an analyst-estimated ~$450k bill of materials selling at a list price around $2–3M (never officially disclosed). During decode the wafer's enormous FLOPs mostly idle; Cerebras has declined to disclose batch sizes and has never published per-system throughput. Per-token API pricing runs roughly 3–5× GPU-based providers for the same open models, and Llama 405B was quietly dropped from the API, which SemiAnalysis reads as serving economics that didn't clear. Fixed SRAM also prices context: KV cache lives in the same 44 GB as weights, so long contexts steal capacity and force more systems per replica; the API caps at 131K tokens while frontier providers serve 256K–1M. MoE is served (Qwen3-235B at ~1,500 tokens/s, vendor-quoted) but is the format's worst case: a huge parameter footprint touched a few experts at a time, held in the most expensive memory.

The market has priced this honestly. Mistral's Le Chat (~1,100 tokens/s), Perplexity Sonar, and Meta's Llama API all pay for the latency; in January 2026 OpenAI signed for 750 MW of CS-3 capacity through 2028, reported above $10B at signing and since grown past $20B, the largest endorsement wafer-scale has ever received. The first flagship to ship on that capacity is GPT-5.6 Sol, launched July 2026 at a quoted 750 tokens/s.

SOFTWARE

The stack is compiler-driven like the TPU's, but through a much narrower aperture: the Cerebras compiler is a kernel matcher, not a general code generator. cerebras.pytorch traces the training step through lazy tensors into Torch-MLIR and a graph IR, then matches subgraphs against a library of hand-written kernels, falling back to slower auto-generated ones for ops with no match. The documented constraints are stark by GPU standards: static graphs only, no dynamic shapes, no data-dependent control flow, no eager tensor access mid-step, and a PyTorch version pinned behind upstream. The best independent practitioner account (SURF, the Dutch national compute centre) reports unsupported layer types and no 1:1 porting path for standard PyTorch code.

And there is no kernel escape hatch. CUDA's answer to a novel attention variant is write a kernel; the TPU's is Pallas; ROCm's is Triton. The Cerebras ML stack has no user kernel path at all: when the matcher misses badly, the fix is a Cerebras engineer. A separate SDK language, CSL, exposes the raw machine (tasks, wavelets, colors) and has produced striking HPC results (a TotalEnergies stencil code at ~228× an A100, a Gordon Bell finalist on 48 CS-2s), but it is a separate world, unconnected to the PyTorch flow. Every flagship model on the platform (Jais, BTLM, Med42) was co-developed with embedded Cerebras staff.

There is a strange immunity in this. FlashAttention, the defining kernel lineage of the GPU era, is a scheme for tiling attention through a memory hierarchy, and the WSE has no hierarchy to tile against: the optimisation class that costs AMD years of porting lag simply does not apply. But the immunity and the poverty are the same fact. The third-party kernel ecosystem that compounds on CUDA has no surface to attach to here; every kernel improvement in the platform's history has one author.

Where does that leave the wafer? Owning a real niche, honestly won: batch-one decode speed, independently verified, paid for by customers who price latency above cost. Around the niche, hard walls: 3–5× per-token pricing, a 70B training ceiling seven years in, revenue still ~86% concentrated in two Abu-Dhabi-linked customers in 2025 (per the S-1 filings around its May 2026 IPO), and a scarcest resource, SRAM density, that stopped scaling just as models kept growing. Hennessy and Patterson promised a Cambrian explosion; the WSE is its most extreme body plan, the one that decided the memory wall was a packaging choice and spent 46,225 mm² of silicon refusing to make it.

AWS Trainium

Annapurna Labs, the team behind AWS's Nitro cards and Graviton CPUs, built Trainium as a fast-follower. The compute core takes the TPU's proven playbook (a 128×128 weight-stationary systolic array, software-managed scratchpads, whole-program compilation) down to sharing Google's XLA compiler outright. The scale-out fabric is the Nitro-offloaded network that already carries the rest of AWS. What is genuinely Amazon's is narrow and deliberate: dedicated collective-communication silicon bolted onto the borrowed core, and the vertical integration to price a chip that only has to beat NVIDIA inside AWS.

GENEALOGY
2015
Annapurna Labs
Amazon acquires the Israeli chip startup for ~$350M; it becomes AWS's in-house silicon team.
2018
Graviton + Nitro
Arm server CPUs and the DPU offload fabric.
2019
InferentiaNeuronCore-v1
First AWS ML chip, inference-only: 4 NeuronCores, 8 GB DRAM, three fixed engines.
2022
Trainium1Trn1, v2
First training chip: 2 NeuronCore-v2, a programmable GPSIMD engine, 32 GB HBM, NeuronLink 2D torus.
2023
Inferentia2v2
Shares NeuronCore-v2 with Trn1: the inference and training lineages converge on one microarchitecture.
2024
Trainium2Trn2, v3
8 NeuronCore-v3, first real FP8 acceleration, 96 GB HBM3; the 64-chip UltraServer. Powers Project Rainier.
2025
Trainium3Trn3, v4
First 3 nm AWS chip (TSMC N3P); OCP MXFP8/MXFP4; the NeuronSwitch all-to-all fabric replaces the torus. 144-chip UltraServer.
ARCHITECTURE

The other captive-silicon story belongs to Google, and Trainium is best read as the TPU's thesis rebuilt inside a different cloud. The bets underneath are the same (a systolic array fed from software-managed SRAM, scheduled ahead of time by a compiler, with no caches and no thread scheduler), but the unit is assembled differently. A Trainium chip carries a small number of NeuronCores (2 on Trn1, 8 on Trn2 and Trn3), and each NeuronCore is not one monolithic matmul engine but a cluster of decoupled, specialised engines: a Tensor Engine (the 128×128 systolic array), a Vector Engine for reductions, a Scalar Engine for pointwise math, and a programmable GPSIMD Engine of eight 512-bit vector processors for whatever fits none of the other three. Around them sit the data-movers: 128 DMA engines, a Sync Engine that sequences transfers, and (from Trn2) dedicated CC-Cores for collectives. There are no warps and no wavefronts; the engines run as a statically-scheduled dataflow pipeline, and the load-bearing design decisions are about what surrounds the systolic array, not the array itself.

Compute

The Tensor Engine owns the matmul FLOPs; the other three engines own everything else. It is a 128×128 grid of processing elements (16,384 MACs) run weight-stationary: one operand tile is loaded into the array and held in place (LoadStationary), the other streams through it (MultiplyMoving), and partial sums land in PSUM, a small accumulator SRAM the engine can read-add-write so a contraction longer than 128 folds into place along the 
𝐾
K axis. This is the same 
𝐷
=
𝐴
⋅
𝐵
+
𝐶
D=A⋅B+C tile MMA at the heart of every matmul accelerator; but where NVIDIA wraps it in the warp hierarchy and Google issues it from a VLIW bundle, Trainium exposes it as a pair of explicit instructions against a named scratchpad.

The array is physically fixed at 128×128 across all three generations; what changes is how many products it packs per cell. Trn1's NeuronCore-v2 ran BF16/FP16 with FP32 accumulate and offered FP8 only at the BF16 rate (no speedup). Trn2's v3 double-pumps FP8 to present an effective 256×128 array, the first Trainium with a real 2× on 8-bit. Trn3's v4 packs microscaling operands to present an effective 512×128 at 4× the BF16 rate. The count of physical multiply-add cells never moves; the datapath just feeds them narrower numbers.

The other three engines are what keep the array busy. The Vector Engine handles cross-element reductions (layernorm, softmax, pooling); the Scalar Engine handles one-in-one-out pointwise ops (activations, GELU); the GPSIMD Engine, eight fully-programmable vector processors running C, absorbs anything that maps to none of them. A well-compiled step overlaps all four: the Tensor Engine grinds a matmul while the Vector Engine runs the previous tile's softmax and the DMA engines stage the next, the same producer/consumer overlap that makes TPU and GPU attention kernels efficient, expressed here as separate physical engines rather than separate warps or VLIW slots. The design pays off when a layer decomposes cleanly onto the four engine types, which transformers largely do. It pays a tax at the edges: an operator that fits none of the specialised engines falls to the programmable GPSIMD path, slower, and the part of the machine most likely to bottleneck a novel architecture. It is Trainium's version of the long-tail cost every non-GPU accelerator carries.

Memory

The memory hierarchy is the compute philosophy applied to storage: three tiers, all software-managed, no hardware cache anywhere. AWS's own documentation draws the contrast, noting that unlike a CPU or GPU the NeuronCore has no cache and that "all memory movement is explicit in the program itself." Off-chip is HBM (32 GB on Trn1, 96 GB HBM3 on Trn2, 144 GB HBM3e on Trn3). On-chip, closest to the engines, is the State Buffer (SBUF): the main scratchpad, roughly 20× HBM bandwidth, organised in 128 partitions and sized per NeuronCore at 24 MiB (v2), 28 MiB (v3), 32 MiB (v4). Between the array and SBUF sits PSUM, a 2 MiB accumulator dedicated to matmul outputs. Data moves HBM → SBUF → Tensor Engine → PSUM → SBUF, every hop issued by the compiler; nothing is prefetched or evicted by hardware.

This is exactly Google's VMEM bet, an explicit scratchpad the compiler must schedule perfectly with no cache to paper over a mistake, and the opposite of NVIDIA's hardware-managed L2 and L1. Trainium inherits both the ceiling and the fragility that come with it: when the schedule is right the engines never stall, and when it is wrong there is no fallback path. The design runs a generous HBM budget against modest peak FLOPs, so per unit of compute Trainium carries more memory than a comparable NVIDIA part. On absolute capacity, though, it trails: Trn2's 96 GB sits below the H200 and B200, and Trn3's 144 GB (2025) sits below the 192 GB B200 and 288 GB B300 it ships against. So the lever AWS actually pulls when it argues the economics of serving a large model is not memory leadership but price: cost per unit of compute and HBM, on silicon it builds and rents itself.

Numerics

Trainium tracks the same precision-halving curve as everyone else (FP32 → BF16 → FP8 → FP4), with two Trainium-specific wrinkles. The first is configurable FP8: rather than fix E4M3 and E5M2 like Hopper, the Tensor Engine takes an adjustable exponent bias and supports E5M2, E4M3, and E3M4, letting the compiler trade range for precision per tensor. The second is that Trn3's FP4 buys no extra throughput: OCP MXFP4 operands are up-converted to MXFP8 before they reach the array, so FP4 runs at the FP8 rate and saves only memory and bandwidth, not compute. Both generations lean on the industry's accuracy-recovery tricks: microscaling block exponents from Trn3, and hardware stochastic rounding on every generation. The one figure to distrust is the sparse peak: AWS headlines a 4× FP8 number that its own architecture pages put at 2× over dense FP8 (the 4× is relative to dense BF16), so the marketed acceleration and the datapath do not quite agree.

Collectives in Silicon

The block with no clean analogue on a GPU is the collective-communication core. Distributed training and inference spend a large fraction of their wall-clock in collectives: every gradient step is an all-reduce, every MoE layer an all-to-all. On a GPU those collectives run as NCCL kernels on the same SMs doing the math, so communication and compute contend for the same silicon and the overlap has to be won in software. Trainium carves the function out into dedicated hardware: 20 CC-Cores per Trn2 chip, wired straight to the NeuronLink ports, executing all-reduce, all-gather, reduce-scatter, and all-to-all while the Tensor and Vector engines keep running. It is the same move Google made with SparseCore and Cerebras made with its off-core zero filter: find a workload the main engine is the wrong shape for, and spend a little area on a purpose-built block beside it rather than steal cycles from the core. Communication becomes something the chip does concurrently, not something it pauses to do.

Bets
Bet 1: The cloud is the product, the chip is a component. Annapurna designs chip, server, rack, Nitro network, and cloud API as one stack, so Trainium only has to win on price-performance inside AWS, never on a merchant-silicon spec sheet.
Bet 2: Borrow the compute thesis, don't reinvent it. A 128×128 weight-stationary array, software-managed SBUF/PSUM scratchpads, and whole-program compilation are the TPU's bets, reused down to sharing Google's OpenXLA. The effort saved goes into the network and the rack.
Bet 3: Collectives belong in silicon. Dedicated CC-Cores overlap all-reduce and all-to-all with compute in hardware, instead of running them as kernels that steal FLOPs from the matmul units.
Bet 4: Reuse the cloud's own network. Scale-out is EFA with the SRD transport: the same Nitro-offloaded, packet-sprayed RDMA that already runs the rest of AWS. No InfiniBand.
Bet 5: Move the topology to the workload. Trn1 and Trn2 copied the TPU's torus; Trn3's NeuronSwitch replaces it with a switched all-to-all fabric as MoE traffic outgrew nearest-neighbour. Honestly, this is following the playbook: first Google's, now NVIDIA's.
SCALING

Trainium's scaling inherits its split from the rest of AWS: a tightly-coupled NeuronLink domain for the chips that must act as one, and the cloud's general-purpose EFA fabric for everything beyond it. The scale-up domain is not cache-coherent shared memory the way NVLink is; AWS markets the UltraServer as a pooled multi-terabyte memory, but underneath it is message-passing over point-to-point links, closer in spirit to the TPU's ICI than to an NVSwitch crossbar.

Scale-up
NeuronLink binds chips into one UltraServer. Through Trn2 the topology is a torus (16 chips per instance in a 4×4 2D torus, 64 per UltraServer in a 4×4×4 3D torus); Trn3 replaces it with the NeuronSwitch all-to-all fabric. Message-passing, not coherent load/store.
Scale-out
Elastic Fabric Adapter over Ethernet, offloaded to Nitro. The SRD transport sprays each flow across many paths and delivers reliably but out-of-order; UltraClusters reach hundreds of thousands of chips over the 10p10u fabric.
Scale-up

NeuronLink is Trainium's chip-to-chip fabric, the role NVLink plays for NVIDIA and ICI for the TPU. Through Trn2 it wires chips into a torus, exactly the TPU's choice: a single trn2 instance is 16 chips in a 4×4 2D torus at ~1.28 TB/s per chip, and the Trn2 UltraServer joins four instances into 64 chips on a 4×4×4 3D torus, presenting 83 dense FP8 PetaFLOPS and ~6 TB of HBM as one scale-up domain. The third torus axis is deliberately thin (the inter-instance ring runs at ~256 GB/s per chip against 1.28 TB/s inside an instance), which is the torus's characteristic trade: cheap wiring and huge nearest-neighbour bandwidth, at the cost of many hops across the diameter. AWS positions the 64-chip UltraServer against NVIDIA's 72-GPU NVL72; the aggregate compute is in the same league, but a torus is not a crossbar, and the two behave very differently on traffic that is not nearest-neighbour.

That trade is why Trn3 abandons the torus. NeuronSwitch-v1 is a switched all-to-all fabric that roughly doubles inter-chip bandwidth and, more importantly, flattens the diameter so any chip reaches any other in one switched hop. The Trn3 UltraServer scales to 144 chips for 362 dense FP8 PetaFLOPS and 20.7 TB of HBM3e. The motivation is the one that also pushed Google toward high-radix topologies for MoE inference: expert routing is all-to-all, the worst case for a torus, and a switch turns the longest-hop pair into a single crossing. Trainium's interconnect roadmap is a compressed re-run of the industry's: adopt the torus while the workload is nearest-neighbour, switch to a crossbar when it is not.

Scale-out

Scale-out is not bespoke; it is the same fabric AWS already runs. Every Trainium instance carries an Elastic Fabric Adapter NIC into the datacenter network (3.2 Tbps per Trn2 instance), and the transport is SRD (Scalable Reliable Datagram), offloaded to the Nitro cards rather than run on the accelerator. SRD is AWS's clean-sheet answer to RDMA: instead of the single ordered flow of RoCE or InfiniBand, it sprays each message across up to 64 parallel paths and delivers reliably but out-of-order, pushing reassembly up to the collective library and sidestepping the head-of-line blocking a single congested path would cause. It is the transport AWS built for its cloud generally, repurposed for the accelerator fabric.

At the top of the hierarchy is the UltraCluster, stitched together by the 10p10u network (AWS's shorthand for ~10 petabits/s of bandwidth at under 10 microseconds of latency across a datacenter) and scaling to hundreds of thousands of chips. The proof point is Project Rainier: roughly half a million Trainium2 chips across multiple US datacenters, brought online for Anthropic in late 2025; by early 2026 Claude was running on over a million chips, the largest commitment any external lab has made to a non-NVIDIA training platform. It exists because the economics close end to end. AWS claims Trainium2 delivers 30–40% better price-performance than its Hopper-class GPU instances (an AWS figure, measured against last-generation NVIDIA rather than Blackwell), and because Amazon owns every layer from the Nitro card to the API, that margin is Amazon's to set.

SOFTWARE

Trainium's software makes the borrowing explicit: the Neuron SDK is a compiler-first stack built on the same OpenXLA foundation as the TPU. The Neuron compiler (neuronx-cc) ingests XLA HLO graphs and lowers them to a NEFF binary that the Neuron runtime loads onto the NeuronCores; the front-end IR is Google's, and Google's own OpenXLA announcements list Trainium as a first-class PJRT device alongside the TPU. torch-neuronx runs PyTorch through PyTorch/XLA's LazyTensor tracing (record ops, compile the graph at a step boundary), and jax-neuronx lowers JAX through StableHLO. On the spectrum from kernel-driven CUDA at one pole to whole-program XLA at the other, Trainium sits almost on top of the TPU: the compiler is the system, and it is largely the same compiler.

Where it diverges is the escape hatch. XLA alone cannot always synthesise the optimum for a novel attention variant or a fused MoE dispatch, so Neuron ships NKI (Neuron Kernel Interface), a Python, tile-level kernel language that exposes the four engines and the SBUF/PSUM scratchpads directly. It is Trainium's Pallas (or its Triton): the same idea of a tile DSL that drops beneath the whole-program compiler when a kernel's win is in the schedule, not the algebra. Below it, a collective-communication library maps all-reduce and all-to-all onto the CC-Cores and the NeuronLink topology (the NCCL analogue), and NeuronX Distributed provides the sharded-training layer.

The gap to CUDA (and even to the TPU's stack) is maturity, not design. NKI, the JAX path, and the distributed library were all still in beta through late 2024; a ported model runs only on AWS, with no cross-vendor fallback; and the vLLM backend trails the upstream project. The clearest tell is how the anchor tenant works: Anthropic does not simply target Trainium through PyTorch, it embeds with Annapurna, writes its own low-level NKI kernels, and upstreams fixes into the Neuron stack. Trainium is production-viable at the frontier, but at the frontier it is co-engineered, not turnkey: the compiler is inherited and excellent, but the surrounding ecosystem is young.

Groq LPU

The Groq LPU is a deterministic machine. Every other chip spends silicon tolerating uncertainty: caches to hide memory latency, schedulers to fill stalls, arbiters to resolve contention it cannot predict. The LPU deletes all of it. Strip out every reactive component (no cache, no branch predictor, no arbiter, no reorder buffer, not even an on-chip crossbar) and hand the entire scheduling problem to the compiler, which places every instruction and every byte on an exact cycle. What is left is a chip whose latency is known before it runs. Where the TPU moved scheduling into the compiler but kept HBM and a dynamic network, Groq removed the last sources of nondeterminism: memory is all SRAM, and the network is scheduled too, so hundreds of chips run as one clock-exact program.

GENEALOGY
2016
Founding
Jonathan Ross, who started Google's TPU as a 20% project, leaves to build a deterministic inference chip.
2020
TSPGroqChip 1
First silicon (ISCA 2020, Think Fast): a single functional-slice core, 14 nm, no HBM, no caches.
2022
Multiprocessor
ISCA 2022: software-scheduled networking extends the deterministic schedule across thousands of chips via a compiled Dragonfly.
2023
Samsung 4 nm
Second-gen LPU announced on Samsung SF4X; it never shipped (a reported failed tapeout).
2024
LPU / GroqCloud
The TSP is rebranded the Language Processing Unit; the company pivots from selling cards to selling tokens, on record decode speeds.
2025
NVIDIA License
NVIDIA takes a non-exclusive license to the LPU technology and hires Ross and much of the team.
2026
NVIDIA Groq 3 LPULP30 / LPX
The technology reappears at GTC 2026 as a latency co-processor beside Rubin NVL72, via Attention-FFN disaggregation.
ARCHITECTURE

The rest of the field is built from a replicated core: tile one SM, TensorCore, CU, or dataflow core across the die and farm work out to the copies. The LPU is built the other way. It takes a single conventional core and pulls it apart: instruction control, the vector ALUs, the matrix units, the memory, and the network each become a functional slice, a full-height column of identical hardware, and the columns stand side by side across the die. Homogeneous down each slice, heterogeneous across the chip. Data does not sit in a register file waiting to be issued onto a unit; it streams horizontally through the slices like parts down an assembly line, East and West, one register hop per cycle, while VLIW instructions issue Northward from the control slices to meet it. Nothing in the datapath reacts: the compiler knows where every operand is on every cycle, and the hardware just turns the clock. The streaming is the identity: this design launched as the Tensor Streaming Processor (TSP), and carried that name until the 2024 rebrand to Language Processing Unit.

The vertical axis is SIMD width. The chip is 320 lanes tall, organised as 20 superlanes of 16 lanes each (a 21st is a spare, fused out for yield and invisible to software), and every slice acts on all 320 lanes at once. The horizontal axis is time. There are 64 logical stream registers per lane, 32 flowing East and 32 West, and on every tick each stream advances one slice in its direction until it is consumed or falls off the edge of the die. A slice reads operands off the passing streams, computes, and writes results back onto streams bound for the next slice. The die is mirrored into two hemispheres around a central vector unit, so a value produced once can be consumed by slices on either side.

Compute

The LPU keeps the same division of labour as everything else, matrix work on dedicated units and the rest on a vector engine, but arranges both as slices in the stream. The matrix path is the MXM: four independent 320×320 multiply-accumulate planes (two per hemisphere), 409,600 multipliers in all, taking INT8 or FP16 operands into INT32 or FP32 accumulators. Weights install across a plane (all of them in under 40 cycles), then activations stream through and products accumulate. At 900 MHz that is roughly 750 INT8 TOPS and 188 FP16 TFLOPS, and, unusually, the number carries no sparsity asterisk: the TSP refuses to skip zeros at all, because a data-dependent skip would make execution time data-dependent, and determinism is the one property it will not trade.

The vector path is the VXM in the centre of the die: 16 ALUs per lane arranged as a 4×4 mesh, 5,120 32-bit ALUs, running activations, normalisation, quantisation, and residual adds. Because compute is spatial rather than issued to a shared unit, an operand can march through a chain of VXM ALUs and straight into an MXM plane on consecutive cycles without touching memory: the operator fusion a GPU kernel builds by hand is here just the physical order of the slices. A third slice type, the SXM, handles the movement the straight-line stream cannot express: lane shifts, a 320-lane permute, transposes, and the chip-to-chip links all live here, so rearranging data across lanes is a first-class operation rather than a round-trip through SRAM.

Memory

There is no HBM, no DRAM, and no cache. On-chip is the MEM slices: 230 MB of SRAM in 88 slices (44 per hemisphere), every byte a single cycle from a compute slice, ~80 TB/s aggregate. That is the whole hierarchy: one tier, flat, software-addressed, with none of the eviction, prefetch, or coherence machinery that would introduce a variable-latency access.

The consequence is the defining constraint of the architecture. 230 MB does not hold a model. Llama-2 70B in FP16 is 140 GB, so it has to be sharded across hundreds of chips, its weights spread over the aggregate SRAM of a whole rack or more: the deployed configuration was ~576 LPUs. Where a GPU parks the model in HBM on a handful of packages and streams tokens past it, the LPU spreads the model in SRAM across a cluster and streams tokens through the cluster. The chip count is set by capacity, not compute: the weights have to fit. It is the same trade Cerebras makes (SRAM only, no HBM), reached from the opposite direction: Cerebras keeps one enormous die and gives up capacity per wafer; Groq keeps a normal-sized die and gives up ever fitting a model on one.

Numerics

The numerics are the road not taken. Every other vendor here has been halving precision each generation, FP16 to FP8 to FP4 with block scaling to buy the accuracy back. The TSP stayed at FP16 and INT8 with FP32 accumulate and never shipped FP8 or FP4 in silicon. Its one numeric idea is TruePoint: a 320-element dot product fused into a single rounding step with FP32 accumulation, so an FP16 multiplier array lands close to FP32 accuracy on the reduction (Groq reports ~0.05% max error against an FP32 baseline).

Whether 16-bit was conviction or a datapath that never got its low-precision refresh is hard to separate from the fact that the second-generation chip never shipped. SRAM capacity is the architecture's scarcest resource, and 8-bit weights would halve the chips a model needs; a machine this capacity-bound had every reason to want FP8 and did not get it on silicon. It is the same open question that hangs over Cerebras's 16-bit-only datapath, and the same tension: the vendor most starved for capacity computing at the widest precision.

Determinism

Every other accelerator hides latency; the LPU exposes it. The ISA carries the execution latency of each instruction, the datapaths are fixed-latency by construction, and so the compiler computes ahead of time the exact cycle on which every result appears. Nothing in the hardware can disturb that schedule: no cache to miss, no arbiter to stall on, no branch to mispredict, no speculation to unwind. Groq's own measurement is the proof: 24,240 runs of BERT-Large returned inside a ~75 µs band, and the compiler's predicted latency sat within 2% of measured.

This is the TPU's instinct (move scheduling into the compiler, delete the hardware that second-guesses it) taken one step further. The TPU compiler schedules a chip; the LPU compiler schedules a system, because the determinism holds across the network too. And it is the exact inverse of Cerebras, whose cores are dataflow, firing whenever an operand happens to arrive: the WSE reacts to data, the LPU is timed to it. Both machines delete the scheduler; one replaces it with arrival, the other with a clock.

Bets
Bet 1: Determinism over tolerance. Delete every reactive component (caches, arbiters, predictors, reorder buffers) and let the compiler own every cycle.
Bet 2: Spatial functional slices. Disaggregate the core into slices and stream operands through them, so fusion is the floorplan and data reuse lives in the wires, not a register-file dance.
Bet 3: SRAM is the only memory. No HBM, at any capacity cost. Trade the ability to hold a model on-chip for single-cycle, fixed-latency access, accept models must span hundreds of chips.
Bet 4: Schedule the network too. Make the chips their own routers and compile the communication cycle-by-cycle, so a thousand-chip cluster is one deterministic program with no switches and no congestion.
Bet 5: Sell latency, not throughput. Optimise for tokens per second per user at batch 1, the regime GPUs are worst at, and price that speed as the product rather than competing on cost per token.
SCALING

Scaling an LPU is unlike anything else here, because there is no separate scale-up fabric to build: the chip is already a switch. Each LPU carries up to 16 chip-to-chip RealScale links (11 exposed on the card) and acts simultaneously as a compute endpoint and a router. Wire the chips directly to each other and the cluster is a glueless multiprocessor: no NICs, no switch ASICs, no top-of-rack switch. And because determinism holds across those links, the entire cluster runs on one compile-time schedule.

Scale-up
The node: 8 LPUs fully connected over RealScale C2C, forming one Dragonfly group that presents as a single high-radix virtual router. Software-scheduled, switchless, no coherence.
Scale-out
The same fabric, extended. A Dragonfly of nodes: 9 per rack (72 chips, one node a hot spare), scaling to a spec'd 10,440 chips, every hop still on a compiled, deterministic schedule.
Scale-up

The node is 8 LPUs, fully connected: 7 of each chip's links wire it to the other seven, so every chip in the node is one hop from every other. The remaining four links on each chip (32 across the node) bundle into what the ISCA paper calls a 32-port virtual router, the node's uplink into the larger fabric. There is no baseboard switch and no coherent address space; a remote operand is not loaded, it is scheduled to arrive, injected by the source chip on a cycle the compiler chose and consumed by the destination on the cycle it lands.

Scale-out

Beyond the node, nodes wire into a Dragonfly: 9 nodes make a 72-chip rack (the ninth a hot spare, so 64 active), and the topology scales to a specified 10,440 chips with any two under six hops apart. The fabric is software-scheduled: routing and flow control move to compile time, and the paper's framing is blunt, scheduled, not routed. There is no back-pressure and no dynamic arbitration, because the compiler has already proven the receiver is ready; links carry forward error correction instead of retransmission, because a retry would perturb the schedule. Keeping a rack of independently-clocked chips in lockstep is its own problem: the links are plesiochronous, and the fabric maintains a global consensus time with Hardware-Aligned Counters exchanged every 256 cycles over a spanning tree, with periodic deskew instructions stalling each chip back into alignment. The payoff Groq reports is that an 8-way all-reduce matches an A100/NVSwitch node on large tensors and beats it on small ones, where a scheduled fabric pays none of the handshake latency a dynamic one does.

The cost is written into the physics of the memory bet. A model replica is not a box, it is a rack (or eight): Llama-2 70B on ~576 chips carried, by one analysis, 144 host CPUs and 144 TB of host RAM alongside the LPUs, against two CPUs for an 8-GPU server. The wafer under each chip is cheap (14 nm GlobalFoundries, reportedly under $6k, against ~$16k for an H100-class part), but you need hundreds of them, and during decode most of their enormous compute sits idle while the SRAM does the work. SemiAnalysis put it plainly: the LPU wins the bill of materials per token when you optimise for latency, and loses to GPUs by roughly an order of magnitude on throughput per dollar once you batch. The architecture is not competing on cost. It is competing on speed.

SOFTWARE

The programming model is the purest expression of the compiler is the machine. There are no kernels. You hand the Groq compiler a model from PyTorch, TensorFlow, or ONNX; it lowers to a small tensor op set and statically schedules every instruction, every stream, and every chip-to-chip transfer. Nobody writes a wgmma or hand-tunes a tile, because there is no dynamic hardware to hand-tune against. Groq's demonstration was bringing up LLaMA in four days with a team of under ten, against the months of hand-kernel work the same model took to tune on a GPU. The stack around the compiler (a profiler, a runtime, the GroqFlow bring-up path) is small and closed, and GroqFlow was archived in 2025 as the company stopped selling cards and started selling tokens.

That pivot is the tell about what the architecture is for. The LPU is inference-only by construction (Ross's framing is that training is a local game and inference a global one), and it is unbeaten at a single thing: single-user decode latency. Independent measurement backs the claim, with Artificial Analysis clocking Groq among the fastest token-per-second providers on open models. It is badly matched to the rest: a model that will not fit in a rack of SRAM, a workload that wants big batches for throughput-per-dollar, or dynamic control flow a static schedule cannot express. MoE is served, but its data-dependent expert routing sits awkwardly against a compiler that wants to know everything in advance, and Groq has published little on how it reconciles the two.

The epilogue is that the buyer of all this was NVIDIA. In December 2025 NVIDIA took a non-exclusive license to the LPU technology and hired Ross and much of the team. It was not an acquisition: no products, customer contracts, or equity changed hands, per NVIDIA's own 10-K, though the roughly $13B paid at closing led the press to call it one. At GTC 2026 the technology reappeared as the NVIDIA Groq 3 LPU, a rack of 256 SRAM-only inference chips sitting beside Rubin NVL72 and splitting the transformer between them: the GPUs run attention, the LPUs run the feed-forward and MoE layers, with Dynamo orchestrating the hand-off. The most deterministic architecture in AI ended up as a latency co-processor inside the most programmable one. GroqCloud, meanwhile, still serves tokens on the original 14 nm silicon.

Comparison

All arithmetic figures are peak values at the stated precision; entries are dense unless the vendor does not publish the basis. Memory bandwidth is the native tier shown: HBM for GPUs, TPUs, and Trainium; aggregate on-chip SRAM for Cerebras and Groq. Those numbers are not directly comparable. Scale-up bandwidth follows each vendor's convention and can mean per-chip aggregate, rack aggregate, or true bisection.

Per-chip
Company	Year	Chip	Accelerator memory	Memory BW	Flagship dense FLOPs	TDP	Scale-up BW
	2023	H100 SXM5	80 GB HBM3	3.4 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	H200 SXM	141 GB HBM3e	4.8 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	B200	192 GB HBM3e	8 TB/s	4.5 PetaFLOPS FP8 / 9 PetaFLOPS FP4	1,000 W	1.8 TB/s
2025	B300	288 GB HBM3e	8 TB/s	7.5 PetaFLOPS FP8 / 15 PetaFLOPS FP4	1,400 W	1.8 TB/s
2026	Rubin	288 GB HBM4*	~13 TB/s*	~17 PetaFLOPS FP8* / ~50 PetaFLOPS FP4*	~1,500 W*	3.6 TB/s
2027	Rubin Ultra	1 TB HBM4e*	~32 TB/s*	~33 PetaFLOPS FP8* / ~100 PetaFLOPS FP4*	~1,800 W*	3.6 TB/s
	2023	TPU v5p	95 GB HBM2e	2.8 TB/s	0.46 PetaFLOPS BF16	n/d	1.2 TB/s
2025	TPU Ironwood (v7)	192 GB HBM3e	7.4 TB/s	4.6 PetaFLOPS FP8	n/d	1.2 TB/s
2026	TPU v8t Sunfish	216 GB HBM3e	6.5 TB/s	12.6 PetaFLOPS FP4	n/d	n/d
	2023	MI300X	192 GB HBM3	5.3 TB/s	2.6 PetaFLOPS FP8	750 W	896 GB/s
2024	MI325X	256 GB HBM3e	6.0 TB/s	2.6 PetaFLOPS FP8	1,000 W	896 GB/s
2025	MI355X	288 GB HBM3e	8 TB/s	10 PetaFLOPS FP8 / 20 PetaFLOPS FP4	1,400 W	1,075 GB/s
2026	MI455X	TBD	TBD	~40 PetaFLOPS FP4*	TBD	n/d
	2021	WSE-2	40 GB SRAM (on-wafer)	20 PB/s (aggregate)	7.5 PetaFLOPS FP16	23 kW (system)	(domain = the wafer)
2024	WSE-3	44 GB SRAM (on-wafer)	21 PB/s (aggregate)	~15.8 PetaFLOPS FP16*	23 kW (system)	(domain = the wafer)
	2022	Trainium1	32 GB HBM2e*	820 GB/s	0.19 PetaFLOPS BF16/FP8	n/d	n/d
2024	Trainium2	96 GB HBM3	2.9 TB/s	1.3 PetaFLOPS FP8	~500 W*	1.28 TB/s
2025	Trainium3	144 GB HBM3e	4.9 TB/s	2.5 PetaFLOPS FP8	n/d	n/d
	2020	GroqChip (1st-gen TSP/LPU)	230 MB SRAM	80 TB/s (on-chip aggregate)	0.188 PetaFLOPS FP16	215 W	330 GB/s (11-link card)
2026	NVIDIA Groq 3 LP30	500 MB SRAM	150 TB/s (on-chip aggregate)	~1.2 PetaFLOPS FP8*	n/d	2.5 TB/s
Per-rack / pod
Company	Year	System	Chips	Aggregate dense FLOPs	Accelerator memory total	Scale-up fabric BW	Per-chip NIC	Power	Cooling
	2023	HGX H100	8	16 PetaFLOPS FP8	640 GB	7.2 TB/s	400 Gbps (CX-7)	~10 kW	Air
2024	HGX H200	8	16 PetaFLOPS FP8	1.1 TB	7.2 TB/s	400 Gbps	~10 kW	Air
2024	GB200 NVL72	72	360 PetaFLOPS FP8 / 720 PetaFLOPS FP4	13.4 TB	130 TB/s	800 Gbps (CX-8)	~120 kW	Liquid
2025	GB300 NVL72	72	540 PetaFLOPS FP8 / 1,100 PetaFLOPS FP4	20.7 TB	130 TB/s	800 Gbps	~120 kW	Liquid
2026	NVL144	144	~1.2 ExaFLOPS FP8 / ~3.6 ExaFLOPS FP4	~21 TB	~260 TB/s*	1.6 Tbps (CX-9)	~200 kW*	Liquid
2027	NVL576 (Kyber)	576	~5 ExaFLOPS FP8 / ~15 ExaFLOPS FP4	~144 TB	n/d	1.6 Tbps	~600 kW*	Liquid
	2023	TPU v5p pod	8,960	4.1 ExaFLOPS BF16	852 TB	(3D torus)	(ICI = scale-up + scale-out)	n/d	Liquid
2025	TPU Ironwood pod	9,216	42.5 ExaFLOPS FP8	1.77 PB	(3D torus)	optical OCS	~10 MW*	Liquid
2026	TPU v8t Sunfish pod	9,600	121 ExaFLOPS FP4	~2 PB	(Boardfly)	optical OCS	n/d	Liquid
	2023	MI300X 8-GPU OAM	8	21 PetaFLOPS FP8	1.5 TB	7.2 TB/s	400 Gbps	~10 kW	Air
2024	MI325X 8-GPU OAM	8	21 PetaFLOPS FP8	2.0 TB	7.2 TB/s	400 Gbps	~12 kW*	Air
2025	MI355X 8-GPU OAM	8	80 PetaFLOPS FP8 / 160 PetaFLOPS FP4	2.3 TB	8.6 TB/s	400 Gbps	~16 kW*	Liquid
2026	Helios (MI455X)	72	1.4 ExaFLOPS FP8 / 2.9 ExaFLOPS FP4	31 TB	260 TB/s	n/d	n/d	Liquid
	2024	Condor Galaxy 3	64 wafers	~1 ExaFLOPS FP16*	2.8 TB SRAM + MemoryX	(Ethernet tree)	1.2 Tb/s Ethernet	~1.5 MW*	Liquid
	2022	Trn1 instance	16	3 PetaFLOPS BF16	512 GB	(2D torus)	~50 Gbps (EFA)	n/d	Air
2024	Trn2 UltraServer	64	83 PetaFLOPS FP8	6.1 TB	(3D torus)	200 Gbps (EFAv3)	n/d	Air
2025	Trn3 UltraServer	144	362 PetaFLOPS FP8	20.7 TB	(NeuronSwitch)	n/d	n/d	Liquid
	2022	GroqRack	64 active (72 installed)	12 PetaFLOPS FP16	14 GB SRAM	3.2 TB/s bisection	(RealScale; no per-chip NIC)	n/d	Air
2026	NVIDIA Groq 3 LPX	256	315 PetaFLOPS FP8	128 GB SRAM + 12 TB DDR5	n/d (640 TB/s aggregate C2C)	n/d	n/d	Liquid

* marks analyst-derived, era-inferred, or vendor-aggregate-derived figures; n/d marks specs the vendor has not disclosed.

What this shows
Per-chip FP8 has converged. B200 (4.5 PF), Ironwood (4.6 PF), and MI355X (10 PF) sit within ~2× of each other. The per-chip arms race is close; the rack and pod are where the architectures diverge.
HBM capacity is AMD's persistent win. 192 → 256 → 288 GB across 2023–2025 has matched or beaten NVIDIA every generation. NVIDIA caught up at 288 GB only with B300 (late 2025); Rubin Ultra retakes the lead at 1 TB / package in 2026.
Rack-scale scale-up is NVIDIA's win until 2026. GB200 / GB300 NVL72 was the only coherent rack-scale domain shipping in 2024–2025; AMD scaled up at the box and didn't reach rack scale until Helios. The TPU sidesteps the question: its torus is the rack and the cluster at once.
TPU pods dwarf any NVIDIA rack in chip count. Ironwood pod = 9,216 chips for 42.5 ExaFLOPS FP8; NVL576 = 576 GPUs for ~5 ExaFLOPS FP8. The TPU's flat-rate-per-chip × massive-pod recipe yields more aggregate compute per system, at the cost of per-chip bandwidth.
Power per chip is rising fast. 700 W (Hopper) → 1,000 W (Blackwell, MI325X) → 1,400 W (B300, MI355X) → ~1,800 W (Rubin Ultra, analyst). Liquid cooling becomes mandatory above ~1,000 W; air cooling effectively ends with Hopper.
Scale-out NIC bandwidth doubles each NVIDIA generation. 400 Gbps (CX-7, Hopper) → 800 Gbps (CX-8, Blackwell) → 1.6 Tbps (CX-9, Rubin). AMD lags one generation (Pollara 400 → Vulcano 800), reflecting Pensando's smaller install base and later integration.
Cerebras breaks the table's axes. No HBM at all: 44 GB of on-wafer SRAM at an aggregate 21 PB/s, ~1.3 bytes per dense FLOP where the GPU rows sit near 0.002. The cost is visible in the same row: less total memory than a single H200, dense FLOPs per watt behind every contemporary GPU, and an empty scale-up column because the coherent domain is the wafer itself.
Trainium competes on economics, not the spec sheet. Per-chip it trails (Trn2's 1.3 PF FP8 is roughly a quarter of MI355X), but the Trn2 UltraServer reached 64-chip rack-scale scale-up in 2024 alongside NVL72, as a message-passing torus rather than a coherent crossbar, and Trn3 pivots to the switched NeuronSwitch fabric. AWS owns every layer from the Nitro card to the API, and one anchor tenant (Anthropic, over a million Trainium2 chips) validates it at frontier scale.
Groq trades capacity for SRAM bandwidth, then scales the memory pool with chip count. The first GroqRack exposes only 14 GB across 64 active chips; Groq 3 LPX grows that to 128 GB across 256 chips at 40 PB/s aggregate SRAM bandwidth. Its 12 TB DDR5 tier and pairing with Rubin show that the LPU complements, rather than replaces, a large-memory GPU rack.`,y1=`# AI 芯片架构 - Jacob Peake

**链接:** https://www.jacobpeake.com/ai-chip-architectures

---

## AI 芯片架构

在 2018 年国际计算机架构研讨会上，John Hennessy 和 David Patterson 做了他们的图灵演讲：“A New Golden Age for Computer Architecture”。

在 1980 年代，当 Hennessy 和 Patterson 做出他们的图灵奖获奖研究时，单线程 CPU 性能每年增长 52%。到 2018 年，随着 Moore's Law 和 Dennard Scaling 的终结，增速降为 3%。

有必要出现领域专用架构（DSAs）。他们的示例工作是 Google 的 TPU v1，已经在生产中：在神经网络推理上比 CPU 提供 29× 的吞吐量，能效提升 80×。他们的结论预测是：“下一个十年将见证计算机架构的寒武纪式爆发。”

这个预测成真了。今天，我们有数十种架构在认真开发中。GPUs、TPUs、LPUs、NPUs、DPUs、ASICs、wafer-scale engines、reconfigurable dataflow、neuromorphic、photonic、analog。特别是，这些架构关注于 AI 的计算。

到目前为止真正部署并取得胜利的架构有：GPUs (NVIDIA, AMD)、systolic-array accelerators (TPU, Trainium)、Cerebras Wafer-Scale Engine，以及 Groq LPU。

NVIDIA 是明显的领跑者；AMD 紧随其后，OpenAI 和 Meta 对两者都有 6 GW 的承诺。TPUs 训练 Gemini 并将为 Anthropic 提供服务，规模可达一百万片芯片；Anthropic 也在超过一百万个 Trainium 芯片上运行 Claude。Cerebras 现在为 OpenAI 提供推理服务；Groq LPU 通过一次 200 亿美元的 acquihire 被并入 NVIDIA。

本文旨在调查这些不同的方法——它们的理念、架构、扩展方法（纵向扩展和横向扩展），以及软件 栈（如何为芯片编程）。

问题所在

AI 计算由 矩阵乘法 主导。一个 transformer 是一系列的 matmuls：Q/K/V 投影、attention、输出投影、FFN——与逐元素操作交错：normalisation、activation、residual adds。训练一个前沿模型会执行
10
25
10
25
 乘-加 操作（矩阵乘法是乘-加操作的序列）。

这些 matmuls 的形状取决于工作负载。训练将一批序列向前通过每一层，反向传播损失，并更新权重，成千上万的 tokens 同时流经同一权重矩阵。Prefill 是推理的提示摄取阶段：完整的输入序列在第一个输出 token 产生之前一次性投影通过模型。训练和 prefill 都将许多 tokens 堆叠到同一个权重矩阵上，所以每层的数学运算是大型的矩阵-矩阵乘法（GEMM），具有高算术强度（受计算约束）。Decode 是自回归的：模型一次发出一个 token，每个 token 都以之前的所有 token 为条件，token N+1 必须等到 token N 产生之后才能开始。每步只投影一个 token，因此每个 matmul 变成矩阵-向量乘（GEMV）。生成一个 token 需要对模型中的每个权重完成一次完整遍历，并且还要完整读取 attention 的 KV Cache。与 prefill 相比，算术强度下降几个数量级。

推理系统通过批处理 token 来恢复部分强度，将这些 GEMV 提升回 GEMM：continuous batching 将许多用户的 decode 步骤堆叠，speculative decoding 为每个请求草稿 K 个 token 并在一次通过中验证它们，multi-token prediction 将同样的技巧折叠在模型内部。这提高了矩阵乘法单元的利用率，并推动每字节操作数（Ops/B）上升。对于 continuous batching，每个用户的请求仍然读取其自己的 KV Cache，因此长上下文 decode 从受权重带宽限制转向受 KV 带宽限制。

这里的架构问题是要足够快地把数据移动到矩阵乘法发生的地方。这就是所谓的 内存墙：计算 呈指数增长，而 内存 带宽没有。

每种架构提出了在数据移动比赛中取胜的不同策略。理解一块芯片归结为四个问题：数据在哪里驻留，如何移动到 计算 单元， 计算 单元长什么样，以及芯片在大规模下如何相互通信。

## NVIDIA GPU

NVIDIA GPU 是一个面向吞吐的大规模并行处理器。其理念是：由主机 CPU 协调并通过 CUDA 暴露、拥有数千线程的可编程芯片，才是运行可并行工作负载的正确机器。每一代都在可编程的 流式多处理器（Streaming Multiprocessors, SM）上加入加速原语而不改变编程模型。同一块芯片既能训练 transformers、提供推理、渲染图形，又能运行科学模拟（加速计算）。

### 谱系
2006  
TeslaG80  
首款支持 CUDA 的 GPU；统一着色器与 SIMT 执行模型。  
2010  
FermiGF100  
首个真正的通用计算架构：统一 L1/L2 缓存、双 warp 调度器、IEEE-754 FP64。  
2012  
KeplerK20, K40  
SMX、动态并行、Hyper-Q；GPU 可自行发起工作。  
2014  
MaxwellM40  
重设计的 SM，相比 Kepler 约 2× 的每瓦性能。  
2016  
PascalP100  
NVLink 1.0、HBM2、原生 FP16 吞吐；首款为深度学习显式设计的 GPU。  
2017  
VoltaV100  
首代 Tensor Cores；独立线程调度。  
2018  
TuringT4  
第二代 Tensor Cores，支持 INT8/INT4；首代 RT Cores。  
2020  
AmpereA100  
第三代 Tensor Cores，支持 TF32 与结构化稀疏性；Multi-Instance GPU 分区。  
2022  
HopperH100, H200, GH200  
第四代 Tensor Cores、FP8、Transformer Engine；HBM3、TMA、线程块簇、异步 wgmma。  
2024  
BlackwellB100, B200, GB200  
第五代 Tensor Cores，支持 FP4、Tensor Memory (TMEM)、双晶粒 chiplet GPU、NVLink 5。  
2025  
Blackwell UltraB300, GB300  
中期升级：~1.5× FP4 吞吐、288 GB HBM3e。为长上下文推理调优。  
2026  
RubinRubin, VR200, Rubin CPX  
HBM4、第三代 Transformer Engine、与 Vera CPU 配对、通过 Rubin CPX 实现解耦的 prefill。  
2027  
Rubin UltraRubin Ultra  
四晶粒 GPU 封装，每包 1 TB HBM4e。在 600 kW 的 NVL576 Kyber 机架中部署，每颗 GPU 达到 100 PetaFLOPS 的 FP4 性能。

### 架构

一颗 NVIDIA GPU 是一组面向吞吐的内核、一条深层次的内存层级以持续供给它们，以及恰到好处的调度逻辑以让数千线程同时在飞行。内核是 流式多处理器（SM），在封装内复用 100+ 次：V100 为 80 个，A100 为 108 个，H100 为 132 个，B200 为 148 个，B300 为 160 个，Rubin 为 224 个。在每个 SM 内部都有同一套配方：四个 SM 子分区，每个都有各自的 warp（线程束）调度器、发射单元、16k×32-bit 寄存器文件、标量 CUDA Core 通道、用于超越函数的 Special Function Unit，以及通往该 SM 的 Tensor Cores 的私有端口。四个分区共享一个 L1/共享内存（shared memory）模块，以及 TMA。线程按 32 个为一组组成线程束（warp），以 SIMT 锁步执行；每个分区常驻数十个线程束，调度器通过在它们之间切换来隐藏内存/算术停顿。

计算

CUDA Cores 是最早的计算吞吐来源，并且在 AI 中仍承担除 matmul 之外的所有事务：activation、residual add、normalization、地址算术。但一个 transformer 块的 ~99% FLOPs 来自 matmul，因此压倒性的计算吞吐来自 Tensor Cores。

这些内核在小矩阵 tile 上执行融合的矩阵乘-加运算， 
𝐷
=
𝐴
⋅
𝐵
+
𝐶
D=A⋅B+C 完整的矩阵乘法会被分解为输出 tiles：为了产生一个输出 tile，kernel 沿共享的内层维度 
𝐾
K 迭代，从左侧输入矩阵的行条带中取 
𝐴
A，从右侧输入矩阵的列条带中取 
𝐵
B，并将每个部分积折叠进一个持续累加器。 
𝐶
C 保存当前的部分和， 
𝐷
D 是带入下一步的更新值。完成内层循环后， 
𝐷
D 就是完整输出矩阵的一个已完成 tile；整个矩阵乘法由许多这样的 tile MMA 构成。

Tile 形状写作 M × N × K， 
𝑀
×
𝑁
M×N 是输出 tile 的尺寸， 
𝐾
K 是该指令在一次发射中沿内层维度收缩的大小；矩阵乘法其余的 
𝐾
K 轴由 kernel 的内层循环遍历。累加器在该循环中保持“黏性”：每次 MMA 的输出 
𝐷
D 会成为下一次 MMA 的输入 
𝐶
C，因此该等式本质上是就地的 
𝐶
←
𝐴
⋅
𝐵
+
𝐶
C←A⋅B+C：连续的指令将它们的部分积折叠进同一存储，直到 K 轴被完全走完。

V100 的第一代单元（每个 SM 8 个）在一个线程束范围内运行 16×16×16 的 FP16 MMA。A100 的第三代单元新增了 TF32、BF16、FP64 matmul，以及 2:4 结构化稀疏。H100 的第四代单元新增原生 FP8，并将抽象从单个线程束提升到线程束组：128 个协作线程发射一个 64×256×16 形状的异步 wgmma，它在后台运行，而发射的线程束加载下一块 tile。B200 的第五代单元更进一步：跨两个 SM 的 256×256×16 MMA，操作数在一对 SM 之间拆分，原生 FP4，并为每个 SM 配备一个专用的 256 KB Tensor Memory (TMEM) 暂存存储器，用于承载累加器 tiles，而不是侵占寄存器文件。Rubin 的第六代单元扩展了 FP4 吞吐，新增原生 FP6，并配套第三代 Transformer Engine，在硬件中执行自适应 NVFP4 微块缩放，将每 tile 的量化元数据保留在 Tensor Core 路径上，而不是经由 CUDA Cores。

在所有六代中保持不变的是：matmul 生活在 线程/线程束 层级之内，但发射一次所需的线程数量在缩减，且发射本身正在与执行解耦。Volta 的 mma.sync 是线程束协作且同步的：一个线程束内的全部 32 条线程共同执行，每条通道持有 A、B 和累加器 D 的寄存器碎片，并且该线程束会阻塞直至完成。Hopper 的 wgmma.mma_async 将发射主体扩展到 128 线程的线程束组，将 B 移入共享内存描述符（A 变为可选：寄存器或描述符，kernel 自行选择），并立即返回：matmul 在后台运行，而线程束组排队下一块 tile，完成则通过 wgmma.commit_group / wgmma.wait_group 跟踪。

Blackwell 的 tcgen05.mma 完成了迁移：A 与 B 一起进入共享内存描述符（或 A 直接来自 TMEM），而累加器 D 落在 TMEM 而非寄存器文件。随着所有操作数都离开了线程通道，发射无需协调逐线程状态，因此单个线程即可发射该指令并立即返回，完成由消费者线程束等待的 mbarrier 信号标记。其余线程束成员以及发射线程本身都可在此期间处理其他工作。一个 CTA 配对变体将同一模型扩展到两个 SM：成对簇中的每个 SM 各由一个线程发射协同的 MMA，在这对 SM 之间共享操作数，在同样的异步/mbarrier 完成机制下组合出 256×256×16 的双 SM tile，只是屏障被提升为簇级屏障以保持两者步调一致。

matmul 在变得更“大”的同时，也对发射线程更“轻”：一条最初由 32 条通道锁步执行的指令，如今更像是一条由描述符驱动的命令，从线程束模型内部发出，但已不再由它执行。

这种解耦正是让 transformer attention kernel 在 GPU 上高效的原因。在线程束等待 matmul 期间，它可以运行 softmax、应用掩码，或预加载下一块 tile；matmul 与其周围逐元素工作的交叠，构成了每个现代 attention kernel（FlashAttention-3、FA4）的结构，且依赖于矩阵指令不阻塞线程束。

内存

片上层级在每一层都是硬件管理的缓存，并在其上叠加软件提示。片外是 HBM：V100 为 32 GB HBM2，H100 为 80 GB HBM3，B200 为 192 GB HBM3e，B300 为 288 GB，Rubin 为 288 GB HBM4。芯片级 L2 Cache 位于 HBM 与 SM 之间：V100 为 6 MB，A100 为 40 MB，H100 为 50 MB，B200 为 60 MB（在双晶粒封装上分为两个 30 MB 分区，具备感知局部性的驻留控制，可将热点 tiles 固定在近端晶粒）。在每个 SM 内，256 KB 的统一 L1/SMEM 在 kernel 启动时在硬件管理的 L1 与程序员控制的共享内存（作为暂存存储器）之间进行分区。寄存器文件每个 SM 约 ~256 KB，按四个子分区切片。

Blackwell 增加了第五层：TMEM，每个 SM 256 KB，专用于 MMA 累加器，仅由 Tensor Core 寻址，将操作数驻留压力从通用寄存器文件中抽离。

层级之间的移动已逐代从线程束中解耦。Ampere 之前，加载一个 tile 是同步的：每条线程各自发起全局加载，线程束阻塞直至所有碎片落入寄存器，然后第二遍拷贝到共享内存；每个 tile 都要消耗线程束通道做地址算术并等待。Ampere 引入 cp.async：逐线程的异步拷贝 HBM → SMEM，完全绕过寄存器，线程束仅在消费者需要数据时提交在飞拷贝组并等待。Hopper 用 TMA（专用 DMA 引擎）取代：单个线程提交一个多维 tile 描述符（基地址、行领先维度、置换模式），引擎处理全部地址算术并写入共享内存，完成则由 mbarrier 发信号。整个线程束从加载发射与地址计算中解放；kernel 只需排队描述符。TMA 还支持簇级多播：一次 HBM 读取扇出到线程块簇中的每个 SM，将原本 N 次独立加载变为一次。Blackwell 进一步扩展 TMA：直接加载进 TMEM，使累加器 tiles 流入时无需经由 SMEM 中转。演进轨迹是：每代都让线程束在每个 tile 上少做一件事。

Warp 专门化

Hopper 时代的编程习语是 warp（线程束）专门化：在同一线程块内，部分线程束作为生产者，背靠背发射 TMA 加载；其他线程束作为消费者，在新到达的 tiles 上发射 wgmma。它们之间的同步不再是老式的 SM 级 __syncthreads() 屏障；而是 mbarrier（驻于共享内存中的内存屏障）和附着在 TMA 完成事件上的异步事务屏障，允许在线程束粒度而非线程块粒度进行细粒度的生产者/消费者握手。已经成为每个现代 attention kernel（FlashAttention-3、CUTLASS 乒乓 GEMM、Blackwell 的 FA4 kernel）参考范式的模式有相同配方：由 TMA 驱动的生产者流水线通过共享内存与 TMEM 供给 wgmma 消费者流水线，借助 mbarrier 握手与线程块簇（Hopper+）把多个 SM 绑成一个协同的 计算 单元，从而让 Blackwell 的双 SM MMA 自然地在其上组合。

数值表示

FP32 曾是历史默认；Volta 带来 FP16（FP32 累加）以及让其可训练的 loss-scaling 技巧；Ampere 新增 TF32（FP32 动态范围、FP16 尾数，可直接替换 FP32 matmul）、BF16，以及 2:4 结构化稀疏（在剪枝权重上使有效吞吐翻倍）。Hopper 引入原生 FP8（E4M3 与 E5M2），并配套 Transformer Engine，按层自动缩放 activations 以保持在 FP8 动态范围内。Blackwell 再次将精度减半至 FP4，并推出 microscaling MX 格式（块级共享指数，找回在 FP4 下流失的大部分精度），同时配套第二代 Transformer Engine 将自动缩放流水线重定向到 FP4。Rubin 的第三代 Transformer Engine 新增 NVFP4（NVIDIA 收紧约束的 FP4 变体）与原生 FP6，并配合更激进的稀疏性。芯片版图本身如今也是数值故事的一部分：B100/B200/B300 是两块达到光罩极限的晶粒，由 ~10 TB/s 的 NV-HBI 链接缝合，并以一个逻辑 GPU 呈现给软件，封装上配有 8 叠 HBM；Rubin 将 chiplet 配方扩展为双晶粒，约 ~336 B 个晶体管并配 8 叠 HBM4。每一代大致通过将位宽减半并用更细粒度的缩放方案恢复精度来实现约 2× 的每瓦吞吐，同时越来越多地通过将更多硅片绑定进封装实现这一点。

押注
押注 1：可编程性。工作负载在不断变化（attention 变体、新颖的模型架构），因此保持每个模块可编程，并让开发者编写 CUDA。即便是专用单元，也通过这一模型暴露，而不是作为固定功能模块。  
押注 2：用海量多线程隐藏延迟。延迟不可预测且与数据相关，因此不是用静态调度，而是用海量线程超额提交来隐藏它，每个 SM 最多 64 个常驻线程束，由硬件 warp 调度器每个周期挑选就绪线程束。  
押注 3：由线程束“包裹”的 matmul。矩阵单元是压倒性的计算吞吐来源，但它必须处于与其他一切相同的 线程束/线程 抽象之后，因此用 mma.sync → wgmma → tcgen05.mma 来封装——而不是将其暴露为固定功能流水线。这样单个 kernel 就能在一次通过中融合 matmul、softmax 与逐元素操作。  
押注 4：异步内存层级。让内存层级显式且由程序员管理，而非隐式且由 编译器 调度。保留 L2 cache，但将 SMEM 与 TMEM 暴露为具名暂存存储器，并在其上分层异步机制：用于批量拷贝的 TMA、用于 matmul 累加器的 TMEM、用于生产者/消费者握手的 mbarrier。该层级在可编程 kernel 内以软件流水的方式运作，而不是由 编译器 针对已知延迟的暂存存储器静态调度。  
押注 5：摊销的 SIMT 税负。每一颗花在 warp 调度器、寄存器文件或一致性缓存上的晶体管，都是没有花在 MAC 上的晶体管；接受这笔税，并以两种方式摊销它：如今的 Tensor Core 足够大，使 SIMT 机制被摊销在更庞大的 MAC 数量之上；同时像 TMEM 这样的单元用牺牲部分通用灵活性来换取更高的 MAC 密度。

### 扩展

扩展有两种范式：纵向扩展 与 横向扩展。

纵向扩展  
将多块 GPU 绑定为一个一致内存域。任何 GPU 都能以纳秒级延迟通过 NVLink 直接加载或存储其他 GPU 的 HBM：一个地址空间，无需显式传输。  
横向扩展  
在机架与集群层级将这些域联网。数据通过显式 RDMA 以微秒级延迟跨越：地址空间分离，但每个集群可达数万片芯片。

AI 基础设施同时使用两者：带宽饥渴的集合通信（张量并行、MoE expert 路由）停留在 纵向扩展 域内；数据并行与流水线并行则跨越 横向扩展 互连。

纵向扩展

纵向扩展栈由 NVLink 与 NVSwitch 构成。NVLink 实现 GPU 之间的 cache-coherent 互连，因此一块 GPU 上的加载或存储可以以硬件处理地址翻译与一致性的方式指向另一块 GPU 的 HBM。但 NVLink 本身是点对点的：一条链路只连接两颗芯片。NVSwitch 是一颗专用交叉开关芯片，所有 GPU 都连接到它上面，由它路由流量，使每块 GPU 都能在满 NVLink 带宽下同时与每一块其他 GPU 通信，非阻塞且全互联。

二者共同定义了 HGX 8-GPU baseboard，将八个 H100 SXM 模块通过 PCIe Gen5 与 x86 主机（AMD EPYC 或 Intel Xeon）配对。Hopper 还发布了 Grace 配对形态：GH200 Grace Hopper Superchip 通过 900 GB/s 的 NVLink-C2C 将一颗 Grace ARM CPU 与一颗 H100 绑定，消除了主机-设备之间的 PCIe 跳跃。模块进一步扩展为 GH200 NVL2 配对与机架级 GH200 NVL32。Blackwell 将这种配对设为默认。GB200 模块通过 NVLink-C2C 将一颗 Grace 与两颗 B200 融合，NVL72 则将其中的 36 个缝合为一个单一液冷的 纵向扩展 域：72 颗 GPU、36 颗 Grace CPU、13.5 TB 的 HBM 与 17 TB 的 LPDDR5X 构成一个平坦的一致地址空间。Rubin 将此分两步推进。NVL144 将在 2026 年作为 Rubin 世代在同一 Oberon 级机架内的刷新推出：72 个 Rubin 封装，在 NVIDIA 新的按晶粒计数命名法下标记为 144 GPUs，并以 HBM4 与 NVLink 6 将每封装带宽翻倍。真正的机架级飞跃是 2027 年的 Rubin Ultra：NVL576 在新的 Kyber 机箱中整合 144 个四晶粒 Rubin Ultra 封装，在一个一致域中实现 576 颗 GPU 晶粒。

如此的密度由无源铜缆维系。NVL72 的 NVLink 结构经由 5,184 根电缆穿透背板盲插（每个机架约 ~2 英里的布线，无需线缆内重定时器，SerDes 位于 GPU 与交换 ASIC 本体），在 72 颗 GPU 间承载约 ~130 TB/s 的全互联带宽。NVIDIA 估计，与需要在每条链路上配插拔式收发器的光方案相比，选择铜缆大约每机架可节省 20 kW。正是铜缆让“机架即一块 GPU”在经济上可行：在不足 2 米的距离内，它依然在功耗、成本与单位美元的信号完整性上占优；超出该距离，位才需要上玻璃（光纤）。

NVL144 仍置于 Oberon 内，且由于封装数量（72）与 NVL72 相同，铜缆继续奏效；布线无需加长，只需在第 6 代 SerDes 上以更高速传输。Rubin Ultra 的 NVL576 通过重塑机架外形维持相同的铜缆策略：新的 Kyber 形态大约是 Oberon 的两倍高，并将全部 576 颗 GPU 晶粒装入同一机箱，其尺寸专为确保即便在 144 个四晶粒封装与数万根电缆下，每一条 NVLink 路径仍保持在被动铜缆的可达范围内。

横向扩展

横向扩展栈来自他们对 Mellanox 的收购。不同于 NVLink，横向扩展互连网络不是一致性的：节点保持独立的地址空间，数据仅通过由软件发起的显式 RDMA 跨越，通常封装在 NCCL 的集合通信中，如全规约或全到全。参考集群是 DGX SuperPOD：八个 NVL72 机架通过 Quantum-X800 InfiniBand 互连，在单一调度器下提供 576 个 Blackwell GPU；训练集群通过平铺 SuperPOD 进一步扩展。2026 年的 Rubin SuperPOD 维持相同的 8 机架模式，采用 NVL144（每个 SuperPOD 提供 1,152 个 GPU，而非 576 个）。2027 年的 Rubin Ultra 将该方案按数量级放大：每个 Kyber 机架包含 576 个 GPU 裸片，通过 Quantum-X Photonics CPO 互连，使数千个 GPU 置于同一调度器之下。

每个 GPU 都有它自己的 ConnectX NIC 连接到该互连网络。Blackwell 节点在每个 GPU 上运行 ConnectX-8，带宽为 800 Gbps，每 GPU 的横向扩展带宽比每 GPU 的 NVLink 少一个数量级，延迟也从纳秒级上升到微秒级。Rubin 则将每 GPU 的带宽提升到 1.6 Tbps 的 ConnectX-9，使每 GPU 的横向扩展带宽翻倍，同时每机架的纵向扩展域从 72 个 GPU 扩展到 576 个 GPU。每个 NIC 旁边都有一个 BlueField DPU，增加了 ARM cores 和加速器，以将存储、网络和安全的负载从主机 CPU 上卸载出来。对于偏好以太网而非 InfiniBand 的客户，Spectrum-X 是针对 AI 流量调优的无损以太网替代方案。

铜到光纤的跨越发生在机架边界。在 NVL72 内部，骨干是铜缆；一旦链路必须以 800 Gbps 跨机架传输，就必须使用光学链路。被动铜缆 DAC 在 200 G/lane 下的大约 1.5–2 米处达到极限，远不能跨越机架，因此今天的 SuperPOD 骨干通过 OSFP-RHS 可插拔式收发器传输，每个模块都携带自己的激光器、调制器、光电探测器和 DSP。从光学角度来看，一个向数千个 GPU 放射的 SuperPOD 骨干意味着成千上万的可插拔模块，仅收发器激光器就消耗数十千瓦。

在 Rubin 中，这一光学层被折叠进了交换机 ASIC。Quantum-X Photonics（InfiniBand）和 Spectrum-X Photonics（Ethernet）用共封装光学器件取代了可插拔模块：通过 TSMC COUPE 将激光器、调制器和光电探测器键合到交换芯片封装上。NVIDIA 声称与 OSFP 插拔等效方案相比，激光器数量减少约 4×，链路功耗降低约 3.5×。曾经把 GPU 变成双芯片封装并把 HBM 堆叠到其旁边的 chiplet 逻辑现在出现在了网络层面：在同一基板上实现计算、内存和光子学的纵向集成。

NVLink Fusion 最近打开了纵向扩展互连网络本身：第三方 CPU 和 XPU 现在可以加入 NVLink 域，允许超大规模云提供商在不必从头设计自己的一致性互连网络的前提下，围绕 NVIDIA 的互连构建半定制机架。

## 软件

CUDA 是面向大规模并行处理器的自然编程模型。你编写一个核函数（每个线程执行一次的那段代码），并在成千上万的线程上启动它，这些线程被组织成线程块和线程束；程序员决定它们共享什么、何时同步，以及每个线程处理问题的哪一部分。这就是为什么这个抽象在十八年里几乎没有改变，以及为什么自 2007 年以来编写的每一个 CUDA 核函数都仍然可以在 Blackwell 上编译并运行。

这种连续性既是护城河也是约束。每一代新硬件都会在相同的 核函数-与-线程束 模型上引入新硬件（Tensor Cores、TMA、TMEM），并以 PTX 和 SASS 中的内建函数的形式暴露：mma.sync、wgmma.mma_async 等。NVIDIA 无法对 SM 进行彻底的重新设计，因为太多代码依赖于它；作为回报，对 CUDA 软件的每一项投资都会跨代复合增长。

在 PTX 之上是一个构建了二十多年的软件栈。用于数学和 DNN 原语的 cuBLAS 和 cuDNN；将数十年 GEMM 专业知识编码为模板化 C++ 的 CUTLASS；用于分页注意力、在飞行批处理和推测解码的 TensorRT-LLM；通过 PyTorch、Triton 和 JAX 的框架绑定。

FlashAttention，这是现代 AI 中最重要的算法重写之一，将 attention 切片以避免物化那块 O(N^2) 矩阵。它的四代（FA1 到 FA4）每一代都针对最新的 NVIDIA 硅片进行了手工优化（FA3 针对 Hopper 的异步流水线，FA4 针对 Blackwell），移植到其他硬件的版本通常滞后数月或数年。

这个大部分软件栈是由 NVIDIA 不付薪酬的人编写的。护城河不是 CUDA 本身；而是两十年的第三方核函数、库和工具，以及沿途学会该 API 的数百万开发者。

NVIDIA 还在硅片之外一起交付人类的专业知识。他们将数十名自己的工程师嵌入前沿实验室和超大规模云团队，针对每一种新模型架构编写核函数，并针对每一代新硅片进行调优。一个实验室下个月想要训练的东西通常在 NVIDIA 平台上运行得比其他平台快得多。因此，关闭对 NVIDIA 的依赖并不仅仅是重写核函数和库。这意味着要重新训练整个工程团队的心理模型，并且会失去今天坐在客户大楼内的 NVIDIA 工程师。

## Google TPU

TPU 是一台矩阵乘法机。其理念不是一个可编程的芯片能运行任何大规模并行的工作负载，而是专注于单一原语（在大型脉动阵列上的稠密矩阵乘法），并让 XLA 编译器提前规划好每一个周期和每一个字节的内存。没有硬件调度器、没有缓存、没有线程/线程束。每一代都会扩大 pod，数千颗芯片通过 ICI 互连布线成为一台一致性机器。TPU 无志于渲染图形或运行科学仿真；它的存在是为了以比任何通用替代方案更高的每瓦效率来训练和服务 Google 的工作负载（搜索、翻译、推荐、Gemini）。

### 谱系
2015  
TPU v1v1  
首款量产深度学习 ASIC；仅支持通过 PCIe 的 INT8 推理。

2017  
TPU v2v2  
首款支持训练的 TPU；将 MXU 从 INT8 切换到 BF16，确立双 TensorCore + HBM。

2018  
TPU v3v3  
首款液冷 TPU；相较 v2 将 MXU 和 HBM 翻倍；1,024 芯片 pod。

2020  
TPU v4v4, v4i  
首批可重构光路交换机（Palomar）；SparseCores；同时支持 BF16 与 INT8；4,096 芯片 pod。

2023  
TPU v5v5e, v5p  
v5e 追求效率，v5p 追求性能；v5p 具有 v4 的 3.3× INT8 FLOPs 与 2.2× HBM 带宽，8,960 芯片 pod。

2024  
Trilliumv6e  
首个 256×256 MXU；在相近功耗下实现 v5e 峰值 FLOPS 的 4.7×；用于训练 Gemini 2.0。

2025  
Ironwoodv7  
为推理型推理模型而构建；新增原生 FP8；42.5 ExaFLOPS FP8 的 9,216 芯片 superpod。

2026  
TPU v88t, 8i  
8t 用于训练，8i 用于推理；新增原生 FP4；9,600 芯片 superpod，121 ExaFLOPS FP4（8t）。

### 架构

一颗 TPU 芯片是一台被恰到好处的硅片所包裹、以确保其数据供给的矩阵乘法引擎。计算单元是 TensorCore：自 v2 起的旗舰芯片每封装携带两个；面向效率调优的芯片（v4i、v5e、v6e）携带一个。在每个 TensorCore 内部都存在相同的五组件配方：一个或多个用于矩阵运算的 MXU、用于元素级运算的 VPU、负责全局控制的 Scalar Unit、用于跨通道归约的 XLU，以及一个附带的 Transpose/Permute Unit，外加为 MXU 提供输入/输出的累加器队列。从 v4 开始，每颗芯片还在 TensorCore 之外携带专用的 SparseCore 数据流引擎（v4、v5p 和 Ironwood 每芯片 4 个；Trillium 每芯片 2 个），明确划出以吸收对嵌入查找这种脉动阵列形状不匹配的工作负载。每个模块都位于由 Core Sequencer 驱动的单一 VLIW 发射平面上，该调度器在每个周期填满一个 322-bit 包的全部 8 个功能槽位。没有指令缓存未命中、没有线程束调度器、没有乱序引擎、没有分支预测：编译器就是调度器，节省下来的硅面积用于放更多的 MAC。

#### TensorCore

MXU 是脉动阵列。v1 提供一个 256×256 的 INT8 推理阵列；v2 首次支持训练，并引入 128×128 单元，执行 BF16 乘法并以 FP32 累加（自 v4 起 INT8 以等效吞吐回归 MXU）。每个 TensorCore 的单元数量从此增长：v2 上为 1 个 MXU → v3 上为 2 个 → v4/v5e/v5p 上为 4 个。Trillium 回到 256×256（每阵列每周期 65,536 个乘加单元），而 Ironwood、8t 与 8i 都保持 256×256 的形状。

要计算 C=A×B，矩阵 B 的值按每个单元一个权值的方式预加载：权值驻留数据流，这是将 TPU 与其他输出驻留阵列区分开的选择。激活从左边缘进入，每周期传播一列，在每个单元与其常驻权值相乘，部分和向下流入底部的累加器队列。一旦数据进入阵列，就不再发生内存访问：每个权值会对通过的每个激活重复使用，每个激活会在一行中被复用 128（或 256）次。数据复用是以硅中硬连线的方式实现的，而非由缓存仲裁。计算中的主导成本不是乘法本身（几皮焦耳），而是读写内存（每次访问高 100–1000× 的能耗）；脉动阵列通过构造直接删除了这部分成本。权衡在于填充不足：当在 256×256 阵列上做 128×128 矩阵乘时有 75% 的硅处于浪费状态，因此 XLA 会将维度分块、填充并调度到 128 的整数倍（v6e+ 上为 256），模型代码也以这些量化单元为前提来编写。

VPU 是第二主角的计算引擎，但在很多方面更有趣：每台 TPU 都是一台二维向量机，而不是一维 SIMD 机器。VPU 的寄存器文件保存二维 VREG。v4/v5p 上的形状为（8，128）：宽 128 个通道、深 8 个子通道，每核寄存器数量在 v4 为 32、v5p 为 64，每个（通道、子通道）上有 4 个独立的浮点 ALU。通道轴与脉动阵列的输入宽度相匹配，因此在 Trillium 和 Ironwood 上通道数大概随 MXU 一起加宽到 256；Google 并未公布 v5p 之后的 VPU 规格。子通道轴让 VPU 能以每 X 个时钟一个矩阵乘的速率将分块流经 MXU（其中 X 为子通道维度）。现代 TPU 程序的大部分加速来自 VPU/MXU 的重叠：量化、层归一化、softmax、激活和加偏置都在 VPU 上运行，同时 MXU 在其背后并行运行矩阵乘。跨通道归约（对任何二维向量 ISA 而言都是棘手场景）由 XLU 处理：更慢、更昂贵，也是已知的编译器热点。与二维形状不对齐的布局变换由专用的 Transpose/Permute Unit 吸收，从而避免往返内存。

Scalar Unit 是最小但可能最关键的模块：一个单线程、双发射的整数 ALU，带有 32 个 32-bit 寄存器和 4 KiB 的 SMEM 控制状态，并配有保存程序的 Imem。它是唯一进行指令提取的模块；每个周期拉取一个 322-bit 的 VLIW 包，本地执行自己的两个标量槽位（地址运算、循环计数器、分支、同步寄存器检查），并将其余六个槽位分派给芯片的其他部分：2 个向量 ALU（VPU）、2 个向量装/存（HBM↔VMEM 的 DMA）、2 个矩阵（压入/弹出 MXU 队列）。模块间同步是显式的：同步标志跟踪 MXU 和 VPU 管线是否繁忙，编译器插入屏障检查，而不是由硬件跟踪依赖关系。正是 Scalar Unit 让其余 TensorCore 看起来像固定功能的数据流：每个周期有一个地方决定发生哪八件事，且没有动态重排序缓冲来撤销一个糟糕的决定。

#### 内存

片上内存层次与计算侧是同一理念：没有缓存，每一层都由软件管理。片外是 HBM（v2/v5e 为 16 GB，v3/v4/v6e 为 32 GB，v5p 为 95 GB，Ironwood 为 192 GB，v8 代为 216–288 GB），片上是显式可寻址的分层暂存存储器。最靠近计算的是 VMEM，这个向量暂存存储器同时为 VPU 和 MXU 输入队列供数，v4 为 32 MiB，v5e 为 128 MiB，面向推理调优的 v8i 拉长到 384 MiB，目的正是将整个 KV 缓存装入片上。其上是 CMEM，于 v4 引入、容量 128 MiB：一个更慢更大的 SRAM 过渡区，位于 HBM 与 VMEM 之间，吸收融合算子的中间结果。Scalar Unit 有自己专用的 SMEM（v4 上约 10 MiB 用于控制状态）和一个很小的标量寄存器文件。程序中的每个张量在编译时被固定到某一层；XLA 的缓冲区分配通道会调度层间的 DMA，使数据在被消耗的前一个周期恰好到达。硬件不做预取、不做驱逐、不做一致性；当编译器做对时，阵列从不停顿；当做错时，没有后备路径。

#### SparseCore

位于 TensorCore 之外、打破脉动阵列模式的模块是 SparseCore，自 v4 引入。推荐与排序模型依赖嵌入查找（对庞大表进行数十亿次索引），其访问模式与稠密矩阵乘相反：不规则、间接、全到全。一个 256×256 的脉动阵列恰恰是错误的形状。SparseCore 是一个数据流处理器，带有 16 个计算小片与专用 SPMEM 暂存存储器，旁路部署在 TensorCore 侧边，吸收散射、聚集和分段归约原语，以及分片嵌入表产生的数据相关全到全通信。这样在仅约 5% 的芯片面积与功耗下，实现了嵌入密集型模型 5–7× 的加速。v4 每芯片提供 4 个 SparseCore，v5p 维持同等数量，Trillium 降至 2 个，Ironwood 回到 4 个（其双裸片封装中每个 chiplet 2 个）。v8i（Zebrafish）推理芯片完全移除了 SparseCore，并在 I/O chiplet 上以 CAE（集合通信加速引擎）取而代之：问题不同（自回归解码过程中的集合规约），思路相同（从主核剥离一个小型加速器来吸收脉动阵列形状不匹配的工作负载）。

#### 数值

TPU v1 仅支持 INT8 推理；v2 将标准训练格式切换为 BF16：与 FP32 相同的动态范围、占用一半内存、无需损失缩放技巧。v4 重新引入原生 INT8 支持。随后 Ironwood 新增原生 FP8 支持（E4M3 与 E5M2），在相同面积下实现约 BF16 的 2× 吞吐。v8 新增原生 FP4，并在 MXU 内部加入分块尺度乘法，从而删除 Ironwood 仍需在 VPU 上支付的反量化开销。现代每个 TensorCore 都在硬件上支持随机舍入：由较低位尾数作为概率来做舍入决策，这在长时间训练中保持低精度累加的期望值，是让 BF16/FP8 缩小与 FP32 准确率差距的细节之一。

在芯片边界处是 ICI 端口本身（二维环面芯片 v2/v3/v5e/v6e 为 4 个端口，三维环面旗舰 v4/v5p/v7/8t 为 6 个），以及用于横向扩展的 DCN NIC。从芯片层面看，ICI 端口就像是 Core Sequencer 可以在 VLIW 包内指向的另一组 DMA 引擎：远端张量发送与一次 VMEM→HBM 传输属于同一类指令，编译器将集合通信视作其为计算与本地内存构建的整体调度的一部分。

#### 赌注
赌注 1：脉动阵列。矩阵乘主导工作负载，因此把硅面积花在脉动阵列上。  
赌注 2：软件管理的暂存存储器。计算便宜而内存昂贵，因此在阵列的连线上复用数据，并用软件管理的暂存存储器取代缓存。  
赌注 3：编译器调度。工作负载是静态可预测的，因此把调度移入编译器：VLIW 发射、无推测、无乱序、无动态调度器。  
赌注 4：只做 MAC 的硅。功耗比峰值更重要，因此删除每一个不执行乘加的晶体管：每个缓存标签、每个分支预测器、每个重排序缓冲。  
赌注 5：阵列外专用引擎。稠密矩阵乘阵列对某些真实工作负载（嵌入、集合通信）是错误的形状，因此剥离小型专用引擎（SparseCore、CAE），而不是扭曲主核去适配它们。

### 扩展

TPU 的纵向扩展故事与 NVIDIA 的相反。NVLink + NVSwitch 让其他每颗 GPU 的 HBM 看起来像本地内存（硬件管理的一致性地址空间），而 Google 的 ICI 是消息传递。没有远程加载语义、没有缓存一致性、没有交叉开关。每个多芯片操作都是由 XLA 编译的显式集合通信。纵向扩展域不是由交换互连织起来，而是由环面（芯片直接与邻居连线，且边缘回绕）系在一起，并在机架边界由光路交换机缝合。

#### 纵向扩展
通过 ICI 将芯片直接按二维或三维环面连线。XLA 发出 SPMD 集合通信，将数千个 TPU 严密编排为一个程序。无一致性，但在低延迟下具备巨大的截面带宽。

#### 横向扩展
通过数据中心互连网络将多个 pod 连接起来：芯片数量远超一个 ICI 域所能容纳，但每芯片带宽更低。当前：Virgo 处理东西向 TPU 流量（v8t+），Jupiter 处理南北向。Multislice + Pathways 在多个 pod 上编排 SPMD。

#### 纵向扩展

ICI 链路直接从 TPU 裸片引出：高速串行通道，在一个 64 芯片立方体内使用直连铜缆（一个 4×4×4 的排列，位于单个液冷机架内），立方体之间使用光链路。每芯片聚合 ICI 带宽从 v2 上的约 250 GB/s 演进到 Ironwood 上的 1.2 TB/s 双向，在 v8t 上再翻一番。拓扑按代际交替：面向效率调优的芯片（v2、v3、v5e、v6e）为二维环面，旗舰（v4、v5p、v7、v8t）为三维环面。

没有 NVIDIA 对应物的组件是 Palomar OCS：一种位于立方体之间的 3D-MEMS 光路交换机。微小镜面通过物理转动将任意输入光纤映射到任意输出。一个 v4 superpod 使用 48 台 Palomar 交换机将 64 个立方体（4,096 颗芯片）连成一台三维环面机器；v5p 和 Ironwood 按同一方案放大。重配置是毫秒级的，而非纳秒级，但这没有问题，因为 OCS 是电路交换：在作业启动时选择一种拓扑，运行一周，然后为下一个工作负载重配置。三个问题被折叠到一个组件里：按工作负载进行拓扑重配置（扭曲环面可带来最高 70% 的截面带宽提升）、按需进行子 pod 切分，以及容错（当一颗芯片故障时，OCS 以光学方式切入一颗备用立方体，训练即可在不丢失 ICI 域的情况下继续）。

这使 superpod 成为纵向扩展的单位：在角色上等同于 NVIDIA 的 NVL72，但大两个数量级。v4 为 4,096 颗芯片；v5p 为 8,960；Ironwood（TPU v7）为 9,216 颗芯片，按 144 个 64 芯片立方体排列，作为一个一致的 ICI 域呈现 1.77 PB 的 HBM（约 68 PB/s）与 42.5 ExaFLOPS FP8。

TPU 8t（Sunfish）将其扩展到 9,600 颗芯片、2 PB 的 HBM（约 62 PB/s）和 121 ExaFLOPS FP4。TPU 8i（Zebrafish）为 1,024 颗芯片，约 295 TB 的 HBM（8.8 PB/s），约 10 ExaFLOPS FP4。8i 用一种称为 Boardfly 的新型分层高径数拓扑取代了环面（4 芯片环 → 8 块板卡组成的组 → 最多 36 个组由 OCS 连接），将全到全延迟减半。这是为 MoE 推理而设计。三维环面在集合通信是近邻模式时表现出色（环形全规约每个周期都会使用每条链路），但 MoE 专家路由恰恰相反，是全到全：每颗芯片向每一颗其他芯片发送独一无二的分片，往返延迟受最长跳数那对端点所限。一个 1,024 芯片的三维环面直径为 16 跳；Boardfly 的“环 → 组 → OCS”层级将其压缩到 7。

#### 横向扩展

直到 TPU v7，横向扩展都运行在一张互连网络上：Jupiter，自 2022 年起在骨干层通过 Apollo OCS 实现全光，与 Palomar 属于同一 3D-MEMS 家族，并扩展至整栋楼。Google 在从机架到数据中心骨干的每一层都使用同一种原语（光路交换）；这是别人所没有的体系结构签名。今天的 Jupiter 在单栋楼内提供 13 Pb/s 的截面带宽。

在 TPU 8t 上，横向扩展被拆分为两张互连网络。东西向 TPU 间流量迁移到专用加速器互连 Virgo；Jupiter 保留南北向角色：存储访问、通用计算与跨站点扩展。Virgo 是一个基于高径数交换机构建的扁平两层无阻塞拓扑：任意两颗 TPU 之间至多两级交换机。一套 Virgo 集群以 47 Pb/s 的截面带宽互连了 134,000+ 颗 TPU 8t（相较上一代 DCN，每芯片带宽提升 4×，空载延迟降低 40%），具备多平面故障隔离与亚毫秒级遥测，使调度器能在掉队者破坏一个步次之前将其终止。体系结构上的收益是各层现在可以独立演进：纵向扩展、东西向横向扩展与前端可以以不同节奏迭代，而无需重布线其他层。

每芯片的横向扩展带宽在 Ironwood 上约为 100 Gbps，在 v8t 上为其 4×，但仍比每芯片 ICI 低两个数量级。这个带宽鸿沟决定了划分方式：张量并行与 MoE 专家路由保留在 ICI 内；数据并行与流水线并行跨越横向扩展互连网络。

Google 的 Multislice 框架已接入 XLA，使一个 SPMD 程序能跨多个 pod 中的不同 slice 运行；编译器发出分层集合通信（在每个 slice 内进行环形全规约，在更高层级上进行跨 slice 归约）。其结构正是用来掩盖 ICI/DCN 带宽差距的技巧：尽可能多的工作保留在 slice 内通过快速 ICI 完成，只将跨 slice 的剩余部分支付给慢速互连网络。

在其之上是 Pathways。对于由 NCCL + Slurm + Megatron 风格的调度器在多控制端推动 SPMD 的体系，Pathways 则由单个客户端驱动整个作业，并将通过 DCN 互联的多个“孤岛”（各自拥有独立 ICI 域的 pod）虚拟化为一体。它支持 gang 调度、弹性训练（当某个切片失败时，OCS 重新塑形拓扑，Pathways 在新形状上从最新检查点恢复），以及跨区域编排。Gemini Ultra 是第一个跨多个数据中心训练的前沿模型；Pathways 将它们缝合为一个同步的 SPMD 作业。

其理念是：编译器就是调度器，环形网（torus）就是拓扑，光交换机是在从机架到数据中心每一层上的通用可重构基底。

## 软件

TPU 堆栈是以编译器驱动为核心，而 CUDA 则是以内核驱动为核心。在 GPU 上，开发者编写内核，框架将内核串联起来；编译器的职责主要是局部性的。在 TPU 上，开发者用 JAX 编写数值程序，XLA 负责其下的一切：决定哪些操作融合、每个张量放在哪里、如何在二维向量寄存器上布局、何时从 HBM 到 VMEM 发起 DMA、如何调度 322-bit VLIW 捆绑、以及如何将程序在成千上万片芯片上分片。没有硬件兜底：没有 warp 调度器、没有缓存、没有乱序引擎来掩盖糟糕的调度。编译器就是系统。本架构的核心权衡在于：XLA 在无需手工调优的情况下更接近理论上限，但要抹平剩余差距更难。

TPU 堆栈是以编译器驱动为中心的，而 CUDA 则是以内核驱动为中心。在 GPU 上，开发者编写内核，框架将内核串联在一起；编译器的工作主要是局部性的。在 TPU 上，开发者用 JAX 编写数值程序，XLA 负责其下方的一切：哪些操作融合、每个张量驻留在哪里、如何在二维向量寄存器上布局、何时发起从 HBM 到 VMEM 的 DMA、如何调度 322-bit VLIW 捆绑、程序如何在成千上万片芯片上分片。没有硬件回退机制：没有 warp 调度器、没有缓存、没有乱序引擎来掩盖糟糕的调度。编译器就是系统。本架构的关键权衡在此：XLA 在不手工调优的情况下更接近理论上限，但要缩小剩余差距更困难。

编译路径为 JAX → JAXpr → StableHLO → HLO → LLO → VLIW bundles。JAX 在 jit 下将 Python 函数追踪为带类型的函数式 IR（JAXpr），再降低到 StableHLO（OpenXLA 标准化、版本化的操作集，约 100 个静态形状原语，现所有前端都发出该集），XLA 将其作为 HLO 摄入并通过其 pass 流水线：操作融合（将逐点运算 + 归约 + 矩阵乘法 合并为一个内核，使中间结果不落入 HBM）、布局分配（决定每个张量的二维平铺，使其无需转置即可流入 MXU：比一维 SIMD 机器难得多，因为寄存器和脉动输入都是二维的）、缓冲区分配（将每个张量固定到 VMEM、CMEM 或 HBM，并预先计算重叠窗口）、SPMD 分区，最后由 VLIW 调度器填满每个 VLIW 捆绑的全部八个槽位。HLO 降低为 LLO（Low-Level Optimizer，TPU 特定 IR），LLO 发出最终的 VLIW 流。编译良好的程序可以在每个周期的同一捆绑中重叠 MXU 脉动执行、VPU 元素级计算和 HBM↔VMEM 的 DMA。

编译路径是 JAX → JAXpr → StableHLO → HLO → LLO → VLIW bundles。JAX 在 jit 下将一个 Python 函数追踪为带类型的函数式中间表示（JAXpr），将其降低为 StableHLO（OpenXLA 标准化、版本化的操作集，约有 100 个静态形状原语，现所有前端都发出该集），XLA 将其作为 HLO 接受并通过其 pass 管道：操作融合（将逐点运算 + 归约 + 矩阵乘法 合并为一个内核，使中间结果不落入 HBM）、布局分配（决定每个张量的二维平铺，使其无需转置即可流入 MXU：比一维 SIMD 机器难得多，因为寄存器和脉动输入都是二维的）、缓冲区分配（每个张量固定到 VMEM、CMEM 或 HBM 之一，并预计算重叠窗口）、SPMD 分区，最后是填满每个 VLIW 捆绑八个槽位的 VLIW 调度器。HLO 降低为 LLO（Low-Level Optimizer，TPU 特定 IR），LLO 发出最终的 VLIW 流。编译良好的程序在每个周期的同一捆绑内重叠 MXU 波动执行、VPU 元素级数学和 HBM↔VMEM 的 DMA。

多芯片执行采用 SPMD：单一程序、分片数据、分层 collective，由 GSPMD 发出（现正由 Shardy 取代，Shardy 为原生 MLIR 的继任者，将在 2026 年初成为默认）。用户通过在少数关键张量上以 Mesh + PartitionSpec 注解的方式声明分片；编译器将分片传播至图中其余部分，并在布局发生变化处插入 all-reduces、all-gathers 和 reduce-scatters。若编译器选择了错误的 collective，shard_map 会让用户进入手工 SPMD（每设备代码，带显式本地形状和显式 collective），并可在 jit 内组合，这样单个内核可以手工分片，而不放弃其余部分的自动分区。这与 PyTorch 的惯用方式相反：FSDP 与 DeepSpeed 在运行时包裹模型，并在模块边界发出 collectives；GSPMD/Shardy 则将整个图作为编译器问题来做分区。

多芯片执行是 SPMD：一个程序、分片的数据、分层的 collective，由 GSPMD 发出（现正被 Shardy 替代，Shardy 是一个原生 MLIR 的继任者，计划在 2026 年初成为默认）。用户通过在少数关键张量上使用 Mesh + PartitionSpec 注解以声明式表达分片；编译器将分片传播到图的其余部分，并在布局变化处插入 all-reduces、all-gathers 和 reduce-scatters。当编译器选择了错误的 collective 时，shard_map 会把用户放入手工 SPMD（每设备代码，带显式本地形状和显式 collective），可在 jit 内组合，这样单个内核可以手工分区，而不放弃其它地方的自动分区。这与 PyTorch 的惯用法相反：FSDP 和 DeepSpeed 在运行时将模型包裹起来，在模块边界发出 collectives；GSPMD/Shardy 把整个图作为一个编译器问题来分区。

Pallas 是“逃生口”：JAX 的内核编写语言，大体相当于 GPU 上的 Triton。Pallas 内核以带有 JAX 风格的 Python 编写，通过 Mosaic（基于 MLIR 的 TPU 后端）降低到 LLO，并作为自定义操作嵌回 HLO。其存在的原因是 XLA 并非总能为新型 attention 变体、融合的 MoE 分发，或任何需要手动 VMEM 平铺与 DMA 调度的场景综合出最优解：这是一类如 FlashAttention 级别的优化，其优势在于调度而非代数。Pallas:Mosaic-GPU 以相同前端面向 H100/Blackwell，因此内核作者可一次编写并降低到任一底层。其之上的库层统一为 JAX 原生：Flax NNX 用于模块，Optax 用于优化器，Orbax 用于异步分布式检查点，Grain 用于输入管线，Tunix 用于后训练/RL，Qwix 用于量化。Google 的参考训练堆栈（用于 LLM 的 MaxText，包含类 DeepSeek-V3 的 MoE，以及用于 Flux、Wan 2.1 的 MaxDiffusion）位于顶层，纯 JAX；Pathways 位于其下，以 pathwaysutils 暴露给用户，使单个 Python 客户端可在数千片芯片与若干 pod-islands 上驱动作业，同时不放弃 JAX 编程模型。

Pallas 是逃生口：JAX 的内核编写语言，大体上相当于 GPU 上的 Triton。Pallas 内核用带有 JAX 风味的 Python 编写，通过 Mosaic（基于 MLIR 的 TPU 后端）降低到 LLO，再作为自定义操作嵌回 HLO。它的存在是因为 XLA 并不总能为新颖的 attention 变体、融合的 MoE 分发，或任何需要手动 VMEM 平铺和 DMA 调度的东西合成出最优解：一种 FlashAttention 级别的优化，其胜利在于调度而非代数。Pallas:Mosaic-GPU 用相同前端面向 H100/Blackwell，因此内核作者可以一次编写并降低到任一底层。其之上的库层均为 JAX 原生：Flax NNX 用于模块，Optax 用于优化器，Orbax 用于异步分布式检查点，Grain 用于输入管线，Tunix 用于后训练/RL，Qwix 用于量化。Google 的参考训练堆栈（用于 LLM 的 MaxText，包括类 DeepSeek-V3 的 MoE，以及用于 Flux 的 MaxDiffusion，Wan 2.1）位于顶层，纯 JAX；Pathways 位于其下，以 pathwaysutils 暴露给用户，因此单个 Python 客户端可以在数千片芯片和若干 pod-islands 上驱动作业，同时不放弃 JAX 编程模型。

相较于 CUDA，PyTorch 路径是存在的，但属于次等体验。torch_xla 采用 LazyTensor 机制：每个 PyTorch 操作都会记录到一个 HLO 图中，并在下一次“屏障”处进行编译，编译产物按图形形状哈希进行缓存。PyTorch/XLA 2.x 增加了 GSPMD 风格的分片注解、通过 XLA 后端的 torch.compile 集成、一个 JAX 桥接，以及在 PyTorch/XLA 2.7 中提供 C++11-ABI 构建，显著提升追踪速度。与 JAX 的差距是客观存在的（JAX 的原语更自然地映射到 StableHLO，且对复杂并行策略的覆盖更完善），因此 vLLM TPU（由 Cloud Next 2025 上宣布的 tpu-inference 插件驱动）会将每个模型——无论由 JAX 定义还是由 PyTorch 定义——统一经由 JAX→XLA 路径降低。TorchTPU（于 2026 年 4 月宣布）是 Google 的回应：在 XLA 之上提供原生 PyTorch 体验，支持 eager 模式、torch.distributed 与 torch.compile，并将取代 torch_xla。

PyTorch 路径确实存在但属于次等体验。torch_xla 使用 LazyTensor 机制：每个 PyTorch 操作都记录到一个 HLO 图中，该图在下一个屏障处编译，编译产物按图形形状哈希缓存。PyTorch/XLA 2.x 添加了 GSPMD 风格的分片注解、通过 XLA 后端的 torch.compile 集成、一个 JAX 桥，并且（在 PyTorch/XLA 2.7 中）提供了显著更快追踪的 C++11-ABI 构建。与 JAX 的差距是真实的（JAX 的原语更清晰地映射到 StableHLO，复杂并行策略覆盖更好），这就是为什么 vLLM TPU（由 Cloud Next 2025 上宣布的 tpu-inference 插件提供动力）将每个模型——无论是 JAX 定义的还是 PyTorch 定义的——都通过统一的 JAX→XLA 路径降低。TorchTPU（2026 年 4 月宣布）是 Google 的回应：在 XLA 之上提供原生 PyTorch 体验，支持 eager 模式、torch.distributed 和 torch.compile，有望取代 torch_xla。

与 CUDA 相比，TPU 生态是集中式而非分散蔓延。框架之下的几乎所有组件（XLA、JAX、Flax、Optax、Pallas、MaxText、Pathways、Shardy、Mosaic）几乎均由 Google 自行开源，并与硅片节奏同步演进。第三方内核远少于 CUDA 数十年的积累；当工作负载形态较“怪”时护城河更薄，而当工作负载更像 Gemini 时护城河更深。近期的 Ironwood（v7）“协同设计 AI 堆栈”这一表述给出了明确框架：chip、ICI fabric、OCS、XLA、Pathways、Pallas、MaxText、vLLM 与 Pathways 作为一个产品共同发布，v8t/v8i 在单一 tpu-inference 降低路径下延续相同模式。Triton 和 torch.compile 缩小了 NVIDIA 一侧的差距（内核驱动与编译器驱动正在收敛），但理念上的两极仍然存在：在 TPU 上，编译器是唯一重要的接口；在 GPU 上，编译器只是若干接口之一。

与 CUDA 相比，TPU 生态是集中化的，而非遍地开花。框架下方的几乎所有东西（XLA、JAX、Flax、Optax、Pallas、MaxText、Pathways、Shardy、Mosaic）几乎全部由 Google 自行开源，并与硅片同步演化。第三方内核远少于 CUDA 那几十年的积累；当工作负载看起来奇怪时护城河更薄，而当工作负载看起来像 Gemini 时护城河更深。最近的 Ironwood (v7) “协同设计 AI 堆栈”表述就是明确的框架：chip、ICI fabric、OCS、XLA、Pathways、Pallas、MaxText、vLLM 和 Pathways 作为一个产品共同发布，v8t/v8i 在单一 tpu-inference 降低路径下继续相同模式。Triton 和 torch.compile 缩小了 NVIDIA 方面的差距（内核驱动与编译器驱动正在收敛），但哲学上的极端仍然存在：在 TPU 上，编译器是唯一重要的接口；在 GPU 上，编译器只是多个接口之一。

## AMD GPU

AMD Instinct GPU 基于与 NVIDIA 不同的押注：NVIDIA 每一代都在扩展每个流式多处理器（SM）的能力，而 AMD 自 GCN（2012）以来始终对计算单元（Compute Unit, CU）保持保守，并将投资转向封装：自 2021 年起的每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰；首款 3D 堆叠数据中心 GPU（CDNA 3）；首款具备 CPU+GPU 一致性的 APU（MI300A）；以及开放生态（ROCm、HIP、OCP MX、UALink）。

AMD Instinct GPU 建立在与 NVIDIA 不同的押注上：当 NVIDIA 每代都在扩展每个 SM 能做的事情时，AMD 自 GCN (2012) 起对 Compute Unit 保持保守，并将资源再投资到封装上：自 2021 年起每代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰；首款 3D 堆叠数据中心 GPU（CDNA 3）；首款具备一致性 CPU+GPU 的 APU（MI300A）；以及一个开放的生态系统（ROCm、HIP、OCP MX、UALink）。

### 谱系
2018
Vega 20MI50, MI60
首款 7 nm GPU；1:2 FP64 向量吞吐率。CDNA / RDNA 之前的最后一代 GCN 系列 Instinct。
2020
CDNAMI100
首批引入 MFMA 矩阵核心；彻底移除图形固定功能硅；原生支持 BF16。
2021
CDNA 2MI210, MI250, MI250X
通过双 GCD 封装实现首个 MCM Instinct；全速率 FP64 矩阵。
2023
CDNA 3MI300A, MI300X
首款 3D 堆叠 chiplet GPU：XCDs 通过 TSV 与 IODs 实现混合键合；FP8；Infinity Cache；MI300A 上实现 CPU+GPU 一致性 APU；为 El Capitan 提供算力。
2024
CDNA 3 refreshMI325X
计算能力相同，HBM3E 更新：256 GB、6.0 TB/s。
2025
CDNA 4MI350X, MI355X
原生 FP4 / FP6，并支持 OCP MX 微缩放；每 CU 的 FP64 大致减半；首代更倾向 AI 密度而非 HPC。
2026
CDNA NextMI430X, MI440X, MI455X
HBM4；Helios 机架（发布时通过 UALoE 的 72-GPU MI455X 旗舰，2027 年起原生 UALink）：AMD 对 NVL72 的首次回应。

### 谱系
2018  
Vega 20MI50, MI60  
首款 7 nm GPU；1:2 FP64 向量吞吐率。CDNA / RDNA 之前的最后一代 GCN 系列 Instinct。  
2020  
CDNA MI100  
首个 MFMA 矩阵核；完全放弃图形固定功能硅。原生 BF16。  
2021  
CDNA 2 MI210, MI250, MI250X  
通过双 GCD 封装实现首个 MCM Instinct；全速率 FP64 矩阵。  
2023  
CDNA 3 MI300A, MI300X  
首款 3D 堆叠 chiplet GPU：XCDs 通过 TSV 混合键合（hybrid-bonded）到 IODs；FP8；Infinity Cache；MI300A 上的 CPU+GPU 一致性 APU；为 El Capitan 提供算力。  
2024  
CDNA 3 刷新 MI325X  
相同的计算单元，HBM3E 刷新：256 GB，6.0 TB/s。  
2025  
CDNA 4 MI350X, MI355X  
原生 FP4 / FP6，采用 OCP MX 微缩放；每 CU 的 FP64 吞吐大致减半；第一代更偏向 AI 密度而非 HPC。  
2026  
CDNA Next MI430X, MI440X, MI455X  
HBM4；Helios 机架（发布时通过 UALoE 的 72-GPU MI455X 旗舰，2027 起原生 UALink）：AMD 对 NVL72 的首个回应。

### 架构
#### 术语

AMD	NVIDIA
计算单元（CU）	流式多处理器（SM）
SIMD	SM 子分区
SIMD 通道	CUDA Core (FP32 ALU)
波前（wave64）	warp（warp32）
Matrix Core	Tensor Core
MFMA	mma.sync / wgmma / tcgen05.mma
VGPR / SGPR	寄存器文件
LDS (Local Data Share)	SMEM (Shared Memory)
Infinity Fabric	NVLink

### 架构
#### 术语

| AMD | NVIDIA |
|---|---|
| 计算单元（CU） | 流式多处理器（SM） |
| SIMD | SM 子分区 |
| SIMD 通道 | CUDA Core (FP32 ALU) |
| 波前（wave64） | warp（warp32） |
| Matrix Core | Tensor Core |
| MFMA | mma.sync / wgmma / tcgen05.mma |
| VGPR / SGPR | 寄存器文件 |
| LDS (Local Data Share) | SMEM (Shared Memory) |
| Infinity Fabric | NVLink |

在 NVIDIA 中，架构雄心主要体现在每个 SM 内（每一代都会引入新的张量原语、新的异步机制、新的操作数存储），而 AMD 的雄心体现在 CU 之间——也就是能将多少个 CU 绑定为一个单一一致的封装。CU 自身保持保守：四个 16-lane SIMD、一个共享标量单元、64 KB 的 Local Data Share、一个 L1 向量缓存、每个 SIMD 各自的 VGPR 文件与一个 CU 共享的 SGPR 池，以及（自 CDNA 1 起）运行 MFMA 的 Matrix Core。自 2012 年 GCN 以来其形态几无本质变化；扩展的是数量（MI100 上 120 个 CU、MI250X 上 220 个、MI300X 上 304 个、MI355X 上 256 个）以及将它们绑定在一起的封装。一个包含 64 线程的 wavefront 会在 4 个周期内跨越 16 条 SIMD lane 流动，每个 SIMD 内会驻留多个 wavefront，调度器在它们之间切换以隐藏停顿。这里没有什么离奇之处；CDNA 的有趣之处都在 CU 之外。

在 NVIDIA 中，架构雄心体现在每个 SM 内（每代都有新的张量原语、新的异步机制、新的操作数存储）；而 AMD 的雄心则体现在 CU 之间，即能将多少 CU 绑定成单一一致封装。CU 本身很保守：四个 16-lane 的 SIMD、一个共享的标量单元、64 KB 的 Local Data Share、一个 L1 向量缓存、每 SIMD 的 VGPR 文件和一个 CU 共享的 SGPR 池，以及（自 CDNA 1 起）运行 MFMA 的 Matrix Core。自 2012 年 GCN 以来其形态没有发生实质性变化；可扩展的是数量（MI100 上 120 个 CUs，MI250X 上 220 个，MI300X 上 304 个，MI355X 上 256 个）以及将它们绑定起来的封装。一个 64 线程的 wavefront 在 4 个周期内在 16 条 SIMD lane 上流动，每个 SIMD 中驻留多个 wavefront，调度器在它们之间切换以隐藏停顿。这里没有什么奇特之处；CDNA 有趣之处在于 CU 之外的一切。

#### 计算

在 CU 内部，SIMD 与 Matrix Core 并行运行。四个 SIMD 负责所有逐元素操作：激活、归一化、残差、地址算术。Matrix Core 负责矩阵乘法。这个分工与 NVIDIA 的 CUDA Cores / Tensor Cores 的分工一致，但“矩阵”的抽象演进路径非常不同。

在 CU 内，SIMD 与 Matrix Core 并行运行。四个 SIMD 处理所有逐元素操作：激活、归一化、残差、地址算术。Matrix Core 处理矩阵乘法。这个分工与 NVIDIA 的 CUDA Cores / Tensor Cores 的分工相同，但矩阵抽象沿着非常不同的路径演化。

NVIDIA 的 Tensor Core 沿着线程层级一路上探：Volta 为 32 线程 warp，Hopper 为 128 线程 warp-group，Blackwell 则为单线程加可选的双 SM 集群。AMD 的 Matrix Core 则始终未动。自 2020 年的 MI100 到 2025 年的 MI355X，每一代 MFMA 都以 wavefront 为作用域：一个 wave64 发出单条矩阵指令（V_MFMA_*），四个 SIMD 协作驱动，操作数来自该 wavefront 的寄存器文件：A 与 B 来自 VGPR，C 与 D 通常来自专用 AGPR 文件。指令本身变得更快、格式集更宽，但发射者与作用域从未改变。在供给端唯一的让步出现在 CDNA 4：提供从 LDS 的专用 MFMA 转置加载，让操作数以 Matrix Core 所需布局直接供给；其精神与 NVIDIA 的 TMA 相似，但矩阵操作本身仍由 wave 发出。

NVIDIA 的 Tensor Core 在线程层次结构上向上演进：Volta 上的 32 线程 warp、Hopper 上的 128 线程 warp-group、Blackwell 上的单线程加可选的双 SM 集群。AMD 的 Matrix Core 则保持原位。每一代 MFMA（从 2020 年的 MI100 到 2025 年的 MI355X）都是以 wavefront 为作用域：一个 wave64 发出单个矩阵操作（V_MFMA_*），四个 SIMD 协作驱动它，操作数来自该 wavefront 的寄存器文件：A 和 B 来自 VGPRs，C 和 D 通常来自专用的 AGPR 文件。指令变快了，格式集也扩大了，但发射者和作用域没有改变。唯一的饲料端让步出现在 CDNA 4：从 LDS 的专用 MFMA 转置加载，直接以 Matrix Core 想要的布局将操作数交给它，精神上类似于 NVIDIA 的 TMA，但矩阵操作本身仍由 wave 发出。

吞吐量数字直接讲述了数据格式的演进。CDNA 1 于 2020 年发布，FP32 / FP16 / BF16 / INT8 的单 CU 单周期 FLOPs 分别为 256 / 1024 / 512 / 1024，并与 A100 一样原生支持 BF16。CDNA 2 将 FP64 路径加倍，达到每 CU 每周期 256 FLOPs 的全速率矩阵：这是一项 AMD 独有的押注，也让 MI250X 成功入驻 Frontier。CDNA 3 在 FP8（E4M3 + E5M2）上达到与 H100 的同等水平（4,096 FLOPs），加入 2:4 结构化稀疏，并新增一条等效 TF32 的路径，通过截断尾数以 FP64 矩阵速率运行 FP32 矩阵乘法。CDNA 4 再次翻倍，FP4 达到 16,384 FLOPs，并引入带 OCP MX 块缩放的 FP6，同时在单条 MFMA 中允许 A/B 精度混合，例如 FP8 × FP4。同一代将每 CU 的 FP64 吞吐大致减半，成为 AMD 首次为 AI 密度而取舍 HPC 密度、而非两者兼顾的一代。

吞吐量数字直接讲述了格式的演化故事。CDNA 1 在 2020 年推出时，FP32 / FP16 / BF16 / INT8 分别为 256 / 1024 / 512 / 1024 FLOPs 每 CU 每周期，并且与 A100 一样支持原生 BF16。CDNA 2 将 FP64 路径加倍为每 CU 每周期 256 FLOPs 的全速率矩阵：这是 AMD 的独特押注，使 MI250X 进入 Frontier。CDNA 3 在 FP8（E4M3 + E5M2）上达到与 H100 的同等水平，为 4,096 FLOPs，增加了 2:4 的结构化稀疏，并增加了一条等效 TF32 的路径，通过截断尾数以 FP64 矩阵速率运行 FP32 矩阵乘法。CDNA 4 再次翻倍到 FP4 的 16,384 FLOPs，并通过 OCP MX 块缩放支持 FP6，并在单个 MFMA 中加入可混合的 A/B 精度：例如 FP8 × FP4。同一代将每 CU 的 FP64 吞吐减半，是 AMD 首次为 AI 密度而牺牲 HPC 密度，而非同时兼顾两者。

以 wavefront 为作用域的抉择带来两点代价。

分支发散（Divergence）。一个半空的 wave64 会浪费 32 条 lane，而半空的 warp32 只浪费 16 条。对于控制流大体一致的负载这是小代价；对不规则负载则很受伤。

重叠（Overlap）。NVIDIA 的异步、描述符驱动的矩阵乘法将发射与执行解耦：发射线程启动指令后即可继续；Tensor Core 在后台运行；warp 可以在上一轮矩阵乘法仍在飞行时执行 softmax、应用掩码或预取下一块 tile。AMD 的 wavefront 集合式 MFMA 没有等效机制：发出矩阵乘法的同一 wave 在其挂起期间无法同时进行有意义的向量计算。跨不同 wavefront 可以实现重叠，但需用软件分阶段并显式设置 wavefront 屏障，更脆弱且消耗更多 wave 槽位与寄存器。

wavefront 作用域的决定表现为两种代价。

分支发散（Divergence）。一个半空的 wave64 浪费 32 条 lane，而一个半空的 warp32 浪费 16 条。对于控制流大体一致的工作负载这是小代价；对于不规则的工作负载则很吃亏。

重叠（Overlap）。NVIDIA 的异步、描述符驱动的矩阵乘法将发射与执行解耦：发射线程触发指令然后继续前进；Tensor Core 在后台运行；warp 可以在前一次矩阵乘法仍在进行时运行 softmax、应用掩码或预加载下一个 tile。AMD 的波前集合式 MFMA 并没有等效机制：发出矩阵乘法的同一 wave 在其挂起期间不能同时做有意义的向量工作。重叠可以在不同的 wavefront 之间实现，但必须通过软件分阶段并使用显式的 wavefront 屏障，这更脆弱并消耗更多的 wave 槽位和寄存器。

这一点的重要性取决于工作负载。纯稠密 GEMM（DGEMM，大批量训练的内环）在矩阵乘法期间没有可做的有用工作；两种引擎都能打满；异步收益有限。这正是 AMD 历史上在百亿亿次 HPC 场景领先的负载类型（Frontier 基于 MI250X，El Capitan 基于 MI300A）。而 Transformer attention（FlashAttention-3、FA4）会在矩阵乘法间穿插 softmax、掩码和 KV-cache 读取，异步重叠是这些内核的整体结构。AMD 必须手工重建该流水线，落后于 NVIDIA 的硬件级支持。MoE 分发、分页式 attention、推测式解码也在同一阵营：这类地址不规则工作希望与矩阵乘法并行运行。

这有多重要取决于工作负载。纯密集 GEMM（DGEMM，大批量训练的内循环）在矩阵乘法期间没有可以做的有用工作；两个引擎都能饱和；异步带来的收益很小。这正是 AMD 历来在百亿次级 HPC（如 MI250X 上的 Frontier、MI300A 上的 El Capitan）中领先的工作负载。Transformer attention（FlashAttention-3, FA4）将矩阵乘法与 softmax、掩码和 KV-cache 读取交织在一起，异步重叠构成了这些内核的整个结构。AMD 必须手工重建该流水线，这落后于 NVIDIA 的硬件级支持。MoE 分发、分页 attention、推测性解码也属于同一类：地址不规则的工作希望能在矩阵乘法旁边同时运行。

NVIDIA 的矩阵指令抽象在跨代上走得更远（warp → warp-group → 单线程异步 + 集群），而 AMD 并未跟进。

NVIDIA 的矩阵指令抽象跨代演进更远（warp → warp-group → 单线程异步 + 集群），而 AMD 并未跟进。

#### 内存

AMD 的内存层次结构的通用层级比 NVIDIA 更少，而且有一个 NVIDIA 根本没有的巨大缓存。从 CU 向外：64 KB 的 LDS 暂存存储器（软件管理，32 银行，AMD 对 NVIDIA SMEM 的类比）、一个向量 L1（早期 CDNA 为 16 KB，自 MI300X 起为 32 KB）、每个 XCD 几 MB 的 L2。然而 L2 并不在 XCD 之间保持一致性；一致性发生在比 L2 更高的一层。

#### 内存

AMD 的内存层次比 NVIDIA 的通用级别更少，而且有一个 NVIDIA 根本没有的巨大缓存。从 CU 向外：64 KB 的 LDS scratchpad（软件管理，32 银行，AMD 对 NVIDIA SMEM 的类比）、一个向量 L1（早期 CDNA 为 16 KB，自 MI300X 起为 32 KB）、每个 XCD 几 MB 的 L2。然而 L2 并不在 XCD 之间保持一致性；一致性发生在比 L2 更高的一层。

那一层就是 Infinity Cache：MI300X 上为 256 MB，分布在四个 IOD 上，16 路组相联，实测约 ~12 TB/s，超过 MI300X 的 5.3 TB/s HBM3 带宽的两倍多。它起源于 RDNA 游戏 GPU，用以弥补窄 GDDR 总线；AMD 在 CDNA 3 上将该 IP 复用于 AI，在 attention 的 KV 重用和权重重用场景下，大型 LLC 出奇地合适。NVIDIA 则押注更大的 HBM 带宽（B200 的 8 TB/s，随着 Rubin 上的 HBM4 伸缩），而 AMD 押注缓存。

那一层就是 Infinity Cache：MI300X 上为 256 MB，分布在四个 IOD 上，16 路组相联，实测约 ~12 TB/s，超过 MI300X 的 5.3 TB/s HBM3 带宽的两倍多。它起源于 RDNA 游戏 GPU，用以弥补窄 GDDR 总线；AMD 在 CDNA 3 上将该 IP 复用于 AI，在 attention 的 KV 重用和权重重用场景下，大型 LLC 出奇地合适。NVIDIA 则押注更大的 HBM 带宽（B200 的 8 TB/s，随着 Rubin 上的 HBM4 伸缩），而 AMD 押注缓存。

在片外，HBM 容量增长迅猛：在 MI100 / MI210 / MI250X / MI300X / MI325X / MI350X 上分别为 32 → 64 → 128 → 192 → 256 → 288 GB，从 2021 年起在每一代均匹配或超越同时代的 NVIDIA 旗舰。AMD 的赌注是推断工作负载越来越受容量约束，拥有更多内存的芯片会获胜。

在片外，HBM 容量增长迅猛：在 MI100 / MI210 / MI250X / MI300X / MI325X / MI350X 上分别为 32 → 64 → 128 → 192 → 256 → 288 GB，从 2021 年起在每一代均匹配或超越同时代的 NVIDIA 旗舰。AMD 的赌注是推断工作负载越来越受容量约束，拥有更多内存的芯片会获胜。

#### 数值

格式演化遵循所有 AI 硅片都共享的精度减半路径：FP32 → FP16 → FP8 → FP4，并在每一步用更细粒度的缩放恢复精度。AMD 特有的一条轴是开放性。CDNA 4 的 FP4 和 FP6 使用 OCP MX 块尺度乘法：与 Blackwell 的 MXFP4 和 TPU v8 的 MXU 相同的数值格式，但由一个开放联盟（AMD、NVIDIA、Intel、Meta、Microsoft、Qualcomm、ARM）指定，AMD 参与创建该联盟，而非由任何单一厂商指定。MI355X 出厂的格式与 B200 和 TPU v8 上出厂的格式相同。

#### 数值

格式演化遵循所有 AI 硅片都共享的精度减半路径：FP32 → FP16 → FP8 → FP4，并在每一步用更细粒度的缩放恢复精度。AMD 特有的一条轴是开放性。CDNA 4 的 FP4 和 FP6 使用 OCP MX 块尺度乘法：与 Blackwell 的 MXFP4 和 TPU v8 的 MXU 相同的数值格式，但由一个开放联盟（AMD、NVIDIA、Intel、Meta、Microsoft、Qualcomm、ARM）指定，AMD 参与创建该联盟，而非由任何单一厂商指定。MI355X 出厂的格式与 B200 和 TPU v8 上出厂的格式相同。

CDNA 4 的转折值得单独指出：每 CU 的 FP64 吞吐减半。MI300X 服务于训练、HPC 和推理三者；MI355X 首要是 AI 芯片。支撑 Frontier 的全速率 FP64 矩阵押注并未被取消，但它不再承担主要负重。

CDNA 4 的转折值得单独指出：每 CU 的 FP64 吞吐减半。MI300X 服务于训练、HPC 和推理三者；MI355X 首要是 AI 芯片。支撑 Frontier 的全速率 FP64 矩阵押注并未被取消，但它不再承担主要负重。

#### 芯粒

封装是 CDNA 不再像 NVIDIA 而开始展现差异化之处的地方。

包封是 CDNA 停止像 NVIDIA 并开始有别于其之处的地方。

CDNA 1 的 MI100 是单片 7 nm。CDNA 2 的 MI250X 是 AMD 的首款多芯片 GPU：两个 Aldebaran GCD 并列在 2.5D EFB 有机基板上，通过 4 条封装内 Infinity Fabric 链接（合计 400 GB/s）连接，但对软件呈现为两个独立的 GPU。

CDNA 1 的 MI100 是单片 7 nm。CDNA 2 的 MI250X 是 AMD 的首款多芯片 GPU：两个 Aldebaran GCD 并列在 2.5D EFB 有机基板上，通过 4 条封装内 Infinity Fabric 链接（合计 400 GB/s）连接，但对软件呈现为两个独立的 GPU。

CDNA 3 是改变一切的举措。八个 XCD（TSMC N5， ~115 mm²/个）通过 TSMC SoIC 混合键合（亚微米间距的 TSV，无微凸点）在 3D 上堆叠到下面的四个 I/O die（TSMC N6）上。IOD 携带 Infinity Cache、HBM3 PHY、Infinity Fabric 链接和 PCIe Gen 5；每个 IOD 上方寄宿两个 XCD，旁边放两个 HBM 堆栈。四个 IOD 通过 Infinity Fabric AP 在 4.8 TB/s 的对半带宽下缝合，因此这个 1530 亿晶体管的封装在内核看来像一个 GPU：在 IOD 层实现缓存和地址空间的统一。NVIDIA 在 H100 之前一直保持单片，直到 B200 才通过 2.5D CoWoS-L 转向两个掩模极限 die。AMD 提前一代实现了 3D 堆叠，且每片面积更小：在相同封装前沿上做出了不同的押注。

CDNA 3 是改变一切的举措。八个 XCD（TSMC N5， ~115 mm²/个）通过 TSMC SoIC 混合键合（亚微米间距的 TSV，无微凸点）在 3D 上堆叠到下面的四个 I/O die（TSMC N6）上。IOD 携带 Infinity Cache、HBM3 PHY、Infinity Fabric 链接和 PCIe Gen 5；每个 IOD 上方寄宿两个 XCD，旁边放两个 HBM 堆栈。四个 IOD 通过 Infinity Fabric AP 在 4.8 TB/s 的对半带宽下缝合，因此这个 1530 亿晶体管的封装在内核看来像一个 GPU：在 IOD 层实现缓存和地址空间的统一。NVIDIA 在 H100 之前一直保持单片，直到 B200 才通过 2.5D CoWoS-L 转向两个掩模极限 die。AMD 提前一代实现了 3D 堆叠，且每片面积更小：在相同封装前沿上做出了不同的押注。

在 CDNA 4 的 MI355X 上，八个 XCD 仍通过 SoIC 在下面的基底上 3D 堆叠，但 XCD 转移到 TSMC N3P，每个 XCD 具有 32 个活跃 CU（共 256 个，vs MI300X 的 304 个；每 XCD 的计数下降以腾出面积给更大的 Matrix Core 和 160 KB 的 LDS）。四个 MI300X 的 IOD 合并为两个，每个在 TSMC N6 上宽度加倍，上方承载四个 XCD，旁边承载四个 HBM3E 堆栈。每个 IOD 现在携带其自身 128 MB 的 256 MB Infinity Cache 切片、一半的 HBM PHY、其份额的 Infinity Fabric 链接和 PCIe Gen 5。两 IOD 之间的 Infinity Fabric AP 以 5.5 TB/s 的对半带宽运行（约比 CDNA 3 高出 ~15%），八个堆栈转向 12-Hi HBM3E，实现 288 GB、8 TB/s，在相同引脚数下容量比 MI300X 提高 50%。该封装总计 1850 亿晶体管，仍然向内核呈现为一个 GPU。

在 CDNA 4 的 MI355X 上，八个 XCD 仍通过 SoIC 在下面的基底上 3D 堆叠，但 XCD 转移到 TSMC N3P，每个 XCD 具有 32 个活跃 CU（共 256 个，vs MI300X 的 304 个；每 XCD 的计数下降以腾出面积给更大的 Matrix Core 和 160 KB 的 LDS）。四个 MI300X 的 IOD 合并为两个，每个在 TSMC N6 上宽度加倍，上方承载四个 XCD，旁边承载四个 HBM3E 堆栈。每个 IOD 现在携带其自身 128 MB 的 256 MB Infinity Cache 切片、一半的 HBM PHY、其份额的 Infinity Fabric 链接和 PCIe Gen 5。两 IOD 之间的 Infinity Fabric AP 以 5.5 TB/s 的对半带宽运行（约比 CDNA 3 高出 ~15%），八个堆栈转向 12-Hi HBM3E，实现 288 GB、8 TB/s，在相同引脚数下容量比 MI300X 提高 50%。该封装总计 1850 亿晶体管，仍然向内核呈现为一个 GPU。

#### 押注
押注 1：先 HPC 然后 AI。HPC 和 AI 在一段时间内是相同的押注，直到不是：从 CDNA 2 到 CDNA 3 交付全速率 FP64 矩阵，然后当推理的经济性明确偏向低精度时，在 CDNA 4 出现分岔。  
押注 2：内存容量。从 2021 年起每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰，并增加一个 256 MB 的最后级 Infinity Cache，吸收 H100 必须访问 HBM 的重用。  
押注 3：及早 3D 堆叠。在 NVIDIA 之前对缓存和 I/O 进行 3D 堆叠：2023 年在 IOD 上使用 TSMC SoIC 混合键合 XCD，而 NVIDIA 直到 2025 年仍保持单片。  
押注 4：一致性 CPU+GPU。MI300A APU 是有史以来最激进使用芯粒的产品，El Capitan 的部署就是证明。  
押注 5：开放的纵向扩展互连。UALink 和 OCP MX 相对于 NVLink 和专有 FP4 的开放路线。

#### 押注
押注 1：先 HPC 然后 AI。HPC 和 AI 在一段时间内是相同的押注，直到它们不再相同：在 CDNA 2 到 CDNA 3 间交付全速率 FP64 矩阵，然后一旦推理经济性明确倾向低精度，在 CDNA 4 出现分岔。  
押注 2：内存容量。从 2021 年起每一代在 HBM 容量上匹配或超越同时代的 NVIDIA 旗舰，并增加一个 256 MB 的最后级 Infinity Cache，吸收 H100 必须访问 HBM 的重用。  
押注 3：及早 3D 堆叠。在 NVIDIA 之前对缓存和 I/O 进行 3D 堆叠：2023 年在 IOD 上使用 TSMC SoIC 混合键合 XCD，而 NVIDIA 直到 2025 年仍保持单片。  
押注 4：一致性 CPU+GPU。MI300A APU 是有史以来最激进使用芯粒的产品，El Capitan 的部署就是证明。  
押注 5：开放的纵向扩展互连。UALink 和 OCP MX 作为对 NVLink 和专有 FP4 的开放替代。

## 扩展

内存押注带来了扩展性的后果：当 8 个 MI300X 芯片容纳 1.5 TB HBM，8 个 MI350X 芯片容纳 2.3 TB 时，你可以将一个 405B 参数的模型以 FP8 放入单个 8-GPU 机箱（包括权重、KV cache，以及用于更长上下文和更大批次的余量），而同一模型在 8× H100（640 GB）上则需要小心分片。对于 2024–2025 年间的推理工作负载，AMD 的纵向扩展不需要在机架级匹配 NVL72 就能在机箱级具有竞争力。对于前沿训练，则确实需要，而 AMD 在 2026 年之前没有答案。

内存押注带来了扩展性的后果：当 8 个 MI300X 芯片容纳 1.5 TB HBM，8 个 MI350X 芯片容纳 2.3 TB 时，你可以将一个 405B 参数的模型以 FP8 放入单个 8-GPU 机箱（包括权重、KV cache，以及用于更长上下文和更大批次的余量），而同一模型在 8× H100（640 GB）上则需要小心分片。对于 2024–2025 年间的推理工作负载，AMD 的纵向扩展不需要在机架级匹配 NVL72 就能在机箱级具有竞争力。对于前沿训练，则确实需要，而 AMD 在 2026 年之前没有答案。

### 纵向扩展
通过 Infinity Fabric 将 GPU 绑定为一个一致的内存域。在 MI355X 之前，这止步于 8-GPU 的 OAM 机箱（每 GPU 具有 896 GB/s 的网格带宽）。Helios 通过 UALink 将纵向扩展扩展到 72-GPU 的机架，在发布时通过以太网隧道（UALoE），并从 2027 年起支持原生 UALink。
### 横向扩展
通过以太网将这些域联网。不使用 InfiniBand。Pensando 的 NIC（Pollara 400、Vulcano 800）实现了 Ultra Ethernet Consortium 的 UET RDMA 传输；Broadcom Tomahawk 6 提供交换机 ASIC 和 CPO。

### 纵向扩展
通过 Infinity Fabric 将 GPU 绑定为一个一致的内存域。在 MI355X 之前，这止步于 8-GPU 的 OAM 机箱（每 GPU 具有 896 GB/s 的网格带宽）。Helios 通过 UALink 将纵向扩展扩展到 72-GPU 的机架，在发布时通过以太网隧道（UALoE），并从 2027 年起支持原生 UALink。  
### 横向扩展
通过以太网将这些域联网。不使用 InfiniBand。Pensando 的 NIC（Pollara 400、Vulcano 800）实现了 Ultra Ethernet Consortium 的 UET RDMA 传输；Broadcom Tomahawk 6 提供交换机 ASIC 和 CPO。

纵向扩展

在 MI355X 之前，AMD 的纵向扩展意味着在 Infinity Fabric 上的 8-GPU OAM 平台。每个 MI300X 拥有 7 条 IF 链接（对机箱内的每个对等体各一条），每条为 128 GB/s 双向，在全连通的 all-to-all 拓扑中为每 GPU 提供 896 GB/s 的网格带宽。MI350X 将每条链路提高到 153.6 GB/s（约每 GPU ~1,075 GB/s），但保留 8-GPU 的形态。该平台符合 OCP 的 UBB 2.0：与 NVIDIA HGX 基板使用相同的机械插槽，因此服务器厂商可以在相同机箱上交付 AMD 或 NVIDIA，而无需重新设计系统。

纵向扩展

在 MI355X 之前，AMD 的纵向扩展意味着在 Infinity Fabric 上的 8-GPU OAM 平台。每个 MI300X 拥有 7 条 IF 链接（对机箱内的每个对等体各一条），每条为 128 GB/s 双向，在全连通的 all-to-all 拓扑中为每 GPU 提供 896 GB/s 的网格带宽。MI350X 将每条链路提高到 153.6 GB/s（约每 GPU ~1,075 GB/s），但保留 8-GPU 的形态。该平台符合 OCP 的 UBB 2.0：与 NVIDIA HGX 基板使用相同的机械插槽，因此服务器厂商可以在相同机箱上交付 AMD 或 NVIDIA，而无需重新设计系统。

AMD 在 MI355X 之前没有交付一个相当于 NVL72 的机架级纵向扩展。运行更大模型的客户在 MI300X 集群上通过以太网跨多个 8-GPU 机箱扩展，为此付出了横向扩展的延迟，而 NVIDIA 用户可以将这些保持在纵向扩展内部。这是对训练至关重要的差距，也是 Helios 致力于弥补的差距。

AMD 在 MI355X 之前没有交付一个相当于 NVL72 的机架级纵向扩展。运行更大模型的客户在 MI300X 集群上通过以太网跨多个 8-GPU 机箱扩展，为此付出了横向扩展的延迟，而 NVIDIA 用户可以将这些保持在纵向扩展内部。这是对训练至关重要的差距，也是 Helios 致力于弥补的差距。

Helios 是 AMD 的首个机架级纵向扩展域，将在 2026 年下半年与 MI455X 一起出货。每机架 72 GPUs、约 31 TB 的 HBM4、1.4 PB/s 的汇总 HBM 带宽、2.9 ExaFLOPS FP4 / 1.4 ExaFLOPS FP8、260 TB/s 的纵向扩展带宽、43 TB/s 的横向扩展带宽。形态尺寸为 Open Rack Wide (ORW)（Meta 于 2025 年提交给 OCP 的规格，双宽且液冷），而非 AMD 专有机箱。在 Meta 的参考设计基础上构建而不是从零设计机架是 AMD 的有意押注：任何标准化采用 ORW 的超大规模运营商都可以在不进行定制数据中心设施改造的情况下部署 Helios。

Helios 是 AMD 的首个机架级纵向扩展域，将在 2026 年下半年与 MI455X 一起出货。每机架 72 GPUs、约 31 TB 的 HBM4、1.4 PB/s 的汇总 HBM 带宽、2.9 ExaFLOPS FP4 / 1.4 ExaFLOPS FP8、260 TB/s 的纵向扩展带宽、43 TB/s 的横向扩展带宽。形态尺寸为 Open Rack Wide (ORW)（Meta 于 2025 年提交给 OCP 的规格，双宽且液冷），而非 AMD 专有机箱。在 Meta 的参考设计基础上构建而不是从零设计机架是 AMD 的有意押注：任何标准化采用 ORW 的超大规模运营商都可以在不进行定制数据中心设施改造的情况下部署 Helios。

该互连为 UALink：Ultra Accelerator Link，一个开放联盟标准，AMD 与 Apple、AWS、Cisco、Google、HPE、Intel、Meta、Microsoft 和 Synopsys 一起帮助发起。UALink 200G 1.0（2025 年 4 月）定义了 200 GT/s 的 lane 和每方向 800 Gbps，交换式拓扑可扩展到每个 pod 1024 个加速器。其承诺是提供一个可与 NVLink 相比的缓存一致性互连，但不归任何单一厂商所有：任何厂商都可以构建 UALink 交换机，任何加速器都可以使用 UALink，该标准属于联盟而非最强势的卖方。

该互连为 UALink：Ultra Accelerator Link，一个开放联盟标准，AMD 与 Apple、AWS、Cisco、Google、HPE、Intel、Meta、Microsoft 和 Synopsys 一起帮助发起。UALink 200G 1.0（2025 年 4 月）定义了 200 GT/s 的 lane 和每方向 800 Gbps，交换式拓扑可扩展到每个 pod 1024 个加速器。其承诺是提供一个可与 NVLink 相比的缓存一致性互连，但不归任何单一厂商所有：任何厂商都可以构建 UALink 交换机，任何加速器都可以使用 UALink，该标准属于联盟而非最强势的卖方。

问题在于：原生 UALink 交换硅片要到 2027 年才能大规模出货。Astera Labs 的 Scorpio，以及 Auradine、Enfabrica、Xconn 的竞争芯片，均瞄准 2026 年末 / 2027 年部署。Helios 在发布时使用 UALoE（将 Infinity Fabric 隧道化在标准以太网上）作为权宜之计，在等待原生 UALink 织物的同时保留编程模型。原生 UALink 交换将在 2027 年随 MI500 到来。发布时，Helios 更接近一个快速以太网隧道化的一致性集群，而非 NVL72 那种真正的缓存一致性 NVLink 域：在时间线上作出了实实在在的让步，以换取在 2026 年下半年交付有竞争力的产品。

问题在于：原生 UALink 交换硅片要到 2027 年才能大规模出货。Astera Labs 的 Scorpio，以及 Auradine、Enfabrica、Xconn 的竞争芯片，均瞄准 2026 年末 / 2027 年部署。Helios 在发布时使用 UALoE（将 Infinity Fabric 隧道化在标准以太网上）作为权宜之计，在等待原生 UALink 织物的同时保留编程模型。原生 UALink 交换将在 2027 年随 MI500 到来。发布时，Helios 更接近一个快速以太网隧道化的一致性集群，而非 NVL72 那种真正的缓存一致性 NVLink 域：在时间线上作出了实实在在的让步，以换取在 2026 年下半年交付有竞争力的产品。

### 横向扩展

AMD 不出货 InfiniBand。整个横向扩展栈基于以太网，依托另一个开放标准：Ultra Ethernet Consortium (UEC)。

UEC 1.0（2025 年 6 月发布）定义了 Ultra Ethernet Transport (UET)：一种在标准以太网上的新 RDMA 传输，具有 packet spraying、基于 SACK 的选择性重传和现代拥塞控制。UET 不是 RoCEv2（RoCEv2 在以太网帧中封装 InfiniBand 传输）；它是针对横向扩展 AI 织物对 RDMA 语义的全新设计。AMD 与 Broadcom、Cisco、Meta 和 Microsoft 一同为创始成员。策略与 UALink 相同：掌握标准，而非实现。

### 横向扩展

AMD 不出货 InfiniBand。整个横向扩展栈基于以太网，依托另一个开放标准：Ultra Ethernet Consortium (UEC)。

UEC 1.0（2025 年 6 月发布）定义了 Ultra Ethernet Transport (UET)：一种在标准以太网上的新 RDMA 传输，具有 packet spraying、基于 SACK 的选择性重传和现代拥塞控制。UET 不是 RoCEv2（RoCEv2 在以太网帧中封装 InfiniBand 传输）；它是针对横向扩展 AI 织物对 RDMA 语义的全新设计。AMD 与 Broadcom、Cisco、Meta 和 Microsoft 一同为创始成员。策略与 UALink 相同：掌握标准，而非实现。

NIC 来自 Pensando，这是 AMD 在 2022 年收购的网络创业公司。Pollara 400 是当前的 AI NIC：400 GbE、P4 可编程、UEC 就绪、PCIe Gen 5，与 MI300X / MI355X 搭配。Vulcano 800 将在 2026 年与 MI455X 一同出货：符合 UEC 1.0、PCIe Gen 6、原生 UALink 接口，提供是 Pollara 每 GPU 横向扩展带宽的 8×。Salina 400 是前端 DPU（16× Arm Neoverse-N1，双 400 GbE），用于存储 / SDN / 防火墙，等同于 NVIDIA 的 BlueField，与 AI 后端 NIC 区分开来。

不过，交换芯片并非来自 AMD。Helios 的 43 TB/s 横向扩展织物运行在 Broadcom Tomahawk 6 上：一颗 102.4 Tbps 的以太网交换机 ASIC，配备共封装光学器件（“Davisson”）。AMD 没有自研 CPO，也没有自研交换机 ASIC；光学层来自合作方硅片。NVIDIA 拥有其完整栈：InfiniBand、Spectrum-X 以太网、ConnectX、BlueField、Quantum-X Photonics CPO，全部自研。AMD 拥有其中一层（通过 Pensando 拥有 NIC + DPU），并押注开放标准加上最佳伙伴硅片能跑赢垂直一体化。

行业已朝 AMD 的方向转变。Dell'Oro 报告称，以太网在 2025 年承担的 AI 横向扩展织物出货量是 InfiniBand 的两倍多；AWS、Microsoft、Meta、Oracle 和 xAI 都已在其基于 AMD 的 AI 集群上标准化采用以太网。剩下的问题不在于以太网能否在 RDMA 语义上匹配 InfiniBand（UEC 已弥合该差距），而在于 Helios 能否足够快地弥合与 NVL72 在机架级的差距，从而赢得当下默认选择 NVIDIA 的前沿训练工作负载。

## 软件

ROCm 是与 CUDA 相对的开源栈。NVIDIA 的软件栈是专有且垂直一体化的（cuBLAS、cuDNN、TensorRT-LLM 以由 NVIDIA 独家维护的二进制 blob 形式发布），而 ROCm 原生于 GitHub，并押注开放标准（PyTorch、Triton、vLLM、OCP MX），而非围墙花园式的库集合。与 NVIDIA 的软件差距是客观存在的，但 AMD 的策略是通过开源社区来弥合，而不是从零构建一套平行的 CUDA 栈。

该栈的底层是 HIP，这是 AMD 的与 CUDA 兼容的 C++ 运行时。hipify 会自动将 CUDA 源码转换为 HIP。大量 HPC 代码（HACC、Laghos、QMCPack）可以开箱即用地以 80–95% 的比例完成移植：这是 CORAL-2 的数据。现代 AI 内核的移植则较差：凡是使用 Hopper 或 Blackwell 特定原语（TMA descriptors、wgmma、tcgen05.mma）的部分在 ROCm 中没有干净的一一对应，不得不手工重写。

在 HIP 之上是一层按名称一一对应映射到 NVIDIA 的库层：rocBLAS 对应 cuBLAS；hipBLASLt 对应 cuBLASLt；MIOpen 对应 cuDNN；RCCL 对应 NCCL；Composable Kernel（及其现代的 ck-tile DSL）对应 CUTLASS；rocprofv3 / rocprof-sys / rocprof-compute 对应 Nsight 系列。不过，没有与 TensorRT-LLM 对应的一方原生组件。AMD 的答案是支持 vLLM 作为开源服务引擎，并提供可插入其中的 AMD 特定算子（AITER）；面向 vLLM 的专用 ROCm CI 在 2026 年初将测试通过率从 37% 提升到 93%。

PyTorch 路径是一等公民。Eager 模式的 PyTorch 自 2018 年起即可在 ROCm 上运行；torch.compile 通过 Triton 下沉，而 Triton 的 ROCm 后端（配合用于预编译数学内核的 AOTriton）已合入上游。没有类似 XLA 的中间 IR；ROCm 直接编译到 HIP / Triton / CK。随着 Triton 成为 PyTorch 的默认内核路径，移植成本大幅消散：凡是经由 torch.compile 运行的内核，在 CUDA 与 ROCm 上无需改动源码即可工作。这是 AMD 开放战略之下的架构层面押注：Triton 的 Python DSL 成为跨厂商的通用语，绕开了对 CUDA 等效内核生态的需求。

FlashAttention 是承重用例。FA2 已通过 Composable Kernel 在 MI300X 上投入生产；在 ROCm 上，PyTorch 默认采用 CK 或 AOTriton。FA3（针对 Hopper 调优）通过 AITER + CK 获得部分支持，但 Dao-AILab 的规范实现仍然仅支持 CUDA。FA4（Blackwell，2026 年 3 月）完全没有 ROCm 移植。HipKittens，即 Hazy Research 在 2025 年 11 月推出的 ThunderKittens 的 MI355X 移植，宣称用约 500 行代码就实现了与手工调优 AITER 前向等效。模式清晰：开源学术内核在 NVIDIA 之后以数月而非数年的滞后补上 AMD 的长尾。

生产部署已验证了这一策略。Microsoft Azure 的 ND MI300X v5 实例在 2024 年 5 月进入 GA；OpenAI 在其上运行 GPT 推理。Meta 通过 Grand Teton 平台在 MI300X 上交付 Llama 3 / Llama 4 推理。Oracle OCI 的 BM.GPU.MI300X.8 在 2024 年 9 月进入 GA，MI355X 于 2026 年跟进。这些是在超大规模云商水平上的真实推理集群，而非试点。

坦诚地说，差距仍然存在。独立基准（Phoronix，2026 年 3 月）显示，在标准 PyTorch / vLLM / SGLang 工作负载上，等精度且等级别硅片条件下，ROCm 7.2 比等效 CUDA 慢约 10–25%。ROCm 7 在特性上达成等价，但在性能上未达等价。FlashAttention-4 的长尾（利用 Blackwell 最新原语的研究代码）是 NVIDIA 最稳固的护城河所在；其在 ROCm 上没有干净的对应，正等待手写 AITER 内核或 HipKittens 级别的社区移植。NVIDIA 将工程师派驻前沿实验室；AMD 通过 GitHub 发布内核。两者在通用工作负载（Llama 推理、注意力、稠密 Transformer 训练）上收敛，但新颖研究代码的长尾仍然让 MI300X / MI355X 部署付出 NVIDIA 用户不需要支付的工程时间。

## Cerebras WSE

Cerebras 打造了有史以来出货规模最大的芯片。其哲学是：内存墙源于对晶圆的切割。晶圆厂在 300 mm 硅片上曝光数十个裸片并将其锯开；随后行业用最复杂的工程手段（HBM、NVLink、CoWoS、每机架 5,184 根铜缆）把这些碎片以片上带宽一小部分的速率重新连回去。Cerebras 跳过了锯片这步。Wafer-Scale Engine 是一整片硅：84 个掩模场、46,225 mm²、900,000 个数据流核心，且片上每一字节 SRAM 距离一个计算单元仅 1 个时钟周期。

### 谱系
2019
WSE-1CS-1
首款出货的晶圆级处理器：1.2T 晶体管、400,000 个核心、18 GB 晶圆内 SRAM。
2021
WSE-2CS-2
7 nm：850,000 个核心、40 GB SRAM。Weight streaming 将权重移出晶圆进入 MemoryX。
2023
Condor GalaxyCG-1
与 G42 构建的 64 机系统集群；训练了 Jais Arabic LLM 家族。
2024
WSE-3CS-3
5 nm：4T 晶体管、900,000 个核心、44 GB SRAM；每核心 FP16 SIMD 从 4 宽翻倍到 8 宽；集群规格上限至 2,048 台系统。
2024
Inference
将权重停驻于 SRAM 而非流式传输：业界最快的独立测得解码性能，并成为如今定义公司的转折点。

### 架构

GPU 是一个层级体系：线程在 warp 内、warp 在流式多处理器（SM）内、裸片在封装内、封装在机架内；每个边界都有其带宽、时延和编程抽象；凡由多个裸片构成的加速器都会继承某种版本的这种层级。WSE 是一片平面：900,000 个相同核心在 2D 网格中密铺，无共享缓存、无全局内存，任意两个核心之间没有任何边界。每个核心都很小，在 WSE-2 上约 ~38,000 µm²，约一半 SRAM、一半逻辑，峰值 30 mW：48 kB 本地 SRAM、16 个通用寄存器、6 级流水线、4 宽 FP16 FMAC SIMD（WSE-3 为 8 宽），以及一条五端口路由器接入织构。执行方式是数据流：核心在 wavelet 抵达前保持空闲，wavelet 中的控制位选择触发哪个处理任务，当张量操作数到达与耗尽时，8 个硬件微线程逐周期切换。无 warp、无 warp 调度器、无可错失的缓存、无重排序缓冲：数据的到达即是调度。

晶圆

步进机每次以一个掩模对晶圆曝光，单次面积约 ~850 mm²，这也是为何常规芯片都受此上限约束（以及为何当 NVIDIA 顶到上限时，B200 立刻变成了双裸片）。Cerebras 与其他 TSMC 客户一样，在 12×7 的网格中重复打印同一个约 ~550 mm² 裸片 84 次，然后与 TSMC 共同开发的工艺会在通常锯缝的 <1 mm 划片线上铺设额外的高层金属。网格通过源同步并行接口跨越每条接缝（WSE-3 上每裸片 2,880 GB/s），而整个片间层仅耗 ~97 W。对软件而言，这些接缝不存在：一个统一的网格，一颗芯片。

晶圆级方案曾被尝试且因良率失败：一片单体晶圆计算机上的单个缺陷会毁掉整个晶圆，这也是 20 世纪 80 年代埋葬该设想的原因。Cerebras 的答案是粒度。H100 上的一个缺陷会让一整个约 ~6 mm² 的 SM 失效；WSE 上同样的缺陷只会让一个 0.05 mm² 的核心失效。WSE-3 实际制造 ~970,000 个核心并出货 900,000 个：约 ~7% 的冗余池加上冗余织构链路，使硬件能够绕开每一个缺陷并恢复完整的逻辑网格。

核心

这个核心不同寻常之处不在数据通路，而在于“指令”的含义。除了 16 个通用寄存器外，还有 44 个数据结构寄存器（DSR），每个都保存一个张量描述符：基地址、范围与步幅，最高四维。指令通过 DSR 指定其操作数，因此一条 FMAC 指令即可表达：将到达的数据流与此处常驻张量相乘，并累加到彼处张量中，且硬件会在张量持续期间持续流送元素。乘法周围没有软件循环，每个元素也无需取指；循环就存在于描述符里。NVIDIA 用了五代 Tensor Core 才把矩阵乘法推进到由单一描述符驱动的命令；在 WSE 核心上，张量指令别无他法。

时序由织构负责。color 是静态路由的虚拟通道，编译时绑定一个处理任务，因此在某个 color 上发送一个 wavelet 就是在目标核心上调用代码：16 个控制位是调用，16 个数据位是参数。任务调度器在核心的 8 个微线程中保持在途的张量操作，并按操作数可用性逐周期切换。这与 warp 调度器用 64 个常驻 warp 隐藏停顿相同的工作，只是用 8 个上下文即可，因为所要隐藏的延迟是一条繁忙的 SRAM 银行或一次邻居跳点，而非一次 HBM 往返。

48 kB 本地 SRAM 的组织方式服务于数据通路而非局部性：8 个单端口 6 kB 银行每周期提供 2 次 64 位读与 1 次 64 位写，恰好对应两个 4 元素 FP16 操作数输入和一个结果输出，匹配 WSE-2 FMAC 的宽度。一个 256 字节的软件管理缓存（WSE-3 为 512 B）把最热点的值留在流水线身边。这台机器的论点在微缩尺度上显而易见：在每个核心上，内存带宽与计算精确匹配，而晶圆将这种平衡复制了 900,000 遍。

### 计算

晶圆上没有矩阵单元。NVIDIA、Google 与 AMD 都把其 FLOPs 聚焦在专用的矩阵乘引擎（Tensor Core、MXU、Matrix Core）上，主要区别在于如何为该引擎供数；Cerebras 则从织构中“组装”矩阵乘法。一次 GEMM 是一次覆盖整片晶圆的编舞：每个到达的权重沿着持有激活的核心行进行广播，每个核心对其常驻切片执行乘加（每个权重做一次 AXPY），并在网格上完成部分和的归约。Tensor Core 从寄存器块获得的数据复用，MXU 从其线网获得的数据复用，WSE 则从几何结构获得：激活从不移动，因此在途的唯一操作数就是被乘的那个。

需要谨慎解读 FLOPs 台账，因为 Cerebras 打出的数字并非对比用的数字。WSE-3 的头条 125 PFLOPS 是稀疏 FP16：它假定硬件在理想稀疏张量上的约 8× 零跳过收益。稠密 FP16 约为 15.8 PFLOPS（推导：900,000 cores × 8-wide FMAC × 1.1 GHz；Cerebras 未公布官方稠密数值）。这是真实的算力，但不是重点：在每瓦能效上，晶圆的稠密 FLOPs 不如所有同期 GPU。晶圆从来不是 FLOPs 机器。它是带宽机器，而 FLOPs 的存在是为了跟上 SRAM。

零跳过是数据流物尽其用之处。由于计算由到达的数据触发，零值永不触发任何事：零在发送端被过滤，接收核心不会看到它，也不会消耗周期。这是非结构化、到元素粒度的稀疏性，是 NVIDIA 2:4 结构化稀疏仅能采样到的一般情形。但这至今还是一个尚未被充分行使的选项。Cerebras 自己的稀疏预训练结果（SPDF：1.3B 参数下 75% 稀疏；后续在 6.7B）由厂商撰写且规模低于 7B，且尚无旗舰客户模型披露为稀疏训练：在该硬件上最大规模的 Jais 2 是稠密的。唯一能收割非结构化稀疏性的硅片，尚未交付任何采用它的头条模型。

### 内存

内存层级只有一层：在核心内部以 48 kB 切片存在的 44 GB SRAM，且晶圆上不再有其他任何东西。无 HBM、无 L2、无淘汰策略；每一字节距一次 FMAC 仅一个周期。标称带宽为 21 PB/s，这个数字值得特别说明：它是 900,000 个本地 SRAM 端口的总和，是晶圆内聚合值，而不是点到点链路，不能与 HBM 的数字直接比较。诚实的比较是每 FLOP 字节数：晶圆可为稠密 FP16 每 FLOP 提供约 ~1.3 字节，而 B200 从 HBM 获得约 ~0.002。在这一轴上，每一款 GPU 和 TPU 都是“饥饿”的；WSE 是唯一达到平衡的机器。解码阶段是纯粹的带宽问题（每个 token 对权重进行一次完整读取），也是晶圆恰好擅长的阶段。

这一层级的另一面，就是它的边界。晶圆与外界的连接是 12×100 GbE：1.2 Tb/s，勉强略高于一块 Blackwell GPU 所配单个 ConnectX-8 NIC。晶圆内 SRAM 与晶圆外 Ethernet 之间横亘着 5 个数量级。NVIDIA 的层级是缓慢下行的，每一层的速度只是上一层的几分之一；WSE 只有两个层级，且两者之间是悬崖。晶圆是一座孤岛，而这座孤岛的超能力与它的牢笼，源于同一事实。

而这座孤岛并未增长。在领先制程上，SRAM 密度事实上已基本停止缩放：尽管跨越了一个完整制程节点、晶体管数增长 54%，WSE-3 的 SRAM 只比 WSE-2 多 10%。逻辑仍在缩小；六晶体管 SRAM 单元并没有。该架构最稀缺的资源，正是下一代制程节点不再能带来的那一项。

### Weight Streaming

在晶圆上训练，颠倒了其他人习以为常的流向：在 GPU 或 TPU 上，权重常驻，激活流过；而在 WSE 上，激活常驻，权重流过。主权重驻留在 MemoryX，这是一台位于集群旁边的 DRAM 与闪存一体机。按层推进，权重跨晶圆流动，触发对驻留在 SRAM 中的激活进行乘加，然后离开；反向传播时梯度流出，而优化器步骤在 MemoryX 内的 CPU 上运行（权重更新是 O(parameters) 的逐元素工作，没有复用，因此 CPU 级计算即可跟上）。晶圆从不存储权重，“哪怕是临时也不存储”（Cerebras 原话）。模型规模受制于 MemoryX，而非 44 GB；44 GB 约束的是激活与 batch。

这带来的是编程模型的变革。一片晶圆即可容纳一层完整的激活，因此无需张量并行、无需流水并行、无需 FSDP 切分：一个 70B 模型被写成一台设备的程序，而多系统扩展则通过 SwarmX 进行纯数据并行，这是一棵广播/归约树，将同一条权重流扇出到 N 片晶圆，并在回程中汇总它们的梯度。主宰 GPU 训练的并行策略表格，根本没有 Cerebras 这一页。

代价则体现在规模上，并由市场的偏好所揭示。规格表标称 2,048 台 CS-3；迄今披露过的最大集群是 64 台（Condor Galaxy 3）。在该平台上披露过的最大“从零训练”模型是由核心客户 G42 在嵌入 Cerebras 工程师的协助下完成的 Jais 2，规模为 70B 参数、2.6T token。自 CS-1 推出七年以来，没有任何人训练出超过 70B 的模型。而 GPU 实验室习惯性公开、通常为 35–45% 的 MFU（利用率），在任何 Cerebras 任务上都从未被披露。

### 数值

数值体系一句话即可概括：FP16 与 BF16（FP32 累加），再加上（自 WSE-3 起）一条 16 宽 8 位整数路径，Hot Chips 披露将其标为定点。无 FP8、无 FP4、无 microscaling。其他厂商每代都将精度减半，并用分块缩放把精度买回来；Cerebras 仍以 16 位进行计算，并将其作为质量差异化卖点（“the original 16-bit weights”）。张力显而易见：SRAM 容量是该架构最紧缺的资源，8 位权重可将模型所需晶圆数减半。16 位唯一是否出于数值信念，还是数据通路路线图上的空白，尚无定论；没有任何一份 Cerebras 的一手资料显示晶圆上存在 floating-point 8。

下注
下注 1：不要切割晶圆。裸片边界是行业其余部分所缴的税：SerDes、中介层、HBM 堆栈、电缆、交换机。用金属把 84 个掩模场缝合，竞争系统中带宽最高的边界在这里根本不存在。
下注 2：SRAM 是唯一的内存。以业界最陡峭的比例，用容量换带宽：44 GB，晶圆内聚合 21 PB/s。让机器本身达到平衡，而不是把不平衡藏在层级结构后面。
下注 3：数据流核心，无矩阵单元。900,000 个由 wavelet 抵达触发的微小核心，矩阵乘法由广播、FMAC 与网格归约“拼装”而成：跳过零是天然免费的，而非一种特殊模式。
下注 4：权重动，激活留。Weight streaming 将模型规模（MemoryX）与晶圆内存（44 GB）解耦，并把集群扩展折叠为纯数据并行。
下注 5：卖延迟，不卖吞吐。晶圆以比任何基于 HBM 的系统更快的速度，在每个 token 上重读整个模型；按高端产品对这份速度定价，而非在每 token 成本上竞争。

## 扩展

纵向扩展 与 横向扩展 在这里意味着不同的事情。NVIDIA 的纵向扩展难题（让 72 个封装表现为一台设备）在 WSE 上由光刻直接解决：一致性域从晶圆厂以一整块的形式出货。剩下的，全是晶圆边界之外的事情，而没有其他机器会像它这样如此早、如此猛烈地触及自己的边界。

### 纵向扩展
晶圆本体。900,000 个核心置于一张 2D 网格上：32 位链路、单周期跳转、在 24 个 color 上静态路由、原生广播、214 Pbit/s 的织构聚合带宽。受 300 mm 晶圆尺寸所限，固定为 46,225 mm²。

### 横向扩展
直接是以太网：每台系统 12×100 GbE（1.2 Tb/s）。训练通过 SwarmX 扩展（基于 RoCE 的数据并行广播/归约）；推理在层边界上跨系统切分模型，采用流水并行。

### 纵向扩展

晶圆内部织构没有 SerDes、没有电缆、没有收发器，也没有每条链路的边际成本：路由由编译完成，每一跳都是一个周期，广播是原生织构原语而非交换机特性。NVL72 需要 5,184 根铜缆和一整托盘 NVSwitch ASIC 让 72 块 GPU 获得 130 TB/s 的全互连；WSE 的等效域则是一个单一的光刻对象。问题在于，这个域的大小是常数。NVIDIA 的纵向扩展域每代都在增长（三年间从 NVL72 到 NVL576）；晶圆自 2019 年以来一直是 46,225 mm²，且将保持如此。300 mm 是业界运行的最大晶圆（450 mm 的转型在十年前已夭折），因此 Cerebras 的纵向扩展路线图只能来自下一节点的密度提升：没有更多的面积可拿。

### 横向扩展

训练的横向扩展是 SwarmX，而且它只做一件事：复制。将权重流广播到 N 片晶圆，在回程上归约它们的梯度；batch 随系统数量增长，模型规模不变。标称上限 2,048 台系统（“256 exaFLOPS”，稀疏）尚未落地；64 台已落地。

推理则完全放弃 weight streaming；算术账本是致命的。以 ~150 GB/s 的通道为每个解码 token 从 MemoryX 流 70B 模型的 140 GB，会带来约一秒每 token 的代价。因此推理将权重停驻于 SRAM，并在层边界上跨晶圆切分模型：Llama 70B 在“少至四台” CS-3 上运行，经以太网进行流水并行，每增加一片晶圆就贡献 44 GB 的“权重 + KV”容量与 23 kW 的负载。

速度是真实且经独立验证的。Artificial Analysis 在 2024 年 8 月的发布时测得 Llama 3.1 8B 为 1,850 tokens/s，70B 为 446，Llama 405B 为 969（首 token 延迟 240 ms），2025 年 Llama 4 Maverick 为 2,522，约为当时已公布最佳 Blackwell 数字的 ~2.4×。厂商引用的峰值更高（70B 配合推测解码达 2,100；GPT-OSS-120B 达 3,000，而独立在线测量更接近 2,000）。在单用户解码速度上，没有 GPU 提供商能接近。

经济性是锋利的边缘。每片晶圆 44 GB 意味着前沿规模模型要消耗整片舰队：SemiAnalysis 估算，1.6T 参数量级的模型需 ~24 台 CS-3，而这类模型能装进寥寥几个 GPU 机架；每台系统的物料成本约 ~$450k，标价约 $2–3M（官方从未披露）。在解码期间，晶圆巨大的 FLOPs 大多闲置；Cerebras 拒绝披露 batch 大小，也从未公布过每系统吞吐。相同开源模型的每 token API 定价大约是基于 GPU 提供商的 3–5×，而 Llama 405B 已从 API 中悄然下线，SemiAnalysis 的解读是其服务经济性未能过关。固定的 SRAM 也给上下文定价：KV cache 与权重共用同一片 44 GB，因此长上下文会侵占容量并迫使每副本需要更多系统；该 API 上限为 131K tokens，而前沿提供商已能提供 256K–1M。MoE 也能被服务（Qwen3-235B 约 ~1,500 tokens/s，厂商引用），但它是这种形态的最坏情况：巨大的参数占用，一次只触达少数专家，且驻留在最昂贵的内存中。

市场对此定价诚实。Mistral 的 Le Chat（~1,100 tokens/s）、Perplexity Sonar 与 Meta 的 Llama API 都为延迟付费；在 2026 年 1 月，OpenAI 签下了 750 MW 的 CS-3 容量，持续到 2028 年，签约时报道超过 $10B，随后增长到超过 $20B，这是 wafer-scale 有史以来收到的最大背书。首个在该容量上交付的旗舰是 GPT-5.6 Sol，于 2026 年 7 月发布，标称 750 tokens/s。

## 软件

该栈像 TPU 一样以编译器为驱动，但通过一个更窄的孔径：Cerebras 的编译器是一个内核匹配器，而不是通用代码生成器。cerebras.pytorch 通过惰性张量将训练步骤追踪到 Torch-MLIR 和图 IR，然后将子图与手写内核库进行匹配，对于没有匹配的算子回退到较慢的自动生成内核。按 GPU 标准记录下来的约束非常严苛：仅静态图，不支持动态形状，不支持数据依赖的控制流，不支持步骤中途的即时张量访问，并且 PyTorch 版本被锁在上游之后。最佳的独立实践者报告（SURF，荷兰国家计算中心）指出存在不受支持的层类型，并且没有将标准 PyTorch 代码 1:1 移植的路径。

而且没有内核逃逸通道。CUDA 对新注意力变体的回答是编写一个内核；TPU 的回答是 Pallas；ROCm 的回答是 Triton。Cerebras ML 栈完全没有用户内核路径：当匹配器严重失配时，修复方法是由 Cerebras 工程师来完成。一个单独的 SDK 语言 CSL 暴露了裸机（tasks、wavelets、colors），并产生了显著的 HPC 结果（TotalEnergies 的 stencil 代码在 ~228× A100，48 个 CS-2 的 Gordon Bell 入围），但它是一个独立的世界，与 PyTorch 流无连接。平台上的每个旗舰模型（Jais、BTLM、Med42）都是与嵌入的 Cerebras 员工共同开发的。

这里存在一种奇特的免疫性。FlashAttention，GPU 时代决定性的内核谱系，是通过内存层次结构对注意力进行平铺的方案，而 WSE 没有层次结构可供平铺：花费 AMD 多年移植滞后的那类优化根本不适用。但这种免疫性和贫乏性是同一个事实。叠加在 CUDA 上的第三方内核生态在这里没有附着点；平台历史上的每一次内核改进都有且只有一个作者。

那片晶圆留在何处？它诚实地占有一个真正的利基：经过独立验证的 batch-one decode 速度，由将延迟定价置于成本之上的客户付费。在利基周围是硬墙：3–5× 的 per-token 定价，七年内的 70B 训练上限，收入在 2025 年仍约有 ~86% 集中于两个与阿布扎比相关的客户（根据其 2026 年 5 月 IPO 附近的 S-1 报告），以及一种最稀缺的资源，SRAM 密度，在模型继续增长时停止了缩放。Hennessy 和 Patterson 曾承诺一次寒武纪大爆发；WSE 是其最极端的体型，它决定内存墙（memory wall）是一个封装选择，并在 46,225 mm² 的硅片上花费空间以拒绝去做妥协。

## AWS Trainium

Annapurna Labs，构建 AWS Nitro 卡和 Graviton CPU 的团队，作为快速跟随者打造了 Trainium。计算核心采用了 TPU 验证过的剧本（一个 128×128 的 weight-stationary 脉动阵列、软件管理的暂存存储器、整程序编译），并直接共享了 Google 的 XLA 编译器。纵向扩展（scale-out）互连是已承载 AWS 其余部分的 Nitro 卸载网络。真正属于 Amazon 的部分狭窄且深思熟虑：专用的集合通信硅（collective-communication silicon）钉在借用的核心上，以及将芯片定价为只需在 AWS 内击败 NVIDIA 的纵向整合。

### 谱系
2015  
Annapurna Labs  
Amazon 以约 $350M 收购这家以色列芯片创业公司；它成为 AWS 的内部硅团队。  
2018  
Graviton + Nitro  
Arm 服务器 CPU 和 DPU 卸载网络。  
2019  
InferentiaNeuronCore-v1  
首款 AWS ML 芯片，仅推理：4 NeuronCores、8 GB DRAM、三台固定引擎。  
2022  
Trainium1Trn1, v2  
首款训练芯片：2 NeuronCore-v2、一个可编程 GPSIMD engine、32 GB HBM、NeuronLink 2D torus。  
2023  
Inferentia2v2  
与 Trn1 共享 NeuronCore-v2：推理和训练谱系在一个微架构上汇合。  
2024  
Trainium2Trn2, v3  
8 NeuronCore-v3，首个真正的 FP8 加速，96 GB HBM3；64 芯片 UltraServer。为 Project Rainier 提供算力。  
2025  
Trainium3Trn3, v4  
首款 3 nm AWS 芯片（TSMC N3P）；OCP MXFP8/MXFP4；NeuronSwitch 全互联（all-to-all fabric）替代了 torus。144 芯片 UltraServer。

### 架构

另一则闭环硅（captive-silicon）的故事属于 Google，而 Trainium 最好被理解为在另一个云内部重建的 TPU 论点。其下注的基础相同（一个 weight-stationary 的脉动阵列，由软件管理的 SRAM 供给，编译器提前调度，无缓存且无线程调度器），但单元的组装方式不同。一个 Trainium 芯片携带少量 NeuronCores（Trn1 为 2 个，Trn2 和 Trn3 为 8 个），每个 NeuronCore 并不是一个单一整体的 matmul 引擎，而是若干解耦的、专用的引擎簇：一个 Tensor Engine（128×128 的脉动阵列）、一个用于归约的 Vector Engine、一个用于逐点计算的 Scalar Engine，以及一个由八个 512-bit 向量处理器组成的可编程 GPSIMD Engine，用于任何不适合其他三者的任务。它们周围是数据搬运器：128 个 DMA 引擎、一个序列化传输的 Sync Engine，以及（自 Trn2 起）用于集合操作的专用 CC-Cores。没有线程束和波前；这些引擎作为静态调度的数据流流水线运行，承重的设计决策关于的是围绕脉动阵列的部分，而不是数组本身。

#### 计算

Tensor Engine 占有 matmul 的 FLOPs；其他三者负责所有其余工作。它是一个 128×128 的处理单元网格（16,384 MACs），以 weight-stationary 方式运行：一个操作数块被加载到数组中并保持原位（LoadStationary），另一个在其间流动（MultiplyMoving），部分和（partial sums）落在 PSUM 上，PSUM 是一个小型的 accumulator SRAM，引擎可以对其进行读-加-写，因此沿着 𝐾 K 轴比 128 更长的收缩可以分折地完成。这是每个 matmul 加速器核心处的相同 𝐷 = 𝐴⋅𝐵 + 𝐶 的分块 MMA；但当 NVIDIA 将其包裹在线程束层级中并由 Google 以 VLIW 指令束发出时，Trainium 将其作为针对命名暂存存储器的一对显式指令来暴露。

该数组在三代中物理尺寸均固定为 128×128；变化在于每个单元可处理多少乘积。Trn1 的 NeuronCore-v2 以 BF16/FP16 运行并使用 FP32 累加，并仅在 BF16 速率下提供 FP8（无加速）。Trn2 的 v3 将 FP8 双泵（double-pumps）以呈现有效的 256×128 数组，是首个在 8-bit 上有真正 2× 的 Trainium。Trn3 的 v4 将微缩标量（microscaling）操作数打包以在 4× BF16 速率下呈现有效 512×128。物理乘加单元的计数从未改变；数据通路只是向它们送入更窄的数值。

其他三台引擎是保持数组繁忙的关键。Vector Engine 处理跨元素归约（layernorm、softmax、pooling）；Scalar Engine 处理一入一出的逐点算子（activations、GELU）；GPSIMD Engine，八个完全可编程的向量处理器，运行 C 语言，用于承载任何无法映射到上述专用引擎的任务。一个良好编译的步长会重叠所有四者：Tensor Engine 持续计算一个 matmul，而 Vector Engine 在运行前一个 tile 的 softmax，DMA 引擎将下一个 tile 预排好，这与 TPU 和 GPU 的注意力内核高效的生产者/消费者重叠相同，只是在此以独立的物理引擎而不是独立的线程束或 VLIW 槽位来表达。当一个层干净地分解到这四类引擎上时，设计回报丰厚；在边界处付出代价：不适配任何专用引擎的算子落到可编程的 GPSIMD 路径，较慢，并且这是最可能成为新颖架构瓶颈的机器部分。这是每个非 GPU 加速器携带的长尾成本的 Trainium 版本。

#### 内存

内存层次是将计算哲学应用到存储上：三层，全部由软件管理，硬件上没有任何缓存。AWS 自己的文档作了对比，指出与 CPU 或 GPU 不同，NeuronCore 没有缓存，并且“所有内存移动在程序中是显式的。”片外是 HBM（Trn1 为 32 GB，Trn2 为 96 GB HBM3，Trn3 为 144 GB HBM3e）。片上，最靠近引擎的是 State Buffer (SBUF)：主暂存存储器，带宽约为 HBM 的 20 倍，分为 128 个分区，按 NeuronCore 大小为 24 MiB（v2）、28 MiB（v3）、32 MiB（v4）。数组与 SBUF 之间是 PSUM，一个 2 MiB 的 accumulator 专用于 matmul 输出。数据移动路径为 HBM → SBUF → Tensor Engine → PSUM → SBUF，每一步由编译器发出；没有硬件预取或硬件驱逐。

这正是 Google 的 VMEM 赌注，一个显式暂存存储器，编译器必须完美调度，不能依赖缓存来掩盖错误，与 NVIDIA 的硬件管理的 L2 和 L1 正好相反。Trainium 继承了随之而来的天花板和脆弱性：当调度正确时，引擎永不停顿；当调度错误时没有后备路径。该设计对比适度的峰值 FLOPs 提供了慷慨的 HBM 预算，因此按单位计算，Trainium 拥有比可比较的 NVIDIA 芯片更多的内存。但在绝对容量上，它落后：Trn2 的 96 GB 低于 H200 和 B200，Trn3 的 144 GB（2025）低于其对位出货的 192 GB B200 和 288 GB B300。因此 AWS 在论证服务大型模型的经济性时真正拉动的杠杆不是内存领先，而是价格：每单位计算和 HBM 的成本，在其自行构建并出租的硅上。

#### 数值

Trainium 遵循与其他人相同的精度减半曲线（FP32 → BF16 → FP8 → FP4），并有两个 Trainium 特有的皱褶。第一个是可配置的 FP8：与 Hopper 那样固定 E4M3 和 E5M2 不同，Tensor Engine 接受可调的 exponent bias，并支持 E5M2、E4M3 和 E3M4，让编译器可以对每个 tensor 在范围与精度之间权衡。第二个是 Trn3 的 FP4 不带来额外吞吐：OCP MXFP4 操作数在到达数组之前被上转换为 MXFP8，因此 FP4 以 FP8 速率运行，仅节省内存和带宽，而非计算。两代都依赖行业的准确性恢复技巧：Trn3 的微缩标量块指数（microscaling block exponents），以及每代的硬件随机舍入。最不可信的一个数字是稀疏峰值：AWS 宣传 4× 的 FP8 数字，但其自身架构页面将其标为相对于密集 FP8 的 2×（4× 是相对密集 BF16），所以市场化的加速与数据通路并不完全一致。

#### 硅上的集合通信

在 GPU 上没有干净类比的模块是集合通信核心（collective-communication core）。分布式训练和推理在墙钟时间上有很大一部分花在集合通信上：每个梯度步都是一次 all-reduce，每个 MoE 层都是一次 all-to-all。在 GPU 上，这些集合通信作为 NCCL 内核在做数学运算的相同 SMs 上运行，因此通信和计算争夺相同的硅，重叠必须在软件中赢得。Trainium 将该功能剥离为专用硬件：每个 Trn2 芯片有 20 个 CC-Cores，直接连到 NeuronLink 端口，执行 all-reduce、all-gather、reduce-scatter 和 all-to-all，同时 Tensor 和 Vector 引擎继续运行。这与 Google 的 SparseCore 和 Cerebras 的 off-core zero filter 所做的动作相同：找到一个主引擎形状不适合的工作负载，在其旁边花一点面积做一个专用块，而不是从核心窃取周期。通信成为芯片并行执行的事情，而不是它暂停去做的事情。

#### 赌注
赌注 1：云是产品，芯片是组件。Annapurna 将芯片、服务器、机架、Nitro 网络和云 API 作为一个栈设计，因此 Trainium 只需在 AWS 内部在价格-性能上获胜，而无需在商用硅的规格表上取胜。  
赌注 2：借用计算论点，不必重造它。一个 128×128 的 weight-stationary 阵列、软件管理的 SBUF/PSUM 暂存存储器和整程序编译是 TPU 的下注，被复用到连共享 Google 的 OpenXLA。节省下来的努力投入到网络和机架上。  
赌注 3：集合通信属于硅中。专用 CC-Cores 在硬件中与计算叠加 all-reduce 和 all-to-all，而不是以窃取 matmul 单元 FLOPs 的内核形式运行。  
赌注 4：重用云自有的网络。纵向扩展使用 EFA 和 SRD 传输：相同的 Nitro 卸载、分包路径的 RDMA，已经运行 AWS 的其余部分。没有 InfiniBand。  
赌注 5：将拓扑移动到工作负载。Trn1 和 Trn2 复制了 TPU 的 torus；Trn3 的 NeuronSwitch 用一个交换式的 all-to-all fabric 取代它，因为 MoE 流量超出了最近邻。老实说，这是在遵循剧本：先是 Google 的，现在是 NVIDIA 的。

### 扩展

Trainium 的扩展继承了它与 AWS 其余部分的分离：一个紧耦合的 NeuronLink 域用于必须作为一个整体行动的芯片，以及云的通用 EFA fabric 用于其之外的所有事情。纵向扩展域不是像 NVLink 那样的缓存一致性共享内存；AWS 将 UltraServer 宣传为一个池化的多 TB 内存，但其底层是基于点对点链路的消息传递，更贴近 TPU 的 ICI 而非 NVSwitch 交叉开关。

#### 纵向扩展
NeuronLink 将芯片绑定成一个 UltraServer。在 Trn2 之前拓扑是一个 torus（每实例 16 芯片，4×4 的 2D torus，UltraServer 在 4×4×4 的 3D torus 中为 64 芯片）；Trn3 用 NeuronSwitch 的 all-to-all fabric 取代了它。消息传递，而非一致性加载/存储。  
#### 横向扩展
Elastic Fabric Adapter 通过以太网卸载到 Nitro。SRD 传输将每个流喷撒在许多路径上并可靠地但乱序地传递；UltraClusters 在 10p10u 网络上可达数十万芯片。

#### 纵向扩展

NeuronLink 是 Trainium 的芯片间互连（chip-to-chip fabric），在 NVIDIA 中的角色由 NVLink 承担，在 TPU 中由 ICI 承担。通过 Trn2 它将芯片连成 torus，正是 TPU 的选择：单个 trn2 实例为 16 芯片的 4×4 2D torus，每芯片约 ~1.28 TB/s，Trn2 UltraServer 将四个实例合并为 4×4×4 的 64 芯片，作为一个纵向扩展域展现 83 dense FP8 PetaFLOPS 和约 ~6 TB 的 HBM。第三个 torus 轴被刻意做薄（实例间环路每芯片运行约 ~256 GB/s，而实例内部为 1.28 TB/s），这是 torus 的典型权衡：廉价的布线和巨大的最近邻带宽，以直径上多跳为代价。AWS 将 64 芯片 UltraServer 与 NVIDIA 的 72-GPU NVL72 相比；聚合计算处于同一等级，但 torus 不是交叉开关，并且在非最近邻流量上两者表现截然不同。

正是这种权衡促使 Trn3 放弃 torus。NeuronSwitch-v1 是一个交换式的 all-to-all fabric，大致将片间带宽翻倍，更重要的是平坦化了直径，使得任何芯片通过一个交换跳即可到达另一个。Trn3 UltraServer 可扩展到 144 芯片，达到 362 dense FP8 PetaFLOPS 和 20.7 TB 的 HBM3e。动机与推动 Google 采用高基数（high-radix）拓扑以用于 MoE 推理相同：专家路由是 all-to-all，对 torus 来说是最坏情况，而交换机能将最长跳对变成单一穿越。Trainium 的互连路线图是行业的压缩重演：在工作负载为最近邻时采用 torus，当不是最近邻时切换到交叉开关。

#### 横向扩展

横向扩展并非定制；它是 AWS 已运行的相同 fabric。每个 Trainium 实例将一个 Elastic Fabric Adapter NIC 带入数据中心网络（Trn2 实例为 3.2 Tbps），传输为 SRD（Scalable Reliable Datagram），卸载到 Nitro 卡而不是在加速器上运行。SRD 是 AWS 对 RDMA 的全新设计：不是像 RoCE 或 InfiniBand 的单一有序流，而是将每条消息喷撒到最多 64 条并行路径上并可靠地但乱序地交付，将重组上推到集合库，从而规避单一路径拥塞造成的队头阻塞。它是 AWS 为其云通用地构建的传输，被复用于加速器 fabric。

层级顶部是由 10p10u 网络（AWS 对跨数据中心 ~10 petabits/s 带宽且延迟低于 10 微秒的简称）拼接在一起的 UltraCluster，可扩展到数十万芯片。一个证明点是 Project Rainier：约半百万个 Trainium2 芯片在多个美国数据中心上线，为 Anthropic 在 2025 年末提供服务；到 2026 年初，Claude 在超过一百万芯片上运行，这是任何外部实验室对非 NVIDIA 训练平台的最大承诺。它之所以存在是因为端到端的经济学闭合。AWS 声称 Trainium2 相对于其 Hopper 级 GPU 实例提供 30–40% 更好的价格-性能（AWS 的数字，相对于上一代 NVIDIA 而非 Blackwell 测量），并且因为 Amazon 拥有从 Nitro 卡到 API 的每一层，这个差额由 Amazon 来设定。

### 软件

Trainium 的软件明确地显示出借用：Neuron SDK 是一个以编译器为先的栈，建立在与 TPU 相同的 OpenXLA 基础之上。Neuron 编译器（neuronx-cc）接受 XLA HLO 图并将其下放为一个 NEFF 二进制，Neuron 运行时将其加载到 NeuronCores；前端 IR 来自 Google，Google 自己的 OpenXLA 公告将 Trainium 列为与 TPU 并列的一等 PJRT 设备。torch-neuronx 通过 PyTorch/XLA 的 LazyTensor 跟踪 PyTorch（记录 ops，在步骤边界编译图），jax-neuronx 通过 StableHLO 下放 JAX。在从以内核为驱动的 CUDA 到以整程序 XLA 为另一极的谱线上，Trainium 几乎位于 TPU 的顶端：编译器即系统，并且大体上是同一个编译器。

分歧处在于逃逸舱口。XLA 本身不能总是为新颖的注意力变体或融合的 MoE 分发合成最优解，因此 Neuron 提供 NKI（Neuron Kernel Interface），一种 Python 层面、tile 级别的内核语言，直接暴露四个引擎和 SBUF/PSUM 暂存存储器。它是 Trainium 的 Pallas（或其 Triton）：同样的 tile DSL 思想，当内核的胜利在于调度而不是代数时，它下降到整程序编译器之下。在其下面，一个集合通信库将 all-reduce 和 all-to-all 映射到 CC-Cores 和 NeuronLink 拓扑（NCCL 的类比），而 NeuronX Distributed 提供分片训练层。

与 CUDA（甚至 TPU 的栈）的差距是成熟度，而非设计。NKI、JAX 路径和分布式库在 2024 年末仍处于 beta；移植的模型只能在 AWS 上运行，且没有跨厂商的回退；vLLM 后端落后于上游项目。最明显的证据是锚定租户的工作方式：Anthropic 不仅仅通过 PyTorch 针对 Trainium，它与 Annapurna 深度嵌入，编写自己的低级 NKI 内核，并将修复上游到 Neuron 栈。Trainium 在前沿是可投入生产的，但在前沿它是协同工程的，而非交钥匙：编译器是继承而优秀的，但周边生态年轻。

## Groq LPU

Groq LPU 是一台确定性机器。其他所有芯片都花硅来容忍不确定性：缓存以隐藏内存延迟，调度器以填充停顿，仲裁器以解析它无法预测的争用。LPU 将这些都删除。剥离每一个反应性组件（无缓存、无分支预测、无仲裁器、无重排序缓冲，甚至没有片上交叉开关），并将整个调度问题交给编译器，编译器将每条指令和每个字节精确放置到具体周期。剩下的是一块在运行前其延迟就已知的芯片。TPU 将调度移入编译器但保留了 HBM 和动态网络，而 Groq 则移除了最后的非确定性来源：内存全部为 SRAM，网络也被调度，因此数百个芯片作为一个时钟精确的程序运行。

### 谱系
2016  
创立  
Jonathan Ross（曾以 20% 项目启动 Google 的 TPU）离开以构建一个确定性的推理芯片。  
2020  
TSPGroqChip 1  
首个硅（ISCA 2020，Think Fast）：单个功能切片核心，14 nm，无 HBM，无缓存。  
2022  
多处理器  
ISCA 2022：软件调度网络通过已编译的蜻蜓拓扑将确定性调度扩展到数千芯片。  
2023  
Samsung 4 nm  
第二代 LPU 在 Samsung SF4X 上宣布；它未曾出货（据报道 tapeout 失败）。  
2024  
LPU / GroqCloud  
TSP 更名为 Language Processing Unit；公司从卖卡转向卖 token，按记录解码速度销售。  
2025  
NVIDIA 许可  
NVIDIA 获取 LPU 技术的非独占许可并雇佣 Ross 及大部分团队。  
2026  
NVIDIA Groq 3 LPULP30 / LPX  
该技术在 GTC 2026 以延迟协处理器形式在 Rubin NVL72 旁重新出现，通过 Attention-FFN 解耦（disaggregation）。

### 架构

该领域其余部分由复制的核心构建：在芯片上平铺一个 SM、TensorCore、CU 或数据流核心，并将工作外放到这些复制体。LPU 则反其道而行。它取一个常规核心并将其拆开：指令控制、向量 ALU、矩阵单元、内存和网络各自成为一个功能切片，一个全高度的相同硬件列，这些列并排立在芯片上。每列在纵向上同质，芯片横向上异质。数据不在寄存器文件中等待被发到某个单元；它像装配线上的零件那样横向流经切片，东西向，每周期一次寄存器跳转，同时 VLIW 指令自控制切片向北发出与之相遇。数据通路中的任何东西都不作出反应：编译器知道每个操作数在每个周期的位置，而硬件只是走时钟。流式传输就是其身份：这个设计以 Tensor Streaming Processor (TSP) 为名诞生，并在 2024 年更名为 Language Processing Unit（LPU）。

纵轴是 SIMD 宽度。芯片高度为 320 条通道，组织为 20 个每个包含 16 条通道的超通道（第 21 个为备用，为良率熔断并对软件不可见），每个 slice 同时对所有 320 条通道起作用。横轴是时间。每条通道有 64 个逻辑流寄存器，32 个向东流动，32 个向西流动，在每个时钟周期每个流向其方向前进一个 slice，直到被消耗或从晶片边缘掉落。一个 slice 从经过的流中读取操作数，进行计算，并将结果写回到面向下一个 slice 的流中。晶片绕着中央向量单元在两个半球中镜像摆放，因此一次产生的一个值可以被任一侧的 slices 消费。

# 计算

LPU 保持与其它设计相同的劳动分工，矩阵工作在专用单元上，其它工作在向量引擎上，但将两者都安排为流中的 slices。矩阵路径是 MXM：四个独立的 320×320 乘加平面（每个半球两个），共有 409,600 个乘法器，接受 INT8 或 FP16 操作数进入 INT32 或 FP32 累加器。权重在一个平面上安装（在不到 40 个周期内全部装入），随后激活值流过并进行累加。在 900 MHz 时，这大约是 750 INT8 TOPS 和 188 FP16 TFLOPS，且不同寻常的是，这个数字没有稀疏性星号：TSP 完全拒绝跳过零，因为基于数据的跳过会使执行时间依赖于数据，而确定性是它不会用来交换的唯一属性。

向量路径是位于芯片中心的 VXM：每条通道有 16 个 ALU，排列为 4×4 网格，共 5,120 个 32-bit ALU，运行激活、归一化、量化和残差相加。由于计算是空间化的，而不是被发配到共享单元，一个操作数可以在连续的周期内穿过一连串的 VXM ALU 并直接进入 MXM 平面而不触及内存：GPU 内核手工构建的操作融合在这里只是 slices 的物理顺序。第三种 slice 类型，SXM，处理直线流无法表达的移动：通道移位、320 通道置换、转置以及芯片到芯片的链路都在此实现，所以跨通道重排数据是一级操作，而不是通过 SRAM 的往返。

# 内存

没有 HBM、没有 DRAM，也没有缓存。片上是 MEM slices：88 个 slice（每半球 44 个），共 230 MB SRAM，从任一计算 slice 访问每字节单周期，汇总约 ~80 TB/s。这就是整个层级：一层，扁平，软件寻址，没有会引入可变延迟访问的逐出、预取或一致性机制。

其结果是架构的决定性约束。230 MB 不能容纳一个模型。Llama-2 70B 以 FP16 为 140 GB，因此必须在数百个芯片上分片，其权重分布在一个机架或更多的聚合 SRAM 上：部署配置约为 ~576 个 LPU。GPU 将模型停放在少数封装的 HBM 中并将标记流过它，而 LPU 将模型分布在集群的 SRAM 中并将标记流经集群。芯片数量由容量决定，而非计算：权重必须能够适配。这与 Cerebras 做出的相同权衡（仅 SRAM，无 HBM）从相反方向达到：Cerebras 保持一个巨大的晶片并在晶圆上放弃容量；Groq 保持常规大小的晶片并放弃在单片上容纳整个模型的可能性。

# 数值表示

数值表示是未走之路。此处的每个其它供应商在每一代中都在减半精度，FP16 → FP8 → FP4，并通过分块缩放来换回精度。TSP 停留在 FP16 和 INT8，并使用 FP32 累加，从未在硅上发布 FP8 或 FP4。它的一个数值想法是 TruePoint：一个 320 元点积在带有 FP32 累加的一次合并舍入步骤中完成，因此 FP16 乘法器阵列在约约束减缩上接近 FP32 的准确度（Groq 报告相对于 FP32 基线约 ~0.05% 的最大误差）。

16-bit 是否出于信念还是由于数据路径未得到其低精度刷新与第二代芯片从未出货这一事实难以分开。SRAM 容量是该架构最稀缺的资源，而 8-bit 权重将使模型所需芯片数减半；一个如此受容量约束的机器完全有理由需要 FP8 却在硅上未得到它。这与笼罩在 Cerebras 的 16-bit 唯一路径之上的未决问题相同，和同样的张力：最缺乏容量的厂商以最宽精度进行计算。

# 确定性

每个其它加速器都隐藏延迟；LPU 暴露延迟。ISA 带有每条指令的执行延迟，数据路径按构造为固定延迟，因此编译器提前计算每个结果出现的确切周期。硬件中没有任何东西可以扰乱该调度：没有可能丢失的缓存、没有会造成阻塞的仲裁器、没有错误预测的分支、没有需要展开的推测。Groq 自己的测量就是证明：24,240 次 BERT-Large 运行返回时间落在约 ~75 µs 带宽内，编译器预测的延迟与测量值相差在 2% 以内。

这是 TPU 的本能（将调度转移到编译器，删除那些试图二次猜测它的硬件）更进一步的一步。TPU 编译器为一颗芯片调度；LPU 编译器为一个系统调度，因为确定性也跨网络成立。而这与 Cerebras 恰好相反，后者的核心是数据流，任意操作数到达时就触发：WSE 对数据做出反应，LPU 则按时钟对其进行定时。两台机器都删除了调度器；一台以到达替代，另一台以时钟替代。

# 押注
押注 1：确定性超过容错。删除每个反应式组件（缓存、仲裁器、预测器、乱序缓冲）并让编译器掌控每一个周期。  
押注 2：空间功能切片。将核心解构为切片并将操作数通过它们流动，使融合成为楼层平面，并且数据重用存在于连线中，而非寄存器文件的舞蹈。  
押注 3：SRAM 是唯一的内存。无 HBM，不惜任何容量代价。以单周期、固定延迟访问为代价放弃在芯片上容纳模型的能力，接受模型必须跨越数百个芯片。  
押注 4：也调度网络。让芯片同时作为路由器并在编译时逐周期调度通信，这样千芯片集群就是一个确定性的程序，没有交换机且无拥塞。  
押注 5：出售延迟，而非吞吐量。针对批次 1 下每用户每秒标记优化，这是 GPU 最差的区域，并将该速度作为产品来定价，而不是在每标记成本上竞争。

# 扩展

扩展 LPU 与此处其它任何东西都不同，因为不存在一个单独的纵向扩展结构可供构建：芯片本身已经是一个交换机。每个 LPU 携带最多 16 个芯片间 RealScale 链路（卡上暴露 11 个）并同时充当计算端点和路由器。直接将芯片互相连线，集群就是一个无胶片多处理器：无 NIC、无交换 ASIC、无机架顶交换机。并且因为确定性跨这些链路成立，整个集群运行在一个编译时调度上。

## 纵向扩展

节点：8 个 LPU 通过 RealScale C2C 完全互联，形成一个蜻蜓拓扑组，呈现为单个高基数虚拟路由器。软件调度，无交换机，无一致性。

## 横向扩展

相同的结构，向外扩展。节点的蜻蜓拓扑：每机架 9 个节点（72 芯片，1 个节点为热备），扩展到指定的 10,440 芯片，任意两者之间仍不超过六跳。每跳仍在编译好的、确定性的调度上。

## 纵向扩展

节点由 8 个 LPU 组成，完全互联：每颗芯片的 7 条链路将其连到其它七颗，因此节点中每颗芯片到每颗其它芯片都是一跳。每颗芯片剩余的四条链路（节点内共 32 条）捆绑成 ISCA 论文所称的 32 端口虚拟路由器，作为节点进入更大结构的上联。没有基板交换机也没有一致性地址空间；远程操作数不是被加载，而是被调度到达，由源芯片在编译器选择的周期注入，并由目的地在其到达的周期消费。

## 横向扩展

超出节点范围，节点连成一个蜻蜓拓扑：9 个节点构成一个 72 芯片的机架（第九个为热备，所以 64 个激活），拓扑可扩展到指定的 10,440 芯片，任意两者相距六跳以内。该结构由软件调度：路由和流控转到编译时，该论文的表述是直白的、已调度的，而非路由式的。没有反压也没有动态仲裁，因为编译器已经证明接收端已准备好；链路携带前向纠错而非重传，因为重试会扰乱调度。将一机架独立时钟的芯片保持锁步本身就是一个问题：链路是近同步（plesiochronous），并且该结构通过在一棵生成树上每 256 个周期交换 Hardware-Aligned Counters 来维持全局一致时间，并用周期性的 deskew 指令让每颗芯片回到对齐。Groq 报告的回报是：一个 8 路 all-reduce 在大张量上能匹配 A100/NVSwitch 节点，在小张量上击败它，因为已调度的结构不付出动态握手延迟的代价。

代价写入了内存押注的物理学。一个模型副本不是一台机器，而是一个机架（或八台）：据一项分析，Llama-2 70B 在 ~576 芯片上承载时伴随约 144 个主机 CPU 和 144 TB 的主机内存，与 8-GPU 服务器所需的两颗 CPU 比较。每颗芯片下的晶圆便宜（GlobalFoundries 14 nm，据报道低于 $6k，相对于 H100 级部件约 $16k），但你需要数百片，并且在解码时期其巨大的计算多数处于空闲状态，而 SRAM 在做实际工作。SemiAnalysis 直言不讳：当你针对延迟优化时，LPU 在每标记的物料清单上胜出，但一旦你进行批量处理，它在按每美元吞吐量上大约被 GPU 打败一个数量级。该架构不是在成本上竞争。它在速度上竞争。

# 软件

编程模型是“编译器即机器”的最纯粹表达。没有内核。你把一个来自 PyTorch、TensorFlow 或 ONNX 的模型交给 Groq 编译器；它降低到一组小的张量操作集合并静态调度每条指令、每个流和每次芯片间传输。没有人编写 wgmma 或手动调优一个 tile，因为没有动态硬件可供手工调优。Groq 的演示是在不到十人的团队用四天时间部署 LLaMA，而同一模型在 GPU 上调优需要数月的手工内核工作。围绕编译器的栈（分析器、运行时、GroqFlow 启动路径）小且封闭，GroqFlow 在 2025 年封存，因为公司停止销售卡片并开始出售标记。

这一转向说明了该架构的用途。LPU 在构造上仅用于推理（Ross 的表述是训练是局部博弈而推理是全局博弈），并且在一件事上无可匹敌：单用户解码延迟。独立测量支持此主张，Artificial Analysis 将 Groq 评为开放模型中每秒标记最快的提供者之一。它与其它场景严重不匹配：一个无法适配在一机架 SRAM 中的模型、一个希望用大批量来换取每美元吞吐量的工作负载，或一个静态调度无法表达的动态控制流。MoE 可以被服务，但其基于数据的专家路由与一个希望事先知道一切的编译器显得不太协调，Groq 对如何调和两者公布甚少。

结局是这些技术的买家是 NVIDIA。在 2025 年 12 月 NVIDIA 获得了 LPU 技术的非排他许可并雇佣了 Ross 及大部分团队。这并非一次收购：根据 NVIDIA 自己的 10-K，没有产品、客户合同或股权发生变更，尽管成交时约 $130 亿的支付导致媒体将其称为收购。在 GTC 2026 上该技术以 NVIDIA Groq 3 LPU 的形式重现，一个由 256 个仅含 SRAM 的推理芯片构成的机架并置于 Rubin NVL72 旁并在它们之间拆分 transformer：GPU 运行 attention，LPU 运行 feed-forward 和 MoE 层，Dynamo 协调交接。最确定性的 AI 架构最终成为最可编程架构中的延迟协处理器。与此同时，GroqCloud 仍在原始 14 nm 硅片上提供标记服务。

# 比较

所有算术数据均为在所述精度下的峰值；条目为密集除非供应商未公布依据。内存带宽为显示的原生层级：GPU、TPU 和 Trainium 使用 HBM；Cerebras 和 Groq 使用片上汇聚 SRAM。这些数字不可直接比较。纵向扩展带宽遵循每个供应商的惯例，可能表示每芯片汇总、机架汇总，或真实二分带宽。

每芯片
公司	年份	芯片	加速器内存	内存带宽	旗舰密集 FLOPs	TDP	纵向扩展带宽
	2023	H100 SXM5	80 GB HBM3	3.4 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	H200 SXM	141 GB HBM3e	4.8 TB/s	1.98 PetaFLOPS FP8	700 W	900 GB/s
2024	B200	192 GB HBM3e	8 TB/s	4.5 PetaFLOPS FP8 / 9 PetaFLOPS FP4	1,000 W	1.8 TB/s
2025	B300	288 GB HBM3e	8 TB/s	7.5 PetaFLOPS FP8 / 15 PetaFLOPS FP4	1,400 W	1.8 TB/s
2026	Rubin	288 GB HBM4*	~13 TB/s*	~17 PetaFLOPS FP8* / ~50 PetaFLOPS FP4*	~1,500 W*	3.6 TB/s
2027	Rubin Ultra	1 TB HBM4e*	~32 TB/s*	~33 PetaFLOPS FP8* / ~100 PetaFLOPS FP4*	~1,800 W*	3.6 TB/s
	2023	TPU v5p	95 GB HBM2e	2.8 TB/s	0.46 PetaFLOPS BF16	未披露	1.2 TB/s
2025	TPU Ironwood (v7)	192 GB HBM3e	7.4 TB/s	4.6 PetaFLOPS FP8	未披露	1.2 TB/s
2026	TPU v8t Sunfish	216 GB HBM3e	6.5 TB/s	12.6 PetaFLOPS FP4	未披露	未披露
	2023	MI300X	192 GB HBM3	5.3 TB/s	2.6 PetaFLOPS FP8	750 W	896 GB/s
2024	MI325X	256 GB HBM3e	6.0 TB/s	2.6 PetaFLOPS FP8	1,000 W	896 GB/s
2025	MI355X	288 GB HBM3e	8 TB/s	10 PetaFLOPS FP8 / 20 PetaFLOPS FP4	1,400 W	1,075 GB/s
2026	MI455X	待定	待定	~40 PetaFLOPS FP4*	待定	未披露
	2021	WSE-2	40 GB SRAM（在晶圆上）	20 PB/s（汇总）	7.5 PetaFLOPS FP16	23 kW（系统）	（域=整片晶圆）
2024	WSE-3	44 GB SRAM（在晶圆上）	21 PB/s（汇总）	~15.8 PetaFLOPS FP16*	23 kW（系统）	（域=整片晶圆）
	2022	Trainium1	32 GB HBM2e*	820 GB/s	0.19 PetaFLOPS BF16/FP8	未披露	未披露
2024	Trainium2	96 GB HBM3	2.9 TB/s	1.3 PetaFLOPS FP8	~500 W*	1.28 TB/s
2025	Trainium3	144 GB HBM3e	4.9 TB/s	2.5 PetaFLOPS FP8	未披露	未披露
	2020	GroqChip (1st-gen TSP/LPU)	230 MB SRAM	80 TB/s（片上汇总）	0.188 PetaFLOPS FP16	215 W	330 GB/s（11 链路卡）
2026	NVIDIA Groq 3 LP30	500 MB SRAM	150 TB/s（片上汇总）	~1.2 PetaFLOPS FP8*	未披露	2.5 TB/s

每机架 / pod
公司	年份	系统	芯片数量	汇聚稠密 FLOPs	加速器内存总量	纵向扩展互连带宽	每芯片 NIC	功耗	散热
	2023	HGX H100	8	16 PetaFLOPS FP8	640 GB	7.2 TB/s	400 Gbps (CX-7)	~10 kW	风冷
2024	HGX H200	8	16 PetaFLOPS FP8	1.1 TB	7.2 TB/s	400 Gbps	~10 kW	风冷
2024	GB200 NVL72	72	360 PetaFLOPS FP8 / 720 PetaFLOPS FP4	13.4 TB	130 TB/s	800 Gbps (CX-8)	~120 kW	液冷
2025	GB300 NVL72	72	540 PetaFLOPS FP8 / 1,100 PetaFLOPS FP4	20.7 TB	130 TB/s	800 Gbps	~120 kW	液冷
2026	NVL144	144	~1.2 ExaFLOPS FP8 / ~3.6 ExaFLOPS FP4	~21 TB	~260 TB/s*	1.6 Tbps (CX-9)	~200 kW*	液冷
2027	NVL576 (Kyber)	576	~5 ExaFLOPS FP8 / ~15 ExaFLOPS FP4	~144 TB	n/d	1.6 Tbps	~600 kW*	液冷
	2023	TPU v5p pod	8,960	4.1 ExaFLOPS BF16	852 TB	（3D 环形网）	（ICI = 纵向扩展 + 横向扩展）	n/d	液冷
2025	TPU Ironwood pod	9,216	42.5 ExaFLOPS FP8	1.77 PB	（3D 环形网）	光学 OCS	~10 MW*	液冷
2026	TPU v8t Sunfish pod	9,600	121 ExaFLOPS FP4	~2 PB	（Boardfly）	光学 OCS	n/d	液冷
	2023	MI300X 8-GPU OAM	8	21 PetaFLOPS FP8	1.5 TB	7.2 TB/s	400 Gbps	~10 kW	风冷
2024	MI325X 8-GPU OAM	8	21 PetaFLOPS FP8	2.0 TB	7.2 TB/s	400 Gbps	~12 kW*	风冷
2025	MI355X 8-GPU OAM	8	80 PetaFLOPS FP8 / 160 PetaFLOPS FP4	2.3 TB	8.6 TB/s	400 Gbps	~16 kW*	液冷
2026	Helios (MI455X)	72	1.4 ExaFLOPS FP8 / 2.9 ExaFLOPS FP4	31 TB	260 TB/s	n/d	n/d	液冷
	2024	Condor Galaxy 3	64 晶圆	~1 ExaFLOPS FP16*	2.8 TB SRAM + MemoryX	（以太网树形拓扑）	1.2 Tb/s 以太网	~1.5 MW*	液冷
	2022	Trn1 实例	16	3 PetaFLOPS BF16	512 GB	（2D 环形网）	~50 Gbps (EFA)	n/d	风冷
2024	Trn2 UltraServer	64	83 PetaFLOPS FP8	6.1 TB	（3D 环形网）	200 Gbps (EFAv3)	n/d	风冷
2025	Trn3 UltraServer	144	362 PetaFLOPS FP8	20.7 TB	（NeuronSwitch）	n/d	n/d	液冷
	2022	GroqRack	64 在役（已安装 72）	12 PetaFLOPS FP16	14 GB SRAM	3.2 TB/s 二等分带宽	（RealScale；无每芯片 NIC）	n/d	风冷
2026	NVIDIA Groq 3 LPX	256	315 PetaFLOPS FP8	128 GB SRAM + 12 TB DDR5	n/d（640 TB/s 聚合 C2C）	n/d	n/d	液冷

* 标注表示分析师推导、时代推断或供应商聚合推导的数值；n/d 表示供应商未披露的规格。

# 这说明了什么
每芯片的 FP8 已趋于一致。B200 (4.5 PF)、Ironwood (4.6 PF) 和 MI355X (10 PF) 彼此相距约 ~2×。每芯片的军备竞赛相当接近；机架和 pod 是各架构分歧之处。  
HBM 容量是 AMD 的持续胜利。2023–2025 年间 192 → 256 → 288 GB 每代都与或超过 NVIDIA。NVIDIA 仅在 B300（2025 年晚期）以 288 GB 追平；Rubin Ultra 在 2026 年以每封装 1 TB 重新夺回领先。  
机架级纵向扩展直到 2026 年都是 NVIDIA 的胜利。GB200 / GB300 NVL72 是 2024–2025 年间唯一发货的一致性机架域；AMD 在机箱级别纵向扩展并直到 Helios 才达到机架级。TPU 回避了这个问题：其环形网同时就是机架和集群。  
TPU pod 在芯片数量上远超任何 NVIDIA 机架。Ironwood pod = 9,216 芯片以达 42.5 ExaFLOPS FP8；NVL576 = 576 GPUs 约 ~5 ExaFLOPS FP8。TPU 的“每芯片固定率 × 大型 pod”配方在系统级上产出更多的汇聚计算，但代价是每芯片带宽。  
每芯片功耗上升迅速。700 W (Hopper) → 1,000 W (Blackwell, MI325X) → 1,400 W (B300, MI355X) → ~1,800 W (Rubin Ultra, 分析师)。液冷在 ~1,000 W 以上变为必须；空气冷却在 Hopper 后几乎结束。  
横向扩展 NIC 带宽随 NVIDIA 每代翻倍。400 Gbps (CX-7, Hopper) → 800 Gbps (CX-8, Blackwell) → 1.6 Tbps (CX-9, Rubin)。AMD 落后一代（Pollara 400 → Vulcano 800），反映 Pensando 的较小部署基础和较晚整合。  
Cerebras 打破了表格的轴。完全无 HBM：片上 SRAM 为 44 GB，汇聚为 21 PB/s，约为每个稠密 FLOP ~1.3 字节，而 GPU 行接近 0.002。代价在同一行可见：总内存少于单个 H200，每瓦密集 FLOPs 落后于任何当代 GPU，并且纵向扩展列为空，因为一致性域即为晶圆本身。  
Trainium 在经济性上竞争，而非规格表。每芯片它落后（Trn2 的 1.3 PF FP8 约为 MI355X 的四分之一），但 Trn2 UltraServer 在 2024 年与 NVL72 一同达到了 64 芯片的机架级纵向扩展，作为一条消息传递环形网而非一致性交叉开关，并且 Trn3 转向了交换式 NeuronSwitch 结构。AWS 拥有从 Nitro 卡到 API 的每一层，并且一个锚租户（Anthropic，超过一百万颗 Trainium2 芯片）在前沿规模上验证了它。  
Groq 以 SRAM 带宽换取容量，然后用芯片数扩展内存池。第一个 GroqRack 在 64 个激活芯片上仅暴露 14 GB；Groq 3 LPX 将其扩展到 256 芯片上的 128 GB，汇聚 SRAM 带宽为 40 PB/s。它的 12 TB DDR5 层及与 Rubin 的配对表明 LPU 是对大型内存 GPU 机架的补充，而非替代。
`,He=o=>`/ai-chip-architectures-zh/media/${o}`,be={nvidia:He("nvidia-gpu-die.png"),nvidiaSm:He("nvidia-sm.png"),nvidiaScaleUp:He("nvidia-scale-up.png"),nvidiaScaleOut:He("nvidia-scale-out.png"),tpu:He("google-tpu-chip.png"),tpuCore:He("google-tpu-tensorcore.png"),tpuScaleUp:He("google-tpu-scale-up.png"),tpuScaleOut:He("google-tpu-scale-out.png"),amd:He("amd-gpu-chip.png"),amdCu:He("amd-cu.png"),amdScaleUp:He("amd-scale-up.png"),amdScaleOut:He("amd-scale-out.png"),cerebras:He("cerebras-wafer-die.png"),cerebrasCore:He("cerebras-core.png"),trainium:He("aws-trainium-chip.png"),trainiumCore:He("aws-trainium-neuroncore.png"),trainiumScaleUp:He("aws-trainium-scale-up.png"),trainiumScaleOut:He("aws-trainium-scale-out.png"),groq:He("groq-chip.png"),groqScale:He("groq-scale.png"),standardMachines:He("standard_machines_mark.png")},it={nvidia:He("nvidia.png"),google:He("google.png"),amd:"https://www.amd.com/content/dam/code/images/favicon/favicon.ico",cerebras:He("cerebras.svg"),aws:He("aws.png"),groq:He("groq.png")},Pg=[{id:"nvidia-gpu",label:"GPU",logo:it.nvidia,subitems:[{id:"nvidia-architecture",label:"架构"},{id:"nvidia-scaling",label:"扩展"},{id:"nvidia-software",label:"软件"}]},{id:"google-tpu",label:"TPU",logo:it.google,subitems:[{id:"google-architecture",label:"架构"},{id:"google-scaling",label:"扩展"},{id:"google-software",label:"软件"}]},{id:"amd-gpu",label:"GPU",logo:it.amd,logoClass:"is-tight",subitems:[{id:"amd-architecture",label:"架构"},{id:"amd-scaling",label:"扩展"},{id:"amd-software",label:"软件"}]},{id:"cerebras-wse",label:"WSE",logo:it.cerebras,subitems:[{id:"cerebras-architecture",label:"架构"},{id:"cerebras-scaling",label:"扩展"},{id:"cerebras-software",label:"软件"}]},{id:"aws-trainium",label:"Trainium",logo:it.aws,subitems:[{id:"trainium-architecture",label:"架构"},{id:"trainium-scaling",label:"扩展"},{id:"trainium-software",label:"软件"}]},{id:"groq-lpu",label:"LPU",logo:it.nvidia,subitems:[{id:"groq-architecture",label:"架构"},{id:"groq-scaling",label:"扩展"},{id:"groq-software",label:"软件"}]}],um={"nvidia-gpu":{"nvidia-architecture":[{src:be.nvidia,alt:"Blackwell B200 单晶粒平面图",caption:"Blackwell B200 单晶粒平面图。"},{src:be.nvidiaSm,alt:"NVIDIA Streaming Multiprocessor 局部图",caption:"一个 Streaming Multiprocessor：四个子分区、共享 L1/SMEM 与 TMA。"}],"nvidia-scaling":[{src:be.nvidiaScaleUp,alt:"NVL72 纵向扩展图",caption:"NVL72：72 个 Blackwell GPU 通过 NVSwitch 构成单一纵向扩展域。"},{src:be.nvidiaScaleOut,alt:"DGX SuperPOD 横向扩展图",caption:"DGX SuperPOD：八个 NVL72 机架通过 Quantum-X800 InfiniBand 互联。"}]},"google-tpu":{"google-architecture":[{src:be.tpu,alt:"TPU Ironwood 单封装平面图",caption:"TPU Ironwood / v8t 单封装平面图。"},{src:be.tpuCore,alt:"TPU TensorCore 架构图",caption:"一个 TensorCore：Scalar Unit、VPU、XLU、Transpose/Permute 与 256×256 MXU。"}],"google-scaling":[{src:be.tpuScaleUp,alt:"TPU Ironwood superpod 纵向扩展图",caption:"TPU Ironwood superpod：64 芯片立方体及由 Palomar OCS 组成的 ICI 域。"},{src:be.tpuScaleOut,alt:"TPU 8t 横向扩展图",caption:"TPU 8t 横向扩展：Virgo 承载东西向流量，Jupiter 连接南北向流量。"}]},"amd-gpu":{"amd-architecture":[{src:be.amd,alt:"AMD Instinct MI355X 封装平面图",caption:"AMD Instinct MI355X（CDNA 4）封装平面图。"},{src:be.amdCu,alt:"AMD Compute Unit 图",caption:"一个 AMD Compute Unit：wave64、SIMD16、Matrix Core、LDS 与向量缓存。"}],"amd-scaling":[{src:be.amdScaleUp,alt:"AMD Helios 纵向扩展图",caption:"AMD Helios：72 个 MI455X GPU 通过 UALink 构成内存域。"},{src:be.amdScaleOut,alt:"AMD 横向扩展图",caption:"AMD 横向扩展：以 UEC 和标准 Ethernet 为基础的机架间互联。"}]},"cerebras-wse":{"cerebras-architecture":[{src:be.cerebras,alt:"Cerebras WSE-3 晶圆和 reticle 图",caption:"Cerebras WSE-3：晶圆尺度网格与单个 reticle 的局部放大。"},{src:be.cerebrasCore,alt:"Cerebras 数据流核心图",caption:"一个 Cerebras 核心：路由器、数据流任务调度器、SRAM 与 FMAC SIMD。"}]},"aws-trainium":{"trainium-architecture":[{src:be.trainium,alt:"AWS Trainium2 封装图",caption:"AWS Trainium2 封装：两个计算晶粒、八个 NeuronCore-v3 与 HBM3。"},{src:be.trainiumCore,alt:"NeuronCore-v3 图",caption:"一个 NeuronCore-v3：128×128 Tensor Engine、SBUF、Vector 与 DMA。"}],"trainium-scaling":[{src:be.trainiumScaleUp,alt:"Trn3 UltraServer 纵向扩展图",caption:"Trn3 UltraServer：通过两层 NeuronSwitch 连接为 144 芯片的全互联域。"},{src:be.trainiumScaleOut,alt:"AWS Trainium 横向扩展图",caption:"AWS Trainium 横向扩展：Elastic Fabric Adapter 与 Ethernet 的 UltraCluster。"}]},"groq-lpu":{"groq-architecture":[{src:be.groq,alt:"Groq LPU 芯片平面图",caption:"Groq LPU 平面图：由中央 VXM 向两侧展开的 MXM、SXM 与 MEM 切片。"}],"groq-scaling":[{src:be.groqScale,alt:"Groq 横向扩展图",caption:"Groq 横向扩展：LPUs 组成 Dragonfly 节点并扩展到 72 芯片机架。"}]}},b1={[be.nvidia]:"nvidia-gpu-die",[be.nvidiaSm]:"nvidia-sm",[be.nvidiaScaleUp]:"nvidia-scale-up",[be.nvidiaScaleOut]:"nvidia-scale-out",[be.tpu]:"google-tpu-chip",[be.tpuCore]:"google-tpu-tensorcore",[be.tpuScaleUp]:"google-tpu-scale-up",[be.tpuScaleOut]:"google-tpu-scale-out",[be.amd]:"amd-gpu-chip",[be.amdCu]:"amd-cu",[be.amdScaleUp]:"amd-scale-up",[be.amdScaleOut]:"amd-scale-out",[be.cerebras]:"cerebras-wafer-die",[be.cerebrasCore]:"cerebras-core",[be.trainium]:"aws-trainium-chip",[be.trainiumCore]:"aws-trainium-neuroncore",[be.trainiumScaleUp]:"aws-trainium-scale-up",[be.trainiumScaleOut]:"aws-trainium-scale-out",[be.groq]:"groq-chip",[be.groqScale]:"groq-scale"},v1={"NVIDIA GPU":{id:"nvidia-gpu",label:"NVIDIA GPU",logo:it.nvidia},"Google TPU":{id:"google-tpu",label:"Google TPU",logo:it.google},"AMD GPU":{id:"amd-gpu",label:"AMD GPU",logo:it.amd,logoClass:"is-tight"},"Cerebras WSE":{id:"cerebras-wse",label:"Cerebras WSE",logo:it.cerebras},"AWS Trainium":{id:"aws-trainium",label:"AWS Trainium",logo:it.aws},"Groq LPU":{id:"groq-lpu",label:"Groq LPU",logo:it.nvidia}},w1={nvidia:{label:"NVIDIA",logo:it.nvidia},google:{label:"Google",logo:it.google},amd:{label:"AMD",logo:it.amd,logoClass:"is-tight"},cerebras:{label:"Cerebras",logo:it.cerebras},aws:{label:"AWS",logo:it.aws},groq:{label:"Groq",logo:it.groq}},A1=[{company:"nvidia",cells:["2023","H100 SXM5","80 GB HBM3","3.4 TB/s","1.98 PetaFLOPS FP8","700 W","900 GB/s"]},{company:"nvidia",cells:["2024","H200 SXM","141 GB HBM3e","4.8 TB/s","1.98 PetaFLOPS FP8","700 W","900 GB/s"]},{company:"nvidia",cells:["2024","B200","192 GB HBM3e","8 TB/s","4.5 PetaFLOPS FP8 / 9 PetaFLOPS FP4","1,000 W","1.8 TB/s"]},{company:"nvidia",cells:["2025","B300","288 GB HBM3e","8 TB/s","7.5 PetaFLOPS FP8 / 15 PetaFLOPS FP4","1,400 W","1.8 TB/s"]},{company:"nvidia",cells:["2026","Rubin","288 GB HBM4*","~13 TB/s*","~17 PetaFLOPS FP8* / ~50 PetaFLOPS FP4*","~1,500 W*","3.6 TB/s"]},{company:"nvidia",cells:["2027","Rubin Ultra","1 TB HBM4e*","~32 TB/s*","~33 PetaFLOPS FP8* / ~100 PetaFLOPS FP4*","~1,800 W*","3.6 TB/s"]},{company:"google",cells:["2023","TPU v5p","95 GB HBM2e","2.8 TB/s","0.46 PetaFLOPS BF16","未披露","1.2 TB/s"]},{company:"google",cells:["2025","TPU Ironwood (v7)","192 GB HBM3e","7.4 TB/s","4.6 PetaFLOPS FP8","未披露","1.2 TB/s"]},{company:"google",cells:["2026","TPU v8t Sunfish","216 GB HBM3e","6.5 TB/s","12.6 PetaFLOPS FP4","未披露","未披露"]},{company:"amd",cells:["2023","MI300X","192 GB HBM3","5.3 TB/s","2.6 PetaFLOPS FP8","750 W","896 GB/s"]},{company:"amd",cells:["2024","MI325X","256 GB HBM3e","6.0 TB/s","2.6 PetaFLOPS FP8","1,000 W","896 GB/s"]},{company:"amd",cells:["2025","MI355X","288 GB HBM3e","8 TB/s","10 PetaFLOPS FP8 / 20 PetaFLOPS FP4","1,400 W","1,075 GB/s"]},{company:"amd",cells:["2026","MI455X","待定","待定","~40 PetaFLOPS FP4*","待定","未披露"]},{company:"cerebras",cells:["2021","WSE-2","40 GB SRAM（在晶圆上）","20 PB/s（汇总）","7.5 PetaFLOPS FP16","23 kW（系统）","晶圆即扩展域"]},{company:"cerebras",cells:["2024","WSE-3","44 GB SRAM（在晶圆上）","21 PB/s（汇总）","~15.8 PetaFLOPS FP16*","23 kW（系统）","晶圆即扩展域"]},{company:"aws",cells:["2022","Trainium1","32 GB HBM2e*","820 GB/s","0.19 PetaFLOPS BF16/FP8","未披露","未披露"]},{company:"aws",cells:["2024","Trainium2","96 GB HBM3","2.9 TB/s","1.3 PetaFLOPS FP8","~500 W*","1.28 TB/s"]},{company:"aws",cells:["2025","Trainium3","144 GB HBM3e","4.9 TB/s","2.5 PetaFLOPS FP8","未披露","未披露"]},{company:"groq",cells:["2020","GroqChip (1st-gen TSP/LPU)","230 MB SRAM","80 TB/s（片上汇总）","0.188 PetaFLOPS FP16","215 W","330 GB/s（11 链路卡）"]},{company:"groq",cells:["2026","NVIDIA Groq 3 LP30","500 MB SRAM","150 TB/s（片上汇总）","~1.2 PetaFLOPS FP8*","未披露","2.5 TB/s"]}],T1=[{company:"nvidia",cells:["2023","HGX H100","8","16 PetaFLOPS FP8","640 GB","7.2 TB/s","400 Gbps (CX-7)","~10 kW","风冷"]},{company:"nvidia",cells:["2024","HGX H200","8","16 PetaFLOPS FP8","1.1 TB","7.2 TB/s","400 Gbps","~10 kW","风冷"]},{company:"nvidia",cells:["2024","GB200 NVL72","72","360 PetaFLOPS FP8 / 720 PetaFLOPS FP4","13.4 TB","130 TB/s","800 Gbps (CX-8)","~120 kW","液冷"]},{company:"nvidia",cells:["2025","GB300 NVL72","72","540 PetaFLOPS FP8 / 1,100 PetaFLOPS FP4","20.7 TB","130 TB/s","800 Gbps","~120 kW","液冷"]},{company:"nvidia",cells:["2026","NVL144","144","~1.2 ExaFLOPS FP8 / ~3.6 ExaFLOPS FP4","~21 TB","~260 TB/s*","1.6 Tbps (CX-9)","~200 kW*","液冷"]},{company:"nvidia",cells:["2027","NVL576 (Kyber)","576","~5 ExaFLOPS FP8 / ~15 ExaFLOPS FP4","~144 TB","n/d","1.6 Tbps","~600 kW*","液冷"]},{company:"google",cells:["2023","TPU v5p pod","8,960","4.1 ExaFLOPS BF16","852 TB","3D 环形网","ICI","n/d","液冷"]},{company:"google",cells:["2025","TPU Ironwood pod","9,216","42.5 ExaFLOPS FP8","1.77 PB","3D 环形网","光学 OCS","~10 MW*","液冷"]},{company:"google",cells:["2026","TPU v8t Sunfish pod","9,600","121 ExaFLOPS FP4","~2 PB","Boardfly","光学 OCS","n/d","液冷"]},{company:"amd",cells:["2023","MI300X 8-GPU OAM","8","21 PetaFLOPS FP8","1.5 TB","7.2 TB/s","400 Gbps","~10 kW","风冷"]},{company:"amd",cells:["2024","MI325X 8-GPU OAM","8","21 PetaFLOPS FP8","2.0 TB","7.2 TB/s","400 Gbps","~12 kW*","风冷"]},{company:"amd",cells:["2025","MI355X 8-GPU OAM","8","80 PetaFLOPS FP8 / 160 PetaFLOPS FP4","2.3 TB","8.6 TB/s","400 Gbps","~16 kW*","液冷"]},{company:"amd",cells:["2026","Helios (MI455X)","72","1.4 ExaFLOPS FP8 / 2.9 ExaFLOPS FP4","31 TB","260 TB/s","n/d","n/d","液冷"]},{company:"cerebras",cells:["2024","Condor Galaxy 3","64 晶圆","~1 ExaFLOPS FP16*","2.8 TB SRAM + MemoryX","以太网树形拓扑","1.2 Tb/s Ethernet","~1.5 MW*","液冷"]},{company:"aws",cells:["2022","Trn1 实例","16","3 PetaFLOPS BF16","512 GB","2D 环形网","~50 Gbps (EFA)","n/d","风冷"]},{company:"aws",cells:["2024","Trn2 UltraServer","64","83 PetaFLOPS FP8","6.1 TB","3D 环形网","200 Gbps (EFAv3)","n/d","风冷"]},{company:"aws",cells:["2025","Trn3 UltraServer","144","362 PetaFLOPS FP8","20.7 TB","NeuronSwitch","n/d","n/d","液冷"]},{company:"groq",cells:["2022","GroqRack","64 在役（已安装 72）","12 PetaFLOPS FP16","14 GB SRAM","3.2 TB/s 二等分带宽","无每芯片 NIC","n/d","风冷"]},{company:"groq",cells:["2026","NVIDIA Groq 3 LPX","256","315 PetaFLOPS FP8","128 GB SRAM + 12 TB DDR5","n/d","n/d","n/d","液冷"]}];function S1(o){return o.replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[r]??r)}function M1(o){const r=[];let c=o;return[...Cg].sort((l,d)=>d.term.length-l.term.length).forEach(l=>{const d=l.term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");c=c.replace(new RegExp(d,"g"),()=>{const h=`@@GLOSSARY_${r.length}@@`;return r.push(`<span class="term" tabindex="0"><span class="term-label">${l.term}</span><span class="term-tooltip" role="tooltip"><b>${l.english}</b><span>${l.definition}</span></span></span>`),h})}),c.replace(/@@GLOSSARY_(\d+)@@/g,(l,d)=>r[Number(d)]??"")}function br(o,r){const c=S1(o).replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1</a>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*\*([^*]+)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/ {2}\n/g,"<br />").replace(/\n/g," ");return r==="zh"?M1(c):c}function C1(o,r){const c=o.replace(/^# .*Jacob Peake\s*\n+/m,"").replace(/^\*\*链接:\*\*\s*https:\/\/www\.jacobpeake\.com\/ai-chip-architectures\s*\n\s*---\s*\n+/m,"").replace(/^!\[[^\]]*\]\([^\n]*\)\s*$/gm,"").replace(/^[\s\S]*?^AI Chip Architectures\s*$/m,"## AI Chip Architectures");return(r==="zh"?c.replace(/^问题所在$/m,"### 问题").replace(/^# 比较$/m,"### 比较").replace(/^# 这说明了什么$/m,"##### 这说明了什么").replace(/^每芯片$/m,"##### 每芯片").replace(/^每机架 \/ pod$/m,"##### 每机架 / pod").replace(/^# (计算|内存|数值表示|确定性|押注|扩展|软件)$/gm,"##### $1").replace(/^## (软件|扩展)$/gm,"#### $1"):c.replace(/^The Problem$/m,"### The Problem").replace(/^(NVIDIA GPU|Google TPU|AMD GPU|Cerebras WSE|AWS Trainium|Groq LPU)$/gm,"## $1").replace(/^(GENEALOGY|ARCHITECTURE|SCALING|SOFTWARE)$/gm,"### $1").replace(/^(Per-chip|Per-rack \/ pod|What this shows)$/gm,"##### $1")).replace(/([^\n])\n(#{2,5}\s+)/g,`$1

$2`).replace(/^(#{2,5}\s+.+)\n(?!\n)/gm,`$1

`)}function P1(o,r){return C1(o,r).trim().split(/\n{2,}/).map(c=>c.trim()).filter(Boolean).map(c=>{const l=c.match(/^(#{2,5})\s+(.+)$/);return l?{kind:"heading",level:l[1].length,text:l[2].trim()}:c==="---"?{kind:"rule"}:{kind:"paragraph",text:c}})}function x1(o){return/^(架构|Architecture)$/i.test(o)?"architecture":/^(扩展|Scaling)$/i.test(o)?"scaling":/^(软件|Software)$/i.test(o)?"software":""}function E1({spec:o,showChineseOverlay:r}){const c=b1[o.src];return w.jsx("figure",{"data-loc":"client/src/pages/Home.tsx:302",className:"architecture-figure","aria-label":o.caption,children:w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:303",className:"diagram-shell",children:[w.jsx("img",{"data-loc":"client/src/pages/Home.tsx:304",src:o.src,alt:o.alt,loading:"lazy"}),r&&c&&w.jsx(m1,{"data-loc":"client/src/pages/Home.tsx:305",diagram:c})]})})}function dm({type:o,language:r}){const c=o==="chip"?r==="zh"?["公司","年份","芯片","加速器内存","内存带宽","旗舰密集 FLOPs","TDP","纵向扩展带宽"]:["Company","Year","Chip","Accelerator memory","Memory BW","Flagship dense FLOPs","TDP","Scale-up BW"]:r==="zh"?["公司","年份","系统","芯片数量","汇聚密集 FLOPs","加速器内存总量","纵向扩展互连带宽","每芯片 NIC","功耗","散热"]:["Company","Year","System","Chips","Aggregate dense FLOPs","Accelerator memory total","Scale-up fabric BW","Per-chip NIC","Power","Cooling"],l=o==="chip"?A1:T1,d=f=>r==="en"?f.replace("液冷","Liquid").replace("风冷","Air").replace("无每芯片 NIC","No per-chip NIC").replace("64 在役（已安装 72）","64 active (72 installed)").replace("3D 环形网","3D torus"):f,h=f=>{const v=l[f].company;if(f>0&&l[f-1].company===v)return 0;let y=1;for(;l[f+y]?.company===v;)y+=1;return y};return w.jsx("div",{"data-loc":"client/src/pages/Home.tsx:327",className:"comparison-wrap",children:w.jsxs("table",{"data-loc":"client/src/pages/Home.tsx:328",className:"comparison-table",children:[w.jsx("thead",{"data-loc":"client/src/pages/Home.tsx:329",children:w.jsx("tr",{"data-loc":"client/src/pages/Home.tsx:329",children:c.map(f=>w.jsx("th",{"data-loc":"client/src/pages/Home.tsx:329",children:f},f))})}),w.jsx("tbody",{"data-loc":"client/src/pages/Home.tsx:330",children:l.map((f,v)=>{const y=w1[f.company],m=h(v);return w.jsxs("tr",{"data-loc":"client/src/pages/Home.tsx:334",children:[m>0&&w.jsx("td",{"data-loc":"client/src/pages/Home.tsx:335",className:"company",rowSpan:m,children:w.jsx("img",{"data-loc":"client/src/pages/Home.tsx:335",className:`company-logo ${y.logoClass??""}`,src:y.logo,alt:y.label})}),f.cells.map((b,p)=>w.jsx("td",{"data-loc":"client/src/pages/Home.tsx:336",children:d(b)},`${p}-${b}`))]},`${f.company}-${f.cells[1]}-${v}`)})})]})})}function D1({source:o,language:r}){const c=o.split(`
`).map(f=>f.trim()).filter(Boolean),[l,d="",...h]=c;return w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:349",className:"gen-row",children:[w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:350",className:"gen-head",children:[w.jsx("span",{"data-loc":"client/src/pages/Home.tsx:350",className:"gen-year",children:l}),w.jsx("span",{"data-loc":"client/src/pages/Home.tsx:350",children:br(d,r).replace(/<[^>]+>/g,"")})]}),h.length>0&&w.jsx("div",{"data-loc":"client/src/pages/Home.tsx:351",className:"gen-desc",children:br(h.join(" "),r).replace(/<[^>]+>/g,"")})]})}function hm({activeSection:o,activeSub:r,compact:c=!1,language:l}){return w.jsxs("ul",{"data-loc":"client/src/pages/Home.tsx:358",className:c?"mobile-toc-list":"sidebar-toc-list",children:[Pg.map(d=>{const h=o===d.id;return w.jsxs("li",{"data-loc":"client/src/pages/Home.tsx:362",className:`sidebar-toc-item ${h?"is-current":""}`,children:[w.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:363",className:`sidebar-toc-link has-logo ${h?"current":""}`,href:`#${d.id}`,children:[w.jsx("img",{"data-loc":"client/src/pages/Home.tsx:364",className:`sidebar-toc-logo ${d.logoClass??""}`,src:d.logo,alt:""}),d.label]}),w.jsx("ul",{"data-loc":"client/src/pages/Home.tsx:367",className:"sidebar-toc-sublist",children:d.subitems.map(f=>w.jsx("li",{"data-loc":"client/src/pages/Home.tsx:369",className:"sidebar-toc-subitem",children:w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:370",className:`sidebar-toc-sublink ${r===f.id?"current":""}`,href:`#${f.id}`,children:l==="en"?{architecture:"Architecture",scaling:"Scaling",software:"Software"}[f.id.split("-").at(-1)??""]??f.label:f.label})},f.id))})]},d.id)}),w.jsx("li",{"data-loc":"client/src/pages/Home.tsx:377",className:"sidebar-toc-item",children:w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:378",className:`sidebar-toc-link comparison-link ${o==="comparison"?"current":""}`,href:"#comparison",children:l==="en"?"Comparison":"比较"})})]})}function L1({language:o}){const r=o==="zh"?y1:g1,c=o==="zh"?"AI 芯片架构":"AI Chip Architectures",l=I.useMemo(()=>P1(r,o).filter(m=>!(m.kind==="heading"&&(m.text==="AI 芯片架构"||m.text==="AI Chip Architectures"))),[r,o]);let d="",h="",f=!1;const v={},y=new Set;return w.jsxs(w.Fragment,{children:[w.jsx("header",{"data-loc":"client/src/pages/Home.tsx:396",className:"article-header",children:w.jsx("h1",{"data-loc":"client/src/pages/Home.tsx:397",className:"article-title",children:c})}),w.jsx("article",{"data-loc":"client/src/pages/Home.tsx:399",className:"article-body","aria-label":o==="zh"?"AI 芯片架构中文文章":"AI Chip Architectures article",children:l.map((m,b)=>{if(m.kind==="rule")return w.jsx("hr",{"data-loc":"client/src/pages/Home.tsx:401"},`rule-${b}`);if(m.kind==="heading"){const M=m.text??"",D=v1[M];if(D)return d=D.id,h="",f=!1,w.jsxs("h3",{"data-loc":"client/src/pages/Home.tsx:409",id:D.id,"data-observe-id":D.id,children:[w.jsx("img",{"data-loc":"client/src/pages/Home.tsx:409",className:`heading-logo ${D.logoClass??""}`,src:D.logo,alt:""}),D.label]},`chapter-${D.id}`);if(M==="问题"||M==="The Problem")return w.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:411",id:"the-problem","data-observe-id":"the-problem",children:M},`heading-${b}`);if(M==="比较"||M==="Comparison")return d="comparison",h="",f=!1,w.jsx("h3",{"data-loc":"client/src/pages/Home.tsx:412",id:"comparison","data-observe-id":"comparison",children:M},`heading-${b}`);if(M==="谱系"||M==="GENEALOGY")return f=!0,w.jsx("h4",{"data-loc":"client/src/pages/Home.tsx:413",children:o==="zh"?"谱系":"GENEALOGY"},`genealogy-${b}`);const E=x1(M);if(E&&d&&d!=="comparison"){h=`${d.split("-")[0]}-${E}`,d==="aws-trainium"&&(h=`trainium-${E}`),f=!1;const K=!y.has(h);return y.add(h),w.jsx("h4",{"data-loc":"client/src/pages/Home.tsx:421",id:K?h:void 0,"data-observe-id":K?h:void 0,children:M.toUpperCase()},`sub-${b}`)}const H=m.level&&m.level>=5?"h5":"h4",_=M==="每芯片"||M==="Per-chip"?"per-chip":M==="每机架 / pod"||M==="Per-rack / pod"?"per-rack-pod":M==="这说明了什么"||M==="What this shows"?"what-this-shows":void 0;return w.jsx(H,{"data-loc":"client/src/pages/Home.tsx:425",id:_,children:M},`heading-${b}`)}const p=m.text?.trim()??"";if(p.startsWith("公司	年份	芯片")||p.startsWith("Company	Year	Chip"))return w.jsx(dm,{"data-loc":"client/src/pages/Home.tsx:428",type:"chip",language:o},`comparison-chip-${b}`);if(p.startsWith("公司	年份	系统")||p.startsWith("Company	Year	System"))return w.jsx(dm,{"data-loc":"client/src/pages/Home.tsx:429",type:"rack",language:o},`comparison-rack-${b}`);if(f&&/^\d{4}\s*(?:\n|\s{2})/.test(p)){const M=p.split(/(?=^\d{4}\s*$)/m).map(D=>D.trim()).filter(Boolean);return w.jsx("div",{"data-loc":"client/src/pages/Home.tsx:432",className:"genealogy",children:M.map((D,E)=>w.jsx(D1,{"data-loc":"client/src/pages/Home.tsx:432",source:D,language:o},`genealogy-row-${b}-${E}`))},`genealogy-block-${b}`)}const x=w.jsx("p",{"data-loc":"client/src/pages/Home.tsx:434",dangerouslySetInnerHTML:{__html:br(p,o)}},`p-${b}`);if(d&&h&&um[d]?.[h]){const M=`${d}:${h}`,D=v[M]??0;v[M]=D+1;const E=um[d][h][D];if(E)return w.jsxs(I.Fragment,{children:[w.jsx("p",{"data-loc":"client/src/pages/Home.tsx:440",dangerouslySetInnerHTML:{__html:br(p,o)}}),w.jsx(E1,{"data-loc":"client/src/pages/Home.tsx:440",spec:E,showChineseOverlay:o==="zh"})]},`figure-pair-${M}-${D}`)}return x})})]})}function fm({ending:o=!1,language:r}){return w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:451",className:o?"post-cta post-cta-end":"post-cta",children:[w.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:452",className:"post-cta-brand",href:"https://standardmachines.com/",target:"_blank",rel:"noreferrer",children:[w.jsx("img",{"data-loc":"client/src/pages/Home.tsx:453",className:"post-cta-mark",src:be.standardMachines,alt:""}),w.jsx("span",{"data-loc":"client/src/pages/Home.tsx:454",children:"Standard Machines"})]}),w.jsx("p",{"data-loc":"client/src/pages/Home.tsx:456",className:"post-cta-body",children:r==="zh"?"用 AI 设计先进芯片。":"Teaching AI to design advanced chips."}),w.jsxs("a",{"data-loc":"client/src/pages/Home.tsx:457",className:"post-cta-contact",href:"mailto:founders@standardmachines.com?subject=From%20your%20writing",children:[w.jsx(pg,{"data-loc":"client/src/pages/Home.tsx:457",size:12}),r==="zh"?"联系创始团队":"Get in touch"]})]})}function pm(){const{theme:o,toggleTheme:r}=xu(),[c,l]=I.useState(()=>window.localStorage.getItem("article-language")==="en"?"en":"zh"),[d,h]=I.useState("nvidia-gpu"),[f,v]=I.useState("");I.useEffect(()=>{document.title=c==="zh"?"AI 芯片架构":"AI Chip Architectures",document.documentElement.lang=c==="zh"?"zh-CN":"en";const m=Array.from(document.querySelectorAll("[data-observe-id]")),b=new IntersectionObserver(p=>{const x=p.filter(E=>E.isIntersecting).sort((E,H)=>E.boundingClientRect.top-H.boundingClientRect.top)[0];if(!x)return;const M=x.target.dataset.observeId??"";if(!M)return;const D=Pg.find(E=>M===E.id||E.subitems.some(H=>H.id===M));D?(h(D.id),v(M===D.id?"":M)):M==="comparison"&&(h("comparison"),v(""))},{rootMargin:"-22% 0px -66% 0px",threshold:[0,.1]});return m.forEach(p=>b.observe(p)),()=>b.disconnect()},[c]);const y=()=>{const m=window.location.hash,b=window.scrollY,p=c==="zh"?"en":"zh";window.localStorage.setItem("article-language",p),l(p),requestAnimationFrame(()=>requestAnimationFrame(()=>{const x=m?document.getElementById(m.slice(1)):null;x?x.scrollIntoView({block:"start"}):window.scrollTo({top:b})}))};return w.jsx("main",{"data-loc":"client/src/pages/Home.tsx:504",className:"page",children:w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:505",className:"layout",children:[w.jsxs("nav",{"data-loc":"client/src/pages/Home.tsx:506",className:"sidebar","aria-label":"网站和文章目录",children:[w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:507",className:"sidebar-section",children:[w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:508",className:"sidebar-link",href:_a("/"),children:"Home"}),w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:509",className:"sidebar-link",href:_a("/writing"),children:"Writing"})]}),w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:511",className:"sidebar-social","aria-label":"社交链接",children:[w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:512",href:"https://github.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:w.jsx(wu,{"data-loc":"client/src/pages/Home.tsx:512"})}),w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:513",href:"https://www.linkedin.com/in/jacob-peake/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:w.jsx(Au,{"data-loc":"client/src/pages/Home.tsx:513"})}),w.jsx("a",{"data-loc":"client/src/pages/Home.tsx:514",href:"https://x.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"X",children:w.jsx("span",{"data-loc":"client/src/pages/Home.tsx:514",className:"x-glyph",children:"𝕏"})}),w.jsx("button",{"data-loc":"client/src/pages/Home.tsx:515",type:"button","aria-label":"切换暗色模式",onClick:r,children:o==="dark"?w.jsx(Su,{"data-loc":"client/src/pages/Home.tsx:515"}):w.jsx(Tu,{"data-loc":"client/src/pages/Home.tsx:515"})}),w.jsxs("button",{"data-loc":"client/src/pages/Home.tsx:516",className:"language-toggle",type:"button","aria-label":c==="zh"?"切换至英文":"切换至中文",onClick:y,children:[w.jsx(fg,{"data-loc":"client/src/pages/Home.tsx:516"}),w.jsx("span",{"data-loc":"client/src/pages/Home.tsx:516",children:c==="zh"?"EN":"中"})]})]}),w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:518",className:"sidebar-toc",children:[w.jsx("div",{"data-loc":"client/src/pages/Home.tsx:519",className:"sidebar-toc-title",children:"Contents"}),w.jsx(hm,{"data-loc":"client/src/pages/Home.tsx:520",activeSection:d,activeSub:f,language:c})]}),w.jsx(fm,{"data-loc":"client/src/pages/Home.tsx:522",language:c})]}),w.jsxs("div",{"data-loc":"client/src/pages/Home.tsx:525",className:"content",children:[w.jsxs("details",{"data-loc":"client/src/pages/Home.tsx:526",className:"mobile-toc",children:[w.jsx("summary",{"data-loc":"client/src/pages/Home.tsx:527",children:"Contents"}),w.jsx(hm,{"data-loc":"client/src/pages/Home.tsx:528",activeSection:d,activeSub:f,compact:!0,language:c})]}),w.jsx(L1,{"data-loc":"client/src/pages/Home.tsx:530",language:c}),w.jsx(fm,{"data-loc":"client/src/pages/Home.tsx:531",ending:!0,language:c})]})]})})}const B1=[{path:"/",label:"AI 芯片架构"},{path:"/principles-of-computer-architecture",label:"计算机体系结构原理"},{path:"/how-to-design-a-chip",label:"如何从零开始设计一块芯片"},{path:"/how-to-learn",label:"如何学习"}];function I1(){const[,o]=Pu(),{theme:r,toggleTheme:c}=xu();return w.jsx("main",{"data-loc":"client/src/pages/Writing.tsx:17",className:"page",children:w.jsxs("div",{"data-loc":"client/src/pages/Writing.tsx:17",className:"layout",children:[w.jsxs("nav",{"data-loc":"client/src/pages/Writing.tsx:17",className:"sidebar","aria-label":"网站导航",children:[w.jsxs("div",{"data-loc":"client/src/pages/Writing.tsx:17",className:"sidebar-section",children:[w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",className:"sidebar-link",href:_a("/"),children:"Home"}),w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",className:"sidebar-link",href:_a("/writing"),onClick:l=>{l.preventDefault(),o("/writing")},children:"Writing"})]}),w.jsxs("div",{"data-loc":"client/src/pages/Writing.tsx:17",className:"sidebar-social",children:[w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",href:"https://github.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:w.jsx(wu,{"data-loc":"client/src/pages/Writing.tsx:17"})}),w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",href:"https://www.linkedin.com/in/jacob-peake/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:w.jsx(Au,{"data-loc":"client/src/pages/Writing.tsx:17"})}),w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",href:"https://x.com/jacobpeake",target:"_blank",rel:"noreferrer","aria-label":"X",children:w.jsx("span",{"data-loc":"client/src/pages/Writing.tsx:17",className:"x-glyph",children:"𝕏"})}),w.jsx("button",{"data-loc":"client/src/pages/Writing.tsx:17",type:"button","aria-label":"切换暗色模式",onClick:c,children:r==="dark"?w.jsx(Su,{"data-loc":"client/src/pages/Writing.tsx:17"}):w.jsx(Tu,{"data-loc":"client/src/pages/Writing.tsx:17"})})]})]}),w.jsx("div",{"data-loc":"client/src/pages/Writing.tsx:17",className:"content writing-index","aria-label":"文章列表",children:B1.map(l=>w.jsx("a",{"data-loc":"client/src/pages/Writing.tsx:17",href:_a(l.path),onClick:d=>{d.preventDefault(),o(l.path)},children:l.label},l.path))})]})})}function N1(){return w.jsx(Sg,{"data-loc":"client/src/App.tsx:14",base:"/ai-chip-architectures-zh/".replace(/\/$/,""),children:w.jsxs(Jw,{"data-loc":"client/src/App.tsx:15",children:[w.jsx(ga,{"data-loc":"client/src/App.tsx:16",path:"/",component:pm}),w.jsx(ga,{"data-loc":"client/src/App.tsx:17",path:"/index.html",component:pm}),w.jsx(ga,{"data-loc":"client/src/App.tsx:18",path:"/writing",component:I1}),w.jsx(ga,{"data-loc":"client/src/App.tsx:19",path:"/principles-of-computer-architecture",component:$c}),w.jsx(ga,{"data-loc":"client/src/App.tsx:20",path:"/how-to-design-a-chip",component:$c}),w.jsx(ga,{"data-loc":"client/src/App.tsx:21",path:"/how-to-learn",component:$c}),w.jsx(ga,{"data-loc":"client/src/App.tsx:22",path:"/404",component:sm}),w.jsx(ga,{"data-loc":"client/src/App.tsx:24",component:sm})]})})}function k1(){return w.jsx(Qw,{"data-loc":"client/src/App.tsx:34",children:w.jsx(Zw,{"data-loc":"client/src/App.tsx:35",defaultTheme:"light",switchable:!0,children:w.jsxs(gw,{"data-loc":"client/src/App.tsx:39",children:[w.jsx(xb,{"data-loc":"client/src/App.tsx:40"}),w.jsx(N1,{"data-loc":"client/src/App.tsx:41"})]})})})}W0.createRoot(document.getElementById("root")).render(w.jsx(k1,{"data-loc":"client/src/main.tsx:5"}));
