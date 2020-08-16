import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.TeamSlider').owlCarousel({
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
              items:3
          }
      }, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    })
  }

}
