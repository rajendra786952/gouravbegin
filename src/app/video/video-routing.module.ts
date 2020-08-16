import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './pages/video/video.component';
import { MainCoursesVideoComponent } from './pages/main-courses-video/main-courses-video.component';
import { FacultySingleVideoComponent } from './pages/faculty-single-video/faculty-single-video.component';
import { SingalCategoryComponent } from './pages/singal-category/singal-category.component';
import { VideoLayoutComponent } from './video-layout/video-layout.component';
import { VideoMainCategoryComponent } from './pages/video-main-category/video-main-category.component';


const routes: Routes = [
  {
    path:'',
    component:VideoLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'video',
        pathMatch:'full'
      },
      {
        path:'video',
        component:VideoComponent
      },
      {
        path:'main-courses-video',
        component:MainCoursesVideoComponent
      },
      {
        path:'faculty-single-video',
        component:FacultySingleVideoComponent
      },
      {
        path:'singal-category',
        component:SingalCategoryComponent
      },
      {
        path:'video-main-category',
        component:VideoMainCategoryComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
