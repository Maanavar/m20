import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent, RegisterComponent, AccountSetupComponent, ProfileComponent, HomeComponent,
    OtpVerificationComponent, ChangePasswordComponent, CourseCreateComponent, CourseListingComponent, CourseViewComponent
} from './_pages/index';
import { AuthenticationService, UserService, RegistrationService, NotificationService} from './_services/index';

import { appRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { SwiperModule } from "swiper/angular";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { InstructorAccountComponent } from './_pages/instructor-account/instructor-account.component';
import { StudentAccountComponent } from './_pages/student-account/student-account.component';
import { MainPageComponent } from './_pages/main-page/main-page.component';
import { StudentProfileComponent } from './_pages/student-profile/student-profile.component';
import { InstructorProfileComponent } from './_pages/instructor-profile/instructor-profile.component';
import { InstructorCourseListingComponent } from './_pages/instructor-course-listing/instructor-course-listing.component';
import { StudentMainPageComponent } from './_pages/student-main-page/student-main-page.component';
import { StudentCourseListComponent } from './_pages/student-course-list/student-course-list.component';
import { NewSubjectComponent } from './_pages/new-subject/new-subject.component';
import { ReviewSubjectComponent } from './_pages/review-subject/review-subject.component';
import { SubjectFolderComponent } from './_instructor/subject-folder/subject-folder.component';
import { InsideFolderComponent } from './_instructor/inside-folder/inside-folder.component';
import { StudentDetailComponent } from './_instructor/student-detail/student-detail.component';
import { AssignmentDetailComponent } from './_instructor/assignment-detail/assignment-detail.component';
import { BatchesComponent } from './_instructor/batches/batches.component';
import { MyBatchComponent } from './_instructor/my-batch/my-batch.component';
import { PaginationComponent } from './_instructor/pagination/pagination.component';
import { ViewStudentSubmissionComponent } from './_instructor/view-student-submission/view-student-submission.component';
import { StudentAssignmentSubmissionComponent } from './_student';
import { AssignmentFileComponent } from './_student/assignment-file/assignment-file.component';

import { NavbarComponent } from './_pages/navbar/navbar.component';
import { ForgotpasswordComponent } from './_pages/forgotpassword/forgotpassword.component';
import { CreatepasswordComponent } from './_pages/createpassword/createpassword.component';
import { CheckmailComponent } from './_pages/checkmail/checkmail.component';
import { LayoutComponent } from './_pages/layout/layout.component';
import { NewpasswordComponent } from './_pages/newpassword/newpassword.component';
import { AnnouncementsComponent } from './_pages/announcements/announcements.component';
import { AnnouncementdetailsComponent } from './_pages/announcementdetails/announcementdetails.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TaskComponent } from './_pages/task/task.component';

@NgModule({
  imports: [
    CommonModule,
    AutocompleteLibModule,
    AmazingTimePickerModule,
    SwiperModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    NgbModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    InfiniteScrollModule,
    NgxSpinnerModule,
    IconModule,
    IconSetModule.forRoot()
],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountSetupComponent,
    ProfileComponent,
    HomeComponent,
    OtpVerificationComponent,
    ChangePasswordComponent,
    CourseListingComponent,
    CourseCreateComponent,
    CourseViewComponent,
    InstructorAccountComponent,
    StudentAccountComponent,
    MainPageComponent,
    StudentProfileComponent,
    InstructorProfileComponent,
    InstructorCourseListingComponent,
    StudentMainPageComponent,
    StudentCourseListComponent,
    NewSubjectComponent,
    ReviewSubjectComponent,
    SubjectFolderComponent,
    InsideFolderComponent,
    StudentDetailComponent,
    AssignmentDetailComponent,
    BatchesComponent,
    MyBatchComponent,
    PaginationComponent,
    StudentAssignmentSubmissionComponent,
    ViewStudentSubmissionComponent,
    AssignmentFileComponent,
    NavbarComponent,
    ForgotpasswordComponent,
    CreatepasswordComponent,
    CheckmailComponent,
    LayoutComponent,
    NewpasswordComponent,
    AnnouncementsComponent,
    AnnouncementdetailsComponent,
    TaskComponent
  ],
  providers: [
    AuthenticationService,
    UserService,
    RegistrationService,
    NotificationService,
    IconSetService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
