import{s as W,b as M,n as b}from"./scheduler.Cp24rM3s.js";import{S as j,i as k,e as f,s as D,b as x,c as v,d as g,f as o,g as N,h as C,j as p,k as c,l as G,m as d,n as L}from"./index.BqB8YB6x.js";function P(n){let e,l,i,h,u,r,t,y,T,_,S,E,m,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),u=D(),r=f("div"),t=f("h2"),y=x(n[0]),T=D(),_=f("p"),S=x(n[3]),E=D(),m=f("div"),m.innerHTML=V,this.h()},l(s){e=v(s,"DIV",{class:!0});var a=g(e);l=v(a,"DIV",{class:!0});var q=g(l);i=v(q,"IMG",{src:!0,alt:!0}),q.forEach(o),u=N(a),r=v(a,"DIV",{class:!0});var I=g(r);t=v(I,"H2",{});var w=g(t);y=C(w,n[0]),w.forEach(o),T=N(I),_=v(I,"P",{class:!0});var H=g(_);S=C(H,n[3]),H.forEach(o),I.forEach(o),a.forEach(o),E=N(s),m=v(s,"DIV",{class:!0,"data-svelte-h":!0}),p(m)!=="svelte-lwffu9"&&(m.innerHTML=V),this.h()},h(){M(i.src,h=n[1])||c(i,"src",h),c(i,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(m,"class","content")},m(s,a){G(s,e,a),d(e,l),d(l,i),d(e,u),d(e,r),d(r,t),d(t,y),d(r,T),d(r,_),d(_,S),G(s,E,a),G(s,m,a)},p(s,[a]){a&2&&!M(i.src,h=s[1])&&c(i,"src",h),a&4&&c(i,"alt",s[2]),a&1&&L(y,s[0]),a&8&&L(S,s[3])},i:b,o:b,d(s){s&&(o(e),o(E),o(m))}}}function z(n,e,l){let{itemName:i="Gnarled Woodsprite"}=e,{imgSrc:h="/images/items/gnarled-woodsprite.png"}=e,{altText:u="Gnarled Woodsprite"}=e,{rarity:r="Equipment Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,h=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,h,u,r]}class F extends j{constructor(e){super(),k(this,e,z,P,W,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{F as default};
