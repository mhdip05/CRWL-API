"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[821],{4821:(B,l,n)=>{n.r(l),n.d(l,{TestAppModule:()=>E});var r=n(9808),p=n(7003),t=n(5e3),d=n(2340),m=n(520),u=n(5660);let c=(()=>{class e{constructor(o,s){this.http=o,this.paginationService=s}getAllEmployeeTest(o,s){let a=this.paginationService.getPaginationHeaders(o,s);return this.paginationService.getPaginatedResult(d.N.testDataUrl+"employee/GetAllEmployeesByPagination",a)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(m.eN),t.LFG(u.N))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n(6095),h=n(5315),f=n(9783),T=n(1424),v=n(845);function y(e,i){1&e&&t._uU(0," Header content here\n")}function A(e,i){1&e&&t._uU(0," //buttons\n")}const C=[{path:"",data:{title:"Test-App"},children:[{path:"",redirectTo:"grid-test"},{path:"grid-test",component:(()=>{class e{constructor(o){this.testAppService=o,this.employees=[],this.display=!1}ngOnInit(){this.getAllEmployeTest()}employeeColumn(){this.cols=[{field:"emp_id",header:"Emp Id"},{field:"emp_code",header:"Emp Code"},{field:"emp_firstname",header:"First Name"},{field:"emp_lastname",header:"Last Name"},{field:"emp_blood_group",header:"Blood Group"},{field:"emp_dateofbirth",header:"DOB"},{field:"comments",header:"Management Comments",width:"20%"}]}showDialog(){this.display=!0}getAllEmployeTest(){this.testAppService.getAllEmployeeTest(1,10).subscribe({next:o=>{console.log(o),this.employees=o.result,this.pagination=o.pagination,this.employeeColumn()},complete:()=>{}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-grid-test"]],decls:7,vars:6,consts:[["gridHeight","700px",3,"cols","data","scrollable","showOverlay","isShrinkGridHeader","showDialogEvent"],["header","Title",3,"visible","visibleChange"],["pTemplate","header"],["type","text","pInputText",""],["type","button","pButton","","autofocus",""],["pTemplate","footer"]],template:function(o,s){1&o&&(t.TgZ(0,"app-default-grid",0),t.NdJ("showDialogEvent",function(){return s.showDialog()}),t.qZA(),t.TgZ(1,"p-dialog",1),t.NdJ("visibleChange",function(N){return s.display=N}),t.YNc(2,y,1,0,"ng-template",2),t._UZ(3,"input",3)(4,"input",3)(5,"button",4),t.YNc(6,A,1,0,"ng-template",5),t.qZA()),2&o&&(t.Q6J("cols",s.cols)("data",s.employees)("scrollable",!1)("showOverlay",!0)("isShrinkGridHeader",!0),t.xp6(1),t.Q6J("visible",s.display))},directives:[g.o,h.V,f.jx,T.o,v.Hq],styles:[""]}),e})(),data:{title:"Grid-Test"}}]}];let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(C)],p.Bz]}),e})();var S=n(8705);let E=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.ez,G,S.r]]}),e})()}}]);