import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutingModule } from './contact-routing-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
/*     MatFormFieldModule,
    MatInputModule */
  ],
  exports:[
    ContactComponent,
  ]
})
export class ContactModule { }
