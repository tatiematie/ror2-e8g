import{s as w,b as q,n as x}from"./scheduler.Cp24rM3s.js";import{S as G,i as P,e as v,s as T,b as C,c as h,d as g,f as o,g as E,h as j,j as z,k as c,l as M,m,n as k}from"./index.BqB8YB6x.js";function A(n){let e,l,a,f,u,r,t,y,I,_,D,S,d,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=v("div"),l=v("div"),a=v("img"),u=T(),r=v("div"),t=v("h2"),y=C(n[0]),I=T(),_=v("p"),D=C(n[3]),S=T(),d=v("div"),d.innerHTML=N,this.h()},l(s){e=h(s,"DIV",{class:!0});var i=g(e);l=h(i,"DIV",{class:!0});var V=g(l);a=h(V,"IMG",{src:!0,alt:!0}),V.forEach(o),u=E(i),r=h(i,"DIV",{class:!0});var b=g(r);t=h(b,"H2",{});var H=g(t);y=j(H,n[0]),H.forEach(o),I=E(b),_=h(b,"P",{class:!0});var L=g(_);D=j(L,n[3]),L.forEach(o),b.forEach(o),i.forEach(o),S=E(s),d=h(s,"DIV",{class:!0,"data-svelte-h":!0}),z(d)!=="svelte-lwffu9"&&(d.innerHTML=N),this.h()},h(){q(a.src,f=n[1])||c(a,"src",f),c(a,"alt",n[2]),c(l,"class","corners"),c(_,"class","gray text"),c(r,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(s,i){M(s,e,i),m(e,l),m(l,a),m(e,u),m(e,r),m(r,t),m(t,y),m(r,I),m(r,_),m(_,D),M(s,S,i),M(s,d,i)},p(s,[i]){i&2&&!q(a.src,f=s[1])&&c(a,"src",f),i&4&&c(a,"alt",s[2]),i&1&&k(y,s[0]),i&8&&k(D,s[3])},i:x,o:x,d(s){s&&(o(e),o(S),o(d))}}}function B(n,e,l){let{itemName:a="Defensive Microbots"}=e,{imgSrc:f="/images/items/defensive-microbots.png"}=e,{altText:u="Defensive Microbots"}=e,{rarity:r="Legendary Item"}=e;return n.$$set=t=>{"itemName"in t&&l(0,a=t.itemName),"imgSrc"in t&&l(1,f=t.imgSrc),"altText"in t&&l(2,u=t.altText),"rarity"in t&&l(3,r=t.rarity)},[a,f,u,r]}class K extends G{constructor(e){super(),P(this,e,B,A,w,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
