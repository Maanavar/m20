import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Swiper,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper/core';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
todayclass=[
  {
'title':'Artificial Intelligence',
'section':'BE - CSE  - 2nd Sem - A',
'date':'26 Oct 2021',
'time':'10:30 AM - 11:30 AM'

},
{
  'title':'Artificial Intelligence',
  'section':'BE - CSE  - 2nd Sem - A',
  'date':'26 Oct 2021',
  'time':'10:30 AM - 11:30 AM'
  
  },
  {
    'title':'Artificial Intelligence',
'section':'BE - CSE  - 2nd Sem - A',
'date':'26 Oct 2021',
'time':'10:30 AM - 11:30 AM'
    
    },
    {
      'title':'Artificial Intelligence',
'section':'BE - CSE  - 2nd Sem - A',
'date':'26 Oct 2021',
'time':'10:30 AM - 11:30 AM'
      
      }

]
  constructor() { }

  ngOnInit(): void {
  }
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 3 },
  };
  scrollbar: any = false;
  controlledSwiper: any;
  setControlledSwiper(swiper:any): void {
    this.controlledSwiper = swiper;
  }
  toggleScrollbar() {
    if (!this.scrollbar) {
      this.scrollbar = { draggable: true };
    } else {
      this.scrollbar = false;
    }
  }
}
