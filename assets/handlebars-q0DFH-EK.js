import{g as i}from"./index-wxBfo-_d.js";import{r as d}from"./markup-templating-Z9zsrg3V.js";function b(n,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(e,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,l;function g(){if(l)return o;l=1;var n=d();o=r,r.displayName="handlebars",r.aliases=["hbs"];function r(t){t.register(n),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",function(a){var s=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;e.languages["markup-templating"].buildPlaceholders(a,"handlebars",s)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")}),e.languages.hbs=e.languages.handlebars}(t)}return o}var u=g();const p=i(u),h=b({__proto__:null,default:p},[u]);export{h};
//# sourceMappingURL=handlebars-q0DFH-EK.js.map
