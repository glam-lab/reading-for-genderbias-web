(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/reading-for-genderbias-web/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"17f2":function(e,t,s){"use strict";var n=s("9a00"),a=s.n(n);a.a},4942:function(e,t,s){"use strict";var n=s("7071"),a=s.n(n);a.a},"53b0":function(e,t,s){"use strict";var n=s("b1be"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.headerStatus?s("Header"):e._e(),s("div",{staticClass:"main_content"},[s("Main",{on:{hideHeader:function(t){return e._hideHeader(!1)}}})],1),s("Footer")],1)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-8 is-offset-2"},[s("span",{staticClass:"wrapper"},[s("div",{staticClass:"readoutContainer",style:{float:e.floatVal,width:e.widthVal}},[s("div",{staticClass:"readout"},[e.rendered?e._e():s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputText,expression:"inputText"}],staticClass:"textarea text-input",attrs:{placeholder:"Paste your letter of recommendation here."},domProps:{value:e.inputText},on:{input:function(t){t.target.composing||(e.inputText=t.target.value)}}}),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"button is-info is-fullwidth submit-button",on:{click:function(t){e.renderIssues(),e.showSidebar(),e.hideHeader(),e.changeWidth()}}},[e._v(" Submit ")])])]),e.rendered?s("div",[s("button",{staticClass:"button is-primary is-fullwidth back-button",on:{click:function(t){return e.Again()}}},[e._v(" ← Again! ")]),s("div",{staticClass:"blurbs"},e._l(e.messages,(function(e){return s("Blurb",{key:e.rnd,attrs:{message:e}})})),1)]):e._e()])]),e.sidebarStatus?s("div",{staticClass:"sidebarContainer"},[s("div",{staticClass:"sidebar"},[s("p",[e._v(" Try to make the following changes: ")]),e._l(e.summaries,(function(e){return s("Summary",{key:e.rnd,attrs:{summary:e}})}))],2)]):e._e()])])])])])},o=[],c=(s("99af"),s("a15b"),s("d81d"),s("b0c0"),s("d3b7"),s("ac1f"),s("5377"),s("1276"),s("ddb0"),s("3835")),u=s("b85c"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticStyle:{display:"inline"},attrs:{id:"container"}},[e.message.text?s("span",{class:e.getClasses(),staticStyle:{padding:"0 0.1em"},on:{mouseover:e.hovered,click:e.hoverLock,mouseout:e.unhovered}},[e._v(" "+e._s(e.message.text)+" ")]):e._e(),e.message.issue.problem?s("span",{attrs:{id:"tooltip"}},[s("div",{staticClass:"tip",class:{visible:e.ishovering||e.hoveringLock},style:{top:e.mouseX}},[s("h1",[e._v(e._s(e.message.issue.category))]),s("div",{staticClass:"content"},[s("p",[e._v(e._s(e.message.issue.problem))]),s("p",[e._v(e._s(e.message.issue.suggestion))])])])]):e._e()])},d=[],f={name:"Blurb",props:{message:{type:Object}},data:function(){return{ishovering:!1,hoveringLock:!1,mouseX:30,mouseY:0}},methods:{getClasses:function(){return{notice:this.message.issue.problem,negativeBias:!!this.message.issue&&-1==this.message.issue.bias,positiveBias:!!this.message.issue&&1==this.message.issue.bias,hoveringLock:this.hoveringLock}},hovered:function(){this.ishovering=!0},unhovered:function(){this.ishovering=!1},hoverLock:function(){this.hoveringLock=!this.hoveringLock},getPos:function(){return{top:this.mouseY+200,left:this.mouseX+200}}}},h=f,m=(s("4942"),s("2877")),p=Object(m["a"])(h,l,d,!1,null,null,null),v=p.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"summary"}},[e.summary.text.length>=2?s("div",{staticClass:"issue"},[s("p",{staticClass:"problem"},[e._v(" "+e._s(e.summary.title)+" ")]),s("p",{staticClass:"summary"},[e._v(" "+e._s(e.summary.text)+" ")])]):e._e()])},g=[],y={name:"Summary",props:{summary:{type:Object}}},_=y,w=(s("53b0"),Object(m["a"])(_,b,g,!1,null,"0c0efb23",null)),x=w.exports,C="http://localhost:5000",j={name:"Main",components:{Blurb:v,Summary:x},data:function(){return{text:"",inputText:"",messages:[],summaries:[],rendered:!1,sidebarStatus:!1,widthVal:"100%",floatVal:"none"}},methods:{Again:function(){this.rendered=!1},showSidebar:function(){this.sidebarStatus=!0},hideHeader:function(){this.$emit("hideHeader")},changeWidth:function(){"100%"===this.widthVal&&(this.widthVal="70%",this.floatVal="right")},renderIssues:function(){var e=this;this.rendered=!0,fetch("".concat(C,"/check"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.inputText})}).then((function(e){return e.json()})).then((function(t){var s,n=[],a=[{start:0,end:0,category:"",problem:""}],i=t.text,r=Object(u["a"])(t.issues);try{for(r.s();!(s=r.n()).done;){var o=s.value;n=n.concat(o),a=a.concat(o.flags.map((function(e){return{start:e[0],end:e[1],category:e[2],problem:e[3],suggestion:e[4],bias:e[5]}})))}}catch(b){r.e(b)}finally{r.f()}var l,d=i.split(""),f=Object(u["a"])(a.entries());try{for(f.s();!(l=f.n()).done;){var h=Object(c["a"])(l.value,2),m=h[0],p=h[1];d[p.end]="[!]||||"+d[p.end],d[p.start]="[!]||".concat(m,"||")+d[p.start]}}catch(b){f.e(b)}finally{f.f()}var v=d.join("").split("[!]");e.messages=v.map((function(e){return{text:e.split("||")[2],rnd:Math.random(),issue:!!e.split("||")[1]&&a[parseInt(e.split("||")[1])]}})),e.summaries=n.map((function(e){return{text:e.summary,title:e.name,rnd:Math.random()}}))}))}}},O=j,S=(s("17f2"),Object(m["a"])(O,r,o,!1,null,null,null)),k=S.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-8 is-offset-2"},[s("h1",{staticClass:"title"},[e._v("Reading for Gender Bias")]),s("p",[s("b",[e._v(" Implicit gender bias in evaluations negatively impacts women at every stage of her career. ")]),e._v(" The goal of this project is to create a web-based text analysis tool that scans and reveals language bias associated with evaluations and letters of recommendation written for trainees and applicants. The tool will provide a summary of potential changes to the writer to help them remove bias. The hope is that by bringing awareness to the existence of implicit bias, we can change how evaluations for women are drafted and judged, thereby providing a concrete way to tackle gender disparities. ")])])])])}],$=(s("ad18"),{}),H=Object(m["a"])($,T,P,!1,null,"2386897e",null),L=H.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-8 is-offset-2"},[s("p",[e._v(" Learn more on "),s("a",{attrs:{href:"https://github.com/gender-bias/gender-bias"}},[e._v("GitHub")]),e._v(". ")])])])])}],V=(s("7984"),{}),B=Object(m["a"])(V,M,E,!1,null,"ab884c2c",null),A=B.exports,I={name:"App",components:{Header:L,Footer:A,Main:k},data:function(){return{headerStatus:!0}},methods:{_hideHeader:function(e){this.headerStatus=e}}},J=I,X=(s("034f"),Object(m["a"])(J,a,i,!1,null,null,null)),F=X.exports;s("92c6");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(F)}}).$mount("#app")},7071:function(e,t,s){},7984:function(e,t,s){"use strict";var n=s("dd0d"),a=s.n(n);a.a},"85ec":function(e,t,s){},"9a00":function(e,t,s){},ad18:function(e,t,s){"use strict";var n=s("ee51"),a=s.n(n);a.a},b1be:function(e,t,s){},dd0d:function(e,t,s){},ee51:function(e,t,s){}});
//# sourceMappingURL=app.e5a825a6.js.map