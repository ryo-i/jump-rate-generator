(this["webpackJsonpreact-from-meta-lang"]=this["webpackJsonpreact-from-meta-lang"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"data":{"header":{"title":"\u30b8\u30e3\u30f3\u30d7\u7387\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc","text":"\u6587\u5b57\u30b8\u30e3\u30f3\u30d7\u7387\u3092\u52d5\u7684\u306b\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059"},"main":{"title":"\u30b8\u30e3\u30f3\u30d7\u7387\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc","text":"\u884c\u9577\u3001\u884c\u9593\u3001\u30b8\u30e3\u30f3\u30d7\u7387\u306a\u3069\u3092\u5909\u3048\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"},"about":{"title":"\u3053\u306e\u30a2\u30d7\u30ea\u306b\u3064\u3044\u3066","text":"\u6587\u5b57\u306e\u30b8\u30e3\u30f3\u30d7\u7387\u3092\u52d5\u7684\u306b\u5909\u66f4\u3057\u305f\u753b\u9762\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"},"inner":[{"title":"CSS\uff08\u6587\u5b57\u8272\uff09","text":"CSS\u3067\u30bf\u30a4\u30c8\u30eb\u306e\u6587\u5b57\u8272\u5909\u66f4\u3002"},{"title":"JS\uff08\u6587\u5b57\u5217\uff09","text":"JS\u3067\u30c6\u30ad\u30b9\u30c8\u306e\u6587\u5b57\u5217\u8ffd\u52a0\u300c<span class=\'hello\'></span>\u300d"}],"footer":{"text":"\xa9\ufe0fjump-rate-generator"}}}')},12:function(e){e.exports=JSON.parse('{"variable":{"baseColor":"#A63744","textColor":"#333","textColor_w":"#fff","bgColor_g":"#eee","textSize":"14px"}}')},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n(0),i=n.n(a),j=n(23),s=n.n(j),o=n(10),l=n(8);function b(){var e=Object(c.a)(["\n    width: 100%;\n    max-width: 1000px;\n    padding: 20px;\n    margin: 0 auto;\n"]);return b=function(){return e},e}var x=Object(l.b)(b()),h=n(12),d=n(13);function u(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n  background: ",";\n  padding: 20px;\n  & h2 {\n    font-size: 2em;\n  }\n  & nav span {\n    padding-right: 0.5em;\n  }\n"]);return u=function(){return e},e}var O=h.variable,f=o.data.header.title,p=o.data.header.text,m="/jump-rate-generator",g=l.c.header(u(),x,O.bgColor_g);var v=function(){return Object(r.jsxs)(g,{children:[Object(r.jsx)("h2",{children:f}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:p}}),Object(r.jsxs)("nav",{children:[Object(r.jsx)("span",{children:"MENU:"}),Object(r.jsx)("span",{children:Object(r.jsx)(d.b,{to:m+"/",children:"Home"})}),Object(r.jsx)("span",{children:Object(r.jsx)(d.b,{to:m+"/about",children:"About"})})]})]})},S=n(20),C=n(29);function y(){var e=Object(c.a)(["\n  width: 50%;\n"]);return y=function(){return e},e}var _=l.c.input(y()),w=function(e){var t=e.target.value;console.log(t)};var z=function(){var e=Object(a.useState)(35),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u884c\u9577"}),Object(r.jsxs)("p",{children:["\u5024\uff1a",n]}),Object(r.jsx)(_,{type:"range",name:"range",min:"10",max:"50",defaultValue:n,onChange:function(e){var t=Number(e.target.value);console.log(t),c(t)}})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u884c\u9593"}),Object(r.jsx)(_,{type:"range",name:"range",min:"1",max:"2.5",value:"1.75",step:"0.01",onChange:w})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30b8\u30e3\u30f3\u30d7\u7387"}),Object(r.jsx)(_,{type:"range",name:"range",min:"100",max:"400",value:"200",onChange:w})]})]})};var T=function(){return Object(r.jsx)("div",{className:"inner",children:Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"\u30a4\u30a4\u30c0\u30ea\u30e7\u30a6"}),Object(r.jsx)("p",{children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3002\u795e\u5948\u5ddd\u306b\u4f4f\u307e\u3046\u56db\u5341\u8def\u306e\u30aa\u30b8\u30ad\u3002 DTP\u2192Web\u30c7\u30b6\u30a4\u30ca\u30fc\u304b\u3089\u8ee2\u5411\u3057\u4eca\u306b\u81f3\u308b\u3002\u5f15\u304d\u7d9a\u304d\u30b3\u30c4\u30b3\u30c4\u306e\u65e5\u3005\u3002\u30d6\u30ed\u30b0\u3082\u66f8\u3044\u3066\u307e\u3059\u3002 Web\u3065\u304f\u308a \u3084\u308a\u305f\u3044\u6642\u304c \u59cb\u3081\u6642\uff01"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.i-ryo.com",children:"\u30d6\u30ed\u30b0\b"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/idr_zz",children:"Twitter"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://qiita.com/i-ryo",children:"Qiita"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/ryo-i",children:"GitHub"})})]})]})})},N=n(3);function H(){var e=Object(c.a)(["\n  ","\n  & h1 {\n    font-size: 1.5em;\n  }\n  & h2 {\n    font-size: 1.25em;\n    color: ",";\n  }\n"]);return H=function(){return e},e}var I=h.variable,J=o.data.main.title,L=o.data.main.text,M=o.data.about.title,F=o.data.about.text,k="/jump-rate-generator",A=l.c.section(H(),x,I.baseColor);var P=function(){return Object(r.jsx)("main",{children:Object(r.jsx)(A,{children:Object(r.jsxs)(N.c,{children:[Object(r.jsxs)(N.a,{exact:!0,path:k+"/",children:[Object(r.jsxs)(S.a,{children:[Object(r.jsx)("title",{children:J}),Object(r.jsx)("meta",{name:"description",content:L})]}),Object(r.jsx)("h1",{children:J}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:L}}),Object(r.jsx)(z,{})]}),Object(r.jsxs)(N.a,{path:k+"/about",children:[Object(r.jsxs)(S.a,{children:[Object(r.jsx)("title",{children:M}),Object(r.jsx)("meta",{name:"description",content:F})]}),Object(r.jsx)("h1",{children:M}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:F}}),Object(r.jsx)(T,{})]})]})})})};function B(){var e=Object(c.a)(["\n  ","\n  text-align: center;\n"]);return B=function(){return e},e}var D=o.data.footer.text,E=l.c.footer(B(),x);var W=function(){return Object(r.jsx)(E,{children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:D}})})};var q=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(v,{}),Object(r.jsx)(P,{}),Object(r.jsx)(W,{})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};function Q(){var e=Object(c.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: ",";\n    color: ",";\n    *, *:before, *:after {\n        box-sizing: border-box;\n    }\n    a {\n        color: ",";\n        &:hover {\n          opacity: 0.8;\n        }\n    }\n  }\n"]);return Q=function(){return e},e}var U=h.variable,V=Object(l.a)(Q(),U.textSize,U.textColor,U.baseColor);s.a.render(Object(r.jsxs)(i.a.StrictMode,{children:[Object(r.jsx)(V,{}),Object(r.jsx)(q,{})]}),document.getElementById("root")),G()}},[[40,1,2]]]);
//# sourceMappingURL=main.1bc469eb.chunk.js.map