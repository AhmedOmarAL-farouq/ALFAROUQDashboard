(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var i=s(t),v=s(r),m=0;m<c.length;++m){var y=c[m];if(!a[y]&&(!n||!n[y])&&(!v||!v[y])&&(!i||!i[y])){var b=d(r,y);try{u(t,y,b)}catch(x){}}}}return t}},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),c=r(1689),i=r(2441),s=r(5749),u={};function l(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=a.Children.only(h),g=x&&"object"===typeof x&&x.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),w=n(j,2),O=w[0],C=w[1],N=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,a.useEffect)((function(){var e=C&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,o=u[d+"%"+p+(n?"%"+n:"")];e&&!o&&l(r,d,p,{locale:n})}),[p,d,C,b,t,r]);var S={ref:N,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,r,d,p,v,m,y,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var M="undefined"!==typeof b?b:r&&r.locale,E=r&&r.isLocaleDomain&&(0,c.getDomainLocale)(p,M,r&&r.locales,r&&r.domainLocales);S.href=E||(0,c.addBasePath)((0,c.addLocale)(p,M,r&&r.defaultLocale))}return a.default.cloneElement(x,S)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=n(u,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,c=void 0!==a&&a;return r||o&&c}},7947:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),i=(a=r(617))&&a.__esModule?a:{default:a},s=r(3367),u=r(4287),l=r(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],d=n[l]||new Set;"name"===l&&c||!d.has(f)?(d.add(f),n[l]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,r=(0,c.useContext)(s.AmpStateContext),n=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}m.rewind=function(){};var y=m;t.default=y},617:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),c=(r(1506),r(2205)),i=r(8585),s=r(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),f=function(e){c(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},7322:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return ce}});var o=r(5893),a=(r(3235),r(7294)),c="navbarOpened",i=function(e){return{type:c,payload:e}},s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=a.createContext&&a.createContext(s),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function d(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),d(e.child))}))}function p(e){return function(t){return a.createElement(h,l({attr:l({},e.attr)},t),d(e.child))}}function h(e){var t=function(t){var r,n=e.attr,o=e.size,c=e.title,i=f(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==u?a.createElement(u.Consumer,null,(function(e){return t(e)})):t(s)}function v(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}function m(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z"}}]})(e)}function y(e){return p({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256z"}}]})(e)}r(5697);var b=a.createContext(null);var x=function(e){e()},g=function(){return x},j={notify:function(){}};var w=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=j,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=g(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=j)},e}(),O="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?a.useLayoutEffect:a.useEffect;var C=function(e){var t=e.store,r=e.context,n=e.children,o=(0,a.useMemo)((function(){var e=new w(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,a.useMemo)((function(){return t.getState()}),[t]);O((function(){var e=o.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,c]);var i=r||b;return a.createElement(i.Provider,{value:o},n)};r(8679),r(9864);function N(){return(0,a.useContext)(b)}function S(e){void 0===e&&(e=b);var t=e===b?N:function(){return(0,a.useContext)(e)};return function(){return t().store}}var M=S();function E(e){void 0===e&&(e=b);var t=e===b?M:S(e);return function(){return t().dispatch}}var P=E(),_=function(e,t){return e===t};function k(e){void 0===e&&(e=b);var t=e===b?N:function(){return(0,a.useContext)(e)};return function(e,r){void 0===r&&(r=_);var n=t(),o=function(e,t,r,n){var o,c=(0,a.useReducer)((function(e){return e+1}),0)[1],i=(0,a.useMemo)((function(){return new w(r,n)}),[r,n]),s=(0,a.useRef)(),u=(0,a.useRef)(),l=(0,a.useRef)(),f=(0,a.useRef)(),d=r.getState();try{if(e!==u.current||d!==l.current||s.current){var p=e(d);o=void 0!==f.current&&t(p,f.current)?f.current:p}else o=f.current}catch(h){throw s.current&&(h.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),h}return O((function(){u.current=e,l.current=d,f.current=o,s.current=void 0})),O((function(){function e(){try{var e=r.getState(),n=u.current(e);if(t(n,f.current))return;f.current=n,l.current=e}catch(h){s.current=h}c()}return i.onStateChange=e,i.trySubscribe(),e(),function(){return i.tryUnsubscribe()}}),[r,i]),o}(e,r,n.store,n.subscription);return(0,a.useDebugValue)(o),o}}var R,L=k(),A=r(3935);R=A.unstable_batchedUpdates,x=R;var z=function(e){var t=e.dispatch,r=e.navbarToggle,n=L((function(e){return e.navbarIsOpened})),a=function(){r(),t(i(!n))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"navbar-toggler",onClick:a,children:(0,o.jsx)("span",{className:"navbar-toggler-icon","aria-hidden":"true"})}),(0,o.jsx)("div",{className:"close-icon d-md-none",onClick:a,children:(0,o.jsx)(v,{})})]})},D=r(1664);function T(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 13L16 11 7 11 7 8 2 12 7 16 7 13z"}},{tag:"path",attr:{d:"M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"}}]})(e)}function I(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"}}]})(e)}function $(e){return p({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",clipRule:"evenodd"}}]})(e)}function U(e){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"}}]})(e)}var W=function(e){return(0,o.jsxs)("ul",{className:"nav flex-column close align-self-center ".concat(e.class),ref:e.closeNavRef,children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/",children:(0,o.jsx)("a",{className:"nav-link",children:(0,o.jsx)(m,{title:"Dashboard"})})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/projects",children:(0,o.jsx)("a",{className:"nav-link",children:(0,o.jsx)(y,{title:"Projects"})})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/ourcustomers",children:(0,o.jsx)("a",{className:"nav-link",children:(0,o.jsx)($,{title:"Our Cutomers"})})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/profile",children:(0,o.jsx)("a",{className:"nav-link",children:(0,o.jsx)(U,{title:"Profile"})})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/login",children:(0,o.jsx)("a",{className:"nav-link",children:(0,o.jsx)(T,{title:"Log-Out"})})})})]})},B=function(e){return(0,o.jsxs)("ul",{className:"nav nav-pills flex-column fs-6 mt-4 align-self-center ".concat(e.class),ref:e.navRef,children:[(0,o.jsxs)("li",{className:"nav-item my-2",children:[(0,o.jsx)(D.default,{href:"/",children:(0,o.jsx)(m,{})}),(0,o.jsx)(D.default,{href:"/",children:(0,o.jsx)("a",{children:"Dashboard"})})]}),(0,o.jsxs)("li",{className:"nav-item my-2",children:[(0,o.jsx)(D.default,{href:"/projects",children:(0,o.jsx)(y,{})}),(0,o.jsx)(D.default,{href:"/projects",children:(0,o.jsx)("a",{children:"Projects"})})]}),(0,o.jsxs)("li",{className:"nav-item my-2",children:[(0,o.jsx)(D.default,{href:"/our-customers",children:(0,o.jsx)($,{})}),(0,o.jsx)(D.default,{href:"/our-customers",children:(0,o.jsx)("a",{children:"Our Cutomers"})})]}),(0,o.jsxs)("li",{className:"nav-item my-2",children:[(0,o.jsx)(D.default,{href:"/profile",children:(0,o.jsx)(U,{})}),(0,o.jsx)(D.default,{href:"/profile",children:(0,o.jsx)("a",{children:"Profile"})})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("li",{className:"nav-item my-2",children:[(0,o.jsx)(D.default,{href:"/login",children:(0,o.jsx)(T,{})}),(0,o.jsx)(D.default,{href:"/login",children:(0,o.jsx)("a",{children:"Log-Out"})})]})]})};function H(){var e=(0,a.useState)(),t=e[0],r=e[1];return(0,a.useEffect)((function(){r(window.innerWidth);window.addEventListener("resize",(function(){r(window.innerWidth)}))}),[]),t}var V=function(){var e=H(),t=P(),r=(0,a.useRef)(),n=(0,a.useRef)(),c=(0,a.useRef)(),i=(0,a.useRef)(),s=function(){r.current.classList.toggle("close"),n.current.classList.toggle("hidden"),n.current.classList.toggle("d-none"),c.current.classList.toggle("hidden"),i.current.classList.toggle("hidden")};return e>767.99?(0,o.jsxs)("nav",{className:"bg-light navbar-light d-flex flex-column align-items-center px-1 py-5",ref:r,children:[(0,o.jsx)(z,{dispatch:t,navbarToggle:s}),(0,o.jsxs)("div",{className:"navbar-logo d-flex align-items-center justify-content-center",ref:i,children:[(0,o.jsx)(I,{}),(0,o.jsx)(D.default,{href:"/",children:(0,o.jsx)("a",{className:"mb-0 mx-1",children:"ALFAROUQ"})})]}),(0,o.jsx)(B,{navRef:n}),(0,o.jsx)(W,{closeNavRef:c,class:"hidden"})]}):(0,o.jsxs)("nav",{className:"bg-light navbar-light d-flex flex-column align-items-center px-1 py-5 close",ref:r,children:[(0,o.jsx)(z,{dispatch:t,navbarToggle:s}),(0,o.jsxs)("div",{className:"navbar-logo d-flex align-items-center justify-content-center hidden",ref:i,children:[(0,o.jsx)(I,{}),(0,o.jsx)(D.default,{href:"/",children:(0,o.jsx)("a",{className:"mb-0 mx-1",children:"ALFAROUQ"})})]}),(0,o.jsx)(B,{navRef:n,class:"hidden d-none"}),(0,o.jsx)(W,{closeNavRef:c,class:""})]})},F=function(){return(0,o.jsx)("h1",{children:"footer"})},X=r(9008);function K(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"32",d:"M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"}}]})(e)}function Z(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"}}]})(e)}function q(e){return p({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"}}]})(e)}var Q=function(){var e=(0,a.useRef)(),t=function(){e.current.classList.toggle("hidden")};return(0,o.jsxs)("div",{className:"header p-sm-5 p-3",children:[(0,o.jsxs)("div",{className:"icons",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"red-dot"}),(0,o.jsx)(Z,{className:"text-primary fs-3"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"red-dot"}),(0,o.jsx)(K,{className:"text-primary fs-3"})]})]}),(0,o.jsxs)("div",{className:"profile-info",onMouseLeave:t,onMouseEnter:t,children:[(0,o.jsx)("div",{className:"image",children:(0,o.jsx)("img",{src:"/avatar.jpg",alt:"avatar",className:"rounded-circle border border-2 border-primary img-thumbnail"})}),(0,o.jsxs)("div",{className:" info text-white rounded px-2 py-3 hidden",ref:e,children:[(0,o.jsx)("h5",{className:"text-center",children:"Welcome Admin"}),(0,o.jsx)("h6",{children:"Ahmed Omar"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("ul",{className:"nav flex-column px-1",children:[(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/profile",children:(0,o.jsxs)("a",{className:"nav-link text-white",children:[(0,o.jsx)(U,{className:"mx-1 fs-5"})," My Profile"]})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/settings",children:(0,o.jsxs)("a",{className:"nav-link text-white",children:[(0,o.jsx)(q,{className:"mx-1 fs-5"})," Settings"]})})}),(0,o.jsx)("li",{className:"nav-item",children:(0,o.jsx)(D.default,{href:"/login",children:(0,o.jsxs)("a",{className:"nav-link text-white",children:[(0,o.jsx)(T,{className:"mx-1 fs-5"})," Log Out"]})})})]})]})]})]})},G=function(e){var t=e.children,r=H(),n=L((function(e){return e.navbarIsOpened}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(X.default,{children:[(0,o.jsx)("meta",{name:"description",content:"Generated by Ahmed Omar"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("div",{className:"container-fluid d-flex flex-wrap p-0",children:[n||r>767.99?(0,o.jsx)("div",{className:"col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12",children:(0,o.jsx)(V,{})}):(0,o.jsx)("div",{className:"col-sm-1 col-2",children:(0,o.jsx)(V,{})}),n||r>767.99?(0,o.jsxs)("div",{className:"col-xl-10 col-lg-9 col-md-8 col-sm-8 col-9",children:[(0,o.jsx)(Q,{}),t,(0,o.jsx)(F,{})]}):(0,o.jsxs)("div",{className:"col-sm-11 col-10",children:[(0,o.jsx)(Q,{}),t,(0,o.jsx)(F,{})]})]})]})},J=r(4890);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te={navbarIsOpened:!1},re=r(8500),ne=(0,J.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return ee(ee({},e),{},{navbarIsOpened:t.payload});default:return e}}),(0,re.Uo)());ne.subscribe((function(){return!0}));r(2702);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsx)(C,{store:ne,children:(0,o.jsx)(G,{children:(0,o.jsx)(t,ae({},r))})})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7322)}])},3235:function(){},2702:function(){},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case a:case i:case c:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case m:case v:case s:return e;default:return t}}case o:return t}}}function w(e){return j(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=v,t.Portal=o,t.Profiler=i,t.StrictMode=c,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||j(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return j(e)===u},t.isContextProvider=function(e){return j(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return j(e)===d},t.isFragment=function(e){return j(e)===a},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===v},t.isPortal=function(e){return j(e)===o},t.isProfiler=function(e){return j(e)===i},t.isStrictMode=function(e){return j(e)===c},t.isSuspense=function(e){return j(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===i||e===c||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===b||e.$$typeof===x||e.$$typeof===g||e.$$typeof===y)},t.typeOf=j},9864:function(e,t,r){"use strict";e.exports=r(9921)},8500:function(e,t,r){"use strict";var n=r(4890).qC;t.Uo="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},4890:function(e,t,r){"use strict";function n(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}r.d(t,{qC:function(){return u},MT:function(){return s}});var o="function"===typeof Symbol&&Symbol.observable||"@@observable",a=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function i(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,r){var a;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(n(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(n(1));return r(s)(e,t)}if("function"!==typeof e)throw new Error(n(2));var u=e,l=t,f=[],d=f,p=!1;function h(){d===f&&(d=f.slice())}function v(){if(p)throw new Error(n(3));return l}function m(e){if("function"!==typeof e)throw new Error(n(4));if(p)throw new Error(n(5));var t=!0;return h(),d.push(e),function(){if(t){if(p)throw new Error(n(6));t=!1,h();var r=d.indexOf(e);d.splice(r,1),f=null}}}function y(e){if(!i(e))throw new Error(n(7));if("undefined"===typeof e.type)throw new Error(n(8));if(p)throw new Error(n(9));try{p=!0,l=u(l,e)}finally{p=!1}for(var t=f=d,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!==typeof e)throw new Error(n(10));u=e,y({type:c.REPLACE})}function x(){var e,t=m;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(n(11));function r(){e.next&&e.next(v())}return r(),{unsubscribe:t(r)}}})[o]=function(){return this},e}return y({type:c.INIT}),(a={dispatch:y,subscribe:m,getState:v,replaceReducer:b})[o]=x,a}function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(2441)}));var r=e.O();_N_E=r}]);