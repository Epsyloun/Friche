(this.webpackJsonpfriche=this.webpackJsonpfriche||[]).push([[0],{14:function(e,c,a){},17:function(e,c,a){"use strict";a.r(c);var t=a(1),i=a(7),n=a.n(i),s=(a(14),a(2)),r=function(){var e=Object(t.useState)(window.innerHeight),c=Object(s.a)(e,2),a=c[0],i=c[1];return window.addEventListener("resize",(function(){i(window.innerHeight)})),a},o=a(0),l=function(){var e=r();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"Inicio",className:"img-background padre-center-align section scrollspy",style:{height:e},children:[Object(o.jsxs)("div",{className:"container flex-center",children:[Object(o.jsx)("h1",{children:"Las mejores semillas y dulces"}),Object(o.jsx)("h3",{children:"Al alcance de tu mano"})]}),Object(o.jsx)("a",{href:"#Productos",className:"center flecha-abajo-caja black-text material-icons",children:"keyboard_arrow_down"})]})})},d=function(){var e=r(),c=function(){var e=Object(t.useState)(window.scrollY),c=Object(s.a)(e,2),a=c[0],i=c[1];return window.onscroll=function(){i(window.scrollY)},a}();return Object(t.useEffect)((function(){var a=document.getElementById("navbar");c<.5*e?(a.classList.remove("navbar-sis"),a.classList.add("navbar-non")):(a.classList.add("navbar-sis"),a.classList.remove("navbar-non"))}),[e,c]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"navbar",className:"navbar-fixed navbar-none ",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:"nav-wrapper white ",children:[Object(o.jsx)("a",{href:"#!",className:"brand-logo center orange-text",children:"Logo"}),Object(o.jsx)("a",{href:"#!","data-target":"mobile-demo",className:"sidenav-trigger right orange-text",children:Object(o.jsx)("i",{className:"material-icons",children:"menu"})}),Object(o.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Inicio",children:"Inicio"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Productos",children:"Productos"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Contacto",children:"Contactanos"})})]})]})})}),Object(o.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Categorias",children:"Inicio"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Categories",children:"Categorias"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Buscador",children:"Buscador"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"orange-text",href:"#Contacto",children:"Contactanos"})})]})]})},j=a(9),h=a.p+"static/media/cafo.63c9c488.jpg",x=function(e){var c=e.name,a=e.precio;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"col s6 m4",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:h,alt:c})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:c}),Object(o.jsxs)("p",{children:["$",a]})]})]})})})},m=a(6),b=a.n(m),u=a(8),O=[{id:1,name:"Mani salado",category:["Mani","Salado"],precio:.25,exist:!0},{id:2,name:"Mani con chile",category:["Mani","Salado","Chile"],precio:.25,exist:!0},{id:3,name:"Mani dulce",category:["Mani","Dulce"],precio:.25,exist:!0},{id:4,name:"Mani mixto",category:["Mani","Salado","Dulce","Chile"],precio:.25,exist:!0},{id:5,name:"Mani japones",category:["Mani","Salado"],precio:.25,exist:!0},{id:6,name:"Cereza con eucalipto",category:["Dulce tipico"],precio:.25,exist:!0},{id:7,name:"Dulce de tamarindo",category:["Dulce tipico"],precio:.25,exist:!0},{id:8,name:"Coco rayado",category:["Dulce tipico"],precio:.25,exist:!0},{id:9,name:"Platanitos dulces",category:["Dulce tipico"],precio:.25,exist:!0},{id:10,name:"Pepitoria",category:["Salado"],precio:.25,exist:!0},{id:11,name:"Platanitos",category:["Salado"],precio:.25,exist:!0},{id:12,name:"Chocovitos de galleta",category:["Chocolate"],precio:.25,exist:!0},{id:13,name:"Chocovitos de menta",category:["Chocolate"],precio:.25,exist:!0},{id:14,name:"Chocolates Hershey",category:["Chocolate"],precio:1,exist:!0},{id:15,name:"Pachicletas fuego",category:["Chile"],precio:.25,exist:!0},{id:16,name:"Paletas mango con chile",category:["Chile"],precio:.25,exist:!0},{id:17,name:"Tiras acidas",category:["Dulce"],precio:.25,exist:!0},{id:18,name:"Frutsis",category:["Bebidas"],precio:.25,exist:!0}],p=function(){var e=Object(u.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=O.map((function(e){return{id:e.id,name:e.name,precio:e.precio,exist:e.exist}})),e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=function(){var e=Object(t.useState)({data:[],loading:!0}),c=Object(s.a)(e,2),a=c[0],i=c[1];return Object(t.useEffect)((function(){p().then((function(e){i({data:e,loading:!1})}))}),[]),a}(),c=e.data,a=e.loading;return Object(o.jsxs)(o.Fragment,{children:[a&&Object(o.jsx)("p",{className:"",children:"Cargando..."}),Object(o.jsx)("div",{id:"Productos",className:"container row section scrollspy",children:Object(o.jsx)("div",{className:"row",children:c.map((function(e){return Object(o.jsx)(x,{name:e.name,precio:e.precio},e.id)}))})})]})},f=function(e){var c=e.setBuscador,a=Object(t.useState)(""),i=Object(s.a)(a,2),n=i[0],r=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"container row ",children:Object(o.jsxs)("form",{className:"col s12 m12 section scrollspy",autoComplete:"off",id:"Buscador",onSubmit:function(e){e.preventDefault(),n.trim().length>2&&(c((function(e){return[n].concat(Object(j.a)(e))})),r(""))},children:[Object(o.jsxs)("div",{className:"input-field col s8 m8",children:[Object(o.jsx)("i",{className:"material-icons prefix",children:"search"}),Object(o.jsx)("input",{placeholder:"Buscador",id:"first_name",type:"text",className:"validate",onChange:function(e){r(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-field col s4 m4",children:[Object(o.jsxs)("select",{children:[Object(o.jsx)("option",{value:"1",children:"Todos"}),Object(o.jsx)("option",{value:"2",children:"Salados"}),Object(o.jsx)("option",{value:"3",children:"Dulces"}),Object(o.jsx)("option",{value:"4",children:"Bebidas"}),Object(o.jsx)("option",{value:"5",children:"Manis"}),Object(o.jsx)("option",{value:"6",children:"Dulces tipicos"})]}),Object(o.jsx)("label",{children:"Categorias"})]})]})}),Object(o.jsx)(g,{})]})},v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(l,{}),Object(o.jsx)(f,{})]})};n.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c9d2b292.chunk.js.map