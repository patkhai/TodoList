(function(t){function e(e){for(var n,r,u=e[0],i=e[1],s=e[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2ee5a64b"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o={about:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"b23e0e25"}[t]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===a))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===n||d===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],f.parentNode.removeChild(f),o(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},3384:function(t,e,o){},"3fa4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},u=[],i={name:"Header"},s=i,d=(o("e5f6"),o("2877")),l=Object(d["a"])(s,c,u,!1,null,"3c65bd7a",null),f=l.exports,p={name:"app",components:{Header:f}},m=p,h=(o("034f"),Object(d["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=(o("d3b7"),o("8c4f")),g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],_=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{task:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},k=[],j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.task.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.task.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.task.id)}}},[t._v("Delete")])])])},w=[],O={name:"TodoItem",props:["task"],methods:{markComplete:function(){this.task.completed=!this.task.completed}}},x=O,E=(o("6fad"),Object(d["a"])(x,j,w,!1,null,"14284c0c",null)),C=E.exports,A={name:"Todos",components:{TodoItem:C},props:["todos"]},P=A,S=Object(d["a"])(P,T,k,!1,null,"89623398",null),$=S.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},L=[],N={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},D=N,I=(o("680d"),Object(d["a"])(D,H,L,!1,null,"75d0a75c",null)),M=I.exports,B=o("bc3a"),q=o.n(B),J={name:"Home",components:{Todos:$,AddTodo:M},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){var e=this;q.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(o){return e.todos=e.todos.filter((function(e){return e.id!==t}),o.data)})).catch((function(t){return console.log(t)}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;q.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos=[].concat(Object(_["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;q.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))}},F=J,K=(o("cccb"),Object(d["a"])(F,g,y,!1,null,null,null)),U=K.exports;n["a"].use(b["a"]);var z=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],G=new b["a"]({routes:z}),Q=G;n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(v)}}).$mount("#app")},"5ced":function(t,e,o){},"680d":function(t,e,o){"use strict";var n=o("691e"),r=o.n(n);r.a},"691e":function(t,e,o){},"6fad":function(t,e,o){"use strict";var n=o("3fa4"),r=o.n(n);r.a},"85ec":function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},e5f6:function(t,e,o){"use strict";var n=o("3384"),r=o.n(n);r.a}});
//# sourceMappingURL=app.e714620b.js.map