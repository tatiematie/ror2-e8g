import{s as B,b as V,n as H}from"./scheduler.Cp24rM3s.js";import{S as j,i as w,e as f,s as D,b as L,c as v,d as g,f as h,g as E,h as q,j as G,k as n,l as M,m,n as x}from"./index.BqB8YB6x.js";function z(r){let e,l,i,o,u,c,t,y,k,_,I,S,d,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),u=D(),c=f("div"),t=f("h2"),y=L(r[0]),k=D(),_=f("p"),I=L(r[3]),S=D(),d=f("div"),d.innerHTML=N,this.h()},l(s){e=v(s,"DIV",{class:!0});var a=g(e);l=v(a,"DIV",{class:!0});var b=g(l);i=v(b,"IMG",{src:!0,alt:!0}),b.forEach(h),u=E(a),c=v(a,"DIV",{class:!0});var T=g(c);t=v(T,"H2",{});var C=g(t);y=q(C,r[0]),C.forEach(h),k=E(T),_=v(T,"P",{class:!0});var P=g(_);I=q(P,r[3]),P.forEach(h),T.forEach(h),a.forEach(h),S=E(s),d=v(s,"DIV",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-lwffu9"&&(d.innerHTML=N),this.h()},h(){V(i.src,o=r[1])||n(i,"src",o),n(i,"alt",r[2]),n(l,"class","corners"),n(_,"class","gray text"),n(c,"class","title"),n(e,"class","heading"),n(d,"class","content")},m(s,a){M(s,e,a),m(e,l),m(l,i),m(e,u),m(e,c),m(c,t),m(t,y),m(c,k),m(c,_),m(_,I),M(s,S,a),M(s,d,a)},p(s,[a]){a&2&&!V(i.src,o=s[1])&&n(i,"src",o),a&4&&n(i,"alt",s[2]),a&1&&x(y,s[0]),a&8&&x(I,s[3])},i:H,o:H,d(s){s&&(h(e),h(S),h(d))}}}function A(r,e,l){let{itemName:i="Pocket I.C.B.M."}=e,{imgSrc:o="/images/items/pocket-icbm.png"}=e,{altText:u="Pocket I.C.B.M."}=e,{rarity:c="Legendary Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,o=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,c=t.rarity)},[i,o,u,c]}class K extends j{constructor(e){super(),w(this,e,A,z,B,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
