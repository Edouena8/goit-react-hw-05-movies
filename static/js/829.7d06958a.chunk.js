"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[829],{829:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c=e(433),r=e(439),o=e(791),i=e(689),u=e(668),a=e(87),f=e(184),s=function(n){var t=n.films,e=n.location;return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Tranding today"}),(0,f.jsx)("ul",{children:t.map((function(n){var t=n.id,c=n.title,r=n.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"movies/".concat(t),state:{from:e},children:(0,f.jsx)("p",{children:r||c})})},t)}))})]})},l=function(){var n=(0,i.TH)(),t=(0,o.useState)([]),e=(0,r.Z)(t,2),a=e[0],l=e[1];return(0,o.useEffect)((function(){(0,u.rj)().then((function(n){return l((0,c.Z)(n.results))}))}),[]),console.log(a),(0,f.jsx)(s,{films:a,location:n})}},668:function(n,t,e){e.d(t,{Jh:function(){return f},TP:function(){return u},bp:function(){return a},qF:function(){return i},rj:function(){return o}});var c="e7e8717bf37b2131c41f035d5b761556",r="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(r,"trending/all/day?api_key=").concat(c)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("".concat(n," not found")))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(c,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Not found"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US")).then((function(n){return n.json()}))},f=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=829.7d06958a.chunk.js.map