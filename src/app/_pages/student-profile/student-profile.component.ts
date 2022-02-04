import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../../_services/registration.service';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  id!: number;
  routeData: any;
  studentProfileViewModel!: any;

  constructor(
    private registrationService: RegistrationService,
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
      map(this.getStudentProfileInformation.bind(this)),
      tap()
    ).subscribe(success => {
     }, error => {
      //this.spinner.hide();
    });
  }

  getStudentProfileInformation(){
    return this.registrationService.getStudentProfileInformation(this.id)
      .subscribe(response => {
      if (response) {
        this.studentProfileViewModel = response;   
        return response;
      } else {        
        return false;
      }
    }); 
  }

}
