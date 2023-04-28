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
/******/ 	__webpack_require__.p = "/wp-content/themes/binah/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,ee="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function I(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===ee||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}I.fn=l.prototype,I.Class=l,I.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),I(t).is(r))n.apply(t,a);else for(var i=I(t).parents(),s=0;s<i.length;s+=1)I(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s=s||!1;for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n=n||!1;for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new ee.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===ee?ee.scrollY:e.scrollTop,n=e===ee?ee.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return ee.getComputedStyle(this[0],null).getPropertyValue(e)}if(2!==arguments.length||"string"!=typeof e)return this;for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=I(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===ee)return i===ee;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&I(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&I(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?I(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?I(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return I(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?I(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return I(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&I(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=I(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?ee.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){I.fn[e]=I.fn[e]||t[e]});function e(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})}var a,i,s,n,te={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=ee.getComputedStyle(e,null);return ee.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new ee.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=ee.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=ee.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||ee.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(te.isObject(a[l])&&te.isObject(s[l])?te.extend(a[l],s[l]):!te.isObject(a[l])&&te.isObject(s[l])?(a[l]={},te.extend(a[l],s[l])):a[l]=s[l])}}return a}},ae=(s=f.createElement("div"),{touch:ee.Modernizr&&!0===ee.Modernizr.touch||!!(0<ee.navigator.maxTouchPoints||"ontouchstart"in ee||ee.DocumentTouch&&f instanceof ee.DocumentTouch),pointerEvents:!!(ee.navigator.pointerEnabled||ee.PointerEvent||"maxTouchPoints"in ee.navigator&&0<ee.navigator.maxTouchPoints),prefixedPointerEvents:!!ee.navigator.msPointerEnabled,transition:(i=s.style,"transition"in i||"webkitTransition"in i||"MozTransition"in i),transforms3d:ee.Modernizr&&!0===ee.Modernizr.csstransforms3d||(a=s.style,"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a),flexbox:function(){for(var e=s.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in ee||"WebkitMutationObserver"in ee,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});ee.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in ee}),ie={isIE:!!ee.navigator.userAgent.match(/Trident/g)||!!ee.navigator.userAgent.match(/MSIE/g),isEdge:!!ee.navigator.userAgent.match(/Edge/g),isSafari:(n=ee.navigator.userAgent.toLowerCase(),0<=n.indexOf("safari")&&n.indexOf("chrome")<0&&n.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ee.navigator.userAgent)},o={components:{configurable:!0}};e.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},e.prototype.once=function(a,i,e){var s=this;if("function"!=typeof i)return s;function r(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];i.apply(s,e),s.off(a,r),r.f7proxy&&delete r.f7proxy}return r.f7proxy=i,s.on(a,r,e)},e.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){(e===i||e.f7proxy&&e.f7proxy===i)&&s.eventsListeners[a].splice(t,1)})}),s},e.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&(s="string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),r):(a=e[0].events,i=e[0].data,e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},e.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&te.extend(a,t.params)})},e.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},o.components.set=function(e){this.use&&this.use(e)},e.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+te.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},e.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(e,o);var d={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),te.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=Math.floor(d/t.slidesPerColumn),P=0;P<d;P+=1){T=0;var k=l.eq(P);if(1<t.slidesPerColumn){var z=void 0,$=void 0,I=void 0;if("column"===t.slidesPerColumnFill||"row"===t.slidesPerColumnFill&&1<t.slidesPerGroup){if("column"===t.slidesPerColumnFill)I=P-($=Math.floor(P/S))*S,(M<$||$===M&&I===S-1)&&S<=(I+=1)&&(I=0,$+=1);else{var L=Math.floor(P/t.slidesPerGroup);$=P-(I=Math.floor(P/t.slidesPerView)-L*t.slidesPerColumn)*t.slidesPerView-L*t.slidesPerView}z=$+I*x/S,k.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})}else $=P-(I=Math.floor(P/C))*C;k.css("margin-"+(e.isHorizontal()?"top":"left"),0!==I&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",I)}if("none"!==k.css("display")){if("auto"===t.slidesPerView){var D=ee.getComputedStyle(k[0],null),O=k[0].style.transform,A=k[0].style.webkitTransform;if(O&&(k[0].style.transform="none"),A&&(k[0].style.webkitTransform="none"),t.roundLengths)T=e.isHorizontal()?k.outerWidth(!0):k.outerHeight(!0);else if(e.isHorizontal()){var H=parseFloat(D.getPropertyValue("width")),G=parseFloat(D.getPropertyValue("padding-left")),N=parseFloat(D.getPropertyValue("padding-right")),B=parseFloat(D.getPropertyValue("margin-left")),X=parseFloat(D.getPropertyValue("margin-right")),V=D.getPropertyValue("box-sizing");T=V&&"border-box"===V&&!ie.isIE?H+B+X:H+G+N+B+X}else{var Y=parseFloat(D.getPropertyValue("height")),F=parseFloat(D.getPropertyValue("padding-top")),R=parseFloat(D.getPropertyValue("padding-bottom")),q=parseFloat(D.getPropertyValue("margin-top")),W=parseFloat(D.getPropertyValue("margin-bottom")),j=D.getPropertyValue("box-sizing");T=j&&"border-box"===j&&!ie.isIE?Y+q+W:Y+F+R+q+W}O&&(k[0].style.transform=O),A&&(k[0].style.webkitTransform=A),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[P]&&(e.isHorizontal()?l[P].style.width=T+"px":l[P].style.height=T+"px");l[P]&&(l[P].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==P&&(b=b-i/2-g),0===P&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),ae.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var U=0;U<p.length;U+=1){var K=p[U];t.roundLengths&&(K=Math.floor(K)),p[U]<e.virtualSize+p[0]&&E.push(K)}p=E}if(!t.centeredSlides){E=[];for(var _=0;_<p.length;_+=1){var Z=p[_];t.roundLengths&&(Z=Math.floor(Z)),p[_]<=e.virtualSize-i&&E.push(Z)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var Q=0;if(u.forEach(function(e){Q+=e+(t.spaceBetween?t.spaceBetween:0)}),(Q-=t.spaceBetween)<i){var J=(i-Q)/2;p.forEach(function(e,t){p[t]=e-J}),c.forEach(function(e,t){c[t]=e+J})}}te.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size-1||1<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=I(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;n=0==i?r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,1<=s),te.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);te.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),(a.initialized||a.runCallbacksOnInit)&&a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=I(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(I(i).attr("data-swiper-slide-index"),10):t.clickedIndex=I(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=te.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(ae.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0==d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var c={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n=n||(r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r=r||(s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var u={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&ae.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),te.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),te.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var h={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=I(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=I(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(I(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(I(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();if(i<r)e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!=p&&t.setTranslate((d?-t.translate:t.translate)-p);else if("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r){e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!=p&&t.setTranslate((d?-t.translate:t.translate)-p)}t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),a.removeAttr("data-swiper-slide-index")}};var v={setGrabCursor:function(e){if(!(ae.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){ae.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var m={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&ae.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&ae.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&ae.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&ae.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},g=function(){var e=ee.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:ee.cordova||ee.phonegap,phonegap:ee.cordova||ee.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=ee.devicePixelRatio||1,t}();function b(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var w={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},y={update:d,translate:p,transition:c,slide:u,loop:h,grabCursor:v,manipulation:m,events:{attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&I(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||I(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=ee.screen.width-d)){if(te.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=te.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;I(r.target).is(a.formElements)&&(p=!1),f.activeElement&&I(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(te.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=te.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&I(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d=s.currentX-s.startX,p=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(d,2)+Math.pow(p,2))<t.params.threshold)){var c;if(void 0===a.isScrolling)t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=d*d+p*p&&(c=180*Math.atan2(Math.abs(p),Math.abs(d))/Math.PI,a.isScrolling=t.isHorizontal()?c>i.touchAngle:90-c>i.touchAngle);if(a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?d:p;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:te.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=te.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=te.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=te.now(),te.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<te.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,P=t.slidesSizesGrid[0],k=0;k<o.length;k+=i.slidesPerGroup)void 0!==o[k+i.slidesPerGroup]?p>=o[k]&&p<o[k+i.slidesPerGroup]&&(P=o[(M=k)+i.slidesPerGroup]-o[k]):p>=o[k]&&(M=k,P=o[o.length-1]-o[o.length-2]);var z=(p-o[M])/P;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(z>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(z>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(ae.touch||!ae.pointerEvents&&!ae.prefixedPointerEvents){if(ae.touch){var o=!("touchstart"!==a.start||!ae.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,ae.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!ae.touch&&g.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(ae.touch||!ae.pointerEvents&&!ae.prefixedPointerEvents){if(ae.touch){var o=!("onTouchStart"!==a.start||!ae.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!g.ios&&!g.android||t.simulateTouch&&!ae.touch&&g.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(g.ios||g.android?"resize orientationchange observerUpdate":"resize observerUpdate",b)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=l.direction&&l.direction!==s.direction,p=s.loop&&(l.slidesPerView!==s.slidesPerView||d);d&&a&&e.changeDirection(),te.extend(e.params,l),te.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,p&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=ee.innerWidth&&(t=s):s>=ee.innerWidth&&!t&&(t=s)}return t||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push("initialized"),s.push(a.direction),a.freeMode&&s.push("free-mode"),ae.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),g.android&&s.push("android"),g.ios&&s.push("ios"),(ie.isIE||ie.isEdge)&&(ae.pointerEvents||ae.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new ee.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},x={},T=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];s=(s=1===a.length&&a[0].constructor&&a[0].constructor===Object?a[0]:(t=(e=a)[0],e[1]))||{},s=te.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(y).forEach(function(t){Object.keys(y[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=y[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=te.extend({},w);r.useModulesParams(n),r.params=te.extend({},n,x,s),r.originalParams=te.extend({},r.params),r.passedParams=te.extend({},s);var o=(r.$=I)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=te.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return te.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:I(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],ae.pointerEvents?p=["pointerdown","pointermove","pointerup"]:ae.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},ae.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:te.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.changeDirection=function(a,e){void 0===e&&(e=!0);var t=this,i=t.params.direction;return(a=a||("horizontal"===i?"vertical":"horizontal"))===i||"horizontal"!==a&&"vertical"!==a||(t.$el.removeClass(""+t.params.containerModifierClass+i+" wp8-"+i).addClass(""+t.params.containerModifierClass+a),(ie.isIE||ie.isEdge)&&(ae.pointerEvents||ae.prefixedPointerEvents)&&t.$el.addClass(t.params.containerModifierClass+"wp8-"+a),t.params.direction=a,t.slides.each(function(e,t){"vertical"===a?t.style.width="":t.style.height=""}),t.emit("changeDirection"),e&&t.update()),t},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),te.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){te.extend(x,e)},e.extendedDefaults.get=function(){return x},e.defaults.get=function(){return w},e.Class.get=function(){return u},e.$.get=function(){return I},Object.defineProperties(h,e),h}(e),E={name:"device",proto:{device:g},static:{device:g}},S={name:"support",proto:{support:ae},static:{support:ae}},C={name:"browser",proto:{browser:ie},static:{browser:ie}},M={name:"resize",create:function(){var e=this;te.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){ee.addEventListener("resize",this.resize.resizeHandler),ee.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){ee.removeEventListener("resize",this.resize.resizeHandler),ee.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},P={func:ee.MutationObserver||ee.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new P.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};ee.requestAnimationFrame?ee.requestAnimationFrame(t):ee.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(ae.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},k={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){te.extend(this,{observer:{init:P.init.bind(this),attach:P.attach.bind(this),destroy:P.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},z={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",b=r?(g=Math.floor(i/2)+s+o,Math.floor(i/2)+s+l):(g=i+(s-1)+o,s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(te.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var P=0;P<u.length;P+=1)y<=P&&P<=x&&(void 0===c||e?C.push(P):(c<P&&C.push(P),P<p&&S.push(P)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?I(i.renderSlide.call(a,e,t)):I('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this,a=t.activeIndex,i=a+1,s=1;if(Array.isArray(e)){for(var r=0;r<e.length;r+=1)e[r]&&t.virtual.slides.unshift(e[r]);i=a+e.length,s=e.length}else t.virtual.slides.unshift(e);if(t.params.virtual.cache){var n=t.virtual.cache,o={};Object.keys(n).forEach(function(e){o[parseInt(e,10)+s]=n[e]}),t.virtual.cache=o}t.virtual.update(!0),t.slideTo(i,0)},removeSlide:function(e){var t=this;if(null!=e){var a=t.activeIndex;if(Array.isArray(e))for(var i=e.length-1;0<=i;i-=1)t.virtual.slides.splice(e[i],1),t.params.virtual.cache&&delete t.virtual.cache[e[i]],e[i]<a&&(a-=1),a=Math.max(a,0);else t.virtual.slides.splice(e,1),t.params.virtual.cache&&delete t.virtual.cache[e],e<a&&(a-=1),a=Math.max(a,0);t.virtual.update(!0),t.slideTo(a,0)}},removeAllSlides:function(){var e=this;e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),e.virtual.update(!0),e.slideTo(0,0)}},$={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;te.extend(e,{virtual:{update:z.update.bind(e),appendSlide:z.appendSlide.bind(e),prependSlide:z.prependSlide.bind(e),removeSlide:z.removeSlide.bind(e),removeAllSlides:z.removeAllSlides.bind(e),renderSlide:z.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};te.extend(e.params,t),te.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},L={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s||34===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s||33===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(33===s||34===s||37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=ee.innerWidth,o=ee.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(33!==s&&34!==s&&37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(34!==s&&39!==s||a)&&(33!==s&&37!==s||!a)||t.slideNext(),(33!==s&&37!==s||a)&&(34!==s&&39!==s||!a)||t.slidePrev()):(33!==s&&34!==s&&38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),34!==s&&40!==s||t.slideNext(),33!==s&&38!==s||t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(I(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(I(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},D={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){te.extend(this,{keyboard:{enabled:!1,enable:L.enable.bind(this),disable:L.disable.bind(this),handle:L.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var O={lastScrollTime:te.now(),event:-1<ee.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=O.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=te.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<te.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new ee.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!O.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(O.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!O.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=I(e.params.mousewheel.eventsTarged)),t.off(O.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},A={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=I(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=I(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),te.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},H={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=I(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=I(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=I(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),te.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},G={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(ae.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(ae.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbar.hide&&(i[0].style.opacity=0),te.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize,l=i.dragStartPos;t=(i.getPointerPosition(e)-r.offset()[a.isHorizontal()?"left":"top"]-(null!==l?l:n/2))/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var d=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(d),a.setTranslate(d),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,t.scrollbar.dragStartPos=e.target===n[0]||e.target===n?i.getPointerPosition(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=te.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};ae.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!ae.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};ae.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=I(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=I('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),te.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},N={setTransform:function(e,t){var a=this.rtl,i=I(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),I(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e,t){var a=I(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},B={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!ae.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=B.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=I(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!ae.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=B.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=ae.gestures?e.scale*a.currentScale:i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!ae.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!g.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(g.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=te.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=te.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;y.$slideEl||(y.$slideEl=g.clickedSlide?I(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length&&(y.$slideEl.addClass(""+w.zoomedSlideClass),a=void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,"touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?I(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!ae.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};ae.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!ae.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};ae.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},X={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=I(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?I(e).attr("data-swiper-slide-index"):I(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?I(t).attr("data-swiper-slide-index"):I(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},V={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new V.LinearSpline(t.slidesGrid,e.slidesGrid):new V.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof T&&n(r[o]);else r instanceof T&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&te.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof T&&r(s[a]);else s instanceof T&&e!==s&&r(s)}},Y={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=I(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=I(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},F={init:function(){var e=this;if(e.params.history){if(!ee.history||!ee.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=F.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||ee.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||ee.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=F.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=ee.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=F.slugify(a.attr("data-history"));ee.location.pathname.includes(e)||(i=e+"/"+i);var s=ee.history.state;s&&s.value===i||(this.params.history.replaceState?ee.history.replaceState({value:i},null,i):ee.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(F.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},R={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&ee.history&&ee.history.replaceState)ee.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&I(ee).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&I(ee).off("hashchange",this.hashNavigation.onHashCange)}},q={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=te.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},W={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},j={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=I('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=I('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,k=d.shadowScale/M,z=d.shadowOffset;e.transform("scale3d("+P+", 1, "+k+") translate3d(0px, "+(n/2+z)+"px, "+-n/2/k+"px) rotateX(-90deg)")}var $=ie.isSafari||ie.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},U={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=I('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=I('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},K={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=I('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=I('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(ae.pointerEvents||ae.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},_={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,te.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),te.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):te.isObject(t.swiper)&&(e.thumbs.swiper=new a(te.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&I(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(I(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes&&a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop||a.params.virtual)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},Z=[E,S,C,M,k,$,D,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;te.extend(e,{mousewheel:{enabled:!1,enable:O.enable.bind(e),disable:O.disable.bind(e),handle:O.handle.bind(e),handleMouseEnter:O.handleMouseEnter.bind(e),handleMouseLeave:O.handleMouseLeave.bind(e),lastScrollTime:te.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;te.extend(e,{navigation:{init:A.init.bind(e),update:A.update.bind(e),destroy:A.destroy.bind(e),onNextClick:A.onNextClick.bind(e),onPrevClick:A.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,a=this,i=a.navigation,s=i.$nextEl,r=i.$prevEl;!a.params.navigation.hideOnClick||I(e.target).is(r)||I(e.target).is(s)||(s?t=s.hasClass(a.params.navigation.hiddenClass):r&&(t=r.hasClass(a.params.navigation.hiddenClass)),!0===t?a.emit("navigationShow",a):a.emit("navigationHide",a),s&&s.toggleClass(a.params.navigation.hiddenClass),r&&r.toggleClass(a.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;te.extend(e,{pagination:{init:H.init.bind(e),render:H.render.bind(e),update:H.update.bind(e),destroy:H.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!I(e.target).hasClass(t.params.pagination.bulletClass)&&(!0===t.pagination.$el.hasClass(t.params.pagination.hiddenClass)?t.emit("paginationShow",t):t.emit("paginationHide",t),t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;te.extend(e,{scrollbar:{init:G.init.bind(e),destroy:G.destroy.bind(e),updateSize:G.updateSize.bind(e),setTranslate:G.setTranslate.bind(e),setTransition:G.setTransition.bind(e),enableDraggable:G.enableDraggable.bind(e),disableDraggable:G.disableDraggable.bind(e),setDragPosition:G.setDragPosition.bind(e),getPointerPosition:G.getPointerPosition.bind(e),onDragStart:G.onDragStart.bind(e),onDragMove:G.onDragMove.bind(e),onDragEnd:G.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){te.extend(this,{parallax:{setTransform:N.setTransform.bind(this),setTranslate:N.setTranslate.bind(this),setTransition:N.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var i=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){t[e]=B[e].bind(i)}),te.extend(i,{zoom:t});var s=1;Object.defineProperty(i.zoom,"scale",{get:function(){return s},set:function(e){if(s!==e){var t=i.zoom.gesture.$imageEl?i.zoom.gesture.$imageEl[0]:void 0,a=i.zoom.gesture.$slideEl?i.zoom.gesture.$slideEl[0]:void 0;i.emit("zoomChange",e,t,a)}s=e}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){te.extend(this,{lazy:{initialImageLoaded:!1,load:X.load.bind(this),loadInSlide:X.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.loadOnTransitionStart||e.lazy.initialImageLoaded)||e.lazy.load())},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;te.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:V.getInterpolateFunction.bind(e),setTranslate:V.setTranslate.bind(e),setTransition:V.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;te.extend(t,{a11y:{liveRegion:I('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(Y).forEach(function(e){t.a11y[e]=Y[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;te.extend(e,{history:{init:F.init.bind(e),setHistory:F.setHistory.bind(e),setHistoryPopState:F.setHistoryPopState.bind(e),scrollToSlide:F.scrollToSlide.bind(e),destroy:F.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;te.extend(e,{hashNavigation:{initialized:!1,init:R.init.bind(e),destroy:R.destroy.bind(e),setHash:R.setHash.bind(e),onHashCange:R.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;te.extend(t,{autoplay:{running:!1,paused:!1,run:q.run.bind(t),start:q.start.bind(t),stop:q.stop.bind(t),pause:q.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){te.extend(this,{fadeEffect:{setTranslate:W.setTranslate.bind(this),setTransition:W.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){te.extend(this,{cubeEffect:{setTranslate:j.setTranslate.bind(this),setTransition:j.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){te.extend(this,{flipEffect:{setTranslate:U.setTranslate.bind(this),setTransition:U.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};te.extend(e.params,t),te.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){te.extend(this,{coverflowEffect:{setTranslate:K.setTranslate.bind(this),setTransition:K.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){te.extend(this,{thumbs:{swiper:null,init:_.init.bind(this),update:_.update.bind(this),onThumbClick:_.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===T.use&&(T.use=T.Class.use,T.installModule=T.Class.installModule),T.use(Z),T});
//# sourceMappingURL=swiper.min.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["a"] = ajaxLoadMore;
function ajaxLoadMore(btnSelector, listSelector, params) {
  // attach handler to load more button
  $(btnSelector).click(function(e) {
    e.preventDefault();
    var post_type = false;

    if ($(this).hasClass('disabled')) { return; }

    var button = $(this),
      goTopButton = $('.component-btn-load-more .btn-go-to-top'),
      defaultText = $(this).html(),
      data = {
        action: 'loadmore',
        query: params.posts,
        page: params.current_page,
        item_template: params.item_template,
      };

    try {
      var postQuery = $.parseJSON(params.posts);
      post_type = postQuery.post_type[0];
    } catch (err) {
      // console.error(err);
    }

    $.ajax({
      url: params.ajaxurl,
      data: data,
      type: 'POST',
      beforeSend: function() {
        button.text('Loading...');
      },
      success: function(data) {
        if (data) {
          button.text(defaultText);
          params.current_page++;

          $(listSelector).append(data);

          if (params.current_page == params.max_page) {
            button.hide();
            goTopButton.show();
          }

          if (post_type == 'news') {
            button.hide();
            goTopButton.show();
          }
        } else {
          button.hide();
          goTopButton.show();
        }
      },
      complete: function() {
        // Reinit macy grid on news template
        if (window.macyGrid) {
          window.macyGrid.recalculate();

          setTimeout(function () {
            window.macyGrid.reInit();
          }, 1000);
        }
      },
    });
  });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["a"] = (finallyConstructor);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function allSettled(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(
        new TypeError(
          typeof arr +
            ' ' +
            arr +
            ' is not iterable(cannot read property Symbol(Symbol.iterator))'
        )
      );
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(
            val,
            function(val) {
              res(i, val);
            },
            function(e) {
              args[i] = { status: 'rejected', reason: e };
              if (--remaining === 0) {
                resolve(args);
              }
            }
          );
          return;
        }
      }
      args[i] = { status: 'fulfilled', value: val };
      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (allSettled);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equalizeHeight__ = __webpack_require__(29);


var equalizeElementHeight = function (el, group) {
	if ( group === void 0 ) group = 2;

	return $(el).equalizeHeight(group);
};

/* harmony default export */ __webpack_exports__["a"] = (equalizeElementHeight);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.section-side-contact').length) {
    return;
  }
  var contheight = $( '.section-side-contact__form' ).outerWidth() + 60;       
  $( '.section-side-contact' ).css( 'right', '-' + contheight + 'px' );
  // $( '.section-side-contact' ).css( 'visibility', 'visible' );

  $('.section-side-contact').addClass('open-form');
  $('.section-side-contact').addClass('bounce-in-up');

  var triggerPoint = $('.b-image-title-text').offset().top - $('.header').outerHeight() - 400;
  var contentHeight = $('.two-columns').offset().top - $('.header').outerHeight() - 400;
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop >= triggerPoint && scrollTop < contentHeight) {
      $('.section-side-contact').css( 'visibility', 'visible' );
    } else {
      $('.section-side-contact').css( 'visibility', 'hidden' );
    }
    
  //   console.log('scroll - ' + scrollTop);
  // console.log('triggerPoint - ' + triggerPoint);
  // console.log('contentHeight - ' + contentHeight);
  });

  
                    
  $( '.section-side-contact__title, .section-side-contact-close' ).click(function() {
      if($('.section-side-contact').hasClass('open'))
      {
          $('.section-side-contact').removeClass('open');
          $( '.section-side-contact' ).css( 'right', '-'+contheight+'px' );
          $( '.section-side-contact-close').hide();
      }
      else {
          $('.section-side-contact').addClass('open');
          $( '.section-side-contact' ).css( 'right', 0 );    
          $( '.section-side-contact-close').show();
      }
                      
  });
  
  
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(80);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_promise_polyfill_src_polyfill__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_home__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_blog__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_careers__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_resources__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_news__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_gated_assets__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_search__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components__ = __webpack_require__(72);
// import external dependencies



// Import everything from autoload


// import local dependencies












/** Populate Router instance with DOM routes */
var routes = new __WEBPACK_IMPORTED_MODULE_2__util_Router__["a" /* default */]({
  // All pages
  common: __WEBPACK_IMPORTED_MODULE_3__routes_common__["a" /* default */],
  // Home page
  home: __WEBPACK_IMPORTED_MODULE_4__routes_home__["a" /* default */],
  // blog page
  blog: __WEBPACK_IMPORTED_MODULE_5__routes_blog__["a" /* default */],
  // careers page
  careers: __WEBPACK_IMPORTED_MODULE_6__routes_careers__["a" /* default */],
  // news and resources listing page
  resources: __WEBPACK_IMPORTED_MODULE_7__routes_resources__["a" /* default */],
  news: __WEBPACK_IMPORTED_MODULE_8__routes_news__["a" /* default */],
  // gated assets listing page
  gatedAssets: __WEBPACK_IMPORTED_MODULE_9__routes_gated_assets__["a" /* default */],
  // search page
  search: __WEBPACK_IMPORTED_MODULE_10__routes_search__["a" /* default */],
});

// Load Events
jQuery(document).ready(function () { return routes.loadEvents(); });

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__finally__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allSettled__ = __webpack_require__(5);




/** @suppress {undefinedVars} */
var globalNS = (function() {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
})();

// Expose the polyfill if Promise is undefined or set to a
// non-function value. The latter can be due to a named HTMLElement
// being exposed by browsers for legacy reasons.
// https://github.com/taylorhakes/promise-polyfill/issues/114
if (typeof globalNS['Promise'] !== 'function') {
  globalNS['Promise'] = __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */];
} else {
  if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_1__finally__["a" /* default */];
  } 
  if (!globalNS.Promise.allSettled) {
    globalNS.Promise.allSettled = __WEBPACK_IMPORTED_MODULE_2__allSettled__["a" /* default */];
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__finally__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allSettled__ = __webpack_require__(5);



// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;
// @ts-ignore
var setImmediateFunc = typeof setImmediate !== 'undefined' ? setImmediate : null;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = __WEBPACK_IMPORTED_MODULE_0__finally__["a" /* default */];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.allSettled = __WEBPACK_IMPORTED_MODULE_1__allSettled__["a" /* default */];

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediateFunc === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediateFunc(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(13);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(14)))

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(16);


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */
var Router = function Router(routes) {
  this.routes = routes;
};

/**
 * Fire Router events
 * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
 * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
 * @param {string} [arg] Any custom argument to be passed to the event.
 */
Router.prototype.fire = function fire (route, event, arg) {
    if ( event === void 0 ) event = 'init';

  document.dispatchEvent(new CustomEvent('routed', {
    bubbles: true,
    detail: {
      route: route,
      fn: event,
    },
  }));

  var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';
  if (fire) {
    this.routes[route][event](arg);
  }
};

/**
 * Automatically load and fire Router events
 *
 * Events are fired in the following order:
 ** common init
 ** page-specific init
 ** page-specific finalize
 ** common finalize
 */
Router.prototype.loadEvents = function loadEvents () {
    var this$1 = this;

  // Fire common init JS
  this.fire('common');

  // Fire page-specific init JS, and then finalize JS
  document.body.className
    .toLowerCase()
    .replace(/-/g, '_')
    .split(/\s+/)
    .map(__WEBPACK_IMPORTED_MODULE_0__camelCase__["a" /* default */])
    .forEach(function (className) {
      this$1.fire(className);
      this$1.fire(className, 'finalize');
    });

  // Fire common finalize JS
  this.fire('common', 'finalize');
};

/* harmony default export */ __webpack_exports__["a"] = (Router);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["a"] = (function (str) { return ("" + (str.charAt(0).toLowerCase()) + (str.replace(/[\W_]/g, '|').split('|')
  .map(function (part) { return ("" + (part.charAt(0).toUpperCase()) + (part.slice(1))); })
  .join('')
  .slice(1))); });;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isIE11__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_url__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_header__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_footer__ = __webpack_require__(22);





/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isIE11__["a" /* default */])()) {
      $('body').addClass('msie');
    }
    Object(__WEBPACK_IMPORTED_MODULE_2__layout_header__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_3__layout_footer__["a" /* default */])();

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
      if (t < 1) { return c/2*t*t + b; }
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
  },
  finalize: function finalize() {

    // JavaScript to be fired on all pages, after page specific JS is fired
    function resizeIframe(iframe) {
      iframe.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }

    console.log(resizeIframe)

    // stick on scroll
    $(window).on('scroll', function(){
      if ($(window).scrollTop() > 0) {
        $('body').addClass('has-fixed-header');
      } else {
        $('body').removeClass('has-fixed-header');
      }
    });

    // UTM Links
    $(function(){

      // Save data
      try{
        var utm_source    = __WEBPACK_IMPORTED_MODULE_1__util_url__["a" /* default */].getUrlParameter('utm_source')   ||  ''
        var utm_medium    = __WEBPACK_IMPORTED_MODULE_1__util_url__["a" /* default */].getUrlParameter('utm_medium')   ||  ''
        var utm_campaign  = __WEBPACK_IMPORTED_MODULE_1__util_url__["a" /* default */].getUrlParameter('utm_campaign') ||  ''

        if( utm_source || utm_medium || utm_campaign ) {

          // Remove Old
          window.localStorage.removeItem('binah_utm_source');
          window.localStorage.removeItem('binah_utm_medium');
          window.localStorage.removeItem('binah_utm_campaign');

          // Save New Data
          window.localStorage.setItem('binah_utm_source', utm_source);
          window.localStorage.setItem('binah_utm_medium', utm_medium);
          window.localStorage.setItem('binah_utm_campaign', utm_campaign);
        }
      }
      catch(err){
        // console.error(err);
      }

      // Fill inputs
      try {
        if( $('form.contact-salesforce-form').length > 0 ) {
          var get_utm_source   = window.localStorage.getItem('binah_utm_source');
          var get_utm_medium   = window.localStorage.getItem('binah_utm_medium');
          var get_utm_campaign = window.localStorage.getItem('binah_utm_campaign');

          // Set Form Data
          if(get_utm_source)   { $('input[type="hidden"][name="Lead_Referral__c"]').val(get_utm_source); }
          if(get_utm_source)   { $('input[type="hidden"][name="lead_referral"]').val(get_utm_source); }
          if(get_utm_medium)   { $('input[type="hidden"][name="utm_medium"]').val(get_utm_medium); }
          if(get_utm_campaign) { $('input[type="hidden"][name="utm_campaign"]').val(get_utm_campaign); }
          $('#00N1t00000KznAN').val(get_utm_campaign);
          $('#00N1t00000KzYau').val(get_utm_source);
          $('#00N1t00000KznAI').val(get_utm_medium);
        }
      }
      catch(err) {
        // console.error(err);
      }

      // Clear
      try {
        $(document).on('submit', 'form.contact-salesforce-form', function(){
          window.localStorage.removeItem('binah_utm_source');
          window.localStorage.removeItem('binah_utm_medium');
          window.localStorage.removeItem('binah_utm_campaign');
        });
      }
      catch(err) {
        // console.error(err);
      }

      // Go to top
      $(function () {

        function scrollTo(to, duration) {
          var element = document.scrollingElement;
          var start = (element && element.scrollTop) || window.pageYOffset,
              change = to - start,
              increment = 20;
          var currentTime = 0;

          var animateScroll = function(){
              currentTime += increment;
              var val = Math.easeInOutQuad(currentTime, start, change, duration);
              window.scrollTo(0, val);
              if(currentTime < duration) {
                  window.setTimeout(animateScroll, increment);
              }
          };
          animateScroll();
        }

        $('.btn-go-to-top').click(function(e){
          e.preventDefault();
          scrollTo(0, 800);
        });

      });
    });
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isIE11;
function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

  updateQueryStringParameter: function updateQueryStringParameter(uri, key, value) {

    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';

    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      return uri + separator + key + '=' + value;
    }
  },

  getUrlParameter: function getUrlParameter(name) {

    // name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  },

  extractHostname: function extractHostname(url) {

    var hostname;

    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
  },

});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (immutable) */ __webpack_exports__["a"] = header;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isIPad__ = __webpack_require__(21);


function header() {
  var $ = jQuery;
  var windowWidth = $(window).width();

  $('.mobile-nav').on('click', function() {
    $('.mobile-nav').removeClass('active');
    $(this).addClass('active');

    var selected = $(this).data('link');

    $('.nav-triangle-line').removeClass(
      'home technology industry company blog excellence'
    );
    $('.nav-triangle-line').addClass(selected);

    if (selected === 'industry') {
      $('.nav-item').removeClass('hide');
    } else {
      $('.nav-item').addClass('hide');
    }
  });

  $('#nav-open').on('click', function() {
    $('.mobile-menu').addClass('open');
    $('html').addClass('menu-open');
  });

  $('#nav-close').on('click', function() {
    $('.mobile-menu').removeClass('open');
    $('html').removeClass('menu-open');
  });

  $('.nav-primary-mobile .menu-item').on('click', function() {
    $('.nav-primary-mobile .menu-item').removeClass('hover');
    $(this).addClass('hover');
    $('.nav-triangle-line').css('top', $(this).position().top - 8 + 'px');
  });

  window.onresize = function() {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isIPad__["a" /* default */])() && $(window).width() != windowWidth) {
      window.location.reload();
    }
  };

  $('*')
    .on('touchstart', function() {
      $(this).trigger('hover');
    })
    .on('touchend', function() {
      $(this).trigger('hover');
    });

  var $navMobileCurrentItem = $(
    '.nav-primary-mobile .menu-item.current-menu-item'
  );

  if ($navMobileCurrentItem.length) {
    setTimeout(function () {
      $('.nav-triangle-line').css(
        'top',
        $navMobileCurrentItem.position().top - 8 + 'px'
      );
      $navMobileCurrentItem.addClass('hover');
    }, 100);
  }

  // Fix menu underline
  var current_item = $(
    '.nav-primary .mega-current-menu-parent.pink>.mega-menu-link'
  ).text();

  if (current_item) {
    $('#mega-menu-primary_navigation>.mega-current-menu-ancestor').removeClass(
      'mega-current-menu-ancestor'
    );
    $('#mega-menu-primary_navigation>.mega-menu-item').each(function() {
      if ($(this).find('>.mega-menu-link').text() == current_item) {
        $(this).addClass('mega-current-menu-ancestor-custom');
      }
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isIPad;
function isIPad() {
  return navigator.userAgent.match(/iPad/i) != null;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["a"] = footer;
function footer() {
  $('.social-logo').hover(
    function() {
      $(this).attr( 'src', $(this).data('hover') );
    },
    function() {
      $(this).attr( 'src', $(this).data('orig') );
    }
  )
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on the home page
  },
  finalize: function finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__["a" /* default */])('.btn-load-more-posts', '.posts-listing', global.binah);
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_anchorScroll__ = __webpack_require__(26);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_anchorScroll__["a" /* default */])('.component-page-hero .btn');
  },
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["a"] = anchorSmoothScroll;
function anchorSmoothScroll(selector) {
  // Select all links with hashes
  $(selector)
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top,
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_list_item_resource__ = __webpack_require__(28);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    Object(__WEBPACK_IMPORTED_MODULE_1__components_list_item_resource__["a" /* default */])()
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__["a" /* default */])('.btn-load-more-posts', '.posts-listing', global.binah_data_resources);
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_equalizeElementHeight__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_equalizeElementHeightResized__ = __webpack_require__(31);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  $(window).on('load', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_equalizeElementHeight__["a" /* default */])('.component-list-item-resource__title', 2)
    Object(__WEBPACK_IMPORTED_MODULE_1__util_equalizeElementHeightResized__["a" /* default */])('.component-list-item-resource__title', 767, 2)
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks__ = __webpack_require__(30);


/**
 * Equalize elements
 * @param {Number} group
 * @return {height}
 */

$.fn.equalizeHeight = function(group) {
  var this$1 = this;

  var itemHeight;

  this.css('height', '');

  // If there shouldn't be grouping
  if (group === 1) {
    var maxHeight;

    for (var i = 0; i < this.length; i++) {
      itemHeight = $(this$1[i]).height();
      if (maxHeight < itemHeight) {
        maxHeight = itemHeight;
      }
    }

    return this.height(maxHeight);
  }

  // If grouping is enabled
  var list = Object(__WEBPACK_IMPORTED_MODULE_0__chunks__["a" /* default */])(Array.from(this), group);

  list.forEach(function (item) {
    var maxHeight = 0;

    for (var i = 0; i < item.length; i++) {
      itemHeight = $(item[i]).height();

      if (maxHeight < itemHeight) {
        maxHeight = itemHeight;
      }
    }

    for (var i$1 = 0; i$1 < item.length; i$1++) {
      $(item[i$1]).height(maxHeight);
    }

    return this$1;
  });
};

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chunk;
/**
 * Split elements into chunks
 * @param {Array} arr
 * @param {Number} len
 */

function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_debounce__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalizeElementHeight__ = __webpack_require__(6);



var equalizeElementHeightResized = function (el, minBreakpoint, group) {
  if ( minBreakpoint === void 0 ) minBreakpoint = 992;
  if ( group === void 0 ) group = 2;

  $(window).on('resize', function () {
    if ($(window).width() >= minBreakpoint) {
      Object(__WEBPACK_IMPORTED_MODULE_0__util_debounce__["a" /* default */])(function () {
        $(el).height('auto');
      }, 500);

      Object(__WEBPACK_IMPORTED_MODULE_0__util_debounce__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__equalizeElementHeight__["a" /* default */])(el, group), 900);
    } else {
      $(el).height('auto');
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (equalizeElementHeightResized);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var this$1 = this;
/**
 * Debounce
 * @param {Function} func
 * @param {Number} delay
 */

var debounce = function (func, delay) {
  var inDebounce;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var that = this$1;

    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () { return func.apply(that, args); }, delay);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (debounce);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_news_listing__ = __webpack_require__(34);



/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    Object(__WEBPACK_IMPORTED_MODULE_1__layout_news_listing__["a" /* default */])();
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__["a" /* default */])(
      '.btn-load-more-posts',
      '.posts-listing',
      window.binah_data_news_n_resources
    );
  },
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_macy__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_macy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_macy__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  $(window).on('load', function () {
    var grid = __WEBPACK_IMPORTED_MODULE_0_macy___default()({
      container: '.posts-listing--alt',
      columns: 3,
      trueOrder: true,
      margin: {
        x: 30,
        y: 34,
      },
      breakAt: {
        1160: {
          columns: 2,
        },
        767: {
          columns: 1,
          margin: {
            x: 0,
            y: 25,
          },
        },
      },
    });

    grid.on(grid.constants.EVENT_IMAGE_COMPLETE, function(ctx) {
      $(ctx.instance.container).addClass('posts-listing--grid');
    });

    window.macyGrid = grid;
  });
});;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Macy=n()}(this,function(){"use strict";function t(t,n){var e=void 0;return function(){e&&clearTimeout(e),e=setTimeout(t,n)}}function n(t,n){for(var e=t.length,r=e,o=[];e--;)o.push(n(t[r-e-1]));return o}function e(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(window.Promise)return A(t,n,e);t.recalculate(!0,!0)}function r(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=0;s<r.length;s++){var a=parseInt(r[s],10);o>=a&&(i=n.breakAt[a],O(i,e))}return e}function o(t){for(var n=t.options,e=t.responsiveOptions,r=t.keys,o=t.docWidth,i=void 0,s=r.length-1;s>=0;s--){var a=parseInt(r[s],10);o<=a&&(i=n.breakAt[a],O(i,e))}return e}function i(t){var n=t.useContainerForBreakpoints?t.container.clientWidth:window.innerWidth,e={columns:t.columns};b(t.margin)?e.margin={x:t.margin.x,y:t.margin.y}:e.margin={x:t.margin,y:t.margin};var i=Object.keys(t.breakAt);return t.mobileFirst?r({options:t,responsiveOptions:e,keys:i,docWidth:n}):o({options:t,responsiveOptions:e,keys:i,docWidth:n})}function s(t){return i(t).columns}function a(t){return i(t).margin}function c(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=s(t),r=a(t).x,o=100/e;if(!n)return o;if(1===e)return"100%";var i="px";if("string"==typeof r){var c=parseFloat(r);i=r.replace(c,""),r=c}return r=(e-1)*r/e,"%"===i?o-r+"%":"calc("+o+"% - "+r+i+")"}function u(t,n){var e=s(t.options),r=0,o=void 0,i=void 0;if(1===++n)return 0;i=a(t.options).x;var u="px";if("string"==typeof i){var l=parseFloat(i,10);u=i.replace(l,""),i=l}return o=(i-(e-1)*i/e)*(n-1),r+=c(t.options,!1)*(n-1),"%"===u?r+o+"%":"calc("+r+"% + "+o+u+")"}function l(t){var n=0,e=t.container,r=t.rows;v(r,function(t){n=t>n?t:n}),e.style.height=n+"px"}function p(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){var e=0,o=parseInt(n.offsetHeight,10);isNaN(o)||(t.rows.forEach(function(n,r){n<t.rows[e]&&(e=r)}),n.style.position="absolute",n.style.top=t.rows[e]+"px",n.style.left=""+t.cols[e],t.rows[e]+=isNaN(o)?0:o+i,r&&(n.dataset.macyComplete=1))}),r&&(t.tmpRows=null),l(t)}function f(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=s(t.options),i=a(t.options).y;M(t,o,e),v(n,function(n){t.lastcol===o&&(t.lastcol=0);var e=C(n,"height");e=parseInt(n.offsetHeight,10),isNaN(e)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(e)?0:e+i,t.lastcol+=1,r&&(n.dataset.macyComplete=1))}),r&&(t.tmpRows=null),l(t)}var h=function t(n,e){if(!(this instanceof t))return new t(n,e);if(n&&n.nodeName)return n;if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),e)return this.byCss(n,e);for(var r in this.selectors)if(e=r.split("/"),new RegExp(e[1],e[2]).test(n))return this.selectors[r](n);return this.byCss(n)};h.prototype.byCss=function(t,n){return(n||document).querySelectorAll(t)},h.prototype.selectors={},h.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},h.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},h.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var v=function(t,n){for(var e=t.length,r=e;e--;)n(t[r-e-1])},m=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t)};m.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run()}},m.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!n&&(Array.isArray(n)?v(n,function(n){return t.add(n)}):(this.events.push(n),void this.run()))},m.prototype.clear=function(){this.events=[]};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t};y.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},y.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return!1;var e=new d(this.instance,n);v(this.events[t],function(t){return t(e)})};var g=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){if(n.complete)return g(n)?t(n):e(n);n.addEventListener("load",function(){return g(n)?t(n):e(n)}),n.addEventListener("error",function(){return e(n)})}).then(function(n){e&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n})}).catch(function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})})},w=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(e,function(n){return E(t,n,r)})},A=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Promise.all(w(t,n,e)).then(function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE)})},I=function(n){return t(function(){n.emit(n.constants.EVENT_RESIZE),n.queue.add(function(){return n.recalculate(!0,!0)})},100)},N=function(t){if(t.container=h(t.options.container),t.container instanceof h||!t.container)return!!t.options.debug&&console.error("Error: Container not found");t.container.length&&(t.container=t.container[0]),t.options.container=t.container,t.container.style.position="relative"},T=function(t){t.queue=new m,t.events=new y(t),t.rows=[],t.resizer=I(t)},L=function(t){var n=h("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,function(){return t.recalculate(!1,!1)}),t.on(t.constants.EVENT_IMAGE_COMPLETE,function(){return t.recalculate(!0,!0)}),t.options.useOwnImageLoader||e(t,n,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED)},_=function(t){N(t),T(t),L(t)},b=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},O=function(t,n){b(t)||(n.columns=t),b(t)&&t.columns&&(n.columns=t.columns),b(t)&&t.margin&&!b(t.margin)&&(n.margin={x:t.margin,y:t.margin}),b(t)&&t.margin&&b(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),b(t)&&t.margin&&b(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y)},C=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},M=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(e=!0),e){t.rows=[],t.cols=[],t.lastcol=0;for(var r=n-1;r>=0;r--)t.rows[r]=0,t.cols[r]=u(t,r)}else if(t.tmpRows){t.rows=[];for(var r=n-1;r>=0;r--)t.rows[r]=t.tmpRows[r]}else{t.tmpRows=[];for(var r=n-1;r>=0;r--)t.tmpRows[r]=t.rows[r]}},V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=n?t.container.children:h(':scope > *:not([data-macy-complete="1"])',t.container);r=Array.from(r).filter(function(t){return null!==t.offsetParent});var o=c(t.options);return v(r,function(t){n&&(t.dataset.macyComplete=0),t.style.width=o}),t.options.trueOrder?(f(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED)):(p(t,r,n,e),t.emit(t.constants.EVENT_RECALCULATED))},R=function(){return!!window.Promise},x=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};Array.from||(Array.from=function(t){for(var n=0,e=[];n<t.length;)e.push(t[n++]);return e});var k={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1,cancelLegacy:!1,useContainerForBreakpoints:!1};!function(){try{document.createElement("a").querySelector(":scope *")}catch(t){!function(){function t(t){return function(e){if(e&&n.test(e)){var r=this.getAttribute("id");r||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=e.replace(n,"#"+this.id);var o=t.apply(this,arguments);return null===r?this.removeAttribute("id"):r||(this.id=r),o}return t.apply(this,arguments)}}var n=/:scope\b/gi,e=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return e.apply(this,arguments)};var r=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return r.apply(this,arguments)}}()}}();var q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;if(!(this instanceof t))return new t(n);this.options={},x(this.options,k,n),this.options.cancelLegacy&&!R()||_(this)};return q.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new q(t)},q.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,h("img",this.container),!t)},q.prototype.runOnImageLoad=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=h("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),n&&this.on(this.constants.EVENT_IMAGE_LOAD,t),e(this,r,n)},q.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&this.queue.clear(),this.queue.add(function(){return V(t,n,e)})},q.prototype.remove=function(){window.removeEventListener("resize",this.resizer),v(this.container.children,function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")}),this.container.removeAttribute("style")},q.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},q.prototype.on=function(t,n){this.events.on(t,n)},q.prototype.emit=function(t,n){this.events.emit(t,n)},q.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},q.prototype.constants=q.constants,q});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__["a" /* default */])('.btn-load-more-posts', '.posts-listing', global.binah_data_gated_assets);
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
  },
  finalize: function finalize() {
    Object(__WEBPACK_IMPORTED_MODULE_0__util_ajaxLoadMore__["a" /* default */])('.btn-load-more-posts', '.posts-listing', global.binah);
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_business_oriented__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_competitive_edge__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_careers_slider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_contact__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_contact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__blocks_contact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_how_it_works__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_how_it_works___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__blocks_how_it_works__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_leadership__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_leadership___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__blocks_leadership__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_news__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_results__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_latest_news__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blocks_header_text_images__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blocks_header_text_overlapping_image__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blocks_header_text_overlapping_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__blocks_header_text_overlapping_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks_technology_slider__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_solution__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_solution___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__blocks_solution__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_hero__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_hero___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__blocks_hero__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_tabs_with_content__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_tabs_with_content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__blocks_tabs_with_content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_apply_form__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_apply_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__blocks_apply_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_locations__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_locations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__blocks_locations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blocks_video_with_text__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blocks_video_with_text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__blocks_video_with_text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blocks_powered_binah_slider__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__blocks_timeline__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__blocks_timeline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__blocks_timeline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blocks_faq__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blocks_faq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__blocks_faq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__blocks_latest_news_sharp__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__blocks_image_video_text__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__blocks_image_video_text___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__blocks_image_video_text__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__blocks_testimonials_carousel__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__blocks_logos_slider__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__blocks_anchor_nav__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__blocks_table_text__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__blocks_contact_side__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__blocks_contact_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__blocks_contact_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__blocks_employees_carousel__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__blocks_greenhouse_careers__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__blocks_greenhouse_careers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__blocks_greenhouse_careers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__blocks_tabs_vertical__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__blocks_tabs_vertical___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__blocks_tabs_vertical__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__blocks_science_carousel__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__blocks_how_it_works_new__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__blocks_how_it_works_new___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__blocks_how_it_works_new__);




































/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.oriented').length) {
    return;
  }

  businessOriented($);
});

function businessOriented($) {
  if ($(window).width() <= 800) {
    $('.oriented-list .list-box').addClass('swiper-wrapper');
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.oriented-list', {
      spaceBetween: 10,
      slidesPerView: 1,
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.competitive-edge').length) {
    return;
  }

  competitiveEdge($);
});

function competitiveEdge($) {


  $('.tabs .tab').on('click', function () {
    // make selected active
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-content').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $('.tabs .indicator')[0].style.transform = 'translateX('+ ( 100 * $(this).index()) +'%)';
  });

  if ($(window).width() > 800) {
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.content-container', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if ($(window).width() <= 800) {
    $('.competitive-edge .tab-contents .content-container .info-card').on(
      'click',
      function () {
        $(this).toggleClass('hover');
      }
    )
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


$(window).on('load', function () {
  if (!$('.swiper-careers').length) {
    return;
  }

  careersSlider();

  if ($('.slider-careers.text-hover').length && $(window).width() > 767) {
    careersHover();
  }
});

function careersSlider() {
  if ($('.swiper-careers .swiper-slide').length > 1) {
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.swiper-careers', {
      slidesPerView: 1,
      loop: true,
      updateOnImagesReady: true,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
}

function careersHover() {
  //var titleFontSize = $('.slider-careers .title').css('font-size'),
      //contentFontSize = '20px';

  $('.slider-careers .title').mouseenter(function() {
    $(this).css('transform', 'translate3d(0, 0, 0)');
    $(this).parent().find('.content').css('opacity', 1).css('transform', 'scale(1)').css('height', 'auto');
  });

  $('.slider-careers .content').mouseleave(function() {
    $(this).parent().find('.title').css('transform', 'translate3d(0, 30%, 0)');
    $(this).parent().find('.content').css('opacity', 0).css('transform', 'scale(0)').css('height', '0');
  });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(function() {
  var formContainer = document.querySelector('.contact-container');

  if (formContainer && formContainer.dataset.redirect) {
    document.addEventListener(
      'wpcf7mailsent',
      function() {
        window.location = formContainer.dataset.redirect;
      },
      false
    );
  }

  // Hero Contact
  var heroContact = document.querySelector('.section-hero-contact');

  if (heroContact && heroContact.dataset.redirect) {
    document.addEventListener(
      'wpcf7mailsent',
      function() {
        window.location = heroContact.dataset.redirect;
      },
      false
    );
  }

  window.addUtmParamsToForm = function ($form) {
    if ($form) {
      $form.removeAttr('novalidate');

      var utmNames = [
        'utm_source',
        'utm_campaign',
        'utm_content',
        'utm_medium',
        'utm_expid',
        'utm_term' ];

      for (var i = 0; i < utmNames.length; i += 1) {
        var name = utmNames[i];
        var localValue = window.localStorage.getItem('binah_' + name);

        if (localValue) {
          jQuery('input[name=' + name + '__c' + ']', $form).val(localValue);
        }
      }
    }
  }
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.how-it-work').length) {
    return;
  }

  howItWorks($);
});

function howItWorks($) {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var previousSection = $('.how-it-work').prev();

    if(previousSection.length){
      if (scroll > (previousSection.offset().top*1-100) && scroll < ($('.how-it-work').offset().top*1+300)) {
        $('.animation-container').addClass('hover');
      } else {
        $('.animation-container').removeClass('hover');
      }
    }
  });

  if ($(window).width() <= 1280) {
    $('.animation-container').css(
      'transform',
      'scale(' + $(window).width() / 1280 + ')'
    );
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.leadership').length) {
    return;
  }

  if (jQuery(window).width() < 768) {
    leadershipMobile($);
  }
});

function leadershipMobile($) {
  $('.leadership .container .list').each(function () {
    var listElement = this;

    $(listElement)
      .find('.mobile-text.mobile-short-text .read-more')
      .on('click', function () {
        $(listElement)
          .find('.mobile-text.mobile-short-text')
          .addClass('hide');
        $(listElement)
          .find('.mobile-text.mobile-detail-text')
          .removeClass('hide');
      });

    $(listElement)
      .find('.mobile-text.mobile-detail-text .read-more')
      .on('click', function () {
        $(listElement)
          .find('.mobile-text.mobile-detail-text')
          .addClass('hide');
        $(listElement)
          .find('.mobile-text.mobile-short-text')
          .removeClass('hide');
      });
  });
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  categoryLinks($)

  if (!$('.news').length) {
    return;
  }

  news($);
});

function news($) {
  if ($(window).width() <= 800) {
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.news-list', {
      spaceBetween: 40,
      slidesPerView: 1,
      pagination: {
        el: '.news-pagination',
        clickable: true,
      },
    });
  }
}

function categoryLinks($) {
  if($('.main-blog__categories .current-cat').length) {
    var blogUrl = $('.main-blog__categories').data('blog-url');
    $('.main-blog__categories .current-cat a').attr('href', blogUrl);
  }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.result').length) {
    return;
  }

  resultsMobile($);

  $('.tabbed-slider .tab').on('click', function (e){
    e.preventDefault();

    $(this).addClass('active').siblings('.tab').removeClass('active');

    $('.tabbed-slider .slider-card').eq($(this).index()).addClass('active').siblings('.slider-card').removeClass('active');
  })

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a ('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheel: true,
  })

});

function resultsMobile($) {

  if ($('.mobile-container .list').hasClass('hide')) {
    $('.mobile-container .see-more').removeClass('hidden');
  }

  $('.see-more').on('click', function () {
    $('.mobile-container .list').removeClass('hide');
    $('.see-more').remove();
  })

  $('.result .mobile-container .list-container .list').on(
    'click',
    function () {
      $(this).toggleClass('hover')
    }
  );

  $('.result .mobile-container .list-container .list .btn').click(
    function (e) {
      e.stopPropagation()
    }
  );
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.latest-news').length) {
    return;
  }

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.latest-news-row', {
    slidesPerView: 3,
    navigation: {
      prevEl: '.latest-news-prev-button',
      nextEl: '.latest-news-next-button',
    },
    breakpoints: {      
      767: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },    
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.header-text-images').length) {
    return;
  }

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.header-text-images-row', {
    slidesPerView: 5,
    loop: true,
    navigation: {
      nextEl: '.header-text-images-next',
      prevEl: '.header-text-images-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 40,
        loop: true,
      },
    },
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.header-text-overlapping-image').length) {
    return;
  }

  $(window).on('scroll', function() {
    if($(this).scrollTop() >= $('.header-text-overlapping-image').position().top - 400) {
      $('.header-text-overlapping-image-video').css('opacity', 1).get(0).play();
    }
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);

var scrollTimeout;
var userClickedSlider= false;

jQuery(document).ready(function ($) {
  if (!$('.slider-tech').length) {
    return;
  }

  if ($(window).width() > 768) {
    technologySliderDesktop($);
  }

  if ($(window).width() <= 768) {
    technologySliderMobile($);
  }

});

function technologySliderDesktop($) {
  
  // If url contains hash, show the tab referenced as tab
  if (window.location.hash && $((".slider-bar[href=\"" + (window.location.hash) + "\"]")).length) {
    setActiveSliderBar($((".slider-bar[href=\"" + (window.location.hash) + "\"]")));
  }
  else {
    setActiveSliderBarForScroll();
  }

  $('.slider-bar').on('click', function () {
    userClickedSlider = true;
    setActiveSliderBar(this);
  })

  $('.slider-bar').click(function (e) {
    e.preventDefault();
    var aid = $(this).attr('href');
    $('html,body').animate(
      { scrollTop: $(aid).offset().top },
      'slow'
    );
  });

  $(window).scroll(function () {
    calcFixedSlider();
    setActiveSliderBarForScrollTO();
  });

}

function calcFixedSlider() {
  var scroll = $(window).scrollTop();
  var triggerPoint = $('.technology-slider').offset().top 
  - $('#wpadminbar').outerHeight() 
  - $('.grid-row').outerHeight();

  if (scroll > triggerPoint && scroll < 5000) {
    $('.slider-tabs').addClass('fixed');
    // change main menu background to dark (by removing class dark) if not mobile display
    if (!window.matchMedia('(max-width: 768px)').matches) {
      $('.header').removeClass('dark');
    }
  } else {
    $('.slider-tabs').removeClass('fixed');
    // change main menu background to white (by adding class dark) if not mobile display
    if (!window.matchMedia('(max-width: 768px)').matches) {
      $('.header').addClass('dark');
    }
  }
}

function setActiveSliderBarForScrollTO() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    setActiveSliderBarForScroll();
  }, 100); //Timeout needed to establish the exact location after scrolling
}

// This function calculates the block which is currently displayed.
// At the same time the function counts the block-anchors up to the currently displayed block. 
// These blocks are represented as a tab in the slider bar, so the number of block-anchors
// is the index of the highlighted tab in the slider bar.
function setActiveSliderBarForScroll() {
  if (userClickedSlider) // There is no need to recalculate after slider-bar was clicked
  {
    userClickedSlider = false;
    return;
  }
  var yOffset = $(window).scrollTop() + $('.slider-bar-container').height() + $('#wpadminbar').outerHeight();
  var anchorIndex = -1;
  $('.block').each(function () {
    if ($(this).find('.block-anchor').length > 0 || $(this).hasClass('block-anchor')) {
      anchorIndex++;
    }
    if ($(this).offset().top + $(this).outerHeight() > yOffset) {
      $('.block').removeClass('current');
      $(this).addClass('current');
      // anchorIndex represents the correct index in the slider bar including cases when
      // the current block is not an anchor block.
      if (anchorIndex < 0) {  // for cases when the current block is before the first anchor
        anchorIndex = 0;
      }
      setActiveSliderBar($('.slider-bar').eq(anchorIndex));
      return false; // stops the iteration after the apropriate block identified
    }
  });
}


function technologySliderMobile($) {
  $('.slider-list-container').addClass('swiper-wrapper');
  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.slider-list-box', {
    spaceBetween: 20,
    slidesPerView: 1,
  });
}

function setActiveSliderBar(activeEl) {
  var tab = '';
  $('.slider-bar').removeClass('active');
  if (activeEl) {
    $(activeEl).addClass('active');

    $('.slider-bar .bottom-line').removeClass('tab-0 tab-1 tab-2');
    var index = $('.slider-bar').index(activeEl);
    tab = 'tab-' + index;
  }
  $('.slider-bar .bottom-line').addClass(tab);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.solution').length) {
    return;
  }

  solution($);
});

function solution($) {

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }

  function imageAnimation(){
    $('.solution img').each(function(){
      var $this = $(this);

      if (isInViewport($(this)[0]) && ! $(this).hasClass('isInViewport') ) {
        $(this).addClass('scrolled').addClass('isInViewport');
        window.setTimeout( function() { $this.removeClass('scrolled') }, 1000 );
      } else {
        $(this).removeClass('scrolled').removeClass('isInViewport');
      }
    });
  }

  imageAnimation();

  $(window).on('scroll', function(){
    imageAnimation();
  })
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.hero-section').length) {
    return;
  }

  $(window).on('scroll', function() {
    if($(this).scrollTop() >= $('.hero-section').outerHeight() - 400) {
      $('.hero-section video').get(0).pause();
    } else {
      $('.hero-section video').get(0).play();
    }
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.tabs-with-content').length) {
    return;
  }

  // Desktop
  $('.tabs-with-content-main .tabs-with-content-tab-title').click(function() {
    // Get content
    var tab = $(this).parent(),
      title = tab.find('.tabs-with-content-tab-title').html(),
      subtitle = tab.find('.tabs-with-content-tab-subtitle').html(),
      content = tab.find('.tabs-with-content-content-hidden').html();

    // Replace content
    var active_content = $('.tabs-with-content-content'),
      active_title = $('.tabs-with-content-active-title'),
      active_subtitle = $('.tabs-with-content-active-subtitle');

    // Get tab image
    var tabImage = tab.data('bg-image');

    // Animation
    $(active_content)
      .add(this)
      .add(active_title)
      .add(active_subtitle)
      .stop()
      .animate(
        {
          opacity: 0,
        },
        500,
        function() {
          active_content.html(content);
          active_title.html(title);
          active_subtitle.html(subtitle);

          // Change tabs on the left
          $('.tabs-with-content-tab').removeClass('hidden');
          tab.addClass('hidden');

          $(active_content)
            .add(this)
            .add(active_title)
            .add(active_subtitle)
            .stop()
            .animate(
              {
                opacity: 1,
              },
              500
            );

          if (tabImage.length > 0) {
            active_content.css({
              backgroundImage: ("url(" + tabImage + ")"),
            });
          }
        }
      );
  });

  // Mobile
  $('.tabs-with-content-tab-close').click(function() {
    $('.tabs-with-content-content-mobile').hide();
    $('.tabs-with-content-tab-close').show();
    $(this).hide();
    $(this).prev().show();
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {(function() {
  var checkFile = function ($fileInput) {
    var $inputWrapper = $fileInput.closest('.wpcf7-form-control-wrap');

    $inputWrapper.attr('data-value', 'Upload');

    $fileInput.on('change', function (event) {
      var $current = $(event.currentTarget);

      var filename =
        (event.currentTarget.files &&
          event.currentTarget.files[0] &&
          event.currentTarget.files[0].name) ||
        'Upload';

      if (filename.length > 12) {
        filename = '...' + filename.slice(-12, filename.length);
      }

      $current.closest('.wpcf7-form-control-wrap').attr('data-value', filename);
    });
  };

  checkFile($('.form-apply .input-file-custom'));

  /**
   * Scroll to Apply Form
   */
  $('.single-position__actions .btn').on('click', function (event) {
    var $target = $($(event.currentTarget).attr('href'));

    if ($target.length === 0) {
      return;
    }

    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $target.offset().top - $('.header').outerHeight() - 40,
      },
      700
    );
  });
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('ready', function () {
  $('.box-location').on('touchstart', function (event) {
    var $box = $(event.currentTarget);

    $box
      .toggleClass('box-location--hovered')
      .parent()
      .siblings()
      .find('.box-location')
      .removeClass('box-location--hovered');
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).on('ready', function () {
  var $block = $('.video-with-text__media');

  if ($block.length === 0) { return; }

  var $btnPlay = $block.find('.btn-play');
  var $video = $block.find('video');

  $video.get(0).addEventListener('pause', function () {
    $block.removeClass('video-with-text__media--playing');
  });

  $btnPlay.on('click', function () {
    $block.addClass('video-with-text__media--playing');
    $video.get(0).play();
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.powered-by-binah').length) {
    return;
  }

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.powered-by-binah-slides', {
    slidesPerView: 1,
    navigation: {
      prevEl: '.powered-prev-button',
      nextEl: '.powered-next-button',
    },
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.timeline').length) {
    return;
  }

  timelineShow($);
});

function timelineShow($) {
  if ($(window).width() > 767) {
    $(window).scroll(function() {
      var top_of_element = $('.timeline--row').offset().top;
      var bottom_of_element = $('.timeline--row').offset().top + $('.timeline--row').outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $('.timeline--text, .timeline--arrow').fadeIn(1000);
      }
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(window).on('load', function () {
  if (!$('.section-faq').length) {
    return;
  }

  $('.section-faq-question').click(function() {
    var $parent = $(this).parent();
    var $answer = $(this).next();
    var open = !$parent.hasClass('closed');

    if (open) {
      $parent.addClass('closed');
      $answer.slideUp();
    } else {
      $parent.removeClass('closed');
      $answer.slideDown();
    }
  })
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.latest-news-sharp').length) {
    return;
  }

  if ($(window).width() < 1023) {
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.latest-news-sharp-row', {
      slidesPerView: 1,
      navigation: {
        prevEl: '.latest-news-sharp-prev-button',
        nextEl: '.latest-news-sharp-next-button',
      },
      effect: 'coverflow',
      centeredSlides: true,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows : false,
      },
    });
  } else {
    new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.latest-news-sharp-row', {
      slidesPerView: 3,
      loop: true,
      navigation: {
        prevEl: '.latest-news-sharp-prev-button',
        nextEl: '.latest-news-sharp-next-button',
      },
    });
  }
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.b-image-video-text').length) {
    return;
  }

  $(window).on('scroll', function() {
    if($(this).scrollTop() >= $('.b-image-video-text').position().top - 400) {
      $('.b-image-video-text__video video').css('opacity', 1).get(0).play();
    }
  });
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.testimonials-carousel').length) {
    return;
  }

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.testimonials-carousel-slides', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: '.powered-prev-button',
      nextEl: '.powered-next-button',
    },
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.logos-slider.slide-logos').length) {
    return;
  }

  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.logos-slider.slide-logos .logos-slider__list-logos', {
    slidesPerView: 3,
    loop: true,
    dots: false,
    navigation: {
      prevEl: '.logos-slider-prev-button',
      nextEl: '.logos-slider-next-button',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 2,
      },      
    },
  });
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_readmore_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_readmore_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_readmore_js__);
//import Swiper from 'swiper/dist/js/swiper.min.js';

var scrollTimeout2;
var userClickedSlider2 = false;

jQuery(document).ready(function($) {
    if (!$('.anchor-nav').length) {
        return;
    }

    anchorSliderDesktop($);
    AddReadMore();
    $('.anchor-nav .text-with-image .less-text').addClass('addReadMore showlesscontent');

});

function anchorSliderDesktop($) {

    // If url contains hash, show the tab referenced as tab
    if (window.location.hash && $((".slider-bar[href=\"" + (window.location.hash) + "\"]")).length) {
        setActiveSliderBar2($((".slider-bar[href=\"" + (window.location.hash) + "\"]")));
    } else {
        setActiveSliderBarForScroll2();
    }

    $('.slider-bar').on('click', function() {
        userClickedSlider2 = true;
        setActiveSliderBar2(this);
    })

    $('.slider-bar').click(function(e) {
        e.preventDefault();
        var aid = $(this).attr('href');
        var offset = $('.header').outerHeight() + $('.slider-tabs').outerHeight() + 89;
        $('html,body').animate({ scrollTop: $(aid).offset().top - offset },
            'slow'
        );
    });

    $(window).scroll(function() {
        calcFixedSlider2();
        setActiveSliderBarForScrollTO2();
    });

}

function calcFixedSlider2() {
    var scroll = $(window).scrollTop();
    var triggerPoint = $('.anchor-nav').offset().top
        //- $('#wpadminbar').outerHeight()
        -
        $('.header').outerHeight();
    var contentHeight = $('.anchor-nav').offset().top + $('.anchor-nav').outerHeight() - $('.header').outerHeight();

    if (scroll > triggerPoint && scroll < contentHeight) {
        $('.slider-tabs').addClass('fixed');
    } else {
        $('.slider-tabs').removeClass('fixed');
    }
}

function setActiveSliderBarForScrollTO2() {
    clearTimeout(scrollTimeout2);
    scrollTimeout2 = setTimeout(function() {
        setActiveSliderBarForScroll2();
    }, 100); //Timeout needed to establish the exact location after scrolling
}

// This function calculates the block which is currently displayed.
// At the same time the function counts the block-anchors up to the currently displayed block.
// These blocks are represented as a tab in the slider bar, so the number of block-anchors
// is the index of the highlighted tab in the slider bar.
function setActiveSliderBarForScroll2() {
    if (userClickedSlider2) // There is no need to recalculate after slider-bar was clicked
    {
        userClickedSlider2 = false;
        return;
    }
    //const yOffset = $(window).scrollTop() + $('.slider-bar-container').height() + $('#wpadminbar').outerHeight();
    var yOffset = $(window).scrollTop() + $('.slider-tabs').outerHeight();
    var anchorIndex = -1;
    $('.slider-content').each(function() {
        if ($(this).find('.block-anchor').length > 0 || $(this).hasClass('block-anchor')) {
            anchorIndex++;
        }
        if ($(this).offset().top + $(this).outerHeight() > yOffset) {
            $('.slider-content').removeClass('current');
            $(this).addClass('current');
            // anchorIndex represents the correct index in the slider bar including cases when
            // the current block is not an anchor block.
            if (anchorIndex < 0) { // for cases when the current block is before the first anchor
                anchorIndex = 0;
            }
            setActiveSliderBar2($('.slider-bar').eq(anchorIndex));
            return false; // stops the iteration after the apropriate block identified
        }
    });
}


function setActiveSliderBar2(activeEl) {
    var tab = '';
    $('.slider-bar').removeClass('active');
    if (activeEl) {
        $(activeEl).addClass('active');

        $('.slider-bar .bottom-line').removeClass('tab-' + index);
        var index = $('.slider-bar').index(activeEl);
        tab = 'tab-' + index;
    }
    $('.slider-bar .bottom-line').addClass(tab);

    var slider_bar_container = document.querySelector('.slider-bar-container');
    var slide_active_left = document.querySelector('.slider-bar.active') ? document.querySelector('.slider-bar.active').offsetLeft : 0;
    if (slider_bar_container.scrollWidth > slider_bar_container.clientWidth) {
        $('.slider-bar-container').animate({ scrollLeft: slide_active_left }, 500);
    }
}

function AddReadMore() {
    jQuery('.anchor-nav .text-with-image .less-text').each(function() {
        var element_text_p = jQuery(this).find('p:first');
        var collapsed_height = 148;

        if (element_text_p.length) {
            element_text_p = element_text_p.get(0);
            collapsed_height = 4 * getLineHeight(element_text_p) + 20;

            if (element_text_p.clientHeight < collapsed_height) {
                collapsed_height = element_text_p.clientHeight + 20;
            }
        }

        jQuery(this).readmore({
            moreLink: '<a href="#">' + window['binah'].translate.more_info + '</a>',
            lessLink: '<a href="#">' + window['binah'].translate.close + '</a>',
            collapsedHeight: collapsed_height,
            speed: 300,
            afterToggle: function(trigger, element, expanded) {
                if (!expanded) {
                    // The "Close" link was clicked
                    var offset = jQuery('.header').outerHeight() + jQuery('.slider-tabs').outerHeight() + 89;
                    jQuery('html, body').animate({ scrollTop: element.offset().top - offset }, { duration: 500 });

                }
            },
        });
    })
}

function getLineHeight(el) {
    var temp = document.createElement(el.nodeName),
        ret;
    temp.setAttribute('style', 'margin:0; padding:0; ' +
        'font-family:' + (el.style.fontFamily || 'inherit') + '; ' +
        'font-size:' + (el.style.fontSize || 'inherit'));
    temp.innerHTML = 'A';

    el.parentNode.appendChild(temp);
    ret = temp.clientHeight;
    temp.parentNode.removeChild(temp);

    return ret;
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */

/* global jQuery */

(function(factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var readmore = 'readmore',
      defaults = {
        speed: 100,
        collapsedHeight: 200,
        heightMargin: 16,
        moreLink: '<a href="#">Read More</a>',
        lessLink: '<a href="#">Close</a>',
        embedCSS: true,
        blockCSS: 'display: block; width: 100%;',
        startOpen: false,

        // callbacks
        blockProcessed: function() {},
        beforeToggle: function() {},
        afterToggle: function() {}
      },
      cssEmbedded = {},
      uniqueIdCounter = 0;

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (! immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  function uniqueId(prefix) {
    var id = ++uniqueIdCounter;

    return String(prefix === null ? 'rmjs-' : prefix) + id;
  }

  function setBoxHeights(element) {
    var el = element.clone().css({
          height: 'auto',
          width: element.width(),
          maxHeight: 'none',
          overflow: 'hidden'
        }).insertAfter(element),
        expandedHeight = el.outerHeight(),
        cssMaxHeight = parseInt(el.css({maxHeight: ''}).css('max-height').replace(/[^-\d\.]/g, ''), 10),
        defaultHeight = element.data('defaultHeight');

    el.remove();

    var collapsedHeight = cssMaxHeight || element.data('collapsedHeight') || defaultHeight;

    // Store our measurements.
    element.data({
      expandedHeight: expandedHeight,
      maxHeight: cssMaxHeight,
      collapsedHeight: collapsedHeight
    })
    // and disable any `max-height` property set in CSS
    .css({
      maxHeight: 'none'
    });
  }

  var resizeBoxes = debounce(function() {
    $('[data-readmore]').each(function() {
      var current = $(this),
          isExpanded = (current.attr('aria-expanded') === 'true');

      setBoxHeights(current);

      current.css({
        height: current.data( (isExpanded ? 'expandedHeight' : 'collapsedHeight') )
      });
    });
  }, 100);

  function embedCSS(options) {
    if (! cssEmbedded[options.selector]) {
      var styles = ' ';

      if (options.embedCSS && options.blockCSS !== '') {
        styles += options.selector + ' + [data-readmore-toggle], ' +
          options.selector + '[data-readmore]{' +
            options.blockCSS +
          '}';
      }

      // Include the transition CSS even if embedCSS is false
      styles += options.selector + '[data-readmore]{' +
        'transition: height ' + options.speed + 'ms;' +
        'overflow: hidden;' +
      '}';

      (function(d, u) {
        var css = d.createElement('style');
        css.type = 'text/css';

        if (css.styleSheet) {
          css.styleSheet.cssText = u;
        }
        else {
          css.appendChild(d.createTextNode(u));
        }

        d.getElementsByTagName('head')[0].appendChild(css);
      }(document, styles));

      cssEmbedded[options.selector] = true;
    }
  }

  function Readmore(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    embedCSS(this.options);

    this._defaults = defaults;
    this._name = readmore;

    this.init();

    // IE8 chokes on `window.addEventListener`, so need to test for support.
    if (window.addEventListener) {
      // Need to resize boxes when the page has fully loaded.
      window.addEventListener('load', resizeBoxes);
      window.addEventListener('resize', resizeBoxes);
    }
    else {
      window.attachEvent('load', resizeBoxes);
      window.attachEvent('resize', resizeBoxes);
    }
  }


  Readmore.prototype = {
    init: function() {
      var current = $(this.element);

      current.data({
        defaultHeight: this.options.collapsedHeight,
        heightMargin: this.options.heightMargin
      });

      setBoxHeights(current);

      var collapsedHeight = current.data('collapsedHeight'),
          heightMargin = current.data('heightMargin');

      if (current.outerHeight(true) <= collapsedHeight + heightMargin) {
        // The block is shorter than the limit, so there's no need to truncate it.
        if (this.options.blockProcessed && typeof this.options.blockProcessed === 'function') {
          this.options.blockProcessed(current, false);
        }
        return true;
      }
      else {
        var id = current.attr('id') || uniqueId(),
            useLink = this.options.startOpen ? this.options.lessLink : this.options.moreLink;

        current.attr({
          'data-readmore': '',
          'aria-expanded': this.options.startOpen,
          'id': id
        });

        current.after($(useLink)
          .on('click', (function(_this) {
            return function(event) {
              _this.toggle(this, current[0], event);
            };
          })(this))
          .attr({
            'data-readmore-toggle': id,
            'aria-controls': id
          }));

        if (! this.options.startOpen) {
          current.css({
            height: collapsedHeight
          });
        }

        if (this.options.blockProcessed && typeof this.options.blockProcessed === 'function') {
          this.options.blockProcessed(current, true);
        }
      }
    },

    toggle: function(trigger, element, event) {
      if (event) {
        event.preventDefault();
      }

      if (! trigger) {
        trigger = $('[aria-controls="' + this.element.id + '"]')[0];
      }

      if (! element) {
        element = this.element;
      }

      var $element = $(element),
          newHeight = '',
          newLink = '',
          expanded = false,
          collapsedHeight = $element.data('collapsedHeight');

      if ($element.height() <= collapsedHeight) {
        newHeight = $element.data('expandedHeight') + 'px';
        newLink = 'lessLink';
        expanded = true;
      }
      else {
        newHeight = collapsedHeight;
        newLink = 'moreLink';
      }

      // Fire beforeToggle callback
      // Since we determined the new "expanded" state above we're now out of sync
      // with our true current state, so we need to flip the value of `expanded`
      if (this.options.beforeToggle && typeof this.options.beforeToggle === 'function') {
        this.options.beforeToggle(trigger, $element, ! expanded);
      }

      $element.css({'height': newHeight});

      // Fire afterToggle callback
      $element.on('transitionend', (function(_this) {
        return function() {
          if (_this.options.afterToggle && typeof _this.options.afterToggle === 'function') {
            _this.options.afterToggle(trigger, $element, expanded);
          }

          $(this).attr({
            'aria-expanded': expanded
          }).off('transitionend');
        };
      })(this));

      $(trigger).replaceWith($(this.options[newLink])
        .on('click', (function(_this) {
            return function(event) {
              _this.toggle(this, element, event);
            };
          })(this))
        .attr({
          'data-readmore-toggle': $element.attr('id'),
          'aria-controls': $element.attr('id')
        }));
    },

    destroy: function() {
      $(this.element).each(function() {
        var current = $(this);

        current.attr({
          'data-readmore': null,
          'aria-expanded': null
        })
          .css({
            maxHeight: '',
            height: ''
          })
          .next('[data-readmore-toggle]')
          .remove();

        current.removeData();
      });
    }
  };


  $.fn.readmore = function(options) {
    var args = arguments,
        selector = this.selector;

    options = options || {};

    if (typeof options === 'object') {
      return this.each(function() {
        if ($.data(this, 'plugin_' + readmore)) {
          var instance = $.data(this, 'plugin_' + readmore);
          instance.destroy.apply(instance);
        }

        options.selector = selector;

        $.data(this, 'plugin_' + readmore, new Readmore(this, options));
      });
    }
    else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      return this.each(function () {
        var instance = $.data(this, 'plugin_' + readmore);
        if (instance instanceof Readmore && typeof instance[options] === 'function') {
          instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });
    }
  };

}));



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
  if (!$('.table-text').length) {
    return;
  }

  if ($(window).width() <= 768) {
    tabletextSliderMobile($);
  }
});


function tabletextSliderMobile($) {
  $('.table tbody').addClass('swiper-wrapper');
  new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.table', {
    spaceBetween: 20,
    slidesPerView: 1,
    lopp: true,
    navigation: {
      prevEl: '.table-text-prev-button',
      nextEl: '.table-text-next-button',
    },
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
    if ($('.employees-carousel').length) {
        var employees_carousel_slider = document.querySelectorAll('.employees-carousel-slides');
        var employees_carousel_text_slider = document.querySelectorAll('.employees-carousel-text-slides');

        for (var i = 0; i < employees_carousel_slider.length; i++) {
            employees_carousel_slider[i].classList.add('employees-carousel-slides-' + i);
            employees_carousel_text_slider[i].classList.add('employees-carousel-text-slides-' + i);

            var employees_text_slider = new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.employees-carousel-text-slides-' + i, {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                loopedSlides: 4,
                effect: 'fade',
                speed: 1000,
                autoplay: false,
                keyboard: false,
                noSwiping: true,
                allowSlidePrev: false,
                allowSlideNext: false,
            });

            var employees_slider = new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.employees-carousel-slides-' + i, {
                slidesPerView: 'auto',
                speed: 1000,
                // autoplay: {
                //     delay: 3000,
                // },
                autoplay: false,
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                loopedSlides: 4,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 80,
                    depth: 150,
                    modifier: 2,
                    slideShadows: false,
                },
                navigation: {
                    prevEl: '.powered-prev-button',
                    nextEl: '.powered-next-button',
                },
                breakpoints: {
                    768: {
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 50,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        },
                    },
                },
            });

            employees_slider.controller.control = employees_text_slider;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
    if ($('.greenhouse-careers').length) {
        $(document).on('change', '.greenhouse-careers .filters select.filters-button-group', function() {
            var filter_values = {};
            $('.greenhouse-careers .filters select.filters-button-group').each(function() {
                filter_values[$(this).data('filter-group')] = $(this).val();
            })

            $('.greenhouse-careers .positions-list article').each(function() {
                var this$1 = this;

                var flag_show = true;

                for (var filter_key in filter_values) {
                    if (filter_values[filter_key] != '*' && $(this$1).data(filter_key) != filter_values[filter_key]) {
                        flag_show = false;
                    }
                }

                if (flag_show) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
            })
        })
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.tabs-vertical').length) {
    return;
  }

  $('.tabs-vertical-main .tabs-vertical-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs-vertical-main .tabs-vertical-link').removeClass('tabs-vertical-link-active');
		$('.tabs-vertical-content').removeClass('tabs-vertical-content-active');

		$(this).addClass('tabs-vertical-link-active');
		$('#'+tab_id).addClass('tabs-vertical-content-active');
	})
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js__);


jQuery(document).ready(function($) {
    if ($('.science-carousel').length) {
        var science_carousel_slider = document.querySelectorAll('.science-carousel-slides');
        var science_carousel_text_slider = document.querySelectorAll('.science-carousel-text-slides');

        for (var i = 0; i < science_carousel_slider.length; i++) {
            science_carousel_slider[i].classList.add('science-carousel-slides-' + i);
            science_carousel_text_slider[i].classList.add('science-carousel-text-slides-' + i);

            var science_text_slider = new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.science-carousel-text-slides-' + i, {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                loopedSlides: 4,
                effect: 'fade',
                speed: 1000,
                autoplay: false,
                keyboard: false,
                noSwiping: true,
                allowSlidePrev: false,
                allowSlideNext: false,
            });

            var science_slider = new __WEBPACK_IMPORTED_MODULE_0_swiper_dist_js_swiper_min_js___default.a('.science-carousel-slides-' + i, {
                slidesPerView: 'auto',
                speed: 1000,
                // autoplay: {
                //     delay: 3000,
                // },
                autoplay: false,
                effect: 'coverflow',
                centeredSlides: true,
                loop: true,
                loopedSlides: 4,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 80,
                    depth: 150,
                    modifier: 2,
                    slideShadows: false,
                },
                navigation: {
                    prevEl: '.powered-prev-button',
                    nextEl: '.powered-next-button',
                },
                breakpoints: {
                    768: {
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 50,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        },
                    },
                },
            });

            science_slider.controller.control = science_text_slider;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function($) {
  if (!$('.how-it-work-new').length) {
    return;
  }

  howItWorksNew($);
  
  if ($(window).width() < 992) {
    var img_count = $('.how-it-work-new-step-image img').length;
    var img_load_counter = 0;
    $('.how-it-work-new-step-image img').each(function(){
      if (this.complete || this.readyState === 4) { //if img in cache
        img_load_counter++;

        if(img_count == img_load_counter){
          changeStylesBlockByHeight();
        }
      } else { //if img not in cache
        $(this).on('load', function(){ 
          img_load_counter++;
              
          if(img_count == img_load_counter){
            changeStylesBlockByHeight();
            }
        }); 
      }
    });
  }
});

function changeStylesBlockByHeight() {
  var height = $('.how-it-work-new-tabs-wrap').outerHeight();
  var heightAll = $('.how-it-work-new-tabs').outerHeight() + $('.how-it-work-new-step').outerHeight() - ($('.how-it-work-new-step1').outerHeight()/3);
  console.log($('.how-it-work-new-tabs').outerHeight());
  console.log($('.how-it-work-new-step').outerHeight());
  console.log($('.how-it-work-new-step1').outerHeight()/3);
  console.log(heightAll);
  $('.how-it-work-new-tabs-link').css('width',  + (height / 3 - 10) + 'px');
  $('.how-it-work-new-tabs-link').css('margin-left', '-' + (height / 3 - 10) + 'px');
  $('.how-it-work-new-tabs-content').css('min-height', + height + 'px');
  $('.how-it-work-new-step-json.mobile').css('max-height', + heightAll + 'px');
}

function howItWorksNew($) {
  $('.how-it-work-new-tabs .how-it-work-new-tabs-link').click(function(){
		var tab_id = $(this).attr('data-tab');
    var tab_bottom_id = $(this).attr('data-bottom-tab');

		$('.how-it-work-new-tabs .how-it-work-new-tabs-link').removeClass('how-it-work-new-tabs-link-active');
		$('.how-it-work-new-tabs-content').removeClass('how-it-work-new-tabs-content-active');
    $('.how-it-work-new-tabs-content-bottom').removeClass('how-it-work-new-tabs-content-bottom-active');

		$(this).addClass('how-it-work-new-tabs-link-active');
		$('#'+tab_id).addClass('how-it-work-new-tabs-content-active');
    $('#'+tab_bottom_id).addClass('how-it-work-new-tabs-content-bottom-active');    
	})
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mobile_link__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_mobile_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_mobile_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ajax_type_filter__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hubspot_popups_customize__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hubspot_popups_customize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_hubspot_popups_customize__);





/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function($) {
  if (!$('.mobile-link').length) {
    return;
  }

  if ($(window).width() <= 768) {
    $('.mobile-link').on('click', function() {
      $(this).toggleClass('hide');
      $($(this).data('content')).toggleClass('hide');
    });
  }
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_selectize_dist_js_selectize_min_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_selectize_dist_js_selectize_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_selectize_dist_js_selectize_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_jquery_multi_select_min_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_jquery_multi_select_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__util_jquery_multi_select_min_js__);



var ajax_type_filter_form = $('.ajax-type-filter-form');
if (ajax_type_filter_form.length > 0) {

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var multiple = $('.ajax-type-filter-form').hasClass('multiple');
  var form = $('.ajax-type-filter-form');

  if (multiple) {
    $('.ajax-type-filter-form.multiple select').each(function(){
      var allText = $(this).attr('data-default-label');

      $(this).multiSelect({
        'noneText': allText,
      });
    });

    $('.ajax-filters .btn-reset').on('click', function () {
      if ($(this).hasClass('reset')) {
        $.ajaxSetup({async: false});

        $('.ajax-type-filter-form.multiple select').each(function () {
          var $select = $(this);
          var isSomeOptionChecked = !!($select.find('option:selected').length);

          $select.siblings('.multi-select-container input[type=checkbox]:checked').prop('checked', false);
          $select.find('option:selected').prop('selected', false);

          if (isSomeOptionChecked) {
            $select.trigger('change');
          }
        });

        $.ajaxSetup({async: true});
        $(this).removeClass('reset');
      }
    });
  }

  $('.ajax-type-filter-form select').each(function() {
    var select = $(this);
    var select_name = select.attr('name');
    var getVal = urlParams.get(select_name);

    if (getVal != null) {
      if (form.hasClass('multiple')) {
        var vals = getVal.split(',');
        vals.forEach(function(element){
          form.find('.multi-select-container input[value="'+element+'"]').prop('checked', true);
          form.find('select option[value="'+element+'"]').prop('selected', true);
        });

      } else {
        select.val(getVal);
      }
    }
  });

  form.find('select').trigger('change');

  $(document).on('change', '.ajax-type-filter-form select', function () {
    console.log('changetriggerded');
    var $resetBtn = $(this).parents('form').siblings('.btn-reset');
    var reset = false;
    var tax_query = {};
    var i = 0;
    var post_type = $(this).attr('data-post-type');

    $('.ajax-type-filter-form select').each(function() {
      if ($(this).find('option:selected').length) {
        reset = true;
      }

      var val       = $(this).val() || 'all';
      var name      = $(this).attr('name');
      var taxonomy  = $(this).attr('data-taxonomy');

      tax_query[i] = {
        taxonomy: taxonomy,
        value: val,
      }

      if (post_type == 'success_story') {
        $(this).parents('form').submit();
        return;
      }

      if (Array.isArray(val) && !val.length) {
        val = 'all';
      }

      // Update URL with param
      var uri = window.location.href;
      var re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i');
      var separator = uri.indexOf('?') !== -1 ? '&' : '?';
      if (uri.match(re)) {
        window.history.pushState({path: uri.replace(re, '$1' + name + '=' + val + '$2')}, '', uri.replace(re, '$1' + name + '=' + val + '$2')) ;
      }
      else {
        window.history.pushState({path: uri + separator + name + '=' + val}, '', uri + separator + name + '=' + val) ;
      }

      i++;
    });

    if (!reset) {
      $resetBtn.removeClass('reset').text( $resetBtn.data('sort') );
    } else {
      $resetBtn.addClass('reset').text( $resetBtn.data('reset') );
    }

    var data = window['binah_data_' + post_type];

    if (window.xhr) {
      window.xhr.abort();
    }

    window.xhr = $.post(
      data.ajaxurl, {
        action    : 'ajax_filter_type',
        post_type : post_type,
        tax_query : JSON.stringify(tax_query),

        query         : data.posts,
        page          : 0,
        item_template : data.item_template,
        async         : false,
      },
      function (res) {
        var parsed = $.parseJSON(res);

        window[ 'binah_data_' + post_type ].posts = parsed.query;
        window[ 'binah_data_' + post_type ].current_page = 1;
        window[ 'binah_data_' + post_type ].max_page = parsed.max_page;

        if( parsed['data'] ) {
          $('.posts-listing').html( parsed['data'] );
          $('.alert-warning').hide();
        } else {
          $('.posts-listing').html('');
          $('.alert-warning').show();
        }

        $('.component-btn-load-more .btn-go-to-top').hide();
        $('.btn-load-more-posts').show().html('Load more');
      }
    );

  });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! selectize.js - v0.12.6 | https://github.com/selectize/selectize.js | Apache License (v2) */

!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(76),__webpack_require__(77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName)&&("highlight"!==a.className||"SPAN"!==a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}};a.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;a.replaceChild(this.firstChild,this),a.normalize()}).end()};var e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=f?91:17,h=f?18:17,i=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,j=function(a){return void 0!==a},k=function(a){return void 0===a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},l=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},m={};m.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},m.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var n=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},o=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},p=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];if(-1===b.indexOf(c))return e.apply(a,arguments);f[c]=arguments},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},q=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},r=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},s=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;d<e;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},t=function(b,c){return b?(w.$testInput||(w.$testInput=a("<span />").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).appendTo("body")),w.$testInput.text(b),s(c,w.$testInput,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]),w.$testInput.width()):0},u=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||!1!==a.data("grow"))&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=48&&f<=57||f>=65&&f<=90||f>=96&&f<=111||f>=186&&f<=222||32===f,46===f||8===f?(l=r(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):8===f&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):46===f&&void 0!==l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),(i=t(e,a)+4)!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},v=function(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},w=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?1:2,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++w.count,highlightedValue:null,isBlurring:!1,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:o(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;e<f;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;e<f;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(w),void 0!==c?c.mixin(w):function(a,b){b||(b={});console.error("Selectize: "+a),b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&console.groupEnd())}("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),a.extend(w.prototype,{setup:function(){var b,c,d,e,j,k,l,m,n,o,p=this,r=p.settings,s=p.eventNS,t=a(window),v=a(document),w=p.$input;if(l=p.settings.mode,m=w.attr("class")||"",b=a("<div>").addClass(r.wrapperClass).addClass(m).addClass(l),c=a("<div>").addClass(r.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",w.is(":disabled")?"-1":p.tabIndex),k=a(r.dropdownParent||b),e=a("<div>").addClass(r.dropdownClass).addClass(l).hide().appendTo(k),j=a("<div>").addClass(r.dropdownContentClass).appendTo(e),(o=w.attr("id"))&&(d.attr("id",o+"-selectized"),a("label[for='"+o+"']").attr("for",o+"-selectized")),p.settings.copyClassesToDropdown&&e.addClass(m),b.css({width:w[0].style.width}),p.plugins.names.length&&(n="plugin-"+p.plugins.names.join(" plugin-"),b.addClass(n),e.addClass(n)),(null===r.maxItems||r.maxItems>1)&&1===p.tagType&&w.attr("multiple","multiple"),p.settings.placeholder&&d.attr("placeholder",r.placeholder),!p.settings.splitOn&&p.settings.delimiter){var x=p.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");p.settings.splitOn=new RegExp("\\s*"+x+"+\\s*")}w.attr("autocorrect")&&d.attr("autocorrect",w.attr("autocorrect")),w.attr("autocapitalize")&&d.attr("autocapitalize",w.attr("autocapitalize")),d[0].type=w[0].type,p.$wrapper=b,p.$control=c,p.$control_input=d,p.$dropdown=e,p.$dropdown_content=j,e.on("mouseenter mousedown click","[data-disabled]>[data-selectable]",function(a){a.stopImmediatePropagation()}),e.on("mouseenter","[data-selectable]",function(){return p.onOptionHover.apply(p,arguments)}),e.on("mousedown click","[data-selectable]",function(){return p.onOptionSelect.apply(p,arguments)}),q(c,"mousedown","*:not(input)",function(){return p.onItemSelect.apply(p,arguments)}),u(d),c.on({mousedown:function(){return p.onMouseDown.apply(p,arguments)},click:function(){return p.onClick.apply(p,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return p.onKeyDown.apply(p,arguments)},keyup:function(){return p.onKeyUp.apply(p,arguments)},keypress:function(){return p.onKeyPress.apply(p,arguments)},resize:function(){p.positionDropdown.apply(p,[])},blur:function(){return p.onBlur.apply(p,arguments)},focus:function(){return p.ignoreBlur=!1,p.onFocus.apply(p,arguments)},paste:function(){return p.onPaste.apply(p,arguments)}}),v.on("keydown"+s,function(a){p.isCmdDown=a[f?"metaKey":"ctrlKey"],p.isCtrlDown=a[f?"altKey":"ctrlKey"],p.isShiftDown=a.shiftKey}),v.on("keyup"+s,function(a){a.keyCode===h&&(p.isCtrlDown=!1),16===a.keyCode&&(p.isShiftDown=!1),a.keyCode===g&&(p.isCmdDown=!1)}),v.on("mousedown"+s,function(a){if(p.isFocused){if(a.target===p.$dropdown[0]||a.target.parentNode===p.$dropdown[0])return!1;p.$control.has(a.target).length||a.target===p.$control[0]||p.blur(a.target)}}),t.on(["scroll"+s,"resize"+s].join(" "),function(){p.isOpen&&p.positionDropdown.apply(p,arguments)}),t.on("mousemove"+s,function(){p.ignoreHover=!1}),this.revertSettings={$children:w.children().detach(),tabindex:w.attr("tabindex")},w.attr("tabindex",-1).hide().after(p.$wrapper),a.isArray(r.items)&&(p.setValue(r.items),delete r.items),i&&w.on("invalid"+s,function(a){a.preventDefault(),p.isInvalid=!0,p.refreshState()}),p.updateOriginalInput(),p.refreshItems(),p.refreshState(),p.updatePlaceholder(),p.isSetup=!0,w.is(":disabled")&&p.disable(),p.on("change",this.onChange),w.data("selectize",p),w.addClass("selectized"),p.trigger("initialize"),!0===r.preload&&p.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]])&&this.on(a,b)},onClick:function(a){var b=this;b.isFocused&&b.isOpen||(b.focus(),a.preventDefault())},onMouseDown:function(b){var c=this,d=b.isDefaultPrevented();a(b.target);if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;if(c.isFull()||c.isInputHidden||c.isLocked)return void b.preventDefault();c.settings.splitOn&&setTimeout(function(){var b=c.$control_input.val();if(b.match(c.settings.splitOn))for(var d=a.trim(b).split(c.settings.splitOn),e=0,f=d.length;e<f;e++)c.createItem(d[e])},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target,this.$control_input[0],this);if(b.isLocked)return void(9!==a.keyCode&&a.preventDefault());switch(a.keyCode){case 65:if(b.isCmdDown)return void b.selectAll();break;case 27:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case 78:if(!a.ctrlKey||a.altKey)break;case 40:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case 80:if(!a.ctrlKey||a.altKey)break;case 38:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case 13:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case 37:return void b.advanceSelection(-1,a);case 39:return void b.advanceSelection(1,a);case 9:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case 8:case 46:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;if(b.isDisabled)return b.blur(),a&&a.preventDefault(),!1;b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState())},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),b&&b.focus&&b.focus(),c.isBlurring=!1,c.ignoreFocus=!1,c.trigger("blur")};c.isBlurring=!0,c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):void 0!==(c=d.attr("data-value"))&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c)))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input;b.val()!==a&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return 1===this.tagType&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){p(this,b?[]:["change"],function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if("mousedown"===(d=c&&c.type.toLowerCase())&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;e<=h;e++)i=l.$control[0].childNodes[e],-1===l.$activeItems.indexOf(i)&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,k=this;k.$activeOption&&k.$activeOption.removeClass("active"),k.$activeOption=null,b=a(b),b.length&&(k.$activeOption=b.addClass("active"),!c&&j(c)||(e=k.$dropdown_content.height(),f=k.$activeOption.outerHeight(!0),c=k.$dropdown_content.scrollTop()||0,g=k.$activeOption.offset().top-k.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?k.$dropdown_content.stop().animate({scrollTop:i},d?k.settings.scrollDuration:0):g<c&&k.$dropdown_content.stop().animate({scrollTop:h},d?k.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b,nesting:a.nesting}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&"function"!=typeof(e=f.settings.score.apply(this,[b])))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)-1!==f.items.indexOf(k(d.items[c].id))&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,l,m,n,o,p,q,r,s,t;void 0===b&&(b=!0);var u=this,w=a.trim(u.$control_input.val()),x=u.search(w),y=u.$dropdown_content,z=u.$activeOption&&k(u.$activeOption.attr("data-value"));for(g=x.items.length,"number"==typeof u.settings.maxOptions&&(g=Math.min(g,u.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=u.options[x.items[c].id],l=u.render("option",j),m=j[u.settings.optgroupField]||"",n=a.isArray(m)?m:[m],e=0,f=n&&n.length;e<f;e++)m=n[e],u.optgroups.hasOwnProperty(m)||(m=""),h.hasOwnProperty(m)||(h[m]=document.createDocumentFragment(),i.push(m)),h[m].appendChild(l);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){return(u.optgroups[a].$order||0)-(u.optgroups[b].$order||0)}),o=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)m=i[c],u.optgroups.hasOwnProperty(m)&&h[m].childNodes.length?(p=document.createDocumentFragment(),p.appendChild(u.render("optgroup_header",u.optgroups[m])),p.appendChild(h[m]),o.appendChild(u.render("optgroup",a.extend({},u.optgroups[m],{html:v(p),dom:p})))):o.appendChild(h[m]);if(y.html(o),u.settings.highlight&&(y.removeHighlight(),x.query.length&&x.tokens.length))for(c=0,g=x.tokens.length;c<g;c++)d(y,x.tokens[c].regex);if(!u.settings.hideSelected)for(c=0,g=u.items.length;c<g;c++)u.getOption(u.items[c]).addClass("selected");q=u.canCreate(w),q&&(y.prepend(u.render("option_create",{input:w})),t=a(y[0].childNodes[0])),u.hasOptions=x.items.length>0||q,u.hasOptions?(x.items.length>0?(s=z&&u.getOption(z),s&&s.length?r=s:"single"===u.settings.mode&&u.items.length&&(r=u.getOption(u.items[0])),r&&r.length||(r=t&&!u.settings.addPrecedence?u.getAdjacentOption(t,1):y.find("[data-selectable]:first"))):r=t,u.setActiveOption(r),b&&!u.isOpen&&u.open()):(u.setActiveOption(null),b&&u.isOpen&&u.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;c<d;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=k(a[this.settings.valueField]);return void 0!==b&&null!==b&&!this.options.hasOwnProperty(b)&&(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=k(a[this.settings.optgroupValueField]);return!!b&&(a.$order=a.$order||++this.order,this.optgroups[b]=a,b)},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,l=this;if(b=k(b),f=k(c[l.settings.valueField]),null!==b&&l.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=l.options[b].$order,f!==b&&(delete l.options[b],-1!==(g=l.items.indexOf(b))&&l.items.splice(g,1,f)),c.$order=c.$order||j,l.options[f]=c,h=l.renderCache.item,i=l.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),-1!==l.items.indexOf(f)&&(d=l.getItem(b),e=a(l.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),l.lastQuery=null,l.isOpen&&l.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=k(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var b=this;b.loadedSearches={},b.userOptions={},b.renderCache={};var c=b.options;a.each(b.options,function(a,d){-1==b.items.indexOf(a)&&delete c[a]}),b.options=b.sifter.items=c,b.lastQuery=null,b.trigger("option_clear")},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(void 0!==(b=k(b))&&null!==b)for(var d=0,e=c.length;d<e;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){this.buffer=document.createDocumentFragment();for(var d=this.$control[0].childNodes,e=0;e<d.length;e++)this.buffer.appendChild(d[e]);for(var f=a.isArray(b)?b:[b],e=0,g=f.length;e<g;e++)this.isPending=e<g-1,this.addItem(f[e],c);var h=this.$control[0];h.insertBefore(this.buffer,h.firstChild),this.buffer=null},addItem:function(b,c){p(this,c?[]:["change"],function(){var d,e,f,g,h,i=this,j=i.settings.mode;if(b=k(b),-1!==i.items.indexOf(b))return void("single"===j&&i.close());i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.isPending||i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.isPending||i.updateOriginalInput({silent:c}))))})},removeItem:function(b,c){var d,e,f,g=this;d=b instanceof a?b:g.getItem(b),b=k(d.attr("data-value")),-1!==(e=g.items.indexOf(b))&&(d.remove(),d.hasClass("active")&&(f=g.$activeItems.indexOf(d[0]),g.$activeItems.splice(f,1)),g.items.splice(e,1),g.lastQuery=null,!g.settings.persist&&g.userOptions.hasOwnProperty(b)&&g.removeOption(b,c),e<g.caretPos&&g.setCaret(g.caretPos-1),g.refreshState(),g.updatePlaceholder(),g.updateOriginalInput({silent:c}),g.positionDropdown(),g.trigger("item_remove",b,d))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=n(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=k(a[d.settings.valueField]);if("string"!=typeof b)return f();d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),f(a)}),i=g.apply(this,[b,h]);return void 0!==i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a,this.$control_input.prop("required",a),this.$input.prop("required",!a)},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},1===f.tagType){for(d=[],b=0,c=f.items.length;b<c;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+l(f.items[b])+'" selected="selected">'+l(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&(a.hideInput(),a.isBlurring||a.$control_input.blur()),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a[0].getBoundingClientRect().width,top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(a){var b=Math.min(this.caretPos,this.items.length),c=a[0],d=this.buffer||this.$control[0];0===b?d.insertBefore(c,d.firstChild):d.insertBefore(c,d.childNodes[b]),this.setCaret(b+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&8===b.keyCode?-1:1,f=r(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;c<d;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(e<0&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&!1===l.settings.onDelete.apply(l,[g]))return!1;for(void 0!==h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h=this;0!==a&&(h.rtl&&(a*=-1),c=a>0?"last":"first",d=r(h.$control_input[0]),h.isFocused&&!h.isInputHidden?(f=h.$control_input.val().length,(a<0?0===d.start&&0===d.length:d.start===f)&&!f&&h.advanceCaret(a,b)):(g=h.$control.children(".active:"+c),g.length&&(e=h.$control.children(":not(input)").index(g),h.setActiveItem(null),h.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;d<e;d++)g=a(f[d]).detach(),d<b?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),0==--w.count&&w.$testInput&&(w.$testInput.remove(),w.$testInput=void 0),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(b,c){var d,e,f="",g=!1,h=this;return"option"!==b&&"item"!==b||(d=k(c[h.settings.valueField]),g=!!d),g&&(j(h.renderCache[b])||(h.renderCache[b]={}),h.renderCache[b].hasOwnProperty(d))?h.renderCache[b][d]:(f=a(h.settings.render[b].apply(this,[c,l])),"option"===b||"option_create"===b?c[h.settings.disabledField]||f.attr("data-selectable",""):"optgroup"===b&&(e=c[h.settings.optgroupValueField]||"",f.attr("data-group",e),c[h.settings.disabledField]&&f.attr("data-disabled","")),"option"!==b&&"item"!==b||f.attr("data-value",d||""),g&&(h.renderCache[b][d]=f[0]),f[0])},clearCache:function(a){var b=this;void 0===a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return a.length&&("function"!=typeof c||c.apply(b,[a]))&&("string"!=typeof c||new RegExp(c).test(a))&&(!(c instanceof RegExp)||c.test(a))}}),w.count=0,w.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,
create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",disabledField:"disabled",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.disabledField,i=d.optgroupField,j=d.optgroupLabelField,l=d.optgroupValueField,m=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;h<i;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;h<i;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},n=function(b,c){var m,n,o,p,q=c.options,r={},s=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},t=function(b,e){b=a(b);var j=k(b.val());if(j||d.allowEmptyOption)if(r.hasOwnProperty(j)){if(e){var l=r[j][i];l?a.isArray(l)?l.push(e):r[j][i]=[l,e]:r[j][i]=e}}else{var m=s(b)||{};m[f]=m[f]||b.text(),m[g]=m[g]||j,m[h]=m[h]||b.prop("disabled"),m[i]=m[i]||e,r[j]=m,q.push(m),b.is(":selected")&&c.items.push(j)}};for(c.maxItems=b.attr("multiple")?null:1,p=b.children(),m=0,n=p.length;m<n;m++)o=p[m].tagName.toLowerCase(),"optgroup"===o?function(b){var d,e,f,g,i;for(b=a(b),f=b.attr("label"),f&&(g=s(b)||{},g[j]=f,g[l]=f,g[h]=b.prop("disabled"),c.optgroups.push(g)),i=a("option",b),d=0,e=i.length;d<e;d++)t(i[d],f)}(p[m]):"option"===o&&t(p[m])};return this.each(function(){if(!this.selectize){var e=a(this),f=this.tagName.toLowerCase(),g=e.attr("placeholder")||e.attr("data-placeholder");g||d.allowEmptyOption||(g=e.children('option[value=""]').text());var h={placeholder:g,options:[],optgroups:[],items:[]};"select"===f?n(e,h):m(e,h),new w(e,a.extend(!0,{},c,h,b))}})},a.fn.selectize.defaults=w.defaults,a.fn.selectize.support={validity:i},w.define("drag_drop",function(b){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var c=this;c.lock=function(){var a=c.lock;return function(){var b=c.$control.data("sortable");return b&&b.disable(),a.apply(c,arguments)}}(),c.unlock=function(){var a=c.unlock;return function(){var b=c.$control.data("sortable");return b&&b.enable(),a.apply(c,arguments)}}(),c.setup=function(){var b=c.setup;return function(){b.apply(this,arguments);var d=c.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:c.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var b=c.$activeItems?c.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),c.setValue(e),c.setActiveItem(b)}})}}()}}),w.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),w.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||37!==b.keyCode&&39!==b.keyCode?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=37===b.keyCode?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return void 0===b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),(f=k.length)&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;e<f;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(m.after(this,"positionDropdown",e),m.after(this,"refreshOptions",e))}),w.define("remove_button",function(b){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);if("single"===this.settings.mode)return void function(b,c){c.className="remove-single";var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+l(c.title)+'">'+c.label+"</a>",f=function(b,c){return a("<span>").append(b).append(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=a(d.$input.context).attr("id"),i=(a("#"+h),d.settings.render.item);d.settings.render.item=function(a){return f(i.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(a){a.preventDefault(),d.isLocked||d.clear()})}}()}(this,b);!function(b,c){var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+l(c.title)+'">'+c.label+"</a>",f=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=d.settings.render.item;d.settings.render.item=function(a){return f(h.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(b){if(b.preventDefault(),!d.isLocked){var c=a(b.currentTarget).parent();d.setActiveItem(c),d.deleteSelection()&&d.setCaret(d.items.length)}})}}()}(this,b)}),w.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return 8===b.keyCode&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1)>=0&&d<this.items.length?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),w});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count, nesting;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;
		nesting     = search.options.nesting;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(getattr(data, fields[0], nesting), token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(getattr(data, fields[i], nesting), token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return getattr(self.items[result.id], name, options.nesting);
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */
	var getattr = function(obj, name, nesting) {
	    if (!obj || !name) return;
	    if (!nesting) return obj[name];
	    var names = name.split(".");
	    while(names.length && (obj = obj[names.shift()]));
	    return obj;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
		'b': '[b␢βΒB฿𐌁ᛒ]',
		'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
		'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
		'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
		'f': '[fƑƒḞḟ]',
		'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
		'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
		'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
		'j': '[jȷĴĵɈɉʝɟʲ]',
		'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
		'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
		'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
		'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
		'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
		'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
		'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
		's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
		't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
		'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
		'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
		'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
		'x': '[xẌẍẊẋχ]',
		'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
		'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* eslint-disable */
(function(d){function g(a,b){this.b=d(a);this.a=d.extend({},k,b);this.M()}var k={containerHTML:'<div class="multi-select-container">',menuHTML:'<div class="multi-select-menu">',buttonHTML:'<span class="multi-select-button">',menuItemsHTML:'<div class="multi-select-menuitems">',menuItemHTML:'<label class="multi-select-menuitem">',presetsHTML:'<div class="multi-select-presets">',modalHTML:void 0,menuItemTitleClass:"multi-select-menuitem--titled",activeClass:"multi-select-container--open",noneText:"-- Select --",
allText:void 0,presets:void 0,positionedMenuClass:"multi-select-container--positioned",positionMenuWithin:void 0,viewportBottomGutter:20,menuMinHeight:200};d.extend(g.prototype,{M:function(){this.C();this.L();this.F();this.D();this.G();this.J();this.N();this.O();this.b.hide()},C:function(){if(!1===this.b.is("select[multiple]")){ throw Error("$.multiSelect only works on <select multiple> elements"); }},L:function(){this.l=d('label[for="'+this.b.attr("id")+'"]')},F:function(){this.f=d(this.a.containerHTML);
this.b.data("multi-select-container",this.f);this.f.insertAfter(this.b)},D:function(){var a=this;this.g=d(this.a.buttonHTML);this.g.attr({role:"button","aria-haspopup":"true",tabindex:0,"aria-label":this.l.eq(0).text()}).on("keydown.multiselect",function(b){var c=b.which;13===c||32===c?(b.preventDefault(),a.g.click()):40===c?(b.preventDefault(),a.s(),(a.i||a.h).children(":first").focus()):27===c&&a.j()}).on("click.multiselect",function(){a.u()}).appendTo(this.f);this.b.on("change.multiselect",function(){a.w()});
this.w()},w:function(){var a=[],b=[];this.b.find("option").each(function(){var c=d(this).text();a.push(c);d(this).is(":selected")&&b.push(d.trim(c))});this.g.empty();0==b.length?this.g.text(this.a.noneText):b.length===a.length&&this.a.allText?this.g.text(this.a.allText):this.g.text(b.join(", "))},G:function(){var a=this;this.c=d(this.a.menuHTML);this.c.attr({role:"menu"}).on("keyup.multiselect",function(b){27===b.which&&(a.j(),a.g.focus())}).appendTo(this.f);this.H();this.a.presets&&this.K()},H:function(){var a=
this;this.h=d(this.a.menuItemsHTML);this.c.append(this.h);this.b.on("change.multiselect",function(b,c){!0!==c&&a.A()});this.A()},A:function(){var a=this;this.h.empty();this.b.children("optgroup,option").each(function(b,c){"OPTION"===c.nodeName?(b=a.o(d(c),b),a.h.append(b)):a.I(d(c),b)})},v:function(a,b){var c=b.which;38===c?(b.preventDefault(),b=d(b.currentTarget).prev(),b.length?b.focus():this.i&&"menuitem"===a?this.i.children(":last").focus():this.g.focus()):40===c&&(b.preventDefault(),b=d(b.currentTarget).next(),
b.length||"menuitem"===a?b.focus():this.h.children(":first").focus())},K:function(){var a=this;this.i=d(this.a.presetsHTML);this.c.prepend(this.i);d.each(this.a.presets,function(b,c){b=a.b.attr("name")+"_preset_"+b;var f=d(a.a.menuItemHTML).attr({"for":b,role:"menuitem"}).text(" "+c.name).on("keydown.multiselect",a.v.bind(a,"preset")).appendTo(a.i);d("<input>").attr({type:"radio",name:a.b.attr("name")+"_presets",id:b}).prependTo(f).on("change.multiselect",function(){a.b.val(c.options);a.b.trigger("change")})});
this.b.on("change.multiselect",function(){a.B()});this.B()},B:function(){var a=this;d.each(this.a.presets,function(b,c){b=a.b.attr("name")+"_preset_"+b;b=a.i.find("#"+b);a:{c=c.options||[];var f=a.b.val()||[];if(c.length!=f.length){ c=!1; }else{c.sort();f.sort();for(var e=0;e<c.length;e++){ if(c[e]!==f[e]){c=!1;break a} }c=!0}}c?b.prop("checked",!0):b.prop("checked",!1)})},I:function(a,b){var c=this;a.children("option").each(function(f,e){e=c.o(d(e),b+"_"+f);var h=c.a.menuItemTitleClass;0!==f&&(h+="sr");
e.addClass(h).attr("data-group-title",a.attr("label"));c.h.append(e)})},o:function(a,b){var c=this.b.attr("name")+"_"+b;b=d(this.a.menuItemHTML).attr({"for":c,role:"menuitem"}).on("keydown.multiselect",this.v.bind(this,"menuitem")).text(" "+a.text());c=d("<input>").attr({type:"checkbox",id:c,value:a.val()}).prependTo(b);a.is(":disabled")&&c.attr("disabled","disabled");a.is(":selected")&&c.prop("checked","checked");c.on("change.multiselect",function(){d(this).prop("checked")?a.prop("selected",!0):
a.prop("selected",!1);a.trigger("change",[!0])});return b},J:function(){var a=this;this.a.modalHTML&&(this.m=d(this.a.modalHTML),this.m.on("click.multiselect",function(){a.j()}),this.m.insertBefore(this.c))},N:function(){var a=this;d("html").on("click.multiselect",function(){a.j()});this.f.on("click.multiselect",function(b){b.stopPropagation()})},O:function(){var a=this;this.l.on("click.multiselect",function(b){b.preventDefault();b.stopPropagation();a.u()})},s:function(){d("html").trigger("click.multiselect");
this.f.addClass(this.a.activeClass);if(this.a.positionMenuWithin&&this.a.positionMenuWithin instanceof d){var a=this.c.offset().left+this.c.outerWidth(),b=this.a.positionMenuWithin.offset().left+this.a.positionMenuWithin.outerWidth();a>b&&(this.c.css("width",b-this.c.offset().left),this.f.addClass(this.a.positionedMenuClass))}a=this.c.offset().top+this.c.outerHeight();b=d(window).scrollTop()+d(window).height();a>b-this.a.viewportBottomGutter?this.c.css({maxHeight:Math.max(b-this.a.viewportBottomGutter-
this.c.offset().top,this.a.menuMinHeight),overflow:"scroll"}):this.c.css({maxHeight:"",overflow:""})},j:function(){this.f.removeClass(this.a.activeClass);this.f.removeClass(this.a.positionedMenuClass);this.c.css("width","auto")},u:function(){this.f.hasClass(this.a.activeClass)?this.j():this.s()}});d.fn.multiSelect=function(a){return this.each(function(){d.data(this,"plugin_multiSelect")||d.data(this,"plugin_multiSelect",new g(this,a))})}})(jQuery);
/* eslint-enable */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function() {
  // const selector = '.hubspot-popups-customize';

  var observer =  new MutationObserver(function (mutations) {
    mutations.forEach( function (mutation) {
      if (!mutation.addedNodes) { return; }

      for (var i = 0; i < mutation.addedNodes.length; i++) {
        var element = mutation.addedNodes[i];
        if (element.classList && element.classList.contains('leadinModal')) {
          console.log('element', element);

          var popupSettingsEl = document.querySelector(("[data-hspopup-id=\"" + (element.getAttribute('id')) + "\"]"));
          var popupStyle = popupSettingsEl.getAttribute('data-hspopup-style');
          // const popupDescription = popupSettingsEl.getAttribute('data-hspopup-description');

          element.classList.add(("leadinModal--style-" + popupStyle));

          // break down title into smaller dom elements for styling purposes
          var headings = element.querySelectorAll('h1, h2, h3, h4, h5');

          headings.forEach(function (heading) {
            heading.innerHTML = heading.innerText.replace(/\w+:?/g, '<span>$&</span>');
          });

          // add description text below the form
          // const textEl = document.createElement('p');
          // textEl.classList.add('description-text')
          // textEl.innerText = popupDescription;

          // element.querySelector('.leadin-content-body').appendChild(textEl);
        }
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  })
});


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map