import{s as C,b as H,n as M}from"./scheduler.Cp24rM3s.js";import{S as L,i as j,e as f,s as D,b as P,c as u,d as g,f as o,g as E,h as q,j as w,k as c,l as N,m as d,n as x}from"./index.BqB8YB6x.js";function G(n){let e,r,i,h,v,l,t,y,k,_,S,I,m,z='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),r=f("div"),i=f("img"),v=D(),l=f("div"),t=f("h2"),y=P(n[0]),k=D(),_=f("p"),S=P(n[3]),I=D(),m=f("div"),m.innerHTML=z,this.h()},l(s){e=u(s,"DIV",{class:!0});var a=g(e);r=u(a,"DIV",{class:!0});var V=g(r);i=u(V,"IMG",{src:!0,alt:!0}),V.forEach(o),v=E(a),l=u(a,"DIV",{class:!0});var T=g(l);t=u(T,"H2",{});var b=g(t);y=q(b,n[0]),b.forEach(o),k=E(T),_=u(T,"P",{class:!0});var B=g(_);S=q(B,n[3]),B.forEach(o),T.forEach(o),a.forEach(o),I=E(s),m=u(s,"DIV",{class:!0,"data-svelte-h":!0}),w(m)!=="svelte-lwffu9"&&(m.innerHTML=z),this.h()},h(){H(i.src,h=n[1])||c(i,"src",h),c(i,"alt",n[2]),c(r,"class","corners"),c(_,"class","gray text"),c(l,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(s,a){N(s,e,a),d(e,r),d(r,i),d(e,v),d(e,l),d(l,t),d(t,y),d(l,k),d(l,_),d(_,S),N(s,I,a),N(s,m,a)},p(s,[a]){a&2&&!H(i.src,h=s[1])&&c(i,"src",h),a&4&&c(i,"alt",s[2]),a&1&&x(y,s[0]),a&8&&x(S,s[3])},i:M,o:M,d(s){s&&(o(e),o(I),o(m))}}}function U(n,e,r){let{itemName:i="Berzerker's Pauldron"}=e,{imgSrc:h="/images/items/berzerkers-pauldron.png"}=e,{altText:v="Berzerker's Pauldron"}=e,{rarity:l="Uncommon Item"}=e;return n.$$set=t=>{"itemName"in t&&r(0,i=t.itemName),"imgSrc"in t&&r(1,h=t.imgSrc),"altText"in t&&r(2,v=t.altText),"rarity"in t&&r(3,l=t.rarity)},[i,h,v,l]}class J extends L{constructor(e){super(),j(this,e,U,G,C,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
