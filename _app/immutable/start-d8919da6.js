import{S as at,i as ot,s as it,a as st,e as B,c as lt,b as M,g as de,t as F,d as pe,f as G,h as H,j as ct,o as Oe,k as ft,l as ut,m as dt,n as ve,p as C,q as pt,r as ht,u as mt,v as W,w as Y,x as Te,y as X,z as Z,A as ce}from"./chunks/index-5e2bc00b.js";import{S as nt,I as q,g as ze,f as We,a as Ee,b as fe,s as K,i as Ye,c as ue,P as Xe,d as _t,e as gt,h as yt}from"./chunks/singletons-1b3e4a4c.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function vt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const s of Et){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return St(n),n}function St(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(r){return r.replace(/\/$/,"")+Rt}function Ot(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete($e(r)),he(r,e));const te=new Map;function It(r,e){const n=$e(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:o,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,u))}return he(r,e)}function Pt(r,e,n){if(te.size>0){const s=$e(r,n),o=te.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);te.delete(s)}}return he(e,n)}function $e(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Tt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Ut(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,d)=>{if(d%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map(A=>parseInt(A,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,S,j,D]=g;return e.push({name:j,matcher:D,optional:!!w,rest:!!S,chained:S?d===1&&t[0]==="":!1}),S?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function $t(r){return!/^\([^)]+\)$/.test(r)}function Ut(r){return r.slice(1).split("/").filter($t)}function jt(r,e,n){const s={},o=r.slice(1);let u="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let d=o.indexOf(void 0,t);if(d===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;d>=t;)o[d]=o[d-1],d-=1;continue}return}s[f.name]=_}}if(!u)return s}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[_,d,g]])=>{const{pattern:w,params:S}=Tt(f),j={id:f,exec:D=>{const A=w.exec(D);if(A)return jt(A,S,s)},errors:[1,...g||[]].map(D=>r[D]),layouts:[0,...d||[]].map(t),leaf:u(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function u(f){const _=f<0;return _&&(f=~f),[_,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function Dt(r){let e,n,s;var o=r[0][0];function u(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),M(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),f&1&&o!==(o=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&H(n),e&&Z(e,t)}}}function Vt(r){let e,n,s;var o=r[0][0];function u(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return o&&(e=W(o,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),M(t,n,f),s=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),f&1&&o!==(o=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&H(n),e&&Z(e,t)}}}function Ct(r){let e,n,s;var o=r[0][1];function u(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,u(r))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Te(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),M(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),f&1&&o!==(o=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Z(d,1)}),pe()}o?(e=W(o,u(t)),Y(e.$$.fragment),G(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&H(n),e&&Z(e,t)}}}function Ze(r){let e,n=r[5]&&xe(r);return{c(){e=ft("div"),n&&n.c(),this.h()},l(s){e=ut(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=dt(e);n&&n.l(o),o.forEach(H),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){M(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=xe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&H(e),n&&n.d()}}}function xe(r){let e;return{c(){e=pt(r[6])},l(n){e=ht(n,r[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&mt(e,n[6])},d(n){n&&H(e)}}}function qt(r){let e,n,s,o,u;const t=[Vt,Dt],f=[];function _(g,w){return g[0][1]?0:1}e=_(r),n=f[e]=t[e](r);let d=r[4]&&Ze(r);return{c(){n.c(),s=st(),d&&d.c(),o=B()},l(g){n.l(g),s=lt(g),d&&d.l(g),o=B()},m(g,w){f[e].m(g,w),M(g,s,w),d&&d.m(g,w),M(g,o,w),u=!0},p(g,[w]){let S=e;e=_(g),e===S?f[e].p(g,w):(de(),F(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),G(n,1),n.m(s.parentNode,s)),g[4]?d?d.p(g,w):(d=Ze(g),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(g){u||(G(n),u=!0)},o(g){F(n),u=!1},d(g){f[e].d(g),g&&H(s),d&&d.d(g),g&&H(o)}}}function Bt(r,e,n){let{stores:s}=e,{page:o}=e,{components:u}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ct(s.page.notify);let d=!1,g=!1,w=null;return Oe(()=>{const S=s.page.subscribe(()=>{d&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,_=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[u,t,f,_,d,g,w,s,o]}class Ft extends at{constructor(e){super(),ot(this,e,Bt,qt,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Ht=function(r,e){return new URL(r,e).href},Qe={},N=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Ht(u,s),u in Qe)return;Qe[u]=!0;const t=u.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===u&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Gt,t||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),t)return new Promise((g,w)=>{d.addEventListener("load",g),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Jt={},me=[()=>N(()=>import("./chunks/0-48417f3b.js"),["./chunks/0-48417f3b.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-19548957.js","./chunks/index-5e2bc00b.js","./chunks/singletons-1b3e4a4c.js","./chunks/stores-07324bd5.js","./assets/_layout-043fc2e2.css"],import.meta.url),()=>N(()=>import("./chunks/1-31a7b850.js"),["./chunks/1-31a7b850.js","./components/error.svelte-259c8359.js","./chunks/index-5e2bc00b.js","./chunks/stores-07324bd5.js","./chunks/singletons-1b3e4a4c.js"],import.meta.url),()=>N(()=>import("./chunks/2-7deb4375.js"),["./chunks/2-7deb4375.js","./components/pages/_page.svelte-46c18da2.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/3-6b68cb71.js"),["./chunks/3-6b68cb71.js","./components/pages/background/_page.svelte-b4cd007c.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/4-31608499.js"),["./chunks/4-31608499.js","./components/pages/cdn/_page.svelte-7202f630.js","./chunks/index-5e2bc00b.js","./chunks/atomizer-c629c26a.js"],import.meta.url),()=>N(()=>import("./chunks/5-e3c74762.js"),["./chunks/5-e3c74762.js","./components/pages/changelogs/_page.svelte-161f4579.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/6-8485f96b.js"),["./chunks/6-8485f96b.js","./components/pages/docs/_page.svelte-28dfffdf.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/7-2288a608.js"),["./chunks/7-2288a608.js","./components/pages/guide/_page.svelte-98ed6c48.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/8-b0a28fe5.js"),["./chunks/8-b0a28fe5.js","./components/pages/reference/_page.svelte-a4e7cb80.js","./chunks/index-5e2bc00b.js"],import.meta.url),()=>N(()=>import("./chunks/9-cb6d49a8.js"),["./chunks/9-cb6d49a8.js","./components/pages/test/_page.svelte-56d352ac.js","./chunks/index-5e2bc00b.js","./chunks/atomizer-c629c26a.js"],import.meta.url),()=>N(()=>import("./chunks/10-81561ced.js"),["./chunks/10-81561ced.js","./components/pages/tutorial/_page.svelte-85980ea2.js","./chunks/index-5e2bc00b.js","./chunks/atomizer-c629c26a.js"],import.meta.url)],Kt=[],Mt={"/":[2],"/background":[3],"/cdn":[4],"/changelogs":[5],"/docs":[6],"/guide":[7],"/reference":[8],"/test":[9],"/tutorial":[10]},zt={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function Wt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,xt=-4,Qt=-5,en=-6;function tn(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,u=!1){if(o===Yt)return;if(o===Zt)return NaN;if(o===xt)return 1/0;if(o===Qt)return-1/0;if(o===en)return-0;if(u)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(s(t[w]));break;case"Map":const d=new Map;n[o]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=s(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const d=t[_];d!==Xt&&(f[_]=s(d))}}else{const f={};n[o]=f;for(const _ in t){const d=t[_];f[_]=s(d)}}return n[o]}return s(0)}function Ue(r){const e=new Set(r);function n(s,o){if(s){for(const u in s)if(u[0]!=="_"&&!e.has(u)){const t=r.join(", ");throw new Error(`Invalid export '${u}'${o?` in ${o}`:""} (valid exports are ${t}, or anything with a '_' prefix)`)}}}return n}Ue(["load","prerender","csr","ssr","trailingSlash"]);Ue(["load","prerender","csr","ssr","actions","trailingSlash"]);Ue(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);const Se=Nt(me,Kt,Mt,Jt),Pe=me[0],Ae=me[1];Pe();Ae();let ne={};try{ne=JSON.parse(sessionStorage[nt])}catch{}function Re(r){ne[r]=ue()}function nn({target:r,base:e}){var Je;const n=document.documentElement,s=[];let o=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,d=!0,g=!1,w=!1,S=!1,j=!1,D,A=(Je=history.state)==null?void 0:Je[q];A||(A=Date.now(),history.replaceState({...history.state,[q]:A},"",location.href));const _e=ne[A];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,je,re;async function Ne(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),i=ie(a,!0);o=null,await Ve(i,a,[])}async function ge(a,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,v){return typeof a=="string"&&(a=new URL(a,ze(document))),se({url:a,scroll:i?ue():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{h&&(j=!0)},blocked:()=>{},type:"goto"})}async function De(a){const i=ie(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:i.id,promise:Be(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function ae(...a){const c=Se.filter(l=>a.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function Ve(a,i,c,l,p={},h){var v,b;je=p;let m=a&&await Be(a);if(m||(m=await He(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,je!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(i.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ge(new URL(m.location,i).href,{},[...c,i.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await K.updated.check()&&await le(i);if(s.length=0,j=!1,g=!0,l&&l.details){const{details:y}=l,R=y.replaceState?0:1;y.state[q]=A+=R,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=i),D.$set(m.props)):Ce(m),l){const{scroll:y,keepfocus:R}=l;if(R||Le(),await ce(),d){const L=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,m.props.page&&(J=m.props.page),h&&h(),g=!1}function Ce(a){var l;t=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),J=a.props.page,D=new Ft({target:r,props:{...a.props,stores:K},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(c)),_=!0}async function x({url:a,params:i,branch:c,status:l,error:p,route:h,form:m}){const v=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);a.pathname=wt(a.pathname,b),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:c,error:p,route:h},props:{components:v.map(O=>O.node.component)}};m!==void 0&&(y.props.form=m);let R={},L=!J;for(let O=0;O<v.length;O+=1){const E=v[O];R={...R,...E.data},(L||!t.branch.some($=>$===E))&&(y.props[`data_${O}`]=R,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(J.data).length!==Object.keys(R).length),(!t.url||a.href!==t.url.href||t.error!==p||m!==void 0||L)&&(y.props.page={error:p,params:i,route:h,status:l,url:new URL(a),form:m??null,data:L?R:J.data}),y}async function ye({loader:a,parent:i,url:c,params:l,route:p,server_data_node:h}){var y,R,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if((y=b.universal)!=null&&y.load){let V=function(...E){for(const $ of E){const{href:U}=new URL($,c);v.dependencies.add(U)}};const O={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,$)=>(v.params.add($),E[$])}),data:(h==null?void 0:h.data)??null,url:kt(c,()=>{v.url=!0}),async fetch(E,$){let U;E instanceof Request?(U=E.url,$={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...$}):U=E;const k=new URL(U,c).href;return V(k),_?Pt(U,k,$):It(U,$)},setHeaders:()=>{},depends:V,parent(){return v.parent=!0,i()}};m=await b.universal.load.call(null,O)??null,m=m?await Wt(m):null}return{node:b,loader:a,server:h,universal:(R=b.universal)!=null&&R.load?{type:"data",data:m,uses:v}:null,data:m??(h==null?void 0:h.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(h==null?void 0:h.slash)}}function qe(a,i,c,l,p){if(j)return!0;if(!l)return!1;if(l.parent&&a||l.route&&i||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(s.some(m=>m(new URL(h))))return!0;return!1}function we(a,i){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?i??null:null}async function Be({id:a,invalidating:i,url:c,params:l,route:p}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:m,leaf:v}=p,b=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const R=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,V=b.reduce((k,P,T)=>{var Q;const I=t.branch[T],z=!!(P!=null&&P[0])&&((I==null?void 0:I.loader)!==P[1]||qe(k.some(Boolean),L,R,(Q=I.server)==null?void 0:Q.uses,l));return k.push(z),k},[]);if(V.some(Boolean)){try{y=await tt(c,V)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const O=y==null?void 0:y.nodes;let E=!1;const $=b.map(async(k,P)=>{var Q;if(!k)return;const T=t.branch[P],I=O==null?void 0:O[P];if((!I||I.type==="skip")&&k[1]===(T==null?void 0:T.loader)&&!qe(E,L,R,(Q=T.universal)==null?void 0:Q.uses,l))return T;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Me;const Ke={};for(let be=0;be<P;be+=1)Object.assign(Ke,(Me=await $[be])==null?void 0:Me.data);return Ke},server_data_node:we(I===void 0&&k[0]?{type:"skip"}:I??null,T==null?void 0:T.server)})});for(const k of $)k.catch(()=>{});const U=[];for(let k=0;k<b.length;k+=1)if(b[k])try{U.push(await $[k])}catch(P){if(P instanceof et)return{type:"redirect",location:P.location};let T=500,I;O!=null&&O.includes(P)?(T=P.status??T,I=P.error):P instanceof Ie?(T=P.status,I=P.body):I=await ee(P,{params:l,url:c,route:{id:p.id}});const z=await Fe(k,U,h);return z?await x({url:c,params:l,branch:U.slice(0,z.idx).concat(z.node),status:T,error:I,route:p}):await He(c,{id:p.id},I,T)}else U.push(void 0);return await x({url:c,params:l,branch:U,status:200,error:null,route:p,form:i?void 0:null})}async function Fe(a,i,c){for(;a--;)if(c[a]){let l=a;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:i,url:c,route:l}){const p={},h=await Pe();let m=null;if(h.server)try{const y=await tt(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await ye({loader:Pe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),b={node:await Ae(),loader:Ae,universal:null,server:null,data:null};return await x({url:c,params:p,branch:[v,b],status:a,error:i,route:null})}function ie(a,i){if(Ye(a,e))return;const c=bt(a.pathname.slice(e.length)||"/");for(const l of Se){const p=l.exec(c);if(p)return{id:a.pathname+a.search,invalidating:i,route:l,params:vt(p),url:a}}}function Ge({url:a,type:i,intent:c,delta:l}){var v,b;let p=!1;const h={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:a},willUnload:!c,type:i};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return w||u.before_navigate.forEach(y=>y(m)),p?null:h}async function se({url:a,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:v,accepted:b,blocked:y}){const R=ie(a,!1),L=Ge({url:a,type:h,delta:m,intent:R});if(!L){y();return}Re(A),b(),w=!0,_&&K.navigating.set(L),await Ve(R,a,l,{scroll:i,keepfocus:c,details:p},v,()=>{w=!1,u.after_navigate.forEach(V=>V(L)),K.navigating.set(null)})}async function He(a,i,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await oe({status:l,error:c,url:a,route:i}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(a),a=setTimeout(()=>{l(m,2)},20)});function i(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const v=We(h,n);if(!v)return;const{url:b,external:y}=Ee(v,e);if(y)return;const R=fe(v);R.reload||(m<=R.preload_data?De(b):m<=R.preload_code&&ae(b.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:v}=Ee(h,e);if(v)continue;const b=fe(h);b.reload||(b.preload_code===Xe.viewport&&c.observe(h),b.preload_code===Xe.eager&&ae(m.pathname))}}u.after_navigate.push(p),p()}return{after_navigate:a=>{Oe(()=>(u.after_navigate.push(a),()=>{const i=u.after_navigate.indexOf(a);u.after_navigate.splice(i,1)}))},before_navigate:a=>{Oe(()=>(u.before_navigate.push(a),()=>{const i=u.before_navigate.indexOf(a);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!_)&&(d=!1)},goto:(a,i={})=>ge(a,i,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:i}=new URL(a,location.href);s.push(c=>c.href===i)}return Ne()},invalidateAll:()=>(j=!0,Ne()),preload_data:async a=>{const i=new URL(a,ze(document));await De(i)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Fe(t.branch.length,c,l.errors);if(p){const h=await x({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:a.status??500,error:a.error,route:l});t=h.state,D.$set(h.props),ce().then(Le)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...J,form:a.data,status:a.status}};D.$set(i),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(A);try{sessionStorage[nt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=We(i.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=Ee(c,e),m=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Ge({url:l,type:"link"})||i.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){S=!0,Re(A),t.url=l,K.page.set({...J,url:l}),K.page.notify();return}se({url:l,scroll:m.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{var b;if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((b=i.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ye(h,e))return;const{noscroll:m,reload:v}=fe(i.target);v||(i.preventDefault(),i.stopPropagation(),h.search=new URLSearchParams(new FormData(i.target)).toString(),se({url:h,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[q]){if(i.state[q]===A)return;const l=i.state[q]-A;se({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a=200,error:i,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ie(v,!1)||{});let b;try{const y=c.map(async(R,L)=>{const V=h[L];return ye({loader:me[R],url:v,params:l,route:p,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await y[E]).data);return O},server_data_node:we(V)})});b=await x({url:v,params:l,branch:await Promise.all(y),status:a,error:i,form:m,route:Se.find(({id:R})=>R===p.id)??null})}catch(y){if(y instanceof et){await le(new URL(y.location,location.href));return}b=await oe({status:y instanceof Ie?y.status:500,error:await ee(y,{url:v,params:l,route:p}),url:v,route:p})}Ce(b)}}}async function tt(r,e){var u;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),o=await s.json();if(!s.ok)throw new Error(o);return(u=o.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ee(r,e){return r instanceof Ie?r.body:zt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function on({env:r,hydrate:e,paths:n,target:s,version:o}){_t(n),yt(o);const u=nn({target:s,base:n.base});gt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{on as start};
