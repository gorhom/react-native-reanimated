(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(300)),i={id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},c={id:"version-2.0.0-rc.2/troubleshooting",title:"Troubleshooting common problems",description:"TypeError: Cannot convert undefined value to object on someVariable._closure",source:"@site/versioned_docs/version-2.0.0-rc.2/troubleshooting.md",permalink:"/react-native-reanimated/docs/troubleshooting",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-rc.2/troubleshooting.md",version:"2.0.0-rc.2",sidebar_label:"Troubleshooting",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"Web Support",permalink:"/react-native-reanimated/docs/web-support"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/api/useSharedValue"}},l=[{value:"<code>TypeError: Cannot convert undefined value to object</code> on <code>someVariable._closure</code>",id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure",children:[]},{value:"<code>undefined is not an object (evaluating &#39;_toConsumableArray(Array(length)).map&#39;)</code>",id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure"},Object(o.b)("inlineCode",{parentName:"h3"},"TypeError: Cannot convert undefined value to object")," on ",Object(o.b)("inlineCode",{parentName:"h3"},"someVariable._closure")),Object(o.b)("p",null,"This error frequently happens when metro cache is not updated. Clear it with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"watchman watch-del-all\nyarn start --reset-cache\n")),Object(o.b)("p",null,"Also, make sure that you installed the babel plugin."),Object(o.b)("h3",{id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap"},Object(o.b)("inlineCode",{parentName:"h3"},"undefined is not an object (evaluating '_toConsumableArray(Array(length)).map')")),Object(o.b)("p",null,"This error shows when you use spread (",Object(o.b)("inlineCode",{parentName:"p"},"...array"),") inside worklets. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-reanimated/docs/about#known-problems-and-limitations"}),"Known problems and limitations")," section for more information about spread support.\nDepending on how spread is used you may try one of the following alternatives:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"copying array: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"}),Object(o.b)("inlineCode",{parentName:"a"},"array.slice()"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"[...Array(length)].map")," idiom: ",Object(o.b)("inlineCode",{parentName:"li"},"Array(length).fill().map()")),Object(o.b)("li",{parentName:"ul"},"merging objects: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),Object(o.b)("inlineCode",{parentName:"a"},"Object.assign()"))),Object(o.b)("li",{parentName:"ul"},"spreading args in function: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"}),Object(o.b)("inlineCode",{parentName:"a"},"func.apply()")))))}s.isMDXComponent=!0},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);