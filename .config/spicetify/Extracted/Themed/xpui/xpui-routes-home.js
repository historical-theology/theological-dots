(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[807,219],{74105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HOME_REFRESH_TIMEOUT:()=>S,default:()=>A});var a=n(27378),r=n.n(a),c=n(60042),l=n.n(c),s=n(35988),o=n.n(s),i=n(71338),u=n(15941),m=n(79308),d=n(57741),f=n(69394),E=n(53089),p=n(50760),b=n(88706),y=n(24827);const g=()=>(0,E.Sq)(p.Jw)===p.pF.ONHOME?r().createElement(y.w,null,r().createElement(b.M,{onSearch:!1})):null;var v=n(18308),h=n(23301),k=n(60858),w=n(61043),C=n(41056),O=n(96415),P=n(37813),_=n(2146),L=n(25033),T=n(76134),I=n(1287),N=n(50641);const M=e=>e.entities.views[N.Y]||null,S=18e5,A=r().memo((()=>{const{isAnonymous:e}=(0,m.v9)(_.Gg),t=(0,m.v9)(d.r),n=(0,m.v9)(M),{currentlyPlayingUri:c="",isPlaybackPlaying:s=!1}=(0,m.v9)(O.dO)||{},E=(0,m.I0)(),p=(0,C.k6)(),b=!!n,y=(null==n?void 0:n.timestamp)||0;(0,a.useEffect)((()=>{const e=(0,T.ZO)()===I.W.Desktop;(0,L.M)().send(o()({desktop_type:"clientx",is_desktop:e}))}),[]);const A=(0,a.useCallback)((()=>{t&&E((0,u.MM)(N.Y,t))}),[t,E]);(0,a.useEffect)((()=>{b&&"POP"===p.action||A(),E((0,i.Dk)())}),[p.action,E,b,A]),(0,a.useEffect)((()=>{const e=()=>{Date.now()>y+S&&A()};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}),[y,A]);const D=(0,a.useMemo)((()=>({currentlyPlayingUri:c,isPlaybackPlaying:s,playContext:e=>E(h.nh(e)),pause:()=>E(h.wO()),resume:()=>E(h.v4())})),[E,c,s]),U=null==n?void 0:n.content.items;return r().createElement(v.CF.Provider,{value:D},r().createElement(a.Suspense,{fallback:null},r().createElement(g,null)),n?r().createElement("section",null,r().createElement("div",{className:f.Z.home},r().createElement("div",{className:l()(f.Z.content,"contentSpacing")},r().createElement(P.c,{spaces:U,viewName:n.name,viewId:N.Y,isAnonymous:e})))):r().createElement(k.h,{errorMessage:w.ag.get("error.not_found.title.page")}))}))},37813:(e,t,n)=>{"use strict";n.d(t,{c:()=>be});var a=n(65526),r=n.n(a),c=n(27378),l=n.n(c),s=n(26855),o=n(45127),i=n(7593),u=n(29467),m=n(50641),d=n(60042),f=n.n(d);const E="view-homeShortcutsGrid-shortcuts",p="view-homeShortcutsGrid-grid",b="view-homeShortcutsGrid-shortcutLink",y="view-homeShortcutsGrid-shortcut",g="view-homeShortcutsGrid-draggable",v="view-homeShortcutsGrid-imageContainer",h="view-homeShortcutsGrid-imageWrapper",k="view-homeShortcutsGrid-image",w="view-homeShortcutsGrid-fallbackWrapper",C="view-homeShortcutsGrid-main",O="view-homeShortcutsGrid-name",P="view-homeShortcutsGrid-PlayButtonContainer",_="view-homeShortcutsGrid-PlayButtonContainerVisible";var L=n(53177),T=n(86344),I=n(52933),N=n(3045),M=n(79153),S=n(34514),A=n(55951),D=n(2398),U=n.n(D),x=n(61043),j=n(66917),B=n.n(j),F=n(91580),W=n(80936),Y=n(90453),H=n(12548),J=n(21114),R=n(33102),Z=n(41056),q=n(11111),G=n(45624),V=n(39551),z=n(30245),Q=n(98417),$=n(18308),K=n(65821),X=n(21483);const ee=l().memo((({images:e=[],fallbackIcon:t=F.e})=>{const n=(0,K.Z)(e),a=null!=n&&n.url?h:w;return l().createElement("div",{className:v},l().createElement("div",{className:a},l().createElement(X.E,{className:k,src:null==n?void 0:n.url,loading:"lazy",testid:"shortcut-image"},l().createElement(t,{"aria-hidden":!0}))))}));var te=n(97060);const ne=l().memo((({item:e,fallbackIcon:t,showPlayButton:n,onContextMenu:a=(()=>{}),onTouchStart:r=(()=>{}),onTouchEnd:s=(()=>{})})=>{const o=(0,Z.k6)(),i=(0,q.o)(),{setColorFromUri:u,resetColor:m}=(0,te.WQ)(),{currentlyPlayingUri:d,isPlaybackPlaying:E,playContext:p,pause:v,resume:h}=(0,c.useContext)($.CF),k=(0,Q.B6)(d,e.uri);const w=Boolean(E&&k),T=(0,c.useCallback)((()=>{i({targetUri:e.uri,intent:"navigate",type:"click"}),o.push(B().from(e.uri).toURLPath(!0))}),[o,e.uri,i]),I=(0,c.useCallback)((()=>{u(e.uri)}),[e.uri,u]);return l().createElement("div",{className:y,onContextMenu:a,onTouchStart:r,onTouchEnd:s,onMouseEnter:I,onMouseLeave:m,onFocus:I,onBlur:m},l().createElement(G.Z,{uri:e.uri,text:e.name,extraClassName:g},l().createElement(ee,{images:e.images,fallbackIcon:t}),l().createElement("div",{className:C},l().createElement(z.r,{to:e.uri,onClick:T,title:e.name},l().createElement(L.Dy.p,{variant:L.Dy.balladBold,className:O},e.name)),n&&l().createElement("div",{className:f()(P,{[_]:w})},l().createElement(V.JM,{size:V.qE.sm,isPlaying:w,onClick:function(){i({targetUri:e.uri,intent:Boolean(E&&k)?"pause":"play",type:"click"}),k?E?v():h():p(e.uri)}}))),l().createElement("div",{onClick:T,className:b})))}));var ae=n(92394),re=n(25118),ce=n(45572);const le=l().memo((e=>l().createElement(J._,{menu:l().createElement(R.X,{uri:e.item.uri})},l().createElement(ne,U()({},e,{fallbackIcon:F.e}))))),se=l().memo((e=>l().createElement(J._,{menu:l().createElement(ae.Y,{uri:e.item.uri})},l().createElement(ne,U()({},e,{fallbackIcon:W.u}))))),oe=l().memo((e=>l().createElement(J._,{menu:l().createElement(re.m,{uri:e.item.uri})},l().createElement(ne,U()({},e,{fallbackIcon:Y.i}))))),ie=l().memo((e=>l().createElement(J._,{menu:l().createElement(ce.M,{uri:e.item.uri})},l().createElement(ne,U()({},e,{fallbackIcon:H.n})))));var ue=n(56958);const me=l().memo((({tagline:e,items:t})=>{const{fetchMultipleColors:n}=(0,te.WQ)(),[a,r]=(0,c.useState)(270),s=!(0,ue.k)(),o=(0,c.useRef)(null),i=(()=>{const e=(new Date).getHours();let t=x.ag.get("home.evening");return e>0&&e<12?t=x.ag.get("home.morning"):e<18&&(t=x.ag.get("home.afternoon")),t})(),u=(0,c.useCallback)((()=>{const e=o.current;if(null==e||!e.parentElement)return;const t=(n=e.parentElement.offsetWidth)<700?240:n>=700&&n<1400?270:300;var n;t!==a&&r(t)}),[a]);(0,A.a)((()=>{u()})),(0,c.useLayoutEffect)((()=>{u()})),(0,c.useEffect)((()=>{const e=(null==t?void 0:t.map(te.lh))||[];n(e)}),[t,n]);const m=(0,c.useCallback)(((e,n)=>{if(null==t||!t.length)return null;const a=n>=270;return l().createElement(l().Fragment,null,t.filter(((t,n)=>n<2*e)).map(((e,t)=>{const n=function(e){const t=(B().from(e)||{}).type;switch(t){case B().Type.ARTIST:return oe;case B().Type.ALBUM:case B().Type.COLLECTION_ALBUM:return se;case B().Type.PLAYLIST:case B().Type.PLAYLIST_V2:return le;case B().Type.SHOW:return ie;case B().Type.COLLECTION:return le;default:return console.warn(`Unable to resolve entity shortcut from ${e} of type "${t||"unknown"}"`),ie}}(e.uri);return l().createElement(n,{key:e.id,item:e,showPlayButton:a,shouldSetBackgroundColor:0===t})})))}),[t]);return s||null==t||!t.length?null:l().createElement("section",{className:E,"aria-label":i,ref:o},l().createElement(N.r,{title:i,titleVariant:L.Dy.alto,tagline:e}),l().createElement(M.T,{className:f()(p),columnAware:!0,render:m,minimumColumnWidth:a,rowGap:S.spacer16}))})),de=(0,T.P)(me,(()=>null),(e=>(0,I.v)({from:"HomeShortcutsGrid",error:e})));var fe=n(47050);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const be=({spaces:e,viewName:t,viewId:n,isAnonymous:a})=>{const r=(0,c.useCallback)((e=>{const t=((e,t)=>{let{uri:n}=e;return e.href.includes("https://api.spotify.com/v1/views/")&&(n=e.href.replace("https://api.spotify.com/v1/views/","spotify:genre:"),n.endsWith("-page")||(n+="-page"),"hub-browse-grid"===t&&(n=n.replace(":view:",":genre:"))),n})(e,n),a=(0,u.U)(t);return l().createElement(a,{key:e.href,entity:pe(pe({},e),{},{uri:t})})}),[n]),d=(0,c.useCallback)(((e,t)=>{const n=(0,u.U)(e.uri);return l().createElement(i.JL,{key:e.uri||t,value:"card",index:t},l().createElement(n,{entity:e}))}),[]),f=(0,c.useCallback)(((e,t)=>{switch(e.type){case"link":return r(e);default:return d(e,t)}}),[d,r]),E=(0,c.useCallback)((e=>!((e=>"HEADER"===e.rendering)(e)||0===e.content.total||a&&"uniquely-yours-shelf"===e.id)),[a]);return e&&0!==e.length?e[0].content?l().createElement(l().Fragment,null,e.filter(E).map(((e,t)=>{const a=e.content&&(0,s.pL)((0,s.SK)(e.href));return e.id===o.RECENTLY_PLAYED_VIEW_ID||e.id===m.u?l().createElement(i.JL,{value:"headered-grid",index:t,key:e.id},l().createElement(o.default,{showAll:!1})):"shortcuts"===e.id?l().createElement(i.JL,{value:"headered-grid",index:t,key:e.id},l().createElement(de,{items:e.content.items,title:e.name,tagline:e.tag_line})):l().createElement(i.JL,{value:"headered-grid",index:t,key:e.id},l().createElement(fe.P,{total:e.content.total,seeAllUri:a,pageId:n,title:e.name,tagline:e.tag_line||void 0},e.content.items.map(f)))}))):l().createElement(i.JL,{value:"headered-grid"},l().createElement(fe.P,{showAll:!0,title:t,total:(null==e?void 0:e.length)||0},null==e?void 0:e.map(f))):null}}}]);