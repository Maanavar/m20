import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent , RegisterComponent, AccountSetupComponent, ProfileComponent, 
         HomeComponent, OtpVerificationComponent, ChangePasswordComponent, 
         CourseCreateComponent, CourseListingComponent, CourseViewComponent, MainPageComponent, StudentAccountComponent, InstructorAccountComponent, StudentProfileComponent, InstructorProfileComponent, InstructorCourseListingComponent, StudentMainPageComponent, StudentCourseListComponent, NewSubjectComponent, ReviewSubjectComponent, } from './_pages/index';
import { AuthGuard } from './_helpers';
import {SubjectFolderComponent, InsideFolderComponent, StudentDetailComponent, AssignmentDetailComponent, BatchesComponent, MyBatchComponent, PaginationComponent, ViewStudentSubmissionComponent} from './_instructor';
import {StudentAssignmentSubmissionComponent,AssignmentFileComponent} from './_student';
import { NavbarComponent } from './_pages/navbar/navbar.component';
import { ForgotpasswordComponent } from './_pages/forgotpassword/forgotpassword.component';
import { CreatepasswordComponent } from './_pages/createpassword/createpassword.component';
import { LayoutComponent } from './_pages/layout/layout.component';
import { NewpasswordComponent } from './_pages/newpassword/newpassword.component';
import { AnnouncementsComponent } from './_pages/announcements/announcements.component';
import { AnnouncementdetailsComponent } from './_pages/announcementdetails/announcementdetails.component';
import { TaskComponent } from './_pages/task/task.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: LayoutComponent, children:[
    {path : 'home', component: HomeComponent},
    {path : 'announcements', component: AnnouncementsComponent},
    {path : 'announcement-detail', component: AnnouncementdetailsComponent},
    {path : 'task', component: TaskComponent}
    
  ]},
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'createpassword', component: CreatepasswordComponent },
  { path: 'newpassword', component: NewpasswordComponent },
  { path: 'accountsetup/:userID', component: AccountSetupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'otpverification/:userID/:otp', component: OtpVerificationComponent },
  { path: 'resetpassword/:id/:token', component: ChangePasswordComponent },  
  {
    path: 'course',
    children: [
      { path: '', component: CourseListingComponent },
      { path: 'view/:id', component: CourseViewComponent},
      { path: 'edit/:id', component: CourseCreateComponent},
      { path: 'add', component: CourseCreateComponent}
    ],
    canActivate: [AuthGuard]
  },
  { path: 'instructor', component: InstructorAccountComponent },
  { path: 'student', component: StudentAccountComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'instructor-profile', component: InstructorProfileComponent },
  { path: 'instructor-course-list', component: InstructorCourseListingComponent},
  { path: 'student-page', component: StudentMainPageComponent},
  { path: 'student-course-list', component: StudentCourseListComponent},
  { path : 'new-subject', component: NewSubjectComponent},
  { path : 'review-subject', component: ReviewSubjectComponent},
  { path : 'subject-folder', component: SubjectFolderComponent},
  { path : 'lectures', component: InsideFolderComponent},
  { path : 'student-detail', component: StudentDetailComponent},
  { path : 'assignment-details', component: AssignmentDetailComponent},
  { path : 'batches', component: BatchesComponent},
  { path : 'my-batch', component: MyBatchComponent},
  { path : 'pagination', component: PaginationComponent},
  { path : 'view-student-submission', component: ViewStudentSubmissionComponent},
  { path : 'student-assignment-submisson', component: StudentAssignmentSubmissionComponent},
  { path : 'assignment-file', component: AssignmentFileComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);