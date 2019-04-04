!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=669)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(6),r=function(){function e(){}return Object.defineProperty(e.prototype,"body",{get:function(){return document.querySelector("body")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visibility",{get:function(){return void 0===this.visibilityHelper&&(this.visibilityHelper=new o.VisibilityHelper(this)),this.visibilityHelper},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"screenType",{get:function(){return void 0===this.screenTypeHelper&&(this.screenTypeHelper=new i.ScreenTypeHelper),this.screenTypeHelper},enumerable:!0,configurable:!0}),e.dispatchEvent=function(e,t,n){var i=document.createEvent("CustomEvent");i.initCustomEvent(e,!1,!0,n),void 0===t?window.dispatchEvent(i):t.dispatchEvent(i)},e.prototype.getId=function(e){return""===e.id&&(void 0!==window.performance?e.id="el-"+window.performance.now().toString().replace(".","-"):e.id="el-"+Date.now().toString().replace(".","-")),e.id},e.onDocumentReady=function(e){document.addEventListener("DOMContentLoaded",e)},e.onTabSelected=function(e){$(document).on("click","[data-role=tab-links]",e)},e.prototype.scrollToStart=function(e){this.scrollToPosition(0,e)},e.prototype.scrollToPosition=function(e,t){var n=t/10,i=0;i=void 0===window.scrollY?document.documentElement.scrollTop:window.scrollY;var o=(e-i)/n,r=function(){i+=o,window.scrollTo(0,i),o>0&&e<=i||o<0&&e>=i?window.scrollTo(0,e):setTimeout(r,10)};r()},e.toggleClass=function(e,t,n){void 0===n&&(n=!e.classList.contains(t)),!0===n?e.classList.add(t):e.classList.remove(t)},e.getCrsfToken=function(){return document.querySelector("meta[name=csrf-token]").getAttribute("content")},e}();t.DomHelper=r},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.GET="GET",e.POST="POST"}(t.AjaxRequestMethods||(t.AjaxRequestMethods={}))},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=function(){return function(){var e=this;this.isAsync=!0,this.init=function(t,n,o){void 0===o&&(o=!0),e.method=t,e.url=n,e.isAsync=o,e.headers={"X-Requested-With":"XMLHttpRequest","X-CSRF-Token":i.DomHelper.getCrsfToken()}},this.setData=function(t){e.data=t},this.send=function(t,n){if(void 0===t&&(t=function(e){}),void 0===n&&(n=function(e){}),void 0!==e.method&&void 0!==e.url){for(var i in e.xhr.open(e.method,e.url,e.isAsync),e.headers)e.headers.hasOwnProperty(i)&&e.xhr.setRequestHeader(i,e.headers[i]);e.xhr.send(e.data),e.xhr.onreadystatechange=function(){if(XMLHttpRequest.DONE===e.xhr.readyState)if(200===e.xhr.status)e.response=JSON.parse(e.xhr.responseText),t(e.response),$(document).trigger("ajaxSuccess",[{},{},e.response]);else{var i={result:!1,errors:["Запрос не был выполнен код ошибки:"+e.xhr.status]};n(i)}$(document).trigger("ajaxComplete")}}else n({result:!1,errors:["Не была произведена инициализация"]})},this.setHeaderRequestTypeIsAjax=function(){e.headers["X-Requested-With"]="XMLHttpRequest"},this.xhr=new XMLHttpRequest,this.headers={}}}();t.default=o},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.optimizeResizeEvent=function(t){var n=!1;(t=t||window).addEventListener(e.EVENT_RESIZE,function(){n||(n=!0,requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE)),n=!1}))})}}return Object.defineProperty(e.prototype,"current",{get:function(){return window.innerWidth>this.SCREEN_DESKTOP_MAX_WIDTH?i.ScreenTypes.SCREEN_WIDE:window.innerWidth>this.SCREEN_TABLET_MAX_WIDTH?i.ScreenTypes.SCREEN_DESKTOP:window.innerWidth>this.SCREEN_MOBILE_MAX_WIDTH?i.ScreenTypes.SCREEN_TABLET:window.innerWidth>=this.SCREEN_MOBILE_MIN_WIDTH?i.ScreenTypes.SCREEN_MOBILE:i.ScreenTypes.SCREEN_NOT_SUPPORTED},enumerable:!0,configurable:!0}),e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){if(i[n]===this.current)return!0}return!1},e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e}();t.ScreenTypeHelper=o},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.dom=e,this.displayFallbacks=new Map}return e.prototype.isVisible=function(e){var t=window.getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility},e.prototype.show=function(e){this.setVisibility(e,!0)},e.prototype.hide=function(e){this.setVisibility(e,!1)},e.prototype.toggle=function(e,t){void 0===t&&(t=!this.isVisible(e)),this.setVisibility(e,t)},e.isElementInVisibilityArea=function(e,t){var n=e.getBoundingClientRect(),i=0<=n.top&&n.top<=window.innerHeight,o=0<=n.bottom&&n.bottom<=window.innerHeight;return!0===t?i&&o:i||o},e.prototype.setVisibility=function(e,t){"none"!==e.style.display&&this.displayFallbacks.set(e.id,e.style.display),!1===t?e.style.display="none":!0===this.displayFallbacks.has(e.id)?e.style.display=this.displayFallbacks.get(e.id):e.style.display=""},e}();t.VisibilityHelper=i},669:function(e,t,n){e.exports=n(670)},670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(671),r=function(){for(var e=0,t=Array.prototype.slice.call(document.querySelectorAll('[data-role="digital-product-popover"]:not([data-initialized])'));e<t.length;e++){var n=t[e];n.addEventListener("click",function(e){o.DigitalProductPopover.renderWidget(e.currentTarget)}),n.dataset.initialized=!0}};i.DomHelper.onDocumentReady(r),$(window).on(window.EVENT_PRODUCTS_LOADED,r)},671:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(24)),r=n(21),s=function(){function e(){}return e.renderWidget=function(t){e.isLoading||(!1===e.loadedContent.hasOwnProperty(t.dataset.url)?e.loadContentFromAjax(t):e.renderContent(t))},e.renderContent=function(t){$(t.dataset.contentTarget).html(e.loadedContent[t.dataset.url]),$(t).popover("toggle")},e.loadContentFromAjax=function(t){e.isLoading=!0;var n=new o.default;n.init(r.AjaxRequestMethods.GET,t.dataset.url,!0),n.setHeaderRequestTypeIsAjax(),n.send(function(n){e.isLoading=!1,e.loadedContent[t.dataset.url]=n.html,e.renderContent(t)})},e.loadedContent={},e.isLoading=!1,e}();t.DigitalProductPopover=s}});