(this["webpackJsonptest-client"]=this["webpackJsonptest-client"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),r=a.n(c);a(15),a(16),a(17);var l=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("footer",null,"\xa9Footer"))};a(18);var i=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:"https://image.freepik.com/free-vector/_98292-3951.jpg",alt:"logo"})),o.a.createElement("button",{type:"button",className:" new-hotdog","data-toggle":"modal","data-target":"#myModal"},"Add hotdog"))},u=a(7),s=a(2),m=a.n(s),d=a(3),p=a(4),h=(a(20),a(1)),f=(a(21),function(e){var t=e.data,a=e.setItemValue,c=e.deleteHotdogFromState,r=Object(n.useState)(!1),l=Object(p.a)(r,2),i=l[0],u=l[1],s=t.name,f=t.description,g=t.price,b=t.photo_url,v=t.hotdog_id,E="http://localhost:5000/hotdogs",j="https://vignette.wikia.nocookie.net/edopedia/images/5/5e/%D0%A5%D0%BE%D1%82_%D0%B4%D0%BE%D0%B3.jpg/revision/latest?cb=20170806182648&path-prefix=ru",O=function(){u(!i)},N=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(E,"/").concat(t),{method:"DELETE"});case 3:e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(m.a.mark((function e(a,n){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,o=Object(h.a)({},t),e.next=5,fetch("".concat(E,"/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 5:e.sent,console.log(o),O(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}(),_=o.a.createElement("div",{className:"hotdog"},o.a.createElement("div",{className:"hotdog__img"},o.a.createElement("img",{src:b||j,alt:"hotdog"})),o.a.createElement("h3",{className:"hotdog__name"},s),o.a.createElement("p",{className:"hotdog__price"},g,"$"),o.a.createElement("p",{className:"hotdog__description"},f),o.a.createElement("button",{className:"hotdog__btn",onClick:O},"Edit"));return i?o.a.createElement("div",{className:"hotdog"},o.a.createElement("div",{className:"hotdog__img"},o.a.createElement("img",{src:b||j,alt:"hotdogPhoto"})),o.a.createElement("form",{className:"edit-form",onSubmit:function(e){return y(e,v)}},o.a.createElement("input",{type:"text",value:b,onChange:function(e){return a(Object(h.a)(Object(h.a)({},t),{},{photo_url:e.target.value}),v)}}),o.a.createElement("input",{type:"text",value:s,onChange:function(e){return a(Object(h.a)(Object(h.a)({},t),{},{name:e.target.value}),v)}}),o.a.createElement("input",{type:"text",value:g,onChange:function(e){return a(Object(h.a)(Object(h.a)({},t),{},{price:e.target.value}),v)}}),o.a.createElement("input",{type:"text",value:f,onChange:function(e){return a(Object(h.a)(Object(h.a)({},t),{},{description:e.target.value}),v)}}),o.a.createElement("button",{type:"submit",className:"hotdog__btn"},"Upgrade"),o.a.createElement("button",{type:"button",className:"hotdog__btn",onClick:function(){return N(v)}},"Delete"))):_}),g=(a(22),function(e){var t=e.addHotdogToState,a=Object(n.useState)({name:"",price:"",description:"",photoUrl:""}),c=Object(p.a)(a,2),r=c[0],l=c[1],i=function(){var e=Object(d.a)(m.a.mark((function e(a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n=Object(h.a)({},r),e.next=5,fetch("http://localhost:5000/hotdogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:e.sent,t(r),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"modal fade",id:"myModal"},o.a.createElement("div",{className:"modal-dialog modal-dialog-centered"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("form",{onSubmit:function(e){return i(e)}},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h4",{className:"modal-title"},"Add new hot-dog")),o.a.createElement("div",{className:"modal-body"},o.a.createElement("input",{className:"modal-input",placeholder:"Name",type:"text",value:r.name,onChange:function(e){return l(Object(h.a)(Object(h.a)({},r),{},{name:e.target.value}))}}),o.a.createElement("input",{className:"modal-input",placeholder:"Price",type:"number",value:r.price,onChange:function(e){return l(Object(h.a)(Object(h.a)({},r),{},{price:e.target.value}))}}),o.a.createElement("input",{className:"modal-input",placeholder:"Description",type:"text",value:r.description,onChange:function(e){return l(Object(h.a)(Object(h.a)({},r),{},{description:e.target.value}))}}),o.a.createElement("input",{className:"modal-input",placeholder:"Image",type:"text",value:r.photoUrl,onChange:function(e){return l(Object(h.a)(Object(h.a)({},r),{},{photoUrl:e.target.value}))}})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"submit",className:"btn  modal-btn"},"Add"),o.a.createElement("button",{type:"button",className:"btn modal-btn","data-dismiss":"modal"},"Close"))))))}),b=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],r=function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/hotdogs");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(e){c(a.filter((function(t){return t.hotdog_id!==e})))},i=function(e,t){var n=a.filter((function(e){return e.hotdog_id!==t}));c([].concat(Object(u.a)(n),[e]))};return Object(n.useEffect)((function(){r()}),[]),o.a.createElement("main",null,o.a.createElement("h1",null,"All hot-dogs"),o.a.createElement("section",{className:"main-content"},a.map((function(e){return o.a.createElement(f,{data:e,key:e.hotdog_id,deleteHotdogFromState:l,setHotdogsList:c,setItemValue:i})})),o.a.createElement(g,{addHotdogToState:function(e){c([].concat(Object(u.a)(a),[e]))}})))};var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(b,null),o.a.createElement(l,null))};r.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.bdd8327d.chunk.js.map