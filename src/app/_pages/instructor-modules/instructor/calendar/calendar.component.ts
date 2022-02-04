import { Component, OnInit,ViewChild } from '@angular/core';
import {ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { AmazingTimePickerService } from 'amazing-time-picker';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public files: any[] = [];
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Albania',
      sec:'s',
    },
    {
      id: 2,
      name: 'Belgium',
      sec:'s',
    },
    {
      id: 3,
      name: 'Denmark',
      sec:'s',
    },
    {
      id: 4,
      name: 'Montenegro',
      sec:'s',
    },
    {
      id: 5,
      name: 'Turkey',
      sec:'s',
    },
    {
      id: 6,
      name: 'Ukraine',
      sec:'s',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
  public selectedDate: Date = new Date(2018, 1, 15);


selectEvent(item:any) {
  // do something with selected item
}

onChangeSearch(search: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e:any) {
  // do something
}

}
