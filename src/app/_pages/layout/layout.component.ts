import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public sidebarShow: boolean = false;
  classToggled = false;
  constructor() { }

  ngOnInit(): void {
    $('.modal-link').click(function(){
      $('.modal').show();
      $('.modal-bg').show();
    });
    $('.modal .close').click(function(){
      $('.modal').hide();
      $('.modal-bg').hide();
    })
    $(".togglesearch").on("click", function (e:any) {
      $(".mobile-searchform").toggleClass('showmobilesearch');
      e.stopPropagation();
   });
   $(".sidebar-link").on("click", function (e:any) {
    $(".side-nav").toggleClass('slidenavin');
    $(".hamburger").toggleClass('is-active');
    e.stopPropagation();
 });
   $(".search-close").on("click", function (e:any) {
    $(".mobile-searchform").removeClass('showmobilesearch');
    e.stopPropagation();
 });
    $(".tw-menu-bar").on("click", function (e:any) {
   
      $(".offcanvas-menu-overlay").toggleClass('menu-show');
      $('.sidebar-slider').toggleClass('sidebar-slide-in');
      $('body').toggleClass('addoverflow');
      
      e.stopPropagation();
   });
   $('body,html').on('click',function(e:any){
    $(".offcanvas-menu-overlay").removeClass('menu-show');
    $(".sidebar-slider").removeClass('sidebar-slide-in');
    $(".side-nav").removeClass('slidenavin');
});
  $('.sidebar-slider, .side-nav').on('click',function(e:any){
    e.stopPropagation();
  });
   $(".menu-close-btn, .offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-wrapper").removeClass('active');
      $(".offcanvas-menu-overlay").removeClass('menu-show');
      $(".sidebar-slider").removeClass('sidebar-slide-in');
      $('body').removeClass('addoverflow');
   });
   
  }
  toggleField(){
    
    this.classToggled = !this.classToggled; 
  }
  close(){
    this.classToggled = !this.classToggled; 
  }
}
