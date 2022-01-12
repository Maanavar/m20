import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService, AuthenticationService, NotificationService } from '../../_services/index';
import { Register } from '../../_models/index';
import  Validation  from '../../_shared/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMsg = '';
  register!: Register;
  submitted = false;
   showPassword: any;
   showPasswordOnPress: any;
  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userType: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]  ,
      acceptPersonalDataSharing: [false, Validators.requiredTrue],
      acceptPrivacyPolicy: [false, Validators.requiredTrue]   
    },{ 
      validator: Validation.match('password', 'confirmPassword')
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    const val = this.registrationForm.value;
    this.register = { 
      FirstName: val.firstName,
      LastName: val.lastName,
      Email: val.email,
      Phone: val.phone,  
      Password:  val.password,  
      ConfirmPassword: val.confirmPassword,  
      UserType:  val.userType
    }
    if (this.register) {
      this.registrationService.signUp(this.register)
        .subscribe(
          (res) => {
            if (res.successCode == 1) {    
              this.notificationService.notifySuccess("Registered Successfully !!!");     
              this.router.navigate(['/otpverification', res.userID, res.otp]);  
            } else {
              this.errorMsg = res.error.message;
              this.notificationService.notifyError(this.errorMsg);  
            }
          }
        );
    }
  }
  
}

