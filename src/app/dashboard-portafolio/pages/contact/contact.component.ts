import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName:[''],
      email:['',[Validators.required, Validators.email]],
      message: ['',Validators.required]
    })
  }


  onSubmitContact(){
    alert('Se solicito contacto.')
  }
}
