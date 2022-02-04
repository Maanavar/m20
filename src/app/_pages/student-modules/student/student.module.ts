import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { CommonSideNavModule } from 'src/app/shared-modules/common-side-nav/common-side-nav.module';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { InstructorModule } from '../../instructor-modules/instructor/instructor.module';
import { HomeComponent } from '../../instructor-modules/instructor/home/home.component';
import { CalendarComponent } from '../../instructor-modules/instructor/calendar/calendar.component';
import { StudentCourseListComponent } from './student-course-list/student-course-list.component';
import { SubjectFolderComponent } from '../../instructor-modules/instructor/subject-folder/subject-folder.component';
import { FilesFoldersComponent } from '../../instructor-modules/instructor/files-folders/files-folders.component';
import { LecturesComponent } from '../../instructor-modules/instructor/lectures/lectures.component';
import { AssignmentsComponent } from '../../instructor-modules/instructor/assignments/assignments.component';
import { AssignmentDetailComponent } from '../../instructor-modules/instructor/assignment-detail/assignment-detail.component';
import { ViewStudentSubmissionComponent } from '../../instructor-modules/instructor/view-student-submission/view-student-submission.component';
import { AllStudentsComponent } from '../../instructor-modules/instructor/all-students/all-students.component';
import { StudentAssignmentListsComponent } from '../../instructor-modules/instructor/student-assignment-lists/student-assignment-lists.component';
import { DiscussionForumComponent } from '../../instructor-modules/instructor/discussion-forum/discussion-forum.component';
import { SubjectOverviewComponent } from '../../instructor-modules/instructor/subject-overview/subject-overview.component';
import { GradebookComponent } from '../../instructor-modules/instructor/gradebook/gradebook.component';
import { MyscheduleComponent } from '../../instructor-modules/instructor/myschedule/myschedule.component';
import { MyBatchComponent } from '../../instructor-modules/instructor/my-batch/my-batch.component';

const routes: Routes = [{
  path: '', component: RootComponent, children:[
    {path:'home', component: HomeComponent},
    { path: 'calendar', component: CalendarComponent},
    { path: 'student-course-list', component: StudentCourseListComponent},
    {
      path: 'student-course-list/subject-folder', component: SubjectFolderComponent, children: [
        { path: '', component: FilesFoldersComponent },
        { path: 'lectures', component: LecturesComponent },
        { path: 'assignments', component: AssignmentsComponent },
        { path: 'assignment-details', component: AssignmentDetailComponent},
        { path: 'view-assignment', component: ViewStudentSubmissionComponent},
        { path: 'all-students', component: AllStudentsComponent},
        { path: 'student-assignmentList', component: StudentAssignmentListsComponent},
        { path: 'discussion', component: DiscussionForumComponent },
        { path: 'overview', component: SubjectOverviewComponent },
        { path: 'gradebook', component: GradebookComponent}
      ]
    },
    { path: 'myschedule', component: MyscheduleComponent },
    { path: 'my-batch', component: MyBatchComponent },

  ]
}]

@NgModule({
  declarations: [
    RootComponent,
    StudentCourseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InstructorModule,
    CommonSideNavModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
