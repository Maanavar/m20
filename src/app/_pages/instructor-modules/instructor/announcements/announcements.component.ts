import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  filterToggled = false;
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
  public date = [
    {
      id: 1,
      name: '1',
      sec:'s',
    },
    {
      id: 2,
      name: '1',
      sec:'s',
    },
    {
      id: 3,
      name: '1',
      sec:'s',
    }
  ];
  public month = [
    {
      id: 1,
      name: 'Jan',
      sec:'s',
    },
    {
      id: 2,
      name: 'Feb',
      sec:'s',
    },
    {
      id: 3,
      name: 'Mar',
      sec:'s',
    }
  ];
  public year = [
    {
      id: 1,
      name: '2020',
      sec:'s',
    },
    {
      id: 2,
      name: '2021',
      sec:'s',
    },
    {
      id: 3,
      name: '2022',
      sec:'s',
    }
  ];
  constructor(private atp: AmazingTimePickerService) { }

  ngOnInit(): void {
  }
togglefilter(){
  this.filterToggled = !this.filterToggled; 
}
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
open(ev: any) {
  const amazingTimePicker = this.atp.open();
  amazingTimePicker.afterClose().subscribe(time => {
    console.log(time);
  });
}
}
