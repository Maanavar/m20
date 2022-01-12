import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService, NotificationService } from '../../../_services/index';
import { CourseResult } from 'src/app/_models/course.result.model';
@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent implements OnInit {
  searchText = "";
  courseResult!: CourseResult;
  allCourses!: any[];
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  pageSize: number = 10;
  pageNumber: number = 1;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private notificationService: NotificationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();    
  }

  createNewCourse(){
    this.router.navigate(['/coursecreate']);
  }

  loadData() {
    of(true).pipe(
      tap(),
      map(this.getAllCourses.bind(this)),
      tap()
    ).subscribe(success => {
     }, error => {
      //this.spinner.hide();
    });
  }

  getAllCourses() {
    return this.courseService.getcourses(this.searchText, this.pageNumber, this.pageSize)
      .subscribe(response => {
      if (response) {
        this.courseResult = response;    
        if(this.allCourses  == undefined){
          this.allCourses = response.results;
        }
        else{
          response.results.forEach((element: any) => {
            this.allCourses.push(element);
          });          
        }
        return response;
      } else {        
        return false;
      }
    });    
  }

  onScrollDown() {
    const start =  this.pageNumber;
    this.pageNumber += 1;
    this.loadData();
    this.direction = "down";
  }

  onSearchTextChange(event: any){
    this.searchText = event.target.value;
    this.allCourses = [];
    this.loadData();
  }

}
