(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{IfMX:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var n=o("fXoL"),i=function(){function t(){this._demos={},this._overviews={}}return t.prototype.register=function(t,e,o){this._demos[t]=e,o&&(this._overviews[t]=o)},t.prototype.getDemos=function(t){return this._demos[t]},t.prototype.getOverviewSections=function(t){var e=this._overviews[t],o={};return e&&Object.keys(e).forEach(function(t){o[t]={fragment:t,title:e[t]}}),o},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()},M0ag:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("ofXK"),i=o("tyNb"),c=o("DhpW"),r=o("OtPg"),a=o("fXoL"),u=o("IfMX");o.d(e,"b",function(){return u.a});var s=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[n.c,i.d,c.g,c.i,r.c]]}),t}()},Ntf1:function(t,e,o){"use strict";o.d(e,"a",function(){return j});var n=o("mrSG"),i=o("IfMX"),c=o("fXoL"),r=o("tyNb"),a=o("ofXK"),u=o("Erme"),s=o("a2bk"),d=o("fQnY"),b=o("OtPg");function f(t,e){if(1&t){var o=c.Ub();c.Tb(0,"button",6),c.bc("click",function(){c.vc(o);var t=c.ec();return t.showCode=!t.showCode}),c.Fc(1),c.Sb()}if(2&t){var n=c.ec();c.Cb(1),c.Hc(" ",n.showCode?"Hide":"Show"," Code ")}}function m(t,e){if(1&t&&(c.Tb(0,"a",7),c.Fc(1," Github "),c.Sb()),2&t){var o=c.ec();c.Db("href",o.getGithubLink(),c.xc)("aria-label","Open new window for "+o.demoTitle+" in github")}}function l(t,e){if(1&t&&(c.Tb(0,"h2",8),c.Fc(1),c.Sb()),2&t){var o=c.ec();c.Cb(1),c.Hc(" ",o.demoTitle," ")}}var p=function(t){return{"usa-button--active":t}};function h(t,e){if(1&t){var o=c.Ub();c.Rb(0),c.Tb(1,"button",13),c.bc("click",function(){c.vc(o);var t=e.$implicit;return c.ec(2).activeTab=t.type}),c.Fc(2),c.Sb(),c.Qb()}if(2&t){var n=e.$implicit,i=c.ec(2);c.Cb(1),c.jc("ngClass",c.nc(2,p,n.type===i.activeTab)),c.Cb(1),c.Gc(n.name)}}function g(t,e){if(1&t&&(c.Tb(0,"pre",14),c.Ob(1,"code",15),c.Sb()),2&t){var o=c.ec(2);c.Cb(1),c.jc("highlight",o.code.default)}}function v(t,e){if(1&t&&(c.Tb(0,"pre",14),c.Ob(1,"code",15),c.Sb()),2&t){var o=c.ec(2);c.Cb(1),c.jc("highlight",o.markup.default)}}function w(t,e){if(1&t&&(c.Tb(0,"pre",14),c.Ob(1,"code",15),c.Sb()),2&t){var o=c.ec(2);c.Cb(1),c.jc("highlight",o.module.default)}}function C(t,e){if(1&t&&(c.Tb(0,"div",9),c.Tb(1,"div",10),c.Dc(2,h,3,4,"ng-container",11),c.Sb(),c.Dc(3,g,2,1,"pre",12),c.Dc(4,v,2,1,"pre",12),c.Dc(5,w,2,1,"pre",12),c.Sb()),2&t){var o=c.ec();c.Cb(2),c.jc("ngForOf",o.tabs),c.Cb(1),c.jc("ngIf","code"===o.activeTab),c.Cb(1),c.jc("ngIf","markUp"===o.activeTab),c.Cb(1),c.jc("ngIf","module"===o.activeTab)}}var T=["*"],y=function(){function t(){this.showCode=!1,this.viewMode="code",this.tabs=[{name:"Source Code",type:"code"},{name:"Template Markup",type:"markUp"},{name:"Module",type:"module"}],this.activeTab="code"}return t.prototype.getGithubLink=function(){return!!this.path&&"https://github.com/GSA/ngx-uswds/tree/main/"+this.path},t.prototype.tabType=function(t){return{html:"HTML",scss:"Style (SCSS)",css:"Style (CSS)",ts:"Typescript"}[t.split(".").pop()]||"Code"},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Hb({type:t,selectors:[["documentation-widget-demo"]],inputs:{demoTitle:"demoTitle",component:"component",id:"id",code:"code",markup:"markup",module:"module",readme:"readme",path:"path",files:"files",showCode:"showCode"},ngContentSelectors:T,decls:9,vars:4,consts:[["uswds-card","",1,"margin-top-2","margin-bottom-4"],[1,"pin-right","margin-right-4"],["class","usa-button usa-button--unstyled margin-left-1","aria-label","Show Code",3,"click",4,"ngIf"],["class","usa-button usa-button--unstyled margin-left-1","target","_blank",4,"ngIf"],["class","grid-col-5",4,"ngIf"],["class","padding-bottom-2 border font-mono-sm margin-bottom-2",4,"ngIf"],["aria-label","Show Code",1,"usa-button","usa-button--unstyled","margin-left-1",3,"click"],["target","_blank",1,"usa-button","usa-button--unstyled","margin-left-1"],[1,"grid-col-5"],[1,"padding-bottom-2","border","font-mono-sm","margin-bottom-2"],[1,"border-bottom"],[4,"ngFor","ngForOf"],["class","highlight overflow-auto",4,"ngIf"],[1,"usa-button","usa-button--outline","margin-3",3,"ngClass","click"],[1,"highlight","overflow-auto"],[3,"highlight"]],template:function(t,e){1&t&&(c.ic(),c.Tb(0,"div",0),c.Tb(1,"uswds-card-header"),c.Tb(2,"div",1),c.Dc(3,f,2,1,"button",2),c.Dc(4,m,2,2,"a",3),c.Sb(),c.Dc(5,l,2,1,"h2",4),c.Sb(),c.Tb(6,"uswds-card-body"),c.Dc(7,C,6,4,"div",5),c.hc(8),c.Sb(),c.Sb()),2&t&&(c.Cb(3),c.jc("ngIf",e.code),c.Cb(1),c.jc("ngIf",e.getGithubLink()),c.Cb(1),c.jc("ngIf",e.demoTitle&&e.demoTitle.length>0),c.Cb(2),c.jc("ngIf",e.showCode))},directives:[u.a,s.a,a.m,d.a,a.l,a.j,b.b],styles:[""],changeDetection:0}),t}();function S(t,e){}function k(t,e){if(1&t&&(c.Tb(0,"documentation-widget-demo",1),c.Dc(1,S,0,0,"ng-template",2),c.Sb()),2&t){var o=e.$implicit,n=c.ec();c.jc("id",o.id)("demoTitle",o.title)("code",o.code)("markup",o.markup)("module",o.module)("path",o.path)("readme",o.readme)("component",n.component)("files",o.files)("showCode",o.showCode),c.Cb(1),c.jc("ngComponentOutlet",o.type)}}var j=function(){function t(t,e){this.demos=[];var o=this.component=t.parent.parent.snapshot.url[0].path;if(o){var i=e.getDemos(o);i&&(this.demos=Object.keys(i).map(function(t){return Object(n.a)({id:t},i[t])}))}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(r.a),c.Nb(i.a))},t.\u0275cmp=c.Hb({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"id","demoTitle","code","markup","module","path","readme","component","files","showCode",4,"ngFor","ngForOf"],[3,"id","demoTitle","code","markup","module","path","readme","component","files","showCode"],[3,"ngComponentOutlet"]],template:function(t,e){1&t&&c.Dc(0,k,2,11,"documentation-widget-demo",0),2&t&&c.jc("ngForOf",e.demos)},directives:[a.l,y,a.k],encapsulation:2}),t}()},OG2A:function(t,e,o){"use strict";o.d(e,"a",function(){return c});var n=o("fXoL"),i=o("tyNb"),c=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["demo-wrapper"]],decls:1,vars:0,template:function(t,e){1&t&&n.Ob(0,"router-outlet")},directives:[i.e],encapsulation:2}),t}()}}]);