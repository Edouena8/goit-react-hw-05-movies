"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[621],{621:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var o,r,i,c,a,x,p,s,u,d,l=t(439),f=t(791),h=t(689),g=t(596),m=t(668),b=t(116),j=t(168),v=t(87),w=t(82),k=w.ZP.p(o||(o=(0,j.Z)(["\n    margin-bottom: 20px;\n    text-align: center;\n    color:  #FFFFFF;\n"]))),Z=(0,w.ZP)(v.rU)(r||(r=(0,j.Z)(["\n    display: block;\n    width: 100px;\n    padding: 8px 16px;\n    text-align: center;\n    border-radius: 4px;\n    text-decoration: none;\n    color: white;\n    background-color: #331016;\n    font-weight: 500;\n    cursor: pointer;\n\n    &:hover {\n        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n    }\n"]))),_=w.ZP.ul(i||(i=(0,j.Z)(["\n  display: flex;\n  gap: 50px;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 20px;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);\n  margin-bottom: 40px;\n"]))),y=t(184),P=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(k,{children:"Additional information"}),(0,y.jsxs)(_,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(Z,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(Z,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(f.Suspense,{fallback:(0,y.jsx)(b.Z,{}),children:(0,y.jsx)(h.j3,{})})]})},F=w.ZP.div(c||(c=(0,j.Z)(["\n  max-width: 1230px;\n  margin: 0 auto;\n  padding: 0 15px; \n"]))),S=(0,w.ZP)(v.rU)(a||(a=(0,j.Z)(["\n  display: block;\n  width: 100px;\n  padding: 8px 16px;\n  text-align: center;\n  border-radius: 4px;\n  margin-bottom: 40px;\n  text-decoration: none;\n  color: white;\n  background-color: #331016;\n  font-weight: 500;\n  cursor: pointer;\n\n  &:hover {\n    -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); \nbox-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);\n  }\n"]))),U=w.ZP.div(x||(x=(0,j.Z)(["\n    display: flex;\n    gap: 30px;\n    color: #fff;\n    margin-bottom: 50px;\n"]))),L=w.ZP.div(p||(p=(0,j.Z)(["\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);\n    margin-bottom: 50px;\n"]))),R=w.ZP.h2(s||(s=(0,j.Z)(["\n  margin-bottom: 20px;\n  color: #e6e6e6;\n"]))),A=w.ZP.h3(u||(u=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),C=w.ZP.p(d||(d=(0,j.Z)(["\nmargin-bottom: 50px;\n"]))),E=function(n){var e=n.film,t=n.backLinkLocationRef,o=e.original_title,r=e.title,i=e.poster_path,c=e.vote_average,a=e.overview,x=e.genres;return(0,y.jsxs)(F,{children:[(0,y.jsx)(S,{to:t,children:"Go back"}),(0,y.jsxs)(U,{children:[(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i),alt:r}),(0,y.jsxs)(L,{children:[(0,y.jsx)(R,{children:o||r}),(0,y.jsxs)(C,{children:["User Score: ",Math.round(100*c/10),"%"]}),(0,y.jsx)(A,{children:"Overview"}),(0,y.jsx)(C,{children:a}),(0,y.jsx)(A,{children:"Genres"}),(0,y.jsx)(C,{children:x.map((function(n){return n.name})).join(" ")})]})]}),(0,y.jsx)(P,{})]})},T=function(){var n,e,t=(0,h.UO)().movieId,o=(0,h.TH)(),r=(0,f.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),i=(0,f.useState)(null),c=(0,l.Z)(i,2),a=c[0],x=c[1],p=(0,f.useState)(null),s=(0,l.Z)(p,2),u=s[0],d=s[1];return(0,f.useEffect)((function(){t&&(0,m.TP)(t).then((function(n){n?x(n):g.Am.error("Sorry, not found")})).catch((function(n){return d(n)}))}),[t]),(0,y.jsxs)("div",{children:[a&&(0,y.jsx)(E,{film:a,backLinkLocationRef:r.current}),u&&(0,y.jsx)("h2",{style:{textAlign:"center",color:"white"},children:u.message})]})}},668:function(n,e,t){t.d(e,{Jh:function(){return p},TP:function(){return a},bp:function(){return x},qF:function(){return c},rj:function(){return i}});var o="e7e8717bf37b2131c41f035d5b761556",r="https://api.themoviedb.org/3/",i=function(){return fetch("".concat(r,"trending/all/day?api_key=").concat(o)).then((function(n){return n.json()}))},c=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(n," not found")))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry, not found."))}))},x=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){return n.json()}))},p=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=621.6db12afc.chunk.js.map