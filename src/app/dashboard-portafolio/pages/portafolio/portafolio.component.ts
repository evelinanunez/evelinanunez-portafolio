import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  isDisabled: boolean = true;

  proyectoCalculadoraEve() : void  {
    window.open('https://calculadora-evelina.netlify.app', '_blank');
  }

  proyectoCalculadoraEveGitHub(): void {
    window.open('https://github.com/evelinanunez/calculadora-evelina/tree/master', '_blank');
  }
  proyectoCursoCoderHouseEve() : void  {
    window.open('https://proyecto-curso-angular-coderhouse.netlify.app', '_blank');
  }

  proyectoCursoCoderHouseEveGithub():void{
    window.open('https://github.com/evelinanunez/1PFNunez', '_blank');
  }
  proyectoApiRick(): void  {
    window.open('https://api-rick-and-morthy.netlify.app', '_blank');
  }

  proyectoApiRickGithub() : void{
    window.open('https://github.com/evelinanunez/ProyectoApiRestEvelina', '_blank');
  }

}
