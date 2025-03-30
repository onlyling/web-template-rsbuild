/*! For license information please see lib-router.8e922f1f.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_template_rsbuild=self.webpackChunkweb_template_rsbuild||[]).push([["118"],{8280:function(e,t,n){n.d(t,{Ep:()=>v,aU:()=>r,cP:()=>d,lX:()=>c,q_:()=>s});var a,r,l=n(1607);(a=r||(r={})).Pop="POP",a.Push="PUSH",a.Replace="REPLACE";var i=function(e){return e},u="beforeunload",o="popstate";function c(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,a=n.history;function c(){var e=n.location,t=e.pathname,r=e.search,l=e.hash,u=a.state||{};return[u.idx,i({pathname:t,search:r,hash:l,state:u.usr||null,key:u.key||"default"})]}var s=null;n.addEventListener(o,function(){if(s)x.call(s),s=null;else{var e=r.Pop,t=c(),n=t[0],a=t[1];if(x.length){if(null!=n){var l=y-n;l&&(s={action:e,location:a,retry:function(){O(-1*l)}},O(l))}}else w(e)}});var m=r.Pop,g=c(),y=g[0],b=g[1],P=f(),x=f();function E(e){return"string"==typeof e?e:v(e)}function C(e,t){return void 0===t&&(t=null),i((0,l.Z)({pathname:b.pathname,hash:"",search:""},"string"==typeof e?d(e):e,{state:t,key:p()}))}function k(e,t){return[{usr:e.state,key:e.key,idx:t},E(e)]}function S(e,t,n){return!x.length||(x.call({action:e,location:t,retry:n}),!1)}function w(e){m=e;var t=c();y=t[0],b=t[1],P.call({action:m,location:b})}function O(e){a.go(e)}return null==y&&(y=0,a.replaceState((0,l.Z)({},a.state,{idx:y}),"")),{get action(){return m},get location(){return b},createHref:E,push:function e(t,l){var i=r.Push,u=C(t,l);if(S(i,u,function(){e(t,l)})){var o=k(u,y+1),c=o[0],s=o[1];try{a.pushState(c,"",s)}catch(e){n.location.assign(s)}w(i)}},replace:function e(t,n){var l=r.Replace,i=C(t,n);if(S(l,i,function(){e(t,n)})){var u=k(i,y),o=u[0],c=u[1];a.replaceState(o,"",c),w(l)}},go:O,back:function(){O(-1)},forward:function(){O(1)},listen:function(e){return P.push(e)},block:function(e){var t=x.push(e);return 1===x.length&&n.addEventListener(u,h),function(){t(),x.length||n.removeEventListener(u,h)}}}}function s(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,a=n.history;function c(){var e=d(n.location.hash.substr(1)),t=e.pathname,r=e.search,l=e.hash,u=a.state||{};return[u.idx,i({pathname:void 0===t?"/":t,search:void 0===r?"":r,hash:void 0===l?"":l,state:u.usr||null,key:u.key||"default"})]}var s=null;function m(){if(s)E.call(s),s=null;else{var e=r.Pop,t=c(),n=t[0],a=t[1];if(E.length){if(null!=n){var l=b-n;l&&(s={action:e,location:a,retry:function(){$(-1*l)}},$(l))}}else O(e)}}n.addEventListener(o,m),n.addEventListener("hashchange",function(){v(c()[1])!==v(P)&&m()});var g=r.Pop,y=c(),b=y[0],P=y[1],x=f(),E=f();function C(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var a=n.location.href,r=a.indexOf("#");t=-1===r?a:a.slice(0,r)}return t}()+"#"+("string"==typeof e?e:v(e))}function k(e,t){return void 0===t&&(t=null),i((0,l.Z)({pathname:P.pathname,hash:"",search:""},"string"==typeof e?d(e):e,{state:t,key:p()}))}function S(e,t){return[{usr:e.state,key:e.key,idx:t},C(e)]}function w(e,t,n){return!E.length||(E.call({action:e,location:t,retry:n}),!1)}function O(e){g=e;var t=c();b=t[0],P=t[1],x.call({action:g,location:P})}function $(e){a.go(e)}return null==b&&(b=0,a.replaceState((0,l.Z)({},a.state,{idx:b}),"")),{get action(){return g},get location(){return P},createHref:C,push:function e(t,l){var i=r.Push,u=k(t,l);if(w(i,u,function(){e(t,l)})){var o=S(u,b+1),c=o[0],s=o[1];try{a.pushState(c,"",s)}catch(e){n.location.assign(s)}O(i)}},replace:function e(t,n){var l=r.Replace,i=k(t,n);if(w(l,i,function(){e(t,n)})){var u=S(i,b),o=u[0],c=u[1];a.replaceState(o,"",c),O(l)}},go:$,back:function(){$(-1)},forward:function(){$(1)},listen:function(e){return x.push(e)},block:function(e){var t=E.push(e);return 1===E.length&&n.addEventListener(u,h),function(){t(),E.length||n.removeEventListener(u,h)}}}}function h(e){e.preventDefault(),e.returnValue=""}function f(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(e){return e!==t})}},call:function(t){e.forEach(function(e){return e&&e(t)})}}}function p(){return Math.random().toString(36).substr(2,8)}function v(e){var t=e.pathname,n=void 0===t?"/":t,a=e.search,r=void 0===a?"":a,l=e.hash,i=void 0===l?"":l;return r&&"?"!==r&&(n+="?"===r.charAt(0)?r:"?"+r),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function d(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}},3456:function(e,t,n){n.d(t,{UT:()=>c,VK:()=>o,rU:()=>s});var a=n(5271),r=n(8280),l=n(5791);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let u=["onClick","reloadDocument","replace","state","target","to"];function o(e){let{basename:t,children:n,window:i}=e,u=(0,a.useRef)();null==u.current&&(u.current=(0,r.lX)({window:i}));let o=u.current,[c,s]=(0,a.useState)({action:o.action,location:o.location});return(0,a.useLayoutEffect)(()=>o.listen(s),[o]),(0,a.createElement)(l.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o})}function c(e){let{basename:t,children:n,window:i}=e,u=(0,a.useRef)();null==u.current&&(u.current=(0,r.q_)({window:i}));let o=u.current,[c,s]=(0,a.useState)({action:o.action,location:o.location});return(0,a.useLayoutEffect)(()=>o.listen(s),[o]),(0,a.createElement)(l.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o})}let s=(0,a.forwardRef)(function(e,t){let{onClick:n,reloadDocument:o,replace:c=!1,state:s,target:h,to:f}=e,p=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,u),v=(0,l.oQ)(f),d=function(e,t){let{target:n,replace:i,state:u}=void 0===t?{}:t,o=(0,l.s0)(),c=(0,l.TH)(),s=(0,l.WU)(e);return(0,a.useCallback)(t=>{0!==t.button||n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),o(e,{replace:!!i||(0,r.Ep)(c)===(0,r.Ep)(s),state:u}))},[c,o,s,i,u,n,e])}(f,{replace:c,state:s,target:h});return(0,a.createElement)("a",i({},p,{href:v,onClick:function(e){n&&n(e),e.defaultPrevented||o||d(e)},ref:t,target:h}))})},5791:function(e,t,n){n.d(t,{F0:()=>$,TH:()=>P,UO:()=>k,V$:()=>w,WU:()=>S,fp:()=>c,j3:()=>O,oQ:()=>y,pC:()=>C,s0:()=>x});var a=n(8280),r=n(5271);let l=(0,r.createContext)(null),i=(0,r.createContext)(null),u=(0,r.createContext)({outlet:null,matches:[]});function o(e,t){if(!e)throw Error(t)}function c(e,t,n){void 0===n&&(n="/");let r=p(("string"==typeof t?(0,a.cP)(t):t).pathname||"/",n);if(null==r)return null;let l=function e(t,n,a,r){return void 0===n&&(n=[]),void 0===a&&(a=[]),void 0===r&&(r=""),t.forEach((t,l)=>{var i,u;let c,f,p={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};p.relativePath.startsWith("/")&&(p.relativePath.startsWith(r)||o(!1),p.relativePath=p.relativePath.slice(r.length));let d=v([r,p.relativePath]),m=a.concat(p);t.children&&t.children.length>0&&(!0===t.index&&o(!1),e(t.children,n,m,d)),(null!=t.path||t.index)&&n.push({path:d,score:(i=d,u=t.index,f=(c=i.split("/")).length,c.some(h)&&(f+=-2),u&&(f+=2),c.filter(e=>!h(e)).reduce((e,t)=>e+(s.test(t)?3:""===t?1:10),f)),routesMeta:m})}),n}(e);!function(e){e.sort((e,t)=>{var n,a;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),a=t.routesMeta.map(e=>e.childrenIndex),n.length===a.length&&n.slice(0,-1).every((e,t)=>e===a[t])?n[n.length-1]-a[a.length-1]:0)})}(l);let i=null;for(let e=0;null==i&&e<l.length;++e)i=function(e,t){let{routesMeta:n}=e,a={},r="/",l=[];for(let e=0;e<n.length;++e){let i=n[e],u=e===n.length-1,o="/"===r?t:t.slice(r.length)||"/",c=function(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(e,t)=>(a.push(t),"([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),u=r.slice(1);return{params:a.reduce((e,t,n)=>{if("*"===t){let e=u[n]||"";i=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(u[n]||"",0),e},{}),pathname:l,pathnameBase:i,pattern:e}}({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},o);if(!c)return null;Object.assign(a,c.params);let s=i.route;l.push({params:a,pathname:v([r,c.pathname]),pathnameBase:d(v([r,c.pathnameBase])),route:s}),"/"!==c.pathnameBase&&(r=v([r,c.pathnameBase]))}return l}(l[e],r);return i}let s=/^:\w+$/,h=e=>"*"===e;function f(e,t,n){let r,l="string"==typeof e?(0,a.cP)(e):e,i=""===e||""===l.pathname?"/":l.pathname;if(null==i)r=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;l.pathname=t.join("/")}r=e>=0?t[e]:"/"}let u=function(e,t){var n;let r;void 0===t&&(t="/");let{pathname:l,search:i="",hash:u=""}="string"==typeof e?(0,a.cP)(e):e;return{pathname:l?l.startsWith("/")?l:(n=l,r=t.replace(/\/+$/,"").split("/"),n.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"):t,search:m(i),hash:g(u)}}(l,r);return i&&"/"!==i&&i.endsWith("/")&&!u.pathname.endsWith("/")&&(u.pathname+="/"),u}function p(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}let v=e=>e.join("/").replace(/\/\/+/g,"/"),d=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",g=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function y(e){b()||o(!1);let{basename:t,navigator:n}=(0,r.useContext)(l),{hash:i,pathname:u,search:c}=S(e),s=u;if("/"!==t){let n=""===e||""===e.pathname?"/":"string"==typeof e?(0,a.cP)(e).pathname:e.pathname,r=null!=n&&n.endsWith("/");s="/"===u?t+(r?"/":""):v([t,u])}return n.createHref({pathname:s,search:c,hash:i})}function b(){return null!=(0,r.useContext)(i)}function P(){return b()||o(!1),(0,r.useContext)(i).location}function x(){b()||o(!1);let{basename:e,navigator:t}=(0,r.useContext)(l),{matches:n}=(0,r.useContext)(u),{pathname:a}=P(),i=JSON.stringify(n.map(e=>e.pathnameBase)),c=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{c.current=!0}),(0,r.useCallback)(function(n,r){if(void 0===r&&(r={}),!c.current)return;if("number"==typeof n){t.go(n);return}let l=f(n,JSON.parse(i),a);"/"!==e&&(l.pathname=v([e,l.pathname])),(r.replace?t.replace:t.push)(l,r.state)},[e,t,i,a])}let E=(0,r.createContext)(null);function C(e){let t=(0,r.useContext)(u).outlet;return t?(0,r.createElement)(E.Provider,{value:e},t):t}function k(){let{matches:e}=(0,r.useContext)(u),t=e[e.length-1];return t?t.params:{}}function S(e){let{matches:t}=(0,r.useContext)(u),{pathname:n}=P(),a=JSON.stringify(t.map(e=>e.pathnameBase));return(0,r.useMemo)(()=>f(e,JSON.parse(a),n),[e,a,n])}function w(e,t){var n,l,i;let s;b()||o(!1);let{matches:h}=(0,r.useContext)(u),f=h[h.length-1],p=f?f.params:{};f&&f.pathname;let d=f?f.pathnameBase:"/";f&&f.route;let m=P();if(t){let e="string"==typeof t?(0,a.cP)(t):t;"/"===d||(null==(n=e.pathname)?void 0:n.startsWith(d))||o(!1),s=e}else s=m;let g=s.pathname||"/",y=c(e,{pathname:"/"===d?g:g.slice(d.length)||"/"});return l=y&&y.map(e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:v([d,e.pathname]),pathnameBase:"/"===e.pathnameBase?d:v([d,e.pathnameBase])})),(void 0===(i=h)&&(i=[]),null==l)?null:l.reduceRight((e,t,n)=>(0,r.createElement)(u.Provider,{children:void 0!==t.route.element?t.route.element:e,value:{outlet:e,matches:i.concat(l.slice(0,n+1))}}),null)}function O(e){return C(e.context)}function $(e){let{basename:t="/",children:n=null,location:u,navigationType:c=a.aU.Pop,navigator:s,static:h=!1}=e;b()&&o(!1);let f=d(t),v=(0,r.useMemo)(()=>({basename:f,navigator:s,static:h}),[f,s,h]);"string"==typeof u&&(u=(0,a.cP)(u));let{pathname:m="/",search:g="",hash:y="",state:P=null,key:x="default"}=u,E=(0,r.useMemo)(()=>{let e=p(m,f);return null==e?null:{pathname:e,search:g,hash:y,state:P,key:x}},[f,m,g,y,P,x]);return null==E?null:(0,r.createElement)(l.Provider,{value:v},(0,r.createElement)(i.Provider,{children:n,value:{location:E,navigationType:c}}))}}}]);