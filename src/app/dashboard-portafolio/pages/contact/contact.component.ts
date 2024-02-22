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
      name: ['', Validators.required],
      lastName:[''],
      email:['',[Validators.required, Validators.email]],
      message: ['',Validators.required]
    })
  }


  onSubmitContact(ev : SubmitEvent){
  /*   alert('Se solicito contacto.')
    console.log(this.contactForm.value);
    console.log(ev); */
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
 /*  onSubmit(evt: SubmitEvent) {
    //evt.preventDefault();

    const formData = this.contactForm.value;
    // This is important. We need to add the hidden field to make sure Netlify picks up the form submission.
    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.isContactFormSubmitted = true;
      });
  } */
}
