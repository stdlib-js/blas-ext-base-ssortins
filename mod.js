// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__;var l=e,c=function(r,t,e){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||u.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r},y=t()?l:c;var p=function(r,t,e){y(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return v&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,s=_;var d=function(r){return s.call(r)},m=Object.prototype.hasOwnProperty;var w=function(r,t){return null!=r&&m.call(r,t)},A="function"==typeof Symbol?Symbol.toStringTag:"",j=w,g=A,S=_;var h=function(r){var t,e,n;if(null==r)return S.call(r);e=r[g],t=j(r,g);try{r[g]=void 0}catch(t){return S.call(r)}return n=S.call(r),t?r[g]=e:delete r[g],n},F=d,O=h,U=b()?O:F,E=U,P="function"==typeof Float32Array;var T=function(r){return P&&r instanceof Float32Array||"[object Float32Array]"===E(r)},I=Number.POSITIVE_INFINITY,N="function"==typeof Float32Array?Float32Array:null,V=T,k=I,x=N;var G="function"==typeof Float32Array?Float32Array:void 0,C=function(){throw new Error("not implemented")},Y=function(){var r,t;if("function"!=typeof x)return!1;try{t=new x([1,3.14,-3.14,5e40]),r=V(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===k}catch(t){r=!1}return r}()?G:C,q=U,z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null,D=function(r){return z&&r instanceof Uint32Array||"[object Uint32Array]"===q(r)},H=B;var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},L=function(){var r,t;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,4294967296,4294967297]),r=D(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?J:K,M=new Y(1);new L(M.buffer)[0]=4286578688;var Q=M[0];var R=function(r){return 0===r&&1/r===Q};var W=function(r){return r!=r};function X(r,t,e,n){var o,a,i,f,u,l,c,y;if(r<=0||0===t)return e;if(t<0&&(n*=-1),n<0){for(u=0,a=(f=(1-r)*n)+n,y=1;y<r;y++)if(l=e[a],W(l)){for(i=a;i>u;)e[i]=e[i+n],i+=n;e[u]=l}else{for(o=R(l),i=a-n;i<=f&&(!((c=e[i])<=l)||o&&c===l&&!1===R(c));)e[i+n]=c,i-=n;e[i+n]=l,a+=n}return e}for(u=(r-1)*n,a=(f=0)+n,y=1;y<r;y++)if(l=e[a],W(l)){for(i=a;i<u;)e[i]=e[i+n],i+=n;e[u]=l}else{for(o=R(l),i=a-n;i>=f&&(!((c=e[i])<=l)||o&&c===l&&!1===R(c));)e[i+n]=c,i-=n;e[i+n]=l,a+=n}return e}function Z(r,t,e,n,o){var a,i,f,u,l,c,y,p;if(r<=0||0===t)return e;if(t<0&&(o-=(r-1)*(n*=-1)),l=(u=o)+(r-1)*n,i=u+n,n<0){for(p=1;p<r;p++)if(c=e[i],W(c)){for(f=i;f>l;)e[f]=e[f+n],f+=n;e[l]=c}else{for(a=R(c),f=i-n;f<=u&&(!((y=e[f])<=c)||a&&y===c&&!1===R(y));)e[f+n]=y,f-=n;e[f+n]=c,i+=n}return e}for(p=1;p<r;p++)if(c=e[i],W(c)){for(f=i;f<l;)e[f]=e[f+n],f+=n;e[l]=c}else{for(a=R(c),f=i-n;f>=u&&(!((y=e[f])<=c)||a&&y===c&&!1===R(y));)e[f+n]=y,f-=n;e[f+n]=c,i+=n}return e}p(X,"ndarray",Z);export{X as default,Z as ndarray};
//# sourceMappingURL=mod.js.map