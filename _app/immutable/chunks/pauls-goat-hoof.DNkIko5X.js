import{s as j,b as M,n as b}from"./scheduler.Cp24rM3s.js";import{S as k,i as w,e as h,s as E,b as q,c as u,d as g,f,g as H,h as x,j as z,k as c,l as N,m as o,n as L}from"./index.BqB8YB6x.js";function A(n){let e,l,i,d,v,r,t,y,D,_,S,I,m,P='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=h("div"),l=h("div"),i=h("img"),v=E(),r=h("div"),t=h("h2"),y=q(n[0]),D=E(),_=h("p"),S=q(n[3]),I=E(),m=h("div"),m.innerHTML=P,this.h()},l(a){e=u(a,"DIV",{class:!0});var s=g(e);l=u(s,"DIV",{class:!0});var V=g(l);i=u(V,"IMG",{src:!0,alt:!0}),V.forEach(f),v=H(s),r=u(s,"DIV",{class:!0});var T=g(r);t=u(T,"H2",{});var C=g(t);y=x(C,n[0]),C.forEach(f),D=H(T),_=u(T,"P",{class:!0});var G=g(_);S=x(G,n[3]),G.forEach(f),T.forEach(f),s.forEach(f),I=H(a),m=u(a,"DIV",{class:!0,"data-svelte-h":!0}),z(m)!=="svelte-lwffu9"&&(m.innerHTML=P),this.h()},h(){M(i.src,d=n[1])||c(i,"src",d),c(i,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(a,s){N(a,e,s),o(e,l),o(l,i),o(e,v),o(e,r),o(r,t),o(t,y),o(r,D),o(r,_),o(_,S),N(a,I,s),N(a,m,s)},p(a,[s]){s&2&&!M(i.src,d=a[1])&&c(i,"src",d),s&4&&c(i,"alt",a[2]),s&1&&L(y,a[0]),s&8&&L(S,a[3])},i:b,o:b,d(a){a&&(f(e),f(I),f(m))}}}function B(n,e,l){let{itemName:i="Paul's Goat Hoof"}=e,{imgSrc:d="/images/items/pauls-goat-hoof.png"}=e,{altText:v="Paul's Goat Hoof"}=e,{rarity:r="Common Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,d=t.imgSrc),"altText"in t&&l(2,v=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,d,v,r]}class K extends k{constructor(e){super(),w(this,e,B,A,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
