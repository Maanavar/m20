import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  filterToggled = false;
  public files: any[] = [];
  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Computer Science Engineering',
      sec:'s',
    },
    {
      id: 2,
      name: 'Computer Science Engineering',
      sec:'s',
    },
    {
      id: 3,
      name: 'Computer Science Engineering',
      sec:'s',
    },
    {
      id: 4,
      name: 'Computer Science Engineering',
      sec:'s',
    },
    {
      id: 5,
      name: 'Computer Science Engineering',
      sec:'s',
    },
    {
      id: 6,
      name: 'Computer Science Engineering',
      sec:'s',
    }
  ];
  constructor() { }

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
}
