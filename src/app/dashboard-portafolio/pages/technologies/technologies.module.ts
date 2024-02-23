import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';



@NgModule({
  declarations: [TechnologiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TechnologiesRoutingModule
  ]
})
export class TechnologiesModule { }
