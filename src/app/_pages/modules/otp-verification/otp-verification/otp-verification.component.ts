import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService, NotificationService } from '../../../../_services/index';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {
  userID!: number;
  otp!: number;
  routeData: any;
  otpVerificationForm!: FormGroup;
  errorMsg = '';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.otp = this.route.snapshot.params['otp'];
    this.routeData = this.route.snapshot.data;
    this.otpVerificationForm = this.fb.group({
      otp: ['', [Validators.required]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.otpVerificationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.otpVerificationForm.invalid) {
      return;
    }
    const val = this.otpVerificationForm.value;
    if(val.otp == this.otp){
      if (val) {
        this.registrationService.otpVerification(this.userID, true, true)
          .subscribe(
            (res) => {
              if (res) {      
                this.notificationService.notifySuccess("OTP Verified Successfully !!!");      
                this.router.navigate(['/accountsetup', this.userID]); 
              } else {
                this.errorMsg = res.error.message;
              }
            }
          );
      }
    }
    else{
      this.notificationService.notifyError("Invalid OTP. Please provide valid OTP !!!");    
    }
  }

}
