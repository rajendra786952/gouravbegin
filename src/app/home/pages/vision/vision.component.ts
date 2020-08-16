import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.lightgallery').lightGallery();
   });
  }

}
