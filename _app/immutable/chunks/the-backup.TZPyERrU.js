import{s as j,b as M,n as x}from"./scheduler.Cp24rM3s.js";import{S as p,i as w,e as f,s as k,b as B,c as v,d as g,f as d,g as D,h as C,j as G,k as n,l as N,m,n as L}from"./index.BqB8YB6x.js";function P(r){let e,l,i,u,o,c,t,T,I,_,y,S,h,b='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),o=k(),c=f("div"),t=f("h2"),T=B(r[0]),I=k(),_=f("p"),y=B(r[3]),S=k(),h=f("div"),h.innerHTML=b,this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);l=v(s,"DIV",{class:!0});var V=g(l);i=v(V,"IMG",{src:!0,alt:!0}),V.forEach(d),o=D(s),c=v(s,"DIV",{class:!0});var E=g(c);t=v(E,"H2",{});var q=g(t);T=C(q,r[0]),q.forEach(d),I=D(E),_=v(E,"P",{class:!0});var H=g(_);y=C(H,r[3]),H.forEach(d),E.forEach(d),s.forEach(d),S=D(a),h=v(a,"DIV",{class:!0,"data-svelte-h":!0}),G(h)!=="svelte-lwffu9"&&(h.innerHTML=b),this.h()},h(){M(i.src,u=r[1])||n(i,"src",u),n(i,"alt",r[2]),n(l,"class","corners"),n(_,"class","gray text"),n(c,"class","title"),n(e,"class","heading"),n(h,"class","content")},m(a,s){N(a,e,s),m(e,l),m(l,i),m(e,o),m(e,c),m(c,t),m(t,T),m(c,I),m(c,_),m(_,y),N(a,S,s),N(a,h,s)},p(a,[s]){s&2&&!M(i.src,u=a[1])&&n(i,"src",u),s&4&&n(i,"alt",a[2]),s&1&&L(T,a[0]),s&8&&L(y,a[3])},i:x,o:x,d(a){a&&(d(e),d(S),d(h))}}}function z(r,e,l){let{itemName:i="The Backup"}=e,{imgSrc:u="/images/items/the-backup.png"}=e,{altText:o="The Backup"}=e,{rarity:c="Equipment Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,u=t.imgSrc),"altText"in t&&l(2,o=t.altText),"rarity"in t&&l(3,c=t.rarity)},[i,u,o,c]}class J extends p{constructor(e){super(),w(this,e,z,P,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
