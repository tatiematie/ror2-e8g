import{s as k,b as q,n as x}from"./scheduler.Cp24rM3s.js";import{S as w,i as G,e as f,s as B,b as C,c as v,d as g,f as h,g as D,h as L,j as P,k as r,l as E,m,n as j}from"./index.BqB8YB6x.js";function z(c){let e,l,i,d,u,n,t,y,b,_,S,I,o,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),u=B(),n=f("div"),t=f("h2"),y=C(c[0]),b=B(),_=f("p"),S=C(c[3]),I=B(),o=f("div"),o.innerHTML=N,this.h()},l(s){e=v(s,"DIV",{class:!0});var a=g(e);l=v(a,"DIV",{class:!0});var V=g(l);i=v(V,"IMG",{src:!0,alt:!0}),V.forEach(h),u=D(a),n=v(a,"DIV",{class:!0});var T=g(n);t=v(T,"H2",{});var H=g(t);y=L(H,c[0]),H.forEach(h),b=D(T),_=v(T,"P",{class:!0});var M=g(_);S=L(M,c[3]),M.forEach(h),T.forEach(h),a.forEach(h),I=D(s),o=v(s,"DIV",{class:!0,"data-svelte-h":!0}),P(o)!=="svelte-lwffu9"&&(o.innerHTML=N),this.h()},h(){q(i.src,d=c[1])||r(i,"src",d),r(i,"alt",c[2]),r(l,"class","corners"),r(_,"class","gray text"),r(n,"class","title"),r(e,"class","heading"),r(o,"class","content")},m(s,a){E(s,e,a),m(e,l),m(l,i),m(e,u),m(e,n),m(n,t),m(t,y),m(n,b),m(n,_),m(_,S),E(s,I,a),E(s,o,a)},p(s,[a]){a&2&&!q(i.src,d=s[1])&&r(i,"src",d),a&4&&r(i,"alt",s[2]),a&1&&j(y,s[0]),a&8&&j(S,s[3])},i:x,o:x,d(s){s&&(h(e),h(I),h(o))}}}function A(c,e,l){let{itemName:i="Benthic Bloom"}=e,{imgSrc:d="/images/items/benthic-bloom.png"}=e,{altText:u="Benthic Bloom"}=e,{rarity:n="Void Item"}=e;return c.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,d=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,n=t.rarity)},[i,d,u,n]}class K extends w{constructor(e){super(),G(this,e,A,z,k,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
