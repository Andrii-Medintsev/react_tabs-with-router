(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),l=function(t){var e=t.to,c=t.text;return Object(r.jsx)(s.c,{to:e,className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",text:"Home"}),Object(r.jsx)(l,{to:"/tabs",text:"Tabs"})]})})})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=function(t){var e=t.tabs,c=Object(i.h)().tabId;return Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{className:j()({"is-active":c===t.id}),"data-cy":"Tab",children:Object(r.jsx)(s.b,{to:"/tabs/".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var t=Object(i.h)().tabId,e=h.find((function(e){return e.id===t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(x,{tabs:h}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===e||void 0===e?void 0:e.content)||"Please select a tab"})]})},m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(O,{})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(O,{})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.54c2fca5.chunk.js.map