import{s as j,b as L,n as M}from"./scheduler.Cp24rM3s.js";import{S as k,i as w,e as f,s as E,b as q,c as v,d as g,f as h,g as N,h as x,j as G,k as c,l as C,m,n as R}from"./index.BqB8YB6x.js";function P(r){let e,l,i,o,u,n,t,y,D,_,S,I,d,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),u=E(),n=f("div"),t=f("h2"),y=q(r[0]),D=E(),_=f("p"),S=q(r[3]),I=E(),d=f("div"),d.innerHTML=V,this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);l=v(s,"DIV",{class:!0});var b=g(l);i=v(b,"IMG",{src:!0,alt:!0}),b.forEach(h),u=N(s),n=v(s,"DIV",{class:!0});var T=g(n);t=v(T,"H2",{});var B=g(t);y=x(B,r[0]),B.forEach(h),D=N(T),_=v(T,"P",{class:!0});var H=g(_);S=x(H,r[3]),H.forEach(h),T.forEach(h),s.forEach(h),I=N(a),d=v(a,"DIV",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-lwffu9"&&(d.innerHTML=V),this.h()},h(){L(i.src,o=r[1])||c(i,"src",o),c(i,"alt",r[2]),c(l,"class","corners"),c(_,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(a,s){C(a,e,s),m(e,l),m(l,i),m(e,u),m(e,n),m(n,t),m(t,y),m(n,D),m(n,_),m(_,S),C(a,I,s),C(a,d,s)},p(a,[s]){s&2&&!L(i.src,o=a[1])&&c(i,"src",o),s&4&&c(i,"alt",a[2]),s&1&&R(y,a[0]),s&8&&R(S,a[3])},i:M,o:M,d(a){a&&(h(e),h(I),h(d))}}}function z(r,e,l){let{itemName:i="Ben's Rain Coat"}=e,{imgSrc:o="/images/items/bens-rain-coat.png"}=e,{altText:u="Ben's Rain Coat"}=e,{rarity:n="Legendary Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,o=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,n=t.rarity)},[i,o,u,n]}class J extends k{constructor(e){super(),w(this,e,z,P,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
