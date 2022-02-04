"use strict";(self.webpackChunkMaanavarAngularProject=self.webpackChunkMaanavarAngularProject||[]).push([[980],{980:(D,g,d)=>{d.r(g),d.d(g,{AccountSetupModule:()=>J});var p=d(9808),i=d(4182),e=d(5e3),s=d(1162),m=d(9248);function f(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(First Name required)"),e.qZA())}function v(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Middle Name required)"),e.qZA())}function A(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Last Name required)"),e.qZA())}function h(t,r){if(1&t&&(e.TgZ(0,"option",54),e._uU(1),e.qZA()),2&t){const u=r.$implicit;e.Q6J("ngValue",u.value),e.xp6(1),e.hij(" ",u.label,"")}}function q(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Date Of Birth required)"),e.qZA())}function T(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Email required)"),e.qZA())}function _(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Phone Number required)"),e.qZA())}function b(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Address Line 1 required)"),e.qZA())}function S(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Address Line 2 required)"),e.qZA())}function N(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(City required)"),e.qZA())}function C(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(District required)"),e.qZA())}function U(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(State required)"),e.qZA())}function y(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Country required)"),e.qZA())}function I(t,r){1&t&&(e.TgZ(0,"span",53),e._uU(1,"(Postal Code required)"),e.qZA())}function F(t,r){if(1&t&&(e.TgZ(0,"option",54),e._uU(1),e.qZA()),2&t){const u=r.$implicit;e.Q6J("ngValue",u.value),e.xp6(1),e.hij(" ",u.label,"")}}let x=(()=>{class t{constructor(u,n,a,c,o,l){var Z;this.fb=u,this.registrationService=n,this.authService=a,this.notificationService=c,this.router=o,this.route=l,this.errorMsg="",this.departments=[{label:"Automobile",value:"1"},{label:"Civil",value:"2"},{label:"Computer Science",value:"3"},{label:"Electronics and Communication",value:"4"},{label:"Fashion Technology",value:"5"},{label:"Instrumentation",value:"6"},{label:"Information Techology",value:"7"},{label:"Mechanical",value:"8"},{label:"Science and Humanities",value:"9"}],this.genders=[{label:"Male",value:"1"},{label:"Female",value:"2"}],this.email=null===(Z=this.authService.getloggedInUser())||void 0===Z?void 0:Z.Email}ngOnInit(){this.userID=this.route.snapshot.params.userID,this.routeData=this.route.snapshot.data,this.accountSetupForm=this.fb.group({email:[{value:this.email,disabled:!1},[i.kI.required]],firstName:["",[i.kI.required]],lastName:["",[i.kI.required]],middleName:["",[i.kI.required]],gender:["",[i.kI.required]],dateOfBirth:["",[i.kI.required]],phoneNumber:["",[i.kI.required]],addressLine1:["",[i.kI.required]],addressLine2:["",[i.kI.required]],city:["",[i.kI.required]],district:["",[i.kI.required]],state:["",[i.kI.required]],country:["",[i.kI.required]],postalCode:["",[i.kI.required]],department:[""],institutionName:[""],joiningDate:[""],qualification:[""],experienceInYears:[""],experienceInMonths:[""],designationInCollege:[""],collegeID:[""]})}onSubmit(){var u,n,a,c;if(this.accountSetupForm.invalid)return;const o=this.accountSetupForm.value;this.departmentName=null===(u=this.departments.find(l=>l.value===o.department))||void 0===u?void 0:u.label.toString(),this.genderName=null===(n=this.genders.find(l=>l.value===o.gender))||void 0===n?void 0:n.label.toString(),this.user={Email:o.email,FirstName:o.firstName,LastName:o.lastName,MiddleName:o.middleName,DateOfBirth:o.dateOfBirth,CurrentAddress:{PostalCode:o.postalCode,State:o.state,Country:o.country,AddressLine1:o.addressLine1,AddressLine2:o.addressLine2,City:o.city},PermanentAddress:{PostalCode:o.postalCode,State:o.state,Country:o.country,AddressLine1:o.addressLine1,AddressLine2:o.addressLine2,City:o.city},RoleId:1,UserGroupId:1,DepartmentId:o.department,Department:{DepartmentName:null===(a=this.departmentName)||void 0===a?void 0:a.toString()},GenderId:o.gender,Gender:{GenderName:null===(c=this.genderName)||void 0===c?void 0:c.toString()},DesignationInCollege:o.designationInCollege,Qualification:o.qualification,ExperienceInYears:o.experienceInYears,ExperienceInMonths:o.experienceInMonths},this.user&&this.registrationService.accountSetup(this.user).subscribe(l=>{l.error?this.errorMsg=l.error.message:l?(this.notificationService.notifySuccess("Account Setup Successfully !!!"),this.router.navigate(["/profile"])):(this.notificationService.notifySuccess("Account Setup Failed !!!"),this.router.navigate(["/accountsetup"]))})}}return t.\u0275fac=function(u){return new(u||t)(e.Y36(i.qu),e.Y36(s.c_),e.Y36(s.$h),e.Y36(s.gq),e.Y36(m.F0),e.Y36(m.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-account-setup"]],decls:142,vars:16,consts:[[1,"c-app"],[1,"c-wrapper"],[1,"c-header"],[1,"col-12"],[1,"d-flex","bg-white","border-bottom"],[1,"p-3","flex-fill","bg-white","m--margin-left-20","m--margin-topM-5"],["src","../../../../../assets/images/logo.png","alt","",1,""],[1,"p-3","flex-fill","bg-white","m--margin-left-20"],[1,"d-flex","flex-row-reverse","bg-white"],[1,"p-4","bg-white"],[1,"p-3","flex-fill","bg-white","m--margin-left-20","m--margin-top-10"],["type","submit",1,"btn","btn-primary","border","rounded-pill"],[1,"c-body"],[1,"c-main"],[1,"row","m--margin-top-20"],[1,"col-1"],[1,"col-10","p-4","border","border-light","rounded-top","rounded-right","rounded-bottom","rounded-left","bg-white"],[1,"jumbotron","jumbotron-fluid"],[1,"container"],[1,"h4"],[1,"color-orange","bold"],["role","form","novalidate","",3,"formGroup","ngSubmit"],["rf","ngForm"],[1,"row"],[1,"col"],["type","text","name","firstName","formControlName","firstName","placeholder","First Name*",1,"form-control","input-field"],["class","required",4,"ngIf"],["type","text","name","middleName","formControlName","middleName","placeholder","Middle Name*",1,"form-control","input-field"],["type","text","name","lastName","formControlName","lastName","placeholder","Last Name*",1,"form-control","input-field"],["name","gender","formControlName","gender",1,"form-control"],["value","","disabled","","selected",""],[3,"ngValue",4,"ngFor","ngForOf"],["type","date","name","dateOfBirth","formControlName","dateOfBirth","placeholder","Date Of Birth*",1,"form-control","input-field"],["type","text","name","email","formControlName","email","placeholder","Email*",1,"form-control","input-field"],["type","number","name","phoneNumber","formControlName","phoneNumber","placeholder","Phone Number*",1,"form-control","input-field"],[1,"h5"],["type","text","name","addressLine1","formControlName","addressLine1","placeholder","Address Line 1*",1,"form-control","input-field"],["type","text","name","addressLine2","formControlName","addressLine2","placeholder","Address Line 2*",1,"form-control","input-field"],["type","text","name","city","formControlName","city","placeholder","City*",1,"form-control","input-field"],["type","text","name","district","formControlName","district","placeholder","District*",1,"form-control","input-field"],["type","text","name","state","formControlName","state","placeholder","State*",1,"form-control","input-field"],["type","text","name","country","formControlName","country","placeholder","Country*",1,"form-control","input-field"],["type","number","name","postalCode","formControlName","postalCode","placeholder","Postal Code*",1,"form-control","input-field"],["name","department","formControlName","department",1,"form-control"],["type","text","name","institutionName","formControlName","institutionName","placeholder","Institution Name",1,"form-control","input-field"],["type","date","name","joiningDate","formControlName","joiningDate","placeholder","Joining Date",1,"form-control","input-field"],["type","text","name","qualification","formControlName","qualification","placeholder","Qualification",1,"form-control","input-field"],["type","number","name","experienceInYears","formControlName","experienceInYears","placeholder","Experience in years",1,"form-control","input-field"],["type","number","name","experienceInMonths","formControlName","experienceInMonths","placeholder","Experience in months",1,"form-control","input-field"],["type","text","name","designationInCollege","formControlName","designationInCollege","placeholder","Designation in College",1,"form-control","input-field"],["type","number","name","collegeID","formControlName","collegeID","placeholder","College ID",1,"form-control","input-field"],["type","submit",1,"btn","btn-primary","border","rounded-pill","floatright"],["type","button",1,"btn","btn-secondary","border","rounded-pill","floatleft"],[1,"required"],[3,"ngValue"]],template:function(u,n){if(1&u&&(e.TgZ(0,"body",0),e.TgZ(1,"div",1),e.TgZ(2,"header",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div"),e._UZ(7,"img",6),e.qZA(),e.qZA(),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"strong"),e._uU(12,"Contact Us"),e.qZA(),e.qZA(),e.TgZ(13,"div",9),e.TgZ(14,"strong"),e._uU(15,"Support"),e.qZA(),e.qZA(),e.TgZ(16,"div",9),e.TgZ(17,"strong"),e._uU(18,"For Instructors"),e.qZA(),e.qZA(),e.TgZ(19,"div",9),e.TgZ(20,"strong"),e._uU(21,"For Institutions"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",10),e.TgZ(23,"div"),e.TgZ(24,"button",11),e._uU(25,"GET A DEMO"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",12),e.TgZ(27,"main",13),e.TgZ(28,"div",14),e._UZ(29,"div",15),e.TgZ(30,"div",16),e.TgZ(31,"div",17),e.TgZ(32,"div",18),e.TgZ(33,"p",19),e.TgZ(34,"span",20),e._uU(35,"Set Up Your Account"),e.qZA(),e.qZA(),e._UZ(36,"br"),e.TgZ(37,"form",21,22),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(39,"div",23),e.TgZ(40,"div",24),e._UZ(41,"input",25),e.YNc(42,f,2,0,"span",26),e.qZA(),e.TgZ(43,"div",24),e._UZ(44,"input",27),e.YNc(45,v,2,0,"span",26),e.qZA(),e.TgZ(46,"div",24),e._UZ(47,"input",28),e.YNc(48,A,2,0,"span",26),e.qZA(),e.qZA(),e._UZ(49,"br"),e.TgZ(50,"div",23),e.TgZ(51,"div",24),e.TgZ(52,"select",29),e.TgZ(53,"option",30),e._uU(54," Select Gender"),e.qZA(),e.YNc(55,h,2,2,"option",31),e.qZA(),e.qZA(),e.TgZ(56,"div",24),e._UZ(57,"input",32),e.YNc(58,q,2,0,"span",26),e.qZA(),e.TgZ(59,"div",24),e._UZ(60,"input",33),e.YNc(61,T,2,0,"span",26),e.qZA(),e.TgZ(62,"div",24),e._UZ(63,"input",34),e.YNc(64,_,2,0,"span",26),e.qZA(),e.qZA(),e._UZ(65,"br"),e.TgZ(66,"p",35),e._uU(67,"Your Address"),e.qZA(),e._UZ(68,"br"),e.TgZ(69,"div",23),e.TgZ(70,"div",24),e._UZ(71,"input",36),e.YNc(72,b,2,0,"span",26),e.qZA(),e.TgZ(73,"div",24),e._UZ(74,"input",37),e.YNc(75,S,2,0,"span",26),e.qZA(),e._UZ(76,"div",24),e.qZA(),e._UZ(77,"br"),e.TgZ(78,"div",23),e.TgZ(79,"div",24),e._UZ(80,"input",38),e.YNc(81,N,2,0,"span",26),e.qZA(),e.TgZ(82,"div",24),e._UZ(83,"input",39),e.YNc(84,C,2,0,"span",26),e.qZA(),e.TgZ(85,"div",24),e._UZ(86,"input",40),e.YNc(87,U,2,0,"span",26),e.qZA(),e._UZ(88,"div",24),e._UZ(89,"div",24),e.qZA(),e._UZ(90,"br"),e.TgZ(91,"div",23),e.TgZ(92,"div",24),e._UZ(93,"input",41),e.YNc(94,y,2,0,"span",26),e.qZA(),e.TgZ(95,"div",24),e._UZ(96,"input",42),e.YNc(97,I,2,0,"span",26),e.qZA(),e._UZ(98,"div",24),e._UZ(99,"div",24),e._UZ(100,"div",24),e.qZA(),e._UZ(101,"br"),e.TgZ(102,"p",35),e._uU(103,"Work Details"),e.qZA(),e._UZ(104,"br"),e.TgZ(105,"div",23),e.TgZ(106,"div",24),e.TgZ(107,"select",43),e.TgZ(108,"option",30),e._uU(109," Select Department "),e.qZA(),e.YNc(110,F,2,2,"option",31),e.qZA(),e.qZA(),e.TgZ(111,"div",24),e._UZ(112,"input",44),e.qZA(),e._UZ(113,"div",24),e.qZA(),e._UZ(114,"br"),e.TgZ(115,"div",23),e.TgZ(116,"div",24),e._UZ(117,"input",45),e.qZA(),e.TgZ(118,"div",24),e._UZ(119,"input",46),e.qZA(),e._UZ(120,"div",24),e.qZA(),e._UZ(121,"br"),e.TgZ(122,"div",23),e.TgZ(123,"div",24),e._UZ(124,"input",47),e.qZA(),e.TgZ(125,"div",24),e._UZ(126,"input",48),e.qZA(),e._UZ(127,"div",24),e.qZA(),e._UZ(128,"br"),e.TgZ(129,"div",23),e.TgZ(130,"div",24),e._UZ(131,"input",49),e.qZA(),e.TgZ(132,"div",24),e._UZ(133,"input",50),e.qZA(),e._UZ(134,"div",24),e.qZA(),e._UZ(135,"br"),e.TgZ(136,"button",51),e._uU(137,"Submit To Start Accessing Maanavar"),e.qZA(),e.TgZ(138,"button",52),e._uU(139,"Cancel"),e.qZA(),e._UZ(140,"br"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(141,"div",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&u){const a=e.MAs(38);e.xp6(37),e.Q6J("formGroup",n.accountSetupForm),e.xp6(5),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.firstName.touched)&&!n.accountSetupForm.value.firstName),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.middleName.touched)&&!n.accountSetupForm.value.middleName),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.lastName.touched)&&!n.accountSetupForm.value.lastName),e.xp6(7),e.Q6J("ngForOf",n.genders),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.dateOfBirth.touched)&&!n.accountSetupForm.value.dateOfBirth),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.email.touched)&&!n.accountSetupForm.value.email),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.phoneNumber.touched)&&!n.accountSetupForm.value.phoneNumber),e.xp6(8),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.addressLine1.touched)&&!n.accountSetupForm.value.addressLine1),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.addressLine2.touched)&&!n.accountSetupForm.value.addressLine2),e.xp6(6),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.city.touched)&&!n.accountSetupForm.value.city),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.district.touched)&&!n.accountSetupForm.value.district),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.state.touched)&&!n.accountSetupForm.value.state),e.xp6(7),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.country.touched)&&!n.accountSetupForm.value.country),e.xp6(3),e.Q6J("ngIf",(a.submitted||n.accountSetupForm.controls.postalCode.touched)&&!n.accountSetupForm.value.postalCode),e.xp6(13),e.Q6J("ngForOf",n.departments)}},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,p.O5,i.EJ,i.YN,i.Kr,p.sg,i.wV],styles:[""]}),t})();var Y=d(2197);const L=[{path:"",component:x}];let J=(()=>{class t{}return t.\u0275fac=function(u){return new(u||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,Y.m,m.Bz.forChild(L)]]}),t})()}}]);