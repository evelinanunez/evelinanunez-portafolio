import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {


  @Output()
  toggleSidebar = new EventEmitter();


  openLinkedInProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://www.linkedin.com/in/evelina-nu%C3%B1ez-web-developer/', '_blank');
  }

  openGithubProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://github.com/evelinanunez', '_blank');
  }

  enviarCorreo(): void {

    const direccionCorreo = 'evelinacelestenunez@gmail.com';
    const mailtoLink = `mailto:${direccionCorreo}`;

    window.location.href = mailtoLink;
  }

}
