import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService, NotificationService } from '../../../_services/index';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
  providers: [IconSetService]
})
export class CourseViewComponent implements OnInit {
  id!: number;
  routeData: any;
  course!: any;

  constructor(
    private courseService: CourseService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    public iconSet: IconSetService) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.routeData = this.route.snapshot.data;
    this.loadData();
  }

  loadData() {
    of(true).pipe(
      tap(),
      map(this.getCourseDetails.bind(this)),
      tap()
    ).subscribe(success => {
     }, error => {
      //this.spinner.hide();
    });
  }

  getCourseDetails(){
    return this.courseService.managecourse(this.id)
      .subscribe(response => {
      if (response) {
        this.course = response;   
        return response;
      } else {        
        return false;
      }
    }); 
  }

  editCourse(){
    this.router.navigate(['/editcourse', this.id]); 
  }
}
