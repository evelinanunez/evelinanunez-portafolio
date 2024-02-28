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

  proyectoCursoCoderHouseEve() : void  {
    window.open('https://proyecto-curso-angular-coderhouse.netlify.app', '_blank');
  }



}
