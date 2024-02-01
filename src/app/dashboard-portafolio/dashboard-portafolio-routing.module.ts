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
          }
        ]
      }
  ])
  ],
})
export class DashboardPortafolioRoutingModule{

}
