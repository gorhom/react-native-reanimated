(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),i=(n(0),n(269)),o={id:"useDerivedValue",title:"useDerivedValue",sidebar_label:"useDerivedValue"},l={id:"version-2.0.0-alpha.9/api/useDerivedValue",title:"useDerivedValue",description:"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values.",source:"@site/versioned_docs/version-2.0.0-alpha.9/api/useDerivedValue.md",permalink:"/react-native-reanimated/docs/api/useDerivedValue",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha.9/api/useDerivedValue.md",version:"2.0.0-alpha.9",sidebar_label:"useDerivedValue",sidebar:"version-2.0.0-alpha.9/docs",previous:{title:"useAnimatedStyle",permalink:"/react-native-reanimated/docs/api/useAnimatedStyle"},next:{title:"useAnimatedScrollHandler",permalink:"/react-native-reanimated/docs/api/useAnimatedScrollHandler"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This hook allows for creating shared value reference that can change in response to updating of one or more other shared values."),Object(i.b)("p",null,"The hook returns the same type of a shared value reference instance as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"useSharedValue"}),Object(i.b)("inlineCode",{parentName:"a"},"useSharedValue"))," hook."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"updaterworklet-worklet"},Object(i.b)("inlineCode",{parentName:"h4"},"updaterWorklet")," ","[worklet]"),Object(i.b)("p",null,"The first argument is a worklet that gets triggered whenever at least one of the shared values used in that worklet changes.\nIt is expected that the worklet return a new JS value (number, string, bool, Object, Array) that will be assigned to the shared value reference the hook returns.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"updaterWorklet")," will be triggered immediately upon use of this hook in order to calculate the initial payload for the returned shared value."),Object(i.b)("h4",{id:"dependencies-array"},Object(i.b)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),Object(i.b)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{7}","{7}":!0}),"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(state);\n\n  const derived = useDerivedValue(() => {\n    return sv.value * state;\n  }, dependencies);\n  //...\n  return <></>\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in it's body or any values from it's closure(variables from outer scope used in worklet),"),Object(i.b)("li",{parentName:"ul"},"empty array(",Object(i.b)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if it's body changes,"),Object(i.b)("li",{parentName:"ul"},"array of values(",Object(i.b)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in it's body or any values from the given array.")),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"The hook returns a reference to a shared value initialized with the provided data.\nThe reference is an object with ",Object(i.b)("inlineCode",{parentName:"p"},".value")," property, that can be accessed and modified from worklets, but also updated directly from the main JS thread."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In the below example we define a shared value named ",Object(i.b)("inlineCode",{parentName:"p"},"progress")," that can go from 0 to 1.\nThen defined a derived shared value ",Object(i.b)("inlineCode",{parentName:"p"},"width")," that will respond to progress changes.\nWe calculate ",Object(i.b)("inlineCode",{parentName:"p"},"width"),"'s value in the ",Object(i.b)("inlineCode",{parentName:"p"},"useDerivedValue")," worklet as a product of ",Object(i.b)("inlineCode",{parentName:"p"},"progress"),"'s value times 250.\nAs a result ",Object(i.b)("inlineCode",{parentName:"p"},"width"),"'s value will always stay in sync with changes made to ",Object(i.b)("inlineCode",{parentName:"p"},"progress")," shared value and will be equal to the ",Object(i.b)("inlineCode",{parentName:"p"},"progress"),"s value times 250."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{6}","{6}":!0}),"import { Button } from 'react-native';\nimport { useSharedValue, useDerivedValue } from 'react-native-reanimated';\n\nfunction App() {\n  const progress = useSharedValue(0);\n  const width = useDerivedValue(() => {\n    return progress.value * 250;\n  });\n\n  return (\n    <View>\n      <SomeComponent width={width} />\n      <Button onPress={() => (progress.value = Math.random())} />\n    </View>\n  );\n}\n")))}c.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);