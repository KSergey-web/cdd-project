"use strict";(self.webpackChunkcdd_project=self.webpackChunkcdd_project||[]).push([[10],{9010:(b,l,t)=>{t.r(l),t.d(l,{SigninModule:()=>Z});var u=t(8583),r=t(665),a=t(7957),m=t(6371),g=t(3669),p=t(8070),c=t(7709),h=t(6782),v=t(1660),o=t(7716),f=t(7556);const S=[{path:"",component:(()=>{class e{constructor(n,i,d,y){this.formBuilder=n,this.authService=i,this.router=d,this.modalService=y,this.onDestroy$=new c.xQ,this.signupForm=n.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required]]})}ngOnDestroy(){this.onDestroy$.next(!0),this.onDestroy$.complete()}ngOnInit(){}login(){this.authService.login(this.signupForm.value).pipe((0,h.R)(this.onDestroy$)).subscribe(()=>{this.router.navigate([""])},this.errorResponseHandler.bind(this))}errorResponseHandler(n){const i=`status: ${n.status}. Text: ${JSON.stringify(n.error)}`;this.createBadModalAlert({text:i})}createBadModalAlert({header:n="Error login",text:i="error"}){new v.p(this.modalService).addHeader(n).addText(i).setDangerStyle().openAlertModal()}}return e.\u0275fac=function(n){return new(n||e)(o.Y36(r.qu),o.Y36(f.e),o.Y36(a.F0),o.Y36(m.FF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-signin"]],decls:17,vars:2,consts:[[1,"container","w-25","mt-5"],[1,"text-center"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Enter email",1,"form-control"],["for","password"],["type","password","id","password","placeholder","Password","formControlName","password",1,"form-control"],["routerLink","/signup"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"h1",1),o._uU(2,"Log in to the system"),o.qZA(),o.TgZ(3,"form",2),o.NdJ("ngSubmit",function(){return i.login()}),o.TgZ(4,"div",3),o.TgZ(5,"label",4),o._uU(6,"Email address"),o.qZA(),o._UZ(7,"input",5),o.qZA(),o.TgZ(8,"div",3),o.TgZ(9,"label",6),o._uU(10,"Password"),o.qZA(),o._UZ(11,"input",7),o.qZA(),o.TgZ(12,"a",8),o._uU(13,"register"),o.qZA(),o.TgZ(14,"div",1),o.TgZ(15,"button",9),o._uU(16,"Sign in"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(3),o.Q6J("formGroup",i.signupForm),o.xp6(12),o.Q6J("disabled",i.signupForm.invalid))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,a.yS],styles:["input.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:solid red 2px}input.ng-touched.ng-valid[_ngcontent-%COMP%]{border:solid green 2px}.container[_ngcontent-%COMP%]{min-width:300px}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[],imports:[[a.Bz.forChild(S),u.ez,r.UX,g.W,p.N,m.bz]]}),e})()}}]);