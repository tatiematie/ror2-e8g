import{s as F,b as C,n as H}from"./scheduler.Cp24rM3s.js";import{S as L,i as j,e as h,s as w,b as M,c as u,d as g,f as o,g as D,h as q,j as G,k as c,l as E,m as d,n as x}from"./index.BqB8YB6x.js";function P(n){let e,l,i,f,v,r,t,y,k,_,S,I,m,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=h("div"),l=h("div"),i=h("img"),v=w(),r=h("div"),t=h("h2"),y=M(n[0]),k=w(),_=h("p"),S=M(n[3]),I=w(),m=h("div"),m.innerHTML=N,this.h()},l(s){e=u(s,"DIV",{class:!0});var a=g(e);l=u(a,"DIV",{class:!0});var V=g(l);i=u(V,"IMG",{src:!0,alt:!0}),V.forEach(o),v=D(a),r=u(a,"DIV",{class:!0});var T=g(r);t=u(T,"H2",{});var b=g(t);y=q(b,n[0]),b.forEach(o),k=D(T),_=u(T,"P",{class:!0});var B=g(_);S=q(B,n[3]),B.forEach(o),T.forEach(o),a.forEach(o),I=D(s),m=u(s,"DIV",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-lwffu9"&&(m.innerHTML=N),this.h()},h(){C(i.src,f=n[1])||c(i,"src",f),c(i,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(s,a){E(s,e,a),d(e,l),d(l,i),d(e,v),d(e,r),d(r,t),d(t,y),d(r,k),d(r,_),d(_,S),E(s,I,a),E(s,m,a)},p(s,[a]){a&2&&!C(i.src,f=s[1])&&c(i,"src",f),a&4&&c(i,"alt",s[2]),a&1&&x(y,s[0]),a&8&&x(S,s[3])},i:H,o:H,d(s){s&&(o(e),o(I),o(m))}}}function z(n,e,l){let{itemName:i="Bundle of Fireworks"}=e,{imgSrc:f="/images/items/bundle-of-fireworks.png"}=e,{altText:v="Bundle of Fireworks"}=e,{rarity:r="Common Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,v=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,f,v,r]}class K extends L{constructor(e){super(),j(this,e,z,P,F,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
