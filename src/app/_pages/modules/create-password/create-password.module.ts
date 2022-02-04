import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
const routes: Routes = [
  { path: '', component: CreatepasswordComponent }
]

@NgModule({
    declarations: [CreatepasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CreatePasswordModule { }
