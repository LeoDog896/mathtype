import{S as z,i as F,s as G,e as v,t as T,k as U,c as g,a as y,h as A,d as b,m as V,b as E,g as N,J as k,K as P,j as L,l as I,L as M,n as B,M as O,N as H}from"../chunks/index-d0df52ac.js";function j(n,e,l){const t=n.slice();return t[6]=e[l],t[7]=e,t[8]=l,t}function w(n,e,l){const t=n.slice();return t[9]=e[l],t[10]=e,t[11]=l,t}function C(n){let e;function l(c,s){return c[9].editable?W:Q}let t=l(n),i=t(n);return{c(){i.c(),e=I()},l(c){i.l(c),e=I()},m(c,s){i.m(c,s),N(c,e,s)},p(c,s){t===(t=l(c))&&i?i.p(c,s):(i.d(1),i=t(c),i&&(i.c(),i.m(e.parentNode,e)))},d(c){i.d(c),c&&b(e)}}}function Q(n){let e,l=n[9].content+"",t,i,c;function s(){return n[4](n[9],n[10],n[11])}return{c(){e=v("p"),t=T(l)},l(u){e=g(u,"P",{});var o=y(e);t=A(o,l),o.forEach(b)},m(u,o){N(u,e,o),k(e,t),i||(c=P(e,"dblclick",s),i=!0)},p(u,o){n=u,o&1&&l!==(l=n[9].content+"")&&L(t,l)},d(u){u&&b(e),i=!1,c()}}}function W(n){let e,l,t;function i(){return n[2](n[9],n[10],n[11])}function c(){n[3].call(e,n[10],n[11])}return{c(){e=v("input"),this.h()},l(s){e=g(s,"INPUT",{placeholder:!0}),this.h()},h(){E(e,"placeholder","Enter text...")},m(s,u){N(s,e,u),O(e,n[9].content),l||(t=[P(e,"blur",i),P(e,"input",c)],l=!0)},p(s,u){n=s,u&1&&e.value!==n[9].content&&O(e,n[9].content)},d(s){s&&b(e),l=!1,H(t)}}}function J(n){let e,l=n[9].type=="text"&&C(n);return{c(){l&&l.c(),e=I()},l(t){l&&l.l(t),e=I()},m(t,i){l&&l.m(t,i),N(t,e,i)},p(t,i){t[9].type=="text"?l?l.p(t,i):(l=C(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&b(e)}}}function K(n){let e,l,t=n[6].name+"",i,c,s,u,o,r,d,a,p=n[6].pieces,_=[];for(let h=0;h<p.length;h+=1)_[h]=J(w(n,p,h));function R(){return n[5](n[6],n[7],n[8])}return{c(){e=v("div"),l=v("p"),i=T(t),c=U(),s=v("div");for(let h=0;h<_.length;h+=1)_[h].c();u=U(),o=v("button"),r=T("Add Piece"),this.h()},l(h){e=g(h,"DIV",{class:!0});var m=y(e);l=g(m,"P",{class:!0});var f=y(l);i=A(f,t),f.forEach(b),c=V(m),s=g(m,"DIV",{class:!0});var S=y(s);for(let D=0;D<_.length;D+=1)_[D].l(S);S.forEach(b),u=V(m),o=g(m,"BUTTON",{class:!0});var q=y(o);r=A(q,"Add Piece"),q.forEach(b),m.forEach(b),this.h()},h(){E(l,"class","text-bold text-lg"),E(s,"class","border-l border-gray-300 p-4"),E(o,"class","print:hidden"),E(e,"class","block")},m(h,m){N(h,e,m),k(e,l),k(l,i),k(e,c),k(e,s);for(let f=0;f<_.length;f+=1)_[f].m(s,null);k(e,u),k(e,o),k(o,r),d||(a=P(o,"click",R),d=!0)},p(h,m){if(n=h,m&1&&t!==(t=n[6].name+"")&&L(i,t),m&1){p=n[6].pieces;let f;for(f=0;f<p.length;f+=1){const S=w(n,p,f);_[f]?_[f].p(S,m):(_[f]=J(S),_[f].c(),_[f].m(s,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=p.length}},d(h){h&&b(e),M(_,h),d=!1,a()}}}function X(n){let e,l,t,i,c,s,u=n[0],o=[];for(let r=0;r<u.length;r+=1)o[r]=K(j(n,u,r));return{c(){e=v("div");for(let r=0;r<o.length;r+=1)o[r].c();l=U(),t=v("button"),i=T("Add Section"),this.h()},l(r){e=g(r,"DIV",{class:!0});var d=y(e);for(let p=0;p<o.length;p+=1)o[p].l(d);l=V(d),t=g(d,"BUTTON",{class:!0});var a=y(t);i=A(a,"Add Section"),a.forEach(b),d.forEach(b),this.h()},h(){E(t,"class","print:hidden mt-4 px-4 py-2 rounded-lg bg-blue-300 ring active:ring-blue-200"),E(e,"class","m-8")},m(r,d){N(r,e,d);for(let a=0;a<o.length;a+=1)o[a].m(e,null);k(e,l),k(e,t),k(t,i),c||(s=P(t,"click",n[1]),c=!0)},p(r,[d]){if(d&1){u=r[0];let a;for(a=0;a<u.length;a+=1){const p=j(r,u,a);o[a]?o[a].p(p,d):(o[a]=K(p),o[a].c(),o[a].m(e,l))}for(;a<o.length;a+=1)o[a].d(1);o.length=u.length}},i:B,o:B,d(r){r&&b(e),M(o,r),c=!1,s()}}}function Y(n,e,l){let t=[];function i(){l(0,t=[...t,{name:"New Section",pieces:[]}])}const c=(r,d,a)=>{l(0,d[a].editable=!1,t)};function s(r,d){r[d].content=this.value,l(0,t)}return[t,i,c,s,(r,d,a)=>{l(0,d[a].editable=!0,t)},(r,d,a)=>{l(0,d[a].pieces=[...r.pieces,{type:"text",content:"hello"}],t)}]}class $ extends z{constructor(e){super(),F(this,e,Y,X,G,{})}}export{$ as default};
