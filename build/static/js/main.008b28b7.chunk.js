(this["webpackJsonpaaxyz-v2"]=this["webpackJsonpaaxyz-v2"]||[]).push([[0],{23:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(16),i=c.n(r),l=(c(23),c(2)),d=c(17),o=c.n(d);c(25),c(26);var j=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},b=function(e){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("button",{className:"btn btn-action",onClick:e.toggleSidebar,children:Object(n.jsx)("i",{className:"fas fa-bars"})}),Object(n.jsx)("div",{className:"navbar-brand carter-one",children:e.brand})]})},m=function(e){return Object(n.jsxs)("div",{className:"sidebar",children:[e.pages.map((function(t,c){var a=["sidebar-link","sidebar-link-with-icon"];return c===e.currentPageIndex&&a.push("active"),Object(n.jsxs)("a",{className:a.join(" "),href:"#link",onClick:function(t){return e.updatePageIndex(t,c)},children:[Object(n.jsx)("span",{className:"sidebar-icon",children:t.icon}),Object(n.jsx)("strong",{children:t.name})]},c)})),Object(n.jsx)("div",{className:"sidebar-link mt-5",children:Object(n.jsxs)("div",{className:"custom-switch",children:[Object(n.jsx)("input",{type:"checkbox",id:"darkMode",checked:e.darkModeOn,onChange:e.toggleDarkMode}),Object(n.jsx)("label",{htmlFor:"darkMode",children:"Dark Mode"})]})})]})},h=c(4),u=c.n(h),O=function(e){var t=e.webp?"webp":"png",c=Object(a.useState)("./logo.png"),s=Object(l.a)(c,2),r=s[0],i=s[1];Object(a.useEffect)((function(){u.a.get("/api/last_quote?t="+Date.now()).then((function(e){return e.data})).then((function(e){return i(e+"/image."+t)})).catch((function(e){return console.error(e)}))}),[t]);var d;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-lg-6 offset-lg-3 col-md-8 offset-md-2 p-10",children:[Object(n.jsx)("img",{src:r,alt:"quote",style:{width:"100%"},className:"card mx-0 mt-0 p-0 mb-10"}),Object(n.jsxs)("div",{className:"w-full d-flex justify-content-between justify-content-md-center",children:[Object(n.jsxs)("button",{className:"btn mr-10 w-150 btn-primary",onClick:function(){return u.a.get("/api/random_quote?t="+Date.now()).then((function(e){return e.data})).then((function(e){return i(e+"/image."+t)})).catch((function(e){return console.error(e)}))},children:["Random ",Object(n.jsx)("i",{className:"fas fa-random"})]}),Object(n.jsxs)("a",{className:"btn ml-10 w-150 btn-primary",href:(d=r,d.split(".")[0]+".png"),alt:"download",rel:"noopener noreferrer",download:!0,children:["Download ",Object(n.jsx)("i",{className:"fas  fa-download"})]})]})]})})})},x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){r(),setInterval((function(){r()}),9e5)}),[]);var r=function(){u.a.get("/api/news?t="+Date.now()).then((function(e){return e.data})).then((function(e){return s(e)})).catch((function(e){return console.error(e)}))};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"offset-md-4 col-md-4",children:Object(n.jsx)("div",{className:"card text-center",children:Object(n.jsx)("div",{className:"card-title",children:"Anime News"})})})}),Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-title mb-10",children:e.feed_provider}),Object(n.jsx)("div",{className:"h-100 mb-10 d-flex align-content-center",children:Object(n.jsx)("span",{className:"align-self-center align-middle",children:e.title})}),Object(n.jsx)("a",{href:e.link,alt:"article-link",target:"_blank",rel:"noopener noreferrer",children:"Read"})]})},t)}))})]})},f=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){setInterval((function(){window.installPWA?e.current.style.display="block":e.current.style.display="none"}),1e3)}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-title",children:"About me"}),Object(n.jsxs)("p",{children:["I'm Mit. You can find more about me on\xa0",Object(n.jsx)("a",{href:"https://vasanimit9.github.io",target:"_blank",rel:"noopener noreferrer",alt:"portfolio",children:"vasanimit9.github.io"}),"."]})]})})}),Object(n.jsx)("div",{className:"row",ref:e,children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-title",children:"Add to Home Screen"}),Object(n.jsxs)("p",{children:["You can install this website as a PWA.",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:"#install",onClick:function(e){e.preventDefault(),window.installPWA()},alt:"install",children:"Install"})]})]})})})]})},v=c(7),p=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useState)({mm:(new Date).getMonth()+1,dd:(new Date).getDate()}),s=Object(l.a)(c,2),r=s[0],i=s[1],d=Object(a.useState)({birth_date:null,characters:[]}),o=Object(l.a)(d,2),j=o[0],b=o[1];Object(a.useEffect)((function(){e.current.innerHTML="",e.current.innerHTML+='<option style="display: none">Month</option>';var c,n=Object(v.a)(Array(12).keys());try{for(n.s();!(c=n.n()).done;){var a=c.value;e.current.innerHTML+="<option value='"+(a+1)+"'>"+(a+1)+"</option>"}}catch(d){n.e(d)}finally{n.f()}t.current.innerHTML="",t.current.innerHTML+='<option style="display: none">Date</option>';var s,i=Object(v.a)(Array(31).keys());try{for(i.s();!(s=i.n()).done;){var l=s.value;t.current.innerHTML+="<option value='"+(l+1)+"'>"+(l+1)+"</option>"}}catch(d){i.e(d)}finally{i.f()}m(r)}),[e,t,r]);var m=function(e){u.a.get("/api/birthdays/"+e.mm+"/"+e.dd+"?t="+Date.now()).then((function(e){return e.data})).then((function(t){b(-1!==t?t:{birth_date:null,characters:[]}),i(e)})).catch(console.error)},h=function(e){return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 text-center",children:Object(n.jsx)("img",{src:e.character.character_image,style:{minWidth:"150px"},alt:"character"})}),Object(n.jsxs)("div",{className:"col-12 h-50 text-center py-10",children:[Object(n.jsx)("span",{style:{fontSize:"1.6rem"},children:e.character.name}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"text-truncate w-full",children:e.character.origin})]})]})})};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-3 col-lg-4"}),Object(n.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("div",{className:"card-title mb-5",children:"Birthdays"}),Object(n.jsxs)("div",{className:"row mb-5",children:[Object(n.jsx)("div",{className:"col-5 pr-10",children:Object(n.jsx)("select",{className:"form-control",ref:e})}),Object(n.jsx)("div",{className:"col-5 pr-10",children:Object(n.jsx)("select",{className:"form-control",ref:t})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("button",{className:"btn btn-primary w-full",onClick:function(){i({mm:e.current.value,dd:t.current.value})},children:Object(n.jsx)("i",{className:"fas fa-chevron-right"})})})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:j.birth_date})}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-12",children:["Powered by\xa0",Object(n.jsx)("a",{href:"https://www.animecharactersdatabase.com/",target:"_blank",rel:"noopener noreferrer",alt:"Anime Characters Database",children:"ACDB"})]})})]})})]}),Object(n.jsx)("div",{className:"row",children:j.characters.map((function(e,t){return Object(n.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(n.jsx)(h,{character:e})},t)}))})]})},N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){r(),setInterval(r,9e5)}),[]);var r=function(){u.a.get("/api/time_table?t="+Date.now()).then((function(e){return e.data})).then((function(e){return s(e)})).catch(console.error)};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4"}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsxs)("div",{className:"card m-15 text-center",children:[Object(n.jsx)("div",{className:"card-title",children:"Anime Updates"}),Object(n.jsx)("hr",{}),"Powered by\xa0",Object(n.jsx)("a",{href:"https://livechart.me/",target:"_blank",rel:"noopener noreferrer",alt:"Livechart url",children:"livechart.me"})]})})]}),Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(n.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:Object(n.jsxs)("div",{className:"row card m-15",children:[Object(n.jsx)("div",{className:"col-5 d-flex align-items-center",style:{height:"175px"},children:Object(n.jsx)("img",{src:""!==e.media_thumbnail[0].url?e.media_thumbnail[0].url:"logo.png",style:{width:"100%"},alt:"anime cover"})}),Object(n.jsxs)("div",{className:"col-7 p-10 text-center d-flex align-items-center",style:{height:"175px"},children:[e.title,Object(n.jsx)("br",{}),"\xa0",Object(n.jsx)("br",{}),e.published.split("+").join("UTC+")]})]})},t)}))})]})},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){r(),setInterval(r,12e5)}),[]);var r=function(){u.a.get("/api/current_season?t="+Date.now()).then((function(e){return e.data})).then((function(e){return e.sort((function(e,t){return-new Date(e.airing_start).getTime()+new Date(t.airing_start).getTime()})),e})).then((function(e){return s(e)})).catch(console.error)},i=function(e){var t=e.anime;return Object(n.jsxs)("div",{className:"card p-25 text-center",children:[Object(n.jsx)("div",{className:"d-flex align-items-center mx-auto mb-20",style:{height:"250px",width:"140px"},children:Object(n.jsx)("img",{src:t.image_url,alt:"anime cover",style:{width:"100%"}})}),Object(n.jsx)("div",{alt:t.title,className:"w-full text-truncate",style:{fontSize:"1.75rem"},children:t.title}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"MAL:\xa0"}),null!=t.score?t.score:"NA",Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Air date:\xa0"}),null!=t.airing_start?t.airing_start.split("T")[0]:"NA",Object(n.jsx)("br",{})]})};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-3 col-lg-4"}),Object(n.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("div",{className:"card-title",children:"Ongoing Anime"}),Object(n.jsx)("span",{children:"Of the current season"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("span",{children:["Powered by\xa0",Object(n.jsx)("a",{href:"https://jikan.moe",target:"_blank",rel:"noopener noreferrer",alt:"jikan",children:"Jikan"})]})]})})]}),Object(n.jsx)("div",{className:"row",children:c.map((function(e,t){return e.r18?Object(n.jsx)("span",{},t):Object(n.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(n.jsx)(i,{anime:e})},t)}))})]})},w=function(){var e=j(),t=[{name:"Home",icon:Object(n.jsx)("i",{className:"fas fa-home"}),component:Object(n.jsx)(O,{webp:e})},{name:"News",icon:Object(n.jsx)("i",{className:"fas fa-newspaper"}),component:Object(n.jsx)(x,{})},{name:"Birthdays",icon:Object(n.jsx)("i",{className:"fas fa-birthday-cake"}),component:Object(n.jsx)(p,{})},{name:"Episode Updates",icon:Object(n.jsx)("i",{className:"fas fa-tasks"}),component:Object(n.jsx)(N,{})},{name:"Current Season",icon:Object(n.jsx)("i",{className:"fas fa-calendar"}),component:Object(n.jsx)(g,{})},{name:"More",icon:Object(n.jsx)("i",{className:"fas fa-info"}),component:Object(n.jsx)(f,{})}],c=Object(a.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),s=Object(l.a)(c,2),r=s[0],i=s[1],d=Object(a.useState)(window.innerWidth>=576),h=Object(l.a)(d,2),u=h[0],v=h[1],w=Object(a.useState)(0),y=Object(l.a)(w,2),k=y[0],D=y[1];Object(a.useEffect)((function(){o.a.onDOMContentLoaded()}),[]),Object(a.useEffect)((function(){r?document.querySelector("body").classList.add("dark-mode"):document.querySelector("body").classList.remove("dark-mode")}),[r]),Object(a.useEffect)((function(){u?document.querySelector(".page-wrapper").removeAttribute("data-sidebar-hidden"):document.querySelector(".page-wrapper").setAttribute("data-sidebar-hidden","hidden")}),[u]);return Object(n.jsxs)("div",{className:"page-wrapper with-navbar with-sidebar open-sans",children:[Object(n.jsx)(b,{toggleSidebar:function(){return v(!u)},brand:"AnimeAlchemist"}),Object(n.jsx)(m,{darkModeOn:r,toggleDarkMode:function(){return i(!r)},pages:t,currentPageIndex:k,updatePageIndex:function(e,t){e.preventDefault(),D(t),v(window.innerWidth>=576)}}),Object(n.jsx)("div",{className:"content-wrapper",children:t.map((function(e,t){var c=t===k?"block":"none";return Object(n.jsx)("span",{style:{display:c},children:e.component},t)}))})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.008b28b7.chunk.js.map