import{S as J,i as ee,s as te,e as f,a as b,b as W,n as H,d as Y,o as ye,W as De,c as V,t as G,f as $,g as d,h as oe,j as _,l as re,k as Ae,m as pe,p as Ce,q as Ee,r as he,u as be,v as $e,w as fe,x as _e}from"./vendor.js";const ze=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}};ze();const Fe=e=>{const t=e.length,o=e.charCodeAt(0);let i=-1,r,s="";for(;++i<t;){if(r=e.charCodeAt(i),r==0){s+="\uFFFD";continue}if(r>=1&&r<=31||r==127||i==0&&r>=48&&r<=57||i==1&&r>=48&&r<=57&&o==45){s+="\\"+r.toString(16)+" ";continue}if(i==0&&t==1&&r==45){s+="\\"+e.charAt(i);continue}if(r>=128||r==45||r==95||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122){s+=e.charAt(i);continue}s+="\\"+e.charAt(i)}return s},ie=e=>e.toFixed(2).replace(/^0+|\.00$|0+$/g,"")||"0",a=e=>String(e).startsWith("--")?`var(${e})`:e,l=e=>{if(e===0||e==="0")return 0;if(String(e).startsWith("--"))return a(""+e);const[t,o]=String(e).split("/");return+t>0&&+o>0?ie(+t/+o*100)+"%":/.[-+*\/]/.test(String(e))?"calc("+String(e).replace(/[-+]/g,i=>` ${i} `)+")":+e==+e?e+"px":e},Se=e=>e.endsWith("%")?+e.slice(0,-1)/100+"em":e,Re=e=>{const[t,o]=e.split(".");return o&&t.length===4?"rgba("+t.slice(1).split("").map(i=>parseInt(i+i,16)).join(",")+",."+o+")":o?"rgba("+[t.slice(1,3),t.slice(3,5),t.slice(5,7)].map(i=>parseInt(i,16)).join(",")+",."+o+")":e},Oe=e=>{const[t,o,i,r]=e.split(",");return"hsl"+(r?"a":"")+"("+[t,o,i,r].filter(Boolean).map(a).join()+")"},je=e=>{const[t,o,i,r]=e.split(",");return"rgb"+(r?"a":"")+"("+[t,o,i,r].filter(Boolean).map(a).join()+")"},D=(e="transparent")=>e==="-"||e==="transparent"?"transparent":e.startsWith("--")?`var(${e})`:e.charAt(0)==="#"?Re(e):e.includes(",")&&e.includes("%")?Oe(e):e.includes(",")?je(e):e,Le=e=>(e||"").split("/").map((t,o)=>{if(t!=="-"){if(String(t).startsWith("--"))return`var(${t})`;switch(o){case 0:return`font-size:${l(t)}`;case 1:return`line-height:${+t<4?ie(+t):l(t)}`;case 2:return`letter-spacing:${l(Se(t))}`}}}).filter(Boolean).join(";"),M=e=>{if(!e||e==="none"||e==="0"||e==="-")return"none";const t=["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"];let o=!1,i=!1;const r=e.split("/").map(s=>parseInt(s)>0?(o=!0,s.includes(",")?D(s):l(s)):t.includes(s)?(i=!0,s):D(s));return o||r.unshift("1px"),i||r.unshift("solid"),r.join(" ")},N=(e,t=a)=>String(e).startsWith("--")?`var(${e})`:e&&e.split("/").map(t).join(" "),R=(e,t=o=>o)=>String(e).startsWith("--")?`var(${e})`:e&&e.split(",").map(t).join(","),q=e=>N(e,l),Te=e=>{const[t,o]=e.split(":");return(+o/+t*100).toFixed(2)+"%"},Ie=(e="")=>{const t=e.split("+"),o=t.map(i=>{switch(i){case"top":return"align-items:flex-start;";case"bottom":return"align-items:flex-end;";case"fill":return"align-items:stretch;";case"stretch":return"align-items:stretch;";case"center":return"justify-content:center;";case"left":return t.includes("reverse")?"justify-content:flex-end;":"";case"right":return t.includes("reverse")?"":"justify-content:flex-end;";case"reverse":return"flex-direction:row-reverse;"}});return!t.includes("top")&&!t.includes("bottom")&&!t.includes("full")&&o.unshift("align-items:center;"),o.join("")},Pe=(e="")=>{const t=e.split("+"),o=t.map(i=>{switch(i){case"left":return"align-items:flex-start;";case"center":return"align-items:center;";case"right":return"align-items:flex-end;";case"top":return t.includes("reverse")?"justify-content:flex-end;":"";case"bottom":return t.includes("reverse")?"":"justify-content:flex-end;";case"reverse":return"flex-direction:column-reverse;"}});return!t.includes("left")&&!t.includes("center")&&!t.includes("right")&&o.unshift("align-items:stretch;"),o.join("")},Xe=e=>e.includes("=")?e.split("/").map(t=>t.replace("="," ")).join(","):`all ${e}`,ge={"--*":1,"-ms-accelerator":1,"-ms-block-progression":1,"-ms-content-zoom-chaining":1,"-ms-content-zooming":1,"-ms-content-zoom-limit":1,"-ms-content-zoom-limit-max":1,"-ms-content-zoom-limit-min":1,"-ms-content-zoom-snap":1,"-ms-content-zoom-snap-points":1,"-ms-content-zoom-snap-type":1,"-ms-filter":1,"-ms-flow-from":1,"-ms-flow-into":1,"-ms-grid-columns":1,"-ms-grid-rows":1,"-ms-high-contrast-adjust":1,"-ms-hyphenate-limit-chars":1,"-ms-hyphenate-limit-lines":1,"-ms-hyphenate-limit-zone":1,"-ms-ime-align":1,"-ms-overflow-style":1,"-ms-scrollbar-3dlight-color":1,"-ms-scrollbar-arrow-color":1,"-ms-scrollbar-base-color":1,"-ms-scrollbar-darkshadow-color":1,"-ms-scrollbar-face-color":1,"-ms-scrollbar-highlight-color":1,"-ms-scrollbar-shadow-color":1,"-ms-scrollbar-track-color":1,"-ms-scroll-chaining":1,"-ms-scroll-limit":1,"-ms-scroll-limit-x-max":1,"-ms-scroll-limit-x-min":1,"-ms-scroll-limit-y-max":1,"-ms-scroll-limit-y-min":1,"-ms-scroll-rails":1,"-ms-scroll-snap-points-x":1,"-ms-scroll-snap-points-y":1,"-ms-scroll-snap-type":1,"-ms-scroll-snap-x":1,"-ms-scroll-snap-y":1,"-ms-scroll-translation":1,"-ms-text-autospace":1,"-ms-touch-select":1,"-ms-user-select":1,"-ms-wrap-flow":1,"-ms-wrap-margin":1,"-ms-wrap-through":1,"-moz-appearance":1,"-moz-binding":1,"-moz-border-bottom-colors":1,"-moz-border-left-colors":1,"-moz-border-right-colors":1,"-moz-border-top-colors":1,"-moz-context-properties":1,"-moz-float-edge":1,"-moz-force-broken-image-icon":1,"-moz-image-region":1,"-moz-orient":1,"-moz-outline-radius":1,"-moz-outline-radius-bottomleft":1,"-moz-outline-radius-bottomright":1,"-moz-outline-radius-topleft":1,"-moz-outline-radius-topright":1,"-moz-stack-sizing":1,"-moz-text-blink":1,"-moz-user-focus":1,"-moz-user-input":1,"-moz-user-modify":1,"-moz-window-dragging":1,"-moz-window-shadow":1,"-webkit-appearance":1,"-webkit-border-before":1,"-webkit-border-before-color":1,"-webkit-border-before-style":1,"-webkit-border-before-width":1,"-webkit-box-reflect":1,"-webkit-line-clamp":1,"-webkit-mask":1,"-webkit-mask-attachment":1,"-webkit-mask-clip":1,"-webkit-mask-composite":1,"-webkit-mask-image":1,"-webkit-mask-origin":1,"-webkit-mask-position":1,"-webkit-mask-position-x":1,"-webkit-mask-position-y":1,"-webkit-mask-repeat":1,"-webkit-mask-repeat-x":1,"-webkit-mask-repeat-y":1,"-webkit-mask-size":1,"-webkit-overflow-scrolling":1,"-webkit-tap-highlight-color":1,"-webkit-text-fill-color":1,"-webkit-text-stroke":1,"-webkit-text-stroke-color":1,"-webkit-text-stroke-width":1,"-webkit-touch-callout":1,"-webkit-user-modify":1,"accent-color":1,"align-content":1,"align-items":1,"align-self":1,"align-tracks":1,all:1,animation:1,"animation-delay":1,"animation-direction":1,"animation-duration":1,"animation-fill-mode":1,"animation-iteration-count":1,"animation-name":1,"animation-play-state":1,"animation-timing-function":1,appearance:1,"aspect-ratio":1,azimuth:1,"backdrop-filter":1,"backface-visibility":1,background:1,"background-attachment":1,"background-blend-mode":1,"background-clip":1,"background-color":1,"background-image":1,"background-origin":1,"background-position":1,"background-position-x":1,"background-position-y":1,"background-repeat":1,"background-size":1,"block-overflow":1,"block-size":1,border:1,"border-block":1,"border-block-color":1,"border-block-style":1,"border-block-width":1,"border-block-end":1,"border-block-end-color":1,"border-block-end-style":1,"border-block-end-width":1,"border-block-start":1,"border-block-start-color":1,"border-block-start-style":1,"border-block-start-width":1,"border-bottom":1,"border-bottom-color":1,"border-bottom-left-radius":1,"border-bottom-right-radius":1,"border-bottom-style":1,"border-bottom-width":1,"border-collapse":1,"border-color":1,"border-end-end-radius":1,"border-end-start-radius":1,"border-image":1,"border-image-outset":1,"border-image-repeat":1,"border-image-slice":1,"border-image-source":1,"border-image-width":1,"border-inline":1,"border-inline-end":1,"border-inline-color":1,"border-inline-style":1,"border-inline-width":1,"border-inline-end-color":1,"border-inline-end-style":1,"border-inline-end-width":1,"border-inline-start":1,"border-inline-start-color":1,"border-inline-start-style":1,"border-inline-start-width":1,"border-left":1,"border-left-color":1,"border-left-style":1,"border-left-width":1,"border-radius":1,"border-right":1,"border-right-color":1,"border-right-style":1,"border-right-width":1,"border-spacing":1,"border-start-end-radius":1,"border-start-start-radius":1,"border-style":1,"border-top":1,"border-top-color":1,"border-top-left-radius":1,"border-top-right-radius":1,"border-top-style":1,"border-top-width":1,"border-width":1,bottom:1,"box-align":1,"box-decoration-break":1,"box-direction":1,"box-flex":1,"box-flex-group":1,"box-lines":1,"box-ordinal-group":1,"box-orient":1,"box-pack":1,"box-shadow":1,"box-sizing":1,"break-after":1,"break-before":1,"break-inside":1,"caption-side":1,"caret-color":1,clear:1,clip:1,"clip-path":1,color:1,"color-adjust":1,"color-scheme":1,"column-count":1,"column-fill":1,"column-gap":1,"column-rule":1,"column-rule-color":1,"column-rule-style":1,"column-rule-width":1,"column-span":1,"column-width":1,columns:1,contain:1,content:1,"content-visibility":1,"counter-increment":1,"counter-reset":1,"counter-set":1,cursor:1,direction:1,display:1,"empty-cells":1,filter:1,flex:1,"flex-basis":1,"flex-direction":1,"flex-flow":1,"flex-grow":1,"flex-shrink":1,"flex-wrap":1,float:1,font:1,"font-family":1,"font-feature-settings":1,"font-kerning":1,"font-language-override":1,"font-optical-sizing":1,"font-variation-settings":1,"font-size":1,"font-size-adjust":1,"font-smooth":1,"font-stretch":1,"font-style":1,"font-synthesis":1,"font-variant":1,"font-variant-alternates":1,"font-variant-caps":1,"font-variant-east-asian":1,"font-variant-ligatures":1,"font-variant-numeric":1,"font-variant-position":1,"font-weight":1,"forced-color-adjust":1,gap:1,grid:1,"grid-area":1,"grid-auto-columns":1,"grid-auto-flow":1,"grid-auto-rows":1,"grid-column":1,"grid-column-end":1,"grid-column-gap":1,"grid-column-start":1,"grid-gap":1,"grid-row":1,"grid-row-end":1,"grid-row-gap":1,"grid-row-start":1,"grid-template":1,"grid-template-areas":1,"grid-template-columns":1,"grid-template-rows":1,"hanging-punctuation":1,height:1,hyphens:1,"image-orientation":1,"image-rendering":1,"image-resolution":1,"ime-mode":1,"initial-letter":1,"initial-letter-align":1,"inline-size":1,"input-security":1,inset:1,"inset-block":1,"inset-block-end":1,"inset-block-start":1,"inset-inline":1,"inset-inline-end":1,"inset-inline-start":1,isolation:1,"justify-content":1,"justify-items":1,"justify-self":1,"justify-tracks":1,left:1,"letter-spacing":1,"line-break":1,"line-clamp":1,"line-height":1,"line-height-step":1,"list-style":1,"list-style-image":1,"list-style-position":1,"list-style-type":1,margin:1,"margin-block":1,"margin-block-end":1,"margin-block-start":1,"margin-bottom":1,"margin-inline":1,"margin-inline-end":1,"margin-inline-start":1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-trim":1,mask:1,"mask-border":1,"mask-border-mode":1,"mask-border-outset":1,"mask-border-repeat":1,"mask-border-slice":1,"mask-border-source":1,"mask-border-width":1,"mask-clip":1,"mask-composite":1,"mask-image":1,"mask-mode":1,"mask-origin":1,"mask-position":1,"mask-repeat":1,"mask-size":1,"mask-type":1,"masonry-auto-flow":1,"math-style":1,"max-block-size":1,"max-height":1,"max-inline-size":1,"max-lines":1,"max-width":1,"min-block-size":1,"min-height":1,"min-inline-size":1,"min-width":1,"mix-blend-mode":1,"object-fit":1,"object-position":1,offset:1,"offset-anchor":1,"offset-distance":1,"offset-path":1,"offset-position":1,"offset-rotate":1,opacity:1,order:1,orphans:1,outline:1,"outline-color":1,"outline-offset":1,"outline-style":1,"outline-width":1,overflow:1,"overflow-anchor":1,"overflow-block":1,"overflow-clip-box":1,"overflow-clip-margin":1,"overflow-inline":1,"overflow-wrap":1,"overflow-x":1,"overflow-y":1,"overscroll-behavior":1,"overscroll-behavior-block":1,"overscroll-behavior-inline":1,"overscroll-behavior-x":1,"overscroll-behavior-y":1,padding:1,"padding-block":1,"padding-block-end":1,"padding-block-start":1,"padding-bottom":1,"padding-inline":1,"padding-inline-end":1,"padding-inline-start":1,"padding-left":1,"padding-right":1,"padding-top":1,"page-break-after":1,"page-break-before":1,"page-break-inside":1,"paint-order":1,perspective:1,"perspective-origin":1,"place-content":1,"place-items":1,"place-self":1,"pointer-events":1,position:1,quotes:1,resize:1,right:1,rotate:1,"row-gap":1,"ruby-align":1,"ruby-merge":1,"ruby-position":1,scale:1,"scrollbar-color":1,"scrollbar-gutter":1,"scrollbar-width":1,"scroll-behavior":1,"scroll-margin":1,"scroll-margin-block":1,"scroll-margin-block-start":1,"scroll-margin-block-end":1,"scroll-margin-bottom":1,"scroll-margin-inline":1,"scroll-margin-inline-start":1,"scroll-margin-inline-end":1,"scroll-margin-left":1,"scroll-margin-right":1,"scroll-margin-top":1,"scroll-padding":1,"scroll-padding-block":1,"scroll-padding-block-start":1,"scroll-padding-block-end":1,"scroll-padding-bottom":1,"scroll-padding-inline":1,"scroll-padding-inline-start":1,"scroll-padding-inline-end":1,"scroll-padding-left":1,"scroll-padding-right":1,"scroll-padding-top":1,"scroll-snap-align":1,"scroll-snap-coordinate":1,"scroll-snap-destination":1,"scroll-snap-points-x":1,"scroll-snap-points-y":1,"scroll-snap-stop":1,"scroll-snap-type":1,"scroll-snap-type-x":1,"scroll-snap-type-y":1,"shape-image-threshold":1,"shape-margin":1,"shape-outside":1,"tab-size":1,"table-layout":1,"text-align":1,"text-align-last":1,"text-combine-upright":1,"text-decoration":1,"text-decoration-color":1,"text-decoration-line":1,"text-decoration-skip":1,"text-decoration-skip-ink":1,"text-decoration-style":1,"text-decoration-thickness":1,"text-emphasis":1,"text-emphasis-color":1,"text-emphasis-position":1,"text-emphasis-style":1,"text-indent":1,"text-justify":1,"text-orientation":1,"text-overflow":1,"text-rendering":1,"text-shadow":1,"text-size-adjust":1,"text-transform":1,"text-underline-offset":1,"text-underline-position":1,top:1,"touch-action":1,transform:1,"transform-box":1,"transform-origin":1,"transform-style":1,transition:1,"transition-delay":1,"transition-duration":1,"transition-property":1,"transition-timing-function":1,translate:1,"unicode-bidi":1,"user-select":1,"vertical-align":1,visibility:1,"white-space":1,widows:1,width:1,"will-change":1,"word-break":1,"word-spacing":1,"word-wrap":1,"writing-mode":1,"z-index":1,zoom:1},We={c:e=>`color:${D(e)};`,bg:e=>`background-color:${D(e)};`,font:e=>Le(e),"font-size":e=>`font-size:${l(e)};`,"line-height":e=>`line-height:${+e<4?ie(+e):l(e)}`,"letter-spacing":e=>`letter-spacing:${l(e)};`,"word-spacing":e=>`word-spacing:${l(e)};`,"100":()=>"font-weight:100;","200":()=>"font-weight:200;","300":()=>"font-weight:300;","400":()=>"font-weight:400;","500":()=>"font-weight:500;","600":()=>"font-weight:600;","700":()=>"font-weight:700;","800":()=>"font-weight:800;","900":()=>"font-weight:900;",thin:()=>"font-weight:100;","extra-light":()=>"font-weight:200;",light:()=>"font-weight:300;",regular:()=>"font-weight:400;",medium:()=>"font-weight:500;",semibold:()=>"font-weight:600;",bold:()=>"font-weight:700;","extra-bold":()=>"font-weight:800;",heavy:()=>"font-weight:900;",thicker:(e="1")=>`text-shadow:0 0 ${l(e)} currentColor;`,italic:()=>"font-style:italic;",overline:()=>"text-decoration:overline;",underline:()=>"text-decoration:underline;","line-through":()=>"text-decoration:line-through;",strike:()=>"text-decoration:line-through;",del:()=>"text-decoration:line-through;","sans-serif":()=>"font-family:sans-serif;",serif:()=>"font-family:serif;",monospace:()=>"font-family:menlo,monospace;",cursive:()=>"font-family:cursive;",fantasy:()=>"font-family:fantasy;","system-ui":()=>"font-family:system-ui;","small-caps":()=>"font-variant:small-caps",lowercase:()=>"text-transform:lowercase;",uppercase:()=>"text-transform:uppercase;",capitalize:()=>"text-transform:capitalize;","text-justify":()=>"text-align:justify;","text-center":()=>"text-align:center;","text-right":()=>"text-align:right;","text-left":()=>"text-align:left;","break-all":()=>"word-break:break-all;","break-word":()=>"word-break:break-word;overflow-wrap:break-word;","keep-all":()=>"word-break:keep-all;","border-box":()=>"box-sizing:border-box","content-box":()=>"box-sizing:content-box",w:e=>{if(e.includes("~")){const t=[],[o,i]=e.split("~");return o&&t.push(`min-width:${l(o)};`),i&&t.push(`max-width:${l(i)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`width:${l(e)};`},h:e=>{if(e.includes("~")){const t=[],[o,i]=e.split("~");return o&&t.push(`min-height:${l(o)};`),i&&t.push(`max-height:${l(i)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`height:${l(e)};`},m:e=>`margin:${q(e)};`,mt:e=>`margin-top:${l(e)};`,mr:e=>`margin-right:${l(e)};`,mb:e=>`margin-bottom:${l(e)};`,ml:e=>`margin-left:${l(e)};`,p:e=>`padding:${q(e)};`,pt:e=>`padding-top:${l(e)};`,pr:e=>`padding-right:${l(e)};`,pb:e=>`padding-bottom:${l(e)};`,pl:e=>`padding-left:${l(e)};`,b:e=>`border:${M(e)};`,bt:e=>`border-top:${M(e)};`,br:e=>`border-right:${M(e)};`,bb:e=>`border-bottom:${M(e)};`,bl:e=>`border-left:${M(e)};`,bw:e=>`border-width:${l(e)};`,btw:e=>`border-top-width:${l(e)};`,brw:e=>`border-right-width:${l(e)};`,bbw:e=>`border-bottom-width:${l(e)};`,blw:e=>`border-left-width:${l(e)};`,bs:e=>`border-style:${a(e)};`,bts:e=>`border-top-style:${a(e)};`,brs:e=>`border-right-style:${a(e)};`,bbs:e=>`border-bottom-style:${a(e)};`,bls:e=>`border-left-style:${a(e)};`,bc:e=>`border-color:${D(e)};`,btc:e=>`border-top-color:${D(e)};`,brc:e=>`border-right-color:${D(e)};`,bbc:e=>`border-bottom-color:${D(e)};`,blc:e=>`border-left-color:${D(e)};`,r:e=>`border-radius:${q(e)};`,rt:e=>`border-top-left-radius:${l(e)};border-top-right-radius:${l(e)};`,rr:e=>`border-top-right-radius:${l(e)};border-bottom-right-radius:${l(e)};`,rb:e=>`border-bottom-left-radius:${l(e)};border-bottom-right-radius:${l(e)};`,rl:e=>`border-top-left-radius:${l(e)};border-bottom-left-radius:${l(e)};`,rtl:e=>`border-top-left-radius:${l(e)};`,rtr:e=>`border-top-right-radius:${l(e)};`,rbr:e=>`border-bottom-right-radius:${l(e)};`,rbl:e=>`border-bottom-left-radius:${l(e)};`,ring:e=>{const[t,o=1]=e.split("/");return`box-shadow:0 0 0 ${l(o)} ${D(t)};`},"box-shadow":e=>`box-shadow:${N(e)}`,outline:e=>e==="-"?"outline:none;":e==="none"||e==="unset"||e==="inherit"||e==="initial"?`outline:${e};`:`outline:1px solid ${D(e)};`,guide:(e="#4f80ff")=>`&, & > * { outline:1px solid ${D(e)};}`,"bg-repeat-x":()=>"background-repeat:repeat-x;","bg-repeat-y":()=>"background-repeat:repeat-y;","bg-no-repeat":()=>"background-repeat:no-repeat;","bg-fixed":()=>"background-attachment:fixed;","bg-scroll":()=>"background-attachment:scroll;","bg-position":e=>`background-position:${e};`,contain:()=>"background-size:contain;background-position:center;object-fit:contain;",cover:()=>"background-size:cover;background-position:center;object-fit:cover;",block:()=>"display:block;","inline-block":()=>"display:inline-block;",inline:()=>"display:inline;","inline-flex":()=>"display:inline-flex;",table:()=>"display:table;","inline-table":()=>"display:inline-table;","table-caption":()=>"display:table-caption;","table-cell":()=>"display:table-cell;","table-column":()=>"display:table-column;","table-column-group":()=>"display:table-column-group;","table-footer-group":()=>"display:table-footer-group;","table-header-group":()=>"display:table-header-group;","table-row-group":()=>"display:table-row-group;","table-row":()=>"display:table-row;","flow-root":()=>"display:flow-root;",grid:()=>"display:grid;","inline-grid":()=>"display:inline-grid;",contents:()=>"display:contents;","list-item":()=>"display:list-item;",hbox:e=>`display:flex;flex-flow:row;${Ie(e)}`,vbox:e=>`display:flex;flex-flow:column;${Pe(e)}`,pack:()=>"display:flex;align-items:center;justify-content:center;","hbox(":()=>"","vbox(":()=>"",gap:e=>`gap:${q(e)};`,hgap:e=>`&>*+* {margin-left:${l(e)};}`,"hgap-reverse":e=>`&>*+* {margin-right:${l(e)};}`,vgap:e=>`&>*+* {margin-top:${l(e)};}`,"vgap-reverse":e=>`&>*+* {margin-bottom:${l(e)};}`,"space-between":()=>"justify-content:space-between;","space-around":()=>"justify-content:space-around;","space-evenly":()=>"justify-content:space-evenly;",flex:(e="1")=>`flex:${N(e)};`,space:e=>`[class*="hbox"]>& {width:${l(e)};} [class*="vbox"]>& {height:${l(e)};}`,"flex-grow":e=>`flex-grow:${a(e)};`,"flex-shrink":e=>`flex-shrink:${a(e)};`,"flex-basis":e=>`flex-basis:${l(e)};`,"flex-wrap":()=>"flex-wrap:wrap;","flex-wrap-reverse":()=>"flex-wrap:wrap-reverse;","flex-nowrap":()=>"flex-wrap:nowrap;",order:e=>`order:${a(e)};`,overflow:e=>`overflow:${e};`,"overflow-x":e=>`overflow-x:${e};`,"overflow-y":e=>`overflow-y:${e};`,clip:()=>"overflow:hidden;",scroll:()=>"overflow:auto;","scroll-x":()=>"overflow-x:auto;overflow-y:hidden;","scroll-y":()=>"overflow-x:hidden;overflow-y:auto;",scrollbar:()=>"&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}","no-scrollbar":()=>"&::-webkit-scrollbar {display:none;}","no-scrollbar-x":()=>"&::-webkit-scrollbar:horizontal {display:none;}",overscroll:e=>`overscroll-behavior:${e};`,"overscroll-x":e=>`overscroll-behavior-x:${e};`,"overscroll-y":e=>`overscroll-behavior-y:${e};`,"no-bouncing":()=>"","no-overscroll":()=>"","vertical-align":e=>`vertical-align:${e}`,"vertical-top":()=>"vertical-align:top",pre:()=>"white-space:pre-wrap;","pre-wrap":()=>"white-space:pre-wrap;","pre-line":()=>"white-space:pre-line;",nowrap:()=>"white-space:nowrap;flex-shrink:0;","nowrap...":()=>"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;","line-clamp":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"max-lines":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"text-indent":e=>`text-indent:${l(e)};`,none:()=>"display:none;",opacity:e=>`opacity:${a(e)};`,invisible:()=>"visibility:hidden;",visible:()=>"visibility:visible;",gone:()=>"position:absolute !important;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);",layer:(e="")=>{const t={top:0,right:0,bottom:0,left:0};return e.split("+").forEach(o=>{switch(o){case"top":return delete t.bottom;case"right":return delete t.left;case"bottom":return delete t.top;case"left":return delete t.right}}),"position:absolute;"+Object.keys(t).map(o=>`${o}:0`).join(";")},absolute:()=>"position:absolute;",relative:()=>"position:relative;",sticky:()=>"position:sticky;","sticky-top":(e="0")=>`position:sticky;top:${l(e)};`,"sticky-right":(e="0")=>`position:sticky;right:${l(e)};`,"sticky-bottom":(e="0")=>`position:sticky;bottom:${l(e)};`,"sticky-left":(e="0")=>`position:sticky;left:${l(e)};`,fixed:()=>"position:fixed;",static:()=>"position:static;",x:e=>`left:${l(e)};`,y:e=>`top:${l(e)};`,z:e=>`z-index:${a(e)};`,top:e=>`top:${l(e)};`,left:e=>`left:${l(e)};`,right:e=>`right:${l(e)};`,bottom:e=>`bottom:${l(e)};`,"user-select-none":()=>"user-select:none;","user-select-all":()=>"user-select:all;","user-select-auto":()=>"user-select:auto;","user-select-text":()=>"user-select:text;","pointer-events-none":()=>"pointer-events:none;","pointer-events-auto":()=>"pointer-events:auto;",pointer:()=>"cursor:pointer;",grab:()=>"&{cursor:grab;} &:active{cursor:grabbing;}",grabbing:()=>"cursor:grabbing;",cursor:e=>`cursor:${e};`,transition:e=>`transition:${Xe(e)};`,translate:e=>`transform:translate(${R(e)});`,translateX:e=>`transform:translateX(${a(e)});`,translateY:e=>`transform:translateY(${a(e)});`,translateZ:e=>`transform:translateZ(${a(e)});`,translate3d:e=>`transform:translate3d(${R(e)});`,rotate:e=>`transform:rotate(${R(e)});`,rotateX:e=>`transform:rotateX(${a(e)});`,rotateY:e=>`transform:rotateY(${a(e)});`,rotateZ:e=>`transform:rotateZ(${a(e)});`,rotate3d:e=>`transform:rotateZ(${R(e)});`,scale:e=>`transform:scale(${R(e)});`,scaleX:e=>`transform:scaleX(${R(e)});`,scaleY:e=>`transform:scaleY(${R(e)});`,scaleZ:e=>`transform:scaleZ(${R(e)});`,ratio:e=>`& {position:relative;} &:before{content:"";display:block;width:100%;padding-top:${Te(e)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,gpu:()=>"transform:translateZ(0.1px);","no-border":()=>"border:none;outline:none;","app-region":e=>`-webkit-app-region:${e};`,content:e=>`content:'${a(e)}'`,"clip-path":e=>`clip-path:${a(e)};-webkit-clip-path:${a(e)};`,"table-layout-fixed":()=>"table-layout:fixed;",float:e=>`float:${a(e)}`,clear:e=>`clear:${a(e)}`,blur:e=>`filter:blur(${l(e)})`,brightness:e=>`filter:brightness(${a(e)})`,contrast:e=>`filter:contrast(${a(e)})`,"drop-shadow":e=>`filter:drop-shadow(${a(e)})`,grayscale:e=>`filter:grayscale(${a(e)})`,"hue-rotate":e=>`filter:hue-rotate(${a(e)})`,invert:e=>`filter:invert(${a(e)})`,sepia:e=>`filter:sepia(${a(e)})`,saturate:e=>`filter:saturate(${a(e)})`,"backdrop-blur":e=>`backdrop-filter:blur(${l(e)})`,"backdrop-brightness":e=>`backdrop-filter:brightness(${a(e)})`,"backdrop-contrast":e=>`backdrop-filter:contrast(${a(e)})`,"backdrop-drop-shadow":e=>`backdrop-filter:drop-shadow(${a(e)})`,"backdrop-grayscale":e=>`backdrop-filter:grayscale(${a(e)})`,"backdrop-hue-rotate":e=>`backdrop-filter:hue-rotate(${a(e)})`,"backdrop-invert":e=>`backdrop-filter:invert(${a(e)})`,"backdrop-sepia":e=>`backdrop-filter:sepia(${a(e)})`,"backdrop-saturate":e=>`backdrop-filter:saturate(${a(e)})`,triangle:e=>{const[t,o,i=0]=e.split("/"),r=["top","right","bottom","left","top","right","bottom","left"],s=r.slice(r.indexOf(t)),n=.5;let c="width:0;height:0;border:0 solid transparent;";return c+="border-"+s[1]+"-width:"+Math.round(+o*(-i+1)/2)+"px;",c+="border-"+s[3]+"-width:"+Math.round(+o*(+i+1)/2)+"px;",c+="border-"+s[2]+":"+Math.round(+o*n)+"px solid black;",c},elevation:e=>{const t=+e;if(!t)return"box-shadow: none";const o=t==1?3:t*2,i=(t+10+t/9.38)/100,r=t<10?t%2==0?t-(t/2-1):t-(t-1)/2:t-4,s=(24-Math.round(t/10))/100;return`box-shadow: 0px ${l(t)} ${l(o)} rgba(0, 0, 0, ${i}), 0px ${l(r)} ${l(o)} rgba(0, 0, 0, ${s})`},"aspect-ratio":e=>`aspect-ratio:${a(e.replace(/:/g,"/"))}`},He={"hover:":{media:"(hover:hover)",selector:"&:hover, &.\\:hover"},"active:":{selector:"html &:active, html &.\\:active"},"focus:":{selector:"html &:focus, html &.\\:focus"},"focus-visible":{selector:"html &:focus-visible, html &.\\:focus-visible"},"focus-within:":{selector:"html &:focus-within, html &.\\:focus-within"},"checked:":{selector:"html &:checked, html &.\\:checked"},"read-only:":{selector:"html &:read-only, html &.\\:read-only"},"enabled:":{selector:"html &:enabled, html &.\\:enabled"},"disabled:":{selector:"html body &:disabled, html body &.\\:disabled, html body &[disabled]"},"group-hover:":{selector:".group:hover &, html .group.\\:hover &"},"group-active:":{selector:"html .group:active &, html .group.\\:active &"},"group-focus:":{selector:"html .group:focus &, html .group.\\:focus &"},"group-focus-within:":{selector:"html .group:focus-within &, html .group\\:focus-within"},"group-checked:":{selector:"html .group:checked &, html .group.\\:checked &"},"group-read-only:":{selector:"html .group:read-only &, html .group.\\:read-only &"},"group-enabled:":{selector:"html .group:enabled &, html .group.\\:enabled &"},"group-disabled:":{selector:"html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &"},"placeholder:":{selector:"&::placeholder"},"odd:":{selector:"&:nth-child(2n+1)"},"even:":{selector:"&:nth-child(2n)"}},Ye={"sm:":{media:"(min-width:480px)",selector:"html &"},"md:":{media:"(min-width:768px)",selector:"html &"},"lg:":{media:"(min-width:1024px)",selector:"html &"},"xl:":{media:"(min-width:1280px)",selector:"html &"},"sm~:":{media:"(min-width:480px)",selector:"html &"},"md~:":{media:"(min-width:768px)",selector:"html &"},"lg~:":{media:"(min-width:1024px)",selector:"html &"},"xl~:":{media:"(min-width:1280px)",selector:"html &"},"~sm:":{media:"(max-width:479.98px)",selector:"html &"},"~md:":{media:"(max-width:767.98px)",selector:"html &"},"~lg:":{media:"(max-width:1023.98px)",selector:"html &"},"~xl:":{media:"(max-width:1279.98px)",selector:"html &"},"mobile:":{media:"(max-device-width:767.98px)",selector:"html &"},"tablet:":{media:"(min-device-width:768px) and (max-width:1023.98px)",selector:"html &"},"desktop:":{media:"(min-device-width:1024px)",selector:"html &"},"!mobile:":{media:"(min-device-width:768px)",selector:"html &"},"!desktop:":{media:"(max-device-width:1023.98px)",selector:"html &"},"touch:":{media:"(max-device-width:1023.98px)",selector:"html &"},"!touch:":{media:"(min-device-width:1024px)",selector:"html &"},"portrait:":{media:"(orientation:portrait)",selector:"html &"},"landscape:":{media:"(orientation:landscape)",selector:"html &"},"print:":{media:"print",selector:"html &"},"screen:":{media:"screen",selector:"html &"},"speech:":{media:"speech",selector:"html &"},"dark:":{selector:"html.dark &"}},se={".":e=>`&${e}, ${e} &`,">>":e=>`& ${e.slice(2,0)}`,">":e=>`&${e}`,"+":e=>`&${e}`,"[":e=>`&${e}`},Me=(e,t)=>e.localeCompare(t),Ue=Object.keys(se).sort((e,t)=>Me(e,t)||t.length-e.length),Ve={...He,...Ye},Ge=e=>{const t=Ue.find(i=>e.startsWith(i))||"",o=se[t]&&se[t](e.slice(0,-1));if(o)return{selector:o}},Ne=/([^:(]+)/.source,qe=/(?:\((.*?)\))?/.source,Ze=/(:|$)/.source,Ke=/(\((.*?)\))[!]*/g,me=new RegExp(`${Ne}${qe}${Ze}`,"g"),Qe=e=>({selector:`&:${e.replace(/>>/g," ")}`}),Je=(e,t)=>{const o=r=>e[r]??(s=>ge[r]&&s?`${r}:${N(s)}`:""),i=Object.fromEntries(Object.entries(e).map(([r,s],n)=>[r,n]));return r=>{try{const s=r.replace(Ke,"").split(":").pop();if(!e[s]&&!ge[s])return;const n=r.endsWith("!"),c=n?"!important;":";";r=n?r.slice(0,-1):r;let h=[`.${Fe(r+(n?"!":""))}`],C=[],z=[],m="",g=0;for(me.lastIndex=0;;){const E=me.exec(r);if(!E)break;const[p,w,B,U]=E;if(U===":"){const x=Ge(p)??t[w+":"]??Qe(p.slice(0,-1));h=h.map(S=>(x?.selector?.split(",")??[]).map(j=>j.replace(/&/g,S).trim())).flat(),x.media&&(C=[...C,x.media]),x.postCSS&&(z=[...z,x.postCSS])}else{if(m=o(w)(B).replace(/;/g,c).trim(),!m||m.includes("undefined"))return;g=i[w+(p.includes("(")?"(":"")]||i[w]||0}}const F=C.length?"@media "+C.join(" and "):"",O=h.join(","),A=m.includes("&")?m.replace(/&/g,O):O+"{"+m+"}";return[F?F+"{"+A+"}":A,g]}catch{}}},et=(e,t)=>e[1]-t[1],tt=(e={},t={})=>(e={...We,...e},t={...Ve,...t},o=>o.map(Je(e,t)).filter(Boolean).sort(et).map(i=>i[0]).filter(Boolean)),ot=tt(),rt=/(?:"(?:[^"]|\\"])*")/gm,it=/(?:'(?:[^']|\\'])*')/gm,st=/(?:`(?:[^`]|\\`])*`)/gm,le=e=>e.trim(),ae=(e,t,o)=>String(e).replace(t,(...i)=>(o(...i),i[0])),lt=e=>{const t=Object.create(null);return ae(e,rt,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(i=>t[i]=i)),ae(e,it,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(i=>t[i]=i)),ae(e,st,o=>o.slice(1,-1).split(/\s+/).map(le).filter(Boolean).forEach(i=>t[i]=i)),Object.values(t)},at="modulepreload",ve={},nt="/adorable-css/",ut=function(t,o){return!o||o.length===0?t():Promise.all(o.map(i=>{if(i=`${nt}${i}`,i in ve)return;ve[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":at,r||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),r)return new Promise((c,h)=>{n.addEventListener("load",c),n.addEventListener("error",h)})})).then(()=>t())};function ct(e){let t;return{c(){t=f("div"),b(t,"class","h(100%)")},m(o,i){W(o,t,i),e[3](t)},p:H,i:H,o:H,d(o){o&&Y(t),e[3](null)}}}function dt(e,t,o){let{value:i=""}=t,r=null,s,n;const c=C=>s.setValue(C);ye(async()=>(self.MonacoEnvironment={getWorker(C,z){return new De}},n=await ut(()=>import("./editor.main.js").then(function(C){return C.b}),["editor.main.js","editor.main.css"]),s=n.editor.create(r,{value:i,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"vs-dark",tabSize:2,minimap:{enabled:!1}}),s.onDidChangeModelContent(C=>{o(1,i=s.getValue())}),()=>{s.dispose()}));function h(C){V[C?"unshift":"push"](()=>{r=C,o(0,r)})}return e.$$set=C=>{"value"in C&&o(1,i=C.value)},[r,i,c,h]}class pt extends J{constructor(t){super();ee(this,t,dt,ct,te,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const Be=`
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

`.trim(),ht=`
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

`.trim(),bt=`
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

`.trim(),gt=`
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

`.trim(),mt=`
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

`.trim(),vt=`
<!--
Prefix
https://www.youtube.com/watch?v=12YGCglbdrY&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=5 

"hover:": {media: \`(hover:hover)\`, selector: \`&:hover, &.\\\\:hover\`},
"active:": {selector: \`html &:active, html &.\\\\:active\`},
"focus:": {selector: \`html &:focus, html &.\\\\:focus\`},
"focus-within:": {selector: \`html &:focus-within, html &.\\\\:focus-within\`},
"checked:": {selector: \`html &:checked, html &.\\\\:checked\`},
"read-only:": {selector: \`html &:read-only, html &.\\\\:read-only\`},
"enabled:": {selector: \`html &:enabled, html &.\\\\:enabled\`},
"disabled:": {selector: \`html body &:disabled, html body &.\\\\:disabled, html body &[disabled]\`},

"group-hover:": {selector: \`.group:hover &, html .group.\\\\:hover &\`},
"group-active:": {selector: \`html .group:active &, html .group.\\\\:active &\`},
"group-focus:": {selector: \`html .group:focus &, html .group.\\\\:focus &\`},
"group-focus-within:": {selector: \`html .group:focus-within &, html .group\\\\:focus-within\`},
"group-checked:": {selector: \`html .group:checked &, html .group.\\\\:checked &\`},
"group-read-only:": {selector: \`html .group:read-only &, html .group.\\\\:read-only &\`},
"group-enabled:": {selector: \`html .group:enabled &, html .group.\\\\:enabled &\`},
"group-disabled:": {selector: \`html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &\`},

"placeholder:": {selector: \`&::placeholder\`},
-->

<div class="vbox gap(20) bg(#fff) p(10)">
  <div>
    <h2>:hover</h2>
    <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(orange) hover:c(#fff) hover:font(18) transition(.5s)">Hover Me</div>
  </div>

  <div>
    <h2>:hover vs group-hover</h2>
    <div class="w(400) h(200) b(#000) font(12) pack gap(10)">
      <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(orange) hover:c(#fff) hover:font(18) transition(.5s) pointer">hover1</div>
      <div class="w(100) h(100) b(#000) font(12) pack pointer hover:bg(red) hover:c(#fff) hover:font(18) transition(.5s) pointer">hover2</div>
    </div>
  </div>
    
  <div>
    <div class="group w(400) h(200) b(#000) font(12) pack gap(10) pointer">
      <div class="w(100) h(100) b(#000) font(12) pack pointer group-hover:bg(orange) group-hover:c(#fff) group-hover:font(18) transition(.5s)">group-hover1</div>
      <div class="w(100) h(100) b(#000) font(12) pack pointer group-hover:bg(red) group-hover:c(#fff) group-hover:font(18) transition(.5s)">group-hover2</div>
    </div>
  </div>
</div>

`.trim(),Bt=`
<!--
Prefix
https://www.youtube.com/watch?v=12YGCglbdrY&list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&index=5 

:nth-child(3n+1)
-->

<div class="vbox">
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
  <div class="nth-child(3n+1):bg(orange)">nth-child(3n+1)</div>
</div>

`.trim();function wt(e){let t,o=(e[0]!=="prod"?`[${e[0]}]`:"")+"",i,r,s;return{c(){t=f("div"),i=G(o),r=$(),s=G(e[1]),b(t,"class","version fixed z(9999) layer(bottom+right) p(10/20) font(10) c(#999)")},m(n,c){W(n,t,c),d(t,i),d(t,r),d(t,s)},p(n,[c]){c&1&&o!==(o=(n[0]!=="prod"?`[${n[0]}]`:"")+"")&&oe(i,o),c&2&&oe(s,n[1])},i:H,o:H,d(n){n&&Y(t)}}}function xt(e,t,o){let{phase:i="prod"}=t,{version:r}=t;return e.$$set=s=>{"phase"in s&&o(0,i=s.phase),"version"in s&&o(1,r=s.version)},[i,r]}class kt extends J{constructor(t){super();ee(this,t,xt,wt,te,{phase:0,version:1})}}function we(e,t,o){const i=e.slice();return i[16]=t[o][0],i[17]=t[o][1],i[19]=o,i}function xe(e){let t,o=e[16]+"",i,r,s;function n(){return e[10](e[16],e[17],e[19])}return{c(){t=f("div"),i=G(o),b(t,"class","block .selected:c(#fff) c(#888) pointer"),_(t,"selected",e[3]===e[19])},m(c,h){W(c,t,h),d(t,i),r||(s=re(t,"click",n),r=!0)},p(c,h){e=c,h&8&&_(t,"selected",e[3]===e[19])},d(c){c&&Y(t),r=!1,s()}}}function yt(e){let t,o,i,r,s,n,c,h,C,z,m,g,F,O,A,E,p,w,B,U,x,S,j,ne,L,Z,K,T,X,Q,ue,I=e[6],v=[];for(let u=0;u<I.length;u+=1)v[u]=xe(we(e,I,u));function ke(u){e[11](u)}let ce={};return e[1]!==void 0&&(ce.value=e[1]),g=new pt({props:ce}),V.push(()=>Ae(g,"value",ke)),e[12](g),T=new kt({props:{version:"0.0.8"}}),{c(){t=f("div"),o=f("div"),o.innerHTML=`<div class="hbox gap(4)"><div class="w(32) h(32) font(24) mt(-2) pack">\u{1F433}</div> 
      <div class="font(20)"><span class="100">Adorable</span><span class="500">CSS</span></div></div> 
    <div class="space(30)"></div> 

    <div class="hbox gap(20)"><a class="pack" href="https://github.com/developer-1px/adorable-css" target="_blank"><svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a> 

      <a class="pack" href="https://www.youtube.com/watch?v=O-eonCeumw8&amp;list=PLiyB-5pV363Q2_itR2K2FIr6qe3kNW1TL&amp;index=2" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48" style="fill:#000;"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg></a> 

      <a target="_blank" href="https://velog.io/@teo/series/AdorableCSS">Blog</a> 
      <a target="_blank" href="https://github.com/developer-1px/adorable-css/blob/master/src%5Badorable-css%5D/docs/Reference.md">Reference</a></div>`,i=$(),r=f("div"),s=f("div"),n=f("div"),n.textContent="Turotial",c=$(),h=f("div"),C=$();for(let u=0;u<v.length;u+=1)v[u].c();z=$(),m=f("div"),pe(g.$$.fragment),O=$(),A=f("div"),E=f("div"),p=f("button"),p.textContent="Result",w=$(),B=f("button"),B.textContent="CSS output",U=$(),x=f("div"),S=f("div"),j=f("iframe"),ne=$(),L=f("div"),Z=G(e[2]),K=$(),pe(T.$$.fragment),b(o,"class","hbox gap(10) h(64) bb(#fff.05) p(10/20) bg(#000) c(#fff) elevation(2) relative z(1)"),b(n,"class","bold font(24)"),b(h,"class","space(20)"),b(s,"class","flex vbox p(10/20) br(#fff.05)"),b(m,"class","flex(4) vbox br(#ccc)"),b(p,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)"),_(p,"selected",e[4]==="Result"),b(B,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(orange) .selected:c(#000)"),_(B,"selected",e[4]==="CSS_output"),b(E,"class","hbox bg(#fff) bb(#ccc) font(12) c(#999)"),b(j,"class","layer w(100%) h(100%) bg(transparent)"),b(j,"frameborder","0"),b(S,"class","layer pack br(#ccc) check-board none"),_(S,"none",e[4]!=="Result"),b(L,"class","layer pre monospace font(12) p(10) none"),_(L,"none",e[4]!=="CSS_output"),b(x,"class","flex relative"),b(A,"class","flex(3) relative vbox bg(#fff) c(#000)"),b(r,"class","flex hbox(fill) clip"),b(t,"class","layer vbox overscroll(none)")},m(u,k){W(u,t,k),d(t,o),d(t,i),d(t,r),d(r,s),d(s,n),d(s,c),d(s,h),d(s,C);for(let P=0;P<v.length;P+=1)v[P].m(s,null);d(r,z),d(r,m),Ce(g,m,null),d(r,O),d(r,A),d(A,E),d(E,p),d(E,w),d(E,B),d(A,U),d(A,x),d(x,S),d(S,j),e[13](j),d(x,ne),d(x,L),d(L,Z),W(u,K,k),Ce(T,u,k),X=!0,Q||(ue=[re(p,"click",e[7]),re(B,"click",e[8])],Q=!0)},p(u,[k]){if(k&584){I=u[6];let y;for(y=0;y<I.length;y+=1){const de=we(u,I,y);v[y]?v[y].p(de,k):(v[y]=xe(de),v[y].c(),v[y].m(s,null))}for(;y<v.length;y+=1)v[y].d(1);v.length=I.length}const P={};!F&&k&2&&(F=!0,P.value=u[1],Ee(()=>F=!1)),g.$set(P),k&16&&_(p,"selected",u[4]==="Result"),k&16&&_(B,"selected",u[4]==="CSS_output"),k&16&&_(S,"none",u[4]!=="Result"),(!X||k&4)&&oe(Z,u[2]),k&16&&_(L,"none",u[4]!=="CSS_output")},i(u){X||(he(g.$$.fragment,u),he(T.$$.fragment,u),X=!0)},o(u){be(g.$$.fragment,u),be(T.$$.fragment,u),X=!1},d(u){u&&Y(t),$e(v,u),e[12](null),fe(g),e[13](null),u&&Y(K),fe(T,u),Q=!1,_e(ue)}}}function Dt(e,t,o){let i,r,s=Be;const n=[["0. Hello AdorableCSS!",Be],["1. Colors",Ct],["2. Typography",ht],["3. Box Model",bt],["4. Overflow",ft],["5. Layout - Flexbox",gt],["6. Layout - Position",mt],["7. Pseudo - :hover, :group-hover",vt],["8. Pseudo2 - :nth-child",Bt],["\uACC4\uC18D \uC791\uC5C5 \uC911\uC785\uB2C8\uB2E4...",""]];let c=0,h="Result";const C=()=>o(4,h="Result"),z=()=>o(4,h="CSS_output"),m=(p,w,B)=>{o(1,s=w),o(3,c=B),g.setValue(w)};let g;const F=(p,w,B)=>m(p,w,B);function O(p){s=p,o(1,s)}function A(p){V[p?"unshift":"push"](()=>{g=p,o(5,g)})}function E(p){V[p?"unshift":"push"](()=>{r=p,o(0,r),o(2,i),o(1,s)})}return e.$$.update=()=>{e.$$.dirty&2&&o(2,i=ot(lt(s)).join(`
`)),e.$$.dirty&7&&r&&o(0,r.contentWindow.document.body.innerHTML=`<style>${i}</style>
`+s,r)},[r,s,i,c,h,g,n,C,z,m,F,O,A,E]}class At extends J{constructor(t){super();ee(this,t,Dt,yt,te,{})}}new At({target:document.body});
