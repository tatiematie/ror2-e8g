import{s as L,b as H,n as b}from"./scheduler.Cp24rM3s.js";import{S as j,i as w,e as v,s as k,b as q,c as o,d as g,f as h,g as D,h as x,j as P,k as c,l as E,m,n as C}from"./index.BqB8YB6x.js";function U(r){let e,l,a,f,u,n,t,y,I,_,S,T,d,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=v("div"),l=v("div"),a=v("img"),u=k(),n=v("div"),t=v("h2"),y=q(r[0]),I=k(),_=v("p"),S=q(r[3]),T=k(),d=v("div"),d.innerHTML=N,this.h()},l(s){e=o(s,"DIV",{class:!0});var i=g(e);l=o(i,"DIV",{class:!0});var V=g(l);a=o(V,"IMG",{src:!0,alt:!0}),V.forEach(h),u=D(i),n=o(i,"DIV",{class:!0});var M=g(n);t=o(M,"H2",{});var A=g(t);y=x(A,r[0]),A.forEach(h),I=D(M),_=o(M,"P",{class:!0});var G=g(_);S=x(G,r[3]),G.forEach(h),M.forEach(h),i.forEach(h),T=D(s),d=o(s,"DIV",{class:!0,"data-svelte-h":!0}),P(d)!=="svelte-lwffu9"&&(d.innerHTML=N),this.h()},h(){H(a.src,f=r[1])||c(a,"src",f),c(a,"alt",r[2]),c(l,"class","corners"),c(_,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(s,i){E(s,e,i),m(e,l),m(l,a),m(e,u),m(e,n),m(n,t),m(t,y),m(n,I),m(n,_),m(_,S),E(s,T,i),E(s,d,i)},p(s,[i]){i&2&&!H(a.src,f=s[1])&&c(a,"src",f),i&4&&c(a,"alt",s[2]),i&1&&C(y,s[0]),i&8&&C(S,s[3])},i:b,o:b,d(s){s&&(h(e),h(T),h(d))}}}function z(r,e,l){let{itemName:a="ATG Missile Mk.1"}=e,{imgSrc:f="/images/items/atg-missile-mk1.png"}=e,{altText:u="ATG Missile Mk.1"}=e,{rarity:n="Uncommon Item"}=e;return r.$$set=t=>{"itemName"in t&&l(0,a=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,n=t.rarity)},[a,f,u,n]}class J extends j{constructor(e){super(),w(this,e,z,U,L,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{J as default};
