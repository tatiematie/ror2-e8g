import{s as k,b,n as x}from"./scheduler.Cp24rM3s.js";import{S as w,i as G,e as v,s as D,b as C,c as o,d as g,f as h,g as N,h as L,j as P,k as n,l as V,m,n as j}from"./index.BqB8YB6x.js";function z(c){let e,l,i,f,u,r,t,y,T,_,S,E,d,q='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=v("div"),l=v("div"),i=v("img"),u=D(),r=v("div"),t=v("h2"),y=C(c[0]),T=D(),_=v("p"),S=C(c[3]),E=D(),d=v("div"),d.innerHTML=q,this.h()},l(s){e=o(s,"DIV",{class:!0});var a=g(e);l=o(a,"DIV",{class:!0});var H=g(l);i=o(H,"IMG",{src:!0,alt:!0}),H.forEach(h),u=N(a),r=o(a,"DIV",{class:!0});var I=g(r);t=o(I,"H2",{});var M=g(t);y=L(M,c[0]),M.forEach(h),T=N(I),_=o(I,"P",{class:!0});var R=g(_);S=L(R,c[3]),R.forEach(h),I.forEach(h),a.forEach(h),E=N(s),d=o(s,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-lwffu9"&&(d.innerHTML=q),this.h()},h(){b(i.src,f=c[1])||n(i,"src",f),n(i,"alt",c[2]),n(l,"class","corners"),n(_,"class","gray text"),n(r,"class","title"),n(e,"class","heading"),n(d,"class","content")},m(s,a){V(s,e,a),m(e,l),m(l,i),m(e,u),m(e,r),m(r,t),m(t,y),m(r,T),m(r,_),m(_,S),V(s,E,a),V(s,d,a)},p(s,[a]){a&2&&!b(i.src,f=s[1])&&n(i,"src",f),a&4&&n(i,"alt",s[2]),a&1&&j(y,s[0]),a&8&&j(S,s[3])},i:x,o:x,d(s){s&&(h(e),h(E),h(d))}}}function A(c,e,l){let{itemName:i="Recycler"}=e,{imgSrc:f="/images/items/recycler.png"}=e,{altText:u="Recycler"}=e,{rarity:r="Equipment Item"}=e;return c.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,f,u,r]}class J extends w{constructor(e){super(),G(this,e,A,z,k,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
