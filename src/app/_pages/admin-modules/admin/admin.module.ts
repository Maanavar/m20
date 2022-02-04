import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { CommonSideNavModule } from 'src/app/shared-modules/common-side-nav/common-side-nav.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstitutionProfileComponent } from './institution-profile/institution-profile.component';
import { SetupComponent } from './setup/setup.component';
import { DepartmentComponent } from './department/department.component';
import { CoursesetupComponent } from './coursesetup/coursesetup.component';
import { DesignationsComponent } from './designations/designations.component';
import { RolesComponent } from './roles/roles.component';
import { SectionsComponent } from './sections/sections.component';
import { SubjectComponent } from './subject/subject.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { StudentComponent } from './student/student.component';
import { BatchesComponent } from './batches/batches.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { DeptCourseComponent } from './dept-course/dept-course.component';
import { SemesterComponent } from './semester/semester.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'institution-profile', component: InstitutionProfileComponent },
      { path: 'setup', component: SetupComponent },
      { path: 'setup/department', component: DepartmentComponent },
      { path: 'setup/course', component: CoursesetupComponent },
      { path: 'setup/designation', component: DesignationsComponent },
      { path: 'setup/roles-rights', component: RolesComponent },
      { path: 'setup/sections', component: SectionsComponent },
      { path: 'setup/subject', component: SubjectComponent },
      { path: 'manage-users', component: ManageuserComponent },
      { path: 'manage-users/batches', component: BatchesComponent },
      { path: 'manage-users/student', component: StudentComponent },
      { path: 'admin-syllabus', component: SyllabusComponent },
      { path: 'admin-syllabus/admin-department-course', component: DeptCourseComponent },
      { path: 'admin-syllabus/admin-course-semester', component: SemesterComponent },
      { path: 'admin-syllabus/admin-semester-subject', component: SubjectsComponent },
      { path : 'admin-schedule', component: ScheduleComponent},
      { path: '**', redirectTo: '/admin/dashboard' }
    ]
  }
]

@NgModule({
  declarations: [
    RootComponent,
    DashboardComponent,
    InstitutionProfileComponent,
    SetupComponent,
    DepartmentComponent,
    CoursesetupComponent,
    DesignationsComponent,
    SectionsComponent,
    RolesComponent,
    ManageuserComponent,
    SubjectComponent,
    StudentComponent,
    BatchesComponent,
    SyllabusComponent,
    DeptCourseComponent,
    SemesterComponent,
    SubjectsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonSideNavModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
