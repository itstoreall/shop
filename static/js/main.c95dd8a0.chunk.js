(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[6],{11:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return f}));var c=n(6),r=Object(c.b)("shop/filter/set"),o=Object(c.b)("shop/cart/add"),a=Object(c.b)("shop/cart/delete"),i=Object(c.b)("cart/increment"),l=Object(c.b)("cart/decrement"),s=Object(c.b)("shop/items/request"),u=Object(c.b)("shop/items/success"),b=Object(c.b)("shop/items/failure"),d=Object(c.b)("shop/cart/request"),j=Object(c.b)("shop/cart/success"),f=Object(c.b)("shop/cart/failure")},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(0),i=n.n(a),l=n(22),s=n.n(l),u=n(28),b=n(19),d=n(15),j=Object(d.a)({Header:{display:"flex",alignItems:"center",height:50,color:"white",backgroundColor:"#6a7cb2",borderBottom:"3px solid #fff"},logo:{display:"block",fontSize:18,fontWeight:600},tel:{display:"block"}}),f=n(2),h=function(){var e=j();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:e.Header,children:Object(f.jsxs)("div",{className:"container Header",children:[Object(f.jsx)("p",{className:e.logo,children:"my Shop"}),Object(f.jsx)("p",{className:e.tel,children:"Phone-number"})]})})})},p=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,140))})),O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(3)]).then(n.bind(null,137))})),m=[{path:"/",label:"Home",component:p,exact:!0,showInMenu:!0},{path:"/products/:id",label:"Product Details",component:Object(a.lazy)((function(){return n.e(4).then(n.bind(null,141))})),exact:!1,showInMenu:!1},{path:"/products",label:"Product",component:O,exact:!0,showInMenu:!0},{path:"/cart",label:"Cart",component:Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,138))})),exact:!1,showInMenu:!0},{path:"/reviews",label:"Reviews",component:Object(a.lazy)((function(){return n.e(5).then(n.bind(null,142))})),exact:!1,showInMenu:!0}],x=Object(d.a)({NavBar:{overflow:"scroll",display:"flex",flexDirection:"column",width:140,borderRight:"1px solid #f2f2f2"},link:{padding:20,color:"grey",fontWeight:500,backgroundColor:"#f1f1f1",borderRadius:5,border:"3px solid #fff",borderBottom:"none","&:first-child":{borderTop:"none"},"&:hover":{color:"#fff",backgroundColor:"#979fcb"}},activeLink:{color:"#fff",backgroundColor:"#957aa4","&:hover":{color:"#fff",backgroundColor:"#957aa4"}}}),g=function(){var e=x();return Object(f.jsx)("div",{className:e.NavBar,children:m.map((function(t){var n=t.path,c=t.label;return t.showInMenu?Object(f.jsx)(b.c,{to:n,exact:!0,className:e.link,activeClassName:e.activeLink,children:c},n):null}))})},y=n(4),v=Object(d.a)({Content:{padding:20,width:"100%",overflow:"scroll"}}),k=function(){return Object(f.jsx)("a",{href:"/",children:"Go to the Home page"})},w=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"ERROR 404 - Page not found"}),Object(f.jsx)(k,{})]})},N=function(){var e=v();return Object(f.jsx)("section",{className:e.Content,children:Object(f.jsx)(a.Suspense,{fallback:Object(f.jsx)("span",{children:"Loading..."}),children:Object(f.jsxs)(y.c,{children:[m.map((function(e){var t=e.path,n=e.exact,c=e.component;return Object(f.jsx)(y.a,{path:t,exact:n,component:c},t)})),Object(f.jsx)(y.a,{component:w})]})})})},I=Object(d.a)({Footer:{display:"flex",alignItems:"center",height:50,color:"white",backgroundColor:"#6a7cb2",borderTop:"3px solid #fff"},logo:{display:"block",fontSize:18,fontWeight:600}}),C=function(){var e=I();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:e.Footer,children:Object(f.jsx)("div",{className:"container Footer",children:Object(f.jsx)("p",{className:e.logo,children:"my Shop"})})})})},z=Object(d.a)({App:{},main:{display:"flex",margin:"0 auto",width:"100%"}}),M=function(){var e=z();return Object(f.jsxs)("div",{className:e.App,children:[Object(f.jsx)(h,{}),Object(f.jsxs)("div",{className:"container App",children:[Object(f.jsx)(g,{}),Object(f.jsx)("main",{className:e.main,children:Object(f.jsx)(N,{})})]}),Object(f.jsx)(C,{})]})},F=n(12),P=n(9),R=n(21),S=n(23),B=n(6),H=n(11),L=[],A=[],W={},q=!1,D=!1,E=Object(B.c)(L,Object(P.a)({},H.k,(function(e,t){return t.payload}))),J=Object(B.c)(q,(c={},Object(P.a)(c,H.j,(function(){return!0})),Object(P.a)(c,H.k,(function(){return!1})),Object(P.a)(c,H.i,(function(){return!1})),c)),T=Object(B.c)(D,(r={},Object(P.a)(r,H.d,(function(){return!0})),Object(P.a)(r,H.e,(function(){return!1})),Object(P.a)(r,H.c,(function(){return!1})),r)),G=Object(B.c)(A,(o={},Object(P.a)(o,H.e,(function(e,t){return t.payload})),Object(P.a)(o,H.f.type,(function(e,t){return[].concat(Object(S.a)(e),[t.payload])})),Object(P.a)(o,H.g.type,(function(e,t){return e.filter((function(e){return e.productId!==t.payload}))})),Object(P.a)(o,H.b.type,(function(e,t){return e.map((function(e){return e.id===t.payload?Object(R.a)(Object(R.a)({},e),{},{count:e.count+1}):e}))})),Object(P.a)(o,H.a.type,(function(e,t){return e.map((function(e){return e.id===t.payload?Object(R.a)(Object(R.a)({},e),{},{count:e.count-1<0?0:e.count-1}):e}))})),o)),K=Object(B.c)(W,Object(P.a)({},H.h.type,(function(e,t){return t.payload}))),Q=Object(F.c)({items:E,cart:G,filter:K,isLoading:J,cartIsLoading:T}),U=Object(F.c)({shop:Q}),V=Object(B.a)({reducer:U});n(56),n(57);s.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b.a,{children:Object(f.jsx)(u.a,{store:V,children:Object(f.jsx)(M,{})})})}),document.getElementById("root"))}},[[58,7,8]]]);
//# sourceMappingURL=main.c95dd8a0.chunk.js.map