import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CourseCreateComponent, CourseListingComponent, CourseViewComponent, MainPageComponent, StudentAccountComponent, InstructorAccountComponent, StudentProfileComponent, InstructorProfileComponent, StudentMainPageComponent } from './_pages/index';
import { AuthGuard } from './_helpers';
import {StudentAssignmentSubmissionComponent,AssignmentFileComponent} from './_student';
import { NavbarComponent } from './_pages/navbar/navbar.component';
import { LayoutComponent } from './_pages/layout/layout.component';
import { AnnouncementdetailsComponent } from './_pages/announcementdetails/announcementdetails.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },//AdminModule //loadChildren: () => import('./_pages/admin-modules/admin/admin.module').then(m => m.AdminModule)
  { path: 'admin', loadChildren: () => import('./_pages/admin-modules/admin/admin.module').then(m => m.AdminModule)} , 
  { path: 'instructor', loadChildren: () => import('./_pages/instructor-modules/instructor/instructor.module').then(m => m.InstructorModule)} ,
  { path: 'students', loadChildren: () => import('./_pages/student-modules/student/student.module').then(m => m.StudentModule)} ,

    
    {path : 'announcement-detail', component: AnnouncementdetailsComponent},
    { path: 'instructor-profile', component: InstructorProfileComponent },
    { path: 'student-profile', component: StudentProfileComponent },

    { path : 'assignment-file', component: AssignmentFileComponent},
    { path : 'student-assignment-submisson', component: StudentAssignmentSubmissionComponent},
    
  // ]},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./_pages/modules/login/login.module').then(m => m.LoginModule)},
  { path: 'register',  loadChildren: () => import('./_pages/modules/register/register.module').then(m => m.RegisterModule)},
  { path: 'verify', loadChildren: () => import('./_pages/modules/verify-email/verify-email.module').then(m => m.VerifyEmailModule)},
  { path: 'forgotpassword', loadChildren: () => import('./_pages/modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'createpassword/:id/:token', loadChildren: () => import('./_pages/modules/create-password/create-password.module').then(m => m.CreatePasswordModule) },
  { path: 'newpassword',  loadChildren: () => import('./_pages/modules/new-password/new-password.module').then(m => m.NewPasswordModule) },
  { path: 'accountsetup/:userID',  loadChildren: () => import('./_pages/modules/account-setup/account-setup.module').then(m => m.AccountSetupModule) },
  { path: 'profile', loadChildren: () => import('./_pages/modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'otpverification/:userID/:otp',  loadChildren: () => import('./_pages/modules/otp-verification/otp-verification.module').then(m => m.OtpVerificationModule)},
  { path: 'resetpassword/:id/:token',loadChildren: () => import('./_pages/modules/change-password/change-password.module').then(m => m.ChangePasswordModule) },  
  { path: 'checkemail',loadChildren: () => import('./_pages/modules/check-email/check-email.module').then(m => m.CheckEmailModule)  },
  {
    path: 'course',
    children: [
      { path: '', component: CourseListingComponent },
      { path: 'view/:id', component: CourseViewComponent},
      { path: 'edit/:id', component: CourseCreateComponent},
      { path: 'add', component: CourseCreateComponent}
    ],
    // canActivate: [AuthGuard]
  },
  { path: 'instructors', component: InstructorAccountComponent },
  { path: 'student', component: StudentAccountComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'student-page', component: StudentMainPageComponent},  
  // { path : 'pagination', component: PaginationComponent},
  { path : 'layout', component: LayoutComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);