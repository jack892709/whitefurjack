(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["artwork"],{"107c":function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1276:function(t,e,n){"use strict";var r=n("d784"),c=n("44e7"),a=n("825a"),i=n("1d80"),o=n("4840"),l=n("8aa5"),s=n("50c4"),u=n("577e"),d=n("14c3"),h=n("9263"),v=n("9f7f"),f=n("d039"),b=v.UNSUPPORTED_Y,p=[].push,g=Math.min,w=4294967295,x=!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=u(i(this)),a=void 0===n?w:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!c(t))return e.call(r,t,a);var o,l,s,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,b=new RegExp(t.source,v+"g");while(o=h.call(b,r)){if(l=b.lastIndex,l>f&&(d.push(r.slice(f,o.index)),o.length>1&&o.index<r.length&&p.apply(d,o.slice(1)),s=o[0].length,f=l,d.length>=a))break;b.lastIndex===o.index&&b.lastIndex++}return f===r.length?!s&&b.test("")||d.push(""):d.push(r.slice(f)),d.length>a?d.slice(0,a):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var c=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,c,n):r.call(u(c),e,n)},function(t,c){var i=a(this),h=u(t),v=n(r,i,h,c,r!==e);if(v.done)return v.value;var f=o(i,RegExp),p=i.unicode,x=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(b?"g":"y"),O=new f(b?"^(?:"+i.source+")":i,x),j=void 0===c?w:c>>>0;if(0===j)return[];if(0===h.length)return null===d(O,h)?[h]:[];var y=0,m=0,k=[];while(m<h.length){O.lastIndex=b?0:m;var A,I=d(O,b?h.slice(m):h);if(null===I||(A=g(s(O.lastIndex+(b?m:0)),h.length))===y)m=l(h,m,p);else{if(k.push(h.slice(y,m)),k.length===j)return k;for(var E=1;E<=I.length-1;E++)if(k.push(I[E]),k.length===j)return k;m=y=A}}return k.push(h.slice(y)),k}]}),!x,b)},"14c3":function(t,e,n){var r=n("c6b6"),c=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},"1ab9":function(t,e,n){"use strict";n("93ee")},"44e7":function(t,e,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),i=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==c(t))}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("577e"),c=n("ad6d"),a=n("9f7f"),i=n("5692"),o=n("7c73"),l=n("69f3").get,s=n("fce3"),u=n("107c"),d=RegExp.prototype.exec,h=i("native-string-replace",String.prototype.replace),v=d,f=function(){var t=/a/,e=/b*/g;return d.call(t,"a"),d.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),b=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],g=f||p||b||s||u;g&&(v=function(t){var e,n,a,i,s,u,g,w=this,x=l(w),O=r(t),j=x.raw;if(j)return j.lastIndex=w.lastIndex,e=v.call(j,O),w.lastIndex=j.lastIndex,e;var y=x.groups,m=b&&w.sticky,k=c.call(w),A=w.source,I=0,E=O;if(m&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),E=O.slice(w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==O.charAt(w.lastIndex-1))&&(A="(?: "+A+")",E=" "+E,I++),n=new RegExp("^(?:"+A+")",k)),p&&(n=new RegExp("^"+A+"$(?!\\s)",k)),f&&(a=w.lastIndex),i=d.call(m?n:w,E),m?i?(i.input=i.input.slice(I),i[0]=i[0].slice(I),i.index=w.lastIndex,w.lastIndex+=i[0].length):w.lastIndex=0:f&&i&&(w.lastIndex=w.global?i.index+i[0].length:a),p&&i&&i.length>1&&h.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&y)for(i.groups=u=o(null),s=0;s<y.length;s++)g=y[s],u[g[0]]=i[g[1]];return i}),t.exports=v},"93ee":function(t,e,n){},"9b65":function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var r=n("7a23");Object(r["y"])("data-v-574f515b");var c={class:"slidework"},a={key:0,class:"work-details"},i=["src"],o={class:"work-info sided-content-layout"},l={class:"left-side-content"},s={class:"text-content"},u={class:"title"},d={class:"subtitle"},h={class:"right-side-content"},v={class:"text-content"},f={class:"rich-content"},b={class:"items"},p={class:"image"},g={href:""},w=["src"],x={key:1,class:"loading"},O=Object(r["h"])("div",{class:"d-flex justify-content-center align-items-center h-100"},[Object(r["h"])("div",{class:"spinner-border",role:"status"},[Object(r["h"])("span",{class:"visually-hidden"},"Loading...")])],-1),j=[O],y={class:"slidecontrol"},m=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},[Object(r["h"])("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"})],-1),k=[m],A=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[Object(r["h"])("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),I=[A],E=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[Object(r["h"])("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})],-1),R=[E],M={class:"switchcontrol d-flex d-lg-none my-5 justify-content-center"},L={class:"switch-btn"},C=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[Object(r["h"])("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),z=[C],B={class:"switch-btn"},D=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-grid",viewBox:"0 0 16 16"},[Object(r["h"])("path",{d:"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"})],-1),_=[D],P={class:"switch-btn"},T=Object(r["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[Object(r["h"])("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})],-1),N=[T];function S(t,e,n,O,m,A){return Object(r["v"])(),Object(r["g"])("div",{class:"work",id:"work",onClick:e[7]||(e[7]=function(){return O.closeModal&&O.closeModal.apply(O,arguments)})},[Object(r["h"])("div",c,[Object(r["h"])("div",{class:"work-inner",onClick:e[0]||(e[0]=Object(r["M"])((function(){return O.doNothing&&O.doNothing.apply(O,arguments)}),["stop"]))},[O.isLoaded?(Object(r["v"])(),Object(r["g"])("div",a,[Object(r["h"])("img",{src:O.artData.img_url,alt:""},null,8,i),Object(r["h"])("div",o,[Object(r["h"])("div",l,[Object(r["h"])("div",s,[Object(r["h"])("h1",u,Object(r["F"])(O.artData.title),1),Object(r["h"])("span",d,Object(r["F"])(O.artData.year),1)])]),Object(r["h"])("div",h,[Object(r["h"])("div",v,[Object(r["h"])("div",f,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(O.artData.description,(function(t,e){return Object(r["v"])(),Object(r["g"])("p",{key:O.artData.id+"_p_"+e},Object(r["F"])(t),1)})),128))])])])]),Object(r["h"])("div",b,[(Object(r["v"])(!0),Object(r["g"])(r["a"],null,Object(r["B"])(O.artData.other,(function(t,e){return Object(r["L"])((Object(r["v"])(),Object(r["g"])("div",{class:"item",key:O.artData.id+"_"+e},[Object(r["h"])("div",p,[Object(r["h"])("a",g,[Object(r["h"])("img",{src:t,alt:""},null,8,w)])])],512)),[[r["I"],t]])})),128))])])):(Object(r["v"])(),Object(r["g"])("div",x,j))]),Object(r["h"])("div",y,[Object(r["h"])("div",{class:"work-switch work-close",onClick:e[1]||(e[1]=Object(r["M"])((function(){return O.closeModal&&O.closeModal.apply(O,arguments)}),["stop"]))},k),Object(r["h"])("div",{class:"work-switch work-left",onClick:e[2]||(e[2]=Object(r["M"])((function(){return O.lastArtwork&&O.lastArtwork.apply(O,arguments)}),["stop"]))},I),Object(r["h"])("div",{class:"work-switch work-right",onClick:e[3]||(e[3]=Object(r["M"])((function(){return O.nextArtwork&&O.nextArtwork.apply(O,arguments)}),["stop"]))},R)]),Object(r["h"])("div",M,[Object(r["h"])("div",L,[Object(r["h"])("div",{class:"switch-icon",onClick:e[4]||(e[4]=Object(r["M"])((function(){return O.lastArtwork&&O.lastArtwork.apply(O,arguments)}),["stop"]))},z)]),Object(r["h"])("div",B,[Object(r["h"])("div",{class:"switch-icon",onClick:e[5]||(e[5]=Object(r["M"])((function(){return O.closeModal&&O.closeModal.apply(O,arguments)}),["stop"]))},_)]),Object(r["h"])("div",P,[Object(r["h"])("div",{class:"switch-icon",onClick:e[6]||(e[6]=Object(r["M"])((function(){return O.nextArtwork&&O.nextArtwork.apply(O,arguments)}),["stop"]))},N)])])])])}function J(t){if(Array.isArray(t))return t}Object(r["w"])();n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function U(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,c,a=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(l){o=!0,c=l}finally{try{i||null==n["return"]||n["return"]()}finally{if(o)throw c}}return a}}var V=n("06c5");function Y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function F(t,e){return J(t)||U(t,e)||Object(V["a"])(t,e)||Y()}var H=n("1da1"),K=(n("96cf"),n("ac1f"),n("1276"),function(t){var e=t.split(/\r\n|\n\r|\n|\r/);return e});function W(t){for(var e=[],n=t.shift(),r=0;r<t.length;r+=1){e[r]={};for(var c=0;c<n.length;c+=1)n[c]?e[r][n[c]]=t[r][c]:(e[r].other||(e[r].other=[]),e[r].other.push(t[r][c]))}return e}var Q={name:"Artwork",props:["artworkId","artInfo"],emits:["switchPage"],setup:function(t,e){var n=e.emit,c=Object(r["A"])(window.innerWidth);c.value>=992&&document.body.classList.add("overflow-hidden");var a=function(){c.value=window.innerWidth};Object(r["t"])((function(){return window.addEventListener("resize",a)})),Object(r["u"])((function(){return window.removeEventListener("resize",a)})),Object(r["J"])((function(){return c.value}),(function(){c.value<992&&document.body.classList.contains("overflow-hidden")?document.body.classList.remove("overflow-hidden"):c.value>=992&&!document.body.classList.contains("overflow-hidden")&&document.body.classList.add("overflow-hidden")}));var i=Object(r["A"])(!1);function o(t){return l.apply(this,arguments)}function l(){return l=Object(H["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="https://script.google.com/macros/s/AKfycbzRA6_7hlubMH1wOlZ3oLCRJB6xI9n0g5ZQMv5VYrwe6GL-CE7w3HbMRfWHzkywV8XVJQ/exec?type=detail&searchby=id&value=".concat(e),t.next=3,fetch(n,{headers:{"Content-Type":"text/plain"}}).then((function(t){return t.json()})).then((function(t){return W(t)}));case 3:return r=t.sent,i.value=!0,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}var s=Object(r["A"])({}),u=function(){o(t.artworkId).then((function(t){var e=F(t,1);s.value=e[0],s.value.description=K(s.value.description)}))};u(),Object(r["J"])((function(){return t.artworkId}),(function(){u()}));var d=Object(r["c"])((function(){return K(t.artInfo.description)})),h=function(){var t=document.getElementById("work");t.scrollIntoView(!0)},v=function(){n("switchPage","close")},f=function(){},b=function(){h(),n("switchPage","last")},p=function(){h(),n("switchPage","next")};return Object(r["t"])((function(){h()})),{isLoaded:i,artData:s,artDescription:d,closeModal:v,doNothing:f,lastArtwork:b,nextArtwork:p}},beforeRouteLeave:function(t){t.params.artworkId||document.body.classList.remove("overflow-hidden")}};n("1ab9");Q.render=S,Q.__scopeId="data-v-574f515b";e["default"]=Q},"9f7f":function(t,e,n){var r=n("d039"),c=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("9263"),a=n("d039"),i=n("b622"),o=n("9112"),l=i("species"),s=RegExp.prototype;t.exports=function(t,e,n,u){var d=i(t),h=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),v=h&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!v||n){var f=/./[d],b=e(d,""[t],(function(t,e,n,r,a){var i=e.exec;return i===c||i===s.exec?h&&!a?{done:!0,value:f.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,b[0]),r(s,d,b[1])}u&&o(s[d],"sham",!0)}},fce3:function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=artwork.0da09bd3.js.map