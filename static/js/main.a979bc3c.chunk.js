(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(23),n(7)),c=n(8),l=n(14),u=n(9),d=n(15),h=n(13),m=n(4),f=n(12),p=n.n(f),b=(n(28),p.a.Renderer(),"# Welcome to my React Markdown Previewer! \n\n## This is a sub-heading...   \n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"),v=Object(m.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT":return t.text;default:return e}}),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.props.edit(e.target.value)}},{key:"render",value:function(){return console.log(this.props.text),r.a.createElement("div",null,r.a.createElement("h1",null,"Hello Testing ")," ",r.a.createElement("br",null),r.a.createElement("div",{className:"markdownSection"},r.a.createElement("div",{className:"editorWrapper"},r.a.createElement(g,{text:"Editor"}),r.a.createElement("textarea",{id:"editor",type:"text",onChange:this.handleChange.bind(this),value:this.props.text})),r.a.createElement("div",{className:"previewWrapper"},r.a.createElement(g,{text:"Preview"}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:p()("".concat(this.props.text))}}))))}}]),t}(r.a.Component),g=function(e){var t=e.text;return r.a.createElement("div",{className:"Header"}," ",t)},y=Object(h.b)(function(e){return{text:e}},function(e){return{edit:function(t){e(function(e){return{type:"EDIT",text:e}}(t))}}})(w),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:v},r.a.createElement(y,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.a979bc3c.chunk.js.map