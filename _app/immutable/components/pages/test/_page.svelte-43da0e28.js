import{S as k,i as C,s as E,k as f,a as V,q as j,l as m,m as h,c as q,r as w,h as v,n as u,b as x,C as c,N as b,O as N,u as P,B as D}from"../../../chunks/index-1a214106.js";import{t as S,g as z}from"../../../chunks/atomizer-d5685e77.js";function B(e){let i,s,t,o,a,r=e[1].map(I).join(" ")+"",p,_,y;return{c(){i=f("div"),s=f("div"),t=f("input"),o=V(),a=f("div"),p=j(r),this.h()},l(n){i=m(n,"DIV",{class:!0});var l=h(i);s=m(l,"DIV",{class:!0});var d=h(s);t=m(d,"INPUT",{type:!0,class:!0}),o=q(d),a=m(d,"DIV",{class:!0});var g=h(a);p=w(g,r),g.forEach(v),d.forEach(v),l.forEach(v),this.h()},h(){u(t,"type","text"),u(t,"class","b(-) outline(-) bb(#000) p(10)"),t.autofocus=!0,u(a,"class","pre font(10) word-spacing(20)"),u(s,"class","w(800) m(auto) vbox"),u(i,"class","layer pack")},m(n,l){x(n,i,l),c(i,s),c(s,t),b(t,e[0]),c(s,o),c(s,a),c(a,p),t.focus(),_||(y=N(t,"input",e[3]),_=!0)},p(n,[l]){l&1&&t.value!==n[0]&&b(t,n[0]),l&2&&r!==(r=n[1].map(I).join(" ")+"")&&P(p,r)},i:D,o:D,d(n){n&&v(i),_=!1,y()}}}const I=e=>e.value;function O(e,i,s){let t,o,a="c(blue)+font(19/42)+c(#D0D0D0)";function r(){a=this.value,s(0,a)}return e.$$.update=()=>{e.$$.dirty&1&&s(1,t=S(a)),e.$$.dirty&1&&s(2,o=z([a])),e.$$.dirty&2&&console.log(t),e.$$.dirty&4&&console.log(o)},[a,t,o,r]}class A extends k{constructor(i){super(),C(this,i,O,B,E,{})}}export{A as default};