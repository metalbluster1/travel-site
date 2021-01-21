(()=>{"use strict";var e,t,n={567:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(90);const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header--menu-icon"),this.menuContent=document.querySelector(".site-header--menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header--menu-content__is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header--menu-icon--close-x")}}])&&r(t.prototype,n),e}();var o=n(493),l=n.n(o),s=n(279),a=n.n(s);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=l()(this.calcCaller,200).bind(this),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",a()((function(){console.log("Resize just ran"),e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;console.log("scroll function ran"),this.itemsToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element was calculated"),e.getBoundingClientRect().y/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,n),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h;new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",l()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",a()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),e}()),new u(document.querySelectorAll(".feature-items"),75),new u(document.querySelectorAll(".testimonial"),60),new i,new i,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===h?n.e(582).then(n.bind(n,222)).then((function(e){h=new e.default,setTimeout((function(){return h.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):h.openTheModal()}))}))}},r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,i),t.exports}i.m=n,i.x=e=>{},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>"modal.0c514c833c2b10fd789a.js",i.miniCssF=e=>"style."+{216:"10274055adcdae0738b0",582:"0c514c833c2b10fd789a"}[e]+".css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="travel-site:",i.l=(n,r,o)=>{if(e[n])e[n].push(r);else{var l,s;if(void 0!==o)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var u=a[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[r];var d=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var i=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0},t=[[567,216]];i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,i)=>{r=e[t]=[n,i]}));n.push(r[2]=o);var l=i.p+i.u(t),s=new Error;i.l(l,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",s.name="ChunkLoadError",s.type=o,s.request=l,r[1](s)}}),"chunk-"+t)}};var n=e=>{},r=(r,o)=>{for(var l,s,[a,c,u,d]=o,h=0,f=[];h<a.length;h++)s=a[h],i.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(l in c)i.o(c,l)&&(i.m[l]=c[l]);for(u&&u(i),r&&r(o);f.length;)f.shift()();return d&&t.push.apply(t,d),n()},o=self.webpackChunktravel_site=self.webpackChunktravel_site||[];function l(){for(var n,r=0;r<t.length;r++){for(var o=t[r],l=!0,s=1;s<o.length;s++){var a=o[s];0!==e[a]&&(l=!1)}l&&(t.splice(r--,1),n=i(i.s=o[0]))}return 0===t.length&&(i.x(),i.x=e=>{}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var s=i.x;i.x=()=>(i.x=s||(e=>{}),(n=l)())})(),i.x()})();