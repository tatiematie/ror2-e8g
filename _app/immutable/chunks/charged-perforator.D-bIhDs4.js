import{s as k,b,n as q}from"./scheduler.Cp24rM3s.js";import{S as w,i as B,e as f,s as D,b as x,c as v,d as g,f as h,g as E,h as L,j as G,k as c,l as N,m as d,n as j}from"./index.BqB8YB6x.js";function z(n){let e,r,i,m,u,l,t,y,C,_,S,I,o,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),r=f("div"),i=f("img"),u=D(),l=f("div"),t=f("h2"),y=x(n[0]),C=D(),_=f("p"),S=x(n[3]),I=D(),o=f("div"),o.innerHTML=V,this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);r=v(s,"DIV",{class:!0});var H=g(r);i=v(H,"IMG",{src:!0,alt:!0}),H.forEach(h),u=E(s),l=v(s,"DIV",{class:!0});var T=g(l);t=v(T,"H2",{});var M=g(t);y=L(M,n[0]),M.forEach(h),C=E(T),_=v(T,"P",{class:!0});var P=g(_);S=L(P,n[3]),P.forEach(h),T.forEach(h),s.forEach(h),I=E(a),o=v(a,"DIV",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-lwffu9"&&(o.innerHTML=V),this.h()},h(){b(i.src,m=n[1])||c(i,"src",m),c(i,"alt",n[2]),c(r,"class","corners"),c(_,"class","gray text"),c(l,"class","title"),c(e,"class","heading"),c(o,"class","content")},m(a,s){N(a,e,s),d(e,r),d(r,i),d(e,u),d(e,l),d(l,t),d(t,y),d(l,C),d(l,_),d(_,S),N(a,I,s),N(a,o,s)},p(a,[s]){s&2&&!b(i.src,m=a[1])&&c(i,"src",m),s&4&&c(i,"alt",a[2]),s&1&&j(y,a[0]),s&8&&j(S,a[3])},i:q,o:q,d(a){a&&(h(e),h(I),h(o))}}}function A(n,e,r){let{itemName:i="Charged Perforator"}=e,{imgSrc:m="/images/items/charged-perforator.png"}=e,{altText:u="Charged Perforator"}=e,{rarity:l="Boss Item"}=e;return n.$$set=t=>{"itemName"in t&&r(0,i=t.itemName),"imgSrc"in t&&r(1,m=t.imgSrc),"altText"in t&&r(2,u=t.altText),"rarity"in t&&r(3,l=t.rarity)},[i,m,u,l]}class K extends w{constructor(e){super(),B(this,e,A,z,k,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
