(()=>{"use strict";var e={d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var l=e.g.document;if(!t&&l&&(l.currentScript&&(t=l.currentScript.src),!t)){var n=l.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{$:()=>q});const t=e.p+"ca64f273c11e0ccada8d.svg",l=new Image;function n(e,t,l,n){this.tittle=e,this.description=t,this.date=l,this.important=n}function o(){let e=localStorage.getItem("testJSON"),t=JSON.parse(e);for(;w.lastChild;)w.removeChild(w.lastChild);for(let e=0;e<t.length;e++){var n=document.createElement("div");n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.flexDirection="row",n.style.border="solid",n.style.borderColor="lightgray",n.style.borderWidth="1px",n.style.gap="8px";for(let n in t[e]){if("tittle"==n){var o=document.createElement("div");o.textContent=t[e][n]}if("description"==n){var i=document.createElement("div");i.textContent=t[e][n]}if("date"==n){var r=document.createElement("div");r.textContent=t[e][n]}if("important"==n){var s=document.createElement("div");s.textContent=t[e][n]}var d=document.createElement("div");d.style.cursor="pointer",d.style.position="relative",d.style.display="inline-block",d.classList.add("menu"),d.appendChild(l.cloneNode(!0))}[o,i,r,s,d].forEach((e=>n.appendChild(e))),w.appendChild(n)}q()}l.src=t,l.style.width="20px";var i=document.createElement("div");i.style.display="flex",i.style.justifyContent="center",i.style.alignItems="center",i.style.width="100%",i.style.height="100%";var r=document.createElement("form");r.id="myform",r.style.paddingLeft="10px",r.style.width="40%",r.style.height="200px",r.style.borderWidth="1px",r.style.borderColor="gray",r.style.backgroundColor="pink",i.appendChild(r);var s=document.createElement("div"),d=document.createElement("label");d.style.marginBottom="3px",d.textContent="Tittle";var a=document.createElement("input");a.id="tittlein",a.setAttribute("required",""),[d,a].forEach((e=>s.appendChild(e)));var c=document.createElement("div"),y=document.createElement("label");y.style.marginBottom="3px",y.textContent="Description";var m=document.createElement("textarea");m.id="descripin",m.setAttribute("required",""),[y,m].forEach((e=>c.appendChild(e)));var p=document.createElement("div"),u=document.createElement("label");u.style.marginBottom="3px",u.textContent="Date";var g=document.createElement("input");g.id="datein",g.setAttribute("type","date"),g.setAttribute("required",""),[u,g].forEach((e=>p.appendChild(e)));var h=document.createElement("div");h.style.width="90%",h.style.display="flex",h.style.justifyContent="space-between",h.style.alignItems="center",h.style.flexDirection="row";var f=document.createElement("div");f.id="star",f.style.width="15px",f.style.height="15px",f.style.borderWidth="2px",f.style.borderColor="gray",f.style.backgroundColor="gray",f.style.cursor="pointer",f.addEventListener("click",E);var x=document.createElement("div");x.style.width="auto",x.style.gap="2px",x.style.display="flex",x.style.justifyContent="flex-end",x.style.alignItems="center",x.style.flexDirection="row";var v=document.createElement("button");v.setAttribute("type","submit"),v.textContent="AAccept",v.style.width="80px",v.style.cursor="pointer",v.id="addtask",v.addEventListener("click",(function(){if(localStorage.getItem("testJSON"))console.log("tasklist json file exists inside");else{let t=[];var e=JSON.stringify(t);localStorage.setItem("testJSON",e)}let t=document.getElementById("tittlein").value,l=document.getElementById("descripin").value,i=document.getElementById("datein").value,r=document.getElementById("star").style.backgroundColor;if(r="red"==r,""==t||""==l||""==i)alert("Some datas are missed!");else{let s=localStorage.getItem("testJSON"),d=JSON.parse(s);const a=new n(t,l,i,r);d.push(a),e=JSON.stringify(d),localStorage.setItem("testJSON",e),localStorage.getItem("testJSON")&&o()}}));var b=document.createElement("button");function E(){var e=this.innerHTML;return"Add Task"==e&&(i.style.display="block",i.style.position="absolute",i.style.backdropFilter="blur(2px)",r.style.position="absolute",r.style.left="30%",r.style.right="30%",r.style.bottom="30%",r.style.top="30%",document.body.style.position="relative",document.body.appendChild(i)),"Cancel"==e&&(document.getElementById("myform").reset(),i.style.display="none",document.getElementById("addtask").textContent="Accept"),""==e&&("gray"==document.getElementById("star").style.backgroundColor?f.style.backgroundColor="red":f.style.backgroundColor="gray"),!1}b.textContent="Cancel",b.style.width="70px",b.style.cursor="pointer",b.addEventListener("click",E),[v,b].forEach((e=>x.appendChild(e))),[f,x].forEach((e=>h.appendChild(e))),[s,c,p,h].forEach((e=>r.appendChild(e))),[a,s,m,c,p].forEach((function(e){e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="flex-start",e.style.flexDirection="column"})),[a,m,p].forEach((function(e){e.style.width="200px",e.style.borderWidth="1px",e.style.borderColor="gray",e.style.marginBottom="10px"}));var C=document.createElement("div");C.style.width="50%",C.style.minHeight="200px",C.style.backgroundColor="gray",C.style.display="flex",C.style.alignItems="center",C.style.flexDirection="column";var w=document.createElement("div");w.style.minWidth="90%",w.style.display="flex",w.style.justifyContent="center",w.style.alignItems="flex-start",w.style.flexDirection="column",w.style.padding="4px";var I=document.createElement("button");I.textContent="Add Task",I.style.width="80px",I.style.cursor="pointer",I.style.margin="4px",I.addEventListener("click",E),[w,I].forEach((e=>C.appendChild(e))),window.matchMedia("(max-width: 600px)").matches&&(C.style.width="100%",C.style.height="300px");var k=document.createElement("div");k.style.width="30%";var S=document.createElement("div");S.textContent="general",S.style.width="100%",S.style.backgroundColor="blue",S.style.height="100px";var B=document.createElement("div");B.textContent="projects",B.style.width="100%",B.style.backgroundColor="yellow",B.style.height="100px";var O,N=document.createElement("button");N.textContent="Add project",B.appendChild(N),[S,B].forEach((e=>k.appendChild(e))),(O=N).style.display="flex",O.style.justifysContent="center",O.style.alignItems="flex-start",O.style.flexDirection="column";const j=k;var J=document.createElement("div");J.style.width="80%",J.style.height="100px",J.textContent="TODO LIST",J.style.backgroundColor="gray",J.style.display="flex",J.style.justifyContent="center",J.style.alignItems="center",window.matchMedia("(max-width: 600px)").matches&&(container.style.width="100%");const D=J;var L=document.createElement("div");L.style.margin="5px",L.style.width="100%",L.style.height="auto",L.style.display="flex",L.style.justifyContent="center",L.style.alignItems="flex-start",L.style.flexDirection="row";const A=L;var T=document.createElement("div");T.classList.add("content"),T.id="menucont",T.style.display="none",T.style.position="absolute",T.style.overflow="auto",T.style.minWidth="60px",T.style.color="white",T.style.fontWeight="bold",T.style.textAlign="center",T.style.backdropFilter="blur(1px)",T.style.zIndex="1";var M=document.createElement("div");M.textContent="Delete",M.classList.add("del"),M.addEventListener("click",$);var W,F=document.createElement("div");function P(e,t){return W=e,t[e].appendChild(T),"none"===document.getElementById("menucont").style.display?document.getElementById("menucont").style.display="block":document.getElementById("menucont").style.display="none",W}function $(e){document.getElementById("menucont").style.display="none";let t=localStorage.getItem("testJSON"),l=JSON.parse(t);var n=this.innerHTML;if("Delete"==n&&(l.splice(W,1),console.log("tasklist after delete "+l)),"Modify"==n){i.style.display="block",i.style.position="absolute",i.style.backdropFilter="blur(2px)",r.style.position="absolute",r.style.left="30%",r.style.right="30%",r.style.bottom="30%",r.style.top="30%",document.body.style.position="relative",document.body.appendChild(i);for(let e in l[W])"tittle"==e&&(document.getElementById("tittlein").value=[l[W][e]]),"description"==e&&(document.getElementById("descripin").value=[l[W][e]]),"date"==e&&(document.getElementById("datein").value=[l[W][e]]);document.getElementById("addtask").textContent="Modify2"}var s=JSON.stringify(l);localStorage.setItem("testJSON",s),o(),e.stopPropagation()}function q(){var e=document.getElementsByClassName("menu");for(let t=0,l=e.length;t<l;t++)!function(l){e[t].onclick=function(){P(l,e)}}(t)}F.textContent="Modify",F.classList.add("mod"),F.addEventListener("click",$),[M,F].forEach((e=>T.appendChild(e))),[j,C].forEach((e=>A.appendChild(e))),localStorage.getItem("testJSON")?o():console.log("tasklist do no exist"),window.onload=q,window.onerror=function(){console.log("a error has occurred index")},document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.flexDirection="column",document.body.appendChild(D),document.body.appendChild(A)})();