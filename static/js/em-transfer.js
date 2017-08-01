window.easemobim=window.easemobim||{},window.easemobim.emajax=function(){var e=function(){},a=function(){try{return new window.XMLHttpRequest}catch(e){return!1}},t=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return!1}};return function(n){function s(){var e,a=u.status||0;if(4===u.readyState){if(200===a){if("text"===r)return void m(u.responseText,u);if("json"===r){try{e=JSON.parse(u.responseText),m(e,u)}catch(t){}return}return void m(u.response||u.responseText,u)}if("json"==r){try{e=JSON.parse(u.responseText),o(e,u,"服务器返回错误信息")}catch(t){o(u.responseText,u,"服务器返回错误信息")}return}return void o(u.responseText,u,"服务器返回错误信息")}0===u.readyState&&o(u.responseText,u,"服务器异常")}var i,r=n.dataType||"text",m=n.success||e,o=n.error||e,d=n.useXDomainRequestInIE,u=a()||t(),c=n.type||"GET",g=n.data||{},l="",p=n.headers||{},b=n.isFileUpload;if(d&&window.XDomainRequest)return u=new XDomainRequest,u.onload=function(){var e={};try{e=JSON.parse(u.responseText)}catch(a){}m(e,u)},u.ontimeout=function(){o(u.responseText,u,"XDomainRequest timeout.")},u.onerror=function(){o(u.responseText,u,"XDomainRequest error.")},u.open("POST",n.url),u.send(JSON.stringify(g)),u;if(u.onreadystatechange=s,"get"===c.toLowerCase()){for(var v in g)g.hasOwnProperty(v)&&(l+=v+"="+g[v]+"&");l=l?l.slice(0,-1):l,n.url+=(n.url.indexOf("?")>0?"&":"?")+(l?l+"&":l)+"_v="+(new Date).getTime()}else{if(b){var w=new FormData;return w.append("file",g.file),u.open("POST",n.url),u.setRequestHeader("Authorization",g.auth),u.send(w),u}g=JSON.stringify(g)}if(u.open(c,n.url),u.setRequestHeader){p["Content-Type"]=p["Content-Type"]||"application/json";for(i in p)p.hasOwnProperty(i)&&u.setRequestHeader(i,p[i])}return u.send(g),u}}(),window.easemobim=window.easemobim||{},window.easemobIM=window.easemobIM||{},easemobIM.Transfer=easemobim.Transfer=function(){"use strict";var e=function(e,a,t){if("string"==typeof e.data){var n,s,i=JSON.parse(e.data),r=!1;if(t&&t.length)for(n=0,s=t.length;s>n;n++)i.key===t[n]&&(r=!0,"function"==typeof a&&a(i));else"function"==typeof a&&a(i);if(!r&&t)for(n=0,s=t.length;s>n;n++)if("data"===t[n]){"function"==typeof a&&a(i);break}}},a=function(e,t){return this instanceof a?(this.key=t,this.iframe=document.getElementById(e),void(this.origin=location.protocol+"//"+location.host)):new a(e)};return a.prototype.send=function(e,a){return e.origin=this.origin,e.key=this.key,a&&(e.to=a),e=JSON.stringify(e),this.iframe?this.iframe.contentWindow.postMessage(e,"*"):window.parent.postMessage(e,"*"),this},a.prototype.listen=function(a,t){var n=this;return window.addEventListener?window.addEventListener("message",function(s){e.call(n,s,a,t)},!1):window.attachEvent&&window.attachEvent("onmessage",function(s){e.call(n,s,a,t)}),this},a}(),function(){var e=new easemobim.Transfer(null,"api"),a=function(a){var t=null;return a.msg.data&&a.msg.data.headers&&(t=a.msg.data.headers,delete a.msg.data.headers),{url:a.url,headers:t,data:a.excludeData?null:a.msg.data,type:a.type||"GET",success:function(t){try{t=JSON.parse(t)}catch(n){}e.send({call:a.msg.api,timespan:a.msg.timespan,status:0,data:t})},error:function(t){try{t=JSON.parse(t)}catch(n){}e.send({call:a.msg.api,timespan:a.msg.timespan,status:1,data:t})}}};e.listen(function(t){switch(e.targetOrigin=t.origin,t.api){case"getRelevanceList":easemobim.emajax(a({url:"/v1/webimplugin/targetChannels",msg:t}));break;case"getDutyStatus":easemobim.emajax(a({url:"/v1/webimplugin/showMessage",msg:t}));break;case"getWechatVisitor":easemobim.emajax(a({url:"/v1/webimplugin/visitors/wechat/"+t.data.openid+"?tenantId="+t.data.tenantId,msg:t,type:"POST"}));break;case"createVisitor":easemobim.emajax(a({url:"/v1/webimplugin/visitors?tenantId="+t.data.tenantId,msg:t,type:"POST"}));break;case"getSession":easemobim.emajax(a({url:"/v1/webimplugin/visitors/"+t.data.id+"/schedule-data?techChannelInfo="+t.data.orgName+"%23"+t.data.appName+"%23"+t.data.imServiceNumber+"&tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"getExSession":easemobim.emajax(a({url:"/v1/webimplugin/visitors/"+t.data.id+"/schedule-data-ex?techChannelInfo="+t.data.orgName+"%23"+t.data.appName+"%23"+t.data.imServiceNumber+"&tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"getPassword":easemobim.emajax(a({url:"/v1/webimplugin/visitors/password",msg:t}));break;case"getGroup":easemobim.emajax(a({url:"/v1/webimplugin/visitors/"+t.data.id+"/ChatGroupId?techChannelInfo="+t.data.orgName+"%23"+t.data.appName+"%23"+t.data.imServiceNumber+"&tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"getGroupNew":easemobim.emajax(a({url:"/v1/webimplugin/tenant/"+t.data.tenantId+"/visitors/"+t.data.id+"/ChatGroupId?techChannelInfo="+t.data.orgName+"%23"+t.data.appName+"%23"+t.data.imServiceNumber+"&tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"getHistory":easemobim.emajax(a({url:"/v1/webimplugin/visitors/msgHistory",msg:t}));break;case"getSlogan":easemobim.emajax(a({url:"/v1/webimplugin/notice/options",msg:t}));break;case"getTheme":easemobim.emajax(a({url:"/v1/webimplugin/theme/options",msg:t}));break;case"getSystemGreeting":easemobim.emajax(a({url:"/v1/webimplugin/welcome",msg:t}));break;case"getRobertGreeting":easemobim.emajax(a({url:"/v1/Tenants/"+t.data.tenantId+"/robots/visitor/greetings/"+t.data.originType+"?tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"sendVisitorInfo":easemobim.emajax(a({url:"/v1/webimplugin/tenants/"+t.data.tenantId+"/visitors/"+t.data.visitorId+"/attributes?tenantId="+t.data.tenantId,msg:t,type:"POST"}));break;case"getProject":easemobim.emajax(a({url:"/tenants/"+t.data.tenantId+"/projects",msg:t}));break;case"createTicket":easemobim.emajax(a({url:"/tenants/"+t.data.tenantId+"/projects/"+t.data.projectId+"/tickets?tenantId="+t.data.tenantId+"&easemob-target-username="+t.data["easemob-target-username"]+"&easemob-appkey="+t.data["easemob-appkey"]+"&easemob-username="+t.data["easemob-username"],msg:t,type:"POST"}));break;case"receiveMsgChannel":easemobim.emajax(a({url:"/v1/imgateway/messages",msg:t}));break;case"sendMsgChannel":easemobim.emajax(a({url:"/v1/imgateway/messages?tenantId="+t.data.tenantId,msg:t,type:"POST"}));break;case"getAgentStatus":easemobim.emajax(a({url:"/v1/tenants/"+t.data.tenantId+"/agents/"+t.data.agentUserId+"/agentstate",msg:t}));break;case"getNickNameOption":easemobim.emajax(a({url:"/v1/webimplugin/agentnicename/options?tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"reportEvent":easemobim.emajax(a({url:"/v1/event_collector/events",msg:t,type:"POST"}));break;case"deleteEvent":easemobim.emajax(a({url:"/v1/event_collector/event/"+encodeURIComponent(t.data.userId),msg:t,type:"DELETE",excludeData:!0}));break;case"mediaStreamUpdateStatus":var n=t.data.streamId;delete t.data.streamId,easemobim.emajax(a({url:"/v1/rtcmedia/media_streams/"+n,msg:t,type:"PUT"}));break;case"graylist":easemobim.emajax(a({url:"/management/graylist",msg:t,excludeData:!0}));break;case"getCurrentServiceSession":easemobim.emajax(a({url:"/v1/webimplugin/tenant/"+t.data.tenantId+"/visitors/"+t.data.id+"/CurrentServiceSession?techChannelInfo="+t.data.orgName+"%23"+t.data.appName+"%23"+t.data.imServiceNumber+"&tenantId="+t.data.tenantId,msg:t,excludeData:!0}));break;case"messagePredict":var s=t.data.tenantId,i=t.data.agentId;delete t.data.tenantId,delete t.data.agentId,easemobim.emajax(a({url:"/v1/webimplugin/agents/"+i+"/messagePredict?tenantId="+s,msg:t,type:"POST"}));break;case"getSessionQueueId":var r=t.data.visitorUsername;easemobim.emajax(a({url:"/v1/visitors/"+r+"/waitings/sessions",msg:t,type:"GET"}));break;case"getWaitListNumber":easemobim.emajax(a({url:"/v1/visitors/waitings/data",msg:t,type:"GET"}));break;case"getAgentInputState":easemobim.emajax(a({url:"/v1/webimplugin/sessions/"+t.data.serviceSessionId+"/agent-input-state?tenantId="+t.data.tenantId+"&orgName="+t.data.orgName+"&appName="+t.data.appName+"&userName="+t.data.username+"&token="+t.data.token,msg:t,excludeData:!0}))}},["data"])}();