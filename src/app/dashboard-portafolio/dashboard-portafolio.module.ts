import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPortafolioComponent } from './dashboard-portafolio.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPortafolioRoutingModule } from './dashboard-portafolio-routing.module';




@NgModule({
  declarations: [
    DashboardPortafolioComponent,
    //HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    //RouterModule,
    DashboardPortafolioRoutingModule
  ]
})
export class DashboardPortafolioModule { }
