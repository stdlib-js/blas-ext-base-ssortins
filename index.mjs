// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";function t(r,t,f,n){var i,o,a,d,m,l,u,j;if(r<=0||0===t)return f;if(t<0&&(n*=-1),n<0){for(m=0,o=(d=(1-r)*n)+n,j=1;j<r;j++)if(l=f[o],s(l)){for(a=o;a>m;)f[a]=f[a+n],a+=n;f[m]=l}else{for(i=e(l),a=o-n;a<=d&&(!((u=f[a])<=l)||i&&u===l&&!1===e(u));)f[a+n]=u,a-=n;f[a+n]=l,o+=n}return f}for(m=(r-1)*n,o=(d=0)+n,j=1;j<r;j++)if(l=f[o],s(l)){for(a=o;a<m;)f[a]=f[a+n],a+=n;f[m]=l}else{for(i=e(l),a=o-n;a>=d&&(!((u=f[a])<=l)||i&&u===l&&!1===e(u));)f[a+n]=u,a-=n;f[a+n]=l,o+=n}return f}function f(r,t,f,n,i){var o,a,d,m,l,u,j,p;if(r<=0||0===t)return f;if(t<0&&(i-=(r-1)*(n*=-1)),l=(m=i)+(r-1)*n,a=m+n,n<0){for(p=1;p<r;p++)if(u=f[a],s(u)){for(d=a;d>l;)f[d]=f[d+n],d+=n;f[l]=u}else{for(o=e(u),d=a-n;d<=m&&(!((j=f[d])<=u)||o&&j===u&&!1===e(j));)f[d+n]=j,d-=n;f[d+n]=u,a+=n}return f}for(p=1;p<r;p++)if(u=f[a],s(u)){for(d=a;d<l;)f[d]=f[d+n],d+=n;f[l]=u}else{for(o=e(u),d=a-n;d>=m&&(!((j=f[d])<=u)||o&&j===u&&!1===e(j));)f[d+n]=j,d-=n;f[d+n]=u,a+=n}return f}r(t,"ndarray",f);export{t as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
