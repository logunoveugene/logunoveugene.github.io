!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1398)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},1398:function(e,t,n){e.exports=n(1399)},1399:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(1400));window.MenuDesktop=new s.default},1400:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(1401)),o=function(){function e(){}return e.prototype.build=function(e){return new s.default(e)},e}();t.default=o},1401:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),o=n(9),r=i(n(1402)),u=function(){function e(e){this._roots=e,this._widgetHeight=null,this._screen=new o.ScreenTypeHelper,this.init()}return Object.defineProperty(e.prototype,"element",{get:function(){return this._element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"roots",{get:function(){return this._roots},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"widgetHeight",{get:function(){return null===this._widgetHeight&&(this._widgetHeight=this._element.offsetHeight),this._widgetHeight},enumerable:!0,configurable:!0}),e.prototype.init=function(){var e=this;this._element=document.createElement("div"),this._element.classList.add("menu-desktop"),this._options={showTimeout:300,hideTimeout:300,maxColumnsCount:this.getColumnsCount(),innerPadding:30},this._screen.addChangeScreenTypeListener(function(){e._widgetHeight=null,e._options.maxColumnsCount=e.getColumnsCount()}),this._roots.forEach(function(t,n){e._element.appendChild(new r.default(e,n,t).element)})},e.prototype.getColumnsCount=function(){return this._screen.check(s.ScreenTypes.SCREEN_WIDE)?3:2},e}();t.default=u},1402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=n(1403),o=function(){function e(e,t,n){this._menu=e,this._index=t,this._source=n,this.init()}return Object.defineProperty(e.prototype,"element",{get:function(){return this._element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"menu",{get:function(){return this._menu},enumerable:!0,configurable:!0}),e.prototype.init=function(){var e=this;this._element=document.createElement("div"),this._element.classList.add("menu-desktop__root"),Object.keys(this._source.params).forEach(function(t){"class"===t?i.Dom_addClasses(e._element,e._source.params[t].split(" ")):e._element.setAttribute(t,e._source.params[t])});var t=document.createElement("span");t.classList.add("menu-desktop__root-icon"),this._source.icon&&(t.style.backgroundImage="url("+this._source.icon+")"),this._element.appendChild(t);var n=document.createElement("div");n.classList.add("menu-desktop__root-info"),this._element.appendChild(n);var o=window.links.createLinkBase(this._source.title,this._source.url,!1);if(o.classList.add("menu-desktop__root-title"),n.appendChild(o),0!==this._source.subtitles.length){var r=document.createElement("div");r.classList.add("menu-desktop__root-subtitles"),this._source.subtitles.forEach(function(e){var t=window.links.createLinkBase(e.title,e.url,!1);t.classList.add("menu-desktop__root-subtitle"),r.appendChild(t)}),n.appendChild(r)}if(0!==this._source.childs.length){var u=this._index<=Math.ceil(this._menu.roots.length/2);new s.SubMenu(this,u)}},e}();t.default=o},1403:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=n(1404),o=function(){function e(e,t){this._root=e,this._isPositionTop=t,this._secondLevelCounts=[],this._secondLevelMenus=new Map,this._element=null,this.timersHandlers={showId:void 0,hideId:void 0},this.init()}return Object.defineProperty(e.prototype,"isOptimalHeight",{get:function(){return this.menu.widgetHeight-10>=this._element.clientHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this._element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"menu",{get:function(){return this._root.menu},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.initParentMenuEvents()},e.prototype.render=function(){var e=this;this._element=document.createElement("div"),this._element.classList.add("menu-desktop__submenu"),this._isPositionTop?this._element.classList.add("menu-desktop__submenu_top"):this._element.classList.add("menu-desktop__submenu_bottom"),null!==this._root.source.rsu&&this.renderRsuBlock(this._root.source.rsu),this._root.source.childs.forEach(function(t){var n=window.links.createLinkBase(t.title,t.url,!1);n.classList.add("menu-desktop__first-level"),e._element.appendChild(n);var i=document.createElement("div");i.classList.add("menu-desktop__second-level-wrap"),e._element.appendChild(i),t.childs.forEach(function(t){var n=t.title+'<span class="menu-desktop__second-level-count">'+t.count+"</span>",o=window.links.createLinkBase(n,t.url,!1);o.classList.add("menu-desktop__second-level"),i.appendChild(o),0!==t.childs.length&&new s.PopupMenu(e,o,t.childs)});var o=t.childs.length;-1===e._secondLevelCounts.indexOf(o)&&e._secondLevelCounts.push(o),!1===e._secondLevelMenus.has(o)&&e._secondLevelMenus.set(o,[]),e._secondLevelMenus.get(o).push(i)}),this._root.element.appendChild(this._element)},e.prototype.initParentMenuEvents=function(){var e=this;this._root.element.onmouseenter=function(){e.clearTimers(),e.timersHandlers.showId=setTimeout(function(){e.show()},e.menu.options.showTimeout)},this._root.element.onmouseleave=function(){e.clearTimers(),e.timersHandlers.hideId=setTimeout(function(){e.hide()},e.menu.options.hideTimeout)}},e.prototype.clearTimers=function(){clearTimeout(this.timersHandlers.hideId),clearTimeout(this.timersHandlers.showId)},e.prototype.show=function(){null===this._element&&this.render(),this.clearTimers(),this._element.style.display="block",this.calcColumns()},e.prototype.hide=function(){this.clearTimers(),null!==this._element&&(this._element.style.display="none")},e.prototype.calcColumns=function(){var e=this;if(!0!==this.isOptimalHeight)for(var t=this._secondLevelCounts.sort(function(e,t){return t-e}),n=function(n){t.forEach(function(t){e.isOptimalHeight||e._secondLevelMenus.get(t).forEach(function(t){e.isOptimalHeight||e.buildColumns(t,n)})})},i=2;i<=this.menu.options.maxColumnsCount;i++)n(i)},e.prototype.buildColumns=function(e,t){var n=[].slice.call(e.children),i=Math.ceil(n.length/t),s=n[0].offsetWidth+this.menu.options.innerPadding;e.style.width=s*t+"px";var o=0;n.forEach(function(e,t){var n=Math.floor(t/i);0!==n&&(0===t%i&&(o=0),e.style.position="absolute",e.style.top=o+"px",e.style.left=s*n+"px",o+=e.offsetHeight+8)})},e.prototype.renderRsuBlock=function(e){var t=document.createElement("div");t.classList.add("menu-assembly");var n=document.createElement("div");n.classList.add("menu-assembly__links");var s=document.createElement("div");s.classList.add("menu-assembly__title"),s.innerText="Собери свой компьютер",n.appendChild(s);var o=window.links.createLinkBlue("Собрать",e.configuratorLink,!1);i.Dom_addClasses(o,["menu-assembly__link","menu-assembly__link_configurator"]),n.appendChild(o);var r=window.links.createLinkBlue("Пользовательские сборки",e.userPCLink,!1);i.Dom_addClasses(r,["menu-assembly__link","menu-assembly__link_user-pc"]),n.appendChild(r),t.appendChild(n);var u=document.createElement("i");u.classList.add("menu-assembly__icon"),t.appendChild(u),this._element.appendChild(t)},e}();t.SubMenu=o},1404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t,n){this._subMenu=e,this._parent=t,this._items=n,this.OFFSET_LEFT=20,this.OFFSET_TOP=-30,this._element=null,this._icon=null,this._isPositioned=!1,this._timers={show:void 0,hide:void 0},this.init()}return e.prototype.init=function(){var e=this;this.addPopupIcon(),this._parent.onmouseenter=function(){e.clearTimers(),e._timers.show=setTimeout(function(){e.show()},400)},this._parent.onmouseleave=function(){e.clearTimers(),e._timers.hide=setTimeout(function(){e.hide()},400)}},e.prototype.clearTimers=function(){clearTimeout(this._timers.hide),clearTimeout(this._timers.show)},e.prototype.show=function(){null===this._element&&this.render(),this._element.style.display="block",!1===this._isPositioned&&(this._isPositioned=!0,this.calcPosition())},e.prototype.hide=function(){null!==this._element&&(this._element.style.display="none")},e.prototype.render=function(){var t=this;this._element=document.createElement("span"),this._element.classList.add("menu-desktop__popup"),this._items.forEach(function(n){var i=n.title+'<span class="menu-desktop__popup-count">'+n.count+"</span>",s=window.links.createLinkBase(i,n.url,!1);s.classList.add("menu-desktop__popup-link"),t._element.appendChild(s),0!==n.childs.length&&new e(t._subMenu,s,n.childs)}),this._parent.appendChild(this._element)},e.prototype.calcPosition=function(){var e=this._subMenu.element.getBoundingClientRect().bottom,t=this._icon.offsetLeft+this.OFFSET_LEFT;this._element.style.left=t+"px";var n=this._element.getBoundingClientRect(),i=document.documentElement.clientWidth;n.left+n.width>i&&(this._element.style.left=t-(n.left+n.width-i+10)+"px");var s=this.OFFSET_TOP,o=this._parent.getBoundingClientRect().top+s+this._element.clientHeight;if(o>e){var r=o-e-this.OFFSET_TOP,u=this._parent.getBoundingClientRect().top-this._subMenu.menu.element.getBoundingClientRect().top;s=-1*Math.min(r,u)}this._element.style.top=s+"px"},e.prototype.addPopupIcon=function(){this._icon=document.createElement("i"),this._icon.classList.add("menu-desktop__popup-icon"),this._parent.appendChild(this._icon)},e}();t.PopupMenu=i},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_addClasses=function(e,t){t.forEach(function(t){e.classList.add(t)})}},9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){var n=!1;(t=t||window).addEventListener(e.EVENT_RESIZE,function(){n||(n=!0,requestAnimationFrame(function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var i=e.calcCurrent();e._currentScreenType!==i&&(e._currentScreenType=i,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),n=!1}))})}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!0,configurable:!0}),e.prototype.calcCurrent=function(){var e=window.matchMedia;if(e){if(e("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_WIDE;if(e("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_DESKTOP;if(e("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_TABLET;if(e("(min-width: "+(this.SCREEN_MOBILE_MIN_WIDTH+1)+"px)").matches)return i.ScreenTypes.SCREEN_MOBILE}else{var t=window.innerWidth;if(t>this.SCREEN_DESKTOP_MAX_WIDTH)return i.ScreenTypes.SCREEN_WIDE;if(t>this.SCREEN_TABLET_MAX_WIDTH)return i.ScreenTypes.SCREEN_DESKTOP;if(t>this.SCREEN_MOBILE_MAX_WIDTH)return i.ScreenTypes.SCREEN_TABLET;if(t>=this.SCREEN_MOBILE_MIN_WIDTH)return i.ScreenTypes.SCREEN_MOBILE}return i.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,i=e;n<i.length;n++){if(i[n]===this.current)return!0}return!1},e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.ScreenTypeHelper=s}});