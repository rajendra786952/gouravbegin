import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-singal-category',
  templateUrl: './singal-category.component.html',
  styleUrls: ['./singal-category.component.css']
})
export class SingalCategoryComponent implements OnInit {

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

      });

  }
  videomain()
  {
    this.router.navigate(['video/video-main-category']);
  }
  mainvideocourse()
  {
    this.router.navigate(['video/main-courses-video']);
  }
  faculty_single_video()
  {
    this.router.navigate(['video/faculty-single-video']);
  }
}
