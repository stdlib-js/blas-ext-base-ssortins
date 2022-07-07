// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var u,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(f.call(r,t)||l.call(r,t)?(u=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=u):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var u=t;var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var v,b="function"==typeof Symbol?Symbol.toStringTag:"";v=c&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return y.call(r);e=r[b],a=b,t=null!=(o=r)&&p.call(o,a);try{r[b]=void 0}catch(t){return y.call(r)}return n=y.call(r),t?r[b]=e:delete r[b],n}:function(r){return y.call(r)};var _=v,s="function"==typeof Float32Array;var d=Number.POSITIVE_INFINITY,m="function"==typeof Float32Array?Float32Array:null;var w,A="function"==typeof Float32Array?Float32Array:void 0;w=function(){var r,t,e;if("function"!=typeof m)return!1;try{t=new m([1,3.14,-3.14,5e40]),e=t,r=(s&&e instanceof Float32Array||"[object Float32Array]"===_(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===d}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var j=w,g="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var h,F="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,t,e;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(g&&e instanceof Uint32Array||"[object Uint32Array]"===_(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O=h,U=new j(1);new O(U.buffer)[0]=4286578688;var E=U[0];function P(r){return 0===r&&1/r===E}function T(r){return r!=r}function I(r,t,e,n){var o,a,i,f,l,u,c,y;if(r<=0||0===t)return e;if(t<0&&(n*=-1),n<0){for(l=0,a=(f=(1-r)*n)+n,y=1;y<r;y++)if(T(u=e[a])){for(i=a;i>l;)e[i]=e[i+n],i+=n;e[l]=u}else{for(o=P(u),i=a-n;i<=f&&(!((c=e[i])<=u)||o&&c===u&&!1===P(c));)e[i+n]=c,i-=n;e[i+n]=u,a+=n}return e}for(l=(r-1)*n,a=(f=0)+n,y=1;y<r;y++)if(T(u=e[a])){for(i=a;i<l;)e[i]=e[i+n],i+=n;e[l]=u}else{for(o=P(u),i=a-n;i>=f&&(!((c=e[i])<=u)||o&&c===u&&!1===P(c));)e[i+n]=c,i-=n;e[i+n]=u,a+=n}return e}function N(r,t,e,n,o){var a,i,f,l,u,c,y,p;if(r<=0||0===t)return e;if(t<0&&(o-=(r-1)*(n*=-1)),u=(l=o)+(r-1)*n,i=l+n,n<0){for(p=1;p<r;p++)if(T(c=e[i])){for(f=i;f>u;)e[f]=e[f+n],f+=n;e[u]=c}else{for(a=P(c),f=i-n;f<=l&&(!((y=e[f])<=c)||a&&y===c&&!1===P(y));)e[f+n]=y,f-=n;e[f+n]=c,i+=n}return e}for(p=1;p<r;p++)if(T(c=e[i])){for(f=i;f<u;)e[f]=e[f+n],f+=n;e[u]=c}else{for(a=P(c),f=i-n;f>=l&&(!((y=e[f])<=c)||a&&y===c&&!1===P(y));)e[f+n]=y,f-=n;e[f+n]=c,i+=n}return e}u(I,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:N});export{I as default,N as ndarray};
//# sourceMappingURL=mod.js.map
