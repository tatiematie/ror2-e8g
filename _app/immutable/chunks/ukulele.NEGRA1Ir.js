import{s as j,b,n as q}from"./scheduler.Cp24rM3s.js";import{S as w,i as G,e as f,s as D,b as x,c as v,d as g,f as h,g as E,h as C,j as P,k as c,l as N,m,n as L}from"./index.BqB8YB6x.js";function z(r){let e,l,i,u,o,n,t,y,k,_,S,I,d,U='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),o=D(),n=f("div"),t=f("h2"),y=x(r[0]),k=D(),_=f("p"),S=x(r[3]),I=D(),d=f("div"),d.innerHTML=U,this.h()},l(s){e=v(s,"DIV",{class:!0});var a=g(e);l=v(a,"DIV",{class:!0});var V=g(l);i=v(V,"IMG",{src:!0,alt:!0}),V.forEach(h),o=E(a),n=v(a,"DIV",{class:!0});var T=g(n);t=v(T,"H2",{});var H=g(t);y=C(H,r[0]),H.forEach(h),k=E(T),_=v(T,"P",{class:!0});var M=g(_);S=C(M,r[3]),M.forEach(h),T.forEach(h),a.forEach(h),I=E(s),d=v(s,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-lwffu9"&&(d.innerHTML=U),this.h()},h(){b(i.src,u=r[1])||c(i,"src",u),c(i,"alt",r[2]),c(l,"class","corners"),c(_,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(s,a){N(s,e,a),m(e,l),m(l,i),m(e,o),m(e,n),m(n,t),m(t,y),m(n,k),m(n,_),m(_,S),N(s,I,a),N(s,d,a)},p(s,[a]){a&2&&!b(i.src,u=s[1])&&c(i,"src",u),a&4&&c(i,"alt",s[2]),a&1&&L(y,s[0]),a&8&&L(S,s[3])},i:q,o:q,d(s){s&&(h(e),h(I),h(d))}}}function A(r,e,l){let{itemName:i="Ukulele"}=e,{imgSrc:u="/images/items/ukulele.png"}=e,{altText:o="Ukulele"}=e,{rarity:n="Uncommon Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,u=t.imgSrc),"altText"in t&&l(2,o=t.altText),"rarity"in t&&l(3,n=t.rarity)},[i,u,o,n]}class J extends w{constructor(e){super(),G(this,e,A,z,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
