import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {  CourseCreateComponent, CourseListingComponent, CourseViewComponent
} from './_pages/index';
import { AuthenticationService, UserService, RegistrationService, NotificationService} from './_services/index';

import { appRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {  IconSetModule, IconSetService } from '@coreui/icons-angular';
import {
  ToastrModule,
  ToastNoAnimation
} from 'ngx-toastr';
import { InstructorAccountComponent } from './_pages/instructor-account/instructor-account.component';
import { StudentAccountComponent } from './_pages/student-account/student-account.component';
import { MainPageComponent } from './_pages/main-page/main-page.component';
import { StudentProfileComponent } from './_pages/student-profile/student-profile.component';
import { InstructorProfileComponent } from './_pages/instructor-profile/instructor-profile.component';
import { StudentMainPageComponent } from './_pages/student-main-page/student-main-page.component';
import { StudentAssignmentSubmissionComponent } from './_student';
import { AssignmentFileComponent } from './_student/assignment-file/assignment-file.component';
import { NavbarComponent } from './_pages/navbar/navbar.component';
import { LayoutComponent } from './_pages/layout/layout.component';
import { AnnouncementdetailsComponent } from './_pages/announcementdetails/announcementdetails.component';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';

// import { BatchesComponent } from './_pages/batches/batches.component';
import { SharedModule } from './shared-modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    appRoutingModule,
    ToastrModule.forRoot({
      toastComponent: ToastNoAnimation,
      maxOpened: 1,
      autoDismiss: true
    }),
    IconSetModule.forRoot()
],
  declarations: [
    AppComponent,
    CourseListingComponent,
    CourseCreateComponent,
    CourseViewComponent,
    NavbarComponent,
    LayoutComponent,
    InstructorAccountComponent,
    StudentAccountComponent,
    MainPageComponent,
    StudentProfileComponent,
    InstructorProfileComponent,
    InstructorProfileComponent,
    StudentMainPageComponent,
    StudentAssignmentSubmissionComponent,
    AssignmentFileComponent,
    AnnouncementdetailsComponent
  ],
  providers: [
    AuthenticationService,
    UserService,
    RegistrationService,
    NotificationService,
    IconSetService,
    DayService, 
    WeekService,
     WorkWeekService, 
     MonthService, 
     AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
