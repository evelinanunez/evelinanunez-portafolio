import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {



  proyectoCalculadoraEve() : void  {
    window.open('https://calculadora-evelina.netlify.app', '_blank');
  }
}
