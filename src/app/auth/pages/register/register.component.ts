import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private r:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.r.url);
  }
  submit(){
    this.router.navigate(["auth/login"]);
  }
   login()
  {
  
    this.router.navigate(["auth/login"]);
  }
}
