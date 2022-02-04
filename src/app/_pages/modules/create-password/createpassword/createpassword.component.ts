import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from 'src/app/_shared/validation';
import { AuthenticationService, NotificationService } from '../../../../_services/index';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.scss']
})
export class CreatepasswordComponent implements OnInit {
  showPassword: any;
  showPasswordOnPress: any
  userID!: number;
  token!: string;
  routeData: any;
  changePasswordForm!: FormGroup;
  errorMsg = '';
  submitted = false;
  public remainingLength = 8;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['id'];
    this.token = this.route.snapshot.params['token'];
    this.routeData = this.route.snapshot.data;
    this.changePasswordForm = this.fb.group({
      password: ['', [ Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&]).{8,}")
      ])]],
      confirmPassword: ['', [Validators.required]]
    },{ 
      validator: Validation.match('password', 'confirmPassword')
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.changePasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }
    const val = this.changePasswordForm.value;
    if (val) {
      this.authService.authenticateResetPassword(this.userID, this.token)
        .subscribe(
          (res) => {
            if (res == true) {      
              this.authService.changePassword(this.userID, val.password)
              .subscribe(
                (res) => {
                  if (res) {      
                    this.notificationService.notifySuccess("Password Setup done successfully !!!");   
                    this.router.navigate(['/login']); 
                  } else {
                    this.errorMsg = res.error.message;
                    this.notificationService.notifyError(this.errorMsg);  
                  }
                }
              );
            }
            else{
              this.notificationService.notifyError("Invalid Token - Authentication faild");  
            }
          }
        );
      
    }
  }

  wordCounter() {
    this.remainingLength = this.changePasswordForm.value ? 8 - this.changePasswordForm.value.password.length : 8;
    if (this.remainingLength <= 0) {
      //this.changePasswordForm.controls['password'].disable();
    }
  }

}
