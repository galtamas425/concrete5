!function(a){function b(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}a.fn.ajaxSubmit=function(c){function d(d){function f(a){var b=a.contentWindow?a.contentWindow.document:a.contentDocument?a.contentDocument:a.document;return b}function g(){function c(){try{var a=f(p).readyState;b("state = "+a),"uninitialized"==a.toLowerCase()&&setTimeout(c,50)}catch(a){b("Server abort: ",a," (",a.name,")"),i(y),u&&clearTimeout(u),u=void 0}}var d=h.attr("target"),g=h.attr("action");v.setAttribute("target",n),e||v.setAttribute("method","POST"),g!=l.url&&v.setAttribute("action",l.url),l.skipEncodingOverride||e&&!/post/i.test(e)||h.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(u=setTimeout(function(){t=!0,i(x)},l.timeout));var j=[];try{if(l.extraData)for(var k in l.extraData)j.push(a('<input type="hidden" name="'+k+'" />').attr("value",l.extraData[k]).appendTo(v)[0]);l.iframeTarget||(o.appendTo("body"),p.attachEvent?p.attachEvent("onload",i):p.addEventListener("load",i,!1)),setTimeout(c,15),v.submit()}finally{v.setAttribute("action",g),d?v.setAttribute("target",d):h.removeAttr("target"),a(j).remove()}}function i(c){if(!q.aborted&&!B){try{A=f(p)}catch(a){b("cannot access response document: ",a),c=y}if(c===x&&q)return void q.abort("timeout");if(c==y&&q)return void q.abort("server abort");if(A&&A.location.href!=l.iframeSrc||t){p.detachEvent?p.detachEvent("onload",i):p.removeEventListener("load",i,!1);var d,e="success";try{if(t)throw"timeout";var g="xml"==l.dataType||A.XMLDocument||a.isXMLDoc(A);if(b("isXml="+g),!g&&window.opera&&(null==A.body||""==A.body.innerHTML)&&--C)return b("requeing onLoad callback, DOM not available"),void setTimeout(i,250);var h=A.body?A.body:A.documentElement;q.responseText=h?h.innerHTML:null,q.responseXML=A.XMLDocument?A.XMLDocument:A,g&&(l.dataType="xml"),q.getResponseHeader=function(a){var b={"content-type":l.dataType};return b[a]},h&&(q.status=Number(h.getAttribute("status"))||q.status,q.statusText=h.getAttribute("statusText")||q.statusText);var j=(l.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||l.textarea){var n=A.getElementsByTagName("textarea")[0];if(n)q.responseText=n.value,q.status=Number(n.getAttribute("status"))||q.status,q.statusText=n.getAttribute("statusText")||q.statusText;else if(k){var r=A.getElementsByTagName("pre")[0],s=A.getElementsByTagName("body")[0];r?q.responseText=r.textContent?r.textContent:r.innerText:s&&(q.responseText=s.textContent?s.textContent:s.innerText)}}else"xml"!=j||q.responseXML||null==q.responseText||(q.responseXML=D(q.responseText));try{z=F(q,j,l)}catch(a){e="parsererror",q.error=d=a||e}}catch(a){b("error caught: ",a),e="error",q.error=d=a||e}q.aborted&&(b("upload aborted"),e=null),q.status&&(e=q.status>=200&&q.status<300||304===q.status?"success":"error"),"success"===e?(l.success&&l.success.call(l.context,z,"success",q),m&&a.event.trigger("ajaxSuccess",[q,l])):e&&(void 0==d&&(d=q.statusText),l.error&&l.error.call(l.context,q,e,d),m&&a.event.trigger("ajaxError",[q,l,d])),m&&a.event.trigger("ajaxComplete",[q,l]),m&&!--a.active&&a.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,q,e),B=!0,l.timeout&&clearTimeout(u),setTimeout(function(){l.iframeTarget||o.remove(),q.responseXML=null},100)}}}var j,k,l,m,n,o,p,q,r,s,t,u,v=h[0],w=!!a.fn.prop;if(d)if(w)for(k=0;k<d.length;k++)j=a(v[d[k].name]),j.prop("disabled",!1);else for(k=0;k<d.length;k++)j=a(v[d[k].name]),j.removeAttr("disabled");if(a(":input[name=submit],:input[id=submit]",v).length)return void alert('Error: Form elements must not have name or id of "submit".');if(l=a.extend(!0,{},a.ajaxSettings,c),l.context=l.context||l,n="jqFormIO"+(new Date).getTime(),l.iframeTarget?(o=a(l.iframeTarget),s=o.attr("name"),null==s?o.attr("name",n):n=s):(o=a('<iframe name="'+n+'" src="'+l.iframeSrc+'" />'),o.css({position:"absolute",top:"-1000px",left:"-1000px"})),p=o[0],q={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(c){var d="timeout"===c?"timeout":"aborted";b("aborting upload... "+d),this.aborted=1,o.attr("src",l.iframeSrc),q.error=d,l.error&&l.error.call(l.context,q,d,c),m&&a.event.trigger("ajaxError",[q,l,d]),l.complete&&l.complete.call(l.context,q,d)}},m=l.global,m&&!a.active++&&a.event.trigger("ajaxStart"),m&&a.event.trigger("ajaxSend",[q,l]),l.beforeSend&&l.beforeSend.call(l.context,q,l)===!1)return void(l.global&&a.active--);if(!q.aborted){r=v.clk,r&&(s=r.name,s&&!r.disabled&&(l.extraData=l.extraData||{},l.extraData[s]=r.value,"image"==r.type&&(l.extraData[s+".x"]=v.clk_x,l.extraData[s+".y"]=v.clk_y)));var x=1,y=2;l.forceSync?g():setTimeout(g,10);var z,A,B,C=50,D=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},E=a.parseJSON||function(a){return window.eval("("+a+")")},F=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=E(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g}}}if(!this.length)return b("ajaxSubmit: skipping submit process - no element selected"),this;var e,f,g,h=this;"function"==typeof c&&(c={success:c}),e=this.attr("method"),f=this.attr("action"),g="string"==typeof f?a.trim(f):"",g=g||window.location.href||"",g&&(g=(g.match(/^([^#]+)/)||[])[1]),c=a.extend(!0,{url:g,success:a.ajaxSettings.success,type:e||"GET",iframeSrc:(/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||""))?"javascript:false":"about:blank"},c);var i={};if(this.trigger("form-pre-serialize",[this,c,i]),i.veto)return b("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(c.beforeSerialize&&c.beforeSerialize(this,c)===!1)return b("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var j=c.traditional;void 0===j&&(j=a.ajaxSettings.traditional);var k,l=this.formToArray(c.semantic);if(c.data&&(c.extraData=c.data,k=a.param(c.data,j)),c.beforeSubmit&&c.beforeSubmit(l,this,c)===!1)return b("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,c,i]),i.veto)return b("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var m=a.param(l,j);k&&(m=m?m+"&"+k:k),"GET"==c.type.toUpperCase()?(c.url+=(c.url.indexOf("?")>=0?"&":"?")+m,c.data=null):c.data=m;var n=[];if(c.resetForm&&n.push(function(){h.resetForm()}),c.clearForm&&n.push(function(){h.clearForm(c.includeHidden)}),!c.dataType&&c.target){var o=c.success||function(){};n.push(function(b){var d=c.replaceTarget?"replaceWith":"html";a(c.target)[d](b).each(o,arguments)})}else c.success&&n.push(c.success);c.success=function(a,b,d){for(var e=c.context||c,f=0,g=n.length;f<g;f++)n[f].apply(e,[a,b,d||h,h])};var p=a("input:file",this).length>0,q="multipart/form-data",r=h.attr("enctype")==q||h.attr("encoding")==q;return c.iframe!==!1&&(p||c.iframe||r)?c.closeKeepAlive?a.get(c.closeKeepAlive,function(){d(l)}):d(l):a.ajax(c),this.trigger("form-submit-notify",[this,c]),this},a.fn.ajaxForm=function(c){if(0===this.length){var d={s:this.selector,c:this.context};return!a.isReady&&d.s?(b("DOM not ready, queuing ajaxForm"),a(function(){a(d.s,d.c).ajaxForm(c)}),this):(b("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return this.ajaxFormUnbind().bind("submit.form-plugin",function(b){b.isDefaultPrevented()||(b.preventDefault(),a(this).ajaxSubmit(c))}).bind("click.form-plugin",function(b){var c=b.target,d=a(c);if(!d.is(":submit,input:image")){var e=d.closest(":submit");if(0==e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!=b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)})},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b){var c=[];if(0===this.length)return c;var d=this[0],e=b?d.getElementsByTagName("*"):d.elements;if(!e)return c;var f,g,h,i,j,k,l;for(f=0,k=e.length;f<k;f++)if(j=e[f],h=j.name)if(b&&d.clk&&"image"==j.type)j.disabled||d.clk!=j||(c.push({name:h,value:a(j).val()}),c.push({name:h+".x",value:d.clk_x},{name:h+".y",value:d.clk_y}));else if(i=a.fieldValue(j,!0),i&&i.constructor==Array)for(g=0,l=i.length;g<l;g++)c.push({name:h,value:i[g]});else null!==i&&"undefined"!=typeof i&&c.push({name:h,value:i});if(!b&&d.clk){var m=a(d.clk),n=m[0];h=n.name,h&&!n.disabled&&"image"==n.type&&(c.push({name:h,value:m.val()}),c.push({name:h+".x",value:d.clk_x},{name:h+".y",value:d.clk_y}))}return c},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;f<g;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&b.selectedIndex==-1))return null;if("select"==f){var g=b.selectedIndex;if(g<0)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;l<k;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(a){var b=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var c=this.type,d=this.tagName.toLowerCase();b.test(c)||"textarea"==d||a&&/hidden/.test(c)?this.value="":"checkbox"==c||"radio"==c?this.checked=!1:"select"==d&&(this.selectedIndex=-1)})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}(jQuery);
