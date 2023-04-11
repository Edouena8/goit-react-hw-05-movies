"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[569],{569:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r=e(439),o=e(791),i=e(87),a=e(689),c=e(596),p=e(668),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=o.createContext&&o.createContext(l),s=function(){return s=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},s.apply(this,arguments)},u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function f(n){return n&&n.map((function(n,t){return o.createElement(n.tag,s({key:t},n.attr),f(n.child))}))}function d(n){return function(t){return o.createElement(h,s({attr:s({},n.attr)},t),f(n.child))}}function h(n){var t=function(t){var e,r=n.attr,i=n.size,a=n.title,c=u(n,["attr","size","title"]),p=i||t.size||"1em";return t.className&&(e=t.className),n.className&&(e=(e?e+" ":"")+n.className),o.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:e,style:s(s({color:n.color||t.color},t.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),n.children)};return void 0!==x?o.createElement(x.Consumer,null,(function(n){return t(n)})):t(l)}function g(n){return d({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(n)}var m,b,v,w,y,j,k,Z,F,P=e(168),_=e(82),S=_.ZP.div(m||(m=(0,P.Z)(["\n    margin-bottom: 50px;\n    display: flex;\n    justify-content: center;\n"]))),O=_.ZP.form(b||(b=(0,P.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #331016;\n\n    border-radius: 3px;\n    overflow: hidden;\n\n    &:hover {\n        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); \n        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);\n      }\n"]))),E=_.ZP.button(v||(v=(0,P.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  padding: 8px 16px;\n  text-align: center;\n  border-radius: 4px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.5;\n  transition: opacity 250ms cubic-bezier(#331016);\n  cursor: pointer;\n  outline: none;\n"]))),A=_.ZP.span(w||(w=(0,P.Z)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n"]))),C=_.ZP.input(y||(y=(0,P.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding: 8px 16px;\n  background-color: #331016;\n  color: #FFF;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),z=e(184),B=function(n){var t=n.handleFormSubmit;return(0,z.jsx)(S,{children:(0,z.jsxs)(O,{onSubmit:t,children:[(0,z.jsxs)(E,{type:"submit",children:[(0,z.jsx)(g,{width:40,height:40}),(0,z.jsx)(A,{children:"Search"})]}),(0,z.jsx)(C,{type:"text",name:"filmtitle",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})},N=_.ZP.div(j||(j=(0,P.Z)(["\n  max-width: 1230px;\n  margin: 0 auto;\n  padding: 0 15px; \n"]))),U=_.ZP.ul(k||(k=(0,P.Z)(["\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n"]))),q=_.ZP.li(Z||(Z=(0,P.Z)(["\n  width: 200px;\n  -webkit-box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 9px 5px rgba(0,0,0,0.03); \n  box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925, 5px 5px 9px 5px rgba(0,0,0,0.03);\n\n    &:hover {\n      -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); \n      box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);\n    }\n"]))),T=(0,_.ZP)(i.rU)(F||(F=(0,P.Z)(["\n    color: #fff;\n    text-decoration: none;\n"]))),D=function(n){var t=n.films,e=n.location;return(0,z.jsx)(N,{children:(0,z.jsx)(U,{children:t.map((function(n){var t=n.id,r=n.original_title,o=n.title,i=n.poster_path;return(0,z.jsx)(q,{children:(0,z.jsxs)(T,{to:"".concat(t),state:{from:e},children:[(0,z.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(i),alt:""}),(0,z.jsx)("p",{children:r||o})]})},t)}))})})},H=e(116),I=function(){var n=(0,a.TH)(),t=(0,o.useState)([]),e=(0,r.Z)(t,2),l=e[0],x=e[1],s=(0,o.useState)(null),u=(0,r.Z)(s,2),f=u[0],d=u[1],h=(0,i.lr)(),g=(0,r.Z)(h,2),m=g[0],b=g[1],v=m.get("title");(0,o.useEffect)((function(){v&&(0,p.qF)(v).then((function(n){var t=n.results;t.length?x(t):c.Am.error("".concat(v," not found"))})).catch((function(n){return d(n)}))}),[v]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(B,{handleFormSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.elements.filmtitle.value;""===e?c.Am.error("Enter movie name"):(b({title:e}),t.reset())}}),l.length>0&&(0,z.jsx)(D,{films:l,location:n}),f&&(0,z.jsx)("h2",{children:f.message}),(0,z.jsx)(o.Suspense,{fallback:(0,z.jsx)(H.Z,{}),children:(0,z.jsx)(a.j3,{})})]})}},668:function(n,t,e){e.d(t,{Jh:function(){return l},TP:function(){return c},bp:function(){return p},qF:function(){return a},rj:function(){return i}});var r="e7e8717bf37b2131c41f035d5b761556",o="https://api.themoviedb.org/3/",i=function(){return fetch("".concat(o,"trending/all/day?api_key=").concat(r)).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(o,"search/movie?api_key=").concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("".concat(n," not found")))}))},c=function(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry, not found."))}))},p=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))},l=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=569.753a4804.chunk.js.map