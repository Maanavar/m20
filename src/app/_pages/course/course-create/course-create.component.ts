import { Component, OnInit } from '@angular/core';
import { Course } from '../../../_models/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService, NotificationService } from '../../../_services/index';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {
  id!: number;
  routeData: any;
  basicDetail: boolean = true;
  advDetail: boolean = false;
  reviewDetail: boolean = false;
  courseForm!: FormGroup;
  courseDetails! : any;
  errorMsg = '';
  departmentName!: string | undefined ;
  departments = [
    { label: 'Automobile' , value: '1' },
    { label: 'Civil', value: '2' },
    { label: 'Computer Science', value: '3' },
    { label: 'Electronics and Communication', value: '4' },
    { label: 'Fashion Technology', value: '5' },
    { label: 'Instrumentation', value: '6' },
    { label: 'Information Techology', value: '7' },
    { label:'Mechanical', value: '8' },
    { label:'Science and Humanities', value: '9' }
  ];
  semesterName!: string | undefined ;
  semesters = [
    { label: 'First' , value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3' },
    { label: 'Fourth', value: '4' },
    { label: 'Fifth', value: '5' },
    { label: 'Sixth', value: '6' },
    { label: 'Seventh', value: '7' },
    { label: 'Eighth', value: '8' }
  ];
  sectionName!: string | undefined ;
  sections = [
    { label: 'A' , value: '1' },
    { label: 'B', value: '2' }
  ];

  constructor(private fb: FormBuilder,
    private router: Router,
    private courseService: CourseService,
    private notificationService: NotificationService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) { }

  get f(){
      return this.courseForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];    
    this.routeData = this.route.snapshot.data;
    this.courseForm = this.fb.group({ 
      courseKeyword: ['', [Validators.required]],
      courseCode: ['', [Validators.required]],
      courseName: ['', [Validators.required]],
      courseAnnouncement: ['', [Validators.required]],
      courseDescription: ['', [Validators.required]],
      courseImageUrl: ['', [Validators.required]],
      students: ['', [Validators.required]],
      department: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      section: ['', [Validators.required]],
      instructorName: ['', [Validators.required]]
    });
    if(this.id != undefined){
      this.loadData();
    }
  }

  nextAdvDetail(){
    this.basicDetail = false;
    this.advDetail = true;
    this.reviewDetail = false;
  }

  nextReviewDetail(){
    this.basicDetail = false;
    this.advDetail = false;
    this.reviewDetail = true;
    const val = this.courseForm.value;
    this.departmentName = this.departments.find(x => x.value === val.department)?.label.toString();
    this.semesterName = this.semesters.find(x => x.value === val.semester)?.label.toString();
    this.sectionName = this.sections.find(x => x.value === val.section)?.label.toString();
    this.courseDetails = { 
      CourseKeyword: val.courseKeyword,
      CourseId: val.courseCode, 
      CourseName: val.courseName,
      CourseAnnouncement: val.courseAnnouncement,
      CourseDescription: val.courseDescription,
      CourseImgURL: val.courseImageUrl,        
      Students: val.students,
      DepartmentId: val.department,
      Department: {        
        DepartmentName: this.departmentName?.toString()
      },
      SemesterId: val.semester,
      Semester: {        
        SemesterName: this.semesterName?.toString()
      },
      SectionId: val.section,
      Section:{
        SectionName: this.sectionName?.toString()
      },
      InstructorName:  val.instructorName
    }
  }

  onSaveDraft(){
    if (this.courseForm.invalid) {
      return;
    }  
    this.courseDetails.PublishStatus = false;
    this.courseDetails.IsDraft = true;
    this.courseDetails.IsArchived = false;
    if (this.courseDetails && this.id == undefined) {
      this.spinner.show();
      this.courseService.coursecreate(this.courseDetails, true)
        .subscribe(
          (res) => {
            if (!res.error) {
              if(res){
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Added Successfully !!!"); 
                this.router.navigate(['/courselisting']);
              }
              else{   
                this.spinner.hide(); 
                this.notificationService.notifySuccess("Course Details Adding Failed !!!");             
                this.router.navigate(['/courselisting']);
              }
            } else {
              this.errorMsg = res.error.message;
            }
          }
        );
    }
    else{
      this.courseService.editcourse(this.id, this.courseDetails, true)
        .subscribe(
          (res) => {
            if (!res.error) {
              if(res){
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Added Successfully !!!"); 
                this.router.navigate(['/courselisting']);
              }
              else{    
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Adding Failed !!!");             
                this.router.navigate(['/courselisting']);
              }
            } else {
              this.errorMsg = res.error.message;
            }
          }
        );
    }
  }

  onSubmit(){
    if (this.courseForm.invalid) {
      return;
    }    
    this.courseDetails.PublishStatus = true;
    this.courseDetails.IsDraft = false;
    this.courseDetails.IsArchived = false;
    this.courseDetails.PublishedDate = new Date();
    if (this.courseDetails && this.id == undefined) {
      this.spinner.show();
      this.courseService.coursecreate(this.courseDetails, false)
        .subscribe(
          (res) => {
            if (!res.error) {
              if(res){
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Submitted Successfully !!!"); 
                this.router.navigate(['/courselisting']);
              }
              else{    
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Adding Failed !!!");             
                this.router.navigate(['/courselisting']);
              }
            } else {
              this.errorMsg = res.error.message;
            }
          }
        );
    }
    else{
      this.courseService.editcourse(this.id, this.courseDetails, false)
        .subscribe(
          (res) => {
            if (!res.error) {
              if(res){
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Submitted Successfully !!!"); 
                this.router.navigate(['/courselisting']);
              }
              else{    
                this.spinner.hide();
                this.notificationService.notifySuccess("Course Details Adding Failed !!!");             
                this.router.navigate(['/courselisting']);
              }
            } else {
              this.errorMsg = res.error.message;
            }
          }
        );
    }
  }

  onDiscard(){
    this.basicDetail = true;
    this.advDetail = false;
    this.reviewDetail = false;
    this.courseForm.reset();
  }

  onFileChange(event: any) {  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.courseForm.patchValue({
        courseImageUrl: file
      });
    }
  }  

  loadData() {
    of(true).pipe(
      tap(() => this.spinner.show()),
      map(this.getCourseDetails.bind(this)),
      tap(() => this.spinner.hide())
    ).subscribe(success => {      
     }, error => {
      //this.spinner.hide();
    });
  }

  getCourseDetails(){
    return this.courseService.managecourse(this.id)
      .subscribe(response => {
      if (response) {
        this.courseDetails = response;   
        this.updateForm();
        return response;
      } else {        
        return false;
      }
    }); 
  }

  updateForm() {
    this.courseForm.patchValue({
      courseKeyword: this.courseDetails.courseKeyword,
      courseCode: this.courseDetails.courseId,
      courseName: this.courseDetails.courseName,
      courseAnnouncement: this.courseDetails.courseAnnouncement,
      courseDescription: this.courseDetails.courseDescription,
      courseImageUrl: this.courseDetails.courseImgURL,
      instructorName: this.courseDetails.instructorName
    });

    this.departmentName = this.departments.find(item => item.value == this.courseDetails.departmentId)?.value.toString();
    this.semesterName = this.semesters.find(item => item.value == this.courseDetails.semesterId)?.value.toString();
    this.sectionName = this.sections.find(item => item.value == this.courseDetails.sectionId)?.value.toString();
  }
}
