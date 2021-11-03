import{S as K,i as Q,s as J,e as b,a as h,b as W,n as M,d as Y,o as Ae,W as Ee,c as U,t as V,f as k,g as d,h as ee,j as $,l as te,k as ke,m as he,p as fe,q as $e,r as be,u as ve,v as _e,w as ge,x as Fe}from"./vendor.js";const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerpolicy&&(u.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?u.credentials="include":i.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=o(i);fetch(i.href,u)}};Se();const Re=e=>{const t=e.length,o=e.charCodeAt(0);let r=-1,i,u="";for(;++r<t;){if(i=e.charCodeAt(r),i==0){u+="\uFFFD";continue}if(i>=1&&i<=31||i==127||r==0&&i>=48&&i<=57||r==1&&i>=48&&i<=57&&o==45){u+="\\"+i.toString(16)+" ";continue}if(r==0&&t==1&&i==45){u+="\\"+e.charAt(r);continue}if(i>=128||i==45||i==95||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122){u+=e.charAt(r);continue}u+="\\"+e.charAt(r)}return u},oe=e=>e.toFixed(2).replace(/^0+|\.00$|0+$/g,"")||"0",l=e=>String(e).startsWith("--")?`var(${e})`:e,s=e=>{if(e===0||e==="0")return 0;if(String(e).startsWith("--"))return l(""+e);const[t,o]=String(e).split("/");return+t>0&&+o>0?oe(+t/+o*100)+"%":/.[-+*\/]/.test(String(e))?"calc("+String(e).replace(/[-+]/g,r=>` ${r} `)+")":+e==+e?e+"px":e},Oe=e=>e.endsWith("%")?+e.slice(0,-1)/100+"em":e,Le=e=>{const[t,o]=e.split(".");return o&&t.length===4?"rgba("+[...t.slice(1)].map(r=>parseInt(r+r,16)).join(",")+",."+o+")":o?"rgba("+[t.slice(1,3),t.slice(3,5),t.slice(5,7)].map(r=>parseInt(r,16)).join(",")+",."+o+")":e},Te=e=>{const[t,o,r,i]=e.split(",");return"hsl"+(i?"a":"")+"("+[t,o,r,i].filter(Boolean).map(l).join()+")"},je=e=>{const[t,o,r,i]=e.split(",");return"rgb"+(i?"a":"")+"("+[t,o,r,i].filter(Boolean).map(l).join()+")"},D=(e="transparent")=>e==="-"||e==="transparent"?"transparent":e.startsWith("--")?`var(${e})`:e.charAt(0)==="#"?Le(e):e.includes(",")&&e.includes("%")?Te(e):e.includes(",")?je(e):e,ze=e=>(e||"").split("/").map((t,o)=>{if(t!=="-"){if(String(t).startsWith("--"))return`var(${t})`;switch(o){case 0:return`font-size:${s(t)}`;case 1:return`line-height:${+t<4?oe(+t):s(t)}`;case 2:return`letter-spacing:${s(Oe(t))}`}}}).filter(Boolean).join(";"),X=e=>{if(!e||e==="none"||e==="0"||e==="-")return"none";const t=["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"];let o=!1,r=!1;const i=e.split("/").map(u=>parseInt(u)>0?(o=!0,u.includes(",")?D(u):s(u)):t.includes(u)?(r=!0,u):D(u));return o||i.unshift("1px"),r||i.unshift("solid"),i.join(" ")},re=(e,t=o=>o)=>String(e).startsWith("--")?`var(${e})`:e&&e.split("/").map(t).join(" "),S=(e,t=o=>o)=>String(e).startsWith("--")?`var(${e})`:e&&e.split(",").map(t).join(","),G=e=>re(e,s),Ie=e=>{const[t,o]=e.split(":");return(+o/+t*100).toFixed(2)+"%"},Xe=(e="")=>{const t=e.split("+"),o=t.map(r=>{switch(r){case"top":return"align-items: flex-start;";case"bottom":return"align-items: flex-end;";case"fill":return"align-items: stretch;";case"stretch":return"align-items: stretch;";case"center":return"justify-content: center;";case"left":return t.includes("reverse")?"justify-content: flex-end;":"";case"right":return t.includes("reverse")?"":"justify-content: flex-end;";case"reverse":return"flex-direction: row-reverse;"}});return!t.includes("top")&&!t.includes("bottom")&&!t.includes("full")&&o.unshift("align-items: center;"),o.join("")},He=(e="")=>{const t=e.split("+"),o=t.map(r=>{switch(r){case"left":return"align-items: flex-start;";case"center":return"align-items: center;";case"right":return"align-items: flex-end;";case"top":return t.includes("reverse")?"justify-content: flex-end;":"";case"bottom":return t.includes("reverse")?"":"justify-content: flex-end;";case"reverse":return"flex-direction: column-reverse;"}});return!t.includes("left")&&!t.includes("center")&&!t.includes("right")&&o.unshift("align-items: stretch;"),o.join("")},Pe=e=>e.includes("=")?e.split("/").map(t=>t.replace("="," ")).join(","):`all ${e}`,We=(e,t)=>e>t?1:e<t?-1:0,ie={c:e=>`color:${D(e)};`,bg:e=>`background-color:${D(e)};`,font:e=>ze(e),"font-size":e=>`font-size:${s(e)};`,"line-height":e=>`line-height:${+e<4?oe(+e):s(e)}`,"letter-spacing":e=>`letter-spacing:${s(e)};`,"word-spacing":e=>`word-spacing:${s(e)};`,"100":()=>"font-weight:100;","200":()=>"font-weight:200;","300":()=>"font-weight:300;","400":()=>"font-weight:400;","500":()=>"font-weight:500;","600":()=>"font-weight:600;","700":()=>"font-weight:700;","800":()=>"font-weight:800;","900":()=>"font-weight:900;",thin:()=>"font-weight:100;","extra-light":()=>"font-weight:200;",light:()=>"font-weight:300;",regular:()=>"font-weight:400;",medium:()=>"font-weight:500;",semibold:()=>"font-weight:600;",bold:()=>"font-weight:700;","extra-bold":()=>"font-weight:800;",heavy:()=>"font-weight:900;",thicker:(e=1)=>`text-shadow:0 0 ${s(e)} currentColor;`,italic:()=>"font-style:italic;",overline:()=>"text-decoration:overline;",underline:()=>"text-decoration:underline;","line-through":()=>"text-decoration:line-through;",strike:()=>"text-decoration:line-through;",del:()=>"text-decoration:line-through;","sans-serif":()=>"font-family:sans-serif;",serif:()=>"font-family:serif;",monospace:()=>"font-family:menlo,monospace;",cursive:()=>"font-family:cursive;",fantasy:()=>"font-family:fantasy;","system-ui":()=>"font-family:system-ui;","small-caps":()=>"font-variant:small-caps",lowercase:()=>"text-transform:lowercase;",uppercase:()=>"text-transform:uppercase;",capitalize:()=>"text-transform:capitalize;","text-justify":()=>"text-align:justify;","text-center":()=>"text-align:center;","text-right":()=>"text-align:right;","text-left":()=>"text-align:left;","break-all":()=>"word-break:break-all;","break-word":()=>"word-break:break-word;overflow-wrap:break-word;","keep-all":()=>"word-break:keep-all;","border-box":()=>"box-sizing:border-box","content-box":()=>"box-sizing:content-box",w:e=>{if(e.includes("~")){const t=[],[o,r]=e.split("~");return o&&t.push(`min-width:${s(o)};`),r&&t.push(`max-width:${s(r)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`width:${s(e)};`},h:e=>{if(e.includes("~")){const t=[],[o,r]=e.split("~");return o&&t.push(`min-height:${s(o)};`),r&&t.push(`max-height:${s(r)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`height:${s(e)};`},m:e=>`margin:${G(e)};`,mt:e=>`margin-top:${s(e)};`,mr:e=>`margin-right:${s(e)};`,mb:e=>`margin-bottom:${s(e)};`,ml:e=>`margin-left:${s(e)};`,p:e=>`padding:${G(e)};`,pt:e=>`padding-top:${s(e)};`,pr:e=>`padding-right:${s(e)};`,pb:e=>`padding-bottom:${s(e)};`,pl:e=>`padding-left:${s(e)};`,b:e=>`border:${X(e)};`,bt:e=>`border-top:${X(e)};`,br:e=>`border-right:${X(e)};`,bb:e=>`border-bottom:${X(e)};`,bl:e=>`border-left:${X(e)};`,bw:e=>`border-width:${s(e)};`,btw:e=>`border-top-width:${s(e)};`,brw:e=>`border-right-width:${s(e)};`,bbw:e=>`border-bottom-width:${s(e)};`,blw:e=>`border-left-width:${s(e)};`,bs:e=>`border-style:${l(e)};`,bts:e=>`border-top-style:${l(e)};`,brs:e=>`border-right-style:${l(e)};`,bbs:e=>`border-bottom-style:${l(e)};`,bls:e=>`border-left-style:${l(e)};`,bc:e=>`border-color:${D(e)};`,btc:e=>`border-top-color:${D(e)};`,brc:e=>`border-right-color:${D(e)};`,bbc:e=>`border-bottom-color:${D(e)};`,blc:e=>`border-left-color:${D(e)};`,r:e=>`border-radius:${G(e)};`,rt:e=>`border-top-left-radius:${s(e)};border-top-right-radius:${s(e)};`,rr:e=>`border-top-right-radius:${s(e)};border-bottom-right-radius:${s(e)};`,rb:e=>`border-bottom-left-radius:${s(e)};border-bottom-right-radius:${s(e)};`,rl:e=>`border-top-left-radius:${s(e)};border-bottom-left-radius:${s(e)};`,rtl:e=>`border-top-left-radius:${s(e)};`,rtr:e=>`border-top-right-radius:${s(e)};`,rbr:e=>`border-bottom-right-radius:${s(e)};`,rbl:e=>`border-bottom-left-radius:${s(e)};`,ring:e=>{const[t,o=1]=e.split("/");return`box-shadow:0 0 0 ${s(o)} ${D(t)};`},"box-shadow":e=>`box-shadow:${re(e)}`,outline:e=>`outline:${X(e)};`,guide:(e="#4f80ff")=>`&, & > * { outline:1px solid ${D(e)};}`,"bg-repeat-x":()=>"background-repeat:repeat-x;","bg-repeat-y":()=>"background-repeat:repeat-y;","bg-no-repeat":()=>"background-repeat:no-repeat;","bg-fixed":()=>"background-attachment:fixed;","bg-scroll":()=>"background-attachment:scroll;","bg-position":e=>`background-position:${e};`,contain:()=>"background-size:contain;background-position:center;object-fit:contain;",cover:()=>"background-size:cover;background-position:center;object-fit:cover;",block:()=>"display:block;","inline-block":()=>"display:inline-block;",inline:()=>"display:inline;","inline-flex":()=>"display:inline-flex;",table:()=>"display:table;","inline-table":()=>"display:inline-table;","table-caption":()=>"display:table-caption;","table-cell":()=>"display:table-cell;","table-column":()=>"display:table-column;","table-column-group":()=>"display:table-column-group;","table-footer-group":()=>"display:table-footer-group;","table-header-group":()=>"display:table-header-group;","table-row-group":()=>"display:table-row-group;","table-row":()=>"display:table-row;","flow-root":()=>"display:flow-root;",grid:()=>"display:grid;","inline-grid":()=>"display:inline-grid;",contents:()=>"display:contents;","list-item":()=>"display:list-item;",hbox:e=>`display:flex;flex-flow:row;${Xe(e)}`,vbox:e=>`display:flex;flex-flow:column;${He(e)}`,pack:()=>"display:flex;align-items:center;justify-content:center;","hbox(":()=>"","vbox(":()=>"",gap:e=>`gap:${G(e)};`,hgap:e=>`&>*+* {margin-left:${s(e)};}`,"hgap-reverse":e=>`&>*+* {margin-right:${s(e)};}`,vgap:e=>`&>*+* {margin-top:${s(e)};}`,"vgap-reverse":e=>`&>*+* {margin-bottom:${s(e)};}`,"space-between":()=>"justify-content:space-between;","space-around":()=>"justify-content:space-around;","space-evenly":()=>"justify-content:space-evenly;",flex:(e="1")=>`flex:${re(e)};`,space:e=>`[class*="hbox"]>& {width:${s(e)};} [class*="vbox"]>& {height:${s(e)};}`,"flex-grow":e=>`flex-grow:${l(e)};`,"flex-shrink":e=>`flex-shrink:${l(e)};`,"flex-basis":e=>`flex-basis:${s(e)};`,"flex-wrap":()=>"flex-wrap:wrap;","flex-wrap-reverse":()=>"flex-wrap:wrap-reverse;","flex-nowrap":()=>"flex-wrap:nowrap;",order:e=>`order:${l(e)};`,overflow:e=>`overflow:${e};`,"overflow-x":e=>`overflow-x:${e};`,"overflow-y":e=>`overflow-y:${e};`,clip:()=>"overflow:hidden;",scroll:()=>"overflow:auto;","scroll-x":()=>"overflow-x:auto;overflow-y:hidden;","scroll-y":()=>"overflow-x:hidden;overflow-y:auto;",scrollbar:()=>"&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}","no-scrollbar":()=>"&::-webkit-scrollbar {display:none;}","no-scrollbar-x":()=>"&::-webkit-scrollbar:horizontal {display:none;}",overscroll:e=>`overscroll-behavior:${e};`,"overscroll-x":e=>`overscroll-behavior-x:${e};`,"overscroll-y":e=>`overscroll-behavior-y:${e};`,"no-bouncing":()=>"","no-overscroll":()=>"","vertical-align":e=>`vertical-align:${e}`,"vertical-top":()=>"vertical-align:top",pre:()=>"white-space:pre-wrap;","pre-wrap":()=>"white-space:pre-wrap;","pre-line":()=>"white-space:pre-line;",nowrap:()=>"white-space:nowrap;flex-shrink:0;","nowrap...":()=>"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;","line-clamp":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"max-lines":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"text-indent":e=>`text-indent:${s(e)};`,none:()=>"display:none;",opacity:e=>`opacity:${l(e)};`,invisible:()=>"visibility:hidden;",visible:()=>"visibility:visible;",gone:()=>"position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);",layer:(e="")=>{const t={top:0,right:0,bottom:0,left:0};return e.split("+").forEach(o=>{switch(o){case"top":return delete t.bottom;case"right":return delete t.left;case"bottom":return delete t.top;case"left":return delete t.right}}),"position:absolute;"+Object.keys(t).map(o=>`${o}:0`).join(";")},absolute:()=>"position:absolute;",relative:()=>"position:relative;",sticky:()=>"position:sticky;","sticky-top":(e=0)=>`position:sticky;top:${s(e)};`,"sticky-right":(e=0)=>`position:sticky;right:${s(e)};`,"sticky-bottom":(e=0)=>`position:sticky;bottom:${s(e)};`,"sticky-left":(e=0)=>`position:sticky;left:${s(e)};`,fixed:()=>"position:fixed;",static:()=>"position:static;",x:e=>`left:${s(e)};`,y:e=>`top:${s(e)};`,z:e=>`z-index:${l(e)};`,top:e=>`top:${s(e)};`,left:e=>`left:${s(e)};`,right:e=>`right:${s(e)};`,bottom:e=>`bottom:${s(e)};`,"user-select-none":()=>"user-select:none;","user-select-all":()=>"user-select:all;","user-select-auto":()=>"user-select:auto;","user-select-text":()=>"user-select:text;","pointer-events-none":()=>"pointer-events:none;","pointer-events-auto":()=>"pointer-events:auto;",pointer:()=>"cursor:pointer;",grab:()=>"&{cursor:grab;} &:active{cursor:grabbing;}",grabbing:()=>"cursor:grabbing;",cursor:e=>`cursor:${e};`,transition:e=>`transition:${Pe(e)};`,translate:e=>`transform:translate(${S(e)});`,translateX:e=>`transform:translateX(${l(e)});`,translateY:e=>`transform:translateY(${l(e)});`,translateZ:e=>`transform:translateZ(${l(e)});`,translate3d:e=>`transform:translate3d(${S(e)});`,rotate:e=>`transform:rotate(${S(e)});`,rotateX:e=>`transform:rotateX(${l(e)});`,rotateY:e=>`transform:rotateY(${l(e)});`,rotateZ:e=>`transform:rotateZ(${l(e)});`,rotate3d:e=>`transform:rotateZ(${S(e)});`,scale:e=>`transform:scale(${S(e)});`,scaleX:e=>`transform:scaleX(${S(e)});`,scaleY:e=>`transform:scaleY(${S(e)});`,scaleZ:e=>`transform:scaleZ(${S(e)});`,ratio:e=>`& {position:relative;} &:before{content:"";display:block;width:100%;padding-top:${Ie(e)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,gpu:()=>"transform:translateZ(0.1px);","no-border":()=>"border:none;outline:none;","app-region":e=>`-webkit-app-region:${e};`,content:e=>`content:'${l(e)}'`,"clip-path":e=>`clip-path:${l(e)};-webkit-clip-path:${l(e)};`,"table-layout-fixed":()=>"table-layout:fixed;",float:e=>`float:${l(e)}`,clear:e=>`clear:${l(e)}`,blur:e=>`filter:blur(${s(e)})`,brightness:e=>`filter:brightness(${l(e)})`,contrast:e=>`filter:contrast(${l(e)})`,"drop-shadow":e=>`filter:drop-shadow(${l(e)})`,grayscale:e=>`filter:grayscale(${l(e)})`,"hue-rotate":e=>`filter:hue-rotate(${l(e)})`,invert:e=>`filter:invert(${l(e)})`,sepia:e=>`filter:sepia(${l(e)})`,saturate:e=>`filter:saturate(${l(e)})`,"backdrop-blur":e=>`backdrop-filter:blur(${s(e)})`,"backdrop-brightness":e=>`backdrop-filter:brightness(${l(e)})`,"backdrop-contrast":e=>`backdrop-filter:contrast(${l(e)})`,"backdrop-drop-shadow":e=>`backdrop-filter:drop-shadow(${l(e)})`,"backdrop-grayscale":e=>`backdrop-filter:grayscale(${l(e)})`,"backdrop-hue-rotate":e=>`backdrop-filter:hue-rotate(${l(e)})`,"backdrop-invert":e=>`backdrop-filter:invert(${l(e)})`,"backdrop-sepia":e=>`backdrop-filter:sepia(${l(e)})`,"backdrop-saturate":e=>`backdrop-filter:saturate(${l(e)})`,triangle:e=>{const[t,o,r=0]=e.split("/"),i=["top","right","bottom","left","top","right","bottom","left"],u=i.slice(i.indexOf(t)),a=.5;let c="width:0;height:0;border:0 solid transparent;";return c+="border-"+u[1]+"-width:"+Math.round(o*(-r+1)/2)+"px;",c+="border-"+u[3]+"-width:"+Math.round(o*(r+1)/2)+"px;",c+="border-"+u[2]+":"+Math.round(o*a)+"px solid black;",c},elevation:e=>{const t=+e;if(!t)return"box-shadow: none";const o=t==1?3:t*2,r=(t+10+t/9.38)/100,i=t<10?t%2==0?t-(t/2-1):t-(t-1)/2:t-4,u=(24-Math.round(t/10))/100;return`box-shadow: 0px ${s(t)} ${s(o)} rgba(0, 0, 0, ${r}), 0px ${s(i)} ${s(o)} rgba(0, 0, 0, ${u})`}},Me={"hover:":{media:"(hover:hover)",selector:"&:hover, &.\\:hover"},"active:":{selector:"html &:active, html &.\\:active"},"focus:":{selector:"html &:focus, html &.\\:focus"},"focus-within:":{selector:"html &:focus-within, html &.\\:focus-within"},"checked:":{selector:"html &:checked, html &.\\:checked"},"read-only:":{selector:"html &:read-only, html &.\\:read-only"},"enabled:":{selector:"html &:enabled, html &.\\:enabled"},"disabled:":{selector:"html body &:disabled, html body &.\\:disabled, html body &[disabled]"},"group-hover:":{selector:".group:hover &, html .group.\\:hover &"},"group-active:":{selector:"html .group:active &, html .group.\\:active &"},"group-focus:":{selector:"html .group:focus &, html .group.\\:focus &"},"group-focus-within:":{selector:"html .group:focus-within &, html .group\\:focus-within"},"group-checked:":{selector:"html .group:checked &, html .group.\\:checked &"},"group-read-only:":{selector:"html .group:read-only &, html .group.\\:read-only &"},"group-enabled:":{selector:"html .group:enabled &, html .group.\\:enabled &"},"group-disabled:":{selector:"html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &"},"placeholder:":{selector:"&::placeholder"},"link:":{selector:"&:link"},"visited:":{selector:"&:visited"},"first:":{selector:"&:first-child"},"first-child:":{selector:"&:first-child"},"last:":{selector:"&:last-child"},"last-child:":{selector:"&:last-child"},"odd:":{selector:"&:nth-child(2n+1)"},"even:":{selector:"&:nth-child(2n)"}},Ye={"sm:":{media:"(min-width:480px)",selector:"html &"},"md:":{media:"(min-width:768px)",selector:"html &"},"lg:":{media:"(min-width:1024px)",selector:"html &"},"xl:":{media:"(min-width:1280px)",selector:"html &"},"sm~:":{media:"(min-width:480px)",selector:"html &"},"md~:":{media:"(min-width:768px)",selector:"html &"},"lg~:":{media:"(min-width:1024px)",selector:"html &"},"xl~:":{media:"(min-width:1280px)",selector:"html &"},"~sm:":{media:"(max-width:479.98px)",selector:"html &"},"~md:":{media:"(max-width:767.98px)",selector:"html &"},"~lg:":{media:"(max-width:1023.98px)",selector:"html &"},"~xl:":{media:"(max-width:1279.98px)",selector:"html &"},"mobile:":{media:"(max-device-width:767.98px)",selector:"html &"},"tablet:":{media:"(min-device-width:768px) and (max-width:1023.98px)",selector:"html &"},"desktop:":{media:"(min-device-width:1024px)",selector:"html &"},"!mobile:":{media:"(min-device-width:768px)",selector:"html &"},"!desktop:":{media:"(max-device-width:1023.98px)",selector:"html &"},"touch:":{media:"(max-device-width:1023.98px)",selector:"html &"},"!touch:":{media:"(min-device-width:1024px)",selector:"html &"},"portrait:":{media:"(orientation:portrait)",selector:"html &"},"landscape:":{media:"(orientation:landscape)",selector:"html &"},"print:":{media:"print",selector:"html &"},"screen:":{media:"screen",selector:"html &"},"speech:":{media:"speech",selector:"html &"},"dark:":{selector:"html.dark &"},device:{postCSS:({media:e,...t})=>(e=e.replace(/(max|min)-width/g,(o,r)=>r+"-device-width"),{media:e,...t})}},ue={">>":e=>`& ${e.slice(2,0)}`,">":e=>`&${e}`,"+":e=>`&${e}`,".":e=>`&${e}, ${e} &`},Ue=Object.keys(ue).sort((e,t)=>We(e,t)||t.length-e.length),Ve={...Me,...Ye},Ge=e=>{const t=Ue.find(r=>e.startsWith(r))||"",o=ue[t]&&ue[t](e.slice(0,-1));if(o)return{selector:o}},Ne=e=>ie[e]||(()=>""),Be=Object.fromEntries(Object.entries(ie).map(([e,t],o)=>[e,o])),qe=/([^:(]+)/.source,Ze=/(?:\((.*?)\))?/.source,Ke=/(:|$)/.source,se=new RegExp(`${qe}${Ze}${Ke}`,"g"),Qe=new RegExp(`^(${se.source})+$`),Je=e=>{try{const t=e.endsWith("!"),o=t?"!important;":";";if(e=t?e.slice(0,-1):e,!Qe.test(e))return;let r=[`.${Re(e+(t?"!":""))}`],i=[],u=[],a="",c=0;for(se.lastIndex=0;;){const A=se.exec(e);if(!A)break;const[v,x,R,E]=A;if(E===":"){const g=Ge(v)||Ve[x+":"];if(!g)return;r=r.map(C=>(g?.selector.split(",")||[]).map(_=>_.replace(/&/g,C).trim())).flat(),g.media&&(i=[...i,g.media]),g.postCSS&&(u=[...u,g.postCSS])}else if(!ie[x]||(a=Ne(x)(R).replace(/;/g,o).trim(),c=Be[x+(v.includes("(")?"(":"")]||Be[x]||0,!a))return}const f=i.length?"@media "+i.join(" and "):"",p=r.join(","),F=a.includes("&")?a.replace(/&/g,p):p+"{"+a+"}";return[f?f+"{"+F+"}":F,c]}catch(t){return}},et=(e,t)=>e[1]-t[1],tt=e=>e.map(Je).filter(Boolean).sort(et).map(t=>t[0]).filter(Boolean),ot=/(?:"(?:[^"]|\\"])*")/gm,rt=/(?:'(?:[^']|\\'])*')/gm,it=/(?:`(?:[^`]|\\`])*`)/gm,le=e=>e.trim(),ae=(e,t,o)=>String(e).replace(t,(...r)=>(o(...r),r[0])),ut=e=>{const t=Object.create(null);return ae(e,ot,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(r=>t[r]=r)),ae(e,rt,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(r=>t[r]=r)),ae(e,it,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(r=>t[r]=r)),Object.values(t)},st="modulepreload",me={},lt="/adorable-css/",at=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${lt}${r}`,r in me)return;me[r]=!0;const i=r.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${u}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":st,i||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),i)return new Promise((c,f)=>{a.addEventListener("load",c),a.addEventListener("error",f)})})).then(()=>t())};function nt(e){let t;return{c(){t=b("div"),h(t,"class","h(100%)")},m(o,r){W(o,t,r),e[3](t)},p:M,i:M,o:M,d(o){o&&Y(t),e[3](null)}}}function ct(e,t,o){let{value:r=""}=t,i=null,u,a;const c=p=>u.setValue(p);Ae(async()=>(self.MonacoEnvironment={getWorker(p,F){return new Ee}},a=await at(()=>import("./editor.main.js").then(function(p){return p.b}),["editor.main.js","editor.main.css"]),u=a.editor.create(i,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"vs-dark",tabSize:2,minimap:{enabled:!1}}),u.onDidChangeModelContent(p=>{o(1,r=u.getValue())}),()=>{u.dispose()}));function f(p){U[p?"unshift":"push"](()=>{i=p,o(0,i)})}return e.$$set=p=>{"value"in p&&o(1,r=p.value)},[i,r,c,f]}class dt extends K{constructor(t){super();Q(this,t,ct,nt,J,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const we=`
<!--
# What is AdorableCSS?
- Rapid On-Demand Atomic CSS framework

\uB354 \uC774\uC0C1 \uC0C8\uB85C\uC6B4 css\uB97C \uC791\uC131\uD558\uB294 \uB370 \uD798\uBE7C\uC9C0 \uB9C8\uC138\uC694. \uAC70\uC758 \uBAA8\uB4E0 class\uB294 \uC774\uBBF8 \uB9CC\uB4E4\uC5B4\uC838\uC788\uC2B5\uB2C8\uB2E4. \uC4F0\uAE30\uB9CC \uD558\uC138\uC694.
class="font(20) c(red)"\uC640 \uAC19\uC774 \uD568\uC218\uD615\uC73C\uB85C \uC815\uC758\uB41C \uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uBCF4\uC138\uC694.
\uBAA8\uB4E0 \uC218\uCE58\uC640 \uC0C9\uC0C1\uC744 \uC9C0\uC6D0\uD558\uBA70, \uD544\uC694\uD55C \uB9CC\uD07C\uC758 CSS\uB9CC \uB9CC\uB4E4\uC5B4 \uB0C5\uB2C8\uB2E4.

# Why Use AdorableCSS?

Easy!
: \uB514\uC790\uC778\uC744 \uC704\uD574 \uC774\uB984\uC744 \uC9D3\uB294 \uC218\uACE0\uAC00 \uC0AC\uB77C\uC9C0\uBA70, \uD55C\uBC88 \uC678\uC6B4 \uC774\uB984\uC740 \uACC4\uC18D \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

Write less do more!
: \uAE30\uC874 css\uBB38\uBC95\uBCF4\uB2E4 \uD6E8\uC52C \uB354 \uAC04\uACB0\uD558\uBA74\uC11C\uB3C4 \uB354 \uB9CE\uC740 \uC791\uC5C5\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

Fast Writing and No switching!
: html, jsx\uC5D0 \uBC14\uB85C \uB514\uC790\uC778\uC744 \uC801\uC6A9\uD560 \uC218 \uC788\uC5B4 \uB9E4\uC6B0 \uBE60\uB978 \uB514\uC790\uC778 \uAC1C\uBC1C \uC18D\uB3C4\uB97C \uAC00\uC9D1\uB2C8\uB2E4.

Portable!
: css \uC5C6\uC774 HTML\uB9CC\uC73C\uB85C UI\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC5B4 \uC774\uB3D9\uACFC \uB9AC\uD329\uD1A0\uB9C1\uC5D0\uC11C \uC790\uC720\uB86D\uC2B5\uB2C8\uB2E4.

Compact!
: \uAE30\uC874 css \uBC29\uC2DD\uBCF4\uB2E4 \uD6E8\uC52C \uB354 \uC801\uC740 \uB77C\uC778\uC758 \uCD5C\uC801\uD654\uB41C css\uB97C \uC0DD\uC0B0\uD569\uB2C8\uB2E4.

Great for Auto Design HandOff!
: \uC774\uB984\uC774 \uD544\uC694\uC5C6\uAE30\uC5D0 figma\uB4F1\uC758 HandOff\uC5D0\uC11C \uBCC0\uD658\uD558\uAE30\uC5D0 \uCD5C\uC801\uD654\uB41C \uD615\uD0DC\uC785\uB2C8\uB2E4.

-->
<div class="layer pack">
  <div class="vbox bg(#fff) w(300) r(12) p(32) elevation(6)">

    <div class="vbox gap(10)">
      <div class="font(30/-/-1%) bold">\u{1F433} Hello Adorable!</div>
      <div class="font(16) c(#999)">Rapid On-Demand Atomic CSS Framework</div>
    </div>

    <div class="space(40)"></div>

    <div class="hbox(right) gap(10)">
      <button class="pack bg(#fff) b(none) c(#000) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#eee)">Cancel</button>

      <button class="pack bg(#333) c(#fff) b(#000.2) r(6) p(8/12) font(14/16/-1%) bold pointer transition(.2s)
  hover:bg(#555)
  active:bg(#000) active:b(#000.2)">OK</button>
    </div>
  </div>
</div>
`.trim(),Ct=`
<!--

Colors
: \uBA3C\uC800 \uAE00\uC790\uC0C9\uC744 \uBCC0\uACBD\uD574 \uBD05\uC2DC\uB2E4.
: \uC0C9\uC0C1\uC740 \uC544\uB798\uC640 \uAC19\uC774 \uC5EC\uB7EC\uAC00\uC9C0 \uBC29\uC2DD\uC744 \uC9C0\uC6D0\uD558\uBA70 \uBC30\uACBD\uC0C9\uACFC \uD14C\uB450\uB9AC\uC0C9\uC5D0\uB3C4 \uACF5\uD1B5\uC73C\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. eg) bg(), b()


sample)

c(red) \uC0C9\uC0C1\uC774\uB984

c(#0080ff) HEX

c(#0080ff.8) HEX + alpha

c(255,0,0) rgb

c(255,0,0,.7) rgba

c(100,50%,50%) hsl

c(100,50%,50%,.5) hsla

c(--css-var) css-variable


@TODO: bg(...), b(...)\uB85C\uB3C4 \uD55C\uBC88 \uD574\uBCF4\uC138\uC694.  
-->


<div class="font(20/200%) bg(#fff) p(20)" style="--css-var: green">

  <div class="c(red)">c(red)</div>

  <div class="c(#0080ff)">c(#0080ff) HEX</div>

  <div class="c(#0080ff.5)">c(#0080ff.5) HEX + alpha</div>

  <div class="c(0,255,0)">c(0,255,0) RGB</div>

  <div class="c(0,255,0,.5)">c(0,255,0,.5) RGBA</div>

  <div class="c(100,50%,50%)">c(100,50%,50%) HSL</div>

  <div class="c(100,50%,50%,.5)">c(100,50%,50%,.5) HSLA</div>

  <div class="c(--css-var)">c(--css-var) css-variable</div>

  <div class="bg(red)">bg(red)</div>

  <div class="bg(#0080ff)">bg(#0080ff) HEX</div>

  <div class="bg(#0080ff.5)">bg(#0080ff.5) HEX + alpha</div>

  <div class="bg(0,255,0)">bg(0,255,0) RGB</div>

  <div class="bg(0,255,0,.5)">bg(0,255,0,.5) RGBA</div>

  <div class="bg(100,50%,50%)">bg(100,50%,50%) HSL</div>

  <div class="bg(100,50%,50%,.5)">bg(100,50%,50%,.5) HSLA</div>

  <div class="bg(--css-var)">bg(--css-var) css-variable</div>
</div>

`.trim(),pt=`
<!--

Typography

1. font(...)

font()\uB294 font-size / line-height / letter-spacing \uC744 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

font(20) { font-size: 20px }
font(20/1.5) { font-size: 20px; line-height:1.5 }
font(20/150%/-1%) { font-size: 20px; line-height:150%; letter-spacing:-1em }
font(20/-/-1%) { font-size: 20px; letter-spacing:-1em } // -\uB294 skip

@NOTE
line-height(1.3)
letter-spacing(1.5)
word-spacing(1.5)
\uB530\uB85C \uC0AC\uC6A9\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.


2. font-weight

thin {font-weight:100;}
extra-light {font-weight:200;}
light {font-weight:300;}
regular {font-weight:400;}
medium {font-weight:500;}
semibold {font-weight:600;}
bold {font-weight:700;}
extra-bold {font-weight:800;}
heavy {font-weight:900;}

100 {font-weight:100;}
200 {font-weight:200;}
300 {font-weight:300;}
400 {font-weight:400;}
500 {font-weight:500;}
600 {font-weight:600;}
700 {font-weight:700;}
800 {font-weight:800;}
900 {font-weight:900;}


3. font-style

italic {font-style:italic}
overline {text-decoration:overline}
underline {text-decoration:underline}
line-through {text-decoration:line-through}
strike {text-decoration:line-through}
del {text-decoration:line-through}

sans-serif {font-family:sans-serif}
serif {font-family:serif}
monospace {font-family:menlo,monospace}
cursive {font-family:cursive}
fantasy {font-family:fantasy}
system-ui {font-family:system-ui}

small-caps {font-variant:small-caps}
lowercase {text-transform:lowercase}
uppercase {text-transform:uppercase}
capitalize {text-transform:capitalize}
-->


<div class="bg(#fff) p(20) >h1:font(20) >h1:bb(#ccc) >h1:m(40/0/20)" style="--css-var: green">

  <h1>Font</h1>
  
  <div class="font(14)">font(14)</div>
  <div class="font(20)">font(20)</div>
  <div class="font(24)">font(24)</div>

  <h1>line-height</h1>

  <div class="hbox gap(10)">
    <div class="font(20/1.5)">font<br/>(20/1.5)</div>
    <div class="font(20/2)">font<br/>(20/2)</div>
    <div class="font(20/3)">font<br/>(20/3)</div>
  </div>


  <h1>Font Weight</h1>

  <div class="thin">thin</div>
  <div class="extra-light">extra-light</div>
  <div class="light">light</div>
  <div class="regular">regular</div>
  <div class="medium">medium</div>
  <div class="semibold">semibold</div>
  <div class="bold">bold</div>
  <div class="extra-bold">extra-bold</div>
  <div class="heavy">heavy</div>
  
  <br/>
  
  <div class="100">100</div>
  <div class="200">200</div>
  <div class="300">300</div>
  <div class="400">400</div>
  <div class="500">500</div>
  <div class="600">600</div>
  <div class="700">700</div>
  <div class="800">800</div>
  <div class="900">900</div>

  <h1>font-style</h1>

  <div class="italic">italic</div>
  <div class="overline">overline</div>
  <div class="underline">underline</div>
  <div class="line-through">line-through</div>
  <div class="strike">strike</div>
  <div class="del">del</div>
  
  <br/>
  
  <div class="sans-serif">sans-serif</div>
  <div class="serif">serif</div>
  <div class="monospace">monospace</div>
  <div class="cursive">cursive</div>
  <div class="fantasy">fantasy</div>
  <div class="system-ui">system-ui</div>

  <br/>

  <div class="small-caps">small-caps</div>
  <div class="lowercase">lowercase</div>
  <div class="uppercase">uppercase</div>
  <div class="capitalize">capitalize</div>


  <h1>text-align</h1>

  <div class="small-caps">text-left</div>
  <div class="lowercase">lowercase</div>
  <div class="uppercase">uppercase</div>
  <div class="capitalize">capitalize</div>


</div>

`.trim(),ht=`
<!--
Box Model
- width / height
: w(32) h(32)

w(32) { width: 32px }
w(~32) { max-width: 32px }
w(32~) { min-width: 32px }
w(32~63) { min-width: 32px; max-width: 32px }
w(1/5) { width:20% }
w(100%-20px) { width: calc(100% - 20px) }

- margin / padding / border / border-radius + (top / right / bottom / left)
: m/p/b/r + t/r/b/l \uC774\uB7F0\uC2DD\uC758 \uC870\uD569\uBC29\uC2DD\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4.
: box-model\uB294 \uBE48\uB3C4\uB97C \uACE0\uB824\uD574 \uCD95\uC57D\uD574\uC11C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.

ex)
m(10) { margin: 10px }
p(10/20) { padding: 10px 20px; }
br(#ccc) { border-right: 1px solid #ccc }
bbw(2) { border-bottom-width: 2px }
r(10) { border-radius: 10px }
r(10/10/20/20) { border-radius: 10px 10px 20px 20px }
r(100%) { border-radius: 100% }
rtl(5) { border-top-left-radius: 100% }
rr(10) { border-top-right-radius: 10px; border-bottom-right-radius: 10px;  

Box sizing
border-box { box-sizing: border-box }
content-box { box-sizing: content-box }
-->


<h1>Box Model</h1>

<div class="w(64) h(64) bg(orange) p(10) m(10)">64 x 64</div>

<div class="w(~128) h(128~) b(orange) bg(#fff) p(24) m(20)">max-width<br/>min-height</div>

<div class="w(128) h(128) r(20) bg(red) p(20)">128 x 128 r(20)</div>

<div class="bl(4/red) bg(#f00.2) p(20) m(10)">quoto</div>

<div class="bg(blue) c(#fff) rl(20) p(20)">border-radius left</div>

<div class="bg(#fff) w(100) h(100) bt(red) br(8/orange) bb(dashed) bl(dotted/blue) m(20)">bt br bb bl</div>

`.trim(),ft=`
<!--
Overflow
- \uC790\uC8FC\uC4F0\uB294 \uAE30\uB2A5 \uC18D\uC131\uC744 \uC9E7\uAC8C \uC4F8 \uC218 \uC788\uB3C4\uB85D \uD3B8\uC758\uC131 \uC81C\uACF5

clip { overflow: hidden }
scroll {overflow:auto;}
scroll-x {overflow-x:auto;overflow-y:hidden}
scroll-y {overflow-x:hidden;overflow-y:auto;}
scrollbar {overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}
no-scrollbar { &::-webkit-scrollbar {display:none;} }
no-scrollbar-x { &::-webkit-scrollbar:horizontal {display:none;} }

- \uD544\uC694\uD55C \uACBD\uC6B0 css\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uBAA8\uB4E0 \uAC12\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.
overflow(value) { overflow: <value> }
overflow-x(value) { overflow-x: <value> }
overflow-y(value) { overflow-y: <value> }

overscroll(value) { overscroll-behavior:<value> }
overscroll-x(value) { overscroll-behavior-x:<value>}
overscroll-y(value) { overscroll-behavior-y:<value>}


Overflow + Text

nowrap {white-space:nowrap;flex-shrink:0;}
nowrap... {white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1}
line-clamp(value) { display:-webkit-box;-webkit-line-clamp:<value>;-webkit-box-orient:vertical;overflow:hidden }
-->


<h1>Overflow</h1>

<div class="vbox gap(20) bg(#fff)">
  
  <h2>default (overflow:visible)</h2>
  <div class="w(200) h(100) bg(#eee) b(red)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <div class="space(50)"></div>

  <h2>clip (overflow:hidden)</h2>
  <div class="w(200) h(50) bg(#eee) b(red) clip">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>scroll</h2>
  <div class="w(200) h(50) bg(#eee) b(red) scroll">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>
</div>


<h1>Overflow with Text</h1>

<div class="vbox gap(20) bg(#fff)">

  <h2>nowrap</h2>
  <div class="w(200) bg(#eee) b(red) nowrap">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>nowrap clip</h2>
  <div class="w(200) bg(#eee) b(red) nowrap clip">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>nowrap...</h2>
  <div class="w(200) bg(#eee) b(red) nowrap...">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.
  </div>

  <h2>line-clamp(2)</h2>
  <div class="w(200) bg(#eee) b(red)">
    <div class="line-clamp(2)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  </div>

  <h2>line-clamp(3)</h2>
  <div class="w(200) bg(#eee) b(red)">
    <div class="line-clamp(3)">You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.</div>
  </div>
</div>

`.trim(),bt=`
<!--
Layout - Flexbox
AdorableCSS\uB294 flexbox\uC5D0 \uAE30\uBC18\uD558\uC5EC \uB808\uC774\uC544\uC6C3\uC744 \uC544\uC8FC \uC27D\uAC8C \uB9CC\uB4E4\uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uD558\uC600\uC2B5\uB2C8\uB2E4.
https://youtu.be/qFvOhBqX1-k

1
hbox
: \uCEE8\uD150\uCE20\uB97C \uAC00\uB85C\uB85C \uBC30\uCE58\uD558\uACE0 \uC2F6\uB2E4\uBA74 hbox(horizontal box)\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.
: hbox\uC758 \uACBD\uC6B0 \uC804\uCCB4 \uBC15\uC2A4\uB97C \uAC00\uC6B4\uB370\uB85C \uB9DE\uCDB0 \uC815\uB82C\uD558\uBA70 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uD06C\uAE30\uAC00 \uC9C0\uC815\uB418\uC9C0 \uC54A\uC744 \uACBD\uC6B0\uC5D0\uB294 \uCEE8\uD150\uCE20\uC5D0 \uB9DE\uAC8C \uC790\uB3D9\uC73C\uB85C \uB298\uC5B4\uB0A9\uB2C8\uB2E4.

gap(value)
gap(vertical/horizonal)
: \uAC01 \uCEE8\uD150\uCE20\uBCC4 \uAC04\uACA9\uC744 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.
https://caniuse.com/flexbox-gap

@NOTE: IE<=11,  safari<14.1 \uC744 \uC9C0\uC6D0\uD574\uC57C \uD55C\uB2E4\uBA74 hgap, hgap-reverse\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.


1-2
\uBC30\uCE58\uB97C \uBCC0\uACBD\uD574\uBCF4\uC790)

hbox(top)
hbox(bottom)
hbox(fill) = hbox(stretch)  // stretch\uB294 \uC624\uD0C0\uAC00 \uC790\uC8FC\uB098\uACE0 \uAE38\uC5B4\uC11C fill alias\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.
hbox(right)
hbox(reverse)

+\uB85C \uC870\uB9BD\uD574\uC11C \uC0AC\uC6A9\uD560\uC218 \uC788\uB2E4.

hbox(top+right)
hbox(bottom+right)
hbox(fill+reverse+left)

+ \uAE30\uD638\uB97C \uC0AC\uC6A9\uD558\uC5EC bottom+right / top+reverse \uB4F1 \uC790\uC720\uB86D\uAC8C \uCEE8\uD150\uCE20\uB97C \uBC30\uCE58\uD558\uC138\uC694

1-3 h(fill)
: fill = fill-parent
: \uAC1C\uBCC4 \uD56D\uBAA9\uC5D0 height\uB97C fill\uB85C \uC9C0\uC815\uD558\uBA74 \uBD80\uBAA8 \uCEE8\uD150\uCE20 \uB9CC\uD07C\uC758 \uD06C\uAE30\uB97C \uAC16\uC2B5\uB2C8\uB2E4.

1-4 hbox(fill)
: \uBAA8\uB4E0 \uC790\uC2DD \uCEE8\uD150\uCE20\uC758 \uD06C\uAE30\uB97C \uBD80\uBAA8 \uCEE8\uD150\uCE20\uC640 \uAC19\uC774 \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4. (\uB2E8, \uC790\uC2DD\uC758 height\uAC00 \uC9C0\uC815\uC774 \uB420 \uACBD\uC6B0\uC5D0\uB294 \uC9C0\uC815\uB41C height\uB97C \uC6B0\uC120\uD569\uB2C8\uB2E4.)


2
pack / space-between
pack\uC740 \uBAA8\uB4E0 \uCEE8\uD150\uCE20\uB97C \uAC00\uC6B4\uB370\uB85C \uBC30\uCE58\uD569\uB2C8\uB2E4.
\uBC84\uD2BC\uC774\uB098 \uBAA8\uB2EC \uD31D\uC5C5 \uB4F1\uB4F1 \uC5EC\uB7EC\uACF3\uC5D0\uC11C \uC790\uC8FC \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC790\uC2DD \uCEE8\uD150\uCE20\uB294 \uC5EC\uB7EC\uAC1C\uAC00 \uC788\uC744 \uACBD\uC6B0 \uAC19\uC774 \uAC00\uC6B4\uB370\uC5D0 \uBC30\uCE58\uB429\uB2C8\uB2E4. (\uC138\uB85C\uB85C \uD558\uACE0 \uC2F6\uB2E4\uBA74 vbox)

3
space-between space-around / space-evenly
:space-between\uC740 \uAC01 \uCEE8\uD150\uCE20\uB97C \uAC19\uC740 \uAC04\uACA9\uC73C\uB85C \uBC8C\uB824\uB193\uC2B5\uB2C8\uB2E4. (NAVBar \uAC19\uC740 \uACF3\uC5D0\uC11C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.) 

4
space / flex

space
: \uCEE4\uC2A4\uD140 \uBD80\uBD84\uC744 \uC9C0\uC815\uD558\uC5EC \uAC04\uACA9\uC744 \uB744\uC6B8\uB54C\uB294 margin\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uBCF4\uB2E4 \uBE48 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uB9CC\uB4DC\uB294\uAC83\uC774 \uB354 \uC88B\uC2B5\uB2C8\uB2E4.
: \uC2E4\uC804\uC5D0\uC11C \uB514\uC790\uC778 \uAC00\uC774\uB4DC\uC5D0 \uBCF4\uD1B5 \uC800 \uC0AC\uC774 \uAC04\uACA9\uC744 \uC801\uC5B4\uC8FC\uB294 \uD3B8\uC774\uAE30\uB3C4 \uD558\uACE0 \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 margin\uC744 \uC9C1\uC811 \uC801\uC6A9\uD558\uBA74 \uC7AC\uC0AC\uC6A9\uC774 \uD798\uB4E4\uC5B4\uC9C0\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.

flex
: flex\uB294 \uBE48\uACF5\uAC04\uC744 \uBA54\uC6CC\uC8FC\uB294 \uC5ED\uD560\uC744 \uD569\uB2C8\uB2E4.
: \uB2E8\uB3C5\uC73C\uB85C\uB9CC \uC0AC\uC6A9\uD574\uC11C \uC88C\uC6B0\uB97C \uBC8C\uB824\uC8FC\uB294 \uC6A9\uB3C4\uB85C \uAC00\uC7A5 \uB9CE\uC774 \uC0AC\uC6A9\uD558\uACE0 Auto Grow\uAC00 \uD544\uC694\uD55C \uCEE8\uD150\uCE20 \uC601\uC5ED\uC5D0 \uC0AC\uC6A9\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4.
: \uC22B\uC790\uB97C \uBD80\uC5EC\uD558\uBA74 \uB0A8\uB294 \uACF5\uAC04\uC744 \uBE44\uC728\uB85C \uB098\uB20C \uC218 \uC788\uC2B5\uB2C8\uB2E4.


5
vbox
: \uCEE8\uD150\uCE20\uB97C \uC138\uB85C\uB85C \uBC30\uCE58\uD558\uACE0 \uC2F6\uB2E4\uBA74 vbox(vertical box)\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.
: \uC0AC\uC6A9\uBC95\uC740 hbox\uC640 \uB3D9\uC77C \uD569\uB2C8\uB2E4. \uB2E8, vbox\uB294 \uAE30\uBCF8\uAC12\uC774 fill = stretch \uC785\uB2C8\uB2E4.
-->


<h1>Box Model</h1>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>hbox + gap</h2>

  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(48) bg(orange) pack">b</div>
    <div class="w(48) h(48) bg(orange) pack">o</div>
    <div class="w(48) h(48) bg(orange) pack">x</div>
  </div>  


  <h2>hbox(top)</h2>  
  <div class="hbox(top) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="w(48) h(50) bg(orange) pack">(top)</div>
  </div>
  
  <h2>hbox(bottom)</h2>  
  <div class="hbox(bottom) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(50) bg(orange) pack">(bottom)</div>
  </div>

  <h2>hbox(bottom+right)</h2>  
  <div class="hbox(bottom+right) gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(50) bg(orange) pack">(bottom+right)</div>
  </div>

  <h2>h(fill)</h2>  
  <div class="hbox gap(10) b(orange) p(10)">
    <div class="w(48) h(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">b</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) h(24) bg(orange) pack">x</div>
    <div class="p(10) h(fill) bg(orange) pack">h(fill)</div>
  </div>

  <h2>hbox(fill)</h2>  
  <div class="hbox(fill) gap(10) b(orange) p(10) h(200)">
    <div class="w(48) bg(orange) pack">h</div>
    <div class="w(48) h(100) bg(orange) pack">\uD06C\uAE30\uB97C \uC9C0\uC815\uD558\uBA74<br/>\uCEE8\uD150\uCE20 \uD06C\uAE30</div>
    <div class="p(10) bg(orange) pack">o</div>
    <div class="w(48) bg(orange) pack">x</div>
    <div class="p(10) bg(orange) pack">(fill)</div>
  </div>


  <h2>pack</h2>  
  <div class="hbox pack b(orange) p(10) h(100)">
    <div class="p(10) bg(orange) pack">pack</div>
  </div>
  
  <div class="hbox(top) pack gap(10) b(orange) p(10) w(200) h(200)">
    <div class="p(10) bg(orange) pack">hbox(top)</div>
    <div class="p(10) bg(orange) pack">pack</div>
  </div>

  <h2>space-beetween / space-around / space-evenly</h2>  

  <div class="hbox space-between b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">beetween</div>
  </div>

  <div class="hbox space-around b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">around</div>
  </div>

  <div class="hbox space-evenly b(orange) w(300)">
    <div class="p(10) bg(orange) pack">space</div>
    <div class="p(10) bg(orange) pack">-</div>
    <div class="p(10) bg(orange) pack">evenly</div>
  </div>


  <h2>space / flex</h2>  

  <div class="hbox b(orange) w(400)">
    <div class="p(10) bg(orange) pack">space(8)</div>
    <div class="space(8)"></div>
    <div class="p(10) bg(orange) pack">vs</div>
    <div class="flex"></div>
    <div class="p(10) bg(orange)">flex</div>
  </div>
  
</div>

`.trim(),vt=`
<!--
Layout - Position
https://youtu.be/T5wMhoVHFU0

Basic
- \uC6B0\uC120 css\uC640 1:1 \uB300\uC751\uC744 \uD558\uB294 \uC18D\uC131

1. absolute / fixed / relative / static / sticky / sticky-top / sticky-left 
: css position \uD0C0\uC785\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.

2. top / right / bottom / lef
: css\uC758 top, right, bottom, left\uC758 \uAC12\uC744 \uC870\uC808 \uD560 \uC218 \uC788\uB2E4.

3. z
: css\uC758 z-index\uAC12\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uB2E4.


Extension

1. layer
: \uC804\uCCB4\uB97C \uB36E\uB294 \uD615\uD0DC\uC758 \uB808\uC774\uC544\uC6C3 
: \uBAA8\uB2EC \uD31D\uC5C5\uB4F1\uC5D0 dimmed\uB97C \uAE4C\uB294 \uB4F1 \uBE48\uBC88\uD788 \uC0AC\uC6A9\uB418\uC5B4 \uC18D\uC131\uC5D0 \uCD94\uAC00 \uD558\uC600\uC2B5\uB2C8\uB2E4.
: absolute top(0) left(0) right(0) bottom(0)\uC758 \uCD95\uC57D\uD615\uC785\uB2C8\uB2E4.

2. layer(top) / layer(right) / layer(bottom) / layer(left)
: \uBC29\uD5A5\uC744 \uC9C0\uC815\uD574\uC8FC\uBA74 \uD574\uB2F9 \uBA74\uC5D0 \uBD99\uB294 \uD615\uD0DC\uB85C \uBD99\uC5EC\uC90D\uB2C8\uB2E4.
: NAV\uB098 BAR\uB4F1\uC744 \uACE0\uC815\uD560\uB54C \uC8FC\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.


3. layer(top+left) / layer(top+right) / layer(bottom+left) / layer(bottom+right)
: top/bottom + left/right \uB294 \uC870\uB9BD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.
: \uD31D\uC5C5\uC758 \uB2EB\uAE30 \uBC84\uD2BC \uB4F1\uC5D0\uC11C margin\uACFC \uD568\uAED8 \uC8FC\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.
-->


<h2>Position</h2>

<div class="vbox gap(20) bg(#fff) p(10)">

  <h2>layer</h2>
  <div class="relative w(100) h(100) b(#ff6347) pack">
    <div class="font(90)">\u{1F433}</div>
    <div class="layer pack bg(#ff6347.5)">layer</div>
  </div>


  <h2>layer(top) layer(right) layer(bottom) layer(left)</h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top) pack bg(#ff6347.5)">layer(top)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(right) pack bg(#ff6347.5)">layer(right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom) pack bg(#ff6347.5)">layer(bottom)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(left) pack bg(#ff6347.5)">layer(left)</div>
    </div>
  </div>


  <h2>layer(top+left) / layer(top+right) / layer(bottom+right) / layer(bottom+right) </h2>
  
  <div class="hbox gap(10)">
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top+left) pack bg(#ff6347.5) text-center">layer<br/>(top+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(top+right) pack bg(#ff6347.5) text-center">layer<br/>(top+right)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom+left) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+left)</div>
    </div>
    
    <div class="relative w(100) h(100) b(#ff6347) pack">
      <div class="font(90)">\u{1F433}</div>
      <div class="layer(bottom+right) pack bg(#ff6347.5) text-center">layer<br/>(bottom<br/>+right)</div>
    </div>
  </div>

</div>

`.trim();function gt(e){let t,o=(e[0]!=="prod"?`[${e[0]}]`:"")+"",r,i,u;return{c(){t=b("div"),r=V(o),i=k(),u=V(e[1]),h(t,"class","version fixed z(9999) layer(bottom+right) p(10/20) font(10) c(#999)")},m(a,c){W(a,t,c),d(t,r),d(t,i),d(t,u)},p(a,[c]){c&1&&o!==(o=(a[0]!=="prod"?`[${a[0]}]`:"")+"")&&ee(r,o),c&2&&ee(u,a[1])},i:M,o:M,d(a){a&&Y(t)}}}function Bt(e,t,o){let{phase:r="prod"}=t,{version:i}=t;return e.$$set=u=>{"phase"in u&&o(0,r=u.phase),"version"in u&&o(1,i=u.version)},[r,i]}class mt extends K{constructor(t){super();Q(this,t,Bt,gt,J,{phase:0,version:1})}}function xe(e,t,o){const r=e.slice();return r[16]=t[o][0],r[17]=t[o][1],r[19]=o,r}function ye(e){let t,o=e[16]+"",r,i,u;function a(){return e[10](e[16],e[17],e[19])}return{c(){t=b("div"),r=V(o),h(t,"class","block .selected:c(#fff) c(#888) pointer"),$(t,"selected",e[3]===e[19])},m(c,f){W(c,t,f),d(t,r),i||(u=te(t,"click",a),i=!0)},p(c,f){e=c,f&8&&$(t,"selected",e[3]===e[19])},d(c){c&&Y(t),i=!1,u()}}}function wt(e){let t,o,r,i,u,a,c,f,p,F,A,v,x,R,E,g,C,_,y,ne,O,L,H,ce,T,N,q,j,P,Z,de,z=e[6],B=[];for(let n=0;n<z.length;n+=1)B[n]=ye(xe(e,z,n));function De(n){e[11](n)}let Ce={};return e[1]!==void 0&&(Ce.value=e[1]),v=new dt({props:Ce}),U.push(()=>ke(v,"value",De)),e[12](v),j=new mt({props:{version:"0.0.6"}}),{c(){t=b("div"),o=b("div"),o.innerHTML=`<div class="hbox gap(4)"><div class="w(32) h(32) font(24) mt(-2) pack">\u{1F433}</div> 
      <div class="font(20)"><span class="100">Adorable</span><span class="500">CSS</span></div></div> 
    <div class="space(30)"></div> 

    <div class="hbox gap(20)"><a href="https://github.com/developer-1px/adorable-css" target="_blank"><svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a> 

      <a href="https://www.youtube.com/watch?v=O-eonCeumw8&amp;list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&amp;index=2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" style="fill:#000;"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg></a></div>`,r=k(),i=b("div"),u=b("div"),a=b("div"),a.textContent="Turotial",c=k(),f=b("div"),p=k();for(let n=0;n<B.length;n+=1)B[n].c();F=k(),A=b("div"),he(v.$$.fragment),R=k(),E=b("div"),g=b("div"),C=b("button"),C.textContent="Result",_=k(),y=b("button"),y.textContent="CSS output",ne=k(),O=b("div"),L=b("div"),H=b("iframe"),ce=k(),T=b("div"),N=V(e[2]),q=k(),he(j.$$.fragment),h(o,"class","hbox gap(10) h(64) bb(#fff.05) p(10/20) bg(#000) c(#fff) elevation(2) relative z(1)"),h(a,"class","bold font(24)"),h(f,"class","space(20)"),h(u,"class","flex vbox p(10/20) br(#fff.05)"),h(A,"class","flex(4) vbox br(#ccc)"),h(C,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)"),$(C,"selected",e[4]==="Result"),h(y,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)"),$(y,"selected",e[4]==="CSS_output"),h(g,"class","hbox bg(#fff) bb(#ccc) font(12) c(#999)"),h(H,"class","layer w(100%) h(100%) bg(transparent)"),h(H,"frameborder","0"),h(L,"class","layer pack br(#ccc) check-board none"),$(L,"none",e[4]!=="Result"),h(T,"class","layer pre monospace font(12) p(10) none"),$(T,"none",e[4]!=="CSS_output"),h(O,"class","flex relative"),h(E,"class","flex(3) relative vbox bg(#fff) c(#000)"),h(i,"class","flex hbox(fill) clip"),h(t,"class","layer vbox overscroll(none)")},m(n,m){W(n,t,m),d(t,o),d(t,r),d(t,i),d(i,u),d(u,a),d(u,c),d(u,f),d(u,p);for(let I=0;I<B.length;I+=1)B[I].m(u,null);d(i,F),d(i,A),fe(v,A,null),d(i,R),d(i,E),d(E,g),d(g,C),d(g,_),d(g,y),d(E,ne),d(E,O),d(O,L),d(L,H),e[13](H),d(O,ce),d(O,T),d(T,N),W(n,q,m),fe(j,n,m),P=!0,Z||(de=[te(C,"click",e[7]),te(y,"click",e[8])],Z=!0)},p(n,[m]){if(m&584){z=n[6];let w;for(w=0;w<z.length;w+=1){const pe=xe(n,z,w);B[w]?B[w].p(pe,m):(B[w]=ye(pe),B[w].c(),B[w].m(u,null))}for(;w<B.length;w+=1)B[w].d(1);B.length=z.length}const I={};!x&&m&2&&(x=!0,I.value=n[1],$e(()=>x=!1)),v.$set(I),m&16&&$(C,"selected",n[4]==="Result"),m&16&&$(y,"selected",n[4]==="CSS_output"),m&16&&$(L,"none",n[4]!=="Result"),(!P||m&4)&&ee(N,n[2]),m&16&&$(T,"none",n[4]!=="CSS_output")},i(n){P||(be(v.$$.fragment,n),be(j.$$.fragment,n),P=!0)},o(n){ve(v.$$.fragment,n),ve(j.$$.fragment,n),P=!1},d(n){n&&Y(t),_e(B,n),e[12](null),ge(v),e[13](null),n&&Y(q),ge(j,n),Z=!1,Fe(de)}}}function xt(e,t,o){let r,i,u=we;const a=[["0. Hello AdorableCSS!",we],["1. Colors",Ct],["2. Typography",pt],["3. Box Model",ht],["4. Overflow",ft],["5. Layout - Flexbox",bt],["6. Layout - Position",vt],["\uACC4\uC18D \uC791\uC5C5 \uC911\uC785\uB2C8\uB2E4...",""]];let c=0,f="Result";const p=()=>o(4,f="Result"),F=()=>o(4,f="CSS_output"),A=(C,_,y)=>{o(1,u=_),o(3,c=y),v.setValue(_)};let v;const x=(C,_,y)=>A(C,_,y);function R(C){u=C,o(1,u)}function E(C){U[C?"unshift":"push"](()=>{v=C,o(5,v)})}function g(C){U[C?"unshift":"push"](()=>{i=C,o(0,i),o(1,u),o(2,r)})}return e.$$.update=()=>{e.$$.dirty&2&&o(2,r=tt(ut(u)).join(`
`)),e.$$.dirty&7&&i&&o(0,i.contentWindow.document.body.innerHTML=u+`<style>${r}</style>`,i)},[i,u,r,c,f,v,a,p,F,A,x,R,E,g]}class yt extends K{constructor(t){super();Q(this,t,xt,wt,J,{})}}new yt({target:document.body});
