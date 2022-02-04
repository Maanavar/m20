import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
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
  
  }
  
  onChangeSearch(search: string) {
   
  }
  
  onFocused(e:any) {
 
  }

}
