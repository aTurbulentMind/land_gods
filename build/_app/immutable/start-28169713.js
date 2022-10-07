import{n as we,s as Ze,S as nt,i as rt,a as at,e as B,c as st,b as G,g as ce,t as z,d as fe,f as J,h as F,j as ot,o as Ee,k as it,l as lt,m as ct,p as ye,q,r as ft,u as ut,v as dt,w as M,x as $e,y as X,z as Y,A as Je}from"./chunks/index-5fb556b8.js";const pt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ht=function(n,e){return new URL(n,e).href},Fe={},x=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ht(s,o),s in Fe)return;Fe[s]=!0;const u=s.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const l=document.createElement("link");if(l.rel=u?"stylesheet":pt,u||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),u)return new Promise((_,p)=>{l.addEventListener("load",_),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function mt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function _t(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(n,e){const t=new URL(n);for(const o of gt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,u)=>u(n,s),yt(t),t}function yt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const H=[];function Oe(n,e=we){let t;const o=new Set;function s(l){if(Ze(n,l)&&(n=l,t)){const _=!H.length;for(const p of o)p[1](),H.push(p,n);if(_){for(let p=0;p<H.length;p+=2)H[p][0](H[p+1]);H.length=0}}}function u(l){s(l(n))}function r(l,_=we){const p=[l,_];return o.add(p),o.size===1&&(t=e(s)||we),l(n),()=>{o.delete(p),o.size===0&&(t(),t=null)}}return{set:s,update:u,subscribe:r}}let Ke="",et="";function bt(n){Ke=n.base,et=n.assets||Ke}function Ge(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function ke(){return{x:pageXOffset,y:pageYOffset}}function We(n){let e,t=null,o=null,s=null;for(const r of n.composedPath())r instanceof Element&&(!e&&r.nodeName.toUpperCase()==="A"&&(e=r),t===null&&(t=be(r,"data-sveltekit-noscroll")),o===null&&(o=be(r,"data-sveltekit-prefetch")),s===null&&(s=be(r,"data-sveltekit-reload")));const u=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:u,options:{noscroll:t,prefetch:o,reload:s}}}function be(n,e){const t=n.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function He(n){const e=Oe(n);let t=!0;function o(){t=!0,e.update(r=>r)}function s(r){t=!1,e.set(r)}function u(r){let l;return e.subscribe(_=>{(l===void 0||t&&_!==l)&&r(l=_)})}return{notify:o,set:s,subscribe:u}}function vt(){const{set:n,subscribe:e}=Oe(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${et}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:u}=await s.json(),r=u!=="1665181404155";return r&&(n(!0),clearTimeout(t)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}function Et(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Pe=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;le.delete(o)}return Pe(n,e)};const le=new Map;function kt(n,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${Et(t.body)}"]`);const u=document.querySelector(s);if(u!=null&&u.textContent){const{body:r,...l}=JSON.parse(u.textContent),_=u.getAttribute("data-ttl");return _&&le.set(e,{body:r,init:l,ttl:1e3*Number(_)}),Promise.resolve(new Response(r,l))}return Pe(n,t)}function Rt(n,e){const t=le.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(n)}return Pe(n,e)}const St=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function Lt(n){const e=[],t=[];let o=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter($t).map((u,r,l)=>{const _=decodeURIComponent(u),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const y=r===l.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const j=St.exec($);if(!j)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,V,D]=j;return e.push(V),t.push(D),N?"(.*?)":"([^/]+?)"}return y&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function $t(n){return!/^\([^)]+\)$/.test(n)}function Ot(n,e,t,o){const s={};for(let u=0;u<e.length;u+=1){const r=e[u],l=t[u],_=n[u+1]||"";if(l){const p=o[l];if(!p)throw new Error(`Missing "${l}" param matcher`);if(!p(_))return}s[r]=_}return s}function Pt(n,e,t,o){const s=new Set(e);return Object.entries(t).map(([l,[_,p,y]])=>{const{pattern:$,names:R,types:j}=Lt(l),N={id:l,exec:V=>{const D=$.exec(V);if(D)return Ot(D,R,j,o)},errors:[1,...y||[]].map(V=>n[V]),layouts:[0,...p||[]].map(r),leaf:u(_)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function u(l){const _=l<0;return _&&(l=~l),[_,n[l]]}function r(l){return l===void 0?l:[s.has(l),n[l]]}}function At(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return s&&(e=new s(u(n))),{c(){e&&M(e.$$.fragment),t=B()},l(r){e&&$e(e.$$.fragment,r),t=B()},m(r,l){e&&X(e,r,l),G(r,t,l),o=!0},p(r,l){const _={};if(l&4&&(_.data=r[2]),l&2&&(_.form=r[1]),s!==(s=r[0][0])){if(e){ce();const p=e;z(p.$$.fragment,1,0,()=>{Y(p,1)}),fe()}s?(e=new s(u(r)),M(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&J(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Ut(n){let e,t,o;var s=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[It]},$$scope:{ctx:r}}}}return s&&(e=new s(u(n))),{c(){e&&M(e.$$.fragment),t=B()},l(r){e&&$e(e.$$.fragment,r),t=B()},m(r,l){e&&X(e,r,l),G(r,t,l),o=!0},p(r,l){const _={};if(l&4&&(_.data=r[2]),l&523&&(_.$$scope={dirty:l,ctx:r}),s!==(s=r[0][0])){if(e){ce();const p=e;z(p.$$.fragment,1,0,()=>{Y(p,1)}),fe()}s?(e=new s(u(r)),M(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&J(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&F(t),e&&Y(e,r)}}}function It(n){let e,t,o;var s=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return s&&(e=new s(u(n))),{c(){e&&M(e.$$.fragment),t=B()},l(r){e&&$e(e.$$.fragment,r),t=B()},m(r,l){e&&X(e,r,l),G(r,t,l),o=!0},p(r,l){const _={};if(l&8&&(_.data=r[3]),l&2&&(_.form=r[1]),s!==(s=r[0][1])){if(e){ce();const p=e;z(p.$$.fragment,1,0,()=>{Y(p,1)}),fe()}s?(e=new s(u(r)),M(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(_)},i(r){o||(e&&J(e.$$.fragment,r),o=!0)},o(r){e&&z(e.$$.fragment,r),o=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Me(n){let e,t=n[5]&&Xe(n);return{c(){e=it("div"),t&&t.c(),this.h()},l(o){e=lt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ct(e);t&&t.l(s),s.forEach(F),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(o,s){G(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Xe(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&F(e),t&&t.d()}}}function Xe(n){let e;return{c(){e=ft(n[6])},l(t){e=ut(t,n[6])},m(t,o){G(t,e,o)},p(t,o){o&64&&dt(e,t[6])},d(t){t&&F(e)}}}function Tt(n){let e,t,o,s,u;const r=[Ut,At],l=[];function _(y,$){return y[0][1]?0:1}e=_(n),t=l[e]=r[e](n);let p=n[4]&&Me(n);return{c(){t.c(),o=at(),p&&p.c(),s=B()},l(y){t.l(y),o=st(y),p&&p.l(y),s=B()},m(y,$){l[e].m(y,$),G(y,o,$),p&&p.m(y,$),G(y,s,$),u=!0},p(y,[$]){let R=e;e=_(y),e===R?l[e].p(y,$):(ce(),z(l[R],1,1,()=>{l[R]=null}),fe(),t=l[e],t?t.p(y,$):(t=l[e]=r[e](y),t.c()),J(t,1),t.m(o.parentNode,o)),y[4]?p?p.p(y,$):(p=Me(y),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i(y){u||(J(t),u=!0)},o(y){z(t),u=!1},d(y){l[e].d(y),y&&F(o),p&&p.d(y),y&&F(s)}}}function jt(n,e,t){let{stores:o}=e,{page:s}=e,{components:u}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;ot(o.page.notify);let p=!1,y=!1,$=null;return Ee(()=>{const R=o.page.subscribe(()=>{p&&(t(5,y=!0),t(6,$=document.title||"untitled page"))});return t(4,p=!0),R}),n.$$set=R=>{"stores"in R&&t(7,o=R.stores),"page"in R&&t(8,s=R.page),"components"in R&&t(0,u=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,l=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&o.page.set(s)},[u,r,l,_,p,y,$,o,s]}class Dt extends nt{constructor(e){super(),rt(this,e,jt,Tt,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Nt={},ue=[()=>x(()=>import("./chunks/0-8e96b2e2.js"),["chunks\\0-8e96b2e2.js","components\\pages\\_layout.svelte-e885cacc.js","assets\\_layout-c9bd5644.css","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/1-91f8c78e.js"),["chunks\\1-91f8c78e.js","components\\pages\\_error.svelte-3b58a7d2.js","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/2-cf87e1c2.js"),["chunks\\2-cf87e1c2.js","components\\pages\\_page.svelte-88a65e1f.js","assets\\_page-fb4ac3c3.css","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/3-18a9a353.js"),["chunks\\3-18a9a353.js","components\\pages\\contact\\_page.svelte-859b44c0.js","assets\\_page-87e41196.css","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/4-7783e895.js"),["chunks\\4-7783e895.js","components\\pages\\gallery\\_page.svelte-c51815ed.js","assets\\_page-b5f36377.css","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/5-2b2bd3f4.js"),["chunks\\5-2b2bd3f4.js","components\\pages\\services\\_page.svelte-a63ea4ac.js","assets\\_page-fe6bb5f6.css","chunks\\index-5fb556b8.js"],import.meta.url),()=>x(()=>import("./chunks/6-96c854c3.js"),["chunks\\6-96c854c3.js","components\\pages\\testim\\_page.svelte-43a04702.js","assets\\_page-638b2f65.css","chunks\\index-5fb556b8.js"],import.meta.url)],Vt=[],qt={"":[2],contact:[3],gallery:[4],services:[5],testim:[6]},Ct={handleError:({error:n})=>{console.error(n)}};class Re{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,t){this.status=e,this.location=t}}function xt(n){n.client}const K={url:He({}),page:He({}),navigating:Oe(null),updated:vt()},Bt="/__data.js";async function zt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,s])=>[o,await s])));return n}const tt="sveltekit:scroll",C="sveltekit:index",se=Pt(ue,Vt,qt,Nt),Se=ue[0],Le=ue[1];Se();Le();let te={};try{te=JSON.parse(sessionStorage[tt])}catch{}function ve(n){te[n]=ke()}function Jt({target:n,base:e,trailing_slash:t}){var xe;const o=[];let s=null;const u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},l=!1,_=!1,p=!0,y=!1,$=!1,R,j=(xe=history.state)==null?void 0:xe[C];j||(j=Date.now(),history.replaceState({...history.state,[C]:j},"",location.href));const N=te[j];N&&(history.scrollRestoration="manual",scrollTo(N.x,N.y));let V=!1,D,Ae,ne;async function Ue(){ne=ne||Promise.resolve(),await ne,ne=null;const a=new URL(location.href),f=me(a,!0);s=null,await Te(f,a,[])}async function de(a,{noscroll:f=!1,replaceState:d=!1,keepfocus:i=!1,state:c={}},h,m){return typeof a=="string"&&(a=new URL(a,Ge(document))),_e({url:a,scroll:f?ke():null,keepfocus:i,redirect_chain:h,details:{state:c,replaceState:d},nav_token:m,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ie(a){const f=me(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:f.id,promise:Ne(f)},s.promise}async function Te(a,f,d,i,c={},h){var E,v;Ae=c;let m=a&&await Ne(a);if(m||(m=await Ce(f,null,ee(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Ae!==c)return!1;if(m.type==="redirect")if(d.length>10||d.includes(f.pathname))m=await re({status:500,error:ee(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return de(new URL(m.location,f).href,{},[...d,f.pathname],c),!1;else((v=(E=m.props)==null?void 0:E.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await ae(f);if(o.length=0,$=!1,y=!0,i&&i.details){const{details:w}=i,b=w.replaceState?0:1;w.state[C]=j+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",f)}if(s=null,_){r=m.state,m.props.page&&(m.props.page.url=f);const w=ie();R.$set(m.props),w()}else je(m);if(i){const{scroll:w,keepfocus:b}=i;if(!b){const S=document.body,O=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var P;(P=getSelection())==null||P.removeAllRanges()}),O!==null?S.setAttribute("tabindex",O):S.removeAttribute("tabindex")}if(await Je(),p){const S=f.hash&&document.getElementById(f.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Je();p=!0,m.props.page&&(D=m.props.page),h&&h(),y=!1}function je(a){var c,h;r=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),D=a.props.page;const d=ie();R=new Dt({target:n,props:{...a.props,stores:K},hydrate:!0}),d();const i={from:null,to:oe("to",{params:r.params,routeId:(h=(c=r.route)==null?void 0:c.id)!=null?h:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(m=>m(i)),_=!0}async function Q({url:a,params:f,branch:d,status:i,error:c,route:h,form:m}){var O;const E=d.filter(Boolean),v={type:"loaded",state:{url:a,params:f,branch:d,error:c,route:h},props:{components:E.map(P=>P.node.component)}};m!==void 0&&(v.props.form=m);let w={},b=!D;for(let P=0;P<E.length;P+=1){const I=E[P];w={...w,...I.data},(b||!r.branch.some(T=>T===I))&&(v.props[`data_${P}`]=w,b=b||Object.keys((O=I.data)!=null?O:{}).length>0)}if(b||(b=Object.keys(D.data).length!==Object.keys(w).length),!r.url||a.href!==r.url.href||r.error!==c||m!==void 0||b){v.props.page={error:c,params:f,routeId:h&&h.id,status:i,url:a,form:m,data:b?w:D.data};const P=(I,T)=>{Object.defineProperty(v.props.page,I,{get:()=>{throw new Error(`$page.${I} has been replaced by $page.url.${T}`)}})};P("origin","origin"),P("path","pathname"),P("query","searchParams")}return v}async function pe({loader:a,parent:f,url:d,params:i,routeId:c,server_data_node:h}){var w,b,S,O,P;let m=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await a();if((w=v.shared)!=null&&w.load){let I=function(...L){for(const g of L){const{href:k}=new URL(g,d);E.dependencies.add(k)}};const T={routeId:c,params:new Proxy(i,{get:(L,g)=>(E.params.add(g),L[g])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:wt(d,()=>{E.url=!0}),async fetch(L,g){let k;L instanceof Request?(k=L.url,g={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...g}):k=L;const U=new URL(k,d).href;return I(U),_?Rt(U,g):kt(k,U,g)},setHeaders:()=>{},depends:I,parent(){return E.parent=!0,f()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(S=await v.shared.load.call(null,T))!=null?S:null,m=m?await zt(m):null}return{node:v,loader:a,server:h,shared:(O=v.shared)!=null&&O.load?{type:"data",data:m,uses:E}:null,data:(P=m!=null?m:h==null?void 0:h.data)!=null?P:null}}function De(a,f,d,i){if($)return!0;if(!d)return!1;if(d.parent&&f||d.url&&a)return!0;for(const c of d.params)if(i[c]!==r.params[c])return!0;for(const c of d.dependencies)if(o.some(h=>h(new URL(c))))return!0;return!1}function he(a,f){var d,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function Ne({id:a,invalidating:f,url:d,params:i,route:c}){var L;if((s==null?void 0:s.id)===a)return s.promise;const{errors:h,layouts:m,leaf:E}=c,v=[...m,E];h.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const b=r.url?a!==r.url.pathname+r.url.search:!1,S=v.reduce((g,k,U)=>{var Z;const A=r.branch[U],W=!!(k!=null&&k[0])&&((A==null?void 0:A.loader)!==k[1]||De(b,g.some(Boolean),(Z=A.server)==null?void 0:Z.uses,i));return g.push(W),g},[]);if(S.some(Boolean)){try{w=await Qe(d,S)}catch(g){return re({status:500,error:ee(g,{url:d,params:i,routeId:c.id}),url:d,routeId:c.id})}if(w.type==="redirect")return w}const O=w==null?void 0:w.nodes;let P=!1;const I=v.map(async(g,k)=>{var Z;if(!g)return;const U=r.branch[k],A=O==null?void 0:O[k];if((!A||A.type==="skip")&&g[1]===(U==null?void 0:U.loader)&&!De(b,P,(Z=U.shared)==null?void 0:Z.uses,i))return U;if(P=!0,(A==null?void 0:A.type)==="error")throw A;return pe({loader:g[1],url:d,params:i,routeId:c.id,parent:async()=>{var ze;const Be={};for(let ge=0;ge<k;ge+=1)Object.assign(Be,(ze=await I[ge])==null?void 0:ze.data);return Be},server_data_node:he(A===void 0&&g[0]?{type:"skip"}:A!=null?A:null,U==null?void 0:U.server)})});for(const g of I)g.catch(()=>{});const T=[];for(let g=0;g<v.length;g+=1)if(v[g])try{T.push(await I[g])}catch(k){if(k instanceof Ye)return{type:"redirect",location:k.location};let U=500,A;O!=null&&O.includes(k)?(U=(L=k.status)!=null?L:U,A=k.error):k instanceof Re?(U=k.status,A=k.body):A=ee(k,{params:i,url:d,routeId:c.id});const W=await Ve(g,T,h);return W?await Q({url:d,params:i,branch:T.slice(0,W.idx).concat(W.node),status:U,error:A,route:c}):await Ce(d,c.id,A,U)}else T.push(void 0);return await Q({url:d,params:i,branch:T,status:200,error:null,route:c,form:f?void 0:null})}async function Ve(a,f,d){for(;a--;)if(d[a]){let i=a;for(;!f[i];)i-=1;try{return{idx:i+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function re({status:a,error:f,url:d,routeId:i}){var w;const c={},h=await Se();let m=null;if(h.server)try{const b=await Qe(d,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(w=b.nodes[0])!=null?w:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||l)&&await ae(d)}const E=await pe({loader:Se,url:d,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(m)}),v={node:await Le(),loader:Le,shared:null,server:null,data:null};return await Q({url:d,params:c,branch:[E,v],status:a,error:f,route:null})}function me(a,f){if(qe(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const i of se){const c=i.exec(d);if(c){const h=new URL(a.origin+mt(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:f,route:i,params:_t(c),url:h}}}}function qe(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function _e({url:a,scroll:f,keepfocus:d,redirect_chain:i,details:c,type:h,delta:m,nav_token:E,accepted:v,blocked:w}){var I,T,L,g;let b=!1;const S=me(a,!1),O={from:oe("from",{params:r.params,routeId:(T=(I=r.route)==null?void 0:I.id)!=null?T:null,url:r.url}),to:oe("to",{params:(L=S==null?void 0:S.params)!=null?L:null,routeId:(g=S==null?void 0:S.route.id)!=null?g:null,url:a}),type:h};m!==void 0&&(O.delta=m);const P={...O,cancel:()=>{b=!0}};if(u.before_navigate.forEach(k=>k(P)),b){w();return}ve(j),v(),_&&K.navigating.set(O),await Te(S,a,i,{scroll:f,keepfocus:d,details:c},E,()=>{u.after_navigate.forEach(k=>k(O)),K.navigating.set(null)})}async function Ce(a,f,d,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await re({status:i,error:d,url:a,routeId:f}):await ae(a)}function ae(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Ee(()=>(u.after_navigate.push(a),()=>{const f=u.after_navigate.indexOf(a);u.after_navigate.splice(f,1)}))},before_navigate:a=>{Ee(()=>(u.before_navigate.push(a),()=>{const f=u.before_navigate.indexOf(a);u.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(y||!_)&&(p=!1)},goto:(a,f={})=>de(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:f}=new URL(a,location.href);o.push(d=>d.href===f)}return Ue()},invalidateAll:()=>($=!0,Ue()),prefetch:async a=>{const f=new URL(a,Ge(document));await Ie(f)},prefetch_routes:async a=>{const d=(a?se.filter(i=>a.some(c=>i.exec(c))):se).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:d,route:i}=r;if(!i)return;const c=await Ve(r.branch.length,d,i.errors);if(c){const h=await Q({url:f,params:r.params,branch:d.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});r=h.state;const m=ie();R.$set(h.props),m()}}else if(a.type==="redirect")de(a.location,{},[]);else{const f={form:a.data,page:{...D,form:a.data,status:a.status}},d=ie();R.$set(f),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var m,E;let c=!1;const h={from:oe("from",{params:r.params,routeId:(E=(m=r.route)==null?void 0:m.id)!=null?E:null,url:r.url}),to:null,type:"unload",cancel:()=>c=!0};u.before_navigate.forEach(v=>v(h)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ve(j);try{sessionStorage[tt]=JSON.stringify(te)}catch{}}});const a=i=>{const{url:c,options:h}=We(i);if(c&&h.prefetch){if(qe(c))return;Ie(c)}};let f;const d=i=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:h,options:m}=We(i);if(!c||!h)return;const E=c instanceof SVGAElement;if(!E&&!(h.protocol==="https:"||h.protocol==="http:"))return;const v=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||v.includes("external")||m.reload||(E?c.target.baseVal:c.target))return;const[w,b]=h.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){V=!0,ve(j),r.url=h,K.page.set({...D,url:h}),K.page.notify();return}_e({url:h,scroll:m.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===j)return;const c=i.state[C]-j;_e({url:new URL(location.href),scroll:te[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:d,params:i,routeId:c,data:h,form:m})=>{var w;l=!0;const E=new URL(location.href);let v;try{const b=d.map(async(S,O)=>{const P=h[O];return pe({loader:ue[S],url:E,params:i,routeId:c,parent:async()=>{const I={};for(let T=0;T<O;T+=1)Object.assign(I,(await b[T]).data);return I},server_data_node:he(P)})});v=await Q({url:E,params:i,branch:await Promise.all(b),status:a,error:f,form:m,route:(w=se.find(S=>S.id===c))!=null?w:null})}catch(b){if(b instanceof Ye){await ae(new URL(b.location,location.href));return}v=await re({status:b instanceof Re?b.status:500,error:ee(b,{url:E,params:i,routeId:c}),url:E,routeId:c})}je(v)}}}let Ft=1;async function Qe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Bt,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Ft++)),await x(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function ee(n,e){var t;return n instanceof Re?n.body:(t=Ct.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function oe(n,e){for(const t of Kt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function ie(){return()=>{}}async function Wt({env:n,hydrate:e,paths:t,target:o,trailing_slash:s}){bt(t);const u=Jt({target:o,base:t.base,trailing_slash:s});xt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Wt as start};
