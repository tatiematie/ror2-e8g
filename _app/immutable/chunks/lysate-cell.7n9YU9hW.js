import{s as w,b,n as q}from"./scheduler.Cp24rM3s.js";import{S as G,i as P,e as v,s as E,b as x,c as o,d as g,f as h,g as L,h as j,j as z,k as n,l as N,m,n as k}from"./index.BqB8YB6x.js";function A(c){let e,l,i,f,u,r,t,y,D,_,S,I,d,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=v("div"),l=v("div"),i=v("img"),u=E(),r=v("div"),t=v("h2"),y=x(c[0]),D=E(),_=v("p"),S=x(c[3]),I=E(),d=v("div"),d.innerHTML=V,this.h()},l(s){e=o(s,"DIV",{class:!0});var a=g(e);l=o(a,"DIV",{class:!0});var C=g(l);i=o(C,"IMG",{src:!0,alt:!0}),C.forEach(h),u=L(a),r=o(a,"DIV",{class:!0});var T=g(r);t=o(T,"H2",{});var H=g(t);y=j(H,c[0]),H.forEach(h),D=L(T),_=o(T,"P",{class:!0});var M=g(_);S=j(M,c[3]),M.forEach(h),T.forEach(h),a.forEach(h),I=L(s),d=o(s,"DIV",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-lwffu9"&&(d.innerHTML=V),this.h()},h(){b(i.src,f=c[1])||n(i,"src",f),n(i,"alt",c[2]),n(l,"class","corners"),n(_,"class","gray text"),n(r,"class","title"),n(e,"class","heading"),n(d,"class","content")},m(s,a){N(s,e,a),m(e,l),m(l,i),m(e,u),m(e,r),m(r,t),m(t,y),m(r,D),m(r,_),m(_,S),N(s,I,a),N(s,d,a)},p(s,[a]){a&2&&!b(i.src,f=s[1])&&n(i,"src",f),a&4&&n(i,"alt",s[2]),a&1&&k(y,s[0]),a&8&&k(S,s[3])},i:q,o:q,d(s){s&&(h(e),h(I),h(d))}}}function B(c,e,l){let{itemName:i="Lysate Cell"}=e,{imgSrc:f="/images/items/lysate-cell.png"}=e,{altText:u="Lysate Cell"}=e,{rarity:r="Void Item"}=e;return c.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,f,u,r]}class K extends G{constructor(e){super(),P(this,e,B,A,w,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
