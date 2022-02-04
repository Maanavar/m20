import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleModule,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    ScheduleModule ,
    AutocompleteLibModule,
    AmazingTimePickerModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastNoAnimationModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    IconModule,
   
  ],
  exports: [
    ScheduleModule ,
    AutocompleteLibModule,
    AmazingTimePickerModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ToastNoAnimationModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    IconModule,
    PaginationComponent
  ]
})
export class SharedModule { }
