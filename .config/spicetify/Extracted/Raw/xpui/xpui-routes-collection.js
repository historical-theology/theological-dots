(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[309],{15966:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Collection:()=>lt,default:()=>ct});var s=a(27378),n=a.n(s),l=a(79308),c=a(41056),r=a(61043);const o=(0,a(80406).P1)((e=>e.features),(e=>(null==e?void 0:e.enableShows)||!1));var i=a(71338),u=a(94212),d=a(24827),m=a(18308),E=a(72519),f=a(53520);var b=a(94578);const A=()=>{const e=function(){const[e,t]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,s.useContext)(m.VX),n=(0,E.y)((e=>{null!=e&&e.width&&t(e.width)}),250);return(0,f.y)({refOrElement:a,observeOnly:"width",onResize:n}),e}(),t=(0,l.v9)(o),a=(0,s.useMemo)((()=>[{title:r.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists"},...t?[{title:r.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:user:@:collection:podcasts"}]:[],{title:r.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:user:@:collection:artists"},{title:r.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:user:@:collection:albums"}]),[t]);return n().createElement(d.w,null,n().createElement(u.n,{className:b.Z.tabBar,links:a,windowSize:e}))};var p=a(93512),g=a(249),D=a(29088),h=a(5997),C=a(53177),y=a(33644),v=a(65526),T=a.n(v),S=a(66917),_=a.n(S),L=a(97186);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){T()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const O=e=>N(N({},e),{},{id:_().from(e.uri).getBase62Id(),external_urls:{spotify:""},href:"",images:e.images.map((e=>N(N({},e),{},{height:e.height,width:e.width})))}),R=e=>e.map(O),w=L.oT.ADDED_AT,I=L.oT.ADDED_AT,P=L.oT.ADDED_AT,x=L.oT.MOST_RELEVANT;var M=a(38533);const B="collection-searchBar-searchBar";var Q=a(77964),Y=a(48578),H=a(76190);const U=(0,s.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:L.oT.ADDED_AT}),j=n().memo((({uri:e,children:t,defaultSortOption:a})=>n().createElement(H.r,{uri:e,defaultState:a,sortContext:U},t))),Z=n().memo((({sortOptions:e})=>{const{sortState:t,setSortState:a}=(0,s.useContext)(U),l=(0,s.useCallback)((e=>{a(L.ei[e])}),[a]),c=e.map((e=>L.MY[e])),r=L.MY[t];return n().createElement(Y.A,{options:c,onSelect:l,selected:r})})),z=n().memo((({filterPlaceholder:e,sortOptions:t})=>{const a=(0,s.useContext)(y.H);return n().createElement("div",{className:B},null!=a&&a.getCapabilities().canFilter?n().createElement(Q.K,{placeholder:e}):null,null!=a&&a.getCapabilities().canSort?n().createElement(Z,{sortOptions:t}):null)}));function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){T()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const q=50;function $(e,t,a){const s=W({},a);return s.entities=t?e.items||[]:s.entities.concat(e.items||[]),s.total=e.totalLength,s.next=e.next,s}function V(e,t){const a=W({},t),s=t.entities.filter((t=>t.uri!==e));return a.total=(t.total||0)-(t.entities.length-s.length),a.entities=s,a}const X=e=>{const[t,a]=(0,s.useState)(null),n=(0,s.useCallback)((async()=>{if(!e)return;const t=await e();a((null==t?void 0:t.totalLength)||0)}),[e]);return(0,s.useEffect)((()=>{null===t&&n()}),[t,n]),{total:t}},J=()=>Promise.resolve({totalLength:0}),G={offset:0,limit:1};var K=a(60858),ee=a(62683);const te=n().memo((({nrArtists:e})=>{const t=(0,s.useContext)(y.H),{filter:a}=(0,s.useContext)(M.fo),{sortState:l}=(0,s.useContext)(U),c=(0,s.useRef)(!1),o=(0,s.useRef)({entities:[],total:e}),[i,u]=(0,s.useState)(0),d=(0,s.useCallback)((async(e,s,n=!1)=>{if(!c.current){c.current=!n;const r=await t.getArtists({offset:o.current.next||e,limit:s,filter:(0,L.$u)(a),sort:(0,L.e3)(l)});o.current=$(r,n,o.current),c.current=!1,u((e=>e+1))}}),[t,a,l]),m=(0,s.useCallback)((e=>{o.current=V(e,o.current),u((e=>e+1))}),[]);(0,s.useEffect)((()=>{d(0,q,!!i)}),[a,l]);const E=(0,s.useCallback)((()=>{o.current.entities.length!==o.current.total&&d(o.current.entities.length,q)}),[d]);return n().createElement(p.C,{onReachBottom:E},n().createElement("div",{className:b.Z.header},n().createElement(C.Dy,{as:"h1",variant:C.Dy.canon},r.ag.get("artists")),n().createElement(s.Suspense,{fallback:null},n().createElement(z,{filterPlaceholder:r.ag.get("collection.filter.artists"),sortOptions:L.o$}))),n().createElement(ee.Y,{onCollectionItemRemove:m},n().createElement(g.D,{entities:R(o.current.entities)})))})),ae=n().memo((()=>{const{total:e}=(()=>{const e=(0,s.useContext)(y.H),t=(0,s.useCallback)((()=>e?null==e?void 0:e.getArtists(G):J()),[e]);return X(t)})();return null===e?n().createElement(K.h,{errorMessage:r.ag.get("error.request-collection-artists-failure")}):e?n().createElement(te,{nrArtists:e}):n().createElement(D.u,{message:r.ag.get("collection.empty-page.artists-subtitle"),title:r.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:r.ag.get("collection.empty-page.artists-cta")},n().createElement(h.Z,{size:64,viewBox:"0 0 64 64"}))})),se=n().memo((()=>n().createElement(j,{uri:"collection/artists",defaultSortOption:I},n().createElement(M.hz,{uri:"collection/artists"},n().createElement(ae,null)))));var ne=a(8106);const le=n().memo((({nrAlbums:e})=>{const t=(0,s.useContext)(y.H),{filter:a}=(0,s.useContext)(M.fo),{sortState:l}=(0,s.useContext)(U),c=(0,s.useRef)(!1),o=(0,s.useRef)({entities:[],total:e}),[i,u]=(0,s.useState)(0),d=(0,s.useCallback)((async(e,s,n=!1)=>{if(!c.current){c.current=!n;const r=await t.getAlbums({offset:e,limit:s,filter:(0,L.$u)(a),sort:(0,L.Aq)(l)});o.current=$(r,n,o.current),c.current=!1,u((e=>e+1))}}),[t,a,l,o]),m=(0,s.useCallback)((e=>{o.current=V(e,o.current),u((e=>e+1))}),[]);(0,s.useEffect)((()=>{d(0,q,!!i)}),[a,l]);const E=(0,s.useCallback)((()=>{o.current.entities.length!==o.current.total&&d(o.current.entities.length,q)}),[d,o]);return n().createElement(p.C,{onReachBottom:E},n().createElement("div",{className:b.Z.header},n().createElement(C.Dy,{as:"h1",variant:C.Dy.canon},r.ag.get("albums")),n().createElement(s.Suspense,{fallback:null},n().createElement(z,{filterPlaceholder:r.ag.get("collection.filter.albums"),sortOptions:L.Ru}))),n().createElement(ee.Y,{onCollectionItemRemove:m},n().createElement(g.D,{entities:R(o.current.entities)})))})),ce=n().memo((()=>{const{total:e}=(()=>{const e=(0,s.useContext)(y.H),t=(0,s.useCallback)((()=>e?null==e?void 0:e.getAlbums(G):J()),[e]);return X(t)})();return null===e?n().createElement(K.h,{errorMessage:r.ag.get("error.request-collection-albums-failure")}):e?n().createElement(le,{nrAlbums:e}):n().createElement(D.u,{linkTo:"/search",linkTitle:r.ag.get("collection.empty-page.albums-cta"),message:r.ag.get("collection.empty-page.albums-subtitle"),title:r.ag.get("collection.empty-page.albums-title")},n().createElement(ne.Z,null))})),re=n().memo((()=>n().createElement(j,{uri:"collection/albums",defaultSortOption:w},n().createElement(M.hz,{uri:"collection/albums"},n().createElement(ce,null)))));var oe=a(92416),ie=a(79153);const ue="bf37551e6974dfc6b7bc2307c4bc8d52-scss",de="c0ec2f96b66c40ff679d00a9a3efcad7-scss",me="c8be1d99e010290674ae85c8d9d96a71-scss",Ee="_24df3eea6a4b41d4baaf52acd7243281-scss",fe="_7142efc5e7627113e00b4ff1ff9dd4d6-scss",be="_36494467778d361ed8df8dc79cd8af11-scss";var Ae=a(54649),pe=a(4783);function ge(e,t=null){return Array.from(new Array(e).keys()).map((e=>n().createElement("div",{className:Ee,style:{width:t?`${t}ch`:void 0},key:e})))}const De=({entity:e={},onClick:t})=>{const a=(0,pe.MY)({limit:7}),{name:s="",uri:l=""}=e;return n().createElement(Ae.Z,{className:ue,onClick:t,headerText:s,uri:l,renderCardImage:()=>n().createElement("div",{className:de},n().createElement("div",{className:me},a?a.items.map((({uri:e,name:t,artists:[a]},s)=>n().createElement("span",{key:e},n().createElement("span",{className:be},s?" • ":""),n().createElement("span",{dir:"auto"},a.name),n().createElement("span",{dir:"auto",className:be},t)))):ge(3))),renderSubHeaderContent:()=>n().createElement("div",{className:fe},a?`${a.totalLength} ${s}`:ge(1,s.length))})};var he=a(47620),Ce=a(61104),ye=a(2620);const ve="collection-localFilesCardIcon-container",Te="collection-localFilesCardIcon-icon";var Se=a(49329);const _e=()=>n().createElement("div",{className:ve},n().createElement(Se.X,{className:Te}));var Le=a(31258),ke=a(24817),Ne=a(98417),Oe=a(23301),Re=a(8131),we=a(59908),Ie=a(85261);const Pe=function({entity:e}){const t=(0,he.ui)(),{name:a,uri:c,images:o}=e,i=(0,l.oR)(),u=(0,s.useRef)(null),d=(0,s.useRef)(!0),m=(0,s.useContext)(ke.t),f=(0,l.v9)((e=>(0,Ne.QL)(e,Re.bf)));(0,s.useEffect)((()=>(d.current=!0,()=>{d.current=!1})),[]);const{useNamespacedLocalStorage:b}=(0,s.useContext)(we.Xz),[A]=b(Ie.J,!1),p=(0,E.y)((async()=>{const e=i.getState(),t=(0,Ne.d6)(e,Re.bf);if((0,Ne.QL)(e,Re.bf))i.dispatch((0,Oe.wO)());else if(t)i.dispatch((0,Oe.v4)());else{if(!u.current){const e=await m.getContents();u.current=e.items}d&&i.dispatch((0,Oe.cV)(0,u.current,Re.bf))}}),Le.s_);return t.canFetchAllTracks&&A?n().createElement(Ce.Z,{delegatePlayback:!0,delegateLogging:!0,isPlaying:f,onPlay:p,headerText:a,uri:c,renderCardImage:()=>n().createElement(ye.x,{images:o,fallback:{Component:_e}}),renderSubHeaderContent:()=>n().createElement("span",null,r.ag.get("local-files.description"))}):null},xe=function(e){return n().createElement(s.Suspense,{fallback:null},n().createElement(Pe,e))};var Me=a(29467),Be=a(7593),Qe=a(92315),Ye=a(85104),He=a(2146),Ue=a(102),je=a(59960),Ze=a(26713);function ze(e){if((0,Ye.lU)(e)){return e.items.map(ze).reduce(((e,t)=>e.concat(t)),[])}return(0,Ye.no)(e)?[e]:[]}function Fe(e){return Boolean(e)}const We=n().memo((()=>{const e=(0,l.I0)(),t=(0,c.k6)(),{filter:a}=(0,s.useContext)(M.fo),{sortState:o}=(0,s.useContext)(U),i=(0,l.v9)(He.Gg).user,u=(0,Ue.Cu)({filter:(0,L.$u)(a),sort:(0,L.pT)(o),decorateImagesAndOwner:!0}),d=(0,s.useCallback)((()=>{u&&e((0,Ze.cg)(r.ag.get("playlist.new-default-name",(0,je.D)(u)),(({url:e})=>{t.push(e)})))}),[e,t,u]),m=(0,s.useCallback)((()=>{const e=a?[]:[(0,oe.I2)(i),(0,oe.gB)(i)].filter(Fe),t=null===u?[]:ze(u);return e.concat(t).map(((e,t)=>{const a=(s=e).id===oe.G?De:s.id===oe.nk?xe:(0,Me.U)(s.uri);var s;return n().createElement(Be.ZP,{key:e.uri,value:"card",index:t},n().createElement(a,{entity:e}))}))}),[u,i,a]);return null===u?n().createElement(K.h,{errorMessage:r.ag.get("error.request-current-user-playlists-failure")}):u.recursivePlaylistCount>0||a?n().createElement(n().Fragment,null,n().createElement("div",{className:b.Z.header},n().createElement(C.Dy,{as:"h1",variant:C.Dy.canon},r.ag.get("playlists")),n().createElement(s.Suspense,{fallback:null},n().createElement(z,{filterPlaceholder:r.ag.get("collection.filter.playlists"),sortOptions:L.w0}))),n().createElement(Be.ZP,{value:"EntitiesGrid"},n().createElement(ie.T,{render:m}))):n().createElement(D.u,{linkTitle:r.ag.get("collection.empty-page.playlists-cta"),onClick:d,title:r.ag.get("collection.empty-page.playlists-title"),message:r.ag.get("collection.empty-page.playlists-subtitle")},n().createElement(Qe.Z,null))})),qe=n().memo((()=>n().createElement(j,{uri:"collection/playlists",defaultSortOption:x},n().createElement(M.hz,{uri:"collection/playlists"},n().createElement(We,null)))));var $e=a(59843),Ve=(a(23615),a(15941)),Xe=a(57741),Je=a(26855),Ge=a(47050);class Ke extends s.PureComponent{componentDidMount(){const{entities:e,viewId:t,country:a}=this.props;a&&!e&&t&&this.requestContent(t,a)}componentDidUpdate(e){const{entities:t,viewId:a,country:s}=this.props,{viewId:n}=e;s&&!t&&a!==n&&this.requestContent(a,s)}requestContent(e,t){const{onRequestView:a}=this.props;a(e,t)}render(){const{entities:e,viewId:t,total:a,title:s}=this.props;return e?n().createElement(Ge.P,{title:s,total:a,seeAllUri:(0,Je.pL)(t)},e.map((e=>{const t=(0,Me.U)(e.uri);return n().createElement(t,{key:e.uri,entity:e})}))):null}}const et={onRequestView:Ve.MM},tt=((0,l.$j)((e=>{const t="ginger-audio-shows-top-20-web",{content:a={},name:s}=e.entities.views[t]||{},{total:n=0,items:l}=a;return{total:n,title:s,entities:l,viewId:t,country:(0,Xe.r)(e)}}),et)(Ke),n().memo((({nrShows:e})=>{const t=(0,s.useContext)(y.H),{filter:a}=(0,s.useContext)(M.fo),{sortState:l}=(0,s.useContext)(U),c=(0,s.useRef)(!1),o=(0,s.useRef)({entities:[],total:e}),[i,u]=(0,s.useState)(0),d=(0,s.useCallback)((async(e,s,n=!1)=>{if(!c.current){c.current=!n;const r=await t.getShows({offset:e,limit:s,filter:(0,L.$u)(a),sort:(0,L.EY)(l)});o.current=$(r,n,o.current),c.current=!1,u((e=>e+1))}}),[t,a,l,o]),m=(0,s.useCallback)((e=>{o.current=V(e,o.current),u((e=>e+1))}),[]);(0,s.useEffect)((()=>{d(0,q,!!i)}),[a,l]);const E=(0,s.useCallback)((()=>{o.current.entities.length!==o.current.total&&d(o.current.entities.length,q)}),[d,o]);return n().createElement(p.C,{onReachBottom:E},n().createElement("div",{className:b.Z.header},n().createElement(C.Dy,{as:"h1",variant:C.Dy.canon},r.ag.get("podcasts")),n().createElement(s.Suspense,{fallback:null},n().createElement(z,{filterPlaceholder:r.ag.get("collection.filter.podcasts"),sortOptions:L.a6}))),n().createElement(ee.Y,{onCollectionItemRemove:m},n().createElement(g.D,{entities:R(o.current.entities)})))}))),at=n().memo((()=>{const{total:e}=(()=>{const e=(0,s.useContext)(y.H),t=(0,s.useCallback)((()=>e?null==e?void 0:e.getShows(G):J()),[e]);return X(t)})();return null===e?n().createElement(K.h,{errorMessage:r.ag.get("error.request-collection-shows-failure")}):e?n().createElement(tt,{nrShows:e}):n().createElement("div",{className:"CollectionShowsContainer"},n().createElement(D.u,{linkTo:"/genre/podcasts-web",linkTitle:r.ag.get("collection.empty-page.shows-cta"),message:r.ag.get("collection.empty-page.shows-subtitle"),title:r.ag.get("collection.empty-page.shows-title")},n().createElement($e.Z,null)),n().createElement(Ke,null))})),st=n().memo((()=>n().createElement(j,{uri:"collection/podcasts",defaultSortOption:P},n().createElement(M.hz,{uri:"collection/podcasts"},n().createElement(at,null))))),nt=n().lazy((async()=>await a.e(246).then(a.bind(a,6103)))),lt=()=>{const e=(0,l.v9)(o),t=(0,l.I0)();return(0,s.useEffect)((()=>{t((0,i.Dk)(r.ag.get("collection.page-title")))}),[t]),n().createElement("section",{className:"contentSpacing"},n().createElement(c.AW,{path:"/collection/artists"},n().createElement(se,null)),n().createElement(c.AW,{path:"/collection/albums"},n().createElement(re,null)),n().createElement(c.AW,{path:"/collection/playlists"},n().createElement(qe,null)),e&&n().createElement(c.AW,{path:"/collection/podcasts"},n().createElement(st,null)),n().createElement(c.AW,{path:"/collection/music-downloads"},n().createElement(nt,null)),n().createElement(A,null))},ct=lt},29088:(e,t,a)=>{"use strict";a.d(t,{u:()=>b});var s=a(27378),n=a.n(s),l=a(60042),c=a.n(l),r=a(53177),o=a(35415);const i="x-emptyState-container",u="x-emptyState-renderInline",d="x-emptyState-button",m="x-emptyState-title",E="x-emptyState-subtitle";var f=a(53267);const b=n().memo((e=>{const{children:t,message:a,title:s,linkTitle:l,linkTo:b,onClick:A,renderInline:p=!1}=e,{isXSOnly:g,isSMOnly:D}=(0,f.e)(),h=g||D;return n().createElement("section",{className:c()(i,{[u]:p})},t,n().createElement(r.Dy.h1,{variant:h?r.Dy.cello:r.Dy.alto,className:m},s),n().createElement(r.Dy,{variant:h?r.Dy.mesto:r.Dy.ballad,className:E},a),l&&(b||A)&&n().createElement(o.z,{version:"secondary",className:d,linkTo:b,onClick:A},l))}))},77964:(e,t,a)=>{"use strict";a.d(t,{K:()=>f});var s=a(27378),n=a.n(s);const l={filterInputContainer:"x-filterBox-filterInputContainer",expanded:"x-filterBox-expanded",expandButton:"x-filterBox-expandButton",filterInput:"x-filterBox-filterInput",overlay:"x-filterBox-overlay",searchIconContainer:"x-filterBox-searchIconContainer",searchIcon:"x-filterBox-searchIcon",clearButton:"x-filterBox-clearButton"};var c=a(747),r=a(61043),o=a(27012),i=a(43763),u=a(38533),d=a(72519),m=a(60042),E=a.n(m);const f=n().memo((({alwaysExpanded:e=!1,placeholder:t})=>{const{filter:a,setFilter:m}=(0,s.useContext)(u.fo),[f,b]=(0,s.useState)(e||!!a),[A,p]=(0,s.useState)(a),g=(0,s.useRef)(null);(0,o.J4)(o.sN.FILTER);const D=(0,s.useCallback)((()=>{b(!0),g.current&&g.current.focus()}),[b]);(0,o.eY)(o.O4.FILTER,D);const h=(0,d.y)((e=>{m(e)}),200),C=(0,s.useCallback)((e=>{const t=e.currentTarget.value;p(t),h(t)}),[h,p]),y=(0,s.useCallback)((()=>{g.current&&g.current.focus(),p(""),h("")}),[h,p]),v=(0,s.useCallback)((e=>{"Escape"===e.key&&A&&y()}),[A,y]),T=(0,s.useCallback)((()=>{A||e||b(!1)}),[A,e,b]);return n().createElement("div",{className:E()(l.filterInputContainer,{[l.expanded]:f}),role:"search"},n().createElement("input",{ref:g,className:E()(l.filterInput),role:"searchbox",maxLength:80,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,placeholder:t,onChange:C,onKeyDown:v,onBlur:T,value:A}),n().createElement("div",{className:l.overlay},n().createElement("span",{className:l.searchIconContainer},n().createElement(i.h,{iconSize:16,className:l.searchIcon,"aria-hidden":!0})),A&&n().createElement("button",{className:l.clearButton,onClick:y,"aria-label":r.ag.get("search.a11y.clear-input")},n().createElement(c.Z,{size:16,className:l.filterInputIcon}))),n().createElement("button",{className:l.expandButton,onClick:D,"data-testid":"expand-button"},n().createElement(i.h,{iconSize:16,className:l.searchIcon})))}))},85261:(e,t,a)=>{"use strict";a.d(t,{J:()=>p,P:()=>g});var s=a(42065),n=a(61043),l=a(37339),c=a(27378),r=a.n(c),o=a(35415),i=a(53177),u=a(34514);const d=({source:e,onAddOrRemoveSource:t})=>{const[a,n]=(0,c.useState)(e.enabled);return r().createElement(r().Fragment,null,r().createElement(i.Dy,{as:"span",variant:i.Dy.mesto,color:u.gray70,htmlFor:`settings.local-files.${e.id}`},e.name),r().createElement(l.Z,{className:s.Z.secondColumn,id:`settings.local-files.${e.id}`,value:a,onSelected:a=>{n(a),t(e.id,a)}}))};var m=a(93592),E=a(24817);const f=new m.J({idPrefix:"local-files-sources-live-region-"}),b=()=>{const[e,t]=(0,c.useState)([]),a=(0,c.useContext)(E.t),l=(0,c.useCallback)((async()=>t(await a.getSources())),[a]);(0,c.useEffect)((()=>{l()}),[l]),(0,c.useEffect)((()=>f.clearNode()),[]);const u=(0,c.useCallback)((async()=>{const e=await a.browseForFolder();e.path&&(await a.addSource(e.path),l(),f.say(n.ag.get("settings.localFilesFolderAdded",e.path)))}),[a,l]),m=(0,c.useCallback)(((e,t)=>{t?a.addSource(e):a.removeSource(e)}),[a]);return r().createElement(r().Fragment,null,r().createElement(i.Dy,{as:"h3",variant:i.Dy.balladBold,className:s.Z.title},n.ag.get("settings.showSongsFrom")),e.map((e=>e.found?r().createElement(d,{key:e.id,source:e,onAddOrRemoveSource:m}):null)),r().createElement(o.z,{"aria-label":n.ag.get("settings.addASource"),className:s.Z.button,version:"outlined",onClick:()=>{u()}},n.ag.get("settings.addASource")))};var A=a(59908);const p="showLocalFiles",g=()=>{const{useNamespacedLocalStorage:e}=(0,c.useContext)(A.Xz),[t,a]=e(p,!1);return r().createElement(r().Fragment,null,r().createElement(i.Dy,{as:"h2",variant:i.Dy.cello,className:s.Z.title},n.ag.get("settings.localFiles")),r().createElement(i.Dy,{as:"label",variant:i.Dy.mesto,color:u.gray70,htmlFor:"settings.showLocalFiles"},n.ag.get("settings.showLocalFiles")),r().createElement(l.Z,{className:s.Z.secondColumn,id:"settings.showLocalFiles",value:t,onSelected:e=>{a(e)}}),t?r().createElement(b,null):null)}},48578:(e,t,a)=>{"use strict";a.d(t,{A:()=>E});var s=a(27378),n=a.n(s),l=a(60042),c=a.n(l);const r={sortDropdown:"x-sortBox-sortDropdown",sortDropdownChanged:"x-sortBox-sortDropdownChanged",dropdownItem:"_412c9016173a00119079f27f88da89ea-scss",dropdownItemSelected:"_56266c60cafad920f6b3f6fc18ba30ed-scss"};var o=a(1041),i=a(53177),u=a(55357),d=a(84638),m=a(78052);const E=({options:e,selected:t,onSelect:a,isSelectionChanged:s})=>{const[l]=e,E=e.map((({key:e,value:s})=>{const l=e===t.key;return n().createElement(o.hP,{className:c()(r.dropdownItem,{[r.dropdownItemSelected]:l}),key:e,onClick:()=>a(e)},n().createElement(i.Dy,{variant:i.Dy.mesto},s),l&&n().createElement(u.R,{iconSize:16}))})),f=s?s(t):t!==l;return n().createElement(o.Lt,{items:E,render:(e,a)=>n().createElement("button",{className:c()(r.sortDropdown,{[r.sortDropdownChanged]:f,[r.boxActive]:e}),type:"button",onClick:a,"aria-expanded":e},n().createElement(i.Dy,{variant:i.Dy.mesto},t.value),e?n().createElement(d.q,{iconSize:16}):n().createElement(m.m,{iconSize:16}))})}},97186:(e,t,a)=>{"use strict";a.d(t,{oT:()=>i,ei:()=>u,MY:()=>d,$u:()=>m,Ru:()=>E,Aq:()=>b,o$:()=>A,e3:()=>g,a6:()=>D,EY:()=>C,w0:()=>y,pT:()=>T,Hp:()=>S,mE:()=>_});var s=a(33747),n=a(96582),l=a(85104),c=a(61043),r=a(44471),o=a(38517);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const u={"show-alphabetical":i.SHOW_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},d={[i.RECENTLY_PLAYED]:{key:"recently-played",value:c.ag.get("collection.sort.recently-played")},[i.ADDED_AT]:{key:"recently-added",value:c.ag.get("collection.sort.recently-added")},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",value:c.ag.get("collection.sort.alphabetical")},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",value:c.ag.get("collection.sort.alphabetical")},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",value:c.ag.get("collection.sort.creator")},[i.CREATOR_NAME]:{key:"creator-name",value:c.ag.get("collection.sort.creator")},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",value:c.ag.get("collection.sort.alphabetical")},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",value:c.ag.get("collection.sort.most-relevant")},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",value:c.ag.get("collection.sort.custom-order")}},m=e=>{if(e)return{field:s.R.TEXT,operator:s.p.CONTAINS,value:e.trim()}},E=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],f={[i.ADDED_AT]:{field:n.lY.ADDED_AT,order:n.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:n.lY.NAME,order:n.As.ASC},[i.CREATOR_NAME]:{field:n.lY.ARTIST_NAME,order:n.As.ASC}},b=e=>{if(E.includes(e))return f[e]},A=[i.ADDED_AT,i.CREATOR_NAME],p={[i.ADDED_AT]:{field:n.hx.ADDED_AT,order:n.As.DESC},[i.CREATOR_NAME]:{field:n.hx.NAME,order:n.As.ASC}},g=e=>{if(A.includes(e))return p[e]},D=[i.ADDED_AT,i.SHOW_ALPHABETICAL],h={[i.ADDED_AT]:{field:n.hx.ADDED_AT,order:n.As.DESC},[i.SHOW_ALPHABETICAL]:{field:n.aW.NAME,order:n.As.ASC}},C=e=>{if(D.includes(e))return h[e]},y=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],v={[i.ADDED_AT]:{field:l.bD.ADDED_AT,order:l.As.DESC},[i.RECENTLY_PLAYED]:{field:l.bD.RECENTLY_PLAYED,order:l.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:l.bD.NAME,order:l.As.ASC},[i.MOST_RELEVANT]:{field:l.bD.RELEVANCE,order:l.As.DESC},[i.CUSTOM_ORDER]:void 0},T=e=>{if(y.includes(e))return v[e]},S={"custom-order":r.I5,title:{column:o.QD.TITLE,order:o.kn.ASC},artist:{column:o.QD.TITLE,order:o.kn.SECONDARY_ASC},"added-by":{column:o.QD.ADDED_BY,order:o.kn.ASC},"added-at":{column:o.QD.ADDED_AT,order:o.kn.ASC},duration:{column:o.QD.DURATION,order:o.kn.ASC},album:{column:o.QD.ALBUM,order:o.kn.ASC},"album-or-podcast":{column:o.QD.ALBUM_OR_PODCAST,order:o.kn.ASC}},_={[o.QD.INDEX]:{key:"custom-order",value:c.ag.get("collection.sort.custom-order")},[o.QD.TITLE]:{key:"title",value:c.ag.get("tracklist.header.title")},[o.QD.ARTIST]:{key:"artist",value:c.ag.get("collection.sort.artist")},[o.QD.ADDED_BY]:{key:"added-by",value:c.ag.get("tracklist.header.added-by")},[o.QD.ADDED_AT]:{key:"added-at",value:c.ag.get("tracklist.header.date-added")},[o.QD.DURATION]:{key:"duration",value:c.ag.get("tracklist.header.duration")},[o.QD.ALBUM]:{key:"album",value:c.ag.get("tracklist.header.album")},[o.QD.ALBUM_OR_PODCAST]:{key:"album-or-podcast",value:c.ag.get("tracklist.header.album-or-podcast")},[o.QD.PLAYS]:null,[o.QD.RELEASE_DATE]:null,[o.QD.ADD]:null,[o.QD.ACTIONS]:null}},94212:(e,t,a)=>{"use strict";a.d(t,{n:()=>C});var s=a(27378),n=a.n(s),l=a(60042),c=a.n(l),r=a(79651),o=a(61043),i=a(1041);const u="queue-tabBar-nav",d="queue-tabBar-headerCentered",m="queue-tabBar-headerItem",E="queue-tabBar-moreButton",f="queue-tabBar-moreButtonActive",b="queue-tabBar-dropdownItemLink",A="queue-tabBar-headerItemLink",p="queue-tabBar-active",g="queue-tabBar-header",D="queue-tabBar-chevron";var h=a(53177);const C=n().memo((({isCentered:e,links:t,landmarkLabel:a,className:l,windowSize:C=1/0})=>{const[y,v]=(0,s.useState)(null),T=(0,s.useRef)(null),[S,_]=(0,s.useState)([]),[L,k]=(0,s.useState)(0),[N,O]=(0,s.useState)([]);(0,s.useEffect)((()=>{T.current&&k(T.current.clientWidth)}),[C]),(0,s.useEffect)((()=>{if(!T.current)return;const e=Array.from(T.current.children).map((e=>e.clientWidth));_(e)}),[t]),(0,s.useEffect)((()=>{if(!T.current)return;if(S.slice(0,-1).reduce(((e,t)=>e+t),0)<=L)return void O([]);const e=S.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;S.forEach(((e,s)=>{L>=a+e?a+=e:t.push(s)})),O(t)}),[L,S]);const R=(0,s.useCallback)((e=>!!e&&(v(null),!0)),[]),w=(0,s.useCallback)(((e,t)=>n().createElement("button",{className:c()(E,{[f]:y}),type:"button",onClick:t,"aria-expanded":e},n().createElement(h.Dy,{as:"span",variant:h.Dy.mestoBold},y?y.title:o.ag.get("more")),n().createElement("span",{className:c()(D,{"spoticon-chart-up-16":e,"spoticon-chart-down-16":!e})}))),[y]),I=(0,s.useMemo)((()=>t.map(((e,t)=>N.includes(t)?n().createElement(i.hP,{exact:!0,className:b,activeClassName:p,to:e.to,selected:e.itemId===(y&&y.itemId),isActive:t=>!!t&&(v(e),!0),onClick:()=>{v(e)}},e.title):null))),[N,t,y]);return n().createElement("nav",{className:c()(l,u),"aria-label":a},n().createElement("ul",{className:e?d:g,ref:T},t.map(((e,t)=>N.includes(t)?null:n().createElement("li",{key:e.to,className:m},n().createElement(r.O,{exact:!0,className:A,activeClassName:p,to:e.to,isActive:R},n().createElement(h.Dy,{variant:h.Dy.mestoBold},e.title))))),N.length||0===S.length?n().createElement("li",{className:m},n().createElement(i.Lt,{items:I,render:w})):null))}))},37339:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});const s="x-toggle-wrapper",n="x-toggle-indicatorWrapper",l="x-toggle-input",c="x-toggle-indicator";var r=a(60042),o=a.n(r),i=a(27378),u=a.n(i);const d=({value:e,disabled:t,onSelected:a,id:r,className:i})=>u().createElement("label",{className:o()(s,i)},u().createElement("input",{id:r,className:l,type:"checkbox",disabled:t,checked:e,onChange:e=>{const t=e.target.checked;a(t)}}),u().createElement("span",{className:n},u().createElement("span",{className:c})))},44471:(e,t,a)=>{"use strict";a.d(t,{P0:()=>o,MI:()=>i,RJ:()=>u,zq:()=>d,I5:()=>m,Gb:()=>E,kz:()=>f});var s=a(27378),n=a.n(s),l=a(31099),c=a(76190),r=a(38517);const o=[r.QD.INDEX,r.QD.TITLE,r.QD.ALBUM,r.QD.ADDED_AT],i=[r.QD.INDEX,r.QD.TITLE,r.QD.ALBUM,r.QD.DURATION],u=[r.QD.INDEX,r.QD.TITLE,r.QD.ALBUM,r.QD.DURATION],d=[r.QD.INDEX,r.QD.TITLE,r.QD.ALBUM,r.QD.ALBUM_OR_PODCAST,r.QD.ADDED_BY,r.QD.ADDED_AT,r.QD.DURATION],m={column:null,order:l.k.NONE},E=(0,s.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a TracksSortProvider")},sortState:m}),f=n().memo((({uri:e,children:t})=>n().createElement(c.r,{uri:e,defaultState:m,sortContext:E},t)))},4783:(e,t,a)=>{"use strict";a.d(t,{MY:()=>u});var s=a(27378),n=a(52033),l=a(33644);var c=a(46903),r=a(62706);const o=n.EW.UPDATE;function i(e,t){const a=(0,s.useContext)(l.H),[n,c]=(0,s.useState)(null),i=(0,s.useCallback)((async s=>{e===s.data.list&&c(await t(a))}),[a,e,t]);return(0,s.useEffect)((()=>{i(new r.B(o,{list:e}))}),[i,e]),function(e,t){const a=(0,s.useContext)(l.H);(0,s.useEffect)((()=>{const s=a.getEvents();return s.addListener(e,t),()=>{s.removeListener(e,t)}}),[e,t,a])}(o,i),n}function u(e){return i(n.XD.TRACKS,(0,c.jP)((t=>t.getTracks(e)),[e]))}},93592:(e,t,a)=>{"use strict";a.d(t,{J:()=>l});var s=a(65526),n=a.n(s);class l{constructor(e={}){n()(this,"settings",void 0),n()(this,"currentRegion",void 0),this.settings={level:e.level||"polite",parent:e.parent||document.body,idPrefix:e.idPrefix||"live-region-",delay:e.delay||0},this.currentRegion=document.createElement("span")}say(e,t=this.settings.delay){this.clearNode(),this.currentRegion=document.createElement("span"),this.currentRegion.id=this.settings.idPrefix+Math.floor(1e4*Math.random());const a="assertive"!==this.settings.level?"status":"alert";this.currentRegion.setAttribute("aria-live",this.settings.level),this.currentRegion.setAttribute("role",a),this.currentRegion.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px"),this.settings.parent.appendChild(this.currentRegion),window.setTimeout((()=>{this.currentRegion.textContent=e}),t)}clearNode(){const e=this.settings.parent.querySelector(`[id^="${this.settings.idPrefix}"]`);e&&this.settings.parent.removeChild(e)}}},94578:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s={header:"collection-collection-header",tabBar:"collection-collection-tabBar",AddToPlaylistIcon:"collection-collection-AddToPlaylistIcon"}},42065:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const s={container:"x-settings-container",header:"x-settings-header",secondColumn:"x-settings-secondColumn",facebookButton:"x-settings-facebookButton",buttonContainer:"x-settings-buttonContainer",title:"x-settings-title",button:"x-settings-button",crossFadeContainer:"x-settings-crossFadeContainer",restartAppButton:"x-settings-restartAppButton",input:"x-settings-input"}}}]);