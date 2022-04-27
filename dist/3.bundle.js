(window.webpackJsonp=window.webpackJsonp||[]).push([[3,9],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.clone=function(e){var t=e.title,n=e.description,r=e.base,a=e.canonical,o=e.meta,i=e.link,l=e.auto;try{return JSON.parse(JSON.stringify({title:t,description:n,base:r,canonical:a,meta:o,link:i,auto:l}))}catch(e){return{}}},t.defaults=function e(t,n){return Object.keys(n).reduce((function(a,o){return t.hasOwnProperty(o)?"object"===r(t[o])&&!Array.isArray(t[o])&&t[o]&&e(t[o],n[o]):t[o]=n[o],t}),t)},t.forEach=function(e,t){e&&e.length&&Array.prototype.slice.call(e).forEach(t)}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.render=g;var o=n(0),i=s(o),l=s(n(1)),c=s(n(109)),u=n(107),f=n(112);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r="link"===e?"href":"content";return Object.keys(t).forEach((function(a){var o=t[a];"string"!=typeof o?Object.keys(o).forEach((function(t){(Array.isArray(o[t])?o[t]:[o[t]]).forEach((function(o){var i;null!==o&&n.push((y(i={tagName:e},a,t),y(i,r,o),i))}))})):n.push(y({tagName:e},a,o))})),n}function b(e){return[].concat(h("meta",e.meta),h("link",e.link))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=[];function r(e){var n=e.tagName,r=m(e,["tagName"]);return"meta"===n?i.default.createElement("meta",a({},r,{key:t++,"data-rdm":!0})):"link"===n?i.default.createElement("link",a({},r,{key:t++,"data-rdm":!0})):null}return e.title&&n.push(i.default.createElement("title",{key:t++},e.title)),b(e).reduce((function(e,t){return e.push(r(t)),e}),n)}var v=function(e){function t(){return d(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children,t=i.default.Children.count(e);return 1===t?i.default.Children.only(e):t?i.default.createElement("div",null,this.props.children):null}}]),t}(o.Component);v.propTypes={title:l.default.oneOfType([l.default.string,l.default.func]),description:l.default.oneOfType([l.default.string,l.default.func]),canonical:l.default.oneOfType([l.default.string,l.default.func]),base:l.default.string,meta:l.default.objectOf(l.default.oneOfType([l.default.string,l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))])),link:l.default.objectOf(l.default.objectOf(l.default.oneOfType([l.default.string,l.default.arrayOf(l.default.string)]))),auto:l.default.objectOf(l.default.bool)};var w=(0,c.default)((function(e){for(var t={},n={title:void 0,description:void 0,canonical:void 0},r=!0,a=function(){r=e[o].hasOwnProperty("extend");var a=e[o],i=(0,u.clone)(e[o]);["title","description","canonical"].forEach((function(e){a.hasOwnProperty(e)&&("function"==typeof a[e]?n[e]=a[e](n[e]):void 0===n[e]&&(n[e]=a[e]))})),(0,u.defaults)(t,i)},o=e.length-1;r&&o>=0;o--)a();return"string"==typeof n.title&&(t.title=n.title),"string"==typeof n.description&&(0,u.defaults)(t,{meta:{name:{description:n.description}}}),"string"==typeof n.canonical&&(0,u.defaults)(t,{link:{rel:{canonical:n.canonical}}}),t.auto&&t.auto.ograph&&function(e){e.meta||(e.meta={});e.meta.property||(e.meta.property={});var t=e.meta.property;t&&(e.title&&!t["og:title"]&&(t["og:title"]=e.title),e.hasOwnProperty("description")&&!t["og:description"]&&(t["og:description"]=e.description),e.hasOwnProperty("canonical")&&!t["og:url"]&&(t["og:url"]=e.canonical))}(t),t}),(function(e){f.canUseDOM&&("string"==typeof e.title&&(document.title=e.title),(0,f.insertDocumentMeta)(b(e)))}))(v);w.renderAsReact=function(){return g(w.rewind())},t.default=w},109:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(0),o=r(a),i=r(n(110)),l=r(n(111));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var f=[],s=void 0;function d(){s=e(f.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){function t(){return c(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!l(e,this.props)},t.prototype.componentWillMount=function(){f.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),d()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return p.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",p.canUseDOM=i.canUseDOM,p}}},110:function(e,t,n){var r;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},111:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!l(u))return!1;var f=e[u],s=t[u];if(!1===(a=n?n.call(r,f,s,u):void 0)||void 0===a&&f!==s)return!1}return!0}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0,t.removeDocumentMeta=o,t.insertDocumentMeta=function(e){o(),(0,r.forEach)(e,i)};var r=n(107);t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function a(e){e.parentNode.removeChild(e)}function o(){(0,r.forEach)(document.querySelectorAll("head [data-rdm]"),a)}function i(e){var t=e.tagName,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName"]),r=document.createElement(t);for(var a in n)e.hasOwnProperty(a)&&r.setAttribute(a,e[a]);r.setAttribute("data-rdm",""),document.getElementsByTagName("head")[0].appendChild(r)}},113:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(1),l=n.n(i),c=n(6),u=n(48),f=n(24),s=n(4),d=n(5),p=["className","urlHead","data","large"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=function(e){var t=e.className,n=e.urlHead,r=e.data,a=e.large,i=y(e,p),l=r.demo?r.id:"",c=r.demo?"".concat(n,"/").concat(l):void 0,d=r.url||void 0,h=r.caption||r.title,b=r.img,g=r.imgFull||r.img,v=r.demo?void 0:d||g;return o.a.createElement("div",m({className:"".concat(a?"col-lg-12":""," ").concat(t)},Object(s.a)(i)),o.a.createElement("div",{className:"content"},o.a.createElement("p",{className:"title"},r.title),r.demo&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.f,{id:l,to:c,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(f.a,{large:!0,keyword:"Demo Video",to:c})),!r.demo&&r.url&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.f,{href:v,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(f.a,{large:!0,keyword:"Live Demo",href:v})),!r.demo&&!r.url&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.f,{href:v,title:h},o.a.createElement(u.a,{title:h,src:b})),o.a.createElement(f.a,{large:!0,keyword:"View Screenshot",href:v}))))};h.displayName="DemoItemUnstyled",h.propTypes={className:l.a.string,urlHead:l.a.string,data:l.a.object,large:l.a.bool},h.defaultProps={className:"",urlHead:"",data:{},large:!1};var b,g,v=Object(c.a)(h)(r||(b=["\n  margin: 15px auto;\n  border-radius: 2px;\n\n  .content {\n    background-color: ",";\n    padding: 10px;\n    position: relative;\n    transition: all 0.3s ease-in-out;\n\n    > a > .imageloader {\n      & > img, & > .preloader {\n        ","\n        margin: 0 auto;\n      }\n      & > .preloader {\n        ","\n      }\n    }\n\n    p.title {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &:hover {\n      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.35);\n      transform: translate(0, -10px);\n      opacity: 1;\n\n      p.title {\n        font-size: 1rem;\n        white-space: normal;\n        position: absolute;\n      }\n\n      .imageloader {\n        margin-top: 2.5rem;\n      }\n\n      .badge {\n        display: block;\n        z-index: 10;\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background: #202121;\n        opacity: 0.3;\n        z-index: 0;\n      }\n    }\n\n    .badge {\n      display: none;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    .title {\n      font-weight: bold;\n      background: ",";\n      color: ",";\n      padding: 2px 5px;\n      opacity: 0.7;\n      transition: font-size 0.5s ease-in-out;\n    }\n  \n    .tags {\n      margin-top: 5px;\n      text-align: left;\n\n      .badge {\n          margin-right:5px;\n      }\n    }\n  }\n"],g||(g=b.slice(0)),r=Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(g)}}))),d.c,(function(e){return e.large?"\n          height: auto;\n        ":"\n          height: 150px;\n          width: 280px;\n        "}),(function(e){return e.large?"\n          @media (min-width: 768px) {\n            height: 500px;\n          }\n          @media (min-width: 576px) and (max-width: 768px) {\n            height: 300px;\n          }\n          @media (max-width: 576px) {\n            height: 100px;\n          }\n        ":""}),d.j,d.e);t.default=v},116:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=[{name:"all",title:"All"},{name:"featured",title:"Featured"},{name:"workbench",title:"Translation Workbench"},{name:"erp",title:"ERP System"},{name:"website",title:"Web Products"},{name:"msword",title:"MS Word Development"},{name:"scidict",title:"SCIDict"}],a=[{name:"",title:"Artificial Intelligence",line:1},{name:"nlp",title:"Natural Language Processing",line:1},{name:"ir",title:"Information Retrieval",line:1},{name:"ml",title:"Machine Learning",line:1},{name:"",title:"Computer Vision",line:1},{name:"algorithm",title:"Algorithm Analysis and Data Structures",line:2},{name:"",title:"Database Design",line:2},{name:"os",title:"Operating Systems Concepts",line:2},{name:"",title:"Discrete Structure",line:2},{name:"",title:"Computer Architecture",line:2},{name:"",title:"Cloud Computing",line:3},{name:"web",title:"Web Programming Languages",line:3},{name:"hci",title:"Human Computer Interaction",line:3}],o=function(e){return(a.find((function(t){return t.name===e}))||{}).title||""},i=a},129:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(1),l=n.n(i),c=n(6),u=n(108),f=n.n(u),s=n(4),d=n(24),p=n(42),m=n(116),y=n(113),h=n(5),b="\n    .demos {\n        div.row > div {\n            margin: 0 auto 30px;\n        }\n    }\n\n    ul#myBtnContainer {\n        padding: 0;\n        position: sticky;\n        top: 100px;\n        left: 0;\n        width: 100%;\n        min-width: 210px;\n        z-index: 10;\n        list-style-type: none;\n\n        li {\n            border: none;\n            outline: none;\n            padding: 8px 16px;\n            cursor: pointer;\n            text-align: end;\n            color: ".concat(h.d,";\n            > i {\n                font-size: 1.2rem;\n                margin-right: 10px;\n            }\n        }\n\n        li:hover, li.active {\n            color: ").concat(h.a,";\n            box-shadow: none;\n            font-weight: bold;\n        }\n    }\n\n    @media (max-width: 960px) {\n        ul#myBtnContainer {\n            display: flex;\n            flex-wrap: wrap;\n            padding: 0 30px;\n        }\n        \n        .col-md-9 {\n            -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n            max-width: 100%;\n        }\n    }\n");function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=function(e){var t=Object(s.d)(e),n=e.match.params,r=n.subject,i=void 0===r?"all":r,l=n.activedemo,c=void 0===l?"":l,u=g(Object(a.useState)(null),2),h=u[0],b=u[1],v="all"!==i?p.k.filter((function(e){return e.keywords.includes(i)})):p.k;Object(a.useEffect)((function(){if(c){var e=p.k.find((function(e){return e.id===c}));if(e){var t=Object(s.h)(e.id)||void 0;b({url:t})}}}),[c]);return o.a.createElement(f.a,t,o.a.createElement("div",{className:"product-view ".concat(e.className)},o.a.createElement("div",{className:"row"},o.a.createElement("div",null,o.a.createElement("ul",{id:"myBtnContainer"},m.c.map((function(e,t){var n=e.name===i?"active":"",r="active"!==n;return o.a.createElement("li",{key:t,className:n},!r&&o.a.createElement(d.l,null),o.a.createElement(d.f,{to:"/product/".concat(e.name),dull:r},e.title))})))),o.a.createElement("div",{className:"col-md-9"},o.a.createElement("div",{className:"demos container-fluid"},o.a.createElement("div",{className:"row"},v.map((function(e,t){return o.a.createElement(y.default,{key:t,data:e,large:!0,urlHead:"/product/".concat(i)})}))))))),h&&o.a.createElement(d.h,{visible:!!h,onClose:function(){return b(null)},url:h&&h.url}))};w.displayName="Product",w.propTypes={title:l.a.string,description:l.a.string,keywords:l.a.string,subject:l.a.string,match:l.a.object,className:l.a.string},w.defaultProps={title:"",description:"",keywords:"",subject:"",match:{},className:""};var O,E,j=Object(c.a)(w)(r||(O=["",""],E||(E=O.slice(0)),r=Object.freeze(Object.defineProperties(O,{raw:{value:Object.freeze(E)}}))),b);t.default=j}}]);