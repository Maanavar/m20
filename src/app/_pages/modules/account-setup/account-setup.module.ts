import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared-modules/shared/shared.module';
const routes: Routes = [
  {
    path: '', component: AccountSetupComponent
  }
]


@NgModule({
  declarations: [AccountSetupComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountSetupModule { }
