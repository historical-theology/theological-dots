(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[997],{77042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{OfflineBrowse:()=>h,default:()=>E});var r=n(65526),c=n.n(r),o=n(27378),l=n.n(o),i=n(79308),s=n(60042),a=n.n(s);const u="offline-browse-offlineBrowse-offline";var f=n(18308),p=n(61043),d=n(40980),b=n(23301),O=n(7593),y=n(29467),m=n(47050),g=n(96415);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){const{useOfflineEntities:e}=(0,o.useContext)(d.I),[t,n,r]=e(),c=(0,i.I0)(),s=(0,i.v9)(g.dO);if(r)return null;const y=w(w({},s),{},{playContext:e=>c((0,b.nh)(e)),pause:()=>c((0,b.wO)()),resume:()=>c((0,b.v4)())}),v=n?[]:t;if(!v.length)return null;const h=[{title:p.ag.get("music_downloads"),content:v}];return l().createElement(f.CF.Provider,{value:y},l().createElement("div",{className:a()(u,"contentSpacing")},h.map((e=>l().createElement("div",{key:e.title},l().createElement(O.JL,{value:"headered-grid"},l().createElement(m.P,{title:e.title,total:e.content.length,seeAllUri:"/collection/music-downloads"},e.content.map(j))))))))}function j(e,t){const n=(0,y.U)(e.uri);return l().createElement(O.JL,{key:e.uri||t,value:"card",index:t},l().createElement(n,{entity:e}))}const E=h}}]);