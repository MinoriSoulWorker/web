(function(e){function n(n){for(var r,u,a=n[0],i=n[1],s=n[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(p.length)p.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0fc588df":"eb7fee7d","chunk-205793b5":"5e432dda","chunk-21e1e514":"6176e37c","chunk-2d0af2da":"30c01fe1","chunk-44244d16":"29a7f83f","chunk-721f04a0":"e923ee47","chunk-ed1f2948":"69cdf9a9"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0fc588df":1,"chunk-205793b5":1,"chunk-21e1e514":1,"chunk-44244d16":1,"chunk-721f04a0":1,"chunk-ed1f2948":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fc588df":"636d8afe","chunk-205793b5":"56b03090","chunk-21e1e514":"0e433876","chunk-2d0af2da":"31d6cfe0","chunk-44244d16":"5d194975","chunk-721f04a0":"7abac9bc","chunk-ed1f2948":"00bb8722"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return n()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){s=p[a],f=s.getAttribute("data-href");if(f===r||f===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],h.parentNode.removeChild(h),t(c)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var p=new Error;s=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",p.name="ChunkLoadError",p.type=r,p.request=u,t[1](p)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/web/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var h=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},2258:function(e,n,t){},"4acd":function(e,n,t){"use strict";t("2258")},ad76:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e[e["announcements"]=0]="announcements",e[e["updates"]=1]="updates",e[e["events"]=2]="events",e[e["gmNotes"]=3]="gmNotes",e[e["shop"]=4]="shop"}(r||(r={}))},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function u(e,n,t,u,o,c){var a=Object(r["z"])("MenuComponent"),i=Object(r["z"])("UpdateComponent"),s=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a),Object(r["h"])(i),Object(r["h"])(s)],64)}t("d3b7");var o=t("5530"),c=t("ab42"),a=Object(r["j"])({methods:{},setup:function(){return Object(o["a"])({},Object(c["b"])())},components:{PopupComponent:Object(r["i"])((function(){return t.e("chunk-0fc588df").then(t.bind(null,"7766"))})),MenuComponent:Object(r["i"])((function(){return t.e("chunk-ed1f2948").then(t.bind(null,"2251"))})),UpdateComponent:Object(r["i"])((function(){return t.e("chunk-44244d16").then(t.bind(null,"8091"))}))}});t("4acd");a.render=u;var i=a,s=t("ad76"),f=t("954b"),p=[{name:"home",path:"/",component:function(){return Object(r["i"])((function(){return t.e("chunk-205793b5").then(t.bind(null,"6511"))}))}},{path:"/news",component:function(){return Object(r["i"])((function(){return t.e("chunk-721f04a0").then(t.bind(null,"1474"))}))},children:[{name:"news",path:"/news",component:function(){return Object(r["i"])((function(){return t.e("chunk-2d0af2da").then(t.bind(null,"0ce6"))}))}},{name:"news-announcements",path:"announcements",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},props:{type:s["a"].announcements}},{name:"news-updates",path:"updates",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},props:{type:s["a"].updates}},{name:"news-events",path:"events",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},props:{type:s["a"].events}},{name:"news-gm-notes",path:"gm-notes",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},props:{type:s["a"].gmNotes}},{name:"news-shop",path:"shop",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},props:{type:s["a"].shop}}]},{path:"/overview",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},children:[{name:"overview-game-info",path:"game-info",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}},{name:"overview-class",path:"class",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}}]},{path:"/adventure",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},children:[{name:"adventure-search-friends",path:"search-friends",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}},{name:"adventure-search-guilds",path:"search-guilds",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}}]},{path:"/shop",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))},children:[{name:"shop-pay",path:"pay",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}},{name:"shop-coupon",path:"coupon",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}},{name:"shop-trade",path:"trade",component:function(){return Object(r["i"])((function(){return t.e("chunk-21e1e514").then(t.bind(null,"1f27"))}))}}]}],h=Object(f["a"])({history:Object(f["b"])("/web/"),routes:p}),d=h,l={menu:{minori:"Minori",news:{name:"News",sub:{announcements:"Announcements",updates:"Updates",events:"Events",gmNotes:"GM notes",shop:"Item Mail"}},overview:{name:"Overview",sub:{gameInfo:"Game info",class:"Classes"}},adventure:{name:"Adventure",sub:{searchFriends:"Search friends",searchGuilds:"Search guilds"}},shop:{name:"Shop",sub:{pay:"Pay",coupon:"Coupon",trade:"Trade"}},play:"Start game"},pages:{home:{buttons:{play:"Start game",install:"Download launcher"},systemRequirements:{os:"OS",cpu:"CPU",ram:"RAM",gpu:"GPU",hdd:"HDD",directX:"DirectX",category:"Category",min:"Minimal requirements",opt:"Optimal requirements"}}},play:"Play"},m={},b=Object(c["a"])({locale:"en",messages:{en:l,ru:m}});Object(r["d"])(i).use(b).use(d).mount("#app")}});
//# sourceMappingURL=app.c98f213c.js.map