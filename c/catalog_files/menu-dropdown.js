!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=743)}({21:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(7);n.Bem_toggleModifier=function(e,n,t,r){var u=n+"_"+t;o.Dom_toggleClass(e,u,r)}},5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Dom_onDocumentReady=function(e){document.addEventListener("DOMContentLoaded",e)}},7:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Dom_toggleClass=function(e,n,t){void 0===t&&(t=!e.classList.contains(n)),!0===t?e.classList.add(n):e.classList.remove(n)}},743:function(e,n,t){e.exports=t(744)},744:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(21);t(5).Dom_onDocumentReady(function(){var e=[].slice.call(document.querySelectorAll(".menu-dropdown")),n=null,t=null;document.addEventListener("click",function(){if(e.forEach(function(e){o.Bem_toggleModifier(e,"menu-dropdown","active",!1)}),t===n)return n=null,void(t=null);null!==n&&o.Bem_toggleModifier(n,"menu-dropdown","active",!0),t=n,n=null}),e.forEach(function(e){e.addEventListener("click",function(e){n=e.currentTarget})})})}});