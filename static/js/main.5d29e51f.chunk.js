(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"}," Show navigation ")," ",l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"}," Hide navigation ")," ",l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"}," ",l.a.createElement("a",{className:"smoothscroll",href:"#home"}," Home ")),l.a.createElement("li",null," ",l.a.createElement("a",{className:"smoothscroll",href:"#about"}," About ")),l.a.createElement("li",null," ",l.a.createElement("a",{className:"smoothscroll",href:"#resume"}," Resume ")),l.a.createElement("li",null," ",l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"}," Works ")),l.a.createElement("li",null," ",l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"}," Testimonials ")),l.a.createElement("li",null," ",l.a.createElement("a",{className:"smoothscroll",href:"#contact"}," Contact ")))," "),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,", ")," ",l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}}," ",e.role," ",e.roleDescription," ")," ",l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"}," ",e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"}," ",l.a.createElement("i",{className:e.className}," ")))})," ")," ")," "),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"}," ",l.a.createElement("i",{className:"icon-down-circle"}," "))))," ")}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null," Check Out Some of My Works. ")," ",l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"}," ",e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("a",{href:"".concat(e.linkurl)}," ",e.name," ")," ",l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h4",null," ",e.name," ")," ",l.a.createElement("p",null," ",e.description," ")," ")," ")," ")," ")," ")})," ")," ")," ")," ")}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Let me know about your ideas!")," ")," ")," ",l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null," Email: flopescontas @gmail.com "),"  ",l.a.createElement("h4",null," Location: Portugal "),"  ")," ")," ")," ")}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),N={imagebaseurl:"https://media.licdn.com/dms/image/C5603AQFSK64Tqg2ySw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=sh1s6wS-rnTdiHQWaNhvOGloH78g7nVaO3AP1rkExwo",name:"Filipe Lopes",linkedinId:"https://www.linkedin.com/in/fcruzlopes/",skypeid:"live:filipecruzlopes",roleDescription:"a Junior Software Fullstack Developer. My best main are Java && JavaScript!",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/fcruzlopes/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/fcruzlopes",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/flopes010",className:"fa fa-twitter"}],aboutme:"During my last years, I have been taking care of vineyards. To have good grapes && to produce good wine, it is necessary to dedicate many hours of work (even if you are tired or the weather is not favorable). Since I learned how to code, I treat each snippet of code the same way as I treat the vineyards. So if your grapes are rip && you need a Software Developer for your harvest season, you found him.",address:"Portugal",website:"https://fcruzlopes.github.io",education:[{UniversityName:"Instituto Polit\xe9cnico de Bragan\xe7a",specialization:"Computer Engineering"},{UniversityName:"<Academia de C\xf3digo_>",specialization:"A 14-Week Intensive && Immersive FullStack Programming Bootcamp"}],work:[{CompanyName:"Altran",specialization:"Software Tester"}],skillsDescription:"Software FullStack Developer",skills:[{skillname:"Programming"},{skillname:"Object-Oriented Programming (OOP)"},{skillname:"Java"}],portfolio:[{name:"KillBox",description:"A 2D puzzle platform game, where the player has to reach a key, that opens a door to move to the next level.",imgurl:"https://lh3.googleusercontent.com/3qg-uBWvH9vfw3LWyu6v4T35gLeggmmekLhomZNYOhDEEOUZ03opzVrCg7a64jWQuNI=w720-h310",linkurl:"https://github.com/carcaso/Killbox"},{name:"Paint Arena",description:"A grid of squares, that starts with 4 players (Online). The player with most painted squares wins.",imgurl:"https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/6f/d5/e9/6fd5e9dc-7322-d142-7937-fdc83300ab0e/pr_source.jpg/1000x1000bb.jpg",linkurl:"https://gitlab.com/best-row/paint-arena"},{name:"Help",description:"An app where its possible to find every cause seeking for donations or volunteers in Portugal.",imgurl:"https://i.ytimg.com/vi/2Q_ZzBGPdqE/maxresdefault.jpg",linkurl:"https://github.com/carcaso/hackathon-grupo7"}],testimonials:[{description:"Impressive Skills with Java!",name:"Abrilina Almeida"},{description:"Best Coworker I ever have!",name:"Benigno Joaquim"}]},w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:N}),l.a.createElement(d,{resumeData:N}),l.a.createElement(h,{resumeData:N}),l.a.createElement(E,{resumeData:N}),l.a.createElement(v,{resumeData:N}),l.a.createElement(f,{resumeData:N}),l.a.createElement(b,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.5d29e51f.chunk.js.map