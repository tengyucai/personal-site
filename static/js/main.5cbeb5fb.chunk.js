(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,b=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(b);var o=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),d=n(22),h=[{index:!0,label:"Tengyu Cai",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,162,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(23),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Tengyu Cai"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:tengyucai@gmail.com",children:"tengyucai at gmail dot com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Software Engineer by day, Astrophotographer by night, Umbraphile for life."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Tengyu Cai ",Object(c.jsx)(u.b,{to:"/",children:"tengyucai.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Tengyu Cai",defaultTitle:"Tengyu Cai",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};y.defaultProps={children:null,fullPage:!1,title:null,description:"Tengyu Cai's personal website."};t.a=y},23:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(27)),l=n(28),a=n(29),s=n(30),r=[{link:"https://github.com/tengyucai",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/tengyucai",label:"LinkedIn",icon:a.faLinkedinIn},{link:"mailto:tengyucai@gmail.com",label:"Email",icon:s.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),s=n(5),r=n(3),j=n(20),b=(n(43),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,159))}))),o=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,166))})),u=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,160))})),d=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,161))})),h=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,165))})),O=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,163))})),x=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,164))})),m=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:b}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:x}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[44,1,3]]]);
//# sourceMappingURL=main.5cbeb5fb.chunk.js.map