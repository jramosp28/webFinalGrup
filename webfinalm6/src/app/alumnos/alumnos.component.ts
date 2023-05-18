import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  animations: [
    trigger('expandirAnimacion', [
      state('false', style({
        height: '0',
        opacity: '0'
      })),
      state('true', style({
        height: '*',
        opacity: '1'
      })),
      transition('false <=> true', animate('500ms ease-in-out'))
    ])
  ]
})
export class AlumnosComponent {
  alumno1Mostrado = false;
  alumno2Mostrado = false;
  alumno3Mostrado = false;
  alumno4Mostrado = false;

  mostrarInformacionAlumno1() {
    this.alumno1Mostrado = !this.alumno1Mostrado;
  }

  mostrarInformacionAlumno2() {
    this.alumno2Mostrado = !this.alumno2Mostrado;
  }

  mostrarInformacionAlumno3() {
    this.alumno3Mostrado = !this.alumno3Mostrado;
  }

  mostrarInformacionAlumno4() {
    this.alumno4Mostrado = !this.alumno4Mostrado;
  }
}