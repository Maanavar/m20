import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-folder',
  templateUrl: './subject-folder.component.html',
  styleUrls: ['./subject-folder.component.scss']
})
export class SubjectFolderComponent implements OnInit {
  user = ''
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.user = this.router.url.split('/')[1]

  }

  routePage(route:string){
    if(this.user == 'instructor'){
      this.router.navigate([`/instructor/instructor-course-list/${route}`])
    }else if(this.user == 'students'){
      this.router.navigate([`/students/student-course-list/${route}`])
    }
  }

}
