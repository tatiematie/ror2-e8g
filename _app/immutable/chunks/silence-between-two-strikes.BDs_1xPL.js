import{s as L,b as M,n as q}from"./scheduler.Cp24rM3s.js";import{S as j,i as A,e as f,s as k,b as x,c as v,d as g,f as h,g as D,h as B,j as G,k as c,l as I,m,n as C}from"./index.BqB8YB6x.js";function P(r){let e,l,a,o,_,n,t,S,E,u,w,y,d,N='<div class="section"><h3>Description:</h3></div> <div class="section"><h3>Strategy:</h3></div> <div class="section"><h3>Synergy:</h3> <ul class="content synergies"></ul></div> <div class="section"><h3>Notes:</h3></div>';return{c(){e=f("div"),l=f("div"),a=f("img"),_=k(),n=f("div"),t=f("h2"),S=x(r[0]),E=k(),u=f("p"),w=x(r[3]),y=k(),d=f("div"),d.innerHTML=N,this.h()},l(s){e=v(s,"DIV",{class:!0});var i=g(e);l=v(i,"DIV",{class:!0});var b=g(l);a=v(b,"IMG",{src:!0,alt:!0}),b.forEach(h),_=D(i),n=v(i,"DIV",{class:!0});var T=g(n);t=v(T,"H2",{});var V=g(t);S=B(V,r[0]),V.forEach(h),E=D(T),u=v(T,"P",{class:!0});var H=g(u);w=B(H,r[3]),H.forEach(h),T.forEach(h),i.forEach(h),y=D(s),d=v(s,"DIV",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-lwffu9"&&(d.innerHTML=N),this.h()},h(){M(a.src,o=r[1])||c(a,"src",o),c(a,"alt",r[2]),c(l,"class","corners"),c(u,"class","gray text"),c(n,"class","title"),c(e,"class","heading"),c(d,"class","content")},m(s,i){I(s,e,i),m(e,l),m(l,a),m(e,_),m(e,n),m(n,t),m(t,S),m(n,E),m(n,u),m(u,w),I(s,y,i),I(s,d,i)},p(s,[i]){i&2&&!M(a.src,o=s[1])&&c(a,"src",o),i&4&&c(a,"alt",s[2]),i&1&&C(S,s[0]),i&8&&C(w,s[3])},i:q,o:q,d(s){s&&(h(e),h(y),h(d))}}}function z(r,e,l){let{itemName:a="Silence Between Two Strikes"}=e,{imgSrc:o="/images/items/silence-between-two-strikes.png"}=e,{altText:_="Silence Between Two Strikes"}=e,{rarity:n="Elite Aspect"}=e;return r.$$set=t=>{"itemName"in t&&l(0,a=t.itemName),"imgSrc"in t&&l(1,o=t.imgSrc),"altText"in t&&l(2,_=t.altText),"rarity"in t&&l(3,n=t.rarity)},[a,o,_,n]}class K extends j{constructor(e){super(),A(this,e,z,P,L,{itemName:0,imgSrc:1,altText:2,rarity:3})}}export{K as default};
