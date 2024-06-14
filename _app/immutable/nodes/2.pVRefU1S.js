import{s as Zl,a as Ul,n as tl}from"../chunks/scheduler.CH-LaNC3.js";import{S as $l,i as es,e as t,s as r,t as i,c as l,a as o,k as S,f as c,d as s,b as d,l as a,g as b,h as e}from"../chunks/index.Wx35Jw4s.js";function ts(Yl){let C,W,ll='<span class="group-hover:rotate(-10deg) group-active:rotate(10deg) transition(.4s)">ฅ</span> <span>^•ﻌ•^</span> <span class="group-hover:rotate(10deg) group-active:rotate(-10deg) transition(.4s)">ฅ <span class="font(20) c(#ccc) group-hover:c(--primary) vertical-top transition(.4s)">♥</span></span>',Re,Q,sl='<h1 class="font(30) 200 c(#666)">AdorableCSS</h1> <p>⚡️ Rapid on-demand atomic css framework</p>',De,m,K,qe,Be,U,Ge,Xe,Se,Fe,we,al,Ie,h,Y,Qe,Ke,Z,Ue,Ye,$,ol=".inner-wrapper { position:relative; padding: 10px 20px }",Ze,$e,ee,rl=".inner-wrapper? 서식을 위해 의미없는 이름을 짓기 위해서 고민하지마세요.",et,tt,lt,te,cl='<div class="relative p(10/10)">',st,at,le,nl="그냥 서식 그대로 HTML에 적어보세요. 필요한 CSS는 다 만들어두었습니다.",ot,rt,ct,se,il='<div class="font(10) c(#ff0) bold text-center">',nt,ke,J,D,I,P,dl="When just write down in HTML or JSX",it,ae,hl=`<button class="hbox pack gap(6) bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000)! active:b(#000.2)">
    <div>👍</div>
    <div>Like</div>
  </button>
`,dt,ht,k,j,vl="... and auto generate CSS on realtime! (and build-time) 😎",vt,oe,fl=`/* @adorable.css */

* {margin:0;padding:0;box-sizing:border-box;font:inherit;color:inherit;flex-shrink:0;}
.c(#fff){color:#fff;}
html .active:bg(#000)!:active,html .active:bg(#000)!.:active{background-color:#000!important;}
.bg(#333){background-color:#333;}
@media (hover:hover){.hover:bg(#555):hover,.hover:bg(#555).:hover{background-color:#555;}}
.font(14/16/-1%){font-size:14px;line-height:16px;letter-spacing:-0.01em}
.bold{font-weight:700;}
.hbox{display:flex;flex-flow:row;align-items: center;}
.p(8/12){padding:8px 12px;}
.pack{display:flex;align-items:center;justify-content:center;}
.pointer{cursor:pointer;}
html .active:b(#000.2):active,html .active:b(#000.2).:active{border:1px solid rgba(0,0,0,.2);}
.b(#000.2){border:1px solid rgba(0,0,0,.2);}
.r(6){border-radius:6px;}
.gap(6){gap:6px;}
.layer{position:absolute;top:0;right:0;bottom:0;left:0}
.transition(.2s){transition:all .2s;}
`,ft,Ve,u,re,pt,ut,ce,bt,mt,ne,gt,xt,_t,Ct,O,pl='<p>디자인을 만들기 위해 구조를 변경하고 CSS를 수정하고 이름을 수정하고 Selector를 수정하고 다시 HTML을 수정하고...</p> <div class="m(20)">👇</div> <p>HTML, JSX를 수정하면서 실시간으로 변경되는 디자인을 확인하며 작업해보세요!</p>',Me,g,ie,Et,St,de,wt,Ht,he,yt,Dt,x,z,A,ul="More extensible Syntax",It,ve,bl=`<div class="font(14/1.5/-1%)"/>
<div class="w(100~200)"/>
<div class="nowrap..."/>
<div class="line-clamp(3)"/>
<div class="hbox(bottom+right)"/>
<div class="layer(right)"/>

.font(14/1.5/-1%){font-size:14px;line-height:1.5;letter-spacing:-0.01em}
.w(100~200){min-width:100px;max-width:200px;}
.hbox(bottom+right){display:flex;flex-flow:row;align-items:flex-end;justify-content:flex-end;}
.nowrap...{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;}
.line-clamp(3){display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
.layer(right){position:absolute;top:0;right:0;bottom:0}
`,kt,Vt,R,q,ml="Support Full Pesudo-class/element",Mt,fe,gl=`<a class="hover:underline active:bg(#000)"/>
<div class="nth-child(3n+1):bg(orange)"/>
<input class="placeholder:c(#ccc)"/>
<div class="after:content(--my-content)" style="--my-content: 'hello adorable'"/>

.placeholder\\:c\\(\\#ccc\\)::placeholder{color:#ccc;}
html .active\\:bg\\(\\#000\\):active,html .active\\:bg\\(\\#000\\).\\:active{background-color:#000;}
.nth-child\\(3n\\+1\\)\\:bg\\(orange\\):nth-child(3n+1){background-color:orange;}
@media (hover:hover){.hover\\:underline:hover,.hover\\:underline.\\:hover{text-decoration:underline;}}
.after\\:content\\(--my-content\\):after{content:'var(--my-content)'}
`,Lt,Tt,B,G,xl="Selector Support",Nt,pe,_l=`<div class=".selected:bg(#000) .selected:c(#fff)"/>
<div class=">h1:m(20)"/>
<input class=">>a:c(#4f80ff)"/>

.\\.selected\\:c\\(\\#fff\\).selected,.selected .\\.selected\\:c\\(\\#fff\\){color:#fff;}
.\\>\\>a\\:c\\(\\#4f80ff\\)>>a{color:#4f80ff;}
.\\.selected\\:bg\\(\\#000\\).selected,.selected .\\.selected\\:bg\\(\\#000\\){background-color:#000;}
.\\>h1\\:m\\(20\\)>h1{margin:20px;}
`,Wt,Jt,X,F,Cl="Media Query Support",Pt,ue,El=`<div class="@w(320~):c(red)">320 > red</div>

.\\.selected\\:c\\(\\#fff\\).selected,.selected .\\.selected\\:c\\(\\#fff\\){color:#fff;}
.\\>\\>a\\:c\\(\\#4f80ff\\)>>a{color:#4f80ff;}
.\\.selected\\:bg\\(\\#000\\).selected,.selected .\\.selected\\:bg\\(\\#000\\){background-color:#000;}
.\\>h1\\:m\\(20\\)>h1{margin:20px;}
`,jt,Le,E,be,Ot,zt,me,At,Rt,V,qt,Bt,Gt,Te,p,ge,Xt,Ft,xe,Qt,Kt,_e,Ut,Yt,Ce,Zt,$t,He,el,ye,Sl;return{c(){C=t("div"),W=t("div"),W.innerHTML=ll,Re=r(),Q=t("div"),Q.innerHTML=sl,De=r(),m=t("div"),K=t("h1"),qe=i("No more writing your own CSS."),Be=r(),U=t("h2"),Ge=i("We have created almost all the CSS you need. Just write down in your HTML(or JSX)."),Xe=r(),Se=t("div"),Fe=r(),we=t("img"),Ie=r(),h=t("div"),Y=t("h1"),Qe=i("[ •́ ‸ •̀ ]"),Ke=r(),Z=t("h1"),Ue=i("Naming things is hard."),Ye=r(),$=t("h2"),Ze=i(ol),$e=r(),ee=t("p"),ee.textContent=rl,et=r(),tt=t("br"),lt=r(),te=t("h2"),st=i(cl),at=r(),le=t("p"),le.textContent=nl,ot=r(),rt=t("br"),ct=r(),se=t("h2"),nt=i(il),ke=r(),J=t("div"),D=t("div"),I=t("div"),P=t("h1"),P.textContent=dl,it=r(),ae=t("code"),dt=i(hl),ht=r(),k=t("div"),j=t("h1"),j.textContent=vl,vt=r(),oe=t("code"),ft=i(fl),Ve=r(),u=t("div"),re=t("h1"),pt=i("⚡️"),ut=r(),ce=t("h1"),bt=i("Fast Writing without switching!"),mt=r(),ne=t("h2"),gt=i("이제 HTML과 CSS와 화면을 번갈아가면서 개발하지마세요."),xt=r(),_t=t("br"),Ct=r(),O=t("div"),O.innerHTML=pl,Me=r(),g=t("div"),ie=t("h1"),Et=i("ᕙ(`▿´)ᕗ"),St=r(),de=t("h1"),wt=i("Write less do more!"),Ht=r(),he=t("h2"),yt=i("Isn't it 90s-vibe inline-style? No!"),Dt=r(),x=t("div"),z=t("div"),A=t("h2"),A.textContent=ul,It=r(),ve=t("code"),kt=i(bl),Vt=r(),R=t("div"),q=t("h2"),q.textContent=ml,Mt=r(),fe=t("code"),Lt=i(gl),Tt=r(),B=t("div"),G=t("h2"),G.textContent=xl,Nt=r(),pe=t("code"),Wt=i(_l),Jt=r(),X=t("div"),F=t("h2"),F.textContent=Cl,Pt=r(),ue=t("code"),jt=i(El),Le=r(),E=t("div"),be=t("h1"),Ot=i("📦"),zt=r(),me=t("h1"),At=i("Portable and Compact"),Rt=r(),V=t("h2"),qt=i("Are you refactor code? you don't worry about that separated CSS."),Bt=t("br"),Gt=i("We don't write CSS. Just Cut & Paste!"),Te=r(),p=t("div"),ge=t("h1"),Xt=i("No Semantic + No CSS = Great for handoff!"),Ft=r(),xe=t("h1"),Qt=i("🤝"),Kt=r(),_e=t("h2"),Ut=i("디자인 파일의 속성을 서식 그대로 HTML로 옮겨올 수가 있습니다."),Yt=r(),Ce=t("h2"),Zt=i("figma handshake plugin"),$t=r(),He=t("div"),el=r(),ye=t("img"),this.h()},l(n){C=l(n,"DIV",{class:!0});var v=o(C);W=l(v,"DIV",{class:!0,"data-svelte-h":!0}),S(W)!=="svelte-e2a0ax"&&(W.innerHTML=ll),Re=c(v),Q=l(v,"DIV",{"data-svelte-h":!0}),S(Q)!=="svelte-1oxlqx"&&(Q.innerHTML=sl),v.forEach(s),De=c(n),m=l(n,"DIV",{class:!0});var M=o(m);K=l(M,"H1",{class:!0});var wl=o(K);qe=d(wl,"No more writing your own CSS."),wl.forEach(s),Be=c(M),U=l(M,"H2",{class:!0});var Hl=o(U);Ge=d(Hl,"We have created almost all the CSS you need. Just write down in your HTML(or JSX)."),Hl.forEach(s),Xe=c(M),Se=l(M,"DIV",{class:!0}),o(Se).forEach(s),Fe=c(M),we=l(M,"IMG",{src:!0}),M.forEach(s),Ie=c(n),h=l(n,"DIV",{class:!0});var f=o(h);Y=l(f,"H1",{class:!0});var yl=o(Y);Qe=d(yl,"[ •́ ‸ •̀ ]"),yl.forEach(s),Ke=c(f),Z=l(f,"H1",{class:!0});var Dl=o(Z);Ue=d(Dl,"Naming things is hard."),Dl.forEach(s),Ye=c(f),$=l(f,"H2",{class:!0});var Il=o($);Ze=d(Il,ol),Il.forEach(s),$e=c(f),ee=l(f,"P",{"data-svelte-h":!0}),S(ee)!=="svelte-1e51161"&&(ee.textContent=rl),et=c(f),tt=l(f,"BR",{}),lt=c(f),te=l(f,"H2",{class:!0});var kl=o(te);st=d(kl,cl),kl.forEach(s),at=c(f),le=l(f,"P",{"data-svelte-h":!0}),S(le)!=="svelte-1j1szsm"&&(le.textContent=nl),ot=c(f),rt=l(f,"BR",{}),ct=c(f),se=l(f,"H2",{class:!0});var Vl=o(se);nt=d(Vl,il),Vl.forEach(s),f.forEach(s),ke=c(n),J=l(n,"DIV",{class:!0});var Ml=o(J);D=l(Ml,"DIV",{class:!0});var Ne=o(D);I=l(Ne,"DIV",{class:!0});var We=o(I);P=l(We,"H1",{class:!0,"data-svelte-h":!0}),S(P)!=="svelte-1g9dldl"&&(P.textContent=dl),it=c(We),ae=l(We,"CODE",{class:!0});var Ll=o(ae);dt=d(Ll,hl),Ll.forEach(s),We.forEach(s),ht=c(Ne),k=l(Ne,"DIV",{class:!0});var Je=o(k);j=l(Je,"H1",{class:!0,"data-svelte-h":!0}),S(j)!=="svelte-145vrx0"&&(j.textContent=vl),vt=c(Je),oe=l(Je,"CODE",{class:!0});var Tl=o(oe);ft=d(Tl,fl),Tl.forEach(s),Je.forEach(s),Ne.forEach(s),Ml.forEach(s),Ve=c(n),u=l(n,"DIV",{class:!0});var H=o(u);re=l(H,"H1",{class:!0});var Nl=o(re);pt=d(Nl,"⚡️"),Nl.forEach(s),ut=c(H),ce=l(H,"H1",{class:!0});var Wl=o(ce);bt=d(Wl,"Fast Writing without switching!"),Wl.forEach(s),mt=c(H),ne=l(H,"H2",{class:!0});var Jl=o(ne);gt=d(Jl,"이제 HTML과 CSS와 화면을 번갈아가면서 개발하지마세요."),Jl.forEach(s),xt=c(H),_t=l(H,"BR",{}),Ct=c(H),O=l(H,"DIV",{class:!0,"data-svelte-h":!0}),S(O)!=="svelte-6h5pm3"&&(O.innerHTML=pl),H.forEach(s),Me=c(n),g=l(n,"DIV",{class:!0});var L=o(g);ie=l(L,"H1",{class:!0});var Pl=o(ie);Et=d(Pl,"ᕙ(`▿´)ᕗ"),Pl.forEach(s),St=c(L),de=l(L,"H1",{class:!0});var jl=o(de);wt=d(jl,"Write less do more!"),jl.forEach(s),Ht=c(L),he=l(L,"H2",{class:!0});var Ol=o(he);yt=d(Ol,"Isn't it 90s-vibe inline-style? No!"),Ol.forEach(s),Dt=c(L),x=l(L,"DIV",{class:!0});var T=o(x);z=l(T,"DIV",{});var Pe=o(z);A=l(Pe,"H2",{class:!0,"data-svelte-h":!0}),S(A)!=="svelte-1bv6hpj"&&(A.textContent=ul),It=c(Pe),ve=l(Pe,"CODE",{class:!0});var zl=o(ve);kt=d(zl,bl),zl.forEach(s),Pe.forEach(s),Vt=c(T),R=l(T,"DIV",{});var je=o(R);q=l(je,"H2",{class:!0,"data-svelte-h":!0}),S(q)!=="svelte-cz51uo"&&(q.textContent=ml),Mt=c(je),fe=l(je,"CODE",{class:!0});var Al=o(fe);Lt=d(Al,gl),Al.forEach(s),je.forEach(s),Tt=c(T),B=l(T,"DIV",{});var Oe=o(B);G=l(Oe,"H2",{class:!0,"data-svelte-h":!0}),S(G)!=="svelte-3v2qw2"&&(G.textContent=xl),Nt=c(Oe),pe=l(Oe,"CODE",{class:!0});var Rl=o(pe);Wt=d(Rl,_l),Rl.forEach(s),Oe.forEach(s),Jt=c(T),X=l(T,"DIV",{});var ze=o(X);F=l(ze,"H2",{class:!0,"data-svelte-h":!0}),S(F)!=="svelte-1ny7j3j"&&(F.textContent=Cl),Pt=c(ze),ue=l(ze,"CODE",{class:!0});var ql=o(ue);jt=d(ql,El),ql.forEach(s),ze.forEach(s),T.forEach(s),L.forEach(s),Le=c(n),E=l(n,"DIV",{class:!0});var Ee=o(E);be=l(Ee,"H1",{class:!0});var Bl=o(be);Ot=d(Bl,"📦"),Bl.forEach(s),zt=c(Ee),me=l(Ee,"H1",{class:!0});var Gl=o(me);At=d(Gl,"Portable and Compact"),Gl.forEach(s),Rt=c(Ee),V=l(Ee,"H2",{class:!0});var Ae=o(V);qt=d(Ae,"Are you refactor code? you don't worry about that separated CSS."),Bt=l(Ae,"BR",{}),Gt=d(Ae,"We don't write CSS. Just Cut & Paste!"),Ae.forEach(s),Ee.forEach(s),Te=c(n),p=l(n,"DIV",{class:!0});var _=o(p);ge=l(_,"H1",{class:!0});var Xl=o(ge);Xt=d(Xl,"No Semantic + No CSS = Great for handoff!"),Xl.forEach(s),Ft=c(_),xe=l(_,"H1",{class:!0});var Fl=o(xe);Qt=d(Fl,"🤝"),Fl.forEach(s),Kt=c(_),_e=l(_,"H2",{class:!0});var Ql=o(_e);Ut=d(Ql,"디자인 파일의 속성을 서식 그대로 HTML로 옮겨올 수가 있습니다."),Ql.forEach(s),Yt=c(_),Ce=l(_,"H2",{class:!0});var Kl=o(Ce);Zt=d(Kl,"figma handshake plugin"),Kl.forEach(s),$t=c(_),He=l(_,"DIV",{class:!0}),o(He).forEach(s),el=c(_),ye=l(_,"IMG",{src:!0}),_.forEach(s),this.h()},h(){a(W,"class","hbox font(80/-/-15%) AppleSD opacity(0.7) hover:scale(1.05) hover:opacity(1) transition(.4s) pointer group"),a(C,"class",N+" gap(40) max-h(60vh)"),a(K,"class",w),a(U,"class",y),a(Se,"class","space(2em)"),Ul(we.src,al="https://images.velog.io/images/teo/post/dde8bc56-15d0-4fc0-a15a-f3c204f50494/AdorableCSS.gif")||a(we,"src",al),a(m,"class",N),a(Y,"class",w+" hover:scale(1.05) active:rotate(5deg) active:color(--primary) transition(.4s) pointer"),a(Z,"class",w),a($,"class",y),a(te,"class",y),a(se,"class",y),a(h,"class",N),a(P,"class","font(30/-/-1.5%) bold"),a(ae,"class","pre text-left bg(#f1f1f1) p(20) r(8) monospace"),a(I,"class","vbox(center)"),a(j,"class","font(30/-/-1.5%) bold"),a(oe,"class","pre text-left bg(#f1f1f1) p(20) r(8) monospace"),a(k,"class","vbox(center)"),a(D,"class","hbox(top+center) flex-wrap gap(60)"),a(J,"class",N),a(re,"class",w),a(ce,"class",w),a(ne,"class",y),a(O,"class","bg(#f1f1f1) r(8) p(20)"),a(u,"class",N),a(ie,"class",w+" hover:scale(1.05) active:rotate(5deg) active:color(--primary) transition(.4s) pointer"),a(de,"class",w),a(he,"class",y),a(A,"class","font(24) 700 m(10/0)"),a(ve,"class","block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace"),a(q,"class","font(24) 700 m(10/0)"),a(fe,"class","block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace"),a(G,"class","font(24) 700 m(10/0)"),a(pe,"class","block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace"),a(F,"class","font(24) 700 m(10/0)"),a(ue,"class","block pre font(13) w(~800) text-left bg(#f1f1f1) p(20) r(8) monospace"),a(x,"class","vbox gap(40) mt(40)"),a(g,"class",N),a(be,"class",w),a(me,"class",w),a(V,"class",y),a(E,"class",N),a(ge,"class",w),a(xe,"class",w),a(_e,"class",y),a(Ce,"class",y),a(He,"class","space(2em)"),Ul(ye.src,Sl="https://camo.githubusercontent.com/eeee35511c7b7979a00fba1b85ba91a2a750807b1c55aa90d2e4317d370147fc/68747470733a2f2f696d616765732e76656c6f672e696f2f696d616765732f74656f2f706f73742f35373963646237622d383831392d343930322d386639372d3036633334303062323032312f254531253834253932254531253835254141254531253834253836254531253835254137254531253836254142253230254531253834253830254531253835254235254531253834253835254531253835254139254531253836254138253230323032312d30392d3031253230254531253834253842254531253835254139254531253834253932254531253835254145253230332e31372e31372e6d6f762e676966")||a(ye,"src",Sl),a(p,"class",N)},m(n,v){b(n,C,v),e(C,W),e(C,Re),e(C,Q),b(n,De,v),b(n,m,v),e(m,K),e(K,qe),e(m,Be),e(m,U),e(U,Ge),e(m,Xe),e(m,Se),e(m,Fe),e(m,we),b(n,Ie,v),b(n,h,v),e(h,Y),e(Y,Qe),e(h,Ke),e(h,Z),e(Z,Ue),e(h,Ye),e(h,$),e($,Ze),e(h,$e),e(h,ee),e(h,et),e(h,tt),e(h,lt),e(h,te),e(te,st),e(h,at),e(h,le),e(h,ot),e(h,rt),e(h,ct),e(h,se),e(se,nt),b(n,ke,v),b(n,J,v),e(J,D),e(D,I),e(I,P),e(I,it),e(I,ae),e(ae,dt),e(D,ht),e(D,k),e(k,j),e(k,vt),e(k,oe),e(oe,ft),b(n,Ve,v),b(n,u,v),e(u,re),e(re,pt),e(u,ut),e(u,ce),e(ce,bt),e(u,mt),e(u,ne),e(ne,gt),e(u,xt),e(u,_t),e(u,Ct),e(u,O),b(n,Me,v),b(n,g,v),e(g,ie),e(ie,Et),e(g,St),e(g,de),e(de,wt),e(g,Ht),e(g,he),e(he,yt),e(g,Dt),e(g,x),e(x,z),e(z,A),e(z,It),e(z,ve),e(ve,kt),e(x,Vt),e(x,R),e(R,q),e(R,Mt),e(R,fe),e(fe,Lt),e(x,Tt),e(x,B),e(B,G),e(B,Nt),e(B,pe),e(pe,Wt),e(x,Jt),e(x,X),e(X,F),e(X,Pt),e(X,ue),e(ue,jt),b(n,Le,v),b(n,E,v),e(E,be),e(be,Ot),e(E,zt),e(E,me),e(me,At),e(E,Rt),e(E,V),e(V,qt),e(V,Bt),e(V,Gt),b(n,Te,v),b(n,p,v),e(p,ge),e(ge,Xt),e(p,Ft),e(p,xe),e(xe,Qt),e(p,Kt),e(p,_e),e(_e,Ut),e(p,Yt),e(p,Ce),e(Ce,Zt),e(p,$t),e(p,He),e(p,el),e(p,ye)},p:tl,i:tl,o:tl,d(n){n&&(s(C),s(De),s(m),s(Ie),s(h),s(ke),s(J),s(Ve),s(u),s(Me),s(g),s(Le),s(E),s(Te),s(p))}}}const N="text-center vbox pack p(200/32) odd:bg(#f9f9f9) clip",w="font(3em/-/-1.5%) bold ~md:font(1.6em)",y="font(1.2em/-/-1.5%) c(#555) ~md:font(1.4em)";class as extends $l{constructor(C){super(),es(this,C,null,ts,Zl,{})}}export{as as component};
