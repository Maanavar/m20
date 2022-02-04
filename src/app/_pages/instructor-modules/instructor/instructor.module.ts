import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { CommonSideNavModule } from 'src/app/shared-modules/common-side-nav/common-side-nav.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MyscheduleComponent } from './myschedule/myschedule.component';
import { BatchesComponent } from './batches/batches.component';
import { MyBatchComponent } from './my-batch/my-batch.component';
import { InstructorCourseListingComponent } from './instructor-course-listing/instructor-course-listing.component';
import { NewSubjectComponent } from './new-subject/new-subject.component';
import { ReviewSubjectComponent } from './review-subject/review-subject.component';
import { SubjectFolderComponent } from './subject-folder/subject-folder.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TaskComponent } from './task/task.component';
import { FilesFoldersComponent } from './files-folders/files-folders.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { SubjectOverviewComponent } from './subject-overview/subject-overview.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ViewStudentSubmissionComponent } from './view-student-submission/view-student-submission.component';
import { StudentAssignmentListsComponent } from './student-assignment-lists/student-assignment-lists.component';
const routes: Routes = [
  {
    path: '', component: RootComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'myschedule', component: MyscheduleComponent },
      { path: 'batches', component: BatchesComponent },
      { path: 'my-batch', component: MyBatchComponent },
      { path: 'instructor-course-list', component: InstructorCourseListingComponent },
      { path: 'new-subject', component: NewSubjectComponent },
      { path: 'review-subject', component: ReviewSubjectComponent },
      {
        path: 'instructor-course-list/subject-folder', component: SubjectFolderComponent, children: [
          { path: '', component: FilesFoldersComponent },
          { path: 'lectures', component: LecturesComponent },
          { path: 'assignments', component: AssignmentsComponent },
          { path: 'assignment-details', component: AssignmentDetailComponent},
          { path: 'view-assignment', component: ViewStudentSubmissionComponent},
          { path: 'all-students', component: AllStudentsComponent},
          { path: 'student-assignmentList', component: StudentAssignmentListsComponent},
          { path: 'discussion', component: DiscussionForumComponent },
          { path: 'overview', component: SubjectOverviewComponent }
        ]
      },
      { path: 'announcements', component: AnnouncementsComponent },
      { path: 'task', component: TaskComponent },

      // { path: '**', redirectTo: '/instructor/home' },
    ]
  },

]

@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    CalendarComponent,
    MyscheduleComponent,
    BatchesComponent,
    MyBatchComponent,
    NewSubjectComponent,
    InstructorCourseListingComponent,
    ReviewSubjectComponent,
    SubjectFolderComponent,
    AssignmentDetailComponent,
    AnnouncementsComponent,
    TaskComponent,
    FilesFoldersComponent,
    AssignmentsComponent,
    GradebookComponent,
    AllStudentsComponent,
    DiscussionForumComponent,
    SubjectOverviewComponent,
    LecturesComponent,
    ViewStudentSubmissionComponent,
    StudentAssignmentListsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonSideNavModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent,
    CalendarComponent,
    SubjectFolderComponent,
    FilesFoldersComponent,
    LecturesComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    ViewStudentSubmissionComponent,
    AllStudentsComponent,
    StudentAssignmentListsComponent,
    DiscussionForumComponent,
    SubjectOverviewComponent,
    GradebookComponent,
    MyscheduleComponent,
    MyBatchComponent
  ]
})
export class InstructorModule { }
