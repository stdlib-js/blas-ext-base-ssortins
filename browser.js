// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,u=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,b,"e"),i=p.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,u,"e+0$1"),i=p.call(i,d,"e-0$1"),e.alternate&&(i=p.call(i,g,"$1."),i=p.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,A=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,f,p,u,d,g,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if("string"==typeof(i=e[f]))s+=i;else{if(r=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,A(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!A(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,d=i.width,g=i.padRight,y=void 0,(y=d-u.length)<0?u:u=g?u+m(y):m(y)+u)),s+=i.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,t,i,n;for(t=[],n=0,i=k.exec(e);i;)(r=e.slice(n,k.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=k.lastIndex,i=k.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I,V=Object.prototype,$=V.toString,O=V.__defineGetter__,U=V.__defineSetter__,C=V.__lookupGetter__,P=V.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(C.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&U&&U.call(e,r,t.set),e};var R,N=I,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),G=Object.prototype.toString,W=Object.prototype.hasOwnProperty,L="function"==typeof Symbol?Symbol:void 0,X="function"==typeof L?L.toStringTag:"";R=Z&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return G.call(e);t=e[X],a=X,r=null!=(n=e)&&W.call(n,a);try{e[X]=void 0}catch(r){return G.call(e)}return i=G.call(e),r?e[X]=t:delete e[X],i}:function(e){return G.call(e)};var z,M=R,Y="function"==typeof Float32Array,q=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null,D="function"==typeof Float32Array?Float32Array:void 0;z=function(){var e,r,t;if("function"!=typeof B)return!1;try{r=new B([1,3.14,-3.14,5e40]),t=r,e=(Y&&t instanceof Float32Array||"[object Float32Array]"===M(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===q}catch(r){e=!1}return e}()?D:function(){throw new Error("not implemented")};var H,J=z,K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,ee="function"==typeof Uint32Array?Uint32Array:void 0;H=function(){var e,r,t;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(K&&t instanceof Uint32Array||"[object Uint32Array]"===M(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")};var re=H,te=new J(1);new re(te.buffer)[0]=4286578688;var ie,ne=te[0];function ae(e){return 0===e&&1/e===ne}function oe(e){return e!=e}function ce(e,r,t,i){var n,a,o,c,s,l,f,p;if(e<=0||0===r)return t;if(r<0&&(i*=-1),i<0){for(s=0,a=(c=(1-e)*i)+i,p=1;p<e;p++)if(oe(l=t[a])){for(o=a;o>s;)t[o]=t[o+i],o+=i;t[s]=l}else{for(n=ae(l),o=a-i;o<=c&&(!((f=t[o])<=l)||n&&f===l&&!1===ae(f));)t[o+i]=f,o-=i;t[o+i]=l,a+=i}return t}for(s=(e-1)*i,a=(c=0)+i,p=1;p<e;p++)if(oe(l=t[a])){for(o=a;o<s;)t[o]=t[o+i],o+=i;t[s]=l}else{for(n=ae(l),o=a-i;o>=c&&(!((f=t[o])<=l)||n&&f===l&&!1===ae(f));)t[o+i]=f,o-=i;t[o+i]=l,a+=i}return t}return ie=function(e,r,t,i,n){var a,o,c,s,l,f,p,u;if(e<=0||0===r)return t;if(r<0&&(n-=(e-1)*(i*=-1)),l=(s=n)+(e-1)*i,o=s+i,i<0){for(u=1;u<e;u++)if(oe(f=t[o])){for(c=o;c>l;)t[c]=t[c+i],c+=i;t[l]=f}else{for(a=ae(f),c=o-i;c<=s&&(!((p=t[c])<=f)||a&&p===f&&!1===ae(p));)t[c+i]=p,c-=i;t[c+i]=f,o+=i}return t}for(u=1;u<e;u++)if(oe(f=t[o])){for(c=o;c<l;)t[c]=t[c+i],c+=i;t[l]=f}else{for(a=ae(f),c=o-i;c>=s&&(!((p=t[c])<=f)||a&&p===f&&!1===ae(p));)t[c+i]=p,c-=i;t[c+i]=f,o+=i}return t},N(ce,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:ie}),ce},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ssortins=r();
//# sourceMappingURL=browser.js.map