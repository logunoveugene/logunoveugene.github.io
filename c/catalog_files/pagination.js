!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1265)}({1265:function(t,e,n){t.exports=n(1266)},1266:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(167));window.PaginationProvider=new i.default},167:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(168)),r=function(){function t(){}return t.getPaginationById=function(t){var e=document.getElementById(t);return null===e?null:new i.default(e)},t}();e.default=r},168:function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(169)),r=function(){function t(t){this.SELECTOR_PAGE='[data-role="pagination-page"]',this.SELECTOR_SHOW_MORE_BTN='[data-role="show-more-btn"]',this.onChangePageCallback=null,this.onShowMoreCallback=null,this.showMoreBtn=null,this.container=t,this.showMoreBtn=this.container.querySelector(this.SELECTOR_SHOW_MORE_BTN)}return t.prototype.init=function(){null!==this.onChangePageCallback&&this.initPages(),this.isShowMoreBtnVisible()&&null!==this.onShowMoreCallback&&this.initShowMoreBtn()},t.prototype.setOnChangePageCallback=function(t){return this.onChangePageCallback=t,this},t.prototype.setOnShowMoreCallback=function(t){return this.onShowMoreCallback=t,this},t.prototype.isShowMoreBtnVisible=function(){return null!==this.showMoreBtn},t.prototype.initPages=function(){var t=this,e=[].slice.call(this.container.querySelectorAll(this.SELECTOR_PAGE));[].slice.call(e).forEach(function(e){var n=e.querySelector("a");if(!t.isLinkDisabled(n)){var o=parseInt(e.dataset.pageNumber,10),r=n.href,a=new i.default(o,r);n.addEventListener("click",function(e){e.preventDefault(),t.onChangePageCallback(a)})}})},t.prototype.initShowMoreBtn=function(){var t=this;if(null!==this.showMoreBtn){var e=this.showMoreBtn.dataset.url,n=parseInt(this.showMoreBtn.dataset.pageNumber,10),o=new i.default(n,e);this.showMoreBtn.addEventListener("click",function(){t.onShowMoreCallback(o)})}},t.prototype.isLinkDisabled=function(t){return t.classList.contains("pagination-widget__page-link_disabled")},t}();e.default=r},169:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return function(t,e){this.number=t,this.url=e}}();e.default=o}});