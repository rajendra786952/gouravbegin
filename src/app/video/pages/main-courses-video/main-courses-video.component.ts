import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-courses-video',
  templateUrl: './main-courses-video.component.html',
  styleUrls: ['./main-courses-video.component.css']
})
export class MainCoursesVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
     toggleSidebar(){
    $("#sidebar").toggleClass("move-to-left");
    $("#sidebar-tab").toggleClass("move-to-left");
    $("main").toggleClass("move-to-left-partly");
    $(".arrow").toggleClass("active");
    }
    
    
}
