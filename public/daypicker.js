!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayPicker=t()}(this,(function(){"use strict";var e,t,n,r,o,_,l,a={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function f(t,n,r){var o,_,l,a={};for(l in n)"key"==l?o=n[l]:"ref"==l?_=n[l]:a[l]=n[l];if(arguments.length>2&&(a.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===a[l]&&(a[l]=t.defaultProps[l]);return p(t,a,o,_,null)}function p(e,r,o,_,l){var a={type:e,props:r,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(a),a}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function m(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||_!==t.debounceRendering)&&((_=t.debounceRendering)||o)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,_,l;e.__d&&(_=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=c({},o)).__v=o.__v+1,M(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[_]:null,n,null==_?v(o):_,o.__h),P(n,o),o.__e!=_&&y(o)))}))}function g(e,t,n,r,o,_,l,i,c,s){var f,h,y,m,b,g,$,D=r&&r.__k||u,S=D.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(m=n.__k[f]=null==(m=t[f])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(d,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=D[f])||y&&m.key==y.key&&m.type===y.type)D[f]=void 0;else for(h=0;h<S;h++){if((y=D[h])&&m.key==y.key&&m.type===y.type){D[h]=void 0;break}y=null}M(e,m,y=y||a,o,_,l,i,c,s),b=m.__e,(h=m.ref)&&y.ref!=h&&($||($=[]),y.ref&&$.push(y.ref,null,m),$.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=c=k(m,c,e):c=w(e,m,y,D,b,c),"function"==typeof n.type&&(n.__d=c)):c&&y.__e==c&&c.parentNode!=e&&(c=v(y))}for(n.__e=g,f=S;f--;)null!=D[f]&&("function"==typeof n.type&&null!=D[f].__e&&D[f].__e==n.__d&&(n.__d=v(r,f+1)),H(D[f],D[f]));if($)for(f=0;f<$.length;f++)E($[f],$[++f],$[++f])}function k(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t="function"==typeof r.type?k(r,t,n):w(n,r,r,o,r.__e,t));return t}function $(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){$(e,t)})):t.push(e)),t}function w(e,t,n,r,o,_){var l,a,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(a=_,u=0;(a=a.nextSibling)&&u<r.length;u+=2)if(a==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function D(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function S(e,t,n,r,o){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||D(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||D(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?x:C,_):e.removeEventListener(t,_?x:C,_);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function C(e){this.l[e.type+!1](t.event?t.event(e):e)}function x(e){this.l[e.type+!0](t.event?t.event(e):e)}function M(n,r,o,_,l,u,i,f,p){var y,m,b,k,$,w,D,C,x,M,P,E=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(p=o.__h,f=r.__e=o.__e,r.__h=null,u=[f]),(y=t.__b)&&y(r);try{e:if("function"==typeof E){if(C=r.props,x=(y=E.contextType)&&_[y.__c],M=y?x?x.props.value:y.__:_,o.__c?D=(m=r.__c=o.__c).__=m.__E:("prototype"in E&&E.prototype.render?r.__c=m=new E(C,M):(r.__c=m=new h(C,M),m.constructor=E,m.render=T),x&&x.sub(m),m.props=C,m.state||(m.state={}),m.context=M,m.__n=_,b=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=E.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=c({},m.__s)),c(m.__s,E.getDerivedStateFromProps(C,m.__s))),k=m.props,$=m.state,b)null==E.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==E.getDerivedStateFromProps&&C!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(C,M),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(C,m.__s,M)||r.__v===o.__v){m.props=C,m.state=m.__s,r.__v!==o.__v&&(m.__d=!1),m.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(e){e&&(e.__=r)})),m.__h.length&&i.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(C,m.__s,M),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,$,w)}))}m.context=M,m.props=C,m.state=m.__s,(y=t.__r)&&y(r),m.__d=!1,m.__v=r,m.__P=n,y=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(_=c(c({},_),m.getChildContext())),b||null==m.getSnapshotBeforeUpdate||(w=m.getSnapshotBeforeUpdate(k,$)),P=null!=y&&y.type===d&&null==y.key?y.props.children:y,g(n,Array.isArray(P)?P:[P],r,o,_,l,u,i,f,p),m.base=r.__e,r.__h=null,m.__h.length&&i.push(m),D&&(m.__E=m.__=null),m.__e=!1}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(t,n,r,o,_,l,u,i){var c,f,p,d=r.props,h=n.props,y=n.type,m=0;if("svg"===y&&(_=!0),null!=l)for(;m<l.length;m++)if((c=l[m])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){t=c,l[m]=null;break}if(null==t){if(null===y)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),l=null,i=!1}if(null===y)d===h||i&&t.data===h||(t.data=h);else{if(l=l&&e.call(t.childNodes),f=(d=r.props||a).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||S(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||S(e,_,t[_],n[_],r)}(t,h,d,_,i),p)n.__k=[];else if(m=n.props.children,g(t,Array.isArray(m)?m:[m],n,r,o,_&&"foreignObject"!==y,l,u,l?l[0]:r.__k&&v(r,0),i),null!=l)for(m=l.length;m--;)null!=l[m]&&s(l[m]);i||("value"in h&&void 0!==(m=h.value)&&(m!==t.value||"progress"===y&&!m||"option"===y&&m!==d.value)&&S(t,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==t.checked&&S(t,"checked",m,d.checked,!1))}return t}(o.__e,r,o,_,l,u,i,p);(y=t.diffed)&&y(r)}catch(n){r.__v=null,(p||null!=u)&&(r.__e=f,r.__h=!!p,u[u.indexOf(f)]=null),t.__e(n,r,o)}}function P(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function E(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function H(e,n,r){var o,_;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&H(o[_],n,"function"!=typeof e.type);r||null==e.__e||s(e.__e),e.__e=e.__d=void 0}function T(e,t,n){return this.constructor(e,n)}e=u.slice,t={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=d,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,l=0;var F=function(e,t,n,r){var o;t[0]=0;for(var _=1;_<t.length;_++){var l=t[_++],a=t[_]?(t[0]|=l?1:2,n[t[_++]]):t[++_];3===l?r[0]=a:4===l?r[1]=Object.assign(r[1]||{},a):5===l?(r[1]=r[1]||{})[t[++_]]=a:6===l?r[1][t[++_]]+=a+"":l?(o=e.apply(a,F(e,a,n,["",null])),r.push(o),a[0]?t[0]|=2:(t[_-2]=0,t[_]=o)):r.push(a)}return r},A=new Map;var N,O,U,R=function(e){var t=A.get(this);return t||(t=new Map,A.set(this,t)),(t=F(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",_="",l=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,o):3===r&&(e||o)?(l.push(3,e,o),r=2):2===r&&"..."===o&&e?l.push(4,e,0):2===r&&o&&!e?l.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(l.push(r,0,o,n),r=6),e&&(l.push(r,e,0,n),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&a(),a(u));for(var i=0;i<e[u].length;i++)t=e[u][i],1===r?"<"===t?(a(),l=[l],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:_?t===_?_="":o+=t:'"'===t||"'"===t?_=t:">"===t?(a(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[u][i+1])?(a(),3===r&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(),r=2):o+=t),3===r&&"!--"===o&&(r=4,l=l[0])}return a(),l}(e)),t),arguments,[])).length>1?t:t[0]}.bind(f),W=0,B=[],L=t.__b,Y=t.__r,V=t.diffed,j=t.__c,I=t.unmount;function K(e,n){t.__h&&t.__h(O,e,W||n),W=0;var r=O.__H||(O.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function q(e){return W=1,function(e,t,n){var r=K(N++,2);return r.t=e,r.__c||(r.__=[n?n(t):ne(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=O),r.__}(ne,e)}function z(e,n){var r=K(N++,3);!t.__s&&te(r.__H,n)&&(r.__=e,r.__H=n,O.__H.__h.push(r))}function J(e){return W=5,function(e,t){var n=K(N++,7);return te(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}((function(){return{current:e}}),[])}function G(e){var t=O.context[e.__c],n=K(N++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(O)),t.props.value):e.__}function Z(){for(var e;e=B.shift();)if(e.__P)try{e.__H.__h.forEach(X),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){O=null,L&&L(e)},t.__r=function(e){Y&&Y(e),N=0;var t=(O=e.__c).__H;t&&(t.__h.forEach(X),t.__h.forEach(ee),t.__h=[])},t.diffed=function(e){V&&V(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==B.push(n)&&U===t.requestAnimationFrame||((U=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),Q&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Q&&(t=requestAnimationFrame(n))})(Z)),O=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(X),e.__h=e.__h.filter((function(e){return!e.__||ee(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(r,e.__v)}})),j&&j(e,n)},t.unmount=function(e){I&&I(e);var n,r=e.__c;r&&r.__H&&(r.__H.__.forEach((function(e){try{X(e)}catch(e){n=e}})),n&&t.__e(n,r.__v))};var Q="function"==typeof requestAnimationFrame;function X(e){var t=O,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),O=t}function ee(e){var t=O;e.__c=e.__(),O=t}function te(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function ne(e,t){return"function"==typeof t?t(e):t}var re={wrapper:"daypicker",header:"daypicker__header",select:"daypicker__select",monthSelect:"daypicker__select--month",yearSelect:"daypicker__select--year",button:"daypicker__button",paginationButton:"daypicker__button--pagination",nextMonthButton:"daypicker__button--pagination-next",prevMonthButton:"daypicker__button--pagination-prev",yearMonthWrapper:"daypicker__year-month-wrapper",pagination:"daypicker__pagination",table:"daypicker__calendar",tableRow:"daypicker__calendar-row",tableCell:"daypicker__calendar-cell",tableHeaderRow:"daypicker__calendar-header-row",tableHeaderCell:"daypicker__calendar-header-cell",dayButton:"daypicker__day",isToday:"isToday",isSelected:"isSelected",srOnly:"sr-only",closeButton:"daypicker__button--close",toggleButton:"daypicker__button--toggle"};var oe={prevMonth:"previous month",nextMonth:"next month",month:"Month",year:"Year",weekdays:[{name:"Sunday",shortname:"Su"},{name:"Monday",shortname:"Mo"},{name:"Tuesday",shortname:"Tu"},{name:"Wednesday",shortname:"We"},{name:"Thursday",shortname:"Th"},{name:"Friday",shortname:"Fr"},{name:"Saturday",shortname:"Sa"}],months:["January","February","March","April","May","June","July","August","September","October","November","December"],openButton:"Choose date",closeButton:"Close"};function _e(e){return e instanceof Date&&!isNaN(e.valueOf())}function le(e,t=1){const n=new Date(e),r=e.getDay(),o=(r<t?7:0)+r-t;return new Date(n.setDate(n.getDate()-o))}function ae(e,t=1){const n=new Date(e),r=n.getDay(),o=6+(r<t?-7:0)-(r-t);return new Date(n.setDate(n.getDate()+o))}function ue(e,t){const n=new Date(e);n.setDate(1);const r=new Date(e);r.setMonth(e.getMonth()+1,0);return function(e,t){const n=[];let r=e;for(;r.getTime()!==t.getTime();)n.push(new Date(r)),r=new Date(r.setDate(r.getDate()+1));return n.push(new Date(r)),n}(le(n,t),ae(r,t))}function ie(e,t){return!(!_e(e)||!_e(t))&&(e.setHours(0,0,0,0),t.setHours(0,0,0,0),e.getTime()===t.getTime())}function ce(e,t){const n=new Date(e).setMonth(t),r=new Date(e.getFullYear(),t+1,0).getTime();return n>r?new Date(r):new Date(n)}const se=function(e,t){var n={__c:t="__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(m)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(),fe=()=>{const{firstDayOfWeek:e,classes:t,l10n:n,selected:r,setSelected:o,setView:_,handleKeyboardNavigation:l,focusedRef:a,view:u,disabledDayFn:i,locale:c}=G(se),s=function(e,t){const n=[...e],r=n.splice(0,t);return[...n,...r]}(n.weekdays,e),f=function(e){const t=[];for(let n=0;n<e.length;n+=7)t.push(e.slice(n,n+7));return t}(ue(u,e));return R`
    <table class="${t.table}">
      <thead>
        <tr class="${t.tableHeaderRow}">
          ${s.map((e=>R`
              <th scope="col" class="${t.tableHeaderCell}">
                <span class="${t.srOnly}">${e.name}</span>
                <span aria-hidden="true">${e.shortname}</span>
              </th>
            `))}
        </tr>
      </thead>
      <tbody>
        ${f.map((e=>R`
            <tr class="${t.tableRow}">
              ${e.map((e=>{const n=r&&ie(e,r),s=ie(e,u),f=!function(e,t){return e.getMonth()===t.getMonth()}(e,u)||i(e),p=(d=e,ie(new Date,d)?t.isToday:void 0);var d;const h=n?t.isSelected:void 0,v=[t.dayButton,p,h],y=s?"0":"-1",m=e.toLocaleDateString(c),b=s?a:void 0;return R`
                  <td role="gridcell" class="${t.tableCell}">
                    <button
                      class="${v.join(" ")}"
                      type="button"
                      onClick=${()=>{f||(o(e),_(e))}}
                      tabindex=${y}
                      onKeyUp=${l}
                      ref=${b}
                      aria-disabled=${f}
                      aria-label=${m}
                      aria-selected=${n}
                    >
                      <span class="${t.srOnly}">${m}</span>
                      <span aria-hidden="true">${e.getDate()}</span>
                    </button>
                  </td>
                `}))}
            </tr>
          `))}
      </tbody>
    </table>
  `};function pe(e,t){for(var n in t)e[n]=t[n];return e}function de(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function he(e){this.props=e}(he.prototype=new h).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(e,t){return de(this.props,e)||de(this.state,t)};var ve=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ve&&ve(e)};var ye="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function me(e){function t(t,n){var r=pe({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=ye,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var be=t.__e;t.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);be(e,t,n)};var ge=t.unmount;function ke(){this.__u=0,this.t=null,this.__b=null}function $e(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function we(){this.u=null,this.o=null}t.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),ge&&ge(e)},(ke.prototype=new h).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=$e(r.__v),_=!1,l=function(){_||(_=!0,n.__R=null,o?o(a):a())};n.__R=l;var a=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},u=!0===t.__h;r.__u++||u||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(l,l)},ke.prototype.componentWillUnmount=function(){this.t=[]},ke.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=pe({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&f(d,null,e.fallback);return o&&(o.__h=null),[f(d,null,t.__e?null:e.children),o]};var De=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(we.prototype=new h).__e=function(e){var t=this,n=$e(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),De(t,e,r)):o()};n?n(_):_()}},we.prototype.render=function(e){this.u=null,this.o=new Map;var t=$(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},we.prototype.componentDidUpdate=we.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){De(e,n,t)}))};var Se="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Ce=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xe="undefined"!=typeof document,Me=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(h.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var Pe=t.event;function Ee(){}function He(){return this.cancelBubble}function Te(){return this.defaultPrevented}t.event=function(e){return Pe&&(e=Pe(e)),e.persist=Ee,e.isPropagationStopped=He,e.isDefaultPrevented=Te,e.nativeEvent=e};var Fe={configurable:!0,get:function(){return this.class}},Ae=t.vnode;t.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){var o=-1===t.indexOf("-");for(var _ in r={},n){var l=n[_];xe&&"children"===_&&"noscript"===t||"value"===_&&"defaultValue"in n&&null==l||("defaultValue"===_&&"value"in n&&null==n.value?_="value":"download"===_&&!0===l?l="":/ondoubleclick/i.test(_)?_="ondblclick":/^onchange(textarea|input)/i.test(_+t)&&!Me(n.type)?_="oninput":/^onfocus$/i.test(_)?_="onfocusin":/^onblur$/i.test(_)?_="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(_)?_=_.toLowerCase():o&&Ce.test(_)?_=_.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===l&&(l=void 0),r[_]=l)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=$(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=$(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(Fe.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",Fe))}e.$$typeof=Se,Ae&&Ae(e)};var Ne=t.__r;t.__r=function(e){Ne&&Ne(e)};const Oe=me((({label:e,value:t,options:n,onChange:r,className:o,elemRef:_,...l},a)=>{const{classes:u}=G(se);return R`
      <label>
        <span class="sr-only">${e}</span>
        <select
          className="${function(...e){return e.join(" ").trim()}(u.select,o)}"
          onChange=${e=>r(e)}
          ref=${a}
          ${{...l}}
        >
          ${n.map((e=>R`
              <option
                value=${e?.value||e}
                selected=${t===e?.value||t===e?"selected":void 0}
              >
                ${e?.text?e.text:e}
              </option>
            `))}
        </select>
      </label>
    `}));const Ue=me(((e,t)=>{const{l10n:n,min:r,max:o,view:_,setView:l,classes:a}=G(se),u=new Date(r).getFullYear(),i=new Date(o).getFullYear();return R`<${Oe}
    label=${n.year}
    options=${function(e,t){const n=[];for(let r=e;r<=t;r++)n.push(r);return n}(u,i)}
    value=${_.getFullYear()}
    className=${a.yearSelect}
    onChange=${e=>{const t=new Date(_);t.setFullYear(parseInt(e.target.value,10)),l(t)}}
    ref=${t}
    ...${e}
  />`})),Re=()=>{const{l10n:e,view:t,setView:n,classes:r}=G(se);return R`<${Oe}
    label=${e.month}
    value=${t.getMonth()}
    className=${r.monthSelect}
    options=${e.months.map(((e,t)=>({value:t,text:e})))}
    onChange=${e=>{const r=new Date(t);r.setMonth(parseInt(e.target.value,10)),n(r)}}
  />`},We=({min:e="1900-01-01",max:n="2100-12-31",classes:r=re,selectedDay:o,firstDayOfWeek:_=1,locale:l={},disabledDayFn:a=(()=>{}),onSelect:u=(()=>{}),formatDate:i=(e=>function(e){return!e||!e instanceof Date?"":`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}(e)),parseDate:c=(e=>{const t=e.match(/(\d{2})\/(\d{2})\/(\d{4})/);return!!t&&new Date(t[3],t[2]-1,t[1])}),name:s,id:f})=>{const[p,d]=q(o?new Date(o):new Date),[h,v]=q(o?new Date(o):void 0),[y,m]=q(!1),b=J(),g=J(),k=J(),$=J(),w=J(),D=J();z((()=>{u(h),m(!1)}),[h]),z((()=>{const e=e=>{"Tab"===e.key&&y&&(e.shiftKey||document.activeElement!==D.current||(e.preventDefault(),$.current.focus()),e.shiftKey&&document.activeElement===$.current&&(e.preventDefault(),D.current.focus()))},t=e=>{"Escape"===e.key&&y&&m(!1)};return document.addEventListener("keydown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keydown",t)}}),[y,D.current,$.current]),z((()=>{const e=e=>{!w.current.contains(e.target)&&y&&m(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[y,w.current]),function(e,n){var r=K(N++,4);!t.__s&&te(r.__H,n)&&(r.__=e,r.__H=n,O.__h.push(r))}((()=>{if(y)$.current.focus();else{if(document.activeElement===b.current)return;k.current.focus()}}),[y,$.current,k.current,b.current]);const S=e=>ce(e,e.getMonth()-1),C=e=>ce(e,e.getMonth()+1),x=()=>{m(!y)};return R`
    <${se.Provider}
      value=${{firstDayOfWeek:_,classes:r,l10n:oe,min:e,max:n,view:p,setView:d,selected:h,setSelected:v,handleKeyboardNavigation:e=>{let t=new Date(p);const n={ArrowLeft:()=>{t.setDate(p.getDate()-1)},ArrowRight:()=>{t.setDate(p.getDate()+1)},ArrowUp:()=>{t.setDate(p.getDate()-7)},ArrowDown:()=>{t.setDate(p.getDate()+7)},PageUp:()=>{e.shiftKey?t.setFullYear(p.getFullYear()-1):t=S(p)},PageDown:()=>{e.shiftKey?t.setFullYear(p.getFullYear()+1):t=C(p)},Home:()=>{t=le(p,_)},End:()=>{t=ae(p,_)}};Object.keys(n).includes(e.key)&&(e.preventDefault(),n[e.key]?.(),d(t),setTimeout((()=>{g.current.focus()}),0))},focusedRef:g,disabledDayFn:a,locale:l}}
    >
      <input
        id=${f}
        type="text"
        class=${r.input}
        value=${h&&h.toLocaleDateString(l)}
        onChange=${e=>(e=>{""===e.target.value&&v(void 0);const t=c(e.target.value);if(t)return d(t),v(t)})(e)}
        ref=${b}
      />
      <input type="hidden" id=${`${f}-value`} value=${i(h)} name=${s} />
      <button
        type="button"
        aria-controls="${f}-dialog"
        onClick=${()=>x()}
        aria-expanded=${y}
        ref=${k}
        class=${r.toggleButton}
      >
        ${oe.openButton}
      </button>
      <div
        class=${r.wrapper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="daypicker-label"
        hidden=${!y}
        ref=${w}
      >
        <div class="daypicker__content">
          <h2 id="daypicker-label" class="sr-only">${p.getFullYear()} ${p.getMonth()}</h2>
          <div class="${r.header}">
            <div class="${r.yearMonthWrapper}">
              <${Ue} ref=${$} />
              <${Re} />
            </div>

            <div class="${r.pagination}">
              <button
                type="button"
                class="${r.button} ${r.prevMonthButton}"
                onClick=${()=>{d(S(p))}}
              >
                ${oe.prevMonth}
              </button>
              <button
                type="button"
                class="${r.button} ${r.nextMonthButton}"
                onClick=${()=>{d(C(p))}}
              >
                ${oe.nextMonth}
              </button>
            </div>
          </div>
          <${fe} />
          <button
            class="${r.button} ${r.closeButton}"
            type="button"
            onClick=${()=>x()}
            ref=${D}
          >
            ${oe.closeButton}
          </button>
        </div>
      </div>
    <//>
  `};return function(n,r){!function(n,r,o){var _,l,u;t.__&&t.__(n,r),l=(_="function"==typeof o)?null:o&&o.__k||r.__k,u=[],M(r,n=(!_&&o||r).__k=f(d,null,[n]),l||a,a,void 0!==r.ownerSVGElement,!_&&o?[o]:l?null:r.firstChild?e.call(r.childNodes):null,u,!_&&o?o:l?l.__e:r.firstChild,_),P(u,n)}(R`<${We} ...${r} />`,n)}}));
//# sourceMappingURL=daypicker.js.map
