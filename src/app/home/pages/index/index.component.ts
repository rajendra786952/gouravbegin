import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.main-banner').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      transitionStyle : "fade",
      responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
      }, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
      })
      
      $('#testimonialsmy').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      autoplay:true, 
      autoplayTimeout:10000, // time for slides changes
      smartSpeed: 1000, // duration of change of 1 slide
      responsive:{
      0:{
       items:1
       },
       600:{
       items:2
       },
       1000:{
       items:1
      }
      }
      })
      $('.count').each(function () {
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         }, {
             duration: 4000,
             easing: 'swing',
             step: function (now) {
                 $(this).text(Math.ceil(now));
             }
         });
          });
  }

}
