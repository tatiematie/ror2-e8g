import{s as j,b as q,n as x}from"./scheduler.Cp24rM3s.js";import{S as k,i as w,e as u,s as E,b as B,c as v,d as g,f as h,g as N,h as C,j as G,k as c,l as b,m as d,n as L}from"./index.BqB8YB6x.js";function P(r){let e,l,i,f,o,n,t,y,D,_,S,I,m,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=u("div"),l=u("div"),i=u("img"),o=E(),n=u("div"),t=u("h2"),y=B(r[0]),D=E(),_=u("p"),S=B(r[3]),I=E(),m=u("div"),m.innerHTML=V,this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);l=v(s,"DIV",{class:!0});var H=g(l);i=v(H,"IMG",{src:!0,alt:!0}),H.forEach(h),o=N(s),n=v(s,"DIV",{class:!0});var T=g(n);t=v(T,"H2",{});var M=g(t);y=C(M,r[0]),M.forEach(h),D=N(T),_=v(T,"P",{class:!0});var R=g(_);S=C(R,r[3]),R.forEach(h),T.forEach(h),s.forEach(h),I=N(a),m=v(a,"DIV",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-lwffu9"&&(m.innerHTML=V),this.h()},h(){q(i.src,f=r[1])||c(i,"src",f),c(i,"alt",r[2]),c(l,"class","corners"),c(_,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(a,s){b(a,e,s),d(e,l),d(l,i),d(e,o),d(e,n),d(n,t),d(t,y),d(n,D),d(n,_),d(_,S),b(a,I,s),b(a,m,s)},p(a,[s]){s&2&&!q(i.src,f=a[1])&&c(i,"src",f),s&4&&c(i,"alt",a[2]),s&1&&L(y,a[0]),s&8&&L(S,a[3])},i:x,o:x,d(a){a&&(h(e),h(I),h(m))}}}function U(r,e,l){let{itemName:i="Runald's Band"}=e,{imgSrc:f="/images/items/runalds-band.png"}=e,{altText:o="Runald's Band"}=e,{rarity:n="Uncommon Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,o=t.altText),"rarity"in t&&l(3,n=t.rarity)},[i,f,o,n]}class F extends k{constructor(e){super(),w(this,e,U,P,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{F as default};
