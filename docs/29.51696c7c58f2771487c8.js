(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{286:function(t,o,n){"use strict";n.d(o,"b",function(){return e}),n.d(o,"a",function(){return i}),n.d(o,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var n in o)o.hasOwnProperty(n)&&(t[n]=o[n])})(t,o)};function e(t,o){function n(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}function i(t,o,n,r){return new(n||(n=Promise))(function(e,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function l(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?e(t.value):new n(function(o){o(t.value)}).then(a,l)}c((r=r.apply(t,o||[])).next())})}function a(t,o){var n,r,e,i,a={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(e=2&i[0]?r.return:i[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,i[1])).done)return e;switch(r=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(e=(e=a.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){a.label=i[1];break}if(6===i[0]&&a.label<e[1]){a.label=e[1],e=i;break}if(e&&a.label<e[2]){a.label=e[2],a.ops.push(i);break}e[2]&&a.ops.pop(),a.trys.pop();continue}i=o.call(t,a)}catch(t){i=[6,t],r=0}finally{n=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}},287:function(t,o,n){"use strict";n.d(o,"a",function(){return a}),n.d(o,"b",function(){return c}),n.d(o,"c",function(){return i}),n.d(o,"d",function(){return e});var r=n(286);function e(t,o){return null!==o.closest(t)}function i(t){var o;return"string"==typeof t&&t.length>0?((o={"ion-color":!0})["ion-color-"+t]=!0,o):void 0}function a(t){var o={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return o[t]=!0}),o}var l=/^[a-z][a-z0-9+\-.]*:/;function c(t,o,n,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return null==o||"#"===o[0]||l.test(o)?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(o,e)];case 2:return[2,!1]}})})}},288:function(t,o,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function e(t){return!!t.shadowRoot&&!!t.attachShadow}function i(t){var o=t.closest("ion-item");return o?o.querySelector("ion-label"):null}function a(t,o,n,r,i){if(t||e(o)){var a=o.querySelector("input.aux-input");a||((a=o.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),o.appendChild(a)),a.disabled=i,a.name=n,a.value=r||""}}function l(t,o,n){return Math.max(t,Math.min(o,n))}function c(t){return t.timeStamp||Date.now()}function s(t){if(t){var o=t.changedTouches;if(o&&o.length>0){var n=o[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function u(t,o){var n="rtl"===t.document.dir;switch(o){case"start":return n;case"end":return!n;default:throw new Error('"'+o+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,o){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),o)}}function f(t,o){var n;return void 0===o&&(o=0),function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];clearTimeout(n),n=setTimeout.apply(void 0,[t,o].concat(r))}}n.d(o,"a",function(){return r}),n.d(o,"b",function(){return c}),n.d(o,"c",function(){return e}),n.d(o,"d",function(){return i}),n.d(o,"e",function(){return a}),n.d(o,"f",function(){return d}),n.d(o,"g",function(){return u}),n.d(o,"h",function(){return l}),n.d(o,"i",function(){return f}),n.d(o,"j",function(){return s})},299:function(t,o,n){"use strict";n.d(o,"a",function(){return r});var r=function(t,o){return function(t){return e(t)}(t).indexOf(o)>-1},e=function(t){t.Ionic=t.Ionic||{};var o=t.Ionic.platforms;return null==o&&(o=t.Ionic.platforms=i(t)).forEach(function(o){return t.document.documentElement.classList.add("plt-"+o)}),o},i=function(t){return Object.keys(b).filter(function(o){return b[o](t)})},a=function(t){return f(t,/iPad/i)},l=function(t){return f(t,/android|sink/i)},c=function(t){return p(t,"(any-pointer:coarse)")},s=function(t){return u(t)||d(t)},u=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var o=t.Capacitor;return!(!o||!o.isNative)},f=function(t,o){return!(!t.navigator||!t.navigator.userAgent)&&o.test(t.navigator.userAgent)},p=function(t,o){return!!t.matchMedia&&t.matchMedia(o).matches},b={ipad:a,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:l,phablet:function(t){var o=t.innerWidth,n=t.innerHeight,r=Math.min(o,n),e=Math.max(o,n);return r>390&&r<520&&e>620&&e<800},tablet:function(t){var o=t.innerWidth,n=t.innerHeight,r=Math.min(o,n),e=Math.max(o,n);return a(t)||function(t){return l(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&e>780&&e<1400},cordova:u,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:c,mobileweb:function(t){return c(t)&&!s(t)},desktop:function(t){return!c(t)},hybrid:s}},84:function(t,o,n){"use strict";n.r(o),n.d(o,"IonApp",function(){return c}),n.d(o,"IonButtons",function(){return s}),n.d(o,"IonContent",function(){return u}),n.d(o,"IonFooter",function(){return d}),n.d(o,"IonHeader",function(){return f}),n.d(o,"IonTitle",function(){return p}),n.d(o,"IonToolbar",function(){return b});var r=n(286),e=n(10),i=n(287),a=n(288),l=n(299),c=function(){function t(){}return t.prototype.componentDidLoad=function(){var t=this;Object(a.a)(function(){var o=t.win,r=t.config,e=t.queue;r.getBoolean("_testing")||function(t,o){n.e(5).then(n.bind(null,305)).then(function(n){return n.startTapClick(t.document,o)})}(o,r),function(t,o){o.getBoolean("inputShims",function(t){return Object(l.a)(t,"ios")&&Object(l.a)(t,"mobile")}(t))&&n.e(3).then(n.bind(null,306)).then(function(n){return n.startInputShims(t.document,o)})}(o,r),function(t,o,r){o.getBoolean("statusTap",Object(l.a)(t,"hybrid"))&&n.e(6).then(n.bind(null,303)).then(function(o){return o.startStatusTap(t,r)})}(o,r,e),function(t,o){o.getBoolean("hardwareBackButton",Object(l.a)(t,"hybrid"))&&n.e(7).then(n.bind(null,302)).then(function(o){return o.startHardwareBackButton(t)})}(o,r),function(t){n.e(4).then(n.bind(null,304)).then(function(o){return o.startFocusVisible(t.document)})}(o)})},t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t["ion-page"]=!0,t["force-statusbar-padding"]=this.config.getBoolean("_forceStatusbarPadding"),t)}},Object.defineProperty(t,"is",{get:function(){return"ion-app"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"},enumerable:!0,configurable:!0}),t}();var s=function(){function t(){}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}return t.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&Object(l.a)(this.win,"mobile"))},t.prototype.componentDidLoad=function(){this.resize()},t.prototype.componentDidUnload=function(){this.onScrollEnd()},t.prototype.onClick=function(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())},t.prototype.resize=function(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},t.prototype.readDimensions=function(){var t=function(t){return t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),o=Math.max(this.el.offsetTop,0),n=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||n!==this.cBottom)&&(this.cTop=o,this.cBottom=n,this.el.forceUpdate())},t.prototype.onScroll=function(t){var o=this,n=Date.now(),r=!this.isScrolling;this.lastScroll=n,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(n){o.queued=!1,o.detail.event=t,function(t,o,n,r){var e=t.currentX,i=t.currentY,a=t.timeStamp,l=o.scrollLeft,c=o.scrollTop;r&&(t.startTimeStamp=n,t.startX=l,t.startY=c,t.velocityX=t.velocityY=0),t.timeStamp=n,t.currentX=t.scrollLeft=l,t.currentY=t.scrollTop=c,t.deltaX=l-t.startX,t.deltaY=c-t.startY;var s=n-a;if(s>0&&s<100){var u=(c-i)/s;t.velocityX=(l-e)/s*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}}(o.detail,o.scrollEl,n,r),o.ionScroll.emit(o.detail)}))},t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},t.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},t.prototype.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},t.prototype.scrollByPoint=function(t,o,n){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,n)},t.prototype.scrollToPoint=function(t,o,n){return void 0===n&&(n=0),r.a(this,void 0,void 0,function(){var e,i,a,l,c,s,u,d,f;return r.c(this,function(r){return e=this.scrollEl,n<32?(null!=o&&(e.scrollTop=o),null!=t&&(e.scrollLeft=t),[2]):(a=0,l=new Promise(function(t){return i=t}),c=e.scrollTop,s=e.scrollLeft,u=null!=o?o-c:0,d=null!=t?t-s:0,f=function(t){var o=Math.min(1,(t-a)/n)-1,r=Math.pow(o,3)+1;0!==u&&(e.scrollTop=Math.floor(r*u+c)),0!==d&&(e.scrollLeft=Math.floor(r*d+s)),r<1?requestAnimationFrame(f):i()},requestAnimationFrame(function(t){a=t,f(t)}),[2,l])})})},t.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},t.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))},t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(i.c)(this.color),(t={},t[""+this.mode]=!0,t["content-sizing"]=Object(i.d)("ion-popover",this.el),t.overscroll=!!this.forceOverscroll,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}}},t.prototype.render=function(){var t=this,o=this.scrollX,n=this.scrollY,r=this.forceOverscroll;return this.resize(),[Object(e.b)("div",{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":n,overscroll:(o||n)&&!!r},ref:function(o){return t.scrollEl=o},onScroll:function(o){return t.onScroll(o)}},Object(e.b)("slot",null)),Object(e.b)("slot",{name:"fixed"})]},Object.defineProperty(t,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}'},enumerable:!0,configurable:!0}),t}();var d=function(){function t(){this.translucent=!1}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t["footer-"+this.mode]=!0,t["footer-translucent"]=this.translucent,t["footer-translucent-"+this.mode]=this.translucent,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-footer"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),f=function(){function t(){this.translucent=!1}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t["header-"+this.mode]=!0,t["header-translucent"]=this.translucent,t["header-translucent-"+this.mode]=this.translucent,t)}},Object.defineProperty(t,"is",{get:function(){return"ion-header"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){}return t.prototype.getMode=function(){var t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode},t.prototype.hostData=function(){var t,o=this.getMode();return{class:Object.assign((t={},t[""+o]=!0,t["title-"+o]=!0,t),Object(i.c)(this.color))}},t.prototype.render=function(){return[Object(e.b)("div",{class:"toolbar-title"},Object(e.b)("slot",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;color:var(--color)}:host,:host(.title-ios){-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.title-ios){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios,:host-context([dir=rtl]):host(.title-ios){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}(),b=function(){function t(){this.childrenStyles=new Map}return t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(function(t){return"start"===t.slot});o&&o.classList.add("buttons-first-slot");var n=t.reverse(),r=n.find(function(t){return"end"===t.slot})||n.find(function(t){return"primary"===t.slot})||n.find(function(t){return"secondary"===t.slot});r&&r.classList.add("buttons-last-slot")},t.prototype.childrenStyle=function(t){t.stopPropagation();var o=t.target.tagName,n=t.detail,r={},e=this.childrenStyles.get(o)||{},i=!1;Object.keys(n).forEach(function(t){var o="toolbar-"+t,a=n[t];a!==e[o]&&(i=!0),a&&(r[o]=!0)}),i&&(this.childrenStyles.set(o,r),this.el.forceUpdate())},t.prototype.hostData=function(){var t,o={};return this.childrenStyles.forEach(function(t){Object.assign(o,t)}),{class:Object.assign((t={},t[""+this.mode]=!0,t),o,Object(i.c)(this.color))}},t.prototype.render=function(){return[Object(e.b)("div",{class:"toolbar-background"}),Object(e.b)("div",{class:"toolbar-container"},Object(e.b)("slot",{name:"start"}),Object(e.b)("slot",{name:"secondary"}),Object(e.b)("div",{class:"toolbar-content"},Object(e.b)("slot",null)),Object(e.b)("slot",{name:"primary"}),Object(e.b)("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"childrenStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}()}}]);