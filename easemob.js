window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length,o=Number(arguments[1])||0;for(o=0>o?Math.ceil(o):Math.floor(o),0>o&&(o+=t);t>o;o++)if(o in this&&this[o]===e)return o;return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var o,i;if(null===this)throw new TypeError("this is null or not defined");var n=Object(this),s=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(o=t),i=0;s>i;){var a;i in n&&(a=n[i],e.call(o,a,i,n)),i++}}),function(e){"use strict";e.console||(e.console={});for(var t,o,i=e.console,n=function(){},s=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");t=s.pop();)i[t]||(i[t]={});for(;o=a.pop();)i[o]||(i[o]=n)}("undefined"==typeof window?this:window),function(){function e(e){var t=Object.prototype.toString.call(e);return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)}function t(e,t){i(e,t)||(e.className+=" "+t)}function o(e,t){i(e,t)&&(e.className=(" "+e.className+" ").replace(new RegExp(" "+t+" ","g")," ").trim())}function i(e,t){return!!~(" "+e.className+" ").indexOf(" "+t+" ")}function n(t,o){if("function"==typeof o){var i,n,s,a=e(t)?t:[t],r=[];for(i=2,n=arguments.length;n>i;++i)r.push(arguments[i]);for(i=0,n=a.length;n>i;++i)(s=a[i])&&o.apply(null,[s].concat(r))}}function s(e,t,o,i){e.addEventListener?e.addEventListener(t,o,i):e.attachEvent&&(e["_"+t]=function(){o.apply(e,arguments)},e.attachEvent("on"+t,e["_"+t]))}function a(e,t,o){var i="_"+t,n="on"+t;e.removeEventListener&&o?e.removeEventListener(t,o):e.detachEvent&&(e.detachEvent(n,e[i]),delete e[i])}window.easemobim=window.easemobim||{};var r=/mobile/i.test(navigator.userAgent);easemobim.utils={isTop:window.top===window.self,isNodeList:e,addCssRules:function(e){var t=document.createElement("style");t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t)},getBrief:function(e,t){return"string"!=typeof e?"":e.length>t?e.slice(0,t)+"...":e},formatDate:function(e,t){var o=e?new Date(e):new Date,i=t||"M月d日 hh:mm",n={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds()};/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in n)new RegExp("("+s+")").test(i)&&(i=i.replace(RegExp.$1,1===RegExp.$1.length?n[s]:("00"+n[s]).substr((""+n[s]).length)));return i},filesizeFormat:function(e){var t,o,i=["B","KB","MB","GB","TB","PB","EB","ZB"];return e>0?(t=Math.floor(Math.log(e)/Math.log(1024)),o=(e/Math.pow(1024,t)).toFixed(2)+" "+i[t]):o=0===e?"0 B":"",o},uuid:function(){for(var e=[],t="0123456789abcdef",o=0;36>o;o++)e[o]=t.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},convertFalse:function(e){return e="undefined"==typeof e?"":e,"false"===e?!1:e},$Remove:function(e){e&&(e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e))},live:function(e,t,o,i){var n=this,s=i||document;n.on(s,t,function(t){var i,n,a=t||window.event,r=a.target||a.srcElement,c=s.querySelectorAll(e);for(i=0,n=c.length;n>i;++i)c[i]===r&&o.call(r,a)})},on:function(e,t,o,i){t.split(" ").forEach(function(t){t&&n(e,s,t,o,i)})},off:function(e,t,o){t.split(" ").forEach(function(t){t&&n(e,a,t,o)})},one:function(e,t,o,i){if(e&&t){var n=function(){o.apply(this,arguments),a(e,t,n)};s(e,t,n,i)}},trigger:function(e,t){if(document.createEvent){var o=document.createEvent("HTMLEvents");o.initEvent(t,!0,!1),e.dispatchEvent(o)}else e.fireEvent("on"+t)},extend:function(e,t){for(var o in t)if(t.hasOwnProperty(o)){var i=Object.prototype.toString.call(t[o]);"[object Array]"===i?(e[o]=[],this.extend(e[o],t[o])):"[object Object]"===i?(e[o]={},this.extend(e[o],t[o])):e[o]=t[o]}return e},addClass:function(e,o){return n(e,t,o),e},removeClass:function(e,t){return n(e,o,t),e},hasClass:function(e,t){return e?i(e,t):!1},toggleClass:function(e,n,s){if(e&&n){var a="undefined"==typeof s?!i(e,n):s;a?t(e,n):o(e,n)}},getDataByPath:function(e,t){function o(){var e=i.shift();return"string"!=typeof e?n:"object"==typeof n&&null!==n?(n=n[e],o()):void 0}var i=t.split("."),n=e;return o()},query:function(e){var t=new RegExp("[?&]"+e+"=([^&]*)(?=&|$)"),o=t.exec(location.search);return o?o[1]:""},isAndroid:/android/i.test(navigator.useragent),isMobile:r,click:r&&"ontouchstart"in window?"touchstart":"click",isMin:function(){return"hidden"===document.visibilityState||document.hidden},setStore:function(e,t){try{localStorage.setItem(e,t)}catch(o){}},getStore:function(e){try{return localStorage.getItem(e)}catch(t){}},clearStore:function(e){try{localStorage.removeItem(e)}catch(t){}},clearAllStore:function(){try{localStorage.clear()}catch(e){}},set:function(e,t,o){var i=new Date,n=i.getTime()+24*(o||30)*3600*1e3;i.setTime(n),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";path=/;expires="+i.toGMTString()},get:function(e){var t=document.cookie.match("(^|;) ?"+encodeURIComponent(e)+"=([^;]*)(;|$)");return t?decodeURIComponent(t[2]):""},getAvatarsFullPath:function(e,t){if(e){e=e.replace(/^(https?:)?\/\/?/,"");var o=~e.indexOf("img-cn"),i=~e.indexOf("ossimages");return o&&!i?t+"/ossimages/"+e:"//"+e}},getConfig:function(e){for(var t,o={},i=document.scripts,n=0,s=i.length;s>n;n++)if(~i[n].src.indexOf("easemob.js")){t=i[n].src;break}if(!t)return{json:o,domain:""};for(var a,r=t.indexOf("?"),c=~t.indexOf("//")?t.indexOf("//"):0,l=t.slice(c,t.indexOf("/",c+2)),d=t.slice(r+1).split("&"),m=0,f=d.length;f>m;m++)a=d[m].split("="),o[a[0]]=a.length>1?decodeURIComponent(a[1]):"";return{json:o,domain:l}},copy:function(e){return this.extend({},e)}}}(),function(){easemobim._const={loadingSvg:['<div class="em-widget-loading">','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">','<circle opacity=".3" fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" cx="35" cy="35" r="11"/>','<path fill="none" stroke="#E5E5E5" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M24 35c0-6.1 4.9-11 11-11 2.8 0 5.3 1 7.3 2.8"/>',"</svg>","</div>"].join(""),agentStatusText:{Idle:"(离线)",Online:"(空闲)",Busy:"(忙碌)",Leave:"(离开)",Hidden:"(隐身)",Offline:"(离线)",Logout:"(离线)",Other:""},agentStatusClassName:{Idle:"online",Online:"online",Busy:"busy",Leave:"leave",Hidden:"hidden",Offline:"offline",Logout:"offline",Other:"hide"},eventMessageText:{TRANSFERING:"会话转接中，请稍候",TRANSFER:"会话已被转接至其他客服",LINKED:"会话已被客服接起",CLOSED:"会话已结束",NOTE:"当前暂无客服在线，请您留下联系方式，稍后我们将主动联系您",CREATE:"会话创建成功"},themeMap:{"天空之城":"theme-1","丛林物语":"theme-2","红瓦洋房":"theme-3","鲜美橙汁":"theme-4","青草田间":"theme-5","湖光山色":"theme-6","冷峻山峰":"theme-7","月色池塘":"theme-8","天籁湖光":"theme-9","商务风格":"theme-10"},IM:{WEBIM_CONNCTION_OPEN_ERROR:1,WEBIM_CONNCTION_AUTH_ERROR:2,WEBIM_CONNCTION_AJAX_ERROR:17,WEBIM_CONNCTION_CALLBACK_INNER_ERROR:31},EVENTS:{NOTIFY:"notify",RECOVERY:"recoveryTitle",SHOW:"showChat",CLOSE:"closeChat",CACHEUSER:"setUser",DRAGREADY:"dragReady",DRAGEND:"dragEnd",SLIDE:"titleSlide",ONMESSAGE:"onMessage",ONSESSIONCLOSED:"onSessionClosed",EXT:"ext",TEXTMSG:"textmsg",ONREADY:"onready",SET_ITEM:"setItem",UPDATE_URL:"updateURL",REQUIRE_URL:"requireURL",INIT_CONFIG:"initConfig",SHOW_IMG:"showIMG"},UPLOAD_FILESIZE_LIMIT:10485760,FIRST_CHANNEL_MESSAGE_TIMEOUT:1e4,FIRST_CHANNEL_IMG_MESSAGE_TIMEOUT:15e3,SECOND_MESSAGE_CHANNEL_MAX_RETRY_COUNT:1,FIRST_CHANNEL_CONNECTION_TIMEOUT:2e4,HEART_BEAT_INTERVAL:6e4,SECOND_CHANNEL_MESSAGE_RECEIVE_INTERVAL:6e4,MESSAGE_PREDICT_MAX_LENGTH:100,MAX_TEXT_MESSAGE_LENGTH:1500,GET_HISTORY_MESSAGE_COUNT_EACH_TIME:10,AGENT_INPUT_STATE_INTERVAL:1e3,for_block_only:null}}(),window.easemobim=window.easemobim||{},window.easemobIM=window.easemobIM||{},easemobIM.Transfer=easemobim.Transfer=function(){"use strict";var e=function(){var e=!0;try{window.postMessage({toString:function(){e=!1}},"*")}catch(t){}return e}(),t=function(e,t,o){var i,n,s,a=!1,r=e.data;if("object"==typeof r)i=r;else if("string"==typeof r){try{i=JSON.parse(r)}catch(c){}if("object"!=typeof i)return}if(o&&o.length)for(n=0,s=o.length;s>n;n++)i.key===o[n]&&(a=!0,"function"==typeof t&&t(i));else"function"==typeof t&&t(i);if(!a&&o)for(n=0,s=o.length;s>n;n++)if("data"===o[n]){"function"==typeof t&&t(i);break}},o=function(e,t,i){return this instanceof o?(this.key=t,this.iframe=document.getElementById(e),this.origin=location.protocol+"//"+location.host,void(this.useObject=i)):new o(e)};return o.prototype.send=function(t,o){return t.origin=this.origin,t.key=this.key,o&&(t.to=o),e&&(this.useObject||t.useObject)||(t=JSON.stringify(t)),this.iframe?this.iframe.contentWindow.postMessage(t,"*"):window.parent.postMessage(t,"*"),this},o.prototype.listen=function(e,o){var i=this;return window.addEventListener?window.addEventListener("message",function(n){t.call(i,n,e,o)},!1):window.attachEvent&&window.attachEvent("onmessage",function(n){t.call(i,n,e,o)}),this},o}(),easemobim.notify=function(){var e=0;return function(t,o,i){if(0===e&&(e=setTimeout(function(){e=0},3e3),window.Notification))if("granted"===Notification.permission){var n=new Notification(o||"",{icon:t||"",body:i||""});n.onclick=function(){"function"==typeof window.focus&&window.focus(),this.close(),"object"==typeof easemobim.titleSlide&&easemobim.titleSlide.stop()},setTimeout(function(){n.close()},3e3)}else Notification.requestPermission()}}(),easemobim.titleSlide=function(){var e,t="新消息提醒",o=0,i=document.title,n=(i+t).split("");return{stop:function(){clearInterval(o),o=0,document.title=i},start:function(){o||(o=setInterval(function(){e=n.shift(),document.title=e+Array.prototype.join.call(n,""),n.push(e)},360))}}}(),easemobim.pcImgView=function(){var e=easemobim.utils,t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img");return t.appendChild(o),t.appendChild(i),document.body.appendChild(t),t.style.cssText=["display:none","position:fixed","top:0","left:0","width:100%","height:100%","z-index:16777270"].join(";"),o.style.cssText=["position:fixed","top:0","left:0","width:100%","height:100%","background-color:#000","background-color:rgba(0, 0, 0, .7)","filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70)"].join(";"),i.style.cssText=["max-width:100%","max-height:100%","position:absolute","margin:auto","top:0","right:0","bottom:0","left:0"].join(";"),e.on(t,"click",function(){this.style.display="none"},!1),function(e){var o,n=e.imgFile;o=n?window.URL.createObjectURL(n):e.imgSrc,i.setAttribute("src",o),t.style.display=""}}(),easemobim.loading=function(e){var t,o=['<div class="easemobim-prompr-wrapper">','<div class="loading">',e.loadingSvg,"</div>","<span>正在加载，请稍候...</span>","</div>"].join(""),i=document.createElement("div");return i.innerHTML=o,t=i.childNodes[0],document.body.appendChild(t),{show:function(){t.style.display="block"},hide:function(){t.style.display="none"}}}(easemobim._const),function(e,t,o){"use strict";function i(e){var t=this,o=window.event||e,i=document.documentElement.clientWidth,s=document.documentElement.clientHeight,a=i-o.clientX-t.rect.width+c.x,l=s-o.clientY-t.rect.height+c.y;o.clientX-c.x<=0?a=i-t.rect.width:o.clientX+t.rect.width-c.x>=i&&(a=0),o.clientY-c.y<=0?l=s-t.rect.height:o.clientY+t.rect.height-c.y>=s&&(l=0),t.shadow.style.left="auto",t.shadow.style.top="auto",t.shadow.style.right=a+"px",t.shadow.style.bottom=l+"px",t.position={x:a,y:l},clearTimeout(r),r=setTimeout(function(){n.call(t)},500)}function n(){var t=this,o=t.iframe,i=t.shadow;e.off(document,"mousemove",t.moveEv),o.style.left="auto",o.style.top="auto",o.style.right=t.position.x+"px",o.style.bottom=t.position.y+"px",o.style.display="block",i.style.left="auto",i.style.top="auto",i.style.right=t.position.x+"px",i.style.bottom=t.position.y+"px",i.style.display="none"}function s(){var t=this;e.on(window,"resize",function(){if(t.rect&&t.rect.width){var e=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=Number(t.iframe.style.right.slice(0,-2)),n=Number(t.iframe.style.bottom.slice(0,-2));e<t.rect.width?(t.iframe.style.left="auto",t.iframe.style.right=0,t.shadow.style.left="auto",t.shadow.style.right=0):e-i<t.rect.width?(t.iframe.style.right=e-t.rect.width+"px",t.iframe.style.left=0,t.shadow.style.right=e-t.rect.width+"px",t.shadow.style.left=0):(t.iframe.style.left="auto",t.shadow.style.left="auto"),o<t.rect.height?(t.iframe.style.top="auto",t.iframe.style.bottom=0):o-n<t.rect.height?(t.iframe.style.bottom=o-t.rect.height+"px",t.iframe.style.top=0):t.iframe.style.top="auto"}})}function a(){var a=this;a.config.dragenable&&!e.isMobile&&(s.call(a),e.on(a.shadow,"mouseup",function(){n.call(a)})),a.message=new easemobim.Transfer(a.iframe.id,"easemob",!0),a.iframe.style.display="block",a.onsessionclosedSt=0,a.onreadySt=0,a.config.parentId=a.iframe.id,a.callbackApi={onready:a.config.onready||l,onmessage:a.config.onmessage||l,onsessionclosed:a.config.onsessionclosed||l},delete a.config.onready,delete a.config.onmessage,delete a.config.onsessionclosed,a.message.send({event:t.EVENTS.INIT_CONFIG,data:a.config}).listen(function(s){if(s.to===a.iframe.id)switch(s.event){case t.EVENTS.ONREADY:clearTimeout(a.onreadySt),o.hide(),a.onreadySt=setTimeout(function(){a.callbackApi.onready()},500);break;case t.EVENTS.SHOW:a.open();break;case t.EVENTS.CLOSE:a.close();break;case t.EVENTS.NOTIFY:easemobim.notify(s.data.avatar,s.data.title,s.data.brief);break;case t.EVENTS.SLIDE:easemobim.titleSlide.start();break;case t.EVENTS.RECOVERY:easemobim.titleSlide.stop();break;case t.EVENTS.ONMESSAGE:a.callbackApi.onmessage(s.data);break;case t.EVENTS.ONSESSIONCLOSED:clearTimeout(a.onsessionclosedSt),a.onsessionclosedSt=setTimeout(function(){a.callbackApi.onsessionclosed()},500);break;case t.EVENTS.CACHEUSER:s.data.username&&e.set((a.config.to||"")+a.config.tenantId+(a.config.emgroup||""),s.data.username);break;case t.EVENTS.DRAGREADY:c.x=isNaN(Number(s.data.x))?0:Number(s.data.x),c.y=isNaN(Number(s.data.y))?0:Number(s.data.y),a.shadow.style.display="block",a.iframe.style.display="none",a.moveEv||(a.moveEv=function(e){i.call(a,e)}),e.on(document,"mousemove",a.moveEv);break;case t.EVENTS.DRAGEND:n.call(a);break;case t.EVENTS.SET_ITEM:e.setStore(s.data.key,s.data.value);break;case t.EVENTS.REQUIRE_URL:a.message.send({event:t.EVENTS.UPDATE_URL,data:location.href});break;case t.EVENTS.SHOW_IMG:easemobim.pcImgView(s.data)}},["main"]),a.ready instanceof Function&&a.ready()}var r=0,c={x:0,y:0},l=function(){},d=function(t,o){var i=this;return this instanceof d?o&&d.iframe?(d.iframe.config=e.copy(t),d.iframe):(this.iframe=document.createElement("iframe"),this.iframe.id="easemob-iframe-"+(new Date).getTime(),this.iframe.className="easemobim-panel",this.iframe.style.cssText="width: 0;height: 0;border: none; position: fixed;",this.shadow=document.createElement("div"),this.config=e.copy(t),this.show=!1,document.body.appendChild(this.iframe),document.body.appendChild(this.shadow),i.iframe.readyState?i.iframe.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&a.call(i)}:i.iframe.onload=function(){a.call(i)},d.iframe=this,this):new d(t,o)};d.prototype.set=function(t,o){return this.config=e.copy(t||this.config),this.config.user.username||(this.config.isUsernameFromCookie=!0,this.config.user.username=e.get((this.config.to||"")+this.config.tenantId+(this.config.emgroup||""))),this.config.guestId=e.getStore("guestId"),this.position={x:this.config.dialogPosition.x.slice(0,-2),y:this.config.dialogPosition.y.slice(0,-2)},this.rect={width:+this.config.dialogWidth.slice(0,-2),height:+this.config.dialogHeight.slice(0,-2)},this.iframe.frameBorder=0,this.iframe.allowTransparency="true",this.iframe.style.cssText=["z-index:16777269","overflow:hidden","position:fixed","bottom:10px","right:-5px","border:none","width:"+this.config.dialogWidth,"height:0","display:none","transition:all .01s"].join(";"),this.shadow.style.cssText=["display:none","cursor:move","z-index:16777270","position:fixed","bottom:"+this.config.dialogPosition.y,"right:"+this.config.dialogPosition.x,"border:none","width:"+this.config.dialogWidth,"height:"+this.config.dialogHeight,"border-radius:4px","box-shadow: 0 4px 8px rgba(0,0,0,.2)","border-radius: 4px","background-size: 100% 100%","background: url("+location.protocol+this.config.staticPath+"/img/drag.png) no-repeat"].join(";"),this.config.hide||e.isMobile?(this.iframe.style.height="0",this.iframe.style.width="0"):(this.iframe.style.height="37px",this.iframe.style.width="104px"),this.iframe.src=location.protocol+t.path+"/im.html",this.ready=o,this},d.prototype.open=function(){var o=this.iframe;if(!this.show)return this.show=!0,e.isMobile&&(e.addClass(document.body,"easemobim-mobile-body"),e.addClass(document.documentElement,"easemobim-mobile-html")),e.isMobile?(o.style.width="100%",o.style.height="100%",o.style.left="0",o.style.top="0",o.style.right="auto",o.style.bottom="auto",o.style.borderRadius="0",o.style.cssText+="box-shadow: none;"):(o.style.width=this.config.dialogWidth,o.style.height=this.config.dialogHeight,o.style.right=this.position.x+"px",o.style.bottom=this.position.y+"px",o.style.cssText+="box-shadow: 0 4px 8px rgba(0,0,0,.2);border-radius: 4px;border: 1px solid #ccc\\9;"),o.style.visibility="visible",this.message&&this.message.send({event:t.EVENTS.SHOW}),this},d.prototype.close=function(){var o=this.iframe;if(this.show!==!1)return this.show=!1,e.isMobile&&(e.removeClass(document.body,"easemobim-mobile-body"),e.removeClass(document.documentElement,"easemobim-mobile-html")),clearTimeout(r),this.config.hide||e.isMobile?(o.style.visibility="hidden",o.style.width="1px",o.style.height="1px"):(o.style.boxShadow="none",o.style.borderRadius="4px;",o.style.left="auto",o.style.top="auto",o.style.right="-5px",o.style.bottom="10px",o.style.border="none",o.style.height="37px",o.style.width="104px"),this.message&&this.message.send({event:t.EVENTS.CLOSE}),this},d.prototype.send=function(e){this.message.send({event:t.EVENTS.EXT,data:e})},d.prototype.sendText=function(e){this.message.send({event:t.EVENTS.TEXTMSG,data:e})},easemobim.Iframe=d}(easemobim.utils,easemobim._const,easemobim.loading),function(e,t){"use strict";function o(){c=i.copy(r),i.extend(c,easemobim.config),d=i.copy(c);var e=""!==i.convertFalse(d.hide)?d.hide:l.json.hide,t=""!==i.convertFalse(d.resources)?d.resources:l.json.resources,o=""!==i.convertFalse(d.satisfaction)?d.satisfaction:l.json.sat;d.tenantId=d.tenantId||l.json.tenantId,d.hide=i.convertFalse(e),d.resources=i.convertFalse(t),d.satisfaction=i.convertFalse(o),d.domain=d.domain||l.domain,d.path=d.path||l.domain+"/webim",d.staticPath=d.staticPath||l.domain+"/webim/static"}var i=easemobim.utils,n=easemobim.loading,s=".easemobim-mobile-html{position:static!important;width:100%!important;height:100%!important;padding:0!important;margin:0!important}.easemobim-mobile-body{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:100%!important;height:100%!important;overflow:hidden!important;padding:0!important;margin:0!important}.easemobim-mobile-body>*{display:none!important}.easemobim-mobile-body>.easemobim-panel{display:block!important}.easemobim-prompr-wrapper{display:none;z-index:16777271;position:fixed;width:220px;height:30px;padding:10px 0;top:0;bottom:0;margin:auto;left:0;right:0;color:#fff;background-color:#000;text-align:center;border-radius:4px;-webkit-transition:all .5s;transition:all .5s;opacity:.7}.easemobim-prompr-wrapper>.loading{position:relative;width:30px;height:30px;display:inline-block;overflow:hidden;margin:0;padding:0;-webkit-animation:easemobim-loading-frame 1s linear infinite;animation:easemobim-loading-frame 1s linear infinite}.easemobim-prompr-wrapper>span{line-height:30px;vertical-align:top;font-size:15px}@-webkit-keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}";i.addCssRules(s),easemobim.config=easemobim.config||{},easemobim.version="47.10.002",easemobim.tenants={};var a,r={tenantId:"",to:"",agentName:"",appKey:"",domain:"",path:"",ticket:!0,staticPath:"",buttonText:"联系客服",dialogWidth:"360px",dialogHeight:"550px",dragenable:!0,minimum:!0,soundReminder:!0,dialogPosition:{x:"10px",y:"10px"},user:{username:"",password:"",token:""}},c=i.copy(r),l=i.getConfig(),d={};if(o(),easemobim.config.grUserId=i.get("gr_user_id"),e.easemobIM=function(e){easemobim.bind({emgroup:e})},e.easemobIMS=function(e,t){easemobim.bind({tenantId:e,emgroup:t})},easemobim.bind=function(e){e=e||{},e.emgroup=e.emgroup||easemobim.config.emgroup||"";var t=e.tenantId+e.emgroup;for(var s in easemobim.tenants)easemobim.tenants.hasOwnProperty(s)&&easemobim.tenants[s].close();if(a=easemobim.tenants[t])a.open();else{if(n.show(),o(),i.extend(d,e),!d.tenantId)return void console.warn("未指定tenantId!");a=easemobim.Iframe(d),easemobim.tenants[t]=a,a.set(d,a.open)}},easemobim.sendExt=function(e){a.send({ext:e})},easemobim.sendText=function(e){a&&a.sendText(e)},(!d.hide||d.autoConnect||d.eventCollector)&&d.tenantId&&!i.isMobile){var m=c.tenantId+(c.emgroup||"");a=easemobim.tenants[m]||easemobim.Iframe(d),easemobim.tenants[m]=a,a.set(d,a.close),easemobim.config.eventCollector=!1}"object"==typeof module&&"object"==typeof module.exports?module.exports=easemobim:"function"==typeof define&&define.amd&&define("easemob-kefu-webim-plugin",[],function(){return easemobim})}(window,void 0);