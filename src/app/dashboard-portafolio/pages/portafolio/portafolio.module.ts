import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from './portafolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortafolioRoutingModule } from './portafolio-routing.module';



@NgModule({
  declarations: [
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortafolioRoutingModule
  ]
})
export class PortafolioModule { }
