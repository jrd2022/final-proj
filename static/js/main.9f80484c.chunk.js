(this["webpackJsonpfinal-proj"]=this["webpackJsonpfinal-proj"]||[]).push([[0],{25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(18),a=n.n(r),i=(n(25),n(7)),o=n.n(i),l=n(20),d=n(9),j=n(19),u=n(3),b=n(8),x=n.n(b),h=n(0),g=function(e){var t=e.score,n=e.joke,s=e.refreshPage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"text-black-800 text-center p-10 font-bold",children:[Object(h.jsx)("h1",{className:"text-8xl",children:" Game Over! "}),Object(h.jsxs)("div",{className:"underline mt-10 text-6xl",children:["Your score was ",t,"!"]})]}),t>=7?Object(h.jsxs)("div",{className:"text-3xl",children:[Object(h.jsx)("h2",{className:"text-black-800 font-bold text-center",children:"Congrulations! You passed! You get a joke! "}),Object(h.jsx)("div",{className:"bg-white text-center p-10 rounded-lg shadow-lg ring-4 mt-10 ",children:Object(h.jsxs)("p",{className:"text-blue-500",children:[n.setup," ",n.delivery]})})]}):Object(h.jsx)("div",{className:"bg-white text-center p-10 rounded-lg shadow-lg ring-4 mt-6 text-3xl width: fit-content",children:Object(h.jsx)("h2",{children:" You didn't pass! No joke for you! LOL"})}),Object(h.jsx)("div",{className:"flex justify-center items-center",children:Object(h.jsx)("button",{onClick:s,className:"bg-blue-500 text-white font-bold text-center p-10 rounded-lg shadow-lg ring-4 mt-10 text-2xl ",children:"Start New Game!"})})]})},O=function(e){var t=e.score,n=e.question;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:" text-5xl text-center font-bold",children:"Computer Science Trivia GAME!"}),Object(h.jsxs)("div",{className:"grid grid-cols-2 p-4 mt-10 gap-10",children:[Object(h.jsx)("div",{className:"ring-4 bg-white rounded-lg shadow",children:Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"font-semibold text-center underline text-lg p-3",children:" Instructions: Score at least a 7 out of 10 in order to win and recieve a joke! "})})}),Object(h.jsxs)("div",{className:"text-center text-lg ring-4 bg-white rounded-lg shadow font-bold",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("h2",{className:"",children:[" Your current score is: ",t]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"",children:[" Question: ",n+1," / 10 "]})})]})]})]})},m=function(e){var t=e.handleAnswer,n=e.handleNextQuestion,s=e.showAnswers,c=e.result,r=c.question,a=c.correct_answer,i=c.answers;return Object(h.jsxs)("div",{className:"font-bold mt-10 ",children:[Object(h.jsx)("div",{className:"underline bg-white text-black-500 text-center p-10 rounded-lg shadow-lg ring-4",children:Object(h.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:r}})}),Object(h.jsx)("div",{className:"grid grid-cols-1 gap-4 mt-4",children:i.map((function(e){var n=s?e===a?"bg-green-300":"bg-red-300":"bg-white hover:bg-gray-200",c=s?"text-white":"text-blue-500 text-xl";return Object(h.jsx)("button",{className:"".concat(n," ring-4 p-4 ").concat(c," font-bold rounded shadow"),onClick:function(){return t(e)},dangerouslySetInnerHTML:{__html:e}})}))}),s&&Object(h.jsx)("button",{onClick:n,className:"bg-blue-600 font-bold text-bold p-4 mt-6 rounded shadow ",children:"Next Question"})]})},f=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(0),a=Object(u.a)(r,2),i=a[0],b=a[1],f=Object(s.useState)(0),p=Object(u.a)(f,2),w=p[0],v=p[1],N=Object(s.useState)(!1),k=Object(u.a)(N,2),y=k[0],S=k[1],C=Object(s.useState)(!1),_=Object(u.a)(C,2),I=_[0],L=_[1],A=Object(s.useState)(void 0),F=Object(u.a)(A,2),M=F[0],P=F[1];Object(s.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x()("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");case 2:return t=e.sent,e.next=5,x()("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart");case 5:n=e.sent,s=t.data.results.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{answers:[e.correct_answer].concat(Object(l.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})})),c(s),P(n.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return n.length>0?Object(h.jsx)("div",{className:"container absolute",children:y?Object(h.jsx)(g,{score:w,joke:M,refreshPage:function(){window.location.reload()}}):Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{score:w,question:i}),Object(h.jsx)(m,{result:n[i],handleNextQuestion:function(){L(!1),b(i+1)},showAnswers:I,handleAnswer:function(e){I||e===n[i].correct_answer&&v(w+1),L(!0),i>=n.length-1&&S(!0)}})]})}):Object(h.jsx)("h1",{className:"font-bold text-white justify-center",children:" Hold up wait a minute, ya'll thougt I was finished..."})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.9f80484c.chunk.js.map