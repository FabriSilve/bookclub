(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0YtT":function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN"),m=a("kI8a"),i=a("n5+n"),c=function(){return i.data.allMarkdownRemark.edges},u=a("j4ws"),d=(a("dRSK"),function(e,t,a){var n=a.find((function(a){var n=a.node.frontmatter,r=n.home,l=n.visitor;return r.team===e&&l.team===t}));return n?(console.log(n),n.node.frontmatter.home.goals+" - "+n.node.frontmatter.visitor.goals):""});t.default=function(e){var t=c(),a=Object(u.a)();return r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Risultati"}),t.map((function(e){var t=e.node;return r.a.createElement(m.a,{key:t.frontmatter.name},r.a.createElement("h1",null,t.frontmatter.name),r.a.createElement("h2",null,t.frontmatter.date),t.frontmatter.days.map((function(e,t){return r.a.createElement("table",{key:t,style:{width:"100%",margin:"1rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"casa"),r.a.createElement("th",null,"trasferta"),r.a.createElement("th",null,"andata"),r.a.createElement("th",null,"ritorno"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]),r.a.createElement("td",null,d(e[0],e[1],a)),r.a.createElement("td",null,d(e[1],e[0],a)))}))))})))})))}},"n5+n":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"name":"Primavera2020","date":"2020-04-06","days":[[["arsenal","ajax"],["milan","lazio"],["napoli","inter"],["olympique-lyonnaise","everton"],["roma","chelsea"],["tottenham","bayer-leverkusen"],["valencia","atletico-madrid"]],[["ajax","atletico-madrid"],["manchester-utd","milan"],["lazio","napoli"],["inter","olympique-lyonnaise"],["everton","roma"],["chelsea","tottenham"],["bayer-leverkusen","valencia"]]]}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-results-js-83f9d1cf9a8ddec889e2.js.map