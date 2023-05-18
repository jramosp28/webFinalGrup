import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userService } from 'src/Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { zip } from 'rxjs';
import { user } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: FormGroup;
  
  userUid: FormControl = new FormControl('', Validators.required);
  user_name: FormControl = new FormControl('', Validators.required);
  user_lastName: FormControl = new FormControl('', Validators.required);
  user_lastName2: FormControl = new FormControl('', Validators.required);
  user_email: FormControl = new FormControl(null, Validators.email);
  user_password: FormControl = new FormControl('', Validators.required)

  registerGroup: FormGroup = new FormGroup({
    userUid: this.userUid,
    user_name: this.user_name,
    user_lastName: this.user_lastName,
    user_lastName2: this.user_lastName2,
    user_email: this.user_email,
    user_password: this.user_password
  });

  constructor(private formBuilder: FormBuilder, private userService: userService, private router: Router) {
    this.user = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      email: ['', Validators.email],
      fechaN: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData: user) {
    // Verificar si el correo electrónico y userUid están disponibles
    zip(
      this.userService.checkUserEmail(userData.email),
      this.userService.checkUserUid(userData.username)
    ).subscribe(([emailAvailable, usernameAvailable]) => {
      if (!emailAvailable) {
        console.log("Correo inválido");
        return;
      } else if (!usernameAvailable) {
        console.log("Usuario no válido");
        return;
      } else {
        this.userService.addUser(userData).subscribe(
          // Manejar la respuesta de la API
          (response) => {
            // Manejar la respuesta de éxito
            console.log("Usuario registrado correctamente");
            this.router.navigate(['/login']);
          },
          (error) => {
            // Manejar el error
            console.error("Error al registrar el usuario:", error);
          }
        );
      }
    });
  }
}
