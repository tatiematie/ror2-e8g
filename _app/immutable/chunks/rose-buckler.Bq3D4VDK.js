import{s as L,b as R,n as q}from"./scheduler.Cp24rM3s.js";import{S as j,i as w,e as f,s as D,b as x,c as u,d as g,f as o,g as E,h as B,j as G,k as n,l as N,m,n as C}from"./index.BqB8YB6x.js";function P(c){let e,l,i,h,v,r,t,y,k,_,S,I,d,b='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),v=D(),r=f("div"),t=f("h2"),y=x(c[0]),k=D(),_=f("p"),S=x(c[3]),I=D(),d=f("div"),d.innerHTML=b,this.h()},l(s){e=u(s,"DIV",{class:!0});var a=g(e);l=u(a,"DIV",{class:!0});var V=g(l);i=u(V,"IMG",{src:!0,alt:!0}),V.forEach(o),v=E(a),r=u(a,"DIV",{class:!0});var T=g(r);t=u(T,"H2",{});var H=g(t);y=B(H,c[0]),H.forEach(o),k=E(T),_=u(T,"P",{class:!0});var M=g(_);S=B(M,c[3]),M.forEach(o),T.forEach(o),a.forEach(o),I=E(s),d=u(s,"DIV",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-lwffu9"&&(d.innerHTML=b),this.h()},h(){R(i.src,h=c[1])||n(i,"src",h),n(i,"alt",c[2]),n(l,"class","corners"),n(_,"class","gray text"),n(r,"class","title"),n(e,"class","heading"),n(d,"class","content")},m(s,a){N(s,e,a),m(e,l),m(l,i),m(e,v),m(e,r),m(r,t),m(t,y),m(r,k),m(r,_),m(_,S),N(s,I,a),N(s,d,a)},p(s,[a]){a&2&&!R(i.src,h=s[1])&&n(i,"src",h),a&4&&n(i,"alt",s[2]),a&1&&C(y,s[0]),a&8&&C(S,s[3])},i:q,o:q,d(s){s&&(o(e),o(I),o(d))}}}function U(c,e,l){let{itemName:i="Rose Buckler"}=e,{imgSrc:h="/images/items/rose-buckler.png"}=e,{altText:v="Rose Buckler"}=e,{rarity:r="Uncommon Item"}=e;return c.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,h=t.imgSrc),"altText"in t&&l(2,v=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,h,v,r]}class F extends j{constructor(e){super(),w(this,e,U,P,L,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{F as default};
