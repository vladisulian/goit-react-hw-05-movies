"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566,790],{418:function(e,t,n){n.d(t,{Lo:function(){return u},NG:function(){return h},Rl:function(){return x},Uh:function(){return p},rc:function(){return m}});var r=n(861),a=n(757),c=n.n(a),s=n(912),i="635ac74a11f3f55a21a984cd556f5915",o="https://api.themoviedb.org/3/";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("\n   ".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},421:function(e,t,n){n.d(t,{g:function(){return a}});var r=n(184),a=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h4",{children:"Please, wait a bit. Loading..."})})}},566:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),c=n(689),s=n(418),i=n(790),o=n(184),u=function(e){var t=e.cast;return 0!==t.length?t.map((function(e){if(e.profile_path)return(0,o.jsxs)("li",{className:"actor",children:[(0,o.jsx)("img",{src:(0,i.getPosterUrl)(e.profile_path),alt:"actorPhoto"}),(0,o.jsx)("p",{className:"actor-name",children:e.name}),(0,o.jsx)("p",{className:"actor-character",children:e.character})]},e.id)})):(0,o.jsx)("h2",{children:"Sorry, there is no information about Cast."})},l=function(e){var t=e.children;return(0,o.jsx)("ul",{className:"cast-list",children:t})},p=n(421),f=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],f=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,s.rc)(f).then((function(e){return i(e.cast)})).catch((function(e){return console.log(e)}))}),[f]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(p.g,{}),children:(0,o.jsx)(l,{children:(0,o.jsx)(u,{cast:n})})})})}},790:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},getPosterUrl:function(){return l}});var r=n(439),a=n(791),c=n(87),s=n(689),i=n(418),o=n(421),u=n(184),l=function(e){return String(e).includes("https:")?e.slice(1):"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(e)},p=function(){var e,t,n=(0,s.UO)().movieId,p=(0,a.useState)({}),f=(0,r.Z)(p,2),h=f[0],d=f[1],m=(0,s.TH)(),v=null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/goit-react-hw-05-movies",x=l(h.poster_path);return(0,a.useEffect)((function(){(0,i.Uh)(n).then((function(e){return d(e)})).catch((function(e){return console.log(e)}))}),[n]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a.Suspense,{fallback:(0,u.jsx)(o.g,{}),children:[(0,u.jsx)(c.rU,{to:v,className:"back-home-link",children:"Back home"}),(0,u.jsxs)("div",{className:"movie-container",children:[(0,u.jsx)("img",{src:x,alt:"poster",className:"poster"}),(0,u.jsxs)("div",{className:"text-container",children:[(0,u.jsxs)("p",{className:"film-title ",children:[h.title,(0,u.jsxs)("span",{children:[" (",String(h.release_date).slice(0,4),")"]})]}),(0,u.jsx)("p",{className:"film-bold",children:"Popularity"}),(0,u.jsx)("span",{className:"popularity",children:h.popularity}),(0,u.jsx)("p",{className:"film-bold overview",children:"Overview"}),(0,u.jsx)("p",{className:"overview-desc",children:h.overview}),(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"cast",state:{from:m},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"reviews",state:{from:m},children:"Reviews"})})]})]})]}),(0,u.jsx)(s.j3,{})]})})}}}]);
//# sourceMappingURL=566.3ebd8528.chunk.js.map