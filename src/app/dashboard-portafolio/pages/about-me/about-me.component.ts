import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  openCertificado(url : string ): void {
    // Reemplaza 'URL_DE_TU_PERFIL' con la URL externa de tu perfil de LinkedIn
    window.open(url, '_blank');
  }


}
