import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const route:Routes=[
  {  path:'',
     component:AuthLayoutComponent,
     children:[
       {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
       },
       {
        path:'login',
        component:LoginComponent
       },
      {
        path:'signup',
        component:RegisterComponent
      }
     ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
