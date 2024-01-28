import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPortafolioComponent } from './dashboard-portafolio.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardPortafolioComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class DashboardPortafolioModule { }
