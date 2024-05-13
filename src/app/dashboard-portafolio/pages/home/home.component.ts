import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title= 'Full Stack Developer';
  titleTecnologias = 'Tecnologías que manejo'

  openCertificado(url : string ): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open('https://github.com/evelinanunez', '_blank');
  }



}
