import{g as l}from"./index-wxBfo-_d.js";function p(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(t,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function u(){if(i)return a;i=1,a=e,e.displayName="processing",e.aliases=[];function e(r){r.languages.processing=r.languages.extend("clike",{keyword:/\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,function:/\b\w+(?=\s*\()/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),r.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,alias:"class-name"}})}return a}var c=u();const g=l(c),b=p({__proto__:null,default:g},[c]);export{b as p};
//# sourceMappingURL=processing-9MvlqmdX.js.map
