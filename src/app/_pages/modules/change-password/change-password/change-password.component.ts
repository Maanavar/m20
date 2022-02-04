import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, NotificationService } from '../../../../_services/index';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  userID!: number;
  token!: string;
  routeData: any;
  changePasswordForm!: FormGroup;
  errorMsg = '';
  submitted = false;

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
      password: ['', [Validators.required]]
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
            if (res != "OK") {      
              this.authService.changePassword(this.userID, val.password)
              .subscribe(
                (res) => {
                  if (res) {      
                    this.notificationService.notifySuccess("Password changed successfully !!!");   
                    this.router.navigate(['/accountsetup', this.userID]); 
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

}
