(self.webpackChunkipfs_webui=self.webpackChunkipfs_webui||[]).push([[994],{63994:function(e,t){var n,i;i="undefined"!==typeof window?window:this,n=function(){return function(e){"use strict";var t,n,i,o="19.08",r="javascript_native_web",a=!1,s=!1,c="/i",d="/o/sdk",l=500,u=1e3,f=[],m=[],p={},_=[],g={},y=[],h=null,v=!0,w=0,k=null,b=0,x=0,C=0,L=60,S=20,E=0,O=60,N=10,T=100,A=!0,M=30,B=0,I=!0,q=!1,H=!1,P={},z={},J=/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,D=/(CountlySiteBot|nuhk|Googlebot|GoogleSecurityScanner|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver|bingbot|Google Web Preview|Mediapartners-Google|AdsBot-Google|Baiduspider|Ezooms|YahooSeeker|AltaVista|AVSearch|Mercator|Scooter|InfoSeek|Ultraseek|Lycos|Wget|YandexBot|Yandex|YaDirectFetcher|SiteBot|Exabot|AhrefsBot|MJ12bot|TurnitinBot|magpie-crawler|Nutch Crawler|CMS Crawler|rogerbot|Domnutch|ssearch_bot|XoviBot|netseer|digincore|fr-crawler|wesee|AliasIO|contxbot|PingdomBot|BingPreview|HeadlessChrome)/,j=!0;(e=e||{}).features=["sessions","events","views","scrolls","clicks","forms","crashes","attribution","users","star-rating","location"];for(var R,V={},Y=0;Y<e.features.length;Y++)V[e.features[Y]]={};e.init=function(t){if(!a){if(t=t||{},e.namespace=fe("namespace",t,""),i=le(),a=!0,f=Oe("cly_queue")||[],g={},m=Oe("cly_event")||[],p=Oe("cly_remote_configs")||{},l=fe("interval",t,l),u=fe("queue_size",t,u),H=fe("offline_mode",t,H),L=fe("fail_timeout",t,L),S=fe("inactivity_time",t,S),O=fe("session_update",t,O),N=fe("max_events",t,N),T=fe("max_logs",t,T),A=fe("use_session_cookie",t,A),M=fe("session_cookie_timeout",t,M),e.ignore_prefetch=fe("ignore_prefetch",t,!0),e.debug=fe("debug",t,!1),e.app_key=fe("app_key",t,null),e.test_mode=fe("test_mode",t,!1),H?e.device_id||(e.device_id="[CLY]_temp_id"):e.device_id=fe("device_id",t,re()),e.url=ge(fe("url",t,"")),e.app_version=fe("app_version",t,"0.0"),e.country_code=fe("country_code",t,null),e.city=fe("city",t,null),e.ip_address=fe("ip_address",t,null),e.ignore_bots=fe("ignore_bots",t,!0),e.force_post=fe("force_post",t,!1),e.remote_config=fe("remote_config",t,!1),e.q=e.q||[],e.onload=e.onload||[],e.ignore_visitor=fe("ignore_visitor",t,!1),e.require_consent=fe("require_consent",t,!1),t.ignore_referrers&&Array.isArray(t.ignore_referrers)?y=t.ignore_referrers:e.ignore_referrers&&Array.isArray(e.ignore_referrers)&&(y=e.ignore_referrers),""===e.url&&(de("Please provide server URL"),e.ignore_visitor=!0),Oe("cly_ignore")&&(e.ignore_visitor=!0),$(),window.name&&0===window.name.indexOf("cly:"))try{e.passed_data=JSON.parse(window.name.replace("cly:",""))}catch(_){de("Could not parse name",window.name)}else if(location.hash&&0===location.hash.indexOf("#cly:"))try{e.passed_data=JSON.parse(location.hash.replace("#cly:",""))}catch(_){de("Could not parse hash",location.hash)}if(e.passed_data&&e.passed_data.token&&e.passed_data.purpose&&(e.passed_data.token!==Oe("cly_old_token")&&(Le(e.passed_data.token),Oe("cly_old_token",e.passed_data.token)),"heatmap"===e.passed_data.purpose&&(e.ignore_visitor=!0,Me(),Te(e.url+"/views/heatmap.js",Be))),!e.ignore_visitor){de("Countly initialized"),e.onload.constructor!==Array&&(e.onload=[]),e.q.constructor!==Array&&(e.q=[]);var n=0;if(e.utm=e.utm||{source:!0,medium:!0,campaign:!0,term:!0,content:!0},location.search){var o=location.search.substring(1).split("&"),r={},s=!1;for(n=0;n<o.length;n++){var c=o[n].split("=");"cly_id"===c[0]?Oe("cly_cmp_id",c[1]):"cly_uid"===c[0]?Oe("cly_cmp_uid",c[1]):"cly_device_id"===c[0]?e.device_id=c[1]:0===(c[0]+"").indexOf("utm_")&&e.utm[c[0].replace("utm_","")]&&(r[c[0].replace("utm_","")]=c[1],s=!0)}if(s){for(var d in e.utm)r[d]?e.userData.set("utm_"+d,r[d]):e.userData.unset("utm_"+d);e.userData.save()}}H||e.device_id!==Oe("cly_id")&&Oe("cly_id",e.device_id),oe(),Q(),e.remote_config&&e.fetch_remote_config(e.remote_config)}}},e.group_features=function(e){if(e)for(var t in e)V[t]?de("Feature name "+t+" is already reserved"):"string"===typeof e[t]?V[t]={features:[e[t]]}:e[t]&&Array.isArray(e[t])&&e[t].length?V[t]={features:e[t]}:de("Incorrect feature list for "+t+" value: "+e[t]);else de("Incorrect features: "+e)},e.check_consent=function(t){return!e.require_consent||(V[t]?!(!V[t]||!V[t].optin):(de("No feature available for "+t),!1))},e.check_any_consent=function(){if(!e.require_consent)return!0;for(var t in V)if(V[t]&&V[t].optin)return!0;return!1},e.add_consent=function(t){if(de("Adding consent for "+t),Array.isArray(t))for(var n=0;n<t.length;n++)e.add_consent(t[n]);else V[t]?V[t].features?(V[t].optin=!0,e.add_consent(V[t].features)):!0!==V[t].optin&&(P[t]=!0,V[t].optin=!0,F(),setTimeout((function(){"sessions"===t&&z.begin_session?(e.begin_session.apply(e,z.begin_session),z.begin_session=null):"views"===t&&z.track_pageview&&(k=null,e.track_pageview.apply(e,z.track_pageview),z.track_pageview=null),z.change_id&&(e.change_id.apply(e,z.change_id),z.change_id=null)}),1)):de("No feature available for "+t)},e.remove_consent=function(t){if(de("Removing consent for "+t),Array.isArray(t))for(var n=0;n<t.length;n++)e.remove_consent(t[n]);else V[t]?(V[t].features?e.remove_consent(V[t].features):!1!==V[t].optin&&(P[t]=!1,F()),V[t].optin=!1):de("No feature available for "+t)};var F=function(){R&&(clearTimeout(R),R=null),R=setTimeout((function(){Ee(P)&&(ie({consent:JSON.stringify(P)}),P={})}),1e3)};function U(t){if(!e.ignore_visitor)if(t.key){t.count||(t.count=1);var n=ye(t,["key","count","sum","dur","segmentation"]);n.timestamp=ue();var i=new Date;n.hour=i.getHours(),n.dow=i.getDay(),m.push(n),Oe("cly_event",m),de("Adding event: ",t)}else de("Event must have key property")}e.enable_offline_mode=function(){H=!0,e.device_id="[CLY]_temp_id"},e.disable_offline_mode=function(t){H=!1,t&&e.device_id!==t?(e.device_id=t,Oe("cly_id",e.device_id),de("Changing id")):(e.device_id=re(),e.device_id!==Oe("cly_id")&&Oe("cly_id",e.device_id));var n=!1;if(f.length>0)for(var i=0;i<f.length;i++)"[CLY]_temp_id"===f[i].device_id&&(f[i].device_id=e.device_id,n=!0);n&&Oe("cly_queue",f,!0)},e.begin_session=function(n,i){if(e.check_consent("sessions")){if(!s){t=le(),s=!0,v=!n;var o=Oe("cly_session");if(i||!A||!o||parseInt(o)<=le()){de("Session started");var r={begin_session:1};r.metrics=JSON.stringify(ce()),ie(r)}Oe("cly_session",le()+60*M)}}else z.begin_session=arguments},e.session_duration=function(t){e.check_consent("sessions")&&s&&(de("Session extended",t),ie({session_duration:t}),te())},e.end_session=function(n,i){e.check_consent("sessions")&&s&&(n=n||le()-t,Z(),!A||i?(de("Ending session"),ie({end_session:1,session_duration:n})):e.session_duration(n),s=!1)},e.change_id=function(t,n){if(e.device_id!==t){n||(m.length>0&&(ie({events:JSON.stringify(m)}),Oe("cly_event",m=[])),e.end_session(null,!0),g={});var i=e.device_id;e.device_id=t,Oe("cly_id",e.device_id),de("Changing id"),n?e.check_any_consent()?ie({old_device_id:i}):z.change_id=arguments:e.begin_session(!v,!0),e.remote_config&&(Oe("cly_remote_configs",p={}),e.fetch_remote_config(e.remote_config))}},e.add_event=function(t){e.check_consent("events")&&U(t)},e.start_event=function(e){g[e]?de("Timed event with key "+e+" already started"):g[e]=le()},e.end_event=function(t){"string"==typeof t&&(t={key:t}),t.key?g[t.key]?(t.dur=le()-g[t.key],e.add_event(t),delete g[t.key]):de("Timed event with key "+t.key+" was not started"):de("Event must have key property")},e.user_details=function(t){if(e.check_consent("users")){de("Adding userdetails: ",t);var n=["name","username","email","organization","phone","picture","gender","byear","custom"];ie({user_details:JSON.stringify(ye(t,n))})}},e.report_conversion=function(t,n){e.check_consent("attribution")&&(t=t||Oe("cly_cmp_id")||"cly_organic",n=n||Oe("cly_cmp_uid"),t&&n?ie({campaign_id:t,campaign_user:n}):t&&ie({campaign_id:t}))};var X={},G=function(t,n,i){e.check_consent("users")&&(X[t]||(X[t]={}),"$push"===i||"$pull"===i||"$addToSet"===i?(X[t][i]||(X[t][i]=[]),X[t][i].push(n)):X[t][i]=n)};function $(){e.ignore_prefetch&&"undefined"!==typeof document.visibilityState&&"prerender"===document.visibilityState&&(e.ignore_visitor=!0),e.ignore_bots&&D.test(navigator.userAgent)&&(e.ignore_visitor=!0)}function W(e){var t=[];if("undefined"!==typeof e.options)for(var n=0;n<e.options.length;n++)e.options[n].selected&&t.push(e.options[n].value);return t.join(", ")}function Q(){var t;if("undefined"!==typeof e.onload&&e.onload.length>0){for(t=0;t<e.onload.length;t++)"function"===typeof e.onload[t]&&e.onload[t]();e.onload=[]}}function K(t,n){try{var i=document.createElement("div");i.className="countly-iframe-wrapper",i.id="countly-iframe-wrapper-"+t._id;var r=document.createElement("span");r.className="countly-feedback-close-icon",r.id="countly-feedback-close-icon-"+t._id,r.innerHTML="x";var a=document.createElement("iframe");if(a.name="countly-feedback-iframe",a.id="countly-feedback-iframe",a.src=e.url+"/feedback?widget_id="+t._id+"&app_key="+e.app_key+"&device_id="+e.device_id+"&sdk_version="+o,document.body.appendChild(i),i.appendChild(r),i.appendChild(a),he(document.getElementById("countly-feedback-close-icon-"+t._id),"click",(function(){document.getElementById("countly-iframe-wrapper-"+t._id).style.display="none",document.getElementById("cfbg").style.display="none"})),n){var s=document.createElement("div");s.style.color=t.trigger_font_color<7?"#"+t.trigger_font_color:t.trigger_font_color,s.style.backgroundColor=t.trigger_bg_color.length<7?"#"+t.trigger_bg_color:t.trigger_bg_color,s.className="countly-feedback-sticker "+t.trigger_position,s.id="countly-feedback-sticker-"+t._id,s.innerHTML='<svg id="feedback-sticker-svg" aria-hidden="true" data-prefix="far" data-icon="grin" class="svg-inline--fa fa-grin fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path id="smileyPathInStickerSvg" fill="white" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path></svg> '+t.trigger_button_text,document.body.appendChild(s);var c=document.getElementById("smileyPathInStickerSvg");c&&(c.style.fill=t.trigger_font_color<7?"#"+t.trigger_font_color:t.trigger_font_color),he(document.getElementById("countly-feedback-sticker-"+t._id),"click",(function(){document.getElementById("countly-iframe-wrapper-"+t._id).style.display="block",document.getElementById("cfbg").style.display="block"}))}else document.getElementById("countly-iframe-wrapper-"+t._id).style.display="block",document.getElementById("cfbg").style.display="block"}catch(d){de("Somethings went wrong while element injecting process: "+d)}}function Z(){if(k){var t={name:k,segment:n};e.check_consent("views")&&U({key:"[CLY]_view",dur:j?le()-b:x,segmentation:t}),k=null}}function ee(){return k}function te(){if(A){var t=Oe("cly_session");(!t||parseInt(t)<=le())&&(s=!1,e.begin_session(!v)),Oe("cly_session",le()+60*M)}}function ne(t){t.app_key=e.app_key,t.device_id=e.device_id,t.sdk_name=r,t.sdk_version=o,e.check_consent("location")?(e.country_code&&(t.country_code=e.country_code),e.city&&(t.city=e.city),null!==e.ip_address&&(t.ip_address=e.ip_address)):t.location="",t.timestamp=ue();var n=new Date;t.hour=n.getHours(),t.dow=n.getDay()}function ie(t){e.ignore_visitor||(e.app_key&&e.device_id?(ne(t),f.length>u&&f.shift(),f.push(t),Oe("cly_queue",f,!0)):de("app_key or device_id is missing"))}function oe(){if(Q(),e.test_mode||e.ignore_visitor)q=!1;else{q=!0;var n=0;if("undefined"!==typeof e.q&&e.q.length>0){var i,o=e.q;for(e.q=[],n=0;n<o.length;n++)if(de("Processing queued call",i=o[n]),"function"===typeof i)i();else if(Array.isArray(i)&&i.length>0)if("undefined"!==typeof e[i[0]])e[i[0]].apply(null,i.slice(1));else{var r=i[0].replace("userData.","");"undefined"!==typeof e.userData[r]&&e.userData[r].apply(null,i.slice(1))}}if(s&&v&&j){var a=le();a-t>O&&(e.session_duration(a-t),t=a)}if(m.length>0){if(m.length<=N)ie({events:JSON.stringify(m)}),m=[];else{var d=m.splice(0,N);ie({events:JSON.stringify(d)})}Oe("cly_event",m)}if(!H&&f.length>0&&I&&le()>C){I=!1;var u=f.shift();Ee(P)&&(R&&(clearTimeout(R),R=null),u.consent=JSON.stringify(P),P={}),de("Processing request",u),Oe("cly_queue",f,!0),pe(e.url+c,u,(function(e,t){de("Request Finished",t,e),e&&(f.unshift(t),C=le()+L),Oe("cly_queue",f,!0),I=!0}))}setTimeout(oe,l)}}function re(){return Oe("cly_id")||ae()}function ae(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}function se(){return/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-4[0-9a-fA-F]{3}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/.test(e.device_id)}function ce(){var t={};if(t._app_version=e.app_version,t._ua=navigator.userAgent,screen.width){var n=screen.width?parseInt(screen.width):0,i=screen.height?parseInt(screen.height):0;if(0!==n&&0!==i){if(navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)&&window.devicePixelRatio)n=Math.round(n*window.devicePixelRatio),i=Math.round(i*window.devicePixelRatio);else if(90===Math.abs(window.orientation)){var o=n;n=i,i=o}t._resolution=n+"x"+i}}window.devicePixelRatio&&(t._density=window.devicePixelRatio);var r=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage;if("undefined"!==typeof r&&(t._locale=r),"undefined"!==typeof document.referrer&&document.referrer.length){var a=J.exec(document.referrer);if(a&&a[11]&&a[11]!==window.location.hostname){var s=!1;if(y&&y.length)for(var c=0;c<y.length;c++)try{if(new RegExp(y[c]).test(document.referrer)){de("Ignored:",document.referrer),s=!0;break}}catch(d){de("Problem with regex",y[c])}s||(t._store=document.referrer)}}return de("Got metrics",t),t}function de(){e.debug&&"undefined"!==typeof console&&(arguments[1]&&"object"==typeof arguments[1]&&(arguments[1]=JSON.stringify(arguments[1])),console.log(Array.prototype.slice.call(arguments).join("\n")))}function le(){return Math.floor((new Date).getTime()/1e3)}function ue(){var e=(new Date).getTime();return B>=e?B++:B=e,B}function fe(t,n,i){return"undefined"!==typeof n[t]?n[t]:"undefined"!==typeof e[t]?e[t]:i}function me(t,n,o){if(e.check_consent("crashes")&&t){o=o||h;var r="";"object"===typeof t?"undefined"!==typeof t.stack?r=t.stack:("undefined"!==typeof t.name&&(r+=t.name+":"),"undefined"!==typeof t.message&&(r+=t.message+"\n"),"undefined"!==typeof t.fileName&&(r+="in "+t.fileName+"\n"),"undefined"!==typeof t.lineNumber&&(r+="on "+t.lineNumber),"undefined"!==typeof t.columnNumber&&(r+=":"+t.columnNumber)):r=t+"",n=!!n;var a=ce(),s={_resolution:a._resolution,_error:r,_app_version:a._app_version,_run:le()-i,_not_os_specific:!0},c=navigator.battery||navigator.webkitBattery||navigator.mozBattery||navigator.msBattery;c&&(s._bat=Math.floor(100*c.level)),"undefined"!==typeof navigator.onLine&&(s._online=!!navigator.onLine),s._background=!document.hasFocus(),_.length>0&&(s._logs=_.join("\n")),_=[],s._nonfatal=n,s._view=(window.location.pathname||"")+(window.location.search||"")+(window.location.hash||""),"undefined"!==typeof o&&(s._custom=o);try{var d=document.createElement("canvas").getContext("experimental-webgl");s._opengl=d.getParameter(d.VERSION)}catch(l){}ie({crash:JSON.stringify(s)})}}function pe(t,n,i){try{de("Sending XML HTTP request");var o=window.XMLHttpRequest?new window.XMLHttpRequest:window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):null,r=_e(n=n||{}),a="GET";(e.force_post||r.length>=2e3)&&(a="POST"),"GET"===a?o.open("GET",t+"?"+r,!0):(o.open("POST",t,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded")),o.onreadystatechange=function(){4===this.readyState&&this.status>=200&&this.status<300?"function"===typeof i&&i(!1,n,this.responseText):4===this.readyState&&(de("Failed Server XML HTTP request",this.status),"function"===typeof i&&i(!0,n))},"GET"===a?o.send():o.send(r)}catch(s){de("Failed XML HTTP request",s),"function"===typeof i&&i(!0,n)}}function _e(e){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}function ge(e){return"/"===e.substr(e.length-1)?e.substr(0,e.length-1):e}function ye(e,t){for(var n,i={},o=0;o<t.length;o++)"undefined"!==typeof e[n=t[o]]&&(i[n]=e[n]);return i}e.userData={set:function(e,t){X[e]=t},unset:function(e){X[e]=""},set_once:function(e,t){G(e,t,"$setOnce")},increment:function(e){G(e,1,"$inc")},increment_by:function(e,t){G(e,t,"$inc")},multiply:function(e,t){G(e,t,"$mul")},max:function(e,t){G(e,t,"$max")},min:function(e,t){G(e,t,"$min")},push:function(e,t){G(e,t,"$push")},push_unique:function(e,t){G(e,t,"$addToSet")},pull:function(e,t){G(e,t,"$pull")},save:function(){e.check_consent("users")&&ie({user_details:JSON.stringify({custom:X})}),X={}}},e.track_errors=function(e){h=e,window.onerror=function(e,t,n,i,o){if("undefined"!==typeof o)me(o,!1);else{var r="";"undefined"!==typeof e&&(r+=e+"\n"),"undefined"!==typeof t&&(r+="at "+t),"undefined"!==typeof n&&(r+=":"+n),"undefined"!==typeof(i=i||window.event&&window.event.errorCharacter)&&(r+=":"+i),r+="\n";try{for(var a=[],s=arguments.callee.caller;s;)a.push(s.name),s=s.caller;r+=a.join("\n")}catch(c){}me(r,!1)}},window.addEventListener("unhandledrejection",(function(e){me(new Error("Unhandled rejection (reason: "+(e.reason&&e.reason.stack?e.reason.stack:e.reason)+")."),!0)}))},e.log_error=function(e,t){me(e,!0,t)},e.add_log=function(t){e.check_consent("crashes")&&(_.length>T&&_.shift(),_.push(t))},e.fetch_remote_config=function(t,n,i){if(e.check_any_consent()){var o={method:"fetch_remote_config"};e.check_consent("sessions")&&(o.metrics=JSON.stringify(ce())),t&&(i||"function"!==typeof t?Array.isArray(t)&&t.length&&(o.keys=JSON.stringify(t)):(i=t,t=null)),n&&(i||"function"!==typeof n?Array.isArray(n)&&n.length&&(o.omit_keys=JSON.stringify(n)):(i=n,n=null)),ne(o),pe(e.url+d,o,(function(e,t,n){try{var r=JSON.parse(n);if(o.keys||o.omit_keys)for(var a in r)p[a]=r[a];else p=r;Oe("cly_remote_configs",p)}catch(s){}"function"===typeof i&&i(e,p)}))}},e.get_remote_config=function(e){return"undefined"!==typeof e?p[e]:p},e.stop_time=function(){j&&(j=!1,w=le()-t,x=le()-b)},e.start_time=function(){j||(j=!0,t=le()-w,b=le()-x,x=0,te())},e.track_sessions=function(){e.begin_session(),e.start_time(),he(window,"beforeunload",(function(){e.end_session()})),he(window,"unload",(function(){e.end_session()}));var t="hidden";function n(){document[t]?e.stop_time():e.start_time()}function i(){E>=S&&e.start_time(),E=0}t in document?document.addEventListener("visibilitychange",n):(t="mozHidden")in document?document.addEventListener("mozvisibilitychange",n):(t="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",n):(t="msHidden")in document?document.addEventListener("msvisibilitychange",n):"onfocusin"in document?(he(window,"focusin",(function(){e.start_time()})),he(window,"focusout",(function(){e.stop_time()}))):(he(window,"focus",(function(){e.start_time()})),he(window,"blur",(function(){e.stop_time()})),he(window,"pageshow",(function(){e.start_time()})),he(window,"pagehide",(function(){e.stop_time()}))),he(window,"mousemove",i),he(window,"click",i),he(window,"keydown",i),he(window,"scroll",i),setInterval((function(){++E>=S&&e.stop_time()}),6e4)},e.track_pageview=function(t,n){if(Z(),t&&Array.isArray(t)&&(n=t,t=null),t||(t=e.getViewName()),n&&n.length)for(var i=0;i<n.length;i++)try{if(new RegExp(n[i]).test(t))return void de("Ignored:",t)}catch(a){de("Problem with regex",n[i])}k=t,b=le();var o={name:t,visit:1,domain:window.location.hostname,view:e.getViewUrl()};if("undefined"!==typeof document.referrer&&document.referrer.length){var r=J.exec(document.referrer);r&&r[11]&&r[11]!==window.location.hostname&&(o.start=1)}e.check_consent("views")?U({key:"[CLY]_view",segmentation:o}):z.track_pageview=arguments},e.track_view=function(t,n){e.track_pageview(t,n)},e.track_clicks=function(t){t=t||document;var n=!0;function i(t){if(n){if(n=!1,ke(t),"undefined"!==typeof t.pageX&&"undefined"!==typeof t.pageY){var i=be(),o=xe();e.check_consent("clicks")&&U({key:"[CLY]_action",segmentation:{type:"click",x:t.pageX,y:t.pageY,width:o,height:i,domain:window.location.hostname,view:e.getViewUrl()}})}setTimeout((function(){n=!0}),1e3)}}he(t,"click",i)},e.track_scrolls=function(t){t=t||window;var n=!0,i=0;function o(){i=Math.max(i,window.scrollY,document.body.scrollTop,document.documentElement.scrollTop)}function r(){if(n){n=!1;var t=be(),o=xe(),r=Ce();e.check_consent("scrolls")&&U({key:"[CLY]_action",segmentation:{type:"scroll",y:i+r,width:o,height:t,domain:window.location.hostname,view:e.getViewUrl()}})}}he(t,"scroll",o),he(t,"beforeunload",r),he(t,"unload",r)},e.track_links=function(t){function n(t){var n=ve(t).closest("a");n&&(ke(t),e.check_consent("clicks")&&U({key:"linkClick",segmentation:{href:n.href,text:n.innerText,id:n.id,view:e.getViewUrl()}}))}t=t||document,he(t,"click",n)},e.track_forms=function(t,n){function i(e){return e.name||e.id||e.type||e.nodeName}function o(t){var o,r=ve(t),a={id:r.id,name:r.name,action:r.action,method:r.method,view:e.getViewUrl()};if("undefined"!==typeof r.elements){for(var s=0;s<r.elements.length;s++)(o=r.elements[s])&&"password"!==o.type&&-1===o.className.indexOf("cly_user_ignore")&&("undefined"===typeof a["input:"+i(o)]&&(a["input:"+i(o)]=[]),"select"===o.nodeName.toLowerCase()?"undefined"!==typeof o.multiple?a["input:"+i(o)].push(W(o)):a["input:"+i(o)].push(o.options[o.selectedIndex].value):"input"===o.nodeName.toLowerCase()?"undefined"!==typeof o.type?"checkbox"===o.type.toLowerCase()||"radio"===o.type.toLowerCase()?o.checked&&a["input:"+i(o)].push(o.value):("hidden"!==o.type.toLowerCase()||n)&&a["input:"+i(o)].push(o.value):a["input:"+i(o)].push(o.value):("textarea"===o.nodeName.toLowerCase()||"undefined"!==typeof o.value)&&a["input:"+i(o)].push(o.value));for(var c in a)"undefined"!=typeof a[c].join&&(a[c]=a[c].join(", "))}e.check_consent("forms")&&U({key:"formSubmit",segmentation:a})}t=t||document,he(t,"submit",o)},e.collect_from_forms=function(t,n){function i(i){var o,r=ve(i),a={},s=!1;if("undefined"!==typeof r.elements){var c,d,l={},u=t.getElementsByTagName("LABEL");for(c=0;c<u.length;c++)u[c].htmlFor&&""!==u[c].htmlFor&&(l[u[c].htmlFor]=u[c].innerText||u[c].textContent||u[c].innerHTML);for(c=0;c<r.elements.length;c++)if((o=r.elements[c])&&"password"!==o.type&&-1===o.className.indexOf("cly_user_ignore")){var f="";if("select"===o.nodeName.toLowerCase()?f="undefined"!==typeof o.multiple?W(o):o.options[o.selectedIndex].value:"input"===o.nodeName.toLowerCase()?("undefined"===typeof o.type||"checkbox"!==o.type.toLowerCase()&&"radio"!==o.type.toLowerCase()||o.checked)&&(f=o.value):("textarea"===o.nodeName.toLowerCase()||"undefined"!==typeof o.value)&&(f=o.value),o.className&&-1!==o.className.indexOf("cly_user_")){var m=o.className.split(" ");for(d=0;d<m.length;d++)if(0===m[d].indexOf("cly_user_")){a[m[d].replace("cly_user_","")]=f,s=!0;break}}else o.type&&"email"===o.type.toLowerCase()||o.name&&-1!==o.name.toLowerCase().indexOf("email")||o.id&&-1!==o.id.toLowerCase().indexOf("email")||o.id&&l[o.id]&&-1!==l[o.id].toLowerCase().indexOf("email")||/[^@\s]+@[^@\s]+\.[^@\s]+/.test(f)?(a.email||(a.email=f),s=!0):o.name&&-1!==o.name.toLowerCase().indexOf("username")||o.id&&-1!==o.id.toLowerCase().indexOf("username")||o.id&&l[o.id]&&-1!==l[o.id].toLowerCase().indexOf("username")?(a.username||(a.username=f),s=!0):o.name&&(-1!==o.name.toLowerCase().indexOf("tel")||-1!==o.name.toLowerCase().indexOf("phone")||-1!==o.name.toLowerCase().indexOf("number"))||o.id&&(-1!==o.id.toLowerCase().indexOf("tel")||-1!==o.id.toLowerCase().indexOf("phone")||-1!==o.id.toLowerCase().indexOf("number"))||o.id&&l[o.id]&&(-1!==l[o.id].toLowerCase().indexOf("tel")||-1!==l[o.id].toLowerCase().indexOf("phone")||-1!==l[o.id].toLowerCase().indexOf("number"))?(a.phone||(a.phone=f),s=!0):o.name&&(-1!==o.name.toLowerCase().indexOf("org")||-1!==o.name.toLowerCase().indexOf("company"))||o.id&&(-1!==o.id.toLowerCase().indexOf("org")||-1!==o.id.toLowerCase().indexOf("company"))||o.id&&l[o.id]&&(-1!==l[o.id].toLowerCase().indexOf("org")||-1!==l[o.id].toLowerCase().indexOf("company"))?(a.organization||(a.organization=f),s=!0):(o.name&&-1!==o.name.toLowerCase().indexOf("name")||o.id&&-1!==o.id.toLowerCase().indexOf("name")||o.id&&l[o.id]&&-1!==l[o.id].toLowerCase().indexOf("name"))&&(a.name||(a.name=""),a.name+=f+" ",s=!0)}}s&&(de("Gathered user data",a),n?e.user_details({custom:a}):e.user_details(a))}t=t||document,he(t,"submit",i)},e.collect_from_facebook=function(t){FB&&FB.api&&FB.api("/me",(function(n){var i={};if(n.name&&(i.name=n.name),n.email&&(i.email=n.email),"male"===n.gender?i.gender="M":"female"===n.gender&&(i.gender="F"),n.birthday){var o=n.birthday.split("/").pop();o&&4===o.length&&(i.byear=o)}if(n.work&&n.work[0]&&n.work[0].employer&&n.work[0].employer.name&&(i.organization=n.work[0].employer.name),t)for(var r in i.custom={},t){for(var a=t[r].split("."),s=n,c=0;c<a.length&&"undefined"!==typeof(s=s[a[c]]);c++);"undefined"!==typeof s&&(i.custom[r]=s)}e.user_details(i)}))},e.opt_out=function(){e.ignore_visitor=!0,Oe("cly_ignore",!0)},e.opt_in=function(){Oe("cly_ignore",!1),e.ignore_visitor=!1,$(),e.ignore_visitor||q||oe()},e.show_feedback_popup=function(t){H?de("Cannot show feedback popup in offline mode"):pe(e.url+"/o/feedback/widget",{widget_id:t},(function(e,t,n){e&&de("Error occurred",e);try{K(JSON.parse(n),!1)}catch(i){de("JSON parse failed: "+i)}}))},e.enable_feedback=function(t){if(H)de("Cannot enable feedback in offline mode");else{Ae(e.url+"/star-rating/stylesheets/countly-feedback-web.css");var n=t.popups||t.widgets;n.length>0?(document.body.insertAdjacentHTML("beforeend",'<div id="cfbg"></div>'),pe(e.url+"/o/feedback/multiple-widgets-by-id",{widgets:JSON.stringify(n)},(function(e,t,n){e&&de("Errors occurred:",e);try{for(var i=JSON.parse(n),o=0;o<i.length;o++)if("true"===i[o].is_active&&i[o].target_devices[we.device])if(i[o].hide_sticker="true"===i[o].hide_sticker,"all"!==i[o].target_page||i[o].hide_sticker)for(var r=i[o].target_pages,a=0;a<r.length;a++)r[a]!==window.location.pathname||i[o].hide_sticker||K(i[o],!0);else K(i[o],!0)}catch(s){de("JSON parse error: "+s)}}))):de("You should provide at least one widget id as param. Read documentation for more detail. https://resources.count.ly/plugins/feedback")}},Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;for(e=e.toUpperCase();t;){if(t.nodeName.toUpperCase()===e)return t;t=t.parentElement}});var he=function(e,t,n){"undefined"!==typeof e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},ve=function(e){return e?"undefined"!==typeof e.target?e.target:e.srcElement:window.event.srcElement},we=function(){var e=navigator.userAgent.toLowerCase(),t=function(t){return t&&(e=(t+"").toLowerCase()),/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e)?"tablet":/(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(e)?"phone":"desktop"};return{device:t(),detect:t,isMobile:"desktop"!==t(),userAgent:e}}();function ke(e){return"undefined"==typeof e.pageY&&"number"==typeof e.clientX&&document.documentElement&&(e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),e}function be(){var e=document;return Math.max(Math.max(e.body.scrollHeight,e.documentElement.scrollHeight),Math.max(e.body.offsetHeight,e.documentElement.offsetHeight),Math.max(e.body.clientHeight,e.documentElement.clientHeight))}function xe(){var e=document;return Math.max(Math.max(e.body.scrollWidth,e.documentElement.scrollWidth),Math.max(e.body.offsetWidth,e.documentElement.offsetWidth),Math.max(e.body.clientWidth,e.documentElement.clientWidth))}function Ce(){var e=document;return Math.min(Math.min(e.body.clientHeight,e.documentElement.clientHeight),Math.min(e.body.offsetHeight,e.documentElement.offsetHeight),window.innerHeight)}function Le(e){Oe("cly_token",e)}function Se(){var e=Oe("cly_token");return Oe("cly_token",null),e}function Ee(e){if(e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}var Oe=function(t,n,i){t=e.namespace+t,i=i||!1;var o,r=!1;r=!0;try{"undefined"!==typeof localStorage&&localStorage.setItem("testLocal",!0)}catch(c){r=!1}if("undefined"!==typeof n&&null!==n&&(n=e.serialize(n),r?localStorage.setItem(t,n):i||a(t,n,30)),"undefined"===typeof n)return r?o=localStorage.getItem(t):i||(o=s(t)),e.deserialize(o);function a(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var o="; expires="+i.toGMTString();document.cookie=e+"="+t+o+"; path=/"}function s(e){for(var t=e+"=",n=document.cookie.split(";"),i=0,o=n.length;i<o;i++){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null}null===n&&(r?localStorage.removeItem(t):i||a(t,"",-1))};function Ne(e,t,n,i,o,r){var a,s=document.createElement(e);s.setAttribute(t,n),s.setAttribute(i,o),r&&(s.onreadystatechange=s.onload=function(){a||r(),a=!0}),document.getElementsByTagName("head")[0].appendChild(s)}function Te(e,t){Ne("script","type","text/javascript","src",e,t)}function Ae(e,t){Ne("link","rel","stylesheet","href",e,t)}function Me(){var e=document.getElementById("cly-loader");if(!e){de("setting up loader");var t="#cly-loader {height: 4px; width: 100%; position: absolute; z-index: 99999; overflow: hidden; background-color: #fff; top:0px; left:0px;}#cly-loader:before{display: block; position: absolute; content: ''; left: -200px; width: 200px; height: 4px; background-color: #2EB52B; animation: cly-loading 2s linear infinite;}@keyframes cly-loading { from {left: -200px; width: 30%;} 50% {width: 30%;} 70% {width: 70%;} 80% { left: 50%;} 95% {left: 120%;} to {left: 100%;}}",n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t)),n.appendChild(i),(e=document.createElement("div")).setAttribute("id","cly-loader"),document.body.appendChild(e)}e.style.display="block"}function Be(){var e=document.getElementById("cly-loader");e&&(e.style.display="none")}function Ie(){return m}function qe(){return f}return window.addEventListener("storage",(function(t){switch((t.key+"").replace(e.namespace,"")){case"cly_queue":f=e.deserialize(t.newValue);break;case"cly_event":m=e.deserialize(t.newValue);break;case"cly_remote_configs":p=e.deserialize(t.newValue);break;case"cly_ignore":e.ignore_visitor=e.deserialize(t.newValue);break;case"cly_id":e.device_id=e.deserialize(t.newValue)}})),e.serialize=function(e){return"object"===typeof e&&(e=JSON.stringify(e)),e},e.deserialize=function(e){try{e=JSON.parse(e)}catch(t){}return e},e.getViewName=function(){return window.location.pathname},e.getViewUrl=function(){return window.location.pathname},e._internals={store:Oe,getDocWidth:xe,getDocHeight:be,getViewportHeight:Ce,get_page_coord:ke,get_event_target:ve,add_event:he,getProperties:ye,stripTrailingSlash:ge,prepareParams:_e,sendXmlHttpRequest:pe,recordError:me,getMsTimestamp:ue,getTimestamp:le,log:de,getMetrics:ce,generateUUID:ae,isUUID:se,getId:re,heartBeat:oe,toRequestQueue:ie,reportViewDuration:Z,loadJS:Te,loadCSS:Ae,getLastView:ee,setToken:Le,getToken:Se,showLoader:Me,hideLoader:Be,add_cly_events:U,detect_device:we,getRequestQueue:qe,getEventQueue:Ie,clearQueue:function(){f=[],Oe("cly_queue",[]),m=[],Oe("cly_event",[])}},e}(i.Countly)}.apply(t,[]),void 0===n||(e.exports=n)}}]);
//# sourceMappingURL=994.7a94398d.chunk.js.map