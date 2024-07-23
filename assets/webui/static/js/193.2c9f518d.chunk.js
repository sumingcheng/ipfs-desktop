"use strict";(self.webpackChunkipfs_webui=self.webpackChunkipfs_webui||[]).push([[193],{26193:(e,t,l)=>{l.r(t),l.d(t,{ExplorePage:()=>k,default:()=>B});var a=l(65043),r=l(70930),n=l(16470),c=l(44062),s=l(13026),o=l(68114),i=l(38068);function d(e){let{error:t}=e;const{t:l}=(0,n.Bd)("explore",{keyPrefix:"errors"});return null==t?null:a.createElement("div",{className:"bg-red white pa3 lh-copy"},a.createElement("div",null,t.toString(l)))}var m=l(94028),p=l(96431);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},u.apply(this,arguments)}function h(e){const t=e.split("");if(t.length<=9)return e;return{value:e,start:t.slice(0,4).join(""),end:t.slice(t.length-4).join("")}}const E=e=>{let{value:t,title:l,style:r,...n}=e;r=Object.assign({},{textDecoration:"none"},r);const{start:c,end:s}=h(t);return a.createElement("abbr",u({title:l||t,style:r},n),a.createElement("span",null,c),a.createElement("span",{className:"o-20"},"\u2026"),a.createElement("span",null,s))};var g=l(76330);function y(e,t,l,a){const r=l.slice(0,a).map((e=>e.path)).join("/"),n=e+"/"+t;return r?n+"/"+r:n}const b=e=>{let{cid:t,children:l}=e;const r=(0,p.fi)(t),n=(0,g.Ly)(r);return a.createElement("div",{className:"dib overflow-hidden"},a.createElement("div",{className:"bb bw1 pb1",style:{borderColor:n}},l))},v=e=>{let{path:t,hrefBase:l,sourceCid:r}=e;const n=[t];return a.createElement("div",{className:"dib"},n.map(((e,t)=>{const c=n.slice(0,t+1).join("/"),s="".concat(l,"/").concat(c);return a.createElement("div",{className:"dib",key:s},0!==t&&a.createElement(f,null),a.createElement("a",{className:"dib no-underline dark-gray o-50 glow",title:r+"/"+c,href:s},e))})))},f=()=>a.createElement("div",{className:"dib ph2 gray v-top"},"/"),x=e=>{let{cid:t,pathBoundaries:l,localPath:r,hrefBase:n="#/explore",className:c="",...s}=e;const[o,...i]=l,d=l[l.length-1],m=y(n,t,l,0);return a.createElement("div",s,a.createElement("div",{className:"sans-serif ".concat(c)},a.createElement(b,{cid:t},a.createElement("a",{href:m,className:"monospace no-underline dark-gray o-50 glow"},a.createElement(E,{value:t})),o?a.createElement("div",{className:"dib"},a.createElement(f,null),a.createElement(v,{path:o.path,hrefBase:m,sourceCid:t})):null,r&&0===l.length?a.createElement("div",{className:"dib"},a.createElement(f,null),a.createElement(v,{path:r,sourceCid:t,hrefBase:m})):null),i.map(((e,r)=>{const c=y(n,t,l,r+1);return a.createElement("div",{className:"dib",key:r},a.createElement(f,null),a.createElement(b,{cid:e.source},a.createElement(v,{path:e.path,sourceCid:e.source,hrefBase:c})))})),r&&l.length>0?a.createElement("div",{className:"dib"},a.createElement(f,null),a.createElement(b,{cid:d.target},a.createElement(v,{path:r,sourceCid:d.target,hrefBase:y(n,t,l,l.length)}))):null))};var N=l(35423),w=l(28692);class k extends a.Component{render(){let{t:e,explore:t,exploreIsLoading:l,explorePathFromHash:n,doExploreLink:s,runTour:p=!1,joyrideCallback:u,gatewayUrl:h,publicGatewayUrl:E="https://dweb.link"}=this.props;if(!n)return console.warn("[IPLD Explorer] ExplorePage loaded without a path to explore"),null;t=t||{},t=l?{}:t;const{error:y,targetNode:b,localPath:v,nodes:f,pathBoundaries:k}=t,B=f&&f[0]||null;return a.createElement("div",{className:"nt4-l"},a.createElement(r.mg,null,a.createElement("title",null,e("ExplorePage.title"))),k&&b?a.createElement(x,{className:"joyride-explorer-crumbs",style:{padding:"15px 0 10px"},cid:B.cid,pathBoundaries:k,localPath:v}):a.createElement("div",{style:{height:54}}),a.createElement("div",{className:"dt-l dt--fixed"},a.createElement("div",{className:"dtc-l w-100 w-two-thirds-l pr3-l v-top"},a.createElement(d,{error:y}),b?a.createElement(g.Ay,{className:"joyride-explorer-node",style:{background:"#FBFBFB"},cid:b.cid,localPath:v,size:b.size,links:b.links,data:b.data,type:b.type,format:b.format,onLinkClick:s,gatewayUrl:h,publicGatewayUrl:E}):null,y||b?null:a.createElement(N.A,{pastDelay:!0})),a.createElement("div",{className:"dtc-l w-third-l v-top pt3 pt0-l"},b?a.createElement(o.A,{className:"joyride-explorer-cid",style:{background:"#FBFBFB",overflow:"hidden"},cid:b.cid}):null,b?a.createElement(i.A,null,a.createElement(m.A,{className:"joyride-explorer-graph",style:{width:"100%",height:300},path:b.cid,links:b.links,onNodeClick:s})):null)),a.createElement(c.Ay,{run:p,steps:w.o.getSteps({t:e}),styles:w.o.styles,callback:u,continuous:!0,scrollToFirstStep:!0,showProgress:!0}))}}const B=(0,s.N)("selectExplore","selectExploreIsLoading","selectExplorePathFromHash","doExploreLink",(0,n.CI)("explore")(k))}}]);
//# sourceMappingURL=193.2c9f518d.chunk.js.map