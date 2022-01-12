import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, NotificationService } from '../../_services/index';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  resetPasswordForm!: FormGroup;
  errorMsg = '';
  invalidPasswordAttemptCount: number = 0 ;
  submitted = false;
  closeResult = '';
  loginFormSubmitted = false;
  step:any = 1;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.authService.logout();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

  get lf(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  open(content: any) {
    this.modalService.open(content, {size: 'sm', centered: true });
  }  

  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }    
    const val = this.loginForm.value;
    if (val.email && val.password) {
      this.authService.login({ Email: val.email, Password: val.password })
        .subscribe(
          (res) => {
            if (res.successCode == "1") {
              if(res.isAccountSetupDone){
                this.router.navigate(['/profile']);
              }
              else{                
                this.router.navigate(['/accountsetup', 0]); 
              }
            } else {
              this.errorMsg = res.errorMessage;
              if(this.invalidPasswordAttemptCount == 0){
                this.notificationService.notifyError("Invalid Password !!! Retry !!!");
              }
              else{               
                this.notificationService.notifyError("Invalid Password !!! Retry Attempt - " + this.invalidPasswordAttemptCount + " !!!");
              }
              this.invalidPasswordAttemptCount ++;
            }
          }
        );
    }    
  }

  onResetPasswordFormSubmit(){
    this.submitted = true;
    const val = this.loginForm.value;
    if (val.email) {
      this.authService.resetPassword(val.email)
        .subscribe(
          (res) => {
            if (res) {         
              this.notificationService.notifySuccess("Reset Password link sent successfully !!!");
              //this.router.navigate(['/resetpassword', 1]); 
              this.modalService.dismissAll();
            } else {
              this.notificationService.notifyError("Reset Password link sending failed !!!");
              this.modalService.dismissAll();
            }
          }
        );
    }
  }

  register(){
    this.router.navigate(['/register']); 
  }
  submit(){
    this.step = this.step + 1;
  }
  back(){
    this.step = this.step - 1;
  }
}
