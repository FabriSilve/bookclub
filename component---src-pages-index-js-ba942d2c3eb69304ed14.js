(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0nzS":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"date":"2020-04-05","home":{"team":"ajax","goals":1},"visitor":{"team":"arsenal","goals":2}}}}]}}}')},RXBc:function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),o=a("vrFN"),s=a("kI8a"),i=a("j4ws"),m=a("pHhU"),c=function(){return m.data.allMarkdownRemark.edges},u=(a("Vd3H"),function(e,t){return e.map((function(e){var a=e.node.frontmatter;return{name:a.tournament,start:a.dateStart,ladder:a.teams.map((function(e){return t.filter((function(t){var a=t.node.frontmatter;return a.home.team===e||a.visitor.team===e})).reduce((function(t,a){var n=a.node.frontmatter;if(n.home.team===e){var r=n.home.goals>n.visitor.goals,l=n.home.goals===n.visitor.goals,o=n.home.goals<n.visitor.goals,s=0;return r?s=3:l&&(s=1),{team:e,points:t.points+s,nMatches:t.nMatches+1,wins:r?t.wins+1:t.wins,losts:o?t.losts+1:t.losts,draws:l?t.draws+1:t.draws,gDone:t.gDone+n.home.goals,gReceived:t.gReceived+n.visitor.goals}}var i=n.home.goals<n.visitor.goals,m=n.home.goals===n.visitor.goals,c=n.home.goals>n.visitor.goals,u=0;return i?u=3:m&&(u=1),{team:e,points:t.points+u,nMatches:t.nMatches+1,wins:i?t.wins+1:t.wins,losts:c?t.losts+1:t.losts,draws:m?t.draws+1:t.draws,gDone:t.gDone+n.visitor.goals,gReceived:t.gReceived+n.home.goals}}),{team:e,points:0,nMatches:0,wins:0,losts:0,draws:0,gDone:0,gReceived:0})})).sort((function(e,t){return t.points-e.points}))}}))});t.default=function(e){var t=c(),a=Object(i.a)(),n=u(t,a);return console.log(n),r.a.createElement(l.a,null,r.a.createElement(o.a,{title:"Home"}),n.map((function(e){return r.a.createElement(s.a,{key:e.name},r.a.createElement("h1",null,e.name),r.a.createElement("h2",null,e.start),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Squadra"),r.a.createElement("th",null,"Punti"),r.a.createElement("th",null,"Partite"),r.a.createElement("th",null,"Vint."),r.a.createElement("th",null,"Pare."),r.a.createElement("th",null,"Pers."),r.a.createElement("th",null,"GF"),r.a.createElement("th",null,"GS"))),r.a.createElement("tbody",null,e.ladder.map((function(e){return r.a.createElement("tr",{key:e.team},r.a.createElement("td",null,e.team),r.a.createElement("td",null,e.points),r.a.createElement("td",null,e.nMatches),r.a.createElement("td",null,e.wins),r.a.createElement("td",null,e.draws),r.a.createElement("td",null,e.losts),r.a.createElement("td",null,e.gDone),r.a.createElement("td",null,e.gReceived))})))))})))}},j4ws:function(e,t,a){"use strict";var n=a("0nzS");t.a=function(){return n.data.allMarkdownRemark.edges}},pHhU:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tournament":"Primavera2020","teams":["ajax","arsenal","atletico-madrid","bayern-leverkusen","chelsea","everton","inter","lazio","manchester-utd","milan","napoli","olympique-lyonnaise","roma","tottenham","valencia"],"dateStart":"2020-04-06"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ba942d2c3eb69304ed14.js.map