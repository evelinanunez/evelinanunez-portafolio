import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm : FormGroup;
  isContactFormSubmitted = false;

  constructor(
    private formBuilder : FormBuilder,
    private http : HttpClient
  ){
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)] ],
      lastName:['',Validators.minLength(5)],
      email:['',[Validators.required, Validators.email]],
      message: ['',Validators.required],
    })
  }


  onSubmitContact(ev : SubmitEvent){
    const formData = this.contactForm.value;
    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    this.http
      .post('https://evelina-nunez-portafolio.netlify.app/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
      });
  }

}
