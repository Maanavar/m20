import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, NotificationService, RegistrationService } from '../../../../_services/index';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailForm!: FormGroup;
  loginForm!: FormGroup;  
  errorMsg = '';
  invalidPasswordAttemptCount: number = 0 ;  
  closeResult = '';
  loginFormSubmitted = false;
  emailFormSubmitted = false;
  step:any = 1;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private registrationService: RegistrationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]]
    });    
    this.authService.logout();
  }

  get ef(): { [key: string]: AbstractControl } {
    return this.emailForm.controls;
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
                this.router.navigate(['/instructor/home']);
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

  
  register(){
    this.router.navigate(['/register']); 
  }
  onEmailFormSubmit(){
    this.emailFormSubmitted = true;
    if (this.emailForm.invalid) {
      return;
    }   
    const val = this.emailForm.value;
    this.registrationService.validateEmailExists(val.email)
        .subscribe(
          (res) => {
            if (res.isExists == true) {    
              this.step = this.step + 1;
              this.loginForm.controls['email'].setValue(val.email);
            } else {
              this.notificationService.notifyError("Email does not exists. Please provide Valid Email.");               
            }
          }
        );
    
  }
  back(){
    this.step = this.step - 1;
  }
}
