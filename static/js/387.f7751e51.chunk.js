"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var o,r,c=t(439),u=t(689),i=t(791),a=t(668),f=t(168),s=t(82),h=s.ZP.li(o||(o=(0,f.Z)(["\n    margin-bottom: 50px;\n    color: #e6e6e6;\n"]))),l=s.ZP.h3(r||(r=(0,f.Z)(["\n  margin-bottom: 20px;\n  color: #74C7ED\n"]))),d=t(184),g=function(){var n=(0,u.UO)().movieId,e=(0,i.useState)([]),t=(0,c.Z)(e,2),o=t[0],r=t[1];return console.log(o),(0,i.useEffect)((function(){n&&(0,a.Jh)(n).then((function(n){var e=n.results;return r(e)}))}),[n]),(0,d.jsx)(d.Fragment,{children:o.length?(0,d.jsx)("ul",{children:o.map((function(n){var e=n.author,t=n.content,o=n.id;return(0,d.jsxs)(h,{children:[(0,d.jsxs)(l,{children:["Author: ",e]}),(0,d.jsx)("p",{children:t})]},o)}))}):(0,d.jsx)("p",{style:{color:"#e6e6e6"},children:"We don't have any reviews for this movie."})})}},668:function(n,e,t){t.d(e,{Jh:function(){return f},TP:function(){return i},bp:function(){return a},qF:function(){return u},rj:function(){return c}});var o="e7e8717bf37b2131c41f035d5b761556",r="https://api.themoviedb.org/3/",c=function(){return fetch("".concat(r,"trending/all/day?api_key=").concat(o)).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(n," not found")))}))},i=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry, not found."))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return n.json()}))},f=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=387.f7751e51.chunk.js.map