import { Component } from '@angular/core';
import { userService } from 'src/Services/user.service';
import { Router } from '@angular/router';
import { user } from '../../interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentComunicationService } from 'src/Services/comunication.service';
import { LocalStorageService } from 'src/Services/localStorage.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
  username: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);
  userExists: boolean = false;
  welcomeMessage: string = '';
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  loginGroup: FormGroup = new FormGroup({
    username: this.username,
    password: this.password
  })

  constructor(private http: userService, private router: Router, private localStorageService: LocalStorageService, private componentCommunicationService: ComponentComunicationService) {
    this.isLoggedIn = this.localStorageService.getItem('userUid') !== null;
  }

  login() {
    this.http.getUsers().subscribe((users: user[]) => {
      const user = users.find(user => user.username === this.username.value);
      if (user && user.password === this.password.value) {
        // El usuario existe y la contraseña es correcta
        this.localStorageService.setItem('userUid', this.username.value);
        this.componentCommunicationService.refreshComponentEvent.emit();
        this.router.navigate(['/home']);

        this.welcomeMessage = `¡Bienvenido, ${user.username}!`;
        this.errorMessage = ''; // Limpiar el mensaje de error si existe
        this.isLoggedIn = true; // Establecer el estado de inicio de sesión a verdadero
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.welcomeMessage = ''; // Limpiar el mensaje de bienvenida si existe
        this.isLoggedIn = false; // Establecer el estado de inicio de sesión a falso
      }
    });
  }

  ngOnInit(): void {
    // Suscríbete al evento para actualizar la variable del localStorage
    this.componentCommunicationService.refreshComponentEvent.subscribe(() => {
      this.username.setValue(this.localStorageService.getItem('userUid') || '');
      this.isLoggedIn = !!this.username.value; // Verificar si hay un userUid almacenado
    });
  }
}
