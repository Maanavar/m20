import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService, AuthenticationService, NotificationService } from '../../../../_services/index';
import { Register } from '../../../../_models/index';
import  Validation  from '../../../../_shared/validation';

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
      //userType: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      institutionName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      //phone: ['', [Validators.required]],
      //password: ['', [Validators.required]],
      //confirmPassword: ['', [Validators.required]]  ,
      //acceptPersonalDataSharing: [false, Validators.requiredTrue],
      //acceptPrivacyPolicy: [false, Validators.requiredTrue]   
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
      Email: val.email,
      Password:  val.password,  
      ConfirmPassword: val.confirmPassword,  
      UserType:  val.userType
    }
    if (this.register) {
      this.registrationService.validateEmailExists(this.register.Email)
        .subscribe(
          (res) => {
            if (res.isExists == true) {    
              this.notificationService.notifyError("Email already exists. Please give a different email."); 
            } else {
              this.notificationService.notifySuccess("Verification Email sent successfully !!!.");  
              this.router.navigate(['/checkemail']);  
              this.registrationService.signUp(this.register)
                .subscribe(
                  (res) => {
                    console.log(res);
                  }
                );
            }
          }
        );
      
    }
  }
  
}

