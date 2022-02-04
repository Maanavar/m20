import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService, AuthenticationService, NotificationService } from '../../../../_services/index';
import { User } from '../../../../_models/index';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit {
  userID!: number;
  routeData: any;
  email!: string |  undefined;
  accountSetupForm!: FormGroup;
  errorMsg = '';
  user!: User;
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
  genderName!: string | undefined ;
  genders = [
    { label: 'Male' , value: '1' },
    { label: 'Female', value: '2' }
  ];

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.email = this.authService.getloggedInUser()?.Email;
  }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.routeData = this.route.snapshot.data;
    this.accountSetupForm = this.fb.group({
      email: [{value: this.email, disabled: false}, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      department: [''],
      institutionName: [''],
      joiningDate: [''],
      qualification: [''],
      experienceInYears: [''],
      experienceInMonths: [''],
      designationInCollege: [''],
      collegeID: [''],
    });
  }

  onSubmit() {
    if (this.accountSetupForm.invalid) {
      return;
    }
    const val = this.accountSetupForm.value;
    this.departmentName = this.departments.find(x => x.value === val.department)?.label.toString();
    this.genderName = this.genders.find(x => x.value === val.gender)?.label.toString();
    this.user = { 
      Email: val.email, 
      FirstName: val.firstName,
      LastName: val.lastName,
      MiddleName: val.middleName,
      DateOfBirth: val.dateOfBirth,   
      CurrentAddress: {
          PostalCode: val.postalCode,
          State: val.state,
          Country:  val.country,
          AddressLine1:  val.addressLine1,
          AddressLine2:  val.addressLine2,
          City:  val.city
      },
      PermanentAddress: {
        PostalCode: val.postalCode,
        State: val.state,
        Country:  val.country,
        AddressLine1:  val.addressLine1,
        AddressLine2:  val.addressLine2,
        City:  val.city
      },
      RoleId: 1,
      UserGroupId: 1,
      DepartmentId: val.department,
      Department: {        
        DepartmentName: this.departmentName?.toString()
      },
      GenderId: val.gender,
      Gender: {        
        GenderName: this.genderName?.toString()
      },
      DesignationInCollege:  val.designationInCollege,
      Qualification: val.qualification,
      ExperienceInYears: val.experienceInYears,
      ExperienceInMonths: val.experienceInMonths
    }
    if (this.user) {
      this.registrationService.accountSetup(this.user)
        .subscribe(
          (res) => {
            if (!res.error) {
              if(res){
                this.notificationService.notifySuccess("Account Setup Successfully !!!"); 
                this.router.navigate(['/profile']);
              }
              else{    
                this.notificationService.notifySuccess("Account Setup Failed !!!");             
                this.router.navigate(['/accountsetup']);
              }
            } else {
              this.errorMsg = res.error.message;
            }
          }
        );
    }
  }
}
