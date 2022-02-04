import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit {

  step:any = 1;
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
    console.log(e)

  }

  submit(){
    this.step = this.step + 1;
  }
  back(){
    this.step = this.step - 1;
  }


}
