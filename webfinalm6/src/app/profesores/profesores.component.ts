import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  listaProfesores = [
    {
      nombre: 'Juan Pérez',
      asignatura: 'Matemáticas',
      lenguaje: 'Java',
      edad: 35,
      imagen: 'ruta-a-imagen-1.jpg'
    },
    {
      nombre: 'María Gómez',
      asignatura: 'Historia',
      lenguaje: 'Python',
      edad: 42,
      imagen: 'ruta-a-imagen-2.jpg'
    },
    {
      nombre: 'Pedro Rodríguez',
      asignatura: 'Física',
      lenguaje: 'C++',
      edad: 28,
      imagen: 'ruta-a-imagen-3.jpg'
    }
  ];
}
