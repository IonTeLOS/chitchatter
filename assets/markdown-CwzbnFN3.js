import{g as S}from"./index-wxBfo-_d.js";function E(l,b){for(var e=0;e<b.length;e++){const s=b[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in l)){const d=Object.getOwnPropertyDescriptor(s,o);d&&Object.defineProperty(l,o,d.get?d:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var m,_;function C(){if(_)return m;_=1,m=l,l.displayName="markdown",l.aliases=["md"];function l(b){(function(e){var s=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function o(t){return t=t.replace(/<inner>/g,function(){return s}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+t+")")}var d=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,f=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return d}),h=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+f+h+"(?:"+f+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+f+h+")(?:"+f+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(d),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+f+")"+h+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+f+"$"),inside:{"table-header":{pattern:RegExp(d),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:o(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:o(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:o(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:o(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(t){["url","bold","italic","strike","code-snippet"].forEach(function(n){t!==n&&(e.languages.markdown[t].inside.content.inside[n]=e.languages.markdown[n])})}),e.hooks.add("after-tokenize",function(t){if(t.language!=="markdown"&&t.language!=="md")return;function n(i){if(!(!i||typeof i=="string"))for(var r=0,p=i.length;r<p;r++){var u=i[r];if(u.type!=="code"){n(u.content);continue}var g=u.content[1],a=u.content[3];if(g&&a&&g.type==="code-language"&&a.type==="code-block"&&typeof g.content=="string"){var c=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");c=(/[a-z][\w-]*/i.exec(c)||[""])[0].toLowerCase();var k="language-"+c;a.alias?typeof a.alias=="string"?a.alias=[a.alias,k]:a.alias.push(k):a.alias=[k]}}}n(t.tokens)}),e.hooks.add("wrap",function(t){if(t.type==="code-block"){for(var n="",i=0,r=t.classes.length;i<r;i++){var p=t.classes[i],u=/language-(.+)/.exec(p);if(u){n=u[1];break}}var g=e.languages[n];if(g)t.content=e.highlight($(t.content.value),g,n);else if(n&&n!=="none"&&e.plugins.autoloader){var a="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);t.attributes.id=a,e.plugins.autoloader.loadLanguages(n,function(){var c=document.getElementById(a);c&&(c.innerHTML=e.highlight(c.textContent,e.languages[n],n))})}}});var y=RegExp(e.languages.markup.tag.pattern.source,"gi"),v={amp:"&",lt:"<",gt:">",quot:'"'},x=String.fromCodePoint||String.fromCharCode;function $(t){var n=t.replace(y,"");return n=n.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(i,r){if(r=r.toLowerCase(),r[0]==="#"){var p;return r[1]==="x"?p=parseInt(r.slice(2),16):p=Number(r.slice(1)),x(p)}else{var u=v[r];return u||i}}),n}e.languages.md=e.languages.markdown})(b)}return m}var w=C();const R=S(w),N=E({__proto__:null,default:R},[w]);export{N as m};
//# sourceMappingURL=markdown-CwzbnFN3.js.map
