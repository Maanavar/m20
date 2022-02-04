import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckmailComponent } from './checkmail/checkmail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';

const routes: Routes = [
  { path: '', component: CheckmailComponent }
]

@NgModule({
  declarations: [CheckmailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckEmailModule { }
