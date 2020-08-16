import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
    data: { preload: true }
  },
  {
    path:'video',
    loadChildren:()=>import('./video/video.module').then(m=>m.VideoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,initialNavigation:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
