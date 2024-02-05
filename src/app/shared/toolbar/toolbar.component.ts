import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {


  openLinkedInProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://www.linkedin.com/in/evelina-nu%C3%B1ez-web-developer/', '_blank');
  }

  openGithubProfile(): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://github.com/evelinanunez', '_blank');
  }

  enviarCorreo(): void {
    // Reemplaza 'correo@example.com' con la dirección de correo electrónico a la que deseas enviar el mensaje
    const direccionCorreo = 'evelinacelestenunez@gmail.com';

    // Reemplaza 'Consulta%20Importante' con el asunto deseado
    // const asunto = 'Consulta%20Importante';

    // Construye la URL del correo electrónico con la dirección y el asunto
    const mailtoLink = `mailto:${direccionCorreo}`;

    // Abre el cliente de correo electrónico predeterminado del usuario
    window.location.href = mailtoLink;
  }

}
