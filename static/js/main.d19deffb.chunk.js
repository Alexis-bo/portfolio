(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);n(12);var i=n(1),r=(n(13),n(0)),a=n.n(r),l=n(4),o=n(5),c=n(3),d=n(7),u=n(6),s=Object(i.b)("div",(function(){return{width:"100%",alignSelf:"center",textAlign:"center"}})),p=Object(i.b)("span",(function(e){var t=e.number;return{alignItems:"center",justifyContent:"center",textAlign:"center",color:1==t?"#3572A5":2==t?"#e34c26":3==t?"#563d7c":"#f1e05a","@media only screen and (min-width: 300px) and (max-width: 1025px)":{display:"flex",width:"100%",height:"50px"}}})),m=['"Python"',"<html/>","#css{}","javascript();"],h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={activeWord:0,currentDisplay:""},i.wordType=i.wordType.bind(Object(c.a)(i)),i.wordDelete=i.wordDelete.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.wordType()}},{key:"wordType",value:function(){var e=this.state,t=e.activeWord,n=e.currentDisplay;m[t]==n?setTimeout(this.wordDelete,1500):(this.setState({currentDisplay:m[t].substring(0,n.length+1)}),setTimeout(this.wordType,150))}},{key:"wordDelete",value:function(){var e=this.state,t=e.activeWord,n=e.currentDisplay;this.setState({currentDisplay:""}),""==n?(this.setState({activeWord:(t+1)%m.length}),setTimeout(this.wordType,150)):(this.setState({currentDisplay:n.substring(0,n.length-1)}),setTimeout(this.wordDelete,80))}},{key:"render",value:function(){var e=this.state,t=e.currentDisplay,n=e.activeWord;return a.a.createElement(s,null,"Some of my favorite ",a.a.createElement("br",null),"languages :"," ",a.a.createElement(p,{number:n},t))}}]),n}(r.Component),f=Object(i.b)("div",(function(e){return{marginLeft:e.leftMargin,"@media only screen and (min-width: 300px) and (max-width: 1025px)":{marginLeft:"0px"}}})),b=Object(i.b)("div",(function(){return{display:"flex",flexDirection:"column",color:"#b7b3b0","@media only screen and (min-width: 300px) and (max-width: 1025px)":{alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:"60px",lineHeight:"80px"}}})),x=function(){return a.a.createElement(b,null,a.a.createElement(f,null,"Hello !"),a.a.createElement(f,{leftMargin:"25px"},"I am Alexis,"),a.a.createElement(f,{leftMargin:"50px"},"a Junior Software Engineer"))},g=Object(i.b)("div",(function(e){return{display:"flex",flexDirection:e.horizontal?"row":"column",alignItems:"center",justifyContent:"center",flex:"1",minHeight:"100vh",width:"100%",padding:e.last?"50px 0px 0px 0px":"50px 0px",fontSize:"50px",lineHeight:"120px",color:"#b7b3b0",backgroundColor:"#0A013D","@media only screen and (min-width: 300px) and (max-width: 1025px)":{fontSize:"40px",lineHeight:"50px"}}})),w=Object(i.b)("div",(function(){return{display:"flex",alignItems:"center",justifyContent:"center",flex:"1",width:"100%",fontSize:"60px",lineHeight:"80px",color:"#b7b3b0",padding:"100px 0px","@media only screen and (min-width: 300px) and (max-width: 1025px)":{fontSize:"50px",lineHeight:"60px",textAlign:"center"}}})),v=function(){return a.a.createElement("div",{id:"aboutmeSection"},a.a.createElement(g,null,a.a.createElement(x,null)),a.a.createElement(g,null,a.a.createElement(h,null)))},y=Object(i.b)("div",(function(){return{margin:"70px 0px"}})),E=Object(i.b)("span",(function(e){return{color:e.animation?"red":"inherit",transition:"all 1.0s linear 0s"}})),j=Object(i.b)("div",(function(){return{width:"60%","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"90%"}}})),S=Object(i.b)("div",(function(){return{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}})),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={animation:!1},i.handleScroll=i.handleScroll.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.animationThreshold=document.getElementById("opportunity").offsetTop-300,window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.pageYOffset>=this.animationThreshold&&(this.setState({animation:window.pageYOffset>=this.animationThreshold}),window.removeEventListener("scroll",this.handleScroll))}},{key:"render",value:function(){var e=this.state.animation;return a.a.createElement(S,null,a.a.createElement(j,null,a.a.createElement(y,{id:"opportunity"},"I am looking for Software Engineering opportunities where I can make a"," ",a.a.createElement(E,{animation:e},"difference")),a.a.createElement(y,null,"Available from March 2022")))}}]),n}(r.Component),O=Object(i.b)("div",(function(){return{padding:"20px"}})),T=Object(i.b)("div",(function(){return{display:"flex",width:"100%",flexDirection:"column",color:"#b7b3b0",textAlign:"center",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"90%"}}})),C=Object(i.b)("div",(function(){return{display:"flex",width:"100%",flexDirection:"row",color:"#b7b3b0",alignItems:"center",justifyContent:"center"}})),D=Object(i.b)("img",(function(){return{display:"flex",height:"50px",width:"auto",padding:"30px 100px",alignSelf:"center",":hover":{transform:"scale(1.4)"},transition:"all 0.2s ease 0s","@media only screen and (min-width: 300px) and (max-width: 1025px)":{padding:"30px 20px"}}})),I=function(){return a.a.createElement(T,null,a.a.createElement(O,null,"Get to know"," ",a.a.createElement("a",{href:"https://drive.google.com/file/d/1uugGeLRKVRp18T4VuqT_ZBsnkQjCXbuR/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"me")," ","a little better"),a.a.createElement(O,null,"Or contact me !"),a.a.createElement(C,null,a.a.createElement("a",{href:"https://github.com/Alexis-bo",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(D,{src:"Logo-Github.png"})),a.a.createElement("a",{href:"mailto:alebonnel@gmail.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(D,{src:"Logo-Mail.png"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/alexis-bonnel-846816184/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(D,{src:"Logo-Linkedin.png"}))))},A=function(){return a.a.createElement("div",{id:"contactSection"},a.a.createElement(g,null,a.a.createElement(k,null)),a.a.createElement(g,{last:!0},a.a.createElement(I,null)))},H=Object(i.b)("div",(function(){return{lineHeight:"70px",fontSize:"50px",paddingBottom:"20px",alignSelf:"center"}})),L=Object(i.b)("div",(function(){return{display:"flex",width:"25%",minHeight:"500px",flexDirection:"column",textAlign:"left",justifyContent:"flex-start",alignItems:"flex-start",color:"#b7b3b0",margin:"40px 3%",lineHeight:"40px",fontSize:"25px","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"80%",fontSize:"35px",lineHeight:"50px",margin:"60px 0px"}}})),P=Object(i.b)("img",(function(){return{display:"flex",height:"200px",maxWidth:"80%",width:"auto",padding:"30px 0px",alignSelf:"center"}})),M=Object(i.b)("div",(function(){return{display:"flex",width:"100%",padding:"20px 0px"}})),W=Object(i.b)("div",(function(){return{fontStyle:"italic",padding:"20px 0px"}})),z=Object(i.b)("a",(function(){return{display:"flex"}})),B=Object(i.b)("a",(function(){return{display:"flex"}})),J=Object(i.b)("div",(function(){return{display:"flex",flexDirection:"row"}})),R=function(e){var t=e.title,n=e.imagePath,i=e.description,r=e.techno,l=e.link,o=e.git;return a.a.createElement(L,null,a.a.createElement(H,null,t),n&&a.a.createElement(P,{src:n}),a.a.createElement(M,null,i),a.a.createElement(W,null,r),a.a.createElement(J,null,l&&a.a.createElement(z,{href:l,target:"_blank",rel:"noopener noreferrer"},"Link"),o&&a.a.createElement(B,{href:o,target:"_blank",rel:"noopener noreferrer"},"Git")))},_=Object(i.b)("div",(function(){return{display:"flex",width:"100%",height:"100%",flexDirection:"row",flexWrap:"wrap",justifyContent:"center","@media only screen and (min-width: 300px) and (max-width: 1025px)":{flexDirection:"column",alignItems:"center"}}})),G={projects:[{title:"Alone Together",imagePath:"Alone-Together.png",description:"Immersive 3D experience in first person where the user is bound to impact his neighbour's environment because of his choices ...",techno:"Unity, C#",link:"",git:""},{title:"One shot",imagePath:"One-Shot.png",description:"Basketball and dart throwing virtual reality experience",techno:"Unity, C#, HTC Vive, Steam VR",link:"",git:""},{title:"Toucher 2009",imagePath:"Toucher-2009.png",description:a.a.createElement("div",null,"Recreation in HTML5 of a 2009 flash project. Selected to be in the"," ",a.a.createElement("a",{href:"https://the-next.eliterature.org/exhibition/afterflash/bouchardon-toucher.html",target:"_blank",rel:"noopener noreferrer"},"after flash exhibition")),techno:"HTML, CSS, JavaScript, KonvaJS, Howler, Flash",link:"https://www.to-touch.net/",git:""},{title:"billiv",imagePath:"Billiv-Logo.png",description:"6 month internship as a Software Engineer Intern in billiv, a startup developing a paperless receipt solution. Develop fronts (website, dashboard ...), add new routes in the backend and implement data pipelines",techno:"HTML, CSS, JavaScript, ReactJS, ChartJS, Python, Google Cloud Platform",link:"https://www.billiv.fr/",git:""},{title:"RTA Brain",imagePath:"Summoners-War-Logo.png",description:"Decision helping tool for Real Time Arena, a competitive PvP mode in the mobile game Summoners War:Sky Arena. Work in progress, beta to be released early 2022",techno:"HTML, CSS, JavaScript, ReactJS",link:"",git:""}]},U=function(){return a.a.createElement(_,null,G.projects.map((function(e,t){return a.a.createElement(R,{title:e.title,imagePath:e.imagePath,description:e.description,techno:e.techno,link:e.link,git:e.git,key:t})})))},V=function(){return a.a.createElement("div",{id:"projectsSection"},a.a.createElement(g,null,a.a.createElement(w,null,"A few projects I have worked on"),a.a.createElement(U,null)))},F=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(v,null),a.a.createElement(V,null),a.a.createElement(A,null))},Y=Object(i.b)("div",(function(){return{width:"100%",height:"50px",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",flexDirection:"row",background:"#0A013D",margin:"0",zIndex:"1000","@media only screen and (min-width: 300px) and (max-width: 1025px)":{display:"none"}}})),K=Object(i.b)("div",(function(e){return{display:"flex",justifyContent:"flex-start",padding:"0px 50px",fontSize:"40px",color:e.active?"white":"#b7b3b0",":hover":{color:"white",cursor:"pointer"}}})),q=Object(i.b)("div",(function(){return{display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"0px 20px",width:"90%",height:"100%",borderBottom:"2px solid white"}})),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={windowOffset:0},i.handleScroll=i.handleScroll.bind(Object(c.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({windowOffset:window.pageYOffset})}},{key:"checkIsActive",value:function(e){if(e){var t=document.getElementById(e);if(t){var n=this.state.windowOffset,i=t.offsetTop-70,r=i+t.offsetHeight;return n>=i&&n<r}}return!1}},{key:"scrollTo",value:function(e){var t=0;if(e){var n=document.getElementById(e);n&&(t=n.offsetTop,window.scroll({top:t,behavior:"smooth"}))}}},{key:"render",value:function(){var e=this;return a.a.createElement(Y,null,a.a.createElement(q,null,a.a.createElement(K,{active:this.checkIsActive("aboutmeSection"),onClick:function(){return e.scrollTo("aboutmeSection")}},"About me"),a.a.createElement(K,{active:this.checkIsActive("projectsSection"),onClick:function(){return e.scrollTo("projectsSection")}},"Projects"),a.a.createElement(K,{active:this.checkIsActive("contactSection"),onClick:function(){return e.scrollTo("contactSection")}},"Contact")))}}]),n}(r.Component),X=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(Q,null),a.a.createElement(F,null))},Z=n(9),N=n.n(Z),$=new(n(11).a);N.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{value:$,debug:undefined,debugAfterHydration:!0},a.a.createElement(X,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d19deffb.chunk.js.map