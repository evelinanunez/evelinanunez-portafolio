import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPortafolioComponent } from "./dashboard-portafolio/dashboard-portafolio.component";
import { HomeComponent } from "./dashboard-portafolio/pages/home/home.component";

const routes : Routes =[
  {
    path: 'dashboard-portafolio',
    component: DashboardPortafolioComponent,
    children:[

      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'dashboard-portafolio'
  },
]
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}
