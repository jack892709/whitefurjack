(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["outdoors"],{1926:function(e,t,n){"use strict";n.r(t);var r=n("7a23");Object(r["y"])("data-v-c6d539f4");var o={class:"row gx-2",id:"outdoors-container"};function a(e,t,n,a,c,u){var i=Object(r["C"])("ImageCard"),s=Object(r["C"])("router-view");return Object(r["v"])(),Object(r["g"])(r["a"],null,[Object(r["h"])("div",{class:Object(r["q"])(["container-fluid page",{"d-none d-lg-block":e.$route.params.artworkId}])},[Object(r["h"])("div",o,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(a.artList,(function(e,t){return Object(r["v"])(),Object(r["e"])(i,{clickable:"",class:"col-md-6 col-lg-4 col-xxl-3 pb-1",key:t,info:e,onImageClick:function(t){return a.goToPage(e.id)}},null,8,["info","onImageClick"])})),128))])],2),Object(r["k"])(s,{artInfo:a.currentArtData,onSwitchPage:a.switchPage},null,8,["artInfo","onSwitchPage"])],64)}Object(r["w"])();var c=n("6b75");function u(e){if(Array.isArray(e))return Object(c["a"])(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=n("06c5");function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return u(e)||i(e)||Object(s["a"])(e)||d()}var f=n("1da1");n("96cf"),n("a434"),n("c740"),n("99af"),n("d81d");const p=(e,t)=>t.some(t=>e instanceof t);let b,h;function v(){return b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m(){return h||(h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g=new WeakMap,w=new WeakMap,j=new WeakMap,O=new WeakMap,k=new WeakMap;function y(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{t(B(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&g.set(t,e)}).catch(()=>{}),k.set(t,e),t}function x(e){if(w.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});w.set(e,t)}let I={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return w.get(e);if("objectStoreNames"===t)return e.objectStoreNames||j.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return B(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function D(e){I=e(I)}function R(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?m().includes(e)?function(...t){return e.apply(L(this),t),B(g.get(this))}:function(...t){return B(e.apply(L(this),t))}:function(t,...n){const r=e.call(L(this),t,...n);return j.set(r,t.sort?t.sort():[t]),B(r)}}function E(e){return"function"===typeof e?R(e):(e instanceof IDBTransaction&&x(e),p(e,v())?new Proxy(e,I):e)}function B(e){if(e instanceof IDBRequest)return y(e);if(O.has(e))return O.get(e);const t=E(e);return t!==e&&(O.set(e,t),k.set(t,e)),t}const L=e=>k.get(e);function A(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const c=indexedDB.open(e,t),u=B(c);return r&&c.addEventListener("upgradeneeded",e=>{r(B(c.result),e.oldVersion,e.newVersion,B(c.transaction))}),n&&c.addEventListener("blocked",()=>n()),u.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),u}const C=["get","getKey","getAll","getAllKeys","count"],P=["put","add","delete","clear"],S=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=P.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!C.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,o?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(t.shift())),(await Promise.all([c[n](...t),o&&a.done]))[0]};return S.set(t,a),a}D(e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)}));var M=n("6c02");Object(r["y"])("data-v-043ab74c");var q={class:"image-box"},F=["src"],W={class:"shade"},K={class:"details"},N={class:"title"},_={class:"tags"};function J(e,t,n,o,a,c){return Object(r["v"])(),Object(r["g"])("div",q,[Object(r["h"])("div",{class:Object(r["q"])(["image-square",{"cursor-pointer":n.clickable}]),onClick:t[0]||(t[0]=function(){return o.onImageClick&&o.onImageClick.apply(o,arguments)})},[Object(r["h"])("picture",null,[Object(r["h"])("img",{src:n.info.img_url,alt:""},null,8,F)]),Object(r["h"])("div",W,"#"+Object(r["F"])(n.info.title),1)],2),Object(r["h"])("div",K,[Object(r["h"])("div",N,Object(r["F"])(n.info.title)+", "+Object(r["F"])(n.info.year),1),Object(r["h"])("div",_,Object(r["F"])(n.info.tags),1)])])}Object(r["w"])();var z={name:"ImageCard",props:{info:Object,clickable:Boolean},emits:["image-click"],setup:function(e,t){var n=t.emit;function r(){n("image-click")}return{onImageClick:r}}};n("e3a7");z.render=J,z.__scopeId="data-v-043ab74c";var Q=z;function V(e){for(var t=[],n=e.shift(),r=0;r<e.length;r+=1){t[r]={};for(var o=0;o<n.length;o+=1)n[o]?t[r][n[o]]=e[r][o]:(t[r].other||(t[r].other=[]),t[r].other.push(e[r][o]))}return t}function H(){return U.apply(this,arguments)}function U(){return U=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A("whitefurjackData",1,{upgrade:function(e){e.createObjectStore("outdoors",{keyPath:"id",autoIncrement:!0})}});case 2:return t=e.sent,n={get:function(e){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:return n.abrupt("return",n.sent.get("outdoors",e));case 3:case"end":return n.stop()}}),n)})))()},set:function(e,n){return Object(f["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t;case 2:return r.abrupt("return",r.sent.put("outdoors",n,e));case 3:case"end":return r.stop()}}),r)})))()},delete:function(e){return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t;case 2:return n.abrupt("return",n.sent.delete("outdoors",e));case 3:case"end":return n.stop()}}),n)})))()},clear:function(){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.clear("outdoors"));case 3:case"end":return e.stop()}}),e)})))()},keys:function(){return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.getAllKeys("outdoors"));case 3:case"end":return e.stop()}}),e)})))()}},e.abrupt("return",{dbPromise:t,idbOutdoors:n});case 5:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function $(e,t){return Y.apply(this,arguments)}function Y(){return Y=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.transaction("outdoors","readwrite"),o=function(e){return e.map((function(e){return r.store.add(e)}))},e.next=4,Promise.all([].concat(l(o(t)),[r.done]));case 4:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}var Z={name:"Outdoors",components:{ImageCard:Q},setup:function(){var e=Object(r["A"])([]);function t(t){for(var n=0;n<t.length;n+=1)t[n].id&&e.value.push(t[n])}function n(e){for(var t=0;t<e.length;t+=1)e[t].id||(e.splice(t,1),t-=1);return e}var o="https://script.google.com/macros/s/AKfycbwJCgUlhtSzM9z4srQb9bH53UjwycLWd1IRAAIsAmtFgzw9qcZ2hMeVr-8de--Pcd5htQ/exec";function a(e,t){return c.apply(this,arguments)}function c(){return c=Object(f["a"])(regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"?type=detail&searchby=quantity&start=").concat(n,"&value=").concat(r),{headers:{"Content-Type":"text/plain"}}).then((function(e){return e.json()})).then((function(e){return V(e)})).then((function(e){return t(e),e}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}var u=Object(r["A"])(!1),i=function(e){for(var t=0;t<e.length;t+=1)e[t].id||(u.value=!0)},s=function(e,t){var r=e,o=t,c=!1;return Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c){e.next=7;break}return c=!0,e.next=4,a(r,o).then((function(e){return i(e),e})).then((function(e){return n(e)}));case 4:t=e.sent,c=!1,r+=o;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})))},d=s(1,12);function l(e){return p.apply(this,arguments)}function p(){return p=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return n=e.sent,r=n.dbPromise,n.idbOutdoors,e.next=7,$(t,r);case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function b(){window.scrollY+window.screen.height>=document.body.scrollHeight&&d().then((function(e){e&&l(e)}))}(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:return n=t.sent,r=n.dbPromise,o=n.idbOutdoors,t.next=7,o.keys();case 7:if(a=t.sent,a.length){t.next=16;break}return t.next=11,d();case 11:return c=t.sent,t.next=14,$(c,r);case 14:t.next=18;break;case 16:for(u=0;u<a.length;u+=1)o.get(a[u]).then((function(t){e.value.push(t)}));d=s(a[a.length-1]+1,2);case 18:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n})()(),Object(r["t"])((function(){window.addEventListener("scroll",b)})),Object(r["u"])((function(){window.removeEventListener("scroll",b)})),Object(r["J"])(u,(function(){u.value&&window.removeEventListener("scroll",b)}));var h=Object(M["c"])(),v=Object(r["c"])((function(){return h.params.artworkId})),m=Object(M["d"])(),g=Object(r["c"])((function(){return e.value.findIndex((function(e){return e.id===parseInt(v.value,10)}))})),w=Object(r["c"])((function(){return e.value[g.value]}));function j(e){m.push({name:"artwork",params:{artworkId:e}})}function O(){var t=g.value+1;t=t<e.value.length?t:0,m.push("/sketchbooks/outdoors/".concat(e.value[t].id))}function k(){var t=g.value-1;t=t>=0?t:e.value.length-1,m.push("/sketchbooks/outdoors/".concat(e.value[t].id))}function y(e){switch(e){case"close":m.push("/sketchbooks/outdoors");break;case"last":k();break;case"next":O();break;default:break}}return{artList:e,artworkId:v,currentArtData:w,goToPage:j,switchPage:y,fetchDetailedArtInfoByQuantity:a}}};n("2284");Z.render=a,Z.__scopeId="data-v-c6d539f4";t["default"]=Z},2284:function(e,t,n){"use strict";n("4bdb")},"4bdb":function(e,t,n){},"6bde":function(e,t,n){},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),u=n("7b0b"),i=n("50c4"),s=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),p=n("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),g=l("concat"),w=function(e){if(!c(e))return!1;var t=e[b];return void 0!==t?!!t:a(e)},j=!m||!g;r({target:"Array",proto:!0,forced:j},{concat:function(e){var t,n,r,o,a,c=u(this),l=d(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?c:arguments[t],w(a)){if(o=i(a.length),f+o>h)throw TypeError(v);for(n=0;n<o;n++,f++)n in a&&s(l,f,a[n])}else{if(f>=h)throw TypeError(v);s(l,f++,a)}return l.length=f,l}})},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),c=a("map");r({target:"Array",proto:!0,forced:!c},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e3a7:function(e,t,n){"use strict";n("6bde")}}]);
//# sourceMappingURL=outdoors.4dbc5fa1.js.map