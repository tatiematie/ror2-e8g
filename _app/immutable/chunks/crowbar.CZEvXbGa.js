import{s as k,b as M,n as q}from"./scheduler.Cp24rM3s.js";import{S as G,i as P,e as f,s as T,b as x,c as v,d as g,f as o,g as w,h as L,j as z,k as c,l as D,m,n as j}from"./index.BqB8YB6x.js";function A(n){let e,l,i,h,u,r,t,y,I,_,S,b,d,E='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),i=f("img"),u=T(),r=f("div"),t=f("h2"),y=x(n[0]),I=T(),_=f("p"),S=x(n[3]),b=T(),d=f("div"),d.innerHTML=E,this.h()},l(a){e=v(a,"DIV",{class:!0});var s=g(e);l=v(s,"DIV",{class:!0});var N=g(l);i=v(N,"IMG",{src:!0,alt:!0}),N.forEach(o),u=w(s),r=v(s,"DIV",{class:!0});var C=g(r);t=v(C,"H2",{});var V=g(t);y=L(V,n[0]),V.forEach(o),I=w(C),_=v(C,"P",{class:!0});var H=g(_);S=L(H,n[3]),H.forEach(o),C.forEach(o),s.forEach(o),b=w(a),d=v(a,"DIV",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-lwffu9"&&(d.innerHTML=E),this.h()},h(){M(i.src,h=n[1])||c(i,"src",h),c(i,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(a,s){D(a,e,s),m(e,l),m(l,i),m(e,u),m(e,r),m(r,t),m(t,y),m(r,I),m(r,_),m(_,S),D(a,b,s),D(a,d,s)},p(a,[s]){s&2&&!M(i.src,h=a[1])&&c(i,"src",h),s&4&&c(i,"alt",a[2]),s&1&&j(y,a[0]),s&8&&j(S,a[3])},i:q,o:q,d(a){a&&(o(e),o(b),o(d))}}}function B(n,e,l){let{itemName:i="Crowbar"}=e,{imgSrc:h="/images/items/crowbar.png"}=e,{altText:u="Crowbar"}=e,{rarity:r="Common Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,i=t.itemName),"imgSrc"in t&&l(1,h=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[i,h,u,r]}class K extends G{constructor(e){super(),P(this,e,B,A,k,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
