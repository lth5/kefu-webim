!function(){var e=function(){},t=function(){try{return new window.XMLHttpRequest}catch(e){return!1}},a=function(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){return!1}},s=function(s){var n,r=s.dataType||"text",i=s.success||e,o=s.error||e,u=t()||a(),m=s.type||"GET",c=s.data||{},l="",p=s.headers||{},g=s.isFileUpload;if(u.onreadystatechange=function(){var e;if(4===u.readyState){var t=u.status||0;if(200===t){if("text"===r)return void i(u.responseText,u);if("json"===r){try{e=JSON.parse(u.responseText),i(e,u)}catch(a){}return}return void i(u.response||u.responseText,u)}if("json"==r){try{e=JSON.parse(u.responseText),o(e,u,"服务器返回错误信息")}catch(a){o(u.responseText,u,"服务器返回错误信息")}return}return void o(u.responseText,u,"服务器返回错误信息")}0===u.readyState&&o(u.responseText,u,"服务器异常")},"get"===m.toLowerCase()){for(var d in c)c.hasOwnProperty(d)&&(l+=d+"="+c[d]+"&");l=l?l.slice(0,-1):l,s.url+=(s.url.indexOf("?")>0?"&":"?")+(l?l+"&":l)+"_v="+(new Date).getTime(),c=null}else{if(g){var b=new FormData;return b.append("file",c.file),u.open("POST",s.url),u.setRequestHeader("Authorization",c.auth),u.send(b),u}c=JSON.stringify(c)}if(u.open(m,s.url),u.setRequestHeader){p["Content-Type"]=p["Content-Type"]||"application/json";for(n in p)p.hasOwnProperty(n)&&u.setRequestHeader(n,p[n])}return u.send(c),u};window.easemobim=window.easemobim||{},window.easemobim.emajax=s}(),window.easemobim=window.easemobim||{},window.easemobIM=window.easemobIM||{},easemobIM.Transfer=easemobim.Transfer=function(){"use strict";var e=function(){var e=!0;try{window.postMessage({toString:function(){e=!1}},"*")}catch(t){}return e}(),t=function(e,t,a){var s,n,r,i=!1,o=e.data;if("object"==typeof o)s=o;else if("string"==typeof o){try{s=JSON.parse(o)}catch(u){}if("object"!=typeof s)return}if(a&&a.length)for(n=0,r=a.length;r>n;n++)s.key===a[n]&&(i=!0,"function"==typeof t&&t(s));else"function"==typeof t&&t(s);if(!i&&a)for(n=0,r=a.length;r>n;n++)if("data"===a[n]){"function"==typeof t&&t(s);break}},a=function(e,t,s){return this instanceof a?(this.key=t,this.iframe=document.getElementById(e),this.origin=location.protocol+"//"+location.host,void(this.useObject=s)):new a(e)};return a.prototype.send=function(t,a){return t.origin=this.origin,t.key=this.key,this.to?t.to=this.to:a&&(t.to=a),e&&(this.useObject||t.useObject)||(t=JSON.stringify(t)),this.iframe?this.iframe.contentWindow.postMessage(t,"*"):window.parent.postMessage(t,"*"),this},a.prototype.listen=function(e,a){var s=this;return window.addEventListener?window.addEventListener("message",function(n){t.call(s,n,e,a)},!1):window.attachEvent&&window.attachEvent("onmessage",function(n){t.call(s,n,e,a)}),this},a}(),function(e,t){function a(e){var t=null,a=e.msg,n=a.data,r=a.useObject,i=a.api,o=a.timespan;n&&n.headers&&(t=n.headers,delete n.headers),easemobim.emajax({url:e.url,headers:t,data:e.excludeData?null:n,type:e.type,isFileUpload:e.isFileUpload,success:function(e){try{e=JSON.parse(e)}catch(t){}s.send({call:i,timespan:o,status:0,data:e,useObject:r})},error:function(e){try{e=JSON.parse(e)}catch(t){}s.send({call:i,timespan:o,status:1,data:e,useObject:r})}})}var s=new easemobim.Transfer(null,"api");s.listen(function(e){var t,n=e.api,r=e.data||{},i=r.tenantId,o=r.orgName+"%23"+r.appName+"%23"+r.imServiceNumber;switch(s.targetOrigin=e.origin,n){case"getRelevanceList":a({url:"/v1/webimplugin/targetChannels",type:"GET",msg:e});break;case"getDutyStatus":a({url:"/v1/webimplugin/showMessage",type:"GET",msg:e});break;case"getWechatVisitor":a({url:"/v1/webimplugin/visitors/wechat/"+r.openid+"?tenantId="+i,msg:e,type:"POST"});break;case"createVisitor":a({url:"/v1/webimplugin/visitors?tenantId="+i,msg:e,type:"POST"});break;case"getSession":a({url:"/v1/webimplugin/visitors/"+r.id+"/schedule-data?techChannelInfo="+o+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"getExSession":a({url:"/v1/webimplugin/visitors/"+r.id+"/schedule-data-ex?techChannelInfo="+o+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"getPassword":a({url:"/v1/webimplugin/visitors/password",type:"GET",msg:e});break;case"getGroup":a({url:"/v1/webimplugin/visitors/"+r.id+"/ChatGroupId?techChannelInfo="+o+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"getGroupNew":a({url:"/v1/webimplugin/tenant/"+i+"/visitors/"+r.id+"/ChatGroupId?techChannelInfo="+o+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"getHistory":a({url:"/v1/webimplugin/visitors/msgHistory",type:"GET",msg:e});break;case"getSlogan":a({url:"/v1/webimplugin/notice/options",type:"GET",msg:e});break;case"getTheme":a({url:"/v1/webimplugin/theme/options",type:"GET",msg:e});break;case"getSystemGreeting":a({url:"/v1/webimplugin/welcome",type:"GET",msg:e});break;case"getRobertGreeting":a({url:"/v1/Tenants/"+i+"/robots/visitor/greetings/"+r.originType+"?tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"sendVisitorInfo":a({url:"/v1/webimplugin/tenants/"+i+"/visitors/"+r.visitorId+"/attributes?tenantId="+i,msg:e,type:"POST"});break;case"getProject":a({url:"/tenants/"+i+"/projects",type:"GET",msg:e});break;case"createTicket":a({url:"/tenants/"+i+"/projects/"+r.projectId+"/tickets?tenantId="+i+"&easemob-target-username="+r["easemob-target-username"]+"&easemob-appkey="+r["easemob-appkey"]+"&easemob-username="+r["easemob-username"],msg:e,type:"POST"});break;case"receiveMsgChannel":a({url:"/v1/imgateway/messages",type:"GET",msg:e});break;case"sendMsgChannel":a({url:"/v1/imgateway/messages?tenantId="+i,msg:e,type:"POST"});break;case"getAgentStatus":if(!r.token)return void console.error("token does not exist.");a({url:"/v1/tenants/"+i+"/agents/"+r.agentUserId+"/agentstate",type:"GET",msg:e});break;case"getNickNameOption":a({url:"/v1/webimplugin/agentnicename/options?tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"reportEvent":a({url:"/v1/event_collector/events",msg:e,type:"POST"});break;case"deleteEvent":a({url:"/v1/event_collector/event/"+encodeURIComponent(r.userId),msg:e,type:"DELETE",excludeData:!0});break;case"mediaStreamUpdateStatus":t="/v1/rtcmedia/media_streams/"+r.streamId,delete r.streamId,a({url:t,msg:e,type:"PUT"});break;case"graylist":a({url:"/management/graylist",msg:e,type:"GET",excludeData:!0});break;case"getCurrentServiceSession":a({url:"/v1/webimplugin/tenant/"+i+"/visitors/"+r.id+"/CurrentServiceSession?techChannelInfo="+o+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"messagePredict":t="/v1/webimplugin/agents/"+r.agentId+"/messagePredict?tenantId="+r.tenantId,delete r.tenantId,delete r.agentId,a({url:t,msg:e,type:"POST"});break;case"getSessionQueueId":a({url:"/v1/visitors/"+r.visitorUsername+"/waitings/sessions",msg:e,type:"GET"});break;case"getWaitListNumber":a({url:"/v1/visitors/waitings/data",msg:e,type:"GET"});break;case"getDutyStatus_2":a({url:"/v1/webimplugin/tenants/show-message",type:"GET",msg:e});break;case"getRobertGreeting_2":a({url:"/v1/webimplugin/tenants/robots/welcome",type:"GET",msg:e});break;case"getAgentInputState":a({url:"/v1/webimplugin/sessions/"+r.serviceSessionId+"/agent-input-state?tenantId="+i+"&orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.username+"&token="+r.token,msg:e,type:"GET",excludeData:!0});break;case"closeServiceSession":t="/webimplugin/tenants/"+i+"/visitors/"+r.userName+"/servicesessions/"+r.serviceSessionId+"/stop?tenantId="+i,delete r.serviceSessionId,a({url:t,msg:e,type:"POST"});break;case"uploadImgMsgChannel":a({url:"/v1/Tenant/"+i+"/"+r.orgName+"/"+r.appName+"/"+r.userName+"/MediaFiles",msg:e,isFileUpload:!0,type:"POST"});break;case"getVisitorInfo":a({url:"/v1/webimplugin/tenants/"+i+"/visitors?orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token+"&techChannelInfo="+o,msg:e,type:"GET",excludeData:!0});break;case"getOfficalAccounts":a({url:"/v1/webimplugin/tenants/"+i+"/visitors/"+r.visitorId+"/official-accounts?page=0&size=100&orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token,msg:e,type:"GET",excludeData:!0});break;case"getOfficalAccountMessage":a({url:"/v1/webimplugin/tenants/"+i+"/visitors/"+r.visitorId+"/official-accounts/"+r.officialAccountId+"/messages?size="+r.size+(r.startId?"&startId="+r.startId:"")+"&direction="+r.direction+"&orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token,msg:e,type:"GET",excludeData:!0});break;case"getConfig":a({url:"/v1/webimplugin/settings/visitors/configs/"+r.configId,msg:e,type:"GET",excludeData:!0});break;case"getRobertIsOpen":a({url:"/v1/webimplugin/tenants/robot-ready",type:"GET",msg:e});break;case"getExSession_2":a({url:"/v1/webimplugin/visitors/"+r.username+"/schedule-data-ex2?techChannelInfo="+o+"&channelType="+r.channelType+"&originType="+r.originType+"&channelId="+r.channelId+"&queueName="+r.queueName+"&agentUsername="+r.agentUsername+"&tenantId="+i,msg:e,type:"GET",excludeData:!0});break;case"getLastSession":a({url:"/v1/webimplugin/tenants/"+i+"/visitors/"+r.visitorId+"/official-accounts/"+r.officialAccountId+"/latest-session?orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token+"&techChannelInfo="+o,msg:e,type:"GET",excludeData:!0});break;case"reportVisitorAttributes":t="/v1/webimplugin/tenants/"+i+"/sessions/"+r.sessionId+"/attributes?orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token+"&techChannelInfo="+o,delete r.tenantId,delete r.sessionId,delete r.orgName,delete r.appName,delete r.userName,delete r.token,delete r.imServiceNumber,a({url:t,msg:e,type:"POST"});break;case"messagePredict_2":t="/v1/webimplugin/servicesessions/"+r.sessionId+"/messagePredict?orgName="+r.orgName+"&appName="+r.appName+"&userName="+r.userName+"&token="+r.token+"&techChannelInfo="+o,delete r.sessionId,delete r.orgName,delete r.appName,delete r.userName,delete r.token,delete r.imServiceNumber,a({url:t,msg:e,type:"POST"});break;default:console.error("unexpect api name: "+n)}},["data"])}(easemobim.emajax,easemobim.Transfer);