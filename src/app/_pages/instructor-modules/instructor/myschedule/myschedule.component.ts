import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-myschedule',
  templateUrl: './myschedule.component.html',
  styleUrls: ['./myschedule.component.scss']
})
export class MyscheduleComponent implements OnInit {
  filterToggled = false;
  public files: any[] = [];
  keyword = 'name';
  el: any;
  constructor() { }
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
  ngOnInit(): void {
    $(".dropdown-toggle").on("click", function (e:any) {
      $(".dropshow").toggleClass('showmobilesearch');
      e.stopPropagation();
   });
   $('body,html').on('click',function(e:any){
    $(".dropshow").removeClass('showmobilesearch');
   
});
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
