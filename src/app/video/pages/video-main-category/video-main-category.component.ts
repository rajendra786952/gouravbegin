import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-video-main-category',
  templateUrl: './video-main-category.component.html',
  styleUrls: ['./video-main-category.component.css']
})
export class VideoMainCategoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    $('#OtherCourses').owlCarousel({
      loop:true,
      margin:30,
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
      items:3
      }
      }
      })
  }
  singal_category()
  {
  
    this.router.navigate(["video/singal-category"]);
  }
  videomain()
  {
    this.router.navigate(['video/video-main-category']);
  }
}


