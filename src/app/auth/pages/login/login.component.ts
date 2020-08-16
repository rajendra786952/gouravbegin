import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit()
  {
   this.router.navigate(["home"]);
  }
  register()
  {
    this.router.navigate(["auth/signup"]);
  }
}
