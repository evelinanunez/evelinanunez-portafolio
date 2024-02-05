import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeRoutingModule } from './about-me-routing.module';



@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
