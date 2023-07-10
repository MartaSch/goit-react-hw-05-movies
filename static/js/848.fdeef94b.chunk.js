"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[848],{848:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o=r(689),u=r(87),l=r(390),v="MovieCards_MovieCardContainer__E63M3",p="MovieCards_Poster__QWrmD",d="MovieCards_MovieYearTitle__4trd0",f="MovieCards_MovieInformation__ysmGQ",_="MovieCards_UserScore__JXBax",h="MovieCards_Title__W4-Cr",m="MovieCards_Text__qyTW9",x="MovieCards_List__ST7DO",w=r(184),k=function(e){var t=e.moviesDetails,r=t.poster_path,n=t.title,a=t.release_date,s=t.vote_average,c=t.overview,i=t.genres,o=new Date(a).getFullYear(),u=Math.round(100*Number(s)/10);return(0,w.jsxs)("section",{className:v,children:[(0,w.jsx)("img",{className:p,src:r?"https://image.tmdb.org/t/p/w500".concat(r):"no poster",alt:"{title}"}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsxs)("h3",{className:d,children:[n," (",o,")"]}),(0,w.jsxs)("p",{className:_,children:["User score: ",u,"%"]}),(0,w.jsx)("h5",{className:h,children:"Overview:"}),(0,w.jsx)("p",{className:m,children:c}),(0,w.jsx)("h5",{className:h,children:"Genres:"}),(0,w.jsx)("ul",{className:x,children:(0,w.jsx)("li",{className:m,children:null===i||void 0===i?void 0:i.map((function(e){return e.name})).join(", ")})})]})]})},j="MoviesDetails_MoviesDetailsContainer__LD-C9",b="MoviesDetails_ButtonBack__zaJGa",M="MoviesDetails_LinkList__b0u1a",C="MoviesDetails_LinkReviewsCastItem__azmPa",g="MoviesDetails_LinkReviewsCast__e7GMg",N=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],v=(0,o.UO)().id,p=(0,i.useState)(null),d=(0,a.Z)(p,2)[1],f=(0,o.TH)(),_=(0,o.s0)();(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.zU)(v);case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,w.jsxs)("div",{className:j,children:[(0,w.jsx)("button",{className:b,type:"button",onClick:function(){_(-1)},children:"Go back"}),(0,w.jsx)(k,{moviesDetails:r}),(0,w.jsxs)("ul",{className:M,children:[(0,w.jsx)("li",{className:C,children:(0,w.jsx)(u.OL,{className:g,state:f.state,to:"reviews",children:"Reviews"})}),(0,w.jsx)("li",{children:(0,w.jsx)(u.OL,{className:g,state:f.state,to:"cast",children:"Cast"})})]}),(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading subpage..."}),children:(0,w.jsx)(o.j3,{})})]})}},390:function(e,t,r){r.d(t,{D$:function(){return m},JX:function(){return f},_r:function(){return h},wr:function(){return d},zU:function(){return _}});var n=r(861),a=r(757),s=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="3bffe50dfda579cb925403e66a2c7938",o="/trending/movie/day",u="/search/movie",l="/movie",v="/credits",p="/reviews",d=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(o,"?api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"?api_key=").concat(i,"&query=").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(l,"/").concat(t,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(l,"/").concat(t).concat(v,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(l,"/").concat(t).concat(p,"?api_key=").concat(i));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=848.fdeef94b.chunk.js.map