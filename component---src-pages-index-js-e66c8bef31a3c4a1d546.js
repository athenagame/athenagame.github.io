(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,a){"use strict";a.r(t);a("91GP");var s=a("tsIV"),i=a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}t.default=function(e){return Object(i.a)(s.a,l({},e,{lang:"en"}))}},tsIV:function(e,t,a){"use strict";var s,i=a("q1tI"),l=a("DYRK"),r=a("TSYQ"),n=a.n(r),o=a("5Wrh"),c=a("qKvR"),m=function(e){var t=e.className,a=e.children;return Object(c.a)("div",{className:"rounded-lg  "+t,style:{minHeight:"95%",justifyContent:"start"}},a)},d=a("Sv8q"),b=function(e){var t=e.id,a=e.primarySlot,s=e.secondarySlot,i=e.reverseOrder;return Object(c.a)("section",{id:t,className:"py-8"},Object(c.a)("div",{className:"container mx-auto px-16 items-center flex flex-col lg:flex-row"},Object(c.a)("div",{className:"lg:w-1/2"},a),Object(c.a)("div",{className:"mt-10 lg:mt-0 w-full lg:w-1/2 "+(i&&"order-last lg:order-first")},s)))},x=a("DZkJ"),p=a.n(x),g=Object(l.createUseStyles)({"@keyframes fadeIn":{from:{opacity:0,visibility:"hidden"},to:{opacity:1,visibility:"visible"}},"@keyframes fadeInLeftIllustration":{"0%":{opacity:0,transform:"scale(0.95) translate3d(-40px, 10px, 0)"},"100%":{opacity:1}},"@keyframes fadeInLeftMedia":{"0%":{opacity:0,transform:"scale(0.8) translate3d(-40px, 10px, 0)"},"30%":{opacity:1}},"@keyframes screenshotZoomIn":{"0%":{transform:"scale(0.5)"},"100%":{transform:"scale(1)"}},headerImage:{animation:"$fadeIn 1s both cubic-bezier(0.3, 0, 0.2, 1)"},image1Container:{animation:"$fadeIn 1s both cubic-bezier(0.3, 0, 0.2, 1)",zIndex:-200,position:"absolute",left:"0%"},image2Container:(s={animation:"$fadeInLeftIllustration 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)",zIndex:-200,position:"absolute",left:function(e){return e&&"0%"},right:function(e){return!e&&"0%"},width:"80%",top:"470px"},s["@media (min-width: 1024px)"]={width:"50%",top:"75px"},s),screenshotAnimation:{animation:"$screenshotZoomIn 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)"},screenshot:{transition:"transform .4s cubic-bezier(0.3, 0, 0.2, 1)","&:hover":{transform:"scale(1.2)"}},imageHolder:{margin:"auto",display:"flex",flexDirection:"column",position:"relative"},mainImageAnimation:{margin:"35px",marginTop:"80px",animation:"$fadeInLeftMedia 1s 0.2s both cubic-bezier(0.3, 0, 0.2, 1)"},mainImage:{transition:"transform .5s cubic-bezier(0.3, 0, 0.2, 1)",transform:function(e){return"perspective(1000px) rotateY("+(e?"":"-")+"16deg) rotateX(2deg) rotateZ("+(e?"-":"")+"7deg) scaleY(0.95) translatex(2%)"},"&:hover":{transform:"perspective(1000px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scaleY(1) translatex(2%)"}}});t.a=function(e){var t=e.lang,a="fa"===t,s=p.a.featureList,l=["/question.svg","/team.svg","/palette.svg","/projector.svg","/loader.svg","/tools.svg"],r=p.a.questionList,x=["/flip.mp4","/custom2.mp4","/music.mp4"],f=Object(i.useState)(!1),u=f[0],h=f[1],j=g(a),O=Object(i.useRef)();return Object(c.a)(d.a,{lang:t},Object(c.a)("section",null,Object(c.a)("div",{className:"container mx-auto px-8 lg:flex "+j.imageHolder},Object(c.a)("div",{className:j.image1Container},Object(c.a)("img",{src:"/header.svg",alt:"Logo",style:{transform:a&&"scaleX(-1)"}})),Object(c.a)("div",{className:j.image2Container+" "},Object(c.a)("img",{src:"/hero.svg",alt:"Logo",style:{transform:a&&"scaleX(-1)"}})))),Object(c.a)("section",{className:"pt-8 md:pt-24 md:mb-10"},Object(c.a)("div",{className:"container px-8 mx-auto lg:flex"},Object(c.a)("div",{className:"text-center lg:text-left lg:w-1/2"},Object(c.a)("h1",{className:"text-4xl font-normal leading-none leading-tight lg:text-5xl xl:text-6xl rtl:text-right balsamiq"},p.a.headline[t]),Object(c.a)("p",{className:"mt-6 text-xl font-light lg:text-2xl rtl:text-right",style:{boxShadow:"0px 0px 60px 11px rgba(255,255,255,1)",backgroundColor:"#ffffffa6"}},p.a.secondaryHeadline[t]),Object(c.a)("a",{href:"https://github.com/athenagame/athenagame.github.io/releases/download/0.9.12/Athena.exe"},Object(c.a)(o.a,{size:"xl",className:"flex mt-10 text-3xl font-extrabold tracking-wider uppercase rtl:mt-16 ltr:tracking-tighter",type:"submit",onClick:function(){h(!0),O.current.submit()}},p.a.download[t])),Object(c.a)("div",{className:"p-1 rtl:text-right"},p.a.downloadDescription[t])),Object(c.a)("div",{className:n()(j.mainImageAnimation,"lg:w-1/2")},Object(c.a)("div",{className:n()(j.mainImage,"rounded-lg"),style:{width:"100%",margin:"auto",backgroundColor:"white",boxShadow:"10px 18px 56px -19px rgba(51,51,51,0.85)"}},Object(c.a)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"rounded-lg"},Object(c.a)("source",{src:"/peek2.mp4"})))))),Object(c.a)("section",{id:"features",className:"pt-32 lg:pb-0 md:pt-20 md:mb-10"},Object(c.a)("div",{className:"container mx-auto text-center"},Object(c.a)("h2",{className:"text-4xl lg:text-5xl balsamiq rtl:font-semibold"},p.a.features[t]),Object(c.a)("div",{className:"flex flex-col flex-wrap mt-12 md:flex-row md:-mx-3"},s.map((function(e,a){return Object(c.a)("div",{key:""+e[t]+a,className:"px-3",style:{flex:"1 1 33%",background:"white"}},Object(c.a)(m,{className:"flex flex-row items-center p-4 mb-4 md:p-6 md:flex-col md:justify-between"},Object(c.a)("img",{src:l[a],alt:"icon",style:{height:"130px"},className:"md:mb-6"}),Object(c.a)("div",{className:"px-6 md:px-0"},Object(c.a)("p",{className:"text-2xl text-left rtl:font-semibold rtl:text-right md:rtl:text-center md:text-center balsamiq"},e.title[t]),Object(c.a)("p",{className:"mt-4 mb-3 text-left rtl:text-right md:rtl:text-center md:text-center"},e.description[t]))))}))))),Object(c.a)("section",{id:"questions",className:"pt-32 md:pt-20 md:mb-10"},Object(c.a)("div",{className:"container mx-auto text-center"},Object(c.a)("h2",{className:"text-4xl lg:text-5xl rtl:font-semibold balsamiq"},p.a.questions[t])),r.map((function(e,a){return Object(c.a)(b,{key:""+e[t]+a,reverseOrder:a%2,primarySlot:Object(c.a)("div",{className:"lg:pl-32 xl:pl-48"},Object(c.a)("h3",{className:"text-3xl leading-tight rtl:font-semibold balsamiq"},e.title[t]),Object(c.a)("p",{className:"mt-8 text-xl font-light leading-relaxed"},e.description[t])),secondarySlot:Object(c.a)("div",{className:n()(j.screenshotAnimation,"md:p-10")},Object(c.a)("div",{className:n()(j.screenshot,"rounded-lg"),style:{width:"100%",margin:"auto",backgroundColor:"white",boxShadow:"rgba(51, 51, 51, 0.85) 0px 0px 16px -2px"}},Object(c.a)("video",{className:"rounded-lg",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},Object(c.a)("source",{src:x[a]}))))})}))),Object(c.a)("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"}}),Object(c.a)("section",{id:"download",className:"container py-10 mx-auto my-20 text-center bg-gray-200 rounded-lg "},Object(c.a)("form",{ref:O,target:"hidden_iframe",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSdbwoJ8-KaDsIk3xSlSjW29lWxrDGA6UAwiriGLTuBLypgWPw/formResponse",method:"post",style:{display:u?"none":"block"}},Object(c.a)("p",{className:"m-8 text-xl font-light"},p.a.email[t]),Object(c.a)("div",{className:"flex px-2 md:px-24"},Object(c.a)("svg",{className:"w-10 h-10 text-orange-500 fill-current",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512.002",viewBox:"0 0 512 512.002"},Object(c.a)("g",{transform:"translate(0 0.002)"},Object(c.a)("path",{d:"M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z",opacity:"0.4"}),Object(c.a)("path",{d:"M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"}))),Object(c.a)("input",{type:"email",name:"entry.1055300465",className:"w-full px-3 py-2 mx-2 text-base border-t border-b border-l border-gray-200 rounded md:text-lg",style:{marginLeft:16},placeholder:p.a.yourEmail[t]})),Object(c.a)("p",{className:"mt-8"},Object(c.a)(o.a,{size:"xl",type:"submit",onClick:function(){h(!0),O.current.submit()}},p.a.emailText[t]))),u&&Object(c.a)("p",{className:"text-xl font-light"},p.a.emailSent[t])))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e66c8bef31a3c4a1d546.js.map