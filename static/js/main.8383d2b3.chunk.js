(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{37:function(t,n,e){},59:function(t,n,e){"use strict";e.r(n);var a,c,i,o,r,s,p,u,b,l,d,f,j,x,h,g=e(0),O=e.n(g),m=e(24),v=e.n(m),y=(e(37),e(5)),w=e(6),S=e.n(w),k=e(1),z=e(2),C=Object(z.a)(a||(a=Object(k.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');\n\nbody{\n  font-family: 'Montserrat', sans-serif;\n}\n\n"]))),L=e(28),T=e(29),E=e(32),I=e(30),W=z.b.button(c||(c=Object(k.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n  font-weight: 500;\n  background-color: #e9b15e;\n  border-radius: 4px;\n  color: #ffffff;\n  border: 2px solid transparent;\n  font-weight: 600;\n  font-size: 14px;\n  transition: all ease 0.3s;\n  &:hover,\n  &:focus {\n    background-color: #2e2c2c;\n    color: #e9b15e;\n    border: 2px solid transparent;\n  }\n"]))),B=Object(z.b)(W)(i||(i=Object(k.a)(["\n  width: 100%;\n  max-width: 180px;\n  margin: 0 auto;\n"]))),F=W,A=z.b.div(o||(o=Object(k.a)(["\n  margin: 0 auto;\n  width: 280px;\n  height: 350px;\n  padding: 10px 20px 20px 20px;\n  opacity: 0.95;\n"]))),M=z.b.div(r||(r=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),R=A,U=z.b.img(s||(s=Object(k.a)(["\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n"]))),J=Object(z.b)(U)(p||(p=Object(k.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n"]))),P=z.b.div(u||(u=Object(k.a)(["\n  width: 100%;  \n  border-radius: 8px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  border: 2px solid #c5c1c1;\n  padding: 30px 10px;\n  text-align: center;\n  cursor: pointer;\n  transition: all ease 0.3s;\n  position: relative;\n  &:hover {\n    box-shadow: 0 1px 10px #363635;\n    border: 2px solid transparent;\n  }\n"]))),V=z.b.span(b||(b=Object(k.a)(["\nfont-weight:  ",";\nfont-size: ","\n  max-height: 250px;\n  height: 100%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.2;\n  padding: 0 20px;\n"])),(function(t){return t.fontWeight||"400"}),(function(t){return t.fontSize||"14px"})),D=z.b.span(l||(l=Object(k.a)(["\n  font-weight: 600;\n"]))),q=Object(z.b)(D)(d||(d=Object(k.a)([""]))),G=z.b.span(f||(f=Object(k.a)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: 20px;\n  display:inline-flex;\n  justify-content:center;\n  align-items:center;\n"])),(function(t){return t.color||"black"}),(function(t){return t.fontSize||"14px"}),(function(t){return t.fontWeight||"400"})),H=Object(z.b)(G)(j||(j=Object(k.a)(["\n  margin-bottom: 0;\n  text-decoration: line-through;\n"]))),K=e(3),N=function(t){Object(E.a)(e,t);var n=Object(I.a)(e);function e(){var t;Object(L.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).state=t.props.product,t}return Object(T.a)(e,[{key:"render",value:function(){var t=this.state,n=t.title,e=t.image,a=t.rating,c=t.price;return Object(K.jsxs)(P,{children:[Object(K.jsx)(R,{children:Object(K.jsx)(U,{alt:n,src:e})}),Object(K.jsx)(V,{fontSize:"16px",fontWeight:"700",color:"black",children:n}),Object(K.jsx)(D,{children:" Rating: ".concat(a.rate)}),Object(K.jsx)(q,{children:"In stock: ".concat(a.count," ")}),Object(K.jsxs)(G,{color:"#e9b15e",fontSize:"24px",fontWeight:"700",children:["".concat(c,"\u20ac"),"\xa0",Object(K.jsx)(H,{color:"#b3b0b0",fontSize:"16px",fontWeight:"600",children:"".concat(Math.floor(+c+50)," \u20ac")})]}),Object(K.jsx)(B,{children:"Add to cart"})]})}}]),e}(O.a.Component),Q=N,X=e(31),Y=z.b.div(x||(x=Object(k.a)(["\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 650px;\n  width: 100%;\n"]))),Z=z.b.input.attrs({type:"text",placeholder:"Search..."})(h||(h=Object(k.a)(["\n  padding: 8px 15px;\n  margin: 0 auto;\n  max-width: 380px;\n  width: 100%;\n  height: 36px;\n  display: flex;\n  font-weight: 500;\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  margin-bottom: 25px;\n  outline: none;\n  border: 2px solid #c5c1c1;\n  &:focus {\n    border: 3px solid #e9b15e;\n  }\n"])));S.a.defaults.baseURL="https://fakestoreapi.com";var $,_,tt=function(t){var n=t.updateInputValue,e=t.loading,a=t.activeButton,c=Object(g.useState)(""),i=Object(y.a)(c,2),o=i[0],r=i[1],s=Object(g.useState)([]),p=Object(y.a)(s,2),u=p[0],b=p[1];return Object(g.useEffect)((function(){e(!0),S.a.get("/products/categories").then((function(t){var n=t.data;b([].concat(Object(X.a)(n),["all"]))})).finally((function(){return e(!1)}))}),[]),Object(g.useEffect)((function(){var t=setTimeout((function(){n(o),e(!0);var t=setTimeout((function(){e(!1)}),300);return function(){clearTimeout(t)}}),600);return function(){clearTimeout(t)}}),[o]),Object(K.jsxs)(Y,{children:[Object(K.jsx)(M,{children:u.sort().map((function(t){return Object(K.jsx)(F,{onClick:function(){a(t),r("")},children:t.charAt(0).toUpperCase()+t.slice(1)},t)}))}),Object(K.jsx)(Z,{type:"text",placeholder:"Search...",value:o,onChange:function(t){r(t.target.value.trimLeft())}})]})},nt=z.b.div($||($=Object(k.a)(["\n  padding: 40px 10px;\n"]))),et=z.b.div(_||(_=Object(k.a)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fit, 320px);\n  gap: 20px;\n  \n  @media only screen and (max-width: 375px){\n    grid-template-columns: repeat(auto-fit, 300px);\n    gap:15px;   \n  }\n"])));S.a.defaults.baseURL="https://fakestoreapi.com";var at=function(){var t=Object(g.useState)(!1),n=Object(y.a)(t,2),e=n[0],a=n[1],c=Object(g.useState)([]),i=Object(y.a)(c,2),o=i[0],r=i[1],s=Object(g.useState)([]),p=Object(y.a)(s,2),u=p[0],b=p[1],l=Object(g.useState)(""),d=Object(y.a)(l,2),f=d[0],j=d[1],x=Object(g.useState)("all"),h=Object(y.a)(x,2),O=h[0],m=h[1];Object(g.useEffect)((function(){a(!0),S.a.get("/products").then((function(t){var n=t.data;r(n),b(n)})).finally((function(){return a(!1)}))}),[]);return Object(g.useEffect)((function(){!function(){var t=o.filter((function(t){return t.title.toLowerCase().includes(f.toLowerCase())}));b(t)}()}),[e]),Object(K.jsxs)(nt,{children:[Object(K.jsx)(C,{}),Object(K.jsx)(tt,{updateInputValue:j,loading:a,activeButton:m}),e?Object(K.jsx)(J,{src:"loading.gif"}):Object(K.jsx)(et,{children:u.filter((function(t){return"all"===O?t:t.category===O})).map((function(t){return Object(K.jsx)(Q,{product:t},t.id)}))})]})},ct=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,60)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),a(t),c(t),i(t),o(t)}))};v.a.render(Object(K.jsx)(at,{}),document.getElementById("root")),ct()}},[[59,1,2]]]);
//# sourceMappingURL=main.8383d2b3.chunk.js.map