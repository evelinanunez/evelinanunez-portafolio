import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardPortafolioComponent } from "./dashboard-portafolio.component";


@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: '',
        component: DashboardPortafolioComponent,
        children:[
          {
            path: 'home',
            loadChildren:()=> import('./pages/home/home.module').then((m)=>m.HomeModule)
          },
          {
            path: 'about-me',
            loadChildren:()=> import('./pages/about-me/about-me.module').then((m)=>m.AboutMeModule)
          },
          {
            path: 'portafolio',
            loadChildren:()=> import('./pages/portafolio/portafolio.module').then((m)=>m.PortafolioModule)
          },
          {
            path: 'contact',
            loadChildren:()=> import('./pages/contact/contact.module').then((m)=>m.ContactModule)
          },
          {
            path: '**',
            redirectTo: 'home',
          }
        ]
      }
  ])
  ],
})
export class DashboardPortafolioRoutingModule{

}
