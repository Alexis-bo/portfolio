(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);n(12);var i=n(1),r=(n(13),n(0)),a=n.n(r),o=n(4),l=n(5),c=n(3),s=n(7),d=n(6),u=Object(i.b)("div",(function(){return{width:"100%",alignSelf:"center",textAlign:"center"}})),p=Object(i.b)("span",(function(e){var t=e.number;return{alignItems:"center",justifyContent:"center",textAlign:"center",color:1==t?"#3572A5":2==t?"#e34c26":3==t?"#563d7c":"#f1e05a","@media only screen and (min-width: 300px) and (max-width: 1025px)":{display:"flex",width:"100%",height:"50px"}}})),h=['"Python"',"<html/>","#css{}","javascript();"],m=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={activeWord:0,currentDisplay:""},i.wordType=i.wordType.bind(Object(c.a)(i)),i.wordDelete=i.wordDelete.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.wordType()}},{key:"wordType",value:function(){var e=this.state,t=e.activeWord,n=e.currentDisplay;h[t]==n?setTimeout(this.wordDelete,1500):(this.setState({currentDisplay:h[t].substring(0,n.length+1)}),setTimeout(this.wordType,150))}},{key:"wordDelete",value:function(){var e=this.state,t=e.activeWord,n=e.currentDisplay;this.setState({currentDisplay:""}),""==n?(this.setState({activeWord:(t+1)%h.length}),setTimeout(this.wordType,150)):(this.setState({currentDisplay:n.substring(0,n.length-1)}),setTimeout(this.wordDelete,80))}},{key:"render",value:function(){var e=this.state,t=e.currentDisplay,n=e.activeWord;return a.a.createElement(u,null,"Some of my favorite ",a.a.createElement("br",null),"languages :"," ",a.a.createElement(p,{number:n},t))}}]),n}(r.Component),f=Object(i.b)("div",(function(e){return{marginLeft:e.leftMargin,"@media only screen and (min-width: 300px) and (max-width: 1025px)":{marginLeft:"0px"}}})),g=Object(i.b)("div",(function(){return{display:"flex",flexDirection:"column",color:"#b7b3b0","@media only screen and (min-width: 300px) and (max-width: 1025px)":{alignItems:"center",justifyContent:"center",textAlign:"center",fontSize:"60px",lineHeight:"80px"}}})),b=function(){return a.a.createElement(g,null,a.a.createElement(f,null,"Hello !"),a.a.createElement(f,{leftMargin:"25px"},"I am Alexis,"),a.a.createElement(f,{leftMargin:"50px"},"a Junior Software Engineer"))},x=Object(i.b)("div",(function(e){return{display:"flex",flexDirection:e.horizontal?"row":"column",alignItems:"center",justifyContent:"center",flex:"1",minHeight:"100vh",width:"100%",padding:e.last?"50px 0px 0px 0px":"50px 0px",fontSize:"50px",lineHeight:"120px",color:"#b7b3b0",backgroundColor:"#0A013D","@media only screen and (min-width: 300px) and (max-width: 1025px)":{fontSize:"40px",lineHeight:"50px"}}})),w=Object(i.b)("div",(function(){return{display:"flex",alignItems:"center",justifyContent:"center",flex:"1",width:"100%",fontSize:"60px",lineHeight:"80px",color:"#b7b3b0",padding:"100px 0px","@media only screen and (min-width: 300px) and (max-width: 1025px)":{fontSize:"50px",lineHeight:"60px",textAlign:"center"}}})),v=function(){return a.a.createElement("div",{id:"aboutmeSection"},a.a.createElement(x,null,a.a.createElement(b,null)),a.a.createElement(x,null,a.a.createElement(m,null)))},y=Object(i.b)("div",(function(){return{margin:"70px 0px"}})),E=Object(i.b)("span",(function(e){return{color:e.animation?"red":"inherit",transition:"all 1.0s linear 0s"}})),S=Object(i.b)("div",(function(){return{width:"60%","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"90%"}}})),j=Object(i.b)("div",(function(){return{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}})),k=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={animation:!1},i.handleScroll=i.handleScroll.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.animationThreshold=document.getElementById("opportunity").offsetTop-300,window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.pageYOffset>=this.animationThreshold&&(this.setState({animation:window.pageYOffset>=this.animationThreshold}),window.removeEventListener("scroll",this.handleScroll))}},{key:"render",value:function(){var e=this.state.animation;return a.a.createElement(j,null,a.a.createElement(S,null,a.a.createElement(y,{id:"opportunity"},"I am looking for Software Engineering opportunities where I can make a"," ",a.a.createElement(E,{animation:e},"difference")),a.a.createElement(y,null,"Available from March 2022")))}}]),n}(r.Component),O=Object(i.b)("div",(function(){return{padding:"20px"}})),T=Object(i.b)("div",(function(){return{display:"flex",width:"100%",flexDirection:"column",color:"#b7b3b0",textAlign:"center",alignItems:"center",justifyContent:"center","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"90%"}}})),D=Object(i.b)("div",(function(){return{display:"flex",width:"100%",flexDirection:"row",color:"#b7b3b0",alignItems:"center",justifyContent:"center"}})),C=Object(i.b)("img",(function(){return{display:"flex",height:"50px",width:"auto",padding:"30px 100px",alignSelf:"center",filter:"contrast(100%)",":hover":{transform:"scale(1.4)",filter:"contrast(200%)"},transition:"all 0.2s ease 0s","@media only screen and (min-width: 300px) and (max-width: 1025px)":{padding:"30px 20px"}}})),A=function(){return a.a.createElement(T,null,a.a.createElement(O,null,"Get to know"," ",a.a.createElement("a",{href:"https://drive.google.com/file/d/1uugGeLRKVRp18T4VuqT_ZBsnkQjCXbuR/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"me")," ","a little better"),a.a.createElement(O,null,"Or contact me !"),a.a.createElement(D,null,a.a.createElement("a",{href:"https://github.com/Alexis-bo",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(C,{src:"/portfolio/Logo-Github.png",alt:"logo github"})),a.a.createElement("a",{href:"mailto:alebonnel@gmail.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(C,{src:"/portfolio/Logo-Mail.png",alt:"logo mail"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/alexis-bonnel-846816184/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(C,{src:"/portfolio/Logo-Linkedin.png",alt:"logo linkedin"}))))},I=function(){return a.a.createElement("div",{id:"contactSection"},a.a.createElement(x,null,a.a.createElement(k,null)),a.a.createElement(x,{last:!0},a.a.createElement(A,null)))},H=Object(i.b)("div",(function(){return{lineHeight:"70px",fontSize:"50px",paddingBottom:"20px",alignSelf:"center",textAlign:"center"}})),L=Object(i.b)("div",(function(){return{display:"flex",width:"25%",minHeight:"500px",flexDirection:"column",textAlign:"left",justifyContent:"flex-start",alignItems:"flex-start",color:"#0A013D",margin:"40px 3%",lineHeight:"40px",fontSize:"25px",backgroundColor:"#b7b3b0",borderRadius:"15px",padding:"10px","@media only screen and (min-width: 300px) and (max-width: 1025px)":{width:"80%",fontSize:"35px",lineHeight:"50px",margin:"60px 0px"}}})),P=Object(i.b)("img",(function(){return{display:"flex",height:"200px",maxWidth:"80%",width:"auto",padding:"30px 0px",alignSelf:"center"}})),J=Object(i.b)("div",(function(){return{display:"flex",width:"100%",padding:"20px 0px"}})),M=Object(i.b)("div",(function(){return{fontStyle:"italic",padding:"20px 0px"}})),B=Object(i.b)("a",(function(){return{display:"flex",marginRight:"20px"}})),R=Object(i.b)("a",(function(){return{display:"flex"}})),W=Object(i.b)("div",(function(){return{display:"flex",flexDirection:"row"}})),z=function(e){var t=e.title,n=e.imagePath,i=e.description,r=e.techno,o=e.link,l=e.git;return a.a.createElement(L,null,a.a.createElement(H,null,t),n&&a.a.createElement(P,{src:"/portfolio/"+n,alt:"project image"}),a.a.createElement(J,null,i),a.a.createElement(M,null,r),a.a.createElement(W,null,o&&a.a.createElement(B,{href:o,target:"_blank",rel:"noopener noreferrer"},"Link"),l&&a.a.createElement(R,{href:l,target:"_blank",rel:"noopener noreferrer"},"Git")))},_=Object(i.b)("div",(function(){return{display:"flex",width:"100%",height:"100%",flexDirection:"row",flexWrap:"wrap",justifyContent:"center","@media only screen and (min-width: 300px) and (max-width: 1025px)":{flexDirection:"column",alignItems:"center"}}})),G={projects:[{title:"Alone Together",imagePath:"Alone-Together.png",description:"Immersive 3D experience in first person where the user is bound to impact his neighbour's environment because of his choices ...",techno:"Unity, C#",link:"",git:""},{title:"One shot",imagePath:"One-Shot.png",description:"Basketball and dart throwing virtual reality experience",techno:"Unity, C#, HTC Vive, Steam VR",link:"",git:""},{title:"Toucher 2009",imagePath:"Toucher-2009.png",description:a.a.createElement("div",null,"Recreation in HTML5, CSS3, JavaScript of a 2009 flash project after the death of Adobe Flash Player in 2021. Selected to be in the"," ",a.a.createElement("a",{href:"https://the-next.eliterature.org/exhibition/afterflash/bouchardon-toucher.html",target:"_blank",rel:"noopener noreferrer"},"after flash exhibition as a reference of flash project recreation.")),techno:"HTML, CSS, JavaScript, KonvaJS, Howler, Flash",link:"https://www.to-touch.net/",git:""},{title:"billiv",imagePath:"Billiv-Logo.png",description:"6 month internship as a Software Engineer Intern in billiv, a startup developing a paperless receipt solution. Develop fronts (website, dashboard ...), add new routes in the backend and implement data pipelines",techno:"HTML, CSS, JavaScript, ReactJS, ChartJS, Python, Google Cloud Platform",link:"https://www.billiv.fr/",git:""},{title:"RTA Brain",imagePath:"Summoners-War-Logo.png",description:"Decision helping tool for Real Time Arena, a competitive PvP mode in the mobile game Summoners War:Sky Arena. Work in progress, beta to be released early 2022",techno:"HTML, CSS, JavaScript, ReactJS, TypeScript",link:"",git:""},{title:"Boids simulation",imagePath:"Boids.png",description:"Simulation of boids movement in a 2D environment using the multi-agent platform JADE",techno:"Java, JADE, multi-agent",link:"",git:""},{title:"Portfolio",imagePath:"",description:"The website you are currently on ! This is a basic site to display what I am working on. You can check the public github repo to see the source code and how I work !",techno:"HTML, CSS, JavaScript, ReactJS",link:"https://alexis-bo.github.io/portfolio/",git:"https://github.com/Alexis-bo/portfolio"}]},F=function(){return a.a.createElement(_,null,G.projects.map((function(e,t){return a.a.createElement(z,{title:e.title,imagePath:e.imagePath,description:e.description,techno:e.techno,link:e.link,git:e.git,key:t})})))},U=function(){return a.a.createElement("div",{id:"projectsSection"},a.a.createElement(x,null,a.a.createElement(w,null,"A few projects I have worked on"),a.a.createElement(F,null)))},V=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(v,null),a.a.createElement(U,null),a.a.createElement(I,null))},Y=Object(i.b)("div",(function(){return{width:"100%",height:"50px",display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",flexDirection:"row",background:"#0A013D",margin:"0",zIndex:"1000","@media only screen and (min-width: 300px) and (max-width: 1025px)":{display:"none"}}})),K=Object(i.b)("div",(function(e){return{display:"flex",justifyContent:"flex-start",padding:"0px 50px",fontSize:"40px",color:e.active?"white":"#b7b3b0",":hover":{color:"white",cursor:"pointer"}}})),q=Object(i.b)("div",(function(){return{display:"flex",justifyContent:"flex-end",alignItems:"center",padding:"0px 20px",width:"90%",height:"100%",borderBottom:"2px solid white"}})),Q=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={windowOffset:0},i.handleScroll=i.handleScroll.bind(Object(c.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({windowOffset:window.pageYOffset})}},{key:"checkIsActive",value:function(e){if(e){var t=document.getElementById(e);if(t){var n=this.state.windowOffset,i=t.offsetTop-70,r=i+t.offsetHeight;return n>=i&&n<r}}return!1}},{key:"scrollTo",value:function(e){var t=0;if(e){var n=document.getElementById(e);n&&(t=n.offsetTop,window.scroll({top:t,behavior:"smooth"}))}}},{key:"render",value:function(){var e=this;return a.a.createElement(Y,null,a.a.createElement(q,null,a.a.createElement(K,{active:this.checkIsActive("aboutmeSection"),onClick:function(){return e.scrollTo("aboutmeSection")}},"About me"),a.a.createElement(K,{active:this.checkIsActive("projectsSection"),onClick:function(){return e.scrollTo("projectsSection")}},"Projects"),a.a.createElement(K,{active:this.checkIsActive("contactSection"),onClick:function(){return e.scrollTo("contactSection")}},"Contact")))}}]),n}(r.Component),X=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(Q,null),a.a.createElement(V,null))},Z=n(9),N=n.n(Z),$=new(n(11).a);N.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{value:$,debug:undefined,debugAfterHydration:!0},a.a.createElement(X,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.61b2436a.chunk.js.map