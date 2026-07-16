(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88746,e=>{"use strict";var t,r,a=e.i(58840);Object.create(null);var i=e.i(70160),n="-ms-",o="-moz-",s="-webkit-",l="comm",c="rule",d="decl",p="@keyframes",u=Math.abs,g=String.fromCharCode,f=Object.assign;function h(e,t){return(e=t.exec(e))?e[0]:e}function m(e,t,r){return e.replace(t,r)}function b(e,t,r){return e.indexOf(t,r)}function x(e,t){return 0|e.charCodeAt(t)}function y(e,t,r){return e.slice(t,r)}function v(e){return e.length}function w(e,t){return t.push(e),e}function _(e,t){return e.filter(function(e){return!h(e,t)})}var k=1,S=1,j=0,C=0,P=0,z="";function $(e,t,r,a,i,n,o,s){return{value:e,root:t,parent:r,type:a,props:i,children:n,line:k,column:S,length:o,return:"",siblings:s}}function N(e,t){return f($("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function A(e){for(;e.root;)e=N(e.root,{children:[e]});w(e,e.siblings)}function I(){return P=C<j?x(z,C++):0,S++,10===P&&(S=1,k++),P}function O(){return x(z,C)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){var t,r;return(t=C-1,r=function e(t){for(;I();)switch(P){case t:return C;case 34:case 39:34!==t&&39!==t&&e(P);break;case 40:41===t&&e(t);break;case 92:I()}return C}(91===e?e+2:40===e?e+1:e),y(z,t,r)).trim()}function T(e,t){for(var r="",a=0;a<e.length;a++)r+=t(e[a],a,e,t)||"";return r}function E(e,t,r,a){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case d:return e.return=e.return||e.value;case l:return"";case p:return e.return=e.value+"{"+T(e.children,a)+"}";case c:if(!v(e.value=e.props.join(",")))return""}return v(r=T(e.children,a))?e.return=e.value+"{"+r+"}":""}function F(e,t,r,a){if(e.length>-1&&!e.return)switch(e.type){case d:e.return=function e(t,r,a){var i;switch(i=r,45^x(t,0)?(((i<<2^x(t,0))<<2^x(t,1))<<2^x(t,2))<<2^x(t,3):0){case 5103:return s+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return s+t+t;case 4855:return s+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s+t+o+t+n+t+t;case 5936:switch(x(t,r+11)){case 114:return s+t+n+m(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s+t+n+m(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s+t+n+m(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return s+t+n+t+t;case 6165:return s+t+n+"flex-"+t+t;case 5187:return s+t+m(t,/(\w+).+(:[^]+)/,s+"box-$1$2"+n+"flex-$1$2")+t;case 5443:return s+t+n+"flex-item-"+m(t,/flex-|-self/g,"")+(h(t,/flex-|baseline/)?"":n+"grid-row-"+m(t,/flex-|-self/g,""))+t;case 4675:return s+t+n+"flex-line-pack"+m(t,/align-content|flex-|-self/g,"")+t;case 5548:return s+t+n+m(t,"shrink","negative")+t;case 5292:return s+t+n+m(t,"basis","preferred-size")+t;case 6060:return s+"box-"+m(t,"-grow","")+s+t+n+m(t,"grow","positive")+t;case 4554:return s+m(t,/([^-])(transform)/g,"$1"+s+"$2")+t;case 6187:return m(m(m(t,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),t,"")+t;case 5495:case 3959:return m(t,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return m(m(t,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+n+"flex-pack:$3"),/space-between/,"justify")+s+t+t;case 4200:if(!h(t,/flex-|baseline/))return n+"grid-column-align"+y(t,r)+t;break;case 2592:case 3360:return n+m(t,"template-","")+t;case 4384:case 3616:if(a&&a.some(function(e,t){return r=t,h(e.props,/grid-\w+-end/)}))return~b(t+(a=a[r].value),"span",0)?t:n+m(t,"-start","")+t+n+"grid-row-span:"+(~b(a,"span",0)?h(a,/\d+/):h(a,/\d+/)-h(t,/\d+/))+";";return n+m(t,"-start","")+t;case 4896:case 4128:return a&&a.some(function(e){return h(e.props,/grid-\w+-start/)})?t:n+m(m(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return m(t,/(.+)-inline(.+)/,s+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(t)-1-r>6)switch(x(t,r+1)){case 109:if(45!==x(t,r+4))break;case 102:return m(t,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+o+(108==x(t,r+3)?"$3":"$2-$3"))+t;case 115:return~b(t,"stretch",0)?e(m(t,"stretch","fill-available"),r,a)+t:t}break;case 5152:case 5920:return m(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,a,i,o,s,l){return n+r+":"+a+l+(i?n+r+"-span:"+(o?s:s-a)+l:"")+t});case 4949:if(121===x(t,r+6))return m(t,":",":"+s)+t;break;case 6444:switch(x(t,45===x(t,14)?18:11)){case 120:return m(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===x(t,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+n+"$2box$3")+t;case 100:return m(t,":",":"+n)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return m(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case p:return T([N(e,{value:m(e.value,"@","@"+s)})],a);case c:if(e.length){var i,l;return i=r=e.props,l=function(t){switch(h(t,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":A(N(e,{props:[m(t,/:(read-\w+)/,":"+o+"$1")]})),A(N(e,{props:[t]})),f(e,{props:_(r,a)});break;case"::placeholder":A(N(e,{props:[m(t,/:(plac\w+)/,":"+s+"input-$1")]})),A(N(e,{props:[m(t,/:(plac\w+)/,":"+o+"$1")]})),A(N(e,{props:[m(t,/:(plac\w+)/,n+"input-$1")]})),A(N(e,{props:[t]})),f(e,{props:_(r,a)})}return""},i.map(l).join("")}}}function M(e,t,r,a,i,n,o,s,l,d,p,g){for(var f=i-1,h=0===i?n:[""],b=h.length,x=0,v=0,w=0;x<a;++x)for(var _=0,k=y(e,f+1,f=u(v=o[x])),S=e;_<b;++_)(S=(v>0?h[_]+" "+k:m(k,/&\f/g,h[_])).trim())&&(l[w++]=S);return $(e,t,r,0===i?c:s,l,d,p,g)}function D(e,t,r,a,i){return $(e,t,r,d,y(e,0,a),y(e,a+1,-1),a,i)}let W=void 0!==a.default&&void 0!==a.default.env&&(a.default.env.REACT_APP_SC_ATTR||a.default.env.SC_ATTR)||"data-styled",L="active",B="data-styled-version",Y="6.4.3",q="/*!sc*/\n",H="u">typeof window&&"u">typeof document;function U(e){if(void 0!==a.default&&void 0!==a.default.env){let t=a.default.env[e];if(void 0!==t&&""!==t)return"false"!==t}}let K=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!=(r=null!=(t=U("REACT_APP_SC_DISABLE_SPEEDY"))?t:U("SC_DISABLE_SPEEDY"))?r:void 0!==a.default&&void 0!==a.default.env&&!1),V={};function J(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let X=new Map,Q=new Map,Z=1,ee=e=>{if(X.has(e))return X.get(e);for(;Q.has(Z);)Z++;let t=Z++;return X.set(e,t),Q.set(t,e),t},et=e=>Q.get(e),er=(e,t)=>{Z=t+1,X.set(e,t),Q.set(t,e)},ea=Object.freeze([]),ei=Object.freeze({});function en(e,t,r=ei){return e.theme!==r.theme&&e.theme||t||r.theme}let eo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,es=/(^-|-$)/g;function el(e){return e.replace(eo,"-").replace(es,"")}let ec=/(a)(d)/gi,ed=e=>String.fromCharCode(e+(e>25?39:97));function ep(e){let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ed(t%52)+r;return(ed(t%52)+r).replace(ec,"$1-$2")}let eu=(e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e};function eg(e){return ep(eu(5381,e)>>>0)}function ef(e){return"string"==typeof e}let eh=Symbol.for("react.memo"),em=Symbol.for("react.forward_ref"),eb={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ex={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ey={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ev={[em]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[eh]:ey};function ew(e){return("type"in e&&e.type.$$typeof)===eh?ey:"$$typeof"in e?ev[e.$$typeof]:eb}let e_=Object.defineProperty,ek=Object.getOwnPropertyNames,eS=Object.getOwnPropertySymbols,ej=Object.getOwnPropertyDescriptor,eC=Object.getPrototypeOf,eP=Object.prototype;function ez(e){return"function"==typeof e}let e$=Symbol.for("react.forward_ref");function eN(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===e$&&"styledComponentId"in e}function eA(e,t){return e&&t?e+" "+t:e||t||""}function eI(e,t){return e.join(t||"")}function eO(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eR(e,t){Object.defineProperty(e,"toString",{value:t})}let eG=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,r=t.length,a=r;for(;e>=a;)if((a<<=1)<0)throw J(16,`${e}`);this.groupSizes=new Uint32Array(a),this.groupSizes.set(t),this.length=a;for(let e=r;e<a;e++)this.groupSizes[e]=0}let r=this.indexOfGroup(e+1),a=0;for(let i=0,n=t.length;i<n;i++)this.tag.insertRule(r,t[i])&&(this.groupSizes[e]++,r++,a++);a>0&&this._cGroup>e&&(this._cIndex+=a)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(let e=r;e<a;e++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;let r=this.groupSizes[e],a=this.indexOfGroup(e),i=a+r;for(let e=a;e<i;e++)t+=this.tag.getRule(e)+q;return t}},eT=`style[${W}][${B}="${Y}"]`,eE=RegExp(`^${W}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),eF=e=>"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,eM=e=>{if(!e)return document;if(eF(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(eF(t))return t}return document},eD=(e,t,r)=>{let a,i=r.split(",");for(let r=0,n=i.length;r<n;r++)(a=i[r])&&e.registerName(t,a)},eW=(e,t)=>{var r;let a=(null!=(r=t.textContent)?r:"").split(q),i=[];for(let t=0,r=a.length;t<r;t++){let r=a[t].trim();if(!r)continue;let n=r.match(eE);if(n){let t=0|parseInt(n[1],10),r=n[2];0!==t&&(er(r,t),eD(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(r)}},eL=e=>{let t=eM(e.options.target).querySelectorAll(eT);for(let r=0,a=t.length;r<a;r++){let a=t[r];a&&a.getAttribute(W)!==L&&(eW(e,a),a.parentNode&&a.parentNode.removeChild(a))}},eB=!1;function eY(){if(!1!==eB)return eB;if("u">typeof document){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return eB=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return eB=t.getAttribute("content")||void 0}return eB="u">typeof __webpack_nonce__?__webpack_nonce__:void 0}let eq=(e,t)=>{let r,a=document.head,i=e||a,n=document.createElement("style"),o=(r=Array.from(i.querySelectorAll(`style[${W}]`)))[r.length-1],s=void 0!==o?o.nextSibling:null;n.setAttribute(W,L),n.setAttribute(B,Y);let l=t||eY();return l&&n.setAttribute("nonce",l),i.insertBefore(n,s),n},eH=class{constructor(e,t){this.element=eq(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;let r=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets;for(let t=0,a=r.length;t<a;t++){let a=r[t];if(a.ownerNode===e)return a}throw J(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},eU=class{constructor(e,t){this.element=eq(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},eK=H,eV={isServer:!H,useCSSOMInjection:!K};class eJ{static registerId(e){return ee(e)}constructor(e=ei,t={},r){this.options=Object.assign(Object.assign({},eV),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!e.isServer,!this.server&&H&&eK&&(eK=!1,eL(this)),eR(this,()=>(e=>{let t=e.getTag(),{length:r}=t,a="";for(let i=0;i<r;i++){let r=et(i);if(void 0===r)continue;let n=e.names.get(r);if(void 0===n||!n.size)continue;let o=t.getGroup(i);if(0===o.length)continue;let s=W+".g"+i+'[id="'+r+'"]',l="";for(let e of n)e.length>0&&(l+=e+",");a+=o+s+'{content:"'+l+'"}'+q}return a})(this))}rehydrate(){!this.server&&H&&eL(this)}reconstructWithOptions(e,t=!0){let r=new eJ(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&H&&e.target!==this.options.target&&eM(this.options.target)!==eM(e.target)&&eL(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=new eG((({useCSSOMInjection:e,target:t,nonce:r})=>e?new eH(t,r):new eU(t,r))(this.options)))}hasNameForId(e,t){var r,a;return null!=(a=null==(r=this.names.get(e))?void 0:r.has(t))&&a}registerName(e,t){ee(e),e.startsWith("sc-keyframes-")&&this.keyframeIds.add(e);let r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,r){this.registerName(e,t),this.getTag().insertRules(ee(e),r)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ee(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}let eX=new WeakSet,eQ={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function eZ(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);t+=a>=65&&a<=90?"-"+String.fromCharCode(a+32):e[r]}return t.startsWith("ms-")?"-"+t:t}let e0=Symbol.for("sc-keyframes");function e1(e){return ez(e)&&!(e.prototype&&e.prototype.isReactComponent)}let e2=e=>null==e||!1===e||""===e,e5=Symbol.for("react.client.reference");function e4(e){return e.$$typeof===e5}function e3(e,t,r,a,i=[]){if(e2(e))return i;let n=typeof e;if("string"===n)return i.push(e),i;if("function"===n)return e4(e)?i:e1(e)&&t?e3(e(t),t,r,a,i):(i.push(e),i);if(Array.isArray(e)){for(let n=0;n<e.length;n++)e3(e[n],t,r,a,i);return i}return eN(e)?i.push(`.${e.styledComponentId}`):"object"==typeof e&&null!==e&&e0 in e?r?(e.inject(r,a),i.push(e.getName(a))):i.push(e):e4(e)||(eO(e)?e.toString!==Object.prototype.toString?i.push(e.toString()):function e(t,r){for(let a in t){let i=t[a];t.hasOwnProperty(a)&&!e2(i)&&(Array.isArray(i)&&eX.has(i)||ez(i)?r.push(eZ(a)+":",i,";"):eO(i)?(r.push(a+" {"),e(i,r),r.push("}")):r.push(eZ(a)+": "+(null==i||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||a in eQ||a.startsWith("--")?String(i).trim():i+"px")+";"))}}(e,i):i.push(e.toString())),i}let e8=eu(5381,Y);class e6{constructor(e,t,r){this.rules=e,this.componentId=t,this.baseHash=eu(e8,t),this.baseStyle=r,eJ.registerId(t)}generateAndInjectStyles(e,t,r){let a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";{let i="";for(let a=0;a<this.rules.length;a++){let n=this.rules[a];if("string"==typeof n)i+=n;else if(n)if(e1(n)){let a=n(e);"string"==typeof a?i+=a:null!=a&&!1!==a&&(i+=eI(e3(a,e,t,r)))}else i+=eI(e3(n,e,t,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let e=r.hash?r.hash+i:i,n=this.dynamicNameCache.get(e);if(!n){if(n=ep(eu(eu(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,n)}if(!t.hasNameForId(this.componentId,n)){let e=r(i,"."+n,void 0,this.componentId);t.insertRules(this.componentId,n,e)}a=eA(a,n)}}return a}}let e7=/&/g;function e9(e,t){let r=0;for(;--t>=0&&92===e.charCodeAt(t);)r++;return!(1&~r)}function te(e){let t=e.length,r="",a=0,i=0,n=0,o=!1,s=!1;for(let l=0;l<t;l++){let c=e.charCodeAt(l);if(0!==n||o||47!==c||42!==e.charCodeAt(l+1))if(o)42===c&&47===e.charCodeAt(l+1)&&(o=!1,l++);else if(34!==c&&39!==c||e9(e,l)){if(0===n)if(123===c)i++;else if(125===c){if(--i<0){s=!0;let r=l+1;for(;r<t;){let t=e.charCodeAt(r);if(59===t||10===t)break;r++}r<t&&59===e.charCodeAt(r)&&r++,i=0,l=r-1,a=r;continue}0===i&&(r+=e.substring(a,l+1),a=l+1)}else 59===c&&0===i&&(r+=e.substring(a,l+1),a=l+1)}else 0===n?n=c:n===c&&(n=0);else o=!0,l++}return s||0!==i||0!==n?(a<t&&0===i&&0===n&&(r+=e.substring(a)),r):e}function tt({options:e=ei,plugins:t=ea}=ei){var r,a,i;let n,o,s,d=(e,t,r)=>r.startsWith(o)&&r.endsWith(o)&&r.replaceAll(o,"").length>0?`.${n}`:e,p=t.slice();p.push(e=>{e.type===c&&e.value.includes("&")&&(s||(s=RegExp(`\\${o}\\b`,"g")),e.props[0]=e.props[0].replace(e7,o).replace(s,d))}),e.prefix&&p.push(F),p.push(E);let f=[],h=(i=(a=p.concat((r=e=>f.push(e),function(e){!e.root&&(e=e.return)&&r(e)}))).length,function(e,t,r,n){for(var o="",s=0;s<i;s++)o+=a[s](e,t,r,n)||"";return o}),_=(t,r="",a="",i="&")=>{var c,d,p;n=i,o=r,s=void 0;let _=function(e){let t=-1!==e.indexOf("//"),r=-1!==e.indexOf("}");if(!t&&!r)return e;if(!t)return te(e);let a=e.length,i="",n=0,o=0,s=0,l=0,c=0,d=!1;for(;o<a;){let t=e.charCodeAt(o);if(34!==t&&39!==t||e9(e,o))if(0===s)if(47===t&&o+1<a&&42===e.charCodeAt(o+1)){for(o+=2;o+1<a&&(42!==e.charCodeAt(o)||47!==e.charCodeAt(o+1));)o++;o+=2}else if(40!==t)if(41!==t)if(l>0)o++;else if(42===t&&o+1<a&&47===e.charCodeAt(o+1))i+=e.substring(n,o),o+=2,n=o,d=!0;else if(47===t&&o+1<a&&47===e.charCodeAt(o+1)){for(i+=e.substring(n,o);o<a&&10!==e.charCodeAt(o);)o++;n=o,d=!0}else 123===t?c++:125===t&&c--,o++;else l>0&&l--,o++;else l++,o++;else o++;else 0===s?s=t:s===t&&(s=0),o++}return d?(n<a&&(i+=e.substring(n)),0===c?i:te(i)):0===c?e:te(e)}(t),N=(p=function e(t,r,a,i,n,o,s,c,d){for(var p,f,h,_,j=0,N=0,A=s,T=0,E=0,F=0,W=1,L=1,B=1,Y=0,q="",H=n,U=o,K=i,V=q;L;)switch(F=Y,Y=I()){case 40:if(108!=F&&58==x(V,A-1)){-1!=b(V+=m(G(Y),"&","&\f"),"&\f",u(j?c[j-1]:0))&&(B=-1);break}case 34:case 39:case 91:V+=G(Y);break;case 9:case 10:case 13:case 32:V+=function(e){for(;P=O();)if(P<33)I();else break;return R(e)>2||R(P)>3?"":" "}(F);break;case 92:V+=function(e,t){for(var r;--t&&I()&&!(P<48)&&!(P>102)&&(!(P>57)||!(P<65))&&(!(P>70)||!(P<97)););return r=C+(t<6&&32==O()&&32==I()),y(z,e,r)}(C-1,7);continue;case 47:switch(O()){case 42:case 47:w((p=function(e,t){for(;I();)if(e+P===57)break;else if(e+P===84&&47===O())break;return"/*"+y(z,t,C-1)+"*"+g(47===e?e:I())}(I(),C),f=r,h=a,_=d,$(p,f,h,l,g(P),y(p,2,-2),0,_)),d),(5==R(F||1)||5==R(O()||1))&&v(V)&&" "!==y(V,-1,void 0)&&(V+=" ");break;default:V+="/"}break;case 123*W:c[j++]=v(V)*B;case 125*W:case 59:case 0:switch(Y){case 0:case 125:L=0;case 59+N:-1==B&&(V=m(V,/\f/g,"")),E>0&&(v(V)-A||0===W&&47===F)&&w(E>32?D(V+";",i,a,A-1,d):D(m(V," ","")+";",i,a,A-2,d),d);break;case 59:V+=";";default:if(w(K=M(V,r,a,j,N,n,c,q,H=[],U=[],A,o),o),123===Y)if(0===N)e(V,r,K,K,H,o,A,c,U);else{switch(T){case 99:if(110===x(V,3))break;case 108:if(97===x(V,2))break;default:N=0;case 100:case 109:case 115:}N?e(t,K,K,i&&w(M(t,K,K,0,0,n,c,q,n,H=[],A,U),U),n,U,A,c,i?H:U):e(V,K,K,K,[""],U,0,c,U)}}j=N=E=0,W=B=1,q=V="",A=s;break;case 58:A=1+v(V),E=F;default:if(W<1){if(123==Y)--W;else if(125==Y&&0==W++&&125==(P=C>0?x(z,--C):0,S--,10===P&&(S=1,k--),P))continue}switch(V+=g(Y),Y*W){case 38:B=N>0?1:(V+="\f",-1);break;case 44:c[j++]=(v(V)-1)*B,B=1;break;case 64:45===O()&&(V+=G(I())),T=O(),N=A=v(q=V+=function(e){for(;!R(O());)I();return y(z,e,C)}(C)),Y++;break;case 45:45===F&&2==v(V)&&(W=0)}}return o}("",null,null,null,[""],(d=c=a||r?a+" "+r+" { "+_+" }":_,k=S=1,j=v(z=d),C=0,c=[]),0,[0],c),z="",p);return e.namespace&&(N=function e(t,r){let a=r+" ",i=","+a;for(let n=0;n<t.length;n++){let o=t[n];if("rule"===o.type){o.value=(a+o.value).replaceAll(",",i);let e=o.props,t=[];for(let r=0;r<e.length;r++)t[r]=a+e[r];o.props=t}Array.isArray(o.children)&&"@keyframes"!==o.type&&e(o.children,r)}return t}(N,e.namespace)),f=[],T(N,h),f},N=5381;for(let e=0;e<t.length;e++)t[e].name||J(15),N=eu(N,t[e].name);return(null==e?void 0:e.namespace)&&(N=eu(N,e.namespace)),(null==e?void 0:e.prefix)&&(N=eu(N,"p")),_.hash=5381!==N?N.toString():"",_}let tr=new eJ,ta=tt(),ti=i.default.createContext({shouldForwardProp:void 0,styleSheet:tr,stylis:ta,stylisPlugins:void 0});function tn(){return i.default.useContext(ti)}function to(e){var t;let r=tn(),{styleSheet:a}=r,n=i.default.useMemo(()=>{let t=a;return e.sheet?t=e.sheet:e.target?t=t.reconstructWithOptions(void 0!==e.nonce?{target:e.target,nonce:e.nonce}:{target:e.target},!1):void 0!==e.nonce&&(t=t.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,a]),o=i.default.useMemo(()=>{var t;return void 0===e.stylisPlugins&&void 0===e.namespace&&void 0===e.enableVendorPrefixes?r.stylis:tt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:null!=(t=e.stylisPlugins)?t:r.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,r.stylis,r.stylisPlugins]),s="shouldForwardProp"in e?e.shouldForwardProp:r.shouldForwardProp,l=null!=(t=e.stylisPlugins)?t:r.stylisPlugins,c=i.default.useMemo(()=>({shouldForwardProp:s,styleSheet:n,stylis:o,stylisPlugins:l}),[s,n,o,l]);return i.default.createElement(ti.Provider,{value:c},e.children)}ti.Consumer;let ts=i.default.createContext(void 0);ts.Consumer;let tl=Object.prototype.hasOwnProperty,tc={};function td(e,t,r){var a,n;let o,s,l=eN(e),c=!ef(e),{attrs:d=ea,componentId:p=(a=t.displayName,n=t.parentComponentId,tc[o="string"!=typeof a?"sc":el(a)]=(tc[o]||0)+1,s=o+"-"+eg(Y+o+tc[o]),n?n+"-"+s:s),displayName:u=ef(e)?`styled.${e}`:`Styled(${e.displayName||e.name||"Component"})`}=t,g=t.displayName&&t.componentId?el(t.displayName)+"-"+t.componentId:t.componentId||p,f=l&&e.attrs?e.attrs.concat(d).filter(Boolean):d,{shouldForwardProp:h}=t;if(l&&e.shouldForwardProp){let r=e.shouldForwardProp;if(t.shouldForwardProp){let e=t.shouldForwardProp;h=(t,a)=>r(t,a)&&e(t,a)}else h=r}let m=new e6(r,g,l?e.componentStyle:void 0);function b(e,t){return function(e,t,r){let a,n,{attrs:o,componentStyle:s,defaultProps:l,foldedComponentIds:c,styledComponentId:d,target:p}=e,u=i.default.useContext(ts),g=tn(),f=e.shouldForwardProp||g.shouldForwardProp,h=en(t,u,l)||ei;{let e=i.default.useRef(null),r=e.current;if(null!==r&&r[1]===h&&r[2]===g.styleSheet&&r[3]===g.stylis&&r[7]===s&&function(e,t,r){let a=0;for(let r in t)if(tl.call(t,r)&&(a++,e[r]!==t[r]))return!1;return a===r}(r[0],t,r[4]))a=r[5],n=r[6];else{var m,b,x;a=function(e,t,r){let a=Object.assign(Object.assign({},t),{className:void 0,theme:r}),i=e.length>1;for(let r=0;r<e.length;r++){let n=e[r],o=ez(n)?n(i?Object.assign({},a):a):n;for(let e in o)"className"===e?a.className=eA(a.className,o[e]):"style"===e?a.style=Object.assign(Object.assign({},a.style),o[e]):e in t&&void 0===t[e]||(a[e]=o[e])}return"className"in t&&"string"==typeof t.className&&(a.className=eA(a.className,t.className)),a}(o,t,h),m=a,b=g.styleSheet,x=g.stylis,n=s.generateAndInjectStyles(m,b,x);let r=0;for(let e in t)tl.call(t,e)&&r++;e.current=[t,h,g.styleSheet,g.stylis,r,a,n,s]}}let y=a.as||p,v=function(e,t,r,a){let i={};for(let n in e)void 0===e[n]||"$"===n[0]||"as"===n||"theme"===n&&e.theme===r||("forwardedAs"===n?i.as=e.forwardedAs:a&&!a(n,t)||(i[n]=e[n]));return i}(a,y,h,f),w=eA(c,d);return n&&(w+=" "+n),a.className&&(w+=" "+a.className),v[ef(y)&&y.includes("-")?"class":"className"]=w,r&&(v.ref=r),(0,i.createElement)(y,v)}(x,e,t)}b.displayName=u;let x=i.default.forwardRef(b);return x.attrs=f,x.componentStyle=m,x.displayName=u,x.shouldForwardProp=h,x.foldedComponentIds=l?eA(e.foldedComponentIds,e.styledComponentId):"",x.styledComponentId=g,x.target=l?e.target:e,Object.defineProperty(x,"defaultProps",{get(){return this._foldedDefaultProps},set(t){this._foldedDefaultProps=l?function(e,...t){for(let r of t)!function e(t,r,a=!1){if(!a&&!eO(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(let a=0;a<r.length;a++)t[a]=e(t[a],r[a]);else if(eO(r))for(let a in r)t[a]=e(t[a],r[a]);return t}(e,r,!0);return e}({},e.defaultProps,t):t}}),eR(x,()=>`.${x.styledComponentId}`),c&&function e(t,r,a){if("string"!=typeof r){let i=eC(r);i&&i!==eP&&e(t,i,a);let n=ek(r).concat(eS(r)),o=ew(t),s=ew(r);for(let e=0;e<n.length;++e){let i=n[e];if(!(i in ex||a&&a[i]||s&&i in s||o&&i in o)){let e=ej(r,i);try{e_(t,i,e)}catch(e){}}}}return t}(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}var tp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function tu(e,t){let r=[e[0]];for(let a=0,i=t.length;a<i;a+=1)r.push(t[a],e[a+1]);return r}let tg=e=>(eX.add(e),e);function tf(e,...t){return ez(e)||eO(e)?tg(e3(tu(ea,[e,...t]))):0===t.length&&1===e.length&&"string"==typeof e[0]?e3(e):tg(e3(tu(e,t)))}let th=e=>(function e(t,r,a=ei){if(!r)throw J(1,r);let i=(e,...i)=>t(r,a,tf(e,...i));return i.attrs=i=>e(t,r,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,i).filter(Boolean)})),i.withConfig=i=>e(t,r,Object.assign(Object.assign({},a),i)),i})(td,e);tp.forEach(e=>{th[e]=th(e)});class tm{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let r=e[t];if(ez(r)&&!eN(r))return!1}return!0}(e),eJ.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,r,a){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,r,a);else{let n=this.computeRules(e,t,r,a);r.insertRules(i,n.name,n.rules)}return}let n=this.instanceRules.get(e);if(this.computeRules(e,t,r,a),!r.server&&n){let t=n.rules,r=this.instanceRules.get(e).rules;if(t.length===r.length){let e=!0;for(let a=0;a<t.length;a++)if(t[a]!==r[a]){e=!1;break}if(e)return}}this.rebuildGroup(r)}computeRules(e,t,r,a){let i=eI(e3(this.rules,t,r,a)),n={name:this.componentId+e,rules:a(i,"")};return this.instanceRules.set(e,n),n}rebuildGroup(e){let t=this.componentId;for(let r of(e.clearRules(t),this.instanceRules.values()))e.insertRules(t,r.name,r.rules)}}e.s(["ServerStyleSheet",0,class{constructor({nonce:e}={}){this._emitSheetCSS=()=>{let e=this.instance.toString();if(!e)return"";let t=this.instance.options.nonce||eY();return`<style ${eI([t&&`nonce="${t}"`,`${W}="true"`,`${B}="${Y}"`].filter(Boolean)," ")}>${e}</style>`},this.getStyleTags=()=>{if(this.sealed)throw J(2);return this._emitSheetCSS()},this.getStyleElement=()=>{if(this.sealed)throw J(2);let e=this.instance.toString();if(!e)return[];let t={[W]:"",[B]:Y,dangerouslySetInnerHTML:{__html:e}},r=this.instance.options.nonce||eY();return r&&(t.nonce=r),[i.default.createElement("style",Object.assign({},t,{key:"sc-0-0"}))]},this.seal=()=>{this.sealed=!0},this.instance=new eJ({isServer:!0,nonce:e}),this.sealed=!1}collectStyles(e){if(this.sealed)throw J(2);return i.default.createElement(to,{sheet:this.instance},e)}interleaveWithNodeStream(e){throw J(3)}},"createGlobalStyle",0,function(e,...t){let r=tf(e,...t),a=`sc-global-${eg(JSON.stringify(r))}`,n=new tm(r,a),o=e=>{let t,r=tn(),o=i.default.useContext(ts);{let e=i.default.useRef(null);null===e.current&&(e.current=r.styleSheet.allocateGSInstance(a)),t=e.current}r.styleSheet.server&&s(t,e,r.styleSheet,o,r.stylis);{let l=n.isStatic?[t,r.styleSheet,n]:[t,e,r.styleSheet,o,r.stylis,n],c=i.default.useRef(n);i.default.useLayoutEffect(()=>{r.styleSheet.server||(c.current!==n&&(r.styleSheet.clearRules(a),c.current=n),s(t,e,r.styleSheet,o,r.stylis))},l),i.default.useLayoutEffect(()=>()=>{r.styleSheet.server||n.removeStyles(t,r.styleSheet)},[t,r.styleSheet,n])}return r.styleSheet.server&&n.instanceRules.delete(t),null};function s(e,t,r,a,i){if(n.isStatic)n.renderStyles(e,V,r,i);else{let s=Object.assign(Object.assign({},t),{theme:en(t,a,o.defaultProps)});n.renderStyles(e,s,r,i)}}return i.default.memo(o)}],88746)},37467,e=>{"use strict";"https://mindwideopen.github.io/planta".replace(/\/$/,""),e.s(["assetPath",0,function(e){let t=e.startsWith("/")?e:`/${e}`;return`/planta${t}`}])},71399,e=>{"use strict";var t=e.i(88746),r=e.i(37467);let a=t.createGlobalStyle`
  :root {
    --ink: #282c2f;
    --muted: #687176;
    --paper: #fcfbf7;
    --surface: #ffffff;
    --surface-soft: #f1f4ef;
    --blue: #e7f1f7;
    --cream: #f7efe4;
    --lilac: #e8deec;
    --green: #4f765f;
    --green-strong: #294837;
    --lime: #e3e8cf;
    --wine: #7a4052;
    --line: #dfe1de;
    --shadow: 0 18px 50px rgba(40, 44, 47, 0.08);
    --radius-sm: 8px;
    --radius: 12px;
    --radius-lg: 20px;
    --container: min(100% - 48px, 1206px);
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; color: var(--ink); background: var(--paper); font-family: var(--font-sans), Arial, sans-serif; font-size: 16px; line-height: 1.65; text-rendering: optimizeLegibility; }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration-thickness: 1px; text-underline-offset: 0.2em; }
  button, input, select, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  :focus-visible { outline: 3px solid var(--wine); outline-offset: 3px; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2 { font-family: var(--font-display), Georgia, serif; font-weight: 400; line-height: 1.13; letter-spacing: -0.025em; }
  h1 { font-size: clamp(2.75rem, 5vw, 4.9rem); }
  h2 { font-size: clamp(2.1rem, 3.7vw, 3.45rem); }
  h3 { font-size: 1.12rem; line-height: 1.35; }
  ::selection { color: #fff; background: var(--wine); }

  .skip-link { position: fixed; z-index: 1000; top: 10px; left: 10px; transform: translateY(-150%); padding: 10px 16px; border-radius: 8px; color: #fff; background: var(--green-strong); }
  .skip-link:focus { transform: translateY(0); }
  .sr-only { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  .container { width: var(--container); margin-inline: auto; }
  .eyebrow { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 20px; color: var(--wine); font-size: .72rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
  .eyebrow::before { content: "✦"; font-size: .68rem; line-height: 1; }
  .section { padding: clamp(76px, 8vw, 112px) 0; }
  .section--compact { padding: clamp(52px, 7vw, 88px) 0; }
  .section--green { color: #f7f6f1; background: var(--green-strong); }
  .section--soft { background: var(--surface-soft); }
  .section--blue { background: var(--blue); }
  .section--cream { background: var(--cream); }
  .section--intro { background: #fff; }
  .section-heading { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(260px, .65fr); gap: 48px; align-items: end; margin-bottom: 48px; }
  .section-heading h2 { margin-bottom: 0; }
  .section-heading p { max-width: 560px; margin-bottom: 5px; color: var(--muted); }
  .section-heading--center { display: flex; max-width: 760px; flex-direction: column; align-items: center; gap: 20px; margin-inline: auto; margin-bottom: clamp(48px, 6vw, 72px); text-align: center; }
  .section-heading--center p { max-width: 650px; margin: 0; }
  .section-action { display: flex; justify-content: center; margin-top: 44px; }
  .section--green .section-heading p { color: #c7d4cc; }
  .button { display: inline-flex; min-height: 50px; align-items: center; justify-content: center; gap: 10px; padding: 13px 22px; border: 1px solid transparent; border-radius: 999px; font-weight: 800; line-height: 1.15; text-decoration: none; transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease; cursor: pointer; }
  .button:hover { transform: translateY(-2px); }
  .button--primary { color: #fff; background: var(--wine); }
  .button--primary:hover { background: #721c34; }
  .button--light { color: var(--green-strong); background: #fff; }
  .button--outline { color: inherit; border-color: currentColor; background: transparent; }
  .button--soft { color: var(--green-strong); background: var(--lime); }
  .button--dark { color: #fff; background: var(--ink); }
  .button--dark:hover { background: #0f1112; }
  .button--ghost { color: var(--ink); border-color: rgba(40,44,47,.45); background: rgba(255,255,255,.22); }
  .text-link { display: inline-flex; gap: 8px; align-items: center; font-weight: 800; text-decoration: none; }
  .text-link::after { content: "→"; transition: transform .2s ease; }
  .text-link:hover::after { transform: translateX(4px); }

  .utility-bar { color: #fff; background: var(--ink); font-size: .68rem; letter-spacing: .04em; }
  .utility-bar__inner { min-height: 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .utility-bar__note { display: flex; gap: 8px; align-items: center; }
  .utility-bar a { font-weight: 700; text-decoration: none; }
  .site-header { position: sticky; z-index: 100; top: 0; border-bottom: 1px solid rgba(40,44,47,.09); background: rgba(255,255,255,.95); backdrop-filter: blur(18px); }
  .site-header__inner { min-height: 72px; display: grid; grid-template-columns: auto 1fr auto; gap: 30px; align-items: center; }
  .brand { display: inline-flex; align-items: center; gap: 10px; color: var(--ink); text-decoration: none; }
  .brand__mark { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50% 50% 50% 12%; color: #fff; background: var(--ink); transform: rotate(-6deg); font-family: var(--font-display), Georgia, serif; font-size: 1.15rem; }
  .brand__name { display: grid; font-family: var(--font-display), Georgia, serif; font-size: 1.35rem; line-height: .9; letter-spacing: -.04em; }
  .brand__caption { margin-top: 5px; font-family: var(--font-sans), Arial, sans-serif; font-size: .58rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .main-nav { display: flex; align-items: center; justify-content: center; gap: 28px; }
  .main-nav a { padding: 10px 0; color: var(--ink); font-size: .76rem; font-weight: 760; letter-spacing: .04em; text-decoration: none; text-transform: uppercase; }
  .main-nav a:hover { color: var(--wine); }
  .main-nav a[aria-current="page"], .mobile-panel a[aria-current="page"] { color: var(--wine); }
  .header-actions { display: flex; align-items: center; gap: 10px; }
  .header-phone { white-space: nowrap; font-size: .88rem; font-weight: 850; text-decoration: none; }
  .menu-toggle { display: none; width: 48px; height: 48px; border: 1px solid var(--line); border-radius: 50%; color: var(--ink); background: transparent; cursor: pointer; }
  .mobile-panel { display: none; }

  .hero { position: relative; min-height: min(750px, calc(100svh - 100px)); display: grid; place-items: center; overflow: hidden; color: var(--ink); background: var(--lilac); }
  .hero__media { position: absolute; inset: 0; }
  .hero__media img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: saturate(.72) brightness(1.16); opacity: .52; }
  .hero__media::after { position: absolute; inset: 0; content: ""; background: linear-gradient(90deg, rgba(232,222,236,.74), rgba(244,236,239,.56), rgba(232,222,236,.72)), linear-gradient(0deg, rgba(255,255,255,.18), rgba(255,255,255,.12)); }
  .hero__content { position: relative; z-index: 1; display: flex; max-width: 820px; flex-direction: column; align-items: center; padding: clamp(76px, 11vh, 116px) 0 56px; text-align: center; }
  .hero__kicker { margin-bottom: 22px; font-size: .73rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
  .hero h1 { max-width: 800px; margin-bottom: 24px; text-wrap: balance; }
  .hero__lead { max-width: 610px; margin-bottom: 32px; color: #454c50; font-size: clamp(1rem, 1.5vw, 1.15rem); }
  .hero__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 52px; }
  .hero__proof { width: 100%; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 0; padding: 0; border-top: 1px solid rgba(40,44,47,.28); border-bottom: 1px solid rgba(40,44,47,.28); list-style: none; }
  .hero__proof li { padding: 14px 18px; border-right: 1px solid rgba(40,44,47,.2); }
  .hero__proof li:last-child { border-right: 0; }
  .hero__proof strong { display: block; font-size: .78rem; }
  .hero__proof span { color: #586166; font-size: .68rem; }

  .category-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; align-items: stretch; }
  .category-card { position: relative; min-height: 390px; grid-column: span 4; display: flex; align-items: flex-end; overflow: hidden; border-radius: 0; color: #fff; background: var(--green); text-decoration: none; box-shadow: none; }
  .category-card--1, .category-card--5 { grid-column: span 5; }
  .category-card--2, .category-card--4 { grid-column: span 3; }
  .category-card__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .55s ease; }
  .category-card:hover .category-card__image { transform: scale(1.035); }
  .category-card::after { position: absolute; inset: 0; content: ""; background: linear-gradient(0deg, rgba(26,28,30,.82), rgba(26,28,30,.02) 68%); }
  .category-card__content { position: relative; z-index: 1; width: 100%; padding: 24px; }
  .category-card__content span { display: block; margin-top: 6px; color: #d6e2da; font-size: .88rem; }
  .category-card h3 { margin-bottom: 0; font-family: var(--font-display), Georgia, serif; font-size: 1.7rem; font-weight: 400; }
  .category-card--plain { color: var(--ink); background: #e4e6d4; box-shadow: none; }
  .category-card--plain::after { background: linear-gradient(0deg, rgba(240,241,229,.96), rgba(240,241,229,.2)); }
  .category-card--plain .category-card__content span { color: #52665c; }

  .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .feature { min-height: 220px; padding: 28px 12px 0; border-top: 1px solid var(--ink); text-align: center; }
  .feature__number { width: 54px; height: 54px; display: grid; place-items: center; margin: 0 auto 30px; border: 1px solid var(--ink); border-radius: 50%; color: var(--ink); font-family: var(--font-display), Georgia, serif; font-size: 1rem; }
  .feature p { margin-bottom: 0; color: var(--muted); font-size: .86rem; }

  .arrival-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .product-card { overflow: hidden; border: 0; border-radius: 0; background: transparent; }
  .product-card__media { position: relative; aspect-ratio: .74; overflow: hidden; background: #dce5de; }
  .product-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
  .product-card:hover .product-card__media img { transform: scale(1.025); }
  .product-card__badge { position: absolute; top: 12px; left: 12px; padding: 6px 10px; border-radius: 999px; color: var(--ink); background: rgba(255,255,255,.86); font-size: .66rem; font-weight: 850; }
  .product-card__body { padding: 16px 0 0; }
  .product-card__meta { display: flex; justify-content: space-between; gap: 12px; margin-bottom: 8px; color: var(--muted); font-size: .75rem; }
  .product-card h3 { margin-bottom: 8px; font-size: 1.16rem; }
  .product-card p { min-height: 46px; margin-bottom: 12px; color: var(--muted); font-size: .82rem; }
  .product-card__action { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding-top: 16px; border-top: 1px solid var(--line); }
  .product-card__action span { color: var(--wine); font-size: .78rem; font-weight: 800; }

  .split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(360px, .85fr); gap: clamp(40px, 8vw, 110px); align-items: center; }
  .split__copy p { max-width: 650px; color: var(--muted); }
  .split__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  .editorial-split { display: grid; grid-template-columns: minmax(360px, 1.05fr) minmax(340px, .8fr); gap: clamp(54px, 8vw, 112px); align-items: center; }
  .editorial-collage { position: relative; min-height: 610px; }
  .editorial-collage__large, .editorial-collage__small { position: absolute; overflow: hidden; background: var(--surface-soft); }
  .editorial-collage__large { inset: 0 18% 9% 0; }
  .editorial-collage__small { right: 0; bottom: 0; width: 44%; height: 43%; border: 14px solid var(--paper); }
  .editorial-collage img { object-fit: cover; }
  .editorial-copy > p { color: var(--muted); }
  .editorial-list { display: grid; gap: 0; margin: 30px 0; padding: 0; list-style: none; }
  .editorial-list li { display: grid; grid-template-columns: 38px 1fr; gap: 12px; padding: 14px 0; border-top: 1px solid var(--line); font-size: .9rem; }
  .editorial-list li:last-child { border-bottom: 1px solid var(--line); }
  .editorial-list span { color: var(--wine); font-family: var(--font-display), Georgia, serif; }
  .warehouse-visual { position: relative; min-height: 520px; overflow: hidden; border-radius: var(--radius-lg); background: #dce5de; }
  .warehouse-visual > img { width: 100%; height: 100%; object-fit: cover; }
  .warehouse-visual__note { position: absolute; z-index: 1; right: 20px; bottom: 20px; left: 20px; padding: 22px; border-radius: var(--radius-sm); color: #fff; background: rgba(16,45,33,.9); backdrop-filter: blur(8px); }
  .warehouse-visual__note strong { display: block; margin-bottom: 4px; font-family: var(--font-display), Georgia, serif; font-size: 1.3rem; font-weight: 400; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; border: 0; border-radius: 0; overflow: visible; background: transparent; }
  .step { padding: 28px 26px; border-top: 1px solid var(--ink); background: transparent; }
  .step__index { display: inline-grid; width: 38px; height: 38px; place-items: center; margin-bottom: 42px; border: 1px solid var(--ink); border-radius: 50%; color: var(--ink); background: transparent; font-weight: 800; }
  .step p { margin-bottom: 0; color: var(--muted); font-size: .9rem; }

  .location-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .location-card { padding: clamp(30px, 4vw, 46px); border-radius: 0; background: rgba(255,255,255,.78); box-shadow: none; }
  .location-card__type { display: inline-block; margin-bottom: 34px; color: var(--wine); font-size: .7rem; font-weight: 850; letter-spacing: .12em; text-transform: uppercase; }
  .location-card address { margin-bottom: 24px; font-style: normal; }
  .location-card p { color: var(--muted); }
  .location-card__links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }

  .cta-band { position: relative; overflow: hidden; padding: clamp(86px, 11vw, 150px) 0; color: #fff; background: linear-gradient(rgba(28,31,33,.72), rgba(28,31,33,.76)), url('${(0,r.assetPath)("/images/category-roses.webp")}') center 54% / cover; }
  .cta-band::after { position: absolute; inset: 22px; border: 1px solid rgba(255,255,255,.32); content: ""; pointer-events: none; }
  .cta-band__inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr auto; gap: 50px; align-items: center; }
  .cta-band h2 { max-width: 790px; margin-bottom: 14px; }
  .cta-band p { max-width: 650px; margin-bottom: 0; color: #eef0ee; }

  .page-hero { padding: clamp(70px, 10vw, 122px) 0 68px; color: var(--ink); background: var(--blue); }
  .breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 42px; color: #667078; font-size: .78rem; }
  .breadcrumbs a { color: inherit; }
  .breadcrumbs span[aria-current] { color: var(--ink); }
  .page-hero h1 { max-width: 960px; margin-bottom: 22px; }
  .page-hero__lead { max-width: 760px; margin-bottom: 0; color: #596368; font-size: 1.08rem; }
  .catalog-layout { display: grid; grid-template-columns: 250px 1fr; gap: 40px; align-items: start; }
  .catalog-nav { position: sticky; top: 126px; padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--surface); }
  .catalog-nav h2 { margin-bottom: 18px; font-family: var(--font-sans), Arial, sans-serif; font-size: .8rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
  .catalog-nav ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .catalog-filter { position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
  .catalog-nav label { width: 100%; display: block; padding: 10px 12px; border-radius: 9px; color: var(--muted); font-size: .88rem; font-weight: 700; text-align: left; cursor: pointer; }
  .catalog-nav label:hover { color: var(--ink); background: var(--surface-soft); }
  .catalog-filter:focus-visible + label { outline: 3px solid var(--wine); outline-offset: 2px; }
  #catalog-filter-all:checked + label { color: #fff; background: var(--ink); }
  .catalog-main .arrival-grid { grid-template-columns: repeat(2, 1fr); }
  .catalog-main__view { display: none; }
  .catalog-main__view--all { display: block; }
  .catalog-main__header { max-width: 760px; margin-bottom: 32px; }
  .catalog-main__header h2 { margin-bottom: 12px; font-size: clamp(2rem, 3.5vw, 3.2rem); }
  .catalog-main__header p { margin-bottom: 0; color: var(--muted); }
  .catalog-note { margin-bottom: 30px; padding: 18px 20px; border-left: 4px solid var(--wine); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; color: #394f45; background: #f1e5e8; font-size: .9rem; }
  .catalog-empty { padding: clamp(30px, 6vw, 64px); border: 1px solid var(--line); background: var(--surface); text-align: center; }
  .catalog-empty p { max-width: 620px; margin: 0 auto 28px; color: var(--muted); }

  .content-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(280px, .45fr); gap: 70px; align-items: start; }
  .prose { max-width: 780px; }
  .prose h2 { margin: 58px 0 20px; font-size: clamp(1.75rem, 3vw, 2.7rem); }
  .prose h2:first-child { margin-top: 0; }
  .prose h3 { margin-top: 36px; }
  .prose p, .prose li { color: #565f64; }
  .prose ul, .prose ol { padding-left: 1.3em; }
  .side-card { position: sticky; top: 126px; padding: 28px; border-radius: var(--radius); color: #fff; background: var(--ink); }
  .side-card h2 { font-family: var(--font-sans), Arial, sans-serif; font-size: 1.2rem; font-weight: 800; letter-spacing: 0; }
  .side-card p { color: #c8d6ce; }
  .side-card .button { width: 100%; margin-top: 12px; }
  .fact-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; }
  .fact { padding: 24px; border: 1px solid var(--line); border-radius: var(--radius-sm); background: var(--surface); }
  .fact strong { display: block; margin-bottom: 8px; color: var(--wine); font-family: var(--font-display), Georgia, serif; font-size: 1.8rem; font-weight: 400; }
  .fact span { color: var(--muted); font-size: .86rem; }

  .contact-form { display: grid; gap: 16px; margin-top: 32px; }
  .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .field { display: grid; gap: 7px; }
  .field label { font-size: .82rem; font-weight: 800; }
  .field input, .field textarea, .field select { width: 100%; min-height: 50px; padding: 12px 14px; border: 1px solid #5f7168; border-radius: 10px; color: var(--ink); background: #fff; }
  .field textarea { min-height: 130px; resize: vertical; }
  .field--full { grid-column: 1 / -1; }
  .form-help { margin: 0; color: var(--muted); font-size: .76rem; }

  .gallery-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
  .gallery-item { min-height: 330px; grid-column: span 5; margin: 0; overflow: hidden; border-radius: var(--radius); }
  .gallery-item:nth-child(3n+1) { grid-column: span 7; }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; }

  .site-footer { padding: 70px 0 28px; color: #e1e2df; background: var(--ink); }
  .footer-grid { display: grid; grid-template-columns: 1.3fr .7fr .7fr 1fr; gap: 45px; padding-bottom: 54px; }
  .footer-intro p { max-width: 360px; margin: 24px 0 0; color: #b9bdbe; font-size: .88rem; }
  .footer-title { margin-bottom: 18px; color: #fff; font-size: .78rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
  .footer-links { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .footer-links a { color: #c7cacc; font-size: .85rem; text-decoration: none; }
  .footer-links a:hover { color: #fff; }
  .footer-contact { display: grid; gap: 8px; }
  .footer-contact a { color: #fff; font-weight: 800; text-decoration: none; }
  .footer-contact address { color: #b9bdbe; font-size: .82rem; font-style: normal; }
  .footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); color: #989ea1; font-size: .75rem; }

  @media (max-width: 1050px) {
    .main-nav, .header-phone { display: none; }
    .site-header__inner { grid-template-columns: auto 1fr auto; }
    .menu-toggle { display: grid; place-items: center; }
    .mobile-panel { position: absolute; z-index: 99; top: 100%; right: 0; left: 0; display: grid; gap: 6px; padding: 24px max(20px, calc((100% - 1240px) / 2)); border-bottom: 1px solid var(--line); background: var(--paper); box-shadow: var(--shadow); }
    .mobile-panel[hidden] { display: none; }
    .mobile-panel a { min-height: 46px; display: flex; align-items: center; padding: 8px 0; font-weight: 800; text-decoration: none; }
    .feature-grid { grid-template-columns: repeat(2, 1fr); }
    .arrival-grid { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1.2fr 1fr 1fr; }
    .footer-intro { grid-column: 1 / -1; }
  }

  @media (max-width: 820px) {
    :root { --container: min(100% - 28px, 1240px); }
    .utility-bar__inner { justify-content: center; }
    .utility-bar__note:last-child { display: none; }
    .site-header__inner { min-height: 70px; }
    .section-heading, .split, .editorial-split, .content-grid, .cta-band__inner { grid-template-columns: 1fr; gap: 36px; }
    .category-card, .category-card:first-child, .category-card:nth-child(2) { grid-column: span 6; min-height: 340px; }
    .category-card:last-child { grid-column: 1 / -1; }
    .hero { min-height: 720px; }
    .hero__content { padding-bottom: 46px; }
    .hero__proof { grid-template-columns: 1fr; }
    .hero__proof li { padding: 10px 15px; border-right: 0; border-bottom: 1px solid rgba(40,44,47,.16); }
    .hero__proof li:last-child { border-bottom: 0; }
    .hero__proof span { display: none; }
    .editorial-collage { min-height: 560px; }
    .steps, .location-grid, .catalog-layout { grid-template-columns: 1fr; }
    .catalog-nav { position: static; }
    .content-grid { gap: 40px; }
    .side-card { position: static; }
    .gallery-item, .gallery-item:nth-child(3n+1) { grid-column: span 6; }
    .fact-list { grid-template-columns: 1fr; }
  }

  @media (max-width: 620px) {
    h1 { font-size: clamp(2.45rem, 13vw, 3.6rem); }
    h2 { font-size: clamp(1.9rem, 10vw, 2.8rem); }
    .section { padding: 70px 0; }
    .button { width: 100%; }
    .hero__actions { display: grid; }
    .hero__media::after { background: linear-gradient(rgba(232,222,236,.7), rgba(244,236,239,.62)); }
    .category-grid, .arrival-grid, .catalog-main .arrival-grid, .feature-grid, .location-grid { grid-template-columns: 1fr; }
    .category-card, .category-card:first-child, .category-card:nth-child(2), .category-card:last-child { grid-column: 1; min-height: 330px; }
    .feature { min-height: auto; }
    .feature__number { margin-bottom: 26px; }
    .steps { display: grid; border: 0; gap: 12px; background: transparent; }
    .step { border: 1px solid var(--line); border-radius: var(--radius-sm); }
    .step__index { margin-bottom: 28px; }
    .warehouse-visual { min-height: 420px; }
    .editorial-collage { min-height: 440px; }
    .editorial-collage__large { inset: 0 12% 10% 0; }
    .editorial-collage__small { width: 46%; height: 42%; border-width: 8px; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .footer-intro, .footer-contact { grid-column: 1 / -1; }
    .footer-bottom { display: grid; }
    .form-grid { grid-template-columns: 1fr; }
    .field--full { grid-column: auto; }
    .gallery-item, .gallery-item:nth-child(3n+1) { grid-column: 1 / -1; min-height: 280px; }
  }

  @media (max-width: 390px) {
    .header-actions .button { display: none; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
  }
`;e.s(["GlobalStyles",0,a])},60878,(e,t,r)=>{t.exports=e.r(49619)},20620,e=>{"use strict";var t=e.i(57827),r=e.i(70467),a=e.i(60878),i=e.i(70160),n=e.i(37467);let o=[{display:"+7 (911) 450-10-95",href:"tel:+79114501095",label:"Основной склад"},{display:"+7 (911) 453-51-18",href:"tel:+79114535118",label:"Литовский Вал"}],s=[{href:"/catalog",label:"Каталог"},{href:"/optovym-klientam",label:"Для бизнеса"},{href:"/dostavka-i-oplata",label:"Доставка"},{href:"/o-kompanii",label:"О компании"},{href:"/kontakty",label:"Контакты"}];(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/category-plants.webp"),(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-plants.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/category-plants.webp"),(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-plants.webp"),(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/category-plants.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/category-plants.webp"),o[1],o[0],(0,n.assetPath)("/images/hero-warehouse.webp"),(0,n.assetPath)("/images/category-roses.webp"),(0,n.assetPath)("/images/category-plants.webp"),e.s(["SiteHeader",0,function(){let[e,n]=(0,i.useState)(!1),l=(0,a.usePathname)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"utility-bar",children:(0,t.jsxs)("div",{className:"container utility-bar__inner",children:[(0,t.jsx)("span",{className:"utility-bar__note",children:"Свежие поставки · оптом и в розницу"}),(0,t.jsxs)("span",{className:"utility-bar__note",children:["Калининград и область · ",(0,t.jsx)(r.default,{href:"/kontakty",children:"2 пункта получения"})]})]})}),(0,t.jsxs)("header",{className:"site-header",children:[(0,t.jsxs)("div",{className:"container site-header__inner",children:[(0,t.jsxs)(r.default,{className:"brand",href:"/","aria-label":"Планта — на главную",children:[(0,t.jsx)("span",{className:"brand__mark","aria-hidden":"true",children:"П"}),(0,t.jsxs)("span",{className:"brand__name",children:["Планта",(0,t.jsx)("span",{className:"brand__caption",children:"магазин-склад цветов"})]})]}),(0,t.jsx)("nav",{className:"main-nav","aria-label":"Основная навигация",children:s.map(e=>{let a=l===e.href||"/catalog"===e.href&&l.startsWith("/catalog/");return(0,t.jsx)(r.default,{href:e.href,"aria-current":a?"page":void 0,children:e.label},e.href)})}),(0,t.jsxs)("div",{className:"header-actions",children:[(0,t.jsx)("a",{className:"header-phone",href:o[0].href,children:o[0].display}),(0,t.jsx)(r.default,{className:"button button--dark",href:"/catalog",children:"Смотреть ассортимент"}),(0,t.jsx)("button",{className:"menu-toggle",type:"button","aria-expanded":e,"aria-controls":"mobile-menu","aria-label":e?"Закрыть меню":"Открыть меню",onClick:()=>n(e=>!e),children:(0,t.jsx)("span",{"aria-hidden":"true",children:e?"×":"☰"})})]})]}),(0,t.jsxs)("nav",{id:"mobile-menu",className:"mobile-panel","aria-label":"Мобильная навигация",hidden:!e,onKeyDown:e=>{"Escape"===e.key&&n(!1)},children:[s.map(e=>{let a=l===e.href||"/catalog"===e.href&&l.startsWith("/catalog/");return(0,t.jsx)(r.default,{href:e.href,"aria-current":a?"page":void 0,onClick:()=>n(!1),children:e.label},e.href)}),(0,t.jsxs)("a",{href:o[0].href,children:["Позвонить: ",o[0].display]})]})]})]})}],20620)},48889,e=>{"use strict";var t=e.i(57827),r=e.i(60878),a=e.i(70160),i=e.i(88746);e.s(["StyledComponentsRegistry",0,function({children:e}){let[n]=(0,a.useState)(()=>new i.ServerStyleSheet);return(0,r.useServerInsertedHTML)(()=>{let e=n.getStyleElement();return n.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),e}])}]);