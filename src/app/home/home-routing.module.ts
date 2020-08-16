import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BuybookComponent } from './pages/buybook/buybook.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { JoinfreeComponent } from './pages/joinfree/joinfree.component';
import { OurstoryComponent } from './pages/ourstory/ourstory.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { TermsComponent } from './pages/terms/terms.component';
import { VisionComponent } from './pages/vision/vision.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


const routes: Routes = [
   {
      path:'',
      component:HomeLayoutComponent,
      children:[
      {
        path:'',
        redirectTo:'index',
        pathMatch:'full'
      },
      {
        path:'index',
        component:IndexComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'buybook',
        component:BuybookComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'joinfree',
        component:JoinfreeComponent
      },
      {
        path:'ourstory',
        component:OurstoryComponent
      },
      {
        path:'portfolio',
        component:PortfolioComponent
      },
      {
        path:'privacy',
        component:PrivacyComponent
      },
      {
        path:'single-blog',
        component:SingleBlogComponent
      },
      {
        path:'terms',
        component:TermsComponent
      },
      {
        path:'vision',
        component:VisionComponent
      }
    ]
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
