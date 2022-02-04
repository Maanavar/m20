import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ForgotpasswordComponent }
]


@NgModule({
  declarations: [ForgotpasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgotPasswordModule { }
