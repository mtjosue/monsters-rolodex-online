(this["webpackJsonpmonsters-rolodex1"]=this["webpackJsonpmonsters-rolodex1"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),a=n.n(s),o=(n(11),n(2)),i=n.n(o),u=n(4),j=n(5),l=(n(13),n(0)),d=function(e){var t=e.text;return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:t})})},h=(n(15),n(16),function(e){var t=e.monster;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:t.username}),Object(l.jsx)("p",{children:t.email})]})}),f=function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"card-list",children:t.slice(0,8).map((function(e){return Object(l.jsx)(h,{monster:e},e.id)}))})},p=(n(17),function(e){var t=e.placeHolder,n=e.onChange;return Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})});var b=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(j.a)(s,2),o=a[0],h=a[1],b=n.filter((function(e){return e.username.toLowerCase().includes(o.toLowerCase())}));Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{text:"Monsters Rolodex 1"}),Object(l.jsx)(p,{onChange:function(e){h(e.target.value)},placeHolder:"Search Monsters!"}),Object(l.jsx)(f,{monsters:b})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.527e60aa.chunk.js.map