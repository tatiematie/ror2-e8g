import{s as j,b as M,n as q}from"./scheduler.Cp24rM3s.js";import{S as k,i as w,e as h,s as E,b as x,c as v,d as _,f as d,g as N,h as F,j as G,k as c,l as V,m as u,n as L}from"./index.BqB8YB6x.js";function P(r){let e,l,i,f,o,n,t,y,D,g,S,I,m,b='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=h("div"),l=h("div"),i=h("img"),o=E(),n=h("div"),t=h("h2"),y=x(r[0]),D=E(),g=h("p"),S=x(r[3]),I=E(),m=h("div"),m.innerHTML=b,this.h()},l(s){e=v(s,"DIV",{class:!0});var a=_(e);l=v(a,"DIV",{class:!0});var B=_(l);i=v(B,"IMG",{src:!0,alt:!0}),B.forEach(d),o=N(a),n=v(a,"DIV",{class:!0});var T=_(n);t=v(T,"H2",{});var C=_(t);y=F(C,r[0]),C.forEach(d),D=N(T),g=v(T,"P",{class:!0});var H=_(g);S=F(H,r[3]),H.forEach(d),T.forEach(d),a.forEach(d),I=N(s),m=v(s,"DIV",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-lwffu9"&&(m.innerHTML=b),this.h()},h(){M(i.src,f=r[1])||c(i,"src",f),c(i,"alt",r[2]),c(l,"class","corners"),c(g,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(s,a){V(s,e,a),u(e,l),u(l,i),u(e,o),u(e,n),u(n,t),u(t,y),u(n,D),u(n,g),u(g,S),V(s,I,a),V(s,m,a)},p(s,[a]){a&2&&!M(i.src,f=s[1])&&c(i,"src",f),a&4&&c(i,"alt",s[2]),a&1&&L(y,s[0]),a&8&&L(S,s[3])},i:q,o:q,d(s){s&&(d(e),d(I),d(m))}}}function z(r,e,l){let{itemName:i="Bustling Fungus"}=e,{imgSrc:f="/images/items/bustling-fungus.png"}=e,{altText:o="Bustling Fungus"}=e,{rarity:n="Common Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,o=t.altText),"rarity"in t&&l(3,n=t.rarity)},[i,f,o,n]}class K extends k{constructor(e){super(),w(this,e,z,P,j,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
