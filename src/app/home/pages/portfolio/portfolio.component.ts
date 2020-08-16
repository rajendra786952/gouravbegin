import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
      $(document).ready(function(){
         $('.lightgallery').lightGallery();
      });
  }

}
