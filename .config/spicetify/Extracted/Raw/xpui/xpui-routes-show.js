(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[713],{18684:(e,t,a)=>{"use strict";a.d(t,{k:()=>c});var n=a(27378),i=a.n(n),s=a(53177);const r="x-copyrights-copyrights",c=({copyrights:e})=>{const t=(e||[]).map(((e,t)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let n;return n="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,i().createElement(s.Dy,{as:"p",variant:s.Dy.finale,key:t,dir:"auto"},`${n} ${a}`)}));return i().createElement("div",{className:r},t)}},55834:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Show:()=>Ve,default:()=>Ye});var n=a(27378),i=a.n(n);const s={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"show-show-ShowPage",ShowContent:"show-show-ShowContent",metadata:"show-show-metadata",episodes:"show-show-episodes",episodesHeader:"show-show-episodesHeader",episodesSort:"show-show-episodesSort",subtitle:"show-show-subtitle",sectionTitle:"show-show-sectionTitle",trailer:"show-show-trailer",visibleDownloadButton:"show-show-visibleDownloadButton",moreButton:"show-show-moreButton",saveButton:"show-show-saveButton"};var r=a(41056),c=a(79308),l=a(80406),o=a(61043),d=a(18684),m=a(1292),u=a(15941),f=a(23301),p=a(26713),g=a(71338),b=a(11111),y=a(56958),E=a(60042),v=a.n(E),h=a(40079),w=a(67625),k=a(42271),x=a(34907),C=a(41113),O=a(43031),I=a(91030),S=a(19369),P=a(39551),N=a(37539);const D={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"show-showEntityHeader-container",smallHeader:"show-showEntityHeader-smallHeader",imageContainer:"show-showEntityHeader-imageContainer",headerText:"show-showEntityHeader-headerText"};var M=a(53177),_=a(81105);const B=e=>{switch(e){case O.f.MOBILE:return C.m$.SIZE_112;case O.f.SMALL:return C.m$.SIZE_200;default:return C.m$.SIZE_232}},L=({uri:e,backgroundColor:t,backgroundImages:a,size:s,data:r,onPlayClick:c,isPlaying:l,isPlayDisabled:o=!1,actionBarHeader:d,actionBarButtons:m,playButtonWrapper:u=null,contextMenuWrapper:f=_.j})=>{const p=(0,n.useRef)(null),{imageUrl:g}=(0,h.f)(a,p),b=i().createElement(P.JM,{size:P.qE.lg,onClick:c,isPlaying:l}),y=u?u(b):b;return i().createElement(i().Fragment,null,i().createElement("div",{"data-testid":"header",ref:p,style:{backgroundColor:t},className:v()(N.Z.container,D.container,N.Z.overlay,D.overlay,{[N.Z.withBackgroundImage]:g,[N.Z.smallHeader]:s===O.f.MOBILE,[D.smallHeader]:s===O.f.MOBILE})},i().createElement(w.Du,null,i().createElement(P.JM,{size:P.qE.sm,onClick:c,isPlaying:l,disabled:o}),i().createElement(w.yZ,{text:r.title})),i().createElement(f,{uri:e,contextUri:e},i().createElement(x.O,{size:B(s),type:r.type,images:r.images,title:r.title,shape:x.K.ROUNDED_CORNERS,className:D.imageContainer})),i().createElement("div",{className:D.headerText},s!==O.f.MOBILE&&i().createElement(M.Dy.p,{variant:M.$e.minuetBold},r.displayType),i().createElement(f,{uri:e,contextUri:e},i().createElement(k.xd,{size:s===O.f.MOBILE?S.Jj.SMALL:S.Jj.LARGE},r.title)),i().createElement(k.dy,{medium:s===O.f.SMALL,large:s===O.f.LARGE,bold:s!==O.f.MOBILE},r.subtitle))),i().createElement(I.o,{backgroundColor:t,size:s===O.f.MOBILE?I.m.SMALL:I.m.LARGE,playButton:s===O.f.MOBILE?null:y,header:d,secondaryActionButtons:m}))};var A=a(60858),U=a(64436),R=a(74139),z=a(92416),T=a(96415),j=a(7593),$=a(65526),Z=a.n($),G=a(66583),H=a(76638),W=a(60247),q=a(66917),F=a.n(q);const J={episodeBlock:"show-episodeBlock-episodeBlock",isActive:"show-episodeBlock-isActive",title:"show-episodeBlock-title",titleLink:"show-episodeBlock-titleLink",selected:"show-episodeBlock-selected",actions:"show-episodeBlock-actions",noHover:"show-episodeBlock-noHover",imageContainer:"show-episodeBlock-imageContainer",showImage:"show-episodeBlock-showImage",description:"show-episodeBlock-description",metadata:"show-episodeBlock-metadata",badges:"show-episodeBlock-badges",medium:"show-episodeBlock-medium",large:"show-episodeBlock-large",header:"show-episodeBlock-header",descriptionContainer:"show-episodeBlock-descriptionContainer",playerActions:"show-episodeBlock-playerActions"};var K=a(52110),X=a(2031),V=a(65288);const Y=i().memo((({uri:e,name:t,size:a,description:s,durationMs:c,images:l,badges:o,fullyPlayed:d,releaseDate:m,resumePositionMs:u,activeTrackUri:f,isPlaying:p,actionButtons:g,onContextMenu:b,onTouchStart:y,onTouchEnd:E,handlePlaybackClick:h,handleDragStart:w,handleClick:k,position:O,index:I,isPlayable:S,playButtonWrapper:N=null})=>{const D=(0,r.k6)(),_=f===e,B=_&&p,L=F().from(e).toURLPath(!0),A=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),D.push(L),k&&k(e)}),[L,D,k]),U=(0,n.useCallback)((e=>{e.stopPropagation(),h(e)}),[h]),R=i().createElement(P.JM,{size:P.qE.xs,version:P.ul.secondary,onClick:U,isPlaying:B,disabled:!S}),z=N?N(R):R;return i().createElement("div",{className:v()(J.episodeBlock,{[J.isActive]:_,[J.medium]:a===V.Uo.MEDIUM,[J.large]:a===V.Uo.LARGE,[J.noHover]:a===V.Uo.XSMALL}),"data-testid":`episode-${I}`,draggable:!!w,onDragStart:w,onClick:A,onContextMenu:b,onTouchStart:y,onTouchEnd:E},i().createElement("div",{className:J.imageContainer},i().createElement(x.O,{className:v()(J.entityImage,J.showImage),type:X.p.episode,size:(e=>{switch(e){case V.Uo.LARGE:return C.m$.SIZE_112;case V.Uo.MEDIUM:return C.m$.SIZE_64;default:return C.m$.SIZE_48}})(a),title:t,shape:x.K.ROUNDED_CORNERS,images:l})),i().createElement("div",{className:J.header},i().createElement(W.rU,{className:J.titleLink,to:L,onClick:A},i().createElement(M.Dy.h4,{variant:M.Dy.balladBold,className:J.title},t)),i().createElement("div",{className:J.badges},o)),i().createElement("div",{className:J.descriptionContainer},i().createElement(M.Dy.p,{variant:M.Dy.mesto,className:J.description},s)),i().createElement("div",{className:J.metadata},i().createElement(K.E,{isPlaying:B,fullyPlayed:d,durationMs:c,releaseDate:m,resumePositionMs:u,position:_?O:void 0})),i().createElement("div",{onClick:e=>{e.stopPropagation()},className:J.actions},g),i().createElement("div",{className:J.playerActions},z))}));var Q=a(98417),ee=a(59358);const te=e=>{var t,a,n,i,s,r,c,l;const o=null===(t=e.audio.items.find((({externallyHosted:e})=>e)))||void 0===t?void 0:t.url,d=((null===(a=e.coverArt)||void 0===a?void 0:a.sources)||[]).map((e=>{var t,a;return{url:e.url,width:null!==(t=e.width)&&void 0!==t?t:void 0,height:null!==(a=e.height)&&void 0!==a?a:void 0}}));const m=e.playability.playable,u=null!==(n=null===(i=e.audioPreview)||void 0===i?void 0:i.url)&&void 0!==n?n:"",f=(null===(s=e.contentRating)||void 0===s?void 0:s.label)===H.KS.Explicit;return{type:ee.p.Episode,id:e.id,uri:e.uri,name:e.name,description:null!==(r=e.description)&&void 0!==r?r:"",audio_preview_url:u,external_playback_url:o,unencryptedAudioUrl:u,duration_ms:e.duration.totalMilliseconds,release_date:null!==(c=null===(l=e.releaseDate)||void 0===l?void 0:l.isoString)&&void 0!==c?c:"",explicit:f,is_playable:m,images:d,backgroundColor:""}};var ae=a(80296),ne=a(70568),ie=a(60725),se=a(65296),re=a(59172),ce=a(21114),le=a(82075),oe=a(2146);var de=a(54753);const me="show-shareButton-button";var ue=a(73631),fe=a(75222),pe=a(30592),ge=a(62351);const be=i().memo((({onClick:e=(()=>{}),size:t=24,className:a,uri:s,sharingInfo:r,interactionData:c})=>{const{onCopyLink:l}=(0,pe.y)({sharingInfo:r,uri:s,interactionData:c}),d=(0,n.useCallback)((()=>{l(),e()}),[e,l]);return i().createElement(ge.u,{label:o.ag.get("mwp.list.item.share")},i().createElement(fe.E,{ariaLabel:o.ag.get("mwp.list.item.share"),size:t,onClick:d,className:v()(me,a)},i().createElement(ue.M,{iconSize:t})))}));var ye=a(17113),Ee=a(14105),ve=a(27599),he=a(40980),we=a(85349),ke=a(80742);const xe={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},Ce=i().memo((({episodeUri:e,showUri:t,sharingInfo:a})=>{const{useDownloading:r}=(0,n.useContext)(he.I),{currentAvailability:c}=r(e),l=[we.V8.YES,we.V8.DOWNLOADING,we.V8.WAITING].includes(c),o=(0,n.useMemo)((()=>i().createElement(Ee.p,{uri:e,showUri:t,className:v()({[s.visibleDownloadButton]:l})})),[e,t,l]),d=(0,n.useMemo)((()=>i().createElement(be,{uri:e,sharingInfo:a,interactionData:xe})),[e,a]),m=(0,n.useMemo)((()=>i().createElement(ve.y,{menu:i().createElement(le.k,{uri:e,showUri:t,sharingInfo:a})},i().createElement(de.z,null))),[e,t,a]),u=(0,n.useMemo)((()=>i().createElement(ye.w,{uri:e,size:ke.q.md,className:s.saveButton})),[e]);return l?i().createElement(i().Fragment,null,d,m,o,u):i().createElement(i().Fragment,null,o,d,m,u)}));function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(a),!0).forEach((function(t){Z()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Se=i().memo((({index:e,uid:t,showName:a,showUri:s,episode:r,sortedBy:l,filteredBy:o})=>{var d,m,u,f;const p=null===(d=(0,c.oR)().getState().platform)||void 0===d?void 0:d.isBrowser,g=1e3*r.playedState.playPosition,y=r.uri,E={uid:t,uri:y,contextUri:s},v=(0,G.O1)(),h=(0,c.v9)(oe.Gg).isAnonymous,w=(0,V.jh)(),k=(0,b.o)(),x=(0,Q.cq)(Ie(Ie({},E),{},{index:e,sortedBy:l,filteredBy:o})),C=(0,Q.wD)(E,te(r)),O=(0,n.useCallback)((e=>{if(r.type===H.Wf.Episode&&p)return void re.y.set((()=>({triggerId:`activation-trigger-mme${r.uri}`,triggerAction:null})));const t={interactionType:"click",onLogInteraction:k};h?C(e,t):x(e,t)}),[C,x,k,h,r,p]),I=(0,n.useCallback)((()=>{k({type:"click",targetUri:y,intent:"navigate"})}),[y,k]),S=(0,c.v9)(Q.Ys),P=!(0,c.v9)(Q.Me),N=(0,c.v9)(Q.fL),{badges:D}=(0,ae.r)({contentRating:null===(m=r.contentRating)||void 0===m?void 0:m.label}),M=(0,n.useCallback)((e=>r.type!==H.Wf.Episode&&p?e:i().createElement(se.c,{id:`activation-trigger-mme${y}`,targetURI:F().from(y)},e)),[y,r.type,p]);return i().createElement(j.ZP,{value:"row",index:e},i().createElement(ce._,{menu:i().createElement(le.k,{uri:y,showUri:s,sharingInfo:r.sharingInfo})},i().createElement(Y,{index:e,uri:y,uid:t,size:w,images:(null===(u=r.coverArt)||void 0===u?void 0:u.sources)||[],name:r.name,description:r.description,isPlayable:r.playability.playable,fullyPlayed:r.playedState.state===H.sY.Completed,durationMs:r.duration.totalMilliseconds,releaseDate:(null===(f=r.releaseDate)||void 0===f?void 0:f.isoString)||"",resumePositionMs:g,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const t=`${r.name} · ${a}`;v(e,[y],t,s)},handlePlaybackClick:O,handleClick:I,activeTrackUri:S,isPlaying:P,position:N,badges:i().createElement(i().Fragment,null,D.explicit&&i().createElement(ne.N,null),D.nineteen&&i().createElement(ie.X,{size:16})),playButtonWrapper:M,actionButtons:i().createElement(Ce,{episodeUri:y,showUri:s,sharingInfo:r.sharingInfo})})))})),Pe="show-episodeList-divider",Ne="show-episodeList-row";var De=a(93512),Me=a(4050);function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(a),!0).forEach((function(t){Z()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Le=i().memo(i().forwardRef(((e,t)=>{const{fetchEpisodes:a,renderRow:s,limit:r=50,showUri:c}=e,[l,o]=(0,n.useState)(Me.d),d=(0,n.useRef)(!1),m=(0,n.useCallback)((()=>{if(!a)return;const e=l.pagingInfo.nextOffset;if(null===e)return;const t=0===l.totalCount?r:Math.min(l.totalCount-e,r);d.current||(d.current=!0,a(e,t).then((t=>{o((a=>{const n=[...a.items];return n.splice(e,t.items.length,...t.items),Be(Be({},t),{},{items:n})})),d.current=!1})))}),[a,l.pagingInfo.nextOffset,l.totalCount,r]);return(0,n.useEffect)((()=>{o(Me.d)}),[c,a]),(0,n.useEffect)((()=>{0===l.pagingInfo.nextOffset&&m()}),[m,l.pagingInfo.nextOffset]),i().createElement("div",{ref:t},i().createElement(De.C,{onReachBottom:m,triggerOnInitialLoad:!0},l.items.map(((e,t)=>i().createElement("div",{className:Ne,key:t+e.uid},i().createElement("hr",{className:Pe,"aria-hidden":!0}),s(e,t))))))})));var Ae=a(32306);const Ue=i().memo((({showName:e,showUri:t,sortedBy:a,filteredBy:s})=>{const r=(0,Ae.ZM)(t),c=(0,n.useCallback)((({uid:n,episode:r},c)=>i().createElement(Se,{key:`${r.uri}/${c}`,index:c,uid:n,episode:r,showName:e,showUri:t,sortedBy:a,filteredBy:s})),[e,t,a,s]),{ref:l,breakpoint:o}=(0,V.Db)({[V.Uo.MEDIUM]:510,[V.Uo.LARGE]:600});return i().createElement(V.ZU.Provider,{value:o},i().createElement(j.ZP,{value:"track-list"},i().createElement(Le,{showUri:t,ref:l,renderRow:c,fetchEpisodes:r})))})),Re={container:"show-trailer-container",isActive:"show-trailer-isActive",title:"show-trailer-title",main:"show-trailer-main",titleContainer:"show-trailer-titleContainer",duration:"show-trailer-duration",trailerContainer:"show-trailer-trailerContainer",image:"show-trailer-image",imageContainer:"show-trailer-imageContainer",playButton:"show-trailer-playButton",entityImageLarge:"show-trailer-entityImageLarge",entityImageSmall:"show-trailer-entityImageSmall"};var ze=a(43186),Te=a(29660);let je;!function(e){e.SMALL="small",e.LARGE="large"}(je||(je={}));const $e=({images:e,title:t,contentRating:a,duration:n,moreButton:s,onClick:r,onContextMenu:c,onTouchStart:l,onTouchEnd:d,isPlaying:m,isActive:u,size:f,className:p})=>{const g=f===je.LARGE?P.qE.md:P.qE.sm,{badges:b}=(0,ae.r)({contentRating:a});return i().createElement("div",{"data-testid":"trailer-component",className:v()(Re.container,p,{[Re.isActive]:u}),onContextMenu:c,onTouchStart:l,onTouchEnd:d},i().createElement("div",{className:Re.main},i().createElement("div",{className:Re.imageContainer},i().createElement(x.O,{type:X.p.episode,title:t,className:v()(Re.image,{[Re.entityImageSmall]:f===je.SMALL,[Re.entityImageLarge]:f===je.LARGE}),size:C.m$.SIZE_56,images:e,shape:x.K.ROUNDED_CORNERS}),i().createElement("div",{className:Re.playButton},i().createElement(P.JM,{"data-testid":"trailer-play-button",version:P.ul.transparent,size:g,isPlaying:m,onClick:r}))),i().createElement("div",{className:Re.metadata},i().createElement("div",{className:Re.titleContainer},i().createElement(M.Dy,{dir:"auto",className:Re.title,variant:M.$e.balladBold},t)),i().createElement("div",{className:Re.trailerContainer},i().createElement(Te.V,{text:o.ag.get("track-trailer")}),b.explicit&&i().createElement(ne.N,null),b.nineteen&&i().createElement(ie.X,null),i().createElement(M.Dy,{dir:"auto",variant:M.$e.mesto},i().createElement(ze.n,{durationMs:n}))))),s)};var Ze=a(45572),Ge=a(84998),He=a(82385),We=a(53267),qe=a(30788),Fe=a(48578);const Je=i().memo((e=>{const{uri:t}=e,{sortParamMap:a,getSortParam:s,setSortParam:r}=(0,Ae.uM)(t),c=s(),l=Array.from(a.values()),o=Array.from(a.keys()),d=(0,n.useCallback)((e=>{const t=o.find((t=>{var n;return(null===(n=a.get(t))||void 0===n?void 0:n.key)===e}));t&&r(t)}),[r,o,a]);if(!a.size||!c)return null;const m=Array.from(a.keys()).find((e=>e.field===c.field&&e.order===c.order)),u=a.get(m);return i().createElement(Fe.A,{options:l,onSelect:e=>d(e),selected:u})})),Ke=(0,l.P1)(z.MQ,((e,t)=>t),((e,t)=>e[t])),Xe=(0,l.P1)(z.$J,((e,t)=>t),((e,t)=>e[t])),Ve=e=>{var t,a,r,l;const{uri:E,showId:v}=e,h=(0,c.I0)(),w=(0,b.o)(),k=!(0,y.k)(),x=(0,c.v9)((e=>Ke(e,E))),C=(0,c.v9)((e=>Xe(e,E))),{canSort:I}=(0,Ae.uM)(E),{playerSort:S,playerFilter:P,showFirstEpisode:N}=(0,Ae.x3)(E),D=(0,c.v9)(T.dO),_=D.isPlaying&&D.contextURI===E,B=null==x||null===(t=x.images)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.url,z=(0,He.Z)(B||null);(0,n.useEffect)((()=>{if(!x||(0,qe.YK)(x))return void h((0,u.AN)(v));const{name:e}=x;h((0,g.Dk)(o.ag.get("podcasts.show.seo.title",{name:e})))}),[h,x,v]),(0,n.useEffect)((()=>{"boolean"!=typeof C&&h((0,u.PA)(E))}),[h,E,C]);const j=(0,n.useCallback)((()=>{w({targetUri:E,intent:C?"unsave":"save",type:"click"}),h(C?(0,p.Bn)(E):(0,p.PJ)(E))}),[h,w,E,C]),$=(0,n.useCallback)((()=>{w({intent:"expand-description",type:"click"})}),[w]),Z=null===(r=(0,c.oR)().getState().platform)||void 0===r?void 0:r.isBrowser,G=(null==x?void 0:x.trailer)||null,H=(0,n.useCallback)((()=>{w({targetUri:E,intent:_?"pause":"play",type:"click",itemIdSuffix:"button"}),"SHOW"===(null==x?void 0:x.showType)&&Z?re.y.set((()=>({triggerId:`activation-trigger-mme${E}`,triggerAction:null}))):h((0,f.uR)(E,N?te(N):void 0,S,P))}),[h,w,E,_,null==x?void 0:x.showType,Z,N,S,P]),W=(null==x||null===(l=x.episodes)||void 0===l?void 0:l.total)||0,q=D.trackURI===(null==G?void 0:G.uri),J=D.isPlaying&&q,K=0===W,V=(0,Q.cq)({contextUri:null==x?void 0:x.uri,uri:(null==G?void 0:G.uri)||E}),Y=(0,n.useCallback)((e=>{V(e,{interactionType:"click",onLogInteraction:w})}),[V,w]),ee=(0,n.useMemo)((()=>({title:null==x?void 0:x.name,subtitle:null==x?void 0:x.publisher,images:null==x?void 0:x.images,type:X.p.show,displayType:"SHOW"===(null==x?void 0:x.showType)?o.ag.get("type.show"):o.ag.get("type.podcast")})),[x]),{isXSOnly:ae,isSMOnly:ne}=(0,We.e)(),ie=ae||ne,oe=(0,n.useMemo)((()=>x?i().createElement(d.k,{copyrights:x.copyrights||[]}):null),[x]),me=(0,n.useCallback)((e=>"SHOW"===(null==x?void 0:x.showType)||Z?i().createElement(se.c,{id:`activation-trigger-mme${null==x?void 0:x.uri}`,targetURI:F().from(null==x?void 0:x.uri)},e):e),[null==x?void 0:x.uri,null==x?void 0:x.showType,Z]),ue=(0,n.useMemo)((()=>x?i().createElement(L,{uri:x.uri,backgroundColor:z,data:ee,size:ie?O.f.SMALL:O.f.LARGE,onPlayClick:H,isPlaying:_,isPlayDisabled:K,playButtonWrapper:me,contextMenuWrapper:Ge.X,actionBarButtons:[i().createElement(R.Pv,{key:"follow-button",id:R.gr.entityHeaderAdd},i().createElement(m.e,{isFollowing:C,onClick:j,disabled:k})),i().createElement(ve.y,{key:"more-button",menu:i().createElement(Ze.M,{uri:E,sharingInfo:x.sharingInfo})},i().createElement(de.z,null))]}):null),[x,z,ee,H,j,C,k,_,ie,K,E,me]),fe=(0,n.useCallback)((e=>i().createElement("section",{className:s.ShowPage},ue,i().createElement("div",{className:s.ShowContent},i().createElement("div",{className:s.metadata},x&&x.description&&i().createElement(i().Fragment,null,i().createElement(M.Dy,{as:"h3",variant:M.$e.canon,color:"white",className:s.sectionTitle},o.ag.get("artist.about")),i().createElement(U.o,{className:s.contentDescription,maxLines:4,content:(x.description||"").trim(),onExpanded:$})),G&&i().createElement(ce._,{menu:i().createElement(le.k,{uri:G.uri,showUri:x.uri,sharingInfo:G.sharingInfo})},i().createElement($e,{className:s.trailer,images:G.images,title:G.name,duration:G.duration_ms,moreButton:i().createElement(ve.y,{menu:i().createElement(le.k,{uri:G.uri,sharingInfo:G.sharingInfo,showUri:x.uri})},i().createElement(de.z,null)),onClick:Y,isPlaying:J,isActive:q,size:je.LARGE,contentRating:G.contentRating}))),i().createElement("div",{className:s.episodes,"data-testid":"show-all-episode-list"},i().createElement("div",{className:s.episodesHeader},i().createElement(M.Dy,{as:"h3",variant:M.$e.canon,color:"white",className:s.sectionTitle},o.ag.get("mwp.podcast.all.episodes")),I&&i().createElement("div",{className:s.episodesSort},i().createElement(Je,{uri:E}))),e),oe))),[x,G,ue,oe,q,J,$,Y,I,E]);return x?fe(i().createElement(Ue,{showName:x.name,showUri:x.uri,sortedBy:S,filteredBy:P})):i().createElement(A.h,{errorMessage:o.ag.get("error.not_found.title.podcast")})},Ye=i().memo((()=>{const{showId:e}=(0,r.UO)(),t=`spotify:show:${e}`;return i().createElement(Ve,{uri:t,showId:e})}))},48578:(e,t,a)=>{"use strict";a.d(t,{A:()=>f});var n=a(27378),i=a.n(n),s=a(60042),r=a.n(s);const c={sortDropdown:"x-sortBox-sortDropdown",sortDropdownChanged:"x-sortBox-sortDropdownChanged",dropdownItem:"_412c9016173a00119079f27f88da89ea-scss",dropdownItemSelected:"_56266c60cafad920f6b3f6fc18ba30ed-scss"};var l=a(1041),o=a(53177),d=a(55357),m=a(84638),u=a(78052);const f=({options:e,selected:t,onSelect:a,isSelectionChanged:n})=>{const[s]=e,f=e.map((({key:e,value:n})=>{const s=e===t.key;return i().createElement(l.hP,{className:r()(c.dropdownItem,{[c.dropdownItemSelected]:s}),key:e,onClick:()=>a(e)},i().createElement(o.Dy,{variant:o.Dy.mesto},n),s&&i().createElement(d.R,{iconSize:16}))})),p=n?n(t):t!==s;return i().createElement(l.Lt,{items:f,render:(e,a)=>i().createElement("button",{className:r()(c.sortDropdown,{[c.sortDropdownChanged]:p,[c.boxActive]:e}),type:"button",onClick:a,"aria-expanded":e},i().createElement(o.Dy,{variant:o.Dy.mesto},t.value),e?i().createElement(m.q,{iconSize:16}):i().createElement(u.m,{iconSize:16}))})}},1292:(e,t,a)=>{"use strict";a.d(t,{e:()=>m});var n=a(27378),i=a.n(n),s=a(61043),r=a(60042),c=a.n(r);const l="show-followButton-button",o="show-followButton-isFollowing",d="show-followButton-disabled",m=i().memo((({isFollowing:e,onClick:t,disabled:a=!1})=>{const n=e?s.ag.get("following"):s.ag.get("follow");return i().createElement("button",{type:"button",className:c()(l,{[o]:e,[d]:a}),onClick:t},n)}))},59358:(e,t,a)=>{"use strict";let n;a.d(t,{p:()=>n}),function(e){e.Track="track",e.Artist="artist",e.Show="show",e.Episode="episode",e.Album="album",e.Playlist="playlist"}(n||(n={}))}}]);