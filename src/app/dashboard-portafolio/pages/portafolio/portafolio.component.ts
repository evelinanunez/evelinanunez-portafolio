import { Component } from '@angular/core';
import { Proyecto } from './models/proyecto';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  proyectos: Proyecto[] = [
    {
      titulo: 'App administrador de cursos',
      subtitulo: 'Angular v.16 - Curso CoderHouse',
      imagen: 'assets/imagenes/homeCursoAngular.png',
      fecha: 'NOVIEMBRE 2023',
      descripcion: `Api Json-Server publicado en render: 
                    <a href="https://api-json-server-fq9l.onrender.com/" target="_blank">link_api</a>
                    <br>
                    Usuario de prueba: email:eve@gmail.com contraseña: 1234
                    <br>
                    Implementación hosting gratuito Netlify`,
      linkWeb: 'https://proyecto-curso-angular-coderhouse.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/1PFNunez',
      disabled: false,
      imagenCard:'angular-image'
    },
    {
      titulo: 'Calculadora',
      subtitulo: 'Hecha con Javascript vainilla - css puro',
      imagen: 'assets/imagenes/calculadora-evelina.png',
      fecha: 'FEBRERO 2024',
      descripcion: 'Se aplica conocimientos basicos de Javascript. Implementación hosting gratuito Netlify',
      linkWeb: 'https://calculadora-evelina.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/calculadora-evelina/tree/master',
      disabled: false,
      imagenCard:'javascript-image'
    },
    {
      titulo: 'Consumo de Api pública',
      subtitulo: 'Angular v.16',
      imagen: 'assets/imagenes/proyecto_apiRest_rick_and_morthy1.png',
      fecha: 'FEBRERO 2024',
      descripcion: `Aplicación basica desarrollada en angular v.16, se utilizo componentes de Angular material 
                    y solamente lo generé para demostrar el consumo  y lectura de documentación de api pública.
                    Implementación hosting gratuito Netlify`,
      linkWeb: 'https://api-rick-and-morthy.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/ProyectoApiRestEvelina',
      disabled: false,
      imagenCard:'angular-image'
    },
    {
      titulo: 'Pagina de Ecommerce',
      subtitulo: 'JavaScript Vainilla - Curso CoderHouse',
      imagen: 'assets/imagenes/ecommerceJavaScriptVainilla.png',
      fecha: 'JUNIO 2024',
      descripcion: `Estoy desarrollando una página de Ecommerce con JavaScript Vainilla. Manipulación del DOM, 
                    eventos, promesas, localStorage, programación orientada a objetos 
                    y funcional. Uso de librerias como Sweet alert entre otras.`,
      linkWeb: 'https://ecommercejavascriptvainilla.netlify.app',
      linkGithub: 'https://github.com/evelinanunez/PF-JS-NUNEZ-EVELINA',
      disabled: false,
      imagenCard:'javascript-image'
    },
    {
      titulo: 'Ejemplo Web API .NET 8',
      subtitulo: 'Api de login y controllers varios en .NET 8 y Entity Framework data base first',
      imagen: 'assets/imagenes/ApiWebEcommerceSomee.png',
      fecha: 'JULIO 2024',
      descripcion: `Se aplicaron conceptos basicos de http, controllers, models, dto, Jwt. 
                    Se implemento la versión de .net 8. Es una api simple para poder demostrar manejo basico 
                    de la herramienta visual studio. Controlador de versiones Git. Base de datos SQL Server, 
                    Entity Framework data base First. Implementado en hosting free Somee.
                    Voy a ir modificandola para que crear mas endpoint y utilizarla de back para otros proyectos de front.`,
      linkWeb: 'https://apiwebecommerce.somee.com/swagger/index.html',
      linkGithub: 'https://github.com/evelinanunez/webapiecommerce',
      disabled: false,
      imagenCard:'net-image'
    }
  ];


  abrirLink(url: string): void {
    window.open(url, '_blank');
  }

}
