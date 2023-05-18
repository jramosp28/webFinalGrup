import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

export interface Trabajo {
  nombre: string;
  apellidos: string;
  diaRealizado: Date;
  asignatura: string;
  link: string;
}

@Component({
  selector: 'app-mejorestrabajos',
  templateUrl: './mejorestrabajos.component.html',
  styleUrls: ['./mejorestrabajos.component.css']
})
export class MejorestrabajosComponent {
  trabajos: Trabajo[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'diaRealizado', 'asignatura', 'link'];
  trabajoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.trabajoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: [''],
      diaRealizado: [null, Validators.required],
      asignatura: [''],
      link: ['']
    });
  }

  mostrarFormulario() {
    Swal.fire({
      title: 'SUBIR TRABAJO',
      html: `
        <form [formGroup]="trabajoForm" (ngSubmit)="guardarTrabajo()">
          <input formControlName="nombre" placeholder="Nombre" class="swal2-input">
          <input formControlName="apellidos" placeholder="Apellidos" class="swal2-input">
          <input type="date" formControlName="diaRealizado" placeholder="Día Realizado" class="swal2-input">
          <input formControlName="asignatura" placeholder="Asignatura" class="swal2-input">
          <input formControlName="link" placeholder="Link" class="swal2-input">
          <button type="submit" class="swal2-confirm swal2-styled">Guardar</button>
        </form>
      `,
      confirmButtonText: 'Cerrar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        this.guardarTrabajo();
      }
    });
  }

  guardarTrabajo() {
    if (this.trabajoForm.valid) {
      this.trabajos.push(this.trabajoForm.value);
      this.trabajoForm.reset();
      Swal.fire('Trabajo guardado', '', 'success');
    }
  }
}
