"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{723:function(n,t,e){e.d(t,{Z:function(){return g}});var r,o,p,c,x=e(168),i=e(82),a=e(87),u=i.ZP.div(r||(r=(0,x.Z)(["\n  max-width: 1230px;\n  margin: 0 auto;\n  padding: 0 15px; \n"]))),f=i.ZP.ul(o||(o=(0,x.Z)(["\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n"]))),s=i.ZP.li(p||(p=(0,x.Z)(["\n  width: 200px;\n  -webkit-box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 9px 5px rgba(0,0,0,0.03); \n  box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 9px 5px rgba(0,0,0,0.03);\n\n    &:hover {\n      -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); \n      box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);\n    }\n"]))),h=(0,i.ZP)(a.rU)(c||(c=(0,x.Z)(["\n    color: #fff;\n    text-decoration: none;\n"]))),l=e(689),d=e(184),g=function(n){var t=n.films,e=(0,l.TH)();return(0,d.jsx)(u,{children:(0,d.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.original_title,o=n.title,p=n.poster_path;return(0,d.jsx)(s,{children:(0,d.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,d.jsx)("img",{src:p?"https://image.tmdb.org/t/p/w200".concat(p):"https://via.placeholder.com/200x300",alt:""}),(0,d.jsx)("p",{children:r||o})]})},t)}))})})}},415:function(n,t,e){e.r(t);var r=e(433),o=e(439),p=e(791),c=e(668),x=e(723),i=e(184);t.default=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],a=t[1];return(0,p.useEffect)((function(){(0,c.rj)().then((function(n){return a((0,r.Z)(n.results))}))}),[]),console.log(e),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{style:{margin:"0 auto",textAlign:"center",marginBottom:"60px",color:"#FFFFFF",textShadow:"0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00"},children:"Tranding today"}),(0,i.jsx)(x.Z,{films:e})]})}},668:function(n,t,e){e.d(t,{Jh:function(){return a},TP:function(){return x},bp:function(){return i},qF:function(){return c},rj:function(){return p}});var r="e7e8717bf37b2131c41f035d5b761556",o="https://api.themoviedb.org/3/",p=function(){return fetch("".concat(o,"trending/all/day?api_key=").concat(r)).then((function(n){return n.json()}))},c=function(n){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("".concat(n," not found")))}))},x=function(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry, not found."))}))},i=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=415.a052a6c0.chunk.js.map