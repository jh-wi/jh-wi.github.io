(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,A){if(e===A)return!0;if(e&&A&&"object"==typeof e&&"object"==typeof A){if(e.constructor!==A.constructor)return!1;var a,c,u,s;if(Array.isArray(e)){if((a=e.length)!=A.length)return!1;for(c=a;0!=c--;)if(!i(e[c],A[c]))return!1;return!0}if(r&&e instanceof Map&&A instanceof Map){if(e.size!==A.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!A.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!i(c.value[1],A.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&A instanceof Set){if(e.size!==A.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!A.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(A)){if((a=e.length)!=A.length)return!1;for(c=a;0!=c--;)if(e[c]!==A[c])return!1;return!0}if(e.constructor===RegExp)return e.source===A.source&&e.flags===A.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===A.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===A.toString();if((a=(u=Object.keys(e)).length)!==Object.keys(A).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(A,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!i(e[u[c]],A[u[c]]))return!1;return!0}return e!=e&&A!=A}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var A=o.prototype;return A.UNSAFE_componentWillMount=function(){u.push(this),s()},A.componentDidUpdate=function(){s()},A.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},A.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return A(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),A(l,"canUseDOM",a),l}}},7745:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Oe}});var n,o,i,A,a=r(1721),c=r(7294),u=r.p+"static/starboard-thumb-d6f9ad40746f59517484322ee2bcd4d3.png",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAAAAQ4AQMAAAD/jBcGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURQAAAKd6PdoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFnSURBVHja7cEBDQAAAMKg909tDjcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgVA1KgwABUsDcMAAAAABJRU5ErkJggg==",l=r.p+"static/mriviewer-thumb-b19a03afd76dc2ccc816ab68c1a798a9.png",f=r(5697),p=r.n(f),d=r(4839),h=r.n(d),m=r(2993),y=r.n(m),b=r(6494),v=r.n(b),g="bodyAttributes",T="htmlAttributes",w="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(E).map((function(e){return E[e]})),"charset"),O="cssText",S="href",j="http-equiv",k="innerHTML",P="itemprop",I="name",x="property",L="rel",M="src",R="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",B="defer",U="encodeSpecialCharacters",_="onChangeClientState",H="titleTemplate",q=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),Y=[E.NOSCRIPT,E.SCRIPT,E.STYLE],F="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=re(e,E.TITLE),r=re(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=re(e,D);return t||n||void 0},$=function(e){return re(e,_)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},ee=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},te=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),A=0;A<i.length;A++){var a=i[A],c=a.toLowerCase();-1===t.indexOf(c)||r===L&&"canonical"===e[r].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(a)||a!==k&&a!==O&&a!==P||(r=a)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),A=0;A<i.length;A++){var a=i[A],c=v()({},n[a],o[a]);n[a]=c}return e}),[]).reverse()},re=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ne=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ne(e)}),0)}),oe=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:r.g.requestAnimationFrame||ne,Ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||oe:r.g.cancelAnimationFrame||oe,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ce=null,ue=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,A=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,l=e.title,f=e.titleAttributes;fe(E.BODY,n),fe(E.HTML,o),le(l,f);var p={baseTag:pe(E.BASE,r),linkTags:pe(E.LINK,i),metaTags:pe(E.META,A),noscriptTags:pe(E.NOSCRIPT,a),scriptTags:pe(E.SCRIPT,u),styleTags:pe(E.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},se=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),fe(E.TITLE,t)},fe=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(F),o=n?n.split(","):[],i=[].concat(o),A=Object.keys(t),a=0;a<A.length;a++){var c=A[a],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===o.indexOf(c)&&o.push(c);var s=i.indexOf(c);-1!==s&&i.splice(s,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(F):r.getAttribute(F)!==A.join(",")&&r.setAttribute(F,A.join(","))}},pe=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],A=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)r.innerHTML=t.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[n]?"":t[n];r.setAttribute(n,a)}r.setAttribute(F,"true"),o.some((function(e,t){return A=t,r.isEqualNode(e)}))?o.splice(A,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[F]=!0,o=he(r,n),[c.createElement(E.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=de(r),i=se(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case T:return{toComponent:function(){return he(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[F]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===k||r===O){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===k||e===O)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",A=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(A?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},ye=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,A=e.metaTags,a=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,l=void 0===s?"":s,f=e.titleAttributes;return{base:me(E.BASE,t,n),bodyAttributes:me(g,r,n),htmlAttributes:me(T,o,n),link:me(E.LINK,i,n),meta:me(E.META,A,n),noscript:me(E.NOSCRIPT,a,n),script:me(E.SCRIPT,c,n),style:me(E.STYLE,u,n),title:me(E.TITLE,{title:l,titleAttributes:f},n)}},be=h()((function(e){return{baseTag:ee([S,R],e),bodyAttributes:X(g,e),defer:re(e,B),encode:re(e,U),htmlAttributes:X(T,e),linkTags:te(E.LINK,[L,S],e),metaTags:te(E.META,[I,C,j,x,P],e),noscriptTags:te(E.NOSCRIPT,[k],e),onChangeClientState:$(e),scriptTags:te(E.SCRIPT,[M,k],e),styleTags:te(E.STYLE,[O],e),title:Z(e),titleAttributes:X(w,e)}}),(function(e){ce&&Ae(ce),e.defer?ce=ie((function(){ue(e,(function(){ce=null}))})):(ue(e),ce=null)}),ye)((function(){return null})),ve=(o=be,A=i=function(e){function t(){return Q(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,A=e.nestedChildren;switch(n.type){case E.TITLE:return V({},o,((t={})[n.type]=A,t.titleAttributes=V({},i),t));case E.BODY:return V({},o,{bodyAttributes:V({},i)});case E.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((r={})[n.type]=V({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach((function(t){var n;r=V({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(G(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:A,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:A,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=G(e,["children"]),n=V({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:p().object,bodyAttributes:p().object,children:p().oneOfType([p().arrayOf(p().node),p().node]),defaultTitle:p().string,defer:p().bool,encodeSpecialCharacters:p().bool,htmlAttributes:p().object,link:p().arrayOf(p().object),meta:p().arrayOf(p().object),noscript:p().arrayOf(p().object),onChangeClientState:p().func,script:p().arrayOf(p().object),style:p().arrayOf(p().object),title:p().string,titleAttributes:p().object,titleTemplate:p().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);ve.renderStatic=ve.rewind;var ge=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return c.createElement(ve,null,c.createElement("title",null,"Henry's Portfolio"))},t}(c.PureComponent),Te=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={section:0},r.handleClick=r.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}(0,a.Z)(t,e);var r=t.prototype;return r.handleClick=function(e){this.setState({section:e})},r.render=function(){var e,t=this;return 0==this.state.section?e=c.createElement(we,null):1==this.state.section&&(e=c.createElement(Ee,null)),c.createElement("div",null,c.createElement(ge,null),c.createElement("div",{class:"navbar"},c.createElement("button",{className:0==this.state.section?"nav-selected":"nav",onClick:function(){return t.handleClick(0)}},"projects"),c.createElement("button",{className:1==this.state.section?"nav-selected":"nav",onClick:function(){return t.handleClick(1)}},"about")),e,c.createElement(Ce,null))},t}(c.Component),we=function(){return c.createElement("div",{class:"projects"},c.createElement("div",{class:"project-holder"},c.createElement("div",{class:"project-thumb-holder"},c.createElement("img",{src:u,alt:"Starboard",class:"project-thumb"})),c.createElement("div",{class:"project-info"},c.createElement("div",{class:"project-title"},"Starboard"),c.createElement("div",{class:"project-desc"},"Open-world multiplayer survival game, featuring a complex base building system",c.createElement("br",null),c.createElement("br",null),"Made with C# in Unity")),c.createElement("img",{src:s,class:"project-overlay"})),c.createElement("div",{class:"project-holder"},c.createElement("div",{class:"project-thumb-holder"},c.createElement("img",{src:l,alt:"MRIviewer",class:"project-thumb"})),c.createElement("div",{class:"project-info"},c.createElement("div",{class:"project-title"},"MRIviewer"),c.createElement("div",{class:"project-desc"},"REU research project to mesh & visualize DTMRI scans of the heart",c.createElement("br",null),c.createElement("br",null),"Made with C++ and OpenGL")),c.createElement("img",{src:s,class:"project-overlay"})))},Ee=function(){return c.createElement("div",null)},Ce=function(){return c.createElement("div",null,c.createElement("div",{class:"footer"},"made with GastbyJS • ",c.createElement("a",{href:"https://github.com/jh-wi/jh-wi.github.io/tree/source",target:"_blank"},"source")))},Oe=Te}}]);
//# sourceMappingURL=component---src-pages-index-js-9ca341486ef4554e3854.js.map