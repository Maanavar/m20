import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: OtpVerificationComponent }
]


@NgModule({
  declarations: [OtpVerificationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OtpVerificationModule { }
