(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{306:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return m});var o=n(288),r=new WeakMap;function a(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?function(t,e,n){var o=e.parentNode,a=e.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o.appendChild(a),r.set(t,a);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+i+"px,"+n+"px,0) scale(0)"}(t,e,o):function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""}(t,e))}function i(t){return t===t.getRootNode().activeElement}var u="input, textarea, [no-blur]";var c=.3;function s(t,e,n){return function(t,e,n,o){var r=t.top,a=t.bottom,i=e.top,u=i+15,s=.5*Math.min(e.bottom,o-n)-a,l=u-r,d=Math.round(s<0?-s:l>0?-l:0),f=Math.min(d,r-i),v=Math.abs(f);return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,v/c)),scrollPadding:n,inputSafeY:4-(r-u)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}function l(t,e,n,r){var u,c=function(t){u=Object(o.j)(t)},l=function(c){if(u){var l=Object(o.j)(c);(function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y;return o*o+r*r>t*t}return!1})(6,u,l)||i(e)||(c.preventDefault(),c.stopPropagation(),function(t,e,n,o){var r=s(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(a(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){a(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r))}};return t.addEventListener("touchstart",c,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",c,!0),t.removeEventListener("touchend",l,!0)}}var d="$ionPaddingTimer";function f(t,e){if("INPUT"===t.tagName&&!(t.parentElement&&"ION-INPUT"===t.parentElement.tagName||t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[d];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[d]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var v=!0,p=!0;function m(t,e){var n=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),r=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),s=e.getBoolean("scrollPadding",!0),d=new WeakMap,m=new WeakMap;function E(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),u=t.closest("ion-content");if(e){if(u&&r&&!d.has(t)){var c=function(t,e,n){if(!n||!e)return function(){};var o=function(n){i(e)&&a(t,e,n)},r=function(){return a(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}}(t,e,u);d.set(t,c)}u&&o&&!m.has(t)&&(c=l(t,e,u,n),m.set(t,c))}}c&&v&&function(t){var e=!0,n=!1;function o(){n=!0}function r(){e=!0}function a(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(u)){var a=o.target;a!==r&&(a.matches(u)||a.closest(u)||(e=!1,setTimeout(function(){e||r.blur()},50)))}}}t.addEventListener("ionScrollStart",o),t.addEventListener("focusin",r,!0),t.addEventListener("touchend",a,!1)}(t),s&&p&&function(t,e){function n(t){f(t.target,e)}function o(t){f(t.target,0)}t.addEventListener("focusin",n),t.addEventListener("focusout",o)}(t,n);for(var g=0,h=Array.from(t.querySelectorAll("ion-input, ion-textarea"));g<h.length;g++)E(h[g]);t.body.addEventListener("ionInputDidLoad",function(t){E(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,r&&((n=d.get(e))&&n(),d.delete(e)),o&&((n=m.get(e))&&n(),m.delete(e))})}}}]);