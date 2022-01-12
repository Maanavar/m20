import { Injectable } from '@angular/core';

import { Observable ,  BehaviorSubject } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {    
  private notificationConfig: {};
  
  constructor(    
      public toastr: ToastrService
    ) {
    this.notificationConfig = {
      enableHtml: true,
      preventDuplicates: true,
      countDuplicates: true
    };
  }

  notifySuccess(m: string | undefined) {
    setTimeout(() => this.toastr.success(m, 'Success', this.notificationConfig));
  }

  notifyError(m: string | undefined) {
    setTimeout(() => this.toastr.error(m, 'Error', this.notificationConfig));
  }

  notifyWarning(m: string | undefined) {
    setTimeout(() => this.toastr.warning(m, 'warning', this.notificationConfig));
  }

  notifyInfo(m: string | undefined) {
    setTimeout(() => this.toastr.info(m, 'Info', this.notificationConfig));
  }
}
