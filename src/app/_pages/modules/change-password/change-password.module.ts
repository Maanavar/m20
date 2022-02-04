import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [
  { path: '', component: ChangePasswordComponent
}
]


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangePasswordModule { }
