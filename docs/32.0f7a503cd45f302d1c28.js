"use strict";(self.webpackChunkcdd_project=self.webpackChunkcdd_project||[]).push([[32],{6032:(q,u,r)=>{r.r(u),r.d(u,{MainPageModule:()=>F});var p=r(8583),d=r(7957),c=r(6371),m=r(8070),e=r(7716),Z=r(7556),h=r(7709),g=r(6782),f=r(1660),v=r(3071);let T=(()=>{class n{transform(t,s){return t?t.first_name+" "+t.last_name:`user ${t}`}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"fio",type:n,pure:!0}),n})();function C(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",4),e.TgZ(1,"div",5),e._UZ(2,"img",6),e.TgZ(3,"div",7),e.TgZ(4,"h5",8),e._uU(5),e.ALo(6,"fio"),e.qZA(),e.TgZ(7,"p",9),e._uU(8),e.qZA(),e.TgZ(9,"a",10),e._uU(10,"Go to user"),e.qZA(),e.TgZ(11,"button",11),e.NdJ("click",function(){const o=e.CHM(t),a=o.$implicit,l=o.index;return e.oxw().onDeleteUser(a,l)}),e._uU(12,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(2),e.Q6J("src",t.avatar,e.LSH),e.xp6(3),e.Oqu(e.lcZ(6,4,t)),e.xp6(3),e.hij(" ",t.email," "),e.xp6(1),e.Q6J("routerLink","/user/"+t.id)}}let U=(()=>{class n{constructor(t,s,o){this.userService=t,this.modalService=s,this.cd=o,this.users=[],this.paginationInfo={},this.selectedPage=1,this.onDestroy$=new h.xQ}ngOnInit(){this.getUsers({per_page:4})}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}onChangePage(){this.selectedPage!=this.paginationInfo.page&&this.getUsers({page:this.selectedPage,per_page:this.paginationInfo.per_page})}getUsers(t={}){this.userService.getUsers(t).pipe((0,g.R)(this.onDestroy$)).subscribe(({users:s,paginationInfo:o})=>{this.users=s,this.paginationInfo=o,this.cd.detectChanges()})}onDeleteUser(t,s){this.userService.deleteUser(t).pipe((0,g.R)(this.onDestroy$)).subscribe({next:()=>{this.createSuccesModalAlert({text:`user with id ${t.id} deleted`}),this.deleteUserFromList(s)}})}deleteUserFromList(t){this.users.splice(t,1),this.cd.detectChanges()}createSuccesModalAlert({header:t="Succes",text:s=""}){new f.p(this.modalService).addHeader(t).addText(s).setSuccessStyle().openAlertModal()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.K),e.Y36(c.FF),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-users"]],decls:4,vars:7,consts:[[1,"d-flex","justify-content-between","flex-wrap"],["class","align-self-stretch mt-2","style","width: 15rem;",4,"ngFor","ngForOf"],[1,"text-center"],[1,"d-inline-block",3,"collectionSize","pageSize","page","maxSize","rotate","boundaryLinks","pageChange"],[1,"align-self-stretch","mt-2",2,"width","15rem"],[1,"card"],["alt","image is not loaded",1,"card-img-top",2,"height","15rem",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger","ml-2",3,"click"]],template:function(t,s){if(1&t&&(e.TgZ(0,"ul",0),e.YNc(1,C,13,6,"li",1),e.qZA(),e.TgZ(2,"div",2),e.TgZ(3,"ngb-pagination",3),e.NdJ("pageChange",function(a){return s.selectedPage=a})("pageChange",function(){return s.onChangePage()}),e.qZA(),e.qZA()),2&t){let o,a;e.xp6(1),e.Q6J("ngForOf",s.users),e.xp6(2),e.Q6J("collectionSize",null!==(o=s.paginationInfo.total)&&void 0!==o?o:1)("pageSize",null!==(a=s.paginationInfo.per_page)&&void 0!==a?a:1)("page",s.selectedPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}},directives:[p.sg,c.N9,d.yS],pipes:[T],styles:[""],changeDetection:0}),n})();var y=r(4762),A=r(8002),_=r(4364),S=r(1841);let b=(()=>{class n{constructor(t,s){this.http=t,this.apiUrl=s}getResources(t={}){return this.http.get(`${this.apiUrl}/unknown`,{params:Object.assign({},t)}).pipe((0,A.U)(s=>{var{data:o}=s;return{resources:o,paginationInfo:(0,y._T)(s,["data","support"])}}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN),e.LFG(_.T))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function L(n,i){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"th",6),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&n){const t=i.$implicit,s=i.index;e.xp6(2),e.Oqu(s+1),e.xp6(2),e.hij(" ",t.name,""),e.xp6(2),e.hij(" ",t.year,""),e.xp6(2),e.hij(" ",t.color,""),e.xp6(2),e.hij(" ",t.pantone_value,"")}}let P=(()=>{class n{constructor(t,s){this.resourceService=t,this.cd=s,this.resources=[],this.paginationInfo={},this.selectedPage=1,this.onDestroy$=new h.xQ}ngOnInit(){this.getResources({per_page:4})}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}onChangePage(){this.selectedPage!=this.paginationInfo.page&&this.getResources({page:this.selectedPage,per_page:this.paginationInfo.per_page})}getResources(t={}){this.resourceService.getResources(t).pipe((0,g.R)(this.onDestroy$)).subscribe(({resources:s,paginationInfo:o})=>{this.resources=s,this.paginationInfo=o,this.cd.detectChanges()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(b),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-list-resource"]],decls:21,vars:7,consts:[[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"d-inline-block",3,"collectionSize","pageSize","page","maxSize","rotate","boundaryLinks","pageChange"],["scope","row"]],template:function(t,s){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"table",1),e.TgZ(2,"caption"),e.TgZ(3,"b"),e._uU(4,"Resources"),e.qZA(),e.qZA(),e.TgZ(5,"thead"),e.TgZ(6,"tr"),e.TgZ(7,"th",2),e._uU(8,"#"),e.qZA(),e.TgZ(9,"th",2),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"th",2),e._uU(12,"Year"),e.qZA(),e.TgZ(13,"th",2),e._uU(14,"Color"),e.qZA(),e.TgZ(15,"th",2),e._uU(16,"Pantone value"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"tbody"),e.YNc(18,L,11,5,"tr",3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",4),e.TgZ(20,"ngb-pagination",5),e.NdJ("pageChange",function(a){return s.selectedPage=a})("pageChange",function(){return s.onChangePage()}),e.qZA(),e.qZA()),2&t){let o,a;e.xp6(18),e.Q6J("ngForOf",s.resources),e.xp6(2),e.Q6J("collectionSize",null!==(o=s.paginationInfo.total)&&void 0!==o?o:1)("pageSize",null!==(a=s.paginationInfo.per_page)&&void 0!==a?a:1)("page",s.selectedPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}},directives:[p.sg,c.N9],styles:[""],changeDetection:0}),n})();const x=[{path:"",component:(()=>{class n{constructor(t){this.authService=t}ngOnInit(){}logout(){this.authService.logout()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-main-page"]],decls:6,vars:0,consts:[[1,"container","pt-3"],[1,"text-right","mb-3"],[1,"btn","btn-secondary",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"a",2),e.NdJ("click",function(){return s.logout()}),e._uU(3,"Logout"),e.qZA(),e.qZA(),e._UZ(4,"app-list-users"),e._UZ(5,"app-list-resource"),e.qZA())},directives:[U,P],styles:[""],changeDetection:0}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[d.Bz.forChild(x),p.ez,c.jF,m.N,c.bz]]}),n})()}}]);