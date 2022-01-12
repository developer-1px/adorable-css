var ze=Object.defineProperty;var me=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var we=(e,t,o)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,P=(e,t)=>{for(var o in t||(t={}))Se.call(t,o)&&we(e,o,t[o]);if(me)for(var o of me(t))Re.call(t,o)&&we(e,o,t[o]);return e};import{S as Be,i as xe,s as ke,e as k,c as y,a as D,d as C,b as m,f as ae,G as le,u as je,R as Q,t as J,g as ee,T,F as b,U as ne,V as Te,j as H,v as Oe,l as M,w as Ie,x as Le,W as Ue,h as Ve,p as Pe,n as Xe,X as He,A as Me,P as Ye}from"../chunks/vendor-e0ae2598.js";const We=e=>{const t=e.length,o=e.charCodeAt(0);let r=-1,i,a="";for(;++r<t;){if(i=e.charCodeAt(r),i==0){a+="\uFFFD";continue}if(i>=1&&i<=31||i==127||r==0&&i>=48&&i<=57||r==1&&i>=48&&i<=57&&o==45){a+="\\"+i.toString(16)+" ";continue}if(r==0&&t==1&&i==45){a+="\\"+e.charAt(r);continue}if(i>=128||i==45||i==95||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122){a+=e.charAt(r);continue}a+="\\"+e.charAt(r)}return a},ue=e=>e.toFixed(2).replace(/^0+|\.00$|0+$/g,"")||"0",l=e=>String(e).startsWith("--")?`var(${e})`:e,s=e=>{if(e===0||e==="0")return 0;if(String(e).startsWith("--"))return l(""+e);const[t,o]=String(e).split("/");return+t>0&&+o>0?ue(+t/+o*100)+"%":/.[-+*\/]/.test(String(e))?"calc("+String(e).replace(/[-+]/g,r=>` ${r} `)+")":+e==+e?e+"px":e},ye=e=>e.endsWith("%")?+e.slice(0,-1)/100+"em":s(e),Ne=e=>{const[t,o]=e.split(".");return o&&t.length===4?"rgba("+t.slice(1).split("").map(r=>parseInt(r+r,16)).join(",")+",."+o+")":o?"rgba("+[t.slice(1,3),t.slice(3,5),t.slice(5,7)].map(r=>parseInt(r,16)).join(",")+",."+o+")":e},Ge=e=>{const[t,o,r,i]=e.split(",");return"hsl"+(i?"a":"")+"("+[t,o,r,i].filter(Boolean).map(l).join()+")"},qe=e=>{const[t,o,r,i]=e.split(",");return"rgb"+(i?"a":"")+"("+[t,o,r,i].filter(Boolean).map(l).join()+")"},z=(e="transparent")=>e==="-"||e==="transparent"?"transparent":e.startsWith("--")?`var(${e})`:e.charAt(0)==="#"?Ne(e):e.includes(",")&&e.includes("%")?Ge(e):e.includes(",")?qe(e):e,Ze=e=>(e||"").split("/").map((t,o)=>{if(t!=="-"){if(String(t).startsWith("--"))return`var(${t})`;switch(o){case 0:return`font-size:${s(t)}`;case 1:return`line-height:${+t<4?ue(+t):s(t)}`;case 2:return`letter-spacing:${s(ye(t))}`}}}).filter(Boolean).join(";"),N=e=>{if(!e||e==="none"||e==="0"||e==="-")return"none";const t=["none","hidden","dotted","dashed","solid","double","groove","ridge","inset","outset"];let o=!1,r=!1;const i=e.split("/").map(a=>parseInt(a)>0?(o=!0,a.includes(",")?z(a):s(a)):t.includes(a)?(r=!0,a):z(a));return o||i.unshift("1px"),r||i.unshift("solid"),i.join(" ")},te=(e,t=l)=>String(e).startsWith("--")?`var(${e})`:e&&e.split("/").map(t).join(" "),U=(e,t=o=>o)=>String(e).startsWith("--")?`var(${e})`:e&&e.split(",").map(t).join(","),oe=e=>te(e,s),Ke=e=>{const[t,o]=e.split(":");return(+o/+t*100).toFixed(2)+"%"},Qe=(e="")=>{const t=e.split("+"),o=t.map(r=>{switch(r){case"top":return"align-items:flex-start;";case"bottom":return"align-items:flex-end;";case"fill":return"align-items:stretch;";case"stretch":return"align-items:stretch;";case"center":return"justify-content:center;";case"left":return t.includes("reverse")?"justify-content:flex-end;":"";case"right":return t.includes("reverse")?"":"justify-content:flex-end;";case"reverse":return"flex-direction:row-reverse;"}});return!t.includes("top")&&!t.includes("bottom")&&!t.includes("full")&&o.unshift("align-items:center;"),o.join("")},Je=(e="")=>{const t=e.split("+"),o=t.map(r=>{switch(r){case"left":return"align-items:flex-start;";case"center":return"align-items:center;";case"right":return"align-items:flex-end;";case"top":return t.includes("reverse")?"justify-content:flex-end;":"";case"middle":return"justify-content:center;";case"bottom":return t.includes("reverse")?"":"justify-content:flex-end;";case"reverse":return"flex-direction:column-reverse;"}});return!t.includes("left")&&!t.includes("center")&&!t.includes("right")&&o.unshift("align-items:stretch;"),o.join("")},et=e=>e.includes("=")?e.split("/").map(t=>t.replace("="," ")).join(","):`all ${e}`,tt={"--*":1,"-ms-accelerator":1,"-ms-block-progression":1,"-ms-content-zoom-chaining":1,"-ms-content-zooming":1,"-ms-content-zoom-limit":1,"-ms-content-zoom-limit-max":1,"-ms-content-zoom-limit-min":1,"-ms-content-zoom-snap":1,"-ms-content-zoom-snap-points":1,"-ms-content-zoom-snap-type":1,"-ms-filter":1,"-ms-flow-from":1,"-ms-flow-into":1,"-ms-grid-columns":1,"-ms-grid-rows":1,"-ms-high-contrast-adjust":1,"-ms-hyphenate-limit-chars":1,"-ms-hyphenate-limit-lines":1,"-ms-hyphenate-limit-zone":1,"-ms-ime-align":1,"-ms-overflow-style":1,"-ms-scrollbar-3dlight-color":1,"-ms-scrollbar-arrow-color":1,"-ms-scrollbar-base-color":1,"-ms-scrollbar-darkshadow-color":1,"-ms-scrollbar-face-color":1,"-ms-scrollbar-highlight-color":1,"-ms-scrollbar-shadow-color":1,"-ms-scrollbar-track-color":1,"-ms-scroll-chaining":1,"-ms-scroll-limit":1,"-ms-scroll-limit-x-max":1,"-ms-scroll-limit-x-min":1,"-ms-scroll-limit-y-max":1,"-ms-scroll-limit-y-min":1,"-ms-scroll-rails":1,"-ms-scroll-snap-points-x":1,"-ms-scroll-snap-points-y":1,"-ms-scroll-snap-type":1,"-ms-scroll-snap-x":1,"-ms-scroll-snap-y":1,"-ms-scroll-translation":1,"-ms-text-autospace":1,"-ms-touch-select":1,"-ms-user-select":1,"-ms-wrap-flow":1,"-ms-wrap-margin":1,"-ms-wrap-through":1,"-moz-appearance":1,"-moz-binding":1,"-moz-border-bottom-colors":1,"-moz-border-left-colors":1,"-moz-border-right-colors":1,"-moz-border-top-colors":1,"-moz-context-properties":1,"-moz-float-edge":1,"-moz-force-broken-image-icon":1,"-moz-image-region":1,"-moz-orient":1,"-moz-outline-radius":1,"-moz-outline-radius-bottomleft":1,"-moz-outline-radius-bottomright":1,"-moz-outline-radius-topleft":1,"-moz-outline-radius-topright":1,"-moz-stack-sizing":1,"-moz-text-blink":1,"-moz-user-focus":1,"-moz-user-input":1,"-moz-user-modify":1,"-moz-window-dragging":1,"-moz-window-shadow":1,"-webkit-appearance":1,"-webkit-border-before":1,"-webkit-border-before-color":1,"-webkit-border-before-style":1,"-webkit-border-before-width":1,"-webkit-box-reflect":1,"-webkit-line-clamp":1,"-webkit-mask":1,"-webkit-mask-attachment":1,"-webkit-mask-clip":1,"-webkit-mask-composite":1,"-webkit-mask-image":1,"-webkit-mask-origin":1,"-webkit-mask-position":1,"-webkit-mask-position-x":1,"-webkit-mask-position-y":1,"-webkit-mask-repeat":1,"-webkit-mask-repeat-x":1,"-webkit-mask-repeat-y":1,"-webkit-mask-size":1,"-webkit-overflow-scrolling":1,"-webkit-tap-highlight-color":1,"-webkit-text-fill-color":1,"-webkit-text-stroke":1,"-webkit-text-stroke-color":1,"-webkit-text-stroke-width":1,"-webkit-touch-callout":1,"-webkit-user-modify":1,"accent-color":1,"align-content":1,"align-items":1,"align-self":1,"align-tracks":1,all:1,animation:1,"animation-delay":1,"animation-direction":1,"animation-duration":1,"animation-fill-mode":1,"animation-iteration-count":1,"animation-name":1,"animation-play-state":1,"animation-timing-function":1,appearance:1,"aspect-ratio":1,azimuth:1,"backdrop-filter":1,"backface-visibility":1,background:1,"background-attachment":1,"background-blend-mode":1,"background-clip":1,"background-color":1,"background-image":1,"background-origin":1,"background-position":1,"background-position-x":1,"background-position-y":1,"background-repeat":1,"background-size":1,"block-overflow":1,"block-size":1,border:1,"border-block":1,"border-block-color":1,"border-block-style":1,"border-block-width":1,"border-block-end":1,"border-block-end-color":1,"border-block-end-style":1,"border-block-end-width":1,"border-block-start":1,"border-block-start-color":1,"border-block-start-style":1,"border-block-start-width":1,"border-bottom":1,"border-bottom-color":1,"border-bottom-left-radius":1,"border-bottom-right-radius":1,"border-bottom-style":1,"border-bottom-width":1,"border-collapse":1,"border-color":1,"border-end-end-radius":1,"border-end-start-radius":1,"border-image":1,"border-image-outset":1,"border-image-repeat":1,"border-image-slice":1,"border-image-source":1,"border-image-width":1,"border-inline":1,"border-inline-end":1,"border-inline-color":1,"border-inline-style":1,"border-inline-width":1,"border-inline-end-color":1,"border-inline-end-style":1,"border-inline-end-width":1,"border-inline-start":1,"border-inline-start-color":1,"border-inline-start-style":1,"border-inline-start-width":1,"border-left":1,"border-left-color":1,"border-left-style":1,"border-left-width":1,"border-radius":1,"border-right":1,"border-right-color":1,"border-right-style":1,"border-right-width":1,"border-spacing":1,"border-start-end-radius":1,"border-start-start-radius":1,"border-style":1,"border-top":1,"border-top-color":1,"border-top-left-radius":1,"border-top-right-radius":1,"border-top-style":1,"border-top-width":1,"border-width":1,bottom:1,"box-align":1,"box-decoration-break":1,"box-direction":1,"box-flex":1,"box-flex-group":1,"box-lines":1,"box-ordinal-group":1,"box-orient":1,"box-pack":1,"box-shadow":1,"box-sizing":1,"break-after":1,"break-before":1,"break-inside":1,"caption-side":1,"caret-color":1,clear:1,clip:1,"clip-path":1,color:1,"color-adjust":1,"color-scheme":1,"column-count":1,"column-fill":1,"column-gap":1,"column-rule":1,"column-rule-color":1,"column-rule-style":1,"column-rule-width":1,"column-span":1,"column-width":1,columns:1,contain:1,content:1,"content-visibility":1,"counter-increment":1,"counter-reset":1,"counter-set":1,cursor:1,direction:1,display:1,"empty-cells":1,filter:1,flex:1,"flex-basis":1,"flex-direction":1,"flex-flow":1,"flex-grow":1,"flex-shrink":1,"flex-wrap":1,float:1,font:1,"font-family":1,"font-feature-settings":1,"font-kerning":1,"font-language-override":1,"font-optical-sizing":1,"font-variation-settings":1,"font-size":1,"font-size-adjust":1,"font-smooth":1,"font-stretch":1,"font-style":1,"font-synthesis":1,"font-variant":1,"font-variant-alternates":1,"font-variant-caps":1,"font-variant-east-asian":1,"font-variant-ligatures":1,"font-variant-numeric":1,"font-variant-position":1,"font-weight":1,"forced-color-adjust":1,gap:1,grid:1,"grid-area":1,"grid-auto-columns":1,"grid-auto-flow":1,"grid-auto-rows":1,"grid-column":1,"grid-column-end":1,"grid-column-gap":1,"grid-column-start":1,"grid-gap":1,"grid-row":1,"grid-row-end":1,"grid-row-gap":1,"grid-row-start":1,"grid-template":1,"grid-template-areas":1,"grid-template-columns":1,"grid-template-rows":1,"hanging-punctuation":1,height:1,hyphens:1,"image-orientation":1,"image-rendering":1,"image-resolution":1,"ime-mode":1,"initial-letter":1,"initial-letter-align":1,"inline-size":1,"input-security":1,inset:1,"inset-block":1,"inset-block-end":1,"inset-block-start":1,"inset-inline":1,"inset-inline-end":1,"inset-inline-start":1,isolation:1,"justify-content":1,"justify-items":1,"justify-self":1,"justify-tracks":1,left:1,"letter-spacing":1,"line-break":1,"line-clamp":1,"line-height":1,"line-height-step":1,"list-style":1,"list-style-image":1,"list-style-position":1,"list-style-type":1,margin:1,"margin-block":1,"margin-block-end":1,"margin-block-start":1,"margin-bottom":1,"margin-inline":1,"margin-inline-end":1,"margin-inline-start":1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-trim":1,mask:1,"mask-border":1,"mask-border-mode":1,"mask-border-outset":1,"mask-border-repeat":1,"mask-border-slice":1,"mask-border-source":1,"mask-border-width":1,"mask-clip":1,"mask-composite":1,"mask-image":1,"mask-mode":1,"mask-origin":1,"mask-position":1,"mask-repeat":1,"mask-size":1,"mask-type":1,"masonry-auto-flow":1,"math-style":1,"max-block-size":1,"max-height":1,"max-inline-size":1,"max-lines":1,"max-width":1,"min-block-size":1,"min-height":1,"min-inline-size":1,"min-width":1,"mix-blend-mode":1,"object-fit":1,"object-position":1,offset:1,"offset-anchor":1,"offset-distance":1,"offset-path":1,"offset-position":1,"offset-rotate":1,opacity:1,order:1,orphans:1,outline:1,"outline-color":1,"outline-offset":1,"outline-style":1,"outline-width":1,overflow:1,"overflow-anchor":1,"overflow-block":1,"overflow-clip-box":1,"overflow-clip-margin":1,"overflow-inline":1,"overflow-wrap":1,"overflow-x":1,"overflow-y":1,"overscroll-behavior":1,"overscroll-behavior-block":1,"overscroll-behavior-inline":1,"overscroll-behavior-x":1,"overscroll-behavior-y":1,padding:1,"padding-block":1,"padding-block-end":1,"padding-block-start":1,"padding-bottom":1,"padding-inline":1,"padding-inline-end":1,"padding-inline-start":1,"padding-left":1,"padding-right":1,"padding-top":1,"page-break-after":1,"page-break-before":1,"page-break-inside":1,"paint-order":1,perspective:1,"perspective-origin":1,"place-content":1,"place-items":1,"place-self":1,"pointer-events":1,position:1,quotes:1,resize:1,right:1,rotate:1,"row-gap":1,"ruby-align":1,"ruby-merge":1,"ruby-position":1,scale:1,"scrollbar-color":1,"scrollbar-gutter":1,"scrollbar-width":1,"scroll-behavior":1,"scroll-margin":1,"scroll-margin-block":1,"scroll-margin-block-start":1,"scroll-margin-block-end":1,"scroll-margin-bottom":1,"scroll-margin-inline":1,"scroll-margin-inline-start":1,"scroll-margin-inline-end":1,"scroll-margin-left":1,"scroll-margin-right":1,"scroll-margin-top":1,"scroll-padding":1,"scroll-padding-block":1,"scroll-padding-block-start":1,"scroll-padding-block-end":1,"scroll-padding-bottom":1,"scroll-padding-inline":1,"scroll-padding-inline-start":1,"scroll-padding-inline-end":1,"scroll-padding-left":1,"scroll-padding-right":1,"scroll-padding-top":1,"scroll-snap-align":1,"scroll-snap-coordinate":1,"scroll-snap-destination":1,"scroll-snap-points-x":1,"scroll-snap-points-y":1,"scroll-snap-stop":1,"scroll-snap-type":1,"scroll-snap-type-x":1,"scroll-snap-type-y":1,"shape-image-threshold":1,"shape-margin":1,"shape-outside":1,"tab-size":1,"table-layout":1,"text-align":1,"text-align-last":1,"text-combine-upright":1,"text-decoration":1,"text-decoration-color":1,"text-decoration-line":1,"text-decoration-skip":1,"text-decoration-skip-ink":1,"text-decoration-style":1,"text-decoration-thickness":1,"text-emphasis":1,"text-emphasis-color":1,"text-emphasis-position":1,"text-emphasis-style":1,"text-indent":1,"text-justify":1,"text-orientation":1,"text-overflow":1,"text-rendering":1,"text-shadow":1,"text-size-adjust":1,"text-transform":1,"text-underline-offset":1,"text-underline-position":1,top:1,"touch-action":1,transform:1,"transform-box":1,"transform-origin":1,"transform-style":1,transition:1,"transition-delay":1,"transition-duration":1,"transition-property":1,"transition-timing-function":1,translate:1,"unicode-bidi":1,"user-select":1,"vertical-align":1,visibility:1,"white-space":1,widows:1,width:1,"will-change":1,"word-break":1,"word-spacing":1,"word-wrap":1,"writing-mode":1,"z-index":1,zoom:1},ot=`*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;tab-size:4}
html,body{height:100%;}
img,picture,video,canvas,svg{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
`,rt={c:e=>`color:${z(e)};`,bg:e=>e.startsWith("linear-gradient")?`background:${e.replace(/\//g," ")};`:`background-color:${z(e)};`,font:e=>Ze(e),"font-size":e=>`font-size:${s(e)};`,"line-height":e=>`line-height:${+e<4?ue(+e):s(e)}`,"letter-spacing":e=>`letter-spacing:${ye(e)};`,"word-spacing":e=>`word-spacing:${s(e)};`,"sans-serif":()=>"font-family:sans-serif;",serif:()=>"font-family:serif;",monospace:e=>e==="number"?"font-variant-numeric:tabular-nums;":"font-family:menlo,monospace;",cursive:()=>"font-family:cursive;",fantasy:()=>"font-family:fantasy;","system-ui":()=>"font-family:system-ui;",AppleSD:()=>'font-family:"Apple SD Gothic Neo";',Roboto:()=>"font-family:Roboto;",Arial:()=>"font-family:Arial;","100":()=>"font-weight:100;","200":()=>"font-weight:200;","300":()=>"font-weight:300;","400":()=>"font-weight:400;","500":()=>"font-weight:500;","600":()=>"font-weight:600;","700":()=>"font-weight:700;","800":()=>"font-weight:800;","900":()=>"font-weight:900;",thin:()=>"font-weight:200;",light:()=>"font-weight:300;",regular:()=>"font-weight:normal;",medium:()=>"font-weight:500;",semibold:()=>"font-weight:600;",bold:()=>"font-weight:bold;",heavy:()=>"font-weight:900;",thicker:(e="1")=>`text-shadow:0 0 ${s(e)} currentColor;`,italic:()=>"font-style:italic;",overline:()=>"text-decoration:overline;",underline:()=>"text-decoration:underline;","line-through":()=>"text-decoration:line-through;",strike:()=>"text-decoration:line-through;",del:()=>"text-decoration:line-through;","small-caps":()=>"font-variant-caps:small-caps;","all-small-caps":()=>"font-variant-caps:all-small-caps;","slashed-zero":()=>"font-variant-numeric:slashed-zero;","tabular-nums":()=>"font-variant-numeric:tabular-nums;",lowercase:()=>"text-transform:lowercase;",uppercase:()=>"text-transform:uppercase;",capitalize:()=>"text-transform:capitalize;","text-justify":()=>"text-align:justify;","text-center":()=>"text-align:center;","text-right":()=>"text-align:right;","text-left":()=>"text-align:left;","vertical-top":()=>"vertical-align:top;","vertical-middle":()=>"vertical-align:middle;","vertical-bottom":()=>"vertical-align:bottom;",sub:()=>"vertical-align: sub;",super:()=>"vertical-align: super;","text-top":()=>"vertical-align: text-top;","text-bottom":()=>"vertical-align: text-bottom;","break-all":()=>"word-break:break-all;","break-word":()=>"overflow-wrap:break-word;","keep-all":()=>"word-break:keep-all;",hyphens:(e="auto")=>`hyphens: ${e};`,"border-box":()=>"box-sizing:border-box","content-box":()=>"box-sizing:content-box",w:e=>{if(e.includes("~")){const t=[],[o,r]=e.split("~");return o&&t.push(`min-width:${s(o)};`),r&&t.push(`max-width:${s(r)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`width:${s(e)};`},h:e=>{if(e.includes("~")){const t=[],[o,r]=e.split("~");return o&&t.push(`min-height:${s(o)};`),r&&t.push(`max-height:${s(r)};`),t.join("")}return e==="stretch"||e==="fill"?"align-self:stretch":`height:${s(e)};`},m:e=>`margin:${oe(e)};`,mt:e=>`margin-top:${s(e)};`,mr:e=>`margin-right:${s(e)};`,mb:e=>`margin-bottom:${s(e)};`,ml:e=>`margin-left:${s(e)};`,p:e=>`padding:${oe(e)};`,pt:e=>`padding-top:${s(e)};`,pr:e=>`padding-right:${s(e)};`,pb:e=>`padding-bottom:${s(e)};`,pl:e=>`padding-left:${s(e)};`,b:e=>`border:${N(e)};`,bt:e=>`border-top:${N(e)};`,br:e=>`border-right:${N(e)};`,bb:e=>`border-bottom:${N(e)};`,bl:e=>`border-left:${N(e)};`,bw:e=>`border-width:${s(e)};`,btw:e=>`border-top-width:${s(e)};`,brw:e=>`border-right-width:${s(e)};`,bbw:e=>`border-bottom-width:${s(e)};`,blw:e=>`border-left-width:${s(e)};`,bs:e=>`border-style:${l(e)};`,bts:e=>`border-top-style:${l(e)};`,brs:e=>`border-right-style:${l(e)};`,bbs:e=>`border-bottom-style:${l(e)};`,bls:e=>`border-left-style:${l(e)};`,bc:e=>`border-color:${z(e)};`,btc:e=>`border-top-color:${z(e)};`,brc:e=>`border-right-color:${z(e)};`,bbc:e=>`border-bottom-color:${z(e)};`,blc:e=>`border-left-color:${z(e)};`,r:e=>`border-radius:${oe(e)};`,rt:e=>`border-top-left-radius:${s(e)};border-top-right-radius:${s(e)};`,rr:e=>`border-top-right-radius:${s(e)};border-bottom-right-radius:${s(e)};`,rb:e=>`border-bottom-left-radius:${s(e)};border-bottom-right-radius:${s(e)};`,rl:e=>`border-top-left-radius:${s(e)};border-bottom-left-radius:${s(e)};`,rtl:e=>`border-top-left-radius:${s(e)};`,rtr:e=>`border-top-right-radius:${s(e)};`,rbr:e=>`border-bottom-right-radius:${s(e)};`,rbl:e=>`border-bottom-left-radius:${s(e)};`,ring:e=>{const[t,o=1]=e.split("/");return`box-shadow:0 0 0 ${s(o)} ${z(t)};`},"box-shadow":e=>`box-shadow:${te(e)}`,outline:e=>e==="-"?"outline:none;":e==="none"||e==="unset"||e==="inherit"||e==="initial"?`outline:${e};`:`outline:1px solid ${z(e)};`,guide:(e="#4f80ff")=>`&, & > * { outline:1px solid ${z(e)};}`,"bg-repeat-x":()=>"background-repeat:repeat-x;","bg-repeat-y":()=>"background-repeat:repeat-y;","bg-no-repeat":()=>"background-repeat:no-repeat;","bg-fixed":()=>"background-attachment:fixed;","bg-scroll":()=>"background-attachment:scroll;","bg-position":e=>`background-position:${e};`,contain:()=>"background-size:contain;background-position:center;object-fit:contain;",cover:()=>"background-size:cover;background-position:center;object-fit:cover;",block:()=>"display:block;","inline-block":()=>"display:inline-block;",inline:()=>"display:inline;","inline-flex":()=>"display:inline-flex;",table:()=>"display:table;","inline-table":()=>"display:inline-table;","table-caption":()=>"display:table-caption;","table-cell":()=>"display:table-cell;","table-column":()=>"display:table-column;","table-column-group":()=>"display:table-column-group;","table-footer-group":()=>"display:table-footer-group;","table-header-group":()=>"display:table-header-group;","table-row-group":()=>"display:table-row-group;","table-row":()=>"display:table-row;","flow-root":()=>"display:flow-root;",grid:()=>"display:grid;","inline-grid":()=>"display:inline-grid;",contents:()=>"display:contents;","list-item":()=>"display:list-item;",hbox:e=>`display:flex;flex-flow:row;${Qe(e)}`,vbox:e=>`display:flex;flex-flow:column;max-width:100%;${Je(e)}`,pack:()=>"display:flex;align-items:center;justify-content:center;","hbox(":()=>"","vbox(":()=>"",gap:e=>`gap:${oe(e)};`,hgap:e=>`&>*+* {margin-left:${s(e)};}`,"hgap-reverse":e=>`&>*+* {margin-right:${s(e)};}`,vgap:e=>`&>*+* {margin-top:${s(e)};}`,"vgap-reverse":e=>`&>*+* {margin-bottom:${s(e)};}`,"space-between":()=>"justify-content:space-between;","space-around":()=>"justify-content:space-around;","space-evenly":()=>"justify-content:space-evenly;",flex:(e="1")=>`flex:${te(e)};`,space:e=>`[class*="hbox"]>& {width:${s(e)};} [class*="vbox"]>& {height:${s(e)};}`,"flex-grow":e=>`flex-grow:${l(e)};`,"flex-shrink":e=>`flex-shrink:${l(e)};`,"flex-basis":e=>`flex-basis:${s(e)};`,"flex-wrap":()=>"flex-wrap:wrap;max-width:100%;","flex-wrap-reverse":()=>"flex-wrap:wrap-reverse;max-width:100%;","flex-nowrap":()=>"flex-wrap:nowrap;",order:e=>`order:${l(e)};`,overflow:e=>`overflow:${e};`,"overflow-x":e=>`overflow-x:${e};`,"overflow-y":e=>`overflow-y:${e};`,clip:()=>"overflow:hidden;",scroll:()=>"overflow:auto;","scroll-x":()=>"overflow-x:auto;overflow-y:hidden;","scroll-y":()=>"overflow-x:hidden;overflow-y:auto;",scrollbar:()=>"&{overflow:scroll;} &.scroll {overflow:scroll;} &.scroll-x {overflow-x:scroll;} &.scroll-y {overflow-y:scroll;}","no-scrollbar":()=>"&::-webkit-scrollbar {display:none;}","no-scrollbar-x":()=>"&::-webkit-scrollbar:horizontal {display:none;}",overscroll:e=>`overscroll-behavior:${e};`,"overscroll-x":e=>`overscroll-behavior-x:${e};`,"overscroll-y":e=>`overscroll-behavior-y:${e};`,"no-bouncing":()=>"","no-overscroll":()=>"",pre:()=>"white-space:pre-wrap;","pre-wrap":()=>"white-space:pre-wrap;","pre-line":()=>"white-space:pre-line;",nowrap:()=>"white-space:nowrap;flex-shrink:0;","nowrap...":()=>"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;","line-clamp":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"max-lines":e=>`display:-webkit-box;-webkit-line-clamp:${e};-webkit-box-orient:vertical;overflow:hidden;`,"text-indent":e=>`text-indent:${s(e)};`,layer:(e="")=>{const t={top:0,right:0,bottom:0,left:0};return e.split("+").forEach(o=>{switch(o){case"top":return delete t.bottom;case"right":return delete t.left;case"bottom":return delete t.top;case"left":return delete t.right}}),"position:absolute;"+Object.keys(t).map(o=>`${o}:0;`).join("")},absolute:()=>"position:absolute;",relative:()=>"position:relative;",sticky:()=>"position:sticky;","sticky-top":(e="0")=>`position:sticky;top:${s(e)};`,"sticky-right":(e="0")=>`position:sticky;right:${s(e)};`,"sticky-bottom":(e="0")=>`position:sticky;bottom:${s(e)};`,"sticky-left":(e="0")=>`position:sticky;left:${s(e)};`,fixed:()=>"position:fixed;",static:()=>"position:static;",x:e=>`left:${s(e)};`,y:e=>`top:${s(e)};`,z:e=>`z-index:${l(e)};`,top:e=>`top:${s(e)};`,left:e=>`left:${s(e)};`,right:e=>`right:${s(e)};`,bottom:e=>`bottom:${s(e)};`,none:()=>"display:none;",visible:()=>"visibility:visible;",hidden:()=>"visibility:hidden;",invisible:()=>"visibility:hidden;",gone:()=>"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);",opacity:e=>`opacity:${l(e)};`,pointer:()=>"cursor:pointer;",grab:()=>"&{cursor:grab;} &:active{cursor:grabbing;}",grabbing:()=>"cursor:grabbing;",cursor:e=>`cursor:${e};`,"user-select-none":()=>"user-select:none;-webkit-user-select:none;","user-select-all":()=>"user-select:all;-webkit-user-select:all;","user-select-auto":()=>"user-select:auto;-webkit-user-select:auto;","user-select-text":()=>"user-select:text;-webkit-user-select:text;","user-select":e=>`user-select:${l(e)};-webkit-user-select:${l(e)};`,"pointer-events-none":()=>"pointer-events:none;","pointer-events-auto":()=>"pointer-events:auto;",transition:e=>`transition:${et(e)};`,translate:e=>`transform:translate(${U(e)});`,translateX:e=>`transform:translateX(${l(e)});`,translateY:e=>`transform:translateY(${l(e)});`,translateZ:e=>`transform:translateZ(${l(e)});`,translate3d:e=>`transform:translate3d(${U(e)});`,rotate:e=>`transform:rotate(${U(e)});`,rotateX:e=>`transform:rotateX(${l(e)});`,rotateY:e=>`transform:rotateY(${l(e)});`,rotateZ:e=>`transform:rotateZ(${l(e)});`,rotate3d:e=>`transform:rotateZ(${U(e)});`,scale:e=>`transform:scale(${U(e)});`,scaleX:e=>`transform:scaleX(${U(e)});`,scaleY:e=>`transform:scaleY(${U(e)});`,scaleZ:e=>`transform:scaleZ(${U(e)});`,ratio:e=>`& {position:relative;} &:before{content:"";display:block;width:100%;padding-top:${Ke(e)};} & > * {position:absolute;top:0;left:0;width:100%;height:100%;}`,gpu:()=>"transform:translateZ(0.1px);","no-border":()=>"border:none;outline:none;","app-region":e=>`-webkit-app-region:${e};`,content:e=>`content:${l(e)}`,"clip-path":e=>`clip-path:${l(e)};-webkit-clip-path:${l(e)};`,"table-layout-fixed":()=>"table-layout:fixed;","aspect-ratio":e=>`aspect-ratio:${l(e.replace(/:/g,"/"))}`,float:e=>`float:${l(e)}`,clear:e=>`clear:${l(e)}`,blur:e=>`filter:blur(${s(e)})`,brightness:e=>`filter:brightness(${l(e)})`,contrast:e=>`filter:contrast(${l(e)})`,"drop-shadow":e=>`filter:drop-shadow(${l(e)})`,grayscale:e=>`filter:grayscale(${l(e)})`,"hue-rotate":e=>`filter:hue-rotate(${l(e)})`,invert:e=>`filter:invert(${l(e)})`,sepia:e=>`filter:sepia(${l(e)})`,saturate:e=>`filter:saturate(${l(e)})`,"backdrop-blur":e=>`backdrop-filter:blur(${s(e)})`,"backdrop-brightness":e=>`backdrop-filter:brightness(${l(e)})`,"backdrop-contrast":e=>`backdrop-filter:contrast(${l(e)})`,"backdrop-drop-shadow":e=>`backdrop-filter:drop-shadow(${l(e)})`,"backdrop-grayscale":e=>`backdrop-filter:grayscale(${l(e)})`,"backdrop-hue-rotate":e=>`backdrop-filter:hue-rotate(${l(e)})`,"backdrop-invert":e=>`backdrop-filter:invert(${l(e)})`,"backdrop-sepia":e=>`backdrop-filter:sepia(${l(e)})`,"backdrop-saturate":e=>`backdrop-filter:saturate(${l(e)})`,triangle:e=>{const[t,o,r=0]=e.split("/"),i=["top","right","bottom","left","top","right","bottom","left"],a=i.slice(i.indexOf(t)),w=.5;let h="width:0;height:0;border:0 solid transparent;";return h+="border-"+a[1]+"-width:"+Math.round(+o*(-r+1)/2)+"px;",h+="border-"+a[3]+"-width:"+Math.round(+o*(+r+1)/2)+"px;",h+="border-"+a[2]+":"+Math.round(+o*w)+"px solid black;",h},elevation:e=>{const t=+e;if(!t)return"box-shadow: none";const o=t==1?3:t*2,r=(t+10+t/9.38)/100,i=t<10?t%2==0?t-(t/2-1):t-(t-1)/2:t-4,a=(24-Math.round(t/10))/100;return`box-shadow: 0px ${s(t)} ${s(o)} rgba(0, 0, 0, ${r}), 0px ${s(i)} ${s(o)} rgba(0, 0, 0, ${a})`}},it={"hover:":{media:"(hover:hover)",selector:"&:hover, &.\\:hover"},"active:":{selector:"html &:active, html &.\\:active"},"focus:":{selector:"html &:focus, html &.\\:focus"},"focus-visible":{selector:"html &:focus-visible, html &.\\:focus-visible"},"focus-within:":{selector:"html &:focus-within, html &.\\:focus-within"},"checked:":{selector:"html &:checked, html &.\\:checked"},"read-only:":{selector:"html &:read-only, html &.\\:read-only"},"enabled:":{selector:"html &:enabled, html &.\\:enabled"},"disabled:":{selector:"html body &:disabled, html body &.\\:disabled, html body &[disabled]"},"group-hover:":{selector:".group:hover &, html .group.\\:hover &"},"group-active:":{selector:"html .group:active &, html .group.\\:active &"},"group-focus:":{selector:"html .group:focus &, html .group.\\:focus &"},"group-focus-within:":{selector:"html .group:focus-within &, html .group\\:focus-within"},"group-checked:":{selector:"html .group:checked &, html .group.\\:checked &"},"group-read-only:":{selector:"html .group:read-only &, html .group.\\:read-only &"},"group-enabled:":{selector:"html .group:enabled &, html .group.\\:enabled &"},"group-disabled:":{selector:"html body .group:disabled &, html body .group[disabled] &, html body .group.disabled &"},"placeholder:":{selector:"&::placeholder"},"odd:":{selector:"&:nth-child(2n+1)"},"even:":{selector:"&:nth-child(2n)"},"first:":{selector:"&:first-child"},"last:":{selector:"&:last-child"},"after:":{selector:"&::after"},"before:":{selector:"&::before"},"selection::":{selector:"&::selection, & *::selection"}},st={"sm:":{media:"(min-width:480px)",selector:"html &"},"md:":{media:"(min-width:768px)",selector:"html &"},"lg:":{media:"(min-width:1024px)",selector:"html &"},"xl:":{media:"(min-width:1280px)",selector:"html &"},"sm~:":{media:"(min-width:480px)",selector:"html &"},"md~:":{media:"(min-width:768px)",selector:"html &"},"lg~:":{media:"(min-width:1024px)",selector:"html &"},"xl~:":{media:"(min-width:1280px)",selector:"html &"},"~sm:":{media:"(max-width:479.98px)",selector:"html &"},"~md:":{media:"(max-width:767.98px)",selector:"html &"},"~lg:":{media:"(max-width:1023.98px)",selector:"html &"},"~xl:":{media:"(max-width:1279.98px)",selector:"html &"},"mobile:":{media:"(max-device-width:767.98px)",selector:"html &"},"tablet:":{media:"(min-device-width:768px) and (max-width:1023.98px)",selector:"html &"},"desktop:":{media:"(min-device-width:1024px)",selector:"html &"},"!mobile:":{media:"(min-device-width:768px)",selector:"html &"},"!desktop:":{media:"(max-device-width:1023.98px)",selector:"html &"},"touch:":{media:"(max-device-width:1023.98px)",selector:"html &"},"!touch:":{media:"(min-device-width:1024px)",selector:"html &"},"portrait:":{media:"(orientation:portrait)",selector:"html &"},"landscape:":{media:"(orientation:landscape)",selector:"html &"},"print:":{media:"print",selector:"html &"},"screen:":{media:"screen",selector:"html &"},"speech:":{media:"speech",selector:"html &"},"dark:":{selector:"html.dark &"}},at={">>":e=>`& ${e.slice(2)}`,".":e=>`&${e}, ${e} &`,"[":e=>`&${e}, ${e} &`,">":e=>`&${e}`,"+":e=>`&${e}`,"~":e=>`&${e}`,"#":e=>`&${e}`},lt=P(P({},it),st),De=[["(hexcolor)",/(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/],["(important)",/(!+)$/],["(string)",/('(?:[^']|\\')*'|"(?:[^"]|\\")*")/],["(operator)",/(::|>>|[-+~|*/%!#@?:;.,<>=[\](){}])/],["(indent)",/((?:\\.|[^'":[\](){}#])+)/],["(unknown)",/./]],nt=new RegExp(De.map(e=>e[1].source).join("|"),"g");let ce=[],n,Ae=0;const de=e=>{if(e&&n&&n.id&&n.id!==e)throw new Error("Unexpected token: "+n.id+" expected: "+e);const t=n;return n=ce[Ae++],t},ut=e=>{ce=[],Ae=0,e.replace(nt,(t,...o)=>{const r=o[o.length-2],i=De[o.findIndex(w=>w!==void 0)][0],a=i==="(operator)"?t:i;return ce.push({type:i,id:a,value:t,index:r}),t}),de()},ct=()=>{const e=[],t=r=>e.push(r),o=[];for(;n;){if(n.id==="("||n.id==="["||n.id==="{")o.push(n.id);else if(n.id===")"||n.id==="]"||n.id==="}"){const r=o.pop();if(!(r==="("&&n.id===")")){if(!(r==="["&&n.id==="]")){if(!(r==="{"&&n.id==="}"))throw new Error("Unexpected:"+n.id)}}}else if(o.length===0&&(n.id===":"||n.id==="::"||n.id==="(important)"))break;t(de())}if(o.length>0)throw new Error("Unexpected end of input");return e},dt=(e,t)=>{const o=Object.fromEntries(Object.entries(e).map(([r,i],a)=>[r,a]));return r=>{try{ut(r);const i=[];for(;n;){const d=ct(),B=d[0].value,v=d.map(f=>f.value).join("");if(n&&(n.id===":"||n.id==="::")){const f=v,$=at[B],p=t[v+n.id],F=(()=>$?{selector:$(f)}:p||{selector:`&${n.id}${f}`})();F.selector=F.selector.replace(/>>/g," "),i.push(F)}else if(!n||n.id==="(important)"){const f=B,$=v.slice(B.length+1,-1),p=e[f],F=o[f+($.includes("(")?"(":"")]||o[f]||0;let S=(()=>{if(p)return $===""?p():p($);if($&&tt[f])return`${f}:${te($)}`;throw new Error("Not defined property: "+f)})();n&&n.id==="(important)"&&(S=S.replace(/;/g,(R,j,I)=>I.charAt(j-1)!=="\\"?"!important;":R)),i.push({declaration:S,priority:F});break}de()}const a=i.map(d=>d.media).filter(Boolean),w=a.length?"@media"+a.join(" and "):"",h="."+We(r),u=i.map(d=>d.selector).filter(Boolean).map(d=>d.split(",")).reduce((d,B)=>d.map(v=>B.map(f=>f.replace(/&/g,v))).flat(),[h]).join(","),g=i.map(d=>d.declaration).pop(),V=i.map(d=>d.priority).pop(),O=g.includes("&")?g.replace(/&/g,u):u+"{"+g+"}";return[w?w+"{"+O+"}":O,V]}catch{}}},pt=(e,t)=>e[1]-t[1],ht=(e={},t={})=>(e=P(P({},rt),e),t=P(P({},lt),t),o=>o.map(dt(e,t)).filter(Boolean).sort(pt).map(r=>r[0])),bt=ht(),ft=e=>{const t=new Set;return e.split(/[\s"'`]/).forEach(o=>t.add(o)),[...t]},Ct="vs",gt=!0,vt=[{background:"FFFFFF",token:""},{foreground:"c41a16",token:"string"},{foreground:"1c00cf",token:"constant.numeric"},{foreground:"aa0d91",token:"keyword"},{foreground:"000000",token:"keyword.operator"},{foreground:"aa0d91",token:"constant.language"},{foreground:"990000",token:"support.class.exception"},{foreground:"000000",token:"entity.name.function"},{fontStyle:"bold underline",token:"entity.name.type"},{fontStyle:"italic",token:"variable.parameter"},{foreground:"888888",token:"comment"},{foreground:"ff0000",token:"invalid"},{background:"e71a1100",token:"invalid.deprecated.trailing-whitespace"},{foreground:"000000",background:"fafafafc",token:"text source"},{foreground:"aa0d91",token:"meta.tag"},{foreground:"aa0d91",token:"declaration.tag"},{foreground:"000000",fontStyle:"bold",token:"support"},{foreground:"aa0d91",token:"storage"},{fontStyle:"bold underline",token:"entity.name.section"},{foreground:"000000",fontStyle:"bold",token:"entity.name.function.frame"},{foreground:"333333",token:"meta.tag.preprocessor.xml"},{foreground:"994500",fontStyle:"italic",token:"entity.other.attribute-name"},{foreground:"881280",token:"entity.name.tag"}],mt={"editor.foreground":"#000000","editor.background":"#FFFFFF","editor.selectionBackground":"#BAD6FD","editor.lineHighlightBackground":"#FFFFFF","editorCursor.foreground":"#000000","editorWhitespace.foreground":"#B3B3B3F4"};var wt={base:Ct,inherit:gt,rules:vt,colors:mt};function Bt(e){let t;return{c(){t=k("div"),this.h()},l(o){t=y(o,"DIV",{class:!0}),D(t).forEach(C),this.h()},h(){m(t,"class","h(100%)")},m(o,r){ae(o,t,r),e[3](t)},p:le,i:le,o:le,d(o){o&&C(t),e[3](null)}}}function xt(e,t,o){let{value:r=""}=t,i=null,a;const w=u=>{a&&a.setValue(u)};je(()=>{require.config({paths:{vs:"https://unpkg.com/monaco-editor@latest/min/vs"}}),window.MonacoEnvironment={getWorkerUrl:()=>u};let u=URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
`],{type:"text/javascript"}));return require(["vs/editor/editor.main"],function(){monaco.editor.defineTheme("adorableCSS",wt),a=monaco.editor.create(i,{value:r,language:"html",automaticLayout:!0,scrollBeyondLastLine:!1,readOnly:!1,theme:"adorableCSS",tabSize:2,fontSize:"13px",overviewRulerLanes:0,wordWrap:"on",minimap:{enabled:!1}}),a.onDidChangeModelContent(g=>{o(1,r=a.getValue())}),a.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyS,function(){a.getAction("editor.action.formatDocument").run()})}),()=>{a&&a.dispose()}});function h(u){Q[u?"unshift":"push"](()=>{i=u,o(0,i)})}return e.$$set=u=>{"value"in u&&o(1,r=u.value)},[i,r,w,h]}class kt extends Be{constructor(t){super();xe(this,t,xt,Bt,ke,{value:1,setValue:2})}get setValue(){return this.$$.ctx[2]}}const Ee=`
<!--
\u0E05^\u2022\uFECC\u2022^\u0E05 \u2665

AdorableCSS\uC5D0 \uB180\uB7EC\uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.
AdorableCSS\uB294 \uC544\uC8FC \uB2E8\uC21C\uD55C \uBB38\uBC95\uC73C\uB85C \uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC544\uB798 HTML\uC744 \uC0AD\uC81C \uD6C4
 
<div class="font(20) c(red)">Hello world</div>
 
\uB77C\uACE0 \uC785\uB825\uD574\uBCF4\uC138\uC694.

class="property(value)" \uC758 \uD615\uC2DD\uC758 \uBB38\uBC95\uC73C\uB85C \uC791\uC131\uD574 \uC8FC\uC2DC\uBA74 \uB429\uB2C8\uB2E4.
\uC6D0\uD558\uB294 \uC18D\uC131\uB4E4\uC740 Tutorial\uC774\uB098 Reference\uB97C \uBCF4\uACE0 \uCC38\uACE0\uD574\uC8FC\uC138\uC694.

\uC5EC\uAE30 \uCF54\uB4DC\uB294 \uC218\uC815\uC774 \uAC00\uB2A5\uD558\uB2C8 \uB9C8\uC74C\uAECF \uD14C\uC2A4\uD2B8 \uD574\uBCF4\uC138\uC694!
-->

<div class="vbox pack gap(20) text-center p(50)">
  <div class="hbox font(100/-/-15%) AppleSD opacity(0.7) hover:scale(1.05) hover:opacity(1) transition(.4s) pointer group">
    <span class="group-hover:rotate(-10deg) group-active:rotate(10deg) transition(.4s)">\u0E05</span>
    <span>^\u2022\uFECC\u2022^</span>
    <span class="group-hover:rotate(10deg) group-active:rotate(-10deg) transition(.4s)">\u0E05 <span class="font(30) c(#ccc) group-hover:c(#fb3958) vertical-top transition(.4s)">\u2665</span></span>
  </div>

  <div>
    <h1 class="font(30) 200 c(#666)">AdorableCSS</h1>
    <p>\u2728 Rapid on-demand atomic css framework</p>
  </div>
</div>

`.trim(),yt=`
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

`.trim(),Dt=`
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

thin {font-weight:200;}
light {font-weight:300;}
regular {font-weight:normal}
medium {font-weight:500;}
semibold {font-weight:600;}
bold {font-weight:bold}
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
  <div class="light">light</div>
  <div class="regular">regular</div>
  <div class="medium">medium</div>
  <div class="semibold">semibold</div>
  <div class="bold">bold</div>
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

`.trim(),At=`
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

`.trim(),Et=`
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

`.trim(),$t=`
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

`.trim(),Ft=`
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

`.trim(),_t=`
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

`.trim(),zt=`
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

`.trim(),St=`
<!--
Prefix
https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements 
* \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB530\uB77C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

::after (:after)
::backdrop (en-US) 
::before (:before)
::cue (en-US)
::cue-region (en-US)
::first-letter (:first-letter) (en-US)
::first-line (:first-line) (en-US)
::grammar-error (en-US) 
::marker (en-US) 
::part() (en-US) 
::placeholder 
::selection (en-US)
::slotted() (en-US)
::spelling-error (en-US) 
-->

<div class="vbox vgap(20)">

  <div>first-line::c(red)</div>
  <div class="bg(#fff) first-line::c(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>
  
  <div>first-letter::c(red)</div>
  <div class="bg(#fff) first-letter::c(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>

  <div>selection::bg(red) (\uB4DC\uB798\uADF8 \uD574\uBCF4\uC138\uC694.)</div>
  <div class="bg(#fff) selection::bg(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>


  <div>-webkit-scrollbar-*</div>

  <div class="bg(#fff) h(100) scroll-y -webkit-scrollbar::w(4) -webkit-scrollbar-thumb::bg(red)">
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>first</div>
    <div>second</div>
    <div>third</div>
  </div>
</div>

`.trim();function $e(e,t,o){const r=e.slice();return r[14]=t[o][0],r[15]=t[o][1],r[17]=o,r}function Fe(e){let t,o=e[14]+"",r,i,a;function w(){return e[10](e[14],e[15],e[17])}return{c(){t=k("div"),r=J(o),this.h()},l(h){t=y(h,"DIV",{class:!0});var u=D(t);r=ee(u,o),u.forEach(C),this.h()},h(){m(t,"class","c(#000) pointer p(10/20) r(10) hover:c(--primary) .selected:bg(--primary) .selected:c(#fff)!"),T(t,"selected",e[3]===e[17])},m(h,u){ae(h,t,u),b(t,r),i||(a=ne(t,"click",w),i=!0)},p(h,u){e=h,u&8&&T(t,"selected",e[3]===e[17])},d(h){h&&C(t),i=!1,a()}}}function Rt(e){let t,o,r,i,a,w,h,u,g,V,O,d,B,v,f,$,p,F,S,R,j,I,re,L,G,Y,ie,pe,X=e[6],x=[];for(let c=0;c<X.length;c+=1)x[c]=Fe($e(e,X,c));function _e(c){e[11](c)}let he={};return e[1]!==void 0&&(he.value=e[1]),g=new kt({props:he}),Q.push(()=>Te(g,"value",_e)),e[12](g),{c(){t=k("div"),o=k("div"),r=H(),i=k("div"),a=k("div");for(let c=0;c<x.length;c+=1)x[c].c();w=H(),h=k("div"),u=k("div"),Oe(g.$$.fragment),O=H(),d=k("div"),B=k("div"),v=k("button"),f=J("Result"),$=H(),p=k("button"),F=J("CSS Output"),S=H(),R=k("div"),j=k("div"),I=k("iframe"),re=H(),L=k("div"),G=J(e[2]),this.h()},l(c){t=y(c,"DIV",{class:!0});var A=D(t);o=y(A,"DIV",{class:!0}),D(o).forEach(C),r=M(A),i=y(A,"DIV",{class:!0});var _=D(i);a=y(_,"DIV",{class:!0});var E=D(a);for(let se=0;se<x.length;se+=1)x[se].l(E);E.forEach(C),w=M(_),h=y(_,"DIV",{class:!0});var W=D(h);u=y(W,"DIV",{class:!0});var be=D(u);Ie(g.$$.fragment,be),be.forEach(C),W.forEach(C),O=M(_),d=y(_,"DIV",{class:!0});var q=D(d);B=y(q,"DIV",{class:!0});var Z=D(B);v=y(Z,"BUTTON",{class:!0});var fe=D(v);f=ee(fe,"Result"),fe.forEach(C),$=M(Z),p=y(Z,"BUTTON",{class:!0});var Ce=D(p);F=ee(Ce,"CSS Output"),Ce.forEach(C),Z.forEach(C),S=M(q),R=y(q,"DIV",{class:!0});var K=D(R);j=y(K,"DIV",{class:!0});var ge=D(j);I=y(ge,"IFRAME",{class:!0,frameborder:!0}),D(I).forEach(C),ge.forEach(C),re=M(K),L=y(K,"DIV",{class:!0});var ve=D(L);G=ee(ve,e[2]),ve.forEach(C),K.forEach(C),q.forEach(C),_.forEach(C),A.forEach(C),this.h()},h(){m(o,"class","h(60)"),m(a,"class","vbox w(240) monospace(number) p(10)"),m(u,"class","flex(4) vbox r(10) clip"),m(h,"class","flex(4) vbox p(10)"),m(v,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),T(v,"selected",e[4]==="Result"),m(p,"class","p(8/12) pt(12) bb(4/transparent) .selected:bbc(--primary) .selected:c(#000)"),T(p,"selected",e[4]==="CSS_output"),m(B,"class","hbox bg(#fff) font(12) c(#999)"),m(I,"class","layer w(100%) h(100%) bg(transparent)"),m(I,"frameborder","0"),m(j,"class","layer pack check-board none"),T(j,"none",e[4]!=="Result"),m(L,"class","layer pre monospace font(12) p(10) none scroll-y"),T(L,"none",e[4]!=="CSS_output"),m(R,"class","flex relative"),m(d,"class","flex(3) relative vbox c(#000) p(10) r(10)"),m(i,"class","flex hbox(fill) clip bg(#f9f9f9)"),m(t,"class","layer vbox overscroll(none)")},m(c,A){ae(c,t,A),b(t,o),b(t,r),b(t,i),b(i,a);for(let _=0;_<x.length;_+=1)x[_].m(a,null);b(i,w),b(i,h),b(h,u),Le(g,u,null),b(i,O),b(i,d),b(d,B),b(B,v),b(v,f),b(B,$),b(B,p),b(p,F),b(d,S),b(d,R),b(R,j),b(j,I),e[13](I),b(R,re),b(R,L),b(L,G),Y=!0,ie||(pe=[ne(v,"click",e[7]),ne(p,"click",e[8])],ie=!0)},p(c,[A]){if(A&584){X=c[6];let E;for(E=0;E<X.length;E+=1){const W=$e(c,X,E);x[E]?x[E].p(W,A):(x[E]=Fe(W),x[E].c(),x[E].m(a,null))}for(;E<x.length;E+=1)x[E].d(1);x.length=X.length}const _={};!V&&A&2&&(V=!0,_.value=c[1],Ue(()=>V=!1)),g.$set(_),A&16&&T(v,"selected",c[4]==="Result"),A&16&&T(p,"selected",c[4]==="CSS_output"),A&16&&T(j,"none",c[4]!=="Result"),(!Y||A&4)&&Ve(G,c[2]),A&16&&T(L,"none",c[4]!=="CSS_output")},i(c){Y||(Pe(g.$$.fragment,c),Y=!0)},o(c){Xe(g.$$.fragment,c),Y=!1},d(c){c&&C(t),He(x,c),e[12](null),Me(g),e[13](null),ie=!1,Ye(pe)}}}function jt(e,t,o){let r,i,a=Ee;const w=[["0. Hello AdorableCSS!",Ee],["1. Colors",yt],["2. Typography",Dt],["3. Box Model",At],["4. Overflow",Et],["5. Flexbox",$t],["6. Position",Ft],["7. Hover, Active",_t],["8. Pseudo Class",zt],["9. Pseudo Element",St],["\uACC4\uC18D \uC791\uC5C5 \uC911\uC785\uB2C8\uB2E4...",""]];let h=0,u="Result";const g=()=>o(4,u="Result"),V=()=>o(4,u="CSS_output"),O=(p,F,S)=>{o(1,a=F),o(3,h=S),d.setValue(F)};let d;const B=(p,F,S)=>O(p,F,S);function v(p){a=p,o(1,a)}function f(p){Q[p?"unshift":"push"](()=>{d=p,o(5,d)})}function $(p){Q[p?"unshift":"push"](()=>{i=p,o(0,i),o(2,r),o(1,a)})}return e.$$.update=()=>{e.$$.dirty&2&&o(2,r=ot+bt(ft(a)).join(`
`)),e.$$.dirty&7&&i&&o(0,i.contentWindow.document.body.innerHTML=`<style>${r}</style>
`+a,i)},[i,a,r,h,u,d,w,g,V,O,B,v,f,$]}class It extends Be{constructor(t){super();xe(this,t,jt,Rt,ke,{})}}export{It as default};
