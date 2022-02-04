import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, NotificationService } from '../../../../_services/index';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.authService.logout();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

  onResetPasswordFormSubmit(){
    this.submitted = true;
    const val = this.resetPasswordForm.value;
    if (val.email) {
      this.authService.resetPassword(val.email)
        .subscribe(
          (res) => {
            if (res) {         
              this.notificationService.notifySuccess("Reset Password link sent successfully !!!");
              this.modalService.dismissAll();
            } else {
              this.notificationService.notifyError("Reset Password link sending failed !!!");
              this.modalService.dismissAll();
            }
          }
        );
    }
  }

}
