(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function A(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var a,c,u,s;if(Array.isArray(e)){if((a=e.length)!=i.length)return!1;for(c=a;0!=c--;)if(!A(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!A(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((a=e.length)!=i.length)return!1;for(c=a;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((a=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!A(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return A(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),A=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return A.createElement(n,this.props)},o}(o.PureComponent);return i(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(l,"canUseDOM",a),l}}},7631:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ce}});var n=r(1721),o=r(7294);function A(e){var t=e.children;return o.createElement("div",{class:"navbar"},t)}var i,a,c,u,s=r.p+"static/starboard-thumb-d6f9ad40746f59517484322ee2bcd4d3.png",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAQ4AQMAAAD/jBcGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAAAKd6PdoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFnSURBVHja7cEBDQAAAMKg909tDjcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgVA1KgwABUsDcMAAAAABJRU5ErkJggg==",f=r.p+"static/mriviewer-thumb-b19a03afd76dc2ccc816ab68c1a798a9.png",p=r(5697),d=r.n(p),h=r(4839),m=r.n(h),y=r(2993),b=r.n(y),v=r(6494),g=r.n(v),T="bodyAttributes",w="htmlAttributes",E="titleAttributes",C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(C).map((function(e){return C[e]})),"charset"),S="cssText",j="href",P="http-equiv",k="innerHTML",I="itemprop",L="name",x="property",M="rel",R="src",N="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",U="defer",_="encodeSpecialCharacters",H="onChangeClientState",q="titleTemplate",Y=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),F=[C.NOSCRIPT,C.SCRIPT,C.STYLE],K="data-react-helmet",Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},J=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},$=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=ne(e,C.TITLE),r=ne(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=ne(e,B);return t||n||void 0},Z=function(e){return ne(e,H)||function(){}},ee=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},te=function(e,t){return t.filter((function(e){return void 0!==e[C.BASE]})).map((function(e){return e[C.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var A=n[o].toLowerCase();if(-1!==e.indexOf(A)&&r[A])return t.concat(r)}return t}),[])},re=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+Q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,A=Object.keys(e),i=0;i<A.length;i++){var a=A[i],c=a.toLowerCase();-1===t.indexOf(c)||r===M&&"canonical"===e[r].toLowerCase()||c===M&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(a)||a!==k&&a!==S&&a!==I||(r=a)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var A=Object.keys(o),i=0;i<A.length;i++){var a=A[i],c=g()({},n[a],o[a]);n[a]=c}return e}),[]).reverse()},ne=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},oe=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){oe(e)}),0)}),Ae=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||oe:r.g.requestAnimationFrame||oe,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ae:r.g.cancelAnimationFrame||Ae,ce=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,se=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,A=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,l=e.title,f=e.titleAttributes;pe(C.BODY,n),pe(C.HTML,o),fe(l,f);var p={baseTag:de(C.BASE,r),linkTags:de(C.LINK,A),metaTags:de(C.META,i),noscriptTags:de(C.NOSCRIPT,a),scriptTags:de(C.SCRIPT,u),styleTags:de(C.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},le=function(e){return Array.isArray(e)?e.join(""):e},fe=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),pe(C.TITLE,t)},pe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(K),o=n?n.split(","):[],A=[].concat(o),i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=A.indexOf(c);-1!==s&&A.splice(s,1)}for(var l=A.length-1;l>=0;l--)r.removeAttribute(A[l]);o.length===A.length?r.removeAttribute(K):r.getAttribute(K)!==i.join(",")&&r.setAttribute(K,i.join(","))}},de=function(e,t){var r=document.head||document.querySelector(C.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),A=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===S)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[n]?"":t[n];r.setAttribute(n,a)}r.setAttribute(K,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):A.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),A.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:A}},he=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)},ye=function(e,t,r){switch(e){case C.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[K]=!0,A=me(r,n),[o.createElement(C.TITLE,A,e)];var e,r,n,A},toString:function(){return function(e,t,r,n){var o=he(r),A=le(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+$(A,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+$(A,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case T:case w:return{toComponent:function(){return me(t)},toString:function(){return he(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,A=((n={key:r})[K]=!0,n);return Object.keys(t).forEach((function(e){var r=D[e]||e;if(r===k||r===S){var n=t.innerHTML||t.cssText;A.dangerouslySetInnerHTML={__html:n}}else A[r]=t[e]})),o.createElement(e,A)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===S)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+$(n[t],r)+'"';return e?e+" "+o:o}),""),A=n.innerHTML||n.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+A+"</"+e+">")}),"")}(e,t,r)}}}},be=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,A=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,l=void 0===s?"":s,f=e.titleAttributes;return{base:ye(C.BASE,t,n),bodyAttributes:ye(T,r,n),htmlAttributes:ye(w,o,n),link:ye(C.LINK,A,n),meta:ye(C.META,i,n),noscript:ye(C.NOSCRIPT,a,n),script:ye(C.SCRIPT,c,n),style:ye(C.STYLE,u,n),title:ye(C.TITLE,{title:l,titleAttributes:f},n)}},ve=m()((function(e){return{baseTag:te([j,N],e),bodyAttributes:ee(T,e),defer:ne(e,U),encode:ne(e,_),htmlAttributes:ee(w,e),linkTags:re(C.LINK,[M,j],e),metaTags:re(C.META,[L,O,P,x,I],e),noscriptTags:re(C.NOSCRIPT,[k],e),onChangeClientState:Z(e),scriptTags:re(C.SCRIPT,[R,k],e),styleTags:re(C.STYLE,[S],e),title:X(e),titleAttributes:ee(E,e)}}),(function(e){ue&&ae(ue),e.defer?ue=ie((function(){se(e,(function(){ue=null}))})):(se(e),ue=null)}),be)((function(){return null})),ge=(a=ve,u=c=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:t};case C.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,A=e.nestedChildren;return G({},n,((t={})[r.type]=[].concat(n[r.type]||[],[G({},o,this.mapNestedChildrenToProps(r,A))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,A=e.newChildProps,i=e.nestedChildren;switch(n.type){case C.TITLE:return G({},o,((t={})[n.type]=i,t.titleAttributes=G({},A),t));case C.BODY:return G({},o,{bodyAttributes:G({},A)});case C.HTML:return G({},o,{htmlAttributes:G({},A)})}return G({},o,((r={})[n.type]=G({},A),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=G({},t);return Object.keys(e).forEach((function(t){var n;r=G({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,A=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)}(J(o,["children"]));switch(r.warnOnInvalidChildren(e,A),e.type){case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:A});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:A})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=J(e,["children"]),n=G({},r);return t&&(n=this.mapChildrenToProps(t,n)),o.createElement(a,n)},V(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(o.Component),c.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=a.peek,c.rewind=function(){var e=a.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},u);ge.renderStatic=ge.rewind;o.PureComponent;var Te=function(){return o.createElement(A,null,o.createElement("button",{class:"nav"},"projects"),o.createElement("button",{class:"nav"},"about"))},we=function(){return o.createElement("div",{class:"projects"},o.createElement("div",{class:"project-holder"},o.createElement("div",{class:"project-thumb-holder"},o.createElement("img",{src:s,alt:"Starboard",class:"project-thumb"})),o.createElement("div",{class:"project-info"},o.createElement("div",{class:"project-title"},"Starboard"),o.createElement("div",{class:"project-desc"},"Multiplayer survival game")),o.createElement("img",{src:l,class:"project-overlay"})),o.createElement("div",{class:"project-holder"},o.createElement("div",{class:"project-thumb-holder"},o.createElement("img",{src:f,alt:"MRIviewer",class:"project-thumb"})),o.createElement("div",{class:"project-info"},o.createElement("div",{class:"project-title"},"MRIviewer"),o.createElement("div",{class:"project-desc"},"REU research project to model & visualize DTMRI scans of the heart",o.createElement("br",null),o.createElement("br",null),"Made with C++ and OpenGL")),o.createElement("img",{src:l,class:"project-overlay"})))},Ee=function(){return o.createElement("div",null,o.createElement("div",{class:"footer"},"made with GastbyJS"))},Ce=function(){return o.createElement("div",null,o.createElement(Te,null),o.createElement(we,null),o.createElement(Ee,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c1a63ad54a00c2007807.js.map