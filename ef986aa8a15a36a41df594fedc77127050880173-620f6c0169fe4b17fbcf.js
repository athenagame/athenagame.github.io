(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/OBz":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"defaultTitle":"Athena Game Show","titleTemplate":"%s · Athena Game Show","defaultDescription":"Create entertaining TV style game shows with Athena","siteUrl":"https://www.athenagameshow.com","defaultImage":"/static/logo.svg","twitterUsername":"@athenagameshow"}}}}')},"5Wrh":function(e,t,n){"use strict";n("q1tI");var r=n("qKvR"),o={default:"py-3 px-8",lg:"py-4 px-12",xl:"py-5 px-16 text-lg"};t.a=function(e){var t=e.children,n=e.type,a=e.className,i=void 0===a?"":a,c=e.size,l=e.onClick;return Object(r.a)("button",{type:n||"button",className:"\n        "+(o[c]||o.default)+"\n        "+i+"\n        bg-primary\n        hover:bg-primary-darker\n        rounded\n        text-white\n    ",onClick:l},t)}},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bi3C:function(e,t,n){var r;n("Oyvg"),n("eM6i"),n("2Spj"),n("/SS/"),n("hHhE"),n("V+eJ"),n("91GP"),n("HAE/"),"undefined"!=typeof self&&self,r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),c=(r=i)&&r.__esModule?r:{default:r},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.smoothScroll=n.smoothScroll.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){n(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var n=function(){return 0};void 0!==this.props.offset&&(n=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var r=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(r).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-n(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["offset"]));return c.default.createElement("a",o({},t,{onClick:this.smoothScroll}))}}]),t}(i.Component);t.default=l},function(t,n){t.exports=e},function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var n=p(this),r=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==t.body?(h.call(this,n,n.scrollLeft+a.left-r.left,n.scrollTop+a.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function l(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=s(e,"Y")&&u(e,"Y"),n=s(e,"X")&&u(e,"X");return t||n}function p(e){var n;do{n=(e=e.parentNode)===t.body}while(!1===n&&!1===f(e));return n=null,e}function d(t){var n,r,o,i,c=(a()-t.startTime)/468;i=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*i)),r=t.startX+(t.x-t.startX)*n,o=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(d.bind(e,t))}function h(n,r,i){var l,s,u,f,p=a();n===t.body?(l=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(l=n,s=n.scrollLeft,u=n.scrollTop,f=c),d({scrollable:l,method:f,startTime:p,startX:s,startY:u,x:r,y:i})}}}}()}])},e.exports=r(n("q1tI"))},DZkJ:function(e,t){e.exports={headerTitle:{en:"Athena Game Show Maker",fa:"مسابقه‌ساز آتنا"},headline:{en:"Create entertaining TV style game shows with Athena",fa:"با آتنا مسابقات سرگرم‌کننده و آموزشی بسازید"},secondaryHeadline:{en:"Best for presenting your own game show questions offline in a fully interactive and customizable way, on BIG SCREENS for different events and occasions.",fa:"مناسب برای ارائه سوال‌های مسابقه به صورت آفلاین در محیطی تعاملی و جذاب، بر روی تلویزیون، ویدئو پروژکتور و صفحات بزرگ."},features:{en:"Features",fa:"امکانات"},questions:{en:"‌‌Be Creative",fa:"خلاق باشید"},usecases:{en:"Usecases",fa:"موارد استفاده"},featureList:[{title:{en:"Many question types",fa:"پشتیبانی از انواع سوالات"},description:{en:"Multiple choice, guess picures and music, flip cards, etc.",fa:"چند گزینه‌ای، متن، حدس تصویر، حدس موسیقی، کارت شانس و ..."}},{title:{en:"Teams and Scores",fa:"تعریف تیم و امتیازدهی"},description:{en:"Define team names and their colors. See scores in real time.",fa:"تعریف تیم با اسامی و رنگ‌های دلخواه  و دیدن امتیازات به صورت لحظه‌ای"}},{title:{en:"Fully customizable",fa:"شخصی‌سازی"},description:{en:"Change all colors, backgrounds, logos, timers and sounds.",fa:"امکان تغییر رنگ ها و تصاویر پس‌زمینه، لوگو، صداها و غیره."}},{title:{en:"Responsive design",fa:"تطبیق‌پذیری رابطه کاربری "},description:{en:"Fonts and pictures resize automatically to match all screen sizes.",fa:"قابلیت تغییر اندازه‌ی خودکار عناصر با توجه به اندازه صفحه"}},{title:{en:"Save and load",fa:"استخراج و بارگذاری مسابقه"},description:{en:"Save your game as a file for backup or later use",fa:"امکان تهیه‌ي نسخه‌ پشتیبان از محتوای مسابقه و بارگذاری مجدد آن"}},{title:{en:"Edit easily",fa:"ویرایش آسان"},description:{en:"Easily add and edit questions of different types from inside the app.",fa:"افزودن آسان و ویرایش سریع سوالات از درون برنامه"}}],questionList:[{title:{en:"Gamify learning",fa:"یادگیری را به بازی تبدیل کنید"},description:{en:"Use game shows to improve morale, bring stronger attention, increase participation and lower stress while learning",fa:"با استفاده از مسابقات در روند یادگیری دقت فردی و روحیه جمعی با بالا ببرید و آموزش را آسانتر کنید."}},{title:{en:"Save and share",fa:"ذخیره کنید و به اشتراک بگذارید"},description:{en:"Fully customize you game show, choose your colors and backgrounds and save it all as a file. Re-use it later or even send it to others.",fa:"مسابقه خود را با رنگ‌ها و تصاویر پس‌زمینه خودتان سفارشی کنید و در یک فایل ذخیره کنید تا در آینده دوباره استفاده کنید یا حتی برای دیگران بفرستید."}},{title:{en:"Break the ice",fa:"در دورهمی‌ها فضایی شاد ایجاد کنید"},description:{en:"Add fun TV style game shows to any event, class, meeting, party or groups.",fa:"با ساختن مسابقات جذاب فضای هر کلاس، رویداد، مهمانی و دورهمی را هیجان‌انگیزتر کنید."}}],buyline:{en:"Buy a one time license for your PC and use Athena as much as you want.",fa:"با یک بار خرید آتنا می‌توانید همیشه از آن استفاده کنید."},getStarted:{en:"Get started now!",fa:"دریافت"},aboutUs:{en:"About Us",fa:"درباره ما"},aboutText:{en:"By Raffi Dilanchian, Samim Pezeshki",fa:"By Raffi Dilanchian, Samim Pezeshki"},email:{en:"Please let us contact you with detailed information",fa:"لطفا برای اطلاعات بیشتر ایمیل خود را وارد نمایید:"},emailText:{en:"Contact me",fa:"با من تماس بگیرید"},emailSent:{en:"Thanks! We will contact you shortly",fa:"به زودی با شما تماس خواهیم گرفت."},yourEmail:{en:"Your email",fa:"ایمیل شما"},changeLanguage:{en:"فارسی",fa:"English"},download:{en:"Download now!",fa:"دانلود رایگان"},downloadDescription:{en:"For Windows 7, 8 and 10",fa:"Windows 7, 8, 10"}}},Sv8q:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky"),i=n("DZkJ"),c=n.n(i),l=n("qKvR"),s=function(e){var t=e.lang;return Object(l.a)("footer",{className:"container px-3 py-16 mx-auto mb-8 text-gray-800"},Object(l.a)("div",{className:"flex -mx-3"},Object(l.a)("div",{className:"flex-1 px-3"},Object(l.a)("h2",{className:"text-lg font-semibold"},c.a.aboutUs[t]),Object(l.a)("a",{href:"https://www.instagram.com/athenagameshow/"},Object(l.a)("i",{className:"fontello-icon icon-instagram"},"")," AthenaGameShow"),Object(l.a)("br",null),Object(l.a)("a",{href:"mailto:contact@athenagameshow.com"},Object(l.a)("i",{className:"fontello-icon icon-mail"},"✉")," contact@athenagameshow.com"),Object(l.a)("br",null),Object(l.a)("a",{href:"https://www.linkedin.com/showcase/athena-game-show-maker/"},Object(l.a)("i",{className:"fontello-icon icon-linkedin"},"")," Athena Game Show Maker"),Object(l.a)("br",null),Object(l.a)("a",{href:"https://www.twitter.com/AthenaGameShow/"},Object(l.a)("i",{className:"fontello-icon icon-twitter"},"")," AthenaGameShow"),Object(l.a)("br",null),Object(l.a)("a",{href:"https://www.github.com/raffidil/"},Object(l.a)("i",{className:"fontello-icon"},"")," Raffi Dilanchian"),Object(l.a)("br",null),Object(l.a)("a",{href:"https://www.github.com/psamim/"},Object(l.a)("i",{className:"fontello-icon"},"")," Samim Pezeshki"))))},u=n("Bi3C"),f=n.n(u),p=n("DYRK"),d=n("TSYQ"),h=n.n(d),m=(n("5Wrh"),Object(p.createUseStyles)({title:{padding:"0px 30px",color:"#3d4b52"}})),y=function(e){var t=e.lang,n=m();return Object(l.a)("header",{className:"sticky top-0 bg-white shadow "+("fa"===t?"rtl":"ltr")+" z-50"},Object(l.a)("div",{className:"container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row"},Object(l.a)("a",{href:"fa"===t?"/fa":"/en"},Object(l.a)("div",{className:"flex items-center text-2xl"},Object(l.a)("div",{className:"w-12 mr-3"},Object(l.a)("img",{src:"/logo.svg",alt:"logo"})),Object(l.a)("div",{className:h()(n.title,"text-base rtl:text-3xl ltr:font-semibold rtl:font-medium lg:text-3xl")},c.a.headerTitle[t]))),Object(l.a)("div",{className:"flex items-center justify-center w-full mt-4 sm:w-2/5 md:mt-0"},Object(l.a)(f.a,{className:"px-4",href:"#features"},c.a.features[t]),Object(l.a)(f.a,{className:"px-4",href:"#questions"},c.a.questions[t]),Object(l.a)("a",{href:"fa"===t?"/en":"/fa",className:"px-3 py-1 border border-teal-500 rounded text-teal rtl:mr-auto ltr:ml-auto md:p-2"},c.a.changeLanguage[t]))))},b=n("/OBz"),g=n("YwZP"),v=function(e){var t=e.title,n=e.description,r=e.image,o=e.article,i=Object(g.useLocation)().pathname,c=b.data.site.siteMetadata,s=c.defaultTitle,u=c.titleTemplate,f=c.defaultDescription,p=c.siteUrl,d=c.defaultImage,h=c.twitterUsername,m={title:t||s,description:n||f,image:""+p+(r||d),url:""+p+i};return Object(l.a)(a.a,{title:m.title,titleTemplate:u,meta:[{name:"description",content:m.description},{name:"keywords",content:"athena,game,show"}]},Object(l.a)("meta",{name:"description",content:m.description}),Object(l.a)("meta",{name:"image",content:m.image}),m.url&&Object(l.a)("meta",{property:"og:url",content:m.url}),!o?null:Object(l.a)("meta",{property:"og:type",content:"article"}),m.title&&Object(l.a)("meta",{property:"og:title",content:m.title}),m.description&&Object(l.a)("meta",{property:"og:description",content:m.description}),m.image&&Object(l.a)("meta",{property:"og:image",content:m.image}),Object(l.a)("meta",{name:"twitter:card",content:"summary_large_image"}),h&&Object(l.a)("meta",{name:"twitter:creator",content:h}),m.title&&Object(l.a)("meta",{name:"twitter:title",content:m.title}),m.description&&Object(l.a)("meta",{name:"twitter:description",content:m.description}),m.image&&Object(l.a)("meta",{name:"twitter:image",content:m.image}),Object(l.a)("script",{type:"application/ld+json"},'\n    {\n      "@context": "https://schema.org",\n      "@type": "SoftwareApplication",\n      "name": "'+m.title+'",\n      "operatingSystem": "Windows 7, Windows, Windows 10, Windows 8, Linux, OSX",\n      "applicationCategory": "EducationalApplication"\n    }\n          '),Object(l.a)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(l.a)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(l.a)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(l.a)("link",{rel:"manifest",href:"/site.webmanifest"}),Object(l.a)("meta",{name:"msapplication-TileColor",content:"#da532c"}),Object(l.a)("meta",{name:"theme-color",content:"#ffffff"}))};t.a=function(e){var t=e.children,n=e.lang;return Object(l.a)(o.a.Fragment,null,Object(l.a)(v,null),Object(l.a)(a.a,null,Object(l.a)("link",{href:"https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font/dist/font-face.css",rel:"stylesheet",type:"text/css"}),Object(l.a)("link",{href:"https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Montserrat&display=swap",rel:"stylesheet"}),Object(l.a)("script",null,"\n  !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(\n  arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];\n  d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.\n  insertBefore(d,q)}(window,document,'script','_gs');\n\n  _gs('GSN-639569-C');\n                "),Object(l.a)("title",null,"Athena Game Show Maker"),Object(l.a)("body",{dir:"fa"===n?"rtl":"ltr"})),Object(l.a)(y,{lang:n}),Object(l.a)("main",{className:"text-gray-900 "+("fa"===n?"rtl":"ltr")},t),Object(l.a)(s,{lang:n}))}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),f=r(n);if(u&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var y=o(t);if((l=y.length)!==o(n).length)return!1;for(c=l;0!=c--;)if(!a.call(n,y[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=y[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",j="href",S="http-equiv",x="innerHTML",A="itemprop",C="name",E="property",k="rel",P="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",q="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",_=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),Y=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=Q(e,w.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,I);return t||r||void 0},K=function(e){return Q(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==x&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=y()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),ce(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,a),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),l(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=a.indexOf(l);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===x||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===x||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(g,o,r),link:pe(w.LINK,a,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,l,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},he=u()((function(e){return{baseTag:J([j,L],e),bodyAttributes:V(b,e),defer:Q(e,M),encode:Q(e,q),htmlAttributes:V(g,e),linkTags:Z(w.LINK,[k,j],e),metaTags:Z(w.META,[C,O,S,E,A],e),noscriptTags:Z(w.NOSCRIPT,[x],e),onChangeClientState:K(e),scriptTags:Z(w.SCRIPT,[P,x],e),styleTags:Z(w.STYLE,[T],e),title:X(e),titleAttributes:V(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),me=(o=he,i=a=function(e){function t(){return H(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case w.BODY:return U({},o,{bodyAttributes:U({},a)});case w.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(W(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=ef986aa8a15a36a41df594fedc77127050880173-620f6c0169fe4b17fbcf.js.map