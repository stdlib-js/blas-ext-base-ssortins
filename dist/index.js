"use strict";var p=function(l,q){return function(){return q||l((q={exports:{}}).exports,q),q.exports}};var y=p(function(J,k){
var c=require('@stdlib/math-base-assert-is-negative-zerof/dist'),g=require('@stdlib/math-base-assert-is-nanf/dist');function z(l,q,a,r){var h,i,e,v,o,n,f,u;if(l<=0||q===0)return a;if(q<0&&(r*=-1),r<0){for(v=(1-l)*r,o=0,i=v+r,u=1;u<l;u++)if(n=a[i],g(n)){for(e=i;e>o;)a[e]=a[e+r],e+=r;a[o]=n}else{for(h=c(n),e=i-r;e<=v&&(f=a[e],!(f<=n&&!(h&&f===n&&c(f)===!1)));)a[e+r]=f,e-=r;a[e+r]=n,i+=r}return a}for(v=0,o=(l-1)*r,i=v+r,u=1;u<l;u++)if(n=a[i],g(n)){for(e=i;e<o;)a[e]=a[e+r],e+=r;a[o]=n}else{for(h=c(n),e=i-r;e>=v&&(f=a[e],!(f<=n&&!(h&&f===n&&c(f)===!1)));)a[e+r]=f,e-=r;a[e+r]=n,i+=r}return a}k.exports=z
});var R=p(function(K,s){
var j=require('@stdlib/math-base-assert-is-negative-zerof/dist'),m=require('@stdlib/math-base-assert-is-nanf/dist');function A(l,q,a,r,h){var i,e,v,o,n,f,u,w;if(l<=0||q===0)return a;if(q<0&&(r*=-1,h-=(l-1)*r),o=h,n=o+(l-1)*r,e=o+r,r<0){for(w=1;w<l;w++)if(f=a[e],m(f)){for(v=e;v>n;)a[v]=a[v+r],v+=r;a[n]=f}else{for(i=j(f),v=e-r;v<=o&&(u=a[v],!(u<=f&&!(i&&u===f&&j(u)===!1)));)a[v+r]=u,v-=r;a[v+r]=f,e+=r}return a}for(w=1;w<l;w++)if(f=a[e],m(f)){for(v=e;v<n;)a[v]=a[v+r],v+=r;a[n]=f}else{for(i=j(f),v=e-r;v>=o&&(u=a[v],!(u<=f&&!(i&&u===f&&j(u)===!1)));)a[v+r]=u,v-=r;a[v+r]=f,e+=r}return a}s.exports=A
});var E=p(function(L,_){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=y(),C=R();B(Z,"ndarray",C);_.exports=Z
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=E(),b,O=F(D(__dirname,"./native.js"));G(O)?b=H:b=O;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
