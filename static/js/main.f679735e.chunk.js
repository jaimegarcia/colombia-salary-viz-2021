(this["webpackJsonpcolombiadev-salary-visualization"]=this["webpackJsonpcolombiadev-salary-visualization"]||[]).push([[0],{369:function(e,n,t){},371:function(e,n,t){},491:function(e,n,t){},494:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(108),r=t.n(i),o=(t(369),t(31)),s=t(151),l=t(12),u=t(21),d=t(265),m=(t(371),t(3)),j=function(e){var n=e.min,t=e.max,i=e.step,r=e.defaultValue,o=e.variable,s=e.ordinalScale,j=e.updateChart,p=Object(a.useRef)(null),b=Object(a.useState)(r),h=Object(l.a)(b,2),x=h[0],g=h[1];return Object(a.useEffect)((function(){var e=320,a=20,c=30,l=50,m=30,b=u.h(n,t+1,i).map((function(e){return{key:e,value:e}})),h=u.k(p.current).append("svg").attr("width",e).attr("height",120),x=u.i().domain(b.map((function(e){return e.key}))).range([m,e-c]).padding(.1),f=u.j().domain([u.g(b,(function(e){return e.key})),u.e(b,(function(e){return e.key}))]).range([m+x.bandwidth()/2+.1*x.step()-.5,e-c-x.bandwidth()/2-.1*x.step()-.5]),O=u.j().domain([0,u.e(b,(function(e){return e.value}))]).nice().range([120-l,a]),v=h.append("g").selectAll("rect").data(b),y=v.enter().append("rect").attr("x",(function(e){return x(e.key)})).attr("y",(function(e){return O(e.value)})).attr("height",(function(e){return O(0)-O(e.value)})).attr("width",x.bandwidth());h.append("g").call((function(n){return n.attr("transform","translate(".concat(e-c,",0)")).call(u.b(O).tickValues([1e4]).tickFormat(u.d("($.2s"))).call((function(e){return e.select(".domain").remove()}))})),h.append("g").call((function(e){return e.attr("transform","translate(0,".concat(120-l,")")).call(d.a(f).step(i).ticks(4).default(r).on("onchange",(function(e){return k(e)})))}));var k=function(e){y.merge(v).attr("fill",(function(n){return n.key===e?"#2196F3":"#e0e0e0"})),g(s?s[e]:e),j(o,e)};k(r)}),[]),Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("p",{children:"exchangeRate"===o?u.d("($,.0f")(x):x}),Object(m.jsx)("div",{id:"slider-new-york-times",ref:p})]})},p=t(253),b=t(266),h=function(e){var n=e.x,t=e.y,a=e.margin,c=e.data,i=e.height,r=p(c).dimension((function(e){return e[n]})).group().reduce((function(e,n){return++e.count,e.sum+=n[t],e.avg=e.sum/e.count,e}),(function(e,n){return--e.count,e.sum+=n[t],e.avg=e.sum/e.count,e}),(function(){return{count:0,sum:0,avg:0}}));return Object(m.jsx)("div",{style:{height:i},children:Object(m.jsx)(b.a,{margin:a,padding:.2,data:r.top(1/0).map((function(e){return e.avg=Math.round(1e3*e.value.avg)/1e3,e})).sort((function(e,n){return u.a(e.avg,n.avg)})),indexBy:"key",enableGridX:!0,enableGridY:!0,keys:["avg"],colors:["#F1E15B"],borderWidth:3,borderColor:"#000",enableLabel:!0,labelFormat:function(e){return"".concat(u.d("($,.1f")(e))},labelSkipWidth:20,tooltipFormat:function(e){return"".concat(u.d("($,.1f")(e))},isInteractive:!0,animate:!1,layout:"horizontal"})})},x=t(556),g=t(549),f=t(550),O=t(553),v=t(551),y=(t(491),t.p+"static/media/salaries-proccesed.fcc07f86.csv"),k=["Ninguno","B\xe1sico (puede leer documentaci\xf3n y c\xf3digo en ingl\xe9s)","Intermedio (puede pasar una entrevista de programaci\xf3n en ingles c\xf3modamente)","Avanzado (puede liderar una reunion de varias personas en ingles c\xf3modamente)","Nativo"],w=["Ninguno","Bachiller","T\xe9cnico","Tecn\xf3logo","Pregrado","Especialista","Maestr\xeda","Doctorado"];var S=function(){var e=Object(a.useState)(!0),n=Object(l.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(0),d=Object(l.a)(r,2),p=d[0],b=d[1],S=Object(a.useState)(0),C=Object(l.a)(S,2),M=C[0],E=C[1],F=Object(a.useState)(null),N=Object(l.a)(F,2),V=N[0],$=N[1],z=Object(a.useState)(null),B=Object(l.a)(z,2),P=B[0],R=B[1],D=c.a.useState({exchangeRate:3e3,experience:0,"english-level":1,"max-title":1}),T=Object(l.a)(D,2),W=T[0],A=T[1],G=function(e,n){A((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(o.a)({},e,n))}))};return Object(a.useEffect)((function(){u.c(y,(function(e){return{currency:e.currency,"main-programming-language":e["main-programming-language"],"company-type":e["company-type"].replace("empresa",""),position:e.position,workmode:e.workmode,"min-experience":+e["min-experience"],"max-experience":+e["max-experience"],"english-level":+e["english-level"],"max-title":+e["max-title"],"income-in-currency":+e["income-in-currency"]}})).then((function(e){console.log(e),$(e),i(!1)})).catch((function(e){}))}),[]),Object(a.useEffect)((function(){if(V){var e=V.map((function(e){return e["income-cop"]="Pesos"===e.currency?e["income-in-currency"]/1e6:e["income-in-currency"]*W.exchangeRate/1e6,e}));e=e.filter((function(e){return e["income-cop"]<=1e9&&W.experience>=e["min-experience"]&&W.experience<=e["max-experience"]&&W["english-level"]===e["english-level"]&&W["max-title"]===e["max-title"]})),R(e),b(Math.round(1e3*u.f(e,(function(e){return e["income-cop"]})))/1e3),E(e.length)}}),[W]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x.a,{position:"static",children:Object(m.jsx)(g.a,{children:Object(m.jsx)(f.a,{className:"title",variant:"h6",children:"Visualizaci\xf3n de Salarios de Desarrolladores Colombianos 2021"})})}),Object(m.jsx)("h3",{children:"Hecho por Jaime Garc\xeda. Datos: Encuesta de Colombia Dev 2021 (1,188 personas)"}),!t&&Object(m.jsxs)(O.a,{children:[Object(m.jsx)("br",{}),Object(m.jsxs)(v.a,{container:!0,spacing:3,children:[Object(m.jsxs)(v.a,{item:!0,xs:12,md:4,children:[Object(m.jsx)("b",{children:"\xbfQu\xe9 tasa de conversi\xf3n de d\xf3lar deseas utilizar?"}),Object(m.jsx)(j,{variable:"exchangeRate",updateChart:G,min:3500,defaultValue:3760,max:4500,step:10}),Object(m.jsx)("b",{children:"\xbfCu\xe1ntos a\xf1os de experiencia tienes?"}),Object(m.jsx)(j,{variable:"experience",updateChart:G,min:0,defaultValue:5,max:15,step:1}),Object(m.jsx)("b",{children:"\xbfCu\xe1l es tu nivel de ingles?"}),Object(m.jsx)(j,{variable:"english-level",updateChart:G,min:0,defaultValue:2,max:4,step:1,ordinalScale:k}),Object(m.jsx)("b",{children:"\xbfCu\xe1l es tu m\xe1ximo nivel de formaci\xf3n?"}),Object(m.jsx)(j,{variable:"max-title",updateChart:G,min:0,defaultValue:4,max:7,step:1,ordinalScale:w})]}),Object(m.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(m.jsxs)(v.a,{container:!0,spacing:3,children:[Object(m.jsxs)(v.a,{item:!0,xs:12,children:[Object(m.jsxs)("b",{children:[Object(m.jsxs)("span",{children:["Hay ",M," persona",1!==M&&Object(m.jsx)("span",{children:"s"})," de la comunidad con un perfil parecido al tuyo"]}),M>0&&Object(m.jsx)("span",{children:" y ganan en promedio el equivalente a"})]}),Object(m.jsx)("h2",{children:M>0&&Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsxs)("span",{children:[" ",Object(m.jsx)("h2",{children:Object(m.jsxs)("span",{className:"salary-value",children:[u.d("($,.1f")(p)," Millones de pesos al a\xf1o"]})})]}),Object(m.jsxs)("span",{className:"salary-value",children:[" ",Object(m.jsxs)("span",{children:[u.d("($,.1f")(p/12)," Millones"]})," ","de pesos mensuales"]})]})})]}),M>0&&P&&Object(m.jsxs)(v.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)("b",{children:"Promedios por Lenguaje de Programaci\xf3n (Millones de pesos)"}),Object(m.jsx)(h,{x:"main-programming-language",y:"income-cop",margin:{top:1.5,right:50,bottom:50,left:100},height:550,data:P})]}),M>0&&P&&Object(m.jsxs)(v.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)("b",{children:"Promedios por Tipo de Empresa (Millones de pesos)"}),Object(m.jsx)(h,{x:"company-type",y:"income-cop",margin:{top:1.5,right:50,bottom:50,left:220},height:225,data:P}),Object(m.jsx)("b",{children:"Promedios por Modo de Trabajo (Millones de pesos)"}),Object(m.jsx)(h,{x:"workmode",y:"income-cop",margin:{top:1.5,right:50,bottom:50,left:100},height:325,data:P})]})]})})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[494,1,2]]]);
//# sourceMappingURL=main.f679735e.chunk.js.map