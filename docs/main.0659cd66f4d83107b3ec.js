!function(e){function t(t){for(var o,s,l=t[0],c=t[1],a=t[2],u=0,h=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(d&&d(t);h.length;)h.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],o=!0,l=1;l<r.length;l++){var c=r[l];0!==n[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},n={0:0},i=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(e){return s.p+""+({1:"modal"}[e]||e)+"."+{1:"f0935470c8edda1842d7"}[e]+".js"}(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(a);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}n[e]=void 0}};var a=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var d=c;i.push([18,2]),r()}({18:function(e,t,r){"use strict";r.r(t);r(5),r(6);var o=class{constructor(){this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}events(){this.menuIcon.addEventListener("click",()=>this.toggleTheMenu())}toggleTheMenu(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}},n=r(1),i=r.n(n),s=r(0),l=r.n(s);var c=class{constructor(e,t){this.itemsToReveal=e,this.thresholdPercent=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=i()(this.calcCaller,200).bind(this),this.events()}events(){window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",l()(()=>{console.log("resize just ran"),this.browserHeight=window.innerHeight},333))}calcCaller(){console.log("Scroll function ran"),this.itemsToReveal.forEach(e=>{0==e.isRevealed&&this.calculateIfScrolled(e)})}calculateIfScrolled(e){if(window.scrollY+this.browserHeight>e.offsetTop){console.log("Element was calculated"),e.getBoundingClientRect().y/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}}hideInitially(){this.itemsToReveal.forEach(e=>{e.classList.add("reveal-item"),e.isRevealed=!1}),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}};var a=class{constructor(){this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}events(){window.addEventListener("scroll",i()(()=>this.runOnScroll(),200)),window.addEventListener("resize",l()(()=>{console.log("resize just ran"),this.browserHeight=window.innerHeight},333))}runOnScroll(){this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach(e=>this.calcSection(e))}determineScrollDirection(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}calcSection(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){let t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){let t=e.getAttribute("data-matching-link");document.querySelectorAll(`.primary-nav a:not(${t})`).forEach(e=>e.classList.remove("is-current-link")),document.querySelector(t).classList.add("is-current-link")}}}};let d;new o,new a,new c(document.querySelectorAll(".feature-item"),75),new c(document.querySelectorAll(".testimonial"),60),document.querySelectorAll(".open-modal").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),void 0===d?r.e(1).then(r.bind(null,19)).then(e=>{d=new e.default,setTimeout(()=>d.openTheModal(),20)}).catch(()=>console.log("There was a problem loading Modal")):d.openTheModal()})})},5:function(e,t,r){}});