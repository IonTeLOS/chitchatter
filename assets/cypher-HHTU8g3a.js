import{g as N}from"./index-wxBfo-_d.js";function p(e,n){for(var o=0;o<n.length;o++){const r=n[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const E=Object.getOwnPropertyDescriptor(r,t);E&&Object.defineProperty(e,t,E.get?E:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,s;function u(){if(s)return a;s=1,a=e,e.displayName="cypher",e.aliases=[];function e(n){n.languages.cypher={comment:/\/\/.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,greedy:!0},"class-name":{pattern:/(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,lookbehind:!0,greedy:!0},relationship:{pattern:/(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,lookbehind:!0,greedy:!0,alias:"property"},identifier:{pattern:/`(?:[^`\\\r\n])*`/,greedy:!0},variable:/\$\w+/,keyword:/\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,function:/\b\w+\b(?=\s*\()/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,operator:/:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,punctuation:/[()[\]{},;.]/}}return a}var i=u();const A=N(i),S=p({__proto__:null,default:A},[i]);export{S as c};
//# sourceMappingURL=cypher-HHTU8g3a.js.map
