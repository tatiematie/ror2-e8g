import{s as k,b,n as x}from"./scheduler.Cp24rM3s.js";import{S as G,i as P,e as v,s as w,b as C,c as o,d as g,f as h,g as D,h as L,j as z,k as c,l as N,m,n as j}from"./index.BqB8YB6x.js";function A(n){let e,l,i,f,u,r,t,S,T,_,y,E,d,V='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=v("div"),l=v("div"),i=v("img"),u=w(),r=v("div"),t=v("h2"),S=C(n[0]),T=w(),_=v("p"),y=C(n[3]),E=w(),d=v("div"),d.innerHTML=V,this.h()},l(a){e=o(a,"DIV",{class:!0});var s=g(e);l=o(s,"DIV",{class:!0});var q=g(l);i=o(q,"IMG",{src:!0,alt:!0}),q.forEach(h),u=D(s),r=o(s,"DIV",{class:!0});var I=g(r);t=o(I,"H2",{});var H=g(t);S=L(H,n[0]),H.forEach(h),T=D(I),_=o(I,"P",{class:!0});var M=g(_);y=L(M,n[3]),M.forEach(h),I.forEach(h),s.forEach(h),E=D(a),d=o(a,"DIV",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-lwffu9"&&(d.innerHTML=V),this.h()},h(){b(i.src,f=n[1])||c(i,"src",f),c(i,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(a,s){N(a,e,s),m(e,l),m(l,i),m(e,u),m(e,r),m(r,t),m(t,S),m(r,T),m(r,_),m(_,y),N(a,E,s),N(a,d,s)},p(a,[s]){s&2&&!b(i.src,f=a[1])&&c(i,"src",f),s&4&&c(i,"alt",a[2]),s&1&&j(S,a[0]),s&8&&j(y,a[3])},i:x,o:x,d(a){a&&(h(e),h(E),h(d))}}}function B(n,e,l){let{itemName:i="Sawmerang"}=e,{imgSrc:f="/images/items/sawmerang.png"}=e,{altText:u="Sawmerang"}=e,{rarity:r="Equipment Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,f,u,r]}class K extends G{constructor(e){super(),P(this,e,B,A,k,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
