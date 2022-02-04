import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-adminnavigation',
  templateUrl: './adminnavigation.component.html',
  styleUrls: ['./adminnavigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {
  public sidebarShow: boolean = false;
  classToggled = false;
  user = '';
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.user = this.router.url.split('/')[1]
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
