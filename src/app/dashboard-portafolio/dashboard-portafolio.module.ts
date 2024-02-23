import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPortafolioComponent } from './dashboard-portafolio.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardPortafolioRoutingModule } from './dashboard-portafolio-routing.module';
import { TechnologiesComponent } from './pages/technologies/technologies.component';





@NgModule({
  declarations: [
    DashboardPortafolioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardPortafolioRoutingModule
  ]
})
export class DashboardPortafolioModule { }
