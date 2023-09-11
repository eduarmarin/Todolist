(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var l=e.g.document;if(!t&&l&&(l.currentScript&&(t=l.currentScript.src),!t)){var n=l.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!t;)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"ca64f273c11e0ccada8d.svg",l=new Image;function n(e,t,l,n){this.tittle=e,this.description=t,this.date=l,this.important=n}function i(){console.log("displaytasklist--");let e=localStorage.getItem("testJSON"),t=JSON.parse(e);for(;ee.lastChild;)ee.removeChild(ee.lastChild);for(let e=0;e<t.length;e++){var n=document.createElement("div");n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.flexDirection="row",n.style.border="solid",n.style.borderColor="lightgray",n.style.borderWidth="1px",n.style.gap="4px",n.style.paddingLeft="1%",n.style.paddingRight="1%",n.style.width="95%";for(let n in t[e]){if("tittle"==n){var i=document.createElement("div");i.textContent=t[e][n],i.style.width="20%",i.style.overflow="hidden",i.style.padding="2px",i.classList.add("divconttittle"),window.matchMedia("(max-width: 600px)").matches&&(i.style.fontSize="15px")}if("description"==n){var o=document.createElement("div");o.textContent=t[e][n],o.style.width="45%",o.style.overflow="hidden",o.style.padding="2px",o.classList.add("divcontdescrip"),window.matchMedia("(max-width: 600px)").matches&&(o.style.fontSize="15px")}if("date"==n){var s=document.createElement("div");s.textContent=t[e][n],s.style.minWidth="20%",s.style.overflow="hidden",s.style.padding="2px",s.classList.add("divcontdate"),window.matchMedia("(max-width: 600px)").matches&&(s.style.fontSize="12px")}if("important"==n){var d=document.createElement("div");d.style.width="10%",d.style.height="15px",d.style.border="solid",d.style.borderWidth="1px",d.style.borderRadius="4px",d.style.borderColor="white",d.classList.add("divcontimp"),1==t[e][n]?d.style.backgroundColor="#e8ad09":d.style.backgroundColor="gray"}var r=document.createElement("div");r.style.cursor="pointer",r.style.position="relative",r.style.display="flex",r.classList.add("menu"),r.appendChild(l.cloneNode(!0)),r.style.width="5%"}[d,i,o,s,r].forEach((e=>n.appendChild(e))),ee.appendChild(n)}var c=document.getElementsByClassName("menu");for(let e=0,t=c.length;e<t;e++)!function(t){c[e].onclick=function(){console.log("index out "+t),a(t,c)}}(e)}l.src=t,l.style.width="20px";var o=document.createElement("div");o.classList.add("content"),o.id="menucont",o.style.display="none",o.style.position="absolute",o.style.top="90%",o.style.right="30%",o.style.overflow="auto",o.style.minWidth="60px",o.style.color="white",o.style.fontWeight="bold",o.style.textAlign="center",o.style.backdropFilter="blur(1px)",o.style.zIndex="1";var s=document.createElement("div");s.textContent="Delete",s.classList.add("del"),s.addEventListener("click",c);var d,r=document.createElement("div");function a(e,t){return d=e,t[e].appendChild(o),"none"===document.getElementById("menucont").style.display?document.getElementById("menucont").style.display="block":document.getElementById("menucont").style.display="none",d}function c(e){e.stopPropagation(),document.getElementById("menucont").style.display="none";let t=localStorage.getItem("testJSON"),l=JSON.parse(t);var n=this.innerHTML;if("Delete"==n){l.splice(d,1),console.log("tasklist after delete "+l);var o=JSON.stringify(l);localStorage.setItem("testJSON",o),i()}if("Modify"==n){p.style.display="block",p.style.position="absolute",p.style.backdropFilter="blur(2px)",m.style.position="absolute",m.style.left="30%",m.style.right="30%",m.style.bottom="30%",m.style.top="30%",document.body.style.position="relative",document.body.appendChild(p);for(let e in l[d])"tittle"==e&&(document.getElementById("tittlein").value=[l[d][e]]),"description"==e&&(document.getElementById("descripin").value=[l[d][e]]),"date"==e&&(document.getElementById("datein").value=[l[d][e]]);k.style.display="none",modifyok.style.display="block",console.log("modify option")}if("Accept2"==n){for(let e in l[d])"tittle"==e&&(l[d][e]=document.getElementById("tittlein").value),"description"==e&&(l[d][e]=document.getElementById("descripin").value),"date"==e&&(l[d][e]=document.getElementById("datein").value);p.style.display="none",o=JSON.stringify(l),localStorage.setItem("testJSON",o),i()}}function y(){var e=this.innerHTML;return"Add Task"==e&&(p.style.display="block",p.style.position="absolute",p.style.backdropFilter="blur(2px)",m.style.position="absolute",m.style.left="30%",m.style.right="30%",m.style.bottom="30%",m.style.top="30%",document.body.style.position="relative",document.body.appendChild(p)),"Cancel"==e&&(document.getElementById("myform").reset(),p.style.display="none",document.getElementById("menucont").style.display="none"),"color"==e&&("gray"==document.getElementById("star").style.backgroundColor?(I.style.backgroundColor="red",I.style.color="red"):(I.style.backgroundColor="gray",I.style.color="gray")),!1}r.textContent="Modify",r.classList.add("mod"),r.addEventListener("click",c),[s,r].forEach((e=>o.appendChild(e)));var p=document.createElement("div");p.style.display="flex",p.style.justifyContent="center",p.style.alignItems="center",p.style.width="100%",p.style.height="100%";var m=document.createElement("form");m.id="myform",m.style.paddingLeft="10px",m.style.width="40%",m.style.height="200px",m.style.borderWidth="1px",m.style.borderColor="gray",m.style.backgroundColor="pink",p.appendChild(m);var u=document.createElement("div"),h=document.createElement("label");h.style.marginBottom="3px",h.textContent="Tittle";var g=document.createElement("input");g.id="tittlein",g.setAttribute("required",""),[h,g].forEach((e=>u.appendChild(e)));var f=document.createElement("div"),x=document.createElement("label");x.style.marginBottom="3px",x.textContent="Description";var v=document.createElement("textarea");v.id="descripin",v.setAttribute("required",""),[x,v].forEach((e=>f.appendChild(e)));var C=document.createElement("div"),b=document.createElement("label");b.style.marginBottom="3px",b.textContent="Date";var E=document.createElement("input");E.id="datein",E.setAttribute("type","date"),E.setAttribute("required",""),E.setAttribute("max","9999-01-01"),E.setAttribute("min","2022-01-01"),[b,E].forEach((e=>C.appendChild(e)));var w=document.createElement("div");w.style.width="90%",w.style.display="flex",w.style.justifyContent="space-between",w.style.alignItems="center",w.style.flexDirection="row";var I=document.createElement("div");I.id="star",I.style.width="15px",I.style.height="15px",I.style.borderWidth="2px",I.textContent="color",I.style.fontSize="0.1px",I.style.color="gray",I.style.borderColor="gray",I.style.borderRadius="50%",I.style.backgroundColor="gray",I.style.cursor="pointer",I.addEventListener("click",y);var S=document.createElement("div");S.style.width="auto",S.style.gap="2px",S.style.display="flex",S.style.justifyContent="flex-end",S.style.alignItems="center",S.style.flexDirection="row";var k=document.createElement("button");k.setAttribute("type","submit"),k.textContent="Accept1",k.style.width="80px",k.style.cursor="pointer",k.id="addtask",k.addEventListener("click",(function(){if(this.innerHTML,localStorage.getItem("testJSON"))console.log("tasklist json file exists inside");else{let t=[];var e=JSON.stringify(t);localStorage.setItem("testJSON",e)}let t=document.getElementById("tittlein").value,l=document.getElementById("descripin").value,o=document.getElementById("datein").value,s=document.getElementById("star").style.backgroundColor;if(s="red"==s,""==t||""==l||""==o)alert("Some datas are missed!");else{let d=localStorage.getItem("testJSON"),r=JSON.parse(d);const a=new n(t,l,o,s);r.push(a),e=JSON.stringify(r),localStorage.setItem("testJSON",e),localStorage.getItem("testJSON")&&i()}}));var L=document.createElement("button");L.style.display="none",L.textContent="Accept2",L.style.width="80px",L.style.cursor="pointer",L.id="modifyok",L.addEventListener("click",c);var B=document.createElement("button");B.textContent="Cancel",B.style.width="70px",B.style.cursor="pointer",B.addEventListener("click",y),[k,L,B].forEach((e=>S.appendChild(e))),[I,S].forEach((e=>w.appendChild(e))),[u,f,C,w].forEach((e=>m.appendChild(e))),[g,u,v,f,C].forEach((function(e){e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="flex-start",e.style.flexDirection="column"})),[g,v,C].forEach((function(e){e.style.width="200px",e.style.borderWidth="1px",e.style.borderColor="gray",e.style.marginBottom="10px"}));const D=e.p+"00527275a437234b6557.png",j=new Image;j.src=D,j.style.width="100px",j.style.cursor="pointer";var A=document.createElement("nav");A.style.width="80%",A.style.height="120px",A.style.background="gray",A.style.color="black",A.style.display="flex",A.style.flexDirection="row",A.style.alignItems="center",A.style.justifyContent="space-between";var N=document.createElement("div");N.style.display="flex",N.style.flexDirection="row",N.style.alignItems="center",N.style.justifyContent="center",A.appendChild(N);var O=document.createElement("div");O.appendChild(j),N.appendChild(O);var J=document.createElement("link");J.setAttribute("rel","stylesheet"),J.setAttribute("type","text/css"),J.setAttribute("href","https://fonts.googleapis.com/css?family=Tangerine|Courgette|Lato|Playfair+Display"),document.head.appendChild(J);var T=document.createElement("div");T.innerHTML="Odin Todolist",T.style.fontFamily="Courgette, serif",T.style.fontSize="1rem",T.style.cursor="pointer",N.appendChild(T),window.matchMedia("(max-width: 600px)").matches&&(console.log("resize event detected!"),j.style.width="80px",A.style.flexDirection="column",A.style.justifyContent="center",A.style.height="auto",A.style.padding="0px",T.style.fontSize="2rem",N.style.marginLeft="-10px");const z=A,M=e.p+"7828ea972566d7acd021.svg",W=e.p+"22e65707326e3e1e37af.svg",F=new Image;F.src=M,F.style.width="30px",F.style.fill="red";const H=new Image;H.src=W,H.style.width="30px",H.style.marginLeft="10px";var R=document.createElement("footer");$(R),R.style.width="80%",R.style.height="120px",R.style.background="gray",R.style.flexDirection="column";var q=document.createElement("a");$(q),q.textContent="© 2023 Ginger Media",q.style.color="white",q.style.textDecoration="none",q.setAttribute("href","https://github.com/eduarmarin"),q.appendChild(H);var P=document.createElement("a");function $(e){e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center"}$(P),P.setAttribute("href","mailto:donsecun@gmail.com"),P.textContent="Contact ",P.style.color="white",P.style.gap="10px",P.style.textDecoration="none",P.appendChild(F),R.appendChild(q),R.appendChild(P);const G=R;var K=document.createElement("div");K.style.width="30%";var Q=document.createElement("div");Q.textContent="general",Q.style.width="100%",Q.style.backgroundColor="blue",Q.style.height="100px";var U=document.createElement("div");U.textContent="projects",U.style.width="100%",U.style.backgroundColor="yellow",U.style.height="100px";var V,X=document.createElement("button");X.textContent="Add project",U.appendChild(X),[Q,U].forEach((e=>K.appendChild(e))),(V=X).style.display="flex",V.style.justifysContent="center",V.style.alignItems="flex-start",V.style.flexDirection="column";const Y=e.p+"fbefbcf2bb3dcf5b60ab.svg",Z=new Image;Z.src=Y,Z.style.width="15px";var _=document.createElement("div");_.style.width="50%",_.style.minHeight="200px",_.style.backgroundColor="gray",_.style.display="flex",_.style.alignItems="center",_.style.flexDirection="column";var ee=document.createElement("div");ee.style.minWidth="100%",ee.style.display="flex",ee.style.justifyContent="center",ee.style.alignItems="center",ee.style.flexDirection="column",ee.style.padding="1%",ee.style.gap="2px";var te=document.createElement("div");te.style.display="flex",te.style.justifyContent="center",te.style.alignItems="center",te.style.flexDirection="row",te.style.gap="2%",te.style.paddingLeft="1%",te.style.paddingRight="1%",te.style.width="95%";let le=document.createElement("div");le.textContent="Tittle",le.style.width="20%",le.style.overflow="hidden",le.style.padding="2px",le.style.fontFamily="Courgette, serif",le.style.fontSize="15px";let ne=document.createElement("div");ne.textContent="Description",ne.style.width="45%",ne.style.overflow="hidden",ne.style.padding="2px",ne.style.fontFamily="Courgette, serif",ne.style.fontSize="15px";let ie=document.createElement("div");ie.textContent="Date",ie.style.minWidth="20%",ie.style.overflow="hidden",ie.style.paddingLeft="2px",ie.style.fontFamily="Courgette, serif",ie.style.fontSize="15px";let oe=document.createElement("div");oe.style.minWidth="9%";let se=document.createElement("div");se.style.display="flex",se.style.justifyContent="center",se.style.alignItems="center",se.appendChild(Z),oe.appendChild(se);let de=document.createElement("div");de.textContent="...",de.style.fontSize="30px",de.style.paddingLeft="-4px",de.style.width="5%",[oe,le,ne,ie,de].forEach((e=>te.appendChild(e)));var re=document.createElement("button");re.textContent="Add Task",re.style.width="80px",re.style.cursor="pointer",re.style.margin="4px",re.addEventListener("click",y),[te,ee,re].forEach((e=>_.appendChild(e))),window.matchMedia("(max-width: 600px)").matches&&(_.style.width="100%",_.style.height="300px",K.style.display="none",z.style.width="100%",z.style.padding="-10%",m.style.width="90%",m.style.paddingLeft="10px",m.style.marginLeft="-27%",G.style.width="100%");var ae=document.createElement("div");ae.style.margin="5px",ae.style.width="100%",ae.style.height="auto",ae.style.display="flex",ae.style.justifyContent="center",ae.style.alignItems="flex-start",ae.style.flexDirection="row";const ce=ae;[K,_].forEach((e=>ce.appendChild(e))),document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.flexDirection="column",document.body.appendChild(z),document.body.appendChild(ce),document.body.appendChild(G),localStorage.getItem("testJSON")?i():console.log("tasklist do no exist")})();