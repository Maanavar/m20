import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: NewpasswordComponent }
]


@NgModule({
  declarations: [NewpasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NewPasswordModule { }
