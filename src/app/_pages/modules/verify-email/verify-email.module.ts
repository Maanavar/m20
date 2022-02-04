import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
const routes: Routes = [
  { path: '', component: VerifyemailComponent }
]

@NgModule({
  declarations: [ VerifyemailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class VerifyEmailModule { }
