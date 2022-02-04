import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: ProfileComponent }
]
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
