(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0dde":function(t,e,a){"use strict";var n=a("50f1"),s=a.n(n);s.a},"3f63":function(t,e,a){},"50f1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.getIsAuth||t.getIsLoading?t.getIsAuth&&!t.getIsLoading?a("TableResult",{attrs:{result:t.getResult}}):a("div",{staticClass:"wrapper_loader"},[a("div",{staticClass:"spinner"},[a("p",{staticClass:"spinner_text"},[t._v(" Loading ")]),a("pulse-loader",{staticClass:"spinner_dot",attrs:{loading:t.getIsLoading,color:"#a46bfe",size:"15px"}})],1)]):a("Auth")],1)},r=[],i=a("5530"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auth"},[a("form",{staticClass:"form"},[a("p",{staticClass:"header"},[t._v(" Вход ")]),a("label",{staticClass:"label"},[a("span",{staticClass:"text"},[t._v(" Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"input",attrs:{type:"text",placeholder:"email@mail.ru",autocomplete:"off"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})]),a("label",{staticClass:"label"},[a("span",{staticClass:"text"},[t._v(" Password ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"password",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"button button_main",attrs:{disabled:t.disabledButton()||!t.loginValid()},on:{click:function(e){return e.preventDefault(),t.auth(e)}}},[t._v(" LogIn ")])])])},l=[],c=a("2f62"),u=a("11c1"),d=a.n(u),p=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,g={name:"Auth",data:function(){return{disabled:!0}},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])("login",["getLogin","getPassword"])),{},{login:{get:function(){return this.getLogin},set:function(t){this.setLogin({meta:d()(),data:t})}},password:{get:function(){return this.getPassword},set:function(t){this.setPassword({meta:d()(),data:t})}}}),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("login",["setLogin","setPassword","setAuth"])),{},{auth:function(){this.setAuth({meta:d()()})},disabledButton:function(){return!this.getLogin||!this.getPassword},loginValid:function(){return p.test(this.getLogin)}})},m=g,f=(a("0dde"),a("2877")),h=Object(f["a"])(m,o,l,!1,null,"7eee0e5e",null),_=h.exports,b=a("8a5d"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:{"no-result":!t.result.length}},[t.fullImage?a("div",{staticClass:"overlay"}):t._e(),t.fullImage?a("FullImage",{attrs:{close:t.closeImage,urlImage:t.fullImageUrl}}):t._e(),a("p",{staticClass:"header"},[t._v(" Результаты ")]),a("section",{staticClass:"buttons"},[a("button",{staticClass:"button button_main",attrs:{id:"all"},on:{click:t.setMeasurement}},[t._v("Все измерения / Обновить")]),a("button",{staticClass:"button button_main",attrs:{id:"d"},on:{click:t.setMeasurement}},[t._v("Текущий день")]),a("button",{staticClass:"button button_main",attrs:{id:"w"},on:{click:t.setMeasurement}},[t._v("Текущая неделя")]),a("button",{staticClass:"button button_main",attrs:{id:"m"},on:{click:t.setMeasurement}},[t._v("Текущий месяц")]),a("button",{staticClass:"button button_main",attrs:{id:"y"},on:{click:t.setMeasurement}},[t._v("Предыдущий день")])]),t.result&&t.result.length?a("div",{staticClass:"result_yes"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.arrayForRender(),(function(e){return a("tr",{key:e.id,staticClass:"table__row",class:{one:1===t.result.length}},[a("td",{staticClass:"table__cell table__cell-date"},[t._v(t._s(t.getDate(e.id)))]),a("td",{staticClass:"table__cell table__cell-time"},[t._v(t._s(t.getTime(e.id)))]),a("td",{staticClass:"table__cell table__cell-image"},[a("img",{staticClass:"image",attrs:{src:e.image,width:"50",height:"50"},on:{click:function(a){return t.imageUrl(e.image)}}})]),a("td",{staticClass:"table__cell table__cell-temp"},[t._v(t._s(e.temp)+" "),a("span",{staticClass:"temp_deg"},[t._v("°C")])]),a("td",{staticClass:"table__cell table__cell-status",class:{good:2===e.status,bad:1===e.status,low:0===e.status}},[t._v(t._s(t.getStatus(e.status)))])])})),0)]),a("paginate",{attrs:{"page-count":Math.ceil(t.result.length/8),"page-range":2,"prev-text":"Prev","click-handler":t.clickCallback,"next-text":"Next","container-class":"pagination","page-class":"page","next-class":"next","prev-class":"prev"}})],1):a("div",{staticClass:"result_no"},[t._v(" Результаты измерений отсутсвуют ")])],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"table__row-head"},[a("th",{staticClass:"table__cell table__cell-dateh"},[t._v("Дата")]),a("th",{staticClass:"table__cell table__cell"},[t._v("Время")]),a("th",{staticClass:"table__cell table__cell-photo"},[t._v("Фото")]),a("th",{staticClass:"table__cell table__cell"},[t._v("Температура")]),a("th",{staticClass:"table__cell table__cell-status"},[t._v("Статус")])])])}],C=(a("99af"),a("4de4"),a("5a0c")),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container_image",on:{click:t.close}},[a("span",{staticClass:"close",on:{click:t.close}}),a("img",{staticClass:"image_full",attrs:{src:t.urlImage,width:"500",height:"500"}})])},O=[],S={name:"FullImage",props:{urlImage:{type:String},close:{type:Function}}},T=S,y=(a("7cd9"),Object(f["a"])(T,I,O,!1,null,"4edc873c",null)),L=y.exports,j=a("8832"),A=a.n(j),E={name:"TableResutl",components:{FullImage:L,Paginate:A.a},props:{result:{type:Array}},data:function(){return{fullImage:!1,fullImageUrl:null,currentPage:1,prevPage:0,nextPage:2}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("app",["changeResult"])),{},{getDate:function(t){return C(+t).format("DD.MM.YYYY")},getTime:function(t){var e=C(+t),a=e.get("h"),n=e.get("m"),s=e.get("s");return"".concat(a<10?"0"+a:a,":").concat(n<10?"0"+n:n,":").concat(s<10?"0"+s:s)},getStatus:function(t){switch(t){case 0:return"Ниже нормы";case 1:return"Угроза";case 2:return"Норма"}},imageUrl:function(t){this.fullImage=!0,this.fullImageUrl=t},closeImage:function(){this.fullImage=!1,this.fullImageUrl=!1},clickCallback:function(t){this.currentPage=t,this.prevPage=t-1,this.arrayForRender()},arrayForRender:function(){var t=this;return this.result.filter((function(e,a){return a>=8*t.prevPage&&a<8*t.currentPage}))},setMeasurement:function(t){this.changeResult({meta:d()(),data:t.target.id})}})},P=E,R=(a("914b"),Object(f["a"])(P,v,w,!1,null,null,null)),k=R.exports,x={name:"App",components:{Auth:_,PulseLoader:b["a"],TableResult:k},computed:Object(i["a"])(Object(i["a"])({},Object(c["c"])("app",["getIsAuth","getIsLoading","getResult"])),{},{isAuth:function(){return this.getIsAuth}})},U=x,M=(a("5c0b"),Object(f["a"])(U,s,r,!1,null,null,null)),N=M.exports,z={namespaced:!0,state:{isAuth:!1,isLoading:!1,result:null},actions:{changeResult:function(t,e){var a=t.commit;return a("CHANGE_RESULT",e)},setResult:function(t,e){var a=t.commit;return a("SET_RESULT",e)},setIsLoading:function(t,e){var a=t.commit;return a("SET_IS_LOADING",e)},setIsAuth:function(t,e){var a=t.commit;return a("SET_IS_AUTH",e)}},mutations:{CHANGE_RESULT:function(){},SET_RESULT:function(t,e){t.result=e.data},SET_IS_LOADING:function(t,e){t.isLoading=e.data},SET_IS_AUTH:function(t,e){t.isAuth=e.data}},getters:{getResult:function(t){return t.result},getIsLoading:function(t){return t.isLoading},getIsAuth:function(t){return t.isAuth}}},D={namespaced:!0,state:{login:"",password:""},actions:{setLogin:function(t,e){var a=t.commit;return a("SET_LOGIN",e)},setPassword:function(t,e){var a=t.commit;return a("SET_PASSWORD",e)},setAuth:function(t,e){var a=t.commit;return a("SET_AUTH",e)}},mutations:{SET_AUTH:function(){},SET_LOGIN:function(t,e){t.login=e.data},SET_PASSWORD:function(t,e){t.password=e.data}},getters:{getLogin:function(t){return t.login},getPassword:function(t){return t.password}}},H=(a("d81d"),a("d3b7"),a("96cf"),a("1da1")),$=a("d4ec"),F=a("ade3"),G=function t(e){var a=this;Object($["a"])(this,t),Object(F["a"])(this,"call",function(){var t=Object(H["a"])(regeneratorRuntime.mark((function t(e,n,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(a.host+e,{method:"POST",headers:s?Object(i["a"])(Object(i["a"])({},a.headers),{},{Authorization:s}):a.headers,body:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(){throw new Error("Error")})));case 1:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()),console.log(e),this.host=e,this.headers={"Content-Type":"application/json"}},Y=new G("https://testtempserv.herokuapp.com/api/"),J=function(){return function(t){var e=t.dispatch,a=t.getters,n=!1;t.subscribe((function(t){var s=t.payload,r=null,o=function t(){Y.call("subscribe",{},a["app/getIsAuth"]).then((function(t){n=!0,e("app/setResult",{meta:s.meta,data:a["app/getResult"].reverse().concat(Object(i["a"])(Object(i["a"])({},t),{},{image:"http://localhost:3000/api/images/"+t.image})).reverse()})})).catch((function(e){console.log(e),t()}))};switch(t.type){case"login/SET_AUTH":e("app/setIsLoading",{meta:s.meta,data:!0}),Y.call("isAdmin",{email:a["login/getLogin"],password:a["login/getPassword"]}).then((function(t){if(t.error)throw new Error(t.error);e("app/setIsAuth",{meta:s.meta,data:t.token}),e("login/setLogin",{meta:s.meta,data:""}),e("login/setPassword",{meta:s.meta,data:""})})).catch((function(t){setTimeout((function(){e("login/setLogin",{meta:s.meta,data:""}),e("login/setPassword",{meta:s.meta,data:""}),e("app/setIsLoading",{meta:s.meta,data:!1}),console.log(t)}),2e3)}));break;case"app/SET_IS_AUTH":s.data&&(Y.call("allMeasurement",{},s.data).then((function(t){if(t.error)throw new Error(t.error);setTimeout((function(){e("app/setResult",{meta:s.meta,data:B(t.data)}),e("app/setIsLoading",{meta:s.meta,data:!1})}),2e3)})).catch((function(){setTimeout((function(){e("app/setIsLoading",{meta:s.meta,data:!1})}),2e3)})),o(s.data));break;case"app/CHANGE_RESULT":r="all"===s.data?{}:{date:s.data},Y.call("allMeasurement",r,a["app/getIsAuth"]).then((function(t){if(t.error)throw new Error(t.error);e("app/setResult",{meta:s.meta,data:B(t.data)})})).catch((function(t){return console.log(t)}));break;case"app/SET_RESULT":n&&(n=!1,o(s.data));break}}))}};function B(t){return t.map((function(t){var e=t.image;return Object(i["a"])(Object(i["a"])({},t),{},{image:"http://localhost:3000/api/images/"+e})})).reverse()}n["a"].use(c["a"]);var V=new c["a"].Store({modules:{app:z,login:D},plugins:[J()]});n["a"].config.productionTip=!1,new n["a"]({store:V,render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"78e7":function(t,e,a){},"7cd9":function(t,e,a){"use strict";var n=a("78e7"),s=a.n(n);s.a},"914b":function(t,e,a){"use strict";var n=a("3f63"),s=a.n(n);s.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.5bb9bf6a.js.map